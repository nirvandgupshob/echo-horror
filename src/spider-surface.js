import * as THREE from 'three';

const V=()=>new THREE.Vector3(),CELL=2;
const key=(x,y,z)=>`${x},${y},${z}`;
const radiusAt=(i)=>[.055,.035,.018][i];
const HULL=[[0,.27,-.28,.35],[0,.27,.22,.29],[.02,.29,.47,.31],[0,.27,.65,.26],[0,.17,-.66,.19],[0,.12,-.82,.12],[0,.17,.83,.14],[-.22,.17,-.65,.14],[.22,.17,-.65,.14],[-.24,.09,-.83,.10],[.24,.09,-.83,.10]];

// Exact distances to the visible static triangles, spatially indexed once.
// This includes rock lips, props and beams which are absent from the floor nav.
export class SpiderSurface{
 constructor(scene,exclude,level=null){
  this.level=level;this.doors=[];
  this.cells=new Map();this.trees=new Map();this.triangles=[];this.buffers=[];this.tri=new THREE.Triangle();this.closest=V();this.ray=new THREE.Ray();this.edge=V();this.tmp=V();this.delta=V();
  scene.updateMatrixWorld(true);
  const visit=o=>{
   if(o===exclude)return;
   if(o.isMesh&&!o.isInstancedMesh&&o.geometry&&o.material&&!o.material.transparent){
    const g=o.geometry,p=g.attributes.position,idx=g.index;
    // Static batches include ceilings, structural hospital walls and dressing.
    if(o.userData.staticBatch||o.parent?.name==='continuous-cave-shell'){
     for(let i=0;i<(idx?idx.count:p.count);i+=3){
      const points=[this.tri.a,this.tri.b,this.tri.c];for(let j=0;j<3;j++)points[j].fromBufferAttribute(p,idx?idx.getX(i+j):i+j).applyMatrix4(o.matrixWorld);this.add(...points);
     }
    }
   }
   for(const c of o.children||[])visit(c);
  };visit(scene);this.refreshDoors();
 }
 refreshDoors(){this.doors=(this.level?.doors||[]).filter(d=>d.closed&&d.box).map(d=>new THREE.Box3(new THREE.Vector3(d.box.minX,d.box.minY??0,d.box.minZ),new THREE.Vector3(d.box.maxX,d.box.maxY??2.7,d.box.maxZ)));}
 add(a,b,c){
  const normal=this.tri.set(a,b,c).getNormal(V());if(normal.lengthSq()<.5)return;
  const min=[Math.min(a.x,b.x,c.x),Math.min(a.y,b.y,c.y),Math.min(a.z,b.z,c.z)],max=[Math.max(a.x,b.x,c.x),Math.max(a.y,b.y,c.y),Math.max(a.z,b.z,c.z)],id=this.triangles.length;
  if(!(id%4096))this.buffers.push(new Float32Array(4096*18));const data=this.buffers[id>>12],offset=(id&4095)*18;
  data.set([...a,...b,...c,...normal,...min,...max],offset);this.triangles.push(id);
  for(let z=Math.floor(min[2]/CELL);z<=Math.floor(max[2]/CELL);z++)for(let y=Math.floor(min[1]/CELL);y<=Math.floor(max[1]/CELL);y++)for(let x=Math.floor(min[0]/CELL);x<=Math.floor(max[0]/CELL);x++){
   const k=key(x,y,z);if(!this.cells.has(k))this.cells.set(k,[]);this.cells.get(k).push(id);
  }
 }
 triangle(id){const d=this.buffers[id>>12],i=(id&4095)*18;this.tri.a.fromArray(d,i);this.tri.b.fromArray(d,i+3);this.tri.c.fromArray(d,i+6);return this.tri;}
 normal(id){const d=this.buffers[id>>12],i=(id&4095)*18;return new THREE.Vector3().fromArray(d,i+9);}
 tree(ids){
  const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
  for(const id of ids){const d=this.buffers[id>>12],i=(id&4095)*18;for(let axis=0;axis<3;axis++){min[axis]=Math.min(min[axis],d[i+12+axis]);max[axis]=Math.max(max[axis],d[i+15+axis]);}}
  const node={min,max};if(ids.length<=24){node.ids=ids;return node;}
  let axis=0;for(let k=1;k<3;k++)if(max[k]-min[k]>max[axis]-min[axis])axis=k;
  ids.sort((a,b)=>{const A=this.buffers[a>>12],B=this.buffers[b>>12],i=(a&4095)*18,j=(b&4095)*18;return A[i+12+axis]+A[i+15+axis]-B[j+12+axis]-B[j+15+axis];});
  const middle=ids.length>>1;node.left=this.tree(ids.slice(0,middle));node.right=this.tree(ids.slice(middle));return node;
 }
 nearby(a,b,r){
  const min=[Math.min(a.x,b.x)-r,Math.min(a.y,b.y)-r,Math.min(a.z,b.z)-r],max=[Math.max(a.x,b.x)+r,Math.max(a.y,b.y)+r,Math.max(a.z,b.z)+r],found=new Set(),result=[];
  const collect=ids=>{for(const id of ids){
   if(found.has(id))continue;const d=this.buffers[id>>12],i=(id&4095)*18;
   if(d[i+12]<=max[0]&&d[i+15]>=min[0]&&d[i+13]<=max[1]&&d[i+16]>=min[1]&&d[i+14]<=max[2]&&d[i+17]>=min[2]){found.add(id);result.push(id);}
  }};
  const query=node=>{if(node.min.some((v,i)=>v>max[i]||node.max[i]<min[i]))return;if(node.ids)collect(node.ids);else{query(node.left);query(node.right);}};
  for(let z=Math.floor(min[2]/CELL);z<=Math.floor(max[2]/CELL);z++)for(let y=Math.floor(min[1]/CELL);y<=Math.floor(max[1]/CELL);y++)for(let x=Math.floor(min[0]/CELL);x<=Math.floor(max[0]/CELL);x++){
   const k=key(x,y,z),ids=this.cells.get(k);if(!ids)continue;
   if(ids.length<80)collect(ids);else{if(!this.trees.has(k))this.trees.set(k,this.tree(ids.slice()));query(this.trees.get(k));}
  }return result;
 }
 // Segment/segment distance, including parallel edges and point degeneracies.
 edgeDistance(a,b,c,d){
  const u=this.edge.subVectors(b,a),v=this.tmp.subVectors(d,c),w=this.delta.subVectors(a,c),A=u.dot(u),B=u.dot(v),C=v.dot(v),D=u.dot(w),E=v.dot(w),den=A*C-B*B;
  let s=den>1e-12?THREE.MathUtils.clamp((B*E-C*D)/den,0,1):0,t=C>1e-12?THREE.MathUtils.clamp((B*s+E)/C,0,1):0;
  s=A>1e-12?THREE.MathUtils.clamp((B*t-D)/A,0,1):0;t=C>1e-12?THREE.MathUtils.clamp((B*s+E)/C,0,1):0;
  return w.addScaledVector(u,s).addScaledVector(v,-t).lengthSq();
 }
 capsuleClear(a,b,r){
  const direction=b.clone().sub(a),length=direction.length();if(length>.00001)this.ray.set(a,direction.divideScalar(length));
  for(const door of this.doors){const padded=door.clone().expandByScalar(r);if(padded.containsPoint(a)||padded.containsPoint(b)||length>.00001&&this.ray.intersectBox(padded,this.closest)&&this.closest.distanceToSquared(a)<=length*length)return false;}
  const rr=r*r;
  for(const id of this.nearby(a,b,r)){
   const tri=this.triangle(id);
   if(length>.00001&&this.ray.intersectTriangle(tri.a,tri.b,tri.c,false,this.closest)&&this.closest.distanceToSquared(a)<=length*length+1e-9)return false;
   tri.closestPointToPoint(a,this.closest);if(a.distanceToSquared(this.closest)<rr)return false;
   tri.closestPointToPoint(b,this.closest);if(b.distanceToSquared(this.closest)<rr)return false;
   if(this.edgeDistance(a,b,tri.a,tri.b)<rr||this.edgeDistance(a,b,tri.b,tri.c)<rr||this.edgeDistance(a,b,tri.c,tri.a)<rr)return false;
  }
  return true;
 }
 legClear(chain,scale=1,padding=0){return chain.slice(0,3).every((a,i)=>this.capsuleClear(a,chain[i+1],radiusAt(i)*scale+(i<2?padding:0)));}
 contact(origin,direction,reach){
  this.ray.set(origin,direction);const end=origin.clone().addScaledVector(direction,reach);let best=null;
  for(const box of this.doors)if(this.ray.intersectBox(box,this.closest)){
   const distance=origin.distanceTo(this.closest);if(distance>reach)continue;
   const p=this.closest,faces=[[Math.abs(p.x-box.min.x),new THREE.Vector3(-1,0,0)],[Math.abs(p.x-box.max.x),new THREE.Vector3(1,0,0)],[Math.abs(p.y-box.min.y),new THREE.Vector3(0,-1,0)],[Math.abs(p.y-box.max.y),new THREE.Vector3(0,1,0)],[Math.abs(p.z-box.min.z),new THREE.Vector3(0,0,-1)],[Math.abs(p.z-box.max.z),new THREE.Vector3(0,0,1)]].sort((a,b)=>a[0]-b[0]);
   if(faces[0][1].dot(direction)<0&&(!best||distance<best.distance))best={point:p.clone(),normal:faces[0][1],distance};
  }
  for(const id of this.nearby(origin,end,.001)){
   const tri=this.triangle(id),normal=this.normal(id);
   if(normal.dot(direction)>=-.02||!this.ray.intersectTriangle(tri.a,tri.b,tri.c,false,this.closest))continue;
   const distance=origin.distanceTo(this.closest);if(distance>reach||best&&best.distance<=distance)continue;
   best={point:this.closest.clone(),normal:normal.clone(),distance};
  }return best;
 }
 pushSphere(point,r){
  let best=null,nearest=Infinity;
  for(const box of this.doors){
   const closest=box.clampPoint(point,V()),delta=point.clone().sub(closest),distance=delta.length();
   if(box.containsPoint(point)){
    const faces=[[point.x-box.min.x,new THREE.Vector3(-1,0,0)],[box.max.x-point.x,new THREE.Vector3(1,0,0)],[point.y-box.min.y,new THREE.Vector3(0,-1,0)],[box.max.y-point.y,new THREE.Vector3(0,1,0)],[point.z-box.min.z,new THREE.Vector3(0,0,-1)],[box.max.z-point.z,new THREE.Vector3(0,0,1)]].sort((a,b)=>a[0]-b[0]);return faces[0][1].multiplyScalar(r+faces[0][0]+.003);
   }if(distance<r)return delta.divideScalar(Math.max(.00001,distance)).multiplyScalar(r-distance+.003);
  }
  for(const id of this.nearby(point,point,r+.12)){
   const tri=this.triangle(id),normal=this.normal(id);
   tri.closestPointToPoint(point,this.closest);const delta=point.clone().sub(this.closest),distance=delta.length();
   if(distance<nearest){nearest=distance;best={delta,normal};}
  }
  if(!best)return V();
  const signed=best.delta.dot(best.normal),penetration=r-(signed<-.0001?-nearest:nearest);
  return penetration>0?(signed<0?best.normal.clone():nearest>.0001?best.delta.divideScalar(nearest):best.normal.clone()).multiplyScalar(penetration+.003):V();
 }
 fitBody(position,quaternion,scale){
  const original=position.clone();
  // Overlapping spheres cover the abdomen, head, jaw and the exposed fang tips.
  for(let pass=0;pass<5;pass++){
   let changed=false;
   for(const[x,y,z,r]of HULL){const point=new THREE.Vector3(x,y,z).multiplyScalar(scale).applyQuaternion(quaternion).add(position),push=this.pushSphere(point,r*scale+.025);if(push.lengthSq()>1e-8){position.add(push);changed=true;}}
   if(!changed)break;
  }
  return position.distanceTo(original);
 }
 bodyClear(position,quaternion,scale){
  if(!HULL.every(([x,y,z,r])=>{
   const p=new THREE.Vector3(x,y,z).multiplyScalar(scale).applyQuaternion(quaternion).add(position);return this.capsuleClear(p,p,r*scale+.012);
  }))return false;
  const a=new THREE.Vector3(0,.27,-.7).multiplyScalar(scale).applyQuaternion(quaternion).add(position),b=new THREE.Vector3(0,.27,.65).multiplyScalar(scale).applyQuaternion(quaternion).add(position);
  return this.capsuleClear(a,b,.18*scale);
 }
}

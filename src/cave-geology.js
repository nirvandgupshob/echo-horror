import * as THREE from 'three';
import {mergeVertices} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import {Builder} from './builder.js';
import {caveField,pitField,pitRadius} from './cave-layout.js';
import {hospitalWeight} from './cave-style.js';
import {groundHeight} from './cave-terrain.js';
export {groundHeight} from './cave-terrain.js';
const V=(x,y,z)=>new THREE.Vector3(x,y,z),loose={collide:false,walk:true};
// Continuous deterministic layers, without the old per-cell vertical corrugation.
export const rockNoise=(x,y,z)=>Math.sin(x*.81+Math.sin(z*.73)*1.2+y*.58)*.48+Math.sin(z*1.43-y*.84+x*.29)*.29+Math.sin(x*3.1+z*2.67+y*2.24)*.13;
export const wallOffset=(x,y,z,t)=>Math.sin(t*Math.PI)*(.24+rockNoise(x,y,z)*.22);
export function wallPoint(level,x,z,t){
 const h=level.roofAt(x,z),y=THREE.MathUtils.lerp(groundHeight(x,z),h,t),eps=.05;
 const normal=V(caveField(x+eps,z)-caveField(x-eps,z),0,caveField(x,z+eps)-caveField(x,z-eps)).normalize();
 const offset=wallOffset(x,y,z,t);
 return {point:V(x-normal.x*offset,y,z-normal.z*offset),normal};
}
function clip(points){
 const result=[];
 const push=p=>{const last=result.at(-1);if(!last||Math.hypot(last.x-p.x,last.z-p.z)>1e-9)result.push(p);};
 for(let i=0;i<points.length;i++){
  const a=points[i],b=points[(i+1)%points.length];if(a.f>=0)push(a);
  if((a.f>=0)!==(b.f>=0)){const t=a.f/(a.f-b.f);push({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t,f:0});}
 }if(result.length>1&&Math.hypot(result[0].x-result.at(-1).x,result[0].z-result.at(-1).z)<1e-9)result.pop();
 return result;
}
export function buildCaveGeology(level){
 const B=new Builder(),parts=new Map(),walls=[],wallCells=new Map();
 const append=(key,verts)=>{const id=`${key}:${Math.floor(verts[0]/12)}:${Math.floor(verts[2]/12)}`;let p=parts.get(id);if(!p){p={key,positions:[]};parts.set(id,p);}p.positions.push(...verts);};
 const triangle=(key,a,b,c,roof=false)=>{
  const at=p=>[p.x,roof?level.roofAt(p.x,p.z):groundHeight(p.x,p.z),p.z];
  const verts=roof?[...at(a),...at(b),...at(c)]:[...at(a),...at(c),...at(b)];append(key,verts);
 };
 const step=.5;
 for(let z=.5;z<55.5;z+=step)for(let x=.5;x<63.5;x+=step){
  const corners=[[x,z],[x+step,z],[x+step,z+step],[x,z+step]].map(([x,z])=>({x,z,f:caveField(x,z)}));
  for(const ids of [[0,1,2],[0,2,3]]){
   const tri=ids.map(i=>corners[i]),inside=clip(tri);
   if(inside.length<3)continue;
   const cx=inside.reduce((a,p)=>a+p.x,0)/inside.length,cz=inside.reduce((a,p)=>a+p.z,0)/inside.length;
   // The intact hospital and original cab own their floor and ceiling once.
   if(hospitalWeight(Math.floor(cx)+.5,Math.floor(cz)+.5)>.97&&level.open(Math.floor(cx),Math.floor(cz)))continue;
   const zone=level.zones[Math.floor(cz)*64+Math.floor(cx)];
   const stone=zone===5?'geoSalt':zone===3?'geoDark':'geoRock';
   for(let i=1;i<inside.length-1;i++)triangle(stone,inside[0],inside[i],inside[i+1],true);
   const floor=clip(inside.map(p=>({...p,f:pitField(p.x,p.z)})));
   const floorKey=hospitalWeight(cx,cz)>.55?'linoleum':zone===2?'geoMud':zone===5?'geoSaltFloor':'geoEarth';
   for(let i=1;i<floor.length-1;i++)triangle(floorKey,floor[0],floor[i],floor[i+1]);
   const crossings=inside.filter(p=>Math.abs(p.f)<1e-9);
   if(crossings.length===2){
    let [a,b]=crossings;if(Math.hypot(a.x-b.x,a.z-b.z)<.001)continue;
    const n=wallPoint(level,(a.x+b.x)/2,(a.z+b.z)/2,.5).normal;
    if(-(b.z-a.z)*n.x+(b.x-a.x)*n.z<0)[a,b]=[b,a];
    const wall={x:(a.x+b.x)/2,z:(a.z+b.z)/2,vertices:[]};walls.push(wall);
    for(let bz=Math.floor((Math.min(a.z,b.z)-.6)/2);bz<=Math.floor((Math.max(a.z,b.z)+.6)/2);bz++)for(let bx=Math.floor((Math.min(a.x,b.x)-.6)/2);bx<=Math.floor((Math.max(a.x,b.x)+.6)/2);bx++){
      const key=`${bx},${bz}`;if(!wallCells.has(key))wallCells.set(key,[]);wallCells.get(key).push(wall);
    }
    const levels=14;
    for(let j=0;j<levels;j++){
     const p=wallPoint(level,a.x,a.z,j/levels).point,q=wallPoint(level,b.x,b.z,j/levels).point,r=wallPoint(level,b.x,b.z,(j+1)/levels).point,s=wallPoint(level,a.x,a.z,(j+1)/levels).point;
     append(stone,[...p,...q,...r,...p,...r,...s]);wall.vertices.push(...p,...q,...r,...s);
    }
    wall.vertices=new Float32Array(wall.vertices);
   }
  }
 }
 // A deep, irregular shaft with rock shelves, not the sides of missing cubes.
 const rim=[],segments=96;
 for(let i=0;i<=segments;i++){
  const a=i/segments*Math.PI*2;const r=pitRadius(a);rim.push(V(31+Math.cos(a)*5.25*r,groundHeight(31+Math.cos(a)*5.25*r,27+Math.sin(a)*6.1*r),27+Math.sin(a)*6.1*r));
 }
 for(let i=0;i<segments;i++)for(let j=0;j<12;j++){
  const at=(p,k)=>{const depth=k/12*14,scale=1+Math.min(1,k/2)*(.08*Math.sin(k*.8+i*.3)+depth*.012);return V(31+(p.x-31)*scale,p.y-depth,27+(p.z-27)*scale);};
  const a=at(rim[i],j),b=at(rim[i+1],j),c=at(rim[i+1],j+1),d=at(rim[i],j+1);append('geoDark',[...a,...b,...c,...a,...c,...d]);
 }
 // Broken strata and talus give the perimeter a physical silhouette.
 const boulder=(x,z,w,h,d,seed)=>{
  const g=new THREE.IcosahedronGeometry(1,1),p=g.attributes.position;
  for(let i=0;i<p.count;i++){const a=p.getX(i),b=p.getY(i),c=p.getZ(i),k=1+.12*Math.sin(a*7+c*9+seed);p.setXYZ(i,a*w*k,Math.max(0,(b+1)*h*.5),c*d*k);}g.computeVertexNormals();
  B.add(g,{...loose,key:'geoRock',pos:[x,groundHeight(x,z),z]});g.dispose();
 };
 for(let i=0;i<walls.length;i+=17){const a=walls[i];if(hospitalWeight(a.x,a.z)>.1)continue;const n=wallPoint(level,a.x,a.z,.3).normal;boulder(a.x+n.x*.25,a.z+n.z*.25,.5+(i%3)*.22,.8+(i%5)*.32,.55+(i%4)*.15,i);}
 for(let i=0;i<40;i++){const a=i/40*Math.PI*2,r=pitRadius(a)+.055;const x=31+Math.cos(a)*5.25*r,z=27+Math.sin(a)*6.1*r;boulder(x,z,.18+(i%3)*.08,.08+(i%4)*.045,.2+(i%2)*.13,i);}
 // A few roof-to-floor pillars, placed in the bays rather than on the routes.
 const pillars=[];
 for(const [x,z,r]of [[8,45,.62],[18,43,.55],[26,5,.6],[39,7,.65],[28,46,.5],[38,47,.55],[59,36,.45]]){
  const base=groundHeight(x,z),h=level.roofAt(x,z)-base+.2,g=new THREE.CylinderGeometry(r*.7,r,h,12,14),p=g.attributes.position;
  for(let i=0;i<p.count;i++){const y=p.getY(i),k=1+.13*rockNoise(x+p.getX(i),y,z+p.getZ(i));p.setXYZ(i,p.getX(i)*k,y+h/2,p.getZ(i)*k);}g.computeVertexNormals();B.add(g,{...loose,key:'geoRock',pos:[x,groundHeight(x,z),z]});g.dispose();pillars.push({minX:x-r,maxX:x+r,minZ:z-r,maxZ:z+r,minY:base,maxY:base+h});
 }
 for(const {key,positions}of parts.values()){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));const smooth=mergeVertices(g,1e-4);smooth.computeVertexNormals();B.add(smooth,{...loose,key});smooth.dispose();g.dispose();}
 const group=B.build(level.mat,{});group.name='continuous-cave-shell';level.scene.add(group);
 level.geology={group,walls,wallCells,pillars,triangleCount:[...parts.values()].reduce((n,a)=>n+a.positions.length/9,0)};
 return group;
}

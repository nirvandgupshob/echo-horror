import test from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';
import {SpiderSurface} from '../src/spider-surface.js';
import {SpiderPath} from '../src/spider-path.js';
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
function room(){
 const s=new SpiderSurface(new THREE.Group());
 // Air lies at x>0, below y=3, above y=0.
 for(const points of [
  [[0,0,-8],[0,3,-8],[0,3,8]],[[0,0,-8],[0,3,8],[0,0,8]],
  [[0,3,-8],[8,3,-8],[8,3,8]],[[0,3,-8],[8,3,8],[0,3,8]],
  [[0,0,-8],[8,0,8],[8,0,-8]],[[0,0,-8],[0,0,8],[8,0,8]],
 ])s.add(...points.map(p=>V(...p)));
 return s;
}
test('capsules catch crossed walls even when both endpoints are clear of the surface',()=>{
 const s=room();assert.equal(s.capsuleClear(V(-1,1,0),V(1,1,0),.04),false);
 assert.equal(s.capsuleClear(V(.025,1,-2),V(.025,1,2),.05),false,'limb thickness matters');
 assert.equal(s.capsuleClear(V(.2,1,-2),V(.2,1,2),.05),true);
 assert.equal(s.capsuleClear(V(1,2.98,-1),V(3,2.98,1),.05),false,'roof contact');
});
test('capsule/triangle edge and vertex grazing are detected without a line hit',()=>{
 const s=new SpiderSurface(new THREE.Group());s.add(V(0,0,0),V(1,0,0),V(0,1,0));
 assert.equal(s.capsuleClear(V(-.02,.2,.02),V(-.02,.8,.02),.04),false);
 assert.equal(s.capsuleClear(V(-.02,-.02,.02),V(-.02,-.02,1),.04),false);
 assert.equal(s.capsuleClear(V(-.2,.2,.2),V(-.2,.8,.2),.04),true);
});
test('a toe planted outside rock does not exempt a crossing knee or femur',()=>{
 const s=room();assert.equal(s.legClear([V(.3,1,0),V(-.1,1.5,0),V(.3,2,0),V(.03,2.2,0)]),false);
 assert.equal(s.legClear([V(.4,1,0),V(.8,1.5,0),V(.3,2,0),V(.032,2.2,0)]),true);
});
test('body fit clears the whole abdomen and fangs at a wall/roof bend',()=>{
 const s=room(),scale=1.28;
 for(const angle of [0,.3,.7,1.2,Math.PI/2]){
  const normal=V(Math.cos(angle),-Math.sin(angle),0),q=new THREE.Quaternion().setFromUnitVectors(V(0,1,0),normal),p=V(.1+Math.sin(angle)*.8,2.1+Math.sin(angle)*.8,0);
  s.fitBody(p,q,scale);assert.equal(s.bodyClear(p,q,scale),true,`bend ${angle}`);
 }
});
test('solid mesh index includes structural batches and omits transparent overlays and the spider',()=>{
 const group=new THREE.Group(),mesh=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial());mesh.userData.staticBatch=true;group.add(mesh);
 const overlay=mesh.clone();overlay.material=new THREE.MeshBasicMaterial({transparent:true});group.add(overlay);
 const excluded=new THREE.Group();excluded.add(mesh.clone());group.add(excluded);
 const s=new SpiderSurface(group,excluded);assert.equal(s.triangles.length,12);
});
test('ceiling route detours around a roof obstacle without using ground navigation',()=>{
 const obstacle=new THREE.Box3(V(48.8,4.8,17),V(50.2,6,22)),s={capsuleClear(a,b,r){return !new THREE.Box3().setFromPoints([a,b]).expandByScalar(r).intersectsBox(obstacle);}},level={roofAt:()=>6,findPath(){throw new Error('Ground path must not be used');}};
 const nav=new SpiderPath(level,s),path=nav.find(V(45.5,5.5,19.5),V(53.5,5.5,19.5));assert.ok(path.length>8);
 for(let i=1;i<path.length;i++){const a=path[i-1].clone(),b=path[i].clone();a.y=b.y=5.35;assert.equal(s.capsuleClear(a,b,.55),true);}
});

test('closing and opening a dynamic door changes capsule clearance without rebuilding the cave index',()=>{
 const door={closed:true,box:{minX:1,maxX:1.1,minY:0,maxY:2.7,minZ:-1,maxZ:1}},s=new SpiderSurface(new THREE.Group(),null,{doors:[door]});
 assert.equal(s.capsuleClear(V(.5,1,0),V(1.5,1,0),.05),false);
 assert.equal(s.capsuleClear(V(.5,3,0),V(1.5,3,0),.05),true);
 assert.ok(s.contact(V(.5,1,0),V(1,0,0),2));
 door.closed=false;s.refreshDoors();assert.equal(s.capsuleClear(V(.5,1,0),V(1.5,1,0),.05),true);
});

test('spatial tree returns the same triangle candidates as a direct bounds scan',()=>{
 const s=new SpiderSurface(new THREE.Group());
 for(let i=0;i<240;i++){const x=(i%12)*.13,z=Math.floor(i/12)*.08;s.add(V(x,1,z),V(x+.1,1,z),V(x,1,z+.06));}
 for(let j=0;j<20;j++){
  const a=V(j*.067,.95,.12+j*.03),b=a.clone().add(V(.14,.1,.17)),r=.03,lo=a.clone().min(b).addScalar(-r),hi=a.clone().max(b).addScalar(r);
  const expected=[];for(const id of s.triangles){const d=s.buffers[id>>12],i=(id&4095)*18;if(d[i+12]<=hi.x&&d[i+15]>=lo.x&&d[i+13]<=hi.y&&d[i+16]>=lo.y&&d[i+14]<=hi.z&&d[i+17]>=lo.z)expected.push(id);}
  assert.deepEqual(s.nearby(a,b,r).sort((a,b)=>a-b),expected);
 }
 assert.ok(s.trees.size>0,'dense cells use the triangle tree');
});

test('a locally blocked roof waypoint is excluded from the next route',()=>{
 const surface={capsuleClear:()=>true},level={roofAt:()=>6},nav=new SpiderPath(level,surface),from=V(45.5,5,19.5),to=V(53.5,5,19.5),first=nav.find(from,to);
 assert.ok(first.length);const blocked=first[3];nav.block(blocked);const next=nav.find(from,to);assert.ok(next.length);assert.ok(next.every(p=>p.x!==blocked.x||p.z!==blocked.z));
});

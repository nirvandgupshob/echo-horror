import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {CaveLevel} from '../src/cave-level.js';
import {Builder} from '../src/builder.js';
import * as P from '../src/props.js';
import {TORCH_RACK} from '../src/cave-dressing.js';

class GeometryCave extends CaveLevel{
  materials(){this.mat=new Proxy({},{get:(o,k)=>o[k]||=(new THREE.MeshBasicMaterial({side:THREE.DoubleSide}))});this.lineMat={};}
  buildWater(){} buildDecals(){}
  buildProps(){this.architecture=this.scene.children.slice();super.buildProps();}
  buildDynamic(){this.gateDoor={closed:true,box:{minX:49.25,maxX:51.75,minZ:47.7,maxZ:47.9}};this.doors.push(this.gateDoor);}
}
const level=new GeometryCave(new THREE.Scene());

test('torch shelf has four floor-to-top uprights and a real resting surface',()=>{
  const b=new Builder();P.shelf(b.at(0,0,0),TORCH_RACK.width,TORCH_RACK.height,TORCH_RACK.depth,{fill:0});
  const boxes=Object.values(b.surfaces).flat().map(g=>{g.computeBoundingBox();return g.boundingBox;});
  const legs=boxes.filter(b=>b.min.y<.001&&b.max.y>1.19);assert.ok(legs.length>=4);
  assert.ok(boxes.some(b=>Math.abs(b.max.y-TORCH_RACK.surface)<1e-6));
  assert.ok(Math.abs(TORCH_RACK.torchY-.043-TORCH_RACK.surface)<1e-9);
  assert.equal(level.blockedPoint(TORCH_RACK.x,TORCH_RACK.z,.3),true);
});
test('every authored floor assembly rests on the floor and is outside the pit',()=>{
  const floor=level.placements.filter(p=>p.support==='floor'||p.support==='rail');assert.ok(floor.length>45);
  for(const p of floor){
    assert.ok(level.open(Math.floor(p.x),Math.floor(p.z))&&!level.isPit(p.x,p.z),p.id);
    assert.ok(p.bounds.min.every(Number.isFinite)&&p.bounds.max.every(Number.isFinite),p.id);
    assert.ok(p.bounds.max[1]>p.supportY&&p.bounds.min[1]<=p.supportY+.035,`${p.id}: ground gap ${p.bounds.min[1]}`);
  }
  for(const type of ['collapsed-ward','dialysis-shrine','mineral-iv','calcite-organ','rib-arch'])assert.equal(level.modelCounts[type],undefined,type);
});
test('wall equipment is attached to the rendered wall, including its rock displacement',()=>{
  const ray=new THREE.Raycaster();level.scene.updateMatrixWorld(true);
  for(const p of level.placements.filter(p=>p.support==='wall')){
    const {nx,nz}=p.wall;
    ray.set(new THREE.Vector3(p.x+nx,p.y===0?1.4:p.y,p.z+nz),new THREE.Vector3(-nx,0,-nz));ray.far=2;
    const hit=ray.intersectObjects(level.architecture,true).find(h=>Math.abs(h.face?.normal.y||0)<.5);
    assert.ok(hit,p.id);assert.ok(Math.abs(hit.distance-1.035)<.005,`${p.id}: wall gap ${hit.distance}`);
  }
});
test('reception partition has a usable doorway, and the exit bulkhead cannot be bypassed',()=>{
  assert.equal(level.blockedPoint(10,15.6,.3),true);assert.equal(level.blockedPoint(12.4,15.6,.3),false);
  for(let x=44;x<=56;x+=.125)assert.equal(level.blockedPoint(x,47.8,.3),true,`closed bulkhead at ${x}`);
  level.gateDoor.closed=false;assert.equal(level.blockedPoint(50.5,47.8,.3),false);level.gateDoor.closed=true;
});
test('new furniture leaves station routes, both pit banks and all bed exits usable',()=>{
  let from={x:8.5,z:9.5};
  for(const to of [{x:13.5,z:25.8},{x:25.5,z:27.5},{x:37.5,z:27.5},{x:49.5,z:18.4},{x:50.5,z:46.5}]){
    assert.ok(level.findPath(from,to)?.length,JSON.stringify(to));from=to;
  }
  const beds=level.items.filter(it=>it.type==='locker'&&it.low);assert.equal(beds.length,6);
  for(const bed of beds)assert.equal(level.blockedPoint(bed.front.x,bed.front.z,.3)||level.isPit(bed.front.x,bed.front.z),false,bed.id);
  for(const curve of level.haulTracks)for(let i=0;i<=100;i++){
    const p=curve.getPointAt(i/100);assert.ok(level.open(Math.floor(p.x),Math.floor(p.z))&&!level.isPit(p.x,p.z),'track has a floor');
  }
});

test('lamps and hanging bodies meet the rendered ceiling rather than an estimated roof height',()=>{
  const ray=new THREE.Raycaster();
  for(const p of [...level.placements.filter(p=>p.support==='ceiling'),...level.hangingMiners]){
    ray.set(new THREE.Vector3(p.x,2,p.z),new THREE.Vector3(0,1,0));ray.far=16;
    const hit=ray.intersectObjects(level.architecture,true).find(h=>Math.abs(h.face?.normal.y||0)>.5);
    assert.ok(hit);assert.ok(Math.abs(hit.point.y-p.roof)<1e-5);
  }
});

test('new equipment occupies separate floor footprints instead of intersecting other furniture',()=>{
  const additional=new Set(['autoclave','compressor','cable-reel','oil-drum','tool-crate','ore-sacks','transformer','medical-prep-table','lab-sample-table']);
  const floor=level.placements.filter(p=>p.size);
  const rect=p=>{const[w,d]=p.size,c=Math.abs(Math.cos(p.angle)),s=Math.abs(Math.sin(p.angle));return [p.x-(c*w+s*d)/2,p.z-(s*w+c*d)/2,p.x+(c*w+s*d)/2,p.z+(s*w+c*d)/2];};
  for(let i=0;i<floor.length;i++)for(const b of floor.slice(0,i)){
    const a=floor[i];if(!additional.has(a.id)&&!additional.has(b.id))continue;
    const r=rect(a),s=rect(b),x=Math.min(r[2],s[2])-Math.max(r[0],s[0]),z=Math.min(r[3],s[3])-Math.max(r[1],s[1]);
    assert.ok(x<.04||z<.04,`${a.id} overlaps ${b.id}`);
  }
});

test('terrain collision height matches the actual rendered floor on the new routes',()=>{
 const ray=new THREE.Raycaster();level.scene.updateMatrixWorld(true);let checked=0;
 for(const[x,z]of [[24,18],[32,10],[28,7],[18,41],[11,42],[30,43],[36,44],[58,33],[40,30],[24,28]]){
  ray.set(new THREE.Vector3(x,3,z),new THREE.Vector3(0,-1,0));ray.far=5;
  const hits=ray.intersectObject(level.geology.group,true).filter(h=>h.face.normal.y>.5&&Math.abs(h.point.y-level.floorHeightAt(x,z))<.025);
  assert.ok(hits.length,`floor support ${x},${z}`);checked++;
 }
 assert.equal(checked,10);
 for(const to of [{x:32,z:8.2},{x:13,z:48.7},{x:32,z:46.3},{x:58,z:35}])assert.ok(level.findPath({x:8.5,z:9.5},to)?.length,`new objective ${to.x},${to.z}`);
});

test('working stance routes around the southern feeder cabinet from the rear and both sides',async()=>{
  const {CaveChapter}=await import('../src/cave-chapter.js');
  const target=new THREE.Vector3(13,2.1,47.91),normal=new THREE.Vector3(0,0,1),stance=target.clone().addScaledVector(normal,.62);
  for(const[x,z]of [[13,46.5],[11.8,47.5],[14.2,47.5],[13,48.8]]){
    const p={pos:new THREE.Vector3(x,0,z),yaw:0,pitch:0,eye:1.65},c=Object.assign(Object.create(CaveChapter.prototype),{player:p,level});
    for(let i=0;i<300;i++){
      const before=p.pos.clone();c.alignWork(target,normal,1/60);
      assert.ok(p.pos.distanceTo(before)<=2/60+1e-7,'bounded approach');
      assert.equal(level.blockedPoint(p.pos.x,p.pos.z,.3),false,'body stays outside furniture');
    }
    assert.ok(Math.hypot(p.pos.x-stance.x,p.pos.z-stance.z)<.06,`reachable from ${x},${z}`);
  }
});

test('cave collision meets visible rock, including floor outside the obsolete cell boundary',()=>{
 const ray=new THREE.Raycaster();level.scene.updateMatrixWorld(true);let beyondOldCells=false;
 for(const[x,z,dx,dz]of [[32,4,0,-1],[58,35,1,0],[31,16,0,-1]]){
  const p=new THREE.Vector3(x,0,z);
  for(let i=0;i<200;i++){p.x+=dx*.025;p.z+=dz*.025;level.collidePlayer(p,.3);}
  beyondOldCells||=!level.open(Math.floor(p.x),Math.floor(p.z));
  ray.set(new THREE.Vector3(p.x,level.floorHeightAt(p.x,p.z)+1.2,p.z),new THREE.Vector3(dx,0,dz));ray.far=3;
  const hit=ray.intersectObject(level.geology.group,true)[0];assert.ok(hit);assert.ok(hit.distance>.15&&hit.distance<.5,`visible contact gap ${hit.distance}`);
  assert.equal(level.blockedPoint(p.x,p.z,.3),false);
 }
 assert.ok(beyondOldCells,'the old conservative grid must not form invisible barriers');
});

test('hospital-to-cave seam and low tunnel block exterior sightlines at real eye heights',()=>{
 const ray=new THREE.Raycaster();level.scene.updateMatrixWorld(true);
 for(const[x,z]of [[18.6,18.8],[19.3,18.5],[20.5,17],[18,37],[32,7],[58,35]])for(let i=0;i<32;i++)for(const pitch of [0,.65,1.2]){
  const a=i/32*Math.PI*2,eye=level.ceilAt(Math.floor(x),Math.floor(z))<1.7?.95:1.65;
  ray.set(new THREE.Vector3(x,level.floorHeightAt(x,z)+eye,z),new THREE.Vector3(Math.sin(a)*Math.cos(pitch),Math.sin(pitch),Math.cos(a)*Math.cos(pitch)));ray.far=100;
  assert.ok(ray.intersectObjects(level.architecture,true).some(h=>h.object.isMesh),`open shell at ${x},${z}; angle ${a}; pitch ${pitch}`);
 }
});

test('hand contact uses nearby rendered rock instead of obsolete solid grid cells',async()=>{
 const {HandContact}=await import('../src/hand-contact.js'),solver=new HandContact(level),ray=new THREE.Raycaster();level.scene.updateMatrixWorld(true);
 const origin=new THREE.Vector3(32,level.floorHeightAt(32,1.7)+1.1,1.7),direction=new THREE.Vector3(0,0,-1);solver.collect(origin);
 const hit=solver.cast(origin,direction,1.4);assert.ok(hit?.rock);
 ray.set(origin,direction);ray.far=1.4;const rendered=ray.intersectObject(level.geology.group,true)[0];assert.ok(rendered);assert.ok(hit.point.distanceTo(rendered.point)<1e-5);
 assert.ok(hit.normal.dot(direction)<-.8);assert.equal(solver.edge(hit),null);
});

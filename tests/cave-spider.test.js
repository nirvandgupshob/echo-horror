import test from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';
import {inFlashlight,spiderModel,CaveSpider} from '../src/cave-spider.js';
import {advanceSpiderThreat} from '../src/spider-threat.js';
import {SPIDER_LEGS,solveSpiderLeg} from '../src/spider-model.js';
import {spiderTravelSpeed,advanceSpiderSpeed,steerSpiderHeading,limitSpiderPose} from '../src/spider-motion.js';
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
test('stalking has no timer bursts and accelerates/brakes consistently across frame rates',()=>{
 const distances=[];
 for(const fps of [30,60,144]){let speed=0,distance=0;
  for(let i=0;i<fps*6;i++){
   const state=i<fps*4?'stalk':'warning',target=spiderTravelSpeed({state,mode:'wall'}),previous=speed;
   speed=advanceSpiderSpeed(speed,target,1/fps);distance+=speed/fps;
   assert.ok(Math.abs(speed-previous)<=3.5/fps+1e-8,'bounded acceleration and braking');
   if(i>fps&&i<fps*4)assert.equal(speed,.65,'steady crawl, independent of clock');
  }
  assert.equal(speed,0,'warning comes to a full stop');distances.push(distance);
 }
 assert.ok(Math.max(...distances)-Math.min(...distances)<.03);
});
test('a route reversal steers through a bounded turn before allowing forward travel',()=>{
 const heading=V(0,1,0),normal=V(0,0,1),desired=V(0,-1,0);let first;
 for(let i=0;i<240;i++){
  const before=heading.clone(),alignment=steerSpiderHeading(heading,normal,normal,desired,1/60);
  if(i===0)first=alignment;
  assert.ok(before.angleTo(heading)<=.95/60+1e-7);
 }
 assert.equal(first,0);assert.ok(heading.dot(desired)>.9999);
});
test('spider only fears a powered forward beam within useful range',()=>{
 const eye=V(0,1.65,0),forward=V(0,0,-1);
 assert.equal(inFlashlight(V(0,2,-7),eye,forward,.8),true);
 for(const point of [V(0,2,3),V(0,2,-16),V(6,2,-7)])assert.equal(inFlashlight(point,eye,forward,.8),false);
 assert.equal(inFlashlight(V(0,2,-7),eye,forward,0),false);
});

const threat=()=>({exposure:0,retreatT:0,soundT:0,warning:0,calls:0,repels:0,state:'stalk'});
test('a visible spider telegraphs its call for 1.8 seconds at any frame rate',()=>{
 for(const fps of [30,60,144]){
  const s=threat(),events=[];
  for(let n=0;n<fps*2;n++){const event=advanceSpiderThreat(s,1/fps,{lit:false,visible:true,distance:6});if(event)events.push([event,n/fps]);}
  assert.equal(events[0][0],'warn');assert.equal(events[1][0],'call');assert.ok(events[1][1]>=1.8-1/fps-.001);assert.equal(events.length,2);
 }
});
test('a steady beam interrupts the warning and grants a full quiet escape window',()=>{
 const s=threat();advanceSpiderThreat(s,1,{lit:false,visible:true,distance:6});assert.equal(s.state,'warning');
 const events=[];for(let i=0;i<40;i++){const e=advanceSpiderThreat(s,1/60,{lit:true,visible:true,distance:6});if(e)events.push(e);}
 assert.deepEqual(events,['repel']);assert.equal(s.repels,1);assert.equal(s.warning,0);
 for(let i=0;i<420;i++)assert.equal(advanceSpiderThreat(s,1/60,{lit:false,visible:true,distance:6}),null);
 assert.ok(s.retreatT>0);assert.equal(s.state,'flee');assert.equal(s.calls,0);
});
test('the spider cannot call through a wall, from another room or at a hidden player',()=>{
 for(const sense of [{visible:false,distance:6},{visible:true,distance:18},{visible:true,distance:6,hidden:true}]){
  const s=threat();for(let i=0;i<1800;i++)assert.equal(advanceSpiderThreat(s,1/60,{lit:false,...sense}),null);
  assert.equal(s.warning,0);assert.equal(s.state,'stalk');
 }
});
test('spider gait keeps stance feet on a wall while the body advances; all joints remain finite',()=>{
 const model=spiderModel(new THREE.MeshBasicMaterial()),scene=new THREE.Scene();scene.add(model.root);
 const s=Object.assign(Object.create(CaveSpider.prototype),{model,root:model.root,normal:V(0,0,1),ray:new THREE.Raycaster(),level:{geology:{group:new THREE.Group()}},clock:.8,retreatT:0,feet:[]});
 s.root.quaternion.setFromUnitVectors(V(0,1,0),s.normal);s.animate(1/60);
 const planted=s.feet[0].point.clone();s.clock+=.02;s.root.position.y+=.04;s.animate(1/60);
 assert.deepEqual(s.feet[0].point,planted,'stance does not slide with the torso');
 assert.equal(model.legs.count,24);assert.equal(model.joints.count,16);assert.equal(model.tips.count,8);
 assert.ok(Array.from(model.legs.instanceMatrix.array).every(Number.isFinite));
});

test('spider silhouette has a narrow two-part body and eight long splayed legs',()=>{
 const model=spiderModel(new THREE.MeshBasicMaterial());
 const abdomen=new THREE.Box3().setFromObject(model.abdomen),thorax=new THREE.Box3().setFromObject(model.thorax);
 assert.ok(abdomen.min.z>thorax.max.z,'abdomen is separated by a pedicel');
 assert.ok(abdomen.getSize(V()).z>abdomen.getSize(V()).x*1.3,'soft elongated abdomen');
 const width=Math.max(...SPIDER_LEGS.map(s=>s.foot[0]))*2*model.root.scale.x;
 assert.ok(width/abdomen.getSize(V()).x>5,'leg span dominates the body silhouette');
 for(let i=0;i<8;i++){
  const side=i<4?-1:1,s=SPIDER_LEGS[i%4],hip=V(side*s.hip[0],s.hip[1],s.hip[2]),foot=V(side*s.foot[0],0,s.foot[2]);
  const chain=solveSpiderLeg(hip,foot,i);assert.ok(chain[1].y>hip.y+.15,'elbow arches above the body');
  assert.ok(Math.abs(chain[1].distanceTo(hip)-s.femur)<1e-6,'femur retains its length');
  assert.ok(Math.abs(chain[2].distanceTo(chain[1])-s.tibia)<1e-6,'tibia retains its length');
  assert.equal(chain.at(-1).y,0,'tarsus touches the surface');
 }
});

test('spider surfaces receive live echo, flashlight and shadow updates together',()=>{
 const source=new THREE.ShaderMaterial({uniforms:{uTint:{value:new THREE.Color('white')},uLampOrigin:{value:new THREE.Vector4()},uLampShadow:{value:null},uP:{value:[]},uTime:{value:0}}});
 const model=spiderModel(source),materials=new Set();model.root.traverse(o=>{if(o.material)materials.add(o.material);});
 assert.ok(materials.size>=3);
 source.uniforms.uLampOrigin.value.w=1;source.uniforms.uTime.value=10;source.uniforms.uLampShadow.value={frame:7};
 for(const m of materials){assert.equal(m.uniforms.uLampOrigin.value.w,1);assert.equal(m.uniforms.uTime.value,10);assert.equal(m.uniforms.uLampShadow.value.frame,7);assert.equal(m.uniforms.uP,source.uniforms.uP);assert.notEqual(m.uniforms.uTint,source.uniforms.uTint);}
});

test('a checkpoint restores wall, ceiling and transition poses without snapping to a new surface',()=>{
 const scene=new THREE.Scene(),level={scene,geology:{walls:[{x:56.86,z:18.67}]},roofAt:()=>4,castRock:()=>null};
 const model=spiderModel(new THREE.MeshBasicMaterial());scene.add(model.root);
 const s=Object.assign(Object.create(CaveSpider.prototype),{model,root:model.root,ray:new THREE.Raycaster(),level});
 for(const mode of ['wall','corner','ceiling','return']){
  s.reset();s.activate();s.mode=mode;s.cornerT=.37;s.cornerDirection=-1;s.returnT=.42;s.returnFrom=V(55,3.5,18);
  s.root.position.set(56.5,3.3,18.65);s.normal.set(-1,-1,0).normalize();s.heading.set(1,-1,0).normalize();
  const saved=s.snapshot();s.reset();s.activate(saved);
  assert.equal(s.mode,mode);assert.deepEqual(s.root.position.toArray(),saved.pos);assert.equal(s.cornerT,.37);assert.equal(s.returnT,.42);
  assert.ok(V(0,1,0).applyQuaternion(s.root.quaternion).dot(s.normal)>.99);
 }
});

function crawler(){
 const scene=new THREE.Scene(),level={scene,geology:{walls:[{x:56.86,z:18.67}],group:new THREE.Group()},roofAt:()=>6.5,castRock:()=>null};
 const model=spiderModel(new THREE.MeshBasicMaterial());scene.add(model.root);
 const s=Object.assign(Object.create(CaveSpider.prototype),{model,root:model.root,ray:new THREE.Raycaster(),level,audio:{play(){}},game:{noise(){}}});
 s.reset();s.visibleFrom=()=>false;s.activate();s.introT=0;s.bankT=100;s.planT=100;
 const player={pos:V(49.5,1,18.8),camera:{position:V(49.5,2,18.8)},yaw:0};
 const lamp={origin:{value:new THREE.Vector4(49.5,2,18.8,0)},direction:{value:new THREE.Vector4(1,0,0,0)}};
 s.plan=()=>{s.path=[V(50,0,18.8)];s.planT=100;};
 return {s,player,lamp};
}
test('wall/ceiling transitions preserve foot objects, bounded torso travel and continuous surface orientation',()=>{
 for(const fps of [30,60,144]){
  const {s,player,lamp}=crawler(),feet=[...s.feet],modes=new Set();let maxSpeed=0,maxTurn=0,maxFoot=0;
  for(let i=0;i<fps*12;i++){
   const before=s.root.position.clone(),rotation=s.root.quaternion.clone(),points=s.feet.map(f=>f.point.clone());
   s.update(1/fps,player,lamp);modes.add(s.mode);
   maxSpeed=Math.max(maxSpeed,before.distanceTo(s.root.position)*fps);maxTurn=Math.max(maxTurn,rotation.angleTo(s.root.quaternion)*fps);
   for(let j=0;j<8;j++){assert.equal(s.feet[j],feet[j],'surface switch retains anchors');maxFoot=Math.max(maxFoot,points[j].distanceTo(s.feet[j].point)*fps);}
   assert.ok(Array.from(s.model.legs.instanceMatrix.array).every(Number.isFinite));
   const bones=s.model.legs.instanceMatrix.array;
   for(let leg=0;leg<8;leg++)for(let j=0;j<2;j++){
    const k=(leg*3+j)*16,length=Math.hypot(bones[k+4],bones[k+5],bones[k+6]);
    assert.ok(Math.abs(length-SPIDER_LEGS[leg%4][j===0?'femur':'tibia'])<1e-5,'bones retain length during a surface turn');
   }
  }
  assert.ok(modes.has('corner')&&modes.has('ceiling'),[...modes].join(','));
  assert.ok(maxSpeed<1.5,`torso discontinuity: ${maxSpeed}`);assert.ok(maxTurn<2.2,`orientation discontinuity: ${maxTurn}`);
  assert.ok(maxFoot<7,`foot discontinuity: ${maxFoot}`);
 }
});
test('a step finishes continuously when the torso stops; warning lift does not move its rock anchor',()=>{
 const {s}=crawler();s.strideSpeed=.65;s.velocity.set(0,.65,0);s.root.position.y+=.25;s.animate(1/60);
 assert.ok(s.feet.some(f=>f.swing));const targets=s.feet.map(f=>f.to.clone());s.strideSpeed=0;s.velocity.set(0,0,0);
 for(let i=0;i<30;i++)s.animate(1/60);
 assert.ok(s.feet.every(f=>!f.swing));
 for(let i=0;i<8;i++)if(((i%2)+(i>=4?1:0))%2===0)assert.deepEqual(s.feet[i].point,targets[i],'started steps finish at their chosen contacts');
 const settled=s.feet.map(f=>f.point.clone());
 s.warning=1.5;for(let i=0;i<30;i++)s.animate(1/60);
 for(let i=0;i<8;i++)assert.deepEqual(s.feet[i].point,settled[i],'mouth/foreleg tell preserves planted anchors');
});

test('rough surface projection cannot trigger endless stationary stepping',()=>{
 const {s}=crawler();s.contact=target=>target.addScaledVector(s.normal,.38);s.feet=[];s.animate(0);
 const anchors=s.feet.map(f=>f.point.clone());
 for(let i=0;i<300;i++){s.clock+=1/60;s.animate(1/60);assert.ok(s.feet.every(f=>!f.swing));}
 for(let i=0;i<8;i++)assert.deepEqual(s.feet[i].point,anchors[i]);
});
test('unreachable footholds release the toe without stretching either long bone',()=>{
 for(let i=0;i<8;i++)for(const point of [V(-3,1,4),V(2,-1,-4),V(0,.2,0)]){
  const spec=SPIDER_LEGS[i%4],hip=V((i<4?-1:1)*spec.hip[0],spec.hip[1],spec.hip[2]),chain=solveSpiderLeg(hip,point,i);
  assert.ok(Math.abs(chain[0].distanceTo(chain[1])-spec.femur)<1e-6);
  assert.ok(Math.abs(chain[1].distanceTo(chain[2])-spec.tibia)<1e-6);
 }
});

test('repelling a descending spider sends it back to the ceiling without clearing feet',()=>{
 const {s,player,lamp}=crawler();s.mode='corner';s.cornerT=.55;s.cornerDirection=-1;const pose=s.cornerPose(s.cornerT);
 s.root.position.copy(pose.point);s.normal.copy(pose.normal);s.heading.copy(pose.tangent).negate();s.exposure=.49;s.canSee=true;s.occlusionT=1;
 const point=s.root.position.clone().addScaledVector(s.normal,.23*s.root.scale.x);lamp.origin.value.set(point.x+s.normal.x*3,point.y+s.normal.y*3,point.z+s.normal.z*3,1);lamp.direction.value.set(-s.normal.x,-s.normal.y,-s.normal.z,0);player.camera.position.copy(point).addScaledVector(s.normal,3);
 const feet=[...s.feet];s.update(1/60,player,lamp);
 assert.equal(s.cornerDirection,1);assert.ok(s.retreatT>7.9);assert.equal(s.state,'flee');assert.ok(s.bankT>=12);
 for(let i=0;i<8;i++)assert.equal(s.feet[i],feet[i]);
});
test('cresting the wall cannot immediately loop back down the same corner',()=>{
 const {s,player,lamp}=crawler();s.mode='corner';s.cornerT=.99999;s.cornerDirection=1;s.bankT=0;
 const pose=s.cornerPose(s.cornerT);s.root.position.copy(pose.point);s.normal.copy(pose.normal);s.heading.copy(pose.tangent);s.speed=.5;
 s.update(1/60,player,lamp);assert.equal(s.mode,'ceiling');assert.ok(s.bankT>=12);
});

test('collision IK keeps the previous knee bend instead of flipping to the other side',()=>{
 const {s}=crawler(),index=4,spec=SPIDER_LEGS[0],hip=V(...spec.hip),toe=V(spec.foot[0],0,spec.foot[2]);
 s.root.position.set(0,0,0);s.root.quaternion.identity();s.root.scale.setScalar(1);s.root.updateMatrixWorld(true);
 s.surface={triangles:[1],legClear:()=>true};s.poseDt=1/60;s.legChains=[];
 s.legChains[index]=solveSpiderLeg(hip,toe,index,Math.PI).map(p=>p.clone());const previous=s.legChains[index].map(p=>p.clone());
 const next=s.legPose(hip,toe.clone().add(V(.01,0,.01)),index);assert.ok(next);
 for(let j=0;j<4;j++)assert.ok(next[j].distanceTo(previous[j])<=5/60+.0001);
});


test('limiting a pose advances its rotation target and does not stall translation during a turn',()=>{
 const p=V(),q=new THREE.Quaternion(),goal=new THREE.Quaternion().setFromAxisAngle(V(1,0,0),Math.PI/2);
 for(let i=0;i<90;i++){
  const previous=p.clone(),rotation=q.clone();p.z+=.01;q.copy(goal);limitSpiderPose(p,q,previous,rotation,.85,1/60);
  assert.ok(p.z>previous.z+.0099);assert.ok(rotation.angleTo(q)<=1.8/60+1e-6);
 }
 assert.ok(q.angleTo(goal)<1e-6);assert.ok(p.z>.89);
});

test('a clamped ankle can be resumed exactly without an irreversible change in the last two joints',()=>{
 const {s}=crawler(),index=3,spec=SPIDER_LEGS[3],hip=V(-spec.hip[0],spec.hip[1],spec.hip[2]),toe=V(-2,1,2);
 s.root.position.set(0,0,0);s.root.quaternion.identity();s.root.scale.setScalar(1);s.root.updateMatrixWorld(true);s.surface={triangles:[1],legClear:()=>true};s.poseDt=1/60;s.legChains=[];
 s.legChains[index]=solveSpiderLeg(hip,toe,index,.4).map(p=>p.clone());const old=s.legChains[index].map(p=>p.clone()),next=s.legPose(hip,old[3],index);
 assert.ok(next);for(let i=0;i<4;i++)assert.ok(next[i].distanceTo(old[i])<1e-7);
});

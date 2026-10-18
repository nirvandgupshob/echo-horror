import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {WorkTransition,sampleWork,workProgress,valveRotation} from '../src/work-motion.js';
const V=(x,y,z)=>new THREE.Vector3(x,y,z),grip=V(0,-.031,-.068),palm=hand=>grip.clone().applyQuaternion(hand.q).add(hand.pos);
const frame={kind:'caveValve',target:V(0,1.2,-.6),normal:V(0,0,1),k:.5,time:2,angle:2};

test('both hands reach before the mechanism starts, and return without a one-frame disappearance',()=>{
 const t=new WorkTransition(),inv=new THREE.Matrix4();
 const first=t.update(frame,inv,1/60);assert.ok(first.weight>0&&first.weight<.05);assert.ok(first.pose.left&&first.pose.right);
 t.update(frame,inv,.3);assert.equal(t.weight,1);
 const released=t.update(null,inv,1/60);assert.ok(released.weight>.98);assert.ok(released.pose);
 t.update(null,inv,.1);const weight=t.weight;
 const resumed=t.update(frame,inv,.001);assert.ok(resumed.weight>weight&&resumed.weight-weight<.02,'resuming preserves the envelope');
 t.update(null,inv,.5);assert.equal(t.weight,0);assert.equal(t.frame,null);
 for(const duration of [2,3,4,4.5]){assert.equal(workProgress(.29,duration),0);assert.equal(workProgress(duration-.2,duration),1);}
 assert.equal(valveRotation(4),8);assert.equal(valveRotation(2,2),4);
});

test('at least one hand stays on the rim; planted palms turn with the wheel and wrists stay continuous during regrips',()=>{
 const identity=new THREE.Matrix4();let previous=null,returns=0;
 for(let angle=0;angle<=8;angle+=.005){
  const pose=sampleWork({...frame,angle},identity);
  assert.ok(pose.left.contact||pose.right.contact,'no unsupported wheel turn');
  for(const key of ['left','right']){
   const h=pose[key],at=palm(h),radial=at.clone().sub(frame.target);
   assert.ok(Math.abs(Math.hypot(radial.x,radial.y)-.2)<1e-6,'hand on the actual rim radius');
   assert.ok(h.q.toArray().every(Number.isFinite));
   if(!h.contact)returns++;
   if(previous){
    const old=previous[key];assert.ok(at.distanceTo(palm(old))<.012,'no teleport at a cycle boundary');
    assert.ok(h.q.angleTo(old.q)<.07,'no wrist flip');
    if(h.contact&&old.contact){
     // On the +Z facing wheel this basis rotates clockwise; undo that turn.
     const a=radial.applyAxisAngle(V(0,0,1),angle),b=palm(old).sub(frame.target).applyAxisAngle(V(0,0,1),angle-.005);
     assert.ok(a.distanceTo(b)<1e-6,'planted palm cannot slide over the rim');
    }
   }
  }previous=pose;
 }
 assert.ok(returns>100,'hands actually let go to regrip');
});

test('mechanical hands remain attached through camera yaw and pitch, including mirrored left grips',()=>{
 for(const kind of ['pryLift','caveValve','caveDial'])for(const yaw of [-1.8,0,Math.PI])for(const pitch of [-.8,0,.9]){
  const camera=new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(pitch,yaw,0,'YXZ')).setPosition(3,1.65,4),inv=camera.clone().invert();
  const f={...frame,kind,target:V(3,1.3,3),normal:V(0,0,1),angle:.4,k:.35};
  const world=sampleWork(f,new THREE.Matrix4()),local=sampleWork(f,inv);
  for(const key of ['left','right'])if(local[key])assert.ok(palm(local[key]).applyMatrix4(camera).distanceTo(palm(world[key]))<1e-6);
 }
});

test('withdrawal follows a spring-returning rotor instead of retaining an obsolete grip angle',()=>{
 const rotor=new THREE.Group(),t=new WorkTransition(),inv=new THREE.Matrix4();rotor.rotation.z=.4;
 const a=t.update({...frame,rotor},inv,.3);rotor.rotation.z=.5;const b=t.update(null,inv,1/60);
 const expected=sampleWork({...frame,angle:.5},inv);
 assert.ok(palm(b.pose.left).distanceTo(palm(expected.left))<1e-6);assert.ok(palm(a.pose.left).distanceTo(palm(b.pose.left))>.005);
});

test('can cap uses the authored turn on its actual neck axis across uncap/pour/recap stages',()=>{
 const f=(kind,k)=>sampleWork({...frame,kind,k},new THREE.Matrix4());
 assert.equal(f('uncap',0).can.capTurn,0);assert.equal(f('uncap',1).can.capTurn,1.6);
 assert.equal(f('pour',0).can.capTurn,1.6);assert.equal(f('pour',1).can.capTurn,1.6);
 assert.equal(f('recap',0).can.capTurn,1.6);assert.equal(f('recap',1).can.capTurn,0);
});

test('approaching a control is bounded by walking speed and preserves physical collision checks',async()=>{
 const {CaveChapter}=await import('../src/cave-chapter.js');let checks=0;
 const chapter=Object.create(CaveChapter.prototype),player={pos:V(0,0,2),yaw:0,pitch:0,eye:1.65};
 Object.assign(chapter,{player,level:{collidePlayer:()=>checks++}});
 const target=V(0,1.2,0),normal=V(0,0,1);
 for(let i=0;i<120;i++){const before=player.pos.clone();chapter.alignWork(target,normal,1/60);assert.ok(player.pos.distanceTo(before)<=2/60+1e-8,'no positional snap');}
 assert.equal(checks,120);assert.ok(Math.abs(player.pos.z-.62)<.001);assert.ok(player.lookTarget.distanceTo(target)<1e-8);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CaveSequence } from '../src/cave-sequence.js';
import { caveLayout, CAVE_SPAWN, CAVE_STATIONS } from '../src/cave-layout.js';
import { sampleWork } from '../src/work-motion.js';
import { Level } from '../src/level.js';

test('descent crashes once; doors require sustained manual effort and retain their ratchet',()=>{
  const s=new CaveSequence();assert.deepEqual(s.advance(6.9),[]);
  assert.deepEqual(s.advance(.2),['crash']);assert.equal(s.phase,'stalled');
  assert.deepEqual(s.advance(2),['pry']);
  s.advance(2,true,'doors');const halfway=s.opening;
  s.advance(20,false,'doors');assert.equal(s.opening,halfway);
  assert.deepEqual(s.advance(3,true,'doors'),['opened']);
  assert.equal(s.opening,1);assert.equal(s.phase,'explore');
  assert.deepEqual(s.advance(10,true,'doors'),[]);
});

test('the drain and resonator gate the exit; partial station actions cancel on release',()=>{
  const s=new CaveSequence({phase:'explore',opening:1});
  assert.deepEqual(s.advance(10,true,'exit'),[]);
  assert.deepEqual(s.advance(10,true,'resonator'),[]);
  s.advance(3,true,'valve');s.advance(.1,false);assert.equal(s.action,0);
  assert.deepEqual(s.advance(4,true,'valve'),['valve']);
  assert.deepEqual(s.advance(3,true,'resonator'),['resonator']);
  assert.deepEqual(s.advance(2,true,'exit'),[],'two initial actions no longer finish the whole chapter');
  assert.equal(s.takeFuse(),true);assert.deepEqual(s.advance(4,true,'relay'),['relay']);
  for(const i of [0,0,0,1,2,2])assert.equal(s.turnTone(i),true);assert.equal(s.tonesTuned,true);
  assert.deepEqual(s.advance(2,true,'exit'),['exit']);assert.equal(s.phase,'complete');
});

test('every station, both sides of the choir and crouched bypass are connected',()=>{
  const {cells,ceiling}=caveLayout(), width=64;
  const seen=new Set(), todo=[[Math.floor(CAVE_SPAWN.x),Math.floor(CAVE_SPAWN.z)]];
  while(todo.length){
    const [x,z]=todo.pop(),i=z*width+x;
    if(x<0||x>=64||z<0||z>=56||seen.has(i)||!cells[i])continue;
    seen.add(i);todo.push([x-1,z],[x+1,z],[x,z-1],[x,z+1]);
  }
  for(const s of CAVE_STATIONS)assert.ok(seen.has(Math.floor(s.z)*width+Math.floor(s.x)),s.id);
  for(const [x,z]of [[25,27],[37,27],[20,38]])assert.ok(seen.has(z*64+x),`${x},${z}`);
  assert.equal(cells[27*64+31],0,'sinkhole stays outside monster navigation');
  assert.ok(ceiling[38*64+20]<1.7,'bypass requires crouching');
});

test('navigation flood fill uses chapter spawn instead of the hospital bed',()=>{
  const layout=caveLayout();
  const level=Object.create(Level.prototype);
  Object.assign(level,{cells:layout.cells,ceil:layout.ceiling,spawn:CAVE_SPAWN,doors:[],colliders:[]});
  level.buildCollision();level.buildNav();
  for(const station of CAVE_STATIONS){
    const path=level.findPath(CAVE_SPAWN,station);
    assert.ok(path?.length,station.id);
  }
});

test('two hands track the door seam in world coordinates through camera turns',()=>{
  const target=new THREE.Vector3(8.5,1.36,8.36);
  for(const yaw of [0,Math.PI,1.2])for(const k of [0,.25,.5,1]){
    const cam=new THREE.Matrix4().makeRotationY(yaw).setPosition(8.5,1.65,7.86);
    const pose=sampleWork({kind:'pryLift',k,time:k*4.5,target,normal:new THREE.Vector3(0,0,-1)},cam.clone().invert());
    assert.ok(pose.left&&pose.right);
    for(const hand of [pose.left,pose.right]){
      assert.ok(hand.pos.toArray().every(Number.isFinite));assert.ok(Math.abs(hand.q.length()-1)<1e-6);
    }
    const palm=hand=>hand.pos.clone().add(new THREE.Vector3(0,-.031,-.068).applyQuaternion(hand.q)).applyMatrix4(cam);
    const a=palm(pose.left),b=palm(pose.right);
    assert.ok(Math.abs(a.x-b.x-(.07+k*1.44))<1e-6);
    // Left/right are anatomical, not just a pair of symmetric positions.
    // With a front-facing camera the wrists must never cross each other.
    if(yaw===Math.PI)assert.ok(pose.left.pos.x<pose.right.pos.x);
  }
});

test('resonator dial grip stays attached to its physical control through turns and charging time',()=>{
  const target=new THREE.Vector3(49.5,1.08,17.89),normal=new THREE.Vector3(0,0,1);
  for(const yaw of [0,.5,-.7])for(const time of [0,.4,1,2.9]){
    const camera=new THREE.Matrix4().makeRotationY(yaw).setPosition(49.5,1.65,19);
    const pose=sampleWork({kind:'caveDial',k:time/3,time,target,normal},camera.clone().invert()).left;
    const palm=pose.pos.clone().add(new THREE.Vector3(0,-.031,-.068).applyQuaternion(pose.q)).applyMatrix4(camera);
    assert.ok(palm.distanceTo(target.clone().addScaledVector(normal,.025))<1e-6);
    assert.ok(Math.abs(pose.q.length()-1)<1e-6);
  }
});

test('expanded loop requires a recoverable fuse and three distinct tuned frequencies; save preserves progress',()=>{
 const s=new CaveSequence({phase:'explore',opening:1});assert.equal(s.turnTone(0),false);assert.equal(s.takeFuse(),true);assert.equal(s.takeFuse(),false);
 s.advance(4,true,'valve');s.advance(3,true,'resonator');
 assert.deepEqual(s.advance(4,true,'relay'),['relay']);assert.equal(s.takeFuse(),false);assert.equal(s.hasFuse,false);
 s.turnTone(0);s.turnTone(0);const restored=new CaveSequence(s.snapshot());assert.deepEqual(restored.snapshot(),s.snapshot());assert.equal(restored.exitReady,false);
 for(const i of [0,1,2,2])restored.turnTone(i);assert.equal(restored.exitReady,true);assert.deepEqual(restored.tones,[2,0,1]);
});

test('a found spare fuse restores the southern feeder before either earlier station; release never consumes it',()=>{
 const s=new CaveSequence({phase:'explore',opening:1});assert.deepEqual(s.advance(8,true,'relay'),[],'a fuse is still required');
 s.takeFuse();s.advance(2,true,'relay');s.advance(.1,false,'relay');assert.equal(s.hasFuse,true);assert.equal(s.action,0);assert.equal(s.relayPowered,false);
 assert.deepEqual(s.advance(4,true,'relay'),['relay']);assert.equal(s.hasFuse,false);assert.equal(s.relayPowered,true);assert.equal(s.drained,false);assert.equal(s.tuned,false);assert.equal(s.exitReady,false);
 const restored=new CaveSequence(s.snapshot());assert.equal(restored.relayPowered,true);assert.equal(restored.hasFuse,false);assert.equal(restored.takeFuse(),false);
});

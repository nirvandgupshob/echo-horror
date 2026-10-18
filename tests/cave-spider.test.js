import test from 'node:test';import assert from 'node:assert/strict';import * as THREE from 'three';
import {inFlashlight,spiderModel,CaveSpider} from '../src/cave-spider.js';
const V=(x,y,z)=>new THREE.Vector3(x,y,z);
test('spider only fears a powered forward beam within useful range',()=>{
 const eye=V(0,1.65,0),forward=V(0,0,-1);
 assert.equal(inFlashlight(V(0,2,-7),eye,forward,.8),true);
 for(const point of [V(0,2,3),V(0,2,-16),V(6,2,-7)])assert.equal(inFlashlight(point,eye,forward,.8),false);
 assert.equal(inFlashlight(V(0,2,-7),eye,forward,0),false);
});
test('spider gait keeps stance feet on a wall while the body advances; all joints remain finite',()=>{
 const model=spiderModel(new THREE.MeshBasicMaterial()),scene=new THREE.Scene();scene.add(model.root);
 const s=Object.assign(Object.create(CaveSpider.prototype),{model,root:model.root,normal:V(0,0,1),ray:new THREE.Raycaster(),level:{geology:{group:new THREE.Group()}},clock:.8,retreatT:0,feet:[]});
 s.root.quaternion.setFromUnitVectors(V(0,1,0),s.normal);s.animate(1/60);
 const planted=s.feet[0].point.clone();s.clock+=.02;s.root.position.y+=.04;s.animate(1/60);
 assert.deepEqual(s.feet[0].point,planted,'stance does not slide with the torso');
 assert.equal(model.legs.count,16);assert.equal(model.joints.count,8);
 assert.ok(Array.from(model.legs.instanceMatrix.array).every(Number.isFinite));
});

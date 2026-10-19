import test from 'node:test';import assert from 'node:assert/strict';
import {groundHeight,groundSupport} from '../src/cave-terrain.js';
import {caveField,pitField} from '../src/cave-layout.js';
import {hospitalTextureWeight} from '../src/cave-style.js';
import * as THREE from 'three';import {Player} from '../src/player.js';
test('hospital texture erodes continuously across the hospital/cave threshold',()=>{
 assert.equal(hospitalTextureWeight(13,18),1);assert.equal(hospitalTextureWeight(13,29),0);
 assert.ok(hospitalTextureWeight(13,22)>.1&&hospitalTextureWeight(13,22)<.9);
 for(let z=18;z<28;z+=.01)for(let x=8;x<23;x+=.25){
  assert.ok(Math.abs(hospitalTextureWeight(x,z+.001)-hospitalTextureWeight(x,z))<.003);
  assert.ok(Math.abs(hospitalTextureWeight(x+.001,z)-hospitalTextureWeight(x,z))<.003);
 }
});
test('natural cave floor has metre-scale relief, while cab and working landings remain graded',()=>{
 const samples=[];for(let z=3;z<53;z+=.5)for(let x=3;x<61;x+=.5)if(caveField(x,z)>1&&pitField(x,z)>1)samples.push(groundHeight(x,z));
 assert.ok(Math.max(...samples)-Math.min(...samples)>2,'broad vertical relief');
 for(const[x,z]of [[8.5,6.4],[13,15],[13.5,26.9],[50.5,47.8]])assert.equal(groundHeight(x,z),0);
 for(let z=18;z<22;z+=.05)assert.equal(groundHeight(13,z),0,'no artificial trench at the ward entrance');
 for(let z=6;z<50;z+=.5)for(let x=8;x<56;x+=.5)assert.ok(Math.abs(groundHeight(x+.001,z)-groundHeight(x,z))<.003,'continuous height across triangles');
 const support=groundSupport(32,7,0,[1.8,.7]);assert.ok(support.high-support.low>.02);
});
test('walking tracks the visible terrain and releases movement immediately on a slope',()=>{
 const level={floorHeightAt:groundHeight,collidePlayer(){},ceilAt(){return 8;},floorAt(){return 1;},blockedPoint(){return false;},drips:[]};
 const p=new Player(new THREE.PerspectiveCamera(),level,{step(){},breath(){},gasp(){}},{state:'play',psychosis:0,noise(){},hint(){}});
 p.reset({x:32,z:10},Math.PI);p.keys.add('KeyW');for(let n=0;n<120;n++){p.update(1/60);assert.equal(p.pos.y,groundHeight(p.pos.x,p.pos.z));assert.ok(Math.abs(p.camera.position.y-p.pos.y-p.eye)<.1);}
 const stop=p.pos.clone();p.keys.clear();for(let n=0;n<60;n++)p.update(1/60);assert.deepEqual(p.pos,stop);
});

test('a tall rendered cave remains standing space beyond the legacy floor grid',()=>{
 const level={floorHeightAt:groundHeight,headroomAt(){return 6;},ceilAt(){return 0;},collidePlayer(){},floorAt(){return 1;},drips:[]};
 const p=new Player(new THREE.PerspectiveCamera(),level,{step(){},breath(){},gasp(){}},{state:'play',psychosis:0,noise(){},hint(){}});
 p.reset({x:32,z:1.5},0);for(let i=0;i<60;i++)p.update(1/60);
 assert.equal(p.crouch,false);assert.equal(p.eye,1.65);assert.ok(p.camera.position.y-p.pos.y>1.6);
});

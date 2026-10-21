import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {CaveLevel} from '../src/cave-level.js';
import {HELD_KEYS} from '../src/input.js';

class GeometryCave extends CaveLevel{
  materials(){this.mat=new Proxy({},{get:(o,k)=>o[k]||=(new THREE.MeshBasicMaterial({side:THREE.DoubleSide}))});this.lineMat={};}
  buildWater(){} buildDecals(){}
  buildDynamic(){this.gateDoor={closed:true,box:{minX:49.25,maxX:51.75,minZ:47.7,maxZ:47.9}};this.doors.push(this.gateDoor);}
}
const hospital={liftRoot:new THREE.Group(),door:()=>({id:'lift',kind:'slide',closed:true,t:0,box:{minX:6,maxX:9,minZ:2.9,maxZ:3.1},leaves:[]}),liftColliders:[]};
const same=(a,b)=>a.length===b.length&&a.every((v,i)=>v===b[i]);

test('opening the lift swaps in the prebuilt grid, identical to building it on the spot',()=>{
  const level=new GeometryCave(new THREE.Scene());level.bindOriginalLift(hospital);
  const closed=level.nav;
  const started=performance.now();level.setLiftOpening(1);level.buildNav();
  assert.ok(performance.now()-started<5,'no rebuild while playing');
  assert.notEqual(level.nav,closed);
  const fresh=new GeometryCave(new THREE.Scene());fresh.bindOriginalLift(hospital);
  fresh.setLiftOpening(1);fresh.navCache=new Map();fresh.buildNav();
  assert.ok(same(level.nav,fresh.nav));assert.ok(same(level.navDist,fresh.navDist));
  level.setLiftOpening(0);level.buildNav();assert.equal(level.nav,closed);
});

test('held-only keys trigger no press action and include movement',()=>{
  for(const code of ['KeyW','KeyA','KeyS','KeyD','ShiftLeft','KeyQ','KeyV','Mouse2'])assert.ok(HELD_KEYS.has(code),code);
  for(const code of ['KeyE','KeyF','KeyC','KeyG','KeyT','Escape','Digit1'])assert.ok(!HELD_KEYS.has(code),code);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {FrameQueue,createGLFrameQueue} from '../src/frame-queue.js';
import {freshInput} from '../src/input.js';
import {Player} from '../src/player.js';
import {Builder} from '../src/builder.js';
import {hangingMiner} from '../src/mine-props.js';

const settle=()=>new Promise(resolve=>setImmediate(resolve));
test('slow GPU admits two frames, skips obsolete draws, and resumes after completion',async()=>{
  const q=new FrameQueue(),finish=[];
  for(let frame=0;frame<100;frame++)if(q.ready())q.submitted(new Promise(resolve=>finish.push(resolve)));
  assert.equal(q.pending,2);assert.equal(q.peak,2);assert.equal(q.skipped,98);
  finish[0]();await settle();assert.equal(q.ready(),true);
  q.submitted(Promise.resolve());finish[1]();await settle();assert.equal(q.pending,0);
});
test('device loss rejects a completion without leaving the submission gate stuck',async()=>{
  const q=new FrameQueue();q.submitted(Promise.reject(new Error('device lost')));await settle();assert.equal(q.pending,0);assert.equal(q.ready(),true);
});
test('WebGL polls fences with zero wait and never submits a third pending frame',()=>{
  let done=false,deleted=0,flushed=0;
  const gl={TIMEOUT_EXPIRED:1,SYNC_GPU_COMMANDS_COMPLETE:2,
    clientWaitSync:(_f,flags,timeout)=>{assert.equal(flags,0);assert.equal(timeout,0);return done?3:1;},
    fenceSync:()=>({}),deleteSync:()=>deleted++,flush:()=>flushed++};
  const q=createGLFrameQueue(gl);assert.equal(q.ready(),true);q.submitted();q.submitted();assert.equal(q.ready(),false);
  done=true;assert.equal(q.ready(),true);assert.equal(deleted,2);assert.equal(flushed,2);
});
test('old presses and OS repeats cannot reapply input; current and WebKit epoch events work',()=>{
  assert.equal(freshInput({timeStamp:700,repeat:false},1000,1.8e12),false);
  assert.equal(freshInput({timeStamp:999,repeat:true},1000,1.8e12),false);
  assert.equal(freshInput({timeStamp:995},1000,1.8e12),true);
  assert.equal(freshInput({timeStamp:1.8e12+995},1000,1.8e12),true);
});
test('releasing movement stops displacement at both low and high frame rates',()=>{
  for(const fps of [10,30,60,144]){
    const level={floorAt:()=>1,ceilAt:()=>3,collidePlayer:()=>{}};
    const audio={step(){},breath(){}};
    const player=new Player(new THREE.PerspectiveCamera(),level,audio,{state:'play',psychosis:0,noise(){}});
    player.reset({x:10,z:10},0);player.keys.add('KeyW');
    for(let i=0;i<fps;i++)player.update(1/fps);
    assert.ok(player.pos.z<9);player.keys.clear();const stopped=player.pos.clone();
    for(let i=0;i<fps;i++)player.update(1/fps);
    assert.equal(player.pos.distanceTo(stopped),0);assert.equal(player.vel.length(),0);
  }
});
test('miner has human clothing/skin, equipment and a continuous ceiling suspension',()=>{
  const b=new Builder(),data=hangingMiner(b,{x:31,y:3.5,z:27,angle:.4,roof:11.8});
  assert.ok(data.feet>2.4);assert.ok(data.attachment<data.roof);
  for(const key of ['minerCloth','flesh','minerHelmet','rubber','cable','corroded'])assert.ok(b.surfaces[key]?.length,key);
  const bounds=new THREE.Box3();let triangles=0;
  for(const list of Object.values(b.surfaces))for(const g of list){g.computeBoundingBox();bounds.union(g.boundingBox);triangles+=g.attributes.position.count/3;}
  assert.ok(bounds.max.y>=11.8,'anchor penetrates the ceiling');assert.ok(bounds.min.y>2.4,'boots remain above player head');
  assert.ok(triangles<45000,'distant repeated bodies stay within the geometry budget');
});

test('every cave prop produces finite geometry with valid material keys at its actual ceiling height',async()=>{
  const {caveProp,CAVE_MODEL_TYPES}=await import('../src/cave-props.js');
  for(const type of CAVE_MODEL_TYPES.filter(type=>type!=='hanging-miner')){
    const b=new Builder();caveProp(b,type,13,0,24,.4,6.8);
    for(const [key,list]of Object.entries(b.surfaces))for(const g of list){
      assert.ok(!/^\d/.test(key),`${type}: material ${key}`);
      assert.ok([...g.attributes.position.array].every(Number.isFinite),`${type}: finite positions`);
      assert.ok([...g.attributes.normal.array].every(Number.isFinite),`${type}: finite normals`);
    }
  }
});

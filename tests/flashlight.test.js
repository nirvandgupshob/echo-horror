import test from 'node:test';import assert from 'node:assert/strict';
import {Flashlight} from '../src/flashlight.js';
import {waterGeometry} from '../src/water.js';
import {hospitalWeight} from '../src/cave-style.js';

test('torch runs down, stays paused and only completed shakes recharge with noise',()=>{
 const f=new Flashlight();let sounds=0;f.acquire();const start=f.charge;
 f.update(5,{live:false,shake:true},()=>sounds++);assert.equal(f.charge,start);assert.equal(sounds,0);
 f.update(.3,{live:true,shake:true},()=>sounds++);assert.equal(sounds,0);
 f.update(.16,{live:true,shake:true},()=>sounds++);assert.equal(sounds,1);assert.ok(f.charge>start);
 f.update(100,{live:true,shake:false});assert.equal(f.charge,0);assert.equal(f.power,0);
 f.toggle();f.update(.46,{live:true,shake:true},()=>sounds++);assert.ok(f.charge>0);assert.equal(f.power,0);f.toggle();assert.ok(f.power>0);
});
test('charging and sound cadence are independent of frame rate; blocked hands cannot charge',()=>{
 const results=[];
 for(const fps of [30,60,144]){const f=new Flashlight();f.acquire();for(let n=0;n<fps*3;n++)f.update(1/fps,{live:true,shake:true});results.push(f);}
 for(const f of results){assert.equal(f.strokes,6);assert.ok(Math.abs(f.charge-results[0].charge)<1e-7);}
 const f=results[0],before=f.charge,n=f.strokes;f.update(1,{live:true,shake:true,canShake:false});assert.equal(f.strokes,n);assert.ok(f.charge<before);
 const restored=new Flashlight();restored.restore(f.snapshot());assert.deepEqual(restored.snapshot(),f.snapshot());
});
test('shallow water geometry covers exactly the wet cells and leaves dry islands empty',()=>{
 const cells=new Uint8Array([2,0,1,2,2,1]),g=waterGeometry(cells,3,2),p=g.attributes.position;
 assert.equal(g.index.count,18);assert.equal(p.count,12);
 for(let n=0;n<p.count;n+=4){const x=p.getX(n),z=p.getZ(n);assert.equal(cells[z*3+x],2);for(let k=0;k<4;k++)assert.equal(p.getY(n+k),0);}
 g.dispose();
});
test('hospital remains intact at the lift and gradually gives way to rock farther along the route',()=>{
 assert.equal(hospitalWeight(8.5,10),1);assert.equal(hospitalWeight(13,17),1);
 assert.ok(hospitalWeight(13,20)>hospitalWeight(13,24));assert.ok(hospitalWeight(13,24)>0);assert.equal(hospitalWeight(13,29),0);
});

test('quiet actions switch off the torch and cancel charging until the player switches it back on',()=>{
 const f=new Flashlight();f.acquire();f.update(.3,{live:true,shake:true});const before=f.charge,strokes=f.strokes;
 f.update(2,{live:true,shake:true,quiet:true});assert.equal(f.on,false);assert.equal(f.power,0);assert.equal(f.strokes,strokes);assert.equal(f.shaking,false);assert.equal(f.charge,before);
 f.update(.2,{live:true,shake:false,quiet:false});assert.equal(f.power,0);f.toggle();assert.ok(f.power>0);
});

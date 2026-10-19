import test from 'node:test';
import assert from 'node:assert/strict';
import {gripInfo,CANE_R,POSES} from '../src/hands.js';

test('fixed cane grip reuses the solved finger angles in animation updates',()=>{
 const grip=gripInfo();assert.equal(grip.curl,POSES.grip.curl);
 const expected=grip.curl.map(row=>row.slice());
 for(let i=0;i<120;i++)assert.equal(gripInfo().curl,grip.curl);
 assert.deepEqual(grip.curl,expected);
 // Callers can orient their own vectors without corrupting the cached grip.
 grip.p.set(100,100,100);grip.axis.set(0,0,0);
 assert.ok(gripInfo().p.length()<1);assert.ok(gripInfo().axis.length()>.99);
});
test('torch and cane keep separate cached grip solutions',()=>{
 const cane=gripInfo(CANE_R),torch=gripInfo(.029);
 assert.notDeepEqual(torch.curl,cane.curl);assert.equal(gripInfo(.029).curl,torch.curl);
});

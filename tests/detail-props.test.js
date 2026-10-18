import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Builder} from '../src/builder.js';
import {detailProp,DETAIL_MODEL_TYPES} from '../src/detail-props.js';

test('additional equipment has finite geometry, physical supports and bounded detail',()=>{
  let total=0;
  for(const type of DETAIL_MODEL_TYPES){
    const b=new Builder();detailProp(b.at(0,0,0),type);
    const bounds=new THREE.Box3();let triangles=0;
    for(const [key,list]of Object.entries(b.surfaces))for(const g of list){
      assert.ok(!/^\d/.test(key),`${type} material`);
      assert.ok(g.attributes.position.array.every(Number.isFinite),`${type} positions`);
      assert.ok(g.attributes.normal.array.every(Number.isFinite),`${type} normals`);
      g.computeBoundingBox();bounds.union(g.boundingBox);triangles+=g.attributes.position.count/3;
    }
    if(['first-aid','tool-board'].includes(type))assert.ok(Math.abs(bounds.min.z)<.001,`${type} touches bracket plane`);
    else assert.ok(bounds.min.y<.01&&bounds.min.y>-.04,`${type} rests on its support`);
    assert.ok(triangles<15000,`${type}: ${triangles} triangles`);total+=triangles;
  }
  assert.ok(total<65000,`equipment library: ${total} triangles`);
});

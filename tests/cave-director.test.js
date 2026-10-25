import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CaveChapter } from '../src/cave-chapter.js';
import { CaveSequence } from '../src/cave-sequence.js';
import { HUSH_RADIUS, lurking, hushed } from '../src/hush.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const level = {
  stationItems: ['valve', 'resonator', 'relay', 'exit'].map((id, i) => ({ id, pos: V(10 + i, 1, 20 + i) })),
  flashlightItem: { pos: V(9, 1, 9) }, relayFuseItem: { pos: V(32, 1, 7) },
  toneDials: [V(31.6, 1, 45.4), V(32, 1, 45.4), V(32.4, 1, 45.4)].map((position) => ({ position })),
};
const chapterAt = (saved, owned = true) => {
  const c = Object.create(CaveChapter.prototype);
  return Object.assign(c, { level, sequence: new CaveSequence({ phase: 'explore', opening: 1, ...saved }), flashlight: { owned } });
};
const xz = (v) => [v.x, v.z];

test('ambush goals follow the chapter II objectives in order, on the ground', () => {
  assert.deepEqual(xz(chapterAt({}, false).goal()), [9, 9]);
  assert.deepEqual(xz(chapterAt({}).goal()), [10, 20]);
  assert.deepEqual(xz(chapterAt({ drained: true }).goal()), [11, 21]);
  assert.deepEqual(xz(chapterAt({ drained: true, tuned: true }).goal()), [32, 7]);
  assert.deepEqual(xz(chapterAt({ drained: true, tuned: true, hasFuse: true }).goal()), [12, 22]);
  assert.deepEqual(xz(chapterAt({ drained: true, tuned: true, relayPowered: true }).goal()), [32, 45.4]);
  assert.deepEqual(xz(chapterAt({ drained: true, tuned: true, relayPowered: true, tonesTuned: true }).goal()), [13, 23]);
  assert.equal(chapterAt({ drained: true }).goal().y, 0);
  assert.equal(chapterAt({ phase: 'pry' }).goal(), null);
});

test('pressure rises with every restored system', () => {
  assert.equal(chapterAt({}).pressure(), 0);
  assert.equal(chapterAt({ drained: true, tuned: true }).pressure(), 2);
  assert.equal(chapterAt({ drained: true, tuned: true, relayPowered: true, tonesTuned: true }).pressure(), 4);
});

test('drips fall silent only around a creature lying in wait', () => {
  const near = { pos: V(5 + HUSH_RADIUS - 0.5, 0, 5) }, far = { pos: V(5 + HUSH_RADIUS + 0.5, 0, 5) };
  const m = (state, curSpeed = 0, active = true) => ({ active, state, curSpeed, pos: V(5, 1.2, 5) });
  assert.equal(hushed(near, m('ambush')), true);
  assert.equal(hushed(far, m('ambush')), false);
  assert.equal(hushed(near, m('stalk', 0)), true, 'stalking, standing still');
  assert.equal(hushed(near, m('stalk', 1.2)), false, 'stalking on the move');
  for (const state of ['wander', 'hunt', 'chase', 'ambushGo']) assert.equal(lurking(m(state)), false, state);
  assert.equal(lurking(m('ambush', 0, false)), false, 'dormant');
});

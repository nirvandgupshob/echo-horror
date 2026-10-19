(() => {
const G = window.__game, P = G.player, A = G.audio, V3 = G.camera.position.constructor;
const canvas = () => document.querySelector('#app canvas');
const gl = G.composer.renderer.getContext();
const waitSync0 = gl.__waitSync0 || (gl.__waitSync0 = gl.clientWaitSync.bind(gl));
const S = {}; let cur = null, ctx = {};
let listenU = null; G.camera.parent?.traverse?.(() => {});
const scene = (() => { let o = G.camera; while (o.parent) o = o.parent; return o; })();
const findListen = () => { if (listenU) return listenU; G.level.scene?.traverse?.(o => { const m = o.material; if (!listenU && m && m.uniforms && m.uniforms.uListen) listenU = m.uniforms.uListen; }); return listenU; };
const press = (code) => { window.dispatchEvent(new KeyboardEvent('keydown', { code })); window.dispatchEvent(new KeyboardEvent('keyup', { code })); };
const hold = (code, on) => on ? P.keys.add(code) : P.keys.delete(code);
const tap = () => { P.clickCd = 0; P.click(); };
const ease = t => t < 0 ? 0 : t > 1 ? 1 : t * t * (3 - 2 * t);
const lerpAng = (a, b, k) => { let d = ((b - a + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI; return a + d * k; };
const yawTo = (x, z, from = P.pos) => Math.atan2(-(x - from.x), -(z - from.z));
const lookAt = (x, z, k = 0.08) => { P.yaw = lerpAng(P.yaw, yawTo(x, z), k); };

// ---- sound log: every sample the game starts, with where it sat relative to the ear
const log = window.__slog || (window.__slog = []); const R = window.__R || (window.__R = { clock: 0, recording: false });
const baked = window.__baked || (window.__baked = new Map()); let bakedN = 0;
const fileOf = (buf) => {
  const f = window.__bufFile.get(buf); if (f) return f;
  if (!baked.has(buf)) { let id = 'baked_unknown_' + bakedN++; for (const n in A.bank) { const l = A.bank[n]; const i = Array.isArray(l) ? l.indexOf(buf) : (l === buf ? 0 : -1); if (i >= 0) { id = `baked_${n}_${i}`; break; } } baked.set(buf, id); }
  return baked.get(buf);
};
const rel = (pos) => {
  if (!pos) return { d: 0, az: 0, occ: 0 };
  const l = G.camera.worldToLocal(new V3(pos.x, pos.y, pos.z));
  return { d: l.length(), az: Math.atan2(l.x, -l.z), occ: A.occlusion(pos) };
};
const play0 = A.__play0 || (A.__play0 = A.play);
A.play = function (name, pos = null, o = {}) {
  const s = play0.call(this, name, pos, o);
  if (s && R.recording) log.push({ k: 'one', t: R.clock + (o.delay || 0), name, file: fileOf(s.buffer, name), rate: s.playbackRate.value, gain: o.gain ?? 1, wet: o.wet ?? .35, lp: o.lp || 0, ref: o.ref ?? 1.2, roll: o.roll ?? 1.25, offset: o.offset || 0, dist: o.bus === A.dist, ...(o.occ === false ? { ...rel(pos), occ: 0 } : rel(pos)) });
  return s;
};
const voice0 = A.__voice0 || (A.__voice0 = A.createMonsterVoice);
A.createMonsterVoice = function () {
  const v = voice0.call(this);
  const wrap = (fn, gainK) => (...a) => { window.__lastSrc = null; fn(...a); const s = window.__lastSrc; const loud = a[a.length - 1];
    if (s && R.recording) log.push({ k: 'one', t: R.clock, name: 'voice', file: fileOf(s.buffer, 'voice'), rate: s.playbackRate.value, gain: loud * gainK, wet: .45, lp: 0, ref: 1.2, roll: 1.1, offset: 0, ...rel(G.monster.headWorld) }); };
  return { ...v, __wrapped: true, breathe: wrap(v.breathe, 1.1), croak: wrap(v.croak, .9) };
};
if (G.monster.voice && !G.monster.voice.__wrapped) { G.monster.voice = null; }
const loops = window.__loops || (window.__loops = []); const loop0 = A.__loop0 || (A.__loop0 = A.createLoop);
A.createLoop = function (name, pos, gain = .5, o = {}) {
  const l = loop0.call(this, name, pos, gain, o); const id = loops.length;
  const rec = { id, name, pos, gain, ref: o.ref ?? 2, roll: o.roll ?? 1, rate: o.rate ?? 1, file: fileOf(this.bank[name][0], name) }; loops.push(rec);
  const sg = l.setGain, su = l.spinUp, sp = l.setPos;
  l.setGain = (v, tc = 1) => { rec.last = v * gain; if (R.recording) log.push({ k: 'gain', t: R.clock, id, v: v * gain, tc }); return sg(v, tc); };
  l.spinUp = (sec) => { if (R.recording) log.push({ k: 'spin', t: R.clock, id, sec }); return su(sec); };
  l.setPos = (p) => { rec.pos = p; return sp(p); };
  return l;
};
const amb0 = A.__amb0 || (A.__amb0 = A.setAmbience); A.setAmbience = function (v) { if (R.recording) log.push({ k: 'amb', t: R.clock, v }); return amb0.call(this, v); };
const cut0 = A.__cut0 || (A.__cut0 = A.cut); A.cut = function () { if (R.recording) log.push({ k: 'cut', t: R.clock }); return cut0.call(this); };
const master0 = A.__master0 || (A.__master0 = A.setMaster); A.setMaster = function (v, tc = .5) { if (R.recording) log.push({ k: 'master', t: R.clock, v, tc }); return master0.call(this, v, tc); };

function sampleLoops() {
  for (const l of loops) if (l.last > 0 && l.pos) log.push({ k: 'lpos', t: R.clock, id: l.id, ...rel(l.pos) });
}

if (!document.getElementById('trailer-css')) { const st = document.createElement('style'); st.id = 'trailer-css';
  st.textContent = 'body.t-nohint #hint, body.t-noloc #location, body.t-noobj #objective, body.t-noprompt #prompt, body.t-noprompt #crosshair, body.t-nohud #hud { opacity: 0 !important; transition: none !important; }';
  document.head.appendChild(st); }
const setUI = (o = {}) => { const b = document.body.classList; b.toggle('t-nohint', o.hint === false); b.toggle('t-noloc', o.loc === false); b.toggle('t-noobj', o.obj !== true); b.toggle('t-noprompt', o.prompt === false); b.toggle('t-nohud', o.hud === false); };
window.__dir = {
  setUI,
  S, G, P, A, gl, V3, findListen, press, hold, tap, ease, lerpAng, yawTo, lookAt, log, loops,
  get ctx() { return ctx; },
  setup(name, args) {
    cur = S[name]; ctx = { args };
    window.__freeze = true; window.requestAnimationFrame = () => 0;
    canvas().style.visibility = 'hidden'; // keep the headless compositor from re-presenting every readback
    gl.clientWaitSync = () => gl.ALREADY_SIGNALED; // frozen and offline: never let the frame queue skip a draw
    log.length = 0; R.clock = 0; R.recording = true;
    log.push({ k: 'start', t: 0, amb: A.ambGain?.gain.value ?? 0, master: A.master?.gain.value, loops: loops.map(l => ({ id: l.id, name: l.name, file: l.file, gain: l.gain, rate: l.rate, ref: l.ref, roll: l.roll, v: l.last || 0 })) });
    setUI(cur.ui || { hint: false }); cur.setup?.(ctx, args); if (cur.ui?.hud === false) document.getElementById('hud').classList.add('hidden'); else document.getElementById('hud').classList.remove('hidden');
  },
  async frame(name, i, keep) {
    const sub = cur.sub || 2;
    for (let k = 0; k < sub; k++) { R.clock = (i * sub + k) / (30 * sub); cur.frame?.(i + k / sub, ctx, k); G.tick(1, 1 / (30 * sub)); }
    R.clock = (i + 1) / 30; sampleLoops();
    if (ctx.listen != null) findListen().value = Math.max(findListen().value, ctx.listen);
    if (cur.ui?.hud === false) document.getElementById('hud').classList.add('hidden');
    if (!keep) return null;
    await new Promise(r => setTimeout(r, cur.wait ?? 0)); // let the CRT interface repaint its DOM capture
    G.step(0);
    return canvas().toDataURL('image/jpeg', 0.93);
  },
  finish() { R.recording = false; return { log: log.slice(), loops: loops.map(({ pos, ...l }) => l) }; },
  // PCM of synthesized buffers used by this shot (files on disk cover the rest)
  dump() {
    const out = {};
    for (const [buf, id] of baked) {
      const chans = []; for (let c = 0; c < buf.numberOfChannels; c++) { const f = buf.getChannelData(c); const u = new Uint8Array(f.buffer, f.byteOffset, f.byteLength); let b = ''; for (let j = 0; j < u.length; j += 0x8000) b += String.fromCharCode.apply(null, u.subarray(j, j + 0x8000)); chans.push(btoa(b)); }
      out[id] = { sr: buf.sampleRate, chans };
    }
    return out;
  },
  status() { const s = JSON.parse(render_game_to_text()); return { mode: s.mode, player: s.player, yaw: +P.yaw.toFixed(2), monster: s.monster, chapter: s.chapter.id, objective: s.objective.text, psychosis: s.psychosis }; },
};
})();

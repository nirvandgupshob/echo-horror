(() => {
const D = __dir, G = D.G, P = D.P, S = D.S, V = (x, y, z) => new D.V3(x, y, z);
const M = G.monster, RED = { r: 1, g: 0.12, b: 0.08 }, scene = G.level.scene;
const dist2 = () => Math.hypot(M.pos.x - P.pos.x, M.pos.z - P.pos.z);
const clean = () => { document.getElementById('death').classList.add('hidden'); P.frozen = false; P.lookTarget = null; P.hidden = null; document.getElementById('slits').classList.add('hidden'); window.__siege.stop();
  if (G.audio.master) G.audio.master.gain.value = 0; M.despawn(); G.echo.clear(); G.game.state = 'play'; G.game.fear = 0; G.game.psychosis = 0; P.keys.clear(); G.camera.fov = 80; G.camera.updateProjectionMatrix(); document.getElementById('fade').style.opacity = 0; };
const throwStone = () => { P.stones = Math.max(1, P.stones); G.vm.throw(); P.throwStone(scene); };
D.clean = clean;

S.wake = { ui: { hud: false },
  setup() { clean(); P.reset({ x: 34.9, z: 50.6 }, 0.55); P.pitch = -0.05; },
  frame(i) { if (i === 40) D.tap(); if (i === 100) D.tap(); P.yaw += 0.002; },
};
// walking the locker corridor, tapping as you go
S.walk = { ui: { hud: false },
  setup() { clean(); P.reset({ x: 23.0, z: 27.55 }, Math.PI / 2); P.pitch = -0.03; },
  frame(i) { D.hold('KeyW', i > 4); if (i % 34 === 8) D.tap(); P.yaw = Math.PI / 2 + Math.sin(i / 40) * 0.12; },
};
// a stone thrown across the atrium lights up the whole hall
S.stone = { ui: { hud: false },
  setup() { clean(); P.reset({ x: 7, z: 35.2 }, 0.0); P.pitch = 0.12; },
  frame(i) { if (i === 10) D.tap(); if (i === 50) throwStone(); P.pitch += (0.02 - P.pitch) * 0.02; P.yaw += 0.0006; },
};
// the creature drops out of the atrium vent
S.vent = { ui: { hud: false },
  setup(c) { clean(); P.reset({ x: 25.6, z: 32.6 }, 0.1); P.pitch = 0.05; c.listen = 0; },
  frame(i, c) {
    if (i === 6) D.tap();
    if (i === 50) { const vent = V(28, 4.8, 25); G.audio.crash(vent); G.audio.monsterRoar(vent);
      G.echo.emit(vent, { radius: 34, speed: 13, strength: 1.4, decay: 0.5, color: RED }); M.spawn(V(28, 0, 25.6), 'investigate'); M.goTo(V(26, 0, 23), 'investigate'); }
    c.listen = i >= 50 ? 1 : 0;
    if (i > 50) { P.yaw = D.lerpAng(P.yaw, D.yawTo(28, 25), 0.05); P.pitch += (0.35 - P.pitch) * 0.04; }
    if (i === 95) D.tap();
  },
};
// hold V: the red waves of its steps come down the corridor
S.listen = { ui: { hud: false },
  setup(c) { clean(); P.reset({ x: 14.0, z: 27.6 }, -Math.PI / 2); P.pitch = -0.02; M.spawn(V(23.4, 0, 27.6), 'investigate'); M.goTo(V(16.6, 0, 27.6), 'investigate'); },
  frame(i, c) { D.hold('KeyV', i > 6); if (M.active) P.yaw = D.lerpAng(P.yaw, D.yawTo(M.pos.x, M.pos.z), 0.03); },
};
// hiding: in a locker, hand over the mouth, it sniffs at the door
S.locker = { ui: { hint: false, loc: false, prompt: false },
  setup(c) { c.listen = 1; clean(); const it = G.level.items.filter(it => it.type === 'locker' && it.inside).find(it => Math.abs(it.pos.x - 18.3) < 0.2 && it.pos.z < 27);
    c.it = it; P.reset(it.front, it.yaw + Math.PI); G.use(it); c.phase = 0;
    M.spawn(V(23.0, 0, 27.8), 'investigate'); M.goTo(V(it.front.x + 0.1, 0, it.front.z + 0.5), 'investigate'); },
  frame(i, c) {
    D.hold('KeyQ', i > 40);
    if (c.phase === 0 && M.active && Math.hypot(M.pos.x - c.it.front.x, M.pos.z - c.it.front.z) < 1.1) { c.phase = 1; c.t0 = i; M.startSniff(true); }
    if (c.phase === 1 && i - c.t0 > 120) { c.phase = 2; M.goTo(V(13.5, 0, 27.6), 'investigate'); }
    if (M.active) { P.yaw = D.lerpAng(P.yaw, D.yawTo(M.pos.x, M.pos.z), 0.04); }
  },
};
// the generator wakes up: ninety decibels, an orange wave through the whole level
S.generator = { ui: { hud: false },
  setup(c) { clean(); P.reset({ x: 29.2, z: 11.6 }, D.yawTo(32, 8.6, { x: 29.2, z: 11.6 })); P.pitch = -0.05; c.gen = null; },
  frame(i, c) {
    if (i === 8) D.tap();
    if (i === 40) { const GEN = V(32, 1.5, 8.6); G.audio.door(GEN); c.gen = G.audio.createMachine(GEN, { type: 'generator', gain: 1.0 }); c.gen.setGain(1, 1.5); c.gen.spinUp(3.5);
      G.game.noise(GEN.clone(), { radius: 30, visual: 26, color: { r: 1, g: 0.55, b: 0.15 }, strength: 1.4 }); }
    if (i > 40 && (i - 40) % 38 === 0) G.echo.emit(V(32, 1.5, 8.6), { radius: 9, speed: 9, strength: 0.6, decay: 1.2, color: { r: 1, g: 0.55, b: 0.15 } });
    P.yaw += 0.0012; P.pitch += (0.08 - P.pitch) * 0.01;
  },
};
// the lift hall: shutter down, it rams it, you brace with your palm
S.siege = { ui: { hint: false, loc: false, obj: false },
  setup(c) { clean(); P.reset({ x: 11.4, z: 8.5 }, -Math.PI / 2); P.pitch = 0.02; c.listen = 1; const sg = window.__siege; sg.start();
    M.pos.set(19, 0, 8.4); sg.go('A'); c.closed = false; },
  frame(i, c) {
    const sg = window.__siege;
    if (!c.closed && i === 30) { c.closed = true; D.press('Digit1'); }
    D.hold('KeyW', i > 45);
    if (i % 50 === 20 && i < 60) D.tap();
  },
};
// hand over the mouth while it walks right past you
S.breath = { ui: { hud: false },
  setup(c) { clean(); P.reset({ x: 16.2, z: 28.45 }, -Math.PI / 2 + 0.5); P.pitch = -0.02; c.listen = 1;
    M.spawn(V(23.4, 0, 27.5), 'investigate'); M.goTo(V(13.0, 0, 27.4), 'investigate'); c.phase = 0; },
  frame(i, c) {
    D.hold('KeyQ', i > 25);
    if (c.phase === 0 && dist2() < 1.6) { c.phase = 1; c.t0 = i; M.startSniff(true); }
    if (c.phase === 1 && i - c.t0 > 75) { c.phase = 2; M.goTo(V(9.5, 0, 27.6), 'investigate'); }
    if (M.active) { const h = M.headWorld; const dx = h.x - P.pos.x, dz = h.z - P.pos.z; P.yaw = D.lerpAng(P.yaw, Math.atan2(-dx, -dz), 0.05);
      P.pitch += (Math.atan2(h.y - 1.6, Math.hypot(dx, dz)) - P.pitch) * 0.05; }
  },
};
// the real main menu over its live level
S.menu = { ui: {}, wait: 60,
  setup() {},
  frame(i, c, k) { window.advanceTime(1000 / 60); },
};
// the tap that shows it to you, and you to it
S.reveal = { ui: { hud: false },
  setup(c) { clean(); P.reset({ x: 14.2, z: 27.6 }, -Math.PI / 2); P.pitch = 0.02; c.listen = 0;
    M.spawn(V(19.5, 0, 27.7), 'investigate'); M.goTo(V(16.2, 0, 27.6), 'investigate'); c.phase = 0; },
  frame(i, c) {
    c.listen = i < 40 ? 0.6 : 0;
    if (c.phase === 0 && dist2() < 2.4) { c.phase = 1; c.t0 = i; M.setState('search'); M.path = null; }
    if (c.phase === 1 && i - c.t0 === 12) { D.tap(); c.phase = 2; }
    if (M.active) P.yaw = D.lerpAng(P.yaw, D.yawTo(M.pos.x, M.pos.z), 0.05);
  },
};
})();

(() => {
const D = __dir, G = D.G, P = D.P, S = D.S, V = (x, y, z) => new D.V3(x, y, z);
const M = G.monster, C = G.chapter;
const cave = (seq, pos, yaw, light = true) => { document.getElementById('death').classList.add('hidden'); G.camera.fov = 80; G.camera.updateProjectionMatrix();
  G.startCave(seq ? { sequence: seq, pos, yaw, flashlight: { owned: true, on: light, charge: 1 }, stones: 5 } : null); G.echo.clear(); M.despawn(); };
const aim = (p, k = 0.06) => { const dx = p.x - P.pos.x, dz = p.z - P.pos.z; P.yaw = D.lerpAng(P.yaw, Math.atan2(-dx, -dz), k);
  const pitch = Math.atan2(p.y - (P.pos.y + 1.6), Math.hypot(dx, dz)); P.pitch += (pitch - P.pitch) * k; };
const EXPLORE = { phase: 'explore', opening: 1 };

S.descent = { ui: { hud: false },
  setup() { cave(null); G.tick(260); P.pitch = 0.02; },
  frame(i) { if (i === 12) D.tap(); P.yaw = Math.PI + Math.sin(i / 50) * 0.25; },
};
S.pry = { ui: { hud: false },
  setup(c) { cave(null); for (let n = 0; n < 2000 && C.sequence.phase !== 'pry'; n++) G.tick(1, 1 / 60); c.n = 0; },
  frame(i) { D.hold('KeyE', i > 15); if (i === 8 || i === 175) D.tap(); },
};
S.ward = { ui: { hud: false },
  setup() { cave(EXPLORE, { x: 8.5, z: 8.6 }, Math.PI); P.pitch = 0; },
  frame(i) { D.hold('KeyW', i > 6 && i < 200); if (i % 40 === 10) D.tap();
    const target = P.pos.z < 12 ? V(10, 1.6, 13.5) : V(13, 1.6, 17); aim(target, 0.02); },
};
S.miners = { ui: { hud: false },
  setup() { cave(EXPLORE, { x: 22.3, z: 27.2 }, -Math.PI / 2); P.pitch = 0.05; },
  frame(i) { if (i === 10 || i === 100) D.tap(); P.pitch += (0.42 - P.pitch) * 0.012; P.yaw += 0.0011; D.hold('KeyW', i > 30 && i < 70); },
};
S.spider = { ui: { hud: false },
  setup(c) { cave({ ...EXPLORE, drained: true, tuned: true }, { x: 46, z: 21 }, 0, false); G.tick(30); const p = C.spider.root.position;
    c.from = { x: p.x + 0.73 * 4.6, z: p.z + 0.68 * 4.6 }; P.reset(c.from, D.yawTo(p.x, p.z, c.from)); P.pitch = 0.15; G.flashlight.on = false; },
  frame(i, c) { if (i === 10 || i === 55) D.tap(); if (i === 95) D.press('KeyT'); aim(C.spider.root.position, i < 95 ? 0.05 : 0.1); },
};
})();

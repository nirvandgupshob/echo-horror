// Offline frame-stepped capture of the game: time advances only when we say so.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs'), path = require('node:path');
const SEED_INIT = `(() => {
  let s = 0x9e3779b9 ^ (Number(new URLSearchParams(location.search).get('seed')) || 7);
  Math.random = () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  // tag decoded sample buffers with their file so the offline mixer can find them
  const urlOf = new WeakMap(); window.__bufFile = new WeakMap();
  const ab = Response.prototype.arrayBuffer;
  Response.prototype.arrayBuffer = async function () { const b = await ab.call(this); urlOf.set(b, this.url); return b; };
  const dec = BaseAudioContext.prototype.decodeAudioData;
  BaseAudioContext.prototype.decodeAudioData = async function (b, ...rest) { const u = urlOf.get(b); const buf = await dec.call(this, b, ...rest); if (u) window.__bufFile.set(buf, u.split('/').pop()); return buf; };
  const st = AudioBufferSourceNode.prototype.start;
  AudioBufferSourceNode.prototype.start = function (...a) { window.__lastSrc = this; return st.apply(this, a); };
  try { localStorage.setItem('echo.quality', localStorage.getItem('echo.quality') || 'high'); localStorage.setItem('echo.performance','native'); } catch (_) {}
})();`;

async function open({ w = 1920, h = 1080, seed = 7, quality = 'high', lang = 'en' } = {}) {
  const browser = await chromium.launch({ headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  page.on('pageerror', e => console.log('PAGEERR', e.message));
  page.on('crash', () => console.log('RENDERER CRASHED'));
  page.on('console', m => { if (m.type() === 'error') console.log('CONSOLE', m.text().slice(0, 300)); });
  await page.addInitScript(`localStorage.setItem('echo.quality','${quality}');localStorage.setItem('echo.language','${lang}');localStorage.removeItem('echo.save');`);
  await page.addInitScript(SEED_INIT);
  const url = new URL(process.env.GAME_URL || 'http://127.0.0.1:4173/');
  for (const [k, v] of Object.entries({ mute: 1, renderer: 'webgl', seed })) url.searchParams.set(k, v);
  await page.goto(url.href);
  await page.waitForFunction(() => window.__game && document.querySelector('#start').dataset.screen === 'headphones', { timeout: 300000 });
  await page.addScriptTag({ path: path.join(__dirname, 'director.js') });
  return { browser, page };
}

// Capture n frames; per frame the page-side director advances the game and renders.
async function record(page, name, frames, outDir, opts = {}) {
  const dir = path.join(outDir, name);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const every = opts.every || 1;
  await page.evaluate(([n, o]) => __dir.setup(n, o), [name, opts.args || {}]);
  const t0 = Date.now();
  let tk = 0, tn = 0;
  for (let i = 0; i < frames; i++) {
    const keep = i % every === 0 && i >= (opts.from || 0) && i < (opts.to ?? frames); const ts = Date.now();
    const data = await page.evaluate(([n, i, keep]) => __dir.frame(n, i, keep), [name, i, keep]);
    if (keep && data) fs.writeFileSync(path.join(dir, String(i).padStart(5, '0') + '.jpg'), Buffer.from(data.split(',')[1], 'base64'));
    if (keep) tk += Date.now() - ts; else tn += Date.now() - ts;
  }
  console.log('timing keep', tk, 'other', tn);
  const snd = await page.evaluate(() => __dir.finish());
  fs.writeFileSync(path.join(dir, 'sound.json'), JSON.stringify(snd));
  const baked = await page.evaluate(() => __dir.dump());
  const bdir = path.join(outDir, '_baked'); fs.mkdirSync(bdir, { recursive: true });
  for (const [id, b] of Object.entries(baked)) if (!fs.existsSync(path.join(bdir, id + '.json'))) fs.writeFileSync(path.join(bdir, id + '.json'), JSON.stringify(b));
  console.log(name, frames, 'frames', ((Date.now() - t0) / 1000).toFixed(1) + 's', JSON.stringify(await page.evaluate(() => __dir.status())));
}
module.exports = { open, record };

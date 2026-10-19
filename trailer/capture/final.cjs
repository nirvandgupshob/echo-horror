// Final capture: every shot on a fresh page (same seed), every frame kept.
const H = require('./harness.cjs'); const fs = require('node:fs'); const path = require('node:path');
const PREVIEW = !!process.env.PREVIEW;
const OUT = path.resolve(process.env.FRAMES_DIR || path.join(__dirname, '..', 'build', PREVIEW ? 'preview' : 'frames'));
const W = +process.env.W || (PREVIEW ? 1280 : 1920), HH = +process.env.H || (PREVIEW ? 720 : 1080), Q = process.env.Q || 'low';
// [chapter, shot, frames to simulate, first kept frame]
const SHOTS = [
  ['ch1', 'wake', 151, 4], ['ch1', 'walk', 121, 6], ['ch1', 'stone', 121, 40], ['ch1', 'vent', 151, 0],
  ['ch1', 'listen', 181, 0], ['ch1', 'breath', 201, 40], ['ch1', 'reveal', 211, 60], ['ch1', 'generator', 151, 30], ['ch1', 'siege', 241, 40],
  ['ch2', 'descent', 96, 20], ['ch2', 'pry', 201, 20], ['ch2', 'ward', 131, 0], ['ch2', 'miners', 181, 0], ['ch2', 'spider', 211, 0],
  ['menu', 'menu', 121, 0],
];
const only = process.argv.slice(2);
async function start(page, kind) {
  await page.locator('#enter-menu').click({ force: true });
  if (kind === 'menu') { await page.waitForTimeout(6000); return; }
  await page.locator(kind === 'ch1' ? '#play' : '#chapter-two').click({ force: true });
  await page.waitForFunction(() => document.querySelector('#start').dataset.screen === 'briefing', null, { timeout: 120000 });
  await page.locator('#begin-session').click({ force: true });
  await page.waitForFunction(k => __game.game.state === 'play' && (k === 'ch1' || __game.chapter.active), kind, { timeout: 120000 });
  await page.waitForTimeout(4000);
}
(async () => {
  for (const [kind, name, frames, from] of SHOTS) {
    if (only.length && !only.includes(name)) continue;
    const dir = path.join(OUT, name);
    if (fs.existsSync(path.join(dir, 'sound.json')) && fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).length === Math.ceil((frames - from) / (PREVIEW ? 15 : 1))) { console.log('skip', name); continue; }
    for (let attempt = 0; attempt < 3; attempt++) {
      const { browser, page } = await H.open({ w: W, h: HH, quality: Q });
      try {
        await start(page, kind);
        await page.addScriptTag({ path: path.join(__dirname, 'shots.js') });
        await page.addScriptTag({ path: path.join(__dirname, 'shots2.js') });
        const t0 = Date.now();
        await H.record(page, name, frames, OUT, { every: PREVIEW ? 15 : 1, from });
        console.log('done', name, ((Date.now() - t0) / 60000).toFixed(1), 'min');
        await browser.close();
        break;
      } catch (e) { console.log('fail', name, attempt, String(e).slice(0, 300)); await browser.close().catch(() => {}); }
    }
  }
  console.log('ALL DONE');
})();

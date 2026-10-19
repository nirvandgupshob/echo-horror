"""Soundtrack for the showcase: the game's own SFX per clip + score built from its samples.

Writes mix_no_vo.wav (ducked where the narration goes). With vo/NN.wav files present
(numbered like the VO sheet) it also writes mix_full.wav with the narration on top.
"""
import os, sys, glob
import numpy as np
import sfxmix as S
from timeline import *

SR = S.SR
VO_DIR = os.environ.get('VO_DIR', 'vo')
SRC = os.environ.get('SRC', os.path.join(os.path.dirname(__file__), '..', 'build', 'frames'))
BAKED = os.path.join(SRC, '_baked')
N = int(END * SR) + SR
rng = np.random.default_rng(5)

def at(t): return int(t * SR)

def add(buf, x, t, gain=1.0):
    i = at(t)
    if i >= len(buf): return
    if i < 0: x = x[-i:]; i = 0
    x = x[:len(buf) - i]
    buf[i:i + len(x)] += x * gain

def fade(x, a=0.01, b=0.02):
    n = len(x); fa, fb = int(a * SR), int(b * SR)
    if fa: x[:fa] *= np.linspace(0, 1, fa)[:, None]
    if fb: x[n - fb:] *= np.linspace(1, 0, fb)[:, None]
    return x

def smp(file, rate=1.0, lp=0, rev=False):
    x = S.resample(S.load(file, BAKED), rate)
    if lp: x = S.lowpass(x, lp)
    if rev: x = x[::-1].copy()
    return x

def loop(file, dur, rate=1.0, lp=0, start=0.0):
    x = smp(file, rate, lp)
    n = int(dur * SR); i0 = int(start * SR) % len(x)
    reps = int(np.ceil((n + i0) / len(x))) + 1
    return np.tile(x, (reps, 1))[i0:i0 + n].copy()

def env(points, n=None):
    """Piecewise-linear gain curve from (t, gain) points over the whole timeline."""
    n = n or N; tt = np.arange(n) / SR
    ts, gs = zip(*points)
    return np.interp(tt, ts, gs).astype(np.float32)[:, None]

_IR = None
def wet(x, mix=0.5):
    global _IR
    if _IR is None: _IR = S.make_ir(4.5, 9)
    ir = _IR
    return x * (1 - mix) + S.convolve(np.concatenate([x, np.zeros((int(4.5 * SR), 2), np.float32)]), ir)[:len(x)] * mix * 1.6

# ---------------------------------------------------------------- game sound per clip
def game_layer():
    out = np.zeros((N, 2), np.float32)
    stems = {}
    def stem(shot):
        if shot not in stems:
            stems[shot] = S.render(os.path.join(SRC, shot), BAKED)
            pk = np.abs(stems[shot]).max()
            print(f'  {shot}: peak {pk:.2f}', flush=True)
        return stems[shot]
    for c in CLIPS:
        if c.get('mute'): continue
        x = stem(c['shot'])
        sp = c.get('speed', 1.0)
        a = int(c['fi'] / FPS * SR); b = a + int(c['dur'] * sp * SR)
        seg = x[a:b].copy()
        if sp != 1.0: seg = S.resample(seg, sp)   # slowed picture, slowed (and lowered) sound
        seg = fade(seg, 0.004, 0.03)
        add(out, seg, c['t'], c.get('sgain', 0.55))
    # montage: each cut takes its own slice of sound, a touch hotter
    t = MONTAGE_T
    for shot, fi, n in MONTAGE:
        x = stem(shot); a = int(fi / FPS * SR); b = a + int(n / FPS * SR)
        add(out, fade(x[a:b].copy(), 0.002, 0.01), t, 0.6); t += n / FPS
    return out

# ---------------------------------------------------------------- score from the game's samples
def score():
    out = np.zeros((N, 2), np.float32)
    # bed: the facility's hum slowed into a drone, with a dark wind on top
    hell = loop('amb_hell_0.mp3', N / SR, 0.62, lp=1400)
    belly = loop('amb_belly_0.mp3', N / SR, 0.7, lp=600)
    wind = loop('loop_vent_0.mp3', N / SR, 0.45, lp=1200, start=3)
    bed = hell * 0.55 + belly * 0.7 + wind * 0.18
    curve = env([(0, 0), (2.5, 0.5), (10.8, 0.6), (11.33, 0.0), (13.4, 0.0), (15.27, 0.0), (15.3, 0.9), (18.4, 1.1), (18.6, 0.2), (19.0, 0.7),
                 (23.4, 0.7), (23.6, 0.45), (30, 0.6), (34.9, 0.7), (36.3, 1.0), (37.15, 1.0), (37.17, 0.0), (39.1, 0.0), (40.2, 0.45), (50.8, 0.8),
                 (51.17, 0.35), (55.8, 0.6), (56.0, 0.3), (64.5, 0.35), (74.8, 0.6), (81.8, 0.8), (88.4, 1.1), (88.5, 0.0), (89.0, 0.5),
                 (99.0, 0.4), (101.5, 0.0)])
    out += bed * curve * 0.55
    # opening: one heartbeat in the dark, then the tap is the game's
    for t in (0.35, 1.05): add(out, smp('heart_0.mp3', 0.9, lp=500), t, 0.5)
    # "the station went silent": everything drops, a far knock answers
    add(out, wet(smp('knock_3.mp3', 0.55, lp=900), 0.8), 12.6, 0.25)
    # vent crash: sub hit under the game's crash
    add(out, wet(smp('sting_low_1.mp3', 0.8), 0.4), 15.25, 0.9)
    add(out, smp('slam_2.mp3', 0.45, lp=300), 15.27, 0.9)
    # riser into the title: reversed stinger + reversed scream through the reverb
    r = wet(smp('sting_high_4.mp3', 0.7), 0.7)[::-1].copy(); add(out, r, 18.6 - len(r) / SR, 0.55)
    r2 = wet(smp('m_scream_2.mp3', 0.5, lp=3000), 0.8)[::-1].copy(); add(out, r2, 18.6 - len(r2) / SR, 0.3)
    # title: hit, the cane ring, the red answer, the second ring
    add(out, wet(smp('sting_low_0.mp3', 0.7), 0.5), 18.6, 1.0)
    add(out, smp('bonecrack_1.mp3', 0.5, lp=500), 18.6, 0.6)
    add(out, wet(smp('click_2.mp3', 1.25), 0.85), 18.75, 0.9)
    add(out, wet(smp('m_click_1.mp3', 0.7), 0.7), 19.35, 0.55)
    add(out, wet(smp('click_0.mp3', 1.2), 0.85), 20.8, 0.6)
    # hunt: heartbeat that speeds up through the breath and the reveal
    t, gap = 29.4, 0.95
    while t < 36.2:
        add(out, smp('heart_0.mp3', 1.0, lp=600), t, 0.45 + (t - 29.4) * 0.06)
        t += gap; gap = max(0.42, gap * 0.95)
    # build to the screamer, then nothing
    r3 = wet(smp('sting_mid2_3.mp3', 0.6), 0.75)[::-1].copy(); add(out, r3, 36.28 - len(r3) / SR, 0.6)
    # after the black: a long low tail as the generator comes up
    add(out, wet(smp('sting_low_2.mp3', 0.55), 0.6), 39.2, 0.45)
    # siege: slow pulse on the bass
    for k in range(7): add(out, smp('slam_0.mp3', 0.4, lp=220), 44.6 + k * 0.95, 0.35)
    # chapter card: the lift
    add(out, wet(smp('ding_0.mp3', 0.9), 0.6), 51.35, 0.55)
    motor = loop('loop_lift_0.mp3', 5.2, 0.8, lp=2500); motor = fade(motor, 0.8, 0.1)
    add(out, motor, 51.0, 0.35)
    add(out, wet(smp('metal_heavy_3.mp3', 0.6), 0.5), 55.9, 0.9)
    add(out, smp('slam_1.mp3', 0.5, lp=400), 55.92, 0.8)
    # caves: water, slow drips, a far groan
    add(out, fade(loop('loop_water_0.mp3', 17, 0.8, lp=1800), 1.5, 2.0), 64.5, 0.16)
    for t in np.arange(65.0, 81.0, 1.7): add(out, wet(smp(f'drip_{int(t * 7) % 10}.mp3', 0.9 + (t % 0.3)), 0.8), t, 0.25)
    add(out, wet(smp('m_growl_4.mp3', 0.6, lp=900), 0.85), 72.4, 0.35)
    # into the montage: riser, then a hit on every cut
    r4 = wet(smp('sting_high_9.mp3', 0.55), 0.75)[::-1].copy(); add(out, r4, MONTAGE_T - len(r4) / SR + 0.1, 0.5)
    t = MONTAGE_T
    hits = ['slam_0.mp3', 'bonecrack_0.mp3', 'slam_3.mp3', 'm_click_2.mp3', 'sting_mid_2.mp3']
    for k, (_, _, n) in enumerate(MONTAGE):
        add(out, wet(smp(hits[k % len(hits)], 0.6 + 0.04 * (k % 3), lp=2600), 0.35), t, 0.55 + 0.03 * k)
        add(out, smp('heart_0.mp3', 1.1, lp=500), t, 0.5)
        t += n / FPS
    # end card: the big hit, then the cane in an empty hall
    add(out, wet(smp('sting_low_3.mp3', 0.6), 0.5), 88.5, 1.1)
    add(out, smp('slam_4.mp3', 0.4, lp=250), 88.5, 1.0)
    for t in (91.6, 95.0, 98.6): add(out, wet(smp('click_3.mp3', 1.25), 0.9), t, 0.32)
    add(out, wet(smp('m_click_0.mp3', 0.65), 0.85), 99.15, 0.22)
    return out

def vo_spans():
    spans = []
    for t, line in VO:
        words = len(line.split())
        spans.append((t, t + 0.36 * words + 0.45))
    return spans

def duck_curve(depth_db):
    g = np.ones(N, np.float32); k = 10 ** (depth_db / 20)
    for a, b in vo_spans():
        ia, ib = at(a - 0.12), at(b + 0.25)
        g[ia:ib] = k
    # smooth attack/release
    w = int(0.18 * SR); ker = np.ones(w, np.float32) / w
    g = S.fftconv(g, ker).astype(np.float32)
    return g[:, None]

def limiter(x, ceiling=0.89):
    # soft knee: transparent below ~-6 dBFS, tanh above
    a = np.abs(x); k = 0.5
    y = np.where(a < k, x, np.sign(x) * (k + (ceiling - k) * np.tanh((a - k) / (ceiling - k))))
    return y.astype(np.float32)

def main():
    print('game sound', flush=True)
    g = game_layer()
    print('score', flush=True)
    s = score()
    g /= max(1e-6, np.percentile(np.abs(g), 99.9)) / 0.5
    music = s / max(1e-6, np.percentile(np.abs(s), 99.9)) * 0.42
    mix = g * duck_curve(-3) + music * duck_curve(-7)
    rms = np.sqrt((mix ** 2).mean())
    mix *= 0.11 / rms     # leaves headroom for the narration
    S.write_wav('mix_no_vo.wav', limiter(mix))
    vo = sorted(glob.glob(os.path.join(VO_DIR, '[0-9][0-9]*.*')))
    if vo:
        import subprocess
        voice = np.zeros_like(mix)
        for f in vo:
            idx = int(os.path.basename(f)[:2]) - 1
            raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', f, '-af', 'silenceremove=start_periods=1:start_threshold=-50dB', '-f', 'f32le', '-ac', '2', '-ar', str(SR), '-'], capture_output=True, check=True).stdout
            x = np.frombuffer(raw, np.float32).reshape(-1, 2).copy()
            x *= 0.16 / max(1e-6, np.sqrt((x[np.abs(x).max(1) > 0.01] ** 2).mean()))   # every line at one level
            add(voice, x, VO[idx][0], 1.0)
            print(f'  vo {idx + 1:02d}: {len(x) / SR:.1f}s at {VO[idx][0]:.2f}', flush=True)
        S.write_wav('mix_full.wav', limiter(mix + voice))
    print('done', flush=True)

if __name__ == '__main__':
    main()

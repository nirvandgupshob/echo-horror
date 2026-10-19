"""Re-create a shot's game audio offline from the sample log the director wrote.

Every logged event names the sample file, playback rate, gain and where the
source sat relative to the listener; we place the decoded samples on a 48 kHz
stereo timeline with distance roll-off, equal-power panning, occlusion low-pass
and a shared concrete-room reverb send, like the game's Web Audio graph.
"""
import json, os, subprocess, sys, base64
import numpy as np

SR = 48000
SFX = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'public', 'sfx')
_cache = {}

def load(file, baked_dir=None):
    if file in _cache:
        return _cache[file]
    if file.startswith('baked_'):
        d = json.load(open(os.path.join(baked_dir, file + '.json')))
        chans = [np.frombuffer(base64.b64decode(c), dtype=np.float32) for c in d['chans']]
        x = np.stack(chans if len(chans) > 1 else chans * 2, 1)
        if d['sr'] != SR:
            n = int(len(x) * SR / d['sr']); t = np.linspace(0, len(x) - 1, n)
            x = np.stack([np.interp(t, np.arange(len(x)), x[:, c]) for c in range(2)], 1)
    else:
        raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', os.path.join(SFX, file), '-f', 'f32le', '-ac', '2', '-ar', str(SR), '-'], capture_output=True, check=True).stdout
        x = np.frombuffer(raw, dtype=np.float32).reshape(-1, 2)
    _cache[file] = x.astype(np.float32)
    return _cache[file]

def resample(x, rate):
    if abs(rate - 1) < 1e-4:
        return x
    n = max(1, int(len(x) / rate)); t = np.arange(n) * rate
    i = np.arange(len(x))
    return np.stack([np.interp(t, i, x[:, c]) for c in range(2)], 1).astype(np.float32)

def lowpass(x, fc):
    if not fc or fc >= 17000:
        return x
    n = len(x); N = 1 << int(np.ceil(np.log2(n + 64)))
    X = np.fft.rfft(x, N, axis=0); f = np.fft.rfftfreq(N, 1 / SR)
    H = 1 / np.sqrt(1 + (f / fc) ** 2)   # one-pole magnitude, zero phase
    return np.fft.irfft(X * H[:, None], N, axis=0)[:n].astype(np.float32)

def dist_gain(d, ref, roll):
    d = max(d, ref)
    return ref / (ref + roll * (d - ref))

def pan(az):
    # az: radians, 0 ahead, + right. A little head shadow keeps sources behind darker.
    p = np.clip(np.sin(az), -1, 1) * 0.85
    a = (p + 1) * np.pi / 4
    return np.cos(a), np.sin(a)

def make_ir(sec=3.4, seed=3):
    rng = np.random.default_rng(seed); n = int(sec * SR); t = np.arange(n) / SR - 0.012
    out = np.zeros((n, 2), np.float32)
    for c in range(2):
        def band(lo, hi):
            z = rng.standard_normal(n); Z = np.fft.rfft(z); f = np.fft.rfftfreq(n, 1 / SR)
            Z[(f < lo) | (f > hi)] = 0; return np.fft.irfft(Z, n)
        lo, mid, hi = band(20, 500), band(900, 2400), band(3500, 16000)
        fade = np.clip(t / 0.04, 0, 1) * (t > 0)
        d = fade * (lo * np.exp(-6.9 * t / 3.0) * 1.2 + mid * np.exp(-6.9 * t / 2.0) + hi * np.exp(-6.9 * t / 0.8) * 0.6) * 0.5
        for _ in range(14):
            tt = rng.uniform(0.008, 0.08); d[int(tt * SR)] += rng.choice([-1, 1]) * rng.uniform(0.2, 0.7) * (1 - tt * 8)
        out[:, c] = d
    # ConvolverNode normalises its response to unit energy
    return out / np.sqrt((out ** 2).sum(0, keepdims=True))

IR = None
# the fear drone sits under everything in the game; in a trailer the score carries it
LOOP_TRIM = {'amb_hell': 0.25}
def convolve(x, ir):
    n = len(x) + len(ir) - 1; N = 1 << int(np.ceil(np.log2(n)))
    y = np.fft.irfft(np.fft.rfft(x, N, axis=0) * np.fft.rfft(ir, N, axis=0), N, axis=0)[:len(x)]
    return y.astype(np.float32)

def env_target(events, total, init, rate=200):
    """setTargetAtTime envelope sampled at `rate` Hz; events: (t, v, tc)."""
    n = int(total * rate) + 2; out = np.empty(n, np.float32); v = init; target = init; tc = 1.0
    ev = sorted(events); j = 0
    for i in range(n):
        t = i / rate
        while j < len(ev) and ev[j][0] <= t:
            _, target, tc = ev[j]; j += 1
            if tc <= 0: v = target
        v += (target - v) * (1 - np.exp(-1 / rate / max(tc, 1e-3)))
        out[i] = v
    return out

def render(shot_dir, baked_dir, total=None, master=0.9):
    global IR
    if IR is None:
        IR = make_ir()
    d = json.load(open(os.path.join(shot_dir, 'sound.json')))
    log = d['log']; loops = {l['id']: l for l in d['loops']}
    start = next(e for e in log if e['k'] == 'start')
    total = total or max(e['t'] for e in log) + 3
    n = int(total * SR) + 1
    dry = np.zeros((n, 2), np.float32); wet = np.zeros((n, 2), np.float32); crush = np.zeros((n, 2), np.float32)
    for e in log:
        if e['k'] != 'one':
            continue
        x = resample(load(e['file'], baked_dir), e['rate'])
        occ = e.get('occ', 0) or 0
        fc = e['lp'] or (18000 * 0.05 ** occ if occ > 0.01 else 0)
        x = lowpass(x, fc)
        g = e['gain'] * (dist_gain(e['d'], e['ref'], e['roll']) if e['d'] > 0 else 1)
        if e['d'] > 0:
            l, r = pan(e['az']); x = x * np.array([l, r], np.float32) * 1.41
        i0 = int(e['t'] * SR) - int(e.get('offset', 0) * SR)
        if i0 >= n:
            continue
        seg = x[max(0, -i0):][: n - max(i0, 0)] * g
        a = max(i0, 0)
        (crush if e.get('dist') else dry)[a:a + len(seg)] += seg
        w = e['wet'] * (1 + occ * 1.5)
        wet[a:a + len(seg)] += seg * w
    # loops: gain envelopes x positional roll-off
    CR = 200
    for lid, l in loops.items():
        evs = [(e['t'], e['v'], e['tc']) for e in log if e['k'] == 'gain' and e['id'] == lid]
        init = next((s['v'] for s in start['loops'] if s['id'] == lid), 0.0)
        if not evs and init <= 0:
            continue
        genv = env_target(evs, total, init, CR)
        pos = [e for e in log if e['k'] == 'lpos' and e['id'] == lid]
        tt = np.arange(len(genv)) / CR
        if pos:
            pt = np.array([p['t'] for p in pos]); dg = np.array([dist_gain(p['d'], l['ref'], l['roll']) for p in pos])
            occ = np.array([p['occ'] for p in pos]); az = np.array([p['az'] for p in pos])
            dg = np.interp(tt, pt, dg); occ = np.interp(tt, pt, occ); az = np.interp(tt, pt, az)
        else:
            dg = np.ones_like(tt); occ = np.zeros_like(tt); az = np.zeros_like(tt)
        L, R = pan(az)
        src = resample(load(l['file'], baked_dir), l.get('rate', 1))
        reps = int(np.ceil(n / len(src))) + 1
        src = np.tile(src, (reps, 1))[:n]
        # occlusion as a blend between the dry loop and a dark copy
        dark = lowpass(src, 900)
        k = np.interp(np.arange(n) / SR, tt, occ)[:, None]
        src = src * (1 - k) + dark * k
        gs = np.interp(np.arange(n) / SR, tt, genv * dg)
        lr = np.stack([np.interp(np.arange(n) / SR, tt, L), np.interp(np.arange(n) / SR, tt, R)], 1) * 1.41
        y = src * gs[:, None] * lr * LOOP_TRIM.get(l['name'], 1.0)
        dry += y; wet += y * 0.5 * (1 + k)
    # room tone
    evs = [(e['t'], e['v'], 1.5) for e in log if e['k'] == 'amb']
    aenv = env_target(evs, total, start.get('amb') or 0.12, CR)
    belly = lowpass(np.tile(resample(load('amb_belly_0.mp3'), 0.8), (int(n / (SR * 10)) + 3, 1))[:n], 900) * 0.55
    vent = lowpass(np.tile(resample(load('loop_vent_0.mp3'), 0.6), (int(n / (SR * 10)) + 3, 1))[:n], 900) * 0.12
    amb = (belly + vent) * np.interp(np.arange(n) / SR, np.arange(len(aenv)) / CR, aenv)[:, None]
    rev = lowpass(convolve(wet, IR), 7000) * 0.5
    out = dry + amb + rev + np.tanh(crush * 4) / np.tanh(4) * 0.9
    # master: hard cuts and recoveries
    m = [(0, 1.0, 0)] + [(e['t'], 0.0, 0) for e in log if e['k'] == 'cut'] + [(e['t'], e['v'] / 0.9, e['tc']) for e in log if e['k'] == 'master' and e['t'] > 0]
    menv = env_target([x for x in m[1:]], total, 1.0, CR)
    out *= np.interp(np.arange(n) / SR, np.arange(len(menv)) / CR, menv)[:, None]
    return compress(out * master)

def fftconv(a, k, mode='same'):
    n = len(a) + len(k) - 1; N = 1 << int(np.ceil(np.log2(n)))
    y = np.fft.irfft(np.fft.rfft(a, N) * np.fft.rfft(k, N), N)[:n]
    if mode == 'full': return y
    o = (len(k) - 1) // 2
    return y[o:o + len(a)]

def compress(x, thr_db=-12, ratio=4, knee_db=8, attack=0.003, release=0.25):
    # the game's DynamicsCompressor on the master bus, approximately
    lvl = np.abs(x).max(1)
    w = int(0.005 * SR); lvl = np.sqrt(np.maximum(fftconv(lvl ** 2, np.ones(w) / w), 0)) * 1.41 + 1e-9
    db = 20 * np.log10(lvl); over = db - thr_db
    gr = np.where(over <= -knee_db / 2, 0, np.where(over >= knee_db / 2, over * (1 - 1 / ratio), (1 - 1 / ratio) * (over + knee_db / 2) ** 2 / (2 * knee_db)))
    # peak-hold then release smoothing
    r = int(release * SR); k = np.exp(-np.arange(r) / (r / 4)); k /= k.sum()
    gr = np.maximum(gr, fftconv(gr, k, 'full')[:len(gr)])
    a = int(attack * SR) or 1; gr = fftconv(gr, np.ones(a) / a)
    return (x * (10 ** (-gr / 20))[:, None]).astype(np.float32)

def write_wav(path, x):
    x = np.clip(x, -1, 1)
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-f', 'f32le', '-ar', str(SR), '-ac', '2', '-i', '-', path], input=x.astype(np.float32).tobytes(), check=True)

if __name__ == '__main__':
    shot, baked = sys.argv[1], sys.argv[2]
    y = render(shot, baked)
    print('peak', np.abs(y).max(), 'rms', np.sqrt((y ** 2).mean()))
    write_wav(sys.argv[3], y)

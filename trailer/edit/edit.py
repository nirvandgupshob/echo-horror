"""Render the showcase picture: game footage + cards + type, piped into ffmpeg."""
import os, sys, subprocess, math
import numpy as np
from PIL import Image
from functools import lru_cache
import gfx
from gfx import W, H, ease, ease_out, place, text_layer
from timeline import *

SRC = os.environ.get('SRC', os.path.join(os.path.dirname(__file__), '..', 'build', 'frames'))
OUT = sys.argv[1] if len(sys.argv) > 1 else 'picture.mp4'
T0 = float(os.environ.get('T0', 0)); T1 = float(os.environ.get('T1', END))
STEP = int(os.environ.get('STEP', 1))   # >1 renders a sparse preview
COLORS = {'white': gfx.OFFWHITE, 'amber': gfx.AMBER}

@lru_cache(maxsize=24)
def shot_frame(shot, i):
    p = os.path.join(SRC, shot, f'{i:05d}.jpg')
    if not os.path.exists(p):
        # fall back to the nearest captured frame (sparse previews)
        files = sorted(f for f in os.listdir(os.path.join(SRC, shot)) if f.endswith('.jpg'))
        idx = [int(f[:5]) for f in files]
        j = min(range(len(idx)), key=lambda k: abs(idx[k] - i))
        p = os.path.join(SRC, shot, files[j])
    im = Image.open(p).convert('RGB')
    if im.size != (W, H):
        im = im.resize((W, H), Image.LANCZOS)
    return np.asarray(im, np.float32) / 255

def grade(x, gain=1.0, gamma=1.0):
    x = np.clip(x * gain, 0, 1)
    if gamma != 1.0:
        x = x ** gamma
    return x

def zoomed(x, s, cx=0.5, cy=0.5):
    if abs(s - 1) < 1e-3: return x
    w, h = int(W / s), int(H / s)
    x0 = int((W - w) * cx); y0 = int((H - h) * cy)
    im = Image.fromarray((np.clip(x, 0, 1) * 255).astype(np.uint8)[y0:y0 + h, x0:x0 + w])
    return np.asarray(im.resize((W, H), Image.BICUBIC), np.float32) / 255

def clip_frame(c, t):
    lt = t - c['t']; sp = c.get('speed', 1.0)
    pos = c['fi'] + lt * FPS * sp
    i0 = int(math.floor(pos)); fr = pos - i0
    a = shot_frame(c['shot'], i0)
    if sp < 1 and fr > 0.02:
        a = a * (1 - fr) + shot_frame(c['shot'], i0 + 1) * fr
    a = grade(a, c.get('gain', 1), c.get('gamma', 1))
    z = c.get('zoom')
    if z:
        k = ease(lt / c['dur'])
        a = zoomed(a, z[0] + (z[1] - z[0]) * k)
    return a

def montage_frame(t):
    lt = t - MONTAGE_T; f = int(lt * FPS)
    acc = 0
    for k, (shot, fi, n) in enumerate(MONTAGE):
        if f < acc + n:
            j = f - acc
            a = grade(shot_frame(shot, fi + j), 1.3, 0.88)
            # each cut lands with a punch-in and a flash on its first frame
            a = zoomed(a, 1.10 - 0.06 * j / n)
            if j == 0: a = a + 0.35
            if j < 2: a = gfx.rgb_split(a, 8 - j * 4)
            return a, k, j
        acc += n
    return None, None, None

MONTAGE_END = MONTAGE_T + sum(n for _, _, n in MONTAGE) / FPS

def base(t, rng):
    for c in CARDS:
        if c['t'] <= t < c['t'] + c['dur']:
            lt = t - c['t']
            if c['kind'] == 'black': return gfx.crt_finish(np.zeros((H, W, 3), np.float32), rng, lt, 0.6)
            if c['kind'] == 'title': return gfx.title_echo(lt, rng)
            if c['kind'] == 'chapter': return gfx.chapter_card(lt, rng)
    if MONTAGE_T <= t < MONTAGE_END:
        a, _, _ = montage_frame(t)
        if a is not None: return a
    for c in CLIPS:
        if c['t'] <= t < c['t'] + c['dur']:
            return clip_frame(c, t)
    return np.zeros((H, W, 3), np.float32)

def transitions(x, t, rng):
    for tr in TRANSITIONS:
        n = tr['n'] / FPS; d = t - tr['t']
        k = tr['kind']
        if k == 'flash' and 0 <= d < n:
            a = (1 - d / n) ** 2 * tr.get('k', 0.8)
            x = x * (1 - a) + np.array(tr['color'], np.float32) * a
        elif k == 'glitch' and -n / 2 <= d < n:
            amt = 1 - abs(d) / n
            x = gfx.slice_glitch(gfx.rgb_split(x, int(14 * amt)), rng, 60 * amt, 8)
        elif k == 'dip_in' and 0 <= d < n:
            x = x * ease(d / n)
        elif k == 'dip_out' and 0 <= d:
            x = x * (1 - ease(d / n))
    return x

def end_card(x, t):
    lt = t - END_CARD_T
    if lt < 0 or t >= 100.5: return x
    out = 1 - ease((t - 99.6) / 0.6)
    a = ease_out((lt - 0.2) / 1.0) * out
    b = ease_out((lt - 1.2) / 1.0) * out
    c = ease_out((lt - 5.6) / 1.0) * out
    # a dark band on the right so type reads over the corridor
    band = np.clip((np.arange(W, dtype=np.float32) - W * 0.52) / (W * 0.18), 0, 1)[None, :, None]
    x = x * (1 - band * 0.55 * max(a, b))
    xr = W - 170
    place(x, text_layer('A FIRST-PERSON HORROR GAME', 'mono', 24, tracking=0.3, color=gfx.AMBER), xr, 410, a, 'rt')
    place(x, text_layer('YOU PLAY WITH YOUR EARS', 'light', 54, tracking=0.12, color=gfx.OFFWHITE, glow=2), xr, 452, a, 'rt')
    place(x, text_layer('PLAY FREE IN YOUR BROWSER', 'light', 36, tracking=0.16, color=gfx.OFFWHITE), xr, 600, b, 'rt')
    place(x, text_layer('tg-prplx.github.io/echo-horror', 'mono', 34, tracking=0.04, color=gfx.AMBER, glow=2), xr, 656, b, 'rt')
    place(x, text_layer('HEADPHONES RECOMMENDED', 'mono', 22, tracking=0.32, color=(160, 158, 150)), xr, 760, c, 'rt')
    return x

def overlays(x, t):
    for cp in CAPTIONS:
        x = gfx.caption(x, t - cp['t'], cp['dur'], cp['key'], cp['text'])
    for lo in LOCATIONS:
        if lo['t'] <= t < lo['t'] + lo['hold'] + 0.7:
            x = gfx.location_type(x, t - lo['t'], [(s, z, COLORS[c]) for s, z, c in lo['lines']], hold=lo['hold'])
    x = end_card(x, t)
    return x

def render(out):
    rng = np.random.default_rng(11)
    n0, n1 = int(T0 * FPS), int(T1 * FPS)
    fps = FPS / STEP
    ff = subprocess.Popen(['ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(fps), '-i', '-',
                           '-c:v', 'libx264', '-preset', os.environ.get('PRESET', 'slow'), '-crf', os.environ.get('CRF', '18'), '-pix_fmt', 'yuv420p',
                           '-maxrate', '40M', '-bufsize', '80M', '-movflags', '+faststart', '-r', str(fps), out], stdin=subprocess.PIPE)
    for n in range(n0, n1, STEP):
        t = n / FPS
        x = base(t, rng)
        x = transitions(x, t, rng)
        x = overlays(x, t)
        ff.stdin.write((np.clip(x, 0, 1) * 255 + 0.5).astype(np.uint8).tobytes())
        if n % 150 == 0: print(f'{t:6.1f}s', flush=True)
    ff.stdin.close(); ff.wait()

if __name__ == '__main__':
    render(OUT)

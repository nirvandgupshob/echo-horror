"""Motion graphics for the ECHO showcase: type, cards and transitions, all numpy/PIL."""
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter
from functools import lru_cache

W, H = 1920, 1080
FONTS = {
    'thin': '/usr/share/fonts/opentype/inter/Inter-Thin.otf',
    'xlight': '/usr/share/fonts/opentype/inter/Inter-ExtraLight.otf',
    'light': '/usr/share/fonts/opentype/inter/Inter-Light.otf',
    'regular': '/usr/share/fonts/opentype/inter/Inter-Regular.otf',
    'medium': '/usr/share/fonts/opentype/inter/Inter-Medium.otf',
    'mono': '/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf',
    'serif_i': '/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf',
}

@lru_cache(64)
def font(name, size):
    return ImageFont.truetype(FONTS[name], size)

def ease(t):
    t = min(1, max(0, t)); return t * t * (3 - 2 * t)

def ease_out(t):
    t = min(1, max(0, t)); return 1 - (1 - t) ** 3

@lru_cache(256)
def text_layer(text, fname, size, tracking=0.0, color=(235, 232, 225), glow=0):
    """Tight RGBA image of a tracked line of text (tracking in em)."""
    f = font(fname, size)
    advs = [f.getlength(ch) for ch in text]
    track = tracking * size
    width = int(sum(advs) + track * max(0, len(text) - 1)) + 8
    asc, desc = f.getmetrics()
    img = Image.new('L', (width + 2 * glow + 4, asc + desc + 2 * glow + 4), 0)
    d = ImageDraw.Draw(img); x = glow + 2
    for ch, a in zip(text, advs):
        d.text((x, glow + 2), ch, font=f, fill=255); x += a + track
    a = np.asarray(img, np.float32) / 255
    if glow:
        g = np.asarray(img.filter(ImageFilter.GaussianBlur(glow)), np.float32) / 255
        a = np.clip(a + g * 0.6, 0, 1)
    rgba = np.zeros(a.shape + (4,), np.float32); rgba[..., :3] = np.array(color, np.float32) / 255; rgba[..., 3] = a
    return rgba

def place(frame, layer, x, y, alpha=1.0, anchor='lt'):
    """Alpha-composite an RGBA float layer into an RGB float frame at (x, y)."""
    h, w = layer.shape[:2]
    if anchor[0] == 'c': x -= w / 2
    elif anchor[0] == 'r': x -= w
    if anchor[1] == 'c': y -= h / 2
    elif anchor[1] == 'b': y -= h
    x, y = int(round(x)), int(round(y))
    x0, y0 = max(0, x), max(0, y); x1, y1 = min(W, x + w), min(H, y + h)
    if x1 <= x0 or y1 <= y0 or alpha <= 0: return frame
    l = layer[y0 - y:y1 - y, x0 - x:x1 - x]
    a = l[..., 3:4] * alpha
    frame[y0:y1, x0:x1] = frame[y0:y1, x0:x1] * (1 - a) + l[..., :3] * a
    return frame

def typed(text, t, cps=22, cursor=True):
    """Typewriter: characters revealed over time plus a blinking block cursor."""
    n = int(max(0, t) * cps)
    shown = text[:n]
    if cursor and (n < len(text) or int(t * 2.2) % 2 == 0):
        shown += '▌' if n < len(text) or t < len(text) / cps + 1.6 else ''
    return shown

def scanlines(frame, k=0.08):
    frame[::3] *= (1 - k); return frame

def grain(frame, rng, k=0.035):
    n = rng.standard_normal((H // 2, W // 2, 1)).astype(np.float32) * k
    n = np.repeat(np.repeat(n, 2, 0), 2, 1)
    return frame + n

def rgb_split(frame, px):
    if px == 0: return frame
    out = frame.copy()
    out[:, :, 0] = np.roll(frame[:, :, 0], px, 1)
    out[:, :, 2] = np.roll(frame[:, :, 2], -px, 1)
    return out

def slice_glitch(frame, rng, amount, bands=10):
    out = frame.copy()
    for _ in range(bands):
        y = rng.integers(0, H - 20); h = rng.integers(6, 80)
        out[y:y + h] = np.roll(out[y:y + h], int(rng.normal(0, amount)), 1)
    return out

def vignette():
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    r = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2)
    return np.clip(1.15 - 0.45 * r ** 2, 0, 1)[..., None]
VIG = None

def ring_mask(t, cx=W / 2, cy=H / 2, speed=1400, width=110):
    """Expanding echo ring: returns (front, filled) masks for a wave started t seconds ago."""
    yy, xx = np.ogrid[0:H, 0:W]
    d = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2).astype(np.float32)
    rad = t * speed
    front = np.exp(-((d - rad) / width) ** 2)
    filled = (d < rad).astype(np.float32)
    return front[..., None], filled[..., None]

# ---------------------------------------------------------------- cards
AMBER = (226, 160, 72)
OFFWHITE = (232, 228, 220)
RED = (230, 40, 28)

def crt_finish(frame, rng, t, strength=1.0):
    """Give flat cards the same tube look as the game footage."""
    global VIG
    if VIG is None: VIG = vignette()
    frame = grain(frame, rng, 0.03 * strength)
    frame = scanlines(frame, 0.10 * strength)
    return frame * VIG

def title_echo(t, rng):
    """ECHO, lit by a cane tap: a ring sweeps out, letters glow and fade, a red ring answers."""
    f = np.zeros((H, W, 3), np.float32)
    word = text_layer('ECHO', 'thin', 250, tracking=0.55, color=OFFWHITE, glow=6)
    h, w = word.shape[:2]
    x0, y0 = int(W / 2 - w / 2), int(H / 2 - h / 2 - 30)
    # light = wave front + afterglow that decays like the game's echo
    def lit(tt, cx, cy, speed=1500):
        if tt < 0: return np.zeros((h, w, 1), np.float32)
        yy, xx = np.ogrid[y0:y0 + h, x0:x0 + w]
        d = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2).astype(np.float32)
        front = np.exp(-((d - tt * speed) / 90) ** 2)
        after = (d < tt * speed) * np.exp(-max(0, tt - d.mean() / speed) * 0.0) * np.exp(-np.maximum(0, tt - d / speed) * 1.1)
        return (front * 1.4 + after * 0.85)[..., None]
    L = lit(t - 0.15, W / 2, H * 0.62) + 0.9 * lit(t - 2.2, W / 2, H * 0.62)
    Lr = lit(t - 0.75, W * 0.85, H * 0.2, 1700) * 0.55
    a = word[..., 3:4]
    f[y0:y0 + h, x0:x0 + w] += a * (np.clip(L, 0, 1.4) * np.array(OFFWHITE, np.float32) / 255 + np.clip(Lr, 0, 1) * np.array(RED, np.float32) / 255)
    # the rings themselves, faint
    for tt, cx, cy, col, k, sp in [(t - 0.15, W / 2, H * 0.62, (0.6, 0.85, 1.0), 0.22, 1500), (t - 2.2, W / 2, H * 0.62, (0.6, 0.85, 1.0), 0.18, 1500), (t - 0.75, W * 0.85, H * 0.2, (1, .12, .08), 0.2, 1700)]:
        if 0 < tt < 2.2:
            front, _ = ring_mask(tt, cx, cy, sp, 18)
            f += front * np.array(col, np.float32) * k * max(0, 1 - tt / 2.2)
    sub = text_layer('A  HORROR  GAME  YOU  PLAY  WITH  YOUR  EARS', 'mono', 24, tracking=0.18, color=(170, 168, 160))
    place(f, sub, W / 2, y0 + h + 40, alpha=ease((t - 2.4) / 0.8) * 0.85, anchor='ct')
    return crt_finish(f, rng, t)

def chapter_card(t, rng):
    f = np.zeros((H, W, 3), np.float32)
    a = text_layer('CHAPTER II', 'mono', 30, tracking=0.5, color=AMBER)
    b = text_layer('BELOW THE SILENCE', 'xlight', 104, tracking=0.22, color=OFFWHITE, glow=3)
    c = text_layer(typed('LEVEL −11  ·  HOSPITAL CAVES  ·  1987', t - 1.3, 30, cursor=False), 'mono', 24, tracking=0.2, color=(150, 150, 145)) if t > 1.3 else None
    place(f, a, W / 2, H / 2 - 110, alpha=ease(t / 0.5), anchor='cb')
    # the title condenses out of a wide blur
    k = ease_out((t - 0.35) / 1.1)
    if k > 0:
        layer = b.copy()
        if k < 1:
            sh = int((1 - k) * 40)
            layer = layer.copy(); layer[..., 3] = (np.roll(b[..., 3], sh, 1) + np.roll(b[..., 3], -sh, 1) + b[..., 3]) / 3
        place(f, layer, W / 2, H / 2, alpha=k, anchor='cc')
    if c is not None: place(f, c, W / 2, H / 2 + 95, alpha=0.9, anchor='ct')
    f *= 1 - ease((t - 4.2) / 0.6)
    return crt_finish(f, rng, t)

def caption(frame, t, dur, key, text, rng=None):
    """HUD-style mechanic caption, bottom left: amber [KEY] + typed text + a hairline."""
    if t < 0 or t > dur: return frame
    out = ease(t / 0.25) * (1 - ease((t - dur + 0.4) / 0.4))
    k = text_layer(key, 'mono', 30, tracking=0.08, color=AMBER, glow=2)
    s = typed(text, t - 0.15, 34, cursor=True)
    x = 150; y = H - 190
    place(frame, k, x, y, alpha=out, anchor='lb')
    if s: place(frame, text_layer(s, 'mono', 30, tracking=0.08, color=OFFWHITE), x + k.shape[1] + 14, y, alpha=out, anchor='lb')
    line_w = int(min(1, t / 0.5) * 380)
    frame[y + 10:y + 12, x:x + line_w] = frame[y + 10:y + 12, x:x + line_w] * (1 - out * 0.7) + np.array(AMBER, np.float32) / 255 * out * 0.7
    return frame

def location_type(frame, t, lines, x=150, y=150, cps=26, hold=4.0):
    """Typed location stamp, top left, like the game's room labels."""
    if t < 0: return frame
    fade = 1 - ease((t - hold) / 0.6)
    yy = y
    for i, (txt, size, col) in enumerate(lines):
        tt = t - i * 0.9
        s = typed(txt, tt, cps, cursor=(i == len(lines) - 1))
        if s: place(frame, text_layer(s, 'mono', size, tracking=0.25, color=col), x, yy, alpha=fade)
        yy += size + 22
    return frame

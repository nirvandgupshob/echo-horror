"""The cut: one list of events in seconds. Video, sound and the VO sheet all read it."""

FPS = 30

# clip: shot, timeline start, first shot frame, duration, grade, effects
#   gain/gamma lift the footage a touch for a compressed YouTube stream;
#   zoom = (start, end) scale for a slow push; speed < 1 blends frames.
CLIPS = [
    dict(shot='wake', t=0.00, fi=4, dur=4.87, gain=1.18, gamma=0.92, zoom=(1.0, 1.05)),
    dict(shot='walk', t=4.87, fi=6, dur=3.80, gain=1.12, gamma=0.94),
    dict(shot='stone', t=8.67, fi=40, dur=2.67, gain=1.15, gamma=0.92, zoom=(1.0, 1.04)),
    # 11.33 - 13.60: black, "Then the station went silent."
    dict(shot='vent', t=13.60, fi=0, dur=5.00, gain=1.2, gamma=0.9, zoom=(1.0, 1.06)),
    # 18.60 - 23.60: ECHO title
    dict(shot='listen', t=23.60, fi=0, dur=6.00, gain=1.35, gamma=0.86, zoom=(1.0, 1.08)),
    dict(shot='breath', t=29.60, fi=40, dur=5.33, gain=1.35, gamma=0.86),
    dict(shot='reveal', t=34.93, fi=60, dur=2.23, gain=1.25, gamma=0.9),   # ends on the game's own audio cut
    # 37.16 - 39.20: black after the screamer
    dict(shot='generator', t=39.20, fi=30, dur=5.30, speed=0.75, gain=1.12, gamma=0.94, zoom=(1.0, 1.05)),
    dict(shot='siege', t=44.50, fi=40, dur=6.67, gain=1.12, gamma=0.94),
    # 51.17 - 56.00: chapter card
    dict(shot='descent', t=56.00, fi=20, dur=2.50, gain=1.1, gamma=0.95),
    dict(shot='pry', t=58.50, fi=20, dur=6.00, gain=1.12, gamma=0.94),
    dict(shot='ward', t=64.50, fi=0, dur=4.33, gain=1.1, gamma=0.95),
    dict(shot='miners', t=68.83, fi=0, dur=6.00, gain=1.5, gamma=0.82, zoom=(1.0, 1.07)),
    dict(shot='spider', t=74.83, fi=0, dur=7.00, gain=1.2, gamma=0.9, zoom=(1.0, 1.06)),
    # 81.83 - 88.50: montage (see MONTAGE)
    dict(shot='menu', t=88.50, fi=0, dur=12.0, speed=0.33, gain=1.0, gamma=1.0, zoom=(1.0, 1.04), mute=True),
]
END = 101.5

# fast cuts before the end card: (shot, first frame, frames)
MONTAGE_T = 81.83
MONTAGE = [
    ('vent', 56, 20), ('breath', 110, 18), ('siege', 150, 16), ('spider', 140, 16), ('reveal', 150, 9),
    ('miners', 110, 15), ('pry', 140, 14), ('listen', 140, 13), ('vent', 100, 12), ('reveal', 160, 7),
    ('spider', 190, 11), ('generator', 60, 10), ('siege', 200, 10), ('breath', 140, 12), ('ward', 60, 9), ('reveal', 165, 8),
]

CARDS = [
    dict(kind='black', t=11.33, dur=2.27),
    dict(kind='title', t=18.60, dur=5.00),
    dict(kind='black', t=37.16, dur=2.04),
    dict(kind='chapter', t=51.17, dur=4.83),
    dict(kind='black', t=100.5, dur=1.0),
]

# transitions at a timeline time: flash (white/red), glitch, dip (fade through black)
TRANSITIONS = [
    dict(t=4.87, kind='glitch', n=3),
    dict(t=13.60, kind='dip_in', n=8),
    dict(t=15.27, kind='flash', color=(1.0, 0.15, 0.1), n=6, k=0.55),   # the vent crash
    dict(t=18.60, kind='flash', color=(1, 1, 1), n=3, k=0.8),
    dict(t=23.60, kind='glitch', n=4),
    dict(t=29.60, kind='glitch', n=3),
    dict(t=39.20, kind='dip_in', n=10),
    dict(t=51.17, kind='glitch', n=5),
    dict(t=56.00, kind='dip_in', n=8),
    dict(t=64.50, kind='glitch', n=3),
    dict(t=68.83, kind='dip_in', n=10),
    dict(t=74.83, kind='glitch', n=4),
    dict(t=88.50, kind='flash', color=(1, 1, 1), n=5, k=0.9),
    dict(t=99.80, kind='dip_out', n=21),
]

# on-screen type
CAPTIONS = [
    dict(t=5.30, dur=3.2, key='[F]', text='TAP THE CANE'),
    dict(t=9.10, dur=2.1, key='[LMB]', text='THROW A STONE'),
    dict(t=24.40, dur=4.4, key='[V]', text='LISTEN  ·  ITS STEPS GLOW RED'),
    dict(t=30.10, dur=4.2, key='[Q]', text='HOLD YOUR BREATH'),
    dict(t=45.00, dur=5.6, key='[1][2][3]', text='SHUTTERS  ·  BRACE WITH YOUR PALM'),
    dict(t=64.90, dur=3.4, key='[T]', text='TORCH  ·  HOLD [R] TO CHARGE'),
    dict(t=76.80, dur=4.6, key='[T]', text='HOLD THE LIGHT ON IT'),
]
LOCATIONS = [
    dict(t=5.10, lines=[('KAMERTON FACILITY', 30, 'white'), ('LEVEL −7  ·  KRASNOYARSK TERRITORY  ·  1987', 22, 'amber')], hold=3.2),
    dict(t=13.95, lines=[('ATRIUM', 26, 'white')], hold=1.6),
    dict(t=44.80, lines=[('LIFT HALL', 26, 'white')], hold=2.2),
    dict(t=69.20, lines=[('HANGING CHAMBER', 26, 'white'), ('LEVEL −11', 22, 'amber')], hold=3.2),
]

# voice-over: (start, line). Durations are what a calm, low narrator needs.
VO = [
    (0.30, 'You were born blind.'),
    (1.60, 'Two days ago, they gave you an implant called Echo.'),
    (5.60, 'Every sound draws the world around you.'),
    (8.70, 'The louder the sound, the more you see.'),
    (11.90, 'Then the station went silent.'),
    (14.25, 'Not all of it.'),
    (24.00, 'Something down here hunts by sound.'),
    (26.90, 'Hold still, and listen. Its steps glow red.'),
    (29.90, 'When it comes close, cover your mouth.'),
    (32.80, "Don't breathe."),
    (33.95, 'And the moment you see it...'),
    (37.90, '...it hears you.'),
    (39.90, 'Wake the generator. Call the lift.'),
    (44.80, 'Then hold the shutters until it comes.'),
    (47.80, 'Three ways in. One motor. It will try every one.'),
    (51.60, 'And when the lift finally moves...'),
    (54.20, '...it only goes down.'),
    (59.20, 'Level minus eleven.'),
    (61.40, 'Caves that swallowed a hospital.'),
    (69.60, 'Nine miners still hang above the pit.'),
    (75.20, 'And something new crawls on the walls, calling the hunter to you.'),
    (80.30, 'Keep your torch on it.'),
    (89.20, 'Echo. A first-person horror game you play with your ears.'),
    (94.30, 'Free, in your browser. Put your headphones on.'),
]

END_CARD_T = 88.9

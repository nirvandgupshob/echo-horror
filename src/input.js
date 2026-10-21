// Releases always apply, but delayed actions and OS repeats must not replay.
export function freshInput(event, now = performance.now(), origin = performance.timeOrigin) {
  if (event.repeat) return false;
  let time = event.timeStamp;
  if (time > 1e12) time -= origin; // older WebKit uses epoch timestamps
  return !Number.isFinite(time) || now - time < 200;
}

// Keys that only matter while held and trigger nothing on press. A late press
// (one queued behind a long frame) still has to register, otherwise the key
// stays physically down while the game believes it is up until it is pressed again.
export const HELD_KEYS = new Set([
  'KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'ShiftLeft', 'ShiftRight', 'KeyQ', 'KeyV', 'KeyR', 'Tab', 'Mouse2',
]);

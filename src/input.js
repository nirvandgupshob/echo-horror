// Releases always apply, but delayed actions and OS repeats must not replay.
export function freshInput(event, now = performance.now(), origin = performance.timeOrigin) {
  if (event.repeat) return false;
  let time = event.timeStamp;
  if (time > 1e12) time -= origin; // older WebKit uses epoch timestamps
  return !Number.isFinite(time) || now - time < 200;
}

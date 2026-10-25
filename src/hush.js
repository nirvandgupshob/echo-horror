// Water stops falling around the creature while it lies in wait: a silence the
// player can learn to hear before walking into it.
export const HUSH_RADIUS = 7;

export function lurking(monster) {
  if (!monster.active) return false;
  return monster.state === 'ambush' || (monster.state === 'stalk' && (monster.curSpeed || 0) < 0.1);
}

export function hushed(drip, monster) {
  return lurking(monster) && Math.hypot(drip.pos.x - monster.pos.x, drip.pos.z - monster.pos.z) < HUSH_RADIUS;
}

// Skip obsolete draws when the GPU is busy; never buffer camera/input snapshots.
export class FrameQueue {
  constructor(limit = 2) { this.limit = limit; this.pending = 0; this.skipped = 0; this.peak = 0; }
  ready() { if (this.pending < this.limit) return true; this.skipped++; return false; }
  submitted(completion) {
    this.pending++; this.peak = Math.max(this.peak, this.pending);
    Promise.resolve(completion).catch(() => {}).finally(() => this.pending--);
  }
}

export function createGLFrameQueue(gl) {
  const fences = [];
  return {
    ready() {
      while (fences.length) {
        const status = gl.clientWaitSync(fences[0], 0, 0);
        if (status === gl.TIMEOUT_EXPIRED) break;
        gl.deleteSync(fences.shift());
      }
      return fences.length < 2;
    },
    submitted() { const fence = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0); if (fence) { fences.push(fence); gl.flush(); } },
    reset() { for (const fence of fences) gl.deleteSync(fence); fences.length = 0; },
  };
}

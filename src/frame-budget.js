// Adapt only the world buffers. The tube, text and hit coordinates keep their
// display resolution. GPU timings (not low CPU FPS) drive the controller.
export class FrameBudget {
  constructor({enabled=true,minScale=.72}={}) {
    this.enabled=enabled;this.minScale=minScale;this.scale=1;
    this.gpuMs=0;this.samples=0;this.slow=0;this.fast=0;this.lastChange=-Infinity;
  }
  sample(ms,now) {
    if(!Number.isFinite(ms)||ms<=0||ms>150)return false;
    this.gpuMs=this.samples?this.gpuMs*.7+ms*.3:ms;this.samples++;
    if(!this.enabled||this.samples<4||now-this.lastChange<1500)return false;
    this.slow=this.gpuMs>17.5?this.slow+1:0;
    this.fast=this.gpuMs<10.5?this.fast+1:0;
    let next=this.scale;
    if(this.slow>=3)next=Math.max(this.minScale,this.scale-Math.min(.08,this.scale*(1-Math.sqrt(14/this.gpuMs))));
    else if(this.fast>=6)next=Math.min(1,this.scale+.025);
    if(Math.abs(next-this.scale)<.0001)return false;
    this.scale=next;this.lastChange=now;this.slow=this.fast=0;return true;
  }
  setEnabled(enabled){this.enabled=enabled;this.scale=1;this.slow=this.fast=this.samples=0;this.lastChange=-Infinity;}
  size(width,height){return {width:Math.max(1,Math.round(width*this.scale)),height:Math.max(1,Math.round(height*this.scale))};}
}

import {workProgress} from './work-motion.js';

// Game-time state only: pausing never consumes the descent or a held action.
export class CaveSequence {
  constructor(saved = {}) {
    this.phase=saved.phase||'descent';this.time=0;
    this.opening=saved.opening||0;this.drained=!!saved.drained;
    this.tuned=!!saved.tuned;this.action=0;this.actionId=null;this.holdTime=0;
    this.hasFuse=!!saved.hasFuse;this.relayPowered=!!saved.relayPowered;
    this.tones=Array.isArray(saved.tones)?saved.tones.slice(0,3):[-1,-1,-1];
    this.tonesTuned=!!saved.tonesTuned;
  }
  advance(dt, held = false, target = null) {
    if(!Number.isFinite(dt)||dt<0)return [];
    const events=[];
    this.time+=dt;
    if(this.phase==='descent'&&this.time>=7){this.phase='stalled';this.time=0;events.push('crash');}
    else if(this.phase==='stalled'&&this.time>=2){this.phase='pry';this.time=0;events.push('pry');}
    if(this.phase==='pry'){
      // A ratchet holds completed movement; releasing E withdraws the hands.
      if(held&&target==='doors'){
        const before=workProgress(this.holdTime,4.5);this.holdTime+=dt;
        this.opening=Math.min(1,this.opening+workProgress(this.holdTime,4.5)-before);
      }else this.holdTime=0;
      if(this.opening>=1){this.phase='explore';this.time=0;events.push('opened');}
    }else if(this.phase==='explore'){
      const duration={valve:4,resonator:3,relay:4,exit:2}[target];
      const allowed=target==='valve'?!this.drained:target==='resonator'?this.drained&&!this.tuned:target==='relay'?this.hasFuse&&!this.relayPowered:target==='exit'?this.exitReady:false;
      if(!held||!allowed){this.action=0;this.actionId=null;}
      else {
        if(this.actionId!==target)this.action=0;
        this.actionId=target;this.action+=dt;
        if(this.action>=duration){
          this.action=0;this.actionId=null;
          if(target==='valve')this.drained=true;
          if(target==='resonator')this.tuned=true;
          if(target==='relay'){this.relayPowered=true;this.hasFuse=false;}
          if(target==='exit')this.phase='complete';
          events.push(target);
        }
      }
    }
    return events;
  }
  get exitReady(){return this.drained&&this.tuned&&this.relayPowered&&this.tonesTuned;}
  takeFuse(){if(!this.relayPowered&&!this.hasFuse){this.hasFuse=true;return true;}return false;}
  turnTone(index){
    if(!this.relayPowered||this.tonesTuned||index<0||index>2)return false;
    this.tones[index]=(this.tones[index]+1)%3;this.tonesTuned=this.tones.every((v,i)=>v===[2,0,1][i]);return true;
  }
  snapshot(){return {phase:this.phase,opening:this.opening,drained:this.drained,tuned:this.tuned,hasFuse:this.hasFuse,relayPowered:this.relayPowered,tones:this.tones.slice(),tonesTuned:this.tonesTuned};}
}

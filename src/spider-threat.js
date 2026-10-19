// Game-time only. A readable warning precedes every call; a steady beam buys
// silence instead of making the spider scream once more while it escapes.
export function advanceSpiderThreat(s,dt,{lit,visible,distance,hidden=false}){
 if(!Number.isFinite(dt)||dt<=0)return null;
 s.retreatT=Math.max(0,s.retreatT-dt);
 s.exposure=Math.max(0,Math.min(1,s.exposure+(lit?dt:-dt*.8)));
 if(s.exposure>=.5&&s.retreatT<=0){
  s.repels++;s.retreatT=8;s.exposure=0;s.warning=0;s.soundT=3;s.state='flee';return 'repel';
 }
 if(s.retreatT>0){s.warning=0;s.state='flee';return null;}
 s.soundT-=dt;
 if(!visible||distance>12||hidden){s.warning=0;s.soundT=Math.max(.7,s.soundT);s.state='stalk';return null;}
 if(lit){s.warning=Math.max(0,s.warning-dt*2);s.state=s.warning>0?'warning':'stalk';return null;}
 if(s.soundT>0){s.state='stalk';return null;}
 const started=s.warning<=0;s.warning+=dt;s.state='warning';
 if(s.warning>=1.8){s.warning=0;s.soundT=5.5+(s.calls%3)*.7;s.state='stalk';return 'call';}
 return started?'warn':null;
}

// The hospital's material balance and prop vocabulary, using chapter-two maps.
// These aliases change textures, never the original props' authored proportions.
export function hospitalFrame(frame){
  // Keep the hospital's original material keys, geometry and proportions.
  const options=o=>({...o,collide:false,walk:true});
  return {
    box:(x,y,z,w,h,d,o={})=>frame.box(x,y,z,w,h,d,options(o)),
    cyl:(x,y,z,rt,rb,h,segments,o={})=>frame.cyl(x,y,z,rt,rb,h,segments,options(o)),
    geo:(g,x,y,z,o={})=>frame.geo(g,x,y,z,options(o)),
  };
}

export function hospitalWeight(x,z){
  if(z<18&&x>19){const t=Math.max(0,Math.min(1,(x-19)/3));return 1-t*t*(3-2*t);}
  const t=Math.max(0,Math.min(1,(z-18)/10+Math.max(0,x-21)/12));
  return 1-t*t*(3-2*t);
}

// Fade the natural shell from the exact edge of the intact, grid-built ward.
// A raw texture blend at that edge left floor/roof cracks above its flat slabs.
export function hospitalShellWeight(x,z){
 let distance=Infinity;
 for(let j=Math.floor(z)-1;j<=Math.floor(z)+1;j++)for(let i=Math.floor(x)-1;i<=Math.floor(x)+1;i++){
  if(hospitalWeight(i+.5,j+.5)<=.97)continue;
  distance=Math.min(distance,Math.hypot(Math.max(i-x,0,x-i-1),Math.max(j-z,0,z-j-1)));
 }
 const t=Math.max(0,Math.min(1,distance/.75));return 1-t*t*(3-2*t);
}

// A shared, continuous mask: never select a new floor texture per triangle.
export function hospitalTextureWeight(x,z){
 const w=hospitalWeight(x,z),t=Math.max(0,Math.min(1,(w-.15)/.82));
 const blend=t*t*(3-2*t);
 return Math.max(0,Math.min(1,blend+Math.sin(x*2.3+Math.sin(z*1.7))*blend*(1-blend)*.35));
}

export function caveSurface(key){
  const cloth=['gauze','canvas'].includes(key),metal=['copper','corroded','enamel','mesh','cable'].includes(key);
  return {
    map:`cave/${key}`,scale:cloth?1.5:metal?.8:.45,
    bump:metal?1.2:1.1,boost:cloth?.6:1,
    wet:key==='wetrock'?.4:key==='algae'?.55:0,
    grime:cloth?.6:metal?.5:.65,
    tint:key==='gauze'?0xd8d4cc:key==='canvas'?0xc8c2b8:key==='enamel'?0xa7b5a7:0xffffff,
  };
}

export function scaledHospitalFrame(frame,scale){
  const f=hospitalFrame(frame);
  return {
    box:(x,y,z,w,h,d,o={})=>f.box(x*scale,y*scale,z*scale,w*scale,h*scale,d*scale,o),
    cyl:(x,y,z,a,b,h,n,o={})=>f.cyl(x*scale,y*scale,z*scale,a*scale,b*scale,h*scale,n,o),
    geo:(g,x,y,z,o={})=>{const copy=g.clone();copy.scale(scale,scale,scale);const result=f.geo(copy,x*scale,y*scale,z*scale,o);copy.dispose();return result;},
  };
}

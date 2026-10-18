import * as THREE from 'three';
import {rod} from './mine-props.js';

// Local, reusable assemblies. Floor models include their actual feet/skids;
// wall models start at the bracket plane with positive Z facing into the room.
export const DETAIL_MODEL_TYPES=['autoclave','compressor','cable-reel','oil-drum','tool-crate','ore-sacks','transformer','mineral-core','first-aid','tool-board'];
const opt=key=>({key,collide:false,walk:true});
export function detailProp(F,type){
  const box=(x,y,z,w,h,d,key='iron',rot)=>F.box(x,y,z,w,h,d,{...opt(key),rot});
  const cyl=(x,y,z,r,h,key='iron',rot)=>F.cyl(x,y,z,r,r,h,16,{...opt(key),rot});
  const torus=(x,y,z,r,t,key='iron',rot)=>{const g=new THREE.TorusGeometry(r,t,6,24);F.geo(g,x,y,z,{...opt(key),rot});g.dispose();};
  const foot=(x,z,h=.5)=>{box(x,h/2,z,.055,h,.055);box(x,.015,z,.13,.03,.13);};
  if(type==='autoclave'){
    for(const x of [-.28,.28])for(const z of [-.28,.28])foot(x,z,.65);
    box(0,.64,0,.66,.06,.7,'zinc');
    cyl(0,.94,0,.29,.66,'zinc',[Math.PI/2,0,0]);
    cyl(0,.94,.35,.265,.045,'zinc',[Math.PI/2,0,0]);torus(0,.94,.38,.27,.018);
    box(-.27,.94,.37,.055,.25,.06);rod(F,[.13,.83,.41],[.13,1.05,.41],.018,'rubber');
    for(const y of [.83,1.05])rod(F,[.13,y,.38],[.13,y,.41],.014,'iron');
    cyl(0,1.25,-.12,.065,.035,'paperw',[Math.PI/2,0,0]);rod(F,[0,1.25,-.095],[.035,1.28,-.095],.004,'iron');
    rod(F,[-.15,1.16,-.22],[-.15,1.35,-.22],.02,'copper');
    box(.19,.76,.36,.14,.09,.035,'green-enamel');
  }else if(type==='compressor'){
    for(const x of [-.34,.34])box(x,.035,0,.09,.07,1.05);
    for(const z of [-.35,.35])box(0,.17,z,.55,.27,.05);
    cyl(0,.41,0,.24,.95,'green-enamel',[Math.PI/2,0,0]);
    for(const z of [-.46,.46])cyl(0,.41,z,.235,.04,'green-enamel',[Math.PI/2,0,0]);
    box(-.12,.7,0,.32,.12,.55);cyl(-.12,.88,-.08,.13,.35,'iron',[Math.PI/2,0,0]);
    box(.18,.86,.1,.2,.28,.23,'zinc');
    for(let y=.78;y<1.02;y+=.045)box(.18,y,.1,.25,.018,.28);
    rod(F,[.18,.85,.28],[.18,.5,.36],.025,'copper');rod(F,[.18,.5,.36],[0,.5,.4],.025,'copper');
    cyl(-.13,.68,.43,.06,.025,'paperw',[Math.PI/2,0,0]);
    rod(F,[-.13,.68,.45],[-.1,.71,.45],.004,'iron');
    torus(.32,.39,.42,.19,.018,'rubber');rod(F,[.32,.2,.42],[.34,.04,.49],.018,'rubber');
  }else if(type==='cable-reel'){
    for(const x of [-.38,.38]){box(x,.025,0,.1,.05,.75);rod(F,[x,.05,-.28],[x,.5,0],.025,'iron');rod(F,[x,.05,.28],[x,.5,0],.025,'iron');}
    cyl(0,.5,0,.04,.88,'iron',[0,0,Math.PI/2]);
    for(const x of [-.28,.28]){cyl(x,.5,0,.36,.035,'timber-sawn',[0,0,Math.PI/2]);cyl(x*1.09,.5,0,.095,.025,'iron',[0,0,Math.PI/2]);}
    cyl(0,.5,0,.25,.53,'rubber',[0,0,Math.PI/2]);
    for(let x=-.24;x<=.24;x+=.045)torus(x,.5,0,.255,.012,'rubber',[0,Math.PI/2,0]);
    rod(F,[.16,.26,.15],[.28,.04,.4],.014,'rubber');
  }else if(type==='oil-drum'){
    cyl(0,.43,0,.29,.86,'green-enamel');
    for(const y of [.025,.28,.59,.845])torus(0,y,0,.29,.013,'iron',[Math.PI/2,0,0]);
    cyl(0,.862,0,.278,.015,'zinc');cyl(.13,.88,.07,.035,.025);cyl(-.13,.88,-.07,.018,.025);
    box(0,.45,.288,.15,.18,.012,'hazard');
  }else if(type==='tool-crate'){
    box(0,.035,0,.78,.07,.53,'timber-sawn');
    for(let y=.12;y<.4;y+=.11){for(const z of [-.26,.26])box(0,y,z,.8,.085,.035,'timber-sawn');for(const x of [-.38,.38])box(x,y,0,.035,.085,.5,'timber-sawn');}
    for(const x of [-.35,.35])for(const z of [-.24,.24])box(x,.21,z,.04,.42,.04,'wood');
    rod(F,[-.25,.09,-.08],[.24,.25,.09],.022,'wood');rod(F,[.24,.25,-.08],[.24,.25,.22],.025,'iron');
    box(-.1,.11,.12,.28,.05,.09,'iron');
    for(const x of [-.3,.3])for(const y of [.12,.34])cyl(x,y,.283,.006,.01,'iron',[Math.PI/2,0,0]);
  }else if(type==='ore-sacks'){
    for(const [x,y,z,ry,s]of [[-.22,.19,-.12,.2,1],[.22,.19,.08,-.3,1],[0,.49,-.04,.1,.85]]){
      const g=new THREE.SphereGeometry(1,12,8);g.scale(.3*s,.19*s,.38*s);F.geo(g,x,y,z,{...opt('burlap'),rot:[0,ry,0]});g.dispose();
      rod(F,[x-.22*s,y+.03,z],[x+.22*s,y+.03,z],.008,'canvas');
      cyl(x,y+.18*s,z,.035,.05,'burlap');torus(x,y+.2*s,z,.027,.007,'rubber',[Math.PI/2,0,0]);
    }
  }else if(type==='transformer'){
    for(const x of [-.28,.28])box(x,.03,0,.1,.06,.65);
    box(0,.4,0,.52,.7,.46,'green-enamel');
    for(const x of [-.31,.31])for(let z=-.22;z<=.22;z+=.085)box(x,.43,z,.12,.5,.025,'zinc');
    box(0,.77,0,.58,.04,.52);
    for(const x of [-.17,0,.17]){cyl(x,.9,0,.028,.24,'porcelain');for(const y of [.82,.87,.92,.97])cyl(x,y,0,.05,.018,'porcelain');cyl(x,1.03,0,.018,.05,'copper');}
    box(0,.44,.242,.18,.16,.015,'hazard');
    rod(F,[.17,1.05,0],[.24,1.12,.12],.012,'rubber');rod(F,[.24,1.12,.12],[.43,.03,.22],.012,'rubber');
  }else if(type==='mineral-core'){
    // Crystal roots intersect the rock base, no hovering diamonds or glow.
    const base=new THREE.IcosahedronGeometry(.26,1);base.scale(1,.35,1);F.geo(base,0,.06,0,opt('salt-vein'));base.dispose();
    for(let i=0;i<7;i++){
      const a=i*2.4,r=i?.14:0,h=.24+(i%3)*.13;
      const g=new THREE.CylinderGeometry(.014,.055,h,6);g.translate(0,h/2,0);
      F.geo(g,Math.sin(a)*r,.025,Math.cos(a)*r,{...opt(i%3?'salt-vein':'calcite'),rot:[Math.sin(a)*.2,0,Math.cos(a)*.2]});g.dispose();
    }
  }else if(type==='first-aid'){
    box(0,0,.025,.48,.56,.05);box(0,0,.14,.44,.51,.2,'peeled-ivory');
    box(0,0,.248,.10,.30,.012,'gauze');box(0,0,.249,.28,.10,.012,'gauze');
    box(.16,0,.26,.025,.08,.025);for(const y of [-.2,.2])box(-.23,y,.12,.035,.07,.12);
  }else if(type==='tool-board'){
    box(0,0,.035,1.05,.85,.07,'timber-sawn');
    for(const x of [-.4,.4])for(const y of [-.3,.3])cyl(x,y,.079,.014,.018,'iron',[Math.PI/2,0,0]);
    rod(F,[-.29,-.3,.13],[-.29,.27,.13],.023,'wood');rod(F,[-.48,.22,.13],[-.1,.29,.13],.028,'iron');
    rod(F,[.14,-.1,.13],[.14,.3,.13],.023,'wood');
    box(.14,-.24,.13,.19,.28,.035,'zinc');rod(F,[.39,-.3,.13],[.39,.22,.13],.016,'iron');
    for(const x of [-.29,.14,.39])rod(F,[x,.12,.075],[x,.12,.16],.012,'iron');
  }else throw new Error(`Unknown detail model: ${type}`);
}

export function instrumentTray(F,y=.84){
  const o=opt('zinc');F.box(0,y,0,.43,.018,.29,o);
  for(const z of [-.145,.145])F.box(0,y+.025,z,.44,.05,.012,o);
  for(const x of [-.215,.215])F.box(x,y+.025,0,.012,.05,.29,o);
  rod(F,[-.13,y+.02,-.06],[.13,y+.02,.06],.007,'iron');
  rod(F,[-.1,y+.02,.09],[.09,y+.02,-.07],.006,'iron');
  F.box(.13,y+.035,.04,.09,.045,.08,opt('gauze'));
}

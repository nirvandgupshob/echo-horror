import * as THREE from 'three';
import * as P from './props.js';
import {hospitalFrame} from './cave-style.js';
import {hangingMiner,rod} from './mine-props.js';

const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const loose={collide:false,walk:true};
export const CAVE_MODEL_TYPES=['traction-bed','surgical-lamp','drain-pump','resonator','ore-cart','pipe-manifold','ventilation-fan','winch','hanging-miner'];

function flange(F,x,y,z,r=.12,axis='z'){
  const rot=axis==='z'?[Math.PI/2,0,0]:[0,0,Math.PI/2];
  F.cyl(x,y,z,r,r,.045,16,{...loose,key:'rust',rot});
  for(let i=0;i<6;i++){
    const a=i*Math.PI/3,dx=Math.cos(a)*r*.76,dy=Math.sin(a)*r*.76;
    F.cyl(x+(axis==='z'?dx:0),y+dy,z+(axis==='x'?dx:0),.012,.012,.06,6,{...loose,key:'iron',rot});
  }
}
function hose(F,points,r=.035,key='rubber'){
  const g=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>V(...p))),28,r,8,false);
  F.geo(g,0,0,0,{...loose,key});g.dispose();
}

export function caveProp(B,type,x,y,z,angle=0,roof=3){
  const F=B.at(x,y,z,angle),H=hospitalFrame(F);
  const box=(x,y,z,w,h,d,key='paint',rot)=>F.box(x,y,z,w,h,d,{...loose,key,rot});
  const cyl=(x,y,z,r,h,key='iron',rot)=>F.cyl(x,y,z,r,r,h,16,{...loose,key,rot});
  if(type==='traction-bed'){
    P.bed(H,{messy:true});
  }else if(type==='surgical-lamp'){
    // The cable ends at the actual ceiling; the shade stays above head height.
    P.lamp(H,roof-y,Math.max(.25,roof-y-2.5),{low:true});
    box(0,roof-y-.025,0,.22,.08,.22,'iron');
  }else if(type==='drain-pump'){
    // Motor -> shaft coupling -> pump volute; the front riser carries the real
    // interactive valve at (0, 1.18, .55), rather than a wheel in empty space.
    box(0,.10,0,1.65,.20,1.16,'limestone');
    for(const a of [-.65,.65])for(const c of [-.42,.42])cyl(a,.22,c,.028,.08,'iron');
    box(-.35,.27,-.1,.72,.15,.48,'iron');
    cyl(-.35,.55,-.1,.25,.68,'paint',[0,0,Math.PI/2]);
    for(let i=0;i<9;i++)cyl(-.63+i*.067,.55,-.1,.266,.025,'iron',[0,0,Math.PI/2]);
    cyl(.08,.55,-.1,.075,.20,'iron',[0,0,Math.PI/2]);
    cyl(.40,.55,-.1,.31,.28,'paint',[0,0,Math.PI/2]);
    flange(F,.57,.55,-.1,.32,'x');
    box(.40,.29,-.1,.32,.22,.25,'iron');
    hose(F,[[.4,.55,.12],[.4,.65,.35],[0,.78,.35],[0,1.65,.35],[0,1.9,.65]],.075,'iron');
    flange(F,0,1.18,.38,.13);
    rod(F,[0,1.18,.55],[0,1.18,.35],.035,'iron');
    cyl(0,1.78,.35,.11,.10,'rust');
    hose(F,[[.55,.55,-.1],[.95,.32,-.1],[1.1,.08,.35],[1.3,.045,1.5]],.065);
    box(1.3,.04,1.5,.27,.08,.38,'iron');
    for(let i=0;i<5;i++)box(1.2+i*.05,.083,1.5,.022,.012,.33,'rubber');
    // Pressure gauge has a casing and a connected stem.
    rod(F,[0,1.5,.35],[-.26,1.5,.35],.025,'iron');
    cyl(-.28,1.53,.36,.09,.045,'iron',[Math.PI/2,0,0]);
    cyl(-.28,1.53,.387,.075,.008,'paperw',[Math.PI/2,0,0]);
    box(-.30,1.55,.394,.012,.09,.005,'rubber',[0,0,-.6]);
  }else if(type==='resonator'){
    P.console_(H,1.2);
    for(const a of [-.48,.48])box(a,1.0,.33,.04,.4,.04,'iron');
    box(0,1.05,.36,1.1,.25,.03,'paint');
    // Instrument rack, supported meters, ventilation and a housed copper coil.
    box(0,1.39,-.29,1.22,.62,.16,'paint');
    box(0,1.94,-.27,1.1,.48,.35,'iron');
    for(const a of [-.52,.52])box(a,1.12,-.35,.07,2.24,.07,'iron');
    for(let i=0;i<9;i++){
      const g=new THREE.TorusGeometry(.14,.016,8,20);g.rotateY(Math.PI/2);
      F.geo(g,-.36+i*.09,1.94,-.04,{...loose,key:'copper'});g.dispose();
    }
    for(const a of [-.48,.48])box(a,1.94,-.04,.04,.34,.34,'paint');
    for(let i=0;i<8;i++)box(-.43+i*.12,.42,.361,.065,.23,.018,'rubber');
    hose(F,[[.53,.18,-.3],[.78,.06,-.4],[1.0,.04,-1.0],[.8,.04,-2.0]],.025);
  }else if(type==='ore-cart'){
    box(0,.36,0,1.35,.15,1.5,'iron');
    // Open hopper, with sloping sheet sides instead of a solid textured cube.
    box(0,.53,0,1.06,.12,1.34,'rust');
    for(const a of [-1,1])box(a*.58,.83,0,.065,.63,1.48,'iron',[0,0,-a*.16]);
    for(const c of [-1,1])box(0,.83,c*.70,1.18,.63,.055,'iron',[c*.13,0,0]);
    for(const a of [-.64,.64])box(a,1.16,0,.07,.07,1.58,'rust');
    for(const c of [-.76,.76])box(0,1.16,c,1.35,.07,.07,'rust');
    for(const c of [-.52,.52]){
      rod(F,[-.72,.31,c],[.72,.31,c],.045,'iron');
      for(const a of [-.65,.65])cyl(a,.31,c,.18,.10,'iron',[0,0,Math.PI/2]);
    }
    for(let i=0;i<9;i++)F.geo(new THREE.IcosahedronGeometry(.15,0),(i%3-1)*.29,.66+Math.sin(i)*.035,(Math.floor(i/3)-1)*.37,{...loose,key:'basalt',scale:[1,.65,1]});
    rod(F,[0,.36,-.8],[0,.36,-1.15],.035,'iron');
  }else if(type==='pipe-manifold'){
    // Wall-mounted services: two continuous headers terminate in the wall.
    for(const h of [1.15,1.75]){
      rod(F,[-1.3,h,.19],[1.3,h,.19],.07,'iron');
      for(const a of [-1.3,1.3])rod(F,[a,h,.19],[a,h,-.28],.07,'iron');
      for(const a of [-.9,.9]){
        box(a,h,.025,.18,.21,.08,'rust');rod(F,[a,h,.04],[a,h,.19],.025,'iron');
      }
      flange(F,-.45,h,.19,.115,'x');flange(F,.45,h,.19,.115,'x');
    }
    rod(F,[0,1.15,.19],[0,1.75,.19],.06,'iron');
    P.valveWheel(hospitalFrame(B.at(x+Math.sin(angle)*.36,y+1.45,z+Math.cos(angle)*.36,angle)),.14);
  }else if(type==='ventilation-fan'){
    box(0,1.8,.11,1.2,1.2,.24,'iron');
    P.fan(hospitalFrame(B.at(x+Math.sin(angle)*.27,y+1.8,z+Math.cos(angle)*.27,angle)),.48);
    for(const a of [-.52,.52])for(const h of [1.28,2.32])cyl(a,h,.245,.025,.04,'rust',[Math.PI/2,0,0]);
  }else if(type==='winch'){
    box(0,.12,0,1.3,.24,.85,'limestone');
    for(const a of [-.48,.48]){
      box(a,.49,0,.10,.68,.57,'iron');cyl(a,.65,0,.33,.06,'iron',[0,0,Math.PI/2]);
    }
    cyl(0,.65,0,.22,.85,'rubber',[0,0,Math.PI/2]);
    for(let i=0;i<15;i++)cyl(-.4+i*.057,.65,0,.235,.025,'rust',[0,0,Math.PI/2]);
    cyl(.65,.65,0,.20,.28,'paint',[0,0,Math.PI/2]);
    box(.65,.32,0,.38,.18,.40,'iron');
    hose(F,[[0,.7,0],[0,1.2,-.25],[0,Math.max(1.3,roof-y-.1),-.25]],.018,'iron');
    box(0,roof-y-.04,-.25,.3,.12,.3,'iron');
  }else if(type==='hanging-miner')return hangingMiner(B,{x,y,z,angle,roof});
}

import * as THREE from 'three';
import {groundHeight} from './cave-terrain.js';
import {bodyGeometry} from './body.js';

const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const loose={collide:false,walk:true};
const minerParts=new Map();
const headMatrix=bow=>new THREE.Matrix4().makeTranslation(0,.66,.1).multiply(new THREE.Matrix4().makeRotationX(bow)).multiply(new THREE.Matrix4().makeTranslation(0,-.66,-.1));
function bodyParts(bow){
  if(minerParts.has(bow))return minerParts.get(bow);
  // Same continuous anatomy as the hospital corpses. These distant bodies use
  // a coarser cached field, rather than nine independent high-detail meshes.
  const coarse=bodyGeometry('supine',.014).g.toNonIndexed(),fine=bodyGeometry('supine',.0085).g.toNonIndexed();
  const selected=[];for(const [g,head]of [[coarse,false],[fine,true]]){const a=g.attributes.position;for(let i=0;i<a.count;i+=3)if(((a.getZ(i)+a.getZ(i+1)+a.getZ(i+2))/3<-.665)===head)for(let k=i;k<i+3;k++)selected.push({p:V(a.getX(k),a.getY(k),a.getZ(k)),n:V(g.attributes.normal.getX(k),g.attributes.normal.getY(k),g.attributes.normal.getZ(k))});}
  const source=new THREE.BufferGeometry();source.setAttribute('position',new THREE.Float32BufferAttribute(selected.flatMap(v=>v.p.toArray()),3));source.setAttribute('normal',new THREE.Float32BufferAttribute(selected.flatMap(v=>v.n.toArray()),3));coarse.dispose();fine.dispose();
  const p=source.attributes.position,n=source.attributes.normal;
  const parts={minerCloth:{p:[],n:[]},flesh:{p:[],n:[]}};
  for(let i=0;i<p.count;i+=3){
    const z=(p.getZ(i)+p.getZ(i+1)+p.getZ(i+2))/3,x=(p.getX(i)+p.getX(i+1)+p.getX(i+2))/3;
    const part=parts[z<-.665||(Math.abs(x)>.21&&z>.005&&z<.2)?'flesh':'minerCloth'];
    for(let k=i;k<i+3;k++){
      const point=V(p.getX(k),-p.getZ(k),p.getY(k)),normal=V(n.getX(k),-n.getZ(k),n.getY(k));
      const arm=THREE.MathUtils.smoothstep(Math.abs(point.x),.175,.225)*(1-THREE.MathUtils.smoothstep(point.y,.45,.58));
      if(arm&&point.y>-.35){const side=Math.sign(point.x),pivot=V(side*.19,.52,.1),q=new THREE.Quaternion().setFromAxisAngle(V(0,0,1),-side*(.08+bow*.07)*arm);point.sub(pivot).applyQuaternion(q).add(pivot);normal.applyQuaternion(q);}
      const blend=THREE.MathUtils.smoothstep(point.y,.66,.71);
      if(blend){const m=headMatrix(bow*blend);point.applyMatrix4(m);normal.transformDirection(m);}
      part.p.push(...point.toArray());part.n.push(...normal.toArray());
    }
  }
  source.dispose();
  const result=Object.entries(parts).map(([key,a])=>{
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(a.p,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(a.n,3));return {key,g};
  });minerParts.set(bow,result);return result;
}

export function rod(F,a,b,r,key='corroded'){
  const p=V(...a),q=V(...b),d=q.clone().sub(p),g=new THREE.CylinderGeometry(r,r,d.length(),8);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V(0,1,0),d.normalize()));
  F.geo(g,...p.add(q).multiplyScalar(.5).toArray(),{...loose,key});g.dispose();
}

export function hangingMiner(B,{x,y,z,angle=0,roof,bow=.4}){
  const F=B.at(x,y,z,angle),top=roof-y;
  for(const {key,g}of bodyParts(bow))F.geo(g,0,0,0,{...loose,key});
  const box=(x,y,z,w,h,d,key,rot)=>F.box(x,y,z,w,h,d,{...loose,key,rot});
  // Coverall seams, breast pockets, padded cuffs and rubber work boots.
  for(const s of [-1,1]){
    box(s*.083,.43,.222,.096,.105,.018,'minerCloth');
    box(s*.083,.47,.234,.098,.013,.009,'canvas');
    box(s*.113,-.45,.132,.08,.055,.014,'canvas');
    F.geo(new THREE.SphereGeometry(1,12,8),s*.125,-.875,.105,{...loose,key:'rubber',scale:[.052,.12,.105]});
    box(s*.125,-.98,.112,.115,.025,.21,'rubber');
    box(s*.218,.015,.075,.075,.045,.075,'canvas');
    // Two load-bearing straps join the overhead hoist to a chest harness.
    box(s*.14,.36,.235,.035,.42,.019,'rubber', [0,0,s*-.13]);
    rod(F,[s*.19,.55,.09],[0,1.08,.09],.012,'cable');
  }
  box(0,.19,.208,.30,.045,.024,'rubber');box(0,.19,.23,.045,.052,.017,'copper');
  box(0,.43,.248,.009,.29,.008,'copper'); // zip
  box(-.18,.02,.1,.105,.16,.11,'corroded'); // belt-mounted self-rescuer
  // Helmet dome, rolled brim and unpowered headlamp.
  const head=(g,x,y,z,key)=>{g.translate(x,y,z);g.applyMatrix4(headMatrix(bow));F.geo(g,0,0,0,{...loose,key});g.dispose();};
  head(new THREE.SphereGeometry(.095,16,8,0,Math.PI*2,0,Math.PI/2).scale(1.1,.8,1.12),0,.83,.105,'minerHelmet');
  head(new THREE.CylinderGeometry(.111,.111,.014,16),0,.825,.105,'minerHelmet');
  head(new THREE.CylinderGeometry(.027,.032,.036,12).rotateX(Math.PI/2),0,.84,.205,'rubber');
  head(new THREE.CylinderGeometry(.022,.022,.006,12).rotateX(Math.PI/2),0,.84,.226,'glass');
  // Anchor plate intersects the actual rock ceiling, with a pulley below it.
  box(0,top-.025,.09,.40,.12,.38,'corroded');
  for(const a of [-.14,.14])for(const c of [-.04,.22])F.cyl(a,top-.094,c,.022,.022,.04,6,{...loose,key:'copper'});
  rod(F,[0,1.08,.09],[0,top-.19,.09],.012,'cable');
  F.geo(new THREE.TorusGeometry(.082,.018,8,12),0,top-.15,.09,{...loose,key:'corroded'});
  for(let i=0;i<5;i++)F.geo(new THREE.TorusGeometry(.026,.007,6,8),0,1.1+i*.043,.09,{...loose,key:'corroded',rot:[0,i%2*Math.PI/2,0]});
  return {x,y,z,roof,feet:y-.993,attachment:y+1.08};
}

export function mineRails(B,x,z,angle=0,length=4){
  const F=B.at(x,0,z,angle);
  for(const a of [-.65,.65]){
    F.box(a,.05,0,.065,.10,length,{...loose,key:'corroded'});
    F.box(a,.105,0,.11,.025,length,{...loose,key:'copper'});
  }
  for(let q=-length/2+.25;q<length/2;q+=.55){
    F.box(0,.025,q,1.65,.05,.15,{...loose,key:'wood'});
    for(const a of [-.65,.65])F.cyl(a,.066,q,.025,.025,.035,6,{...loose,key:'corroded'});
  }
}

// Continuous haul roads. Rail heads meet the cart wheels at y=.13; sleepers
// meet the floor. The route is authored once, not a disconnected pad per cart.
export function haulTrack(B,points){
  const curve=new THREE.CatmullRomCurve3(points.map(([x,z])=>V(x,groundHeight(x,z),z)),false,'centripetal');
  const length=curve.getLength(),steps=Math.ceil(length/.3);
  for(let i=0;i<steps;i++){
    const a=curve.getPointAt(i/steps),b=curve.getPointAt((i+1)/steps),d=b.clone().sub(a),mid=a.clone().add(b).multiplyScalar(.5);
    const normal=V(d.z,0,-d.x).normalize(),angle=Math.atan2(d.x,d.z);
    for(const side of [-1,1]){
      const p=mid.clone().addScaledVector(normal,side*.65);
      for(const [w,h,y]of [[.12,.025,.025],[.055,.10,.07],[.10,.02,.12]]){
        const g=new THREE.BoxGeometry(w,h,d.length()+.025);
        B.add(g,{...loose,pos:[p.x,p.y+y,p.z],rot:[-Math.atan2(d.y,Math.hypot(d.x,d.z)),angle,0],key:'rust'});g.dispose();
      }
    }
  }
  for(let distance=.2;distance<length;distance+=.6){
    const t=distance/length,p=curve.getPointAt(t),d=curve.getTangentAt(t),F=B.at(p.x,groundHeight(p.x,p.z),p.z,Math.atan2(d.x,d.z));
    F.box(0,.025,0,1.65,.05,.16,{...loose,key:'wood'});
    for(const x of [-.65,.65])F.cyl(x,.06,0,.022,.022,.025,6,{...loose,key:'iron'});
  }
  return curve;
}

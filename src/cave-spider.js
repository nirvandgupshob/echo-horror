import * as THREE from 'three';
import {echoMaterial,COLORS} from './echo.js';
import {wallPoint} from './cave-geology.js';
import {caveField} from './cave-layout.js';
import {groundHeight} from './cave-terrain.js';
const V=(x,y,z)=>new THREE.Vector3(x,y,z),UP=V(0,1,0),DOWN=V(0,-1,0);
export function inFlashlight(point,origin,direction,power){const to=point.clone().sub(origin),d=to.length();return power>.12&&d<15&&d>.05&&to.divideScalar(d).dot(direction)>.945;}

export function spiderModel(material){
 const root=new THREE.Group();root.name='wall-spider';
 const body=(r,pos,scale)=>{const geo=new THREE.SphereGeometry(r,20,12),mesh=new THREE.Mesh(geo,material);mesh.position.fromArray(pos);mesh.scale.fromArray(scale);root.add(mesh);return mesh;};
 body(.28,[0,.25,.2],[.9,.8,1.35]);body(.21,[0,.22,-.18],[1,.7,1.05]);body(.12,[0,.18,-.37],[1,.7,.7]);
 const legs=new THREE.InstancedMesh(new THREE.CylinderGeometry(1,1,1,8),material,16);legs.instanceMatrix.setUsage(THREE.DynamicDrawUsage);legs.frustumCulled=false;root.add(legs);
 const joints=new THREE.InstancedMesh(new THREE.SphereGeometry(.04,8,6),material,8);joints.instanceMatrix.setUsage(THREE.DynamicDrawUsage);joints.frustumCulled=false;root.add(joints);
 const eyeMat=material.clone();if(eyeMat.uniforms){eyeMat.uniforms.uTint.value.set(0x171813);eyeMat.uniforms.uWet.value=.9;}
 const eyes=new THREE.InstancedMesh(new THREE.SphereGeometry(.021,8,6),eyeMat,8),matrix=new THREE.Matrix4();
 for(let i=0;i<8;i++){matrix.makeTranslation((i%4-1.5)*.037,.2+Math.floor(i/4)*.032,-.445);eyes.setMatrixAt(i,matrix);}root.add(eyes);
 const fangs=new THREE.InstancedMesh(new THREE.ConeGeometry(.035,.16,8),material,2);
 for(let i=0;i<2;i++){matrix.makeRotationX(Math.PI*.62);matrix.setPosition((i?1:-1)*.055,.13,-.47);fangs.setMatrixAt(i,matrix);}root.add(fangs);
 return {root,legs,joints};
}

export class CaveSpider{
 constructor({level,root,game,audio}){
  Object.assign(this,{level,game,audio});this.model=spiderModel(echoMaterial({map:'rubber',scale:7,tint:0x817b65,wet:.3,boost:.85,bump:.6}));this.root=this.model.root;root.add(this.root);
  this.ray=new THREE.Raycaster();this.reset();
 }
 reset(){this.active=false;this.root.visible=false;this.mode='wall';this.state='dormant';this.exposure=0;this.retreatT=0;this.soundT=1;this.planT=0;this.clock=0;this.path=[];this.feet=[];this.calls=0;this.repels=0;this.normal=V(0,0,1);this.wallDirection=1;}
 activate(saved=null){
  if(this.active)return;this.active=true;this.root.visible=true;this.state='stalk';
  const walls=this.level.geology.walls;this.wall=walls.reduce((a,b)=>(b.x-54)**2+(b.z-19)**2<(a.x-54)**2+(a.z-19)**2?b:a);
  this.wallY=2;this.mode='wall';this.planT=0;
  if(saved?.active){this.retreatT=Math.max(0,saved.retreatT||0);this.state=this.retreatT?'flee':'stalk';}
  const h=this.level.roofAt(this.wall.x,this.wall.z),at=wallPoint(this.level,this.wall.x,this.wall.z,(this.wallY-groundHeight(this.wall.x,this.wall.z))/(h-groundHeight(this.wall.x,this.wall.z)));
  this.root.position.copy(at.point).addScaledVector(at.normal,.025);this.normal.copy(at.normal);this.root.quaternion.setFromUnitVectors(UP,this.normal);
 }
 nearestCell(point){let best=null,d=Infinity;for(let z=1;z<55;z++)for(let x=1;x<63;x++)if(this.level.open(x,z)&&!this.level.isPit(x+.5,z+.5)){const n=(x+.5-point.x)**2+(z+.5-point.z)**2;if(n<d){d=n;best=V(x+.5,0,z+.5);}}return best;}
 plan(player){
  const from=this.nearestCell(this.root.position);if(!from)return;
  let goal=this.nearestCell(player.pos),best=-Infinity;
  for(let z=2;z<54;z+=2)for(let x=2;x<62;x+=2)if(this.level.open(x,z)&&!this.level.isPit(x+.5,z+.5)){
   const p=V(x+.5,0,z+.5),d=p.distanceTo(V(player.pos.x,0,player.pos.z)),near=p.distanceTo(from);
   if(this.retreatT>0&&d>8&&near<15){const score=d-near*.3;if(score>best){best=score;goal=p;}}
  }
  this.path=(this.level.findPath(from,goal)||[]).slice(1);this.planT=this.retreatT?2:1.5;
 }
 call(){
  this.calls++;this.soundT=this.retreatT?3.5:2.8;
  const point=this.root.position.clone();this.audio.play('m_click',point,{gain:.55,rate:1.65,wet:.7});this.audio.play('scratch',point,{gain:.25,rate:1.4,wet:.5});
  this.game.noise(point,{radius:13,visual:7,source:'spider',kind:'click',color:COLORS.machine,strength:.65,decay:1.1});
 }
 update(dt,player,lamp){
  if(!this.active)return;this.clock+=dt;this.planT-=dt;this.soundT-=dt;this.retreatT=Math.max(0,this.retreatT-dt);
  const point=this.root.position.clone().addScaledVector(this.normal,.23),origin=V(lamp.origin.value.x,lamp.origin.value.y,lamp.origin.value.z),direction=V(lamp.direction.value.x,lamp.direction.value.y,lamp.direction.value.z);
  let lit=inFlashlight(point,origin,direction,lamp.origin.value.w);
  if(lit){const dir=point.clone().sub(origin),d=dir.length();this.ray.set(origin,dir.divideScalar(d));this.ray.far=d-.25;lit=!this.ray.intersectObject(this.level.geology.group,true).length;}
  this.exposure=THREE.MathUtils.clamp(this.exposure+(lit?dt: -dt*.8),0,1);
  if(this.exposure>.5&&this.retreatT<=0){this.repels++;this.retreatT=8;this.exposure=0;this.state='flee';this.planT=0;this.audio.play('m_hiss',point,{gain:.35,rate:1.7,wet:.7});if(this.mode==='wall')this.wallDirection=1;}
  if(this.retreatT<=0)this.state='stalk';
  if(this.mode==='wall'){
   const h=this.level.roofAt(this.wall.x,this.wall.z);this.wallY=THREE.MathUtils.clamp(this.wallY+this.wallDirection*dt*(this.retreatT?2.8:1.2),1.5,h-.4);if(this.wallY<=1.5)this.wallDirection=1;
   const at=wallPoint(this.level,this.wall.x,this.wall.z,(this.wallY-groundHeight(this.wall.x,this.wall.z))/(h-groundHeight(this.wall.x,this.wall.z)));this.root.position.copy(at.point).addScaledVector(at.normal,.025);this.normal.copy(at.normal);
   if(this.wallDirection>0&&this.wallY>=h-.401){this.mode='corner';this.cornerT=0;this.cornerDirection=1;}
  }else if(this.mode==='corner'){
   this.cornerT=THREE.MathUtils.clamp(this.cornerT+dt*(this.cornerDirection||1),0,1);const theta=this.cornerT*Math.PI/2,h=this.level.roofAt(this.wall.x,this.wall.z),n=wallPoint(this.level,this.wall.x,this.wall.z,.95).normal;
   this.root.position.set(this.wall.x+n.x*.4*(1-Math.cos(theta)),h-.4+.4*Math.sin(theta)-.03,this.wall.z+n.z*.4*(1-Math.cos(theta)));
   this.normal.copy(n).multiplyScalar(Math.cos(theta)).addScaledVector(DOWN,Math.sin(theta)).normalize();
   if(this.cornerDirection<0&&this.cornerT<=0){this.mode='wall';this.wallDirection=-1;this.wallY=h-.4;}else if(this.cornerDirection>0&&this.cornerT>=1){this.mode='ceiling';this.planT=0;}
  }else if(this.mode==='return'){
   this.returnT=Math.min(1,this.returnT+dt);const n=wallPoint(this.level,this.wall.x,this.wall.z,.95).normal;const goal=V(this.wall.x+n.x*.4,this.level.roofAt(this.wall.x,this.wall.z)-.03,this.wall.z+n.z*.4);this.root.position.copy(this.returnFrom).lerp(goal,THREE.MathUtils.smoothstep(this.returnT,0,1));this.normal.copy(DOWN);if(this.returnT>=1)this.mode='corner';
  }else{
   if(this.planT<=0)this.plan(player);
   const next=this.path[0];if(next){const dir=next.clone().sub(this.root.position);dir.y=0;const d=dir.length();if(d<.15)this.path.shift();else{
    const speed=this.retreatT?3.4:1.15,step=Math.min(d,speed*dt);dir.divideScalar(d);
    const x=this.root.position.x+dir.x*step,z=this.root.position.z+dir.z*step;
    if(caveField(x,z)>.05){this.root.position.x=x;this.root.position.z=z;}else{this.path=[];this.planT=0;}
   }}
   this.root.position.y=this.level.roofAt(this.root.position.x,this.root.position.z)-.035;this.normal.copy(DOWN);
   // Reach a nearby bank, then crawl down the actual rock face and back up.
   if(this.retreatT<=0&&this.clock%15<dt){
    const wall=this.level.geology.walls.reduce((a,b)=>(b.x-this.root.position.x)**2+(b.z-this.root.position.z)**2<(a.x-this.root.position.x)**2+(a.z-this.root.position.z)**2?b:a);
    if(Math.hypot(wall.x-this.root.position.x,wall.z-this.root.position.z)<1.4){this.wall=wall;this.mode='return';this.returnFrom=this.root.position.clone();this.cornerT=1;this.cornerDirection=-1;this.returnT=0;}
   }
  }
  if(this.lastMode!==this.mode){this.feet=[];this.lastMode=this.mode;}
  this.root.quaternion.slerp(new THREE.Quaternion().setFromUnitVectors(UP,this.normal),Math.min(1,dt*9));
  if(this.soundT<=0&&this.root.position.distanceTo(player.pos)<22)this.call();
  this.animate(dt);
 }
 animate(dt){
  this.root.updateMatrixWorld(true);const inv=this.root.matrixWorld.clone().invert(),matrix=new THREE.Matrix4(),q=new THREE.Quaternion();
  const rod=(i,a,b,r)=>{const d=b.clone().sub(a);q.setFromUnitVectors(UP,d.clone().normalize());matrix.compose(a.clone().add(b).multiplyScalar(.5),q,V(r,d.length(),r));this.model.legs.setMatrixAt(i,matrix);};
  for(let i=0;i<8;i++){
   const side=i<4?-1:1,index=i%4,hip=V(side*.17,.2,(index-1.5)*.18),target=V(side*(.6+(index%2)*.08),0,(index-1.5)*.43).applyMatrix4(this.root.matrixWorld);
   const phase=(this.clock*(this.retreatT?2.8:1.2)+(i%2)*.5)%1;
   let foot=this.feet[i];if(!foot||(phase<.45&&!foot.swing)){this.ray.set(target.clone().addScaledVector(this.normal,.7),this.normal.clone().negate());this.ray.far=1.6;const hit=this.ray.intersectObject(this.level.geology.group,true)[0];if(hit)target.copy(hit.point).addScaledVector(this.normal,.012);}
   if(!foot){foot=this.feet[i]={from:target.clone(),to:target.clone(),point:target.clone(),swing:false};}
   if(phase<.45){if(!foot.swing){foot.from.copy(foot.point);foot.to.copy(target);foot.swing=true;}const k=phase/.45;foot.point.copy(foot.from).lerp(foot.to,THREE.MathUtils.smoothstep(k,0,1)).addScaledVector(this.normal,Math.sin(k*Math.PI)*.11);}
   else{foot.swing=false;foot.point.copy(foot.to);}
   const local=foot.point.clone().applyMatrix4(inv),knee=hip.clone().lerp(local,.45).add(V(side*.15,.22,0));
   rod(i*2,hip,knee,.026);rod(i*2+1,knee,local,.018);matrix.makeTranslation(knee.x,knee.y,knee.z);this.model.joints.setMatrixAt(i,matrix);
  }
  this.model.legs.instanceMatrix.needsUpdate=this.model.joints.instanceMatrix.needsUpdate=true;
 }
 snapshot(){return {active:this.active,state:this.state,mode:this.mode,retreatT:this.retreatT,calls:this.calls,repels:this.repels,pos:this.root.position.toArray()};}
}

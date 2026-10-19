import * as THREE from 'three';
import {echo,echoMaterial,COLORS} from './echo.js';
import {wallPoint} from './cave-geology.js';
import {caveField} from './cave-layout.js';
import {groundHeight} from './cave-terrain.js';
import {advanceSpiderThreat} from './spider-threat.js';
import {spiderModel,SPIDER_LEGS,solveSpiderLeg} from './spider-model.js';
import {spiderTravelSpeed,advanceSpiderSpeed,steerSpiderHeading,spiderTension,limitSpiderPose} from './spider-motion.js';
import {SpiderSurface} from './spider-surface.js';
import {SpiderPath} from './spider-path.js';
const V=(x,y,z)=>new THREE.Vector3(x,y,z),UP=V(0,1,0),DOWN=V(0,-1,0),BEND=1.25,GAP=.3,ROOF_GAP=.55;
export function inFlashlight(point,origin,direction,power){const to=point.clone().sub(origin),d=to.length();return power>.12&&d<15&&d>.05&&to.divideScalar(d).dot(direction)>.945;}

export {spiderModel} from './spider-model.js';

export class CaveSpider{
 constructor({level,root,game,audio,player}){
  Object.assign(this,{level,game,audio,player});this.model=spiderModel(echoMaterial({map:'leather',scale:14,tint:0x928675,wet:.08,boost:1.1,bump:.35}),echoMaterial({map:'cave/porcelain',scale:6,bump:.45,boost:1.1}));this.root=this.model.root;root.add(this.root);
  this.ray=new THREE.Raycaster();this.reset();
 }
 reset(){this.active=false;this.root.visible=false;this.mode='wall';this.state='dormant';this.exposure=0;this.retreatT=0;this.soundT=1.2;this.warning=0;this.planT=0;this.clock=0;this.gaitPhase=.58;this.speed=0;this.strideSpeed=0;this.turnSpeed=0;this.velocity=V(0,0,0);this.tension=0;this.stepGroup=0;this.path=[];this.feet=[];this.legChains=[];this.calls=0;this.repels=0;this.normal=V(0,0,1);this.heading=V(0,1,0);this.wallDirection=1;this.introT=4;this.occlusionT=0;this.canSee=false;this.bankT=5;}
 visibleFrom(origin,point){
  const direction=point.clone().sub(origin),distance=direction.length();if(distance<.1)return true;
  this.ray.set(origin,direction.divideScalar(distance));this.ray.far=Math.max(.01,distance-.18);
  return !this.ray.intersectObjects(this.level.scene.children.filter(o=>o!==this.root),true).some(h=>h.object.isMesh&&!h.object.material.transparent);
 }
 activate(saved=null){
  if(this.active)return;this.active=true;this.root.visible=true;this.state='stalk';
  this.ceilingDepth=ROOF_GAP;this.stuckT=0;
  this.roofPath?.avoid.clear();
  if(!this.surface&&this.level.scene)this.surface=new SpiderSurface(this.level.scene,this.root,this.level);
  if(!this.roofPath&&this.surface?.triangles.length)this.roofPath=new SpiderPath(this.level,this.surface);
  const walls=this.level.geology.walls,player=this.player;
  const focus=saved?.active&&saved.pos?.every(Number.isFinite)?V(...saved.pos):player?.pos||V(54,0,19);
  const forward=V(-Math.sin(player?.yaw||0),0,-Math.cos(player?.yaw||0));
  const candidates=walls.map(w=>{
   const to=V(w.x-focus.x,0,w.z-focus.z),d=to.length();
   return {w,score:Math.abs(d-4.5)+Math.max(0,-to.normalize().dot(forward))*5};
  }).sort((a,b)=>a.score-b.score);
  this.wall=candidates[0].w;
  for(const {w}of candidates.slice(0,24)){
   const floor=groundHeight(w.x,w.z),h=this.level.roofAt(w.x,w.z),at=wallPoint(this.level,w.x,w.z,(Math.min(floor+2.2,h-BEND)-floor)/(h-floor));
   if(!player||this.visibleFrom(player.camera.position,at.point.clone().addScaledVector(at.normal,.25))){this.wall=w;break;}
  }
  this.wallY=Math.min(groundHeight(this.wall.x,this.wall.z)+2.2,this.level.roofAt(this.wall.x,this.wall.z)-BEND);this.mode='wall';this.planT=0;
  if(saved?.active){this.retreatT=Math.max(0,saved.retreatT||0);this.state=this.retreatT?'flee':'stalk';}
  const h=this.level.roofAt(this.wall.x,this.wall.z),at=wallPoint(this.level,this.wall.x,this.wall.z,(this.wallY-groundHeight(this.wall.x,this.wall.z))/(h-groundHeight(this.wall.x,this.wall.z)));
  this.root.position.copy(at.point).addScaledVector(at.normal,GAP);this.normal.copy(at.normal);this.root.quaternion.setFromUnitVectors(UP,this.normal);
  if(saved?.active&&saved.pos?.length===3&&saved.pos.every(Number.isFinite)){
   this.wall=walls.reduce((a,b)=>Math.hypot(b.x-(saved.wall?.x??saved.pos[0]),b.z-(saved.wall?.z??saved.pos[2]))<Math.hypot(a.x-(saved.wall?.x??saved.pos[0]),a.z-(saved.wall?.z??saved.pos[2]))?b:a);
   this.mode=['wall','corner','ceiling','return'].includes(saved.mode)?saved.mode:'wall';
   this.root.position.fromArray(saved.pos);this.wallY=saved.wallY??saved.pos[1];this.wallDirection=saved.wallDirection??1;
   this.cornerT=saved.cornerT??0;this.cornerDirection=saved.cornerDirection??1;this.returnT=saved.returnT??0;this.returnFrom=V(...(saved.returnFrom||saved.pos));
   this.clock=Number.isFinite(saved.clock)?saved.clock:0;this.gaitPhase=Number.isFinite(saved.gaitPhase)?saved.gaitPhase:.58;
   this.speed=Number.isFinite(saved.speed)?saved.speed:0;
   this.ceilingDepth=Number.isFinite(saved.ceilingDepth)?saved.ceilingDepth:ROOF_GAP;
   if(saved.normal?.length===3&&saved.normal.every(Number.isFinite))this.normal.fromArray(saved.normal).normalize();
   else if(this.mode==='ceiling'||this.mode==='return')this.normal.copy(DOWN);
   if(saved.heading?.length===3&&saved.heading.every(Number.isFinite))this.heading.fromArray(saved.heading).normalize();
   else if(this.mode==='ceiling')this.heading.set(0,0,-1);
   this.introT=0;this.soundT=1.2;
  }
  this.root.quaternion.setFromUnitVectors(UP,this.normal);
  const back=this.heading.clone().negate().projectOnPlane(this.normal).normalize();
  if(back.lengthSq()>.1)this.root.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(this.normal.clone().cross(back).normalize(),this.normal,back));
  const spawnAnchor=this.root.position.clone();
  this.surface?.fitBody(this.root.position,this.root.quaternion,this.root.scale.x);
  this.animate(0);
  const unsafe=()=>this.poseBlocked||this.surface&&!this.surface.bodyClear(this.root.position,this.root.quaternion,this.root.scale.x);
  for(let i=0;unsafe()&&i<10;i++){this.root.position.addScaledVector(this.normal,.12);this.feet=[];this.legChains=[];this.surface?.fitBody(this.root.position,this.root.quaternion,this.root.scale.x);this.animate(0);}
  if((unsafe()||this.root.position.distanceTo(spawnAnchor)>.6)&&this.roofPath){
   const cell=this.roofPath.nearest(focus);
   if(cell){
    this.mode='ceiling';this.root.position.set(cell[0]+.5,this.level.roofAt(cell[0]+.5,cell[1]+.5)-ROOF_GAP,cell[1]+.5);this.normal.copy(this.roofNormal(this.root.position.x,this.root.position.z));this.heading.set(0,0,-1).projectOnPlane(this.normal).normalize();
    const back=this.heading.clone().negate();this.root.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(this.normal.clone().cross(back).normalize(),this.normal,back));this.surface.fitBody(this.root.position,this.root.quaternion,this.root.scale.x);this.feet=[];this.legChains=[];this.animate(0);
   }
  }
 }
 nearestCell(point){let best=null,d=Infinity;for(let z=1;z<55;z++)for(let x=1;x<63;x++)if(this.level.open(x,z)&&!this.level.isPit(x+.5,z+.5)){const n=(x+.5-point.x)**2+(z+.5-point.z)**2;if(n<d){d=n;best=V(x+.5,0,z+.5);}}return best;}
 plan(player){
  const from=this.nearestCell(this.root.position);if(!from)return;
  // Remain ahead of the player, where a warning can be located and lit.
  const flank=this.calls%2?1:-1,yaw=(player.yaw||0)+flank*1.95;
  const ahead=V(player.pos.x-Math.sin(yaw)*4.5,0,player.pos.z-Math.cos(yaw)*4.5);
  let goal=this.nearestCell(ahead),best=-Infinity;
  for(let z=2;z<54;z+=2)for(let x=2;x<62;x+=2)if(this.level.open(x,z)&&!this.level.isPit(x+.5,z+.5)){
   const p=V(x+.5,0,z+.5),d=p.distanceTo(V(player.pos.x,0,player.pos.z)),near=p.distanceTo(from);
   if(this.retreatT>0&&d>8&&near<15){const score=d-near*.3;if(score>best){best=score;goal=p;}}
  }
  this.path=this.roofPath?this.roofPath.find(this.root.position,goal):(this.level.findPath(from,goal)||[]).slice(1);this.planT=this.retreatT?2:1.5;
 }
 call(){
  this.calls++;this.warning=0;this.soundT=5.5+(this.calls%3)*.7;
  const point=this.root.position.clone();this.audio.play('m_click',point,{gain:.55,rate:1.65,wet:.7});this.audio.play('scratch',point,{gain:.25,rate:1.4,wet:.5});
  this.game.noise(point,{radius:22,visual:9,source:'spider',kind:'click',color:COLORS.machine,strength:.85,decay:1.1});
 }
 update(dt,player,lamp){
  if(!this.active||!Number.isFinite(dt)||dt<=0)return;
  this.surface?.refreshDoors();
  if(this.root.position.distanceToSquared(player.camera.position)>22*22){this.farTime=(this.farTime||0)+dt;if(this.farTime<.1)return;dt=this.farTime;this.farTime=0;}
  else if(this.farTime){dt+=this.farTime;this.farTime=0;}
  const steps=Math.max(1,Math.ceil(dt/(1/30)));for(let i=0;i<steps;i++)this.step(dt/steps,player,lamp);
 }
 step(dt,player,lamp){
  this.clock+=dt;this.planT-=dt;this.introT=Math.max(0,this.introT-dt);this.bankT-=dt;this.occlusionT-=dt;
  const point=this.root.position.clone().addScaledVector(this.normal,.23*this.root.scale.x),origin=V(lamp.origin.value.x,lamp.origin.value.y,lamp.origin.value.z),direction=V(lamp.direction.value.x,lamp.direction.value.y,lamp.direction.value.z);
  if(this.occlusionT<=0){this.canSee=point.distanceTo(player.camera.position)<15&&this.visibleFrom(player.camera.position,point);this.occlusionT=.1;}
  const lit=this.canSee&&inFlashlight(point,origin,direction,lamp.origin.value.w);
  const event=advanceSpiderThreat(this,dt,{lit,visible:this.canSee,distance:point.distanceTo(player.camera.position),hidden:!!player.hidden});
  if(event==='warn'){this.audio.play('scratch',point,{gain:.5,rate:.65,wet:.6});echo.emit(point,{radius:4,speed:8,strength:.85,decay:1.4,color:COLORS.machine});}
  if(event==='call')this.call();
  if(event==='repel'){
   this.planT=0;this.path=[];this.bankT=12;this.audio.play('m_hiss',point,{gain:.35,rate:1.7,wet:.7});
   if(this.mode==='wall')this.wallDirection=1;
   else if(this.mode==='corner')this.cornerDirection=1;
   else if(this.mode==='return')this.mode='ceiling';
  }
  const before=this.root.position.clone(),rotation=this.root.quaternion.clone();
  const motionBefore={mode:this.mode,wallY:this.wallY,cornerT:this.cornerT,cornerDirection:this.cornerDirection,wallDirection:this.wallDirection,wall:this.wall,returnT:this.returnT};
  const feetBefore=this.surface?.triangles.length?this.feet.map(f=>({...f,point:f.point.clone(),to:f.to.clone(),from:f.from.clone(),rest:f.rest.clone(),normal:f.normal?.clone()})):null;
  const chainsBefore=feetBefore?this.legChains.map(chain=>chain?.map(p=>p.clone())):null;
  let targetSpeed=spiderTravelSpeed(this);
  if(this.retreatT<=0&&this.state==='stalk'&&this.introT<=0&&this.canSee){
   const to=this.root.position.clone().sub(player.camera.position),forward=V(-Math.sin(player.yaw||0),0,-Math.cos(player.yaw||0));
   if(to.length()<7&&to.normalize().dot(forward)>.55)targetSpeed*=.55;
  }
  if(this.mode==='wall'&&this.wallDirection>0){
   const remaining=Math.max(0,this.level.roofAt(this.wall.x,this.wall.z)-BEND-this.wallY),bendSpeed=this.retreatT>0?1:.5;
   targetSpeed=Math.min(targetSpeed,Math.sqrt(bendSpeed*bendSpeed+7*remaining));
  }
  this.speed=advanceSpiderSpeed(this.speed,targetSpeed,dt);
  // A single heading drives the torso and movement. Calls hold the current
  // orientation instead of alternating between staring and facing the route.
  const steer=(normal,direction)=>{
   const alignment=steerSpiderHeading(this.heading,this.normal,normal,direction,dt);this.normal.copy(normal);return alignment;
  };
  if(this.mode==='wall'){
   const h=this.level.roofAt(this.wall.x,this.wall.z),low=groundHeight(this.wall.x,this.wall.z)+1.4,high=h-BEND;
   const at=wallPoint(this.level,this.wall.x,this.wall.z,(this.wallY-groundHeight(this.wall.x,this.wall.z))/(h-groundHeight(this.wall.x,this.wall.z)));
   const alignment=steer(at.normal,UP.clone().multiplyScalar(this.wallDirection));
   this.wallY=THREE.MathUtils.clamp(this.wallY+this.wallDirection*this.speed*alignment*dt,low,high);
   const next=wallPoint(this.level,this.wall.x,this.wall.z,(this.wallY-groundHeight(this.wall.x,this.wall.z))/(h-groundHeight(this.wall.x,this.wall.z)));
   this.root.position.copy(next.point).addScaledVector(next.normal,GAP);
   if(this.wallDirection<0&&this.wallY<=low){this.wallDirection=1;this.speed=0;}
   if(this.wallDirection>0&&this.wallY>=high-.0001){this.mode='corner';this.cornerT=0;this.cornerDirection=1;}
  }else if(this.mode==='corner'){
   const pose=this.cornerPose(this.cornerT),direction=pose.tangent.multiplyScalar(this.cornerDirection||1);
   const alignment=steer(pose.normal,direction);
   this.cornerT=THREE.MathUtils.clamp(this.cornerT+dt*Math.min(this.speed,1)*alignment*(this.cornerDirection||1)/(BEND*Math.PI/2),0,1);
   const next=this.cornerPose(this.cornerT);
   // Parallel transport the frame over the bend; there is no pose reset at
   // either end of the arc, and planted feet keep their world-space anchors.
   this.heading.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(this.normal,next.normal));this.normal.copy(next.normal);this.root.position.copy(next.point);
   if(this.cornerDirection<0&&this.cornerT<=0){this.mode='wall';this.wallDirection=-1;this.wallY=this.root.position.y;}
   else if(this.cornerDirection>0&&this.cornerT>=1){this.mode='ceiling';this.planT=0;this.bankT=Math.max(this.bankT,12);}
  }else{
   let goal;
   if(this.mode==='return')goal=this.cornerPose(1).point;
   else{
    // Keep a route until the current leg is completed. Replanning every 1.5s
    // used to reverse the heading in the middle of a step on the same grid.
    if(this.planT<=0&&!this.path.length)this.plan(player);
    while(this.path.length){
     const a=this.path[0],b=this.path[1],dx=this.root.position.x-a.x,dz=this.root.position.z-a.z;
     if(Math.hypot(dx,dz)<.12||b&&dx*(b.x-a.x)+dz*(b.z-a.z)>0)this.path.shift();else break;
    }
    goal=this.path[0];
   }
   this.attemptGoal=goal?.clone();
   if(goal){
    const dir=goal.clone().sub(this.root.position);dir.y=0;const distance=dir.length();
    if(distance>.001){
     dir.divideScalar(distance);const alignment=steer(this.roofNormal(this.root.position.x,this.root.position.z),dir),step=Math.min(distance,this.speed*alignment*dt);
     const x=this.root.position.x+dir.x*step,z=this.root.position.z+dir.z*step;
     if(caveField(x,z)>.005){this.root.position.x=x;this.root.position.z=z;}else{this.path=[];this.planT=0;}
    }
   }
   this.ceilingDepth=Math.max(ROOF_GAP,(this.ceilingDepth||ROOF_GAP)-dt*.06);
   this.root.position.y=this.level.roofAt(this.root.position.x,this.root.position.z)-this.ceilingDepth;
   const normal=this.roofNormal(this.root.position.x,this.root.position.z);
   this.heading.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(this.normal,normal));this.normal.copy(normal);
   if(this.mode==='return'&&this.root.position.distanceTo(goal)<.025){this.mode='corner';this.cornerT=1;this.cornerDirection=-1;}
   else if(this.mode==='ceiling'&&this.retreatT<=0&&this.bankT<=0){
    this.bankT=1.5;
    const wall=this.level.geology.walls.reduce((a,b)=>(b.x-this.root.position.x)**2+(b.z-this.root.position.z)**2<(a.x-this.root.position.x)**2+(a.z-this.root.position.z)**2?b:a);
    if(Math.hypot(wall.x-this.root.position.x,wall.z-this.root.position.z)<2.2){this.wall=wall;this.mode='return';this.returnFrom=this.root.position.clone();this.cornerT=1;this.cornerDirection=-1;this.returnT=0;this.bankT=12;}
   }
  }
  const back=this.heading.clone().negate().projectOnPlane(this.normal).normalize();
  if(back.lengthSq()>.1)this.root.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(this.normal.clone().cross(back).normalize(),this.normal,back));
  if(this.surface){
   this.surface.fitBody(this.root.position,this.root.quaternion,this.root.scale.x);
   if(this.mode==='ceiling'||this.mode==='return')this.ceilingDepth=Math.max(ROOF_GAP,this.level.roofAt(this.root.position.x,this.root.position.z)-this.root.position.y);
   limitSpiderPose(this.root.position,this.root.quaternion,before,rotation,this.speed,dt);
   if(!this.surface.bodyClear(this.root.position,this.root.quaternion,this.root.scale.x)){
    Object.assign(this,motionBefore);this.root.position.copy(before);this.root.quaternion.copy(rotation);this.path=[];this.planT=0;this.speed=0;
   }
   this.heading.set(0,0,-1).applyQuaternion(this.root.quaternion);this.normal.copy(UP).applyQuaternion(this.root.quaternion);
  }
  this.velocity.copy(this.root.position).sub(before).divideScalar(dt);this.strideSpeed=this.velocity.length();this.turnSpeed=rotation.angleTo(this.root.quaternion)/dt;
  this.gaitPhase+=this.strideSpeed*dt/.85;
  this.animate(dt);
  if(this.poseBlocked&&feetBefore){
   Object.assign(this,motionBefore);this.root.position.copy(before);this.root.quaternion.copy(rotation);this.heading.set(0,0,-1).applyQuaternion(rotation);this.normal.copy(UP).applyQuaternion(rotation);this.feet=feetBefore;this.legChains=chainsBefore;this.velocity.set(0,0,0);this.strideSpeed=0;this.speed=0;this.path=[];this.planT=0;this.animate(dt);
  }
  if((this.mode==='ceiling'||this.mode==='return')&&this.state!=='warning'&&targetSpeed>0){
   this.stuckT=this.root.position.distanceTo(before)<dt*.025?this.stuckT+dt:0;
   if(this.stuckT>.7){
    if(this.mode==='return'){this.mode='ceiling';this.bankT=20;}
    else if(this.attemptGoal)this.roofPath?.block(this.attemptGoal);
    this.path=[];this.planT=0;this.stuckT=0;
   }
  }else this.stuckT=0;
 }
 roofNormal(x,z){
  const h=(x,z)=>this.level.roofAt(x,z),e=.04;return V((h(x+e,z)-h(x-e,z))/(2*e),-1,(h(x,z+e)-h(x,z-e))/(2*e)).normalize();
 }
 cornerPose(t){
  const {x,z}=this.wall,h=this.level.roofAt(x,z),floor=groundHeight(x,z),start=wallPoint(this.level,x,z,(h-BEND-floor)/(h-floor)),theta=t*Math.PI/2;
  const point=start.point.clone().addScaledVector(start.normal,GAP+BEND*(1-Math.cos(theta)));
  const end=start.point.clone().addScaledVector(start.normal,GAP+BEND),endY=this.level.roofAt(end.x,end.z)-ROOF_GAP;
  point.y=h-BEND+BEND*Math.sin(theta)+(endY-h)*THREE.MathUtils.smoothstep(t,0,1);
  const normal=start.normal.clone().multiplyScalar(Math.cos(theta)).addScaledVector(this.roofNormal(point.x,point.z),Math.sin(theta)).normalize();
  point.addScaledVector(normal,.55*Math.sin(t*Math.PI));
  const tangent=UP.clone().multiplyScalar(Math.cos(theta)).addScaledVector(start.normal,Math.sin(theta)).projectOnPlane(normal).normalize();
  return {point,normal,tangent};
 }
 contact(target){
  if(this.surface?.triangles.length){
   const origin=target.clone().addScaledVector(this.normal,1.3),hit=this.surface.contact(origin,this.normal.clone().negate(),3.5);
   if(hit)return hit.point.addScaledVector(hit.normal,.032);
   // A foot near a corner can plant on either adjoining surface, but never
   // jump through the first wall to a hidden surface behind it.
   for(const direction of [UP,DOWN,this.normal.clone().negate()]){
    const hit=this.surface.contact(this.root.position.clone().addScaledVector(this.normal,.45),target.clone().sub(this.root.position).addScaledVector(direction,.3).normalize(),3);
    if(hit)return hit.point.addScaledVector(hit.normal,.032);
   }
   return target;
  }
  if(this.mode==='ceiling'||this.mode==='return'){
   const outside=caveField(target.x,target.z);
   if(outside<.02){
    const e=.025,g=V(caveField(target.x+e,target.z)-caveField(target.x-e,target.z),0,caveField(target.x,target.z+e)-caveField(target.x,target.z-e)).normalize();
    target.addScaledVector(g,.02-outside);const roof=this.level.roofAt(target.x,target.z),floor=groundHeight(target.x,target.z);
    target.copy(wallPoint(this.level,target.x,target.z,(roof-Math.min(.8,-outside)-.08-floor)/(roof-floor)).point).addScaledVector(g,.012);
   }else target.y=this.level.roofAt(target.x,target.z)-.012;
  }else{
   const roof=this.level.roofAt?.(target.x,target.z);
   if(roof!==undefined&&target.y>roof-.04){target.addScaledVector(this.normal,target.y-roof+.09);target.y=this.level.roofAt(target.x,target.z)-.012;return target;}
   const origin=target.clone().addScaledVector(this.normal,.7),direction=this.normal.clone().negate();
   this.ray.set(origin,direction);this.ray.far=1.6;
   const hit=this.level.castRock?this.level.castRock(origin,direction,1.6):this.ray.intersectObject(this.level.geology.group,true)[0];if(hit)target.copy(hit.point).addScaledVector(this.normal,.012);
  }
  return target;
 }
 footContact(target,index){
  const spec=SPIDER_LEGS[index%4],hip=V((index<4?-1:1)*spec.hip[0],spec.hip[1],spec.hip[2]),inv=this.root.matrixWorld.clone().invert();
  let best=null,error=Infinity;
  // Search closer footholds on tight bends instead of reaching through rock
  // for the full resting span. Queries use the same local wall acceleration.
  for(const inset of [0,.2,.4,.6]){
   const point=this.contact(target.clone().lerp(this.root.position,inset)),local=point.clone().applyMatrix4(inv);
   const ankle=local.clone().lerp(hip,.065).add(V(0,.12,0)),distance=ankle.distanceTo(hip);
   const excess=Math.max(0,distance-(spec.femur+spec.tibia-.06));
   const chain=solveSpiderLeg(hip,local,index).map(p=>p.clone().applyMatrix4(this.root.matrixWorld)),clear=!this.surface||this.surface.legClear(chain,this.root.scale.x);
   const score=excess+(clear?0:10);
   if(score<error){best=point;error=score;}if(score===0)break;
  }
  return best;
 }
 legPose(hip,target,index){
  const scale=this.root.scale.x,toWorld=chain=>chain.map(p=>p.clone().applyMatrix4(this.root.matrixWorld)),previous=this.legChains?.[index];
  if(!this.surface?.triangles.length)return solveSpiderLeg(hip,target,index);
  const inv=this.root.matrixWorld.clone().invert(),oldToe=previous?.[3].clone().applyMatrix4(inv),oldKnee=previous?.[1].clone().applyMatrix4(inv),oldAnkle=previous?.[2].clone().applyMatrix4(inv);
  const maxStep=Math.max(0,this.poseDt||0)*10+.0001;
  let safeFallback=null;
  const tryTarget=toe=>{
   const ankle=oldAnkle?oldAnkle.clone().add(toe.clone().sub(oldToe)):null;
   const base=solveSpiderLeg(hip,toe,index,0,ankle),axis=base[2].clone().sub(hip).normalize(),baseBend=base[1].clone().sub(hip).projectOnPlane(axis).normalize();
   let preferred=0;
   if(oldKnee){const bend=oldKnee.clone().sub(hip).projectOnPlane(axis).normalize();preferred=Math.atan2(axis.dot(baseBend.clone().cross(bend)),baseBend.dot(bend));}
   // Preserve the previous knee's side of the IK plane. Trying +/- bends from
   // zero every frame can flip a knee by 180 degrees beside a rock lip.
   for(const offset of [0,.02,-.02,.04,-.04,.07,-.07,.12,-.12,.2,-.2,.35,-.35,.7,-.7,1.4,-1.4,Math.PI]){
    const chain=solveSpiderLeg(hip,toe,index,preferred+offset,ankle),world=toWorld(chain);
    if(previous&&world.some((p,j)=>p.distanceTo(previous[j])>maxStep))continue;
    if(this.surface.legClear(world,scale)){
     if(this.surface.legClear(world,scale,.045))return chain;
     if(!safeFallback)safeFallback=chain;
    }
   }return null;
  };
  for(const fraction of previous?[1,.5,.25,.1]:[1]){
   const toe=oldToe?oldToe.clone().lerp(target,fraction):target;
   const chain=tryTarget(toe);if(chain)return chain;
  }
  for(const pull of [.25,.5,.75,1]){
   const folded=target.clone().lerp(hip.clone().add(V((index<4?-1:1)*.35,.45,0)),pull);
   for(const fraction of previous?[.25,.1,.05]:[1]){const chain=tryTarget(oldToe?oldToe.clone().lerp(folded,fraction):folded);if(chain)return chain;}
  }
  if(oldToe){const chain=tryTarget(oldToe);if(chain)return chain;}
  if(safeFallback)return safeFallback;
  if(previous){
   // A released limb can follow its hip while retaining the exact previous
   // joint configuration. Re-solving a clamped, unreachable ankle is not
   // reversible and otherwise traps the gait against its last safe pose.
   const local=previous.map(p=>p.clone().applyMatrix4(inv)),shift=hip.clone().sub(local[0]);
   for(const p of local)p.add(shift);
   const world=toWorld(local);
   if(world.every((p,j)=>p.distanceTo(previous[j])<=maxStep)&&this.surface.legClear(world,scale))return local;
  }
  return null;
 }
 animate(dt){
  this.poseBlocked=false;this.poseDt=dt;
  this.root.updateMatrixWorld(true);const inv=this.root.matrixWorld.clone().invert(),matrix=new THREE.Matrix4(),q=new THREE.Quaternion();
  this.tension=THREE.MathUtils.damp(this.tension||0,spiderTension(this.warning),10,dt);
  const tension=this.tension,pace=this.strideSpeed||0;
  if(this.model.mouths)for(let i=0;i<2;i++){
   const side=i?1:-1,hinge=this.model.mouths[i];hinge.rotation.y=side*(tension*.72+.012*Math.sin(this.clock*2.2+i));hinge.rotation.x=-tension*.32;
  }
  this.model.abdomen.scale.y=1+.02*Math.sin(this.clock*2.1)+tension*.08;
  if(this.model.mouthCore)this.model.mouthCore.scale.x=.45+tension*.75;
  if(this.model.rupture){this.model.rupture.scale.x=.65+tension*.7;for(let i=0;i<2;i++)this.model.ruptureLips[i].rotation.z=(i?1:-1)*(.10+tension*.6);}
  const rod=(i,a,b,r)=>{const d=b.clone().sub(a);q.setFromUnitVectors(UP,d.clone().normalize());matrix.compose(a.clone().add(b).multiplyScalar(.5),q,V(r,d.length(),r));this.model.legs.setMatrixAt(i,matrix);};
  const targets=SPIDER_LEGS.concat(SPIDER_LEGS).map((spec,i)=>{
   const target=V((i<4?-1:1)*spec.foot[0]*.9,0,spec.foot[2]*.9).applyMatrix4(this.root.matrixWorld);
   return target;
  });
  // Alternate two supporting groups. A step always starts at progress zero
  // and finishes even after stopping; its phase cannot jump with speed/mode.
  const stepping=this.feet.some(f=>f.swing);
  if(!stepping&&dt>0){
   const group=this.stepGroup||0,belongs=i=>((i%2)+(i>=4?1:0))%2===group;
   const needsStep=targets.some((target,i)=>belongs(i)&&this.feet[i]&&target.distanceTo(this.feet[i].rest)>.22);
   if(needsStep){
    for(let i=0;i<8;i++)if(belongs(i)&&this.feet[i]){
     const foot=this.feet[i],lead=this.velocity?.clone().multiplyScalar(.1)||V(0,0,0);
     foot.rest.copy(targets[i]).add(lead);foot.from.copy(foot.point);foot.to.copy(this.footContact(foot.rest,i));foot.normal=this.normal.clone();foot.progress=0;foot.duration=Math.max(THREE.MathUtils.clamp(.24-pace*.045,.125,.24),foot.from.distanceTo(foot.to)/2.2);foot.swing=true;
    }
    this.stepGroup=1-group;
   }else if(targets.some((t,i)=>this.feet[i]&&t.distanceTo(this.feet[i].rest)>.22))this.stepGroup=1-group;
  }
  for(let i=0;i<8;i++){
   const side=i<4?-1:1,index=i%4,spec=SPIDER_LEGS[index],hip=V(side*spec.hip[0],spec.hip[1],spec.hip[2]);
   let foot=this.feet[i];
   if(!foot){const rest=targets[i].clone(),target=this.footContact(targets[i],i);foot=this.feet[i]={rest,from:target.clone(),to:target.clone(),point:target.clone(),swing:false,progress:1};}
   if(foot.swing){
    foot.progress=Math.min(1,foot.progress+dt/foot.duration);const k=foot.progress;
    const liftNormal=foot.normal.clone().lerp(this.normal,k).normalize();
    foot.point.copy(foot.from).lerp(foot.to,THREE.MathUtils.smoothstep(k,0,1)).addScaledVector(liftNormal,Math.sin(k*Math.PI)**2*.085);
    if(k>=1){foot.point.copy(foot.to);foot.swing=false;}
   }
   const rendered=foot.point.clone();if(index===0)rendered.addScaledVector(this.normal,tension*.18);
   if(this.surface?.triangles.length)rendered.add(this.surface.pushSphere(rendered,.045));
   const local=rendered.applyMatrix4(inv);let chain=this.legPose(hip,local,i);
   if(!chain){this.poseBlocked=true;chain=this.legChains?.[i]?.map(p=>p.clone().applyMatrix4(inv));if(!chain)continue;}
   (this.legChains||=[])[i]=chain.map(p=>p.clone().applyMatrix4(this.root.matrixWorld));
   const thickness=[.039,.026,.013];
   for(let j=0;j<3;j++)rod(i*3+j,chain[j],chain[j+1],thickness[j]);
   for(let j=0;j<2;j++){const r=j===0?.039:.020;matrix.compose(chain[j+1],new THREE.Quaternion(),V(r,r,r));this.model.joints.setMatrixAt(i*2+j,matrix);}
   const toe=chain[3].clone().sub(chain[2]).normalize(),tip=chain[3].clone().addScaledVector(toe,-.015);q.setFromUnitVectors(UP,toe);matrix.compose(tip,q,V(.008,.05,.008));this.model.tips.setMatrixAt(i,matrix);
  }
  this.model.legs.instanceMatrix.needsUpdate=this.model.joints.instanceMatrix.needsUpdate=this.model.tips.instanceMatrix.needsUpdate=true;
 }
 snapshot(){return {active:this.active,state:this.state,mode:this.mode,warning:this.warning,retreatT:this.retreatT,calls:this.calls,repels:this.repels,pos:this.root.position.toArray(),normal:this.normal.toArray(),heading:this.heading.toArray(),wall:this.wall?{x:this.wall.x,z:this.wall.z}:null,wallY:this.wallY,wallDirection:this.wallDirection,cornerT:this.cornerT,cornerDirection:this.cornerDirection,returnT:this.returnT,returnFrom:this.returnFrom?.toArray(),clock:this.clock,gaitPhase:this.gaitPhase,speed:this.speed,strideSpeed:this.strideSpeed,ceilingDepth:this.ceilingDepth};}
}

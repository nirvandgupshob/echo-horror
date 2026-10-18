import * as THREE from 'three';
import { Level, W, H, ROOMS, FLOOR } from './level.js';
import { Builder } from './builder.js';
import { echoMaterial } from './echo.js';
import { LIFT_OFFSET, moveLiftCollider } from './lift-asset.js';
import { caveLayout, CAVE_SPAWN, CAVE_ZONES, CAVE_STATIONS,pitField,caveField } from './cave-layout.js';
import { caveProp, CAVE_MODEL_TYPES } from './cave-props.js';
import { caveSurface, hospitalFrame, hospitalWeight,hospitalShellWeight } from './cave-style.js';
import * as P from './props.js';
import { createFlashlightModel } from './flashlight.js';
import {createFuse,workMaterials} from './work-props.js';
import {groundHeight} from './cave-terrain.js';
import {pushRock,pushPit,castRock,pushRockPoint} from './cave-collision.js';
import {buildCaveGeology} from './cave-geology.js';
import {dressCave,buildWardPartitions,TORCH_RACK} from './cave-dressing.js';
import {DETAIL_SURFACES,detailSurface} from './detail-materials.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const V = (x,y,z) => new THREE.Vector3(x,y,z);
const hash = (x,y,z=0) => { const n=Math.sin(x*127.1+y*311.7+z*74.7)*43758.5453;return n-Math.floor(n); };
const KEYS = ['basalt','limestone','shale','calcite','wetrock','flowstone','breccia','salt','clay','silt','gravel','algae','ceramic','ochretile','porcelain','copper','corroded','enamel','mesh','cable','gauze','canvas','sediment','fossil'];

export class CaveLevel extends Level {
  layout() {
    const data=caveLayout(W,H), first=ROOMS.length;
    this.spawn=CAVE_SPAWN;
    this.cells=data.cells;this.ceil=data.ceiling;this.pits=data.pits;
    this.room=new Int8Array(W*H).fill(-1);
    CAVE_ZONES.forEach(r=>ROOMS.push({name:r.name,x:r.x-r.rx,z:r.z-r.rz,w:r.rx*2,h:r.rz*2}));
    for(let i=0;i<this.room.length;i++)if(data.zones[i]>=0)this.room[i]=first+data.zones[i];
    this.zones=data.zones;this.lowCeiling=Uint8Array.from(data.ceiling,(h,i)=>data.cells[i]&&h>0&&h<1.7?1:0);
    for(let z=0;z<H;z++)for(let x=0;x<W;x++)if(this.open(x,z)&&this.ceilAt(x,z)>=1.7)this.ceil[z*W+x]=hospitalWeight(x+.5,z+.5)>.97?2.9:this.roofAt(x+.5,z+.5);
  }
  floorHeightAt(x,z){return groundHeight(x,z);}
  shaftCell() { return false; }
  collide(pos,r,allowPits=false){
    // Intact hospital walls still use their authored rectangular geometry.
    if(hospitalWeight(Math.floor(pos.x)+.5,Math.floor(pos.z)+.5)>.97)return super.collide(pos,r,allowPits);
    for(let iteration=0;iteration<3;iteration++){
      pushRock(this,pos,r);
      if(!allowPits)pushPit(pos,r);
      const seen=new Set();
      for(let z=Math.floor(pos.z-r-1);z<=Math.floor(pos.z+r+1);z++)for(let x=Math.floor(pos.x-r-1);x<=Math.floor(pos.x+r+1);x++){
        if(x<0||z<0||x>=W||z>=H)continue;
        for(const c of this.hash?.[z*W+x]||[]){if(seen.has(c))continue;seen.add(c);this._push(pos,r,c.minX,c.maxX,c.minZ,c.maxZ);}
      }
      for(const d of this.doors)if(d.box&&d.closed)this._push(pos,r,d.box.minX,d.box.maxX,d.box.minZ,d.box.maxZ);
    }
  }
  gridWallAt(x,z){return hospitalWeight(Math.floor(x)+.5,Math.floor(z)+.5)>.97;}
  castRock(origin,direction,reach){return castRock(this,origin,direction,reach);}
  rockPushOut(point,radius){return this.gridWallAt(point.x,point.z)?new THREE.Vector3():pushRockPoint(this,point,radius);}
  acousticOpen(x,z){return this.navigationOpen(x,z);}
  navigationOpen(x,z){return hospitalWeight(Math.floor(x)+.5,Math.floor(z)+.5)>.97?this.open(Math.floor(x),Math.floor(z)):caveField(x,z)>0;}
  headroomAt(x,z){return this.roofAt(x,z)-groundHeight(x,z);}
  navigationHeadroom(x,z){return this.headroomAt(x,z);}
  blockedPoint(x,z,r){return pitField(x,z)<r||super.blockedPoint(x,z,r);}
  navLine(a,b,avoid=null){return !this.crossesPit(a,b)&&super.navLine(a,b,avoid);}

  isPit(x,z) {
    return pitField(x,z)<0;
  }
  crossesPit(from,to) {
    const steps=Math.max(1,Math.ceil(Math.hypot(to.x-from.x,to.z-from.z)/.1));
    for(let n=0;n<=steps;n++){
      const t=n/steps;
      if(this.isPit(from.x+(to.x-from.x)*t,from.z+(to.z-from.z)*t))return true;
    }
    return false;
  }
  materials(hospital) {
    if(hospital){this.mat={...hospital};this.lineMat={arch:echoMaterial({kind:'line'}),prop:echoMaterial({kind:'line'}),item:echoMaterial({kind:'line'})};}else super.materials();
    for(const [key,map,scale,wet]of [['geoRock','cliff',.32,.08],['geoDark','darkrock',.4,.15],['geoMud','mud',.32,.4],['geoEarth','earth',.5,0],['geoSalt','cliff',.35,.08],['geoSaltFloor','earth',.4,.05]])this.mat[key]=echoMaterial({map:`geology/${map}`,scale,wet,bump:.65,grime:.12,tint:key==='geoSalt'?0xbab2a0:0xffffff});
    for(const key of KEYS) {
      this.mat[key]=echoMaterial(caveSurface(key));
    }
    for(const key of ['clay','silt','ochretile','sediment','shale'])this.mat[`floor_${key}`]=echoMaterial({...caveSurface(key),scale:.5,boost:.6});
    for(const key of Object.keys(DETAIL_SURFACES))this.mat[key]=echoMaterial(detailSurface(key));
    this.mat.treatmentWall=echoMaterial({...detailSurface('peeled-ivory'),pat:7,map2:'details/blue-tile',scale2:1,split:1.65});
    this.mat.transitionWall=echoMaterial({...detailSurface('peeled-ivory'),pat:7,map2:'details/red-brick',scale2:1.2,split:1.2});
    this.mat.wardwall=echoMaterial({pat:7,map:'cave/limestone',scale:.45,map2:'cave/ceramic',scale2:.55,split:1.45,grime:.8});
    this.mat.flesh=echoMaterial({pat:5,tint:0xa9a18e,boost:.75,wet:.12,bump:.6});
    this.mat.minerCloth=echoMaterial({map:'cloth',scale:3,tint:0x6b7462,grime:.7,boost:.85});
    this.mat.minerHelmet=echoMaterial({map:'bplastic',scale:4,tint:0xb8a16b,grime:.5,boost:1});

  }
  roofAt(x,z) {
    let h=3.1;
    for(const r of CAVE_ZONES){
      const d=((x-r.x)/r.rx)**2+((z-r.z)/r.rz)**2;
      h=Math.max(h,3.1+(r.height-3.1)*Math.exp(-d*.55));
    }
    const ix=Math.floor(x-.5),iz=Math.floor(z-.5),u=x-.5-ix,v=z-.5-iz;
    const low=(i,j)=>this.lowCeiling?.[j*W+i]??(this.open(i,j)&&this.ceilAt(i,j)<1.7?1:0);
    const amount=THREE.MathUtils.lerp(THREE.MathUtils.lerp(low(ix,iz),low(ix+1,iz),u),THREE.MathUtils.lerp(low(ix,iz+1),low(ix+1,iz+1),u),v);
    h=THREE.MathUtils.lerp(h,groundHeight(x,z)+1.45,amount);
    if(amount>.999)return h;
    return THREE.MathUtils.lerp(h+Math.sin(x*.77+z*.61)*.32+Math.sin(x*1.51-z*.93)*.13,2.9,hospitalShellWeight(x,z));
  }
  rockPatch(B, points, nx, nz, key, roof=false) {
    const [a,b,c,d]=points, geo=new THREE.PlaneGeometry(1,1,4,5), p=geo.attributes.position;
    for(let k=0;k<p.count;k++) {
      const u=p.getX(k)+.5,v=p.getY(k)+.5;
      const q=V(...a).lerp(V(...b),u).lerp(V(...d).lerp(V(...c),u),v);
      const baseX=q.x,baseZ=q.z;
      const top=this.roofAt(baseX,baseZ);
      if(roof)q.y=top;
      else if(a[1]>=0)q.y=v*top;
      // At corners both faces sample the same outward vector. This keeps the
      // cave watertight instead of opening black seams between displaced cells.
      let ox=0,oz=0;
      for(const [dx,dz]of [[-.08,0],[.08,0],[0,-.08],[0,.08],[-.08,-.08],[.08,-.08],[-.08,.08],[.08,.08]]){
        if(!this.open(Math.floor(baseX+dx),Math.floor(baseZ+dz))){ox+=dx;oz+=dz;}
      }
      const length=Math.hypot(ox,oz);
      const n=Math.sin(baseX*2.7+q.y*1.7+baseZ*.9)*.5+Math.sin(baseZ*5.1-q.y*2.3)*.25;
      const displacement=(1-hospitalWeight(baseX,baseZ))*(.16+(n+1)*.14+Math.sin(Math.PI*Math.max(0,q.y)/Math.max(1,top))*.24)*Math.min(1,Math.abs(q.y)*2);
      if(length>.001){q.x+=ox/length*displacement;q.z+=oz/length*displacement;}
      p.setXYZ(k,q.x,q.y,q.z);
    }
    geo.computeVertexNormals();B.add(geo,{key,collide:false,walk:true});geo.dispose();
  }
  surf(x,z){return {wall:z<16?'w_hosp':'treatmentWall',floor:z<16?'terrazzo':'linoleum',ceil:'c_office'};}
  buildArchitecture() {
    // The intact ward is built by the very same architecture method as Chapter I.
    super.buildArchitecture({include:(x,z)=>hospitalWeight(x+.5,z+.5)>.97&&!(x>=7&&x<10&&z>=5&&z<9)});
    const B=new Builder();
    // Exact threshold beyond the original cab floor (ends at z=8.38).
    B.box(8.5,-.05,8.69,3,.1,.62,{key:'f_dplate',collide:false,walk:true});
    buildCaveGeology(this);
    for(let z=20;z<34;z++)for(let x=6;x<20;x++)if(this.open(x,z)&&this.zones[z*W+x]===2&&hash(x,z)>.9)this.drips.push({pos:V(x+.5,.03,z+.5),t:hash(x,z)*4,int:3});
    buildWardPartitions(B);
    // A bulkhead actually closes the tunnel around the moving exit gate.
    let left=49,right=52;
    while(this.open(left-1,47))left--;
    while(this.open(right,47))right++;
    for(const [a,b]of [[left-.6,49.25],[51.75,right+.6]])B.box((a+b)/2,3.5,47.8,b-a,7,.30,{key:'w_concrete'});
    B.box(50.5,4.85,47.8,2.5,4.3,.30,{key:'w_concrete',collide:false,walk:true});
    P.doorFrame(hospitalFrame(B.at(50.5,0,47.61)),2.5,2.7,3.05);
    this.colliders=[...B.colliders,...this.geology.pillars];
    this.scene.add(B.build(this.mat,{}));
  }
  buildProps() {
    const stats=dressCave(this);
    this.assetStats={materials:KEYS.length+Object.keys(DETAIL_SURFACES).length+4,maps:(KEYS.length+Object.keys(DETAIL_SURFACES).length+4)*3,...stats};
  }
  buildDynamic() {
    // Portal into the next shaft; opens only when the two stations are set.
    const gate=new THREE.Mesh(new THREE.BoxGeometry(2.5,2.7,.17),this.mat.copper);
    gate.position.set(50.5,1.35,47.8);this.scene.add(gate);this.exitGate=gate;
    this.gateBox={minX:49.25,maxX:51.75,minZ:47.7,maxZ:47.9};
    this.gateDoor={id:'caveExit',kind:'slide',closed:true,box:{...this.gateBox},leaves:[]};
    this.doors.push(this.gateDoor);
    const wheel=new Builder();P.valveWheel(hospitalFrame(wheel.at(0,0,0,Math.PI)),.2);
    const disc=wheel.build(this.mat,{});disc.position.set(13.5,1.18,26.35);this.scene.add(disc);this.valve=disc;
    const control=new Builder();
    control.box(0,0,.10,.55,.62,.16,{key:'paint',collide:false,walk:true});
    this.exitWheelMount=control.build(this.mat,{});this.exitWheelMount.position.set(49.05,1.4,47.55);this.scene.add(this.exitWheelMount);
    const exitRotor=new Builder();P.valveWheel(hospitalFrame(exitRotor.at(0,0,0,Math.PI)),.2);
    this.exitWheel=exitRotor.build(this.mat,{});this.exitWheel.position.copy(this.exitWheelMount.position);this.scene.add(this.exitWheel);
    this.resonatorDial=new THREE.Group();
    const dial=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.045,16).rotateX(Math.PI/2),this.mat.rubber);
    const mark=new THREE.Mesh(new THREE.BoxGeometry(.008,.032,.006),this.mat.paperw);mark.position.set(0,.012,.026);
    this.resonatorDial.add(dial,mark);this.resonatorDial.position.set(49.5,1.08,17.89);this.scene.add(this.resonatorDial);
    const torch=createFlashlightModel();torch.position.set(TORCH_RACK.x,TORCH_RACK.torchY,TORCH_RACK.z);torch.rotation.y=.55;this.scene.add(torch);
    this.flashlightItem={id:'flashlight',type:'flashlight',pos:torch.position.clone(),obj:torch,taken:false};this.items.push(this.flashlightItem);
    const m=workMaterials(),fuse=createFuse(m);fuse.position.set(32,this.placements.find(p=>p.id==='survey-desk').supportY+.792,7.12);this.scene.add(fuse);
    this.relayFuseItem={id:'relayFuse',type:'relayFuse',pos:fuse.position.clone(),obj:fuse,taken:false};this.items.push(this.relayFuseItem);
    this.installedFuse=createFuse(m);this.installedFuse.position.set(13,this.placements.find(p=>p.id==='south-feeder').supportY+1.15,47.89);this.installedFuse.rotation.y=Math.PI/2;this.installedFuse.visible=false;this.scene.add(this.installedFuse);
    this.toneDials=[];
    for(let i=0;i<3;i++){
      const rotor=new THREE.Group();rotor.position.set(31.62+i*.38,this.placements.find(p=>p.id==='south-tones-console').supportY+1.06,45.42);
      const knob=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.045,16).rotateX(Math.PI/2),this.mat.rubber);
      const mark=new THREE.Mesh(new THREE.BoxGeometry(.008,.035,.007),this.mat.paperw);mark.position.set(0,.014,.026);rotor.add(knob,mark);this.scene.add(rotor);this.toneDials.push(rotor);
      // Fixed index ticks remain visible while the pointer rotates.
      for(let value=0;value<3;value++){
        const a=value*.8,tick=new THREE.Mesh(new THREE.BoxGeometry(.009,.018,.006),this.mat.paperw);
        tick.position.copy(rotor.position).add(V(-Math.sin(a)*.087,Math.cos(a)*.087,.025));tick.rotation.z=a;this.scene.add(tick);
      }
      this.items.push({id:`tone${i}`,type:'caveTone',index:i,pos:rotor.position.clone(),obj:rotor});
    }
    this.items.push({id:'toneCode',type:'caveClue',pos:V(32.8,this.toneDials[0].position.y+.19,45.42)});
    this.stationItems=CAVE_STATIONS.map(s=>({...s,pos:s.id==='exit'?this.exitWheel.position.clone():s.id==='resonator'?this.resonatorDial.position.clone():s.id==='relay'?this.installedFuse.position.clone().setZ(47.91):V(s.x,1.18,26.35)}));
  }
  syncQuest(s){
    this.relayFuseItem.taken=s.hasFuse||s.relayPowered;this.relayFuseItem.obj.visible=!this.relayFuseItem.taken;
    this.installedFuse.visible=s.relayPowered;
    this.toneDials.forEach((rotor,i)=>rotor.rotation.z=s.tones[i]<0?-.65:s.tones[i]*.8);
  }
  bindOriginalLift(hospital){
    this.liftRoot=hospital.liftRoot;
    this.originalLift=hospital.door('lift');
    this.liftDoor={...this.originalLift,id:'caveLift',leaves:this.originalLift.leaves,closed:true,t:0,box:moveLiftCollider(this.originalLift.box)};
    this.doors.push(this.liftDoor);
    this.colliders.push(...hospital.liftColliders.map(moveLiftCollider));
    this.buildCollision();this.navReach=null;this.buildNav();
  }
  mountOriginalLift(){
    this.scene.add(this.liftRoot);
    this.liftRoot.position.copy(LIFT_OFFSET);
    this.liftRoot.traverse(obj=>{obj.visible=true;});
  }
  buildDecals() {
    const sets={},materials={};
    for(const type of ['leak','crack','mould','blood_drag','stain'])materials[type]=echoMaterial({pat:8,map:`decal:${type}`,wet:type==='blood_drag'?.8:.4,boost:1});
    for(const [type,x,z,size,angle]of [['blood_drag',11,22,1.5,.2],['stain',15,30,1.8,.8],['mould',47,20,1.1,.6],['blood_drag',48,22,1.2,-.4],['stain',49,44,1.6,.5],['crack',12,16,1.1,.4]]){
      const g=new THREE.PlaneGeometry(size,size);g.rotateX(-Math.PI/2);g.rotateY(angle);
      const p=g.attributes.position;for(let i=0;i<p.count;i++){const px=x+p.getX(i),pz=z+p.getZ(i);p.setXYZ(i,px,groundHeight(px,pz)+.012,pz);}g.computeVertexNormals();(sets[type]||=[]).push(g);
    }
    for(const [type,geometries]of Object.entries(sets)){
      const mesh=new THREE.Mesh(mergeGeometries(geometries,false),materials[type]);
      mesh.renderOrder=1;this.scene.add(mesh);geometries.forEach(g=>g.dispose());
    }
  }
  setLiftOpening(k) {
    const d=this.liftDoor;d.t=k;d.closed=k<1;
    for(const leaf of d.leaves)leaf.obj.position.x=leaf.base+leaf.s*k*.72;
    d.box=k>=.98?null:{minX:8.5-(1-k)*1.5,maxX:8.5+(1-k)*1.5,minZ:8.25,maxZ:8.55};
  }
  updateDoors() {} // The chapter sequence, not the hospital motor, drives leaves.
  floorAt(x,z) { return this.drained&&this.zones[Math.floor(z)*W+Math.floor(x)]===2?FLOOR.TILE:super.floorAt(x,z); }
}

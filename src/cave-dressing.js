import * as THREE from 'three';
import {Builder} from './builder.js';
import * as P from './props.js';
import {hospitalFrame} from './cave-style.js';
import {caveProp} from './cave-props.js';
import {hangingMiner,rod,haulTrack} from './mine-props.js';
import {detailProp,instrumentTray} from './detail-props.js';
import {groundHeight,groundSupport} from './cave-terrain.js';
import {wallPoint} from './cave-geology.js';
import {hospitalWeight} from './cave-style.js';
import {finishFrame} from './detail-materials.js';

const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const loose={collide:false,walk:true};
const offset=(F,x=0,y=0,z=0)=>({
  box:(a,b,c,...rest)=>F.box(a+x,b+y,c+z,...rest),
  cyl:(a,b,c,...rest)=>F.cyl(a+x,b+y,c+z,...rest),
  geo:(g,a,b,c,...rest)=>F.geo(g,a+x,b+y,c+z,...rest),
});
export const TORCH_RACK={x:10.65,z:10.6,width:1.1,depth:.50,height:1.2,surface:1.115,torchY:1.158};

// Wall attachments are selected from actual solid boundaries, then seated on
// the rendered wall surface. A bracket in open air is never a wall mount.
export function wallAnchor(level,x,z,y=1.4,span=.6,rendered=false){
  if(rendered&&level.geology&&hospitalWeight(x,z)<.97){
    let best=null;
    for(const a of level.geology.walls){
      if(level.roofAt(a.x,a.z)<y+.5)continue;
      const score=(a.x-x)**2+(a.z-z)**2;if(best&&score>=best.score)continue;
      const {normal}=wallPoint(level,a.x,a.z,.4);
      best={x:a.x,z:a.z,nx:normal.x,nz:normal.z,angle:Math.atan2(normal.x,normal.z),score};
    }
    if(best)return best;
  }
  let best=null;
  for(let j=Math.max(1,Math.floor(z)-5);j<=Math.min(54,Math.floor(z)+5);j++)for(let i=Math.max(1,Math.floor(x)-5);i<=Math.min(62,Math.floor(x)+5);i++){
    if(!level.open(i,j))continue;
    for(const [nx,nz]of [[1,0],[-1,0],[0,1],[0,-1]]){
      if(level.open(i-nx,j-nz)||level.isPit(i-nx+.5,j-nz+.5))continue;
      const px=i+.5-nx*.5,pz=j+.5-nz*.5;
      let valid=true;
      for(let t=-span/2;t<=span/2+.01;t+=.2){
        const a=px+nz*t,b=pz-nx*t;
        if(!level.open(Math.floor(a+nx*.12),Math.floor(b+nz*.12))||level.open(Math.floor(a-nx*.12),Math.floor(b-nz*.12))){valid=false;break;}
      }
      if(!valid||level.roofAt(i+.5,j+.5)<y+.4)continue;
      const score=(px-x)**2+(pz-z)**2;
      if(!best||score<best.score)best={x:px,z:pz,nx,nz,angle:Math.atan2(nx,nz),score};
    }
  }
  if(!best)throw new Error(`No solid wall for attachment near ${x},${z}`);
  return best;
}

export function buildWardPartitions(B){
  // Reception and treatment bay share one normal doorway, with full-height
  // walls attached to the hospital shell rather than isolated concrete slabs.
  for(const [a,b]of [[8,11.7],[13.1,19]])B.box((a+b)/2,1.45,15.6,b-a,2.9,.16,{key:'w_hosp'});
  P.doorFrame(hospitalFrame(B.at(12.4,0,15.6)),1.4,2.25,2.9);
  for(const [a,b]of [[8,11.7],[13.1,19]]){
    B.box((a+b)/2,.09,15.49,b-a,.18,.035,{...loose,key:'paint'});
    B.box((a+b)/2,1.0,15.48,b-a,.08,.05,{...loose,key:'wood'});
  }
}

export function dressCave(level){
  const B=new Builder();level.modelCounts={};level.placements=[];level.hangingMiners=[];
  const count=type=>level.modelCounts[type]=(level.modelCounts[type]||0)+1;
  const box=(x,y,z,w,h,d,key='iron',rot)=>B.box(x,y,z,w,h,d,{...loose,key,rot});
  const collider=(x,z,angle,[w,d,h])=>{
    const rx=(Math.abs(Math.cos(angle))*w+Math.abs(Math.sin(angle))*d)/2,rz=(Math.abs(Math.sin(angle))*w+Math.abs(Math.cos(angle))*d)/2;
    level.colliders.push({minX:x-rx,maxX:x+rx,minZ:z-rz,maxZ:z+rz,minY:groundHeight(x,z),maxY:groundHeight(x,z)+h});
  };
  const floor=(id,fn,x,z,angle=0,size=null)=>{
    if(!level.open(Math.floor(x),Math.floor(z))||level.isPit(x,z))throw new Error(`Unsupported floor prop ${id} at ${x},${z}`);
    const before=new Map(Object.entries(B.surfaces).map(([key,list])=>[key,list.length]));
    const {low,high}=groundSupport(x,z,angle,size||[.24,.24]);
    const base=id==='ore-cart'?groundHeight(x,z):high;
    fn(hospitalFrame(B.at(x,base,z,angle)),base);
    // Flat foundations are sunk into the uneven rock, supporting every leg.
    if(size&&id!=='ore-cart'&&high-low>.015){const F=B.at(x,0,z,angle);F.box(0,(high+low-.06)/2,0,size[0]+.04,high-low+.06,size[1]+.04,{...loose,key:'limestone'});}

    const bounds=new THREE.Box3();
    for(const [key,list]of Object.entries(B.surfaces))for(const g of list.slice(before.get(key)||0)){
      if(id==='loose-paper'||id==='ward-papers'){
        const p=g.attributes.position;for(let i=0;i<p.count;i++)p.setY(i,p.getY(i)+groundHeight(p.getX(i),p.getZ(i))-base);g.computeVertexNormals();
      }
      g.computeBoundingBox();bounds.union(g.boundingBox);
    }
    const supportY=base+(id==='ore-cart'?.13:0);
    if(!Number.isFinite(bounds.min.y)||bounds.min.y>supportY+.035)throw new Error(`Floating assembly ${id}: ${bounds.min.y-supportY}m above its support`);
    if(size)collider(x,z,angle,size);
    const placement={id,support:id==='ore-cart'?'rail':'floor',supportY,x,z,angle,size,bounds:{min:bounds.min.toArray(),max:bounds.max.toArray()}};
    level.placements.push(placement);count(id);return placement;
  };
  level.scene.updateMatrixWorld(true);
  const architecture=level.scene.children.slice(),ray=new THREE.Raycaster();
  const ceiling=(x,z)=>{
    ray.set(V(x,2,z),V(0,1,0));ray.far=16;
    const hit=ray.intersectObjects(architecture,true).find(h=>Math.abs(h.face?.normal.y||0)>.5);
    if(!hit)throw new Error(`No ceiling for suspension at ${x},${z}`);
    return hit.point.y;
  };
  const mount=(id,fn,x,z,y=1.4,span=.6)=>{
    const sampleY=y===0?1.4:y,a=wallAnchor(level,x,z,sampleY,span,true);
    ray.set(V(a.x+a.nx,sampleY,a.z+a.nz),V(-a.nx,0,-a.nz));ray.far=6;
    const hit=ray.intersectObjects(architecture,true).find(h=>Math.abs(h.face?.normal.y||0)<.5);
    if(!hit)throw new Error(`No rendered wall behind ${id} near ${x},${z} anchor ${a.x},${a.z}`);
    const px=hit.point.x+a.nx*.035,pz=hit.point.z+a.nz*.035;
    fn(hospitalFrame(B.at(px,y,pz,a.angle)),{...a,gridX:a.x,gridZ:a.z,x:px,z:pz});
    level.placements.push({id,support:'wall',x:px,y,z:pz,angle:a.angle,wall:{x:hit.point.x,z:hit.point.z,nx:a.nx,nz:a.nz}});count(id);
    return {...a,gridX:a.x,gridZ:a.z,x:px,z:pz};
  };
  const wallFurniture=(id,fn,x,z,size)=>{
    const a=wallAnchor(level,x,z,.8,size[0]);
    return floor(id,fn,a.x+a.nx*(size[1]/2+.12),a.z+a.nz*(size[1]/2+.12),a.angle,size);
  };
  const prop=(type,x,z,angle=0,size=null)=>floor(type,(_,y)=>caveProp(B,type,x,y,z,angle,type==='winch'?ceiling(x,z):level.roofAt(x,z)),x,z,angle,size);
  const bed=(id,x,z,a)=>{
    floor('hospital-bed',F=>P.bed(F,{messy:true}),x,z,a,[1.05,2.05,1.15]);
    const at=(d,h=0)=>{const px=x+Math.sin(a)*d,pz=z+Math.cos(a)*d;return V(px,groundHeight(px,pz)+h,pz);};
    level.addHidingPlace({id,low:true,pos:at(.95,.42),inside:at(-.15),front:at(1.8),yaw:a+Math.PI});
  };
  const lamp=(x,z)=>{
    const roof=ceiling(x,z);
    caveProp(B,'surgical-lamp',x,0,z,0,roof);count('surgical-lamp');
    level.placements.push({id:'surgical-lamp',support:'ceiling',x,z,roof});
  };
  const supplies=(x,z,a=0)=>{
    floor('supply-pallet',F=>{P.pallet(F);P.crate(F,.45,{y:.142});},x,z,a,[1.1,1.2,.65]);
  };

  // Lift landing: the torch rests on a complete floor-standing hospital rack.
  floor('torch-rack',F=>{
    P.shelf(finishFrame(F,{paint:'green-enamel',iron:'zinc'}),TORCH_RACK.width,TORCH_RACK.height,TORCH_RACK.depth,{fill:0});
    F.box(-.26,.45,0,.28,.18,.29,{key:'cardboard'});
    F.box(.23,.71,0,.33,.16,.32,{key:'paint'});
    for(const x of [-.3,-.22,-.14])F.cyl(x,1.18,.12,.022,.022,.12,12,{key:'glass'});
  },TORCH_RACK.x,TORCH_RACK.z,0,[TORCH_RACK.width,TORCH_RACK.depth,TORCH_RACK.height]);
  floor('waiting-bench',F=>P.bench(F,1.8),8.5,12.8,Math.PI/2,[1.8,.5,.9]);
  floor('reception-desk',F=>{P.desk(F,1.6,.7);P.typewriter(offset(F,-.3,-.01));P.deskLamp(offset(F,.45,0,-.1));},16.9,11.2,0,[1.6,.7,.85]);
  floor('reception-chair',P.chair,16.7,12.3,Math.PI,[.5,.5,1]);
  wallFurniture('record-cabinet',F=>P.filingCabinet(F,{open:false}),18,12.5,[.5,.68,1.4]);
  wallFurniture('medical-cabinet',F=>P.cabinet(finishFrame(F,{paint:'peeled-ivory'}),1.2),18,14.4,[1.2,.45,1.9]);
  mount('landing-clock',P.wallClock,13,10,2.2);
  mount('landing-phone',P.wallPhone,17.5,10,0, .5);
  mount('fire-extinguisher',P.extinguisherBox,8,11.2,0,.5);
  lamp(13,13);
  bed('receivingBed',9,17.5,Math.PI/2);
  floor('patient-locker',P.bedside,10.1,18.4,0,[.45,.42,.65]);
  floor('treatment-trolley',F=>{P.medCart(F);instrumentTray(offset(F,0,0,.01),.845);},17.1,17.3,Math.PI,[.65,.5,.9]);
  floor('evacuation-gurney',F=>P.gurney(F,{body:false}),17.3,18.8,0,[.7,1.9,.9]);
  wallFurniture('treatment-sink',F=>{P.sink(F);F.box(0,.95,-.25,.65,1.9,.06,{key:'paint'});},8,18.7,[.65,.55,1.9]);
  floor('ward-iv',P.ivStand,10.6,18.8);
  lamp(14,18);
  floor('ward-papers',F=>P.papers(F,8,.7,.45),16.4,13.6);

  // Flooded ward -> pump services. Beds remain recognisable hospital objects;
  // maintenance clutter is grouped by the working plant, not scattered at random.
  bed('caveBed1',9.5,30,.3);bed('caveBed2',15.8,23.7,-.4);
  floor('drain-bedside',P.bedside,10.5,30.5,0,[.45,.42,.65]);
  floor('drain-medcart',P.medCart,16.8,26.5,-.2,[.65,.5,.9]);
  floor('drain-screen',F=>P.screen(F,1.2),7.8,25.3,.25,[1.2,.45,1.8]);
  floor('drain-cleaning',P.bucketMop,16.8,31);
  prop('drain-pump',13.5,26.9,Math.PI,[1.7,1.2,1.0]);
  floor('water-grate',F=>{F.box(0,.018,0,1.6,.035,1.8,{key:'f_grate'});},13.5,29.1);
  supplies(17.3,29.4,-.15);
  mount('pump-services',(F,a)=>caveProp(B,'pipe-manifold',a.x,0,a.z,a.angle),8,23.3,1.4,2.7);
  lamp(12,26);lamp(16,30.5);
  for(const [x,z]of [[9.2,21],[16.6,31.5]])floor('plaster-rubble',F=>P.rubble(F,12,.6,.45),x,z);

  level.haulTracks=[
    [[18.5,29.8],[20.6,29.8],[24,29.2],[24.6,28.5]],
    [[53.5,25.3],[52.5,29],[51.5,32],[49,34.5],[46,36],[46,39.5],[46,41],[48,44],[50.5,46.5]],
  ].map(points=>haulTrack(B,points));

  // Mine approach: connected rails and a grounded ore hopper at the edge.
  prop('ore-cart',20.6,29.8,-Math.PI/2,[1.35,1.6,1.2]);
  supplies(23.3,31.7,.1);
  prop('winch',24.6,23.3,.25,[1.45,.9,1.2]);
  for(let i=0;i<9;i++){
    const a=i*Math.PI*2/9,x=31+Math.cos(a)*3,z=27+Math.sin(a)*3.7;
    level.hangingMiners.push(hangingMiner(B,{x,y:3.5+Math.sin(i*1.7)*.3,z,angle:-a+.3,roof:ceiling(x,z),bow:[.25,.45,.65][i%3]}));count('hanging-miner');
  }
  for(const x of [24.8,37.2])for(const z of [20.7,33.4]){
    const F=B.at(x,groundHeight(x,z),z);rod(F,[0,.05,0],[0,.85,0],.035,'iron');rod(F,[0,.85,0],[0,.76,z<27?1.2:-1.2],.035,'iron');
    F.box(0,.04,0,.25,.08,.25,{...loose,key:'iron'});F.box(0,.65,.041,.085,.22,.012,{...loose,key:'hazard'});collider(x,z,0,[.2,.2,.85]);
  }
  // Actual wall fixings support the perimeter power cable.
  for(const [x,z]of [[22,23],[25,18.5],[36,18.5],[40,26.5],[37.5,34]])mount('mine-junction',F=>{
    F.box(0,0,.09,.32,.4,.18,{key:'iron'});F.box(0,0,.185,.27,.34,.02,{key:'paint'});
    rod(F,[0,-.2,.08],[0,-.8,.08],.025,'rubber');
  },x,z,1.8,.5);
  wallFurniture('miner-lockers',F=>P.lockers(finishFrame(F,{paint:'green-enamel'}),3),23,27,[1.55,.55,1.9]);
  wallFurniture('equipment-rack',F=>P.shelf(finishFrame(F,{iron:'zinc',wood:'timber-sawn'}),1.8,2,.55,{fill:.65}),39,28,[1.8,.55,2]);

  // Resonance laboratory: one console with connected instruments, a proper
  // workbench and medical bay. No floating slabs, organ pipes or rows of IVs.
  prop('resonator',49.5,17.5,0,[1.25,.72,1.15]);
  bed('caveBed3',46,20.8,.25);
  floor('lab-bedside',P.bedside,46.9,21.8,0,[.45,.42,.65]);
  const labBench=wallFurniture('lab-workbench',F=>{P.desk(F,2,.75);P.monitor(F);},51.2,14.3,[2,.75,1.15]);
  wallFurniture('lab-storage',F=>P.shelf(F,1.8,2,.55,{fill:.7}),53,17,[1.8,.55,2]);
  floor('lab-chair',P.chair,labBench.x+Math.sin(labBench.angle)*1.05,labBench.z+Math.cos(labBench.angle)*1.05,labBench.angle+Math.PI,[.5,.5,1]);
  floor('oxygen-station',F=>P.oxygenTanks(F,2),52.5,20.5,0,[.55,.35,1.6]);
  mount('lab-clock',P.wallClock,49.6,13,2.2);
  wallFurniture('lab-sink',F=>{P.sink(F);F.box(0,.95,-.25,.65,1.9,.06,{key:'paint'});},46,14,[.65,.55,1.9]);
  lamp(48,18);lamp(51,20);

  // Salt/service route: ventilation, timber stores and electrical maintenance.
  mount('mine-ventilation',(F,a)=>caveProp(B,'ventilation-fan',a.x,0,a.z,a.angle),44,35,1.8,1.3);
  mount('mine-pipes',(F,a)=>caveProp(B,'pipe-manifold',a.x,0,a.z,a.angle),49,38.3,1.4,2.7);
  wallFurniture('tool-bench',F=>{P.desk(F,1.4,.65);F.box(.25,.86,0,.4,.2,.27,{key:'iron'});},42,35,[1.4,.65,1.05]);
  supplies(49.5,35.5,.2);supplies(44.1,38.6,-.15);
  prop('ore-cart',51.5,32,-.6,[1.35,1.6,1.2]);
  lamp(46,36);
  wallFurniture('exit-lockers',F=>P.lockers(F,2),47,45.5,[1.05,.55,1.9]);
  wallFurniture('electrical-cabinet',F=>P.cabinet(F,.85,1.8,.42,{glass:false}),53,45,[.85,.42,1.8]);
  supplies(47.2,43.5);lamp(50.5,45);
  for(const [x,z]of [[12,24],[25,32],[37,32],[49,21],[49.5,44]])floor('loose-paper',F=>P.papers(F,6,.5,.4),x,z);

  // Each room has a different working purpose, with tools stored at their plant.
  const detail=(type,x,z,a=0,size=null)=>floor(type,F=>detailProp(F,type),x,z,a,size);
  wallFurniture('autoclave',F=>detailProp(F,'autoclave'),18,16.4,[.7,.8,1.4]);
  mount('first-aid',F=>detailProp(F,'first-aid'),18,13.5,1.6,.55);
  floor('medical-prep-table',F=>{
    P.desk(finishFrame(F,{wood:'zinc',paint:'peeled-ivory'}),1.05,.55);
    instrumentTray(offset(F,-.21,0,0),.81);
    for(let i=0;i<3;i++)F.box(.25,.82+i*.045,0,.24,.043,.18,{key:'gauze'});
  },16,19,0,[1.05,.55,.95]);
  wallFurniture('compressor',F=>detailProp(F,'compressor'),17.5,27.8,[.9,1.15,1.1]);
  detail('oil-drum',16.4,28.6,0,[.6,.6,.9]);
  detail('tool-crate',15.6,29.8,.2,[.8,.55,.45]);
  mount('pump-tool-board',F=>detailProp(F,'tool-board'),7,26,1.5,1.1);
  floor('cable-reel',F=>detailProp(F,'cable-reel'),23,21.5,.2,[.9,.8,.9]);
  detail('oil-drum',24.7,22,0,[.6,.6,.9]);
  detail('oil-drum',25.4,22.2,.25,[.6,.6,.9]);
  detail('ore-sacks',23.2,33.1,.2,[1,.9,.7]);
  detail('tool-crate',24.4,32.5,-.1,[.8,.55,.45]);
  wallFurniture('transformer',F=>detailProp(F,'transformer'),38,23,[.9,.7,1.2]);
  mount('mine-tool-board',F=>detailProp(F,'tool-board'),38,30,1.6,1.1);
  detail('ore-sacks',39.2,27.4,-.3,[1,.9,.7]);
  wallFurniture('cable-reel',F=>detailProp(F,'cable-reel'),52,19.5,[.9,.8,.9]);
  mount('lab-first-aid',F=>detailProp(F,'first-aid'),46,18,1.65,.55);
  floor('lab-sample-table',F=>{
    P.desk(finishFrame(F,{wood:'zinc'}),1,.55);
    instrumentTray(F,.81);
    for(let i=0;i<3;i++)F.cyl(-.25+i*.08,.91,-.14,.022,.022,.18,12,{key:'glass'});
  },45,18,Math.PI/2,[1,.55,1.05]);
  detail('oil-drum',43.2,37.5,0,[.6,.6,.9]);
  detail('ore-sacks',44.4,37.1,.5,[1,.9,.7]);
  detail('tool-crate',49.5,36.8,-.2,[.8,.55,.45]);
  wallFurniture('transformer',F=>detailProp(F,'transformer'),53.5,41.8,[.9,.7,1.2]);
  mount('exit-tool-board',F=>detailProp(F,'tool-board'),48,43.5,1.5,1.1);
  // Mineral groups grow from the salt banks, leaving the rail and walkway clear.
  for(const [x,z]of [[43,34.8],[43.5,36],[48.9,38.4],[44.8,40.2],[48.7,41.3]])detail('mineral-core',x,z);

  // Material stores belong to the mine's maintenance bays.
  for(const [x,z,a]of [[25,20.8,.1],[38.7,29.5,-.2],[47.5,39.5,.3]])floor('timber-stack',F=>{
    P.pallet(F);
    for(let layer=0;layer<4;layer++)for(let k=0;k<3;k++)F.box((k-1)*.24,.20+layer*.13,0,.18,.12,1.7,{key:'timber-sawn'});
    for(const c of [-.5,.5]){
      for(const x of [-.38,.38])F.box(x,.395,c,.025,.51,.025,{key:'rust'});
      for(const y of [.14,.65])F.box(0,y,c,.78,.025,.025,{key:'rust'});
    }
  },x,z,a,[.9,1.75,.75]);
  const power=mount('lab-power-feed',F=>{
    F.box(0,0,.08,.38,.5,.16,{key:'paint'});F.box(0,0,.17,.3,.4,.02,{key:'rubber'});
  },50,14.3,1.4,.5);
  const powerCable=new THREE.CatmullRomCurve3([V(50.3,groundHeight(50.3,15.5)+.04,15.5),V(50.2,groundHeight(50.2,14.7)+.04,14.7),V(power.gridX+power.nx*.12,groundHeight(power.gridX,power.gridZ)+.05,power.gridZ+power.nz*.12),V(power.x+power.nx*.15,1.4,power.z+power.nz*.15)]);
  B.add(new THREE.TubeGeometry(powerCable,24,.022,8),{...loose,key:'rubber'});

  // Retain mineral detail on the boundary, where it grows out of real rock.
  for(let i=0;i<85;i++){
    const x=4+(Math.sin(i*127.1)*43758.5%1+1)%1*54,z=19+(Math.sin(i*311.7)*31834.3%1+1)%1*31;
    if(!level.open(Math.floor(x),Math.floor(z))||level.isPit(x,z))continue;
    const edge=[[-1,0],[1,0],[0,-1],[0,1]].some(([a,b])=>!level.open(Math.floor(x)+a,Math.floor(z)+b)&&!level.isPit(x+a,z+b));
    if(!edge)continue;
    const g=new THREE.IcosahedronGeometry(.35,1);B.add(g,{pos:[x,groundHeight(x,z)+.11,z],scale:[1,.7+i%3*.3,.7],key:i%3?'breccia':'calcite',...loose});g.dispose();
  }
  // The expanded loop has complete working bays and sheltered alternatives.
  floor('survey-desk',F=>{P.desk(F,1.8,.7);P.deskLamp(offset(F,-.6,0,-.1));P.papers(offset(F,.3,.761,0),5,.4,.25);},32,7,0,[1.8,.7,1.0]);
  wallFurniture('survey-records',F=>P.shelf(F,2,1.8,.55,{fill:.6}),35,4,[2,.55,1.8]);
  floor('reserve-cable',F=>detailProp(F,'cable-reel'),27,6,.2,[.9,.8,.9]);
  floor('survey-toolbox',F=>detailProp(F,'tool-crate'),33.6,7.2,0,[.8,.55,.45]);
  floor('south-feeder',F=>{P.console_(F,1.25);F.box(0,1.15,.405,.16,.17,.035,{key:'rubber'});},13,47.5,0,[1.3,.8,1.6]);
  floor('reservoir-compressor',F=>detailProp(F,'compressor'),8,44.5,.7,[.9,1.15,1.1]);
  floor('reservoir-transformer',F=>detailProp(F,'transformer'),17.5,47,0,[.9,.7,1.2]);
  floor('south-tones-console',F=>P.console_(F,1.25),32,45,0,[1.25,.8,1.4]);
  floor('gallery-workbench',F=>P.desk(F,2,.8),37,43.5,.3,[2,.8,1]);
  floor('gallery-sacks',F=>detailProp(F,'ore-sacks'),36,47.7,.2,[1,.9,.7]);
  for(const [x,z]of [[5.5,46],[18,48],[26,8],[40,6],[38,49],[59,38]])supplies(x,z,.2);
  for(const [x,z]of [[24,8],[38,8],[10,45],[18,44],[28,45],[38,45],[58,33]])lamp(x,z);
  bed('reservoirBed',6.5,42,Math.PI/2);bed('galleryBed',28,49,.3);
  level.sparks.push({pos:V(13.5,1.8,27.6),t:2,int:8});
  level.scene.add(B.build(level.mat,{}));
  return {models:level.placements.length+level.hangingMiners.length,modelTypes:Object.keys(level.modelCounts).length};
}

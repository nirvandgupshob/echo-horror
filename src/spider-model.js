import * as THREE from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';
const V=(x,y,z)=>new THREE.Vector3(x,y,z),UP=V(0,1,0);

// Four pairs grow from the cephalothorax, never from the abdomen. The front
// pair reaches forward, the middle pair spreads out, the rear pair trails.
export const SPIDER_LEGS=[
 {hip:[.14,.245,-.43],foot:[1.28,0,-1.55],femur:.85,tibia:1.20},
 {hip:[.195,.235,-.30],foot:[1.70,0,-.55],femur:.85,tibia:1.12},
 {hip:[.195,.225,-.18],foot:[1.58,0,.53],femur:.84,tibia:1.12},
 {hip:[.15,.215,-.065],foot:[1.12,0,1.18],femur:.80,tibia:1.08},
];

export function solveSpiderLeg(hip,foot,index,bendAngle=0,ankleTarget=null){
 const spec=SPIDER_LEGS[index%4],side=index<4?-1:1;
 // The short metatarsus/tarsus folds down onto the rock; the longer femur and
 // tibia form a raised elbow instead of an insect's single straight stick.
 const ankle=ankleTarget?ankleTarget.clone():foot.clone().lerp(hip,.065).add(V(0,.12,0));
 const line=ankle.clone().sub(hip),distance=Math.max(.001,line.length()),axis=line.divideScalar(distance);
 const reach=THREE.MathUtils.clamp(distance,Math.abs(spec.femur-spec.tibia)+.001,spec.femur+spec.tibia-.001);
 const contact=foot.clone();
 // An unreachable contact must never stretch a bone. The gait normally keeps
 // contacts within reach; over a sharp rock lip the toe releases instead.
 if(Math.abs(reach-distance)>1e-6){const correction=hip.clone().addScaledVector(axis,reach).sub(ankle);ankle.add(correction);contact.add(correction);}
 const bend=V(side*.18,1,0).addScaledVector(axis,-V(side*.18,1,0).dot(axis)).normalize();
 if(bendAngle)bend.applyAxisAngle(axis,bendAngle);
 const along=(spec.femur**2-spec.tibia**2+reach**2)/(2*reach);
 const height=Math.sqrt(Math.max(0,spec.femur**2-along**2));
 const knee=hip.clone().addScaledVector(axis,along).addScaledVector(bend,height);
 return [hip,knee,ankle,contact];
}

function tint(source,color,wet){
 const m=source.clone();
 if(source.uniforms){
  // UniformsUtils.clone would freeze the shared sound pulses/torch/shadow at
  // creation time. Only the surface's colour, wetness and pattern space differ.
  m.uniforms={...source.uniforms,uTint:{value:new THREE.Color(color)},uWet:{value:wet??source.uniforms.uWet?.value??0},uLocal:{value:1}};
 }else if(m.color)m.color.set(color);
 return m;
}

// A tapering curved claw, including its root. No flat fins or carapace stripes.
function curvedClaw(points,radius,material){
 const curve=new THREE.CatmullRomCurve3(points.map(p=>V(...p))),g=new THREE.TubeGeometry(curve,12,radius,7,false),a=g.attributes.position;
 for(let i=0;i<a.count;i++){
  const t=Math.floor(i/8)/12,center=curve.getPointAt(t),p=V(a.getX(i),a.getY(i),a.getZ(i));
  p.sub(center).multiplyScalar(Math.max(.035,1-t*.97)).add(center);a.setXYZ(i,...p);
 }
 g.computeVertexNormals();return new THREE.Mesh(g,material);
}

export function spiderModel(material,boneMaterial=material){
 const root=new THREE.Group();root.name='wall-spider';root.scale.setScalar(1.28);
 const shell=tint(material,0x989185,.12),soft=tint(material,0x92857e,.1),jointMat=tint(material,0x8c8177,.08),black=tint(material,0x141513,.7),scar=tint(boneMaterial,0xb3a78d,.22),fangMat=tint(boneMaterial,0xc4bca7,.4),wound=tint(material,0x251818,.7),membrane=tint(material,0x7b6c64,.2);
 const mouths=[],ruptureLips=[];
 const part=(name,shape,mat)=>{
  const g=new THREE.SphereGeometry(1,28,18),p=g.attributes.position;
  for(let i=0;i<p.count;i++){const at=shape(p.getX(i),p.getY(i),p.getZ(i));p.setXYZ(i,...at);}g.computeVertexNormals();
  const mesh=new THREE.Mesh(g,mat);mesh.name=name;root.add(mesh);return mesh;
 };
 const abdomen=part('soft-pear-shaped-abdomen',(x,y,z)=>{
  const width=.215*(1+.22*z),relief=1+.10*Math.sin(z*10+x*7)*Math.sin(y*6);
  return [x*width*relief+.028*(1-z*z),.27+y*.19+.025*z,.445+z*.375];
 },soft);
 const thorax=part('flattened-cephalothorax',(x,y,z)=>[x*.218*(1-Math.max(0,-z)*.22)*(1+.06*Math.sin(z*18)),.229+y*.108+Math.max(0,1-z*z)*.035,-.28+z*.28],shell);
 part('narrow-pedicel',(x,y,z)=>[x*.047,.225+y*.044,.018+z*.082],jointMat);
 const mouthCore=part('wet-split-mouth',(x,y,z)=>[x*.092,.245+y*.027,-.66+z*.145],black);
 // A second, dorsal rupture reads from the player's view of a wall-crawler.
 // The side-facing arthropod jaws alone were hidden behind its own carapace.
 const rupture=part('open-dorsal-rupture',(x,y,z)=>[x*.085,.39+y*.026,-.24+z*.26],wound);
 for(const side of [-1,1]){
  const hinge=new THREE.Group();hinge.position.set(side*.075,.375,-.24);root.add(hinge);ruptureLips.push(hinge);
  const lip=curvedClaw([[0,0,-.25],[side*.045,.035,-.14],[side*.055,.04,.04],[side*.01,0,.25]],.031,membrane);hinge.add(lip);
  for(let j=0;j<6;j++){
   const z=-.20+j*.075,h=.045+(j%3)*.014;
   hinge.add(curvedClaw([[side*.012,.01,z],[side*.004,h,z-.012],[-side*.065,h*.65,z+.012]],.014,fangMat));
  }
  const teeth=hinge.children.filter(o=>o.material===fangMat),teethMesh=new THREE.Mesh(mergeGeometries(teeth.map(o=>o.geometry),false),fangMat);hinge.add(teethMesh);
  for(const tooth of teeth){hinge.remove(tooth);tooth.geometry.dispose();}
 }
 // Broken ribs and dark veins interrupt the smooth, beetle-like sac outline.
 for(const side of [-1,1])for(let i=0;i<4;i++){
  const z=.18+i*.14;
  root.add(curvedClaw([[side*.12,.38,z-.02],[side*.18,.43,z],[side*.22,.35,z+.04]],.014,scar));
  root.add(curvedClaw([[side*.055,.449,z-.055],[side*.13,.43,z+.008],[side*.19,.385,z+.055]],.006,wound));
 }
 // Heavy split chelicerae open during the acoustic tell. Their pivots and
 // geometry stay separate from the static batched cuticle.
 for(const side of [-1,1]){
  const pivot=V(side*.068,.195,-.515),hinge=new THREE.Group();hinge.position.copy(pivot);hinge.name='hinged-chelicera';root.add(hinge);mouths.push(hinge);
  const jaw=part('chelicera',(x,y,z)=>[side*.068+x*.061,.185+y*.078,-.56+z*.095],shell);
  root.remove(jaw);jaw.geometry.translate(-pivot.x,-pivot.y,-pivot.z);hinge.add(jaw);
  const fang=curvedClaw([[side*.067,.15,-.59],[side*.12,.07,-.72],[side*.095,.035,-.855],[side*.028,.075,-.89]],.031,fangMat);
  fang.geometry.translate(-pivot.x,-pivot.y,-pivot.z);hinge.add(fang);
  const teeth=[];
  for(let i=0;i<5;i++){
   const z=-.565-i*.043,x=side*(.073+.011*Math.sin(i*1.4));
   const tooth=curvedClaw([[x,.255,z],[x-side*.016,.29,z-.005],[x-side*.05,.268,z-.014]],.012,fangMat);
   tooth.geometry.translate(-pivot.x,-pivot.y,-pivot.z);teeth.push(tooth.geometry);
  }
  const toothMesh=new THREE.Mesh(mergeGeometries(teeth,false),fangMat);hinge.add(toothMesh);teeth.forEach(g=>g.dispose());
  root.add(curvedClaw([[side*.12,.23,-.45],[side*.28,.17,-.66],[side*.29,.09,-.83],[side*.21,.075,-.87]],.027,jointMat));
  root.add(curvedClaw([[side*.047,.185,.755],[side*.06,.16,.82],[side*.075,.155,.88]],.018,jointMat));
  // Raised torn seams catch a little light on the otherwise dark, soft sac.
  for(let i=0;i<3;i++)root.add(curvedClaw([[side*.13,.37,.19+i*.14],[side*.18,.36,.23+i*.14],[side*.19,.30,.28+i*.14]],.009,scar));
 }
 // Eight separate reflective eyes in a compact forward-facing cluster.
 const eyes=new THREE.InstancedMesh(new THREE.SphereGeometry(1,10,8),black,8),matrix=new THREE.Matrix4();
 const eyePositions=[[-.032,.305,-.53,.025],[.032,.305,-.53,.025],[-.083,.294,-.51,.016],[.083,.294,-.51,.016],[-.117,.278,-.475,.014],[.117,.278,-.475,.014],[-.145,.257,-.43,.012],[.145,.257,-.43,.012]];
 for(let i=0;i<8;i++){const[x,y,z,r]=eyePositions[i];matrix.compose(V(x,y,z),new THREE.Quaternion(),V(r,r,r*.8));eyes.setMatrixAt(i,matrix);}eyes.name='eight-eyes';root.add(eyes);

 const legs=new THREE.InstancedMesh(new THREE.CylinderGeometry(.62,1,1,9),shell,24);legs.instanceMatrix.setUsage(THREE.DynamicDrawUsage);legs.frustumCulled=false;legs.name='eight-three-jointed-legs';root.add(legs);
 const joints=new THREE.InstancedMesh(new THREE.SphereGeometry(1,10,7),jointMat,16);joints.instanceMatrix.setUsage(THREE.DynamicDrawUsage);joints.frustumCulled=false;root.add(joints);
 const tips=new THREE.InstancedMesh(new THREE.ConeGeometry(1,1,6),black,8);tips.instanceMatrix.setUsage(THREE.DynamicDrawUsage);tips.frustumCulled=false;root.add(tips);
 const coxae=new THREE.InstancedMesh(new THREE.SphereGeometry(1,10,7),jointMat,8);
 for(let i=0;i<8;i++){
  const side=i<4?-1:1,h=SPIDER_LEGS[i%4].hip;matrix.compose(V(h[0]*side,h[1],h[2]),new THREE.Quaternion(),V(.055,.044,.055));coxae.setMatrixAt(i,matrix);
 }root.add(coxae);
 // Sparse short setae break the silhouette; they follow the skin as geometry
 // instead of transparent hair cards which sort badly against cave surfaces.
 const hairs=new THREE.InstancedMesh(new THREE.ConeGeometry(.0018,1,4),jointMat,104),q=new THREE.Quaternion();
 for(let i=0;i<hairs.count;i++){
  const z=1-2*(i+.5)/hairs.count,a=i*2.399963229728653,r=Math.sqrt(1-z*z),n=V(Math.cos(a)*r,Math.abs(Math.sin(a)*r),z).normalize();
  const rear=i<76,p=rear?V(n.x*.215*(1+.22*n.z),.255+n.y*.16+.02*n.z,.435+n.z*.365):V(n.x*.18,.244+n.y*.107,-.26+n.z*.25);
  const length=.035+.036*(.5+.5*Math.sin(i*7.1));q.setFromUnitVectors(UP,n);matrix.compose(p.addScaledVector(n,length*.46),q,V(1,length,1));hairs.setMatrixAt(i,matrix);
 }hairs.name='short-setae';root.add(hairs);
 for(const mat of [jointMat,scar,wound]){
  const claws=root.children.filter(o=>o.geometry?.type==='TubeGeometry'&&o.material===mat);
  const g=mergeGeometries(claws.map(o=>o.geometry),false),mesh=new THREE.Mesh(g,mat);mesh.name='curved-mouthparts-and-spinnerets';root.add(mesh);
  for(const o of claws){root.remove(o);o.geometry.dispose();}
 }
 return {root,legs,joints,tips,abdomen,thorax,mouths,mouthCore,rupture,ruptureLips};
}

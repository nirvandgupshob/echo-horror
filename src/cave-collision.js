import * as THREE from 'three';
import {caveField,pitField} from './cave-layout.js';
import {groundHeight} from './cave-terrain.js';
import {wallOffset} from './cave-geology.js';

// The same implicit boundary and displacement as the rendered cave shell.
export function pushRock(level,pos,r){
 const f=caveField(pos.x,pos.z);if(f>r+.6)return;
 const e=.025,gx=(caveField(pos.x+e,pos.z)-caveField(pos.x-e,pos.z))/(2*e),gz=(caveField(pos.x,pos.z+e)-caveField(pos.x,pos.z-e))/(2*e),length=Math.hypot(gx,gz);
 if(length<1e-5)return;
 const nx=gx/length,nz=gz/length,base=groundHeight(pos.x,pos.z),roof=level.roofAt(pos.x,pos.z);
 let push=0;
 for(const[h,width]of [[.2,.6],[.85,1],[1.5,.7]]){
  const y=Math.min(base+h,roof-.05),t=Math.max(0,Math.min(1,(y-base)/(roof-base)));
  push=Math.max(push,r*width-f/length-wallOffset(pos.x,y,pos.z,t));
 }
 if(push>0){pos.x+=nx*push;pos.z+=nz*push;}
}
export function pushPit(pos,r){
 const f=pitField(pos.x,pos.z);if(f>=r)return;
 const e=.025,gx=(pitField(pos.x+e,pos.z)-pitField(pos.x-e,pos.z))/(2*e),gz=(pitField(pos.x,pos.z+e)-pitField(pos.x,pos.z-e))/(2*e),length=Math.hypot(gx,gz);
 if(length>1e-5){const push=r-f/length;pos.x+=gx/length*push;pos.z+=gz/length*push;}
}

const ray=new THREE.Ray(),a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),d=new THREE.Vector3(),hit=new THREE.Vector3();
// Short hand-contact rays test only nearby strips of the actual wall mesh.
export function castRock(level,origin,direction,reach){
 const cells=level.geology?.wallCells;if(!cells)return null;
 ray.set(origin,direction);const end=ray.at(reach,new THREE.Vector3()),seen=new Set();let best=null;
 for(let z=Math.floor(Math.min(origin.z,end.z)/2);z<=Math.floor(Math.max(origin.z,end.z)/2);z++)for(let x=Math.floor(Math.min(origin.x,end.x)/2);x<=Math.floor(Math.max(origin.x,end.x)/2);x++){
  for(const wall of cells.get(`${x},${z}`)||[]){
   if(seen.has(wall))continue;seen.add(wall);const v=wall.vertices;
   for(let i=0;i<v.length;i+=12){
    a.fromArray(v,i);b.fromArray(v,i+3);c.fromArray(v,i+6);d.fromArray(v,i+9);
    for(const [u,w]of [[b,c],[c,d]]){
     if(!ray.intersectTriangle(a,u,w,false,hit))continue;
     const distance=origin.distanceTo(hit);if(distance>reach||(best&&distance>=best.distance))continue;
     const normal=new THREE.Vector3().subVectors(u,a).cross(new THREE.Vector3().subVectors(w,a)).normalize();
     if(normal.dot(direction)>-.1)continue;
     best={point:hit.clone(),normal,distance,rock:true};
    }
   }
  }
 }
 return best;
}
export function pushRockPoint(level,point,radius){
 const f=caveField(point.x,point.z);if(f>.6+radius)return new THREE.Vector3();
 const e=.025,gx=(caveField(point.x+e,point.z)-caveField(point.x-e,point.z))/(2*e),gz=(caveField(point.x,point.z+e)-caveField(point.x,point.z-e))/(2*e),length=Math.hypot(gx,gz);
 if(length<1e-5)return new THREE.Vector3();
 const base=groundHeight(point.x,point.z),t=THREE.MathUtils.clamp((point.y-base)/(level.roofAt(point.x,point.z)-base),0,1);
 const distance=f/length+wallOffset(point.x,point.y,point.z,t),push=Math.max(0,radius-distance);
 return new THREE.Vector3(gx/length*push,0,gz/length*push);
}

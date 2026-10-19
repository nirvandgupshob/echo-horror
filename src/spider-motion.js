import * as THREE from 'three';

// Behaviour selects a speed; elapsed time never schedules a burst or a turn.
export function spiderTravelSpeed({retreatT=0,state,introT=0,mode}){
 if(state==='warning')return 0;
 if(mode==='corner')return retreatT>0?1:.5;
 if(introT>0&&retreatT<=0)return .16;
 return retreatT>0?(mode==='wall'?2.1:2.5):(mode==='wall'?.65:.85);
}
export function advanceSpiderSpeed(speed,target,dt){
 const change=(target>speed?2:3.5)*dt;
 return speed+THREE.MathUtils.clamp(target-speed,-change,change);
}
export function limitSpiderPose(position,quaternion,previousPosition,previousQuaternion,speed,dt){
 const distance=previousPosition.distanceTo(position),step=Math.max(1.35,speed+.35)*dt;
 if(distance>step)position.lerpVectors(previousPosition,position,step/distance);
 // Keep a separate target: slerpQuaternions(previous, quaternion, t) aliases
 // its output, overwrites that target and silently cancels the entire turn.
 const target=quaternion.clone();quaternion.copy(previousQuaternion).rotateTowards(target,dt*1.8);
}

// Transport the same forward vector around the rock, then steer with a bounded
// angular speed. This is the sole controller for both the torso and its travel.
export function steerSpiderHeading(heading,oldNormal,normal,direction,dt){
 heading.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(oldNormal,normal)).projectOnPlane(normal).normalize();
 const desired=direction.clone().projectOnPlane(normal).normalize();
 if(heading.lengthSq()<.1)heading.copy(desired);
 if(desired.lengthSq()<.1)return 1;
 const dot=THREE.MathUtils.clamp(heading.dot(desired),-1,1),angle=Math.acos(dot);
 const sign=normal.dot(heading.clone().cross(desired))<0?-1:1;
 heading.applyAxisAngle(normal,Math.min(angle,dt*.95)*sign).normalize();
 return THREE.MathUtils.smoothstep(heading.dot(desired),.65,.97);
}
export function spiderTension(warning=0){const k=Math.max(0,Math.min(1,warning/1.8));return k*k*(3-2*k);}

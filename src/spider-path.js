import * as THREE from 'three';
import {caveField} from './cave-layout.js';
import {groundHeight} from './cave-terrain.js';

// Roof navigation has its own clearance, and can cross above the open shaft.
// It must not inherit the player's ground furniture/pit restrictions.
export class SpiderPath{
 constructor(level,surface){this.level=level;this.surface=surface;this.nodes=new Map();this.avoid=new Set();}
 block(point){this.avoid.add(Math.floor(point.z)*64+Math.floor(point.x));}
 point(x,z){return new THREE.Vector3(x+.5,this.level.roofAt(x+.5,z+.5)-.95,z+.5);}
 open(x,z){
  if(x<1||z<1||x>=63||z>=55)return false;const id=z*64+x;if(this.avoid.has(id))return false;if(this.nodes.has(id))return this.nodes.get(id);
  const p=this.point(x,z),clear=caveField(p.x,p.z)>.85&&p.y-groundHeight(p.x,p.z)>.8&&this.surface.capsuleClear(p,p,.55);
  this.nodes.set(id,clear);return clear;
 }
 nearest(point){
  let best=null,distance=Infinity;const x=Math.floor(point.x),z=Math.floor(point.z);
  for(let dz=-4;dz<=4;dz++)for(let dx=-4;dx<=4;dx++)if(this.open(x+dx,z+dz)){
   const p=this.point(x+dx,z+dz),d=Math.hypot(point.x-p.x,point.z-p.z);if(d<distance){distance=d;best=[x+dx,z+dz];}
  }return best;
 }
 find(from,to){
  if(this.avoid.size>12)this.avoid.clear();
  const a=this.nearest(from),b=this.nearest(to);if(!a||!b)return [];
  const start=a[1]*64+a[0],goal=b[1]*64+b[0],cost=new Map([[start,0]]),came=new Map(),closed=new Set(),heap=[];
  const heuristic=id=>Math.hypot(id%64-b[0],Math.floor(id/64)-b[1]);
  const push=(id,f)=>{heap.push([id,f]);let i=heap.length-1;while(i){const p=(i-1)>>1;if(heap[p][1]<=f)break;[heap[i],heap[p]]=[heap[p],heap[i]];i=p;}};
  const pop=()=>{const first=heap[0],last=heap.pop();if(heap.length){heap[0]=last;let i=0;for(;;){let n=i;for(const k of [i*2+1,i*2+2])if(k<heap.length&&heap[k][1]<heap[n][1])n=k;if(n===i)break;[heap[n],heap[i]]=[heap[i],heap[n]];i=n;}}return first[0];};
  push(start,heuristic(start));
  while(heap.length){
   const id=pop();if(closed.has(id))continue;if(id===goal){
    const result=[];let n=id;while(n!==undefined){const p=this.point(n%64,Math.floor(n/64));p.y=0;result.push(p);n=came.get(n);}return result.reverse();
   }
   closed.add(id);const x=id%64,z=Math.floor(id/64);
   for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){
    if(!dx&&!dz||!this.open(x+dx,z+dz)||dx&&dz&&(!this.open(x+dx,z)||!this.open(x,z+dz)))continue;
    const n=(z+dz)*64+x+dx;if(closed.has(n))continue;const next=cost.get(id)+Math.hypot(dx,dz);if(next>=(cost.get(n)??Infinity))continue;
    if(!this.surface.capsuleClear(this.point(x,z),this.point(x+dx,z+dz),.55))continue;
    cost.set(n,next);came.set(n,id);push(n,next+heuristic(n));
   }
  }return [];
 }
}

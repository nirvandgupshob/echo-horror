import {hospitalShellWeight} from './cave-style.js';
const smooth=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t);};
// Graded working landings; the surrounding rock keeps its natural relief.
const landings=[[49.5,17.5,2.4],[50.5,47.5,3],[20.6,29.8,1.8],[51.5,32,1.8]];
function terrain(x,z){
 // The ward landing must already meet the low flooded floor at its edge.
 // Starting the flood grade later made a steep half-metre trench at z=19–20,
 // stretching the hospital texture into a strip across the entrance.
 const ward=1-smooth(18,21,x),flood=ward*smooth(17,19,z)*(1-smooth(33,35,z));
 let relief=.68*Math.sin(x*.19+z*.12)+.42*Math.sin(z*.29-x*.095)+.19*Math.sin(x*.85)*Math.sin(z*.73);
 // Rounded strata rise as broad shelves, with small broken rock underfoot.
 relief+=.28*Math.tanh(Math.sin(x*.39+z*.18)*3)+.06*Math.sin(x*2.3+z*1.7);
 let grade=Math.max(hospitalShellWeight(x,z),flood);
 for(const [px,pz,r]of landings)grade=Math.max(grade,1-smooth(r,r+1.5,Math.hypot(x-px,z-pz)));
 return relief*(1-grade);
}
// The physics samples the same half-metre triangles as the visible floor.
export function groundHeight(x,z){
 const x0=Math.floor(x*2)/2,z0=Math.floor(z*2)/2,u=(x-x0)*2,v=(z-z0)*2;
 const a=terrain(x0,z0),c=terrain(x0+.5,z0+.5);
 return u>=v?a+(terrain(x0+.5,z0)-a)*u+(c-terrain(x0+.5,z0))*v:a+(c-terrain(x0,z0+.5))*u+(terrain(x0,z0+.5)-a)*v;
}
export function groundSupport(x,z,angle=0,size=[.24,.24]){
 const c=Math.cos(angle),s=Math.sin(angle),w=size[0],d=size[1];let low=Infinity,high=-Infinity;
 for(let i=-2;i<=2;i++)for(let j=-2;j<=2;j++){
  const dx=i*w/4,dz=j*d/4,h=groundHeight(x+c*dx+s*dz,z-s*dx+c*dz);low=Math.min(low,h);high=Math.max(high,h);
 }
 return {low,high};
}

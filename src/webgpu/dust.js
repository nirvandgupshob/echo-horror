import * as G from 'three/webgpu';
import {wgslFn,code,buffer,attribute,uv,varying,cameraViewMatrix,cameraProjectionMatrix,vec4} from 'three/tsl';

export function attachDust(points,pulses){
 const count=points.geometry.attributes.seed.count,plane=new G.PlaneGeometry(1,1),geo=new G.InstancedBufferGeometry();geo.index=plane.index;geo.attributes={...plane.attributes};
 geo.setAttribute('dustPosition',new G.InstancedBufferAttribute(points.geometry.attributes.position.array,3));geo.setAttribute('seed',new G.InstancedBufferAttribute(points.geometry.attributes.seed.array,1));geo.instanceCount=count;
 const data=new Float32Array(8),U=buffer(data,'vec4',2),u=points.material.uniforms;
 const pos=wgslFn(`fn acousticDustPosition(p0:vec3f,seed:f32,U:ptr<uniform,array<vec4f,2>>)->vec3f{
   let time=(*U)[0].w;let box=vec3f(9,3.2,9);var p=p0*box;
   p+=vec3f(sin(time*0.11+seed*40.0)*0.4,-time*0.025*(0.5+seed),cos(time*0.09+seed*31.0)*0.4);
   let base=vec3f((*U)[0].x,0,(*U)[0].z)-vec3f(9,0,9)*0.5;
   return base+(p-base)-floor((p-base)/box)*box;
 }`);
 const world=pos({p0:attribute('dustPosition','vec3'),seed:attribute('seed','float'),U});
 const vertex=wgslFn(`fn dustVertex(p:vec3f,corner:vec3f,seed:f32,view:mat4x4f,proj:mat4x4f,U:ptr<uniform,array<vec4f,2>>)->vec4f{
   let mv=view*vec4f(p,1);var clip=proj*mv;let size=clamp(2.4/-mv.z*(0.5+seed),0.5,3.0)*2.2;
   clip.x+=corner.x*size*2.0/(*U)[1].z*clip.w;clip.y+=corner.y*size*2.0/(*U)[1].w*clip.w;return clip;
 }`);
 const color=wgslFn(`fn dustColor(p:vec3f,seed:f32,U:ptr<uniform,array<vec4f,2>>,P:ptr<uniform,array<vec4f,120>>)->vec3f{
   let time=(*U)[0].w;let count=i32((*U)[1].x);let listen=(*U)[1].y;var acc=vec3f(0);
   for(var i=0;i<count;i++){
    let pulse=(*P)[i*3];var q=(*P)[i*3+1];let c=(*P)[i*3+2].rgb;
    q.z*=select(1.0,listen,c.r>0.8 && c.g<0.3);if(q.z<=0.001){continue;}
    let age=time-pulse.w;let d=distance(p,pulse.xyz);if(age<0.0 || d>q.x){continue;}
    let f=1.0-smoothstep(0.0,q.x,d);let fade=max(0.0,age-0.45)*q.w;
    acc+=c*smoothstep(0.0,0.45,age)*exp(-fade*fade)*0.35*f*q.z;
   }return acc*(0.08+seed*0.16);
 }`);
 const material=new G.MeshBasicNodeMaterial({transparent:true,depthWrite:false,blending:G.AdditiveBlending});
 material.vertexNode=vertex({p:world,corner:attribute('position','vec3'),seed:attribute('seed','float'),view:cameraViewMatrix,proj:cameraProjectionMatrix,U});
 const col=varying(color({p:world,seed:attribute('seed','float'),U,P:pulses}));
 material.colorNode=col.mul(uv().sub(.5).length().smoothstep(0,.5).oneMinus());
 const mesh=new G.Mesh(geo,material);mesh.frustumCulled=false;points.add(mesh);points.material.visible=false;
 return {update(w,h){const p=u.uCam.value;data.set([p.x,p.y,p.z,u.uTime.value,u.uN.value,u.uListen.value,w,h]);},mesh};
}

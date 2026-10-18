import * as G from 'three/webgpu';
import {wgslFn,code,buffer,texture,normalWorld,normalLocal,positionWorld,positionGeometry,cameraPosition,uv,vec2,vec3,varying,attribute} from 'three/tsl';
import {lampLight} from '../echo.js';
import {acousticShader} from './echo-shader.js';

export function createAcousticMaterials() {
  const cache=new WeakMap(), originals=new WeakMap(), functions=new Map(), entries=new Set();
  const attributes=new Map();
  const pulseData=new Float32Array(120*4), pulses=buffer(pulseData,'vec4',120);
  const lampData=new Float32Array(24),Lamp=buffer(lampData,'vec4',6),Sh=texture(lampLight.shadow.value);
  let shared=null;
  const dummy=new G.DataTexture(new Uint8Array([128,128,128,255]),1,1);dummy.needsUpdate=true;
  function convert(source) {
    if(!source.isShaderMaterial||!source.uniforms.uPat)return source;
    if(cache.has(source))return cache.get(source);
    const u=source.uniforms;
    shared=u;
    const flags={pat:u.uPat.value,human:u.uHuman.value>0,grime:u.uGrime.value>0,relief:source.userData.relief>0};
    const key=JSON.stringify(flags);
    if(!functions.has(key)){
      const source=acousticShader(flags),cut=source.indexOf('fn acousticShade');
      functions.set(key,wgslFn(source.slice(cut),[code(source.slice(0,cut),[],'wgsl')]));
    }
    const data=new Float32Array(32),U=buffer(data,'vec4',8);
    const maps=['uTex','uNrm','uHgt','uTex2','uNrm2','uHgt2'].map(name=>texture(u[name].value||dummy));
    const shade=functions.get(key)({w:positionWorld,normal:normalWorld,uv:flags.pat===8?uv():vec2(0),local:positionGeometry,localNormal:varying(normalLocal),color:flags.human?attribute('color','vec3'):vec3(1),camera:cameraPosition,U,P:pulses,Lamp,Sh,T:maps[0],Nm:maps[1],H:maps[2],T2:maps[3],Nm2:maps[4],H2:maps[5],S:maps[0]});
    const m=new G.MeshBasicNodeMaterial();
    for(const name of ['name','side','transparent','depthTest','depthWrite','blending','blendSrc','blendDst','blendEquation','polygonOffset','polygonOffsetFactor','polygonOffsetUnits','visible'])m[name]=source[name];
    m.colorNode=shade.rgb;m.opacityNode=shade.a;m.uniforms=u;m.userData=source.userData;
    cache.set(source,m);cache.set(m,m);originals.set(m,source);entries.add({source,m,data});return m;
  }
  function prepare(scene){scene.traverse(o=>{
    // The WebGPU backend promotes uint16 vertex attributes to uint32. WebGL's
    // skin shader expects float-converted indices, so retain the source layout.
    if(o.geometry)for(const a of [o.geometry.index,...Object.values(o.geometry.attributes)])if(a&&!attributes.has(a))attributes.set(a,{array:a.array,itemSize:a.itemSize,gpuType:a.gpuType});
    if(o.material)o.material=Array.isArray(o.material)?o.material.map(convert):convert(o.material);
  });}
  function update(){
    lampData.set(lampLight.origin.value.toArray(),0);lampData.set(lampLight.direction.value.toArray(),4);lampData.set(lampLight.matrix.value.elements,8);Sh.value=lampLight.shadow.value;
    if(shared){for(let i=0;i<40;i++){
      const p=shared.uP.value[i],q=shared.uQ.value[i],c=shared.uC.value[i],j=i*12;
      pulseData.set([p.x,p.y,p.z,p.w,q.x,q.y,q.z,q.w,c.r,c.g,c.b,0],j);
    }}
    for(const {source,m,data} of entries){const u=source.uniforms,t=u.uTint.value;
      data.set([t.r,t.g,t.b,u.uBoost.value,u.uLit.value,u.uLocal.value,u.uScale.value,u.uBump.value,u.uWet.value,u.uScale2.value,u.uSplit.value,u.uGrime.value,u.uPom.value,0,0,0,u.uTime.value,u.uN.value,u.uListen.value,0]);
      m.visible=source.visible;
    }
  }
  function restore(scene){scene.traverse(o=>{if(o.material)o.material=Array.isArray(o.material)?o.material.map(m=>originals.get(m)||m):originals.get(o.material)||o.material;});}
  function restoreGeometry(){for(const [a,original] of attributes){if(a.array.constructor!==original.array.constructor||a.itemSize!==original.itemSize){a.array=original.array;a.itemSize=original.itemSize;a.count=a.array.length/a.itemSize;a.gpuType=original.gpuType;a.needsUpdate=true;}}}
  return {prepare,restore,restoreGeometry,update,pulses,entries};
}

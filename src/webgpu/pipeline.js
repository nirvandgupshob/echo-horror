import * as G from 'three/webgpu';
import {texture,uniform,buffer,uv,vec3,vec4,mrt,output,normalView,positionView,wgslFn,code,Fn,mix,If,select,step} from 'three/tsl';
import {ao} from 'three/examples/jsm/tsl/display/GTAONode.js';
import {denoise} from 'three/examples/jsm/tsl/display/DenoiseNode.js';
import {bloom as bloomNode} from 'three/examples/jsm/tsl/display/BloomNode.js';
import {smaa as smaaNode} from 'three/examples/jsm/tsl/display/SMAANode.js';
import {createAcousticMaterials} from './materials.js';
import {attachDust} from './dust.js';
import {crtShader} from './crt-shader.js';
import {createFlashlightShadow} from '../flashlight-shadow.js';
import {createWebGPUTimer} from '../gpu-timer.js';
import {FrameQueue} from '../frame-queue.js';

export async function createWebGPUBackend(){
 const requested=new URLSearchParams(location.search).get('renderer')||localStorage.getItem('echo.renderer')||'auto';
 if(requested==='webgl'||!navigator.gpu||!isSecureContext)return null;
 if(sessionStorage.getItem('echo.webgpu-failed')==='1')return null;
 try{
  const adapter=await navigator.gpu.requestAdapter({powerPreference:'high-performance'});if(!adapter)return null;
  const renderer=new G.WebGPURenderer({antialias:false,alpha:false,powerPreference:'high-performance',trackTimestamp:true});
  await renderer.init();if(!renderer.backend.isWebGPUBackend){renderer.dispose();return null;}
  renderer.setClearColor(0);renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);
  return {renderer,adapter:adapter.info||{},requested};
 }catch(error){console.warn('WebGPU unavailable; using WebGL.',error);return null;}
}

export function createWebGPUPipeline(backend,{scene,camera,menuCamera,vm,dust,fx,crtInterface,afterimage,bloom,gtao,smaa,setRelief,getRelief,menuPerformance,frameBudget,sampleGpu}){
 const renderer=backend.renderer,materials=createAcousticMaterials();materials.prepare(scene);materials.prepare(vm.scene);
 const shadowMaterial=new G.MeshBasicNodeMaterial();shadowMaterial.fragmentNode=vec4(vec3(positionView.z.negate().div(18)),1);shadowMaterial.side=G.DoubleSide;
 const lampShadow=createFlashlightShadow(renderer,scene,G,shadowMaterial);
 const dustRenderer=attachDust(dust,materials.pulses);
 const target=(name,depth=false,count=1)=>{const t=new G.RenderTarget(1,1,{type:G.HalfFloatType,depthBuffer:depth,count});t.texture.name=name;return t;};
 const world=target('output',true,2);world.textures[1].name='normal';world.depthTexture=new G.DepthTexture();
 const combined=target('combined',true),histories=[target('history0'),target('history1')],background=target('background',true);
 histories.forEach(t=>t.texture.magFilter=G.NearestFilter);
 const targets=[world,combined,...histories];let history=0,backgroundAt=-Infinity,lastMode='',lastWidth=0,lastHeight=0,displayWidth=0,displayHeight=0;
 const timer=createWebGPUTimer(renderer,sampleGpu);
 const frameQueue=new FrameQueue();
 const sceneMRT=mrt({output,normal:vec4(normalView.dot(positionView).greaterThan(0).select(normalView.negate(),normalView),1)});
 const aoNode=ao(texture(world.depthTexture),texture(world.textures[1]),camera);
 aoNode.radius.value=.55;aoNode.distanceExponent.value=1.4;aoNode.thickness.value=1.2;aoNode.scale.value=1;aoNode.samples.value=12;
 aoNode.resolutionScale=.5;
 const aoDenoised=denoise(aoNode,texture(world.depthTexture),texture(world.textures[1]),camera);
 aoDenoised.lumaPhi.value=10;aoDenoised.depthPhi.value=2;aoDenoised.normalPhi.value=3;aoDenoised.radius.value=6;
 const useAO=uniform(1),damp=uniform(.42),red=uniform(0),oldTexture=texture(histories[0].texture);
 const litWorld=texture(world.texture).rgb.mul(mix(1,aoDenoised.r,useAO.mul(.85)));
 const trails=input=>Fn(()=>{
  const old=oldTexture.sample(uv()).rgb.toVar();const fresh=input.toVar();
  old.mulAssign(damp.mul(step(.035,old.dot(vec3(.3,.55,.15)))));
  const lo=old.r.max(old.dot(vec3(.3,.55,.15))),ln=fresh.dot(vec3(.3,.55,.15));
  old.g.mulAssign(red.oneMinus());old.b.mulAssign(red.oneMinus());
  return vec4(select(lo.greaterThan(ln),old,fresh),1);
 });
 const historyMaterial=new G.NodeMaterial();historyMaterial.fragmentNode=trails(litWorld)();historyMaterial.depthTest=false;historyMaterial.depthWrite=false;
 const historyPlain=new G.NodeMaterial();historyPlain.fragmentNode=trails(texture(world.texture).rgb)();historyPlain.depthTest=false;historyPlain.depthWrite=false;
 const copyMaterial=new G.NodeMaterial();const copyTexture=texture(histories[0].texture);copyMaterial.fragmentNode=copyTexture;copyMaterial.depthTest=false;copyMaterial.depthWrite=false;
 const quad=new G.QuadMesh(historyMaterial);
 const bloomEffect=bloomNode(texture(combined.texture),.26,.6,.3);
 bloomEffect.setResolutionScale(.25);
 const bloomGain=uniform(1),bloomed=texture(combined.texture).add(bloomEffect.mul(bloomGain));
 const postTarget=target('bloomed');targets.push(postTarget);
 const bloomMaterial=new G.NodeMaterial();bloomMaterial.fragmentNode=bloomed;bloomMaterial.depthTest=false;bloomMaterial.depthWrite=false;
 const bloomPlain=new G.NodeMaterial();bloomPlain.fragmentNode=texture(combined.texture);bloomPlain.depthTest=false;bloomPlain.depthWrite=false;
 const antialias=smaaNode(texture(postTarget.texture));
 const setAA=antialias.setSize.bind(antialias);antialias.setSize=()=>setAA(lastWidth,lastHeight);
 const postAA=target('antialiased');targets.push(postAA);
 const aaMaterial=new G.NodeMaterial();aaMaterial.fragmentNode=antialias;aaMaterial.depthTest=false;aaMaterial.depthWrite=false;
 const tubeData=new Float32Array(20),tubeBuffer=buffer(tubeData,'vec4',5),cut=crtShader.indexOf('fn tube(');
 const tube=wgslFn(crtShader.slice(cut),[code(crtShader.slice(0,cut),[],'wgsl')]);
 crtInterface.texture.flipY=false;crtInterface.texture.needsUpdate=true;
 const source=texture(postAA.texture),ui=texture(crtInterface.texture);
 const final=new G.RenderPipeline(renderer,tube({T:source,I:ui,S:source,st:uv().flipY(),U:tubeBuffer}));
 function drawQuad(material,target){renderer.setRenderTarget(target);quad.material=material;quad.render(renderer);}
 function clearHistory(){const old=renderer.getRenderTarget();for(const h of histories){renderer.setRenderTarget(h);renderer.clear();}renderer.setRenderTarget(old);}
 function resize(){const size=renderer.getDrawingBufferSize(new G.Vector2()),scaled=frameBudget.size(size.x,size.y),w=scaled.width,h=scaled.height;if(w===lastWidth&&h===lastHeight&&displayWidth===size.x&&displayHeight===size.y)return;displayWidth=size.x;displayHeight=size.y;lastWidth=w;lastHeight=h;targets.forEach(t=>t.setSize(w,h));aoNode.resolutionScale=.5*w/displayWidth;bloomEffect.setResolutionScale(.25*w/displayWidth);background.setSize(Math.max(1,innerWidth),Math.max(1,innerHeight));clearHistory();backgroundAt=-Infinity;}
 function sync(){materials.prepare(scene);materials.prepare(vm.scene);lampShadow.render();materials.update();dustRenderer.update(displayWidth,displayHeight);}
 function render(menu,cached){
  if(!frameQueue.ready())return;
  resize();const mode=menu?'menu':cached?'paused':'play';
  if(cached){
   if(mode!==lastMode||!Number.isFinite(backgroundAt)||(menu&&performance.now()-backgroundAt>1000/15-1)){
    sync();
    const relief=getRelief();setRelief(0);materials.update();renderer.setMRT(null);renderer.setRenderTarget(background);renderer.autoClear=true;renderer.render(scene,menu?menuCamera:camera);
    if(!menu&&vm.root.visible){renderer.autoClear=false;renderer.clearDepth();renderer.render(vm.scene,camera);}
    renderer.autoClear=true;setRelief(relief);backgroundAt=performance.now();menuPerformance.worldFrames++;
   }
   source.value=background.texture;menuPerformance.interfaceFrames++;
  }else{
   sync();
   timer.begin();
   if(lastMode!=='play')clearHistory();
   renderer.autoClear=true;renderer.setMRT(sceneMRT);renderer.setRenderTarget(world);renderer.render(scene,camera);renderer.setMRT(null);
   useAO.value=gtao.enabled?1:0;damp.value=afterimage.uniforms.damp.value;red.value=afterimage.uniforms.uRed.value;
   oldTexture.value=histories[history].texture;history=1-history;drawQuad(gtao.enabled?historyMaterial:historyPlain,histories[history]);
   copyTexture.value=histories[history].texture;drawQuad(copyMaterial,combined);
   renderer.setRenderTarget(combined);renderer.autoClear=false;renderer.clearDepth();renderer.render(vm.scene,camera);renderer.autoClear=true;
   bloomGain.value=bloom.enabled?1:0;drawQuad(bloom.enabled?bloomMaterial:bloomPlain,postTarget);
   if(smaa.enabled){drawQuad(aaMaterial,postAA);source.value=postAA.texture;}else source.value=postTarget.texture;
  }
  const u=fx.uniforms,b=u.uBlur.value,g=u.uGlassOffset.value;
  tubeData.set([u.uTime.value,menu?0:u.uFear.value,menu?0:u.uFlash.value,menu?0:u.uGlitch.value,menu?0:u.uWhite.value,u.uExposure.value,menu?0:u.uSmear.value,crtInterface.isMenu?1:0,innerWidth,innerHeight,cached?0:b.x,cached?0:b.y,g.x,g.y,crtInterface.visible?1:0,0,displayWidth,displayHeight,0,0]);
  renderer.setRenderTarget(null);if(!cached)timer.markEnd();final.render();if(!cached)timer.end();lastMode=mode;
  frameQueue.submitted(renderer.backend.device.queue.onSubmittedWorkDone());
 }
 function restore(){lampShadow.dispose();materials.restore(scene);materials.restore(vm.scene);materials.restoreGeometry();dust.remove(dustRenderer.mesh);dust.material.visible=true;crtInterface.texture.flipY=true;crtInterface.texture.needsUpdate=true;renderer.dispose();}
 return {render,ready:()=>frameQueue.ready(),frameQueue,renderer,resize,restore,materials,world,combined,final,backend:'webgpu',adapter:backend.adapter,aoNode,aoDenoised,clearHistory};
}

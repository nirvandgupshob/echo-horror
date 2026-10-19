import * as THREE from 'three';
import { lampLight } from './echo.js';

// A small forward depth pass, shared by both renderers. It runs only while the
// torch shines, at most 30 Hz, and excludes transparent water/dust and the hands.
export function createFlashlightShadow(renderer,scene,G=THREE,override=null){
  const size=matchMedia('(pointer:coarse)').matches?256:512;
  const Target=renderer.isWebGPURenderer?G.RenderTarget:G.WebGLRenderTarget;
  const target=new Target(size,size,{type:G.HalfFloatType,minFilter:G.NearestFilter,magFilter:G.NearestFilter});
  const camera=new G.PerspectiveCamera(46,1,.06,18);
  const material=override||new THREE.ShaderMaterial({
    side:THREE.DoubleSide,
    vertexShader:`#include <common>\n#include <skinning_pars_vertex>\nvarying float vDepth;void main(){vec3 transformed=position;\n#include <skinbase_vertex>\n#include <skinning_vertex>\n#ifdef USE_INSTANCING\ntransformed=(instanceMatrix*vec4(transformed,1.0)).xyz;\n#endif\nvec4 p=modelViewMatrix*vec4(transformed,1.0);vDepth=-p.z/18.0;gl_Position=projectionMatrix*p;}`,
    fragmentShader:'varying float vDepth;void main(){gl_FragColor=vec4(vec3(vDepth),1.0);}',
  });
  let last=-Infinity;
  function render(){
    if(lampLight.origin.value.w<=.001)return;
    const now=performance.now();if(now-last<1000/30)return;last=now;
    camera.position.copy(lampLight.origin.value);camera.lookAt(camera.position.clone().add(lampLight.direction.value));camera.updateMatrixWorld(true);
    const oldTarget=renderer.getRenderTarget(),oldOverride=scene.overrideMaterial,oldAuto=renderer.autoClear;
    const oldColor=renderer.getClearColor(new G.Color()),oldAlpha=renderer.getClearAlpha();
    const hidden=[];
    scene.traverseVisible(o=>{if(o.isPoints||o.isLine||o.userData.noLampShadow||o.material&&(Array.isArray(o.material)?o.material.every(m=>m.transparent):o.material.transparent)){hidden.push(o);o.visible=false;}});
    try{scene.overrideMaterial=material;renderer.autoClear=true;renderer.setClearColor(0xffffff,1);renderer.setMRT?.(null);renderer.setRenderTarget(target);renderer.render(scene,camera);
      lampLight.matrix.value.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);lampLight.shadow.value=target.texture;
    }finally{scene.overrideMaterial=oldOverride;hidden.forEach(o=>o.visible=true);renderer.autoClear=oldAuto;renderer.setClearColor(oldColor,oldAlpha);renderer.setRenderTarget(oldTarget);}
  }
  return {render,target,dispose(){target.dispose();material.dispose();}};
}

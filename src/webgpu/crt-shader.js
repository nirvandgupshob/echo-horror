// CRT and display-space HUD blending share one final pass at display resolution.
export const crtShader=`
fn tubeRand(c:vec2f)->f32{return fract(sin(dot(c,vec2f(12.9898,78.233)))*43758.5453);}
fn tubeSample(T:texture_2d<f32>,S:sampler,uv:vec2f)->vec3f{
  return textureSampleLevel(T,S,vec2f(uv.x,1.0-uv.y),0.0).rgb;
}
fn tube(T:texture_2d<f32>,I:texture_2d<f32>,S:sampler,st:vec2f,U:ptr<uniform,array<vec4f,5>>)->vec4f{
 let time=(*U)[0].x;let fear=(*U)[0].y;let flash=(*U)[0].z;let glitch=(*U)[0].w;
 let white=(*U)[1].x;let exposure=(*U)[1].y;let smear=(*U)[1].z;let menuMode=(*U)[1].w;
 let res=(*U)[2].xy;let blur=(*U)[2].zw;let glass=(*U)[3].xy;let show=(*U)[3].z;let pixels=(*U)[4].xy;
 let c=st-0.5;let kb=0.3+fear*0.12;var uv=0.5+c*(1.0+kb*dot(c,c))/(1.0+kb*0.25);
 uv.x+=sin(uv.y*40.0+time*30.0)*0.0015*fear*fear;
 let band=floor(uv.y*34.0)+floor(time*24.0)*7.0;
 uv.x+=(tubeRand(vec2f(band,1))-0.5)*0.12*glitch*step(0.62,tubeRand(vec2f(band,2)));
 uv.y+=(tubeRand(vec2f(floor(time*24.0),3))-0.5)*0.03*glitch;
 var ca=c*(0.0015+dot(c,c)*(0.021+smear*smear*0.03)+fear*0.006+glitch*0.03);ca*=mix(1.0,0.08,menuMode);
 var col=vec3f(0);
 if(dot(blur,blur)<0.0000001){col=vec3f(tubeSample(T,S,uv+ca).r,tubeSample(T,S,uv).g,tubeSample(T,S,uv-ca).b);}
 else{for(var i=0;i<7;i++){let o=blur*(f32(i)/6.0-0.5);col+=vec3f(tubeSample(T,S,uv+o+ca).r,tubeSample(T,S,uv+o).g,tubeSample(T,S,uv+o-ca).b);}col/=7.0;}
 col*=exposure;let px=vec2f(1.0/res.x,0);
 var bleed=(tubeSample(T,S,uv+px*1.5)+tubeSample(T,S,uv-px*1.5))*0.5;
 bleed+=(tubeSample(T,S,uv+px*4.0)+tubeSample(T,S,uv-px*4.0))*0.25;
 col+=max(bleed-col,vec3f(0))*0.45;
 let hl=max(max(bleed.r,bleed.g),bleed.b);col+=vec3f(0.07,0.025,0.01)*smoothstep(0.25,0.9,hl);
 let vig=mix(1.0,1.0-smoothstep(0.12,0.92,length(c-glass)*(1.0+fear*0.6)),0.85);col*=vig;
 col=col*(1.0+col*0.15)/(1.0+col*0.6);col*=1.02;col=pow(max(col,vec3f(0)),vec3f(0.84));
 let frag=st*pixels;let sl=0.5+0.5*sin(frag.y*3.14159*0.5);
 var depth=mix(0.24,0.15,smoothstep(0.1,0.7,dot(col,vec3f(0.33))));depth*=mix(1.0,0.55,menuMode);
 col*=((1.0-depth)+depth*2.0*sl*0.92)*(1.0+depth*0.25);
 let m3=frag.x-floor(frag.x/3.0)*3.0;var mask=vec3f(0.84,0.84,1);
 if(m3<1.0){mask=vec3f(1,0.84,0.84);}else if(m3<2.0){mask=vec3f(0.84,1,0.84);}
 col*=mix(vec3f(1),mask,0.8)*1.08;
 let bar=1.0-smoothstep(0.0,0.14,abs(fract(st.y*0.6-time*0.07)-0.5));col*=1.0+bar*0.08;
 col*=1.0-0.025*step(0.5,fract(frag.y*0.25+floor(time*30.0)*0.5));
 col+=(tubeRand(st*res+fract(time*7.13))-0.5)*(0.009+fear*0.04)*mix(1.0,0.22,menuMode);
 let cc=abs(uv-0.5-glass*0.45)*2.0;var corner=1.0-smoothstep(0.93,1.0,max(cc.x,cc.y)+pow(min(cc.x,cc.y),6.0)*0.06);
 let rim=min(min(st.x,1.0-st.x),min(st.y,1.0-st.y));corner*=smoothstep(0.0,0.012,rim);col*=corner;
 let gray=dot(col,vec3f(0.3,0.55,0.15));let redness=smoothstep(0.015,0.09,col.r-max(col.g,col.b));col=mix(vec3f(gray),col,mix(0.42,1.15,redness));
 col*=mix(vec3f(0.86,0.97,1.08),vec3f(1.03,1,0.95),smoothstep(0.05,0.6,gray));
 col=col*1.02+vec3f(0.004)*smoothstep(0.0,0.03,dot(col,vec3f(0.33)));
 // The UI shares the curved glass and subtle phosphors, not world smear/bleed.
 if(show>0.5){
  let ui=textureSampleLevel(I,S,vec2f(uv.x,1.0-uv.y),0.0);
  let ink=ui.rgb*(0.96+sl*0.04)*mix(vec3f(1),mask,0.12);
  col=pow(mix(pow(max(col,vec3f(0)),vec3f(1.0/2.2)),pow(max(ink*corner,vec3f(0)),vec3f(1.0/2.2)),ui.a),vec3f(2.2));
 }
 let lum=max(max(col.r,col.g),col.b);col=mix(col,vec3f(lum*1.4+0.25,0,0),flash*0.8);col=mix(col,vec3f(1,0.92,0.9)-col*0.6,white);
 return vec4f(col,1);
}`;

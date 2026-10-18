// The acoustic material in WGSL. Equations, maps and relief depths match echo.js;
// material features are compiled out when absent, rather than branched per pixel.
export function acousticShader({pat,human,grime,relief}) {
return `
fn acousticHash(p0: vec3f) -> f32 {
  var p = fract(p0 * 0.3183099 + 0.1) * 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
fn acousticNoise(p: vec3f) -> f32 {
  let i = floor(p); var f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(mix(acousticHash(i), acousticHash(i+vec3f(1,0,0)), f.x), mix(acousticHash(i+vec3f(0,1,0)), acousticHash(i+vec3f(1,1,0)), f.x), f.y),
    mix(mix(acousticHash(i+vec3f(0,0,1)), acousticHash(i+vec3f(1,0,1)), f.x), mix(acousticHash(i+vec3f(0,1,1)), acousticHash(i+vec3f(1,1,1)), f.x), f.y), f.z);
}
fn acousticFbm(p: vec3f) -> f32 { return acousticNoise(p)*0.55+acousticNoise(p*2.13)*0.28+acousticNoise(p*4.7)*0.17; }
fn acousticPom(H: texture_2d<f32>, S: sampler, uv:vec2f, gx:vec2f, gy:vec2f, dir:vec2f, nz:f32, depth:f32) -> vec3f {
  let delta = -dir/max(nz,0.22)*depth;
  let layers = floor(mix(30.0,10.0,clamp(nz,0.0,1.0))); let stp=1.0/layers;
  var cur=0.0; var prevD=0.0; var prevCur=0.0; var cuv=uv; var puv=uv;
  var d=1.0-textureSampleGrad(H,S,uv,gx,gy).r;
  for(var i=0;i<30;i++) {
    if(cur>=d || f32(i)>=layers){break;}
    puv=cuv; prevD=d; prevCur=cur; cur+=stp; cuv=uv+delta*cur;
    d=1.0-textureSampleGrad(H,S,cuv,gx,gy).r;
  }
  let after=d-cur; let before=prevD-prevCur; let w=clamp(after/(after-before+0.00001),0.0,1.0);
  return vec3f(mix(cuv,puv,w),1.0-mix(d,prevD,w));
}
// Return albedo, perturbed normal and roughness together.
struct AcousticSample { albedo:vec3f, normal:vec3f, rough:f32 }
fn acousticTri(T:texture_2d<f32>, Nm:texture_2d<f32>, H:texture_2d<f32>, S:sampler, sc:f32,
  p:vec3f,gx:vec3f,gy:vec3f,n:vec3f,bw:vec3f,Vw:vec3f,dist:f32,pomDepth:f32,bump:f32) -> AcousticSample {
  var ux=p.zy*sc; var uy=p.xz*sc; var uz=p.xy*sc;
  let xx=gx.zy*sc; let yx=gy.zy*sc; let xy=gx.xz*sc; let yy=gy.xz*sc; let xz=gx.xy*sc; let yz=gy.xy*sc;
  let fade=1.0-smoothstep(5.0,12.0,dist); let pd=pomDepth*sc*fade; var cav=1.0;
  ${relief?`if(pd>0.0005){
    var r:vec3f;
    if(bw.x>=bw.y && bw.x>=bw.z){r=acousticPom(H,S,ux,xx,yx,Vw.zy,abs(Vw.x),pd);ux=r.xy;}
    else if(bw.y>=bw.z){r=acousticPom(H,S,uy,xy,yy,Vw.xz,abs(Vw.y),pd);uy=r.xy;}
    else{r=acousticPom(H,S,uz,xz,yz,Vw.xy,abs(Vw.z),pd);uz=r.xy;}
    cav=mix(1.0,mix(0.3,1.0,smoothstep(0.0,0.85,r.z)),fade*min(1.0,pomDepth*50.0));
  }`:''}
  var a=vec3f(0); var tx=vec2f(0);var ty=vec2f(0);var tz=vec2f(0);var rough=0.0;
  if(bw.x>0.02){let nx=textureSampleGrad(Nm,S,ux,xx,yx);a+=textureSampleGrad(T,S,ux,xx,yx).rgb*bw.x;tx=nx.xy*2.0-1.0;rough+=nx.b*bw.x;}
  if(bw.y>0.02){let ny=textureSampleGrad(Nm,S,uy,xy,yy);a+=textureSampleGrad(T,S,uy,xy,yy).rgb*bw.y;ty=ny.xy*2.0-1.0;rough+=ny.b*bw.y;}
  if(bw.z>0.02){let nz=textureSampleGrad(Nm,S,uz,xz,yz);a+=textureSampleGrad(T,S,uz,xz,yz).rgb*bw.z;tz=nz.xy*2.0-1.0;rough+=nz.b*bw.z;}
  let sn=sign(n);
  let normal=normalize(n+(vec3f(0,tx.y,tx.x*sn.x)*bw.x+vec3f(ty.x*sn.y,0,ty.y)*bw.y+vec3f(tz.x*sn.z,tz.y,0)*bw.z)*bump);
  return AcousticSample(a*cav,normal,rough);
}
fn acousticLamp(w:vec3f,L:ptr<uniform,array<vec4f,6>>)->f32{
 let delta=w-(*L)[0].xyz;let d=length(delta);
 return (*L)[0].w*smoothstep(0.9205,0.9599,dot(delta/max(d,0.001),(*L)[1].xyz))*(1.0-smoothstep(12.0,18.0,d))/(1.0+d*d*0.08);
}
fn acousticShadow(w:vec3f,L:ptr<uniform,array<vec4f,6>>,Sh:texture_2d<f32>,S:sampler)->f32{
 let clip=mat4x4f((*L)[2],(*L)[3],(*L)[4],(*L)[5])*vec4f(w,1);
 let st=clip.xy/clip.w*0.5+0.5;
 if(clip.w<=0.0||min(st.x,st.y)<0.0||max(st.x,st.y)>1.0){return 0.0;}
 let depth=dot(w-(*L)[0].xyz,(*L)[1].xyz)/18.0-0.0025;
 let q=vec2f(st.x,1.0-st.y);let px=1.0/512.0;
 return (step(depth,textureSampleLevel(Sh,S,q+vec2f(-px,-px),0.0).r)+step(depth,textureSampleLevel(Sh,S,q+vec2f(px,-px),0.0).r)+step(depth,textureSampleLevel(Sh,S,q+vec2f(-px,px),0.0).r)+step(depth,textureSampleLevel(Sh,S,q+vec2f(px,px),0.0).r))*0.25;
}
fn acousticShade(w:vec3f,normal:vec3f,uv:vec2f,local:vec3f,localNormal:vec3f,color:vec3f,camera:vec3f,
  U:ptr<uniform,array<vec4f,8>>,P:ptr<uniform,array<vec4f,120>>,Lamp:ptr<uniform,array<vec4f,6>>,Sh:texture_2d<f32>,
  T:texture_2d<f32>,Nm:texture_2d<f32>,H:texture_2d<f32>,T2:texture_2d<f32>,Nm2:texture_2d<f32>,H2:texture_2d<f32>,S:sampler) -> vec4f {
  let tint=(*U)[0].rgb;let boost=(*U)[0].a;let lit=(*U)[1].x;let localScale=(*U)[1].y;let scale=(*U)[1].z;let bump=(*U)[1].w;
  let wet=(*U)[2].x;let scale2=(*U)[2].y;let split=(*U)[2].z;let grime=(*U)[2].w;let pomDepth=(*U)[3].x;
  let time=(*U)[4].x;let count=i32((*U)[4].y);let listen=(*U)[4].z;
  let p=select(w,local*localScale,localScale>0.5);
  // Gradients precede divergent illumination branches, as required by WebGPU.
  let gx=dpdx(p);let gy=dpdy(p);let uvx=dpdx(uv);let uvy=dpdy(uv);
  var n=normalize(normal);let V=normalize(camera-w);
  ${pat===8?'if(dot(n,V)<0.0){discard;}':''}
  if(dot(n,V)<0.0){n=-n;}
  ${pat!==8?`if(lit<=0.0&&acousticLamp(w,Lamp)<0.0001){var reached=false;for(var i=0;i<count;i++){let q=(*P)[i*3+1];let delta=(*P)[i*3].xyz-w;if(q.z>0.0 && dot(delta,delta)<=q.x*q.x){reached=true;break;}}if(!reached){return vec4f(0,0,0,1);}}`:''}
  var albedo=vec3f(0.5);var N=n;var rough=0.8;var alpha=1.0;
  ${pat===9?`
  let rp=vec2f(sin(w.x*1.8+time*0.7+w.z*0.3),sin(w.z*2.1-time*0.55+w.x*0.25));
  let fine=vec2f(sin(w.x*12.0+time*1.2),sin(w.z*10.0-time*0.9));
  N=normalize(vec3f(rp.x*0.035+fine.x*0.007,1,rp.y*0.035+fine.y*0.007));
  albedo=vec3f(0.028,0.048,0.046);rough=0.19;alpha=0.62+pow(1.0-max(dot(N,V),0.0),4.0)*0.28;
  `:pat===8?`
  let dc=textureSampleGrad(T,S,uv,uvx,uvy);albedo=dc.rgb;alpha=dc.a;if(alpha<0.02){discard;}
  rough=select(0.85,mix(0.7,0.18,wet*smoothstep(0.3,0.9,alpha)),wet>0.0);
  `:pat<4.5||(pat>6.5&&pat<7.5)?`
  let nb=select(n,normalize(localNormal),localScale>0.5);var bw=pow(abs(nb),vec3f(4));bw/=bw.x+bw.y+bw.z;
  var tri:AcousticSample;
  ${pat>6.5?`let wob=(acousticNoise(vec3f(w.x*3.0,0,w.z*3.0))-0.5)*0.015;
  if(w.y<split+wob){tri=acousticTri(T2,Nm2,H2,S,scale2,p,gx,gy,n,bw,V,distance(w,camera),pomDepth,bump);}
  else{tri=acousticTri(T,Nm,H,S,scale,p,gx,gy,n,bw,V,distance(w,camera),pomDepth,bump);}
  tri.albedo=mix(tri.albedo,tri.albedo*0.35,1.0-smoothstep(0.02,0.035,abs(w.y-split-wob)));`:`tri=acousticTri(T,Nm,H,S,scale,p,gx,gy,n,bw,V,distance(w,camera),pomDepth,bump);`}
  albedo=tri.albedo;N=tri.normal;rough=tri.rough;
  ${pat>0.5&&pat<1.5?`let rp=vec2f(sin(w.x*7.0+time*1.4+sin(w.z*3.0)),sin(w.z*6.0-time*1.1+sin(w.x*2.0)));
  let rp2=vec2f(sin(w.x*19.0-time*2.3+w.z*4.0),sin(w.z*17.0+time*1.9-w.x*3.0));
  N=normalize(vec3f(0,1,0)+vec3f(rp.x+rp2.x*0.5,0,rp.y+rp2.y*0.5)*0.14);albedo*=0.12;rough=0.12;
  `:pat>2.5&&pat<3.5?`if(acousticHash(floor(w*40.0))>0.93){rough=0.02;N=normalize(n+(vec3f(acousticHash(floor(w*41.0)),0,acousticHash(floor(w*43.0)))-0.5)*1.2);}`:''}
  ${grime?`let h=w.x*1.7+w.z*1.7;
  let drip=smoothstep(0.55,0.85,acousticNoise(vec3f(h*4.0,w.y*0.35,0)))*smoothstep(0.0,1.5,w.y);
  let damp=(1.0-smoothstep(0.0,0.7+acousticNoise(vec3f(h*2.0,0,3))*0.6,w.y))*select(0.0,1.0,abs(n.y)<=0.5);
  let mould=smoothstep(0.62,0.8,acousticFbm(w*1.3+11.0))*acousticFbm(w*9.0);
  let dirt=clamp(drip*0.6+damp*0.55+mould*0.9,0.0,1.0)*grime;
  albedo*=mix(vec3f(1),vec3f(0.32,0.3,0.24),dirt);rough=mix(rough,0.25,damp*grime*0.6);`:''}
  `:pat<5.5?human?`
  let pores=acousticNoise(p*240.0);let tone=acousticNoise(p*35.0);
  albedo=mix(vec3f(0.42,0.285,0.23),vec3f(0.51,0.355,0.29),tone)*(0.97+pores*0.035);rough=0.69+pores*0.06;
  let e=0.01;let h=acousticNoise(p*30.0);
  let grad=vec3f(acousticNoise((p+vec3f(e,0,0))*30.0)-h,acousticNoise((p+vec3f(0,e,0))*30.0)-h,acousticNoise((p+vec3f(0,0,e))*30.0)-h)/e*0.6;
  N=normalize(n-(grad-dot(grad,n)*n)*0.02*bump);
  `:`let m=acousticFbm(p*9.0);let veins=(1.0-smoothstep(0.0,0.03,abs(acousticFbm(p*4.0+3.1)-0.5)))*0.6;
  albedo=mix(vec3f(0.16,0.13,0.12),vec3f(0.34,0.29,0.27),m)*(1.0-veins*0.7);
  let e=0.01;let h=acousticNoise(p*30.0);
  let grad=vec3f(acousticNoise((p+vec3f(e,0,0))*30.0)-h,acousticNoise((p+vec3f(0,e,0))*30.0)-h,acousticNoise((p+vec3f(0,0,e))*30.0)-h)/e*0.6;
  N=normalize(n-(grad-dot(grad,n)*n)*0.02*bump);rough=mix(0.75,0.3,wet*smoothstep(0.35,0.7,acousticFbm(p*5.0+7.0)));`:`albedo=vec3f(0.03);rough=0.05;`}
  ${human?'albedo*=color;':''}
  var acc=vec3f(0);
  for(var i=0;i<count;i++){
    let pulse=(*P)[i*3];var q=(*P)[i*3+1];let sourceColor=(*P)[i*3+2].rgb;
    q.z*=select(1.0,listen,sourceColor.r>0.8 && sourceColor.g<0.3);if(q.z<=0.001){continue;}
    let age=time-pulse.w;if(age<0.0){continue;}let lv=pulse.xyz-w;let d=length(lv);if(d>q.x){continue;}
    let L=lv/max(d,0.001);let f=1.0-smoothstep(0.0,q.x,d);
    let fadeAge=max(0.0,age-0.45)*q.w;let onset=smoothstep(0.0,0.45,age);let trail=exp(-fadeAge*fadeAge);
    let offset=d-age*q.y;let front=exp(-offset*offset);let frontFade=smoothstep(0.0,0.12,age)*(1.0-smoothstep(0.6,1.0,age*q.y/q.x));
    let c=mix(vec3f(dot(sourceColor,vec3f(0.3,0.5,0.2))),sourceColor,0.4+0.4*select(0.0,1.0,sourceColor.r-sourceColor.g>=0.8));
    let wave=(onset*trail*0.6+front*frontFade*0.18)*f*q.z;
    let wl=dot(N,L)*0.5+0.5;let dif=wl*wl*0.8+(dot(n,L)*0.5+0.5)*0.08+0.07;
    let H=normalize(L+V);let shin=mix(90.0,6.0,rough);
    let spec=pow(max(dot(N,H),0.0),shin)*(1.0-rough)*(1.0+wet*2.0);
    let fres=${pat>0.5&&pat<1.5?'pow(1.0-max(dot(N,V),0.0),4.0)*0.5':'0.0'};
    acc+=c*wave*(dif*albedo+spec*0.5+fres);
  }
  acc/=1.0+max(max(acc.r,acc.g),acc.b)*0.75;
  let cd=distance(w,camera);let fog=exp(-cd*0.055);var litTerm=vec3f(0);
  if(lit>0.0){
    let L=normalize(camera+vec3f(${human?'-0.45,0.8,0.3':'0,-0.9,0'})-w);let H=normalize(L+V);
    litTerm=${human?'lit*(albedo*(0.18+max(dot(N,L),0.0)*1.05)+pow(max(dot(N,H),0.0),25.0)*0.05)':'lit*(albedo*(0.05+pow(max(dot(N,L),0.0),1.4)*1.4)+pow(max(dot(N,H),0.0),40.0)*0.6)'};
  }
  let beam=acousticLamp(w,Lamp);
  if(beam>0.0001){
   let direction=normalize((*Lamp)[0].xyz-w);let halfV=normalize(direction+V);
   let spec=pow(max(dot(N,halfV),0.0),mix(95.0,10.0,rough))*(1.0-rough);
   litTerm+=vec3f(1,0.94,0.82)*beam*acousticShadow(w,Lamp,Sh,S)*(albedo*(0.07+max(dot(N,direction),0.0)*1.45)+spec*0.35);
  }
  var col=(acc*fog*1.25+litTerm)*boost*tint;
  let hz=1.0-exp(-max(cd-2.0,0.0)*0.06);col=mix(col,vec3f(dot(col,vec3f(0.3,0.55,0.15)))*vec3f(0.82,0.93,1.08)*0.85,hz*0.55);
  return vec4f(col/(1.0+col*1.1),alpha);
}`;
}

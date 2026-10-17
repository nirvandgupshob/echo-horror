import{f as Nn}from"./index-DkCm9P-5.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="170",Kd=0,u0=1,Zd=2,Mf=1,Qd=2,Ui=3,Bi=0,kn=1,ui=2,sn=0,ks=1,Co=2,f0=3,d0=4,yf=5,fi=100,Jd=101,$d=102,tp=103,ep=104,sr=200,np=201,ip=202,sp=203,bc=204,Sc=205,wc=206,op=207,Tc=208,rp=209,ap=210,lp=211,cp=212,hp=213,up=214,Ec=0,Ac=1,Cc=2,Po=3,Pc=4,Rc=5,Dc=6,Lc=7,_f=0,fp=1,dp=2,os=0,bf=1,Sf=2,wf=3,Tf=4,pp=5,Ef=6,Af=7,p0="attached",mp="detached",Cf=300,Ro=301,Do=302,Ic=303,Uc=304,Ga=306,cs=1e3,Us=1001,Nc=1002,on=1003,gp=1004,Pr=1005,ti=1006,il=1007,Ns=1008,Si=1009,Pf=1010,Rf=1011,gr=1012,Th=1013,Fs=1014,Mi=1015,Mn=1016,Eh=1017,Ah=1018,Os=1020,Df=35902,Lf=1021,If=1022,Wn=1023,Uf=1024,Nf=1025,bo=1026,Bs=1027,zf=1028,Ch=1029,kf=1030,Ph=1031,Rh=1033,ya=33776,_a=33777,ba=33778,Sa=33779,zc=35840,kc=35841,Fc=35842,Oc=35843,Bc=36196,Hc=37492,Vc=37496,Gc=37808,Wc=37809,Xc=37810,qc=37811,Yc=37812,jc=37813,Kc=37814,Zc=37815,Qc=37816,Jc=37817,$c=37818,th=37819,eh=37820,nh=37821,wa=36492,ih=36494,sh=36495,Ff=36283,oh=36284,rh=36285,ah=36286,xp=3200,vp=3201,Of=0,Mp=1,zi="",Un="srgb",Uo="srgb-linear",Wa="linear",De="srgb",js=7680,m0=519,yp=512,_p=513,bp=514,Bf=515,Sp=516,wp=517,Tp=518,Ep=519,g0=35044,x0="300 es",ki=2e3,Ia=2001;class No{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let v0=1234567;const So=Math.PI/180,xr=180/Math.PI;function Vs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function fn(i,t,e){return Math.max(t,Math.min(e,i))}function Dh(i,t){return(i%t+t)%t}function Ap(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Cp(i,t,e){return i!==t?(e-i)/(t-i):0}function lr(i,t,e){return(1-e)*i+e*t}function Pp(i,t,e,n){return lr(i,t,1-Math.exp(-e*n))}function Rp(i,t=1){return t-Math.abs(Dh(i,t*2)-t)}function Dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Lp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ip(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Up(i,t){return i+Math.random()*(t-i)}function Np(i){return i*(.5-Math.random())}function zp(i){i!==void 0&&(v0=i);let t=v0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kp(i){return i*So}function Fp(i){return i*xr}function Op(i){return(i&i-1)===0&&i!==0}function Bp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vp(i,t,e,n,s){const o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),h=r((t+n)/2),u=o((t-n)/2),f=r((t-n)/2),d=o((n-t)/2),m=r((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:So,RAD2DEG:xr,generateUUID:Vs,clamp:fn,euclideanModulo:Dh,mapLinear:Ap,inverseLerp:Cp,lerp:lr,damp:Pp,pingpong:Rp,smoothstep:Dp,smootherstep:Lp,randInt:Ip,randFloat:Up,randFloatSpread:Np,seededRandom:zp,degToRad:kp,radToDeg:Fp,isPowerOfTwo:Op,ceilPowerOfTwo:Bp,floorPowerOfTwo:Hp,setQuaternionFromProperEuler:Vp,normalize:An,denormalize:mo};class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,o,r,a,l,c){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],M=s[1],_=s[4],v=s[7],A=s[2],b=s[5],y=s[8];return o[0]=r*x+a*M+l*A,o[3]=r*g+a*_+l*b,o[6]=r*p+a*v+l*y,o[1]=c*x+h*M+u*A,o[4]=c*g+h*_+u*b,o[7]=c*p+h*v+u*y,o[2]=f*x+d*M+m*A,o[5]=f*g+d*_+m*b,o[8]=f*p+d*v+m*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*r-a*c,f=a*l-h*o,d=c*o-r*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new ue;function Hf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gp(){const i=vr("canvas");return i.style.display="block",i}const M0={};function or(i){i in M0||(M0[i]=!0,console.warn(i))}function Wp(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Xp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function qp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const we={enabled:!0,workingColorSpace:Uo,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===De&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===De&&(i.r=wo(i.r),i.g=wo(i.g),i.b=wo(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?Wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const y0=[.64,.33,.3,.6,.15,.06],_0=[.2126,.7152,.0722],b0=[.3127,.329],S0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);we.define({[Uo]:{primaries:y0,whitePoint:b0,transfer:Wa,toXYZ:S0,fromXYZ:w0,luminanceCoefficients:_0,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:y0,whitePoint:b0,transfer:De,toXYZ:S0,fromXYZ:w0,luminanceCoefficients:_0,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});let Ks;class Yp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ks===void 0&&(Ks=vr("canvas")),Ks.width=t.width,Ks.height=t.height;const n=Ks.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Oi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jp=0;class Vf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ol(s[r].image)):o.push(ol(s[r]))}else o=ol(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kp=0;class rn extends No{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=Us,s=Us,o=ti,r=Ns,a=Wn,l=Si,c=rn.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=Vs(),this.name="",this.source=new Vf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cs:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case Nc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cs:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case Nc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Cf;rn.DEFAULT_ANISOTROPY=1;class Fe{constructor(t=0,e=0,n=0,s=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(c+1)/2,v=(d+1)/2,A=(p+1)/2,b=(h+f)/4,y=(u+x)/4,E=(m+g)/4;return _>v&&_>A?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=b/n,o=y/n):v>A?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=b/s,o=E/s):A<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(A),n=y/o,s=E/o),this.set(n,s,o,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zp extends No{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends Zp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gf extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qp extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class We{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=o[r+0],d=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let g=1-a;const p=l*f+c*d+h*m+u*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const A=Math.sqrt(_),b=Math.atan2(A,p*M);g=Math.sin(g*b)/A,a=Math.sin(a*b)/A}const v=a*M;if(l=l*g+f*v,c=c*g+d*v,h=h*g+m*v,u=u*g+x*v,g===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=o[r],f=o[r+1],d=o[r+2],m=o[r+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(o/2),f=l(n/2),d=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(T0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(T0.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=s+l*u+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new D,T0=new We;class ei{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ai):ai.fromBufferAttribute(o,r),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),Dr.subVectors(this.max,Vo),Zs.subVectors(t.a,Vo),Qs.subVectors(t.b,Vo),Js.subVectors(t.c,Vo),ji.subVectors(Qs,Zs),Ki.subVectors(Js,Qs),ps.subVectors(Zs,Js);let e=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-ps.z,ps.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,ps.z,0,-ps.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-ps.y,ps.x,0];return!al(e,Zs,Qs,Js,Dr)||(e=[1,0,0,0,1,0,0,0,1],!al(e,Zs,Qs,Js,Dr))?!1:(Lr.crossVectors(ji,Ki),e=[Lr.x,Lr.y,Lr.z],al(e,Zs,Qs,Js,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ai=[new D,new D,new D,new D,new D,new D,new D,new D],ai=new D,Rr=new ei,Zs=new D,Qs=new D,Js=new D,ji=new D,Ki=new D,ps=new D,Vo=new D,Dr=new D,Lr=new D,ms=new D;function al(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ms.fromArray(i,o);const a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Jp=new ei,Go=new D,ll=new D;class Gs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jp.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Go.subVectors(t,this.center);const e=Go.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Go,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Go.copy(t.center).add(ll)),this.expandByPoint(Go.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new D,cl=new D,Ir=new D,Zi=new D,hl=new D,Ur=new D,ul=new D;class wr{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ci.copy(this.origin).addScaledVector(this.direction,e),Ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){cl.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(cl);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ir),a=Zi.dot(this.direction),l=-Zi.dot(Ir),c=Zi.lengthSq(),h=Math.abs(1-r*r);let u,f,d,m;if(h>0)if(u=r*l-a,f=r*a-l,m=o*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+r*f+2*a)+f*(r*u+f+2*l)+c}else f=o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-o,-l),o),d=f*(f+2*l)+c):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-l),o),d=-u*u+f*(f+2*l)+c);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(cl).addScaledVector(Ir,f),d}intersectSphere(t,e){Ci.subVectors(t.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ci)!==null}intersectTriangle(t,e,n,s,o){hl.subVectors(e,t),Ur.subVectors(n,t),ul.crossVectors(hl,Ur);let r=this.direction.dot(ul),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Zi.subVectors(this.origin,t);const l=a*this.direction.dot(Ur.crossVectors(Zi,Ur));if(l<0)return null;const c=a*this.direction.dot(hl.cross(Zi));if(c<0||l+c>r)return null;const h=-a*Zi.dot(ul);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,o,r,a,l,c,h,u,f,d,m,x,g){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,u,f,d,m,x,g)}set(t,e,n,s,o,r,a,l,c,h,u,f,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),o=1/$s.setFromMatrixColumn(t,1).length(),r=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,d=r*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=r*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=r*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-r*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=r*h,e[9]=x-f*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const f=r*h,d=r*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const f=r*l,d=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=r*l,d=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=r*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($p,t,tm)}lookAt(t,e,n){const s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Qi.crossVectors(n,Bn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Qi.crossVectors(n,Bn)),Qi.normalize(),Nr.crossVectors(Bn,Qi),s[0]=Qi.x,s[4]=Nr.x,s[8]=Bn.x,s[1]=Qi.y,s[5]=Nr.y,s[9]=Bn.y,s[2]=Qi.z,s[6]=Nr.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],_=n[7],v=n[11],A=n[15],b=s[0],y=s[4],E=s[8],w=s[12],S=s[1],L=s[5],U=s[9],R=s[13],k=s[2],X=s[6],C=s[10],B=s[14],z=s[3],K=s[7],Z=s[11],rt=s[15];return o[0]=r*b+a*S+l*k+c*z,o[4]=r*y+a*L+l*X+c*K,o[8]=r*E+a*U+l*C+c*Z,o[12]=r*w+a*R+l*B+c*rt,o[1]=h*b+u*S+f*k+d*z,o[5]=h*y+u*L+f*X+d*K,o[9]=h*E+u*U+f*C+d*Z,o[13]=h*w+u*R+f*B+d*rt,o[2]=m*b+x*S+g*k+p*z,o[6]=m*y+x*L+g*X+p*K,o[10]=m*E+x*U+g*C+p*Z,o[14]=m*w+x*R+g*B+p*rt,o[3]=M*b+_*S+v*k+A*z,o[7]=M*y+_*L+v*X+A*K,o[11]=M*E+_*U+v*C+A*Z,o[15]=M*w+_*R+v*B+A*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+o*l*u-s*c*u-o*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+o*r*f-s*r*d+s*c*h-o*l*h)+g*(+e*c*u-e*a*d-o*r*u+n*r*d+o*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*r*u-n*r*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=u*g*c-x*f*c+x*l*d-a*g*d-u*l*p+a*f*p,_=m*f*c-h*g*c-m*l*d+r*g*d+h*l*p-r*f*p,v=h*x*c-m*u*c+m*a*d-r*x*d-h*a*p+r*u*p,A=m*u*l-h*x*l-m*a*f+r*x*f+h*a*g-r*u*g,b=e*M+n*_+s*v+o*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return t[0]=M*y,t[1]=(x*f*o-u*g*o-x*s*d+n*g*d+u*s*p-n*f*p)*y,t[2]=(a*g*o-x*l*o+x*s*c-n*g*c-a*s*p+n*l*p)*y,t[3]=(u*l*o-a*f*o-u*s*c+n*f*c+a*s*d-n*l*d)*y,t[4]=_*y,t[5]=(h*g*o-m*f*o+m*s*d-e*g*d-h*s*p+e*f*p)*y,t[6]=(m*l*o-r*g*o-m*s*c+e*g*c+r*s*p-e*l*p)*y,t[7]=(r*f*o-h*l*o+h*s*c-e*f*c-r*s*d+e*l*d)*y,t[8]=v*y,t[9]=(m*u*o-h*x*o-m*n*d+e*x*d+h*n*p-e*u*p)*y,t[10]=(r*x*o-m*a*o+m*n*c-e*x*c-r*n*p+e*a*p)*y,t[11]=(h*a*o-r*u*o-h*n*c+e*u*c+r*n*d-e*a*d)*y,t[12]=A*y,t[13]=(h*x*s-m*u*s+m*n*f-e*x*f-h*n*g+e*u*g)*y,t[14]=(m*a*s-r*x*s-m*n*l+e*x*l+r*n*g-e*a*g)*y,t[15]=(r*u*s-h*a*s+h*n*l-e*u*l-r*n*f+e*a*f)*y,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,u=a+a,f=o*c,d=o*h,m=o*u,x=r*h,g=r*u,p=a*u,M=l*c,_=l*h,v=l*u,A=n.x,b=n.y,y=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+v)*A,s[2]=(m-_)*A,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+p))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(m+_)*y,s[9]=(g-M)*y,s[10]=(1-(f+x))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=$s.set(s[0],s[1],s[2]).length();const r=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],li.copy(this);const c=1/o,h=1/r,u=1/a;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,e.setFromRotationMatrix(li),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=ki){const l=this.elements,c=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,m;if(a===ki)d=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Ia)d=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=ki){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(r-o),f=(e+t)*c,d=(n+s)*h;let m,x;if(a===ki)m=(r+o)*u,x=-2*u;else if(a===Ia)m=o*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $s=new D,li=new ie,$p=new D(0,0,0),tm=new D(1,1,1),Qi=new D,Nr=new D,Bn=new D,E0=new ie,A0=new We;class pi{constructor(t=0,e=0,n=0,s=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return E0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(E0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return A0.setFromEuler(this),this.setFromQuaternion(A0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Wf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let em=0;const C0=new D,to=new We,Pi=new ie,zr=new D,Wo=new D,nm=new D,im=new We,P0=new D(1,0,0),R0=new D(0,1,0),D0=new D(0,0,1),L0={type:"added"},sm={type:"removed"},eo={type:"childadded",child:null},fl={type:"childremoved",child:null};class Ve extends No{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new D,e=new pi,n=new We,s=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new ue}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.multiply(to),this}rotateOnWorldAxis(t,e){return to.setFromAxisAngle(t,e),this.quaternion.premultiply(to),this}rotateX(t){return this.rotateOnAxis(P0,t)}rotateY(t){return this.rotateOnAxis(R0,t)}rotateZ(t){return this.rotateOnAxis(D0,t)}translateOnAxis(t,e){return C0.copy(t).applyQuaternion(this.quaternion),this.position.add(C0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(P0,t)}translateY(t){return this.translateOnAxis(R0,t)}translateZ(t){return this.translateOnAxis(D0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Wo,zr,this.up):Pi.lookAt(zr,Wo,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),to.setFromRotationMatrix(Pi),this.quaternion.premultiply(to.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(L0),eo.child=t,this.dispatchEvent(eo),eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sm),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(L0),eo.child=t,this.dispatchEvent(eo),eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,t,nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,im,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(t.shapes,u)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),d=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new D,Ri=new D,dl=new D,Di=new D,no=new D,io=new D,I0=new D,pl=new D,ml=new D,gl=new D,xl=new Fe,vl=new Fe,Ml=new Fe;class $n{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){ci.subVectors(s,e),Ri.subVectors(n,e),dl.subVectors(t,e);const r=ci.dot(ci),a=ci.dot(Ri),l=ci.dot(dl),c=Ri.dot(Ri),h=Ri.dot(dl),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(r*h-a*l)*f;return o.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Di.x),l.addScaledVector(r,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return xl.setScalar(0),vl.setScalar(0),Ml.setScalar(0),xl.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,n),Ml.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(xl,o.x),r.addScaledVector(vl,o.y),r.addScaledVector(Ml,o.z),r}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),Ri.subVectors(t,e),ci.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ci.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return $n.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;no.subVectors(s,n),io.subVectors(o,n),pl.subVectors(t,n);const l=no.dot(pl),c=io.dot(pl);if(l<=0&&c<=0)return e.copy(n);ml.subVectors(t,s);const h=no.dot(ml),u=io.dot(ml);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(no,r);gl.subVectors(t,o);const d=no.dot(gl),m=io.dot(gl);if(m>=0&&d<=m)return e.copy(o);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(io,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return I0.subVectors(o,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(I0,a);const p=1/(g+x+f);return r=x*p,a=f*p,e.copy(n).addScaledVector(no,r).addScaledVector(io,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},kr={h:0,s:0,l:0};function yl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=Dh(t,1),e=fn(e,0,1),n=fn(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=yl(r,o,t+1/3),this.g=yl(r,o,t),this.b=yl(r,o,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=Un){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const n=Xf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=wo(t.r),this.g=wo(t.g),this.b=wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return we.fromWorkingColorSpace(bn.copy(this),t),Math.round(fn(bn.r*255,0,255))*65536+Math.round(fn(bn.g*255,0,255))*256+Math.round(fn(bn.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,s=bn.g,o=bn.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(s-o)/u+(s<o?6:0);break;case s:l=(o-n)/u+2;break;case o:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Un){we.fromWorkingColorSpace(bn.copy(this),t);const e=bn.r,n=bn.g,s=bn.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(kr);const n=lr(Ji.h,kr.h,e),s=lr(Ji.s,kr.s,e),o=lr(Ji.l,kr.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Kt;Kt.NAMES=Xf;let om=0;class Ws extends No{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Vs(),this.name="",this.blending=ks,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Sc,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Sc&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==m0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(n.stencilFail=this.stencilFail),this.stencilZFail!==js&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tr extends Ws{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=_f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new D,Fr=new mt;class Xn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=g0,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mo(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mo(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mo(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),s=An(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),s=An(s,this.array),o=An(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==g0&&(t.usage=this.usage),t}}class Ua extends Xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qf extends Xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Xn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rm=0;const Yn=new ie,_l=new Ve,so=new D,Hn=new ei,Xo=new ei,un=new D;class Ye extends No{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hf(t)?qf:Ua)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ue().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];Hn.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Xo.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Hn.min,Xo.min),Hn.expandByPoint(un),un.addVectors(Hn.max,Xo.max),Hn.expandByPoint(un)):(Hn.expandByPoint(Xo.min),Hn.expandByPoint(Xo.max))}Hn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)un.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(un));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(so.fromBufferAttribute(t,c),un.add(so)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<n.count;E++)a[E]=new D,l[E]=new D;const c=new D,h=new D,u=new D,f=new mt,d=new mt,m=new mt,x=new D,g=new D;function p(E,w,S){c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),f.fromBufferAttribute(o,E),d.fromBufferAttribute(o,w),m.fromBufferAttribute(o,S),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[E].add(x),a[w].add(x),a[S].add(x),l[E].add(g),l[w].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,w=M.length;E<w;++E){const S=M[E],L=S.start,U=S.count;for(let R=L,k=L+U;R<k;R+=3)p(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const _=new D,v=new D,A=new D,b=new D;function y(E){A.fromBufferAttribute(s,E),b.copy(A);const w=a[E];_.copy(w),_.sub(A.multiplyScalar(A.dot(w))).normalize(),v.crossVectors(b,w);const L=v.dot(l[E])<0?-1:1;r.setXYZW(E,_.x,_.y,_.z,L)}for(let E=0,w=M.length;E<w;++E){const S=M[E],L=S.start,U=S.count;for(let R=L,k=L+U;R<k;R+=3)y(t.getX(R+0)),y(t.getX(R+1)),y(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,o=new D,r=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new Xn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],u=o[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U0=new ie,gs=new wr,Or=new Gs,N0=new D,Br=new D,Hr=new D,Vr=new D,bl=new D,Gr=new D,z0=new D,Wr=new D;class Ge extends Ve{constructor(t=new Ye,e=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){Gr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(bl.fromBufferAttribute(u,t),r?Gr.addScaledVector(bl,h):Gr.addScaledVector(bl.sub(e),h))}e.add(Gr)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(o),gs.copy(t.ray).recast(t.near),!(Or.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Or,N0)===null||gs.origin.distanceToSquared(N0)>(t.far-t.near)**2))&&(U0.copy(o).invert(),gs.copy(t.ray).applyMatrix4(U0),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=r[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,A=_;v<A;v+=3){const b=a.getX(v),y=a.getX(v+1),E=a.getX(v+2);s=Xr(this,p,t,n,c,h,u,b,y,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);s=Xr(this,r,t,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=r[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,A=_;v<A;v+=3){const b=v,y=v+1,E=v+2;s=Xr(this,p,t,n,c,h,u,b,y,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,_=g+1,v=g+2;s=Xr(this,r,t,n,c,h,u,M,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function am(i,t,e,n,s,o,r,a){let l;if(t.side===kn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Bi,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Br),i.getVertexPosition(l,Hr),i.getVertexPosition(c,Vr);const h=am(i,t,e,n,Br,Hr,Vr,z0);if(h){const u=new D;$n.getBarycoord(z0,Br,Hr,Vr,u),s&&(h.uv=$n.getInterpolatedAttribute(s,a,l,c,u,new mt)),o&&(h.uv1=$n.getInterpolatedAttribute(o,a,l,c,u,new mt)),r&&(h.normal=$n.getInterpolatedAttribute(r,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};$n.getNormal(Br,Hr,Vr,f.normal),h.face=f,h.barycoord=u}return h}class Ie extends Ye{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function m(x,g,p,M,_,v,A,b,y,E,w){const S=v/y,L=A/E,U=v/2,R=A/2,k=b/2,X=y+1,C=E+1;let B=0,z=0;const K=new D;for(let Z=0;Z<C;Z++){const rt=Z*L-R;for(let Ct=0;Ct<X;Ct++){const qt=Ct*S-U;K[x]=qt*M,K[g]=rt*_,K[p]=k,c.push(K.x,K.y,K.z),K[x]=0,K[g]=0,K[p]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ct/y),u.push(1-Z/E),B+=1}}for(let Z=0;Z<E;Z++)for(let rt=0;rt<y;rt++){const Ct=f+rt+X*Z,qt=f+rt+X*(Z+1),G=f+(rt+1)+X*(Z+1),tt=f+(rt+1)+X*Z;l.push(Ct,qt,tt),l.push(qt,G,tt),z+=6}a.addGroup(d,z,w),d+=z,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Lo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Cn(i){const t={};for(let e=0;e<i.length;e++){const n=Lo(i[e]);for(const s in n)t[s]=n[s]}return t}function lm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const Rn={clone:Lo,merge:Cn};var cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ue extends Ws{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lo(t.uniforms),this.uniformsGroups=lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class jf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ki}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new D,k0=new mt,F0=new mt;class Gn extends jf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,k0,F0),e.subVectors(F0,k0)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const oo=-90,ro=1;class um extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gn(oo,ro,t,e);s.layers=this.layers,this.add(s);const o=new Gn(oo,ro,t,e);o.layers=this.layers,this.add(o);const r=new Gn(oo,ro,t,e);r.layers=this.layers,this.add(r);const a=new Gn(oo,ro,t,e);a.layers=this.layers,this.add(a);const l=new Gn(oo,ro,t,e);l.layers=this.layers,this.add(l);const c=new Gn(oo,ro,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kf extends rn{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ro,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fm extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Kf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ie(5,5,5),o=new Ue({name:"CubemapFromEquirect",uniforms:Lo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:sn});o.uniforms.tEquirect.value=e;const r=new Ge(s,o),a=e.minFilter;return e.minFilter===Ns&&(e.minFilter=ti),new um(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Sl=new D,dm=new D,pm=new ue;class As{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Sl.subVectors(n,e).cross(dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Sl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||pm.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Gs,qr=new D;class Zf{constructor(t=new As,e=new As,n=new As,s=new As,o=new As,r=new As){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ki){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],M=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-o,f-c,g-d,v-p).normalize(),n[1].setComponents(l+o,f+c,g+d,v+p).normalize(),n[2].setComponents(l+r,f+h,g+m,v+M).normalize(),n[3].setComponents(l-r,f-h,g-m,v-M).normalize(),n[4].setComponents(l-a,f-u,g-x,v-_).normalize(),e===ki)n[5].setComponents(l+a,f+u,g+x,v+_).normalize();else if(e===Ia)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qf(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function mm(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}class fs extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*f-r;for(let _=0;_<c;_++){const v=_*u-o;m.push(v,-M,0),x.push(0,0,1),g.push(_/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const _=M+c*p,v=M+c*(p+1),A=M+1+c*(p+1),b=M+1+c*p;d.push(_,v,b),d.push(v,A,b)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.width,t.height,t.widthSegments,t.heightSegments)}}var gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ym=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_m=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Om=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,s1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,l1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,p1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,m1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,g1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ug=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:gm,alphahash_pars_fragment:xm,alphamap_fragment:vm,alphamap_pars_fragment:Mm,alphatest_fragment:ym,alphatest_pars_fragment:_m,aomap_fragment:bm,aomap_pars_fragment:Sm,batching_pars_vertex:wm,batching_vertex:Tm,begin_vertex:Em,beginnormal_vertex:Am,bsdfs:Cm,iridescence_fragment:Pm,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Um,color_fragment:Nm,color_pars_fragment:zm,color_pars_vertex:km,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Gm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:jm,envmap_common_pars_fragment:Km,envmap_pars_fragment:Zm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:l1,envmap_vertex:Jm,fog_vertex:$m,fog_pars_vertex:t1,fog_fragment:e1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:s1,lights_lambert_fragment:o1,lights_lambert_pars_fragment:r1,lights_pars_begin:a1,lights_toon_fragment:c1,lights_toon_pars_fragment:h1,lights_phong_fragment:u1,lights_phong_pars_fragment:f1,lights_physical_fragment:d1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:x1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:M1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:_1,map_fragment:b1,map_pars_fragment:S1,map_particle_fragment:w1,map_particle_pars_fragment:T1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:A1,morphinstance_vertex:C1,morphcolor_vertex:P1,morphnormal_vertex:R1,morphtarget_pars_vertex:D1,morphtarget_vertex:L1,normal_fragment_begin:I1,normal_fragment_maps:U1,normal_pars_fragment:N1,normal_pars_vertex:z1,normal_vertex:k1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:V1,opaque_fragment:G1,packing:W1,premultiplied_alpha_fragment:X1,project_vertex:q1,dithering_fragment:Y1,dithering_pars_fragment:j1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:Q1,shadowmap_pars_vertex:J1,shadowmap_vertex:$1,shadowmask_pars_fragment:tg,skinbase_vertex:eg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:sg,specularmap_fragment:og,specularmap_pars_fragment:rg,tonemapping_fragment:ag,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:hg,uv_pars_fragment:ug,uv_pars_vertex:fg,uv_vertex:dg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:xg,backgroundCube_frag:vg,cube_vert:Mg,cube_frag:yg,depth_vert:_g,depth_frag:bg,distanceRGBA_vert:Sg,distanceRGBA_frag:wg,equirect_vert:Tg,equirect_frag:Eg,linedashed_vert:Ag,linedashed_frag:Cg,meshbasic_vert:Pg,meshbasic_frag:Rg,meshlambert_vert:Dg,meshlambert_frag:Lg,meshmatcap_vert:Ig,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:zg,meshphong_vert:kg,meshphong_frag:Fg,meshphysical_vert:Og,meshphysical_frag:Bg,meshtoon_vert:Hg,meshtoon_frag:Vg,points_vert:Gg,points_frag:Wg,shadow_vert:Xg,shadow_frag:qg,sprite_vert:Yg,sprite_frag:jg},bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},xi={basic:{uniforms:Cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Cn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Cn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Cn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Cn([bt.points,bt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Cn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Cn([bt.common,bt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Cn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Cn([bt.sprite,bt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Cn([bt.common,bt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Cn([bt.lights,bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};xi.physical={uniforms:Cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Yr={r:0,b:0,g:0},vs=new pi,Kg=new ie;function Zg(i,t,e,n,s,o,r){const a=new Kt(0);let l=o===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function x(M){let _=!1;const v=m(M);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,_){const v=m(_);v&&(v.isCubeTexture||v.mapping===Ga)?(h===void 0&&(h=new Ge(new Ie(1,1,1),new Ue({name:"BackgroundCubeMaterial",uniforms:Lo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(_.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(vs)),h.material.toneMapped=we.getTransfer(v.colorSpace)!==De,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ge(new fs(2,2),new Ue({name:"BackgroundMaterial",uniforms:Lo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=we.getTransfer(v.colorSpace)!==De,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(Yr,Yf(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,_,r)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:g}}function Qg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(S,L,U,R,k){let X=!1;const C=u(R,U,L);o!==C&&(o=C,c(o.object)),X=d(S,R,U,k),X&&m(S,R,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,v(S,L,U,R),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,U){const R=U.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let X=k[L.id];X===void 0&&(X={},k[L.id]=X);let C=X[R];return C===void 0&&(C=f(l()),X[R]=C),C}function f(S){const L=[],U=[],R=[];for(let k=0;k<e;k++)L[k]=0,U[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:R,object:S,attributes:{},index:null}}function d(S,L,U,R){const k=o.attributes,X=L.attributes;let C=0;const B=U.getAttributes();for(const z in B)if(B[z].location>=0){const Z=k[z];let rt=X[z];if(rt===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(rt=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(rt=S.instanceColor)),Z===void 0||Z.attribute!==rt||rt&&Z.data!==rt.data)return!0;C++}return o.attributesNum!==C||o.index!==R}function m(S,L,U,R){const k={},X=L.attributes;let C=0;const B=U.getAttributes();for(const z in B)if(B[z].location>=0){let Z=X[z];Z===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const rt={};rt.attribute=Z,Z&&Z.data&&(rt.data=Z.data),k[z]=rt,C++}o.attributes=k,o.attributesNum=C,o.index=R}function x(){const S=o.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function g(S){p(S,0)}function p(S,L){const U=o.newAttributes,R=o.enabledAttributes,k=o.attributeDivisors;U[S]=1,R[S]===0&&(i.enableVertexAttribArray(S),R[S]=1),k[S]!==L&&(i.vertexAttribDivisor(S,L),k[S]=L)}function M(){const S=o.newAttributes,L=o.enabledAttributes;for(let U=0,R=L.length;U<R;U++)L[U]!==S[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function _(S,L,U,R,k,X,C){C===!0?i.vertexAttribIPointer(S,L,U,k,X):i.vertexAttribPointer(S,L,U,R,k,X)}function v(S,L,U,R){x();const k=R.attributes,X=U.getAttributes(),C=L.defaultAttributeValues;for(const B in X){const z=X[B];if(z.location>=0){let K=k[B];if(K===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const Z=K.normalized,rt=K.itemSize,Ct=t.get(K);if(Ct===void 0)continue;const qt=Ct.buffer,G=Ct.type,tt=Ct.bytesPerElement,dt=G===i.INT||G===i.UNSIGNED_INT||K.gpuType===Th;if(K.isInterleavedBufferAttribute){const lt=K.data,ct=lt.stride,et=K.offset;if(lt.isInstancedInterleavedBuffer){for(let zt=0;zt<z.locationSize;zt++)p(z.location+zt,lt.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let zt=0;zt<z.locationSize;zt++)g(z.location+zt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let zt=0;zt<z.locationSize;zt++)_(z.location+zt,rt/z.locationSize,G,Z,ct*tt,(et+rt/z.locationSize*zt)*tt,dt)}else{if(K.isInstancedBufferAttribute){for(let lt=0;lt<z.locationSize;lt++)p(z.location+lt,K.meshPerAttribute);S.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<z.locationSize;lt++)g(z.location+lt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let lt=0;lt<z.locationSize;lt++)_(z.location+lt,rt/z.locationSize,G,Z,rt*tt,rt/z.locationSize*lt*tt,dt)}}else if(C!==void 0){const Z=C[B];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(z.location,Z);break;case 3:i.vertexAttrib3fv(z.location,Z);break;case 4:i.vertexAttrib4fv(z.location,Z);break;default:i.vertexAttrib1fv(z.location,Z)}}}}M()}function A(){E();for(const S in n){const L=n[S];for(const U in L){const R=L[U];for(const k in R)h(R[k].object),delete R[k];delete L[U]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const U in L){const R=L[U];for(const k in R)h(R[k].object),delete R[k];delete L[U]}delete n[S.id]}function y(S){for(const L in n){const U=n[L];if(U[S.id]===void 0)continue;const R=U[S.id];for(const k in R)h(R[k].object),delete R[k];delete U[S.id]}}function E(){w(),r=!0,o!==s&&(o=s,c(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Jg(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)r(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*f[x];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $g(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(y){return!(y!==Wn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const E=y===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Si&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==Mi&&!E)}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:b}}function tx(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new As,a=new ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{const M=o?0:n,_=M*4;let v=p.clippingState||null;l.value=v,v=h(m,f,_,d);for(let A=0;A!==_;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=d;_!==x;++_,v+=4)r.copy(u[_]).applyMatrix4(M,a),r.normal.toArray(g,v),g[v+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function ex(i){let t=new WeakMap;function e(r,a){return a===Ic?r.mapping=Ro:a===Uc&&(r.mapping=Do),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ic||a===Uc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new fm(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Jf extends jf{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const go=4,O0=[.125,.215,.35,.446,.526,.582],Ds=20,wl=new Jf,B0=new Kt;let Tl=null,El=0,Al=0,Cl=!1;const Cs=(1+Math.sqrt(5))/2,ao=1/Cs,H0=[new D(-Cs,ao,0),new D(Cs,ao,0),new D(-ao,0,Cs),new D(ao,0,Cs),new D(0,Cs,-ao),new D(0,Cs,ao),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class V0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Tl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Tl,El,Al),this._renderer.xr.enabled=Cl,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ro||t.mapping===Do?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Tl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Mn,format:Wn,colorSpace:Uo,depthBuffer:!1},s=G0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G0(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nx(o)),this._blurMaterial=ix(o,t,e)}return s}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,wl)}_sceneToCubeUV(t,e,n,s){const a=new Gn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(B0),h.toneMapping=os,h.autoClear=!1;const d=new Tr({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),m=new Ge(new Ie,d);let x=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(B0),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;jr(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ro||t.mapping===Do;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W0());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Ge(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,wl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=H0[(s-o-1)%H0.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ge(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*Ds-1),x=o/m,g=isFinite(o)?1+Math.floor(h*x):Ds;g>Ds&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ds}`);const p=[];let M=0;for(let y=0;y<Ds;++y){const E=y/x,w=Math.exp(-E*E/2);p.push(w),y===0?M+=w:y<g&&(M+=2*w)}for(let y=0;y<p.length;y++)p[y]=p[y]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-n;const v=this._sizeLods[s],A=3*v*(s>_-go?s-_+go:0),b=4*(this._cubeSize-v);jr(e,A,b,3*v,2*v),l.setRenderTarget(e),l.render(u,wl)}}function nx(i){const t=[],e=[],n=[];let s=i;const o=i-go+1+O0.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let l=1/a;r>i-go?l=O0[r-i+go-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),_=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let b=0;b<d;b++){const y=b%3*2/3-1,E=b>2?0:-1,w=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];M.set(w,x*m*b),_.set(f,g*m*b);const S=[b,b,b,b,b,b];v.set(S,p*m*b)}const A=new Ye;A.setAttribute("position",new Xn(M,x)),A.setAttribute("uv",new Xn(_,g)),A.setAttribute("faceIndex",new Xn(v,p)),t.push(A),s>go&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function G0(i,t,e){const n=new an(i,t,e);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function ix(i,t,e){const n=new Float32Array(Ds),s=new D(0,1,0);return new Ue({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function W0(){return new Ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function X0(){return new Ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ic||l===Uc,h=l===Ro||l===Do;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new V0(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new V0(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function ox(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rx(i,t,e,n){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const x=f.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",r),delete s[f.id];const d=o.get(f);d&&(t.remove(d),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let _=0,v=M.length;_<v;_+=3){const A=M[_+0],b=M[_+1],y=M[_+2];f.push(A,b,b,y,y,A)}}else if(m!==void 0){const M=m.array;x=m.version;for(let _=0,v=M.length/3-1;_<v;_+=3){const A=_+0,b=_+1,y=_+2;f.push(A,b,b,y,y,A)}}else return;const g=new(Hf(f)?qf:Ua)(f,1);g.version=x;const p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){const f=o.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ax(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function l(f,d){i.drawElements(n,d,o,f*r),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,o,f*r,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/r,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,o,f,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cx(i,t,e){const n=new WeakMap,s=new Fe;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let w=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;d===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const b=new Float32Array(v*A*4*u),y=new Gf(b,v,A,u);y.type=Mi,y.needsUpdate=!0;const E=_*4;for(let S=0;S<u;S++){const L=g[S],U=p[S],R=M[S],k=v*A*4*S;for(let X=0;X<L.count;X++){const C=X*E;d===!0&&(s.fromBufferAttribute(L,X),b[k+C+0]=s.x,b[k+C+1]=s.y,b[k+C+2]=s.z,b[k+C+3]=0),m===!0&&(s.fromBufferAttribute(U,X),b[k+C+4]=s.x,b[k+C+5]=s.y,b[k+C+6]=s.z,b[k+C+7]=0),x===!0&&(s.fromBufferAttribute(R,X),b[k+C+8]=s.x,b[k+C+9]=s.y,b[k+C+10]=s.z,b[k+C+11]=R.itemSize===4?s.w:1)}}f={count:u,texture:y,size:new mt(v,A)},n.set(a,f),a.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function hx(i,t,e,n){let s=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function r(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Ih extends rn{constructor(t,e,n,s,o,r,a,l,c,h=bo){if(h!==bo&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bo&&(n=Fs),n===void 0&&h===Bs&&(n=Os),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $f=new rn,q0=new Ih(1,1),td=new Gf,ed=new Qp,nd=new Kf,Y0=[],j0=[],K0=new Float32Array(16),Z0=new Float32Array(9),Q0=new Float32Array(4);function zo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Y0[s];if(o===void 0&&(o=new Float32Array(s),Y0[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function ln(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xa(i,t){let e=j0[t];e===void 0&&(e=new Int32Array(t),j0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ux(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function mx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Q0.set(n),i.uniformMatrix2fv(this.addr,!1,Q0),cn(e,n)}}function gx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;Z0.set(n),i.uniformMatrix3fv(this.addr,!1,Z0),cn(e,n)}}function xx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;K0.set(n),i.uniformMatrix4fv(this.addr,!1,K0),cn(e,n)}}function vx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function yx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function _x(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function bx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function Tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function Ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(q0.compareFunction=Bf,o=q0):o=$f,e.setTexture2D(t||o,s)}function Ax(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ed,s)}function Cx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nd,s)}function Px(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||td,s)}function Rx(i){switch(i){case 5126:return ux;case 35664:return fx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return Mx;case 35668:case 35672:return yx;case 35669:case 35673:return _x;case 5125:return bx;case 36294:return Sx;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Dx(i,t){i.uniform1fv(this.addr,t)}function Lx(i,t){const e=zo(t,this.size,2);i.uniform2fv(this.addr,e)}function Ix(i,t){const e=zo(t,this.size,3);i.uniform3fv(this.addr,e)}function Ux(i,t){const e=zo(t,this.size,4);i.uniform4fv(this.addr,e)}function Nx(i,t){const e=zo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function zx(i,t){const e=zo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kx(i,t){const e=zo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fx(i,t){i.uniform1iv(this.addr,t)}function Ox(i,t){i.uniform2iv(this.addr,t)}function Bx(i,t){i.uniform3iv(this.addr,t)}function Hx(i,t){i.uniform4iv(this.addr,t)}function Vx(i,t){i.uniform1uiv(this.addr,t)}function Gx(i,t){i.uniform2uiv(this.addr,t)}function Wx(i,t){i.uniform3uiv(this.addr,t)}function Xx(i,t){i.uniform4uiv(this.addr,t)}function qx(i,t,e){const n=this.cache,s=t.length,o=Xa(e,s);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||$f,o[r])}function Yx(i,t,e){const n=this.cache,s=t.length,o=Xa(e,s);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||ed,o[r])}function jx(i,t,e){const n=this.cache,s=t.length,o=Xa(e,s);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||nd,o[r])}function Kx(i,t,e){const n=this.cache,s=t.length,o=Xa(e,s);ln(n,o)||(i.uniform1iv(this.addr,o),cn(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||td,o[r])}function Zx(i){switch(i){case 5126:return Dx;case 35664:return Lx;case 35665:return Ix;case 35666:return Ux;case 35674:return Nx;case 35675:return zx;case 35676:return kx;case 5124:case 35670:return Fx;case 35667:case 35671:return Ox;case 35668:case 35672:return Bx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Kx}}class Qx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rx(e.type)}}class Jx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zx(e.type)}}class $x{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Pl=/(\w+)(\])?(\[|\.)?/g;function J0(i,t){i.seq.push(t),i.map[t.id]=t}function tv(i,t,e){const n=i.name,s=n.length;for(Pl.lastIndex=0;;){const o=Pl.exec(n),r=Pl.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){J0(e,c===void 0?new Qx(a,i,t):new Jx(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $x(a),J0(e,u)),e=u}}}class Ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);tv(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function $0(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ev=37297;let nv=0;function iv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const tu=new ue;function sv(i){we._getMatrix(tu,we.workingColorSpace,i);const t=`mat3( ${tu.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case Wa:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function eu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+iv(i.getShaderSource(t),r)}else return s}function ov(i,t){const e=sv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rv(i,t){let e;switch(t){case bf:e="Linear";break;case Sf:e="Reinhard";break;case wf:e="Cineon";break;case Tf:e="ACESFilmic";break;case Ef:e="AgX";break;case Af:e="Neutral";break;case pp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new D;function av(){we.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function cv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function rr(i){return i!==""}function nu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(i){return i.replace(uv,dv)}const fv=new Map;function dv(i,t){let e=pe[t];if(e===void 0){const n=fv.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lh(e)}const pv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(i){return i.replace(pv,mv)}function mv(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ou(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qd?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function xv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ro:case Do:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Do:t="ENVMAP_MODE_REFRACTION";break}return t}function Mv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _f:t="ENVMAP_BLENDING_MULTIPLY";break;case fp:t="ENVMAP_BLENDING_MIX";break;case dp:t="ENVMAP_BLENDING_ADD";break}return t}function yv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function _v(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=gv(e),c=xv(e),h=vv(e),u=Mv(e),f=yv(e),d=lv(e),m=cv(o),x=s.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(g=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==os?"#define TONE_MAPPING":"",e.toneMapping!==os?pe.tonemapping_pars_fragment:"",e.toneMapping!==os?rv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),av(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),r=lh(r),r=nu(r,e),r=iu(r,e),a=lh(a),a=nu(a,e),a=iu(a,e),r=su(r),a=su(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===x0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===x0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+g+r,v=M+p+a,A=$0(s,s.VERTEX_SHADER,_),b=$0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function y(L){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),R=s.getShaderInfoLog(A).trim(),k=s.getShaderInfoLog(b).trim();let X=!0,C=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,b);else{const B=eu(s,A,"vertex"),z=eu(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+B+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(R===""||k==="")&&(C=!1);C&&(L.diagnostics={runnable:X,programLog:U,vertexShader:{log:R,prefix:g},fragmentShader:{log:k,prefix:p}})}s.deleteShader(A),s.deleteShader(b),E=new Ta(s,x),w=hv(s,x)}let E;this.getUniforms=function(){return E===void 0&&y(this),E};let w;this.getAttributes=function(){return w===void 0&&y(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,ev)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=b,this}let bv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wv(t),e.set(t,n)),n}}class wv{constructor(t){this.id=bv++,this.code=t,this.usedTimes=0}}function Tv(i,t,e,n,s,o,r){const a=new Wf,l=new Sv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,S,L,U,R){const k=U.fog,X=R.geometry,C=w.isMeshStandardMaterial?U.environment:null,B=(w.isMeshStandardMaterial?e:t).get(w.envMap||C),z=B&&B.mapping===Ga?B.image.height:null,K=m[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const Z=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,rt=Z!==void 0?Z.length:0;let Ct=0;X.morphAttributes.position!==void 0&&(Ct=1),X.morphAttributes.normal!==void 0&&(Ct=2),X.morphAttributes.color!==void 0&&(Ct=3);let qt,G,tt,dt;if(K){const Re=xi[K];qt=Re.vertexShader,G=Re.fragmentShader}else qt=w.vertexShader,G=w.fragmentShader,l.update(w),tt=l.getVertexShaderID(w),dt=l.getFragmentShaderID(w);const lt=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),et=R.isInstancedMesh===!0,zt=R.isBatchedMesh===!0,ee=!!w.map,Q=!!w.matcap,vt=!!B,N=!!w.aoMap,me=!!w.lightMap,Qt=!!w.bumpMap,Jt=!!w.normalMap,Nt=!!w.displacementMap,Wt=!!w.emissiveMap,Dt=!!w.metalnessMap,I=!!w.roughnessMap,T=w.anisotropy>0,H=w.clearcoat>0,it=w.dispersion>0,nt=w.iridescence>0,$=w.sheen>0,Pt=w.transmission>0,gt=T&&!!w.anisotropyMap,_t=H&&!!w.clearcoatMap,re=H&&!!w.clearcoatNormalMap,ht=H&&!!w.clearcoatRoughnessMap,Rt=nt&&!!w.iridescenceMap,jt=nt&&!!w.iridescenceThicknessMap,$t=$&&!!w.sheenColorMap,It=$&&!!w.sheenRoughnessMap,ve=!!w.specularMap,ne=!!w.specularColorMap,Ee=!!w.specularIntensityMap,O=Pt&&!!w.transmissionMap,yt=Pt&&!!w.thicknessMap,J=!!w.gradientMap,ot=!!w.alphaMap,At=w.alphaTest>0,Tt=!!w.alphaHash,le=!!w.extensions;let je=os;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(je=i.toneMapping);const yn={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:qt,fragmentShader:G,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:dt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:zt,batchingColor:zt&&R._colorsTexture!==null,instancing:et,instancingColor:et&&R.instanceColor!==null,instancingMorph:et&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Uo,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:Q,envMap:vt,envMapMode:vt&&B.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:me,bumpMap:Qt,normalMap:Jt,displacementMap:f&&Nt,emissiveMap:Wt,normalMapObjectSpace:Jt&&w.normalMapType===Mp,normalMapTangentSpace:Jt&&w.normalMapType===Of,metalnessMap:Dt,roughnessMap:I,anisotropy:T,anisotropyMap:gt,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:re,clearcoatRoughnessMap:ht,dispersion:it,iridescence:nt,iridescenceMap:Rt,iridescenceThicknessMap:jt,sheen:$,sheenColorMap:$t,sheenRoughnessMap:It,specularMap:ve,specularColorMap:ne,specularIntensityMap:Ee,transmission:Pt,transmissionMap:O,thicknessMap:yt,gradientMap:J,opaque:w.transparent===!1&&w.blending===ks&&w.alphaToCoverage===!1,alphaMap:ot,alphaTest:At,alphaHash:Tt,combine:w.combine,mapUv:ee&&x(w.map.channel),aoMapUv:N&&x(w.aoMap.channel),lightMapUv:me&&x(w.lightMap.channel),bumpMapUv:Qt&&x(w.bumpMap.channel),normalMapUv:Jt&&x(w.normalMap.channel),displacementMapUv:Nt&&x(w.displacementMap.channel),emissiveMapUv:Wt&&x(w.emissiveMap.channel),metalnessMapUv:Dt&&x(w.metalnessMap.channel),roughnessMapUv:I&&x(w.roughnessMap.channel),anisotropyMapUv:gt&&x(w.anisotropyMap.channel),clearcoatMapUv:_t&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:It&&x(w.sheenRoughnessMap.channel),specularMapUv:ve&&x(w.specularMap.channel),specularColorMapUv:ne&&x(w.specularColorMap.channel),specularIntensityMapUv:Ee&&x(w.specularIntensityMap.channel),transmissionMapUv:O&&x(w.transmissionMap.channel),thicknessMapUv:yt&&x(w.thicknessMap.channel),alphaMapUv:ot&&x(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Jt||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!X.attributes.uv&&(ee||ot),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ct,skinning:R.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===De,decodeVideoTextureEmissive:Wt&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===De,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ui,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:le&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&w.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return yn.vertexUv1s=c.has(1),yn.vertexUv2s=c.has(2),yn.vertexUv3s=c.has(3),c.clear(),yn}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(M(S,w),_(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const S=m[w.type];let L;if(S){const U=xi[S];L=Rn.clone(U.uniforms)}else L=w.uniforms;return L}function A(w,S){let L;for(let U=0,R=h.length;U<R;U++){const k=h[U];if(k.cacheKey===S){L=k,++L.usedTimes;break}}return L===void 0&&(L=new _v(i,S,w,o),h.push(L)),L}function b(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function y(w){l.remove(w)}function E(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:y,programs:h,dispose:E}}function Ev(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Av(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ru(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function au(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,f,d,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function a(u,f,d,m,x,g){const p=r(u,f,d,m,x,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,m,x,g){const p=r(u,f,d,m,x,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Av),n.length>1&&n.sort(f||ru),s.length>1&&s.sort(f||ru)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function Cv(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new au,i.set(n,[r])):s>=o.length?(r=new au,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Pv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Kt};break;case"SpotLight":e={position:new D,direction:new D,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Rv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dv=0;function Lv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Iv(i){const t=new Pv,e=Rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,o=new ie,r=new ie;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,_=0,v=0,A=0,b=0,y=0;c.sort(Lv);for(let w=0,S=c.length;w<S;w++){const L=c[w],U=L.color,R=L.intensity,k=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*R,u+=U.g*R,f+=U.b*R;else if(L.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(L.sh.coefficients[C],R);y++}else if(L.isDirectionalLight){const C=t.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,z=e.get(L);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=L.shadow.matrix,M++}n.directional[d]=C,d++}else if(L.isSpotLight){const C=t.get(L);C.position.setFromMatrixPosition(L.matrixWorld),C.color.copy(U).multiplyScalar(R),C.distance=k,C.coneCos=Math.cos(L.angle),C.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),C.decay=L.decay,n.spot[x]=C;const B=L.shadow;if(L.map&&(n.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[x]=B.matrix,L.castShadow){const z=e.get(L);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=X,v++}x++}else if(L.isRectAreaLight){const C=t.get(L);C.color.copy(U).multiplyScalar(R),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=C,g++}else if(L.isPointLight){const C=t.get(L);if(C.color.copy(L.color).multiplyScalar(L.intensity),C.distance=L.distance,C.decay=L.decay,L.castShadow){const B=L.shadow,z=e.get(L);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=C,m++}else if(L.isHemisphereLight){const C=t.get(L);C.skyColor.copy(L.color).multiplyScalar(R),C.groundColor.copy(L.groundColor).multiplyScalar(R),n.hemi[p]=C,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const E=n.hash;(E.directionalLength!==d||E.pointLength!==m||E.spotLength!==x||E.rectAreaLength!==g||E.hemiLength!==p||E.numDirectionalShadows!==M||E.numPointShadows!==_||E.numSpotShadows!==v||E.numSpotMaps!==A||E.numLightProbes!==y)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=y,E.directionalLength=d,E.pointLength=m,E.spotLength=x,E.rectAreaLength=g,E.hemiLength=p,E.numDirectionalShadows=M,E.numPointShadows=_,E.numSpotShadows=v,E.numSpotMaps=A,E.numLightProbes=y,n.version=Dv++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0;const g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const _=c[p];if(_.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(_.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(_.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function lu(i){const t=new Iv(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Uv(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new lu(i),t.set(s,[a])):o>=r.length?(a=new lu(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Nv extends Ws{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zv extends Ws{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ov(i,t,e){let n=new Zf;const s=new mt,o=new mt,r=new Fe,a=new Nv({depthPacking:vp}),l=new zv,c={},h=e.maxTextureSize,u={[Bi]:kn,[kn]:Bi,[ui]:ui},f=new Ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:kv,fragmentShader:Fv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ye;m.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ge(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mf;let p=this.type;this.render=function(b,y,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(sn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const R=p!==Ui&&this.type===Ui,k=p===Ui&&this.type!==Ui;for(let X=0,C=b.length;X<C;X++){const B=b[X],z=B.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const K=z.getFrameExtents();if(s.multiply(K),o.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/K.x),s.x=o.x*K.x,z.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/K.y),s.y=o.y*K.y,z.mapSize.y=o.y)),z.map===null||R===!0||k===!0){const rt=this.type!==Ui?{minFilter:on,magFilter:on}:{};z.map!==null&&z.map.dispose(),z.map=new an(s.x,s.y,rt),z.map.texture.name=B.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const Z=z.getViewportCount();for(let rt=0;rt<Z;rt++){const Ct=z.getViewport(rt);r.set(o.x*Ct.x,o.y*Ct.y,o.x*Ct.z,o.y*Ct.w),U.viewport(r),z.updateMatrices(B,rt),n=z.getFrustum(),v(y,E,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Ui&&M(z,E),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,L)};function M(b,y){const E=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new an(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(y,null,E,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(y,null,E,d,x,null)}function _(b,y,E,w){let S=null;const L=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)S=L;else if(S=E.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const U=S.uuid,R=y.uuid;let k=c[U];k===void 0&&(k={},c[U]=k);let X=k[R];X===void 0&&(X=S.clone(),k[R]=X,y.addEventListener("dispose",A)),S=X}if(S.visible=y.visible,S.wireframe=y.wireframe,w===Ui?S.side=y.shadowSide!==null?y.shadowSide:y.side:S.side=y.shadowSide!==null?y.shadowSide:u[y.side],S.alphaMap=y.alphaMap,S.alphaTest=y.alphaTest,S.map=y.map,S.clipShadows=y.clipShadows,S.clippingPlanes=y.clippingPlanes,S.clipIntersection=y.clipIntersection,S.displacementMap=y.displacementMap,S.displacementScale=y.displacementScale,S.displacementBias=y.displacementBias,S.wireframeLinewidth=y.wireframeLinewidth,S.linewidth=y.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=i.properties.get(S);U.light=E}return S}function v(b,y,E,w,S){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Ui)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const R=t.update(b),k=b.material;if(Array.isArray(k)){const X=R.groups;for(let C=0,B=X.length;C<B;C++){const z=X[C],K=k[z.materialIndex];if(K&&K.visible){const Z=_(b,K,w,S);b.onBeforeShadow(i,b,y,E,R,Z,z),i.renderBufferDirect(E,null,R,Z,b,z),b.onAfterShadow(i,b,y,E,R,Z,z)}}}else if(k.visible){const X=_(b,k,w,S);b.onBeforeShadow(i,b,y,E,R,X,null),i.renderBufferDirect(E,null,R,X,b,null),b.onAfterShadow(i,b,y,E,R,X,null)}}const U=b.children;for(let R=0,k=U.length;R<k;R++)v(U[R],y,E,w,S)}function A(b){b.target.removeEventListener("dispose",A);for(const E in c){const w=c[E],S=b.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const Bv={[Ec]:Ac,[Cc]:Dc,[Pc]:Lc,[Po]:Rc,[Ac]:Ec,[Dc]:Cc,[Lc]:Pc,[Rc]:Po};function Hv(i,t){function e(){let O=!1;const yt=new Fe;let J=null;const ot=new Fe(0,0,0,0);return{setMask:function(At){J!==At&&!O&&(i.colorMask(At,At,At,At),J=At)},setLocked:function(At){O=At},setClear:function(At,Tt,le,je,yn){yn===!0&&(At*=je,Tt*=je,le*=je),yt.set(At,Tt,le,je),ot.equals(yt)===!1&&(i.clearColor(At,Tt,le,je),ot.copy(yt))},reset:function(){O=!1,J=null,ot.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,J=null,ot=null,At=null;return{setReversed:function(Tt){if(yt!==Tt){const le=t.get("EXT_clip_control");yt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const je=At;At=null,this.setClear(je)}yt=Tt},getReversed:function(){return yt},setTest:function(Tt){Tt?lt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(Tt){J!==Tt&&!O&&(i.depthMask(Tt),J=Tt)},setFunc:function(Tt){if(yt&&(Tt=Bv[Tt]),ot!==Tt){switch(Tt){case Ec:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Cc:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Pc:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Tt}},setLocked:function(Tt){O=Tt},setClear:function(Tt){At!==Tt&&(yt&&(Tt=1-Tt),i.clearDepth(Tt),At=Tt)},reset:function(){O=!1,J=null,ot=null,At=null,yt=!1}}}function s(){let O=!1,yt=null,J=null,ot=null,At=null,Tt=null,le=null,je=null,yn=null;return{setTest:function(Re){O||(Re?lt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Re){yt!==Re&&!O&&(i.stencilMask(Re),yt=Re)},setFunc:function(Re,oi,Ti){(J!==Re||ot!==oi||At!==Ti)&&(i.stencilFunc(Re,oi,Ti),J=Re,ot=oi,At=Ti)},setOp:function(Re,oi,Ti){(Tt!==Re||le!==oi||je!==Ti)&&(i.stencilOp(Re,oi,Ti),Tt=Re,le=oi,je=Ti)},setLocked:function(Re){O=Re},setClear:function(Re){yn!==Re&&(i.clearStencil(Re),yn=Re)},reset:function(){O=!1,yt=null,J=null,ot=null,At=null,Tt=null,le=null,je=null,yn=null}}}const o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,A=null,b=null,y=new Kt(0,0,0),E=0,w=!1,S=null,L=null,U=null,R=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,B=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(z)[1]),C=B>=1):z.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),C=B>=2);let K=null,Z={};const rt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),qt=new Fe().fromArray(rt),G=new Fe().fromArray(Ct);function tt(O,yt,J,ot){const At=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(O,Tt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<J;le++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(yt+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return Tt}const dt={};dt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),r.setFunc(Po),Qt(!1),Jt(u0),lt(i.CULL_FACE),N(sn);function lt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ct(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function et(O,yt){return u[O]!==yt?(i.bindFramebuffer(O,yt),u[O]=yt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function zt(O,yt){let J=d,ot=!1;if(O){J=f.get(yt),J===void 0&&(J=[],f.set(yt,J));const At=O.textures;if(J.length!==At.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,le=At.length;Tt<le;Tt++)J[Tt]=i.COLOR_ATTACHMENT0+Tt;J.length=At.length,ot=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ot=!0);ot&&i.drawBuffers(J)}function ee(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const Q={[fi]:i.FUNC_ADD,[Jd]:i.FUNC_SUBTRACT,[$d]:i.FUNC_REVERSE_SUBTRACT};Q[tp]=i.MIN,Q[ep]=i.MAX;const vt={[sr]:i.ZERO,[np]:i.ONE,[ip]:i.SRC_COLOR,[bc]:i.SRC_ALPHA,[ap]:i.SRC_ALPHA_SATURATE,[Tc]:i.DST_COLOR,[wc]:i.DST_ALPHA,[sp]:i.ONE_MINUS_SRC_COLOR,[Sc]:i.ONE_MINUS_SRC_ALPHA,[rp]:i.ONE_MINUS_DST_COLOR,[op]:i.ONE_MINUS_DST_ALPHA,[lp]:i.CONSTANT_COLOR,[cp]:i.ONE_MINUS_CONSTANT_COLOR,[hp]:i.CONSTANT_ALPHA,[up]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,yt,J,ot,At,Tt,le,je,yn,Re){if(O===sn){x===!0&&(ct(i.BLEND),x=!1);return}if(x===!1&&(lt(i.BLEND),x=!0),O!==yf){if(O!==g||Re!==w){if((p!==fi||v!==fi)&&(i.blendEquation(i.FUNC_ADD),p=fi,v=fi),Re)switch(O){case ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case f0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case d0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case f0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case d0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,_=null,A=null,b=null,y.set(0,0,0),E=0,g=O,w=Re}return}At=At||yt,Tt=Tt||J,le=le||ot,(yt!==p||At!==v)&&(i.blendEquationSeparate(Q[yt],Q[At]),p=yt,v=At),(J!==M||ot!==_||Tt!==A||le!==b)&&(i.blendFuncSeparate(vt[J],vt[ot],vt[Tt],vt[le]),M=J,_=ot,A=Tt,b=le),(je.equals(y)===!1||yn!==E)&&(i.blendColor(je.r,je.g,je.b,yn),y.copy(je),E=yn),g=O,w=!1}function me(O,yt){O.side===ui?ct(i.CULL_FACE):lt(i.CULL_FACE);let J=O.side===kn;yt&&(J=!J),Qt(J),O.blending===ks&&O.transparent===!1?N(sn):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const ot=O.stencilWrite;a.setTest(ot),ot&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Wt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function Jt(O){O!==Kd?(lt(i.CULL_FACE),O!==L&&(O===u0?i.cullFace(i.BACK):O===Zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),L=O}function Nt(O){O!==U&&(C&&i.lineWidth(O),U=O)}function Wt(O,yt,J){O?(lt(i.POLYGON_OFFSET_FILL),(R!==yt||k!==J)&&(i.polygonOffset(yt,J),R=yt,k=J)):ct(i.POLYGON_OFFSET_FILL)}function Dt(O){O?lt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function I(O){O===void 0&&(O=i.TEXTURE0+X-1),K!==O&&(i.activeTexture(O),K=O)}function T(O,yt,J){J===void 0&&(K===null?J=i.TEXTURE0+X-1:J=K);let ot=Z[J];ot===void 0&&(ot={type:void 0,texture:void 0},Z[J]=ot),(ot.type!==O||ot.texture!==yt)&&(K!==J&&(i.activeTexture(J),K=J),i.bindTexture(O,yt||dt[O]),ot.type=O,ot.texture=yt)}function H(){const O=Z[K];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function it(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $t(O){qt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),qt.copy(O))}function It(O){G.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),G.copy(O))}function ve(O,yt){let J=c.get(yt);J===void 0&&(J=new WeakMap,c.set(yt,J));let ot=J.get(O);ot===void 0&&(ot=i.getUniformBlockIndex(yt,O.name),J.set(O,ot))}function ne(O,yt){const ot=c.get(yt).get(O);l.get(yt)!==ot&&(i.uniformBlockBinding(yt,ot,O.__bindingPointIndex),l.set(yt,ot))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,Z={},u={},f=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,A=null,b=null,y=new Kt(0,0,0),E=0,w=!1,S=null,L=null,U=null,R=null,k=null,qt.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:lt,disable:ct,bindFramebuffer:et,drawBuffers:zt,useProgram:ee,setBlending:N,setMaterial:me,setFlipSided:Qt,setCullFace:Jt,setLineWidth:Nt,setPolygonOffset:Wt,setScissorTest:Dt,activeTexture:I,bindTexture:T,unbindTexture:H,compressedTexImage2D:it,compressedTexImage3D:nt,texImage2D:Rt,texImage3D:jt,updateUBOMapping:ve,uniformBlockBinding:ne,texStorage2D:re,texStorage3D:ht,texSubImage2D:$,texSubImage3D:Pt,compressedTexSubImage2D:gt,compressedTexSubImage3D:_t,scissor:$t,viewport:It,reset:Ee}}function cu(i,t,e,n){const s=Vv(n);switch(e){case Lf:return i*t;case Uf:return i*t;case Nf:return i*t*2;case zf:return i*t/s.components*s.byteLength;case Ch:return i*t/s.components*s.byteLength;case kf:return i*t*2/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case If:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case Rh:return i*t*4/s.components*s.byteLength;case ya:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kc:case Oc:return Math.max(i,16)*Math.max(t,8)/4;case zc:case Fc:return Math.max(i,8)*Math.max(t,8)/2;case Bc:case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Xc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case th:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wa:case ih:case sh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ff:case oh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rh:case ah:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vv(i){switch(i){case Si:case Pf:return{byteLength:1,components:1};case gr:case Rf:case Mn:return{byteLength:2,components:1};case Eh:case Ah:return{byteLength:2,components:4};case Fs:case Th:case Mi:return{byteLength:4,components:1};case Df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Gv(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,T){return d?new OffscreenCanvas(I,T):vr("canvas")}function x(I,T,H){let it=1;const nt=Dt(I);if((nt.width>H||nt.height>H)&&(it=H/Math.max(nt.width,nt.height)),it<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const $=Math.floor(it*nt.width),Pt=Math.floor(it*nt.height);u===void 0&&(u=m($,Pt));const gt=T?m($,Pt):u;return gt.width=$,gt.height=Pt,gt.getContext("2d").drawImage(I,0,0,$,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+Pt+")."),gt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,T,H,it,nt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let $=T;if(T===i.RED&&(H===i.FLOAT&&($=i.R32F),H===i.HALF_FLOAT&&($=i.R16F),H===i.UNSIGNED_BYTE&&($=i.R8)),T===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.R8UI),H===i.UNSIGNED_SHORT&&($=i.R16UI),H===i.UNSIGNED_INT&&($=i.R32UI),H===i.BYTE&&($=i.R8I),H===i.SHORT&&($=i.R16I),H===i.INT&&($=i.R32I)),T===i.RG&&(H===i.FLOAT&&($=i.RG32F),H===i.HALF_FLOAT&&($=i.RG16F),H===i.UNSIGNED_BYTE&&($=i.RG8)),T===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RG8UI),H===i.UNSIGNED_SHORT&&($=i.RG16UI),H===i.UNSIGNED_INT&&($=i.RG32UI),H===i.BYTE&&($=i.RG8I),H===i.SHORT&&($=i.RG16I),H===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGB8UI),H===i.UNSIGNED_SHORT&&($=i.RGB16UI),H===i.UNSIGNED_INT&&($=i.RGB32UI),H===i.BYTE&&($=i.RGB8I),H===i.SHORT&&($=i.RGB16I),H===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&($=i.RGBA8UI),H===i.UNSIGNED_SHORT&&($=i.RGBA16UI),H===i.UNSIGNED_INT&&($=i.RGBA32UI),H===i.BYTE&&($=i.RGBA8I),H===i.SHORT&&($=i.RGBA16I),H===i.INT&&($=i.RGBA32I)),T===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),T===i.RGBA){const Pt=nt?Wa:we.getTransfer(it);H===i.FLOAT&&($=i.RGBA32F),H===i.HALF_FLOAT&&($=i.RGBA16F),H===i.UNSIGNED_BYTE&&($=Pt===De?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(I,T){let H;return I?T===null||T===Fs||T===Os?H=i.DEPTH24_STENCIL8:T===Mi?H=i.DEPTH32F_STENCIL8:T===gr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Fs||T===Os?H=i.DEPTH_COMPONENT24:T===Mi?H=i.DEPTH_COMPONENT32F:T===gr&&(H=i.DEPTH_COMPONENT16),H}function A(I,T){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==on&&I.minFilter!==ti?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function b(I){const T=I.target;T.removeEventListener("dispose",b),E(T),T.isVideoTexture&&h.delete(T)}function y(I){const T=I.target;T.removeEventListener("dispose",y),S(T)}function E(I){const T=n.get(I);if(T.__webglInit===void 0)return;const H=I.source,it=f.get(H);if(it){const nt=it[T.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&w(I),Object.keys(it).length===0&&f.delete(H)}n.remove(I)}function w(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const H=I.source,it=f.get(H);delete it[T.__cacheKey],r.memory.textures--}function S(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let nt=0;nt<T.__webglFramebuffer[it].length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[it][nt]);else i.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)i.deleteFramebuffer(T.__webglFramebuffer[it]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const H=I.textures;for(let it=0,nt=H.length;it<nt;it++){const $=n.get(H[it]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(H[it])}n.remove(I)}let L=0;function U(){L=0}function R(){const I=L;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function k(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function X(I,T){const H=n.get(I);if(I.isVideoTexture&&Nt(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const it=I.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(H,I,T);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+T)}function C(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){G(H,I,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+T)}function B(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){G(H,I,T);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+T)}function z(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){tt(H,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+T)}const K={[cs]:i.REPEAT,[Us]:i.CLAMP_TO_EDGE,[Nc]:i.MIRRORED_REPEAT},Z={[on]:i.NEAREST,[gp]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[il]:i.LINEAR_MIPMAP_NEAREST,[Ns]:i.LINEAR_MIPMAP_LINEAR},rt={[yp]:i.NEVER,[Ep]:i.ALWAYS,[_p]:i.LESS,[Bf]:i.LEQUAL,[bp]:i.EQUAL,[Tp]:i.GEQUAL,[Sp]:i.GREATER,[wp]:i.NOTEQUAL};function Ct(I,T){if(T.type===Mi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ti||T.magFilter===il||T.magFilter===Pr||T.magFilter===Ns||T.minFilter===ti||T.minFilter===il||T.minFilter===Pr||T.minFilter===Ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,K[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,K[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,K[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Z[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Z[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,rt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===on||T.minFilter!==Pr&&T.minFilter!==Ns||T.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function qt(I,T){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",b));const it=T.source;let nt=f.get(it);nt===void 0&&(nt={},f.set(it,nt));const $=k(T);if($!==I.__cacheKey){nt[$]===void 0&&(nt[$]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),nt[$].usedTimes++;const Pt=nt[I.__cacheKey];Pt!==void 0&&(nt[I.__cacheKey].usedTimes--,Pt.usedTimes===0&&w(T)),I.__cacheKey=$,I.__webglTexture=nt[$].texture}return H}function G(I,T,H){let it=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=i.TEXTURE_3D);const nt=qt(I,T),$=T.source;e.bindTexture(it,I.__webglTexture,i.TEXTURE0+H);const Pt=n.get($);if($.version!==Pt.__version||nt===!0){e.activeTexture(i.TEXTURE0+H);const gt=we.getPrimaries(we.workingColorSpace),_t=T.colorSpace===zi?null:we.getPrimaries(T.colorSpace),re=T.colorSpace===zi||gt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ht=x(T.image,!1,s.maxTextureSize);ht=Wt(T,ht);const Rt=o.convert(T.format,T.colorSpace),jt=o.convert(T.type);let $t=_(T.internalFormat,Rt,jt,T.colorSpace,T.isVideoTexture);Ct(it,T);let It;const ve=T.mipmaps,ne=T.isVideoTexture!==!0,Ee=Pt.__version===void 0||nt===!0,O=$.dataReady,yt=A(T,ht);if(T.isDepthTexture)$t=v(T.format===Bs,T.type),Ee&&(ne?e.texStorage2D(i.TEXTURE_2D,1,$t,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,$t,ht.width,ht.height,0,Rt,jt,null));else if(T.isDataTexture)if(ve.length>0){ne&&Ee&&e.texStorage2D(i.TEXTURE_2D,yt,$t,ve[0].width,ve[0].height);for(let J=0,ot=ve.length;J<ot;J++)It=ve[J],ne?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,It.width,It.height,Rt,jt,It.data):e.texImage2D(i.TEXTURE_2D,J,$t,It.width,It.height,0,Rt,jt,It.data);T.generateMipmaps=!1}else ne?(Ee&&e.texStorage2D(i.TEXTURE_2D,yt,$t,ht.width,ht.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,Rt,jt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,$t,ht.width,ht.height,0,Rt,jt,ht.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,$t,ve[0].width,ve[0].height,ht.depth);for(let J=0,ot=ve.length;J<ot;J++)if(It=ve[J],T.format!==Wn)if(Rt!==null)if(ne){if(O)if(T.layerUpdates.size>0){const At=cu(It.width,It.height,T.format,T.type);for(const Tt of T.layerUpdates){const le=It.data.subarray(Tt*At/It.data.BYTES_PER_ELEMENT,(Tt+1)*At/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Tt,It.width,It.height,1,Rt,le)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,It.width,It.height,ht.depth,Rt,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,$t,It.width,It.height,ht.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,It.width,It.height,ht.depth,Rt,jt,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,$t,It.width,It.height,ht.depth,0,Rt,jt,It.data)}else{ne&&Ee&&e.texStorage2D(i.TEXTURE_2D,yt,$t,ve[0].width,ve[0].height);for(let J=0,ot=ve.length;J<ot;J++)It=ve[J],T.format!==Wn?Rt!==null?ne?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,It.width,It.height,Rt,It.data):e.compressedTexImage2D(i.TEXTURE_2D,J,$t,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,It.width,It.height,Rt,jt,It.data):e.texImage2D(i.TEXTURE_2D,J,$t,It.width,It.height,0,Rt,jt,It.data)}else if(T.isDataArrayTexture)if(ne){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,$t,ht.width,ht.height,ht.depth),O)if(T.layerUpdates.size>0){const J=cu(ht.width,ht.height,T.format,T.type);for(const ot of T.layerUpdates){const At=ht.data.subarray(ot*J/ht.data.BYTES_PER_ELEMENT,(ot+1)*J/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,ht.width,ht.height,1,Rt,jt,At)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Rt,jt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,ht.width,ht.height,ht.depth,0,Rt,jt,ht.data);else if(T.isData3DTexture)ne?(Ee&&e.texStorage3D(i.TEXTURE_3D,yt,$t,ht.width,ht.height,ht.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Rt,jt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,$t,ht.width,ht.height,ht.depth,0,Rt,jt,ht.data);else if(T.isFramebufferTexture){if(Ee)if(ne)e.texStorage2D(i.TEXTURE_2D,yt,$t,ht.width,ht.height);else{let J=ht.width,ot=ht.height;for(let At=0;At<yt;At++)e.texImage2D(i.TEXTURE_2D,At,$t,J,ot,0,Rt,jt,null),J>>=1,ot>>=1}}else if(ve.length>0){if(ne&&Ee){const J=Dt(ve[0]);e.texStorage2D(i.TEXTURE_2D,yt,$t,J.width,J.height)}for(let J=0,ot=ve.length;J<ot;J++)It=ve[J],ne?O&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Rt,jt,It):e.texImage2D(i.TEXTURE_2D,J,$t,Rt,jt,It);T.generateMipmaps=!1}else if(ne){if(Ee){const J=Dt(ht);e.texStorage2D(i.TEXTURE_2D,yt,$t,J.width,J.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,jt,ht)}else e.texImage2D(i.TEXTURE_2D,0,$t,Rt,jt,ht);g(T)&&p(it),Pt.__version=$.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function tt(I,T,H){if(T.image.length!==6)return;const it=qt(I,T),nt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const $=n.get(nt);if(nt.version!==$.__version||it===!0){e.activeTexture(i.TEXTURE0+H);const Pt=we.getPrimaries(we.workingColorSpace),gt=T.colorSpace===zi?null:we.getPrimaries(T.colorSpace),_t=T.colorSpace===zi||Pt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const re=T.isCompressedTexture||T.image[0].isCompressedTexture,ht=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let ot=0;ot<6;ot++)!re&&!ht?Rt[ot]=x(T.image[ot],!0,s.maxCubemapSize):Rt[ot]=ht?T.image[ot].image:T.image[ot],Rt[ot]=Wt(T,Rt[ot]);const jt=Rt[0],$t=o.convert(T.format,T.colorSpace),It=o.convert(T.type),ve=_(T.internalFormat,$t,It,T.colorSpace),ne=T.isVideoTexture!==!0,Ee=$.__version===void 0||it===!0,O=nt.dataReady;let yt=A(T,jt);Ct(i.TEXTURE_CUBE_MAP,T);let J;if(re){ne&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ve,jt.width,jt.height);for(let ot=0;ot<6;ot++){J=Rt[ot].mipmaps;for(let At=0;At<J.length;At++){const Tt=J[At];T.format!==Wn?$t!==null?ne?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Tt.width,Tt.height,$t,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,ve,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,0,0,Tt.width,Tt.height,$t,It,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At,ve,Tt.width,Tt.height,0,$t,It,Tt.data)}}}else{if(J=T.mipmaps,ne&&Ee){J.length>0&&yt++;const ot=Dt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ve,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ht){ne?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Rt[ot].width,Rt[ot].height,$t,It,Rt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ve,Rt[ot].width,Rt[ot].height,0,$t,It,Rt[ot].data);for(let At=0;At<J.length;At++){const le=J[At].image[ot].image;ne?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,le.width,le.height,$t,It,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,ve,le.width,le.height,0,$t,It,le.data)}}else{ne?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,$t,It,Rt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ve,$t,It,Rt[ot]);for(let At=0;At<J.length;At++){const Tt=J[At];ne?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,0,0,$t,It,Tt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At+1,ve,$t,It,Tt.image[ot])}}}g(T)&&p(i.TEXTURE_CUBE_MAP),$.__version=nt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function dt(I,T,H,it,nt,$){const Pt=o.convert(H.format,H.colorSpace),gt=o.convert(H.type),_t=_(H.internalFormat,Pt,gt,H.colorSpace),re=n.get(T),ht=n.get(H);if(ht.__renderTarget=T,!re.__hasExternalTextures){const Rt=Math.max(1,T.width>>$),jt=Math.max(1,T.height>>$);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,_t,Rt,jt,T.depth,0,Pt,gt,null):e.texImage2D(nt,$,_t,Rt,jt,0,Pt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,nt,ht.__webglTexture,0,Qt(T)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,nt,ht.__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,T,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const it=T.depthTexture,nt=it&&it.isDepthTexture?it.type:null,$=v(T.stencilBuffer,nt),Pt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=Qt(T);Jt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,$,T.width,T.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,I)}else{const it=T.textures;for(let nt=0;nt<it.length;nt++){const $=it[nt],Pt=o.convert($.format,$.colorSpace),gt=o.convert($.type),_t=_($.internalFormat,Pt,gt,$.colorSpace),re=Qt(T);H&&Jt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,_t,T.width,T.height):Jt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,_t,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,_t,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(T.depthTexture);it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const nt=it.__webglTexture,$=Qt(T);if(T.depthTexture.format===bo)Jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(T.depthTexture.format===Bs)Jt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function et(I){const T=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const it=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),it){const nt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,it.removeEventListener("dispose",nt)};it.addEventListener("dispose",nt),T.__depthDisposeCallback=nt}T.__boundDepthTexture=it}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ct(T.__webglFramebuffer,I)}else if(H){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]===void 0)T.__webglDepthbuffer[it]=i.createRenderbuffer(),lt(T.__webglDepthbuffer[it],I,!1);else{const nt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,$)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),lt(T.__webglDepthbuffer,I,!1);else{const it=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(I,T,H){const it=n.get(I);T!==void 0&&dt(it.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&et(I)}function ee(I){const T=I.texture,H=n.get(I),it=n.get(T);I.addEventListener("dispose",y);const nt=I.textures,$=I.isWebGLCubeRenderTarget===!0,Pt=nt.length>1;if(Pt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=T.version,r.memory.textures++),$){H.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[gt]=[];for(let _t=0;_t<T.mipmaps.length;_t++)H.__webglFramebuffer[gt][_t]=i.createFramebuffer()}else H.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let gt=0;gt<T.mipmaps.length;gt++)H.__webglFramebuffer[gt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let gt=0,_t=nt.length;gt<_t;gt++){const re=n.get(nt[gt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&Jt(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const _t=nt[gt];H.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[gt]);const re=o.convert(_t.format,_t.colorSpace),ht=o.convert(_t.type),Rt=_(_t.internalFormat,re,ht,_t.colorSpace,I.isXRRenderTarget===!0),jt=Qt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Rt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,H.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,T);for(let gt=0;gt<6;gt++)if(T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)dt(H.__webglFramebuffer[gt][_t],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,_t);else dt(H.__webglFramebuffer[gt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);g(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let gt=0,_t=nt.length;gt<_t;gt++){const re=nt[gt],ht=n.get(re);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Ct(i.TEXTURE_2D,re),dt(H.__webglFramebuffer,I,re,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),g(re)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,it.__webglTexture),Ct(gt,T),T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)dt(H.__webglFramebuffer[_t],I,T,i.COLOR_ATTACHMENT0,gt,_t);else dt(H.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,gt,0);g(T)&&p(gt),e.unbindTexture()}I.depthBuffer&&et(I)}function Q(I){const T=I.textures;for(let H=0,it=T.length;H<it;H++){const nt=T[H];if(g(nt)){const $=M(I),Pt=n.get(nt).__webglTexture;e.bindTexture($,Pt),p($),e.unbindTexture()}}}const vt=[],N=[];function me(I){if(I.samples>0){if(Jt(I)===!1){const T=I.textures,H=I.width,it=I.height;let nt=i.COLOR_BUFFER_BIT;const $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(I),gt=T.length>1;if(gt)for(let _t=0;_t<T.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let _t=0;_t<T.length;_t++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[_t]);const re=n.get(T[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,H,it,0,0,H,it,nt,i.NEAREST),l===!0&&(vt.length=0,N.length=0,vt.push(i.COLOR_ATTACHMENT0+_t),I.depthBuffer&&I.resolveDepthBuffer===!1&&(vt.push($),N.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let _t=0;_t<T.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[_t]);const re=n.get(T[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function Qt(I){return Math.min(s.maxSamples,I.samples)}function Jt(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Nt(I){const T=r.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Wt(I,T){const H=I.colorSpace,it=I.format,nt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Uo&&H!==zi&&(we.getTransfer(H)===De?(it!==Wn||nt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}function Dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=R,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=C,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=zt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Jt}function Wv(i,t){function e(n,s=zi){let o;const r=we.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pf)return i.BYTE;if(n===Rf)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===Fs)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Lf)return i.ALPHA;if(n===If)return i.RGB;if(n===Wn)return i.RGBA;if(n===Uf)return i.LUMINANCE;if(n===Nf)return i.LUMINANCE_ALPHA;if(n===bo)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===zf)return i.RED;if(n===Ch)return i.RED_INTEGER;if(n===kf)return i.RG;if(n===Ph)return i.RG_INTEGER;if(n===Rh)return i.RGBA_INTEGER;if(n===ya||n===_a||n===ba||n===Sa)if(r===De)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ya)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ya)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ba)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===kc||n===Fc||n===Oc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===zc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===Hc||n===Vc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Bc||n===Hc)return r===De?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Vc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===jc||n===Kc||n===Zc||n===Qc||n===Jc||n===$c||n===th||n===eh||n===nh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Gc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jc)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===th)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return r===De?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===ih||n===sh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===wa)return r===De?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ff||n===oh||n===rh||n===ah)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===wa)return o.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Xv extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Te extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qv={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Yv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new rn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ue({vertexShader:Yv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zv extends No{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=new Kv,g=e.getContextAttributes();let p=null,M=null;const _=[],v=[],A=new mt;let b=null;const y=new Gn;y.viewport=new Fe;const E=new Gn;E.viewport=new Fe;const w=[y,E],S=new Xv;let L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let tt=_[G];return tt===void 0&&(tt=new Rl,_[G]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(G){let tt=_[G];return tt===void 0&&(tt=new Rl,_[G]=tt),tt.getGripSpace()},this.getHand=function(G){let tt=_[G];return tt===void 0&&(tt=new Rl,_[G]=tt),tt.getHandSpace()};function R(G){const tt=v.indexOf(G.inputSource);if(tt===-1)return;const dt=_[tt];dt!==void 0&&(dt.update(G.inputSource,G.frame,c||r),dt.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){s.removeEventListener("select",R),s.removeEventListener("selectstart",R),s.removeEventListener("selectend",R),s.removeEventListener("squeeze",R),s.removeEventListener("squeezestart",R),s.removeEventListener("squeezeend",R),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",X);for(let G=0;G<_.length;G++){const tt=v[G];tt!==null&&(v[G]=null,_[G].disconnect(tt))}L=null,U=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,M=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",R),s.addEventListener("selectstart",R),s.addEventListener("selectend",R),s.addEventListener("squeeze",R),s.addEventListener("squeezestart",R),s.addEventListener("squeezeend",R),s.addEventListener("end",k),s.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new an(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,dt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Bs:bo,dt=g.stencil?Os:Fs);const ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new an(f.textureWidth,f.textureHeight,{format:Wn,type:Si,depthTexture:new Ih(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(G){for(let tt=0;tt<G.removed.length;tt++){const dt=G.removed[tt],lt=v.indexOf(dt);lt>=0&&(v[lt]=null,_[lt].disconnect(dt))}for(let tt=0;tt<G.added.length;tt++){const dt=G.added[tt];let lt=v.indexOf(dt);if(lt===-1){for(let et=0;et<_.length;et++)if(et>=v.length){v.push(dt),lt=et;break}else if(v[et]===null){v[et]=dt,lt=et;break}if(lt===-1)break}const ct=_[lt];ct&&ct.connect(dt)}}const C=new D,B=new D;function z(G,tt,dt){C.setFromMatrixPosition(tt.matrixWorld),B.setFromMatrixPosition(dt.matrixWorld);const lt=C.distanceTo(B),ct=tt.projectionMatrix.elements,et=dt.projectionMatrix.elements,zt=ct[14]/(ct[10]-1),ee=ct[14]/(ct[10]+1),Q=(ct[9]+1)/ct[5],vt=(ct[9]-1)/ct[5],N=(ct[8]-1)/ct[0],me=(et[8]+1)/et[0],Qt=zt*N,Jt=zt*me,Nt=lt/(-N+me),Wt=Nt*-N;if(tt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Wt),G.translateZ(Nt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ct[10]===-1)G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Dt=zt+Nt,I=ee+Nt,T=Qt-Wt,H=Jt+(lt-Wt),it=Q*ee/I*Dt,nt=vt*ee/I*Dt;G.projectionMatrix.makePerspective(T,H,it,nt,Dt,I),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function K(G,tt){tt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(tt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let tt=G.near,dt=G.far;x.texture!==null&&(x.depthNear>0&&(tt=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),S.near=E.near=y.near=tt,S.far=E.far=y.far=dt,(L!==S.near||U!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,U=S.far),y.layers.mask=G.layers.mask|2,E.layers.mask=G.layers.mask|4,S.layers.mask=y.layers.mask|E.layers.mask;const lt=G.parent,ct=S.cameras;K(S,lt);for(let et=0;et<ct.length;et++)K(ct[et],lt);ct.length===2?z(S,y,E):S.projectionMatrix.copy(y.projectionMatrix),Z(G,S,lt)};function Z(G,tt,dt){dt===null?G.matrix.copy(tt.matrixWorld):(G.matrix.copy(dt.matrixWorld),G.matrix.invert(),G.matrix.multiply(tt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(tt.projectionMatrix),G.projectionMatrixInverse.copy(tt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=xr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let rt=null;function Ct(G,tt){if(h=tt.getViewerPose(c||r),m=tt,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let lt=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let et=0;et<dt.length;et++){const zt=dt[et];let ee=null;if(d!==null)ee=d.getViewport(zt);else{const vt=u.getViewSubImage(f,zt);ee=vt.viewport,et===0&&(t.setRenderTargetTextures(M,vt.colorTexture,f.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(M))}let Q=w[et];Q===void 0&&(Q=new Gn,Q.layers.enable(et),Q.viewport=new Fe,w[et]=Q),Q.matrix.fromArray(zt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(zt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),et===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(Q)}const ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")){const et=u.getDepthInformation(dt[0]);et&&et.isValid&&et.texture&&x.init(t,et,s.renderState)}}for(let dt=0;dt<_.length;dt++){const lt=v[dt],ct=_[dt];lt!==null&&ct!==void 0&&ct.update(lt,tt,c||r)}rt&&rt(G,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}const qt=new Qf;qt.setAnimationLoop(Ct),this.setAnimationLoop=function(G){rt=G},this.dispose=function(){}}}const Ms=new pi,Qv=new ie;function Jv(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Yf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),x(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===kn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===kn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),g.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(Ms)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $v(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){const v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));const A=_.program;n.updateUBOMapping(M,A);const b=t.render.frame;o[M.id]!==b&&(f(M),o[M.id]=b)}function h(M){const _=u();M.__bindingPointIndex=_;const v=i.createBuffer(),A=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=s[M.id],v=M.uniforms,A=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,y=v.length;b<y;b++){const E=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,S=E.length;w<S;w++){const L=E[w];if(d(L,b,w,A)===!0){const U=L.__offset,R=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let X=0;X<R.length;X++){const C=R[X],B=x(C);typeof C=="number"||typeof C=="boolean"?(L.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,U+k,L.__data)):C.isMatrix3?(L.__data[0]=C.elements[0],L.__data[1]=C.elements[1],L.__data[2]=C.elements[2],L.__data[3]=0,L.__data[4]=C.elements[3],L.__data[5]=C.elements[4],L.__data[6]=C.elements[5],L.__data[7]=0,L.__data[8]=C.elements[6],L.__data[9]=C.elements[7],L.__data[10]=C.elements[8],L.__data[11]=0):(C.toArray(L.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,v,A){const b=M.value,y=_+"_"+v;if(A[y]===void 0)return typeof b=="number"||typeof b=="boolean"?A[y]=b:A[y]=b.clone(),!0;{const E=A[y];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return A[y]=b,!0}else if(E.equals(b)===!1)return E.copy(b),!0}return!1}function m(M){const _=M.uniforms;let v=0;const A=16;for(let y=0,E=_.length;y<E;y++){const w=Array.isArray(_[y])?_[y]:[_[y]];for(let S=0,L=w.length;S<L;S++){const U=w[S],R=Array.isArray(U.value)?U.value:[U.value];for(let k=0,X=R.length;k<X;k++){const C=R[k],B=x(C),z=v%A,K=z%B.boundary,Z=z+K;v+=K,Z!==0&&A-Z<B.storage&&(v+=A-Z),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=B.storage}}}const b=v%A;return b>0&&(v+=A-b),M.__size=v,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){const _=M.target;_.removeEventListener("dispose",g);const v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}class t2{constructor(t={}){const{canvas:e=Gp(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=os,this.toneMappingExposure=1;const v=this;let A=!1,b=0,y=0,E=null,w=-1,S=null;const L=new Fe,U=new Fe;let R=null;const k=new Kt(0);let X=0,C=e.width,B=e.height,z=1,K=null,Z=null;const rt=new Fe(0,0,C,B),Ct=new Fe(0,0,C,B);let qt=!1;const G=new Zf;let tt=!1,dt=!1;const lt=new ie,ct=new ie,et=new D,zt=new Fe,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function vt(){return E===null?z:1}let N=n;function me(P,V){return e.getContext(P,V)}try{const P={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wh}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),N===null){const V="webgl2";if(N=me(V,P),N===null)throw me(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Qt,Jt,Nt,Wt,Dt,I,T,H,it,nt,$,Pt,gt,_t,re,ht,Rt,jt,$t,It,ve,ne,Ee,O;function yt(){Qt=new ox(N),Qt.init(),ne=new Wv(N,Qt),Jt=new $g(N,Qt,t,ne),Nt=new Hv(N,Qt),Jt.reverseDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),Wt=new lx(N),Dt=new Ev,I=new Gv(N,Qt,Nt,Dt,Jt,ne,Wt),T=new ex(v),H=new sx(v),it=new mm(N),Ee=new Qg(N,it),nt=new rx(N,it,Wt,Ee),$=new hx(N,nt,it,Wt),$t=new cx(N,Jt,I),ht=new tx(Dt),Pt=new Tv(v,T,H,Qt,Jt,Ee,ht),gt=new Jv(v,Dt),_t=new Cv,re=new Uv(Qt),jt=new Zg(v,T,H,Nt,$,d,l),Rt=new Ov(v,$,Jt),O=new $v(N,Wt,Jt,Nt),It=new Jg(N,Qt,Wt),ve=new ax(N,Qt,Wt),Wt.programs=Pt.programs,v.capabilities=Jt,v.extensions=Qt,v.properties=Dt,v.renderLists=_t,v.shadowMap=Rt,v.state=Nt,v.info=Wt}yt();const J=new Zv(v,N);this.xr=J,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=Qt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Qt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(C,B,!1))},this.getSize=function(P){return P.set(C,B)},this.setSize=function(P,V,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=P,B=V,e.width=Math.floor(P*z),e.height=Math.floor(V*z),Y===!0&&(e.style.width=P+"px",e.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(C*z,B*z).floor()},this.setDrawingBufferSize=function(P,V,Y){C=P,B=V,z=Y,e.width=Math.floor(P*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(rt)},this.setViewport=function(P,V,Y,j){P.isVector4?rt.set(P.x,P.y,P.z,P.w):rt.set(P,V,Y,j),Nt.viewport(L.copy(rt).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(Ct)},this.setScissor=function(P,V,Y,j){P.isVector4?Ct.set(P.x,P.y,P.z,P.w):Ct.set(P,V,Y,j),Nt.scissor(U.copy(Ct).multiplyScalar(z).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(P){Nt.setScissorTest(qt=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(P=!0,V=!0,Y=!0){let j=0;if(P){let W=!1;if(E!==null){const pt=E.texture.format;W=pt===Rh||pt===Ph||pt===Ch}if(W){const pt=E.texture.type,Et=pt===Si||pt===Fs||pt===gr||pt===Os||pt===Eh||pt===Ah,kt=jt.getClearColor(),Ft=jt.getClearAlpha(),se=kt.r,ce=kt.g,Ot=kt.b;Et?(m[0]=se,m[1]=ce,m[2]=Ot,m[3]=Ft,N.clearBufferuiv(N.COLOR,0,m)):(x[0]=se,x[1]=ce,x[2]=Ot,x[3]=Ft,N.clearBufferiv(N.COLOR,0,x))}else j|=N.COLOR_BUFFER_BIT}V&&(j|=N.DEPTH_BUFFER_BIT),Y&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),_t.dispose(),re.dispose(),Dt.dispose(),T.dispose(),H.dispose(),$.dispose(),Ee.dispose(),O.dispose(),Pt.dispose(),J.dispose(),J.removeEventListener("sessionstart",i0),J.removeEventListener("sessionend",s0),ds.stop()};function ot(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Wt.autoReset,V=Rt.enabled,Y=Rt.autoUpdate,j=Rt.needsUpdate,W=Rt.type;yt(),Wt.autoReset=P,Rt.enabled=V,Rt.autoUpdate=Y,Rt.needsUpdate=j,Rt.type=W}function Tt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function le(P){const V=P.target;V.removeEventListener("dispose",le),je(V)}function je(P){yn(P),Dt.remove(P)}function yn(P){const V=Dt.get(P).programs;V!==void 0&&(V.forEach(function(Y){Pt.releaseProgram(Y)}),P.isShaderMaterial&&Pt.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,Y,j,W,pt){V===null&&(V=ee);const Et=W.isMesh&&W.matrixWorld.determinant()<0,kt=qd(P,V,Y,j,W);Nt.setMaterial(j,Et);let Ft=Y.index,se=1;if(j.wireframe===!0){if(Ft=nt.getWireframeAttribute(Y),Ft===void 0)return;se=2}const ce=Y.drawRange,Ot=Y.attributes.position;let Ae=ce.start*se,ke=(ce.start+ce.count)*se;pt!==null&&(Ae=Math.max(Ae,pt.start*se),ke=Math.min(ke,(pt.start+pt.count)*se)),Ft!==null?(Ae=Math.max(Ae,0),ke=Math.min(ke,Ft.count)):Ot!=null&&(Ae=Math.max(Ae,0),ke=Math.min(ke,Ot.count));const Be=ke-Ae;if(Be<0||Be===1/0)return;Ee.setup(W,j,kt,Y,Ft);let Ln,Ce=It;if(Ft!==null&&(Ln=it.get(Ft),Ce=ve,Ce.setIndex(Ln)),W.isMesh)j.wireframe===!0?(Nt.setLineWidth(j.wireframeLinewidth*vt()),Ce.setMode(N.LINES)):Ce.setMode(N.TRIANGLES);else if(W.isLine){let Ht=j.linewidth;Ht===void 0&&(Ht=1),Nt.setLineWidth(Ht*vt()),W.isLineSegments?Ce.setMode(N.LINES):W.isLineLoop?Ce.setMode(N.LINE_LOOP):Ce.setMode(N.LINE_STRIP)}else W.isPoints?Ce.setMode(N.POINTS):W.isSprite&&Ce.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Ce.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ht=W._multiDrawStarts,Ei=W._multiDrawCounts,Pe=W._multiDrawCount,ri=Ft?it.get(Ft).bytesPerElement:1,Ys=Dt.get(j).currentProgram.getUniforms();for(let On=0;On<Pe;On++)Ys.setValue(N,"_gl_DrawID",On),Ce.render(Ht[On]/ri,Ei[On])}else if(W.isInstancedMesh)Ce.renderInstances(Ae,Be,W.count);else if(Y.isInstancedBufferGeometry){const Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ei=Math.min(Y.instanceCount,Ht);Ce.renderInstances(Ae,Be,Ei)}else Ce.render(Ae,Be)};function Re(P,V,Y){P.transparent===!0&&P.side===ui&&P.forceSinglePass===!1?(P.side=kn,P.needsUpdate=!0,Cr(P,V,Y),P.side=Bi,P.needsUpdate=!0,Cr(P,V,Y),P.side=ui):Cr(P,V,Y)}this.compile=function(P,V,Y=null){Y===null&&(Y=P),p=re.get(Y),p.init(V),_.push(p),Y.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),P!==Y&&P.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const j=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const pt=W.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const kt=pt[Et];Re(kt,Y,W),j.add(kt)}else Re(pt,Y,W),j.add(pt)}),_.pop(),p=null,j},this.compileAsync=function(P,V,Y=null){const j=this.compile(P,V,Y);return new Promise(W=>{function pt(){if(j.forEach(function(Et){Dt.get(Et).currentProgram.isReady()&&j.delete(Et)}),j.size===0){W(P);return}setTimeout(pt,10)}Qt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let oi=null;function Ti(P){oi&&oi(P)}function i0(){ds.stop()}function s0(){ds.start()}const ds=new Qf;ds.setAnimationLoop(Ti),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(P){oi=P,J.setAnimationLoop(P),P===null?ds.stop():ds.start()},J.addEventListener("sessionstart",i0),J.addEventListener("sessionend",s0),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(V),V=J.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,V,E),p=re.get(P,_.length),p.init(V),_.push(p),ct.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),G.setFromProjectionMatrix(ct),dt=this.localClippingEnabled,tt=ht.init(this.clippingPlanes,dt),g=_t.get(P,M.length),g.init(),M.push(g),J.enabled===!0&&J.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&nl(pt,V,-1/0,v.sortObjects)}nl(P,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(K,Z),Q=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Q&&jt.addToRenderList(g,P),this.info.render.frame++,tt===!0&&ht.beginShadows();const Y=p.state.shadowsArray;Rt.render(Y,P,V),tt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,W=g.transmissive;if(p.setupLights(),V.isArrayCamera){const pt=V.cameras;if(W.length>0)for(let Et=0,kt=pt.length;Et<kt;Et++){const Ft=pt[Et];r0(j,W,P,Ft)}Q&&jt.render(P);for(let Et=0,kt=pt.length;Et<kt;Et++){const Ft=pt[Et];o0(g,P,Ft,Ft.viewport)}}else W.length>0&&r0(j,W,P,V),Q&&jt.render(P),o0(g,P,V);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(v,P,V),Ee.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(p=_[_.length-1],tt===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function nl(P,V,Y,j){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){j&&zt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ct);const Et=$.update(P),kt=P.material;kt.visible&&g.push(P,Et,kt,Y,zt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){const Et=$.update(P),kt=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),zt.copy(P.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),zt.copy(Et.boundingSphere.center)),zt.applyMatrix4(P.matrixWorld).applyMatrix4(ct)),Array.isArray(kt)){const Ft=Et.groups;for(let se=0,ce=Ft.length;se<ce;se++){const Ot=Ft[se],Ae=kt[Ot.materialIndex];Ae&&Ae.visible&&g.push(P,Et,Ae,Y,zt.z,Ot)}}else kt.visible&&g.push(P,Et,kt,Y,zt.z,null)}}const pt=P.children;for(let Et=0,kt=pt.length;Et<kt;Et++)nl(pt[Et],V,Y,j)}function o0(P,V,Y,j){const W=P.opaque,pt=P.transmissive,Et=P.transparent;p.setupLightsView(Y),tt===!0&&ht.setGlobalState(v.clippingPlanes,Y),j&&Nt.viewport(L.copy(j)),W.length>0&&Ar(W,V,Y),pt.length>0&&Ar(pt,V,Y),Et.length>0&&Ar(Et,V,Y),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function r0(P,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new an(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?Mn:Si,minFilter:Ns,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const pt=p.state.transmissionRenderTarget[j.id],Et=j.viewport||L;pt.setSize(Et.z,Et.w);const kt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(k),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Q&&jt.render(Y);const Ft=v.toneMapping;v.toneMapping=os;const se=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),tt===!0&&ht.setGlobalState(v.clippingPlanes,j),Ar(P,Y,j),I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ot=0,Ae=V.length;Ot<Ae;Ot++){const ke=V[Ot],Be=ke.object,Ln=ke.geometry,Ce=ke.material,Ht=ke.group;if(Ce.side===ui&&Be.layers.test(j.layers)){const Ei=Ce.side;Ce.side=kn,Ce.needsUpdate=!0,a0(Be,Y,j,Ln,Ce,Ht),Ce.side=Ei,Ce.needsUpdate=!0,ce=!0}}ce===!0&&(I.updateMultisampleRenderTarget(pt),I.updateRenderTargetMipmap(pt))}v.setRenderTarget(kt),v.setClearColor(k,X),se!==void 0&&(j.viewport=se),v.toneMapping=Ft}function Ar(P,V,Y){const j=V.isScene===!0?V.overrideMaterial:null;for(let W=0,pt=P.length;W<pt;W++){const Et=P[W],kt=Et.object,Ft=Et.geometry,se=j===null?Et.material:j,ce=Et.group;kt.layers.test(Y.layers)&&a0(kt,V,Y,Ft,se,ce)}}function a0(P,V,Y,j,W,pt){P.onBeforeRender(v,V,Y,j,W,pt),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(v,V,Y,j,P,pt),W.transparent===!0&&W.side===ui&&W.forceSinglePass===!1?(W.side=kn,W.needsUpdate=!0,v.renderBufferDirect(Y,V,j,W,P,pt),W.side=Bi,W.needsUpdate=!0,v.renderBufferDirect(Y,V,j,W,P,pt),W.side=ui):v.renderBufferDirect(Y,V,j,W,P,pt),P.onAfterRender(v,V,Y,j,W,pt)}function Cr(P,V,Y){V.isScene!==!0&&(V=ee);const j=Dt.get(P),W=p.state.lights,pt=p.state.shadowsArray,Et=W.state.version,kt=Pt.getParameters(P,W.state,pt,V,Y),Ft=Pt.getProgramCacheKey(kt);let se=j.programs;j.environment=P.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(P.isMeshStandardMaterial?H:T).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,se===void 0&&(P.addEventListener("dispose",le),se=new Map,j.programs=se);let ce=se.get(Ft);if(ce!==void 0){if(j.currentProgram===ce&&j.lightsStateVersion===Et)return c0(P,kt),ce}else kt.uniforms=Pt.getUniforms(P),P.onBeforeCompile(kt,v),ce=Pt.acquireProgram(kt,Ft),se.set(Ft,ce),j.uniforms=kt.uniforms;const Ot=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ot.clippingPlanes=ht.uniform),c0(P,kt),j.needsLights=jd(P),j.lightsStateVersion=Et,j.needsLights&&(Ot.ambientLightColor.value=W.state.ambient,Ot.lightProbe.value=W.state.probe,Ot.directionalLights.value=W.state.directional,Ot.directionalLightShadows.value=W.state.directionalShadow,Ot.spotLights.value=W.state.spot,Ot.spotLightShadows.value=W.state.spotShadow,Ot.rectAreaLights.value=W.state.rectArea,Ot.ltc_1.value=W.state.rectAreaLTC1,Ot.ltc_2.value=W.state.rectAreaLTC2,Ot.pointLights.value=W.state.point,Ot.pointLightShadows.value=W.state.pointShadow,Ot.hemisphereLights.value=W.state.hemi,Ot.directionalShadowMap.value=W.state.directionalShadowMap,Ot.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ot.spotShadowMap.value=W.state.spotShadowMap,Ot.spotLightMatrix.value=W.state.spotLightMatrix,Ot.spotLightMap.value=W.state.spotLightMap,Ot.pointShadowMap.value=W.state.pointShadowMap,Ot.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=ce,j.uniformsList=null,ce}function l0(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Ta.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function c0(P,V){const Y=Dt.get(P);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function qd(P,V,Y,j,W){V.isScene!==!0&&(V=ee),I.resetTextureUnits();const pt=V.fog,Et=j.isMeshStandardMaterial?V.environment:null,kt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Uo,Ft=(j.isMeshStandardMaterial?H:T).get(j.envMap||Et),se=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ce=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ot=!!Y.morphAttributes.position,Ae=!!Y.morphAttributes.normal,ke=!!Y.morphAttributes.color;let Be=os;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Be=v.toneMapping);const Ln=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ce=Ln!==void 0?Ln.length:0,Ht=Dt.get(j),Ei=p.state.lights;if(tt===!0&&(dt===!0||P!==S)){const qn=P===S&&j.id===w;ht.setState(j,P,qn)}let Pe=!1;j.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ei.state.version||Ht.outputColorSpace!==kt||W.isBatchedMesh&&Ht.batching===!1||!W.isBatchedMesh&&Ht.batching===!0||W.isBatchedMesh&&Ht.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ht.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ht.instancing===!1||!W.isInstancedMesh&&Ht.instancing===!0||W.isSkinnedMesh&&Ht.skinning===!1||!W.isSkinnedMesh&&Ht.skinning===!0||W.isInstancedMesh&&Ht.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ht.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ht.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ht.instancingMorph===!1&&W.morphTexture!==null||Ht.envMap!==Ft||j.fog===!0&&Ht.fog!==pt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ht.numPlanes||Ht.numIntersection!==ht.numIntersection)||Ht.vertexAlphas!==se||Ht.vertexTangents!==ce||Ht.morphTargets!==Ot||Ht.morphNormals!==Ae||Ht.morphColors!==ke||Ht.toneMapping!==Be||Ht.morphTargetsCount!==Ce)&&(Pe=!0):(Pe=!0,Ht.__version=j.version);let ri=Ht.currentProgram;Pe===!0&&(ri=Cr(j,V,W));let Ys=!1,On=!1,Bo=!1;const He=ri.getUniforms(),gi=Ht.uniforms;if(Nt.useProgram(ri.program)&&(Ys=!0,On=!0,Bo=!0),j.id!==w&&(w=j.id,On=!0),Ys||S!==P){Nt.buffers.depth.getReversed()?(lt.copy(P.projectionMatrix),Xp(lt),qp(lt),He.setValue(N,"projectionMatrix",lt)):He.setValue(N,"projectionMatrix",P.projectionMatrix),He.setValue(N,"viewMatrix",P.matrixWorldInverse);const qi=He.map.cameraPosition;qi!==void 0&&qi.setValue(N,et.setFromMatrixPosition(P.matrixWorld)),Jt.logarithmicDepthBuffer&&He.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&He.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,On=!0,Bo=!0)}if(W.isSkinnedMesh){He.setOptional(N,W,"bindMatrix"),He.setOptional(N,W,"bindMatrixInverse");const qn=W.skeleton;qn&&(qn.boneTexture===null&&qn.computeBoneTexture(),He.setValue(N,"boneTexture",qn.boneTexture,I))}W.isBatchedMesh&&(He.setOptional(N,W,"batchingTexture"),He.setValue(N,"batchingTexture",W._matricesTexture,I),He.setOptional(N,W,"batchingIdTexture"),He.setValue(N,"batchingIdTexture",W._indirectTexture,I),He.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&He.setValue(N,"batchingColorTexture",W._colorsTexture,I));const Ho=Y.morphAttributes;if((Ho.position!==void 0||Ho.normal!==void 0||Ho.color!==void 0)&&$t.update(W,Y,ri),(On||Ht.receiveShadow!==W.receiveShadow)&&(Ht.receiveShadow=W.receiveShadow,He.setValue(N,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gi.envMap.value=Ft,gi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(gi.envMapIntensity.value=V.environmentIntensity),On&&(He.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Yd(gi,Bo),pt&&j.fog===!0&&gt.refreshFogUniforms(gi,pt),gt.refreshMaterialUniforms(gi,j,z,B,p.state.transmissionRenderTarget[P.id]),Ta.upload(N,l0(Ht),gi,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ta.upload(N,l0(Ht),gi,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&He.setValue(N,"center",W.center),He.setValue(N,"modelViewMatrix",W.modelViewMatrix),He.setValue(N,"normalMatrix",W.normalMatrix),He.setValue(N,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const qn=j.uniformsGroups;for(let qi=0,Yi=qn.length;qi<Yi;qi++){const h0=qn[qi];O.update(h0,ri),O.bind(h0,ri)}}return ri}function Yd(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function jd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,V,Y){Dt.get(P.texture).__webglTexture=V,Dt.get(P.depthTexture).__webglTexture=Y;const j=Dt.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const Y=Dt.get(P);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,Y=0){E=P,b=V,y=Y;let j=!0,W=null,pt=!1,Et=!1;if(P){const Ft=Dt.get(P);if(Ft.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(Ft.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Ft.__hasExternalTextures)I.rebindTextures(P,Dt.get(P.texture).__webglTexture,Dt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ot=P.depthTexture;if(Ft.__boundDepthTexture!==Ot){if(Ot!==null&&Dt.has(Ot)&&(P.width!==Ot.image.width||P.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const se=P.texture;(se.isData3DTexture||se.isDataArrayTexture||se.isCompressedArrayTexture)&&(Et=!0);const ce=Dt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ce[V])?W=ce[V][Y]:W=ce[V],pt=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?W=Dt.get(P).__webglMultisampledFramebuffer:Array.isArray(ce)?W=ce[Y]:W=ce,L.copy(P.viewport),U.copy(P.scissor),R=P.scissorTest}else L.copy(rt).multiplyScalar(z).floor(),U.copy(Ct).multiplyScalar(z).floor(),R=qt;if(Nt.bindFramebuffer(N.FRAMEBUFFER,W)&&j&&Nt.drawBuffers(P,W),Nt.viewport(L),Nt.scissor(U),Nt.setScissorTest(R),pt){const Ft=Dt.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ft.__webglTexture,Y)}else if(Et){const Ft=Dt.get(P.texture),se=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,Y||0,se)}w=-1},this.readRenderTargetPixels=function(P,V,Y,j,W,pt,Et){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Dt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){Nt.bindFramebuffer(N.FRAMEBUFFER,kt);try{const Ft=P.texture,se=Ft.format,ce=Ft.type;if(!Jt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-j&&Y>=0&&Y<=P.height-W&&N.readPixels(V,Y,j,W,ne.convert(se),ne.convert(ce),pt)}finally{const Ft=E!==null?Dt.get(E).__webglFramebuffer:null;Nt.bindFramebuffer(N.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(P,V,Y,j,W,pt,Et){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Dt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Et!==void 0&&(kt=kt[Et]),kt){const Ft=P.texture,se=Ft.format,ce=Ft.type;if(!Jt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-j&&Y>=0&&Y<=P.height-W){Nt.bindFramebuffer(N.FRAMEBUFFER,kt);const Ot=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ot),N.bufferData(N.PIXEL_PACK_BUFFER,pt.byteLength,N.STREAM_READ),N.readPixels(V,Y,j,W,ne.convert(se),ne.convert(ce),0);const Ae=E!==null?Dt.get(E).__webglFramebuffer:null;Nt.bindFramebuffer(N.FRAMEBUFFER,Ae);const ke=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Wp(N,ke,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ot),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pt),N.deleteBuffer(Ot),N.deleteSync(ke),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,Y=0){P.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-Y),W=Math.floor(P.image.width*j),pt=Math.floor(P.image.height*j),Et=V!==null?V.x:0,kt=V!==null?V.y:0;I.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Et,kt,W,pt),Nt.unbindTexture()},this.copyTextureToTexture=function(P,V,Y=null,j=null,W=0){P.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],V=arguments[2],W=arguments[3]||0,Y=null);let pt,Et,kt,Ft,se,ce,Ot,Ae,ke;const Be=P.isCompressedTexture?P.mipmaps[W]:P.image;Y!==null?(pt=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,kt=Y.isBox3?Y.max.z-Y.min.z:1,Ft=Y.min.x,se=Y.min.y,ce=Y.isBox3?Y.min.z:0):(pt=Be.width,Et=Be.height,kt=Be.depth||1,Ft=0,se=0,ce=0),j!==null?(Ot=j.x,Ae=j.y,ke=j.z):(Ot=0,Ae=0,ke=0);const Ln=ne.convert(V.format),Ce=ne.convert(V.type);let Ht;V.isData3DTexture?(I.setTexture3D(V,0),Ht=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),Ht=N.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),Ht=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const Ei=N.getParameter(N.UNPACK_ROW_LENGTH),Pe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ri=N.getParameter(N.UNPACK_SKIP_PIXELS),Ys=N.getParameter(N.UNPACK_SKIP_ROWS),On=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Be.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Be.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ft),N.pixelStorei(N.UNPACK_SKIP_ROWS,se),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ce);const Bo=P.isDataArrayTexture||P.isData3DTexture,He=V.isDataArrayTexture||V.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const gi=Dt.get(P),Ho=Dt.get(V),qn=Dt.get(gi.__renderTarget),qi=Dt.get(Ho.__renderTarget);Nt.bindFramebuffer(N.READ_FRAMEBUFFER,qn.__webglFramebuffer),Nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Yi=0;Yi<kt;Yi++)Bo&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.get(P).__webglTexture,W,ce+Yi),P.isDepthTexture?(He&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Dt.get(V).__webglTexture,W,ke+Yi),N.blitFramebuffer(Ft,se,pt,Et,Ot,Ae,pt,Et,N.DEPTH_BUFFER_BIT,N.NEAREST)):He?N.copyTexSubImage3D(Ht,W,Ot,Ae,ke+Yi,Ft,se,pt,Et):N.copyTexSubImage2D(Ht,W,Ot,Ae,ke+Yi,Ft,se,pt,Et);Nt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else He?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(Ht,W,Ot,Ae,ke,pt,Et,kt,Ln,Ce,Be.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Ht,W,Ot,Ae,ke,pt,Et,kt,Ln,Be.data):N.texSubImage3D(Ht,W,Ot,Ae,ke,pt,Et,kt,Ln,Ce,Be):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,W,Ot,Ae,pt,Et,Ln,Ce,Be.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,W,Ot,Ae,Be.width,Be.height,Ln,Be.data):N.texSubImage2D(N.TEXTURE_2D,W,Ot,Ae,pt,Et,Ln,Ce,Be);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ei),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Pe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ri),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ys),N.pixelStorei(N.UNPACK_SKIP_IMAGES,On),W===0&&V.generateMipmaps&&N.generateMipmap(Ht),Nt.unbindTexture()},this.copyTextureToTexture3D=function(P,V,Y=null,j=null,W=0){return P.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,P=arguments[2],V=arguments[3],W=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,Y,j,W)},this.initRenderTarget=function(P){Dt.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),Nt.unbindTexture()},this.resetState=function(){b=0,y=0,E=null,Nt.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}class id extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const hu=new D,uu=new Fe,fu=new Fe,e2=new D,du=new ie,Zr=new D,Dl=new Gs,pu=new ie,Ll=new wr;class mu extends Ge{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=p0,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zr),this.boundingBox.expandByPoint(Zr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Zr),this.boundingSphere.expandByPoint(Zr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dl.copy(this.boundingSphere),Dl.applyMatrix4(s),t.ray.intersectsSphere(Dl)!==!1&&(pu.copy(s).invert(),Ll.copy(t.ray).applyMatrix4(pu),!(this.boundingBox!==null&&Ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ll)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Fe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===p0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;uu.fromBufferAttribute(s.attributes.skinIndex,t),fu.fromBufferAttribute(s.attributes.skinWeight,t),hu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let o=0;o<4;o++){const r=fu.getComponent(o);if(r!==0){const a=uu.getComponent(o);du.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(e2.copy(hu).applyMatrix4(du),r)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ea extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uh extends rn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=on,h=on,u,f){super(null,r,a,l,c,h,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=new ie,n2=new ie;class Nh{constructor(t=[],e=[]){this.uuid=Vs(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let o=0,r=t.length;o<r;o++){const a=t[o]?t[o].matrixWorld:n2;gu.multiplyMatrices(a,e[o]),gu.toArray(n,o*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Nh(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Uh(e,t,t,Wn,Mi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const o=t.bones[n];let r=e[o];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),r=new Ea),this.bones.push(r),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,o=e.length;s<o;s++){const r=e[s];t.bones.push(r.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class i2 extends Ws{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new D,za=new D,xu=new ie,qo=new wr,Qr=new Gs,Il=new D,vu=new D;class s2 extends Ve{constructor(t=new Ye,e=new i2){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Na.fromBufferAttribute(e,s-1),za.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Na.distanceTo(za);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=o,t.ray.intersectsSphere(Qr)===!1)return;xu.copy(s).invert(),qo.copy(t.ray).applyMatrix4(xu);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=d,g=m-1;x<g;x+=c){const p=h.getX(x),M=h.getX(x+1),_=Jr(this,t,qo,l,p,M);_&&e.push(_)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(d),p=Jr(this,t,qo,l,x,g);p&&e.push(p)}}else{const d=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=d,g=m-1;x<g;x+=c){const p=Jr(this,t,qo,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Jr(this,t,qo,l,m-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Jr(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Na.fromBufferAttribute(r,s),za.fromBufferAttribute(r,o),e.distanceSqToSegment(Na,za,Il,vu)>n)return;Il.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Il);if(!(l<t.near||l>t.far))return{distance:l,point:vu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Mu=new D,yu=new D;class ka extends s2{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Mu.fromBufferAttribute(e,s),yu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mu.distanceTo(yu);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o2 extends Ws{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _u=new ie,ch=new wr,$r=new Gs,ta=new D;class sd extends Ve{constructor(t=new Ye,e=new o2){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),$r.radius+=o,t.ray.intersectsSphere($r)===!1)return;_u.copy(s).invert(),ch.copy(t.ray).applyMatrix4(_u);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let m=f,x=d;m<x;m++){const g=c.getX(m);ta.fromBufferAttribute(u,g),bu(ta,g,l,s,t,e,this)}}else{const f=Math.max(0,r.start),d=Math.min(u.count,r.start+r.count);for(let m=f,x=d;m<x;m++)ta.fromBufferAttribute(u,m),bu(ta,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function bu(i,t,e,n,s,o,r){const a=ch.distanceSqToPoint(i);if(a<e){const l=new D;ch.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class r2 extends rn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);const h=n[s],f=n[s+1]-h,d=(r-h)/f;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new mt:new D);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],o=[],r=[],a=new D,l=new ie;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new D)}o[0]=new D,r[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(fn(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,m))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(fn(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zh extends wi{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class a2 extends zh{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function kh(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,u){let f=(r-o)/c-(a-o)/(c+h)+(a-r)/h,d=(a-r)/h-(l-r)/(h+u)+(l-a)/u;f*=h,d*=h,s(r,a,f,d)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const ea=new D,Ul=new kh,Nl=new kh,zl=new kh;class od extends wi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(ea.subVectors(s[0],s[1]).add(s[0]),c=ea);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(ea.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ul.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),Nl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),zl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Nl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),zl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ul.calc(l),Nl.calc(l),zl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Su(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function l2(i,t){const e=1-i;return e*e*t}function c2(i,t){return 2*(1-i)*i*t}function h2(i,t){return i*i*t}function cr(i,t,e,n){return l2(i,t)+c2(i,e)+h2(i,n)}function u2(i,t){const e=1-i;return e*e*e*t}function f2(i,t){const e=1-i;return 3*e*e*i*t}function d2(i,t){return 3*(1-i)*i*i*t}function p2(i,t){return i*i*i*t}function hr(i,t,e,n,s){return u2(i,t)+f2(i,e)+d2(i,n)+p2(i,s)}class rd extends wi{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(hr(t,s.x,o.x,r.x,a.x),hr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class m2 extends wi{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(hr(t,s.x,o.x,r.x,a.x),hr(t,s.y,o.y,r.y,a.y),hr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ad extends wi{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g2 extends wi{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends wi{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(cr(t,s.x,o.x,r.x),cr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x2 extends wi{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(cr(t,s.x,o.x,r.x),cr(t,s.y,o.y,r.y),cr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Su(a,l.x,c.x,h.x,u.x),Su(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var wu=Object.freeze({__proto__:null,ArcCurve:a2,CatmullRomCurve3:od,CubicBezierCurve:rd,CubicBezierCurve3:m2,EllipseCurve:zh,LineCurve:ad,LineCurve3:g2,QuadraticBezierCurve:ld,QuadraticBezierCurve3:x2,SplineCurve:cd});class v2 extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new wu[s.type]().fromJSON(s))}return this}}class M2 extends v2{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ad(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new ld(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new rd(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new cd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){const c=new zh(t,e,n,s,o,r,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Er extends Ye{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=fn(s,0,Math.PI*2);const o=[],r=[],a=[],l=[],c=[],h=1/e,u=new D,f=new mt,d=new D,m=new D,x=new D;let g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=e;M++){const _=n+M*h*s,v=Math.sin(_),A=Math.cos(_);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*A,r.push(u.x,u.y,u.z),f.x=M/e,f.y=b/(t.length-1),a.push(f.x,f.y);const y=l[3*b+0]*v,E=l[3*b+1],w=l[3*b+0]*A;c.push(y,E,w)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){const v=_+M*t.length,A=v,b=v+t.length,y=v+t.length+1,E=v+1;o.push(A,b,E),o.push(y,E,b)}this.setIndex(o),this.setAttribute("position",new ge(r,3)),this.setAttribute("uv",new ge(a,2)),this.setAttribute("normal",new ge(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Er(t.points,t.segments,t.phiStart,t.phiLength)}}class Fh extends Er{constructor(t=1,e=1,n=4,s=8){const o=new M2;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Fh(t.radius,t.length,t.capSegments,t.radialSegments)}}class ye extends Ye{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],d=[];let m=0;const x=[],g=n/2;let p=0;M(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(d,2));function M(){const v=new D,A=new D;let b=0;const y=(e-t)/n;for(let E=0;E<=o;E++){const w=[],S=E/o,L=S*(e-t)+t;for(let U=0;U<=s;U++){const R=U/s,k=R*l+a,X=Math.sin(k),C=Math.cos(k);A.x=L*X,A.y=-S*n+g,A.z=L*C,u.push(A.x,A.y,A.z),v.set(X,y,C).normalize(),f.push(v.x,v.y,v.z),d.push(R,1-S),w.push(m++)}x.push(w)}for(let E=0;E<s;E++)for(let w=0;w<o;w++){const S=x[w][E],L=x[w+1][E],U=x[w+1][E+1],R=x[w][E+1];(t>0||w!==0)&&(h.push(S,L,R),b+=3),(e>0||w!==o-1)&&(h.push(L,U,R),b+=3)}c.addGroup(p,b,0),p+=b}function _(v){const A=m,b=new mt,y=new D;let E=0;const w=v===!0?t:e,S=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;const L=m;for(let U=0;U<=s;U++){const k=U/s*l+a,X=Math.cos(k),C=Math.sin(k);y.x=w*C,y.y=g*S,y.z=w*X,u.push(y.x,y.y,y.z),f.push(0,S,0),b.x=X*.5+.5,b.y=C*.5*S+.5,d.push(b.x,b.y),m++}for(let U=0;U<s;U++){const R=A+U,k=L+U;v===!0?h.push(k,k+1,R):h.push(k+1,k,R),E+=3}c.addGroup(p,E,v===!0?1:2),p+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ls extends ye{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Ls(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends Ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(o.slice(),3)),this.setAttribute("uv",new ge(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new D,v=new D,A=new D;for(let b=0;b<e.length;b+=3)d(e[b+0],_),d(e[b+1],v),d(e[b+2],A),l(_,v,A,M)}function l(M,_,v,A){const b=A+1,y=[];for(let E=0;E<=b;E++){y[E]=[];const w=M.clone().lerp(v,E/b),S=_.clone().lerp(v,E/b),L=b-E;for(let U=0;U<=L;U++)U===0&&E===b?y[E][U]=w:y[E][U]=w.clone().lerp(S,U/L)}for(let E=0;E<b;E++)for(let w=0;w<2*(b-E)-1;w++){const S=Math.floor(w/2);w%2===0?(f(y[E][S+1]),f(y[E+1][S]),f(y[E][S])):(f(y[E][S+1]),f(y[E+1][S+1]),f(y[E+1][S]))}}function c(M){const _=new D;for(let v=0;v<o.length;v+=3)_.x=o[v+0],_.y=o[v+1],_.z=o[v+2],_.normalize().multiplyScalar(M),o[v+0]=_.x,o[v+1]=_.y,o[v+2]=_.z}function h(){const M=new D;for(let _=0;_<o.length;_+=3){M.x=o[_+0],M.y=o[_+1],M.z=o[_+2];const v=g(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;r.push(v,1-A)}m(),u()}function u(){for(let M=0;M<r.length;M+=6){const _=r[M+0],v=r[M+2],A=r[M+4],b=Math.max(_,v,A),y=Math.min(_,v,A);b>.9&&y<.1&&(_<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),A<.2&&(r[M+4]+=1))}}function f(M){o.push(M.x,M.y,M.z)}function d(M,_){const v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){const M=new D,_=new D,v=new D,A=new D,b=new mt,y=new mt,E=new mt;for(let w=0,S=0;w<o.length;w+=9,S+=6){M.set(o[w+0],o[w+1],o[w+2]),_.set(o[w+3],o[w+4],o[w+5]),v.set(o[w+6],o[w+7],o[w+8]),b.set(r[S+0],r[S+1]),y.set(r[S+2],r[S+3]),E.set(r[S+4],r[S+5]),A.copy(M).add(_).add(v).divideScalar(3);const L=g(A);x(b,S+0,M,L),x(y,S+2,_,L),x(E,S+4,v,L)}}function x(M,_,v,A){A<0&&M.x===1&&(r[_]=M.x-1),v.x===0&&v.z===0&&(r[_]=A/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.vertices,t.indices,t.radius,t.details)}}const na=new D,ia=new D,kl=new D,sa=new $n;class Oh extends Ye{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(So*e),r=t.getIndex(),a=t.getAttribute("position"),l=r?r.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let m=0;m<l;m+=3){r?(c[0]=r.getX(m),c[1]=r.getX(m+1),c[2]=r.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);const{a:x,b:g,c:p}=sa;if(x.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),sa.getNormal(kl),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let M=0;M<3;M++){const _=(M+1)%3,v=u[M],A=u[_],b=sa[h[M]],y=sa[h[_]],E=`${v}_${A}`,w=`${A}_${v}`;w in f&&f[w]?(kl.dot(f[w].normal)<=o&&(d.push(b.x,b.y,b.z),d.push(y.x,y.y,y.z)),f[w]=null):E in f||(f[E]={index0:c[M],index1:c[_],normal:kl.clone()})}}for(const m in f)if(f[m]){const{index0:x,index1:g}=f[m];na.fromBufferAttribute(a,x),ia.fromBufferAttribute(a,g),d.push(na.x,na.y,na.z),d.push(ia.x,ia.y,ia.z)}this.setAttribute("position",new ge(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ko extends qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class dn extends Ye{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const b=A/e;u.x=-t*Math.cos(s+b*o)*Math.sin(r+_*a),u.y=t*Math.cos(r+_*a),u.z=t*Math.sin(s+b*o)*Math.sin(r+_*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(b+v,1-_),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const _=h[p][M+1],v=h[p][M],A=h[p+1][M],b=h[p+1][M+1];(p!==0||r>0)&&d.push(_,v,b),(p!==n-1||l<Math.PI)&&d.push(v,A,b)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bh extends qa{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bh(t.radius,t.detail)}}class Fo extends Ye{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const x=m/s*o,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;r.push(x,g,M),r.push(g,p,M)}this.setIndex(r),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class y2 extends Ue{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class _2 extends Ws{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const Tu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class b2{constructor(t,e,n){const s=this;let o=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const Ya=new b2;class Hh{constructor(t){this.manager=t!==void 0?t:Ya,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Hh.DEFAULT_MATERIAL_NAME="__DEFAULT";class S2 extends Hh{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,r=Tu.get(t);if(r!==void 0)return o.manager.itemStart(t),setTimeout(function(){e&&e(r),o.manager.itemEnd(t)},0),r;const a=vr("img");function l(){h(),Tu.add(t,this),e&&e(this),o.manager.itemEnd(t)}function c(u){h(),s&&s(u),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(t),a.src=t,a}}class w2 extends Hh{constructor(t){super(t)}load(t,e,n,s){const o=new rn,r=new S2(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){o.image=a,o.needsUpdate=!0,e!==void 0&&e(o)},n,s),o}}class hd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Eu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Eu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);const To={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const T2=new Jf(-1,1,1,-1,0,1);class E2 extends Ye{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}}const A2=new E2;class Hs{constructor(t){this._mesh=new Ge(A2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,T2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vh extends Wi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ue?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Rn.clone(t.uniforms),this.material=new Ue({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Au extends Wi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class C2 extends Wi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ud{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new mt);this._width=n.width,this._height=n.height,e=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vh(To),this.copyPass.material.blending=sn,this.clock=new hd}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Au!==void 0&&(r instanceof Au?n=!0:r instanceof C2&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fd extends Wi{constructor(t,e,n=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Kt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const P2={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Io extends Wi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new mt(t.x,t.y):new mt(256,256),this.clearColor=new Kt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new an(o,r,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new an(o,r,{type:Mn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new an(o,r,{type:Mn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),r=Math.round(r/2)}const a=P2;this.highPassUniforms=Rn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ue({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new mt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=To;this.copyUniforms=Rn.clone(h.uniforms),this.blendMaterial=new Ue({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Co,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Kt,this.oldClearAlpha=1,this.basic=new Tr,this.fsQuad=new Hs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,s),this.renderTargetsVertical[o].setSize(n,s),this.separableBlurMaterials[o].uniforms.invSize.value=new mt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Io.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Io.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ue({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ue({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Io.BlurDirectionX=new mt(1,0);Io.BlurDirectionY=new mt(0,1);const R2={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class dd extends Wi{constructor(){super();const t=R2;this.uniforms=Rn.clone(t.uniforms),this.material=new y2({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},we.getTransfer(this._outputColorSpace)===De&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ef?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Af&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const oa={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new mt(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ra={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new mt(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Fl={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new mt(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class D2 extends Wi{constructor(t,e){super(),this.edgesRT=new an(t,e,{depthBuffer:!1,type:Mn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new an(t,e,{depthBuffer:!1,type:Mn}),this.weightsRT.texture.name="SMAAPass.weights";const n=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){n.areaTexture.needsUpdate=!0},this.areaTexture=new rn,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=ti,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const o=new Image;o.src=this.getSearchTexture(),o.onload=function(){n.searchTexture.needsUpdate=!0},this.searchTexture=new rn,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=o,this.searchTexture.magFilter=on,this.searchTexture.minFilter=on,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Rn.clone(oa.uniforms),this.uniformsEdges.resolution.value.set(1/t,1/e),this.materialEdges=new Ue({defines:Object.assign({},oa.defines),uniforms:this.uniformsEdges,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader}),this.uniformsWeights=Rn.clone(ra.uniforms),this.uniformsWeights.resolution.value.set(1/t,1/e),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new Ue({defines:Object.assign({},ra.defines),uniforms:this.uniformsWeights,vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader}),this.uniformsBlend=Rn.clone(Fl.uniforms),this.uniformsBlend.resolution.value.set(1/t,1/e),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new Ue({uniforms:this.uniformsBlend,vertexShader:Fl.vertexShader,fragmentShader:Fl.fragmentShader}),this.fsQuad=new Hs(null)}render(t,e,n){this.uniformsEdges.tDiffuse.value=n.texture,this.fsQuad.material=this.materialEdges,t.setRenderTarget(this.edgesRT),this.clear&&t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.materialWeights,t.setRenderTarget(this.weightsRT),this.clear&&t.clear(),this.fsQuad.render(t),this.uniformsBlend.tColor.value=n.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.fsQuad.render(t))}setSize(t,e){this.edgesRT.setSize(t,e),this.weightsRT.setSize(t,e),this.materialEdges.uniforms.resolution.value.set(1/t,1/e),this.materialWeights.uniforms.resolution.value.set(1/t,1/e),this.materialBlend.uniforms.resolution.value.set(1/t,1/e)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const L2={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class I2 extends Wi{constructor(t=.96){super(),this.shader=L2,this.uniforms=Rn.clone(this.shader.uniforms),this.uniforms.damp.value=t,this.textureComp=new an(window.innerWidth,window.innerHeight,{magFilter:on,type:Mn}),this.textureOld=new an(window.innerWidth,window.innerHeight,{magFilter:on,type:Mn}),this.compFsMaterial=new Ue({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Hs(this.compFsMaterial);const e=To;this.copyFsMaterial=new Ue({uniforms:Rn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new Hs(this.copyFsMaterial)}render(t,e,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,t.setRenderTarget(this.textureComp),this.compFsQuad.render(t),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this.copyFsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.copyFsQuad.render(t));const s=this.textureOld;this.textureOld=this.textureComp,this.textureComp=s}setSize(t,e){this.textureComp.setSize(t,e),this.textureOld.setSize(t,e)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}}const aa={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new mt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ie},cameraProjectionMatrixInverse:{value:new ie},cameraWorldMatrix:{value:new ie},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},la={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ol={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function U2(i=5){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=N2(t),n=e.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){const a=e[r],l=2*Math.PI*a/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();s[r*4]=(c.x*.5+.5)*255,s[r*4+1]=(c.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const o=new Uh(s,t,t);return o.wrapS=cs,o.wrapT=cs,o.needsUpdate=!0,o}function N2(i){const t=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),e=t*t,n=Array(e).fill(0);let s=Math.floor(t/2),o=t-1;for(let r=1;r<=e;){if(s===-1&&o===t?(o=t-2,s=0):(o===t&&(o=0),s<0&&(s=t-1)),n[s*t+o]!==0){o-=2,s++;continue}else n[s*t+o]=r++;o++,s--}return n}const ca={defines:{SAMPLES:16,SAMPLE_VECTORS:pd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new mt},cameraProjectionMatrixInverse:{value:new ie},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function pd(i,t,e){const n=z2(i,t,e);let s="vec3[SAMPLES](";for(let o=0;o<i;o++){const r=n[o];s+=`vec3(${r.x}, ${r.y}, ${r.z})${o<i-1?",":")"}`}return s}function z2(i,t,e){const n=[];for(let s=0;s<i;s++){const o=2*Math.PI*t*s/i,r=Math.pow(s/(i-1),e);n.push(new D(Math.cos(o),Math.sin(o),r))}return n}class k2{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}dot4(t,e,n,s,o){return t[0]*e+t[1]*n+t[2]*s+t[3]*o}noise(t,e){let n,s,o;const r=.5*(Math.sqrt(3)-1),a=(t+e)*r,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,m=t-f,x=e-d;let g,p;m>x?(g=1,p=0):(g=0,p=1);const M=m-g+h,_=x-p+h,v=m-1+2*h,A=x-1+2*h,b=l&255,y=c&255,E=this.perm[b+this.perm[y]]%12,w=this.perm[b+g+this.perm[y+p]]%12,S=this.perm[b+1+this.perm[y+1]]%12;let L=.5-m*m-x*x;L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[E],m,x));let U=.5-M*M-_*_;U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[w],M,_));let R=.5-v*v-A*A;return R<0?o=0:(R*=R,o=R*R*this.dot(this.grad3[S],v,A)),70*(n+s+o)}noise3d(t,e,n){let s,o,r,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,m=(h+u+f)*d,x=h-m,g=u-m,p=f-m,M=t-x,_=e-g,v=n-p;let A,b,y,E,w,S;M>=_?_>=v?(A=1,b=0,y=0,E=1,w=1,S=0):M>=v?(A=1,b=0,y=0,E=1,w=0,S=1):(A=0,b=0,y=1,E=1,w=0,S=1):_<v?(A=0,b=0,y=1,E=0,w=1,S=1):M<v?(A=0,b=1,y=0,E=0,w=1,S=1):(A=0,b=1,y=0,E=1,w=1,S=0);const L=M-A+d,U=_-b+d,R=v-y+d,k=M-E+2*d,X=_-w+2*d,C=v-S+2*d,B=M-1+3*d,z=_-1+3*d,K=v-1+3*d,Z=h&255,rt=u&255,Ct=f&255,qt=this.perm[Z+this.perm[rt+this.perm[Ct]]]%12,G=this.perm[Z+A+this.perm[rt+b+this.perm[Ct+y]]]%12,tt=this.perm[Z+E+this.perm[rt+w+this.perm[Ct+S]]]%12,dt=this.perm[Z+1+this.perm[rt+1+this.perm[Ct+1]]]%12;let lt=.6-M*M-_*_-v*v;lt<0?s=0:(lt*=lt,s=lt*lt*this.dot3(this.grad3[qt],M,_,v));let ct=.6-L*L-U*U-R*R;ct<0?o=0:(ct*=ct,o=ct*ct*this.dot3(this.grad3[G],L,U,R));let et=.6-k*k-X*X-C*C;et<0?r=0:(et*=et,r=et*et*this.dot3(this.grad3[tt],k,X,C));let zt=.6-B*B-z*z-K*K;return zt<0?a=0:(zt*=zt,a=zt*zt*this.dot3(this.grad3[dt],B,z,K)),32*(s+o+r+a)}noise4d(t,e,n,s){const o=this.grad4,r=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,d,m;const x=(t+e+n+s)*l,g=Math.floor(t+x),p=Math.floor(e+x),M=Math.floor(n+x),_=Math.floor(s+x),v=(g+p+M+_)*c,A=g-v,b=p-v,y=M-v,E=_-v,w=t-A,S=e-b,L=n-y,U=s-E,R=w>S?32:0,k=w>L?16:0,X=S>L?8:0,C=w>U?4:0,B=S>U?2:0,z=L>U?1:0,K=R+k+X+C+B+z,Z=r[K][0]>=3?1:0,rt=r[K][1]>=3?1:0,Ct=r[K][2]>=3?1:0,qt=r[K][3]>=3?1:0,G=r[K][0]>=2?1:0,tt=r[K][1]>=2?1:0,dt=r[K][2]>=2?1:0,lt=r[K][3]>=2?1:0,ct=r[K][0]>=1?1:0,et=r[K][1]>=1?1:0,zt=r[K][2]>=1?1:0,ee=r[K][3]>=1?1:0,Q=w-Z+c,vt=S-rt+c,N=L-Ct+c,me=U-qt+c,Qt=w-G+2*c,Jt=S-tt+2*c,Nt=L-dt+2*c,Wt=U-lt+2*c,Dt=w-ct+3*c,I=S-et+3*c,T=L-zt+3*c,H=U-ee+3*c,it=w-1+4*c,nt=S-1+4*c,$=L-1+4*c,Pt=U-1+4*c,gt=g&255,_t=p&255,re=M&255,ht=_&255,Rt=a[gt+a[_t+a[re+a[ht]]]]%32,jt=a[gt+Z+a[_t+rt+a[re+Ct+a[ht+qt]]]]%32,$t=a[gt+G+a[_t+tt+a[re+dt+a[ht+lt]]]]%32,It=a[gt+ct+a[_t+et+a[re+zt+a[ht+ee]]]]%32,ve=a[gt+1+a[_t+1+a[re+1+a[ht+1]]]]%32;let ne=.6-w*w-S*S-L*L-U*U;ne<0?h=0:(ne*=ne,h=ne*ne*this.dot4(o[Rt],w,S,L,U));let Ee=.6-Q*Q-vt*vt-N*N-me*me;Ee<0?u=0:(Ee*=Ee,u=Ee*Ee*this.dot4(o[jt],Q,vt,N,me));let O=.6-Qt*Qt-Jt*Jt-Nt*Nt-Wt*Wt;O<0?f=0:(O*=O,f=O*O*this.dot4(o[$t],Qt,Jt,Nt,Wt));let yt=.6-Dt*Dt-I*I-T*T-H*H;yt<0?d=0:(yt*=yt,d=yt*yt*this.dot4(o[It],Dt,I,T,H));let J=.6-it*it-nt*nt-$*$-Pt*Pt;return J<0?m=0:(J*=J,m=J*J*this.dot4(o[ve],it,nt,$,Pt)),27*(h+u+f+d+m)}}class hi extends Wi{constructor(t,e,n,s,o,r,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=U2(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new an(this.width,this.height,{type:Mn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ue({defines:Object.assign({},aa.defines),uniforms:Rn.clone(aa.uniforms),vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,blending:sn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new _2,this.normalMaterial.blending=sn,this.pdMaterial=new Ue({defines:Object.assign({},ca.defines),uniforms:Rn.clone(ca.uniforms),vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ue({defines:Object.assign({},la.defines),uniforms:Rn.clone(la.uniforms),vertexShader:la.vertexShader,fragmentShader:la.fragmentShader,blending:sn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ue({uniforms:Rn.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Tc,blendDst:sr,blendEquation:fi,blendSrcAlpha:wc,blendDstAlpha:sr,blendEquationAlpha:fi}),this.blendMaterial=new Ue({uniforms:Rn.clone(Ol.uniforms),vertexShader:Ol.vertexShader,fragmentShader:Ol.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:yf,blendSrc:Tc,blendDst:sr,blendEquation:fi,blendSrcAlpha:wc,blendDstAlpha:sr,blendEquationAlpha:fi}),this.fsQuad=new Hs(null),this.originalClearColor=new Kt,this.setGBuffer(o?o.depthTexture:void 0,o?o.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Ih,this.depthTexture.format=Bs,this.depthTexture.type=Os,this.normalRenderTarget=new an(this.width,this.height,{minFilter:on,magFilter:on,type:Mn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case hi.OUTPUT.Off:break;case hi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=sn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=sn,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,s,o){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(o||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}renderOverride(t,e,n,s,o){t.getClearColor(this.originalClearColor);const r=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,o=e.clearAlpha||o,s!=null&&(t.setClearColor(s),t.setClearAlpha(o||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(r)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const s=e.get(n);n.visible=s}),e.clear()}generateNoise(t=64){const e=new k2,n=t*t*4,s=new Uint8Array(n);for(let r=0;r<t;r++)for(let a=0;a<t;a++){const l=r,c=a;s[(r*t+a)*4]=(e.noise(l,c)*.5+.5)*255,s[(r*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,s[(r*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,s[(r*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const o=new Uh(s,t,t,Wn,Si);return o.wrapS=cs,o.wrapT=cs,o.needsUpdate=!0,o}}hi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const yi=40,hs=.45,md=.18,_e={uTime:{value:0},uP:{value:Array.from({length:yi},()=>new Fe(0,-999,0,-999))},uQ:{value:Array.from({length:yi},()=>new Fe(1,1,0,1))},uC:{value:Array.from({length:yi},()=>new Kt(1,1,1))},uN:{value:0},uListen:{value:0}},Zt={player:new Kt(.55,.85,1),click:new Kt(.75,.95,1),breath:new Kt(.55,.5,.9),stone:new Kt(1,.95,.75),monster:new Kt(1,.12,.08),drip:new Kt(.25,.55,1),spark:new Kt(1,.6,.2),machine:new Kt(1,.55,.15),item:new Kt(.9,1,.6),white:new Kt(1,1,1)},F2=`
  #include <common>
  #include <color_pars_vertex>
  #include <skinning_pars_vertex>
  varying vec3 vW;
  varying vec3 vN;
  varying vec2 vUv;
  varying vec3 vO;
  varying vec3 vNo;
  void main() {
    #include <color_vertex>
    vec3 transformed = position;
    vec3 objectNormal = normal;
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <skinning_vertex>
    vUv = uv;
    vO = position;
    vNo = objectNormal;
    vec4 w = modelMatrix * vec4(transformed, 1.0);
    vW = w.xyz;
    #ifdef SURFACE
      vN = normalize(mat3(modelMatrix) * objectNormal);
    #else
      vN = vec3(0.0, 1.0, 0.0);
    #endif
    gl_Position = projectionMatrix * viewMatrix * w;
  }
`,O2=`
  #include <color_pars_fragment>
  #define MAXP ${yi}
  uniform vec4 uP[MAXP];
  uniform float uN;
  uniform float uListen;
  uniform vec4 uQ[MAXP];
  uniform vec3 uC[MAXP];
  uniform float uTime;
  uniform vec3 uTint;
  uniform float uBoost;
  uniform float uPat;
  uniform float uLit;
  uniform float uHuman;
  uniform sampler2D uTex;
  uniform sampler2D uNrm;
  uniform float uScale;
  uniform float uBump;
  uniform float uWet;
  uniform sampler2D uTex2;
  uniform sampler2D uNrm2;
  uniform float uScale2;
  uniform float uSplit;
  uniform float uGrime;
  uniform sampler2D uHgt;
  uniform sampler2D uHgt2;
  uniform float uPom;
  varying vec3 vW;
  varying vec3 vN;
  varying vec2 vUv;
  varying vec3 vO;
  varying vec3 vNo;
  uniform float uLocal;
  // pattern space: world for the static level, the model's own space for things
  // that move with you (hands), so textures don't swim across them
  vec3 pW;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float vnoise(vec3 p) {
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1, 0, 0)), f.x), mix(hash(i + vec3(0, 1, 0)), hash(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(hash(i + vec3(0, 0, 1)), hash(i + vec3(1, 0, 1)), f.x), mix(hash(i + vec3(0, 1, 1)), hash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    return vnoise(p) * 0.55 + vnoise(p * 2.13) * 0.28 + vnoise(p * 4.7) * 0.17;
  }

  // parallax occlusion: march the view ray down into the height map (white = high)
  // and return where it first hits the surface (xy) and the height there (z).
  // dirT: the view vector's components along the plane, nz: its component along
  // the normal, depth: relief in uv units. Explicit gradients let it stop early.
  vec3 pom(sampler2D H, vec2 uv, vec2 gx, vec2 gy, vec2 dirT, float nz, float depth) {
    vec2 delta = -dirT / max(nz, 0.22) * depth;
    float n = floor(mix(30.0, 10.0, clamp(nz, 0.0, 1.0)));
    float stp = 1.0 / n;
    float cur = 0.0, prevD = 0.0, prevCur = 0.0;
    vec2 cuv = uv, puv = uv;
    float d = 1.0 - textureGrad(H, uv, gx, gy).r;
    for (int i = 0; i < 30; i++) {
      if (cur >= d || float(i) >= n) break;
      puv = cuv; prevD = d; prevCur = cur;
      cur += stp;
      cuv = uv + delta * cur;
      d = 1.0 - textureGrad(H, cuv, gx, gy).r;
    }
    // refine between the last two layers
    float after = d - cur, before = prevD - prevCur;
    float w = clamp(after / (after - before + 1e-5), 0.0, 1.0);
    return vec3(mix(cuv, puv, w), 1.0 - mix(d, prevD, w));
  }

  // triplanar sample: returns albedo, writes perturbed normal + roughness.
  // Projections with next to no weight are skipped (on walls and floors that is
  // two of the three).
  vec3 tri(sampler2D T, sampler2D Nm, sampler2D Hm, float sc, vec3 n, vec3 bw, inout vec3 N, inout float rough) {
    vec2 uvX = pW.zy * sc, uvY = pW.xz * sc, uvZ = pW.xy * sc;
    vec2 gxX = dFdx(uvX), gyX = dFdy(uvX), gxY = dFdx(uvY), gyY = dFdy(uvY), gxZ = dFdx(uvZ), gyZ = dFdy(uvZ);
    // relief on the dominant projection, close up only
    float fade = smoothstep(12.0, 5.0, distance(vW, cameraPosition));
    float pd = uPom * sc * fade;
    float cav = 1.0;
    if (pd > 0.0005) {
      vec3 Vw = normalize(cameraPosition - vW);
      vec3 r;
      if (bw.x >= bw.y && bw.x >= bw.z) { r = pom(Hm, uvX, gxX, gyX, vec2(Vw.z, Vw.y), abs(Vw.x), pd); uvX = r.xy; }
      else if (bw.y >= bw.z) { r = pom(Hm, uvY, gxY, gyY, vec2(Vw.x, Vw.z), abs(Vw.y), pd); uvY = r.xy; }
      else { r = pom(Hm, uvZ, gxZ, gyZ, vec2(Vw.x, Vw.y), abs(Vw.z), pd); uvZ = r.xy; }
      // the bottoms of the seams and pits catch less of anything
      cav = mix(1.0, mix(0.3, 1.0, smoothstep(0.0, 0.85, r.z)), fade * min(1.0, uPom * 50.0));
    }
    vec3 a = vec3(0.0);
    vec2 tX = vec2(0.0), tY = vec2(0.0), tZ = vec2(0.0);
    rough = 0.0;
    if (bw.x > 0.02) { vec4 nX = textureGrad(Nm, uvX, gxX, gyX); a += textureGrad(T, uvX, gxX, gyX).rgb * bw.x; tX = nX.xy * 2.0 - 1.0; rough += nX.b * bw.x; }
    if (bw.y > 0.02) { vec4 nY = textureGrad(Nm, uvY, gxY, gyY); a += textureGrad(T, uvY, gxY, gyY).rgb * bw.y; tY = nY.xy * 2.0 - 1.0; rough += nY.b * bw.y; }
    if (bw.z > 0.02) { vec4 nZ = textureGrad(Nm, uvZ, gxZ, gyZ); a += textureGrad(T, uvZ, gxZ, gyZ).rgb * bw.z; tZ = nZ.xy * 2.0 - 1.0; rough += nZ.b * bw.z; }
    vec3 sn = sign(n);
    N = normalize(n + (vec3(0.0, tX.y, tX.x * sn.x) * bw.x + vec3(tY.x * sn.y, 0.0, tY.y) * bw.y + vec3(tZ.x * sn.z, tZ.y, 0.0) * bw.z) * uBump);
    return a * cav;
  }

  void main() {
    pW = uLocal > 0.5 ? vO * uLocal : vW;
    #ifdef SURFACE
      // Opaque unlit pixels are exactly black. Avoid triplanar/POM/noise work
      // there, retaining their depth so walls still occlude lit surfaces.
      if (uLit <= 0.0 && uPat < 7.5) {
        bool reached = false;
        for (int i = 0; i < MAXP; i++) {
          if (float(i) >= uN) break;
          vec3 toPulse = uP[i].xyz - vW;
          if (uQ[i].z > 0.0 && dot(toPulse, toPulse) <= uQ[i].x * uQ[i].x) { reached = true; break; }
        }
        if (!reached) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
      }
    #endif
    vec3 n = normalize(vN);
    vec3 V = normalize(cameraPosition - vW);
    #ifdef SURFACE
      // decals live on one face of a wall with no thickness: from behind they
      // must not show through it
      if (uPat > 7.5 && dot(n, V) < 0.0) discard;
      if (dot(n, V) < 0.0) n = -n; // double-sided / inverted geometry
    #endif
    vec3 albedo = vec3(0.5);
    vec3 N = n;
    float rough = 0.8;

    #ifdef SURFACE
      float alpha = 1.0;
      if (uPat > 7.5) {
        // decal: RGBA texture on a quad
        vec4 dc = texture2D(uTex, vUv);
        albedo = dc.rgb;
        alpha = dc.a;
        if (alpha < 0.02) discard;
        rough = uWet > 0.0 ? mix(0.7, 0.18, uWet * smoothstep(0.3, 0.9, alpha)) : 0.85;
        N = n;
      } else
      if (uPat < 4.5 || (uPat > 6.5 && uPat < 7.5)) {
        // triplanar photo material (pat 7: two-tone wall, lower part uses map 2)
        vec3 nb = uLocal > 0.5 ? normalize(vNo) : n;
        vec3 bw = pow(abs(nb), vec3(4.0));
        bw /= (bw.x + bw.y + bw.z);
        albedo = tri(uTex, uNrm, uHgt, uScale, n, bw, N, rough);
        if (uPat > 6.5) {
          float wob = (vnoise(vec3(vW.x * 3.0, 0.0, vW.z * 3.0)) - 0.5) * 0.015;
          if (vW.y < uSplit + wob) albedo = tri(uTex2, uNrm2, uHgt2, uScale2, n, bw, N, rough);
          // painted divider stripe
          float st = smoothstep(0.035, 0.02, abs(vW.y - uSplit - wob));
          albedo = mix(albedo, albedo * 0.35, st);
        }
        if (uPat > 0.5 && uPat < 1.5) {
          // standing water over the tiles: dark, mirror-like, rippling
          vec2 rp = vec2(sin(vW.x * 7.0 + uTime * 1.4 + sin(vW.z * 3.0)), sin(vW.z * 6.0 - uTime * 1.1 + sin(vW.x * 2.0)));
          vec2 rp2 = vec2(sin(vW.x * 19.0 - uTime * 2.3 + vW.z * 4.0), sin(vW.z * 17.0 + uTime * 1.9 - vW.x * 3.0));
          N = normalize(vec3(0.0, 1.0, 0.0) + vec3(rp.x + rp2.x * 0.5, 0.0, rp.y + rp2.y * 0.5) * 0.14);
          albedo *= 0.12;
          rough = 0.12;
        } else if (uPat > 2.5 && uPat < 3.5) {
          // crushed glass on the floor glints
          if (hash(floor(vW * 40.0)) > 0.93) { rough = 0.02; N = normalize(n + (vec3(hash(floor(vW * 41.0)), 0.0, hash(floor(vW * 43.0))) - 0.5) * 1.2); }
        }
        if (uGrime > 0.0) {
          // water stains running down from the ceiling, damp rising from the floor, mould
          float h = vW.x * 1.7 + vW.z * 1.7;
          float drip = smoothstep(0.55, 0.85, vnoise(vec3(h * 4.0, vW.y * 0.35, 0.0))) * smoothstep(0.0, 1.5, vW.y);
          float damp = (1.0 - smoothstep(0.0, 0.7 + vnoise(vec3(h * 2.0, 0.0, 3.0)) * 0.6, vW.y)) * step(abs(n.y), 0.5);
          float mould = smoothstep(0.62, 0.8, fbm(vW * 1.3 + 11.0)) * fbm(vW * 9.0);
          float g = clamp(drip * 0.6 + damp * 0.55 + mould * 0.9, 0.0, 1.0) * uGrime;
          albedo *= mix(vec3(1.0), vec3(0.32, 0.3, 0.24), g);
          rough = mix(rough, 0.25, damp * uGrime * 0.6);
        }
      } else if (uPat < 5.5) {
        // flesh: clammy, mottled, wet skin with veins
        float m = fbm(pW * 9.0);
        float veins = smoothstep(0.03, 0.0, abs(fbm(pW * 4.0 + 3.1) - 0.5)) * 0.6;
        albedo = mix(vec3(0.16, 0.13, 0.12), vec3(0.34, 0.29, 0.27), m) * (1.0 - veins * 0.7);
        float e = 0.01;
        // skin bump from a single noise octave (three were 3x the cost for detail
        // too fine to see at this scale)
        float h0 = vnoise(pW * 30.0);
        vec3 grad = vec3(vnoise((pW + vec3(e, 0, 0)) * 30.0) - h0, vnoise((pW + vec3(0, e, 0)) * 30.0) - h0, vnoise((pW + vec3(0, 0, e)) * 30.0) - h0) / e * 0.6;
        N = normalize(n - (grad - dot(grad, n) * n) * 0.02 * uBump);
        rough = mix(0.75, 0.3, uWet * smoothstep(0.35, 0.7, fbm(pW * 5.0 + 7.0)));
        if (uHuman > 0.5) {
          // Living hands: subtle pores/colour, without the creature's wet mottling.
          float pores = vnoise(pW * 240.0);
          float tone = vnoise(pW * 35.0);
          albedo = mix(vec3(0.42, 0.285, 0.23), vec3(0.51, 0.355, 0.29), tone) * (0.97 + pores * 0.035);
          rough = 0.69 + pores * 0.06;
        }
      } else {
        // glass
        albedo = vec3(0.03);
        rough = 0.05;
      }
    #endif

    #ifdef USE_COLOR
      albedo *= vColor;
    #endif
    vec3 acc = vec3(0.0);
    vec3 edge = vec3(0.0);
    for (int i = 0; i < MAXP; i++) {
          if (float(i) >= uN) break;
      vec4 P = uP[i];
      vec4 Q = uQ[i];
      if (Q.z <= 0.0) continue;
      // its waves stay hidden unless you are listening for them
      Q.z *= (uC[i].r > 0.8 && uC[i].g < 0.3) ? uListen : 1.0;
      if (Q.z <= 0.001) continue;
      float age = uTime - P.w;
      if (age < 0.0) continue;
      vec3 Lv = P.xyz - vW;
      float d = length(Lv);
      if (d > Q.x) continue;
      vec3 L = Lv / max(d, 1e-3);
      // gentle falloff: far surfaces fade out gradually instead of dropping off a cliff
      float f = 1.0 - smoothstep(0.0, Q.x, d);
      // Soft area fade, with a faint, broad travelling line on top.
      float onset = smoothstep(0.0, ${hs}, age);
      float fadeAge = max(0.0, age - ${hs}) * Q.w;
      float trail = exp(-fadeAge * fadeAge);
      float frontOffset = (d - age * Q.y) / 1.0;
      float front = exp(-frontOffset * frontOffset);
      float frontFade = smoothstep(0.0, 0.12, age) * (1.0 - smoothstep(0.6, 1.0, age * Q.y / Q.x));
      // light colour: mostly cold white, a hint of the source's hue
      vec3 c = uC[i];
      c = mix(vec3(dot(c, vec3(0.3, 0.5, 0.2))), c, 0.4 + 0.4 * step(0.8, c.r - c.g));
      float wave = (onset * trail * 0.6 + front * frontFade * ${md}) * f * Q.z;
      #ifdef SURFACE
        // wrapped diffuse + a little bounce: the side turned away is dim, not black,
        // and the edge between light and shade is soft
        float wl = dot(N, L) * 0.5 + 0.5;
        float dif = wl * wl * 0.8 + (dot(n, L) * 0.5 + 0.5) * 0.08 + 0.07;
        vec3 H = normalize(L + V);
        float shin = mix(90.0, 6.0, rough);
        float spec = pow(max(dot(N, H), 0.0), shin) * (1.0 - rough) * (1.0 + uWet * 2.0);
        float fres = uPat > 0.5 && uPat < 1.5 ? pow(1.0 - max(dot(N, V), 0.0), 4.0) * 0.5 : 0.0;
        acc += c * wave * (dif * albedo + spec * 0.5 + fres);
      #else
        edge += c * wave;
        acc += c * wave * 0.15 * max(uBoost - 1.5, 0.0);
      #endif
    }

    // overlapping waves and surfaces right next to the source: roll off the
    // highlights instead of blowing them out
    #ifdef SURFACE
      acc = acc / (1.0 + max(max(acc.r, acc.g), acc.b) * 0.75);
    #endif
    float cd = distance(vW, cameraPosition);
    float fog = exp(-cd * 0.055);
    vec3 col;
    #ifdef SURFACE
      vec3 litTerm = vec3(0.0);
      if (uLit > 0.0) {
        // harsh under-light for the screamer
        vec3 L = normalize(cameraPosition + vec3(0.0, -0.9, 0.0) - vW);
        float dif = pow(max(dot(N, L), 0.0), 1.4);
        vec3 H = normalize(L + V);
        litTerm = uLit * (albedo * (0.05 + dif * 1.4) + pow(max(dot(N, H), 0.0), 40.0) * 0.6);
        if (uHuman > 0.5) {
          // Soft light above the player gives tendons/knuckles volume even
          // between echoes, without the creature's harsh wet under-light.
          L = normalize(cameraPosition + vec3(-0.45, 0.8, 0.3) - vW);
          H = normalize(L + V);
          litTerm = uLit * (albedo * (0.18 + max(dot(N, L), 0.0) * 1.05) + pow(max(dot(N, H), 0.0), 25.0) * 0.05);
        }
      }
      col = (acc * fog * 1.25 + litTerm) * uBoost * uTint;
    #else
      col = (edge * 0.3 + acc) * fog * uBoost * uTint;
    #endif
    // depth haze: distance drains contrast and colour into a cold murk
    float hz = 1.0 - exp(-max(cd - 2.0, 0.0) * 0.06);
    col = mix(col, vec3(dot(col, vec3(0.3, 0.55, 0.15))) * vec3(0.82, 0.93, 1.08) * 0.85, hz * 0.55);
    col = col / (1.0 + col * 1.1);
    #ifdef SURFACE
      gl_FragColor = vec4(col, alpha);
    #else
      gl_FragColor = vec4(col, 1.0);
    #endif
  }
`,B2=new w2,Bl={};let Gh=1;function hh(i){Gh=i;for(const t of gd)t.userData.relief!==void 0&&(t.uniforms.uPom.value=t.userData.relief*i)}const gd=[];function lo(i,t){const e=t==="h"?"h":t?"c":"n",n=i+e;if(Bl[n])return Bl[n];const s=i.startsWith("decal:"),o=B2.load(s?`tex/decals/${i.slice(6)}.png`:`tex/${i}_${e}.jpg`);return o.wrapS=o.wrapT=cs,o.anisotropy=8,o.colorSpace=t===!0?Un:zi,Bl[n]=o}const H2={brick:.0918,brick2:.0918,cfloor:.0612,conc3:.0551,grate:.0765,dplate:.0306,plates:.0367,plates2:.0367,tile:.0245,wtile:.0214,wtile2:.0214,btile:.0214,tile3:.0245,tile4:.0245,terrazzo:.0122,wall:.0367,ceil:.0306,conc2:.0428,bunker:.049,plaster:.0367,plaster2:.0367,plaster3:.0367,plaster4:.0367,paper:.0122,paper2:.0122,corr:.0612,boards:.0367,parquet:.0184,planks:.0428,oceil:.0367,rust:.0306,iron:.0245,carpet:.0122,carpet2:.0122,rug:.0122};function at({kind:i="surface",tint:t=16777215,boost:e=1,pat:n=0,map:s="metal",scale:o=.5,bump:r=1,wet:a=0,map2:l=null,scale2:c=.5,split:h=1.4,grime:u=0,human:f=!1}={}){const d=i==="surface",m=d&&n!==1&&n!==3&&n!==8?H2[s]??0:0,x=new Ue({vertexShader:F2,fragmentShader:O2,vertexColors:f,defines:d?{SURFACE:1}:{},uniforms:{uTime:_e.uTime,uP:_e.uP,uQ:_e.uQ,uC:_e.uC,uN:_e.uN,uListen:_e.uListen,uTint:{value:new Kt(t)},uBoost:{value:e},uPat:{value:n},uLit:{value:0},uHuman:{value:f?1:0},uLocal:{value:0},uTex:{value:d?lo(s,!0):null},uNrm:{value:d?lo(s,!1):null},uScale:{value:o},uBump:{value:r},uWet:{value:a},uTex2:{value:d?lo(l||s,!0):null},uNrm2:{value:d?lo(l||s,!1):null},uScale2:{value:c},uSplit:{value:h},uGrime:{value:u},uHgt:{value:d&&m>0?lo(s,"h"):null},uHgt2:{value:d&&m>0?lo(l||s,"h"):null},uPom:{value:m*Gh}},side:d?ui:Bi,visible:i!=="line"});return d&&(x.polygonOffset=!0,x.polygonOffsetFactor=1,x.polygonOffsetUnits=1),n===8&&(x.transparent=!0,x.depthWrite=!1,x.polygonOffsetFactor=-2,x.polygonOffsetUnits=-4),n===6&&(x.transparent=!0,x.depthWrite=!1,x.blending=Co),d&&(x.userData.relief=m,gd.push(x)),x}function xd(i,{tint:t=16777215,boost:e=1,size:n=2.2}={}){const s=new Ue({uniforms:{uTime:_e.uTime,uP:_e.uP,uQ:_e.uQ,uC:_e.uC,uN:_e.uN,uListen:_e.uListen,uTint:{value:new Kt(t)},uBoost:{value:e},uSize:{value:n}},vertexShader:`
      #define MAXP ${yi}
      uniform vec4 uP[MAXP]; uniform vec4 uQ[MAXP]; uniform vec3 uC[MAXP]; uniform float uN; uniform float uListen;
      uniform float uTime; uniform float uSize;
      varying vec3 vCol;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vec3 acc = vec3(0.0);
        if (distance(w.xyz, cameraPosition) > 24.0 || uN < 0.5) {
          // too far to show a point: skip the work entirely
          gl_PointSize = 0.0;
          gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
          vCol = vec3(0.0);
          return;
        }
        for (int i = 0; i < MAXP; i++) {
          if (float(i) >= uN) break;
          vec4 P = uP[i]; vec4 Q = uQ[i];
          if (Q.z <= 0.0) continue;
          Q.z *= (uC[i].r > 0.8 && uC[i].g < 0.3) ? uListen : 1.0;
          if (Q.z <= 0.001) continue;
          float age = uTime - P.w;
          if (age < 0.0) continue;
          float d = distance(w.xyz, P.xyz);
          if (d > Q.x) continue;
          float f = 1.0 - smoothstep(0.0, Q.x, d);
          vec3 c = mix(vec3(dot(uC[i], vec3(0.3, 0.5, 0.2))), uC[i], 0.5);
          float fadeAge = max(0.0, age - ${hs}) * 7.0;
          acc += c * smoothstep(0.0, ${hs}, age) * exp(-fadeAge * fadeAge) * 0.7 * f * Q.z;
        }
        vec4 mv = viewMatrix * w;
        vCol = acc * exp(-length(mv.xyz) * 0.07);
        gl_PointSize = clamp(uSize * 3.0 / -mv.z, 1.0, uSize) * (0.6 + min(1.0, length(acc)) * 0.6);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uTint; uniform float uBoost;
      varying vec3 vCol;
      void main() {
        if (dot(vCol, vCol) < 1e-4) discard;
        float a = smoothstep(0.5, 0.1, length(gl_PointCoord - 0.5));
        vec3 col = vCol * a * uBoost * uTint * 0.5;
        gl_FragColor = vec4(col / (1.0 + col), 1.0);
      }`,transparent:!0,depthWrite:!1,blending:Co}),o=new sd(i,s);return o.visible=!1,o.frustumCulled=!1,o}class V2{constructor(){this.time=0,this.listeners=[]}emit(t,{radius:e=6,speed:n=11,strength:s=1,decay:o=.8,color:r=Zt.player}={}){const a=this.time;let l=0,c=-1/0;for(let h=0;h<yi;h++){const u=_e.uQ.value[h],f=_e.uP.value[h];if(u.z<=0){l=h,c=1/0;break}const d=a-f.w,m=u.x/u.y+9/u.w,x=d/m-u.z*.1;x>c&&(c=x,l=h)}_e.uP.value[l].set(t.x,t.y,t.z,a),_e.uQ.value[l].set(e,n,s,o),_e.uC.value[l].copy(r),_e.uN.value=Math.max(_e.uN.value,l+1)}update(t){this.time+=t,_e.uTime.value=this.time;const e=_e.uP.value,n=_e.uQ.value,s=_e.uC.value;let o=0;for(let r=0;r<yi;r++){const a=n[r];if(a.z<=0)continue;if(this.time-e[r].w>a.x/a.y+9/a.w){a.z=0;continue}r!==o&&(e[o].copy(e[r]),n[o].copy(a),s[o].copy(s[r]),a.z=0),o++}_e.uN.value=o}clear(){for(let t=0;t<yi;t++)_e.uQ.value[t].z=0;_e.uN.value=0}litAt(t){let e=0;for(let n=0;n<yi;n++){const s=_e.uQ.value[n],o=_e.uP.value[n];if(s.z<=0)continue;const r=this.time-o.w,a=Math.hypot(t.x-o.x,t.y-o.y,t.z-o.z);if(a>s.x||r<0)continue;const l=Vt.smoothstep(r,0,hs),c=Math.max(0,r-hs)*s.w,h=Math.exp(-c*c),u=1-Vt.smoothstep(a,0,s.x),f=(a-r*s.y)/1,d=Math.exp(-f*f),m=Vt.smoothstep(r,0,.12)*(1-Vt.smoothstep(r*s.y/s.x,.6,1)),x=(l*h*.6+d*m*md)*u*s.z;x>e&&(e=x)}return e}}const be=new V2;function vd(i){_e.uListen.value=i}function G2(i=2200){const t=new Float32Array(i*3),e=new Float32Array(i);for(let r=0;r<i;r++)t[r*3]=Math.random(),t[r*3+1]=Math.random(),t[r*3+2]=Math.random(),e[r]=Math.random();const n=new Ye;n.setAttribute("position",new Xn(t,3)),n.setAttribute("seed",new Xn(e,1));const s=new Ue({uniforms:{uTime:_e.uTime,uP:_e.uP,uQ:_e.uQ,uC:_e.uC,uN:_e.uN,uListen:_e.uListen,uCam:{value:new D},uBox:{value:new D(9,3.2,9)}},vertexShader:`
      #define MAXP ${yi}
      uniform vec4 uP[MAXP]; uniform vec4 uQ[MAXP]; uniform vec3 uC[MAXP]; uniform float uN; uniform float uListen;
      uniform float uTime; uniform vec3 uCam; uniform vec3 uBox;
      attribute float seed;
      varying vec3 vCol;
      void main() {
        vec3 p = position * uBox;
        p += vec3(sin(uTime * 0.11 + seed * 40.0) * 0.4, -uTime * 0.025 * (0.5 + seed), cos(uTime * 0.09 + seed * 31.0) * 0.4);
        vec3 base = vec3(uCam.x, 0.0, uCam.z) - vec3(uBox.x, 0.0, uBox.z) * 0.5;
        p = base + mod(p - base, uBox);
        vec3 acc = vec3(0.0);
        for (int i = 0; i < MAXP; i++) {
          if (float(i) >= uN) break;
          vec4 P = uP[i]; vec4 Q = uQ[i];
          if (Q.z <= 0.0) continue;
          Q.z *= (uC[i].r > 0.8 && uC[i].g < 0.3) ? uListen : 1.0;
          if (Q.z <= 0.001) continue;
          float age = uTime - P.w;
          if (age < 0.0) continue;
          float d = distance(p, P.xyz);
          if (d > Q.x) continue;
          float f = 1.0 - smoothstep(0.0, Q.x, d);
          float fadeAge = max(0.0, age - ${hs}) * Q.w;
          acc += uC[i] * smoothstep(0.0, ${hs}, age) * exp(-fadeAge * fadeAge) * 0.35 * f * Q.z;
        }
        vCol = acc * (0.08 + seed * 0.16);
        vec4 mv = viewMatrix * vec4(p, 1.0);
        gl_PointSize = clamp(2.4 / -mv.z * (0.5 + seed), 0.5, 3.0) * 2.2;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying vec3 vCol;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float a = smoothstep(0.5, 0.0, length(c));
        gl_FragColor = vec4(vCol * a, 1.0);
      }`,transparent:!0,depthWrite:!1,blending:Co}),o=new sd(n,s);return o.frustumCulled=!1,o}let Oe=44100;const st=(i=0,t=1)=>i+Math.random()*(t-i),uh=()=>(Math.random()+Math.random()+Math.random()+Math.random()-2)*.866,W2=i=>i[Math.floor(Math.random()*i.length)],Se=i=>new Float32Array(Math.max(1,Math.ceil(i*Oe)));function Hl(i,t,e){const n=2*Math.PI*Math.min(Math.max(t,10),Oe*.45)/Oe,s=Math.cos(n),o=Math.sin(n),r=o/(2*e);let a,l,c;const h=1+r,u=-2*s,f=1-r;return i==="lp"?(a=(1-s)/2,l=1-s,c=a):i==="hp"?(a=(1+s)/2,l=-(1+s),c=a):(a=r,l=0,c=-r),[a/h,l/h,c/h,u/h,f/h]}function Gt(i,t,e,n=.707){const s=new Float32Array(i.length),o=typeof e=="function";let r=o?Hl(t,e(0),n):Hl(t,e,n),a=0,l=0,c=0,h=0;for(let u=0;u<i.length;u++){o&&!(u&31)&&(r=Hl(t,e(u/Oe),n));const f=i[u],d=r[0]*f+r[1]*a+r[2]*l-r[3]*c-r[4]*h;l=a,a=f,h=c,c=d,s[u]=d}return s}function hn(i,t){let e=0;for(const[o,r]of t)e=Math.max(e,5*r/(Math.PI*o));const n=Math.min(i.length+Math.ceil(e*Oe),Math.ceil(4*Oe));if(n>i.length){const o=new Float32Array(n);o.set(i),i=o}const s=new Float32Array(i.length);for(const[o,r,a]of t){const l=Gt(i,"bp",o,r),c=a*Math.sqrt(r);for(let h=0;h<s.length;h++)s[h]+=l[h]*c}return s}function xt(i,t,e=0,n=1){const s=Math.floor(e*Oe);for(let o=0;o<t.length&&o+s<i.length;o++)o+s>=0&&(i[o+s]+=t[o]*n);return i}function xe(i){const t=Se(i);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;return t}function Wh(i){const t=Se(i);let e=0;for(let n=0;n<t.length;n++)e=(e+.02*(Math.random()*2-1))/1.02,t[n]=e*3.5;return t}function de(i,t){const e=i.length/Oe;for(let n=0;n<i.length;n++)i[n]*=t(n/Oe,e);return i}const Hi=(i,t)=>e=>e<i?e/i:Math.exp(-(e-i)/t),Vi=(i,t)=>(e,n)=>Math.min(1,e/i)*Math.min(1,(n-e)/t);function mn(i,t,e=5e-4){return de(xe(i),Hi(e,t))}function Xs(i,t=1){const e=Se(i);return e[0]=t,e[1]=-t*.6,e}function ja(i,t){const e=Math.tanh(t);for(let n=0;n<i.length;n++)i[n]=Math.tanh(i[n]*t)/e;return i}function Mr(i,t=.9,e=!0){let n=0;for(let o=0;o<i.length;o++)n=Math.max(n,Math.abs(i[o]));if(n>0)for(let o=0;o<i.length;o++)i[o]*=t/n;const s=e?Math.min(64,i.length>>2):0;for(let o=0;o<s;o++)i[i.length-1-o]*=o/s;return i}function Xi(i,t,e,n,s,o,r=1.5){const a=Se(i);for(let l=0;l<t;l++){const c=Math.pow(Math.random(),r)*e,h=Xs(.03,st(.2,1)*(1-c/(e*1.3)));xt(a,hn(h,[[st(n,s),o,1]]),c)}return a}function mi(i,t,{jitter:e=.03,shimmer:n=.1,sub:s=0,skip:o=0,tilt:r=2200}={}){const a=Se(i);let l=0,c=0;for(;l<i;){const h=Math.max(5,t(l/i,l));let u=1+uh()*n;if(s&&c%2&&(u*=1-s),!(o&&Math.random()<o)){const f=Math.floor(l*Oe),d=Oe*Math.min(.0012,.25/h);for(let m=0;m<d*5&&f+m<a.length;m++)a[f+m]+=u*Math.exp(-m/d)*(m<2?1:.8)}l+=1/h*(1+uh()*e),c++}return Gt(a,"lp",r,.6)}function Je(i,t){const e=new Float32Array(i.length);for(const[n,s,o]of t){const r=Gt(i,"bp",n,s),a=o*Math.sqrt(s);for(let l=0;l<e.length;l++)e[l]+=r[l]*a}return e}function us(i){const t=Array.from({length:64},()=>Math.random());return e=>{const n=e*i,s=Math.floor(n)%63,o=n-Math.floor(n),r=o*o*(3-2*o);return t[s]*(1-r)+t[s+1]*r}}const fe={};function Md(i,t,e){const n=Se(i),s=mn(.04,.0025);xt(n,Gt(hn(s,t),"lp",2400),0,1),xt(n,Gt(s,"bp",2400,1.2),0,.25);const o=st(.045,.085);if(xt(n,Gt(hn(mn(.03,.0018),t),"lp",3e3),o,.5),e){const r=de(xe(.09),Hi(.006,.03));xt(n,Gt(Gt(r,"bp",st(2200,3200),.9),"lp",6e3),o,e),xt(n,Xi(.12,Math.floor(st(4,12)),.07,2500,6500,4),o,e*.5)}return n}fe.step_tile=()=>{const i=[[st(95,125),3,1],[st(220,260),5,.6],[st(480,560),7,.35],[st(1100,1400),6,.15]];return Md(.35,i,.45)};fe.step_carpet=()=>{const i=Se(.3);return xt(i,Gt(mn(.06,.012,.004),"lp",380,.8),0,1),xt(i,Gt(de(xe(.12),Hi(.01,.04)),"bp",2600,.7),.05,.12),i};fe.step_water=()=>{const i=Se(.75);xt(i,Gt(mn(.05,.006),"bp",900,.8),0,.8);const t=de(xe(.45),Hi(.012,.11)),e=st(500,800);xt(i,Gt(t,"bp",s=>e+1600*Math.exp(-s*18)+500*s,.8),0,1.2),xt(i,Gt(de(xe(.5),Hi(.03,.15)),"lp",260),.01,.9);const n=Math.floor(st(14,26));for(let s=0;s<n;s++){const o=.03+Math.pow(Math.random(),1.6)*.5,r=st(900,3800),a=st(.012,.04),l=st(1.3,2.2),c=Se(a*3);let h=0;for(let u=0;u<c.length;u++){const f=u/Oe;h+=2*Math.PI*r*(1+(l-1)*Math.min(1,f/a))/Oe,c[u]=Math.sin(h)*Math.exp(-f/(a*.6))}xt(i,c,o,st(.04,.16))}return xt(i,Xi(.5,20,.35,3e3,8e3,3),.02,.25),i};fe.step_glass=()=>{const i=Se(.4);return xt(i,fe.step_carpet(),0,.5),xt(i,Xi(.35,Math.floor(st(45,80)),.16,2800,10500,22,2.2),.005,1),xt(i,Gt(de(xe(.2),Hi(.004,.05)),"bp",4500,1.2),0,.3),i};fe.step_metal=()=>{const i=Se(.9),t=st(.9,1.1),e=mn(.02,.0015);xt(i,hn(e,[[212*t,40,.5],[347*t,45,.4],[589*t,55,.3],[873*t,60,.22],[1243*t,60,.16],[1782*t,70,.1],[2611*t,70,.06]]),0,.5),xt(i,Gt(hn(mn(.03,.003),[[110,3,1]]),"lp",400),0,1.2);const n=xe(.18),s=st(30,45);return de(n,o=>Math.exp(-o/.05)*(Math.sin(2*Math.PI*s*o)>.3?1:.15)),xt(i,Gt(n,"bp",1600,1.5),.01,.35),xt(i,Md(.3,[[180,3,1],[420,5,.4]],.2),0,.5),i};fe.breath_in=(i=!1)=>{const t=i?st(.45,.6):st(.8,1.05),e=us(9),n=de(xe(t),(o,r)=>Math.sin(Math.PI*Math.min(1,o/r))**1.5*(.75+.5*e(o)));let s=Je(n,[[st(1e3,1300),2.2,.6],[st(2300,2700),3,.35],[4200,2,.15]]);return s=Gt(s,"hp",350),i&&xt(s,Je(mi(t,()=>st(95,105),{jitter:.08,shimmer:.3}),[[650,5,.4],[1100,6,.2]]),0,.12),s};fe.breath_out=(i=!1)=>{const t=i?st(.5,.7):st(1,1.3),e=us(7),n=de(xe(t),(o,r)=>Math.min(1,o/.08)*Math.pow(1-o/r,1.4)*(.7+.6*e(o)));let s=Je(n,[[st(500,650),1.8,.7],[st(1150,1400),2.5,.35],[2600,3,.15]]);return s=Gt(s,"lp",3500),i&&xt(s,Je(mi(t,o=>110-20*o,{jitter:.06,shimmer:.25}),[[600,5,.5],[1e3,6,.25]]),0,.18),s};fe.gasp=()=>{const i=Se(1.6),t=de(xe(.45),n=>Math.min(1,n/.03)*Math.exp(-n/.25));xt(i,Gt(Je(t,[[1400,2,.6],[2800,3,.4]]),"hp",500),0,1),xt(i,Je(mi(.4,n=>220+90*n,{jitter:.05,shimmer:.3}),[[750,6,.5],[1250,7,.3],[2700,8,.15]]),.02,.35);const e=de(xe(.9),(n,s)=>Math.min(1,n/.05)*(1-n/s)*(.6+.4*Math.sin(n*2*Math.PI*7)));return xt(i,Je(e,[[600,2,.6],[1300,2.5,.3]]),.6,.7),i};fe.heart=()=>{const i=Se(.55),t=mn(.06,.008,.002);return xt(i,Gt(hn(t,[[42,6,1],[68,5,.6],[110,4,.2]]),"lp",180),0,1),xt(i,Gt(hn(mn(.05,.006,.002),[[55,6,1],[92,5,.5]]),"lp",220),st(.24,.28),.65),i};fe.click=()=>{const i=Se(.12),t=Xs(.1);return xt(i,hn(t,[[st(1150,1450),9,1],[st(2600,3100),7,.45],[5200,4,.12]]),0,1),xt(i,Gt(mn(.01,8e-4),"hp",2e3),0,.3),i};fe.stone=()=>{const i=Se(.45),t=(e,n)=>{const s=Xs(.2,e);xt(i,hn(s,[[st(1800,2600),18,.5],[st(3200,4400),20,.35],[st(5e3,7e3),22,.2],[st(380,520),6,.6]]),n),xt(i,Gt(mn(.02,.002),"bp",3e3,1),n,e*.3)};return t(1,0),t(.35,st(.07,.12)),t(.12,st(.16,.22)),xt(i,Xi(.4,6,.3,3e3,6e3,10),.05,.15),i};fe.whoosh=()=>{const i=de(xe(.35),(t,e)=>Math.sin(Math.PI*t/e)**2);return Gt(i,"bp",t=>400+900*Math.sin(Math.PI*t/.35),1.2)};fe.drip=()=>{const i=Se(.4);xt(i,Gt(Xs(.01),"hp",3e3),0,.15);const t=st(700,1700),e=st(.02,.05),n=st(1.5,2.6),s=Se(e*4);let o=0;for(let r=0;r<s.length;r++){const a=r/Oe;o+=2*Math.PI*t*(1+(n-1)*Math.min(1,a/e)**.7)/Oe,s[r]=Math.sin(o)*Math.min(1,a/8e-4)*Math.exp(-a/(e*.55))}return xt(i,s,.001,.8),Math.random()<.5&&xt(i,s.map(r=>r*.3),st(.05,.09)),i};fe.spark=()=>{const i=Se(.8),t=Math.floor(st(3,6));for(let n=0;n<t;n++){const s=st(0,.45),o=st(.02,.12),r=de(xe(o),()=>Math.random()<.35?1:.05);xt(i,ja(Gt(r,"hp",1800),3),s,st(.4,1))}const e=Se(.6);for(let n=0;n<e.length;n++){const s=n/Oe;e[n]=Math.sign(Math.sin(2*Math.PI*100*s))*(.8+.2*Math.random())}return xt(i,de(Gt(e,"bp",400,1.5),Vi(.05,.2)),.05,.12),i};fe.creak=()=>{const i=st(1.4,2.8),t=us(st(1,2.5)),e=mi(i,(s,o)=>18+70*t(o),{jitter:.12,shimmer:.4,skip:.05,tilt:5e3});let n=hn(e,[[st(150,220),18,.6],[st(380,470),22,.45],[st(780,900),25,.3],[st(1400,1700),25,.2]]);return n=de(n,Vi(.3,.6)),xt(n,Gt(de(Wh(i),Vi(.5,.8)),"lp",120),0,.6),n};fe.knock=()=>{const i=Se(1.8),t=Math.floor(st(1,4));for(let e=0;e<t;e++)xt(i,Gt(hn(mn(.02,.003),[[st(90,140),12,1],[st(260,330),18,.5],[st(610,700),25,.3]]),"lp",900),e*st(.18,.4),1/(e+1));return i};fe.door=()=>{const i=Se(1.9),t=mi(1.2,e=>120+60*Math.sin(e*Math.PI),{jitter:.01,shimmer:.05,tilt:6e3});return xt(i,de(Je(t,[[900,4,.6],[1800,5,.3]]),Vi(.08,.15)),0,.4),xt(i,de(Gt(xe(1.2),"bp",1500,1),Vi(.1,.2)),0,.12),xt(i,Gt(hn(mn(.04,.006),[[70,6,1],[140,8,.5],[330,12,.3]]),"lp",900),1.2,1.2),xt(i,Xi(.3,8,.15,1500,4e3,12),1.21,.3),i};fe.slam=()=>{const i=Se(2.2);return xt(i,hn(mn(.03,.004),[[78,20,1],[131,25,.7],[207,30,.5],[344,40,.35],[571,45,.25],[902,50,.15]]),0,1),xt(i,Gt(mn(.2,.05),"lp",400),0,1),xt(i,Xi(.6,10,.4,1500,5e3,15),.03,.3),i};fe.crash=()=>{const i=Se(3.2);xt(i,Gt(de(Wh(2.5),Hi(.01,.6)),"lp",200),0,2);for(let t=0;t<28;t++){const e=Math.pow(Math.random(),1.8)*1.6,n=st(.6,1.4);xt(i,hn(mn(.02,.002),[[st(100,300)*n,25,.6],[st(400,900)*n,35,.4],[st(1200,3e3)*n,40,.25]]),e,st(.3,1)*(1-e/2))}return xt(i,Xi(2,80,1.5,1500,7e3,8,2),.05,.6),i};const X2=[[800,1200,2500],[500,900,2400],[350,800,2300],[500,1800,2500],[300,2200,3e3],[650,1100,2600]];fe.whisper=()=>{const i=Se(2.6);let t=st(0,.1);const e=Math.floor(st(6,10));for(let n=0;n<e;n++){if(Math.random()<.35){const a=Gt(de(xe(.09),Vi(.02,.04)),"hp",st(3500,5500));xt(i,a,t,.5),t+=.08}const s=W2(X2),o=st(.1,.24),r=de(xe(o),(a,l)=>Math.sin(Math.PI*a/l));if(xt(i,Je(r,[[s[0],5,.6],[s[1],7,.5],[s[2],9,.3]]),t,1),t+=o+st(0,.12),t>2.3)break}return Gt(i,"hp",300)};fe.pickup=()=>{const i=Se(.4);return xt(i,hn(Xs(.3),[[st(1800,2200),25,.5],[st(3300,3900),30,.3]]),0,.6),xt(i,Gt(de(xe(.2),Hi(.005,.05)),"bp",3e3,1),.03,.4),i};fe.paper=()=>{const i=de(xe(.5),(t,e)=>Math.sin(Math.PI*t/e)*(Math.random()<.15?1:.25));return Gt(Gt(i,"bp",3200,.8),"hp",1200)};fe.ding=()=>{const i=Se(4.5),t=(e,n)=>{const s=Xs(3.5);xt(i,hn(s,[[e*.5,300,.4],[e,400,1],[e*1.003,400,.6],[e*2.4,350,.35],[e*3,300,.2],[e*4.1,250,.12]]),n)};return t(880,0),t(698,.55),i};fe.scratch=()=>{const i=Se(.8),t=Math.floor(st(2,4));for(let e=0;e<t;e++){const n=st(.12,.3),s=de(xe(n),(o,r)=>Math.sin(Math.PI*o/r)*(.5+.5*(Math.random()<.3?1:0)));xt(i,Gt(s,"bp",st(2500,4500),2),e*st(.15,.25),1),xt(i,Xi(n+.05,10,n,3e3,7e3,12),e*.2,.4)}return i};fe.m_step=()=>{const i=Se(.6),t=mn(.08,.012,.003);xt(i,Gt(hn(t,[[st(55,70),4,1],[st(100,130),5,.6],[st(240,300),5,.25]]),"lp",450),0,1.4),xt(i,Gt(de(xe(.06),Hi(.002,.012)),"bp",st(700,1100),1),.003,.5);const e=Math.floor(st(2,5));let n=st(.02,.05);for(let s=0;s<e;s++)xt(i,hn(Xs(.05),[[st(2800,4200),25,.6],[st(5e3,7500),30,.35]]),n,st(.25,.6)),n+=st(.012,.045);return Math.random()<.5&&xt(i,Gt(de(xe(.12),(s,o)=>Math.sin(Math.PI*s/o)),"bp",st(3500,5500),3),n,.12),i};fe.m_croak=()=>{const i=st(1,2.6),t=us(st(2,4)),e=us(st(1.5,3)),n=st(14,26),s=st(35,70),o=mi(i,(l,c)=>n+(s-n)*t(c),{jitter:.28,shimmer:.45,skip:.06,tilt:3500});let r=Je(o,[[l=>380+260*e(l),6,.9],[l=>950+400*e(l),8,.55],[l=>2300+500*t(l),9,.3],[3600,7,.12]]);const a=de(xe(i),()=>.15+.15*Math.random());return xt(r,Je(a,[[600,3,.5],[1300,4,.3]]),0,.25),de(r,Vi(st(.05,.25),.3))};fe.m_click=()=>{const i=st(.5,.9),t=mi(i,()=>st(16,24),{jitter:.15,shimmer:.3,tilt:7e3});return de(Je(t,[[st(1400,1900),14,1],[st(3e3,3600),12,.5],[500,6,.3]]),Vi(.02,.1))};fe.m_breath_in=()=>{const i=st(.9,1.4),t=st(22,34),e=de(xe(i),(o,r)=>Math.sin(Math.PI*o/r)**1.3*(.55+.45*(Math.sin(2*Math.PI*t*o+Math.random()*.8)>0?1:.2)));let n=Je(e,[[st(1500,1900),3,.6],[st(2700,3200),4,.35],[st(700,900),4,.4]]);const s=de(xe(i),(o,r)=>Math.sin(Math.PI*o/r)*(Math.random()<.08?1:.1));return xt(n,Gt(s,"bp",st(180,260),4),0,.5),Gt(n,"hp",120)};fe.m_breath_out=()=>{const i=st(1.1,1.7),t=fe.m_croak().slice(0,Math.floor(i*Oe)),e=de(xe(i),(o,r)=>Math.min(1,o/.1)*Math.pow(1-o/r,1.2)),n=Je(e,[[st(450,600),2.5,.8],[st(1e3,1300),3,.4],[2500,4,.15]]),s=Se(i);return xt(s,n,0,1),xt(s,de(t,Vi(.1,.4)),0,.35),s};fe.m_sniff=()=>{const i=Se(1.6);let t=0;const e=Math.floor(st(3,6));for(let s=0;s<e;s++){const o=st(.05,.09),r=de(xe(o),(a,l)=>Math.min(1,a/.008)*Math.min(1,(l-a)/.02));xt(i,Gt(Je(r,[[st(1700,2300),2,.8],[3600,3,.3]]),"hp",700),t,1),t+=o+st(.04,.09)}const n=de(xe(.35),(s,o)=>Math.min(1,s/.01)*Math.exp(-s/.12)*(.6+.4*Math.sin(2*Math.PI*38*s)));return xt(i,Je(n,[[550,3,.8],[1100,3,.4],[180,4,.5]]),t+.12,1.1),i};fe.m_hiss=()=>{const t=mi(1.15,s=>18+160*s*s,{jitter:.2,shimmer:.4,tilt:4e3});let e=Je(t,[[s=>500+600*s,6,.8],[s=>1200+900*s,7,.5],[2800,8,.3]]);const n=de(xe(1.15),(s,o)=>Math.pow(s/o,1.6));return xt(e,Gt(n,"bp",s=>1500+3500*(s/1.15),1.3),0,.9),e=de(e,(s,o)=>Math.min(1,.15+s/o)*Math.min(1,(o-s)/.04)),ja(Mr(e,1),1.8)};function yd(i,t,e,n){const s=us(6),o=mi(i,(a,l)=>t(a)*(.85+.3*s(l)),{jitter:.09,shimmer:.35,sub:.5,tilt:3e3});let r=Je(o,e);return xt(r,Je(de(xe(i),()=>.4+.3*Math.random()),e),0,.35),r=de(r,(a,l)=>Math.min(1,a/.08)*Math.pow(1-a/l,.7)),ja(Mr(r,1),n)}fe.m_roar=()=>yd(st(1.3,1.8),i=>85+50*Math.sin(i*Math.PI),[[i=>650+150*i,4,1],[1150,5,.6],[2600,6,.35],[3500,5,.15]],3.5);fe.scream=()=>{const t=Se(1.9),e=us(12),n=mi(1.9,(r,a)=>(500+500*Math.sin(Math.min(1,r*1.6)*Math.PI*.5))*(.9+.2*e(a)),{jitter:.06,shimmer:.3,tilt:6e3}),s=mi(1.9,(r,a)=>730+400*r+60*e(a+3),{jitter:.08,shimmer:.3,tilt:6e3}),o=[[r=>950+200*Math.sin(r*9),5,1],[r=>1900+300*Math.sin(r*7),6,.7],[3300,7,.4]];return xt(t,Je(n,o),0,1),xt(t,Je(s,o),0,.6),xt(t,yd(1.9,()=>110,[[700,4,1],[1200,5,.6],[2600,6,.3]],2),0,.7),xt(t,Gt(xe(1.9),"hp",2500),0,.15),de(t,(r,a)=>Math.min(1,r/.015)*Math.pow(1-r/a,.5)),ja(Mr(t,1),3)};function q2(i,t){const e=Math.floor(t*Oe),n=i.slice(0,i.length-e);for(let s=0;s<e;s++){const o=s/e;n[s]=n[s]*o+i[i.length-e+s]*(1-o)}return n}fe.room=()=>{const t=Se(11);xt(t,Gt(Wh(11),"lp",160),0,1);const e=us(.4);xt(t,de(Gt(xe(11),"bp",220,.9),s=>.5+.5*e(s)),0,.25),xt(t,Gt(xe(11),"bp",900,1.2),0,.03);const n=Se(11);for(let s=0;s<n.length;s++){const o=s/Oe;n[s]=Math.sin(2*Math.PI*50*o)*.5+Math.sin(2*Math.PI*100*o)*.3+Math.sin(2*Math.PI*150*o)*.12}return xt(t,n,0,.04),q2(t,1)};fe.generator=()=>{const e=Se(2);for(let o=0;o<50;o++){const r=1+uh()*.08;xt(e,mn(.03,.004),o*.04,r),o%2&&xt(e,mn(.02,.003),o*.04+.04*.5,.4*r)}let n=hn(e,[[55,4,1],[110,5,.6],[180,6,.4],[420,8,.25],[900,6,.15]]);n=Gt(n,"lp",1200);const s=Gt(xe(2),"bp",2400,2);return xt(n,s,0,.05),n};fe.motor=()=>{const t=Se(2);for(let e=0;e<t.length;e++){const n=e/Oe;t[e]=Math.sin(2*Math.PI*100*n)*.4+Math.sin(2*Math.PI*300*n)*.1+Math.sin(2*Math.PI*1240*n)*.02}return xt(t,Gt(xe(2),"bp",600,2),0,.15),xt(t,Xi(2,30,2,800,2500,6,1),0,.2),t};function Y2(i,t){const e=Math.floor(t*Oe),n=i.createBuffer(2,e,Oe);for(let s=0;s<2;s++){const o=Gt(xe(t),"lp",500),r=Gt(xe(t),"bp",1500,.6),a=Gt(xe(t),"hp",3500),l=n.getChannelData(s),c=.012;for(let h=0;h<e;h++){const u=h/Oe-c;if(u<0)continue;const f=Math.min(1,u/.04);l[h]=f*(o[h]*Math.exp(-6.9*u/3)*1.2+r[h]*Math.exp(-6.9*u/2)+a[h]*Math.exp(-6.9*u/.8)*.6)*.5}for(let h=0;h<14;h++){const u=st(.008,.08),f=Math.floor(u*Oe);l[f]+=(Math.random()<.5?-1:1)*st(.2,.7)*(1-u*8)}}return n}const Cu={step_tile:6,step_carpet:4,step_water:6,step_glass:5,step_metal:5,breath_in:3,breath_out:3,breath_in_h:3,breath_out_h:3,gasp:2,heart:2,click:4,stone:4,whoosh:2,drip:8,spark:4,creak:5,knock:3,door:1,slam:2,crash:1,whisper:5,pickup:2,paper:3,ding:1,scratch:4,m_step:8,m_croak:7,m_click:3,m_breath_in:4,m_breath_out:4,m_sniff:4,m_hiss:3,m_roar:3,scream:2,room:1,generator:1,motor:1};function j2(i,t=null){Oe=i.sampleRate;const e={};for(const n in Cu)if(!(t&&!t.includes(n))){e[n]=[];for(let s=0;s<Cu[n];s++){let o;n==="breath_in_h"?o=fe.breath_in(!0):n==="breath_out_h"?o=fe.breath_out(!0):o=fe[n](),n==="room"||n==="generator"||n==="motor"?Mr(o,.8,!1):Mr(o);const a=i.createBuffer(1,o.length,Oe);a.copyToChannel(o,0),e[n].push(a)}}return e.ir=Y2(i,3.4),e}const Pu={1:"step_tile",2:"step_water",3:"step_tile",4:"step_metal",5:"step_carpet"},K2=new D,Ke=(i,t)=>i+Math.random()*(t-i);class Z2{constructor(){this.ctx=null,this.ready=!1,this.occlusion=()=>0}async init(t){if(this.ctx)return;const e=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.bank=j2(e,["spark","scratch"]),this.master=e.createGain(),this.master.gain.value=location.search.includes("mute")?0:.9,this.muted=location.search.includes("mute");const n=e.createDynamicsCompressor();n.threshold.value=-12,n.knee.value=8,n.ratio.value=4,this.master.connect(n).connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this.bank.ir;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=7e3;const o=e.createGain();o.gain.value=.75,this.reverb.connect(s).connect(o).connect(this.master),this.dist=e.createWaveShaper();const r=new Float32Array(2048);for(let a=0;a<2048;a++){const l=a/2047*2-1;r[a]=Math.tanh(l*4)/Math.tanh(4)}this.dist.curve=r,this.dist.connect(this.master),await this.loadSamples(t),this._startAmbience(),this.ready=!0}async loadSamples(t){const e=await fetch("sfx/manifest.json");if(!e.ok)throw new Error(`Sound manifest: HTTP ${e.status}`);const n=await e.json(),s=[];for(const a in n)for(const l of n[a])s.push([a,l]);let o=0;const r=[];if(await Promise.all(s.map(async([a,l])=>{var c;try{const h=await fetch("sfx/"+l);if(!h.ok)throw new Error(`HTTP ${h.status}`);const u=await h.arrayBuffer(),f=await this.ctx.decodeAudioData(u);((c=this.bank)[a]||(c[a]=[])).push(f)}catch(h){console.warn("sfx failed",l,h),r.push(l)}o++,t&&t(o/s.length,o,s.length)})),r.length)throw new Error(`${r.length} sound samples failed to load`)}get t(){return this.ctx.currentTime}out(t,{wet:e=.35,gain:n=1,ref:s=1.2,roll:o=1.25,lp:r=0,bus:a=null,occ:l=!0}={}){const c=this.ctx,h=c.createGain();h.gain.value=n;let u=h,f=0;if(t){f=l?this.occlusion(t):0;const x=Ru(c,s,o);Du(x,t,c,!0),u.connect(x),u=x,e*=1+f*1.5}const d=r||(f>.01?18e3*Math.pow(.05,f):0);if(d){const x=c.createBiquadFilter();x.type="lowpass",x.frequency.value=d,u.connect(x),u=x}u.connect(a||this.master);const m=c.createGain();return m.gain.value=e,u.connect(m).connect(this.reverb),h}play(t,e=null,{gain:n=1,rate:s=1,vary:o=.05,wet:r=.35,ref:a=1.2,roll:l=1.25,delay:c=0,lp:h=0,bus:u=null,offset:f=0,occ:d=!0}={}){var g;if(!this.ready&&!((g=this.bank)!=null&&g[t]))return null;const m=this.bank[t];if(!m||!m.length)return null;const x=this.ctx.createBufferSource();return x.buffer=m[Math.floor(Math.random()*m.length)],x.playbackRate.value=s*(1+(Math.random()*2-1)*o),x.connect(this.out(e,{wet:r,gain:n,ref:a,roll:l,lp:h,bus:u,occ:d})),x.start(this.t+c,f),x}channel({wet:t=.35,ref:e=1.2,roll:n=1.2}={}){const s=this.ctx,o=s.createGain(),r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=18e3;const a=Ru(s,e,n);o.connect(r).connect(a),a.connect(this.master);const l=s.createGain();return l.gain.value=t,a.connect(l).connect(this.reverb),{input:o,setPos:c=>{Du(a,c,s);const h=this.occlusion(c);r.frequency.setTargetAtTime(18e3*Math.pow(.05,h),s.currentTime,.12),l.gain.setTargetAtTime(t*(1+h*1.5),s.currentTime,.12)}}}setListener(t){if(!this.ctx)return;const e=this.ctx.listener,n=t.position,s=t.getWorldDirection(K2),o=this.ctx.currentTime;e.positionX?(e.positionX.setTargetAtTime(n.x,o,.015),e.positionY.setTargetAtTime(n.y,o,.015),e.positionZ.setTargetAtTime(n.z,o,.015),e.forwardX.setTargetAtTime(s.x,o,.015),e.forwardY.setTargetAtTime(s.y,o,.015),e.forwardZ.setTargetAtTime(s.z,o,.015),e.upX.value=0,e.upY.value=1,e.upZ.value=0):(e.setPosition(n.x,n.y,n.z),e.setOrientation(s.x,s.y,s.z,0,1,0))}step(t,e=1){const n=.22+e*.5;this.play(Pu[t]||"step_tile",null,{gain:n,rate:1-e*.03,vary:.07,wet:.15+e*.12}),t===3&&this.play("glass_crunch",null,{gain:n*.45,rate:1.1,vary:.15,wet:.2})}click(){this.play("click",null,{gain:.3,rate:1.25,vary:.08,wet:1.3}),this.play("tick",null,{gain:.18,rate:2.2,vary:.1,wet:.6,delay:.01})}breath(t,e){if(!t)return;const n=Math.max(0,Math.min(1,(e-.4)/1.2)),s=n>.45;this.play(s?"breath_heavy":"breath_calm",null,{gain:s?.1+n*.18:.045+n*.08,lp:s?3500:1800,wet:.03,vary:.04})}gasp(){this.play("breath_heavy",null,{gain:.5,wet:.3,rate:1.05,lp:5e3})}bodyFall(t,e){this.play("flesh",t,{gain:.75,rate:.65,vary:.06,wet:.4,lp:2200}),this.play(Pu[e]||"step_tile",t,{gain:.5,rate:.65,wet:.3}),this.gasp()}heartbeat(t){this.play("heart",null,{gain:.3+t*.9,wet:0,vary:.02,lp:900})}whoosh(){this.play("whoosh",null,{gain:.3,wet:.05,rate:1.3})}impact(t,e=1){this.play("stone",t,{gain:.9*e,wet:.6,vary:.1})}drip(t){this.play("drip",t,{gain:.6,wet:.9,ref:1,roll:1.5,vary:.12})}spark(t){this.play("spark",t,{gain:.4,wet:.4,roll:1.5})}groan(t){const e=Math.random();e<.45?this.play("creak",t,{gain:.9,wet:1.8,ref:3,roll:.6,rate:Ke(.35,.55),vary:0}):e<.8?this.play("knock",t,{gain:.8,wet:1.6,ref:3,roll:.6,rate:Ke(.6,.8),lp:1200}):this.play("m_growl",t,{gain:.6,wet:2,ref:3,roll:.6,rate:Ke(.6,.75),lp:900})}whisper(t){this.play("m_short",t,{gain:.5,wet:2,ref:2,roll:.7,rate:Ke(.5,.65),lp:1500})}door(t){this.play("door",t,{gain:1,wet:.6,rate:.85}),this.play("metal_heavy",t,{gain:.6,wet:.8,rate:.7,delay:1.1})}rattle(t){for(let e=0;e<3;e++)this.play("knock",t,{gain:.45,wet:.7,rate:Ke(1.3,1.7),delay:e*Ke(.09,.14),lp:3500});this.play("tick",t,{gain:.5,wet:.4,rate:.8})}slam(t){this.play("slam",t,{gain:1.1,wet:1,ref:2,rate:.8}),this.play("metal_heavy",t,{gain:.7,wet:1,ref:2,rate:.6,delay:.05})}crash(t){for(let e=0;e<9;e++)this.play(e%3?"metal_heavy":"slam",t,{gain:Ke(.6,1.2),wet:1.2,ref:4,roll:.5,rate:Ke(.55,.9),delay:Math.pow(Math.random(),1.7)*1.4});this.play("bonecrack",t,{gain:1,wet:.8,ref:4,roll:.5,delay:.3}),this.stinger("low",.9)}pickup(){this.play("pickup",null,{gain:.22,wet:.2,rate:1.4})}paper(){this.play("paper",null,{gain:.35,wet:.1})}ding(t){this.play("ding",t,{gain:.8,wet:1,ref:3,roll:.6,vary:0,rate:1.1})}scratch(t){this.play("scratch",t,{gain:.6,wet:.3})}stinger(t="mid",e=.8){this.play("sting_"+t,null,{gain:e,wet:.5,vary:0})}monsterStep(t,e=1){this.play("flesh",t,{gain:.55+e*.45,wet:.55,ref:1.5,roll:1,rate:Ke(.6,.75)-(e-1)*.05,vary:0}),Math.random()<.6&&this.play("tick",t,{gain:.25,wet:.4,ref:1.2,roll:1.2,rate:Ke(1.5,2),delay:Ke(.02,.07)}),Math.random()<.15&&this.play("bonecrack",t,{gain:.35,wet:.5,ref:1.2,roll:1.2,rate:Ke(.8,1.1),delay:.1})}monsterSniff(t){for(let e=0;e<3;e++)this.play("m_sniff",t,{gain:1,wet:.3,ref:1,roll:1.4,rate:Ke(.7,.9),delay:e*Ke(.2,.3)});this.play("breath_heavy",t,{gain:.7,wet:.4,ref:1,roll:1.4,rate:.55,delay:.95})}monsterClick(t){this.play("m_click",t,{gain:.9,wet:.9,ref:1.5,roll:1,rate:Ke(.6,.8)})}monsterCroak(t,e=1){const n=Math.random()<.45;this.play(n?"m_growl":"m_short",t,{gain:.45+e*.55,wet:.6,ref:1.3,roll:1,rate:n?Ke(.75,.9):Ke(.55,.7),vary:0})}monsterHiss(t){this.play("m_hiss",t,{gain:1.3,wet:.5,ref:1.5,roll:1,rate:Ke(.6,.72),vary:0}),this.play("m_scream",t,{gain:.7,wet:.5,ref:1.5,roll:1,rate:.6,delay:.55}),this.stinger("mid2",.55)}monsterRoar(t){this.play("m_roar",t,{gain:1.3,wet:1,ref:3,roll:.5,rate:Ke(.7,.85),vary:0})}scream(){const t={wet:.4,vary:0,bus:this.dist};this.play("m_scream",null,{...t,gain:1,rate:.82}),this.play("m_scream",null,{...t,gain:.7,rate:.62,delay:.03}),this.play("m_roar",null,{...t,gain:.9,rate:.75}),this.play("sting_high",null,{gain:1,wet:.3,vary:0}),this.play("sting_low",null,{gain:1.2,wet:.3,vary:0}),this.play("bonecrack",null,{gain:.8,wet:.2,delay:.1})}createMonsterVoice(){const t=this.channel({wet:.45,ref:1.2,roll:1.1});let e=null;const n=(s,o,r)=>{const a=this.bank[s],l=this.ctx.createBufferSource();l.buffer=a[Math.floor(Math.random()*a.length)],l.playbackRate.value=o;const c=this.ctx.createGain();return c.gain.value=r,l.connect(c).connect(t.input),l.start(),l};return{setPos:t.setPos,breathe:(s,o)=>{!this.ready||!s||(e=n(Math.random()<.2?"m_breath":"breath_heavy",Ke(.5,.62),o*1.1))},croak:s=>{if(!this.ready)return;const o=Math.random()<.4;n(o?"m_growl":"m_short",o?Ke(.75,.9):Ke(.55,.7),s*.9)},silence:()=>{try{e&&e.stop()}catch{}}}}createLoop(t,e,n=.5,{ref:s=2,roll:o=1,rate:r=1}={}){const a=this.ctx,l=this.channel({wet:.5,ref:s,roll:o});l.setPos(e);const c=a.createBufferSource();c.buffer=this.bank[t][0],c.loop=!0,c.playbackRate.value=r;const h=a.createGain();return h.gain.value=0,c.connect(h).connect(l.input),c.start(0,Math.random()*c.buffer.duration),{setGain:(u,f=1)=>h.gain.setTargetAtTime(u*n,a.currentTime,f),spinUp:u=>{c.playbackRate.setValueAtTime(.25*r,a.currentTime),c.playbackRate.exponentialRampToValueAtTime(r,a.currentTime+u)},setPos:l.setPos,update:()=>l.setPos(e)}}createMachine(t,{type:e="generator",gain:n=.5}={}){return this.createLoop(e==="generator"?"loop_gen":"loop_lift",t,n*1.6,{ref:3,roll:.8,rate:e==="generator"?.8:1})}_startAmbience(){const t=this.ctx,e=t.createGain();e.gain.value=0,e.gain.setTargetAtTime(.35,t.currentTime,3),e.connect(this.master);for(const[n,s,o]of[["amb_belly",.55,.8],["loop_vent",.12,.6]]){const r=t.createBufferSource();r.buffer=this.bank[n][0],r.loop=!0,r.playbackRate.value=o;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.value=900;const l=t.createGain();l.gain.value=s,r.connect(a).connect(l).connect(e),r.start(0,Math.random()*5)}this.ambGain=e}setAmbience(t){this.ambGain&&this.ambGain.gain.setTargetAtTime(t,this.ctx.currentTime,1.5)}setMaster(t,e=.5){this.muted&&(t=0),this.master&&this.master.gain.setTargetAtTime(t,this.ctx.currentTime,e)}cut(){this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setValueAtTime(0,this.ctx.currentTime)}}function Ru(i,t,e){const n=i.createPanner();return n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=t,n.rolloffFactor=e,n.maxDistance=80,n}function Du(i,t,e,n=!1){if(i.positionX)if(n)i.positionX.value=t.x,i.positionY.value=t.y,i.positionZ.value=t.z;else{const s=e.currentTime;i.positionX.setTargetAtTime(t.x,s,.02),i.positionY.setTargetAtTime(t.y,s,.02),i.positionZ.setTargetAtTime(t.z,s,.02)}else i.setPosition(t.x,t.y,t.z)}function Ka(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new Ye;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in o){const u=Lu(o[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<r[h].length;++x)d.push(r[h][x][f]);const m=Lu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Lu(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=h.count*e}const r=new t(o),a=new Xn(r,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else r.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Xh(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),o=n?n.count:s.count;let r=0;const a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let M=0,_=a.length;M<_;M++){const v=a[M],A=i.attributes[v];l[v]=new A.constructor(new A.array.constructor(A.count*A.itemSize),A.itemSize,A.normalized);const b=i.morphAttributes[v];b&&(c[v]||(c[v]=[]),b.forEach((y,E)=>{const w=new y.array.constructor(y.count*y.itemSize);c[v][E]=new y.constructor(w,y.itemSize,y.normalized)}))}const d=t*.5,m=Math.log10(1/t),x=Math.pow(10,m),g=d*x;for(let M=0;M<o;M++){const _=n?n.getX(M):M;let v="";for(let A=0,b=a.length;A<b;A++){const y=a[A],E=i.getAttribute(y),w=E.itemSize;for(let S=0;S<w;S++)v+=`${~~(E[u[S]](_)*x+g)},`}if(v in e)h.push(e[v]);else{for(let A=0,b=a.length;A<b;A++){const y=a[A],E=i.getAttribute(y),w=i.morphAttributes[y],S=E.itemSize,L=l[y],U=c[y];for(let R=0;R<S;R++){const k=u[R],X=f[R];if(L[X](r,E[k](_)),w)for(let C=0,B=w.length;C<B;C++)U[C][X](r,w[C][k](_))}}e[v]=r,h.push(r),r++}}const p=i.clone();for(const M in i.attributes){const _=l[M];if(p.setAttribute(M,new _.constructor(_.array.slice(0,r*_.itemSize),_.itemSize,_.normalized)),M in c)for(let v=0;v<c[M].length;v++){const A=c[M][v];p.morphAttributes[M][v]=new A.constructor(A.array.slice(0,r*A.itemSize),A.itemSize,A.normalized)}}return p.setIndex(h),p}const Yo=new D;function jn(i,t,e,n,s,o){const r=2*Math.PI*s/4,a=Math.max(o-2*s,0),l=Math.PI/4;Yo.copy(t),Yo[n]=0,Yo.normalize();const c=.5*r/(r+a),h=1-Yo.angleTo(i)/l;return Math.sign(Yo[e])===1?h*c:a/(r+a)+c+c*(1-h)}class fh extends Ie{constructor(t=1,e=1,n=1,s=2,o=.1){if(s=s*2+1,o=Math.min(t/2,e/2,n/2,o),super(1,1,1,s,s,s),s===1)return;const r=this.toNonIndexed();this.index=null,this.attributes.position=r.attributes.position,this.attributes.normal=r.attributes.normal,this.attributes.uv=r.attributes.uv;const a=new D,l=new D,c=new D(t,e,n).divideScalar(2).subScalar(o),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new D,x=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=c.x*Math.sign(a.x)+l.x*o,h[g+1]=c.y*Math.sign(a.y)+l.y*o,h[g+2]=c.z*Math.sign(a.z)+l.z*o,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/d)){case 0:m.set(1,0,0),f[p+0]=jn(m,l,"z","y",o,n),f[p+1]=1-jn(m,l,"y","z",o,e);break;case 1:m.set(-1,0,0),f[p+0]=1-jn(m,l,"z","y",o,n),f[p+1]=1-jn(m,l,"y","z",o,e);break;case 2:m.set(0,1,0),f[p+0]=1-jn(m,l,"x","z",o,t),f[p+1]=jn(m,l,"z","x",o,n);break;case 3:m.set(0,-1,0),f[p+0]=1-jn(m,l,"x","z",o,t),f[p+1]=1-jn(m,l,"z","x",o,n);break;case 4:m.set(0,0,1),f[p+0]=1-jn(m,l,"x","y",o,t),f[p+1]=1-jn(m,l,"y","x",o,e);break;case 5:m.set(0,0,-1),f[p+0]=jn(m,l,"x","y",o,t),f[p+1]=1-jn(m,l,"y","x",o,e);break}}}function Q2(i,t=16){const e=new Map,n=new D;for(const s of i){s.computeBoundingBox(),s.boundingBox.getCenter(n);const o=`${Math.floor(n.x/t)},${Math.floor(n.z/t)}`;e.has(o)||e.set(o,[]),e.get(o).push(s)}return[...e.values()].map(s=>{const o=Ka(s,!1),r=Xh(o,1e-7);return o.dispose(),r.computeBoundingBox(),r.computeBoundingSphere(),r})}function Iu(i,t,e){const n=Math.min(i,t,e);return n<.03?{geo:new Ie(i,t,e)}:{geo:new fh(i,t,e,2,Math.min(.028,n*.22))}}const Uu=i=>i<=4?6:Math.max(i,22),Vl=new ie,Nu=new We,zu=new pi,Li=new ei;class J2{constructor(){this.surfaces={},this.colliders=[]}add(t,{pos:e=[0,0,0],rot:n=[0,0,0],scale:s=[1,1,1],collide:o=!0,key:r="prop",edges:a=28,lineKey:l=null,parent:c=null,render:h=!0,lineGeo:u=null,walk:f=!1}={}){var m;zu.set(n[0],n[1],n[2]),Nu.setFromEuler(zu),Vl.compose(new D(...e),Nu,new D(...s)),c&&Vl.premultiply(c);const d=t.index?t.toNonIndexed():t.clone();if(d.deleteAttribute("uv"),d.applyMatrix4(Vl),h&&((m=this.surfaces)[r]||(m[r]=[])).push(d),!o&&h&&!f){d.computeBoundingBox();const x=d.boundingBox,g=Math.max(x.max.x-x.min.x,x.max.z-x.min.z);x.min.y<1.85&&x.max.y>.3&&g>.12&&(o=!0)}return o&&(d.computeBoundingBox(),Li.copy(d.boundingBox),Li.min.y<1.5&&Li.max.y>.15&&this.colliders.push({minX:Li.min.x,maxX:Li.max.x,minY:Li.min.y,maxY:Li.max.y,minZ:Li.min.z,maxZ:Li.max.z})),d}box(t,e,n,s,o,r,a={}){if(a.render===!1)return this.add(new Ie(s,o,r),{...a,pos:[t,e,n]});const l=Iu(s,o,r);return this.add(l.geo,{...a,lineGeo:l.lineGeo,pos:[t,e,n]})}cyl(t,e,n,s,o,r,a=8,l={}){return this.add(new ye(s,o,r,Uu(a)),{...l,pos:[t,e,n]})}pipe(t,e,n,s,o,r=.08,a={}){const l=n-t,c=s-e,h=Math.hypot(l,c),u=new ye(r,r,h,18);u.rotateZ(Math.PI/2);const f=Math.atan2(-c,l);return this.add(u,{key:"rust",...a,pos:[(t+n)/2,o,(e+s)/2],rot:[0,f,0],collide:!1})}at(t,e,n,s=0){const o=new ie().makeRotationY(s).setPosition(t,e,n),r=this;return{box:(a,l,c,h,u,f,d={})=>{if(d.render===!1)return r.add(new Ie(h,u,f),{...d,pos:[a,l,c],parent:o});const m=Iu(h,u,f);return r.add(m.geo,{...d,lineGeo:m.lineGeo,pos:[a,l,c],parent:o})},cyl:(a,l,c,h,u,f,d=8,m={})=>r.add(new ye(h,u,f,Uu(d)),{...m,pos:[a,l,c],parent:o}),geo:(a,l,c,h,u={})=>r.add(a,{...u,pos:[l,c,h],parent:o})}}build(t,e){const n=new Te;for(const s in this.surfaces){for(const o of Q2(this.surfaces[s])){const r=new Ge(o,t[s]||t.prop);r.matrixAutoUpdate=!1,r.userData.staticBatch=!0,n.add(r)}this.surfaces[s].forEach(o=>o.dispose())}return n}}function Aa(i,t,e){const n=new Te,s=[];for(const r of i){const a=new Ge(r.geo,t);r.pos&&a.position.set(...r.pos),r.rot&&a.rotation.set(...r.rot),r.scale&&a.scale.set(...r.scale),a.updateMatrix();const l=(r.geo.index?r.geo.toNonIndexed():r.geo.clone()).applyMatrix4(a.matrix);s.push(l)}const o=Ka(s,!1);return s.forEach(r=>r.dispose()),n.add(new Ge(o,t)),n}function ts(i,t,e){let n=i*374761393+t*668265263+e*1274126177;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function $2(i,t,e){const n=Math.floor(i),s=Math.floor(t),o=Math.floor(e),r=i-n,a=t-s,l=e-o,c=m=>m*m*(3-2*m),h=c(r),u=c(a),f=c(l),d=(m,x,g)=>m+(x-m)*g;return d(d(d(ts(n,s,o),ts(n+1,s,o),h),d(ts(n,s+1,o),ts(n+1,s+1,o),h),u),d(d(ts(n,s,o+1),ts(n+1,s,o+1),h),d(ts(n,s+1,o+1),ts(n+1,s+1,o+1),h),u),f)*2-1}function Gi(i,t,e,n=3){let s=0,o=1,r=.5;for(let a=0;a<n;a++)s+=$2(i*o,t*o,e*o)*r,o*=2.03,r*=.5;return s}function tM(i){for(const t of Object.keys(i.attributes))t!=="position"&&t!=="normal"&&i.deleteAttribute(t);return i}function gn(i,t,{radial:e=14,tubular:n=24,noise:s=0,noiseScale:o=9,flat:r=1,seed:a=0,caps:l=!0}={}){const c=new od(i,!1,"centripetal"),h=c.computeFrenetFrames(n,!1),u=typeof t=="function"?t:Array.isArray(t)?_=>{const v=_*(t.length-1),A=Math.min(t.length-2,Math.floor(v)),b=v-A,y=b*b*(3-2*b);return t[A]*(1-y)+t[A+1]*y}:()=>t,f=[],d=[],m=new D,x=new D,g=new D,p=new D;for(let _=0;_<=n;_++){const v=_/n;c.getPointAt(v,m),x.copy(h.normals[_]),g.copy(h.binormals[_]);const A=u(v);for(let b=0;b<e;b++){const y=b/e*Math.PI*2,E=Math.cos(y),w=Math.sin(y)*r;if(p.copy(m).addScaledVector(x,E*A).addScaledVector(g,w*A),s){const S=Gi(p.x*o+a,p.y*o,p.z*o,2);p.addScaledVector(x,E*S*s).addScaledVector(g,w*S*s)}f.push(p.x,p.y,p.z)}}for(let _=0;_<n;_++)for(let v=0;v<e;v++){const A=_*e+v,b=_*e+(v+1)%e,y=(_+1)*e+v,E=(_+1)*e+(v+1)%e;d.push(A,y,b,b,y,E)}if(l){const _=c.getPointAt(0),v=c.getPointAt(1),A=f.length/3;f.push(_.x,_.y,_.z);const b=f.length/3;f.push(v.x,v.y,v.z);const y=n*e;for(let E=0;E<e;E++)d.push(A,E,(E+1)%e),d.push(b,y+(E+1)%e,y+E)}const M=new Ye;return M.setAttribute("position",new ge(f,3)),M.setIndex(d),M.computeVertexNormals(),M}function Vn(i,t){let e=tM((i.index,i));e.deleteAttribute("normal"),e=Xh(e,1e-4);const n=e.attributes.position,s=new D,o=new D;for(let r=0;r<n.count;r++)s.fromBufferAttribute(n,r),o.copy(s).normalize(),t(s,o),n.setXYZ(r,s.x,s.y,s.z);return e.computeVertexNormals(),e}function Ii(i,t=28,e=20){return new dn(i,t,e)}const eM=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),ha=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]),Ut=(i,t,e)=>new D(i,t,e);function xn(i,t,e,n){const s=t.clone().sub(i),o=s.lengthSq();return{box:new ei().setFromPoints([i,t]).expandByScalar(Math.max(e,n)),d(a,l,c){const h=a-i.x,u=l-i.y,f=c-i.z;let d=(h*s.x+u*s.y+f*s.z)/o;d=d<0?0:d>1?1:d;const m=h-s.x*d,x=u-s.y*d,g=f-s.z*d;return Math.sqrt(m*m+x*x+g*g)-(e+(n-e)*d)}}}function Ne(i,t){return{box:new ei(i.clone().sub(t),i.clone().add(t)),d(n,s,o){const r=(n-i.x)/t.x,a=(s-i.y)/t.y,l=(o-i.z)/t.z,c=Math.sqrt(r*r+a*a+l*l),h=r/t.x,u=a/t.y,f=l/t.z,d=Math.sqrt(h*h+u*u+f*f)||1e-6;return c*(c-1)/d}}}const qh=(i,t,e)=>{const n=Math.max(e-Math.abs(i-t),0)/e;return Math.min(i,t)-n*n*e*.25},nM=(i,t,e)=>-qh(-i,-t,e);function iM(i){const t=[],e=[],n=(r,a=.04)=>t.push([r,a]);n(Ne(Ut(0,.105,-.79),Ut(.074,.088,.1)),.02),n(Ne(Ut(0,.12,-.71),Ut(.05,.055,.04)),.03),n(xn(Ut(0,.19,-.785),Ut(0,.205,-.755),.009,.013),.012),n(Ne(Ut(0,.19,-.735),Ut(.022,.012,.008)),.01);for(const r of[-1,1])n(Ne(Ut(.072*r,.11,-.79),Ut(.012,.03,.02)),.008),n(Ne(Ut(.045*r,.17,-.78),Ut(.022,.02,.015)),.02),e.push(Ne(Ut(.032*r,.205,-.805),Ut(.019,.016,.014)));n(xn(Ut(0,.095,-.68),Ut(0,.11,-.57),.045,.055),.03),n(Ne(Ut(0,.125,-.42),Ut(.165,.11,.16)),.06),n(Ne(Ut(0,.095,-.2),Ut(.14,.085,.14)),.07),n(Ne(Ut(0,.1,-.02),Ut(.165,.095,.11)),.06);for(const r of[-1,1])n(Ne(Ut(.08*r,.19,-.44),Ut(.07,.03,.06)),.04),n(xn(Ut(.03*r,.17,-.56),Ut(.16*r,.155,-.545),.014,.016),.03),n(Ne(Ut(.185*r,.11,-.52),Ut(.06,.06,.065)),.04);const s=(r,a,l,c,h)=>{n(xn(a,l,.046,.036),.04),n(xn(l,c,.037,.024),.025);const u=h.clone().normalize(),f=c.clone().addScaledVector(u,.055);n(Ne(f,Ut(.035,.035,.035).multiply(Ut(1,1,1))),.02);const d=new D().crossVectors(u,Ut(0,1,0)).normalize();d.lengthSq()<.1&&d.set(1,0,0);for(let x=0;x<4;x++){const g=(x-1.5)*.019,p=f.clone().addScaledVector(u,.035).addScaledVector(d,g),M=.075-Math.abs(x-1.4)*.01,_=p.clone().addScaledVector(u,M).add(Ut(0,-.012,0));n(xn(p,_,.0095,.0075),.008)}const m=f.clone().addScaledVector(d,-.035*r).addScaledVector(u,-.01);n(xn(m,m.clone().addScaledVector(u,.05).addScaledVector(d,-.015*r),.011,.008),.01)},o=r=>{const a=Ut(.09*r,.1,.03),l=Ut(.11*r,.09,.46),c=Ut(.12*r,.06,.87);n(xn(a,l,.085,.05),.05),n(Ne(Ut(.11*r,.125,.46),Ut(.04,.03,.04)),.02),n(Ne(Ut(.11*r,.065,.58),Ut(.048,.045,.1)),.04),n(xn(l,c,.05,.03),.04);const h=Ut(.12*r,.04,.9),u=Ut(.15*r,.17,.95);n(xn(h,u,.035,.028),.03);for(let f=0;f<5;f++){const d=.15*r+(f-2)*.012*r;n(xn(Ut(d,.16-Math.abs(f-1)*.008,.958),Ut(d,.18-Math.abs(f-1)*.01,.97),.008,.007),.006)}};return o(-1),o(1),i==="mouth"?(s(-1,Ut(-.2,.1,-.52),Ut(-.27,.2,-.45),Ut(-.09,.24,-.66),Ut(.75,.15,-.55)),s(1,Ut(.2,.1,-.52),Ut(.27,.21,-.43),Ut(.1,.27,-.64),Ut(-.7,.2,-.6))):(s(-1,Ut(-.2,.1,-.52),Ut(-.23,.07,-.25),Ut(-.235,.06,0),Ut(0,-.1,1)),i==="hang"?s(1,Ut(.2,.1,-.52),Ut(.4,.02,-.46),Ut(.43,-.24,-.42),Ut(.02,-1,.05)):s(1,Ut(.2,.1,-.52),Ut(.23,.07,-.25),Ut(.235,.06,0),Ut(0,-.1,1))),{add:t,sub:e}}function sM(i){const{add:t,sub:e}=iM(i);return(n,s,o)=>{let r=1e9;for(const[a,l]of t){const c=a.box,h=n<c.min.x?c.min.x-n:n>c.max.x?n-c.max.x:0,u=s<c.min.y?c.min.y-s:s>c.max.y?s-c.max.y:0,f=o<c.min.z?c.min.z-o:o>c.max.z?o-c.max.z:0;Math.sqrt(h*h+u*u+f*f)>r+l||(r=qh(r,a.d(n,s,o),l))}for(const a of e)r=nM(r,-a.d(n,s,o),.012);return r}}const Gl=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],oM=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];function _d(i,t,e,n){const s=Math.ceil((e.x-t.x)/n)+1,o=Math.ceil((e.y-t.y)/n)+1,r=Math.ceil((e.z-t.z)/n)+1,a=new Float32Array(s*o*r),l=4;for(let d=0;d<r;d+=l)for(let m=0;m<o;m+=l)for(let x=0;x<s;x+=l){const g=t.x+x*n,p=t.y+m*n,M=t.z+d*n,_=i(g+n*l*.5,p+n*l*.5,M+n*l*.5),v=Math.abs(_)<n*l*1.2;for(let A=d;A<Math.min(d+l,r);A++)for(let b=m;b<Math.min(m+l,o);b++)for(let y=x;y<Math.min(x+l,s);y++)a[y+s*(b+o*A)]=v?i(t.x+y*n,t.y+b*n,t.z+A*n):_}const c=[],h=new Float32Array(8),u=new Array(12);for(let d=0;d<r-1;d++)for(let m=0;m<o-1;m++)for(let x=0;x<s-1;x++){let g=0;for(let _=0;_<8;_++){const[v,A,b]=Gl[_];h[_]=a[x+v+s*(m+A+o*(d+b))],h[_]<0&&(g|=1<<_)}const p=eM[g];if(!p)continue;for(let _=0;_<12;_++){if(!(p&1<<_))continue;const[v,A]=oM[_],b=h[v]/(h[v]-h[A]),y=Gl[v],E=Gl[A];u[_]=[t.x+(x+y[0]+(E[0]-y[0])*b)*n,t.y+(m+y[1]+(E[1]-y[1])*b)*n,t.z+(d+y[2]+(E[2]-y[2])*b)*n]}const M=g*16;for(let _=0;ha[M+_]!==-1;_+=3){const v=u[ha[M+_]],A=u[ha[M+_+1]],b=u[ha[M+_+2]];c.push(...v,...b,...A)}}let f=new Ye;return f.setAttribute("position",new ge(c,3)),f=Xh(f,n*.01),f.computeVertexNormals(),f}const ua={};function dh(i="supine"){if(ua[i])return ua[i];const t=sM(i),e=Ut(-.48,-.42,-.93),n=Ut(.48,.26,1.02),s=_d(t,e,n,.0085),o=s.attributes.position,r=s.attributes.normal;for(let a=0;a<o.count;a++){const l=o.getX(a),c=o.getY(a),h=o.getZ(a),u=Gi(l*40,c*40,h*40,2)*.0015;o.setXYZ(a,l+r.getX(a)*u,c+r.getY(a)*u,h+r.getZ(a)*u)}return s.computeVertexNormals(),ua[i]={g:s,field:t},ua[i]}function ku(i,{x0:t=-.62,x1:e=.62,z0:n=-.48,z1:s=1.08,edge:o=.375,drop:r=.3,bag:a=!1,seed:l=1}={}){const u=new Float32Array(5551),f=p=>t+(e-t)*(p/60),d=p=>n+(s-n)*(p/90);for(let p=0;p<=90;p++)for(let M=0;M<=60;M++){const _=f(M),v=d(p);let A=.45,b=0;for(let y=0;y<80;y++){const E=i(_,A,v);if(E<.002){b=A;break}if(A-=Math.max(E*.9,.003),A<0)break}u[p*61+M]=Math.max(b+.018,.004)}const m=new Float32Array(u.length);for(let p=0;p<2;p++){for(let M=0;M<=90;M++)for(let _=0;_<=60;_++){let v=0;for(let A=-2;A<=2;A++)for(let b=-2;b<=2;b++){const y=Math.min(60,Math.max(0,_+b)),E=Math.min(90,Math.max(0,M+A));v=Math.max(v,u[E*61+y]-.006*(Math.abs(b)+Math.abs(A)))}m[M*61+_]=v}u.set(m)}for(let p=0;p<4;p++){for(let M=0;M<=90;M++)for(let _=0;_<=60;_++){let v=0,A=0;for(let b=-1;b<=1;b++)for(let y=-1;y<=1;y++){const E=_+y,w=M+b;E<0||w<0||E>60||w>90||(v+=u[w*61+E],A++)}m[M*61+_]=v/A}u.set(m)}const x=new fs(1,1,60,90);x.rotateX(-Math.PI/2);const g=x.attributes.position;for(let p=0;p<g.count;p++){const M=Math.round((g.getX(p)+.5)*60),_=Math.round((g.getZ(p)+.5)*90),v=f(M),A=d(_);let b=u[_*61+M];const y=Math.abs(v);if(a){const S=Math.max(0,Math.min(1,(.44-y)/.12,(A-n)/.1,(s-A)/.1));b=.006+(b+.01)*Math.sqrt(S)}else if(y>o){const S=(y-o)/(e-o);b=Math.min(b,.004-S*r)}const E=Gi(v*8+l,A*8,l,2)*.01+Math.sin(A*26+v*5+l)*.003,w=!a&&y>o?Math.sin(A*18+l)*.012:0;g.setXYZ(p,v+Math.sign(v)*w,b+E,A)}return x.deleteAttribute("uv"),x.computeVertexNormals(),x}const Qe=(i,t)=>i+Math.random()*(t-i),St=(i,t)=>({box:(e,n,s,o,r,a,l={})=>i.box(e,n,s,o,r,a,{key:t,...l}),cyl:(e,n,s,o,r,a,l,c={})=>i.cyl(e,n,s,o,r,a,l,{key:t,...c}),geo:(e,n,s,o,r={})=>i.geo(e,n,s,o,{key:t,...r})});function fa(i,{messy:t=!1}={}){for(const[e,n]of[[-.42,-.95],[.42,-.95],[-.42,.95],[.42,.95]])i.cyl(e,.22,n,.025,.025,.44,6);i.box(0,.47,0,.92,.07,2),i.box(0,.58,0,.86,.15,1.9,{collide:!1,key:"soft"}),i.geo(Vn(new dn(.2,20,12),e=>{e.x*=1.5,e.y*=.35,e.z*=.85,e.y+=Gi(e.x*9,e.z*9,1)*.015}),0,.72,-.72,{collide:!1,rot:[.15,.1,0],edges:40,key:"soft"}),i.box(0,.8,-1,.92,.7,.05,{collide:!1}),i.box(0,.68,1,.92,.35,.04,{collide:!1});for(const e of[-.47,.47])i.box(e,.72,.1,.03,.03,1.2,{collide:!1});if(t){const e=Vn(new fs(1.1,1.3,22,26),n=>{const s=Math.max(0,Math.abs(n.x)-.42);n.z=-s*1.4+Gi(n.x*5,n.y*5,3)*.05+Math.sin(n.y*14+n.x*3)*.012});e.rotateX(-Math.PI/2),i.geo(e,.05,.68,.3,{collide:!1,rot:[0,.15,0],edges:0,key:"soft"})}}function Fu(i){i=St(i,"paint"),i.box(0,.32,0,.45,.64,.42),i.box(0,.45,.215,.38,.14,.02,{collide:!1}),i.box(0,.68,0,.08,.1,.08,{collide:!1})}function Wl(i,{fallen:t=!1}={}){const e=t?[0,0,Math.PI/2-.1]:[0,0,0],n=t?.1:.9;i.cyl(0,n,0,.012,.012,1.8,5,{collide:!1,rot:e}),t||(i.box(0,.8,0,.3,1.4,.3,{render:!1}),i.box(0,.03,0,.5,.03,.04,{collide:!1}),i.box(0,.03,0,.04,.03,.5,{collide:!1}),i.box(.1,1.65,0,.12,.2,.04,{collide:!1}),i.cyl(.1,1.2,0,.004,.004,.7,3,{collide:!1,edges:0}))}function Ou(i,t,{height:e=2.3,folds:n=10,drop:s=.3}={}){i.cyl(0,e+.05,0,.012,.012,t,4,{collide:!1,rot:[Math.PI/2,0,0]});const o=t/n;for(let r=0;r<n;r++){const a=-t/2+o*(r+.5),l=r%2?.06:-.06;i.box(l,(e+s)/2,a,.02,e-s,o*1.08,{collide:!1,rot:[0,r%2?.5:-.5,0],key:"soft"})}i.box(0,1.2,0,.12,1.6,t*.95,{render:!1})}function Bu(i,t=.9,e=1.9,n=.45,{glass:s=!0}={}){if(i=St(i,Math.random()<.5?"pmetal2":"paint"),i.box(0,e/2,0,t,e,n),i.box(-t/4,e*.62,n/2,t/2-.03,e*.7,.02,{collide:!1}),i.box(t/4,e*.62,n/2,t/2-.03,e*.7,.02,{collide:!1}),s)for(let o=1;o<4;o++)i.box(0,e*(.3+o*.16),0,t-.05,.02,n-.05,{collide:!1});for(let o=0;o<5;o++)i.cyl(Qe(-t/3,t/3),e*.5+.08,Qe(-.1,.1),.03,.03,.12,6,{collide:!1})}function jo(i,t=1.4,e=.7){i=St(i,Math.random()<.4?"chip":"wood"),i.box(0,.74,0,t,.04,e);for(const[n,s]of[[-t/2+.05,-e/2+.05],[t/2-.05,-e/2+.05],[-t/2+.05,e/2-.05],[t/2-.05,e/2-.05]])i.box(n,.36,s,.04,.72,.04);i.box(t/2-.25,.5,0,.42,.44,e-.08,{collide:!1}),i.box(t/2-.25,.5,e/2-.03,.38,.01,.02,{collide:!1})}function es(i,{fallen:t=!1}={}){i=St(i,"wood");const e=t?{rot:[Math.PI/2,0,.3]}:{};if(t){i.box(0,.22,0,.44,.44,.04,{collide:!1,...e}),i.box(0,.05,.35,.42,.05,.42,{collide:!1,rot:[0,.3,0]});return}i.box(0,.45,0,.44,.04,.42),i.box(0,.72,-.2,.42,.5,.03,{collide:!1});for(const[n,s]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])i.cyl(n,.22,s,.015,.015,.44,5,{collide:!1})}function da(i){i=St(i,"rubber"),i.box(0,.98,0,.42,.34,.32,{collide:!1}),i.box(0,.98,.165,.36,.28,.01,{collide:!1}),i.box(0,.78,0,.18,.04,.18,{collide:!1}),i.box(.05,.775,.3,.45,.025,.16,{collide:!1})}function co(i,t,e=3,n=.5,{fill:s=.7}={}){i=St(i,"wood");const o=Math.max(2,Math.round(t/1.2));for(let a=0;a<=o;a++){const l=-t/2+t/o*a;i.box(l,e/2,-n/2+.02,.04,e,.04),i.box(l,e/2,n/2-.02,.04,e,.04,{collide:a===0||a===o})}i.box(0,e/2,0,t,e,n,{collide:!0,render:!1});const r=5;for(let a=0;a<r;a++){const l=.1+(e-.2)*(a/(r-1));if(i.box(0,l,0,t,.03,n,{collide:!1}),a===r-1)continue;let c=-t/2+.05;for(;c<t/2-.35;){const h=Qe(.25,.45);if(Math.random()<s){const u=Qe(.22,.42);i.box(c+h/2,l+u/2+.015,Qe(-.04,.04),h-.03,u,n*Qe(.7,.9),{collide:!1,rot:[0,Qe(-.08,.08),Math.random()<.1?.3:0],key:Math.random()<.75?"cardboard":"paperw"})}c+=h}}}function rM(i,t){i=St(i,"paint");for(let e=0;e<t;e++){const n=(e-(t-1)/2)*.5,s=Math.random()<.45?"pmetal2":"paint";i.box(n,.95,0,.48,1.9,.5,{key:s}),i.box(n+0,.95,.26+0,.44,1.8,.02,{collide:!1,rot:[0,0,0],key:s});for(let o=0;o<3;o++)i.box(n,1.6+o*.05,.27,.3,.01,.01,{collide:!1,edges:0})}}function Hu(i,{body:t=!0,bag:e=!1}={}){i.box(0,.8,0,.65,.05,1.9);for(const[n,s]of[[-.28,-.85],[.28,-.85],[-.28,.85],[.28,.85]])i.cyl(n,.42,s,.02,.02,.75,5,{collide:!1}),i.cyl(n,.05,s,.05,.05,.03,8,{collide:!1,rot:[0,0,Math.PI/2]});t&&xo(i,0,.83,0,{bag:e})}function xo(i,t,e,n,{bag:s=!1,ry:o=0,sheet:r=!1,pose:a=null}={}){const l={collide:!1,rot:[0,o,0],edges:40};if(s){const{field:u}=dh("supine");i.geo(ku(u,{bag:!0,x0:-.44,x1:.44,z0:-.93,z1:1,seed:t+n}),t,e,n,{...l,key:"rubber"});return}const{g:c,field:h}=dh(a||(r?"hang":"supine"));i.geo(c,t,e,n,{...l,key:"flesh"}),r&&i.geo(ku(h,{seed:t*3+n}),t,e,n,{...l,key:"cloth"})}function Vu(i,t=.8,{ry:e=0,y:n=0}={}){i=St(i,Math.random()<.6?"boardsM":"chip"),i.box(0,n+t/2,0,t,t,t,{rot:[0,e,0]}),i.box(0,n+t/2,0,t+.02,.06,t+.02,{collide:!1,rot:[0,e,0]})}function Xl(i,{fallen:t=!1}={}){if(i=St(i,"rust"),t){i.cyl(0,.3,0,.3,.3,.88,10,{rot:[Math.PI/2,0,0]});return}i.cyl(0,.44,0,.3,.3,.88,10),i.cyl(0,.3,0,.31,.31,.04,10,{collide:!1}),i.cyl(0,.6,0,.31,.31,.04,10,{collide:!1})}const aM=2.2;function lM(i,t,e,n,s=[0,0,0]){i.cyl(t,e,n,.045,.24,.16,20,{collide:!1,rot:s}),i.cyl(t,e+.1,n,.03,.045,.05,12,{collide:!1,rot:s,key:"rust"}),i.geo(new dn(.045,12,8),t,e-.07,n,{collide:!1,key:"glass",lineKey:"prop"})}function In(i,t,e=.5,{low:n=!1}={}){i=St(i,"paint"),n||(e=Math.min(e,Math.max(.12,t-aM-.16))),i.cyl(0,t-e/2,0,.005,.005,e,3,{collide:!1,edges:0,key:"rubber"}),lM(i,0,t-e-.08,0)}function ql(i,t,e,n,s,o,r,a=.6,l=8){i=St(i,"rubber");const c=[];for(let h=0;h<=l;h++){const u=h/l;c.push(new D(t+(s-t)*u,e+(o-e)*u-Math.sin(u*Math.PI)*a,n+(r-n)*u))}for(let h=0;h<l;h++){const u=c[h],f=c[h+1],d=u.clone().add(f).multiplyScalar(.5),m=u.distanceTo(f),x=new ye(.012,.012,m,3),g=f.clone().sub(u).normalize();x.applyQuaternion(new We().setFromUnitVectors(new D(0,1,0),g)),i.geo(x,d.x,d.y,d.z,{collide:!1,edges:0,walk:!0})}}function Gu(i,t=1.2,e=.8){i.box(0,0,0,t,.05,e,{collide:!1});for(let n=1;n<6;n++)i.box(-t/2+t/6*n,-.04,0,.02,.05,e-.08,{collide:!1})}function cM(i,t,e,{openIdx:n=-1}={}){i=St(i,"steel2");const s=.8,o=.7;i.box(0,e*o/2+.2,0,t*s+.1,e*o+.4,.8);let r=0;for(let a=0;a<t;a++)for(let l=0;l<e;l++,r++){const c=(a-(t-1)/2)*s,h=.2+o/2+l*o+.05;r===n?(i.box(c,h-.1,.9,s-.1,.12,1.2,{collide:!0}),xo(i,c,h-.05,.9,{bag:!0,ry:0})):(i.box(c,h,.41,s-.08,o-.08,.03,{collide:!1}),i.box(c,h,.44,.2,.03,.03,{collide:!1}))}}function Yl(i){i=St(i,"iron"),i.cyl(0,.45,0,.12,.2,.9,8),i.box(0,.92,0,.75,.06,2),i.box(0,.96,.9,.6,.02,.15,{collide:!1})}function Ko(i){i=St(i,"plastic"),i.box(0,.85,0,.6,.18,.45),i.box(0,.4,-.1,.12,.8,.12,{collide:!1}),i.cyl(0,1.05,-.18,.015,.015,.25,5,{collide:!1}),i.box(0,1.6,-.21,.5,.65,.02,{collide:!1})}function hM(i){i=St(i,"plastic"),i.box(0,.2,.05,.36,.4,.5),i.box(0,.42,.05,.4,.05,.55,{collide:!1}),i.box(0,.65,-.22,.4,.45,.16,{collide:!1})}function Wu(i,{fallen:t=!1}={}){const e=t?[0,0,Math.PI/2]:[0,0,0],n=t?.32:0,s=new Fo(.3,.02,8,36);if(t){i.geo(s,0,.03,0,{collide:!1,rot:[Math.PI/2,0,0]}),i.geo(s,0,.55,0,{collide:!1,rot:[Math.PI/2,0,0]}),i.box(0,.3,.2,.5,.45,.04,{collide:!1}),i.box(0,.3,-.1,.5,.45,.04,{collide:!1,rot:[0,0,.1]});return}i.geo(s,-.28,.3+n,0,{collide:!1,rot:[0,Math.PI/2,0]}),i.geo(s,.28,.3+n,0,{collide:!1,rot:[0,Math.PI/2,0]}),i.box(0,.5,0,.5,.05,.45,{rot:e}),i.box(0,.8,-.22,.5,.55,.04,{collide:!1})}function ho(i,t=1.8){i=St(i,"wood"),i.box(0,.45,0,t,.06,.45),i.box(-t/2+.1,.22,0,.06,.44,.4,{collide:!1}),i.box(t/2-.1,.22,0,.06,.44,.4,{collide:!1})}function jl(i){i=St(i,"rust"),i.cyl(0,.35,0,.35,.28,.7,9);for(let t=0;t<6;t++){const e=Qe(0,Math.PI*2);i.cyl(Math.cos(e)*.15,1,Math.sin(e)*.15,.005,.015,Qe(.6,1),3,{collide:!1,rot:[Qe(-.5,.5),0,Qe(-.5,.5)]})}}function pa(i,t,e,n){i=St(i,"w_concrete");for(let s=0;s<t;s++){const o=Qe(.05,.25);i.box(Qe(-e,e),o*.3,Qe(-n,n),o,o*.6,o*Qe(.6,1.4),{collide:!1,rot:[Qe(0,1),Qe(0,3),Qe(0,1)]})}}function Ps(i,t,e,n){i=St(i,"paperw");for(let s=0;s<t;s++)i.box(Qe(-e,e),.005,Qe(-n,n),.21,.004,.297,{collide:!1,rot:[0,Qe(0,3.14),0]})}function Kl(i,{body:t=!0}={}){i=St(i,"rust"),i.cyl(0,.2,0,.75,.8,.4,14),i.cyl(0,1.4,0,.65,.65,2,14,{key:"glass",lineKey:"prop"}),i.cyl(0,2.55,0,.75,.75,.3,14,{collide:!1});for(let e=0;e<5;e++)i.cyl(0,2.9+e*.4,0,.06,.06,.42,12,{collide:!1});if(t){const{g:e}=dh("supine");i.geo(e,0,1.42,0,{collide:!1,edges:40,key:"flesh",rot:[Math.PI/2-.25,.4,.12],scale:[.78,.78,.78]}),i.cyl(0,2.25,0,.01,.01,.6,3,{collide:!1,edges:0})}}function Zl(i,t=1.6){i=St(i,"paint"),i.box(0,.45,0,t,.9,.7),i.box(0,1,-.05,t,.25,.6,{collide:!1,rot:[-.5,0,0]});for(let e=0;e<8;e++)i.box(-t/2+.15+e*(t-.3)/7,1.08,.08,.06,.03,.06,{collide:!1,rot:[-.5,0,0]});i.box(-t/4,1.45,-.25,.5,.38,.1,{collide:!1}),i.box(t/4,1.45,-.25,.5,.38,.1,{collide:!1})}function Ql(i,t,e,{gapFrom:n=99,gapTo:s=-99,bent:o=!1}={}){i=St(i,"rust");const r=Math.round(t/.18);i.box(0,e,0,t,.08,.1,{collide:!1}),i.box(0,.04,0,t,.08,.1,{collide:!1});for(let a=0;a<=r;a++){const l=-t/2+t/r*a;if(l>n&&l<s){o&&i.cyl(l,e*.3,.3,.02,.02,e*.6,5,{collide:!1,walk:!0,rot:[.9,0,(l-(n+s)/2)*.8]});continue}i.cyl(l,e/2,0,.02,.02,e,5,{collide:!1,edges:0})}}function Xu(i,t=1){i=St(i,"rust"),i.cyl(0,0,0,t+.08,t+.08,.2,16,{collide:!1,rot:[Math.PI/2,0,0]});for(let e=0;e<5;e++){const n=e/5*Math.PI*2;i.box(Math.cos(n)*t*.5,Math.sin(n)*t*.5,.05,t*.85,.22,.02,{collide:!1,rot:[.3,0,n]})}i.cyl(0,0,.08,.15,.15,.1,8,{collide:!1,rot:[Math.PI/2,0,0]})}function Kn(i,t,e,n){i=St(i,"paint"),i.box(-t/2-.06,e/2,0,.12,e,.3),i.box(t/2+.06,e/2,0,.12,e,.3),i.box(0,(e+n)/2,0,t+.24,n-e,.3,{collide:!1})}function ys(i,t=.8,e=.3){i=St(i,"paperw"),i.box(0,0,0,t,e,.03,{collide:!1}),i.box(0,0,.02,t*.8,.02,.01,{collide:!1,edges:0})}function uM(i){i=St(i,"pmetal2"),i.box(0,1.3,0,7,2.6,3),i.box(0,2.75,0,6,.3,2.4,{collide:!1});for(let t=0;t<6;t++)i.box(-2.5+t,1.3,1.52,.6,2,.04,{collide:!1});for(const t of[-2,0,2])i.cyl(t,3.6,-.6,.35,.35,1.5,10,{collide:!1}),i.cyl(t,5,-.6,.25,.25,1.4,8,{collide:!1});i.cyl(-4.2,1.2,0,1.1,1.1,.5,18,{rot:[0,0,Math.PI/2]}),i.cyl(-3.7,1.2,0,.2,.2,.6,8,{collide:!1,rot:[0,0,Math.PI/2]}),i.box(3,1,1.9,1.4,1.6,.6)}function fM(i,t=4){i=St(i,"rust"),i.cyl(0,1.1,0,.9,.9,t,14,{rot:[0,0,Math.PI/2]});for(const e of[-t/2+.4,t/2-.4])i.box(e,.3,0,.3,.6,1.4)}function dM(i,t,e){i=St(i,"rust"),i.box(-t/2-.15,e/2,0,.3,e,.35),i.box(t/2+.15,e/2,0,.3,e,.35),i.box(0,e+.15,0,t+.6,.3,.35,{collide:!1}),i.box(0,e+.55,.15,.8,.25,.05,{collide:!1})}function Jl(i){const t=St(i,"plastic"),e=St(i,"iron");t.box(0,.5,0,.6,.7,.45);for(let n=0;n<4;n++)t.box(0,.25+n*.16,.228,.56,.14,.01,{collide:!1}),e.box(0,.25+n*.16,.238,.16,.015,.012,{collide:!1});e.box(0,.87,0,.64,.03,.5,{collide:!1});for(const[n,s]of[[-.25,-.18],[.25,-.18],[-.25,.18],[.25,.18]])St(i,"rubber").cyl(n,.06,s,.05,.05,.03,14,{collide:!1,rot:[0,0,Math.PI/2]});for(let n=0;n<4;n++)St(i,"glass").cyl(-.2+n*.09,.95,-.1+n%2*.1,.025,.025,.12,12,{collide:!1,lineKey:"prop"});e.box(.15,.9,.08,.22,.02,.12,{collide:!1})}function $l(i,t=3){const e=St(i,"iron");for(let n=0;n<t;n++){const s=(n-(t-1)/2)*.24,o=n===t-1?.12:0;e.cyl(s,.72,0,.1,.1,1.25,20,{rot:[0,0,o]}),e.geo(new dn(.1,16,8,0,Math.PI*2,0,Math.PI/2),s-o*.65,1.34,0,{collide:!1,rot:[0,0,o]}),St(i,"rust").cyl(s-o*.75,1.47,0,.025,.03,.1,10,{collide:!1}),St(i,"iron").cyl(s-o*.75,1.53,0,.05,.05,.015,14,{collide:!1})}e.box(0,.9,-.12,(t-1)*.24+.3,.03,.03,{collide:!1})}function ma(i){St(i,"bplastic").cyl(0,0,0,.16,.16,.05,32,{collide:!1,rot:[Math.PI/2,0,0]}),St(i,"paperw").cyl(0,0,.026,.14,.14,.004,32,{collide:!1,rot:[Math.PI/2,0,0]}),St(i,"bplastic").box(.03,.04,.03,.012,.11,.004,{collide:!1,rot:[0,0,-.6]}),St(i,"bplastic").box(-.04,-.01,.031,.01,.08,.004,{collide:!1,rot:[0,0,1.9]})}function qu(i){St(i,"paint").box(0,1.1,.12,.35,.75,.24,{collide:!1}),St(i,"glassDark").box(0,1.1,.245,.29,.66,.01,{collide:!1}),St(i,"iron").cyl(0,1.05,.12,.075,.075,.5,18,{collide:!1}),St(i,"bplastic").cyl(.06,1.33,.12,.012,.012,.18,8,{collide:!1,rot:[0,0,.6]})}function pM(i){St(i,"bplastic").box(0,1.45,.04,.18,.26,.07,{collide:!1}),St(i,"bplastic").box(.12,1.47,.06,.06,.22,.06,{collide:!1}),St(i,"bplastic").box(.15,.75,.12,.05,.2,.05,{collide:!1,rot:[.3,0,.2]});for(let t=0;t<10;t++)St(i,"rubber").geo(new Fo(.02,.004,4,10),.13+Math.sin(t)*.01,1.32-t*.055,.1,{collide:!1,edges:0})}function Yu(i,t=.5,e=.65){St(i,"iron").box(0,0,0,t+.04,e+.04,.02,{collide:!1}),St(i,"glassDark").box(0,0,.012,t,e,.006,{collide:!1});for(let n=0;n<5;n++)St(i,"bplastic").box((Math.random()-.5)*t*.3,(Math.random()-.5)*e*.3,.016,.003,e*(.3+Math.random()*.4),.002,{collide:!1,edges:0,rot:[0,0,Math.random()*3]})}function ju(i){const t=St(i,"bplastic");t.box(0,.83,0,.42,.13,.36,{collide:!1,rot:[.12,0,0]}),t.cyl(0,.93,-.1,.04,.04,.5,16,{collide:!1,rot:[0,0,Math.PI/2]}),St(i,"paperw").box(0,1.02,-.11,.21,.18,.004,{collide:!1,rot:[-.25,0,0]});for(let e=0;e<4;e++)for(let n=0;n<10;n++)St(i,"iron").cyl(-.16+n*.035,.86+e*.012,.1-e*.035,.01,.01,.01,8,{collide:!1,edges:0})}function tc(i,{open:t=!0}={}){const e=St(i,Math.random()<.5?"metal3":"iron");e.box(0,.7,0,.47,1.4,.62);for(let n=0;n<4;n++){const s=t&&n===1?.38:0;if(e.box(0,.2+n*.33,.31+s,.43,.3,.02,{collide:!1}),St(i,"bplastic").box(0,.28+n*.33,.33+s,.12,.02,.02,{collide:!1}),s){e.box(-.205,.2+n*.33,.31+s/2-.02,.01,.26,s,{collide:!1}),e.box(.205,.2+n*.33,.31+s/2-.02,.01,.26,s,{collide:!1});for(let o=0;o<8;o++)St(i,"cardboard").box(0,.25+n*.33,.35+o*.04,.38,.22,.01,{collide:!1,rot:[.1*Math.sin(o),0,0]})}}t&&Ps(i,12,.6,.6)}function Ku(i){const t=St(i,"planks");for(let e=0;e<7;e++)t.box(-.5+e*.166,.13,0,.12,.022,1.2);for(const e of[-.5,0,.5])t.box(0,.06,e,1.1,.1,.1,{collide:!1})}function mM(i,t,e){const n=St(i,"planks");for(let s=0;s<5;s++){const o=.35+s*(e-.5)/4+(Math.random()-.5)*.1;n.box(0,o,.08,t+.3,.14,.03,{collide:!1,rot:[0,0,(Math.random()-.5)*.35]})}}const Zo=[];function gM(){if(Zo.length<8){const i=Zo.length*7.3;Zo.push(Vn(new ko(1,2),(t,e)=>{const n=.75+Gi(e.x*2+i,e.y*2,e.z*2,3)*.6,s=Math.max(Math.abs(e.x),Math.abs(e.y),Math.abs(e.z));t.copy(e).multiplyScalar(n*(.85+s*.25))}))}return Zo[Math.floor(Math.random()*Zo.length)]}function Zu(i,t=26,e=.8,n=.8){for(let s=0;s<t;s++){const o=.05+Math.random()*.2,r=Math.random()<.35?"brick":Math.random()<.5?"w_concrete":"conc2",a=(Math.random()-.5)*2*e,l=(Math.random()-.5)*2*n,c=Math.max(0,1-Math.hypot(a/e,l/n)),h=gM().clone().scale(o,o,o);St(i,r).geo(h,a,o*.45+c*.22,l,{collide:!1,rot:[Math.random()*3,Math.random()*3,Math.random()*3],scale:[1+Math.random(),.45+Math.random()*.4,.8+Math.random()*.6]})}for(let s=0;s<3;s++)St(i,"w_concrete").box((Math.random()-.5)*e,.12,(Math.random()-.5)*n,.5+Math.random()*.4,.07,.4+Math.random()*.3,{collide:!1,rot:[Math.random()*.4,Math.random()*3,Math.random()*.4]});for(let s=0;s<t;s++)St(i,"conc2").geo(new Bh(.02+Math.random()*.03),(Math.random()-.5)*2.4*e,.015,(Math.random()-.5)*2.4*n,{collide:!1,edges:0,rot:[Math.random()*3,Math.random()*3,0]})}function xM(i){St(i,"plastic").cyl(0,.16,0,.15,.12,.32,20,{tint:8947848}),St(i,"wood").cyl(.1,.75,.05,.015,.015,1.3,8,{collide:!1,rot:[.25,0,-.2]}),St(i,"cloth").cyl(0,.14,0,.12,.14,.12,12,{collide:!1})}function vM(i,t=1.6){for(let n=0;n<3;n++){const s=n%2?.5:-.5,o=(n-1)*(t/3)*.92;St(i,"iron").box(o,.95,0,t/3,1.7,.03,{rot:[0,s,0]}),St(i,"cloth").box(o,1,0,t/3-.06,1.4,.035,{collide:!1,rot:[0,s,0]})}}function ga(i){const t=St(i,"leather");t.box(0,.25,0,.8,.3,.75),t.box(0,.45,.05,.62,.14,.6,{collide:!1,rot:[.05,0,0]}),t.box(0,.7,-.32,.8,.6,.16,{collide:!1,rot:[-.12,0,0]});for(const e of[-1,1])t.box(e*.36,.5,0,.12,.3,.72,{collide:!1})}function MM(i){const t=St(i,"leather");t.box(0,.24,0,1.9,.3,.8);for(const e of[-.45,.45])t.box(e,.45,.06,.88,.14,.62,{collide:!1,rot:[.04,0,e*.05]});t.box(0,.7,-.33,1.9,.6,.16,{collide:!1,rot:[-.1,0,0]});for(const e of[-1,1])t.box(e*.9,.48,0,.14,.32,.8,{collide:!1});St(i,"cloth").box(.45,.53,.1,.3,.05,.25,{collide:!1,rot:[.3,.4,.2]})}function Qu(i,t=.16){const e=St(i,"rust");e.geo(new Fo(t,.016,8,28),0,0,0,{collide:!1});for(let n=0;n<3;n++)e.box(0,0,0,.02,t*2,.02,{collide:!1,rot:[0,0,n/3*Math.PI]});e.cyl(0,0,-.08,.03,.03,.16,10,{collide:!1,rot:[Math.PI/2,0,0]})}function yM(i){St(i,"iron").cyl(0,1.6,.05,.012,.012,1,8,{collide:!1}),St(i,"iron").cyl(0,2.1,.15,.06,.03,.04,14,{collide:!1,rot:[.6,0,0]}),St(i,"iron").box(0,.01,.4,.12,.01,.12,{collide:!1})}function Ju(i){St(i,"iron").cyl(0,.004,0,.14,.14,.008,20,{collide:!1});for(let t=-3;t<=3;t++)St(i,"bplastic").box(t*.035,.009,0,.012,.004,.22-Math.abs(t)*.02,{collide:!1,edges:0})}function ze(i,t,e,n,s,o=[0,0,0]){const r=new Ge(t,e);return r.position.set(...s),r.rotation.set(...o),n&&r.add(new ka(new Oh(t,30),n)),i.add(r),r}const Ze=(i,t,e)=>new Ie(i,t,e);function $u(i,t,e=.9,n=2.05,{window:s=!0,plaque:o=!0,mat:r="pwood"}={}){const a=new Te,l=new Te;l.position.x=e/2,a.add(l);const c=.045;ze(l,Ze(e,n,c),i[r],t,[0,n/2,0]);for(const u of[c/2+.006,-c/2-.006])ze(l,Ze(e-.2,n*.32,.012),i[r],t,[0,n*.25,u]),s||ze(l,Ze(e-.2,n*.3,.012),i[r],t,[0,n*.68,u]);if(s){const u=e*.5,f=n*.28;ze(l,Ze(u+.06,f+.06,c+.02),i.iron,t,[0,n*.7,0]),ze(l,Ze(u,f,c+.024),i.glassDark,null,[0,n*.7,0]);for(let d=1;d<5;d++)ze(l,Ze(.004,f,.003),i.iron,null,[-u/2+u/5*d,n*.7,c/2+.013]);for(let d=1;d<4;d++)ze(l,Ze(u,.004,.003),i.iron,null,[0,n*.7-f/2+f/4*d,c/2+.013])}ze(l,Ze(e-.06,.22,.004),i.iron,null,[0,.13,c/2+.003]);const h=new Te;h.position.set(e/2-.09,1,0),l.add(h);for(const u of[1,-1])ze(h,Ze(.05,.16,.012),i.iron,t,[0,-.02,u*(c/2+.008)]),ze(h,new ye(.009,.009,.12,10),i.iron,t,[-.06,.02,u*(c/2+.04)],[0,0,Math.PI/2]),ze(h,new ye(.01,.01,.03,10),i.iron,null,[0,.02,u*(c/2+.022)],[Math.PI/2,0,0]);o&&ze(l,Ze(.16,.07,.004),i.paperw,null,[0,n*.88,c/2+.004]);for(const u of[.25,n-.25])ze(a,new ye(.012,.012,.11,8),i.iron,null,[0,u,c/2]);return{pivot:a,handle:h,leaf:l}}function _M(i,t,e=1,n=2.5){const s=new Te,o=new Te;o.position.x=e/2,s.add(o);const r=.09;ze(o,Ze(e,n,r),i.plates,t,[0,n/2,0]);for(const l of[r/2+.012,-r/2-.012]){for(const c of[.4,n/2,n-.4])ze(o,Ze(e-.08,.07,.024),i.iron,t,[0,c,l]);ze(o,Ze(.07,n-.2,.024),i.iron,t,[-e/2+.06,n/2,l]);for(let c=0;c<6;c++)ze(o,new dn(.012,8,6),i.iron,null,[-e/2+.12+c*((e-.24)/5),.4,l+Math.sign(l)*.012])}ze(o,new ye(.13,.13,r+.05,24),i.iron,t,[.05,n*.68,0],[Math.PI/2,0,0]),ze(o,new ye(.1,.1,r+.056,24),i.glassDark,null,[.05,n*.68,0],[Math.PI/2,0,0]);const a=new Te;a.position.set(e/2-.12,1.1,0),o.add(a);for(const l of[1,-1])ze(a,Ze(.06,.3,.02),i.iron,t,[0,0,l*(r/2+.012)]),ze(a,new ye(.016,.016,.26,10),i.iron,t,[0,0,l*(r/2+.06)],[0,0,0]);return{pivot:s,handle:a,leaf:o}}function bM(i,t,e=1.5,n=2.4){const s=new Te;return ze(s,Ze(e,n,.06),i.iron,t,[0,0,0]),ze(s,Ze(e-.08,n-.08,.004),i.plates,null,[0,0,.032]),ze(s,Ze(.01,n,.01),i.rubber,null,[e/2,0,.03]),s}function SM(i,t,e,n,s="pwood"){const o=new Te,r=.06;return ze(o,Ze(.09,n+.09,r),i[s],t,[-e/2-.045,(n+.09)/2,r/2]),ze(o,Ze(.09,n+.09,r),i[s],t,[e/2+.045,(n+.09)/2,r/2]),ze(o,Ze(e+.18,.09,r),i[s],t,[0,n+.045,r/2]),ze(o,Ze(e,n,.003),i.void,null,[0,n/2,.006]),o}const ec=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Eo=(i,t,e)=>new D(i,t,e),vn=(i,t,e,n=[0,0,0],s=null)=>{const o=new Ge(t,e);return o.position.set(...n),s&&o.quaternion.copy(s),i.add(o),o};function Yh(i=!1){const t={paint:at({map:"paint",scale:9,tint:7501402,boost:1.15}),metal:at({map:"metal",scale:12,tint:11773586,boost:1.1}),rubber:at({map:"rubber",scale:14,tint:2632231,boost:1.05}),ceramic:at({map:"plastic",scale:7,tint:14735293,boost:1.15}),fuel:at({map:"plastic",scale:5,tint:13020263,boost:1.15,wet:.45})};for(const e of Object.values(t))e.uniforms.uLit.value=i?.16:.055,e.uniforms.uLocal.value=1;return i&&(t.fuel.uniforms.uLit.value=.4),t}function jh(i){const t=new Te,e=new We().setFromAxisAngle(Eo(0,0,1),Math.PI/2);vn(t,new ye(.027,.027,.125,20),i.ceramic,[0,0,0],e);for(const n of[-.072,.072])vn(t,new ye(.032,.032,.025,20),i.metal,[n,0,0],e),vn(t,new Ie(.018,.018,.006),i.metal,[n,0,.029]);return vn(t,new Ie(.045,.002,.026),i.rubber,[0,.027,0]),t}function bd(i){const t=new Te;vn(t,new fh(.23,.27,.125,3,.018),i.paint,[0,-.06,0]),vn(t,new fh(.2,.045,.11,2,.012),i.paint,[0,.082,0]);for(const r of[-.064,.064])for(const a of[-1,1]){const l=vn(t,new Ie(.012,.19,.005),i.paint,[a*.045,-.06,r]);l.rotation.z=a*.5}for(const r of[-.055,.055])vn(t,new ye(.011,.011,.07,12),i.paint,[r,.135,0]);const e=vn(t,new ye(.011,.011,.11,14),i.rubber,[0,.17,0]);e.rotation.z=Math.PI/2;const n=Eo(.65,.76,0).normalize(),s=new We().setFromUnitVectors(Eo(0,1,0),n);vn(t,new ye(.019,.023,.066,16),i.metal,[.12,.11,0],s);const o=Eo(.12,.11,0).addScaledVector(n,.033);return t.cap=vn(t,new ye(.024,.024,.018,18),i.rubber,o.toArray(),s),t.spout=new Ve,t.spout.position.copy(o),t.add(t.spout),t.capHome=t.cap.position.clone(),t.capAxis=n,t}class wM{constructor(t){const e=Yh();this.group=new Te,t.add(this.group),this.materials=e,this.sockets=[],this.fuses=[];for(let n=0;n<2;n++){const s=Eo(31.86+n*.28,1.43,8.94);this.sockets.push(s);const o=vn(this.group,new ye(.037,.037,.022,20),e.rubber,s.toArray());o.rotation.x=Math.PI/2;const r=jh(e);r.position.copy(s),r.rotation.y=Math.PI/2,this.group.add(r),this.fuses.push(r)}this.funnel=Eo(31.82,1.12,9.01),vn(this.group,new Ie(.3,.27,.14),e.paint,[31.82,.91,8.88]),vn(this.group,new ye(.06,.02,.09,22,1,!0),e.metal,[31.82,1.075,9.01]),this.can=bd(e),this.can.position.set(31.48,.65,9.16),this.group.add(this.can),vn(this.group,new Ie(.33,.025,.36),e.metal,[31.48,.44,9.07]),this.lever=new Te,this.lever.position.set(32.43,1,8.96),this.group.add(this.lever),vn(this.lever,new ye(.012,.012,.23,14),e.metal,[0,.115,0]),this.knob=vn(this.lever,new ye(.022,.022,.13,16),e.rubber,[0,.23,0]),this.knob.rotation.z=Math.PI/2}sync(t,e=null){this.fuses.forEach((o,r)=>o.visible=!!t.powered||r<(t.genInstalled||0)),this.can.visible=!e||!["uncap","pour","recap"].includes(e.kind);const n=(e==null?void 0:e.kind)==="prime"?e.time%1:0,s=Vt.smoothstep(n,.24,.62)*(1-Vt.smoothstep(n,.65,.96));this.lever.rotation.x=s*.72,this.group.updateMatrixWorld(!0)}}const Me=64,Sn=56,Tn={TILE:1,WATER:2,GLASS:3,METAL:4,CARPET:5},_s=[],tf=[[18,26.28,0,10,[2,5,8]],[52.6,32.28,0,3,[1]],[26,13.72,Math.PI,3,[0,2]],[52,21.72,Math.PI,2,[0]],[2.6,35.72,Math.PI,3,[0,2]],[10.85,3.28,0,3,[1]]],nc=[[30,35.3,1,0],[33,41.1,-1,0],[15.5,29,0,-1],[21.2,29,0,-1],[26.5,22,0,1],[36.8,34,0,-1],[24,32.2,1,0],[18.2,7,0,1],[4,5.2,1,0],[42.3,26,0,1],[47.5,29,0,-1],[30,20.2,1,0]],ef={wall:"w_hosp",floor:"f_tile",ceil:"c_plaster"},nf={Медблок:{wall:"w_hosp",floor:"f_tile4",ceil:"c_office"},Санузел:{wall:"w_tile2",floor:"f_tile3",ceil:"c_plaster"},"Коридор Б":{wall:"w_hosp2",floor:"f_tile",ceil:"c_plaster"},Морг:{wall:"w_tile",floor:"f_tile3",ceil:"c_plaster"},Атриум:{wall:"w_atrium",floor:"f_terrazzo",ceil:"c_concrete"},"Западный коридор":{wall:"w_hosp",floor:"f_boards",ceil:"c_plaster"},Архив:{wall:"w_paper2",floor:"f_parquet",ceil:"c_office"},"Затопленный коридор":{wall:"w_bunker",floor:"f_water",ceil:"c_plaster"},"Кабинет 9":{wall:"w_paper",floor:"f_water2",ceil:"c_office"},Шлюз:{wall:"w_plates2",floor:"f_conc3",ceil:"c_concrete"},"Безэховый блок":{wall:"w_iso",floor:"f_glass",ceil:"c_concrete"},"Служебный коридор":{wall:"w_bunker",floor:"f_grate",ceil:"c_concrete"},Генераторная:{wall:"w_brick",floor:"f_conc3",ceil:"c_concrete"},Переход:{wall:"w_hosp2",floor:"f_terrazzo",ceil:"c_plaster"},"Лифтовый холл":{wall:"w_hall",floor:"f_rug",ceil:"c_office"},Лифт:{wall:"w_plates",floor:"f_dplate",ceil:"c_concrete"},Вентканал:{wall:"w_steel2",floor:"f_grate",ceil:"c_concrete"},Вентшахта:{wall:"w_steel2",floor:"f_grate",ceil:"c_concrete"},"Обход лифтового холла":{wall:"w_bunker",floor:"f_grate",ceil:"c_concrete"}};class TM{constructor(t){this.scene=t,this.cells=new Uint8Array(Me*Sn),this.ceil=new Float32Array(Me*Sn),this.room=new Int8Array(Me*Sn).fill(-1),this.doors=[],this.items=[],this.drips=[],this.sparks=[],this.triggers=[],this.layout(),this.materials(),this.buildArchitecture(),this.buildProps(),this.buildDynamic(),this.buildDecals(),this.buildCollision(),this.buildNav()}carve(t,e,n,s,o,r,a){let l=-1;a&&(l=_s.length,_s.push({name:a,x:t,z:e,w:n,h:s}));for(let c=e;c<e+s;c++)for(let h=t;h<t+n;h++){const u=c*Me+h;this.cells[u]=o,this.ceil[u]=r,(l>=0||this.room[u]<0)&&(this.room[u]=l)}}layout(){const t=Tn;this.carve(26,44,12,10,t.TILE,3.2,"Медблок"),this.carve(38,52,1,2,t.TILE,2.4,null),this.carve(39,50,4,4,t.TILE,2.6,"Санузел"),this.carve(30,34,3,10,t.TILE,2.8,"Коридор Б"),this.carve(33,38,2,2,t.TILE,2.4,null),this.carve(35,36,8,7,t.TILE,2.8,"Морг"),this.carve(24,22,16,12,t.TILE,5,"Атриум"),this.carve(13,26,11,3,t.TILE,2.8,"Западный коридор"),this.carve(1,17,12,19,t.CARPET,4,"Архив"),this.carve(40,26,16,3,t.WATER,2.8,"Затопленный коридор"),this.carve(53,29,2,3,t.WATER,2.4,null),this.carve(50,32,11,9,t.WATER,3,"Кабинет 9"),this.carve(53,22,2,4,t.TILE,2.6,"Шлюз"),this.carve(44,6,18,16,t.GLASS,4.5,"Безэховый блок"),this.carve(30,14,4,8,t.METAL,3,"Служебный коридор"),this.carve(22,3,20,11,t.METAL,6,"Генераторная"),this.carve(13,7,9,3,t.TILE,2.8,"Переход"),this.carve(4,3,9,10,t.TILE,3.5,"Лифтовый холл"),this.carve(6,0,3,3,t.METAL,2.6,"Лифт"),this.carve(41,29,1,7,t.METAL,1.25,"Вентканал"),this.carve(7,13,1,3,t.METAL,1.25,"Вентшахта"),this.carve(8,15,15,1,t.METAL,1.25,null),this.carve(22,14,1,2,t.METAL,1.25,null),this.carve(1,7,2,9,t.METAL,2.8,"Обход лифтового холла"),this.carve(3,7,1,3,t.METAL,2.8,null),this.carve(3,14,4,2,t.METAL,2.8,null);for(const[e,n]of[[31,41],[32,41],[31,42],[38,39],[39,39],[38,40]])this.cells[n*Me+e]=t.WATER;for(const[e,n]of[[53,22],[54,22],[53,23]])this.cells[n*Me+e]=t.GLASS}surf(t,e){const n=this.room[e*Me+t];return n>=0&&nf[_s[n].name]||ef}floorKey(t,e){const n=this.cells[e*Me+t];return n===Tn.WATER?"f_water":n===Tn.GLASS?"f_glass":this.surf(t,e).floor}shaftCell(t,e){return t===7&&e>=13&&e<=15||e===15&&t>=8&&t<=22||t===22&&e>=14&&e<=15}open(t,e){return t<0||e<0||t>=Me||e>=Sn?!1:this.cells[e*Me+t]>0}ceilAt(t,e){return this.open(t,e)?this.ceil[e*Me+t]:0}floorAt(t,e){const n=Math.floor(t),s=Math.floor(e);return n<0||s<0||n>=Me||s>=Sn?0:this.cells[s*Me+n]}roomAt(t,e){const n=Math.floor(t),s=Math.floor(e);if(n<0||s<0||n>=Me||s>=Sn)return null;const o=this.room[s*Me+n];return o>=0?_s[o]:null}materials(){this.mat={wall:at({map:"wall",scale:.45,bump:1.2}),w_hosp:at({pat:7,map:"plaster",scale:.45,map2:"paint",scale2:.5,split:1.45,grime:.8}),w_tile:at({pat:7,map:"plaster",scale:.45,map2:"wtile",scale2:.55,split:1.9,grime:.7}),w_atrium:at({pat:7,map:"plaster",scale:.4,map2:"brick2",scale2:.45,split:1.25,grime:.6}),w_paper:at({pat:7,map:"paper",scale:.5,map2:"wood",scale2:.6,split:.95,grime:.6}),w_concrete:at({map:"wall",scale:.45,bump:1.2,grime:1}),w_plates:at({map:"plates",scale:.5,grime:.5}),w_iso:at({pat:7,map:"wall",scale:.45,map2:"corr",scale2:.5,split:2.2,grime:.6}),w_brick:at({map:"brick",scale:.4,bump:1.3,grime:.8}),f_tile:at({map:"tile",scale:.5,bump:1.1,boost:.6}),f_tile3:at({map:"tile3",scale:.55,bump:1.1,boost:.6}),f_tile4:at({map:"tile4",scale:.5,bump:1.1,boost:.6}),f_boards:at({map:"boards",scale:.45,bump:1.2,boost:.85}),f_parquet:at({map:"parquet",scale:.5,boost:.85}),f_water2:at({map:"parquet",scale:.5,pat:1,wet:1}),f_conc3:at({map:"conc3",scale:.4,bump:1.2}),f_rug:at({map:"rug",scale:.6,boost:.8}),w_hosp2:at({pat:7,map:"plaster4",scale:.45,map2:"paint",scale2:.5,split:1.5,grime:.8}),w_tile2:at({pat:7,map:"plaster2",scale:.45,map2:"wtile2",scale2:.7,split:2,grime:.6}),w_paper2:at({pat:7,map:"paper2",scale:.5,map2:"wood",scale2:.6,split:.95,grime:.6}),w_bunker:at({pat:7,map:"wall",scale:.45,map2:"bunker",scale2:.5,split:1.7,grime:1}),w_plates2:at({map:"plates2",scale:.5,grime:.5}),w_hall:at({pat:7,map:"plaster4",scale:.45,map2:"pmetal2",scale2:.5,split:1.3,grime:.6}),w_steel2:at({map:"steel2",scale:.6,grime:.6}),pmetal2:at({map:"pmetal2",scale:.8}),steel2:at({map:"steel2",scale:.9}),metal3:at({map:"metal3",scale:.9}),chip:at({map:"chip",scale:1.2}),boardsM:at({map:"boards",scale:.9}),corrM:at({map:"corr",scale:.7}),f_terrazzo:at({map:"terrazzo",scale:.35,boost:.7}),f_carpet:at({map:"carpet",scale:.7,boost:.85}),f_water:at({map:"tile",scale:.5,pat:1,wet:1}),f_glass:at({map:"cfloor",scale:.4,pat:3,boost:.8}),f_cfloor:at({map:"cfloor",scale:.4,bump:1.2}),f_grate:at({map:"grate",scale:.6,bump:1.4}),f_dplate:at({map:"dplate",scale:.8}),c_office:at({map:"oceil",scale:.3,boost:.45,grime:.4}),c_plaster:at({map:"ceil",scale:.4,boost:.8,grime:.3}),c_concrete:at({map:"wall",scale:.35,boost:.7,grime:.4}),wood:at({map:"wood",scale:1.2}),paint:at({map:"paint",scale:.8}),rust:at({map:"rust",scale:.8,bump:1.2}),cloth:at({map:"cloth",scale:1.5,boost:.6,tint:13157048,grime:.6}),cardboard:at({map:"cardboard",scale:1.5}),paperw:at({map:"paperw",scale:3,boost:1.1}),rubber:at({map:"rubber",scale:1.5,wet:.4}),iron:at({map:"iron",scale:1.2,bump:1.2}),pwood:at({map:"pwood",scale:.9,boost:3,tint:16773852}),pwoodb:at({map:"pwoodb",scale:.9}),plates:at({map:"plates",scale:.8}),plastic:at({map:"plastic",scale:1.5,boost:.8}),bplastic:at({map:"bplastic",scale:2}),leather:at({map:"leather",scale:1.4}),planks:at({map:"planks",scale:.8}),glassDark:(()=>{const t=at({pat:6,boost:1.2});return t.transparent=!1,t.depthWrite=!0,t.blending=ks,t})(),void:new Tr({color:0}),ceil:at({map:"ceil",scale:.4,boost:.8}),[Tn.TILE]:at({map:"tile",scale:.5,bump:1.1,boost:.6}),[Tn.WATER]:at({map:"tile",scale:.5,pat:1,wet:1}),[Tn.GLASS]:at({map:"tile",scale:.5,pat:3,boost:.6}),[Tn.METAL]:at({map:"grate",scale:.6,bump:1.4}),[Tn.CARPET]:at({map:"carpet",scale:.7,boost:.85}),prop:at({map:"metal",scale:.9,bump:.8}),flesh:at({pat:5,boost:1,wet:.3}),soft:at({map:"cloth",scale:1.6,boost:.9,tint:14210252}),glass:at({pat:6,boost:1}),item:at({map:"metal",scale:3,boost:2.4,tint:16773824}),door:at({map:"metal",scale:.6,boost:1})},this.lineMat={arch:at({kind:"line",boost:1}),prop:at({kind:"line",boost:1}),item:at({kind:"line",boost:3.5,tint:16773824})}}buildArchitecture(){this.wallRuns=[];const t={},e=[],n=(l,c,h,u,f,d)=>{const m=t[l]||(t[l]={pos:[],nor:[]});for(const x of[c,h,u,c,u,f])m.pos.push(x[0],x[1],x[2]),m.nor.push(d[0],d[1],d[2])},s=(l,c,h,u)=>{for(const[f,d]of[[l,c],[c,h],[h,u],[u,l]])e.push(...f,...d)},o=(l,c,h,u)=>{const f=this.ceilAt(l,c);if(!this.open(h,u))return[0,f];const d=this.ceilAt(h,u);return d<f-.01?[d,f]:null};for(const[l,c,h]of[[-1,0,1],[1,1,-1]])for(let u=0;u<Sn;u++){let f=null;const d=()=>{if(!f)return;const m=u+c,x=[f.x0,f.y0,m],g=[f.x1,f.y0,m],p=[f.x1,f.y1,m],M=[f.x0,f.y1,m];n(f.k,x,g,p,M,[0,0,h]),s(x,g,p,M),f.y0===0&&this.wallRuns.push({ax:"x",a:f.x0,b:f.x1,at:m,n:h,h:f.y1}),f=null};for(let m=0;m<=Me;m++){const x=m<Me&&this.open(m,u)?o(m,u,m,u+l):null,g=x?this.surf(m,u).wall:null;x&&f&&f.y0===x[0]&&f.y1===x[1]&&f.k===g?f.x1=m+1:(d(),x&&(f={x0:m,x1:m+1,y0:x[0],y1:x[1],k:g}))}d()}for(const[l,c,h]of[[-1,0,1],[1,1,-1]])for(let u=0;u<Me;u++){let f=null;const d=()=>{if(!f)return;const m=u+c,x=[m,f.y0,f.z0],g=[m,f.y0,f.z1],p=[m,f.y1,f.z1],M=[m,f.y1,f.z0];n(f.k,x,g,p,M,[h,0,0]),s(x,g,p,M),f.y0===0&&this.wallRuns.push({ax:"z",a:f.z0,b:f.z1,at:m,n:h,h:f.y1}),f=null};for(let m=0;m<=Sn;m++){const x=m<Sn&&this.open(u,m)?o(u,m,u+l,m):null,g=x?this.surf(u,m).wall:null;x&&f&&f.y0===x[0]&&f.y1===x[1]&&f.k===g?f.z1=m+1:(d(),x&&(f={z0:m,z1:m+1,y0:x[0],y1:x[1],k:g}))}d()}for(let l=0;l<Sn;l++){let c=null,h=null;const u=()=>{c&&(n(c.t,[c.x0,0,l],[c.x0,0,l+1],[c.x1,0,l+1],[c.x1,0,l],[0,1,0]),c=null)},f=()=>{h&&(n(h.k,[h.x0,h.h,l],[h.x1,h.h,l],[h.x1,h.h,l+1],[h.x0,h.h,l+1],[0,-1,0]),h=null)};for(let d=0;d<=Me;d++){const m=d<Me&&this.open(d,l),x=m?this.floorKey(d,l):0,g=m?this.ceil[l*Me+d]:0,p=m?this.surf(d,l).ceil:0;m&&c&&c.t===x?c.x1=d+1:(u(),m&&(c={t:x,x0:d,x1:d+1})),m&&h&&h.h===g&&h.k===p?h.x1=d+1:(f(),m&&(h={h:g,k:p,x0:d,x1:d+1}))}u(),f()}const r=new Te;for(const l in t){const c=new Ye;c.setAttribute("position",new ge(t[l].pos,3)),c.setAttribute("normal",new ge(t[l].nor,3)),c.computeBoundingSphere(),r.add(new Ge(c,this.mat[l]))}const a=new Ye;a.setAttribute("position",new ge(e,3)),r.add(new ka(a,this.lineMat.arch)),r.add(xd(a,{boost:1})),this.scene.add(r)}buildProps(){const t=this.B=new J2,e=Math.PI;for(const l of this.wallRuns){const c=l.b-l.a,h=(l.a+l.b)/2,u=(f,d,m,x,g=c,p=h,M="paint")=>{l.ax==="x"?t.box(p,d,l.at+l.n*f,g,x,m,{collide:!1,key:M}):t.box(l.at+l.n*f,d,p,m,x,g,{collide:!1,key:M})};if(u(.015,.07,.03,.14,c,h,"wood"),u(.025,l.h-.06,.05,.12,c,h,"c_plaster"),l.h>=4&&c>=4){const f=Math.floor(c/3);for(let d=1;d<f+0;d++)u(.07,l.h/2,.14,l.h,.36,l.a+c/f*d)}}const n=["Коридор Б","Западный коридор","Переход","Лифтовый холл","Атриум"],s=[...n,"Медблок","Морг","Санузел","Кабинет 9","Архив"],o=["Затопленный коридор","Служебный коридор","Генераторная","Шлюз","Безэховый блок"];for(const l of this.wallRuns){const c=l.b-l.a;if(c<1.6||l.h<2)continue;const h=l.ax==="x"?Math.floor((l.a+l.b)/2):l.n>0?l.at:l.at-1,u=l.ax==="x"?l.n>0?l.at:l.at-1:Math.floor((l.a+l.b)/2),f=this.room[u*Me+h],d=f>=0?_s[f].name:"Коридор Б",m=(M,_)=>l.ax==="x"?[M,l.at+l.n*_]:[l.at+l.n*_,M],x=M=>{const[_,v]=m(M,0);return nc.some(A=>Math.hypot(A[0]-_,A[1]-v)<.95)},g=(M,_,v,A,b,y,E,w=0)=>{if(x(M))return;const[S,L]=m(M,v);l.ax==="x"?t.box(S,_,L,A,b,y,{collide:!1,key:E,rot:[0,0,w]}):t.box(S,_,L,y,b,A,{collide:!1,key:E,rot:[w,0,0]})},p=(M,_,v,A,b,y)=>{const[E,w]=m(M,A),[S,L]=m(_,A);t.pipe(E,w,S,L,v,b,{key:y})};if(s.includes(d)||o.includes(d)){const M=Math.min(l.h-.35,2.45);p(l.a+.05,l.b-.05,M,.035,.018,"rubber"),c>3&&p(l.a+.05,l.b-.05,M-.06,.03,.012,"rust");for(let _=l.a+1.2;_<l.b-.8;_+=2.6+Math.random()*2)g(_,M,.06,.16,.16,.07,"paint");for(let _=l.a+1.5;_<l.b-1;_+=4.5){if(x(_))continue;const[v,A]=m(_,.06);t.cyl(v,Math.min(2.15,l.h-.6),A,.09,.1,.05,16,{collide:!1,key:"rust",rot:l.ax==="x"?[Math.PI/2,0,0]:[0,0,Math.PI/2]});const[b,y]=m(_,.1);t.add(new dn(.075,14,8,0,Math.PI*2,0,Math.PI/2),{pos:[b,Math.min(2.15,l.h-.6),y],rot:l.ax==="x"?[l.n*Math.PI/2,0,0]:[0,0,-l.n*Math.PI/2],collide:!1,key:"glass",lineKey:"prop"})}}if(n.includes(d)&&c>3){const M=l.a+1+Math.random()*(c-2.2);if(!x(M)&&!x(M-.4)&&!x(M+.6))for(let _=0;_<10;_++)g(M-.36+_*.08,.5,.09,.05,.55,.11,"paint");!x(M)&&!x(M-.4)&&!x(M+.6)&&(p(M-.42,M+.42,.24,.09,.022,"paint"),p(M-.42,M+.42,.76,.09,.022,"paint"),p(M+.42,M+.6,.24,.06,.02,"rust"))}if(s.includes(d)){const M=Math.floor(c/3);for(let _=0;_<M;_++){if(Math.random()<.45)continue;const v=l.a+.5+Math.random()*(c-1),A=Math.random()<.25;g(v,1.35+Math.random()*.3,.006,A?.45:.21,A?.6:.3,.004,"paperw",(Math.random()-.5)*.15)}}}for(const l of[45.3,47.8,50.3])fa(t.at(27.1,0,l,e/2),{messy:l===47.8}),Fu(t.at(26.35,0,l+1.25)),Ou(t.at(28.2,0,l+1.25,e/2),2.1,{folds:8}),fa(t.at(36.9,0,l,-e/2),{messy:l===50.3}),Fu(t.at(37.6,0,l-1.25)),Ou(t.at(35.8,0,l-1.25,e/2),2.1,{folds:8});Wl(t.at(28.4,0,46.2)),Wl(t.at(35.4,0,49.4)),Wl(t.at(29,0,51.6),{fallen:!0}),jo(t.at(31.5,0,49.5,e/2),1.6,.8),da(t.at(31.5,0,49.2,e/2)),es(t.at(30.6,0,49.6,-e/2)),Ps(t.at(32.5,0,50.5),9,1.2,1.2),Wu(t.at(33.6,0,52.6),{fallen:!0});for(const l of[27.5,28.5,33.5,34.5])Bu(t.at(l,0,53.72,e));Ko(t.at(31,0,53.75,e)),Gu(t.at(29,3.18,52)),Kn(t.at(31.5,0,44),3,2.4,3.2);for(const l of[40,41.2,42.4])hM(t.at(l,0,50.4)),t.box(l+.6,1,51,.04,2,1.6);Ko(t.at(42.7,0,52.8,-e/2)),Ko(t.at(42.7,0,53.5,-e/2)),In(t.at(41,0,52.5),2.6,.3),t.pipe(32.7,34,32.7,44,2.5,.09),t.pipe(32.45,34,32.45,44,2.6,.05),t.pipe(30.2,34,30.2,44,2.65,.04),Hu(t.at(30.55,0,41,.08),{body:!0,bag:!0}),es(t.at(32.2,0,36.5),{fallen:!0}),In(t.at(31.5,0,39),2.8,.6);for(const l of[35.5,42.5])t.box(32.9,1.6,l,.18,.5,.4);ys(t.at(31.5,2.6,34.17),1.2,.25),Kn(t.at(31.5,0,34),3,2.4,2.8),pa(t.at(31.6,0,38),8,1.2,1.5),cM(t.at(42.6,0,39.5,-e/2),4,3,{openIdx:4}),Yl(t.at(37.3,0,38)),xo(t.at(0,0,0),37.3,.95,38,{sheet:!0}),Yl(t.at(37.3,0,41)),Hu(t.at(40,0,42,e/2),{body:!0,bag:!0}),In(t.at(37.3,0,38),2.8,.7,{low:!0}),In(t.at(37.3,0,41),2.8,.7,{low:!0}),Ko(t.at(36,0,36.25)),Ko(t.at(37,0,36.25)),t.box(38.9,.45,41,.6,.9,.45);for(let l=0;l<6;l++)t.box(38.75+l*.06,.92,41,.02,.01,.2,{collide:!1,edges:0});Kn(t.at(35,0,39,e/2),2,2.3,2.8),t.cyl(32,2.5,28,1,1,5,16),t.cyl(32,.15,28,1.25,1.25,.3,16,{collide:!1}),t.cyl(32,4.85,28,1.25,1.25,.3,16,{collide:!1});for(let l=-.3;l<1.9;l+=.3)t.box(32+Math.cos(l)*3,.55,28+Math.sin(l)*3,.9,1.1,.35,{rot:[0,-l+e/2,0]});da(t.at(33.6,.36,30,2.2)),es(t.at(33.2,0,29.2,2.3),{fallen:!0}),ho(t.at(26,0,31.5)),ho(t.at(26,0,24.5)),ho(t.at(38,0,31.5));for(const[l,c]of[[24.6,22.6],[39.4,22.6],[24.6,33.4],[39.4,33.4]])jl(t.at(l,0,c));for(const[l,c,h]of[[38.5,23.2,.9],[37.6,23.1,.7],[38.5,24.2,.8],[38.4,23.3,.6]])Vu(t.at(l,0,c),h,{ry:Math.random(),y:h===.6?.9:0});t.box(25.5,.45,27,1.8,.9,.9,{rot:[0,.2,0]}),In(t.at(29,0,30),5,.6),In(t.at(35,0,25),5,.6),In(t.at(35,0,31),5,1.2),Gu(t.at(28,4.97,25),1.4,1),t.box(29,.4,25.2,1.4,.06,1,{rot:[.5,.3,.2],collide:!1,key:"c_office"}),t.box(29,.5,25.2,1.2,1,.8,{render:!1}),pa(t.at(28.5,0,25),14,1.4,1.2),Ps(t.at(31,0,31.5),10,3,1.5),ys(t.at(30,3,22.05),2,.4),Kn(t.at(32,0,22),4,2.6,5),Kn(t.at(24,0,27.5,e/2),3,2.4,5),Kn(t.at(40,0,27.5,e/2),3,2.4,5);for(const[l,c,h,u]of tf)rM(t.at(l,0,c,h),u);ho(t.at(18,0,27.15),3),t.pipe(13,28.75,24,28.75,2.5,.08),t.pipe(13,28.55,24,28.55,2.6,.05),In(t.at(15.5,0,27.5),2.8,.6),Kn(t.at(13,0,27.5,e/2),3,2.4,2.8),[18.6,21,23.4,31.2,33.6].forEach((l,c)=>{c%2===0?(co(t.at(4,0,l),4,3.2),co(t.at(9.6,0,l),3.6,3.2)):co(t.at(6.6,0,l),6.4,3.2)}),co(t.at(11.5,0,22.2,e/2),2,3.2),co(t.at(2,0,32.4,e/2),1.8,3.2),jo(t.at(6,0,27.6),1.8,.9),es(t.at(6,0,28.4,e)),es(t.at(4.6,0,27),{fallen:!0}),t.box(6.4,.8,27.4,.3,.06,.4,{collide:!1}),In(t.at(6,0,27.6),4,1.6,{low:!0}),t.box(3,.3,27.6,3,.5,.6,{rot:[0,.3,.08]}),Ps(t.at(3.5,0,28.5),20,2,1.2),t.box(1.12,1.3,18,.24,.7,.5),t.pipe(40,26.3,56,26.3,2.45,.12),t.pipe(40,26.6,49,26.6,2.55,.06),t.cyl(49.6,2.3,26.6,.07,.07,.3,18,{key:"rust",collide:!1}),t.cyl(49.6,2.13,26.6,.09,.07,.05,18,{key:"rust",collide:!1}),t.box(44,.03,27.6,1,.03,.9,{rot:[.04,.5,.03],collide:!1,key:"c_office"}),Xl(t.at(43.6,0,28.3),{fallen:!0}),Vu(t.at(47.5,0,26.6),.7,{ry:.6}),t.cyl(50.4,1.2,28.95,.015,.015,2.3,6,{key:"rubber",collide:!1,walk:!0}),ql(t.at(0,0,0),50.4,.06,28.95,50.1,.02,28.4,0,4),In(t.at(52,0,27.5),2.8,.6),pa(t.at(46,0,27.5),10,4,1),Kn(t.at(54,0,29,0),2,2.2,2.4),jo(t.at(54,0,35,0),1.6,.8),da(t.at(54.2,0,34.8,0)),es(t.at(54,0,35.9,e),{fallen:!0}),jo(t.at(57.5,0,35,0),1.6,.8),es(t.at(57.5,0,35.7,e)),jo(t.at(52.5,0,39.3,e/2),1.4,.7);for(const l of[33,34,35,36])Bu(t.at(60.7,0,l,-e/2),.9,1.4,.55,{glass:!1});co(t.at(57,0,40.7),4,2.2,.4,{fill:.5}),t.box(55.5,1.6,32.03,1.6,1,.04,{collide:!1}),Ps(t.at(55,0,37),14,3,2),t.pipe(53.15,22,53.15,26,2.3,.06),t.box(54.9,1.3,24.6,.1,.25,.15,{collide:!1});for(const l of[50,56])t.box(l,2.25,8,.3,4.5,4);Ql(t.at(47,0,10.05),6,3.2),t.box(47,1.6,10,6,3.2,.1,{key:"glass",lineKey:"prop"}),Ql(t.at(53,0,10.05),6,3.2,{gapFrom:-1.4,gapTo:1.2,bent:!0}),Ql(t.at(59,0,10.05),6,3.2),t.box(50.8,1.6,10.05,1.6,3.2,.12,{render:!1}),t.box(55.1,1.6,10.05,1.8,3.2,.12,{render:!1}),t.box(59,1.6,10,6,3.2,.1,{key:"glass",lineKey:"prop"}),fa(t.at(46.5,0,7.4,e/2)),fa(t.at(61,0,7.4,-e/2),{messy:!0}),pa(t.at(53,0,11.5),22,3,1.5),Yl(t.at(53,0,15.5,e/2));for(const l of[-.6,.6])t.box(53+l,1,15.2,.12,.05,.3,{collide:!1});In(t.at(53,0,15.5),4.5,1.8,{low:!0}),Kl(t.at(46.2,0,18.5)),Kl(t.at(59.8,0,18.5),{body:!1}),Kl(t.at(46.2,0,14.5),{body:!0}),Zl(t.at(48.6,0,21.2,e),2),Zl(t.at(58.4,0,21.2,e),2),es(t.at(48.6,0,20.2),{fallen:!0}),ql(t.at(0,0,0),48.6,.9,20.9,53,.02,16,0,6),ql(t.at(0,0,0),58.4,.9,20.9,53.6,.02,15.8,0,6),t.pipe(44.2,6,44.2,22,4,.12),t.pipe(61.8,6,61.8,22,3.8,.1),Ps(t.at(55,0,18.5),12,4,2),ys(t.at(53,3.4,21.95,e),2,.4),Kn(t.at(54,0,22),2,2.4,4.5),t.pipe(30.25,14,30.25,22,2.5,.1),t.pipe(30.5,14,30.5,22,2.7,.06),t.pipe(33.7,14,33.7,22,2.6,.08);for(const l of[15.5,19.5])t.box(33.75,1.2,l,.45,1.8,.9);Xu(t.at(30.05,1.6,17.5,e/2),.5);for(let l=14.5;l<22;l+=1)t.box(32,.005,l,3.8,.01,.15,{collide:!1,edges:0,rot:[0,.6,0]});In(t.at(32,0,18),3,.6),Kn(t.at(32,0,14),4,2.6,3),uM(t.at(32,0,7.2));for(const l of[24.5,39.5])fM(t.at(l,0,4.4),3.5);for(const[l,c]of[[26.6,12.9],[27.3,12.8],[26.9,12.1],[41,12.8]])Xl(t.at(l,0,c));Xl(t.at(40.3,0,12.7),{fallen:!0}),Zl(t.at(38.5,0,11.3,e),2.2),Xu(t.at(41.85,3.5,8.5,-e/2),1.3),t.pipe(35.5,6.4,41.9,6.4,4.5,.25),t.pipe(22,9,28.8,9,4,.2);for(const l of[30,32,34])t.box(l,5.6,7.2,.1,.8,10.6,{collide:!1});for(let l=0;l<3;l++){const c=4.15+l*1.05;t.box(22.35,1.05,c,.6,2.1,1,{key:"paint"}),t.box(22.66,1.3,c,.02,1.5,.85,{collide:!1,key:"iron"}),t.box(22.68,1.3,c+.32,.04,.18,.04,{collide:!1,key:"bplastic"}),t.box(22.67,1.85,c,.01,.18,.3,{collide:!1,key:"paperw"})}t.pipe(22.4,3.4,22.4,7,2.3,.1,{key:"rubber"}),t.box(32,1.3,8.75,.8,.9,.12,{collide:!1}),ys(t.at(32,2.2,8.74),1,.3);for(const l of[5,10])In(t.at(27,0,l),6,2);Kn(t.at(22,0,8.5,e/2),3,2.4,6),t.pipe(13,7.3,22,7.3,2.5,.07),In(t.at(17,0,8.5),2.8,.6),Kn(t.at(13,0,8.5,e/2),3,2.4,3.5),ho(t.at(5,0,8,e/2),2),ho(t.at(12,0,11.5),1.8),jl(t.at(12.3,0,3.7)),jl(t.at(4.7,0,12.3)),t.box(10.5,.55,11.6,2.4,1.1,.7),da(t.at(10,.4,11.6,e)),dM(t.at(7.5,0,3),3,2.4),t.box(9.55,1.3,3.06,.18,.3,.05,{collide:!1}),Ps(t.at(8,0,9),6,2,2),t.box(8.9,1.3,1.5,.05,.45,.25,{collide:!1}),t.box(6.05,.95,1.5,.06,.04,2.6,{collide:!1}),t.box(7.5,.95,.05,2.6,.04,.06,{collide:!1});for(const l of _s){const c=Math.floor(l.x+l.w/2),h=Math.floor(l.z+l.h/2),u=this.ceil[h*Me+c];if(u<2)continue;const f=(nf[l.name]||ef).ceil,d=l.x,m=l.x+l.w,x=l.z,g=l.z+l.h,p=l.w>=l.h;if(f==="c_office"){for(let M=d+1.2;M<m-.6;M+=2.4)for(let _=x+1.2;_<g-.6;_+=2.4)t.box(M,u-.03,_,1.22,.06,.62,{collide:!1,key:"iron"}),t.box(M,u-.065,_,1.12,.012,.54,{collide:!1,key:"plastic",edges:0}),Math.random()<.3&&t.box(M,u-.07,_,1,.004,.02,{collide:!1,key:"bplastic",edges:0});for(let M=d+.3;M<m-.3;M+=.6)for(let _=x+.3;_<g-.3;_+=.6)Math.random()>.05||(t.box(M,u-.004,_,.58,.004,.58,{collide:!1,key:"void",edges:0}),t.box(M+(Math.random()-.5)*.5,.012,_+(Math.random()-.5)*.5,.58,.016,.58,{collide:!1,walk:!0,key:"c_office",rot:[0,Math.random()*3,0]}))}else if(f==="c_plaster"){const M=Math.floor(p?l.w/3:l.h/3);for(let b=0;b<M;b++){const y=(b+.5)/M,E=p?d+l.w*y:d+l.w/2,w=p?x+l.h/2:x+l.h*y;t.box(E,u-.07,w,p?1.25:.16,.12,p?.16:1.25,{collide:!1,key:"paint"}),t.box(E,u-.135,w,p?1.15:.1,.012,p?.1:1.15,{collide:!1,key:"plastic",edges:0})}const _=.45,v=u-.28,A=["Затопленный коридор","Переход"].includes(l.name)?g-_:x+_;if(p){t.box((d+m)/2,v,A,l.w-.1,.05,.3,{collide:!1,key:"iron"});for(let b=d+.6;b<m;b+=1.5)for(const y of[-.14,.14])t.cyl(b,v+.14,A+y,.008,.008,.28,6,{collide:!1,key:"iron",edges:0})}else{t.box(d+_,v,(x+g)/2,.3,.05,l.h-.1,{collide:!1,key:"iron"});for(let b=x+.6;b<g;b+=1.5)for(const y of[-.14,.14])t.cyl(d+_+y,v+.14,b,.008,.008,.28,6,{collide:!1,key:"iron",edges:0})}}else{const M=u>4?.5:.32;if(p)for(let _=d+2.5;_<m-1;_+=3)t.box(_,u-M/2,(x+g)/2,.35,M,l.h,{collide:!1,key:"c_concrete"});else for(let _=x+2.5;_<g-1;_+=3)t.box((d+m)/2,u-M/2,_,l.w,M,.35,{collide:!1,key:"c_concrete"});if(l.name==="Атриум")for(let _=x+3;_<g-1;_+=3)t.box((d+m)/2,u-M/2,_,l.w,M,.35,{collide:!1,key:"c_concrete"});if(Math.min(l.w,l.h)>=3&&l.name!=="Лифт"){const _=u-M-.3,v=u>4?.7:.45;if(p){const A=x+l.h*.28;t.box((d+m)/2,_,A,l.w-.05,v*.6,v,{collide:!1,key:"iron"});for(let b=d+1;b<m;b+=2)t.box(b,_+v*.3+.08,A,.03,.16+M,v+.06,{collide:!1,key:"rust",edges:0});for(let b=d+2.2;b<m-1;b+=4.4)t.box(b,_-v*.3-.01,A,.5,.02,.3,{collide:!1,key:"iron"})}else{const A=d+l.w*.28;t.box(A,_,(x+g)/2,v,v*.6,l.h-.05,{collide:!1,key:"iron"});for(let b=x+1;b<g;b+=2)t.box(A,_+v*.3+.08,b,v+.06,.16+M,.03,{collide:!1,key:"rust",edges:0});for(let b=x+2.2;b<g-1;b+=4.4)t.box(A,_-v*.3-.01,b,.3,.02,.5,{collide:!1,key:"iron"})}}}}t.box(12.9,3.15,8.5,.12,.7,3.2,{collide:!1,key:"iron"});for(const l of[6.94,10.06])t.box(12.93,1.4,l,.1,2.8,.1,{collide:!1,key:"iron"});t.box(4.08,3.15,8.5,.12,.7,3.2,{collide:!1,key:"iron"});for(const l of[6.94,10.06])t.box(4.07,1.4,l,.1,2.8,.1,{collide:!1,key:"iron"});for(const[l,c,h,u]of[[7.5,.84,1,.06],[7.5,0,1,.04],[7,.42,.05,.86],[8,.42,.05,.86]])t.box(l,c,12.97,h,u,.06,{collide:!1,key:"iron",walk:!0});for(const l of[6.95,8.05])t.box(l,1,12.94,.05,2,.05,{collide:!1,key:"iron",walk:!0});t.box(12.95,1.3,6.4,.06,.4,.3,{collide:!1,key:"paint"}),t.box(6.5,1.25,12.95,.3,.4,.06,{collide:!1,key:"paint"}),t.box(4.05,1.3,10.6,.06,.4,.3,{collide:!1,key:"paint"}),ys(t.at(12.96,1.62,6.4,-Math.PI/2),.3,.1),ys(t.at(6.5,1.57,12.96,Math.PI),.3,.1),ys(t.at(4.04,1.62,10.6,Math.PI/2),.3,.1),xo(t.at(0,0,0),22.4,0,27.7,{pose:"mouth",ry:1.45}),xo(t.at(0,0,0),47.1,-.04,27.85,{pose:"mouth",ry:.35}),xo(t.at(0,0,0),8.7,0,29.4,{pose:"mouth",ry:-.2});for(const[l,c]of[[29,-1],[36,1]]){for(const h of[41,42])t.box(h,.62,l,.06,1.25,.08,{collide:!1,key:"iron"});t.box(41.5,1.22,l,1.06,.06,.08,{collide:!1,walk:!0,key:"iron"})}t.box(42.6,.02,28.6,.9,.03,1.1,{collide:!1,walk:!0,key:"iron",rot:[0,.3,0]});for(let l=0;l<6;l++)t.box(42.6+Math.cos(.3)*(l-2.5)*.15,.04,28.6-Math.sin(.3)*(l-2.5)*.15,.02,.02,1,{collide:!1,walk:!0,key:"rust",rot:[0,.3,0],edges:0});const a=Math.PI;Jl(t.at(33.8,0,46,.3)),$l(t.at(26.6,0,53.35,0)),vM(t.at(29.8,0,46.9,.2)),ma(t.at(34.5,2.4,44.03,0)),Yu(t.at(31,1.6,53.96,a)),Yu(t.at(42.97,1.6,53.15,-a/2),.9,.6),Ju(t.at(40.5,0,52.5)),xM(t.at(39.4,0,53.5)),yM(t.at(39.15,0,52.2,a/2)),Wu(t.at(32.3,0,43.1,2.6)),qu(t.at(32.97,0,36.6,-a/2)),pM(t.at(30.03,0,42.3,a/2)),Ju(t.at(38.6,0,39.5)),Jl(t.at(36,0,42.3,0)),MM(t.at(27.5,0,32.85,a)),ga(t.at(35.5,0,32.65,a+.3)),ga(t.at(37.25,0,32.3,a-.4)),ma(t.at(35.5,3,22.03,0)),Zu(t.at(28.3,0,25.4),34,1,.8),qu(t.at(18.5,0,28.97,a)),tc(t.at(1.35,0,26,a/2),{open:!1}),tc(t.at(1.35,0,28.9,a/2),{open:!0}),ju(t.at(5.6,0,27.65,.1)),ga(t.at(59.2,0,39.6,-2.4)),ju(t.at(52.5,0,39.55,a/2)),tc(t.at(50.4,0,33.2,a/2),{open:!0}),ma(t.at(58.5,2.3,32.03,0)),Ku(t.at(45.3,0,28.25,.25));for(const l of[4.6,6.2,11.4])t.cyl(41.75,1.6,l,.06,.06,3.2,16,{key:"rust",collide:!1}),Qu(t.at(41.55,1.25,l,-a/2));Ku(t.at(24.5,0,9.9,.2)),$l(t.at(36.8,0,3.55,0),4),t.cyl(30.18,1.3,16,.05,.05,2.6,16,{key:"rust",collide:!1}),Qu(t.at(30.3,1.35,16,a/2),.13),ga(t.at(5.4,0,10.6,a/2)),ma(t.at(11,2.4,3.03,0)),$l(t.at(60.6,0,13.5,-a/2)),Jl(t.at(55.6,0,17.2,.5)),Zu(t.at(58.2,0,12.6),24,.9,.6);for(const l of[4,10]){const[c,h,u,f]=nc[l];mM(t.at(c+u*.02,0,h+f*.02,Math.atan2(u,f)),.9,2.05)}this.scene.add(t.build(this.mat,this.lineMat)),this.colliders=t.colliders,this.audit=t.audit||[],this.drips.push({pos:new D(31.2,2.8,41.5),t:0,int:1.7},{pos:new D(38.5,2.8,39.5),t:.5,int:2.6},{pos:new D(3.5,4,29.5),t:1,int:3.1},{pos:new D(49.6,1.2,26.9),t:0,int:.55},{pos:new D(44.5,2.8,28),t:0,int:2.2},{pos:new D(53.5,3,38),t:0,int:1.9},{pos:new D(59,3,33.5),t:0,int:2.8},{pos:new D(47.5,4.5,12.5),t:0,int:2.4},{pos:new D(42.5,2.6,53.2),t:0,int:1.5},{pos:new D(8,3.5,6),t:0,int:3.3}),this.sparks.push({pos:new D(50.4,.25,28.8),t:0,int:2.7},{pos:new D(33.7,2,19.5),t:1,int:4.3},{pos:new D(58.4,1.5,20.9),t:2,int:3.6})}buildDecals(){const t={},e=(c,h,u,f,d,m,x,g,p=Math.random()*6.28,M=g)=>{const _=new fs(g,M),v=new D(d,m,x).normalize(),A=new We().setFromUnitVectors(new D(0,0,1),v),b=new We().setFromAxisAngle(v,p);_.applyQuaternion(A.premultiply(b)),_.translate(h+v.x*.006,u+v.y*.006,f+v.z*.006),(t[c]||(t[c]=[])).push(_)},n=(c,h)=>c+Math.random()*(h-c),s=c=>{let h=Math.random()*Object.values(c).reduce((u,f)=>u+f,0);for(const u in c)if((h-=c[u])<=0)return u;return Object.keys(c)[0]},o={leak:2,crack:2.5,mould:1.5,blood_splat:1,handprints:.8,claws:.7,stain:.6},r={leak:3.5,crack:2.5,mould:2,soot:1,claws:1};for(const c of this.wallRuns){const h=c.b-c.a,u=c.ax==="x"?Math.floor((c.a+c.b)/2):c.n>0?c.at:c.at-1,f=c.ax==="x"?c.n>0?c.at:c.at-1:Math.floor((c.a+c.b)/2),d=this.room[f*Me+u],m=d>=0?_s[d].name:"";if(c.h<2)continue;const x=["Затопленный коридор","Служебный коридор","Генераторная","Шлюз","Безэховый блок","Лифт"].includes(m),g=Math.max(1,Math.round(h/2.2));for(let p=0;p<g;p++){const M=s(x?r:o),_=n(c.a+.4,c.b-.4);let v,A,b=n(-.25,.25),y;M==="leak"?(v=n(.9,1.8),y=v*n(1,1.6),A=c.h-y/2,b=0):M==="mould"?(v=n(.8,1.6),A=n(.2,.7)):M==="crack"?(v=n(.6,1.4),A=n(.4,c.h-.6),b=n(0,6.28)):M==="soot"?(v=n(1,2),A=n(.6,1.6)):M==="stain"?(v=n(.8,1.4),A=n(1.5,c.h-.5)):(v=n(.5,.9),A=n(.9,1.6));const E=c.ax==="z"?c.n:0,w=c.ax==="x"?c.n:0,S=c.ax==="x"?_:c.at,L=c.ax==="x"?c.at:_;e(M,S,A,L,E,0,w,v,b,y)}}for(let c=0;c<Sn;c++)for(let h=0;h<Me;h++){if(!this.open(h,c))continue;const u=this.cells[c*Me+h];Math.random()<.06&&u!==Tn.WATER&&e("crack",h+Math.random(),0,c+Math.random(),0,1,0,n(.6,1.4)),Math.random()<.03&&u!==Tn.WATER&&u!==Tn.CARPET&&e("stain",h+Math.random(),0,c+Math.random(),0,1,0,n(.6,1.2)),Math.random()<.05&&e("stain",h+Math.random(),this.ceil[c*Me+h],c+Math.random(),0,-1,0,n(.8,1.8)),Math.random()<.02&&e("mould",h+Math.random(),this.ceil[c*Me+h],c+Math.random(),0,-1,0,n(.8,1.6))}e("blood_drag",34.2,0,39,0,1,0,1,Math.PI/2,3),e("blood_drag",31.6,0,37,0,1,0,.9,.1,2.6),e("blood_pool",37.9,0,37.55,0,1,0,.7),e("blood_pool",28.6,0,26.2,0,1,0,1.6),e("blood_splat",29.3,0,24.6,0,1,0,1.4),e("blood_splat",31,2,28,-1,0,0,1.2),e("blood_drag",53.2,0,13,0,1,0,1,.25,4),e("blood_pool",53,0,8.3,0,1,0,1.4),e("claws",50.15,1.6,8,1,0,0,1),e("claws",55.85,1.8,7.5,-1,0,0,1,.3),e("claws",53,1.7,22,0,0,1,.9),e("handprints",53.02,1.3,23.2,1,0,0,.8),e("handprints",9.4,1.3,3.03,0,0,1,.7,.2),e("blood_drag",8,0,6,0,1,0,.8,-.4,2.4),e("handprints",30.03,1.25,36.3,1,0,0,.75,-.3),e("blood_splat",26.03,1.4,49,1,0,0,1),e("blood_pool",8.5,0,9.5,0,1,0,1.1),e("soot",33.6,1.2,19.5,-1,0,0,1.4),e("soot",50.4,0,27.9,0,1,0,1.2),e("claws",20,1.5,29,0,0,-1,.9);const a=new Te,l={blood_pool:1,blood_drag:.8,blood_splat:.7,handprints:.6,leak:.5,mould:.3};for(const c in t){const h=Ka(t[c],!1),u=new Ge(h,at({pat:8,map:"decal:"+c,wet:l[c]||0,boost:1}));u.renderOrder=1,a.add(u)}this.scene.add(a)}buildDynamic(){const t=this.mat.item;this.lineMat.item;const e=at({map:"paperw",scale:4,boost:2.2,tint:16774880}),n=(M,_,v,A={})=>{const b=v.isObject3D?v:Aa(v,M==="note"?e:t);b.position.copy(_),this.scene.add(b);const y={type:M,pos:_.clone(),obj:b,taken:!1,...A};return this.items.push(y),y},s=()=>[{geo:new Ie(.21,.006,.297),rot:[0,.3,0]}],o=Yh(),r=()=>jh(o),a=(M,_,v)=>new D(M,_,v);n("note",a(36.25,.69,50.15),s(),{note:0}),n("note",a(33.9,1.13,29.6),s(),{note:1}),n("note",a(38.9,.915,41.2),s(),{note:2}),n("note",a(6.4,.77,27.7),s(),{note:3}),n("note",a(57.3,.77,34.9),s(),{note:4}),n("note",a(48.2,1.12,21),s(),{note:5}),n("note",a(42.55,.96,52.8),s(),{note:6}),n("note",a(38.1,1.13,11),s(),{note:7}),n("note",a(11.2,1.12,11.55),s(),{note:8}),n("fuseA",a(1.3,1.3,18),r(),{name:"предохранитель ПН-2"}),n("card",a(54.5,.77,34.7),[{geo:new Ie(.085,.004,.054)}],{name:"карта доступа Ореховой"}),n("fuseB",a(53,.05,6.8),r(),{name:"предохранитель ПН-2"}),n("panel",a(32,1.3,8.85),[{geo:new Ie(.3,.3,.02)}]),n("call",a(9.55,1.3,3.1),[{geo:new Ie(.08,.08,.02)}]),n("cab",a(8.85,1.3,1.5),[{geo:new Ie(.02,.1,.1)}]);const l=()=>[{geo:new ko(.07,0)}];for(const[M,_]of[[33.2,46.2],[31.2,36],[40.5,37.2],[41,38],[27,29],[36.5,24.5],[20.5,28.4],[9,29.5],[45.5,28.4],[51.2,33],[47,13],[35.5,12.8],[31,19.5],[6,10]])n("stone",a(M,.05,_),l());const c=this.mat,h=this.lineMat.prop,u=[{id:"slamMorgue",plane:"x",at:35,a:38,b:40,open:0},{id:"slamOffice",plane:"z",at:29,a:53,b:55,open:-Math.PI/2},{id:"slamArchive",plane:"x",at:13,a:26,b:29,open:Math.PI}];for(const M of u){const _=(M.b-M.a)/2,v={id:M.id,kind:"slam",closed:!1,t:1,hp:3,broken:!1,leaves:[],box:null},A=[[M.a+.03,M.plane==="x"?-Math.PI/2:0],[M.b-.03,M.plane==="x"?Math.PI/2:Math.PI]];for(const[b,y]of A){const E=$u(c,h,_-.03,2.15,{window:!0,mat:"pwoodb"});M.plane==="x"?E.pivot.position.set(M.at,0,b):E.pivot.position.set(b,0,M.at),this.scene.add(E.pivot),v.leaves.push({pivot:E.pivot,closedRot:y,openRot:M.open})}v.boxClosed=M.plane==="x"?{minX:M.at-.08,maxX:M.at+.08,minZ:M.a,maxZ:M.b}:{minX:M.a,maxX:M.b,minZ:M.at-.08,maxZ:M.at+.08},v.center=M.plane==="x"?new D(M.at,1.2,(M.a+M.b)/2):new D((M.a+M.b)/2,1.2,M.at),this.doors.push(v),this.items.push({type:"slam",door:M.id,pos:v.center.clone(),obj:new Ve,taken:!1})}const f=new Te,d=(M,_)=>{const v=new Te,A=new Ge(new Ie(.05,_,M),c.plates);A.add(new ka(new Oh(A.geometry,30),h)),v.add(A);for(let b=1;b<Math.floor(_/.12);b++){const y=new Ge(new Ie(.07,.015,M),c.iron);y.position.y=-_/2+b*.12,v.add(y)}return v};f.add(d(3,2.8)),f.position.set(12.97,1.4,8.5),this.scene.add(f),this.doors.push({id:"shA",kind:"shutter",closed:!1,t:0,obj:f,y0:1.4,rise:2.75,speed:.9,box:null,boxClosed:{minX:12.92,maxX:13.02,minZ:7,maxZ:10}});const m=d(1,.95);m.rotation.y=Math.PI/2,m.position.set(7.5,.47,12.955),this.scene.add(m),this.doors.push({id:"shB",kind:"shutter",closed:!1,t:0,obj:m,y0:.47,rise:1,speed:1.3,box:null,boxClosed:{minX:7,maxX:8,minZ:12.9,maxZ:13.02}});const x=d(3,2.8);x.position.set(4.03,1.4,8.5),this.scene.add(x),this.doors.push({id:"shC",kind:"shutter",closed:!1,t:0,obj:x,y0:1.4,rise:2.75,speed:.9,box:null,boxClosed:{minX:3.98,maxX:4.08,minZ:7,maxZ:10}});for(const[M,_,v,A,b]of tf)for(const y of b){const E=(y-(A-1)/2)*.5,w=Math.cos(v),S=Math.sin(v),L=(U,R)=>new D(M+U*w+R*S,0,_-U*S+R*w);this.items.push({type:"locker",pos:L(E,.45).setY(1.1),inside:L(E,.02),front:L(E,.8),yaw:v+Math.PI,obj:new Ve,taken:!1})}this.items.push({type:"shutterA",pos:new D(12.9,1.3,6.4),obj:new Ve,taken:!1}),this.items.push({type:"shutterB",pos:new D(6.5,1.25,12.9),obj:new Ve,taken:!1}),this.items.push({type:"shutterC",pos:new D(4.1,1.3,10.6),obj:new Ve,taken:!1}),this.items.push({type:"seismo",pos:new D(10,1.3,11.4),obj:new Ve,taken:!1});const g={id:"lab",kind:"hinge",closed:!0,t:0,box:{minX:53,maxX:55,minZ:23.9,maxZ:24.1},leaves:[]};for(const[M,_,v]of[[53.02,0,-1],[54.98,Math.PI,1]]){const A=_M(c,h,.96,2.5);A.pivot.position.set(M,0,24),A.pivot.rotation.y=_,this.scene.add(A.pivot),g.leaves.push({...A,closedRot:_,dir:v})}this.doors.push(g);const p={id:"lift",kind:"slide",closed:!0,t:0,box:{minX:6,maxX:9,minZ:2.9,maxZ:3.1},leaves:[]};for(const M of[-1,1]){const _=bM(c,h,1.5,2.4);_.position.set(7.5+M*.75,1.2,3.02),this.scene.add(_),p.leaves.push({obj:_,base:7.5+M*.75,s:M})}this.doors.push(p),nc.forEach(([M,_,v,A],b)=>{const y=new Te;y.position.set(M,0,_),y.rotation.y=Math.atan2(v,A),y.add(SM(c,h,.9,2.05,b%3===2?"pwoodb":"pwood"));const E=$u(c,h,.9,2.05,{window:b%2===0,mat:b%3===2?"pwoodb":"pwood"});E.pivot.position.set(-.45,0,.035),y.add(E.pivot),this.scene.add(y),y.updateMatrixWorld(!0);const w=new D;E.handle.getWorldPosition(w),this.doors.push({id:"locked"+b,kind:"locked",closed:!1,t:0,rattle:0,pivot:E.pivot,handle:E.handle}),this.items.push({type:"locked",door:"locked"+b,pos:w,obj:y,taken:!1})})}door(t){return this.doors.find(e=>e.id===t)}setDoor(t,e){const n=this.door(t);n.closed=!e,n.target=e?1:0,this.buildNav()}updateDoors(t){for(const e of this.doors){if(e.kind==="locked"){if(e.rattle>0){e.rattle=Math.max(0,e.rattle-t);const o=e.rattle/.6;e.handle.rotation.z=-.55*Math.abs(Math.sin(e.rattle*22))*o,e.pivot.rotation.y=Math.sin(e.rattle*60)*.012*o}continue}if(e.kind==="slam"){const o=e.closed?0:1;e.t+=Math.sign(o-e.t)*Math.min(Math.abs(o-e.t),t*(e.closed?3.2:e.broken?4:1.3));const r=ec(e.t);for(const a of e.leaves){const l=e.broken?.25*Math.sign(a.openRot-a.closedRot||1):0;a.pivot.rotation.y=a.closedRot+(a.openRot+l-a.closedRot)*r+(e.shudder>0?Math.sin(e.shudder*70)*.03*e.shudder:0)}e.shudder>0&&(e.shudder=Math.max(0,e.shudder-t*2)),e.box=e.t<.5&&!e.broken?e.boxClosed:null;continue}if(e.kind==="shutter"){const o=e.closed?1:0;e.t+=Math.sign(o-e.t)*Math.min(Math.abs(o-e.t),t*e.speed),e.obj.position.y=e.y0+e.rise*(1-ec(e.t)),e.boxClosed&&(e.box=e.t>.85?e.boxClosed:null);continue}const n=e.closed?0:1;e.t+=Math.sign(n-e.t)*Math.min(Math.abs(n-e.t),t*(e.kind==="hinge"?.45:.6));const s=ec(e.t);if(e.kind==="hinge")for(const o of e.leaves)o.pivot.rotation.y=o.closedRot+o.dir*1.72*s;if(e.kind==="slide")for(const o of e.leaves)o.obj.position.x=o.base+o.s*1.45*s}}toggleSlam(t){const e=this.door(t);return!e||e.broken?null:(e.closed=!e.closed,e.closed)}bashDoor(t){return t.hp-=1,t.shudder=1,t.hp<=0?(t.broken=!0,t.closed=!1,!0):!1}slamDoorAhead(t){for(const e of this.doors)if(!(e.kind!=="slam"||e.broken||!e.closed||e.t>.5)&&Math.hypot(e.center.x-t.x,e.center.z-t.z)<1.15)return e;return null}setShutter(t,e){const n=this.door(`sh${t}`);n.closed!==e&&(n.closed=e,this.onShutter&&this.onShutter(n,e))}rattle(t){const e=this.door(t);e&&(e.rattle=.6)}buildCollision(){this.hash=Array.from({length:Me*Sn},()=>[]);for(const t of this.colliders)for(let e=Math.floor(t.minZ);e<=Math.floor(t.maxZ);e++)for(let n=Math.floor(t.minX);n<=Math.floor(t.maxX);n++)n>=0&&e>=0&&n<Me&&e<Sn&&this.hash[e*Me+n].push(t)}collide(t,e){for(let n=0;n<2;n++){const s=Math.floor(t.x-e-1),o=Math.floor(t.x+e+1),r=Math.floor(t.z-e-1),a=Math.floor(t.z+e+1),l=new Set;for(let c=r;c<=a;c++)for(let h=s;h<=o;h++)if(!this.open(h,c))this._push(t,e,h,h+1,c,c+1);else if(h>=0&&c>=0&&h<Me&&c<Sn)for(const u of this.hash[c*Me+h])l.has(u)||(l.add(u),this._push(t,e,u.minX,u.maxX,u.minZ,u.maxZ));for(const c of this.doors)c.box&&(c.closed||c.kind==="shutter"||c.kind==="slam")&&!(this._navBuild&&c.kind==="slam")&&this._push(t,e,c.box.minX,c.box.maxX,c.box.minZ,c.box.maxZ)}}_push(t,e,n,s,o,r){const a=Math.max(n,Math.min(t.x,s)),l=Math.max(o,Math.min(t.z,r)),c=t.x-a,h=t.z-l,u=c*c+h*h;if(!(u>=e*e))if(u>1e-8){const f=Math.sqrt(u);t.x=a+c/f*e,t.z=l+h/f*e}else{const f=t.x-n,d=s-t.x,m=t.z-o,x=r-t.z,g=Math.min(f,d,m,x);g===f?t.x=n-e:g===d?t.x=s+e:g===m?t.z=o-e:t.z=r+e}}blockedPoint(t,e,n){const s={x:t,z:e};return this.collide(s,n),Math.abs(s.x-t)>.001||Math.abs(s.z-e)>.001}buildNav(){this._navBuild=!0;const t=this.navS=.25,e=this.NW=Me/t,n=this.NH=Sn/t,s=()=>{const l=new Uint8Array(e*n);for(let c=0;c<n;c++)for(let h=0;h<e;h++){const u=(h+.5)*t,f=(c+.5)*t,d=Math.floor(f)*Me+Math.floor(u),m=this.ceil[d]>=1.7||this.shaftCell(Math.floor(u),Math.floor(f));l[c*e+h]=this.open(Math.floor(u),Math.floor(f))&&m&&!this.blockedPoint(u,f,.3)?1:0}return l};if(!this.navReach){const l=this.doors.map(d=>d.closed);this.doors.forEach(d=>d.closed=!1);const c=s();this.doors.forEach((d,m)=>d.closed=l[m]);const h=new Uint8Array(e*n),u=Math.floor(50.6/t)*e+Math.floor(34.9/t),f=[u];for(h[u]=1;f.length;){const d=f.pop(),m=d%e,x=d/e|0;for(const[g,p]of[[1,0],[-1,0],[0,1],[0,-1]]){const M=(x+p)*e+m+g;m+g<0||m+g>=e||x+p<0||x+p>=n||h[M]||!c[M]||(h[M]=1,f.push(M))}}this.navReach=h}const o=s();for(let l=0;l<o.length;l++)o[l]&=this.navReach[l];this.nav=o,this._navBuild=!1;const r=new Float32Array(e*n);for(let l=0;l<r.length;l++)r[l]=o[l]?1e4:0;const a=(l,c,h)=>{r[c]+h<r[l]&&(r[l]=r[c]+h)};for(let l=0;l<n;l++)for(let c=0;c<e;c++){const h=l*e+c;r[h]&&(c>0&&a(h,h-1,1),l>0&&a(h,h-e,1),c>0&&l>0&&a(h,h-e-1,1.414),c<e-1&&l>0&&a(h,h-e+1,1.414))}for(let l=n-1;l>=0;l--)for(let c=e-1;c>=0;c--){const h=l*e+c;r[h]&&(c<e-1&&a(h,h+1,1),l<n-1&&a(h,h+e,1),c<e-1&&l<n-1&&a(h,h+e+1,1.414),c>0&&l<n-1&&a(h,h+e-1,1.414))}for(let l=0;l<r.length;l++)r[l]=Math.min(r[l],40)*t;this.navDist=r}clearance(t,e){if(!this.navDist)return 1;const[n,s]=this.navCell(t,e);return n<0||s<0||n>=this.NW||s>=this.NH?0:this.navDist[s*this.NW+n]+.3}navCell(t,e){return[Math.floor(t/this.navS),Math.floor(e/this.navS)]}walkable(t,e){return t>=0&&e>=0&&t<this.NW&&e<this.NH&&this.nav[e*this.NW+t]===1}nearestWalkable(t,e){const[n,s]=this.navCell(t,e);for(let o=0;o<14;o++)for(let r=-o;r<=o;r++)for(let a=-o;a<=o;a++)if(Math.max(Math.abs(a),Math.abs(r))===o&&this.walkable(n+a,s+r))return[n+a,s+r];return null}findPath(t,e){const n=this.nearestWalkable(t.x,t.z),s=this.nearestWalkable(e.x,e.z);if(!n||!s)return null;const o=this.NW,r=n[1]*o+n[0],a=s[1]*o+s[0],l=new Float32Array(this.NW*this.NH).fill(1/0),c=new Int32Array(this.NW*this.NH).fill(-1),h=new Uint8Array(this.NW*this.NH),u=[],f=(b,y)=>{u.push([y,b]);let E=u.length-1;for(;E>0;){const w=E-1>>1;if(u[w][0]<=u[E][0])break;[u[w],u[E]]=[u[E],u[w]],E=w}},d=()=>{const b=u[0],y=u.pop();if(u.length){u[0]=y;let E=0;for(;;){const w=2*E+1,S=w+1;let L=E;if(w<u.length&&u[w][0]<u[L][0]&&(L=w),S<u.length&&u[S][0]<u[L][0]&&(L=S),L===E)break;[u[L],u[E]]=[u[E],u[L]],E=L}}return b[1]},m=b=>{const y=b%o,E=b/o|0,w=Math.abs(y-s[0]),S=Math.abs(E-s[1]);return Math.max(w,S)+.414*Math.min(w,S)};let x=null;if(this.avoid){const b=this.avoid,y=this.navS;x=[Math.floor(b.minX/y),Math.ceil(b.maxX/y),Math.floor(b.minZ/y),Math.ceil(b.maxZ/y)];const E=w=>w[0]>=x[0]&&w[0]<x[1]&&w[1]>=x[2]&&w[1]<x[3];(E(n)||E(s))&&(x=null)}l[r]=0,f(r,m(r));let g=0;for(;u.length&&g++<9e4;){const b=d();if(b===a)break;if(h[b])continue;h[b]=1;const y=b%o,E=b/o|0;for(let w=-1;w<=1;w++)for(let S=-1;S<=1;S++){if(!S&&!w)continue;const L=y+S,U=E+w;if(!this.walkable(L,U)||S&&w&&(!this.walkable(y+S,E)||!this.walkable(y,E+w))||x&&L>=x[0]&&L<x[1]&&U>=x[2]&&U<x[3])continue;const R=U*o+L,k=this.navDist?this.navDist[R]:1,X=l[b]+(S&&w?1.414:1)*(1+Math.max(0,.7-k)*4);X<l[R]&&(l[R]=X,c[R]=b,f(R,X+m(R)))}}if(c[a]<0&&a!==r)return null;const p=[];for(let b=a;b!==-1&&(p.push(b),b!==r);b=c[b]);p.reverse();const M=this.navS,_=p.map(b=>new D((b%o+.5)*M,0,((b/o|0)+.5)*M)),v=[_[0]];let A=0;for(;A<_.length-1;){let b=A+1;for(let y=_.length-1;y>A+1;y--)if(this.navLine(_[A],_[y],x)){b=y;break}v.push(_[b]),A=b}return v}navLine(t,e,n=null){const s=t.distanceTo(e),o=Math.ceil(s/.1),r=this.navDist?Math.min(.6,this.clearance(t.x,t.z)-.3,this.clearance(e.x,e.z)-.3)-.05:-1;for(let a=1;a<o;a++){const l=a/o,[c,h]=this.navCell(t.x+(e.x-t.x)*l,t.z+(e.z-t.z)*l);if(n&&c>=n[0]&&c<n[1]&&h>=n[2]&&h<n[3]||!this.walkable(c,h)||r>0&&this.navDist[h*this.NW+c]<r)return!1}return!0}randomWalkable(t=null,e=10,n=0){for(let s=0;s<200;s++){let o,r;if(t){const c=Math.random()*Math.PI*2,h=n+Math.random()*(e-n);o=t.x+Math.cos(c)*h,r=t.z+Math.sin(c)*h}else o=Math.random()*Me,r=Math.random()*Sn;const[a,l]=this.navCell(o,r);if(this.walkable(a,l))return new D((a+.5)*this.navS,0,(l+.5)*this.navS)}return null}occlusion(t,e){const n=Math.hypot(e.x-t.x,e.z-t.z),s=Math.ceil(n/.35);let o=0,r=!1;for(let a=1;a<s;a++){const l=a/s,c=t.x+(e.x-t.x)*l,h=t.z+(e.z-t.z)*l,u=!this.open(Math.floor(c),Math.floor(h));u&&!r&&o++,r=u}for(const a of this.doors)!a.closed||!a.box||EM(t,e,a.box)&&o++;return Math.min(1,o/2.5)}}function EM(i,t,e){for(let s=0;s<=24;s++){const o=s/24,r=i.x+(t.x-i.x)*o,a=i.z+(t.z-i.z)*o;if(r>=e.minX&&r<=e.maxX&&a>=e.minZ&&a<=e.maxZ)return!0}return!1}function AM(i,t,e,n=.31){const s=e.x-t.x,o=e.z-t.z,r=Math.hypot(s,o);if(r<1e-6)return null;const a=i.NW&&i.navS?Math.round(i.NW*i.navS):64,l=new Set;if(i.hash){for(let c=Math.floor(Math.min(t.z,e.z)-n);c<=Math.floor(Math.max(t.z,e.z)+n);c++)for(let h=Math.floor(Math.min(t.x,e.x)-n);h<=Math.floor(Math.max(t.x,e.x)+n);h++)if(h>=0&&h<a&&c>=0)for(const u of i.hash[c*a+h]||[])l.add(u)}else for(const c of i.colliders||[])l.add(c);for(const c of l){if(!(c.minY<=.24&&c.maxY>=.16&&c.maxY<=.68))continue;const h=Math.max(c.minX,Math.min(e.x,c.maxX)),u=Math.max(c.minZ,Math.min(e.z,c.maxZ));if(Math.hypot(e.x-h,e.z-u)>n)continue;const f=Math.max(c.minX,Math.min(t.x,c.maxX)),d=Math.max(c.minZ,Math.min(t.z,c.maxZ)),m=Math.hypot(t.x-f,t.z-d);if(m<n-.035)continue;const x=(t.x-f)/m,g=(t.z-d)/m;if(!((s*x+o*g)/r>-.4)&&!(i.open&&!i.open(Math.floor(h),Math.floor(u)))&&![...l].some(p=>p!==c&&p.minY<1.35&&p.maxY>.8&&h>=p.minX-.02&&h<=p.maxX+.02&&u>=p.minZ-.02&&u<=p.maxZ+.02))return{box:c,point:{x:h,y:c.maxY,z:u},normal:{x,z:g}}}return null}const sf={[Tn.TILE]:1,[Tn.WATER]:1.6,[Tn.GLASS]:1.7,[Tn.METAL]:1.3,[Tn.CARPET]:.65},ic=2.1;class CM{constructor(t,e,n,s){this.camera=t,this.level=e,this.audio=n,this.game=s,this.pos=new D,this.yaw=0,this.pitch=0,this.keys=new Set,this.touchMove={x:0,y:0},this.crouch=!1,this.stamina=1,this.breathCap=1,this.holding=!1,this.holdT=0,this.breathT=1,this.breathOut=!0,this.stepAcc=0,this.bob=0,this.eye=1.65,this.vel=new D,this.clickCd=0,this.clickStreak=0,this.clickQuietT=0,this.stones=0,this.projectiles=[],this.frozen=!1,this.moving=!1,this.running=!1,this.lookTarget=null,this.clearFall(),this.falls=0}clearFall(){this.fallT=this.fallK=this.tripCooldown=this.runDistance=0,this.fallImpact=!1,this.fallSide=1}trip(t){this.fallT=ic,this.tripCooldown=6,this.runDistance=this.stepAcc=0,this.fallImpact=!1;const e=(t.point.x-this.pos.x)*Math.cos(this.yaw)-(t.point.z-this.pos.z)*Math.sin(this.yaw);this.fallSide=Math.sign(e)||((this.steps||0)%2?-1:1),this.holding=this.running=this.listening=this.moving=!1,this.stamina=Math.max(0,this.stamina-.16),this.falls++,this.tripHinted||(this.tripHinted=!0,this.game.hint("Споткнулся. Сбавь шаг у низких препятствий.",4,!0))}updateFall(t){if(this.tripCooldown=Math.max(0,this.tripCooldown-t),this.fallT<=0){this.fallK=0;return}this.fallT=Math.max(0,this.fallT-t);const e=ic-this.fallT;if(this.fallK=Vt.smoothstep(e,0,.3)*(1-Vt.smoothstep(e,.85,ic)),!this.fallImpact&&e>=.32){this.fallImpact=!0;const n=this.level.floorAt(this.pos.x,this.pos.z),s=this.pos.clone().setY(.15);this.audio.bodyFall(s,n),this.game.noise(s,{radius:12*(sf[n]||1),visual:8,source:"player",kind:"fall",color:Zt.player,strength:1.1,speed:11}),this.shake=Math.max(this.shake||0,.65),this.breathT=1}}reset(t,e){this.touchMove={x:0,y:0},this.braceContact=null,this.pos.set(t.x,0,t.z),this.yaw=e,this.pitch=0,this.stamina=1,this.breathCap=1,this.holding=!1,this.crouch=!1,this.vel.set(0,0,0),this.frozen=!1,this.lookTarget=null,this.hidden=null,this.clickCd=0,this.clickStreak=0,this.clickQuietT=0,this.clearFall(),this.eye=1.65,this.camera.position.set(this.pos.x,this.eye,this.pos.z),this.camera.rotation.set(0,e,0,"YXZ");for(const n of this.projectiles)n.mesh.removeFromParent();this.projectiles=[]}hide(t){this.hidden=t,this.vel.set(0,0,0),this.pos.copy(t.inside),this.yaw=t.yaw,this.hideYaw=t.yaw,this.pitch=0,this.crouch=!1}unhide(){this.hidden&&(this.pos.copy(this.hidden.front),this.hidden=null)}look(t,e,n){if(!this.frozen){if(this.hidden){this.yaw=Vt.clamp(this.yaw-t*n,this.hideYaw-.45,this.hideYaw+.45),this.pitch=Vt.clamp(this.pitch-e*n,-.35,.3);return}this.yaw-=t*n,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch-e*n))}}forward(){return new D(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}click(){if(this.clickCd>0||this.frozen||this.fallT>0)return;this.clickCd=.55,this.clickStreak=Math.min(5,this.clickStreak+1),this.clickQuietT=3;const t=5+(this.clickStreak-1)*6;this.audio.click();let e=this.camera.position.clone();this.vm&&(this.vm.tap(),e=this.vm.tipWorld(),e.y=Math.max(.05,e.y)),this.game.noise(e,{radius:t,visual:10,source:"player",kind:"click",color:Zt.click,speed:13,strength:.68,decay:2.1})}throwStone(t){if(this.stones<=0||this.frozen||this.fallT>0)return;this.stones--;const e=new D;this.camera.getWorldDirection(e);const n=new Ge(new ko(.06,0),this.level.mat.item);n.position.copy(this.camera.position).addScaledVector(e,.4),t.add(n),this.projectiles.push({mesh:n,vel:e.multiplyScalar(11).add(new D(0,2.2,0)),bounces:0,life:4}),this.audio.whoosh()}update(t,e){var Jt,Nt;this.updateFall(t),this.clickCd-=t,this.clickQuietT=Math.max(0,this.clickQuietT-t),this.clickQuietT===0&&(this.clickStreak=0);const n=this.keys;let s=0,o=0;!this.frozen&&this.fallT<=0&&(s+=((Jt=this.touchMove)==null?void 0:Jt.x)||0,o+=((Nt=this.touchMove)==null?void 0:Nt.y)||0,(n.has("KeyW")||n.has("ArrowUp"))&&(o-=1),(n.has("KeyS")||n.has("ArrowDown"))&&(o+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(s-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(s+=1)),this.listening=!this.frozen&&this.fallT<=0&&!this.hidden&&n.has("KeyV"),(this.hidden||this.listening)&&(s=o=0);const r=Math.min(1,Math.hypot(s,o)),a=new D(s,0,o);this.moving=a.lengthSq()>0,this.running=this.moving&&(n.has("ShiftLeft")||n.has("ShiftRight"))&&this.stamina>.05&&!this.crouch,this.moving&&a.normalize().applyAxisAngle(new D(0,1,0),this.yaw);const l=this.crouch?1.25:this.running?4.4:2.3;this.vel.lerp(a.multiplyScalar(l*r),Math.min(1,t*10));const c=this.pos.clone();if(this.pos.addScaledVector(this.vel,t),this.running&&!this.hidden&&this.fallT<=0&&this.tripCooldown<=0&&(this.game.psychosis||0)>=.55&&this.runDistance>.65&&this.vel.length()>3){const Wt=AM(this.level,c,this.pos);Wt&&this.trip(Wt)}this.hidden||this.level.collide(this.pos,.3);const h=Math.hypot(this.pos.x-c.x,this.pos.z-c.z);this.runDistance=this.running&&this.fallT<=0?this.runDistance+h:0,this.running?this.stamina=Math.max(0,this.stamina-t*.12):this.stamina=Math.min(1,this.stamina+t*(this.moving?.06:.13)),this.stepAcc+=h;const u=this.stride=this.crouch?.55:this.running?1.1:.78;this.fallT<=0&&this.stepAcc>u&&(this.steps=(this.steps||0)+1,this.stepAcc=0,this.footstep());const f=!this.frozen&&this.fallT<=0&&(n.has("KeyQ")||n.has("Mouse2"));if(f&&this.breathCap>.02&&!this.holding&&(this.holding=!0,this.holdT=0),this.holding?(this.holdT+=t,this.breathCap=Math.max(0,this.breathCap-t*(.085+(1-this.stamina)*.08)),this.breathCap<=0?(this.holding=!1,this.audio.gasp(),this.game.noise(this.camera.position.clone(),{radius:7,visual:4,source:"player",kind:"gasp",color:Zt.breath,strength:.7}),this.game.hint("Воздух кончился. Вдох вышел громким."),this.breathT=.8):f||(this.holding=!1,this.holdT>4&&(this.audio.breath(!0,1.4),this.game.noise(this.camera.position.clone(),{radius:2.2,visual:2,source:"player",kind:"breath",color:Zt.breath,strength:.4})),this.breathT=.6)):this.breathCap=Math.min(1,this.breathCap+t*.14),!this.holding&&!this.frozen&&(this.breathT-=t,this.breathT<=0)){this.breathOut=!this.breathOut;const Wt=1-this.stamina,Dt=1.6-Wt*1;this.breathT=Dt*(this.breathOut?1.1:.9);const I=.4+Wt*1.2;if(this.audio.breath(this.breathOut,I),this.breathOut){const T=(2.4+Wt*2.8)*(this.hidden?.5:1);this.game.noise(this.camera.position.clone(),{radius:T,visual:.9+Wt,source:"player",kind:"breath",color:Zt.breath,strength:.25+Wt*.3,speed:4})}}this.level.ceilAt(Math.floor(this.pos.x),Math.floor(this.pos.z))<1.7&&(this.crouch=!0);const m=this.hidden&&this.hidden.low?.27:this.crouch?1:1.65,x=Math.max(.25,m-this.fallK*1.36);this.eye+=(x-this.eye)*Math.min(1,t*(this.fallT>0?12:7));const g=Math.hypot(this.vel.x,this.vel.z),p=Math.min(1,g/2.3);this.bob+=t*g*3.4,this.time=(this.time||0)+t;const M=this.time,_=Math.min(1.2,this.game.fear||0),v=1-this.stamina,A=Vt,b=(Wt,Dt)=>Math.sin(Wt*1.13+Dt)*.5+Math.sin(Wt*2.71+Dt*1.7)*.3+Math.sin(Wt*4.37+Dt*2.3)*.2,y=(this.steps||0)+Math.min(1,this.stepAcc/(this.stride||.78)),E=y-Math.floor(y);this.gaitK=A.lerp(this.gaitK||0,this.moving&&!this.hidden?1:0,Math.min(1,t*5));const w=this.gaitK*A.smoothstep(g,.2,1.4),S=this.crouch?.008:this.running?.03:.006+.011*p,L=(this.crouch?.014:this.running?.024:.012+.006*p)*1.75,U=(-Math.cos(Math.PI*2*E)*.8+(2*Math.sin(Math.PI*E)-1)*.2)*S*w,R=Math.sin(y*Math.PI)*L*w;this.headV=this.headV||0,this.headY=this.headY||0,this.headV+=(-150*this.headY-15*this.headV)*t,this.headY+=this.headV*t,this.nodV=this.nodV||0,this.nod=this.nod||0,this.nodV+=(-120*this.nod-13*this.nodV)*t,this.nod+=this.nodV*t,(this.steps||0)!==this.lastStepN&&(this.lastStepN=this.steps||0,this.nodV-=this.crouch?.065:this.running?.26:.11),this.crouch!==this.wasCrouch&&(this.headV-=this.crouch?.5:-.25,this.wasCrouch=this.crouch);const k=1.7+v*2.6+_*.9,X=(.004+v*.012+_*.006)*(this.holding?.12:1),C=Math.sin(M*k)*X,B=Math.sin(M*k-.6)*X*.6;this.shake=Math.max(0,(this.shake||0)-t*2.5);const z=this.shake*this.shake,K=b(M*17,1)*.014*z,Z=b(M*19,4)*.014*z,rt=_*_*.0022+(this.holding?A.smoothstep(this.holdT,4,9)*.0028:0),Ct=b(M*13,7)*rt,qt=b(M*15,9)*rt,G=-Math.sin(this.yaw),tt=-Math.cos(this.yaw);this.camera.position.set(this.pos.x+G*B,this.eye+this.headY+C+U+Z+qt,this.pos.z+tt*B),this.camera.position.x+=G*this.fallK*.12,this.camera.position.z+=tt*this.fallK*.12;const dt=R+K+Ct;this.camera.position.x+=Math.cos(this.yaw)*dt,this.camera.position.z-=Math.sin(this.yaw)*dt,this.headOffset=this.headOffset||new D,this.headOffset.set(dt,this.headY+C+U+Z+qt,-B);let lt=this.yaw-(this.prevYaw??this.yaw);lt>Math.PI&&(lt-=Math.PI*2),lt<-Math.PI&&(lt+=Math.PI*2),this.prevYaw=this.yaw;const ct=A.clamp(lt/Math.max(t,.001),-6,6);this.turnLean=A.lerp(this.turnLean||0,ct*.008*(.5+p),Math.min(1,t*6)),this.lagV=this.lagV||0,this.lag=this.lag||0,this.lagV+=(-75*this.lag-8*this.lagV-ct*.14)*t,this.lag=A.clamp(this.lag+this.lagV*t,-.042,.042);const et=(g-(this.prevSp??g))/Math.max(t,.001);this.prevSp=g,this.accV=this.accV||0,this.accP=this.accP||0,this.accV+=(-90*this.accP-12*this.accV+A.clamp(et,-25,25)*.05)*t,this.accP+=this.accV*t,et<-12&&(this.headV-=Math.min(.15,-et*.004)*t*60);const ee=(this.running&&this.stamina<.3?(.3-this.stamina)*.05:0)*b(M*6,3);this.roll=A.lerp(this.roll||0,-s*.03*p-R*.85+b(M*3.1,11)*.006*w+this.turnLean+ee*.6+(this.listening?.075:0),Math.min(1,t*8));const Q=this.running?-.04:this.crouch&&this.moving?-.02:0;this.runPitch=A.lerp(this.runPitch||0,Q,Math.min(1,t*4));const N=.0034*(1-w)+.0026*w+_*.006,me=b(M*.45,0)*N+b(M*2.3,6)*.0045*w-U/9+this.headY*.4+this.nod-this.accP+ee+z*b(M*23,2)*.012,Qt=b(M*.37,5)*N-R*.3+this.lag;if(!this.lookTarget){const Wt=80+(this.running?6:0)-(this.holding?3:0)-(this.listening?4:0);Math.abs(this.camera.fov-Wt)>.05&&(this.camera.fov+=(Wt-this.camera.fov)*Math.min(1,t*4),this.camera.updateProjectionMatrix())}if(this.lookTarget){const Wt=new ie().lookAt(this.camera.position,this.lookTarget,new D(0,1,0)),Dt=new We().setFromRotationMatrix(Wt);this.camera.quaternion.slerp(Dt,Math.min(1,t*10))}else{const Wt=A.lerp(this.pitch+me+this.runPitch,-1.25,this.fallK);this.camera.rotation.set(this.fallT>0?A.clamp(Wt,-1.48,1.45):Wt,this.yaw+Qt,this.roll+this.fallSide*this.fallK*.12,"YXZ")}this.updateProjectiles(t)}footstep(){this.headV=(this.headV||0)-(this.crouch?.04:this.running?.17:.07);const t=this.level.floorAt(this.pos.x,this.pos.z),e=sf[t]??1,s=(this.crouch?1.1:this.running?9:3.8)*e,o=this.crouch?.15:this.running?1.3:.6;this.audio.step(t,o*Math.min(1.4,e));const r=new D(this.pos.x,.05,this.pos.z);this.game.noise(r,{radius:s,visual:Math.max(1.8,s),source:"player",kind:this.crouch?"crouch":this.running?"run":"step",color:Zt.player,strength:this.crouch?.55:.9,speed:this.running?12:9,decay:.9})}updateProjectiles(t){for(let e=this.projectiles.length-1;e>=0;e--){const n=this.projectiles[e];n.life-=t,n.vel.y-=9.8*t;const s=n.mesh,o=s.position.clone();s.position.addScaledVector(n.vel,t),s.rotation.x+=t*9,s.rotation.z+=t*7;const r=s.position,a=this.level.open(Math.floor(r.x),Math.floor(r.z)),l=a?this.level.ceilAt(Math.floor(r.x),Math.floor(r.z)):0;let c=!1;if(!a||r.y>=l?(s.position.copy(o),a?n.vel.y*=-.3:(n.vel.x*=-.35,n.vel.z*=-.35),c=!0):r.y<=.06?(r.y=.06,n.vel.y*=-.3,n.vel.x*=.5,n.vel.z*=.5,c=!0):r.y<1.4&&this.level.blockedPoint(r.x,r.z,.05)&&(s.position.copy(o),n.vel.x*=-.3,n.vel.z*=-.3,c=!0),c&&n.vel.length()>1.2){n.bounces++;const h=n.bounces===1?1:.5;this.audio.impact(s.position,h),this.game.noise(s.position.clone(),{radius:10*h,visual:10*h,source:"stone",kind:"stone",color:Zt.stone,strength:1.2*h,speed:12})}(n.life<=0||n.bounces>0&&n.vel.length()<.6)&&(s.removeFromParent(),this.projectiles.splice(e,1))}}}const Qo=Math.PI,PM=new D;function RM(){const i=at({pat:5,boost:1,wet:1,bump:1.4,tint:15257800}),t=at({pat:5,boost:2.2,wet:.6,bump:.3,tint:16773336}),e=at({kind:"line",boost:1.2,tint:16758952}),n=(y,E,w)=>new D(y,E,w),s=(y,E,{pos:w=[0,0,0],rot:S=[0,0,0],scale:L=[1,1,1],bone:U=!1,edges:R=40}={})=>{const k=new Ge(y,U?t:i);if(k.position.set(...w),k.rotation.set(...S),k.scale.set(...L),R){const X=new Oh(y,R);k.add(new ka(X,e)),k.add(xd(X,{tint:16758952,boost:1.2,size:2}))}return E.add(k),k},o=(y,E)=>{const w=new Te;return w.position.set(...E),y.add(w),w},r=(y,E=.005,w=14)=>{const S=Gi(y.x*w,y.y*w,y.z*w,3)*E;y.x+=S,y.z+=S*.7},a=(y,E,w,S,L,U)=>{const R=new Ls(.0055,U,7);L||R.rotateX(Math.PI),R.translate(0,L?U/2:-U/2,0),s(R,y,{pos:[E,w,S],rot:[(Math.random()-.5)*.4+(L?-.15:.15),0,(Math.random()-.5)*.4],bone:!0,edges:30})},l=new Te,c=o(l,[0,1.15,0]);s(Vn(Ii(.16,24,16),y=>{y.x*=1.35,y.y*=.75,y.z*=.9,Math.abs(y.x)>.13&&y.y>0&&(y.y+=.03),r(y,.006)}),c);const h=o(c,[0,.05,0]);h.rotation.x=.55;const u=[[.001,-.02],[.14,0],[.145,.08],[.125,.2],[.115,.3],[.13,.4],[.18,.52],[.21,.64],[.225,.74],[.21,.84],[.16,.92],[.07,.97],[.001,.98]],f=u.map(([y,E])=>new mt(y,E));s(Vn(new Er(f,40),y=>{y.x*=1.3,y.z*=.78;const E=Math.hypot(y.x,y.z)||1,w=y.x/E,S=y.z/E;if(y.y>.42&&y.y<.87&&S>-.35){const L=(Math.pow(Math.max(0,Math.sin((y.y-.42)*Math.PI*2*15.5+Math.abs(w)*2.2)),2)*.036-.01)*Math.min(1,(S+.35)*3);y.x+=w*L,y.z+=S*L,Math.abs(y.x)<.035&&S>0&&(y.z-=.012)}if(y.y>.1&&y.y<.4&&S>0&&(y.z-=.035*S*Math.sin((y.y-.1)/.3*Math.PI)),S<0&&Math.abs(y.x)<.04&&(y.z-=.024*Math.pow(Math.max(0,Math.sin(y.y*Math.PI*2*13)),2)*(1-Math.abs(y.x)/.04)),S<0&&y.y>.58&&y.y<.84){const L=Math.abs(y.x);L>.05&&L<.17&&(y.z-=.028*Math.sin((L-.05)/.12*Math.PI)*Math.sin((y.y-.58)/.26*Math.PI))}r(y,.006)}),h);const d=y=>{for(let E=0;E<u.length-1;E++)if(y<=u[E+1][1]){const w=(y-u[E][1])/(u[E+1][1]-u[E][1]);return u[E][0]+(u[E+1][0]-u[E][0])*w}return .05};for(let y=0;y<10;y++){const E=.12+y*.08,w=.04+Math.sin(y/9*Math.PI)*.06,S=new Ls(.012,w,7);S.translate(0,w/2,0),s(S,h,{pos:[0,E,-d(E)*.78+.01],rot:[-1.9,0,0],bone:!0,edges:30})}for(const y of[-1,1])s(gn([n(.02*y,.9,.08),n(.15*y,.9,.06),n(.27*y,.86,-.01)],.014,{radial:8,tubular:8}),h);const m=o(h,[0,.88,0]),x=o(m,[0,.05,.05]);x.rotation.x=.6,s(gn([n(0,-.02,0),n(0,.2,.02),n(0,.44,0)],[.075,.05,.046,.055],{radial:16,tubular:16,noise:.006,noiseScale:20}),x);for(const y of[-1,1])s(gn([n(.035*y,-.02,.05),n(.04*y,.22,.05),n(.03*y,.42,.02)],.011,{radial:6,tubular:10}),x);for(let y=0;y<5;y++)s(Ii(.018,8,6),x,{pos:[0,.04+y*.085,-.045],scale:[1,.7,1]});const g=o(x,[0,.44,0]);g.rotation.x=-.9;const p=new Tr({color:0}),M=(y,E,w,S=[1,1,1])=>{const L=new Ge(y,p);L.position.set(...w),L.scale.set(...S),E.add(L)};s(Vn(Ii(.145,48,36),y=>{y.z*=1.22,y.z<0&&(y.y+=-y.z*.14),y.y<0&&(y.x*=.8+y.y*.6),y.z>.04&&(y.x*=1-(y.z-.04)*.9),y.z+=.022*Math.exp(-(((y.y-.06)/.018)**2))*Math.max(0,y.z/.17);for(const w of[-.05,.05]){const S=Math.hypot((y.x-w)*.9,y.y-.025);y.z>.04&&(y.z-=.075*Math.exp(-((S/.03)**2)))}for(const w of[-.075,.075]){const S=Math.hypot(y.x-w,y.y+.005);y.x+=Math.sign(w)*.012*Math.exp(-((S/.02)**2));const L=Math.hypot(y.x-w*.9,y.y+.06);y.x-=Math.sign(w)*.03*Math.exp(-((L/.035)**2))}y.y<-.035&&y.z>.02&&(y.z-=.06*Math.min(1,(-.035-y.y)/.04));const E=Math.hypot(y.x*1.4,y.y+.012);y.z>.1&&(y.z-=.035*Math.exp(-((E/.016)**2))),r(y,.006,26)}),g,{pos:[0,.05,.06]});for(const y of[-.05,.05])M(new dn(.026,14,10),g,[y,.074,.165],[1,.85,.6]);M(new dn(.014,10,8),g,[0,.04,.215],[1,1.3,.6]),M(new dn(.075,16,12),g,[0,-.06,.1],[.85,.7,1.1]);for(const y of[-1,1]){const E=o(g,[.118*y,.055,0]);E.rotation.set(.2,y*1.35,0),s(Vn(new Fo(.048,.011,8,28,Math.PI*1.55),w=>r(w,.004,30)),E,{rot:[0,0,y>0?-.6:.6+Math.PI*.45],scale:[1,1.5,.55]}),s(Vn(Ii(.035,14,10),w=>{w.z*=.25,r(w,.004,30)}),E,{pos:[0,-.01,-.004]})}const _=(y,E,w,S,L=1.15)=>Array.from({length:S},(U,R)=>{const k=-L+2*L*R/(S-1);return n(Math.sin(k)*y,w,E+Math.cos(k)*y*1.4)});s(gn(_(.062,.03,-.06,9),.013,{radial:8,tubular:20}),g);for(const y of _(.066,.03,-.068,17))a(g,y.x,y.y,y.z,!1,.04+Math.random()*.06);const v=o(g,[0,-.06,.05]);v.rotation.x=.35,s(gn(_(.066,-.02,-.01,9),[.024,.02,.024],{radial:10,tubular:24}),v),s(Vn(Ii(.06,18,10),y=>{y.y*=.3,y.z*=1.35,r(y,.003,30)}),v,{pos:[0,-.016,.06]});for(const y of _(.064,-.02,0,16))a(v,y.x,y.y,y.z,!0,.035+Math.random()*.05);M(new dn(.06,14,10),v,[0,.01,.05],[.9,.5,1.2]),s(gn([n(0,-.005,0),n(0,-.01,.12),n(.015,-.07,.2),n(.03,-.17,.21),n(.025,-.24,.19)],[.026,.02,.014,.009,.004],{radial:10,tubular:24,flat:.45}),v);for(const y of[-1,1])s(gn([n(.055*y,-.01,.02),n(.058*y,-.1,.03),n(.057*y,-.19,.025)],[.004,.002,.005],{radial:5,tubular:8}),v,{edges:0});const A=[];for(const y of[-1,1]){const E=o(m,[y*.29,-.05,0]);s(Vn(Ii(.065,16,12),R=>r(R,.006)),E);const w=o(E,[0,0,0]);s(gn([n(0,0,0),n(.01*y,-.37,.01),n(0,-.76,0)],[.056,.04,.031,.034,.045],{radial:14,tubular:18,noise:.006,noiseScale:16,seed:y}),w);const S=o(w,[0,-.75,0]);s(Vn(Ii(.045,12,10),R=>r(R,.006)),S),s(gn([n(0,0,0),n(0,-.4,.012),n(0,-.82,0)],[.042,.036,.029,.023,.026],{radial:14,tubular:18,flat:.75,noise:.005,noiseScale:18,seed:y+3}),S);const L=new Ls(.014,.13,8);L.translate(0,.065,0),s(L,S,{pos:[0,0,-.03],rot:[-2.3,0,0],bone:!0,edges:30});const U=o(S,[0,-.82,0]);s(Vn(Ii(.05,16,12),R=>{R.y*=1.3,R.z*=.42,R.y-=.035,r(R,.004,25)}),U);for(let R=0;R<5;R++){const k=R===4,X=k?y*-.045:(R-1.5)*.024,C=k?.6:1-Math.abs(R-1.5)*.12,B=k?[n(X,-.04,.015),n(X*1.3,-.1,.04),n(X*1.2,-.17,.07)]:[n(X,-.085,0),n(X*1.05,-.085-.13*C,.025),n(X*1.1,-.085-.26*C,.07),n(X*1.1,-.085-.36*C,.12)];s(gn(B,[.012,.013,.0095,.011,.008,.0065],{radial:8,tubular:14}),U);const z=B[B.length-1],K=B[B.length-2],Z=z.clone().sub(K).normalize(),rt=new Ls(.0065,.075,7);rt.translate(0,.0375,0),rt.applyQuaternion(new We().setFromUnitVectors(n(0,1,0),Z.add(n(0,0,.3)).normalize())),rt.translate(z.x,z.y,z.z),s(rt,U,{bone:!0,edges:30})}A.push({sh:E,upper:w,fore:S,hand:U,s:y})}const b=[];for(const y of[-1,1]){const E=o(c,[y*.16,-.05,0]),w=o(E,[0,0,0]);s(gn([n(0,.02,0),n(0,-.3,.015),n(0,-.61,0)],[.085,.068,.05,.058],{radial:16,tubular:16,noise:.007,noiseScale:14,seed:y*7}),w);const S=o(w,[0,-.6,0]);s(Vn(Ii(.055,14,10),U=>r(U,.006)),S,{pos:[0,0,.012]}),s(gn([n(0,0,0),n(0,-.28,-.012),n(0,-.56,0)],[.05,.042,.032,.03],{radial:14,tubular:16,noise:.005,noiseScale:16,seed:y*9}),S);const L=o(S,[0,-.55,0]);s(gn([n(0,.01,-.04),n(0,-.015,.08),n(0,-.03,.17)],[.036,.03,.022],{radial:12,tubular:12,flat:.55}),L);for(let U=0;U<3;U++){const R=(U-1)*.022,k=[n(R,-.025,.15),n(R*1.3,-.035,.22),n(R*1.5,-.04,.27)];s(gn(k,[.011,.01,.007],{radial:7,tubular:8}),L);const X=new Ls(.006,.05,6);X.rotateX(Math.PI/2+.5),X.translate(R*1.5,-.045,.29),s(X,L,{bone:!0,edges:30})}b.push({hip:E,thigh:w,shin:S,foot:L,s:y})}return l.scale.setScalar(1.12),{root:l,hips:c,spine:h,chest:m,neck:x,head:g,jaw:v,arms:A,legs:b,mats:[i,t,e]}}class DM{constructor(t,e,n){this.level=e,this.audio=n,this.body=RM(),this.obj=this.body.root,this.obj.visible=!1,t.add(this.obj),this.pos=new D,this.yaw=0,this.state="dormant",this.path=null,this.target=null,this.speed=0,this.phase=0,this.stepAcc=0,this.suspicion=0,this.stateT=0,this.breathT=0,this.inhale=!1,this.twitch=0,this.idleT=0,this.sniffCd=0,this.voice=null,this.lunge=null,this.onKill=null,this.forcedTarget=null,this.headWorld=new D,this.clock=0,this.assist={hear:1,speed:1}}get active(){return this.state!=="dormant"}spawn(t,e="wander"){this.pos.copy(t),this.pos.y=0,this.obj.visible=!0,this.state=e,this.path=null,this.suspicion=0,this.stateT=0,this.lunge=null,this.afterSniff=null,this.checkList=null,this.sniffCd=0,this.curSpeed=0,this.scare=null,this.bashing=null,this.body.mats[0].uniforms.uLit.value=0,this.body.mats[1].uniforms.uLit.value=0,!this.voice&&this.audio.ctx&&(this.voice=this.audio.createMonsterVoice())}despawn(){this.state="dormant",this.obj.visible=!1,this.voice&&this.voice.silence()}goTo(t,e){this.target=t.clone(),this.path=this.level.findPath(this.pos,this.target),this.path&&this.path.shift(),this.setState(e)}setState(t){this.state!==t&&(this.state=t,this.stateT=0,t==="search"&&(this.idleT=0))}hear(t,e,n,s,o){if(!this.active||this.state==="kill"||this.state==="lunge"||this.state==="windup"||this.state==="scripted")return!1;const r=PM.set(t.x-this.pos.x,0,t.z-this.pos.z).length(),a=this.level.occlusion(this.pos,t),l=e*(1.15-a*.5)*this.assist.hear;if(r>l)return!1;const c=1-r/l,h=o?Math.hypot(o.x-this.pos.x,o.z-this.pos.z):99;if(n==="player"){const m={step:.35,run:.7,click:.5,breath:.6,gasp:1.2,fall:1.2,crouch:.25,door:.6,item:.3}[s]??.4;if(this.suspicion=Math.min(1.5,this.suspicion+m*(.5+c)),this.state==="recover")return!0;if(h<3.4){const x=this.state==="sniff"&&this.stateT<1.4;return this.suspicion>.62&&!x?this.startWindup(o):this.state!=="sniff"&&this.startSniff(!0),!0}}if(this.state==="recover")return!0;if(n==="player"&&h<11&&this.suspicion>.5&&["run","step","click","door","gasp","fall"].includes(s)&&this.state!=="chase")return this.startChase(),!0;if(this.state==="chase"||(this.state==="check"||this.state==="sniff"&&this.afterSniff==="check")&&n==="player"&&["breath","crouch","item","step"].includes(s))return!0;if(this.state==="ambush"&&e<9&&h>3.4)return this.turnTowards(t,.6),!0;if(n==="stone"&&o){const m=this.clock;if(this.lures=(this.lures||[]).filter(x=>m-x<70),this.lures.push(m),this.lures.length>=3){const x=o.clone().add(new D((Math.random()-.5)*3,0,(Math.random()-.5)*3));return this.goTo(x,"investigate"),this.suspicion=Math.max(this.suspicion,.45),this.onWise&&this.onWise(),!0}}const u=(1-c)*Math.min(3,r*.15),f=t.clone().add(new D((Math.random()-.5)*u,0,(Math.random()-.5)*u)),d=e>=9||this.suspicion>.55||n==="stone";return this.goTo(f,d?"hunt":"investigate"),d&&Math.random()<.35&&this.audio.monsterRoar(this.headWorld),!0}startSniff(t=!1){if(this.state==="sniff"&&!t)return;const e=performance.now();(!this.lastSting||e-this.lastSting>25e3)&&(this.lastSting=e,this.audio.stinger("mid",.45)),this.state="sniff",this.stateT=0,this.path=null,this.sniffCd=8,this.doSniff()}stalk(t=40){!this.active||this.state==="chase"||this.state==="kill"||(this.setState("stalk"),this.stalkT=t,this.stalkWait=0,this.path=null)}ambush(t){!this.active||this.state==="chase"||this.state==="kill"||(this.ambushAt=t.clone(),this.ambushT=32,this.goTo(t,"ambushGo"))}checkSpots(t){this.checkList=t.slice(),this.nextCheck()}nextCheck(){const t=this.checkList&&this.checkList.shift();if(!t){this.afterSniff=null;const n=this.level.randomWalkable(this.pos,16,9);n?this.goTo(n,"investigate"):this.setState("search"),this.idleT=0;return}const e=new D(t.front.x-t.inside.x,0,t.front.z-t.inside.z).normalize();this.goTo(t.front.clone().addScaledVector(e,.35),"check")}startChase(){this.state==="chase"||this.state==="kill"||(this.setState("chase"),this.chaseT=0,this.lostT=0,this.repathT=0,this.audio.monsterRoar(this.headWorld),this.audio.stinger("low",.8),be.emit(this.headWorld,{radius:9,speed:12,strength:1.2,decay:.7,color:Zt.monster}),this.onChase&&this.onChase(!0))}endChase(t){this.target=t?t.clone():this.pos.clone(),this.path=this.level.findPath(this.pos,this.target),this.path&&this.path.shift(),this.setState("search");const e=this.target,n=this.level.items.filter(s=>s.type==="locker"&&Math.hypot(s.front.x-e.x,s.front.z-e.z)<7).sort((s,o)=>Math.hypot(s.front.x-e.x,s.front.z-e.z)-Math.hypot(o.front.x-e.x,o.front.z-e.z)).slice(0,2);n.length&&this.checkSpots(n),this.audio.play("m_growl",this.headWorld,{gain:.9,rate:.7,wet:.8}),this.onChase&&this.onChase(!1)}startWindup(t){this.setState("windup"),this.lunge={target:t.clone(),t:0,dir:new D},this.lunge.dir.set(t.x-this.pos.x,0,t.z-this.pos.z).normalize(),this.yaw=Math.atan2(this.lunge.dir.x,this.lunge.dir.z),this.audio.monsterHiss(this.headWorld,1.1),be.emit(this.headWorld,{radius:3.5,speed:6,strength:1.4,decay:.6,color:Zt.monster})}update(t,e,n){if(!this.active)return;this.clock+=t,this.stateT+=t,this.suspicion=Math.max(0,this.suspicion-t*(this.state==="hunt"?.04:.09)),this.state!=="sniff"&&(this.sniffCd-=t);const s=e.pos,o=Math.hypot(s.x-this.pos.x,s.z-this.pos.z);switch(this.state){case"wander":{if(this.speed=1.05*this.assist.speed,!this.path||!this.path.length)if(this.idleT>0)this.idleT-=t,this.speed=0;else{const r=this.forcedTarget?this.level.randomWalkable(this.forcedTarget,6):Math.random()<.22?this.level.randomWalkable(s,18,8):this.level.randomWalkable(this.pos,18,6);r&&(this.target=r,this.path=this.level.findPath(this.pos,r),this.path&&this.path.shift()),Math.random()<.55&&(this.idleT=3+Math.random()*4)}this.proximitySniff(o,e);break}case"investigate":this.speed=1.6*this.assist.speed,(!this.path||!this.path.length)&&this.setState("search"),this.proximitySniff(o,e);break;case"hunt":this.speed=3.1*this.assist.speed,(!this.path||!this.path.length)&&(e.hidden&&o<3?this.startSniff(!0):this.setState("search")),o<1.6&&(this.suspicion>.9?this.startWindup(e.pos):this.startSniff(!0));break;case"scripted":this.speed=this.ramming?0:this.scriptSpeed||0;break;case"stalk":{if(this.speed=1.25*this.assist.speed,this.stalkT-=t,this.stalkT<=0){const r=this.level.randomWalkable(this.pos,24,14);r?this.goTo(r,"wander"):this.setState("wander");break}if(!this.path||!this.path.length){if(this.speed=0,this.turnTowards(s,t*.8),this.stalkWait-=t,this.stalkWait<=0){let r=null;for(let a=0;a<24&&!r;a++){const l=this.level.randomWalkable(s,10.5,5.5);if(!l)continue;(this.level.occlusion(s,l)>.35||e.hidden||a>18)&&(r=l)}r&&(this.path=this.level.findPath(this.pos,r),this.path&&this.path.shift()),this.stalkWait=2.5+Math.random()*3.5}this.cueT=(this.cueT??4)-t,this.cueT<=0&&(this.cueT=6+Math.random()*5,this.audio.play("m_breath",this.headWorld,{gain:.55,rate:.8+Math.random()*.15,wet:.6}))}this.proximitySniff(o,e);break}case"ambushGo":this.speed=2*this.assist.speed,(!this.path||!this.path.length)&&(this.setState("ambush"),this.turnTowards(s,Qo));break;case"ambush":if(this.speed=0,this.ambushT-=t,this.turnTowards(s,t*.4),o<3.3&&!e.hidden){this.audio.stinger("high",1),this.startChase();break}this.ambushT<=0&&this.setState("wander");break;case"check":this.speed=2.4*this.assist.speed,(!this.path||!this.path.length)&&(this.afterSniff="check",this.startSniff(!0));break;case"chase":{this.speed=3.4*this.assist.speed,this.chaseT+=t,this.repathT-=t;const r=!e.hidden&&this.level.ceilAt(Math.floor(s.x),Math.floor(s.z))>=1.7;if(r&&(this.lastSeen=s.clone()),this.repathT<=0&&r&&(this.repathT=.35,this.path=this.level.findPath(this.pos,s),this.path&&this.path.shift()),!r||o>15?this.lostT+=t:this.lostT=Math.max(0,this.lostT-t),this.lostT>(r?2.5:.6)||this.chaseT>24||!this.path&&r){this.endChase(this.lastSeen);break}o<1.45&&r&&(this.startWindup(s),this.lunge.fast=!0,this.onChase&&this.onChase(!1));break}case"search":{if(this.speed=.75,!this.path||!this.path.length)if(this.idleT>0)this.idleT-=t,this.speed=0;else{const r=this.level.randomWalkable(this.target||this.pos,3.5,1);r&&(this.path=this.level.findPath(this.pos,r),this.path&&this.path.shift()),this.idleT=1+Math.random()*2.5,Math.random()<.5&&this.doSniff()}this.stateT>7+Math.random()*2.5&&this.setState("wander"),this.proximitySniff(o,e);break}case"sniff":if(this.speed=0,this.turnTowards(s,t*1.2),o>1.2&&this.stateT<3){const r=.3*t/o;this.pos.x+=(s.x-this.pos.x)*r,this.pos.z+=(s.z-this.pos.z)*r}if(e.hidden&&o<2.2&&this.stateT>1.4&&!e.holding&&(this.suspicion+=t*1,this.suspicion>.95)){this.startWindup(s);break}if(this.stateT>2.3&&this.afterSniff==="check"){this.nextCheck();break}if(this.stateT>3.6){const r=s.x-this.pos.x,a=s.z-this.pos.z;let l=null;for(let c=0;c<30&&!l;c++){const h=this.level.randomWalkable(this.pos,14,5);h&&(h.x-this.pos.x)*r+(h.z-this.pos.z)*a<-.3*h.distanceTo(this.pos)*o&&(l=h)}l=l||this.level.randomWalkable(this.pos,12,6),l&&this.goTo(l,"investigate")}break;case"windup":this.speed=0,this.stateT>(this.lunge&&this.lunge.fast?.25:.45)&&(this.setState("lunge"),this.lunge.t=0,this.audio.monsterRoar(this.headWorld));break;case"lunge":{const r=9*t,a=this.pos.clone().addScaledVector(this.lunge.dir,r),l=a.clone();this.level.collide(a,.3),this.pos.copy(a),this.lunge.t+=t;const c=Math.hypot(s.x-this.pos.x,s.z-this.pos.z);if(c<.85||e.hidden&&c<1.7){this.kill(e);break}(this.lunge.t>.5||l.distanceTo(a)>.05)&&(this.setState("recover"),this.suspicion=.3,this.audio.monsterStep(this.pos,2),be.emit(this.pos,{radius:6,speed:10,strength:1.2,color:Zt.monster}));break}case"recover":this.speed=0,this.stateT>2.4&&(this.target=this.pos.clone(),this.setState("search"));break;case"kill":this.speed=0;break}this.state!=="lunge"&&this.move(t),this.animate(t,e),this.sounds(t,o,e),this.voice&&this.voice.setPos(this.headWorld)}proximitySniff(t,e){t<1.9&&this.state!=="sniff"&&this.sniffCd<=0&&(this.startSniff(),this.suspicion+=.2),t<.8&&this.state!=="sniff"&&(this.suspicion+=.5,this.suspicion>.62?this.startWindup(e.pos):this.startSniff(!0))}doSniff(){this.audio.monsterSniff(this.headWorld),this.twitch=1}turnTowards(t,e){let s=Math.atan2(t.x-this.pos.x,t.z-this.pos.z)-this.yaw;for(;s>Qo;)s-=2*Qo;for(;s<-Qo;)s+=2*Qo;this.yaw+=Math.max(-e,Math.min(e,s))}move(t){if(this.bashing){if(this.curSpeed=0,this.bashT-=t,this.bashT<=0){this.bashT=.85;const a=this.level.bashDoor(this.bashing);this.audio.play("slam",this.bashing.center,{gain:1.1,rate:.75+Math.random()*.2,wet:.8}),be.emit(this.bashing.center,{radius:6,speed:11,strength:1.2,color:Zt.monster}),this.onBash&&this.onBash(this.bashing),a&&(this.bashing=null)}return}if(this.speed>0&&this.level.slamDoorAhead){const a=this.level.slamDoorAhead(this.pos,this.path&&this.path[0]);if(a){this.bashing=a,this.bashT=.35;return}}if(!this.path||!this.path.length||this.speed<=0){this.curSpeed=Vt.lerp(this.curSpeed||0,0,t*6);return}const e=this.path[0],n=e.x-this.pos.x,s=e.z-this.pos.z,o=Math.hypot(n,s);if(o<.25){this.path.shift();return}this.turnTowards(e,t*5),this.curSpeed=Vt.lerp(this.curSpeed||0,this.speed,t*3);const r=Math.min(o,this.curSpeed*t);this.pos.x+=n/o*r,this.pos.z+=s/o*r,this.keepClear()}keepClear(){this.level.collide(this.pos,.3)}sounds(t,e,n){const s=this.curSpeed||0;if(s>.1&&this.state!=="lunge"){this.stepAcc+=s*t;const l=this.state==="hunt"||this.state==="chase"?1.25:.95;if(this.stepAcc>l){this.stepAcc=0;const c=this.state==="stalk"||this.state==="ambushGo"||this.state==="check",h=this.state==="hunt"||this.state==="chase"?1.6:c?.4:.8;if(this.audio.monsterStep(this.pos,h),n){const u=Math.hypot(n.pos.x-this.pos.x,n.pos.z-this.pos.z);n.shake=Math.max(n.shake||0,Math.max(0,1-u/8)*(this.state==="hunt"||this.state==="chase"?1:.6))}be.emit(new D(this.pos.x,.1,this.pos.z),{radius:this.state==="hunt"||this.state==="chase"?6.5:c?2.4:4.2,speed:8,strength:this.state==="hunt"||this.state==="chase"?1.1:.8,decay:1,color:Zt.monster})}}const o=this.state==="hunt"||this.state==="windup"||this.state==="chase",r=o?1:this.state==="sniff"||this.state==="search"?.7:.45;this.breathT-=t;const a=this.state==="ambush";this.breathT<=0&&this.voice&&!a&&(this.inhale=!this.inhale,this.voice.breathe(this.inhale,r),this.breathT=o?this.inhale?.7:.85:(this.inhale?1.3:1.9)+Math.random()*.7),this.croakT=(this.croakT??4)-t,this.croakT<=0&&this.voice&&this.state!=="windup"&&this.state!=="kill"&&!a&&this.state!=="stalk"&&(this.croakT=o?2.5+Math.random()*2:5+Math.random()*7,this.voice.croak(this.state==="sniff"?.4:r)),(this.state==="search"||this.state==="wander")&&Math.random()<t*.05&&(this.audio.monsterClick(this.headWorld),be.emit(this.headWorld,{radius:9,speed:7,strength:.7,decay:.9,color:Zt.monster}))}kill(t){if(this.state==="kill")return;this.setState("kill"),this.path=null;const e=new D(t.pos.x-this.pos.x,0,t.pos.z-this.pos.z).normalize();this.yaw=Math.atan2(e.x,e.z),this.pos.set(t.pos.x-e.x*.75,0,t.pos.z-e.z*.75),this.onKill&&this.onKill()}startScare(t){this.setState("kill"),this.path=null;const e=new D;t.getWorldDirection(e),e.y=0,e.normalize(),this.scare={t:0,cam:t.position.clone(),f:e},this.yaw=Math.atan2(-e.x,-e.z)}animate(t,e){const n=this.body,s=this.curSpeed||0;this.phase+=t*s*3;const o=performance.now()/1e3,r=this.state==="kill";r&&this.scare&&(this.scare.t+=t),this.obj.position.copy(this.pos),this.obj.rotation.y=this.yaw;{let b=9;for(const S of[0,.6,1.2]){const L=this.level.ceilAt(Math.floor(this.pos.x+Math.sin(this.yaw)*S),Math.floor(this.pos.z+Math.cos(this.yaw)*S));L>0&&(b=Math.min(b,L))}const y=this.level.clearance?this.level.clearance(this.pos.x,this.pos.z):1;this.lowAhead=b<1.7;const E=r?1:b<1.7?.66:Vt.clamp((b-.1)/2.65,.8,1);this.fitS=Vt.lerp(this.fitS??E,E,Math.min(1,t*(E<this.fitS?6:2))),this.tuckK=Vt.lerp(this.tuckK||0,r?0:Vt.clamp((.95-y)/.4,0,1),Math.min(1,t*4));const w=this.fitS*(1-this.tuckK*.18);this.obj.scale.set(w,this.fitS,this.fitS)}if(this.snapT=(this.snapT??0)-t,this.snapT>0&&!r){this.obj.updateMatrixWorld(!0),n.head.getWorldPosition(this.headWorld);return}this.snapT=(.05+Math.random()*.09)*(this.state==="hunt"?.6:1);const a=this.phase,l=Math.min(1,s/1.4);this.twitchT=(this.twitchT??2)-.08,this.twitchT<=0&&(this.twitchT=8+Math.random()*30,this.twitch=1,this.twY=(Math.random()-.5)*1.4,this.twZ=(Math.random()-.5)*1.6),this.twitch=Math.max(0,(this.twitch||0)-.12);const c=this.twitch>.5?1:0;let h=1.08+Math.abs(Math.cos(a))*.05*l,u=.55,f=.6,d=-.9,m=0,x=0,g=.35,p=b=>({ux:Math.sin(a+b*Math.PI+Math.PI)*.4*l,uz:.15,fx:-.3-.3*l,hx:0}),M=b=>({tx:-Math.sin(a+b*Math.PI)*.55*l-.25,sx:Math.max(0,Math.cos(a+b*Math.PI))*.9*l+.45});const _=!!this.lowAhead,v=(this.state==="hunt"||this.state==="investigate"||this.state==="chase"||this.state==="scripted")&&s>1.4||_;if(this.crawling=v,r)u=.3,f=.7,d=-2.05,g=1.45+Math.sin(o*60)*.08,m=(Math.random()-.5)*.5,x=(Math.random()-.5)*.5,h=1,p=()=>({ux:-2.3+(Math.random()-.5)*.2,uz:.65,fx:-.6,hx:.6}),M=()=>({tx:-.5,sx:.8});else if(v&&_)h=.5+Math.abs(Math.sin(a))*.03,u=1.5,f=-.12,d=-1.25,m=Math.sin(o*9)*.12,g=.6+Math.sin(o*21)*.1,p=b=>({ux:-2.75+Math.sin(a+b*Math.PI)*.3,uz:.55,fx:2.3-Math.max(0,Math.cos(a+b*Math.PI))*.4,hx:1}),M=b=>({tx:-1.35-Math.sin(a+b*Math.PI+.6)*.25,sx:2.25+Math.max(0,-Math.cos(a+b*Math.PI))*.2});else if(v)h=.86+Math.abs(Math.sin(a))*.08,u=1.35,f=-.45,d=-.7,m=Math.sin(o*13)*.15,g=.7+Math.sin(o*25)*.1,p=b=>({ux:-2.5+Math.sin(a+b*Math.PI)*.38,uz:.22,fx:1.9-Math.max(0,Math.cos(a+b*Math.PI))*.4,hx:.8}),M=b=>({tx:-.9-Math.sin(a+b*Math.PI+.6)*.35,sx:1.5+Math.max(0,-Math.cos(a+b*Math.PI))*.3});else if(this.state==="sniff"||this.state==="search"&&s<.1)u=.85,f=.95+Math.sin(o*2.3)*.1,d=-1,m=Math.sin(o*1.1)*.5,x=.95*Math.sign(Math.sin(o*.37)+.3),g=.3+Math.min(.7,this.stateT*.2);else if(this.ramming){const b=Math.max(0,Math.sin(o*6));u=.5+b*.6,f=.2,d=-.6,g=1,h=1-b*.15,p=()=>({ux:-2.2+b*.6,uz:.4,fx:-.6,hx:.5})}else this.state==="windup"?(u=.25,f=.35,d=-1.25,g=1.2,m=(Math.random()-.5)*.12,p=()=>({ux:-1.6,uz:.65,fx:-1.1,hx:.5})):this.state==="lunge"?(u=.9,f=.3,d=-.3,g=1.2,p=()=>({ux:-1.5,uz:.15,fx:-.2,hx:.3})):this.state==="recover"?(u=1,f=.4,m=Math.sin(o*5)*.5,x=Math.sin(o*3.1)*.6):m=Math.sin(o*.7)*.25;if(c&&!r&&(m+=this.twY,x+=this.twZ),!r&&!_){const b=Math.sin(this.yaw),y=Math.cos(this.yaw),E=(v?1.75:1.3)*this.fitS;let w=E;for(let L=.3;L<=E;L+=.1){const U=this.pos.x+b*L,R=this.pos.z+y*L;if(!this.level.open(Math.floor(U),Math.floor(R))||this.level.blockedPoint(U,R,.1)){w=L;break}}const S=Vt.clamp((w-.45)/(E-.45),0,1);this.rearK=Vt.lerp(this.rearK??1,S,.35),u=Vt.lerp(.12,u,this.rearK),f=Vt.lerp(.35,f,this.rearK),v&&(h=Vt.lerp(1.05,h,this.rearK))}const A=this.tuckK||0;if(A>.01&&!r){const b=p;p=y=>{const E=b(y);return{ux:E.ux*(1-A*.35),uz:Vt.lerp(E.uz,-.06,A),fx:E.fx,hx:E.hx}}}if(n.hips.position.y=h,n.spine.rotation.x=u,n.neck.rotation.x=f,n.head.rotation.set(d,m,x),n.jaw.rotation.x=g,n.arms.forEach((b,y)=>{const E=p(y);b.upper.rotation.x=E.ux,b.upper.rotation.z=b.s*E.uz,b.fore.rotation.x=E.fx,b.hand.rotation.x=E.hx+Math.sin(o*3+y)*.1}),n.legs.forEach((b,y)=>{const E=M(y);b.thigh.rotation.x=E.tx,b.shin.rotation.x=E.sx,b.foot.rotation.x=-.2}),this.obj.updateMatrixWorld(!0),n.head.getWorldPosition(this.headWorld),r&&this.scare){this.mouthWorld=this.mouthWorld||new D;const b=this.scare,y=Vt.lerp(1.9,.6,Math.min(1,b.t/.16));for(let E=0;E<2;E++)this.pos.x+=b.cam.x+b.f.x*y-this.headWorld.x,this.pos.z+=b.cam.z+b.f.z*y-this.headWorld.z,n.hips.position.y+=(b.cam.y+.08-this.headWorld.y)/1.12,this.obj.position.copy(this.pos),this.obj.updateMatrixWorld(!0),n.head.lookAt(b.cam.x,b.cam.y-.12,b.cam.z),n.head.rotateZ((Math.random()-.5)*.35),n.head.rotateX((Math.random()-.5)*.15),n.head.updateMatrixWorld(!0),n.head.getWorldPosition(this.headWorld);n.jaw.getWorldPosition(this.mouthWorld),this.mouthWorld.lerp(this.headWorld,.5)}}}const LM=["Красноярский край, 1987. Объект «Камертон», горизонт −7.","Сюда брали за слух. Ты слеп с рождения и слышишь лучше любого прибора.","Восемь лет ты сидел в безэховой камере и записывал, что слышно в тишине.","Позавчера тебе поставили «ЭХО»: звук теперь ложится на темноту контуром.","Ночью станция замолчала.","Не вся."],ph=[{title:"Лист наблюдения",body:`Ш-в Л. А., 41 г., оператор акустического контроля.

Имплант «ЭХО-3», вторые сутки. Отёк спадает. Видит то, что звучит или отражает звук. В тишине не видит ничего — так и задумано.

Рекомендовано: щелчок языком перед шагом. Короткий звук — маленький мир. Громкий звук — большой мир. Объяснили. Понял.

Жалуется на «лишнее эхо» после щелчка: позже на полсекунды, тише, с другой стороны. Записано как остаточный шум.

— дежурная м/с Гаранина

(карандашом) Лев Аркадьевич просил радио. Не положено. Я ему напела.`},{title:"Распоряжение № 14-с",body:`ПРИ ОТКЛЮЧЕНИИ ОСНОВНОГО ПИТАНИЯ

1. Лифтовый ствол запитан от резервного дизель-генератора (генераторная, север от атриума).
2. Для пуска установить два предохранителя ПН-2. Запасные: шкаф на дальней стене архива (запад) и бокс № 2 безэхового блока (восток, вход по карте).
3. Карта доступа — у ст. инженера Ореховой В. С., кабинет 9, за затопленным переходом.
4. Лифт поднимается с горизонта −9 около двух минут. Холл оборудован заслонками. Питание общее.

Нач. смены ____________ (не подписано)

На обороте, другим почерком:
«Генератор — девяносто децибел. Вы понимаете, кто это услышит».`},{title:"Журнал приёма",body:`Санитар Мельник.

02:40 — Ахмеров, слесарь. Ладони прижаты ко рту, свело так, что не разжать.
03:15 — Горелик, лаборант. То же.
03:50 — личность не установлена. То же.

Они все умерли молча. Думаю, не дышали, пока оно стояло рядом. А потом не выдержали.

Сейчас слышу, как оно дышит за дверью. Когда я задерживаю дыхание — оно тоже. Мы ждём, кто первый.

Выдыхать — когда отойдёт. Не раньше.`},{title:"Тема «Нулевой отзвук». Отчёт за III квартал",body:`В безэховой камере (фон ниже −9 дБ) операторы отмечают устойчивое «второе эхо»: собственный пульс, повторённый через 0,4 с с противоположной стороны.

Измерения подтвердили: источник реален, точечный, перемещается. Массы не обнаружено, пока источник молчит.

Гипотеза Э. М. Вайнштейна: в достаточной тишине звук возвращается не к тому, кто его издал. Источник тянется к звуку и, получив звук, получает форму.

Практическое: громкий предмет, брошенный в сторону, уводит источник. Шаги по воде и битому стеклу он слышит вдвое дальше.

Работы продолжить. Операторов не информировать.`},{title:"Письмо",body:`Галя, если это дойдёт.

У нас всё так, как я тебе никогда не рассказывала. Карту оставляю на столе — пусть возьмёт тот, кто дойдёт.

Лифт идёт больше минуты. В холле три входа: дверь из перехода, люк вентиляции и служебная дверь слева. Заслонки на общем моторе — закрыть можно только одну. Если упрёшься рукой, выдержит дольше. Шаги — это переход. Скребётся — это короб. Скрипит — идёт слева.

Лёва Ш. слышит его лучше нас всех. Он его и привёл. Не нарочно. Он просто восемь лет был самым тихим человеком на свете.

Поцелуй маму.
В.`},{title:"Протокол сеанса № 41",body:`Камера Н-0. Оператор Ш-в Л. А.

00:00 — дверь закрыта. Фон −11 дБ.
02:20 — Оператор: «Слышу свой пульс. И второй».
03:12 — «Он не повторяет. Он отвечает».
03:40 — Оператор просит выключить свет. Свет выключен. (Оператор незрячий. — Прим. лаб.)
04:05 — «Он стоит там, где я молчу».
04:06 — Оператор открывает дверь изнутри. Запись прервана.

От руки: ПН-2 — в боксе № 2. Там, где оно стояло.`},{title:"Талон на усиленное питание",body:`Операторам акустического контроля — по чётным: сгущённое молоко, 1 банка.

(карандашом, буфетчица)
Ш-ву — две. Вчера в столовой он сказал Горелику, что у того сердце сбивается, через раз. Через стену сказал, из коридора. Горелика увезли на поверхность с аритмией.

Пусть ест.`},{title:"Вахтенный журнал, ДГ-72",body:`Перед пуском установить оба ПН-2 и долить топливо из канистры у щитка. Затем ручная подкачка — пять качков рычага. Каждый — как удар по рельсу, слышно на весь горизонт.

12.09 — пробный пуск. Норма.
12.09, ночь — в коробе вентиляции над лифтовым холлом что-то скреблось до утра. Решили — крысы.

Крыс на «Камертоне» нет с 1979-го. Их тоже тишина не любит.`},{title:"Объявление",body:`УВАЖАЕМЫЕ СОТРУДНИКИ!

В связи с работами в камере Н-0 просим соблюдать тишину на всех горизонтах.
Не хлопайте дверями.
Не разговаривайте в лифте.

(ниже, ручкой)
Лифт гудит на весь ствол. Оно знает, когда за ним приходят.`}],of=["Когда оно рядом — замри и не дыши [Q]. Выдыхай, когда отойдёт.","Хрип, который нарастает, — это бросок. Уходи в сторону сразу.","Камень [ЛКМ] уводит его туда, где упал.","По воде и стеклу шаги слышно вдвое дальше.","Бег слышно через полстанции.","Крадись [C]: тебя почти не слышно, но и видишь меньше.","После бега дыхание громкое. Отдышись, прежде чем подходить.","Красные волны — его шаги. Слушай, с какой стороны они идут.","В холле: шаги — дверь, скрежет — люк. Закрывай, когда оно уже там."],IM=["Створки сошлись. Лифт пошёл вверх.","Сто сорок метров тишины, которую ты слушал восемь лет.","Наверху шёл дождь.","Ты стоял у выхода и слушал, как капли отвечают земле.","Одна отвечала с опозданием."],Jn=(i,t,e)=>new D(i,t,e),Ca=75,Jo={minX:4,maxX:13,minZ:3,maxZ:12.9},Qn={A:{approach:Jn(14.1,0,8.5),face:Jn(12.97,1.4,8.5),inside:Jn(11.5,0,8.5)},B:{approach:Jn(7.5,0,14.35),face:Jn(7.5,.5,13),inside:Jn(7.5,0,11.5)},C:{approach:Jn(2.9,0,8.5),face:Jn(4.03,1.4,8.5),inside:Jn(5.5,0,8.5)}},bs=Object.keys(Qn);class UM{constructor({audio:t,level:e,game:n,player:s,monster:o,ui:r}){Object.assign(this,{audio:t,level:e,game:n,player:s,monster:o,ui:r}),this.active=!1,this.t=this.elapsed=0,this.power=100}start(){this.active=!0,this.t=0,this.elapsed=0,this.power=100,this.powerLocked=!1,this.pingCooldown=0,this.stalled=this.stallUsed=this.feintUsed=!1,this.bracing=!1,this.noisePressure=0,this.cueT=0,this.hp={A:100,B:100,C:100},this.shut={A:!1,B:!1,C:!1},this.broken={A:0,B:0,C:0},this.visited=new Set;for(const e of bs)this.level.setShutter(e,!1);this.arrived=!1,this.coached=!1,this.rammedOnce=!1,this.route="A",this.phase="wait",this.phaseT=9,this.ramT=0,this.hitT=0,this.insideT=0,this.retreatRoute=null;const t=this.monster;t.spawn(Jn(36,0,11),"scripted"),t.state="scripted",t.scriptSpeed=0,t.siege=!0,this.ui.show(!0)}stop(){this.active&&(this.active=!1,this.monster.siege=!1,this.monster.ramming=!1,this.ui.show(!1))}other(t){if(this.stage>0&&t!=="C"&&!this.visited.has("C"))return"C";const e=bs.filter(n=>n!==t&&(this.stage>0||n!=="C"));return e[Math.floor(Math.random()*e.length)]}toggle(t){if(!this.active||this.broken[t]>0||this.powerLocked||this.power<4)return this.audio.play("tick",null,{gain:.5}),!1;const e=!this.shut[t];if(this.power=Math.max(0,this.power-4),this.shut[t]=e,this.level.setShutter(t,e),e)for(const n of bs)n!==t&&this.shut[n]&&(this.shut[n]=!1,this.level.setShutter(n,!1));return e}ping(){return!this.active||this.powerLocked||this.power<8||this.pingCooldown>0?null:(this.power-=8,this.pingCooldown=5,this.audio.play("tick",null,{gain:.35,rate:1.8}),{pos:this.monster.pos.clone()})}heard(t){this.noisePressure=Math.min(1,this.noisePressure+Math.max(0,t-3)*.035)}get stage(){return this.elapsed<25?0:this.elapsed<55?1:2}get remaining(){return Math.max(0,Ca-this.t)}restartLift(){var t,e;return!this.active||!this.stalled?!1:(this.stalled=!1,this.power=Math.min(100,this.power+25),this.audio.play("metal_heavy",Jn(9.55,1.3,3.1),{gain:.7,rate:1.1,wet:.6}),(e=(t=this.game).onLiftRestart)==null||e.call(t),this.game.hint("Лифт снова идёт. Оно стало быстрее.",3,!0),!0)}isBracing(t){var l,c,h,u,f;const e=this.player,n=Qn[t].face,s=e.braceContact,o=t==="A"?e.pos.x<n.x:t==="C"?e.pos.x>n.x:e.pos.z<n.z,r=t==="A"?-(((l=e.vel)==null?void 0:l.x)||0):t==="C"?((c=e.vel)==null?void 0:c.x)||0:-(((h=e.vel)==null?void 0:h.z)||0),a=Math.abs(t==="B"?((u=e.vel)==null?void 0:u.x)||0:((f=e.vel)==null?void 0:f.z)||0);return(s==null?void 0:s.doorId)===`sh${t}`&&o&&!e.hidden&&!e.frozen&&!(e.fallT>0)&&!e.running&&(e.stamina??1)>.08&&r<.3&&a<.6&&Math.hypot(e.pos.x-n.x,e.pos.z-n.z)<2.4}nextRoute(){const t=this.other(this.route);return this.stage===0?t:this.hp[this.route]<35&&Math.random()<.55?(this.game.hint("Оно не уходит. Сейчас ударит снова.",2.5,!0),this.route):t}get monsterInHall(){const t=this.monster.pos,e=.4;return t.x>Jo.minX+e&&t.x<Jo.maxX-e&&t.z>Jo.minZ+e&&t.z<Jo.maxZ-e}go(t){this.route=t,this.visited.add(t),this.phase="approach";const e=this.monster;e.ramming=!1,this.level.avoid=Jo,e.goTo(Qn[t].approach,"scripted"),this.level.avoid=null,e.state="scripted";const n=this.assist??1;e.scriptSpeed=((t==="B"?2.2:t==="C"?2.6:3)+this.stage*.55+this.noisePressure*.5)*(.75+n*.25),e.siege=!0,this.repathT=1}update(t){var s,o;if(!this.active)return;const e=this.monster;this.elapsed+=t,!this.stalled&&!this.arrived&&(this.t=Math.min(Ca,this.t+t)),!this.stallUsed&&this.t>=38&&!this.arrived&&(this.t=38,this.stalled=this.stallUsed=!0,this.audio.play("metal_heavy",Jn(7.5,1.4,1.5),{gain:1,rate:.5,wet:1}),(o=(s=this.game).onLiftStall)==null||o.call(s),this.game.hint("Лифт встал. Вернись к кнопке вызова у дверей и держи [E].",6,!0)),this.noisePressure=Math.max(0,this.noisePressure-t*.08),this.pingCooldown=Math.max(0,this.pingCooldown-t);const n=bs.some(r=>this.shut[r]);if(this.power=Vt.clamp(this.power+t*(n?-1.1:4),0,100),this.power<=0&&!this.powerLocked){this.powerLocked=!0;for(const r of bs)this.shut[r]=!1,this.level.setShutter(r,!1);this.audio.play("metal_heavy",this.player.pos,{gain:.6,rate:.6}),this.game.hint("Привод перегрелся. Заслонки поднялись — дай ему остыть.",4,!0)}else this.powerLocked&&this.power>=20&&(this.powerLocked=!1);for(const r of bs)this.broken[r]>0&&(this.broken[r]-=t,this.broken[r]<=0&&(this.hp[r]=60));this.bracing=!1;for(const r of bs){const a=Qn[r].face;this.isBracing(r)&&this.shut[r]&&(this.bracing=!0,this.phase==="ram"&&this.route===r?this.player.stamina=Math.max(0,(this.player.stamina??1)-t*.23):this.hp[r]=Math.min(100,this.hp[r]+t*10),this.repairT=(this.repairT||0)-t,this.repairT<=0&&(this.repairT=.6,this.audio.play("tick",a,{gain:.5,rate:.9,wet:.4})))}if(this.phase==="recoil"){if(this.phaseT-=t,this.phaseT<=0){const r=this.retreatRoute||this.route;this.retreatRoute=null,this.go(r)}}else if(this.phase==="feint")this.phaseT-=t,this.phaseT<=0&&this.go(this.other(this.route));else if(this.phase==="squeeze")if(this.phaseT-=t,this.shut[this.route]&&!this.monsterInHall)this.go(this.route);else if(this.phaseT<=0&&this.monsterInHall)if(this.phase="inside",e.siege=!1,this.player.hidden){const r=this.player.hidden;e.goTo(r.front.clone().add(new D(r.front.x-r.inside.x,0,r.front.z-r.inside.z).multiplyScalar(.4)),"investigate"),e.sniffCd=0,e.suspicion=Math.max(e.suspicion,.35),this.game.hint("Идёт к шкафчику. Не дыши [Q].",3,!0)}else e.startChase();else(!e.path||!e.path.length)&&(this.repathT-=t,this.repathT<=0&&(this.repathT=1,e.goTo(Qn[this.route].inside,"scripted")));else if(this.phase==="inside")e.state==="search"||e.state==="wander"?(this.insideT=(this.insideT||0)+t,this.insideT>(this.player.hidden?3.5:6)&&(this.insideT=0,this.go(this.other(this.route)))):this.insideT=0;else if(this.phase==="wait")this.phaseT-=t,this.phaseT<=0&&this.go(Math.random()<.6?"A":"B");else if(this.phase==="approach"){this.cueT-=t,this.cueT<=0&&(this.cueT=this.route==="B"?1.4:.95,this.audio.play(this.route==="B"?"metal_heavy":this.route==="C"?"creak":"step_tile",e.pos,{gain:.65,rate:this.route==="B"?.65:.8,wet:.7,occ:!1}),be.emit(e.pos.clone().setY(this.route==="B"?.3:.05),{radius:3,speed:7,strength:.5,color:Zt.monster}));const r=Qn[this.route].approach,a=Math.hypot(e.pos.x-r.x,e.pos.z-r.z);if(!this.coached&&a<13&&(this.coached=!0,this.game.hint(this.route==="A"?"Шаги в переходе — опусти заслонку двери [1].":this.route==="B"?"Скребётся в шахте — закрой люк [2].":"Скрип слева — закрой служебную дверь [3].",4,!0)),a<.6){if(e.path=null,this.stage===1&&!this.feintUsed&&this.shut[this.route]){this.feintUsed=!0,this.phase="feint",this.phaseT=2.1,e.ramming=!1,this.audio.play("scratch",Qn[this.route].face,{gain:.9,wet:.8,occ:!1}),this.game.hint("Скребнуло — и замерло. Слушай, куда уйдёт.",3,!0),this.ui.update(this);return}if(this.shut[this.route]){this.phase="ram",this.ramT=5+this.stage*1.5+Math.random(),this.hitT=.4,e.ramming=!0;const l=Qn[this.route].face;e.yaw=Math.atan2(l.x-e.pos.x,l.z-e.pos.z),this.rammedOnce||(this.rammedOnce=!0,this.game.hint("Бьёт в заслонку. Подойди вплотную лицом к ней — упрёшься рукой. У люка присядь.",5,!0))}else this.enter()}else(!e.path||!e.path.length)&&(this.repathT-=t,this.repathT<=0&&this.go(this.route))}else if(this.phase==="ram"){const r=Qn[this.route].face;if(!this.shut[this.route])e.ramming=!1,this.enter();else{if(this.ramT-=t,this.hitT-=t,this.hitT<=0){this.hitT=1.25-this.stage*.18+Math.random()*.2;const a=(9+this.stage*7+Math.random()*4)*(this.assist??1);this.hp[this.route]-=a*(this.isBracing(this.route)?.32:1),this.audio.play("slam",r,{gain:1.2,rate:.7+Math.random()*.2,wet:.8,occ:!1}),this.audio.play("metal_heavy",r,{gain:.8,rate:.6,wet:.8,occ:!1}),be.emit(r,{radius:7,speed:11,strength:1.3,color:Zt.monster});const l=Math.hypot(this.player.pos.x-r.x,this.player.pos.z-r.z);this.player.shake=Math.max(this.player.shake||0,Math.max(.2,1-l/9)),e.twitch=1}if(this.hp[this.route]<=0)this.hp[this.route]=0,this.broken[this.route]=6,this.shut[this.route]=!1,this.level.setShutter(this.route,!1),this.audio.crash(r),this.game.hint(this.route==="A"?"Заслонку двери вырвало!":this.route==="B"?"Люк выбит!":"Служебная дверь выбита!",3,!0),e.ramming=!1,this.enter();else if(this.ramT<=0){e.ramming=!1,this.audio.play("m_roar",r,{gain:.9,rate:.75,wet:1,occ:!1}),this.retreatRoute=this.nextRoute(),this.phase="recoil",this.phaseT=3.4;const a=Qn[this.route].approach.clone();this.route==="A"?a.x+=1.6:this.route==="C"?a.x-=1.3:a.z+=1.6,e.goTo(a,"scripted")}}}!this.arrived&&this.t>=Ca&&(this.arrived=!0,this.game.onLiftArrived()),this.ui.update(this)}enter(){const t=this.monster;this.phase="squeeze",this.phaseT=2.2,t.ramming=!1,t.goTo(Qn[this.route].inside,"scripted"),t.scriptSpeed=1.3,this.repathT=1;const e=Qn[this.route].face;this.audio.play("m_roar",e,{gain:1,rate:.85,wet:.9,occ:!1}),this.audio.play("bonecrack",e,{gain:.8,rate:.9,occ:!1}),be.emit(e,{radius:8,speed:10,strength:1.3,color:Zt.monster}),this.game.hint("Оно лезет внутрь. Шкафчик у лифта — быстро.",3,!0)}}const Lt=(i,t,e)=>new D(i,t,e),Sd=(i,t)=>Lt(-Math.cos(t)*Math.sin(i),-Math.sin(t),-Math.cos(t)*Math.cos(i)),wd=(i,t)=>Lt(-Math.sin(t)*Math.sin(i),Math.cos(t),-Math.sin(t)*Math.cos(i)),di=[{k:Lt(-.0285,0,-.086),L:[.047,.028,.022],r:.0099},{k:Lt(-.0095,.001,-.09),L:[.052,.032,.023],r:.0102},{k:Lt(.0095,0,-.087),L:[.049,.03,.023],r:.0095},{k:Lt(.0265,-.002,-.08),L:[.039,.023,.02],r:.0084}],rf=[Lt(-.017,.002,-.014),Lt(-.005,.003,-.012),Lt(.007,.002,-.013),Lt(.017,0,-.016)],Fn={open:{yaw:[.1,.02,-.06,-.15],curl:[[.1,.14,.08],[.08,.14,.08],[.12,.16,.1],[.16,.2,.12]],thumb:[Lt(-.75,-.25,-.6),Lt(-.55,-.15,-.82),Lt(-.45,-.1,-.88)]},relaxed:{yaw:[.06,.01,-.04,-.1],curl:[[.35,.55,.3],[.42,.62,.32],[.5,.68,.34],[.58,.72,.36]],thumb:[Lt(-.55,-.45,-.7),Lt(-.3,-.48,-.82),Lt(-.12,-.55,-.83)]},cover:{yaw:[.03,0,-.03,-.07],curl:[[.22,.3,.16],[.2,.3,.16],[.24,.32,.18],[.3,.34,.2]],thumb:[Lt(-.62,-.32,-.72),Lt(-.38,-.28,-.88),Lt(-.22,-.28,-.93)]},grip:{yaw:[.12,.04,-.02,-.06],curl:null,thumb:[Lt(-.45,-.35,-.82),Lt(-.35,-.2,-.91),Lt(-.3,-.12,-.95)]}};Fn.flat={yaw:[.045,0,-.025,-.065],curl:[[.005,.01,.005],[0,.008,.004],[.008,.012,.005],[.015,.02,.01]],thumb:[Lt(-.8,0,-.6),Lt(-.65,0,-.76),Lt(-.55,0,-.84)]};Fn.edge={yaw:Fn.flat.yaw,curl:[[.65,.85,.35],[.7,.95,.42],[.75,1,.45],[.8,1.1,.5]],thumb:Fn.flat.thumb};Fn.fuseGrip={yaw:[.04,.01,-.03,-.06],curl:[[.65,1.1,.6],[.75,1.15,.65],[.85,1.15,.65],[.95,1.1,.6]],thumb:[Lt(-.5,-.4,-.7),Lt(.25,-.6,-.75),Lt(.65,-.45,-.6)]};Fn.handle={...Fn.fuseGrip,curl:[[.9,1.35,.6],[1,1.4,.65],[1.1,1.4,.65],[1.2,1.3,.6]]};Fn.point={...Fn.relaxed,curl:[[.02,.04,.04],[.95,1.35,.65],[1.05,1.4,.7],[1.1,1.35,.65]]};const Td=Lt(-.77,-.08,-.63).normalize(),Pa=Lt(0,-.031,-.068),Ed=.0112;function Ad(){const i=Td;return di.map((t,e)=>{const n=(t.k.x-Pa.x)/i.x,s=Pa.y+i.y*n-(t.k.y-.001),o=Pa.z+i.z*n-(t.k.z-.003);let r=null;for(let a=.2;a<=1.7;a+=.04)for(let l=.2;l<=1.8;l+=.04)for(let c=.2;c<=1.1;c+=.06){let h=0,u=0,f=0,d=(a+l+c)*2e-5;const m=[a,l,c];for(let x=0;x<3;x++){f+=m[x];const g=-Math.sin(f)*t.L[x],p=-Math.cos(f)*t.L[x],M=g*g+p*p;let _=((s-h)*g+(o-u)*p)/M;_=_<0?0:_>1?1:_;const v=Math.hypot(s-h-g*_,o-u-p*_),A=Ed+t.r*(1-(x+.5)*.1);v<A?d+=(A-v)*(A-v)*400:d+=(v-A)*(v-A)*[.15,1,1][x],h+=g,u+=p}(!r||d<r.cost)&&(r={cost:d,curl:[a,l,c]})}return r.curl})}function NM(i){const t=typeof i=="string"?Fn[i]:i;t.curl||(t.curl=Ad());const e=[],n=(r,a)=>e.push([r,a]),s=xn(Lt(0,.001,.012),Lt(-.002,.004,.088),.025,.033),o=s.d;s.d=(r,a,l)=>o(r,a/.68,l)*.68,n(s,.008),n(Ne(Lt(.022,.008,.012),Lt(.008,.007,.009)),.008),n(Ne(Lt(-.022,.002,.01),Lt(.008,.008,.012)),.01),n(Ne(Lt(0,.002,-.012),Lt(.025,.0135,.019)),.008),di.forEach((r,a)=>{const l=r.k.clone().add(Lt(0,.001,.006));n(xn(rf[a],l,.008,r.r*.88),.008),n(xn(rf[a].clone().add(Lt(0,.011,.004)),l.clone().add(Lt(0,.0085,.003)),.0014,.002),.0035),n(Ne(r.k.clone().add(Lt(0,.0035,.002)),Lt(r.r*1.08,r.r*.85,r.r*.88)),.004)}),n(Ne(Lt(-.001,-.001,-.05),Lt(.0315,.011,.036)),.006),n(Ne(Lt(-.001,.004,-.05),Lt(.032,.009,.035)),.004),di.forEach(r=>n(Ne(r.k.clone().add(Lt(0,-.0075,.006)),Lt(r.r*.95,.0075,.013)),.004)),n(Ne(Lt(.024,-.007,-.042),Lt(.0105,.01,.029)),.006),n(Ne(Lt(-.02,-.01,-.032),Lt(.014,.012,.025)),.006),di.forEach((r,a)=>{let l=r.k.clone().add(Lt(0,-.001,-.003)),c=0;const h=t.yaw[a];for(let u=0;u<3;u++){c+=t.curl[a][u];const f=Sd(h,c),d=wd(h,c),m=l.clone().addScaledVector(f,r.L[u]),x=r.r*(1-u*.1),g=r.r*(1-(u+1)*.1);n(xn(l,m,x,g*(u===2?.88:1)),.002),u>0&&n(Ne(l.clone().addScaledVector(d,x*.08),Lt(x*1.07,x*.96,x*.8)),.0025),n(Ne(l.clone().addScaledVector(f,r.L[u]*.54).addScaledVector(d,-x*.25),Lt(x*.85,x*.8,r.L[u]*.38)),.002),u===2&&n(Ne(m.clone().addScaledVector(f,-.0075).addScaledVector(d,g*.62),Lt(g*.72,.0019,.0072)),.0015),l=m}});{const r=t.thumb;let a=Lt(-.02,-.006,-.016);const l=[.042,.033,.027],c=[.0128,.0112,.0098,.0084],h=[];for(let u=0;u<3;u++){const f=r[u].clone().normalize(),d=Lt(-.55,.75,.1).addScaledVector(f,-Lt(-.55,.75,.1).dot(f)).normalize(),m=a.clone().addScaledVector(f,l[u]);n(xn(a,m,c[u],c[u+1]*(u===2?.9:1)),u===0?.007:.0025),u>0&&n(Ne(a,Lt(c[u]*1.03,c[u]*.97,c[u]*.9)),.004),u===2&&n(Ne(m.clone().addScaledVector(f,-.008).addScaledVector(d,c[3]*.6),Lt(c[3]*.75,.002,.0078)),.0015),h.push(m.clone()),a=m}n(xn(h[0].clone().add(Lt(.004,.002,0)),di[0].k.clone().add(Lt(.002,-.002,.012)),.005,.005),.006)}return e}function zM(i){return(t,e,n)=>{let s=1e9;for(const[o,r]of i){const a=o.box,l=t<a.min.x?a.min.x-t:t>a.max.x?t-a.max.x:0,c=e<a.min.y?a.min.y-e:e>a.max.y?e-a.max.y:0,h=n<a.min.z?a.min.z-n:n>a.max.z?n-a.max.z:0;Math.sqrt(l*l+c*c+h*h)>s+r||(s=qh(s,o.d(t,e,n),r))}return s}}const sc={};function af(i="open"){if(sc[i])return sc[i];const t=zM(NM(i)),e=_d(t,Lt(-.115,-.11,-.215),Lt(.07,.045,.125),.0014),n=Fn[i],s=[];di.forEach((u,f)=>{let d=u.k.clone().add(Lt(0,-.001,-.003)),m=0;for(let x=0;x<3;x++){m+=n.curl[f][x];const g=Sd(n.yaw[f],m),p=wd(n.yaw[f],m);s.push({p:d.clone(),d:g,up:p,side:new D().crossVectors(g,p),r:u.r*(1-x*.1),mcp:x===0}),d.addScaledVector(g,u.L[x])}});const o=(u,f)=>Math.exp(-((u/f)**2)),{smoothstep:r}=Vt,a=e.attributes.position,l=e.attributes.normal,c=new Float32Array(a.count*3),h=new D;for(let u=0;u<a.count;u++){const f=a.getX(u),d=a.getY(u),m=a.getZ(u);let x=0,g=0;for(const y of s){h.set(f,d,m).sub(y.p);const E=h.dot(y.d),w=h.dot(y.side),S=h.dot(y.up);if(Math.abs(E)>.016||Math.abs(w)>y.r*1.1)continue;const L=1-r(Math.abs(w),y.r*.6,y.r*1.1),U=E+w*w/y.r*.16,R=r(S,.001,.006),k=1-r(S,-.006,-.001);x+=L*(R*(o(U+.001,8e-4)*.55+o(U-.002,65e-5)*.35+o(U+.0035,6e-4)*.25)+k*o(U-(y.mcp?.005:0),9e-4)*.9),g=Math.max(g,L*o(E,y.mcp?.01:.006)*(.4+R*.6))}const p=(1-r(d,-.008,.002))*(1-r(Math.abs(f),.029,.037));if(m>-.084&&m<.025){const y=f+.01+.017*((m+.041)/.038)**2,E=r(m,-.082,-.067)*(1-r(m,-.016,-.004)),w=m+.073-f*.19-Math.sin(f*50)*.003,S=m+.052+f*.37;x+=p*(o(y,85e-5)*E*.85+o(w,8e-4)*.8+o(S,75e-5)*r(f,-.02,-.006)*.65),x+=p*(o(m-f*.06-.002,9e-4)*.8+o(m+f*.03-.011,8e-4)*.45)}const _=r(d,.005,.013)*r(m,-.085,-.06)*(1-r(m,.015,.045))*(o(f+.013+Math.sin(m*55)*.004,8e-4)+o(f-.01-Math.sin(m*42)*.005,65e-5)),A=(Gi(f*550,d*550,m*550,2)-.5)*12e-5-x*65e-5+_*15e-5;a.setXYZ(u,f+l.getX(u)*A,d+l.getY(u)*A,m+l.getZ(u)*A);const b=Gi(f*80,d*80,m*80,2)-.5;c.set([.96+b*.08+g*.025+p*.025-x*.16-_*.08,.91+b*.07-g*.07+p*.035-x*.18-_*.035,.87+b*.06-g*.05+p*.025-x*.17-_*.015],u*3)}return e.setAttribute("color",new ge(c,3)),e.computeVertexNormals(),sc[i]=e,e}function Cd(){return{p:Pa.clone(),axis:Td.clone(),r:Ed,curl:Fn.grip.curl||Ad()}}const vo=(i,t,e)=>new D(i,t,e),oc=[...di.map(i=>i.L),[.042,.033,.027]];let uo,lf;function kM(i){const t=i.clone().normalize().negate(),e=vo(-.55,.75,.1).addScaledVector(t,-vo(-.55,.75,.1).dot(t)).normalize(),n=new D().crossVectors(e,t);return new We().setFromRotationMatrix(new ie().makeBasis(n,e,t))}class cf{constructor(t,e,n="relaxed"){this.group=new Te,this.mesh=new mu(af("open"),t),this.mesh.frustumCulled=!1,this.group.add(this.mesh),this.wrist=new Ea,this.forearm=new Ea,this.wrist.add(this.forearm),this.mesh.add(this.wrist),this.digits=[],this.bones=[this.wrist,this.forearm];for(let s=0;s<5;s++){const o=[];for(let r=0;r<3;r++){const a=new Ea;r===0?a.position.copy(s<4?di[s].k.clone().add(vo(0,-.001,-.003)):vo(-.02,-.006,-.016)):a.position.set(0,0,-oc[s][r-1]),(r?o[r-1]:this.wrist).add(a),o.push(a),this.bones.push(a)}this.digits.push(o)}this.setPose("open",1),this.mesh.updateMatrixWorld(!0),this.skeleton=new Nh(this.bones),this.mesh.bind(this.skeleton),uo||this.buildGeometry(),this.mesh.geometry=uo,this.nails=new mu(lf,e),this.nails.frustumCulled=!1,this.group.add(this.nails),this.nails.bind(this.skeleton,this.mesh.bindMatrix),this.setPose(n,1)}buildGeometry(){uo=af("open").clone();const t=uo.attributes.position,e=new Uint16Array(t.count*4),n=new Float32Array(t.count*4),s=[];for(let c=0;c<5;c++)this.digits[c].forEach((h,u)=>s.push({a:h.getWorldPosition(new D),b:vo(0,0,-oc[c][u]).applyMatrix4(h.matrixWorld),index:this.bones.indexOf(h),finger:c,joint:u}));const o=new D,r=new D,a=new D;for(let c=0;c<t.count;c++){if(o.fromBufferAttribute(t,c),o.z>-.015&&o.x>-.04){const g=Vt.smoothstep(o.z,.005,.065);e[c*4]=0,e[c*4+1]=1,n[c*4]=1-g,n[c*4+1]=g;continue}let h=null,u=1/0,f=0;for(const g of s){r.subVectors(g.b,g.a),a.subVectors(o,g.a);const p=Vt.clamp(a.dot(r)/r.lengthSq(),0,1),M=a.addScaledVector(r,-p).lengthSq();M<u&&(u=M,h=g,f=p)}const d=h.finger<4?Vt.smoothstep(-o.z,-di[h.finger].k.z-.02,-di[h.finger].k.z+.007):Vt.smoothstep(-o.x,.028,.047);let m=h.index,x=0;f<.25?(m=h.joint?h.index-1:0,x=(1-Vt.smoothstep(f,0,.25))*.5):f>.75&&h.joint<2&&(m=h.index+1,x=Vt.smoothstep(f,.75,1)*.5),e.set([h.index,m,0,0],c*4),n.set([d*(1-x),d*x,1-d,0],c*4)}uo.setAttribute("skinIndex",new Ua(e,4)),uo.setAttribute("skinWeight",new ge(n,4));const l=[];for(let c=0;c<5;c++){const h=this.digits[c][2],u=c<4?di[c].r*.7:.007,f=[],d=[],m=[],x=12,g=10,p=c===4?.0155:.0145,M=oc[c][2];for(let y=0;y<=x;y++){const E=y/x,w=u*.72*Math.sqrt(Math.max(.02,1-Math.max(0,(.22-E)/.22)**2))*(1-Math.max(0,(E-.8)/.2)*.12);for(let S=0;S<=g;S++){const L=S/g*2-1;f.push(L*w,u*(.91-.28*L*L)+6e-4-Math.cos(E*Math.PI*2)*45e-5,-M+.003+p*(1-E));const U=Vt.smoothstep(E,.93,.99),R=(1-Vt.smoothstep(E+L*L*.1,.07,.2))*.15;if(d.push(.92+U*.04+R,.8+U*.13+R,.76+U*.13+R),y<x&&S<g){const k=y*(g+1)+S,X=k+g+1;m.push(k,k+1,X,k+1,X+1,X)}}}const _=new Ye;_.setAttribute("position",new ge(f,3)),_.setAttribute("color",new ge(d,3)),_.setIndex(m),_.computeVertexNormals(),_.applyMatrix4(h.matrixWorld);const v=_.attributes.position.count,A=new Uint16Array(v*4),b=new Float32Array(v*4);for(let y=0;y<v;y++)A[y*4]=this.bones.indexOf(h),b[y*4]=1;_.setAttribute("skinIndex",new Ua(A,4)),_.setAttribute("skinWeight",new ge(b,4)),l.push(_)}lf=Ka(l),l.forEach(c=>c.dispose())}setPose(t,e,n=null){const s=Fn[t]||Fn.relaxed,o=n||s.curl||Cd().curl,r=e>=1?1:1-Math.exp(-e*18);this.pose=t;for(let l=0;l<4;l++)for(let c=0;c<3;c++){const h=new We().setFromEuler(new pi(-o[l][c],c?0:s.yaw[l],0,"YXZ"));this.digits[l][c].quaternion.slerp(h,r)}let a=new We;for(let l=0;l<3;l++){const c=kM(s.thumb[l]);this.digits[4][l].quaternion.slerp(a.clone().invert().multiply(c),r),a=c}}setForearm(t,e){const n=new We().setFromUnitVectors(vo(0,0,1),t.clone().normalize());this.forearm.quaternion.slerp(n,1-Math.exp(-e*16))}}const nn=(i,t,e)=>new D(i,t,e),xa=nn(0,1,0);class hf{constructor(t){this.level=t,this.boxes=[],this.cached=new WeakMap,this.walls=new Map,this.ray=new wr,this.last=null}collect(t){var s;const e=this.level,n=new Set;this.boxes.length=0;for(let o=Math.floor(t.z)-2;o<=Math.floor(t.z)+2;o++)for(let r=Math.floor(t.x)-2;r<=Math.floor(t.x)+2;r++)if(e.open(r,o)){const a=((s=e.hash)==null?void 0:s[o*(e.NW*e.navS||64)+r])||[];for(const l of a)n.has(l)||(n.add(l),this.cached.has(l)||this.cached.set(l,new ei(nn(l.minX,l.minY??0,l.minZ),nn(l.maxX,l.maxY??1.5,l.maxZ))),this.boxes.push(this.cached.get(l)))}else{const a=`${r},${o}`;this.walls.has(a)||this.walls.set(a,new ei(nn(r,-.1,o),nn(r+1,7,o+1))),this.boxes.push(this.walls.get(a))}for(const o of e.doors||[]){if(!o.box)continue;const r=o.box,a=new ei(nn(r.minX,0,r.minZ),nn(r.maxX,o.id==="shB"?.95:2.8,r.maxZ));a.doorId=o.id,this.boxes.push(a)}}cast(t,e,n=.8){this.ray.set(t,e);let s=null;const o=new D;for(const r of this.boxes){if(r.containsPoint(t)||!this.ray.intersectBox(r,o))continue;const a=o.distanceTo(t);if(a>n||s&&a>=s.distance)continue;const l=[[Math.abs(o.x-r.min.x),nn(-1,0,0)],[Math.abs(o.x-r.max.x),nn(1,0,0)],[Math.abs(o.y-r.min.y),nn(0,-1,0)],[Math.abs(o.y-r.max.y),xa.clone()],[Math.abs(o.z-r.min.z),nn(0,0,-1)],[Math.abs(o.z-r.max.z),nn(0,0,1)]];l.sort((h,u)=>h[0]-u[0]);const c=l[0][1];c.dot(e)>-.1||c.y<-.5||(s={point:o.clone(),normal:c,distance:a,box:r,doorId:r.doorId})}return s}edge(t){if(t.normal.y>.5)return null;const{point:e,normal:n,box:s}=t,o=Math.abs(n.x)>.5?"z":"x",r=[{distance:e[o]-s.min[o],direction:nn(o==="x"?-1:0,0,o==="z"?-1:0)},{distance:s.max[o]-e[o],direction:nn(o==="x"?1:0,0,o==="z"?1:0)},{distance:s.max.y-e.y,direction:xa.clone()}].filter(a=>a.distance>=0&&a.distance<.11).sort((a,l)=>a.distance-l.distance);for(const a of r){const l=e.clone().addScaledVector(a.direction,a.distance),c=l.clone().addScaledVector(a.direction,.035).addScaledVector(n,-.035);if(!this.boxes.some(h=>h.containsPoint(c)))return{point:l,direction:a.direction}}return null}sample(t,e){var l;this.collect(t.position);const n=new We().setFromAxisAngle(xa,e.yaw),s=nn(-.04,-.27,-.14).applyQuaternion(n).add(t.position);let o=null,r=1/0;for(const c of[-55,-30,0,25,50])for(const h of[0,-.42]){const u=c*Math.PI/180,f=nn(Math.sin(u),h,-Math.cos(u)).normalize().applyQuaternion(n),d=this.cast(s,f,this.last?.82:.7);if(!d)continue;const m=d.point.clone().sub(t.position).applyQuaternion(n.clone().invert());if(m.x>.16||m.distanceTo(nn(-.2,-.3,0))>.76)continue;const x=d.distance+Math.abs(c)*.001+(h?.045:0)-(this.last&&d.normal.dot(this.last.normal)>.95?.04:0);x<r&&(r=x,o=d)}const a=nn(0,0,-1).applyQuaternion(n);if(this.forwardDistance=((l=this.cast(t.position,a,1.4))==null?void 0:l.distance)??9,o){const c=this.edge(o);o.pose=c?"edge":"flat",o.fingers=c?c.direction:o.normal.y>.5?a.clone().addScaledVector(o.normal,-a.dot(o.normal)).normalize():xa.clone(),c&&o.point.copy(c.point).addScaledVector(o.fingers,-.035),o.type=c?"edge":o.normal.y>.5?"support":"wall"}return this.last=o,o}pushOut(t,e=.012){const n=nn(0,0,0),s=t.clone(),o=new D;for(const r of this.boxes){r.clampPoint(s,o);const a=s.clone().sub(o),l=a.length();if(!(l>=e))if(l>1e-6)s.addScaledVector(a,(e-l)/l);else{const c=[[s.x-r.min.x,"x",r.min.x-e],[r.max.x-s.x,"x",r.max.x+e],[s.y-r.min.y,"y",r.min.y-e],[r.max.y-s.y,"y",r.max.y+e],[s.z-r.min.z,"z",r.min.z-e],[r.max.z-s.z,"z",r.max.z+e]].sort((h,u)=>h[0]-u[0]);s[c[0][1]]=c[0][2]}}return n.copy(s).sub(t)}}const he=(i,t,e)=>new D(i,t,e),{smoothstep:Xe}=Vt,mh=he(0,-.031,-.068),Ss=(i,t)=>new We().setFromAxisAngle(i,t);function ws(i,t){const e=i.clone().normalize().negate(),n=t.clone().addScaledVector(e,-t.dot(e)).normalize(),s=new D().crossVectors(n,e);return new We().setFromRotationMatrix(new ie().makeBasis(s,n,e))}const fo=(i,t,e="fuseGrip")=>({pos:i.clone().sub(mh.clone().applyQuaternion(t)),q:t,pose:e}),$o=he(-.24,-.48,-.24);function FM(i,t){const{kind:e,k:n}=i,s=i.target.clone().applyMatrix4(t),o=(i.normal||he(0,0,1)).clone().transformDirection(t),r=he(0,1,0).transformDirection(t);if(e==="unscrew"||e==="pickupFuse"){const a=e==="unscrew",l=a?.22:.34,c=a?.64:.4,u=Vt.clamp((n-.24)/.4,0,1)*2.5,f=u%1,d=Xe(f,0,.72)*(1-Xe(f,.78,1)),m=a?o:he(1,0,0),x=new We().setFromUnitVectors(he(1,0,0),m),g=a?(Math.floor(u)+Xe(f,0,.72))*.85:0,p=Ss(m,g).multiply(x),M=Ss(m,a?d*.85:0).multiply(x),_=Xe(n,c,.84),v=Xe(n,.91,1),A=s.clone().addScaledVector(o,Xe(n,.57,.7)*.09).lerp(he(-.13,-.17,-.42),_).add(he(0,-v*.48,v*.12)),b=a&&n>.24&&n<.64&&f>.76,y=fo(A,M,n<l?"open":b?"relaxed":"fuseGrip");return y.pos.lerp($o,1-Xe(n,0,l)),{left:y,fuse:{pos:A,q:p,visible:n>=l&&n<.98},stage:a?"выкручивание":"подъём"}}if(e==="insertFuse"){const a=new We().setFromUnitVectors(he(1,0,0),o).multiply(Ss(he(1,0,0),-Xe(n,.56,.82)*.65)),l=$o.clone().add(mh.clone().applyQuaternion(a)).lerp(he(-.15,-.18,-.38),Xe(n,0,.18)).lerp(s.clone().addScaledVector(o,.14),Xe(n,.2,.5));l.addScaledVector(o,-Xe(n,.5,.82)*.14);const c=fo(l,a);return c.pos.lerp($o,Xe(n,.83,1)),{left:c,fuse:{pos:l,q:a,visible:n<.82},stage:`установка ${i.slot+1}`}}if(["uncap","pour","recap"].includes(e)){const a=e==="pour",l=a?Xe(n,0,.23)*(1-Xe(n,.82,1)):0,c=Ss(he(0,0,1),-l*1.85).multiply(Ss(he(1,0,0),l*.12)),h=he(.1415,.135,0),u=he(-.08,-.2,-.56),f=s.clone().addScaledVector(r,.17).add(he(0,0,.025)).sub(h.clone().applyQuaternion(c)),d=u.clone().lerp(f,l),m=$o.clone().sub(he(0,.17,0)).add(mh.clone().applyQuaternion(ws(he(.15,0,-1),he(0,1,.1))));e==="uncap"&&d.lerp(m,1-Xe(n,0,.28)),e==="recap"&&d.lerp(m,Xe(n,.72,1));const x=c.clone().multiply(ws(he(.15,0,-1),he(0,1,.1))),g=c.clone().multiply(ws(he(1,.1,-.25),he(0,-1,.12))),p=he(0,.17,0).lerp(he(-.035,-.195,.02),l),M=fo(p.applyQuaternion(c).add(d),x.slerp(g,l),l>.5?"open":"handle");let _;const v=e==="uncap"?Xe(n,.55,.9):e==="recap"?1-Xe(n,.1,.5):1,A=h.clone().addScaledVector(he(.65,.76,0).normalize(),v*.075).applyQuaternion(c).add(d);if(a){const y=c.clone().multiply(ws(he(-.85,.1,-.2),he(.1,.4,1))).multiply(Ss(he(0,0,1),1.6*(1-Xe(n,.6,.85)))).slerp(c.clone().multiply(ws(he(-.15,0,-1),he(0,1,.1))),l),E=h.clone().addScaledVector(he(.65,.76,0).normalize(),.075).lerp(he(0,.17,0),l);_=fo(E.applyQuaternion(c).add(d),y,"handle")}else{const b=(e==="uncap"?1:-1)*Xe(n,.28,.62)*1.6,y=c.clone().multiply(ws(he(-.85,.1,-.2),he(.1,.4,1))).multiply(Ss(he(0,0,1),b));_=fo(A,y,"fuseGrip")}return{left:M,right:_,can:{pos:d,q:c,capAway:v,capVisible:!a,flow:a?Xe(n,.2,.28)*(1-Xe(n,.78,.86)):0,end:s},stage:e}}if(e==="prime"){const a=new We().setFromUnitVectors(he(1,0,0),he(1,0,0).transformDirection(t)),l=fo(s,a,"handle"),c=he(.24,-.48,-.24);return l.pos.lerp(c,1-Xe(i.time,0,.24)),l.pos.lerp(c,Xe(i.time,4.82,5)),{left:{pos:$o.clone(),q:ws(he(.15,0,-1),he(0,1,.1)),pose:"relaxed"},right:l,stage:`качок ${Math.min(5,Math.floor(i.time)+1)}`}}return null}const Mo=(i,t,e)=>new D(i,t,e),uf=Mo(0,1,0);function OM(i,t,e=.43){const n=t.clone().sub(i),s=Math.max(.001,Math.min(e*2-.001,n.length()));n.normalize();const o=Mo(0,0,-1).addScaledVector(n,n.z).normalize();return i.clone().addScaledVector(n,s/2).addScaledVector(o,Math.sqrt(e*e-s*s/4))}class BM{constructor(t){this.root=new Te,t.add(this.root);const e=at({map:"cloth",scale:5,boost:.45,tint:8884370}),n=at({map:"rubber",scale:7,boost:.4,tint:7039076});for(const o of[e,n])o.uniforms.uLit.value=.1,o.uniforms.uLocal.value=1;const s=(o,r)=>{const a=new Ge(o,r);return a.frustumCulled=!1,this.root.add(a),a};this.legs=[-1,1].map(o=>({side:o,thigh:s(new ye(.075,.058,1,14),e),shin:s(new ye(.059,.043,1,14),e),knee:s(new dn(.061,12,10),e),shoe:s(new dn(1,14,10),n)}));for(const o of this.legs)o.shoe.scale.set(.078,.062,.15);this.gait=0}update(t,e,n=!0){if(this.root.visible=n&&!e.hidden,!this.root.visible)return;const s=e.fallK||0,o=e.crouch?.45:.65;this.root.position.copy(e.pos).add(Mo(Math.sin(e.yaw)*o,0,Math.cos(e.yaw)*o)),this.root.rotation.y=e.yaw;const r=Math.hypot(e.vel.x,e.vel.z),a=e.moving&&e.fallT<=0;this.gait=Vt.lerp(this.gait,a?Math.min(1,r/2.3):0,Math.min(1,t*10));const l=e.vel.clone().applyAxisAngle(uf,-e.yaw).normalize(),c=((e.steps||0)+Math.min(1,e.stepAcc/(e.stride||.78)))*Math.PI,h=Vt.lerp(e.crouch?.58:.91,.22,s);for(const u of this.legs){const f=c+(u.side>0?Math.PI:0),d=Math.sin(f)*(e.running?.22:e.crouch?.1:.16)*this.gait,m=Math.max(0,Math.cos(f))*(e.running?.095:.055)*this.gait,x=Mo(u.side*.12,h,.07),g=Mo(u.side*.14+l.x*d,.11+m,l.z*d+s*.92),p=OM(x,g);s>0&&(p.y=Math.max(.095,p.y));for(const[M,_,v]of[[u.thigh,x,p],[u.shin,p,g]]){const A=v.clone().sub(_);M.position.copy(_).add(v).multiplyScalar(.5),M.quaternion.setFromUnitVectors(uf,A.clone().normalize()),M.scale.y=A.length()}u.knee.position.copy(p),u.shoe.position.copy(g).add(Mo(0,-.045,-.065)),u.shoe.rotation.x=-Math.max(0,Math.cos(f))*.15*this.gait}}}const wt=(i,t,e)=>new D(i,t,e),{lerp:Zn,clamp:ns,smoothstep:tr}=Vt,rc=2.2;function wn(i,t,e,n=[0,0,0],s=[0,0,0]){const o=new Ge(i,t);return o.position.set(...n),o.rotation.set(...s),o.frustumCulled=!1,e.add(o),o}function HM(i,t){const e=i.clone().normalize().negate(),n=t.clone().addScaledVector(e,-t.dot(e)).normalize(),s=new D().crossVectors(n,e);return new We().setFromRotationMatrix(new ie().makeBasis(s,n,e))}class ac{constructor(t=120,e=16){this.x=new D,this.v=new D,this.k=t,this.c=e}step(t,e){const n=(t.x-this.x.x)*this.k-this.v.x*this.c,s=(t.y-this.x.y)*this.k-this.v.y*this.c,o=(t.z-this.x.z)*this.k-this.v.z*this.c;return this.v.x+=n*e,this.v.y+=s*e,this.v.z+=o*e,this.x.addScaledVector(this.v,e),this.x}}function ff(i,t,e,n){const s=new Te;return n.add(s),wn(gn([wt(0,.006,.5),wt(0,.01,.26),wt(0,.004,.07)],[.052,.043,.034],{radial:22,tubular:18,noise:.0035,noiseScale:22}),t,s),s.cuff=wn(gn([wt(0,.004,.095),wt(0,.003,.055)],[.036,.034],{radial:22,tubular:3,noise:.0018,noiseScale:30}),e,s),s}class VM{constructor(t){this.contactSolver=t?new hf(t):null,this.scene=new id,this.legs=new BM(this.scene),this.root=new Te,this.scene.add(this.root);const e=at({pat:5,human:!0,boost:.58,wet:.05,bump:.25,tint:15916752}),n=at({map:"plastic",human:!0,scale:16,boost:.5,wet:.08,tint:13216416}),s=at({map:"cloth",scale:3,boost:.45,tint:13160660}),o=at({map:"cloth",scale:6,boost:.4,tint:10134696}),r=at({map:"plastic",scale:4,boost:1}),a=at({map:"plastic",scale:4,boost:.9,tint:11542552}),l=at({map:"rubber",scale:6,boost:1});this.mats=[e,n,s,o,r,a,l];for(const v of this.mats)v.uniforms.uLit.value=.22,v.uniforms.uLocal.value=1;for(const v of[e,n,s,o])v.uniforms.uLit.value=.12;r.uniforms.uLit.value=.35,a.uniforms.uLit.value=.3;const c=Cd();this.gripLocal=c.p.clone();{const v=c.axis.clone().negate(),A=wt(0,0,1).addScaledVector(v,-v.z).normalize(),b=new D().crossVectors(v,A);this.handFrameInv=new ie().makeBasis(v,A,b).invert()}this.right=new Te,this.root.add(this.right),this.rightArm=ff(e,s,o,this.right),this.rightHand=new cf(e,n,"grip"),this.right.add(this.rightHand.group),this.cane=new Te,this.root.add(this.cane);const h=c.r;wn(new ye(h,h,.12,16),l,this.cane,[0,-.015,0]),wn(new dn(h,12,8),l,this.cane,[0,.045,0]);const u=rc;wn(new ye(.0105,.0105,u*.75,14),r,this.cane,[0,-.065-u*.355,0]),wn(new ye(.0105,.0105,u*.2,14),a,this.cane,[0,-u*.84,0]),wn(new ye(.014,.011,.05,14),l,this.cane,[0,-u*.97,0]),this.tip=new Ve,this.tip.position.set(0,-u,0),this.cane.add(this.tip),this.left=new Te,this.root.add(this.left),this.leftArm=ff(e,s,o,this.left),this.leftHand=new cf(e,n),this.leftHand.group.scale.x=-1,this.left.add(this.leftHand.group);const f=()=>wn(gn([wt(0,0,0),wt(0,0,.2),wt(0,0,.4)],[.052,.059,.066],{radial:22,tubular:10,noise:.003,noiseScale:16}),s,this.root);this.rightUpper=f(),this.leftUpper=f();const d=Yh(!0);this.workCan=bd(d),this.workFuse=jh(d),this.root.add(this.workCan,this.workFuse),this.workCan.visible=this.workFuse.visible=!1,this.mats.push(...Object.values(d)),this.fuelStream=new Te,this.root.add(this.fuelStream);for(let v=0;v<9;v++)wn(new ye(.0032,.004,1,8),d.fuel,this.fuelStream);this.fuelStream.visible=!1;const m=at({map:"paperw",scale:6,boost:1.1}),x=at({map:"conc2",scale:8,boost:1}),g=at({map:"plastic",scale:8,boost:1.1,tint:15261904}),p=at({map:"metal",scale:8,boost:1,tint:14200944}),M=at({map:"bplastic",scale:10,boost:1.1,tint:13162720});for(const v of[m,x,g,p,M])v.uniforms.uLit.value=.3,v.uniforms.uLocal.value=1,this.mats.push(v);const _=v=>{const A=new Te;return v(A),A.visible=!1,A.traverse(b=>b.frustumCulled=!1),this.left.add(A),A};this.items={stone:_(v=>wn(new ko(.03,1),x,v,[0,-.035,-.075],[.4,.2,.1])),fuse:_(v=>{wn(new ye(.012,.012,.055,14),g,v,[0,-.034,-.078],[0,0,Math.PI/2]);for(const A of[-.031,.031])wn(new ye(.0135,.0135,.012,14),p,v,[A,-.034,-.078],[0,0,Math.PI/2])}),card:_(v=>wn(new Ie(.054,.0025,.086),M,v,[.004,-.028,-.09],[.15,.3,0])),note:_(v=>wn(new fs(.15,.2),m,v,[0,-.03,-.13],[-Math.PI/2+.2,0,.1])),clock:_(v=>{wn(new ye(.036,.036,.026,16),M,v,[0,-.038,-.078],[Math.PI/2,0,0]);for(const A of[-.022,.022])wn(new dn(.016,8,6),p,v,[A,-.004,-.078])})},this.sway=new ac(90,13),this.leftSpring=new ac(130,19),this.leftQ=new We,this.kick=new ac(220,18),this.lastYaw=0,this.lastPitch=0,this.tapT=0,this.actT=0,this.throwT=0,this.leftW=0,this.lastSteps=0,this.sweepPh=0,this.t=0}tap(){this.tapT=.32}act(t,e,n=null){if(this.work)return;const s={take:1.05,read:1.5,push:.62,press:.5,rattle:.95,pump:.95};this.actK=t,this.actD=s[t]||.6,this.actT=this.actD,this.actItem=n,this.reachTarget=e?e.clone():null}reach(t){this.act("take",t)}throw(t="stone"){this.throwT=.45,this.throwItem=t}actPose(t,e){const n=(l,c)=>tr(t,l,c);let s=wt(-.08,-.12,-.5);if(this.reachTarget){s=this.reachTarget.clone().applyMatrix4(e);const l=s.length();s.multiplyScalar(Math.min(1,.56/Math.max(.01,l))),s.x=ns(s.x-.03,-.3,.2),s.y=ns(s.y+.04,-.3,.12)}const o=wt(-.24,-.5,-.24),r=s.clone().sub(wt(-.2,-.3,0)).normalize(),a=wt(-.25,1,.15);switch(this.actK){case"take":{const l=n(0,.4),c=n(.5,.72),h=n(.82,1),u=wt(-.07,-.19,-.3),f=o.clone().lerp(s,l).lerp(u,c).add(wt(0,-.35*h,.05*h)),d=r.clone().lerp(wt(.55,.2,-.8),c).normalize(),m=a.clone().lerp(wt(-.75,.25,.6),c).normalize();return{pose:t>.4?"relaxed":"open",pos:f,fingers:d,back:m}}case"read":{const l=n(0,.35),c=n(.42,.62),h=n(.85,1),u=wt(-.06,-.13+Math.sin(t*9)*.003,-.3),f=o.clone().lerp(s,l).lerp(u,c).add(wt(0,-.4*h,0)),d=r.clone().lerp(wt(.45,.35,-.8),c).normalize(),m=a.clone().lerp(wt(-.5,-.2,1),c).normalize();return{pose:t>.36?"relaxed":"open",pos:f,fingers:d,back:m}}case"push":{const l=n(0,.38),c=Math.sin(ns((t-.3)/.3,0,1)*Math.PI)*.06,h=n(.6,1),u=s.clone().add(wt(0,0,.06));return u.y=Math.min(u.y,-.1),{pose:"open",pos:o.clone().lerp(u,l).add(r.clone().multiplyScalar(c)).lerp(o,h),fingers:wt(.3,.5,-.8),back:wt(-.15,.55,.85)}}case"press":{const l=n(0,.4),c=Math.sin(ns((t-.35)/.25,0,1)*Math.PI)*.035,h=n(.6,1);return{pose:"point",pos:o.clone().lerp(s,l).add(r.clone().multiplyScalar(c)).lerp(o,h),fingers:r.clone().add(wt(0,.1,0)).normalize(),back:wt(-.2,.6,.8)}}case"rattle":{const l=n(0,.3),c=n(.82,1),h=t>.3&&t<.82?Math.sin((t-.3)*38)*.022:0,u=o.clone().lerp(s,l).add(wt(h,h*.3,-Math.abs(h)*.5)).lerp(o,c);return{pose:t>.28?"relaxed":"open",pos:u,fingers:r,back:wt(-.9,.3,.2)}}case"pump":{const l=n(0,.25),c=n(.3,.75),h=n(.8,1),u=s.clone().add(wt(0,.1,0)),f=s.clone().add(wt(.02,-.17,.06)),d=o.clone().lerp(u,l).lerp(f,c).lerp(u,h*.6);return{pose:t>.22?"relaxed":"open",pos:d,fingers:wt(.25,-.2-c*.3,-1).normalize(),back:wt(-.3,1,.1)}}}return{pose:"open",pos:s,fingers:r,back:a}}tipWorld(){return this.tip.getWorldPosition(new D)}showLeft(t){this.leftHand.setPose(t,this.handDt||1/60)}update(t,e,n){var Dt,I;n.braceContact=null,this.legs.update(t,n,this.root.visible),this.handDt=t,this.contactSolver||(this.contactSolver=new hf(n.level)),this.lastPosition&&this.lastPosition.distanceToSquared(n.pos)>4&&(this.leftW=this.touchK=0,this.lastContact=this.contactSolver.last=null,this.leftPos=null,this.leftSpring.init=!1,this.leftSpring.v.set(0,0,0),this.sway.x.set(0,0,0),this.sway.v.set(0,0,0),this.lastYaw=n.yaw,this.lastPitch=n.pitch),(this.lastPosition||(this.lastPosition=new D)).copy(n.pos),this.t+=t,this.root.position.copy(e.position),this.root.quaternion.copy(e.quaternion),this.root.updateMatrixWorld(!0);const s=n.game&&n.game.fear||0,o=n.headOffset?n.headOffset.clone().multiplyScalar(-.65):wt(0,0,0),r=Math.hypot(n.vel.x,n.vel.z),a=Math.min(1,r/2),l=n.running?1:0;this.runK=Zn(this.runK||0,l,Math.min(1,t*5));const c=this.crouchK=Zn(this.crouchK||0,n.crouch?1:0,Math.min(1,t*6));let h=n.yaw-this.lastYaw;h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2);const u=n.pitch-this.lastPitch;this.lastYaw=n.yaw,this.lastPitch=n.pitch;const f=this.sway.step(wt(ns(h*3.2,-.07,.07),ns(-u*3,-.06,.06),0),t),d=n.stride||.78,m=n.steps||0;m!==this.lastSteps&&(this.lastSteps=m,this.kick.v.y-=n.running?.55:n.crouch?.12:.28);const x=this.kick.step(wt(0,0,0),t),p=(m+ns((n.stepAcc||0)/d,0,1))*Math.PI;a>.05&&(this.sweepPh=p),this.sweepAmp=Zn(this.sweepAmp||0,a>.05?n.running?.12:.21:0,Math.min(1,t*4));const M=-Math.cos(this.sweepPh)*this.sweepAmp,_=Math.max(0,Math.sin(this.sweepPh))*(.03+this.runK*.07)*a,v=1-(n.stamina??1),A=Math.sin(this.t*(1.9+v*2.4))*(.003+v*.008)*(n.holding?.2:1),b=s*s*.004+(n.holding?tr(n.holdT||0,3,8)*.004:0),y=wt(Math.sin(this.t*37)*b+Math.sin(this.t*23.3)*b*.6,Math.sin(this.t*41.7)*b,0);this.contact=!n.hidden&&!n.running?this.contactSolver.sample(e,n):null,(n.hidden||n.running)&&(this.contactSolver.last=null,this.contactSolver.forwardDistance=9),this.wallDist=this.contactSolver.forwardDistance??9;let E=0;if(this.tapT>0){const T=1-this.tapT/.32;this.tapT=Math.max(0,this.tapT-t);const H=1-this.tapT/.32;T<.62&&H>=.62&&(this.kick.v.y-=.45),E=H<.4?Math.sin(H/.4*Math.PI*.5)*.36:Math.cos((H-.4)/.6*Math.PI*.5)*.36-Math.sin((H-.4)/.6*Math.PI)*.05}const w=Math.sin(this.sweepPh)*.035*this.runK,S=wt(.17+f.x*.6+y.x,-.235+f.y*.5+x.y*.35+A+w-c*.03+y.y+E*.06+this.runK*.03,-.43+this.runK*.05-Math.abs(w)*.4);n.holding&&(S.y-=.025);const L=1-tr(this.wallDist,.32,.85);S.z+=L*.22,S.y-=L*.045,S.add(o);const U=new ie().copy(this.root.matrixWorld).invert(),R=this.work?FM(this.work,U):null;this.workK=Zn(this.workK||0,R?1:0,1-Math.exp(-t*12)),S.y-=this.workK*.4,S.applyAxisAngle(wt(0,1,0),n.yaw).add(e.position).applyMatrix4(U),this.right.position.copy(S);const k=S.clone().applyMatrix4(this.root.matrixWorld),X=.03+_+E*1.1+this.runK*.25,C=Math.max(.3,k.y-X),B=Math.sqrt(Math.max(.2,rc*rc-C*C))*(1-this.runK*.12),z=n.yaw+M+.05+f.x*.5,Z=wt(k.x-Math.sin(z)*B,X,k.z-Math.cos(z)*B).clone().applyMatrix4(U);Z.z>-.35&&(Z.z=-.35);const rt=Z.clone().sub(S).normalize(),Ct=T=>wt(T*.3,Math.max(.2,Math.min(n.eye,1.65)-.6+(n.actionLean||0)),.12).applyAxisAngle(wt(0,1,0),n.yaw).add(wt(n.pos.x,0,n.pos.z)).applyMatrix4(U),qt=Ct(1).sub(S).normalize(),G=rt,tt=qt.addScaledVector(G,-qt.dot(G)).normalize(),dt=new D().crossVectors(G,tt),lt=new ie().makeBasis(G,tt,dt);this.right.quaternion.setFromRotationMatrix(lt.multiply(this.handFrameInv)),this.rightHand.setPose("grip",t);const ct=this.gripLocal.clone().applyQuaternion(this.right.quaternion).add(S),et=Z.sub(ct).normalize();if(this.cane.position.copy(ct),this.cane.quaternion.setFromUnitVectors(wt(0,-1,0),et),this.cane.visible=this.workK<.85,R!=null&&R.right&&(this.right.position.lerp(R.right.pos,this.workK),this.right.quaternion.slerp(R.right.q,this.workK),this.rightHand.setPose(R.right.pose,t)),this.workCan.visible=!!(R!=null&&R.can),this.workFuse.visible=!!((Dt=R==null?void 0:R.fuse)!=null&&Dt.visible),this.fuelStream.visible=!!((I=R==null?void 0:R.can)!=null&&I.flow),R!=null&&R.fuse&&(this.workFuse.position.copy(R.fuse.pos),this.workFuse.quaternion.copy(R.fuse.q)),R!=null&&R.can){const T=R.can;this.workCan.position.copy(T.pos),this.workCan.quaternion.copy(T.q),this.workCan.cap.visible=T.capVisible,this.workCan.cap.position.copy(this.workCan.capHome).addScaledVector(this.workCan.capAxis,T.capAway*.075),this.workCan.cap.rotateY(t*7);const H=this.workCan.spout.position.clone().applyQuaternion(T.q).add(T.pos),it=nt=>H.clone().lerp(T.end,nt).add(wt(Math.sin(nt*8+this.t*13)*Math.sin(nt*Math.PI)*.003*T.flow,-Math.sin(nt*Math.PI)*.018,0));this.fuelStream.children.forEach((nt,$)=>{const Pt=it($/9),gt=it(($+1)/9),_t=gt.clone().sub(Pt);nt.position.copy(Pt).add(gt).multiplyScalar(.5),nt.quaternion.setFromUnitVectors(wt(0,1,0),_t.clone().normalize()),nt.scale.set(T.flow,_t.length(),T.flow)})}this.actT>0&&(this.actT=Math.max(0,this.actT-t)),this.throwT>0&&(this.throwT=Math.max(0,this.throwT-t));const zt=this.wallDist??9,ee=!!this.contact&&!R&&!n.holding&&!n.listening&&this.actT<=0&&this.throwT<=0;this.touchK=Zn(this.touchK||0,ee?1:0,Math.min(1,t*5)),ee&&this.touchK>.65&&this.contact.normal.y<.5&&(n.braceContact=this.contact);let Q=null,vt=null,N=null,me=null;if(n.fallT>0){Q="open";const T=Zn(Math.max(.16,n.eye-.35),.16,n.fallK);vt=wt(-.28,T,-.32).applyAxisAngle(wt(0,1,0),n.yaw).add(n.pos).applyMatrix4(U),N=wt(0,-.15,-1).applyAxisAngle(wt(0,1,0),n.yaw).transformDirection(U),me=wt(0,1,0).transformDirection(U)}else if(R!=null&&R.left)Q=R.left.pose,vt=R.left.pos,this.leftQ.copy(R.left.q);else if(this.throwT>0){const T=1-this.throwT/.45,H=tr(T,0,.55);vt=wt(Zn(-.26,-.08,H),Zn(-.42,-.1,H)-Math.max(0,T-.6)*.5,Zn(-.12,-.55,H)),N=wt(.1,Zn(-.6,.35,H),-1),me=wt(-.2,1,.3),Q=T<.5?"relaxed":"open"}else if(n.holding&&!n.hidden){const T=tr(n.holdT||0,0,.25);vt=wt(-.1+y.x*2,Zn(-.45,-.145,T)+y.y*2,-.22),N=wt(.95,.3,-.05),me=wt(0,.7,-.7),Q="cover"}else if(this.actT>0)({pose:Q,pos:vt,fingers:N,back:me}=this.actPose(1-this.actT/this.actD,U,y));else if(n.listening&&!n.hidden)vt=wt(-.3,-.06+A,-.16),N=wt(.15,1,.1),me=wt(-1,0,.35),Q="cover";else if(this.touchK>.05){const T=this.contact||this.lastContact;T&&(vt=T.point.clone().addScaledVector(T.normal,.022).addScaledVector(T.fingers,-.055).applyMatrix4(U),N=T.fingers.clone().transformDirection(U),me=T.normal.clone().transformDirection(U),Q=T.pose,this.lastContact=T)}else if(this.runK>.4){const T=Math.sin(this.sweepPh+Math.PI);vt=wt(-.23,-.27+T*.06,-.38-T*.07),N=wt(.35,.25+T*.3,-1),me=wt(-.6,.8,.1),Q="relaxed"}else if(a>.15&&!n.hidden&&!n.crouch&&zt<1.6){const T=Math.sin(this.sweepPh)*.012;vt=wt(-.2+T,-.33+A+x.y*.5,-.36),N=wt(.42,.62,-.62),me=wt(-.15,.25,1),Q="open"}const Qt=Q?1:0;this.leftW=Zn(this.leftW,Qt,Math.min(1,t*(Qt?9:5))),Q&&(this.leftPose=Q,this.leftPos=vt,R||this.leftQ.slerp(HM(N,me),this.leftW<.1?1:Math.min(1,t*14)));let Jt=null;if(this.actT>0){const T=1-this.actT/this.actD;this.actK==="take"&&T>.42&&T<.92&&(Jt=this.actItem),this.actK==="read"&&T>.38&&T<.95&&(Jt="note")}else this.throwT>0&&1-this.throwT/.45<.55&&(Jt=this.throwItem||"stone");for(const T in this.items)this.items[T].visible=T===Jt;const Nt=this.leftW>.02&&this.leftPos;if(this.left.visible=!!Nt,Nt){this.showLeft(this.leftPose);const T=ee&&this.touchK>.65,H=this.leftPos.clone().add(wt(f.x*.5,f.y*.4-(1-this.leftW)*.35,0).multiplyScalar(T?0:1)).add(y.clone().multiplyScalar(T?.1:1)).add(o.clone().multiplyScalar(T?0:1));this.leftSpring.init||(this.leftSpring.x.copy(H),this.leftSpring.init=!0),R?(this.left.position.copy(vt),this.leftSpring.x.copy(vt),this.leftSpring.v.set(0,0,0)):this.left.position.copy(this.leftSpring.step(H,t)),this.left.quaternion.copy(this.leftQ)}else this.leftSpring.init=!1;if(this.root.updateMatrixWorld(!0),ee&&Nt)for(const T of this.leftHand.digits)for(let H=1;H<=3;H++){const it=H<3?T[H].getWorldPosition(new D):wt(0,0,-.02).applyMatrix4(T[2].matrixWorld),nt=this.contactSolver.pushOut(it);if(nt.lengthSq()<1e-8)continue;const $=nt.applyQuaternion(this.root.quaternion.clone().invert());this.left.position.add($),this.leftSpring.x.copy(this.left.position),this.left.updateMatrixWorld(!0)}const Wt=(T,H,it,nt)=>{const $=Ct(nt),Pt=$.clone().sub(T.position).applyQuaternion(T.quaternion.clone().invert()),gt=Pt.length();Pt.normalize(),nt<0&&(Pt.x*=-1),it.setForearm(Pt,t);const _t=wt(0,0,1).applyQuaternion(it.forearm.quaternion);nt<0&&(_t.x*=-1),H.quaternion.setFromUnitVectors(wt(0,0,1),_t),H.scale.z=ns(gt/.5,.35,1.4),H.cuff.scale.z=1/H.scale.z;const re=nt>0?this.rightUpper:this.leftUpper,Rt=wt(nt*.19,n.eye-.2+(n.actionLean||0),.13).applyAxisAngle(wt(0,1,0),n.yaw).add(wt(n.pos.x,0,n.pos.z)).applyMatrix4(U).sub($);re.position.copy($),re.quaternion.setFromUnitVectors(wt(0,0,1),Rt.clone().normalize()),re.scale.z=Rt.length()/.4};Wt(this.right,this.rightArm,this.rightHand,1),this.leftUpper.visible=!!Nt,Nt&&Wt(this.left,this.leftArm,this.leftHand,-1),ee&&!this.touching&&this.touchK>.6&&this.onTouch&&this.onTouch(this.left.getWorldPosition(new D)),this.touching=ee&&this.touchK>.6}}const tn=(i,t,e)=>new D(i,t,e);function GM(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}const df=["В трубке дыхание. Твоё — только на полсекунды позже.","Тишина. Потом щелчок — как языком о нёбо. Твой щелчок.","Женский голос считает до семи. Сбивается на четырёх и начинает снова.","Гудок. Под гудком — шаги. Они ближе, чем телефонная станция."];class WM{constructor({level:t,audio:e,game:n,player:s,scene:o}){Object.assign(this,{level:t,audio:e,game:n,player:s,scene:o}),this.monster=null,this.traps=[],this.clocks=[],this.held=[],this.live=[],this.phones=[],this.phoneCd=40,this.ringing=null}build(){const t=this.level;t.lineMat.prop;const e={can:at({map:"metal",scale:6,boost:1.9,tint:14209216}),bottle:at({map:"bplastic",scale:6,boost:2.2,tint:9089162,wet:.8}),tray:at({map:"metal",scale:3,boost:1.2,tint:12633288}),clock:at({map:"paint",scale:5,boost:1.8,tint:14200992}),brass:at({map:"metal",scale:6,boost:2,tint:14729344}),phone:at({map:"bplastic",scale:4,boost:1.4,tint:12103840})};this.mats=e;const n={can:()=>[{geo:new ye(.033,.033,.115,14),rot:[Math.PI/2,0,0],pos:[0,.033,0]}],bottle:()=>[{geo:new Er([[.001,0],[.036,0],[.037,.18],[.03,.21],[.013,.25],[.013,.3],[.001,.3]].map(([d,m])=>new mt(d,m)),14),rot:[0,0,Math.PI/2],pos:[.15,.036,0]}],tray:()=>[{geo:new Ie(.4,.012,.28),pos:[0,.006,0]},{geo:new Ie(.4,.03,.01),pos:[0,.015,.14]},{geo:new Ie(.4,.03,.01),pos:[0,.015,-.14]}]},s=GM(1987),o=[tn(34.9,0,50.6),tn(33.9,0,29.6),tn(2.5,0,18),tn(54.5,0,34),tn(54,0,25.6),tn(53,0,8),tn(32,0,9.6),tn(9.5,0,6)],r=[];for(let d=0;d<o.length-1;d++){const m=t.findPath(o[d],o[d+1]);if(m)for(let x=0;x<m.length-1;x++){const g=m[x],p=m[x+1],M=Math.max(1,Math.round(g.distanceTo(p)/.5));for(let _=0;_<M;_++)r.push(g.clone().lerp(p,_/M))}}const a=t.items.map(d=>d.pos).concat(o.slice(0,1));let l=6+s()*4,c=0;for(let d=1;d<r.length&&this.traps.length<22;d++){if(c+=r[d].distanceTo(r[d-1]),c<l)continue;const m=r[d],x=r[Math.min(r.length-1,d+1)].clone().sub(r[d-1]).setY(0).normalize(),g=(s()-.5)*.5,p=tn(m.x-x.z*g,0,m.z+x.x*g);if(a.some(A=>Math.hypot(A.x-p.x,A.z-p.z)<1.8)||this.traps.some(A=>A.home.distanceTo(p)<3.5)||!t.open(Math.floor(p.x),Math.floor(p.z))||t.blockedPoint(p.x,p.z,.15))continue;const M=["can","can","bottle","tray"][Math.floor(s()*4)],_=Aa(n[M](),e[M]),v=s()*Math.PI*2;_.position.copy(p),_.rotation.y=v,this.scene.add(_),this.traps.push({kind:M,obj:_,home:p.clone(),yaw:v,vel:tn(0,0,0),spin:0,cd:0,broken:!1}),c=0,l=6+s()*5}const h=(d,m,x)=>{const g=tn(d-x*.15,0,m),p=tn(d+x*1.45,0,m);t.items.push({type:"locker",low:!0,pos:tn(d+x*.95,.42,m),inside:g,front:p,yaw:x>0?-Math.PI/2:Math.PI/2,obj:new Ve,taken:!1})};for(const d of[45.3,47.8,50.3])h(27.1,d,1),h(36.9,d,-1);h(46.5,7.4,1),h(61,7.4,-1);const u=()=>[{geo:new ye(.05,.05,.035,18),rot:[Math.PI/2,0,0],pos:[0,.06,0]},{geo:new dn(.022,10,8,0,Math.PI*2,0,Math.PI/2),pos:[-.03,.105,0],rot:[0,0,.4]},{geo:new dn(.022,10,8,0,Math.PI*2,0,Math.PI/2),pos:[.03,.105,0],rot:[0,0,-.4]},{geo:new Ie(.012,.03,.012),pos:[-.035,.02,0]},{geo:new Ie(.012,.03,.012),pos:[.035,.02,0]}];for(const[d,m]of[[39.6,37.7],[8.6,30.3],[46.3,13.9],[34.6,12.2],[21.5,24.5]]){if(!t.open(Math.floor(d),Math.floor(m)))continue;const x=Aa(u(),e.clock);x.position.set(d,0,m),x.rotation.y=Math.random()*6.28,this.scene.add(x);const g={type:"clock",pos:tn(d,.08,m),home:tn(d,0,m),obj:x,taken:!1};t.items.push(g),this.clocks.push(g)}const f=()=>[{geo:new Ie(.17,.24,.07),pos:[0,0,.035]},{geo:new Fh(.022,.15,4,10),pos:[-.06,0,.085]},{geo:new ye(.03,.03,.01,16),rot:[Math.PI/2,0,0],pos:[.03,.04,.072]}];for(const[d,m]of[[20.5,25.2],[5.5,22.5],[31.5,18],[38.5,40],[48,27.6],[16.5,8.2]]){const x=this.wallSpot(d,m);if(!x)continue;const g=Aa(f(),e.phone);g.position.copy(x.pos).setY(1.45),g.rotation.y=Math.atan2(x.n.x,x.n.z),this.scene.add(g);const p={type:"phone",pos:x.pos.clone().setY(1.45).addScaledVector(x.n,.08),obj:g,taken:!1,idx:this.phones.length};t.items.push(p),this.phones.push(p)}}wallSpot(t,e){const n=this.level;let s=null;for(let o=Math.floor(e)-3;o<=Math.floor(e)+3;o++)for(let r=Math.floor(t)-3;r<=Math.floor(t)+3;r++)if(!(!n.open(r,o)||n.ceilAt(r,o)<2.2))for(const[a,l]of[[1,0],[-1,0],[0,1],[0,-1]]){if(n.open(r+a,o+l))continue;const c=tn(r+.5+a*.5,0,o+.5+l*.5);if(n.blockedPoint(c.x-a*.3,c.z-l*.3,.2))continue;const h=Math.hypot(c.x-t,c.z-e);(!s||h<s.d)&&(s={d:h,pos:c,n:tn(-a,0,-l)})}return s}prompt(t){return t.type==="clock"?this.held.length>=3?"Больше не унести":"[E] Взять будильник":t.type==="phone"?this.ringing&&this.ringing.it===t?"[E] Снять трубку":"Телефон. Гудка нет.":null}interact(t){return t.type==="clock"?(this.held.length>=3||(t.taken=!0,t.obj.visible=!1,this.held.push(t),this.live=this.live.filter(e=>e.it!==t),this.audio.pickup(),this.game.flags.clockHint||(this.game.flags.clockHint=!0,this.game.hint("Будильник. [G] — бросить: потикает и зазвенит. Оно пойдёт на звон.",5))),!0):t.type==="phone"?(!this.ringing||this.ringing.it!==t||(this.ringing=null,this.audio.play("click",t.pos,{gain:.6,rate:.7}),this.audio.play("m_breath",t.pos,{gain:.35,rate:.85,delay:.5,wet:.2}),this.game.noise(t.pos.clone(),{radius:2,visual:2,source:"player",kind:"item",color:Zt.item,strength:.5}),this.game.hint(df[(this.game.flags.phoneN=(this.game.flags.phoneN||0)+1)%df.length],5)),!0):!1}throwClock(t){if(!this.held.length||this.player.frozen||this.player.hidden)return!1;const e=this.held.pop(),n=new D;return t.getWorldDirection(n),e.obj.visible=!0,e.obj.position.copy(t.position).addScaledVector(n,.45),this.live.push({it:e,vel:n.multiplyScalar(8.5).add(tn(0,2.4,0)),state:"fly",t:0,tick:0,ring:0,call:0}),this.audio.whoosh(),!0}update(t){var r;const e=this.level,n=this.player,s=Math.hypot(n.vel.x,n.vel.z);for(const a of this.traps){a.cd=Math.max(0,a.cd-t);const l=a.obj;if(a.vel.lengthSq()>1e-4&&(l.position.addScaledVector(a.vel,t),e.collide(l.position,.06),a.vel.multiplyScalar(Math.max(0,1-t*3.2)),l.rotation.y+=a.spin*t,a.spin*=Math.max(0,1-t*3),a.kind==="can"&&(l.rotation.x+=a.vel.length()*t*18)),a.broken||a.cd>0)continue;const c=this.monster;if(c&&c.active&&(c.curSpeed||0)>.5&&Math.hypot(c.pos.x-l.position.x,c.pos.z-l.position.z)<.55){this.kick(a,c.curSpeed,tn(Math.sin(c.yaw),0,Math.cos(c.yaw)));continue}if(!(n.hidden||Math.hypot(n.pos.x-l.position.x,n.pos.z-l.position.z)>.42+(n.running?.12:0)||s<.6)){if(n.crouch){this.game.flags.trapCrouchHint||(this.game.flags.trapCrouchHint=!0,this.game.hint("Нога нащупала что-то на полу. Переступаешь — тихо.",3)),a.cd=2;continue}this.kick(a,s)}}for(const a of this.live){const l=a.it.obj;if(a.t+=t,a.state==="fly"){a.vel.y-=9.8*t;const c=l.position.clone();l.position.addScaledVector(a.vel,t),l.rotation.x+=t*8,l.rotation.z+=t*5;const h=l.position,u=e.open(Math.floor(h.x),Math.floor(h.z));let f=!1;(!u||h.y>e.ceilAt(Math.floor(h.x),Math.floor(h.z))||h.y<1.4&&e.blockedPoint(h.x,h.z,.05))&&(l.position.copy(c),a.vel.x*=-.3,a.vel.z*=-.3,f=!0),h.y<=.02&&(h.y=0,a.vel.y*=-.25,a.vel.x*=.45,a.vel.z*=.45,f=!0),f&&a.vel.length()>1.2&&(this.audio.play("metal_heavy",h,{gain:.35,rate:2.4}),this.audio.play("ding",h,{gain:.25,rate:2.6})),(h.y<=.02&&a.vel.length()<.8||a.t>3)&&(h.y=0,l.rotation.set(0,Math.random()*6.28,0),a.state="tick",a.t=0,a.it.pos.set(h.x,.08,h.z))}else a.state==="tick"?(a.tick-=t,a.tick<=0&&(a.tick=.5,this.audio.play("tick",l.position,{gain:.55,rate:1.1}),be.emit(l.position.clone().setY(.1),{radius:1.6,speed:6,strength:.5,decay:1.5,color:Zt.stone})),a.t>3.5&&(a.state="ring",a.t=0)):a.state==="ring"&&(a.ring-=t,a.call-=t,l.position.x=a.it.pos.x+(Math.random()-.5)*.012,a.ring<=0&&(a.ring=.16,this.audio.play("ding",l.position,{gain:.8,rate:2.3+Math.random()*.25,wet:.6})),a.call<=0&&(a.call=1,this.game.noise(l.position.clone().setY(.2),{radius:16,visual:6,source:"stone",kind:"stone",color:Zt.stone,strength:1.1,speed:12})),a.t>7&&(a.state="done",l.position.x=a.it.pos.x,a.it.taken=!1))}this.live=this.live.filter(a=>a.state!=="done");const o=this.monster;if(this.phoneCd-=t,this.ringing){const a=this.ringing;if(a.t+=t,a.cyc-=t,a.cyc<=0){a.cyc=2.8;for(const l of[0,.42])this.audio.play("ding",a.it.pos,{gain:.95,rate:1.7,delay:l,wet:.7});be.emit(a.it.pos.clone(),{radius:5,speed:9,strength:.9,decay:1,color:Zt.item}),this.game.noise(a.it.pos.clone().setY(.5),{radius:26,visual:0,source:"phone",kind:"stone",strength:0})}(a.t>22||this.game.state!=="play")&&(this.ringing=null)}else if(o&&o.active&&this.phoneCd<=0&&this.game.state==="play"&&o.state!=="chase"&&!n.hidden){const a=(r=this.game.flags).phones||(r.phones={});for(const l of this.phones){if(a[l.idx])continue;const c=Math.hypot(n.pos.x-l.pos.x,n.pos.z-l.pos.z),h=Math.hypot(o.pos.x-n.pos.x,o.pos.z-n.pos.z);if(c<7&&h>12){a[l.idx]=!0,this.ringing={it:l,t:0,cyc:0},this.phoneCd=80,this.game.flags.phoneHint||(this.game.flags.phoneHint=!0,this.game.hint("Звонит телефон. Оно услышит. Сними трубку [E] — или уходи, пока звенит.",5,!0));break}}}}kick(t,e,n=null){const s=this.player,o=t.obj,r=n?n.clone():tn(s.vel.x,0,s.vel.z).normalize();r.x+=(Math.random()-.5)*.6,r.z+=(Math.random()-.5)*.6,r.normalize(),t.vel.copy(r).multiplyScalar(1.4+e*.5),t.spin=(Math.random()-.5)*14,t.cd=1.2;const a=o.position;if(t.kind==="can"?(this.audio.play("metal_heavy",a,{gain:.55,rate:2.2+Math.random()*.4}),this.audio.play("knock",a,{gain:.35,rate:1.7,delay:.12})):t.kind==="tray"?(this.audio.play("metal_heavy",a,{gain:.9,rate:1.35+Math.random()*.2}),this.audio.play("ding",a,{gain:.3,rate:1.4})):(this.audio.play("glass_crunch",a,{gain:1,rate:1.2}),this.audio.play("ding",a,{gain:.35,rate:2.4}),t.broken=!0,o.scale.set(1,.25,1),t.vel.multiplyScalar(.3)),n){be.emit(a.clone().setY(.1),{radius:5,speed:10,strength:.9,color:Zt.monster});return}this.game.noise(a.clone().setY(.1),{radius:s.running?11:7.5,visual:6,source:"player",kind:"door",color:Zt.player,strength:1}),this.game.flags.trapHint||(this.game.flags.trapHint=!0,this.game.hint("Задел ногой. Так слышно на пол-этажа. Крадись [C] — тогда переступишь.",4.5))}reset(){for(const t of this.traps)t.obj.position.copy(t.home),t.obj.rotation.set(0,t.yaw,0),t.obj.scale.set(1,1,1),t.vel.set(0,0,0),t.broken=!1,t.cd=0;this.live=[],this.held=this.clocks.filter(t=>t.taken);for(const t of this.clocks)t.taken||(t.obj.position.copy(t.home),t.pos.set(t.home.x,.08,t.home.z));this.ringing=null,this.phoneCd=30}}function XM(i){const t=[...document.querySelectorAll("#start, #pause, #death, #end")],e=[...t,document.getElementById("note"),document.getElementById("hud")],n=document.getElementById("fade"),s=document.getElementById("slits"),o=document.getElementById("touch-controls"),r=document.createElement("canvas");r.width=r.height=1;const a=document.createElement("canvas"),l=new r2(r);l.colorSpace=Un,l.minFilter=l.magFilter=ti,l.generateMipmaps=!1;let c=!0,h=!1,u=!0,f=!1,d=-1/0,m=null,x="",g=null,p=null,M=null,_=0;const v=()=>e.find(C=>!C.classList.contains("hidden"))||null,A=()=>{c=!0},b=C=>t.includes(C);function y(C,B){let z=1;for(;C&&C!==B;C=C.parentElement)z*=+getComputedStyle(C).opacity;return z}const E=[...document.querySelectorAll("#start svg")].map(C=>{const B=C.cloneNode(!0);B.setAttribute("xmlns","http://www.w3.org/2000/svg"),B.setAttribute("color",getComputedStyle(C).color);const z=new Image;return z.onload=A,z.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(B))}`,{element:C,image:z}}),w=new MutationObserver(A);for(const C of[...e,n,s,o])w.observe(C,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["class","style","aria-valuenow"]});for(const C of["input","change","focusin","focusout"])document.addEventListener(C,A);addEventListener("resize",A),document.addEventListener("scroll",A,!0),document.addEventListener("wheel",C=>{var z;if(((z=v())==null?void 0:z.id)!=="note")return;const B=document.querySelector("#note .paper");B.scrollHeight<=B.clientHeight||(C.preventDefault(),B.scrollTop+=C.deltaY*(C.deltaMode===1?20:C.deltaMode===2?B.clientHeight:1),A())},{passive:!1}),document.addEventListener("keydown",C=>{var K;if(((K=v())==null?void 0:K.id)!=="note")return;const B=document.querySelector("#note .paper"),z={ArrowUp:-40,ArrowDown:40,PageUp:-B.clientHeight*.8,PageDown:B.clientHeight*.8}[C.code];z!==void 0&&(C.preventDefault(),B.scrollTop+=z,A())});async function S(C){var qt;h=!0,c=!1,d=performance.now();const B=C.dataset.screen||"",z=[...C.querySelectorAll("h1, h2")].filter(G=>G.getBoundingClientRect().height>0).map(G=>{var dt;const tt=getComputedStyle(G);return{text:G.innerText,rect:G.getBoundingClientRect(),font:tt.font,fontSize:parseFloat(tt.fontSize),lineHeight:parseFloat(tt.lineHeight),color:tt.color,align:tt.textAlign,spacing:tt.letterSpacing,clip:(dt=G.closest(".front-view"))==null?void 0:dt.getBoundingClientRect()}}),K=[],Z=document.createTreeWalker(C,NodeFilter.SHOW_TEXT);for(;Z.nextNode();){const G=Z.currentNode,tt=G.parentElement;if(tt.closest("h1, h2, svg, select, style, script")||!tt.getBoundingClientRect().height)continue;const dt=getComputedStyle(tt),lt=(qt=tt.closest(".front-view, .paper"))==null?void 0:qt.getBoundingClientRect(),ct=document.createRange();let et=1;(C.id==="end"||!b(C))&&(et=y(tt,C));for(let zt=0;zt<G.length;zt++){if(!G.textContent[zt].trim())continue;ct.setStart(G,zt),ct.setEnd(G,zt+1);const ee=ct.getBoundingClientRect();ee.width&&ee.height&&K.push({text:G.textContent[zt],x:ee.left,y:ee.top,height:ee.height,font:`${dt.fontStyle} ${dt.fontWeight} ${dt.fontSize} ${dt.fontFamily}`,color:dt.color,alpha:et,clip:lt})}}const rt=[...C.querySelectorAll('input[type="range"]')].filter(G=>G.getBoundingClientRect().height).map(G=>({rect:G.getBoundingClientRect(),fraction:(+G.value-+G.min)/(+G.max-+G.min)})),Ct=[...C.querySelectorAll("select")].filter(G=>G.getBoundingClientRect().height).map(G=>{const tt=getComputedStyle(G);return{rect:G.getBoundingClientRect(),text:G.options[G.selectedIndex].text,color:tt.color,font:`${tt.fontWeight} ${tt.fontSize} ${tt.fontFamily}`}});try{const G=a,tt=Math.min(devicePixelRatio,1.5),dt=Math.round(innerWidth*tt),lt=Math.round(innerHeight*tt);(G.width!==dt||G.height!==lt)&&(G.width=dt,G.height=lt);const ct=G.getContext("2d");if(ct.setTransform(1,0,0,1,0,0),ct.clearRect(0,0,dt,lt),ct.scale(tt,tt),C.id==="start")if(["headphones","loading","briefing"].includes(B))ct.fillStyle="rgba(2,6,7,0.77)",ct.fillRect(0,0,innerWidth,innerHeight);else{const Q=ct.createLinearGradient(0,0,innerWidth,0);Q.addColorStop(0,"rgba(2,6,7,0.95)"),Q.addColorStop(.28,"rgba(2,6,7,0.82)"),Q.addColorStop(.65,"rgba(2,6,7,0.20)"),Q.addColorStop(1,"rgba(2,6,7,0.05)"),ct.fillStyle=Q,ct.fillRect(0,0,innerWidth,innerHeight)}else b(C)&&(ct.fillStyle=getComputedStyle(C).backgroundColor,ct.fillRect(0,0,innerWidth,innerHeight));if(b(C)){const Q=ct.createLinearGradient(0,innerHeight*.7,0,innerHeight);Q.addColorStop(0,"transparent"),Q.addColorStop(1,"rgba(2,6,7,0.8)"),ct.fillStyle=Q,ct.fillRect(0,0,innerWidth,innerHeight)}else L(ct,C);for(const Q of C.querySelectorAll(".setting-row, .control-list > div, .line-button, .menu-item, .load-track, .load-track i, select")){const vt=Q.getBoundingClientRect();if(!vt.height)continue;const N=getComputedStyle(Q);ct.fillStyle=N.backgroundColor,ct.fillRect(vt.left,vt.top,vt.width,vt.height),Q.matches(".menu-item.crt-hover, .menu-item:focus-visible")&&(ct.fillStyle="rgba(184,76,54,0.12)",ct.fillRect(vt.left,vt.top,vt.width,vt.height)),Q.matches(".menu-item")&&(ct.fillStyle=Q.classList.contains("primary")||Q.classList.contains("crt-hover")?"#d75c49":"#758080",ct.fillRect(vt.left,vt.top+vt.height/2,9,1));const me=parseFloat(N.borderBottomWidth);me&&(ct.fillStyle=N.borderBottomColor,ct.fillRect(vt.left,vt.bottom-me,vt.width,me)),Q.matches("select")&&(ct.strokeStyle=N.borderColor,ct.lineWidth=1,ct.strokeRect(vt.left,vt.top,vt.width,vt.height))}for(const Q of E){const vt=Q.element.getBoundingClientRect();vt.height&&Q.image.complete&&Q.image.naturalWidth&&ct.drawImage(Q.image,vt.left,vt.top,vt.width,vt.height)}if(C!==v()||B!==(C.dataset.screen||"")){c=!0;return}(r.width!==G.width||r.height!==G.height)&&(l.dispose(),r.width=G.width,r.height=G.height);const et=r.getContext("2d");et.clearRect(0,0,r.width,r.height),et.drawImage(G,0,0);const zt=r.width/innerWidth;et.save(),et.scale(zt,zt);for(const Q of z)et.save(),Q.clip&&(et.beginPath(),et.rect(Q.clip.left,Q.clip.top,Q.clip.width,Q.clip.height),et.clip()),et.font=Q.font,et.fillStyle=Q.color,et.letterSpacing=Q.spacing==="normal"?"0px":Q.spacing,et.textAlign=Q.align==="center"?"center":"left",et.textBaseline="alphabetic",Q.text.split(`
`).forEach((N,me)=>{const Qt=et.measureText(N),Jt=Qt.actualBoundingBoxAscent,Nt=Qt.actualBoundingBoxDescent,Wt=Q.rect.left+(Q.align==="center"?Q.rect.width/2:0),Dt=Q.rect.top+me*Q.lineHeight+(Q.lineHeight-Jt-Nt)/2+Jt;et.fillText(N,Wt,Dt)}),et.restore();et.textAlign="left",et.letterSpacing="0px";const ee=new Map;for(const Q of K){if(Q.clip&&(Q.y+Q.height<Q.clip.top||Q.y>Q.clip.bottom))continue;et.save(),Q.clip&&(et.beginPath(),et.rect(Q.clip.left,Q.clip.top,Q.clip.width,Q.clip.height),et.clip()),et.globalAlpha=Q.alpha,et.font=Q.font,et.fillStyle=Q.color,ee.has(Q.font)||ee.set(Q.font,et.measureText("Mg"));const vt=ee.get(Q.font),N=Q.y+(Q.height-vt.actualBoundingBoxAscent-vt.actualBoundingBoxDescent)/2+vt.actualBoundingBoxAscent;et.fillText(Q.text,Q.x,N),et.restore()}et.globalAlpha=1;for(const Q of rt){const vt=Q.rect.top+Q.rect.height/2,N=Q.rect.left+8,me=Q.rect.right-8,Qt=N+(me-N)*Q.fraction;et.lineWidth=3,et.lineCap="round",et.strokeStyle="#546061",et.beginPath(),et.moveTo(N,vt),et.lineTo(me,vt),et.stroke(),et.strokeStyle="#d75c49",et.beginPath(),et.moveTo(N,vt),et.lineTo(Qt,vt),et.stroke(),et.fillStyle="#e4e1d9",et.beginPath(),et.arc(Qt,vt,6,0,Math.PI*2),et.fill()}for(const Q of Ct){et.font=Q.font,et.fillStyle=Q.color,et.textBaseline="middle",et.fillText(Q.text,Q.rect.left+12,Q.rect.top+Q.rect.height/2),et.strokeStyle=Q.color,et.lineWidth=1;const vt=Q.rect.right-13,N=Q.rect.top+Q.rect.height/2;et.beginPath(),et.moveTo(vt-3,N-2),et.lineTo(vt,N+2),et.lineTo(vt+3,N-2),et.stroke()}b(C)||(et.fillStyle=`rgba(0,0,0,${getComputedStyle(n).opacity})`,et.fillRect(0,0,innerWidth,innerHeight)),et.restore(),l.needsUpdate=!0,m=C,x=B,f=!0,document.body.classList.add("crt-interface-ready")}catch(G){console.warn("CRT interface capture failed",G),u=!1,document.body.classList.remove("crt-interface-ready")}finally{h=!1}}function L(C,B){if(!s.classList.contains("hidden")){C.fillStyle="rgba(0,0,0,0.25)",C.fillRect(0,0,innerWidth,innerHeight),C.fillStyle="rgba(0,0,0,0.92)";for(let Z=0;Z<innerHeight;Z+=44)C.fillRect(0,Z,innerWidth,34);const K=C.createRadialGradient(innerWidth/2,innerHeight*.48,innerHeight*.15,innerWidth/2,innerHeight*.48,innerWidth*.65);K.addColorStop(0,"transparent"),K.addColorStop(1,"#000"),C.fillStyle=K,C.fillRect(0,0,innerWidth,innerHeight)}for(const K of B.querySelectorAll("#siege, #brief, .paper, .bar, .bar i, #crosshair, #listen, #radar-c")){const Z=K.getBoundingClientRect();if(!Z.width||!Z.height)continue;const rt=getComputedStyle(K);C.save(),C.globalAlpha=y(K,B),C.beginPath(),C.roundRect(Z.left,Z.top,Z.width,Z.height,parseFloat(rt.borderRadius)?Math.min(Z.width,Z.height)/2:0),C.fillStyle=rt.backgroundColor,C.fill();const Ct=parseFloat(rt.borderTopWidth);Ct&&(C.lineWidth=Ct,C.strokeStyle=rt.borderTopColor,C.stroke()),K.tagName==="CANVAS"&&(C.clip(),C.drawImage(K,Z.left,Z.top,Z.width,Z.height)),C.restore()}const z=B.querySelector("#listen-mark");if(z!=null&&z.getBoundingClientRect().height){const K=getComputedStyle(z),Z=new DOMMatrixReadOnly(K.transform);C.save(),C.globalAlpha=y(z,B),C.translate(innerWidth/2+Z.e,innerHeight/2+Z.f),C.rotate(Math.atan2(Z.b,Z.a)),C.scale(1,8/30);const rt=C.createRadialGradient(0,0,0,0,0,15);rt.addColorStop(0,"#ff4030"),rt.addColorStop(.7,"transparent"),C.fillStyle=rt,C.fillRect(-15,-15,30,30),C.restore()}U(C)}function U(C){if(o.classList.contains("hidden"))return;const B=o.querySelector(".touch-stick"),z=B.getBoundingClientRect();if(z.width){const K=z.left+z.width/2,Z=z.top+z.height/2,rt=z.width/2;C.save(),C.strokeStyle="#a5b4a95c",C.fillStyle="rgba(4,14,16,0.5)",C.lineWidth=1,C.beginPath(),C.arc(K,Z,rt,0,Math.PI*2),C.fill(),C.stroke();for(let qt=0;qt<12;qt++){const G=qt/12*Math.PI*2;C.beginPath(),C.moveTo(K+Math.cos(G)*(rt-2),Z+Math.sin(G)*(rt-2)),C.lineTo(K+Math.cos(G)*(rt-7),Z+Math.sin(G)*(rt-7)),C.stroke()}C.setLineDash([2,4]),C.beginPath(),C.arc(K,Z,rt*.7,0,Math.PI*2),C.stroke(),C.setLineDash([]);const Ct=o.querySelector(".touch-thumb").getBoundingClientRect();C.fillStyle="#b8b59d30",C.strokeStyle="#c5c8ae90",C.beginPath(),C.arc(Ct.left+Ct.width/2,Ct.top+Ct.height/2,Ct.width/2,0,Math.PI*2),C.fill(),C.stroke(),C.restore()}for(const K of o.querySelectorAll("button")){const Z=K.getBoundingClientRect();if(!Z.width||!Z.height)continue;const rt=K.matches(".pressed,.selected"),Ct=getComputedStyle(K);C.save(),C.beginPath(),C.moveTo(Z.left,Z.top),C.lineTo(Z.right-7,Z.top),C.lineTo(Z.right,Z.top+7),C.lineTo(Z.right,Z.bottom),C.lineTo(Z.left+7,Z.bottom),C.lineTo(Z.left,Z.bottom-7),C.closePath(),C.fillStyle=rt?"rgba(76,50,38,0.8)":K.matches(".touch-tap")?"rgba(21,42,46,0.72)":"rgba(4,13,16,0.68)",C.fill(),C.strokeStyle=rt?"#c79973aa":"#95ada35c",C.lineWidth=1,C.stroke(),C.fillStyle=rt?"#ecb181":"#bba88885",C.fillRect(Z.left+6,Z.top,rt?24:12,1);const qt=K.querySelector("svg");if(qt){const lt=qt.getBoundingClientRect();C.save(),C.translate(lt.left,lt.top),C.scale(lt.width/24,lt.height/24),C.strokeStyle=Ct.color,C.lineWidth=1.25,C.lineCap="round",C.lineJoin="round",C.stroke(new Path2D(qt.querySelector("path").getAttribute("d"))),C.restore()}const G=K.querySelector("span")||K,tt=G.getBoundingClientRect(),dt=getComputedStyle(G);tt.width&&dt.display!=="none"&&(C.font=`${dt.fontWeight} ${dt.fontSize} ${dt.fontFamily}`,C.textAlign="center",C.textBaseline="middle",C.fillStyle=Ct.color,C.fillText(G.textContent,tt.left+tt.width/2,tt.top+tt.height/2)),C.restore()}}function R(C){const B=C.clientX/innerWidth-.5,z=C.clientY/innerHeight-.5,K=i(),Z=(1+K*(B*B+z*z))/(1+K*.25);return{x:(.5+B*Z)*innerWidth,y:(.5+z*Z)*innerHeight}}function k(C){var K;const B=R(C),z=document.elementFromPoint(B.x,B.y);return z&&((K=v())!=null&&K.contains(z))?z.closest("button, a, input, select"):null}function X(C,B){const z=R(B),K=C.getBoundingClientRect(),Z=Math.max(0,Math.min(1,(z.x-K.left-8)/Math.max(1,K.width-16))),rt=+C.step||1,Ct=+C.min,qt=+C.max;C.value=Math.max(Ct,Math.min(qt,Ct+Math.round(Z*(qt-Ct)/rt)*rt)),C.dispatchEvent(new Event("input",{bubbles:!0}))}return document.addEventListener("pointermove",C=>{if(!f||!u||!b(v()))return;p&&X(p,C);const B=k(C);B!==g&&(g==null||g.classList.remove("crt-hover"),g=B,g==null||g.classList.add("crt-hover"),document.body.style.cursor=B?"pointer":"",A())},!0),document.addEventListener("pointerdown",C=>{if(!f||!u||!b(v())||!C.isTrusted)return;const B=k(C);B!=null&&B.matches('input[type="range"]')&&(C.preventDefault(),C.stopImmediatePropagation(),p=B,B.focus(),X(B,C))},!0),document.addEventListener("pointerup",()=>{p&&(p.dispatchEvent(new Event("change",{bubbles:!0})),p=null)},!0),document.addEventListener("click",C=>{if(!f||!u||!b(v())||!C.isTrusted||C.detail===0)return;const B=k(C);if(B!=null&&B.matches("select")){if(B===C.target)return;C.preventDefault(),C.stopImmediatePropagation(),B.focus();try{B.showPicker()}catch{}return}C.preventDefault(),C.stopImmediatePropagation(),B!=null&&B.matches('input[type="range"]')?X(B,C):(B==null||B.focus(),B==null||B.click())},!0),{texture:l,mapPoint:R,get ready(){return f},get isMenu(){return b(v())},get layer(){var C;return((C=v())==null?void 0:C.id)||null},get visible(){var C;return u&&f&&!!v()&&m===v()&&x===(((C=v())==null?void 0:C.dataset.screen)||"")},update(C){const B=v();w.takeRecords().length&&(c=!0),B!==M&&(M=B,_=C,document.body.style.cursor="",g==null||g.classList.remove("crt-hover"),g=null,A()),(B==null?void 0:B.id)==="end"&&C-_<2e4&&C-d>200&&(c=!0);const z=b(B)?1e3/60:1e3/30;B&&!b(B)&&(c=!0),u&&B&&c&&!h&&(B!==m||C-d>=z-1)&&S(B)}}}class qM{constructor({installed:t=0,fueled:e=!1}={}){this.stages=[];for(let n=t;n<2;n++)this.stages.push({kind:"insertFuse",slot:n,duration:1.25,marker:.82,event:"insert"});e||this.stages.push({kind:"uncap",duration:.8,marker:.62,event:"capOpen"},{kind:"pour",duration:2.6,marker:.93,event:"fuel",sounds:[.28,.5,.72]},{kind:"recap",duration:.65,marker:.62,event:"capClose"}),this.stages.push({kind:"prime",duration:5}),this.duration=this.stages.reduce((n,s)=>n+s.duration,0),this.t=0,this.emitted=new Set}advance(t){this.t=Math.min(this.duration,this.t+t);const e=[];let n=0;for(const s of this.stages){const o=s.kind==="prime"?Array.from({length:5},(r,a)=>({at:n+a+.62,key:`pump${a}`,event:"pump",index:a})):s.event?[{at:n+s.duration*s.marker,key:`${s.event}${s.slot??""}`,event:s.event,slot:s.slot}]:[];for(const[r,a]of(s.sounds||[]).entries())o.push({at:n+s.duration*a,key:`liquid${r}`,event:"liquid"});o.sort((r,a)=>r.at-a.at);for(const r of o)this.t>=r.at&&!this.emitted.has(r.key)&&(this.emitted.add(r.key),e.push(r));n+=s.duration}return e}get done(){return this.t>=this.duration}get frame(){let t=0;for(const e of this.stages){if(this.t<t+e.duration||e===this.stages.at(-1)){const n=Math.max(0,this.t-t);return{...e,time:n,k:Math.min(1,n/e.duration),total:this.t/this.duration}}t+=e.duration}}}const YM={unscrew:{duration:2.8,grip:.22,commit:.72},pickupFuse:{duration:1.65,grip:.34,commit:.4}};class jM{constructor(t,e){this.level=t,this.objects=e,this.lastX=1/0,this.lastZ=1/0,this.cells=new Uint8Array(64*56),this.enabled=!0,this.stats={visible:0,total:e.length}}update(t){if(!this.enabled){this.objects.forEach(h=>h.visible=!0);return}const{x:e,z:n}=t.position;if(Math.abs(e-this.lastX)<1e-6&&Math.abs(n-this.lastZ)<1e-6)return;this.lastX=e,this.lastZ=n,this.cells.fill(0);const s=Math.floor(e),o=Math.floor(n);if(!this.level.open(s,o)){this.objects.forEach(h=>h.visible=!0);return}const r=new Map,a=[[s,o,-Math.PI,Math.PI]],l=(h,u,f,d)=>{if(Math.hypot(h-e,u-n)<1e-5||Math.hypot(f-e,d-n)<1e-5)return[[-Math.PI,Math.PI]];let m=Math.atan2(u-n,h-e),x=Math.atan2(d-n,f-e);return m>x&&([m,x]=[x,m]),x-m>Math.PI?[[-Math.PI,m],[x,Math.PI]]:[[m,x]]};for(let h=0;h<a.length;h++){const[u,f,d,m]=a[h];if(u<0||u>=64||f<0||f>=56)continue;const x=f*64+u;if(this.cells[x]=1,!this.level.open(u,f))continue;const g=r.get(x)||[];let p=[[d,m]];for(const[M,_]of g){const v=[];for(const[A,b]of p)_<=A||M>=b?v.push([A,b]):(A<M&&v.push([A,M]),b>_&&v.push([_,b]));p=v}if(p.length){g.push(...p),r.set(x,g);for(const[M,_,v,A,b,y]of[[u-1,f,u,f,u,f+1],[u+1,f,u+1,f,u+1,f+1],[u,f-1,u,f,u+1,f],[u,f+1,u,f+1,u+1,f+1]])for(const[E,w]of l(v,A,b,y))for(const[S,L]of p){const U=Math.max(S,E),R=Math.min(L,w);R-U>1e-7&&a.push([M,_,U,R])}}}let c=0;for(const h of this.objects){const u=h.geometry.boundingBox;let f=!1;for(let d=Math.max(0,Math.floor(u.min.z)-1);d<=Math.min(55,Math.floor(u.max.z)+1)&&!f;d++)for(let m=Math.max(0,Math.floor(u.min.x)-1);m<=Math.min(63,Math.floor(u.max.x)+1);m++)if(this.cells[d*64+m]){f=!0;break}h.visible=f,f&&c++}this.stats.visible=c}}function KM({player:i,game:t,look:e,pause:n,closeNote:s,throwItem:o,siege:r,mapPoint:a}){const l=document.getElementById("touch-controls"),c=document.getElementById("rotate-device"),h=matchMedia("(pointer: coarse)");let u=h.matches,f="",d=null,m=null,x=null;const g={KeyF:"M6 3l10 15M5 3h3M15 18l3 3M9 19l-2 2M18 13l3-1",KeyE:"M8 20V10a2 2 0 014 0v3-8a2 2 0 014 0v9l2-3a2 2 0 013 2l-3 7H8l-4-7a2 2 0 013-2l1 1",KeyQ:"M11 3v7L8 7C5 7 3 12 3 17s6 5 8 1M13 3v7l3-3c3 0 5 5 5 10s-6 5-8 1M8 21L20 3",KeyV:"M8 17c0 4 5 4 6 0 1-3 5-4 5-9a7 7 0 00-14 0M9 9a3 3 0 016 0c0 3-4 3-4 6M2 12v4M22 10v7",KeyC:"M11 5a2 2 0 104 0 2 2 0 00-4 0M13 9l-5 4 6 2 3 6M8 13l-3 7h6M12 10l5 3h4",ShiftLeft:"M13 4a2 2 0 104 0 2 2 0 00-4 0M14 8l-3 6 5 3 2 5M11 14l-4 6H3M12 10l-4-1-3 4M14 9l3 3h4",Tab:"M12 3v3M12 18v3M3 12h3M18 12h3M8 8l8 8M8 16l8-8",throw:"M3 19l5-3 3 4M8 16C5 2 18 1 20 11M17 8l3 3 2-4",pause:"M8 5v14M16 5v14",close:"M5 5l14 14M19 5L5 19",Digit4:"M3 13h3l3-7 5 14 3-9h4"};for(const R of l.querySelectorAll("button")){const k=R.dataset.key||R.dataset.action,X=R.textContent;g[k]&&(R.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${g[k]}"/></svg><span>${X}</span>`)}const p=new Map,M=new Map,_=l.querySelector(".touch-stick"),v=l.querySelector(".touch-thumb"),A=(R,k)=>window.dispatchEvent(new KeyboardEvent(k?"keydown":"keyup",{code:R,bubbles:!0})),b=()=>{for(const R of M.values())A(R,!1);M.clear(),p.clear(),d=m=null,x=null,i.touchMove={x:0,y:0},v.style.transform="translate(0,0)",l.querySelectorAll(".pressed").forEach(R=>R.classList.remove("pressed"))},y=document.getElementById("brief"),E=y.innerHTML,w=()=>{u=h.matches,document.body.classList.toggle("touch-device",u),b(),y.innerHTML=u?"<h4>ДОЖДИСЬ ЛИФТА</h4><p><b>1</b> — переход, <b>2</b> — люк, <b>3</b> — дверь слева. Закрыт один вход.</p><p>Упрись в заслонку лицом. У люка — <b>ТИХО</b>. В передышках открывай: привод восстановится. <b>ДАТЧИК</b> тратит питание.</p>":E,document.querySelector("#note .close").textContent=u?"Время идёт. Закрыть — кнопка справа сверху.":"[E] закрыть · время идёт"};h.addEventListener("change",w),w();const S=R=>{const k=a(R),X=_.getBoundingClientRect(),C=X.width*.34;let B=(k.x-X.left-X.width/2)/C,z=(k.y-X.top-X.height/2)/C;const K=Math.hypot(B,z);K>1&&(B/=K,z/=K),i.touchMove={x:Math.abs(B)<.1?0:B,y:Math.abs(z)<.1?0:z},v.style.transform=`translate(${B*C}px,${z*C}px)`};document.addEventListener("pointerdown",R=>{var z,K;if(!u||!["play","note"].includes(t.state)||R.pointerType!=="touch")return;const k=a(R),X=document.elementFromPoint(k.x,k.y),C=X==null?void 0:X.closest("#touch-controls button"),B=X==null?void 0:X.closest(".touch-stick");if(C){R.preventDefault(),R.stopImmediatePropagation(),C.setPointerCapture(R.pointerId),p.set(R.pointerId,C),C.classList.add("pressed");const Z=C.dataset.action,rt=C.dataset.key;Z==="pause"?n():Z==="close"?s():Z==="throw"?o():rt&&(M.set(R.pointerId,rt),A(rt,!0))}else B&&t.state==="play"&&d===null?(R.preventDefault(),R.stopImmediatePropagation(),d=R.pointerId,_.setPointerCapture(R.pointerId),S(R)):t.state==="play"&&m===null&&(R.preventDefault(),m=R.pointerId,x={x:R.clientX,y:R.clientY},(K=(z=R.target).setPointerCapture)==null||K.call(z,R.pointerId))},!0),document.addEventListener("pointermove",R=>{R.pointerId===d?(R.preventDefault(),S(R)):R.pointerId===m&&x&&(R.preventDefault(),e(R.clientX-x.x,R.clientY-x.y),x={x:R.clientX,y:R.clientY})},{passive:!1,capture:!0});const L=R=>{var X;R.pointerId===d&&(d=null,i.touchMove={x:0,y:0},v.style.transform="translate(0,0)"),R.pointerId===m&&(m=null,x=null);const k=M.get(R.pointerId);k&&(A(k,!1),M.delete(R.pointerId)),(X=p.get(R.pointerId))==null||X.classList.remove("pressed"),p.delete(R.pointerId)};for(const R of["pointerup","pointercancel","lostpointercapture"])document.addEventListener(R,L,!0);l.addEventListener("click",R=>R.preventDefault()),addEventListener("blur",b),addEventListener("resize",b),document.addEventListener("visibilitychange",()=>{document.hidden&&b()});let U=null;return document.addEventListener("touchstart",R=>{var k;u&&t.state==="note"&&!R.target.closest("#touch-controls")&&(U=(k=R.touches[0])==null?void 0:k.clientY)},{passive:!0}),document.addEventListener("touchmove",R=>{var X;if(U===null||t.state!=="note")return;const k=(X=R.touches[0])==null?void 0:X.clientY;k!==void 0&&(R.preventDefault(),document.querySelector("#note .paper").scrollTop+=U-k,U=k,document.dispatchEvent(new Event("scroll")))},{passive:!1}),document.addEventListener("touchend",()=>U=null),{get enabled(){return u},release:b,update(){const R=u&&innerHeight>innerWidth;c.classList.toggle("hidden",!R),R&&t.state==="play"&&n(),f!==t.state&&(f=t.state,b()),l.classList.toggle("hidden",!u||R||!["play","note"].includes(f)),l.classList.toggle("reading",f==="note"),l.querySelector(".touch-siege").classList.toggle("hidden",!r.active||f!=="play"),l.querySelector('[data-key="KeyC"]').classList.toggle("selected",i.crouch);for(const[k,X]of[["KeyQ",i.holding],["KeyV",i.listening]])l.querySelector(`[data-key="${k}"]`).classList.toggle("selected",!!X)}}}const ut=i=>document.getElementById(i),Yt=(i,t,e)=>new D(i,t,e),Pd=[];let Ao=!1;Ya.onProgress=(i,t,e)=>{Nn.progress("Загрузка материалов",t/e,`Материалы: ${t} / ${e}`)};Ya.onError=i=>Pd.push(i);Ya.onLoad=()=>{if(Pd.length)Nn.fail("Некоторые материалы не загрузились. Проверьте соединение и повторите загрузку.",()=>location.reload());else{Ao=!0,Nn.saveAvailable(!!tl());let i=!1;try{i=sessionStorage.getItem("echo.new-session")==="1",sessionStorage.removeItem("echo.new-session")}catch{}i?Oa(!1):Nn.assetsReady()}};const Le=new t2({antialias:!0,powerPreference:"high-performance"});Le.setPixelRatio(Math.min(devicePixelRatio,1.5));Le.setSize(innerWidth,innerHeight);Le.setClearColor(0);ut("app").appendChild(Le.domElement);const si=new id,Bt=new Gn(80,innerWidth/innerHeight,.05,120);Bt.rotation.order="YXZ";const En=new ud(Le),gh=new fd(si,Bt);En.addPass(gh);const zn=new hi(si,Bt,innerWidth,innerHeight);zn.output=hi.OUTPUT.Default;zn.normalMaterial=new Ue({vertexShader:`varying vec3 vN; varying vec3 vV;
    void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalMatrix * normal; vV = -mv.xyz; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vN; varying vec3 vV;
    void main() { vec3 n = normalize(vN); if (dot(n, vV) < 0.0) n = -n; gl_FragColor = vec4(n * 0.5 + 0.5, 1.0); }`,side:ui,blending:sn});zn.blendIntensity=.85;zn.updateGtaoMaterial({radius:.55,distanceExponent:1.4,thickness:1.2,scale:1,samples:12});zn.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12});{const i=zn.setSize.bind(zn);zn.setSize=(t,e)=>i(Math.max(1,t>>1),Math.max(1,e>>1)),zn.setSize(innerWidth*Le.getPixelRatio(),innerHeight*Le.getPixelRatio())}En.addPass(zn);const ae=new VM,yr=new fd(ae.scene,Bt);yr.clear=!1;yr.clearDepth=!0;const _i=new I2(.42);_i.uniforms.uRed={value:0};_i.compFsMaterial.fragmentShader=`
  uniform float damp; uniform float uRed;
  uniform sampler2D tOld; uniform sampler2D tNew;
  varying vec2 vUv;
  vec4 when_gt(vec4 x, float y) { return max(sign(x - y), 0.0); }
  void main() {
    vec4 texelOld = texture2D(tOld, vUv);
    vec4 texelNew = texture2D(tNew, vUv);
    // the picture here is dim (linear values mostly under 0.1), so the cut-off that
    // ends a trail works on brightness, low enough for trails to show at all
    float lo0 = dot(texelOld.rgb, vec3(0.3, 0.55, 0.15));
    texelOld *= damp * step(0.035, lo0);
    // the copy shows where it is brighter than what is there now — the trail —
    // judged by its red (which it keeps), and drawn as it is, tint and all
    float lo = max(texelOld.r, dot(texelOld.rgb, vec3(0.3, 0.55, 0.15))), ln = dot(texelNew.rgb, vec3(0.3, 0.55, 0.15));
    texelOld.gb *= 1.0 - uRed;
    gl_FragColor = vec4(lo > ln ? texelOld.rgb : texelNew.rgb, 1.0);
  }`;_i.compFsMaterial.needsUpdate=!0;En.addPass(_i);En.addPass(yr);const zs=new Io(new mt(innerWidth,innerHeight),.26,.6,.3);{const i=zs.setSize.bind(zs);zs.setSize=(t,e)=>i(Math.max(1,t>>1),Math.max(1,e>>1)),zs.setSize(innerWidth*Le.getPixelRatio(),innerHeight*Le.getPixelRatio())}En.addPass(zs);const qe=new Vh({uniforms:{tDiffuse:{value:null},uTime:{value:0},uInterface:{value:0},uGlitch:{value:0},uWhite:{value:0},uFear:{value:0},uFlash:{value:0},uRes:{value:new mt(innerWidth,innerHeight)},uBlur:{value:new mt},uGlassOffset:{value:new mt},uExposure:{value:1},uSmear:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uInterface; uniform float uTime, uFear, uFlash, uGlitch, uWhite; uniform vec2 uRes; uniform vec2 uBlur; uniform vec2 uGlassOffset; uniform float uExposure; uniform float uSmear; varying vec2 vUv;
    float rand(vec2 c){ return fract(sin(dot(c, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 c = vUv - 0.5;
      // wide body-camera lens: strong barrel, rescaled so the frame stays filled
      float kb = 0.3 + uFear * 0.12;
      vec2 uv = 0.5 + c * (1.0 + kb * dot(c, c)) / (1.0 + kb * 0.25);
      uv.x += sin(uv.y * 40.0 + uTime * 30.0) * 0.0015 * uFear * uFear;
      float band = floor(uv.y * 34.0) + floor(uTime * 24.0) * 7.0;
      uv.x += (rand(vec2(band, 1.0)) - 0.5) * 0.12 * uGlitch * step(0.62, rand(vec2(band, 2.0)));
      uv.y += (rand(vec2(floor(uTime * 24.0), 3.0)) - 0.5) * 0.03 * uGlitch;
      // cheap-lens fringing, growing toward the edges; motion smear along the camera's swing
      vec2 ca = c * (0.0015 + dot(c, c) * (0.021 + uSmear * uSmear * 0.03) + uFear * 0.006 + uGlitch * 0.03); // the fringe tears wider in a psychosis
      ca *= mix(1.0, 0.08, uInterface);
      vec3 col;
      if (dot(uBlur, uBlur) < 1e-7) col = vec3(texture2D(tDiffuse, uv + ca).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv - ca).b);
      else {
        col = vec3(0.0);
        for (int i = 0; i < 7; i++) {
          vec2 o = uBlur * (float(i) / 6.0 - 0.5);
          col += vec3(texture2D(tDiffuse, uv + o + ca).r, texture2D(tDiffuse, uv + o).g, texture2D(tDiffuse, uv + o - ca).b);
        }
        col /= 7.0;
      }
      col *= uExposure;
      // phosphor bleed: the beam spreads a little along the scanline
      vec2 px = vec2(1.0 / uRes.x, 0.0);
      vec3 bleed = (texture2D(tDiffuse, uv + px * 1.5).rgb + texture2D(tDiffuse, uv - px * 1.5).rgb) * 0.5;
      bleed += (texture2D(tDiffuse, uv + px * 4.0).rgb + texture2D(tDiffuse, uv - px * 4.0).rgb) * 0.25;
      col = col + max(bleed - col, 0.0) * 0.45;
      // halation: bright light picks up a warm fringe
      float hl = max(max(bleed.r, bleed.g), bleed.b);
      col += vec3(0.07, 0.025, 0.01) * smoothstep(0.25, 0.9, hl);
      float vig = mix(1.0, smoothstep(0.92, 0.12, length(c - uGlassOffset) * (1.0 + uFear * 0.6)), 0.85);
      col *= vig;
      // filmic shoulder before the tube eats its share of the light
      col = col * (1.0 + col * 0.15) / (1.0 + col * 0.6);
      col *= 1.02;
      // lift the mid-greys (black stays black: silence stays dark)
      col = pow(max(col, 0.0), vec3(0.84));
      // high-res CRT: scanlines, aperture-grille phosphors, slow refresh bar, faint interlace
      float sl = 0.5 + 0.5 * sin(gl_FragCoord.y * 3.14159 * 0.5);
      float slDepth = mix(0.38, 0.24, smoothstep(0.1, 0.7, dot(col, vec3(0.33))));
      slDepth *= mix(1.0, 0.55, uInterface);
      col *= ((1.0 - slDepth) + slDepth * 2.0 * sl * 0.92) * (1.0 + slDepth * 0.25);
      float m3 = mod(gl_FragCoord.x, 3.0);
      vec3 mask = m3 < 1.0 ? vec3(1.0, 0.84, 0.84) : m3 < 2.0 ? vec3(0.84, 1.0, 0.84) : vec3(0.84, 0.84, 1.0);
      col *= mix(vec3(1.0), mask, 0.8) * 1.08;
      float bar = smoothstep(0.14, 0.0, abs(fract(vUv.y * 0.6 - uTime * 0.07) - 0.5));
      col *= 1.0 + bar * 0.08;
      col *= 1.0 - 0.025 * step(0.5, fract(gl_FragCoord.y * 0.25 + floor(uTime * 30.0) * 0.5));
      col += (rand(vUv * uRes + fract(uTime * 7.13)) - 0.5) * (0.016 + uFear * 0.04) * mix(1.0, 0.22, uInterface);
      // tube corners and the dark glass at the very edge
      // The glass lip sits closer than the vignette; the outer bezel stays fixed.
      vec2 cc = abs(uv - 0.5 - uGlassOffset * 0.45) * 2.0;
      float corner = smoothstep(1.0, 0.93, max(cc.x, cc.y) + pow(min(cc.x, cc.y), 6.0) * 0.06);
      float rim = min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y));
      corner *= smoothstep(0.0, 0.012, rim);
      col *= corner;
      // grade: drained and cold in the shadows, near-neutral in the light;
      // blood keeps its colour while everything else is drained
      float gl = dot(col, vec3(0.3, 0.55, 0.15));
      float redness = smoothstep(0.015, 0.09, col.r - max(col.g, col.b));
      col = mix(vec3(gl), col, mix(0.42, 1.15, redness));
      vec3 shadowT = vec3(0.86, 0.97, 1.08), lightT = vec3(1.03, 1.0, 0.95);
      col *= mix(shadowT, lightT, smoothstep(0.05, 0.6, gl));
      // soft toe: deep shadow keeps a trace of shape instead of crushing to black
      col = col * 1.02 + vec3(0.004) * smoothstep(0.0, 0.03, dot(col, vec3(0.33)));
      float lum = max(max(col.r, col.g), col.b);
      col = mix(col, vec3(lum * 1.4 + 0.25, 0.0, 0.0), uFlash * 0.8);
      col = mix(col, vec3(1.0, 0.92, 0.9) - col * 0.6, uWhite);
      gl_FragColor = vec4(col, 1.0);
    }`}),Kh=new D2(Math.max(1,innerWidth*Le.getPixelRatio()),Math.max(1,innerHeight*Le.getPixelRatio()));En.addPass(Kh);const Za=new an(1,1,{type:Mn}),bi=XM(()=>.3+(F.state==="menu"?0:qe.uniforms.uFear.value*.12)),rs=new Vh({uniforms:{tDiffuse:{value:null},uInterface:{value:null},uBackground:{value:null},uCachedBackground:{value:0},uShowInterface:{value:1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform sampler2D uInterface; uniform sampler2D uBackground; uniform float uCachedBackground; uniform float uShowInterface; varying vec2 vUv;
    void main() {
      vec4 world = uCachedBackground > 0.5 ? texture2D(uBackground, vUv) : texture2D(tDiffuse, vUv);
      vec4 ui = texture2D(uInterface, vUv);
      ui.a *= uShowInterface;
      // Blend DOM scrims in display space, then return to the linear pipeline.
      vec3 displayWorld = pow(max(world.rgb, vec3(0.0)), vec3(1.0 / 2.2));
      vec3 displayUI = pow(max(ui.rgb, vec3(0.0)), vec3(1.0 / 2.2));
      gl_FragColor = vec4(pow(mix(displayWorld, displayUI, ui.a), vec3(2.2)), 1.0);
    }`});rs.uniforms.uInterface.value=bi.texture;rs.uniforms.uBackground.value=Za.texture;rs.enabled=!1;En.addPass(rs);En.addPass(qe);En.addPass(new dd);const qs=new ud(Le,new an(innerWidth,innerHeight,{type:Mn,depthBuffer:!1}));qs.setPixelRatio(1);qs.addPass(rs);qs.addPass(qe);qs.addPass(new dd);addEventListener("resize",()=>{!innerWidth||!innerHeight||(Bt.aspect=innerWidth/innerHeight,Bt.updateProjectionMatrix(),Le.setSize(innerWidth,innerHeight),En.setSize(innerWidth,innerHeight),qs.setSize(innerWidth,innerHeight),qe.uniforms.uRes.value.set(innerWidth,innerHeight))});const ft=new Z2,oe=new TM(si),Pn=new wM(si),Rd=[];si.traverse(i=>{i.userData.staticBatch&&Rd.push(i)});const _r=new jM(oe,Rd),Qa=G2();si.add(Qa);ft.occlusion=i=>oe.occlusion(Bt.position,i);let Dd=1;const F={state:"menu",flags:{},time:0,deaths:0,checkpoint:null,fear:0,psychosis:0,noise(i,t){const e=t.source==="player"?Dd:1;if(be.emit(i,{radius:t.visual??t.radius,speed:t.speed??11,strength:(t.strength??1)*e,decay:t.decay??.8,color:t.color??Zt.player}),t.source&&Mt.active&&Mt.hear(i,t.radius,t.source,t.kind,q.pos),t.source==="player"&&t.kind==="click"&&Mt.active&&!Xt.active&&Mt.state!=="chase"){const n=Mt.pos.distanceTo(Yt(q.pos.x,0,q.pos.z));n>6&&n<28&&Math.random()<.35&&Dn(.4+Math.random()*.35,()=>{Mt.active&&(ft.monsterClick(Mt.headWorld),be.emit(Mt.headWorld.clone(),{radius:8,speed:13,strength:.9,decay:.6,color:Zt.monster}),F.flags.answerHint||(F.flags.answerHint=!0,Dn(1.2,()=>F.hint("Твой щелчок вернулся. Не оттуда, откуда должен. [V] — вслушайся.",4.5))))})}t.source==="player"&&Xt&&Xt.active&&Xt.heard(t.radius)},hint(i,t=4.5,e=!1){if(e){Fa.length=0,yo=0,ut("hint").textContent=i,ut("hint").style.opacity=1,yo=t;return}Fa.push({text:i,dur:t})}},Is=[],Dn=(i,t)=>Is.push({t:i,fn:t});function ZM(i){for(let t=Is.length-1;t>=0;t--)if(Is[t].t-=i,Is[t].t<=0){const e=Is[t].fn;Is.splice(t,1),e()}}const q=new CM(Bt,oe,ft,F);q.vm=ae;let xh=0;ae.onTouch=i=>{xh>0||(xh=1.2,ft.play("flesh",i,{gain:.2,rate:1.9,wet:.2,vary:.1}),be.emit(i,{radius:1.3,speed:4,strength:.7,decay:1.4,color:Zt.player}))};const Mt=new DM(si,oe,ft);Mt.onKill=()=>xy();Mt.onWise=()=>{F.flags.wiseHint||(F.flags.wiseHint=!0,F.hint("Оно больше не идёт на камни. Оно идёт туда, откуда их бросают.",4.5,!0))};const ii=new WM({level:oe,audio:ft,game:F,player:q,scene:si});ii.build();ii.monster=Mt;let pf=!1;Mt.onChase=i=>{i&&(q.shake=Math.max(q.shake||0,.8),pf||(pf=!0,F.hint("Оно гонится. Беги [Shift], захлопни дверь, спрячься в шкафчик или уйди в вентканал.",5,!0)))};Mt.onBash=i=>{q.shake=Math.max(q.shake||0,Math.max(0,1-i.center.distanceTo(Bt.position)/9))};const QM=()=>document.getElementById("radar-c").getContext("2d");let ur=0,Zh=null;const JM={show(i){ut("hud").classList.toggle("siege-active",i),ut("siege").classList.toggle("hidden",!i),ut("brief").classList.toggle("hidden",!i),i&&Dn(14,()=>ut("brief").classList.add("hidden")),i||ut("radar").classList.add("hidden")},update(i){const t=["A","B","C"].find(s=>i.shut[s]),e=Math.min(1,i.t/Ca);ut("sg-lift").style.width=`${e*100}%`,ut("sg-floor").textContent=i.arrived?"ЗДЕСЬ":i.stalled?"СТОП":`${Math.ceil(i.remaining)} с`;const n=s=>i.broken[s]>0?"ВЫРВАНА":`${Math.ceil(i.hp[s])}%`;ut("sg-power").style.width=`${t?i.hp[t]:0}%`,ut("sg-power").classList.toggle("low",t&&i.hp[t]<30),ut("sg-pw").textContent=t==="A"?"ДВЕРЬ":t==="B"?"ЛЮК":t==="C"?"СЛЕВА":"—",ut("sg-charge").style.width=`${i.power}%`,ut("sg-charge").classList.toggle("low",i.power<25),ut("sg-charge-value").textContent=i.powerLocked?"—":`${Math.ceil(i.power)}%`;for(const[s,o]of["A","B","C"].entries())ut(`sg-${o}`).textContent=`${["ДВЕРЬ","ЛЮК","СЛЕВА"][s]} ${i.shut[o]?"▼":"▲"} ${n(o)} [${s+1}]`,ut(`sg-${o}`).classList.toggle("shut",i.shut[o]);ut("sg-warn").textContent=i.phase==="inside"&&i.monsterInHall?"ОНО В ХОЛЛЕ":i.phase==="squeeze"?"ЛЕЗЕТ ВНУТРЬ":i.stalled?"ЛИФТ ВСТАЛ · КНОПКА ВЫЗОВА":i.powerLocked?"ПРИВОД ОСТЫВАЕТ":i.bracing?"ПОДПИРАЕШЬ ЗАСЛОНКУ":i.phase==="ram"?i.route==="A"?"БЬЁТСЯ В ДВЕРЬ":i.route==="B"?"БЬЁТСЯ В ЛЮК":"БЬЁТСЯ СЛЕВА":""}};function $M(i){const t=QM();t.clearRect(0,0,240,240);const e=s=>20+(s-2)/30*200,n=s=>40+(s+1)/21*160;t.strokeStyle="#2c4",t.lineWidth=1.5,t.strokeRect(e(4),n(3),e(13)-e(4),n(13)-n(3)),t.strokeRect(e(13),n(7),e(22)-e(13),n(10)-n(7)),t.strokeRect(e(22),n(3),e(32)-e(22),n(14)-n(3)),t.strokeRect(e(1),n(7),e(3)-e(1),n(16)-n(7)),t.strokeRect(e(3),n(7),e(4)-e(3),n(10)-n(7)),t.strokeRect(e(3),n(14),e(7)-e(3),n(16)-n(14)),t.setLineDash([4,3]),t.strokeRect(e(7.05),n(13),e(7.95)-e(7.05),n(19)-n(13)),t.setLineDash([]),t.fillStyle="#2c4",t.beginPath(),t.arc(e(q.pos.x),n(q.pos.z),3,0,7),t.fill(),i&&(t.fillStyle="#f33",t.shadowColor="#f33",t.shadowBlur=12,t.beginPath(),t.arc(e(i.pos.x),n(i.pos.z),6,0,7),t.fill(),t.shadowBlur=0)}let Xt=null;Xt=new UM({audio:ft,level:oe,game:F,player:q,monster:Mt,ui:JM});F.onLiftArrived=()=>gy();F.onLiftStall=()=>{pn&&pn.setGain(0,.15)};F.onLiftRestart=()=>{pn&&pn.setGain(1,.4)};oe.onShutter=(i,t)=>{const e=i.obj.position.clone();ft.play("door",e,{gain:.7,rate:t?1.15:1.3,wet:.5}),Dn(t?.95:.7,()=>ft.play("slam",e,{gain:t?.6:.3,rate:1.2,wet:.6}))};let Qh=+ut("sens").value,br=!1,Ja=!1;const Jh=Le.domElement;addEventListener("keydown",i=>{if(i.code==="Tab"&&(F.state==="play"||F.state==="note")&&i.preventDefault(),F.state==="play"&&q.keys.add(i.code),!i.repeat)if(F.state==="play"){if(i.code==="Escape"){t0();return}if(q.fallT>0)return;if(i.code==="KeyF"&&!ae.work&&q.click(),i.code==="KeyC"&&!(q.crouch&&oe.ceilAt(Math.floor(q.pos.x),Math.floor(q.pos.z))<1.7)&&(q.crouch=!q.crouch),i.code==="KeyE"&&zd(),i.code==="KeyG"&&!ae.work&&ii.throwClock(Bt)&&ae.throw("clock"),Xt&&Xt.active&&["Digit1","Digit2","Digit3","Digit4"].includes(i.code)){ut("brief").classList.add("hidden");const t={Digit1:"A",Digit2:"B",Digit3:"C"}[i.code];if(t){const e=oe.items.find(n=>n.type===`shutter${t}`);e&&e.pos.distanceTo(Bt.position)<3&&ae.act("press",e.pos),Xt.toggle(t)}if(i.code==="Digit4"){const e=Xt.ping();e&&(Zh=e,ur=3,ut("radar").classList.remove("hidden"))}}}else F.state==="note"&&(i.code==="KeyE"||i.code==="Escape")&&$h()});addEventListener("keyup",i=>q.keys.delete(i.code));addEventListener("blur",()=>q.keys.clear());Jh.addEventListener("mousedown",i=>{F.state!=="play"&&F.state!=="note"||q.fallT>0||(br||($a(),Ja=!0),i.button===0&&F.state==="play"&&br&&!ae.work&&(q.stones>0&&!q.frozen&&ae.throw(),q.throwStone(si)),i.button===2&&q.keys.add("Mouse2"))});addEventListener("mouseup",i=>{i.button===2&&q.keys.delete("Mouse2"),Ja=!1});addEventListener("contextmenu",i=>i.preventDefault());addEventListener("mousemove",i=>{F.state!=="play"&&F.state!=="note"||(br||Ja)&&q.look(i.movementX,i.movementY,.0012*Qh)});document.addEventListener("pointerlockchange",()=>{br=document.pointerLockElement===Jh,!br&&(F.state==="play"||F.state==="note")&&t0()});function $a(){if(!(mr!=null&&mr.enabled))try{const i=Jh.requestPointerLock();i&&i.catch&&i.catch(()=>{})}catch{}}ut("sens").addEventListener("input",i=>Qh=+i.target.value);const mf={high:{pr:1.5,smaa:!0,dust:!0,bloom:!0,ao:!0},mid:{pr:1,smaa:!0,dust:!0,bloom:!0,ao:!0},low:{pr:.75,smaa:!1,dust:!1,bloom:!1,ao:!1}};function Ld(i){const t=mf[i]||mf.high;Le.setPixelRatio(Math.min(devicePixelRatio,t.pr)),En.setPixelRatio&&En.setPixelRatio(Math.min(devicePixelRatio,t.pr)),En.setSize(innerWidth,innerHeight),Kh.enabled=t.smaa,zs.enabled=t.bloom,zn.enabled=t.ao,hh(t.ao?1:0),Qa.visible=t.dust,document.querySelectorAll(".quality").forEach(e=>e.value=i);try{localStorage.setItem("echo.quality",i)}catch{}}let Id="high";try{Id=localStorage.getItem("echo.quality")||"high"}catch{}document.querySelectorAll(".quality").forEach(i=>i.addEventListener("change",t=>Ld(t.target.value)));ut("vol").addEventListener("input",i=>{ft.ctx&&ft.master&&ft.setMaster(+i.target.value,.05)});const Fa=[];let yo=0;function ty(i){if(yo-=i,yo<=0&&(ut("hint").style.opacity=0,yo<-.8&&Fa.length)){const t=Fa.shift();ut("hint").textContent=t.text,ut("hint").style.opacity=1,yo=t.dur}}let vh=null,lc=0;function ey(i){const t=oe.roomAt(q.pos.x,q.pos.z);t&&t!==vh&&(vh=t,_h.has(t.name)||(ut("location").textContent=t.name.toUpperCase(),ut("location").style.opacity=1,lc=2.5),dy(t.name)),lc-=i,lc<=0&&(ut("location").style.opacity=0)}function ny(){const i=F.flags;return i.arrived?"Войди в лифт.":Xt!=null&&Xt.stalled?"Лифт встал. Удерживай [E] у кнопки вызова, чтобы перезапустить.":i.called?"Дождись лифта. Не дай ему войти в холл.":i.powered?"Лифтовый холл, запад от генераторной: вызвать лифт.":i.fuseA&&i.fuseB?"Генераторная, север от атриума: поставить ПН-2 и запустить.":!i.readMap&&!i.fuseA?"Выйти из медблока. Коридор — на север.":i.fuseA?!i.card&&!i.labOpen?"Карта доступа — кабинет 9, за затопленным переходом (восток).":i.fuseB?"":"Второй ПН-2 — бокс № 2 безэхового блока.":"ПН-2 — шкаф на дальней стене архива (запад)."}function iy(){const i=F.flags;return i.called?null:i.powered?Yt(9.5,0,6):i.fuseA&&i.fuseB?Yt(32,0,9.6):i.fuseA?!i.card&&!i.labOpen?Yt(54.5,0,34):i.fuseB?null:Yt(53,0,8):Yt(2.5,0,18)}let fr=null,Mh=0,Ra=!1;function Ud(){fr=null,Mh=0,Ra=!1;const i=ut("objective");i.style.transition="none",i.classList.remove("visible"),i.setAttribute("aria-hidden","true"),i.offsetWidth,i.style.transition=""}function sy(){const i=ny();i!==fr&&(Ra=fr!==null&&!!i,fr=i,ut("objective-text").textContent=i),F.state==="play"&&Ra&&(Mh=F.time+6,Ra=!1);const t=q.keys.has("Tab"),e=F.state==="play"&&!!i&&(t||F.time<Mh),n=t?"Вспомнить":"Новая цель";ut("objective-caption").textContent!==n&&(ut("objective-caption").textContent=n),ut("objective").classList.toggle("visible",e),ut("objective").getAttribute("aria-hidden")!==String(!e)&&ut("objective").setAttribute("aria-hidden",String(!e))}function oy(){sy();const i=ut("m-breath");i.querySelector("i").style.width=`${q.breathCap*100}%`,i.classList.toggle("holding",q.holding),i.classList.toggle("low",q.breathCap<.25),i.style.opacity=q.holding||q.breathCap<.99?1:.25;const t=ut("m-stamina");t.querySelector("i").style.width=`${q.stamina*100}%`,t.style.opacity=q.stamina<.99?1:.25,ut("stones").textContent=[q.stones?`КАМНИ: ${q.stones}`:"",ii.held.length?`БУДИЛЬНИКИ: ${ii.held.length}`:""].filter(Boolean).join("   "),ut("stance").textContent=q.listening?"ВСЛУШИВАЕШЬСЯ":q.holding?"НЕ ДЫШИШЬ":q.hidden?q.hidden.low?"ПОД КРОВАТЬЮ":"В ШКАФЧИКЕ":q.crouch?"КРАДЁШЬСЯ":""}let as=null;const ss=Yt(54,1.3,24.6);function ry(){if(q.hidden)return q.hidden;const i=Bt.position,t=new D;Bt.getWorldDirection(t);let e=null,n=0;for(const o of oe.items){if(o.taken)continue;const r=o.pos.clone().sub(i),a=r.length();if(a>1.9)continue;const l=r.normalize().dot(t),c=l-a*.1;(l>.82||a<.75)&&c>n&&(n=c,e=o)}const s=oe.door("lab");return!e&&s.closed&&i.distanceTo(ss)<2&&(e={type:"labdoor"}),e}function ay(i){var e;if(!i)return"";const t=F.flags;switch(i.type){case"note":return"[E] Прочитать";case"stone":return q.stones>=5?"Больше не унести":"[E] Подобрать камень";case"fuseA":return(en==null?void 0:en.it)===i?"Выкручиваешь предохранитель…":"[E] Выкрутить ПН-2";case"fuseB":case"card":return`[E] Взять: ${i.name}`;case"panel":{if(t.powered)return"";if(!t.fuseA||!t.fuseB)return"Щиток генератора. Не хватает предохранителей.";const n=(te==null?void 0:te.it)===i?(e=te.generator)==null?void 0:e.frame:null;return n?n.kind==="insertFuse"?`Устанавливаешь ПН-2 · ${n.slot+1} / 2`:n.kind==="uncap"?"Открываешь канистру…":n.kind==="pour"?`Заливаешь топливо · ${Math.round(n.k*100)}%`:n.kind==="recap"?"Закрываешь канистру…":`Подкачка · ${Math.min(5,Math.floor(n.time)+1)} / 5 — громко`:"[держи E] Подготовить и запустить генератор"}case"call":return Xt.stalled?(te==null?void 0:te.it)===i?`Перезапуск · ${Math.min(100,Math.round(te.t/2*100))}%`:"[держи E] Перезапустить лифт":t.called?"":t.powered?"[E] Вызвать лифт":"Кнопка вызова. Нет питания.";case"cab":return t.arrived?(te==null?void 0:te.it)===i?"Закрываешь двери… Держи E":"[держи E] Закрыть двери и ехать наверх":"";case"labdoor":return t.card?te&&te.it.type==="labdoor"?`Открываешь медленно… ${Math.round(te.t/2.5*100)}%`:"[держи E] Приложить карту и открыть тихо":"Шлюз заперт. Нужна карта доступа.";case"locked":return"[E] Дёрнуть ручку";case"slam":{const n=oe.door(i.door);return n.broken?"Дверь выбита.":n.closed?"[E] Открыть дверь":"[E] Захлопнуть дверь (громко)"}case"locker":return i.low?q.hidden?"[E] Вылезти":"[E] Залезть под кровать":q.hidden?"[E] Выйти":"[E] Спрятаться в шкафчик";case"shutterA":return Xt.active?Xt.powerLocked?"Привод остывает…":`[E] ${Xt.shut.A?"Поднять":"Опустить"} заслонку двери`:"Пульт заслонки. Без питания.";case"shutterB":return Xt.active?Xt.powerLocked?"Привод остывает…":`[E] ${Xt.shut.B?"Открыть":"Закрыть"} люк вентиляции`:"Пульт люка вентиляции. Без питания.";case"shutterC":return Xt.active?Xt.powerLocked?"Привод остывает…":`[E] ${Xt.shut.C?"Поднять":"Опустить"} заслонку служебной двери`:"Пульт служебной двери. Без питания.";case"seismo":return Xt.active?Xt.pingCooldown>0?`Датчик заряжается · ${Math.ceil(Xt.pingCooldown)} с`:"[E] Сейсмодатчик (−8% питания)":"Сейсмодатчик. Экран мёртв."}return ii.prompt(i)||""}function Nd(i){i.taken=!0,i.obj.visible=!1,ft.pickup(),F.noise(i.pos.clone(),{radius:1.6,visual:1.5,source:"player",kind:"item",color:Zt.item,strength:.6})}let te=null,en=null,_o=null,yh=!1;const Sr={call:{need:2,ok:()=>Xt.stalled},cab:{need:1.6,ok:()=>F.flags.arrived},panel:{ok:()=>!F.flags.powered&&F.flags.fuseA&&F.flags.fuseB},labdoor:{need:2.5,ok:()=>F.flags.card}};function vi(){en&&!en.committed&&(en.it.obj.visible=!0),en=te=null,ae.work=null,q.actionLean=0,_o&&_o.setGain(0,.08),yh=!1,Pn.sync(F.flags)}function ly(i){const t=i.type==="fuseA"?"unscrew":"pickupFuse";en={it:i,kind:t,t:0,committed:!1,...YM[t]},ae.actT=ae.throwT=0,ae.work={kind:t,k:0,target:i.pos.clone(),normal:Yt(1,0,0)}}function cy(i){Nd(i),F.flags[i.type]=!0,i.type==="fuseA"?py():(Dn(1.6,()=>{if(!Mt.active||F.state!=="play")return;const t=Yt(53,0,15.5);ft.crash(Yt(53,4.3,15.5)),be.emit(Yt(53,4.3,15.5),{radius:16,speed:12,strength:1.4,color:Zt.monster}),Mt.spawn(t,"wander"),Mt.startChase(),F.hint("Сверху. Шлюз — и вниз, в вентканал за моргом.",4,!0)}),F.hint("Оба ПН-2. Генераторная — к северу от атриума."),Oo())}function hy(i){if(!en)return;const t=en;if(F.state!=="play"||q.hidden||Math.hypot(q.pos.x-t.it.pos.x,q.pos.z-t.it.pos.z)>1.8){vi();return}const e=t.t/t.duration;t.t=Math.min(t.duration,t.t+i);const n=t.t/t.duration;if(ae.work={kind:t.kind,k:n,target:t.it.pos.clone(),normal:Yt(1,0,0)},n>=t.grip&&(t.it.obj.visible=!1),t.kind==="unscrew")for(const s of[.35,.51,.63])e<s&&n>=s&&(ft.play("creak",t.it.pos,{gain:.2,rate:1.4,wet:.35}),F.noise(t.it.pos.clone(),{radius:2.3,visual:2.4,source:"player",kind:"item",color:Zt.item,strength:.35}));!t.committed&&n>=t.commit&&(t.committed=!0,cy(t.it)),n>=1&&(en=null,ae.work=null)}function uy(i){if(te){if(q.fallT>0){vi();return}if(F.state!=="play"){vi();return}if(as!==te.it&&!(as&&te.it.type==="labdoor"&&as.type==="labdoor")){vi();return}if(!q.keys.has("KeyE")){vi();return}if(te.t+=i,te.it.type==="call"||te.it.type==="cab"){if(te.tick-=i,te.tick<=0&&(te.tick=.55,ae.act("press",te.it.pos),ft.play("tick",te.it.pos,{gain:.25,rate:.8,wet:.3})),te.t>=Sr[te.it.type].need){const t=te.it.type;vi(),t==="call"?Xt.restartLift():Od()}return}if(te.generator){for(const s of te.generator.advance(i))s.event==="insert"?(F.flags.genInstalled=Math.max(F.flags.genInstalled||0,s.slot+1),ft.play("click",Pn.sockets[s.slot],{gain:.45,rate:.75,wet:.4}),F.noise(Pn.sockets[s.slot].clone(),{radius:2.2,visual:2.6,source:"player",kind:"item",color:Zt.item,strength:.45})):s.event==="fuel"?F.flags.genFueled=!0:s.event==="capOpen"||s.event==="capClose"?ft.play("click",Pn.funnel,{gain:.25,rate:s.event==="capOpen"?.7:.9,wet:.25}):s.event==="liquid"?F.noise(Pn.funnel.clone(),{radius:3,visual:2.5,source:"player",kind:"item",color:Zt.machine,strength:.3}):s.event==="pump"&&(ft.play("metal_heavy",ls,{gain:.8,rate:.9+Math.random()*.2,wet:.9}),F.noise(ls.clone(),{radius:7,visual:6,source:"player",kind:"door",color:Zt.machine,strength:.8}));const t=te.generator.frame;Pn.sync(F.flags,t);const e=t.kind==="insertFuse"?Pn.sockets[t.slot]:t.kind==="prime"?Pn.knob.getWorldPosition(Yt(0,0,0)):Pn.funnel;ae.work={...t,target:e.clone(),normal:Yt(0,0,1)};const n=t.kind==="pour"&&t.k>.2&&t.k<.86;n!==yh&&(n&&!_o&&(_o=ft.createLoop("loop_water",Pn.funnel,.16,{rate:1.5,ref:.6,roll:1.5})),_o&&_o.setGain(n?1:0,.1),yh=n),te.generator.done&&(vi(),kd());return}te.tick-=i,te.tick<=0&&(te.tick=.9,ae.act("push",ss),ft.play("door",ss,{gain:.18,rate:.7,wet:.4}),F.noise(ss.clone(),{radius:2.2,visual:2.5,source:"player",kind:"door",color:Zt.player,strength:.4})),te.t>=Sr[te.it.type].need&&(te=null,oe.setDoor("lab",!0),F.flags.labOpen=!0,ft.play("door",ss,{gain:.4,rate:.75,wet:.5}))}}function gf(i){const t=i.type;return t==="stone"?["take",i.pos,"stone"]:t==="fuseA"||t==="fuseB"?["take",i.pos,"fuse"]:t==="card"?["take",i.pos,"card"]:t==="clock"?["take",i.pos,"clock"]:t==="phone"?["take",i.pos]:t==="note"?["read",i.pos]:t==="locked"?["rattle",i.pos]:t==="panel"&&Sr.panel.ok()?["pump",i.pos]:["door","slam","locker","labdoor","cab"].includes(t)?["push",i.pos]:["press",i.pos]}function zd(){var e;if(q.fallT>0)return;const i=as;if(!i||i.taken||en||te)return;if(["fuseA","fuseB","panel"].includes(i.type)&&Math.hypot(q.pos.x-i.pos.x,q.pos.z-i.pos.z)>1.15){F.hint("Подойди ближе.",2);return}if(i.type==="fuseA"||i.type==="fuseB"){ly(i);return}if(Sr[i.type]&&Sr[i.type].ok()){if(te={it:i,t:0,tick:.25},i.type==="panel"){te.generator=new qM({installed:F.flags.genInstalled||0,fueled:!!F.flags.genFueled}),ae.actT=ae.throwT=0;const n=te.generator.frame;ae.work={...n,target:(n.kind==="insertFuse"?Pn.sockets[n.slot]:Pn.funnel).clone(),normal:Yt(0,0,1)}}else ae.act(...gf(i));return}ae.act(...gf(i));const t=F.flags;switch(i.type){case"note":((e=F.flags).notes||(e.notes={}))[i.note]=!0,fy(i.note),i.note===1&&(t.readMap=!0);break;case"stone":if(q.stones>=5)return;i.taken=!0,i.obj.visible=!1,q.stones++,ft.impact(i.pos,.15),t.stoneHint||(t.stoneHint=!0,F.hint("Камень. [ЛКМ] — бросить туда, где ты не стоишь."));break;case"card":Nd(i),t.card=!0,Dn(3.2,()=>{!Mt.active||F.state!=="play"||(Mt.pos.distanceTo(Yt(q.pos.x,0,q.pos.z))>10&&(Mt.spawn(Yt(43.2,0,27.5),"wander"),ft.crash(Yt(43,2.5,27.5))),Mt.startChase(),F.hint("Оно в переходе. Кабинет — тупик. Прячься.",4,!0))}),F.hint("Карта. Шлюз безэхового блока — в конце затопленного перехода."),Oo();break;case"panel":!t.powered&&t.fuseA&&t.fuseB&&kd();break;case"call":t.powered&&!t.called&&Dn(.23,()=>{F.state==="play"&&my()});break;case"cab":t.arrived&&Od();break;case"slam":{const n=oe.toggleSlam(i.door);if(n===null)break;n?(ft.play("slam",i.pos,{gain:1,rate:1.1,wet:.8}),F.noise(i.pos.clone(),{radius:7,visual:6,source:"player",kind:"door",color:Zt.player,strength:1}),t.slamHint||(t.slamHint=!0,F.hint("Дверь задержит его на пару секунд. Не больше.",4))):(ft.play("door",i.pos,{gain:.4,rate:1.4,wet:.5}),F.noise(i.pos.clone(),{radius:2.5,visual:2,source:"player",kind:"door",color:Zt.player,strength:.5}));break}case"locker":if(q.hidden){if(q.unhide(),ut("slits").classList.add("hidden"),i.low)break;ft.play("door",i.pos,{gain:.35,rate:1.6,wet:.4}),F.noise(i.pos.clone(),{radius:2.5,visual:2,source:"player",kind:"door",color:Zt.player,strength:.5})}else{if(q.hide(i),i.low){ft.play("creak",i.pos,{gain:.25,rate:1.4,wet:.3}),F.noise(i.pos.clone(),{radius:1.8,visual:1.5,source:"player",kind:"crouch",color:Zt.player,strength:.4}),t.bedHint||(t.bedHint=!0,F.hint("Под кроватью тебя не видно. Но дыхание слышно — если оно встанет рядом, не дыши.",5));break}ut("slits").classList.remove("hidden"),ft.play("door",i.pos,{gain:.3,rate:1.7,wet:.4}),F.noise(i.pos.clone(),{radius:2.2,visual:2,source:"player",kind:"door",color:Zt.player,strength:.5}),t.lockerHint||(t.lockerHint=!0,F.hint("В шкафчике дыхание глуше. Но если оно встанет вплотную — не дыши.",5))}break;case"shutterA":case"shutterB":case"shutterC":Xt.active&&Xt.toggle(i.type.slice(-1));break;case"seismo":if(Xt.active){const n=Xt.ping();n&&(Zh=n,ur=3,ut("radar").classList.remove("hidden"))}break;case"clock":case"phone":ii.interact(i);break;case"locked":oe.rattle(i.door),ft.rattle(i.pos),F.noise(i.pos.clone(),{radius:5.5,visual:3.5,source:"player",kind:"door",color:Zt.player,strength:.8}),t.lockedHint||(t.lockedHint=!0,F.hint("Заперто. Ручка грохнула на весь коридор."));break;case"labdoor":t.card?(oe.setDoor("lab",!0),t.labOpen=!0,ft.door(ss),F.noise(ss.clone(),{radius:9,visual:10,source:"player",kind:"door",color:Zt.machine})):ft.impact(ss,.3);break}}function fy(i){ft.paper(),ut("note-title").textContent=ph[i].title,ut("note-body").textContent=ph[i].body,ut("note").classList.remove("hidden"),F.state="note",q.frozen=!0}function $h(){ut("note").classList.add("hidden"),F.state="play",q.frozen=!1,ft.paper()}const _h=new Set;function dy(i){if(_h.has(i))return;_h.add(i);const t=F.flags;if(i==="Коридор Б"&&!t.fuseA)for(let e=0;e<6;e++)Dn((2500+e*650)/1e3,()=>{if(F.state!=="play")return;const n=Yt(31.5,3.6,36+e*1.1);ft.monsterStep(n,.4),be.emit(n,{radius:2.5,speed:6,strength:.35,color:Zt.monster})});i==="Морг"&&!t.fuseA&&Dn(1.8,()=>{const e=Yt(42.2,1.2,37.5);ft.slam(e),be.emit(e,{radius:9,speed:10,strength:1.3,color:Zt.white})}),i==="Атриум"&&!t.readMap&&(F.hint("Высокий зал. На стойке регистрации — бумаги."),Dn(3,()=>ft.groan(Yt(32,6,10)))),i==="Архив"&&!t.fuseA&&Dn(2.5,()=>ft.whisper(Yt(3,1.6,20))),i==="Затопленный коридор"&&!t.waterHint&&(t.waterHint=!0,F.hint("Вода. Каждый шаг слышно вдвое дальше.")),i==="Безэховый блок"&&F.hint("Боксы. Второй открыт изнутри."),i==="Вентканал"&&F.hint("Вентканал. Только ползком — зато оно сюда не пролезет.",5)}function py(){F.hint("ПН-2, первый. Теперь — карта Ореховой.",3.5),Dn(2.6,()=>{const i=Yt(28,4.8,25);ft.crash(i),ft.monsterRoar(i),be.emit(i,{radius:34,speed:13,strength:1.4,decay:.5,color:Zt.monster}),Mt.spawn(Yt(28,0,25.6),"investigate"),Mt.goTo(Yt(7.5,0,27.5),"hunt"),F.hint("В атриуме что-то сорвалось с вентиляции. Тяжёлое. Живое.",6),Dn(6,()=>F.hint("Оно знает только звук. Подойдёт — замри и не дыши [Q].",5)),Dn(12,()=>F.hint("[V] — вслушаться: замри и услышь, откуда оно идёт.",5)),Oo()})}let Fi=null,cc=0,hc=0;const ls=Yt(32,1.5,8.6);function kd(){const i=F.flags;i.powered=!0,ft.door(ls),Fi||(Fi=ft.createMachine(ls,{type:"generator",gain:1})),Fi.setGain(1,1.5),Fi.spinUp(3.5),F.noise(ls.clone(),{radius:30,visual:26,source:"machine",kind:"machine",color:Zt.machine,strength:1.4}),Mt.forcedTarget=Yt(30,0,11),Mt.active&&Mt.state!=="chase"&&Mt.goTo(oe.randomWalkable(Yt(30,0,10),3)||Yt(30,0,11),"hunt"),F.hint("Генератор ожил. Девяносто децибел. Лифтовый холл — на запад.",6),Oo()}let pn=null;const Fd=Yt(7.5,1.4,1.5);function my(){const i=F.flags;i.called||(i.called=!0,ft.ding(Yt(9.55,1.3,3.1)),pn||(pn=ft.createMachine(Fd,{type:"motor",gain:.3})),pn.setGain(1,2),Mt.forcedTarget=null,Oo(),Xt.start(),F.hint("Лифт тронулся. Где-то внизу, очень глубоко.",4,!0))}function gy(){const i=F.flags;i.arrived=!0,oe.setDoor("lift",!0),ft.ding(Yt(7.5,2.4,3.2)),pn&&pn.setGain(.15,1),F.noise(Yt(7.5,1.5,3.3),{radius:22,visual:18,source:"machine",kind:"machine",color:Zt.machine,strength:1.3}),F.hint("Лифт здесь. В кабину — держи [E] на кнопке, пока двери не закроются.",5,!0)}function Od(){F.state="end",el(),Xt.stop(),q.frozen=!0,oe.setDoor("lift",!1),ft.door(Yt(7.5,1.5,3)),pn&&pn.setGain(1,1),Mt.despawn(),ut("fade").style.opacity=1,setTimeout(()=>{document.pointerLockElement&&document.exitPointerLock(),ut("hud").classList.add("hidden"),ut("end").classList.remove("hidden"),ut("end-text").innerHTML=IM.map((n,s)=>`<p style="animation-delay:${1+s*2.2}s">${n}</p>`).join("");const i=Math.floor(F.time/60),t=Math.floor(F.time%60),e=Object.keys(F.flags.notes||{}).length;ut("end-stats").textContent=`КОНЕЦ · время ${i}:${String(t).padStart(2,"0")} · смертей: ${F.deaths} · записок: ${e} из ${ph.length}`;for(let n=0;n<12;n++)setTimeout(()=>{ft.scratch(Yt(Bt.position.x+(Math.random()-.5),Bt.position.y+1.4,Bt.position.z+(Math.random()-.5)))},9e3+n*700+Math.random()*300);setTimeout(()=>ft.monsterCroak(Yt(Bt.position.x,Bt.position.y+1.6,Bt.position.z),.5),15500),setTimeout(()=>pn&&pn.setGain(0,3),18e3)},2e3)}function Oo(){F.cpDeaths=0,Bd(),F.checkpoint={pos:q.pos.clone(),yaw:q.yaw,flags:JSON.parse(JSON.stringify(F.flags)),stones:q.stones,taken:oe.items.map(t=>t.taken),monster:Mt.active?{pos:Mt.pos.clone()}:null,forced:Mt.forcedTarget?Mt.forcedTarget.clone():null};const i=F.checkpoint;try{localStorage.setItem("echo.save",JSON.stringify({v:1,pos:{x:i.pos.x,z:i.pos.z},yaw:i.yaw,flags:i.flags,stones:i.stones,taken:i.taken,monster:i.monster?{x:i.monster.pos.x,z:i.monster.pos.z}:null,forced:i.forced?{x:i.forced.x,z:i.forced.z}:null,time:F.time,deaths:F.deaths}))}catch{}}let Ni=null;function Bd(){const i=F.cpDeaths||0,t=i>=4?.75:i>=2?.88:1;Mt.assist.hear=t,Mt.assist.speed=.5+t*.5,Xt.assist=t}function xy(){F.state!=="dying"&&(F.cpDeaths=(F.cpDeaths||0)+1,Bd(),ut("slits").classList.add("hidden"),Xt.active&&Xt.stop(),F.state="dying",vd(1),F.deaths++,q.frozen=!0,q.holding=!1,Mt.startScare(Bt),Ni={t:0,baseFov:Bt.fov,cut:!1},ft.scream(),be.emit(Bt.position.clone(),{radius:6,speed:40,strength:2.5,decay:.4,color:Zt.monster}))}function vy(i){if(!Ni)return;Ni.t+=i;const t=Ni.t;q.lookTarget=(Mt.mouthWorld||Mt.headWorld).clone(),Bt.fov=Vt.lerp(Bt.fov,t<.9?46:Ni.baseFov,Math.min(1,i*18)),Bt.updateProjectionMatrix();const e=t<.9?.06:0;Bt.position.add(Yt((Math.random()-.5)*e,(Math.random()-.5)*e,(Math.random()-.5)*e)),Bt.rotateZ((Math.random()-.5)*e*2);const n=Math.floor(t*18)%2===0,s=t<.9?n?1.4:.35:0;Mt.body.mats[0].uniforms.uLit.value=s,Mt.body.mats[1].uniforms.uLit.value=s*.6,qe.uniforms.uGlitch.value=t<.9?n?.9:.25:0,qe.uniforms.uWhite.value=t<.07?1:0,dr=t<.9?n?.9:.2:0,t>.9&&!Ni.cut&&(Ni.cut=!0,ft.cut(),ut("fade").style.transition="none",ut("fade").style.opacity=1),t>2.3&&(Ni=null,F.state="dead",Bt.fov=80,Bt.updateProjectionMatrix(),qe.uniforms.uGlitch.value=0,ut("tip").textContent=of[Math.floor(Math.random()*of.length)],ut("death").classList.remove("hidden"),document.pointerLockElement&&document.exitPointerLock(),ft.setMaster(.15,.3))}function tl(){try{const i=JSON.parse(localStorage.getItem("echo.save")||"null");return!i||i.v!==1||i.taken.length!==oe.items.length?null:{pos:Yt(i.pos.x,0,i.pos.z),yaw:i.yaw,flags:i.flags,stones:i.stones,taken:i.taken,monster:i.monster?{pos:Yt(i.monster.x,0,i.monster.z)}:null,forced:i.forced?Yt(i.forced.x,0,i.forced.z):null,time:i.time||0,deaths:i.deaths||0}}catch{return null}}const el=()=>{try{localStorage.removeItem("echo.save")}catch{}};function Hd(){const i=F.checkpoint;vi(),Ud(),Is.length=0,Ni=null,Bt.fov=80,Bt.updateProjectionMatrix(),qe.uniforms.uGlitch.value=0,qe.uniforms.uWhite.value=0,F.flags=JSON.parse(JSON.stringify(i.flags)),Pn.sync(F.flags),q.reset(i.pos,i.yaw),q.stones=i.stones,oe.items.forEach((t,e)=>{t.taken=i.taken[e],t.obj.visible=!t.taken}),ii.reset();for(const t of oe.doors)t.kind==="slam"&&Object.assign(t,{closed:!1,t:1,hp:3,broken:!1,box:null});if(oe.setDoor("lab",!!F.flags.labOpen),oe.setDoor("lift",!!F.flags.arrived),Mt.forcedTarget=i.forced?i.forced.clone():null,Mt.lures=[],i.monster){let t=oe.randomWalkable(q.pos,28,16)||i.monster.pos;F.flags.called&&(t=oe.randomWalkable(Yt(32,0,9),4)||t),Mt.spawn(t,"wander"),Mt.idleT=3}else Mt.despawn();F.flags.powered&&!Fi&&(Fi=ft.createMachine(ls,{type:"generator",gain:1})),F.flags.called&&!pn&&(pn=ft.createMachine(Fd,{type:"motor",gain:.3})),Fi&&Fi.setGain(F.flags.powered?1:0,.5),pn&&pn.setGain(F.flags.called?1:0,.5),Xt.stop(),oe.setShutter("A",!1),oe.setShutter("B",!1),oe.setShutter("C",!1),F.flags.called&&!F.flags.arrived&&(Mt.despawn(),Xt.start()),be.clear(),F.fear=0,F.psychosis=0,Rs=0,ar=0,dr=0,vh=null,ut("death").classList.add("hidden"),ut("fade").style.opacity=0,setTimeout(()=>ut("fade").style.transition="",50),ft.setMaster(+ut("vol").value,1),F.state="play",$a(),setTimeout(()=>q.click(),400)}ut("retry").addEventListener("click",Hd);function t0(){F.state==="note"&&$h(),F.state==="play"&&(F.state="paused",q.keys.clear(),Ja=!1,ut("pause").classList.remove("hidden"),ut("resume").focus(),document.pointerLockElement&&document.exitPointerLock(),ft.ctx&&ft.ctx.suspend())}function My(){Nn.hide(),q.keys.clear(),ut("pause").classList.add("hidden"),F.state="play",ft.ctx&&ft.ctx.resume(),$a()}ut("resume").addEventListener("click",My);ut("intro").innerHTML=LM.map(i=>`<p>${i}</p>`).join("");let uc=!1;async function Oa(i){if(!uc){uc=!0,Nn.loading("Загрузка звука","Загрузка и обработка звуковых файлов."),await new Promise(t=>requestAnimationFrame(()=>setTimeout(t,0)));try{ft.ready||await ft.init((t,e,n)=>Nn.progress("Загрузка звука",t,`Звуковые записи: ${e} / ${n}`)),ft.setMaster(+ut("vol").value,.01),await ft.ctx.suspend(),Nn.briefing(()=>{i||el(),yy(i)},i)}catch(t){console.error("Audio initialization failed",t),ft.ctx&&await ft.ctx.close().catch(()=>{}),ft.ctx=null,ft.ready=!1,Nn.fail("Звук не загрузился. Он необходим, чтобы ориентироваться в темноте. Проверьте соединение и попробуйте ещё раз.",()=>Oa(i))}finally{uc=!1}}}function xf(){el();try{sessionStorage.setItem("echo.new-session","1")}catch{}location.reload()}Nn.bind({newGame:()=>F.checkpoint?xf():Oa(!1),continue:()=>Oa(!0),restart:xf,returnMenu:()=>{ut("pause").classList.add("hidden"),ut("hud").classList.add("hidden"),ut("note").classList.add("hidden"),ut("slits").classList.add("hidden"),q.keys.clear(),F.state="menu",Nn.saveAvailable(!!tl()),Nn.menu()}});ut("again").addEventListener("click",()=>{el(),location.reload()});let Da=null;function yy(i=!1){vi(),Ud(),Da||(Da=ft.createLoop("loop_water",Yt(49.6,1.6,26.8),.55,{ref:1.5,roll:1.2}),Da.setGain(1,2)),ft.ctx.resume(),Nn.hide(),ut("pause").classList.add("hidden"),q.keys.clear(),ut("hud").classList.remove("hidden");const t=i?tl():null;if(t){F.checkpoint=t,F.time=t.time,F.deaths=t.deaths,Hd(),F.hint("Ты снова здесь. Ничего не изменилось.",4,!0);return}be.clear(),q.reset(Yt(34.9,0,50.6),.55),F.state="play",F.time=0,Oo(),$a(),[["Темно. Как всегда.",3.5],["[F] — стук тростью. Звук ляжет на стены.",5],["Шаги тоже рисуют — и тоже слышны. [WASD]",5],["На кровати рядом — лист бумаги. [E]",5],["Забыл, куда идти? Удерживай [TAB] — вспомнить цель.",5],["[C] — красться: тише, но и мир меньше.",5]].forEach(([n,s])=>F.hint(n,s))}let fc=0,dc=0,La=0,pc=75,va=45,er=0;function _y(i){const t=oe.findPath(q.pos,i);if(!t||t.length<2)return!1;let e=0,n=null,s=null;for(let r=1;r<t.length;r++){const a=t[r-1],l=t[r],c=a.distanceTo(l);for(let h=0;h<c;h+=.5){const u=a.clone().lerp(l,h/c),f=e+h;if(f>9&&f<18&&(!s&&f>12&&(s=u),oe.clearance(u.x,u.z)<1.15)){n=u;break}}if(n||(e+=c,e>18))break}if(n=n||s,!n)return!1;const o=oe.findPath(Mt.pos,n);return!o||o.some(r=>Math.hypot(r.x-q.pos.x,r.z-q.pos.z)<6)?!1:(Mt.ambush(n),!0)}let nr=null;function by(i){if(fc-=i,dc-=i,La=Math.max(0,La-i),Mt.active&&fc<=0&&dc<=0&&!Xt.active){dc=.25;const t=Mt.headWorld;if(t.distanceTo(Bt.position)<11&&be.litAt(t)>.22){const n=new D;Bt.getWorldDirection(n);const s=t.clone().sub(Bt.position).normalize();n.dot(s)>.8&&oe.occlusion(Bt.position,t)<.35&&(fc=25,La=.4,ft.stinger("high",.75),q.shake=Math.max(q.shake||0,.7),F.fear=Math.min(1.5,F.fear+.5))}}if(va-=i,Mt.active&&!Xt.active&&F.state==="play"){const t=Mt.pos.distanceTo(Yt(q.pos.x,0,q.pos.z)),e=Mt.state==="wander"||Mt.state==="search";if(t<10&&Mt.state!=="chase"?er+=i:er=Math.max(0,er-i*.5),er>55&&e){er=0;const n=oe.randomWalkable(Mt.pos,26,16);n&&Mt.goTo(n,"wander"),va=25}if(va<=0&&(va=20+Math.random()*15,e&&t>15)){const n=Math.random(),s=iy();let o=!1;if(n<.32&&s&&(o=_y(s)),!o)if(n<.75)Mt.stalk(32+Math.random()*18);else{const r=oe.randomWalkable(q.pos,8,3);r&&Mt.goTo(r,"investigate")}}}if(pc-=i,pc<=0&&!Xt.active&&(pc=70+Math.random()*60,!Mt.active||Mt.pos.distanceTo(Yt(q.pos.x,0,q.pos.z))>20)){const e=Math.sin(q.yaw),n=Math.cos(q.yaw);for(let s=0;s<4;s++)Dn(s*.75,()=>{const o=Yt(q.pos.x+e*(7-s*.6),.2,q.pos.z+n*(7-s*.6));ft.play("flesh",o,{gain:.35,rate:.66,wet:.7,vary:.05}),ft.play("tick",o,{gain:.12,rate:1.7,wet:.5,delay:.04})})}ft.ready&&(nr||(nr=ft.createLoop("amb_hell",Bt.position,.5,{ref:1,roll:0}),nr.setGain(0,.1)),nr.setPos(Bt.position),nr.setGain(Math.min(1,Math.max(0,F.fear-.25))*.9,.6))}let is=0;function Sy(i){const t=q.listening&&F.state==="play";is=Vt.lerp(is,t?1:0,Math.min(1,i*5)),vd(F.state==="dying"?1:Math.min(1,is*1.4)),ut("listen").classList.toggle("hidden",is<.05),ft.ready&&!ft.muted&&F.state==="play"&&ft.master.gain.setTargetAtTime(+ut("vol").value*(1+is*.35),ft.t,.2);let e=null,n=0;if(Mt.active){e=Mt.pos;const o=Mt.pos.distanceTo(Yt(q.pos.x,0,q.pos.z));n=Math.max(0,1-o/30)*((Mt.curSpeed||0)>.1?1:.45)}const s=ut("listen-mark");if(e&&is>.05){const o=Math.atan2(e.x-q.pos.x,e.z-q.pos.z)-Math.atan2(-Math.sin(q.yaw),-Math.cos(q.yaw)),r=140;s.style.transform=`translate(${Math.sin(o)*r}px, ${-Math.cos(o)*r}px) rotate(${o}rad)`,s.style.opacity=(n*is).toFixed(2)}else s.style.opacity=0}let mc=20,gc=0;function wy(i){const t=Bt.position;if(gc-=i,gc<=0){gc=.25;for(const e of[Da,Fi,pn])e&&e.update()}for(const e of oe.drips)e.t-=i,e.t<=0&&(e.t=e.int*(.7+Math.random()*.6),e.pos.distanceTo(t)<22&&(ft.drip(e.pos),be.emit(Yt(e.pos.x,.02,e.pos.z),{radius:2.4,speed:3.5,strength:.55,decay:1.4,color:Zt.drip})));for(const e of oe.sparks)e.t-=i,e.t<=0&&(e.t=e.int*(.5+Math.random()),e.pos.distanceTo(t)<25&&(ft.spark(e.pos),be.emit(e.pos,{radius:3.5,speed:12,strength:1.1,decay:2,color:Zt.spark})));for(const e of oe.items)e.taken||["stone","locked","shutterA","shutterB","shutterC","seismo","locker","slam","clock","phone"].includes(e.type)||(e.hum=(e.hum??Math.random()*4)-i,e.hum<=0&&(e.hum=3.5+Math.random(),e.pos.distanceTo(t)<7&&be.emit(e.pos,{radius:1.1,speed:2.5,strength:.5,decay:1.5,color:Zt.item})));if(mc-=i,mc<=0){mc=25+Math.random()*30;const e=oe.randomWalkable(q.pos,30,15);e&&(e.y=2,Math.random()<.7?ft.groan(e):ft.whisper(e))}F.flags.powered&&(cc-=i,cc<=0&&(cc=1.4,be.emit(ls,{radius:13,speed:9,strength:.7,decay:1.2,color:Zt.machine})),hc-=i,hc<=0&&(hc=9,Mt.active&&Mt.state==="wander"&&Mt.hear(ls,26,"machine","machine",q.pos)))}let ir=0,dr=0;function Ty(i){let t=0;if(Mt.active){const a=Mt.pos.distanceTo(Yt(q.pos.x,0,q.pos.z)),l=Mt.state,c=l==="chase"?1.5:l==="hunt"?1:l==="windup"||l==="lunge"?1.4:l==="sniff"?1.2:.75;t=Math.max(0,1-a/15)*c}if(F.state==="dying"&&(t=1.5),F.fear+=(Math.min(1.5,t)-F.fear)*Math.min(1,i*1.5),ir-=i,ir<=0&&F.fear>.12&&(ir=60/(62+F.fear*95),ft.heartbeat(Math.min(1,F.fear))),ir<=0&&(ir=.5),ft.ctx&&ft.setAmbience(.12*(1-Math.min(1,F.fear)*.6)*(1-is*.8)),dr=Math.max(0,dr-i*.8),vc-=i,vc<=0){vc=.2;let a=0;for(let l=0;l<8;l++){const c=l/8*Math.PI*2,h=Math.cos(c),u=Math.sin(c);let f=.25;for(;f<8&&oe.open(Math.floor(q.pos.x+h*f),Math.floor(q.pos.z+u*f));)f+=.25;a+=f}Dd=Vt.clamp(a/8/3.6,.55,1)}{const a=Bt.rotation.y,l=Bt.rotation.x,c=Bt.position.y;let h=a-(po.y??a);h>Math.PI&&(h-=Math.PI*2),h<-Math.PI&&(h+=Math.PI*2);const u=l-(po.x??l),f=c-(po.h??c);po.y=a,po.x=l,po.h=c;const d=Vt.degToRad(Bt.fov),m=2*Math.atan(Math.tan(d/2)*Bt.aspect),x=1.15*Math.min(1,1/60/Math.max(i,.001)),g=Vt.clamp(-h/m*x,-.035,.035),p=Vt.clamp((u/d+f*.6)*x,-.025,.025),M=qe.uniforms.uBlur.value;M.x+=(g-M.x)*Math.min(1,i*25),M.y+=(p-M.y)*Math.min(1,i*25)}qe.uniforms.uFear.value=Math.min(1.2,F.fear*.8+(q.holding?.15:0)),qe.uniforms.uFlash.value=dr,F.state!=="dying"&&(qe.uniforms.uGlitch.value=La>0?.55:0);const e=Mt.active&&Mt.state==="chase"?1:0,n=q.holding?Vt.smoothstep(1-q.breathCap,.35,.95):Vt.smoothstep(1-q.breathCap,.6,1)*.6;e?Rs=1:Rs=Math.max(0,Rs-i/25),xc-=i,xc<=0&&(xc=3+Math.random()*5,Rs>.15&&!e&&(ar=1)),ar=Math.max(0,ar-i*.7);const s=Rs*.5+ar*Rs*.45,o=F.state==="dying"?1:Math.min(1,Math.max(e,Math.min(1,F.fear)*.7,n,s));Ts+=(o-Ts)*Math.min(1,i*(o>Ts?2.5:.35)),_i.uniforms.damp.value=Math.pow(Vt.lerp(.5,.92,Ts),Math.max(.25,i*60));const r=Vt.smoothstep(Ts,.35,1)*.12;_i.uniforms.uRed.value=1-Math.pow(1-r,Math.max(.25,i*60)),qe.uniforms.uSmear.value=Ts,F.psychosis=Ts}let Ts=0,Rs=0,ar=0,xc=4,vc=0;const po={},ni=new Gn(65,innerWidth/innerHeight,.05,120),Mc=Yt(31.55,1.35,32.8),Ey=new Kt(.48,.67,.74),Ay=new Kt(.8,.22,.13),bh=matchMedia("(prefers-reduced-motion: reduce)"),e0=new mt,yc=new mt,Es={yaw:null,pitch:null,playing:!1};addEventListener("pointermove",i=>{i.pointerType!=="touch"&&e0.set(Vt.clamp(i.clientX/Math.max(1,innerWidth)*2-1,-1,1)*.028,Vt.clamp(1-i.clientY/Math.max(1,innerHeight)*2,-1,1)*.02)});function Vd(){e0.set(0,0)}addEventListener("blur",Vd);document.documentElement.addEventListener("pointerleave",Vd);function Cy(i){const t=F.state==="play"||F.state==="note";if(yc.set(0,0),t&&Es.playing&&Es.yaw!==null){const n=Vt.euclideanModulo(q.yaw-Es.yaw+Math.PI,Math.PI*2)-Math.PI;yc.set(Vt.clamp(-n/Math.max(i,1/240)*.012,-.028,.028),Vt.clamp((q.pitch-Es.pitch)/Math.max(i,1/240)*.012,-.02,.02))}Es.yaw=q.yaw,Es.pitch=q.pitch,Es.playing=t;const e=qe.uniforms.uGlassOffset.value;bh.matches?e.set(0,0):e.lerp(t?yc:e0,1-Math.exp(-i*7))}let _c=0,Ma=0,Ba=!1,Sh=null,vf=-1/0,pr=!0;const Ha={worldFrames:0,interfaceFrames:0,lastWorldMs:0};function Gd(){if(!innerWidth||!innerHeight)return;ni.aspect=innerWidth/innerHeight,ni.setViewOffset(innerWidth,innerHeight,-innerWidth*.13,0,innerWidth,innerHeight),ni.updateProjectionMatrix();const i=Math.min(1,960/innerWidth,600/innerHeight);Za.setSize(Math.max(1,Math.round(innerWidth*i)),Math.max(1,Math.round(innerHeight*i))),pr=!0}Gd();addEventListener("resize",Gd);function Wd(i){Ba||(be.clear(),Ma=0),_c+=i;const t=bh.matches?0:Math.sin(_c*.075);ni.position.set(30.75+t*.12,1.58+(bh.matches?0:Math.sin(_c*.11)*.025),42.1),ni.lookAt(Mc.x+t*.22,Mc.y,Mc.z),Ma-=i,Ma<=0&&(be.emit(Yt(31.4,1.7,39.8),{radius:26,speed:8,strength:1.8,decay:.22,color:Ey}),be.emit(Yt(32,1.5,33.8),{radius:16,speed:5,strength:1.2,decay:.28,color:Ay}),Ba||be.update(2.5),Ma=5.5),be.update(i),Qa.material.uniforms.uCam.value.copy(ni.position)}function Py(i,t){const e=i?"menu":"paused";if(Sh!==e&&(pr=!0),!pr&&(!i||t-vf<1e3/15-1))return;const n=Le.getRenderTarget(),s=Gh,o=Le.autoClear,r=performance.now();try{_r.update(i?ni:Bt),hh(0),Le.setRenderTarget(Za),Le.autoClear=!0,Le.render(si,i?ni:Bt),!i&&ae.root.visible&&(Le.autoClear=!1,Le.clearDepth(),Le.render(ae.scene,Bt))}finally{Le.autoClear=o,Le.setRenderTarget(n),hh(s)}Sh=e,pr=!1,vf=t,Ha.worldFrames++,Ha.lastWorldMs=performance.now()-r}function n0(i){_r.update(i?ni:Bt),bi.update(performance.now()),qe.uniforms.uInterface.value=bi.isMenu?1:0;const t=i||F.state==="paused"||F.state==="dead";t?Py(i,performance.now()):(Sh=null,pr=!0),gh.camera=i?ni:Bt,zn.camera=i?ni:Bt,yr.enabled=!i,_i.enabled=!i;const e=[gh,zn,yr,_i,zs,Kh],n=e.map(o=>o.enabled);t&&(e.forEach(o=>{o.enabled=!1}),qe.uniforms.uBlur.value.set(0,0)),rs.enabled=t||bi.visible,rs.uniforms.uCachedBackground.value=t?1:0,rs.uniforms.uShowInterface.value=bi.visible?1:0;const s={};if(i){for(const o of["uFear","uFlash","uGlitch","uWhite","uSmear"])s[o]=qe.uniforms[o].value,qe.uniforms[o].value=0;qe.uniforms.uBlur.value.set(0,0)}else if(Ba){const o=Le.getRenderTarget();for(const r of[_i.textureOld,_i.textureComp])Le.setRenderTarget(r),Le.clear();Le.setRenderTarget(o)}try{(t?qs:En).render(),t&&Ha.interfaceFrames++}finally{e.forEach((o,r)=>{o.enabled=n[r]});for(const o in s)qe.uniforms[o].value=s[o]}}const Ry=new hd;function Xd(){requestAnimationFrame(Xd);const i=Math.min(.05,Ry.getDelta());if(document.hidden)return;const t=F.state==="menu";t&&Ao&&Wd(i),window.__freeze||Va(i),mr.update(),innerWidth>0&&innerHeight>0&&(!t||Ao||bi.visible)&&n0(t),Ba=t&&Ao}function Va(i){Cy(i),qe.uniforms.uTime.value+=i,F.state==="play"||F.state==="note"||F.state==="dying"?(F.time+=i,be.update(i),q.update(i,si),q.fallT>0&&(en||te)&&vi(),q.actionLean=(en==null?void 0:en.kind)==="pickupFuse"?-Math.min(.8,Math.max(0,q.eye-.8))*Vt.smoothstep(en.t/en.duration,0,.25)*(1-Vt.smoothstep(en.t/en.duration,.55,.9)):0,Bt.position.y+=q.actionLean,q.actionLean&&(Bt.rotation.x+=q.actionLean*.22),Bt.updateMatrixWorld(!0),hy(i),uy(i),te!=null&&te.generator||Pn.sync(F.flags),ae.root.visible=F.state!=="dying"&&!q.hidden,ae.update(i,Bt,q),Mt.update(i,q,F),F.state==="dying"&&vy(i),oe.updateDoors(i),wy(i),Ty(i),by(i),Sy(i),ZM(i),xh-=i,Xt.active&&Xt.update(i),ii.update(i),ur>0&&(ur-=i,$M(Zh),ur<=0&&ut("radar").classList.add("hidden")),Qa.material.uniforms.uCam.value.copy(Bt.position),ft.setListener(Bt),F.state==="play"&&q.fallT<=0?(as=ry(),ut("prompt").textContent=ay(as),ut("crosshair").classList.toggle("focus",!!as)):ut("prompt").textContent="",ty(i),ey(i),oy()):F.state==="end"&&be.update(i)}const mr=KM({player:q,game:F,siege:Xt,pause:t0,closeNote:$h,mapPoint:bi.mapPoint,look:(i,t)=>q.look(i,t,.0035*Qh),throwItem:()=>{F.state!=="play"||ae.work||q.fallT>0||(ii.held.length?ii.throwClock(Bt)&&ae.throw("clock"):(q.stones>0&&ae.throw(),q.throwStone(si)))}});Ld(Id);Xd();window.__siege=Xt;window.__game={game:F,player:q,monster:Mt,level:oe,echo:be,audio:ft,camera:Bt,menuCamera:ni,vm:ae,gtao:zn,composer:En,extras:ii,crtInterface:bi,menuPerformance:Ha,menuBackground:Za,menuComposer:qs,generatorProps:Pn,roomVisibility:_r,tick(i=1,t=1/60){for(let e=0;e<i;e++)Va(t)},use(i){as=i,zd()},step(i=1,t=1/60){for(let e=0;e<i;e++)Va(t);n0(F.state==="menu")}};window.render_game_to_text=()=>{var i,t,e,n;return JSON.stringify({screen:Nn.screen,mode:F.state,loading:{label:ut("load-label").textContent,progress:+ut("load-progress").getAttribute("aria-valuenow")},menuBackground:Ao?"live-3d-level":"loading",crtInterface:bi.ready,crtParallax:{x:+qe.uniforms.uGlassOffset.value.x.toFixed(4),y:+qe.uniforms.uGlassOffset.value.y.toFixed(4)},interfaceLayer:bi.layer,playerMeters:document.body.classList.contains("show-player-meters"),touch:mr.enabled,rendering:{ratio:En.renderer.getPixelRatio(),visibleBatches:_r.stats.visible,totalBatches:_r.stats.total},objective:{text:fr,visible:ut("objective").classList.contains("visible")},audioReady:ft.ready,checkpoint:!!tl(),player:{x:+q.pos.x.toFixed(2),z:+q.pos.z.toFixed(2),crouching:q.crouch,stones:q.stones,falling:q.fallT>0,recovery:+q.fallT.toFixed(2),falls:q.falls},psychosis:+F.psychosis.toFixed(2),cane:{streak:q.clickStreak,quietIn:+q.clickQuietT.toFixed(2)},hands:{leftVisible:ae.left.visible,pose:ae.leftHand.pose,contact:((i=ae.contact)==null?void 0:i.type)||null,point:(t=ae.contact)==null?void 0:t.point.toArray(),normal:(e=ae.contact)==null?void 0:e.normal.toArray()},interaction:ae.work?{kind:ae.work.kind,progress:+ae.work.k.toFixed(3),slot:ae.work.slot,can:ae.workCan.visible,stream:ae.fuelStream.visible}:null,generator:{installed:F.flags.genInstalled||0,fueled:!!F.flags.genFueled,powered:!!F.flags.powered},monster:{active:Mt.active,state:Mt.state,x:+Mt.pos.x.toFixed(2),z:+Mt.pos.z.toFixed(2),suspicion:+Mt.suspicion.toFixed(2)},siege:{active:Xt.active,phase:Xt.phase,stage:Xt.stage,route:Xt.route,power:+((n=Xt.power)==null?void 0:n.toFixed(1)),stalled:Xt.stalled,remaining:+Xt.remaining.toFixed(1),bracing:Xt.bracing,monsterInHall:Xt.monsterInHall,warning:ut("sg-warn").textContent},coordinates:"+X east, +Z south; metres"})};window.advanceTime=i=>{const t=Math.max(1,Math.round(i/16.666666666666668));for(let e=0;e<t;e++)F.state==="menu"&&Ao&&Wd(1/60),Va(1/60);n0(F.state==="menu")};

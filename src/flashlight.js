import * as THREE from 'three';
import { echoMaterial } from './echo.js';

// One resource model for desktop, touch, saves and the view-model animation.
export class Flashlight {
  constructor(){this.restore();}
  restore(saved={}){this.owned=!!saved.owned;this.on=this.owned&&saved.on!==false;this.charge=Number.isFinite(saved.charge)?THREE.MathUtils.clamp(saved.charge,0,1):.62;this.phase=0;this.shaking=false;this.strokes=0;}
  acquire(){this.owned=this.on=true;this.charge=.62;}
  toggle(){if(this.owned)this.on=!this.on;}
  update(dt,{live,shake,canShake=true,quiet=false},onStroke=()=>{}){
    if(!live||!this.owned){this.shaking=false;return;}
    if(quiet){this.on=false;this.shaking=false;this.phase=0;return;}
    if(this.on)this.charge=Math.max(0,this.charge-dt/90);
    this.shaking=shake&&canShake;
    if(this.shaking){
      this.phase+=dt;
      while(this.phase>=.46-1e-9){this.phase=Math.max(0,this.phase-.46);this.charge=Math.min(1,this.charge+.065);this.strokes++;onStroke();}
    }else this.phase=0;
  }
  get power(){return this.owned&&this.on?THREE.MathUtils.smoothstep(this.charge,0,.085)*(0.82+this.charge*.18):0;}
  snapshot(){return {owned:this.owned,on:this.on,charge:this.charge};}
}

// The shelf prop and the held torch are built from this same factory.
export function createFlashlightModel(held=false){
  const g=new THREE.Group();g.name='dynamo-flashlight';
  const body=echoMaterial({map:'bplastic',scale:5,tint:0x69786c,boost:1.2});
  const metal=echoMaterial({map:'metal',scale:8,tint:0xaaa89a,boost:1.1});
  const rubber=echoMaterial({map:'rubber',scale:9,tint:0x272d29});
  const lens=echoMaterial({map:'plastic',scale:8,tint:0xe8ead0,wet:.8});
  const mats=[body,metal,rubber,lens];
  if(held)for(const m of mats){m.uniforms.uLocal.value=1;m.uniforms.uLit.value=.24;}
  const tube=(r1,r2,h,z,m)=>{const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r1,r2,h,20),m);mesh.rotation.x=Math.PI/2;mesh.position.z=z;g.add(mesh);return mesh;};
  tube(.026,.028,.19,.015,body);tube(.043,.027,.055,-.105,metal);tube(.042,.042,.012,-.14,rubber);tube(.034,.034,.004,-.148,lens);
  tube(.027,.027,.012,.115,rubber);
  for(let k=0;k<5;k++)tube(.029,.029,.004,.035+k*.013,rubber);
  const button=new THREE.Mesh(new THREE.BoxGeometry(.018,.008,.026),rubber);button.position.set(0,.029,-.035);g.add(button);
  // A winding coil and sliding magnet give the hand-powered torch its silhouette.
  for(let k=0;k<9;k++)tube(.029,.029,.002,-.01+k*.004,metal);
  const muzzle=new THREE.Object3D();muzzle.position.set(0,0,-.16);g.add(muzzle);
  g.userData.materials=mats;g.muzzle=muzzle;g.lensMaterial=lens;
  return g;
}

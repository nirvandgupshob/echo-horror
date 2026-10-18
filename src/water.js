import * as THREE from 'three';
import { echoMaterial } from './echo.js';

// A shared shallow-water surface for both chapters. Every quad lies over an
// actual water cell: no circular pool passing through walls or dry islands.
export function waterGeometry(cells,width,height){
  const positions=[],normals=[],indices=[];
  for(let z=0;z<height;z++)for(let x=0;x<width;x++)if(cells[z*width+x]===2){
    const n=positions.length/3;
    positions.push(x,0,z,x,0,z+1,x+1,0,z+1,x+1,0,z);
    normals.push(0,1,0,0,1,0,0,1,0,0,1,0);indices.push(n,n+1,n+2,n,n+2,n+3);
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));geometry.setIndex(indices);geometry.computeBoundingSphere();return geometry;
}
export function createWaterSurface(cells,width,height){
  const mesh=new THREE.Mesh(waterGeometry(cells,width,height),echoMaterial({pat:9,map:'tile',wet:1,boost:.9}));
  mesh.name='shallow-water';mesh.position.y=.026;mesh.renderOrder=2;mesh.userData.noLampShadow=true;return mesh;
}

// Cells store floor/room metadata; cave movement follows the continuous shell.
export const CAVE_SPAWN = { x: 8.5, z: 6.4, yaw: Math.PI };
export const CAVE_STATIONS = [
  { id: 'valve', x: 13.5, z: 26.5, name: 'Дренажный коллектор' },
  { id: 'resonator', x: 49.5, z: 17.5, name: 'Палата, которой нет' },
  { id: 'exit', x: 50.5, z: 46.5, name: 'Нижняя штольня' },
  { id: 'relay', x:13, z:47.9, name:'Южный фидер' },
];
export const CAVE_ZONES = [
  { name: 'Ствол · ниже −9', x: 8.5, z: 7, rx: 3, rz: 4, height: 3.4 },
  { name: 'Нижний больничный блок', x: 13, z: 15, rx: 6, rz: 5, height: 6 },
  { name: 'Затопленная перевязочная', x: 13, z: 27, rx: 7, rz: 7, height: 4.8 },
  { name: 'Зал подвесов', x: 31, z: 27, rx: 12, rz: 12, height: 11.5 },
  { name: 'Палата, которой нет', x: 49, z: 18, rx: 7, rz: 6, height: 4.8 },
  { name: 'Соляное горло', x: 46, z: 36, rx: 7, rz: 5, height: 3.8 },
  { name: 'Нижняя штольня', x: 50, z: 46, rx: 5, rz: 5, height: 6 },
  { name: 'Геодезическая камера', x: 32, z: 7, rx: 13, rz: 5, height: 7.5 },
  { name: 'Насосный резервуар', x: 13, z: 45, rx: 10, rz: 8, height: 9 },
  { name: 'Резонансная галерея', x: 32, z: 45, rx: 10, rz: 7, height: 7 },
  { name: 'Паучий лаз', x: 58, z: 35, rx: 4, rz: 8, height: 5.5 },
];
export const CAVE_LINKS = [
  [[8, 9], [10, 13], [13, 15]],
  [[13, 15], [10, 19], [13, 27]],
  [[13, 27], [20, 30], [24, 29]],
  [[35, 22], [40, 19], [49, 18]],
  [[36, 32], [39, 36], [46, 36]],
  [[49, 18], [54, 25], [52, 30], [46, 36]],
  [[46, 36], [46, 41], [50, 46]],
  [[24,21],[20,15],[23,9],[32,7]],
  [[32,7],[43,9],[49,14]],
  [[10,31],[7,36],[9,42],[13,45]],
  [[13,45],[23,47],[32,45],[42,44],[50,46]],
  [[54,25],[58,29],[58,35],[54,41],[50,46]],
  // A quiet, crouched bypass rejoins the hanging chamber beyond the shaft.
  [[14, 31], [17, 37], [23, 39], [28, 35]],
];

export function caveLayout(width = 64, height = 56) {
  const cells = new Uint8Array(width * height), ceiling = new Float32Array(width * height);
  const zones = new Int8Array(width * height).fill(-1), pits = new Uint8Array(width * height);
  function carve(x, z, rx, rz, roof, zone = -1) {
    for (let j = Math.max(1, Math.floor(z-rz)); j <= Math.min(height-2, Math.ceil(z+rz)); j++) {
      for (let i = Math.max(1, Math.floor(x-rx)); i <= Math.min(width-2, Math.ceil(x+rx)); i++) {
        const d = ((i+.5-x)/rx)**2 + ((j+.5-z)/rz)**2;
        if (d > 1) continue;
        const n = j*width+i;
        cells[n] = zone === 2 ? 2 : 1;
        ceiling[n] = Math.max(ceiling[n], roof - d*.8);
        if (zone >= 0) zones[n] = zone;
      }
    }
  }
  CAVE_ZONES.forEach((r, i) => {if(i!==1)carve(r.x,r.z,r.rx,r.rz,r.height,i);});
  // A real rectangular hospital vestibule precedes the eroded connecting halls.
  for(let z=10;z<20;z++)for(let x=8;x<19;x++){
    const i=z*width+x;cells[i]=1;ceiling[i]=2.9;zones[i]=1;
  }
  CAVE_LINKS.forEach((points, route) => {
    for (let k = 1; k < points.length; k++) {
      const a = points[k-1], b = points[k], length = Math.hypot(b[0]-a[0], b[1]-a[1]);
      for (let s = 0; s <= length*4; s++) {
        const t = s/(length*4);
        carve(a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, route === CAVE_LINKS.length-1 ? 1.25 : 2, route === CAVE_LINKS.length-1 ? 1.25 : 2, route === CAVE_LINKS.length-1 ? 1.45 : 3.8);
      }
    }
  });
  // Fill pockets inside the continuous shell, keeping the original cab/ward.
  for(let z=2;z<height-2;z++)for(let x=2;x<width-2;x++)if(!(x<20&&z<20)&&caveField(x+.5,z+.5)>.78){
    const n=z*width+x;if(cells[n])continue;cells[n]=1;ceiling[n]=3.8;
    let best=Infinity;for(let i=2;i<CAVE_ZONES.length;i++){const r=CAVE_ZONES[i],d=((x+.5-r.x)/r.rx)**2+((z+.5-r.z)/r.rz)**2;if(d<best){best=d;zones[n]=i;}}
  }
  // No floor here. Keep these cells out of the monster's navigation graph.
  for (let z = 20; z <= 34; z++) for (let x = 25; x <= 36; x++) {
    if (pitField(x+.5,z+.5)<0) {
      cells[z*width+x] = 0; ceiling[z*width+x] = 0; pits[z*width+x] = 1;
    }
  }
  return { cells, ceiling, zones, pits };
}

// Positive inside the connected cave. Inflation keeps the visible shell outside
// the floor grid. CaveLevel samples this same shape for movement/navigation.
export function caveField(x,z){
 let value=-100;
 const join=v=>{const k=.5,h=Math.max(0,k-Math.abs(value-v))/k;value=Math.max(value,v)+h*h*k*.25;};
 for(const r of CAVE_ZONES)if(r!==CAVE_ZONES[1])join((1-Math.hypot((x-r.x)/r.rx,(z-r.z)/r.rz))*Math.min(r.rx,r.rz)+.78);
 for(let route=0;route<CAVE_LINKS.length;route++)for(let i=1;i<CAVE_LINKS[route].length;i++){
  const a=CAVE_LINKS[route][i-1],b=CAVE_LINKS[route][i],dx=b[0]-a[0],dz=b[1]-a[1];
  const t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz)));
  join((route===CAVE_LINKS.length-1?1.25:2)+.78-Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t));
 }
 const qx=Math.max(8-x,0,x-19),qz=Math.max(10-z,0,z-20);join(qx||qz?-Math.hypot(qx,qz):Math.min(x-8,19-x,z-10,20-z));
 return Math.min(value,x-.6,63.4-x,z-.6,55.4-z);
}
export function pitRadius(angle){return 1+.045*Math.sin(angle*3)+.028*Math.sin(angle*7+.6);}
export function pitField(x,z){const a=Math.atan2((z-27)/6.1,(x-31)/5.25);return (Math.hypot((x-31)/5.25,(z-27)/6.1)-pitRadius(a))*5.25;}

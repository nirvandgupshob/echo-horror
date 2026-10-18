// One small PBR set per physical surface, reused by all matching prop instances.
export const DETAIL_SURFACES={
  terrazzo:{scale:.7,boost:.65},linoleum:{scale:.7,boost:.65},
  'blue-tile':{scale:1,bump:.65,wet:.12},'peeled-ivory':{scale:.6,bump:.6},
  'red-brick':{scale:1.2,bump:1.1},coal:{scale:.6,bump:1.1},
  'salt-vein':{scale:.5,bump:.8},'green-enamel':{scale:2,bump:.5},
  zinc:{scale:2.5,bump:.4},hazard:{scale:2,bump:.3},
  burlap:{scale:4,bump:.7,boost:.8},'timber-sawn':{scale:3,bump:.6},
};
export function detailSurface(name){return {map:`details/${name}`,grime:.15,...DETAIL_SURFACES[name]};}
// Geometry remains shared with Chapter I; only explicitly selected surfaces vary.
export function finishFrame(frame,keys){
  const options=o=>({...o,key:keys[o?.key||'prop']||o?.key||'prop'});
  return {
    box:(x,y,z,w,h,d,o={})=>frame.box(x,y,z,w,h,d,options(o)),
    cyl:(x,y,z,a,b,h,n,o={})=>frame.cyl(x,y,z,a,b,h,n,options(o)),
    geo:(g,x,y,z,o={})=>frame.geo(g,x,y,z,options(o)),
  };
}

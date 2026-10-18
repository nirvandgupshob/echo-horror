// Nonblocking GPU timing. Query results are polled on later frames; never finish()
// or read pixels in the gameplay loop.
export function createWebGLTimer(renderer,onSample){
 const gl=renderer.getContext(),ext=gl.getExtension('EXT_disjoint_timer_query_webgl2');
 const pending=[];let active=null,frames=0;
 return {
  begin(){if(!ext||gl.isContextLost()||pending.length>=8||++frames%8!==0)return;active=gl.createQuery();gl.beginQuery(ext.TIME_ELAPSED_EXT,active);},
  end(){if(active){gl.endQuery(ext.TIME_ELAPSED_EXT);pending.push(active);active=null;}},
  poll(){if(!pending.length||!ext||gl.isContextLost())return;const disjoint=gl.getParameter(ext.GPU_DISJOINT_EXT);while(pending.length&&gl.getQueryParameter(pending[0],gl.QUERY_RESULT_AVAILABLE)){const q=pending.shift();const ms=gl.getQueryParameter(q,gl.QUERY_RESULT)/1e6;gl.deleteQuery(q);if(!disjoint)onSample(ms);}},
 };
}

// Three's per-pass totals overlap on some Metal drivers. Measure a single span
// from the first world pass to the final tube pass instead of adding durations.
// This adapter is tied to the pinned WebGPU backend's timestamp hook.
export function createWebGPUTimer(renderer,onSample){
 const backend=renderer.backend,device=backend.device;
 if(!backend.trackTimestamp)return {supported:false,begin(){},markEnd(){},end(){}};
 const querySet=device.createQuerySet({type:'timestamp',count:2});
 const resolve=device.createBuffer({size:256,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC});
 const result=device.createBuffer({size:16,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});
 let phase='',started=false,ended=false,pending=false,frames=0;
 backend.initTimestampQuery=(_type,_uid,descriptor)=>{
  delete descriptor.timestampWrites;
  if(phase==='start'&&!started){descriptor.timestampWrites={querySet,beginningOfPassWriteIndex:0};started=true;phase='';}
  else if(phase==='end'&&!ended){descriptor.timestampWrites={querySet,endOfPassWriteIndex:1};ended=true;phase='';}
 };
 return {
  supported:true,
  begin(){if(pending||++frames%12!==0)return;started=ended=false;phase='start';},
  markEnd(){if(started&&!pending)phase='end';},
  end(){phase='';if(!started||!ended||pending)return;started=ended=false;pending=true;
   const encoder=device.createCommandEncoder();encoder.resolveQuerySet(querySet,0,2,resolve,0);encoder.copyBufferToBuffer(resolve,0,result,0,16);device.queue.submit([encoder.finish()]);
   result.mapAsync(GPUMapMode.READ).then(()=>{const times=new BigUint64Array(result.getMappedRange());const ms=Number(times[1]-times[0])/1e6;result.unmap();onSample(ms);}).catch(()=>{}).finally(()=>pending=false);
  },
 };
}

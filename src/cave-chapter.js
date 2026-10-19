import {text as localizedText} from './i18n.js';
import * as THREE from 'three';
import {CaveSpider} from './cave-spider.js';
import { CaveSequence, caveToneRate } from './cave-sequence.js';
import { CAVE_SPAWN } from './cave-layout.js';
import { echo, COLORS } from './echo.js';
import { valveRotation,workProgress } from './work-motion.js';

const V=(x,y,z)=>new THREE.Vector3(x,y,z);
const $=id=>document.getElementById(id);
const vmTake=(vm,pos)=>vm.act('take',pos,'fuse');

export class CaveChapter {
  constructor({level,root,game,player,monster,audio,vm,save,complete,hide,take,flashlight}) {
    Object.assign(this,{level,root,game,player,monster,audio,vm,onSave:save,onComplete:complete,onHide:hide,onTake:take,flashlight});
    this.active=false;this.loops=[];this.spider=new CaveSpider({level,root,game,audio,player});
  }
  start(saved=null,entry=null) {
    this.flashlight.restore(saved?.flashlight);this.level.flashlightItem.taken=this.flashlight.owned;this.level.flashlightItem.obj.visible=!this.flashlight.owned;
    this.active=true;this.sequence=new CaveSequence(saved?.sequence);this.toneAction=null;this.workTarget=null;this.approach=null;this.spider.reset();
    const {player,level,game,monster,vm}=this;
    this.root.visible=true;level.mountOriginalLift();player.level=monster.level=level;
    monster.forcedTarget=null;monster.lures=[];monster.despawn();
    player.reset(saved?.pos||entry?.pos||CAVE_SPAWN,saved?.yaw??entry?.yaw??CAVE_SPAWN.yaw);
    player.pitch=entry?.pitch??0;
    player.keys.clear();
    player.stones=saved?.stones??5;vm.contactSolver=null;vm.work=null;vm.workTransition?.reset();this.working=false;this.lastWorkClick=null;
    game.flags.chapter='cave';game.state='play';game.fear=game.psychosis=0;
    this.pulseT=this.signalT=0;this.spawned=false;
    this.lastRoom=null;this.roomT=0;
    this.applyState();
    // Older checkpoints can predate the ward partitions and furniture layout.
    level.collidePlayer(player.pos,.3);
    player.camera.position.set(player.pos.x,player.pos.y+player.eye,player.pos.z);
    if(this.sequence.tuned&&this.sequence.phase!=='complete')this.spider.activate(saved?.spider);
    for(const l of this.loops)l.setGain(0,.01);
    if(this.audio.ready&&!this.motor){
      this.motor=this.audio.createLoop('loop_lift',V(8.5,1,6),.5,{ref:3,roll:.8});
      this.water=this.audio.createLoop('loop_water',V(13,1,27),.35,{ref:2,roll:1.1});
      this.resonator=this.audio.createLoop('loop_vent',V(49.5,1.2,17.5),.14,{ref:2,roll:1.2});
      this.loops=[this.motor,this.water,this.resonator];
    }
    if(this.audio.ready){
      this.motor.setGain(this.sequence.phase==='descent'?1:0,.1);
      this.water.setGain(this.sequence.drained?.12:1,.5);this.resonator.setGain(this.sequence.drained?.7:0,2);
    }
    $('end').classList.add('hidden');$('fade').style.transition='';$('fade').style.opacity=0;
    game.hint(saved?'Горизонт −11. Ты снова здесь.':'Лифт идёт вниз. Кнопки не отвечают.',4,true);
    if(!saved)this.onSave();
  }
  applyState(){
    const {level,sequence:s}=this;
    level.setLiftOpening(s.opening);level.drained=s.drained;level.syncQuest(s);
    level.water.position.y=s.drained?-.13:.026;
    level.valve.rotation.z=valveRotation(s.drained?4:s.action);
    level.exitWheel.rotation.z=s.phase==='complete'?4:0;level.resonatorDial.rotation.z=s.tuned?2.4:0;
    level.exitGate.position.y=s.phase==='complete'?4.2:1.35;
    level.gateDoor.closed=s.phase!=='complete';level.gateDoor.box=level.gateDoor.closed?{...level.gateBox}:null;
    this.player.frozen=s.phase==='complete';
    // Rebuild with the doorway open after the hands clear the obstruction.
    if(s.opening>=1)level.buildNav();
  }
  focus(camera){
    if(this.player.hidden)return this.player.hidden;
    // Keep the held control selected while walking around its housing.
    if(this.workTarget&&this.player.keys.has('KeyE'))return this.workTarget;
    if(this.sequence.phase==='pry')return {id:'doors',pos:V(8.5,1.4,8.4)};
    if(this.sequence.phase!=='explore')return null;
    const dir=V(0,0,0);camera.getWorldDirection(dir);
    return [...this.level.stationItems,...this.level.items.filter(it=>['flashlight','relayFuse','caveTone','caveClue'].includes(it.type)&&!it.taken),...this.level.items.filter(it=>it.type==='locker'&&it.low)].map(it=>{
      const to=it.pos.clone().sub(camera.position),d=to.length(),dot=to.normalize().dot(dir);return {it,d,dot,score:dot-d*.03};
    }).filter(v=>v.d<2.2&&(v.d<.85||v.dot>.75)).sort((a,b)=>b.score-a.score)[0]?.it||null;
  }
  interact(camera){
    const p=this.player;
    if(this.game.state!=='play'||this.sequence.phase!=='explore'||p.frozen||p.fallT>0||p.pitFall)return;
    const it=this.focus(camera);
    if(it?.type==='locker'&&it.low)this.onHide(it);
    if(it?.type==='relayFuse'){
      if(this.sequence.takeFuse()){this.onTake(it);vmTake(this.vm,it.pos);this.game.hint('Запасной ПН-2. Южный фидер — в нижнем резервуаре.',5,true);this.onSave();}return;
    }
    if(it?.type==='caveClue'){this.game.hint('Шильдик: ЛЕВЫЙ — II, СРЕДНИЙ — 0, ПРАВЫЙ — I. Щелчки повторяют эту последовательность.',8,true);return;}
    if(it?.type==='caveTone'){
      if(!this.sequence.relayPowered){this.game.hint('Частотный блок обесточен. Сначала восстанови южный фидер.',4,true);return;}
      if(!this.sequence.tonesTuned&&!this.toneAction){this.toneAction={it,time:0,from:this.level.toneDials[it.index].rotation.z,committed:false};}return;
    }
    if(it?.type==='flashlight'){this.onTake(it);this.flashlight.acquire();this.game.hint('Динамо-фонарь. [T] — свет. Удерживай [R] — трясти и заряжать. Шум слышно.',7,true);this.onSave();}
  }
  objective(){
    const s=this.sequence;
    if(s.phase==='descent')return 'Дождаться остановки лифта.';
    if(s.phase==='stalled')return 'Удержаться на ногах.';
    if(s.phase==='pry')return 'Удерживай [E], чтобы раздвинуть створки руками.';
    if(!this.flashlight.owned&&!s.drained)return 'Осмотреть больничный блок. Взять фонарь с полки у лифта.';
    if(!s.drained)return 'Снять давление в дренажном коллекторе. Иди на звук воды.';
    if(!s.tuned)return 'Включить резонатор в палате за Залом подвесов. Есть два обхода разлома.';
    if(!s.relayPowered)return s.hasFuse?'Установить запасной ПН-2 в южный фидер нижнего резервуара.':'Найти запасной ПН-2 в северной геодезической камере. Не дай щелчкам выдать тебя.';
    if(!s.tonesTuned)return 'Согласовать три частоты в резонансной галерее. [V] — услышать сигнатуру. Маркировка — на пульте.';
    return 'Оба фидера согласованы. Открыть затвор нижней штольни.';
  }
  prompt(it){
    if(!it)return '';
    if(it.type==='flashlight')return '[E] Взять динамо-фонарь с полки';
    if(it.type==='relayFuse')return '[E] Взять запасной ПН-2';
    if(it.type==='caveClue')return '[E] Прочитать маркировку частот';
    if(it.type==='caveTone')return this.sequence.tonesTuned?'Частоты согласованы.':`[E] Повернуть ${['левый','средний','правый'][it.index]} регулятор · ${['—','0','I','II'][this.sequence.tones[it.index]+1]}`;
    if(it.type==='locker')return this.player.hidden?'[E] Вылезти':'[E] Залезть под кровать';
    const s=this.sequence;
    const working=s.actionId===it.id;
    if(it.id==='doors')return this.player.keys.has('KeyE')?'Раздвигаешь створки… Держи E':'[держи E] Раздвинуть створки';
    if(it.id==='valve')return s.drained?'Давление снято.':working?'Вращаешь вентиль… Держи E':'[держи E] Открыть дренаж';
    if(it.id==='resonator')return !s.drained?'Нет питания. Контур затоплен.':s.tuned?'Контур работает.':working?'Настраиваешь контур… Держи E':'[держи E] Настроить резонатор';
    if(it.id==='relay')return s.relayPowered?'Южный фидер запитан.':!s.hasFuse?'Нужен запасной ПН-2 из геодезической камеры.':working?'Устанавливаешь предохранитель… Держи E':'[держи E] Восстановить южный фидер';
    return s.exitReady?working?'Открываешь затвор… Держи E':'[держи E] Открыть затвор':'Затвор заперт. Восстанови южный фидер и согласуй три частоты.';
  }
  alignWork(target,normal,dt){
    const p=this.player,stance=target.clone().addScaledVector(normal,.62);
    if(!this.approach||this.approach.stance.distanceToSquared(stance)>.0001){
      const distance=Math.hypot(stance.x-p.pos.x,stance.z-p.pos.z),samples=Math.max(1,Math.ceil(distance/.1));
      let blocked=false;
      for(let i=1;i<=samples;i++){
        const t=i/samples;
        if(this.level.blockedPoint?.(p.pos.x+(stance.x-p.pos.x)*t,p.pos.z+(stance.z-p.pos.z)*t,.3)){blocked=true;break;}
      }
      const path=blocked?this.level.findPath?.(p.pos,stance):null;
      this.approach={stance:stance.clone(),path:path?[...path,stance.clone()]:[]};
    }
    const path=this.approach.path;
    while(path.length&&Math.hypot(path[0].x-p.pos.x,path[0].z-p.pos.z)<.08)path.shift();
    const next=path[0]||stance;
    const k=1-Math.exp(-dt*10),dx=next.x-p.pos.x,dz=next.z-p.pos.z,distance=Math.hypot(dx,dz);
    const step=Math.min(distance*k,dt*2.0);
    if(distance>.001){p.pos.x+=dx/distance*step;p.pos.z+=dz/distance*step;}
    this.level.collidePlayer(p.pos,.3);
    const yaw=Math.atan2(p.pos.x-target.x,p.pos.z-target.z),delta=Math.atan2(Math.sin(yaw-p.yaw),Math.cos(yaw-p.yaw));
    p.yaw+=delta*k;p.pitch=THREE.MathUtils.damp(p.pitch,Math.atan2(target.y-p.pos.y-p.eye,Math.hypot(target.x-p.pos.x,target.z-p.pos.z)),12,dt);
    p.lookTarget=target.clone();
  }
  update(dt,camera){
    const {sequence:s,player:p,level,game,audio,vm}=this;
    if(p.pitFall){p.frozen=true;vm.work=null;return '';}
    if(!p.keys.has('KeyE')){this.workTarget=null;if(!this.toneAction)this.approach=null;}
    const it=this.focus(camera), held=p.keys.has('KeyE')&&!!it&&it.type!=='locker';
    vm.work=null;p.lookTarget=null;
    const wasWorking=this.working;this.working=false;
    const allowed=s.phase==='pry'||s.phase==='explore'&&(it?.id==='valve'?!s.drained:it?.id==='resonator'?s.drained&&!s.tuned:it?.id==='relay'?s.hasFuse&&!s.relayPowered:it?.id==='exit'?s.exitReady:false);
    let ready=false;
    if(held&&allowed){
      this.workTarget=it;
      const target=s.phase==='pry'?V(8.5,1.36,8.37):it.pos,normal=V(0,0,['resonator','relay'].includes(it?.id)?1:-1);
      this.alignWork(target,normal,dt);this.working=true;
      ready=Math.hypot(p.pos.x-target.x-normal.x*.62,p.pos.z-target.z-normal.z*.62)<.06;
    }
    for(const event of s.advance(dt,held&&ready,it?.id)){
      this.event(event);if(['opened','valve','resonator','relay','exit'].includes(event)){this.working=false;this.workTarget=null;this.approach=null;}
    }
    p.frozen=s.phase==='complete'||this.working;
    if(s.phase==='descent'){
      p.shake=.07;
      if(this.motor)this.motor.update();
    }
    if(s.phase==='pry'){
      if(held&&ready){
        const target=V(8.5,1.36,8.37),normal=V(0,0,-1);
        vm.work={kind:'pryLift',k:s.opening,time:s.holdTime,target,normal};
        p.shake=.012;
      }
      level.setLiftOpening(s.opening);
    }
    if(s.phase==='explore'){
      const room=level.roomAt(p.pos.x,p.pos.z)?.name||'Каменная перемычка';
      if(room!==this.lastRoom){this.lastRoom=room;this.roomT=4;localizedText($('location'), room);$('location').style.opacity=1;}
      this.roomT-=dt;if(this.roomT<=0)$('location').style.opacity=0;
      const valveTarget=s.drained?8:s.actionId==='valve'?valveRotation(s.action):0;
      level.valve.rotation.z=s.actionId==='valve'&&s.action>.3?valveTarget:THREE.MathUtils.damp(level.valve.rotation.z,valveTarget,10,dt);
      const exitTarget=s.actionId==='exit'?valveRotation(s.action,2):0;
      level.exitWheel.rotation.z=s.actionId==='exit'&&s.action>.3?exitTarget:THREE.MathUtils.damp(level.exitWheel.rotation.z,exitTarget,10,dt);
      const dialTarget=s.tuned?2.4:s.actionId==='resonator'?workProgress(s.action,3)*2.4:0;
      level.resonatorDial.rotation.z=s.actionId==='resonator'&&s.action>.3?dialTarget:THREE.MathUtils.damp(level.resonatorDial.rotation.z,dialTarget,10,dt);
      if(held&&it&&s.actionId===it.id&&s.action>0){
        const duration=['valve','relay'].includes(it.id)?4:it.id==='exit'?2:3,normal=V(0,0,['resonator','relay'].includes(it.id)?1:-1);
        vm.work={kind:it.id==='relay'?'insertFuse':it.id==='resonator'?'caveDial':'caveValve',slot:0,k:s.action/duration,time:s.action,duration,
          rotor:it.id==='resonator'?level.resonatorDial:it.id==='exit'?level.exitWheel:level.valve,
          angle:it.id==='resonator'?level.resonatorDial.rotation.z:it.id==='exit'?level.exitWheel.rotation.z:level.valve.rotation.z,
          target:it.pos.clone(),normal};p.frozen=true;
        const click=`${it.id}:${Math.floor(vm.work.angle/(it.id==='resonator'?.8:1.05))}`;
        if(s.action>.32&&this.lastWorkClick!==click){
          this.lastWorkClick=click;
          audio.play(it.id==='resonator'?'tick':'metal_heavy',it.pos,{gain:it.id==='resonator'?.12:.18,rate:it.id==='resonator'?1.4:1.2,wet:.35});
          game.noise(it.pos.clone(),{radius:it.id==='resonator'?2.2:4.5,visual:it.id==='resonator'?2.8:5,source:'player',kind:'door',color:COLORS.machine,strength:.45,decay:1.2});
        }
      }
      level.water.position.y=THREE.MathUtils.damp(level.water.position.y,s.drained?-.13:.026,1,dt);
      const exitK=s.actionId==='exit'?workProgress(s.action,2):0;
      const gateTarget=THREE.MathUtils.lerp(1.35,4.2,exitK);
      level.exitGate.position.y=s.actionId==='exit'?gateTarget:THREE.MathUtils.damp(level.exitGate.position.y,gateTarget,9,dt);
      if(this.toneAction){
        const a=this.toneAction,rotor=level.toneDials[a.it.index];this.alignWork(a.it.pos,V(0,0,1),dt);p.frozen=true;this.working=true;
        const near=Math.hypot(p.pos.x-a.it.pos.x,p.pos.z-a.it.pos.z-.62)<.07;
        if(near)a.time+=dt;const k=Math.min(1,a.time/.65),next=(s.tones[a.it.index]+1)%3;
        rotor.rotation.z=THREE.MathUtils.lerp(a.from,next*.8,THREE.MathUtils.smoothstep(k,.3,.85));
        vm.work=near?{kind:'caveDial',target:a.it.pos.clone(),normal:V(0,0,1),k,time:k*3,angle:rotor.rotation.z,rotor}:null;
        if(k>=1){s.turnTone(a.it.index);this.toneAction=null;vm.work=null;this.working=false;p.frozen=false;level.syncQuest(s);audio.play('tick',a.it.pos,{gain:.4,rate:caveToneRate(next),wet:.5});game.noise(a.it.pos,{radius:3,visual:3,source:'player',kind:'door',strength:.5});if(s.tonesTuned){game.hint('Фидеры согласованы. Теперь — затвор нижней штольни.',5,true);audio.ding(a.it.pos);}this.onSave();}
      }
      if(p.listening&&s.relayPowered&&!s.tonesTuned&&p.pos.distanceTo(V(32,0,45))<6){
        this.toneCueT=(this.toneCueT||0)-dt;if(this.toneCueT<=0){this.toneCue=(this.toneCue||0)%3;const index=[2,0,1][this.toneCue++];this.toneCueT=this.toneCue===3?2.1:.75;audio.play('tick',V(32,1.4,45),{gain:.5,rate:caveToneRate(index),wet:.8});echo.emit(V(32,1.4,45),{radius:3,strength:.7,decay:1.2,color:COLORS.item});}
      }else{this.toneCue=0;this.toneCueT=.3;}
      const distance=Math.hypot(p.pos.x-8.5,p.pos.z-7);
      if(s.drained&&!this.spawned&&distance>12){
        this.spawned=true;
        const spawn=level.randomWalkable(p.pos,28,16);
        if(spawn){this.monster.spawn(spawn,'wander');this.monster.idleT=8;}
        game.hint('Из ствола ответили шаги. Оно тоже спустилось.',5,true);
      }
      this.signalT-=dt;
      if(s.drained&&this.signalT<=0){
        this.signalT=4;
        const source=s.tuned?V(50.5,1.2,47.8):V(49.5,1.5,17.5);
        if(source.distanceTo(camera.position)<7)echo.emit(source,{radius:1.1,speed:2.5,strength:.5,decay:1.5,color:COLORS.item});
      }
    }
    if(!this.working){this.workTarget=null;this.approach=null;}
    if(wasWorking&&!this.working){
      // Preserve the last view orientation when returning mouse control.
      p.yaw=camera.rotation.y;p.pitch=camera.rotation.x;p.lookTarget=null;this.lastWorkClick=null;
    }
    this.pulseT-=dt;
    if(this.pulseT<=0&&(s.phase==='descent'||s.phase==='pry'&&held&&ready&&s.holdTime>.3)){
      this.pulseT=s.phase==='descent'?1.4:1.1;
      const at=V(8.5,1,8.3);
      echo.emit(at,{radius:s.phase==='descent'?7:4,speed:9,strength:.7,decay:1.2,color:COLORS.machine});
      if(held&&s.phase==='pry')audio.scratch(at);
    }
    return this.prompt(it);
  }
  event(event){
    const {audio,player:p,game,level}=this;
    if(event==='crash'){
      if(this.motor)this.motor.setGain(0,.03);
      audio.play('slam',V(8.5,2,7),{gain:1.2,rate:.65,wet:.8});p.shake=1.6;
      echo.emit(V(8.5,.3,7),{radius:18,speed:30,strength:2,decay:1.2,color:COLORS.machine});
      game.hint('Лифт встал. Привод дверей не отвечает.',4,true);
    }
    if(event==='pry')game.hint('Подцепить створки пальцами. Удерживай [E].',5,true);
    if(event==='opened'){
      p.frozen=false;p.lookTarget=null;level.setLiftOpening(1);level.buildNav();
      audio.door(V(8.5,1,8.4));game.hint('Больничный блок. На полке у выхода — фонарь. [E] — взять.',6,true);this.onSave();
    }
    if(event==='valve'){
      level.drained=true;if(this.water)this.water.setGain(.12,2);
      if(this.resonator)this.resonator.setGain(.7,2);
      audio.play('metal_heavy',V(13.5,.5,27),{gain:.8,rate:.6,wet:.9});
      game.hint('Вода уходит. Питание подано в палату 0.',4,true);this.onSave();
    }
    if(event==='relay'){this.level.syncQuest(this.sequence);audio.play('click',V(13,1.15,47.9),{gain:.7,rate:.8,wet:.5});game.hint('Южный фидер запитан. Найди сигнатуру в галерее: вслушайся [V] или прочитай маркировку на пульте.',6,true);this.onSave();}
    if(event==='resonator'){
      this.spider.activate();
      audio.ding(V(49.5,2,17.5));
      echo.emit(V(49.5,1,17.5),{radius:18,speed:9,strength:1.1,decay:1.2,color:COLORS.machine});
      game.hint('Оно отзывается на его щелчки. Держи луч на морде, пока не смолкнет.',6,true);this.onSave();
    }
    if(event==='exit'){
      level.gateDoor.closed=false;level.gateDoor.box=null;level.exitGate.position.y=4.2;
      this.spider.reset();this.monster.despawn();for(const l of this.loops)l.setGain(0,2);
      this.onComplete();
    }
  }
  snapshot(){return {spider:this.spider.snapshot(),flashlight:this.flashlight.snapshot(),sequence:this.sequence.snapshot(),pos:{x:this.player.pos.x,z:this.player.pos.z},yaw:this.player.yaw,stones:this.player.stones};}
}

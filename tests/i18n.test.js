import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseAst} from 'rollup/parseAst';
import english from '../src/locales/en.json' with {type:'json'};
import {t,getLanguage,setLanguage} from '../src/i18n.js';

test('English is the default; changing language preserves authored Russian and rejects unknown locales',()=>{
 assert.equal(getLanguage(),'en');assert.equal(t('Настройки'),'Settings');
 assert.equal(setLanguage('ru',{persist:false}),true);assert.equal(t('Настройки'),'Настройки');
 assert.equal(setLanguage('de',{persist:false}),false);assert.equal(getLanguage(),'ru');
 setLanguage('en',{persist:false});
});
test('dynamic prompts translate nested choices, numbers, uppercase room names and HUD fields',()=>{
 assert.equal(t('[E] Повернуть левый регулятор · II'),'[E] Turn the left dial · II');
 assert.equal(t('ДВЕРЬ ▲ 88% [1]'),'DOOR ▲ 88% [1]');
 assert.equal(t('МЕДБЛОК'),'MEDICAL WARD');
 assert.equal(t('  Настройки '),'  Settings ');
 assert.equal(t('Материалы: 5 / 12'),'Materials: 5 / 12');
 assert.equal(t('WebGL 2 · 60 FPS\nGPU — · CPU 2.4 ms\nМир 1920 × 1080 · 85%'),'WebGL 2 · 60 FPS\nGPU — · CPU 2.4 ms\nWorld 1920 × 1080 · 85%');
 assert.equal(t('WebGL 2 · 60 FPS · GPU — · CPU 2.4 ms · Мир 1920 × 1080 · 85%'),'WebGL 2 · 60 FPS · GPU — · CPU 2.4 ms · World 1920 × 1080 · 85%');
 assert.equal(t('[T] light · 63%'),'[T] light · 63%');
 assert.equal(t('Материалы: 5 / 12','ru'),'Материалы: 5 / 12');
});
test('English catalogue covers authored Russian text and interpolation templates in both chapters and HTML',()=>{
 const strings=new Set();
 function walk(node){
  if(!node||typeof node!=='object')return;
  if(node.type==='Literal'&&typeof node.value==='string'&&/[А-Яа-яЁё]/.test(node.value))strings.add(node.value);
  if(node.type==='TemplateLiteral'){
   const value=node.quasis.map((q,i)=>q.value.cooked+(i<node.expressions.length?`{${i}}`:'')).join('');
   if(/[А-Яа-яЁё]/.test(value))strings.add(value);
  }
  for(const value of Object.values(node))if(Array.isArray(value))value.forEach(walk);else if(value&&typeof value==='object')walk(value);
 }
 for(const file of fs.readdirSync(new URL('../src/',import.meta.url)).filter(f=>f.endsWith('.js')&&f!=='i18n.js'))walk(parseAst(fs.readFileSync(new URL('../src/'+file,import.meta.url),'utf8')));
 const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
 for(const match of html.matchAll(/>([^<>]+)</g))if(/[А-Яа-яЁё]/.test(match[1])&&match[1].trim()!=='Русский')strings.add(match[1].trim());
 for(const match of html.matchAll(/aria-label="([^"]+)"/g))if(/[А-Яа-яЁё]/.test(match[1]))strings.add(match[1]);
 assert.deepEqual([...strings].filter(value=>!Object.hasOwn(english,value)),[]);
 for(const [source,value]of Object.entries(english)){
  assert.ok(value.trim(),source);assert.doesNotMatch(value,/[А-Яа-яЁё]/,source);
  assert.deepEqual([...source.matchAll(/{(\d+)}/g)].map(m=>m[1]).sort(),[...value.matchAll(/{(\d+)}/g)].map(m=>m[1]).sort(),source);
 }
});

// Translate at the display boundary: room names and story flags remain stable.
import english from './locales/en.json' with {type:'json'};

export const LANGUAGES=['en','ru'];
const normalize=value=>String(value).trim().replace(/\s+/g,' ');
const exact=new Map(Object.entries(english).filter(([key])=>!/{\d+}/.test(key)).map(([key,value])=>[normalize(key),value]));
const upper=new Map([...exact].map(([key,value])=>[key.toUpperCase(),value.toUpperCase()]));
const escape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const patterns=Object.entries(english).filter(([key])=>/{\d+}/.test(key)).map(([key,value])=>{
 const ids=[],parts=normalize(key).split(/({\d+})/).map(part=>{
  if(/^{\d+}$/.test(part)){ids.push(+part.slice(1,-1));return '(.+?)';}return escape(part);
 });
 return {regex:new RegExp(`^${parts.join('')}$`),ids,value,length:key.replace(/{\d+}/g,'').length};
}).sort((a,b)=>b.length-a.length);
let language='en';
try{const saved=globalThis.window?.localStorage?.getItem('echo.language');if(LANGUAGES.includes(saved))language=saved;}catch{}
const listeners=new Set(),textRecords=new Map(),htmlRecords=new Map(),attributeRecords=new Map(),missing=new Set();
export const getLanguage=()=>language;

export function t(raw,locale=language){
 if(typeof raw!=='string'||locale==='ru'||!/[А-Яа-яЁё]/.test(raw))return raw;
 const key=normalize(raw),value=exact.get(key);
 let translated=value ?? (key===key.toUpperCase()?upper.get(key):undefined);
 if(translated===undefined)for(const pattern of patterns){
  const match=key.match(pattern.regex);if(!match)continue;
  const values=new Map(pattern.ids.map((id,i)=>[id,t(match[i+1],locale)]));
  translated=pattern.value.replace(/{(\d+)}/g,(_,id)=>values.get(+id));break;
 }
 // Independently composed HUD fields keep their spacing and translate each
 // field, rather than treating the whole row as one grammatical sentence.
 if(translated===undefined&&/\S {2,}\S/.test(raw))translated=raw.split(/( {2,})/).map(part=>/^ +$/.test(part)?part:t(part,locale)).join('');
 if(translated===undefined){if(!/<[a-z][^>]*>/i.test(raw))missing.add(raw);return raw;}
 return raw.match(/^\s*/)[0]+translated+raw.match(/\s*$/)[0];
}

export function text(node,raw){
 const source=String(raw??''),value=t(source);textRecords.set(node,source);
 if(node.textContent!==value)node.textContent=value;
}
function rememberAttribute(element,name,raw){
 let attributes=attributeRecords.get(element);if(!attributes){attributes=new Map();attributeRecords.set(element,attributes);}attributes.set(name,raw);
 const value=t(raw);if(element.getAttribute(name)!==value)element.setAttribute(name,value);
}
export function localizeTree(root){
 if(!root)return;
 const document=root.ownerDocument||root,walker=document.createTreeWalker(root,4);let node;
 while((node=walker.nextNode())){
  if(node.parentElement?.closest('script,style,[data-no-i18n]'))continue;
  if(/[А-Яа-яЁё]/.test(node.data)&&!textRecords.has(node))text(node,node.data);
 }
 const elements=root.querySelectorAll?.('[aria-label],[title],[placeholder]')||[];
 for(const element of elements)for(const name of ['aria-label','title','placeholder']){
  const value=element.getAttribute(name);if(value&&/[А-Яа-яЁё]/.test(value))rememberAttribute(element,name,value);
 }
}
export function html(node,raw){
 const source=String(raw??''),previous=htmlRecords.get(node);
 if(previous?.source===source&&previous.language===language)return;
 htmlRecords.set(node,{source,language});node.innerHTML=t(source);localizeTree(node);
}
// Keep authored text when a control is rebuilt after initial localization.
export function sourceText(node){return textRecords.get(node)??[...node.childNodes].map(child=>child.nodeType===3?(textRecords.get(child)??child.data):sourceText(child)).join('');}
export function sourceHTML(node){
 const clone=node.cloneNode(true),document=node.ownerDocument;
 const originals=document.createTreeWalker(node,4),copies=document.createTreeWalker(clone,4);
 let original,copy;while((original=originals.nextNode())&&(copy=copies.nextNode()))copy.data=textRecords.get(original)??original.data;
 return htmlRecords.get(node)?.source??clone.innerHTML;
}
export function onLanguageChange(listener){listeners.add(listener);return()=>listeners.delete(listener);}
export function setLanguage(value,{persist=true}={}){
 if(!LANGUAGES.includes(value))return false;language=value;missing.clear();
 if(persist)try{globalThis.window?.localStorage?.setItem('echo.language',language);}catch{}
 if(globalThis.document){document.documentElement.lang=language;document.title=language==='en'?'ECHO':'ЭХО';}
 for(const [node,{source}]of [...htmlRecords]){if(!node.isConnected){htmlRecords.delete(node);continue;}htmlRecords.delete(node);html(node,source);}
 // Rebuild authored HTML first so detached text from the previous language is discarded.
 for(const [node,source]of [...textRecords]){if(!node.isConnected){textRecords.delete(node);continue;}text(node,source);}
 for(const [node,attributes]of attributeRecords){if(!node.isConnected){attributeRecords.delete(node);continue;}for(const[name,source]of attributes)rememberAttribute(node,name,source);}
 for(const listener of listeners)listener(language);return true;
}
export const untranslated=()=>[...missing];
export function initializeLanguage(){
 if(!globalThis.document)return;document.documentElement.lang=language;localizeTree(document.documentElement);document.title=language==='en'?'ECHO':'ЭХО';
}

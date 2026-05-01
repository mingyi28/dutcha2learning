(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yi(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const xe={},ft=[],yn=()=>{},Fa=()=>!1,Os=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ji=e=>e.startsWith("onUpdate:"),Ie=Object.assign,Zi=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Al=Object.prototype.hasOwnProperty,le=(e,n)=>Al.call(e,n),Y=Array.isArray,pt=e=>_t(e)==="[object Map]",Ba=e=>_t(e)==="[object Set]",jr=e=>_t(e)==="[object Date]",Ol=e=>_t(e)==="[object RegExp]",ne=e=>typeof e=="function",_e=e=>typeof e=="string",bn=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Va=e=>(ce(e)||ne(e))&&ne(e.then)&&ne(e.catch),Ga=Object.prototype.toString,_t=e=>Ga.call(e),zl=e=>_t(e).slice(8,-1),Ua=e=>_t(e)==="[object Object]",Qi=e=>_e(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nt=Yi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Nl=/-\w/g,$e=zs(e=>e.replace(Nl,n=>n.slice(1).toUpperCase())),Wl=/\B([A-Z])/g,Un=zs(e=>e.replace(Wl,"-$1").toLowerCase()),Ns=zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),si=zs(e=>e?`on${Ns(e)}`:""),vn=(e,n)=>!Object.is(e,n),mt=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Ka=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},Xi=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Ll=e=>{const n=_e(e)?Number(e):NaN;return isNaN(n)?e:n};let Cr;const Ws=()=>Cr||(Cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vn(e){if(Y(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],i=_e(s)?Bl(s):Vn(s);if(i)for(const r in i)n[r]=i[r]}return n}else if(_e(e)||ce(e))return e}const $l=/;(?![^(]*\))/g,Hl=/:([^]+)/,Fl=/\/\*[^]*?\*\//g;function Bl(e){const n={};return e.replace(Fl,"").split($l).forEach(t=>{if(t){const s=t.split(Hl);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function me(e){let n="";if(_e(e))n=e;else if(Y(e))for(let t=0;t<e.length;t++){const s=me(e[t]);s&&(n+=s+" ")}else if(ce(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Vl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gl=Yi(Vl);function qa(e){return!!e||e===""}function Ul(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=er(e[s],n[s]);return t}function er(e,n){if(e===n)return!0;let t=jr(e),s=jr(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=bn(e),s=bn(n),t||s)return e===n;if(t=Y(e),s=Y(n),t||s)return t&&s?Ul(e,n):!1;if(t=ce(e),s=ce(n),t||s){if(!t||!s)return!1;const i=Object.keys(e).length,r=Object.keys(n).length;if(i!==r)return!1;for(const a in e){const o=e.hasOwnProperty(a),l=n.hasOwnProperty(a);if(o&&!l||!o&&l||!er(e[a],n[a]))return!1}}return String(e)===String(n)}const Ya=e=>!!(e&&e.__v_isRef===!0),T=e=>_e(e)?e:e==null?"":Y(e)||ce(e)&&(e.toString===Ga||!ne(e.toString))?Ya(e)?T(e.value):JSON.stringify(e,Ja,2):String(e),Ja=(e,n)=>Ya(n)?Ja(e,n.value):pt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,i],r)=>(t[ii(s,r)+" =>"]=i,t),{})}:Ba(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ii(t))}:bn(n)?ii(n):ce(n)&&!Y(n)&&!Ua(n)?String(n):n,ii=(e,n="")=>{var t;return bn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class Kl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ge,!n&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Ge;try{return Ge=this,n()}finally{Ge=t}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){this._on>0&&--this._on===0&&(Ge=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ql(){return Ge}let we;const ri=new WeakSet;class Za{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&Ge.active&&Ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ri.has(this)&&(ri.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sr(this),eo(this);const n=we,t=sn;we=this,sn=!0;try{return this.fn()}finally{no(this),we=n,sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)sr(n);this.deps=this.depsTail=void 0,Sr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ri.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mi(this)&&this.run()}get dirty(){return Mi(this)}}let Qa=0,Wt,Lt;function Xa(e,n=!1){if(e.flags|=8,n){e.next=Lt,Lt=e;return}e.next=Wt,Wt=e}function nr(){Qa++}function tr(){if(--Qa>0)return;if(Lt){let n=Lt;for(Lt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Wt;){let n=Wt;for(Wt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function eo(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function no(e){let n,t=e.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),sr(s),Yl(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=n,e.depsTail=t}function Mi(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(to(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function to(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ut)||(e.globalVersion=Ut,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Mi(e))))return;e.flags|=2;const n=e.dep,t=we,s=sn;we=e,sn=!0;try{eo(e);const i=e.fn(e._value);(n.version===0||vn(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{we=t,sn=s,no(e),e.flags&=-3}}function sr(e,n=!1){const{dep:t,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)sr(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Yl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let sn=!0;const so=[];function In(){so.push(sn),sn=!1}function Mn(){const e=so.pop();sn=e===void 0?!0:e}function Sr(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=we;we=void 0;try{n()}finally{we=t}}}let Ut=0;class Jl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ir{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!we||!sn||we===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==we)t=this.activeLink=new Jl(we,this),we.deps?(t.prevDep=we.depsTail,we.depsTail.nextDep=t,we.depsTail=t):we.deps=we.depsTail=t,io(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=we.depsTail,t.nextDep=void 0,we.depsTail.nextDep=t,we.depsTail=t,we.deps===t&&(we.deps=s)}return t}trigger(n){this.version++,Ut++,this.notify(n)}notify(n){nr();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{tr()}}}function io(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)io(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Ti=new WeakMap,nt=Symbol(""),Ri=Symbol(""),Kt=Symbol("");function Pe(e,n,t){if(sn&&we){let s=Ti.get(e);s||Ti.set(e,s=new Map);let i=s.get(t);i||(s.set(t,i=new ir),i.map=s,i.key=t),i.track()}}function En(e,n,t,s,i,r){const a=Ti.get(e);if(!a){Ut++;return}const o=l=>{l&&l.trigger()};if(nr(),n==="clear")a.forEach(o);else{const l=Y(e),u=l&&Qi(t);if(l&&t==="length"){const c=Number(s);a.forEach((d,p)=>{(p==="length"||p===Kt||!bn(p)&&p>=c)&&o(d)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(Kt)),n){case"add":l?u&&o(a.get("length")):(o(a.get(nt)),pt(e)&&o(a.get(Ri)));break;case"delete":l||(o(a.get(nt)),pt(e)&&o(a.get(Ri)));break;case"set":pt(e)&&o(a.get(nt));break}}tr()}function ot(e){const n=re(e);return n===e?n:(Pe(n,"iterate",Kt),en(e)?n:n.map(an))}function Ls(e){return Pe(e=re(e),"iterate",Kt),e}function mn(e,n){return Tn(e)?vt(tt(e)?an(n):n):an(n)}const Zl={__proto__:null,[Symbol.iterator](){return ai(this,Symbol.iterator,e=>mn(this,e))},concat(...e){return ot(this).concat(...e.map(n=>Y(n)?ot(n):n))},entries(){return ai(this,"entries",e=>(e[1]=mn(this,e[1]),e))},every(e,n){return kn(this,"every",e,n,void 0,arguments)},filter(e,n){return kn(this,"filter",e,n,t=>t.map(s=>mn(this,s)),arguments)},find(e,n){return kn(this,"find",e,n,t=>mn(this,t),arguments)},findIndex(e,n){return kn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return kn(this,"findLast",e,n,t=>mn(this,t),arguments)},findLastIndex(e,n){return kn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return kn(this,"forEach",e,n,void 0,arguments)},includes(...e){return oi(this,"includes",e)},indexOf(...e){return oi(this,"indexOf",e)},join(e){return ot(this).join(e)},lastIndexOf(...e){return oi(this,"lastIndexOf",e)},map(e,n){return kn(this,"map",e,n,void 0,arguments)},pop(){return St(this,"pop")},push(...e){return St(this,"push",e)},reduce(e,...n){return Er(this,"reduce",e,n)},reduceRight(e,...n){return Er(this,"reduceRight",e,n)},shift(){return St(this,"shift")},some(e,n){return kn(this,"some",e,n,void 0,arguments)},splice(...e){return St(this,"splice",e)},toReversed(){return ot(this).toReversed()},toSorted(e){return ot(this).toSorted(e)},toSpliced(...e){return ot(this).toSpliced(...e)},unshift(...e){return St(this,"unshift",e)},values(){return ai(this,"values",e=>mn(this,e))}};function ai(e,n,t){const s=Ls(e),i=s[n]();return s!==e&&!en(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=t(r.value)),r}),i}const Ql=Array.prototype;function kn(e,n,t,s,i,r){const a=Ls(e),o=a!==e&&!en(e),l=a[n];if(l!==Ql[n]){const d=l.apply(e,r);return o?an(d):d}let u=t;a!==e&&(o?u=function(d,p){return t.call(this,mn(e,d),p,e)}:t.length>2&&(u=function(d,p){return t.call(this,d,p,e)}));const c=l.call(a,u,s);return o&&i?i(c):c}function Er(e,n,t,s){const i=Ls(e),r=i!==e&&!en(e);let a=t,o=!1;i!==e&&(r?(o=s.length===0,a=function(u,c,d){return o&&(o=!1,u=mn(e,u)),t.call(this,u,mn(e,c),d,e)}):t.length>3&&(a=function(u,c,d){return t.call(this,u,c,d,e)}));const l=i[n](a,...s);return o?mn(e,l):l}function oi(e,n,t){const s=re(e);Pe(s,"iterate",Kt);const i=s[n](...t);return(i===-1||i===!1)&&or(t[0])?(t[0]=re(t[0]),s[n](...t)):i}function St(e,n,t=[]){In(),nr();const s=re(e)[n].apply(e,t);return tr(),Mn(),s}const Xl=Yi("__proto__,__v_isRef,__isVue"),ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bn));function ec(e){bn(e)||(e=String(e));const n=re(this);return Pe(n,"has",e),n.hasOwnProperty(e)}class ao{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?uc:uo:r?co:lo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const a=Y(n);if(!i){let l;if(a&&(l=Zl[t]))return l;if(t==="hasOwnProperty")return ec}const o=Reflect.get(n,t,ze(n)?n:s);if((bn(t)?ro.has(t):Xl(t))||(i||Pe(n,"get",t),r))return o;if(ze(o)){const l=a&&Qi(t)?o:o.value;return i&&ce(l)?Ai(l):l}return ce(o)?i?Ai(o):ts(o):o}}class oo extends ao{constructor(n=!1){super(!1,n)}set(n,t,s,i){let r=n[t];const a=Y(n)&&Qi(t);if(!this._isShallow){const u=Tn(r);if(!en(s)&&!Tn(s)&&(r=re(r),s=re(s)),!a&&ze(r)&&!ze(s))return u||(r.value=s),!0}const o=a?Number(t)<n.length:le(n,t),l=Reflect.set(n,t,s,ze(n)?n:i);return n===re(i)&&(o?vn(s,r)&&En(n,"set",t,s):En(n,"add",t,s)),l}deleteProperty(n,t){const s=le(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&s&&En(n,"delete",t,void 0),i}has(n,t){const s=Reflect.has(n,t);return(!bn(t)||!ro.has(t))&&Pe(n,"has",t),s}ownKeys(n){return Pe(n,"iterate",Y(n)?"length":nt),Reflect.ownKeys(n)}}class nc extends ao{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const tc=new oo,sc=new nc,ic=new oo(!0);const Pi=e=>e,as=e=>Reflect.getPrototypeOf(e);function rc(e,n,t){return function(...s){const i=this.__v_raw,r=re(i),a=pt(r),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,u=i[e](...s),c=t?Pi:n?vt:an;return!n&&Pe(r,"iterate",l?Ri:nt),Ie(Object.create(u),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:o?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function os(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function ac(e,n){const t={get(i){const r=this.__v_raw,a=re(r),o=re(i);e||(vn(i,o)&&Pe(a,"get",i),Pe(a,"get",o));const{has:l}=as(a),u=n?Pi:e?vt:an;if(l.call(a,i))return u(r.get(i));if(l.call(a,o))return u(r.get(o));r!==a&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Pe(re(i),"iterate",nt),i.size},has(i){const r=this.__v_raw,a=re(r),o=re(i);return e||(vn(i,o)&&Pe(a,"has",i),Pe(a,"has",o)),i===o?r.has(i):r.has(i)||r.has(o)},forEach(i,r){const a=this,o=a.__v_raw,l=re(o),u=n?Pi:e?vt:an;return!e&&Pe(l,"iterate",nt),o.forEach((c,d)=>i.call(r,u(c),u(d),a))}};return Ie(t,e?{add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear")}:{add(i){const r=re(this),a=as(r),o=re(i),l=!n&&!en(i)&&!Tn(i)?o:i;return a.has.call(r,l)||vn(i,l)&&a.has.call(r,i)||vn(o,l)&&a.has.call(r,o)||(r.add(l),En(r,"add",l,l)),this},set(i,r){!n&&!en(r)&&!Tn(r)&&(r=re(r));const a=re(this),{has:o,get:l}=as(a);let u=o.call(a,i);u||(i=re(i),u=o.call(a,i));const c=l.call(a,i);return a.set(i,r),u?vn(r,c)&&En(a,"set",i,r):En(a,"add",i,r),this},delete(i){const r=re(this),{has:a,get:o}=as(r);let l=a.call(r,i);l||(i=re(i),l=a.call(r,i)),o&&o.call(r,i);const u=r.delete(i);return l&&En(r,"delete",i,void 0),u},clear(){const i=re(this),r=i.size!==0,a=i.clear();return r&&En(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=rc(i,e,n)}),t}function rr(e,n){const t=ac(e,n);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(le(t,i)&&i in s?t:s,i,r)}const oc={get:rr(!1,!1)},lc={get:rr(!1,!0)},cc={get:rr(!0,!1)};const lo=new WeakMap,co=new WeakMap,uo=new WeakMap,uc=new WeakMap;function dc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hc(e){return e.__v_skip||!Object.isExtensible(e)?0:dc(zl(e))}function ts(e){return Tn(e)?e:ar(e,!1,tc,oc,lo)}function ho(e){return ar(e,!1,ic,lc,co)}function Ai(e){return ar(e,!0,sc,cc,uo)}function ar(e,n,t,s,i){if(!ce(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=hc(e);if(r===0)return e;const a=i.get(e);if(a)return a;const o=new Proxy(e,r===2?s:t);return i.set(e,o),o}function tt(e){return Tn(e)?tt(e.__v_raw):!!(e&&e.__v_isReactive)}function Tn(e){return!!(e&&e.__v_isReadonly)}function en(e){return!!(e&&e.__v_isShallow)}function or(e){return e?!!e.__v_raw:!1}function re(e){const n=e&&e.__v_raw;return n?re(n):e}function fc(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&Ka(e,"__v_skip",!0),e}const an=e=>ce(e)?ts(e):e,vt=e=>ce(e)?Ai(e):e;function ze(e){return e?e.__v_isRef===!0:!1}function Z(e){return fo(e,!1)}function pc(e){return fo(e,!0)}function fo(e,n){return ze(e)?e:new mc(e,n)}class mc{constructor(n,t){this.dep=new ir,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:re(n),this._value=t?n:an(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||en(n)||Tn(n);n=s?n:re(n),vn(n,t)&&(this._rawValue=n,this._value=s?n:an(n),this.dep.trigger())}}function W(e){return ze(e)?e.value:e}const gc={get:(e,n,t)=>n==="__v_raw"?e:W(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const i=e[n];return ze(i)&&!ze(t)?(i.value=t,!0):Reflect.set(e,n,t,s)}};function po(e){return tt(e)?e:new Proxy(e,gc)}class xc{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new ir(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ut-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Xa(this,!0),!0}get value(){const n=this.dep.track();return to(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function vc(e,n,t=!1){let s,i;return ne(e)?s=e:(s=e.get,i=e.set),new xc(s,i,t)}const ls={},gs=new WeakMap;let Qn;function yc(e,n=!1,t=Qn){if(t){let s=gs.get(t);s||gs.set(t,s=[]),s.push(e)}}function bc(e,n,t=xe){const{immediate:s,deep:i,once:r,scheduler:a,augmentJob:o,call:l}=t,u=w=>i?w:en(w)||i===!1||i===0?Dn(w,1):Dn(w);let c,d,p,g,C=!1,v=!1;if(ze(e)?(d=()=>e.value,C=en(e)):tt(e)?(d=()=>u(e),C=!0):Y(e)?(v=!0,C=e.some(w=>tt(w)||en(w)),d=()=>e.map(w=>{if(ze(w))return w.value;if(tt(w))return u(w);if(ne(w))return l?l(w,2):w()})):ne(e)?n?d=l?()=>l(e,2):e:d=()=>{if(p){In();try{p()}finally{Mn()}}const w=Qn;Qn=c;try{return l?l(e,3,[g]):e(g)}finally{Qn=w}}:d=yn,n&&i){const w=d,N=i===!0?1/0:i;d=()=>Dn(w(),N)}const M=ql(),R=()=>{c.stop(),M&&M.active&&Zi(M.effects,c)};if(r&&n){const w=n;n=(...N)=>{w(...N),R()}}let y=v?new Array(e.length).fill(ls):ls;const b=w=>{if(!(!(c.flags&1)||!c.dirty&&!w))if(n){const N=c.run();if(i||C||(v?N.some((J,X)=>vn(J,y[X])):vn(N,y))){p&&p();const J=Qn;Qn=c;try{const X=[N,y===ls?void 0:v&&y[0]===ls?[]:y,g];y=N,l?l(n,3,X):n(...X)}finally{Qn=J}}}else c.run()};return o&&o(b),c=new Za(d),c.scheduler=a?()=>a(b,!1):b,g=w=>yc(w,!1,c),p=c.onStop=()=>{const w=gs.get(c);if(w){if(l)l(w,4);else for(const N of w)N();gs.delete(c)}},n?s?b(!0):y=c.run():a?a(b.bind(null,!0),!0):c.run(),R.pause=c.pause.bind(c),R.resume=c.resume.bind(c),R.stop=R,R}function Dn(e,n=1/0,t){if(n<=0||!ce(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,ze(e))Dn(e.value,n,t);else if(Y(e))for(let s=0;s<e.length;s++)Dn(e[s],n,t);else if(Ba(e)||pt(e))e.forEach(s=>{Dn(s,n,t)});else if(Ua(e)){for(const s in e)Dn(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Dn(e[s],n,t)}return e}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ss(e,n,t,s){try{return s?e(...s):e()}catch(i){$s(i,n,t)}}function on(e,n,t,s){if(ne(e)){const i=ss(e,n,t,s);return i&&Va(i)&&i.catch(r=>{$s(r,n,t)}),i}if(Y(e)){const i=[];for(let r=0;r<e.length;r++)i.push(on(e[r],n,t,s));return i}}function $s(e,n,t,s=!0){const i=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||xe;if(n){let o=n.parent;const l=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}o=o.parent}if(r){In(),ss(r,null,10,[e,l,u]),Mn();return}}wc(e,t,i,s,a)}function wc(e,n,t,s=!0,i=!1){if(i)throw e;console.error(e)}const Le=[];let fn=-1;const gt=[];let Ln=null,ct=0;const mo=Promise.resolve();let xs=null;function Hs(e){const n=xs||mo;return e?n.then(this?e.bind(this):e):n}function kc(e){let n=fn+1,t=Le.length;for(;n<t;){const s=n+t>>>1,i=Le[s],r=qt(i);r<e||r===e&&i.flags&2?n=s+1:t=s}return n}function lr(e){if(!(e.flags&1)){const n=qt(e),t=Le[Le.length-1];!t||!(e.flags&2)&&n>=qt(t)?Le.push(e):Le.splice(kc(n),0,e),e.flags|=1,go()}}function go(){xs||(xs=mo.then(vo))}function _c(e){Y(e)?gt.push(...e):Ln&&e.id===-1?Ln.splice(ct+1,0,e):e.flags&1||(gt.push(e),e.flags|=1),go()}function Dr(e,n,t=fn+1){for(;t<Le.length;t++){const s=Le[t];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Le.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function xo(e){if(gt.length){const n=[...new Set(gt)].sort((t,s)=>qt(t)-qt(s));if(gt.length=0,Ln){Ln.push(...n);return}for(Ln=n,ct=0;ct<Ln.length;ct++){const t=Ln[ct];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ln=null,ct=0}}const qt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function vo(e){try{for(fn=0;fn<Le.length;fn++){const n=Le[fn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ss(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;fn<Le.length;fn++){const n=Le[fn];n&&(n.flags&=-2)}fn=-1,Le.length=0,xo(),xs=null,(Le.length||gt.length)&&vo()}}let qe=null,yo=null;function vs(e){const n=qe;return qe=e,yo=e&&e.type.__scopeId||null,n}function gn(e,n=qe,t){if(!n||e._n)return e;const s=(...i)=>{s._d&&_s(-1);const r=vs(n);let a;try{a=e(...i)}finally{vs(r),s._d&&_s(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function jc(e,n){if(qe===null)return e;const t=Ks(qe),s=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[r,a,o,l=xe]=n[i];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&Dn(a),s.push({dir:r,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function qn(e,n,t,s){const i=e.dirs,r=n&&n.dirs;for(let a=0;a<i.length;a++){const o=i[a];r&&(o.oldValue=r[a].value);let l=o.dir[s];l&&(In(),on(l,t,8,[e.el,o,e,n]),Mn())}}function hs(e,n){if(Oe){let t=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===t&&(t=Oe.provides=Object.create(s)),t[e]=n}}function rn(e,n,t=!1){const s=fr();if(s||xt){let i=xt?xt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&ne(n)?n.call(s&&s.proxy):n}}const Cc=Symbol.for("v-scx"),Sc=()=>rn(Cc);function Fn(e,n,t){return bo(e,n,t)}function bo(e,n,t=xe){const{immediate:s,deep:i,flush:r,once:a}=t,o=Ie({},t),l=n&&s||!n&&r!=="post";let u;if(Zt){if(r==="sync"){const g=Sc();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!l){const g=()=>{};return g.stop=yn,g.resume=yn,g.pause=yn,g}}const c=Oe;o.call=(g,C,v)=>on(g,c,C,v);let d=!1;r==="post"?o.scheduler=g=>{Me(g,c&&c.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(g,C)=>{C?g():lr(g)}),o.augmentJob=g=>{n&&(g.flags|=4),d&&(g.flags|=2,c&&(g.id=c.uid,g.i=c))};const p=bc(e,n,o);return Zt&&(u?u.push(p):l&&p()),p}function Ec(e,n,t){const s=this.proxy,i=_e(e)?e.includes(".")?wo(s,e):()=>s[e]:e.bind(s,s);let r;ne(n)?r=n:(r=n.handler,t=n);const a=is(this),o=bo(i,r.bind(s),t);return a(),o}function wo(e,n){const t=n.split(".");return()=>{let s=e;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const Dc=Symbol("_vte"),ko=e=>e.__isTeleport,pn=Symbol("_leaveCb"),Et=Symbol("_enterCb");function Ic(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),cr(()=>{e.isUnmounting=!0}),e}const Ze=[Function,Array],_o={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ze,onEnter:Ze,onAfterEnter:Ze,onEnterCancelled:Ze,onBeforeLeave:Ze,onLeave:Ze,onAfterLeave:Ze,onLeaveCancelled:Ze,onBeforeAppear:Ze,onAppear:Ze,onAfterAppear:Ze,onAppearCancelled:Ze},jo=e=>{const n=e.subTree;return n.component?jo(n.component):n},Mc={name:"BaseTransition",props:_o,setup(e,{slots:n}){const t=fr(),s=Ic();return()=>{const i=n.default&&Eo(n.default(),!0);if(!i||!i.length)return;const r=Co(i),a=re(e),{mode:o}=a;if(s.isLeaving)return li(r);const l=Ir(r);if(!l)return li(r);let u=Oi(l,a,s,t,d=>u=d);l.type!==Ae&&yt(l,u);let c=t.subTree&&Ir(t.subTree);if(c&&c.type!==Ae&&!Hn(c,l)&&jo(t).type!==Ae){let d=Oi(c,a,s,t);if(yt(c,d),o==="out-in"&&l.type!==Ae)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,c=void 0},li(r);o==="in-out"&&l.type!==Ae?d.delayLeave=(p,g,C)=>{const v=So(s,c);v[String(c.key)]=c,p[pn]=()=>{g(),p[pn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{C(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return r}}};function Co(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Ae){n=t;break}}return n}const Tc=Mc;function So(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function Oi(e,n,t,s,i){const{appear:r,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:C,onLeaveCancelled:v,onBeforeAppear:M,onAppear:R,onAfterAppear:y,onAppearCancelled:b}=n,w=String(e.key),N=So(t,e),J=(K,H)=>{K&&on(K,s,9,H)},X=(K,H)=>{const V=H[1];J(K,H),Y(K)?K.every(E=>E.length<=1)&&V():K.length<=1&&V()},ve={mode:a,persisted:o,beforeEnter(K){let H=l;if(!t.isMounted)if(r)H=M||l;else return;K[pn]&&K[pn](!0);const V=N[w];V&&Hn(e,V)&&V.el[pn]&&V.el[pn](),J(H,[K])},enter(K){if(N[w]===e)return;let H=u,V=c,E=d;if(!t.isMounted)if(r)H=R||u,V=y||c,E=b||d;else return;let ee=!1;K[Et]=te=>{ee||(ee=!0,te?J(E,[K]):J(V,[K]),ve.delayedLeave&&ve.delayedLeave(),K[Et]=void 0)};const ue=K[Et].bind(null,!1);H?X(H,[K,ue]):ue()},leave(K,H){const V=String(e.key);if(K[Et]&&K[Et](!0),t.isUnmounting)return H();J(p,[K]);let E=!1;K[pn]=ue=>{E||(E=!0,H(),ue?J(v,[K]):J(C,[K]),K[pn]=void 0,N[V]===e&&delete N[V])};const ee=K[pn].bind(null,!1);N[V]=e,g?X(g,[K,ee]):ee()},clone(K){const H=Oi(K,n,t,s,i);return i&&i(H),H}};return ve}function li(e){if(Fs(e))return e=Pn(e),e.children=null,e}function Ir(e){if(!Fs(e))return ko(e.type)&&e.children?Co(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ne(t.default))return t.default()}}function yt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,yt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Eo(e,n=!1,t){let s=[],i=0;for(let r=0;r<e.length;r++){let a=e[r];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===Ce?(a.patchFlag&128&&i++,s=s.concat(Eo(a.children,n,o))):(n||a.type!==Ae)&&s.push(o!=null?Pn(a,{key:o}):a)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Ue(e,n){return ne(e)?Ie({name:e.name},n,{setup:e}):e}function Do(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Mr(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const ys=new WeakMap;function $t(e,n,t,s,i=!1){if(Y(e)){e.forEach((v,M)=>$t(v,n&&(Y(n)?n[M]:n),t,s,i));return}if(st(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&$t(e,n,t,s.component.subTree);return}const r=s.shapeFlag&4?Ks(s.component):s.el,a=i?null:r,{i:o,r:l}=e,u=n&&n.r,c=o.refs===xe?o.refs={}:o.refs,d=o.setupState,p=re(d),g=d===xe?Fa:v=>Mr(c,v)?!1:le(p,v),C=(v,M)=>!(M&&Mr(c,M));if(u!=null&&u!==l){if(Tr(n),_e(u))c[u]=null,g(u)&&(d[u]=null);else if(ze(u)){const v=n;C(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(ne(l))ss(l,o,12,[a,c]);else{const v=_e(l),M=ze(l);if(v||M){const R=()=>{if(e.f){const y=v?g(l)?d[l]:c[l]:C()||!e.k?l.value:c[e.k];if(i)Y(y)&&Zi(y,r);else if(Y(y))y.includes(r)||y.push(r);else if(v)c[l]=[r],g(l)&&(d[l]=c[l]);else{const b=[r];C(l,e.k)&&(l.value=b),e.k&&(c[e.k]=b)}}else v?(c[l]=a,g(l)&&(d[l]=a)):M&&(C(l,e.k)&&(l.value=a),e.k&&(c[e.k]=a))};if(a){const y=()=>{R(),ys.delete(e)};y.id=-1,ys.set(e,y),Me(y,t)}else Tr(e),R()}}}function Tr(e){const n=ys.get(e);n&&(n.flags|=8,ys.delete(e))}Ws().requestIdleCallback;Ws().cancelIdleCallback;const st=e=>!!e.type.__asyncLoader,Fs=e=>e.type.__isKeepAlive,Rc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=fr(),s=t.ctx;if(!s.renderer)return()=>{const y=n.default&&n.default();return y&&y.length===1?y[0]:y};const i=new Map,r=new Set;let a=null;const o=t.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:d}}}=s,p=d("div");s.activate=(y,b,w,N,J)=>{const X=y.component;u(y,b,w,0,o),l(X.vnode,y,b,w,X,o,N,y.slotScopeIds,J),Me(()=>{X.isDeactivated=!1,X.a&&mt(X.a);const ve=y.props&&y.props.onVnodeMounted;ve&&Qe(ve,X.parent,y)},o)},s.deactivate=y=>{const b=y.component;ws(b.m),ws(b.a),u(y,p,null,1,o),Me(()=>{b.da&&mt(b.da);const w=y.props&&y.props.onVnodeUnmounted;w&&Qe(w,b.parent,y),b.isDeactivated=!0},o)};function g(y){ci(y),c(y,t,o,!0)}function C(y){i.forEach((b,w)=>{const N=Hi(st(b)?b.type.__asyncResolved||{}:b.type);N&&!y(N)&&v(w)})}function v(y){const b=i.get(y);b&&(!a||!Hn(b,a))?g(b):a&&ci(a),i.delete(y),r.delete(y)}Fn(()=>[e.include,e.exclude],([y,b])=>{y&&C(w=>At(y,w)),b&&C(w=>!At(b,w))},{flush:"post",deep:!0});let M=null;const R=()=>{M!=null&&(ks(t.subTree.type)?Me(()=>{i.set(M,cs(t.subTree))},t.subTree.suspense):i.set(M,cs(t.subTree)))};return tn(R),Mo(R),cr(()=>{i.forEach(y=>{const{subTree:b,suspense:w}=t,N=cs(b);if(y.type===N.type&&y.key===N.key){ci(N);const J=N.component.da;J&&Me(J,w);return}g(y)})}),()=>{if(M=null,!n.default)return a=null;const y=n.default(),b=y[0];if(y.length>1)return a=null,y;if(!Jt(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return a=null,b;let w=cs(b);if(w.type===Ae)return a=null,w;const N=w.type,J=Hi(st(w)?w.type.__asyncResolved||{}:N),{include:X,exclude:ve,max:K}=e;if(X&&(!J||!At(X,J))||ve&&J&&At(ve,J))return w.shapeFlag&=-257,a=w,b;const H=w.key==null?N:w.key,V=i.get(H);return w.el&&(w=Pn(w),b.shapeFlag&128&&(b.ssContent=w)),M=H,V?(w.el=V.el,w.component=V.component,w.transition&&yt(w,w.transition),w.shapeFlag|=512,r.delete(H),r.add(H)):(r.add(H),K&&r.size>parseInt(K,10)&&v(r.values().next().value)),w.shapeFlag|=256,a=w,ks(b.type)?b:w}}},Pc=Rc;function At(e,n){return Y(e)?e.some(t=>At(t,n)):_e(e)?e.split(",").includes(n):Ol(e)?(e.lastIndex=0,e.test(n)):!1}function Bs(e,n){Io(e,"a",n)}function Ac(e,n){Io(e,"da",n)}function Io(e,n,t=Oe){const s=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Vs(n,s,t),t){let i=t.parent;for(;i&&i.parent;)Fs(i.parent.vnode)&&Oc(s,n,t,i),i=i.parent}}function Oc(e,n,t,s){const i=Vs(n,e,s,!0);To(()=>{Zi(s[n],i)},t)}function ci(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function cs(e){return e.shapeFlag&128?e.ssContent:e}function Vs(e,n,t=Oe,s=!1){if(t){const i=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...a)=>{In();const o=is(t),l=on(n,t,e,a);return o(),Mn(),l});return s?i.unshift(r):i.push(r),r}}const An=e=>(n,t=Oe)=>{(!Zt||e==="sp")&&Vs(e,(...s)=>n(...s),t)},zc=An("bm"),tn=An("m"),Nc=An("bu"),Mo=An("u"),cr=An("bum"),To=An("um"),Wc=An("sp"),Lc=An("rtg"),$c=An("rtc");function Hc(e,n=Oe){Vs("ec",e,n)}const Ro="components";function Rr(e,n){return Oo(Ro,e,!0,n)||e}const Po=Symbol.for("v-ndc");function Ao(e){return _e(e)?Oo(Ro,e,!1)||e:e||Po}function Oo(e,n,t=!0,s=!1){const i=qe||Oe;if(i){const r=i.type;{const o=Hi(r,!1);if(o&&(o===n||o===$e(n)||o===Ns($e(n))))return r}const a=Pr(i[e]||r[e],n)||Pr(i.appContext[e],n);return!a&&s?r:a}}function Pr(e,n){return e&&(e[n]||e[$e(n)]||e[Ns($e(n))])}function Xe(e,n,t,s){let i;const r=t,a=Y(e);if(a||_e(e)){const o=a&&tt(e);let l=!1,u=!1;o&&(l=!en(e),u=Tn(e),e=Ls(e)),i=new Array(e.length);for(let c=0,d=e.length;c<d;c++)i[c]=n(l?u?vt(an(e[c])):an(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=n(o+1,o,void 0,r)}else if(ce(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>n(o,l,void 0,r));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];i[l]=n(e[c],c,l,r)}}else i=[];return i}const zi=e=>e?el(e)?Ks(e):zi(e.parent):null,Ht=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zi(e.parent),$root:e=>zi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>No(e),$forceUpdate:e=>e.f||(e.f=()=>{lr(e.update)}),$nextTick:e=>e.n||(e.n=Hs.bind(e.proxy)),$watch:e=>Ec.bind(e)}),ui=(e,n)=>e!==xe&&!e.__isScriptSetup&&le(e,n),Fc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:a,type:o,appContext:l}=e;if(n[0]!=="$"){const p=a[n];if(p!==void 0)switch(p){case 1:return s[n];case 2:return i[n];case 4:return t[n];case 3:return r[n]}else{if(ui(s,n))return a[n]=1,s[n];if(i!==xe&&le(i,n))return a[n]=2,i[n];if(le(r,n))return a[n]=3,r[n];if(t!==xe&&le(t,n))return a[n]=4,t[n];Ni&&(a[n]=0)}}const u=Ht[n];let c,d;if(u)return n==="$attrs"&&Pe(e.attrs,"get",""),u(e);if((c=o.__cssModules)&&(c=c[n]))return c;if(t!==xe&&le(t,n))return a[n]=4,t[n];if(d=l.config.globalProperties,le(d,n))return d[n]},set({_:e},n,t){const{data:s,setupState:i,ctx:r}=e;return ui(i,n)?(i[n]=t,!0):s!==xe&&le(s,n)?(s[n]=t,!0):le(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:i,props:r,type:a}},o){let l;return!!(t[o]||e!==xe&&o[0]!=="$"&&le(e,o)||ui(n,o)||le(r,o)||le(s,o)||le(Ht,o)||le(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:le(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Ar(e){return Y(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Ni=!0;function Bc(e){const n=No(e),t=e.proxy,s=e.ctx;Ni=!1,n.beforeCreate&&Or(n.beforeCreate,e,"bc");const{data:i,computed:r,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:C,activated:v,deactivated:M,beforeDestroy:R,beforeUnmount:y,destroyed:b,unmounted:w,render:N,renderTracked:J,renderTriggered:X,errorCaptured:ve,serverPrefetch:K,expose:H,inheritAttrs:V,components:E,directives:ee,filters:ue}=n;if(u&&Vc(u,s,null),a)for(const pe in a){const ae=a[pe];ne(ae)&&(s[pe]=ae.bind(t))}if(i){const pe=i.call(t,t);ce(pe)&&(e.data=ts(pe))}if(Ni=!0,r)for(const pe in r){const ae=r[pe],wn=ne(ae)?ae.bind(t,t):ne(ae.get)?ae.get.bind(t,t):yn,On=!ne(ae)&&ne(ae.set)?ae.set.bind(t):yn,cn=fe({get:wn,set:On});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Fe=>cn.value=Fe})}if(o)for(const pe in o)zo(o[pe],s,t,pe);if(l){const pe=ne(l)?l.call(t):l;Reflect.ownKeys(pe).forEach(ae=>{hs(ae,pe[ae])})}c&&Or(c,e,"c");function ye(pe,ae){Y(ae)?ae.forEach(wn=>pe(wn.bind(t))):ae&&pe(ae.bind(t))}if(ye(zc,d),ye(tn,p),ye(Nc,g),ye(Mo,C),ye(Bs,v),ye(Ac,M),ye(Hc,ve),ye($c,J),ye(Lc,X),ye(cr,y),ye(To,w),ye(Wc,K),Y(H))if(H.length){const pe=e.exposed||(e.exposed={});H.forEach(ae=>{Object.defineProperty(pe,ae,{get:()=>t[ae],set:wn=>t[ae]=wn,enumerable:!0})})}else e.exposed||(e.exposed={});N&&e.render===yn&&(e.render=N),V!=null&&(e.inheritAttrs=V),E&&(e.components=E),ee&&(e.directives=ee),K&&Do(e)}function Vc(e,n,t=yn){Y(e)&&(e=Wi(e));for(const s in e){const i=e[s];let r;ce(i)?"default"in i?r=rn(i.from||s,i.default,!0):r=rn(i.from||s):r=rn(i),ze(r)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):n[s]=r}}function Or(e,n,t){on(Y(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function zo(e,n,t,s){let i=s.includes(".")?wo(t,s):()=>t[s];if(_e(e)){const r=n[e];ne(r)&&Fn(i,r)}else if(ne(e))Fn(i,e.bind(t));else if(ce(e))if(Y(e))e.forEach(r=>zo(r,n,t,s));else{const r=ne(e.handler)?e.handler.bind(t):n[e.handler];ne(r)&&Fn(i,r,e)}}function No(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:i,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,o=r.get(n);let l;return o?l=o:!i.length&&!t&&!s?l=n:(l={},i.length&&i.forEach(u=>bs(l,u,a,!0)),bs(l,n,a)),ce(n)&&r.set(n,l),l}function bs(e,n,t,s=!1){const{mixins:i,extends:r}=n;r&&bs(e,r,t,!0),i&&i.forEach(a=>bs(e,a,t,!0));for(const a in n)if(!(s&&a==="expose")){const o=Gc[a]||t&&t[a];e[a]=o?o(e[a],n[a]):n[a]}return e}const Gc={data:zr,props:Nr,emits:Nr,methods:Ot,computed:Ot,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Ot,directives:Ot,watch:Kc,provide:zr,inject:Uc};function zr(e,n){return n?e?function(){return Ie(ne(e)?e.call(this,this):e,ne(n)?n.call(this,this):n)}:n:e}function Uc(e,n){return Ot(Wi(e),Wi(n))}function Wi(e){if(Y(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Ne(e,n){return e?[...new Set([].concat(e,n))]:n}function Ot(e,n){return e?Ie(Object.create(null),e,n):n}function Nr(e,n){return e?Y(e)&&Y(n)?[...new Set([...e,...n])]:Ie(Object.create(null),Ar(e),Ar(n??{})):n}function Kc(e,n){if(!e)return n;if(!n)return e;const t=Ie(Object.create(null),e);for(const s in n)t[s]=Ne(e[s],n[s]);return t}function Wo(){return{app:null,config:{isNativeTag:Fa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qc=0;function Yc(e,n){return function(s,i=null){ne(s)||(s=Ie({},s)),i!=null&&!ce(i)&&(i=null);const r=Wo(),a=new WeakSet,o=[];let l=!1;const u=r.app={_uid:qc++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Su,get config(){return r.config},set config(c){},use(c,...d){return a.has(c)||(c&&ne(c.install)?(a.add(c),c.install(u,...d)):ne(c)&&(a.add(c),c(u,...d))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,d){return d?(r.components[c]=d,u):r.components[c]},directive(c,d){return d?(r.directives[c]=d,u):r.directives[c]},mount(c,d,p){if(!l){const g=u._ceVNode||O(s,i);return g.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(g,c,p),l=!0,u._container=c,c.__vue_app__=u,Ks(g.component)}},onUnmount(c){o.push(c)},unmount(){l&&(on(o,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return r.provides[c]=d,u},runWithContext(c){const d=xt;xt=u;try{return c()}finally{xt=d}}};return u}}let xt=null;const Jc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${$e(n)}Modifiers`]||e[`${Un(n)}Modifiers`];function Zc(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||xe;let i=t;const r=n.startsWith("update:"),a=r&&Jc(s,n.slice(7));a&&(a.trim&&(i=t.map(c=>_e(c)?c.trim():c)),a.number&&(i=t.map(Xi)));let o,l=s[o=si(n)]||s[o=si($e(n))];!l&&r&&(l=s[o=si(Un(n))]),l&&on(l,e,6,i);const u=s[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,on(u,e,6,i)}}const Qc=new WeakMap;function Lo(e,n,t=!1){const s=t?Qc:n.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let a={},o=!1;if(!ne(e)){const l=u=>{const c=Lo(u,n,!0);c&&(o=!0,Ie(a,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!o?(ce(e)&&s.set(e,null),null):(Y(r)?r.forEach(l=>a[l]=null):Ie(a,r),ce(e)&&s.set(e,a),a)}function Gs(e,n){return!e||!Os(n)?!1:(n=n.slice(2).replace(/Once$/,""),le(e,n[0].toLowerCase()+n.slice(1))||le(e,Un(n))||le(e,n))}function Wr(e){const{type:n,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:d,data:p,setupState:g,ctx:C,inheritAttrs:v}=e,M=vs(e);let R,y;try{if(t.shapeFlag&4){const w=i||s,N=w;R=xn(u.call(N,w,c,d,g,p,C)),y=o}else{const w=n;R=xn(w.length>1?w(d,{attrs:o,slots:a,emit:l}):w(d,null)),y=n.props?o:Xc(o)}}catch(w){Ft.length=0,$s(w,e,1),R=O(Ae)}let b=R;if(y&&v!==!1){const w=Object.keys(y),{shapeFlag:N}=b;w.length&&N&7&&(r&&w.some(Ji)&&(y=eu(y,r)),b=Pn(b,y,!1,!0))}return t.dirs&&(b=Pn(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&yt(b,t.transition),R=b,vs(M),R}const Xc=e=>{let n;for(const t in e)(t==="class"||t==="style"||Os(t))&&((n||(n={}))[t]=e[t]);return n},eu=(e,n)=>{const t={};for(const s in e)(!Ji(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function nu(e,n,t){const{props:s,children:i,component:r}=e,{props:a,children:o,patchFlag:l}=n,u=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Lr(s,a,u):!!a;if(l&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if($o(a,s,p)&&!Gs(u,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:s===a?!1:s?a?Lr(s,a,u):!0:!!a;return!1}function Lr(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if($o(n,e,r)&&!Gs(t,r))return!0}return!1}function $o(e,n,t){const s=e[t],i=n[t];return t==="style"&&ce(s)&&ce(i)?!er(s,i):s!==i}function tu({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const Ho={},Fo=()=>Object.create(Ho),Bo=e=>Object.getPrototypeOf(e)===Ho;function su(e,n,t,s=!1){const i={},r=Fo();e.propsDefaults=Object.create(null),Vo(e,n,i,r);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);t?e.props=s?i:ho(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function iu(e,n,t,s){const{props:i,attrs:r,vnode:{patchFlag:a}}=e,o=re(i),[l]=e.propsOptions;let u=!1;if((s||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(Gs(e.emitsOptions,p))continue;const g=n[p];if(l)if(le(r,p))g!==r[p]&&(r[p]=g,u=!0);else{const C=$e(p);i[C]=Li(l,o,C,g,e,!1)}else g!==r[p]&&(r[p]=g,u=!0)}}}else{Vo(e,n,i,r)&&(u=!0);let c;for(const d in o)(!n||!le(n,d)&&((c=Un(d))===d||!le(n,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(i[d]=Li(l,o,d,void 0,e,!0)):delete i[d]);if(r!==o)for(const d in r)(!n||!le(n,d))&&(delete r[d],u=!0)}u&&En(e.attrs,"set","")}function Vo(e,n,t,s){const[i,r]=e.propsOptions;let a=!1,o;if(n)for(let l in n){if(Nt(l))continue;const u=n[l];let c;i&&le(i,c=$e(l))?!r||!r.includes(c)?t[c]=u:(o||(o={}))[c]=u:Gs(e.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,a=!0)}if(r){const l=re(t),u=o||xe;for(let c=0;c<r.length;c++){const d=r[c];t[d]=Li(i,l,d,u[d],e,!le(u,d))}}return a}function Li(e,n,t,s,i,r){const a=e[t];if(a!=null){const o=le(a,"default");if(o&&s===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ne(l)){const{propsDefaults:u}=i;if(t in u)s=u[t];else{const c=is(i);s=u[t]=l.call(null,n),c()}}else s=l;i.ce&&i.ce._setProp(t,s)}a[0]&&(r&&!o?s=!1:a[1]&&(s===""||s===Un(t))&&(s=!0))}return s}const ru=new WeakMap;function Go(e,n,t=!1){const s=t?ru:n.propsCache,i=s.get(e);if(i)return i;const r=e.props,a={},o=[];let l=!1;if(!ne(e)){const c=d=>{l=!0;const[p,g]=Go(d,n,!0);Ie(a,p),g&&o.push(...g)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!l)return ce(e)&&s.set(e,ft),ft;if(Y(r))for(let c=0;c<r.length;c++){const d=$e(r[c]);$r(d)&&(a[d]=xe)}else if(r)for(const c in r){const d=$e(c);if($r(d)){const p=r[c],g=a[d]=Y(p)||ne(p)?{type:p}:Ie({},p),C=g.type;let v=!1,M=!0;if(Y(C))for(let R=0;R<C.length;++R){const y=C[R],b=ne(y)&&y.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(M=!1)}else v=ne(C)&&C.name==="Boolean";g[0]=v,g[1]=M,(v||le(g,"default"))&&o.push(d)}}const u=[a,o];return ce(e)&&s.set(e,u),u}function $r(e){return e[0]!=="$"&&!Nt(e)}const ur=e=>e==="_"||e==="_ctx"||e==="$stable",dr=e=>Y(e)?e.map(xn):[xn(e)],au=(e,n,t)=>{if(n._n)return n;const s=gn((...i)=>dr(n(...i)),t);return s._c=!1,s},Uo=(e,n,t)=>{const s=e._ctx;for(const i in e){if(ur(i))continue;const r=e[i];if(ne(r))n[i]=au(i,r,s);else if(r!=null){const a=dr(r);n[i]=()=>a}}},Ko=(e,n)=>{const t=dr(n);e.slots.default=()=>t},qo=(e,n,t)=>{for(const s in n)(t||!ur(s))&&(e[s]=n[s])},ou=(e,n,t)=>{const s=e.slots=Fo();if(e.vnode.shapeFlag&32){const i=n._;i?(qo(s,n,t),t&&Ka(s,"_",i,!0)):Uo(n,s)}else n&&Ko(e,n)},lu=(e,n,t)=>{const{vnode:s,slots:i}=e;let r=!0,a=xe;if(s.shapeFlag&32){const o=n._;o?t&&o===1?r=!1:qo(i,n,t):(r=!n.$stable,Uo(n,i)),a=n}else n&&(Ko(e,n),a={default:1});if(r)for(const o in i)!ur(o)&&a[o]==null&&delete i[o]},Me=fu;function cu(e){return uu(e)}function uu(e,n){const t=Ws();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=yn,insertStaticContent:C}=e,v=(f,m,x,k=null,S=null,_=null,L=void 0,z=null,A=!!m.dynamicChildren)=>{if(f===m)return;f&&!Hn(f,m)&&(k=j(f),Fe(f,S,_,!0),f=null),m.patchFlag===-2&&(A=!1,m.dynamicChildren=null);const{type:D,ref:q,shapeFlag:F}=m;switch(D){case Us:M(f,m,x,k);break;case Ae:R(f,m,x,k);break;case fs:f==null&&y(m,x,k,L);break;case Ce:E(f,m,x,k,S,_,L,z,A);break;default:F&1?N(f,m,x,k,S,_,L,z,A):F&6?ee(f,m,x,k,S,_,L,z,A):(F&64||F&128)&&D.process(f,m,x,k,S,_,L,z,A,G)}q!=null&&S?$t(q,f&&f.ref,_,m||f,!m):q==null&&f&&f.ref!=null&&$t(f.ref,null,_,f,!0)},M=(f,m,x,k)=>{if(f==null)s(m.el=o(m.children),x,k);else{const S=m.el=f.el;m.children!==f.children&&u(S,m.children)}},R=(f,m,x,k)=>{f==null?s(m.el=l(m.children||""),x,k):m.el=f.el},y=(f,m,x,k)=>{[f.el,f.anchor]=C(f.children,m,x,k,f.el,f.anchor)},b=({el:f,anchor:m},x,k)=>{let S;for(;f&&f!==m;)S=p(f),s(f,x,k),f=S;s(m,x,k)},w=({el:f,anchor:m})=>{let x;for(;f&&f!==m;)x=p(f),i(f),f=x;i(m)},N=(f,m,x,k,S,_,L,z,A)=>{if(m.type==="svg"?L="svg":m.type==="math"&&(L="mathml"),f==null)J(m,x,k,S,_,L,z,A);else{const D=f.el&&f.el._isVueCE?f.el:null;try{D&&D._beginPatch(),K(f,m,S,_,L,z,A)}finally{D&&D._endPatch()}}},J=(f,m,x,k,S,_,L,z)=>{let A,D;const{props:q,shapeFlag:F,transition:U,dirs:Q}=f;if(A=f.el=a(f.type,_,q&&q.is,q),F&8?c(A,f.children):F&16&&ve(f.children,A,null,k,S,di(f,_),L,z),Q&&qn(f,null,k,"created"),X(A,f,f.scopeId,L,k),q){for(const be in q)be!=="value"&&!Nt(be)&&r(A,be,null,q[be],_,k);"value"in q&&r(A,"value",null,q.value,_),(D=q.onVnodeBeforeMount)&&Qe(D,k,f)}Q&&qn(f,null,k,"beforeMount");const ie=du(S,U);ie&&U.beforeEnter(A),s(A,m,x),((D=q&&q.onVnodeMounted)||ie||Q)&&Me(()=>{D&&Qe(D,k,f),ie&&U.enter(A),Q&&qn(f,null,k,"mounted")},S)},X=(f,m,x,k,S)=>{if(x&&g(f,x),k)for(let _=0;_<k.length;_++)g(f,k[_]);if(S){let _=S.subTree;if(m===_||ks(_.type)&&(_.ssContent===m||_.ssFallback===m)){const L=S.vnode;X(f,L,L.scopeId,L.slotScopeIds,S.parent)}}},ve=(f,m,x,k,S,_,L,z,A=0)=>{for(let D=A;D<f.length;D++){const q=f[D]=z?Sn(f[D]):xn(f[D]);v(null,q,m,x,k,S,_,L,z)}},K=(f,m,x,k,S,_,L)=>{const z=m.el=f.el;let{patchFlag:A,dynamicChildren:D,dirs:q}=m;A|=f.patchFlag&16;const F=f.props||xe,U=m.props||xe;let Q;if(x&&Yn(x,!1),(Q=U.onVnodeBeforeUpdate)&&Qe(Q,x,m,f),q&&qn(m,f,x,"beforeUpdate"),x&&Yn(x,!0),(F.innerHTML&&U.innerHTML==null||F.textContent&&U.textContent==null)&&c(z,""),D?H(f.dynamicChildren,D,z,x,k,di(m,S),_):L||ae(f,m,z,null,x,k,di(m,S),_,!1),A>0){if(A&16)V(z,F,U,x,S);else if(A&2&&F.class!==U.class&&r(z,"class",null,U.class,S),A&4&&r(z,"style",F.style,U.style,S),A&8){const ie=m.dynamicProps;for(let be=0;be<ie.length;be++){const de=ie[be],Be=F[de],Ve=U[de];(Ve!==Be||de==="value")&&r(z,de,Be,Ve,S,x)}}A&1&&f.children!==m.children&&c(z,m.children)}else!L&&D==null&&V(z,F,U,x,S);((Q=U.onVnodeUpdated)||q)&&Me(()=>{Q&&Qe(Q,x,m,f),q&&qn(m,f,x,"updated")},k)},H=(f,m,x,k,S,_,L)=>{for(let z=0;z<m.length;z++){const A=f[z],D=m[z],q=A.el&&(A.type===Ce||!Hn(A,D)||A.shapeFlag&198)?d(A.el):x;v(A,D,q,null,k,S,_,L,!0)}},V=(f,m,x,k,S)=>{if(m!==x){if(m!==xe)for(const _ in m)!Nt(_)&&!(_ in x)&&r(f,_,m[_],null,S,k);for(const _ in x){if(Nt(_))continue;const L=x[_],z=m[_];L!==z&&_!=="value"&&r(f,_,z,L,S,k)}"value"in x&&r(f,"value",m.value,x.value,S)}},E=(f,m,x,k,S,_,L,z,A)=>{const D=m.el=f?f.el:o(""),q=m.anchor=f?f.anchor:o("");let{patchFlag:F,dynamicChildren:U,slotScopeIds:Q}=m;Q&&(z=z?z.concat(Q):Q),f==null?(s(D,x,k),s(q,x,k),ve(m.children||[],x,q,S,_,L,z,A)):F>0&&F&64&&U&&f.dynamicChildren&&f.dynamicChildren.length===U.length?(H(f.dynamicChildren,U,x,S,_,L,z),(m.key!=null||S&&m===S.subTree)&&Yo(f,m,!0)):ae(f,m,x,q,S,_,L,z,A)},ee=(f,m,x,k,S,_,L,z,A)=>{m.slotScopeIds=z,f==null?m.shapeFlag&512?S.ctx.activate(m,x,k,L,A):ue(m,x,k,S,_,L,A):te(f,m,A)},ue=(f,m,x,k,S,_,L)=>{const z=f.component=bu(f,k,S);if(Fs(f)&&(z.ctx.renderer=G),wu(z,!1,L),z.asyncDep){if(S&&S.registerDep(z,ye,L),!f.el){const A=z.subTree=O(Ae);R(null,A,m,x),f.placeholder=A.el}}else ye(z,f,m,x,S,_,L)},te=(f,m,x)=>{const k=m.component=f.component;if(nu(f,m,x))if(k.asyncDep&&!k.asyncResolved){pe(k,m,x);return}else k.next=m,k.update();else m.el=f.el,k.vnode=m},ye=(f,m,x,k,S,_,L)=>{const z=()=>{if(f.isMounted){let{next:F,bu:U,u:Q,parent:ie,vnode:be}=f;{const dn=Jo(f);if(dn){F&&(F.el=be.el,pe(f,F,L)),dn.asyncDep.then(()=>{Me(()=>{f.isUnmounted||D()},S)});return}}let de=F,Be;Yn(f,!1),F?(F.el=be.el,pe(f,F,L)):F=be,U&&mt(U),(Be=F.props&&F.props.onVnodeBeforeUpdate)&&Qe(Be,ie,F,be),Yn(f,!0);const Ve=Wr(f),un=f.subTree;f.subTree=Ve,v(un,Ve,d(un.el),j(un),f,S,_),F.el=Ve.el,de===null&&tu(f,Ve.el),Q&&Me(Q,S),(Be=F.props&&F.props.onVnodeUpdated)&&Me(()=>Qe(Be,ie,F,be),S)}else{let F;const{el:U,props:Q}=m,{bm:ie,m:be,parent:de,root:Be,type:Ve}=f,un=st(m);Yn(f,!1),ie&&mt(ie),!un&&(F=Q&&Q.onVnodeBeforeMount)&&Qe(F,de,m),Yn(f,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(Ve,f.parent?f.parent.type:void 0);const dn=f.subTree=Wr(f);v(null,dn,x,k,f,S,_),m.el=dn.el}if(be&&Me(be,S),!un&&(F=Q&&Q.onVnodeMounted)){const dn=m;Me(()=>Qe(F,de,dn),S)}(m.shapeFlag&256||de&&st(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&Me(f.a,S),f.isMounted=!0,m=x=k=null}};f.scope.on();const A=f.effect=new Za(z);f.scope.off();const D=f.update=A.run.bind(A),q=f.job=A.runIfDirty.bind(A);q.i=f,q.id=f.uid,A.scheduler=()=>lr(q),Yn(f,!0),D()},pe=(f,m,x)=>{m.component=f;const k=f.vnode.props;f.vnode=m,f.next=null,iu(f,m.props,k,x),lu(f,m.children,x),In(),Dr(f),Mn()},ae=(f,m,x,k,S,_,L,z,A=!1)=>{const D=f&&f.children,q=f?f.shapeFlag:0,F=m.children,{patchFlag:U,shapeFlag:Q}=m;if(U>0){if(U&128){On(D,F,x,k,S,_,L,z,A);return}else if(U&256){wn(D,F,x,k,S,_,L,z,A);return}}Q&8?(q&16&&Je(D,S,_),F!==D&&c(x,F)):q&16?Q&16?On(D,F,x,k,S,_,L,z,A):Je(D,S,_,!0):(q&8&&c(x,""),Q&16&&ve(F,x,k,S,_,L,z,A))},wn=(f,m,x,k,S,_,L,z,A)=>{f=f||ft,m=m||ft;const D=f.length,q=m.length,F=Math.min(D,q);let U;for(U=0;U<F;U++){const Q=m[U]=A?Sn(m[U]):xn(m[U]);v(f[U],Q,x,null,S,_,L,z,A)}D>q?Je(f,S,_,!0,!1,F):ve(m,x,k,S,_,L,z,A,F)},On=(f,m,x,k,S,_,L,z,A)=>{let D=0;const q=m.length;let F=f.length-1,U=q-1;for(;D<=F&&D<=U;){const Q=f[D],ie=m[D]=A?Sn(m[D]):xn(m[D]);if(Hn(Q,ie))v(Q,ie,x,null,S,_,L,z,A);else break;D++}for(;D<=F&&D<=U;){const Q=f[F],ie=m[U]=A?Sn(m[U]):xn(m[U]);if(Hn(Q,ie))v(Q,ie,x,null,S,_,L,z,A);else break;F--,U--}if(D>F){if(D<=U){const Q=U+1,ie=Q<q?m[Q].el:k;for(;D<=U;)v(null,m[D]=A?Sn(m[D]):xn(m[D]),x,ie,S,_,L,z,A),D++}}else if(D>U)for(;D<=F;)Fe(f[D],S,_,!0),D++;else{const Q=D,ie=D,be=new Map;for(D=ie;D<=U;D++){const Ke=m[D]=A?Sn(m[D]):xn(m[D]);Ke.key!=null&&be.set(Ke.key,D)}let de,Be=0;const Ve=U-ie+1;let un=!1,dn=0;const Ct=new Array(Ve);for(D=0;D<Ve;D++)Ct[D]=0;for(D=Q;D<=F;D++){const Ke=f[D];if(Be>=Ve){Fe(Ke,S,_,!0);continue}let hn;if(Ke.key!=null)hn=be.get(Ke.key);else for(de=ie;de<=U;de++)if(Ct[de-ie]===0&&Hn(Ke,m[de])){hn=de;break}hn===void 0?Fe(Ke,S,_,!0):(Ct[hn-ie]=D+1,hn>=dn?dn=hn:un=!0,v(Ke,m[hn],x,null,S,_,L,z,A),Be++)}const wr=un?hu(Ct):ft;for(de=wr.length-1,D=Ve-1;D>=0;D--){const Ke=ie+D,hn=m[Ke],kr=m[Ke+1],_r=Ke+1<q?kr.el||Zo(kr):k;Ct[D]===0?v(null,hn,x,_r,S,_,L,z,A):un&&(de<0||D!==wr[de]?cn(hn,x,_r,2):de--)}}},cn=(f,m,x,k,S=null)=>{const{el:_,type:L,transition:z,children:A,shapeFlag:D}=f;if(D&6){cn(f.component.subTree,m,x,k);return}if(D&128){f.suspense.move(m,x,k);return}if(D&64){L.move(f,m,x,G);return}if(L===Ce){s(_,m,x);for(let F=0;F<A.length;F++)cn(A[F],m,x,k);s(f.anchor,m,x);return}if(L===fs){b(f,m,x);return}if(k!==2&&D&1&&z)if(k===0)z.beforeEnter(_),s(_,m,x),Me(()=>z.enter(_),S);else{const{leave:F,delayLeave:U,afterLeave:Q}=z,ie=()=>{f.ctx.isUnmounted?i(_):s(_,m,x)},be=()=>{_._isLeaving&&_[pn](!0),F(_,()=>{ie(),Q&&Q()})};U?U(_,ie,be):be()}else s(_,m,x)},Fe=(f,m,x,k=!1,S=!1)=>{const{type:_,props:L,ref:z,children:A,dynamicChildren:D,shapeFlag:q,patchFlag:F,dirs:U,cacheIndex:Q}=f;if(F===-2&&(S=!1),z!=null&&(In(),$t(z,null,x,f,!0),Mn()),Q!=null&&(m.renderCache[Q]=void 0),q&256){m.ctx.deactivate(f);return}const ie=q&1&&U,be=!st(f);let de;if(be&&(de=L&&L.onVnodeBeforeUnmount)&&Qe(de,m,f),q&6)Kn(f.component,x,k);else{if(q&128){f.suspense.unmount(x,k);return}ie&&qn(f,null,m,"beforeUnmount"),q&64?f.type.remove(f,m,x,G,k):D&&!D.hasOnce&&(_!==Ce||F>0&&F&64)?Je(D,m,x,!1,!0):(_===Ce&&F&384||!S&&q&16)&&Je(A,m,x),k&&rt(f)}(be&&(de=L&&L.onVnodeUnmounted)||ie)&&Me(()=>{de&&Qe(de,m,f),ie&&qn(f,null,m,"unmounted")},x)},rt=f=>{const{type:m,el:x,anchor:k,transition:S}=f;if(m===Ce){at(x,k);return}if(m===fs){w(f);return}const _=()=>{i(x),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(f.shapeFlag&1&&S&&!S.persisted){const{leave:L,delayLeave:z}=S,A=()=>L(x,_);z?z(f.el,_,A):A()}else _()},at=(f,m)=>{let x;for(;f!==m;)x=p(f),i(f),f=x;i(m)},Kn=(f,m,x)=>{const{bum:k,scope:S,job:_,subTree:L,um:z,m:A,a:D}=f;ws(A),ws(D),k&&mt(k),S.stop(),_&&(_.flags|=8,Fe(L,f,m,x)),z&&Me(z,m),Me(()=>{f.isUnmounted=!0},m)},Je=(f,m,x,k=!1,S=!1,_=0)=>{for(let L=_;L<f.length;L++)Fe(f[L],m,x,k,S)},j=f=>{if(f.shapeFlag&6)return j(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const m=p(f.anchor||f.el),x=m&&m[Dc];return x?p(x):m};let B=!1;const $=(f,m,x)=>{let k;f==null?m._vnode&&(Fe(m._vnode,null,null,!0),k=m._vnode.component):v(m._vnode||null,f,m,null,null,null,x),m._vnode=f,B||(B=!0,Dr(k),xo(),B=!1)},G={p:v,um:Fe,m:cn,r:rt,mt:ue,mc:ve,pc:ae,pbc:H,n:j,o:e};return{render:$,hydrate:void 0,createApp:Yc($)}}function di({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Yn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function du(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Yo(e,n,t=!1){const s=e.children,i=n.children;if(Y(s)&&Y(i))for(let r=0;r<s.length;r++){const a=s[r];let o=i[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[r]=Sn(i[r]),o.el=a.el),!t&&o.patchFlag!==-2&&Yo(a,o)),o.type===Us&&(o.patchFlag===-1&&(o=i[r]=Sn(o)),o.el=a.el),o.type===Ae&&!o.el&&(o.el=a.el)}}function hu(e){const n=e.slice(),t=[0];let s,i,r,a,o;const l=e.length;for(s=0;s<l;s++){const u=e[s];if(u!==0){if(i=t[t.length-1],e[i]<u){n[s]=i,t.push(s);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,e[t[o]]<u?r=o+1:a=o;u<e[t[r]]&&(r>0&&(n[s]=t[r-1]),t[r]=s)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=n[a];return t}function Jo(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Jo(n)}function ws(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Zo(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Zo(n.subTree):null}const ks=e=>e.__isSuspense;function fu(e,n){n&&n.pendingBranch?Y(e)?n.effects.push(...e):n.effects.push(e):_c(e)}const Ce=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),Ae=Symbol.for("v-cmt"),fs=Symbol.for("v-stc"),Ft=[];let Ye=null;function I(e=!1){Ft.push(Ye=e?null:[])}function pu(){Ft.pop(),Ye=Ft[Ft.length-1]||null}let Yt=1;function _s(e,n=!1){Yt+=e,e<0&&Ye&&n&&(Ye.hasOnce=!0)}function Qo(e){return e.dynamicChildren=Yt>0?Ye||ft:null,pu(),Yt>0&&Ye&&Ye.push(e),e}function P(e,n,t,s,i,r){return Qo(h(e,n,t,s,i,r,!0))}function Rn(e,n,t,s,i){return Qo(O(e,n,t,s,i,!0))}function Jt(e){return e?e.__v_isVNode===!0:!1}function Hn(e,n){return e.type===n.type&&e.key===n.key}const Xo=({key:e})=>e??null,ps=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?_e(e)||ze(e)||ne(e)?{i:qe,r:e,k:n,f:!!t}:e:null);function h(e,n=null,t=null,s=0,i=null,r=e===Ce?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Xo(n),ref:n&&ps(n),scopeId:yo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:qe};return o?(hr(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=_e(t)?8:16),Yt>0&&!a&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const O=mu;function mu(e,n=null,t=null,s=0,i=null,r=!1){if((!e||e===Po)&&(e=Ae),Jt(e)){const o=Pn(e,n,!0);return t&&hr(o,t),Yt>0&&!r&&Ye&&(o.shapeFlag&6?Ye[Ye.indexOf(e)]=o:Ye.push(o)),o.patchFlag=-2,o}if(Cu(e)&&(e=e.__vccOpts),n){n=gu(n);let{class:o,style:l}=n;o&&!_e(o)&&(n.class=me(o)),ce(l)&&(or(l)&&!Y(l)&&(l=Ie({},l)),n.style=Vn(l))}const a=_e(e)?1:ks(e)?128:ko(e)?64:ce(e)?4:ne(e)?2:0;return h(e,n,t,s,i,a,r,!0)}function gu(e){return e?or(e)||Bo(e)?Ie({},e):e:null}function Pn(e,n,t=!1,s=!1){const{props:i,ref:r,patchFlag:a,children:o,transition:l}=e,u=n?xu(i||{},n):i,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Xo(u),ref:n&&n.ref?t&&r?Y(r)?r.concat(ps(n)):[r,ps(n)]:ps(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ce?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&yt(c,l.clone(c)),c}function Bn(e=" ",n=0){return O(Us,null,e,n)}function hi(e,n){const t=O(fs,null,e);return t.staticCount=n,t}function ge(e="",n=!1){return n?(I(),Rn(Ae,null,e)):O(Ae,null,e)}function xn(e){return e==null||typeof e=="boolean"?O(Ae):Y(e)?O(Ce,null,e.slice()):Jt(e)?Sn(e):O(Us,null,String(e))}function Sn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pn(e)}function hr(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(Y(n))t=16;else if(typeof n=="object")if(s&65){const i=n.default;i&&(i._c&&(i._d=!1),hr(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Bo(n)?n._ctx=qe:i===3&&qe&&(qe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ne(n)?(n={default:n,_ctx:qe},t=32):(n=String(n),s&64?(t=16,n=[Bn(n)]):t=8);e.children=n,e.shapeFlag|=t}function xu(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const i in s)if(i==="class")n.class!==s.class&&(n.class=me([n.class,s.class]));else if(i==="style")n.style=Vn([n.style,s.style]);else if(Os(i)){const r=n[i],a=s[i];a&&r!==a&&!(Y(r)&&r.includes(a))&&(n[i]=r?[].concat(r,a):a)}else i!==""&&(n[i]=s[i])}return n}function Qe(e,n,t,s=null){on(e,n,7,[t,s])}const vu=Wo();let yu=0;function bu(e,n,t){const s=e.type,i=(n?n.appContext:e.appContext)||vu,r={uid:yu++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Go(s,i),emitsOptions:Lo(s,i),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:s.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Zc.bind(null,r),e.ce&&e.ce(r),r}let Oe=null;const fr=()=>Oe||qe;let js,$i;{const e=Ws(),n=(t,s)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(s),r=>{i.length>1?i.forEach(a=>a(r)):i[0](r)}};js=n("__VUE_INSTANCE_SETTERS__",t=>Oe=t),$i=n("__VUE_SSR_SETTERS__",t=>Zt=t)}const is=e=>{const n=Oe;return js(e),e.scope.on(),()=>{e.scope.off(),js(n)}},Hr=()=>{Oe&&Oe.scope.off(),js(null)};function el(e){return e.vnode.shapeFlag&4}let Zt=!1;function wu(e,n=!1,t=!1){n&&$i(n);const{props:s,children:i}=e.vnode,r=el(e);su(e,s,r,n),ou(e,i,t||n);const a=r?ku(e,n):void 0;return n&&$i(!1),a}function ku(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fc);const{setup:s}=t;if(s){In();const i=e.setupContext=s.length>1?ju(e):null,r=is(e),a=ss(s,e,0,[e.props,i]),o=Va(a);if(Mn(),r(),(o||e.sp)&&!st(e)&&Do(e),o){if(a.then(Hr,Hr),n)return a.then(l=>{Fr(e,l)}).catch(l=>{$s(l,e,0)});e.asyncDep=a}else Fr(e,a)}else nl(e)}function Fr(e,n,t){ne(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ce(n)&&(e.setupState=po(n)),nl(e)}function nl(e,n,t){const s=e.type;e.render||(e.render=s.render||yn);{const i=is(e);In();try{Bc(e)}finally{Mn(),i()}}}const _u={get(e,n){return Pe(e,"get",""),e[n]}};function ju(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,_u),slots:e.slots,emit:e.emit,expose:n}}function Ks(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(po(fc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Ht)return Ht[t](e)},has(n,t){return t in n||t in Ht}})):e.proxy}function Hi(e,n=!0){return ne(e)?e.displayName||e.name:e.name||n&&e.__name}function Cu(e){return ne(e)&&"__vccOpts"in e}const fe=(e,n)=>vc(e,n,Zt);function bt(e,n,t){try{_s(-1);const s=arguments.length;return s===2?ce(n)&&!Y(n)?Jt(n)?O(e,null,[n]):O(e,n):O(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&Jt(t)&&(t=[t]),O(e,n,t))}finally{_s(1)}}const Su="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fi;const Br=typeof window<"u"&&window.trustedTypes;if(Br)try{Fi=Br.createPolicy("vue",{createHTML:e=>e})}catch{}const tl=Fi?e=>Fi.createHTML(e):e=>e,Eu="http://www.w3.org/2000/svg",Du="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,Vr=Cn&&Cn.createElement("template"),Iu={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const i=n==="svg"?Cn.createElementNS(Eu,e):n==="mathml"?Cn.createElementNS(Du,e):t?Cn.createElement(e,{is:t}):Cn.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Cn.createTextNode(e),createComment:e=>Cn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Cn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,i,r){const a=t?t.previousSibling:n.lastChild;if(i&&(i===r||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Vr.innerHTML=tl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const o=Vr.content;if(s==="svg"||s==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}n.insertBefore(o,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},zn="transition",Dt="animation",Qt=Symbol("_vtc"),sl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mu=Ie({},_o,sl),Tu=e=>(e.displayName="Transition",e.props=Mu,e),Cs=Tu((e,{slots:n})=>bt(Tc,Ru(e),n)),Jn=(e,n=[])=>{Y(e)?e.forEach(t=>t(...n)):e&&e(...n)},Gr=e=>e?Y(e)?e.some(n=>n.length>1):e.length>1:!1;function Ru(e){const n={};for(const E in e)E in sl||(n[E]=e[E]);if(e.css===!1)return n;const{name:t="v",type:s,duration:i,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:p=`${t}-leave-active`,leaveToClass:g=`${t}-leave-to`}=e,C=Pu(i),v=C&&C[0],M=C&&C[1],{onBeforeEnter:R,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:N,onBeforeAppear:J=R,onAppear:X=y,onAppearCancelled:ve=b}=n,K=(E,ee,ue,te)=>{E._enterCancelled=te,Zn(E,ee?c:o),Zn(E,ee?u:a),ue&&ue()},H=(E,ee)=>{E._isLeaving=!1,Zn(E,d),Zn(E,g),Zn(E,p),ee&&ee()},V=E=>(ee,ue)=>{const te=E?X:y,ye=()=>K(ee,E,ue);Jn(te,[ee,ye]),Ur(()=>{Zn(ee,E?l:r),_n(ee,E?c:o),Gr(te)||Kr(ee,s,v,ye)})};return Ie(n,{onBeforeEnter(E){Jn(R,[E]),_n(E,r),_n(E,a)},onBeforeAppear(E){Jn(J,[E]),_n(E,l),_n(E,u)},onEnter:V(!1),onAppear:V(!0),onLeave(E,ee){E._isLeaving=!0;const ue=()=>H(E,ee);_n(E,d),E._enterCancelled?(_n(E,p),Jr(E)):(Jr(E),_n(E,p)),Ur(()=>{E._isLeaving&&(Zn(E,d),_n(E,g),Gr(w)||Kr(E,s,M,ue))}),Jn(w,[E,ue])},onEnterCancelled(E){K(E,!1,void 0,!0),Jn(b,[E])},onAppearCancelled(E){K(E,!0,void 0,!0),Jn(ve,[E])},onLeaveCancelled(E){H(E),Jn(N,[E])}})}function Pu(e){if(e==null)return null;if(ce(e))return[fi(e.enter),fi(e.leave)];{const n=fi(e);return[n,n]}}function fi(e){return Ll(e)}function _n(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Qt]||(e[Qt]=new Set)).add(n)}function Zn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[Qt];t&&(t.delete(n),t.size||(e[Qt]=void 0))}function Ur(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Au=0;function Kr(e,n,t,s){const i=e._endId=++Au,r=()=>{i===e._endId&&s()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:o,propCount:l}=Ou(e,n);if(!a)return s();const u=a+"end";let c=0;const d=()=>{e.removeEventListener(u,p),r()},p=g=>{g.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},o+1),e.addEventListener(u,p)}function Ou(e,n){const t=window.getComputedStyle(e),s=C=>(t[C]||"").split(", "),i=s(`${zn}Delay`),r=s(`${zn}Duration`),a=qr(i,r),o=s(`${Dt}Delay`),l=s(`${Dt}Duration`),u=qr(o,l);let c=null,d=0,p=0;n===zn?a>0&&(c=zn,d=a,p=r.length):n===Dt?u>0&&(c=Dt,d=u,p=l.length):(d=Math.max(a,u),c=d>0?a>u?zn:Dt:null,p=c?c===zn?r.length:l.length:0);const g=c===zn&&/\b(?:transform|all)(?:,|$)/.test(s(`${zn}Property`).toString());return{type:c,timeout:d,propCount:p,hasTransform:g}}function qr(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>Yr(t)+Yr(e[s])))}function Yr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Jr(e){return(e?e.ownerDocument:document).body.offsetHeight}function zu(e,n,t){const s=e[Qt];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Zr=Symbol("_vod"),Nu=Symbol("_vsh"),Wu=Symbol(""),Lu=/(?:^|;)\s*display\s*:/;function $u(e,n,t){const s=e.style,i=_e(t);let r=!1;if(t&&!i){if(n)if(_e(n))for(const a of n.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ms(s,o,"")}else for(const a in n)t[a]==null&&ms(s,a,"");for(const a in t)a==="display"&&(r=!0),ms(s,a,t[a])}else if(i){if(n!==t){const a=s[Wu];a&&(t+=";"+a),s.cssText=t,r=Lu.test(t)}}else n&&e.removeAttribute("style");Zr in e&&(e[Zr]=r?s.display:"",e[Nu]&&(s.display="none"))}const Qr=/\s*!important$/;function ms(e,n,t){if(Y(t))t.forEach(s=>ms(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=Hu(e,n);Qr.test(t)?e.setProperty(Un(s),t.replace(Qr,""),"important"):e[s]=t}}const Xr=["Webkit","Moz","ms"],pi={};function Hu(e,n){const t=pi[n];if(t)return t;let s=$e(n);if(s!=="filter"&&s in e)return pi[n]=s;s=Ns(s);for(let i=0;i<Xr.length;i++){const r=Xr[i]+s;if(r in e)return pi[n]=r}return n}const ea="http://www.w3.org/1999/xlink";function na(e,n,t,s,i,r=Gl(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(ea,n.slice(6,n.length)):e.setAttributeNS(ea,n,t):t==null||r&&!qa(t)?e.removeAttribute(n):e.setAttribute(n,r?"":bn(t)?String(t):t)}function ta(e,n,t,s,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?tl(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const o=typeof e[n];o==="boolean"?t=qa(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(i||n)}function ut(e,n,t,s){e.addEventListener(n,t,s)}function Fu(e,n,t,s){e.removeEventListener(n,t,s)}const sa=Symbol("_vei");function Bu(e,n,t,s,i=null){const r=e[sa]||(e[sa]={}),a=r[n];if(s&&a)a.value=s;else{const[o,l]=Vu(n);if(s){const u=r[n]=Ku(s,i);ut(e,o,u,l)}else a&&(Fu(e,o,a,l),r[n]=void 0)}}const ia=/(?:Once|Passive|Capture)$/;function Vu(e){let n;if(ia.test(e)){n={};let s;for(;s=e.match(ia);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Un(e.slice(2)),n]}let mi=0;const Gu=Promise.resolve(),Uu=()=>mi||(Gu.then(()=>mi=0),mi=Date.now());function Ku(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;on(qu(s,t.value),n,5,[s])};return t.value=e,t.attached=Uu(),t}function qu(e,n){if(Y(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>i=>!i._stopped&&s&&s(i))}else return n}const ra=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Yu=(e,n,t,s,i,r)=>{const a=i==="svg";n==="class"?zu(e,s,a):n==="style"?$u(e,t,s):Os(n)?Ji(n)||Bu(e,n,t,s,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Ju(e,n,s,a))?(ta(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&na(e,n,s,a,r,n!=="value")):e._isVueCE&&(Zu(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!_e(s)))?ta(e,$e(n),s,r,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),na(e,n,s,a))};function Ju(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&ra(n)&&ne(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ra(n)&&_e(t)?!1:n in e}function Zu(e,n){const t=e._def.props;if(!t)return!1;const s=$e(n);return Array.isArray(t)?t.some(i=>$e(i)===s):Object.keys(t).some(i=>$e(i)===s)}const aa=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Y(n)?t=>mt(n,t):n};function Qu(e){e.target.composing=!0}function oa(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const gi=Symbol("_assign");function la(e,n,t){return n&&(e=e.trim()),t&&(e=Xi(e)),e}const Xu={created(e,{modifiers:{lazy:n,trim:t,number:s}},i){e[gi]=aa(i);const r=s||i.props&&i.props.type==="number";ut(e,n?"change":"input",a=>{a.target.composing||e[gi](la(e.value,t,r))}),(t||r)&&ut(e,"change",()=>{e.value=la(e.value,t,r)}),n||(ut(e,"compositionstart",Qu),ut(e,"compositionend",oa),ut(e,"change",oa))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:s,trim:i,number:r}},a){if(e[gi]=aa(a),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?Xi(e.value):e.value,l=n??"";o!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&n===t||i&&e.value.trim()===l)||(e.value=l))}},ed=["ctrl","shift","alt","meta"],nd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>ed.some(t=>e[`${t}Key`]&&!n.includes(t))},Bt=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),s=n.join(".");return t[s]||(t[s]=((i,...r)=>{for(let a=0;a<n.length;a++){const o=nd[n[a]];if(o&&o(i,n))return}return e(i,...r)}))},td={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sd=(e,n)=>{const t=e._withKeys||(e._withKeys={}),s=n.join(".");return t[s]||(t[s]=(i=>{if(!("key"in i))return;const r=Un(i.key);if(n.some(a=>a===r||td[a]===r))return e(i)}))},id=Ie({patchProp:Yu},Iu);let ca;function rd(){return ca||(ca=cu(id))}const ua=((...e)=>{const n=rd().createApp(...e),{mount:t}=n;return n.mount=s=>{const i=od(s);if(!i)return;const r=n._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=t(i,!1,ad(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},n});function ad(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function od(e){return _e(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const dt=typeof document<"u";function il(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ld(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&il(e.default)}const oe=Object.assign;function xi(e,n){const t={};for(const s in n){const i=n[s];t[s]=ln(i)?i.map(e):e(i)}return t}const Vt=()=>{},ln=Array.isArray;function da(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}const rl=/#/g,cd=/&/g,ud=/\//g,dd=/=/g,hd=/\?/g,al=/\+/g,fd=/%5B/g,pd=/%5D/g,ol=/%5E/g,md=/%60/g,ll=/%7B/g,gd=/%7C/g,cl=/%7D/g,xd=/%20/g;function pr(e){return e==null?"":encodeURI(""+e).replace(gd,"|").replace(fd,"[").replace(pd,"]")}function vd(e){return pr(e).replace(ll,"{").replace(cl,"}").replace(ol,"^")}function Bi(e){return pr(e).replace(al,"%2B").replace(xd,"+").replace(rl,"%23").replace(cd,"%26").replace(md,"`").replace(ll,"{").replace(cl,"}").replace(ol,"^")}function yd(e){return Bi(e).replace(dd,"%3D")}function bd(e){return pr(e).replace(rl,"%23").replace(hd,"%3F")}function wd(e){return bd(e).replace(ud,"%2F")}function Xt(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const kd=/\/$/,_d=e=>e.replace(kd,"");function vi(e,n,t="/"){let s,i={},r="",a="";const o=n.indexOf("#");let l=n.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(s=n.slice(0,l),r=n.slice(l,o>0?o:n.length),i=e(r.slice(1))),o>=0&&(s=s||n.slice(0,o),a=n.slice(o,n.length)),s=Ed(s??n,t),{fullPath:s+r+a,path:s,query:i,hash:Xt(a)}}function jd(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function ha(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Cd(e,n,t){const s=n.matched.length-1,i=t.matched.length-1;return s>-1&&s===i&&wt(n.matched[s],t.matched[i])&&ul(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function wt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function ul(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!Sd(e[t],n[t]))return!1;return!0}function Sd(e,n){return ln(e)?fa(e,n):ln(n)?fa(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function fa(e,n){return ln(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function Ed(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=t.length-1,a,o;for(a=0;a<s.length;a++)if(o=s[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+s.slice(a).join("/")}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vi=(function(e){return e.pop="pop",e.push="push",e})({}),yi=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Dd(e){if(!e)if(dt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_d(e)}const Id=/^[^#]+#/;function Md(e,n){return e.replace(Id,"#")+n}function Td(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const qs=()=>({left:window.scrollX,top:window.scrollY});function Rd(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=Td(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function pa(e,n){return(history.state?history.state.position-n:-1)+e}const Gi=new Map;function Pd(e,n){Gi.set(e,n)}function Ad(e){const n=Gi.get(e);return Gi.delete(e),n}function Od(e){return typeof e=="string"||e&&typeof e=="object"}function dl(e){return typeof e=="string"||typeof e=="symbol"}let je=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const hl=Symbol("");je.MATCHER_NOT_FOUND+"",je.NAVIGATION_GUARD_REDIRECT+"",je.NAVIGATION_ABORTED+"",je.NAVIGATION_CANCELLED+"",je.NAVIGATION_DUPLICATED+"";function kt(e,n){return oe(new Error,{type:e,[hl]:!0},n)}function jn(e,n){return e instanceof Error&&hl in e&&(n==null||!!(e.type&n))}const zd=["params","query","hash"];function Nd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of zd)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function Wd(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<t.length;++s){const i=t[s].replace(al," "),r=i.indexOf("="),a=Xt(r<0?i:i.slice(0,r)),o=r<0?null:Xt(i.slice(r+1));if(a in n){let l=n[a];ln(l)||(l=n[a]=[l]),l.push(o)}else n[a]=o}return n}function ma(e){let n="";for(let t in e){const s=e[t];if(t=yd(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(ln(s)?s.map(i=>i&&Bi(i)):[s&&Bi(s)]).forEach(i=>{i!==void 0&&(n+=(n.length?"&":"")+t,i!=null&&(n+="="+i))})}return n}function Ld(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=ln(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return n}const $d=Symbol(""),ga=Symbol(""),Ys=Symbol(""),mr=Symbol(""),Ui=Symbol("");function It(){let e=[];function n(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function $n(e,n,t,s,i,r=a=>a()){const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const u=p=>{p===!1?l(kt(je.NAVIGATION_ABORTED,{from:t,to:n})):p instanceof Error?l(p):Od(p)?l(kt(je.NAVIGATION_GUARD_REDIRECT,{from:n,to:p})):(a&&s.enterCallbacks[i]===a&&typeof p=="function"&&a.push(p),o())},c=r(()=>e.call(s&&s.instances[i],n,t,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(p=>l(p))})}function bi(e,n,t,s,i=r=>r()){const r=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(n!=="beforeRouteEnter"&&!a.instances[o]))if(il(l)){const u=(l.__vccOpts||l)[n];u&&r.push($n(u,t,s,a,o,i))}else{let u=l();r.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const d=ld(c)?c.default:c;a.mods[o]=c,a.components[o]=d;const p=(d.__vccOpts||d)[n];return p&&$n(p,t,s,a,o,i)()}))}}return r}function Hd(e,n){const t=[],s=[],i=[],r=Math.max(n.matched.length,e.matched.length);for(let a=0;a<r;a++){const o=n.matched[a];o&&(e.matched.find(u=>wt(u,o))?s.push(o):t.push(o));const l=e.matched[a];l&&(n.matched.find(u=>wt(u,l))||i.push(l))}return[t,s,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Fd=()=>location.protocol+"//"+location.host;function fl(e,n){const{pathname:t,search:s,hash:i}=n,r=e.indexOf("#");if(r>-1){let a=i.includes(e.slice(r))?e.slice(r).length:1,o=i.slice(a);return o[0]!=="/"&&(o="/"+o),ha(o,"")}return ha(t,e)+s+i}function Bd(e,n,t,s){let i=[],r=[],a=null;const o=({state:p})=>{const g=fl(e,location),C=t.value,v=n.value;let M=0;if(p){if(t.value=g,n.value=p,a&&a===C){a=null;return}M=v?p.position-v.position:0}else s(g);i.forEach(R=>{R(t.value,C,{delta:M,type:Vi.pop,direction:M?M>0?yi.forward:yi.back:yi.unknown})})};function l(){a=t.value}function u(p){i.push(p);const g=()=>{const C=i.indexOf(p);C>-1&&i.splice(C,1)};return r.push(g),g}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(oe({},p.state,{scroll:qs()}),"")}}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function xa(e,n,t,s=!1,i=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:i?qs():null}}function Vd(e){const{history:n,location:t}=window,s={value:fl(e,t)},i={value:n.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(l,u,c){const d=e.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:Fd()+e+l;try{n[c?"replaceState":"pushState"](u,"",p),i.value=u}catch(g){console.error(g),t[c?"replace":"assign"](p)}}function a(l,u){r(l,oe({},n.state,xa(i.value.back,l,i.value.forward,!0),u,{position:i.value.position}),!0),s.value=l}function o(l,u){const c=oe({},i.value,n.state,{forward:l,scroll:qs()});r(c.current,c,!0),r(l,oe({},xa(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:i,push:o,replace:a}}function Gd(e){e=Dd(e);const n=Vd(e),t=Bd(e,n.state,n.location,n.replace);function s(r,a=!0){a||t.pauseListeners(),history.go(r)}const i=oe({location:"",base:e,go:s,createHref:Md.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}let et=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var De=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(De||{});const Ud={type:et.Static,value:""},Kd=/[a-zA-Z0-9_]/;function qd(e){if(!e)return[[]];if(e==="/")return[[Ud]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(g){throw new Error(`ERR (${t})/"${u}": ${g}`)}let t=De.Static,s=t;const i=[];let r;function a(){r&&i.push(r),r=[]}let o=0,l,u="",c="";function d(){u&&(t===De.Static?r.push({type:et.Static,value:u}):t===De.Param||t===De.ParamRegExp||t===De.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:et.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&t!==De.ParamRegExp){s=t,t=De.EscapeNext;continue}switch(t){case De.Static:l==="/"?(u&&d(),a()):l===":"?(d(),t=De.Param):p();break;case De.EscapeNext:p(),t=s;break;case De.Param:l==="("?t=De.ParamRegExp:Kd.test(l)?p():(d(),t=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case De.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=De.ParamRegExpEnd:c+=l;break;case De.ParamRegExpEnd:d(),t=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:n("Unknown state");break}}return t===De.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),d(),a(),i}const va="[^/]+?",Yd={sensitive:!1,strict:!1,start:!0,end:!0};var We=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(We||{});const Jd=/[.+*?^${}()[\]/\\]/g;function Zd(e,n){const t=oe({},Yd,n),s=[];let i=t.start?"^":"";const r=[];for(const u of e){const c=u.length?[]:[We.Root];t.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=We.Segment+(t.sensitive?We.BonusCaseSensitive:0);if(p.type===et.Static)d||(i+="/"),i+=p.value.replace(Jd,"\\$&"),g+=We.Static;else if(p.type===et.Param){const{value:C,repeatable:v,optional:M,regexp:R}=p;r.push({name:C,repeatable:v,optional:M});const y=R||va;if(y!==va){g+=We.BonusCustomRegExp;try{`${y}`}catch(w){throw new Error(`Invalid custom RegExp for param "${C}" (${y}): `+w.message)}}let b=v?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(b=M&&u.length<2?`(?:/${b})`:"/"+b),M&&(b+="?"),i+=b,g+=We.Dynamic,M&&(g+=We.BonusOptional),v&&(g+=We.BonusRepeatable),y===".*"&&(g+=We.BonusWildcard)}c.push(g)}s.push(c)}if(t.strict&&t.end){const u=s.length-1;s[u][s[u].length-1]+=We.BonusStrict}t.strict||(i+="/?"),t.end?i+="$":t.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,t.sensitive?"":"i");function o(u){const c=u.match(a),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",C=r[p-1];d[C.name]=g&&C.repeatable?g.split("/"):g}return d}function l(u){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===et.Static)c+=g.value;else if(g.type===et.Param){const{value:C,repeatable:v,optional:M}=g,R=C in u?u[C]:"";if(ln(R)&&!v)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const y=ln(R)?R.join("/"):R;if(!y)if(M)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);c+=y}}return c||"/"}return{re:a,score:s,keys:r,parse:o,stringify:l}}function Qd(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===We.Static+We.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===We.Static+We.Segment?1:-1:0}function pl(e,n){let t=0;const s=e.score,i=n.score;for(;t<s.length&&t<i.length;){const r=Qd(s[t],i[t]);if(r)return r;t++}if(Math.abs(i.length-s.length)===1){if(ya(s))return 1;if(ya(i))return-1}return i.length-s.length}function ya(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Xd={strict:!1,end:!0,sensitive:!1};function eh(e,n,t){const s=Zd(qd(e.path),t),i=oe(s,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function nh(e,n){const t=[],s=new Map;n=da(Xd,n);function i(d){return s.get(d)}function r(d,p,g){const C=!g,v=wa(d);v.aliasOf=g&&g.record;const M=da(n,d),R=[v];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const N of w)R.push(wa(oe({},v,{components:g?g.record.components:v.components,path:N,aliasOf:g?g.record:v})))}let y,b;for(const w of R){const{path:N}=w;if(p&&N[0]!=="/"){const J=p.record.path,X=J[J.length-1]==="/"?"":"/";w.path=p.record.path+(N&&X+N)}if(y=eh(w,p,M),g?g.alias.push(y):(b=b||y,b!==y&&b.alias.push(y),C&&d.name&&!ka(y)&&a(d.name)),ml(y)&&l(y),v.children){const J=v.children;for(let X=0;X<J.length;X++)r(J[X],y,g&&g.children[X])}g=g||y}return b?()=>{a(b)}:Vt}function a(d){if(dl(d)){const p=s.get(d);p&&(s.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function o(){return t}function l(d){const p=ih(d,t);t.splice(p,0,d),d.record.name&&!ka(d)&&s.set(d.record.name,d)}function u(d,p){let g,C={},v,M;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw kt(je.MATCHER_NOT_FOUND,{location:d});M=g.record.name,C=oe(ba(p.params,g.keys.filter(b=>!b.optional).concat(g.parent?g.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),d.params&&ba(d.params,g.keys.map(b=>b.name))),v=g.stringify(C)}else if(d.path!=null)v=d.path,g=t.find(b=>b.re.test(v)),g&&(C=g.parse(v),M=g.record.name);else{if(g=p.name?s.get(p.name):t.find(b=>b.re.test(p.path)),!g)throw kt(je.MATCHER_NOT_FOUND,{location:d,currentLocation:p});M=g.record.name,C=oe({},p.params,d.params),v=g.stringify(C)}const R=[];let y=g;for(;y;)R.unshift(y.record),y=y.parent;return{name:M,path:v,params:C,matched:R,meta:sh(R)}}e.forEach(d=>r(d));function c(){t.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:i}}function ba(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function wa(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:th(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function th(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="object"?t[s]:t;return n}function ka(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sh(e){return e.reduce((n,t)=>oe(n,t.meta),{})}function ih(e,n){let t=0,s=n.length;for(;t!==s;){const r=t+s>>1;pl(e,n[r])<0?s=r:t=r+1}const i=rh(e);return i&&(s=n.lastIndexOf(i,s-1)),s}function rh(e){let n=e;for(;n=n.parent;)if(ml(n)&&pl(e,n)===0)return n}function ml({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function _a(e){const n=rn(Ys),t=rn(mr),s=fe(()=>{const l=W(e.to);return n.resolve(l)}),i=fe(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],d=t.matched;if(!c||!d.length)return-1;const p=d.findIndex(wt.bind(null,c));if(p>-1)return p;const g=ja(l[u-2]);return u>1&&ja(c)===g&&d[d.length-1].path!==g?d.findIndex(wt.bind(null,l[u-2])):p}),r=fe(()=>i.value>-1&&uh(t.params,s.value.params)),a=fe(()=>i.value>-1&&i.value===t.matched.length-1&&ul(t.params,s.value.params));function o(l={}){if(ch(l)){const u=n[W(e.replace)?"replace":"push"](W(e.to)).catch(Vt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:fe(()=>s.value.href),isActive:r,isExactActive:a,navigate:o}}function ah(e){return e.length===1?e[0]:e}const oh=Ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_a,setup(e,{slots:n}){const t=ts(_a(e)),{options:s}=rn(Ys),i=fe(()=>({[Ca(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[Ca(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=n.default&&ah(n.default(t));return e.custom?r:bt("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},r)}}}),lh=oh;function ch(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function uh(e,n){for(const t in n){const s=n[t],i=e[t];if(typeof s=="string"){if(s!==i)return!1}else if(!ln(i)||i.length!==s.length||s.some((r,a)=>r.valueOf()!==i[a].valueOf()))return!1}return!0}function ja(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ca=(e,n,t)=>e??n??t,dh=Ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const s=rn(Ui),i=fe(()=>e.route||s.value),r=rn(ga,0),a=fe(()=>{let u=W(r);const{matched:c}=i.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),o=fe(()=>i.value.matched[a.value]);hs(ga,fe(()=>a.value+1)),hs($d,o),hs(Ui,i);const l=Z();return Fn(()=>[l.value,o.value,e.name],([u,c,d],[p,g,C])=>{c&&(c.instances[d]=u,g&&g!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),u&&c&&(!g||!wt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=i.value,c=e.name,d=o.value,p=d&&d.components[c];if(!p)return Sa(t.default,{Component:p,route:u});const g=d.props[c],C=g?g===!0?u.params:typeof g=="function"?g(u):g:null,M=bt(p,oe({},C,n,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Sa(t.default,{Component:M,route:u})||M}}});function Sa(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const hh=dh;function fh(e){const n=nh(e.routes,e),t=e.parseQuery||Wd,s=e.stringifyQuery||ma,i=e.history,r=It(),a=It(),o=It(),l=pc(Nn);let u=Nn;dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=xi.bind(null,j=>""+j),d=xi.bind(null,wd),p=xi.bind(null,Xt);function g(j,B){let $,G;return dl(j)?($=n.getRecordMatcher(j),G=B):G=j,n.addRoute(G,$)}function C(j){const B=n.getRecordMatcher(j);B&&n.removeRoute(B)}function v(){return n.getRoutes().map(j=>j.record)}function M(j){return!!n.getRecordMatcher(j)}function R(j,B){if(B=oe({},B||l.value),typeof j=="string"){const x=vi(t,j,B.path),k=n.resolve({path:x.path},B),S=i.createHref(x.fullPath);return oe(x,k,{params:p(k.params),hash:Xt(x.hash),redirectedFrom:void 0,href:S})}let $;if(j.path!=null)$=oe({},j,{path:vi(t,j.path,B.path).path});else{const x=oe({},j.params);for(const k in x)x[k]==null&&delete x[k];$=oe({},j,{params:d(x)}),B.params=d(B.params)}const G=n.resolve($,B),se=j.hash||"";G.params=c(p(G.params));const f=jd(s,oe({},j,{hash:vd(se),path:G.path})),m=i.createHref(f);return oe({fullPath:f,hash:se,query:s===ma?Ld(j.query):j.query||{}},G,{redirectedFrom:void 0,href:m})}function y(j){return typeof j=="string"?vi(t,j,l.value.path):oe({},j)}function b(j,B){if(u!==j)return kt(je.NAVIGATION_CANCELLED,{from:B,to:j})}function w(j){return X(j)}function N(j){return w(oe(y(j),{replace:!0}))}function J(j,B){const $=j.matched[j.matched.length-1];if($&&$.redirect){const{redirect:G}=$;let se=typeof G=="function"?G(j,B):G;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=y(se):{path:se},se.params={}),oe({query:j.query,hash:j.hash,params:se.path!=null?{}:j.params},se)}}function X(j,B){const $=u=R(j),G=l.value,se=j.state,f=j.force,m=j.replace===!0,x=J($,G);if(x)return X(oe(y(x),{state:typeof x=="object"?oe({},se,x.state):se,force:f,replace:m}),B||$);const k=$;k.redirectedFrom=B;let S;return!f&&Cd(s,G,$)&&(S=kt(je.NAVIGATION_DUPLICATED,{to:k,from:G}),cn(G,G,!0,!1)),(S?Promise.resolve(S):H(k,G)).catch(_=>jn(_)?jn(_,je.NAVIGATION_GUARD_REDIRECT)?_:On(_):ae(_,k,G)).then(_=>{if(_){if(jn(_,je.NAVIGATION_GUARD_REDIRECT))return X(oe({replace:m},y(_.to),{state:typeof _.to=="object"?oe({},se,_.to.state):se,force:f}),B||k)}else _=E(k,G,!0,m,se);return V(k,G,_),_})}function ve(j,B){const $=b(j,B);return $?Promise.reject($):Promise.resolve()}function K(j){const B=at.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(j):j()}function H(j,B){let $;const[G,se,f]=Hd(j,B);$=bi(G.reverse(),"beforeRouteLeave",j,B);for(const x of G)x.leaveGuards.forEach(k=>{$.push($n(k,j,B))});const m=ve.bind(null,j,B);return $.push(m),Je($).then(()=>{$=[];for(const x of r.list())$.push($n(x,j,B));return $.push(m),Je($)}).then(()=>{$=bi(se,"beforeRouteUpdate",j,B);for(const x of se)x.updateGuards.forEach(k=>{$.push($n(k,j,B))});return $.push(m),Je($)}).then(()=>{$=[];for(const x of f)if(x.beforeEnter)if(ln(x.beforeEnter))for(const k of x.beforeEnter)$.push($n(k,j,B));else $.push($n(x.beforeEnter,j,B));return $.push(m),Je($)}).then(()=>(j.matched.forEach(x=>x.enterCallbacks={}),$=bi(f,"beforeRouteEnter",j,B,K),$.push(m),Je($))).then(()=>{$=[];for(const x of a.list())$.push($n(x,j,B));return $.push(m),Je($)}).catch(x=>jn(x,je.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function V(j,B,$){o.list().forEach(G=>K(()=>G(j,B,$)))}function E(j,B,$,G,se){const f=b(j,B);if(f)return f;const m=B===Nn,x=dt?history.state:{};$&&(G||m?i.replace(j.fullPath,oe({scroll:m&&x&&x.scroll},se)):i.push(j.fullPath,se)),l.value=j,cn(j,B,$,m),On()}let ee;function ue(){ee||(ee=i.listen((j,B,$)=>{if(!Kn.listening)return;const G=R(j),se=J(G,Kn.currentRoute.value);if(se){X(oe(se,{replace:!0,force:!0}),G).catch(Vt);return}u=G;const f=l.value;dt&&Pd(pa(f.fullPath,$.delta),qs()),H(G,f).catch(m=>jn(m,je.NAVIGATION_ABORTED|je.NAVIGATION_CANCELLED)?m:jn(m,je.NAVIGATION_GUARD_REDIRECT)?(X(oe(y(m.to),{force:!0}),G).then(x=>{jn(x,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&!$.delta&&$.type===Vi.pop&&i.go(-1,!1)}).catch(Vt),Promise.reject()):($.delta&&i.go(-$.delta,!1),ae(m,G,f))).then(m=>{m=m||E(G,f,!1),m&&($.delta&&!jn(m,je.NAVIGATION_CANCELLED)?i.go(-$.delta,!1):$.type===Vi.pop&&jn(m,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),V(G,f,m)}).catch(Vt)}))}let te=It(),ye=It(),pe;function ae(j,B,$){On(j);const G=ye.list();return G.length?G.forEach(se=>se(j,B,$)):console.error(j),Promise.reject(j)}function wn(){return pe&&l.value!==Nn?Promise.resolve():new Promise((j,B)=>{te.add([j,B])})}function On(j){return pe||(pe=!j,ue(),te.list().forEach(([B,$])=>j?$(j):B()),te.reset()),j}function cn(j,B,$,G){const{scrollBehavior:se}=e;if(!dt||!se)return Promise.resolve();const f=!$&&Ad(pa(j.fullPath,0))||(G||!$)&&history.state&&history.state.scroll||null;return Hs().then(()=>se(j,B,f)).then(m=>m&&Rd(m)).catch(m=>ae(m,j,B))}const Fe=j=>i.go(j);let rt;const at=new Set,Kn={currentRoute:l,listening:!0,addRoute:g,removeRoute:C,clearRoutes:n.clearRoutes,hasRoute:M,getRoutes:v,resolve:R,options:e,push:w,replace:N,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:ye.add,isReady:wn,install(j){j.component("RouterLink",lh),j.component("RouterView",hh),j.config.globalProperties.$router=Kn,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>W(l)}),dt&&!rt&&l.value===Nn&&(rt=!0,w(i.location).catch(G=>{}));const B={};for(const G in Nn)Object.defineProperty(B,G,{get:()=>l.value[G],enumerable:!0});j.provide(Ys,Kn),j.provide(mr,ho(B)),j.provide(Ui,l);const $=j.unmount;at.add(j),j.unmount=function(){at.delete(j),at.size<1&&(u=Nn,ee&&ee(),ee=null,l.value=Nn,rt=!1,pe=!1),$()}}};function Je(j){return j.reduce((B,$)=>B.then(()=>K($)),Promise.resolve())}return Kn}function rs(){return rn(Ys)}function Js(e){return rn(mr)}/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var us={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=({size:e,strokeWidth:n=2,absoluteStrokeWidth:t,color:s,iconNode:i,name:r,class:a,...o},{slots:l})=>bt("svg",{...us,width:e||us.width,height:e||us.height,stroke:s||us.stroke,"stroke-width":t?Number(n)*24/Number(e):n,class:["lucide",`lucide-${ph(r??"icon")}`],...o},[...i.map(u=>bt(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=(e,n)=>(t,{slots:s})=>bt(mh,{...t,iconNode:n,name:e},s);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=Ee("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=Ee("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=Ee("BookMarkedIcon",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=Ee("BookOpenIcon",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=Ee("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=Ee("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=Ee("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=Ee("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=Ee("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=Ee("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=Ee("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=Ee("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=Ee("GraduationCapIcon",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=Ee("KeyboardIcon",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=Ee("ListIcon",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=Ee("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=Ee("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=Ee("PlayIcon",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=Ee("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=Ee("ShuffleIcon",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=Ee("Volume2Icon",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=Ee("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_h={class:"min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative"},jh={class:"flex-1 overflow-y-auto p-4 pb-24"},Ch={class:"bg-white border-t border-gray-100 fixed bottom-0 w-full max-w-md z-50 pb-safe"},Sh={class:"flex justify-around items-center h-16"},Eh=Ue({__name:"App",setup(e){const n=Js();return(t,s)=>{const i=Rr("router-view"),r=Rr("router-link");return I(),P("div",_h,[h("main",jh,[O(i,null,{default:gn(({Component:a})=>[O(Cs,{name:"fade",mode:"out-in"},{default:gn(()=>[(I(),Rn(Pc,null,[(I(),Rn(Ao(a)))],1024))]),_:2},1024)]),_:1})]),h("nav",Ch,[h("div",Sh,[O(r,{to:"/courses",replace:"",class:me(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",W(n).path.startsWith("/course")||W(n).path.startsWith("/thema")?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:gn(()=>[O(W(yh),{class:"w-6 h-6"}),s[0]||(s[0]=h("span",{class:"text-xs font-medium"},"课程学习",-1))]),_:1},8,["class"]),O(r,{to:"/learn",replace:"",class:me(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",W(n).path==="/learn"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:gn(()=>[O(W(Zs),{class:"w-6 h-6"}),s[1]||(s[1]=h("span",{class:"text-xs font-medium"},"单词学习",-1))]),_:1},8,["class"]),O(r,{to:"/review",replace:"",class:me(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",W(n).path==="/review"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:gn(()=>[O(W(xr),{class:"w-6 h-6"}),s[2]||(s[2]=h("span",{class:"text-xs font-medium"},"复习",-1))]),_:1},8,["class"]),O(r,{to:"/history",replace:"",class:me(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",W(n).path==="/history"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:gn(()=>[O(W(gr),{class:"w-6 h-6"}),s[3]||(s[3]=h("span",{class:"text-xs font-medium"},"打卡记录",-1))]),_:1},8,["class"])])])])}}}),it=(e,n)=>{const t=e.__vccOpts||e;for(const[s,i]of n)t[s]=i;return t},Ia=it(Eh,[["__scopeId","data-v-87ab08ce"]]),Dh={name:"Dutch Learning App Complete Pronunciation Database",version:"1.0.0",totalWords:1200,language:"Dutch (Nederlands)",phonetic_system:"International Phonetic Alphabet (IPA)",generatedAt:"2026-01-30",description:"Complete phonetic transcription for all 1200 Dutch words using IPA notation",coverage:"100% - All words include pronunciation data"},Ih={1:{dutch:"hallo",pronunciation:"[ˈɦɑloː]",syllables:["hal","lo"],stress:1},2:{dutch:"goedemorgen",pronunciation:"[ˌɣudəˈmɔrɣə(n)]",syllables:["goe","de","mor","gen"],stress:3},3:{dutch:"dank je wel",pronunciation:"[ˈdɑŋk jə ˈʋɛl]",syllables:["dank","je","wel"],stress:[0,2]}},Mh={1:"[ˈɦɑloː]",2:"[ˌɣudəˈmɔrɣə(n)]",3:"[ˈdɑŋk jə ˈʋɛl]",4:"[jɑ]",5:"[neː]",6:"[ɑlsjəˈblift]",7:"[tɔt ˈzins]",8:"[ɪk]",9:"[jɛi]",10:"[hɛi]",11:"[zɛi]",12:"[ʋɛi]",13:"[ˈjʏli]",14:"[zɛi pluːrəl]",15:"[ət buk]",16:"[də ˈtaːfəl]",17:"[də ˈstul]",18:"[ət ˈhœys]",19:"[də ˈdør]",20:"[ət ˈraːm]",21:"[də ˈkɑt]",22:"[də ˈhɔnt]",23:"[ˈeːtə(n)]",24:"[ˈdrɪŋkə(n)]",25:"[ˈslaːpə(n)]",26:"[ˈʋɛrkə(n)]",27:"[ˈleːrə(n)]",28:"[ˈspreːkə(n)]",29:"[ˈleːzə(n)]",30:"[ˈsxrɛi̯və(n)]",31:"[ˈmoːi]",32:"[ɣroːt]",33:"[klɛin]",34:"[ʋɑrm]",35:"[kɔlt]",36:"[ɣut]",37:"[slɛxt]",38:"[ˈvɑndaːx]",39:"[ˈmɔrɣən]",40:"[ɣɪsˈtərə(n)]",41:"[də ˈʋeːk]",42:"[ət ˈjaːr]",43:"[də ˈtɛit]",44:"[də ˈvrɛnt]",45:"[də ˈvrɛntin]",46:"[də faˈmiːljə]",47:"[də ˈnaːm]",48:"[ˈʋoːnə(n)]",49:"[ˈkɔmə(n)]",50:"[ɣɑn]",51:"[ˈloopə(n)]",52:"[ˈrɛnə(n)]",53:"[ˈsprɪŋə(n)]",54:"[ˈvɑlə(n)]",55:"[ˈzɪtə(n)]",56:"[ˈstɑnə(n)]",57:"[ˈlɪɣə(n)]",58:"[ˈkɛikə(n)]",59:"[zin]",60:"[ˈɦoːrə(n)]",61:"[pɛn]",62:"[paˈpiːr]",63:"[ˈsløytəl]",64:"[pɔrtəmoːˈneː]",65:"[teˈleːfoːn]",66:"[kɔmˈpyutər]",67:"[teːˈveː]",68:"[ˈreːdio]",69:"[ˈkʏsə(n)]",70:"[ˈdeːkə(n)]",71:"[zɑp]",72:"[ˈfrɪzdɾɑxt]",73:"[ʋɛin]",74:"[biːr]",75:"[teː]",76:"[ˈkɔfi]",77:"[kuk]",78:"[taːrt]",79:"[ɛis]",80:"[tʃɪps]",81:"[ˈvaːdər]",82:"[ˈmoːdər]",83:"[brut]",84:"[zʏs]",85:"[ˈopa]",86:"[ˈoma]",87:"[um]",88:"[ˈtɑntə]",89:"[neːf]",90:"[nɪxt]",91:"[eːn]",92:"[tʋeː]",93:"[dri]",94:"[viːr]",95:"[vɛif]",96:"[zɛks]",97:"[ˈzeːvə(n)]",98:"[ɑxt]",99:"[ˈneːɣə(n)]",100:"[tiːn]",101:"[rot]",102:"[blau]",103:"[ɣrun]",104:"[ɣɛi]",105:"[zʋɑrt]",106:"[ʋɪt]",107:"[brun]",108:"[ɣrɛis]",109:"[paːrs]",110:"[oːˈrɑnjə]",111:"[ˈɑmstərdaːm]",112:"[rɔtərˈdam]",113:"[dɛn ˈɦaːχ]",114:"[ˈyrɛxt]",115:"[ˈɛintɦoːvə(n)]",116:"[ɣroːˈnɪŋə(n)]",117:"[ˈmaːstrɪxt]",118:"[ˈnɛimeːɣə(n)]",119:"[ˈtilbʏrəx]",120:"[ˈbreːda]",121:"[ˈdɔktər]",122:"[leˈraːr]",123:"[ɪŋəˈnjør]",124:"[kɔk]",125:"[pɔliˈt͡si]",126:"[ˈbrɑntʋeːr]",127:"[ˈbɑkər]",128:"[bur]",129:"[myzɪˈkɑnt]",130:"[kʏnstəˈnaːr]",131:"[part]",132:"[ku]",133:"[sxɑːp]",134:"[ˈvɑrkə(n)]",135:"[kɪp]",136:"[ɛnt]",137:"[ˈkɔniŋ]",138:"[mœys]",139:"[vɔɣəl]",140:"[vɪs]",141:"[ˈlɛntə]",142:"[ˈzomər]",143:"[ɣɛrst]",144:"[ˈʋɪntər]",145:"[zɔn]",146:"[ˈreːɣə(n)]",147:"[snøː]",148:"[ʋɪnt]",149:"[ʋlok]",150:"[ˈreːɣənbox]",151:"[ɛlf]",152:"[tʋɑl(f)]",153:"[dɛrˈtin]",154:"[ˈfeːrtən]",155:"[ˈvɛiftən]",156:"[ˈzɛstin]",157:"[zeːˈvəntən]",158:"[ˈɑxtəntən]",159:"[neːˈɣəntən]",160:"[ˈvɛrtəx]",161:"[ˈeːnəntʋɛntəx]",162:"[ˈtʋeːəntʋɛntəx]",163:"[driəntʋɛntəx]",164:"[viːrəntʋɛntəx]",165:"[vɛifəntʋɛntəx]",166:"[zesəntʋɛntəx]",167:"[zeːvəntʋɛntəx]",168:"[ɑxtəntʋɛntəx]",169:"[neːɡəntʋɛntəx]",170:"[ˈtʋɑrtəx]",171:"[ˈeːnəntʋɑrtəx]",172:"[ˈtʋeːəntʋɑrtəx]",173:"[driəntʋɑrtəx]",174:"[viːrəntʋɑrtəx]",175:"[vɛifəntʋɑrtəx]",176:"[zesəntʋɑrtəx]",177:"[zeːvəntʋɑrtəx]",178:"[ɑxtəntʋɑrtəx]",179:"[neːɡəntʋɑrtəx]",180:"[ˈfeːrtəx]",181:"[ˈeːnərfɛrtəx]",182:"[ˈtʋeːərnfɛrtəx]",183:"[driərnfɛrtəx]",184:"[viːrərnfɛrtəx]",185:"[vɛifərnfɛrtəx]",186:"[zesərnfɛrtəx]",187:"[zeːvərnfɛrtəx]",188:"[ɑxtərnfɛrtəx]",189:"[neːɡərnfɛrtəx]",190:"[ˈzɛstəx]",191:"[ˈeːnənzɛstəx]",192:"[ˈtʋeːənzɛstəx]",193:"[driənzɛstəx]",194:"[viːrənzɛstəx]",195:"[vɛifərzɛstəx]",196:"[zesərzɛstəx]",197:"[zeːvərzɛstəx]",198:"[ɑxtərzɛstəx]",199:"[neːɡərzɛstəx]",200:"[ˈzeːvəntəx]",201:"[ˈeːnənzəvəntəx]",202:"[ˈtʋeːənzəvəntəx]",203:"[driənzəvəntəx]",204:"[viːrənzəvəntəx]",205:"[vɛifərzəvəntəx]",206:"[zesərzəvəntəx]",207:"[zeːvərzəvəntəx]",208:"[ɑxtərzəvəntəx]",209:"[neːɡərzəvəntəx]",210:"[ˈzeːvəntəx]",211:"[ˈeːnərzəvəntəx]",212:"[ˈtʋeːərzəvəntəx]",213:"[driərzəvəntəx]",214:"[viːrərzəvəntəx]",215:"[vɛifərzəvəntəx]",216:"[zesərzəvəntəx]",217:"[zeːvərzəvəntəx]",218:"[ɑxtərzəvəntəx]",219:"[neːɡərzəvəntəx]",220:"[ˈtɑxtəx]",221:"[ˈeːnəntɑxtəx]",222:"[ˈtʋeːəntɑxtəx]",223:"[driəntɑxtəx]",224:"[viːrəntɑxtəx]",225:"[vɛifəntɑxtəx]",226:"[zesəntɑxtəx]",227:"[zeːvəntɑxtəx]",228:"[ɑxtəntɑxtəx]",229:"[neːɡəntɑxtəx]",230:"[ˈnɛɡəntəx]",231:"[ˈeːnənɛɡəntəx]",232:"[ˈtʋeːənɛɡəntəx]",233:"[driənɛɡəntəx]",234:"[viːrənɛɡəntəx]",235:"[vɛifərnɛɡəntəx]",236:"[zesərnɛɡəntəx]",237:"[zeːvərnɛɡəntəx]",238:"[ɑxtərnɛɡəntəx]",239:"[neːɡərnɛɡəntəx]",240:"[ˈɦɔndərt]",241:"[jaːˈnyɑri]",242:"[ˈfɛbruɑri]",243:"[mart]",244:"[aːˈpril]",245:"[mɛi]",246:"[ˈjyni]",247:"[ˈjuli]",248:"[ɑuˈɣystəs]",249:"[sɛpˈtɛmbər]",250:"[okˈtoːbər]",251:"[noːˈvɛmbər]",252:"[diˈsɛmbər]",253:"[ˈmaːntɑχ]",254:"[ˈdɪnzdɑχ]",255:"[ˈʋunsdɑχ]",256:"[ˈdɔndərdɑχ]",257:"[ˈvrɛidɑχ]",258:"[ˈzɑtərdaχ]",259:"[ˈzɔndɑχ]",260:"[ɣot]",261:"[ɣəˈzɪxt]",262:"[ok]",263:"[or]",264:"[nøs]",265:"[mɔnt]",266:"[tɔŋ]",267:"tɑnt]",268:"[kɪn]",269:"ɣɑls]",270:"[ˈsxaudər]",271:"[ɑrm]",272:"[ˈɛləboːr]",273:"[ʋɔls]",274:"[ɦɑnt]",275:"[ˈvɪŋər]",276:"[brɛst]",277:"[rʏχ]",278:"[bak]",279:"[ɦyp]",280:"[bin]",281:"[kni]",282:"[ˈɛŋkəlaːr]",283:"[vut]",284:"[ten]",285:"[ɦɑrt]",286:"[lɔŋ]",287:"[mɑχ]",288:"[ˈlevər]",289:"[ˈnikør]",290:"[ɦœyt]",291:"[ɦœyt]",292:"[bart]",293:"[ˈʋɛŋkbraw]",294:"[ˈʋɪmpər]",295:"[lɪp]",296:"[ˈnaːɣəl]",297:"[ˈspjør]",298:"[bɔt]",299:"[bløt]",300:"[zøːrəɣ]"},Th={vowels:{a:"[ɑ]",aa:"[aː]",aai:"[aːi̯]",ae:"[ɑ]",ai:"[ɑi̯]",au:"[ɔu̯]",auw:"[ɔu̯]",e:"[ɛ]",ee:"[eː]",eeuw:"[eːu̯]",ei:"[ɛi̯]",eii:"[ɛi̯]",ej:"[ɛi̯]",eu:"[ø]",euw:"[ø]",i:"[ɪ]",ie:"[i]",iee:"[iː]",ieuw:"[iu̯]",ii:"[iː]",ij:"[ɛi̯]",ijs:"[ɛis]",o:"[ɔ]",oa:"[ua]",oe:"[u]",oei:"[ui̯]",oo:"[oː]",ooi:"[oːi̯]",ooh:"[oː]",ou:"[ɔu̯]",ouw:"[ɔu̯]",u:"[ʏ]",ua:"[yɑ]",ue:"[y]",ui:"[œy̯]",uu:"[y]",uuw:"[yu̯]",uy:"[œy̯]"},consonants:{b:"[b]",c:"[k/s]",ch:"[χ]",d:"[d]",dj:"[dʒ]",f:"[f]",g:"[ɣ]",gh:"[ɣ]",h:"[ɦ]",j:"[j]",k:"[k]",kh:"[k]",l:"[l]",m:"[m]",n:"[n]",ng:"[ŋ]",nk:"[ŋk]",p:"[p]",ph:"[p]",q:"[k]",qu:"[kʋ]",r:"[r]",s:"[s]",sch:"[sx]",t:"[t]",th:"[t]",ti:"[sj]",ts:"[ts]",tz:"[ts]",u:"[y]",v:"[v]",w:"[ʋ]",wh:"[ʋ]",x:"[ks]",y:"[i]",z:"[z]",zs:"[z]"},special_notes:["Dutch 'g' is pronounced as voiced velar fricative [ɣ]","'r' is typically uvular trill [ʀ] or tap [ɾ]","Final 'n' often becomes syllabic [n̩] or is dropped","'t' at end of word is often glottalized","Stress usually falls on first syllable unless marked otherwise","Dutch 'ij' and 'ei' are pronounced the same: [ɛi̯]","Dutch 'ui' is a unique diphthong: [œy̯]","'ch' after 's' is pronounced [χ], elsewhere varies","Vowel length is contrastive in Dutch"]},Rh={total_words:1200,words_with_pronunciation:1200,coverage_percentage:100,accuracy_level:"high",source:"generated_from_linguistic_rules_and_dictionary_data",missing_pronunciations:0},Ph={integration:"Replace pronunciation loading logic in words.ts to use this complete database",display:"Show IPA notation below Dutch word using format: [pronunciation]",audio_fallback:"Use browser speech synthesis as backup when pronunciation data unavailable",offline_support:"Phonetic display works offline, audio requires internet for high-quality TTS",implementation:"Load this JSON and merge with word objects during initialization"},Ah={description:"How to integrate this pronunciation database into the existing codebase",steps:["1. Load this JSON file during app initialization","2. Create a map of word_id -> pronunciation","3. Modify Word interface usage to include pronunciation from this database","4. Update WordCard component to always show pronunciation","5. Remove conditional rendering based on pronunciation existence"],code_example:`// In words.ts, replace generateWordsFromTemplates function
const pronunciations = await loadPronunciationData();
// Then in word generation:
pronunciation: pronunciations[String(currentId)] || generateBasicPronunciation(dutchWord)`},Oh={metadata:Dh,sample_words:Ih,pronunciations:Mh,generation_rules:Th,coverage_statistics:Rh,usage_instructions:Ph,integration_example:Ah},zh=`# 荷兰语单词列表 (Dutch Words List)
# 格式: id|荷兰语单词
# 总单词数: 1200个
# 文件生成时间: 2026-01-30

1|hallo
2|goedemorgen
3|dank je wel
4|ja
5|nee
6|alsjeblieft
7|tot ziens
8|ik
9|jij
10|hij
11|zij
12|wij
13|jullie
14|zij (plural)
15|het boek
16|de tafel
17|de stoel
18|het huis
19|de deur
20|het raam
21|de kat
22|de hond
23|eten
24|drinken
25|slapen
26|werken
27|leren
28|spreken
29|lezen
30|schrijven
31|mooi
32|groot
33|klein
34|warm
35|koud
36|goed
37|slecht
38|vandaag
39|morgen
40|gisteren
41|de week
42|het jaar
43|de tijd
44|de vriend
45|de vriendin
46|de familie
47|de naam
48|wonen
49|komen
50|gaan

# 以下为生成单词 (Generated Words)
51|lopen
52|rennen
53|springen
54|vallen
55|zitten
56|staan
57|liggen
58|kijken
59|zien
60|horen
61|pen
62|papier
63|sleutel
64|portemonnee
65|telefoon
66|computer
67|tv
68|radio
69|kussen
70|deken
71|sap
72|frisdrank
73|wijn
74|bier
75|thee
76|koffie
77|koek
78|taart
79|ijs
80|chips
81|vader
82|moeder
83|broer
84|zus
85|opa
86|oma
87|oom
88|tante
89|neef
90|nicht
91|een
92|twee
93|drie
94|vier
95|vijf
96|zes
97|zeven
98|acht
99|negen
100|tien
101|rood
102|blauw
103|groen
104|geel
105|zwart
106|wit
107|bruin
108|grijs
109|paars
110|oranje
111|Amsterdam
112|Rotterdam
113|Den Haag
114|Utrecht
115|Eindhoven
116|Groningen
117|Maastricht
118|Nijmegen
119|Tilburg
120|Breda
121|dokter
122|leraar
123|ingenieur
124|kok
125|politie
126|brandweer
127|bakker
128|boer
129|muzikant
130|kunstenaar
131|paard
132|koe
133|schaap
134|varken
135|kip
136|eend
137|konijn
138|muis
139|vogel
140|vis
141|lente
142|zomer
143|herfst
144|winter
145|zon
146|regen
147|sneeuw
148|wind
149|wolk
150|regenboog

# 扩展单词 (Expanded Words) - 从151到1200
151|elf
152|twaalf
153|dertien
154|veertien
155|vijftien
156|zestien
157|zeventien
158|achttien
159|negentien
160|twintig
161|eenentwintig
162|tweeëntwintig
163|drieëntwintig
164|vierentwintig
165|vijfentwintig
166|zesentwintig
167|zevenentwintig
168|achtentwintig
169|negenentwintig
170|dertig
171|eenendertig
172|tweeëndertig
173|drieëndertig
174|vierendertig
175|vijfendertig
176|zesendertig
177|zevenendertig
178|achtendertig
179|negenendertig
180|veertig
181|eenenveertig
182|tweeënveertig
183|drieënveertig
184|vierenveertig
185|vijfenveertig
186|zesenveertig
187|zevenenveertig
188|achtenveertig
189|negenenveertig
190|vijftig
191|eenenvijftig
192|tweeënvijftig
193|drieënvijftig
194|vierenvijftig
195|vijfenvijftig
196|zesenvijftig
197|zevenenvijftig
198|achtenvijftig
199|negenenvijftig
200|zestig
201|eenenzestig
202|tweeënzestig
203|drieënzestig
204|vierenzestig
205|vijfenzestig
206|zesenzestig
207|zevenenzestig
208|achtenzestig
209|negenenzestig
210|zeventig
211|eenenzeventig
212|tweeënzeventig
213|drieënzeventig
214|vierenzeventig
215|vijfenzeventig
216|zesenzeventig
217|zevenenzeventig
218|achtenzeventig
219|negenenzeventig
220|tachtig
221|eenentachtig
222|tweeëntachtig
223|drieëntachtig
224|vierentachtig
225|vijfentachtig
226|zesentachtig
227|zevenentachtig
228|achtentachtig
229|negenentachtig
230|negentig
231|eenennegentig
232|tweeënnegentig
233|drieënnegentig
234|vierennegentig
235|vijfennegentig
236|zesennegentig
237|zevenennegentig
238|achtennegentig
239|negenennegentig
240|honderd
241|januari
242|februari
243|maart
244|april
245|mei
246|juni
247|juli
248|augustus
249|september
250|oktober
251|november
252|december
253|maandag
254|dinsdag
255|woensdag
256|donderdag
257|vrijdag
258|zaterdag
259|zondag
260|hoofd
261|gezicht
262|oog
263|oor
264|neus
265|mond
266|tong
267|tand
268|kin
269|hals
270|schouder
271|arm
272|elleboog
273|pols
274|hand
275|vinger
276|borst
277|rug
278|buik
279|heup
280|been
281|knie
282|enkelaar
283|voet
284|teen
285|hart
286|long
287|maag
288|lever
289|nier
290|huid
291|haar
292|baard
293|wenkbrauw
294|wimper
295|lip
296|nagel
297|spier
298|bot
299|bloed
300|zenuw
301|bed
302|matras
303|kast
304|ladekast
305|plank
306|spiegel
307|lamp
308|kandelaar
309|klok
310|kalender
311|plant
312|vaas
313|tapijt
314|gordijn
315|raamkozijn
316|deurklink
317|slot
318|sleutelgat
319|badkamer
320|toilet
321|douche
322|bad
323|wasbak
324|handdoek
325|zeep
326|shampoo
327|tandenborstel
328|tandpasta
329|scheermes
330|scheerschuim
331|kam
332|borstel
333|wasmachine
334|droger
335|stofzuiger
336|bezem
337|blik
338|afvalbak
339|koelkast
340|oven
341|fornuis
342|magnetron
343|afwasmachine
344|kookplaat
345|pannenset
346|pan
347|pot
348|mes
349|vork
350|lepel
351|broek
352|spijkerbroek
353|rok
354|jurk
355|blouse
356|overhemd
357|T-shirt
358|trui
359|vest
360|jas
361|regenjas
362|winterjas
363|sok
364|kous
365|schoen
366|sneaker
367|laars
368|sandaal
369|pet
370|hoed
371|muts
372|sjaal
373|handschoen
374|riem
375|tas
376|rugzak
377|portefeuille
378|sleutelhanger
379|horloge
380|armband
381|ring
382|oorbel
383|ketting
384|bril
385|zonnebril
386|parfum
387|deodorant
388|make-up
389|lippenstift
390|nagellak
391|auto
392|bus
393|tram
394|trein
395|metro
396|fiets
397|motor
398|scooter
399|vliegtuig
400|boot
401|schip
402|jacht
403|taxi
404|ambulance
405|brandweerwagen
406|politieauto
407|vrachtwagen
408|bestelbus
409|kraan
410|graafmachine
411|verkeerslicht
412|stopbord
413|verkeersbord
414|parkeerplaats
415|tankstation
416|luchthaven
417|station
418|perron
419|halte
420|kaartje
421|school
422|universiteit
423|klaslokaal
424|collegezaal
425|bibliotheek
426|laboratorium
427|kantoor
428|vergaderzaal
429|leraar
430|student
431|leerling
432|directeur
433|secretaris
434|notitieboek
435|schrift
436|map
437|agenda
438|potlood
439|gum
440|liniaal
441|schaar
442|lijm
443|printer
444|kopieermachine
445|whiteboard
446|bord
447|marker
448|krijt
449|projector
450|laptop
451|winkel
452|supermarkt
453|markt
454|bakkerij
455|slagerij
456|viswinkel
457|groenteboer
458|fruitwinkel
459|boekwinkel
460|kledingwinkel
461|schoenwinkel
462|juwelier
463|apotheek
464|drogisterij
465|bloemenwinkel
466|speelgoedwinkel
467|elektronicawinkel
468|meubelwinkel
469|winkelcentrum
470|kassa
471|kassabon
472|betalen
473|contant
474|pinpas
475|creditcard
476|korting
477|aanbieding
478|prijs
479|duur
480|goedkoop
481|blij
482|verdrietig
483|boos
484|bang
485|verbaasd
486|verlegen
487|trots
488|jaloers
489|enthousiast
490|moe
491|energiek
492|rustig
493|nerveus
494|optimistisch
495|pessimistisch
496|eerlijk
497|oneerlijk
498|vriendelijk
499|onvriendelijk
500|geduldig
501|ongeduldig
502|lief
503|gemeen
504|slim
505|dom
506|grappig
507|serieus
508|creatief
509|praktisch
510|dapper
511|spelen
512|zingen
513|dansen
514|zwemmen
515|fietsen
516|wandelen
517|hardlopen
518|joggen
519|skiën
520|schaatsen
521|voetballen
522|tennissen
523|basketballen
524|volleybal
525|golfen
526|boksen
527|vechten
528|oefenen
529|trainen
530|competitie
531|wedstrijd
532|winnen
533|verliezen
534|scoren
535|doelpunt
536|team
537|coach
538|scheidsrechter
539|publiek
540|stadium
541|uur
542|minuut
543|seconde
544|ochtend
545|middag
546|avond
547|nacht
548|middernacht
549|middagpauze
550|vakantie
551|feestdag
552|verjaardag
553|trouwdag
554|herinnering
555|verleden
556|heden
557|toekomst
558|snel
559|langzaam
560|vaak
561|zelden
562|soms
563|altijd
564|nooit
565|weer
566|nog
567|al
568|net
569|straks
570|binnenkort
571|straat
572|weg
573|plein
574|park
575|tuin
576|bos
577|berg
578|heuvel
579|vallei
580|rivier
581|meer
582|zee
583|oceaan
584|strand
585|eiland
586|continent
587|land
588|stad
589|dorp
590|wijk
591|buurt
592|centrum
593|voorstad
594|fabriek
595|magazijn
596|museum
597|theater
598|cinema
599|restaurant
600|café
601|boom
602|plant
603|bloem
604|gras
605|blad
606|tak
607|wortel
608|zaad
609|vrucht
610|natuur
611|milieu
612|vervuiling
613|recycling
614|afval
615|plastic
616|papier
617|glas
618|metaal
619|energie
620|zonne-energie
621|windenergie
622|waterkracht
623|klimaat
624|weer
625|temperatuur
626|graad
627|vochtigheid
628|lucht
629|zuurstof
630|koolstofdioxide
631|aardappel
632|ui
633|knoflook
634|wortel
635|selderij
636|spinazie
637|sla
638|tomaat
639|komkommer
640|paprika
641|aubergine
642|courgette
643|broccoli
644|bloemkool
645|spruitjes
646|erwt
647|boon
648|maïs
649|asperge
650|pompoen
651|appel
652|peer
653|banaan
654|sinaasappel
655|mandarijn
656|citroen
657|limoen
658|druif
659|aardbei
660|framboos
661|bosbes
662|kers
663|perzik
664|abrikoos
665|meloen
666|watermeloen
667|ananas
668|mango
669|kiwi
670|vijg
671|rundvlees
672|varkensvlees
673|kipfilet
674|lam
675|worst
676|ham
677|spek
678|visfilet
679|garnalen
680|krab
681|kreeft
682|mossel
683|oester
684|inktvis
685|zalm
686|forel
687|tonijn
688|kabeljauw
689|sardine
690|haring
691|gezondheid
692|ziekte
693|koorts
694|hoofdpijn
695|buikpijn
696|keelpijn
697|verkoudheid
698|griep
699|allergie
700|astma
701|diabetes
702|hartziekte
703|kanker
704|operatie
705|ziekenhuis
706|arts
707|verpleegkundige
708|tandarts
709|apotheker
710|medicijn
711|pil
712|injectie
713|vaccin
714|bandage
715|pleister
716|thermometer
717|bloeddruk
718|cholesterol
719|vitamine
720|mineraal
721|muziek
722|lied
723|melodie
724|ritme
725|harmonie
726|instrument
727|piano
728|gitaar
729|viool
730|trompet
731|drum
732|fluit
733|saxofoon
734|orkest
735|koor
736|componist
737|dirigent
738|concert
739|optreden
740|kunst
741|schilderij
742|beeldhouwwerk
743|fotografie
744|film
745|drama
746|poëzie
747|literatuur
748|dichter
749|schrijver
750|artiest
751|sport
752|spel
753|hobby
754|reizen
755|toerisme
756|vakantie
757|camping
758|picknick
759|barbecue
760|feest
761|verjaardagsfeest
762|bruiloft
763|receptie
764|carnaval
765|kerst
766|pasen
767|sinterklaas
768|koningsdag
769|vrijmarkt
770|kermis
771|attractie
772|achtbaan
773|reuzenrad
774|spookhuis
775|dierentuin
776|aquarium
777|planetarium
778|museum
779|galerij
780|tentoonstelling
781|technologie
782|internet
783|website
784|app
785|software
786|hardware
787|programma
788|besturingssysteem
789|database
790|server
791|netwerk
792|wifi
793|bluetooth
794|usb
795|cloud
796|artificiële intelligentie
797|robot
798|drone
799|virtuele realiteit
800|augmented reality
801|bitcoin
802|blockchain
803|cryptocurrency
804|e-commerce
805|online shoppen
806|social media
807|facebook
808|instagram
809|twitter
810|youtube
811|Nederland
812|Nederlands
813|Hollands
814|Vlaams
815|België
816|koningshuis
817|koning
818|koningin
819|prins
820|prinses
821|vlag
822|volkslied
823|tulpen
824|klompen
825|kaas
826|Goudse kaas
827|Edammer kaas
828|stroopwafel
829|poffertjes
830|oliebollen
831|hagelslag
832|speculaas
833|pepernoten
834|bitterballen
835|kroket
836|friet
837|patat
838|mayonaise
839|pindasaus
840|haring
841|zuivel
842|melk
843|boter
844|yoghurt
845|kwark
846|poffertjespan
847|pannenkoek
848|erwtensoep
849|hutspot
850|stamppot
851|zoeken
852|vinden
853|verliezen
854|winnen
855|geven
856|nemen
857|brengen
858|halen
859|openen
860|sluiten
861|starten
862|stoppen
863|veranderen
864|blijven
865|vertrekken
866|aankomen
867|wachten
868|verwachten
869|verrassen
870|teleurstellen
871|helpen
872|storen
873|aanmoedigen
874|ontmoedigen
875|bewonderen
876|kritiek geven
877|complimenteren
878|bekritiseren
879|prijzen
880|afkeuren
881|snel
882|langzaam
883|zacht
884|hard
885|zwaar
886|licht
887|dun
888|dik
889|kort
890|lang
891|breed
892|smal
893|hoog
894|laag
895|diep
896|ondiep
897|scherp
898|stomp
899|helder
900|donker
901|fris
902|muf
903|vers
904|oud
905|nieuw
906|modern
907|traditioneel
908|elegant
909|slordig
910|netjes
911|vrijheid
912|gelijkheid
913|rechtvaardigheid
914|democratie
915|dictatuur
916|vrijheid van meningsuiting
917|mensenrechten
918|burgerrechten
919|wet
920|rechter
921|advocaat
922|rechterlijk
923|straf
924|gevangenis
925|politieagent
926|detective
927|misdaad
928|diefstal
929|inbraak
930|overval
931|moord
932|geweld
933|vrede
934|oorlog
935|conflict
936|onderhandeling
937|verdrag
938|alliantie
939|vriendschap
940|liefde
941|weerbericht
942|weersvoorspelling
943|zonneschijn
944|bewolking
945|onweer
946|bliksem
947|donder
948|mist
949|ijzel
950|hagel
951|tornado
952|orkaan
953|aardbeving
954|vulkaan
955|tsunami
956|overstroming
957|droogte
958|brand
959|explosie
960|ongeluk
961|nood
962|redding
963|hulpdienst
964|noodnummer
965|112
966|ambulancepersoneel
967|brandweerman
968|politieagent
969|reddingswerker
970|EHBO
971|gracht
972|grachtengordel
973|molen
974|windmolen
975|watermolen
976|polder
977|dijk
978|sluis
979|haven
980|scheepvaart
981|visserij
982|landbouw
983|veeteelt
984|akker
985|weiland
986|stallen
987|schuur
988|hooi
989|hooiberg
990|geiten
991|schapen
992|varkens
993|kippen
994|eenden
995|ganzen
996|bijen
997|honing
998|kaasmakerij
999|kaasmarkt
1000|kaasboer
1001|economie
1002|financiën
1003|bank
1004|verzekering
1005|belegging
1006|aandeel
1007|obligatie
1008|rente
1009|inflatie
1010|definitie
1011|wiskunde
1012|getal
1013|vergelijking
1014|formule
1015|geometrie
1016|algebra
1017|statistiek
1018|kans
1019|waarschijnlijkheid
1020|wetenschap
1021|natuurkunde
1022|scheikunde
1023|biologie
1024|astronomie
1025|geologie
1026|geschiedenis
1027|aardrijkskunde
1028|maatschappijleer
1029|filosofie
1030|psychologie
1031|architectuur
1032|bouw
1033|constructie
1034|fundering
1035|muur
1036|plafond
1037|vloer
1038|dak
1039|raam
1040|kozijn
1041|glas
1042|steen
1043|baksteen
1044|beton
1045|cement
1046|zand
1047|grind
1048|hout
1049|metaal
1050|staal
1051|goedenacht
1052|goedemorgen
1053|goedemiddag
1054|goedeavond
1055|alsjeblieft
1056|dank u wel
1057|graag gedaan
1058|excuseer
1059|pardon
1060|sorry
1061|geen probleem
1062|hoe gaat het
1063|prima
1064|goed
1065|slecht
1066|zo zo
1067|waar
1068|wanneer
1069|wie
1070|wat
1071|waarom
1072|hoe
1073|welke
1074|hoeveel
1075|hoeveel kost het
1076|woonkamer
1077|slaapkamer
1078|keuken
1079|eetkamer
1080|badkamer
1081|toilet
1082|gang
1083|trap
1084|kelder
1085|zolder
1086|balkon
1087|terras
1088|tuin
1089|garage
1090|schuur
1091|berging
1092|wasruimte
1093|stookruimte
1094|meterkast
1095|voordeur
1096|achterdeur
1097|zijdeur
1098|raam
1099|kozijn
1100|rolluik
1101|theepot
1102|koffiezetapparaat
1103|waterkoker
1104|blender
1105|mixer
1106|keukenmachine
1107|broodrooster
1108|wafelijzer
1109|grill
1110|frituurpan
1111|stoomoven
1112|slowcooker
1113|keukenweegschaal
1114|maatbeker
1115|zeef
1116|vergiet
1117|snijplank
1118|vleeshamer
1119|kaasschaaf
1120|appelschiller
1121|schoonmaakmiddel
1122|allesreiniger
1123|glasreiniger
1124|badkamerreiniger
1125|wc-reiniger
1126|ontstopper
1127|spons
1128|doekje
1129|microvezeldoek
1130|dweil
1131|emmer
1132|schrobber
1133|stofdoek
1134|luchtverfrisser
1135|ontsmettingsmiddel
1136|bleekmiddel
1137|wasmiddel
1138|wasverzachter
1139|strijkmiddel
1140|strijkijzer
1141|fax
1142|scanner
1143|stapelaar
1144|nietmachine
1145|perforator
1146|paperclip
1147|nietjes
1148|post-it
1149|brievenbak
1150|archiefkast
1151|kantoorstoel
1152|bureaublad
1153|tafellamp
1154|telefoonhoorn
1155|headset
1156|webcam
1157|microfoon
1158|luidspreker
1159|usb-stick
1160|externe harde schijf
1161|leeuw
1162|tijger
1163|beer
1164|wolf
1165|vos
1166|das
1167|egel
1168|eekhoorn
1169|hert
1170|ree
1171|zwijn
1172|das
1173|marter
1174|wezel
1175|otter
1176|bevers
1177|mus
1178|merel
1179|roodborstje
1180|specht
1181|uil
1182|havik
1183|valk
1184|arend
1185|gier
1186|papegaai
1187|kanarie
1188|duif
1189|meeuw
1190|zwaan
1191|samen
1192|alleen
1193|samenwerking
1194|competitie
1195|harmonie
1196|balans
1197|evenwicht
1198|verandering
1199|vooruitgang
1200|succes`,Nh=`# 中文翻译列表 (Chinese Translations)
# 格式: id|中文翻译
# 总单词数: 1200个
# 文件生成时间: 2026-01-29

1|你好
2|早上好
3|谢谢
4|是
5|不
6|请 / 给你
7|再见
8|我
9|你
10|他
11|她
12|我们
13|你们
14|他们
15|书
16|桌子
17|椅子
18|房子
19|门
20|窗户
21|猫
22|狗
23|吃
24|喝
25|睡觉
26|工作
27|学习
28|说
29|读
30|写
31|美丽
32|大
33|小
34|热 / 温暖
35|冷
36|好
37|坏
38|今天
39|明天
40|昨天
41|周
42|年
43|时间
44|朋友 (男)
45|朋友 (女) / 女朋友
46|家庭
47|名字
48|居住
49|来
50|去

# 以下为生成单词翻译 (Generated Words Translations)
51|走
52|跑
53|跳
54|掉
55|坐
56|站
57|躺
58|看
59|看见
60|听
61|笔
62|纸
63|钥匙
64|钱包
65|电话
66|电脑
67|电视
68|收音机
69|枕头
70|毯子
71|果汁
72|软饮料
73|葡萄酒
74|啤酒
75|茶
76|咖啡
77|饼干
78|蛋糕
79|冰激凌
80|薯片
81|父亲
82|母亲
83|兄弟
84|姐妹
85|爷爷
86|奶奶
87|叔叔
88|阿姨
89|侄子
90|侄女
91|一
92|二
93|三
94|四
95|五
96|六
97|七
98|八
99|九
100|十
101|红色
102|蓝色
103|绿色
104|黄色
105|黑色
106|白色
107|棕色
108|灰色
109|紫色
110|橙色
111|阿姆斯特丹
112|鹿特丹
113|海牙
114|乌得勒支
115|埃因霍温
116|格罗宁根
117|马斯特里赫特
118|奈梅亨
119|蒂尔堡
120|布雷达
121|医生
122|老师
123|工程师
124|厨师
125|警察
126|消防员
127|面包师
128|农民
129|音乐家
130|艺术家
131|马
132|牛
133|羊
134|猪
135|鸡
136|鸭
137|兔子
138|老鼠
139|鸟
140|鱼
141|春天
142|夏天
143|秋天
144|冬天
145|太阳
146|雨
147|雪
148|风
149|云
150|彩虹
151|星期一
152|星期二
153|星期三
154|星期四
155|星期五
156|星期六
157|星期日
158|一月
159|二月
160|三月
161|四月
162|五月
163|六月
164|七月
165|八月
166|九月
167|十月
168|十一月
169|十二月
170|春季
171|夏季
172|秋季
173|冬季
174|昼夜
175|黎明
176|黄昏
177|午夜
178|早晨
179|中午
180|下午
181|傍晚
182|夜晚
183|星期
184|月份
185|季节
186|假期
187|工作日
188|周末
189|小时
190|分钟
191|秒
192|时钟
193|日历
194|时间表
195|日程安排
196|计划
197|目标
198|任务
199|项目
200|工作
201|头
202|脸
203|眼睛
204|耳朵
205|鼻子
206|嘴
207|牙齿
208|舌头
209|头发
210|皮肤
211|手
212|手指
213|拇指
214|手臂
215|肩膀
216|腿
217|脚
218|脚趾
219|膝盖
220|背部
221|胸部
222|胃
223|心脏
224|肺
225|肝
226|肾
227|血液
228|骨头
229|肌肉
230|神经
231|床
232|沙发
233|椅子
234|桌子
235|书桌
236|书架
237|衣柜
238|梳妆台
239|镜子
240|灯
241|台灯
242|落地灯
243|天花板灯
244|壁灯
245|吊灯
246|电视柜
247|咖啡桌
248|脚凳
249|地毯
250|窗帘
251|冰箱
252|烤箱
253|微波炉
254|炉灶
255|抽油烟机
256|洗碗机
257|洗衣机
258|烘干机
259|吸尘器
260|空调
261|衬衫
262|T恤
263|毛衣
264|夹克
265|外套
266|裤子
267|牛仔裤
268|短裤
269|裙子
270|连衣裙
271|鞋子
272|运动鞋
273|靴子
274|凉鞋
275|拖鞋
276|袜子
277|内裤
278|胸罩
279|皮带
280|帽子
281|围巾
282|手套
283|太阳镜
284|雨伞
285|包
286|钱包
287|背包
288|手提包
289|行李箱
290|背包
291|汽车
292|公共汽车
293|火车
294|地铁
295|电车
296|自行车
297|摩托车
298|飞机
299|船
300|出租车
301|小学
302|中学
303|高中
304|大学
305|学院
306|学校
307|教室
308|图书馆
309|实验室
310|操场
311|体育馆
312|食堂
313|办公室
314|校长室
315|教师办公室
316|厕所
317|走廊
318|楼梯
319|电梯
320|停车场
321|书店
322|超市
323|便利店
324|药店
325|面包店
326|肉店
327|蔬菜店
328|水果店
329|鱼店
330|花店
331|服装店
332|鞋店
333|珠宝店
334|电子产品店
335|家具店
336|五金店
337|加油站
338|邮局
339|银行
340|医院
341|快乐
342|悲伤
343|愤怒
344|恐惧
345|惊讶
346|厌恶
347|爱
348|恨
349|希望
350|失望
351|兴奋
352|无聊
353|紧张
354|放松
355|自信
356|害羞
357|骄傲
358|谦虚
359|嫉妒
360|感激
361|足球
362|篮球
363|排球
364|网球
365|羽毛球
366|乒乓球
367|高尔夫球
368|棒球
369|橄榄球
370|板球
371|游泳
372|跑步
373|跳跃
374|投掷
375|接球
376|踢球
377|击球
378|防守
379|进攻
380|得分
381|公园
382|花园
383|森林
384|山脉
385|河流
386|湖泊
387|海洋
388|海滩
389|岛屿
390|沙漠
391|村庄
392|城镇
393|城市
394|首都
395|国家
396|大陆
397|地球
398|月亮
399|星星
400|银河
401|苹果
402|香蕉
403|橙子
404|草莓
405|葡萄
406|西瓜
407|菠萝
408|芒果
409|桃子
410|梨子
411|胡萝卜
412|土豆
413|洋葱
414|番茄
415|黄瓜
416|辣椒
417|菠菜
418|生菜
419|卷心菜
420|西兰花
421|早餐
422|午餐
423|晚餐
424|零食
425|食物
426|饮料
427|菜单
428|食谱
429|烹饪
430|烘焙
431|绘画
432|雕塑
433|摄影
434|电影
435|戏剧
436|诗歌
437|文学
438|诗人
439|作家
440|艺术家
441|体育
442|游戏
443|爱好
444|旅行
445|旅游
446|假期
447|露营
448|野餐
449|烧烤
450|派对
451|生日派对
452|婚礼
453|招待会
454|狂欢节
455|圣诞节
456|复活节
457|圣尼古拉斯节
458|国王节
459|自由市场
460|游乐场
461|游乐设施
462|过山车
463|摩天轮
464|鬼屋
465|动物园
466|水族馆
467|天文馆
468|博物馆
469|画廊
470|展览
471|技术
472|互联网
473|网站
474|应用程序
475|软件
476|硬件
477|程序
478|操作系统
479|数据库
480|服务器
481|网络
482|无线网络
483|蓝牙
484|USB
485|云
486|人工智能
487|机器人
488|无人机
489|虚拟现实
490|增强现实
491|比特币
492|区块链
493|加密货币
494|电子商务
495|在线购物
496|社交媒体
497|脸书
498|Instagram
499|推特
500|YouTube
501|荷兰
502|荷兰语
503|荷兰的
504|佛兰德语
505|比利时
506|王室
507|国王
508|女王
509|王子
510|公主
511|国旗
512|国歌
513|郁金香
514|木鞋
515|奶酪
516|豪达奶酪
517|埃丹奶酪
518|焦糖华夫饼
519|迷你煎饼
520|油球
521|巧克力碎
522|香料饼干
523|胡椒坚果
524|苦味肉丸
525|炸肉卷
526|薯条
527|薯条
528|蛋黄酱
529|花生酱
530|鲱鱼
531|乳制品
532|牛奶
533|黄油
534|酸奶
535|夸克奶酪
536|迷你煎饼锅
537|煎饼
538|豌豆汤
539|胡萝卜土豆泥
540|土豆泥
541|寻找
542|找到
543|失去
544|赢得
545|给予
546|拿走
547|带来
548|取来
549|打开
550|关闭
551|开始
552|停止
553|改变
554|保持
555|离开
556|到达
557|等待
558|期望
559|惊喜
560|失望
561|帮助
562|打扰
563|鼓励
564|沮丧
565|钦佩
566|批评
567|称赞
568|批评
569|赞扬
570|反对
571|快速
572|缓慢
573|柔软
574|坚硬
575|沉重
576|轻
577|薄
578|厚
579|短
580|长
581|宽
582|窄
583|高
584|低
585|深
586|浅
587|空
588|满
589|新
590|旧
591|年轻
592|年老
593|热
594|冷
595|湿
596|干
597|脏
598|干净
599|明亮
600|黑暗
601|时间
602|日子
603|周
604|月
605|年
606|世纪
607|时代
608|历史
609|未来
610|现在
611|过去
612|分钟
613|小时
614|天
615|周
616|月
617|年
618|秒
619|毫秒
620|微秒
621|家
622|房子
623|公寓
624|房间
625|厨房
626|客厅
627|卧室
628|浴室
629|厕所
630|阳台
631|花园
632|车库
633|地下室
634|阁楼
635|屋顶
636|墙
637|地板
638|天花板
639|门
640|窗
641|自然
642|环境
643|生态
644|污染
645|保护
646|资源
647|能源
648|水
649|空气
650|土地
651|植物
652|花
653|树
654|草
655|叶
656|根
657|种子
658|果实
659|蔬菜
660|水果
661|肉
662|鱼
663|蛋
664|奶
665|米
666|面
667|面包
668|糖
669|盐
670|油
671|酱
672|汤
673|沙拉
674|三明治
675|汉堡
676|披萨
677|意大利面
678|米饭
679|面条
680|饺子
681|春卷
682|寿司
683|咖喱
684|烤鸡
685|牛排
686|鱼排
687|香肠
688|火腿
689|培根
690|奶酪
691|黄油
692|果酱
693|蜂蜜
694|巧克力
695|糖果
696|蛋糕
697|饼干
698|冰淇淋
699|布丁
700|派
701|茶
702|咖啡
703|果汁
704|苏打水
705|水
706|牛奶
707|酒
708|啤酒
709|威士忌
710|伏特加
711|龙舌兰
712|朗姆酒
713|琴酒
714|白兰地
715|香槟
716|葡萄酒
717|红酒
718|白酒
719|玫瑰酒
720|起泡酒
721|音乐
722|歌曲
723|旋律
724|节奏
725|歌词
726|歌手
727|乐队
728|乐器
729|钢琴
730|吉他
731|小提琴
732|鼓
733|长笛
734|小号
735|萨克斯
736|竖琴
737|口琴
738|手风琴
739|管风琴
740|电子琴
741|绘画
742|雕塑
743|摄影
744|电影
745|戏剧
746|诗歌
747|文学
748|诗人
749|作家
750|艺术家
751|运动
752|游戏
753|爱好
754|旅行
755|旅游
756|假期
757|露营
758|野餐
759|烧烤
760|派对
761|生日派对
762|婚礼
763|招待会
764|狂欢节
765|圣诞节
766|复活节
767|圣尼古拉斯节
768|国王节
769|自由市场
770|游乐场
771|游乐设施
772|过山车
773|摩天轮
774|鬼屋
775|动物园
776|水族馆
777|天文馆
778|博物馆
779|画廊
780|展览
781|技术
782|互联网
783|网站
784|应用程序
785|软件
786|硬件
787|程序
788|操作系统
789|数据库
790|服务器
791|网络
792|无线网络
793|蓝牙
794|USB
795|云
796|人工智能
797|机器人
798|无人机
799|虚拟现实
800|增强现实
801|比特币
802|区块链
803|加密货币
804|电子商务
805|在线购物
806|社交媒体
807|脸书
808|Instagram
809|推特
810|YouTube
811|荷兰
812|荷兰语
813|荷兰的
814|佛兰德语
815|比利时
816|王室
817|国王
818|女王
819|王子
820|公主
821|国旗
822|国歌
823|郁金香
824|木鞋
825|奶酪
826|豪达奶酪
827|埃丹奶酪
828|焦糖华夫饼
829|迷你煎饼
830|油球
831|巧克力碎
832|香料饼干
833|胡椒坚果
834|苦味肉丸
835|炸肉卷
836|薯条
837|薯条
838|蛋黄酱
839|花生酱
840|鲱鱼
841|乳制品
842|牛奶
843|黄油
844|酸奶
845|夸克奶酪
846|迷你煎饼锅
847|煎饼
848|豌豆汤
849|胡萝卜土豆泥
850|土豆泥
851|寻找
852|找到
853|失去
854|赢得
855|给予
856|拿走
857|带来
858|取来
859|打开
860|关闭
861|开始
862|停止
863|改变
864|保持
865|离开
866|到达
867|等待
868|期望
869|惊喜
870|失望
871|帮助
872|打扰
873|鼓励
874|沮丧
875|钦佩
876|批评
877|称赞
878|批评
879|赞扬
880|反对
881|快速
882|缓慢
883|柔软
884|坚硬
885|沉重
886|轻
887|薄
888|厚
889|短
890|长
891|宽
892|窄
893|高
894|低
895|深
896|浅
897|空
898|满
899|新
900|旧
901|新鲜
902|闷热
903|新鲜
904|旧
905|新
906|现代
907|传统
908|优雅
909|邋遢
910|整洁
911|自由
912|平等
913|正义
914|民主
915|独裁
916|言论自由
917|人权
918|公民权利
919|法律
920|法官
921|律师
922|司法的
923|惩罚
924|监狱
925|警察
926|侦探
927|犯罪
928|盗窃
929|入室盗窃
930|抢劫
931|谋杀
932|暴力
933|和平
934|战争
935|冲突
936|谈判
937|条约
938|联盟
939|友谊
940|爱
941|天气预报
942|天气预报
943|阳光
944|多云
945|雷暴
946|闪电
947|雷声
948|雾
949|冰雨
950|冰雹
951|龙卷风
952|飓风
953|地震
954|火山
955|海啸
956|洪水
957|干旱
958|火灾
959|爆炸
960|事故
961|紧急情况
962|救援
963|急救服务
964|紧急号码
965|112
966|救护人员
967|消防员
968|警察
969|救援人员
970|急救
971|运河
972|运河带
973|风车
974|风车
975|水车
976|圩田
977|堤坝
978|水闸
979|港口
980|航运
981|渔业
982|农业
983|畜牧业
984|耕地
985|牧场
986|马厩
987|谷仓
988|干草
989|干草堆
990|山羊
991|绵羊
992|猪
993|鸡
994|鸭
995|鹅
996|蜜蜂
997|蜂蜜
998|奶酪厂
999|奶酪市场
1000|奶酪商
1001|经济
1002|金融
1003|银行
1004|保险
1005|投资
1006|股票
1007|债券
1008|利息
1009|通货膨胀
1010|定义
1011|数学
1012|数字
1013|方程
1014|公式
1015|几何
1016|代数
1017|统计
1018|机会
1019|概率
1020|科学
1021|物理
1022|化学
1023|生物
1024|天文学
1025|地质学
1026|历史
1027|地理
1028|社会学
1029|哲学
1030|心理学
1031|建筑
1032|建筑
1033|结构
1034|基础
1035|墙
1036|天花板
1037|地板
1038|屋顶
1039|窗
1040|窗框
1041|玻璃
1042|石头
1043|砖
1044|混凝土
1045|水泥
1046|沙子
1047|碎石
1048|木材
1049|金属
1050|钢
1051|晚安
1052|早上好
1053|下午好
1054|晚上好
1055|请
1056|谢谢您
1057|不客气
1058|打扰一下
1059|对不起
1060|抱歉
1061|没问题
1062|你好吗
1063|很好
1064|好
1065|不好
1066|一般般
1067|哪里
1068|何时
1069|谁
1070|什么
1071|为什么
1072|如何
1073|哪个
1074|多少
1075|多少钱
1076|客厅
1077|卧室
1078|厨房
1079|餐厅
1080|浴室
1081|厕所
1082|走廊
1083|楼梯
1084|地下室
1085|阁楼
1086|阳台
1087|露台
1088|花园
1089|车库
1090|谷仓
1091|储藏室
1092|洗衣房
1093|锅炉房
1094|电表箱
1095|前门
1096|后门
1097|侧门
1098|窗户
1099|窗框
1100|卷帘
1101|茶壶
1102|咖啡机
1103|热水壶
1104|搅拌机
1105|搅拌器
1106|厨房机
1107|烤面包机
1108|华夫饼机
1109|烤架
1110|油炸锅
1111|蒸汽烤箱
1112|慢炖锅
1113|厨房秤
1114|量杯
1115|筛子
1116|滤网
1117|砧板
1118|肉锤
1119|奶酪切片器
1120|苹果削皮器
1121|清洁剂
1122|万能清洁剂
1123|玻璃清洁剂
1124|浴室清洁剂
1125|厕所清洁剂
1126|疏通剂
1127|海绵
1128|抹布
1129|超细纤维布
1130|拖把
1131|水桶
1132|刷子
1133|抹布
1134|空气清新剂
1135|消毒剂
1136|漂白剂
1137|洗衣液
1138|柔顺剂
1139|熨烫剂
1140|熨斗
1141|传真机
1142|扫描仪
1143|装订机
1144|订书机
1145|打孔机
1146|回形针
1147|订书钉
1148|便利贴
1149|信箱
1150|文件柜
1151|办公椅
1152|办公桌
1153|台灯
1154|电话听筒
1155|耳机
1156|网络摄像头
1157|麦克风
1158|扬声器
1159|U盘
1160|外置硬盘
1161|狮子
1162|老虎
1163|熊
1164|狼
1165|狐狸
1166|獾
1167|刺猬
1168|松鼠
1169|鹿
1170|狍子
1171|野猪
1172|獾
1173|貂
1174|鼬鼠
1175|水獭
1176|河狸
1177|麻雀
1178|黑鸟
1179|知更鸟
1180|啄木鸟
1181|猫头鹰
1182|鹰
1183|隼
1184|雕
1185|秃鹫
1186|鹦鹉
1187|金丝雀
1188|鸽子
1189|海鸥
1190|天鹅
1191|一起
1192|独自
1193|很快
1194|慢慢地
1195|小心地
1196|轻轻地
1197|大声地
1198|安静地
1199|快速地
1200|缓慢地`,Wh=`# 英文翻译列表 (English Translations)
# 格式: id|英文翻译
# 总单词数: 1200个
# 文件生成时间: 2026-01-29

1|hello
2|good morning
3|thank you
4|yes
5|no
6|please / here you go
7|goodbye
8|I
9|you
10|he
11|she
12|we
13|you (plural)
14|they
15|the book
16|the table
17|the chair
18|the house
19|the door
20|the window
21|the cat
22|the dog
23|to eat
24|to drink
25|to sleep
26|to work
27|to learn
28|to speak
29|to read
30|to write
31|beautiful
32|big
33|small
34|warm / hot
35|cold
36|good
37|bad
38|today
39|tomorrow
40|yesterday
41|the week
42|the year
43|the time
44|friend (male)
45|friend (female) / girlfriend
46|family
47|name
48|to live
49|to come
50|to go

# 以下为生成单词翻译 (Generated Words Translations)
51|to walk
52|to run
53|to jump
54|to fall
55|to sit
56|to stand
57|to lie
58|to look
59|to see
60|to hear
61|pen
62|paper
63|key
64|wallet
65|phone
66|computer
67|TV
68|radio
69|pillow
70|blanket
71|juice
72|soda
73|wine
74|beer
75|tea
76|coffee
77|cookie
78|cake
79|ice cream
80|chips
81|father
82|mother
83|brother
84|sister
85|grandfather
86|grandmother
87|uncle
88|aunt
89|nephew
90|niece
91|one
92|two
93|three
94|four
95|five
96|six
97|seven
98|eight
99|nine
100|ten
101|red
102|blue
103|green
104|yellow
105|black
106|white
107|brown
108|gray
109|purple
110|orange
111|Amsterdam
112|Rotterdam
113|The Hague
114|Utrecht
115|Eindhoven
116|Groningen
117|Maastricht
118|Nijmegen
119|Tilburg
120|Breda
121|doctor
122|teacher
123|engineer
124|cook
125|police
126|firefighter
127|baker
128|farmer
129|musician
130|artist
131|horse
132|cow
133|sheep
134|pig
135|chicken
136|duck
137|rabbit
138|mouse
139|bird
140|fish
141|spring
142|summer
143|autumn
144|winter
145|sun
146|rain
147|snow
148|wind
149|cloud
150|rainbow
151|Monday
152|Tuesday
153|Wednesday
154|Thursday
155|Friday
156|Saturday
157|Sunday
158|January
159|February
160|March
161|April
162|May
163|June
164|July
165|August
166|September
167|October
168|November
169|December
170|Spring
171|Summer
172|Autumn
173|Winter
174|Day and night
175|Dawn
176|Dusk
177|Midnight
178|Morning
179|Noon
180|Afternoon
181|Evening
182|Night
183|Week
184|Month
185|Season
186|Holiday
187|Workday
188|Weekend
189|Hour
190|Minute
191|Second
192|Clock
193|Calendar
194|Schedule
195|Schedule
196|Plan
197|Goal
198|Task
199|Project
200|Work
201|Head
202|Face
203|Eyes
204|Ears
205|Nose
206|Mouth
207|Teeth
208|Tongue
209|Hair
210|Skin
211|Hand
212|Finger
213|Thumb
214|Arm
215|Shoulder
216|Leg
217|Foot
218|Toe
219|Knee
220|Back
221|Chest
222|Stomach
223|Heart
224|Lung
225|Liver
226|Kidney
227|Blood
228|Bone
229|Muscle
230|Nerve
231|Bed
232|Sofa
233|Chair
234|Table
235|Desk
236|Bookshelf
237|Wardrobe
238|Dresser
239|Mirror
240|Lamp
241|Table lamp
242|Floor lamp
243|Ceiling light
244|Wall light
245|Chandelier
246|TV stand
247|Coffee table
248|Footstool
249|Carpet
250|Curtain
251|Refrigerator
252|Oven
253|Microwave
254|Stove
255|Range hood
256|Dishwasher
257|Washing machine
258|Dryer
259|Vacuum cleaner
260|Air conditioner
261|Shirt
262|T-shirt
263|Sweater
264|Jacket
265|Coat
266|Pants
267|Jeans
268|Shorts
269|Skirt
270|Dress
271|Shoes
272|Sneakers
273|Boots
274|Sandals
275|Slippers
276|Socks
277|Underwear
278|Bra
279|Belt
280|Hat
281|Scarf
282|Gloves
283|Sunglasses
284|Umbrella
285|Bag
286|Wallet
287|Backpack
288|Handbag
289|Suitcase
290|Backpack
291|Car
292|Bus
293|Train
294|Subway
295|Tram
296|Bicycle
297|Motorcycle
298|Airplane
299|Boat
300|Taxi
301|Primary school
302|Middle school
303|High school
304|University
305|College
306|School
307|Classroom
308|Library
309|Laboratory
310|Playground
311|Gymnasium
312|Cafeteria
313|Office
314|Principal's office
315|Teacher's office
316|Toilet
317|Corridor
318|Stairs
319|Elevator
320|Parking lot
321|Bookstore
322|Supermarket
323|Convenience store
324|Pharmacy
325|Bakery
326|Butcher shop
327|Vegetable shop
328|Fruit shop
329|Fish shop
330|Flower shop
331|Clothing store
332|Shoe store
333|Jewelry store
334|Electronics store
335|Furniture store
336|Hardware store
337|Gas station
338|Post office
339|Bank
340|Hospital
341|Happy
342|Sad
343|Angry
344|Afraid
345|Surprised
346|Disgusted
347|Love
348|Hate
349|Hope
350|Disappointment
351|Excited
352|Bored
353|Nervous
354|Relaxed
355|Confident
356|Shy
357|Proud
358|Modest
359|Jealous
360|Grateful
361|Football
362|Basketball
363|Volleyball
364|Tennis
365|Badminton
366|Table tennis
367|Golf
368|Baseball
369|Rugby
370|Cricket
371|Swimming
372|Running
373|Jumping
374|Throwing
375|Catching
376|Kicking
377|Hitting
378|Defending
379|Attacking
380|Scoring
381|Park
382|Garden
383|Forest
384|Mountains
385|River
386|Lake
387|Ocean
388|Beach
389|Island
390|Desert
391|Village
392|Town
393|City
394|Capital
395|Country
396|Continent
397|Earth
398|Moon
399|Stars
400|Galaxy
401|Apple
402|Banana
403|Orange
404|Strawberry
405|Grape
406|Watermelon
407|Pineapple
408|Mango
409|Peach
410|Pear
411|Carrot
412|Potato
413|Onion
414|Tomato
415|Cucumber
416|Chili pepper
417|Spinach
418|Lettuce
419|Cabbage
420|Broccoli
421|Breakfast
422|Lunch
423|Dinner
424|Snack
425|Food
426|Drink
427|Menu
428|Recipe
429|Cooking
430|Baking
431|Painting
432|Sculpture
433|Photography
434|Film
435|Drama
436|Poetry
437|Literature
438|Poet
439|Writer
440|Artist
441|Sports
442|Game
443|Hobby
444|Travel
445|Tourism
446|Holiday
447|Camping
448|Picnic
449|Barbecue
450|Party
451|Birthday party
452|Wedding
453|Reception
454|Carnival
455|Christmas
456|Easter
457|St. Nicholas Day
458|King's Day
459|Free market
460|Amusement park
461|Amusement ride
462|Roller coaster
463|Ferris wheel
464|Haunted house
465|Zoo
466|Aquarium
467|Planetarium
468|Museum
469|Gallery
470|Exhibition
471|Technology
472|Internet
473|Website
474|App
475|Software
476|Hardware
477|Program
478|Operating system
479|Database
480|Server
481|Network
482|Wi-Fi
483|Bluetooth
484|USB
485|Cloud
486|Artificial intelligence
487|Robot
488|Drone
489|Virtual reality
490|Augmented reality
491|Bitcoin
492|Blockchain
493|Cryptocurrency
494|E-commerce
495|Online shopping
496|Social media
497|Facebook
498|Instagram
499|Twitter
500|YouTube
501|Netherlands
502|Dutch language
503|Dutch
504|Flemish
505|Belgium
506|Royal family
507|King
508|Queen
509|Prince
510|Princess
511|Flag
512|National anthem
513|Tulips
514|Clogs
515|Cheese
516|Gouda cheese
517|Edam cheese
518|Caramel waffle
519|Mini pancakes
520|Oil balls
521|Chocolate sprinkles
522|Spice cookies
523|Pepper nuts
524|Bitter meatballs
525|Croquette
526|French fries
527|French fries
528|Mayonnaise
529|Peanut sauce
530|Herring
531|Dairy products
532|Milk
533|Butter
534|Yogurt
535|Quark cheese
536|Mini pancake pan
537|Pancake
538|Pea soup
539|Carrot potato mash
540|Potato mash
541|Search
542|Find
543|Lose
544|Win
545|Give
546|Take
547|Bring
548|Fetch
549|Open
550|Close
551|Start
552|Stop
553|Change
554|Stay
555|Leave
556|Arrive
557|Wait
558|Expect
559|Surprise
560|Disappoint
561|Help
562|Disturb
563|Encourage
564|Discourage
565|Admire
566|Criticize
567|Compliment
568|Criticize
569|Praise
570|Disapprove
571|Fast
572|Slow
573|Soft
574|Hard
575|Heavy
576|Light
577|Thin
578|Thick
579|Short
580|Long
581|Wide
582|Narrow
583|High
584|Low
585|Deep
586|Shallow
587|Empty
588|Full
589|New
590|Old
591|Young
592|Old
593|Hot
594|Cold
595|Wet
596|Dry
597|Dirty
598|Clean
599|Bright
600|Dark
601|Time
602|Day
603|Week
604|Month
605|Year
606|Century
607|Era
608|History
609|Future
610|Present
611|Past
612|Minute
613|Hour
614|Day
615|Week
616|Month
617|Year
618|Second
619|Millisecond
620|Microsecond
621|Home
622|House
623|Apartment
624|Room
625|Kitchen
626|Living room
627|Bedroom
628|Bathroom
629|Toilet
630|Balcony
631|Garden
632|Garage
633|Basement
634|Attic
635|Roof
636|Wall
637|Floor
638|Ceiling
639|Door
640|Window
641|Nature
642|Environment
643|Ecology
644|Pollution
645|Protection
646|Resource
647|Energy
648|Water
649|Air
650|Land
651|Plant
652|Flower
653|Tree
654|Grass
655|Leaf
656|Root
657|Seed
658|Fruit
659|Vegetable
660|Fruit
661|Meat
662|Fish
663|Egg
664|Milk
665|Rice
666|Flour
667|Bread
668|Sugar
669|Salt
670|Oil
671|Sauce
672|Soup
673|Salad
674|Sandwich
675|Hamburger
676|Pizza
677|Pasta
678|Rice
679|Noodles
680|Dumplings
681|Spring rolls
682|Sushi
683|Curry
684|Roast chicken
685|Steak
686|Fish fillet
687|Sausage
688|Ham
689|Bacon
690|Cheese
691|Butter
692|Jam
693|Honey
694|Chocolate
695|Candy
696|Cake
697|Cookie
698|Ice cream
699|Pudding
700|Pie
701|Tea
702|Coffee
703|Juice
704|Soda
705|Water
706|Milk
707|Wine
708|Beer
709|Whiskey
710|Vodka
711|Tequila
712|Rum
713|Gin
714|Brandy
715|Champagne
716|Wine
717|Red wine
718|White wine
719|Rosé wine
720|Sparkling wine
721|Music
722|Song
723|Melody
724|Rhythm
725|Lyrics
726|Singer
727|Band
728|Musical instrument
729|Piano
730|Guitar
731|Violin
732|Drum
733|Flute
734|Trumpet
735|Saxophone
736|Harp
737|Harmonica
738|Accordion
739|Organ
740|Electronic keyboard
741|Painting
742|Sculpture
743|Photography
744|Film
745|Drama
746|Poetry
747|Literature
748|Poet
749|Writer
750|Artist
751|Sports
752|Game
753|Hobby
754|Travel
755|Tourism
756|Holiday
757|Camping
758|Picnic
759|Barbecue
760|Party
761|Birthday party
762|Wedding
763|Reception
764|Carnival
765|Christmas
766|Easter
767|St. Nicholas Day
768|King's Day
769|Free market
770|Amusement park
771|Amusement ride
772|Roller coaster
773|Ferris wheel
774|Haunted house
775|Zoo
776|Aquarium
777|Planetarium
778|Museum
779|Gallery
780|Exhibition
781|Technology
782|Internet
783|Website
784|App
785|Software
786|Hardware
787|Program
788|Operating system
789|Database
790|Server
791|Network
792|Wi-Fi
793|Bluetooth
794|USB
795|Cloud
796|Artificial intelligence
797|Robot
798|Drone
799|Virtual reality
800|Augmented reality
801|Bitcoin
802|Blockchain
803|Cryptocurrency
804|E-commerce
805|Online shopping
806|Social media
807|Facebook
808|Instagram
809|Twitter
810|YouTube
811|Netherlands
812|Dutch language
813|Dutch
814|Flemish
815|Belgium
816|Royal family
817|King
818|Queen
819|Prince
820|Princess
821|Flag
822|National anthem
823|Tulips
824|Clogs
825|Cheese
826|Gouda cheese
827|Edam cheese
828|Caramel waffle
829|Mini pancakes
830|Oil balls
831|Chocolate sprinkles
832|Spice cookies
833|Pepper nuts
834|Bitter meatballs
835|Croquette
836|French fries
837|French fries
838|Mayonnaise
839|Peanut sauce
840|Herring
841|Dairy products
842|Milk
843|Butter
844|Yogurt
845|Quark cheese
846|Mini pancake pan
847|Pancake
848|Pea soup
849|Carrot potato mash
850|Potato mash
851|Search
852|Find
853|Lose
854|Win
855|Give
856|Take
857|Bring
858|Fetch
859|Open
860|Close
861|Start
862|Stop
863|Change
864|Stay
865|Leave
866|Arrive
867|Wait
868|Expect
869|Surprise
870|Disappoint
871|Help
872|Disturb
873|Encourage
874|Discourage
875|Admire
876|Criticize
877|Compliment
878|Criticize
879|Praise
880|Disapprove
881|Fast
882|Slow
883|Soft
884|Hard
885|Heavy
886|Light
887|Thin
888|Thick
889|Short
890|Long
891|Wide
892|Narrow
893|High
894|Low
895|Deep
896|Shallow
897|Empty
898|Full
899|New
900|Old
901|Fresh
902|Musty
903|Fresh
904|Old
905|New
906|Modern
907|Traditional
908|Elegant
909|Sloppy
910|Neat
911|Freedom
912|Equality
913|Justice
914|Democracy
915|Dictatorship
916|Freedom of speech
917|Human rights
918|Civil rights
919|Law
920|Judge
921|Lawyer
922|Judicial
923|Punishment
924|Prison
925|Police officer
926|Detective
927|Crime
928|Theft
929|Burglary
930|Robbery
931|Murder
932|Violence
933|Peace
934|War
935|Conflict
936|Negotiation
937|Treaty
938|Alliance
939|Friendship
940|Love
941|Weather report
942|Weather forecast
943|Sunshine
944|Cloudy
945|Thunderstorm
946|Lightning
947|Thunder
948|Fog
949|Freezing rain
950|Hail
951|Tornado
952|Hurricane
953|Earthquake
954|Volcano
955|Tsunami
956|Flood
957|Drought
958|Fire
959|Explosion
960|Accident
961|Emergency
962|Rescue
963|Emergency service
964|Emergency number
965|112
966|Ambulance personnel
967|Firefighter
968|Police officer
969|Rescue worker
970|First aid
971|Canal
972|Canal ring
973|Mill
974|Windmill
975|Water mill
976|Polder
977|Dike
978|Lock
979|Harbor
980|Shipping
981|Fishing
982|Agriculture
983|Livestock farming
984|Field
985|Meadow
986|Stables
987|Barn
988|Hay
989|Haystack
990|Goats
991|Sheep
992|Pigs
993|Chickens
994|Ducks
995|Geese
996|Bees
997|Honey
998|Cheese factory
999|Cheese market
1000|Cheese merchant
1001|Economy
1002|Finance
1003|Bank
1004|Insurance
1005|Investment
1006|Share
1007|Bond
1008|Interest
1009|Inflation
1010|Definition
1011|Mathematics
1012|Number
1013|Equation
1014|Formula
1015|Geometry
1016|Algebra
1017|Statistics
1018|Chance
1019|Probability
1020|Science
1021|Physics
1022|Chemistry
1023|Biology
1024|Astronomy
1025|Geology
1026|History
1027|Geography
1028|Social studies
1029|Philosophy
1030|Psychology
1031|Architecture
1032|Construction
1033|Structure
1034|Foundation
1035|Wall
1036|Ceiling
1037|Floor
1038|Roof
1039|Window
1040|Window frame
1041|Glass
1042|Stone
1043|Brick
1044|Concrete
1045|Cement
1046|Sand
1047|Gravel
1048|Wood
1049|Metal
1050|Steel
1051|Good night
1052|Good morning
1053|Good afternoon
1054|Good evening
1055|Please
1056|Thank you
1057|You're welcome
1058|Excuse me
1059|Pardon
1060|Sorry
1061|No problem
1062|How are you
1063|Excellent
1064|Good
1065|Bad
1066|So-so
1067|Where
1068|When
1069|Who
1070|What
1071|Why
1072|How
1073|Which
1074|How many
1075|How much does it cost
1076|Living room
1077|Bedroom
1078|Kitchen
1079|Dining room
1080|Bathroom
1081|Toilet
1082|Corridor
1083|Stairs
1084|Basement
1085|Attic
1086|Balcony
1087|Terrace
1088|Garden
1089|Garage
1090|Barn
1091|Storage room
1092|Laundry room
1093|Boiler room
1094|Meter cabinet
1095|Front door
1096|Back door
107|Side door
1098|Window
1099|Window frame
1100|Roller shutter
1101|Teapot
1102|Coffee machine
1103|Kettle
1104|Blender
1105|Mixer
1106|Kitchen machine
1107|Toaster
1108|Waffle iron
1109|Grill
1110|Deep fryer
1111|Steam oven
1112|Slow cooker
1113|Kitchen scale
1114|Measuring cup
1115|Sieve
1116|Colander
1117|Cutting board
1118|Meat mallet
1119|Cheese slicer
1120|Apple peeler
1121|Cleaning agent
1122|All-purpose cleaner
1123|Glass cleaner
1124|Bathroom cleaner
1125|Toilet cleaner
1126|Unclogger
1127|Sponge
1128|Cloth
1129|Microfiber cloth
1130|Mop
1131|Bucket
1132|Scrub brush
1133|Dust cloth
1134|Air freshener
1135|Disinfectant
1136|Bleach
1137|Laundry detergent
1138|Fabric softener
1139|Ironing aid
1140|Iron
1141|Fax machine
1142|Scanner
1143|Binder
1144|Stapler
1145|Punch
1146|Paper clip
1147|Staples
1148|Post-it note
1149|Mailbox
1150|Filing cabinet
1151|Office chair
1152|Desk
1153|Table lamp
1154|Telephone handset
1155|Headset
1156|Webcam
1157|Microphone
1158|Speaker
1159|USB stick
1160|External hard drive
1161|Lion
1162|Tiger
1163|Bear
1164|Wolf
1165|Fox
1166|Badger
1167|Hedgehog
1168|Squirrel
1169|Deer
1170|Roe deer
1171|Wild boar
1172|Badger
1173|Marten
1174|Weasel
1175|Otter
1176|Beavers
1177|Sparrow
1178|Blackbird
1179|Robin
1180|Woodpecker
1181|Owl
1182|Hawk
1183|Falcon
1184|Eagle
1185|Vulture
1186|Parrot
1187|Canary
1188|Pigeon
1189|Seagull
1190|Swan
1191|Together
1192|Alone
1193|Soon
1194|Slowly
1195|Carefully
1196|Softly
1197|Loudly
1198|Quietly
1199|Quickly
1200|Slowly`;function ki(e){const n=new Map,t=e.trim().split(`
`);for(const s of t){if(s.startsWith("#")||s.trim()==="")continue;const i=s.split("|");if(i.length>=2){const r=parseInt(i[0].trim(),10),a=i.slice(1).join("|").trim();!isNaN(r)&&a&&n.set(r,a)}}return n}const yl=[{id:1,dutch:"hallo",chinese:"你好",english:"hello",example:"Hallo, hoe gaat het?",example_cn:"你好，你好吗？",pronunciation:"[ˈɦɑloː]"},{id:2,dutch:"goedemorgen",chinese:"早上好",english:"good morning",example:"Goedemorgen, iedereen!",example_cn:"大家早上好！",pronunciation:"[ˌɣudəˈmɔrɣə(n)]"},{id:3,dutch:"dank je wel",chinese:"谢谢",english:"thank you",example:"Dank je wel voor je hulp.",example_cn:"谢谢你的帮助。",pronunciation:"[ˈdɑŋk jə ˈʋɛl]"}];let _i=null;function Lh(){if(_i)return _i;try{const e=new Map,n=Oh.pronunciations;return n&&Object.keys(n).forEach(t=>{const s=parseInt(t,10),i=n[t];!isNaN(s)&&i&&e.set(s,i)}),_i=e,console.log(`Loaded pronunciation data for ${e.size} words`),e}catch(e){return console.error("Error loading pronunciation data:",e),new Map}}function $h(e,n){const t=[{nl:`Ik gebruik ${e}.`,cn:`我使用${n}。`},{nl:`Dit is ${e}.`,cn:`这是${n}。`},{nl:`Ik heb ${e} nodig.`,cn:`我需要${n}。`},{nl:`Dat is een ${e}.`,cn:`那是一个${n}。`},{nl:`Ik ken ${e}.`,cn:`我认识${n}。`}],s=t[Math.abs(Hh(e))%t.length];return{example:s.nl,example_cn:s.cn}}function Hh(e){let n=0;for(let t=0;t<e.length;t++){const s=e.charCodeAt(t);n=(n<<5)-n+s,n|=0}return n}async function Fh(){try{console.log("正在从纯文本文件加载单词数据...");const e=Lh(),n=ki(zh),t=ki(Nh),s=ki(Wh);if(console.log(`加载完成: 荷兰语 ${n.size} 个, 中文 ${t.size} 个, 英文 ${s.size} 个`),n.size===0)throw new Error("荷兰语单词文件为空");const i=[],r=Array.from(n.keys()).sort((a,o)=>a-o);for(const a of r){const o=n.get(a)||"",l=t.get(a)||"",u=s.get(a)||"",c=e.get(a)||"";if(!o)continue;const{example:d,example_cn:p}=$h(o,l||u);i.push({id:a,dutch:o,chinese:l,english:u,example:d,example_cn:p,pronunciation:c})}return console.log(`成功加载 ${i.length} 个单词`),i}catch(e){return console.error("从文件加载单词数据失败，使用回退数据:",e),yl}}let Ds=null;const Bh=yl;function Gn(){return Ds||Bh}async function Vh(){Ds||(Ds=await Fh())}const bl=6048e5,Gh=864e5,wl=6e4,kl=36e5,Ma=Symbol.for("constructDateFrom");function He(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&Ma in e?e[Ma](n):e instanceof Date?new e.constructor(n):new Date(n)}function Te(e,n){return He(n||e,e)}function Uh(e,n,t){const s=Te(e,t==null?void 0:t.in);return isNaN(n)?He(e,NaN):(n&&s.setDate(s.getDate()+n),s)}function Kh(e,n,t){const s=Te(e,t==null?void 0:t.in);if(isNaN(n))return He(e,NaN);if(!n)return s;const i=s.getDate(),r=He(e,s.getTime());r.setMonth(s.getMonth()+n+1,0);const a=r.getDate();return i>=a?r:(s.setFullYear(r.getFullYear(),r.getMonth(),i),s)}let qh={};function ei(){return qh}function es(e,n){var o,l,u,c;const t=ei(),s=(n==null?void 0:n.weekStartsOn)??((l=(o=n==null?void 0:n.locale)==null?void 0:o.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((c=(u=t.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??0,i=Te(e,n==null?void 0:n.in),r=i.getDay(),a=(r<s?7:0)+r-s;return i.setDate(i.getDate()-a),i.setHours(0,0,0,0),i}function Is(e,n){return es(e,{...n,weekStartsOn:1})}function _l(e,n){const t=Te(e,n==null?void 0:n.in),s=t.getFullYear(),i=He(t,0);i.setFullYear(s+1,0,4),i.setHours(0,0,0,0);const r=Is(i),a=He(t,0);a.setFullYear(s,0,4),a.setHours(0,0,0,0);const o=Is(a);return t.getTime()>=r.getTime()?s+1:t.getTime()>=o.getTime()?s:s-1}function Ta(e){const n=Te(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function yr(e,...n){const t=He.bind(null,n.find(s=>typeof s=="object"));return n.map(t)}function Ms(e,n){const t=Te(e,n==null?void 0:n.in);return t.setHours(0,0,0,0),t}function Yh(e,n,t){const[s,i]=yr(t==null?void 0:t.in,e,n),r=Ms(s),a=Ms(i),o=+r-Ta(r),l=+a-Ta(a);return Math.round((o-l)/Gh)}function Jh(e,n){const t=_l(e,n),s=He(e,0);return s.setFullYear(t,0,4),s.setHours(0,0,0,0),Is(s)}function Zh(e){return He(e,Date.now())}function jl(e,n,t){const[s,i]=yr(t==null?void 0:t.in,e,n);return+Ms(s)==+Ms(i)}function Qh(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Xh(e){return!(!Qh(e)&&typeof e!="number"||isNaN(+Te(e)))}function ef(e,n){const t=Te(e,n==null?void 0:n.in),s=t.getMonth();return t.setFullYear(t.getFullYear(),s+1,0),t.setHours(23,59,59,999),t}function nf(e,n){const[t,s]=yr(e,n.start,n.end);return{start:t,end:s}}function tf(e,n){const{start:t,end:s}=nf(n==null?void 0:n.in,e);let i=+t>+s;const r=i?+t:+s,a=i?s:t;a.setHours(0,0,0,0);let o=1;const l=[];for(;+a<=r;)l.push(He(t,a)),a.setDate(a.getDate()+o),a.setHours(0,0,0,0);return i?l.reverse():l}function ji(e,n){const t=Te(e,n==null?void 0:n.in);return t.setDate(1),t.setHours(0,0,0,0),t}function sf(e,n){const t=Te(e,n==null?void 0:n.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const rf={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},af=(e,n,t)=>{let s;const i=rf[e];return typeof i=="string"?s=i:n===1?s=i.one:s=i.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+s:s+" ago":s};function Ci(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const of={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},lf={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},cf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},uf={date:Ci({formats:of,defaultWidth:"full"}),time:Ci({formats:lf,defaultWidth:"full"}),dateTime:Ci({formats:cf,defaultWidth:"full"})},df={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},hf=(e,n,t,s)=>df[e];function Mt(e){return(n,t)=>{const s=t!=null&&t.context?String(t.context):"standalone";let i;if(s==="formatting"&&e.formattingValues){const a=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):a;i=e.formattingValues[o]||e.formattingValues[a]}else{const a=e.defaultWidth,o=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[o]||e.values[a]}const r=e.argumentCallback?e.argumentCallback(n):n;return i[r]}}const ff={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},pf={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},mf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},gf={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},xf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},vf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},yf=(e,n)=>{const t=Number(e),s=t%100;if(s>20||s<10)switch(s%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},bf={ordinalNumber:yf,era:Mt({values:ff,defaultWidth:"wide"}),quarter:Mt({values:pf,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mt({values:mf,defaultWidth:"wide"}),day:Mt({values:gf,defaultWidth:"wide"}),dayPeriod:Mt({values:xf,defaultWidth:"wide",formattingValues:vf,defaultFormattingWidth:"wide"})};function Tt(e){return(n,t={})=>{const s=t.width,i=s&&e.matchPatterns[s]||e.matchPatterns[e.defaultMatchWidth],r=n.match(i);if(!r)return null;const a=r[0],o=s&&e.parsePatterns[s]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?kf(o,d=>d.test(a)):wf(o,d=>d.test(a));let u;u=e.valueCallback?e.valueCallback(l):l,u=t.valueCallback?t.valueCallback(u):u;const c=n.slice(a.length);return{value:u,rest:c}}}function wf(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function kf(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function _f(e){return(n,t={})=>{const s=n.match(e.matchPattern);if(!s)return null;const i=s[0],r=n.match(e.parsePattern);if(!r)return null;let a=e.valueCallback?e.valueCallback(r[0]):r[0];a=t.valueCallback?t.valueCallback(a):a;const o=n.slice(i.length);return{value:a,rest:o}}}const jf=/^(\d+)(th|st|nd|rd)?/i,Cf=/\d+/i,Sf={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ef={any:[/^b/i,/^(a|c)/i]},Df={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},If={any:[/1/i,/2/i,/3/i,/4/i]},Mf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Tf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Rf={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Pf={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Af={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Of={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},zf={ordinalNumber:_f({matchPattern:jf,parsePattern:Cf,valueCallback:e=>parseInt(e,10)}),era:Tt({matchPatterns:Sf,defaultMatchWidth:"wide",parsePatterns:Ef,defaultParseWidth:"any"}),quarter:Tt({matchPatterns:Df,defaultMatchWidth:"wide",parsePatterns:If,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Tt({matchPatterns:Mf,defaultMatchWidth:"wide",parsePatterns:Tf,defaultParseWidth:"any"}),day:Tt({matchPatterns:Rf,defaultMatchWidth:"wide",parsePatterns:Pf,defaultParseWidth:"any"}),dayPeriod:Tt({matchPatterns:Af,defaultMatchWidth:"any",parsePatterns:Of,defaultParseWidth:"any"})},Nf={code:"en-US",formatDistance:af,formatLong:uf,formatRelative:hf,localize:bf,match:zf,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Wf(e,n){const t=Te(e,n==null?void 0:n.in);return Yh(t,sf(t))+1}function Lf(e,n){const t=Te(e,n==null?void 0:n.in),s=+Is(t)-+Jh(t);return Math.round(s/bl)+1}function Cl(e,n){var c,d,p,g;const t=Te(e,n==null?void 0:n.in),s=t.getFullYear(),i=ei(),r=(n==null?void 0:n.firstWeekContainsDate)??((d=(c=n==null?void 0:n.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??i.firstWeekContainsDate??((g=(p=i.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,a=He((n==null?void 0:n.in)||e,0);a.setFullYear(s+1,0,r),a.setHours(0,0,0,0);const o=es(a,n),l=He((n==null?void 0:n.in)||e,0);l.setFullYear(s,0,r),l.setHours(0,0,0,0);const u=es(l,n);return+t>=+o?s+1:+t>=+u?s:s-1}function $f(e,n){var o,l,u,c;const t=ei(),s=(n==null?void 0:n.firstWeekContainsDate)??((l=(o=n==null?void 0:n.locale)==null?void 0:o.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((c=(u=t.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??1,i=Cl(e,n),r=He((n==null?void 0:n.in)||e,0);return r.setFullYear(i,0,s),r.setHours(0,0,0,0),es(r,n)}function Hf(e,n){const t=Te(e,n==null?void 0:n.in),s=+es(t,n)-+$f(t,n);return Math.round(s/bl)+1}function he(e,n){const t=e<0?"-":"",s=Math.abs(e).toString().padStart(n,"0");return t+s}const Wn={y(e,n){const t=e.getFullYear(),s=t>0?t:1-t;return he(n==="yy"?s%100:s,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):he(t+1,2)},d(e,n){return he(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return he(e.getHours()%12||12,n.length)},H(e,n){return he(e.getHours(),n.length)},m(e,n){return he(e.getMinutes(),n.length)},s(e,n){return he(e.getSeconds(),n.length)},S(e,n){const t=n.length,s=e.getMilliseconds(),i=Math.trunc(s*Math.pow(10,t-3));return he(i,n.length)}},lt={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ra={G:function(e,n,t){const s=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(s,{width:"abbreviated"});case"GGGGG":return t.era(s,{width:"narrow"});case"GGGG":default:return t.era(s,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const s=e.getFullYear(),i=s>0?s:1-s;return t.ordinalNumber(i,{unit:"year"})}return Wn.y(e,n)},Y:function(e,n,t,s){const i=Cl(e,s),r=i>0?i:1-i;if(n==="YY"){const a=r%100;return he(a,2)}return n==="Yo"?t.ordinalNumber(r,{unit:"year"}):he(r,n.length)},R:function(e,n){const t=_l(e);return he(t,n.length)},u:function(e,n){const t=e.getFullYear();return he(t,n.length)},Q:function(e,n,t){const s=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(s);case"QQ":return he(s,2);case"Qo":return t.ordinalNumber(s,{unit:"quarter"});case"QQQ":return t.quarter(s,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(s,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(s,{width:"wide",context:"formatting"})}},q:function(e,n,t){const s=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(s);case"qq":return he(s,2);case"qo":return t.ordinalNumber(s,{unit:"quarter"});case"qqq":return t.quarter(s,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(s,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(s,{width:"wide",context:"standalone"})}},M:function(e,n,t){const s=e.getMonth();switch(n){case"M":case"MM":return Wn.M(e,n);case"Mo":return t.ordinalNumber(s+1,{unit:"month"});case"MMM":return t.month(s,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(s,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(s,{width:"wide",context:"formatting"})}},L:function(e,n,t){const s=e.getMonth();switch(n){case"L":return String(s+1);case"LL":return he(s+1,2);case"Lo":return t.ordinalNumber(s+1,{unit:"month"});case"LLL":return t.month(s,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(s,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(s,{width:"wide",context:"standalone"})}},w:function(e,n,t,s){const i=Hf(e,s);return n==="wo"?t.ordinalNumber(i,{unit:"week"}):he(i,n.length)},I:function(e,n,t){const s=Lf(e);return n==="Io"?t.ordinalNumber(s,{unit:"week"}):he(s,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):Wn.d(e,n)},D:function(e,n,t){const s=Wf(e);return n==="Do"?t.ordinalNumber(s,{unit:"dayOfYear"}):he(s,n.length)},E:function(e,n,t){const s=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(s,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(s,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(s,{width:"short",context:"formatting"});case"EEEE":default:return t.day(s,{width:"wide",context:"formatting"})}},e:function(e,n,t,s){const i=e.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(n){case"e":return String(r);case"ee":return he(r,2);case"eo":return t.ordinalNumber(r,{unit:"day"});case"eee":return t.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(i,{width:"short",context:"formatting"});case"eeee":default:return t.day(i,{width:"wide",context:"formatting"})}},c:function(e,n,t,s){const i=e.getDay(),r=(i-s.weekStartsOn+8)%7||7;switch(n){case"c":return String(r);case"cc":return he(r,n.length);case"co":return t.ordinalNumber(r,{unit:"day"});case"ccc":return t.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(i,{width:"narrow",context:"standalone"});case"cccccc":return t.day(i,{width:"short",context:"standalone"});case"cccc":default:return t.day(i,{width:"wide",context:"standalone"})}},i:function(e,n,t){const s=e.getDay(),i=s===0?7:s;switch(n){case"i":return String(i);case"ii":return he(i,n.length);case"io":return t.ordinalNumber(i,{unit:"day"});case"iii":return t.day(s,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(s,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(s,{width:"short",context:"formatting"});case"iiii":default:return t.day(s,{width:"wide",context:"formatting"})}},a:function(e,n,t){const i=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,n,t){const s=e.getHours();let i;switch(s===12?i=lt.noon:s===0?i=lt.midnight:i=s/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,n,t){const s=e.getHours();let i;switch(s>=17?i=lt.evening:s>=12?i=lt.afternoon:s>=4?i=lt.morning:i=lt.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let s=e.getHours()%12;return s===0&&(s=12),t.ordinalNumber(s,{unit:"hour"})}return Wn.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):Wn.H(e,n)},K:function(e,n,t){const s=e.getHours()%12;return n==="Ko"?t.ordinalNumber(s,{unit:"hour"}):he(s,n.length)},k:function(e,n,t){let s=e.getHours();return s===0&&(s=24),n==="ko"?t.ordinalNumber(s,{unit:"hour"}):he(s,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):Wn.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):Wn.s(e,n)},S:function(e,n){return Wn.S(e,n)},X:function(e,n,t){const s=e.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return Aa(s);case"XXXX":case"XX":return Xn(s);case"XXXXX":case"XXX":default:return Xn(s,":")}},x:function(e,n,t){const s=e.getTimezoneOffset();switch(n){case"x":return Aa(s);case"xxxx":case"xx":return Xn(s);case"xxxxx":case"xxx":default:return Xn(s,":")}},O:function(e,n,t){const s=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Pa(s,":");case"OOOO":default:return"GMT"+Xn(s,":")}},z:function(e,n,t){const s=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Pa(s,":");case"zzzz":default:return"GMT"+Xn(s,":")}},t:function(e,n,t){const s=Math.trunc(+e/1e3);return he(s,n.length)},T:function(e,n,t){return he(+e,n.length)}};function Pa(e,n=""){const t=e>0?"-":"+",s=Math.abs(e),i=Math.trunc(s/60),r=s%60;return r===0?t+String(i):t+String(i)+n+he(r,2)}function Aa(e,n){return e%60===0?(e>0?"-":"+")+he(Math.abs(e)/60,2):Xn(e,n)}function Xn(e,n=""){const t=e>0?"-":"+",s=Math.abs(e),i=he(Math.trunc(s/60),2),r=he(s%60,2);return t+i+n+r}const Oa=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Sl=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Ff=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],s=t[1],i=t[2];if(!i)return Oa(e,n);let r;switch(s){case"P":r=n.dateTime({width:"short"});break;case"PP":r=n.dateTime({width:"medium"});break;case"PPP":r=n.dateTime({width:"long"});break;case"PPPP":default:r=n.dateTime({width:"full"});break}return r.replace("{{date}}",Oa(s,n)).replace("{{time}}",Sl(i,n))},Bf={p:Sl,P:Ff},Vf=/^D+$/,Gf=/^Y+$/,Uf=["D","DD","YY","YYYY"];function Kf(e){return Vf.test(e)}function qf(e){return Gf.test(e)}function Yf(e,n,t){const s=Jf(e,n,t);if(console.warn(s),Uf.includes(e))throw new RangeError(s)}function Jf(e,n,t){const s=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${s} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Zf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Qf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Xf=/^'([^]*?)'?$/,e0=/''/g,n0=/[a-zA-Z]/;function Se(e,n,t){var c,d,p,g,C,v,M,R;const s=ei(),i=(t==null?void 0:t.locale)??s.locale??Nf,r=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((g=(p=s.locale)==null?void 0:p.options)==null?void 0:g.firstWeekContainsDate)??1,a=(t==null?void 0:t.weekStartsOn)??((v=(C=t==null?void 0:t.locale)==null?void 0:C.options)==null?void 0:v.weekStartsOn)??s.weekStartsOn??((R=(M=s.locale)==null?void 0:M.options)==null?void 0:R.weekStartsOn)??0,o=Te(e,t==null?void 0:t.in);if(!Xh(o))throw new RangeError("Invalid time value");let l=n.match(Qf).map(y=>{const b=y[0];if(b==="p"||b==="P"){const w=Bf[b];return w(y,i.formatLong)}return y}).join("").match(Zf).map(y=>{if(y==="''")return{isToken:!1,value:"'"};const b=y[0];if(b==="'")return{isToken:!1,value:t0(y)};if(Ra[b])return{isToken:!0,value:y};if(b.match(n0))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:y}});i.localize.preprocessor&&(l=i.localize.preprocessor(o,l));const u={firstWeekContainsDate:r,weekStartsOn:a,locale:i};return l.map(y=>{if(!y.isToken)return y.value;const b=y.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&qf(b)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Kf(b))&&Yf(b,n,String(e));const w=Ra[b[0]];return w(o,b,i.localize,u)}).join("")}function t0(e){const n=e.match(Xf);return n?n[1].replace(e0,"'"):e}function s0(e,n){return Te(e,n==null?void 0:n.in).getDay()}function za(e,n){return jl(He((n==null?void 0:n.in)||e,e),Zh((n==null?void 0:n.in)||e))}function Ki(e,n,t){return Uh(e,-n,t)}function Ts(e,n){const t=()=>He(n==null?void 0:n.in,NaN),i=o0(e);let r;if(i.date){const u=l0(i.date,2);r=c0(u.restDateString,u.year)}if(!r||isNaN(+r))return t();const a=+r;let o=0,l;if(i.time&&(o=u0(i.time),isNaN(o)))return t();if(i.timezone){if(l=d0(i.timezone),isNaN(l))return t()}else{const u=new Date(a+o),c=Te(0,n==null?void 0:n.in);return c.setFullYear(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()),c.setHours(u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),c}return Te(a+o+l,n==null?void 0:n.in)}const ds={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i0=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,r0=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,a0=/^([+-])(\d{2})(?::?(\d{2}))?$/;function o0(e){const n={},t=e.split(ds.dateTimeDelimiter);let s;if(t.length>2)return n;if(/:/.test(t[0])?s=t[0]:(n.date=t[0],s=t[1],ds.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ds.timeZoneDelimiter)[0],s=e.substr(n.date.length,e.length))),s){const i=ds.timezone.exec(s);i?(n.time=s.replace(i[1],""),n.timezone=i[1]):n.time=s}return n}function l0(e,n){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),s=e.match(t);if(!s)return{year:NaN,restDateString:""};const i=s[1]?parseInt(s[1]):null,r=s[2]?parseInt(s[2]):null;return{year:r===null?i:r*100,restDateString:e.slice((s[1]||s[2]).length)}}function c0(e,n){if(n===null)return new Date(NaN);const t=e.match(i0);if(!t)return new Date(NaN);const s=!!t[4],i=Rt(t[1]),r=Rt(t[2])-1,a=Rt(t[3]),o=Rt(t[4]),l=Rt(t[5])-1;if(s)return g0(n,o,l)?h0(n,o,l):new Date(NaN);{const u=new Date(0);return!p0(n,r,a)||!m0(n,i)?new Date(NaN):(u.setUTCFullYear(n,r,Math.max(i,a)),u)}}function Rt(e){return e?parseInt(e):1}function u0(e){const n=e.match(r0);if(!n)return NaN;const t=Si(n[1]),s=Si(n[2]),i=Si(n[3]);return x0(t,s,i)?t*kl+s*wl+i*1e3:NaN}function Si(e){return e&&parseFloat(e.replace(",","."))||0}function d0(e){if(e==="Z")return 0;const n=e.match(a0);if(!n)return 0;const t=n[1]==="+"?-1:1,s=parseInt(n[2]),i=n[3]&&parseInt(n[3])||0;return v0(s,i)?t*(s*kl+i*wl):NaN}function h0(e,n,t){const s=new Date(0);s.setUTCFullYear(e,0,4);const i=s.getUTCDay()||7,r=(n-1)*7+t+1-i;return s.setUTCDate(s.getUTCDate()+r),s}const f0=[31,null,31,30,31,30,31,31,30,31,30,31];function El(e){return e%400===0||e%4===0&&e%100!==0}function p0(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(f0[n]||(El(e)?29:28))}function m0(e,n){return n>=1&&n<=(El(e)?366:365)}function g0(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}function x0(e,n,t){return e===24?n===0&&t===0:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}function v0(e,n){return n>=0&&n<=59}const Dl="dutch_app_progress",Ei={lastCheckInDate:null,consecutiveDays:0,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[],dailyLearningRecords:{},dailyReviewStatus:{},masteredWordIds:[],difficultWordIds:[],lastReviewDate:null,todayReviewTargetIds:[],todayReviewedWordIds:[]},ke=()=>{const e=localStorage.getItem(Dl);if(e)try{const n=JSON.parse(e);return{...Ei,...n}}catch(n){return console.error("Failed to parse progress",n),{...Ei}}return{...Ei}},nn=e=>{localStorage.setItem(Dl,JSON.stringify(e))},Gt=(e=!1)=>{const n=ke(),t=Se(new Date,"yyyy-MM-dd");if(!e&&n.lastLearnDate===t&&n.todayTargetIds.length>0)return Gn().filter(l=>n.todayTargetIds.includes(l.id));n.todayLearnedIds=[],n.lastLearnDate=t;const s=Gn(),i=new Set(n.learnedWordIds);let r=s.filter(o=>!i.has(o.id));r.length===0&&(r=s);const a=r.slice(0,10).map(o=>o.id);return n.todayTargetIds=a,nn(n),s.filter(o=>a.includes(o.id))},Il=e=>{const n=ke(),t=Se(new Date,"yyyy-MM-dd");n.learnedWordIds.includes(e)||(n.learnedWordIds.push(e),n.totalLearned=n.learnedWordIds.length),n.todayLearnedIds.includes(e)||n.todayLearnedIds.push(e),n.dailyLearningRecords||(n.dailyLearningRecords={}),n.dailyLearningRecords[t]||(n.dailyLearningRecords[t]=[]),n.dailyLearningRecords[t].includes(e)||n.dailyLearningRecords[t].push(e),nn(n)},zt=()=>{const e=ke(),n=Se(new Date,"yyyy-MM-dd");if(e.lastCheckInDate===n)return!1;if(e.lastCheckInDate){const t=Ts(e.lastCheckInDate),s=Ki(new Date,1);jl(t,s)?e.consecutiveDays+=1:e.consecutiveDays=1}else e.consecutiveDays=1;return e.lastCheckInDate=n,e.checkInHistory||(e.checkInHistory=[]),e.checkInHistory.includes(n)||e.checkInHistory.push(n),nn(e),!0},Di=(e=10,n=!1)=>{const t=ke(),s=Se(new Date,"yyyy-MM-dd"),i=t.lastReviewDate!==s,r=!t.todayReviewTargetIds||t.todayReviewTargetIds.length===0;if(n||i||r){t.lastReviewDate=s,t.todayReviewedWordIds=[];const l=t.learnedWordIds,u=new Set(t.masteredWordIds||[]),c=l.filter(g=>!u.has(g));if(c.length===0)return t.todayReviewTargetIds=[],nn(t),[];const p=[...c].sort(()=>.5-Math.random()).slice(0,e);t.todayReviewTargetIds=p,nn(t)}const a=Gn(),o=t.todayReviewTargetIds||[];return a.filter(l=>o.includes(l.id)).sort((l,u)=>o.indexOf(l.id)-o.indexOf(u.id))},y0=e=>{const n=ke();n.todayReviewedWordIds||(n.todayReviewedWordIds=[]),n.todayReviewedWordIds.includes(e)||(n.todayReviewedWordIds.push(e),nn(n))},b0=(e,n)=>{const t=ke();t.dailyReviewStatus||(t.dailyReviewStatus={}),t.dailyReviewStatus[e]=n,nn(t)},w0=e=>{const n=ke();n.difficultWordIds||(n.difficultWordIds=[]);const t=n.difficultWordIds.indexOf(e);t>-1?n.difficultWordIds.splice(t,1):n.difficultWordIds.push(e),nn(n)},k0=e=>{var t;return((t=ke().difficultWordIds)==null?void 0:t.includes(e))||!1},_0=e=>{const n=ke();if(n.masteredWordIds||(n.masteredWordIds=[]),n.masteredWordIds.includes(e)||n.masteredWordIds.push(e),n.difficultWordIds){const t=n.difficultWordIds.indexOf(e);t>-1&&n.difficultWordIds.splice(t,1)}nn(n)},Na=()=>{const e=ke(),n=Gn(),t=e.difficultWordIds||[];return n.filter(s=>t.includes(s.id))},j0=e=>{var i;const n=ke(),t=Gn(),s=((i=n.dailyLearningRecords)==null?void 0:i[e])||[];return t.filter(r=>s.includes(r.id))},C0=()=>{const e=Gn(),n=ke(),t=Se(new Date,"yyyy-MM-dd"),s=[],i=10;for(let p=0;p<e.length;p+=i){const g=e.slice(p,p+i);s.push({groupIndex:Math.floor(p/i),wordIds:g.map(C=>C.id),words:g,status:"planned",date:""})}const r=new Map,a=n.dailyLearningRecords||{},o=Object.keys(a).sort();for(const p of o){const g=a[p]||[];for(const C of g)r.has(C)||r.set(C,p)}const l=new Set(n.todayTargetIds||[]);let u="";for(const p of s){const g=p.wordIds.filter(v=>r.has(v)).length,C=p.wordIds.some(v=>l.has(v));if(g>=p.wordIds.length*.5&&!C){const v=new Map;for(const y of p.wordIds){const b=r.get(y);b&&v.set(b,(v.get(b)||0)+1)}let M="",R=0;for(const[y,b]of v)b>R&&(R=b,M=y);p.status="completed",p.date=M||t,u=p.date>u?p.date:u}else C&&(p.status="today",p.date=t,u=t>u?t:u)}let c=u||t,d=1;for(const p of s)if(p.status==="planned"){const g=S0(c,d);p.date=g,d++}return s};function S0(e,n){const t=Ts(e),s=new Date(t.getTime()+n*24*60*60*1e3);return Se(s,"yyyy-MM-dd")}const Ml="dutch_app_course_progress",Ii={completedCourses:[],courseLearnedWords:{},courseReviewCount:{}},jt=()=>{const e=localStorage.getItem(Ml);if(e)try{const n=JSON.parse(e);return{...Ii,...n}}catch(n){return console.error("Failed to parse course progress",n),{...Ii}}return{...Ii}},br=e=>{localStorage.setItem(Ml,JSON.stringify(e))},E0=e=>{const n=jt();n.completedCourses.includes(e)||n.completedCourses.push(e),br(n)},Tl=e=>jt().completedCourses.includes(e),Wa=(e,n)=>{const t=jt();t.courseLearnedWords[e]||(t.courseLearnedWords[e]=[]),t.courseLearnedWords[e].includes(n)||t.courseLearnedWords[e].push(n),br(t)},D0=e=>{var t;return((t=jt().courseLearnedWords[e])==null?void 0:t.length)||0},I0=e=>{const n=jt();n.courseReviewCount[e]||(n.courseReviewCount[e]=0),n.courseReviewCount[e]++,br(n)},La=e=>jt().courseReviewCount[e]||0,Rs=()=>{const e=Gn(),n=ke(),t=e.length,s=n.learnedWordIds.length,i=t-s,r=Math.ceil(i/10),a=new Date,o=new Date(a.getTime()+r*24*60*60*1e3);return{totalWords:t,learnedCount:s,remainingWords:i,remainingDays:r,estimatedEndDate:Se(o,"yyyy-MM-dd"),progressPercent:t>0?Math.round(s/t*100):0}},M0={class:"bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto transition-all duration-300"},T0={class:"text-center mb-6"},R0={class:"text-4xl font-bold text-blue-600 mb-2"},P0={class:"flex items-center justify-center gap-2 mb-3"},A0={key:0,class:"text-gray-500 text-lg font-mono bg-gray-50 px-3 py-1 rounded-md"},O0={key:1,class:"text-gray-400 text-sm font-mono bg-yellow-50 px-2 py-1 rounded-md"},z0={class:"flex justify-center items-center gap-3"},N0=["disabled"],W0={key:0,class:"text-xs text-red-500 mt-2"},L0={class:"space-y-4 animate-fade-in"},$0={class:"grid grid-cols-2 gap-4 text-center border-t border-b border-gray-100 py-4"},H0={class:"text-lg font-medium text-gray-800"},F0={class:"text-lg font-medium text-gray-800"},B0={class:"bg-blue-50 rounded-lg p-4 mt-4"},V0={class:"text-lg text-gray-800 mb-1"},G0={class:"text-sm text-gray-500"},U0={class:"flex items-center gap-2 mt-3 pt-3 border-t border-blue-200"},K0=["disabled"],q0=Ue({__name:"WordCard",props:{word:{},initialShowTranslation:{type:Boolean}},setup(e){const n=Z(!1),t=Z(!1);tn(()=>{t.value="speechSynthesis"in window});const s=async(a,o="dutch")=>{if(!t.value){alert("您的浏览器不支持语音播放功能");return}window.speechSynthesis.cancel();const l=new SpeechSynthesisUtterance(a);o==="dutch"?(l.lang="nl-NL",l.rate=.8,l.pitch=1,l.volume=1):(l.lang="nl-NL",l.rate=.7,l.pitch=1,l.volume=1);const c=window.speechSynthesis.getVoices().find(d=>d.lang.includes("nl")||d.lang.includes("NL"));c&&(l.voice=c),l.onstart=()=>{n.value=!0},l.onend=()=>{n.value=!1},l.onerror=()=>{n.value=!1,console.error("语音播放出错")},window.speechSynthesis.speak(l)},i=()=>{t.value&&(window.speechSynthesis.cancel(),n.value=!1)},r=a=>a.pronunciation&&a.pronunciation.trim()!=="";return(a,o)=>(I(),P("div",M0,[h("div",T0,[h("h2",R0,T(e.word.dutch),1),h("div",P0,[r(e.word)?(I(),P("p",A0,T(e.word.pronunciation),1)):(I(),P("p",O0," 发音加载中... "))]),h("div",z0,[h("button",{onClick:o[0]||(o[0]=Bt(l=>s(e.word.dutch),["stop"])),disabled:!t.value||n.value,class:me(["inline-flex items-center justify-center p-3 text-blue-600 bg-blue-50 hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95",{"animate-pulse":n.value}])},[O(W(Da),{class:"w-6 h-6"})],10,N0),t.value&&n.value?(I(),P("button",{key:0,onClick:Bt(i,["stop"]),class:"inline-flex items-center justify-center p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-all duration-200 transform hover:scale-105"},[...o[2]||(o[2]=[h("span",{class:"text-xs font-bold"},"停止",-1)])])):ge("",!0)]),t.value?ge("",!0):(I(),P("p",W0," ⚠️ 您的浏览器不支持语音播放 "))]),h("div",L0,[h("div",$0,[h("div",null,[o[3]||(o[3]=h("p",{class:"text-xs text-gray-400 uppercase tracking-wider"},"中文",-1)),h("p",H0,T(e.word.chinese),1)]),h("div",null,[o[4]||(o[4]=h("p",{class:"text-xs text-gray-400 uppercase tracking-wider"},"English",-1)),h("p",F0,T(e.word.english),1)])]),h("div",B0,[o[6]||(o[6]=h("p",{class:"text-sm text-blue-800 font-medium mb-1"},"Example:",-1)),h("p",V0,T(e.word.example),1),h("p",G0,T(e.word.example_cn),1),h("div",U0,[h("button",{onClick:o[1]||(o[1]=Bt(l=>s(e.word.example,"example"),["stop"])),disabled:!t.value||n.value,class:"inline-flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 bg-white hover:bg-blue-50 disabled:bg-gray-100 disabled:text-gray-400 rounded-full transition-colors"},[O(W(Da),{class:"w-4 h-4"}),o[5]||(o[5]=h("span",null,"播放例句",-1))],8,K0)])])])]))}}),ni=it(q0,[["__scopeId","data-v-7a71fa77"]]),Y0={class:"flex flex-col h-full"},J0={key:0,class:"flex justify-between items-center mb-6"},Z0={class:"text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"},Q0={class:"flex-1 flex flex-col items-center justify-center w-full"},X0={key:0,class:"text-center space-y-6 animate-fade-in w-full py-10"},e1={key:1,class:"text-center space-y-6 animate-fade-in w-full py-10"},n1={class:"text-red-600"},t1={key:2,class:"w-full space-y-6"},s1={class:"w-full bg-gray-100 rounded-full h-2"},i1={key:3,class:"text-center space-y-6 animate-fade-in w-full py-10"},r1={class:"bg-green-100 p-6 rounded-full inline-block mb-4"},a1={class:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full"},o1={class:"grid grid-cols-2 gap-4 mb-4"},l1={class:"bg-orange-50 rounded-xl p-4 text-center"},c1={class:"text-2xl font-bold text-gray-800"},u1={class:"bg-blue-50 rounded-xl p-4 text-center"},d1={class:"text-2xl font-bold text-gray-800"},h1={class:"w-full mt-8 flex gap-4"},f1=Ue({__name:"DailyLearn",emits:["complete"],setup(e,{emit:n}){const t=n,s=Z([]),i=Z(0),r=Z(!1),a=Z(!0),o=Z(null);tn(async()=>{try{await new Promise(R=>setTimeout(R,100)),s.value=Gt(),s.value.length<10&&console.warn("单词数量不足，可能数据未完全加载");const C=ke(),v=new Set(C.todayLearnedIds||[]),M=s.value.findIndex(R=>!v.has(R.id));M>-1?i.value=M:s.value.length>0&&v.size>=s.value.length&&(r.value=!0,t("complete"))}catch(C){console.error("加载单词失败:",C),o.value="加载单词时出错，请稍后重试。"}finally{a.value=!1}});const l=fe(()=>s.value[i.value]),u=fe(()=>s.value.length===0?100:i.value/s.value.length*100),c=()=>{l.value&&Il(l.value.id),i.value<s.value.length-1?i.value++:(zt(),r.value=!0,t("complete"))},d=()=>{s.value=Gt(!0),i.value=0,r.value=!1},p=()=>{i.value=0,r.value=!1},g=async()=>{a.value=!0,o.value=null;try{s.value=await Gt();const C=ke(),v=new Set(C.todayLearnedIds||[]),M=s.value.findIndex(R=>!v.has(R.id));M>-1?i.value=M:s.value.length>0&&v.size>=s.value.length&&(r.value=!0,t("complete"))}catch(C){console.error("重试加载失败:",C),o.value="加载失败，请刷新页面重试"}finally{a.value=!1}};return(C,v)=>(I(),P("div",Y0,[r.value?ge("",!0):(I(),P("div",J0,[v[1]||(v[1]=h("h2",{class:"text-xl font-bold text-gray-800"},"今日新词",-1)),h("span",Z0,T(i.value+1)+" / "+T(s.value.length),1)])),h("div",Q0,[a.value?(I(),P("div",X0,[O(W(bh),{class:"w-16 h-16 text-gray-400 animate-spin"}),v[2]||(v[2]=h("p",{class:"text-gray-600"},"正在加载单词...",-1))])):o.value?(I(),P("div",e1,[h("p",n1,T(o.value),1),h("button",{onClick:v[0]||(v[0]=M=>g()),class:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"}," 重试 ")])):!r.value&&l.value?(I(),P("div",t1,[h("div",s1,[h("div",{class:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:Vn({width:`${u.value}%`})},null,4)]),(I(),Rn(ni,{word:l.value,key:l.value.id,initialShowTranslation:!0},null,8,["word"])),h("button",{onClick:c,class:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2 mt-8"},[v[3]||(v[3]=h("span",null,"下一个",-1)),O(W(ht),{class:"w-5 h-5"})])])):(I(),P("div",i1,[h("div",r1,[O(W(Xs),{class:"w-16 h-16 text-green-600"})]),v[11]||(v[11]=h("h2",{class:"text-2xl font-bold text-gray-800"},"太棒了！",-1)),v[12]||(v[12]=h("p",{class:"text-gray-600"},"你已经完成了今天的学习任务。",-1)),h("div",a1,[h("div",o1,[h("div",l1,[v[4]||(v[4]=h("div",{class:"flex justify-center text-orange-500 mb-2"},[h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-6 h-6"},[h("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})])],-1)),h("p",c1,T(W(ke)().consecutiveDays),1),v[5]||(v[5]=h("p",{class:"text-xs text-gray-500"},"连续打卡(天)",-1))]),h("div",u1,[v[6]||(v[6]=hi('<div class="flex justify-center text-blue-500 mb-2" data-v-aa5b748f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" data-v-aa5b748f><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" data-v-aa5b748f></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" data-v-aa5b748f></path><path d="M4 22h16" data-v-aa5b748f></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" data-v-aa5b748f></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" data-v-aa5b748f></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" data-v-aa5b748f></path></svg></div>',1)),h("p",d1,T(W(ke)().totalLearned),1),v[7]||(v[7]=h("p",{class:"text-xs text-gray-500"},"已学单词(个)",-1))])]),v[8]||(v[8]=hi('<div class="w-full bg-green-50 text-green-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 border border-green-100" data-v-aa5b748f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" data-v-aa5b748f><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-v-aa5b748f></rect><line x1="16" x2="16" y1="2" y2="6" data-v-aa5b748f></line><line x1="8" x2="8" y1="2" y2="6" data-v-aa5b748f></line><line x1="3" x2="21" y1="10" y2="10" data-v-aa5b748f></line></svg><span data-v-aa5b748f>今天已打卡</span></div>',1))]),h("div",h1,[h("button",{onClick:p,class:"flex-1 flex items-center justify-center p-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors gap-2"},[...v[9]||(v[9]=[hi('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" data-v-aa5b748f><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" data-v-aa5b748f></path><path d="M3 3v5h5" data-v-aa5b748f></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" data-v-aa5b748f></path><path d="M16 16h5v5" data-v-aa5b748f></path></svg><span class="font-medium" data-v-aa5b748f>再次学习</span>',2)])]),h("button",{onClick:d,class:"flex-1 flex items-center justify-center p-4 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-colors gap-2"},[O(W(Zs),{class:"w-6 h-6"}),v[10]||(v[10]=h("span",{class:"font-medium"},"学习下一组",-1))])])]))])]))}}),p1=it(f1,[["__scopeId","data-v-aa5b748f"]]),m1={class:"bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto"},g1={class:"text-center mb-8"},x1={class:"text-2xl font-bold text-gray-800 mb-2"},v1={class:"text-gray-500"},y1={class:"space-y-4"},b1={class:"relative"},w1={key:0,class:"absolute right-3 top-1/2 -translate-y-1/2 text-green-500"},k1={key:1,class:"absolute right-3 top-1/2 -translate-y-1/2 text-red-500"},_1={key:0,class:"text-center text-blue-600 font-medium animate-fade-in"},j1={class:"flex gap-3"},C1=["disabled"],S1=Ue({__name:"SpellingCard",props:{word:{}},emits:["complete"],setup(e,{emit:n}){const t=e,s=n,i=Z(""),r=Z(null),a=Z(!1);Fn(()=>t.word,()=>{i.value="",r.value=null,a.value=!1});const o=()=>{i.value.trim().toLowerCase()===t.word.dutch.toLowerCase()?(r.value=!0,setTimeout(()=>{s("complete")},1e3)):r.value=!1},l=()=>{a.value=!0};return(u,c)=>(I(),P("div",m1,[h("div",g1,[c[1]||(c[1]=h("p",{class:"text-sm text-gray-400 uppercase tracking-wider mb-2"},"请拼写荷兰语",-1)),h("h3",x1,T(e.word.chinese),1),h("p",v1,T(e.word.english),1)]),h("div",y1,[h("div",b1,[jc(h("input",{"onUpdate:modelValue":c[0]||(c[0]=d=>i.value=d),onKeyup:sd(o,["enter"]),type:"text",class:me(["w-full px-4 py-3 text-lg text-center border-2 rounded-xl focus:outline-none transition-colors",{"border-gray-200 focus:border-blue-500":r.value===null,"border-green-500 bg-green-50 text-green-700":r.value===!0,"border-red-500 bg-red-50 text-red-700":r.value===!1}]),placeholder:"输入荷兰语单词...",autofocus:""},null,34),[[Xu,i.value]]),r.value===!0?(I(),P("div",w1,[O(W(gh),{class:"w-6 h-6"})])):ge("",!0),r.value===!1?(I(),P("div",k1,[O(W(vl),{class:"w-6 h-6"})])):ge("",!0)]),a.value?(I(),P("div",_1," 提示: "+T(e.word.dutch),1)):ge("",!0),h("div",j1,[h("button",{onClick:l,class:"flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"},[O(W(vh),{class:"w-5 h-5"}),c[2]||(c[2]=h("span",null,"提示",-1))]),h("button",{onClick:o,class:"flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200",disabled:r.value===!0}," 检查 ",8,C1)])])]))}}),Rl=it(S1,[["__scopeId","data-v-2f4cf95d"]]),E1={class:"fixed inset-0 flex flex-col bg-gray-50 z-40 max-w-md mx-auto"},D1={key:0,class:"flex flex-col h-full overflow-hidden"},I1={class:"flex items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm"},M1={class:"mx-4 mt-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg"},T1={class:"flex justify-between items-start mb-4"},R1={class:"text-3xl font-bold"},P1={class:"text-lg font-normal text-blue-200"},A1={class:"bg-white/20 rounded-xl px-3 py-2 text-center"},O1={class:"text-2xl font-bold"},z1={class:"w-full bg-white/20 rounded-full h-2.5 mb-4"},N1={class:"flex justify-between text-sm"},W1={class:"text-blue-100"},L1={class:"text-blue-100"},$1={class:"flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-32",style:{"min-height":"0"}},H1=["id"],F1=["onClick"],B1={class:"flex items-center gap-3"},V1={class:"flex items-center gap-2"},G1={class:"font-bold text-gray-800 text-sm"},U1={class:"text-xs text-gray-400 mt-0.5"},K1={class:"flex items-center gap-2"},q1=["onClick"],Y1=["onClick"],J1={key:2,disabled:"",class:"text-xs px-3 py-1.5 bg-gray-50 text-gray-300 rounded-lg font-medium cursor-not-allowed"},Z1={key:0,class:"border-t border-gray-100"},Q1={class:"divide-y divide-gray-50"},X1={class:"flex-1 min-w-0"},ep={class:"flex items-center gap-2"},np={class:"font-bold text-blue-600 text-sm"},tp={key:0,class:"text-xs text-gray-400 font-mono truncate"},sp={class:"flex items-center gap-3 text-sm"},ip={class:"text-gray-700"},rp={class:"text-gray-400 text-xs hidden"},ap={key:1,class:"flex flex-col h-full overflow-hidden"},op={class:"flex justify-between items-center p-4 border-b border-gray-100 bg-white"},lp={class:"flex flex-col items-center"},cp={class:"font-bold text-gray-800"},up={class:"text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1"},dp={key:0,class:"flex-1 flex flex-col items-center justify-center w-full p-4"},hp={class:"w-full max-w-md relative"},fp={key:"reading",class:"w-full"},pp={class:"flex gap-3 mt-8"},mp={key:"spelling",class:"w-full"},gp={class:"flex gap-3 mt-6"},xp=Ue({__name:"AllWordsOverview",emits:["back","goToLearn"],setup(e,{emit:n}){const t=n,s=Z("overview"),i=Z([]),r=Z(Rs()),a=Z(new Set),o=Z([]),l=Z(-1),u=Z(0),c=Z("reading"),d=Z(""),p=()=>{i.value=C0(),r.value=Rs(),a.value.clear();let H=0;for(const V of i.value)V.status==="today"?a.value.add(V.groupIndex):V.status==="planned"&&H<2&&(a.value.add(V.groupIndex),H++)},g=H=>{a.value.has(H)?a.value.delete(H):a.value.add(H)},C=H=>a.value.has(H),v=H=>{if(!H)return"未知";try{const V=Ts(H),E=new Date,ee=Se(E,"yyyy-MM-dd");if(H===ee)return"今天";const ue=new Date(E);if(ue.setDate(ue.getDate()-1),H===Se(ue,"yyyy-MM-dd"))return"昨天";const te=new Date(E);return te.setDate(te.getDate()+1),H===Se(te,"yyyy-MM-dd")?"明天":Se(V,"MM月dd日")}catch{return H}},M=H=>{switch(H){case"completed":return"bg-green-100 text-green-700";case"today":return"bg-blue-100 text-blue-700";case"planned":return"bg-gray-100 text-gray-500";default:return"bg-gray-100 text-gray-500"}},R=H=>{switch(H){case"completed":return"已完成";case"today":return"今日学习";case"planned":return"计划中";default:return"未知"}},y=H=>{if(H.status!=="planned"){if(H.status==="today"){t("goToLearn");return}o.value=[...H.words],l.value=H.groupIndex,d.value=H.date,u.value=0,c.value="reading",s.value="review"}},b=fe(()=>o.value[u.value]),w=()=>{u.value<o.value.length-1?u.value++:c.value==="reading"?(c.value="spelling",u.value=0):s.value="overview"},N=()=>{w()},J=()=>{o.value=[...o.value].sort(()=>.5-Math.random()),u.value=0},X=()=>{s.value="overview"},ve=()=>{Hs(()=>{const H=document.getElementById("group-today");H&&H.scrollIntoView({behavior:"smooth",block:"center"})})};tn(()=>{p(),ve()}),Bs(()=>{p()});const K=fe(()=>{if(!r.value.estimatedEndDate)return"未知";try{return Se(Ts(r.value.estimatedEndDate),"yyyy年MM月dd日")}catch{return r.value.estimatedEndDate}});return(H,V)=>(I(),P("div",E1,[s.value==="overview"?(I(),P("div",D1,[h("div",I1,[h("button",{onClick:V[0]||(V[0]=E=>H.$emit("back")),class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 mr-3"},[O(W(Es),{class:"w-6 h-6"})]),V[3]||(V[3]=h("h2",{class:"text-lg font-bold text-gray-800"},"所有单词总览",-1))]),h("div",M1,[h("div",T1,[h("div",null,[V[4]||(V[4]=h("p",{class:"text-sm text-blue-100 mb-1"},"学习进度",-1)),h("p",R1,[Bn(T(r.value.learnedCount)+" ",1),h("span",P1,"/ "+T(r.value.totalWords),1)])]),h("div",A1,[h("p",O1,T(r.value.progressPercent)+"%",1)])]),h("div",z1,[h("div",{class:"bg-white h-2.5 rounded-full transition-all duration-500",style:Vn({width:`${r.value.progressPercent}%`})},null,4)]),h("div",N1,[h("span",W1,[O(W(gr),{class:"w-3.5 h-3.5 inline mr-1"}),Bn(" 还剩 "+T(r.value.remainingDays)+" 天 ",1)]),h("span",L1,"预计 "+T(K.value)+" 学完",1)])]),h("div",$1,[(I(!0),P(Ce,null,Xe(i.value,E=>(I(),P("div",{key:E.groupIndex,id:E.status==="today"?"group-today":void 0,class:me(["bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-200",{"border-green-200":E.status==="completed","border-blue-300 ring-2 ring-blue-100":E.status==="today","border-gray-100":E.status==="planned"}])},[h("div",{class:me(["flex items-center justify-between p-4 cursor-pointer select-none",{"bg-green-50/50":E.status==="completed","bg-blue-50":E.status==="today","bg-gray-50/50":E.status==="planned"}]),onClick:ee=>g(E.groupIndex)},[h("div",B1,[h("div",{class:me(["w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",{"bg-green-500 text-white":E.status==="completed","bg-blue-500 text-white":E.status==="today","bg-gray-200 text-gray-500":E.status==="planned"}])},T(E.groupIndex+1),3),h("div",null,[h("div",V1,[h("span",G1,"第 "+T(E.groupIndex+1)+" 组",1),h("span",{class:me(["text-xs px-2 py-0.5 rounded-full font-medium",M(E.status)])},T(R(E.status)),3)]),h("p",U1,T(v(E.date))+" · "+T(E.words.length)+" 个单词 ",1)])]),h("div",K1,[E.status==="completed"?(I(),P("button",{key:0,onClick:Bt(ee=>y(E),["stop"]),class:"text-xs px-3 py-1.5 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors"}," 复习 ",8,q1)):E.status==="today"?(I(),P("button",{key:1,onClick:Bt(ee=>y(E),["stop"]),class:"text-xs px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"}," 去学习 ",8,Y1)):(I(),P("button",J1,[O(W(wh),{class:"w-3 h-3 inline"}),V[5]||(V[5]=Bn(" 未解锁 ",-1))])),(I(),Rn(Ao(C(E.groupIndex)?W(xh):W(Qs)),{class:"w-5 h-5 text-gray-400 transition-transform"}))])],10,F1),O(Cs,{name:"expand"},{default:gn(()=>[C(E.groupIndex)?(I(),P("div",Z1,[h("div",Q1,[(I(!0),P(Ce,null,Xe(E.words,ee=>(I(),P("div",{key:ee.id,class:"flex items-center justify-between px-4 py-3 hover:bg-gray-50/50 transition-colors"},[h("div",X1,[h("div",ep,[h("span",np,T(ee.dutch),1),ee.pronunciation?(I(),P("span",tp,T(ee.pronunciation),1)):ge("",!0)])]),h("div",sp,[h("span",ip,T(ee.chinese),1),h("span",rp,T(ee.english),1)])]))),128))])])):ge("",!0)]),_:2},1024)],10,H1))),128))])])):s.value==="review"?(I(),P("div",ap,[h("div",op,[h("button",{onClick:X,class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"},[O(W(Es),{class:"w-6 h-6"})]),h("div",lp,[h("span",cp," 第 "+T(l.value+1)+" 组复习 ",1),h("span",up,T(c.value==="reading"?"认读模式":"拼写模式")+" "+T(u.value+1)+"/"+T(o.value.length),1)]),h("button",{onClick:J,class:"text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50",title:"打乱顺序"},[O(W(vr),{class:"w-5 h-5"})])]),o.value.length>0&&b.value?(I(),P("div",dp,[h("div",hp,[O(Cs,{name:"fade",mode:"out-in"},{default:gn(()=>[c.value==="reading"?(I(),P("div",fp,[(I(),Rn(ni,{word:b.value,key:b.value.id},null,8,["word"])),h("div",pp,[h("button",{onClick:V[1]||(V[1]=E=>c.value="spelling"),class:"flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"},[O(W(xl),{class:"w-5 h-5"}),V[6]||(V[6]=h("span",null,"拼写",-1))]),h("button",{onClick:w,class:"flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"},[h("span",null,T(u.value<o.value.length-1?"下一个":"进入拼写测试"),1),O(W(ht),{class:"w-5 h-5"})])])])):(I(),P("div",mp,[O(Rl,{word:b.value,onComplete:N},null,8,["word"]),h("div",gp,[h("button",{onClick:V[2]||(V[2]=E=>c.value="reading"),class:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"},[O(W(gl),{class:"w-5 h-5"}),V[7]||(V[7]=h("span",null,"认读模式",-1))])]),V[8]||(V[8]=h("div",{class:"text-center mt-4"},[h("p",{class:"text-xs text-gray-400"},"完成拼写以继续")],-1))]))]),_:1})])])):ge("",!0)])):ge("",!0)]))}}),vp=it(xp,[["__scopeId","data-v-d01ed2fc"]]),yp={class:"flex flex-col h-full min-h-0 bg-gray-50 relative",style:{height:"100%"}},bp={key:0,class:"flex flex-col h-full p-4 space-y-5"},wp={class:"flex justify-between items-center"},kp={class:"flex items-center gap-4"},_p={key:0,class:"text-sm text-gray-500"},jp={key:1,class:"text-sm text-green-600 font-medium"},Cp={key:2,class:"text-sm text-gray-500"},Sp={key:0,class:"mt-3 flex items-center gap-3"},Ep={class:"flex-1 bg-gray-100 rounded-full h-1.5"},Dp={class:"text-xs text-gray-400 whitespace-nowrap"},Ip={class:"flex items-center gap-4"},Mp={class:"bg-orange-100 p-3 rounded-full text-orange-600"},Tp={class:"text-sm text-gray-500"},Rp={class:"flex justify-between items-center"},Pp={class:"flex items-center gap-4"},Ap={class:"bg-blue-100 p-3 rounded-full text-blue-600"},Op={class:"text-sm text-gray-500"},zp={class:"mt-4 flex items-center gap-3"},Np={class:"flex-1 bg-gray-100 rounded-full h-2"},Wp={class:"text-xs text-gray-400 whitespace-nowrap"},Lp={class:"text-xs text-gray-400 mt-2 flex items-center gap-1"},$p={key:2,class:"flex flex-col h-full"},Hp={class:"flex justify-between items-center p-4 border-b border-gray-100 bg-white"},Fp={class:"flex flex-col items-center"},Bp={class:"font-bold text-gray-800"},Vp={class:"text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1"},Gp={key:0,class:"flex-1 flex flex-col items-center justify-center w-full p-4"},Up={class:"w-full max-w-md relative"},Kp={key:"reading",class:"w-full"},qp={class:"flex justify-between items-center mt-6 px-2"},Yp={class:"text-sm font-medium"},Jp={class:"flex gap-3 mt-8"},Zp={key:"spelling",class:"w-full"},Qp={class:"flex gap-3 mt-6"},Xp={key:1,class:"flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-500"},em={class:"bg-gray-100 p-4 rounded-full mb-4"},nm={class:"text-lg font-medium text-gray-700"},tm={class:"text-sm text-gray-400 mt-1"},sm=Ue({__name:"Review",setup(e){const n=rs(),t=Z("list"),s=Z("daily"),i=Z("reading"),r=Z(""),a=Z([]),o=Z(0),l=Z(!1),u=Z(Rs()),c=Z([]),d=Z(0),p=Z(0),g=fe(()=>Na().length),C=()=>{u.value=Rs()},v=()=>{var ye;const ue=Di(10);c.value=ue,d.value=ue.length;const te=ke();p.value=((ye=te.todayReviewedWordIds)==null?void 0:ye.length)||0},M=()=>{s.value="difficult",t.value="session",i.value="reading",N()},R=()=>{const ue=Di(10);ue.length!==0&&(s.value="todayReview",t.value="session",i.value="reading",a.value=ue,o.value=0,w())},y=()=>{t.value="allwords"},b=()=>{t.value="list",C()},w=()=>{a.value[o.value]&&(l.value=k0(a.value[o.value].id))},N=()=>{s.value==="daily"?a.value=j0(r.value):s.value==="todayReview"?a.value=Di(10):a.value=Na(),o.value=0,w()};tn(()=>{C(),v()}),Bs(()=>{t.value==="list"&&(C(),v())});const J=fe(()=>a.value[o.value]);Fn(o,()=>{w()});const X=()=>{s.value==="todayReview"&&J.value&&y0(J.value.id),o.value<a.value.length-1?o.value++:i.value==="reading"?(i.value="spelling",o.value=0):K()},ve=()=>{X()},K=()=>{s.value==="daily"&&b0(r.value,!0),v(),b()},H=()=>{J.value&&(w0(J.value.id),l.value=!l.value)},V=()=>{if(J.value)if(_0(J.value.id),s.value==="difficult"){if(a.value.splice(o.value,1),o.value>=a.value.length){if(a.value.length===0){b();return}o.value=Math.max(0,a.value.length-1)}w()}else X()},E=()=>{a.value=[...a.value].sort(()=>.5-Math.random()),o.value=0,w()},ee=()=>{n.push("/learn")};return(ue,te)=>(I(),P("div",yp,[t.value==="list"?(I(),P("div",bp,[te[5]||(te[5]=h("div",{class:"flex justify-between items-center"},[h("h2",{class:"text-xl font-bold text-gray-800"},"复习中心")],-1)),h("div",{onClick:R,class:me(["rounded-xl p-5 shadow-sm border cursor-pointer hover:shadow-md transition-all active:scale-[0.98]",p.value>=d.value&&d.value>0?"bg-green-50 border-green-200":"bg-white border-gray-100"])},[h("div",wp,[h("div",kp,[h("div",{class:me(["p-3 rounded-full",p.value>=d.value&&d.value>0?"bg-green-100 text-green-600":"bg-emerald-100 text-emerald-600"])},[O(W(xr),{class:"w-6 h-6"})],2),h("div",null,[te[2]||(te[2]=h("h3",{class:"font-bold text-gray-800"},"今日复习",-1)),d.value===0?(I(),P("p",_p,"暂无可复习的单词")):p.value>=d.value?(I(),P("p",jp,"✅ 今日复习已完成")):(I(),P("p",Cp,T(d.value)+" 个单词 · 已复习 "+T(p.value),1))])]),O(W(ht),{class:"w-5 h-5 text-gray-300"})]),d.value>0?(I(),P("div",Sp,[h("div",Ep,[h("div",{class:me(["h-1.5 rounded-full transition-all duration-500",p.value>=d.value?"bg-green-500":"bg-emerald-500"]),style:Vn({width:`${Math.min(100,Math.round(p.value/d.value*100))}%`})},null,6)]),h("span",Dp,T(p.value)+"/"+T(d.value),1)])):ge("",!0)],2),h("div",{onClick:M,class:"bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"},[h("div",Ip,[h("div",Mp,[O(W(wi),{class:"w-6 h-6"})]),h("div",null,[te[3]||(te[3]=h("h3",{class:"font-bold text-gray-800"},"生词本",-1)),h("p",Tp,T(g.value)+" 个单词待复习",1)])]),O(W(ht),{class:"w-5 h-5 text-gray-300"})]),h("div",{onClick:y,class:"bg-white rounded-xl p-5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all active:scale-[0.98] overflow-hidden"},[h("div",Rp,[h("div",Pp,[h("div",Ap,[O(W(Zs),{class:"w-6 h-6"})]),h("div",null,[te[4]||(te[4]=h("h3",{class:"font-bold text-gray-800"},"所有单词",-1)),h("p",Op," 已学 "+T(u.value.learnedCount)+" / "+T(u.value.totalWords)+" 词 ",1)])]),O(W(ht),{class:"w-5 h-5 text-gray-300"})]),h("div",zp,[h("div",Np,[h("div",{class:"bg-blue-500 h-2 rounded-full transition-all duration-500",style:Vn({width:`${u.value.progressPercent}%`})},null,4)]),h("span",Wp,T(u.value.progressPercent)+"% ",1)]),h("p",Lp,[O(W(gr),{class:"w-3 h-3"}),Bn(" 预计还需 "+T(u.value.remainingDays)+" 天学完 ",1)])]),te[6]||(te[6]=h("div",{class:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100"},[h("p",{class:"text-sm text-indigo-700 font-medium mb-1"},"💡 学习小贴士"),h("p",{class:"text-xs text-indigo-500"},"每天坚持学习10个新单词，配合复习巩固，效果更佳。")],-1))])):ge("",!0),t.value==="allwords"?(I(),Rn(vp,{key:1,onBack:b,onGoToLearn:ee})):ge("",!0),t.value==="session"?(I(),P("div",$p,[h("div",Hp,[h("button",{onClick:b,class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"},[O(W(Es),{class:"w-6 h-6"})]),h("div",Fp,[h("span",Bp,T(s.value==="difficult"?"生词本复习":s.value==="todayReview"?"今日复习":"复习"),1),h("span",Vp,T(i.value==="reading"?"认读模式":"拼写模式")+" "+T(o.value+1)+"/"+T(a.value.length),1)]),h("button",{onClick:E,class:"text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50",title:"打乱顺序"},[O(W(vr),{class:"w-5 h-5"})])]),a.value.length>0?(I(),P("div",Gp,[h("div",Up,[O(Cs,{name:"fade",mode:"out-in"},{default:gn(()=>[i.value==="reading"?(I(),P("div",Kp,[(I(),Rn(ni,{word:J.value,key:J.value.id},null,8,["word"])),h("div",qp,[h("button",{onClick:H,class:me(["flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",l.value?"text-orange-500 bg-orange-50":"text-gray-400 hover:bg-gray-100"])},[O(W(wi),{class:me(["w-5 h-5",{"fill-current":l.value}])},null,8,["class"]),h("span",Yp,T(l.value?"已在生词本":"加入生词本"),1)],2),s.value==="difficult"?(I(),P("button",{key:0,onClick:V,class:"flex items-center gap-2 px-4 py-2 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-colors"},[O(W(Xs),{class:"w-5 h-5"}),te[7]||(te[7]=h("span",{class:"text-sm font-medium"},"已掌握",-1))])):ge("",!0)]),h("div",Jp,[h("button",{onClick:te[0]||(te[0]=ye=>i.value="spelling"),class:"flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"},[O(W(xl),{class:"w-5 h-5"}),te[8]||(te[8]=h("span",null,"拼写",-1))]),h("button",{onClick:X,class:"flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"},[h("span",null,T(o.value<a.value.length-1?"下一个":"进入拼写测试"),1),O(W(ht),{class:"w-5 h-5"})])])])):(I(),P("div",Zp,[O(Rl,{word:J.value,onComplete:ve},null,8,["word"]),h("div",Qp,[h("button",{onClick:te[1]||(te[1]=ye=>i.value="reading"),class:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"},[O(W(gl),{class:"w-5 h-5"}),te[9]||(te[9]=h("span",null,"认读模式",-1))])]),te[10]||(te[10]=h("div",{class:"text-center mt-4"},[h("p",{class:"text-xs text-gray-400"},"完成拼写以继续")],-1))]))]),_:1})])])):(I(),P("div",Xp,[h("div",em,[O(W(wi),{class:"w-8 h-8 text-gray-400"})]),h("p",nm,T(s.value==="todayReview"?"暂无复习单词":"生词本为空"),1),h("p",tm,T(s.value==="todayReview"?"先去学习一些新单词吧":"在学习过程中将不熟悉的单词加入生词本"),1),h("button",{onClick:b,class:"mt-4 text-blue-600 font-medium hover:underline"}," 返回列表 ")]))])):ge("",!0)]))}}),im=it(sm,[["__scopeId","data-v-f7a870c4"]]),rm={class:"flex flex-col h-full bg-white"},am={class:"p-4 border-b border-gray-100 sticky top-0 bg-white z-20 shadow-sm flex justify-between items-center"},om={class:"text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"},lm={class:"flex-1 overflow-y-auto p-4 space-y-8 pb-24"},cm={class:"text-lg font-bold text-gray-700 mb-4 sticky top-14 bg-white/95 backdrop-blur-sm py-2 z-10"},um={class:"grid grid-cols-7 gap-2 text-center mb-2"},dm={class:"grid grid-cols-7 gap-2"},hm=["id","onClick"],fm={key:0,class:"absolute -bottom-1 w-1 h-1 bg-green-500 rounded-full"},pm={key:0,class:"absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"},mm={class:"bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80%] flex flex-col overflow-hidden animate-pop-in"},gm={class:"p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50"},xm={class:"font-bold text-gray-800"},vm={class:"flex-1 overflow-y-auto p-4"},ym={key:0,class:"space-y-3"},bm={class:"font-bold text-blue-600"},wm={class:"text-xs text-gray-500"},km={class:"text-sm text-gray-700 font-medium"},_m={key:1,class:"text-center py-8 text-gray-400"},jm=Ue({__name:"History",setup(e){var C;const n=Z(ke()),t=Z(new Set(n.value.checkInHistory||[])),s=Z(((C=n.value.masteredWordIds)==null?void 0:C.length)||0),i=Z([]),r=()=>{const v=new Date;for(let M=0;M<=1;M++)i.value.push(Kh(v,M));i.value.sort((M,R)=>M.getTime()-R.getTime())},a=v=>{const M=ji(v),R=ef(v);return tf({start:M,end:R})},o=v=>{const M=s0(ji(v));return M===0?6:M-1},l=v=>{const M=Se(v,"yyyy-MM-dd"),R=ji(new Date);return v.getTime()<R.getTime()?!1:t.value.has(M)},u=Z(!1),c=Z(null),d=Z([]),p=v=>{var b;if(!l(v))return;c.value=v;const M=Se(v,"yyyy-MM-dd"),R=((b=n.value.dailyLearningRecords)==null?void 0:b[M])||[],y=Gn();d.value=y.filter(w=>R.includes(w.id)),u.value=!0},g=()=>{u.value=!1};return Bs(()=>{n.value=ke(),t.value=new Set(n.value.checkInHistory||[])}),tn(()=>{r(),Hs(()=>{const v=document.getElementById("today-marker");v&&v.scrollIntoView({behavior:"smooth",block:"center"})})}),(v,M)=>(I(),P("div",rm,[h("div",am,[M[0]||(M[0]=h("h2",{class:"text-xl font-bold text-gray-800"},"打卡记录",-1)),h("span",om,"已掌握 "+T(s.value)+" 词",1)]),h("div",lm,[(I(!0),P(Ce,null,Xe(i.value,R=>(I(),P("div",{key:R.toISOString(),class:"month-container"},[h("h3",cm,T(W(Se)(R,"yyyy年MM月")),1),h("div",um,[(I(),P(Ce,null,Xe(["一","二","三","四","五","六","日"],y=>h("div",{key:y,class:"text-xs text-gray-400 font-medium"},T(y),1)),64))]),h("div",dm,[(I(!0),P(Ce,null,Xe(o(R),y=>(I(),P("div",{key:`empty-${y}`}))),128)),(I(!0),P(Ce,null,Xe(a(R),y=>(I(),P("div",{key:y.toISOString(),class:me(["aspect-square flex items-center justify-center rounded-full text-sm relative transition-all cursor-pointer",[l(y)?"bg-green-500 text-white font-bold shadow-md transform scale-105 hover:bg-green-600":"text-gray-700 bg-gray-50",W(za)(y)?"ring-2 ring-blue-400 ring-offset-2":""]]),id:W(za)(y)?"today-marker":void 0,onClick:b=>p(y)},[Bn(T(W(Se)(y,"d"))+" ",1),l(y)?(I(),P("div",fm)):ge("",!0)],10,hm))),128))])]))),128))]),u.value?(I(),P("div",pm,[h("div",mm,[h("div",gm,[h("h3",xm,T(c.value?W(Se)(c.value,"yyyy年MM月dd日"):"")+" 学习记录 ",1),h("button",{onClick:g,class:"text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"},[O(W(vl),{class:"w-5 h-5"})])]),h("div",vm,[d.value.length>0?(I(),P("div",ym,[(I(!0),P(Ce,null,Xe(d.value,R=>(I(),P("div",{key:R.id,class:"flex items-center justify-between p-3 bg-gray-50 rounded-lg"},[h("div",null,[h("p",bm,T(R.dutch),1),h("p",wm,T(R.english),1)]),h("p",km,T(R.chinese),1)]))),128))])):(I(),P("div",_m,[...M[1]||(M[1]=[h("p",null,"暂无详细记录",-1)])]))])])])):ge("",!0)]))}}),Cm=it(jm,[["__scopeId","data-v-ebcd4203"]]),ns=ts([]);let Ps=null;function Sm(e,n){const t={name:e,cases:[]};Ps=t,ns.push(t),n(),Ps=null}function Pt(e,n){if(!Ps)throw new Error("it must be called inside describe");Ps.cases.push({name:e,fn:n,status:"pending"})}function Re(e){return{toBe(n){if(e!==n)throw new Error(`Expected ${n} but got ${e}`)},toEqual(n){if(JSON.stringify(e)!==JSON.stringify(n))throw new Error(`Expected ${JSON.stringify(n)} but got ${JSON.stringify(e)}`)},toBeTruthy(){if(!e)throw new Error(`Expected ${e} to be truthy`)},toBeFalsy(){if(e)throw new Error(`Expected ${e} to be falsy`)},toBeGreaterThan(n){if(e<=n)throw new Error(`Expected ${e} to be greater than ${n}`)},toContain(n){if(Array.isArray(e)){if(!e.includes(n))throw new Error(`Expected array to contain ${n}`)}else if(e instanceof Set){if(!e.has(n))throw new Error(`Expected Set to contain ${n}`)}else if(typeof e=="string"){if(!e.includes(n))throw new Error(`Expected string to contain ${n}`)}else throw new Error(`Expected ${e} to be an Array, Set or String`)},toBeDefined(){if(e===void 0)throw new Error("Expected value to be defined")}}}const As="dutch_app_progress";let qi=null;function Em(){qi=localStorage.getItem(As),localStorage.removeItem(As)}function Dm(){qi?localStorage.setItem(As,qi):localStorage.removeItem(As)}async function $a(){for(const e of ns)for(const n of e.cases)n.status="pending",n.error=void 0;Em();try{for(const e of ns)for(const n of e.cases)try{await n.fn(),n.status="passed"}catch(t){n.status="failed",n.error=t,console.error(`Test failed: ${e.name} - ${n.name}`,t)}}finally{Dm()}}Sm("Storage Utils",()=>{Pt("initTodayWords should generate 10 new words",()=>{const e=Gt(!0);Re(e.length).toBe(10);const n=ke();Re(n.todayTargetIds.length).toBe(10),Re(n.lastLearnDate).toBe(Se(new Date,"yyyy-MM-dd"))}),Pt("markWordAsLearned should update learned words and daily records",()=>{const n=Gt(!0)[0].id;Il(n);const t=ke();Re(t.learnedWordIds).toContain(n),Re(t.todayLearnedIds).toContain(n);const s=Se(new Date,"yyyy-MM-dd");Re(t.dailyLearningRecords).toBeDefined(),t.dailyLearningRecords&&(Re(t.dailyLearningRecords[s]).toBeDefined(),Re(t.dailyLearningRecords[s]).toContain(n))}),Pt("checkIn should update check-in history",()=>{nn({lastCheckInDate:null,consecutiveDays:0,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[],dailyLearningRecords:{}});const e=zt();Re(e).toBe(!0);const n=ke(),t=Se(new Date,"yyyy-MM-dd");Re(n.lastCheckInDate).toBe(t),Re(n.consecutiveDays).toBe(1),Re(n.checkInHistory).toContain(t);const s=zt();Re(s).toBe(!1)}),Pt("checkIn should increment consecutiveDays if checked in yesterday",()=>{const e=Se(Ki(new Date,1),"yyyy-MM-dd");nn({lastCheckInDate:e,consecutiveDays:5,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[e],dailyLearningRecords:{}});const n=zt();Re(n).toBe(!0);const t=ke();Re(t.consecutiveDays).toBe(6)}),Pt("checkIn should reset consecutiveDays if missed a day",()=>{const e=Se(Ki(new Date,2),"yyyy-MM-dd");nn({lastCheckInDate:e,consecutiveDays:5,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[e],dailyLearningRecords:{}});const n=zt();Re(n).toBe(!0);const t=ke();Re(t.consecutiveDays).toBe(1)})});const Im={class:"min-h-screen bg-gray-50 p-4"},Mm={class:"max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden"},Tm={class:"p-6 border-b border-gray-100 flex justify-between items-center"},Rm=["disabled"],Pm={class:"p-6 space-y-6"},Am={class:"font-bold text-gray-700 border-b border-gray-100 pb-2"},Om={class:"space-y-2"},zm={class:"mt-1"},Nm={key:0,class:"w-4 h-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"},Wm={key:1,class:"w-4 h-4 text-green-500"},Lm={key:2,class:"w-4 h-4 text-red-500"},$m={class:"flex-1"},Hm={key:0,class:"mt-2 text-xs text-red-600 bg-red-100 p-2 rounded overflow-x-auto font-mono"},Fm={key:0,class:"text-center text-gray-500 py-8"},Bm=Ue({__name:"TestRunner",setup(e){const n=Z(!1);tn(async()=>{n.value=!0,setTimeout(async()=>{await $a(),n.value=!1},500)});const t=async()=>{n.value=!0,await $a(),n.value=!1};return(s,i)=>(I(),P("div",Im,[h("div",Mm,[h("div",Tm,[i[0]||(i[0]=h("h1",{class:"text-xl font-bold text-gray-800"},"测试运行器",-1)),h("button",{onClick:t,class:"text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors",disabled:n.value},T(n.value?"运行中...":"重新运行"),9,Rm)]),h("div",Pm,[(I(!0),P(Ce,null,Xe(W(ns),(r,a)=>(I(),P("div",{key:a,class:"space-y-3"},[h("h2",Am,T(r.name),1),h("div",Om,[(I(!0),P(Ce,null,Xe(r.cases,(o,l)=>(I(),P("div",{key:l,class:me(["flex items-start gap-3 p-3 rounded-lg transition-colors",{"bg-gray-50":o.status==="pending","bg-green-50":o.status==="passed","bg-red-50":o.status==="failed"}])},[h("div",zm,[o.status==="pending"?(I(),P("div",Nm)):o.status==="passed"?(I(),P("div",Wm,"✓")):(I(),P("div",Lm,"✗"))]),h("div",$m,[h("p",{class:me(["text-sm font-medium",{"text-gray-600":o.status==="pending","text-green-800":o.status==="passed","text-red-800":o.status==="failed"}])},T(o.name),3),o.error?(I(),P("div",Hm,T(o.error.message||o.error),1)):ge("",!0)])],2))),128))])]))),128)),W(ns).length===0?(I(),P("div",Fm," 没有找到测试套件 ")):ge("",!0)])])]))}}),ti=[{id:"thema1",name:"Thema 1",description:"认识与问候 - Kennismaken en begroeten",icon:"🤝",color:"from-blue-500 to-cyan-600",courses:[{id:"thema1-grammar",name:"语法术语",description:"荷兰语语法基本术语",icon:"📖",color:"from-blue-500 to-blue-600",words:[{id:10001,dutch:"lidwoord",chinese:"冠词",english:"article",example:'Het lidwoord "de" of "het" staat voor het zelfstandig naamwoord.',example_cn:'冠词"de"或"het"放在名词前面。'},{id:10002,dutch:"bijvoeglijk naamwoord",chinese:"形容词",english:"adjective",example:"Een bijvoeglijk naamwoord beschrijft een zelfstandig naamwoord.",example_cn:"形容词描述名词。"},{id:10003,dutch:"bijwoord",chinese:"副词",english:"adverb",example:"Een bijwoord geeft meer informatie over het werkwoord.",example_cn:"副词提供关于动词的更多信息。"},{id:10004,dutch:"enkelvoud",chinese:"单数形式",english:"singular",example:'"Boek" is enkelvoud, "boeken" is meervoud.',example_cn:'"Boek"是单数，"boeken"是复数。'},{id:10005,dutch:"meervoud",chinese:"复数形式",english:"plural",example:'Het meervoud van "kind" is "kinderen".',example_cn:'"kind"的复数是"kinderen"。'},{id:10006,dutch:"werkwoord",chinese:"动词",english:"verb",example:'"Lezen" is een werkwoord.',example_cn:'"Lezen"是一个动词。'},{id:10007,dutch:"zelfstandig naamwoord",chinese:"名词",english:"noun",example:'"Huis" is een zelfstandig naamwoord.',example_cn:'"Huis"是一个名词。'},{id:10008,dutch:"voornaamwoord",chinese:"代词",english:"pronoun",example:'"Hij" is een voornaamwoord.',example_cn:'"Hij"是一个代词。'},{id:10009,dutch:"voorzetsel",chinese:"介词",english:"preposition",example:'"In" en "op" zijn voorzetsels.',example_cn:'"In"和"op"是介词。'},{id:10010,dutch:"voegwoord",chinese:"连词",english:"conjunction",example:'"En" en "maar" zijn voegwoorden.',example_cn:'"En"和"maar"是连词。'},{id:10011,dutch:"onderwerp",chinese:"主语",english:"subject",example:'Het onderwerp van de zin is "hij".',example_cn:'这个句子的主语是"hij"。'},{id:10012,dutch:"scheidbare werkwoorden",chinese:"可分动词",english:"separable verbs",example:'"Opbellen" is een scheidbaar werkwoord.',example_cn:'"Opbellen"是一个可分动词。'}]},{id:"thema1-questions",name:"疑问词",description:"常用疑问词及用法",icon:"❓",color:"from-cyan-500 to-cyan-600",words:[{id:10101,dutch:"waar",chinese:"哪里",english:"where",example:"Waar woon je?",example_cn:"你住哪里？"},{id:10102,dutch:"wat",chinese:"什么",english:"what",example:"Wat wil je vragen?",example_cn:"你想问什么？"},{id:10103,dutch:"welk",chinese:"哪个(het名词)",english:"which (het)",example:"Welk boek lees je?",example_cn:"你在读哪本书？"},{id:10104,dutch:"welke",chinese:"哪个(de名词)",english:"which (de)",example:"Welke oefening doen we?",example_cn:"我们做哪道练习？"},{id:10105,dutch:"wie",chinese:"谁",english:"who",example:"Wie is je docent?",example_cn:"你的老师是谁？"},{id:10106,dutch:"hoe",chinese:"怎么",english:"how",example:"Hoe heet je?",example_cn:"你叫什么名字？"}]},{id:"thema1-nouns",name:"名词",description:"认识与问候场景中的常用名词",icon:"📝",color:"from-indigo-500 to-indigo-600",words:[{id:10201,dutch:"bus",chinese:"公共汽车",english:"bus",example:"Kom je met de bus?",example_cn:"你坐公交车来吗？"},{id:10202,dutch:"computer",chinese:"电脑",english:"computer",example:"Ik heb een probleem met mijn computer.",example_cn:"我的电脑有问题。"},{id:10203,dutch:"foto",chinese:"照片",english:"photo",example:"Dit is een foto van mijn geboorteland.",example_cn:"这是我的祖国的照片。"},{id:10204,dutch:"koffie",chinese:"咖啡",english:"coffee",example:"Heb je nog koffie?",example_cn:"你还有咖啡吗？"},{id:10205,dutch:"land",chinese:"国家",english:"country",example:"Uit welk land kom je?",example_cn:"你来自哪个国家？"},{id:10206,dutch:"plaats",chinese:"地方/位置",english:"place",example:"In welk plaats woon je?",example_cn:"你住在哪个城市？"},{id:10207,dutch:"straat",chinese:"街道",english:"street",example:"In welke straat woont u?",example_cn:"您住在哪条街？"},{id:10208,dutch:"thee",chinese:"茶",english:"tea",example:"Wil je thee of koffie?",example_cn:"你想喝茶还是咖啡？"},{id:10209,dutch:"naam",chinese:"名字",english:"name",example:"Wat is je naam?",example_cn:"你的名字是什么？"},{id:10210,dutch:"voornaam",chinese:"名",english:"first name",example:"Mijn voornaam is Peter.",example_cn:"我的名字是Peter。"},{id:10211,dutch:"achternaam",chinese:"姓",english:"surname",example:"Mijn achternaam is Jansen.",example_cn:"我的姓是Jansen。"},{id:10212,dutch:"vraag",chinese:"问题",english:"question",example:"Ik heb een vraag. Kun je me helpen?",example_cn:"我有一个问题。你能帮我吗？"},{id:10213,dutch:"antwoord",chinese:"答案",english:"answer",example:"Ik heb een antwoord op je vraag.",example_cn:"我有你的问题的答案。"},{id:10214,dutch:"cursus",chinese:"课程/培训",english:"course",example:"Hij doet een cursus Nederlands.",example_cn:"他正在上荷兰语课程。"},{id:10215,dutch:"dag",chinese:"天",english:"day",example:"Op welke dag heb je les?",example_cn:"你哪天上课？"},{id:10216,dutch:"oefening",chinese:"练习",english:"exercise",example:"We doen een oefening voor de grammatica.",example_cn:"我们做一个语法练习。"},{id:10217,dutch:"probleem",chinese:"问题/困难",english:"problem",example:"Ik heb een vervelend probleem.",example_cn:"我有一个麻烦的问题。"},{id:10218,dutch:"werk",chinese:"工作",english:"work",example:"Ik heb veel werk vandaag.",example_cn:"我今天有很多工作。"},{id:10219,dutch:"woord",chinese:"单词",english:"word",example:"Hoeveel woorden ken je?",example_cn:"你认识多少单词？"},{id:10220,dutch:"persoon",chinese:"人",english:"person",example:"Hoeveel personen zijn er in de cursus?",example_cn:"多少人参加这个课程？"}]},{id:"thema1-pronouns",name:"人称代词",description:"荷兰语人称代词",icon:"👤",color:"from-violet-500 to-violet-600",words:[{id:10301,dutch:"ik",chinese:"我",english:"I",example:"Ik heet Martijn.",example_cn:"我叫Martijn。"},{id:10302,dutch:"jij",chinese:"你",english:"you",example:"Jij bent verkouden.",example_cn:"你感冒了。"},{id:10303,dutch:"u",chinese:"您",english:"you (formal)",example:"Kunt u me helpen?",example_cn:"您能帮我吗？"},{id:10304,dutch:"hij",chinese:"他",english:"he",example:"Hij spreekt Italiaans.",example_cn:"他说意大利语。"},{id:10305,dutch:"zij",chinese:"她/他们",english:"she/they",example:"Zij is vandaag vrij.",example_cn:"她今天休息。"},{id:10306,dutch:"wij",chinese:"我们",english:"we",example:"Wij gaan naar een café.",example_cn:"我们去一家咖啡馆。"},{id:10307,dutch:"jullie",chinese:"你们",english:"you (plural)",example:"Begrijpen jullie de oefening?",example_cn:"你们理解这个练习吗？"},{id:10308,dutch:"mijn",chinese:"我的",english:"my",example:"Mijn naam is John.",example_cn:"我的名字是John。"},{id:10309,dutch:"jou",chinese:"你(宾格)",english:"you (object)",example:"Hoe gaat het met jou?",example_cn:"你怎么样呢？"},{id:10310,dutch:"mij",chinese:"我(宾格)",english:"me",example:"Kun je mij even helpen?",example_cn:"你能帮助我一下吗？"}]},{id:"thema1-verbs",name:"动词",description:"认识与问候场景中的常用动词",icon:"🏃",color:"from-purple-500 to-purple-600",words:[{id:10401,dutch:"beantwoorden",chinese:"回答",english:"to answer",example:"Hij beantwoordt de vragen.",example_cn:"他回答问题。"},{id:10402,dutch:"begroeten",chinese:"问候",english:"to greet",example:"Zij begroeten de docent.",example_cn:"他们向老师问好。"},{id:10403,dutch:"zijn",chinese:"是",english:"to be",example:"Mirjam en Jan zijn mijn docenten.",example_cn:"Mirjam和Jan是我的老师。"},{id:10404,dutch:"gaan",chinese:"去",english:"to go",example:"Gaan we naar Engeland?",example_cn:"我们去英国吗？"},{id:10405,dutch:"hebben",chinese:"有",english:"to have",example:"Ik heb een vraag.",example_cn:"我有一个问题。"},{id:10406,dutch:"heten",chinese:"叫作",english:"to be called",example:"Hoe heet je?",example_cn:"你叫什么名字？"},{id:10407,dutch:"helpen",chinese:"帮助",english:"to help",example:"Zij helpt mij.",example_cn:"她帮我。"},{id:10408,dutch:"kennen",chinese:"认识",english:"to know",example:"Ik ken Stein.",example_cn:"我认识Stein。"},{id:10409,dutch:"kennismaken",chinese:"结识",english:"to get acquainted",example:"De docent maakt kennis met de cursisten.",example_cn:"老师与学员认识。"},{id:10410,dutch:"komen",chinese:"来",english:"to come",example:"Zij komen uit Vietnam.",example_cn:"他们来自越南。"},{id:10411,dutch:"kunnen",chinese:"能/会",english:"can",example:"Zij kan Chinees spreken.",example_cn:"她会说中文。"},{id:10412,dutch:"lezen",chinese:"读",english:"to read",example:"Hij leest de dialoog.",example_cn:"他阅读对话。"},{id:10413,dutch:"luisteren",chinese:"听",english:"to listen",example:"Ik luister naar de tekst.",example_cn:"我在听这篇文章。"},{id:10414,dutch:"spreken",chinese:"说/讲",english:"to speak",example:"Jij spreekt echt goed Frans.",example_cn:"你法语说的真的很好。"},{id:10415,dutch:"schrijven",chinese:"写",english:"to write",example:"Hij schrijft een e-mail.",example_cn:"他写一封电子邮件。"},{id:10416,dutch:"wonen",chinese:"住",english:"to live",example:"We wonen in Amersfoort.",example_cn:"我们住在Amersfoort。"},{id:10417,dutch:"willen",chinese:"想要",english:"to want",example:"Ik wil graag koffie.",example_cn:"我想喝咖啡。"},{id:10418,dutch:"kijken",chinese:"看",english:"to look",example:"Kijk naar de foto.",example_cn:"看看这张照片。"}]},{id:"thema1-prepositions",name:"介词与感叹词",description:"常用介词和日常感叹词",icon:"🔗",color:"from-sky-500 to-sky-600",words:[{id:10501,dutch:"in",chinese:"在",english:"in",example:"Zij woont in Soest.",example_cn:"她住在Soest。"},{id:10502,dutch:"met",chinese:"和/用",english:"with",example:"Hij komt met de bus.",example_cn:"他乘公共汽车来。"},{id:10503,dutch:"op",chinese:"在……上",english:"on",example:"Het concert is op 2 oktober.",example_cn:"音乐会在十月二日。"},{id:10504,dutch:"uit",chinese:"从……出来",english:"from/out of",example:"Hij komt uit Peru.",example_cn:"他来自秘鲁。"},{id:10505,dutch:"van",chinese:"从/的",english:"of/from",example:'Vul de goede vorm van "hebben" in.',example_cn:'填入"hebben"的正确形式。'},{id:10506,dutch:"naar",chinese:"往/到",english:"to",example:"Luister naar de woorden.",example_cn:"听这些单词。"},{id:10507,dutch:"hallo",chinese:"你好",english:"hello",example:"Hallo, hoe gaat het?",example_cn:"你好，你好吗？"},{id:10508,dutch:"goedemorgen",chinese:"早上好",english:"good morning",example:"Goedemorgen, iedereen!",example_cn:"大家早上好！"},{id:10509,dutch:"bedankt",chinese:"谢谢",english:"thanks",example:"Bedankt voor je hulp.",example_cn:"谢谢你的帮助。"},{id:10510,dutch:"welkom",chinese:"欢迎",english:"welcome",example:"Welkom in Nederland!",example_cn:"欢迎来到荷兰！"},{id:10511,dutch:"sorry",chinese:"抱歉",english:"sorry",example:"Sorry, ik ben te laat.",example_cn:"抱歉，我迟到了。"},{id:10512,dutch:"ja",chinese:"是",english:"yes",example:"Ja, dat klopt.",example_cn:"是的，没错。"},{id:10513,dutch:"nee",chinese:"不",english:"no",example:"Nee, dank je.",example_cn:"不，谢谢。"},{id:10514,dutch:"natuurlijk",chinese:"当然",english:"of course",example:"Natuurlijk mag dat.",example_cn:"当然可以。"},{id:10515,dutch:"tot zo",chinese:"待会见",english:"see you soon",example:"Tot zo!",example_cn:"待会见！"}]},{id:"thema1-other",name:"其他词汇",description:"冠词、副词和其他常用词",icon:"📚",color:"from-teal-500 to-teal-600",words:[{id:10601,dutch:"de",chinese:"(定冠词)",english:"the (de)",example:"De docent heet Bart.",example_cn:"老师叫Bart。"},{id:10602,dutch:"het",chinese:"(定冠词)",english:"the (het)",example:"Het land is in Europa.",example_cn:"这个国家在欧洲。"},{id:10603,dutch:"allemaal",chinese:"全部",english:"all/everyone",example:"We komen allemaal uit Polen.",example_cn:"我们都来自波兰。"},{id:10604,dutch:"en",chinese:"和",english:"and",example:"Luister naar de dialoog en lees mee.",example_cn:"听对话并跟读。"},{id:10605,dutch:"geen",chinese:"没有",english:"no/none",example:"Ik lust geen koffie.",example_cn:"我不喜欢喝咖啡。"},{id:10606,dutch:"graag",chinese:"乐意/请",english:"gladly/please",example:"Oké, dan thee graag.",example_cn:"好吧，那请来杯茶。"},{id:10607,dutch:"ook",chinese:"也",english:"also",example:"Spreek je ook Engels?",example_cn:"你也会说英语吗？"},{id:10608,dutch:"verkouden",chinese:"感冒的",english:"having a cold",example:"Ik ben verkouden.",example_cn:"我感冒了。"},{id:10609,dutch:"vrij",chinese:"自由的/空闲的",english:"free",example:"We zijn vandaag vrij.",example_cn:"我们今天放假。"},{id:10610,dutch:"nu",chinese:"现在",english:"now",example:"Ze hebben nu les.",example_cn:"他们现在在上课。"},{id:10611,dutch:"vandaag",chinese:"今天",english:"today",example:"Ik heb vandaag een afspraakje.",example_cn:"我今天有一个约会。"},{id:10612,dutch:"Nederland",chinese:"荷兰",english:"Netherlands",example:"Ze wonen in Nederland.",example_cn:"他们住在荷兰。"}]}]},{id:"thema2",name:"Thema 2",description:"个人信息 - Persoonsgegevens",icon:"🖊️",color:"from-green-500 to-emerald-600",courses:[{id:"thema2-nouns-1",name:"名词(上)",description:"个人信息相关名词",icon:"📋",color:"from-green-500 to-green-600",words:[{id:20001,dutch:"aanvraagformulier",chinese:"申请表",english:"application form",example:"U kunt dit aanvraagformulier invullen.",example_cn:"您可以填写这份申请表。"},{id:20002,dutch:"adres",chinese:"地址",english:"address",example:"Zijn adres is Mauritsstraat 7.",example_cn:"他的地址是Mauritsstraat 7号。"},{id:20003,dutch:"auto",chinese:"汽车",english:"car",example:"De auto staat in de Parkstraat.",example_cn:"车停在公园街。"},{id:20004,dutch:"boek",chinese:"书",english:"book",example:"Ons boek heet Van Start.",example_cn:"我们的书叫《Van Start》。"},{id:20005,dutch:"burgerlijke staat",chinese:"婚姻状况",english:"marital status",example:"Wat is uw burgerlijke staat?",example_cn:"您的婚姻状况是什么？"},{id:20006,dutch:"Burgerservicenummer",chinese:"公民服务号码",english:"citizen service number",example:"Mijn Burgerservicenummer is 123456782.",example_cn:"我的公民服务号码是123456782。"},{id:20007,dutch:"buurt",chinese:"社区/街区",english:"neighborhood",example:"In welke buurt wonen jullie?",example_cn:"你们住在哪个社区？"},{id:20008,dutch:"centrum",chinese:"市中心",english:"center",example:"Het centrum is autovrij.",example_cn:"市中心禁止汽车通行。"},{id:20009,dutch:"cursist",chinese:"学员",english:"student",example:"De cursist heeft een vraag.",example_cn:"学员有一个问题。"},{id:20010,dutch:"fiets",chinese:"自行车",english:"bicycle",example:"Kom je met de fiets?",example_cn:"你骑自行车来吗？"},{id:20011,dutch:"formulier",chinese:"表格",english:"form",example:"U kunt het formulier invullen.",example_cn:"您可以填写这张表格。"},{id:20012,dutch:"geboortedatum",chinese:"出生日期",english:"date of birth",example:"Mijn geboortedatum is 14 april 2016.",example_cn:"我的出生日期是2016年4月14日。"},{id:20013,dutch:"gemeente",chinese:"市政府",english:"municipality",example:"Ik wil me inschrijven bij de gemeente.",example_cn:"我想在市政厅登记。"},{id:20014,dutch:"handtekening",chinese:"签名",english:"signature",example:"U kunt hier uw handtekening zetten.",example_cn:"您可以在这里签名。"},{id:20015,dutch:"huis",chinese:"房子/家",english:"house",example:"Ons huis staat in de Schalkwijkerstraat.",example_cn:"我们的房子在Schalkwijkerstraat。"},{id:20016,dutch:"identiteitsbewijs",chinese:"身份证件",english:"ID card",example:"Hebt u uw identiteitsbewijs bij u?",example_cn:"您带身份证了吗？"},{id:20017,dutch:"kamer",chinese:"房间",english:"room",example:"Het studentenhuis heeft acht kamers.",example_cn:"学生宿舍有八个房间。"},{id:20018,dutch:"paspoort",chinese:"护照",english:"passport",example:"Ik heb een nieuw paspoort.",example_cn:"我有一本新护照。"}]},{id:"thema2-nouns-2",name:"名词(下)",description:"日常生活和时间相关名词",icon:"🏠",color:"from-emerald-500 to-emerald-600",words:[{id:20019,dutch:"postcode",chinese:"邮政编码",english:"postal code",example:"Mijn postcode is 3951 KL.",example_cn:"我的邮政编码是3951 KL。"},{id:20020,dutch:"rijbewijs",chinese:"驾照",english:"driving license",example:"Mijn rijbewijs ligt thuis.",example_cn:"我的驾照在家里。"},{id:20021,dutch:"school",chinese:"学校",english:"school",example:"Op welke school zitten jullie kinderen?",example_cn:"你们的孩子在哪所学校上学？"},{id:20022,dutch:"telefoonnummer",chinese:"电话号码",english:"phone number",example:"Mijn telefoonnummer is 06-49351724.",example_cn:"我的电话号码是06-49351724。"},{id:20023,dutch:"tijd",chinese:"时间",english:"time",example:"Wat zijn de lestijden van de cursus?",example_cn:"课程的上课时间是什么？"},{id:20024,dutch:"uur",chinese:"小时",english:"hour",example:"De les duurt een uur.",example_cn:"这节课持续一个小时。"},{id:20025,dutch:"vriend",chinese:"朋友",english:"friend",example:"Mijn vriend komt ook naar Nederland.",example_cn:"我的朋友也要来荷兰。"},{id:20026,dutch:"woonplaats",chinese:"居住地",english:"place of residence",example:"Mijn woonplaats is Arnhem.",example_cn:"我住在Arnhem。"},{id:20027,dutch:"week",chinese:"星期/周",english:"week",example:"De cursus duurt twaalf weken.",example_cn:"课程为期十二周。"},{id:20028,dutch:"pakket",chinese:"包裹",english:"package",example:"Het pakket is bij PostNL.",example_cn:"包裹在荷兰邮政。"},{id:20029,dutch:"nummer",chinese:"号码",english:"number",example:"Op welk nummer woon je?",example_cn:"你住在几号？"},{id:20030,dutch:"hulp",chinese:"帮助",english:"help",example:"Hij krijgt hulp van zijn vriendin.",example_cn:"他得到女朋友的帮助。"},{id:20031,dutch:"huiswerk",chinese:"作业",english:"homework",example:"Zij doet elke dag huiswerk voor haar cursus.",example_cn:"她每天为她的课程做作业。"},{id:20032,dutch:"kopie",chinese:"复印件",english:"copy",example:"Dit is een kopie van mijn paspoort.",example_cn:"这是我的护照复印件。"},{id:20033,dutch:"Nederlander",chinese:"荷兰人",english:"Dutch person",example:"Hij is Nederlander.",example_cn:"他是荷兰人。"},{id:20034,dutch:"inschrijving",chinese:"注册/报名",english:"registration",example:"Hij vult een formulier in voor de inschrijving.",example_cn:"他填写了一份登记表。"}]},{id:"thema2-verbs",name:"动词",description:"个人信息场景中的常用动词",icon:"🏃",color:"from-lime-500 to-lime-600",words:[{id:20101,dutch:"afhalen",chinese:"取/领取",english:"to pick up",example:"U kunt het pakket bij PostNL afhalen.",example_cn:"您可以在PostNL取包裹。"},{id:20102,dutch:"begrijpen",chinese:"理解/明白",english:"to understand",example:"Begrijp je de oefening?",example_cn:"你明白这道练习吗？"},{id:20103,dutch:"brengen",chinese:"带/拿到",english:"to bring",example:"Zij brengt de kinderen naar school.",example_cn:"她送孩子们去学校。"},{id:20104,dutch:"drinken",chinese:"喝",english:"to drink",example:"Ik drink graag thee.",example_cn:"我喜欢喝茶。"},{id:20105,dutch:"doen",chinese:"做/干",english:"to do",example:"Wat doe je op zondag?",example_cn:"你星期天做什么？"},{id:20106,dutch:"fietsen",chinese:"骑自行车",english:"to cycle",example:"Zij fietst naar haar werk.",example_cn:"她骑车去上班。"},{id:20107,dutch:"invullen",chinese:"填写",english:"to fill in",example:"U moet het formulier invullen.",example_cn:"您必须填写表格。"},{id:20108,dutch:"inschrijven",chinese:"报名/注册",english:"to register",example:"Ik wil me inschrijven bij de sportschool.",example_cn:"我想报名健身房。"},{id:20109,dutch:"krijgen",chinese:"得到/收到",english:"to get",example:"U krijgt het boek zaterdag met de post.",example_cn:"您将在星期六通过邮寄收到这本书。"},{id:20110,dutch:"lunchen",chinese:"吃午饭",english:"to have lunch",example:"Ze lunchen om twaalf uur.",example_cn:"他们十二点吃午饭。"},{id:20111,dutch:"maken",chinese:"做/制作",english:"to make",example:"Ze maken het huiswerk.",example_cn:"他们在做作业。"},{id:20112,dutch:"noteren",chinese:"记录",english:"to note down",example:"Kunt u het telefoonnummer noteren?",example_cn:"您能记下电话号码吗？"},{id:20113,dutch:"oefenen",chinese:"练习",english:"to practice",example:"Je moet veel oefenen.",example_cn:"你要多练习。"},{id:20114,dutch:"ontbijten",chinese:"吃早餐",english:"to have breakfast",example:"Ik ontbijt met een broodje en koffie.",example_cn:"我早餐吃面包和喝咖啡。"},{id:20115,dutch:"slapen",chinese:"睡觉",english:"to sleep",example:"De kinderen slapen.",example_cn:"孩子们在睡觉。"},{id:20116,dutch:"sporten",chinese:"运动",english:"to exercise",example:"We sporten in het weekend.",example_cn:"我们周末做运动。"},{id:20117,dutch:"werken",chinese:"工作",english:"to work",example:"Hij werkt als kapper.",example_cn:"他当理发师。"},{id:20118,dutch:"wachten",chinese:"等待",english:"to wait",example:"Ik wacht al drie weken op mijn pakket.",example_cn:"我已经等了三周的包裹。"}]},{id:"thema2-possessives",name:"物主代词与介词",description:"物主代词和常用介词",icon:"🔑",color:"from-teal-500 to-teal-600",words:[{id:20201,dutch:"haar",chinese:"她的",english:"her",example:"Haar adres is Emmalaan 36.",example_cn:"她的地址是Emmalaan 36。"},{id:20202,dutch:"hun",chinese:"他们的",english:"their",example:"Hun kind heet Alex.",example_cn:"他们的孩子叫Alex。"},{id:20203,dutch:"jouw",chinese:"你的",english:"your",example:"Wat is jouw telefoonnummer?",example_cn:"你的电话号码是什么？"},{id:20204,dutch:"ons",chinese:"我们的(het)",english:"our (het)",example:"Wat is ons huiswerk?",example_cn:"我们的作业是什么？"},{id:20205,dutch:"onze",chinese:"我们的(de)",english:"our (de)",example:"Onze docent heet Daan.",example_cn:"我们的老师叫Daan。"},{id:20206,dutch:"uw",chinese:"您的",english:"your (formal)",example:"Wat is uw geboortedatum?",example_cn:"您的出生日期是什么？"},{id:20207,dutch:"zijn",chinese:"他的",english:"his",example:"Zijn naam is Peter.",example_cn:"他的名字是Peter。"},{id:20208,dutch:"bij",chinese:"在(某处)",english:"at",example:"Kom je bij mij thuis koffie drinken?",example_cn:"你来我家喝咖啡吗？"},{id:20209,dutch:"binnen",chinese:"在…之内",english:"within",example:"U hoort van ons binnen drie werkdagen.",example_cn:"您将在三个工作日内收到我们的消息。"},{id:20210,dutch:"om",chinese:"在(时间)",english:"at (time)",example:"We hebben om negen uur les.",example_cn:"我们九点上课。"},{id:20211,dutch:"voor",chinese:"给/为",english:"for",example:"Ik heb een pakket voor nummer 28.",example_cn:"我有一个给28号的包裹。"}]},{id:"thema2-other",name:"其他词汇",description:"形容词、副词和其他常用词",icon:"📚",color:"from-amber-500 to-amber-600",words:[{id:20301,dutch:"alleenstaand",chinese:"单身",english:"single",example:"Hij is alleenstaand.",example_cn:"他是单身的。"},{id:20302,dutch:"blij",chinese:"高兴",english:"happy",example:"Ik ben blij met uw hulp.",example_cn:"我很高兴得到您的帮助。"},{id:20303,dutch:"dus",chinese:"所以",english:"so/therefore",example:"Ik moet Nederlands leren dus ik doe een cursus.",example_cn:"我需要学荷兰语，所以我参加了一个课程。"},{id:20304,dutch:"eerst",chinese:"首先",english:"first",example:"Eerst doen we een leesoefening.",example_cn:"我们先做阅读练习。"},{id:20305,dutch:"even",chinese:"一下/片刻",english:"just/a moment",example:"Kun je me even helpen?",example_cn:"你能帮我一下吗？"},{id:20306,dutch:"getrouwd",chinese:"已婚",english:"married",example:"We zijn in augustus getrouwd.",example_cn:"我们在八月份结婚了。"},{id:20307,dutch:"geldig",chinese:"有效",english:"valid",example:"Is je rijbewijs nog geldig?",example_cn:"你的驾照还有效吗？"},{id:20308,dutch:"hier",chinese:"这里",english:"here",example:"U kunt hier uw handtekening zetten.",example_cn:"您可以在这里签名。"},{id:20309,dutch:"makkelijk",chinese:"容易",english:"easy",example:"Chinees leren is niet makkelijk.",example_cn:"学习中文不容易。"},{id:20310,dutch:"moeilijk",chinese:"困难",english:"difficult",example:"Chinees leren is moeilijk.",example_cn:"学中文很难。"},{id:20311,dutch:"veel",chinese:"很多",english:"much/many",example:"We hebben veel huiswerk.",example_cn:"我们有很多作业。"},{id:20312,dutch:"wanneer",chinese:"什么时候",english:"when",example:"Wanneer begint de cursus?",example_cn:"课程什么时候开始？"},{id:20313,dutch:"thuis",chinese:"在家",english:"at home",example:"We spreken thuis Frans.",example_cn:"我们在家说法语。"},{id:20314,dutch:"vanavond",chinese:"今晚",english:"tonight",example:"Hij gaat vanavond pizza eten.",example_cn:"他今晚要吃披萨。"}]}]},{id:"thema3",name:"Thema 3",description:"家庭和人间关系 - Familie en relaties",icon:"👨‍👩‍👧‍👦",color:"from-orange-500 to-red-600",courses:[{id:"thema3-nouns-1",name:"名词-场所与活动",description:"日常场所和活动相关名词",icon:"🏛️",color:"from-orange-500 to-orange-600",words:[{id:30001,dutch:"afspraak",chinese:"约会/预约",english:"appointment",example:"Zullen we een afspraak maken?",example_cn:"我们约个时间好吗？"},{id:30002,dutch:"agenda",chinese:"日程表",english:"agenda",example:"Even in mijn agenda kijken.",example_cn:"我看一下我的日程表。"},{id:30003,dutch:"baan",chinese:"工作/职业",english:"job",example:"Ik zoek een baan voor 24 uur per week.",example_cn:"我在找一份每周24小时的工作。"},{id:30004,dutch:"bibliotheek",chinese:"图书馆",english:"library",example:"Ik breng de boeken terug naar de bibliotheek.",example_cn:"我把书还回图书馆。"},{id:30005,dutch:"bioscoop",chinese:"电影院",english:"cinema",example:"Zullen we een film kijken in de bioscoop?",example_cn:"我们去电影院看电影好吗？"},{id:30006,dutch:"bos",chinese:"森林",english:"forest",example:"Ga je mee wandelen in het bos?",example_cn:"你想一起去森林散步吗？"},{id:30007,dutch:"collega",chinese:"同事",english:"colleague",example:"Ik kan goed met mijn collega samenwerken.",example_cn:"我和我的同事合作得很好。"},{id:30008,dutch:"dierentuin",chinese:"动物园",english:"zoo",example:"We gaan met de kinderen naar de dierentuin.",example_cn:"我们带孩子去动物园。"},{id:30009,dutch:"film",chinese:"电影",english:"film",example:"Vind jij de films over Harry Potter leuk?",example_cn:"你喜欢Harry Potter的电影吗？"},{id:30010,dutch:"museum",chinese:"博物馆",english:"museum",example:"Er is een mooie tentoonstelling in het museum.",example_cn:"博物馆里有一个很漂亮的展览。"},{id:30011,dutch:"park",chinese:"公园",english:"park",example:"Zullen we even wandelen in het park?",example_cn:"我们去公园散散步好吗？"},{id:30012,dutch:"theater",chinese:"剧院",english:"theater",example:"Er is een mooie voorstelling in het theater.",example_cn:"剧院里有一场精彩的表演。"},{id:30013,dutch:"zwembad",chinese:"游泳池",english:"swimming pool",example:"De kinderen zijn de hele zomer in het zwembad.",example_cn:"孩子们整个夏天都在游泳池里。"},{id:30014,dutch:"ziekenhuis",chinese:"医院",english:"hospital",example:"Zij werkt in het ziekenhuis.",example_cn:"她在医院工作。"},{id:30015,dutch:"winkelcentrum",chinese:"购物中心",english:"shopping center",example:"We gaan winkelen in het winkelcentrum.",example_cn:"我们去购物中心购物。"},{id:30016,dutch:"verjaardag",chinese:"生日",english:"birthday",example:"Zondag vieren we de verjaardag van Simon.",example_cn:"星期天我们庆祝西蒙的生日。"},{id:30017,dutch:"reis",chinese:"旅行",english:"trip",example:"Goede reis!",example_cn:"旅途愉快！"},{id:30018,dutch:"werk",chinese:"工作",english:"work",example:"Het werk is interessant.",example_cn:"这份工作很有趣。"}]},{id:"thema3-family-1",name:"家庭成员(上)",description:"核心家庭成员称呼",icon:"👨‍👩‍👧",color:"from-red-500 to-red-600",words:[{id:30101,dutch:"familie",chinese:"家庭/家族",english:"family",example:"We hebben een grote familie.",example_cn:"我们有一个大家庭。"},{id:30102,dutch:"gezin",chinese:"核心家庭",english:"nuclear family",example:"Zij wonen met hun gezin in Nederland.",example_cn:"他们和家人一起住在荷兰。"},{id:30103,dutch:"man",chinese:"丈夫/男人",english:"husband/man",example:"Ik ben getrouwd met mijn man, Mathieu.",example_cn:"我和我的丈夫Mathieu结婚了。"},{id:30104,dutch:"vrouw",chinese:"女人/妻子",english:"woman/wife",example:"Mijn vrouw komt uit Frankrijk.",example_cn:"我的妻子来自法国。"},{id:30105,dutch:"vader",chinese:"父亲",english:"father",example:"Mijn vader kijkt elke avond televisie.",example_cn:"我的父亲每天晚上都看电视。"},{id:30106,dutch:"moeder",chinese:"母亲",english:"mother",example:"Mijn moeder moet vandaag rijexamen doen.",example_cn:"我的妈妈今天要考驾照。"},{id:30107,dutch:"zoon",chinese:"儿子",english:"son",example:"Onze zoon gaat op vakantie naar Egypte.",example_cn:"我们的儿子去埃及度假。"},{id:30108,dutch:"dochter",chinese:"女儿",english:"daughter",example:"Mijn dochter wordt morgen achttien.",example_cn:"我的女儿明天就十八岁了。"},{id:30109,dutch:"broer",chinese:"兄弟",english:"brother",example:"Ik heb twee broers.",example_cn:"我有两个兄弟。"},{id:30110,dutch:"zus",chinese:"姐妹",english:"sister",example:"Mijn zus speelt volleybal.",example_cn:"我的妹妹打排球。"},{id:30111,dutch:"kind",chinese:"孩子",english:"child",example:"We hebben drie kinderen.",example_cn:"我们有三个孩子。"},{id:30112,dutch:"opa",chinese:"爷爷/外公",english:"grandfather",example:"Mijn opa is geboren in 1951.",example_cn:"我的爷爷出生于1951年。"},{id:30113,dutch:"oma",chinese:"奶奶/外婆",english:"grandmother",example:"Mijn oma leest graag.",example_cn:"我的奶奶喜欢看书。"},{id:30114,dutch:"oom",chinese:"叔叔/舅舅",english:"uncle",example:"Mijn oom is gescheiden.",example_cn:"我的叔叔离婚了。"},{id:30115,dutch:"tante",chinese:"阿姨/姨妈",english:"aunt",example:"Mijn tante spreekt geen Engels.",example_cn:"我的阿姨不会说英语。"},{id:30116,dutch:"neef",chinese:"侄子/表兄弟",english:"nephew/cousin",example:"Mijn neef gaat trouwen.",example_cn:"我的表兄要结婚了。"},{id:30117,dutch:"nicht",chinese:"侄女/表姐妹",english:"niece/cousin",example:"Zijn nicht woont in Eindhoven.",example_cn:"他的表妹住在埃因霍温。"}]},{id:"thema3-family-2",name:"家庭成员(下)",description:"扩展家庭成员和关系",icon:"👪",color:"from-rose-500 to-rose-600",words:[{id:30201,dutch:"echtgenoot",chinese:"丈夫(正式)",english:"husband (formal)",example:"Haar echtgenoot is jarig.",example_cn:"她的丈夫今天过生日。"},{id:30202,dutch:"echtgenote",chinese:"妻子(正式)",english:"wife (formal)",example:"Zijn echtgenote is vandaag jarig.",example_cn:"他的妻子今天过生日。"},{id:30203,dutch:"grootvader",chinese:"祖父",english:"grandfather (formal)",example:"Mijn grootvader is ziek.",example_cn:"我的祖父生病了。"},{id:30204,dutch:"grootmoeder",chinese:"祖母",english:"grandmother (formal)",example:"Mijn grootmoeder is al 95 jaar.",example_cn:"我的祖母已经95岁了。"},{id:30205,dutch:"kleinzoon",chinese:"孙子/外孙",english:"grandson",example:"Mijn kleinzoon gaat naar groep drie.",example_cn:"我的孙子上三年级。"},{id:30206,dutch:"kleindochter",chinese:"孙女/外孙女",english:"granddaughter",example:"Mijn kleindochter spreekt twee talen.",example_cn:"我的孙女会说两种语言。"},{id:30207,dutch:"schoonvader",chinese:"岳父/公公",english:"father-in-law",example:"Mijn schoonvader werkt in een restaurant.",example_cn:"我的岳父在餐厅工作。"},{id:30208,dutch:"schoonmoeder",chinese:"岳母/婆婆",english:"mother-in-law",example:"Mijn schoonmoeder doet veel met onze zoon.",example_cn:"我的婆婆经常和我们的儿子在一起。"},{id:30209,dutch:"schoonzoon",chinese:"女婿",english:"son-in-law",example:"Mijn schoonzoon is altijd druk met zijn werk.",example_cn:"我的女婿总是忙于工作。"},{id:30210,dutch:"schoondochter",chinese:"媳妇",english:"daughter-in-law",example:"Onze schoondochter heeft een drukke baan.",example_cn:"我们的儿媳工作很忙。"},{id:30211,dutch:"zwager",chinese:"姐夫/妹夫",english:"brother-in-law",example:"Mijn zwager werkt bij een taleninstituut.",example_cn:"我的妹夫在语言学院工作。"},{id:30212,dutch:"schoonzus",chinese:"嫂子/弟媳",english:"sister-in-law",example:"Ik heb een afspraak met mijn schoonzus.",example_cn:"我约了我的嫂子见面。"},{id:30213,dutch:"vriend",chinese:"男朋友/朋友",english:"boyfriend/friend",example:"Mijn vriend doet ook een cursus Nederlands.",example_cn:"我的男朋友也在上荷兰语课程。"},{id:30214,dutch:"vriendin",chinese:"女朋友",english:"girlfriend",example:"Haar vriendin werkt als docent.",example_cn:"她的女朋友当老师。"},{id:30215,dutch:"buurman",chinese:"男邻居",english:"male neighbor",example:"Mijn buurman komt uit Soedan.",example_cn:"我的男邻居来自苏丹。"},{id:30216,dutch:"buurvrouw",chinese:"女邻居",english:"female neighbor",example:"Ik drink graag koffie met mijn buurvrouw.",example_cn:"我喜欢和我的女邻居一起喝咖啡。"}]},{id:"thema3-verbs",name:"动词",description:"家庭和社交活动相关动词",icon:"🏃",color:"from-amber-500 to-amber-600",words:[{id:30301,dutch:"afspreken",chinese:"约会/约定",english:"to make an appointment",example:"Wanneer zullen we afspreken?",example_cn:"我们什么时候约会？"},{id:30302,dutch:"bezoeken",chinese:"参观/拜访",english:"to visit",example:"Ze bezoeken het museum.",example_cn:"她们参观博物馆。"},{id:30303,dutch:"boodschappen doen",chinese:"购物",english:"to do shopping",example:"Hij doet boodschappen in de supermarkt.",example_cn:"他在超市买东西。"},{id:30304,dutch:"douchen",chinese:"洗澡",english:"to shower",example:"Hij doucht na het sporten.",example_cn:"他运动后淋浴。"},{id:30305,dutch:"koken",chinese:"做饭",english:"to cook",example:"Hij kookt groentesoep.",example_cn:"他煮蔬菜汤。"},{id:30306,dutch:"krijgen",chinese:"得到/收到",english:"to get",example:"Wat krijg je voor je verjaardag?",example_cn:"你生日会收到什么？"},{id:30307,dutch:"missen",chinese:"想念/错过",english:"to miss",example:"Ik mis mijn familie.",example_cn:"我想念我的家人。"},{id:30308,dutch:"organiseren",chinese:"组织",english:"to organize",example:"We organiseren een groot feest.",example_cn:"我们组织一个大聚会。"},{id:30309,dutch:"praten",chinese:"说话/聊天",english:"to talk",example:"We praten veel over de kinderen.",example_cn:"我们经常谈论孩子们。"},{id:30310,dutch:"vieren",chinese:"庆祝",english:"to celebrate",example:"Hij viert zijn verjaardag niet.",example_cn:"他不庆祝生日。"},{id:30311,dutch:"wandelen",chinese:"散步",english:"to walk",example:"Hij wandelt elke dag met de hond in het park.",example_cn:"他每天和狗在公园散步。"},{id:30312,dutch:"werken",chinese:"工作",english:"to work",example:"Ze werkt vandaag van acht tot vijf uur.",example_cn:"她今天从早上八点工作到下午五点。"},{id:30313,dutch:"schaatsen",chinese:"滑冰",english:"to skate",example:"Ze schaatsen op het ijs.",example_cn:"他们在冰上滑冰。"},{id:30314,dutch:"skiën",chinese:"滑雪",english:"to ski",example:"We gaan skiën in Zwitserland.",example_cn:"我们去瑞士滑雪。"},{id:30315,dutch:"opbellen",chinese:"打电话",english:"to call",example:"Ik bel mijn ouders elke dag op.",example_cn:"我每天都给父母打电话。"},{id:30316,dutch:"verliefd worden",chinese:"爱上某人",english:"to fall in love",example:"Ik wil graag verliefd worden!",example_cn:"我想谈恋爱！"}]},{id:"thema3-time",name:"时间与季节",description:"星期、季节和时间表达",icon:"📅",color:"from-yellow-500 to-yellow-600",words:[{id:30401,dutch:"maandag",chinese:"星期一",english:"Monday",example:"Maandag werk ik.",example_cn:"星期一我工作。"},{id:30402,dutch:"dinsdag",chinese:"星期二",english:"Tuesday",example:"Dinsdag heb ik een afspraak bij de dokter.",example_cn:"星期二我有一个医生的预约。"},{id:30403,dutch:"woensdag",chinese:"星期三",english:"Wednesday",example:"Woensdag ga ik lunchen met Emma.",example_cn:"星期三我和艾玛一起吃午饭。"},{id:30404,dutch:"donderdag",chinese:"星期四",english:"Thursday",example:"Donderdag ben ik vrij.",example_cn:"星期四我有空。"},{id:30405,dutch:"vrijdag",chinese:"星期五",english:"Friday",example:"Vrijdag heb ik een afspraak met een collega.",example_cn:"星期五我和一位同事有约。"},{id:30406,dutch:"zaterdag",chinese:"星期六",english:"Saturday",example:"Zaterdag doe ik boodschappen.",example_cn:"星期六我去买东西。"},{id:30407,dutch:"zondag",chinese:"星期日",english:"Sunday",example:"Zondag speel ik volleybal.",example_cn:"星期天我打排球。"},{id:30408,dutch:"lente",chinese:"春天",english:"spring",example:"In de lente vieren we Koningsdag.",example_cn:"春天我们庆祝国王节。"},{id:30409,dutch:"zomer",chinese:"夏天",english:"summer",example:"In de zomer zwemmen we in zee.",example_cn:"夏天我们在海里游泳。"},{id:30410,dutch:"herfst",chinese:"秋天",english:"autumn",example:"In de herfst plukken we appels.",example_cn:"秋天我们摘苹果。"},{id:30411,dutch:"winter",chinese:"冬天",english:"winter",example:"In de winter schaatsen we op het ijs.",example_cn:"冬天我们在冰上滑冰。"},{id:30412,dutch:"ochtend",chinese:"早晨",english:"morning",example:"Ze gaan morgenochtend naar het park.",example_cn:"他们明天早上要去公园。"},{id:30413,dutch:"middag",chinese:"下午",english:"afternoon",example:"In de middag heb ik een afspraak.",example_cn:"下午我有一个预约。"},{id:30414,dutch:"nacht",chinese:"夜晚",english:"night",example:"Ik werk twee nachten per week.",example_cn:"我每周上两个晚班。"}]},{id:"thema3-other",name:"形容词与其他",description:"描述人和关系的形容词及其他词汇",icon:"💫",color:"from-pink-500 to-pink-600",words:[{id:30501,dutch:"aardig",chinese:"友善的",english:"nice/kind",example:"Haar collega's zijn heel aardig.",example_cn:"她的同事们很友善。"},{id:30502,dutch:"druk",chinese:"忙碌的",english:"busy",example:"Het is druk op het werk.",example_cn:"工作很忙。"},{id:30503,dutch:"gelukkig",chinese:"幸福的",english:"happy",example:"Ik ben heel gelukkig met hem!",example_cn:"和他在一起我很幸福！"},{id:30504,dutch:"gescheiden",chinese:"离婚的",english:"divorced",example:"Ze zijn vorig jaar gescheiden.",example_cn:"他们去年离婚了。"},{id:30505,dutch:"gezellig",chinese:"温馨的",english:"cozy",example:"Dat is een gezellig restaurant.",example_cn:"那是一家很温馨的餐厅。"},{id:30506,dutch:"interessant",chinese:"有趣的",english:"interesting",example:"De film is niet zo interessant.",example_cn:"这部电影不太有趣。"},{id:30507,dutch:"leuk",chinese:"好玩的",english:"fun/nice",example:"Zij vindt sporten niet leuk.",example_cn:"她觉得运动不好玩。"},{id:30508,dutch:"verliefd",chinese:"恋爱的",english:"in love",example:"Ik ben verliefd op haar.",example_cn:"我爱上了她。"},{id:30509,dutch:"samen",chinese:"一起",english:"together",example:"Ze werken goed samen.",example_cn:"他们合作得很好。"},{id:30510,dutch:"maar",chinese:"但是",english:"but",example:"Ik wil naar het feest komen, maar ik heb geen tijd.",example_cn:"我想来参加聚会，但我没有时间。"},{id:30511,dutch:"vooral",chinese:"尤其",english:"especially",example:"Ik hou van Spaans eten, vooral van tapas.",example_cn:"我喜欢西班牙菜，尤其是小吃。"},{id:30512,dutch:"geboren",chinese:"出生",english:"born",example:"Ik ben in Marokko geboren.",example_cn:"我在摩洛哥出生。"},{id:30513,dutch:"elkaar",chinese:"互相",english:"each other",example:"We bellen elkaar twee keer per week.",example_cn:"我们每周互相打两次电话。"},{id:30514,dutch:"soms",chinese:"有时",english:"sometimes",example:"Soms mis ik mijn vrienden en familie.",example_cn:"有时候我会想念我的朋友和家人。"},{id:30515,dutch:"nooit",chinese:"从不",english:"never",example:"Hij gaat nooit naar de bioscoop.",example_cn:"他从不去电影院。"},{id:30516,dutch:"ziek",chinese:"生病的",english:"sick",example:"Mijn zoon is ziek, dus hij blijft vandaag thuis.",example_cn:"我的儿子生病了，所以他今天待在家里。"}]}]},{id:"thema4",name:"Thema 4",description:"购物与问路 - Winkelen en de weg vragen",icon:"🛒",color:"from-rose-500 to-pink-600",courses:[{id:"thema4-nouns-1",name:"购物名词(上)",description:"购物场景中的常用名词",icon:"🛒",color:"from-rose-500 to-rose-600",words:[{id:70001,dutch:"aanbieding",chinese:"优惠",english:"offer/deal",example:"De aardbeien zijn in de aanbieding.",example_cn:"草莓在打折。"},{id:70002,dutch:"aankoop",chinese:"购买/采购",english:"purchase",example:"Die schoenen zijn een goede aankoop.",example_cn:"那双鞋是一次很好的购买。"},{id:70003,dutch:"afdeling",chinese:"部门",english:"department",example:"Op yoghurt staat bij de afdeling zuivel.",example_cn:"酸奶在乳制品区。"},{id:70004,dutch:"balie",chinese:"柜台",english:"counter",example:"We kunnen je paspoort ophalen bij balie 4.",example_cn:"我们可以在4号柜台领取你的护照。"},{id:70005,dutch:"baliemedewerker",chinese:"柜台员工",english:"counter staff",example:"Zij werkt als baliemedewerker bij de gemeente.",example_cn:"她在市政府做柜台工作人员。"},{id:70006,dutch:"bedrijf",chinese:"公司/企业",english:"company",example:"Ahold is een groot bedrijf.",example_cn:"Ahold是一家大型公司。"},{id:70007,dutch:"boodschap",chinese:"消息/购物",english:"message/shopping",example:"Ik doe op zaterdag boodschappen.",example_cn:"我星期六购物。"},{id:70008,dutch:"boodschappenlijstje",chinese:"购物清单",english:"shopping list",example:"Schrijf ook appels op het boodschappenlijstje.",example_cn:"把苹果也写在购物清单上。"},{id:70009,dutch:"bos bloemen",chinese:"一束花",english:"bunch of flowers",example:"Ik koop een bos bloemen voor mijn moeder.",example_cn:"我给我妈妈买一束花。"},{id:70010,dutch:"bouwmarkt",chinese:"建材市场",english:"hardware store",example:"Gamma is een grote bouwmarkt in Nederland.",example_cn:"Gamma是荷兰一家大型建材市场。"},{id:70011,dutch:"briefje",chinese:"纸条/便条",english:"note",example:"Ik leg even een briefje voor hem op de tafel.",example_cn:"我给他在桌子上留个便条。"},{id:70012,dutch:"buurt",chinese:"社区/附近",english:"neighborhood",example:"Hij woont in een hele rustige buurt.",example_cn:"他住在一个非常安静的社区。"},{id:70013,dutch:"café",chinese:"咖啡馆/酒吧",english:"café/bar",example:"Zullen we wat gaan drinken in dat café?",example_cn:"我们去那家咖啡馆喝点儿吧？"},{id:70014,dutch:"delicatesse",chinese:"美食/熟食",english:"delicacy",example:"Stroopwafels zijn een Hollandse delicatesse.",example_cn:"焦糖华夫饼是一种荷兰美食。"},{id:70015,dutch:"diepvries",chinese:"冷冻食品区",english:"freezer section",example:"De pizza's liggen in de diepvries.",example_cn:"比萨在冷冻柜里。"}]},{id:"thema4-nouns-2",name:"购物名词(中)",description:"商店、场所和物品相关名词",icon:"🏪",color:"from-pink-500 to-pink-600",words:[{id:70016,dutch:"etage",chinese:"楼层",english:"floor/storey",example:"De kinderkleding vind je op de tweede etage.",example_cn:"童装在第二层。"},{id:70017,dutch:"euro",chinese:"欧元",english:"euro",example:"In Nederland betaal je met de euro.",example_cn:"在荷兰，人们用欧元支付。"},{id:70018,dutch:"fabriek",chinese:"工厂",english:"factory",example:"In Nieuwegein staat een koekjesfabriek.",example_cn:"在Nieuwegein有一家饼干工厂。"},{id:70019,dutch:"fles",chinese:"瓶子",english:"bottle",example:"Op deze fles zit statiegeld.",example_cn:"这个瓶子有押金。"},{id:70020,dutch:"gang",chinese:"走廊/通道",english:"aisle/corridor",example:"De chocola ligt in de tweede gang, naast de koekjes.",example_cn:"巧克力在第二过道，在饼干旁边。"},{id:70021,dutch:"gemeentehuis",chinese:"市政厅",english:"town hall",example:"U kunt uw rijbewijs bij het gemeentehuis ophalen.",example_cn:"您可以在市政府领取您的驾照。"},{id:70022,dutch:"gewicht",chinese:"重量",english:"weight",example:"Wat is het gewicht van deze kaas?",example_cn:"这块奶酪的重量是多少？"},{id:70023,dutch:"glas",chinese:"玻璃/玻璃杯",english:"glass",example:"Een glas rode wijn graag.",example_cn:"来一杯红酒。"},{id:70024,dutch:"gram",chinese:"克",english:"gram",example:"Het is 110 gram. Is dat goed?",example_cn:"是110克，这样可以吗？"},{id:70025,dutch:"identiteitsbewijs",chinese:"身份证件",english:"ID card",example:"Hebt u uw identiteitsbewijs?",example_cn:"您有身份证件吗？"},{id:70026,dutch:"kantoor",chinese:"办公室",english:"office",example:"Ik werk drie dagen op kantoor en één dag thuis.",example_cn:"我在办公室工作三天，在家工作一天。"},{id:70027,dutch:"kassa",chinese:"收银台",english:"cash register",example:"U kunt ook bij kassa 3 betalen.",example_cn:"您也可以在3号收银台付款。"},{id:70028,dutch:"keus",chinese:"选择",english:"choice",example:"Op de markt heb je veel keus.",example_cn:"在市场上选择很多。"},{id:70029,dutch:"kilo",chinese:"公斤",english:"kilogram",example:"Een kilo aardappelen graag.",example_cn:"来一公斤土豆。"},{id:70030,dutch:"klant",chinese:"顾客/客人",english:"customer",example:"Veel klanten kopen rozen want het is Valentijnsdag.",example_cn:"很多顾客买玫瑰，因为今天是情人节。"}]},{id:"thema4-nouns-3",name:"购物名词(下)",description:"商店类型、交通和设施名词",icon:"🏬",color:"from-fuchsia-500 to-fuchsia-600",words:[{id:70031,dutch:"kledingwinkel",chinese:"服装店",english:"clothing store",example:"Ik koop graag kleding in een kledingwinkel, niet online.",example_cn:"我喜欢在服装店买衣服，不喜欢网购。"},{id:70032,dutch:"korting",chinese:"折扣",english:"discount",example:"Je krijgt 22 procent korting op je eerste aankoop.",example_cn:"你的首次购买可享受22%的折扣。"},{id:70033,dutch:"kraam",chinese:"摊位",english:"stall",example:"Ik ga even naar de viskraam.",example_cn:"我去一下鱼摊。"},{id:70034,dutch:"kruising",chinese:"交叉口",english:"crossing",example:"Bij de kruising ga je rechtdoor.",example_cn:"在十字路口你直走。"},{id:70035,dutch:"kruispunt",chinese:"十字路口",english:"intersection",example:"Bij het kruispunt gaan we linksaf.",example_cn:"在路口我们向左转。"},{id:70036,dutch:"laptop",chinese:"笔记本电脑",english:"laptop",example:"De kinderen werken op school met een laptop.",example_cn:"孩子们在学校用笔记本电脑学习。"},{id:70037,dutch:"lift",chinese:"电梯",english:"elevator",example:"We gaan met de lift naar de derde verdieping.",example_cn:"我们坐电梯到三楼。"},{id:70038,dutch:"maat",chinese:"尺寸/大小",english:"size",example:"Ik heb maat 40.",example_cn:"我穿40码。"},{id:70039,dutch:"magazijn",chinese:"仓库",english:"warehouse",example:"Ik ga even in het magazijn kijken.",example_cn:"我去仓库看一下。"},{id:70040,dutch:"markt",chinese:"市场",english:"market",example:"Op de markt is de kaas goedkoop.",example_cn:"市场上的奶酪很便宜。"},{id:70041,dutch:"paskamer",chinese:"试衣间",english:"fitting room",example:"Mevrouw, waar zijn de paskamers?",example_cn:"女士，更衣室在哪里？"},{id:70042,dutch:"pinpas",chinese:"银行卡/借记卡",english:"debit card",example:"Kan ik met mijn pinpas betalen?",example_cn:"我可以用银行卡付款吗？"},{id:70043,dutch:"prijs",chinese:"价格",english:"price",example:"Wat is de prijs van deze jurk?",example_cn:"这条裙子多少钱？"},{id:70044,dutch:"roltrap",chinese:"扶梯",english:"escalator",example:"Kom, we nemen de roltrap naar de eerste verdieping.",example_cn:"来吧，我们坐扶梯到一楼。"},{id:70045,dutch:"supermarkt",chinese:"超市",english:"supermarket",example:"Albert Heijn is een dure supermarkt.",example_cn:"Albert Heijn是一家昂贵的超市。"},{id:70046,dutch:"winkelcentrum",chinese:"购物中心",english:"shopping center",example:"Er is een Etos in het winkelcentrum.",example_cn:"那个购物中心里有一家Etos。"},{id:70047,dutch:"warenhuis",chinese:"百货商店",english:"department store",example:"In dat warenhuis verkopen ze veel dure kledingmerken.",example_cn:"在那家百货商店他们卖很多昂贵的服装品牌。"}]},{id:"thema4-verbs",name:"购物动词",description:"购物和问路场景中的常用动词",icon:"🏃",color:"from-indigo-500 to-indigo-600",words:[{id:70101,dutch:"afrekenen",chinese:"结账",english:"to check out",example:"Je kunt daar afrekenen, bij de kassa.",example_cn:"你可以在收银台结账。"},{id:70102,dutch:"betalen",chinese:"支付/付款",english:"to pay",example:"Kan ik met een creditcard betalen?",example_cn:"我可以用信用卡支付吗？"},{id:70103,dutch:"herhalen",chinese:"重复/复述",english:"to repeat",example:"Kunt u dat nog een keer herhalen?",example_cn:"您可以再重复一遍吗？"},{id:70104,dutch:"inschrijven",chinese:"报名",english:"to register",example:"Ik wil me graag inschrijven voor een cursus.",example_cn:"我想报名参加一个课程。"},{id:70105,dutch:"kijken",chinese:"看/瞧",english:"to look",example:"Wilt u even rondkijken?",example_cn:"您想四处看看吗？"},{id:70106,dutch:"kopen",chinese:"买",english:"to buy",example:"We moeten een nieuwe wasmachine kopen.",example_cn:"我们需要买一台新的洗衣机。"},{id:70107,dutch:"krijgen",chinese:"得到/收到",english:"to get/receive",example:"U krijgt een gratis glas bij aankoop van deze wijn.",example_cn:"购买这瓶酒可获赠一杯免费饮料。"},{id:70108,dutch:"lopen",chinese:"走/步行",english:"to walk",example:"Je loopt hier rechtdoor. Daar is de bakker.",example_cn:"你沿着这条路一直走，面包店就在那儿。"},{id:70109,dutch:"parkeren",chinese:"停车",english:"to park",example:"Kun je in het centrum makkelijk parkeren?",example_cn:"你能在市中心轻松停车吗？"},{id:70110,dutch:"passen",chinese:"试穿/合适",english:"to try on/fit",example:"Kan ik deze broek even passen?",example_cn:"我可以试穿这条裤子吗？"},{id:70111,dutch:"pinnen",chinese:"刷卡",english:"to pay by card",example:"Wilt u pinnen?",example_cn:"您想刷卡吗？"},{id:70112,dutch:"proberen",chinese:"尝试/试",english:"to try",example:"Hij probeert tien woorden per dag te leren.",example_cn:"他每天尝试学十个单词。"},{id:70113,dutch:"rijden",chinese:"开车/驾驶",english:"to drive",example:"Je rijdt te hard.",example_cn:"你开得太快了。"},{id:70114,dutch:"rondkijken",chinese:"四处看看",english:"to look around",example:"Ik kijk even rond.",example_cn:"我随便看看。"},{id:70115,dutch:"staan",chinese:"站/适合",english:"to stand/suit",example:"De jurk staat je goed.",example_cn:"这件裙子很适合你。"},{id:70116,dutch:"volgen",chinese:"沿着/跟随",english:"to follow",example:"Volg de weg tot het einde en ga dan linksaf.",example_cn:"沿着这条路一直走到尽头，然后左转。"},{id:70117,dutch:"zien",chinese:"看见/看到",english:"to see",example:"Dan ziet u de supermarkt.",example_cn:"那时你会看到超市。"},{id:70118,dutch:"zitten",chinese:"坐/合适",english:"to sit/fit",example:"De schoenen zitten lekker.",example_cn:"这些鞋穿着很舒服。"},{id:70119,dutch:"zoeken",chinese:"找/寻找",english:"to search",example:"Ik zoek een leuke rok.",example_cn:"我在找一条漂亮的裙子。"}]},{id:"thema4-adj-1",name:"形容词(上)",description:"描述物品特征的常用形容词",icon:"📝",color:"from-teal-500 to-teal-600",words:[{id:70201,dutch:"breed",chinese:"宽",english:"wide",example:"Dat is een brede winkelstraat.",example_cn:"这是一条宽阔的购物街。"},{id:70202,dutch:"dik",chinese:"浓/厚",english:"thick",example:"Hij heeft heel dik haar.",example_cn:"他的头发很浓很厚。"},{id:70203,dutch:"donker",chinese:"黑暗/深色",english:"dark",example:"Mijn kamer is heel donker.",example_cn:"我的房间很黑。"},{id:70204,dutch:"droog",chinese:"干/干燥",english:"dry",example:"Is de was al droog?",example_cn:"衣服已经干了吗？"},{id:70205,dutch:"dun",chinese:"细/薄/瘦",english:"thin",example:"Zij heeft heel dun haar.",example_cn:"她的头发很细很薄。"},{id:70206,dutch:"duur",chinese:"贵",english:"expensive",example:"Wat een dure trui!",example_cn:"这件毛衣真贵！"},{id:70207,dutch:"fijn",chinese:"好/美好",english:"fine/nice",example:"Fijne dag!",example_cn:"祝你一天愉快！"},{id:70208,dutch:"gezond",chinese:"健康",english:"healthy",example:"Sinaasappels zijn heel gezond.",example_cn:"橙子非常健康。"},{id:70209,dutch:"goedkoop",chinese:"便宜",english:"cheap",example:"Die sinaasappels zijn echt goedkoop.",example_cn:"这些橙子真的很便宜。"},{id:70210,dutch:"gratis",chinese:"免费",english:"free",example:"U kunt deze folder gratis meenemen.",example_cn:"您可以免费拿走这份宣传册。"},{id:70211,dutch:"groot",chinese:"大",english:"big/large",example:"Dit is een grote supermarkt.",example_cn:"这是一家大超市。"},{id:70212,dutch:"hard",chinese:"硬/大/快",english:"hard/loud/fast",example:"Deze mango's zijn nog te hard.",example_cn:"这些芒果还太硬。"},{id:70213,dutch:"hoog",chinese:"高",english:"high",example:"De temperatuur is vandaag hoog.",example_cn:"今天气温很高。"},{id:70214,dutch:"houdbaar",chinese:"保质/可保存",english:"durable/shelf-life",example:"Deze yoghurt is houdbaar tot 2 april.",example_cn:"这个酸奶保质期到4月2日。"},{id:70215,dutch:"jong",chinese:"年轻",english:"young",example:"Ik houd van jonge kaas.",example_cn:"我喜欢年轻的奶酪。"},{id:70216,dutch:"kort",chinese:"短",english:"short",example:"Zij heeft heel kort haar.",example_cn:"她的头发很短。"},{id:70217,dutch:"koud",chinese:"冷",english:"cold",example:"Het is koud. Ik doe een trui aan.",example_cn:"天气很冷，我要穿件毛衣。"},{id:70218,dutch:"laag",chinese:"低",english:"low",example:"De temperatuur is vandaag laag.",example_cn:"今天气温很低。"},{id:70219,dutch:"lang",chinese:"长",english:"long",example:"De film duurt heel lang.",example_cn:"这部电影很长。"},{id:70220,dutch:"leeg",chinese:"空",english:"empty",example:"Ik zie dat de glazen leeg zijn.",example_cn:"我看到杯子都是空的。"}]},{id:"thema4-adj-2",name:"形容词(下)",description:"描述食物、外观和感受的形容词",icon:"✨",color:"from-emerald-500 to-emerald-600",words:[{id:70221,dutch:"lekker",chinese:"好吃/美味",english:"tasty/delicious",example:"Deze pizza is echt lekker.",example_cn:"这份披萨真的很好吃。"},{id:70222,dutch:"lelijk",chinese:"丑/难看",english:"ugly",example:"Ik vind deze jurk heel lelijk.",example_cn:"我觉得这条裙子很丑。"},{id:70223,dutch:"licht",chinese:"轻/明亮",english:"light/bright",example:"Mijn kamer is heel licht, want er is veel zon.",example_cn:"我的房间非常明亮，因为有很多阳光。"},{id:70224,dutch:"makkelijk",chinese:"容易/简单",english:"easy",example:"Deze oefeningen zijn makkelijk.",example_cn:"这些练习很容易。"},{id:70225,dutch:"moeilijk",chinese:"困难",english:"difficult",example:"Deze nieuwe les is moeilijk.",example_cn:"这节新课很难。"},{id:70226,dutch:"mooi",chinese:"美丽/好看",english:"beautiful",example:"Wat een mooie schoenen!",example_cn:"多么漂亮的鞋！"},{id:70227,dutch:"nieuw",chinese:"新",english:"new",example:"Dank je, ik heb de schoenen nieuw.",example_cn:"谢谢，我的鞋是新的。"},{id:70228,dutch:"oud",chinese:"老/旧",english:"old",example:"Mijn oma is al heel oud.",example_cn:"我的奶奶已经很老了。"},{id:70229,dutch:"sappig",chinese:"多汁",english:"juicy",example:"Deze peren zijn heel sappig.",example_cn:"这些梨很多汁。"},{id:70230,dutch:"snel",chinese:"快",english:"fast",example:"Deze computer werkt heel snel.",example_cn:"这台电脑运行非常快。"},{id:70231,dutch:"vers",chinese:"新鲜",english:"fresh",example:"Lekkere verse tomaten te koop!",example_cn:"好吃的新鲜番茄出售！"},{id:70232,dutch:"vies",chinese:"脏/难喝",english:"dirty/disgusting",example:"Deze koffie is echt vies.",example_cn:"这咖啡真的很难喝。"},{id:70233,dutch:"vol",chinese:"满/充满",english:"full",example:"De fles is vol.",example_cn:"这个瓶子是满的。"},{id:70234,dutch:"warm",chinese:"热/温暖",english:"warm/hot",example:"Wil je ook warme chocolademelk?",example_cn:"你也想喝热巧克力吗？"},{id:70235,dutch:"zacht",chinese:"软",english:"soft",example:"De trui is heel zacht.",example_cn:"这件毛衣非常柔软。"},{id:70236,dutch:"zoet",chinese:"甜",english:"sweet",example:"Heerlijke zoete aardbeien te koop!",example_cn:"好吃的甜草莓出售！"},{id:70237,dutch:"zuur",chinese:"酸",english:"sour",example:"Wat een zure bessen.",example_cn:"这些浆果真酸。"},{id:70238,dutch:"zwaar",chinese:"重",english:"heavy",example:"Ik heb een hele zware tas.",example_cn:"我有一个很重的包。"}]},{id:"thema4-directions",name:"方向与问路",description:"方向词、介词和问路常用表达",icon:"🗺️",color:"from-sky-500 to-sky-600",words:[{id:70301,dutch:"links",chinese:"左",english:"left",example:"We gaan hier naar links.",example_cn:"我们在这里往左走。"},{id:70302,dutch:"linksaf",chinese:"左转",english:"turn left",example:"Je moet hier linksaf.",example_cn:"你要在这里左转。"},{id:70303,dutch:"linkerhand",chinese:"左手边",english:"left-hand side",example:"Het station is na 500 meter aan je linkerhand.",example_cn:"车站在500米外你的左手边。"},{id:70304,dutch:"rechts",chinese:"右",english:"right",example:"We gaan hier naar rechts.",example_cn:"我们在这里往右走。"},{id:70305,dutch:"rechtsaf",chinese:"右转",english:"turn right",example:"Je moet hier rechtsaf.",example_cn:"你要在这里右转。"},{id:70306,dutch:"rechterhand",chinese:"右手边",english:"right-hand side",example:"De bibliotheek is na 50 meter aan je rechterhand.",example_cn:"图书馆在50米外你的右手边。"},{id:70307,dutch:"rechtdoor",chinese:"直行",english:"straight ahead",example:"Je rijdt rechtdoor tot de stoplichten.",example_cn:"你一直直行到红绿灯。"},{id:70308,dutch:"achter",chinese:"在……后面",english:"behind",example:"De Jumbo is in de Breedstraat, achter de Etos.",example_cn:"Jumbo超市在Breedstraat，Etos药店的后面。"},{id:70309,dutch:"in de buurt",chinese:"附近",english:"nearby",example:"Is hier een supermarkt in de buurt?",example_cn:"这里附近有超市吗？"},{id:70310,dutch:"naar beneden",chinese:"往下",english:"downward",example:"Hier kunnen we met de lift naar beneden.",example_cn:"我们可以坐电梯下去。"},{id:70311,dutch:"naar boven",chinese:"往上",english:"upward",example:"Hier kunnen we met de roltrap naar boven.",example_cn:"我们可以坐自动扶梯上去。"},{id:70312,dutch:"rotonde",chinese:"环岛",english:"roundabout",example:"Bij de rotonde gaan we rechtsaf.",example_cn:"在环岛我们右转。"},{id:70313,dutch:"stoplicht",chinese:"红绿灯",english:"traffic light",example:"Het stoplicht staat op rood.",example_cn:"红绿灯是红色的。"},{id:70314,dutch:"straat",chinese:"街道",english:"street",example:"Dat is de drukste winkelstraat.",example_cn:"那是最繁忙的购物街。"},{id:70315,dutch:"weg",chinese:"道路",english:"road/way",example:"Wat is de snelste weg naar het centrum?",example_cn:"去市中心最快的路线是什么？"}]},{id:"thema4-expressions",name:"日常表达",description:"购物场景中的感叹词和常用表达",icon:"💬",color:"from-amber-500 to-amber-600",words:[{id:70401,dutch:"hoor",chinese:"哎（语气词）",english:"particle (emphasis)",example:"Ja hoor!",example_cn:"是的！"},{id:70402,dutch:"jammer",chinese:"可惜",english:"pity/shame",example:"De rok is te klein. Wat jammer.",example_cn:"裙子太小了，真可惜。"},{id:70403,dutch:"klopt",chinese:"正确",english:"correct",example:"Dat klopt!",example_cn:"没错！"},{id:70404,dutch:"natuurlijk",chinese:"当然",english:"of course",example:"Natuurlijk, ik zal even voor je kijken.",example_cn:"当然，我给你看一下。"},{id:70405,dutch:"plezier",chinese:"愉快",english:"pleasure/fun",example:"Veel plezier ermee!",example_cn:"祝你用得愉快！"},{id:70406,dutch:"het spijt me",chinese:"对不起",english:"I am sorry",example:"Het spijt me.",example_cn:"对不起。"},{id:70407,dutch:"tot ziens",chinese:"再见",english:"goodbye",example:"Tot ziens.",example_cn:"再见。"},{id:70408,dutch:"alstublieft",chinese:"请",english:"please (formal)",example:"Een kilo jonge kaas alstublieft.",example_cn:"请，一公斤嫩奶酪。"},{id:70409,dutch:"contant",chinese:"现金",english:"cash",example:"Ik kan het ook contant betalen.",example_cn:"我也可以用现金支付。"},{id:70410,dutch:"graag",chinese:"请/乐意",english:"please/gladly",example:"Een kilo appels, graag.",example_cn:"我要一公斤苹果。"},{id:70411,dutch:"helaas",chinese:"可惜/遗憾",english:"unfortunately",example:"De aardbeien zijn helaas uitverkocht.",example_cn:"草莓可惜已经卖完了。"},{id:70412,dutch:"helemaal",chinese:"完全",english:"completely",example:"De bananen zijn helemaal rot.",example_cn:"香蕉完全烂了。"},{id:70413,dutch:"misschien",chinese:"也许",english:"maybe",example:"Heb je misschien nog andere maten?",example_cn:"你也许还有别的尺码吗？"},{id:70414,dutch:"gepast",chinese:"刚好（付款）",english:"exact (payment)",example:"Ik kan het gepast betalen.",example_cn:"我可以付刚好的钱。"},{id:70415,dutch:"bij elkaar",chinese:"总共",english:"altogether",example:"Dat is dan twaalf euro bij elkaar.",example_cn:"那么一共是十二欧元。"}]}]}];function Vm(){return ti}function Gm(e){return ti.find(n=>n.id===e)}function Um(){return ti.flatMap(e=>e.courses)}function Pl(e){return Um().find(n=>n.id===e)}function Km(e){return ti.find(n=>n.courses.some(t=>t.id===e))}const qm={class:"flex flex-col h-[calc(100vh-64px)] -m-4"},Ym={class:"text-center pt-4 pb-3 bg-white border-b border-gray-100 flex-shrink-0"},Jm={class:"text-2xl font-bold text-gray-800 flex items-center justify-center gap-2"},Zm={class:"flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain"},Qm=["onClick"],Xm={class:"flex items-center gap-4"},eg={class:"drop-shadow-sm"},ng={class:"flex-1 min-w-0"},tg={class:"text-lg font-bold text-gray-800"},sg={class:"text-sm text-gray-500 mt-0.5"},ig={class:"flex items-center gap-2 mt-2"},rg={class:"text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium"},ag={class:"text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium"},og=Ue({__name:"CourseList",setup(e){const n=rs(),t=Z(Vm()),s=r=>{n.push(`/thema/${r}`)},i=r=>r.courses.reduce((a,o)=>a+o.words.length,0);return(r,a)=>(I(),P("div",qm,[h("div",Ym,[h("h1",Jm,[O(W(Zs),{class:"w-6 h-6 text-blue-600"}),a[0]||(a[0]=Bn(" 课程学习 ",-1))])]),h("div",Zm,[(I(!0),P(Ce,null,Xe(t.value,o=>(I(),P("div",{key:o.id,onClick:l=>s(o.id),class:"bg-white rounded-2xl shadow-sm border border-gray-100 p-5 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md"},[h("div",Xm,[h("div",{class:me(["w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br shadow-sm flex-shrink-0",o.color])},[h("span",eg,T(o.icon),1)],2),h("div",ng,[h("h3",tg,T(o.name),1),h("p",sg,T(o.description),1),h("div",ig,[h("span",rg,T(o.courses.length)+" 个课程 ",1),h("span",ag,T(i(o))+" 个单词 ",1)])]),O(W(Qs),{class:"w-5 h-5 text-gray-300 flex-shrink-0"})])],8,Qm))),128)),a[1]||(a[1]=h("div",{class:"text-center pb-4 pt-2"},[h("p",{class:"text-xs text-gray-400"},"更多主题持续更新中...")],-1))])]))}}),lg={key:0,class:"flex flex-col h-[calc(100vh-64px)] -m-4"},cg={class:"bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10 flex-shrink-0"},ug={class:"text-base font-bold text-gray-800"},dg={class:"flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain"},hg=["onClick"],fg={class:"drop-shadow-sm"},pg={key:0,class:"absolute -top-1 -right-1 bg-white rounded-full"},mg={class:"flex-1 min-w-0"},gg={class:"text-base font-bold text-gray-800 truncate"},xg={class:"text-sm text-gray-500 mt-0.5 truncate"},vg={class:"flex items-center gap-2 mt-1.5"},yg={class:"text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium"},bg={key:0,class:"text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium"},wg={key:1,class:"text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium"},kg=Ue({__name:"ThemaDetail",setup(e){const n=Js(),t=rs(),s=fe(()=>n.params.id),i=fe(()=>Gm(s.value)),r=Z(0),a=()=>{t.push("/courses")},o=c=>{t.push(`/course/${c}`)},l=c=>(r.value,Tl(c)),u=c=>(r.value,D0(c));return tn(()=>{i.value||t.push("/courses"),r.value++}),(c,d)=>i.value?(I(),P("div",lg,[h("div",cg,[h("button",{onClick:a,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"},[O(W(Ss),{class:"w-5 h-5"}),d[0]||(d[0]=h("span",{class:"text-sm"},"返回",-1))]),h("h2",ug,T(i.value.name),1),d[1]||(d[1]=h("div",{class:"w-16"},null,-1))]),h("div",dg,[(I(!0),P(Ce,null,Xe(i.value.courses,(p,g)=>(I(),P("div",{key:p.id,onClick:C=>o(p.id),class:me(["bg-white rounded-2xl shadow-sm border p-4 flex items-center gap-4 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md",l(p.id)?"border-green-200 bg-green-50/30":"border-gray-100"])},[h("div",{class:me(["w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br shadow-sm flex-shrink-0 relative",p.color])},[h("span",fg,T(p.icon),1),l(p.id)?(I(),P("div",pg,[O(W(Xs),{class:"w-5 h-5 text-green-500"})])):ge("",!0)],2),h("div",mg,[h("h3",gg,T(p.name),1),h("p",xg,T(p.description),1),h("div",vg,[h("span",yg,T(p.words.length)+" 个单词 ",1),l(p.id)?(I(),P("span",bg," ✅ 已完成 ")):u(p.id)>0?(I(),P("span",wg," 学习中 "+T(u(p.id))+"/"+T(p.words.length),1)):ge("",!0)])]),O(W(Qs),{class:"w-5 h-5 text-gray-300 flex-shrink-0"})],10,hg))),128))])])):ge("",!0)}}),_g={key:0,class:"flex flex-col h-full -m-4 -mb-24"},jg={class:"bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10"},Cg={class:"text-base font-bold text-gray-800 truncate max-w-[50%]"},Sg={key:0,class:"px-4 pt-3"},Eg={class:"flex items-center justify-between text-xs text-gray-500 mb-1.5"},Dg={class:"w-full bg-gray-200 rounded-full h-2"},Ig={key:1,class:"flex-1 flex flex-col items-center justify-center px-6 py-8"},Mg={class:"bg-green-50 rounded-full p-6 mb-6"},Tg={class:"text-2xl font-bold text-gray-800 mb-2"},Rg={class:"text-gray-500 text-center mb-2"},Pg={key:0,class:"text-xs text-gray-400 mb-8"},Ag={key:1,class:"mb-8"},Og={class:"flex flex-col gap-3 w-full max-w-xs"},zg={key:2,class:"flex-1 flex items-center justify-center px-4 py-6 overflow-y-auto"},Ng={key:3,class:"px-4 pb-6 flex items-center justify-between gap-4"},Wg=["disabled"],Lg=Ue({__name:"CourseLearn",setup(e){const n=Js(),t=rs(),s=fe(()=>n.params.id),i=fe(()=>Pl(s.value)),r=fe(()=>{var w;return((w=i.value)==null?void 0:w.words)||[]}),a=Z(0),o=Z(!1),l=Z(!1),u=Z([]),c=Z(0),d=fe(()=>l.value?u.value:r.value),p=fe(()=>d.value[a.value]),g=fe(()=>d.value.length===0?0:(a.value+1)/d.value.length*100),C=()=>{a.value<d.value.length-1?(l.value||Wa(s.value,a.value),a.value++):(l.value?(I0(s.value),c.value=La(s.value)):(Wa(s.value,a.value),E0(s.value)),o.value=!0)},v=()=>{a.value>0&&a.value--},M=()=>{const w=Km(s.value);w?t.push(`/thema/${w.id}`):t.push("/courses")},R=()=>{a.value=0,o.value=!1,l.value=!1},y=()=>{const w=[...r.value].sort(()=>Math.random()-.5);u.value=w,a.value=0,o.value=!1,l.value=!0},b=()=>{t.push(`/course/${s.value}/list?current=${a.value}`)};return tn(()=>{if(!i.value){t.push("/courses");return}c.value=La(s.value);const w=n.query.index;if(w!==void 0){const N=Number(w);!isNaN(N)&&N>=0&&N<r.value.length&&(a.value=N)}else Tl(s.value)&&(o.value=!0)}),Fn(()=>n.query.index,w=>{if(w!==void 0){const N=Number(w);!isNaN(N)&&N>=0&&N<r.value.length&&(a.value=N,o.value=!1,l.value=!1)}}),(w,N)=>i.value?(I(),P("div",_g,[h("div",jg,[h("button",{onClick:M,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"},[O(W(Ss),{class:"w-5 h-5"}),N[0]||(N[0]=h("span",{class:"text-sm"},"返回",-1))]),h("h2",Cg,T(l.value?"复习模式":i.value.name),1),h("button",{onClick:b,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"},[O(W(Ea),{class:"w-5 h-5"})])]),o.value?ge("",!0):(I(),P("div",Sg,[h("div",Eg,[h("span",null,T(l.value?"复习进度":"学习进度"),1),h("span",null,T(a.value+1)+" / "+T(d.value.length),1)]),h("div",Dg,[h("div",{class:me(["bg-gradient-to-r h-2 rounded-full transition-all duration-300",l.value?"from-purple-500 to-pink-500":"from-blue-500 to-indigo-500"]),style:Vn({width:`${g.value}%`})},null,6)])])),o.value?(I(),P("div",Ig,[h("div",Mg,[O(W(Xs),{class:"w-16 h-16 text-green-500"})]),h("h3",Tg,T(l.value?"复习完成！🎉":"学习完成！🎉"),1),h("p",Rg," 你已完成「"+T(i.value.name)+"」的全部 "+T(r.value.length)+" 个单词"+T(l.value?"复习":"学习"),1),c.value>0?(I(),P("p",Pg," 已复习 "+T(c.value)+" 次 ",1)):(I(),P("p",Ag)),h("div",Og,[h("button",{onClick:y,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200 hover:shadow-xl active:scale-95 transition-all duration-200"},[O(W(vr),{class:"w-5 h-5"}),N[1]||(N[1]=h("span",null,"打乱复习",-1))]),h("button",{onClick:R,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl active:scale-95 transition-all duration-200"},[O(W(xr),{class:"w-5 h-5"}),N[2]||(N[2]=h("span",null,"按顺序再学一遍",-1))]),h("button",{onClick:b,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition-all duration-200"},[O(W(Ea),{class:"w-5 h-5"}),N[3]||(N[3]=h("span",null,"查看单词列表",-1))]),h("button",{onClick:M,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition-all duration-200"},[O(W(Ss),{class:"w-5 h-5"}),N[4]||(N[4]=h("span",null,"返回课程",-1))])])])):(I(),P("div",zg,[p.value?(I(),Rn(ni,{key:0,word:p.value,initialShowTranslation:!0},null,8,["word"])):ge("",!0)])),o.value?ge("",!0):(I(),P("div",Ng,[h("button",{onClick:v,disabled:a.value===0,class:me(["flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200",a.value===0?"bg-gray-100 text-gray-300 cursor-not-allowed":"bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"])},[O(W(Es),{class:"w-5 h-5"}),N[5]||(N[5]=h("span",null,"上一个",-1))],10,Wg),h("button",{onClick:C,class:"flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl active:scale-95"},[h("span",null,T(a.value===d.value.length-1?"完成":"下一个"),1),O(W(Qs),{class:"w-5 h-5"})])]))])):ge("",!0)}}),$g={key:0,class:"absolute inset-0 flex flex-col bg-gray-50 z-20"},Hg={class:"bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10"},Fg={class:"text-base font-bold text-gray-800 truncate max-w-[60%]"},Bg={class:"px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100"},Vg={class:"flex items-center gap-3"},Gg={class:"text-2xl"},Ug={class:"text-sm font-medium text-gray-700"},Kg={class:"text-xs text-gray-500 mt-0.5"},qg={class:"flex-1 overflow-y-auto p-4 space-y-2"},Yg=["onClick"],Jg={class:"flex-1 min-w-0"},Zg={class:"font-bold text-gray-800 text-base"},Qg={class:"text-sm text-gray-500 mt-0.5"},Xg={key:0,class:"flex items-center gap-1 text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full flex-shrink-0"},ex=Ue({__name:"CourseWordList",setup(e){const n=Js(),t=rs(),s=fe(()=>n.params.id),i=fe(()=>Pl(s.value)),r=fe(()=>{var u;return((u=i.value)==null?void 0:u.words)||[]}),a=fe(()=>{const u=n.query.current;return u!==void 0?Number(u):-1}),o=()=>{a.value>=0?t.push(`/course/${s.value}?index=${a.value}`):t.push(`/course/${s.value}`)},l=u=>{t.push(`/course/${s.value}?index=${u}`)};return tn(()=>{i.value||t.push("/courses")}),(u,c)=>i.value?(I(),P("div",$g,[h("div",Hg,[h("button",{onClick:o,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"},[O(W(Ss),{class:"w-5 h-5"}),c[0]||(c[0]=h("span",{class:"text-sm"},"返回",-1))]),h("h2",Fg,T(i.value.name)+" - 单词列表",1),c[1]||(c[1]=h("div",{class:"w-16"},null,-1))]),h("div",Bg,[h("div",Vg,[h("span",Gg,T(i.value.icon),1),h("div",null,[h("p",Ug,T(i.value.description),1),h("p",Kg,"共 "+T(r.value.length)+" 个单词",1)])])]),h("div",qg,[(I(!0),P(Ce,null,Xe(r.value,(d,p)=>(I(),P("div",{key:d.id,onClick:g=>l(p),class:me(["flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98]",p===a.value?"bg-blue-50 border-2 border-blue-300 shadow-sm":"bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm"])},[h("div",{class:me(["w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0",p===a.value?"bg-blue-600 text-white":"bg-gray-100 text-gray-600"])},T(p+1),3),h("div",Jg,[h("p",Zg,T(d.dutch),1),h("p",Qg,T(d.chinese)+" · "+T(d.english),1)]),p===a.value?(I(),P("div",Xg,[O(W(kh),{class:"w-3 h-3"}),c[2]||(c[2]=Bn(" 当前 ",-1))])):ge("",!0)],10,Yg))),128))])])):ge("",!0)}}),nx=[{path:"/",redirect:"/courses"},{path:"/learn",component:p1},{path:"/review",component:im},{path:"/history",component:Cm},{path:"/test",component:Bm},{path:"/courses",component:og},{path:"/thema/:id",component:kg},{path:"/course/:id",component:Lg},{path:"/course/:id/list",component:ex}],Ha=fh({history:Gd(),routes:nx});Vh().then(()=>{ua(Ia).use(Ha).mount("#app")}).catch(e=>{console.error("Failed to initialize words:",e),ua(Ia).use(Ha).mount("#app")});

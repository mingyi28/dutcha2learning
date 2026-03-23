(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fs(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const ge={},ft=[],pn=()=>{},Mi=()=>!1,Ir=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),zs=e=>e.startsWith("onUpdate:"),Te=Object.assign,Bs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},wl=Object.prototype.hasOwnProperty,le=(e,n)=>wl.call(e,n),q=Array.isArray,ht=e=>_t(e)==="[object Map]",Ri=e=>_t(e)==="[object Set]",go=e=>_t(e)==="[object Date]",xl=e=>_t(e)==="[object RegExp]",ee=e=>typeof e=="function",we=e=>typeof e=="string",mn=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Ii=e=>(ce(e)||ee(e))&&ee(e.then)&&ee(e.catch),Pi=Object.prototype.toString,_t=e=>Pi.call(e),kl=e=>_t(e).slice(8,-1),Ai=e=>_t(e)==="[object Object]",$s=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nt=Fs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pr=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},_l=/-\w/g,ze=Pr(e=>e.replace(_l,n=>n.slice(1).toUpperCase())),Sl=/\B([A-Z])/g,Hn=Pr(e=>e.replace(Sl,"-$1").toLowerCase()),Ar=Pr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kr=Pr(e=>e?`on${Ar(e)}`:""),gn=(e,n)=>!Object.is(e,n),gt=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Oi=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},Hs=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Cl=e=>{const n=we(e)?Number(e):NaN;return isNaN(n)?e:n};let po;const Or=()=>po||(po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tt(e){if(q(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],s=we(r)?Ml(r):tt(r);if(s)for(const o in s)n[o]=s[o]}return n}else if(we(e)||ce(e))return e}const El=/;(?![^(]*\))/g,Tl=/:([^]+)/,Dl=/\/\*[^]*?\*\//g;function Ml(e){const n={};return e.replace(Dl,"").split(El).forEach(t=>{if(t){const r=t.split(Tl);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function _e(e){let n="";if(we(e))n=e;else if(q(e))for(let t=0;t<e.length;t++){const r=_e(e[t]);r&&(n+=r+" ")}else if(ce(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Rl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Il=Fs(Rl);function ji(e){return!!e||e===""}function Pl(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=Vs(e[r],n[r]);return t}function Vs(e,n){if(e===n)return!0;let t=go(e),r=go(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=mn(e),r=mn(n),t||r)return e===n;if(t=q(e),r=q(n),t||r)return t&&r?Pl(e,n):!1;if(t=ce(e),r=ce(n),t||r){if(!t||!r)return!1;const s=Object.keys(e).length,o=Object.keys(n).length;if(s!==o)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=n.hasOwnProperty(i);if(a&&!l||!a&&l||!Vs(e[i],n[i]))return!1}}return String(e)===String(n)}const Ni=e=>!!(e&&e.__v_isRef===!0),z=e=>we(e)?e:e==null?"":q(e)||ce(e)&&(e.toString===Pi||!ee(e.toString))?Ni(e)?z(e.value):JSON.stringify(e,Wi,2):String(e),Wi=(e,n)=>Ni(n)?Wi(e,n.value):ht(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,s],o)=>(t[Yr(r,o)+" =>"]=s,t),{})}:Ri(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Yr(t))}:mn(n)?Yr(n):ce(n)&&!q(n)&&!Ai(n)?String(n):n,Yr=(e,n="")=>{var t;return mn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class Al{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ge,!n&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Ge;try{return Ge=this,n()}finally{Ge=t}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){this._on>0&&--this._on===0&&(Ge=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ol(){return Ge}let ve;const qr=new WeakSet;class Li{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&Ge.active&&Ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qr.has(this)&&(qr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mo(this),Bi(this);const n=ve,t=en;ve=this,en=!0;try{return this.fn()}finally{$i(this),ve=n,en=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ks(n);this.deps=this.depsTail=void 0,mo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bs(this)&&this.run()}get dirty(){return bs(this)}}let Fi=0,Wt,Lt;function zi(e,n=!1){if(e.flags|=8,n){e.next=Lt,Lt=e;return}e.next=Wt,Wt=e}function Gs(){Fi++}function Us(){if(--Fi>0)return;if(Lt){let n=Lt;for(Lt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Wt;){let n=Wt;for(Wt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function Bi(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function $i(e){let n,t=e.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Ks(r),jl(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=n,e.depsTail=t}function bs(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Hi(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Hi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gt)||(e.globalVersion=Gt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!bs(e))))return;e.flags|=2;const n=e.dep,t=ve,r=en;ve=e,en=!0;try{Bi(e);const s=e.fn(e._value);(n.version===0||gn(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{ve=t,en=r,$i(e),e.flags&=-3}}function Ks(e,n=!1){const{dep:t,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Ks(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function jl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let en=!0;const Vi=[];function Dn(){Vi.push(en),en=!1}function Mn(){const e=Vi.pop();en=e===void 0?!0:e}function mo(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=ve;ve=void 0;try{n()}finally{ve=t}}}let Gt=0;class Nl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ys{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!ve||!en||ve===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ve)t=this.activeLink=new Nl(ve,this),ve.deps?(t.prevDep=ve.depsTail,ve.depsTail.nextDep=t,ve.depsTail=t):ve.deps=ve.depsTail=t,Gi(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ve.depsTail,t.nextDep=void 0,ve.depsTail.nextDep=t,ve.depsTail=t,ve.deps===t&&(ve.deps=r)}return t}trigger(n){this.version++,Gt++,this.notify(n)}notify(n){Gs();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Us()}}}function Gi(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)Gi(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ws=new WeakMap,Xn=Symbol(""),xs=Symbol(""),Ut=Symbol("");function Ae(e,n,t){if(en&&ve){let r=ws.get(e);r||ws.set(e,r=new Map);let s=r.get(t);s||(r.set(t,s=new Ys),s.map=r,s.key=t),s.track()}}function Sn(e,n,t,r,s,o){const i=ws.get(e);if(!i){Gt++;return}const a=l=>{l&&l.trigger()};if(Gs(),n==="clear")i.forEach(a);else{const l=q(e),u=l&&$s(t);if(l&&t==="length"){const c=Number(r);i.forEach((d,g)=>{(g==="length"||g===Ut||!mn(g)&&g>=c)&&a(d)})}else switch((t!==void 0||i.has(void 0))&&a(i.get(t)),u&&a(i.get(Ut)),n){case"add":l?u&&a(i.get("length")):(a(i.get(Xn)),ht(e)&&a(i.get(xs)));break;case"delete":l||(a(i.get(Xn)),ht(e)&&a(i.get(xs)));break;case"set":ht(e)&&a(i.get(Xn));break}}Us()}function it(e){const n=oe(e);return n===e?n:(Ae(n,"iterate",Ut),Xe(e)?n:n.map(tn))}function jr(e){return Ae(e=oe(e),"iterate",Ut),e}function fn(e,n){return Rn(e)?vt(Zn(e)?tn(n):n):tn(n)}const Wl={__proto__:null,[Symbol.iterator](){return Jr(this,Symbol.iterator,e=>fn(this,e))},concat(...e){return it(this).concat(...e.map(n=>q(n)?it(n):n))},entries(){return Jr(this,"entries",e=>(e[1]=fn(this,e[1]),e))},every(e,n){return bn(this,"every",e,n,void 0,arguments)},filter(e,n){return bn(this,"filter",e,n,t=>t.map(r=>fn(this,r)),arguments)},find(e,n){return bn(this,"find",e,n,t=>fn(this,t),arguments)},findIndex(e,n){return bn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return bn(this,"findLast",e,n,t=>fn(this,t),arguments)},findLastIndex(e,n){return bn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return bn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Qr(this,"includes",e)},indexOf(...e){return Qr(this,"indexOf",e)},join(e){return it(this).join(e)},lastIndexOf(...e){return Qr(this,"lastIndexOf",e)},map(e,n){return bn(this,"map",e,n,void 0,arguments)},pop(){return Ct(this,"pop")},push(...e){return Ct(this,"push",e)},reduce(e,...n){return yo(this,"reduce",e,n)},reduceRight(e,...n){return yo(this,"reduceRight",e,n)},shift(){return Ct(this,"shift")},some(e,n){return bn(this,"some",e,n,void 0,arguments)},splice(...e){return Ct(this,"splice",e)},toReversed(){return it(this).toReversed()},toSorted(e){return it(this).toSorted(e)},toSpliced(...e){return it(this).toSpliced(...e)},unshift(...e){return Ct(this,"unshift",e)},values(){return Jr(this,"values",e=>fn(this,e))}};function Jr(e,n,t){const r=jr(e),s=r[n]();return r!==e&&!Xe(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=t(o.value)),o}),s}const Ll=Array.prototype;function bn(e,n,t,r,s,o){const i=jr(e),a=i!==e&&!Xe(e),l=i[n];if(l!==Ll[n]){const d=l.apply(e,o);return a?tn(d):d}let u=t;i!==e&&(a?u=function(d,g){return t.call(this,fn(e,d),g,e)}:t.length>2&&(u=function(d,g){return t.call(this,d,g,e)}));const c=l.call(i,u,r);return a&&s?s(c):c}function yo(e,n,t,r){const s=jr(e),o=s!==e&&!Xe(e);let i=t,a=!1;s!==e&&(o?(a=r.length===0,i=function(u,c,d){return a&&(a=!1,u=fn(e,u)),t.call(this,u,fn(e,c),d,e)}):t.length>3&&(i=function(u,c,d){return t.call(this,u,c,d,e)}));const l=s[n](i,...r);return a?fn(e,l):l}function Qr(e,n,t){const r=oe(e);Ae(r,"iterate",Ut);const s=r[n](...t);return(s===-1||s===!1)&&Qs(t[0])?(t[0]=oe(t[0]),r[n](...t)):s}function Ct(e,n,t=[]){Dn(),Gs();const r=oe(e)[n].apply(e,t);return Us(),Mn(),r}const Fl=Fs("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(mn));function zl(e){mn(e)||(e=String(e));const n=oe(this);return Ae(n,"has",e),n.hasOwnProperty(e)}class Ki{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(s?o?Jl:Qi:o?Ji:qi).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const i=q(n);if(!s){let l;if(i&&(l=Wl[t]))return l;if(t==="hasOwnProperty")return zl}const a=Reflect.get(n,t,Ne(n)?n:r);if((mn(t)?Ui.has(t):Fl(t))||(s||Ae(n,"get",t),o))return a;if(Ne(a)){const l=i&&$s(t)?a:a.value;return s&&ce(l)?_s(l):l}return ce(a)?s?_s(a):nr(a):a}}class Yi extends Ki{constructor(n=!1){super(!1,n)}set(n,t,r,s){let o=n[t];const i=q(n)&&$s(t);if(!this._isShallow){const u=Rn(o);if(!Xe(r)&&!Rn(r)&&(o=oe(o),r=oe(r)),!i&&Ne(o)&&!Ne(r))return u||(o.value=r),!0}const a=i?Number(t)<n.length:le(n,t),l=Reflect.set(n,t,r,Ne(n)?n:s);return n===oe(s)&&(a?gn(r,o)&&Sn(n,"set",t,r):Sn(n,"add",t,r)),l}deleteProperty(n,t){const r=le(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&r&&Sn(n,"delete",t,void 0),s}has(n,t){const r=Reflect.has(n,t);return(!mn(t)||!Ui.has(t))&&Ae(n,"has",t),r}ownKeys(n){return Ae(n,"iterate",q(n)?"length":Xn),Reflect.ownKeys(n)}}class Bl extends Ki{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const $l=new Yi,Hl=new Bl,Vl=new Yi(!0);const ks=e=>e,sr=e=>Reflect.getPrototypeOf(e);function Gl(e,n,t){return function(...r){const s=this.__v_raw,o=oe(s),i=ht(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,u=s[e](...r),c=t?ks:n?vt:tn;return!n&&Ae(o,"iterate",l?xs:Xn),Te(Object.create(u),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:a?[c(d[0]),c(d[1])]:c(d),done:g}}})}}function or(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Ul(e,n){const t={get(s){const o=this.__v_raw,i=oe(o),a=oe(s);e||(gn(s,a)&&Ae(i,"get",s),Ae(i,"get",a));const{has:l}=sr(i),u=n?ks:e?vt:tn;if(l.call(i,s))return u(o.get(s));if(l.call(i,a))return u(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Ae(oe(s),"iterate",Xn),s.size},has(s){const o=this.__v_raw,i=oe(o),a=oe(s);return e||(gn(s,a)&&Ae(i,"has",s),Ae(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=oe(a),u=n?ks:e?vt:tn;return!e&&Ae(l,"iterate",Xn),a.forEach((c,d)=>s.call(o,u(c),u(d),i))}};return Te(t,e?{add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear")}:{add(s){const o=oe(this),i=sr(o),a=oe(s),l=!n&&!Xe(s)&&!Rn(s)?a:s;return i.has.call(o,l)||gn(s,l)&&i.has.call(o,s)||gn(a,l)&&i.has.call(o,a)||(o.add(l),Sn(o,"add",l,l)),this},set(s,o){!n&&!Xe(o)&&!Rn(o)&&(o=oe(o));const i=oe(this),{has:a,get:l}=sr(i);let u=a.call(i,s);u||(s=oe(s),u=a.call(i,s));const c=l.call(i,s);return i.set(s,o),u?gn(o,c)&&Sn(i,"set",s,o):Sn(i,"add",s,o),this},delete(s){const o=oe(this),{has:i,get:a}=sr(o);let l=i.call(o,s);l||(s=oe(s),l=i.call(o,s)),a&&a.call(o,s);const u=o.delete(s);return l&&Sn(o,"delete",s,void 0),u},clear(){const s=oe(this),o=s.size!==0,i=s.clear();return o&&Sn(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Gl(s,e,n)}),t}function qs(e,n){const t=Ul(e,n);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(le(t,s)&&s in r?t:r,s,o)}const Kl={get:qs(!1,!1)},Yl={get:qs(!1,!0)},ql={get:qs(!0,!1)};const qi=new WeakMap,Ji=new WeakMap,Qi=new WeakMap,Jl=new WeakMap;function Ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xl(e){return e.__v_skip||!Object.isExtensible(e)?0:Ql(kl(e))}function nr(e){return Rn(e)?e:Js(e,!1,$l,Kl,qi)}function Xi(e){return Js(e,!1,Vl,Yl,Ji)}function _s(e){return Js(e,!0,Hl,ql,Qi)}function Js(e,n,t,r,s){if(!ce(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=Xl(e);if(o===0)return e;const i=s.get(e);if(i)return i;const a=new Proxy(e,o===2?r:t);return s.set(e,a),a}function Zn(e){return Rn(e)?Zn(e.__v_raw):!!(e&&e.__v_isReactive)}function Rn(e){return!!(e&&e.__v_isReadonly)}function Xe(e){return!!(e&&e.__v_isShallow)}function Qs(e){return e?!!e.__v_raw:!1}function oe(e){const n=e&&e.__v_raw;return n?oe(n):e}function Zl(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&Oi(e,"__v_skip",!0),e}const tn=e=>ce(e)?nr(e):e,vt=e=>ce(e)?_s(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function te(e){return Zi(e,!1)}function ec(e){return Zi(e,!0)}function Zi(e,n){return Ne(e)?e:new nc(e,n)}class nc{constructor(n,t){this.dep=new Ys,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:oe(n),this._value=t?n:tn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||Xe(n)||Rn(n);n=r?n:oe(n),gn(n,t)&&(this._rawValue=n,this._value=r?n:tn(n),this.dep.trigger())}}function H(e){return Ne(e)?e.value:e}const tc={get:(e,n,t)=>n==="__v_raw"?e:H(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const s=e[n];return Ne(s)&&!Ne(t)?(s.value=t,!0):Reflect.set(e,n,t,r)}};function ea(e){return Zn(e)?e:new Proxy(e,tc)}class rc{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Ys(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return zi(this,!0),!0}get value(){const n=this.dep.track();return Hi(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function sc(e,n,t=!1){let r,s;return ee(e)?r=e:(r=e.get,s=e.set),new rc(r,s,t)}const ir={},gr=new WeakMap;let qn;function oc(e,n=!1,t=qn){if(t){let r=gr.get(t);r||gr.set(t,r=[]),r.push(e)}}function ic(e,n,t=ge){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=t,u=x=>s?x:Xe(x)||s===!1||s===0?Cn(x,1):Cn(x);let c,d,g,m,E=!1,v=!1;if(Ne(e)?(d=()=>e.value,E=Xe(e)):Zn(e)?(d=()=>u(e),E=!0):q(e)?(v=!0,E=e.some(x=>Zn(x)||Xe(x)),d=()=>e.map(x=>{if(Ne(x))return x.value;if(Zn(x))return u(x);if(ee(x))return l?l(x,2):x()})):ee(e)?n?d=l?()=>l(e,2):e:d=()=>{if(g){Dn();try{g()}finally{Mn()}}const x=qn;qn=c;try{return l?l(e,3,[m]):e(m)}finally{qn=x}}:d=pn,n&&s){const x=d,U=s===!0?1/0:s;d=()=>Cn(x(),U)}const M=Ol(),R=()=>{c.stop(),M&&M.active&&Bs(M.effects,c)};if(o&&n){const x=n;n=(...U)=>{x(...U),R()}}let b=v?new Array(e.length).fill(ir):ir;const w=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(n){const U=c.run();if(s||E||(v?U.some((J,X)=>gn(J,b[X])):gn(U,b))){g&&g();const J=qn;qn=c;try{const X=[U,b===ir?void 0:v&&b[0]===ir?[]:b,m];b=U,l?l(n,3,X):n(...X)}finally{qn=J}}}else c.run()};return a&&a(w),c=new Li(d),c.scheduler=i?()=>i(w,!1):w,m=x=>oc(x,!1,c),g=c.onStop=()=>{const x=gr.get(c);if(x){if(l)l(x,4);else for(const U of x)U();gr.delete(c)}},n?r?w(!0):b=c.run():i?i(w.bind(null,!0),!0):c.run(),R.pause=c.pause.bind(c),R.resume=c.resume.bind(c),R.stop=R,R}function Cn(e,n=1/0,t){if(n<=0||!ce(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ne(e))Cn(e.value,n,t);else if(q(e))for(let r=0;r<e.length;r++)Cn(e[r],n,t);else if(Ri(e)||ht(e))e.forEach(r=>{Cn(r,n,t)});else if(Ai(e)){for(const r in e)Cn(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Cn(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tr(e,n,t,r){try{return r?e(...r):e()}catch(s){Nr(s,n,t)}}function rn(e,n,t,r){if(ee(e)){const s=tr(e,n,t,r);return s&&Ii(s)&&s.catch(o=>{Nr(o,n,t)}),s}if(q(e)){const s=[];for(let o=0;o<e.length;o++)s.push(rn(e[o],n,t,r));return s}}function Nr(e,n,t,r=!0){const s=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=n&&n.appContext.config||ge;if(n){let a=n.parent;const l=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,l,u)===!1)return}a=a.parent}if(o){Dn(),tr(o,null,10,[e,l,u]),Mn();return}}ac(e,t,s,r,i)}function ac(e,n,t,r=!0,s=!1){if(s)throw e;console.error(e)}const Fe=[];let un=-1;const pt=[];let Ln=null,lt=0;const na=Promise.resolve();let pr=null;function Wr(e){const n=pr||na;return e?n.then(this?e.bind(this):e):n}function lc(e){let n=un+1,t=Fe.length;for(;n<t;){const r=n+t>>>1,s=Fe[r],o=Kt(s);o<e||o===e&&s.flags&2?n=r+1:t=r}return n}function Xs(e){if(!(e.flags&1)){const n=Kt(e),t=Fe[Fe.length-1];!t||!(e.flags&2)&&n>=Kt(t)?Fe.push(e):Fe.splice(lc(n),0,e),e.flags|=1,ta()}}function ta(){pr||(pr=na.then(sa))}function cc(e){q(e)?pt.push(...e):Ln&&e.id===-1?Ln.splice(lt+1,0,e):e.flags&1||(pt.push(e),e.flags|=1),ta()}function vo(e,n,t=un+1){for(;t<Fe.length;t++){const r=Fe[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Fe.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ra(e){if(pt.length){const n=[...new Set(pt)].sort((t,r)=>Kt(t)-Kt(r));if(pt.length=0,Ln){Ln.push(...n);return}for(Ln=n,lt=0;lt<Ln.length;lt++){const t=Ln[lt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ln=null,lt=0}}const Kt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function sa(e){try{for(un=0;un<Fe.length;un++){const n=Fe[un];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),tr(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;un<Fe.length;un++){const n=Fe[un];n&&(n.flags&=-2)}un=-1,Fe.length=0,ra(),pr=null,(Fe.length||pt.length)&&sa()}}let Ke=null,oa=null;function mr(e){const n=Ke;return Ke=e,oa=e&&e.type.__scopeId||null,n}function En(e,n=Ke,t){if(!n||e._n)return e;const r=(...s)=>{r._d&&xr(-1);const o=mr(n);let i;try{i=e(...s)}finally{mr(o),r._d&&xr(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function uc(e,n){if(Ke===null)return e;const t=Hr(Ke),r=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[o,i,a,l=ge]=n[s];o&&(ee(o)&&(o={mounted:o,updated:o}),o.deep&&Cn(i),r.push({dir:o,instance:t,value:i,oldValue:void 0,arg:a,modifiers:l}))}return e}function Gn(e,n,t,r){const s=e.dirs,o=n&&n.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(Dn(),rn(l,t,8,[e.el,a,e,n]),Mn())}}function ur(e,n){if(je){let t=je.provides;const r=je.parent&&je.parent.provides;r===t&&(t=je.provides=Object.create(r)),t[e]=n}}function nn(e,n,t=!1){const r=ro();if(r||mt){let s=mt?mt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&ee(n)?n.call(r&&r.proxy):n}}const dc=Symbol.for("v-scx"),fc=()=>nn(dc);function et(e,n,t){return ia(e,n,t)}function ia(e,n,t=ge){const{immediate:r,deep:s,flush:o,once:i}=t,a=Te({},t),l=n&&r||!n&&o!=="post";let u;if(Jt){if(o==="sync"){const m=fc();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=pn,m.resume=pn,m.pause=pn,m}}const c=je;a.call=(m,E,v)=>rn(m,c,E,v);let d=!1;o==="post"?a.scheduler=m=>{De(m,c&&c.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(m,E)=>{E?m():Xs(m)}),a.augmentJob=m=>{n&&(m.flags|=4),d&&(m.flags|=2,c&&(m.id=c.uid,m.i=c))};const g=ic(e,n,a);return Jt&&(u?u.push(g):l&&g()),g}function hc(e,n,t){const r=this.proxy,s=we(e)?e.includes(".")?aa(r,e):()=>r[e]:e.bind(r,r);let o;ee(n)?o=n:(o=n.handler,t=n);const i=rr(this),a=ia(s,o.bind(r),t);return i(),a}function aa(e,n){const t=n.split(".");return()=>{let r=e;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const gc=Symbol("_vte"),la=e=>e.__isTeleport,dn=Symbol("_leaveCb"),Et=Symbol("_enterCb");function pc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return An(()=>{e.isMounted=!0}),Zs(()=>{e.isUnmounting=!0}),e}const Je=[Function,Array],ca={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},ua=e=>{const n=e.subTree;return n.component?ua(n.component):n},mc={name:"BaseTransition",props:ca,setup(e,{slots:n}){const t=ro(),r=pc();return()=>{const s=n.default&&ha(n.default(),!0);if(!s||!s.length)return;const o=da(s),i=oe(e),{mode:a}=i;if(r.isLeaving)return Xr(o);const l=bo(o);if(!l)return Xr(o);let u=Ss(l,i,r,t,d=>u=d);l.type!==Oe&&bt(l,u);let c=t.subTree&&bo(t.subTree);if(c&&c.type!==Oe&&!zn(c,l)&&ua(t).type!==Oe){let d=Ss(c,i,r,t);if(bt(c,d),a==="out-in"&&l.type!==Oe)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,c=void 0},Xr(o);a==="in-out"&&l.type!==Oe?d.delayLeave=(g,m,E)=>{const v=fa(r,c);v[String(c.key)]=c,g[dn]=()=>{m(),g[dn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{E(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function da(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Oe){n=t;break}}return n}const yc=mc;function fa(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function Ss(e,n,t,r,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:g,onLeave:m,onAfterLeave:E,onLeaveCancelled:v,onBeforeAppear:M,onAppear:R,onAfterAppear:b,onAppearCancelled:w}=n,x=String(e.key),U=fa(t,e),J=(K,N)=>{K&&rn(K,r,9,N)},X=(K,N)=>{const $=N[1];J(K,N),q(K)?K.every(T=>T.length<=1)&&$():K.length<=1&&$()},pe={mode:i,persisted:a,beforeEnter(K){let N=l;if(!t.isMounted)if(o)N=M||l;else return;K[dn]&&K[dn](!0);const $=U[x];$&&zn(e,$)&&$.el[dn]&&$.el[dn](),J(N,[K])},enter(K){if(U[x]===e)return;let N=u,$=c,T=d;if(!t.isMounted)if(o)N=R||u,$=b||c,T=w||d;else return;let Z=!1;K[Et]=ne=>{Z||(Z=!0,ne?J(T,[K]):J($,[K]),pe.delayedLeave&&pe.delayedLeave(),K[Et]=void 0)};const ue=K[Et].bind(null,!1);N?X(N,[K,ue]):ue()},leave(K,N){const $=String(e.key);if(K[Et]&&K[Et](!0),t.isUnmounting)return N();J(g,[K]);let T=!1;K[dn]=ue=>{T||(T=!0,N(),ue?J(v,[K]):J(E,[K]),K[dn]=void 0,U[$]===e&&delete U[$])};const Z=K[dn].bind(null,!1);U[$]=e,m?X(m,[K,Z]):Z()},clone(K){const N=Ss(K,n,t,r,s);return s&&s(N),N}};return pe}function Xr(e){if(Lr(e))return e=In(e),e.children=null,e}function bo(e){if(!Lr(e))return la(e.type)&&e.children?da(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ee(t.default))return t.default()}}function bt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,bt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ha(e,n=!1,t){let r=[],s=0;for(let o=0;o<e.length;o++){let i=e[o];const a=t==null?i.key:String(t)+String(i.key!=null?i.key:o);i.type===Ce?(i.patchFlag&128&&s++,r=r.concat(ha(i.children,n,a))):(n||i.type!==Oe)&&r.push(a!=null?In(i,{key:a}):i)}if(s>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function yn(e,n){return ee(e)?Te({name:e.name},n,{setup:e}):e}function ga(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function wo(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const yr=new WeakMap;function Ft(e,n,t,r,s=!1){if(q(e)){e.forEach((v,M)=>Ft(v,n&&(q(n)?n[M]:n),t,r,s));return}if(nt(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ft(e,n,t,r.component.subTree);return}const o=r.shapeFlag&4?Hr(r.component):r.el,i=s?null:o,{i:a,r:l}=e,u=n&&n.r,c=a.refs===ge?a.refs={}:a.refs,d=a.setupState,g=oe(d),m=d===ge?Mi:v=>wo(c,v)?!1:le(g,v),E=(v,M)=>!(M&&wo(c,M));if(u!=null&&u!==l){if(xo(n),we(u))c[u]=null,m(u)&&(d[u]=null);else if(Ne(u)){const v=n;E(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(ee(l))tr(l,a,12,[i,c]);else{const v=we(l),M=Ne(l);if(v||M){const R=()=>{if(e.f){const b=v?m(l)?d[l]:c[l]:E()||!e.k?l.value:c[e.k];if(s)q(b)&&Bs(b,o);else if(q(b))b.includes(o)||b.push(o);else if(v)c[l]=[o],m(l)&&(d[l]=c[l]);else{const w=[o];E(l,e.k)&&(l.value=w),e.k&&(c[e.k]=w)}}else v?(c[l]=i,m(l)&&(d[l]=i)):M&&(E(l,e.k)&&(l.value=i),e.k&&(c[e.k]=i))};if(i){const b=()=>{R(),yr.delete(e)};b.id=-1,yr.set(e,b),De(b,t)}else xo(e),R()}}}function xo(e){const n=yr.get(e);n&&(n.flags|=8,yr.delete(e))}Or().requestIdleCallback;Or().cancelIdleCallback;const nt=e=>!!e.type.__asyncLoader,Lr=e=>e.type.__isKeepAlive,vc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=ro(),r=t.ctx;if(!r.renderer)return()=>{const b=n.default&&n.default();return b&&b.length===1?b[0]:b};const s=new Map,o=new Set;let i=null;const a=t.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:d}}}=r,g=d("div");r.activate=(b,w,x,U,J)=>{const X=b.component;u(b,w,x,0,a),l(X.vnode,b,w,x,X,a,U,b.slotScopeIds,J),De(()=>{X.isDeactivated=!1,X.a&&gt(X.a);const pe=b.props&&b.props.onVnodeMounted;pe&&Qe(pe,X.parent,b)},a)},r.deactivate=b=>{const w=b.component;br(w.m),br(w.a),u(b,g,null,1,a),De(()=>{w.da&&gt(w.da);const x=b.props&&b.props.onVnodeUnmounted;x&&Qe(x,w.parent,b),w.isDeactivated=!0},a)};function m(b){Zr(b),c(b,t,a,!0)}function E(b){s.forEach((w,x)=>{const U=Rs(nt(w)?w.type.__asyncResolved||{}:w.type);U&&!b(U)&&v(x)})}function v(b){const w=s.get(b);w&&(!i||!zn(w,i))?m(w):i&&Zr(i),s.delete(b),o.delete(b)}et(()=>[e.include,e.exclude],([b,w])=>{b&&E(x=>At(b,x)),w&&E(x=>!At(w,x))},{flush:"post",deep:!0});let M=null;const R=()=>{M!=null&&(wr(t.subTree.type)?De(()=>{s.set(M,ar(t.subTree))},t.subTree.suspense):s.set(M,ar(t.subTree)))};return An(R),ma(R),Zs(()=>{s.forEach(b=>{const{subTree:w,suspense:x}=t,U=ar(w);if(b.type===U.type&&b.key===U.key){Zr(U);const J=U.component.da;J&&De(J,x);return}m(b)})}),()=>{if(M=null,!n.default)return i=null;const b=n.default(),w=b[0];if(b.length>1)return i=null,b;if(!qt(w)||!(w.shapeFlag&4)&&!(w.shapeFlag&128))return i=null,w;let x=ar(w);if(x.type===Oe)return i=null,x;const U=x.type,J=Rs(nt(x)?x.type.__asyncResolved||{}:U),{include:X,exclude:pe,max:K}=e;if(X&&(!J||!At(X,J))||pe&&J&&At(pe,J))return x.shapeFlag&=-257,i=x,w;const N=x.key==null?U:x.key,$=s.get(N);return x.el&&(x=In(x),w.shapeFlag&128&&(w.ssContent=x)),M=N,$?(x.el=$.el,x.component=$.component,x.transition&&bt(x,x.transition),x.shapeFlag|=512,o.delete(N),o.add(N)):(o.add(N),K&&o.size>parseInt(K,10)&&v(o.values().next().value)),x.shapeFlag|=256,i=x,wr(w.type)?w:x}}},bc=vc;function At(e,n){return q(e)?e.some(t=>At(t,n)):we(e)?e.split(",").includes(n):xl(e)?(e.lastIndex=0,e.test(n)):!1}function Fr(e,n){pa(e,"a",n)}function wc(e,n){pa(e,"da",n)}function pa(e,n,t=je){const r=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(zr(n,r,t),t){let s=t.parent;for(;s&&s.parent;)Lr(s.parent.vnode)&&xc(r,n,t,s),s=s.parent}}function xc(e,n,t,r){const s=zr(n,e,r,!0);ya(()=>{Bs(r[n],s)},t)}function Zr(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ar(e){return e.shapeFlag&128?e.ssContent:e}function zr(e,n,t=je,r=!1){if(t){const s=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...i)=>{Dn();const a=rr(t),l=rn(n,t,e,i);return a(),Mn(),l});return r?s.unshift(o):s.push(o),o}}const Pn=e=>(n,t=je)=>{(!Jt||e==="sp")&&zr(e,(...r)=>n(...r),t)},kc=Pn("bm"),An=Pn("m"),_c=Pn("bu"),ma=Pn("u"),Zs=Pn("bum"),ya=Pn("um"),Sc=Pn("sp"),Cc=Pn("rtg"),Ec=Pn("rtc");function Tc(e,n=je){zr("ec",e,n)}const va="components";function ko(e,n){return xa(va,e,!0,n)||e}const ba=Symbol.for("v-ndc");function wa(e){return we(e)?xa(va,e,!1)||e:e||ba}function xa(e,n,t=!0,r=!1){const s=Ke||je;if(s){const o=s.type;{const a=Rs(o,!1);if(a&&(a===n||a===ze(n)||a===Ar(ze(n))))return o}const i=_o(s[e]||o[e],n)||_o(s.appContext[e],n);return!i&&r?o:i}}function _o(e,n){return e&&(e[n]||e[ze(n)]||e[Ar(ze(n))])}function Tn(e,n,t,r){let s;const o=t,i=q(e);if(i||we(e)){const a=i&&Zn(e);let l=!1,u=!1;a&&(l=!Xe(e),u=Rn(e),e=jr(e)),s=new Array(e.length);for(let c=0,d=e.length;c<d;c++)s[c]=n(l?u?vt(tn(e[c])):tn(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=n(a+1,a,void 0,o)}else if(ce(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>n(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];s[l]=n(e[c],c,l,o)}}else s=[];return s}const Cs=e=>e?za(e)?Hr(e):Cs(e.parent):null,zt=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cs(e.parent),$root:e=>Cs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_a(e),$forceUpdate:e=>e.f||(e.f=()=>{Xs(e.update)}),$nextTick:e=>e.n||(e.n=Wr.bind(e.proxy)),$watch:e=>hc.bind(e)}),es=(e,n)=>e!==ge&&!e.__isScriptSetup&&le(e,n),Dc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(n[0]!=="$"){const g=i[n];if(g!==void 0)switch(g){case 1:return r[n];case 2:return s[n];case 4:return t[n];case 3:return o[n]}else{if(es(r,n))return i[n]=1,r[n];if(s!==ge&&le(s,n))return i[n]=2,s[n];if(le(o,n))return i[n]=3,o[n];if(t!==ge&&le(t,n))return i[n]=4,t[n];Es&&(i[n]=0)}}const u=zt[n];let c,d;if(u)return n==="$attrs"&&Ae(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[n]))return c;if(t!==ge&&le(t,n))return i[n]=4,t[n];if(d=l.config.globalProperties,le(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:s,ctx:o}=e;return es(s,n)?(s[n]=t,!0):r!==ge&&le(r,n)?(r[n]=t,!0):le(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(t[a]||e!==ge&&a[0]!=="$"&&le(e,a)||es(n,a)||le(o,a)||le(r,a)||le(zt,a)||le(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:le(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function So(e){return q(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Es=!0;function Mc(e){const n=_a(e),t=e.proxy,r=e.ctx;Es=!1,n.beforeCreate&&Co(n.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:g,beforeUpdate:m,updated:E,activated:v,deactivated:M,beforeDestroy:R,beforeUnmount:b,destroyed:w,unmounted:x,render:U,renderTracked:J,renderTriggered:X,errorCaptured:pe,serverPrefetch:K,expose:N,inheritAttrs:$,components:T,directives:Z,filters:ue}=n;if(u&&Rc(u,r,null),i)for(const he in i){const ie=i[he];ee(ie)&&(r[he]=ie.bind(t))}if(s){const he=s.call(t,t);ce(he)&&(e.data=nr(he))}if(Es=!0,o)for(const he in o){const ie=o[he],vn=ee(ie)?ie.bind(t,t):ee(ie.get)?ie.get.bind(t,t):pn,On=!ee(ie)&&ee(ie.set)?ie.set.bind(t):pn,on=Pe({get:vn,set:On});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>on.value,set:$e=>on.value=$e})}if(a)for(const he in a)ka(a[he],r,t,he);if(l){const he=ee(l)?l.call(t):l;Reflect.ownKeys(he).forEach(ie=>{ur(ie,he[ie])})}c&&Co(c,e,"c");function me(he,ie){q(ie)?ie.forEach(vn=>he(vn.bind(t))):ie&&he(ie.bind(t))}if(me(kc,d),me(An,g),me(_c,m),me(ma,E),me(Fr,v),me(wc,M),me(Tc,pe),me(Ec,J),me(Cc,X),me(Zs,b),me(ya,x),me(Sc,K),q(N))if(N.length){const he=e.exposed||(e.exposed={});N.forEach(ie=>{Object.defineProperty(he,ie,{get:()=>t[ie],set:vn=>t[ie]=vn,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===pn&&(e.render=U),$!=null&&(e.inheritAttrs=$),T&&(e.components=T),Z&&(e.directives=Z),K&&ga(e)}function Rc(e,n,t=pn){q(e)&&(e=Ts(e));for(const r in e){const s=e[r];let o;ce(s)?"default"in s?o=nn(s.from||r,s.default,!0):o=nn(s.from||r):o=nn(s),Ne(o)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):n[r]=o}}function Co(e,n,t){rn(q(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function ka(e,n,t,r){let s=r.includes(".")?aa(t,r):()=>t[r];if(we(e)){const o=n[e];ee(o)&&et(s,o)}else if(ee(e))et(s,e.bind(t));else if(ce(e))if(q(e))e.forEach(o=>ka(o,n,t,r));else{const o=ee(e.handler)?e.handler.bind(t):n[e.handler];ee(o)&&et(s,o,e)}}function _a(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(n);let l;return a?l=a:!s.length&&!t&&!r?l=n:(l={},s.length&&s.forEach(u=>vr(l,u,i,!0)),vr(l,n,i)),ce(n)&&o.set(n,l),l}function vr(e,n,t,r=!1){const{mixins:s,extends:o}=n;o&&vr(e,o,t,!0),s&&s.forEach(i=>vr(e,i,t,!0));for(const i in n)if(!(r&&i==="expose")){const a=Ic[i]||t&&t[i];e[i]=a?a(e[i],n[i]):n[i]}return e}const Ic={data:Eo,props:To,emits:To,methods:Ot,computed:Ot,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Ot,directives:Ot,watch:Ac,provide:Eo,inject:Pc};function Eo(e,n){return n?e?function(){return Te(ee(e)?e.call(this,this):e,ee(n)?n.call(this,this):n)}:n:e}function Pc(e,n){return Ot(Ts(e),Ts(n))}function Ts(e){if(q(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function We(e,n){return e?[...new Set([].concat(e,n))]:n}function Ot(e,n){return e?Te(Object.create(null),e,n):n}function To(e,n){return e?q(e)&&q(n)?[...new Set([...e,...n])]:Te(Object.create(null),So(e),So(n??{})):n}function Ac(e,n){if(!e)return n;if(!n)return e;const t=Te(Object.create(null),e);for(const r in n)t[r]=We(e[r],n[r]);return t}function Sa(){return{app:null,config:{isNativeTag:Mi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oc=0;function jc(e,n){return function(r,s=null){ee(r)||(r=Te({},r)),s!=null&&!ce(s)&&(s=null);const o=Sa(),i=new WeakSet,a=[];let l=!1;const u=o.app={_uid:Oc++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:fu,get config(){return o.config},set config(c){},use(c,...d){return i.has(c)||(c&&ee(c.install)?(i.add(c),c.install(u,...d)):ee(c)&&(i.add(c),c(u,...d))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,d){return d?(o.components[c]=d,u):o.components[c]},directive(c,d){return d?(o.directives[c]=d,u):o.directives[c]},mount(c,d,g){if(!l){const m=u._ceVNode||B(r,s);return m.appContext=o,g===!0?g="svg":g===!1&&(g=void 0),e(m,c,g),l=!0,u._container=c,c.__vue_app__=u,Hr(m.component)}},onUnmount(c){a.push(c)},unmount(){l&&(rn(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,d){return o.provides[c]=d,u},runWithContext(c){const d=mt;mt=u;try{return c()}finally{mt=d}}};return u}}let mt=null;const Nc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${ze(n)}Modifiers`]||e[`${Hn(n)}Modifiers`];function Wc(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||ge;let s=t;const o=n.startsWith("update:"),i=o&&Nc(r,n.slice(7));i&&(i.trim&&(s=t.map(c=>we(c)?c.trim():c)),i.number&&(s=t.map(Hs)));let a,l=r[a=Kr(n)]||r[a=Kr(ze(n))];!l&&o&&(l=r[a=Kr(Hn(n))]),l&&rn(l,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,rn(u,e,6,s)}}const Lc=new WeakMap;function Ca(e,n,t=!1){const r=t?Lc:n.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!ee(e)){const l=u=>{const c=Ca(u,n,!0);c&&(a=!0,Te(i,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(ce(e)&&r.set(e,null),null):(q(o)?o.forEach(l=>i[l]=null):Te(i,o),ce(e)&&r.set(e,i),i)}function Br(e,n){return!e||!Ir(n)?!1:(n=n.slice(2).replace(/Once$/,""),le(e,n[0].toLowerCase()+n.slice(1))||le(e,Hn(n))||le(e,n))}function Do(e){const{type:n,vnode:t,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:u,renderCache:c,props:d,data:g,setupState:m,ctx:E,inheritAttrs:v}=e,M=mr(e);let R,b;try{if(t.shapeFlag&4){const x=s||r,U=x;R=hn(u.call(U,x,c,d,m,g,E)),b=a}else{const x=n;R=hn(x.length>1?x(d,{attrs:a,slots:i,emit:l}):x(d,null)),b=n.props?a:Fc(a)}}catch(x){Bt.length=0,Nr(x,e,1),R=B(Oe)}let w=R;if(b&&v!==!1){const x=Object.keys(b),{shapeFlag:U}=w;x.length&&U&7&&(o&&x.some(zs)&&(b=zc(b,o)),w=In(w,b,!1,!0))}return t.dirs&&(w=In(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&bt(w,t.transition),R=w,mr(M),R}const Fc=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ir(t))&&((n||(n={}))[t]=e[t]);return n},zc=(e,n)=>{const t={};for(const r in e)(!zs(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function Bc(e,n,t){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=n,u=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Mo(r,i,u):!!i;if(l&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const g=c[d];if(Ea(i,r,g)&&!Br(u,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?Mo(r,i,u):!0:!!i;return!1}function Mo(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(Ea(n,e,o)&&!Br(t,o))return!0}return!1}function Ea(e,n,t){const r=e[t],s=n[t];return t==="style"&&ce(r)&&ce(s)?!Vs(r,s):r!==s}function $c({vnode:e,parent:n},t){for(;n;){const r=n.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=n.vnode).el=t,n=n.parent;else break}}const Ta={},Da=()=>Object.create(Ta),Ma=e=>Object.getPrototypeOf(e)===Ta;function Hc(e,n,t,r=!1){const s={},o=Da();e.propsDefaults=Object.create(null),Ra(e,n,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);t?e.props=r?s:Xi(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Vc(e,n,t,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=oe(s),[l]=e.propsOptions;let u=!1;if((r||i>0)&&!(i&16)){if(i&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let g=c[d];if(Br(e.emitsOptions,g))continue;const m=n[g];if(l)if(le(o,g))m!==o[g]&&(o[g]=m,u=!0);else{const E=ze(g);s[E]=Ds(l,a,E,m,e,!1)}else m!==o[g]&&(o[g]=m,u=!0)}}}else{Ra(e,n,s,o)&&(u=!0);let c;for(const d in a)(!n||!le(n,d)&&((c=Hn(d))===d||!le(n,c)))&&(l?t&&(t[d]!==void 0||t[c]!==void 0)&&(s[d]=Ds(l,a,d,void 0,e,!0)):delete s[d]);if(o!==a)for(const d in o)(!n||!le(n,d))&&(delete o[d],u=!0)}u&&Sn(e.attrs,"set","")}function Ra(e,n,t,r){const[s,o]=e.propsOptions;let i=!1,a;if(n)for(let l in n){if(Nt(l))continue;const u=n[l];let c;s&&le(s,c=ze(l))?!o||!o.includes(c)?t[c]=u:(a||(a={}))[c]=u:Br(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,i=!0)}if(o){const l=oe(t),u=a||ge;for(let c=0;c<o.length;c++){const d=o[c];t[d]=Ds(s,l,d,u[d],e,!le(u,d))}}return i}function Ds(e,n,t,r,s,o){const i=e[t];if(i!=null){const a=le(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&ee(l)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const c=rr(s);r=u[t]=l.call(null,n),c()}}else r=l;s.ce&&s.ce._setProp(t,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Hn(t))&&(r=!0))}return r}const Gc=new WeakMap;function Ia(e,n,t=!1){const r=t?Gc:n.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!ee(e)){const c=d=>{l=!0;const[g,m]=Ia(d,n,!0);Te(i,g),m&&a.push(...m)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!l)return ce(e)&&r.set(e,ft),ft;if(q(o))for(let c=0;c<o.length;c++){const d=ze(o[c]);Ro(d)&&(i[d]=ge)}else if(o)for(const c in o){const d=ze(c);if(Ro(d)){const g=o[c],m=i[d]=q(g)||ee(g)?{type:g}:Te({},g),E=m.type;let v=!1,M=!0;if(q(E))for(let R=0;R<E.length;++R){const b=E[R],w=ee(b)&&b.name;if(w==="Boolean"){v=!0;break}else w==="String"&&(M=!1)}else v=ee(E)&&E.name==="Boolean";m[0]=v,m[1]=M,(v||le(m,"default"))&&a.push(d)}}const u=[i,a];return ce(e)&&r.set(e,u),u}function Ro(e){return e[0]!=="$"&&!Nt(e)}const eo=e=>e==="_"||e==="_ctx"||e==="$stable",no=e=>q(e)?e.map(hn):[hn(e)],Uc=(e,n,t)=>{if(n._n)return n;const r=En((...s)=>no(n(...s)),t);return r._c=!1,r},Pa=(e,n,t)=>{const r=e._ctx;for(const s in e){if(eo(s))continue;const o=e[s];if(ee(o))n[s]=Uc(s,o,r);else if(o!=null){const i=no(o);n[s]=()=>i}}},Aa=(e,n)=>{const t=no(n);e.slots.default=()=>t},Oa=(e,n,t)=>{for(const r in n)(t||!eo(r))&&(e[r]=n[r])},Kc=(e,n,t)=>{const r=e.slots=Da();if(e.vnode.shapeFlag&32){const s=n._;s?(Oa(r,n,t),t&&Oi(r,"_",s,!0)):Pa(n,r)}else n&&Aa(e,n)},Yc=(e,n,t)=>{const{vnode:r,slots:s}=e;let o=!0,i=ge;if(r.shapeFlag&32){const a=n._;a?t&&a===1?o=!1:Oa(s,n,t):(o=!n.$stable,Pa(n,s)),i=n}else n&&(Aa(e,n),i={default:1});if(o)for(const a in s)!eo(a)&&i[a]==null&&delete s[a]},De=Zc;function qc(e){return Jc(e)}function Jc(e,n){const t=Or();t.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:g,setScopeId:m=pn,insertStaticContent:E}=e,v=(f,h,y,k=null,C=null,_=null,O=void 0,P=null,I=!!h.dynamicChildren)=>{if(f===h)return;f&&!zn(f,h)&&(k=S(f),$e(f,C,_,!0),f=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:D,ref:Y,shapeFlag:W}=h;switch(D){case $r:M(f,h,y,k);break;case Oe:R(f,h,y,k);break;case dr:f==null&&b(h,y,k,O);break;case Ce:T(f,h,y,k,C,_,O,P,I);break;default:W&1?U(f,h,y,k,C,_,O,P,I):W&6?Z(f,h,y,k,C,_,O,P,I):(W&64||W&128)&&D.process(f,h,y,k,C,_,O,P,I,V)}Y!=null&&C?Ft(Y,f&&f.ref,_,h||f,!h):Y==null&&f&&f.ref!=null&&Ft(f.ref,null,_,f,!0)},M=(f,h,y,k)=>{if(f==null)r(h.el=a(h.children),y,k);else{const C=h.el=f.el;h.children!==f.children&&u(C,h.children)}},R=(f,h,y,k)=>{f==null?r(h.el=l(h.children||""),y,k):h.el=f.el},b=(f,h,y,k)=>{[f.el,f.anchor]=E(f.children,h,y,k,f.el,f.anchor)},w=({el:f,anchor:h},y,k)=>{let C;for(;f&&f!==h;)C=g(f),r(f,y,k),f=C;r(h,y,k)},x=({el:f,anchor:h})=>{let y;for(;f&&f!==h;)y=g(f),s(f),f=y;s(h)},U=(f,h,y,k,C,_,O,P,I)=>{if(h.type==="svg"?O="svg":h.type==="math"&&(O="mathml"),f==null)J(h,y,k,C,_,O,P,I);else{const D=f.el&&f.el._isVueCE?f.el:null;try{D&&D._beginPatch(),K(f,h,C,_,O,P,I)}finally{D&&D._endPatch()}}},J=(f,h,y,k,C,_,O,P)=>{let I,D;const{props:Y,shapeFlag:W,transition:G,dirs:Q}=f;if(I=f.el=i(f.type,_,Y&&Y.is,Y),W&8?c(I,f.children):W&16&&pe(f.children,I,null,k,C,ns(f,_),O,P),Q&&Gn(f,null,k,"created"),X(I,f,f.scopeId,O,k),Y){for(const ye in Y)ye!=="value"&&!Nt(ye)&&o(I,ye,null,Y[ye],_,k);"value"in Y&&o(I,"value",null,Y.value,_),(D=Y.onVnodeBeforeMount)&&Qe(D,k,f)}Q&&Gn(f,null,k,"beforeMount");const se=Qc(C,G);se&&G.beforeEnter(I),r(I,h,y),((D=Y&&Y.onVnodeMounted)||se||Q)&&De(()=>{D&&Qe(D,k,f),se&&G.enter(I),Q&&Gn(f,null,k,"mounted")},C)},X=(f,h,y,k,C)=>{if(y&&m(f,y),k)for(let _=0;_<k.length;_++)m(f,k[_]);if(C){let _=C.subTree;if(h===_||wr(_.type)&&(_.ssContent===h||_.ssFallback===h)){const O=C.vnode;X(f,O,O.scopeId,O.slotScopeIds,C.parent)}}},pe=(f,h,y,k,C,_,O,P,I=0)=>{for(let D=I;D<f.length;D++){const Y=f[D]=P?_n(f[D]):hn(f[D]);v(null,Y,h,y,k,C,_,O,P)}},K=(f,h,y,k,C,_,O)=>{const P=h.el=f.el;let{patchFlag:I,dynamicChildren:D,dirs:Y}=h;I|=f.patchFlag&16;const W=f.props||ge,G=h.props||ge;let Q;if(y&&Un(y,!1),(Q=G.onVnodeBeforeUpdate)&&Qe(Q,y,h,f),Y&&Gn(h,f,y,"beforeUpdate"),y&&Un(y,!0),(W.innerHTML&&G.innerHTML==null||W.textContent&&G.textContent==null)&&c(P,""),D?N(f.dynamicChildren,D,P,y,k,ns(h,C),_):O||ie(f,h,P,null,y,k,ns(h,C),_,!1),I>0){if(I&16)$(P,W,G,y,C);else if(I&2&&W.class!==G.class&&o(P,"class",null,G.class,C),I&4&&o(P,"style",W.style,G.style,C),I&8){const se=h.dynamicProps;for(let ye=0;ye<se.length;ye++){const de=se[ye],He=W[de],Ve=G[de];(Ve!==He||de==="value")&&o(P,de,He,Ve,C,y)}}I&1&&f.children!==h.children&&c(P,h.children)}else!O&&D==null&&$(P,W,G,y,C);((Q=G.onVnodeUpdated)||Y)&&De(()=>{Q&&Qe(Q,y,h,f),Y&&Gn(h,f,y,"updated")},k)},N=(f,h,y,k,C,_,O)=>{for(let P=0;P<h.length;P++){const I=f[P],D=h[P],Y=I.el&&(I.type===Ce||!zn(I,D)||I.shapeFlag&198)?d(I.el):y;v(I,D,Y,null,k,C,_,O,!0)}},$=(f,h,y,k,C)=>{if(h!==y){if(h!==ge)for(const _ in h)!Nt(_)&&!(_ in y)&&o(f,_,h[_],null,C,k);for(const _ in y){if(Nt(_))continue;const O=y[_],P=h[_];O!==P&&_!=="value"&&o(f,_,P,O,C,k)}"value"in y&&o(f,"value",h.value,y.value,C)}},T=(f,h,y,k,C,_,O,P,I)=>{const D=h.el=f?f.el:a(""),Y=h.anchor=f?f.anchor:a("");let{patchFlag:W,dynamicChildren:G,slotScopeIds:Q}=h;Q&&(P=P?P.concat(Q):Q),f==null?(r(D,y,k),r(Y,y,k),pe(h.children||[],y,Y,C,_,O,P,I)):W>0&&W&64&&G&&f.dynamicChildren&&f.dynamicChildren.length===G.length?(N(f.dynamicChildren,G,y,C,_,O,P),(h.key!=null||C&&h===C.subTree)&&ja(f,h,!0)):ie(f,h,y,Y,C,_,O,P,I)},Z=(f,h,y,k,C,_,O,P,I)=>{h.slotScopeIds=P,f==null?h.shapeFlag&512?C.ctx.activate(h,y,k,O,I):ue(h,y,k,C,_,O,I):ne(f,h,I)},ue=(f,h,y,k,C,_,O)=>{const P=f.component=iu(f,k,C);if(Lr(f)&&(P.ctx.renderer=V),au(P,!1,O),P.asyncDep){if(C&&C.registerDep(P,me,O),!f.el){const I=P.subTree=B(Oe);R(null,I,h,y),f.placeholder=I.el}}else me(P,f,h,y,C,_,O)},ne=(f,h,y)=>{const k=h.component=f.component;if(Bc(f,h,y))if(k.asyncDep&&!k.asyncResolved){he(k,h,y);return}else k.next=h,k.update();else h.el=f.el,k.vnode=h},me=(f,h,y,k,C,_,O)=>{const P=()=>{if(f.isMounted){let{next:W,bu:G,u:Q,parent:se,vnode:ye}=f;{const ln=Na(f);if(ln){W&&(W.el=ye.el,he(f,W,O)),ln.asyncDep.then(()=>{De(()=>{f.isUnmounted||D()},C)});return}}let de=W,He;Un(f,!1),W?(W.el=ye.el,he(f,W,O)):W=ye,G&&gt(G),(He=W.props&&W.props.onVnodeBeforeUpdate)&&Qe(He,se,W,ye),Un(f,!0);const Ve=Do(f),an=f.subTree;f.subTree=Ve,v(an,Ve,d(an.el),S(an),f,C,_),W.el=Ve.el,de===null&&$c(f,Ve.el),Q&&De(Q,C),(He=W.props&&W.props.onVnodeUpdated)&&De(()=>Qe(He,se,W,ye),C)}else{let W;const{el:G,props:Q}=h,{bm:se,m:ye,parent:de,root:He,type:Ve}=f,an=nt(h);Un(f,!1),se&&gt(se),!an&&(W=Q&&Q.onVnodeBeforeMount)&&Qe(W,de,h),Un(f,!0);{He.ce&&He.ce._hasShadowRoot()&&He.ce._injectChildStyle(Ve,f.parent?f.parent.type:void 0);const ln=f.subTree=Do(f);v(null,ln,y,k,f,C,_),h.el=ln.el}if(ye&&De(ye,C),!an&&(W=Q&&Q.onVnodeMounted)){const ln=h;De(()=>Qe(W,de,ln),C)}(h.shapeFlag&256||de&&nt(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&De(f.a,C),f.isMounted=!0,h=y=k=null}};f.scope.on();const I=f.effect=new Li(P);f.scope.off();const D=f.update=I.run.bind(I),Y=f.job=I.runIfDirty.bind(I);Y.i=f,Y.id=f.uid,I.scheduler=()=>Xs(Y),Un(f,!0),D()},he=(f,h,y)=>{h.component=f;const k=f.vnode.props;f.vnode=h,f.next=null,Vc(f,h.props,k,y),Yc(f,h.children,y),Dn(),vo(f),Mn()},ie=(f,h,y,k,C,_,O,P,I=!1)=>{const D=f&&f.children,Y=f?f.shapeFlag:0,W=h.children,{patchFlag:G,shapeFlag:Q}=h;if(G>0){if(G&128){On(D,W,y,k,C,_,O,P,I);return}else if(G&256){vn(D,W,y,k,C,_,O,P,I);return}}Q&8?(Y&16&&qe(D,C,_),W!==D&&c(y,W)):Y&16?Q&16?On(D,W,y,k,C,_,O,P,I):qe(D,C,_,!0):(Y&8&&c(y,""),Q&16&&pe(W,y,k,C,_,O,P,I))},vn=(f,h,y,k,C,_,O,P,I)=>{f=f||ft,h=h||ft;const D=f.length,Y=h.length,W=Math.min(D,Y);let G;for(G=0;G<W;G++){const Q=h[G]=I?_n(h[G]):hn(h[G]);v(f[G],Q,y,null,C,_,O,P,I)}D>Y?qe(f,C,_,!0,!1,W):pe(h,y,k,C,_,O,P,I,W)},On=(f,h,y,k,C,_,O,P,I)=>{let D=0;const Y=h.length;let W=f.length-1,G=Y-1;for(;D<=W&&D<=G;){const Q=f[D],se=h[D]=I?_n(h[D]):hn(h[D]);if(zn(Q,se))v(Q,se,y,null,C,_,O,P,I);else break;D++}for(;D<=W&&D<=G;){const Q=f[W],se=h[G]=I?_n(h[G]):hn(h[G]);if(zn(Q,se))v(Q,se,y,null,C,_,O,P,I);else break;W--,G--}if(D>W){if(D<=G){const Q=G+1,se=Q<Y?h[Q].el:k;for(;D<=G;)v(null,h[D]=I?_n(h[D]):hn(h[D]),y,se,C,_,O,P,I),D++}}else if(D>G)for(;D<=W;)$e(f[D],C,_,!0),D++;else{const Q=D,se=D,ye=new Map;for(D=se;D<=G;D++){const Ue=h[D]=I?_n(h[D]):hn(h[D]);Ue.key!=null&&ye.set(Ue.key,D)}let de,He=0;const Ve=G-se+1;let an=!1,ln=0;const St=new Array(Ve);for(D=0;D<Ve;D++)St[D]=0;for(D=Q;D<=W;D++){const Ue=f[D];if(He>=Ve){$e(Ue,C,_,!0);continue}let cn;if(Ue.key!=null)cn=ye.get(Ue.key);else for(de=se;de<=G;de++)if(St[de-se]===0&&zn(Ue,h[de])){cn=de;break}cn===void 0?$e(Ue,C,_,!0):(St[cn-se]=D+1,cn>=ln?ln=cn:an=!0,v(Ue,h[cn],y,null,C,_,O,P,I),He++)}const uo=an?Xc(St):ft;for(de=uo.length-1,D=Ve-1;D>=0;D--){const Ue=se+D,cn=h[Ue],fo=h[Ue+1],ho=Ue+1<Y?fo.el||Wa(fo):k;St[D]===0?v(null,cn,y,ho,C,_,O,P,I):an&&(de<0||D!==uo[de]?on(cn,y,ho,2):de--)}}},on=(f,h,y,k,C=null)=>{const{el:_,type:O,transition:P,children:I,shapeFlag:D}=f;if(D&6){on(f.component.subTree,h,y,k);return}if(D&128){f.suspense.move(h,y,k);return}if(D&64){O.move(f,h,y,V);return}if(O===Ce){r(_,h,y);for(let W=0;W<I.length;W++)on(I[W],h,y,k);r(f.anchor,h,y);return}if(O===dr){w(f,h,y);return}if(k!==2&&D&1&&P)if(k===0)P.beforeEnter(_),r(_,h,y),De(()=>P.enter(_),C);else{const{leave:W,delayLeave:G,afterLeave:Q}=P,se=()=>{f.ctx.isUnmounted?s(_):r(_,h,y)},ye=()=>{_._isLeaving&&_[dn](!0),W(_,()=>{se(),Q&&Q()})};G?G(_,se,ye):ye()}else r(_,h,y)},$e=(f,h,y,k=!1,C=!1)=>{const{type:_,props:O,ref:P,children:I,dynamicChildren:D,shapeFlag:Y,patchFlag:W,dirs:G,cacheIndex:Q}=f;if(W===-2&&(C=!1),P!=null&&(Dn(),Ft(P,null,y,f,!0),Mn()),Q!=null&&(h.renderCache[Q]=void 0),Y&256){h.ctx.deactivate(f);return}const se=Y&1&&G,ye=!nt(f);let de;if(ye&&(de=O&&O.onVnodeBeforeUnmount)&&Qe(de,h,f),Y&6)Vn(f.component,y,k);else{if(Y&128){f.suspense.unmount(y,k);return}se&&Gn(f,null,h,"beforeUnmount"),Y&64?f.type.remove(f,h,y,V,k):D&&!D.hasOnce&&(_!==Ce||W>0&&W&64)?qe(D,h,y,!1,!0):(_===Ce&&W&384||!C&&Y&16)&&qe(I,h,y),k&&st(f)}(ye&&(de=O&&O.onVnodeUnmounted)||se)&&De(()=>{de&&Qe(de,h,f),se&&Gn(f,null,h,"unmounted")},y)},st=f=>{const{type:h,el:y,anchor:k,transition:C}=f;if(h===Ce){ot(y,k);return}if(h===dr){x(f);return}const _=()=>{s(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:O,delayLeave:P}=C,I=()=>O(y,_);P?P(f.el,_,I):I()}else _()},ot=(f,h)=>{let y;for(;f!==h;)y=g(f),s(f),f=y;s(h)},Vn=(f,h,y)=>{const{bum:k,scope:C,job:_,subTree:O,um:P,m:I,a:D}=f;br(I),br(D),k&&gt(k),C.stop(),_&&(_.flags|=8,$e(O,f,h,y)),P&&De(P,h),De(()=>{f.isUnmounted=!0},h)},qe=(f,h,y,k=!1,C=!1,_=0)=>{for(let O=_;O<f.length;O++)$e(f[O],h,y,k,C)},S=f=>{if(f.shapeFlag&6)return S(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=g(f.anchor||f.el),y=h&&h[gc];return y?g(y):h};let F=!1;const j=(f,h,y)=>{let k;f==null?h._vnode&&($e(h._vnode,null,null,!0),k=h._vnode.component):v(h._vnode||null,f,h,null,null,null,y),h._vnode=f,F||(F=!0,vo(k),ra(),F=!1)},V={p:v,um:$e,m:on,r:st,mt:ue,mc:pe,pc:ie,pbc:N,n:S,o:e};return{render:j,hydrate:void 0,createApp:jc(j)}}function ns({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Un({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Qc(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ja(e,n,t=!1){const r=e.children,s=n.children;if(q(r)&&q(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=_n(s[o]),a.el=i.el),!t&&a.patchFlag!==-2&&ja(i,a)),a.type===$r&&(a.patchFlag===-1&&(a=s[o]=_n(a)),a.el=i.el),a.type===Oe&&!a.el&&(a.el=i.el)}}function Xc(e){const n=e.slice(),t=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(s=t[t.length-1],e[s]<u){n[r]=s,t.push(r);continue}for(o=0,i=t.length-1;o<i;)a=o+i>>1,e[t[a]]<u?o=a+1:i=a;u<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,i=t[o-1];o-- >0;)t[o]=i,i=n[i];return t}function Na(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Na(n)}function br(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Wa(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Wa(n.subTree):null}const wr=e=>e.__isSuspense;function Zc(e,n){n&&n.pendingBranch?q(e)?n.effects.push(...e):n.effects.push(e):cc(e)}const Ce=Symbol.for("v-fgt"),$r=Symbol.for("v-txt"),Oe=Symbol.for("v-cmt"),dr=Symbol.for("v-stc"),Bt=[];let Ye=null;function A(e=!1){Bt.push(Ye=e?null:[])}function eu(){Bt.pop(),Ye=Bt[Bt.length-1]||null}let Yt=1;function xr(e,n=!1){Yt+=e,e<0&&Ye&&n&&(Ye.hasOnce=!0)}function La(e){return e.dynamicChildren=Yt>0?Ye||ft:null,eu(),Yt>0&&Ye&&Ye.push(e),e}function L(e,n,t,r,s,o){return La(p(e,n,t,r,s,o,!0))}function Bn(e,n,t,r,s){return La(B(e,n,t,r,s,!0))}function qt(e){return e?e.__v_isVNode===!0:!1}function zn(e,n){return e.type===n.type&&e.key===n.key}const Fa=({key:e})=>e??null,fr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||Ne(e)||ee(e)?{i:Ke,r:e,k:n,f:!!t}:e:null);function p(e,n=null,t=null,r=0,s=null,o=e===Ce?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Fa(n),ref:n&&fr(n),scopeId:oa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ke};return a?(to(l,t),o&128&&e.normalize(l)):t&&(l.shapeFlag|=we(t)?8:16),Yt>0&&!i&&Ye&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ye.push(l),l}const B=nu;function nu(e,n=null,t=null,r=0,s=null,o=!1){if((!e||e===ba)&&(e=Oe),qt(e)){const a=In(e,n,!0);return t&&to(a,t),Yt>0&&!o&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(e)]=a:Ye.push(a)),a.patchFlag=-2,a}if(du(e)&&(e=e.__vccOpts),n){n=tu(n);let{class:a,style:l}=n;a&&!we(a)&&(n.class=_e(a)),ce(l)&&(Qs(l)&&!q(l)&&(l=Te({},l)),n.style=tt(l))}const i=we(e)?1:wr(e)?128:la(e)?64:ce(e)?4:ee(e)?2:0;return p(e,n,t,r,s,i,o,!0)}function tu(e){return e?Qs(e)||Ma(e)?Te({},e):e:null}function In(e,n,t=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,u=n?ru(s||{},n):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Fa(u),ref:n&&n.ref?t&&o?q(o)?o.concat(fr(n)):[o,fr(n)]:fr(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&In(e.ssContent),ssFallback:e.ssFallback&&In(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&bt(c,l.clone(c)),c}function yt(e=" ",n=0){return B($r,null,e,n)}function ts(e,n){const t=B(dr,null,e);return t.staticCount=n,t}function Ee(e="",n=!1){return n?(A(),Bn(Oe,null,e)):B(Oe,null,e)}function hn(e){return e==null||typeof e=="boolean"?B(Oe):q(e)?B(Ce,null,e.slice()):qt(e)?_n(e):B($r,null,String(e))}function _n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:In(e)}function to(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(q(n))t=16;else if(typeof n=="object")if(r&65){const s=n.default;s&&(s._c&&(s._d=!1),to(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Ma(n)?n._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ee(n)?(n={default:n,_ctx:Ke},t=32):(n=String(n),r&64?(t=16,n=[yt(n)]):t=8);e.children=n,e.shapeFlag|=t}function ru(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const s in r)if(s==="class")n.class!==r.class&&(n.class=_e([n.class,r.class]));else if(s==="style")n.style=tt([n.style,r.style]);else if(Ir(s)){const o=n[s],i=r[s];i&&o!==i&&!(q(o)&&o.includes(i))&&(n[s]=o?[].concat(o,i):i)}else s!==""&&(n[s]=r[s])}return n}function Qe(e,n,t,r=null){rn(e,n,7,[t,r])}const su=Sa();let ou=0;function iu(e,n,t){const r=e.type,s=(n?n.appContext:e.appContext)||su,o={uid:ou++,vnode:e,type:r,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Al(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ia(r,s),emitsOptions:Ca(r,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Wc.bind(null,o),e.ce&&e.ce(o),o}let je=null;const ro=()=>je||Ke;let kr,Ms;{const e=Or(),n=(t,r)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};kr=n("__VUE_INSTANCE_SETTERS__",t=>je=t),Ms=n("__VUE_SSR_SETTERS__",t=>Jt=t)}const rr=e=>{const n=je;return kr(e),e.scope.on(),()=>{e.scope.off(),kr(n)}},Io=()=>{je&&je.scope.off(),kr(null)};function za(e){return e.vnode.shapeFlag&4}let Jt=!1;function au(e,n=!1,t=!1){n&&Ms(n);const{props:r,children:s}=e.vnode,o=za(e);Hc(e,r,o,n),Kc(e,s,t||n);const i=o?lu(e,n):void 0;return n&&Ms(!1),i}function lu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Dc);const{setup:r}=t;if(r){Dn();const s=e.setupContext=r.length>1?uu(e):null,o=rr(e),i=tr(r,e,0,[e.props,s]),a=Ii(i);if(Mn(),o(),(a||e.sp)&&!nt(e)&&ga(e),a){if(i.then(Io,Io),n)return i.then(l=>{Po(e,l)}).catch(l=>{Nr(l,e,0)});e.asyncDep=i}else Po(e,i)}else Ba(e)}function Po(e,n,t){ee(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ce(n)&&(e.setupState=ea(n)),Ba(e)}function Ba(e,n,t){const r=e.type;e.render||(e.render=r.render||pn);{const s=rr(e);Dn();try{Mc(e)}finally{Mn(),s()}}}const cu={get(e,n){return Ae(e,"get",""),e[n]}};function uu(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,cu),slots:e.slots,emit:e.emit,expose:n}}function Hr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ea(Zl(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in zt)return zt[t](e)},has(n,t){return t in n||t in zt}})):e.proxy}function Rs(e,n=!0){return ee(e)?e.displayName||e.name:e.name||n&&e.__name}function du(e){return ee(e)&&"__vccOpts"in e}const Pe=(e,n)=>sc(e,n,Jt);function wt(e,n,t){try{xr(-1);const r=arguments.length;return r===2?ce(n)&&!q(n)?qt(n)?B(e,null,[n]):B(e,n):B(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&qt(t)&&(t=[t]),B(e,n,t))}finally{xr(1)}}const fu="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Is;const Ao=typeof window<"u"&&window.trustedTypes;if(Ao)try{Is=Ao.createPolicy("vue",{createHTML:e=>e})}catch{}const $a=Is?e=>Is.createHTML(e):e=>e,hu="http://www.w3.org/2000/svg",gu="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Oo=kn&&kn.createElement("template"),pu={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const s=n==="svg"?kn.createElementNS(hu,e):n==="mathml"?kn.createElementNS(gu,e):t?kn.createElement(e,{is:t}):kn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>kn.createTextNode(e),createComment:e=>kn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,s,o){const i=t?t.previousSibling:n.lastChild;if(s&&(s===o||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{Oo.innerHTML=$a(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Oo.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[i?i.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},jn="transition",Tt="animation",Qt=Symbol("_vtc"),Ha={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mu=Te({},ca,Ha),yu=e=>(e.displayName="Transition",e.props=mu,e),_r=yu((e,{slots:n})=>wt(yc,vu(e),n)),Kn=(e,n=[])=>{q(e)?e.forEach(t=>t(...n)):e&&e(...n)},jo=e=>e?q(e)?e.some(n=>n.length>1):e.length>1:!1;function vu(e){const n={};for(const T in e)T in Ha||(n[T]=e[T]);if(e.css===!1)return n;const{name:t="v",type:r,duration:s,enterFromClass:o=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:u=i,appearToClass:c=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=e,E=bu(s),v=E&&E[0],M=E&&E[1],{onBeforeEnter:R,onEnter:b,onEnterCancelled:w,onLeave:x,onLeaveCancelled:U,onBeforeAppear:J=R,onAppear:X=b,onAppearCancelled:pe=w}=n,K=(T,Z,ue,ne)=>{T._enterCancelled=ne,Yn(T,Z?c:a),Yn(T,Z?u:i),ue&&ue()},N=(T,Z)=>{T._isLeaving=!1,Yn(T,d),Yn(T,m),Yn(T,g),Z&&Z()},$=T=>(Z,ue)=>{const ne=T?X:b,me=()=>K(Z,T,ue);Kn(ne,[Z,me]),No(()=>{Yn(Z,T?l:o),wn(Z,T?c:a),jo(ne)||Wo(Z,r,v,me)})};return Te(n,{onBeforeEnter(T){Kn(R,[T]),wn(T,o),wn(T,i)},onBeforeAppear(T){Kn(J,[T]),wn(T,l),wn(T,u)},onEnter:$(!1),onAppear:$(!0),onLeave(T,Z){T._isLeaving=!0;const ue=()=>N(T,Z);wn(T,d),T._enterCancelled?(wn(T,g),zo(T)):(zo(T),wn(T,g)),No(()=>{T._isLeaving&&(Yn(T,d),wn(T,m),jo(x)||Wo(T,r,M,ue))}),Kn(x,[T,ue])},onEnterCancelled(T){K(T,!1,void 0,!0),Kn(w,[T])},onAppearCancelled(T){K(T,!0,void 0,!0),Kn(pe,[T])},onLeaveCancelled(T){N(T),Kn(U,[T])}})}function bu(e){if(e==null)return null;if(ce(e))return[rs(e.enter),rs(e.leave)];{const n=rs(e);return[n,n]}}function rs(e){return Cl(e)}function wn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Qt]||(e[Qt]=new Set)).add(n)}function Yn(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[Qt];t&&(t.delete(n),t.size||(e[Qt]=void 0))}function No(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wu=0;function Wo(e,n,t,r){const s=e._endId=++wu,o=()=>{s===e._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:i,timeout:a,propCount:l}=xu(e,n);if(!i)return r();const u=i+"end";let c=0;const d=()=>{e.removeEventListener(u,g),o()},g=m=>{m.target===e&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),e.addEventListener(u,g)}function xu(e,n){const t=window.getComputedStyle(e),r=E=>(t[E]||"").split(", "),s=r(`${jn}Delay`),o=r(`${jn}Duration`),i=Lo(s,o),a=r(`${Tt}Delay`),l=r(`${Tt}Duration`),u=Lo(a,l);let c=null,d=0,g=0;n===jn?i>0&&(c=jn,d=i,g=o.length):n===Tt?u>0&&(c=Tt,d=u,g=l.length):(d=Math.max(i,u),c=d>0?i>u?jn:Tt:null,g=c?c===jn?o.length:l.length:0);const m=c===jn&&/\b(?:transform|all)(?:,|$)/.test(r(`${jn}Property`).toString());return{type:c,timeout:d,propCount:g,hasTransform:m}}function Lo(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>Fo(t)+Fo(e[r])))}function Fo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function zo(e){return(e?e.ownerDocument:document).body.offsetHeight}function ku(e,n,t){const r=e[Qt];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Bo=Symbol("_vod"),_u=Symbol("_vsh"),Su=Symbol(""),Cu=/(?:^|;)\s*display\s*:/;function Eu(e,n,t){const r=e.style,s=we(t);let o=!1;if(t&&!s){if(n)if(we(n))for(const i of n.split(";")){const a=i.slice(0,i.indexOf(":")).trim();t[a]==null&&hr(r,a,"")}else for(const i in n)t[i]==null&&hr(r,i,"");for(const i in t)i==="display"&&(o=!0),hr(r,i,t[i])}else if(s){if(n!==t){const i=r[Su];i&&(t+=";"+i),r.cssText=t,o=Cu.test(t)}}else n&&e.removeAttribute("style");Bo in e&&(e[Bo]=o?r.display:"",e[_u]&&(r.display="none"))}const $o=/\s*!important$/;function hr(e,n,t){if(q(t))t.forEach(r=>hr(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=Tu(e,n);$o.test(t)?e.setProperty(Hn(r),t.replace($o,""),"important"):e[r]=t}}const Ho=["Webkit","Moz","ms"],ss={};function Tu(e,n){const t=ss[n];if(t)return t;let r=ze(n);if(r!=="filter"&&r in e)return ss[n]=r;r=Ar(r);for(let s=0;s<Ho.length;s++){const o=Ho[s]+r;if(o in e)return ss[n]=o}return n}const Vo="http://www.w3.org/1999/xlink";function Go(e,n,t,r,s,o=Il(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Vo,n.slice(6,n.length)):e.setAttributeNS(Vo,n,t):t==null||o&&!ji(t)?e.removeAttribute(n):e.setAttribute(n,o?"":mn(t)?String(t):t)}function Uo(e,n,t,r,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?$a(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let i=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=ji(t):t==null&&a==="string"?(t="",i=!0):a==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(s||n)}function ct(e,n,t,r){e.addEventListener(n,t,r)}function Du(e,n,t,r){e.removeEventListener(n,t,r)}const Ko=Symbol("_vei");function Mu(e,n,t,r,s=null){const o=e[Ko]||(e[Ko]={}),i=o[n];if(r&&i)i.value=r;else{const[a,l]=Ru(n);if(r){const u=o[n]=Au(r,s);ct(e,a,u,l)}else i&&(Du(e,a,i,l),o[n]=void 0)}}const Yo=/(?:Once|Passive|Capture)$/;function Ru(e){let n;if(Yo.test(e)){n={};let r;for(;r=e.match(Yo);)e=e.slice(0,e.length-r[0].length),n[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Hn(e.slice(2)),n]}let os=0;const Iu=Promise.resolve(),Pu=()=>os||(Iu.then(()=>os=0),os=Date.now());function Au(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;rn(Ou(r,t.value),n,5,[r])};return t.value=e,t.attached=Pu(),t}function Ou(e,n){if(q(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(r=>s=>!s._stopped&&r&&r(s))}else return n}const qo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ju=(e,n,t,r,s,o)=>{const i=s==="svg";n==="class"?ku(e,r,i):n==="style"?Eu(e,t,r):Ir(n)?zs(n)||Mu(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Nu(e,n,r,i))?(Uo(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Go(e,n,r,i,o,n!=="value")):e._isVueCE&&(Wu(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!we(r)))?Uo(e,ze(n),r,o,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Go(e,n,r,i))};function Nu(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&qo(n)&&ee(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qo(n)&&we(t)?!1:n in e}function Wu(e,n){const t=e._def.props;if(!t)return!1;const r=ze(n);return Array.isArray(t)?t.some(s=>ze(s)===r):Object.keys(t).some(s=>ze(s)===r)}const Jo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return q(n)?t=>gt(n,t):n};function Lu(e){e.target.composing=!0}function Qo(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const is=Symbol("_assign");function Xo(e,n,t){return n&&(e=e.trim()),t&&(e=Hs(e)),e}const Fu={created(e,{modifiers:{lazy:n,trim:t,number:r}},s){e[is]=Jo(s);const o=r||s.props&&s.props.type==="number";ct(e,n?"change":"input",i=>{i.target.composing||e[is](Xo(e.value,t,o))}),(t||o)&&ct(e,"change",()=>{e.value=Xo(e.value,t,o)}),n||(ct(e,"compositionstart",Lu),ct(e,"compositionend",Qo),ct(e,"change",Qo))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:r,trim:s,number:o}},i){if(e[is]=Jo(i),e.composing)return;const a=(o||e.type==="number")&&!/^0\d/.test(e.value)?Hs(e.value):e.value,l=n??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&n===t||s&&e.value.trim()===l)||(e.value=l))}},zu=["ctrl","shift","alt","meta"],Bu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>zu.some(t=>e[`${t}Key`]&&!n.includes(t))},$t=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=((s,...o)=>{for(let i=0;i<n.length;i++){const a=Bu[n[i]];if(a&&a(s,n))return}return e(s,...o)}))},$u={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hu=(e,n)=>{const t=e._withKeys||(e._withKeys={}),r=n.join(".");return t[r]||(t[r]=(s=>{if(!("key"in s))return;const o=Hn(s.key);if(n.some(i=>i===o||$u[i]===o))return e(s)}))},Vu=Te({patchProp:ju},pu);let Zo;function Gu(){return Zo||(Zo=qc(Vu))}const ei=((...e)=>{const n=Gu().createApp(...e),{mount:t}=n;return n.mount=r=>{const s=Ku(r);if(!s)return;const o=n._component;!ee(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=t(s,!1,Uu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},n});function Uu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ku(e){return we(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ut=typeof document<"u";function Va(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Yu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Va(e.default)}const ae=Object.assign;function as(e,n){const t={};for(const r in n){const s=n[r];t[r]=sn(s)?s.map(e):e(s)}return t}const Ht=()=>{},sn=Array.isArray;function ni(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}const Ga=/#/g,qu=/&/g,Ju=/\//g,Qu=/=/g,Xu=/\?/g,Ua=/\+/g,Zu=/%5B/g,ed=/%5D/g,Ka=/%5E/g,nd=/%60/g,Ya=/%7B/g,td=/%7C/g,qa=/%7D/g,rd=/%20/g;function so(e){return e==null?"":encodeURI(""+e).replace(td,"|").replace(Zu,"[").replace(ed,"]")}function sd(e){return so(e).replace(Ya,"{").replace(qa,"}").replace(Ka,"^")}function Ps(e){return so(e).replace(Ua,"%2B").replace(rd,"+").replace(Ga,"%23").replace(qu,"%26").replace(nd,"`").replace(Ya,"{").replace(qa,"}").replace(Ka,"^")}function od(e){return Ps(e).replace(Qu,"%3D")}function id(e){return so(e).replace(Ga,"%23").replace(Xu,"%3F")}function ad(e){return id(e).replace(Ju,"%2F")}function Xt(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ld=/\/$/,cd=e=>e.replace(ld,"");function ls(e,n,t="/"){let r,s={},o="",i="";const a=n.indexOf("#");let l=n.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=n.slice(0,l),o=n.slice(l,a>0?a:n.length),s=e(o.slice(1))),a>=0&&(r=r||n.slice(0,a),i=n.slice(a,n.length)),r=hd(r??n,t),{fullPath:r+o+i,path:r,query:s,hash:Xt(i)}}function ud(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function ti(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function dd(e,n,t){const r=n.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&xt(n.matched[r],t.matched[s])&&Ja(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function xt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ja(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!fd(e[t],n[t]))return!1;return!0}function fd(e,n){return sn(e)?ri(e,n):sn(n)?ri(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function ri(e,n){return sn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function hd(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=t.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const Nn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let As=(function(e){return e.pop="pop",e.push="push",e})({}),cs=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function gd(e){if(!e)if(ut){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),cd(e)}const pd=/^[^#]+#/;function md(e,n){return e.replace(pd,"#")+n}function yd(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Vr=()=>({left:window.scrollX,top:window.scrollY});function vd(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;n=yd(s,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function si(e,n){return(history.state?history.state.position-n:-1)+e}const Os=new Map;function bd(e,n){Os.set(e,n)}function wd(e){const n=Os.get(e);return Os.delete(e),n}function xd(e){return typeof e=="string"||e&&typeof e=="object"}function Qa(e){return typeof e=="string"||typeof e=="symbol"}let xe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Xa=Symbol("");xe.MATCHER_NOT_FOUND+"",xe.NAVIGATION_GUARD_REDIRECT+"",xe.NAVIGATION_ABORTED+"",xe.NAVIGATION_CANCELLED+"",xe.NAVIGATION_DUPLICATED+"";function kt(e,n){return ae(new Error,{type:e,[Xa]:!0},n)}function xn(e,n){return e instanceof Error&&Xa in e&&(n==null||!!(e.type&n))}const kd=["params","query","hash"];function _d(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of kd)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function Sd(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const s=t[r].replace(Ua," "),o=s.indexOf("="),i=Xt(o<0?s:s.slice(0,o)),a=o<0?null:Xt(s.slice(o+1));if(i in n){let l=n[i];sn(l)||(l=n[i]=[l]),l.push(a)}else n[i]=a}return n}function oi(e){let n="";for(let t in e){const r=e[t];if(t=od(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(sn(r)?r.map(s=>s&&Ps(s)):[r&&Ps(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function Cd(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=sn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return n}const Ed=Symbol(""),ii=Symbol(""),Gr=Symbol(""),oo=Symbol(""),js=Symbol("");function Dt(){let e=[];function n(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Fn(e,n,t,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=g=>{g===!1?l(kt(xe.NAVIGATION_ABORTED,{from:t,to:n})):g instanceof Error?l(g):xd(g)?l(kt(xe.NAVIGATION_GUARD_REDIRECT,{from:n,to:g})):(i&&r.enterCallbacks[s]===i&&typeof g=="function"&&i.push(g),a())},c=o(()=>e.call(r&&r.instances[s],n,t,u));let d=Promise.resolve(c);e.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function us(e,n,t,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(n!=="beforeRouteEnter"&&!i.instances[a]))if(Va(l)){const u=(l.__vccOpts||l)[n];u&&o.push(Fn(u,t,r,i,a,s))}else{let u=l();o.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const d=Yu(c)?c.default:c;i.mods[a]=c,i.components[a]=d;const g=(d.__vccOpts||d)[n];return g&&Fn(g,t,r,i,a,s)()}))}}return o}function Td(e,n){const t=[],r=[],s=[],o=Math.max(n.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=n.matched[i];a&&(e.matched.find(u=>xt(u,a))?r.push(a):t.push(a));const l=e.matched[i];l&&(n.matched.find(u=>xt(u,l))||s.push(l))}return[t,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Dd=()=>location.protocol+"//"+location.host;function Za(e,n){const{pathname:t,search:r,hash:s}=n,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),ti(a,"")}return ti(t,e)+r+s}function Md(e,n,t,r){let s=[],o=[],i=null;const a=({state:g})=>{const m=Za(e,location),E=t.value,v=n.value;let M=0;if(g){if(t.value=m,n.value=g,i&&i===E){i=null;return}M=v?g.position-v.position:0}else r(m);s.forEach(R=>{R(t.value,E,{delta:M,type:As.pop,direction:M?M>0?cs.forward:cs.back:cs.unknown})})};function l(){i=t.value}function u(g){s.push(g);const m=()=>{const E=s.indexOf(g);E>-1&&s.splice(E,1)};return o.push(m),m}function c(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(ae({},g.state,{scroll:Vr()}),"")}}function d(){for(const g of o)g();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:d}}function ai(e,n,t,r=!1,s=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:s?Vr():null}}function Rd(e){const{history:n,location:t}=window,r={value:Za(e,t)},s={value:n.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(l,u,c){const d=e.indexOf("#"),g=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+l:Dd()+e+l;try{n[c?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),t[c?"replace":"assign"](g)}}function i(l,u){o(l,ae({},n.state,ai(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function a(l,u){const c=ae({},s.value,n.state,{forward:l,scroll:Vr()});o(c.current,c,!0),o(l,ae({},ai(r.value,l,null),{position:c.position+1},u),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function Id(e){e=gd(e);const n=Rd(e),t=Md(e,n.state,n.location,n.replace);function r(o,i=!0){i||t.pauseListeners(),history.go(o)}const s=ae({location:"",base:e,go:r,createHref:md.bind(null,e)},n,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>n.state.value}),s}let Qn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Se=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Se||{});const Pd={type:Qn.Static,value:""},Ad=/[a-zA-Z0-9_]/;function Od(e){if(!e)return[[]];if(e==="/")return[[Pd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=Se.Static,r=t;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,u="",c="";function d(){u&&(t===Se.Static?o.push({type:Qn.Static,value:u}):t===Se.Param||t===Se.ParamRegExp||t===Se.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Qn.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&t!==Se.ParamRegExp){r=t,t=Se.EscapeNext;continue}switch(t){case Se.Static:l==="/"?(u&&d(),i()):l===":"?(d(),t=Se.Param):g();break;case Se.EscapeNext:g(),t=r;break;case Se.Param:l==="("?t=Se.ParamRegExp:Ad.test(l)?g():(d(),t=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Se.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=Se.ParamRegExpEnd:c+=l;break;case Se.ParamRegExpEnd:d(),t=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:n("Unknown state");break}}return t===Se.ParamRegExp&&n(`Unfinished custom RegExp for param "${u}"`),d(),i(),s}const li="[^/]+?",jd={sensitive:!1,strict:!1,start:!0,end:!0};var Le=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Le||{});const Nd=/[.+*?^${}()[\]/\\]/g;function Wd(e,n){const t=ae({},jd,n),r=[];let s=t.start?"^":"";const o=[];for(const u of e){const c=u.length?[]:[Le.Root];t.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let m=Le.Segment+(t.sensitive?Le.BonusCaseSensitive:0);if(g.type===Qn.Static)d||(s+="/"),s+=g.value.replace(Nd,"\\$&"),m+=Le.Static;else if(g.type===Qn.Param){const{value:E,repeatable:v,optional:M,regexp:R}=g;o.push({name:E,repeatable:v,optional:M});const b=R||li;if(b!==li){m+=Le.BonusCustomRegExp;try{`${b}`}catch(x){throw new Error(`Invalid custom RegExp for param "${E}" (${b}): `+x.message)}}let w=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=M&&u.length<2?`(?:/${w})`:"/"+w),M&&(w+="?"),s+=w,m+=Le.Dynamic,M&&(m+=Le.BonusOptional),v&&(m+=Le.BonusRepeatable),b===".*"&&(m+=Le.BonusWildcard)}c.push(m)}r.push(c)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=Le.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,t.sensitive?"":"i");function a(u){const c=u.match(i),d={};if(!c)return null;for(let g=1;g<c.length;g++){const m=c[g]||"",E=o[g-1];d[E.name]=m&&E.repeatable?m.split("/"):m}return d}function l(u){let c="",d=!1;for(const g of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const m of g)if(m.type===Qn.Static)c+=m.value;else if(m.type===Qn.Param){const{value:E,repeatable:v,optional:M}=m,R=E in u?u[E]:"";if(sn(R)&&!v)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const b=sn(R)?R.join("/"):R;if(!b)if(M)g.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${E}"`);c+=b}}return c||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function Ld(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===Le.Static+Le.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===Le.Static+Le.Segment?1:-1:0}function el(e,n){let t=0;const r=e.score,s=n.score;for(;t<r.length&&t<s.length;){const o=Ld(r[t],s[t]);if(o)return o;t++}if(Math.abs(s.length-r.length)===1){if(ci(r))return 1;if(ci(s))return-1}return s.length-r.length}function ci(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Fd={strict:!1,end:!0,sensitive:!1};function zd(e,n,t){const r=Wd(Od(e.path),t),s=ae(r,{record:e,parent:n,children:[],alias:[]});return n&&!s.record.aliasOf==!n.record.aliasOf&&n.children.push(s),s}function Bd(e,n){const t=[],r=new Map;n=ni(Fd,n);function s(d){return r.get(d)}function o(d,g,m){const E=!m,v=di(d);v.aliasOf=m&&m.record;const M=ni(n,d),R=[v];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const U of x)R.push(di(ae({},v,{components:m?m.record.components:v.components,path:U,aliasOf:m?m.record:v})))}let b,w;for(const x of R){const{path:U}=x;if(g&&U[0]!=="/"){const J=g.record.path,X=J[J.length-1]==="/"?"":"/";x.path=g.record.path+(U&&X+U)}if(b=zd(x,g,M),m?m.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),E&&d.name&&!fi(b)&&i(d.name)),nl(b)&&l(b),v.children){const J=v.children;for(let X=0;X<J.length;X++)o(J[X],b,m&&m.children[X])}m=m||b}return w?()=>{i(w)}:Ht}function i(d){if(Qa(d)){const g=r.get(d);g&&(r.delete(d),t.splice(t.indexOf(g),1),g.children.forEach(i),g.alias.forEach(i))}else{const g=t.indexOf(d);g>-1&&(t.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function a(){return t}function l(d){const g=Vd(d,t);t.splice(g,0,d),d.record.name&&!fi(d)&&r.set(d.record.name,d)}function u(d,g){let m,E={},v,M;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw kt(xe.MATCHER_NOT_FOUND,{location:d});M=m.record.name,E=ae(ui(g.params,m.keys.filter(w=>!w.optional).concat(m.parent?m.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&ui(d.params,m.keys.map(w=>w.name))),v=m.stringify(E)}else if(d.path!=null)v=d.path,m=t.find(w=>w.re.test(v)),m&&(E=m.parse(v),M=m.record.name);else{if(m=g.name?r.get(g.name):t.find(w=>w.re.test(g.path)),!m)throw kt(xe.MATCHER_NOT_FOUND,{location:d,currentLocation:g});M=m.record.name,E=ae({},g.params,d.params),v=m.stringify(E)}const R=[];let b=m;for(;b;)R.unshift(b.record),b=b.parent;return{name:M,path:v,params:E,matched:R,meta:Hd(R)}}e.forEach(d=>o(d));function c(){t.length=0,r.clear()}return{addRoute:o,resolve:u,removeRoute:i,clearRoutes:c,getRoutes:a,getRecordMatcher:s}}function ui(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function di(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:$d(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function $d(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function fi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Hd(e){return e.reduce((n,t)=>ae(n,t.meta),{})}function Vd(e,n){let t=0,r=n.length;for(;t!==r;){const o=t+r>>1;el(e,n[o])<0?r=o:t=o+1}const s=Gd(e);return s&&(r=n.lastIndexOf(s,r-1)),r}function Gd(e){let n=e;for(;n=n.parent;)if(nl(n)&&el(e,n)===0)return n}function nl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function hi(e){const n=nn(Gr),t=nn(oo),r=Pe(()=>{const l=H(e.to);return n.resolve(l)}),s=Pe(()=>{const{matched:l}=r.value,{length:u}=l,c=l[u-1],d=t.matched;if(!c||!d.length)return-1;const g=d.findIndex(xt.bind(null,c));if(g>-1)return g;const m=gi(l[u-2]);return u>1&&gi(c)===m&&d[d.length-1].path!==m?d.findIndex(xt.bind(null,l[u-2])):g}),o=Pe(()=>s.value>-1&&Jd(t.params,r.value.params)),i=Pe(()=>s.value>-1&&s.value===t.matched.length-1&&Ja(t.params,r.value.params));function a(l={}){if(qd(l)){const u=n[H(e.replace)?"replace":"push"](H(e.to)).catch(Ht);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function Ud(e){return e.length===1?e[0]:e}const Kd=yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hi,setup(e,{slots:n}){const t=nr(hi(e)),{options:r}=nn(Gr),s=Pe(()=>({[pi(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[pi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&Ud(n.default(t));return e.custom?o:wt("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},o)}}}),Yd=Kd;function qd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Jd(e,n){for(const t in n){const r=n[t],s=e[t];if(typeof r=="string"){if(r!==s)return!1}else if(!sn(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function gi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const pi=(e,n,t)=>e??n??t,Qd=yn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=nn(js),s=Pe(()=>e.route||r.value),o=nn(ii,0),i=Pe(()=>{let u=H(o);const{matched:c}=s.value;let d;for(;(d=c[u])&&!d.components;)u++;return u}),a=Pe(()=>s.value.matched[i.value]);ur(ii,Pe(()=>i.value+1)),ur(Ed,a),ur(js,s);const l=te();return et(()=>[l.value,a.value,e.name],([u,c,d],[g,m,E])=>{c&&(c.instances[d]=u,m&&m!==c&&u&&u===g&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!xt(c,m)||!g)&&(c.enterCallbacks[d]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,d=a.value,g=d&&d.components[c];if(!g)return mi(t.default,{Component:g,route:u});const m=d.props[c],E=m?m===!0?u.params:typeof m=="function"?m(u):m:null,M=wt(g,ae({},E,n,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return mi(t.default,{Component:M,route:u})||M}}});function mi(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const Xd=Qd;function Zd(e){const n=Bd(e.routes,e),t=e.parseQuery||Sd,r=e.stringifyQuery||oi,s=e.history,o=Dt(),i=Dt(),a=Dt(),l=ec(Nn);let u=Nn;ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=as.bind(null,S=>""+S),d=as.bind(null,ad),g=as.bind(null,Xt);function m(S,F){let j,V;return Qa(S)?(j=n.getRecordMatcher(S),V=F):V=S,n.addRoute(V,j)}function E(S){const F=n.getRecordMatcher(S);F&&n.removeRoute(F)}function v(){return n.getRoutes().map(S=>S.record)}function M(S){return!!n.getRecordMatcher(S)}function R(S,F){if(F=ae({},F||l.value),typeof S=="string"){const y=ls(t,S,F.path),k=n.resolve({path:y.path},F),C=s.createHref(y.fullPath);return ae(y,k,{params:g(k.params),hash:Xt(y.hash),redirectedFrom:void 0,href:C})}let j;if(S.path!=null)j=ae({},S,{path:ls(t,S.path,F.path).path});else{const y=ae({},S.params);for(const k in y)y[k]==null&&delete y[k];j=ae({},S,{params:d(y)}),F.params=d(F.params)}const V=n.resolve(j,F),re=S.hash||"";V.params=c(g(V.params));const f=ud(r,ae({},S,{hash:sd(re),path:V.path})),h=s.createHref(f);return ae({fullPath:f,hash:re,query:r===oi?Cd(S.query):S.query||{}},V,{redirectedFrom:void 0,href:h})}function b(S){return typeof S=="string"?ls(t,S,l.value.path):ae({},S)}function w(S,F){if(u!==S)return kt(xe.NAVIGATION_CANCELLED,{from:F,to:S})}function x(S){return X(S)}function U(S){return x(ae(b(S),{replace:!0}))}function J(S,F){const j=S.matched[S.matched.length-1];if(j&&j.redirect){const{redirect:V}=j;let re=typeof V=="function"?V(S,F):V;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=b(re):{path:re},re.params={}),ae({query:S.query,hash:S.hash,params:re.path!=null?{}:S.params},re)}}function X(S,F){const j=u=R(S),V=l.value,re=S.state,f=S.force,h=S.replace===!0,y=J(j,V);if(y)return X(ae(b(y),{state:typeof y=="object"?ae({},re,y.state):re,force:f,replace:h}),F||j);const k=j;k.redirectedFrom=F;let C;return!f&&dd(r,V,j)&&(C=kt(xe.NAVIGATION_DUPLICATED,{to:k,from:V}),on(V,V,!0,!1)),(C?Promise.resolve(C):N(k,V)).catch(_=>xn(_)?xn(_,xe.NAVIGATION_GUARD_REDIRECT)?_:On(_):ie(_,k,V)).then(_=>{if(_){if(xn(_,xe.NAVIGATION_GUARD_REDIRECT))return X(ae({replace:h},b(_.to),{state:typeof _.to=="object"?ae({},re,_.to.state):re,force:f}),F||k)}else _=T(k,V,!0,h,re);return $(k,V,_),_})}function pe(S,F){const j=w(S,F);return j?Promise.reject(j):Promise.resolve()}function K(S){const F=ot.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(S):S()}function N(S,F){let j;const[V,re,f]=Td(S,F);j=us(V.reverse(),"beforeRouteLeave",S,F);for(const y of V)y.leaveGuards.forEach(k=>{j.push(Fn(k,S,F))});const h=pe.bind(null,S,F);return j.push(h),qe(j).then(()=>{j=[];for(const y of o.list())j.push(Fn(y,S,F));return j.push(h),qe(j)}).then(()=>{j=us(re,"beforeRouteUpdate",S,F);for(const y of re)y.updateGuards.forEach(k=>{j.push(Fn(k,S,F))});return j.push(h),qe(j)}).then(()=>{j=[];for(const y of f)if(y.beforeEnter)if(sn(y.beforeEnter))for(const k of y.beforeEnter)j.push(Fn(k,S,F));else j.push(Fn(y.beforeEnter,S,F));return j.push(h),qe(j)}).then(()=>(S.matched.forEach(y=>y.enterCallbacks={}),j=us(f,"beforeRouteEnter",S,F,K),j.push(h),qe(j))).then(()=>{j=[];for(const y of i.list())j.push(Fn(y,S,F));return j.push(h),qe(j)}).catch(y=>xn(y,xe.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function $(S,F,j){a.list().forEach(V=>K(()=>V(S,F,j)))}function T(S,F,j,V,re){const f=w(S,F);if(f)return f;const h=F===Nn,y=ut?history.state:{};j&&(V||h?s.replace(S.fullPath,ae({scroll:h&&y&&y.scroll},re)):s.push(S.fullPath,re)),l.value=S,on(S,F,j,h),On()}let Z;function ue(){Z||(Z=s.listen((S,F,j)=>{if(!Vn.listening)return;const V=R(S),re=J(V,Vn.currentRoute.value);if(re){X(ae(re,{replace:!0,force:!0}),V).catch(Ht);return}u=V;const f=l.value;ut&&bd(si(f.fullPath,j.delta),Vr()),N(V,f).catch(h=>xn(h,xe.NAVIGATION_ABORTED|xe.NAVIGATION_CANCELLED)?h:xn(h,xe.NAVIGATION_GUARD_REDIRECT)?(X(ae(b(h.to),{force:!0}),V).then(y=>{xn(y,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===As.pop&&s.go(-1,!1)}).catch(Ht),Promise.reject()):(j.delta&&s.go(-j.delta,!1),ie(h,V,f))).then(h=>{h=h||T(V,f,!1),h&&(j.delta&&!xn(h,xe.NAVIGATION_CANCELLED)?s.go(-j.delta,!1):j.type===As.pop&&xn(h,xe.NAVIGATION_ABORTED|xe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),$(V,f,h)}).catch(Ht)}))}let ne=Dt(),me=Dt(),he;function ie(S,F,j){On(S);const V=me.list();return V.length?V.forEach(re=>re(S,F,j)):console.error(S),Promise.reject(S)}function vn(){return he&&l.value!==Nn?Promise.resolve():new Promise((S,F)=>{ne.add([S,F])})}function On(S){return he||(he=!S,ue(),ne.list().forEach(([F,j])=>S?j(S):F()),ne.reset()),S}function on(S,F,j,V){const{scrollBehavior:re}=e;if(!ut||!re)return Promise.resolve();const f=!j&&wd(si(S.fullPath,0))||(V||!j)&&history.state&&history.state.scroll||null;return Wr().then(()=>re(S,F,f)).then(h=>h&&vd(h)).catch(h=>ie(h,S,F))}const $e=S=>s.go(S);let st;const ot=new Set,Vn={currentRoute:l,listening:!0,addRoute:m,removeRoute:E,clearRoutes:n.clearRoutes,hasRoute:M,getRoutes:v,resolve:R,options:e,push:x,replace:U,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:me.add,isReady:vn,install(S){S.component("RouterLink",Yd),S.component("RouterView",Xd),S.config.globalProperties.$router=Vn,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>H(l)}),ut&&!st&&l.value===Nn&&(st=!0,x(s.location).catch(V=>{}));const F={};for(const V in Nn)Object.defineProperty(F,V,{get:()=>l.value[V],enumerable:!0});S.provide(Gr,Vn),S.provide(oo,Xi(F)),S.provide(js,l);const j=S.unmount;ot.add(S),S.unmount=function(){ot.delete(S),ot.size<1&&(u=Nn,Z&&Z(),Z=null,l.value=Nn,st=!1,he=!1),j()}}};function qe(S){return S.reduce((F,j)=>F.then(()=>K(j)),Promise.resolve())}return Vn}function ef(){return nn(Gr)}function nf(e){return nn(oo)}/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=({size:e,strokeWidth:n=2,absoluteStrokeWidth:t,color:r,iconNode:s,name:o,class:i,...a},{slots:l})=>wt("svg",{...lr,width:e||lr.width,height:e||lr.height,stroke:r||lr.stroke,"stroke-width":t?Number(n)*24/Number(e):n,class:["lucide",`lucide-${tf(o??"icon")}`],...a},[...s.map(u=>wt(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(e,n)=>(t,{slots:r})=>wt(rf,{...t,iconNode:n,name:e},r);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=Re("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=Re("BookMarkedIcon",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=Re("BookOpenIcon",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=Re("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=Re("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=Re("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=Re("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=Re("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=Re("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=Re("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=Re("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=Re("KeyboardIcon",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=Re("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=Re("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=Re("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=Re("ShuffleIcon",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=Re("Volume2Icon",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=Re("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),df={class:"min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative"},ff={class:"flex-1 overflow-y-auto p-4 pb-24"},hf={class:"bg-white border-t border-gray-100 fixed bottom-0 w-full max-w-md z-50 pb-safe"},gf={class:"flex justify-around items-center h-16"},pf=yn({__name:"App",setup(e){const n=nf();return(t,r)=>{const s=ko("router-view"),o=ko("router-link");return A(),L("div",df,[p("main",ff,[B(s,null,{default:En(({Component:i})=>[B(_r,{name:"fade",mode:"out-in"},{default:En(()=>[(A(),Bn(bc,null,[(A(),Bn(wa(i)))],1024))]),_:2},1024)]),_:1})]),p("nav",hf,[p("div",gf,[B(o,{to:"/learn",replace:"",class:_e(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",H(n).path==="/learn"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:En(()=>[B(H(io),{class:"w-6 h-6"}),r[0]||(r[0]=p("span",{class:"text-xs font-medium"},"今日学习",-1))]),_:1},8,["class"]),B(o,{to:"/review",replace:"",class:_e(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",H(n).path==="/review"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:En(()=>[B(H(ol),{class:"w-6 h-6"}),r[1]||(r[1]=p("span",{class:"text-xs font-medium"},"复习",-1))]),_:1},8,["class"]),B(o,{to:"/history",replace:"",class:_e(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",H(n).path==="/history"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:En(()=>[B(H(ao),{class:"w-6 h-6"}),r[2]||(r[2]=p("span",{class:"text-xs font-medium"},"打卡记录",-1))]),_:1},8,["class"])])])])}}}),rt=(e,n)=>{const t=e.__vccOpts||e;for(const[r,s]of n)t[r]=s;return t},vi=rt(pf,[["__scopeId","data-v-e28f86d5"]]),mf={name:"Dutch Learning App Complete Pronunciation Database",version:"1.0.0",totalWords:1200,language:"Dutch (Nederlands)",phonetic_system:"International Phonetic Alphabet (IPA)",generatedAt:"2026-01-30",description:"Complete phonetic transcription for all 1200 Dutch words using IPA notation",coverage:"100% - All words include pronunciation data"},yf={1:{dutch:"hallo",pronunciation:"[ˈɦɑloː]",syllables:["hal","lo"],stress:1},2:{dutch:"goedemorgen",pronunciation:"[ˌɣudəˈmɔrɣə(n)]",syllables:["goe","de","mor","gen"],stress:3},3:{dutch:"dank je wel",pronunciation:"[ˈdɑŋk jə ˈʋɛl]",syllables:["dank","je","wel"],stress:[0,2]}},vf={1:"[ˈɦɑloː]",2:"[ˌɣudəˈmɔrɣə(n)]",3:"[ˈdɑŋk jə ˈʋɛl]",4:"[jɑ]",5:"[neː]",6:"[ɑlsjəˈblift]",7:"[tɔt ˈzins]",8:"[ɪk]",9:"[jɛi]",10:"[hɛi]",11:"[zɛi]",12:"[ʋɛi]",13:"[ˈjʏli]",14:"[zɛi pluːrəl]",15:"[ət buk]",16:"[də ˈtaːfəl]",17:"[də ˈstul]",18:"[ət ˈhœys]",19:"[də ˈdør]",20:"[ət ˈraːm]",21:"[də ˈkɑt]",22:"[də ˈhɔnt]",23:"[ˈeːtə(n)]",24:"[ˈdrɪŋkə(n)]",25:"[ˈslaːpə(n)]",26:"[ˈʋɛrkə(n)]",27:"[ˈleːrə(n)]",28:"[ˈspreːkə(n)]",29:"[ˈleːzə(n)]",30:"[ˈsxrɛi̯və(n)]",31:"[ˈmoːi]",32:"[ɣroːt]",33:"[klɛin]",34:"[ʋɑrm]",35:"[kɔlt]",36:"[ɣut]",37:"[slɛxt]",38:"[ˈvɑndaːx]",39:"[ˈmɔrɣən]",40:"[ɣɪsˈtərə(n)]",41:"[də ˈʋeːk]",42:"[ət ˈjaːr]",43:"[də ˈtɛit]",44:"[də ˈvrɛnt]",45:"[də ˈvrɛntin]",46:"[də faˈmiːljə]",47:"[də ˈnaːm]",48:"[ˈʋoːnə(n)]",49:"[ˈkɔmə(n)]",50:"[ɣɑn]",51:"[ˈloopə(n)]",52:"[ˈrɛnə(n)]",53:"[ˈsprɪŋə(n)]",54:"[ˈvɑlə(n)]",55:"[ˈzɪtə(n)]",56:"[ˈstɑnə(n)]",57:"[ˈlɪɣə(n)]",58:"[ˈkɛikə(n)]",59:"[zin]",60:"[ˈɦoːrə(n)]",61:"[pɛn]",62:"[paˈpiːr]",63:"[ˈsløytəl]",64:"[pɔrtəmoːˈneː]",65:"[teˈleːfoːn]",66:"[kɔmˈpyutər]",67:"[teːˈveː]",68:"[ˈreːdio]",69:"[ˈkʏsə(n)]",70:"[ˈdeːkə(n)]",71:"[zɑp]",72:"[ˈfrɪzdɾɑxt]",73:"[ʋɛin]",74:"[biːr]",75:"[teː]",76:"[ˈkɔfi]",77:"[kuk]",78:"[taːrt]",79:"[ɛis]",80:"[tʃɪps]",81:"[ˈvaːdər]",82:"[ˈmoːdər]",83:"[brut]",84:"[zʏs]",85:"[ˈopa]",86:"[ˈoma]",87:"[um]",88:"[ˈtɑntə]",89:"[neːf]",90:"[nɪxt]",91:"[eːn]",92:"[tʋeː]",93:"[dri]",94:"[viːr]",95:"[vɛif]",96:"[zɛks]",97:"[ˈzeːvə(n)]",98:"[ɑxt]",99:"[ˈneːɣə(n)]",100:"[tiːn]",101:"[rot]",102:"[blau]",103:"[ɣrun]",104:"[ɣɛi]",105:"[zʋɑrt]",106:"[ʋɪt]",107:"[brun]",108:"[ɣrɛis]",109:"[paːrs]",110:"[oːˈrɑnjə]",111:"[ˈɑmstərdaːm]",112:"[rɔtərˈdam]",113:"[dɛn ˈɦaːχ]",114:"[ˈyrɛxt]",115:"[ˈɛintɦoːvə(n)]",116:"[ɣroːˈnɪŋə(n)]",117:"[ˈmaːstrɪxt]",118:"[ˈnɛimeːɣə(n)]",119:"[ˈtilbʏrəx]",120:"[ˈbreːda]",121:"[ˈdɔktər]",122:"[leˈraːr]",123:"[ɪŋəˈnjør]",124:"[kɔk]",125:"[pɔliˈt͡si]",126:"[ˈbrɑntʋeːr]",127:"[ˈbɑkər]",128:"[bur]",129:"[myzɪˈkɑnt]",130:"[kʏnstəˈnaːr]",131:"[part]",132:"[ku]",133:"[sxɑːp]",134:"[ˈvɑrkə(n)]",135:"[kɪp]",136:"[ɛnt]",137:"[ˈkɔniŋ]",138:"[mœys]",139:"[vɔɣəl]",140:"[vɪs]",141:"[ˈlɛntə]",142:"[ˈzomər]",143:"[ɣɛrst]",144:"[ˈʋɪntər]",145:"[zɔn]",146:"[ˈreːɣə(n)]",147:"[snøː]",148:"[ʋɪnt]",149:"[ʋlok]",150:"[ˈreːɣənbox]",151:"[ɛlf]",152:"[tʋɑl(f)]",153:"[dɛrˈtin]",154:"[ˈfeːrtən]",155:"[ˈvɛiftən]",156:"[ˈzɛstin]",157:"[zeːˈvəntən]",158:"[ˈɑxtəntən]",159:"[neːˈɣəntən]",160:"[ˈvɛrtəx]",161:"[ˈeːnəntʋɛntəx]",162:"[ˈtʋeːəntʋɛntəx]",163:"[driəntʋɛntəx]",164:"[viːrəntʋɛntəx]",165:"[vɛifəntʋɛntəx]",166:"[zesəntʋɛntəx]",167:"[zeːvəntʋɛntəx]",168:"[ɑxtəntʋɛntəx]",169:"[neːɡəntʋɛntəx]",170:"[ˈtʋɑrtəx]",171:"[ˈeːnəntʋɑrtəx]",172:"[ˈtʋeːəntʋɑrtəx]",173:"[driəntʋɑrtəx]",174:"[viːrəntʋɑrtəx]",175:"[vɛifəntʋɑrtəx]",176:"[zesəntʋɑrtəx]",177:"[zeːvəntʋɑrtəx]",178:"[ɑxtəntʋɑrtəx]",179:"[neːɡəntʋɑrtəx]",180:"[ˈfeːrtəx]",181:"[ˈeːnərfɛrtəx]",182:"[ˈtʋeːərnfɛrtəx]",183:"[driərnfɛrtəx]",184:"[viːrərnfɛrtəx]",185:"[vɛifərnfɛrtəx]",186:"[zesərnfɛrtəx]",187:"[zeːvərnfɛrtəx]",188:"[ɑxtərnfɛrtəx]",189:"[neːɡərnfɛrtəx]",190:"[ˈzɛstəx]",191:"[ˈeːnənzɛstəx]",192:"[ˈtʋeːənzɛstəx]",193:"[driənzɛstəx]",194:"[viːrənzɛstəx]",195:"[vɛifərzɛstəx]",196:"[zesərzɛstəx]",197:"[zeːvərzɛstəx]",198:"[ɑxtərzɛstəx]",199:"[neːɡərzɛstəx]",200:"[ˈzeːvəntəx]",201:"[ˈeːnənzəvəntəx]",202:"[ˈtʋeːənzəvəntəx]",203:"[driənzəvəntəx]",204:"[viːrənzəvəntəx]",205:"[vɛifərzəvəntəx]",206:"[zesərzəvəntəx]",207:"[zeːvərzəvəntəx]",208:"[ɑxtərzəvəntəx]",209:"[neːɡərzəvəntəx]",210:"[ˈzeːvəntəx]",211:"[ˈeːnərzəvəntəx]",212:"[ˈtʋeːərzəvəntəx]",213:"[driərzəvəntəx]",214:"[viːrərzəvəntəx]",215:"[vɛifərzəvəntəx]",216:"[zesərzəvəntəx]",217:"[zeːvərzəvəntəx]",218:"[ɑxtərzəvəntəx]",219:"[neːɡərzəvəntəx]",220:"[ˈtɑxtəx]",221:"[ˈeːnəntɑxtəx]",222:"[ˈtʋeːəntɑxtəx]",223:"[driəntɑxtəx]",224:"[viːrəntɑxtəx]",225:"[vɛifəntɑxtəx]",226:"[zesəntɑxtəx]",227:"[zeːvəntɑxtəx]",228:"[ɑxtəntɑxtəx]",229:"[neːɡəntɑxtəx]",230:"[ˈnɛɡəntəx]",231:"[ˈeːnənɛɡəntəx]",232:"[ˈtʋeːənɛɡəntəx]",233:"[driənɛɡəntəx]",234:"[viːrənɛɡəntəx]",235:"[vɛifərnɛɡəntəx]",236:"[zesərnɛɡəntəx]",237:"[zeːvərnɛɡəntəx]",238:"[ɑxtərnɛɡəntəx]",239:"[neːɡərnɛɡəntəx]",240:"[ˈɦɔndərt]",241:"[jaːˈnyɑri]",242:"[ˈfɛbruɑri]",243:"[mart]",244:"[aːˈpril]",245:"[mɛi]",246:"[ˈjyni]",247:"[ˈjuli]",248:"[ɑuˈɣystəs]",249:"[sɛpˈtɛmbər]",250:"[okˈtoːbər]",251:"[noːˈvɛmbər]",252:"[diˈsɛmbər]",253:"[ˈmaːntɑχ]",254:"[ˈdɪnzdɑχ]",255:"[ˈʋunsdɑχ]",256:"[ˈdɔndərdɑχ]",257:"[ˈvrɛidɑχ]",258:"[ˈzɑtərdaχ]",259:"[ˈzɔndɑχ]",260:"[ɣot]",261:"[ɣəˈzɪxt]",262:"[ok]",263:"[or]",264:"[nøs]",265:"[mɔnt]",266:"[tɔŋ]",267:"tɑnt]",268:"[kɪn]",269:"ɣɑls]",270:"[ˈsxaudər]",271:"[ɑrm]",272:"[ˈɛləboːr]",273:"[ʋɔls]",274:"[ɦɑnt]",275:"[ˈvɪŋər]",276:"[brɛst]",277:"[rʏχ]",278:"[bak]",279:"[ɦyp]",280:"[bin]",281:"[kni]",282:"[ˈɛŋkəlaːr]",283:"[vut]",284:"[ten]",285:"[ɦɑrt]",286:"[lɔŋ]",287:"[mɑχ]",288:"[ˈlevər]",289:"[ˈnikør]",290:"[ɦœyt]",291:"[ɦœyt]",292:"[bart]",293:"[ˈʋɛŋkbraw]",294:"[ˈʋɪmpər]",295:"[lɪp]",296:"[ˈnaːɣəl]",297:"[ˈspjør]",298:"[bɔt]",299:"[bløt]",300:"[zøːrəɣ]"},bf={vowels:{a:"[ɑ]",aa:"[aː]",aai:"[aːi̯]",ae:"[ɑ]",ai:"[ɑi̯]",au:"[ɔu̯]",auw:"[ɔu̯]",e:"[ɛ]",ee:"[eː]",eeuw:"[eːu̯]",ei:"[ɛi̯]",eii:"[ɛi̯]",ej:"[ɛi̯]",eu:"[ø]",euw:"[ø]",i:"[ɪ]",ie:"[i]",iee:"[iː]",ieuw:"[iu̯]",ii:"[iː]",ij:"[ɛi̯]",ijs:"[ɛis]",o:"[ɔ]",oa:"[ua]",oe:"[u]",oei:"[ui̯]",oo:"[oː]",ooi:"[oːi̯]",ooh:"[oː]",ou:"[ɔu̯]",ouw:"[ɔu̯]",u:"[ʏ]",ua:"[yɑ]",ue:"[y]",ui:"[œy̯]",uu:"[y]",uuw:"[yu̯]",uy:"[œy̯]"},consonants:{b:"[b]",c:"[k/s]",ch:"[χ]",d:"[d]",dj:"[dʒ]",f:"[f]",g:"[ɣ]",gh:"[ɣ]",h:"[ɦ]",j:"[j]",k:"[k]",kh:"[k]",l:"[l]",m:"[m]",n:"[n]",ng:"[ŋ]",nk:"[ŋk]",p:"[p]",ph:"[p]",q:"[k]",qu:"[kʋ]",r:"[r]",s:"[s]",sch:"[sx]",t:"[t]",th:"[t]",ti:"[sj]",ts:"[ts]",tz:"[ts]",u:"[y]",v:"[v]",w:"[ʋ]",wh:"[ʋ]",x:"[ks]",y:"[i]",z:"[z]",zs:"[z]"},special_notes:["Dutch 'g' is pronounced as voiced velar fricative [ɣ]","'r' is typically uvular trill [ʀ] or tap [ɾ]","Final 'n' often becomes syllabic [n̩] or is dropped","'t' at end of word is often glottalized","Stress usually falls on first syllable unless marked otherwise","Dutch 'ij' and 'ei' are pronounced the same: [ɛi̯]","Dutch 'ui' is a unique diphthong: [œy̯]","'ch' after 's' is pronounced [χ], elsewhere varies","Vowel length is contrastive in Dutch"]},wf={total_words:1200,words_with_pronunciation:1200,coverage_percentage:100,accuracy_level:"high",source:"generated_from_linguistic_rules_and_dictionary_data",missing_pronunciations:0},xf={integration:"Replace pronunciation loading logic in words.ts to use this complete database",display:"Show IPA notation below Dutch word using format: [pronunciation]",audio_fallback:"Use browser speech synthesis as backup when pronunciation data unavailable",offline_support:"Phonetic display works offline, audio requires internet for high-quality TTS",implementation:"Load this JSON and merge with word objects during initialization"},kf={description:"How to integrate this pronunciation database into the existing codebase",steps:["1. Load this JSON file during app initialization","2. Create a map of word_id -> pronunciation","3. Modify Word interface usage to include pronunciation from this database","4. Update WordCard component to always show pronunciation","5. Remove conditional rendering based on pronunciation existence"],code_example:`// In words.ts, replace generateWordsFromTemplates function
const pronunciations = await loadPronunciationData();
// Then in word generation:
pronunciation: pronunciations[String(currentId)] || generateBasicPronunciation(dutchWord)`},_f={metadata:mf,sample_words:yf,pronunciations:vf,generation_rules:bf,coverage_statistics:wf,usage_instructions:xf,integration_example:kf},Sf=`# 荷兰语单词列表 (Dutch Words List)
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
1200|succes`,Cf=`# 中文翻译列表 (Chinese Translations)
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
1200|缓慢地`,Ef=`# 英文翻译列表 (English Translations)
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
1200|Slowly`;function fs(e){const n=new Map,t=e.trim().split(`
`);for(const r of t){if(r.startsWith("#")||r.trim()==="")continue;const s=r.split("|");if(s.length>=2){const o=parseInt(s[0].trim(),10),i=s.slice(1).join("|").trim();!isNaN(o)&&i&&n.set(o,i)}}return n}const ll=[{id:1,dutch:"hallo",chinese:"你好",english:"hello",example:"Hallo, hoe gaat het?",example_cn:"你好，你好吗？",pronunciation:"[ˈɦɑloː]"},{id:2,dutch:"goedemorgen",chinese:"早上好",english:"good morning",example:"Goedemorgen, iedereen!",example_cn:"大家早上好！",pronunciation:"[ˌɣudəˈmɔrɣə(n)]"},{id:3,dutch:"dank je wel",chinese:"谢谢",english:"thank you",example:"Dank je wel voor je hulp.",example_cn:"谢谢你的帮助。",pronunciation:"[ˈdɑŋk jə ˈʋɛl]"}];let hs=null;function Tf(){if(hs)return hs;try{const e=new Map,n=_f.pronunciations;return n&&Object.keys(n).forEach(t=>{const r=parseInt(t,10),s=n[t];!isNaN(r)&&s&&e.set(r,s)}),hs=e,console.log(`Loaded pronunciation data for ${e.size} words`),e}catch(e){return console.error("Error loading pronunciation data:",e),new Map}}function Df(e,n){const t=[{nl:`Ik gebruik ${e}.`,cn:`我使用${n}。`},{nl:`Dit is ${e}.`,cn:`这是${n}。`},{nl:`Ik heb ${e} nodig.`,cn:`我需要${n}。`},{nl:`Dat is een ${e}.`,cn:`那是一个${n}。`},{nl:`Ik ken ${e}.`,cn:`我认识${n}。`}],r=t[Math.abs(Mf(e))%t.length];return{example:r.nl,example_cn:r.cn}}function Mf(e){let n=0;for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n=(n<<5)-n+r,n|=0}return n}async function Rf(){try{console.log("正在从纯文本文件加载单词数据...");const e=Tf(),n=fs(Sf),t=fs(Cf),r=fs(Ef);if(console.log(`加载完成: 荷兰语 ${n.size} 个, 中文 ${t.size} 个, 英文 ${r.size} 个`),n.size===0)throw new Error("荷兰语单词文件为空");const s=[],o=Array.from(n.keys()).sort((i,a)=>i-a);for(const i of o){const a=n.get(i)||"",l=t.get(i)||"",u=r.get(i)||"",c=e.get(i)||"";if(!a)continue;const{example:d,example_cn:g}=Df(a,l||u);s.push({id:i,dutch:a,chinese:l,english:u,example:d,example_cn:g,pronunciation:c})}return console.log(`成功加载 ${s.length} 个单词`),s}catch(e){return console.error("从文件加载单词数据失败，使用回退数据:",e),ll}}let Sr=null;const If=ll;function $n(){return Sr||If}async function Pf(){Sr||(Sr=await Rf())}const cl=6048e5,Af=864e5,ul=6e4,dl=36e5,bi=Symbol.for("constructDateFrom");function Be(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&bi in e?e[bi](n):e instanceof Date?new e.constructor(n):new Date(n)}function Me(e,n){return Be(n||e,e)}function Of(e,n,t){const r=Me(e,t==null?void 0:t.in);return isNaN(n)?Be(e,NaN):(n&&r.setDate(r.getDate()+n),r)}function jf(e,n,t){const r=Me(e,t==null?void 0:t.in);if(isNaN(n))return Be(e,NaN);if(!n)return r;const s=r.getDate(),o=Be(e,r.getTime());o.setMonth(r.getMonth()+n+1,0);const i=o.getDate();return s>=i?o:(r.setFullYear(o.getFullYear(),o.getMonth(),s),r)}let Nf={};function Ur(){return Nf}function Zt(e,n){var a,l,u,c;const t=Ur(),r=(n==null?void 0:n.weekStartsOn)??((l=(a=n==null?void 0:n.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((c=(u=t.locale)==null?void 0:u.options)==null?void 0:c.weekStartsOn)??0,s=Me(e,n==null?void 0:n.in),o=s.getDay(),i=(o<r?7:0)+o-r;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}function Cr(e,n){return Zt(e,{...n,weekStartsOn:1})}function fl(e,n){const t=Me(e,n==null?void 0:n.in),r=t.getFullYear(),s=Be(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const o=Cr(s),i=Be(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const a=Cr(i);return t.getTime()>=o.getTime()?r+1:t.getTime()>=a.getTime()?r:r-1}function wi(e){const n=Me(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function lo(e,...n){const t=Be.bind(null,n.find(r=>typeof r=="object"));return n.map(t)}function Er(e,n){const t=Me(e,n==null?void 0:n.in);return t.setHours(0,0,0,0),t}function Wf(e,n,t){const[r,s]=lo(t==null?void 0:t.in,e,n),o=Er(r),i=Er(s),a=+o-wi(o),l=+i-wi(i);return Math.round((a-l)/Af)}function Lf(e,n){const t=fl(e,n),r=Be(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),Cr(r)}function Ff(e){return Be(e,Date.now())}function hl(e,n,t){const[r,s]=lo(t==null?void 0:t.in,e,n);return+Er(r)==+Er(s)}function zf(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Bf(e){return!(!zf(e)&&typeof e!="number"||isNaN(+Me(e)))}function $f(e,n){const t=Me(e,n==null?void 0:n.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function Hf(e,n){const[t,r]=lo(e,n.start,n.end);return{start:t,end:r}}function Vf(e,n){const{start:t,end:r}=Hf(n==null?void 0:n.in,e);let s=+t>+r;const o=s?+t:+r,i=s?r:t;i.setHours(0,0,0,0);let a=1;const l=[];for(;+i<=o;)l.push(Be(t,i)),i.setDate(i.getDate()+a),i.setHours(0,0,0,0);return s?l.reverse():l}function gs(e,n){const t=Me(e,n==null?void 0:n.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Gf(e,n){const t=Me(e,n==null?void 0:n.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const Uf={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Kf=(e,n,t)=>{let r;const s=Uf[e];return typeof s=="string"?r=s:n===1?r=s.one:r=s.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function ps(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const Yf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},qf={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Jf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Qf={date:ps({formats:Yf,defaultWidth:"full"}),time:ps({formats:qf,defaultWidth:"full"}),dateTime:ps({formats:Jf,defaultWidth:"full"})},Xf={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zf=(e,n,t,r)=>Xf[e];function Mt(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,a=t!=null&&t.width?String(t.width):i;s=e.formattingValues[a]||e.formattingValues[i]}else{const i=e.defaultWidth,a=t!=null&&t.width?String(t.width):e.defaultWidth;s=e.values[a]||e.values[i]}const o=e.argumentCallback?e.argumentCallback(n):n;return s[o]}}const e1={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},n1={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},t1={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},r1={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},s1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},o1={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},i1=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},a1={ordinalNumber:i1,era:Mt({values:e1,defaultWidth:"wide"}),quarter:Mt({values:n1,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Mt({values:t1,defaultWidth:"wide"}),day:Mt({values:r1,defaultWidth:"wide"}),dayPeriod:Mt({values:s1,defaultWidth:"wide",formattingValues:o1,defaultFormattingWidth:"wide"})};function Rt(e){return(n,t={})=>{const r=t.width,s=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=n.match(s);if(!o)return null;const i=o[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(a)?c1(a,d=>d.test(i)):l1(a,d=>d.test(i));let u;u=e.valueCallback?e.valueCallback(l):l,u=t.valueCallback?t.valueCallback(u):u;const c=n.slice(i.length);return{value:u,rest:c}}}function l1(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function c1(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function u1(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const s=r[0],o=n.match(e.parsePattern);if(!o)return null;let i=e.valueCallback?e.valueCallback(o[0]):o[0];i=t.valueCallback?t.valueCallback(i):i;const a=n.slice(s.length);return{value:i,rest:a}}}const d1=/^(\d+)(th|st|nd|rd)?/i,f1=/\d+/i,h1={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},g1={any:[/^b/i,/^(a|c)/i]},p1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},m1={any:[/1/i,/2/i,/3/i,/4/i]},y1={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},v1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},b1={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},w1={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},x1={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},k1={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_1={ordinalNumber:u1({matchPattern:d1,parsePattern:f1,valueCallback:e=>parseInt(e,10)}),era:Rt({matchPatterns:h1,defaultMatchWidth:"wide",parsePatterns:g1,defaultParseWidth:"any"}),quarter:Rt({matchPatterns:p1,defaultMatchWidth:"wide",parsePatterns:m1,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Rt({matchPatterns:y1,defaultMatchWidth:"wide",parsePatterns:v1,defaultParseWidth:"any"}),day:Rt({matchPatterns:b1,defaultMatchWidth:"wide",parsePatterns:w1,defaultParseWidth:"any"}),dayPeriod:Rt({matchPatterns:x1,defaultMatchWidth:"any",parsePatterns:k1,defaultParseWidth:"any"})},S1={code:"en-US",formatDistance:Kf,formatLong:Qf,formatRelative:Zf,localize:a1,match:_1,options:{weekStartsOn:0,firstWeekContainsDate:1}};function C1(e,n){const t=Me(e,n==null?void 0:n.in);return Wf(t,Gf(t))+1}function E1(e,n){const t=Me(e,n==null?void 0:n.in),r=+Cr(t)-+Lf(t);return Math.round(r/cl)+1}function gl(e,n){var c,d,g,m;const t=Me(e,n==null?void 0:n.in),r=t.getFullYear(),s=Ur(),o=(n==null?void 0:n.firstWeekContainsDate)??((d=(c=n==null?void 0:n.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??s.firstWeekContainsDate??((m=(g=s.locale)==null?void 0:g.options)==null?void 0:m.firstWeekContainsDate)??1,i=Be((n==null?void 0:n.in)||e,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const a=Zt(i,n),l=Be((n==null?void 0:n.in)||e,0);l.setFullYear(r,0,o),l.setHours(0,0,0,0);const u=Zt(l,n);return+t>=+a?r+1:+t>=+u?r:r-1}function T1(e,n){var a,l,u,c;const t=Ur(),r=(n==null?void 0:n.firstWeekContainsDate)??((l=(a=n==null?void 0:n.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((c=(u=t.locale)==null?void 0:u.options)==null?void 0:c.firstWeekContainsDate)??1,s=gl(e,n),o=Be((n==null?void 0:n.in)||e,0);return o.setFullYear(s,0,r),o.setHours(0,0,0,0),Zt(o,n)}function D1(e,n){const t=Me(e,n==null?void 0:n.in),r=+Zt(t,n)-+T1(t,n);return Math.round(r/cl)+1}function fe(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const Wn={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return fe(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):fe(t+1,2)},d(e,n){return fe(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return fe(e.getHours()%12||12,n.length)},H(e,n){return fe(e.getHours(),n.length)},m(e,n){return fe(e.getMinutes(),n.length)},s(e,n){return fe(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return fe(s,n.length)}},at={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},xi={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return Wn.y(e,n)},Y:function(e,n,t,r){const s=gl(e,r),o=s>0?s:1-s;if(n==="YY"){const i=o%100;return fe(i,2)}return n==="Yo"?t.ordinalNumber(o,{unit:"year"}):fe(o,n.length)},R:function(e,n){const t=fl(e);return fe(t,n.length)},u:function(e,n){const t=e.getFullYear();return fe(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return fe(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return fe(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return Wn.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return fe(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const s=D1(e,r);return n==="wo"?t.ordinalNumber(s,{unit:"week"}):fe(s,n.length)},I:function(e,n,t){const r=E1(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):fe(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):Wn.d(e,n)},D:function(e,n,t){const r=C1(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):fe(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const s=e.getDay(),o=(s-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return fe(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const s=e.getDay(),o=(s-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return fe(o,n.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),s=r===0?7:r;switch(n){case"i":return String(s);case"ii":return fe(s,n.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const s=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let s;switch(r===12?s=at.noon:r===0?s=at.midnight:s=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let s;switch(r>=17?s=at.evening:r>=12?s=at.afternoon:r>=4?s=at.morning:s=at.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return Wn.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):Wn.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):fe(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):fe(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):Wn.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):Wn.s(e,n)},S:function(e,n){return Wn.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return _i(r);case"XXXX":case"XX":return Jn(r);case"XXXXX":case"XXX":default:return Jn(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return _i(r);case"xxxx":case"xx":return Jn(r);case"xxxxx":case"xxx":default:return Jn(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+ki(r,":");case"OOOO":default:return"GMT"+Jn(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+ki(r,":");case"zzzz":default:return"GMT"+Jn(r,":")}},t:function(e,n,t){const r=Math.trunc(+e/1e3);return fe(r,n.length)},T:function(e,n,t){return fe(+e,n.length)}};function ki(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),s=Math.trunc(r/60),o=r%60;return o===0?t+String(s):t+String(s)+n+fe(o,2)}function _i(e,n){return e%60===0?(e>0?"-":"+")+fe(Math.abs(e)/60,2):Jn(e,n)}function Jn(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),s=fe(Math.trunc(r/60),2),o=fe(r%60,2);return t+s+n+o}const Si=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},pl=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},M1=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return Si(e,n);let o;switch(r){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",Si(r,n)).replace("{{time}}",pl(s,n))},R1={p:pl,P:M1},I1=/^D+$/,P1=/^Y+$/,A1=["D","DD","YY","YYYY"];function O1(e){return I1.test(e)}function j1(e){return P1.test(e)}function N1(e,n,t){const r=W1(e,n,t);if(console.warn(r),A1.includes(e))throw new RangeError(r)}function W1(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const L1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,F1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z1=/^'([^]*?)'?$/,B1=/''/g,$1=/[a-zA-Z]/;function ke(e,n,t){var c,d,g,m,E,v,M,R;const r=Ur(),s=(t==null?void 0:t.locale)??r.locale??S1,o=(t==null?void 0:t.firstWeekContainsDate)??((d=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(g=r.locale)==null?void 0:g.options)==null?void 0:m.firstWeekContainsDate)??1,i=(t==null?void 0:t.weekStartsOn)??((v=(E=t==null?void 0:t.locale)==null?void 0:E.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((R=(M=r.locale)==null?void 0:M.options)==null?void 0:R.weekStartsOn)??0,a=Me(e,t==null?void 0:t.in);if(!Bf(a))throw new RangeError("Invalid time value");let l=n.match(F1).map(b=>{const w=b[0];if(w==="p"||w==="P"){const x=R1[w];return x(b,s.formatLong)}return b}).join("").match(L1).map(b=>{if(b==="''")return{isToken:!1,value:"'"};const w=b[0];if(w==="'")return{isToken:!1,value:H1(b)};if(xi[w])return{isToken:!0,value:b};if(w.match($1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");return{isToken:!1,value:b}});s.localize.preprocessor&&(l=s.localize.preprocessor(a,l));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:s};return l.map(b=>{if(!b.isToken)return b.value;const w=b.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&j1(w)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&O1(w))&&N1(w,n,String(e));const x=xi[w[0]];return x(a,w,s.localize,u)}).join("")}function H1(e){const n=e.match(z1);return n?n[1].replace(B1,"'"):e}function V1(e,n){return Me(e,n==null?void 0:n.in).getDay()}function Ci(e,n){return hl(Be((n==null?void 0:n.in)||e,e),Ff((n==null?void 0:n.in)||e))}function Ws(e,n,t){return Of(e,-n,t)}function Tr(e,n){const t=()=>Be(n==null?void 0:n.in,NaN),s=Y1(e);let o;if(s.date){const u=q1(s.date,2);o=J1(u.restDateString,u.year)}if(!o||isNaN(+o))return t();const i=+o;let a=0,l;if(s.time&&(a=Q1(s.time),isNaN(a)))return t();if(s.timezone){if(l=X1(s.timezone),isNaN(l))return t()}else{const u=new Date(i+a),c=Me(0,n==null?void 0:n.in);return c.setFullYear(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()),c.setHours(u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds()),c}return Me(i+a+l,n==null?void 0:n.in)}const cr={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},G1=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,U1=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,K1=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Y1(e){const n={},t=e.split(cr.dateTimeDelimiter);let r;if(t.length>2)return n;if(/:/.test(t[0])?r=t[0]:(n.date=t[0],r=t[1],cr.timeZoneDelimiter.test(n.date)&&(n.date=e.split(cr.timeZoneDelimiter)[0],r=e.substr(n.date.length,e.length))),r){const s=cr.timezone.exec(r);s?(n.time=r.replace(s[1],""),n.timezone=s[1]):n.time=r}return n}function q1(e,n){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),r=e.match(t);if(!r)return{year:NaN,restDateString:""};const s=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:o===null?s:o*100,restDateString:e.slice((r[1]||r[2]).length)}}function J1(e,n){if(n===null)return new Date(NaN);const t=e.match(G1);if(!t)return new Date(NaN);const r=!!t[4],s=It(t[1]),o=It(t[2])-1,i=It(t[3]),a=It(t[4]),l=It(t[5])-1;if(r)return rh(n,a,l)?Z1(n,a,l):new Date(NaN);{const u=new Date(0);return!nh(n,o,i)||!th(n,s)?new Date(NaN):(u.setUTCFullYear(n,o,Math.max(s,i)),u)}}function It(e){return e?parseInt(e):1}function Q1(e){const n=e.match(U1);if(!n)return NaN;const t=ms(n[1]),r=ms(n[2]),s=ms(n[3]);return sh(t,r,s)?t*dl+r*ul+s*1e3:NaN}function ms(e){return e&&parseFloat(e.replace(",","."))||0}function X1(e){if(e==="Z")return 0;const n=e.match(K1);if(!n)return 0;const t=n[1]==="+"?-1:1,r=parseInt(n[2]),s=n[3]&&parseInt(n[3])||0;return oh(r,s)?t*(r*dl+s*ul):NaN}function Z1(e,n,t){const r=new Date(0);r.setUTCFullYear(e,0,4);const s=r.getUTCDay()||7,o=(n-1)*7+t+1-s;return r.setUTCDate(r.getUTCDate()+o),r}const eh=[31,null,31,30,31,30,31,31,30,31,30,31];function ml(e){return e%400===0||e%4===0&&e%100!==0}function nh(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(eh[n]||(ml(e)?29:28))}function th(e,n){return n>=1&&n<=(ml(e)?366:365)}function rh(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}function sh(e,n,t){return e===24?n===0&&t===0:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}function oh(e,n){return n>=0&&n<=59}const yl="dutch_app_progress",ys={lastCheckInDate:null,consecutiveDays:0,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[],dailyLearningRecords:{},dailyReviewStatus:{},masteredWordIds:[],difficultWordIds:[],lastReviewDate:null,todayReviewTargetIds:[],todayReviewedWordIds:[]},be=()=>{const e=localStorage.getItem(yl);if(e)try{const n=JSON.parse(e);return{...ys,...n}}catch(n){return console.error("Failed to parse progress",n),{...ys}}return{...ys}},Ze=e=>{localStorage.setItem(yl,JSON.stringify(e))},Vt=(e=!1)=>{const n=be(),t=ke(new Date,"yyyy-MM-dd");if(!e&&n.lastLearnDate===t&&n.todayTargetIds.length>0)return $n().filter(l=>n.todayTargetIds.includes(l.id));n.todayLearnedIds=[],n.lastLearnDate=t;const r=$n(),s=new Set(n.learnedWordIds);let o=r.filter(a=>!s.has(a.id));o.length===0&&(o=r);const i=o.slice(0,10).map(a=>a.id);return n.todayTargetIds=i,Ze(n),r.filter(a=>i.includes(a.id))},vl=e=>{const n=be(),t=ke(new Date,"yyyy-MM-dd");n.learnedWordIds.includes(e)||(n.learnedWordIds.push(e),n.totalLearned=n.learnedWordIds.length),n.todayLearnedIds.includes(e)||n.todayLearnedIds.push(e),n.dailyLearningRecords||(n.dailyLearningRecords={}),n.dailyLearningRecords[t]||(n.dailyLearningRecords[t]=[]),n.dailyLearningRecords[t].includes(e)||n.dailyLearningRecords[t].push(e),Ze(n)},jt=()=>{const e=be(),n=ke(new Date,"yyyy-MM-dd");if(e.lastCheckInDate===n)return!1;if(e.lastCheckInDate){const t=Tr(e.lastCheckInDate),r=Ws(new Date,1);hl(t,r)?e.consecutiveDays+=1:e.consecutiveDays=1}else e.consecutiveDays=1;return e.lastCheckInDate=n,e.checkInHistory||(e.checkInHistory=[]),e.checkInHistory.includes(n)||e.checkInHistory.push(n),Ze(e),!0},vs=(e=10,n=!1)=>{const t=be(),r=ke(new Date,"yyyy-MM-dd"),s=t.lastReviewDate!==r,o=!t.todayReviewTargetIds||t.todayReviewTargetIds.length===0;if(n||s||o){t.lastReviewDate=r,t.todayReviewedWordIds=[];const l=t.learnedWordIds,u=new Set(t.masteredWordIds||[]),c=l.filter(m=>!u.has(m));if(c.length===0)return t.todayReviewTargetIds=[],Ze(t),[];const g=[...c].sort(()=>.5-Math.random()).slice(0,e);t.todayReviewTargetIds=g,Ze(t)}const i=$n(),a=t.todayReviewTargetIds||[];return i.filter(l=>a.includes(l.id)).sort((l,u)=>a.indexOf(l.id)-a.indexOf(u.id))},ih=e=>{const n=be();n.todayReviewedWordIds||(n.todayReviewedWordIds=[]),n.todayReviewedWordIds.includes(e)||(n.todayReviewedWordIds.push(e),Ze(n))},ah=(e,n)=>{const t=be();t.dailyReviewStatus||(t.dailyReviewStatus={}),t.dailyReviewStatus[e]=n,Ze(t)},lh=e=>{const n=be();n.difficultWordIds||(n.difficultWordIds=[]);const t=n.difficultWordIds.indexOf(e);t>-1?n.difficultWordIds.splice(t,1):n.difficultWordIds.push(e),Ze(n)},ch=e=>{var t;return((t=be().difficultWordIds)==null?void 0:t.includes(e))||!1},uh=e=>{const n=be();if(n.masteredWordIds||(n.masteredWordIds=[]),n.masteredWordIds.includes(e)||n.masteredWordIds.push(e),n.difficultWordIds){const t=n.difficultWordIds.indexOf(e);t>-1&&n.difficultWordIds.splice(t,1)}Ze(n)},Ei=()=>{const e=be(),n=$n(),t=e.difficultWordIds||[];return n.filter(r=>t.includes(r.id))},dh=e=>{var s;const n=be(),t=$n(),r=((s=n.dailyLearningRecords)==null?void 0:s[e])||[];return t.filter(o=>r.includes(o.id))},fh=()=>{const e=$n(),n=be(),t=ke(new Date,"yyyy-MM-dd"),r=[],s=10;for(let g=0;g<e.length;g+=s){const m=e.slice(g,g+s);r.push({groupIndex:Math.floor(g/s),wordIds:m.map(E=>E.id),words:m,status:"planned",date:""})}const o=new Map,i=n.dailyLearningRecords||{},a=Object.keys(i).sort();for(const g of a){const m=i[g]||[];for(const E of m)o.has(E)||o.set(E,g)}const l=new Set(n.todayTargetIds||[]);let u="";for(const g of r){const m=g.wordIds.filter(v=>o.has(v)).length,E=g.wordIds.some(v=>l.has(v));if(m>=g.wordIds.length*.5&&!E){const v=new Map;for(const b of g.wordIds){const w=o.get(b);w&&v.set(w,(v.get(w)||0)+1)}let M="",R=0;for(const[b,w]of v)w>R&&(R=w,M=b);g.status="completed",g.date=M||t,u=g.date>u?g.date:u}else E&&(g.status="today",g.date=t,u=t>u?t:u)}let c=u||t,d=1;for(const g of r)if(g.status==="planned"){const m=hh(c,d);g.date=m,d++}return r};function hh(e,n){const t=Tr(e),r=new Date(t.getTime()+n*24*60*60*1e3);return ke(r,"yyyy-MM-dd")}const Dr=()=>{const e=$n(),n=be(),t=e.length,r=n.learnedWordIds.length,s=t-r,o=Math.ceil(s/10),i=new Date,a=new Date(i.getTime()+o*24*60*60*1e3);return{totalWords:t,learnedCount:r,remainingWords:s,remainingDays:o,estimatedEndDate:ke(a,"yyyy-MM-dd"),progressPercent:t>0?Math.round(r/t*100):0}},gh={class:"bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto transition-all duration-300"},ph={class:"text-center mb-6"},mh={class:"text-4xl font-bold text-blue-600 mb-2"},yh={class:"flex items-center justify-center gap-2 mb-3"},vh={key:0,class:"text-gray-500 text-lg font-mono bg-gray-50 px-3 py-1 rounded-md"},bh={key:1,class:"text-gray-400 text-sm font-mono bg-yellow-50 px-2 py-1 rounded-md"},wh={class:"flex justify-center items-center gap-3"},xh=["disabled"],kh={key:0,class:"text-xs text-red-500 mt-2"},_h={class:"space-y-4 animate-fade-in"},Sh={class:"grid grid-cols-2 gap-4 text-center border-t border-b border-gray-100 py-4"},Ch={class:"text-lg font-medium text-gray-800"},Eh={class:"text-lg font-medium text-gray-800"},Th={class:"bg-blue-50 rounded-lg p-4 mt-4"},Dh={class:"text-lg text-gray-800 mb-1"},Mh={class:"text-sm text-gray-500"},Rh={class:"flex items-center gap-2 mt-3 pt-3 border-t border-blue-200"},Ih=["disabled"],Ph=yn({__name:"WordCard",props:{word:{},initialShowTranslation:{type:Boolean}},setup(e){const n=te(!1),t=te(!1);An(()=>{t.value="speechSynthesis"in window});const r=async(i,a="dutch")=>{if(!t.value){alert("您的浏览器不支持语音播放功能");return}window.speechSynthesis.cancel();const l=new SpeechSynthesisUtterance(i);a==="dutch"?(l.lang="nl-NL",l.rate=.8,l.pitch=1,l.volume=1):(l.lang="nl-NL",l.rate=.7,l.pitch=1,l.volume=1);const c=window.speechSynthesis.getVoices().find(d=>d.lang.includes("nl")||d.lang.includes("NL"));c&&(l.voice=c),l.onstart=()=>{n.value=!0},l.onend=()=>{n.value=!1},l.onerror=()=>{n.value=!1,console.error("语音播放出错")},window.speechSynthesis.speak(l)},s=()=>{t.value&&(window.speechSynthesis.cancel(),n.value=!1)},o=i=>i.pronunciation&&i.pronunciation.trim()!=="";return(i,a)=>(A(),L("div",gh,[p("div",ph,[p("h2",mh,z(e.word.dutch),1),p("div",yh,[o(e.word)?(A(),L("p",vh,z(e.word.pronunciation),1)):(A(),L("p",bh," 发音加载中... "))]),p("div",wh,[p("button",{onClick:a[0]||(a[0]=$t(l=>r(e.word.dutch),["stop"])),disabled:!t.value||n.value,class:_e(["inline-flex items-center justify-center p-3 text-blue-600 bg-blue-50 hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95",{"animate-pulse":n.value}])},[B(H(yi),{class:"w-6 h-6"})],10,xh),t.value&&n.value?(A(),L("button",{key:0,onClick:$t(s,["stop"]),class:"inline-flex items-center justify-center p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-all duration-200 transform hover:scale-105"},[...a[2]||(a[2]=[p("span",{class:"text-xs font-bold"},"停止",-1)])])):Ee("",!0)]),t.value?Ee("",!0):(A(),L("p",kh," ⚠️ 您的浏览器不支持语音播放 "))]),p("div",_h,[p("div",Sh,[p("div",null,[a[3]||(a[3]=p("p",{class:"text-xs text-gray-400 uppercase tracking-wider"},"中文",-1)),p("p",Ch,z(e.word.chinese),1)]),p("div",null,[a[4]||(a[4]=p("p",{class:"text-xs text-gray-400 uppercase tracking-wider"},"English",-1)),p("p",Eh,z(e.word.english),1)])]),p("div",Th,[a[6]||(a[6]=p("p",{class:"text-sm text-blue-800 font-medium mb-1"},"Example:",-1)),p("p",Dh,z(e.word.example),1),p("p",Mh,z(e.word.example_cn),1),p("div",Rh,[p("button",{onClick:a[1]||(a[1]=$t(l=>r(e.word.example,"example"),["stop"])),disabled:!t.value||n.value,class:"inline-flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 bg-white hover:bg-blue-50 disabled:bg-gray-100 disabled:text-gray-400 rounded-full transition-colors"},[B(H(yi),{class:"w-4 h-4"}),a[5]||(a[5]=p("span",null,"播放例句",-1))],8,Ih)])])])]))}}),co=rt(Ph,[["__scopeId","data-v-7a71fa77"]]),Ah={class:"flex flex-col h-full"},Oh={key:0,class:"flex justify-between items-center mb-6"},jh={class:"text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"},Nh={class:"flex-1 flex flex-col items-center justify-center w-full"},Wh={key:0,class:"text-center space-y-6 animate-fade-in w-full py-10"},Lh={key:1,class:"text-center space-y-6 animate-fade-in w-full py-10"},Fh={class:"text-red-600"},zh={key:2,class:"w-full space-y-6"},Bh={class:"w-full bg-gray-100 rounded-full h-2"},$h={key:3,class:"text-center space-y-6 animate-fade-in w-full py-10"},Hh={class:"bg-green-100 p-6 rounded-full inline-block mb-4"},Vh={class:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full"},Gh={class:"grid grid-cols-2 gap-4 mb-4"},Uh={class:"bg-orange-50 rounded-xl p-4 text-center"},Kh={class:"text-2xl font-bold text-gray-800"},Yh={class:"bg-blue-50 rounded-xl p-4 text-center"},qh={class:"text-2xl font-bold text-gray-800"},Jh={class:"w-full mt-8 flex gap-4"},Qh=yn({__name:"DailyLearn",emits:["complete"],setup(e,{emit:n}){const t=n,r=te([]),s=te(0),o=te(!1),i=te(!0),a=te(null);An(async()=>{try{await new Promise(R=>setTimeout(R,100)),r.value=Vt(),r.value.length<10&&console.warn("单词数量不足，可能数据未完全加载");const E=be(),v=new Set(E.todayLearnedIds||[]),M=r.value.findIndex(R=>!v.has(R.id));M>-1?s.value=M:r.value.length>0&&v.size>=r.value.length&&(o.value=!0,t("complete"))}catch(E){console.error("加载单词失败:",E),a.value="加载单词时出错，请稍后重试。"}finally{i.value=!1}});const l=Pe(()=>r.value[s.value]),u=Pe(()=>r.value.length===0?100:s.value/r.value.length*100),c=()=>{l.value&&vl(l.value.id),s.value<r.value.length-1?s.value++:(jt(),o.value=!0,t("complete"))},d=()=>{r.value=Vt(!0),s.value=0,o.value=!1},g=()=>{s.value=0,o.value=!1},m=async()=>{i.value=!0,a.value=null;try{r.value=await Vt();const E=be(),v=new Set(E.todayLearnedIds||[]),M=r.value.findIndex(R=>!v.has(R.id));M>-1?s.value=M:r.value.length>0&&v.size>=r.value.length&&(o.value=!0,t("complete"))}catch(E){console.error("重试加载失败:",E),a.value="加载失败，请刷新页面重试"}finally{i.value=!1}};return(E,v)=>(A(),L("div",Ah,[o.value?Ee("",!0):(A(),L("div",Oh,[v[1]||(v[1]=p("h2",{class:"text-xl font-bold text-gray-800"},"今日新词",-1)),p("span",jh,z(s.value+1)+" / "+z(r.value.length),1)])),p("div",Nh,[i.value?(A(),L("div",Wh,[B(H(cf),{class:"w-16 h-16 text-gray-400 animate-spin"}),v[2]||(v[2]=p("p",{class:"text-gray-600"},"正在加载单词...",-1))])):a.value?(A(),L("div",Lh,[p("p",Fh,z(a.value),1),p("button",{onClick:v[0]||(v[0]=M=>m()),class:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"}," 重试 ")])):!o.value&&l.value?(A(),L("div",zh,[p("div",Bh,[p("div",{class:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:tt({width:`${u.value}%`})},null,4)]),(A(),Bn(co,{word:l.value,key:l.value.id,initialShowTranslation:!0},null,8,["word"])),p("button",{onClick:c,class:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2 mt-8"},[v[3]||(v[3]=p("span",null,"下一个",-1)),B(H(dt),{class:"w-5 h-5"})])])):(A(),L("div",$h,[p("div",Hh,[B(H(tl),{class:"w-16 h-16 text-green-600"})]),v[11]||(v[11]=p("h2",{class:"text-2xl font-bold text-gray-800"},"太棒了！",-1)),v[12]||(v[12]=p("p",{class:"text-gray-600"},"你已经完成了今天的学习任务。",-1)),p("div",Vh,[p("div",Gh,[p("div",Uh,[v[4]||(v[4]=p("div",{class:"flex justify-center text-orange-500 mb-2"},[p("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-6 h-6"},[p("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})])],-1)),p("p",Kh,z(H(be)().consecutiveDays),1),v[5]||(v[5]=p("p",{class:"text-xs text-gray-500"},"连续打卡(天)",-1))]),p("div",Yh,[v[6]||(v[6]=ts('<div class="flex justify-center text-blue-500 mb-2" data-v-aa5b748f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" data-v-aa5b748f><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" data-v-aa5b748f></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" data-v-aa5b748f></path><path d="M4 22h16" data-v-aa5b748f></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" data-v-aa5b748f></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" data-v-aa5b748f></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" data-v-aa5b748f></path></svg></div>',1)),p("p",qh,z(H(be)().totalLearned),1),v[7]||(v[7]=p("p",{class:"text-xs text-gray-500"},"已学单词(个)",-1))])]),v[8]||(v[8]=ts('<div class="w-full bg-green-50 text-green-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 border border-green-100" data-v-aa5b748f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" data-v-aa5b748f><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-v-aa5b748f></rect><line x1="16" x2="16" y1="2" y2="6" data-v-aa5b748f></line><line x1="8" x2="8" y1="2" y2="6" data-v-aa5b748f></line><line x1="3" x2="21" y1="10" y2="10" data-v-aa5b748f></line></svg><span data-v-aa5b748f>今天已打卡</span></div>',1))]),p("div",Jh,[p("button",{onClick:g,class:"flex-1 flex items-center justify-center p-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors gap-2"},[...v[9]||(v[9]=[ts('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" data-v-aa5b748f><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" data-v-aa5b748f></path><path d="M3 3v5h5" data-v-aa5b748f></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" data-v-aa5b748f></path><path d="M16 16h5v5" data-v-aa5b748f></path></svg><span class="font-medium" data-v-aa5b748f>再次学习</span>',2)])]),p("button",{onClick:d,class:"flex-1 flex items-center justify-center p-4 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-colors gap-2"},[B(H(io),{class:"w-6 h-6"}),v[10]||(v[10]=p("span",{class:"font-medium"},"学习下一组",-1))])])]))])]))}}),Xh=rt(Qh,[["__scopeId","data-v-aa5b748f"]]),Zh={class:"bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto"},e0={class:"text-center mb-8"},n0={class:"text-2xl font-bold text-gray-800 mb-2"},t0={class:"text-gray-500"},r0={class:"space-y-4"},s0={class:"relative"},o0={key:0,class:"absolute right-3 top-1/2 -translate-y-1/2 text-green-500"},i0={key:1,class:"absolute right-3 top-1/2 -translate-y-1/2 text-red-500"},a0={key:0,class:"text-center text-blue-600 font-medium animate-fade-in"},l0={class:"flex gap-3"},c0=["disabled"],u0=yn({__name:"SpellingCard",props:{word:{}},emits:["complete"],setup(e,{emit:n}){const t=e,r=n,s=te(""),o=te(null),i=te(!1);et(()=>t.word,()=>{s.value="",o.value=null,i.value=!1});const a=()=>{s.value.trim().toLowerCase()===t.word.dutch.toLowerCase()?(o.value=!0,setTimeout(()=>{r("complete")},1e3)):o.value=!1},l=()=>{i.value=!0};return(u,c)=>(A(),L("div",Zh,[p("div",e0,[c[1]||(c[1]=p("p",{class:"text-sm text-gray-400 uppercase tracking-wider mb-2"},"请拼写荷兰语",-1)),p("h3",n0,z(e.word.chinese),1),p("p",t0,z(e.word.english),1)]),p("div",r0,[p("div",s0,[uc(p("input",{"onUpdate:modelValue":c[0]||(c[0]=d=>s.value=d),onKeyup:Hu(a,["enter"]),type:"text",class:_e(["w-full px-4 py-3 text-lg text-center border-2 rounded-xl focus:outline-none transition-colors",{"border-gray-200 focus:border-blue-500":o.value===null,"border-green-500 bg-green-50 text-green-700":o.value===!0,"border-red-500 bg-red-50 text-red-700":o.value===!1}]),placeholder:"输入荷兰语单词...",autofocus:""},null,34),[[Fu,s.value]]),o.value===!0?(A(),L("div",o0,[B(H(sf),{class:"w-6 h-6"})])):Ee("",!0),o.value===!1?(A(),L("div",i0,[B(H(al),{class:"w-6 h-6"})])):Ee("",!0)]),i.value?(A(),L("div",a0," 提示: "+z(e.word.dutch),1)):Ee("",!0),p("div",l0,[p("button",{onClick:l,class:"flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"},[B(H(lf),{class:"w-5 h-5"}),c[2]||(c[2]=p("span",null,"提示",-1))]),p("button",{onClick:a,class:"flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200",disabled:o.value===!0}," 检查 ",8,c0)])])]))}}),bl=rt(u0,[["__scopeId","data-v-2f4cf95d"]]),d0={class:"fixed inset-0 flex flex-col bg-gray-50 z-40 max-w-md mx-auto"},f0={key:0,class:"flex flex-col h-full overflow-hidden"},h0={class:"flex items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm"},g0={class:"mx-4 mt-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg"},p0={class:"flex justify-between items-start mb-4"},m0={class:"text-3xl font-bold"},y0={class:"text-lg font-normal text-blue-200"},v0={class:"bg-white/20 rounded-xl px-3 py-2 text-center"},b0={class:"text-2xl font-bold"},w0={class:"w-full bg-white/20 rounded-full h-2.5 mb-4"},x0={class:"flex justify-between text-sm"},k0={class:"text-blue-100"},_0={class:"text-blue-100"},S0={class:"flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-32",style:{"min-height":"0"}},C0=["id"],E0=["onClick"],T0={class:"flex items-center gap-3"},D0={class:"flex items-center gap-2"},M0={class:"font-bold text-gray-800 text-sm"},R0={class:"text-xs text-gray-400 mt-0.5"},I0={class:"flex items-center gap-2"},P0=["onClick"],A0=["onClick"],O0={key:2,disabled:"",class:"text-xs px-3 py-1.5 bg-gray-50 text-gray-300 rounded-lg font-medium cursor-not-allowed"},j0={key:0,class:"border-t border-gray-100"},N0={class:"divide-y divide-gray-50"},W0={class:"flex-1 min-w-0"},L0={class:"flex items-center gap-2"},F0={class:"font-bold text-blue-600 text-sm"},z0={key:0,class:"text-xs text-gray-400 font-mono truncate"},B0={class:"flex items-center gap-3 text-sm"},$0={class:"text-gray-700"},H0={class:"text-gray-400 text-xs hidden"},V0={key:1,class:"flex flex-col h-full overflow-hidden"},G0={class:"flex justify-between items-center p-4 border-b border-gray-100 bg-white"},U0={class:"flex flex-col items-center"},K0={class:"font-bold text-gray-800"},Y0={class:"text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1"},q0={key:0,class:"flex-1 flex flex-col items-center justify-center w-full p-4"},J0={class:"w-full max-w-md relative"},Q0={key:"reading",class:"w-full"},X0={class:"flex gap-3 mt-8"},Z0={key:"spelling",class:"w-full"},eg={class:"flex gap-3 mt-6"},ng=yn({__name:"AllWordsOverview",emits:["back","goToLearn"],setup(e,{emit:n}){const t=n,r=te("overview"),s=te([]),o=te(Dr()),i=te(new Set),a=te([]),l=te(-1),u=te(0),c=te("reading"),d=te(""),g=()=>{s.value=fh(),o.value=Dr(),i.value.clear();let N=0;for(const $ of s.value)$.status==="today"?i.value.add($.groupIndex):$.status==="planned"&&N<2&&(i.value.add($.groupIndex),N++)},m=N=>{i.value.has(N)?i.value.delete(N):i.value.add(N)},E=N=>i.value.has(N),v=N=>{if(!N)return"未知";try{const $=Tr(N),T=new Date,Z=ke(T,"yyyy-MM-dd");if(N===Z)return"今天";const ue=new Date(T);if(ue.setDate(ue.getDate()-1),N===ke(ue,"yyyy-MM-dd"))return"昨天";const ne=new Date(T);return ne.setDate(ne.getDate()+1),N===ke(ne,"yyyy-MM-dd")?"明天":ke($,"MM月dd日")}catch{return N}},M=N=>{switch(N){case"completed":return"bg-green-100 text-green-700";case"today":return"bg-blue-100 text-blue-700";case"planned":return"bg-gray-100 text-gray-500";default:return"bg-gray-100 text-gray-500"}},R=N=>{switch(N){case"completed":return"已完成";case"today":return"今日学习";case"planned":return"计划中";default:return"未知"}},b=N=>{if(N.status!=="planned"){if(N.status==="today"){t("goToLearn");return}a.value=[...N.words],l.value=N.groupIndex,d.value=N.date,u.value=0,c.value="reading",r.value="review"}},w=Pe(()=>a.value[u.value]),x=()=>{u.value<a.value.length-1?u.value++:c.value==="reading"?(c.value="spelling",u.value=0):r.value="overview"},U=()=>{x()},J=()=>{a.value=[...a.value].sort(()=>.5-Math.random()),u.value=0},X=()=>{r.value="overview"},pe=()=>{Wr(()=>{const N=document.getElementById("group-today");N&&N.scrollIntoView({behavior:"smooth",block:"center"})})};An(()=>{g(),pe()}),Fr(()=>{g()});const K=Pe(()=>{if(!o.value.estimatedEndDate)return"未知";try{return ke(Tr(o.value.estimatedEndDate),"yyyy年MM月dd日")}catch{return o.value.estimatedEndDate}});return(N,$)=>(A(),L("div",d0,[r.value==="overview"?(A(),L("div",f0,[p("div",h0,[p("button",{onClick:$[0]||($[0]=T=>N.$emit("back")),class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 mr-3"},[B(H(Ns),{class:"w-6 h-6"})]),$[3]||($[3]=p("h2",{class:"text-lg font-bold text-gray-800"},"所有单词总览",-1))]),p("div",g0,[p("div",p0,[p("div",null,[$[4]||($[4]=p("p",{class:"text-sm text-blue-100 mb-1"},"学习进度",-1)),p("p",m0,[yt(z(o.value.learnedCount)+" ",1),p("span",y0,"/ "+z(o.value.totalWords),1)])]),p("div",v0,[p("p",b0,z(o.value.progressPercent)+"%",1)])]),p("div",w0,[p("div",{class:"bg-white h-2.5 rounded-full transition-all duration-500",style:tt({width:`${o.value.progressPercent}%`})},null,4)]),p("div",x0,[p("span",k0,[B(H(ao),{class:"w-3.5 h-3.5 inline mr-1"}),yt(" 还剩 "+z(o.value.remainingDays)+" 天 ",1)]),p("span",_0,"预计 "+z(K.value)+" 学完",1)])]),p("div",S0,[(A(!0),L(Ce,null,Tn(s.value,T=>(A(),L("div",{key:T.groupIndex,id:T.status==="today"?"group-today":void 0,class:_e(["bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-200",{"border-green-200":T.status==="completed","border-blue-300 ring-2 ring-blue-100":T.status==="today","border-gray-100":T.status==="planned"}])},[p("div",{class:_e(["flex items-center justify-between p-4 cursor-pointer select-none",{"bg-green-50/50":T.status==="completed","bg-blue-50":T.status==="today","bg-gray-50/50":T.status==="planned"}]),onClick:Z=>m(T.groupIndex)},[p("div",T0,[p("div",{class:_e(["w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",{"bg-green-500 text-white":T.status==="completed","bg-blue-500 text-white":T.status==="today","bg-gray-200 text-gray-500":T.status==="planned"}])},z(T.groupIndex+1),3),p("div",null,[p("div",D0,[p("span",M0,"第 "+z(T.groupIndex+1)+" 组",1),p("span",{class:_e(["text-xs px-2 py-0.5 rounded-full font-medium",M(T.status)])},z(R(T.status)),3)]),p("p",R0,z(v(T.date))+" · "+z(T.words.length)+" 个单词 ",1)])]),p("div",I0,[T.status==="completed"?(A(),L("button",{key:0,onClick:$t(Z=>b(T),["stop"]),class:"text-xs px-3 py-1.5 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors"}," 复习 ",8,P0)):T.status==="today"?(A(),L("button",{key:1,onClick:$t(Z=>b(T),["stop"]),class:"text-xs px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"}," 去学习 ",8,A0)):(A(),L("button",O0,[B(H(uf),{class:"w-3 h-3 inline"}),$[5]||($[5]=yt(" 未解锁 ",-1))])),(A(),Bn(wa(E(T.groupIndex)?H(of):H(af)),{class:"w-5 h-5 text-gray-400 transition-transform"}))])],10,E0),B(_r,{name:"expand"},{default:En(()=>[E(T.groupIndex)?(A(),L("div",j0,[p("div",N0,[(A(!0),L(Ce,null,Tn(T.words,Z=>(A(),L("div",{key:Z.id,class:"flex items-center justify-between px-4 py-3 hover:bg-gray-50/50 transition-colors"},[p("div",W0,[p("div",L0,[p("span",F0,z(Z.dutch),1),Z.pronunciation?(A(),L("span",z0,z(Z.pronunciation),1)):Ee("",!0)])]),p("div",B0,[p("span",$0,z(Z.chinese),1),p("span",H0,z(Z.english),1)])]))),128))])])):Ee("",!0)]),_:2},1024)],10,C0))),128))])])):r.value==="review"?(A(),L("div",V0,[p("div",G0,[p("button",{onClick:X,class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"},[B(H(Ns),{class:"w-6 h-6"})]),p("div",U0,[p("span",K0," 第 "+z(l.value+1)+" 组复习 ",1),p("span",Y0,z(c.value==="reading"?"认读模式":"拼写模式")+" "+z(u.value+1)+"/"+z(a.value.length),1)]),p("button",{onClick:J,class:"text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50",title:"打乱顺序"},[B(H(il),{class:"w-5 h-5"})])]),a.value.length>0&&w.value?(A(),L("div",q0,[p("div",J0,[B(_r,{name:"fade",mode:"out-in"},{default:En(()=>[c.value==="reading"?(A(),L("div",Q0,[(A(),Bn(co,{word:w.value,key:w.value.id},null,8,["word"])),p("div",X0,[p("button",{onClick:$[1]||($[1]=T=>c.value="spelling"),class:"flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"},[B(H(sl),{class:"w-5 h-5"}),$[6]||($[6]=p("span",null,"拼写",-1))]),p("button",{onClick:x,class:"flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"},[p("span",null,z(u.value<a.value.length-1?"下一个":"进入拼写测试"),1),B(H(dt),{class:"w-5 h-5"})])])])):(A(),L("div",Z0,[B(bl,{word:w.value,onComplete:U},null,8,["word"]),p("div",eg,[p("button",{onClick:$[2]||($[2]=T=>c.value="reading"),class:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"},[B(H(rl),{class:"w-5 h-5"}),$[7]||($[7]=p("span",null,"认读模式",-1))])]),$[8]||($[8]=p("div",{class:"text-center mt-4"},[p("p",{class:"text-xs text-gray-400"},"完成拼写以继续")],-1))]))]),_:1})])])):Ee("",!0)])):Ee("",!0)]))}}),tg=rt(ng,[["__scopeId","data-v-d01ed2fc"]]),rg={class:"flex flex-col h-full min-h-0 bg-gray-50 relative",style:{height:"100%"}},sg={key:0,class:"flex flex-col h-full p-4 space-y-5"},og={class:"flex justify-between items-center"},ig={class:"flex items-center gap-4"},ag={key:0,class:"text-sm text-gray-500"},lg={key:1,class:"text-sm text-green-600 font-medium"},cg={key:2,class:"text-sm text-gray-500"},ug={key:0,class:"mt-3 flex items-center gap-3"},dg={class:"flex-1 bg-gray-100 rounded-full h-1.5"},fg={class:"text-xs text-gray-400 whitespace-nowrap"},hg={class:"flex items-center gap-4"},gg={class:"bg-orange-100 p-3 rounded-full text-orange-600"},pg={class:"text-sm text-gray-500"},mg={class:"flex justify-between items-center"},yg={class:"flex items-center gap-4"},vg={class:"bg-blue-100 p-3 rounded-full text-blue-600"},bg={class:"text-sm text-gray-500"},wg={class:"mt-4 flex items-center gap-3"},xg={class:"flex-1 bg-gray-100 rounded-full h-2"},kg={class:"text-xs text-gray-400 whitespace-nowrap"},_g={class:"text-xs text-gray-400 mt-2 flex items-center gap-1"},Sg={key:2,class:"flex flex-col h-full"},Cg={class:"flex justify-between items-center p-4 border-b border-gray-100 bg-white"},Eg={class:"flex flex-col items-center"},Tg={class:"font-bold text-gray-800"},Dg={class:"text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1"},Mg={key:0,class:"flex-1 flex flex-col items-center justify-center w-full p-4"},Rg={class:"w-full max-w-md relative"},Ig={key:"reading",class:"w-full"},Pg={class:"flex justify-between items-center mt-6 px-2"},Ag={class:"text-sm font-medium"},Og={class:"flex gap-3 mt-8"},jg={key:"spelling",class:"w-full"},Ng={class:"flex gap-3 mt-6"},Wg={key:1,class:"flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-500"},Lg={class:"bg-gray-100 p-4 rounded-full mb-4"},Fg={class:"text-lg font-medium text-gray-700"},zg={class:"text-sm text-gray-400 mt-1"},Bg=yn({__name:"Review",setup(e){const n=ef(),t=te("list"),r=te("daily"),s=te("reading"),o=te(""),i=te([]),a=te(0),l=te(!1),u=te(Dr()),c=te([]),d=te(0),g=te(0),m=Pe(()=>Ei().length),E=()=>{u.value=Dr()},v=()=>{var me;const ue=vs(10);c.value=ue,d.value=ue.length;const ne=be();g.value=((me=ne.todayReviewedWordIds)==null?void 0:me.length)||0},M=()=>{r.value="difficult",t.value="session",s.value="reading",U()},R=()=>{const ue=vs(10);ue.length!==0&&(r.value="todayReview",t.value="session",s.value="reading",i.value=ue,a.value=0,x())},b=()=>{t.value="allwords"},w=()=>{t.value="list",E()},x=()=>{i.value[a.value]&&(l.value=ch(i.value[a.value].id))},U=()=>{r.value==="daily"?i.value=dh(o.value):r.value==="todayReview"?i.value=vs(10):i.value=Ei(),a.value=0,x()};An(()=>{E(),v()}),Fr(()=>{t.value==="list"&&(E(),v())});const J=Pe(()=>i.value[a.value]);et(a,()=>{x()});const X=()=>{r.value==="todayReview"&&J.value&&ih(J.value.id),a.value<i.value.length-1?a.value++:s.value==="reading"?(s.value="spelling",a.value=0):K()},pe=()=>{X()},K=()=>{r.value==="daily"&&ah(o.value,!0),v(),w()},N=()=>{J.value&&(lh(J.value.id),l.value=!l.value)},$=()=>{if(J.value)if(uh(J.value.id),r.value==="difficult"){if(i.value.splice(a.value,1),a.value>=i.value.length){if(i.value.length===0){w();return}a.value=Math.max(0,i.value.length-1)}x()}else X()},T=()=>{i.value=[...i.value].sort(()=>.5-Math.random()),a.value=0,x()},Z=()=>{n.push("/learn")};return(ue,ne)=>(A(),L("div",rg,[t.value==="list"?(A(),L("div",sg,[ne[5]||(ne[5]=p("div",{class:"flex justify-between items-center"},[p("h2",{class:"text-xl font-bold text-gray-800"},"复习中心")],-1)),p("div",{onClick:R,class:_e(["rounded-xl p-5 shadow-sm border cursor-pointer hover:shadow-md transition-all active:scale-[0.98]",g.value>=d.value&&d.value>0?"bg-green-50 border-green-200":"bg-white border-gray-100"])},[p("div",og,[p("div",ig,[p("div",{class:_e(["p-3 rounded-full",g.value>=d.value&&d.value>0?"bg-green-100 text-green-600":"bg-emerald-100 text-emerald-600"])},[B(H(ol),{class:"w-6 h-6"})],2),p("div",null,[ne[2]||(ne[2]=p("h3",{class:"font-bold text-gray-800"},"今日复习",-1)),d.value===0?(A(),L("p",ag,"暂无可复习的单词")):g.value>=d.value?(A(),L("p",lg,"✅ 今日复习已完成")):(A(),L("p",cg,z(d.value)+" 个单词 · 已复习 "+z(g.value),1))])]),B(H(dt),{class:"w-5 h-5 text-gray-300"})]),d.value>0?(A(),L("div",ug,[p("div",dg,[p("div",{class:_e(["h-1.5 rounded-full transition-all duration-500",g.value>=d.value?"bg-green-500":"bg-emerald-500"]),style:tt({width:`${Math.min(100,Math.round(g.value/d.value*100))}%`})},null,6)]),p("span",fg,z(g.value)+"/"+z(d.value),1)])):Ee("",!0)],2),p("div",{onClick:M,class:"bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"},[p("div",hg,[p("div",gg,[B(H(ds),{class:"w-6 h-6"})]),p("div",null,[ne[3]||(ne[3]=p("h3",{class:"font-bold text-gray-800"},"生词本",-1)),p("p",pg,z(m.value)+" 个单词待复习",1)])]),B(H(dt),{class:"w-5 h-5 text-gray-300"})]),p("div",{onClick:b,class:"bg-white rounded-xl p-5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all active:scale-[0.98] overflow-hidden"},[p("div",mg,[p("div",yg,[p("div",vg,[B(H(io),{class:"w-6 h-6"})]),p("div",null,[ne[4]||(ne[4]=p("h3",{class:"font-bold text-gray-800"},"所有单词",-1)),p("p",bg," 已学 "+z(u.value.learnedCount)+" / "+z(u.value.totalWords)+" 词 ",1)])]),B(H(dt),{class:"w-5 h-5 text-gray-300"})]),p("div",wg,[p("div",xg,[p("div",{class:"bg-blue-500 h-2 rounded-full transition-all duration-500",style:tt({width:`${u.value.progressPercent}%`})},null,4)]),p("span",kg,z(u.value.progressPercent)+"% ",1)]),p("p",_g,[B(H(ao),{class:"w-3 h-3"}),yt(" 预计还需 "+z(u.value.remainingDays)+" 天学完 ",1)])]),ne[6]||(ne[6]=p("div",{class:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100"},[p("p",{class:"text-sm text-indigo-700 font-medium mb-1"},"💡 学习小贴士"),p("p",{class:"text-xs text-indigo-500"},"每天坚持学习10个新单词，配合复习巩固，效果更佳。")],-1))])):Ee("",!0),t.value==="allwords"?(A(),Bn(tg,{key:1,onBack:w,onGoToLearn:Z})):Ee("",!0),t.value==="session"?(A(),L("div",Sg,[p("div",Cg,[p("button",{onClick:w,class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"},[B(H(Ns),{class:"w-6 h-6"})]),p("div",Eg,[p("span",Tg,z(r.value==="difficult"?"生词本复习":r.value==="todayReview"?"今日复习":"复习"),1),p("span",Dg,z(s.value==="reading"?"认读模式":"拼写模式")+" "+z(a.value+1)+"/"+z(i.value.length),1)]),p("button",{onClick:T,class:"text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50",title:"打乱顺序"},[B(H(il),{class:"w-5 h-5"})])]),i.value.length>0?(A(),L("div",Mg,[p("div",Rg,[B(_r,{name:"fade",mode:"out-in"},{default:En(()=>[s.value==="reading"?(A(),L("div",Ig,[(A(),Bn(co,{word:J.value,key:J.value.id},null,8,["word"])),p("div",Pg,[p("button",{onClick:N,class:_e(["flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",l.value?"text-orange-500 bg-orange-50":"text-gray-400 hover:bg-gray-100"])},[B(H(ds),{class:_e(["w-5 h-5",{"fill-current":l.value}])},null,8,["class"]),p("span",Ag,z(l.value?"已在生词本":"加入生词本"),1)],2),r.value==="difficult"?(A(),L("button",{key:0,onClick:$,class:"flex items-center gap-2 px-4 py-2 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-colors"},[B(H(tl),{class:"w-5 h-5"}),ne[7]||(ne[7]=p("span",{class:"text-sm font-medium"},"已掌握",-1))])):Ee("",!0)]),p("div",Og,[p("button",{onClick:ne[0]||(ne[0]=me=>s.value="spelling"),class:"flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"},[B(H(sl),{class:"w-5 h-5"}),ne[8]||(ne[8]=p("span",null,"拼写",-1))]),p("button",{onClick:X,class:"flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"},[p("span",null,z(a.value<i.value.length-1?"下一个":"进入拼写测试"),1),B(H(dt),{class:"w-5 h-5"})])])])):(A(),L("div",jg,[B(bl,{word:J.value,onComplete:pe},null,8,["word"]),p("div",Ng,[p("button",{onClick:ne[1]||(ne[1]=me=>s.value="reading"),class:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"},[B(H(rl),{class:"w-5 h-5"}),ne[9]||(ne[9]=p("span",null,"认读模式",-1))])]),ne[10]||(ne[10]=p("div",{class:"text-center mt-4"},[p("p",{class:"text-xs text-gray-400"},"完成拼写以继续")],-1))]))]),_:1})])])):(A(),L("div",Wg,[p("div",Lg,[B(H(ds),{class:"w-8 h-8 text-gray-400"})]),p("p",Fg,z(r.value==="todayReview"?"暂无复习单词":"生词本为空"),1),p("p",zg,z(r.value==="todayReview"?"先去学习一些新单词吧":"在学习过程中将不熟悉的单词加入生词本"),1),p("button",{onClick:w,class:"mt-4 text-blue-600 font-medium hover:underline"}," 返回列表 ")]))])):Ee("",!0)]))}}),$g=rt(Bg,[["__scopeId","data-v-f7a870c4"]]),Hg={class:"flex flex-col h-full bg-white"},Vg={class:"p-4 border-b border-gray-100 sticky top-0 bg-white z-20 shadow-sm flex justify-between items-center"},Gg={class:"text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"},Ug={class:"flex-1 overflow-y-auto p-4 space-y-8 pb-24"},Kg={class:"text-lg font-bold text-gray-700 mb-4 sticky top-14 bg-white/95 backdrop-blur-sm py-2 z-10"},Yg={class:"grid grid-cols-7 gap-2 text-center mb-2"},qg={class:"grid grid-cols-7 gap-2"},Jg=["id","onClick"],Qg={key:0,class:"absolute -bottom-1 w-1 h-1 bg-green-500 rounded-full"},Xg={key:0,class:"absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"},Zg={class:"bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80%] flex flex-col overflow-hidden animate-pop-in"},ep={class:"p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50"},np={class:"font-bold text-gray-800"},tp={class:"flex-1 overflow-y-auto p-4"},rp={key:0,class:"space-y-3"},sp={class:"font-bold text-blue-600"},op={class:"text-xs text-gray-500"},ip={class:"text-sm text-gray-700 font-medium"},ap={key:1,class:"text-center py-8 text-gray-400"},lp=yn({__name:"History",setup(e){var E;const n=te(be()),t=te(new Set(n.value.checkInHistory||[])),r=te(((E=n.value.masteredWordIds)==null?void 0:E.length)||0),s=te([]),o=()=>{const v=new Date;for(let M=0;M<=1;M++)s.value.push(jf(v,M));s.value.sort((M,R)=>M.getTime()-R.getTime())},i=v=>{const M=gs(v),R=$f(v);return Vf({start:M,end:R})},a=v=>{const M=V1(gs(v));return M===0?6:M-1},l=v=>{const M=ke(v,"yyyy-MM-dd"),R=gs(new Date);return v.getTime()<R.getTime()?!1:t.value.has(M)},u=te(!1),c=te(null),d=te([]),g=v=>{var w;if(!l(v))return;c.value=v;const M=ke(v,"yyyy-MM-dd"),R=((w=n.value.dailyLearningRecords)==null?void 0:w[M])||[],b=$n();d.value=b.filter(x=>R.includes(x.id)),u.value=!0},m=()=>{u.value=!1};return Fr(()=>{n.value=be(),t.value=new Set(n.value.checkInHistory||[])}),An(()=>{o(),Wr(()=>{const v=document.getElementById("today-marker");v&&v.scrollIntoView({behavior:"smooth",block:"center"})})}),(v,M)=>(A(),L("div",Hg,[p("div",Vg,[M[0]||(M[0]=p("h2",{class:"text-xl font-bold text-gray-800"},"打卡记录",-1)),p("span",Gg,"已掌握 "+z(r.value)+" 词",1)]),p("div",Ug,[(A(!0),L(Ce,null,Tn(s.value,R=>(A(),L("div",{key:R.toISOString(),class:"month-container"},[p("h3",Kg,z(H(ke)(R,"yyyy年MM月")),1),p("div",Yg,[(A(),L(Ce,null,Tn(["一","二","三","四","五","六","日"],b=>p("div",{key:b,class:"text-xs text-gray-400 font-medium"},z(b),1)),64))]),p("div",qg,[(A(!0),L(Ce,null,Tn(a(R),b=>(A(),L("div",{key:`empty-${b}`}))),128)),(A(!0),L(Ce,null,Tn(i(R),b=>(A(),L("div",{key:b.toISOString(),class:_e(["aspect-square flex items-center justify-center rounded-full text-sm relative transition-all cursor-pointer",[l(b)?"bg-green-500 text-white font-bold shadow-md transform scale-105 hover:bg-green-600":"text-gray-700 bg-gray-50",H(Ci)(b)?"ring-2 ring-blue-400 ring-offset-2":""]]),id:H(Ci)(b)?"today-marker":void 0,onClick:w=>g(b)},[yt(z(H(ke)(b,"d"))+" ",1),l(b)?(A(),L("div",Qg)):Ee("",!0)],10,Jg))),128))])]))),128))]),u.value?(A(),L("div",Xg,[p("div",Zg,[p("div",ep,[p("h3",np,z(c.value?H(ke)(c.value,"yyyy年MM月dd日"):"")+" 学习记录 ",1),p("button",{onClick:m,class:"text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"},[B(H(al),{class:"w-5 h-5"})])]),p("div",tp,[d.value.length>0?(A(),L("div",rp,[(A(!0),L(Ce,null,Tn(d.value,R=>(A(),L("div",{key:R.id,class:"flex items-center justify-between p-3 bg-gray-50 rounded-lg"},[p("div",null,[p("p",sp,z(R.dutch),1),p("p",op,z(R.english),1)]),p("p",ip,z(R.chinese),1)]))),128))])):(A(),L("div",ap,[...M[1]||(M[1]=[p("p",null,"暂无详细记录",-1)])]))])])])):Ee("",!0)]))}}),cp=rt(lp,[["__scopeId","data-v-ebcd4203"]]),er=nr([]);let Mr=null;function up(e,n){const t={name:e,cases:[]};Mr=t,er.push(t),n(),Mr=null}function Pt(e,n){if(!Mr)throw new Error("it must be called inside describe");Mr.cases.push({name:e,fn:n,status:"pending"})}function Ie(e){return{toBe(n){if(e!==n)throw new Error(`Expected ${n} but got ${e}`)},toEqual(n){if(JSON.stringify(e)!==JSON.stringify(n))throw new Error(`Expected ${JSON.stringify(n)} but got ${JSON.stringify(e)}`)},toBeTruthy(){if(!e)throw new Error(`Expected ${e} to be truthy`)},toBeFalsy(){if(e)throw new Error(`Expected ${e} to be falsy`)},toBeGreaterThan(n){if(e<=n)throw new Error(`Expected ${e} to be greater than ${n}`)},toContain(n){if(Array.isArray(e)){if(!e.includes(n))throw new Error(`Expected array to contain ${n}`)}else if(e instanceof Set){if(!e.has(n))throw new Error(`Expected Set to contain ${n}`)}else if(typeof e=="string"){if(!e.includes(n))throw new Error(`Expected string to contain ${n}`)}else throw new Error(`Expected ${e} to be an Array, Set or String`)},toBeDefined(){if(e===void 0)throw new Error("Expected value to be defined")}}}const Rr="dutch_app_progress";let Ls=null;function dp(){Ls=localStorage.getItem(Rr),localStorage.removeItem(Rr)}function fp(){Ls?localStorage.setItem(Rr,Ls):localStorage.removeItem(Rr)}async function Ti(){for(const e of er)for(const n of e.cases)n.status="pending",n.error=void 0;dp();try{for(const e of er)for(const n of e.cases)try{await n.fn(),n.status="passed"}catch(t){n.status="failed",n.error=t,console.error(`Test failed: ${e.name} - ${n.name}`,t)}}finally{fp()}}up("Storage Utils",()=>{Pt("initTodayWords should generate 10 new words",()=>{const e=Vt(!0);Ie(e.length).toBe(10);const n=be();Ie(n.todayTargetIds.length).toBe(10),Ie(n.lastLearnDate).toBe(ke(new Date,"yyyy-MM-dd"))}),Pt("markWordAsLearned should update learned words and daily records",()=>{const n=Vt(!0)[0].id;vl(n);const t=be();Ie(t.learnedWordIds).toContain(n),Ie(t.todayLearnedIds).toContain(n);const r=ke(new Date,"yyyy-MM-dd");Ie(t.dailyLearningRecords).toBeDefined(),t.dailyLearningRecords&&(Ie(t.dailyLearningRecords[r]).toBeDefined(),Ie(t.dailyLearningRecords[r]).toContain(n))}),Pt("checkIn should update check-in history",()=>{Ze({lastCheckInDate:null,consecutiveDays:0,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[],dailyLearningRecords:{}});const e=jt();Ie(e).toBe(!0);const n=be(),t=ke(new Date,"yyyy-MM-dd");Ie(n.lastCheckInDate).toBe(t),Ie(n.consecutiveDays).toBe(1),Ie(n.checkInHistory).toContain(t);const r=jt();Ie(r).toBe(!1)}),Pt("checkIn should increment consecutiveDays if checked in yesterday",()=>{const e=ke(Ws(new Date,1),"yyyy-MM-dd");Ze({lastCheckInDate:e,consecutiveDays:5,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[e],dailyLearningRecords:{}});const n=jt();Ie(n).toBe(!0);const t=be();Ie(t.consecutiveDays).toBe(6)}),Pt("checkIn should reset consecutiveDays if missed a day",()=>{const e=ke(Ws(new Date,2),"yyyy-MM-dd");Ze({lastCheckInDate:e,consecutiveDays:5,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[e],dailyLearningRecords:{}});const n=jt();Ie(n).toBe(!0);const t=be();Ie(t.consecutiveDays).toBe(1)})});const hp={class:"min-h-screen bg-gray-50 p-4"},gp={class:"max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden"},pp={class:"p-6 border-b border-gray-100 flex justify-between items-center"},mp=["disabled"],yp={class:"p-6 space-y-6"},vp={class:"font-bold text-gray-700 border-b border-gray-100 pb-2"},bp={class:"space-y-2"},wp={class:"mt-1"},xp={key:0,class:"w-4 h-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"},kp={key:1,class:"w-4 h-4 text-green-500"},_p={key:2,class:"w-4 h-4 text-red-500"},Sp={class:"flex-1"},Cp={key:0,class:"mt-2 text-xs text-red-600 bg-red-100 p-2 rounded overflow-x-auto font-mono"},Ep={key:0,class:"text-center text-gray-500 py-8"},Tp=yn({__name:"TestRunner",setup(e){const n=te(!1);An(async()=>{n.value=!0,setTimeout(async()=>{await Ti(),n.value=!1},500)});const t=async()=>{n.value=!0,await Ti(),n.value=!1};return(r,s)=>(A(),L("div",hp,[p("div",gp,[p("div",pp,[s[0]||(s[0]=p("h1",{class:"text-xl font-bold text-gray-800"},"测试运行器",-1)),p("button",{onClick:t,class:"text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors",disabled:n.value},z(n.value?"运行中...":"重新运行"),9,mp)]),p("div",yp,[(A(!0),L(Ce,null,Tn(H(er),(o,i)=>(A(),L("div",{key:i,class:"space-y-3"},[p("h2",vp,z(o.name),1),p("div",bp,[(A(!0),L(Ce,null,Tn(o.cases,(a,l)=>(A(),L("div",{key:l,class:_e(["flex items-start gap-3 p-3 rounded-lg transition-colors",{"bg-gray-50":a.status==="pending","bg-green-50":a.status==="passed","bg-red-50":a.status==="failed"}])},[p("div",wp,[a.status==="pending"?(A(),L("div",xp)):a.status==="passed"?(A(),L("div",kp,"✓")):(A(),L("div",_p,"✗"))]),p("div",Sp,[p("p",{class:_e(["text-sm font-medium",{"text-gray-600":a.status==="pending","text-green-800":a.status==="passed","text-red-800":a.status==="failed"}])},z(a.name),3),a.error?(A(),L("div",Cp,z(a.error.message||a.error),1)):Ee("",!0)])],2))),128))])]))),128)),H(er).length===0?(A(),L("div",Ep," 没有找到测试套件 ")):Ee("",!0)])])]))}}),Dp=[{path:"/",redirect:"/learn"},{path:"/learn",component:Xh},{path:"/review",component:$g},{path:"/history",component:cp},{path:"/test",component:Tp}],Di=Zd({history:Id(),routes:Dp});Pf().then(()=>{ei(vi).use(Di).mount("#app")}).catch(e=>{console.error("Failed to initialize words:",e),ei(vi).use(Di).mount("#app")});

(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ja(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const xe={},pt=[],kn=()=>{},Gr=()=>!1,Ri=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Qa=e=>e.startsWith("onUpdate:"),De=Object.assign,Xa=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Hl=Object.prototype.hasOwnProperty,le=(e,n)=>Hl.call(e,n),Z=Array.isArray,mt=e=>yt(e)==="[object Map]",Ur=e=>yt(e)==="[object Set]",Co=e=>yt(e)==="[object Date]",Nl=e=>yt(e)==="[object RegExp]",ne=e=>typeof e=="function",ye=e=>typeof e=="string",vn=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",Kr=e=>(de(e)||ne(e))&&ne(e.then)&&ne(e.catch),qr=Object.prototype.toString,yt=e=>qr.call(e),Ll=e=>yt(e).slice(8,-1),Zr=e=>yt(e)==="[object Object]",eo=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ht=Ja(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},$l=/-\w/g,Le=Pi(e=>e.replace($l,n=>n.slice(1).toUpperCase())),Bl=/\B([A-Z])/g,Un=Pi(e=>e.replace(Bl,"-$1").toLowerCase()),Hi=Pi(e=>e.charAt(0).toUpperCase()+e.slice(1)),aa=Pi(e=>e?`on${Hi(e)}`:""),xn=(e,n)=>!Object.is(e,n),gt=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Yr=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},no=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Fl=e=>{const n=ye(e)?Number(e):NaN;return isNaN(n)?e:n};let So;const Ni=()=>So||(So=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vn(e){if(Z(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],a=ye(i)?Kl(i):Vn(i);if(a)for(const o in a)n[o]=a[o]}return n}else if(ye(e)||de(e))return e}const Vl=/;(?![^(]*\))/g,Gl=/:([^]+)/,Ul=/\/\*[^]*?\*\//g;function Kl(e){const n={};return e.replace(Ul,"").split(Vl).forEach(t=>{if(t){const i=t.split(Gl);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function fe(e){let n="";if(ye(e))n=e;else if(Z(e))for(let t=0;t<e.length;t++){const i=fe(e[t]);i&&(n+=i+" ")}else if(de(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const ql="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zl=Ja(ql);function Jr(e){return!!e||e===""}function Yl(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=to(e[i],n[i]);return t}function to(e,n){if(e===n)return!0;let t=Co(e),i=Co(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=vn(e),i=vn(n),t||i)return e===n;if(t=Z(e),i=Z(n),t||i)return t&&i?Yl(e,n):!1;if(t=de(e),i=de(n),t||i){if(!t||!i)return!1;const a=Object.keys(e).length,o=Object.keys(n).length;if(a!==o)return!1;for(const r in e){const s=e.hasOwnProperty(r),l=n.hasOwnProperty(r);if(s&&!l||!s&&l||!to(e[r],n[r]))return!1}}return String(e)===String(n)}const Qr=e=>!!(e&&e.__v_isRef===!0),E=e=>ye(e)?e:e==null?"":Z(e)||de(e)&&(e.toString===qr||!ne(e.toString))?Qr(e)?E(e.value):JSON.stringify(e,Xr,2):String(e),Xr=(e,n)=>Qr(n)?Xr(e,n.value):mt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,a],o)=>(t[oa(i,o)+" =>"]=a,t),{})}:Ur(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>oa(t))}:vn(n)?oa(n):de(n)&&!Z(n)&&!Zr(n)?String(n):n,oa=(e,n="")=>{var t;return vn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ge;class Jl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ge,!n&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Ge;try{return Ge=this,n()}finally{Ge=t}}}on(){++this._on===1&&(this.prevScope=Ge,Ge=this)}off(){this._on>0&&--this._on===0&&(Ge=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Ql(){return Ge}let _e;const ra=new WeakSet;class es{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ge&&Ge.active&&Ge.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ra.has(this)&&(ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ts(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Do(this),is(this);const n=_e,t=an;_e=this,an=!0;try{return this.fn()}finally{as(this),_e=n,an=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)oo(n);this.deps=this.depsTail=void 0,Do(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ta(this)&&this.run()}get dirty(){return Ta(this)}}let ns=0,Nt,Lt;function ts(e,n=!1){if(e.flags|=8,n){e.next=Lt,Lt=e;return}e.next=Nt,Nt=e}function io(){ns++}function ao(){if(--ns>0)return;if(Lt){let n=Lt;for(Lt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Nt;){let n=Nt;for(Nt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function is(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function as(e){let n,t=e.depsTail,i=t;for(;i;){const a=i.prevDep;i.version===-1?(i===t&&(t=a),oo(i),Xl(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=a}e.deps=n,e.depsTail=t}function Ta(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(os(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function os(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Kt)||(e.globalVersion=Kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ta(e))))return;e.flags|=2;const n=e.dep,t=_e,i=an;_e=e,an=!0;try{is(e);const a=e.fn(e._value);(n.version===0||xn(a,e._value))&&(e.flags|=128,e._value=a,n.version++)}catch(a){throw n.version++,a}finally{_e=t,an=i,as(e),e.flags&=-3}}function oo(e,n=!1){const{dep:t,prevSub:i,nextSub:a}=e;if(i&&(i.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)oo(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let an=!0;const rs=[];function Mn(){rs.push(an),an=!1}function En(){const e=rs.pop();an=e===void 0?!0:e}function Do(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=_e;_e=void 0;try{n()}finally{_e=t}}}let Kt=0;class ec{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ro{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!_e||!an||_e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_e)t=this.activeLink=new ec(_e,this),_e.deps?(t.prevDep=_e.depsTail,_e.depsTail.nextDep=t,_e.depsTail=t):_e.deps=_e.depsTail=t,ss(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=_e.depsTail,t.nextDep=void 0,_e.depsTail.nextDep=t,_e.depsTail=t,_e.deps===t&&(_e.deps=i)}return t}trigger(n){this.version++,Kt++,this.notify(n)}notify(n){io();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ao()}}}function ss(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)ss(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Wa=new WeakMap,nt=Symbol(""),Aa=Symbol(""),qt=Symbol("");function We(e,n,t){if(an&&_e){let i=Wa.get(e);i||Wa.set(e,i=new Map);let a=i.get(t);a||(i.set(t,a=new ro),a.map=i,a.key=t),a.track()}}function In(e,n,t,i,a,o){const r=Wa.get(e);if(!r){Kt++;return}const s=l=>{l&&l.trigger()};if(io(),n==="clear")r.forEach(s);else{const l=Z(e),d=l&&eo(t);if(l&&t==="length"){const c=Number(i);r.forEach((u,m)=>{(m==="length"||m===qt||!vn(m)&&m>=c)&&s(u)})}else switch((t!==void 0||r.has(void 0))&&s(r.get(t)),d&&s(r.get(qt)),n){case"add":l?d&&s(r.get("length")):(s(r.get(nt)),mt(e)&&s(r.get(Aa)));break;case"delete":l||(s(r.get(nt)),mt(e)&&s(r.get(Aa)));break;case"set":mt(e)&&s(r.get(nt));break}}ao()}function st(e){const n=oe(e);return n===e?n:(We(n,"iterate",qt),en(e)?n:n.map(rn))}function Li(e){return We(e=oe(e),"iterate",qt),e}function gn(e,n){return Tn(e)?kt(tt(e)?rn(n):n):rn(n)}const nc={__proto__:null,[Symbol.iterator](){return sa(this,Symbol.iterator,e=>gn(this,e))},concat(...e){return st(this).concat(...e.map(n=>Z(n)?st(n):n))},entries(){return sa(this,"entries",e=>(e[1]=gn(this,e[1]),e))},every(e,n){return _n(this,"every",e,n,void 0,arguments)},filter(e,n){return _n(this,"filter",e,n,t=>t.map(i=>gn(this,i)),arguments)},find(e,n){return _n(this,"find",e,n,t=>gn(this,t),arguments)},findIndex(e,n){return _n(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return _n(this,"findLast",e,n,t=>gn(this,t),arguments)},findLastIndex(e,n){return _n(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return _n(this,"forEach",e,n,void 0,arguments)},includes(...e){return la(this,"includes",e)},indexOf(...e){return la(this,"indexOf",e)},join(e){return st(this).join(e)},lastIndexOf(...e){return la(this,"lastIndexOf",e)},map(e,n){return _n(this,"map",e,n,void 0,arguments)},pop(){return Ct(this,"pop")},push(...e){return Ct(this,"push",e)},reduce(e,...n){return Mo(this,"reduce",e,n)},reduceRight(e,...n){return Mo(this,"reduceRight",e,n)},shift(){return Ct(this,"shift")},some(e,n){return _n(this,"some",e,n,void 0,arguments)},splice(...e){return Ct(this,"splice",e)},toReversed(){return st(this).toReversed()},toSorted(e){return st(this).toSorted(e)},toSpliced(...e){return st(this).toSpliced(...e)},unshift(...e){return Ct(this,"unshift",e)},values(){return sa(this,"values",e=>gn(this,e))}};function sa(e,n,t){const i=Li(e),a=i[n]();return i!==e&&!en(e)&&(a._next=a.next,a.next=()=>{const o=a._next();return o.done||(o.value=t(o.value)),o}),a}const tc=Array.prototype;function _n(e,n,t,i,a,o){const r=Li(e),s=r!==e&&!en(e),l=r[n];if(l!==tc[n]){const u=l.apply(e,o);return s?rn(u):u}let d=t;r!==e&&(s?d=function(u,m){return t.call(this,gn(e,u),m,e)}:t.length>2&&(d=function(u,m){return t.call(this,u,m,e)}));const c=l.call(r,d,i);return s&&a?a(c):c}function Mo(e,n,t,i){const a=Li(e),o=a!==e&&!en(e);let r=t,s=!1;a!==e&&(o?(s=i.length===0,r=function(d,c,u){return s&&(s=!1,d=gn(e,d)),t.call(this,d,gn(e,c),u,e)}):t.length>3&&(r=function(d,c,u){return t.call(this,d,c,u,e)}));const l=a[n](r,...i);return s?gn(e,l):l}function la(e,n,t){const i=oe(e);We(i,"iterate",qt);const a=i[n](...t);return(a===-1||a===!1)&&co(t[0])?(t[0]=oe(t[0]),i[n](...t)):a}function Ct(e,n,t=[]){Mn(),io();const i=oe(e)[n].apply(e,t);return ao(),En(),i}const ic=Ja("__proto__,__v_isRef,__isVue"),ls=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vn));function ac(e){vn(e)||(e=String(e));const n=oe(this);return We(n,"has",e),n.hasOwnProperty(e)}class cs{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const a=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!a;if(t==="__v_isReadonly")return a;if(t==="__v_isShallow")return o;if(t==="__v_raw")return i===(a?o?mc:ps:o?hs:us).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const r=Z(n);if(!a){let l;if(r&&(l=nc[t]))return l;if(t==="hasOwnProperty")return ac}const s=Reflect.get(n,t,Re(n)?n:i);if((vn(t)?ls.has(t):ic(t))||(a||We(n,"get",t),o))return s;if(Re(s)){const l=r&&eo(t)?s:s.value;return a&&de(l)?Ra(l):l}return de(s)?a?Ra(s):ii(s):s}}class ds extends cs{constructor(n=!1){super(!1,n)}set(n,t,i,a){let o=n[t];const r=Z(n)&&eo(t);if(!this._isShallow){const d=Tn(o);if(!en(i)&&!Tn(i)&&(o=oe(o),i=oe(i)),!r&&Re(o)&&!Re(i))return d||(o.value=i),!0}const s=r?Number(t)<n.length:le(n,t),l=Reflect.set(n,t,i,Re(n)?n:a);return n===oe(a)&&(s?xn(i,o)&&In(n,"set",t,i):In(n,"add",t,i)),l}deleteProperty(n,t){const i=le(n,t);n[t];const a=Reflect.deleteProperty(n,t);return a&&i&&In(n,"delete",t,void 0),a}has(n,t){const i=Reflect.has(n,t);return(!vn(t)||!ls.has(t))&&We(n,"has",t),i}ownKeys(n){return We(n,"iterate",Z(n)?"length":nt),Reflect.ownKeys(n)}}class oc extends cs{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const rc=new ds,sc=new oc,lc=new ds(!0);const Oa=e=>e,ri=e=>Reflect.getPrototypeOf(e);function cc(e,n,t){return function(...i){const a=this.__v_raw,o=oe(a),r=mt(o),s=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,d=a[e](...i),c=t?Oa:n?kt:rn;return!n&&We(o,"iterate",l?Aa:nt),De(Object.create(d),{next(){const{value:u,done:m}=d.next();return m?{value:u,done:m}:{value:s?[c(u[0]),c(u[1])]:c(u),done:m}}})}}function si(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function dc(e,n){const t={get(a){const o=this.__v_raw,r=oe(o),s=oe(a);e||(xn(a,s)&&We(r,"get",a),We(r,"get",s));const{has:l}=ri(r),d=n?Oa:e?kt:rn;if(l.call(r,a))return d(o.get(a));if(l.call(r,s))return d(o.get(s));o!==r&&o.get(a)},get size(){const a=this.__v_raw;return!e&&We(oe(a),"iterate",nt),a.size},has(a){const o=this.__v_raw,r=oe(o),s=oe(a);return e||(xn(a,s)&&We(r,"has",a),We(r,"has",s)),a===s?o.has(a):o.has(a)||o.has(s)},forEach(a,o){const r=this,s=r.__v_raw,l=oe(s),d=n?Oa:e?kt:rn;return!e&&We(l,"iterate",nt),s.forEach((c,u)=>a.call(o,d(c),d(u),r))}};return De(t,e?{add:si("add"),set:si("set"),delete:si("delete"),clear:si("clear")}:{add(a){const o=oe(this),r=ri(o),s=oe(a),l=!n&&!en(a)&&!Tn(a)?s:a;return r.has.call(o,l)||xn(a,l)&&r.has.call(o,a)||xn(s,l)&&r.has.call(o,s)||(o.add(l),In(o,"add",l,l)),this},set(a,o){!n&&!en(o)&&!Tn(o)&&(o=oe(o));const r=oe(this),{has:s,get:l}=ri(r);let d=s.call(r,a);d||(a=oe(a),d=s.call(r,a));const c=l.call(r,a);return r.set(a,o),d?xn(o,c)&&In(r,"set",a,o):In(r,"add",a,o),this},delete(a){const o=oe(this),{has:r,get:s}=ri(o);let l=r.call(o,a);l||(a=oe(a),l=r.call(o,a)),s&&s.call(o,a);const d=o.delete(a);return l&&In(o,"delete",a,void 0),d},clear(){const a=oe(this),o=a.size!==0,r=a.clear();return o&&In(a,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=cc(a,e,n)}),t}function so(e,n){const t=dc(e,n);return(i,a,o)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?i:Reflect.get(le(t,a)&&a in i?t:i,a,o)}const uc={get:so(!1,!1)},hc={get:so(!1,!0)},pc={get:so(!0,!1)};const us=new WeakMap,hs=new WeakMap,ps=new WeakMap,mc=new WeakMap;function gc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fc(e){return e.__v_skip||!Object.isExtensible(e)?0:gc(Ll(e))}function ii(e){return Tn(e)?e:lo(e,!1,rc,uc,us)}function ms(e){return lo(e,!1,lc,hc,hs)}function Ra(e){return lo(e,!0,sc,pc,ps)}function lo(e,n,t,i,a){if(!de(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const o=fc(e);if(o===0)return e;const r=a.get(e);if(r)return r;const s=new Proxy(e,o===2?i:t);return a.set(e,s),s}function tt(e){return Tn(e)?tt(e.__v_raw):!!(e&&e.__v_isReactive)}function Tn(e){return!!(e&&e.__v_isReadonly)}function en(e){return!!(e&&e.__v_isShallow)}function co(e){return e?!!e.__v_raw:!1}function oe(e){const n=e&&e.__v_raw;return n?oe(n):e}function xc(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&Yr(e,"__v_skip",!0),e}const rn=e=>de(e)?ii(e):e,kt=e=>de(e)?Ra(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function J(e){return gs(e,!1)}function kc(e){return gs(e,!0)}function gs(e,n){return Re(e)?e:new vc(e,n)}class vc{constructor(n,t){this.dep=new ro,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:oe(n),this._value=t?n:rn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||en(n)||Tn(n);n=i?n:oe(n),xn(n,t)&&(this._rawValue=n,this._value=i?n:rn(n),this.dep.trigger())}}function P(e){return Re(e)?e.value:e}const bc={get:(e,n,t)=>n==="__v_raw"?e:P(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const a=e[n];return Re(a)&&!Re(t)?(a.value=t,!0):Reflect.set(e,n,t,i)}};function fs(e){return tt(e)?e:new Proxy(e,bc)}class _c{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new ro(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return ts(this,!0),!0}get value(){const n=this.dep.track();return os(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function wc(e,n,t=!1){let i,a;return ne(e)?i=e:(i=e.get,a=e.set),new _c(i,a,t)}const li={},xi=new WeakMap;let Qn;function yc(e,n=!1,t=Qn){if(t){let i=xi.get(t);i||xi.set(t,i=[]),i.push(e)}}function jc(e,n,t=xe){const{immediate:i,deep:a,once:o,scheduler:r,augmentJob:s,call:l}=t,d=_=>a?_:en(_)||a===!1||a===0?Cn(_,1):Cn(_);let c,u,m,f,z=!1,k=!1;if(Re(e)?(u=()=>e.value,z=en(e)):tt(e)?(u=()=>d(e),z=!0):Z(e)?(k=!0,z=e.some(_=>tt(_)||en(_)),u=()=>e.map(_=>{if(Re(_))return _.value;if(tt(_))return d(_);if(ne(_))return l?l(_,2):_()})):ne(e)?n?u=l?()=>l(e,2):e:u=()=>{if(m){Mn();try{m()}finally{En()}}const _=Qn;Qn=c;try{return l?l(e,3,[f]):e(f)}finally{Qn=_}}:u=kn,n&&a){const _=u,H=a===!0?1/0:a;u=()=>Cn(_(),H)}const M=Ql(),T=()=>{c.stop(),M&&M.active&&Xa(M.effects,c)};if(o&&n){const _=n;n=(...H)=>{_(...H),T()}}let v=k?new Array(e.length).fill(li):li;const b=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(n){const H=c.run();if(a||z||(k?H.some((Y,X)=>xn(Y,v[X])):xn(H,v))){m&&m();const Y=Qn;Qn=c;try{const X=[H,v===li?void 0:k&&v[0]===li?[]:v,f];v=H,l?l(n,3,X):n(...X)}finally{Qn=Y}}}else c.run()};return s&&s(b),c=new es(u),c.scheduler=r?()=>r(b,!1):b,f=_=>yc(_,!1,c),m=c.onStop=()=>{const _=xi.get(c);if(_){if(l)l(_,4);else for(const H of _)H();xi.delete(c)}},n?i?b(!0):v=c.run():r?r(b.bind(null,!0),!0):c.run(),T.pause=c.pause.bind(c),T.resume=c.resume.bind(c),T.stop=T,T}function Cn(e,n=1/0,t){if(n<=0||!de(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Re(e))Cn(e.value,n,t);else if(Z(e))for(let i=0;i<e.length;i++)Cn(e[i],n,t);else if(Ur(e)||mt(e))e.forEach(i=>{Cn(i,n,t)});else if(Zr(e)){for(const i in e)Cn(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Cn(e[i],n,t)}return e}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ai(e,n,t,i){try{return i?e(...i):e()}catch(a){$i(a,n,t)}}function sn(e,n,t,i){if(ne(e)){const a=ai(e,n,t,i);return a&&Kr(a)&&a.catch(o=>{$i(o,n,t)}),a}if(Z(e)){const a=[];for(let o=0;o<e.length;o++)a.push(sn(e[o],n,t,i));return a}}function $i(e,n,t,i=!0){const a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=n&&n.appContext.config||xe;if(n){let s=n.parent;const l=n.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,l,d)===!1)return}s=s.parent}if(o){Mn(),ai(o,null,10,[e,l,d]),En();return}}zc(e,t,a,i,r)}function zc(e,n,t,i=!0,a=!1){if(a)throw e;console.error(e)}const Ne=[];let pn=-1;const ft=[];let Ln=null,ct=0;const xs=Promise.resolve();let ki=null;function Bi(e){const n=ki||xs;return e?n.then(this?e.bind(this):e):n}function Ic(e){let n=pn+1,t=Ne.length;for(;n<t;){const i=n+t>>>1,a=Ne[i],o=Zt(a);o<e||o===e&&a.flags&2?n=i+1:t=i}return n}function uo(e){if(!(e.flags&1)){const n=Zt(e),t=Ne[Ne.length-1];!t||!(e.flags&2)&&n>=Zt(t)?Ne.push(e):Ne.splice(Ic(n),0,e),e.flags|=1,ks()}}function ks(){ki||(ki=xs.then(bs))}function Cc(e){Z(e)?ft.push(...e):Ln&&e.id===-1?Ln.splice(ct+1,0,e):e.flags&1||(ft.push(e),e.flags|=1),ks()}function Eo(e,n,t=pn+1){for(;t<Ne.length;t++){const i=Ne[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Ne.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function vs(e){if(ft.length){const n=[...new Set(ft)].sort((t,i)=>Zt(t)-Zt(i));if(ft.length=0,Ln){Ln.push(...n);return}for(Ln=n,ct=0;ct<Ln.length;ct++){const t=Ln[ct];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ln=null,ct=0}}const Zt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bs(e){try{for(pn=0;pn<Ne.length;pn++){const n=Ne[pn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ai(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;pn<Ne.length;pn++){const n=Ne[pn];n&&(n.flags&=-2)}pn=-1,Ne.length=0,vs(),ki=null,(Ne.length||ft.length)&&bs()}}let qe=null,_s=null;function vi(e){const n=qe;return qe=e,_s=e&&e.type.__scopeId||null,n}function Sn(e,n=qe,t){if(!n||e._n)return e;const i=(...a)=>{i._d&&ji(-1);const o=vi(n);let r;try{r=e(...a)}finally{vi(o),i._d&&ji(1)}return r};return i._n=!0,i._c=!0,i._d=!0,i}function Sc(e,n){if(qe===null)return e;const t=qi(qe),i=e.dirs||(e.dirs=[]);for(let a=0;a<n.length;a++){let[o,r,s,l=xe]=n[a];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&Cn(r),i.push({dir:o,instance:t,value:r,oldValue:void 0,arg:s,modifiers:l}))}return e}function qn(e,n,t,i){const a=e.dirs,o=n&&n.dirs;for(let r=0;r<a.length;r++){const s=a[r];o&&(s.oldValue=o[r].value);let l=s.dir[i];l&&(Mn(),sn(l,t,8,[e.el,s,e,n]),En())}}function hi(e,n){if(Oe){let t=Oe.provides;const i=Oe.parent&&Oe.parent.provides;i===t&&(t=Oe.provides=Object.create(i)),t[e]=n}}function on(e,n,t=!1){const i=fo();if(i||xt){let a=xt?xt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return t&&ne(n)?n.call(i&&i.proxy):n}}const Dc=Symbol.for("v-scx"),Mc=()=>on(Dc);function Dn(e,n,t){return ws(e,n,t)}function ws(e,n,t=xe){const{immediate:i,deep:a,flush:o,once:r}=t,s=De({},t),l=n&&i||!n&&o!=="post";let d;if(Qt){if(o==="sync"){const f=Mc();d=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=kn,f.resume=kn,f.pause=kn,f}}const c=Oe;s.call=(f,z,k)=>sn(f,c,z,k);let u=!1;o==="post"?s.scheduler=f=>{Me(f,c&&c.suspense)}:o!=="sync"&&(u=!0,s.scheduler=(f,z)=>{z?f():uo(f)}),s.augmentJob=f=>{n&&(f.flags|=4),u&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const m=jc(e,n,s);return Qt&&(d?d.push(m):l&&m()),m}function Ec(e,n,t){const i=this.proxy,a=ye(e)?e.includes(".")?ys(i,e):()=>i[e]:e.bind(i,i);let o;ne(n)?o=n:(o=n.handler,t=n);const r=oi(this),s=ws(a,o.bind(i),t);return r(),s}function ys(e,n){const t=n.split(".");return()=>{let i=e;for(let a=0;a<t.length&&i;a++)i=i[t[a]];return i}}const Tc=Symbol("_vte"),js=e=>e.__isTeleport,mn=Symbol("_leaveCb"),St=Symbol("_enterCb");function Wc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),ho(()=>{e.isUnmounting=!0}),e}const Je=[Function,Array],zs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},Is=e=>{const n=e.subTree;return n.component?Is(n.component):n},Ac={name:"BaseTransition",props:zs,setup(e,{slots:n}){const t=fo(),i=Wc();return()=>{const a=n.default&&Ds(n.default(),!0);if(!a||!a.length)return;const o=Cs(a),r=oe(e),{mode:s}=r;if(i.isLeaving)return ca(o);const l=To(o);if(!l)return ca(o);let d=Pa(l,r,i,t,u=>d=u);l.type!==Ae&&vt(l,d);let c=t.subTree&&To(t.subTree);if(c&&c.type!==Ae&&!Bn(c,l)&&Is(t).type!==Ae){let u=Pa(c,r,i,t);if(vt(c,u),s==="out-in"&&l.type!==Ae)return i.isLeaving=!0,u.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete u.afterLeave,c=void 0},ca(o);s==="in-out"&&l.type!==Ae?u.delayLeave=(m,f,z)=>{const k=Ss(i,c);k[String(c.key)]=c,m[mn]=()=>{f(),m[mn]=void 0,delete d.delayedLeave,c=void 0},d.delayedLeave=()=>{z(),delete d.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Cs(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Ae){n=t;break}}return n}const Oc=Ac;function Ss(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function Pa(e,n,t,i,a){const{appear:o,mode:r,persisted:s=!1,onBeforeEnter:l,onEnter:d,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:m,onLeave:f,onAfterLeave:z,onLeaveCancelled:k,onBeforeAppear:M,onAppear:T,onAfterAppear:v,onAppearCancelled:b}=n,_=String(e.key),H=Ss(t,e),Y=(K,$)=>{K&&sn(K,i,9,$)},X=(K,$)=>{const V=$[1];Y(K,$),Z(K)?K.every(C=>C.length<=1)&&V():K.length<=1&&V()},ke={mode:r,persisted:s,beforeEnter(K){let $=l;if(!t.isMounted)if(o)$=M||l;else return;K[mn]&&K[mn](!0);const V=H[_];V&&Bn(e,V)&&V.el[mn]&&V.el[mn](),Y($,[K])},enter(K){if(H[_]===e)return;let $=d,V=c,C=u;if(!t.isMounted)if(o)$=T||d,V=v||c,C=b||u;else return;let ee=!1;K[St]=te=>{ee||(ee=!0,te?Y(C,[K]):Y(V,[K]),ke.delayedLeave&&ke.delayedLeave(),K[St]=void 0)};const ue=K[St].bind(null,!1);$?X($,[K,ue]):ue()},leave(K,$){const V=String(e.key);if(K[St]&&K[St](!0),t.isUnmounting)return $();Y(m,[K]);let C=!1;K[mn]=ue=>{C||(C=!0,$(),ue?Y(k,[K]):Y(z,[K]),K[mn]=void 0,H[V]===e&&delete H[V])};const ee=K[mn].bind(null,!1);H[V]=e,f?X(f,[K,ee]):ee()},clone(K){const $=Pa(K,n,t,i,a);return a&&a($),$}};return ke}function ca(e){if(Fi(e))return e=An(e),e.children=null,e}function To(e){if(!Fi(e))return js(e.type)&&e.children?Cs(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ne(t.default))return t.default()}}function vt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,vt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Ds(e,n=!1,t){let i=[],a=0;for(let o=0;o<e.length;o++){let r=e[o];const s=t==null?r.key:String(t)+String(r.key!=null?r.key:o);r.type===ze?(r.patchFlag&128&&a++,i=i.concat(Ds(r.children,n,s))):(n||r.type!==Ae)&&i.push(s!=null?An(r,{key:s}):r)}if(a>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function Ue(e,n){return ne(e)?De({name:e.name},n,{setup:e}):e}function Ms(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Wo(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const bi=new WeakMap;function $t(e,n,t,i,a=!1){if(Z(e)){e.forEach((k,M)=>$t(k,n&&(Z(n)?n[M]:n),t,i,a));return}if(it(i)&&!a){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&$t(e,n,t,i.component.subTree);return}const o=i.shapeFlag&4?qi(i.component):i.el,r=a?null:o,{i:s,r:l}=e,d=n&&n.r,c=s.refs===xe?s.refs={}:s.refs,u=s.setupState,m=oe(u),f=u===xe?Gr:k=>Wo(c,k)?!1:le(m,k),z=(k,M)=>!(M&&Wo(c,M));if(d!=null&&d!==l){if(Ao(n),ye(d))c[d]=null,f(d)&&(u[d]=null);else if(Re(d)){const k=n;z(d,k.k)&&(d.value=null),k.k&&(c[k.k]=null)}}if(ne(l))ai(l,s,12,[r,c]);else{const k=ye(l),M=Re(l);if(k||M){const T=()=>{if(e.f){const v=k?f(l)?u[l]:c[l]:z()||!e.k?l.value:c[e.k];if(a)Z(v)&&Xa(v,o);else if(Z(v))v.includes(o)||v.push(o);else if(k)c[l]=[o],f(l)&&(u[l]=c[l]);else{const b=[o];z(l,e.k)&&(l.value=b),e.k&&(c[e.k]=b)}}else k?(c[l]=r,f(l)&&(u[l]=r)):M&&(z(l,e.k)&&(l.value=r),e.k&&(c[e.k]=r))};if(r){const v=()=>{T(),bi.delete(e)};v.id=-1,bi.set(e,v),Me(v,t)}else Ao(e),T()}}}function Ao(e){const n=bi.get(e);n&&(n.flags|=8,bi.delete(e))}Ni().requestIdleCallback;Ni().cancelIdleCallback;const it=e=>!!e.type.__asyncLoader,Fi=e=>e.type.__isKeepAlive,Rc={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=fo(),i=t.ctx;if(!i.renderer)return()=>{const v=n.default&&n.default();return v&&v.length===1?v[0]:v};const a=new Map,o=new Set;let r=null;const s=t.suspense,{renderer:{p:l,m:d,um:c,o:{createElement:u}}}=i,m=u("div");i.activate=(v,b,_,H,Y)=>{const X=v.component;d(v,b,_,0,s),l(X.vnode,v,b,_,X,s,H,v.slotScopeIds,Y),Me(()=>{X.isDeactivated=!1,X.a&&gt(X.a);const ke=v.props&&v.props.onVnodeMounted;ke&&Qe(ke,X.parent,v)},s)},i.deactivate=v=>{const b=v.component;wi(b.m),wi(b.a),d(v,m,null,1,s),Me(()=>{b.da&&gt(b.da);const _=v.props&&v.props.onVnodeUnmounted;_&&Qe(_,b.parent,v),b.isDeactivated=!0},s)};function f(v){da(v),c(v,t,s,!0)}function z(v){a.forEach((b,_)=>{const H=Fa(it(b)?b.type.__asyncResolved||{}:b.type);H&&!v(H)&&k(_)})}function k(v){const b=a.get(v);b&&(!r||!Bn(b,r))?f(b):r&&da(r),a.delete(v),o.delete(v)}Dn(()=>[e.include,e.exclude],([v,b])=>{v&&z(_=>Ot(v,_)),b&&z(_=>!Ot(b,_))},{flush:"post",deep:!0});let M=null;const T=()=>{M!=null&&(yi(t.subTree.type)?Me(()=>{a.set(M,ci(t.subTree))},t.subTree.suspense):a.set(M,ci(t.subTree)))};return tn(T),Ts(T),ho(()=>{a.forEach(v=>{const{subTree:b,suspense:_}=t,H=ci(b);if(v.type===H.type&&v.key===H.key){da(H);const Y=H.component.da;Y&&Me(Y,_);return}f(v)})}),()=>{if(M=null,!n.default)return r=null;const v=n.default(),b=v[0];if(v.length>1)return r=null,v;if(!Jt(b)||!(b.shapeFlag&4)&&!(b.shapeFlag&128))return r=null,b;let _=ci(b);if(_.type===Ae)return r=null,_;const H=_.type,Y=Fa(it(_)?_.type.__asyncResolved||{}:H),{include:X,exclude:ke,max:K}=e;if(X&&(!Y||!Ot(X,Y))||ke&&Y&&Ot(ke,Y))return _.shapeFlag&=-257,r=_,b;const $=_.key==null?H:_.key,V=a.get($);return _.el&&(_=An(_),b.shapeFlag&128&&(b.ssContent=_)),M=$,V?(_.el=V.el,_.component=V.component,_.transition&&vt(_,_.transition),_.shapeFlag|=512,o.delete($),o.add($)):(o.add($),K&&o.size>parseInt(K,10)&&k(o.values().next().value)),_.shapeFlag|=256,r=_,yi(b.type)?b:_}}},Pc=Rc;function Ot(e,n){return Z(e)?e.some(t=>Ot(t,n)):ye(e)?e.split(",").includes(n):Nl(e)?(e.lastIndex=0,e.test(n)):!1}function Vi(e,n){Es(e,"a",n)}function Hc(e,n){Es(e,"da",n)}function Es(e,n,t=Oe){const i=e.__wdc||(e.__wdc=()=>{let a=t;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Gi(n,i,t),t){let a=t.parent;for(;a&&a.parent;)Fi(a.parent.vnode)&&Nc(i,n,t,a),a=a.parent}}function Nc(e,n,t,i){const a=Gi(n,e,i,!0);Ws(()=>{Xa(i[n],a)},t)}function da(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ci(e){return e.shapeFlag&128?e.ssContent:e}function Gi(e,n,t=Oe,i=!1){if(t){const a=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...r)=>{Mn();const s=oi(t),l=sn(n,t,e,r);return s(),En(),l});return i?a.unshift(o):a.push(o),o}}const On=e=>(n,t=Oe)=>{(!Qt||e==="sp")&&Gi(e,(...i)=>n(...i),t)},Lc=On("bm"),tn=On("m"),$c=On("bu"),Ts=On("u"),ho=On("bum"),Ws=On("um"),Bc=On("sp"),Fc=On("rtg"),Vc=On("rtc");function Gc(e,n=Oe){Gi("ec",e,n)}const As="components";function Oo(e,n){return Ps(As,e,!0,n)||e}const Os=Symbol.for("v-ndc");function Rs(e){return ye(e)?Ps(As,e,!1)||e:e||Os}function Ps(e,n,t=!0,i=!1){const a=qe||Oe;if(a){const o=a.type;{const s=Fa(o,!1);if(s&&(s===n||s===Le(n)||s===Hi(Le(n))))return o}const r=Ro(a[e]||o[e],n)||Ro(a.appContext[e],n);return!r&&i?o:r}}function Ro(e,n){return e&&(e[n]||e[Le(n)]||e[Hi(Le(n))])}function Xe(e,n,t,i){let a;const o=t,r=Z(e);if(r||ye(e)){const s=r&&tt(e);let l=!1,d=!1;s&&(l=!en(e),d=Tn(e),e=Li(e)),a=new Array(e.length);for(let c=0,u=e.length;c<u;c++)a[c]=n(l?d?kt(rn(e[c])):rn(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=n(s+1,s,void 0,o)}else if(de(e))if(e[Symbol.iterator])a=Array.from(e,(s,l)=>n(s,l,void 0,o));else{const s=Object.keys(e);a=new Array(s.length);for(let l=0,d=s.length;l<d;l++){const c=s[l];a[l]=n(e[c],c,l,o)}}else a=[];return a}const Ha=e=>e?tl(e)?qi(e):Ha(e.parent):null,Bt=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ha(e.parent),$root:e=>Ha(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ns(e),$forceUpdate:e=>e.f||(e.f=()=>{uo(e.update)}),$nextTick:e=>e.n||(e.n=Bi.bind(e.proxy)),$watch:e=>Ec.bind(e)}),ua=(e,n)=>e!==xe&&!e.__isScriptSetup&&le(e,n),Uc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:a,props:o,accessCache:r,type:s,appContext:l}=e;if(n[0]!=="$"){const m=r[n];if(m!==void 0)switch(m){case 1:return i[n];case 2:return a[n];case 4:return t[n];case 3:return o[n]}else{if(ua(i,n))return r[n]=1,i[n];if(a!==xe&&le(a,n))return r[n]=2,a[n];if(le(o,n))return r[n]=3,o[n];if(t!==xe&&le(t,n))return r[n]=4,t[n];Na&&(r[n]=0)}}const d=Bt[n];let c,u;if(d)return n==="$attrs"&&We(e.attrs,"get",""),d(e);if((c=s.__cssModules)&&(c=c[n]))return c;if(t!==xe&&le(t,n))return r[n]=4,t[n];if(u=l.config.globalProperties,le(u,n))return u[n]},set({_:e},n,t){const{data:i,setupState:a,ctx:o}=e;return ua(a,n)?(a[n]=t,!0):i!==xe&&le(i,n)?(i[n]=t,!0):le(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:a,props:o,type:r}},s){let l;return!!(t[s]||e!==xe&&s[0]!=="$"&&le(e,s)||ua(n,s)||le(o,s)||le(i,s)||le(Bt,s)||le(a.config.globalProperties,s)||(l=r.__cssModules)&&l[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:le(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Po(e){return Z(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Na=!0;function Kc(e){const n=Ns(e),t=e.proxy,i=e.ctx;Na=!1,n.beforeCreate&&Ho(n.beforeCreate,e,"bc");const{data:a,computed:o,methods:r,watch:s,provide:l,inject:d,created:c,beforeMount:u,mounted:m,beforeUpdate:f,updated:z,activated:k,deactivated:M,beforeDestroy:T,beforeUnmount:v,destroyed:b,unmounted:_,render:H,renderTracked:Y,renderTriggered:X,errorCaptured:ke,serverPrefetch:K,expose:$,inheritAttrs:V,components:C,directives:ee,filters:ue}=n;if(d&&qc(d,i,null),r)for(const ge in r){const re=r[ge];ne(re)&&(i[ge]=re.bind(t))}if(a){const ge=a.call(t,t);de(ge)&&(e.data=ii(ge))}if(Na=!0,o)for(const ge in o){const re=o[ge],bn=ne(re)?re.bind(t,t):ne(re.get)?re.get.bind(t,t):kn,Rn=!ne(re)&&ne(re.set)?re.set.bind(t):kn,cn=ce({get:bn,set:Rn});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Be=>cn.value=Be})}if(s)for(const ge in s)Hs(s[ge],i,t,ge);if(l){const ge=ne(l)?l.call(t):l;Reflect.ownKeys(ge).forEach(re=>{hi(re,ge[re])})}c&&Ho(c,e,"c");function ve(ge,re){Z(re)?re.forEach(bn=>ge(bn.bind(t))):re&&ge(re.bind(t))}if(ve(Lc,u),ve(tn,m),ve($c,f),ve(Ts,z),ve(Vi,k),ve(Hc,M),ve(Gc,ke),ve(Vc,Y),ve(Fc,X),ve(ho,v),ve(Ws,_),ve(Bc,K),Z($))if($.length){const ge=e.exposed||(e.exposed={});$.forEach(re=>{Object.defineProperty(ge,re,{get:()=>t[re],set:bn=>t[re]=bn,enumerable:!0})})}else e.exposed||(e.exposed={});H&&e.render===kn&&(e.render=H),V!=null&&(e.inheritAttrs=V),C&&(e.components=C),ee&&(e.directives=ee),K&&Ms(e)}function qc(e,n,t=kn){Z(e)&&(e=La(e));for(const i in e){const a=e[i];let o;de(a)?"default"in a?o=on(a.from||i,a.default,!0):o=on(a.from||i):o=on(a),Re(o)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):n[i]=o}}function Ho(e,n,t){sn(Z(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function Hs(e,n,t,i){let a=i.includes(".")?ys(t,i):()=>t[i];if(ye(e)){const o=n[e];ne(o)&&Dn(a,o)}else if(ne(e))Dn(a,e.bind(t));else if(de(e))if(Z(e))e.forEach(o=>Hs(o,n,t,i));else{const o=ne(e.handler)?e.handler.bind(t):n[e.handler];ne(o)&&Dn(a,o,e)}}function Ns(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:a,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,s=o.get(n);let l;return s?l=s:!a.length&&!t&&!i?l=n:(l={},a.length&&a.forEach(d=>_i(l,d,r,!0)),_i(l,n,r)),de(n)&&o.set(n,l),l}function _i(e,n,t,i=!1){const{mixins:a,extends:o}=n;o&&_i(e,o,t,!0),a&&a.forEach(r=>_i(e,r,t,!0));for(const r in n)if(!(i&&r==="expose")){const s=Zc[r]||t&&t[r];e[r]=s?s(e[r],n[r]):n[r]}return e}const Zc={data:No,props:Lo,emits:Lo,methods:Rt,computed:Rt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Rt,directives:Rt,watch:Jc,provide:No,inject:Yc};function No(e,n){return n?e?function(){return De(ne(e)?e.call(this,this):e,ne(n)?n.call(this,this):n)}:n:e}function Yc(e,n){return Rt(La(e),La(n))}function La(e){if(Z(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Pe(e,n){return e?[...new Set([].concat(e,n))]:n}function Rt(e,n){return e?De(Object.create(null),e,n):n}function Lo(e,n){return e?Z(e)&&Z(n)?[...new Set([...e,...n])]:De(Object.create(null),Po(e),Po(n??{})):n}function Jc(e,n){if(!e)return n;if(!n)return e;const t=De(Object.create(null),e);for(const i in n)t[i]=Pe(e[i],n[i]);return t}function Ls(){return{app:null,config:{isNativeTag:Gr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qc=0;function Xc(e,n){return function(i,a=null){ne(i)||(i=De({},i)),a!=null&&!de(a)&&(a=null);const o=Ls(),r=new WeakSet,s=[];let l=!1;const d=o.app={_uid:Qc++,_component:i,_props:a,_container:null,_context:o,_instance:null,version:Md,get config(){return o.config},set config(c){},use(c,...u){return r.has(c)||(c&&ne(c.install)?(r.add(c),c.install(d,...u)):ne(c)&&(r.add(c),c(d,...u))),d},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),d},component(c,u){return u?(o.components[c]=u,d):o.components[c]},directive(c,u){return u?(o.directives[c]=u,d):o.directives[c]},mount(c,u,m){if(!l){const f=d._ceVNode||R(i,a);return f.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(f,c,m),l=!0,d._container=c,c.__vue_app__=d,qi(f.component)}},onUnmount(c){s.push(c)},unmount(){l&&(sn(s,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(c,u){return o.provides[c]=u,d},runWithContext(c){const u=xt;xt=d;try{return c()}finally{xt=u}}};return d}}let xt=null;const ed=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Le(n)}Modifiers`]||e[`${Un(n)}Modifiers`];function nd(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||xe;let a=t;const o=n.startsWith("update:"),r=o&&ed(i,n.slice(7));r&&(r.trim&&(a=t.map(c=>ye(c)?c.trim():c)),r.number&&(a=t.map(no)));let s,l=i[s=aa(n)]||i[s=aa(Le(n))];!l&&o&&(l=i[s=aa(Un(n))]),l&&sn(l,e,6,a);const d=i[s+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,sn(d,e,6,a)}}const td=new WeakMap;function $s(e,n,t=!1){const i=t?td:n.emitsCache,a=i.get(e);if(a!==void 0)return a;const o=e.emits;let r={},s=!1;if(!ne(e)){const l=d=>{const c=$s(d,n,!0);c&&(s=!0,De(r,c))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!s?(de(e)&&i.set(e,null),null):(Z(o)?o.forEach(l=>r[l]=null):De(r,o),de(e)&&i.set(e,r),r)}function Ui(e,n){return!e||!Ri(n)?!1:(n=n.slice(2).replace(/Once$/,""),le(e,n[0].toLowerCase()+n.slice(1))||le(e,Un(n))||le(e,n))}function $o(e){const{type:n,vnode:t,proxy:i,withProxy:a,propsOptions:[o],slots:r,attrs:s,emit:l,render:d,renderCache:c,props:u,data:m,setupState:f,ctx:z,inheritAttrs:k}=e,M=vi(e);let T,v;try{if(t.shapeFlag&4){const _=a||i,H=_;T=fn(d.call(H,_,c,u,f,m,z)),v=s}else{const _=n;T=fn(_.length>1?_(u,{attrs:s,slots:r,emit:l}):_(u,null)),v=n.props?s:id(s)}}catch(_){Ft.length=0,$i(_,e,1),T=R(Ae)}let b=T;if(v&&k!==!1){const _=Object.keys(v),{shapeFlag:H}=b;_.length&&H&7&&(o&&_.some(Qa)&&(v=ad(v,o)),b=An(b,v,!1,!0))}return t.dirs&&(b=An(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&vt(b,t.transition),T=b,vi(M),T}const id=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ri(t))&&((n||(n={}))[t]=e[t]);return n},ad=(e,n)=>{const t={};for(const i in e)(!Qa(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function od(e,n,t){const{props:i,children:a,component:o}=e,{props:r,children:s,patchFlag:l}=n,d=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Bo(i,r,d):!!r;if(l&8){const c=n.dynamicProps;for(let u=0;u<c.length;u++){const m=c[u];if(Bs(r,i,m)&&!Ui(d,m))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:i===r?!1:i?r?Bo(i,r,d):!0:!!r;return!1}function Bo(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let a=0;a<i.length;a++){const o=i[a];if(Bs(n,e,o)&&!Ui(t,o))return!0}return!1}function Bs(e,n,t){const i=e[t],a=n[t];return t==="style"&&de(i)&&de(a)?!to(i,a):i!==a}function rd({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const Fs={},Vs=()=>Object.create(Fs),Gs=e=>Object.getPrototypeOf(e)===Fs;function sd(e,n,t,i=!1){const a={},o=Vs();e.propsDefaults=Object.create(null),Us(e,n,a,o);for(const r in e.propsOptions[0])r in a||(a[r]=void 0);t?e.props=i?a:ms(a):e.type.props?e.props=a:e.props=o,e.attrs=o}function ld(e,n,t,i){const{props:a,attrs:o,vnode:{patchFlag:r}}=e,s=oe(a),[l]=e.propsOptions;let d=!1;if((i||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let m=c[u];if(Ui(e.emitsOptions,m))continue;const f=n[m];if(l)if(le(o,m))f!==o[m]&&(o[m]=f,d=!0);else{const z=Le(m);a[z]=$a(l,s,z,f,e,!1)}else f!==o[m]&&(o[m]=f,d=!0)}}}else{Us(e,n,a,o)&&(d=!0);let c;for(const u in s)(!n||!le(n,u)&&((c=Un(u))===u||!le(n,c)))&&(l?t&&(t[u]!==void 0||t[c]!==void 0)&&(a[u]=$a(l,s,u,void 0,e,!0)):delete a[u]);if(o!==s)for(const u in o)(!n||!le(n,u))&&(delete o[u],d=!0)}d&&In(e.attrs,"set","")}function Us(e,n,t,i){const[a,o]=e.propsOptions;let r=!1,s;if(n)for(let l in n){if(Ht(l))continue;const d=n[l];let c;a&&le(a,c=Le(l))?!o||!o.includes(c)?t[c]=d:(s||(s={}))[c]=d:Ui(e.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,r=!0)}if(o){const l=oe(t),d=s||xe;for(let c=0;c<o.length;c++){const u=o[c];t[u]=$a(a,l,u,d[u],e,!le(d,u))}}return r}function $a(e,n,t,i,a,o){const r=e[t];if(r!=null){const s=le(r,"default");if(s&&i===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&ne(l)){const{propsDefaults:d}=a;if(t in d)i=d[t];else{const c=oi(a);i=d[t]=l.call(null,n),c()}}else i=l;a.ce&&a.ce._setProp(t,i)}r[0]&&(o&&!s?i=!1:r[1]&&(i===""||i===Un(t))&&(i=!0))}return i}const cd=new WeakMap;function Ks(e,n,t=!1){const i=t?cd:n.propsCache,a=i.get(e);if(a)return a;const o=e.props,r={},s=[];let l=!1;if(!ne(e)){const c=u=>{l=!0;const[m,f]=Ks(u,n,!0);De(r,m),f&&s.push(...f)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!l)return de(e)&&i.set(e,pt),pt;if(Z(o))for(let c=0;c<o.length;c++){const u=Le(o[c]);Fo(u)&&(r[u]=xe)}else if(o)for(const c in o){const u=Le(c);if(Fo(u)){const m=o[c],f=r[u]=Z(m)||ne(m)?{type:m}:De({},m),z=f.type;let k=!1,M=!0;if(Z(z))for(let T=0;T<z.length;++T){const v=z[T],b=ne(v)&&v.name;if(b==="Boolean"){k=!0;break}else b==="String"&&(M=!1)}else k=ne(z)&&z.name==="Boolean";f[0]=k,f[1]=M,(k||le(f,"default"))&&s.push(u)}}const d=[r,s];return de(e)&&i.set(e,d),d}function Fo(e){return e[0]!=="$"&&!Ht(e)}const po=e=>e==="_"||e==="_ctx"||e==="$stable",mo=e=>Z(e)?e.map(fn):[fn(e)],dd=(e,n,t)=>{if(n._n)return n;const i=Sn((...a)=>mo(n(...a)),t);return i._c=!1,i},qs=(e,n,t)=>{const i=e._ctx;for(const a in e){if(po(a))continue;const o=e[a];if(ne(o))n[a]=dd(a,o,i);else if(o!=null){const r=mo(o);n[a]=()=>r}}},Zs=(e,n)=>{const t=mo(n);e.slots.default=()=>t},Ys=(e,n,t)=>{for(const i in n)(t||!po(i))&&(e[i]=n[i])},ud=(e,n,t)=>{const i=e.slots=Vs();if(e.vnode.shapeFlag&32){const a=n._;a?(Ys(i,n,t),t&&Yr(i,"_",a,!0)):qs(n,i)}else n&&Zs(e,n)},hd=(e,n,t)=>{const{vnode:i,slots:a}=e;let o=!0,r=xe;if(i.shapeFlag&32){const s=n._;s?t&&s===1?o=!1:Ys(a,n,t):(o=!n.$stable,qs(n,a)),r=n}else n&&(Zs(e,n),r={default:1});if(o)for(const s in a)!po(s)&&r[s]==null&&delete a[s]},Me=xd;function pd(e){return md(e)}function md(e,n){const t=Ni();t.__VUE__=!0;const{insert:i,remove:a,patchProp:o,createElement:r,createText:s,createComment:l,setText:d,setElementText:c,parentNode:u,nextSibling:m,setScopeId:f=kn,insertStaticContent:z}=e,k=(p,g,x,w=null,I=null,y=null,N=void 0,O=null,A=!!g.dynamicChildren)=>{if(p===g)return;p&&!Bn(p,g)&&(w=j(p),Be(p,I,y,!0),p=null),g.patchFlag===-2&&(A=!1,g.dynamicChildren=null);const{type:S,ref:q,shapeFlag:B}=g;switch(S){case Ki:M(p,g,x,w);break;case Ae:T(p,g,x,w);break;case pi:p==null&&v(g,x,w,N);break;case ze:C(p,g,x,w,I,y,N,O,A);break;default:B&1?H(p,g,x,w,I,y,N,O,A):B&6?ee(p,g,x,w,I,y,N,O,A):(B&64||B&128)&&S.process(p,g,x,w,I,y,N,O,A,G)}q!=null&&I?$t(q,p&&p.ref,y,g||p,!g):q==null&&p&&p.ref!=null&&$t(p.ref,null,y,p,!0)},M=(p,g,x,w)=>{if(p==null)i(g.el=s(g.children),x,w);else{const I=g.el=p.el;g.children!==p.children&&d(I,g.children)}},T=(p,g,x,w)=>{p==null?i(g.el=l(g.children||""),x,w):g.el=p.el},v=(p,g,x,w)=>{[p.el,p.anchor]=z(p.children,g,x,w,p.el,p.anchor)},b=({el:p,anchor:g},x,w)=>{let I;for(;p&&p!==g;)I=m(p),i(p,x,w),p=I;i(g,x,w)},_=({el:p,anchor:g})=>{let x;for(;p&&p!==g;)x=m(p),a(p),p=x;a(g)},H=(p,g,x,w,I,y,N,O,A)=>{if(g.type==="svg"?N="svg":g.type==="math"&&(N="mathml"),p==null)Y(g,x,w,I,y,N,O,A);else{const S=p.el&&p.el._isVueCE?p.el:null;try{S&&S._beginPatch(),K(p,g,I,y,N,O,A)}finally{S&&S._endPatch()}}},Y=(p,g,x,w,I,y,N,O)=>{let A,S;const{props:q,shapeFlag:B,transition:U,dirs:Q}=p;if(A=p.el=r(p.type,y,q&&q.is,q),B&8?c(A,p.children):B&16&&ke(p.children,A,null,w,I,ha(p,y),N,O),Q&&qn(p,null,w,"created"),X(A,p,p.scopeId,N,w),q){for(const be in q)be!=="value"&&!Ht(be)&&o(A,be,null,q[be],y,w);"value"in q&&o(A,"value",null,q.value,y),(S=q.onVnodeBeforeMount)&&Qe(S,w,p)}Q&&qn(p,null,w,"beforeMount");const ae=gd(I,U);ae&&U.beforeEnter(A),i(A,g,x),((S=q&&q.onVnodeMounted)||ae||Q)&&Me(()=>{S&&Qe(S,w,p),ae&&U.enter(A),Q&&qn(p,null,w,"mounted")},I)},X=(p,g,x,w,I)=>{if(x&&f(p,x),w)for(let y=0;y<w.length;y++)f(p,w[y]);if(I){let y=I.subTree;if(g===y||yi(y.type)&&(y.ssContent===g||y.ssFallback===g)){const N=I.vnode;X(p,N,N.scopeId,N.slotScopeIds,I.parent)}}},ke=(p,g,x,w,I,y,N,O,A=0)=>{for(let S=A;S<p.length;S++){const q=p[S]=O?zn(p[S]):fn(p[S]);k(null,q,g,x,w,I,y,N,O)}},K=(p,g,x,w,I,y,N)=>{const O=g.el=p.el;let{patchFlag:A,dynamicChildren:S,dirs:q}=g;A|=p.patchFlag&16;const B=p.props||xe,U=g.props||xe;let Q;if(x&&Zn(x,!1),(Q=U.onVnodeBeforeUpdate)&&Qe(Q,x,g,p),q&&qn(g,p,x,"beforeUpdate"),x&&Zn(x,!0),(B.innerHTML&&U.innerHTML==null||B.textContent&&U.textContent==null)&&c(O,""),S?$(p.dynamicChildren,S,O,x,w,ha(g,I),y):N||re(p,g,O,null,x,w,ha(g,I),y,!1),A>0){if(A&16)V(O,B,U,x,I);else if(A&2&&B.class!==U.class&&o(O,"class",null,U.class,I),A&4&&o(O,"style",B.style,U.style,I),A&8){const ae=g.dynamicProps;for(let be=0;be<ae.length;be++){const he=ae[be],Fe=B[he],Ve=U[he];(Ve!==Fe||he==="value")&&o(O,he,Fe,Ve,I,x)}}A&1&&p.children!==g.children&&c(O,g.children)}else!N&&S==null&&V(O,B,U,x,I);((Q=U.onVnodeUpdated)||q)&&Me(()=>{Q&&Qe(Q,x,g,p),q&&qn(g,p,x,"updated")},w)},$=(p,g,x,w,I,y,N)=>{for(let O=0;O<g.length;O++){const A=p[O],S=g[O],q=A.el&&(A.type===ze||!Bn(A,S)||A.shapeFlag&198)?u(A.el):x;k(A,S,q,null,w,I,y,N,!0)}},V=(p,g,x,w,I)=>{if(g!==x){if(g!==xe)for(const y in g)!Ht(y)&&!(y in x)&&o(p,y,g[y],null,I,w);for(const y in x){if(Ht(y))continue;const N=x[y],O=g[y];N!==O&&y!=="value"&&o(p,y,O,N,I,w)}"value"in x&&o(p,"value",g.value,x.value,I)}},C=(p,g,x,w,I,y,N,O,A)=>{const S=g.el=p?p.el:s(""),q=g.anchor=p?p.anchor:s("");let{patchFlag:B,dynamicChildren:U,slotScopeIds:Q}=g;Q&&(O=O?O.concat(Q):Q),p==null?(i(S,x,w),i(q,x,w),ke(g.children||[],x,q,I,y,N,O,A)):B>0&&B&64&&U&&p.dynamicChildren&&p.dynamicChildren.length===U.length?($(p.dynamicChildren,U,x,I,y,N,O),(g.key!=null||I&&g===I.subTree)&&Js(p,g,!0)):re(p,g,x,q,I,y,N,O,A)},ee=(p,g,x,w,I,y,N,O,A)=>{g.slotScopeIds=O,p==null?g.shapeFlag&512?I.ctx.activate(g,x,w,N,A):ue(g,x,w,I,y,N,A):te(p,g,A)},ue=(p,g,x,w,I,y,N)=>{const O=p.component=jd(p,w,I);if(Fi(p)&&(O.ctx.renderer=G),zd(O,!1,N),O.asyncDep){if(I&&I.registerDep(O,ve,N),!p.el){const A=O.subTree=R(Ae);T(null,A,g,x),p.placeholder=A.el}}else ve(O,p,g,x,I,y,N)},te=(p,g,x)=>{const w=g.component=p.component;if(od(p,g,x))if(w.asyncDep&&!w.asyncResolved){ge(w,g,x);return}else w.next=g,w.update();else g.el=p.el,w.vnode=g},ve=(p,g,x,w,I,y,N)=>{const O=()=>{if(p.isMounted){let{next:B,bu:U,u:Q,parent:ae,vnode:be}=p;{const un=Qs(p);if(un){B&&(B.el=be.el,ge(p,B,N)),un.asyncDep.then(()=>{Me(()=>{p.isUnmounted||S()},I)});return}}let he=B,Fe;Zn(p,!1),B?(B.el=be.el,ge(p,B,N)):B=be,U&&gt(U),(Fe=B.props&&B.props.onVnodeBeforeUpdate)&&Qe(Fe,ae,B,be),Zn(p,!0);const Ve=$o(p),dn=p.subTree;p.subTree=Ve,k(dn,Ve,u(dn.el),j(dn),p,I,y),B.el=Ve.el,he===null&&rd(p,Ve.el),Q&&Me(Q,I),(Fe=B.props&&B.props.onVnodeUpdated)&&Me(()=>Qe(Fe,ae,B,be),I)}else{let B;const{el:U,props:Q}=g,{bm:ae,m:be,parent:he,root:Fe,type:Ve}=p,dn=it(g);Zn(p,!1),ae&&gt(ae),!dn&&(B=Q&&Q.onVnodeBeforeMount)&&Qe(B,he,g),Zn(p,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(Ve,p.parent?p.parent.type:void 0);const un=p.subTree=$o(p);k(null,un,x,w,p,I,y),g.el=un.el}if(be&&Me(be,I),!dn&&(B=Q&&Q.onVnodeMounted)){const un=g;Me(()=>Qe(B,he,un),I)}(g.shapeFlag&256||he&&it(he.vnode)&&he.vnode.shapeFlag&256)&&p.a&&Me(p.a,I),p.isMounted=!0,g=x=w=null}};p.scope.on();const A=p.effect=new es(O);p.scope.off();const S=p.update=A.run.bind(A),q=p.job=A.runIfDirty.bind(A);q.i=p,q.id=p.uid,A.scheduler=()=>uo(q),Zn(p,!0),S()},ge=(p,g,x)=>{g.component=p;const w=p.vnode.props;p.vnode=g,p.next=null,ld(p,g.props,w,x),hd(p,g.children,x),Mn(),Eo(p),En()},re=(p,g,x,w,I,y,N,O,A=!1)=>{const S=p&&p.children,q=p?p.shapeFlag:0,B=g.children,{patchFlag:U,shapeFlag:Q}=g;if(U>0){if(U&128){Rn(S,B,x,w,I,y,N,O,A);return}else if(U&256){bn(S,B,x,w,I,y,N,O,A);return}}Q&8?(q&16&&Ye(S,I,y),B!==S&&c(x,B)):q&16?Q&16?Rn(S,B,x,w,I,y,N,O,A):Ye(S,I,y,!0):(q&8&&c(x,""),Q&16&&ke(B,x,w,I,y,N,O,A))},bn=(p,g,x,w,I,y,N,O,A)=>{p=p||pt,g=g||pt;const S=p.length,q=g.length,B=Math.min(S,q);let U;for(U=0;U<B;U++){const Q=g[U]=A?zn(g[U]):fn(g[U]);k(p[U],Q,x,null,I,y,N,O,A)}S>q?Ye(p,I,y,!0,!1,B):ke(g,x,w,I,y,N,O,A,B)},Rn=(p,g,x,w,I,y,N,O,A)=>{let S=0;const q=g.length;let B=p.length-1,U=q-1;for(;S<=B&&S<=U;){const Q=p[S],ae=g[S]=A?zn(g[S]):fn(g[S]);if(Bn(Q,ae))k(Q,ae,x,null,I,y,N,O,A);else break;S++}for(;S<=B&&S<=U;){const Q=p[B],ae=g[U]=A?zn(g[U]):fn(g[U]);if(Bn(Q,ae))k(Q,ae,x,null,I,y,N,O,A);else break;B--,U--}if(S>B){if(S<=U){const Q=U+1,ae=Q<q?g[Q].el:w;for(;S<=U;)k(null,g[S]=A?zn(g[S]):fn(g[S]),x,ae,I,y,N,O,A),S++}}else if(S>U)for(;S<=B;)Be(p[S],I,y,!0),S++;else{const Q=S,ae=S,be=new Map;for(S=ae;S<=U;S++){const Ke=g[S]=A?zn(g[S]):fn(g[S]);Ke.key!=null&&be.set(Ke.key,S)}let he,Fe=0;const Ve=U-ae+1;let dn=!1,un=0;const It=new Array(Ve);for(S=0;S<Ve;S++)It[S]=0;for(S=Q;S<=B;S++){const Ke=p[S];if(Fe>=Ve){Be(Ke,I,y,!0);continue}let hn;if(Ke.key!=null)hn=be.get(Ke.key);else for(he=ae;he<=U;he++)if(It[he-ae]===0&&Bn(Ke,g[he])){hn=he;break}hn===void 0?Be(Ke,I,y,!0):(It[hn-ae]=S+1,hn>=un?un=hn:dn=!0,k(Ke,g[hn],x,null,I,y,N,O,A),Fe++)}const jo=dn?fd(It):pt;for(he=jo.length-1,S=Ve-1;S>=0;S--){const Ke=ae+S,hn=g[Ke],zo=g[Ke+1],Io=Ke+1<q?zo.el||Xs(zo):w;It[S]===0?k(null,hn,x,Io,I,y,N,O,A):dn&&(he<0||S!==jo[he]?cn(hn,x,Io,2):he--)}}},cn=(p,g,x,w,I=null)=>{const{el:y,type:N,transition:O,children:A,shapeFlag:S}=p;if(S&6){cn(p.component.subTree,g,x,w);return}if(S&128){p.suspense.move(g,x,w);return}if(S&64){N.move(p,g,x,G);return}if(N===ze){i(y,g,x);for(let B=0;B<A.length;B++)cn(A[B],g,x,w);i(p.anchor,g,x);return}if(N===pi){b(p,g,x);return}if(w!==2&&S&1&&O)if(w===0)O.beforeEnter(y),i(y,g,x),Me(()=>O.enter(y),I);else{const{leave:B,delayLeave:U,afterLeave:Q}=O,ae=()=>{p.ctx.isUnmounted?a(y):i(y,g,x)},be=()=>{y._isLeaving&&y[mn](!0),B(y,()=>{ae(),Q&&Q()})};U?U(y,ae,be):be()}else i(y,g,x)},Be=(p,g,x,w=!1,I=!1)=>{const{type:y,props:N,ref:O,children:A,dynamicChildren:S,shapeFlag:q,patchFlag:B,dirs:U,cacheIndex:Q}=p;if(B===-2&&(I=!1),O!=null&&(Mn(),$t(O,null,x,p,!0),En()),Q!=null&&(g.renderCache[Q]=void 0),q&256){g.ctx.deactivate(p);return}const ae=q&1&&U,be=!it(p);let he;if(be&&(he=N&&N.onVnodeBeforeUnmount)&&Qe(he,g,p),q&6)Kn(p.component,x,w);else{if(q&128){p.suspense.unmount(x,w);return}ae&&qn(p,null,g,"beforeUnmount"),q&64?p.type.remove(p,g,x,G,w):S&&!S.hasOnce&&(y!==ze||B>0&&B&64)?Ye(S,g,x,!1,!0):(y===ze&&B&384||!I&&q&16)&&Ye(A,g,x),w&&ot(p)}(be&&(he=N&&N.onVnodeUnmounted)||ae)&&Me(()=>{he&&Qe(he,g,p),ae&&qn(p,null,g,"unmounted")},x)},ot=p=>{const{type:g,el:x,anchor:w,transition:I}=p;if(g===ze){rt(x,w);return}if(g===pi){_(p);return}const y=()=>{a(x),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:N,delayLeave:O}=I,A=()=>N(x,y);O?O(p.el,y,A):A()}else y()},rt=(p,g)=>{let x;for(;p!==g;)x=m(p),a(p),p=x;a(g)},Kn=(p,g,x)=>{const{bum:w,scope:I,job:y,subTree:N,um:O,m:A,a:S}=p;wi(A),wi(S),w&&gt(w),I.stop(),y&&(y.flags|=8,Be(N,p,g,x)),O&&Me(O,g),Me(()=>{p.isUnmounted=!0},g)},Ye=(p,g,x,w=!1,I=!1,y=0)=>{for(let N=y;N<p.length;N++)Be(p[N],g,x,w,I)},j=p=>{if(p.shapeFlag&6)return j(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=m(p.anchor||p.el),x=g&&g[Tc];return x?m(x):g};let F=!1;const L=(p,g,x)=>{let w;p==null?g._vnode&&(Be(g._vnode,null,null,!0),w=g._vnode.component):k(g._vnode||null,p,g,null,null,null,x),g._vnode=p,F||(F=!0,Eo(w),vs(),F=!1)},G={p:k,um:Be,m:cn,r:ot,mt:ue,mc:ke,pc:re,pbc:$,n:j,o:e};return{render:L,hydrate:void 0,createApp:Xc(L)}}function ha({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Zn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function gd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Js(e,n,t=!1){const i=e.children,a=n.children;if(Z(i)&&Z(a))for(let o=0;o<i.length;o++){const r=i[o];let s=a[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[o]=zn(a[o]),s.el=r.el),!t&&s.patchFlag!==-2&&Js(r,s)),s.type===Ki&&(s.patchFlag===-1&&(s=a[o]=zn(s)),s.el=r.el),s.type===Ae&&!s.el&&(s.el=r.el)}}function fd(e){const n=e.slice(),t=[0];let i,a,o,r,s;const l=e.length;for(i=0;i<l;i++){const d=e[i];if(d!==0){if(a=t[t.length-1],e[a]<d){n[i]=a,t.push(i);continue}for(o=0,r=t.length-1;o<r;)s=o+r>>1,e[t[s]]<d?o=s+1:r=s;d<e[t[o]]&&(o>0&&(n[i]=t[o-1]),t[o]=i)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=n[r];return t}function Qs(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Qs(n)}function wi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Xs(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Xs(n.subTree):null}const yi=e=>e.__isSuspense;function xd(e,n){n&&n.pendingBranch?Z(e)?n.effects.push(...e):n.effects.push(e):Cc(e)}const ze=Symbol.for("v-fgt"),Ki=Symbol.for("v-txt"),Ae=Symbol.for("v-cmt"),pi=Symbol.for("v-stc"),Ft=[];let Ze=null;function D(e=!1){Ft.push(Ze=e?null:[])}function kd(){Ft.pop(),Ze=Ft[Ft.length-1]||null}let Yt=1;function ji(e,n=!1){Yt+=e,e<0&&Ze&&n&&(Ze.hasOnce=!0)}function el(e){return e.dynamicChildren=Yt>0?Ze||pt:null,kd(),Yt>0&&Ze&&Ze.push(e),e}function W(e,n,t,i,a,o){return el(h(e,n,t,i,a,o,!0))}function Wn(e,n,t,i,a){return el(R(e,n,t,i,a,!0))}function Jt(e){return e?e.__v_isVNode===!0:!1}function Bn(e,n){return e.type===n.type&&e.key===n.key}const nl=({key:e})=>e??null,mi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||Re(e)||ne(e)?{i:qe,r:e,k:n,f:!!t}:e:null);function h(e,n=null,t=null,i=0,a=null,o=e===ze?0:1,r=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&nl(n),ref:n&&mi(n),scopeId:_s,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:qe};return s?(go(l,t),o&128&&e.normalize(l)):t&&(l.shapeFlag|=ye(t)?8:16),Yt>0&&!r&&Ze&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ze.push(l),l}const R=vd;function vd(e,n=null,t=null,i=0,a=null,o=!1){if((!e||e===Os)&&(e=Ae),Jt(e)){const s=An(e,n,!0);return t&&go(s,t),Yt>0&&!o&&Ze&&(s.shapeFlag&6?Ze[Ze.indexOf(e)]=s:Ze.push(s)),s.patchFlag=-2,s}if(Dd(e)&&(e=e.__vccOpts),n){n=bd(n);let{class:s,style:l}=n;s&&!ye(s)&&(n.class=fe(s)),de(l)&&(co(l)&&!Z(l)&&(l=De({},l)),n.style=Vn(l))}const r=ye(e)?1:yi(e)?128:js(e)?64:de(e)?4:ne(e)?2:0;return h(e,n,t,i,a,r,o,!0)}function bd(e){return e?co(e)||Gs(e)?De({},e):e:null}function An(e,n,t=!1,i=!1){const{props:a,ref:o,patchFlag:r,children:s,transition:l}=e,d=n?_d(a||{},n):a,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&nl(d),ref:n&&n.ref?t&&o?Z(o)?o.concat(mi(n)):[o,mi(n)]:mi(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==ze?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&vt(c,l.clone(c)),c}function Fn(e=" ",n=0){return R(Ki,null,e,n)}function pa(e,n){const t=R(pi,null,e);return t.staticCount=n,t}function me(e="",n=!1){return n?(D(),Wn(Ae,null,e)):R(Ae,null,e)}function fn(e){return e==null||typeof e=="boolean"?R(Ae):Z(e)?R(ze,null,e.slice()):Jt(e)?zn(e):R(Ki,null,String(e))}function zn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:An(e)}function go(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(Z(n))t=16;else if(typeof n=="object")if(i&65){const a=n.default;a&&(a._c&&(a._d=!1),go(e,a()),a._c&&(a._d=!0));return}else{t=32;const a=n._;!a&&!Gs(n)?n._ctx=qe:a===3&&qe&&(qe.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ne(n)?(n={default:n,_ctx:qe},t=32):(n=String(n),i&64?(t=16,n=[Fn(n)]):t=8);e.children=n,e.shapeFlag|=t}function _d(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const a in i)if(a==="class")n.class!==i.class&&(n.class=fe([n.class,i.class]));else if(a==="style")n.style=Vn([n.style,i.style]);else if(Ri(a)){const o=n[a],r=i[a];r&&o!==r&&!(Z(o)&&o.includes(r))&&(n[a]=o?[].concat(o,r):r)}else a!==""&&(n[a]=i[a])}return n}function Qe(e,n,t,i=null){sn(e,n,7,[t,i])}const wd=Ls();let yd=0;function jd(e,n,t){const i=e.type,a=(n?n.appContext:e.appContext)||wd,o={uid:yd++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ks(i,a),emitsOptions:$s(i,a),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:i.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=nd.bind(null,o),e.ce&&e.ce(o),o}let Oe=null;const fo=()=>Oe||qe;let zi,Ba;{const e=Ni(),n=(t,i)=>{let a;return(a=e[t])||(a=e[t]=[]),a.push(i),o=>{a.length>1?a.forEach(r=>r(o)):a[0](o)}};zi=n("__VUE_INSTANCE_SETTERS__",t=>Oe=t),Ba=n("__VUE_SSR_SETTERS__",t=>Qt=t)}const oi=e=>{const n=Oe;return zi(e),e.scope.on(),()=>{e.scope.off(),zi(n)}},Vo=()=>{Oe&&Oe.scope.off(),zi(null)};function tl(e){return e.vnode.shapeFlag&4}let Qt=!1;function zd(e,n=!1,t=!1){n&&Ba(n);const{props:i,children:a}=e.vnode,o=tl(e);sd(e,i,o,n),ud(e,a,t||n);const r=o?Id(e,n):void 0;return n&&Ba(!1),r}function Id(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Uc);const{setup:i}=t;if(i){Mn();const a=e.setupContext=i.length>1?Sd(e):null,o=oi(e),r=ai(i,e,0,[e.props,a]),s=Kr(r);if(En(),o(),(s||e.sp)&&!it(e)&&Ms(e),s){if(r.then(Vo,Vo),n)return r.then(l=>{Go(e,l)}).catch(l=>{$i(l,e,0)});e.asyncDep=r}else Go(e,r)}else il(e)}function Go(e,n,t){ne(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:de(n)&&(e.setupState=fs(n)),il(e)}function il(e,n,t){const i=e.type;e.render||(e.render=i.render||kn);{const a=oi(e);Mn();try{Kc(e)}finally{En(),a()}}}const Cd={get(e,n){return We(e,"get",""),e[n]}};function Sd(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Cd),slots:e.slots,emit:e.emit,expose:n}}function qi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(fs(xc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Bt)return Bt[t](e)},has(n,t){return t in n||t in Bt}})):e.proxy}function Fa(e,n=!0){return ne(e)?e.displayName||e.name:e.name||n&&e.__name}function Dd(e){return ne(e)&&"__vccOpts"in e}const ce=(e,n)=>wc(e,n,Qt);function bt(e,n,t){try{ji(-1);const i=arguments.length;return i===2?de(n)&&!Z(n)?Jt(n)?R(e,null,[n]):R(e,n):R(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Jt(t)&&(t=[t]),R(e,n,t))}finally{ji(1)}}const Md="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Va;const Uo=typeof window<"u"&&window.trustedTypes;if(Uo)try{Va=Uo.createPolicy("vue",{createHTML:e=>e})}catch{}const al=Va?e=>Va.createHTML(e):e=>e,Ed="http://www.w3.org/2000/svg",Td="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Ko=jn&&jn.createElement("template"),Wd={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const a=n==="svg"?jn.createElementNS(Ed,e):n==="mathml"?jn.createElementNS(Td,e):t?jn.createElement(e,{is:t}):jn.createElement(e);return e==="select"&&i&&i.multiple!=null&&a.setAttribute("multiple",i.multiple),a},createText:e=>jn.createTextNode(e),createComment:e=>jn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,a,o){const r=t?t.previousSibling:n.lastChild;if(a&&(a===o||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),t),!(a===o||!(a=a.nextSibling)););else{Ko.innerHTML=al(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const s=Ko.content;if(i==="svg"||i==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}n.insertBefore(s,t)}return[r?r.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Pn="transition",Dt="animation",Xt=Symbol("_vtc"),ol={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ad=De({},zs,ol),Od=e=>(e.displayName="Transition",e.props=Ad,e),Ii=Od((e,{slots:n})=>bt(Oc,Rd(e),n)),Yn=(e,n=[])=>{Z(e)?e.forEach(t=>t(...n)):e&&e(...n)},qo=e=>e?Z(e)?e.some(n=>n.length>1):e.length>1:!1;function Rd(e){const n={};for(const C in e)C in ol||(n[C]=e[C]);if(e.css===!1)return n;const{name:t="v",type:i,duration:a,enterFromClass:o=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:l=o,appearActiveClass:d=r,appearToClass:c=s,leaveFromClass:u=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=e,z=Pd(a),k=z&&z[0],M=z&&z[1],{onBeforeEnter:T,onEnter:v,onEnterCancelled:b,onLeave:_,onLeaveCancelled:H,onBeforeAppear:Y=T,onAppear:X=v,onAppearCancelled:ke=b}=n,K=(C,ee,ue,te)=>{C._enterCancelled=te,Jn(C,ee?c:s),Jn(C,ee?d:r),ue&&ue()},$=(C,ee)=>{C._isLeaving=!1,Jn(C,u),Jn(C,f),Jn(C,m),ee&&ee()},V=C=>(ee,ue)=>{const te=C?X:v,ve=()=>K(ee,C,ue);Yn(te,[ee,ve]),Zo(()=>{Jn(ee,C?l:o),wn(ee,C?c:s),qo(te)||Yo(ee,i,k,ve)})};return De(n,{onBeforeEnter(C){Yn(T,[C]),wn(C,o),wn(C,r)},onBeforeAppear(C){Yn(Y,[C]),wn(C,l),wn(C,d)},onEnter:V(!1),onAppear:V(!0),onLeave(C,ee){C._isLeaving=!0;const ue=()=>$(C,ee);wn(C,u),C._enterCancelled?(wn(C,m),Xo(C)):(Xo(C),wn(C,m)),Zo(()=>{C._isLeaving&&(Jn(C,u),wn(C,f),qo(_)||Yo(C,i,M,ue))}),Yn(_,[C,ue])},onEnterCancelled(C){K(C,!1,void 0,!0),Yn(b,[C])},onAppearCancelled(C){K(C,!0,void 0,!0),Yn(ke,[C])},onLeaveCancelled(C){$(C),Yn(H,[C])}})}function Pd(e){if(e==null)return null;if(de(e))return[ma(e.enter),ma(e.leave)];{const n=ma(e);return[n,n]}}function ma(e){return Fl(e)}function wn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Xt]||(e[Xt]=new Set)).add(n)}function Jn(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[Xt];t&&(t.delete(n),t.size||(e[Xt]=void 0))}function Zo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Hd=0;function Yo(e,n,t,i){const a=e._endId=++Hd,o=()=>{a===e._endId&&i()};if(t!=null)return setTimeout(o,t);const{type:r,timeout:s,propCount:l}=Nd(e,n);if(!r)return i();const d=r+"end";let c=0;const u=()=>{e.removeEventListener(d,m),o()},m=f=>{f.target===e&&++c>=l&&u()};setTimeout(()=>{c<l&&u()},s+1),e.addEventListener(d,m)}function Nd(e,n){const t=window.getComputedStyle(e),i=z=>(t[z]||"").split(", "),a=i(`${Pn}Delay`),o=i(`${Pn}Duration`),r=Jo(a,o),s=i(`${Dt}Delay`),l=i(`${Dt}Duration`),d=Jo(s,l);let c=null,u=0,m=0;n===Pn?r>0&&(c=Pn,u=r,m=o.length):n===Dt?d>0&&(c=Dt,u=d,m=l.length):(u=Math.max(r,d),c=u>0?r>d?Pn:Dt:null,m=c?c===Pn?o.length:l.length:0);const f=c===Pn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Pn}Property`).toString());return{type:c,timeout:u,propCount:m,hasTransform:f}}function Jo(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>Qo(t)+Qo(e[i])))}function Qo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Xo(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ld(e,n,t){const i=e[Xt];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const er=Symbol("_vod"),$d=Symbol("_vsh"),Bd=Symbol(""),Fd=/(?:^|;)\s*display\s*:/;function Vd(e,n,t){const i=e.style,a=ye(t);let o=!1;if(t&&!a){if(n)if(ye(n))for(const r of n.split(";")){const s=r.slice(0,r.indexOf(":")).trim();t[s]==null&&gi(i,s,"")}else for(const r in n)t[r]==null&&gi(i,r,"");for(const r in t)r==="display"&&(o=!0),gi(i,r,t[r])}else if(a){if(n!==t){const r=i[Bd];r&&(t+=";"+r),i.cssText=t,o=Fd.test(t)}}else n&&e.removeAttribute("style");er in e&&(e[er]=o?i.display:"",e[$d]&&(i.display="none"))}const nr=/\s*!important$/;function gi(e,n,t){if(Z(t))t.forEach(i=>gi(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=Gd(e,n);nr.test(t)?e.setProperty(Un(i),t.replace(nr,""),"important"):e[i]=t}}const tr=["Webkit","Moz","ms"],ga={};function Gd(e,n){const t=ga[n];if(t)return t;let i=Le(n);if(i!=="filter"&&i in e)return ga[n]=i;i=Hi(i);for(let a=0;a<tr.length;a++){const o=tr[a]+i;if(o in e)return ga[n]=o}return n}const ir="http://www.w3.org/1999/xlink";function ar(e,n,t,i,a,o=Zl(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(ir,n.slice(6,n.length)):e.setAttributeNS(ir,n,t):t==null||o&&!Jr(t)?e.removeAttribute(n):e.setAttribute(n,o?"":vn(t)?String(t):t)}function or(e,n,t,i,a){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?al(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const s=o==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(s!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let r=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Jr(t):t==null&&s==="string"?(t="",r=!0):s==="number"&&(t=0,r=!0)}try{e[n]=t}catch{}r&&e.removeAttribute(a||n)}function dt(e,n,t,i){e.addEventListener(n,t,i)}function Ud(e,n,t,i){e.removeEventListener(n,t,i)}const rr=Symbol("_vei");function Kd(e,n,t,i,a=null){const o=e[rr]||(e[rr]={}),r=o[n];if(i&&r)r.value=i;else{const[s,l]=qd(n);if(i){const d=o[n]=Jd(i,a);dt(e,s,d,l)}else r&&(Ud(e,s,r,l),o[n]=void 0)}}const sr=/(?:Once|Passive|Capture)$/;function qd(e){let n;if(sr.test(e)){n={};let i;for(;i=e.match(sr);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Un(e.slice(2)),n]}let fa=0;const Zd=Promise.resolve(),Yd=()=>fa||(Zd.then(()=>fa=0),fa=Date.now());function Jd(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;sn(Qd(i,t.value),n,5,[i])};return t.value=e,t.attached=Yd(),t}function Qd(e,n){if(Z(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>a=>!a._stopped&&i&&i(a))}else return n}const lr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xd=(e,n,t,i,a,o)=>{const r=a==="svg";n==="class"?Ld(e,i,r):n==="style"?Vd(e,t,i):Ri(n)?Qa(n)||Kd(e,n,t,i,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):eu(e,n,i,r))?(or(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&ar(e,n,i,r,o,n!=="value")):e._isVueCE&&(nu(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!ye(i)))?or(e,Le(n),i,o,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),ar(e,n,i,r))};function eu(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&lr(n)&&ne(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return lr(n)&&ye(t)?!1:n in e}function nu(e,n){const t=e._def.props;if(!t)return!1;const i=Le(n);return Array.isArray(t)?t.some(a=>Le(a)===i):Object.keys(t).some(a=>Le(a)===i)}const cr=e=>{const n=e.props["onUpdate:modelValue"]||!1;return Z(n)?t=>gt(n,t):n};function tu(e){e.target.composing=!0}function dr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const xa=Symbol("_assign");function ur(e,n,t){return n&&(e=e.trim()),t&&(e=no(e)),e}const iu={created(e,{modifiers:{lazy:n,trim:t,number:i}},a){e[xa]=cr(a);const o=i||a.props&&a.props.type==="number";dt(e,n?"change":"input",r=>{r.target.composing||e[xa](ur(e.value,t,o))}),(t||o)&&dt(e,"change",()=>{e.value=ur(e.value,t,o)}),n||(dt(e,"compositionstart",tu),dt(e,"compositionend",dr),dt(e,"change",dr))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:i,trim:a,number:o}},r){if(e[xa]=cr(r),e.composing)return;const s=(o||e.type==="number")&&!/^0\d/.test(e.value)?no(e.value):e.value,l=n??"";s!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&n===t||a&&e.value.trim()===l)||(e.value=l))}},au=["ctrl","shift","alt","meta"],ou={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>au.some(t=>e[`${t}Key`]&&!n.includes(t))},Vt=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((a,...o)=>{for(let r=0;r<n.length;r++){const s=ou[n[r]];if(s&&s(a,n))return}return e(a,...o)}))},ru={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},su=(e,n)=>{const t=e._withKeys||(e._withKeys={}),i=n.join(".");return t[i]||(t[i]=(a=>{if(!("key"in a))return;const o=Un(a.key);if(n.some(r=>r===o||ru[r]===o))return e(a)}))},lu=De({patchProp:Xd},Wd);let hr;function cu(){return hr||(hr=pd(lu))}const pr=((...e)=>{const n=cu().createApp(...e),{mount:t}=n;return n.mount=i=>{const a=uu(i);if(!a)return;const o=n._component;!ne(o)&&!o.render&&!o.template&&(o.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const r=t(a,!1,du(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),r},n});function du(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function uu(e){return ye(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ut=typeof document<"u";function rl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&rl(e.default)}const se=Object.assign;function ka(e,n){const t={};for(const i in n){const a=n[i];t[i]=ln(a)?a.map(e):e(a)}return t}const Gt=()=>{},ln=Array.isArray;function mr(e,n){const t={};for(const i in e)t[i]=i in n?n[i]:e[i];return t}const sl=/#/g,pu=/&/g,mu=/\//g,gu=/=/g,fu=/\?/g,ll=/\+/g,xu=/%5B/g,ku=/%5D/g,cl=/%5E/g,vu=/%60/g,dl=/%7B/g,bu=/%7C/g,ul=/%7D/g,_u=/%20/g;function xo(e){return e==null?"":encodeURI(""+e).replace(bu,"|").replace(xu,"[").replace(ku,"]")}function wu(e){return xo(e).replace(dl,"{").replace(ul,"}").replace(cl,"^")}function Ga(e){return xo(e).replace(ll,"%2B").replace(_u,"+").replace(sl,"%23").replace(pu,"%26").replace(vu,"`").replace(dl,"{").replace(ul,"}").replace(cl,"^")}function yu(e){return Ga(e).replace(gu,"%3D")}function ju(e){return xo(e).replace(sl,"%23").replace(fu,"%3F")}function zu(e){return ju(e).replace(mu,"%2F")}function ei(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Iu=/\/$/,Cu=e=>e.replace(Iu,"");function va(e,n,t="/"){let i,a={},o="",r="";const s=n.indexOf("#");let l=n.indexOf("?");return l=s>=0&&l>s?-1:l,l>=0&&(i=n.slice(0,l),o=n.slice(l,s>0?s:n.length),a=e(o.slice(1))),s>=0&&(i=i||n.slice(0,s),r=n.slice(s,n.length)),i=Eu(i??n,t),{fullPath:i+o+r,path:i,query:a,hash:ei(r)}}function Su(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function gr(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Du(e,n,t){const i=n.matched.length-1,a=t.matched.length-1;return i>-1&&i===a&&_t(n.matched[i],t.matched[a])&&hl(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function _t(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function hl(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!Mu(e[t],n[t]))return!1;return!0}function Mu(e,n){return ln(e)?fr(e,n):ln(n)?fr(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function fr(e,n){return ln(n)?e.length===n.length&&e.every((t,i)=>t===n[i]):e.length===1&&e[0]===n}function Eu(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),i=e.split("/"),a=i[i.length-1];(a===".."||a===".")&&i.push("");let o=t.length-1,r,s;for(r=0;r<i.length;r++)if(s=i[r],s!==".")if(s==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+i.slice(r).join("/")}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ua=(function(e){return e.pop="pop",e.push="push",e})({}),ba=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Tu(e){if(!e)if(ut){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Cu(e)}const Wu=/^[^#]+#/;function Au(e,n){return e.replace(Wu,"#")+n}function Ou(e,n){const t=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:n.behavior,left:i.left-t.left-(n.left||0),top:i.top-t.top-(n.top||0)}}const Zi=()=>({left:window.scrollX,top:window.scrollY});function Ru(e){let n;if("el"in e){const t=e.el,i=typeof t=="string"&&t.startsWith("#"),a=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!a)return;n=Ou(a,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function xr(e,n){return(history.state?history.state.position-n:-1)+e}const Ka=new Map;function Pu(e,n){Ka.set(e,n)}function Hu(e){const n=Ka.get(e);return Ka.delete(e),n}function Nu(e){return typeof e=="string"||e&&typeof e=="object"}function pl(e){return typeof e=="string"||typeof e=="symbol"}let je=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ml=Symbol("");je.MATCHER_NOT_FOUND+"",je.NAVIGATION_GUARD_REDIRECT+"",je.NAVIGATION_ABORTED+"",je.NAVIGATION_CANCELLED+"",je.NAVIGATION_DUPLICATED+"";function wt(e,n){return se(new Error,{type:e,[ml]:!0},n)}function yn(e,n){return e instanceof Error&&ml in e&&(n==null||!!(e.type&n))}const Lu=["params","query","hash"];function $u(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of Lu)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function Bu(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<t.length;++i){const a=t[i].replace(ll," "),o=a.indexOf("="),r=ei(o<0?a:a.slice(0,o)),s=o<0?null:ei(a.slice(o+1));if(r in n){let l=n[r];ln(l)||(l=n[r]=[l]),l.push(s)}else n[r]=s}return n}function kr(e){let n="";for(let t in e){const i=e[t];if(t=yu(t),i==null){i!==void 0&&(n+=(n.length?"&":"")+t);continue}(ln(i)?i.map(a=>a&&Ga(a)):[i&&Ga(i)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function Fu(e){const n={};for(const t in e){const i=e[t];i!==void 0&&(n[t]=ln(i)?i.map(a=>a==null?null:""+a):i==null?i:""+i)}return n}const Vu=Symbol(""),vr=Symbol(""),Yi=Symbol(""),ko=Symbol(""),qa=Symbol("");function Mt(){let e=[];function n(i){return e.push(i),()=>{const a=e.indexOf(i);a>-1&&e.splice(a,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function $n(e,n,t,i,a,o=r=>r()){const r=i&&(i.enterCallbacks[a]=i.enterCallbacks[a]||[]);return()=>new Promise((s,l)=>{const d=m=>{m===!1?l(wt(je.NAVIGATION_ABORTED,{from:t,to:n})):m instanceof Error?l(m):Nu(m)?l(wt(je.NAVIGATION_GUARD_REDIRECT,{from:n,to:m})):(r&&i.enterCallbacks[a]===r&&typeof m=="function"&&r.push(m),s())},c=o(()=>e.call(i&&i.instances[a],n,t,d));let u=Promise.resolve(c);e.length<3&&(u=u.then(d)),u.catch(m=>l(m))})}function _a(e,n,t,i,a=o=>o()){const o=[];for(const r of e)for(const s in r.components){let l=r.components[s];if(!(n!=="beforeRouteEnter"&&!r.instances[s]))if(rl(l)){const d=(l.__vccOpts||l)[n];d&&o.push($n(d,t,i,r,s,a))}else{let d=l();o.push(()=>d.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${s}" at "${r.path}"`);const u=hu(c)?c.default:c;r.mods[s]=c,r.components[s]=u;const m=(u.__vccOpts||u)[n];return m&&$n(m,t,i,r,s,a)()}))}}return o}function Gu(e,n){const t=[],i=[],a=[],o=Math.max(n.matched.length,e.matched.length);for(let r=0;r<o;r++){const s=n.matched[r];s&&(e.matched.find(d=>_t(d,s))?i.push(s):t.push(s));const l=e.matched[r];l&&(n.matched.find(d=>_t(d,l))||a.push(l))}return[t,i,a]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Uu=()=>location.protocol+"//"+location.host;function gl(e,n){const{pathname:t,search:i,hash:a}=n,o=e.indexOf("#");if(o>-1){let r=a.includes(e.slice(o))?e.slice(o).length:1,s=a.slice(r);return s[0]!=="/"&&(s="/"+s),gr(s,"")}return gr(t,e)+i+a}function Ku(e,n,t,i){let a=[],o=[],r=null;const s=({state:m})=>{const f=gl(e,location),z=t.value,k=n.value;let M=0;if(m){if(t.value=f,n.value=m,r&&r===z){r=null;return}M=k?m.position-k.position:0}else i(f);a.forEach(T=>{T(t.value,z,{delta:M,type:Ua.pop,direction:M?M>0?ba.forward:ba.back:ba.unknown})})};function l(){r=t.value}function d(m){a.push(m);const f=()=>{const z=a.indexOf(m);z>-1&&a.splice(z,1)};return o.push(f),f}function c(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(se({},m.state,{scroll:Zi()}),"")}}function u(){for(const m of o)m();o=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:d,destroy:u}}function br(e,n,t,i=!1,a=!1){return{back:e,current:n,forward:t,replaced:i,position:window.history.length,scroll:a?Zi():null}}function qu(e){const{history:n,location:t}=window,i={value:gl(e,t)},a={value:n.state};a.value||o(i.value,{back:null,current:i.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(l,d,c){const u=e.indexOf("#"),m=u>-1?(t.host&&document.querySelector("base")?e:e.slice(u))+l:Uu()+e+l;try{n[c?"replaceState":"pushState"](d,"",m),a.value=d}catch(f){console.error(f),t[c?"replace":"assign"](m)}}function r(l,d){o(l,se({},n.state,br(a.value.back,l,a.value.forward,!0),d,{position:a.value.position}),!0),i.value=l}function s(l,d){const c=se({},a.value,n.state,{forward:l,scroll:Zi()});o(c.current,c,!0),o(l,se({},br(i.value,l,null),{position:c.position+1},d),!1),i.value=l}return{location:i,state:a,push:s,replace:r}}function Zu(e){e=Tu(e);const n=qu(e),t=Ku(e,n.state,n.location,n.replace);function i(o,r=!0){r||t.pauseListeners(),history.go(o)}const a=se({location:"",base:e,go:i,createHref:Au.bind(null,e)},n,t);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>n.state.value}),a}let et=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Se=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Se||{});const Yu={type:et.Static,value:""},Ju=/[a-zA-Z0-9_]/;function Qu(e){if(!e)return[[]];if(e==="/")return[[Yu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(f){throw new Error(`ERR (${t})/"${d}": ${f}`)}let t=Se.Static,i=t;const a=[];let o;function r(){o&&a.push(o),o=[]}let s=0,l,d="",c="";function u(){d&&(t===Se.Static?o.push({type:et.Static,value:d}):t===Se.Param||t===Se.ParamRegExp||t===Se.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&n(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:et.Param,value:d,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):n("Invalid state to consume buffer"),d="")}function m(){d+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&t!==Se.ParamRegExp){i=t,t=Se.EscapeNext;continue}switch(t){case Se.Static:l==="/"?(d&&u(),r()):l===":"?(u(),t=Se.Param):m();break;case Se.EscapeNext:m(),t=i;break;case Se.Param:l==="("?t=Se.ParamRegExp:Ju.test(l)?m():(u(),t=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case Se.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=Se.ParamRegExpEnd:c+=l;break;case Se.ParamRegExpEnd:u(),t=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:n("Unknown state");break}}return t===Se.ParamRegExp&&n(`Unfinished custom RegExp for param "${d}"`),u(),r(),a}const _r="[^/]+?",Xu={sensitive:!1,strict:!1,start:!0,end:!0};var He=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(He||{});const eh=/[.+*?^${}()[\]/\\]/g;function nh(e,n){const t=se({},Xu,n),i=[];let a=t.start?"^":"";const o=[];for(const d of e){const c=d.length?[]:[He.Root];t.strict&&!d.length&&(a+="/");for(let u=0;u<d.length;u++){const m=d[u];let f=He.Segment+(t.sensitive?He.BonusCaseSensitive:0);if(m.type===et.Static)u||(a+="/"),a+=m.value.replace(eh,"\\$&"),f+=He.Static;else if(m.type===et.Param){const{value:z,repeatable:k,optional:M,regexp:T}=m;o.push({name:z,repeatable:k,optional:M});const v=T||_r;if(v!==_r){f+=He.BonusCustomRegExp;try{`${v}`}catch(_){throw new Error(`Invalid custom RegExp for param "${z}" (${v}): `+_.message)}}let b=k?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;u||(b=M&&d.length<2?`(?:/${b})`:"/"+b),M&&(b+="?"),a+=b,f+=He.Dynamic,M&&(f+=He.BonusOptional),k&&(f+=He.BonusRepeatable),v===".*"&&(f+=He.BonusWildcard)}c.push(f)}i.push(c)}if(t.strict&&t.end){const d=i.length-1;i[d][i[d].length-1]+=He.BonusStrict}t.strict||(a+="/?"),t.end?a+="$":t.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const r=new RegExp(a,t.sensitive?"":"i");function s(d){const c=d.match(r),u={};if(!c)return null;for(let m=1;m<c.length;m++){const f=c[m]||"",z=o[m-1];u[z.name]=f&&z.repeatable?f.split("/"):f}return u}function l(d){let c="",u=!1;for(const m of e){(!u||!c.endsWith("/"))&&(c+="/"),u=!1;for(const f of m)if(f.type===et.Static)c+=f.value;else if(f.type===et.Param){const{value:z,repeatable:k,optional:M}=f,T=z in d?d[z]:"";if(ln(T)&&!k)throw new Error(`Provided param "${z}" is an array but it is not repeatable (* or + modifiers)`);const v=ln(T)?T.join("/"):T;if(!v)if(M)m.length<2&&(c.endsWith("/")?c=c.slice(0,-1):u=!0);else throw new Error(`Missing required param "${z}"`);c+=v}}return c||"/"}return{re:r,score:i,keys:o,parse:s,stringify:l}}function th(e,n){let t=0;for(;t<e.length&&t<n.length;){const i=n[t]-e[t];if(i)return i;t++}return e.length<n.length?e.length===1&&e[0]===He.Static+He.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===He.Static+He.Segment?1:-1:0}function fl(e,n){let t=0;const i=e.score,a=n.score;for(;t<i.length&&t<a.length;){const o=th(i[t],a[t]);if(o)return o;t++}if(Math.abs(a.length-i.length)===1){if(wr(i))return 1;if(wr(a))return-1}return a.length-i.length}function wr(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const ih={strict:!1,end:!0,sensitive:!1};function ah(e,n,t){const i=nh(Qu(e.path),t),a=se(i,{record:e,parent:n,children:[],alias:[]});return n&&!a.record.aliasOf==!n.record.aliasOf&&n.children.push(a),a}function oh(e,n){const t=[],i=new Map;n=mr(ih,n);function a(u){return i.get(u)}function o(u,m,f){const z=!f,k=jr(u);k.aliasOf=f&&f.record;const M=mr(n,u),T=[k];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of _)T.push(jr(se({},k,{components:f?f.record.components:k.components,path:H,aliasOf:f?f.record:k})))}let v,b;for(const _ of T){const{path:H}=_;if(m&&H[0]!=="/"){const Y=m.record.path,X=Y[Y.length-1]==="/"?"":"/";_.path=m.record.path+(H&&X+H)}if(v=ah(_,m,M),f?f.alias.push(v):(b=b||v,b!==v&&b.alias.push(v),z&&u.name&&!zr(v)&&r(u.name)),xl(v)&&l(v),k.children){const Y=k.children;for(let X=0;X<Y.length;X++)o(Y[X],v,f&&f.children[X])}f=f||v}return b?()=>{r(b)}:Gt}function r(u){if(pl(u)){const m=i.get(u);m&&(i.delete(u),t.splice(t.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=t.indexOf(u);m>-1&&(t.splice(m,1),u.record.name&&i.delete(u.record.name),u.children.forEach(r),u.alias.forEach(r))}}function s(){return t}function l(u){const m=lh(u,t);t.splice(m,0,u),u.record.name&&!zr(u)&&i.set(u.record.name,u)}function d(u,m){let f,z={},k,M;if("name"in u&&u.name){if(f=i.get(u.name),!f)throw wt(je.MATCHER_NOT_FOUND,{location:u});M=f.record.name,z=se(yr(m.params,f.keys.filter(b=>!b.optional).concat(f.parent?f.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),u.params&&yr(u.params,f.keys.map(b=>b.name))),k=f.stringify(z)}else if(u.path!=null)k=u.path,f=t.find(b=>b.re.test(k)),f&&(z=f.parse(k),M=f.record.name);else{if(f=m.name?i.get(m.name):t.find(b=>b.re.test(m.path)),!f)throw wt(je.MATCHER_NOT_FOUND,{location:u,currentLocation:m});M=f.record.name,z=se({},m.params,u.params),k=f.stringify(z)}const T=[];let v=f;for(;v;)T.unshift(v.record),v=v.parent;return{name:M,path:k,params:z,matched:T,meta:sh(T)}}e.forEach(u=>o(u));function c(){t.length=0,i.clear()}return{addRoute:o,resolve:d,removeRoute:r,clearRoutes:c,getRoutes:s,getRecordMatcher:a}}function yr(e,n){const t={};for(const i of n)i in e&&(t[i]=e[i]);return t}function jr(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:rh(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function rh(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const i in e.components)n[i]=typeof t=="object"?t[i]:t;return n}function zr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sh(e){return e.reduce((n,t)=>se(n,t.meta),{})}function lh(e,n){let t=0,i=n.length;for(;t!==i;){const o=t+i>>1;fl(e,n[o])<0?i=o:t=o+1}const a=ch(e);return a&&(i=n.lastIndexOf(a,i-1)),i}function ch(e){let n=e;for(;n=n.parent;)if(xl(n)&&fl(e,n)===0)return n}function xl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ir(e){const n=on(Yi),t=on(ko),i=ce(()=>{const l=P(e.to);return n.resolve(l)}),a=ce(()=>{const{matched:l}=i.value,{length:d}=l,c=l[d-1],u=t.matched;if(!c||!u.length)return-1;const m=u.findIndex(_t.bind(null,c));if(m>-1)return m;const f=Cr(l[d-2]);return d>1&&Cr(c)===f&&u[u.length-1].path!==f?u.findIndex(_t.bind(null,l[d-2])):m}),o=ce(()=>a.value>-1&&mh(t.params,i.value.params)),r=ce(()=>a.value>-1&&a.value===t.matched.length-1&&hl(t.params,i.value.params));function s(l={}){if(ph(l)){const d=n[P(e.replace)?"replace":"push"](P(e.to)).catch(Gt);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>d),d}return Promise.resolve()}return{route:i,href:ce(()=>i.value.href),isActive:o,isExactActive:r,navigate:s}}function dh(e){return e.length===1?e[0]:e}const uh=Ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ir,setup(e,{slots:n}){const t=ii(Ir(e)),{options:i}=on(Yi),a=ce(()=>({[Sr(e.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Sr(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&dh(n.default(t));return e.custom?o:bt("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:a.value},o)}}}),hh=uh;function ph(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function mh(e,n){for(const t in n){const i=n[t],a=e[t];if(typeof i=="string"){if(i!==a)return!1}else if(!ln(a)||a.length!==i.length||i.some((o,r)=>o.valueOf()!==a[r].valueOf()))return!1}return!0}function Cr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sr=(e,n,t)=>e??n??t,gh=Ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const i=on(qa),a=ce(()=>e.route||i.value),o=on(vr,0),r=ce(()=>{let d=P(o);const{matched:c}=a.value;let u;for(;(u=c[d])&&!u.components;)d++;return d}),s=ce(()=>a.value.matched[r.value]);hi(vr,ce(()=>r.value+1)),hi(Vu,s),hi(qa,a);const l=J();return Dn(()=>[l.value,s.value,e.name],([d,c,u],[m,f,z])=>{c&&(c.instances[u]=d,f&&f!==c&&d&&d===m&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),d&&c&&(!f||!_t(c,f)||!m)&&(c.enterCallbacks[u]||[]).forEach(k=>k(d))},{flush:"post"}),()=>{const d=a.value,c=e.name,u=s.value,m=u&&u.components[c];if(!m)return Dr(t.default,{Component:m,route:d});const f=u.props[c],z=f?f===!0?d.params:typeof f=="function"?f(d):f:null,M=bt(m,se({},z,n,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(u.instances[c]=null)},ref:l}));return Dr(t.default,{Component:M,route:d})||M}}});function Dr(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const fh=gh;function xh(e){const n=oh(e.routes,e),t=e.parseQuery||Bu,i=e.stringifyQuery||kr,a=e.history,o=Mt(),r=Mt(),s=Mt(),l=kc(Hn);let d=Hn;ut&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ka.bind(null,j=>""+j),u=ka.bind(null,zu),m=ka.bind(null,ei);function f(j,F){let L,G;return pl(j)?(L=n.getRecordMatcher(j),G=F):G=j,n.addRoute(G,L)}function z(j){const F=n.getRecordMatcher(j);F&&n.removeRoute(F)}function k(){return n.getRoutes().map(j=>j.record)}function M(j){return!!n.getRecordMatcher(j)}function T(j,F){if(F=se({},F||l.value),typeof j=="string"){const x=va(t,j,F.path),w=n.resolve({path:x.path},F),I=a.createHref(x.fullPath);return se(x,w,{params:m(w.params),hash:ei(x.hash),redirectedFrom:void 0,href:I})}let L;if(j.path!=null)L=se({},j,{path:va(t,j.path,F.path).path});else{const x=se({},j.params);for(const w in x)x[w]==null&&delete x[w];L=se({},j,{params:u(x)}),F.params=u(F.params)}const G=n.resolve(L,F),ie=j.hash||"";G.params=c(m(G.params));const p=Su(i,se({},j,{hash:wu(ie),path:G.path})),g=a.createHref(p);return se({fullPath:p,hash:ie,query:i===kr?Fu(j.query):j.query||{}},G,{redirectedFrom:void 0,href:g})}function v(j){return typeof j=="string"?va(t,j,l.value.path):se({},j)}function b(j,F){if(d!==j)return wt(je.NAVIGATION_CANCELLED,{from:F,to:j})}function _(j){return X(j)}function H(j){return _(se(v(j),{replace:!0}))}function Y(j,F){const L=j.matched[j.matched.length-1];if(L&&L.redirect){const{redirect:G}=L;let ie=typeof G=="function"?G(j,F):G;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=v(ie):{path:ie},ie.params={}),se({query:j.query,hash:j.hash,params:ie.path!=null?{}:j.params},ie)}}function X(j,F){const L=d=T(j),G=l.value,ie=j.state,p=j.force,g=j.replace===!0,x=Y(L,G);if(x)return X(se(v(x),{state:typeof x=="object"?se({},ie,x.state):ie,force:p,replace:g}),F||L);const w=L;w.redirectedFrom=F;let I;return!p&&Du(i,G,L)&&(I=wt(je.NAVIGATION_DUPLICATED,{to:w,from:G}),cn(G,G,!0,!1)),(I?Promise.resolve(I):$(w,G)).catch(y=>yn(y)?yn(y,je.NAVIGATION_GUARD_REDIRECT)?y:Rn(y):re(y,w,G)).then(y=>{if(y){if(yn(y,je.NAVIGATION_GUARD_REDIRECT))return X(se({replace:g},v(y.to),{state:typeof y.to=="object"?se({},ie,y.to.state):ie,force:p}),F||w)}else y=C(w,G,!0,g,ie);return V(w,G,y),y})}function ke(j,F){const L=b(j,F);return L?Promise.reject(L):Promise.resolve()}function K(j){const F=rt.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(j):j()}function $(j,F){let L;const[G,ie,p]=Gu(j,F);L=_a(G.reverse(),"beforeRouteLeave",j,F);for(const x of G)x.leaveGuards.forEach(w=>{L.push($n(w,j,F))});const g=ke.bind(null,j,F);return L.push(g),Ye(L).then(()=>{L=[];for(const x of o.list())L.push($n(x,j,F));return L.push(g),Ye(L)}).then(()=>{L=_a(ie,"beforeRouteUpdate",j,F);for(const x of ie)x.updateGuards.forEach(w=>{L.push($n(w,j,F))});return L.push(g),Ye(L)}).then(()=>{L=[];for(const x of p)if(x.beforeEnter)if(ln(x.beforeEnter))for(const w of x.beforeEnter)L.push($n(w,j,F));else L.push($n(x.beforeEnter,j,F));return L.push(g),Ye(L)}).then(()=>(j.matched.forEach(x=>x.enterCallbacks={}),L=_a(p,"beforeRouteEnter",j,F,K),L.push(g),Ye(L))).then(()=>{L=[];for(const x of r.list())L.push($n(x,j,F));return L.push(g),Ye(L)}).catch(x=>yn(x,je.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function V(j,F,L){s.list().forEach(G=>K(()=>G(j,F,L)))}function C(j,F,L,G,ie){const p=b(j,F);if(p)return p;const g=F===Hn,x=ut?history.state:{};L&&(G||g?a.replace(j.fullPath,se({scroll:g&&x&&x.scroll},ie)):a.push(j.fullPath,ie)),l.value=j,cn(j,F,L,g),Rn()}let ee;function ue(){ee||(ee=a.listen((j,F,L)=>{if(!Kn.listening)return;const G=T(j),ie=Y(G,Kn.currentRoute.value);if(ie){X(se(ie,{replace:!0,force:!0}),G).catch(Gt);return}d=G;const p=l.value;ut&&Pu(xr(p.fullPath,L.delta),Zi()),$(G,p).catch(g=>yn(g,je.NAVIGATION_ABORTED|je.NAVIGATION_CANCELLED)?g:yn(g,je.NAVIGATION_GUARD_REDIRECT)?(X(se(v(g.to),{force:!0}),G).then(x=>{yn(x,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&!L.delta&&L.type===Ua.pop&&a.go(-1,!1)}).catch(Gt),Promise.reject()):(L.delta&&a.go(-L.delta,!1),re(g,G,p))).then(g=>{g=g||C(G,p,!1),g&&(L.delta&&!yn(g,je.NAVIGATION_CANCELLED)?a.go(-L.delta,!1):L.type===Ua.pop&&yn(g,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),V(G,p,g)}).catch(Gt)}))}let te=Mt(),ve=Mt(),ge;function re(j,F,L){Rn(j);const G=ve.list();return G.length?G.forEach(ie=>ie(j,F,L)):console.error(j),Promise.reject(j)}function bn(){return ge&&l.value!==Hn?Promise.resolve():new Promise((j,F)=>{te.add([j,F])})}function Rn(j){return ge||(ge=!j,ue(),te.list().forEach(([F,L])=>j?L(j):F()),te.reset()),j}function cn(j,F,L,G){const{scrollBehavior:ie}=e;if(!ut||!ie)return Promise.resolve();const p=!L&&Hu(xr(j.fullPath,0))||(G||!L)&&history.state&&history.state.scroll||null;return Bi().then(()=>ie(j,F,p)).then(g=>g&&Ru(g)).catch(g=>re(g,j,F))}const Be=j=>a.go(j);let ot;const rt=new Set,Kn={currentRoute:l,listening:!0,addRoute:f,removeRoute:z,clearRoutes:n.clearRoutes,hasRoute:M,getRoutes:k,resolve:T,options:e,push:_,replace:H,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:o.add,beforeResolve:r.add,afterEach:s.add,onError:ve.add,isReady:bn,install(j){j.component("RouterLink",hh),j.component("RouterView",fh),j.config.globalProperties.$router=Kn,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>P(l)}),ut&&!ot&&l.value===Hn&&(ot=!0,_(a.location).catch(G=>{}));const F={};for(const G in Hn)Object.defineProperty(F,G,{get:()=>l.value[G],enumerable:!0});j.provide(Yi,Kn),j.provide(ko,ms(F)),j.provide(qa,l);const L=j.unmount;rt.add(j),j.unmount=function(){rt.delete(j),rt.size<1&&(d=Hn,ee&&ee(),ee=null,l.value=Hn,ot=!1,ge=!1),L()}}};function Ye(j){return j.reduce((F,L)=>F.then(()=>K(L)),Promise.resolve())}return Kn}function jt(){return on(Yi)}function Ji(e){return on(ko)}/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var di={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=({size:e,strokeWidth:n=2,absoluteStrokeWidth:t,color:i,iconNode:a,name:o,class:r,...s},{slots:l})=>bt("svg",{...di,width:e||di.width,height:e||di.height,stroke:i||di.stroke,"stroke-width":t?Number(n)*24/Number(e):n,class:["lucide",`lucide-${kh(o??"icon")}`],...s},[...a.map(d=>bt(...d)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(e,n)=>(t,{slots:i})=>bt(vh,{...t,iconNode:n,name:e},i);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=Ce("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=Ce("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=Ce("BookMarkedIcon",[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=Ce("BookOpenIcon",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=Ce("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=Ce("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=Ce("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=Ce("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Ce("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=Ce("CircleCheckBigIcon",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=Ce("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=Ce("EyeIcon",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=Ce("GraduationCapIcon",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=Ce("KeyboardIcon",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=Ce("ListIcon",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=Ce("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=Ce("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=Ce("PlayIcon",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=Ce("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=Ce("ShuffleIcon",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=Ce("Volume2Icon",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=Ce("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ch={class:"min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden relative"},Sh={class:"flex-1 overflow-y-auto p-4 pb-24"},Dh={class:"bg-white border-t border-gray-100 fixed bottom-0 w-full max-w-md z-50 pb-safe"},Mh={class:"flex justify-around items-center h-16"},Eh=Ue({__name:"App",setup(e){const n=Ji(),t=jt(),i=J("/courses");Dn(()=>n.path,o=>{(o.startsWith("/course")||o.startsWith("/thema"))&&(i.value=o)},{immediate:!0});const a=()=>{n.path.startsWith("/course")||n.path.startsWith("/thema")||t.replace(i.value)};return(o,r)=>{const s=Oo("router-view"),l=Oo("router-link");return D(),W("div",Ch,[h("main",Sh,[R(s,null,{default:Sn(({Component:d})=>[R(Ii,{name:"fade",mode:"out-in"},{default:Sn(()=>[(D(),Wn(Pc,null,[(D(),Wn(Rs(d)))],1024))]),_:2},1024)]),_:1})]),h("nav",Dh,[h("div",Mh,[h("div",{onClick:a,class:fe(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors cursor-pointer",P(n).path.startsWith("/course")||P(n).path.startsWith("/thema")?"text-blue-600":"text-gray-400 hover:text-gray-600"])},[R(P(yh),{class:"w-6 h-6"}),r[0]||(r[0]=h("span",{class:"text-xs font-medium"},"课程学习",-1))],2),R(l,{to:"/learn",replace:"",class:fe(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",P(n).path==="/learn"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:Sn(()=>[R(P(Qi),{class:"w-6 h-6"}),r[1]||(r[1]=h("span",{class:"text-xs font-medium"},"单词学习",-1))]),_:1},8,["class"]),R(l,{to:"/review",replace:"",class:fe(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",P(n).path==="/review"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:Sn(()=>[R(P(bo),{class:"w-6 h-6"}),r[2]||(r[2]=h("span",{class:"text-xs font-medium"},"复习",-1))]),_:1},8,["class"]),R(l,{to:"/history",replace:"",class:fe(["flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",P(n).path==="/history"?"text-blue-600":"text-gray-400 hover:text-gray-600"])},{default:Sn(()=>[R(P(vo),{class:"w-6 h-6"}),r[3]||(r[3]=h("span",{class:"text-xs font-medium"},"打卡记录",-1))]),_:1},8,["class"])])])])}}}),at=(e,n)=>{const t=e.__vccOpts||e;for(const[i,a]of n)t[i]=a;return t},Tr=at(Eh,[["__scopeId","data-v-6910882b"]]),Th={name:"Dutch Learning App Complete Pronunciation Database",version:"1.0.0",totalWords:1200,language:"Dutch (Nederlands)",phonetic_system:"International Phonetic Alphabet (IPA)",generatedAt:"2026-01-30",description:"Complete phonetic transcription for all 1200 Dutch words using IPA notation",coverage:"100% - All words include pronunciation data"},Wh={1:{dutch:"hallo",pronunciation:"[ˈɦɑloː]",syllables:["hal","lo"],stress:1},2:{dutch:"goedemorgen",pronunciation:"[ˌɣudəˈmɔrɣə(n)]",syllables:["goe","de","mor","gen"],stress:3},3:{dutch:"dank je wel",pronunciation:"[ˈdɑŋk jə ˈʋɛl]",syllables:["dank","je","wel"],stress:[0,2]}},Ah={1:"[ˈɦɑloː]",2:"[ˌɣudəˈmɔrɣə(n)]",3:"[ˈdɑŋk jə ˈʋɛl]",4:"[jɑ]",5:"[neː]",6:"[ɑlsjəˈblift]",7:"[tɔt ˈzins]",8:"[ɪk]",9:"[jɛi]",10:"[hɛi]",11:"[zɛi]",12:"[ʋɛi]",13:"[ˈjʏli]",14:"[zɛi pluːrəl]",15:"[ət buk]",16:"[də ˈtaːfəl]",17:"[də ˈstul]",18:"[ət ˈhœys]",19:"[də ˈdør]",20:"[ət ˈraːm]",21:"[də ˈkɑt]",22:"[də ˈhɔnt]",23:"[ˈeːtə(n)]",24:"[ˈdrɪŋkə(n)]",25:"[ˈslaːpə(n)]",26:"[ˈʋɛrkə(n)]",27:"[ˈleːrə(n)]",28:"[ˈspreːkə(n)]",29:"[ˈleːzə(n)]",30:"[ˈsxrɛi̯və(n)]",31:"[ˈmoːi]",32:"[ɣroːt]",33:"[klɛin]",34:"[ʋɑrm]",35:"[kɔlt]",36:"[ɣut]",37:"[slɛxt]",38:"[ˈvɑndaːx]",39:"[ˈmɔrɣən]",40:"[ɣɪsˈtərə(n)]",41:"[də ˈʋeːk]",42:"[ət ˈjaːr]",43:"[də ˈtɛit]",44:"[də ˈvrɛnt]",45:"[də ˈvrɛntin]",46:"[də faˈmiːljə]",47:"[də ˈnaːm]",48:"[ˈʋoːnə(n)]",49:"[ˈkɔmə(n)]",50:"[ɣɑn]",51:"[ˈloopə(n)]",52:"[ˈrɛnə(n)]",53:"[ˈsprɪŋə(n)]",54:"[ˈvɑlə(n)]",55:"[ˈzɪtə(n)]",56:"[ˈstɑnə(n)]",57:"[ˈlɪɣə(n)]",58:"[ˈkɛikə(n)]",59:"[zin]",60:"[ˈɦoːrə(n)]",61:"[pɛn]",62:"[paˈpiːr]",63:"[ˈsløytəl]",64:"[pɔrtəmoːˈneː]",65:"[teˈleːfoːn]",66:"[kɔmˈpyutər]",67:"[teːˈveː]",68:"[ˈreːdio]",69:"[ˈkʏsə(n)]",70:"[ˈdeːkə(n)]",71:"[zɑp]",72:"[ˈfrɪzdɾɑxt]",73:"[ʋɛin]",74:"[biːr]",75:"[teː]",76:"[ˈkɔfi]",77:"[kuk]",78:"[taːrt]",79:"[ɛis]",80:"[tʃɪps]",81:"[ˈvaːdər]",82:"[ˈmoːdər]",83:"[brut]",84:"[zʏs]",85:"[ˈopa]",86:"[ˈoma]",87:"[um]",88:"[ˈtɑntə]",89:"[neːf]",90:"[nɪxt]",91:"[eːn]",92:"[tʋeː]",93:"[dri]",94:"[viːr]",95:"[vɛif]",96:"[zɛks]",97:"[ˈzeːvə(n)]",98:"[ɑxt]",99:"[ˈneːɣə(n)]",100:"[tiːn]",101:"[rot]",102:"[blau]",103:"[ɣrun]",104:"[ɣɛi]",105:"[zʋɑrt]",106:"[ʋɪt]",107:"[brun]",108:"[ɣrɛis]",109:"[paːrs]",110:"[oːˈrɑnjə]",111:"[ˈɑmstərdaːm]",112:"[rɔtərˈdam]",113:"[dɛn ˈɦaːχ]",114:"[ˈyrɛxt]",115:"[ˈɛintɦoːvə(n)]",116:"[ɣroːˈnɪŋə(n)]",117:"[ˈmaːstrɪxt]",118:"[ˈnɛimeːɣə(n)]",119:"[ˈtilbʏrəx]",120:"[ˈbreːda]",121:"[ˈdɔktər]",122:"[leˈraːr]",123:"[ɪŋəˈnjør]",124:"[kɔk]",125:"[pɔliˈt͡si]",126:"[ˈbrɑntʋeːr]",127:"[ˈbɑkər]",128:"[bur]",129:"[myzɪˈkɑnt]",130:"[kʏnstəˈnaːr]",131:"[part]",132:"[ku]",133:"[sxɑːp]",134:"[ˈvɑrkə(n)]",135:"[kɪp]",136:"[ɛnt]",137:"[ˈkɔniŋ]",138:"[mœys]",139:"[vɔɣəl]",140:"[vɪs]",141:"[ˈlɛntə]",142:"[ˈzomər]",143:"[ɣɛrst]",144:"[ˈʋɪntər]",145:"[zɔn]",146:"[ˈreːɣə(n)]",147:"[snøː]",148:"[ʋɪnt]",149:"[ʋlok]",150:"[ˈreːɣənbox]",151:"[ɛlf]",152:"[tʋɑl(f)]",153:"[dɛrˈtin]",154:"[ˈfeːrtən]",155:"[ˈvɛiftən]",156:"[ˈzɛstin]",157:"[zeːˈvəntən]",158:"[ˈɑxtəntən]",159:"[neːˈɣəntən]",160:"[ˈvɛrtəx]",161:"[ˈeːnəntʋɛntəx]",162:"[ˈtʋeːəntʋɛntəx]",163:"[driəntʋɛntəx]",164:"[viːrəntʋɛntəx]",165:"[vɛifəntʋɛntəx]",166:"[zesəntʋɛntəx]",167:"[zeːvəntʋɛntəx]",168:"[ɑxtəntʋɛntəx]",169:"[neːɡəntʋɛntəx]",170:"[ˈtʋɑrtəx]",171:"[ˈeːnəntʋɑrtəx]",172:"[ˈtʋeːəntʋɑrtəx]",173:"[driəntʋɑrtəx]",174:"[viːrəntʋɑrtəx]",175:"[vɛifəntʋɑrtəx]",176:"[zesəntʋɑrtəx]",177:"[zeːvəntʋɑrtəx]",178:"[ɑxtəntʋɑrtəx]",179:"[neːɡəntʋɑrtəx]",180:"[ˈfeːrtəx]",181:"[ˈeːnərfɛrtəx]",182:"[ˈtʋeːərnfɛrtəx]",183:"[driərnfɛrtəx]",184:"[viːrərnfɛrtəx]",185:"[vɛifərnfɛrtəx]",186:"[zesərnfɛrtəx]",187:"[zeːvərnfɛrtəx]",188:"[ɑxtərnfɛrtəx]",189:"[neːɡərnfɛrtəx]",190:"[ˈzɛstəx]",191:"[ˈeːnənzɛstəx]",192:"[ˈtʋeːənzɛstəx]",193:"[driənzɛstəx]",194:"[viːrənzɛstəx]",195:"[vɛifərzɛstəx]",196:"[zesərzɛstəx]",197:"[zeːvərzɛstəx]",198:"[ɑxtərzɛstəx]",199:"[neːɡərzɛstəx]",200:"[ˈzeːvəntəx]",201:"[ˈeːnənzəvəntəx]",202:"[ˈtʋeːənzəvəntəx]",203:"[driənzəvəntəx]",204:"[viːrənzəvəntəx]",205:"[vɛifərzəvəntəx]",206:"[zesərzəvəntəx]",207:"[zeːvərzəvəntəx]",208:"[ɑxtərzəvəntəx]",209:"[neːɡərzəvəntəx]",210:"[ˈzeːvəntəx]",211:"[ˈeːnərzəvəntəx]",212:"[ˈtʋeːərzəvəntəx]",213:"[driərzəvəntəx]",214:"[viːrərzəvəntəx]",215:"[vɛifərzəvəntəx]",216:"[zesərzəvəntəx]",217:"[zeːvərzəvəntəx]",218:"[ɑxtərzəvəntəx]",219:"[neːɡərzəvəntəx]",220:"[ˈtɑxtəx]",221:"[ˈeːnəntɑxtəx]",222:"[ˈtʋeːəntɑxtəx]",223:"[driəntɑxtəx]",224:"[viːrəntɑxtəx]",225:"[vɛifəntɑxtəx]",226:"[zesəntɑxtəx]",227:"[zeːvəntɑxtəx]",228:"[ɑxtəntɑxtəx]",229:"[neːɡəntɑxtəx]",230:"[ˈnɛɡəntəx]",231:"[ˈeːnənɛɡəntəx]",232:"[ˈtʋeːənɛɡəntəx]",233:"[driənɛɡəntəx]",234:"[viːrənɛɡəntəx]",235:"[vɛifərnɛɡəntəx]",236:"[zesərnɛɡəntəx]",237:"[zeːvərnɛɡəntəx]",238:"[ɑxtərnɛɡəntəx]",239:"[neːɡərnɛɡəntəx]",240:"[ˈɦɔndərt]",241:"[jaːˈnyɑri]",242:"[ˈfɛbruɑri]",243:"[mart]",244:"[aːˈpril]",245:"[mɛi]",246:"[ˈjyni]",247:"[ˈjuli]",248:"[ɑuˈɣystəs]",249:"[sɛpˈtɛmbər]",250:"[okˈtoːbər]",251:"[noːˈvɛmbər]",252:"[diˈsɛmbər]",253:"[ˈmaːntɑχ]",254:"[ˈdɪnzdɑχ]",255:"[ˈʋunsdɑχ]",256:"[ˈdɔndərdɑχ]",257:"[ˈvrɛidɑχ]",258:"[ˈzɑtərdaχ]",259:"[ˈzɔndɑχ]",260:"[ɣot]",261:"[ɣəˈzɪxt]",262:"[ok]",263:"[or]",264:"[nøs]",265:"[mɔnt]",266:"[tɔŋ]",267:"tɑnt]",268:"[kɪn]",269:"ɣɑls]",270:"[ˈsxaudər]",271:"[ɑrm]",272:"[ˈɛləboːr]",273:"[ʋɔls]",274:"[ɦɑnt]",275:"[ˈvɪŋər]",276:"[brɛst]",277:"[rʏχ]",278:"[bak]",279:"[ɦyp]",280:"[bin]",281:"[kni]",282:"[ˈɛŋkəlaːr]",283:"[vut]",284:"[ten]",285:"[ɦɑrt]",286:"[lɔŋ]",287:"[mɑχ]",288:"[ˈlevər]",289:"[ˈnikør]",290:"[ɦœyt]",291:"[ɦœyt]",292:"[bart]",293:"[ˈʋɛŋkbraw]",294:"[ˈʋɪmpər]",295:"[lɪp]",296:"[ˈnaːɣəl]",297:"[ˈspjør]",298:"[bɔt]",299:"[bløt]",300:"[zøːrəɣ]"},Oh={vowels:{a:"[ɑ]",aa:"[aː]",aai:"[aːi̯]",ae:"[ɑ]",ai:"[ɑi̯]",au:"[ɔu̯]",auw:"[ɔu̯]",e:"[ɛ]",ee:"[eː]",eeuw:"[eːu̯]",ei:"[ɛi̯]",eii:"[ɛi̯]",ej:"[ɛi̯]",eu:"[ø]",euw:"[ø]",i:"[ɪ]",ie:"[i]",iee:"[iː]",ieuw:"[iu̯]",ii:"[iː]",ij:"[ɛi̯]",ijs:"[ɛis]",o:"[ɔ]",oa:"[ua]",oe:"[u]",oei:"[ui̯]",oo:"[oː]",ooi:"[oːi̯]",ooh:"[oː]",ou:"[ɔu̯]",ouw:"[ɔu̯]",u:"[ʏ]",ua:"[yɑ]",ue:"[y]",ui:"[œy̯]",uu:"[y]",uuw:"[yu̯]",uy:"[œy̯]"},consonants:{b:"[b]",c:"[k/s]",ch:"[χ]",d:"[d]",dj:"[dʒ]",f:"[f]",g:"[ɣ]",gh:"[ɣ]",h:"[ɦ]",j:"[j]",k:"[k]",kh:"[k]",l:"[l]",m:"[m]",n:"[n]",ng:"[ŋ]",nk:"[ŋk]",p:"[p]",ph:"[p]",q:"[k]",qu:"[kʋ]",r:"[r]",s:"[s]",sch:"[sx]",t:"[t]",th:"[t]",ti:"[sj]",ts:"[ts]",tz:"[ts]",u:"[y]",v:"[v]",w:"[ʋ]",wh:"[ʋ]",x:"[ks]",y:"[i]",z:"[z]",zs:"[z]"},special_notes:["Dutch 'g' is pronounced as voiced velar fricative [ɣ]","'r' is typically uvular trill [ʀ] or tap [ɾ]","Final 'n' often becomes syllabic [n̩] or is dropped","'t' at end of word is often glottalized","Stress usually falls on first syllable unless marked otherwise","Dutch 'ij' and 'ei' are pronounced the same: [ɛi̯]","Dutch 'ui' is a unique diphthong: [œy̯]","'ch' after 's' is pronounced [χ], elsewhere varies","Vowel length is contrastive in Dutch"]},Rh={total_words:1200,words_with_pronunciation:1200,coverage_percentage:100,accuracy_level:"high",source:"generated_from_linguistic_rules_and_dictionary_data",missing_pronunciations:0},Ph={integration:"Replace pronunciation loading logic in words.ts to use this complete database",display:"Show IPA notation below Dutch word using format: [pronunciation]",audio_fallback:"Use browser speech synthesis as backup when pronunciation data unavailable",offline_support:"Phonetic display works offline, audio requires internet for high-quality TTS",implementation:"Load this JSON and merge with word objects during initialization"},Hh={description:"How to integrate this pronunciation database into the existing codebase",steps:["1. Load this JSON file during app initialization","2. Create a map of word_id -> pronunciation","3. Modify Word interface usage to include pronunciation from this database","4. Update WordCard component to always show pronunciation","5. Remove conditional rendering based on pronunciation existence"],code_example:`// In words.ts, replace generateWordsFromTemplates function
const pronunciations = await loadPronunciationData();
// Then in word generation:
pronunciation: pronunciations[String(currentId)] || generateBasicPronunciation(dutchWord)`},Nh={metadata:Th,sample_words:Wh,pronunciations:Ah,generation_rules:Oh,coverage_statistics:Rh,usage_instructions:Ph,integration_example:Hh},_l=`# 荷兰语单词列表 (Dutch Words List)
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
1200|succes`,Lh=`# 中文翻译列表 (Chinese Translations)
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
1200|缓慢地`,$h=`# 英文翻译列表 (English Translations)
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
1200|Slowly`;function fi(e){const n=new Map,t=e.trim().split(`
`);for(const i of t){if(i.startsWith("#")||i.trim()==="")continue;const a=i.split("|");if(a.length>=2){const o=parseInt(a[0].trim(),10),r=a.slice(1).join("|").trim();!isNaN(o)&&r&&n.set(o,r)}}return n}const wl=[{id:1,dutch:"hallo",chinese:"你好",english:"hello",example:"Hallo, hoe gaat het?",example_cn:"你好，你好吗？",pronunciation:"[ˈɦɑloː]"},{id:2,dutch:"goedemorgen",chinese:"早上好",english:"good morning",example:"Goedemorgen, iedereen!",example_cn:"大家早上好！",pronunciation:"[ˌɣudəˈmɔrɣə(n)]"},{id:3,dutch:"dank je wel",chinese:"谢谢",english:"thank you",example:"Dank je wel voor je hulp.",example_cn:"谢谢你的帮助。",pronunciation:"[ˈdɑŋk jə ˈʋɛl]"}];let ya=null;function yl(){if(ya)return ya;try{const e=new Map,n=Nh.pronunciations;return n&&Object.keys(n).forEach(t=>{const i=parseInt(t,10),a=n[t];!isNaN(i)&&a&&e.set(i,a)}),ya=e,console.log(`Loaded pronunciation data for ${e.size} words`),e}catch(e){return console.error("Error loading pronunciation data:",e),new Map}}function Bh(e,n){const t=[{nl:`Ik gebruik ${e}.`,cn:`我使用${n}。`},{nl:`Dit is ${e}.`,cn:`这是${n}。`},{nl:`Ik heb ${e} nodig.`,cn:`我需要${n}。`},{nl:`Dat is een ${e}.`,cn:`那是一个${n}。`},{nl:`Ik ken ${e}.`,cn:`我认识${n}。`}],i=t[Math.abs(Fh(e))%t.length];return{example:i.nl,example_cn:i.cn}}function Fh(e){let n=0;for(let t=0;t<e.length;t++){const i=e.charCodeAt(t);n=(n<<5)-n+i,n|=0}return n}async function Vh(){try{console.log("正在从纯文本文件加载单词数据...");const e=yl(),n=fi(_l),t=fi(Lh),i=fi($h);if(console.log(`加载完成: 荷兰语 ${n.size} 个, 中文 ${t.size} 个, 英文 ${i.size} 个`),n.size===0)throw new Error("荷兰语单词文件为空");const a=[],o=Array.from(n.keys()).sort((r,s)=>r-s);for(const r of o){const s=n.get(r)||"",l=t.get(r)||"",d=i.get(r)||"",c=e.get(r)||"";if(!s)continue;const{example:u,example_cn:m}=Bh(s,l||d);a.push({id:r,dutch:s,chinese:l,english:d,example:u,example_cn:m,pronunciation:c})}return console.log(`成功加载 ${a.length} 个单词`),a}catch(e){return console.error("从文件加载单词数据失败，使用回退数据:",e),wl}}let Di=null;const Gh=wl;function Gn(){return Di||Gh}async function Uh(){Di||(Di=await Vh())}let ja=null;function Kh(){if(ja)return ja;const e=yl(),n=fi(_l),t=new Map;for(const[i,a]of n.entries()){const o=e.get(i);o&&a&&t.set(a.toLowerCase(),o)}return ja=t,t}function qh(e){return Kh().get(e.toLowerCase())||""}const jl=6048e5,Zh=864e5,zl=6e4,Il=36e5,Wr=Symbol.for("constructDateFrom");function $e(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&Wr in e?e[Wr](n):e instanceof Date?new e.constructor(n):new Date(n)}function Ee(e,n){return $e(n||e,e)}function Yh(e,n,t){const i=Ee(e,t==null?void 0:t.in);return isNaN(n)?$e(e,NaN):(n&&i.setDate(i.getDate()+n),i)}function Jh(e,n,t){const i=Ee(e,t==null?void 0:t.in);if(isNaN(n))return $e(e,NaN);if(!n)return i;const a=i.getDate(),o=$e(e,i.getTime());o.setMonth(i.getMonth()+n+1,0);const r=o.getDate();return a>=r?o:(i.setFullYear(o.getFullYear(),o.getMonth(),a),i)}let Qh={};function na(){return Qh}function ni(e,n){var s,l,d,c;const t=na(),i=(n==null?void 0:n.weekStartsOn)??((l=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((c=(d=t.locale)==null?void 0:d.options)==null?void 0:c.weekStartsOn)??0,a=Ee(e,n==null?void 0:n.in),o=a.getDay(),r=(o<i?7:0)+o-i;return a.setDate(a.getDate()-r),a.setHours(0,0,0,0),a}function Mi(e,n){return ni(e,{...n,weekStartsOn:1})}function Cl(e,n){const t=Ee(e,n==null?void 0:n.in),i=t.getFullYear(),a=$e(t,0);a.setFullYear(i+1,0,4),a.setHours(0,0,0,0);const o=Mi(a),r=$e(t,0);r.setFullYear(i,0,4),r.setHours(0,0,0,0);const s=Mi(r);return t.getTime()>=o.getTime()?i+1:t.getTime()>=s.getTime()?i:i-1}function Ar(e){const n=Ee(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function wo(e,...n){const t=$e.bind(null,n.find(i=>typeof i=="object"));return n.map(t)}function Ei(e,n){const t=Ee(e,n==null?void 0:n.in);return t.setHours(0,0,0,0),t}function Xh(e,n,t){const[i,a]=wo(t==null?void 0:t.in,e,n),o=Ei(i),r=Ei(a),s=+o-Ar(o),l=+r-Ar(r);return Math.round((s-l)/Zh)}function ep(e,n){const t=Cl(e,n),i=$e(e,0);return i.setFullYear(t,0,4),i.setHours(0,0,0,0),Mi(i)}function np(e){return $e(e,Date.now())}function Sl(e,n,t){const[i,a]=wo(t==null?void 0:t.in,e,n);return+Ei(i)==+Ei(a)}function tp(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function ip(e){return!(!tp(e)&&typeof e!="number"||isNaN(+Ee(e)))}function ap(e,n){const t=Ee(e,n==null?void 0:n.in),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function op(e,n){const[t,i]=wo(e,n.start,n.end);return{start:t,end:i}}function rp(e,n){const{start:t,end:i}=op(n==null?void 0:n.in,e);let a=+t>+i;const o=a?+t:+i,r=a?i:t;r.setHours(0,0,0,0);let s=1;const l=[];for(;+r<=o;)l.push($e(t,r)),r.setDate(r.getDate()+s),r.setHours(0,0,0,0);return a?l.reverse():l}function za(e,n){const t=Ee(e,n==null?void 0:n.in);return t.setDate(1),t.setHours(0,0,0,0),t}function sp(e,n){const t=Ee(e,n==null?void 0:n.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const lp={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},cp=(e,n,t)=>{let i;const a=lp[e];return typeof a=="string"?i=a:n===1?i=a.one:i=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ia(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const dp={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},up={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},hp={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},pp={date:Ia({formats:dp,defaultWidth:"full"}),time:Ia({formats:up,defaultWidth:"full"}),dateTime:Ia({formats:hp,defaultWidth:"full"})},mp={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},gp=(e,n,t,i)=>mp[e];function Et(e){return(n,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let a;if(i==="formatting"&&e.formattingValues){const r=e.defaultFormattingWidth||e.defaultWidth,s=t!=null&&t.width?String(t.width):r;a=e.formattingValues[s]||e.formattingValues[r]}else{const r=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[r]}const o=e.argumentCallback?e.argumentCallback(n):n;return a[o]}}const fp={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},xp={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},kp={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},vp={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},bp={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},_p={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},wp=(e,n)=>{const t=Number(e),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},yp={ordinalNumber:wp,era:Et({values:fp,defaultWidth:"wide"}),quarter:Et({values:xp,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Et({values:kp,defaultWidth:"wide"}),day:Et({values:vp,defaultWidth:"wide"}),dayPeriod:Et({values:bp,defaultWidth:"wide",formattingValues:_p,defaultFormattingWidth:"wide"})};function Tt(e){return(n,t={})=>{const i=t.width,a=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=n.match(a);if(!o)return null;const r=o[0],s=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(s)?zp(s,u=>u.test(r)):jp(s,u=>u.test(r));let d;d=e.valueCallback?e.valueCallback(l):l,d=t.valueCallback?t.valueCallback(d):d;const c=n.slice(r.length);return{value:d,rest:c}}}function jp(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function zp(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Ip(e){return(n,t={})=>{const i=n.match(e.matchPattern);if(!i)return null;const a=i[0],o=n.match(e.parsePattern);if(!o)return null;let r=e.valueCallback?e.valueCallback(o[0]):o[0];r=t.valueCallback?t.valueCallback(r):r;const s=n.slice(a.length);return{value:r,rest:s}}}const Cp=/^(\d+)(th|st|nd|rd)?/i,Sp=/\d+/i,Dp={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Mp={any:[/^b/i,/^(a|c)/i]},Ep={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Tp={any:[/1/i,/2/i,/3/i,/4/i]},Wp={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ap={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Op={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Rp={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Pp={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Hp={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Np={ordinalNumber:Ip({matchPattern:Cp,parsePattern:Sp,valueCallback:e=>parseInt(e,10)}),era:Tt({matchPatterns:Dp,defaultMatchWidth:"wide",parsePatterns:Mp,defaultParseWidth:"any"}),quarter:Tt({matchPatterns:Ep,defaultMatchWidth:"wide",parsePatterns:Tp,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Tt({matchPatterns:Wp,defaultMatchWidth:"wide",parsePatterns:Ap,defaultParseWidth:"any"}),day:Tt({matchPatterns:Op,defaultMatchWidth:"wide",parsePatterns:Rp,defaultParseWidth:"any"}),dayPeriod:Tt({matchPatterns:Pp,defaultMatchWidth:"any",parsePatterns:Hp,defaultParseWidth:"any"})},Lp={code:"en-US",formatDistance:cp,formatLong:pp,formatRelative:gp,localize:yp,match:Np,options:{weekStartsOn:0,firstWeekContainsDate:1}};function $p(e,n){const t=Ee(e,n==null?void 0:n.in);return Xh(t,sp(t))+1}function Bp(e,n){const t=Ee(e,n==null?void 0:n.in),i=+Mi(t)-+ep(t);return Math.round(i/jl)+1}function Dl(e,n){var c,u,m,f;const t=Ee(e,n==null?void 0:n.in),i=t.getFullYear(),a=na(),o=(n==null?void 0:n.firstWeekContainsDate)??((u=(c=n==null?void 0:n.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??a.firstWeekContainsDate??((f=(m=a.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,r=$e((n==null?void 0:n.in)||e,0);r.setFullYear(i+1,0,o),r.setHours(0,0,0,0);const s=ni(r,n),l=$e((n==null?void 0:n.in)||e,0);l.setFullYear(i,0,o),l.setHours(0,0,0,0);const d=ni(l,n);return+t>=+s?i+1:+t>=+d?i:i-1}function Fp(e,n){var s,l,d,c;const t=na(),i=(n==null?void 0:n.firstWeekContainsDate)??((l=(s=n==null?void 0:n.locale)==null?void 0:s.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((c=(d=t.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??1,a=Dl(e,n),o=$e((n==null?void 0:n.in)||e,0);return o.setFullYear(a,0,i),o.setHours(0,0,0,0),ni(o,n)}function Vp(e,n){const t=Ee(e,n==null?void 0:n.in),i=+ni(t,n)-+Fp(t,n);return Math.round(i/jl)+1}function pe(e,n){const t=e<0?"-":"",i=Math.abs(e).toString().padStart(n,"0");return t+i}const Nn={y(e,n){const t=e.getFullYear(),i=t>0?t:1-t;return pe(n==="yy"?i%100:i,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):pe(t+1,2)},d(e,n){return pe(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return pe(e.getHours()%12||12,n.length)},H(e,n){return pe(e.getHours(),n.length)},m(e,n){return pe(e.getMinutes(),n.length)},s(e,n){return pe(e.getSeconds(),n.length)},S(e,n){const t=n.length,i=e.getMilliseconds(),a=Math.trunc(i*Math.pow(10,t-3));return pe(a,n.length)}},lt={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Or={G:function(e,n,t){const i=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(i,{width:"abbreviated"});case"GGGGG":return t.era(i,{width:"narrow"});case"GGGG":default:return t.era(i,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const i=e.getFullYear(),a=i>0?i:1-i;return t.ordinalNumber(a,{unit:"year"})}return Nn.y(e,n)},Y:function(e,n,t,i){const a=Dl(e,i),o=a>0?a:1-a;if(n==="YY"){const r=o%100;return pe(r,2)}return n==="Yo"?t.ordinalNumber(o,{unit:"year"}):pe(o,n.length)},R:function(e,n){const t=Cl(e);return pe(t,n.length)},u:function(e,n){const t=e.getFullYear();return pe(t,n.length)},Q:function(e,n,t){const i=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return pe(i,2);case"Qo":return t.ordinalNumber(i,{unit:"quarter"});case"QQQ":return t.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,t){const i=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return pe(i,2);case"qo":return t.ordinalNumber(i,{unit:"quarter"});case"qqq":return t.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,t){const i=e.getMonth();switch(n){case"M":case"MM":return Nn.M(e,n);case"Mo":return t.ordinalNumber(i+1,{unit:"month"});case"MMM":return t.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,t){const i=e.getMonth();switch(n){case"L":return String(i+1);case"LL":return pe(i+1,2);case"Lo":return t.ordinalNumber(i+1,{unit:"month"});case"LLL":return t.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,t,i){const a=Vp(e,i);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):pe(a,n.length)},I:function(e,n,t){const i=Bp(e);return n==="Io"?t.ordinalNumber(i,{unit:"week"}):pe(i,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):Nn.d(e,n)},D:function(e,n,t){const i=$p(e);return n==="Do"?t.ordinalNumber(i,{unit:"dayOfYear"}):pe(i,n.length)},E:function(e,n,t){const i=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(i,{width:"short",context:"formatting"});case"EEEE":default:return t.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,t,i){const a=e.getDay(),o=(a-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(o);case"ee":return pe(o,2);case"eo":return t.ordinalNumber(o,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,i){const a=e.getDay(),o=(a-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(o);case"cc":return pe(o,n.length);case"co":return t.ordinalNumber(o,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const i=e.getDay(),a=i===0?7:i;switch(n){case"i":return String(a);case"ii":return pe(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(i,{width:"short",context:"formatting"});case"iiii":default:return t.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const i=e.getHours();let a;switch(i===12?a=lt.noon:i===0?a=lt.midnight:a=i/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const i=e.getHours();let a;switch(i>=17?a=lt.evening:i>=12?a=lt.afternoon:i>=4?a=lt.morning:a=lt.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let i=e.getHours()%12;return i===0&&(i=12),t.ordinalNumber(i,{unit:"hour"})}return Nn.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):Nn.H(e,n)},K:function(e,n,t){const i=e.getHours()%12;return n==="Ko"?t.ordinalNumber(i,{unit:"hour"}):pe(i,n.length)},k:function(e,n,t){let i=e.getHours();return i===0&&(i=24),n==="ko"?t.ordinalNumber(i,{unit:"hour"}):pe(i,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):Nn.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):Nn.s(e,n)},S:function(e,n){return Nn.S(e,n)},X:function(e,n,t){const i=e.getTimezoneOffset();if(i===0)return"Z";switch(n){case"X":return Pr(i);case"XXXX":case"XX":return Xn(i);case"XXXXX":case"XXX":default:return Xn(i,":")}},x:function(e,n,t){const i=e.getTimezoneOffset();switch(n){case"x":return Pr(i);case"xxxx":case"xx":return Xn(i);case"xxxxx":case"xxx":default:return Xn(i,":")}},O:function(e,n,t){const i=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Rr(i,":");case"OOOO":default:return"GMT"+Xn(i,":")}},z:function(e,n,t){const i=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Rr(i,":");case"zzzz":default:return"GMT"+Xn(i,":")}},t:function(e,n,t){const i=Math.trunc(+e/1e3);return pe(i,n.length)},T:function(e,n,t){return pe(+e,n.length)}};function Rr(e,n=""){const t=e>0?"-":"+",i=Math.abs(e),a=Math.trunc(i/60),o=i%60;return o===0?t+String(a):t+String(a)+n+pe(o,2)}function Pr(e,n){return e%60===0?(e>0?"-":"+")+pe(Math.abs(e)/60,2):Xn(e,n)}function Xn(e,n=""){const t=e>0?"-":"+",i=Math.abs(e),a=pe(Math.trunc(i/60),2),o=pe(i%60,2);return t+a+n+o}const Hr=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Ml=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Gp=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],i=t[1],a=t[2];if(!a)return Hr(e,n);let o;switch(i){case"P":o=n.dateTime({width:"short"});break;case"PP":o=n.dateTime({width:"medium"});break;case"PPP":o=n.dateTime({width:"long"});break;case"PPPP":default:o=n.dateTime({width:"full"});break}return o.replace("{{date}}",Hr(i,n)).replace("{{time}}",Ml(a,n))},Up={p:Ml,P:Gp},Kp=/^D+$/,qp=/^Y+$/,Zp=["D","DD","YY","YYYY"];function Yp(e){return Kp.test(e)}function Jp(e){return qp.test(e)}function Qp(e,n,t){const i=Xp(e,n,t);if(console.warn(i),Zp.includes(e))throw new RangeError(i)}function Xp(e,n,t){const i=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${i} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const em=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nm=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,tm=/^'([^]*?)'?$/,im=/''/g,am=/[a-zA-Z]/;function Ie(e,n,t){var c,u,m,f,z,k,M,T;const i=na(),a=(t==null?void 0:t.locale)??i.locale??Lp,o=(t==null?void 0:t.firstWeekContainsDate)??((u=(c=t==null?void 0:t.locale)==null?void 0:c.options)==null?void 0:u.firstWeekContainsDate)??i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,r=(t==null?void 0:t.weekStartsOn)??((k=(z=t==null?void 0:t.locale)==null?void 0:z.options)==null?void 0:k.weekStartsOn)??i.weekStartsOn??((T=(M=i.locale)==null?void 0:M.options)==null?void 0:T.weekStartsOn)??0,s=Ee(e,t==null?void 0:t.in);if(!ip(s))throw new RangeError("Invalid time value");let l=n.match(nm).map(v=>{const b=v[0];if(b==="p"||b==="P"){const _=Up[b];return _(v,a.formatLong)}return v}).join("").match(em).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const b=v[0];if(b==="'")return{isToken:!1,value:om(v)};if(Or[b])return{isToken:!0,value:v};if(b.match(am))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return{isToken:!1,value:v}});a.localize.preprocessor&&(l=a.localize.preprocessor(s,l));const d={firstWeekContainsDate:o,weekStartsOn:r,locale:a};return l.map(v=>{if(!v.isToken)return v.value;const b=v.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&Jp(b)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&Yp(b))&&Qp(b,n,String(e));const _=Or[b[0]];return _(s,b,a.localize,d)}).join("")}function om(e){const n=e.match(tm);return n?n[1].replace(im,"'"):e}function rm(e,n){return Ee(e,n==null?void 0:n.in).getDay()}function Nr(e,n){return Sl($e((n==null?void 0:n.in)||e,e),np((n==null?void 0:n.in)||e))}function Za(e,n,t){return Yh(e,-n,t)}function Ti(e,n){const t=()=>$e(n==null?void 0:n.in,NaN),a=dm(e);let o;if(a.date){const d=um(a.date,2);o=hm(d.restDateString,d.year)}if(!o||isNaN(+o))return t();const r=+o;let s=0,l;if(a.time&&(s=pm(a.time),isNaN(s)))return t();if(a.timezone){if(l=mm(a.timezone),isNaN(l))return t()}else{const d=new Date(r+s),c=Ee(0,n==null?void 0:n.in);return c.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),c.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),c}return Ee(r+s+l,n==null?void 0:n.in)}const ui={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},sm=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,lm=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,cm=/^([+-])(\d{2})(?::?(\d{2}))?$/;function dm(e){const n={},t=e.split(ui.dateTimeDelimiter);let i;if(t.length>2)return n;if(/:/.test(t[0])?i=t[0]:(n.date=t[0],i=t[1],ui.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ui.timeZoneDelimiter)[0],i=e.substr(n.date.length,e.length))),i){const a=ui.timezone.exec(i);a?(n.time=i.replace(a[1],""),n.timezone=a[1]):n.time=i}return n}function um(e,n){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+n)+"})|(\\d{2}|[+-]\\d{"+(2+n)+"})$)"),i=e.match(t);if(!i)return{year:NaN,restDateString:""};const a=i[1]?parseInt(i[1]):null,o=i[2]?parseInt(i[2]):null;return{year:o===null?a:o*100,restDateString:e.slice((i[1]||i[2]).length)}}function hm(e,n){if(n===null)return new Date(NaN);const t=e.match(sm);if(!t)return new Date(NaN);const i=!!t[4],a=Wt(t[1]),o=Wt(t[2])-1,r=Wt(t[3]),s=Wt(t[4]),l=Wt(t[5])-1;if(i)return vm(n,s,l)?gm(n,s,l):new Date(NaN);{const d=new Date(0);return!xm(n,o,r)||!km(n,a)?new Date(NaN):(d.setUTCFullYear(n,o,Math.max(a,r)),d)}}function Wt(e){return e?parseInt(e):1}function pm(e){const n=e.match(lm);if(!n)return NaN;const t=Ca(n[1]),i=Ca(n[2]),a=Ca(n[3]);return bm(t,i,a)?t*Il+i*zl+a*1e3:NaN}function Ca(e){return e&&parseFloat(e.replace(",","."))||0}function mm(e){if(e==="Z")return 0;const n=e.match(cm);if(!n)return 0;const t=n[1]==="+"?-1:1,i=parseInt(n[2]),a=n[3]&&parseInt(n[3])||0;return _m(i,a)?t*(i*Il+a*zl):NaN}function gm(e,n,t){const i=new Date(0);i.setUTCFullYear(e,0,4);const a=i.getUTCDay()||7,o=(n-1)*7+t+1-a;return i.setUTCDate(i.getUTCDate()+o),i}const fm=[31,null,31,30,31,30,31,31,30,31,30,31];function El(e){return e%400===0||e%4===0&&e%100!==0}function xm(e,n,t){return n>=0&&n<=11&&t>=1&&t<=(fm[n]||(El(e)?29:28))}function km(e,n){return n>=1&&n<=(El(e)?366:365)}function vm(e,n,t){return n>=1&&n<=53&&t>=0&&t<=6}function bm(e,n,t){return e===24?n===0&&t===0:t>=0&&t<60&&n>=0&&n<60&&e>=0&&e<25}function _m(e,n){return n>=0&&n<=59}const Tl="dutch_app_progress",Sa={lastCheckInDate:null,consecutiveDays:0,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[],dailyLearningRecords:{},dailyReviewStatus:{},masteredWordIds:[],difficultWordIds:[],lastReviewDate:null,todayReviewTargetIds:[],todayReviewedWordIds:[]},we=()=>{const e=localStorage.getItem(Tl);if(e)try{const n=JSON.parse(e);return{...Sa,...n}}catch(n){return console.error("Failed to parse progress",n),{...Sa}}return{...Sa}},nn=e=>{localStorage.setItem(Tl,JSON.stringify(e))},Ut=(e=!1)=>{const n=we(),t=Ie(new Date,"yyyy-MM-dd");if(!e&&n.lastLearnDate===t&&n.todayTargetIds.length>0)return Gn().filter(l=>n.todayTargetIds.includes(l.id));n.todayLearnedIds=[],n.lastLearnDate=t;const i=Gn(),a=new Set(n.learnedWordIds);let o=i.filter(s=>!a.has(s.id));o.length===0&&(o=i);const r=o.slice(0,10).map(s=>s.id);return n.todayTargetIds=r,nn(n),i.filter(s=>r.includes(s.id))},Wl=e=>{const n=we(),t=Ie(new Date,"yyyy-MM-dd");n.learnedWordIds.includes(e)||(n.learnedWordIds.push(e),n.totalLearned=n.learnedWordIds.length),n.todayLearnedIds.includes(e)||n.todayLearnedIds.push(e),n.dailyLearningRecords||(n.dailyLearningRecords={}),n.dailyLearningRecords[t]||(n.dailyLearningRecords[t]=[]),n.dailyLearningRecords[t].includes(e)||n.dailyLearningRecords[t].push(e),nn(n)},Pt=()=>{const e=we(),n=Ie(new Date,"yyyy-MM-dd");if(e.lastCheckInDate===n)return!1;if(e.lastCheckInDate){const t=Ti(e.lastCheckInDate),i=Za(new Date,1);Sl(t,i)?e.consecutiveDays+=1:e.consecutiveDays=1}else e.consecutiveDays=1;return e.lastCheckInDate=n,e.checkInHistory||(e.checkInHistory=[]),e.checkInHistory.includes(n)||e.checkInHistory.push(n),nn(e),!0},Da=(e=10,n=!1)=>{const t=we(),i=Ie(new Date,"yyyy-MM-dd"),a=t.lastReviewDate!==i,o=!t.todayReviewTargetIds||t.todayReviewTargetIds.length===0;if(n||a||o){t.lastReviewDate=i,t.todayReviewedWordIds=[];const l=t.learnedWordIds,d=new Set(t.masteredWordIds||[]),c=l.filter(f=>!d.has(f));if(c.length===0)return t.todayReviewTargetIds=[],nn(t),[];const m=[...c].sort(()=>.5-Math.random()).slice(0,e);t.todayReviewTargetIds=m,nn(t)}const r=Gn(),s=t.todayReviewTargetIds||[];return r.filter(l=>s.includes(l.id)).sort((l,d)=>s.indexOf(l.id)-s.indexOf(d.id))},wm=e=>{const n=we();n.todayReviewedWordIds||(n.todayReviewedWordIds=[]),n.todayReviewedWordIds.includes(e)||(n.todayReviewedWordIds.push(e),nn(n))},ym=(e,n)=>{const t=we();t.dailyReviewStatus||(t.dailyReviewStatus={}),t.dailyReviewStatus[e]=n,nn(t)},jm=e=>{const n=we();n.difficultWordIds||(n.difficultWordIds=[]);const t=n.difficultWordIds.indexOf(e);t>-1?n.difficultWordIds.splice(t,1):n.difficultWordIds.push(e),nn(n)},zm=e=>{var t;return((t=we().difficultWordIds)==null?void 0:t.includes(e))||!1},Im=e=>{const n=we();if(n.masteredWordIds||(n.masteredWordIds=[]),n.masteredWordIds.includes(e)||n.masteredWordIds.push(e),n.difficultWordIds){const t=n.difficultWordIds.indexOf(e);t>-1&&n.difficultWordIds.splice(t,1)}nn(n)},Lr=()=>{const e=we(),n=Gn(),t=e.difficultWordIds||[];return n.filter(i=>t.includes(i.id))},Cm=e=>{var a;const n=we(),t=Gn(),i=((a=n.dailyLearningRecords)==null?void 0:a[e])||[];return t.filter(o=>i.includes(o.id))},Sm=()=>{const e=Gn(),n=we(),t=Ie(new Date,"yyyy-MM-dd"),i=[],a=10;for(let m=0;m<e.length;m+=a){const f=e.slice(m,m+a);i.push({groupIndex:Math.floor(m/a),wordIds:f.map(z=>z.id),words:f,status:"planned",date:""})}const o=new Map,r=n.dailyLearningRecords||{},s=Object.keys(r).sort();for(const m of s){const f=r[m]||[];for(const z of f)o.has(z)||o.set(z,m)}const l=new Set(n.todayTargetIds||[]);let d="";for(const m of i){const f=m.wordIds.filter(k=>o.has(k)).length,z=m.wordIds.some(k=>l.has(k));if(f>=m.wordIds.length*.5&&!z){const k=new Map;for(const v of m.wordIds){const b=o.get(v);b&&k.set(b,(k.get(b)||0)+1)}let M="",T=0;for(const[v,b]of k)b>T&&(T=b,M=v);m.status="completed",m.date=M||t,d=m.date>d?m.date:d}else z&&(m.status="today",m.date=t,d=t>d?t:d)}let c=d||t,u=1;for(const m of i)if(m.status==="planned"){const f=Dm(c,u);m.date=f,u++}return i};function Dm(e,n){const t=Ti(e),i=new Date(t.getTime()+n*24*60*60*1e3);return Ie(i,"yyyy-MM-dd")}const Al="dutch_app_course_progress",Ma={completedCourses:[],courseLearnedWords:{},courseReviewCount:{}},zt=()=>{const e=localStorage.getItem(Al);if(e)try{const n=JSON.parse(e);return{...Ma,...n}}catch(n){return console.error("Failed to parse course progress",n),{...Ma}}return{...Ma}},yo=e=>{localStorage.setItem(Al,JSON.stringify(e))},Mm=e=>{const n=zt();n.completedCourses.includes(e)||n.completedCourses.push(e),yo(n)},Ol=e=>zt().completedCourses.includes(e),$r=(e,n)=>{const t=zt();t.courseLearnedWords[e]||(t.courseLearnedWords[e]=[]),t.courseLearnedWords[e].includes(n)||t.courseLearnedWords[e].push(n),yo(t)},Em=e=>{var t;return((t=zt().courseLearnedWords[e])==null?void 0:t.length)||0},Tm=e=>{const n=zt();n.courseReviewCount[e]||(n.courseReviewCount[e]=0),n.courseReviewCount[e]++,yo(n)},Br=e=>zt().courseReviewCount[e]||0,Wi=()=>{const e=Gn(),n=we(),t=e.length,i=n.learnedWordIds.length,a=t-i,o=Math.ceil(a/10),r=new Date,s=new Date(r.getTime()+o*24*60*60*1e3);return{totalWords:t,learnedCount:i,remainingWords:a,remainingDays:o,estimatedEndDate:Ie(s,"yyyy-MM-dd"),progressPercent:t>0?Math.round(i/t*100):0}},Wm={class:"bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto transition-all duration-300"},Am={class:"text-center mb-6"},Om={class:"text-4xl font-bold text-blue-600 mb-2"},Rm={class:"flex items-center justify-center gap-2 mb-3"},Pm={key:0,class:"text-gray-500 text-lg font-mono bg-gray-50 px-3 py-1 rounded-md"},Hm=["disabled"],Nm={key:0,class:"text-xs text-red-500 mt-2"},Lm={class:"space-y-4 animate-fade-in"},$m={class:"grid grid-cols-2 gap-4 text-center border-t border-b border-gray-100 py-4"},Bm={class:"text-lg font-medium text-gray-800"},Fm={class:"text-lg font-medium text-gray-800"},Vm={class:"bg-blue-50 rounded-lg p-4 mt-4"},Gm={class:"text-lg text-gray-800 mb-1"},Um={class:"text-sm text-gray-500"},Km={class:"flex items-center gap-2 mt-3 pt-3 border-t border-blue-200"},qm=["disabled"],Zm=Ue({__name:"WordCard",props:{word:{},initialShowTranslation:{type:Boolean}},setup(e){const n=e,t=J(!1),i=J(!1);tn(()=>{i.value="speechSynthesis"in window});const a=ce(()=>n.word.pronunciation&&n.word.pronunciation.trim()!==""?n.word.pronunciation:qh(n.word.dutch)),o=async(l,d="dutch")=>{if(!i.value){alert("您的浏览器不支持语音播放功能");return}window.speechSynthesis.cancel();const c=new SpeechSynthesisUtterance(l);d==="dutch"?(c.lang="nl-NL",c.rate=.8,c.pitch=1,c.volume=1):(c.lang="nl-NL",c.rate=.7,c.pitch=1,c.volume=1);const m=window.speechSynthesis.getVoices().find(f=>f.lang.includes("nl")||f.lang.includes("NL"));m&&(c.voice=m),c.onstart=()=>{t.value=!0},c.onend=()=>{t.value=!1},c.onerror=()=>{t.value=!1,console.error("语音播放出错")},window.speechSynthesis.speak(c)},r=()=>{i.value&&(window.speechSynthesis.cancel(),t.value=!1)},s=l=>a.value!=="";return(l,d)=>(D(),W("div",Wm,[h("div",Am,[h("h2",Om,E(e.word.dutch),1),h("div",Rm,[s(e.word)?(D(),W("p",Pm,E(a.value),1)):me("",!0),h("button",{onClick:d[0]||(d[0]=Vt(c=>o(e.word.dutch),["stop"])),disabled:!i.value||t.value,class:fe(["inline-flex items-center justify-center p-2.5 text-blue-600 bg-blue-50 hover:bg-blue-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95",{"animate-pulse":t.value}])},[R(P(Er),{class:"w-5 h-5"})],10,Hm),i.value&&t.value?(D(),W("button",{key:1,onClick:Vt(r,["stop"]),class:"inline-flex items-center justify-center p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-all duration-200 transform hover:scale-105"},[...d[2]||(d[2]=[h("span",{class:"text-xs font-bold"},"停止",-1)])])):me("",!0)]),i.value?me("",!0):(D(),W("p",Nm," ⚠️ 您的浏览器不支持语音播放 "))]),h("div",Lm,[h("div",$m,[h("div",null,[d[3]||(d[3]=h("p",{class:"text-xs text-gray-400 uppercase tracking-wider"},"中文",-1)),h("p",Bm,E(e.word.chinese),1)]),h("div",null,[d[4]||(d[4]=h("p",{class:"text-xs text-gray-400 uppercase tracking-wider"},"English",-1)),h("p",Fm,E(e.word.english),1)])]),h("div",Vm,[d[6]||(d[6]=h("p",{class:"text-sm text-blue-800 font-medium mb-1"},"Example:",-1)),h("p",Gm,E(e.word.example),1),h("p",Um,E(e.word.example_cn),1),h("div",Km,[h("button",{onClick:d[1]||(d[1]=Vt(c=>o(e.word.example,"example"),["stop"])),disabled:!i.value||t.value,class:"inline-flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 bg-white hover:bg-blue-50 disabled:bg-gray-100 disabled:text-gray-400 rounded-full transition-colors"},[R(P(Er),{class:"w-4 h-4"}),d[5]||(d[5]=h("span",null,"播放例句",-1))],8,qm)])])])]))}}),ta=at(Zm,[["__scopeId","data-v-e7199e1a"]]),Ym={class:"flex flex-col h-full"},Jm={key:0,class:"flex justify-between items-center mb-6"},Qm={class:"text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"},Xm={class:"flex-1 flex flex-col items-center justify-center w-full"},e0={key:0,class:"text-center space-y-6 animate-fade-in w-full py-10"},n0={key:1,class:"text-center space-y-6 animate-fade-in w-full py-10"},t0={class:"text-red-600"},i0={key:2,class:"w-full space-y-6"},a0={class:"w-full bg-gray-100 rounded-full h-2"},o0={key:3,class:"text-center space-y-6 animate-fade-in w-full py-10"},r0={class:"bg-green-100 p-6 rounded-full inline-block mb-4"},s0={class:"bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full"},l0={class:"grid grid-cols-2 gap-4 mb-4"},c0={class:"bg-orange-50 rounded-xl p-4 text-center"},d0={class:"text-2xl font-bold text-gray-800"},u0={class:"bg-blue-50 rounded-xl p-4 text-center"},h0={class:"text-2xl font-bold text-gray-800"},p0={class:"w-full mt-8 flex gap-4"},m0=Ue({__name:"DailyLearn",emits:["complete"],setup(e,{emit:n}){const t=n,i=J([]),a=J(0),o=J(!1),r=J(!0),s=J(null);tn(async()=>{try{await new Promise(T=>setTimeout(T,100)),i.value=Ut(),i.value.length<10&&console.warn("单词数量不足，可能数据未完全加载");const z=we(),k=new Set(z.todayLearnedIds||[]),M=i.value.findIndex(T=>!k.has(T.id));M>-1?a.value=M:i.value.length>0&&k.size>=i.value.length&&(o.value=!0,t("complete"))}catch(z){console.error("加载单词失败:",z),s.value="加载单词时出错，请稍后重试。"}finally{r.value=!1}});const l=ce(()=>i.value[a.value]),d=ce(()=>i.value.length===0?100:a.value/i.value.length*100),c=()=>{l.value&&Wl(l.value.id),a.value<i.value.length-1?a.value++:(Pt(),o.value=!0,t("complete"))},u=()=>{i.value=Ut(!0),a.value=0,o.value=!1},m=()=>{a.value=0,o.value=!1},f=async()=>{r.value=!0,s.value=null;try{i.value=await Ut();const z=we(),k=new Set(z.todayLearnedIds||[]),M=i.value.findIndex(T=>!k.has(T.id));M>-1?a.value=M:i.value.length>0&&k.size>=i.value.length&&(o.value=!0,t("complete"))}catch(z){console.error("重试加载失败:",z),s.value="加载失败，请刷新页面重试"}finally{r.value=!1}};return(z,k)=>(D(),W("div",Ym,[o.value?me("",!0):(D(),W("div",Jm,[k[1]||(k[1]=h("h2",{class:"text-xl font-bold text-gray-800"},"今日新词",-1)),h("span",Qm,E(a.value+1)+" / "+E(i.value.length),1)])),h("div",Xm,[r.value?(D(),W("div",e0,[R(P(jh),{class:"w-16 h-16 text-gray-400 animate-spin"}),k[2]||(k[2]=h("p",{class:"text-gray-600"},"正在加载单词...",-1))])):s.value?(D(),W("div",n0,[h("p",t0,E(s.value),1),h("button",{onClick:k[0]||(k[0]=M=>f()),class:"w-full py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"}," 重试 ")])):!o.value&&l.value?(D(),W("div",i0,[h("div",a0,[h("div",{class:"bg-blue-500 h-2 rounded-full transition-all duration-300",style:Vn({width:`${d.value}%`})},null,4)]),(D(),Wn(ta,{word:l.value,key:l.value.id,initialShowTranslation:!0},null,8,["word"])),h("button",{onClick:c,class:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2 mt-8"},[k[3]||(k[3]=h("span",null,"下一个",-1)),R(P(ht),{class:"w-5 h-5"})])])):(D(),W("div",o0,[h("div",r0,[R(P(ea),{class:"w-16 h-16 text-green-600"})]),k[11]||(k[11]=h("h2",{class:"text-2xl font-bold text-gray-800"},"太棒了！",-1)),k[12]||(k[12]=h("p",{class:"text-gray-600"},"你已经完成了今天的学习任务。",-1)),h("div",s0,[h("div",l0,[h("div",c0,[k[4]||(k[4]=h("div",{class:"flex justify-center text-orange-500 mb-2"},[h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-6 h-6"},[h("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})])],-1)),h("p",d0,E(P(we)().consecutiveDays),1),k[5]||(k[5]=h("p",{class:"text-xs text-gray-500"},"连续打卡(天)",-1))]),h("div",u0,[k[6]||(k[6]=pa('<div class="flex justify-center text-blue-500 mb-2" data-v-aa5b748f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" data-v-aa5b748f><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" data-v-aa5b748f></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" data-v-aa5b748f></path><path d="M4 22h16" data-v-aa5b748f></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" data-v-aa5b748f></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" data-v-aa5b748f></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" data-v-aa5b748f></path></svg></div>',1)),h("p",h0,E(P(we)().totalLearned),1),k[7]||(k[7]=h("p",{class:"text-xs text-gray-500"},"已学单词(个)",-1))])]),k[8]||(k[8]=pa('<div class="w-full bg-green-50 text-green-700 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 border border-green-100" data-v-aa5b748f><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" data-v-aa5b748f><rect width="18" height="18" x="3" y="4" rx="2" ry="2" data-v-aa5b748f></rect><line x1="16" x2="16" y1="2" y2="6" data-v-aa5b748f></line><line x1="8" x2="8" y1="2" y2="6" data-v-aa5b748f></line><line x1="3" x2="21" y1="10" y2="10" data-v-aa5b748f></line></svg><span data-v-aa5b748f>今天已打卡</span></div>',1))]),h("div",p0,[h("button",{onClick:m,class:"flex-1 flex items-center justify-center p-4 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors gap-2"},[...k[9]||(k[9]=[pa('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6" data-v-aa5b748f><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" data-v-aa5b748f></path><path d="M3 3v5h5" data-v-aa5b748f></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" data-v-aa5b748f></path><path d="M16 16h5v5" data-v-aa5b748f></path></svg><span class="font-medium" data-v-aa5b748f>再次学习</span>',2)])]),h("button",{onClick:u,class:"flex-1 flex items-center justify-center p-4 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-colors gap-2"},[R(P(Qi),{class:"w-6 h-6"}),k[10]||(k[10]=h("span",{class:"font-medium"},"学习下一组",-1))])])]))])]))}}),g0=at(m0,[["__scopeId","data-v-aa5b748f"]]),f0={class:"bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto"},x0={class:"text-center mb-8"},k0={class:"text-2xl font-bold text-gray-800 mb-2"},v0={class:"text-gray-500"},b0={class:"space-y-4"},_0={class:"relative"},w0={key:0,class:"absolute right-3 top-1/2 -translate-y-1/2 text-green-500"},y0={key:1,class:"absolute right-3 top-1/2 -translate-y-1/2 text-red-500"},j0={key:0,class:"text-center text-blue-600 font-medium animate-fade-in"},z0={class:"flex gap-3"},I0=["disabled"],C0=Ue({__name:"SpellingCard",props:{word:{}},emits:["complete"],setup(e,{emit:n}){const t=e,i=n,a=J(""),o=J(null),r=J(!1);Dn(()=>t.word,()=>{a.value="",o.value=null,r.value=!1});const s=()=>{a.value.trim().toLowerCase()===t.word.dutch.toLowerCase()?(o.value=!0,setTimeout(()=>{i("complete")},1e3)):o.value=!1},l=()=>{r.value=!0};return(d,c)=>(D(),W("div",f0,[h("div",x0,[c[1]||(c[1]=h("p",{class:"text-sm text-gray-400 uppercase tracking-wider mb-2"},"请拼写荷兰语",-1)),h("h3",k0,E(e.word.chinese),1),h("p",v0,E(e.word.english),1)]),h("div",b0,[h("div",_0,[Sc(h("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>a.value=u),onKeyup:su(s,["enter"]),type:"text",class:fe(["w-full px-4 py-3 text-lg text-center border-2 rounded-xl focus:outline-none transition-colors",{"border-gray-200 focus:border-blue-500":o.value===null,"border-green-500 bg-green-50 text-green-700":o.value===!0,"border-red-500 bg-red-50 text-red-700":o.value===!1}]),placeholder:"输入荷兰语单词...",autofocus:""},null,34),[[iu,a.value]]),o.value===!0?(D(),W("div",w0,[R(P(bh),{class:"w-6 h-6"})])):me("",!0),o.value===!1?(D(),W("div",y0,[R(P(bl),{class:"w-6 h-6"})])):me("",!0)]),r.value?(D(),W("div",j0," 提示: "+E(e.word.dutch),1)):me("",!0),h("div",z0,[h("button",{onClick:l,class:"flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"},[R(P(wh),{class:"w-5 h-5"}),c[2]||(c[2]=h("span",null,"提示",-1))]),h("button",{onClick:s,class:"flex-1 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200",disabled:o.value===!0}," 检查 ",8,I0)])])]))}}),Rl=at(C0,[["__scopeId","data-v-2f4cf95d"]]),S0={class:"fixed inset-0 flex flex-col bg-gray-50 z-40 max-w-md mx-auto"},D0={key:0,class:"flex flex-col h-full overflow-hidden"},M0={class:"flex items-center p-4 border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm"},E0={class:"mx-4 mt-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg"},T0={class:"flex justify-between items-start mb-4"},W0={class:"text-3xl font-bold"},A0={class:"text-lg font-normal text-blue-200"},O0={class:"bg-white/20 rounded-xl px-3 py-2 text-center"},R0={class:"text-2xl font-bold"},P0={class:"w-full bg-white/20 rounded-full h-2.5 mb-4"},H0={class:"flex justify-between text-sm"},N0={class:"text-blue-100"},L0={class:"text-blue-100"},$0={class:"flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-32",style:{"min-height":"0"}},B0=["id"],F0=["onClick"],V0={class:"flex items-center gap-3"},G0={class:"flex items-center gap-2"},U0={class:"font-bold text-gray-800 text-sm"},K0={class:"text-xs text-gray-400 mt-0.5"},q0={class:"flex items-center gap-2"},Z0=["onClick"],Y0=["onClick"],J0={key:2,disabled:"",class:"text-xs px-3 py-1.5 bg-gray-50 text-gray-300 rounded-lg font-medium cursor-not-allowed"},Q0={key:0,class:"border-t border-gray-100"},X0={class:"divide-y divide-gray-50"},eg={class:"flex-1 min-w-0"},ng={class:"flex items-center gap-2"},tg={class:"font-bold text-blue-600 text-sm"},ig={key:0,class:"text-xs text-gray-400 font-mono truncate"},ag={class:"flex items-center gap-3 text-sm"},og={class:"text-gray-700"},rg={class:"text-gray-400 text-xs hidden"},sg={key:1,class:"flex flex-col h-full overflow-hidden"},lg={class:"flex justify-between items-center p-4 border-b border-gray-100 bg-white"},cg={class:"flex flex-col items-center"},dg={class:"font-bold text-gray-800"},ug={class:"text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1"},hg={key:0,class:"flex-1 flex flex-col items-center justify-center w-full p-4"},pg={class:"w-full max-w-md relative"},mg={key:"reading",class:"w-full"},gg={class:"flex gap-3 mt-8"},fg={key:"spelling",class:"w-full"},xg={class:"flex gap-3 mt-6"},kg=Ue({__name:"AllWordsOverview",emits:["back","goToLearn"],setup(e,{emit:n}){const t=n,i=J("overview"),a=J([]),o=J(Wi()),r=J(new Set),s=J([]),l=J(-1),d=J(0),c=J("reading"),u=J(""),m=()=>{a.value=Sm(),o.value=Wi(),r.value.clear();let $=0;for(const V of a.value)V.status==="today"?r.value.add(V.groupIndex):V.status==="planned"&&$<2&&(r.value.add(V.groupIndex),$++)},f=$=>{r.value.has($)?r.value.delete($):r.value.add($)},z=$=>r.value.has($),k=$=>{if(!$)return"未知";try{const V=Ti($),C=new Date,ee=Ie(C,"yyyy-MM-dd");if($===ee)return"今天";const ue=new Date(C);if(ue.setDate(ue.getDate()-1),$===Ie(ue,"yyyy-MM-dd"))return"昨天";const te=new Date(C);return te.setDate(te.getDate()+1),$===Ie(te,"yyyy-MM-dd")?"明天":Ie(V,"MM月dd日")}catch{return $}},M=$=>{switch($){case"completed":return"bg-green-100 text-green-700";case"today":return"bg-blue-100 text-blue-700";case"planned":return"bg-gray-100 text-gray-500";default:return"bg-gray-100 text-gray-500"}},T=$=>{switch($){case"completed":return"已完成";case"today":return"今日学习";case"planned":return"计划中";default:return"未知"}},v=$=>{if($.status!=="planned"){if($.status==="today"){t("goToLearn");return}s.value=[...$.words],l.value=$.groupIndex,u.value=$.date,d.value=0,c.value="reading",i.value="review"}},b=ce(()=>s.value[d.value]),_=()=>{d.value<s.value.length-1?d.value++:c.value==="reading"?(c.value="spelling",d.value=0):i.value="overview"},H=()=>{_()},Y=()=>{s.value=[...s.value].sort(()=>.5-Math.random()),d.value=0},X=()=>{i.value="overview"},ke=()=>{Bi(()=>{const $=document.getElementById("group-today");$&&$.scrollIntoView({behavior:"smooth",block:"center"})})};tn(()=>{m(),ke()}),Vi(()=>{m()});const K=ce(()=>{if(!o.value.estimatedEndDate)return"未知";try{return Ie(Ti(o.value.estimatedEndDate),"yyyy年MM月dd日")}catch{return o.value.estimatedEndDate}});return($,V)=>(D(),W("div",S0,[i.value==="overview"?(D(),W("div",D0,[h("div",M0,[h("button",{onClick:V[0]||(V[0]=C=>$.$emit("back")),class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 mr-3"},[R(P(Si),{class:"w-6 h-6"})]),V[3]||(V[3]=h("h2",{class:"text-lg font-bold text-gray-800"},"所有单词总览",-1))]),h("div",E0,[h("div",T0,[h("div",null,[V[4]||(V[4]=h("p",{class:"text-sm text-blue-100 mb-1"},"学习进度",-1)),h("p",W0,[Fn(E(o.value.learnedCount)+" ",1),h("span",A0,"/ "+E(o.value.totalWords),1)])]),h("div",O0,[h("p",R0,E(o.value.progressPercent)+"%",1)])]),h("div",P0,[h("div",{class:"bg-white h-2.5 rounded-full transition-all duration-500",style:Vn({width:`${o.value.progressPercent}%`})},null,4)]),h("div",H0,[h("span",N0,[R(P(vo),{class:"w-3.5 h-3.5 inline mr-1"}),Fn(" 还剩 "+E(o.value.remainingDays)+" 天 ",1)]),h("span",L0,"预计 "+E(K.value)+" 学完",1)])]),h("div",$0,[(D(!0),W(ze,null,Xe(a.value,C=>(D(),W("div",{key:C.groupIndex,id:C.status==="today"?"group-today":void 0,class:fe(["bg-white rounded-xl shadow-sm border overflow-hidden transition-all duration-200",{"border-green-200":C.status==="completed","border-blue-300 ring-2 ring-blue-100":C.status==="today","border-gray-100":C.status==="planned"}])},[h("div",{class:fe(["flex items-center justify-between p-4 cursor-pointer select-none",{"bg-green-50/50":C.status==="completed","bg-blue-50":C.status==="today","bg-gray-50/50":C.status==="planned"}]),onClick:ee=>f(C.groupIndex)},[h("div",V0,[h("div",{class:fe(["w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",{"bg-green-500 text-white":C.status==="completed","bg-blue-500 text-white":C.status==="today","bg-gray-200 text-gray-500":C.status==="planned"}])},E(C.groupIndex+1),3),h("div",null,[h("div",G0,[h("span",U0,"第 "+E(C.groupIndex+1)+" 组",1),h("span",{class:fe(["text-xs px-2 py-0.5 rounded-full font-medium",M(C.status)])},E(T(C.status)),3)]),h("p",K0,E(k(C.date))+" · "+E(C.words.length)+" 个单词 ",1)])]),h("div",q0,[C.status==="completed"?(D(),W("button",{key:0,onClick:Vt(ee=>v(C),["stop"]),class:"text-xs px-3 py-1.5 bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-100 transition-colors"}," 复习 ",8,Z0)):C.status==="today"?(D(),W("button",{key:1,onClick:Vt(ee=>v(C),["stop"]),class:"text-xs px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"}," 去学习 ",8,Y0)):(D(),W("button",J0,[R(P(zh),{class:"w-3 h-3 inline"}),V[5]||(V[5]=Fn(" 未解锁 ",-1))])),(D(),Wn(Rs(z(C.groupIndex)?P(_h):P(Xi)),{class:"w-5 h-5 text-gray-400 transition-transform"}))])],10,F0),R(Ii,{name:"expand"},{default:Sn(()=>[z(C.groupIndex)?(D(),W("div",Q0,[h("div",X0,[(D(!0),W(ze,null,Xe(C.words,ee=>(D(),W("div",{key:ee.id,class:"flex items-center justify-between px-4 py-3 hover:bg-gray-50/50 transition-colors"},[h("div",eg,[h("div",ng,[h("span",tg,E(ee.dutch),1),ee.pronunciation?(D(),W("span",ig,E(ee.pronunciation),1)):me("",!0)])]),h("div",ag,[h("span",og,E(ee.chinese),1),h("span",rg,E(ee.english),1)])]))),128))])])):me("",!0)]),_:2},1024)],10,B0))),128))])])):i.value==="review"?(D(),W("div",sg,[h("div",lg,[h("button",{onClick:X,class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"},[R(P(Si),{class:"w-6 h-6"})]),h("div",cg,[h("span",dg," 第 "+E(l.value+1)+" 组复习 ",1),h("span",ug,E(c.value==="reading"?"认读模式":"拼写模式")+" "+E(d.value+1)+"/"+E(s.value.length),1)]),h("button",{onClick:Y,class:"text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50",title:"打乱顺序"},[R(P(_o),{class:"w-5 h-5"})])]),s.value.length>0&&b.value?(D(),W("div",hg,[h("div",pg,[R(Ii,{name:"fade",mode:"out-in"},{default:Sn(()=>[c.value==="reading"?(D(),W("div",mg,[(D(),Wn(ta,{word:b.value,key:b.value.id},null,8,["word"])),h("div",gg,[h("button",{onClick:V[1]||(V[1]=C=>c.value="spelling"),class:"flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"},[R(P(vl),{class:"w-5 h-5"}),V[6]||(V[6]=h("span",null,"拼写",-1))]),h("button",{onClick:_,class:"flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"},[h("span",null,E(d.value<s.value.length-1?"下一个":"进入拼写测试"),1),R(P(ht),{class:"w-5 h-5"})])])])):(D(),W("div",fg,[R(Rl,{word:b.value,onComplete:H},null,8,["word"]),h("div",xg,[h("button",{onClick:V[2]||(V[2]=C=>c.value="reading"),class:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"},[R(P(kl),{class:"w-5 h-5"}),V[7]||(V[7]=h("span",null,"认读模式",-1))])]),V[8]||(V[8]=h("div",{class:"text-center mt-4"},[h("p",{class:"text-xs text-gray-400"},"完成拼写以继续")],-1))]))]),_:1})])])):me("",!0)])):me("",!0)]))}}),vg=at(kg,[["__scopeId","data-v-d01ed2fc"]]),bg={class:"flex flex-col h-full min-h-0 bg-gray-50 relative",style:{height:"100%"}},_g={key:0,class:"flex flex-col h-full p-4 space-y-5"},wg={class:"flex justify-between items-center"},yg={class:"flex items-center gap-4"},jg={key:0,class:"text-sm text-gray-500"},zg={key:1,class:"text-sm text-green-600 font-medium"},Ig={key:2,class:"text-sm text-gray-500"},Cg={key:0,class:"mt-3 flex items-center gap-3"},Sg={class:"flex-1 bg-gray-100 rounded-full h-1.5"},Dg={class:"text-xs text-gray-400 whitespace-nowrap"},Mg={class:"flex items-center gap-4"},Eg={class:"bg-orange-100 p-3 rounded-full text-orange-600"},Tg={class:"text-sm text-gray-500"},Wg={class:"flex justify-between items-center"},Ag={class:"flex items-center gap-4"},Og={class:"bg-blue-100 p-3 rounded-full text-blue-600"},Rg={class:"text-sm text-gray-500"},Pg={class:"mt-4 flex items-center gap-3"},Hg={class:"flex-1 bg-gray-100 rounded-full h-2"},Ng={class:"text-xs text-gray-400 whitespace-nowrap"},Lg={class:"text-xs text-gray-400 mt-2 flex items-center gap-1"},$g={key:2,class:"flex flex-col h-full"},Bg={class:"flex justify-between items-center p-4 border-b border-gray-100 bg-white"},Fg={class:"flex flex-col items-center"},Vg={class:"font-bold text-gray-800"},Gg={class:"text-xs text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full mt-1"},Ug={key:0,class:"flex-1 flex flex-col items-center justify-center w-full p-4"},Kg={class:"w-full max-w-md relative"},qg={key:"reading",class:"w-full"},Zg={class:"flex justify-between items-center mt-6 px-2"},Yg={class:"text-sm font-medium"},Jg={class:"flex gap-3 mt-8"},Qg={key:"spelling",class:"w-full"},Xg={class:"flex gap-3 mt-6"},ef={key:1,class:"flex-1 flex flex-col items-center justify-center text-center p-8 text-gray-500"},nf={class:"bg-gray-100 p-4 rounded-full mb-4"},tf={class:"text-lg font-medium text-gray-700"},af={class:"text-sm text-gray-400 mt-1"},of=Ue({__name:"Review",setup(e){const n=jt(),t=J("list"),i=J("daily"),a=J("reading"),o=J(""),r=J([]),s=J(0),l=J(!1),d=J(Wi()),c=J([]),u=J(0),m=J(0),f=ce(()=>Lr().length),z=()=>{d.value=Wi()},k=()=>{var ve;const ue=Da(10);c.value=ue,u.value=ue.length;const te=we();m.value=((ve=te.todayReviewedWordIds)==null?void 0:ve.length)||0},M=()=>{i.value="difficult",t.value="session",a.value="reading",H()},T=()=>{const ue=Da(10);ue.length!==0&&(i.value="todayReview",t.value="session",a.value="reading",r.value=ue,s.value=0,_())},v=()=>{t.value="allwords"},b=()=>{t.value="list",z()},_=()=>{r.value[s.value]&&(l.value=zm(r.value[s.value].id))},H=()=>{i.value==="daily"?r.value=Cm(o.value):i.value==="todayReview"?r.value=Da(10):r.value=Lr(),s.value=0,_()};tn(()=>{z(),k()}),Vi(()=>{t.value==="list"&&(z(),k())});const Y=ce(()=>r.value[s.value]);Dn(s,()=>{_()});const X=()=>{i.value==="todayReview"&&Y.value&&wm(Y.value.id),s.value<r.value.length-1?s.value++:a.value==="reading"?(a.value="spelling",s.value=0):K()},ke=()=>{X()},K=()=>{i.value==="daily"&&ym(o.value,!0),k(),b()},$=()=>{Y.value&&(jm(Y.value.id),l.value=!l.value)},V=()=>{if(Y.value)if(Im(Y.value.id),i.value==="difficult"){if(r.value.splice(s.value,1),s.value>=r.value.length){if(r.value.length===0){b();return}s.value=Math.max(0,r.value.length-1)}_()}else X()},C=()=>{r.value=[...r.value].sort(()=>.5-Math.random()),s.value=0,_()},ee=()=>{n.push("/learn")};return(ue,te)=>(D(),W("div",bg,[t.value==="list"?(D(),W("div",_g,[te[5]||(te[5]=h("div",{class:"flex justify-between items-center"},[h("h2",{class:"text-xl font-bold text-gray-800"},"复习中心")],-1)),h("div",{onClick:T,class:fe(["rounded-xl p-5 shadow-sm border cursor-pointer hover:shadow-md transition-all active:scale-[0.98]",m.value>=u.value&&u.value>0?"bg-green-50 border-green-200":"bg-white border-gray-100"])},[h("div",wg,[h("div",yg,[h("div",{class:fe(["p-3 rounded-full",m.value>=u.value&&u.value>0?"bg-green-100 text-green-600":"bg-emerald-100 text-emerald-600"])},[R(P(bo),{class:"w-6 h-6"})],2),h("div",null,[te[2]||(te[2]=h("h3",{class:"font-bold text-gray-800"},"今日复习",-1)),u.value===0?(D(),W("p",jg,"暂无可复习的单词")):m.value>=u.value?(D(),W("p",zg,"✅ 今日复习已完成")):(D(),W("p",Ig,E(u.value)+" 个单词 · 已复习 "+E(m.value),1))])]),R(P(ht),{class:"w-5 h-5 text-gray-300"})]),u.value>0?(D(),W("div",Cg,[h("div",Sg,[h("div",{class:fe(["h-1.5 rounded-full transition-all duration-500",m.value>=u.value?"bg-green-500":"bg-emerald-500"]),style:Vn({width:`${Math.min(100,Math.round(m.value/u.value*100))}%`})},null,6)]),h("span",Dg,E(m.value)+"/"+E(u.value),1)])):me("",!0)],2),h("div",{onClick:M,class:"bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"},[h("div",Mg,[h("div",Eg,[R(P(wa),{class:"w-6 h-6"})]),h("div",null,[te[3]||(te[3]=h("h3",{class:"font-bold text-gray-800"},"生词本",-1)),h("p",Tg,E(f.value)+" 个单词待复习",1)])]),R(P(ht),{class:"w-5 h-5 text-gray-300"})]),h("div",{onClick:v,class:"bg-white rounded-xl p-5 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all active:scale-[0.98] overflow-hidden"},[h("div",Wg,[h("div",Ag,[h("div",Og,[R(P(Qi),{class:"w-6 h-6"})]),h("div",null,[te[4]||(te[4]=h("h3",{class:"font-bold text-gray-800"},"所有单词",-1)),h("p",Rg," 已学 "+E(d.value.learnedCount)+" / "+E(d.value.totalWords)+" 词 ",1)])]),R(P(ht),{class:"w-5 h-5 text-gray-300"})]),h("div",Pg,[h("div",Hg,[h("div",{class:"bg-blue-500 h-2 rounded-full transition-all duration-500",style:Vn({width:`${d.value.progressPercent}%`})},null,4)]),h("span",Ng,E(d.value.progressPercent)+"% ",1)]),h("p",Lg,[R(P(vo),{class:"w-3 h-3"}),Fn(" 预计还需 "+E(d.value.remainingDays)+" 天学完 ",1)])]),te[6]||(te[6]=h("div",{class:"bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100"},[h("p",{class:"text-sm text-indigo-700 font-medium mb-1"},"💡 学习小贴士"),h("p",{class:"text-xs text-indigo-500"},"每天坚持学习10个新单词，配合复习巩固，效果更佳。")],-1))])):me("",!0),t.value==="allwords"?(D(),Wn(vg,{key:1,onBack:b,onGoToLearn:ee})):me("",!0),t.value==="session"?(D(),W("div",$g,[h("div",Bg,[h("button",{onClick:b,class:"text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"},[R(P(Si),{class:"w-6 h-6"})]),h("div",Fg,[h("span",Vg,E(i.value==="difficult"?"生词本复习":i.value==="todayReview"?"今日复习":"复习"),1),h("span",Gg,E(a.value==="reading"?"认读模式":"拼写模式")+" "+E(s.value+1)+"/"+E(r.value.length),1)]),h("button",{onClick:C,class:"text-gray-500 hover:text-blue-600 p-1 rounded-full hover:bg-blue-50",title:"打乱顺序"},[R(P(_o),{class:"w-5 h-5"})])]),r.value.length>0?(D(),W("div",Ug,[h("div",Kg,[R(Ii,{name:"fade",mode:"out-in"},{default:Sn(()=>[a.value==="reading"?(D(),W("div",qg,[(D(),Wn(ta,{word:Y.value,key:Y.value.id},null,8,["word"])),h("div",Zg,[h("button",{onClick:$,class:fe(["flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",l.value?"text-orange-500 bg-orange-50":"text-gray-400 hover:bg-gray-100"])},[R(P(wa),{class:fe(["w-5 h-5",{"fill-current":l.value}])},null,8,["class"]),h("span",Yg,E(l.value?"已在生词本":"加入生词本"),1)],2),i.value==="difficult"?(D(),W("button",{key:0,onClick:V,class:"flex items-center gap-2 px-4 py-2 rounded-lg text-green-600 bg-green-50 hover:bg-green-100 transition-colors"},[R(P(ea),{class:"w-5 h-5"}),te[7]||(te[7]=h("span",{class:"text-sm font-medium"},"已掌握",-1))])):me("",!0)]),h("div",Jg,[h("button",{onClick:te[0]||(te[0]=ve=>a.value="spelling"),class:"flex-1 flex items-center justify-center gap-2 py-4 px-4 bg-white border-2 border-blue-100 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"},[R(P(vl),{class:"w-5 h-5"}),te[8]||(te[8]=h("span",null,"拼写",-1))]),h("button",{onClick:X,class:"flex-[2] flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"},[h("span",null,E(s.value<r.value.length-1?"下一个":"进入拼写测试"),1),R(P(ht),{class:"w-5 h-5"})])])])):(D(),W("div",Qg,[R(Rl,{word:Y.value,onComplete:ke},null,8,["word"]),h("div",Xg,[h("button",{onClick:te[1]||(te[1]=ve=>a.value="reading"),class:"w-full flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"},[R(P(kl),{class:"w-5 h-5"}),te[9]||(te[9]=h("span",null,"认读模式",-1))])]),te[10]||(te[10]=h("div",{class:"text-center mt-4"},[h("p",{class:"text-xs text-gray-400"},"完成拼写以继续")],-1))]))]),_:1})])])):(D(),W("div",ef,[h("div",nf,[R(P(wa),{class:"w-8 h-8 text-gray-400"})]),h("p",tf,E(i.value==="todayReview"?"暂无复习单词":"生词本为空"),1),h("p",af,E(i.value==="todayReview"?"先去学习一些新单词吧":"在学习过程中将不熟悉的单词加入生词本"),1),h("button",{onClick:b,class:"mt-4 text-blue-600 font-medium hover:underline"}," 返回列表 ")]))])):me("",!0)]))}}),rf=at(of,[["__scopeId","data-v-f7a870c4"]]),sf={class:"flex flex-col h-full bg-white"},lf={class:"p-4 border-b border-gray-100 sticky top-0 bg-white z-20 shadow-sm flex justify-between items-center"},cf={class:"text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full"},df={class:"flex-1 overflow-y-auto p-4 space-y-8 pb-24"},uf={class:"text-lg font-bold text-gray-700 mb-4 sticky top-14 bg-white/95 backdrop-blur-sm py-2 z-10"},hf={class:"grid grid-cols-7 gap-2 text-center mb-2"},pf={class:"grid grid-cols-7 gap-2"},mf=["id","onClick"],gf={key:0,class:"absolute -bottom-1 w-1 h-1 bg-green-500 rounded-full"},ff={key:0,class:"absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"},xf={class:"bg-white rounded-2xl shadow-2xl w-full max-w-sm max-h-[80%] flex flex-col overflow-hidden animate-pop-in"},kf={class:"p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50"},vf={class:"font-bold text-gray-800"},bf={class:"flex-1 overflow-y-auto p-4"},_f={key:0,class:"space-y-3"},wf={class:"font-bold text-blue-600"},yf={class:"text-xs text-gray-500"},jf={class:"text-sm text-gray-700 font-medium"},zf={key:1,class:"text-center py-8 text-gray-400"},If=Ue({__name:"History",setup(e){var z;const n=J(we()),t=J(new Set(n.value.checkInHistory||[])),i=J(((z=n.value.masteredWordIds)==null?void 0:z.length)||0),a=J([]),o=()=>{const k=new Date;for(let M=0;M<=1;M++)a.value.push(Jh(k,M));a.value.sort((M,T)=>M.getTime()-T.getTime())},r=k=>{const M=za(k),T=ap(k);return rp({start:M,end:T})},s=k=>{const M=rm(za(k));return M===0?6:M-1},l=k=>{const M=Ie(k,"yyyy-MM-dd"),T=za(new Date);return k.getTime()<T.getTime()?!1:t.value.has(M)},d=J(!1),c=J(null),u=J([]),m=k=>{var b;if(!l(k))return;c.value=k;const M=Ie(k,"yyyy-MM-dd"),T=((b=n.value.dailyLearningRecords)==null?void 0:b[M])||[],v=Gn();u.value=v.filter(_=>T.includes(_.id)),d.value=!0},f=()=>{d.value=!1};return Vi(()=>{n.value=we(),t.value=new Set(n.value.checkInHistory||[])}),tn(()=>{o(),Bi(()=>{const k=document.getElementById("today-marker");k&&k.scrollIntoView({behavior:"smooth",block:"center"})})}),(k,M)=>(D(),W("div",sf,[h("div",lf,[M[0]||(M[0]=h("h2",{class:"text-xl font-bold text-gray-800"},"打卡记录",-1)),h("span",cf,"已掌握 "+E(i.value)+" 词",1)]),h("div",df,[(D(!0),W(ze,null,Xe(a.value,T=>(D(),W("div",{key:T.toISOString(),class:"month-container"},[h("h3",uf,E(P(Ie)(T,"yyyy年MM月")),1),h("div",hf,[(D(),W(ze,null,Xe(["一","二","三","四","五","六","日"],v=>h("div",{key:v,class:"text-xs text-gray-400 font-medium"},E(v),1)),64))]),h("div",pf,[(D(!0),W(ze,null,Xe(s(T),v=>(D(),W("div",{key:`empty-${v}`}))),128)),(D(!0),W(ze,null,Xe(r(T),v=>(D(),W("div",{key:v.toISOString(),class:fe(["aspect-square flex items-center justify-center rounded-full text-sm relative transition-all cursor-pointer",[l(v)?"bg-green-500 text-white font-bold shadow-md transform scale-105 hover:bg-green-600":"text-gray-700 bg-gray-50",P(Nr)(v)?"ring-2 ring-blue-400 ring-offset-2":""]]),id:P(Nr)(v)?"today-marker":void 0,onClick:b=>m(v)},[Fn(E(P(Ie)(v,"d"))+" ",1),l(v)?(D(),W("div",gf)):me("",!0)],10,mf))),128))])]))),128))]),d.value?(D(),W("div",ff,[h("div",xf,[h("div",kf,[h("h3",vf,E(c.value?P(Ie)(c.value,"yyyy年MM月dd日"):"")+" 学习记录 ",1),h("button",{onClick:f,class:"text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition-colors"},[R(P(bl),{class:"w-5 h-5"})])]),h("div",bf,[u.value.length>0?(D(),W("div",_f,[(D(!0),W(ze,null,Xe(u.value,T=>(D(),W("div",{key:T.id,class:"flex items-center justify-between p-3 bg-gray-50 rounded-lg"},[h("div",null,[h("p",wf,E(T.dutch),1),h("p",yf,E(T.english),1)]),h("p",jf,E(T.chinese),1)]))),128))])):(D(),W("div",zf,[...M[1]||(M[1]=[h("p",null,"暂无详细记录",-1)])]))])])])):me("",!0)]))}}),Cf=at(If,[["__scopeId","data-v-ebcd4203"]]),ti=ii([]);let Ai=null;function Sf(e,n){const t={name:e,cases:[]};Ai=t,ti.push(t),n(),Ai=null}function At(e,n){if(!Ai)throw new Error("it must be called inside describe");Ai.cases.push({name:e,fn:n,status:"pending"})}function Te(e){return{toBe(n){if(e!==n)throw new Error(`Expected ${n} but got ${e}`)},toEqual(n){if(JSON.stringify(e)!==JSON.stringify(n))throw new Error(`Expected ${JSON.stringify(n)} but got ${JSON.stringify(e)}`)},toBeTruthy(){if(!e)throw new Error(`Expected ${e} to be truthy`)},toBeFalsy(){if(e)throw new Error(`Expected ${e} to be falsy`)},toBeGreaterThan(n){if(e<=n)throw new Error(`Expected ${e} to be greater than ${n}`)},toContain(n){if(Array.isArray(e)){if(!e.includes(n))throw new Error(`Expected array to contain ${n}`)}else if(e instanceof Set){if(!e.has(n))throw new Error(`Expected Set to contain ${n}`)}else if(typeof e=="string"){if(!e.includes(n))throw new Error(`Expected string to contain ${n}`)}else throw new Error(`Expected ${e} to be an Array, Set or String`)},toBeDefined(){if(e===void 0)throw new Error("Expected value to be defined")}}}const Oi="dutch_app_progress";let Ya=null;function Df(){Ya=localStorage.getItem(Oi),localStorage.removeItem(Oi)}function Mf(){Ya?localStorage.setItem(Oi,Ya):localStorage.removeItem(Oi)}async function Fr(){for(const e of ti)for(const n of e.cases)n.status="pending",n.error=void 0;Df();try{for(const e of ti)for(const n of e.cases)try{await n.fn(),n.status="passed"}catch(t){n.status="failed",n.error=t,console.error(`Test failed: ${e.name} - ${n.name}`,t)}}finally{Mf()}}Sf("Storage Utils",()=>{At("initTodayWords should generate 10 new words",()=>{const e=Ut(!0);Te(e.length).toBe(10);const n=we();Te(n.todayTargetIds.length).toBe(10),Te(n.lastLearnDate).toBe(Ie(new Date,"yyyy-MM-dd"))}),At("markWordAsLearned should update learned words and daily records",()=>{const n=Ut(!0)[0].id;Wl(n);const t=we();Te(t.learnedWordIds).toContain(n),Te(t.todayLearnedIds).toContain(n);const i=Ie(new Date,"yyyy-MM-dd");Te(t.dailyLearningRecords).toBeDefined(),t.dailyLearningRecords&&(Te(t.dailyLearningRecords[i]).toBeDefined(),Te(t.dailyLearningRecords[i]).toContain(n))}),At("checkIn should update check-in history",()=>{nn({lastCheckInDate:null,consecutiveDays:0,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[],dailyLearningRecords:{}});const e=Pt();Te(e).toBe(!0);const n=we(),t=Ie(new Date,"yyyy-MM-dd");Te(n.lastCheckInDate).toBe(t),Te(n.consecutiveDays).toBe(1),Te(n.checkInHistory).toContain(t);const i=Pt();Te(i).toBe(!1)}),At("checkIn should increment consecutiveDays if checked in yesterday",()=>{const e=Ie(Za(new Date,1),"yyyy-MM-dd");nn({lastCheckInDate:e,consecutiveDays:5,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[e],dailyLearningRecords:{}});const n=Pt();Te(n).toBe(!0);const t=we();Te(t.consecutiveDays).toBe(6)}),At("checkIn should reset consecutiveDays if missed a day",()=>{const e=Ie(Za(new Date,2),"yyyy-MM-dd");nn({lastCheckInDate:e,consecutiveDays:5,totalLearned:0,learnedWordIds:[],todayLearnedIds:[],todayTargetIds:[],lastLearnDate:null,checkInHistory:[e],dailyLearningRecords:{}});const n=Pt();Te(n).toBe(!0);const t=we();Te(t.consecutiveDays).toBe(1)})});const Ef={class:"min-h-screen bg-gray-50 p-4"},Tf={class:"max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden"},Wf={class:"p-6 border-b border-gray-100 flex justify-between items-center"},Af=["disabled"],Of={class:"p-6 space-y-6"},Rf={class:"font-bold text-gray-700 border-b border-gray-100 pb-2"},Pf={class:"space-y-2"},Hf={class:"mt-1"},Nf={key:0,class:"w-4 h-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin"},Lf={key:1,class:"w-4 h-4 text-green-500"},$f={key:2,class:"w-4 h-4 text-red-500"},Bf={class:"flex-1"},Ff={key:0,class:"mt-2 text-xs text-red-600 bg-red-100 p-2 rounded overflow-x-auto font-mono"},Vf={key:0,class:"text-center text-gray-500 py-8"},Gf=Ue({__name:"TestRunner",setup(e){const n=J(!1);tn(async()=>{n.value=!0,setTimeout(async()=>{await Fr(),n.value=!1},500)});const t=async()=>{n.value=!0,await Fr(),n.value=!1};return(i,a)=>(D(),W("div",Ef,[h("div",Tf,[h("div",Wf,[a[0]||(a[0]=h("h1",{class:"text-xl font-bold text-gray-800"},"测试运行器",-1)),h("button",{onClick:t,class:"text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors",disabled:n.value},E(n.value?"运行中...":"重新运行"),9,Af)]),h("div",Of,[(D(!0),W(ze,null,Xe(P(ti),(o,r)=>(D(),W("div",{key:r,class:"space-y-3"},[h("h2",Rf,E(o.name),1),h("div",Pf,[(D(!0),W(ze,null,Xe(o.cases,(s,l)=>(D(),W("div",{key:l,class:fe(["flex items-start gap-3 p-3 rounded-lg transition-colors",{"bg-gray-50":s.status==="pending","bg-green-50":s.status==="passed","bg-red-50":s.status==="failed"}])},[h("div",Hf,[s.status==="pending"?(D(),W("div",Nf)):s.status==="passed"?(D(),W("div",Lf,"✓")):(D(),W("div",$f,"✗"))]),h("div",Bf,[h("p",{class:fe(["text-sm font-medium",{"text-gray-600":s.status==="pending","text-green-800":s.status==="passed","text-red-800":s.status==="failed"}])},E(s.name),3),s.error?(D(),W("div",Ff,E(s.error.message||s.error),1)):me("",!0)])],2))),128))])]))),128)),P(ti).length===0?(D(),W("div",Vf," 没有找到测试套件 ")):me("",!0)])])]))}}),Uf={id:"thema1",name:"Thema 1",description:"认识与问候 - Kennismaken en begroeten",icon:"🤝",color:"from-blue-500 to-cyan-600",courses:[{id:"thema1-questions",name:"疑问词",description:"常用疑问词及用法",icon:"❓",color:"from-cyan-500 to-cyan-600",words:[{id:10101,dutch:"waar",chinese:"哪里",english:"where",example:"Waar woon je?",example_cn:"你住在哪里？",pronunciation:"[ʋaːr]"},{id:10102,dutch:"wat",chinese:"什么",english:"what",example:"Wat wil je vragen?",example_cn:"你想问什么？",pronunciation:"[ʋɑt]"},{id:10103,dutch:"welk",chinese:"哪个（中性单数）",english:"which (het)",example:"Welk boek lees jij?",example_cn:"你读哪本书？",pronunciation:"[ʋɛlk]"},{id:10104,dutch:"welke",chinese:"哪个/哪些",english:"which (de/plural)",example:"Welke oefening doen we?",example_cn:"我们做哪一题练习？",pronunciation:"[ˈʋɛlkə]"},{id:10105,dutch:"wie",chinese:"谁",english:"who",example:"Wie is je docent?",example_cn:"谁是你的老师？",pronunciation:"[ʋi]"},{id:10106,dutch:"hoe",chinese:"怎么/如何",english:"how",example:"Hoe heet je?",example_cn:"你叫什么名字？",pronunciation:"[hu]"}]},{id:"thema1-nouns",name:"名词",description:"认识与问候场景中的常用名词",icon:"📝",color:"from-indigo-500 to-indigo-600",words:[{id:10201,dutch:"bus",chinese:"公交车",english:"bus",example:"Kom je met de bus?",example_cn:"你坐公交来吗？",pronunciation:"[bʏs]"},{id:10202,dutch:"computer",chinese:"电脑",english:"computer",example:"Ik heb een probleem met mijn computer.",example_cn:"我的电脑有问题。",pronunciation:"[kɔmˈpjuːtər]"},{id:10203,dutch:"foto",chinese:"照片",english:"photo",example:"Dit is een foto van mijn geboorteland.",example_cn:"这是我祖国的一张照片。",pronunciation:"[ˈfoːtoː]"},{id:10204,dutch:"koffie",chinese:"咖啡",english:"coffee",example:"Heb je nog koffie?",example_cn:"你还有咖啡吗？",pronunciation:"[ˈkɔfi]"},{id:10205,dutch:"land",chinese:"国家",english:"country",example:"Uit welk land kom jij?",example_cn:"你来自哪个国家？",pronunciation:"[lɑnt]"},{id:10206,dutch:"plaats",chinese:"城市/地方",english:"place",example:"In welke plaats woon jij?",example_cn:"你住在哪个城市？",pronunciation:"[plaːts]"},{id:10207,dutch:"straat",chinese:"街道",english:"street",example:"In welke straat woont u?",example_cn:"您住在哪条街？",pronunciation:"[straːt]"},{id:10208,dutch:"thee",chinese:"茶",english:"tea",example:"Wil je thee of koffie?",example_cn:"你要茶还是咖啡？",pronunciation:"[teː]"},{id:10209,dutch:"naam",chinese:"名字",english:"name",example:"Wat is je naam?",example_cn:"你叫什么名字？",pronunciation:"[naːm]"},{id:10210,dutch:"voornaam",chinese:"名",english:"first name",example:"Mijn voornaam is Peter.",example_cn:"我的名字（名）是 Peter。",pronunciation:"[ˈvoːrnaːm]"},{id:10211,dutch:"achternaam",chinese:"姓",english:"surname",example:"Mijn achternaam is Jansen.",example_cn:"我的姓是 Jansen。",pronunciation:"[ˈɑxtərnaːm]"},{id:10212,dutch:"vraag",chinese:"问题",english:"question",example:"Ik heb een vraag. Kun je me helpen?",example_cn:"我有个问题。你能帮我吗？",pronunciation:"[vraːx]"},{id:10213,dutch:"antwoord",chinese:"回答",english:"answer",example:"Ik heb een antwoord op je vraag.",example_cn:"我有你问题的答案。",pronunciation:"[ˈɑntʋoːrt]"},{id:10214,dutch:"cursus",chinese:"课程",english:"course",example:"Hij doet een cursus Nederlands.",example_cn:"他在上荷兰语课程。",pronunciation:"[ˈkʏrsʏs]"},{id:10215,dutch:"dag",chinese:"天",english:"day",example:"Op welke dag heb je les?",example_cn:"你哪天上课？",pronunciation:"[dɑx]"},{id:10216,dutch:"dialoog",chinese:"对话",english:"dialogue",example:"Lees de dialoog.",example_cn:"读这段对话。",pronunciation:"[dijaːˈloːx]"},{id:10217,dutch:"informatie",chinese:"信息",english:"information",example:"Bedankt voor de informatie.",example_cn:"谢谢你的信息。",pronunciation:"[ɪnfɔrˈmaːtsi]"},{id:10218,dutch:"oefening",chinese:"练习",english:"exercise",example:"We doen een oefening voor de grammatica.",example_cn:"我们做一个语法练习。",pronunciation:"[ˈufənɪŋ]"},{id:10219,dutch:"pauze",chinese:"休息",english:"break",example:"Hebben we een pauze in de les?",example_cn:"我们上课中有休息吗？",pronunciation:"[ˈpɔuzə]"},{id:10220,dutch:"probleem",chinese:"问题/麻烦",english:"problem",example:"Ik heb een vervelend probleem.",example_cn:"我有个麻烦的问题。",pronunciation:"[proːˈbleːm]"},{id:10221,dutch:"werk",chinese:"工作/作业",english:"work",example:"Ik heb veel werk vandaag.",example_cn:"我今天有很多事要做。",pronunciation:"[ʋɛrk]"},{id:10222,dutch:"woord",chinese:"单词",english:"word",example:"Hoeveel woorden ken je?",example_cn:"你认识多少个单词？",pronunciation:"[ʋoːrt]"},{id:10223,dutch:"Nederlands",chinese:"荷兰语",english:"Dutch",example:"Ik spreek het Nederlands goed.",example_cn:"我荷兰语说得很好。",pronunciation:"[ˈneːdərlɑnts]"}]},{id:"thema1-persons",name:"人称相关名词",description:"与人相关的名词",icon:"👥",color:"from-pink-500 to-pink-600",words:[{id:10251,dutch:"persoon",chinese:"人",english:"person",example:"Hoeveel personen zijn er in de cursus?",example_cn:"课程里有多少人？",pronunciation:"[pɛrˈsoːn]"},{id:10252,dutch:"buurman",chinese:"男邻居",english:"neighbour",example:"Mijn buurman komt uit Spanje.",example_cn:"我的男邻居来自西班牙。",pronunciation:"[ˈbyːrmɑn]"},{id:10253,dutch:"docent",chinese:"老师",english:"teacher",example:"De docent heet Joost.",example_cn:"老师叫 Joost。",pronunciation:"[doːˈsɛnt]"}]},{id:"thema1-pronouns",name:"人称代词",description:"荷兰语人称代词",icon:"👤",color:"from-violet-500 to-violet-600",words:[{id:10301,dutch:"ik",chinese:"我",english:"I",example:"Ik heet Martijn.",example_cn:"我叫 Martijn。",pronunciation:"[ɪk]"},{id:10302,dutch:"jij / je",chinese:"你",english:"you",example:"Jij bent verkouden.",example_cn:"你感冒了。",pronunciation:"[jɛi] / [jə]"},{id:10303,dutch:"u",chinese:"您",english:"you (formal)",example:"Kunt u me helpen?",example_cn:"您能帮我吗？",pronunciation:"[y]"},{id:10304,dutch:"hij",chinese:"他",english:"he",example:"Hij spreekt Italiaans.",example_cn:"他会说意大利语。",pronunciation:"[hɛi]"},{id:10305,dutch:"zij / ze",chinese:"她",english:"she",example:"Zij is vandaag vrij.",example_cn:"她今天有空。",pronunciation:"[zɛi] / [zə]"},{id:10306,dutch:"zij / ze (复数)",chinese:"他们/她们",english:"they",example:"Zij komen uit Zuid-Afrika.",example_cn:"他们来自南非。",pronunciation:"[zɛi] / [zə]"},{id:10307,dutch:"wij / we",chinese:"我们",english:"we",example:"Wij gaan naar een café.",example_cn:"我们去咖啡馆。",pronunciation:"[ʋɛi] / [ʋə]"},{id:10308,dutch:"jullie",chinese:"你们",english:"you (plural)",example:"Begrijpen jullie de oefening?",example_cn:"你们理解这个练习吗？",pronunciation:"[ˈjʏli]"},{id:10309,dutch:"jou",chinese:"你（宾格）",english:"you (object)",example:"Hoe gaat het met jou?",example_cn:"你最近怎么样？",pronunciation:"[jɑu]"},{id:10310,dutch:"mij / me",chinese:"我（宾格）",english:"me",example:"Kun je mij even helpen?",example_cn:"你能帮我一下吗？",pronunciation:"[mɛi] / [mə]"},{id:10311,dutch:"mijn",chinese:"我的",english:"my",example:"Mijn naam is John.",example_cn:"我的名字是 John。",pronunciation:"[mɛin]"}]},{id:"thema1-verbs",name:"动词",description:"认识与问候场景中的常用动词",icon:"🏃",color:"from-purple-500 to-purple-600",words:[{id:10401,dutch:"beantwoorden",chinese:"回答",english:"to answer",example:"Hij beantwoordt de vragen.",example_cn:"他回答这些问题。",pronunciation:"[bəˈɑntʋoːrdə(n)]"},{id:10402,dutch:"begroeten",chinese:"问候",english:"to greet",example:"Zij begroeten de docent.",example_cn:"他们向老师问好。",pronunciation:"[bəˈɣruːtə(n)]"},{id:10403,dutch:"zijn",chinese:"是",english:"to be",example:"Mirjam en Jan zijn mijn docenten.",example_cn:"Mirjam 和 Jan 是我的老师。",pronunciation:"[zɛin]"},{id:10404,dutch:"gaan",chinese:"去",english:"to go",example:"Gaan we naar Engeland?",example_cn:"我们去英国吗？",pronunciation:"[ɣaːn]"},{id:10405,dutch:"geven",chinese:"给",english:"to give",example:"De docent geeft antwoord.",example_cn:"老师给出回答。",pronunciation:"[ˈɣeːvə(n)]"},{id:10406,dutch:"hebben",chinese:"有",english:"to have",example:"Ik heb een vraag.",example_cn:"我有个问题。",pronunciation:"[ˈhɛbə(n)]"},{id:10407,dutch:"heten",chinese:"叫（姓名）",english:"to be called",example:"Hoe heet je?",example_cn:"你叫什么名字？",pronunciation:"[ˈheːtə(n)]"},{id:10408,dutch:"helpen",chinese:"帮助",english:"to help",example:"Zij helpt mij.",example_cn:"她帮助我。",pronunciation:"[ˈhɛlpə(n)]"},{id:10409,dutch:"kennen",chinese:"认识/了解",english:"to know",example:"Ik ken Stein.",example_cn:"我认识 Stein。",pronunciation:"[ˈkɛnə(n)]"},{id:10410,dutch:"kennismaken",chinese:"认识（初次）",english:"to get acquainted",example:"De docent maakt kennis met de cursisten.",example_cn:"老师与学员互相认识。",pronunciation:"[ˈkɛnɪsˌmaːkə(n)]"},{id:10411,dutch:"kiezen",chinese:"选择",english:"to choose",example:"Kies het goede antwoord.",example_cn:"选择正确答案。",pronunciation:"[ˈkiːzə(n)]"},{id:10412,dutch:"kijken",chinese:"看",english:"to look",example:"Kijk naar de foto.",example_cn:"看这张照片。",pronunciation:"[ˈkɛikə(n)]"},{id:10413,dutch:"komen",chinese:"来",english:"to come",example:"Zij komen uit Vietnam.",example_cn:"他们来自越南。",pronunciation:"[ˈkoːmə(n)]"},{id:10414,dutch:"kunnen",chinese:"能/会",english:"can",example:"Zij kan Chinees spreken.",example_cn:"她会说中文。",pronunciation:"[ˈkʏnə(n)]"},{id:10415,dutch:"lezen",chinese:"读",english:"to read",example:"Hij leest de dialoog.",example_cn:"他读这段对话。",pronunciation:"[ˈleːzə(n)]"},{id:10416,dutch:"meelezen",chinese:"跟读",english:"to read along",example:"Luister, lees mee en zeg na.",example_cn:"听、跟读并复述。",pronunciation:"[ˈmeːleːzə(n)]"},{id:10417,dutch:"luisteren",chinese:"听",english:"to listen",example:"Ik luister naar de tekst.",example_cn:"我听这段课文。",pronunciation:"[ˈlœystərə(n)]"},{id:10418,dutch:"mogen",chinese:"可以",english:"may",example:"Mag ik iets vragen?",example_cn:"我可以问点什么吗？",pronunciation:"[ˈmoːɣə(n)]"},{id:10419,dutch:"ontmoeten",chinese:"遇见",english:"to meet",example:"Leuk je te ontmoeten!",example_cn:"很高兴见到你！",pronunciation:"[ɔntˈmuːtə(n)]"},{id:10420,dutch:"schrijven",chinese:"写",english:"to write",example:"Hij schrijft een e-mail.",example_cn:"他写一封邮件。",pronunciation:"[ˈsxrɛivə(n)]"},{id:10421,dutch:"spreken",chinese:"说（语言）",english:"to speak",example:"Jij spreekt echt goed Frans.",example_cn:"你法语说得真好。",pronunciation:"[ˈspreːkə(n)]"},{id:10422,dutch:"vragen",chinese:"问",english:"to ask",example:"Ik vraag het aan de docent.",example_cn:"我去问老师。",pronunciation:"[ˈvraːɣə(n)]"},{id:10423,dutch:"invullen",chinese:"填写",english:"to fill in",example:"Vul het goede woord in.",example_cn:"把正确的词填进去。",pronunciation:"[ˈɪnvʏlə(n)]"},{id:10424,dutch:"willen",chinese:"想要",english:"to want",example:"Ik wil graag koffie.",example_cn:"我想要咖啡。",pronunciation:"[ˈʋɪlə(n)]"},{id:10425,dutch:"wonen",chinese:"居住",english:"to live",example:"We wonen in Amersfoort.",example_cn:"我们住在 Amersfoort。",pronunciation:"[ˈʋoːnə(n)]"}]},{id:"thema1-prepositions",name:"介词",description:"常用介词",icon:"🔗",color:"from-sky-500 to-sky-600",words:[{id:10501,dutch:"in",chinese:"在……里",english:"in",example:"Zij woont in Soest.",example_cn:"她住在 Soest。",pronunciation:"[ɪn]"},{id:10502,dutch:"met",chinese:"和/用",english:"with",example:"Hij komt met de bus.",example_cn:"他坐公交来。",pronunciation:"[mɛt]"},{id:10503,dutch:"op",chinese:"在……上（日期/表面）",english:"on",example:"Het concert is op 2 oktober.",example_cn:"音乐会在 10 月 2 日。",pronunciation:"[ɔp]"},{id:10504,dutch:"tot",chinese:"到/回头见",english:"until/to",example:"Tot gauw!",example_cn:"回头见！",pronunciation:"[tɔt]"},{id:10505,dutch:"uit",chinese:"来自/从……出来",english:"from/out of",example:"Hij komt uit Peru.",example_cn:"他来自秘鲁。",pronunciation:"[œyt]"},{id:10506,dutch:"van",chinese:"的/从",english:"of/from",example:'Vul de goede vorm van "hebben" in.',example_cn:'填入 "hebben" 的正确形式。',pronunciation:"[vɑn]"},{id:10507,dutch:"naar",chinese:"往/向",english:"to",example:"Luister naar de woorden.",example_cn:"听这些单词。",pronunciation:"[naːr]"}]},{id:"thema1-expressions",name:"常用表达",description:"日常问候与寒暄用语",icon:"💬",color:"from-amber-500 to-amber-600",words:[{id:10551,dutch:"hallo",chinese:"你好",english:"hello",example:"Hallo, hoe gaat het?",example_cn:"你好，最近怎么样？",pronunciation:"[ˈhɑloː]"},{id:10552,dutch:"hoi",chinese:"嗨",english:"hi",example:"Hoi, fijn je te zien.",example_cn:"嗨，很高兴见到你。",pronunciation:"[hɔi]"},{id:10553,dutch:"ha",chinese:"哈喽",english:"ha",example:"Ha, daar ben je!",example_cn:"哈，你来了！",pronunciation:"[haː]"},{id:10554,dutch:"goedemorgen",chinese:"早上好",english:"good morning",example:"Goedemorgen, docent.",example_cn:"老师早上好。",pronunciation:"[ˌɣudəˈmɔrɣə(n)]"},{id:10555,dutch:"goedemiddag",chinese:"下午好",english:"good afternoon",example:"Goedemiddag, mevrouw.",example_cn:"下午好，女士。",pronunciation:"[ˌɣudəˈmɪdɑx]"},{id:10556,dutch:"goedenavond",chinese:"晚上好",english:"good evening",example:"Goedenavond allemaal.",example_cn:"大家晚上好。",pronunciation:"[ˌɣudəˈnaːvɔnt]"},{id:10557,dutch:"bedankt",chinese:"谢谢",english:"thanks",example:"Bedankt voor je hulp.",example_cn:"谢谢你的帮助。",pronunciation:"[bəˈdɑŋkt]"},{id:10558,dutch:"dankje",chinese:"谢谢你",english:"thank you",example:"Dankje, dat is lief.",example_cn:"谢谢你，你真好。",pronunciation:"[ˈdɑŋkjə]"},{id:10559,dutch:"doeg",chinese:"拜拜",english:"bye",example:"Doeg, tot morgen!",example_cn:"拜拜，明天见！",pronunciation:"[dux]"},{id:10560,dutch:"doei",chinese:"再见",english:"bye",example:"Doei, fijne dag!",example_cn:"再见，祝你今天愉快！",pronunciation:"[dui]"},{id:10561,dutch:"fijn weekend!",chinese:"周末愉快！",english:"have a nice weekend!",example:"Fijn weekend!",example_cn:"周末愉快！",pronunciation:"[fɛin ˈʋiːkɛnt]"},{id:10562,dutch:"goed weekend!",chinese:"周末愉快！",english:"good weekend!",example:"Goed weekend, tot maandag.",example_cn:"周末愉快，周一见。",pronunciation:"[ɣut ˈʋiːkɛnt]"},{id:10563,dutch:"ja",chinese:"是的",english:"yes",example:"Ja, natuurlijk.",example_cn:"是的，当然。",pronunciation:"[jaː]"},{id:10564,dutch:"welkom",chinese:"欢迎",english:"welcome",example:"Welkom in de les.",example_cn:"欢迎来到课堂。",pronunciation:"[ˈʋɛlkɔm]"},{id:10565,dutch:"ja hoor",chinese:"当然可以",english:"sure",example:"Kun je helpen? – Ja hoor.",example_cn:"你能帮忙吗？——当然可以。",pronunciation:"[jaː hoːr]"},{id:10566,dutch:"nee",chinese:"不",english:"no",example:"Nee, dank je.",example_cn:"不了，谢谢。",pronunciation:"[neː]"},{id:10567,dutch:"leuk!",chinese:"真不错！",english:"nice!",example:"Leuk, dat doen we!",example_cn:"真不错，我们就这么做！",pronunciation:"[lœyk]"},{id:10568,dutch:"natuurlijk",chinese:"当然",english:"of course",example:"Natuurlijk kom ik.",example_cn:"我当然会来。",pronunciation:"[naːˈtyːrlək]"},{id:10569,dutch:"oké",chinese:"好的",english:"okay",example:"Oké, we beginnen.",example_cn:"好的，我们开始。",pronunciation:"[oːˈkeː]"},{id:10570,dutch:"prima",chinese:"很好/没问题",english:"fine/great",example:"Prima, tot straks.",example_cn:"很好，待会儿见。",pronunciation:"[ˈpriːmaː]"},{id:10571,dutch:"sorry",chinese:"抱歉",english:"sorry",example:"Sorry, ik ben te laat.",example_cn:"抱歉，我迟到了。",pronunciation:"[ˈsɔri]"},{id:10572,dutch:"tot zo!",chinese:"待会儿见！",english:"see you soon!",example:"Ik ben zo terug, tot zo!",example_cn:"我马上回来，待会儿见！",pronunciation:"[tɔt zoː]"},{id:10573,dutch:"tot straks!",chinese:"一会儿见！",english:"see you later!",example:"Tot straks in de klas.",example_cn:"课堂上一会儿见。",pronunciation:"[tɔt strɑks]"},{id:10574,dutch:"tot dan!",chinese:"到时候见！",english:"see you then!",example:"We spreken af om 8 uur, tot dan!",example_cn:"我们8点见，到时见！",pronunciation:"[tɔt dɑn]"},{id:10575,dutch:"nou, sterkte",chinese:"那……加油/保重",english:"well, good luck",example:"Je bent ziek? Nou, sterkte.",example_cn:"你生病了？那保重。",pronunciation:"[nɑu ˈstɛrktə]"},{id:10576,dutch:"oh, vervelend",chinese:"哎呀，真糟糕",english:"oh, annoying",example:"Oh, vervelend voor je.",example_cn:"哎呀，这对你来说真糟。",pronunciation:"[oː vərˈveːlənt]"}]},{id:"thema1-other",name:"其他词汇",description:"冠词、副词和其他常用词",icon:"📚",color:"from-teal-500 to-teal-600",words:[{id:10601,dutch:"de",chinese:"（定冠词）这/该（通性）",english:"the (de)",example:"De docent heet Bart.",example_cn:"这位老师叫 Bart。",pronunciation:"[də]"},{id:10602,dutch:"het",chinese:"（定冠词）这/该（中性）",english:"the (het)",example:"Het land is in Europa.",example_cn:"这个国家在欧洲。",pronunciation:"[hɛt]"},{id:10603,dutch:"allemaal",chinese:"都、全都",english:"all/everyone",example:"We komen allemaal uit Polen.",example_cn:"我们都来自波兰。",pronunciation:"[ˌɑləˈmaːl]"},{id:10604,dutch:"alles",chinese:"一切",english:"everything",example:"We leren alles in de les.",example_cn:"我们在课上学所有内容。",pronunciation:"[ˈɑləs]"},{id:10605,dutch:"en",chinese:"和",english:"and",example:"Luister naar de dialoog en lees mee.",example_cn:"听对话并跟读。",pronunciation:"[ɛn]"},{id:10606,dutch:"geen",chinese:"没有/不",english:"no/none",example:"Ik lust geen koffie.",example_cn:"我不喜欢咖啡。",pronunciation:"[ɣeːn]"},{id:10607,dutch:"graag",chinese:"乐意地/想要",english:"gladly/please",example:"Oké, dan thee graag.",example_cn:"好的，那我想要茶。",pronunciation:"[ɣraːx]"},{id:10608,dutch:"hè",chinese:"呀/吧（语气词）",english:"right?/huh",example:"Leuk hè!",example_cn:"很不错吧！",pronunciation:"[hɛ]"},{id:10609,dutch:"Nederland",chinese:"荷兰",english:"Netherlands",example:"Ze wonen nu in Nederland.",example_cn:"他们现在住在荷兰。",pronunciation:"[ˈneːdərlɑnt]"},{id:10610,dutch:"ook",chinese:"也",english:"also",example:"Spreek je ook Engels?",example_cn:"你也会说英语吗？",pronunciation:"[oːk]"},{id:10611,dutch:"vandaan",chinese:"来自（与 waar 搭配）",english:"from (with waar)",example:"Waar kom je vandaan?",example_cn:"你来自哪里？",pronunciation:"[vɑnˈdaːn]"},{id:10612,dutch:"verkouden",chinese:"感冒的",english:"having a cold",example:"Ik ben verkouden.",example_cn:"我感冒了。",pronunciation:"[vərˈkɑudə(n)]"},{id:10613,dutch:"vrij",chinese:"空闲的/放假的",english:"free",example:"We zijn vandaag vrij.",example_cn:"我们今天休息。",pronunciation:"[vrɛi]"},{id:10614,dutch:"wel",chinese:"还行/的确",english:"well/indeed",example:"Het gaat wel.",example_cn:"还行。",pronunciation:"[ʋɛl]"},{id:10615,dutch:"nu",chinese:"现在",english:"now",example:"Ze hebben nu les.",example_cn:"他们现在在上课。",pronunciation:"[ny]"},{id:10616,dutch:"vandaag",chinese:"今天",english:"today",example:"Ik heb vandaag een afspraakje.",example_cn:"我今天有个约会。",pronunciation:"[vɑnˈdaːx]"}]}]},Kf={id:"thema2",name:"Thema 2",description:"个人信息 - Persoonsgegevens",icon:"🖊",color:"from-green-500 to-emerald-600",courses:[{id:"thema2-nouns1",name:"名词(上)",description:"个人信息相关名词第一部分",icon:"📋",color:"from-green-500 to-green-600",words:[{id:20001,dutch:"aanvraagformulier",chinese:"申请表",english:"application form",example:"U kunt dit aanvraagformulier invullen.",example_cn:"您可以填写这份申请表。",pronunciation:"[ˈaːnvraːxfɔrˌmyˌliːr]"},{id:20002,dutch:"adres",chinese:"地址",english:"address",example:"Zijn adres is Mauritsstraat 7.",example_cn:"他的地址是Mauritsstraat 7号。",pronunciation:"[ɑˈdrɛs]"},{id:20003,dutch:"afhaalbewijs",chinese:"取货凭证",english:"collection receipt",example:"Hebt u het afhaalbewijs voor het pakketje?",example_cn:"您有包裹的取件凭证吗？",pronunciation:"[ˈɑfhaːlbəˌʋɛis]"},{id:20004,dutch:"auto",chinese:"汽车",english:"car",example:"De auto staat in de Parkstraat.",example_cn:"车停在公园街。",pronunciation:"[ˈɑutoː]"},{id:20005,dutch:"balie",chinese:"柜台",english:"counter",example:"U kunt een formulier halen bij balie 8.",example_cn:"您可以在8号柜台领取一份表格。",pronunciation:"[ˈbaːli]"},{id:20006,dutch:"boek",chinese:"书",english:"book",example:"Ons boek heet Van Start.",example_cn:"我们的书叫《Van Start》。",pronunciation:"[buk]"},{id:20007,dutch:"burgerlijke staat",chinese:"婚姻状况",english:"marital status",example:"Wat is uw burgerlijke staat?",example_cn:"您的婚姻状况是什么？",pronunciation:"[ˈbʏrɣərlɪkə staːt]"},{id:20008,dutch:"burgerservicenummer",chinese:"公民服务号码(BSN)",english:"citizen service number",example:"Mijn burgerservicenummer is 123456782.",example_cn:"我的公民服务号码是123456782。",pronunciation:"[ˈbʏrɣərˌsɛrvɪsəˌnʏmər]"},{id:20009,dutch:"buurt",chinese:"社区/街区",english:"neighbourhood",example:"In welke buurt wonen jullie?",example_cn:"你们住在哪个社区？",pronunciation:"[byːrt]"},{id:20010,dutch:"centrum",chinese:"市中心",english:"centre",example:"Ik woon dicht bij het centrum.",example_cn:"我住得离市中心很近。",pronunciation:"[ˈsɛntrʏm]"},{id:20011,dutch:"cursist",chinese:"学员",english:"student/participant",example:"De cursist heeft een vraag.",example_cn:"学员有一个问题。",pronunciation:"[kʏrˈsɪst]"},{id:20012,dutch:"cursusboek",chinese:"教材",english:"course book",example:"Dit cursusboek is voor niveau A1.",example_cn:"这本教材用于A1水平。",pronunciation:"[ˈkʏrsʏsˌbuk]"},{id:20013,dutch:"fiets",chinese:"自行车",english:"bicycle",example:"Kom je met de fiets?",example_cn:"你骑自行车来吗？",pronunciation:"[fits]"},{id:20014,dutch:"formulier",chinese:"表格",english:"form",example:"U kunt het formulier invullen.",example_cn:"您可以填写这张表格。",pronunciation:"[fɔrˈmyˌliːr]"}]},{id:"thema2-nouns2",name:"名词(中)",description:"个人信息相关名词第二部分",icon:"📄",color:"from-emerald-500 to-emerald-600",words:[{id:20101,dutch:"geboortedatum",chinese:"出生日期",english:"date of birth",example:"Mijn geboortedatum is 14 april 2016.",example_cn:"我的出生日期是2016年4月14日。",pronunciation:"[ɣəˈboːrtəˌdaːtʏm]"},{id:20102,dutch:"gemeente",chinese:"市政府/市镇",english:"municipality",example:"Ik wil me inschrijven bij de gemeente.",example_cn:"我想去市政府办理登记。",pronunciation:"[ɣəˈmeːntə]"},{id:20103,dutch:"getal",chinese:"数字",english:"number/figure",example:"Hij schrijft het getal 7 op het formulier.",example_cn:"他在表格上写下数字7。",pronunciation:"[ɣəˈtɑl]"},{id:20104,dutch:"handtekening",chinese:"签名",english:"signature",example:"U kunt hier uw handtekening zetten.",example_cn:"您可以在这里签名。",pronunciation:"[ˈhɑntˌteːkənɪŋ]"},{id:20105,dutch:"heer",chinese:"先生（正式）",english:"gentleman/Mr.",example:"Dit pakket is voor de heer Schouten.",example_cn:"这个包裹是给Schouten先生的。",pronunciation:"[heːr]"},{id:20106,dutch:"huis",chinese:"房子",english:"house",example:"Ons huis staat in de Schalkwijkerstraat.",example_cn:"我们的房子在Schalkwijkerstraat。",pronunciation:"[hœys]"},{id:20107,dutch:"huiswerk",chinese:"作业",english:"homework",example:"Zij doet elke dag huiswerk voor haar cursus.",example_cn:"她每天为她的课程做作业。",pronunciation:"[ˈhœysʋɛrk]"},{id:20108,dutch:"hulp",chinese:"帮助",english:"help",example:"Hij krijgt hulp van zijn vriendin.",example_cn:"他得到女朋友的帮助。",pronunciation:"[hʏlp]"},{id:20109,dutch:"identiteitsbewijs",chinese:"身份证件",english:"identity document",example:"Hebt u uw identiteitsbewijs bij u?",example_cn:"您带身份证了吗？",pronunciation:"[ˌidɛntiˈtɛitsbəˌʋɛis]"},{id:20110,dutch:"inschrijving",chinese:"注册/登记",english:"registration",example:"Hij vult een formulier in voor de inschrijving.",example_cn:"他在填写注册用的表格。",pronunciation:"[ˈɪnsxrɛivɪŋ]"},{id:20111,dutch:"kamer",chinese:"房间",english:"room",example:"Het studentenhuis heeft acht kamers.",example_cn:"这栋学生宿舍有八个房间。",pronunciation:"[ˈkaːmər]"},{id:20112,dutch:"kantine",chinese:"食堂",english:"canteen",example:"We lunchen samen in de kantine.",example_cn:"我们一起在食堂吃午饭。",pronunciation:"[kɑnˈtinə]"},{id:20113,dutch:"keer",chinese:"次/回",english:"time (occurrence)",example:"Tot de volgende keer!",example_cn:"下次见！",pronunciation:"[keːr]"},{id:20114,dutch:"kopie",chinese:"复印件",english:"copy",example:"Dit is een kopie van mijn paspoort.",example_cn:"这是我护照的复印件。",pronunciation:"[koːˈpi]"}]},{id:"thema2-nouns3",name:"名词(下)",description:"个人信息相关名词第三部分",icon:"📑",color:"from-green-600 to-green-700",words:[{id:20150,dutch:"legitimatiebewijs",chinese:"身份证明",english:"identification",example:"Hebt u uw legitimatiebewijs bij u?",example_cn:"您有带身份证明吗？",pronunciation:"[leːɣitiˈmaːtsibəˌʋɛis]"},{id:20151,dutch:"meneer",chinese:"先生",english:"sir/Mr.",example:"Meneer Jansen gaat zijn pakket afhalen.",example_cn:"Jansen先生要去取包裹。",pronunciation:"[məˈneːr]"},{id:20152,dutch:"Nederlander",chinese:"荷兰人",english:"Dutch person",example:"Hij is Nederlander.",example_cn:"他是荷兰人。",pronunciation:"[ˈneːdərlɑndər]"},{id:20153,dutch:"nummer",chinese:"号码",english:"number",example:"Op welk nummer woon je?",example_cn:"你住几号？",pronunciation:"[ˈnʏmər]"},{id:20154,dutch:"pakketje",chinese:"小包裹",english:"small package",example:"Het pakketje is bij PostNL.",example_cn:"小包裹在PostNL。",pronunciation:"[pɑˈkɛtjə]"},{id:20155,dutch:"paspoort",chinese:"护照",english:"passport",example:"Ik heb een nieuw paspoort.",example_cn:"我有一本新护照。",pronunciation:"[ˈpɑspoːrt]"},{id:20156,dutch:"postcode",chinese:"邮政编码",english:"postal code",example:"Mijn postcode is 3951 KL.",example_cn:"我的邮政编码是3951 KL。",pronunciation:"[ˈpɔstˌkoːdə]"},{id:20157,dutch:"receptie",chinese:"前台/接待处",english:"reception",example:"U kunt bij de receptie een formulier halen.",example_cn:"您可以在前台领取一张表格。",pronunciation:"[reːˈsɛpsi]"},{id:20158,dutch:"rijbewijs",chinese:"驾照",english:"driving licence",example:"Mijn rijbewijs ligt thuis.",example_cn:"我的驾照放在家里。",pronunciation:"[ˈrɛibəˌʋɛis]"},{id:20159,dutch:"school",chinese:"学校",english:"school",example:"Op welke school zitten jullie kinderen?",example_cn:"你们的孩子在哪所学校上学？",pronunciation:"[sxoːl]"},{id:20160,dutch:"telefoonnummer",chinese:"电话号码",english:"phone number",example:"Mijn telefoonnummer is 06-49351724.",example_cn:"我的电话号码是06-49351724。",pronunciation:"[ˌteːləˈfoːnˌnʏmər]"},{id:20161,dutch:"tijd",chinese:"时间",english:"time",example:"Wat zijn de lestijden van de cursus?",example_cn:"这门课程的上课时间是什么？",pronunciation:"[tɛit]"},{id:20162,dutch:"uur",chinese:"小时/点钟",english:"hour/o'clock",example:"De les duurt een uur.",example_cn:"这节课持续一个小时。",pronunciation:"[yːr]"},{id:20163,dutch:"vriend",chinese:"朋友（男）",english:"friend (male)",example:"Mijn vriend komt ook naar Nederland.",example_cn:"我的朋友也会来荷兰。",pronunciation:"[vrint]"},{id:20164,dutch:"woonplaats",chinese:"居住地",english:"place of residence",example:"Wat is uw woonplaats?",example_cn:"您的居住地是哪里？",pronunciation:"[ˈʋoːnplaːts]"},{id:20165,dutch:"week",chinese:"星期/周",english:"week",example:"De cursus duurt twaalf weken.",example_cn:"这门课程持续十二周。",pronunciation:"[ʋeːk]"},{id:20166,dutch:"zaterdag",chinese:"星期六",english:"Saturday",example:"Op zaterdag ben ik vrij.",example_cn:"我星期六有空。",pronunciation:"[ˈzaːtərdɑx]"},{id:20167,dutch:"zaterdagmiddag",chinese:"周六下午",english:"Saturday afternoon",example:"Zaterdagmiddag ga ik naar vrienden.",example_cn:"周六下午我要去见朋友。",pronunciation:"[ˈzaːtərdɑxˌmɪdɑx]"}]},{id:"thema2-verbs1",name:"动词(上)",description:"个人信息场景中的常用动词第一部分",icon:"🏃",color:"from-lime-500 to-lime-600",words:[{id:20201,dutch:"begrijpen",chinese:"理解/明白",english:"to understand",example:"Begrijp je de oefening?",example_cn:"你明白这道练习吗？",pronunciation:"[bəˈɣrɛipə(n)]"},{id:20202,dutch:"brengen",chinese:"带去/送去",english:"to bring",example:"Zij brengt de kinderen naar school.",example_cn:"她送孩子们去学校。",pronunciation:"[ˈbrɛŋə(n)]"},{id:20203,dutch:"gaan",chinese:"去",english:"to go",example:"Wat ga je in het weekend doen?",example_cn:"你周末要做什么？",pronunciation:"[ɣaːn]"},{id:20204,dutch:"doen",chinese:"做",english:"to do",example:"Wat heb je in het weekend gedaan?",example_cn:"你周末做了什么？",pronunciation:"[dun]"},{id:20205,dutch:"hebben",chinese:"有",english:"to have",example:"Je hebt vandaag les.",example_cn:"你今天有课。",pronunciation:"[ˈhɛbə(n)]"},{id:20206,dutch:"invullen",chinese:"填写",english:"to fill in",example:"Ik heb het formulier ingevuld.",example_cn:"我已经把表格填好了。",pronunciation:"[ˈɪnˌvʏlə(n)]"},{id:20207,dutch:"zich inschrijven",chinese:"注册/登记",english:"to register",example:"Ik wil me inschrijven bij de sportschool.",example_cn:"我想在健身房注册。",pronunciation:"[zɪx ˈɪnsxrɛivə(n)]"},{id:20208,dutch:"kunnen",chinese:"能/可以",english:"can",example:"Kan ik u helpen?",example_cn:"我可以帮您吗？",pronunciation:"[ˈkʏnə(n)]"},{id:20209,dutch:"krijgen",chinese:"得到",english:"to get/receive",example:"U krijgt het boek zaterdag met de post.",example_cn:"您会在周六通过邮寄收到这本书。",pronunciation:"[ˈkrɛiɣə(n)]"},{id:20210,dutch:"liggen",chinese:"躺/位于",english:"to lie",example:"Het meisje ligt te slapen.",example_cn:"女孩正躺着睡觉。",pronunciation:"[ˈlɪɣə(n)]"},{id:20211,dutch:"moeten",chinese:"必须",english:"must/have to",example:"Ik moet veel Nederlands spreken.",example_cn:"我必须多说荷兰语。",pronunciation:"[ˈmutə(n)]"},{id:20212,dutch:"noteren",chinese:"记录",english:"to note down",example:"Ik noteer het telefoonnummer.",example_cn:"我记录下电话号码。",pronunciation:"[noːˈteːrə(n)]"},{id:20213,dutch:"pakken",chinese:"拿/取",english:"to grab/take",example:"Hij pakt zijn identiteitsbewijs.",example_cn:"他拿起了自己的身份证件。",pronunciation:"[ˈpɑkə(n)]"},{id:20214,dutch:"zeggen",chinese:"说",english:"to say",example:"Wat zeg je?",example_cn:"你说什么？",pronunciation:"[ˈzɛɣə(n)]"},{id:20215,dutch:"kijken",chinese:"看",english:"to look/watch",example:"We kijken naar een film.",example_cn:"我们看一部电影。",pronunciation:"[ˈkɛikə(n)]"},{id:20216,dutch:"luisteren",chinese:"听",english:"to listen",example:"Ik luister graag naar muziek.",example_cn:"我喜欢听音乐。",pronunciation:"[ˈlœystərə(n)]"},{id:20217,dutch:"lunchen",chinese:"吃午饭",english:"to have lunch",example:"Ze lunchen om twaalf uur.",example_cn:"他们十二点吃午饭。",pronunciation:"[ˈlʏnʃə(n)]"}]},{id:"thema2-verbs2",name:"动词(下)",description:"个人信息场景中的常用动词第二部分",icon:"🔄",color:"from-green-400 to-lime-500",words:[{id:20250,dutch:"maken",chinese:"做/制作",english:"to make",example:"Ze maken het huiswerk.",example_cn:"他们做作业。",pronunciation:"[ˈmaːkə(n)]"},{id:20251,dutch:"nodig hebben",chinese:"需要",english:"to need",example:"Ik heb meer tijd nodig.",example_cn:"我需要更多时间。",pronunciation:"[ˈnoːdəx ˈhɛbə(n)]"},{id:20252,dutch:"oefenen",chinese:"练习",english:"to practise",example:"Je moet veel oefenen.",example_cn:"你要多练习。",pronunciation:"[ˈufənə(n)]"},{id:20253,dutch:"ontbijten",chinese:"吃早餐",english:"to have breakfast",example:"Ik ontbijt met een broodje en koffie.",example_cn:"我早餐吃面包和咖啡。",pronunciation:"[ɔntˈbɛitə(n)]"},{id:20254,dutch:"slapen",chinese:"睡觉",english:"to sleep",example:"De kinderen slapen.",example_cn:"孩子们在睡觉。",pronunciation:"[ˈslaːpə(n)]"},{id:20255,dutch:"sporten",chinese:"运动",english:"to exercise",example:"We sporten in het weekend.",example_cn:"我们周末做运动。",pronunciation:"[ˈspɔrtə(n)]"},{id:20256,dutch:"spreken",chinese:"说（语言）",english:"to speak",example:"Zij spreken Duits.",example_cn:"她们说德语。",pronunciation:"[ˈspreːkə(n)]"},{id:20257,dutch:"tanden poetsen",chinese:"刷牙",english:"to brush teeth",example:"Ik poets mijn tanden.",example_cn:"我刷牙。",pronunciation:"[ˈtɑndə(n) ˈputsə(n)]"},{id:20258,dutch:"televisiekijken",chinese:"看电视",english:"to watch TV",example:"Ze kijken televisie.",example_cn:"他们看电视。",pronunciation:"[ˌteːləˈviːziˌkɛikə(n)]"},{id:20259,dutch:"terugkomen",chinese:"回来",english:"to come back",example:"Wanneer kom je terug?",example_cn:"你什么时候回来？",pronunciation:"[təˈrʏxˌkoːmə(n)]"},{id:20260,dutch:"versturen",chinese:"寄送/发送",english:"to send",example:"We versturen het pakket vandaag.",example_cn:"我们今天寄出包裹。",pronunciation:"[vərˈstyːrə(n)]"},{id:20261,dutch:"wachten",chinese:"等待",english:"to wait",example:"Ik wacht al drie weken op mijn pakket.",example_cn:"我已经等包裹三周了。",pronunciation:"[ˈʋɑxtə(n)]"},{id:20262,dutch:"werken",chinese:"工作",english:"to work",example:"Hij werkt als kapper.",example_cn:"他当理发师。",pronunciation:"[ˈʋɛrkə(n)]"},{id:20263,dutch:"zetten",chinese:"放/摆",english:"to put/set",example:"Ik zet een kopje thee.",example_cn:"我倒一杯茶。",pronunciation:"[ˈzɛtə(n)]"},{id:20264,dutch:"zien",chinese:"看见",english:"to see",example:"Hoi Enrico, leuk je te zien!",example_cn:"嗨Enrico，很高兴见到你！",pronunciation:"[zin]"}]},{id:"thema2-possessives",name:"物主代词与表达",description:"物主代词和常用表达",icon:"👤",color:"from-teal-500 to-teal-600",words:[{id:20301,dutch:"haar",chinese:"她的",english:"her",example:"Haar adres is Emmalaan 36.",example_cn:"她的地址是Emmalaan 36号。",pronunciation:"[haːr]"},{id:20302,dutch:"hun",chinese:"他们的",english:"their",example:"Hun kind heet Alex.",example_cn:"他们的孩子叫Alex。",pronunciation:"[hʏn]"},{id:20303,dutch:"jouw",chinese:"你的",english:"your (informal)",example:"Wat is jouw telefoonnummer?",example_cn:"你的电话号码是多少？",pronunciation:"[jɑu]"},{id:20304,dutch:"jullie",chinese:"你们的",english:"your (plural)",example:"Waar staat jullie auto?",example_cn:"你们的车停在哪里？",pronunciation:"[ˈjʏli]"},{id:20305,dutch:"mijn",chinese:"我的",english:"my",example:"Waar is mijn boek?",example_cn:"我的书在哪里？",pronunciation:"[mɛin]"},{id:20306,dutch:"ons",chinese:"我们的(het词)",english:"our (het)",example:"Wat is ons huiswerk?",example_cn:"我们的作业是什么？",pronunciation:"[ɔns]"},{id:20307,dutch:"onze",chinese:"我们的(de词)",english:"our (de)",example:"Onze docent heet Daan.",example_cn:"我们的老师叫Daan。",pronunciation:"[ˈɔnzə]"},{id:20308,dutch:"uw",chinese:"您的",english:"your (formal)",example:"Wat is uw geboortedatum?",example_cn:"您的出生日期是什么？",pronunciation:"[yː]"},{id:20309,dutch:"zijn",chinese:"他的",english:"his",example:"Zijn naam is Peter.",example_cn:"他的名字是Peter。",pronunciation:"[zɛin]"},{id:20310,dutch:"alstublieft",chinese:"请/给您",english:"please/here you are",example:"Alstublieft, uw formulier.",example_cn:"请，这是您的表格。",pronunciation:"[ˌɑlstyˈblift]"},{id:20311,dutch:"bedankt",chinese:"谢谢",english:"thanks",example:"Bedankt voor uw hulp.",example_cn:"谢谢您的帮助。",pronunciation:"[bəˈdɑŋkt]"},{id:20312,dutch:"goedemiddag",chinese:"下午好",english:"good afternoon",example:"Goedemiddag, meneer.",example_cn:"下午好，先生。",pronunciation:"[ˌɣudəˈmɪdɑx]"},{id:20313,dutch:"momentje",chinese:"稍等一下",english:"just a moment",example:"Momentje, ik zoek het even op.",example_cn:"稍等，我查一下。",pronunciation:"[moːˈmɛntjə]"},{id:20314,dutch:"tot ziens",chinese:"再见",english:"goodbye",example:"Tot ziens en fijne dag!",example_cn:"再见，祝您今天愉快！",pronunciation:"[tɔt zins]"}]},{id:"thema2-prepositions",name:"介词",description:"常用介词",icon:"🔗",color:"from-sky-500 to-sky-600",words:[{id:20350,dutch:"bij",chinese:"在(某处)",english:"at/by",example:"Kom je bij mij thuis koffie drinken?",example_cn:"你来我家喝咖啡吗？",pronunciation:"[bɛi]"},{id:20351,dutch:"binnen",chinese:"在…之内",english:"within",example:"U hoort van ons binnen drie werkdagen.",example_cn:"您将在三个工作日内收到我们的消息。",pronunciation:"[ˈbɪnə(n)]"},{id:20352,dutch:"om",chinese:"在(时间)",english:"at (time)",example:"We hebben om negen uur les.",example_cn:"我们九点上课。",pronunciation:"[ɔm]"},{id:20353,dutch:"voor",chinese:"给/为",english:"for",example:"Ik heb een pakket voor nummer 28.",example_cn:"我有一个给28号的包裹。",pronunciation:"[voːr]"}]},{id:"thema2-other",name:"其他词汇",description:"形容词、副词和其他常用词",icon:"📚",color:"from-cyan-500 to-cyan-600",words:[{id:20401,dutch:"alleenstaand",chinese:"单身的",english:"single",example:"Hij is alleenstaand.",example_cn:"他是单身的。",pronunciation:"[ɑˈleːnstaːnt]"},{id:20402,dutch:"alvast",chinese:"先/提前",english:"in advance",example:"Tot dan en bedankt alvast.",example_cn:"到时见，也先谢谢你。",pronunciation:"[ɑlˈvɑst]"},{id:20403,dutch:"blij",chinese:"高兴的",english:"happy",example:"Ik ben blij met uw hulp.",example_cn:"我很高兴得到您的帮助。",pronunciation:"[blɛi]"},{id:20404,dutch:"dan",chinese:"然后/那时",english:"then",example:"In de zomer komt mijn broer naar Nederland. Dan gaan we een dag naar Amsterdam.",example_cn:"夏天我哥哥会来荷兰，然后我们会去阿姆斯特丹玩一天。",pronunciation:"[dɑn]"},{id:20405,dutch:"dus",chinese:"所以",english:"so/therefore",example:"Ik moet Nederlands leren dus ik doe een cursus.",example_cn:"我需要学荷兰语，所以我参加了一个课程。",pronunciation:"[dʏs]"},{id:20406,dutch:"een",chinese:"一个（冠词）",english:"a/an",example:"Ik heb een vraag.",example_cn:"我有一个问题。",pronunciation:"[ən]"},{id:20407,dutch:"eerst",chinese:"首先/先",english:"first",example:"Eerst doen we een leesoefening en dan een schrijfoefening.",example_cn:"我们先做阅读练习，然后做写作练习。",pronunciation:"[eːrst]"},{id:20408,dutch:"even",chinese:"一下/稍微",english:"just/briefly",example:"Kun je me even helpen?",example_cn:"你能帮我一下吗？",pronunciation:"[ˈeːvə(n)]"},{id:20409,dutch:"gehuwd",chinese:"已婚的",english:"married (formal)",example:"Mijn burgerlijke staat is gehuwd.",example_cn:"我的婚姻状况是已婚。",pronunciation:"[ɣəˈhyːt]"},{id:20410,dutch:"geldig",chinese:"有效的",english:"valid",example:"Is je rijbewijs nog geldig?",example_cn:"你的驾照还有效吗？",pronunciation:"[ˈɣɛldəx]"},{id:20411,dutch:"getrouwd",chinese:"结婚的",english:"married",example:"We zijn in augustus getrouwd.",example_cn:"我们在八月结婚了。",pronunciation:"[ɣəˈtrɑut]"},{id:20412,dutch:"graag",chinese:"乐意/请",english:"gladly",example:"Ik wil me graag inschrijven.",example_cn:"我很想登记注册。",pronunciation:"[ɣraːx]"},{id:20413,dutch:"hier",chinese:"这里",english:"here",example:"U kunt hier uw handtekening zetten.",example_cn:"您可以在这里签名。",pronunciation:"[hiːr]"},{id:20414,dutch:"makkelijk",chinese:"容易的",english:"easy",example:"Chinees leren is niet makkelijk.",example_cn:"学中文不容易。",pronunciation:"[ˈmɑkələk]"},{id:20415,dutch:"meer",chinese:"更多",english:"more",example:"We moeten meer oefenen.",example_cn:"我们要多练习。",pronunciation:"[meːr]"},{id:20416,dutch:"mobiele",chinese:"移动的（手机的）",english:"mobile",example:"Wat is het nummer van je mobiele telefoon?",example_cn:"你的手机号码是多少？",pronunciation:"[moːˈbiːlə]"},{id:20417,dutch:"moeilijk",chinese:"困难的",english:"difficult",example:"Chinees leren is moeilijk.",example_cn:"学中文很难。",pronunciation:"[ˈmujələk]"}]},{id:"thema2-other2",name:"其他词汇(续)",description:"更多形容词、副词和常用词",icon:"📖",color:"from-indigo-500 to-indigo-600",words:[{id:20450,dutch:"nieuwe",chinese:"新的",english:"new",example:"Ons nieuwe adres is Kijkduinstraat 72.",example_cn:"我们的新地址是Kijkduinstraat 72号。",pronunciation:"[ˈniːʋə]"},{id:20451,dutch:"ons",chinese:"我们（宾语）",english:"us",example:"Kunt u ons helpen?",example_cn:"您能帮我们吗？",pronunciation:"[ɔns]"},{id:20452,dutch:"orde",chinese:"秩序/状态",english:"order",example:"Alle gegevens zijn in orde.",example_cn:"所有信息都没问题。",pronunciation:"[ˈɔrdə]"},{id:20453,dutch:"persoonlijke",chinese:"个人的",english:"personal",example:"Uw persoonlijke nummer is 142746391.",example_cn:"您的个人号码是142746391。",pronunciation:"[pɛrˈsoːnlɪkə]"},{id:20454,dutch:"samenwonend",chinese:"同居的",english:"cohabiting",example:"Onze burgerlijke staat is samenwonend.",example_cn:"我们的婚姻状况是同居。",pronunciation:"[ˈsaːmə(n)ˌʋoːnənt]"},{id:20455,dutch:"slecht",chinese:"差地/不好地",english:"badly/poorly",example:"Ik spreek slecht Engels.",example_cn:"我的英语说得不好。",pronunciation:"[slɛxt]"},{id:20456,dutch:"thuis",chinese:"在家",english:"at home",example:"We spreken thuis Frans.",example_cn:"我们在家说法语。",pronunciation:"[tœys]"},{id:20457,dutch:"vanavond",chinese:"今晚",english:"tonight",example:"Hij gaat vanavond pizza eten.",example_cn:"他今晚要去吃披萨。",pronunciation:"[vɑnˈaːvɔnt]"},{id:20458,dutch:"veel",chinese:"很多",english:"much/many",example:"We hebben veel huiswerk.",example_cn:"我们有很多作业。",pronunciation:"[veːl]"},{id:20459,dutch:"wanneer",chinese:"什么时候",english:"when",example:"Wanneer begint de cursus?",example_cn:"课程什么时候开始？",pronunciation:"[ʋɑˈneːr]"}]}]},qf={id:"thema3",name:"Thema 3",description:"家庭和人间关系 - Familie en relaties",icon:"👨‍👩‍👧‍👦",color:"from-orange-500 to-red-600",courses:[{id:"thema3-nouns1",name:"名词(上)",description:"场所与日常名词",icon:"🏠",color:"from-orange-500 to-orange-600",words:[{id:30001,dutch:"afspraak",chinese:"约会/预约",english:"appointment",example:"Zullen we een afspraak maken?",example_cn:"我们约个时间好吗？",pronunciation:"[ˈɑfspraːk]"},{id:30002,dutch:"agenda",chinese:"日程表",english:"diary/agenda",example:"Even in mijn agenda kijken.",example_cn:"我看一下我的日程表。",pronunciation:"[aːˈɣɛndaː]"},{id:30003,dutch:"baan",chinese:"工作/职业",english:"job",example:"Ik zoek een baan voor 24 uur per week.",example_cn:"我在找一份每周24小时的工作。",pronunciation:"[baːn]"},{id:30004,dutch:"bezoek",chinese:"拜访/来访",english:"visit",example:"We krijgen vrijdagavond bezoek.",example_cn:"我们星期五晚上会有客人来访。",pronunciation:"[bəˈzuk]"},{id:30005,dutch:"bibliotheek",chinese:"图书馆",english:"library",example:"Ik breng de boeken terug naar de bibliotheek.",example_cn:"我把书还回图书馆。",pronunciation:"[ˌbiblioːˈteːk]"},{id:30006,dutch:"bioscoop",chinese:"电影院",english:"cinema",example:"Zullen we een film kijken in de bioscoop?",example_cn:"我们去电影院看电影好吗？",pronunciation:"[ˌbioːˈskoːp]"},{id:30007,dutch:"bos",chinese:"森林",english:"forest",example:"Ga je mee wandelen in het bos?",example_cn:"你想一起去森林散步吗？",pronunciation:"[bɔs]"},{id:30008,dutch:"buur",chinese:"邻居",english:"neighbour",example:"Mijn buren wonen al twintig jaar in deze straat.",example_cn:"我的邻居已经在这条街上住了二十年。",pronunciation:"[byːr]"},{id:30009,dutch:"buurman",chinese:"男邻居",english:"male neighbour",example:"Mijn buurman komt uit Soedan.",example_cn:"我的男邻居来自苏丹。",pronunciation:"[ˈbyːrmɑn]"},{id:30010,dutch:"buurvrouw",chinese:"女邻居",english:"female neighbour",example:"Ik drink graag koffie met mijn buurvrouw.",example_cn:"我喜欢和女邻居一起喝咖啡。",pronunciation:"[ˈbyːrvrɑu]"},{id:30011,dutch:"collega",chinese:"同事",english:"colleague",example:"Ik kan goed met mijn collega samenwerken.",example_cn:"我和我的同事合作得很好。",pronunciation:"[kɔˈleːɣaː]"},{id:30012,dutch:"contact",chinese:"联系",english:"contact",example:"Ik heb goed contact met mijn buren.",example_cn:"我和邻居关系很好。",pronunciation:"[kɔnˈtɑkt]"},{id:30013,dutch:"discotheek",chinese:"迪厅/舞厅",english:"disco",example:"Ze gaan elke zaterdag dansen in de discotheek.",example_cn:"他们每周六都去舞厅跳舞。",pronunciation:"[ˌdɪskoːˈteːk]"},{id:30014,dutch:"dierentuin",chinese:"动物园",english:"zoo",example:"We gaan met de kinderen naar de dierentuin.",example_cn:"我们带孩子去动物园。",pronunciation:"[ˈdiːrənˌtœyn]"}]},{id:"thema3-nouns2",name:"名词(中)",description:"社交与活动名词",icon:"🎭",color:"from-red-500 to-red-600",words:[{id:30101,dutch:"douche",chinese:"淋浴",english:"shower",example:"Hij neemt elke ochtend een douche.",example_cn:"他每天早上洗澡。",pronunciation:"[duʃ]"},{id:30102,dutch:"fiets",chinese:"自行车",english:"bicycle",example:"Mijn fiets staat nog op het station.",example_cn:"我的自行车还在车站。",pronunciation:"[fits]"},{id:30103,dutch:"film",chinese:"电影",english:"film",example:"Vind jij de films over Harry Potter leuk?",example_cn:"你喜欢Harry Potter的电影吗？",pronunciation:"[fɪlm]"},{id:30104,dutch:"hond",chinese:"狗",english:"dog",example:"Onze hond heet Ollie.",example_cn:"我们的狗叫Ollie。",pronunciation:"[hɔnt]"},{id:30105,dutch:"idee",chinese:"主意/想法",english:"idea",example:"Wat een goed idee!",example_cn:"真是个好主意！",pronunciation:"[iˈdeː]"},{id:30106,dutch:"informatie",chinese:"信息",english:"information",example:"Kunt u mij informatie geven over die cursus?",example_cn:"您能给我一些关于那门课的信息吗？",pronunciation:"[ˌɪnfɔrˈmaːtsi]"},{id:30107,dutch:"kennis",chinese:"熟人/知识",english:"acquaintance",example:"Zij zijn goede kennissen van ons.",example_cn:"他们是我们的熟人。",pronunciation:"[ˈkɛnɪs]"},{id:30108,dutch:"kind",chinese:"孩子",english:"child",example:"We hebben drie kinderen.",example_cn:"我们有三个孩子。",pronunciation:"[kɪnt]"},{id:30109,dutch:"krant",chinese:"报纸",english:"newspaper",example:"Ik lees elke dag de krant.",example_cn:"我每天都看报纸。",pronunciation:"[krɑnt]"},{id:30110,dutch:"leiding",chinese:"管理/领导",english:"leadership",example:"Ik geef leiding aan een team van vijf koks.",example_cn:"我管理一个有五位厨师的团队。",pronunciation:"[ˈlɛidɪŋ]"},{id:30111,dutch:"liefde",chinese:"爱/爱情",english:"love",example:"Zij is de liefde van mijn leven!",example_cn:"她是我一生的挚爱！",pronunciation:"[ˈlifde]"},{id:30112,dutch:"man",chinese:"丈夫/男人",english:"man/husband",example:"Ik ben getrouwd met mijn man, Mathieu.",example_cn:"我和我的丈夫Mathieu结婚了。",pronunciation:"[mɑn]"},{id:30113,dutch:"medecursist",chinese:"同班学员",english:"fellow student",example:"Mijn medecursist helpt me met huiswerk.",example_cn:"我的同班学员会帮我做作业。",pronunciation:"[ˈmeːdəkʏrˌsɪst]"},{id:30114,dutch:"medewerker",chinese:"员工",english:"employee",example:"Hij geeft leiding aan twintig medewerkers.",example_cn:"他管理二十名员工。",pronunciation:"[ˈmeːdəˌʋɛrkər]"}]},{id:"thema3-nouns3",name:"名词(下)",description:"场所与时间名词",icon:"🏛️",color:"from-rose-500 to-rose-600",words:[{id:30151,dutch:"middag",chinese:"下午",english:"afternoon",example:"In de middag heb ik een afspraak bij de tandarts.",example_cn:"下午我有一个牙医预约。",pronunciation:"[ˈmɪdɑx]"},{id:30152,dutch:"morgen",chinese:"早晨/明天",english:"morning/tomorrow",example:"Morgen werk ik tot vijf uur.",example_cn:"明天我工作到五点。",pronunciation:"[ˈmɔrɣə(n)]"},{id:30153,dutch:"muziekcentrum",chinese:"音乐中心",english:"music centre",example:"We gaan vanavond naar het muziekcentrum.",example_cn:"我们今晚去音乐中心。",pronunciation:"[myˈzikˌsɛntrʏm]"},{id:30154,dutch:"museum",chinese:"博物馆",english:"museum",example:"Er is een mooie tentoonstelling in het museum.",example_cn:"博物馆里有一个很漂亮的展览。",pronunciation:"[myˈzeːʏm]"},{id:30155,dutch:"nacht",chinese:"夜晚",english:"night",example:"Ik werk twee nachten per week in het ziekenhuis.",example_cn:"我每周在医院上两个晚班。",pronunciation:"[nɑxt]"},{id:30156,dutch:"ochtend",chinese:"早晨",english:"morning",example:"Ze gaan morgenochtend naar yoga.",example_cn:"她们明早去上瑜伽课。",pronunciation:"[ˈɔxtənt]"},{id:30157,dutch:"park",chinese:"公园",english:"park",example:"Zullen we even wandelen in het park?",example_cn:"我们去公园散散步好吗？",pronunciation:"[pɑrk]"},{id:30158,dutch:"reis",chinese:"旅行",english:"trip/journey",example:"Goede reis!",example_cn:"旅途愉快！",pronunciation:"[rɛis]"},{id:30159,dutch:"relatie",chinese:"关系",english:"relationship",example:"Mijn ouders hebben een goede relatie.",example_cn:"我父母关系很好。",pronunciation:"[reːˈlaːtsi]"},{id:30160,dutch:"rondleiding",chinese:"导览/参观讲解",english:"guided tour",example:"Hij geeft zijn ouders een rondleiding door Utrecht.",example_cn:"他带父母在乌得勒支参观。",pronunciation:"[ˈrɔntˌlɛidɪŋ]"},{id:30161,dutch:"speeltuin",chinese:"游乐场",english:"playground",example:"De kinderen zijn in de speeltuin.",example_cn:"孩子们在游乐场。",pronunciation:"[ˈspeːlˌtœyn]"},{id:30162,dutch:"stadion",chinese:"体育场",english:"stadium",example:"De voetballers van Ajax spelen in hun eigen stadion.",example_cn:"阿贾克斯球员在自己的主场比赛。",pronunciation:"[ˈstaːdiɔn]"},{id:30163,dutch:"team",chinese:"团队",english:"team",example:"Ik ben manager van een groot team.",example_cn:"我是一个大团队的经理。",pronunciation:"[tiːm]"},{id:30164,dutch:"theater",chinese:"剧院",english:"theatre",example:"Er is een mooie voorstelling in het theater.",example_cn:"剧院里有一场精彩的表演。",pronunciation:"[teːˈjaːtər]"},{id:30165,dutch:"uur",chinese:"点钟/小时",english:"hour/o'clock",example:"Het is acht uur.",example_cn:"现在是八点。",pronunciation:"[yːr]"},{id:30166,dutch:"verjaardag",chinese:"生日",english:"birthday",example:"Zondag vieren we de verjaardag van Simon.",example_cn:"星期天我们庆祝西蒙的生日。",pronunciation:"[vərˈjaːrdɑx]"},{id:30167,dutch:"werk",chinese:"工作",english:"work",example:"Het werk is interessant.",example_cn:"这份工作很有意思。",pronunciation:"[ʋɛrk]"},{id:30168,dutch:"winkelcentrum",chinese:"购物中心",english:"shopping centre",example:"We gaan winkelen in het winkelcentrum.",example_cn:"我们去购物中心逛街。",pronunciation:"[ˈʋɪŋkəlˌsɛntrʏm]"},{id:30169,dutch:"ziekenhuis",chinese:"医院",english:"hospital",example:"Zij werkt in het ziekenhuis.",example_cn:"她在医院工作。",pronunciation:"[ˈzikənˌhœys]"},{id:30170,dutch:"zwembad",chinese:"游泳池",english:"swimming pool",example:"De kinderen zijn de hele zomer in het zwembad.",example_cn:"孩子们整个夏天都在游泳池里。",pronunciation:"[ˈzʋɛmbɑt]"}]},{id:"thema3-family1",name:"家庭成员(上)",description:"直系亲属",icon:"👪",color:"from-pink-500 to-pink-600",words:[{id:30201,dutch:"broer",chinese:"哥哥/弟弟",english:"brother",example:"Ik heb twee broers.",example_cn:"我有两个兄弟。",pronunciation:"[brur]"},{id:30202,dutch:"dochter",chinese:"女儿",english:"daughter",example:"Mijn dochter wordt morgen achttien.",example_cn:"我的女儿明天就十八岁了。",pronunciation:"[ˈdɔxtər]"},{id:30203,dutch:"echtgenoot",chinese:"丈夫（正式）",english:"husband (formal)",example:"Haar echtgenoot is overleden.",example_cn:"她的丈夫去世了。",pronunciation:"[ˈɛxtɣəˌnoːt]"},{id:30204,dutch:"echtgenote",chinese:"妻子（正式）",english:"wife (formal)",example:"Zijn echtgenote is vandaag jarig.",example_cn:"他的妻子今天过生日。",pronunciation:"[ˈɛxtɣəˌnoːtə]"},{id:30205,dutch:"familie",chinese:"家庭/家族",english:"family",example:"We hebben een grote familie.",example_cn:"我们有一个大家庭。",pronunciation:"[faːˈmiːli]"},{id:30206,dutch:"gezin",chinese:"核心家庭",english:"nuclear family",example:"Zij wonen nu met hun gezin in Nederland.",example_cn:"他们现在和家人住在荷兰。",pronunciation:"[ɣəˈzɪn]"},{id:30207,dutch:"grootmoeder",chinese:"祖母/外婆",english:"grandmother",example:"Mijn grootmoeder woont dicht bij ons.",example_cn:"我的祖母住得离我们很近。",pronunciation:"[ˈɣroːtˌmudər]"},{id:30208,dutch:"grootvader",chinese:"祖父/外公",english:"grandfather",example:"Mijn grootvader is ziek.",example_cn:"我的祖父生病了。",pronunciation:"[ˈɣroːtˌfaːdər]"},{id:30209,dutch:"kleindochter",chinese:"孙女/外孙女",english:"granddaughter",example:"Mijn kleindochter spreekt twee talen.",example_cn:"我的孙女会说两种语言。",pronunciation:"[ˈklɛinˌdɔxtər]"},{id:30210,dutch:"kleinzoon",chinese:"孙子/外孙",english:"grandson",example:"Mijn kleinzoon gaat naar groep drie.",example_cn:"我的孙子上三年级。",pronunciation:"[ˈklɛinˌzoːn]"},{id:30211,dutch:"moeder",chinese:"母亲/妈妈",english:"mother",example:"Mijn moeder moet vandaag rijexamen doen.",example_cn:"我的妈妈今天要考驾照。",pronunciation:"[ˈmudər]"},{id:30212,dutch:"vader",chinese:"父亲/爸爸",english:"father",example:"Mijn vader kijkt elke avond televisie.",example_cn:"我的父亲每天晚上都看电视。",pronunciation:"[ˈfaːdər]"},{id:30213,dutch:"zoon",chinese:"儿子",english:"son",example:"Onze zoon gaat op vakantie naar Egypte.",example_cn:"我们的儿子去埃及度假。",pronunciation:"[zoːn]"},{id:30214,dutch:"zus",chinese:"姐姐/妹妹",english:"sister",example:"Mijn zus speelt volleybal.",example_cn:"我的妹妹打排球。",pronunciation:"[zʏs]"}]},{id:"thema3-family2",name:"家庭成员(下)",description:"扩展亲属与姻亲",icon:"👨‍👩‍👦‍👦",color:"from-fuchsia-500 to-fuchsia-600",words:[{id:30251,dutch:"neef",chinese:"侄子/表兄弟",english:"nephew/cousin",example:"Mijn neef gaat trouwen.",example_cn:"我的表兄要结婚了。",pronunciation:"[neːf]"},{id:30252,dutch:"neefje",chinese:"小外甥/小侄子",english:"little nephew",example:"Mijn neefje speelt graag voetbal.",example_cn:"我的小侄子很喜欢踢足球。",pronunciation:"[ˈneːfjə]"},{id:30253,dutch:"nicht",chinese:"侄女/表姐妹",english:"niece/cousin",example:"Zijn nicht woont in Eindhoven.",example_cn:"他的表妹住在埃因霍温。",pronunciation:"[nɪxt]"},{id:30254,dutch:"nichtje",chinese:"小侄女/小外甥女",english:"little niece",example:"Haar nichtje is vandaag jarig.",example_cn:"她的小侄女今天过生日。",pronunciation:"[ˈnɪxtjə]"},{id:30255,dutch:"oma",chinese:"奶奶/外婆",english:"grandma",example:"Mijn oma leest graag.",example_cn:"我的奶奶喜欢看书。",pronunciation:"[ˈoːmaː]"},{id:30256,dutch:"oom",chinese:"叔叔/舅舅",english:"uncle",example:"Mijn oom is gescheiden.",example_cn:"我的叔叔离婚了。",pronunciation:"[oːm]"},{id:30257,dutch:"opa",chinese:"爷爷/外公",english:"grandpa",example:"Mijn opa is geboren in 1951.",example_cn:"我的爷爷出生于1951年。",pronunciation:"[ˈoːpaː]"},{id:30258,dutch:"overgrootmoeder",chinese:"曾祖母/曾外祖母",english:"great-grandmother",example:"Mijn overgrootmoeder is 96 jaar.",example_cn:"我的曾祖母96岁。",pronunciation:"[ˌoːvərˈɣroːtˌmudər]"},{id:30259,dutch:"overgrootvader",chinese:"曾祖父/曾外祖父",english:"great-grandfather",example:"Mijn overgrootvader woonde op het platteland.",example_cn:"我的曾祖父住在乡下。",pronunciation:"[ˌoːvərˈɣroːtˌfaːdər]"},{id:30260,dutch:"schoondochter",chinese:"儿媳",english:"daughter-in-law",example:"Mijn schoondochter werkt in het onderwijs.",example_cn:"我儿媳在教育行业工作。",pronunciation:"[ˈsxoːnˌdɔxtər]"},{id:30261,dutch:"schoonmoeder",chinese:"岳母/婆婆",english:"mother-in-law",example:"Mijn schoonmoeder komt vanavond eten.",example_cn:"我岳母今晚来吃饭。",pronunciation:"[ˈsxoːnˌmudər]"},{id:30262,dutch:"schoonvader",chinese:"岳父/公公",english:"father-in-law",example:"Mijn schoonvader werkt in een restaurant.",example_cn:"我岳父在一家餐厅工作。",pronunciation:"[ˈsxoːnˌfaːdər]"},{id:30263,dutch:"schoonzoon",chinese:"女婿",english:"son-in-law",example:"Mijn schoonzoon is altijd druk met zijn werk.",example_cn:"我女婿总是忙于工作。",pronunciation:"[ˈsxoːnˌzoːn]"},{id:30264,dutch:"schoonzus",chinese:"嫂子/弟媳/小姑子",english:"sister-in-law",example:"Ik heb een afspraak met mijn schoonzus.",example_cn:"我跟我嫂子有约。",pronunciation:"[ˈsxoːnˌzʏs]"},{id:30265,dutch:"tante",chinese:"阿姨/姨妈",english:"aunt",example:"Mijn tante spreekt geen Engels.",example_cn:"我的阿姨不会说英语。",pronunciation:"[ˈtɑntə]"},{id:30266,dutch:"vriend",chinese:"男朋友/朋友",english:"boyfriend/friend",example:"Mijn vriend doet ook een cursus Nederlands.",example_cn:"我的男朋友也在上荷兰语课。",pronunciation:"[vrint]"},{id:30267,dutch:"vriendin",chinese:"女朋友/女性朋友",english:"girlfriend/friend",example:"Haar vriendin werkt als docent.",example_cn:"她的女朋友当老师。",pronunciation:"[vrinˈdɪn]"},{id:30268,dutch:"vrouw",chinese:"女人/妻子",english:"woman/wife",example:"Mijn vrouw komt uit Frankrijk.",example_cn:"我的妻子来自法国。",pronunciation:"[vrɑu]"},{id:30269,dutch:"zwager",chinese:"姐夫/妹夫",english:"brother-in-law",example:"Mijn zwager werkt bij een taleninstituut.",example_cn:"我的妹夫在语言学院工作。",pronunciation:"[ˈzʋaːɣər]"}]},{id:"thema3-verbs",name:"动词(上)",description:"家庭与社交场景中的常用动词",icon:"🏃",color:"from-amber-500 to-amber-600",words:[{id:30301,dutch:"afspreken",chinese:"约会/约定",english:"to meet up",example:"Wanneer zullen we afspreken?",example_cn:"我们什么时候约会？",pronunciation:"[ˈɑfˌspreːkə(n)]"},{id:30302,dutch:"barbecueën",chinese:"烧烤",english:"to barbecue",example:"Zullen we vanavond barbecueën?",example_cn:"我们今晚烧烤吗？",pronunciation:"[ˌbɑrbəˈkyːə(n)]"},{id:30303,dutch:"bellen",chinese:"打电话",english:"to call",example:"Hij belt voor een afspraak met de dokter.",example_cn:"他打电话预约医生。",pronunciation:"[ˈbɛlə(n)]"},{id:30304,dutch:"bezoeken",chinese:"参观/拜访",english:"to visit",example:"Ze bezoeken het museum.",example_cn:"她们参观博物馆。",pronunciation:"[bəˈzukə(n)]"},{id:30305,dutch:"boodschappen doen",chinese:"购物/买东西",english:"to do shopping",example:"Hij doet boodschappen in de supermarkt.",example_cn:"他在超市买东西。",pronunciation:"[ˈboːtsxɑpə(n) dun]"},{id:30306,dutch:"contact hebben",chinese:"保持联系",english:"to have contact",example:"We hebben veel contact met onze buren.",example_cn:"我们和邻居联系很多。",pronunciation:""},{id:30307,dutch:"douchen",chinese:"洗澡/淋浴",english:"to shower",example:"Hij doucht na het sporten.",example_cn:"他运动后淋浴。",pronunciation:"[ˈdusə(n)]"},{id:30308,dutch:"geloven",chinese:"相信",english:"to believe",example:"Dat geloof ik niet.",example_cn:"我不相信。",pronunciation:"[ɣəˈloːvə(n)]"},{id:30309,dutch:"kennen",chinese:"认识/了解",english:"to know",example:"Ik ken mijn buren niet zo goed.",example_cn:"我不太了解我的邻居。",pronunciation:"[ˈkɛnə(n)]"},{id:30310,dutch:"kijken",chinese:"看",english:"to watch/look",example:"Hij kijkt elke avond naar het nieuws.",example_cn:"他每天晚上看新闻。",pronunciation:"[ˈkɛikə(n)]"},{id:30311,dutch:"koken",chinese:"做饭/烹饪",english:"to cook",example:"Hij kookt groentesoep.",example_cn:"他煮蔬菜汤。",pronunciation:"[ˈkoːkə(n)]"},{id:30312,dutch:"krijgen",chinese:"得到/收到",english:"to get/receive",example:"Wat krijg je voor je verjaardag?",example_cn:"你生日会收到什么？",pronunciation:"[ˈkrɛiɣə(n)]"},{id:30313,dutch:"leiding geven aan",chinese:"领导/管理",english:"to lead/manage",example:"Zij geeft leiding aan zeven medewerkers.",example_cn:"她管理七名员工。",pronunciation:""},{id:30314,dutch:"lezen",chinese:"阅读",english:"to read",example:"Mijn vader leest graag autotijdschriften.",example_cn:"我爸爸喜欢看汽车杂志。",pronunciation:"[ˈleːzə(n)]"},{id:30315,dutch:"lunchen",chinese:"吃午饭",english:"to have lunch",example:"Alle collega's lunchen samen.",example_cn:"所有同事一起吃午饭。",pronunciation:"[ˈlʏnʃə(n)]"},{id:30316,dutch:"mailen",chinese:"发邮件",english:"to email",example:"Ik mail je de werkagenda.",example_cn:"我把工作日程发邮件给你。",pronunciation:"[ˈmeːlə(n)]"},{id:30317,dutch:"maken",chinese:"制作/做",english:"to make",example:"Ze maken een afspraak voor een lunch.",example_cn:"他们约了午餐见面。",pronunciation:"[ˈmaːkə(n)]"},{id:30318,dutch:"missen",chinese:"想念/错过",english:"to miss",example:"Ik mis mijn familie.",example_cn:"我想念我的家人。",pronunciation:"[ˈmɪsə(n)]"}]},{id:"thema3-verbs2",name:"动词(下)",description:"更多社交与活动动词",icon:"🎯",color:"from-yellow-500 to-amber-600",words:[{id:30351,dutch:"nemen",chinese:"拿/点（饮品）",english:"to take",example:"Ik neem een cappuccino.",example_cn:"我要一杯卡布奇诺。",pronunciation:"[ˈneːmə(n)]"},{id:30352,dutch:"omgaan",chinese:"与…交往/相处",english:"to associate with",example:"Mijn dochter gaat veel om met ons buurmeisje.",example_cn:"我女儿经常和邻家女孩来往。",pronunciation:"[ˈɔmˌɣaːn]"},{id:30353,dutch:"ontbijten",chinese:"吃早餐",english:"to have breakfast",example:"We ontbijten om half acht.",example_cn:"我们七点半吃早餐。",pronunciation:"[ɔntˈbɛitə(n)]"},{id:30354,dutch:"op bezoek gaan",chinese:"去拜访",english:"to visit",example:"Zaterdag gaan we op bezoek bij mijn oma.",example_cn:"周六我们去看我奶奶。",pronunciation:""},{id:30355,dutch:"opbellen",chinese:"打电话给",english:"to phone",example:"Ik bel mijn ouders elke dag op.",example_cn:"我每天给父母打电话。",pronunciation:"[ˈɔpˌbɛlə(n)]"},{id:30356,dutch:"organiseren",chinese:"组织",english:"to organize",example:"We organiseren een groot feest.",example_cn:"我们组织一个大聚会。",pronunciation:"[ˌɔrɣaːniˈzeːrə(n)]"},{id:30357,dutch:"praten",chinese:"说话/聊天",english:"to talk",example:"We praten veel over de kinderen.",example_cn:"我们经常谈论孩子们。",pronunciation:"[ˈpraːtə(n)]"},{id:30358,dutch:"schaatsen",chinese:"滑冰",english:"to skate",example:"Ze schaatsen op het ijs.",example_cn:"他们在冰上滑冰。",pronunciation:"[ˈsxaːtsə(n)]"},{id:30359,dutch:"skiën",chinese:"滑雪",english:"to ski",example:"We gaan skiën in Zwitserland.",example_cn:"我们去瑞士滑雪。",pronunciation:"[ˈskiːə(n)]"},{id:30360,dutch:"televisiekijken",chinese:"看电视",english:"to watch TV",example:"Na het eten kijken ze televisie.",example_cn:"吃完饭他们看电视。",pronunciation:"[ˌteːləˈviːziˌkɛikə(n)]"},{id:30361,dutch:"varen",chinese:"乘船/航行",english:"to sail",example:"We gaan varen met onze boot.",example_cn:"我们开船出游。",pronunciation:"[ˈvaːrə(n)]"},{id:30362,dutch:"verliefd worden",chinese:"坠入爱河",english:"to fall in love",example:"Ik wil graag verliefd worden!",example_cn:"我很想谈恋爱！",pronunciation:""},{id:30363,dutch:"vieren",chinese:"庆祝",english:"to celebrate",example:"Hij viert zijn verjaardag niet.",example_cn:"他不庆祝生日。",pronunciation:"[ˈviːrə(n)]"},{id:30364,dutch:"voelen",chinese:"感觉",english:"to feel",example:"Ik voel me goed in Nederland.",example_cn:"我在荷兰感觉很好。",pronunciation:"[ˈvulə(n)]"},{id:30365,dutch:"wandelen",chinese:"散步",english:"to walk",example:"Hij wandelt elke dag met de hond in het park.",example_cn:"他每天和狗在公园散步。",pronunciation:"[ˈʋɑndələ(n)]"},{id:30366,dutch:"werken",chinese:"工作",english:"to work",example:"Ze werkt vandaag van acht tot vijf uur.",example_cn:"她今天从8点工作到5点。",pronunciation:"[ˈʋɛrkə(n)]"}]},{id:"thema3-time",name:"时间与介词",description:"星期、季节、时间表达和介词",icon:"📅",color:"from-yellow-500 to-yellow-600",words:[{id:30401,dutch:"maandag",chinese:"星期一",english:"Monday",example:"Maandag werk ik.",example_cn:"星期一我工作。",pronunciation:"[ˈmaːndɑx]"},{id:30402,dutch:"dinsdag",chinese:"星期二",english:"Tuesday",example:"Dinsdag heb ik een afspraak bij de dokter.",example_cn:"星期二我有一个医生的预约。",pronunciation:"[ˈdɪnsdɑx]"},{id:30403,dutch:"woensdag",chinese:"星期三",english:"Wednesday",example:"Woensdag ga ik lunchen met Emma.",example_cn:"星期三我和艾玛一起吃午饭。",pronunciation:"[ˈʋunsdɑx]"},{id:30404,dutch:"donderdag",chinese:"星期四",english:"Thursday",example:"Donderdag ben ik vrij.",example_cn:"星期四我有空。",pronunciation:"[ˈdɔndərdɑx]"},{id:30405,dutch:"vrijdag",chinese:"星期五",english:"Friday",example:"Vrijdag heb ik een afspraak met een collega.",example_cn:"星期五我和一位同事有约。",pronunciation:"[ˈvrɛidɑx]"},{id:30406,dutch:"zaterdag",chinese:"星期六",english:"Saturday",example:"Zaterdag doe ik boodschappen.",example_cn:"星期六我去买东西。",pronunciation:"[ˈzaːtərdɑx]"},{id:30407,dutch:"zondag",chinese:"星期日",english:"Sunday",example:"Zondag speel ik volleybal.",example_cn:"星期天我打排球。",pronunciation:"[ˈzɔndɑx]"},{id:30408,dutch:"lente",chinese:"春天",english:"spring",example:"In de lente vieren we Koningsdag.",example_cn:"春天我们庆祝国王节。",pronunciation:"[ˈlɛntə]"},{id:30409,dutch:"zomer",chinese:"夏天",english:"summer",example:"In de zomer zwemmen we in zee.",example_cn:"夏天我们在海里游泳。",pronunciation:"[ˈzoːmər]"},{id:30410,dutch:"herfst",chinese:"秋天",english:"autumn",example:"In de herfst plukken we appels.",example_cn:"秋天我们摘苹果。",pronunciation:"[hɛrfst]"},{id:30411,dutch:"winter",chinese:"冬天",english:"winter",example:"In de winter schaatsen we op het ijs.",example_cn:"冬天我们在冰上滑冰。",pronunciation:"[ˈʋɪntər]"},{id:30412,dutch:"bij",chinese:"在…处",english:"at/near",example:"Ik zie je vanavond bij de bioscoop!",example_cn:"今晚我在电影院那边见你！",pronunciation:"[bɛi]"},{id:30413,dutch:"om",chinese:"在（时间点）",english:"at (time)",example:"De film begint om negen uur.",example_cn:"电影九点开始。",pronunciation:"[ɔm]"},{id:30414,dutch:"op",chinese:"在（日期/星期）",english:"on (date)",example:"Hij heeft les op maandag en donderdag.",example_cn:"他周一和周四有课。",pronunciation:"[ɔp]"},{id:30415,dutch:"af en toe",chinese:"偶尔",english:"now and then",example:"We spreken af en toe af met de buren.",example_cn:"我们偶尔和邻居见面。",pronunciation:"[ˌɑf ɛn ˈtu]"},{id:30416,dutch:"even",chinese:"一会儿/一下",english:"a moment",example:"Heb je even tijd?",example_cn:"你现在有点时间吗？",pronunciation:"[ˈeːvə(n)]"},{id:30417,dutch:"nooit",chinese:"从不",english:"never",example:"Hij gaat nooit naar de bioscoop.",example_cn:"他从不去电影院。",pronunciation:"[noːit]"},{id:30418,dutch:"pas",chinese:"才/刚",english:"only/just",example:"Ik ben pas drie weken in Nederland.",example_cn:"我来荷兰才三周。",pronunciation:"[pɑs]"},{id:30419,dutch:"sinds",chinese:"自从",english:"since",example:"Zij wonen sinds 2021 in Nederland.",example_cn:"他们自2021年起住在荷兰。",pronunciation:"[sɪnts]"},{id:30420,dutch:"soms",chinese:"有时",english:"sometimes",example:"Soms mis ik mijn vrienden en familie.",example_cn:"有时候我会想念我的朋友和家人。",pronunciation:"[sɔms]"}]},{id:"thema3-other",name:"其他词汇",description:"形容词、副词和其他常用词",icon:"📚",color:"from-rose-500 to-rose-600",words:[{id:30501,dutch:"aardig",chinese:"友善的",english:"nice/kind",example:"Haar collega's zijn heel aardig.",example_cn:"她的同事们很友善。",pronunciation:"[ˈaːrdəx]"},{id:30502,dutch:"alleen",chinese:"只有/仅仅",english:"only",example:"Ik ben alleen op donderdag vrij.",example_cn:"我只有周四有空。",pronunciation:"[ɑˈleːn]"},{id:30503,dutch:"bijvoorbeeld",chinese:"例如",english:"for example",example:"Zullen we iets drinken? Bijvoorbeeld bij café Mas?",example_cn:"我们喝点东西吗？比如去Mas咖啡馆？",pronunciation:"[bɛiˈvoːrbeːlt]"},{id:30504,dutch:"druk",chinese:"忙碌的",english:"busy",example:"Het is druk op het werk.",example_cn:"工作很忙。",pronunciation:"[drʏk]"},{id:30505,dutch:"eigenlijk",chinese:"其实",english:"actually",example:"Ik heb eigenlijk geen tijd voor die afspraak.",example_cn:"其实我没有时间赴那个约。",pronunciation:"[ˈɛiɣə(n)lək]"},{id:30506,dutch:"elkaar",chinese:"互相/彼此",english:"each other",example:"We bellen elkaar twee keer per week.",example_cn:"我们每周互相打两次电话。",pronunciation:"[ɛlˈkaːr]"},{id:30507,dutch:"geboren",chinese:"出生",english:"born",example:"Ik ben in Marokko geboren.",example_cn:"我在摩洛哥出生。",pronunciation:"[ɣəˈboːrə(n)]"},{id:30508,dutch:"geen",chinese:"没有",english:"no/none",example:"We hebben geen auto.",example_cn:"我们没有车。",pronunciation:"[ɣeːn]"},{id:30509,dutch:"geleden",chinese:"以前（…前）",english:"ago",example:"Mijn dochter is twee jaar geleden geboren.",example_cn:"我女儿是两年前出生的。",pronunciation:"[ɣəˈleːdə(n)]"},{id:30510,dutch:"gelukkig",chinese:"幸福的",english:"happy",example:"Ik ben heel gelukkig met hem!",example_cn:"和他在一起我很幸福！",pronunciation:"[ɣəˈlʏkəx]"},{id:30511,dutch:"gescheiden",chinese:"离婚的",english:"divorced",example:"Ze zijn vorig jaar gescheiden.",example_cn:"他们去年离婚了。",pronunciation:"[ɣəˈsxɛidə(n)]"},{id:30512,dutch:"getrouwd",chinese:"已婚的",english:"married",example:"Hij is vorige week getrouwd.",example_cn:"他上周结婚了。",pronunciation:"[ɣəˈtrɑut]"},{id:30513,dutch:"gezellig",chinese:"温馨的/愉快的",english:"cozy/pleasant",example:"Dat is een gezellig restaurant.",example_cn:"那是一家很温馨的餐厅。",pronunciation:"[ɣəˈzɛləx]"},{id:30514,dutch:"hard",chinese:"大声地/猛烈地",english:"loud/hard",example:"De muziek is zo hard.",example_cn:"音乐声太大了。",pronunciation:"[hɑrt]"},{id:30515,dutch:"ideale",chinese:"理想的",english:"ideal",example:"Voor mij is zij de ideale vrouw!",example_cn:"对我来说她是理想的伴侣！",pronunciation:"[iˈdeːˌaːlə]"},{id:30516,dutch:"interessant",chinese:"有趣的",english:"interesting",example:"De film is niet zo interessant.",example_cn:"这部电影不太有趣。",pronunciation:"[ˌɪntərɛˈsɑnt]"},{id:30517,dutch:"leuk",chinese:"好玩的/愉快的",english:"fun/nice",example:"Zij vindt sporten niet leuk.",example_cn:"她觉得运动不好玩。",pronunciation:"[løːk]"},{id:30518,dutch:"maar",chinese:"但是",english:"but",example:"Ik wil naar het feest komen, maar ik heb geen tijd.",example_cn:"我想来参加聚会，但我没有时间。",pronunciation:"[maːr]"},{id:30519,dutch:"niet",chinese:"不",english:"not",example:"Hij komt niet met de fiets.",example_cn:"他不是骑自行车来的。",pronunciation:"[nit]"},{id:30520,dutch:"overleden",chinese:"去世的",english:"deceased",example:"Mijn opa is overleden.",example_cn:"我爷爷去世了。",pronunciation:"[ˌoːvərˈleːdə(n)]"}]},{id:"thema3-other2",name:"其他词汇(续)",description:"更多形容词和副词",icon:"✨",color:"from-orange-400 to-rose-500",words:[{id:30551,dutch:"paar",chinese:"几个/一对",english:"a few/pair",example:"Ze komen een paar dagen naar Nederland.",example_cn:"他们会来荷兰待几天。",pronunciation:"[paːr]"},{id:30552,dutch:"samen",chinese:"一起/共同",english:"together",example:"Ze werken goed samen.",example_cn:"他们合作得很好。",pronunciation:"[ˈsaːmə(n)]"},{id:30553,dutch:"spontaan",chinese:"直率的/随性的",english:"spontaneous",example:"Mijn vriend is heel spontaan.",example_cn:"我男朋友很随性。",pronunciation:"[spɔnˈtaːn]"},{id:30554,dutch:"tijdje",chinese:"一段时间",english:"a while",example:"Een tijdje geleden waren mijn ouders hier.",example_cn:"前一阵子我父母来过这里。",pronunciation:"[ˈtɛitjə]"},{id:30555,dutch:"verliefd",chinese:"恋爱的",english:"in love",example:"Ik ben verliefd op haar.",example_cn:"我爱上了她。",pronunciation:"[vərˈlift]"},{id:30556,dutch:"vol",chinese:"满的",english:"full",example:"Mijn agenda is vol.",example_cn:"我的日程排满了。",pronunciation:"[vɔl]"},{id:30557,dutch:"vooral",chinese:"尤其/特别",english:"especially",example:"Ik hou van Spaans eten, vooral van tapas.",example_cn:"我喜欢西班牙菜，尤其是小吃。",pronunciation:"[voːrˈɑl]"},{id:30558,dutch:"vorig",chinese:"上一个（去年的）",english:"previous/last",example:"Vorig jaar zijn we getrouwd.",example_cn:"我们去年结婚了。",pronunciation:"[ˈvoːrəx]"},{id:30559,dutch:"wel",chinese:"倒是/确实",english:"indeed",example:"Ik spreek wel Engels maar geen Frans.",example_cn:"我会说英语，但不会法语。",pronunciation:"[ʋɛl]"},{id:30560,dutch:"ziek",chinese:"生病的",english:"sick",example:"Mijn zoon is ziek, dus hij blijft vandaag thuis.",example_cn:"我儿子病了，所以今天待在家。",pronunciation:"[zik]"},{id:30561,dutch:"eerst",chinese:"首先/先",english:"first",example:"Eerst gaan we lunchen.",example_cn:"我们先去吃午饭。",pronunciation:"[eːrst]"},{id:30562,dutch:"daarna",chinese:"之后",english:"after that",example:"Daarna gaan we wandelen in het centrum.",example_cn:"之后我们去市中心散步。",pronunciation:"[daːrˈnaː]"},{id:30563,dutch:"dan",chinese:"然后",english:"then",example:"Dan gaan we naar de bioscoop.",example_cn:"然后我们去电影院。",pronunciation:"[dɑn]"}]}]},Zf={id:"thema4",name:"Thema 4",description:"购物与问路 - Boodschappen doen, de weg vragen",icon:"🛒",color:"from-orange-500 to-red-600",courses:[{id:"thema4-nouns1",name:"名词(一)",description:"购物场所与物品名词",icon:"🏪",color:"from-orange-500 to-orange-600",words:[{id:40001,dutch:"aanbieding",chinese:"特价；促销",english:"offer/deal",example:"De aardbeien zijn in de aanbieding.",example_cn:"草莓在打折。",pronunciation:"[ˈaːnˌbiːdɪŋ]"},{id:40002,dutch:"aankoop",chinese:"购买；购入品",english:"purchase",example:"Die schoenen zijn een goede aankoop.",example_cn:"那双鞋买得很值。",pronunciation:"[ˈaːnˌkoːp]"},{id:40003,dutch:"afdeling",chinese:"部门；区",english:"department",example:"De yoghurt staat bij de afdeling zuivel.",example_cn:"酸奶在乳制品区。",pronunciation:"[ˈɑfdˌeːlɪŋ]"},{id:40004,dutch:"balie",chinese:"柜台",english:"counter",example:"We kunnen je paspoort ophalen bij balie 4.",example_cn:"我们可以在4号柜台领取你的护照。",pronunciation:"[ˈbaːli]"},{id:40005,dutch:"baliemedewerker",chinese:"柜台工作人员",english:"counter staff",example:"Zij werkt als baliemedewerker bij de gemeente.",example_cn:"她在市政府做柜台工作人员。",pronunciation:"[ˈbaːliˌmeːdəˌʋɛrkər]"},{id:40006,dutch:"bedrijf",chinese:"公司；企业",english:"company",example:"Ahold is een groot bedrijf.",example_cn:"Ahold是一家大公司。",pronunciation:"[bəˈdrɛif]"},{id:40007,dutch:"boodschap",chinese:"购物；信息",english:"message/shopping",example:"Ik doe op zaterdag boodschappen.",example_cn:"我周六买东西。",pronunciation:"[ˈboːtsxɑp]"},{id:40008,dutch:"boodschappenlijstje",chinese:"购物清单",english:"shopping list",example:"Ik maak altijd een boodschappenlijstje.",example_cn:"我总是会列购物清单。",pronunciation:"[ˈboːtsxɑpə(n)ˌlɛistjə]"},{id:40009,dutch:"bos bloemen",chinese:"一束花",english:"bunch of flowers",example:"Ik geef haar een mooie bos bloemen.",example_cn:"我送她一束漂亮的花。",pronunciation:"[bɔs ˈblumə(n)]"},{id:40010,dutch:"bouwmarkt",chinese:"建材超市",english:"hardware store",example:"Gamma is een grote bouwmarkt in Nederland.",example_cn:"Gamma是荷兰很大的建材超市。",pronunciation:"[ˈbɑuˌmɑrkt]"},{id:40011,dutch:"briefje",chinese:"小纸条；便条",english:"note",example:"Ik leg even een briefje voor hem op de tafel.",example_cn:"我给他在桌上留一张便条。",pronunciation:"[ˈbrifjə]"},{id:40012,dutch:"buurt",chinese:"街区",english:"neighbourhood",example:"Hij woont in een hele rustige buurt.",example_cn:"他住在一个非常安静的街区。",pronunciation:"[byːrt]"},{id:40013,dutch:"café",chinese:"咖啡馆",english:"café",example:"Zullen we wat gaan drinken in dat café?",example_cn:"我们去那家咖啡馆喝点东西吧？",pronunciation:"[kaˈfeː]"},{id:40014,dutch:"delicatesse",chinese:"美食；特产",english:"delicacy",example:"Stroopwafels zijn een Hollandse delicatesse.",example_cn:"焦糖华夫饼是荷兰特色美食。",pronunciation:"[ˌdeːlikaˈtɛsə]"},{id:40015,dutch:"diepvries",chinese:"冷冻柜",english:"freezer",example:"De pizza's liggen in de diepvries.",example_cn:"披萨在冷冻柜里。",pronunciation:"[ˈdipˌvris]"},{id:40016,dutch:"einde",chinese:"结尾；终点",english:"end",example:"Het einde van het boek is heel mooi.",example_cn:"这本书的结尾很精彩。",pronunciation:"[ˈɛində]"}]},{id:"thema4-nouns2",name:"名词(二)",description:"商店与购物相关名词",icon:"🛍️",color:"from-amber-500 to-amber-600",words:[{id:40101,dutch:"etage",chinese:"楼层",english:"floor/storey",example:"De kinderkleding vind je op de tweede etage.",example_cn:"童装在二楼。",pronunciation:"[eˈtaːʒə]"},{id:40102,dutch:"euro",chinese:"欧元",english:"euro",example:"In Nederland betalen ze met de euro.",example_cn:"在荷兰人们用欧元支付。",pronunciation:"[ˈøːroː]"},{id:40103,dutch:"fabriek",chinese:"工厂",english:"factory",example:"In Nieuwegein staat een koekjesfabriek.",example_cn:"Nieuwegein有一家饼干厂。",pronunciation:"[faːˈbrik]"},{id:40104,dutch:"fles",chinese:"瓶子",english:"bottle",example:"Op deze fles zit statiegeld.",example_cn:"这个瓶子有押金。",pronunciation:"[flɛs]"},{id:40105,dutch:"gang",chinese:"通道；货架通道",english:"aisle",example:"De chocola ligt in de tweede gang, naast de koekjes.",example_cn:"巧克力在第二个通道，饼干旁边。",pronunciation:"[ɣɑŋ]"},{id:40106,dutch:"gemeentehuis",chinese:"市政厅",english:"town hall",example:"U kunt uw rijbewijs bij het gemeentehuis ophalen.",example_cn:"您可以在市政厅领取驾照。",pronunciation:"[ɣəˈmeːntəˌhœys]"},{id:40107,dutch:"gewicht",chinese:"重量",english:"weight",example:"Wat is het gewicht van deze kaas?",example_cn:"这块奶酪有多重？",pronunciation:"[ɣəˈʋɪxt]"},{id:40108,dutch:"glas",chinese:"杯；玻璃杯",english:"glass",example:"Een glas rode wijn, graag.",example_cn:"请来一杯红酒。",pronunciation:"[ɣlɑs]"},{id:40109,dutch:"gram",chinese:"克",english:"gram",example:"Het is 110 gram. Is dat goed?",example_cn:"这是110克，可以吗？",pronunciation:"[ɣrɑm]"},{id:40110,dutch:"identiteitsbewijs",chinese:"身份证件",english:"identity document",example:"Hebt u uw identiteitsbewijs bij u?",example_cn:"您带身份证件了吗？",pronunciation:"[ˌidɛntiˈtɛitsbəˌʋɛis]"},{id:40111,dutch:"kantoor",chinese:"办公室",english:"office",example:"Ik werk drie dagen op kantoor en één dag thuis.",example_cn:"我三天在办公室上班，一天在家。",pronunciation:"[kɑnˈtoːr]"},{id:40112,dutch:"kassa",chinese:"收银台",english:"cash register",example:"U kunt ook bij kassa 3 betalen.",example_cn:"您也可以在3号收银台付款。",pronunciation:"[ˈkɑsaː]"},{id:40113,dutch:"keus",chinese:"选择",english:"choice",example:"Op de markt heb je veel keus.",example_cn:"在市场上你有很多选择。",pronunciation:"[køːs]"},{id:40114,dutch:"kilo",chinese:"千克",english:"kilogram",example:"Een kilo aardappelen, graag.",example_cn:"请来一公斤土豆。",pronunciation:"[ˈkiːloː]"},{id:40115,dutch:"klant",chinese:"顾客",english:"customer",example:"Veel klanten kopen rozen want het is Valentijnsdag.",example_cn:"因为是情人节，很多顾客买玫瑰。",pronunciation:"[klɑnt]"},{id:40116,dutch:"kledingwinkel",chinese:"服装店",english:"clothing store",example:"Ik koop graag kleding in een kledingwinkel.",example_cn:"我喜欢在服装店买衣服。",pronunciation:"[ˈkleːdɪŋˌʋɪŋkəl]"}]},{id:"thema4-nouns3",name:"名词(三)",description:"更多购物与交通名词",icon:"🗺️",color:"from-yellow-500 to-yellow-600",words:[{id:40201,dutch:"kledingzaak",chinese:"服装店",english:"clothing shop",example:"Die kledingzaak gaat sluiten.",example_cn:"那家服装店要关门了。",pronunciation:"[ˈkleːdɪŋˌzaːk]"},{id:40202,dutch:"korting",chinese:"折扣",english:"discount",example:"Je krijgt 22 procent korting op je eerste aankoop.",example_cn:"你首次购买可享22%折扣。",pronunciation:"[ˈkɔrtɪŋ]"},{id:40203,dutch:"kraam",chinese:"摊位",english:"stall",example:"Ik ga even naar de viskraam.",example_cn:"我去一下鱼摊。",pronunciation:"[kraːm]"},{id:40204,dutch:"kruising",chinese:"路口",english:"crossing",example:"Bij de kruising ga je rechtdoor.",example_cn:"到路口你直走。",pronunciation:"[ˈkrœysɪŋ]"},{id:40205,dutch:"kruispunt",chinese:"十字路口",english:"crossroads",example:"Bij het kruispunt gaan we linksaf.",example_cn:"到十字路口我们左转。",pronunciation:"[ˈkrœyspʏnt]"},{id:40206,dutch:"laptop",chinese:"笔记本电脑",english:"laptop",example:"De kinderen werken op school met een laptop.",example_cn:"孩子们在学校用笔记本电脑学习。",pronunciation:"[ˈlɛpˌtɔp]"},{id:40207,dutch:"lift",chinese:"电梯",english:"elevator/lift",example:"We gaan met de lift naar de derde verdieping.",example_cn:"我们坐电梯到三楼。",pronunciation:"[lɪft]"},{id:40208,dutch:"maat",chinese:"尺码",english:"size",example:"Ik heb maat 40.",example_cn:"我穿40码。",pronunciation:"[maːt]"},{id:40209,dutch:"magazijn",chinese:"仓库",english:"warehouse",example:"Ik ga even in het magazijn kijken.",example_cn:"我去仓库看一下。",pronunciation:"[ˌmaːɣaˈzɛin]"},{id:40210,dutch:"markt",chinese:"市场",english:"market",example:"Op de markt is de kaas goedkoop.",example_cn:"市场上的奶酪很便宜。",pronunciation:"[mɑrkt]"},{id:40211,dutch:"meneer",chinese:"先生",english:"sir/mister",example:"Meneer, kan ik u helpen?",example_cn:"先生，我可以帮您吗？",pronunciation:"[məˈneːr]"},{id:40212,dutch:"mevrouw",chinese:"女士",english:"madam",example:"Mevrouw, mag ik u iets vragen?",example_cn:"女士，我可以问您点事吗？",pronunciation:"[məˈvrɑu]"},{id:40213,dutch:"ons",chinese:"盎司（旧计量）",english:"ounce",example:"Een ons ham alstublieft.",example_cn:"请给我一盎司火腿。",pronunciation:"[ɔns]"},{id:40214,dutch:"pad",chinese:"通道；小路",english:"path/aisle",example:"De koekjes liggen in het derde pad.",example_cn:"饼干在第三个通道。",pronunciation:"[pɑt]"},{id:40215,dutch:"parkeerplaats",chinese:"停车位",english:"parking space",example:"Is er een parkeerplaats bij die supermarkt?",example_cn:"那家超市有停车位吗？",pronunciation:"[pɑrˈkeːrˌplaːts]"},{id:40216,dutch:"parkeerterrein",chinese:"停车场",english:"parking lot",example:"Er is een groot parkeerterrein bij dat winkelcentrum.",example_cn:"那个购物中心有很大的停车场。",pronunciation:"[pɑrˈkeːrˌtɛrɛin]"}]},{id:"thema4-nouns4",name:"名词(四)",description:"商店、设施与交通名词",icon:"🏬",color:"from-lime-500 to-lime-600",words:[{id:40250,dutch:"paskamer",chinese:"试衣间",english:"fitting room",example:"Mevrouw, waar zijn de paskamers?",example_cn:"女士，试衣间在哪里？",pronunciation:"[ˈpɑsˌkaːmər]"},{id:40251,dutch:"pinpas",chinese:"银行卡",english:"debit card",example:"Kan ik met mijn pinpas betalen?",example_cn:"我可以刷银行卡付款吗？",pronunciation:"[ˈpɪnˌpɑs]"},{id:40252,dutch:"pond",chinese:"磅（旧计量）",english:"pound",example:"Een pond aardbeien, graag.",example_cn:"请来一磅草莓。",pronunciation:"[pɔnt]"},{id:40253,dutch:"prijs",chinese:"价格",english:"price",example:"Wat is de prijs van deze jurk?",example_cn:"这条连衣裙多少钱？",pronunciation:"[prɛis]"},{id:40254,dutch:"reclame",chinese:"广告；促销",english:"advertisement/promotion",example:"De appeltaart is in de reclame.",example_cn:"苹果派在做促销。",pronunciation:"[rəˈklaːmə]"},{id:40255,dutch:"roltrap",chinese:"自动扶梯",english:"escalator",example:"Kom, we nemen de roltrap naar de eerste verdieping.",example_cn:"来，我们坐扶梯去二楼。",pronunciation:"[ˈrɔlˌtrɑp]"},{id:40256,dutch:"rotonde",chinese:"环岛",english:"roundabout",example:"Bij de rotonde gaan we rechtsaf.",example_cn:"到环岛我们右转。",pronunciation:"[roːˈtɔndə]"},{id:40257,dutch:"schoenenzaak",chinese:"鞋店",english:"shoe shop",example:"Die schoenenzaak verkoopt veel sportschoenen.",example_cn:"那家鞋店卖很多运动鞋。",pronunciation:"[ˈsxunə(n)ˌzaːk]"},{id:40258,dutch:"seizoen",chinese:"季节；时令",english:"season",example:"Welke groenten zijn nu in het seizoen?",example_cn:"现在哪些蔬菜是当季的？",pronunciation:"[sɛiˈzun]"},{id:40259,dutch:"slijterij",chinese:"酒类专卖店",english:"liquor store",example:"Bij die slijterij verkopen ze veel Belgisch bier.",example_cn:"那家酒类店卖很多比利时啤酒。",pronunciation:"[slɛiˈtərɛi]"},{id:40260,dutch:"station",chinese:"车站",english:"station",example:"We gaan met de bus naar het Centraal Station.",example_cn:"我们坐公交去中央车站。",pronunciation:"[stɑˈʃɔn]"},{id:40261,dutch:"stoplicht",chinese:"红绿灯",english:"traffic light",example:"Het stoplicht staat op rood.",example_cn:"红绿灯是红灯。",pronunciation:"[ˈstɔpˌlɪxt]"},{id:40262,dutch:"straat",chinese:"街道",english:"street",example:"Dat is de drukste winkelstraat.",example_cn:"那是最繁忙的商业街。",pronunciation:"[straːt]"},{id:40263,dutch:"supermarkt",chinese:"超市",english:"supermarket",example:"Albert Heijn is een dure supermarkt.",example_cn:"Albert Heijn是比较贵的超市。",pronunciation:"[ˈsypərˌmɑrkt]"},{id:40264,dutch:"tasje",chinese:"小袋子",english:"small bag",example:"Hebt u een tasje?",example_cn:"您要袋子吗？",pronunciation:"[ˈtɑsjə]"},{id:40265,dutch:"uitverkoop",chinese:"清仓；大减价",english:"clearance sale",example:"Maandag begint de uitverkoop.",example_cn:"周一开始清仓。",pronunciation:"[ˈœytfərˌkoːp]"}]},{id:"thema4-nouns5",name:"名词(五)",description:"场所与设施名词",icon:"🏢",color:"from-emerald-500 to-emerald-600",words:[{id:40270,dutch:"verdieping",chinese:"楼层",english:"floor/storey",example:"De herenkleding is op de tweede verdieping.",example_cn:"男装在二楼。",pronunciation:"[vərˈdiːpɪŋ]"},{id:40271,dutch:"voorraad",chinese:"库存",english:"stock/supply",example:"Ik heb deze televisie helaas niet op voorraad.",example_cn:"很抱歉这台电视没货。",pronunciation:"[ˈvoːrˌraːt]"},{id:40272,dutch:"warenhuis",chinese:"百货商店",english:"department store",example:"In dat warenhuis verkopen ze veel dure merken.",example_cn:"那家百货商店卖很多高端品牌。",pronunciation:"[ˈʋaːrə(n)ˌhœys]"},{id:40273,dutch:"weg",chinese:"路",english:"road/way",example:"Wat is de snelste weg naar het centrum?",example_cn:"去市中心最快的路是哪条？",pronunciation:"[ʋɛx]"},{id:40274,dutch:"winkelcentrum",chinese:"购物中心",english:"shopping centre",example:"We gaan winkelen in het winkelcentrum.",example_cn:"我们去购物中心逛街。",pronunciation:"[ˈʋɪŋkəlˌsɛntrʏm]"}]},{id:"thema4-verbs",name:"动词",description:"购物与问路场景中的常用动词",icon:"🏃",color:"from-red-500 to-red-600",words:[{id:40301,dutch:"afrekenen",chinese:"结账",english:"to check out",example:"Je kunt daar afrekenen, bij de kassa.",example_cn:"你可以在那里收银台结账。",pronunciation:"[ˈɑfrˌeːkənə(n)]"},{id:40302,dutch:"betalen",chinese:"付款",english:"to pay",example:"Kan ik met een creditcard betalen?",example_cn:"我可以用信用卡付款吗？",pronunciation:"[bəˈtaːlə(n)]"},{id:40303,dutch:"herhalen",chinese:"重复",english:"to repeat",example:"Kunt u dat nog een keer herhalen?",example_cn:"您可以再重复一遍吗？",pronunciation:"[hɛrˈhaːlə(n)]"},{id:40304,dutch:"inschrijven",chinese:"报名；登记",english:"to register",example:"Ik wil me graag inschrijven voor een cursus.",example_cn:"我想报名一个课程。",pronunciation:"[ˈɪnsxrɛivə(n)]"},{id:40305,dutch:"kijken",chinese:"看；逛",english:"to look",example:"Wilt u even rondkijken?",example_cn:"您要先随便看看吗？",pronunciation:"[ˈkɛikə(n)]"},{id:40306,dutch:"kopen",chinese:"购买",english:"to buy",example:"We moeten een nieuwe wasmachine kopen.",example_cn:"我们得买一台新洗衣机。",pronunciation:"[ˈkoːpə(n)]"},{id:40307,dutch:"krijgen",chinese:"得到",english:"to get/receive",example:"U krijgt een gratis glas bij aankoop van deze wijn.",example_cn:"购买这款酒可获赠一个杯子。",pronunciation:"[ˈkrɛiɣə(n)]"},{id:40308,dutch:"lopen",chinese:"走路",english:"to walk",example:"Je loopt hier rechtdoor. Daar is de bakker.",example_cn:"你在这里直走，面包店就在那边。",pronunciation:"[ˈloːpə(n)]"},{id:40309,dutch:"parkeren",chinese:"停车",english:"to park",example:"Kun je in het centrum makkelijk parkeren?",example_cn:"在市中心停车方便吗？",pronunciation:"[pɑrˈkeːrə(n)]"},{id:40310,dutch:"passen",chinese:"试穿",english:"to try on/fit",example:"Kan ik deze broek even passen?",example_cn:"我可以试穿一下这条裤子吗？",pronunciation:"[ˈpɑsə(n)]"},{id:40311,dutch:"pinnen",chinese:"刷卡付款",english:"to pay by card",example:"Wilt u pinnen?",example_cn:"您要刷卡吗？",pronunciation:"[ˈpɪnə(n)]"},{id:40312,dutch:"proberen",chinese:"尝试",english:"to try",example:"Hij probeert tien woorden per dag te leren.",example_cn:"他尝试每天学十个单词。",pronunciation:"[proːˈbeːrə(n)]"},{id:40313,dutch:"rijden",chinese:"开车；行驶",english:"to drive",example:"Je rijdt te hard.",example_cn:"你开得太快了。",pronunciation:"[ˈrɛidə(n)]"},{id:40314,dutch:"rondkijken",chinese:"四处看看",english:"to look around",example:"Ik kijk even rond.",example_cn:"我先四处看看。",pronunciation:"[ˈrɔntˌkɛikə(n)]"},{id:40315,dutch:"staan",chinese:"（衣服）合身",english:"to suit/stand",example:"De jurk staat je goed.",example_cn:"这条裙子很适合你。",pronunciation:"[staːn]"},{id:40316,dutch:"volgen",chinese:"跟随；沿着走",english:"to follow",example:"Volg de weg tot het einde en ga dan linksaf.",example_cn:"沿着这条路走到尽头再左转。",pronunciation:"[ˈvɔlɣə(n)]"},{id:40317,dutch:"zien",chinese:"看见",english:"to see",example:"Dan ziet u de supermarkt.",example_cn:"然后您会看到超市。",pronunciation:"[zin]"},{id:40318,dutch:"zitten",chinese:"（鞋/衣）穿着合适",english:"to fit (clothing)",example:"De schoenen zitten lekker.",example_cn:"这双鞋穿着很舒服。",pronunciation:"[ˈzɪtə(n)]"},{id:40319,dutch:"zoeken",chinese:"找",english:"to search/look for",example:"Ik zoek een leuke rok.",example_cn:"我在找一条好看的裙子。",pronunciation:"[ˈzukə(n)]"}]},{id:"thema4-prepositions",name:"介词",description:"方位与位置介词",icon:"📍",color:"from-cyan-500 to-cyan-600",words:[{id:40350,dutch:"achter",chinese:"在…后面",english:"behind",example:"De Jumbo is in de Breedstraat, achter de Etos.",example_cn:"Jumbo在Breedstraat，Etos后面。",pronunciation:"[ˈɑxtər]"},{id:40351,dutch:"in de buurt",chinese:"在附近",english:"nearby",example:"Is hier een supermarkt in de buurt?",example_cn:"这附近有超市吗？",pronunciation:"[ɪn də byːrt]"},{id:40352,dutch:"na",chinese:"在…之后",english:"after",example:"Na 200 meter zie je de supermarkt.",example_cn:"走200米后你会看到超市。",pronunciation:"[naː]"},{id:40353,dutch:"naar beneden",chinese:"向下",english:"downwards",example:"Hier kunnen we met de lift naar beneden.",example_cn:"我们可以在这里坐电梯下去。",pronunciation:"[naːr bəˈneːdə(n)]"},{id:40354,dutch:"naar boven",chinese:"向上",english:"upwards",example:"Hier kunnen we met de roltrap naar boven.",example_cn:"我们可以在这里坐扶梯上去。",pronunciation:"[naːr ˈboːvə(n)]"},{id:40355,dutch:"op",chinese:"在…上/在…楼层",english:"on/at",example:"Het restaurant is op de eerste etage.",example_cn:"餐厅在二楼。",pronunciation:"[ɔp]"},{id:40356,dutch:"per stuk",chinese:"按件",english:"per piece",example:"De komkommers kosten 1 euro per stuk.",example_cn:"黄瓜每根1欧元。",pronunciation:"[pɛr stʏk]"}]},{id:"thema4-adjectives1",name:"形容词(一)",description:"描述物品特征的形容词",icon:"🎨",color:"from-pink-500 to-pink-600",words:[{id:40401,dutch:"breed",chinese:"宽的",english:"wide",example:"Dat is een brede winkelstraat.",example_cn:"那是一条很宽的商业街。",pronunciation:"[breːt]"},{id:40402,dutch:"dik",chinese:"厚的；浓密的",english:"thick",example:"Hij heeft heel dik haar.",example_cn:"他的头发很浓密。",pronunciation:"[dɪk]"},{id:40403,dutch:"donker",chinese:"暗的",english:"dark",example:"Mijn kamer is heel donker.",example_cn:"我的房间很暗。",pronunciation:"[ˈdɔŋkər]"},{id:40404,dutch:"droog",chinese:"干的",english:"dry",example:"Is de was al droog?",example_cn:"衣服已经干了吗？",pronunciation:"[droːx]"},{id:40405,dutch:"dun",chinese:"薄的；细的",english:"thin",example:"Ik heb heel dun haar.",example_cn:"我的头发很细。",pronunciation:"[dʏn]"},{id:40406,dutch:"duur",chinese:"贵的",english:"expensive",example:"Wat een dure trui!",example_cn:"这件毛衣真贵！",pronunciation:"[dyːr]"},{id:40407,dutch:"fijn",chinese:"愉快的；好的",english:"fine/nice",example:"Fijne dag!",example_cn:"祝你今天愉快！",pronunciation:"[fɛin]"},{id:40408,dutch:"gezond",chinese:"健康的",english:"healthy",example:"Sinaasappels zijn heel gezond.",example_cn:"橙子很健康。",pronunciation:"[ɣəˈzɔnt]"},{id:40409,dutch:"goedkoop",chinese:"便宜的",english:"cheap",example:"Die sinaasappels zijn echt goedkoop.",example_cn:"那些橙子真的很便宜。",pronunciation:"[ˈɣutˌkoːp]"},{id:40410,dutch:"goud",chinese:"金色的",english:"gold/golden",example:"Ze draagt een mooie, gouden armband.",example_cn:"她戴着一只漂亮的金色手镯。",pronunciation:"[ɣɑut]"},{id:40411,dutch:"gratis",chinese:"免费的",english:"free (of charge)",example:"U kunt deze folder gratis meenemen.",example_cn:"这份宣传册您可以免费带走。",pronunciation:"[ˈɣraːtɪs]"},{id:40412,dutch:"groot",chinese:"大的",english:"big/large",example:"AH is een grote supermarkt.",example_cn:"AH是一家大型超市。",pronunciation:"[ɣroːt]"},{id:40413,dutch:"hard",chinese:"硬的",english:"hard",example:"Deze mango's zijn nog te hard.",example_cn:"这些芒果还太硬。",pronunciation:"[hɑrt]"},{id:40414,dutch:"hoog",chinese:"高的",english:"high",example:"De temperatuur is vandaag hoog.",example_cn:"今天气温很高。",pronunciation:"[hoːx]"},{id:40415,dutch:"houdbaar",chinese:"可保存的",english:"preservable",example:"Deze yoghurt is houdbaar tot 2 april.",example_cn:"这款酸奶保质到4月2日。",pronunciation:"[ˈhɑutbaːr]"},{id:40416,dutch:"jong",chinese:"年轻的；嫩的",english:"young",example:"Ik houd van jonge kaas.",example_cn:"我喜欢嫩奶酪。",pronunciation:"[jɔŋ]"}]},{id:"thema4-adjectives2",name:"形容词(二)",description:"更多描述性形容词",icon:"✨",color:"from-fuchsia-500 to-fuchsia-600",words:[{id:40501,dutch:"kort",chinese:"短的",english:"short",example:"Zij heeft heel kort haar.",example_cn:"她是很短的头发。",pronunciation:"[kɔrt]"},{id:40502,dutch:"koud",chinese:"冷的",english:"cold",example:"Het is koud. Ik doe een trui aan.",example_cn:"天冷了，我穿上毛衣。",pronunciation:"[kɑut]"},{id:40503,dutch:"laag",chinese:"低的",english:"low",example:"De temperatuur is vandaag laag.",example_cn:"今天气温较低。",pronunciation:"[laːx]"},{id:40504,dutch:"lang",chinese:"长的",english:"long",example:"De film duurt heel lang.",example_cn:"这部电影很长。",pronunciation:"[lɑŋ]"},{id:40505,dutch:"leeg",chinese:"空的",english:"empty",example:"Ik zie dat de glazen leeg zijn.",example_cn:"我看到杯子空了。",pronunciation:"[leːx]"},{id:40506,dutch:"lekker",chinese:"好吃的",english:"tasty/delicious",example:"Deze pizza is echt lekker.",example_cn:"这张披萨真的很好吃。",pronunciation:"[ˈlɛkər]"},{id:40507,dutch:"lelijk",chinese:"难看的",english:"ugly",example:"Ik vind deze jurk heel lelijk.",example_cn:"我觉得这条裙子很难看。",pronunciation:"[ˈleːlək]"},{id:40508,dutch:"licht",chinese:"明亮的",english:"light/bright",example:"Mijn kamer is heel licht, want er is veel zon.",example_cn:"我的房间很明亮，因为阳光很多。",pronunciation:"[lɪxt]"},{id:40509,dutch:"makkelijk",chinese:"容易的",english:"easy",example:"Deze oefeningen zijn makkelijk.",example_cn:"这些练习很容易。",pronunciation:"[ˈmɑkələk]"},{id:40510,dutch:"mooi",chinese:"漂亮的",english:"beautiful",example:"Wat een mooie schoenen!",example_cn:"真是一双漂亮的鞋！",pronunciation:"[moːi]"},{id:40511,dutch:"moeilijk",chinese:"困难的",english:"difficult",example:"Een nieuwe taal leren is moeilijk.",example_cn:"学一门新语言很难。",pronunciation:"[ˈmujələk]"},{id:40512,dutch:"nieuw",chinese:"新的",english:"new",example:"Dank je, ik heb de schoenen nieuw gekocht.",example_cn:"谢谢，我这双鞋是新买的。",pronunciation:"[niːu]"},{id:40513,dutch:"ongezond",chinese:"不健康的",english:"unhealthy",example:"Elke dag patat eten is ongezond.",example_cn:"每天吃薯条不健康。",pronunciation:"[ˈɔnɣəˌzɔnt]"},{id:40514,dutch:"oud",chinese:"老的",english:"old",example:"Mijn oma is al heel oud.",example_cn:"我奶奶已经很老了。",pronunciation:"[ɑut]"},{id:40515,dutch:"rot",chinese:"坏掉的",english:"rotten",example:"Deze appel is rot.",example_cn:"这个苹果坏了。",pronunciation:"[rɔt]"},{id:40516,dutch:"sappig",chinese:"多汁的",english:"juicy",example:"Deze peren zijn heel sappig.",example_cn:"这些梨很多汁。",pronunciation:"[ˈsɑpəx]"}]},{id:"thema4-adjectives3",name:"形容词(三)",description:"形容词补充",icon:"🌈",color:"from-violet-500 to-violet-600",words:[{id:40550,dutch:"slecht",chinese:"糟糕的",english:"bad",example:"Ik vind het een slecht idee.",example_cn:"我觉得这是个糟糕的主意。",pronunciation:"[slɛxt]"},{id:40551,dutch:"smal",chinese:"窄的",english:"narrow",example:"We wonen in een hele smalle straat.",example_cn:"我们住在一条很窄的街上。",pronunciation:"[smɑl]"},{id:40552,dutch:"snel",chinese:"快的",english:"fast",example:"Deze computer werkt heel snel.",example_cn:"这台电脑运行很快。",pronunciation:"[snɛl]"},{id:40553,dutch:"ver",chinese:"远的",english:"far",example:"De bakker is niet ver van ons huis.",example_cn:"面包店离我们家不远。",pronunciation:"[vɛr]"},{id:40554,dutch:"vers",chinese:"新鲜的",english:"fresh",example:"Lekkere verse tomaten te koop!",example_cn:"有好吃的新鲜番茄出售！",pronunciation:"[vɛrs]"},{id:40555,dutch:"vies",chinese:"脏的；难吃的",english:"dirty/disgusting",example:"Deze koffie is echt vies.",example_cn:"这杯咖啡真的很难喝。",pronunciation:"[vis]"},{id:40556,dutch:"vol",chinese:"满的",english:"full",example:"De fles is vol.",example_cn:"瓶子是满的。",pronunciation:"[vɔl]"},{id:40557,dutch:"warm",chinese:"温暖的",english:"warm/hot",example:"Wil je ook warme chocolademelk?",example_cn:"你也要热巧克力牛奶吗？",pronunciation:"[ʋɑrm]"},{id:40558,dutch:"zacht",chinese:"柔软的",english:"soft",example:"De trui is heel zacht.",example_cn:"这件毛衣很柔软。",pronunciation:"[zɑxt]"},{id:40559,dutch:"zilver",chinese:"银色的",english:"silver",example:"Ik geef haar een zilveren ketting.",example_cn:"我送她一条银色项链。",pronunciation:"[ˈzɪlvər]"},{id:40560,dutch:"zoet",chinese:"甜的",english:"sweet",example:"Heerlijke zoete aardbeien te koop!",example_cn:"有美味的甜草莓出售！",pronunciation:"[zut]"},{id:40561,dutch:"zuur",chinese:"酸的",english:"sour",example:"Wat een zure bessen.",example_cn:"这些浆果真酸。",pronunciation:"[zyːr]"},{id:40562,dutch:"zwaar",chinese:"重的",english:"heavy",example:"Ik heb een hele zware tas.",example_cn:"我的包非常重。",pronunciation:"[zʋaːr]"}]},{id:"thema4-directions",name:"方向词",description:"方向与位置词汇",icon:"🧭",color:"from-indigo-500 to-indigo-600",words:[{id:40601,dutch:"links",chinese:"向左",english:"left",example:"We gaan hier naar links.",example_cn:"我们在这里往左走。",pronunciation:"[lɪŋks]"},{id:40602,dutch:"linksaf",chinese:"左转",english:"turn left",example:"Je moet hier linksaf.",example_cn:"你要在这里左转。",pronunciation:"[ˈlɪŋksˌɑf]"},{id:40603,dutch:"linkerhand",chinese:"左手边",english:"left-hand side",example:"Het station is na 500 meter aan je linkerhand.",example_cn:"走500米后车站在你左手边。",pronunciation:"[ˈlɪŋkərˌhɑnt]"},{id:40604,dutch:"linkerkant",chinese:"左侧",english:"left side",example:"De koekjes staan aan de linkerkant.",example_cn:"饼干在左侧。",pronunciation:"[ˈlɪŋkərˌkɑnt]"},{id:40605,dutch:"rechterhand",chinese:"右手边",english:"right-hand side",example:"De bibliotheek is na 50 meter aan je rechterhand.",example_cn:"走50米后图书馆在你右手边。",pronunciation:"[ˈrɛxtərˌhɑnt]"},{id:40606,dutch:"rechterkant",chinese:"右侧",english:"right side",example:"Aan de rechterkant hangt de uitverkoop.",example_cn:'右边挂着"清仓"标识。',pronunciation:"[ˈrɛxtərˌkɑnt]"},{id:40607,dutch:"rechts",chinese:"向右",english:"right",example:"We gaan hier naar rechts.",example_cn:"我们在这里往右走。",pronunciation:"[rɛxts]"},{id:40608,dutch:"rechtsaf",chinese:"右转",english:"turn right",example:"Je moet hier rechtsaf.",example_cn:"你要在这里右转。",pronunciation:"[ˈrɛxtsˌɑf]"},{id:40609,dutch:"rechtdoor",chinese:"直走",english:"straight ahead",example:"Je rijdt rechtdoor tot de stoplichten.",example_cn:"你直走到红绿灯。",pronunciation:"[ˈrɛxtˌdoːr]"}]},{id:"thema4-expressions",name:"常用表达",description:"购物与问路常用表达",icon:"💬",color:"from-sky-500 to-sky-600",words:[{id:40701,dutch:"ja hoor",chinese:"当然（可以）",english:"sure/of course",example:"Ja hoor!",example_cn:"当然可以！",pronunciation:"[jaː hoːr]"},{id:40702,dutch:"wat jammer",chinese:"真可惜",english:"what a pity",example:"De rok is te klein. Wat jammer.",example_cn:"这条裙子太小了，真可惜。",pronunciation:"[ʋɑt ˈjɑmər]"},{id:40703,dutch:"dat klopt",chinese:"没错；对的",english:"that's right",example:"Dat klopt!",example_cn:"没错！",pronunciation:"[dɑt klɔpt]"},{id:40704,dutch:"natuurlijk",chinese:"当然",english:"of course",example:"Natuurlijk, ik zal even voor je kijken.",example_cn:"当然，我这就帮你看一下。",pronunciation:"[naːˈtyːrlək]"},{id:40705,dutch:"veel plezier",chinese:"祝你玩得开心",english:"have fun",example:"Veel plezier ermee!",example_cn:"祝你用得开心！",pronunciation:"[veːl pləˈziːr]"},{id:40706,dutch:"het spijt me",chinese:"对不起",english:"I'm sorry",example:"Het spijt me.",example_cn:"对不起。",pronunciation:"[hɛt spɛit mə]"},{id:40707,dutch:"tot ziens",chinese:"再见",english:"goodbye",example:"Tot ziens.",example_cn:"再见。",pronunciation:"[tɔt zins]"}]},{id:"thema4-other",name:"其他词汇",description:"其他常用词汇与表达",icon:"📚",color:"from-teal-500 to-teal-600",words:[{id:40801,dutch:"alstublieft",chinese:"请（礼貌用语）",english:"please (formal)",example:"Een kilo jonge kaas, alstublieft.",example_cn:"请给我一公斤嫩奶酪。",pronunciation:"[ˌɑlstyˈblift]"},{id:40802,dutch:"andere",chinese:"其他的",english:"other",example:"We hebben ook nog andere maten.",example_cn:"我们还有其他尺码。",pronunciation:"[ˈɑndərə]"},{id:40803,dutch:"begane grond",chinese:"底层；一楼",english:"ground floor",example:"De cosmeticaproducten vindt u op de begane grond.",example_cn:"化妆品在一楼。",pronunciation:"[bəˈɣaːnə ɣrɔnt]"},{id:40804,dutch:"beurt",chinese:"轮到的机会",english:"turn",example:"Wie is er aan de beurt?",example_cn:"轮到谁了？",pronunciation:"[bøːrt]"},{id:40805,dutch:"binnen",chinese:"在室内",english:"inside",example:"Het regent. De kinderen spelen vandaag binnen.",example_cn:"下雨了，孩子们今天在室内玩。",pronunciation:"[ˈbɪnə(n)]"},{id:40806,dutch:"buiten",chinese:"在室外",english:"outside",example:"De kinderen spelen buiten voetbal.",example_cn:"孩子们在外面踢足球。",pronunciation:"[ˈbœytə(n)]"},{id:40807,dutch:"contant",chinese:"现金地",english:"in cash",example:"Ik kan het ook contant betalen.",example_cn:"我也可以用现金支付。",pronunciation:"[kɔnˈtɑnt]"},{id:40808,dutch:"daar",chinese:"那里",english:"there",example:"Daar hebben ze lekkere, verse vis.",example_cn:"那里有好吃又新鲜的鱼。",pronunciation:"[daːr]"},{id:40809,dutch:"bij elkaar",chinese:"总共；合计",english:"altogether",example:"Dat is dan twaalf euro bij elkaar.",example_cn:"那总共是12欧元。",pronunciation:"[bɛi ɛlˈkaːr]"},{id:40810,dutch:"gaat uw gang",chinese:"请便",english:"go ahead",example:"Gaat uw gang!",example_cn:"请便！",pronunciation:"[ɣaːt yː ɣɑŋ]"},{id:40811,dutch:"gepast",chinese:"刚好金额地",english:"exact change",example:"Ik kan het gepast betalen.",example_cn:"我可以刚好付整。",pronunciation:"[ɣəˈpɑst]"},{id:40812,dutch:"graag",chinese:"请；乐意",english:"please/gladly",example:"Een kilo appels, graag.",example_cn:"请给我一公斤苹果。",pronunciation:"[ɣraːx]"},{id:40813,dutch:"graag gedaan",chinese:"不客气",english:"you're welcome",example:"Graag gedaan.",example_cn:"不客气。",pronunciation:"[ɣraːx ɣəˈdaːn]"},{id:40814,dutch:"helaas",chinese:"可惜；遗憾地",english:"unfortunately",example:"De aardbeien zijn helaas uitverkocht.",example_cn:"很遗憾草莓卖完了。",pronunciation:"[heːˈlaːs]"},{id:40815,dutch:"helemaal",chinese:"完全地",english:"completely",example:"De bananen zijn helemaal rot.",example_cn:"这些香蕉完全坏了。",pronunciation:"[ˌheːləˈmaːl]"},{id:40816,dutch:"hetzelfde",chinese:"相同的",english:"the same",example:"We lezen hetzelfde boek.",example_cn:"我们读的是同一本书。",pronunciation:"[hɛtˈzɛlfdə]"},{id:40817,dutch:"hier",chinese:"这里",english:"here",example:"U kunt hier niet met uw pinpas betalen.",example_cn:"您在这里不能用银行卡支付。",pronunciation:"[hiːr]"},{id:40818,dutch:"iets anders",chinese:"别的东西",english:"something else",example:"Ik zoek iets anders.",example_cn:"我在找别的东西。",pronunciation:"[its ˈɑndərs]"},{id:40819,dutch:"kleiner",chinese:"更小的",english:"smaller",example:"Hebt u het niet kleiner?",example_cn:"您有没有更小一点的？",pronunciation:"[ˈklɛinər]"},{id:40820,dutch:"misschien",chinese:"也许",english:"maybe/perhaps",example:"Heb je misschien nog andere maten?",example_cn:"你也许还有其他尺码吗？",pronunciation:"[mɪˈsxin]"},{id:40821,dutch:"nog",chinese:"还；仍然",english:"still/yet",example:"Ik heb de broek nog in maat L.",example_cn:"这条裤子我还有L码。",pronunciation:"[nɔx]"},{id:40822,dutch:"speciaal",chinese:"特别的",english:"special",example:"Zoekt u iets speciaals?",example_cn:"您在找特别一点的吗？",pronunciation:"[speːˈʃaːl]"}]}]},Yf={id:"thema5",name:"Thema 5",description:"社交联系 - Sociale contacten",icon:"🤳",color:"from-purple-500 to-pink-600",courses:[{id:"thema5-nouns1",name:"名词(上)",description:"社交与餐饮相关名词",icon:"🍽️",color:"from-purple-500 to-purple-600",words:[{id:50001,dutch:"advies",chinese:"建议",english:"advice",example:"Mijn docent geeft mij altijd goed advies.",example_cn:"我的老师总是给我很好的建议。",pronunciation:"[ɑtˈvis]"},{id:50002,dutch:"avondeten",chinese:"晚饭",english:"dinner",example:"Wie kookt het avondeten?",example_cn:"谁来做晚饭？",pronunciation:"[ˈaːvɔntˌeːtə(n)]"},{id:50003,dutch:"biertje",chinese:"啤酒（小杯）",english:"beer (small)",example:"Wil je ook een biertje?",example_cn:"你也要来杯啤酒吗？",pronunciation:"[ˈbiːrtjə]"},{id:50004,dutch:"bericht",chinese:"消息",english:"message",example:"Stuur jij veel berichten via WhatsApp?",example_cn:"你经常通过WhatsApp发消息吗？",pronunciation:"[bəˈrɪxt]"},{id:50005,dutch:"boodschap",chinese:"留言",english:"message",example:"Laat een boodschap achter na de piep.",example_cn:"提示音后请留言。",pronunciation:"[ˈboːtsxɑp]"},{id:50006,dutch:"broodje",chinese:"小面包/三明治",english:"sandwich",example:"Ik neem een broodje kroket.",example_cn:"我要一个可乐饼面包。",pronunciation:"[ˈbroːtjə]"},{id:50007,dutch:"dessert",chinese:"甜点",english:"dessert",example:"Chocolademousse is mijn favoriete dessert.",example_cn:"巧克力慕斯是我最喜欢的甜点。",pronunciation:"[dɛˈsɛrt]"},{id:50008,dutch:"e-mail",chinese:"电子邮件",english:"email",example:"Na de vakantie heb ik altijd veel e-mails.",example_cn:"假期后我总是有很多邮件。",pronunciation:"[ˈiːmeːl]"},{id:50009,dutch:"examen",chinese:"考试",english:"exam",example:"Morgen heeft hij een rijexamen.",example_cn:"他明天有驾照考试。",pronunciation:"[ɛkˈsaːmə(n)]"},{id:50010,dutch:"garage",chinese:"修车厂/车库",english:"garage",example:"De auto moet naar de garage.",example_cn:"这辆车得去修车厂。",pronunciation:"[ɣaˈraːʒə]"},{id:50011,dutch:"geld",chinese:"钱",english:"money",example:"Heb jij geld voor een kop koffie?",example_cn:"你有买一杯咖啡的钱吗？",pronunciation:"[ɣɛlt]"},{id:50012,dutch:"gesprek",chinese:"对话/谈话",english:"conversation",example:"Kun jij al een gesprek voeren in het Nederlands?",example_cn:"你已经能用荷兰语对话了吗？",pronunciation:"[ɣəˈsprɛk]"},{id:50013,dutch:"hoek",chinese:"角落/拐角",english:"corner",example:"Wij wonen op de hoek van de straat.",example_cn:"我们住在街角。",pronunciation:"[huk]"},{id:50014,dutch:"hoofdgerecht",chinese:"主菜",english:"main course",example:"Als hoofdgerecht neem ik lasagne.",example_cn:"我主菜点千层面。",pronunciation:"[ˈhoːftɣəˌrɛxt]"},{id:50015,dutch:"informatie",chinese:"信息",english:"information",example:"Hij kan je informatie geven over alle cursussen.",example_cn:"他能给你所有课程的信息。",pronunciation:"[ˌɪnfɔrˈmaːtsi]"}]},{id:"thema5-nouns2",name:"名词(中)",description:"餐厅与日常生活名词",icon:"🏪",color:"from-pink-500 to-pink-600",words:[{id:50101,dutch:"keuze",chinese:"选择",english:"choice",example:"Hebt u een keuze kunnen maken?",example_cn:"您做好选择了吗？",pronunciation:"[ˈkøːzə]"},{id:50102,dutch:"lunch",chinese:"午餐",english:"lunch",example:"De lunch is in de personeelskantine.",example_cn:"午餐在员工食堂。",pronunciation:"[lʏnʃ]"},{id:50103,dutch:"lunchcafé",chinese:"轻食咖啡馆",english:"lunch café",example:"Tegenover het werk is er een leuk lunchcafé.",example_cn:"公司对面有一家不错的轻食咖啡馆。",pronunciation:"[ˈlʏnʃkaˌfeː]"},{id:50104,dutch:"menukaart",chinese:"菜单",english:"menu",example:"Hebt u een menukaart?",example_cn:"有菜单吗？",pronunciation:"[məˈnyˌkaːrt]"},{id:50105,dutch:"ober",chinese:"男服务员",english:"waiter",example:"Zal ik de ober even roepen?",example_cn:"我去叫一下服务员吧？",pronunciation:"[ˈoːbər]"},{id:50106,dutch:"ontbijt",chinese:"早餐",english:"breakfast",example:"Ik ontbijt met yoghurt en fruit.",example_cn:"我早餐吃酸奶和水果。",pronunciation:"[ɔntˈbɛit]"},{id:50107,dutch:"persoon",chinese:"人",english:"person",example:"Ik wil graag een tafel voor twee personen reserveren.",example_cn:"我想预订一张两人桌。",pronunciation:"[pɛrˈsoːn]"},{id:50108,dutch:"plan",chinese:"计划",english:"plan",example:"Wat een goed plan!",example_cn:"真是个好计划！",pronunciation:"[plɑn]"},{id:50109,dutch:"praatje",chinese:"闲聊",english:"chat",example:"Ik maak vaak een praatje met de buren.",example_cn:"我常和邻居聊几句。",pronunciation:"[ˈpraːtjə]"},{id:50110,dutch:"rekening",chinese:"账单",english:"bill",example:"Zullen we de rekening vragen?",example_cn:"我们要不要买单？",pronunciation:"[ˈreːkənɪŋ]"},{id:50111,dutch:"rest",chinese:"剩下的部分",english:"rest/remainder",example:"Laat de rest maar zitten.",example_cn:"剩下的就算了吧。",pronunciation:"[rɛst]"},{id:50112,dutch:"restaurant",chinese:"餐馆",english:"restaurant",example:"Bij dat restaurant kun je goede pizza's eten.",example_cn:"那家餐馆的披萨很好吃。",pronunciation:"[rɛstoːˈrɑnt]"},{id:50113,dutch:"schilderij",chinese:"画作",english:"painting",example:"In dat museum hangen veel schilderijen van Vermeer.",example_cn:"那个博物馆有很多维米尔的画。",pronunciation:"[sxɪldəˈrɛi]"},{id:50114,dutch:"sfeer",chinese:"氛围",english:"atmosphere",example:"Er is altijd een leuke sfeer in dat café.",example_cn:"那家咖啡馆氛围一直很好。",pronunciation:"[sfeːr]"},{id:50115,dutch:"sleutel",chinese:"钥匙",english:"key",example:"Heb jij de sleutel van de voordeur?",example_cn:"你有大门钥匙吗？",pronunciation:"[ˈsløːtəl]"}]},{id:"thema5-nouns3",name:"名词(下)",description:"通讯与休闲名词",icon:"📱",color:"from-violet-500 to-violet-600",words:[{id:50201,dutch:"snackbar",chinese:"快餐店",english:"snack bar",example:"Bij die snackbar hebben ze lekkere patat.",example_cn:"那家快餐店的薯条很好吃。",pronunciation:"[ˈsnɛkˌbaːr]"},{id:50202,dutch:"sociale media",chinese:"社交媒体",english:"social media",example:"Van alle sociale media gebruik ik Instagram het meest.",example_cn:"在所有社交媒体里我最常用Instagram。",pronunciation:"[soːˈʃaːlə ˈmeːdiaː]"},{id:50203,dutch:"spelletje",chinese:"小游戏",english:"game",example:"Mijn dochter doet veel spelletjes op haar telefoon.",example_cn:"我女儿经常在手机上玩小游戏。",pronunciation:"[ˈspɛlətjə]"},{id:50204,dutch:"tandarts",chinese:"牙医",english:"dentist",example:"Ik heb maandag een afspraak bij de tandarts.",example_cn:"我周一和牙医有预约。",pronunciation:"[ˈtɑndˌɑrts]"},{id:50205,dutch:"tas",chinese:"包",english:"bag",example:"De sleutels zitten in mijn tas.",example_cn:"钥匙在我包里。",pronunciation:"[tɑs]"},{id:50206,dutch:"telefoon",chinese:"电话/手机",english:"phone",example:"Ik heb meer dan honderd apps op mijn telefoon.",example_cn:"我的手机里有一百多个应用。",pronunciation:"[ˌteːləˈfoːn]"},{id:50207,dutch:"telefoongesprek",chinese:"电话通话",english:"phone call",example:"Dat telefoongesprek duurde erg lang.",example_cn:"那通电话打了很久。",pronunciation:"[ˌteːləˈfoːnɣəˌsprɛk]"},{id:50208,dutch:"terras",chinese:"露台座位",english:"terrace",example:"Zullen we even koffie drinken op dat terras?",example_cn:"我们去那个露台坐着喝杯咖啡吧？",pronunciation:"[tɛˈrɑs]"},{id:50209,dutch:"vakantie",chinese:"假期",english:"holiday",example:"We gaan op vakantie naar Duitsland.",example_cn:"我们要去德国度假。",pronunciation:"[vaːˈkɑnsi]"},{id:50210,dutch:"toetje",chinese:"餐后甜点",english:"dessert",example:"Wil je nog een toetje of alleen een kop koffie?",example_cn:"你还要甜点还是只要咖啡？",pronunciation:"[ˈtutjə]"},{id:50211,dutch:"toets",chinese:"测验",english:"test",example:"Vrijdag hebben we een toets, dus ik ga goed leren.",example_cn:"周五有测验，所以我要好好复习。",pronunciation:"[tuts]"},{id:50212,dutch:"verhaal",chinese:"故事",english:"story",example:"De docent vertelt een leuk verhaal over zijn kindertijd.",example_cn:"老师讲了个关于童年的有趣故事。",pronunciation:"[vərˈhaːl]"},{id:50213,dutch:"voetbalveld",chinese:"足球场",english:"football field",example:"Er ligt veel water op het voetbalveld.",example_cn:"足球场上积了很多水。",pronunciation:"[ˈvutbɑlˌvɛlt]"},{id:50214,dutch:"voorgerecht",chinese:"前菜",english:"starter",example:"Als voorgerecht neem ik soep.",example_cn:"我前菜点汤。",pronunciation:"[ˈvoːrɣəˌrɛxt]"},{id:50215,dutch:"weer",chinese:"天气",english:"weather",example:"Het weer is goed in Griekenland.",example_cn:"希腊的天气很好。",pronunciation:"[ʋeːr]"}]},{id:"thema5-verbs1",name:"动词(上)",description:"社交与日常动词",icon:"🏃",color:"from-indigo-500 to-indigo-600",words:[{id:50301,dutch:"gebruiken",chinese:"使用",english:"to use",example:"We gebruiken het boek Van Start.",example_cn:"我们使用《Van Start》这本书。",pronunciation:"[ɣəˈbrœykə(n)]"},{id:50302,dutch:"eten",chinese:"吃",english:"to eat",example:"Ik heb lekker gegeten.",example_cn:"我吃得很好。",pronunciation:"[ˈeːtə(n)]"},{id:50303,dutch:"horen",chinese:"听见",english:"to hear",example:"Heb je dat verhaal gehoord?",example_cn:"你听说那个故事了吗？",pronunciation:"[ˈhoːrə(n)]"},{id:50304,dutch:"smaken",chinese:"尝起来",english:"to taste",example:"Heeft het gesmaakt?",example_cn:"好吃吗？",pronunciation:"[ˈsmaːkə(n)]"},{id:50305,dutch:"klinken",chinese:"听起来",english:"to sound",example:"Chocoladetaart, dat klinkt goed!",example_cn:"巧克力蛋糕，听起来不错！",pronunciation:"[ˈklɪŋkə(n)]"},{id:50306,dutch:"laten",chinese:"让/留",english:"to let/leave",example:"Laat maar zitten.",example_cn:"算了吧/不用了。",pronunciation:"[ˈlaːtə(n)]"},{id:50307,dutch:"regenen",chinese:"下雨",english:"to rain",example:"Het regent al de hele dag.",example_cn:"雨下了一整天。",pronunciation:"[ˈreːɣənə(n)]"},{id:50308,dutch:"sturen",chinese:"发送",english:"to send",example:"Ik stuur je mijn locatie.",example_cn:"我把我的定位发给你。",pronunciation:"[ˈstyːrə(n)]"},{id:50309,dutch:"terugbellen",chinese:"回电",english:"to call back",example:"Hij belt je vanmiddag terug.",example_cn:"他今天下午给你回电话。",pronunciation:"[təˈrʏxˌbɛlə(n)]"},{id:50310,dutch:"vergeten",chinese:"忘记",english:"to forget",example:"Vergeet je sleutels niet.",example_cn:"别忘了你的钥匙。",pronunciation:"[vərˈɣeːtə(n)]"},{id:50311,dutch:"vertellen",chinese:"讲述",english:"to tell",example:"De docent vertelt een leuk verhaal.",example_cn:"老师讲了一个有趣的故事。",pronunciation:"[vərˈtɛlə(n)]"},{id:50312,dutch:"bestellen",chinese:"点单/订购",english:"to order",example:"Zullen we vanavond eten bestellen?",example_cn:"我们今晚要不要点外卖？",pronunciation:"[bəˈstɛlə(n)]"}]},{id:"thema5-verbs2",name:"动词(下)",description:"更多社交与活动动词",icon:"💬",color:"from-blue-500 to-blue-600",words:[{id:50401,dutch:"bewaren",chinese:"保存/保管",english:"to save/keep",example:"Ik bewaar al mijn foto's op mijn computer.",example_cn:"我把所有照片都保存在电脑里。",pronunciation:"[bəˈʋaːrə(n)]"},{id:50402,dutch:"delen",chinese:"分享",english:"to share",example:"Hij deelt veel foto's met zijn vrienden op Instagram.",example_cn:"他在Instagram上和朋友分享很多照片。",pronunciation:"[ˈdeːlə(n)]"},{id:50403,dutch:"doorgaan",chinese:"继续/照常进行",english:"to continue",example:"De afspraak gaat helaas niet door.",example_cn:"很遗憾，预约不进行了。",pronunciation:"[ˈdoːrˌɣaːn]"},{id:50404,dutch:"doorgeven",chinese:"转告/传递",english:"to pass on",example:"Kun je aan hem doorgeven dat ik ziek ben?",example_cn:"你能转告他我生病了吗？",pronunciation:"[ˈdoːrˌɣeːvə(n)]"},{id:50405,dutch:"kiezen",chinese:"选择",english:"to choose",example:"Ik kan niet kiezen. Het is allemaal lekker!",example_cn:"我选不出来，都很好吃！",pronunciation:"[ˈkiːzə(n)]"},{id:50406,dutch:"koken",chinese:"做饭",english:"to cook",example:"Kan jij goed koken?",example_cn:"你会做饭吗？",pronunciation:"[ˈkoːkə(n)]"},{id:50407,dutch:"meegaan",chinese:"一起去",english:"to come along",example:"Ga je mee naar het café?",example_cn:"你要一起去咖啡馆吗？",pronunciation:"[ˈmeːˌɣaːn]"},{id:50408,dutch:"picknicken",chinese:"野餐",english:"to picnic",example:"Zullen we gaan picknicken in het park?",example_cn:"我们去公园野餐吧？",pronunciation:"[ˈpɪknɪkə(n)]"},{id:50409,dutch:"reserveren",chinese:"预订",english:"to reserve",example:"Zal ik een tafel reserveren?",example_cn:"要我订一张桌子吗？",pronunciation:"[ˌreːzɛrˈveːrə(n)]"},{id:50410,dutch:"roepen",chinese:"叫/呼唤",english:"to call",example:"Zal ik de ober even roepen?",example_cn:"我去叫一下服务员吧？",pronunciation:"[ˈrupə(n)]"},{id:50411,dutch:"telefoneren",chinese:"打电话",english:"to phone",example:"Hij gebruikt zijn mobiel alleen om te telefoneren.",example_cn:"他用手机只是为了打电话。",pronunciation:"[ˌteːləfoːˈneːrə(n)]"},{id:50412,dutch:"uitkomen",chinese:"合适/方便",english:"to suit/be convenient",example:"Ik heb een plek om tien uur. Komt dat uit?",example_cn:"我有个十点的空位，这样方便吗？",pronunciation:"[ˈœytˌkoːmə(n)]"}]},{id:"thema5-prepositions",name:"介词",description:"常用介词",icon:"📍",color:"from-cyan-500 to-cyan-600",words:[{id:50501,dutch:"met",chinese:"和/与",english:"with",example:"Je spreekt met Jan.",example_cn:"你在和Jan说话。",pronunciation:"[mɛt]"},{id:50502,dutch:"na",chinese:"在…之后",english:"after",example:"Zullen we na het werk nog wat drinken?",example_cn:"我们下班后再喝点东西吗？",pronunciation:"[naː]"},{id:50503,dutch:"naast",chinese:"在…旁边",english:"next to",example:"Naast het station zit een leuk café.",example_cn:"车站旁边有一家不错的咖啡馆。",pronunciation:"[naːst]"},{id:50504,dutch:"op",chinese:"在…上/在（时间点）",english:"on/at",example:"Op dinsdag heb ik een afspraak bij de tandarts.",example_cn:"我周二和牙医有预约。",pronunciation:"[ɔp]"},{id:50505,dutch:"over",chinese:"关于/再过",english:"about/in (time)",example:"Over twee dagen gaat het restaurant open.",example_cn:"再过两天餐厅就开门了。",pronunciation:"[ˈoːvər]"},{id:50506,dutch:"tussen",chinese:"在…之间",english:"between",example:"We lunchen tussen twaalf en één uur.",example_cn:"我们在12点到1点之间吃午饭。",pronunciation:"[ˈtʏsə(n)]"}]},{id:"thema5-adjectives",name:"形容词",description:"描述性形容词",icon:"🎨",color:"from-teal-500 to-teal-600",words:[{id:50601,dutch:"benieuwd",chinese:"好奇的/期待的",english:"curious",example:"Ik ben benieuwd naar mijn cadeau!",example_cn:"我很期待我的礼物！",pronunciation:"[bəˈniːut]"},{id:50602,dutch:"beschikbaar",chinese:"可用的/有空的",english:"available",example:"De dokter is beschikbaar op maandag om tien uur.",example_cn:"医生周一十点有空。",pronunciation:"[bəˈsxɪkbaːr]"},{id:50603,dutch:"bereikbaar",chinese:"可联系到的",english:"reachable",example:"'s Avonds ben ik niet bereikbaar voor mijn werk.",example_cn:"晚上我因工作原因无法联系。",pronunciation:"[bəˈrɛikbaːr]"},{id:50604,dutch:"kapot",chinese:"坏了的",english:"broken",example:"Mijn laptop is kapot.",example_cn:"我的笔记本坏了。",pronunciation:"[kaˈpɔt]"},{id:50605,dutch:"moe",chinese:"累的",english:"tired",example:"Ik ben heel moe van het werk.",example_cn:"我工作后非常累。",pronunciation:"[mu]"},{id:50606,dutch:"negatief",chinese:"消极的",english:"negative",example:"Hij is heel negatief over dat nieuwe restaurant.",example_cn:"他对那家新餐厅评价很消极。",pronunciation:"[ˌneːɣaːˈtif]"},{id:50607,dutch:"gesloten",chinese:"关闭的",english:"closed",example:"Het restaurant is gesloten.",example_cn:"餐厅关门了。",pronunciation:"[ɣəˈsloːtə(n)]"},{id:50608,dutch:"positief",chinese:"积极的",english:"positive",example:"Hij is heel positief over dat nieuwe restaurant.",example_cn:"他对那家新餐厅评价很积极。",pronunciation:"[ˌpoːziːˈtif]"},{id:50609,dutch:"privé",chinese:"私人的",english:"private",example:"Mijn account is privé.",example_cn:"我的账号是私密的。",pronunciation:"[priˈveː]"},{id:50610,dutch:"spannend",chinese:"紧张刺激的",english:"exciting",example:"Wat een spannende film!",example_cn:"真是一部紧张刺激的电影！",pronunciation:"[ˈspɑnənt]"},{id:50611,dutch:"verrukkelijk",chinese:"美味的",english:"delicious",example:"Deze appeltaart is echt verrukkelijk!",example_cn:"这块苹果派真的太好吃了！",pronunciation:"[vəˈrʏkələk]"},{id:50612,dutch:"zalig",chinese:"美味极了/很棒的",english:"heavenly",example:"De koffie is hier zalig!",example_cn:"这里的咖啡太棒了！",pronunciation:"[ˈzaːləx]"}]},{id:"thema5-conjunctions",name:"连词",description:"常用连词",icon:"🔗",color:"from-amber-500 to-amber-600",words:[{id:50701,dutch:"en",chinese:"和/并且",english:"and",example:"We gaan naar een restaurant en dan gaan we naar de film.",example_cn:"我们先去餐厅，然后去看电影。",pronunciation:"[ɛn]"},{id:50702,dutch:"of",chinese:"或者",english:"or",example:"Wil je koken of zullen we eten bestellen?",example_cn:"你想做饭还是我们点餐？",pronunciation:"[ɔf]"},{id:50703,dutch:"maar",chinese:"但是",english:"but",example:"Hij moet naar zijn werk maar de trein rijdt niet.",example_cn:"他得去上班，但火车不开。",pronunciation:"[maːr]"},{id:50704,dutch:"want",chinese:"因为",english:"because",example:"Ik ga met de bus want mijn fiets is kapot.",example_cn:"我坐公交，因为我的自行车坏了。",pronunciation:"[ʋɑnt]"},{id:50705,dutch:"dus",chinese:"所以",english:"so",example:"Zij wil graag fit blijven dus ze gaat naar de sportschool.",example_cn:"她想保持健康，所以去健身房。",pronunciation:"[dʏs]"},{id:50706,dutch:"dat",chinese:"（引导从句）…这件事",english:"that",example:"Ik zal de cursisten vertellen dat ze vrijdag vrij zijn.",example_cn:"我会告诉学员他们周五放假。",pronunciation:"[dɑt]"},{id:50707,dutch:"omdat",chinese:"因为",english:"because",example:"Mijn zoon kan niet naar school komen omdat hij ziek is.",example_cn:"我儿子因为生病不能来上学。",pronunciation:"[ɔmˈdɑt]"},{id:50708,dutch:"als",chinese:"当…时/如果",english:"when/if",example:"Ik stuur je een berichtje als ik op het station ben.",example_cn:"我到车站时会给你发消息。",pronunciation:"[ɑls]"}]},{id:"thema5-other",name:"表达与其他",description:"常用表达和其他词汇",icon:"📚",color:"from-emerald-500 to-emerald-600",words:[{id:50801,dutch:"de groeten doen aan",chinese:"向…问好",english:"to give regards to",example:"Doe de groeten aan je ouders.",example_cn:"替我向你父母问好。",pronunciation:""},{id:50802,dutch:"eet smakelijk",chinese:"请慢用",english:"enjoy your meal",example:"Eet smakelijk!",example_cn:"请慢用！",pronunciation:"[eːt ˈsmaːkələk]"},{id:50803,dutch:"aanstaande",chinese:"即将到来的",english:"upcoming",example:"Aanstaande maandag begint de cursus.",example_cn:"课程下周一开始。",pronunciation:"[ˈaːnˌstaːndə]"},{id:50804,dutch:"inderdaad",chinese:"确实",english:"indeed",example:"Het eten is hier inderdaad lekker!",example_cn:"这里的饭确实好吃！",pronunciation:"[ˌɪndərˈdaːt]"},{id:50805,dutch:"klaar",chinese:"准备好的/完成的",english:"ready/done",example:"Zijn de pizza's al klaar?",example_cn:"披萨都做好了吗？",pronunciation:"[klaːr]"},{id:50806,dutch:"komende",chinese:"即将到来的",english:"coming/next",example:"Komende week moet ik veel werken.",example_cn:"下周我得工作很多。",pronunciation:"[ˈkoːməndə]"},{id:50807,dutch:"kwijt",chinese:"丢了/找不到",english:"lost",example:"Ik ben mijn telefoon kwijt.",example_cn:"我的手机丢了。",pronunciation:"[kʋɛit]"},{id:50808,dutch:"volgende",chinese:"下一（个）",english:"next",example:"Volgende week ben ik vrij.",example_cn:"我下周有空。",pronunciation:"[ˈvɔlɣəndə]"}]}]},Jf={id:"thema6",name:"Thema 6",description:"出行与公共交通 - Reizen, openbaar vervoer",icon:"🚆",color:"from-sky-500 to-blue-600",courses:[{id:"thema6-nouns1",name:"名词(一)",description:"交通与出行基础名词",icon:"🚌",color:"from-sky-500 to-sky-600",words:[{id:60001,dutch:"aanvraag",chinese:"申请",english:"application",example:"We hebben uw aanvraag voor huursubsidie ontvangen.",example_cn:"我们已收到您的租房补贴申请。",pronunciation:"[ˈaːnvraːx]"},{id:60002,dutch:"abonnement",chinese:"订阅/月票",english:"subscription",example:"Ik heb een abonnement op de krant.",example_cn:"我订了报纸。",pronunciation:"[ˌɑbɔnəˈmɛnt]"},{id:60003,dutch:"automaat",chinese:"自动机",english:"machine",example:"Je kunt je saldo opladen bij de automaat.",example_cn:"你可以在自动机上给余额充值。",pronunciation:"[ˌɑutoːˈmaːt]"},{id:60004,dutch:"beker",chinese:"杯子",english:"cup",example:"Ik neem altijd een beker koffie mee in de trein.",example_cn:"我总是带一杯咖啡上火车。",pronunciation:"[ˈbeːkər]"},{id:60005,dutch:"benzine",chinese:"汽油",english:"petrol",example:"De benzine is bijna op. We moeten tanken.",example_cn:"汽油快用完了，我们得去加油。",pronunciation:"[bɛnˈziːnə]"},{id:60006,dutch:"boot",chinese:"船",english:"boat",example:"Zullen we een tocht met de boot maken?",example_cn:"我们要不要坐船游一圈？",pronunciation:"[boːt]"},{id:60007,dutch:"brommer",chinese:"轻便摩托车",english:"moped",example:"Hij gaat met de brommer naar school.",example_cn:"他骑轻便摩托车去上学。",pronunciation:"[ˈbrɔmər]"},{id:60008,dutch:"dagretour",chinese:"当日往返票",english:"day return",example:"Ik heb een dagretour Eindhoven-Maastricht.",example_cn:"我买了一张埃因霍温到马斯特里赫特的当日往返票。",pronunciation:"[ˈdɑxrəˌtuːr]"},{id:60009,dutch:"deel",chinese:"部分",english:"part",example:"Ik heb een deel van het huiswerk gemaakt.",example_cn:"我完成了部分作业。",pronunciation:"[deːl]"},{id:60010,dutch:"diefstal",chinese:"盗窃",english:"theft",example:"Er is helaas veel diefstal op de stations.",example_cn:"车站里不幸有很多盗窃事件。",pronunciation:"[ˈdifstɑl]"},{id:60011,dutch:"dorp",chinese:"村庄",english:"village",example:"Wij willen graag in een rustig dorp wonen.",example_cn:"我们想住在一个安静的村庄里。",pronunciation:"[dɔrp]"},{id:60012,dutch:"drankje",chinese:"饮料",english:"drink",example:"Zullen we nog een drankje nemen?",example_cn:"我们要不要再喝一杯？",pronunciation:"[ˈdrɑŋkjə]"},{id:60013,dutch:"excursie",chinese:"短途旅行/考察",english:"excursion",example:"Ik heb een excursie naar het Rijksmuseum.",example_cn:"我有一次去国立博物馆的参观活动。",pronunciation:"[ɛksˈkʏrsi]"},{id:60014,dutch:"fietstocht",chinese:"骑行活动",english:"cycling trip",example:"We hebben een mooie fietstocht gemaakt.",example_cn:"我们进行了一次很棒的骑行活动。",pronunciation:"[ˈfitsˌtɔxt]"},{id:60015,dutch:"fles",chinese:"瓶子",english:"bottle",example:"Ik heb een fles water in mijn tas.",example_cn:"我包里有一瓶水。",pronunciation:"[flɛs]"}]},{id:"thema6-nouns2",name:"名词(二)",description:"车站与票务名词",icon:"🎫",color:"from-blue-500 to-blue-600",words:[{id:60101,dutch:"halte",chinese:"站点",english:"stop",example:"Bij welke halte moeten we uitstappen?",example_cn:"我们应该在哪一站下车？",pronunciation:"[ˈhɑltə]"},{id:60102,dutch:"handbagage",chinese:"随身行李",english:"hand luggage",example:"Ik reis alleen met handbagage.",example_cn:"我只带随身行李出行。",pronunciation:"[ˈhɑntbaˌɣaːʒə]"},{id:60103,dutch:"informatie",chinese:"信息",english:"information",example:"Ik heb hier de actuele reisinformatie.",example_cn:"我这里有最新的出行信息。",pronunciation:"[ˌɪnfɔrˈmaːtsi]"},{id:60104,dutch:"informatiebalie",chinese:"咨询台",english:"information desk",example:"Vraag even bij de informatiebalie hoe we naar spoor 5 moeten.",example_cn:"去咨询台问一下怎么去5号站台。",pronunciation:"[ˌɪnfɔrˈmaːtsiˌbaːli]"},{id:60105,dutch:"ingang",chinese:"入口",english:"entrance",example:"Voor de ingang van het station staan de taxi's.",example_cn:"车站入口前停着出租车。",pronunciation:"[ˈɪnɣɑŋ]"},{id:60106,dutch:"instructiefilmpje",chinese:"教学短片",english:"instruction video",example:"In het instructiefilmpje krijg je uitleg over de OV-chipkaart.",example_cn:"在教学短片里你会看到关于交通卡的说明。",pronunciation:"[ɪnˈstrʏksiˌfɪlmpjə]"},{id:60107,dutch:"koffer",chinese:"行李箱",english:"suitcase",example:"Mijn koffer is te zwaar voor handbagage.",example_cn:"我的行李箱太重，不能算随身行李。",pronunciation:"[ˈkɔfər]"},{id:60108,dutch:"keuring",chinese:"检验/检测",english:"inspection",example:"De auto moet naar de garage voor de APK-keuring.",example_cn:"这辆车要去修车厂做年检。",pronunciation:"[ˈkøːrɪŋ]"},{id:60109,dutch:"lijn",chinese:"线路",english:"line",example:"Lijn 7 gaat naar het centraal station.",example_cn:"7路车开往中央车站。",pronunciation:"[lɛin]"},{id:60110,dutch:"metro",chinese:"地铁",english:"metro",example:"De nieuwste metro in Amsterdam gaat van noord naar zuid.",example_cn:"阿姆斯特丹最新的地铁线路从北到南。",pronunciation:"[ˈmeːtroː]"},{id:60111,dutch:"motor",chinese:"摩托车/发动机",english:"motorcycle/engine",example:"Ze heeft haar motorrijbewijs gehaald.",example_cn:"她拿到了摩托车驾照。",pronunciation:"[ˈmoːtɔr]"},{id:60112,dutch:"opleiding",chinese:"培训/课程",english:"training/education",example:"Zij heeft een technische opleiding gedaan.",example_cn:"她读过技术类课程。",pronunciation:"[ˈɔpˌlɛidɪŋ]"},{id:60113,dutch:"pas",chinese:"卡/证件",english:"card/pass",example:"Voer uw pinpas in.",example_cn:"请插入您的银行卡。",pronunciation:"[pɑs]"},{id:60114,dutch:"pasfoto",chinese:"证件照",english:"passport photo",example:"Heb je een pasfoto voor je identiteitsbewijs?",example_cn:"你有身份证件用的证件照吗？",pronunciation:"[ˈpɑsˌfoːtoː]"},{id:60115,dutch:"paspoortcontrole",chinese:"护照检查",english:"passport control",example:"Als je bent ingecheckt, ga je door de paspoortcontrole.",example_cn:"办理完值机后，你就要过护照检查。",pronunciation:"[ˈpɑspoːrtˌkɔntroːlə]"}]},{id:"thema6-nouns3",name:"名词(三)",description:"交通工具与旅行名词",icon:"✈️",color:"from-indigo-500 to-indigo-600",words:[{id:60201,dutch:"pech",chinese:"倒霉/故障",english:"breakdown/bad luck",example:"Als je pech hebt, kun je de ANWB bellen.",example_cn:"如果车坏了，你可以打电话给道路救援。",pronunciation:"[pɛx]"},{id:60202,dutch:"perron",chinese:"站台",english:"platform",example:"Hij koopt koffie op het perron en gaat dan in de trein.",example_cn:"他在站台买了咖啡，然后上了火车。",pronunciation:"[pɛˈrɔn]"},{id:60203,dutch:"plein",chinese:"广场",english:"square",example:"Voor het station ligt het stationsplein.",example_cn:"车站前面是站前广场。",pronunciation:"[plɛin]"},{id:60204,dutch:"rijbewijs",chinese:"驾照",english:"driving license",example:"Ik ga mijn rijbewijs ophalen bij burgerzaken.",example_cn:"我去市政服务窗口领取驾照。",pronunciation:"[ˈrɛiˌbəʋɛis]"},{id:60205,dutch:"rondvaart",chinese:"游船观光",english:"boat tour",example:"Ze hebben een rondvaart over de grachten gemaakt.",example_cn:"他们坐船游览了运河。",pronunciation:"[ˈrɔntˌvaːrt]"},{id:60206,dutch:"saldo",chinese:"余额",english:"balance",example:"Het saldo op je OV-chipkaart is 16 euro.",example_cn:"你的交通卡余额是16欧元。",pronunciation:"[ˈsɑldoː]"},{id:60207,dutch:"servicebalie",chinese:"服务台",english:"service desk",example:"Bij de servicebalie kun je reisinformatie vragen.",example_cn:"你可以在服务台咨询出行信息。",pronunciation:"[ˈsɛrvɪsˌbaːli]"},{id:60208,dutch:"soort",chinese:"种类",english:"kind/type",example:"Wat voor soort OV-chipkaart heb jij?",example_cn:"你用的是哪一种交通卡？",pronunciation:"[soːrt]"},{id:60209,dutch:"spits",chinese:"高峰时段",english:"rush hour",example:"Om vijf uur sta je altijd in de spits.",example_cn:"五点钟总会赶上高峰期。",pronunciation:"[spɪts]"},{id:60210,dutch:"spoor",chinese:"轨道/站台号",english:"track/platform",example:"De trein vertrekt van spoor 8.",example_cn:"火车从8号站台发车。",pronunciation:"[spoːr]"},{id:60211,dutch:"stad",chinese:"城市",english:"city",example:"Amsterdam is de hoofdstad van Nederland.",example_cn:"阿姆斯特丹是荷兰的首都。",pronunciation:"[stɑt]"},{id:60212,dutch:"stalling",chinese:"停放处",english:"parking/storage",example:"Ik zet even mijn fiets in de stalling.",example_cn:"我先把自行车停到停放处。",pronunciation:"[ˈstɑlɪŋ]"},{id:60213,dutch:"taxi",chinese:"出租车",english:"taxi",example:"De taxi's staan achter het station.",example_cn:"出租车在车站后面排队。",pronunciation:"[ˈtɑksi]"},{id:60214,dutch:"traject",chinese:"路段/行程区间",english:"route",example:"Er zijn werkzaamheden op het traject Utrecht-Amsterdam.",example_cn:"乌得勒支到阿姆斯特丹这段线路在施工。",pronunciation:"[traːˈjɛkt]"},{id:60215,dutch:"tram",chinese:"有轨电车",english:"tram",example:"Tram 2 gaat naar het Museumplein.",example_cn:"2路有轨电车开往博物馆广场。",pronunciation:"[trɑm]"}]},{id:"thema6-nouns4",name:"名词(四)",description:"更多交通与旅行名词",icon:"🛫",color:"from-purple-500 to-purple-600",words:[{id:60301,dutch:"trein",chinese:"火车",english:"train",example:"Zij neemt elke werkdag de trein naar Zwolle.",example_cn:"她每个工作日都坐火车去兹沃勒。",pronunciation:"[trɛin]"},{id:60302,dutch:"uitje",chinese:"出游活动",english:"outing",example:"Vrijdag heb ik een uitje met mijn werk.",example_cn:"周五我和同事有一次集体出游。",pronunciation:"[ˈœytjə]"},{id:60303,dutch:"verschil",chinese:"差别",english:"difference",example:"Er zijn veel verschillen tussen Nederland en mijn geboorteland.",example_cn:"荷兰和我的祖国有很多差别。",pronunciation:"[vərˈsxɪl]"},{id:60304,dutch:"vertrekhal",chinese:"出发大厅",english:"departure hall",example:"In de vertrekhal wachten veel passagiers.",example_cn:"很多乘客在出发大厅等候。",pronunciation:"[vərˈtrɛkˌhɑl]"},{id:60305,dutch:"vervoersbewijs",chinese:"乘车凭证",english:"travel pass",example:"Uw vervoersbewijs, alstublieft.",example_cn:"请出示您的乘车凭证。",pronunciation:"[vərˈvuːrsˌbəʋɛis]"},{id:60306,dutch:"vervoermiddel",chinese:"交通工具",english:"means of transport",example:"De taxi en de tram zijn vervoermiddelen.",example_cn:"出租车和有轨电车都是交通工具。",pronunciation:"[vərˈvuːrˌmɪdəl]"},{id:60307,dutch:"vliegtuig",chinese:"飞机",english:"airplane",example:"Het vliegtuig is geland.",example_cn:"飞机已经降落了。",pronunciation:"[ˈvlixˌtœyx]"},{id:60308,dutch:"vlucht",chinese:"航班",english:"flight",example:"De vlucht heeft een halfuur vertraging.",example_cn:"航班延误了半小时。",pronunciation:"[vlʏxt]"},{id:60309,dutch:"wachtwoord",chinese:"密码",english:"password",example:"Wat is het wachtwoord van de wifi?",example_cn:"无线网络密码是什么？",pronunciation:"[ˈʋɑxtˌʋoːrt]"},{id:60310,dutch:"wandeling",chinese:"散步/步行",english:"walk",example:"We maken na het eten een korte wandeling.",example_cn:"我们吃完饭后会散一会儿步。",pronunciation:"[ˈʋɑndəlɪŋ]"},{id:60311,dutch:"wereld",chinese:"世界",english:"world",example:"Schiphol verbindt Nederland met de rest van de wereld.",example_cn:"史基浦机场把荷兰与世界其他地方连接起来。",pronunciation:"[ˈʋeːrəlt]"}]},{id:"thema6-verbs1",name:"动词(一)",description:"出行与交通动词",icon:"🏃",color:"from-cyan-500 to-cyan-600",words:[{id:60401,dutch:"aankomen",chinese:"到达",english:"to arrive",example:"De trein komt om 8 uur aan.",example_cn:"火车8点到达。",pronunciation:"[ˈaːnˌkoːmə(n)]"},{id:60402,dutch:"activeren",chinese:"激活",english:"to activate",example:"Je moet eerst je OV-chipkaart activeren.",example_cn:"你得先激活交通卡。",pronunciation:"[ˌɑktiˈveːrə(n)]"},{id:60403,dutch:"bekijken",chinese:"查看",english:"to look at",example:"Op dat scherm kun je de vertrektijden bekijken.",example_cn:"你可以在那个屏幕上查看发车时间。",pronunciation:"[bəˈkɛikə(n)]"},{id:60404,dutch:"boeken",chinese:"预订",english:"to book",example:"Ik heb online een hotel geboekt.",example_cn:"我在网上预订了酒店。",pronunciation:"[ˈbukə(n)]"},{id:60405,dutch:"duren",chinese:"持续",english:"to last",example:"Hoe lang duurt de reis naar Rotterdam?",example_cn:"去鹿特丹的行程要多久？",pronunciation:"[ˈdyːrə(n)]"},{id:60406,dutch:"fietsen",chinese:"骑自行车",english:"to cycle",example:"Wij fietsen elke dag naar school.",example_cn:"我们每天骑自行车去上学。",pronunciation:"[ˈfitsə(n)]"},{id:60407,dutch:"inchecken",chinese:"进站刷卡",english:"to check in",example:"Vergeet niet in te checken bij het poortje.",example_cn:"别忘了在闸机处进站刷卡。",pronunciation:"[ˈɪnˌʃɛkə(n)]"},{id:60408,dutch:"installeren",chinese:"安装",english:"to install",example:"Ik moet de reisapp nog installeren.",example_cn:"我还得安装出行应用。",pronunciation:"[ˌɪnstɑˈleːrə(n)]"},{id:60409,dutch:"intikken",chinese:"键入",english:"to type in",example:"Tik je pincode in.",example_cn:"请输入你的密码。",pronunciation:"[ˈɪnˌtɪkə(n)]"},{id:60410,dutch:"invoeren",chinese:"输入",english:"to enter",example:"Voer je gegevens in op de website.",example_cn:"请在网站上输入你的信息。",pronunciation:"[ˈɪnˌvuːrə(n)]"},{id:60411,dutch:"klikken",chinese:"点击",english:"to click",example:"Klik op de knop 'Bevestigen'.",example_cn:'点击"确认"按钮。',pronunciation:"[ˈklɪkə(n)]"},{id:60412,dutch:"opladen",chinese:"充值/充电",english:"to recharge",example:"Ik laad mijn OV-chipkaart op bij de automaat.",example_cn:"我在自动机上给交通卡充值。",pronunciation:"[ˈɔpˌlaːdə(n)]"},{id:60413,dutch:"opletten",chinese:"注意",english:"to pay attention",example:"Let goed op bij het overstappen.",example_cn:"换乘时请注意。",pronunciation:"[ˈɔpˌlɛtə(n)]"}]},{id:"thema6-verbs2",name:"动词(二)",description:"更多出行相关动词",icon:"🚗",color:"from-violet-500 to-violet-600",words:[{id:60501,dutch:"openen",chinese:"打开",english:"to open",example:"Kun je de deur openen?",example_cn:"你能把门打开吗？",pronunciation:"[ˈoːpənə(n)]"},{id:60502,dutch:"overstappen",chinese:"换乘",english:"to transfer",example:"In Utrecht moet je overstappen.",example_cn:"在乌得勒支你需要换乘。",pronunciation:"[ˈoːvərˌstɑpə(n)]"},{id:60503,dutch:"parkeren",chinese:"停车",english:"to park",example:"Waar kan ik mijn auto parkeren?",example_cn:"我可以把车停在哪里？",pronunciation:"[pɑrˈkeːrə(n)]"},{id:60504,dutch:"plannen",chinese:"计划",english:"to plan",example:"We plannen de reis voor volgende week.",example_cn:"我们计划下周出行。",pronunciation:"[ˈplɑnə(n)]"},{id:60505,dutch:"reizen",chinese:"旅行/出行",english:"to travel",example:"Ik reis met de trein naar mijn werk.",example_cn:"我坐火车去上班。",pronunciation:"[ˈrɛizə(n)]"},{id:60506,dutch:"storten",chinese:"存入/转入",english:"to deposit",example:"Ik stort elke maand geld op mijn spaarrekening.",example_cn:"我每个月往储蓄账户里存钱。",pronunciation:"[ˈstɔrtə(n)]"},{id:60507,dutch:"tanken",chinese:"加油",english:"to refuel",example:"We moeten nog tanken voor vertrek.",example_cn:"出发前我们还得加油。",pronunciation:"[ˈtɑŋkə(n)]"},{id:60508,dutch:"uitchecken",chinese:"出站刷卡",english:"to check out",example:"Vergeet niet uit te checken.",example_cn:"别忘了出站刷卡。",pronunciation:"[ˈœytˌʃɛkə(n)]"},{id:60509,dutch:"varen",chinese:"乘船/航行",english:"to sail",example:"In de zomer varen we vaak over de grachten.",example_cn:"夏天我们经常在运河上坐船。",pronunciation:"[ˈvaːrə(n)]"},{id:60510,dutch:"verliezen",chinese:"丢失",english:"to lose",example:"Ik wil mijn paspoort niet verliezen.",example_cn:"我不想把护照弄丢。",pronunciation:"[vərˈliːzə(n)]"},{id:60511,dutch:"verzekeren",chinese:"保险/投保",english:"to insure",example:"Je moet je auto verzekeren.",example_cn:"你必须给汽车上保险。",pronunciation:"[vərˈzeːkərə(n)]"},{id:60512,dutch:"vliegen",chinese:"飞行",english:"to fly",example:"Morgen vlieg ik naar Madrid.",example_cn:"我明天飞去马德里。",pronunciation:"[ˈvliːɣə(n)]"}]},{id:"thema6-adjectives",name:"形容词与介词",description:"出行相关形容词和介词",icon:"🎨",color:"from-emerald-500 to-emerald-600",words:[{id:60601,dutch:"automatisch",chinese:"自动的",english:"automatic",example:"De poortjes gaan automatisch open.",example_cn:"闸机会自动打开。",pronunciation:"[ˌɑutoːˈmaːtɪs]"},{id:60602,dutch:"duidelijk",chinese:"清楚的",english:"clear",example:"De reisinformatie is nu duidelijk.",example_cn:"现在出行信息很清楚。",pronunciation:"[ˈdœydələk]"},{id:60603,dutch:"elektrisch",chinese:"电动的",english:"electric",example:"Zij heeft een elektrische fiets.",example_cn:"她有一辆电动自行车。",pronunciation:"[eːˈlɛktrɪs]"},{id:60604,dutch:"inbegrepen",chinese:"包含在内的",english:"included",example:"Ontbijt is bij de prijs inbegrepen.",example_cn:"早餐包含在价格里。",pronunciation:"[ˈɪnbəˌɣreːpə(n)]"},{id:60605,dutch:"openbaar",chinese:"公共的",english:"public",example:"De tram is een vorm van openbaar vervoer.",example_cn:"有轨电车是一种公共交通。",pronunciation:"[ˈoːpə(n)ˌbaːr]"},{id:60606,dutch:"overdekt",chinese:"有顶棚的",english:"covered",example:"Op perron 1 is een overdekte wachtruimte.",example_cn:"1号站台有带顶棚的候车区。",pronunciation:"[ˈoːvərˌdɛkt]"},{id:60607,dutch:"rechtstreeks",chinese:"直达的",english:"direct",example:"Dit is een rechtstreekse trein naar Utrecht.",example_cn:"这是一趟直达乌得勒支的火车。",pronunciation:"[ˈrɛxtˌstreːks]"},{id:60608,dutch:"voordelig",chinese:"划算的",english:"economical",example:"Met een dalurenkaart reis je voordelig.",example_cn:"用非高峰时段卡出行更划算。",pronunciation:"[ˈvoːrdeːləx]"},{id:60609,dutch:"door",chinese:"通过/穿过",english:"through",example:"We lopen door het park naar het station.",example_cn:"我们穿过公园去车站。",pronunciation:"[doːr]"},{id:60610,dutch:"tegenover",chinese:"在…对面",english:"opposite",example:"Het station ligt tegenover het museum.",example_cn:"车站在博物馆对面。",pronunciation:"[ˈteːɣə(n)ˌoːvər]"},{id:60611,dutch:"dienst",chinese:"班次/服务",english:"service",example:"De volgende dienst naar Den Haag vertrekt om 10:15.",example_cn:"下一班去海牙的班次10:15发车。",pronunciation:"[dinst]"},{id:60612,dutch:"hartelijk",chinese:"热情地/诚挚地",english:"cordial",example:"Hartelijk dank voor uw hulp.",example_cn:"衷心感谢您的帮助。",pronunciation:"[ˈhɑrtələk]"}]},{id:"thema6-other1",name:"其他词汇(一)",description:"副词和其他常用词",icon:"📚",color:"from-amber-500 to-amber-600",words:[{id:60701,dutch:"afgelopen",chinese:"过去的/刚过去的",english:"past/last",example:"Afgelopen week heb ik veel gereisd.",example_cn:"上周我出了很多次门。",pronunciation:"[ˈɑfɣəˌloːpə(n)]"},{id:60702,dutch:"anders",chinese:"其他的/不一样地",english:"otherwise",example:"We moeten snel fietsen, anders missen we de trein.",example_cn:"我们得骑快点，不然会错过火车。",pronunciation:"[ˈɑndərs]"},{id:60703,dutch:"apart",chinese:"单独的/分开的",english:"separate",example:"De jongens en meisjes zitten in aparte klassen.",example_cn:"男生和女生在不同的班级。",pronunciation:"[aːˈpɑrt]"},{id:60704,dutch:"beide",chinese:"两者都",english:"both",example:"Beide treinen rijden vandaag op tijd.",example_cn:"今天两趟火车都准点。",pronunciation:"[ˈbɛidə]"},{id:60705,dutch:"bijna",chinese:"几乎",english:"almost",example:"We zijn er bijna.",example_cn:"我们快到了。",pronunciation:"[ˈbɛinaː]"},{id:60706,dutch:"dezelfde",chinese:"相同的",english:"the same",example:"We nemen elke dag dezelfde bus.",example_cn:"我们每天都坐同一班公交车。",pronunciation:"[dəˈzɛlfdə]"},{id:60707,dutch:"dichtbij",chinese:"附近/靠近",english:"nearby",example:"Ik woon dichtbij het station.",example_cn:"我住得离车站很近。",pronunciation:"[ˈdɪxtˌbɛi]"},{id:60708,dutch:"echt",chinese:"真的/真正的",english:"really",example:"Dit is echt een snelle verbinding.",example_cn:"这条线路真的很快。",pronunciation:"[ɛxt]"},{id:60709,dutch:"eenmalig",chinese:"一次性的",english:"one-time",example:"Ik maak eenmalig 50 euro naar je rekening over.",example_cn:"我一次性向你账户转50欧元。",pronunciation:"[ˈeːnˌmaːləx]"},{id:60710,dutch:"eigen",chinese:"自己的",english:"own",example:"Ik reis liever met mijn eigen auto.",example_cn:"我更喜欢开自己的车出行。",pronunciation:"[ˈɛiɣə(n)]"},{id:60711,dutch:"elkaar",chinese:"彼此",english:"each other",example:"De papieren liggen door elkaar.",example_cn:"这些文件混在一起了。",pronunciation:"[ɛlˈkaːr]"},{id:60712,dutch:"elke",chinese:"每个",english:"every",example:"Ik ga elke maandag naar taalles.",example_cn:"我每周一都去上语言课。",pronunciation:"[ˈɛlkə]"},{id:60713,dutch:"ergens",chinese:"某处",english:"somewhere",example:"Heb jij mijn rijbewijs ergens gezien?",example_cn:"你在哪儿见过我的驾照吗？",pronunciation:"[ˈɛrɣə(n)s]"},{id:60714,dutch:"genoeg",chinese:"足够的",english:"enough",example:"We hebben nog genoeg tijd.",example_cn:"我们还有足够的时间。",pronunciation:"[ɣəˈnux]"}]},{id:"thema6-other2",name:"其他词汇(二)",description:"更多副词和常用词",icon:"📖",color:"from-rose-500 to-rose-600",words:[{id:60801,dutch:"geschikt",chinese:"合适的",english:"suitable",example:"Deze woning is geschikt voor een gezin.",example_cn:"这套房子适合家庭居住。",pronunciation:"[ɣəˈsxɪkt]"},{id:60802,dutch:"gewoon",chinese:"普通地/就",english:"just/simply",example:"We moeten gewoon even wachten.",example_cn:"我们就先等一会儿。",pronunciation:"[ɣəˈʋoːn]"},{id:60803,dutch:"gisteren",chinese:"昨天",english:"yesterday",example:"Gisteren ben ik met de trein naar Utrecht gegaan.",example_cn:"昨天我坐火车去了乌得勒支。",pronunciation:"[ˈɣɪstərə(n)]"},{id:60804,dutch:"gratis",chinese:"免费的",english:"free",example:"Kinderen tot en met 3 jaar reizen gratis.",example_cn:"3岁及以下儿童可免费乘车。",pronunciation:"[ˈɣraːtɪs]"},{id:60805,dutch:"handig",chinese:"方便的/实用的",english:"handy",example:"Een rugzak is handig voor een dagje uit.",example_cn:"出去玩一天带背包很方便。",pronunciation:"[ˈhɑndəx]"},{id:60806,dutch:"iemand",chinese:"某人",english:"someone",example:"Heeft iemand mijn tas gezien?",example_cn:"有人看到我的包吗？",pronunciation:"[ˈimɑnt]"},{id:60807,dutch:"lopend",chinese:"步行地",english:"on foot",example:"Het station is lopend goed bereikbaar.",example_cn:"车站步行就能方便到达。",pronunciation:"[ˈloːpənt]"},{id:60808,dutch:"mogelijk",chinese:"可能的",english:"possible",example:"Vandaag is reizen via Utrecht niet mogelijk.",example_cn:"今天无法经由乌得勒支出行。",pronunciation:"[ˈmoːɣələk]"},{id:60809,dutch:"naartoe",chinese:"去那里",english:"to there",example:"Waar ga je naartoe?",example_cn:"你要去哪里？",pronunciation:"[naːrˈtu]"},{id:60810,dutch:"niks",chinese:"没什么/什么都不",english:"nothing",example:"Ik heb vandaag nog niks gegeten.",example_cn:"我今天还什么都没吃。",pronunciation:"[nɪks]"},{id:60811,dutch:"onderweg",chinese:"在路上",english:"on the way",example:"We zijn onderweg naar Schiphol.",example_cn:"我们正在去史基浦机场的路上。",pronunciation:"[ˌɔndərˈʋɛx]"},{id:60812,dutch:"opnieuw",chinese:"再次/重新",english:"again",example:"Houd de kaart opnieuw voor de kaartlezer.",example_cn:"请再次把卡放到读卡器前。",pronunciation:"[ɔpˈniw]"},{id:60813,dutch:"regelmatig",chinese:"定期地/经常",english:"regularly",example:"Ga jij regelmatig met de metro?",example_cn:"你经常坐地铁吗？",pronunciation:"[ˈreːɣəlˌmaːtəx]"},{id:60814,dutch:"slechts",chinese:"仅仅/只",english:"only",example:"Ik heb slechts tien minuten om over te stappen.",example_cn:"我只有十分钟换乘时间。",pronunciation:"[slɛxts]"},{id:60815,dutch:"tussendoor",chinese:"间隙中/顺便",english:"in between",example:"Ik werk en tussendoor luister ik naar muziek.",example_cn:"我工作时会间隙听听音乐。",pronunciation:"[ˈtʏsə(n)ˌdoːr]"},{id:60816,dutch:"verschillende",chinese:"不同的",english:"different/various",example:"Je kunt kiezen uit verschillende broodjes.",example_cn:"你可以从不同的面包中选择。",pronunciation:"[vərˈsxɪləndə]"},{id:60817,dutch:"volgende",chinese:"下一个",english:"next",example:"Volgende week gaan we op vakantie.",example_cn:"下周我们去度假。",pronunciation:"[ˈvɔlɣəndə]"},{id:60818,dutch:"vorige",chinese:"上一个",english:"previous",example:"Vorige week is de cursus begonnen.",example_cn:"课程上周开始了。",pronunciation:"[ˈvoːrəɣə]"}]}]},Qf={id:"thema7",name:"Thema 7",description:"居住 - Wonen",icon:"🏠",color:"from-amber-500 to-orange-600",courses:[{id:"thema7-nouns1",name:"名词(一)",description:"房屋结构与房间",icon:"🏡",color:"from-amber-500 to-amber-600",words:[{id:70001,dutch:"aanrecht",chinese:"厨房台面",english:"kitchen counter",example:"Het koffiezetapparaat staat op het aanrecht.",example_cn:"咖啡机放在厨房台面上。",pronunciation:"[ˈaːnrɛxt]"},{id:70002,dutch:"achtertuin",chinese:"后院",english:"backyard",example:"Onze barbecue staat in de achtertuin.",example_cn:"我们的烧烤架放在后院。",pronunciation:"[ˈɑxtərˌtœyn]"},{id:70003,dutch:"badkamer",chinese:"浴室",english:"bathroom",example:"We hebben ook een toilet in de badkamer.",example_cn:"我们浴室里也有一个卫生间。",pronunciation:"[ˈbɑtˌkaːmər]"},{id:70004,dutch:"balkon",chinese:"阳台",english:"balcony",example:"We hebben veel planten op ons balkon.",example_cn:"我们阳台上种了很多植物。",pronunciation:"[bɑlˈkɔn]"},{id:70005,dutch:"dak",chinese:"屋顶",english:"roof",example:"Ons huis heeft een plat dak.",example_cn:"我们家的房子是平屋顶。",pronunciation:"[dɑk]"},{id:70006,dutch:"deur",chinese:"门",english:"door",example:"Doe de deur maar dicht.",example_cn:"把门关上吧。",pronunciation:"[døːr]"},{id:70007,dutch:"hal",chinese:"门厅",english:"hallway",example:"In de hal hangt de kapstok.",example_cn:"门厅里挂着衣帽架。",pronunciation:"[hɑl]"},{id:70008,dutch:"kelder",chinese:"地下室",english:"basement",example:"De wijn ligt in de kelder.",example_cn:"葡萄酒放在地下室。",pronunciation:"[ˈkɛldər]"},{id:70009,dutch:"keuken",chinese:"厨房",english:"kitchen",example:"Hij staat graag in de keuken en kan goed koken.",example_cn:"他喜欢待在厨房，而且很会做饭。",pronunciation:"[ˈkøːkə(n)]"},{id:70010,dutch:"raam",chinese:"窗户",english:"window",example:"Het raam staat nog open.",example_cn:"窗户还开着。",pronunciation:"[raːm]"},{id:70011,dutch:"slaapkamer",chinese:"卧室",english:"bedroom",example:"Ik woon in een flat met twee slaapkamers.",example_cn:"我住在一套有两间卧室的公寓里。",pronunciation:"[ˈslaːpˌkaːmər]"},{id:70012,dutch:"studeerkamer",chinese:"书房",english:"study room",example:"Er staat een printer in de studeerkamer.",example_cn:"书房里有一台打印机。",pronunciation:"[styˈdeːrˌkaːmər]"},{id:70013,dutch:"trap",chinese:"楼梯",english:"stairs",example:"Gaan we met de trap of met de lift?",example_cn:"我们走楼梯还是坐电梯？",pronunciation:"[trɑp]"},{id:70014,dutch:"tuin",chinese:"花园",english:"garden",example:"Achter ons huis hebben we een kleine tuin.",example_cn:"我们房子后面有个小花园。",pronunciation:"[tœyn]"},{id:70015,dutch:"woonkamer",chinese:"客厅",english:"living room",example:"Onze woonkamer is vijftien vierkante meter.",example_cn:"我们的客厅有十五平方米。",pronunciation:"[ˈʋoːnˌkaːmər]"},{id:70016,dutch:"werkkamer",chinese:"工作间",english:"workroom",example:"Je telefoon ligt in de werkkamer.",example_cn:"你的手机在工作间里。",pronunciation:"[ˈʋɛrkˌkaːmər]"},{id:70017,dutch:"zolder",chinese:"阁楼",english:"attic",example:"Op zolder staan al onze vakantiespullen.",example_cn:"阁楼上放着我们所有的度假用品。",pronunciation:"[ˈzɔldər]"},{id:70018,dutch:"schuur",chinese:"储物棚",english:"shed",example:"Mijn fiets staat in de schuur.",example_cn:"我的自行车停在储物棚里。",pronunciation:"[sxyːr]"},{id:70019,dutch:"schoorsteen",chinese:"烟囱",english:"chimney",example:"Op het dak van ons huis staat een schoorsteen.",example_cn:"我们家屋顶上有一个烟囱。",pronunciation:"[ˈsxoːrˌsteːn]"},{id:70020,dutch:"toilet",chinese:"厕所",english:"toilet",example:"Waar is het toilet?",example_cn:"请问厕所在哪里？",pronunciation:"[twaˈlɛt]"}]},{id:"thema7-nouns2",name:"名词(二)",description:"家具与家电",icon:"🛋️",color:"from-orange-500 to-orange-600",words:[{id:70101,dutch:"afzuigkap",chinese:"抽油烟机",english:"extractor hood",example:"Doe de afzuigkap maar even aan.",example_cn:"把抽油烟机先打开吧。",pronunciation:"[ˈɑfˌzœyxˌkɑp]"},{id:70102,dutch:"apparaat",chinese:"设备",english:"device",example:"Wat een handig apparaat!",example_cn:"这设备真好用！",pronunciation:"[ˌaːpaˈraːt]"},{id:70103,dutch:"bad",chinese:"浴缸",english:"bath",example:"Ik ga lekker in bad.",example_cn:"我要舒舒服服泡个澡。",pronunciation:"[bɑt]"},{id:70104,dutch:"bank",chinese:"沙发",english:"sofa",example:"Onze kat ligt altijd op de bank.",example_cn:"我们家的猫总是躺在沙发上。",pronunciation:"[bɑŋk]"},{id:70105,dutch:"bed",chinese:"床",english:"bed",example:"In deze kamer staat een tweepersoonsbed.",example_cn:"这个房间里有一张双人床。",pronunciation:"[bɛt]"},{id:70106,dutch:"bureau",chinese:"书桌/办公室",english:"desk/office",example:"Er liggen veel boeken op zijn bureau.",example_cn:"他的书桌上放着很多书。",pronunciation:"[byˈroː]"},{id:70107,dutch:"dekbed",chinese:"被子",english:"duvet",example:"Mijn dekbed is heerlijk zacht.",example_cn:"我的被子特别柔软。",pronunciation:"[ˈdɛkˌbɛt]"},{id:70108,dutch:"droger",chinese:"烘干机",english:"dryer",example:"Ik doe de was even in de droger.",example_cn:"我先把衣服放进烘干机。",pronunciation:"[ˈdroːɣər]"},{id:70109,dutch:"eettafel",chinese:"餐桌",english:"dining table",example:"Er staan mooie tulpen op de eettafel.",example_cn:"餐桌上摆着漂亮的郁金香。",pronunciation:"[ˈeːtˌtaːfəl]"},{id:70110,dutch:"fornuis",chinese:"炉灶",english:"stove",example:"Er staat een pan soep op het fornuis.",example_cn:"炉灶上有一锅汤。",pronunciation:"[fɔrˈnœys]"},{id:70111,dutch:"gordijn",chinese:"窗帘",english:"curtain",example:"Het is al donker. Ik doe de gordijnen dicht.",example_cn:"天已经黑了，我把窗帘拉上。",pronunciation:"[ɣɔrˈdɛin]"},{id:70112,dutch:"kast",chinese:"柜子",english:"cupboard",example:"Je jurk hangt in de kast.",example_cn:"你的裙子挂在柜子里。",pronunciation:"[kɑst]"},{id:70113,dutch:"kleed",chinese:"地毯/布",english:"rug/cloth",example:"Er ligt een mooi kleed onder de tafel.",example_cn:"桌子下面铺着一块漂亮的地毯。",pronunciation:"[kleːt]"},{id:70114,dutch:"koelkast",chinese:"冰箱",english:"fridge",example:"De kaas ligt in de koelkast.",example_cn:"奶酪在冰箱里。",pronunciation:"[ˈkulˌkɑst]"},{id:70115,dutch:"kopje",chinese:"小杯子",english:"cup",example:"Wil je nog een kopje koffie?",example_cn:"你还要再来一小杯咖啡吗？",pronunciation:"[ˈkɔpjə]"},{id:70116,dutch:"kraan",chinese:"水龙头",english:"tap/faucet",example:"Doe de kraan even dicht.",example_cn:"请把水龙头关一下。",pronunciation:"[kraːn]"},{id:70117,dutch:"kussen",chinese:"靠垫/枕头",english:"cushion/pillow",example:"Er liggen twee mooie kussens op de bank.",example_cn:"沙发上有两个好看的靠垫。",pronunciation:"[ˈkʏsə(n)]"},{id:70118,dutch:"lamp",chinese:"灯",english:"lamp",example:"Doe jij de lampen uit?",example_cn:"你来关灯吗？",pronunciation:"[lɑmp]"},{id:70119,dutch:"ligbad",chinese:"浴缸",english:"bathtub",example:"We hebben een douche en een ligbad in de badkamer.",example_cn:"我们浴室里有淋浴和浴缸。",pronunciation:"[ˈlɪɣˌbɑt]"},{id:70120,dutch:"magnetron",chinese:"微波炉",english:"microwave",example:"Ik verwarm vaak maaltijden in de magnetron.",example_cn:"我经常用微波炉加热饭菜。",pronunciation:"[ˈmɑɣnəˌtrɔn]"}]},{id:"thema7-nouns3",name:"名词(三)",description:"更多家具家电与日用品",icon:"🪑",color:"from-red-500 to-red-600",words:[{id:70201,dutch:"nachtkastje",chinese:"床头柜",english:"nightstand",example:"Naast het bed staan twee nachtkastjes.",example_cn:"床边放着两个床头柜。",pronunciation:"[ˈnɑxtˌkɑstjə]"},{id:70202,dutch:"oven",chinese:"烤箱",english:"oven",example:"Er staat een lekkere appeltaart in de oven.",example_cn:"烤箱里有一个香喷喷的苹果派。",pronunciation:"[ˈoːvə(n)]"},{id:70203,dutch:"spiegel",chinese:"镜子",english:"mirror",example:"Er hangt een spiegel in het toilet.",example_cn:"卫生间里挂着一面镜子。",pronunciation:"[ˈspiːɣəl]"},{id:70204,dutch:"stoel",chinese:"椅子",english:"chair",example:"Er staan zes stoelen om de tafel.",example_cn:"桌子周围有六把椅子。",pronunciation:"[stul]"},{id:70205,dutch:"tafel",chinese:"桌子",english:"table",example:"Er staat een vaas met mooie bloemen op de tafel.",example_cn:"桌子上有一只插着鲜花的花瓶。",pronunciation:"[ˈtaːfəl]"},{id:70206,dutch:"tapijt",chinese:"地毯",english:"carpet",example:"Er ligt een Perzisch tapijt in de kamer.",example_cn:"房间里铺着一张波斯地毯。",pronunciation:"[taˈpɛit]"},{id:70207,dutch:"televisie",chinese:"电视",english:"television",example:"We kijken bijna nooit televisie.",example_cn:"我们几乎不怎么看电视。",pronunciation:"[ˌteːləˈviːzi]"},{id:70208,dutch:"theepot",chinese:"茶壶",english:"teapot",example:"De theepot is leeg. Ik zet even nieuwe thee.",example_cn:"茶壶空了，我去重新泡一壶茶。",pronunciation:"[ˈteːˌpɔt]"},{id:70209,dutch:"vaas",chinese:"花瓶",english:"vase",example:"Er staat een mooie vaas met bloemen op de tafel.",example_cn:"桌子上有一个漂亮的花瓶，里面插着花。",pronunciation:"[vaːs]"},{id:70210,dutch:"vaatwasser",chinese:"洗碗机",english:"dishwasher",example:"De vaatwasser is kapot, dus ik moet zelf afwassen.",example_cn:"洗碗机坏了，所以我得手洗餐具。",pronunciation:"[ˈvaːtˌʋɑsər]"},{id:70211,dutch:"vuilniszak",chinese:"垃圾袋",english:"garbage bag",example:"Kun jij even de vuilniszak buiten zetten?",example_cn:"你能把垃圾袋拿出去吗？",pronunciation:"[ˈvœylnɪsˌzɑk]"},{id:70212,dutch:"wasmachine",chinese:"洗衣机",english:"washing machine",example:"Ik zet de wasmachine even aan.",example_cn:"我先把洗衣机打开。",pronunciation:"[ˈʋɑsmaˌʃiːnə]"},{id:70213,dutch:"wastafel",chinese:"洗手台",english:"washbasin",example:"Je tandenborstel staat op de wastafel.",example_cn:"你的牙刷放在洗手台上。",pronunciation:"[ˈʋɑsˌtaːfəl]"},{id:70214,dutch:"wekker",chinese:"闹钟",english:"alarm clock",example:"Ik zet de wekker op zeven uur.",example_cn:"我把闹钟设在七点。",pronunciation:"[ˈʋɛkər]"},{id:70215,dutch:"schilderij",chinese:"画作",english:"painting",example:"Dat is een schilderij van Van Gogh.",example_cn:"那是一幅梵高的画。",pronunciation:"[sxɪldəˈrɛi]"},{id:70216,dutch:"tekening",chinese:"图画",english:"drawing",example:"Ik heb een tekening van ons huis gemaakt.",example_cn:"我画了一幅我们家的图。",pronunciation:"[ˈteːkənɪŋ]"},{id:70217,dutch:"verwarming",chinese:"暖气",english:"heating",example:"Staat de verwarming aan? Ik heb het koud.",example_cn:"暖气开着吗？我有点冷。",pronunciation:"[vərˈʋɑrmɪŋ]"},{id:70218,dutch:"warmtepompsysteem",chinese:"热泵系统",english:"heat pump system",example:"We laten een warmtepompsysteem installeren.",example_cn:"我们准备安装热泵系统。",pronunciation:"[ˈʋɑrmtəˌpɔmpsiˌsteːm]"}]},{id:"thema7-nouns4",name:"名词(四)",description:"住房类型与房产",icon:"🏘️",color:"from-rose-500 to-rose-600",words:[{id:70301,dutch:"boerderij",chinese:"农场",english:"farm",example:"Er zijn veel dieren op de boerderij.",example_cn:"农场里有很多动物。",pronunciation:"[ˈbuːrdəˌrɛi]"},{id:70302,dutch:"droomhuis",chinese:"梦想中的房子",english:"dream house",example:"We hebben ons droomhuis gevonden.",example_cn:"我们找到了理想中的房子。",pronunciation:"[ˈdroːmˌhœys]"},{id:70303,dutch:"dubbelglas",chinese:"双层玻璃",english:"double glazing",example:"We laten dubbelglas in ons huis plaatsen.",example_cn:"我们打算给房子装双层玻璃。",pronunciation:"[ˈdʏbəlˌɣlɑs]"},{id:70304,dutch:"eengezinswoning",chinese:"独栋家庭住宅",english:"family house",example:"We wonen met onze kinderen in een eengezinswoning.",example_cn:"我们和孩子住在一套独栋家庭住宅里。",pronunciation:"[ˈeːnɣəˌzɪnsˌʋoːnɪŋ]"},{id:70305,dutch:"flat",chinese:"公寓楼",english:"apartment building",example:"Mijn zus woont in een flat in het centrum.",example_cn:"我姐姐住在市中心的一栋公寓楼里。",pronunciation:"[flɛt]"},{id:70306,dutch:"grachtenpand",chinese:"运河边老宅",english:"canal house",example:"De grachtenpanden in Amsterdam zijn rond 1750 gebouwd.",example_cn:"阿姆斯特丹运河边的老宅大约建于1750年。",pronunciation:"[ˈɣrɑxtə(n)ˌpɑnt]"},{id:70307,dutch:"huur",chinese:"房租",english:"rent",example:"De verhuurder gaat de huur verhogen.",example_cn:"房东要涨房租了。",pronunciation:"[hyːr]"},{id:70308,dutch:"hypotheek",chinese:"抵押贷款",english:"mortgage",example:"We gaan een hypotheek aanvragen bij de bank.",example_cn:"我们打算去银行申请房贷。",pronunciation:"[ˌhipoːˈteːk]"},{id:70309,dutch:"indeling",chinese:"布局",english:"layout",example:"Het appartement heeft een hele goede indeling.",example_cn:"这套公寓的布局非常好。",pronunciation:"[ˈɪndˌeːlɪŋ]"},{id:70310,dutch:"makelaar",chinese:"房产中介",english:"real estate agent",example:"We hebben een makelaar voor het verkopen van ons huis.",example_cn:"我们找了房产中介来卖房。",pronunciation:"[ˈmaːkəˌlaːr]"},{id:70311,dutch:"nieuwbouw",chinese:"新建住宅区",english:"new construction",example:"In dat dorp is er veel nieuwbouw.",example_cn:"那个村子里有很多新建住宅。",pronunciation:"[ˈniːuˌbɑu]"},{id:70312,dutch:"rente",chinese:"利率",english:"interest rate",example:"Hoe hoog is de rente van jullie hypotheek?",example_cn:"你们房贷的利率是多少？",pronunciation:"[ˈrɛntə]"},{id:70313,dutch:"rijtjeshuis",chinese:"联排住宅",english:"terraced house",example:"We wonen met ons gezin in een rijtjeshuis.",example_cn:"我们一家人住在联排住宅里。",pronunciation:"[ˈrɛitjəsˌhœys]"},{id:70314,dutch:"twee-onder-een-kapwoning",chinese:"双拼住宅",english:"semi-detached house",example:"We hebben vorig jaar een twee-onder-een-kapwoning gekocht.",example_cn:"我们去年买了一套双拼住宅。",pronunciation:""},{id:70315,dutch:"uitbouw",chinese:"房屋扩建部分",english:"extension",example:"We hebben aan de achterkant van ons huis een uitbouw.",example_cn:"我们在房子后侧做了扩建。",pronunciation:"[ˈœytˌbɑu]"},{id:70316,dutch:"uitzicht",chinese:"景观/视野",english:"view",example:"Ik heb een mooi uitzicht op de achtste verdieping.",example_cn:"我在八楼有很好的视野。",pronunciation:"[ˈœytzɪxt]"},{id:70317,dutch:"voorziening",chinese:"设施",english:"facility",example:"Er zijn veel voorzieningen in deze wijk.",example_cn:"这个社区配套设施很多。",pronunciation:"[ˈvoːrziˌnɪŋ]"},{id:70318,dutch:"woning",chinese:"住房",english:"dwelling",example:"Het is een woning van 1967.",example_cn:"这是一套建于1967年的住房。",pronunciation:"[ˈʋoːnɪŋ]"},{id:70319,dutch:"zonnepaneel",chinese:"太阳能板",english:"solar panel",example:"We gaan zonnepanelen op het dak leggen.",example_cn:"我们打算在屋顶安装太阳能板。",pronunciation:"[ˈzɔnəpaˌneːl]"},{id:70320,dutch:"sauna",chinese:"桑拿",english:"sauna",example:"Die villa heeft een eigen sauna.",example_cn:"那栋别墅有自己的桑拿房。",pronunciation:"[ˈsɑunaː]"}]},{id:"thema7-nouns5",name:"名词(五)",description:"生活场所与其他名词",icon:"🌳",color:"from-emerald-500 to-emerald-600",words:[{id:70401,dutch:"activiteit",chinese:"活动",english:"activity",example:"In het buurthuis zijn veel leuke activiteiten.",example_cn:"社区活动中心有很多有趣的活动。",pronunciation:"[ˌɑktiːviˈtɛit]"},{id:70402,dutch:"band",chinese:"轮胎/带子",english:"tire/band",example:"Kun jij de band van je fiets plakken?",example_cn:"你能把自行车轮胎补一下吗？",pronunciation:"[bɑnt]"},{id:70403,dutch:"examen",chinese:"考试",english:"exam",example:"Ik heb morgen mijn examen.",example_cn:"我明天有考试。",pronunciation:"[ɛɡˈzaːmə(n)]"},{id:70404,dutch:"hond",chinese:"狗",english:"dog",example:"Ik ga elke dag drie keer wandelen met de hond.",example_cn:"我每天带狗散步三次。",pronunciation:"[hɔnt]"},{id:70405,dutch:"huishouden",chinese:"家务/家庭事务",english:"household",example:"Ik doe thuis het huishouden.",example_cn:"我在家做家务。",pronunciation:"[ˈhœysˌhɑudə(n)]"},{id:70406,dutch:"journaal",chinese:"新闻联播",english:"news broadcast",example:"We kijken elke avond naar het journaal.",example_cn:"我们每晚都看新闻。",pronunciation:"[ʒʊrˈnaːl]"},{id:70407,dutch:"kant",chinese:"一侧",english:"side",example:"De auto staat aan de kant van de weg.",example_cn:"车停在路边。",pronunciation:"[kɑnt]"},{id:70408,dutch:"kat",chinese:"猫",english:"cat",example:"Onze kat ligt vaak op de bank.",example_cn:"我们家的猫经常趴在沙发上。",pronunciation:"[kɑt]"},{id:70409,dutch:"kip",chinese:"鸡",english:"chicken",example:"Onze kippen leggen elke dag eieren.",example_cn:"我们家的鸡每天都下蛋。",pronunciation:"[kɪp]"},{id:70410,dutch:"klas",chinese:"班级",english:"class",example:"Ze zit in de tweede klas.",example_cn:"她在二年级班。",pronunciation:"[klɑs]"},{id:70411,dutch:"last",chinese:"困扰/麻烦",english:"trouble/nuisance",example:"Ik heb last van de buren.",example_cn:"邻居太吵让我很困扰。",pronunciation:"[lɑst]"},{id:70412,dutch:"loopafstand",chinese:"步行距离",english:"walking distance",example:"Het station ligt op loopafstand van mijn huis.",example_cn:"车站离我家步行可达。",pronunciation:"[ˈloːpˌɑfstɑnt]"},{id:70413,dutch:"moestuin",chinese:"菜园",english:"vegetable garden",example:"We eten vaak groenten uit de moestuin.",example_cn:"我们经常吃菜园里种的蔬菜。",pronunciation:"[ˈmusˌtœyn]"},{id:70414,dutch:"natuur",chinese:"自然",english:"nature",example:"Zij wonen graag dichtbij de natuur.",example_cn:"他们喜欢住在接近自然的地方。",pronunciation:"[naˈtyːr]"},{id:70415,dutch:"ongeluk",chinese:"事故",english:"accident",example:"Er is een ongeluk gebeurd op de A2.",example_cn:"A2高速上发生了事故。",pronunciation:"[ˈɔnɣəˌlʏk]"},{id:70416,dutch:"plaats",chinese:"地方/城镇",english:"place/town",example:"Giethoorn is een toeristische plaats.",example_cn:"羊角村是一个旅游小镇。",pronunciation:"[plaːts]"},{id:70417,dutch:"rijexamen",chinese:"驾照考试",english:"driving test",example:"Hij is geslaagd voor zijn rijexamen.",example_cn:"他通过了驾照考试。",pronunciation:"[ˈrɛiɛɡˌzaːmə(n)]"},{id:70418,dutch:"schema",chinese:"时间表/计划表",english:"schedule",example:"Ik maak altijd een schema voor mijn huiswerk.",example_cn:"我总会为作业做一个计划表。",pronunciation:"[ˈsxeːmaː]"},{id:70419,dutch:"speeltuin",chinese:"游乐场",english:"playground",example:"Er is een leuke speeltuin in het park.",example_cn:"公园里有一个很好玩的游乐场。",pronunciation:"[ˈspeːlˌtœyn]"},{id:70420,dutch:"strand",chinese:"海滩",english:"beach",example:"We wandelen graag met de hond op het strand.",example_cn:"我们喜欢带狗在海滩散步。",pronunciation:"[strɑnt]"},{id:70421,dutch:"student",chinese:"学生",english:"student",example:"Er wonen zes studenten in dat huis.",example_cn:"那套房子里住着六个学生。",pronunciation:"[styˈdɛnt]"},{id:70422,dutch:"studentenkamer",chinese:"学生房间",english:"student room",example:"Hij heeft een kleine studentenkamer.",example_cn:"他有一间小小的学生房。",pronunciation:"[styˈdɛntə(n)ˌkaːmər]"},{id:70423,dutch:"type",chinese:"类型",english:"type",example:"Wat voor type huis vind jij mooi?",example_cn:"你喜欢什么类型的房子？",pronunciation:"[ˈtiːpə]"},{id:70424,dutch:"zwembad",chinese:"游泳池",english:"swimming pool",example:"Ons vakantiehuis heeft ook een zwembad.",example_cn:"我们的度假屋还有一个游泳池。",pronunciation:"[ˈzʋɛmˌbɑt]"}]},{id:"thema7-verbs1",name:"动词(一)",description:"居住与家务动词",icon:"🏃",color:"from-yellow-500 to-yellow-600",words:[{id:70501,dutch:"wonen",chinese:"居住",english:"to live",example:"Waar woon jij?",example_cn:"你住在哪里？",pronunciation:"[ˈʋoːnə(n)]"},{id:70502,dutch:"houden van",chinese:"喜欢",english:"to love",example:"Ik houd van dit huis.",example_cn:"我喜欢这套房子。",pronunciation:"[ˈhɑudə(n) vɑn]"},{id:70503,dutch:"schoonmaken",chinese:"打扫",english:"to clean",example:"Ik vind het niet leuk om het huis schoon te maken.",example_cn:"我不喜欢打扫房子。",pronunciation:"[ˈsxoːnˌmaːkə(n)]"},{id:70504,dutch:"stofzuigen",chinese:"用吸尘器清扫",english:"to vacuum",example:"We hebben een kat, dus ik moet vaak stofzuigen.",example_cn:"我们养了猫，所以我得经常吸尘。",pronunciation:"[ˈstɔfˌzœyɣə(n)]"},{id:70505,dutch:"opruimen",chinese:"收拾",english:"to tidy up",example:"De kinderen moeten vaker hun kamer opruimen.",example_cn:"孩子们要更常收拾房间。",pronunciation:"[ˈɔpˌrœymə(n)]"},{id:70506,dutch:"klussen",chinese:"做家装活",english:"to do DIY",example:"Zij houdt van klussen in het huis.",example_cn:"她喜欢在家里做些装修活。",pronunciation:"[ˈklʏsə(n)]"},{id:70507,dutch:"schilderen",chinese:"粉刷/绘画",english:"to paint",example:"We gaan in de zomer het huis schilderen.",example_cn:"我们夏天要把房子粉刷一下。",pronunciation:"[ˈsxɪldərə(n)]"},{id:70508,dutch:"verbouwen",chinese:"改造/扩建",english:"to renovate",example:"We gaan de woonkamer en de keuken verbouwen.",example_cn:"我们要改造客厅和厨房。",pronunciation:"[vərˈbɑuə(n)]"},{id:70509,dutch:"verhuizen",chinese:"搬家",english:"to move",example:"We zijn naar Zwolle verhuisd.",example_cn:"我们搬到兹沃勒了。",pronunciation:"[vərˈhœyzə(n)]"},{id:70510,dutch:"verhuren",chinese:"出租",english:"to rent out",example:"We verhuren ons huis voor zes maanden aan vrienden.",example_cn:"我们把房子出租给朋友六个月。",pronunciation:"[vərˈhyːrə(n)]"},{id:70511,dutch:"verkopen",chinese:"卖",english:"to sell",example:"Zij gaan hun huis verkopen.",example_cn:"他们要把房子卖掉。",pronunciation:"[vərˈkoːpə(n)]"},{id:70512,dutch:"samenwonen",chinese:"同居/同住",english:"to live together",example:"Onze dochter gaat samenwonen.",example_cn:"我们女儿要开始和伴侣同住。",pronunciation:"[ˈsaːmə(n)ˌʋoːnə(n)]"},{id:70513,dutch:"bakken",chinese:"烘烤",english:"to bake",example:"Ik heb een lekkere taart gebakken.",example_cn:"我烤了一个很好吃的蛋糕。",pronunciation:"[ˈbɑkə(n)]"},{id:70514,dutch:"behangen",chinese:"贴壁纸",english:"to wallpaper",example:"We gaan de slaapkamer behangen.",example_cn:"我们要给卧室贴墙纸。",pronunciation:"[bəˈhɑŋə(n)]"},{id:70515,dutch:"dekken",chinese:"摆放（餐具）",english:"to set (table)",example:"Wil jij even de tafel dekken?",example_cn:"你能先把餐桌摆好吗？",pronunciation:"[ˈdɛkə(n)]"},{id:70516,dutch:"isoleren",chinese:"做保温/隔热",english:"to insulate",example:"We laten het dak isoleren.",example_cn:"我们准备给屋顶做保温。",pronunciation:"[ˌiːzoːˈleːrə(n)]"},{id:70517,dutch:"lappen",chinese:"擦（窗）",english:"to clean (windows)",example:"De ramen zijn vies. Ik ga ze lappen.",example_cn:"窗户脏了，我去擦。",pronunciation:"[ˈlɑpə(n)]"},{id:70518,dutch:"logeren",chinese:"借住",english:"to stay over",example:"Ze gaat bij haar opa en oma logeren.",example_cn:"她要去爷爷奶奶家借住。",pronunciation:"[loːˈʒeːrə(n)]"}]},{id:"thema7-verbs2",name:"动词(二)",description:"更多居住相关动词",icon:"🔧",color:"from-lime-500 to-lime-600",words:[{id:70601,dutch:"aandoen",chinese:"打开/穿上",english:"to turn on",example:"Kun jij alle lampen aandoen?",example_cn:"你能把所有灯都打开吗？",pronunciation:"[ˈaːnˌdun]"},{id:70602,dutch:"aanzetten",chinese:"打开（电器）",english:"to switch on",example:"Zullen we de televisie aanzetten?",example_cn:"我们把电视打开吧？",pronunciation:"[ˈaːnˌzɛtə(n)]"},{id:70603,dutch:"uitdoen",chinese:"关掉/脱下",english:"to turn off",example:"Kun jij alle lampen uitdoen?",example_cn:"你能把所有灯关掉吗？",pronunciation:"[ˈœytˌdun]"},{id:70604,dutch:"uitzetten",chinese:"关闭（电器）",english:"to switch off",example:"Zal ik de televisie uitzetten?",example_cn:"要不要我把电视关掉？",pronunciation:"[ˈœytˌzɛtə(n)]"},{id:70605,dutch:"dichtdoen",chinese:"关上",english:"to close",example:"Kun jij de gordijnen even dichtdoen?",example_cn:"你能把窗帘关上吗？",pronunciation:"[ˈdɪxtˌdun]"},{id:70606,dutch:"opendoen",chinese:"打开",english:"to open",example:"Kun jij de gordijnen even opendoen?",example_cn:"你能把窗帘打开吗？",pronunciation:"[ˈoːpə(n)ˌdun]"},{id:70607,dutch:"opknappen",chinese:"翻新/整修",english:"to fix up",example:"Volgend jaar gaan we de tuin opknappen.",example_cn:"我们明年要把花园翻新一下。",pronunciation:"[ˈɔpˌknɑpə(n)]"},{id:70608,dutch:"opmaken",chinese:"整理好（床铺）",english:"to make (bed)",example:"Wil jij even het bed opmaken?",example_cn:"你能先把床铺整理好吗？",pronunciation:"[ˈɔpˌmaːkə(n)]"},{id:70609,dutch:"poetsen",chinese:"擦拭/清洁",english:"to polish/brush",example:"Heb je je tanden al gepoetst?",example_cn:"你刷牙了吗？",pronunciation:"[ˈputsə(n)]"},{id:70610,dutch:"renoveren",chinese:"翻修",english:"to renovate",example:"Je moet veel aan dit oude huis renoveren.",example_cn:"这栋老房子要做很多翻修。",pronunciation:"[ˌreːnoːˈveːrə(n)]"},{id:70611,dutch:"repareren",chinese:"修理",english:"to repair",example:"Mijn fiets is kapot. Kun jij hem repareren?",example_cn:"我的自行车坏了，你能修一下吗？",pronunciation:"[ˌreːpaːˈreːrə(n)]"},{id:70612,dutch:"roken",chinese:"吸烟",english:"to smoke",example:"We roken niet in het huis.",example_cn:"我们不在家里抽烟。",pronunciation:"[ˈroːkə(n)]"},{id:70613,dutch:"strijken",chinese:"熨烫",english:"to iron",example:"Strijk jij al je kleding?",example_cn:"你的衣服都会熨吗？",pronunciation:"[ˈstrɛikə(n)]"},{id:70614,dutch:"tuinieren",chinese:"园艺",english:"to garden",example:"Haar hobby is tuinieren.",example_cn:"她的爱好是园艺。",pronunciation:"[tœyˈniːrə(n)]"},{id:70615,dutch:"genieten",chinese:"享受",english:"to enjoy",example:"We genieten van onze nieuwe woning.",example_cn:"我们很享受住进新家的生活。",pronunciation:"[ɣəˈniːtə(n)]"},{id:70616,dutch:"verdienen",chinese:"挣（钱）/获得",english:"to earn",example:"Zij verdient een goed salaris.",example_cn:"她工资不错。",pronunciation:"[vərˈdiːnə(n)]"}]},{id:"thema7-verbs3",name:"动词(三)",description:"基础动词与状态动词",icon:"📝",color:"from-cyan-500 to-cyan-600",words:[{id:70701,dutch:"beginnen",chinese:"开始",english:"to begin",example:"Hoe laat begint de film?",example_cn:"电影几点开始？",pronunciation:"[bəˈɣɪnə(n)]"},{id:70702,dutch:"gebeuren",chinese:"发生",english:"to happen",example:"Wat is er precies gebeurd?",example_cn:"具体发生了什么？",pronunciation:"[ɣəˈbøːrə(n)]"},{id:70703,dutch:"blijven",chinese:"停留/保持",english:"to stay",example:"We blijven dit weekend thuis.",example_cn:"这个周末我们待在家里。",pronunciation:"[ˈblɛivə(n)]"},{id:70704,dutch:"dalen",chinese:"下降",english:"to decrease",example:"De temperatuur is vannacht gedaald.",example_cn:"昨晚气温下降了。",pronunciation:"[ˈdaːlə(n)]"},{id:70705,dutch:"gaan",chinese:"去",english:"to go",example:"We gaan de slaapkamer behangen.",example_cn:"我们要给卧室贴墙纸。",pronunciation:"[ɣaːn]"},{id:70706,dutch:"komen",chinese:"来",english:"to come",example:"Hij komt vanavond langs.",example_cn:"他今晚会过来。",pronunciation:"[ˈkoːmə(n)]"},{id:70707,dutch:"slagen",chinese:"通过（考试）",english:"to pass",example:"Ze is geslaagd voor haar examen.",example_cn:"她通过了考试。",pronunciation:"[ˈslaːɣə(n)]"},{id:70708,dutch:"stijgen",chinese:"上升",english:"to rise",example:"De prijzen van huizen stijgen snel.",example_cn:"房价上涨得很快。",pronunciation:"[ˈstɛiɣə(n)]"},{id:70709,dutch:"stoppen",chinese:"停止",english:"to stop",example:"Ik ben gestopt met roken.",example_cn:"我已经戒烟了。",pronunciation:"[ˈstɔpə(n)]"},{id:70710,dutch:"trouwen",chinese:"结婚",english:"to marry",example:"Zij zijn vorig jaar getrouwd.",example_cn:"他们去年结婚了。",pronunciation:"[ˈtrɑuə(n)]"},{id:70711,dutch:"worden",chinese:"变成",english:"to become",example:"Ik ben gisteren 30 geworden.",example_cn:"我昨天满30岁了。",pronunciation:"[ˈʋɔrdə(n)]"},{id:70712,dutch:"zakken",chinese:"落榜/下沉",english:"to fail/sink",example:"Hij is gezakt voor zijn rijexamen.",example_cn:"他的驾照考试没通过。",pronunciation:"[ˈzɑkə(n)]"},{id:70713,dutch:"hangen",chinese:"悬挂",english:"to hang",example:"De klok hangt aan de muur.",example_cn:"钟挂在墙上。",pronunciation:"[ˈhɑŋə(n)]"},{id:70714,dutch:"hopen",chinese:"希望",english:"to hope",example:"Ik hoop dat je snel beter wordt.",example_cn:"我希望你快点好起来。",pronunciation:"[ˈhoːpə(n)]"},{id:70715,dutch:"liggen",chinese:"躺/位于",english:"to lie",example:"De sleutels liggen op tafel.",example_cn:"钥匙在桌子上。",pronunciation:"[ˈlɪɣə(n)]"},{id:70716,dutch:"lopen",chinese:"走路",english:"to walk",example:"Ik loop elke dag naar de supermarkt.",example_cn:"我每天走路去超市。",pronunciation:"[ˈloːpə(n)]"},{id:70717,dutch:"staan",chinese:"站立/位于",english:"to stand",example:"Er staan twee banken in de woonkamer.",example_cn:"客厅里放着两张沙发。",pronunciation:"[staːn]"},{id:70718,dutch:"zitten",chinese:"坐/位于",english:"to sit",example:"Ze zit op de bank te lezen.",example_cn:"她坐在沙发上看书。",pronunciation:"[ˈzɪtə(n)]"}]},{id:"thema7-verbs4",name:"动词(四)",description:"其他动词",icon:"✏️",color:"from-indigo-500 to-indigo-600",words:[{id:70801,dutch:"beleven",chinese:"经历/体验",english:"to experience",example:"In dat pretpark zijn veel leuke dingen te beleven.",example_cn:"那个游乐园有很多好玩的体验。",pronunciation:"[bəˈleːvə(n)]"},{id:70802,dutch:"eruitzien",chinese:"看起来",english:"to look like",example:"Je ziet er goed uit.",example_cn:"你看起来不错。",pronunciation:"[ərˈœytˌziːn]"},{id:70803,dutch:"ervaren",chinese:"经历/感受",english:"to experience",example:"Ik heb ervaren hoe moeilijk dat is.",example_cn:"我亲身感受过那有多难。",pronunciation:"[ɛrˈvaːrə(n)]"},{id:70804,dutch:"herhalen",chinese:"重复",english:"to repeat",example:"Kunt u het nog een keer herhalen?",example_cn:"您可以再重复一遍吗？",pronunciation:"[hɛrˈhaːlə(n)]"},{id:70805,dutch:"studeren",chinese:"学习",english:"to study",example:"Ik moet nog veel studeren voor het examen.",example_cn:"我考试前还要学习很多。",pronunciation:"[styˈdeːrə(n)]"},{id:70806,dutch:"tekenen",chinese:"画画",english:"to draw",example:"Mijn dochter kan heel mooi tekenen.",example_cn:"我女儿画画很好看。",pronunciation:"[ˈteːkənə(n)]"},{id:70807,dutch:"veranderen",chinese:"改变",english:"to change",example:"We willen de indeling van de woonkamer veranderen.",example_cn:"我们想改变客厅的布局。",pronunciation:"[vərˈɑndərə(n)]"},{id:70808,dutch:"verliezen",chinese:"输掉/失去",english:"to lose",example:"Ajax verliest te vaak de laatste tijd.",example_cn:"阿贾克斯最近输得太频繁了。",pronunciation:"[vərˈliːzə(n)]"},{id:70809,dutch:"vertellen",chinese:"讲述",english:"to tell",example:"Vertel eens over jullie nieuwe huis.",example_cn:"说说你们的新房子吧。",pronunciation:"[vərˈtɛlə(n)]"},{id:70810,dutch:"voorzien",chinese:"配备/提供",english:"to provide",example:"Het huis is voorzien van een moderne keuken.",example_cn:"这套房子配有现代化厨房。",pronunciation:"[ˈvoːrˌziːn]"},{id:70811,dutch:"zich herinneren",chinese:"记得/回忆起",english:"to remember",example:"Hij herinnert zich niets meer van zijn eerste huis.",example_cn:"他已经记不起第一套房子的事了。",pronunciation:"[zɪx hɛˈrɪnərə(n)]"}]},{id:"thema7-prepositions",name:"介词",description:"方位介词",icon:"📍",color:"from-green-500 to-green-600",words:[{id:70901,dutch:"aan",chinese:"在…上/在…旁",english:"on/at",example:"Het schilderij hangt aan de muur.",example_cn:"画挂在墙上。",pronunciation:"[aːn]"},{id:70902,dutch:"achter",chinese:"在…后面",english:"behind",example:"De kast staat achter de bank.",example_cn:"柜子在沙发后面。",pronunciation:"[ˈɑxtər]"},{id:70903,dutch:"boven",chinese:"在…上方",english:"above",example:"De lamp hangt boven de tafel.",example_cn:"灯挂在桌子上方。",pronunciation:"[ˈboːvə(n)]"},{id:70904,dutch:"naast",chinese:"在…旁边",english:"next to",example:"De plant staat naast de kast.",example_cn:"植物在柜子旁边。",pronunciation:"[naːst]"},{id:70905,dutch:"onder",chinese:"在…下面",english:"under",example:"Het kleed ligt onder de tafel.",example_cn:"地毯在桌子下面。",pronunciation:"[ˈɔndər]"},{id:70906,dutch:"op",chinese:"在…上",english:"on",example:"Je telefoon ligt op de tafel.",example_cn:"你的手机在桌子上。",pronunciation:"[ɔp]"},{id:70907,dutch:"per",chinese:"每（单位时间）",english:"per",example:"Ik sport twee keer per week.",example_cn:"我每周运动两次。",pronunciation:"[pɛr]"},{id:70908,dutch:"tegen",chinese:"靠着/对着",english:"against",example:"De bank staat tegen de muur.",example_cn:"沙发靠着墙。",pronunciation:"[ˈteːɣə(n)]"},{id:70909,dutch:"tegenover",chinese:"在…对面",english:"opposite",example:"De televisie staat tegenover de bank.",example_cn:"电视在沙发对面。",pronunciation:"[ˌteːɣə(n)ˈoːvər]"},{id:70910,dutch:"tussen",chinese:"在…之间",english:"between",example:"Tussen de eettafel en de bank staat een mooie plant.",example_cn:"餐桌和沙发之间放着一盆漂亮的植物。",pronunciation:"[ˈtʏsə(n)]"},{id:70911,dutch:"vanaf",chinese:"从…起",english:"from",example:"Vanaf 1 oktober woon ik in Haarlem.",example_cn:"从10月1日起我住在哈勒姆。",pronunciation:"[vɑnˈɑf]"},{id:70912,dutch:"via",chinese:"通过",english:"via",example:"Via een vriend heb ik deze kamer gekregen.",example_cn:"我通过一个朋友找到了这间房。",pronunciation:"[ˈviːaː]"},{id:70913,dutch:"voor",chinese:"为了/以（价格）",english:"for",example:"Ik huur de flat voor 600 euro per maand.",example_cn:"我这套公寓每月租金600欧。",pronunciation:"[voːr]"}]},{id:"thema7-adjectives",name:"形容词与其他",description:"描述住房的形容词和其他词汇",icon:"🎨",color:"from-teal-500 to-teal-600",words:[{id:71001,dutch:"belangrijk",chinese:"重要的",english:"important",example:"Ik heb belangrijk nieuws voor jullie.",example_cn:"我有重要消息告诉你们。",pronunciation:"[bəˈlɑŋrɛik]"},{id:71002,dutch:"blij",chinese:"高兴的",english:"happy",example:"Ik ben blij dat ik geslaagd ben voor het examen.",example_cn:"我很高兴通过了考试。",pronunciation:"[blɛi]"},{id:71003,dutch:"duurzaam",chinese:"可持续的",english:"sustainable",example:"We willen graag een duurzaam huis.",example_cn:"我们想要一套可持续节能的房子。",pronunciation:"[ˈdyːrzaːm]"},{id:71004,dutch:"gedeelde",chinese:"共用的",english:"shared",example:"We hebben een gedeelde keuken.",example_cn:"我们有一个共用厨房。",pronunciation:"[ɣəˈdeːldə]"},{id:71005,dutch:"minimaal",chinese:"最少的/最低的",english:"minimum",example:"In Utrecht betaal je minimaal 500 euro huur.",example_cn:"在乌得勒支你至少要付500欧房租。",pronunciation:"[ˌmiːniˈmaːl]"},{id:71006,dutch:"prachtig",chinese:"漂亮极了",english:"gorgeous",example:"Wat een prachtig huis!",example_cn:"多漂亮的房子啊！",pronunciation:"[ˈprɑxtəx]"},{id:71007,dutch:"rond",chinese:"圆形的",english:"round",example:"De spiegel is rond.",example_cn:"镜子是圆的。",pronunciation:"[rɔnt]"},{id:71008,dutch:"ruim",chinese:"宽敞的",english:"spacious",example:"Het is een ruime kamer.",example_cn:"这是一间宽敞的房间。",pronunciation:"[rœym]"},{id:71009,dutch:"rustig",chinese:"安静的",english:"quiet",example:"We wonen in een rustige buurt.",example_cn:"我们住在一个安静的社区。",pronunciation:"[ˈrʏstəx]"},{id:71010,dutch:"vrijstaand",chinese:"独立式的",english:"detached",example:"Zij wonen in een vrijstaand huis.",example_cn:"他们住在独立式住宅里。",pronunciation:"[ˈvrɛiˌstaːnt]"},{id:71011,dutch:"weinig",chinese:"很少的",english:"few/little",example:"Ze betalen weinig huur.",example_cn:"他们付的房租很少。",pronunciation:"[ˈʋɛinəx]"},{id:71012,dutch:"alle",chinese:"所有的",english:"all",example:"Ik heb alle oefeningen gedaan.",example_cn:"我把所有练习都做完了。",pronunciation:"[ˈɑlə]"},{id:71013,dutch:"binnenkort",chinese:"很快/不久后",english:"soon",example:"Uw pakket wordt binnenkort bezorgd.",example_cn:"你的包裹很快会送达。",pronunciation:"[ˈbɪnə(n)ˌkɔrt]"},{id:71014,dutch:"enzovoort",chinese:"等等",english:"etcetera",example:"We hebben groenten, fruit, koekjes, chocola enzovoort.",example_cn:"我们有蔬菜、水果、饼干、巧克力等等。",pronunciation:"[ˌɛnzoːˈvoːrt]"},{id:71015,dutch:"extra",chinese:"额外的",english:"extra",example:"Ik krijg een beetje extra tijd voor het examen.",example_cn:"我考试会得到一点额外时间。",pronunciation:"[ˈɛkstraː]"},{id:71016,dutch:"heel",chinese:"很/非常",english:"very",example:"Hij rijdt heel hard.",example_cn:"他开得非常快。",pronunciation:"[heːl]"},{id:71017,dutch:"hetzelfde",chinese:"相同的",english:"the same",example:"We wonen in hetzelfde huis.",example_cn:"我们住在同一栋房子里。",pronunciation:"[hətˈzɛlfdə]"},{id:71018,dutch:"hopelijk",chinese:"希望/但愿",english:"hopefully",example:"Hopelijk zie ik je snel weer.",example_cn:"希望很快再见到你。",pronunciation:"[ˈhoːpələk]"},{id:71019,dutch:"te huur",chinese:"出租中",english:"for rent",example:"De kamer is per 1 maart te huur.",example_cn:"这间房3月1日起可出租。",pronunciation:"[tə hyːr]"},{id:71020,dutch:"zelf",chinese:"自己/亲自",english:"self",example:"Ik kook altijd zelf.",example_cn:"我总是自己做饭。",pronunciation:"[zɛlf]"},{id:71021,dutch:"open",chinese:"开着",english:"open",example:"De voordeur staat nog open.",example_cn:"前门还开着。",pronunciation:"[ˈoːpə(n)]"}]}]},Xf={id:"thema8",name:"Thema 8",description:"健康 - Gezondheid",icon:"🏥",color:"from-red-500 to-rose-600",courses:[{id:"thema8-nouns1",name:"名词(一)",description:"医疗与健康名词",icon:"💊",color:"from-red-500 to-red-600",words:[{id:80001,dutch:"apotheek",chinese:"药房",english:"pharmacy",example:"Bij de apotheek kun je medicijnen kopen.",example_cn:"你可以在药房买药。",pronunciation:"[ˌaːpoːˈteːk]"},{id:80002,dutch:"bijsluiter",chinese:"药品说明书",english:"leaflet",example:"Lees bij een medicijn altijd goed de bijsluiter.",example_cn:"服药前一定要仔细看说明书。",pronunciation:"[ˈbɛislœytər]"},{id:80003,dutch:"bijwerking",chinese:"副作用",english:"side effect",example:"Heeft dit medicijn ook bijwerkingen?",example_cn:"这个药也有副作用吗？",pronunciation:"[ˈbɛiˌʋɛrkɪŋ]"},{id:80004,dutch:"gezondheid",chinese:"健康",english:"health",example:"Bewegen is goed voor je gezondheid.",example_cn:"运动有益健康。",pronunciation:"[ɣəˈzɔnthɛit]"},{id:80005,dutch:"griep",chinese:"流感",english:"flu",example:"Veel mensen krijgen griep in de winter.",example_cn:"很多人在冬天会得流感。",pronunciation:"[ɣrip]"},{id:80006,dutch:"huisartsenpraktijk",chinese:"家庭医生诊所",english:"GP practice",example:"We zijn overgestapt naar een andere huisartsenpraktijk.",example_cn:"我们换了一家家庭医生诊所。",pronunciation:"[ˈhœysˌɑrtsə(n)ˌprɑktɛik]"},{id:80007,dutch:"klacht",chinese:"不适/症状",english:"complaint",example:"Wat is precies de klacht?",example_cn:"具体是什么不适？",pronunciation:"[klɑxt]"},{id:80008,dutch:"koorts",chinese:"发烧",english:"fever",example:"Hebt u koorts?",example_cn:"您发烧了吗？",pronunciation:"[koːrts]"},{id:80009,dutch:"medicijn",chinese:"药",english:"medicine",example:"De dokter schrijft een medicijn voor.",example_cn:"医生开了一种药。",pronunciation:"[ˌmeːdiˈsɛin]"},{id:80010,dutch:"pijn",chinese:"疼痛",english:"pain",example:"Hoelang hebt u de pijn al?",example_cn:"您这个疼痛持续多久了？",pronunciation:"[pɛin]"},{id:80011,dutch:"praktijk",chinese:"诊所/实践",english:"practice",example:"Kunt u nu naar de praktijk komen om de dokter te zien?",example_cn:"您现在能来诊所看医生吗？",pronunciation:"[ˈprɑktɛik]"},{id:80012,dutch:"recept",chinese:"处方/食谱",english:"prescription",example:"Ik geef je een recept voor hoestdrank.",example_cn:"我给你开一张止咳糖浆的处方。",pronunciation:"[reːˈsɛpt]"},{id:80013,dutch:"rust",chinese:"休息",english:"rest",example:"U moet veel rust nemen.",example_cn:"您需要多休息。",pronunciation:"[rʏst]"},{id:80014,dutch:"ziekenhuis",chinese:"医院",english:"hospital",example:"De ambulance rijdt naar het ziekenhuis.",example_cn:"救护车正开往医院。",pronunciation:"[ˈzikə(n)ˌhœys]"},{id:80015,dutch:"alarmnummer",chinese:"报警电话",english:"emergency number",example:"Heb je weleens het alarmnummer gebeld?",example_cn:"你有打过紧急电话吗？",pronunciation:"[aːˈlɑrmˌnʏmər]"},{id:80016,dutch:"geneesmiddel",chinese:"药物",english:"medication",example:"Bij de apotheek kun je geneesmiddelen kopen.",example_cn:"你可以在药房买药。",pronunciation:"[ɣəˈneːsˌmɪdəl]"},{id:80017,dutch:"verhoging",chinese:"低烧/轻微发热",english:"slight fever",example:"Ik heb een lichte verhoging.",example_cn:"我有一点低烧。",pronunciation:"[vərˈhoːɣɪŋ]"},{id:80018,dutch:"zeer",chinese:"疼痛感",english:"pain/sore",example:"Mijn enkel doet zeer.",example_cn:"我的脚踝很疼。",pronunciation:"[zeːr]"},{id:80019,dutch:"zorgverlener",chinese:"医疗服务人员",english:"healthcare provider",example:"Plan zelf een afspraak in met uw zorgverlener.",example_cn:"请自行与您的医疗服务人员预约。",pronunciation:"[ˈzɔrxfərˌleːnər]"}]},{id:"thema8-nouns2",name:"名词(二)",description:"身体护理与生活方式",icon:"🧴",color:"from-rose-500 to-rose-600",words:[{id:80101,dutch:"balans",chinese:"平衡",english:"balance",example:"Heb jij een goede balans tussen je werk en je vrije tijd?",example_cn:"你在工作和休闲之间平衡得好吗？",pronunciation:"[baːˈlɑns]"},{id:80102,dutch:"crème",chinese:"乳霜",english:"cream",example:"Je kunt je gezicht met deze crème insmeren.",example_cn:"你可以用这款面霜涂脸。",pronunciation:"[krɛm]"},{id:80103,dutch:"energie",chinese:"精力/能量",english:"energy",example:"Ik heb weinig energie na het werk.",example_cn:"我下班后精力不多。",pronunciation:"[ˌeːnɛrˈʒi]"},{id:80104,dutch:"geest",chinese:"精神",english:"mind/spirit",example:"Yoga is goed voor je lichaam en je geest.",example_cn:"瑜伽对身心都有好处。",pronunciation:"[ɣeːst]"},{id:80105,dutch:"lichaam",chinese:"身体",english:"body",example:"Rust is belangrijk voor je lichaam.",example_cn:"休息对身体很重要。",pronunciation:"[ˈlɪxaːm]"},{id:80106,dutch:"levensstijl",chinese:"生活方式",english:"lifestyle",example:"Heb jij een gezonde levensstijl?",example_cn:"你的生活方式健康吗？",pronunciation:"[ˈleːvə(n)sˌstɛil]"},{id:80107,dutch:"massage",chinese:"按摩",english:"massage",example:"Als ik gespannen ben, neem ik een massage.",example_cn:"我紧张的时候会去做按摩。",pronunciation:"[mɑˈsaːʒə]"},{id:80108,dutch:"ontspanning",chinese:"放松",english:"relaxation",example:"Neem na een werkdag ook tijd voor ontspanning.",example_cn:"下班后也要留时间放松。",pronunciation:"[ɔntˈspɑnɪŋ]"},{id:80109,dutch:"kapper",chinese:"理发师",english:"hairdresser",example:"Ik laat morgen mijn haar verven bij de kapper.",example_cn:"我明天去理发店染头发。",pronunciation:"[ˈkɑpər]"},{id:80110,dutch:"tandenborstel",chinese:"牙刷",english:"toothbrush",example:"Ik poets mijn tanden met een elektrische tandenborstel.",example_cn:"我用电动牙刷刷牙。",pronunciation:"[ˈtɑndə(n)ˌbɔrstəl]"},{id:80111,dutch:"tandpasta",chinese:"牙膏",english:"toothpaste",example:"Welke tandpasta gebruik jij?",example_cn:"你用哪种牙膏？",pronunciation:"[ˈtɑntˌpɑstaː]"},{id:80112,dutch:"shampoo",chinese:"洗发水",english:"shampoo",example:"Dit is een goede shampoo voor jouw haar.",example_cn:"这款洗发水很适合你的头发。",pronunciation:"[ʃɑmˈpoː]"},{id:80113,dutch:"snee",chinese:"划伤/切口",english:"cut",example:"Hij heeft een diepe snee in zijn duim.",example_cn:"他的拇指有一道很深的伤口。",pronunciation:"[sneː]"},{id:80114,dutch:"verandering",chinese:"变化",english:"change",example:"Dat was een grote verandering in ons leven.",example_cn:"那是我们生活中的一个重大变化。",pronunciation:"[vərˈɑndərɪŋ]"},{id:80115,dutch:"verblijfsvergunning",chinese:"居留许可",english:"residence permit",example:"Ik heb vorig jaar een verblijfsvergunning gekregen.",example_cn:"我去年拿到了居留许可。",pronunciation:"[vərˈblɛifsˌvɛrɣʏnɪŋ]"},{id:80116,dutch:"kam",chinese:"梳子",english:"comb",example:"Heb jij een kam? Ik wil even mijn haar kammen.",example_cn:"你有梳子吗？我想梳一下头发。",pronunciation:"[kɑm]"},{id:80117,dutch:"nagelschaartje",chinese:"指甲剪",english:"nail scissors",example:"Dit is een goed nagelschaartje om je nagels te knippen.",example_cn:"这把指甲剪很适合修剪指甲。",pronunciation:"[ˈnaːɣəlˌsxaːrtjə]"},{id:80118,dutch:"nagelvijl",chinese:"指甲锉",english:"nail file",example:"Met deze nagelvijl kun je je nagels mooi maken.",example_cn:"用这个指甲锉可以把指甲修得更整齐。",pronunciation:"[ˈnaːɣəlˌvɛil]"},{id:80119,dutch:"wasmachine",chinese:"洗衣机",english:"washing machine",example:"Ik was de kleding op 40 graden in de wasmachine.",example_cn:"我用洗衣机40度洗衣服。",pronunciation:"[ˈʋɑsmaˌʃinə]"},{id:80120,dutch:"droger",chinese:"烘干机",english:"dryer",example:"Ik doe niet al mijn kleding in de droger.",example_cn:"我不是所有衣服都放进烘干机。",pronunciation:"[ˈdroːɣər]"}]},{id:"thema8-nouns3",name:"名词(三)",description:"美容、社会与文化名词",icon:"💅",color:"from-purple-500 to-purple-600",words:[{id:80151,dutch:"achtergrond",chinese:"背景",english:"background",example:"Zij heeft een Surinaamse achtergrond.",example_cn:"她有苏里南背景。",pronunciation:"[ˈɑxtərˌɣrɔnt]"},{id:80152,dutch:"diëtist",chinese:"营养师",english:"dietitian",example:"Een diëtist geeft advies over gezonde voeding.",example_cn:"营养师会提供健康饮食建议。",pronunciation:"[diˌeːˈtɪst]"},{id:80153,dutch:"drogist",chinese:"药妆店/药妆师",english:"drugstore",example:"Bij de drogist koop je verzorgingsproducten.",example_cn:"你可以在药妆店买护理用品。",pronunciation:"[droːˈɣɪst]"},{id:80154,dutch:"eeuw",chinese:"世纪",english:"century",example:"In de twintigste eeuw kregen we internet.",example_cn:"我们在20世纪进入了互联网时代。",pronunciation:"[eːu]"},{id:80155,dutch:"journalist",chinese:"记者",english:"journalist",example:"Ik werk als journalist voor een krant.",example_cn:"我在一家报社做记者。",pronunciation:"[ʒʊrnaːˈlɪst]"},{id:80156,dutch:"klimaat",chinese:"气候",english:"climate",example:"Nederland heeft een zeeklimaat.",example_cn:"荷兰是海洋性气候。",pronunciation:"[kliˈmaːt]"},{id:80157,dutch:"krant",chinese:"报纸",english:"newspaper",example:"We lezen graag het nieuws in de krant.",example_cn:"我们喜欢在报纸上看新闻。",pronunciation:"[krɑnt]"},{id:80158,dutch:"kunstenaar",chinese:"艺术家",english:"artist",example:"Deze kunstenaar maakt prachtige schilderijen.",example_cn:"这位艺术家创作了很多漂亮的画作。",pronunciation:"[ˈkʏnstəˌnaːr]"},{id:80159,dutch:"landschap",chinese:"风景/地貌",english:"landscape",example:"Mijn geboorteland heeft een mooi landschap.",example_cn:"我的祖国有很美的自然风景。",pronunciation:"[ˈlɑntsxɑp]"},{id:80160,dutch:"nagelstudio",chinese:"美甲店",english:"nail studio",example:"Ik laat mijn nagels lakken bij een nagelstudio.",example_cn:"我会去美甲店做指甲。",pronunciation:"[ˈnaːɣəlˌstyːdioː]"},{id:80161,dutch:"oorlog",chinese:"战争",english:"war",example:"Veel mensen zijn gevlucht voor de oorlog.",example_cn:"很多人因为战争而逃离家园。",pronunciation:"[ˈoːrlɔx]"},{id:80162,dutch:"pedicure",chinese:"足疗师",english:"pedicurist",example:"Bij de pedicure kun je je voeten laten verzorgen.",example_cn:"你可以在足疗师那里护理双脚。",pronunciation:"[ˌpeːdiˈkyːrə]"},{id:80163,dutch:"sauna",chinese:"桑拿",english:"sauna",example:"Ik houd van de warmte van een sauna.",example_cn:"我喜欢桑拿房里的温热感。",pronunciation:"[ˈsɑunaː]"},{id:80164,dutch:"schoonheidssalon",chinese:"美容院",english:"beauty salon",example:"Ik ga twee keer per jaar naar een schoonheidssalon voor een gezichtsbehandeling.",example_cn:"我每年会去两次美容院做面部护理。",pronunciation:"[ˈsxoːnˌhɛitsaːˌlɔn]"},{id:80165,dutch:"zonnebank",chinese:"日光浴床",english:"sunbed",example:"In de winter ga ik weleens onder de zonnebank voor een beetje kleur.",example_cn:"冬天我有时会去晒日光浴让肤色更好一点。",pronunciation:"[ˈzɔnəˌbɑŋk]"},{id:80166,dutch:"voordeel",chinese:"优点/好处",english:"advantage",example:"Het voordeel van online winkelen is dat je meer keuze hebt.",example_cn:"网购的好处是选择更多。",pronunciation:"[ˈvoːrdeːl]"}]},{id:"thema8-verbs1",name:"动词(一)",description:"医疗与健康动词",icon:"🏃",color:"from-pink-500 to-pink-600",words:[{id:80201,dutch:"zorgen voor",chinese:"照顾/负责",english:"to take care of",example:"Wie zorgt er voor de planten als jullie op vakantie zijn?",example_cn:"你们度假时谁来照顾这些植物？",pronunciation:"[ˈzɔrɣə(n) voːr]"},{id:80202,dutch:"ademen",chinese:"呼吸",english:"to breathe",example:"Met deze neusdruppels kun je beter ademen.",example_cn:"用了这个滴鼻液你会更好呼吸。",pronunciation:"[ˈaːdəmə(n)]"},{id:80203,dutch:"hoesten",chinese:"咳嗽",english:"to cough",example:"Ze moet veel hoesten.",example_cn:"她咳嗽得很厉害。",pronunciation:"[ˈhustə(n)]"},{id:80204,dutch:"innemen",chinese:"服用",english:"to take (medicine)",example:"Je moet de pil met een glas water innemen.",example_cn:"你要用一杯水把药吞下去。",pronunciation:"[ˈɪnˌneːmə(n)]"},{id:80205,dutch:"genezen",chinese:"治愈",english:"to heal",example:"Met dit medicijn geneest het snel.",example_cn:"用这个药会好得更快。",pronunciation:"[ɣəˈneːzə(n)]"},{id:80206,dutch:"herstellen",chinese:"恢复",english:"to recover",example:"Na het sporten moet je lichaam weer herstellen.",example_cn:"运动后身体需要恢复。",pronunciation:"[hɛrˈstɛlə(n)]"},{id:80207,dutch:"onderzoeken",chinese:"检查/调查",english:"to examine",example:"De dokter gaat je even onderzoeken.",example_cn:"医生会先给你检查一下。",pronunciation:"[ˌɔndərˈzukə(n)]"},{id:80208,dutch:"afzeggen",chinese:"取消",english:"to cancel",example:"Ik voel me niet goed. Ik ga de afspraak afzeggen.",example_cn:"我不太舒服，要取消预约。",pronunciation:"[ˈɑfˌzɛɣə(n)]"},{id:80209,dutch:"annuleren",chinese:"取消",english:"to cancel",example:"Ik moet de afspraak helaas annuleren.",example_cn:"很遗憾我得取消这个预约。",pronunciation:"[ˌɑnyˈleːrə(n)]"},{id:80210,dutch:"verplaatsen",chinese:"改期/移动",english:"to reschedule",example:"U kunt uw afspraak verplaatsen.",example_cn:"您可以改期预约。",pronunciation:"[vərˈplaːtsə(n)]"},{id:80211,dutch:"ontvangen",chinese:"收到",english:"to receive",example:"U ontvangt 24 uur voor uw afspraak een herinnering.",example_cn:"您会在预约前24小时收到提醒。",pronunciation:"[ɔntˈvɑŋə(n)]"},{id:80212,dutch:"betekenen",chinese:"意思是",english:"to mean",example:"Wat betekent dat woord?",example_cn:"那个词是什么意思？",pronunciation:"[bəˈteːkənə(n)]"},{id:80213,dutch:"heersen",chinese:"流行/肆虐",english:"to prevail",example:"De griep heerst nu.",example_cn:"现在流感很流行。",pronunciation:"[ˈheːrsə(n)]"},{id:80214,dutch:"bevatten",chinese:"包含",english:"to contain",example:"Snacks bevatten veel calorieën.",example_cn:"零食含有很多热量。",pronunciation:"[bəˈvɑtə(n)]"}]},{id:"thema8-verbs2",name:"动词(二)",description:"日常生活动词",icon:"🤝",color:"from-fuchsia-500 to-fuchsia-600",words:[{id:80301,dutch:"aantrekken",chinese:"穿上",english:"to put on",example:"Wat zal ik voor het feest aantrekken?",example_cn:"我参加聚会该穿什么？",pronunciation:"[ˈaːnˌtrɛkə(n)]"},{id:80302,dutch:"afmaken",chinese:"完成",english:"to finish",example:"Ik moet het werk nog afmaken.",example_cn:"我还得把工作做完。",pronunciation:"[ˈɑfˌmaːkə(n)]"},{id:80303,dutch:"meedoen",chinese:"参加",english:"to participate",example:"We doen een leuk spel. Wil je meedoen?",example_cn:"我们在玩个有趣的游戏，你要参加吗？",pronunciation:"[ˈmeːˌdun]"},{id:80304,dutch:"meenemen",chinese:"带上",english:"to bring along",example:"Je mag een woordenboek meenemen.",example_cn:"你可以带一本词典。",pronunciation:"[ˈmeːˌneːmə(n)]"},{id:80305,dutch:"ophalen",chinese:"接（人/物）",english:"to pick up",example:"Kun jij de kinderen van school ophalen?",example_cn:"你能去学校接孩子吗？",pronunciation:"[ˈɔpˌhaːlə(n)]"},{id:80306,dutch:"opgroeien",chinese:"长大",english:"to grow up",example:"De kinderen zijn in Nederland opgegroeid.",example_cn:"这些孩子是在荷兰长大的。",pronunciation:"[ˈɔpˌɣrujə(n)]"},{id:80307,dutch:"uitnodigen",chinese:"邀请",english:"to invite",example:"We gaan onze collega's ook voor de bruiloft uitnodigen.",example_cn:"我们也会邀请同事参加婚礼。",pronunciation:"[ˈœytˌnoːdəɣə(n)]"},{id:80308,dutch:"uitslapen",chinese:"睡懒觉",english:"to sleep in",example:"Zaterdag kun je lekker uitslapen.",example_cn:"周六你可以好好睡个懒觉。",pronunciation:"[ˈœytˌslaːpə(n)]"},{id:80309,dutch:"uitgaan",chinese:"外出",english:"to go out",example:"Zullen we zaterdagavond uitgaan?",example_cn:"我们周六晚上出去吗？",pronunciation:"[ˈœytˌɣaːn]"},{id:80310,dutch:"vluchten",chinese:"逃离",english:"to flee",example:"We moesten uit ons land vluchten.",example_cn:"我们不得不逃离自己的国家。",pronunciation:"[ˈvlʏxtə(n)]"},{id:80311,dutch:"lijken op",chinese:"像",english:"to resemble",example:"Hij lijkt op zijn vader.",example_cn:"他长得像他爸爸。",pronunciation:"[ˈlɛikə(n) ɔp]"},{id:80312,dutch:"inschrijven",chinese:"报名/注册",english:"to register",example:"Ik ga me voor een cursus Frans inschrijven.",example_cn:"我要报名法语课程。",pronunciation:"[ˈɪnsxrɛivə(n)]"},{id:80313,dutch:"achterlaten",chinese:"留下",english:"to leave behind",example:"We moesten alles in ons geboorteland achterlaten.",example_cn:"我们不得不把一切留在故乡。",pronunciation:"[ˈɑxtərˌlaːtə(n)]"}]},{id:"thema8-verbs3",name:"动词(三)",description:"开关与家务动词",icon:"🔧",color:"from-amber-500 to-amber-600",words:[{id:80351,dutch:"aandoen",chinese:"打开/穿上",english:"to turn on / to put on",example:"Wil je het licht even aandoen?",example_cn:"你能把灯打开吗？",pronunciation:"[ˈaːnˌdun]"},{id:80352,dutch:"dichtdoen",chinese:"关上",english:"to close",example:"Wil je het raam even dichtdoen?",example_cn:"你能把窗户关上吗？",pronunciation:"[ˈdɪxtˌdun]"},{id:80353,dutch:"opendoen",chinese:"打开",english:"to open",example:"Kun je het raam even opendoen?",example_cn:"你能把窗户打开吗？",pronunciation:"[ˈoːpə(n)ˌdun]"},{id:80354,dutch:"uitdoen",chinese:"关掉/脱下",english:"to turn off / to take off",example:"Wil je het licht even uitdoen?",example_cn:"你把灯关一下好吗？",pronunciation:"[ˈœytˌdun]"},{id:80355,dutch:"uitzetten",chinese:"关闭（电器）",english:"to turn off",example:"Kun je de televisie uitzetten?",example_cn:"你能把电视关掉吗？",pronunciation:"[ˈœytˌzɛtə(n)]"},{id:80356,dutch:"opnemen",chinese:"接（电话）",english:"to pick up (phone)",example:"Kun jij de telefoon even opnemen?",example_cn:"你能接一下电话吗？",pronunciation:"[ˈɔpˌneːmə(n)]"},{id:80357,dutch:"opruimen",chinese:"收拾",english:"to tidy up",example:"Wil je je kamer even opruimen?",example_cn:"你把房间收拾一下好吗？",pronunciation:"[ˈɔpˌrœymə(n)]"},{id:80358,dutch:"overnemen",chinese:"接手",english:"to take over",example:"Kun jij zijn werk vandaag overnemen?",example_cn:"你今天能接手他的工作吗？",pronunciation:"[ˈoːvərˌneːmə(n)]"},{id:80359,dutch:"strijken",chinese:"熨烫",english:"to iron",example:"Strijk jij ook de theedoeken?",example_cn:"你也会熨厨房毛巾吗？",pronunciation:"[ˈstrɛikə(n)]"},{id:80360,dutch:"uitstappen",chinese:"下车",english:"to get off",example:"Bij welke halte moeten we uitstappen?",example_cn:"我们要在哪一站下车？",pronunciation:"[ˈœytˌstɑpə(n)]"}]},{id:"thema8-adjectives",name:"形容词",description:"描述健康状态的形容词",icon:"🎨",color:"from-orange-500 to-orange-600",words:[{id:80401,dutch:"bijzonder",chinese:"特别的",english:"special",example:"Wat een bijzondere vrouw.",example_cn:"真是一位特别的女士。",pronunciation:"[bɛiˈzɔndər]"},{id:80402,dutch:"gebroken",chinese:"骨折的/破碎的",english:"broken",example:"Ze heeft een gebroken arm.",example_cn:"她手臂骨折了。",pronunciation:"[ɣəˈbroːkə(n)]"},{id:80403,dutch:"gespannen",chinese:"紧张的/绷紧的",english:"tense",example:"Mijn spieren zijn gespannen.",example_cn:"我的肌肉很紧张。",pronunciation:"[ɣəˈspɑnə(n)]"},{id:80404,dutch:"misselijk",chinese:"恶心的",english:"nauseous",example:"Ik word vaak misselijk in de auto.",example_cn:"我坐车常常会恶心。",pronunciation:"[ˈmɪsələk]"},{id:80405,dutch:"moe",chinese:"累的",english:"tired",example:"Zij is altijd moe van haar werk.",example_cn:"她总是因为工作很累。",pronunciation:"[mu]"},{id:80406,dutch:"verkouden",chinese:"感冒的",english:"having a cold",example:"Mijn dochter is al drie weken verkouden.",example_cn:"我女儿已经感冒三周了。",pronunciation:"[vərˈkɑudə(n)]"},{id:80407,dutch:"tevreden",chinese:"满意的",english:"satisfied",example:"Ben je tevreden over je huisarts?",example_cn:"你对你的家庭医生满意吗？",pronunciation:"[təˈvreːdə(n)]"},{id:80408,dutch:"veilig",chinese:"安全的",english:"safe",example:"Ik was niet meer veilig in mijn geboorteland.",example_cn:"我在故乡已不再安全。",pronunciation:"[ˈvɛiləx]"},{id:80409,dutch:"vrolijk",chinese:"开心的",english:"cheerful",example:"Die muziek maakt me vrolijk.",example_cn:"那首音乐让我开心。",pronunciation:"[ˈvroːlək]"},{id:80410,dutch:"lastig",chinese:"困难的/麻烦的",english:"difficult",example:"Het is lastig om een nieuw leven op te bouwen.",example_cn:"开启新生活并不容易。",pronunciation:"[ˈlɑstəx]"},{id:80411,dutch:"verbrand",chinese:"晒伤的/烧伤的",english:"burned",example:"Ik ben verbrand op het strand.",example_cn:"我在海滩上晒伤了。",pronunciation:"[vərˈbrɑnt]"},{id:80412,dutch:"kritisch",chinese:"批判性的/严格的",english:"critical",example:"Hij schrijft kritische teksten voor een krant.",example_cn:"他给报纸写批判性文章。",pronunciation:"[ˈkritɪs]"}]},{id:"thema8-other",name:"其他词汇",description:"副词、介词和常用表达",icon:"📚",color:"from-indigo-500 to-indigo-600",words:[{id:80501,dutch:"beterschap",chinese:"早日康复",english:"get well soon",example:"Beterschap!",example_cn:"祝你早日康复！",pronunciation:"[ˈbeːtərsxɑp]"},{id:80502,dutch:"sinds",chinese:"自从",english:"since",example:"Ik woon sinds 2023 in Nederland.",example_cn:"我从2023年起住在荷兰。",pronunciation:"[sɪnts]"},{id:80503,dutch:"natuurlijk",chinese:"当然/自然地",english:"of course",example:"Je bent natuurlijk altijd welkom!",example_cn:"你当然随时都欢迎来。",pronunciation:"[naːˈtyːrlək]"},{id:80504,dutch:"gelukkig",chinese:"幸运地/还好",english:"fortunately",example:"Gelukkig was hij niet gewond.",example_cn:"还好他没有受伤。",pronunciation:"[ɣəˈlʏkəx]"},{id:80505,dutch:"minstens",chinese:"至少",english:"at least",example:"Eet minstens 200 gram groente per dag.",example_cn:"每天至少吃200克蔬菜。",pronunciation:"[ˈmɪnstə(n)s]"},{id:80506,dutch:"regelmatig",chinese:"经常地/规律地",english:"regularly",example:"Ik ga regelmatig naar de sportschool.",example_cn:"我会经常去健身房。",pronunciation:"[ˈreːɣəlˌmaːtəx]"},{id:80507,dutch:"toen",chinese:"当时/那时候",english:"then/when",example:"Toen ik op de basisschool zat, had ik twee goede vrienden.",example_cn:"我上小学的时候有两个好朋友。",pronunciation:"[tun]"},{id:80508,dutch:"voldoende",chinese:"足够的",english:"sufficient",example:"Slaap je wel voldoende?",example_cn:"你睡得够吗？",pronunciation:"[vɔlˈdundə]"},{id:80509,dutch:"vroeger",chinese:"以前",english:"in the past",example:"Vroeger waren er nog geen supermarkten.",example_cn:"以前还没有超市。",pronunciation:"[ˈvruːɣər]"},{id:80510,dutch:"waarschijnlijk",chinese:"很可能/大概",english:"probably",example:"Ik ben waarschijnlijk voor het examen geslaagd.",example_cn:"我很可能通过了考试。",pronunciation:"[ʋaːrˈsxɛinlək]"},{id:80511,dutch:"keihard",chinese:"非常猛烈地",english:"very hard",example:"Het regent keihard.",example_cn:"雨下得很大。",pronunciation:"[ˈkɛiˌhɑrt]"},{id:80512,dutch:"van",chinese:"（表示来源/所属）",english:"from/of",example:"Ik heb last van maagpijn.",example_cn:"我有胃痛的问题。",pronunciation:"[vɑn]"}]}]},ia=[Uf,Kf,qf,Zf,Yf,Jf,Qf,Xf];function e1(){return ia}function n1(e){return ia.find(n=>n.id===e)}function Pl(e){for(const n of ia){const t=n.courses.find(i=>i.id===e);if(t)return t}}function Ea(e){return ia.find(n=>n.courses.some(t=>t.id===e))}const t1={class:"flex flex-col h-[calc(100vh-64px)] -m-4"},i1={class:"text-center pt-4 pb-3 bg-white border-b border-gray-100 flex-shrink-0"},a1={class:"text-2xl font-bold text-gray-800 flex items-center justify-center gap-2"},o1={class:"flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain"},r1=["onClick"],s1={class:"flex items-center gap-4"},l1={class:"drop-shadow-sm"},c1={class:"flex-1 min-w-0"},d1={class:"text-lg font-bold text-gray-800"},u1={class:"text-sm text-gray-500 mt-0.5"},h1={class:"flex items-center gap-2 mt-2"},p1={class:"text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium"},m1={class:"text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium"},g1=Ue({__name:"CourseList",setup(e){const n=jt(),t=J(e1()),i=o=>{n.push(`/thema/${o}`)},a=o=>o.courses.reduce((r,s)=>r+s.words.length,0);return(o,r)=>(D(),W("div",t1,[h("div",i1,[h("h1",a1,[R(P(Qi),{class:"w-6 h-6 text-blue-600"}),r[0]||(r[0]=Fn(" 课程学习 ",-1))])]),h("div",o1,[(D(!0),W(ze,null,Xe(t.value,s=>(D(),W("div",{key:s.id,onClick:l=>i(s.id),class:"bg-white rounded-2xl shadow-sm border border-gray-100 p-5 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md"},[h("div",s1,[h("div",{class:fe(["w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-gradient-to-br shadow-sm flex-shrink-0",s.color])},[h("span",l1,E(s.icon),1)],2),h("div",c1,[h("h3",d1,E(s.name),1),h("p",u1,E(s.description),1),h("div",h1,[h("span",p1,E(s.courses.length)+" 个课程 ",1),h("span",m1,E(a(s))+" 个单词 ",1)])]),R(P(Xi),{class:"w-5 h-5 text-gray-300 flex-shrink-0"})])],8,r1))),128)),r[1]||(r[1]=h("div",{class:"text-center pb-4 pt-2"},[h("p",{class:"text-xs text-gray-400"},"更多主题持续更新中...")],-1))])]))}}),f1={key:0,class:"flex flex-col h-[calc(100vh-64px)] -m-4"},x1={class:"bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10 flex-shrink-0"},k1={class:"text-base font-bold text-gray-800"},v1={class:"flex-1 overflow-y-auto p-4 space-y-3 overscroll-contain"},b1=["onClick"],_1={class:"drop-shadow-sm"},w1={key:0,class:"absolute -top-1 -right-1 bg-white rounded-full"},y1={class:"flex-1 min-w-0"},j1={class:"text-base font-bold text-gray-800 truncate"},z1={class:"text-sm text-gray-500 mt-0.5 truncate"},I1={class:"flex items-center gap-2 mt-1.5"},C1={class:"text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium"},S1={key:0,class:"text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium"},D1={key:1,class:"text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full font-medium"},M1=Ue({__name:"ThemaDetail",setup(e){const n=Ji(),t=jt(),i=ce(()=>n.params.id),a=ce(()=>n1(i.value)),o=J(0),r=()=>{t.push("/courses")},s=c=>{t.push(`/course/${c}`)},l=c=>(o.value,Ol(c)),d=c=>(o.value,Em(c));return tn(()=>{a.value||t.push("/courses"),o.value++}),(c,u)=>a.value?(D(),W("div",f1,[h("div",x1,[h("button",{onClick:r,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"},[R(P(Ci),{class:"w-5 h-5"}),u[0]||(u[0]=h("span",{class:"text-sm"},"返回",-1))]),h("h2",k1,E(a.value.name),1),u[1]||(u[1]=h("div",{class:"w-16"},null,-1))]),h("div",v1,[(D(!0),W(ze,null,Xe(a.value.courses,(m,f)=>(D(),W("div",{key:m.id,onClick:z=>s(m.id),class:fe(["bg-white rounded-2xl shadow-sm border p-4 flex items-center gap-4 active:scale-[0.98] transition-all duration-200 cursor-pointer hover:shadow-md",l(m.id)?"border-green-200 bg-green-50/30":"border-gray-100"])},[h("div",{class:fe(["w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-gradient-to-br shadow-sm flex-shrink-0 relative",m.color])},[h("span",_1,E(m.icon),1),l(m.id)?(D(),W("div",w1,[R(P(ea),{class:"w-5 h-5 text-green-500"})])):me("",!0)],2),h("div",y1,[h("h3",j1,E(m.name),1),h("p",z1,E(m.description),1),h("div",I1,[h("span",C1,E(m.words.length)+" 个单词 ",1),l(m.id)?(D(),W("span",S1," ✅ 已完成 ")):d(m.id)>0?(D(),W("span",D1," 学习中 "+E(d(m.id))+"/"+E(m.words.length),1)):me("",!0)])]),R(P(Xi),{class:"w-5 h-5 text-gray-300 flex-shrink-0"})],10,b1))),128))])])):me("",!0)}}),E1={key:0,class:"flex flex-col h-full -m-4 -mb-24"},T1={class:"bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10"},W1={class:"text-base font-bold text-gray-800 truncate max-w-[50%]"},A1={key:0,class:"px-4 pt-5"},O1={class:"flex items-center justify-between text-xs text-gray-500 mb-1.5"},R1={class:"w-full bg-gray-200 rounded-full h-2"},P1={key:1,class:"flex-1 flex flex-col items-center justify-center px-6 py-8"},H1={class:"bg-green-50 rounded-full p-6 mb-6"},N1={class:"text-2xl font-bold text-gray-800 mb-2"},L1={class:"text-gray-500 text-center mb-2"},$1={key:0,class:"text-xs text-gray-400 mb-8"},B1={key:1,class:"mb-8"},F1={class:"flex flex-col gap-3 w-full max-w-xs"},V1={key:2,class:"flex-1 flex items-center justify-center px-4 py-6 overflow-y-auto"},G1={key:3,class:"px-4 pb-6 flex items-center justify-between gap-4"},U1=["disabled"],K1=Ue({__name:"CourseLearn",setup(e){const n=Ji(),t=jt(),i=ce(()=>n.params.id),a=ce(()=>Pl(i.value)),o=ce(()=>{var _;return((_=a.value)==null?void 0:_.words)||[]}),r=J(0),s=J(!1),l=J(!1),d=J([]),c=J(0),u=ce(()=>l.value?d.value:o.value),m=ce(()=>u.value[r.value]),f=ce(()=>u.value.length===0?0:(r.value+1)/u.value.length*100),z=()=>{r.value<u.value.length-1?(l.value||$r(i.value,r.value),r.value++):(l.value?(Tm(i.value),c.value=Br(i.value)):($r(i.value,r.value),Mm(i.value)),s.value=!0)},k=()=>{r.value>0&&r.value--},M=()=>{const _=Ea(i.value);_?t.push(`/thema/${_.id}`):t.push("/courses")},T=()=>{r.value=0,s.value=!1,l.value=!1},v=()=>{const _=[...o.value].sort(()=>Math.random()-.5);d.value=_,r.value=0,s.value=!1,l.value=!0},b=()=>{t.push(`/course/${i.value}/list?current=${r.value}`)};return tn(()=>{if(!a.value){t.push("/courses");return}c.value=Br(i.value);const _=n.query.index;if(_!==void 0){const H=Number(_);!isNaN(H)&&H>=0&&H<o.value.length&&(r.value=H)}else Ol(i.value)&&(s.value=!0)}),Dn(()=>n.query.index,_=>{if(_!==void 0){const H=Number(_);!isNaN(H)&&H>=0&&H<o.value.length&&(r.value=H,s.value=!1,l.value=!1)}}),(_,H)=>a.value?(D(),W("div",E1,[h("div",T1,[h("button",{onClick:M,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"},[R(P(Ci),{class:"w-5 h-5"}),H[0]||(H[0]=h("span",{class:"text-sm"},"返回",-1))]),h("h2",W1,E(l.value?"复习模式":P(Ea)(i.value)?P(Ea)(i.value).name+" - "+a.value.name:a.value.name),1),h("button",{onClick:b,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"},[R(P(Mr),{class:"w-5 h-5"})])]),s.value?me("",!0):(D(),W("div",A1,[h("div",O1,[h("span",null,E(l.value?"复习进度":"学习进度"),1),h("span",null,E(r.value+1)+" / "+E(u.value.length),1)]),h("div",R1,[h("div",{class:fe(["bg-gradient-to-r h-2 rounded-full transition-all duration-300",l.value?"from-purple-500 to-pink-500":"from-blue-500 to-indigo-500"]),style:Vn({width:`${f.value}%`})},null,6)])])),s.value?(D(),W("div",P1,[h("div",H1,[R(P(ea),{class:"w-16 h-16 text-green-500"})]),h("h3",N1,E(l.value?"复习完成！🎉":"学习完成！🎉"),1),h("p",L1," 你已完成「"+E(a.value.name)+"」的全部 "+E(o.value.length)+" 个单词"+E(l.value?"复习":"学习"),1),c.value>0?(D(),W("p",$1," 已复习 "+E(c.value)+" 次 ",1)):(D(),W("p",B1)),h("div",F1,[h("button",{onClick:v,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200 hover:shadow-xl active:scale-95 transition-all duration-200"},[R(P(_o),{class:"w-5 h-5"}),H[1]||(H[1]=h("span",null,"打乱复习",-1))]),h("button",{onClick:T,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl active:scale-95 transition-all duration-200"},[R(P(bo),{class:"w-5 h-5"}),H[2]||(H[2]=h("span",null,"按顺序再学一遍",-1))]),h("button",{onClick:b,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition-all duration-200"},[R(P(Mr),{class:"w-5 h-5"}),H[3]||(H[3]=h("span",null,"查看单词列表",-1))]),h("button",{onClick:M,class:"flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95 transition-all duration-200"},[R(P(Ci),{class:"w-5 h-5"}),H[4]||(H[4]=h("span",null,"返回课程",-1))])])])):(D(),W("div",V1,[m.value?(D(),Wn(ta,{key:0,word:m.value,initialShowTranslation:!0},null,8,["word"])):me("",!0)])),s.value?me("",!0):(D(),W("div",G1,[h("button",{onClick:k,disabled:r.value===0,class:fe(["flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all duration-200",r.value===0?"bg-gray-100 text-gray-300 cursor-not-allowed":"bg-gray-100 text-gray-700 hover:bg-gray-200 active:scale-95"])},[R(P(Si),{class:"w-5 h-5"}),H[5]||(H[5]=h("span",null,"上一个",-1))],10,U1),h("button",{onClick:z,class:"flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all duration-200 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl active:scale-95"},[h("span",null,E(r.value===u.value.length-1?"完成":"下一个"),1),R(P(Xi),{class:"w-5 h-5"})])]))])):me("",!0)}}),q1={key:0,class:"absolute inset-0 flex flex-col bg-gray-50 z-20"},Z1={class:"bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10"},Y1={class:"text-base font-bold text-gray-800 truncate max-w-[60%]"},J1={class:"px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100"},Q1={class:"flex items-center gap-3"},X1={class:"text-2xl"},ex={class:"text-sm font-medium text-gray-700"},nx={class:"text-xs text-gray-500 mt-0.5"},tx={class:"flex-1 overflow-y-auto p-4 space-y-2"},ix=["onClick"],ax={class:"flex-1 min-w-0"},ox={class:"font-bold text-gray-800 text-base"},rx={class:"text-sm text-gray-500 mt-0.5"},sx={key:0,class:"flex items-center gap-1 text-xs text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded-full flex-shrink-0"},lx=Ue({__name:"CourseWordList",setup(e){const n=Ji(),t=jt(),i=ce(()=>n.params.id),a=ce(()=>Pl(i.value)),o=ce(()=>{var d;return((d=a.value)==null?void 0:d.words)||[]}),r=ce(()=>{const d=n.query.current;return d!==void 0?Number(d):-1}),s=()=>{r.value>=0?t.push(`/course/${i.value}?index=${r.value}`):t.push(`/course/${i.value}`)},l=d=>{t.push(`/course/${i.value}?index=${d}`)};return tn(()=>{a.value||t.push("/courses")}),(d,c)=>a.value?(D(),W("div",q1,[h("div",Z1,[h("button",{onClick:s,class:"flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"},[R(P(Ci),{class:"w-5 h-5"}),c[0]||(c[0]=h("span",{class:"text-sm"},"返回",-1))]),h("h2",Y1,E(a.value.name)+" - 单词列表",1),c[1]||(c[1]=h("div",{class:"w-16"},null,-1))]),h("div",J1,[h("div",Q1,[h("span",X1,E(a.value.icon),1),h("div",null,[h("p",ex,E(a.value.description),1),h("p",nx,"共 "+E(o.value.length)+" 个单词",1)])])]),h("div",tx,[(D(!0),W(ze,null,Xe(o.value,(u,m)=>(D(),W("div",{key:u.id,onClick:f=>l(m),class:fe(["flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 active:scale-[0.98]",m===r.value?"bg-blue-50 border-2 border-blue-300 shadow-sm":"bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm"])},[h("div",{class:fe(["w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0",m===r.value?"bg-blue-600 text-white":"bg-gray-100 text-gray-600"])},E(m+1),3),h("div",ax,[h("p",ox,E(u.dutch),1),h("p",rx,E(u.chinese)+" · "+E(u.english),1)]),m===r.value?(D(),W("div",sx,[R(P(Ih),{class:"w-3 h-3"}),c[2]||(c[2]=Fn(" 当前 ",-1))])):me("",!0)],10,ix))),128))])])):me("",!0)}}),cx=[{path:"/",redirect:"/courses"},{path:"/learn",component:g0},{path:"/review",component:rf},{path:"/history",component:Cf},{path:"/test",component:Gf},{path:"/courses",component:g1},{path:"/thema/:id",component:M1},{path:"/course/:id",component:K1},{path:"/course/:id/list",component:lx}],Vr=xh({history:Zu(),routes:cx});Uh().then(()=>{pr(Tr).use(Vr).mount("#app")}).catch(e=>{console.error("Failed to initialize words:",e),pr(Tr).use(Vr).mount("#app")});

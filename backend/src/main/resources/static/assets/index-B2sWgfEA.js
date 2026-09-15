var bv=Object.defineProperty;var Tv=(t,e,n)=>e in t?bv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ir=(t,e,n)=>Tv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Av(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dm={exports:{}},Il={},Im={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Cv=Symbol.for("react.portal"),Rv=Symbol.for("react.fragment"),Nv=Symbol.for("react.strict_mode"),Pv=Symbol.for("react.profiler"),Lv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),Iv=Symbol.for("react.forward_ref"),Uv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Fv=Symbol.for("react.lazy"),vf=Symbol.iterator;function Ov(t){return t===null||typeof t!="object"?null:(t=vf&&t[vf]||t["@@iterator"],typeof t=="function"?t:null)}var Um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},km=Object.assign,Fm={};function Ps(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Um}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=Ps.prototype;function Zd(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||Um}var Jd=Zd.prototype=new Om;Jd.constructor=Zd;km(Jd,Ps.prototype);Jd.isPureReactComponent=!0;var _f=Array.isArray,Bm=Object.prototype.hasOwnProperty,Qd={current:null},zm={key:!0,ref:!0,__self:!0,__source:!0};function Hm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bm.call(e,i)&&!zm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ua,type:t,key:s,ref:a,props:r,_owner:Qd.current}}function Bv(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function eh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function zv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yf=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zv(""+t.key):e.toString(36)}function ko(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ua:case Cv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+cc(a,0):i,_f(r)?(n="",t!=null&&(n=t.replace(yf,"$&/")+"/"),ko(r,e,n,"",function(u){return u})):r!=null&&(eh(r)&&(r=Bv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_f(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+cc(s,o);a+=ko(s,e,n,l,r)}else if(l=Ov(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+cc(s,o++),a+=ko(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function qa(t,e,n){if(t==null)return t;var i=[],r=0;return ko(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Hv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Fo={transition:null},jv={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:Qd};function jm(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:qa,forEach:function(t,e,n){qa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qa(t,function(){e++}),e},toArray:function(t){return qa(t,function(e){return e})||[]},only:function(t){if(!eh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Ps;$e.Fragment=Rv;$e.Profiler=Pv;$e.PureComponent=Zd;$e.StrictMode=Nv;$e.Suspense=Uv;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv;$e.act=jm;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=km({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Bm.call(e,l)&&!zm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:Dv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Lv,_context:t},t.Consumer=t};$e.createElement=Hm;$e.createFactory=function(t){var e=Hm.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Iv,render:t}};$e.isValidElement=eh;$e.lazy=function(t){return{$$typeof:Fv,_payload:{_status:-1,_result:t},_init:Hv}};$e.memo=function(t,e){return{$$typeof:kv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Fo.transition;Fo.transition={};try{t()}finally{Fo.transition=e}};$e.unstable_act=jm;$e.useCallback=function(t,e){return $t.current.useCallback(t,e)};$e.useContext=function(t){return $t.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};$e.useEffect=function(t,e){return $t.current.useEffect(t,e)};$e.useId=function(){return $t.current.useId()};$e.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return $t.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};$e.useRef=function(t){return $t.current.useRef(t)};$e.useState=function(t){return $t.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return $t.current.useTransition()};$e.version="18.3.1";Im.exports=$e;var ue=Im.exports;const Vv=Av(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=ue,Wv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),Yv=Object.prototype.hasOwnProperty,$v=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Yv.call(e,i)&&!qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Wv,type:t,key:s,ref:a,props:r,_owner:$v.current}}Il.Fragment=Xv;Il.jsx=Vm;Il.jsxs=Vm;Dm.exports=Il;var c=Dm.exports,xu={},Gm={exports:{}},mn={},Wm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,te){var N=I.length;I.push(te);e:for(;0<N;){var A=N-1>>>1,re=I[A];if(0<r(re,te))I[A]=te,I[N]=re,N=A;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var te=I[0],N=I.pop();if(N!==te){I[0]=N;e:for(var A=0,re=I.length,Q=re>>>1;A<Q;){var F=2*(A+1)-1,K=I[F],B=F+1,W=I[B];if(0>r(K,N))B<re&&0>r(W,K)?(I[A]=W,I[B]=N,A=B):(I[A]=K,I[F]=N,A=F);else if(B<re&&0>r(W,N))I[A]=W,I[B]=N,A=B;else break e}}return te}function r(I,te){var N=I.sortIndex-te.sortIndex;return N!==0?N:I.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,f=null,p=3,m=!1,v=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var te=n(u);te!==null;){if(te.callback===null)i(u);else if(te.startTime<=I)i(u),te.sortIndex=te.expirationTime,e(l,te);else break;te=n(u)}}function M(I){if(y=!1,_(I),!v)if(n(l)!==null)v=!0,V(P);else{var te=n(u);te!==null&&ne(M,te.startTime-I)}}function P(I,te){v=!1,y&&(y=!1,d(L),L=-1),m=!0;var N=p;try{for(_(te),f=n(l);f!==null&&(!(f.expirationTime>te)||I&&!E());){var A=f.callback;if(typeof A=="function"){f.callback=null,p=f.priorityLevel;var re=A(f.expirationTime<=te);te=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&i(l),_(te)}else i(l);f=n(l)}if(f!==null)var Q=!0;else{var F=n(u);F!==null&&ne(M,F.startTime-te),Q=!1}return Q}finally{f=null,p=N,m=!1}}var C=!1,T=null,L=-1,H=5,S=-1;function E(){return!(t.unstable_now()-S<H)}function k(){if(T!==null){var I=t.unstable_now();S=I;var te=!0;try{te=T(!0,I)}finally{te?G():(C=!1,T=null)}}else C=!1}var G;if(typeof g=="function")G=function(){g(k)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,J=q.port2;q.port1.onmessage=k,G=function(){J.postMessage(null)}}else G=function(){x(k,0)};function V(I){T=I,C||(C=!0,G())}function ne(I,te){L=x(function(){I(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,V(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(p){case 1:case 2:case 3:var te=3;break;default:te=p}var N=p;p=te;try{return I()}finally{p=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,te){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=p;p=I;try{return te()}finally{p=N}},t.unstable_scheduleCallback=function(I,te,N){var A=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?A+N:A):N=A,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=N+re,I={id:h++,callback:te,priorityLevel:I,startTime:N,expirationTime:re,sortIndex:-1},N>A?(I.sortIndex=N,e(u,I),n(l)===null&&I===n(u)&&(y?(d(L),L=-1):y=!0,ne(M,N-A))):(I.sortIndex=re,e(l,I),v||m||(v=!0,V(P))),I},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(I){var te=p;return function(){var N=p;p=te;try{return I.apply(this,arguments)}finally{p=N}}}})(Xm);Wm.exports=Xm;var Kv=Wm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=ue,pn=Kv;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ym=new Set,ma={};function Pr(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(ma[t]=e,t=0;t<e.length;t++)Ym.add(e[t])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,Jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},Mf={};function Qv(t){return gu.call(Mf,t)?!0:gu.call(Sf,t)?!1:Jv.test(t)?Mf[t]=!0:(Sf[t]=!0,!1)}function e_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t_(t,e,n,i){if(e===null||typeof e>"u"||e_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var th=/[\-:]([a-z])/g;function nh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(th,nh);Ft[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(th,nh);Ft[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(th,nh);Ft[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ih(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t_(e,n,r,i)&&(n=null),i||r===null?Qv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var _i=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),Kr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),rh=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),qm=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),yu=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,uc;function ea(t){if(uc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uc=e&&e[1]||""}return`
`+uc+t}var dc=!1;function hc(t,e){if(!t||dc)return"";dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function n_(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function Su(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Kr:return"Portal";case vu:return"Profiler";case rh:return"StrictMode";case _u:return"Suspense";case yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qm:return(t.displayName||"Context")+".Consumer";case $m:return(t._context.displayName||"Context")+".Provider";case sh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:Su(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return Su(t(e))}catch{}}return null}function i_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(e);case 8:return e===rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r_(t){var e=Zm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=r_(t))}function Jm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Zm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ef(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qm(t,e){e=e.checked,e!=null&&ih(t,"checked",e,!1)}function wu(t,e){Qm(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(ta(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function e0(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Af(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ja,n0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ja=Ja||document.createElement("div"),Ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s_=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){s_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function i0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function r0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=i0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var a_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(a_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Cu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nu=null,us=null,ds=null;function Cf(t){if(t=Oa(t)){if(typeof Nu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Bl(e),Nu(t.stateNode,t.type,e))}}function s0(t){us?ds?ds.push(t):ds=[t]:us=t}function a0(){if(us){var t=us,e=ds;if(ds=us=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function o0(t,e){return t(e)}function l0(){}var fc=!1;function c0(t,e,n){if(fc)return t(e,n);fc=!0;try{return o0(t,e,n)}finally{fc=!1,(us!==null||ds!==null)&&(l0(),a0())}}function ga(t,e){var n=t.stateNode;if(n===null)return null;var i=Bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Pu=!1;if(pi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Pu=!1}function o_(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var aa=!1,nl=null,il=!1,Lu=null,l_={onError:function(t){aa=!0,nl=t}};function c_(t,e,n,i,r,s,a,o,l){aa=!1,nl=null,o_.apply(l_,arguments)}function u_(t,e,n,i,r,s,a,o,l){if(c_.apply(this,arguments),aa){if(aa){var u=nl;aa=!1,nl=null}else throw Error(ce(198));il||(il=!0,Lu=u)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function u0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rf(t){if(Lr(t)!==t)throw Error(ce(188))}function d_(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Rf(r),t;if(s===i)return Rf(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function d0(t){return t=d_(t),t!==null?h0(t):null}function h0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=h0(t);if(e!==null)return e;t=t.sibling}return null}var f0=pn.unstable_scheduleCallback,Nf=pn.unstable_cancelCallback,h_=pn.unstable_shouldYield,f_=pn.unstable_requestPaint,Mt=pn.unstable_now,p_=pn.unstable_getCurrentPriorityLevel,lh=pn.unstable_ImmediatePriority,p0=pn.unstable_UserBlockingPriority,rl=pn.unstable_NormalPriority,m_=pn.unstable_LowPriority,m0=pn.unstable_IdlePriority,Ul=null,qn=null;function x_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:__,g_=Math.log,v_=Math.LN2;function __(t){return t>>>=0,t===0?32:31-(g_(t)/v_|0)|0}var Qa=64,eo=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=na(o):(s&=a,s!==0&&(i=na(s)))}else a=n&~r,a!==0?i=na(a):s!==0&&(i=na(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=y_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Du(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function x0(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function M_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ch(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function g0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var v0,uh,_0,y0,S0,Iu=!1,to=[],Fi=null,Oi=null,Bi=null,va=new Map,_a=new Map,Pi=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Oa(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E_(t,e,n,i,r){switch(e){case"focusin":return Fi=Bs(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Bs(Oi,t,e,n,i,r),!0;case"mouseover":return Bi=Bs(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,Bs(va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,Bs(_a.get(s)||null,t,e,n,i,r)),!0}return!1}function M0(t){var e=gr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=u0(n),e!==null){t.blockedOn=e,S0(t.priority,function(){_0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ru=i,n.target.dispatchEvent(i),Ru=null}else return e=Oa(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Lf(t,e,n){Oo(t)&&n.delete(e)}function b_(){Iu=!1,Fi!==null&&Oo(Fi)&&(Fi=null),Oi!==null&&Oo(Oi)&&(Oi=null),Bi!==null&&Oo(Bi)&&(Bi=null),va.forEach(Lf),_a.forEach(Lf)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Iu||(Iu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,b_)))}function ya(t){function e(r){return zs(r,t)}if(0<to.length){zs(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&zs(Fi,t),Oi!==null&&zs(Oi,t),Bi!==null&&zs(Bi,t),va.forEach(e),_a.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)M0(n),n.blockedOn===null&&Pi.shift()}var hs=_i.ReactCurrentBatchConfig,al=!0;function T_(t,e,n,i){var r=rt,s=hs.transition;hs.transition=null;try{rt=1,dh(t,e,n,i)}finally{rt=r,hs.transition=s}}function A_(t,e,n,i){var r=rt,s=hs.transition;hs.transition=null;try{rt=4,dh(t,e,n,i)}finally{rt=r,hs.transition=s}}function dh(t,e,n,i){if(al){var r=Uu(t,e,n,i);if(r===null)Ec(t,e,i,ol,n),Pf(t,i);else if(E_(r,t,e,n,i))i.stopPropagation();else if(Pf(t,i),e&4&&-1<w_.indexOf(t)){for(;r!==null;){var s=Oa(r);if(s!==null&&v0(s),s=Uu(t,e,n,i),s===null&&Ec(t,e,i,ol,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var ol=null;function Uu(t,e,n,i){if(ol=null,t=oh(i),t=gr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=u0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ol=t,null}function w0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p_()){case lh:return 1;case p0:return 4;case rl:case m_:return 16;case m0:return 536870912;default:return 16}default:return 16}}var Ii=null,hh=null,Bo=null;function E0(){if(Bo)return Bo;var t,e=hh,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Bo=r.slice(t,1<i?1-i:void 0)}function zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function Df(){return!1}function xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:Df,this.isPropagationStopped=Df,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fh=xn(Ls),Fa=vt({},Ls,{view:0,detail:0}),C_=xn(Fa),mc,xc,Hs,kl=vt({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(mc=t.screenX-Hs.screenX,xc=t.screenY-Hs.screenY):xc=mc=0,Hs=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),If=xn(kl),R_=vt({},kl,{dataTransfer:0}),N_=xn(R_),P_=vt({},Fa,{relatedTarget:0}),gc=xn(P_),L_=vt({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),D_=xn(L_),I_=vt({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U_=xn(I_),k_=vt({},Ls,{data:0}),Uf=xn(k_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function ph(){return z_}var H_=vt({},Fa,{key:function(t){if(t.key){var e=F_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ph,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j_=xn(H_),V_=vt({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=xn(V_),G_=vt({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ph}),W_=xn(G_),X_=vt({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=xn(X_),$_=vt({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=xn($_),K_=[9,13,27,32],mh=pi&&"CompositionEvent"in window,oa=null;pi&&"documentMode"in document&&(oa=document.documentMode);var Z_=pi&&"TextEvent"in window&&!oa,b0=pi&&(!mh||oa&&8<oa&&11>=oa),Ff=" ",Of=!1;function T0(t,e){switch(t){case"keyup":return K_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function J_(t,e){switch(t){case"compositionend":return A0(e);case"keypress":return e.which!==32?null:(Of=!0,Ff);case"textInput":return t=e.data,t===Ff&&Of?null:t;default:return null}}function Q_(t,e){if(Jr)return t==="compositionend"||!mh&&T0(t,e)?(t=E0(),Bo=hh=Ii=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b0&&e.locale!=="ko"?null:e.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ey[t.type]:e==="textarea"}function C0(t,e,n,i){s0(i),e=ll(e,"onChange"),0<e.length&&(n=new fh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var la=null,Sa=null;function ty(t){B0(t,0)}function Fl(t){var e=ts(t);if(Jm(e))return t}function ny(t,e){if(t==="change")return e}var R0=!1;if(pi){var vc;if(pi){var _c="oninput"in document;if(!_c){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),_c=typeof zf.oninput=="function"}vc=_c}else vc=!1;R0=vc&&(!document.documentMode||9<document.documentMode)}function Hf(){la&&(la.detachEvent("onpropertychange",N0),Sa=la=null)}function N0(t){if(t.propertyName==="value"&&Fl(Sa)){var e=[];C0(e,Sa,t,oh(t)),c0(ty,e)}}function iy(t,e,n){t==="focusin"?(Hf(),la=e,Sa=n,la.attachEvent("onpropertychange",N0)):t==="focusout"&&Hf()}function ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Sa)}function sy(t,e){if(t==="click")return Fl(e)}function ay(t,e){if(t==="input"||t==="change")return Fl(e)}function oy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:oy;function Ma(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,e){var n=jf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jf(n)}}function P0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?P0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L0(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ly(t){var e=L0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&P0(n.ownerDocument.documentElement,n)){if(i!==null&&xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vf(n,s);var a=Vf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cy=pi&&"documentMode"in document&&11>=document.documentMode,Qr=null,ku=null,ca=null,Fu=!1;function Gf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fu||Qr==null||Qr!==tl(i)||(i=Qr,"selectionStart"in i&&xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Ma(ca,i)||(ca=i,i=ll(ku,"onSelect"),0<i.length&&(e=new fh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qr)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},yc={},D0={};pi&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Ol(t){if(yc[t])return yc[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in D0)return yc[t]=e[n];return t}var I0=Ol("animationend"),U0=Ol("animationiteration"),k0=Ol("animationstart"),F0=Ol("transitionend"),O0=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){O0.set(t,e),Pr(e,[t])}for(var Sc=0;Sc<Wf.length;Sc++){var Mc=Wf[Sc],uy=Mc.toLowerCase(),dy=Mc[0].toUpperCase()+Mc.slice(1);Ji(uy,"on"+dy)}Ji(I0,"onAnimationEnd");Ji(U0,"onAnimationIteration");Ji(k0,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(F0,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Xf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,u_(i,e,void 0,t),t.currentTarget=null}function B0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Xf(r,o,u),s=l}}}if(il)throw t=Lu,il=!1,Lu=null,t}function ut(t,e){var n=e[ju];n===void 0&&(n=e[ju]=new Set);var i=t+"__bubble";n.has(i)||(z0(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),z0(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[ro]){t[ro]=!0,Ym.forEach(function(n){n!=="selectionchange"&&(hy.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,wc("selectionchange",!1,e))}}function z0(t,e,n,i){switch(w0(e)){case 1:var r=T_;break;case 4:r=A_;break;default:r=dh}n=r.bind(null,e,n,t),r=void 0,!Pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=gr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}c0(function(){var u=s,h=oh(n),f=[];e:{var p=O0.get(t);if(p!==void 0){var m=fh,v=t;switch(t){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":m=j_;break;case"focusin":v="focus",m=gc;break;case"focusout":v="blur",m=gc;break;case"beforeblur":case"afterblur":m=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=N_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=W_;break;case I0:case U0:case k0:m=D_;break;case F0:m=Y_;break;case"scroll":m=C_;break;case"wheel":m=q_;break;case"copy":case"cut":case"paste":m=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=kf}var y=(e&4)!==0,x=!y&&t==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var g=u,_;g!==null;){_=g;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,d!==null&&(M=ga(g,d),M!=null&&y.push(Ea(g,M,_)))),x)break;g=g.return}0<y.length&&(p=new m(p,v,null,n,h),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==Ru&&(v=n.relatedTarget||n.fromElement)&&(gr(v)||v[mi]))break e;if((m||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?gr(v):null,v!==null&&(x=Lr(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(y=If,M="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=kf,M="onPointerLeave",d="onPointerEnter",g="pointer"),x=m==null?p:ts(m),_=v==null?p:ts(v),p=new y(M,g+"leave",m,n,h),p.target=x,p.relatedTarget=_,M=null,gr(h)===u&&(y=new y(d,g+"enter",v,n,h),y.target=_,y.relatedTarget=x,M=y),x=M,m&&v)t:{for(y=m,d=v,g=0,_=y;_;_=Ir(_))g++;for(_=0,M=d;M;M=Ir(M))_++;for(;0<g-_;)y=Ir(y),g--;for(;0<_-g;)d=Ir(d),_--;for(;g--;){if(y===d||d!==null&&y===d.alternate)break t;y=Ir(y),d=Ir(d)}y=null}else y=null;m!==null&&Yf(f,p,m,y,!1),v!==null&&x!==null&&Yf(f,x,v,y,!0)}}e:{if(p=u?ts(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var P=ny;else if(Bf(p))if(R0)P=ay;else{P=ry;var C=iy}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=sy);if(P&&(P=P(t,u))){C0(f,P,n,h);break e}C&&C(t,p,u),t==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Eu(p,"number",p.value)}switch(C=u?ts(u):window,t){case"focusin":(Bf(C)||C.contentEditable==="true")&&(Qr=C,ku=u,ca=null);break;case"focusout":ca=ku=Qr=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Gf(f,n,h);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":Gf(f,n,h)}var T;if(mh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Jr?T0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(b0&&n.locale!=="ko"&&(Jr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Jr&&(T=E0()):(Ii=h,hh="value"in Ii?Ii.value:Ii.textContent,Jr=!0)),C=ll(u,L),0<C.length&&(L=new Uf(L,t,null,n,h),f.push({event:L,listeners:C}),T?L.data=T:(T=A0(n),T!==null&&(L.data=T)))),(T=Z_?J_(t,n):Q_(t,n))&&(u=ll(u,"onBeforeInput"),0<u.length&&(h=new Uf("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=T))}B0(f,e)})}function Ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ga(t,n),s!=null&&i.unshift(Ea(t,s,r)),s=ga(t,e),s!=null&&i.push(Ea(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ga(n,s),l!=null&&a.unshift(Ea(n,l,o))):r||(l=ga(n,s),l!=null&&a.push(Ea(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var fy=/\r\n?/g,py=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(fy,`
`).replace(py,"")}function so(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(ce(425))}function cl(){}var Ou=null,Bu=null;function zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hu=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch(gy)}:Hu;function gy(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ds,ba="__reactProps$"+Ds,mi="__reactContainer$"+Ds,ju="__reactEvents$"+Ds,vy="__reactListeners$"+Ds,_y="__reactHandles$"+Ds;function gr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kf(t);t!==null;){if(n=t[Yn])return n;t=Kf(t)}return e}t=n,n=t.parentNode}return null}function Oa(t){return t=t[Yn]||t[mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Bl(t){return t[ba]||null}var Vu=[],ns=-1;function Qi(t){return{current:t}}function ht(t){0>ns||(t.current=Vu[ns],Vu[ns]=null,ns--)}function lt(t,e){ns++,Vu[ns]=t.current,t.current=e}var $i={},Vt=Qi($i),tn=Qi(!1),Er=$i;function _s(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function ul(){ht(tn),ht(Vt)}function Zf(t,e,n){if(Vt.current!==$i)throw Error(ce(168));lt(Vt,e),lt(tn,n)}function H0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,i_(t)||"Unknown",r));return vt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Er=Vt.current,lt(Vt,t),lt(tn,tn.current),!0}function Jf(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=H0(t,e,Er),i.__reactInternalMemoizedMergedChildContext=t,ht(tn),ht(Vt),lt(Vt,t)):ht(tn),lt(tn,n)}var li=null,zl=!1,Tc=!1;function j0(t){li===null?li=[t]:li.push(t)}function yy(t){zl=!0,j0(t)}function er(){if(!Tc&&li!==null){Tc=!0;var t=0,e=rt;try{var n=li;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,zl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),f0(lh,er),r}finally{rt=e,Tc=!1}}return null}var is=[],rs=0,hl=null,fl=0,yn=[],Sn=0,br=null,ci=1,ui="";function dr(t,e){is[rs++]=fl,is[rs++]=hl,hl=t,fl=e}function V0(t,e,n){yn[Sn++]=ci,yn[Sn++]=ui,yn[Sn++]=br,br=t;var i=ci;t=ui;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-Bn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function gh(t){t.return!==null&&(dr(t,1),V0(t,1,0))}function vh(t){for(;t===hl;)hl=is[--rs],is[rs]=null,fl=is[--rs],is[rs]=null;for(;t===br;)br=yn[--Sn],yn[Sn]=null,ui=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null}var fn=null,hn=null,ft=!1,In=null;function G0(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,hn=zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,hn=null,!0):!1;default:return!1}}function Gu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wu(t){if(ft){var e=hn;if(e){var n=e;if(!Qf(t,e)){if(Gu(t))throw Error(ce(418));e=zi(n.nextSibling);var i=fn;e&&Qf(t,e)?G0(i,n):(t.flags=t.flags&-4097|2,ft=!1,fn=t)}}else{if(Gu(t))throw Error(ce(418));t.flags=t.flags&-4097|2,ft=!1,fn=t}}}function ep(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function ao(t){if(t!==fn)return!1;if(!ft)return ep(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zu(t.type,t.memoizedProps)),e&&(e=hn)){if(Gu(t))throw W0(),Error(ce(418));for(;e;)G0(t,e),e=zi(e.nextSibling)}if(ep(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=fn?zi(t.stateNode.nextSibling):null;return!0}function W0(){for(var t=hn;t;)t=zi(t.nextSibling)}function ys(){hn=fn=null,ft=!1}function _h(t){In===null?In=[t]:In.push(t)}var Sy=_i.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tp(t){var e=t._init;return e(t._payload)}function X0(t){function e(d,g){if(t){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Gi(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,_,M){return g===null||g.tag!==6?(g=Dc(_,d.mode,M),g.return=d,g):(g=r(g,_),g.return=d,g)}function l(d,g,_,M){var P=_.type;return P===Zr?h(d,g,_.props.children,M,_.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&tp(P)===g.type)?(M=r(g,_.props),M.ref=js(d,g,_),M.return=d,M):(M=Yo(_.type,_.key,_.props,null,d.mode,M),M.ref=js(d,g,_),M.return=d,M)}function u(d,g,_,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Ic(_,d.mode,M),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function h(d,g,_,M,P){return g===null||g.tag!==7?(g=wr(_,d.mode,M,P),g.return=d,g):(g=r(g,_),g.return=d,g)}function f(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Dc(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ka:return _=Yo(g.type,g.key,g.props,null,d.mode,_),_.ref=js(d,null,g),_.return=d,_;case Kr:return g=Ic(g,d.mode,_),g.return=d,g;case Ci:var M=g._init;return f(d,M(g._payload),_)}if(ta(g)||Fs(g))return g=wr(g,d.mode,_,null),g.return=d,g;oo(d,g)}return null}function p(d,g,_,M){var P=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:o(d,g,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:return _.key===P?l(d,g,_,M):null;case Kr:return _.key===P?u(d,g,_,M):null;case Ci:return P=_._init,p(d,g,P(_._payload),M)}if(ta(_)||Fs(_))return P!==null?null:h(d,g,_,M,null);oo(d,_)}return null}function m(d,g,_,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(_)||null,o(g,d,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ka:return d=d.get(M.key===null?_:M.key)||null,l(g,d,M,P);case Kr:return d=d.get(M.key===null?_:M.key)||null,u(g,d,M,P);case Ci:var C=M._init;return m(d,g,_,C(M._payload),P)}if(ta(M)||Fs(M))return d=d.get(_)||null,h(g,d,M,P,null);oo(g,M)}return null}function v(d,g,_,M){for(var P=null,C=null,T=g,L=g=0,H=null;T!==null&&L<_.length;L++){T.index>L?(H=T,T=null):H=T.sibling;var S=p(d,T,_[L],M);if(S===null){T===null&&(T=H);break}t&&T&&S.alternate===null&&e(d,T),g=s(S,g,L),C===null?P=S:C.sibling=S,C=S,T=H}if(L===_.length)return n(d,T),ft&&dr(d,L),P;if(T===null){for(;L<_.length;L++)T=f(d,_[L],M),T!==null&&(g=s(T,g,L),C===null?P=T:C.sibling=T,C=T);return ft&&dr(d,L),P}for(T=i(d,T);L<_.length;L++)H=m(T,d,L,_[L],M),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?L:H.key),g=s(H,g,L),C===null?P=H:C.sibling=H,C=H);return t&&T.forEach(function(E){return e(d,E)}),ft&&dr(d,L),P}function y(d,g,_,M){var P=Fs(_);if(typeof P!="function")throw Error(ce(150));if(_=P.call(_),_==null)throw Error(ce(151));for(var C=P=null,T=g,L=g=0,H=null,S=_.next();T!==null&&!S.done;L++,S=_.next()){T.index>L?(H=T,T=null):H=T.sibling;var E=p(d,T,S.value,M);if(E===null){T===null&&(T=H);break}t&&T&&E.alternate===null&&e(d,T),g=s(E,g,L),C===null?P=E:C.sibling=E,C=E,T=H}if(S.done)return n(d,T),ft&&dr(d,L),P;if(T===null){for(;!S.done;L++,S=_.next())S=f(d,S.value,M),S!==null&&(g=s(S,g,L),C===null?P=S:C.sibling=S,C=S);return ft&&dr(d,L),P}for(T=i(d,T);!S.done;L++,S=_.next())S=m(T,d,L,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?L:S.key),g=s(S,g,L),C===null?P=S:C.sibling=S,C=S);return t&&T.forEach(function(k){return e(d,k)}),ft&&dr(d,L),P}function x(d,g,_,M){if(typeof _=="object"&&_!==null&&_.type===Zr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ka:e:{for(var P=_.key,C=g;C!==null;){if(C.key===P){if(P=_.type,P===Zr){if(C.tag===7){n(d,C.sibling),g=r(C,_.props.children),g.return=d,d=g;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ci&&tp(P)===C.type){n(d,C.sibling),g=r(C,_.props),g.ref=js(d,C,_),g.return=d,d=g;break e}n(d,C);break}else e(d,C);C=C.sibling}_.type===Zr?(g=wr(_.props.children,d.mode,M,_.key),g.return=d,d=g):(M=Yo(_.type,_.key,_.props,null,d.mode,M),M.ref=js(d,g,_),M.return=d,d=M)}return a(d);case Kr:e:{for(C=_.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Ic(_,d.mode,M),g.return=d,d=g}return a(d);case Ci:return C=_._init,x(d,g,C(_._payload),M)}if(ta(_))return v(d,g,_,M);if(Fs(_))return y(d,g,_,M);oo(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,_),g.return=d,d=g):(n(d,g),g=Dc(_,d.mode,M),g.return=d,d=g),a(d)):n(d,g)}return x}var Ss=X0(!0),Y0=X0(!1),pl=Qi(null),ml=null,ss=null,yh=null;function Sh(){yh=ss=ml=null}function Mh(t){var e=pl.current;ht(pl),t._currentValue=e}function Xu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){ml=t,yh=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(ml===null)throw Error(ce(308));ss=t,ml.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var vr=null;function wh(t){vr===null?vr=[t]:vr.push(t)}function $0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function Ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}function np(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=u=l=null,o=s;do{var p=o.lane,m=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(p=e,m=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(m,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,p=typeof v=="function"?v.call(m,f,p):v,p==null)break e;f=vt({},f,p);break e;case 2:Ri=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else m={eventTime:m,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,l=f):h=h.next=m,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ar|=a,t.lanes=a,t.memoizedState=f}}function ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Ba={},Kn=Qi(Ba),Ta=Qi(Ba),Aa=Qi(Ba);function _r(t){if(t===Ba)throw Error(ce(174));return t}function bh(t,e){switch(lt(Aa,e),lt(Ta,t),lt(Kn,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Tu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Tu(e,t)}ht(Kn),lt(Kn,e)}function Ms(){ht(Kn),ht(Ta),ht(Aa)}function K0(t){_r(Aa.current);var e=_r(Kn.current),n=Tu(e,t.type);e!==n&&(lt(Ta,t),lt(Kn,n))}function Th(t){Ta.current===t&&(ht(Kn),ht(Ta))}var mt=Qi(0);function gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Ah(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var jo=_i.ReactCurrentDispatcher,Cc=_i.ReactCurrentBatchConfig,Tr=0,xt=null,Tt=null,Pt=null,vl=!1,ua=!1,Ca=0,My=0;function Ot(){throw Error(ce(321))}function Ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Rh(t,e,n,i,r,s){if(Tr=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jo.current=t===null||t.memoizedState===null?Ty:Ay,t=n(i,r),ua){s=0;do{if(ua=!1,Ca=0,25<=s)throw Error(ce(301));s+=1,Pt=Tt=null,e.updateQueue=null,jo.current=Cy,t=n(i,r)}while(ua)}if(jo.current=_l,e=Tt!==null&&Tt.next!==null,Tr=0,Pt=Tt=xt=null,vl=!1,e)throw Error(ce(300));return t}function Nh(){var t=Ca!==0;return Ca=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?xt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Tn(){if(Tt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Pt===null?xt.memoizedState:Pt.next;if(e!==null)Pt=e,Tt=t;else{if(t===null)throw Error(ce(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?xt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ra(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Tr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,xt.lanes|=h,Ar|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Ar|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Z0(){}function J0(t,e){var n=xt,i=Tn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Ph(tx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Na(9,ex.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ce(349));Tr&30||Q0(n,e,r)}return r}function Q0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ex(t,e,n,i){e.value=n,e.getSnapshot=i,nx(e)&&ix(t)}function tx(t,e,n){return n(function(){nx(e)&&ix(t)})}function nx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function ix(t){var e=xi(t,1);e!==null&&zn(e,t,1,-1)}function rp(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=by.bind(null,xt,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function rx(){return Tn().memoizedState}function Vo(t,e,n,i){var r=Gn();xt.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var a=Tt.memoizedState;if(s=a.destroy,i!==null&&Ch(i,a.deps)){r.memoizedState=Na(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function sp(t,e){return Vo(8390656,8,t,e)}function Ph(t,e){return Hl(2048,8,t,e)}function sx(t,e){return Hl(4,2,t,e)}function ax(t,e){return Hl(4,4,t,e)}function ox(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lx(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,ox.bind(null,e,t),n)}function Lh(){}function cx(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ux(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function dx(t,e,n){return Tr&21?(Hn(n,e)||(n=x0(),xt.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function wy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Cc.transition;Cc.transition={};try{t(!1),e()}finally{rt=n,Cc.transition=i}}function hx(){return Tn().memoizedState}function Ey(t,e,n){var i=Vi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},fx(t))px(e,n);else if(n=$0(t,e,n,i),n!==null){var r=Yt();zn(n,t,i,r),mx(n,e,i)}}function by(t,e,n){var i=Vi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(fx(t))px(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$0(t,e,r,i),n!==null&&(r=Yt(),zn(n,t,i,r),mx(n,e,i))}}function fx(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function px(t,e){ua=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ch(t,n)}}var _l={readContext:bn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},Ty={readContext:bn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vo(4194308,4,ox.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vo(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ey.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:rp,useDebugValue:Lh,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=rp(!1),e=t[0];return t=wy.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=Gn();if(ft){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Lt===null)throw Error(ce(349));Tr&30||Q0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sp(tx.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,ex.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Lt.identifierPrefix;if(ft){var n=ui,i=ci;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=My++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ay={readContext:bn,useCallback:cx,useContext:bn,useEffect:Ph,useImperativeHandle:lx,useInsertionEffect:sx,useLayoutEffect:ax,useMemo:ux,useReducer:Rc,useRef:rx,useState:function(){return Rc(Ra)},useDebugValue:Lh,useDeferredValue:function(t){var e=Tn();return dx(e,Tt.memoizedState,t)},useTransition:function(){var t=Rc(Ra)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:J0,useId:hx,unstable_isNewReconciler:!1},Cy={readContext:bn,useCallback:cx,useContext:bn,useEffect:Ph,useImperativeHandle:lx,useInsertionEffect:sx,useLayoutEffect:ax,useMemo:ux,useReducer:Nc,useRef:rx,useState:function(){return Nc(Ra)},useDebugValue:Lh,useDeferredValue:function(t){var e=Tn();return Tt===null?e.memoizedState=t:dx(e,Tt.memoizedState,t)},useTransition:function(){var t=Nc(Ra)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Z0,useSyncExternalStore:J0,useId:hx,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Vi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(zn(e,t,r,i),Ho(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Vi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(zn(e,t,r,i),Ho(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Vi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(zn(e,t,i,n),Ho(e,t,i))}};function ap(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function xx(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=nn(e)?Er:Vt.current,i=e.contextTypes,s=(i=i!=null)?_s(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function op(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=nn(e)?Er:Vt.current,r.context=_s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e){try{var n="",i=e;do n+=n_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ry=typeof WeakMap=="function"?WeakMap:Map;function gx(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,sd=i),qu(t,e)},n}function vx(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function lp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ry;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Vy.bind(null,t,e,n),e.then(t,t))}function cp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var Ny=_i.ReactCurrentOwner,en=!1;function Wt(t,e,n,i){e.child=t===null?Y0(e,null,n,i):Ss(e,t.child,n,i)}function dp(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=Rh(t,e,n,i,s,r),n=Nh(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&n&&gh(e),e.flags|=1,Wt(t,e,i,r),e.child)}function hp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!zh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_x(t,e,s,i,r)):(t=Yo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function _x(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Ku(t,e,n,i,r)}function yx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(os,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(os,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(os,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(os,dn),dn|=i;return Wt(t,e,r,n),e.child}function Sx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,i,r){var s=nn(n)?Er:Vt.current;return s=_s(e,s),fs(e,r),n=Rh(t,e,n,i,s,r),i=Nh(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&i&&gh(e),e.flags|=1,Wt(t,e,n,r),e.child)}function fp(t,e,n,i,r){if(nn(n)){var s=!0;dl(e)}else s=!1;if(fs(e,r),e.stateNode===null)Go(t,e),xx(e,n,i),$u(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=bn(u):(u=nn(n)?Er:Vt.current,u=_s(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&op(e,a,i,u),Ri=!1;var p=e.memoizedState;a.state=p,xl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||tn.current||Ri?(typeof h=="function"&&(Yu(e,n,h,i),l=e.memoizedState),(o=Ri||ap(e,n,o,i,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,q0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ln(e.type,o),a.props=u,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=nn(n)?Er:Vt.current,l=_s(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&op(e,a,i,l),Ri=!1,p=e.memoizedState,a.state=p,xl(e,i,a,r);var v=e.memoizedState;o!==f||p!==v||tn.current||Ri?(typeof m=="function"&&(Yu(e,n,m,i),v=e.memoizedState),(u=Ri||ap(e,n,u,i,p,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Zu(t,e,n,i,s,r)}function Zu(t,e,n,i,r,s){Sx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Jf(e,n,!1),gi(t,e,s);i=e.stateNode,Ny.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&Jf(e,n,!0),e.child}function Mx(t){var e=t.stateNode;e.pendingContext?Zf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zf(t,e.context,!1),bh(t,e.containerInfo)}function pp(t,e,n,i,r){return ys(),_h(r),e.flags|=256,Wt(t,e,n,i),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function wx(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(mt,r&1),t===null)return Wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Wl(a,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qu(n),e.memoizedState=Ju,t):Dh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Py(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=wr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ju,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dh(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&_h(i),Ss(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Py(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(ce(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wl({mode:"visible",children:i.children},r,0,null),s=wr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=Qu(a),e.memoizedState=Ju,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=Pc(s,i,void 0),lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,en||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),zn(i,t,r,-1))}return Bh(),i=Pc(Error(ce(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Gy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=zi(r.nextSibling),fn=e,ft=!0,In=null,t!==null&&(yn[Sn++]=ci,yn[Sn++]=ui,yn[Sn++]=br,ci=t.id,ui=t.overflow,br=e),e=Dh(e,i.children),e.flags|=4096,e)}function mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xu(t.return,e,n)}function Lc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ex(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mp(t,n,e);else if(t.tag===19)mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lc(e,!0,n,null,s);break;case"together":Lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ly(t,e,n){switch(e.tag){case 3:Mx(e),ys();break;case 5:K0(e);break;case 1:nn(e.type)&&dl(e);break;case 4:bh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?wx(t,e,n):(lt(mt,mt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ex(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,yx(t,e,n)}return gi(t,e,n)}var bx,ed,Tx,Ax;bx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};Tx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Kn.current);var s=null;switch(n){case"input":r=Mu(t,r),i=Mu(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}Au(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ax=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Dy(t,e,n){var i=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return nn(e.type)&&ul(),Bt(e),null;case 3:return i=e.stateNode,Ms(),ht(tn),ht(Vt),Ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(ld(In),In=null))),ed(t,e),Bt(e),null;case 5:Th(e);var r=_r(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)Tx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Bt(e),null}if(t=_r(Kn.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ia.length;r++)ut(ia[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Ef(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Tf(i,s),ut("invalid",i)}Au(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",""+o]):ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":Za(i),bf(i,s,!0);break;case"textarea":Za(i),Af(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Yn]=e,t[ba]=i,bx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Cu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ia.length;r++)ut(ia[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Ef(t,i),r=Mu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Tf(t,i),r=bu(t,i),ut("invalid",t);break;default:r=i}Au(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?r0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xa(t,l):typeof l=="number"&&xa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&ih(t,s,l,a))}switch(n){case"input":Za(t),bf(t,i,!1);break;case"textarea":Za(t),Af(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)Ax(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=_r(Aa.current),_r(Kn.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ht(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&e.mode&1&&!(e.flags&128))W0(),ys(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Yn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else In!==null&&(ld(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?At===0&&(At=3):Bh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Ms(),ed(t,e),t===null&&wa(e.stateNode.containerInfo),Bt(e),null;case 10:return Mh(e.type._context),Bt(e),null;case 17:return nn(e.type)&&ul(),Bt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Vs(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=gl(t),a!==null){for(e.flags|=128,Vs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Es&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=gl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return Bt(e),null}else 2*Mt()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,lt(mt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Iy(t,e){switch(vh(e),e.tag){case 1:return nn(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),ht(tn),ht(Vt),Ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Th(e),null;case 13:if(ht(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(mt),null;case 4:return Ms(),null;case 10:return Mh(e.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var co=!1,jt=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function td(t,e,n){try{n()}catch(i){yt(t,e,i)}}var xp=!1;function ky(t,e){if(Ou=al,t=L0(),xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,f=t,p=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++h===i&&(l=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:t,selectionRange:n},al=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,x=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ln(e.type,y),x);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=xp,xp=!1,v}function da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&td(e,n,s)}r=r.next}while(r!==i)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cx(t){var e=t.alternate;e!==null&&(t.alternate=null,Cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[ba],delete e[ju],delete e[vy],delete e[_y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rx(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var Ut=null,Dn=!1;function Si(t,e,n){for(n=n.child;n!==null;)Nx(t,e,n),n=n.sibling}function Nx(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:jt||as(n,e);case 6:var i=Ut,r=Dn;Ut=null,Si(t,e,n),Ut=i,Dn=r,Ut!==null&&(Dn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Dn?(t=Ut,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),ya(t)):bc(Ut,n.stateNode));break;case 4:i=Ut,r=Dn,Ut=n.stateNode.containerInfo,Dn=!0,Si(t,e,n),Ut=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&td(n,e,a),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!jt&&(as(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Si(t,e,n),jt=i):Si(t,e,n);break;default:Si(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uy),e.forEach(function(i){var r=Wy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Dn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Dn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Ut===null)throw Error(ce(160));Nx(s,a,r),Ut=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Px(e,t),e=e.sibling}function Px(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Vn(t),i&4){try{da(3,t,t.return),Vl(3,t)}catch(y){yt(t,t.return,y)}try{da(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Cn(e,t),Vn(t),i&512&&n!==null&&as(n,n.return);break;case 5:if(Cn(e,t),Vn(t),i&512&&n!==null&&as(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Qm(r,s),Cu(o,a);var u=Cu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?r0(r,f):h==="dangerouslySetInnerHTML"?n0(r,f):h==="children"?xa(r,f):ih(r,h,f,u)}switch(o){case"input":wu(r,s);break;case"textarea":e0(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?cs(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Cn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Cn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Cn(e,t),Vn(t);break;case 13:Cn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(kh=Mt())),i&4&&vp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||h,Cn(e,t),jt=u):Cn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Ee=t,h=t.child;h!==null;){for(f=Ee=h;Ee!==null;){switch(p=Ee,m=p.child,p.tag){case 0:case 11:case 14:case 15:da(4,p,p.return);break;case 1:as(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:as(p,p.return);break;case 22:if(p.memoizedState!==null){yp(f);continue}}m!==null?(m.return=p,Ee=m):yp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=i0("display",a))}catch(y){yt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),Vn(t),i&4&&vp(t);break;case 21:break;default:Cn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rx(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=gp(t);rd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gp(t);id(t,o,a);break;default:throw Error(ce(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fy(t,e,n){Ee=t,Lx(t)}function Lx(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=co;var u=jt;if(co=a,(jt=l)&&!u)for(Ee=r;Ee!==null;)a=Ee,l=a.child,a.tag===22&&a.memoizedState!==null?Sp(r):l!==null?(l.return=a,Ee=l):Sp(r);for(;s!==null;)Ee=s,Lx(s),s=s.sibling;Ee=r,co=o,jt=u}_p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):_p(t)}}function _p(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Vl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ip(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ip(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}jt||e.flags&512&&nd(e)}catch(p){yt(e,e.return,p)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function yp(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Sp(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{nd(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{nd(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Ee=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ee=o;break}Ee=e.return}}var Oy=Math.ceil,yl=_i.ReactCurrentDispatcher,Ih=_i.ReactCurrentOwner,En=_i.ReactCurrentBatchConfig,Je=0,Lt=null,Et=null,kt=0,dn=0,os=Qi(0),At=0,Pa=null,Ar=0,Gl=0,Uh=0,ha=null,Jt=null,kh=0,Es=1/0,oi=null,Sl=!1,sd=null,ji=null,uo=!1,Ui=null,Ml=0,fa=0,ad=null,Wo=-1,Xo=0;function Yt(){return Je&6?Mt():Wo!==-1?Wo:Wo=Mt()}function Vi(t){return t.mode&1?Je&2&&kt!==0?kt&-kt:Sy.transition!==null?(Xo===0&&(Xo=x0()),Xo):(t=rt,t!==0||(t=window.event,t=t===void 0?16:w0(t.type)),t):1}function zn(t,e,n,i){if(50<fa)throw fa=0,ad=null,Error(ce(185));ka(t,n,i),(!(Je&2)||t!==Lt)&&(t===Lt&&(!(Je&2)&&(Gl|=n),At===4&&Li(t,kt)),rn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Es=Mt()+500,zl&&er()))}function rn(t,e){var n=t.callbackNode;S_(t,e);var i=sl(t,t===Lt?kt:0);if(i===0)n!==null&&Nf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Nf(n),e===1)t.tag===0?yy(Mp.bind(null,t)):j0(Mp.bind(null,t)),xy(function(){!(Je&6)&&er()}),n=null;else{switch(g0(i)){case 1:n=lh;break;case 4:n=p0;break;case 16:n=rl;break;case 536870912:n=m0;break;default:n=rl}n=zx(n,Dx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Dx(t,e){if(Wo=-1,Xo=0,Je&6)throw Error(ce(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var i=sl(t,t===Lt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Je;Je|=2;var s=Ux();(Lt!==t||kt!==e)&&(oi=null,Es=Mt()+500,Mr(t,e));do try{Hy();break}catch(o){Ix(t,o)}while(!0);Sh(),yl.current=s,Je=r,Et!==null?e=0:(Lt=null,kt=0,e=At)}if(e!==0){if(e===2&&(r=Du(t),r!==0&&(i=r,e=od(t,r))),e===1)throw n=Pa,Mr(t,0),Li(t,i),rn(t,Mt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!By(r)&&(e=wl(t,i),e===2&&(s=Du(t),s!==0&&(i=s,e=od(t,s))),e===1))throw n=Pa,Mr(t,0),Li(t,i),rn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:hr(t,Jt,oi);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=kh+500-Mt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hu(hr.bind(null,t,Jt,oi),e);break}hr(t,Jt,oi);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Oy(i/1960))-i,10<i){t.timeoutHandle=Hu(hr.bind(null,t,Jt,oi),i);break}hr(t,Jt,oi);break;case 5:hr(t,Jt,oi);break;default:throw Error(ce(329))}}}return rn(t,Mt()),t.callbackNode===n?Dx.bind(null,t):null}function od(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&ld(e)),t}function ld(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function By(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~Uh,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if(Je&6)throw Error(ce(327));ps();var e=sl(t,0);if(!(e&1))return rn(t,Mt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Du(t);i!==0&&(e=i,n=od(t,i))}if(n===1)throw n=Pa,Mr(t,0),Li(t,e),rn(t,Mt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hr(t,Jt,oi),rn(t,Mt()),null}function Fh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Es=Mt()+500,zl&&er())}}function Cr(t){Ui!==null&&Ui.tag===0&&!(Je&6)&&ps();var e=Je;Je|=1;var n=En.transition,i=rt;try{if(En.transition=null,rt=1,t)return t()}finally{rt=i,En.transition=n,Je=e,!(Je&6)&&er()}}function Oh(){dn=os.current,ht(os)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,my(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:Ms(),ht(tn),ht(Vt),Ah();break;case 5:Th(i);break;case 4:Ms();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Mh(i.type._context);break;case 22:case 23:Oh()}n=n.return}if(Lt=t,Et=t=Gi(t.current,null),kt=dn=e,At=0,Pa=null,Uh=Gl=Ar=0,Jt=ha=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}vr=null}return t}function Ix(t,e){do{var n=Et;try{if(Sh(),jo.current=_l,vl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vl=!1}if(Tr=0,Pt=Tt=xt=null,ua=!1,Ca=0,Ih.current=null,n===null||n.return===null){At=1,Pa=e,Et=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=cp(a);if(m!==null){m.flags&=-257,up(m,a,o,s,e),m.mode&1&&lp(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){lp(s,u,e),Bh();break e}l=Error(ce(426))}}else if(ft&&o.mode&1){var x=cp(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),up(x,a,o,s,e),_h(ws(l,o));break e}}s=l=ws(l,o),At!==4&&(At=2),ha===null?ha=[s]:ha.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=gx(s,l,e);np(s,d);break e;case 1:o=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ji===null||!ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=vx(s,o,e);np(s,M);break e}}s=s.return}while(s!==null)}Fx(n)}catch(P){e=P,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function Ux(){var t=yl.current;return yl.current=_l,t===null?_l:t}function Bh(){(At===0||At===3||At===2)&&(At=4),Lt===null||!(Ar&268435455)&&!(Gl&268435455)||Li(Lt,kt)}function wl(t,e){var n=Je;Je|=2;var i=Ux();(Lt!==t||kt!==e)&&(oi=null,Mr(t,e));do try{zy();break}catch(r){Ix(t,r)}while(!0);if(Sh(),Je=n,yl.current=i,Et!==null)throw Error(ce(261));return Lt=null,kt=0,At}function zy(){for(;Et!==null;)kx(Et)}function Hy(){for(;Et!==null&&!h_();)kx(Et)}function kx(t){var e=Bx(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Fx(t):Et=e,Ih.current=null}function Fx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Iy(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Et=null;return}}else if(n=Dy(n,e,dn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);At===0&&(At=5)}function hr(t,e,n){var i=rt,r=En.transition;try{En.transition=null,rt=1,jy(t,e,n,i)}finally{En.transition=r,rt=i}return null}function jy(t,e,n,i){do ps();while(Ui!==null);if(Je&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M_(t,s),t===Lt&&(Et=Lt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,zx(rl,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var a=rt;rt=1;var o=Je;Je|=4,Ih.current=null,ky(t,n),Px(n,t),ly(Bu),al=!!Ou,Bu=Ou=null,t.current=n,Fy(n),f_(),Je=o,rt=a,En.transition=s}else t.current=n;if(uo&&(uo=!1,Ui=t,Ml=r),s=t.pendingLanes,s===0&&(ji=null),x_(n.stateNode),rn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=sd,sd=null,t;return Ml&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===ad?fa++:(fa=0,ad=t):fa=0,er(),null}function ps(){if(Ui!==null){var t=g0(Ml),e=En.transition,n=rt;try{if(En.transition=null,rt=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,Ml=0,Je&6)throw Error(ce(331));var r=Je;for(Je|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Ee=u;Ee!==null;){var h=Ee;switch(h.tag){case 0:case 11:case 15:da(8,h,s)}var f=h.child;if(f!==null)f.return=h,Ee=f;else for(;Ee!==null;){h=Ee;var p=h.sibling,m=h.return;if(Cx(h),h===u){Ee=null;break}if(p!==null){p.return=m,Ee=p;break}Ee=m}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){a=Ee;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Ee=_;else e:for(a=g;Ee!==null;){if(o=Ee,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Vl(9,o)}}catch(P){yt(o,o.return,P)}if(o===a){Ee=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,Ee=M;break e}Ee=o.return}}if(Je=r,er(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{rt=n,En.transition=e}}return!1}function wp(t,e,n){e=ws(n,e),e=gx(t,e,1),t=Hi(t,e,1),e=Yt(),t!==null&&(ka(t,1,e),rn(t,e))}function yt(t,e,n){if(t.tag===3)wp(t,t,n);else for(;e!==null;){if(e.tag===3){wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=ws(n,t),t=vx(e,t,1),e=Hi(e,t,1),t=Yt(),e!==null&&(ka(e,1,t),rn(e,t));break}}e=e.return}}function Vy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(kt&n)===n&&(At===4||At===3&&(kt&130023424)===kt&&500>Mt()-kh?Mr(t,0):Uh|=n),rn(t,e)}function Ox(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=Yt();t=xi(t,e),t!==null&&(ka(t,e,n),rn(t,n))}function Gy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ox(t,n)}function Wy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Ox(t,n)}var Bx;Bx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,Ly(t,e,n);en=!!(t.flags&131072)}else en=!1,ft&&e.flags&1048576&&V0(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Go(t,e),t=e.pendingProps;var r=_s(e,Vt.current);fs(e,n),r=Rh(null,e,i,t,r,n);var s=Nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,$u(e,i,t,n),e=Zu(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&gh(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Go(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yy(i),t=Ln(i,t),r){case 0:e=Ku(null,e,i,t,n);break e;case 1:e=fp(null,e,i,t,n);break e;case 11:e=dp(null,e,i,t,n);break e;case 14:e=hp(null,e,i,Ln(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ku(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),fp(t,e,i,r,n);case 3:e:{if(Mx(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,q0(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ws(Error(ce(423)),e),e=pp(t,e,i,n,r);break e}else if(i!==r){r=ws(Error(ce(424)),e),e=pp(t,e,i,n,r);break e}else for(hn=zi(e.stateNode.containerInfo.firstChild),fn=e,ft=!0,In=null,n=Y0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=gi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return K0(e),t===null&&Wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,zu(i,r)?a=null:s!==null&&zu(i,s)&&(e.flags|=32),Sx(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&Wu(e),null;case 13:return wx(t,e,n);case 4:return bh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),dp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(pl,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!tn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Xu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=bn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),hp(t,e,i,r,n);case 15:return _x(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Go(t,e),e.tag=1,nn(i)?(t=!0,dl(e)):t=!1,fs(e,n),xx(e,i,r),$u(e,i,r,n),Zu(null,e,i,!0,t,n);case 19:return Ex(t,e,n);case 22:return yx(t,e,n)}throw Error(ce(156,e.tag))};function zx(t,e){return f0(t,e)}function Xy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Xy(t,e,n,i)}function zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yy(t){if(typeof t=="function")return zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sh)return 11;if(t===ah)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")zh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Zr:return wr(n.children,r,s,e);case rh:a=8,r|=8;break;case vu:return t=Mn(12,n,e,r|2),t.elementType=vu,t.lanes=s,t;case _u:return t=Mn(13,n,e,r),t.elementType=_u,t.lanes=s,t;case yu:return t=Mn(19,n,e,r),t.elementType=yu,t.lanes=s,t;case Km:return Wl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $m:a=10;break e;case qm:a=9;break e;case sh:a=11;break e;case ah:a=14;break e;case Ci:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Mn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Wl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Km,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function Ic(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $y(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(t,e,n,i,r,s,a,o,l){return t=new $y(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function qy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Hx(t){if(!t)return $i;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(nn(n))return H0(t,n,e)}return e}function jx(t,e,n,i,r,s,a,o,l){return t=Hh(n,i,!0,t,r,s,a,o,l),t.context=Hx(null),n=t.current,i=Yt(),r=Vi(n),s=fi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,ka(t,r,i),rn(t,i),t}function Xl(t,e,n,i){var r=e.current,s=Yt(),a=Vi(r);return n=Hx(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,a),t!==null&&(zn(t,r,a,s),Ho(t,r,a)),a}function El(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jh(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function Ky(){return null}var Vx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vh(t){this._internalRoot=t}Yl.prototype.render=Vh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Xl(t,e,null,null)};Yl.prototype.unmount=Vh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){Xl(null,t,null,null)}),e[mi]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=y0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&M0(t)}};function Gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function Zy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=El(a);s.call(u)}}var a=jx(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=a,t[mi]=a.current,wa(t.nodeType===8?t.parentNode:t),Cr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=El(l);o.call(u)}}var l=Hh(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[mi]=l.current,wa(t.nodeType===8?t.parentNode:t),Cr(function(){Xl(e,l,n,i)}),l}function ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=El(a);o.call(l)}}Xl(e,a,t,r)}else a=Zy(n,e,t,r,i);return El(a)}v0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(ch(e,n|1),rn(e,Mt()),!(Je&6)&&(Es=Mt()+500,er()))}break;case 13:Cr(function(){var i=xi(t,1);if(i!==null){var r=Yt();zn(i,t,1,r)}}),jh(t,1)}};uh=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=Yt();zn(e,t,134217728,n)}jh(t,134217728)}};_0=function(t){if(t.tag===13){var e=Vi(t),n=xi(t,e);if(n!==null){var i=Yt();zn(n,t,e,i)}jh(t,e)}};y0=function(){return rt};S0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Nu=function(t,e,n){switch(e){case"input":if(wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bl(i);if(!r)throw Error(ce(90));Jm(i),wu(i,r)}}}break;case"textarea":e0(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};o0=Fh;l0=Cr;var Jy={usingClientEntryPoint:!1,Events:[Oa,ts,Bl,s0,a0,Fh]},Gs={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qy={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=d0(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||Ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Ul=ho.inject(Qy),qn=ho}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gh(e))throw Error(ce(200));return qy(t,e,null,n)};mn.createRoot=function(t,e){if(!Gh(t))throw Error(ce(299));var n=!1,i="",r=Vx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(t,1,!1,null,null,n,!1,i,r),t[mi]=e.current,wa(t.nodeType===8?t.parentNode:t),new Vh(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=d0(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Cr(t)};mn.hydrate=function(t,e,n){if(!$l(e))throw Error(ce(200));return ql(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Gh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Vx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=jx(e,null,t,1,n??null,r,!1,s,a),t[mi]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Yl(e)};mn.render=function(t,e,n){if(!$l(e))throw Error(ce(200));return ql(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!$l(t))throw Error(ce(40));return t._reactRootContainer?(Cr(function(){ql(null,null,t,!1,function(){t._reactRootContainer=null,t[mi]=null})}),!0):!1};mn.unstable_batchedUpdates=Fh;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$l(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return ql(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function Gx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gx)}catch(t){console.error(t)}}Gx(),Gm.exports=mn;var e1=Gm.exports,Tp=e1;xu.createRoot=Tp.createRoot,xu.hydrateRoot=Tp.hydrateRoot;/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function n1(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:t1(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=t=>{const e=i1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Uc(t){return t!=null}function s1(t,e={}){var p,m;const n=e.attributeNames??{},i=v=>n[v]??v,r=t.size??t.width??rr.width,s=t.size??t.height??rr.height,a=((p=t.aliases)==null?void 0:p.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?cd(...l):cd("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??rr["stroke-width"])*Number(t.size??t.width??rr.width)/Number(e.size??e.width??rr.width):e.strokeWidth??rr["stroke-width"];return["svg",{...Object.entries(rr).reduce((v,[y,x])=>(v[i(y)]=x,v),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Uc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Uc(e.width)&&{[i("width")]:e.width},..."height"in e&&Uc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(v=>{const[y,x,d]=v,g=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return d?[y,g,d]:[y,g]})]}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function a1(t,e={}){return s1(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},l1=ue.createContext({}),c1=()=>ue.useContext(l1),u1=ue.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:u=[],icon:h={node:u,aliases:[],size:24},...f},p)=>{const{size:m=24,strokeWidth:v=2,absoluteStrokeWidth:y=!1,nonScalingStroke:x=!1,color:d="currentColor",className:g=""}=c1()??{},_=!!l||o1(f),[M,P,C=[]]=a1(h,{color:t??d,width:n??e??m,height:i??e??m,strokeWidth:r??v,absoluteStrokeWidth:s??y,nonScalingStroke:a??x,className:cd(g,o),hasA11yProp:_,attributes:f});return ue.createElement(M,{ref:p,...P},[...C.map(([T,L])=>ue.createElement(T,L)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function We(t,e=[],n=[]){const i=typeof t=="string"?n1(t,e,n):t,r=ue.forwardRef(({className:s,...a},o)=>ue.createElement(u1,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=r1(i.name)),r}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Wx.node;const za=We(Wx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Xx.node;const d1=We(Xx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Yx.node;const bl=We(Yx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};$x.node;const Ap=We($x);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};qx.node;const h1=We(qx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Kx.node;const Ha=We(Kx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Zx.node;const Jx=We(Zx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};Qx.node;const f1=We(Qx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};eg.node;const Cp=We(eg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]};tg.node;const p1=We(tg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};ng.node;const m1=We(ng);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};ig.node;const rg=We(ig);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"fuel",size:24,node:[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",key:"1wtuz0"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16",key:"e09ifn"}],["path",{d:"M2 21h13",key:"1x0fut"}],["path",{d:"M3 9h11",key:"1p7c0w"}]]};sg.node;const ag=We(sg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};og.node;const x1=We(og);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};lg.node;const Wh=We(lg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};cg.node;const g1=We(cg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};ug.node;const dg=We(ug);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};hg.node;const v1=We(hg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};fg.node;const pg=We(fg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};mg.node;const _1=We(mg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};xg.node;const y1=We(xg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};gg.node;const La=We(gg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};vg.node;const S1=We(vg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};_g.node;const M1=We(_g);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};yg.node;const w1=We(yg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};Sg.node;const Mg=We(Sg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"rotate-3d",size:24,node:[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",key:"1245p8"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071",key:"1i40ks"}]],aliases:["rotate-3-d"]};wg.node;const Xh=We(wg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Eg.node;const bg=We(Eg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Tg.node;const E1=We(Tg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Ag.node;const qi=We(Ag);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};Cg.node;const b1=We(Cg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Rg.node;const T1=We(Rg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Ng.node;const Kl=We(Ng);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Pg.node;const A1=We(Pg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Lg.node;const C1=We(Lg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Dg.node;const R1=We(Dg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Ig.node;const N1=We(Ig);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ug.node;const jn=We(Ug);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};kg.node;const Zl=We(kg),Fg=ue.createContext(void 0),P1=({children:t})=>{const[e,n]=ue.useState(()=>{const h=localStorage.getItem("tbh_user");return h?JSON.parse(h):{id:99,fullName:"Hemanth (TBH Rider)",email:"rider@tbhrentals.in",phoneNumber:"+91 98765 43210",role:"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"KA-01-2023-0048192",token:"TBH_SESSION_KEY_001"}});ue.useEffect(()=>{e?localStorage.setItem("tbh_user",JSON.stringify(e)):localStorage.removeItem("tbh_user")},[e]);const i=async(h,f)=>{try{const p=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h,password:f})});if(p.ok){const v=await p.json();return v.token&&localStorage.setItem("tbh_token",v.token),n(v),!0}const m=await p.json().catch(()=>({}));throw new Error(m.message||"Invalid email or password")}catch(p){throw p}},r=async(h,f,p,m)=>{const v=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:h,email:f,phoneNumber:p,password:m})});if(v.ok){const x=await v.json();return x.token&&localStorage.setItem("tbh_token",x.token),n(x),!0}const y=await v.json().catch(()=>({}));throw new Error(y.message||"Registration failed")},s=async h=>{const f=await fetch("/api/auth/send-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:h})});if(!f.ok){const m=await f.json().catch(()=>({}));throw new Error(m.message||"Failed to dispatch OTP")}return(await f.json()).message||"OTP dispatched to registered mobile"},a=async(h,f)=>{const p=await fetch("/api/auth/verify-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:h,otp:f})});if(p.ok){const v=await p.json();return v.token&&localStorage.setItem("tbh_token",v.token),n(v),!0}const m=await p.json().catch(()=>({}));throw new Error(m.message||"Invalid or expired OTP")},o=async(h,f)=>{if(!e)return!1;try{const p=await fetch("/api/auth/verify-license",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.id,licenseNumber:h,docUrl:f})});if(p.ok){const m=await p.json();return n(v=>v?{...v,drivingLicenseVerified:!0,drivingLicenseNumber:h}:m),!0}}catch{}return n(p=>p?{...p,drivingLicenseVerified:!0,drivingLicenseNumber:h}:null),!0},l=()=>{n({id:99,fullName:"Hemanth (TBH Rider)",email:"rider@tbhrentals.in",phoneNumber:"+91 98765 43210",role:"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"KA-01-2023-0048192",token:"TBH_SESSION_KEY_001"})},u=()=>{n(null)};return c.jsx(Fg.Provider,{value:{user:e,isAuthenticated:!!e,loginWithEmail:i,signupWithEmail:r,sendOtp:s,verifyOtp:a,verifyLicense:o,loginAsDemoRider:l,logout:u},children:t})},Jl=()=>{const t=ue.useContext(Fg);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Rp={EN:{tagline:"Ride Beyond Limits",heroTitle:"India's Most Elite Mobility Fleet",heroSubtitle:"Superbikes. Iconic Cruisers. Electric Velocity. 4x4 Off-Road Legends.",searchBarTitle:"Find Your Machine",pickupCity:"Pickup City",pickupHub:"Pickup Hub",dropHub:"Drop Hub",rentalMode:"Rental Duration",hourly:"Hourly",daily:"Daily",monthly:"Monthly",allVehicles:"All Fleet",bikes:"Superbikes & Cruisers",scooters:"City Scooters",electric:"Electric Velocity (EV)",petrolCars:"Petrol Cars",dieselCars:"Diesel & 4x4 SUVs",threeDStudio:"3D Studio",quickBook:"Quick Book",compare:"Compare",topSpeed:"Top Speed",acceleration:"0-100 km/h",deposit:"Security Deposit",perHour:"/ hr",perDay:"/ day",perMonth:"/ mo",verifiedRider:"Verified Rider",unverifiedRider:"Pending Verification",adminDashboard:"Admin",myBookings:"My Bookings"},HI:{tagline:"राइड बियॉन्ड लिमिट्स",heroTitle:"भारत का सबसे प्रीमियम बाइक और कार रेंटल",heroSubtitle:"सुपरबाइक्स। क्लासिक क्रूज़र्स। इलेक्ट्रिक मोबिलिटी। 4x4 थार और फॉर्च्यूनर।",searchBarTitle:"अपनी मनपसंद राइड चुनें",pickupCity:"पिकअप शहर",pickupHub:"पिकअप हब",dropHub:"ड्रॉप हब",rentalMode:"किराया अवधि",hourly:"घंटे के आधार पर",daily:"प्रति दिन",monthly:"मासिक",allVehicles:"सभी वाहन",bikes:"सुपरबाइक और क्रूज़र",scooters:"स्कूटी",electric:"इलेक्ट्रिक (EV)",petrolCars:"पेट्रोल कारें",dieselCars:"डीजल और 4x4 SUV",threeDStudio:"3D स्टूडियो",quickBook:"तुरंत बुक करें",compare:"तुलना करें",topSpeed:"अधिकतम गति",acceleration:"0-100 गति",deposit:"सुरक्षा जमा राशि",perHour:"/ घंटा",perDay:"/ दिन",perMonth:"/ महीना",verifiedRider:"सत्यापित राइडर",unverifiedRider:"वेरिफिकेशन बाकी",adminDashboard:"व्यवस्थापक",myBookings:"मेरी बुकिंग"}},Og=ue.createContext(void 0),L1=({children:t})=>{const[e,n]=ue.useState("EN"),i=r=>Rp[e][r]||Rp.EN[r]||r;return c.jsx(Og.Provider,{value:{lang:e,setLang:n,t:i},children:t})},Ql=()=>{const t=ue.useContext(Og);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},D1=({cities:t,selectedCity:e,onSelectCity:n,compareCount:i,onOpenCompare:r,onOpenBookings:s,onOpenAuth:a,onOpenAdmin:o})=>{const{user:l,isAuthenticated:u,logout:h}=Jl(),{lang:f,setLang:p,t:m}=Ql(),[v,y]=ue.useState(!1),[x,d]=ue.useState(!1);return c.jsx("header",{className:"sticky top-0 z-40 w-full bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[c.jsx("div",{className:"relative flex items-center",children:c.jsx("div",{className:"w-11 h-11 rounded-xl bg-gradient-to-br from-[#141416] via-[#1E1E24] to-[#0A0A0B] border border-[#00E5C7]/40 flex items-center justify-center shadow-teal-glow",children:c.jsxs("svg",{className:"w-7 h-7",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M6 10H22M14 10V32",stroke:"#00E5C7",strokeWidth:"3.5",strokeLinecap:"round"}),c.jsx("path",{d:"M22 6L32 10L22 14",stroke:"#D4AF37",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("circle",{cx:"28",cy:"24",r:"6",stroke:"#FFFFFF",strokeWidth:"2.5"}),c.jsx("path",{d:"M28 20V28M24 24H32",stroke:"#00E5C7",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-baseline space-x-1.5",children:[c.jsx("span",{className:"text-2xl font-extrabold tracking-wider font-display text-white",children:"TBH"}),c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#00E5C7]/10 text-[#00E5C7] border border-[#00E5C7]/30",children:"INDIA"})]}),c.jsx("p",{className:"text-[10px] tracking-widest uppercase text-slate-400 font-semibold",children:m("tagline")})]})]}),c.jsxs("div",{className:"hidden md:flex items-center space-x-3",children:[c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>d(!x),className:"flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/50 text-sm font-medium transition",children:[c.jsx(La,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:e}),c.jsx(Ap,{className:"w-3.5 h-3.5 text-slate-400"})]}),x&&c.jsxs("div",{className:"absolute top-12 left-0 w-64 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-2 z-50",children:[c.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5",children:"Select Indian City"}),c.jsx("div",{className:"max-h-60 overflow-y-auto space-y-1",children:t.map(g=>c.jsxs("button",{onClick:()=>{n(g.name),d(!1)},className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition ${e===g.name?"bg-[#00E5C7]/15 text-[#00E5C7]":"text-slate-300 hover:bg-white/5"}`,children:[c.jsx("span",{className:"font-semibold",children:g.name}),c.jsxs("span",{className:"text-[10px] text-slate-400",children:[g.hubs.length," Hubs"]})]},g.id))})]})]}),c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-400 bg-[#141416] px-3 py-2 rounded-xl border border-white/10",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),c.jsxs("span",{children:["All Rates in ",c.jsx("strong",{className:"text-white font-mono",children:"₹ INR"})]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsxs("button",{onClick:()=>p(f==="EN"?"HI":"EN"),className:"flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-300 transition",children:[c.jsx(g1,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:f})]}),c.jsxs("button",{onClick:r,className:"relative flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/40 text-xs font-medium text-slate-200 transition",children:[c.jsx(pg,{className:"w-4 h-4 text-[#D4AF37]"}),c.jsx("span",{className:"hidden sm:inline",children:m("compare")}),i>0&&c.jsx("span",{className:"w-4 h-4 rounded-full bg-[#00E5C7] text-black font-extrabold text-[10px] flex items-center justify-center",children:i})]}),c.jsxs("button",{onClick:s,className:"hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-medium text-slate-200 transition",children:[c.jsx(bl,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:m("myBookings")})]}),c.jsx("button",{onClick:o,className:"hidden md:flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 hover:text-white transition",children:c.jsx("span",{children:m("adminDashboard")})}),u&&l?c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>y(!v),className:"flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#141416] to-[#1F1F24] border border-[#00E5C7]/30 hover:border-[#00E5C7] transition",children:[c.jsx("div",{className:"w-7 h-7 rounded-full bg-[#00E5C7]/20 border border-[#00E5C7]/50 flex items-center justify-center text-xs font-bold text-[#00E5C7]",children:l.fullName.charAt(0)}),c.jsxs("div",{className:"text-left hidden lg:block",children:[c.jsx("p",{className:"text-xs font-semibold text-white leading-tight",children:l.fullName.split(" ")[0]}),c.jsxs("p",{className:"text-[10px] text-[#00E5C7] flex items-center space-x-0.5",children:[c.jsx(qi,{className:"w-2.5 h-2.5"}),c.jsx("span",{children:l.drivingLicenseVerified?"Verified DL":"Upload DL"})]})]}),c.jsx(Ap,{className:"w-3 h-3 text-slate-400"})]}),v&&c.jsxs("div",{className:"absolute right-0 top-12 w-64 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-3 z-50",children:[c.jsxs("div",{className:"border-b border-white/10 pb-2 mb-2",children:[c.jsx("p",{className:"text-xs font-bold text-white",children:l.fullName}),c.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:l.email||l.phoneNumber}),c.jsxs("div",{className:"mt-1.5 inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold",children:[c.jsx(Ha,{className:"w-3 h-3"}),c.jsx("span",{children:l.drivingLicenseVerified?`DL: ${l.drivingLicenseNumber||"Verified"}`:"DL Pending Verification"})]})]}),c.jsxs("button",{onClick:()=>{s(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2",children:[c.jsx(bl,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"My Rental Passes"})]}),c.jsxs("button",{onClick:()=>{a(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2",children:[c.jsx(qi,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Driving License & KYC"})]}),c.jsxs("button",{onClick:()=>{h(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition flex items-center space-x-2 mt-1",children:[c.jsx(y1,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Log Out"})]})]})]}):c.jsxs("button",{onClick:a,className:"flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-bold text-xs shadow-teal-glow hover:opacity-95 transition",children:[c.jsx(R1,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Login / Sign Up"})]})]})]})})},I1=({cities:t,selectedCity:e,onSelectCity:n,onSearch:i,onOpenFirst3D:r})=>{var y,x;const{t:s}=Ql(),[a,o]=ue.useState("HOURLY"),l=t.find(d=>d.name===e)||t[0],u=l?l.hubs:[],[h,f]=ue.useState(((y=u[0])==null?void 0:y.name)||"Kempegowda Intl Airport (BLR)"),[p,m]=ue.useState(((x=u[0])==null?void 0:x.name)||"Kempegowda Intl Airport (BLR)"),v=d=>{d.preventDefault(),i(e,h,a)};return c.jsxs("div",{className:"relative w-full min-h-[680px] lg:min-h-[740px] flex flex-col justify-center overflow-hidden border-b border-white/10",children:[c.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen scale-105 transition-transform duration-1000",style:{backgroundImage:"url('/hero-bg.jpg')"}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/60"}),c.jsx("div",{className:"absolute top-1/4 right-1/4 w-96 h-96 bg-[#00E5C7]/10 rounded-full blur-3xl pointer-events-none"}),c.jsx("div",{className:"absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"}),c.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[c.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[c.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#141416]/90 border border-[#00E5C7]/40 shadow-teal-glow",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00E5C7] animate-ping"}),c.jsx("span",{className:"text-xs font-bold tracking-wider text-[#00E5C7] uppercase",children:"Pan-India Premium Mobility"})]}),c.jsx("h1",{className:"text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight",children:s("heroTitle")}),c.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed",children:[s("heroSubtitle")," Experience India's roads with instant digital booking, transparent INR rates, and zero security deposit options."]}),c.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-2 max-w-lg",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-[#00E5C7]",children:"14+ Metros"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Airports & Tech Hubs"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-white",children:"500+ Rides"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Bikes, Scooters, EVs, SUVs"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-[#D4AF37]",children:"4.96 ★"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"120,000+ Trips"})]})]}),c.jsx("div",{className:"pt-2 flex flex-wrap gap-3",children:c.jsxs("button",{onClick:r,className:"flex items-center space-x-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#141416] via-[#1E1E24] to-[#141416] border border-[#00E5C7]/50 hover:border-[#00E5C7] text-white font-semibold text-xs shadow-teal-glow transition",children:[c.jsx(Xh,{className:"w-4 h-4 text-[#00E5C7] animate-spin",style:{animationDuration:"8s"}}),c.jsx("span",{children:"Launch Interactive 3D Studio"}),c.jsx(h1,{className:"w-4 h-4 text-[#00E5C7]"})]})})]}),c.jsx("div",{className:"lg:col-span-5",children:c.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/15 relative",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4 mb-5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold font-display text-white",children:s("searchBarTitle")}),c.jsx("p",{className:"text-xs text-slate-400",children:"Pickup & drop anytime across Indian hubs"})]}),c.jsx(Zl,{className:"w-5 h-5 text-[#00E5C7]"})]}),c.jsx("div",{className:"grid grid-cols-3 gap-1 bg-[#0A0A0B] p-1 rounded-xl border border-white/10 mb-5",children:["HOURLY","DAILY","MONTHLY"].map(d=>c.jsx("button",{type:"button",onClick:()=>o(d),className:`py-2 text-xs font-bold rounded-lg transition ${a===d?"bg-[#00E5C7] text-black shadow-teal-glow":"text-slate-400 hover:text-white"}`,children:s(d==="HOURLY"?"hourly":d==="DAILY"?"daily":"monthly")},d))}),c.jsxs("form",{onSubmit:v,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:s("pickupCity")}),c.jsxs("div",{className:"relative",children:[c.jsx("select",{value:e,onChange:d=>{n(d.target.value);const g=t.find(_=>_.name===d.target.value);g&&g.hubs.length>0&&(f(g.hubs[0].name),m(g.hubs[0].name))},className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:t.map(d=>c.jsxs("option",{value:d.name,children:[d.name," (",d.state,")"]},d.id))}),c.jsx(La,{className:"absolute right-3.5 top-3 w-4 h-4 text-[#00E5C7] pointer-events-none"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:s("pickupHub")}),c.jsx("select",{value:h,onChange:d=>f(d.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:u.map(d=>c.jsxs("option",{value:d.name,children:[d.name," — ",d.landmark]},d.id))})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400",children:s("dropHub")}),c.jsx("span",{className:"text-[10px] text-[#00E5C7] font-semibold",children:"Different hub allowed"})]}),c.jsx("select",{value:p,onChange:d=>m(d.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:u.map(d=>c.jsx("option",{value:d.name,children:d.name},d.id))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[c.jsxs("div",{className:"bg-[#0A0A0B] p-2.5 rounded-xl border border-white/10",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(Jx,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Duration"})]}),c.jsx("p",{className:"text-xs font-bold text-white mt-0.5",children:a==="HOURLY"?"Min 4 Hours":a==="DAILY"?"24 Hours / Day":"30 Days Monthly"})]}),c.jsxs("div",{className:"bg-[#0A0A0B] p-2.5 rounded-xl border border-white/10",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(qi,{className:"w-3 h-3 text-[#D4AF37]"}),c.jsx("span",{children:"Inclusions"})]}),c.jsx("p",{className:"text-xs font-bold text-white mt-0.5",children:"2 Helmets + Fastag"})]})]}),c.jsxs("button",{type:"submit",className:"w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsx(bg,{className:"w-4 h-4"}),c.jsxs("span",{children:["Show Available Vehicles in ",e]})]})]})]})})]})})]})},U1=({vehicle:t,durationMode:e,onOpen3D:n,onOpenGallery:i,onQuickBook:r,onToggleCompare:s,isCompared:a,isWishlisted:o,onToggleWishlist:l})=>{const{t:u}=Ql(),h=e==="HOURLY"?t.pricePerHour:e==="DAILY"?t.pricePerDay:t.pricePerMonth,f=u(e==="HOURLY"?"perHour":e==="DAILY"?"perDay":"perMonth");return c.jsxs("div",{className:"glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#00E5C7]/50 transition-all duration-300",children:[c.jsxs("div",{className:"relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#1E1E24] to-[#141416]",children:[c.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/40"}),c.jsxs("div",{className:"absolute top-3 left-3 flex flex-wrap gap-1.5",children:[c.jsx("span",{className:"px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#0A0A0B]/80 text-[#00E5C7] border border-[#00E5C7]/30 backdrop-blur-md",children:t.vehicleType.replace("_"," ")}),c.jsx("span",{className:`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${t.fuelType==="ELECTRIC"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:t.fuelType})]}),c.jsx("button",{onClick:()=>l(t.id),className:"absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0A0A0B]/70 border border-white/15 flex items-center justify-center text-slate-300 hover:text-rose-400 transition",children:c.jsx(dg,{className:`w-4 h-4 ${o?"fill-rose-500 text-rose-500":""}`})}),t.assetType==="GLB"?c.jsxs("button",{onClick:()=>n(t),className:"absolute bottom-3 right-3 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0B]/85 hover:bg-[#00E5C7] text-[#00E5C7] hover:text-black border border-[#00E5C7]/60 font-bold text-[11px] backdrop-blur-md transition shadow-teal-glow",children:[c.jsx(Xh,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Explore in 3D"})]}):c.jsxs("button",{onClick:()=>i?i(t):n(t),className:"absolute bottom-3 right-3 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0B]/85 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/60 font-bold text-[11px] backdrop-blur-md transition shadow-gold-glow",children:[c.jsx(rg,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"View Gallery"})]}),c.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center space-x-1 text-xs font-semibold text-white bg-black/60 px-2 py-1 rounded-md backdrop-blur-md",children:[c.jsx(A1,{className:"w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]"}),c.jsx("span",{children:t.rating}),c.jsxs("span",{className:"text-slate-400 text-[10px]",children:["(",t.tripsCompleted," trips)"]})]})]}),c.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[11px] uppercase tracking-widest font-semibold text-slate-400",children:t.brand}),c.jsx("h4",{className:"text-lg font-bold text-white font-display leading-snug",children:t.name}),c.jsx("p",{className:"text-xs text-[#00E5C7] font-medium",children:t.model})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-[#0A0A0B]/60 p-2.5 rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Wh,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:u("topSpeed")}),c.jsxs("p",{className:"text-xs font-bold text-white font-mono",children:[t.maxSpeed," km/h"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Zl,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:u("acceleration")}),c.jsxs("p",{className:"text-xs font-bold text-white font-mono",children:[t.zeroToHundred,"s"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(ag,{className:"w-3.5 h-3.5 text-slate-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:"Capacity / Spec"}),c.jsx("p",{className:"text-[11px] font-bold text-slate-200 truncate",children:t.engineOrBattery})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(b1,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:"Mileage / Range"}),c.jsx("p",{className:"text-[11px] font-bold text-slate-200",children:t.mileageOrRange})]})]})]}),c.jsxs("div",{className:"pt-2 border-t border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] text-slate-400 font-medium",children:"Starting at"}),c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsxs("span",{className:"text-xl font-extrabold font-display text-white",children:["₹",h.toLocaleString("en-IN")]}),c.jsx("span",{className:"text-xs text-slate-400 font-semibold",children:f})]}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:["₹",t.securityDeposit.toLocaleString("en-IN")," deposit"]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>s(t),className:`p-2.5 rounded-xl border text-xs font-semibold transition ${a?"bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]":"bg-[#141416] border-white/10 text-slate-400 hover:text-white"}`,title:"Compare with other rides",children:c.jsx(pg,{className:"w-4 h-4"})}),c.jsxs("button",{onClick:()=>r(t),className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition flex items-center space-x-1.5",children:[c.jsx("span",{children:u("quickBook")}),c.jsx(za,{className:"w-3.5 h-3.5"})]})]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yh="169",k1=0,Np=1,F1=2,Bg=1,zg=2,ai=3,Ki=0,sn=1,$n=2,Wi=0,ms=1,Pp=2,Lp=3,Dp=4,O1=5,mr=100,B1=101,z1=102,H1=103,j1=104,V1=200,G1=201,W1=202,X1=203,ud=204,dd=205,Y1=206,$1=207,q1=208,K1=209,Z1=210,J1=211,Q1=212,eS=213,tS=214,hd=0,fd=1,pd=2,bs=3,md=4,xd=5,gd=6,vd=7,Hg=0,nS=1,iS=2,Xi=0,rS=1,sS=2,aS=3,oS=4,lS=5,cS=6,uS=7,jg=300,Ts=301,As=302,_d=303,yd=304,ec=306,Sd=1e3,yr=1001,Md=1002,wn=1003,dS=1004,fo=1005,kn=1006,kc=1007,Sr=1008,vi=1009,Vg=1010,Gg=1011,Da=1012,$h=1013,Rr=1014,di=1015,ja=1016,qh=1017,Kh=1018,Cs=1020,Wg=35902,Xg=1021,Yg=1022,On=1023,$g=1024,qg=1025,xs=1026,Rs=1027,Kg=1028,Zh=1029,Zg=1030,Jh=1031,Qh=1033,$o=33776,qo=33777,Ko=33778,Zo=33779,wd=35840,Ed=35841,bd=35842,Td=35843,Ad=36196,Cd=37492,Rd=37496,Nd=37808,Pd=37809,Ld=37810,Dd=37811,Id=37812,Ud=37813,kd=37814,Fd=37815,Od=37816,Bd=37817,zd=37818,Hd=37819,jd=37820,Vd=37821,Jo=36492,Gd=36494,Wd=36495,Jg=36283,Xd=36284,Yd=36285,$d=36286,hS=3200,fS=3201,Qg=0,pS=1,Di="",Wn="srgb",tr="srgb-linear",ef="display-p3",tc="display-p3-linear",Tl="linear",dt="srgb",Al="rec709",Cl="p3",Ur=7680,Ip=519,mS=512,xS=513,gS=514,ev=515,vS=516,_S=517,yS=518,SS=519,Up=35044,kp="300 es",hi=2e3,Rl=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,Nl=180/Math.PI;function Va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function MS(t,e){return(t%e+e)%e}function Oc(t,e,n){return(1-n)*t+n*e}function Ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],f=i[7],p=i[2],m=i[5],v=i[8],y=r[0],x=r[3],d=r[6],g=r[1],_=r[4],M=r[7],P=r[2],C=r[5],T=r[8];return s[0]=a*y+o*g+l*P,s[3]=a*x+o*_+l*C,s[6]=a*d+o*M+l*T,s[1]=u*y+h*g+f*P,s[4]=u*x+h*_+f*C,s[7]=u*d+h*M+f*T,s[2]=p*y+m*g+v*P,s[5]=p*x+m*_+v*C,s[8]=p*d+m*M+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=h*a-o*u,p=o*l-h*s,m=u*s-a*l,v=n*f+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*u-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=p*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new Ve;function tv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Pl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function wS(){const t=Pl("canvas");return t.style.display="block",t}const Fp={};function Qo(t){t in Fp||(Fp[t]=!0,console.warn(t))}function ES(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function bS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function TS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Op=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[tr]:{transfer:Tl,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:dt,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tc]:{transfer:Tl,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Bp),fromReference:t=>t.applyMatrix3(Op)},[ef]:{transfer:dt,primaries:Cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Bp),fromReference:t=>t.applyMatrix3(Op).convertLinearToSRGB()}},AS=new Set([tr,tc]),nt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!AS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xs[e].toReference,r=Xs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xs[t].primaries},getTransfer:function(t){return t===Di?Tl:Xs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Xs[e].luminanceCoefficients)}};function gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class CS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Pl("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Pl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class nv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hc(r[a].image)):s.push(Hc(r[a]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?CS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NS=0;class an extends Is{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=yr,r=yr,s=kn,a=Sr,o=On,l=vi,u=an.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Va(),this.name="",this.source=new nv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=jg;an.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],p=l[1],m=l[5],v=l[9],y=l[2],x=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(v-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(v+x)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(m+1)/2,P=(d+1)/2,C=(h+p)/4,T=(f+y)/4,L=(v+x)/4;return _>M&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=T/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-v)*(x-v)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(g)<.001&&(g=1),this.x=(x-v)/g,this.y=(f-y)/g,this.z=(p-h)/g,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class PS extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new nv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends PS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iv extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class LS extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const p=s[a+0],m=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==p||u!==m||h!==v){let x=1-o;const d=l*p+u*m+h*v+f*y,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const P=Math.sqrt(_),C=Math.atan2(P,d*g);x=Math.sin(x*C)/P,o=Math.sin(o*C)/P}const M=o*g;if(l=l*x+p*M,u=u*x+m*M,h=h*x+v*M,f=f*x+y*M,x===1-o){const P=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=P,u*=P,h*=P,f*=P}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],f=s[a],p=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*f+l*m-u*p,e[n+1]=l*v+h*p+u*f-o*m,e[n+2]=u*v+h*m+o*p-l*f,e[n+3]=h*v-o*f-l*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),f=o(s/2),p=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=p*h*f+u*m*v,this._y=u*m*f-p*h*v,this._z=u*h*v+p*m*f,this._w=u*h*f-p*m*v;break;case"YXZ":this._x=p*h*f+u*m*v,this._y=u*m*f-p*h*v,this._z=u*h*v-p*m*f,this._w=u*h*f+p*m*v;break;case"ZXY":this._x=p*h*f-u*m*v,this._y=u*m*f+p*h*v,this._z=u*h*v+p*m*f,this._w=u*h*f-p*m*v;break;case"ZYX":this._x=p*h*f-u*m*v,this._y=u*m*f+p*h*v,this._z=u*h*v-p*m*f,this._w=u*h*f+p*m*v;break;case"YZX":this._x=p*h*f+u*m*v,this._y=u*m*f+p*h*v,this._z=u*h*v-p*m*f,this._w=u*h*f-p*m*v;break;case"XZY":this._x=p*h*f-u*m*v,this._y=u*m*f-p*h*v,this._z=u*h*v+p*m*f,this._w=u*h*f+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],f=n[10],p=i+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),f=Math.sin((1-n)*h)/u,p=Math.sin(n*h)/u;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*u+a*f-o*h,this.y=i+l*h+o*u-s*f,this.z=r+l*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jc.copy(this).projectOnVector(e),this.sub(jc)}reflect(e){return this.sub(jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jc=new j,zp=new Ga;class Wa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ys),mo.subVectors(this.max,Ys),Fr.subVectors(e.a,Ys),Or.subVectors(e.b,Ys),Br.subVectors(e.c,Ys),Mi.subVectors(Or,Fr),wi.subVectors(Br,Or),sr.subVectors(Fr,Br);let n=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-sr.z,sr.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,sr.z,0,-sr.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-sr.y,sr.x,0];return!Vc(n,Fr,Or,Br,mo)||(n=[1,0,0,0,1,0,0,0,1],!Vc(n,Fr,Or,Br,mo))?!1:(xo.crossVectors(Mi,wi),n=[xo.x,xo.y,xo.z],Vc(n,Fr,Or,Br,mo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new j,new j,new j,new j,new j,new j,new j,new j],Rn=new j,po=new Wa,Fr=new j,Or=new j,Br=new j,Mi=new j,wi=new j,sr=new j,Ys=new j,mo=new j,xo=new j,ar=new j;function Vc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ar.fromArray(t,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=n.dot(ar),h=i.dot(ar);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const DS=new Wa,$s=new j,Gc=new j;class nc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);const n=$s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector($s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Gc)),this.expandByPoint($s.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new j,Wc=new j,go=new j,Ei=new j,Xc=new j,vo=new j,Yc=new j;class rv{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wc.copy(e).add(n).multiplyScalar(.5),go.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Wc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(go),o=Ei.dot(this.direction),l=-Ei.dot(go),u=Ei.lengthSq(),h=Math.abs(1-a*a);let f,p,m,v;if(h>0)if(f=a*l-o,p=a*o-l,v=s*h,f>=0)if(p>=-v)if(p<=v){const y=1/h;f*=y,p*=y,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+u}else p=s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+u;else p=-s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+u;else p<=-v?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+p*(p+2*l)+u):p<=v?(f=0,p=Math.min(Math.max(-s,-l),s),m=p*(p+2*l)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+p*(p+2*l)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wc).addScaledVector(go,p),m}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Xc.subVectors(n,e),vo.subVectors(i,e),Yc.crossVectors(Xc,vo);let a=this.direction.dot(Yc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(vo.crossVectors(Ei,vo));if(l<0)return null;const u=o*this.direction.dot(Xc.cross(Ei));if(u<0||l+u>a)return null;const h=-o*Ei.dot(Yc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,l,u,h,f,p,m,v,y,x){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,f,p,m,v,y,x)}set(e,n,i,r,s,a,o,l,u,h,f,p,m,v,y,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=f,d[14]=p,d[3]=m,d[7]=v,d[11]=y,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*h,m=a*f,v=o*h,y=o*f;n[0]=l*h,n[4]=-l*f,n[8]=u,n[1]=m+v*u,n[5]=p-y*u,n[9]=-o*l,n[2]=y-p*u,n[6]=v+m*u,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,m=l*f,v=u*h,y=u*f;n[0]=p+y*o,n[4]=v*o-m,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=y+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,m=l*f,v=u*h,y=u*f;n[0]=p-y*o,n[4]=-a*f,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=y-p*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,m=a*f,v=o*h,y=o*f;n[0]=l*h,n[4]=v*u-m,n[8]=p*u+y,n[1]=l*f,n[5]=y*u+p,n[9]=m*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*u,v=o*l,y=o*u;n[0]=l*h,n[4]=y-p*f,n[8]=v*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*f+v,n[10]=p-y*f}else if(e.order==="XZY"){const p=a*l,m=a*u,v=o*l,y=o*u;n[0]=l*h,n[4]=-f,n[8]=u*h,n[1]=p*f+y,n[5]=a*h,n[9]=m*f-v,n[2]=v*f-m,n[6]=o*h,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(IS,e,US)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),bi.crossVectors(i,cn),bi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),bi.crossVectors(i,cn)),bi.normalize(),_o.crossVectors(cn,bi),r[0]=bi.x,r[4]=_o.x,r[8]=cn.x,r[1]=bi.y,r[5]=_o.y,r[9]=cn.y,r[2]=bi.z,r[6]=_o.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],f=i[5],p=i[9],m=i[13],v=i[2],y=i[6],x=i[10],d=i[14],g=i[3],_=i[7],M=i[11],P=i[15],C=r[0],T=r[4],L=r[8],H=r[12],S=r[1],E=r[5],k=r[9],G=r[13],q=r[2],J=r[6],V=r[10],ne=r[14],I=r[3],te=r[7],N=r[11],A=r[15];return s[0]=a*C+o*S+l*q+u*I,s[4]=a*T+o*E+l*J+u*te,s[8]=a*L+o*k+l*V+u*N,s[12]=a*H+o*G+l*ne+u*A,s[1]=h*C+f*S+p*q+m*I,s[5]=h*T+f*E+p*J+m*te,s[9]=h*L+f*k+p*V+m*N,s[13]=h*H+f*G+p*ne+m*A,s[2]=v*C+y*S+x*q+d*I,s[6]=v*T+y*E+x*J+d*te,s[10]=v*L+y*k+x*V+d*N,s[14]=v*H+y*G+x*ne+d*A,s[3]=g*C+_*S+M*q+P*I,s[7]=g*T+_*E+M*J+P*te,s[11]=g*L+_*k+M*V+P*N,s[15]=g*H+_*G+M*ne+P*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],f=e[6],p=e[10],m=e[14],v=e[3],y=e[7],x=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*o*p+i*u*p+r*o*m-i*l*m)+y*(+n*l*m-n*u*p+s*a*p-r*a*m+r*u*h-s*l*h)+x*(+n*u*f-n*o*m-s*a*f+i*a*m+s*o*h-i*u*h)+d*(-r*o*h-n*l*f+n*o*p+r*a*f-i*a*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=e[9],p=e[10],m=e[11],v=e[12],y=e[13],x=e[14],d=e[15],g=f*x*u-y*p*u+y*l*m-o*x*m-f*l*d+o*p*d,_=v*p*u-h*x*u-v*l*m+a*x*m+h*l*d-a*p*d,M=h*y*u-v*f*u+v*o*m-a*y*m-h*o*d+a*f*d,P=v*f*l-h*y*l-v*o*p+a*y*p+h*o*x-a*f*x,C=n*g+i*_+r*M+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=g*T,e[1]=(y*p*s-f*x*s-y*r*m+i*x*m+f*r*d-i*p*d)*T,e[2]=(o*x*s-y*l*s+y*r*u-i*x*u-o*r*d+i*l*d)*T,e[3]=(f*l*s-o*p*s-f*r*u+i*p*u+o*r*m-i*l*m)*T,e[4]=_*T,e[5]=(h*x*s-v*p*s+v*r*m-n*x*m-h*r*d+n*p*d)*T,e[6]=(v*l*s-a*x*s-v*r*u+n*x*u+a*r*d-n*l*d)*T,e[7]=(a*p*s-h*l*s+h*r*u-n*p*u-a*r*m+n*l*m)*T,e[8]=M*T,e[9]=(v*f*s-h*y*s-v*i*m+n*y*m+h*i*d-n*f*d)*T,e[10]=(a*y*s-v*o*s+v*i*u-n*y*u-a*i*d+n*o*d)*T,e[11]=(h*o*s-a*f*s-h*i*u+n*f*u+a*i*m-n*o*m)*T,e[12]=P*T,e[13]=(h*y*r-v*f*r+v*i*p-n*y*p-h*i*x+n*f*x)*T,e[14]=(v*o*r-a*y*r-v*i*l+n*y*l+a*i*x-n*o*x)*T,e[15]=(a*f*r-h*o*r+h*i*l-n*f*l-a*i*p+n*o*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,f=o+o,p=s*u,m=s*h,v=s*f,y=a*h,x=a*f,d=o*f,g=l*u,_=l*h,M=l*f,P=i.x,C=i.y,T=i.z;return r[0]=(1-(y+d))*P,r[1]=(m+M)*P,r[2]=(v-_)*P,r[3]=0,r[4]=(m-M)*C,r[5]=(1-(p+d))*C,r[6]=(x+g)*C,r[7]=0,r[8]=(v+_)*T,r[9]=(x-g)*T,r[10]=(1-(p+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,h=1/a,f=1/o;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,v;if(o===hi)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Rl)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi){const l=this.elements,u=1/(n-e),h=1/(i-r),f=1/(a-s),p=(n+e)*u,m=(i+r)*h;let v,y;if(o===hi)v=(a+s)*f,y=-2*f;else if(o===Rl)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new j,Nn=new pt,IS=new j(0,0,0),US=new j(1,1,1),bi=new j,_o=new j,cn=new j,Hp=new pt,jp=new Ga;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],f=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jp.setFromEuler(this),this.setFromQuaternion(jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kS=0;const Vp=new j,Hr=new Ga,ni=new pt,yo=new j,qs=new j,FS=new j,OS=new Ga,Gp=new j(1,0,0),Wp=new j(0,1,0),Xp=new j(0,0,1),Yp={type:"added"},BS={type:"removed"},jr={type:"childadded",child:null},$c={type:"childremoved",child:null};class bt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new j,n=new Jn,i=new Ga,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Gp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,n){return Vp.copy(e).applyQuaternion(this.quaternion),this.position.add(Vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yo.copy(e):yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(qs,yo,this.up):ni.lookAt(yo,qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(ni),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(BS),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,FS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,OS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new j(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new j,ii=new j,qc=new j,ri=new j,Vr=new j,Gr=new j,$p=new j,Kc=new j,Zc=new j,Jc=new j,Qc=new at,eu=new at,tu=new at;class Fn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ii.subVectors(i,n),qc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ii),l=Pn.dot(qc),u=ii.dot(ii),h=ii.dot(qc),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(u*l-o*h)*p,v=(a*h-o*l)*p;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qc.setScalar(0),eu.setScalar(0),tu.setScalar(0),Qc.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,i),tu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qc,s.x),a.addScaledVector(eu,s.y),a.addScaledVector(tu,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ii.subVectors(e,n),Pn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,i),Gr.subVectors(s,i),Kc.subVectors(e,i);const l=Vr.dot(Kc),u=Gr.dot(Kc);if(l<=0&&u<=0)return n.copy(i);Zc.subVectors(e,r);const h=Vr.dot(Zc),f=Gr.dot(Zc);if(h>=0&&f<=h)return n.copy(r);const p=l*f-h*u;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Vr,a);Jc.subVectors(e,s);const m=Vr.dot(Jc),v=Gr.dot(Jc);if(v>=0&&m<=v)return n.copy(s);const y=m*u-l*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(Gr,o);const x=h*v-m*f;if(x<=0&&f-h>=0&&m-v>=0)return $p.subVectors(s,r),o=(f-h)/(f-h+(m-v)),n.copy(r).addScaledVector($p,o);const d=1/(x+y+p);return a=y*d,o=p*d,n.copy(i).addScaledVector(Vr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},So={h:0,s:0,l:0};function nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=MS(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=av[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return nt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Xt(Ht.r*255,0,255))*65536+Math.round(Xt(Ht.g*255,0,255))*256+Math.round(Xt(Ht.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Wn){nt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(So);const i=Oc(Ti.h,So.h,n),r=Oc(Ti.s,So.s,n),s=Oc(Ti.l,So.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ge;Ge.NAMES=av;let zS=0;class Us extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=ms,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=dd,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ud&&(i.blendSrc=this.blendSrc),this.blendDst!==dd&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ip&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pa extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,Mo=new Ze;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Up,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mo.fromBufferAttribute(this,n),Mo.applyMatrix3(e),this.setXY(n,Mo.x,Mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Up&&(e.usage=this.usage),e}}class ov extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class lv extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class gt extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let HS=0;const _n=new pt,iu=new bt,Wr=new j,un=new Wa,Ks=new Wa,Nt=new j;class gn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tv(e)?lv:ov)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(un.min,Ks.min),un.expandByPoint(Nt),Nt.addVectors(un.max,Ks.max),un.expandByPoint(Nt)):(un.expandByPoint(Ks.min),un.expandByPoint(Ks.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Nt.fromBufferAttribute(o,u),l&&(Wr.fromBufferAttribute(e,u),Nt.add(Wr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new j,l[L]=new j;const u=new j,h=new j,f=new j,p=new Ze,m=new Ze,v=new Ze,y=new j,x=new j;function d(L,H,S){u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,H),f.fromBufferAttribute(i,S),p.fromBufferAttribute(s,L),m.fromBufferAttribute(s,H),v.fromBufferAttribute(s,S),h.sub(u),f.sub(u),m.sub(p),v.sub(p);const E=1/(m.x*v.y-v.x*m.y);isFinite(E)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(E),x.copy(f).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(E),o[L].add(y),o[H].add(y),o[S].add(y),l[L].add(x),l[H].add(x),l[S].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,H=g.length;L<H;++L){const S=g[L],E=S.start,k=S.count;for(let G=E,q=E+k;G<q;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const _=new j,M=new j,P=new j,C=new j;function T(L){P.fromBufferAttribute(r,L),C.copy(P);const H=o[L];_.copy(H),_.sub(P.multiplyScalar(P.dot(H))).normalize(),M.crossVectors(C,H);const E=M.dot(l[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,E)}for(let L=0,H=g.length;L<H;++L){const S=g[L],E=S.start,k=S.count;for(let G=E,q=E+k;G<q;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,u=new j,h=new j,f=new j;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),y=e.getX(p+1),x=e.getX(p+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,x),o.add(h),l.add(h),u.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,f=o.normalized,p=new u.constructor(l.length*h);let m=0,v=0;for(let y=0,x=l.length;y<x;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let d=0;d<h;d++)p[v++]=u[m++]}return new Zn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const p=u[h],m=e(p,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qp=new pt,or=new rv,wo=new nc,Kp=new j,Eo=new j,bo=new j,To=new j,ru=new j,Ao=new j,Zp=new j,Co=new j;class st extends bt{constructor(e=new gn,n=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ao.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],f=s[l];h!==0&&(ru.fromBufferAttribute(f,e),a?Ao.addScaledVector(ru,h):Ao.addScaledVector(ru.sub(n),h))}n.add(Ao)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(wo.containsPoint(or.origin)===!1&&(or.intersectSphere(wo,Kp)===null||or.origin.distanceToSquared(Kp)>(e.far-e.near)**2))&&(qp.copy(s).invert(),or.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const x=p[v],d=a[x.materialIndex],g=Math.max(x.start,m.start),_=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=g,P=_;M<P;M+=3){const C=o.getX(M),T=o.getX(M+1),L=o.getX(M+2);r=Ro(this,d,e,i,u,h,f,C,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let x=v,d=y;x<d;x+=3){const g=o.getX(x),_=o.getX(x+1),M=o.getX(x+2);r=Ro(this,a,e,i,u,h,f,g,_,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const x=p[v],d=a[x.materialIndex],g=Math.max(x.start,m.start),_=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let M=g,P=_;M<P;M+=3){const C=M,T=M+1,L=M+2;r=Ro(this,d,e,i,u,h,f,C,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let x=v,d=y;x<d;x+=3){const g=x,_=x+1,M=x+2;r=Ro(this,a,e,i,u,h,f,g,_,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function jS(t,e,n,i,r,s,a,o){let l;if(e.side===sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ki,o),l===null)return null;Co.copy(o),Co.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Co);return u<n.near||u>n.far?null:{distance:u,point:Co.clone(),object:t}}function Ro(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Eo),t.getVertexPosition(l,bo),t.getVertexPosition(u,To);const h=jS(t,e,n,i,Eo,bo,To,Zp);if(h){const f=new j;Fn.getBarycoord(Zp,Eo,bo,To,f),r&&(h.uv=Fn.getInterpolatedAttribute(r,o,l,u,f,new Ze)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,l,u,f,new Ze)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,u,f,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new j,materialIndex:0};Fn.getNormal(Eo,bo,To,p.normal),h.face=p,h.barycoord=f}return h}class Un extends gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],f=[];let p=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function v(y,x,d,g,_,M,P,C,T,L,H){const S=M/T,E=P/L,k=M/2,G=P/2,q=C/2,J=T+1,V=L+1;let ne=0,I=0;const te=new j;for(let N=0;N<V;N++){const A=N*E-G;for(let re=0;re<J;re++){const Q=re*S-k;te[y]=Q*g,te[x]=A*_,te[d]=q,u.push(te.x,te.y,te.z),te[y]=0,te[x]=0,te[d]=C>0?1:-1,h.push(te.x,te.y,te.z),f.push(re/T),f.push(1-N/L),ne+=1}}for(let N=0;N<L;N++)for(let A=0;A<T;A++){const re=p+A+J*N,Q=p+A+J*(N+1),F=p+(A+1)+J*(N+1),K=p+(A+1)+J*N;l.push(re,Q,K),l.push(Q,F,K),I+=6}o.addGroup(m,I,H),m+=I,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function VS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function cv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const GS={clone:Ns,merge:Gt};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=VS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class uv extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new j,Jp=new Ze,Qp=new Ze;class Qt extends uv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,Qp),n.subVectors(Qp,Jp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,Yr=1;class YS extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Xr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new Qt(Xr,Yr,e,n);s.layers=this.layers,this.add(s);const a=new Qt(Xr,Yr,e,n);a.layers=this.layers,this.add(a);const o=new Qt(Xr,Yr,e,n);o.layers=this.layers,this.add(o);const l=new Qt(Xr,Yr,e,n);l.layers=this.layers,this.add(l);const u=new Qt(Xr,Yr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class dv extends an{constructor(e,n,i,r,s,a,o,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Ts,super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $S extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Un(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Wi});s.uniforms.tEquirect.value=n;const a=new st(r,s),o=n.minFilter;return n.minFilter===Sr&&(n.minFilter=kn),new YS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const su=new j,qS=new j,KS=new Ve;class fr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=su.subVectors(i,n).cross(qS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||KS.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new nc,No=new j;class tf{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],m=r[8],v=r[9],y=r[10],x=r[11],d=r[12],g=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,p-u,x-m,M-d).normalize(),i[1].setComponents(l+s,p+u,x+m,M+d).normalize(),i[2].setComponents(l+a,p+h,x+v,M+g).normalize(),i[3].setComponents(l-a,p-h,x-v,M-g).normalize(),i[4].setComponents(l-o,p-f,x-y,M-_).normalize(),n===hi)i[5].setComponents(l+o,p+f,x+y,M+_).normalize();else if(n===Rl)i[5].setComponents(o,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZS(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,f=u.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const h=l.array,f=l.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,h);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){const v=f[p],y=f[m];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){const y=f[m];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Xa extends gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,f=e/o,p=n/l,m=[],v=[],y=[],x=[];for(let d=0;d<h;d++){const g=d*p-a;for(let _=0;_<u;_++){const M=_*f-s;v.push(M,-g,0),y.push(0,0,1),x.push(_/o),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<o;g++){const _=g+u*d,M=g+u*(d+1),P=g+1+u*(d+1),C=g+1+u*d;m.push(_,M,C),m.push(M,P,C)}this.setIndex(m),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}var JS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,SM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ew=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ow=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ow=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ww=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ME=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:JS,alphahash_pars_fragment:QS,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:aM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:dM,bumpmap_pars_fragment:hM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:xM,color_fragment:gM,color_pars_fragment:vM,color_pars_vertex:_M,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:wM,displacementmap_pars_vertex:EM,displacementmap_vertex:bM,emissivemap_fragment:TM,emissivemap_pars_fragment:AM,colorspace_fragment:CM,colorspace_pars_fragment:RM,envmap_fragment:NM,envmap_common_pars_fragment:PM,envmap_pars_fragment:LM,envmap_pars_vertex:DM,envmap_physical_pars_fragment:GM,envmap_vertex:IM,fog_vertex:UM,fog_pars_vertex:kM,fog_fragment:FM,fog_pars_fragment:OM,gradientmap_pars_fragment:BM,lightmap_pars_fragment:zM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:jM,lights_pars_begin:VM,lights_toon_fragment:WM,lights_toon_pars_fragment:XM,lights_phong_fragment:YM,lights_phong_pars_fragment:$M,lights_physical_fragment:qM,lights_physical_pars_fragment:KM,lights_fragment_begin:ZM,lights_fragment_maps:JM,lights_fragment_end:QM,logdepthbuf_fragment:ew,logdepthbuf_pars_fragment:tw,logdepthbuf_pars_vertex:nw,logdepthbuf_vertex:iw,map_fragment:rw,map_pars_fragment:sw,map_particle_fragment:aw,map_particle_pars_fragment:ow,metalnessmap_fragment:lw,metalnessmap_pars_fragment:cw,morphinstance_vertex:uw,morphcolor_vertex:dw,morphnormal_vertex:hw,morphtarget_pars_vertex:fw,morphtarget_vertex:pw,normal_fragment_begin:mw,normal_fragment_maps:xw,normal_pars_fragment:gw,normal_pars_vertex:vw,normal_vertex:_w,normalmap_pars_fragment:yw,clearcoat_normal_fragment_begin:Sw,clearcoat_normal_fragment_maps:Mw,clearcoat_pars_fragment:ww,iridescence_pars_fragment:Ew,opaque_fragment:bw,packing:Tw,premultiplied_alpha_fragment:Aw,project_vertex:Cw,dithering_fragment:Rw,dithering_pars_fragment:Nw,roughnessmap_fragment:Pw,roughnessmap_pars_fragment:Lw,shadowmap_pars_fragment:Dw,shadowmap_pars_vertex:Iw,shadowmap_vertex:Uw,shadowmask_pars_fragment:kw,skinbase_vertex:Fw,skinning_pars_vertex:Ow,skinning_vertex:Bw,skinnormal_vertex:zw,specularmap_fragment:Hw,specularmap_pars_fragment:jw,tonemapping_fragment:Vw,tonemapping_pars_fragment:Gw,transmission_fragment:Ww,transmission_pars_fragment:Xw,uv_pars_fragment:Yw,uv_pars_vertex:$w,uv_vertex:qw,worldpos_vertex:Kw,background_vert:Zw,background_frag:Jw,backgroundCube_vert:Qw,backgroundCube_frag:eE,cube_vert:tE,cube_frag:nE,depth_vert:iE,depth_frag:rE,distanceRGBA_vert:sE,distanceRGBA_frag:aE,equirect_vert:oE,equirect_frag:lE,linedashed_vert:cE,linedashed_frag:uE,meshbasic_vert:dE,meshbasic_frag:hE,meshlambert_vert:fE,meshlambert_frag:pE,meshmatcap_vert:mE,meshmatcap_frag:xE,meshnormal_vert:gE,meshnormal_frag:vE,meshphong_vert:_E,meshphong_frag:yE,meshphysical_vert:SE,meshphysical_frag:ME,meshtoon_vert:wE,meshtoon_frag:EE,points_vert:bE,points_frag:TE,shadow_vert:AE,shadow_frag:CE,sprite_vert:RE,sprite_frag:NE},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Xn={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Xn.physical={uniforms:Gt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Po={r:0,b:0,g:0},cr=new Jn,PE=new pt;function LE(t,e,n,i,r,s,a){const o=new Ge(0);let l=s===!0?0:1,u,h,f=null,p=0,m=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function y(g){let _=!1;const M=v(g);M===null?d(o,l):M&&M.isColor&&(d(M,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(g,_){const M=v(_);M&&(M.isCubeTexture||M.mapping===ec)?(h===void 0&&(h=new st(new Un(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Ns(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),cr.copy(_.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(PE.makeRotationFromEuler(cr)),h.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,(f!==M||p!==M.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,m=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new st(new Xa(2,2),new Zi({name:"BackgroundMaterial",uniforms:Ns(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,m=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,_){g.getRGB(Po,cv(t)),i.buffers.color.setClear(Po.r,Po.g,Po.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(o,l)},render:y,addToRenderList:x}}function DE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(S,E,k,G,q){let J=!1;const V=f(G,k,E);s!==V&&(s=V,u(s.object)),J=m(S,G,k,q),J&&v(S,G,k,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(S,E,k,G),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function f(S,E,k){const G=k.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let J=q[E.id];J===void 0&&(J={},q[E.id]=J);let V=J[G];return V===void 0&&(V=p(l()),J[G]=V),V}function p(S){const E=[],k=[],G=[];for(let q=0;q<n;q++)E[q]=0,k[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,E,k,G){const q=s.attributes,J=E.attributes;let V=0;const ne=k.getAttributes();for(const I in ne)if(ne[I].location>=0){const N=q[I];let A=J[I];if(A===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(A=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(A=S.instanceColor)),N===void 0||N.attribute!==A||A&&N.data!==A.data)return!0;V++}return s.attributesNum!==V||s.index!==G}function v(S,E,k,G){const q={},J=E.attributes;let V=0;const ne=k.getAttributes();for(const I in ne)if(ne[I].location>=0){let N=J[I];N===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(N=S.instanceColor));const A={};A.attribute=N,N&&N.data&&(A.data=N.data),q[I]=A,V++}s.attributes=q,s.attributesNum=V,s.index=G}function y(){const S=s.newAttributes;for(let E=0,k=S.length;E<k;E++)S[E]=0}function x(S){d(S,0)}function d(S,E){const k=s.newAttributes,G=s.enabledAttributes,q=s.attributeDivisors;k[S]=1,G[S]===0&&(t.enableVertexAttribArray(S),G[S]=1),q[S]!==E&&(t.vertexAttribDivisor(S,E),q[S]=E)}function g(){const S=s.newAttributes,E=s.enabledAttributes;for(let k=0,G=E.length;k<G;k++)E[k]!==S[k]&&(t.disableVertexAttribArray(k),E[k]=0)}function _(S,E,k,G,q,J,V){V===!0?t.vertexAttribIPointer(S,E,k,q,J):t.vertexAttribPointer(S,E,k,G,q,J)}function M(S,E,k,G){y();const q=G.attributes,J=k.getAttributes(),V=E.defaultAttributeValues;for(const ne in J){const I=J[ne];if(I.location>=0){let te=q[ne];if(te===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const N=te.normalized,A=te.itemSize,re=e.get(te);if(re===void 0)continue;const Q=re.buffer,F=re.type,K=re.bytesPerElement,B=F===t.INT||F===t.UNSIGNED_INT||te.gpuType===$h;if(te.isInterleavedBufferAttribute){const W=te.data,oe=W.stride,he=te.offset;if(W.isInstancedInterleavedBuffer){for(let be=0;be<I.locationSize;be++)d(I.location+be,W.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let be=0;be<I.locationSize;be++)x(I.location+be);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let be=0;be<I.locationSize;be++)_(I.location+be,A/I.locationSize,F,N,oe*K,(he+A/I.locationSize*be)*K,B)}else{if(te.isInstancedBufferAttribute){for(let W=0;W<I.locationSize;W++)d(I.location+W,te.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let W=0;W<I.locationSize;W++)x(I.location+W);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let W=0;W<I.locationSize;W++)_(I.location+W,A/I.locationSize,F,N,A*K,A/I.locationSize*W*K,B)}}else if(V!==void 0){const N=V[ne];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(I.location,N);break;case 3:t.vertexAttrib3fv(I.location,N);break;case 4:t.vertexAttrib4fv(I.location,N);break;default:t.vertexAttrib1fv(I.location,N)}}}}g()}function P(){L();for(const S in i){const E=i[S];for(const k in E){const G=E[k];for(const q in G)h(G[q].object),delete G[q];delete E[k]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const E=i[S.id];for(const k in E){const G=E[k];for(const q in G)h(G[q].object),delete G[q];delete E[k]}delete i[S.id]}function T(S){for(const E in i){const k=i[E];if(k[S.id]===void 0)continue;const G=k[S.id];for(const q in G)h(G[q].object),delete G[q];delete k[S.id]}}function L(){H(),a=!0,s!==r&&(s=r,u(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:x,disableUnusedAttributes:g}}function IE(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,f){f!==0&&(t.drawArraysInstanced(i,u,h,f),n.update(h,i,f))}function o(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];n.update(m,i,1)}function l(u,h,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<u.length;v++)a(u[v],h[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,h,0,p,0,f);let v=0;for(let y=0;y<f;y++)v+=h[y];for(let y=0;y<p.length;y++)n.update(v,i,p[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function UE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==On&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const L=T===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==di&&!L)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=v>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:P,maxSamples:C}}function kE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,m){const v=f.clippingPlanes,y=f.clipIntersection,x=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!x)s?h(null):u();else{const g=s?0:i,_=g*4;let M=d.clippingState||null;l.value=M,M=h(v,p,_,m);for(let P=0;P!==_;++P)M[P]=n[P];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,m,v){const y=f!==null?f.length:0;let x=null;if(y!==0){if(x=l.value,v!==!0||x===null){const d=m+y*4,g=p.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<d)&&(x=new Float32Array(d));for(let _=0,M=m;_!==y;++_,M+=4)a.copy(f[_]).applyMatrix4(g,o),a.normal.toArray(x,M),x[M+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,x}}function FE(t){let e=new WeakMap;function n(a,o){return o===_d?a.mapping=Ts:o===yd&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===_d||o===yd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new $S(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fv extends uv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ls=4,em=[.125,.215,.35,.446,.526,.582],xr=20,au=new fv,tm=new Ge;let ou=null,lu=0,cu=0,uu=!1;const pr=(1+Math.sqrt(5))/2,$r=1/pr,nm=[new j(-pr,$r,0),new j(pr,$r,0),new j(-$r,0,pr),new j($r,0,pr),new j(0,pr,-$r),new j(0,pr,$r),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ou,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ou=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ja,format:On,colorSpace:tr,depthBuffer:!1},r=rm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OE(s)),this._blurMaterial=BE(s,e,n)}return r}_compileMaterial(e){const n=new st(this._lodPlanes[0],e);this._renderer.compile(n,au)}_sceneToCubeUV(e,n,i,r){const o=new Qt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(tm),h.toneMapping=Xi,h.autoClear=!1;const m=new pa({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new st(new Un,m);let y=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,y=!0):(m.color.copy(tm),y=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):g===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const _=this._cubeSize;Lo(r,g*_,d>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ts||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nm[(r-s-1)%nm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new st(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xr-1),y=s/v,x=isFinite(s)?1+Math.floor(h*y):xr;x>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xr}`);const d=[];let g=0;for(let T=0;T<xr;++T){const L=T/y,H=Math.exp(-L*L/2);d.push(H),T===0?g+=H:T<x&&(g+=2*H)}for(let T=0;T<d.length;T++)d[T]=d[T]/g;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const M=this._sizeLods[r],P=3*M*(r>_-ls?r-_+ls:0),C=4*(this._cubeSize-M);Lo(n,P,C,3*M,2*M),l.setRenderTarget(n),l.render(f,au)}}function OE(t){const e=[],n=[],i=[];let r=t;const s=t-ls+1+em.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ls?l=em[a-t+ls-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),h=-u,f=1+u,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,y=3,x=2,d=1,g=new Float32Array(y*v*m),_=new Float32Array(x*v*m),M=new Float32Array(d*v*m);for(let C=0;C<m;C++){const T=C%3*2/3-1,L=C>2?0:-1,H=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];g.set(H,y*v*C),_.set(p,x*v*C);const S=[C,C,C,C,C,C];M.set(S,d*v*C)}const P=new gn;P.setAttribute("position",new Zn(g,y)),P.setAttribute("uv",new Zn(_,x)),P.setAttribute("faceIndex",new Zn(M,d)),e.push(P),r>ls&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function rm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BE(t,e,n){const i=new Float32Array(xr),r=new j(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function sm(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function am(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function nf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===_d||l===yd,h=l===Ts||l===As;if(u||h){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new im(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new im(t)),f=u?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function HE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function jE(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const y=p.morphAttributes[v];for(let x=0,d=y.length;x<d;x++)e.remove(y[x])}p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const y=m[v];for(let x=0,d=y.length;x<d;x++)e.update(y[x],t.ARRAY_BUFFER)}}function u(f){const p=[],m=f.index,v=f.attributes.position;let y=0;if(m!==null){const g=m.array;y=m.version;for(let _=0,M=g.length;_<M;_+=3){const P=g[_+0],C=g[_+1],T=g[_+2];p.push(P,C,C,T,T,P)}}else if(v!==void 0){const g=v.array;y=v.version;for(let _=0,M=g.length/3-1;_<M;_+=3){const P=_+0,C=_+1,T=_+2;p.push(P,C,C,T,T,P)}}else return;const x=new(tv(p)?lv:ov)(p,1);x.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,x)}function h(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function VE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,m){t.drawElements(i,m,s,p*a),n.update(m,i,1)}function u(p,m,v){v!==0&&(t.drawElementsInstanced(i,m,s,p*a,v),n.update(m,i,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,v);let x=0;for(let d=0;d<v;d++)x+=m[d];n.update(x,i,1)}function f(p,m,v,y){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<p.length;d++)u(p[d]/a,m[d],y[d]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,y,0,v);let d=0;for(let g=0;g<v;g++)d+=m[g];for(let g=0;g<y.length;g++)n.update(d,i,y[g])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function GE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WE(t,e,n){const i=new WeakMap,r=new at;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),x===!0&&(M=3);let P=o.attributes.position.count*M,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*C*4*f),L=new iv(T,P,C,f);L.type=di,L.needsUpdate=!0;const H=M*4;for(let E=0;E<f;E++){const k=d[E],G=g[E],q=_[E],J=P*C*4*E;for(let V=0;V<k.count;V++){const ne=V*H;v===!0&&(r.fromBufferAttribute(k,V),T[J+ne+0]=r.x,T[J+ne+1]=r.y,T[J+ne+2]=r.z,T[J+ne+3]=0),y===!0&&(r.fromBufferAttribute(G,V),T[J+ne+4]=r.x,T[J+ne+5]=r.y,T[J+ne+6]=r.z,T[J+ne+7]=0),x===!0&&(r.fromBufferAttribute(q,V),T[J+ne+8]=r.x,T[J+ne+9]=r.y,T[J+ne+10]=r.z,T[J+ne+11]=q.itemSize===4?r.w:1)}}p={count:f,texture:L,size:new Ze(P,C)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let x=0;x<u.length;x++)v+=u[x];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function XE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class pv extends an{constructor(e,n,i,r,s,a,o,l,u,h=xs){if(h!==xs&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xs&&(i=Rr),i===void 0&&h===Rs&&(i=Cs),super(null,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const mv=new an,om=new pv(1,1),xv=new iv,gv=new LS,vv=new dv,lm=[],cm=[],um=new Float32Array(16),dm=new Float32Array(9),hm=new Float32Array(4);function ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lm[r];if(s===void 0&&(s=new Float32Array(r),lm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ic(t,e){let n=cm[e];n===void 0&&(n=new Int32Array(e),cm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function ZE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;hm.set(i),t.uniformMatrix2fv(this.addr,!1,hm),Rt(n,i)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;dm.set(i),t.uniformMatrix3fv(this.addr,!1,dm),Rt(n,i)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),Rt(n,i)}}function eb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function ib(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function lb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(om.compareFunction=ev,s=om):s=mv,n.setTexture2D(e||s,r)}function cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gv,r)}function ub(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||vv,r)}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xv,r)}function hb(t){switch(t){case 5126:return YE;case 35664:return $E;case 35665:return qE;case 35666:return KE;case 35674:return ZE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ab;case 36296:return ob;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return db}}function fb(t,e){t.uniform1fv(this.addr,e)}function pb(t,e){const n=ks(e,this.size,2);t.uniform2fv(this.addr,n)}function mb(t,e){const n=ks(e,this.size,3);t.uniform3fv(this.addr,n)}function xb(t,e){const n=ks(e,this.size,4);t.uniform4fv(this.addr,n)}function gb(t,e){const n=ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vb(t,e){const n=ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _b(t,e){const n=ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yb(t,e){t.uniform1iv(this.addr,e)}function Sb(t,e){t.uniform2iv(this.addr,e)}function Mb(t,e){t.uniform3iv(this.addr,e)}function wb(t,e){t.uniform4iv(this.addr,e)}function Eb(t,e){t.uniform1uiv(this.addr,e)}function bb(t,e){t.uniform2uiv(this.addr,e)}function Tb(t,e){t.uniform3uiv(this.addr,e)}function Ab(t,e){t.uniform4uiv(this.addr,e)}function Cb(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||mv,s[a])}function Rb(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||gv,s[a])}function Nb(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||vv,s[a])}function Pb(t,e,n){const i=this.cache,r=e.length,s=ic(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||xv,s[a])}function Lb(t){switch(t){case 5126:return fb;case 35664:return pb;case 35665:return mb;case 35666:return xb;case 35674:return gb;case 35675:return vb;case 35676:return _b;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return Mb;case 35669:case 35673:return wb;case 5125:return Eb;case 36294:return bb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Pb}}class Db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hb(n.type)}}class Ib{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Lb(n.type)}}class Ub{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const du=/(\w+)(\])?(\[|\.)?/g;function fm(t,e){t.seq.push(e),t.map[e.id]=e}function kb(t,e,n){const i=t.name,r=i.length;for(du.lastIndex=0;;){const s=du.exec(i),a=du.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){fm(n,u===void 0?new Db(o,t,e):new Ib(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Ub(o),fm(n,f)),n=f}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);kb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function pm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Fb=37297;let Ob=0;function Bb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function zb(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Cl&&n===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&n===Cl&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case tc:return[i,"LinearTransferOETF"];case Wn:case ef:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Bb(t.getShaderSource(e),a)}else return r}function Hb(t,e){const n=zb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function jb(t,e){let n;switch(e){case rS:n="Linear";break;case sS:n="Reinhard";break;case aS:n="Cineon";break;case oS:n="ACESFilmic";break;case cS:n="AgX";break;case uS:n="Neutral";break;case lS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Do=new j;function Vb(){nt.getLuminanceCoefficients(Do);const t=Do.x.toFixed(4),e=Do.y.toFixed(4),n=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function Wb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Xb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ra(t){return t!==""}function xm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(t){return t.replace(Yb,qb)}const $b=new Map;function qb(t,e){let n=je[e];if(n===void 0){const i=$b.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qd(n)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(t){return t.replace(Kb,Zb)}function Zb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _m(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Qb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function tT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Hg:e="ENVMAP_BLENDING_MULTIPLY";break;case nS:e="ENVMAP_BLENDING_MIX";break;case iS:e="ENVMAP_BLENDING_ADD";break}return e}function nT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Jb(n),u=Qb(n),h=eT(n),f=tT(n),p=nT(n),m=Gb(n),v=Wb(s),y=r.createProgram();let x,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ra).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ra).join(`
`),d.length>0&&(d+=`
`)):(x=[_m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),d=[_m(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?je.tonemapping_pars_fragment:"",n.toneMapping!==Xi?jb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Hb("linearToOutputTexel",n.outputColorSpace),Vb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),a=qd(a),a=xm(a,n),a=gm(a,n),o=qd(o),o=xm(o,n),o=gm(o,n),a=vm(a),o=vm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===kp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=g+x+a,M=g+d+o,P=pm(r,r.VERTEX_SHADER,_),C=pm(r,r.FRAGMENT_SHADER,M);r.attachShader(y,P),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(P).trim(),q=r.getShaderInfoLog(C).trim();let J=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,C);else{const ne=mm(r,P,"vertex"),I=mm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+ne+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||q==="")&&(V=!1);V&&(E.diagnostics={runnable:J,programLog:k,vertexShader:{log:G,prefix:x},fragmentShader:{log:q,prefix:d}})}r.deleteShader(P),r.deleteShader(C),L=new el(r,y),H=Xb(r,y)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let H;this.getAttributes=function(){return H===void 0&&T(this),H};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Fb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ob++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aT(e),n.set(e,i)),i}}class aT{constructor(e){this.id=rT++,this.code=e,this.usedTimes=0}}function oT(t,e,n,i,r,s,a){const o=new sv,l=new sT,u=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,m=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return u.add(S),S===0?"uv":`uv${S}`}function d(S,E,k,G,q){const J=G.fog,V=q.geometry,ne=S.isMeshStandardMaterial?G.environment:null,I=(S.isMeshStandardMaterial?n:e).get(S.envMap||ne),te=I&&I.mapping===ec?I.image.height:null,N=y[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const A=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=A!==void 0?A.length:0;let Q=0;V.morphAttributes.position!==void 0&&(Q=1),V.morphAttributes.normal!==void 0&&(Q=2),V.morphAttributes.color!==void 0&&(Q=3);let F,K,B,W;if(N){const Kt=Xn[N];F=Kt.vertexShader,K=Kt.fragmentShader}else F=S.vertexShader,K=S.fragmentShader,l.update(S),B=l.getVertexShaderID(S),W=l.getFragmentShaderID(S);const oe=t.getRenderTarget(),he=q.isInstancedMesh===!0,be=q.isBatchedMesh===!0,xe=!!S.map,Te=!!S.matcap,D=!!I,Ue=!!S.aoMap,ke=!!S.lightMap,ze=!!S.bumpMap,Ce=!!S.normalMap,Xe=!!S.displacementMap,Pe=!!S.emissiveMap,R=!!S.metalnessMap,w=!!S.roughnessMap,X=S.anisotropy>0,se=S.clearcoat>0,ie=S.dispersion>0,ee=S.iridescence>0,we=S.sheen>0,fe=S.transmission>0,_e=X&&!!S.anisotropyMap,He=se&&!!S.clearcoatMap,le=se&&!!S.clearcoatNormalMap,ge=se&&!!S.clearcoatRoughnessMap,De=ee&&!!S.iridescenceMap,Ie=ee&&!!S.iridescenceThicknessMap,ye=we&&!!S.sheenColorMap,Ye=we&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Qe=!!S.specularColorMap,U=!!S.specularIntensityMap,pe=fe&&!!S.transmissionMap,Z=fe&&!!S.thicknessMap,ae=!!S.gradientMap,ve=!!S.alphaMap,Se=S.alphaTest>0,qe=!!S.alphaHash,ot=!!S.extensions;let Dt=Xi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Dt=t.toneMapping);const Ke={shaderID:N,shaderType:S.type,shaderName:S.name,vertexShader:F,fragmentShader:K,defines:S.defines,customVertexShaderID:B,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:be,batchingColor:be&&q._colorsTexture!==null,instancing:he,instancingColor:he&&q.instanceColor!==null,instancingMorph:he&&q.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tr,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:Te,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:te,aoMap:Ue,lightMap:ke,bumpMap:ze,normalMap:Ce,displacementMap:m&&Xe,emissiveMap:Pe,normalMapObjectSpace:Ce&&S.normalMapType===pS,normalMapTangentSpace:Ce&&S.normalMapType===Qg,metalnessMap:R,roughnessMap:w,anisotropy:X,anisotropyMap:_e,clearcoat:se,clearcoatMap:He,clearcoatNormalMap:le,clearcoatRoughnessMap:ge,dispersion:ie,iridescence:ee,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:we,sheenColorMap:ye,sheenRoughnessMap:Ye,specularMap:Fe,specularColorMap:Qe,specularIntensityMap:U,transmission:fe,transmissionMap:pe,thicknessMap:Z,gradientMap:ae,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:qe,combine:S.combine,mapUv:xe&&x(S.map.channel),aoMapUv:Ue&&x(S.aoMap.channel),lightMapUv:ke&&x(S.lightMap.channel),bumpMapUv:ze&&x(S.bumpMap.channel),normalMapUv:Ce&&x(S.normalMap.channel),displacementMapUv:Xe&&x(S.displacementMap.channel),emissiveMapUv:Pe&&x(S.emissiveMap.channel),metalnessMapUv:R&&x(S.metalnessMap.channel),roughnessMapUv:w&&x(S.roughnessMap.channel),anisotropyMapUv:_e&&x(S.anisotropyMap.channel),clearcoatMapUv:He&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(S.sheenRoughnessMap.channel),specularMapUv:Fe&&x(S.specularMap.channel),specularColorMapUv:Qe&&x(S.specularColorMap.channel),specularIntensityMapUv:U&&x(S.specularIntensityMap.channel),transmissionMapUv:pe&&x(S.transmissionMap.channel),thicknessMapUv:Z&&x(S.thicknessMap.channel),alphaMapUv:ve&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ce||X),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!V.attributes.uv&&(xe||ve),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:q.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Dt,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$n,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ot&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&S.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function g(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)E.push(k),E.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(E,S),M(E,S),E.push(t.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function _(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),S.push(o.mask)}function P(S){const E=y[S.type];let k;if(E){const G=Xn[E];k=GS.clone(G.uniforms)}else k=S.uniforms;return k}function C(S,E){let k;for(let G=0,q=h.length;G<q;G++){const J=h[G];if(J.cacheKey===E){k=J,++k.usedTimes;break}}return k===void 0&&(k=new iT(t,E,S,s),h.push(k)),k}function T(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function L(S){l.remove(S)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:P,acquireProgram:C,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:H}}function lT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function cT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Sm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,m,v,y,x){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:v,renderOrder:f.renderOrder,z:y,group:x},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=y,d.group=x),e++,d}function o(f,p,m,v,y,x){const d=a(f,p,m,v,y,x);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,p,m,v,y,x){const d=a(f,p,m,v,y,x);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,p){n.length>1&&n.sort(f||cT),i.length>1&&i.sort(p||ym),r.length>1&&r.sort(p||ym)}function h(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function uT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Sm,t.set(i,[a])):r>=s.length?(a=new Sm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ge};break;case"SpotLight":n={position:new j,direction:new j,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function hT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fT=0;function pT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function mT(t){const e=new dT,n=hT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new pt,a=new pt;function o(u){let h=0,f=0,p=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,v=0,y=0,x=0,d=0,g=0,_=0,M=0,P=0,C=0,T=0;u.sort(pT);for(let H=0,S=u.length;H<S;H++){const E=u[H],k=E.color,G=E.intensity,q=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=k.r*G,f+=k.g*G,p+=k.b*G;else if(E.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(E.sh.coefficients[V],G);T++}else if(E.isDirectionalLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ne=E.shadow,I=n.get(E);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=E.shadow.matrix,g++}i.directional[m]=V,m++}else if(E.isSpotLight){const V=e.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(k).multiplyScalar(G),V.distance=q,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,i.spot[y]=V;const ne=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,ne.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[y]=ne.matrix,E.castShadow){const I=n.get(E);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=J,M++}y++}else if(E.isRectAreaLight){const V=e.get(E);V.color.copy(k).multiplyScalar(G),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),i.rectArea[x]=V,x++}else if(E.isPointLight){const V=e.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){const ne=E.shadow,I=n.get(E);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=E.shadow.matrix,_++}i.point[v]=V,v++}else if(E.isHemisphereLight){const V=e.get(E);V.skyColor.copy(E.color).multiplyScalar(G),V.groundColor.copy(E.groundColor).multiplyScalar(G),i.hemi[d]=V,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const L=i.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==x||L.hemiLength!==d||L.numDirectionalShadows!==g||L.numPointShadows!==_||L.numSpotShadows!==M||L.numSpotMaps!==P||L.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=x,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,L.directionalLength=m,L.pointLength=v,L.spotLength=y,L.rectAreaLength=x,L.hemiLength=d,L.numDirectionalShadows=g,L.numPointShadows=_,L.numSpotShadows=M,L.numSpotMaps=P,L.numLightProbes=T,i.version=fT++)}function l(u,h){let f=0,p=0,m=0,v=0,y=0;const x=h.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const _=u[d];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),m++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(_.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),p++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),y++}}}return{setup:o,setupView:l,state:i}}function Mm(t){const e=new mT(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function xT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Mm(t),e.set(r,[o])):s>=a.length?(o=new Mm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class gT extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vT extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _T=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ST(t,e,n){let i=new tf;const r=new Ze,s=new Ze,a=new at,o=new gT({depthPacking:fS}),l=new vT,u={},h=n.maxTextureSize,f={[Ki]:sn,[sn]:Ki,[$n]:$n},p=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:_T,fragmentShader:yT}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new gn;v.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new st(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let d=this.type;this.render=function(C,T,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;const H=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Wi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=d!==ai&&this.type===ai,q=d===ai&&this.type!==ai;for(let J=0,V=C.length;J<V;J++){const ne=C[J],I=ne.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const te=I.getFrameExtents();if(r.multiply(te),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,I.mapSize.y=s.y)),I.map===null||G===!0||q===!0){const A=this.type!==ai?{minFilter:wn,magFilter:wn}:{};I.map!==null&&I.map.dispose(),I.map=new Nr(r.x,r.y,A),I.map.texture.name=ne.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const N=I.getViewportCount();for(let A=0;A<N;A++){const re=I.getViewport(A);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(a),I.updateMatrices(ne,A),i=I.getFrustum(),M(T,L,I.camera,ne,this.type)}I.isPointLightShadow!==!0&&this.type===ai&&g(I,L),I.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(H,S,E)};function g(C,T){const L=e.update(y);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nr(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,L,p,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,L,m,y,null)}function _(C,T,L,H){let S=null;const E=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)S=E;else if(S=L.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=S.uuid,G=T.uuid;let q=u[k];q===void 0&&(q={},u[k]=q);let J=q[G];J===void 0&&(J=S.clone(),q[G]=J,T.addEventListener("dispose",P)),S=J}if(S.visible=T.visible,S.wireframe=T.wireframe,H===ai?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=L}return S}function M(C,T,L,H,S){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const G=e.update(C),q=C.material;if(Array.isArray(q)){const J=G.groups;for(let V=0,ne=J.length;V<ne;V++){const I=J[V],te=q[I.materialIndex];if(te&&te.visible){const N=_(C,te,H,S);C.onBeforeShadow(t,C,T,L,G,N,I),t.renderBufferDirect(L,null,G,N,C,I),C.onAfterShadow(t,C,T,L,G,N,I)}}}else if(q.visible){const J=_(C,q,H,S);C.onBeforeShadow(t,C,T,L,G,J,null),t.renderBufferDirect(L,null,G,J,C,null),C.onAfterShadow(t,C,T,L,G,J,null)}}const k=C.children;for(let G=0,q=k.length;G<q;G++)M(k[G],T,L,H,S)}function P(C){C.target.removeEventListener("dispose",P);for(const L in u){const H=u[L],S=C.target.uuid;S in H&&(H[S].dispose(),delete H[S])}}}const MT={[hd]:fd,[pd]:gd,[md]:vd,[bs]:xd,[fd]:hd,[gd]:pd,[vd]:md,[xd]:bs};function wT(t){function e(){let U=!1;const pe=new at;let Z=null;const ae=new at(0,0,0,0);return{setMask:function(ve){Z!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Se,qe,ot,Dt){Dt===!0&&(ve*=ot,Se*=ot,qe*=ot),pe.set(ve,Se,qe,ot),ae.equals(pe)===!1&&(t.clearColor(ve,Se,qe,ot),ae.copy(pe))},reset:function(){U=!1,Z=null,ae.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,Z=null,ae=null,ve=null;return{setReversed:function(Se){pe=Se},setTest:function(Se){Se?B(t.DEPTH_TEST):W(t.DEPTH_TEST)},setMask:function(Se){Z!==Se&&!U&&(t.depthMask(Se),Z=Se)},setFunc:function(Se){if(pe&&(Se=MT[Se]),ae!==Se){switch(Se){case hd:t.depthFunc(t.NEVER);break;case fd:t.depthFunc(t.ALWAYS);break;case pd:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case md:t.depthFunc(t.EQUAL);break;case xd:t.depthFunc(t.GEQUAL);break;case gd:t.depthFunc(t.GREATER);break;case vd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Se}},setLocked:function(Se){U=Se},setClear:function(Se){ve!==Se&&(t.clearDepth(Se),ve=Se)},reset:function(){U=!1,Z=null,ae=null,ve=null}}}function i(){let U=!1,pe=null,Z=null,ae=null,ve=null,Se=null,qe=null,ot=null,Dt=null;return{setTest:function(Ke){U||(Ke?B(t.STENCIL_TEST):W(t.STENCIL_TEST))},setMask:function(Ke){pe!==Ke&&!U&&(t.stencilMask(Ke),pe=Ke)},setFunc:function(Ke,Kt,Qn){(Z!==Ke||ae!==Kt||ve!==Qn)&&(t.stencilFunc(Ke,Kt,Qn),Z=Ke,ae=Kt,ve=Qn)},setOp:function(Ke,Kt,Qn){(Se!==Ke||qe!==Kt||ot!==Qn)&&(t.stencilOp(Ke,Kt,Qn),Se=Ke,qe=Kt,ot=Qn)},setLocked:function(Ke){U=Ke},setClear:function(Ke){Dt!==Ke&&(t.clearStencil(Ke),Dt=Ke)},reset:function(){U=!1,pe=null,Z=null,ae=null,ve=null,Se=null,qe=null,ot=null,Dt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],m=null,v=!1,y=null,x=null,d=null,g=null,_=null,M=null,P=null,C=new Ge(0,0,0),T=0,L=!1,H=null,S=null,E=null,k=null,G=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,V=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=V>=2);let I=null,te={};const N=t.getParameter(t.SCISSOR_BOX),A=t.getParameter(t.VIEWPORT),re=new at().fromArray(N),Q=new at().fromArray(A);function F(U,pe,Z,ae){const ve=new Uint8Array(4),Se=t.createTexture();t.bindTexture(U,Se),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Z;qe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(pe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Se}const K={};K[t.TEXTURE_2D]=F(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=F(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=F(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=F(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(t.DEPTH_TEST),s.setFunc(bs),ke(!1),ze(Np),B(t.CULL_FACE),D(Wi);function B(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function W(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function oe(U,pe){return h[U]!==pe?(t.bindFramebuffer(U,pe),h[U]=pe,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=pe),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function he(U,pe){let Z=p,ae=!1;if(U){Z=f.get(pe),Z===void 0&&(Z=[],f.set(pe,Z));const ve=U.textures;if(Z.length!==ve.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,qe=ve.length;Se<qe;Se++)Z[Se]=t.COLOR_ATTACHMENT0+Se;Z.length=ve.length,ae=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,ae=!0);ae&&t.drawBuffers(Z)}function be(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const xe={[mr]:t.FUNC_ADD,[B1]:t.FUNC_SUBTRACT,[z1]:t.FUNC_REVERSE_SUBTRACT};xe[H1]=t.MIN,xe[j1]=t.MAX;const Te={[V1]:t.ZERO,[G1]:t.ONE,[W1]:t.SRC_COLOR,[ud]:t.SRC_ALPHA,[Z1]:t.SRC_ALPHA_SATURATE,[q1]:t.DST_COLOR,[Y1]:t.DST_ALPHA,[X1]:t.ONE_MINUS_SRC_COLOR,[dd]:t.ONE_MINUS_SRC_ALPHA,[K1]:t.ONE_MINUS_DST_COLOR,[$1]:t.ONE_MINUS_DST_ALPHA,[J1]:t.CONSTANT_COLOR,[Q1]:t.ONE_MINUS_CONSTANT_COLOR,[eS]:t.CONSTANT_ALPHA,[tS]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,pe,Z,ae,ve,Se,qe,ot,Dt,Ke){if(U===Wi){v===!0&&(W(t.BLEND),v=!1);return}if(v===!1&&(B(t.BLEND),v=!0),U!==O1){if(U!==y||Ke!==L){if((x!==mr||_!==mr)&&(t.blendEquation(t.FUNC_ADD),x=mr,_=mr),Ke)switch(U){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pp:t.blendFunc(t.ONE,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Pp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,g=null,M=null,P=null,C.set(0,0,0),T=0,y=U,L=Ke}return}ve=ve||pe,Se=Se||Z,qe=qe||ae,(pe!==x||ve!==_)&&(t.blendEquationSeparate(xe[pe],xe[ve]),x=pe,_=ve),(Z!==d||ae!==g||Se!==M||qe!==P)&&(t.blendFuncSeparate(Te[Z],Te[ae],Te[Se],Te[qe]),d=Z,g=ae,M=Se,P=qe),(ot.equals(C)===!1||Dt!==T)&&(t.blendColor(ot.r,ot.g,ot.b,Dt),C.copy(ot),T=Dt),y=U,L=!1}function Ue(U,pe){U.side===$n?W(t.CULL_FACE):B(t.CULL_FACE);let Z=U.side===sn;pe&&(Z=!Z),ke(Z),U.blending===ms&&U.transparent===!1?D(Wi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ae=U.stencilWrite;a.setTest(ae),ae&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Xe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):W(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){H!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),H=U)}function ze(U){U!==k1?(B(t.CULL_FACE),U!==S&&(U===Np?t.cullFace(t.BACK):U===F1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):W(t.CULL_FACE),S=U}function Ce(U){U!==E&&(J&&t.lineWidth(U),E=U)}function Xe(U,pe,Z){U?(B(t.POLYGON_OFFSET_FILL),(k!==pe||G!==Z)&&(t.polygonOffset(pe,Z),k=pe,G=Z)):W(t.POLYGON_OFFSET_FILL)}function Pe(U){U?B(t.SCISSOR_TEST):W(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+q-1),I!==U&&(t.activeTexture(U),I=U)}function w(U,pe,Z){Z===void 0&&(I===null?Z=t.TEXTURE0+q-1:Z=I);let ae=te[Z];ae===void 0&&(ae={type:void 0,texture:void 0},te[Z]=ae),(ae.type!==U||ae.texture!==pe)&&(I!==Z&&(t.activeTexture(Z),I=Z),t.bindTexture(U,pe||K[U]),ae.type=U,ae.texture=pe)}function X(){const U=te[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){re.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function ye(U){Q.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Ye(U,pe){let Z=l.get(pe);Z===void 0&&(Z=new WeakMap,l.set(pe,Z));let ae=Z.get(U);ae===void 0&&(ae=t.getUniformBlockIndex(pe,U.name),Z.set(U,ae))}function Fe(U,pe){const ae=l.get(pe).get(U);o.get(pe)!==ae&&(t.uniformBlockBinding(pe,ae,U.__bindingPointIndex),o.set(pe,ae))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,te={},h={},f=new WeakMap,p=[],m=null,v=!1,y=null,x=null,d=null,g=null,_=null,M=null,P=null,C=new Ge(0,0,0),T=0,L=!1,H=null,S=null,E=null,k=null,G=null,re.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:B,disable:W,bindFramebuffer:oe,drawBuffers:he,useProgram:be,setBlending:D,setMaterial:Ue,setFlipSided:ke,setCullFace:ze,setLineWidth:Ce,setPolygonOffset:Xe,setScissorTest:Pe,activeTexture:R,bindTexture:w,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:ie,texImage2D:ge,texImage3D:De,updateUBOMapping:Ye,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:le,texSubImage2D:ee,texSubImage3D:we,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Ie,viewport:ye,reset:Qe}}function wm(t,e,n,i){const r=ET(i);switch(n){case Xg:return t*e;case $g:return t*e;case qg:return t*e*2;case Kg:return t*e/r.components*r.byteLength;case Zh:return t*e/r.components*r.byteLength;case Zg:return t*e*2/r.components*r.byteLength;case Jh:return t*e*2/r.components*r.byteLength;case Yg:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case Qh:return t*e*4/r.components*r.byteLength;case $o:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:case Td:return Math.max(t,16)*Math.max(e,8)/4;case wd:case bd:return Math.max(t,8)*Math.max(e,8)/2;case Ad:case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Id:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Jo:case Gd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jg:case Xd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yd:case $d:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ET(t){switch(t){case vi:case Vg:return{byteLength:1,components:1};case Da:case Gg:case ja:return{byteLength:2,components:1};case qh:case Kh:return{byteLength:2,components:4};case Rr:case $h:case di:return{byteLength:4,components:1};case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return m?new OffscreenCanvas(R,w):Pl("canvas")}function y(R,w,X){let se=1;const ie=Pe(R);if((ie.width>X||ie.height>X)&&(se=X/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(se*ie.width),we=Math.floor(se*ie.height);f===void 0&&(f=v(ee,we));const fe=w?v(ee,we):f;return fe.width=ee,fe.height=we,fe.getContext("2d").drawImage(R,0,0,ee,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+we+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function x(R){return R.generateMipmaps&&R.minFilter!==wn&&R.minFilter!==kn}function d(R){t.generateMipmap(R)}function g(R,w,X,se,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=w;if(w===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),w===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8)),w===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),w===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),X===t.UNSIGNED_INT&&(ee=t.RGB32UI),X===t.BYTE&&(ee=t.RGB8I),X===t.SHORT&&(ee=t.RGB16I),X===t.INT&&(ee=t.RGB32I)),w===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),X===t.UNSIGNED_INT&&(ee=t.RGBA32UI),X===t.BYTE&&(ee=t.RGBA8I),X===t.SHORT&&(ee=t.RGBA16I),X===t.INT&&(ee=t.RGBA32I)),w===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),w===t.RGBA){const we=ie?Tl:nt.getTransfer(se);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=we===dt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(R,w){let X;return R?w===null||w===Rr||w===Cs?X=t.DEPTH24_STENCIL8:w===di?X=t.DEPTH32F_STENCIL8:w===Da&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Rr||w===Cs?X=t.DEPTH_COMPONENT24:w===di?X=t.DEPTH_COMPONENT32F:w===Da&&(X=t.DEPTH_COMPONENT16),X}function M(R,w){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function P(R){const w=R.target;w.removeEventListener("dispose",P),T(w),w.isVideoTexture&&h.delete(w)}function C(R){const w=R.target;w.removeEventListener("dispose",C),H(w)}function T(R){const w=i.get(R);if(w.__webglInit===void 0)return;const X=R.source,se=p.get(X);if(se){const ie=se[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(R),Object.keys(se).length===0&&p.delete(X)}i.remove(R)}function L(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const X=R.source,se=p.get(X);delete se[w.__cacheKey],a.memory.textures--}function H(R){const w=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let ie=0;ie<w.__webglFramebuffer[se].length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[se][ie]);else t.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)t.deleteFramebuffer(w.__webglFramebuffer[se]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=R.textures;for(let se=0,ie=X.length;se<ie;se++){const ee=i.get(X[se]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(X[se])}i.remove(R)}let S=0;function E(){S=0}function k(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function G(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function q(R,w){const X=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(X,R,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function J(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Q(X,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function V(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Q(X,R,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function ne(R,w){const X=i.get(R);if(R.version>0&&X.__version!==R.version){F(X,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const I={[Sd]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[Md]:t.MIRRORED_REPEAT},te={[wn]:t.NEAREST,[dS]:t.NEAREST_MIPMAP_NEAREST,[fo]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[kc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},N={[mS]:t.NEVER,[SS]:t.ALWAYS,[xS]:t.LESS,[ev]:t.LEQUAL,[gS]:t.EQUAL,[yS]:t.GEQUAL,[vS]:t.GREATER,[_S]:t.NOTEQUAL};function A(R,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===kc||w.magFilter===fo||w.magFilter===Sr||w.minFilter===kn||w.minFilter===kc||w.minFilter===fo||w.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==fo&&w.minFilter!==Sr||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function re(R,w){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",P));const se=w.source;let ie=p.get(se);ie===void 0&&(ie={},p.set(se,ie));const ee=G(w);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[ee].usedTimes++;const we=ie[R.__cacheKey];we!==void 0&&(ie[R.__cacheKey].usedTimes--,we.usedTimes===0&&L(w)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return X}function Q(R,w,X){let se=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=t.TEXTURE_3D);const ie=re(R,w),ee=w.source;n.bindTexture(se,R.__webglTexture,t.TEXTURE0+X);const we=i.get(ee);if(ee.version!==we.__version||ie===!0){n.activeTexture(t.TEXTURE0+X);const fe=nt.getPrimaries(nt.workingColorSpace),_e=w.colorSpace===Di?null:nt.getPrimaries(w.colorSpace),He=w.colorSpace===Di||fe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let le=y(w.image,!1,r.maxTextureSize);le=Xe(w,le);const ge=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Ie=g(w.internalFormat,ge,De,w.colorSpace,w.isVideoTexture);A(se,w);let ye;const Ye=w.mipmaps,Fe=w.isVideoTexture!==!0,Qe=we.__version===void 0||ie===!0,U=ee.dataReady,pe=M(w,le);if(w.isDepthTexture)Ie=_(w.format===Rs,w.type),Qe&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Ie,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,ge,De,null));else if(w.isDataTexture)if(Ye.length>0){Fe&&Qe&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,Ye[0].width,Ye[0].height);for(let Z=0,ae=Ye.length;Z<ae;Z++)ye=Ye[Z],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,ge,De,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ye.width,ye.height,0,ge,De,ye.data);w.generateMipmaps=!1}else Fe?(Qe&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,le.width,le.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,ge,De,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,ge,De,le.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ie,Ye[0].width,Ye[0].height,le.depth);for(let Z=0,ae=Ye.length;Z<ae;Z++)if(ye=Ye[Z],w.format!==On)if(ge!==null)if(Fe){if(U)if(w.layerUpdates.size>0){const ve=wm(ye.width,ye.height,w.format,w.type);for(const Se of w.layerUpdates){const qe=ye.data.subarray(Se*ve/ye.data.BYTES_PER_ELEMENT,(Se+1)*ve/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Se,ye.width,ye.height,1,ge,qe,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,le.depth,ge,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,le.depth,ge,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ye.width,ye.height,le.depth,0,ge,De,ye.data)}else{Fe&&Qe&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,Ye[0].width,Ye[0].height);for(let Z=0,ae=Ye.length;Z<ae;Z++)ye=Ye[Z],w.format!==On?ge!==null?Fe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,ge,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,ge,De,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ye.width,ye.height,0,ge,De,ye.data)}else if(w.isDataArrayTexture)if(Fe){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ie,le.width,le.height,le.depth),U)if(w.layerUpdates.size>0){const Z=wm(le.width,le.height,w.format,w.type);for(const ae of w.layerUpdates){const ve=le.data.subarray(ae*Z/le.data.BYTES_PER_ELEMENT,(ae+1)*Z/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,ge,De,ve)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ge,De,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,le.width,le.height,le.depth,0,ge,De,le.data);else if(w.isData3DTexture)Fe?(Qe&&n.texStorage3D(t.TEXTURE_3D,pe,Ie,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ge,De,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,le.width,le.height,le.depth,0,ge,De,le.data);else if(w.isFramebufferTexture){if(Qe)if(Fe)n.texStorage2D(t.TEXTURE_2D,pe,Ie,le.width,le.height);else{let Z=le.width,ae=le.height;for(let ve=0;ve<pe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ie,Z,ae,0,ge,De,null),Z>>=1,ae>>=1}}else if(Ye.length>0){if(Fe&&Qe){const Z=Pe(Ye[0]);n.texStorage2D(t.TEXTURE_2D,pe,Ie,Z.width,Z.height)}for(let Z=0,ae=Ye.length;Z<ae;Z++)ye=Ye[Z],Fe?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ge,De,ye):n.texImage2D(t.TEXTURE_2D,Z,Ie,ge,De,ye);w.generateMipmaps=!1}else if(Fe){if(Qe){const Z=Pe(le);n.texStorage2D(t.TEXTURE_2D,pe,Ie,Z.width,Z.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,De,le)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ge,De,le);x(w)&&d(se),we.__version=ee.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function F(R,w,X){if(w.image.length!==6)return;const se=re(R,w),ie=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);const ee=i.get(ie);if(ie.version!==ee.__version||se===!0){n.activeTexture(t.TEXTURE0+X);const we=nt.getPrimaries(nt.workingColorSpace),fe=w.colorSpace===Di?null:nt.getPrimaries(w.colorSpace),_e=w.colorSpace===Di||we===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=w.isCompressedTexture||w.image[0].isCompressedTexture,le=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!He&&!le?ge[ae]=y(w.image[ae],!0,r.maxCubemapSize):ge[ae]=le?w.image[ae].image:w.image[ae],ge[ae]=Xe(w,ge[ae]);const De=ge[0],Ie=s.convert(w.format,w.colorSpace),ye=s.convert(w.type),Ye=g(w.internalFormat,Ie,ye,w.colorSpace),Fe=w.isVideoTexture!==!0,Qe=ee.__version===void 0||se===!0,U=ie.dataReady;let pe=M(w,De);A(t.TEXTURE_CUBE_MAP,w);let Z;if(He){Fe&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ye,De.width,De.height);for(let ae=0;ae<6;ae++){Z=ge[ae].mipmaps;for(let ve=0;ve<Z.length;ve++){const Se=Z[ve];w.format!==On?Ie!==null?Fe?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Se.width,Se.height,Ie,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Ye,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Se.width,Se.height,Ie,ye,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Ye,Se.width,Se.height,0,Ie,ye,Se.data)}}}else{if(Z=w.mipmaps,Fe&&Qe){Z.length>0&&pe++;const ae=Pe(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ye,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Ie,ye,ge[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,ge[ae].width,ge[ae].height,0,Ie,ye,ge[ae].data);for(let ve=0;ve<Z.length;ve++){const qe=Z[ve].image[ae].image;Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,qe.width,qe.height,Ie,ye,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Ye,qe.width,qe.height,0,Ie,ye,qe.data)}}else{Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,ye,ge[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ye,Ie,ye,ge[ae]);for(let ve=0;ve<Z.length;ve++){const Se=Z[ve];Fe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,Ie,ye,Se.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Ye,Ie,ye,Se.image[ae])}}}x(w)&&d(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function K(R,w,X,se,ie,ee){const we=s.convert(X.format,X.colorSpace),fe=s.convert(X.type),_e=g(X.internalFormat,we,fe,X.colorSpace);if(!i.get(w).__hasExternalTextures){const le=Math.max(1,w.width>>ee),ge=Math.max(1,w.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,_e,le,ge,w.depth,0,we,fe,null):n.texImage2D(ie,ee,_e,le,ge,0,we,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ze(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ie,i.get(X).__webglTexture,0,ke(w)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ie,i.get(X).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(R,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const se=w.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ee=_(w.stencilBuffer,ie),we=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=ke(w);ze(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,w.width,w.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const se=w.textures;for(let ie=0;ie<se.length;ie++){const ee=se[ie],we=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),_e=g(ee.internalFormat,we,fe,ee.colorSpace),He=ke(w);X&&ze(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,_e,w.width,w.height):ze(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,_e,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,_e,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function W(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const se=i.get(w.depthTexture).__webglTexture,ie=ke(w);if(w.depthTexture.format===xs)ze(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===Rs)ze(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function oe(R){const w=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const se=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=se}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");W(w.__webglFramebuffer,R)}else if(X){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=t.createRenderbuffer(),B(w.__webglDepthbuffer[se],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),B(w.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,w,X){const se=i.get(R);w!==void 0&&K(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&oe(R)}function be(R){const w=R.texture,X=i.get(R),se=i.get(w);R.addEventListener("dispose",C);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,we=ie.length>1;if(we||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=w.version,a.memory.textures++),ee){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let _e=0;_e<w.mipmaps.length;_e++)X.__webglFramebuffer[fe][_e]=t.createFramebuffer()}else X.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)X.__webglFramebuffer[fe]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(we)for(let fe=0,_e=ie.length;fe<_e;fe++){const He=i.get(ie[fe]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ze(R)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];X.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const He=s.convert(_e.format,_e.colorSpace),le=s.convert(_e.type),ge=g(_e.internalFormat,He,le,_e.colorSpace,R.isXRRenderTarget===!0),De=ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),B(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),A(t.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)K(X.__webglFramebuffer[fe][_e],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else K(X.__webglFramebuffer[fe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(w)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let fe=0,_e=ie.length;fe<_e;fe++){const He=ie[fe],le=i.get(He);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),A(t.TEXTURE_2D,He),K(X.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),x(He)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,se.__webglTexture),A(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)K(X.__webglFramebuffer[_e],R,w,t.COLOR_ATTACHMENT0,fe,_e);else K(X.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,fe,0);x(w)&&d(fe),n.unbindTexture()}R.depthBuffer&&oe(R)}function xe(R){const w=R.textures;for(let X=0,se=w.length;X<se;X++){const ie=w[X];if(x(ie)){const ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,we=i.get(ie).__webglTexture;n.bindTexture(ee,we),d(ee),n.unbindTexture()}}}const Te=[],D=[];function Ue(R){if(R.samples>0){if(ze(R)===!1){const w=R.textures,X=R.width,se=R.height;let ie=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),fe=w.length>1;if(fe)for(let _e=0;_e<w.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const He=i.get(w[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,X,se,0,0,X,se,ie,t.NEAREST),l===!0&&(Te.length=0,D.length=0,Te.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Te.push(ee),D.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<w.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const He=i.get(w[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function ke(R){return Math.min(r.maxSamples,R.samples)}function ze(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Xe(R,w){const X=R.colorSpace,se=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==tr&&X!==Di&&(nt.getTransfer(X)===dt?(se!==On||ie!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=he,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ze}function TT(t,e){function n(i,r=Di){let s;const a=nt.getTransfer(r);if(i===vi)return t.UNSIGNED_BYTE;if(i===qh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Kh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vg)return t.BYTE;if(i===Gg)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===$h)return t.INT;if(i===Rr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===ja)return t.HALF_FLOAT;if(i===Xg)return t.ALPHA;if(i===Yg)return t.RGB;if(i===On)return t.RGBA;if(i===$g)return t.LUMINANCE;if(i===qg)return t.LUMINANCE_ALPHA;if(i===xs)return t.DEPTH_COMPONENT;if(i===Rs)return t.DEPTH_STENCIL;if(i===Kg)return t.RED;if(i===Zh)return t.RED_INTEGER;if(i===Zg)return t.RG;if(i===Jh)return t.RG_INTEGER;if(i===Qh)return t.RGBA_INTEGER;if(i===$o||i===qo||i===Ko||i===Zo)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wd||i===Ed||i===bd||i===Td)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===wd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===Cd||i===Rd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ad||i===Cd)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nd||i===Pd||i===Ld||i===Dd||i===Id||i===Ud||i===kd||i===Fd||i===Od||i===Bd||i===zd||i===Hd||i===jd||i===Vd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ld)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Id)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ud)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Od)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===Gd||i===Wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Jo)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jg||i===Xd||i===Yd||i===$d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class AT extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ki extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CT={type:"move"};class hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const x=n.getJointPose(y,i),d=this._getHandJoint(u,y);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&p>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(CT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ki;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const RT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zi({vertexShader:RT,fragmentShader:NT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new st(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LT extends Is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,f=null,p=null,m=null,v=null;const y=new PT,x=n.getContextAttributes();let d=null,g=null;const _=[],M=[],P=new Ze;let C=null;const T=new Qt;T.layers.enable(1),T.viewport=new at;const L=new Qt;L.layers.enable(2),L.viewport=new at;const H=[T,L],S=new AT;S.layers.enable(1),S.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=_[F];return K===void 0&&(K=new hu,_[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=_[F];return K===void 0&&(K=new hu,_[F]=K),K.getGripSpace()},this.getHand=function(F){let K=_[F];return K===void 0&&(K=new hu,_[F]=K),K.getHandSpace()};function G(F){const K=M.indexOf(F.inputSource);if(K===-1)return;const B=_[K];B!==void 0&&(B.update(F.inputSource,F.frame,u||a),B.dispatchEvent({type:F.type,data:F.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",J);for(let F=0;F<_.length;F++){const K=M[F];K!==null&&(M[F]=null,_[F].disconnect(K))}E=null,k=null,y.reset(),e.setRenderTarget(d),m=null,p=null,f=null,r=null,g=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const K={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Nr(m.framebufferWidth,m.framebufferHeight,{format:On,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,B=null,W=null;x.depth&&(W=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?Rs:xs,B=x.stencil?Cs:Rr);const oe={colorFormat:n.RGBA8,depthFormat:W,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new Nr(p.textureWidth,p.textureHeight,{format:On,type:vi,depthTexture:new pv(p.textureWidth,p.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(F){for(let K=0;K<F.removed.length;K++){const B=F.removed[K],W=M.indexOf(B);W>=0&&(M[W]=null,_[W].disconnect(B))}for(let K=0;K<F.added.length;K++){const B=F.added[K];let W=M.indexOf(B);if(W===-1){for(let he=0;he<_.length;he++)if(he>=M.length){M.push(B),W=he;break}else if(M[he]===null){M[he]=B,W=he;break}if(W===-1)break}const oe=_[W];oe&&oe.connect(B)}}const V=new j,ne=new j;function I(F,K,B){V.setFromMatrixPosition(K.matrixWorld),ne.setFromMatrixPosition(B.matrixWorld);const W=V.distanceTo(ne),oe=K.projectionMatrix.elements,he=B.projectionMatrix.elements,be=oe[14]/(oe[10]-1),xe=oe[14]/(oe[10]+1),Te=(oe[9]+1)/oe[5],D=(oe[9]-1)/oe[5],Ue=(oe[8]-1)/oe[0],ke=(he[8]+1)/he[0],ze=be*Ue,Ce=be*ke,Xe=W/(-Ue+ke),Pe=Xe*-Ue;if(K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Pe),F.translateZ(Xe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),oe[10]===-1)F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const R=be+Xe,w=xe+Xe,X=ze-Pe,se=Ce+(W-Pe),ie=Te*xe/w*R,ee=D*xe/w*R;F.projectionMatrix.makePerspective(X,se,ie,ee,R,w),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function te(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let K=F.near,B=F.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(B=y.depthFar)),S.near=L.near=T.near=K,S.far=L.far=T.far=B,(E!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,k=S.far);const W=F.parent,oe=S.cameras;te(S,W);for(let he=0;he<oe.length;he++)te(oe[he],W);oe.length===2?I(S,T,L):S.projectionMatrix.copy(T.projectionMatrix),N(F,S,W)};function N(F,K,B){B===null?F.matrix.copy(K.matrixWorld):(F.matrix.copy(B.matrixWorld),F.matrix.invert(),F.matrix.multiply(K.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(K.projectionMatrix),F.projectionMatrixInverse.copy(K.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Nl*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(F){l=F,p!==null&&(p.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let A=null;function re(F,K){if(h=K.getViewerPose(u||a),v=K,h!==null){const B=h.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let W=!1;B.length!==S.cameras.length&&(S.cameras.length=0,W=!0);for(let he=0;he<B.length;he++){const be=B[he];let xe=null;if(m!==null)xe=m.getViewport(be);else{const D=f.getViewSubImage(p,be);xe=D.viewport,he===0&&(e.setRenderTargetTextures(g,D.colorTexture,p.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(g))}let Te=H[he];Te===void 0&&(Te=new Qt,Te.layers.enable(he),Te.viewport=new at,H[he]=Te),Te.matrix.fromArray(be.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(be.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(xe.x,xe.y,xe.width,xe.height),he===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),W===!0&&S.cameras.push(Te)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const he=f.getDepthInformation(B[0]);he&&he.isValid&&he.texture&&y.init(e,he,r.renderState)}}for(let B=0;B<_.length;B++){const W=M[B],oe=_[B];W!==null&&oe!==void 0&&oe.update(W,K,u||a)}A&&A(F,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const Q=new hv;Q.setAnimationLoop(re),this.setAnimationLoop=function(F){A=F},this.dispose=function(){}}}const ur=new Jn,DT=new pt;function IT(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,cv(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,g,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),f(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d)):d.isMeshStandardMaterial?(s(x,d),p(x,d),d.isMeshPhysicalMaterial&&m(x,d,M)):d.isMeshMatcapMaterial?(s(x,d),v(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),y(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?l(x,d,g,_):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===sn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===sn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const g=e.get(d),_=g.envMap,M=g.envMapRotation;_&&(x.envMap.value=_,ur.copy(M),ur.x*=-1,ur.y*=-1,ur.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),x.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(ur)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,g,_){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*g,x.scale.value=_*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function f(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function p(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,g){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,d){d.matcap&&(x.matcap.value=d.matcap)}function y(x,d){const g=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const M=_.program;i.uniformBlockBinding(g,M)}function u(g,_){let M=r[g.id];M===void 0&&(v(g),M=h(g),r[g.id]=M,g.addEventListener("dispose",x));const P=_.program;i.updateUBOMapping(g,P);const C=e.render.frame;s[g.id]!==C&&(p(g),s[g.id]=C)}function h(g){const _=f();g.__bindingPointIndex=_;const M=t.createBuffer(),P=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const _=r[g.id],M=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,T=M.length;C<T;C++){const L=Array.isArray(M[C])?M[C]:[M[C]];for(let H=0,S=L.length;H<S;H++){const E=L[H];if(m(E,C,H,P)===!0){const k=E.__offset,G=Array.isArray(E.value)?E.value:[E.value];let q=0;for(let J=0;J<G.length;J++){const V=G[J],ne=y(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,k+q,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,_,M,P){const C=g.value,T=_+"_"+M;if(P[T]===void 0)return typeof C=="number"||typeof C=="boolean"?P[T]=C:P[T]=C.clone(),!0;{const L=P[T];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return P[T]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function v(g){const _=g.uniforms;let M=0;const P=16;for(let T=0,L=_.length;T<L;T++){const H=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,E=H.length;S<E;S++){const k=H[S],G=Array.isArray(k.value)?k.value:[k.value];for(let q=0,J=G.length;q<J;q++){const V=G[q],ne=y(V),I=M%P,te=I%ne.boundary,N=I+te;M+=te,N!==0&&P-N<ne.storage&&(M+=P-N),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=ne.storage}}}const C=M%P;return C>0&&(M+=P-C),g.__size=M,g.__cache={},this}function y(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function x(g){const _=g.target;_.removeEventListener("dispose",x);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class kT{constructor(e={}){const{canvas:n=wS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,x=null;const d=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Xi,this.toneMappingExposure=1;const _=this;let M=!1,P=0,C=0,T=null,L=-1,H=null;const S=new at,E=new at;let k=null;const G=new Ge(0);let q=0,J=n.width,V=n.height,ne=1,I=null,te=null;const N=new at(0,0,J,V),A=new at(0,0,J,V);let re=!1;const Q=new tf;let F=!1,K=!1;const B=new pt,W=new pt,oe=new j,he=new at,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function Te(){return T===null?ne:1}let D=i;function Ue(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yh}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Se,!1),D===null){const O="webgl2";if(D=Ue(O,b),D===null)throw Ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ke,ze,Ce,Xe,Pe,R,w,X,se,ie,ee,we,fe,_e,He,le,ge,De,Ie,ye,Ye,Fe,Qe,U;function pe(){ke=new HE(D),ke.init(),Fe=new TT(D,ke),ze=new UE(D,ke,e,Fe),Ce=new wT(D),ze.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),Xe=new GE(D),Pe=new lT,R=new bT(D,ke,Ce,Pe,ze,Fe,Xe),w=new FE(_),X=new zE(_),se=new ZS(D),Qe=new DE(D,se),ie=new jE(D,se,Xe,Qe),ee=new XE(D,ie,se,Xe),Ie=new WE(D,ze,R),le=new kE(Pe),we=new oT(_,w,X,ke,ze,Qe,le),fe=new IT(_,Pe),_e=new uT,He=new xT(ke),De=new LE(_,w,X,Ce,ee,p,l),ge=new ST(_,ee,ze),U=new UT(D,Xe,ze,Ce),ye=new IE(D,ke,Xe),Ye=new VE(D,ke,Xe),Xe.programs=we.programs,_.capabilities=ze,_.extensions=ke,_.properties=Pe,_.renderLists=_e,_.shadowMap=ge,_.state=Ce,_.info=Xe}pe();const Z=new LT(_,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(J,V,!1))},this.getSize=function(b){return b.set(J,V)},this.setSize=function(b,O,Y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,V=O,n.width=Math.floor(b*ne),n.height=Math.floor(O*ne),Y===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(J*ne,V*ne).floor()},this.setDrawingBufferSize=function(b,O,Y){J=b,V=O,ne=Y,n.width=Math.floor(b*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,O,Y,$){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,O,Y,$),Ce.viewport(S.copy(N).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(A)},this.setScissor=function(b,O,Y,$){b.isVector4?A.set(b.x,b.y,b.z,b.w):A.set(b,O,Y,$),Ce.scissor(E.copy(A).multiplyScalar(ne).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){Ce.setScissorTest(re=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,O=!0,Y=!0){let $=0;if(b){let z=!1;if(T!==null){const de=T.texture.format;z=de===Qh||de===Jh||de===Zh}if(z){const de=T.texture.type,Me=de===vi||de===Rr||de===Da||de===Cs||de===qh||de===Kh,Ae=De.getClearColor(),Re=De.getClearAlpha(),Oe=Ae.r,Be=Ae.g,Ne=Ae.b;Me?(m[0]=Oe,m[1]=Be,m[2]=Ne,m[3]=Re,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Oe,v[1]=Be,v[2]=Ne,v[3]=Re,D.clearBufferiv(D.COLOR,0,v))}else $|=D.COLOR_BUFFER_BIT}O&&($|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),_e.dispose(),He.dispose(),Pe.dispose(),w.dispose(),X.dispose(),ee.dispose(),Qe.dispose(),U.dispose(),we.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",uf),Z.removeEventListener("sessionend",df),nr.stop()};function ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Xe.autoReset,O=ge.enabled,Y=ge.autoUpdate,$=ge.needsUpdate,z=ge.type;pe(),Xe.autoReset=b,ge.enabled=O,ge.autoUpdate=Y,ge.needsUpdate=$,ge.type=z}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qe(b){const O=b.target;O.removeEventListener("dispose",qe),ot(O)}function ot(b){Dt(b),Pe.remove(b)}function Dt(b){const O=Pe.get(b).programs;O!==void 0&&(O.forEach(function(Y){we.releaseProgram(Y)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,$,z,de){O===null&&(O=be);const Me=z.isMesh&&z.matrixWorld.determinant()<0,Ae=Sv(b,O,Y,$,z);Ce.setMaterial($,Me);let Re=Y.index,Oe=1;if($.wireframe===!0){if(Re=ie.getWireframeAttribute(Y),Re===void 0)return;Oe=2}const Be=Y.drawRange,Ne=Y.attributes.position;let it=Be.start*Oe,ct=(Be.start+Be.count)*Oe;de!==null&&(it=Math.max(it,de.start*Oe),ct=Math.min(ct,(de.start+de.count)*Oe)),Re!==null?(it=Math.max(it,0),ct=Math.min(ct,Re.count)):Ne!=null&&(it=Math.max(it,0),ct=Math.min(ct,Ne.count));const _t=ct-it;if(_t<0||_t===1/0)return;Qe.setup(z,$,Ae,Y,Re);let on,et=ye;if(Re!==null&&(on=se.get(Re),et=Ye,et.setIndex(on)),z.isMesh)$.wireframe===!0?(Ce.setLineWidth($.wireframeLinewidth*Te()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(z.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),Ce.setLineWidth(Le*Te()),z.isLineSegments?et.setMode(D.LINES):z.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else z.isPoints?et.setMode(D.POINTS):z.isSprite&&et.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)et.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,It=z._multiDrawCounts,tt=z._multiDrawCount,An=Re?se.get(Re).bytesPerElement:1,Dr=Pe.get($).currentProgram.getUniforms();for(let ln=0;ln<tt;ln++)Dr.setValue(D,"_gl_DrawID",ln),et.render(Le[ln]/An,It[ln])}else if(z.isInstancedMesh)et.renderInstances(it,_t,z.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,It=Math.min(Y.instanceCount,Le);et.renderInstances(it,_t,It)}else et.render(it,_t)};function Ke(b,O,Y){b.transparent===!0&&b.side===$n&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,$a(b,O,Y),b.side=Ki,b.needsUpdate=!0,$a(b,O,Y),b.side=$n):$a(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),x=He.get(Y),x.init(O),g.push(x),Y.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(x.pushLight(z),z.castShadow&&x.pushShadow(z))}),b!==Y&&b.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(x.pushLight(z),z.castShadow&&x.pushShadow(z))}),x.setupLights();const $=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){const Ae=de[Me];Ke(Ae,Y,z),$.add(Ae)}else Ke(de,Y,z),$.add(de)}),g.pop(),x=null,$},this.compileAsync=function(b,O,Y=null){const $=this.compile(b,O,Y);return new Promise(z=>{function de(){if($.forEach(function(Me){Pe.get(Me).currentProgram.isReady()&&$.delete(Me)}),$.size===0){z(b);return}setTimeout(de,10)}ke.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Kt=null;function Qn(b){Kt&&Kt(b)}function uf(){nr.stop()}function df(){nr.start()}const nr=new hv;nr.setAnimationLoop(Qn),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(b){Kt=b,Z.setAnimationLoop(b),b===null?nr.stop():nr.start()},Z.addEventListener("sessionstart",uf),Z.addEventListener("sessionend",df),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,T),x=He.get(b,g.length),x.init(O),g.push(x),W.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(W),K=this.localClippingEnabled,F=le.init(this.clippingPlanes,K),y=_e.get(b,d.length),y.init(),d.push(y),Z.enabled===!0&&Z.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&sc(de,O,-1/0,_.sortObjects)}sc(b,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(I,te),xe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,xe&&De.addToRenderList(y,b),this.info.render.frame++,F===!0&&le.beginShadows();const Y=x.state.shadowsArray;ge.render(Y,b,O),F===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,z=y.transmissive;if(x.setupLights(),O.isArrayCamera){const de=O.cameras;if(z.length>0)for(let Me=0,Ae=de.length;Me<Ae;Me++){const Re=de[Me];ff($,z,b,Re)}xe&&De.render(b);for(let Me=0,Ae=de.length;Me<Ae;Me++){const Re=de[Me];hf(y,b,Re,Re.viewport)}}else z.length>0&&ff($,z,b,O),xe&&De.render(b),hf(y,b,O);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,O),Qe.resetDefaultState(),L=-1,H=null,g.pop(),g.length>0?(x=g[g.length-1],F===!0&&le.setGlobalState(_.clippingPlanes,x.state.camera)):x=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function sc(b,O,Y,$){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){$&&he.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const Me=ee.update(b),Ae=b.material;Ae.visible&&y.push(b,Me,Ae,Y,he.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Me=ee.update(b),Ae=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),he.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),he.copy(Me.boundingSphere.center)),he.applyMatrix4(b.matrixWorld).applyMatrix4(W)),Array.isArray(Ae)){const Re=Me.groups;for(let Oe=0,Be=Re.length;Oe<Be;Oe++){const Ne=Re[Oe],it=Ae[Ne.materialIndex];it&&it.visible&&y.push(b,Me,it,Y,he.z,Ne)}}else Ae.visible&&y.push(b,Me,Ae,Y,he.z,null)}}const de=b.children;for(let Me=0,Ae=de.length;Me<Ae;Me++)sc(de[Me],O,Y,$)}function hf(b,O,Y,$){const z=b.opaque,de=b.transmissive,Me=b.transparent;x.setupLightsView(Y),F===!0&&le.setGlobalState(_.clippingPlanes,Y),$&&Ce.viewport(S.copy($)),z.length>0&&Ya(z,O,Y),de.length>0&&Ya(de,O,Y),Me.length>0&&Ya(Me,O,Y),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function ff(b,O,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[$.id]===void 0&&(x.state.transmissionRenderTarget[$.id]=new Nr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?ja:vi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=x.state.transmissionRenderTarget[$.id],Me=$.viewport||S;de.setSize(Me.z,Me.w);const Ae=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(G),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),xe&&De.render(Y);const Re=_.toneMapping;_.toneMapping=Xi;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),x.setupLightsView($),F===!0&&le.setGlobalState(_.clippingPlanes,$),Ya(b,Y,$),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,it=O.length;Ne<it;Ne++){const ct=O[Ne],_t=ct.object,on=ct.geometry,et=ct.material,Le=ct.group;if(et.side===$n&&_t.layers.test($.layers)){const It=et.side;et.side=sn,et.needsUpdate=!0,pf(_t,Y,$,on,et,Le),et.side=It,et.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de))}_.setRenderTarget(Ae),_.setClearColor(G,q),Oe!==void 0&&($.viewport=Oe),_.toneMapping=Re}function Ya(b,O,Y){const $=O.isScene===!0?O.overrideMaterial:null;for(let z=0,de=b.length;z<de;z++){const Me=b[z],Ae=Me.object,Re=Me.geometry,Oe=$===null?Me.material:$,Be=Me.group;Ae.layers.test(Y.layers)&&pf(Ae,O,Y,Re,Oe,Be)}}function pf(b,O,Y,$,z,de){b.onBeforeRender(_,O,Y,$,z,de),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(_,O,Y,$,b,de),z.transparent===!0&&z.side===$n&&z.forceSinglePass===!1?(z.side=sn,z.needsUpdate=!0,_.renderBufferDirect(Y,O,$,z,b,de),z.side=Ki,z.needsUpdate=!0,_.renderBufferDirect(Y,O,$,z,b,de),z.side=$n):_.renderBufferDirect(Y,O,$,z,b,de),b.onAfterRender(_,O,Y,$,z,de)}function $a(b,O,Y){O.isScene!==!0&&(O=be);const $=Pe.get(b),z=x.state.lights,de=x.state.shadowsArray,Me=z.state.version,Ae=we.getParameters(b,z.state,de,O,Y),Re=we.getProgramCacheKey(Ae);let Oe=$.programs;$.environment=b.isMeshStandardMaterial?O.environment:null,$.fog=O.fog,$.envMap=(b.isMeshStandardMaterial?X:w).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",qe),Oe=new Map,$.programs=Oe);let Be=Oe.get(Re);if(Be!==void 0){if($.currentProgram===Be&&$.lightsStateVersion===Me)return xf(b,Ae),Be}else Ae.uniforms=we.getUniforms(b),b.onBeforeCompile(Ae,_),Be=we.acquireProgram(Ae,Re),Oe.set(Re,Be),$.uniforms=Ae.uniforms;const Ne=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=le.uniform),xf(b,Ae),$.needsLights=wv(b),$.lightsStateVersion=Me,$.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Be,$.uniformsList=null,Be}function mf(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=el.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function xf(b,O){const Y=Pe.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Sv(b,O,Y,$,z){O.isScene!==!0&&(O=be),R.resetTextureUnits();const de=O.fog,Me=$.isMeshStandardMaterial?O.environment:null,Ae=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:tr,Re=($.isMeshStandardMaterial?X:w).get($.envMap||Me),Oe=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,ct=!!Y.morphAttributes.color;let _t=Xi;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=_.toneMapping);const on=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,et=on!==void 0?on.length:0,Le=Pe.get($),It=x.state.lights;if(F===!0&&(K===!0||b!==H)){const vn=b===H&&$.id===L;le.setState($,b,vn)}let tt=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==It.state.version||Le.outputColorSpace!==Ae||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Re||$.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==le.numPlanes||Le.numIntersection!==le.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Be||Le.morphTargets!==Ne||Le.morphNormals!==it||Le.morphColors!==ct||Le.toneMapping!==_t||Le.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Le.__version=$.version);let An=Le.currentProgram;tt===!0&&(An=$a($,O,z));let Dr=!1,ln=!1,ac=!1;const St=An.getUniforms(),yi=Le.uniforms;if(Ce.useProgram(An.program)&&(Dr=!0,ln=!0,ac=!0),$.id!==L&&(L=$.id,ln=!0),Dr||H!==b){ze.reverseDepthBuffer?(B.copy(b.projectionMatrix),bS(B),TS(B),St.setValue(D,"projectionMatrix",B)):St.setValue(D,"projectionMatrix",b.projectionMatrix),St.setValue(D,"viewMatrix",b.matrixWorldInverse);const vn=St.map.cameraPosition;vn!==void 0&&vn.setValue(D,oe.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&St.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&St.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,ln=!0,ac=!0)}if(z.isSkinnedMesh){St.setOptional(D,z,"bindMatrix"),St.setOptional(D,z,"bindMatrixInverse");const vn=z.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),St.setValue(D,"boneTexture",vn.boneTexture,R))}z.isBatchedMesh&&(St.setOptional(D,z,"batchingTexture"),St.setValue(D,"batchingTexture",z._matricesTexture,R),St.setOptional(D,z,"batchingIdTexture"),St.setValue(D,"batchingIdTexture",z._indirectTexture,R),St.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(D,"batchingColorTexture",z._colorsTexture,R));const oc=Y.morphAttributes;if((oc.position!==void 0||oc.normal!==void 0||oc.color!==void 0)&&Ie.update(z,Y,An),(ln||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,St.setValue(D,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yi.envMap.value=Re,yi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&O.environment!==null&&(yi.envMapIntensity.value=O.environmentIntensity),ln&&(St.setValue(D,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&Mv(yi,ac),de&&$.fog===!0&&fe.refreshFogUniforms(yi,de),fe.refreshMaterialUniforms(yi,$,ne,V,x.state.transmissionRenderTarget[b.id]),el.upload(D,mf(Le),yi,R)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(el.upload(D,mf(Le),yi,R),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&St.setValue(D,"center",z.center),St.setValue(D,"modelViewMatrix",z.modelViewMatrix),St.setValue(D,"normalMatrix",z.normalMatrix),St.setValue(D,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const vn=$.uniformsGroups;for(let lc=0,Ev=vn.length;lc<Ev;lc++){const gf=vn[lc];U.update(gf,An),U.bind(gf,An)}}return An}function Mv(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function wv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,Y){Pe.get(b.texture).__webglTexture=O,Pe.get(b.depthTexture).__webglTexture=Y;const $=Pe.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const Y=Pe.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Y=0){T=b,P=O,C=Y;let $=!0,z=null,de=!1,Me=!1;if(b){const Re=Pe.get(b);if(Re.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Re.__hasExternalTextures)R.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&Pe.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Be=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?z=Be[O][Y]:z=Be[O],de=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?z=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[Y]:z=Be,S.copy(b.viewport),E.copy(b.scissor),k=b.scissorTest}else S.copy(N).multiplyScalar(ne).floor(),E.copy(A).multiplyScalar(ne).floor(),k=re;if(Ce.bindFramebuffer(D.FRAMEBUFFER,z)&&$&&Ce.drawBuffers(b,z),Ce.viewport(S),Ce.scissor(E),Ce.setScissorTest(k),de){const Re=Pe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,Y)}else if(Me){const Re=Pe.get(b.texture),Oe=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Oe)}L=-1},this.readRenderTargetPixels=function(b,O,Y,$,z,de,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){Ce.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Re=b.texture,Oe=Re.format,Be=Re.type;if(!ze.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-$&&Y>=0&&Y<=b.height-z&&D.readPixels(O,Y,$,z,Fe.convert(Oe),Fe.convert(Be),de)}finally{const Re=T!==null?Pe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,$,z,de,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){const Re=b.texture,Oe=Re.format,Be=Re.type;if(!ze.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-$&&Y>=0&&Y<=b.height-z){Ce.bindFramebuffer(D.FRAMEBUFFER,Ae);const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(O,Y,$,z,Fe.convert(Oe),Fe.convert(Be),0);const it=T!==null?Pe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,it);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ES(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Ne),D.deleteSync(ct),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,Y=0){b.isTexture!==!0&&(Qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-Y),z=Math.floor(b.image.width*$),de=Math.floor(b.image.height*$),Me=O!==null?O.x:0,Ae=O!==null?O.y:0;R.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Me,Ae,z,de),Ce.unbindTexture()},this.copyTextureToTexture=function(b,O,Y=null,$=null,z=0){b.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],O=arguments[2],z=arguments[3]||0,Y=null);let de,Me,Ae,Re,Oe,Be;Y!==null?(de=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Ae=Y.min.x,Re=Y.min.y):(de=b.image.width,Me=b.image.height,Ae=0,Re=0),$!==null?(Oe=$.x,Be=$.y):(Oe=0,Be=0);const Ne=Fe.convert(O.format),it=Fe.convert(O.type);R.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const ct=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),on=D.getParameter(D.UNPACK_SKIP_PIXELS),et=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES),It=b.isCompressedTexture?b.mipmaps[z]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,It.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Oe,Be,de,Me,Ne,it,It.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Oe,Be,It.width,It.height,Ne,It.data):D.texSubImage2D(D.TEXTURE_2D,z,Oe,Be,de,Me,Ne,it,It),D.pixelStorei(D.UNPACK_ROW_LENGTH,ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,on),D.pixelStorei(D.UNPACK_SKIP_ROWS,et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),z===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(b,O,Y=null,$=null,z=0){b.isTexture!==!0&&(Qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,b=arguments[2],O=arguments[3],z=arguments[4]||0);let de,Me,Ae,Re,Oe,Be,Ne,it,ct;const _t=b.isCompressedTexture?b.mipmaps[z]:b.image;Y!==null?(de=Y.max.x-Y.min.x,Me=Y.max.y-Y.min.y,Ae=Y.max.z-Y.min.z,Re=Y.min.x,Oe=Y.min.y,Be=Y.min.z):(de=_t.width,Me=_t.height,Ae=_t.depth,Re=0,Oe=0,Be=0),$!==null?(Ne=$.x,it=$.y,ct=$.z):(Ne=0,it=0,ct=0);const on=Fe.convert(O.format),et=Fe.convert(O.type);let Le;if(O.isData3DTexture)R.setTexture3D(O,0),Le=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),Le=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const It=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),An=D.getParameter(D.UNPACK_SKIP_PIXELS),Dr=D.getParameter(D.UNPACK_SKIP_ROWS),ln=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Le,z,Ne,it,ct,de,Me,Ae,on,et,_t.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,z,Ne,it,ct,de,Me,Ae,on,_t.data):D.texSubImage3D(Le,z,Ne,it,ct,de,Me,Ae,on,et,_t),D.pixelStorei(D.UNPACK_ROW_LENGTH,It),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,An),D.pixelStorei(D.UNPACK_SKIP_ROWS,Dr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ln),z===0&&O.generateMipmaps&&D.generateMipmap(Le),Ce.unbindTexture()},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){P=0,C=0,T=null,Ce.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ef?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===tc?"display-p3":"srgb"}}class rf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new rf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class FT extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _v extends Us{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ll=new j,Dl=new j,Em=new pt,Zs=new rv,Io=new nc,fu=new j,bm=new j;class OT extends bt{constructor(e=new gn,n=new _v){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ll.fromBufferAttribute(n,r-1),Dl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ll.distanceTo(Dl);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;Em.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=m,x=v-1;y<x;y+=u){const d=h.getX(y),g=h.getX(y+1),_=Uo(this,e,Zs,l,d,g);_&&n.push(_)}if(this.isLineLoop){const y=h.getX(v-1),x=h.getX(m),d=Uo(this,e,Zs,l,y,x);d&&n.push(d)}}else{const m=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let y=m,x=v-1;y<x;y+=u){const d=Uo(this,e,Zs,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=Uo(this,e,Zs,l,v-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Uo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Ll.fromBufferAttribute(a,r),Dl.fromBufferAttribute(a,s),n.distanceSqToSegment(Ll,Dl,fu,bm)>i)return;fu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(fu);if(!(l<e.near||l>e.far))return{distance:l,point:bm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Tm=new j,Am=new j;class BT extends OT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Tm.fromBufferAttribute(n,r),Am.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Tm.distanceTo(Am);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ni extends gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],p=[],m=[];let v=0;const y=[],x=i/2;let d=0;g(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(p,3)),this.setAttribute("uv",new gt(m,2));function g(){const M=new j,P=new j;let C=0;const T=(n-e)/i;for(let L=0;L<=s;L++){const H=[],S=L/s,E=S*(n-e)+e;for(let k=0;k<=r;k++){const G=k/r,q=G*l+o,J=Math.sin(q),V=Math.cos(q);P.x=E*J,P.y=-S*i+x,P.z=E*V,f.push(P.x,P.y,P.z),M.set(J,T,V).normalize(),p.push(M.x,M.y,M.z),m.push(G,1-S),H.push(v++)}y.push(H)}for(let L=0;L<r;L++)for(let H=0;H<s;H++){const S=y[H][L],E=y[H+1][L],k=y[H+1][L+1],G=y[H][L+1];e>0&&(h.push(S,E,G),C+=3),n>0&&(h.push(E,k,G),C+=3)}u.addGroup(d,C,0),d+=C}function _(M){const P=v,C=new Ze,T=new j;let L=0;const H=M===!0?e:n,S=M===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,x*S,0),p.push(0,S,0),m.push(.5,.5),v++;const E=v;for(let k=0;k<=r;k++){const q=k/r*l+o,J=Math.cos(q),V=Math.sin(q);T.x=H*V,T.y=x*S,T.z=H*J,f.push(T.x,T.y,T.z),p.push(0,S,0),C.x=J*.5+.5,C.y=V*.5*S+.5,m.push(C.x,C.y),v++}for(let k=0;k<r;k++){const G=P+k,q=E+k;M===!0?h.push(q,q+1,G):h.push(q+1,q,G),L+=3}u.addGroup(d,L,M===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sf extends gn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],h=[];let f=e;const p=(n-e)/r,m=new j,v=new Ze;for(let y=0;y<=r;y++){for(let x=0;x<=i;x++){const d=s+x/i*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),l.push(m.x,m.y,m.z),u.push(0,0,1),v.x=(m.x/n+1)/2,v.y=(m.y/n+1)/2,h.push(v.x,v.y)}f+=p}for(let y=0;y<r;y++){const x=y*(i+1);for(let d=0;d<i;d++){const g=d+x,_=g,M=g+i+1,P=g+i+2,C=g+1;o.push(_,M,C),o.push(M,P,C)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class af extends gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],f=new j,p=new j,m=[],v=[],y=[],x=[];for(let d=0;d<=i;d++){const g=[],_=d/i;let M=0;d===0&&a===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let P=0;P<=n;P++){const C=P/n;f.x=-e*Math.cos(r+C*s)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(r+C*s)*Math.sin(a+_*o),v.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),x.push(C+M,1-_),g.push(u++)}h.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const _=h[d][g+1],M=h[d][g],P=h[d+1][g],C=h[d+1][g+1];(d!==0||a>0)&&m.push(_,M,C),(d!==i-1||l<Math.PI)&&m.push(M,P,C)}this.setIndex(m),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class of extends gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],u=[],h=new j,f=new j,p=new j;for(let m=0;m<=i;m++)for(let v=0;v<=r;v++){const y=v/r*s,x=m/i*Math.PI*2;f.x=(e+n*Math.cos(x))*Math.cos(y),f.y=(e+n*Math.cos(x))*Math.sin(y),f.z=n*Math.sin(x),o.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),u.push(v/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=r;v++){const y=(r+1)*m+v-1,x=(r+1)*(m-1)+v-1,d=(r+1)*(m-1)+v,g=(r+1)*m+v;a.push(y,x,g),a.push(x,d,g)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qr extends Us{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zT extends qr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rc extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const pu=new pt,Cm=new j,Rm=new j;class lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tf,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Cm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cm),Rm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rm),n.updateMatrixWorld(),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HT extends lf{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Nl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jT extends rc{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new HT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nm=new pt,Js=new j,mu=new j;class VT extends lf{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),i.position.copy(Js),mu.copy(i.position),mu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(mu),i.updateMatrixWorld(),r.makeTranslation(-Js.x,-Js.y,-Js.z),Nm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nm)}}class Pm extends rc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new VT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GT extends lf{constructor(){super(new fv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WT extends rc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new GT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XT extends rc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class YT extends BT{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let p=0,m=0,v=-o;p<=n;p++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const y=p===s?i:r;y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3}const h=new gn;h.setAttribute("position",new gt(l,3)),h.setAttribute("color",new gt(u,3));const f=new _v({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yh);class $T{constructor(){ir(this,"ctx",null);ir(this,"osc1",null);ir(this,"osc2",null);ir(this,"gainNode",null);ir(this,"filterNode",null);ir(this,"isPlaying",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}playEngineSound(e,n=150){var r,s;if(this.stopEngineSound(),this.initContext(),!this.ctx)return;const i=this.ctx.currentTime;this.isPlaying=!0,this.gainNode=this.ctx.createGain(),this.gainNode.gain.setValueAtTime(.01,i),this.gainNode.gain.exponentialRampToValueAtTime(.2,i+.3),this.filterNode=this.ctx.createBiquadFilter(),this.filterNode.type="lowpass",e.includes("ELECTRIC")?(this.osc1=this.ctx.createOscillator(),this.osc1.type="sine",this.osc1.frequency.setValueAtTime(140,i),this.osc1.frequency.exponentialRampToValueAtTime(780,i+2),this.filterNode.frequency.setValueAtTime(1200,i),this.osc1.connect(this.gainNode)):e==="BIKE"&&n>140?(this.osc1=this.ctx.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.setValueAtTime(85,i),this.osc1.frequency.exponentialRampToValueAtTime(320,i+1.8),this.osc2=this.ctx.createOscillator(),this.osc2.type="triangle",this.osc2.frequency.setValueAtTime(170,i),this.osc2.frequency.exponentialRampToValueAtTime(640,i+1.8),this.filterNode.frequency.setValueAtTime(2400,i),this.osc1.connect(this.filterNode),this.osc2.connect(this.filterNode),this.filterNode.connect(this.gainNode)):e==="SCOOTER"?(this.osc1=this.ctx.createOscillator(),this.osc1.type="triangle",this.osc1.frequency.setValueAtTime(95,i),this.osc1.frequency.exponentialRampToValueAtTime(220,i+2),this.filterNode.frequency.setValueAtTime(800,i),this.osc1.connect(this.filterNode),this.filterNode.connect(this.gainNode)):(this.osc1=this.ctx.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.setValueAtTime(45,i),this.osc1.frequency.exponentialRampToValueAtTime(160,i+1.5),this.osc2=this.ctx.createOscillator(),this.osc2.type="sine",this.osc2.frequency.setValueAtTime(90,i),this.osc2.frequency.exponentialRampToValueAtTime(280,i+1.5),this.filterNode.frequency.setValueAtTime(750,i),this.osc1.connect(this.filterNode),this.osc2.connect(this.filterNode),this.filterNode.connect(this.gainNode)),this.gainNode.connect(this.ctx.destination),(r=this.osc1)==null||r.start(i),(s=this.osc2)==null||s.start(i),this.gainNode.gain.exponentialRampToValueAtTime(.001,i+4),setTimeout(()=>{this.stopEngineSound()},4100)}stopEngineSound(){if(this.isPlaying)try{this.osc1&&(this.osc1.stop(),this.osc1.disconnect(),this.osc1=null),this.osc2&&(this.osc2.stop(),this.osc2.disconnect(),this.osc2=null),this.gainNode&&(this.gainNode.disconnect(),this.gainNode=null),this.isPlaying=!1}catch{this.isPlaying=!1}}}const Lm=new $T,qT=[{name:"Electric Teal",hex:"#00E5C7"},{name:"Midnight Black",hex:"#121214"},{name:"Racing Saffron",hex:"#FF6600"},{name:"Cyber Gold",hex:"#D4AF37"},{name:"Crimson Pulse",hex:"#FF2D55"},{name:"Titanium Silver",hex:"#E5E5EA"}],KT=({vehicle:t,onClose:e,onBookNow:n})=>{const i=ue.useRef(null),[r,s]=ue.useState((t==null?void 0:t.colorHex)||"#00E5C7"),[a,o]=ue.useState(!0),[l,u]=ue.useState(!1),[h,f]=ue.useState(0),[p,m]=ue.useState(1200),[v,y]=ue.useState("N"),x=ue.useRef(null),d=ue.useRef(null),g=ue.useRef(null),_=ue.useRef(null),M=ue.useRef([]),P=ue.useRef(null),C=ue.useRef(0),T=ue.useRef(!1),L=ue.useRef({x:0,y:0}),H=ue.useRef({theta:Math.PI/4,phi:Math.PI/3.5,radius:7.5});ue.useEffect(()=>{if(!t||!i.current)return;const k=i.current,G=k.clientWidth,q=k.clientHeight,J=new FT;J.background=new Ge("#0A0A0B"),J.fog=new rf("#0A0A0B",.04),x.current=J;const V=new Qt(45,G/q,.1,100);V.position.set(H.current.radius*Math.sin(H.current.phi)*Math.sin(H.current.theta),H.current.radius*Math.cos(H.current.phi),H.current.radius*Math.sin(H.current.phi)*Math.cos(H.current.theta)),V.lookAt(0,.8,0);const ne=new kT({antialias:!0,alpha:!0});ne.setSize(G,q),ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),ne.shadowMap.enabled=!0,ne.shadowMap.type=zg,k.innerHTML="",k.appendChild(ne.domElement),d.current=ne;const I=new XT("#ffffff",.8);J.add(I);const te=new WT("#ffffff",1.8);te.position.set(6,10,6),te.castShadow=!0,te.shadow.mapSize.width=1024,te.shadow.mapSize.height=1024,J.add(te);const N=new Pm("#00E5C7",2.5,12);N.position.set(-6,4,-4),J.add(N);const A=new Pm("#D4AF37",1.8,12);A.position.set(4,2,-5),J.add(A);const re=new jT(16777215,a?6:0,16,Math.PI/4,.5);re.position.set(2.4,1.2,0);const Q=new bt;Q.position.set(8,0,0),J.add(Q),re.target=Q,re.castShadow=!0,J.add(re),_.current=re;const F=new Xa(30,30),K=new qr({color:"#0e0e11",roughness:.2,metalness:.8}),B=new st(F,K);B.rotation.x=-Math.PI/2,B.receiveShadow=!0,J.add(B);const W=new YT(30,30,"#00E5C7","#222226");W.position.y=.01,J.add(W);const oe=new sf(3.2,3.25,64),he=new pa({color:"#00E5C7",side:$n}),be=new st(oe,he);be.rotation.x=-Math.PI/2,be.position.y=.02,J.add(be);const xe=new ki;M.current=[];const Te=new qr({color:r,metalness:.85,roughness:.22,clearcoat:.9,clearcoatRoughness:.1});g.current=Te;const D=new qr({color:"#EEEEEE",metalness:.95,roughness:.1}),Ue=new qr({color:"#1A1A1A",roughness:.85,metalness:.1}),ke=new zT({color:"#111111",metalness:.1,roughness:.1,transmission:.7,transparent:!0});if(t.vehicleType.includes("CAR")){const ie=new Un(4.4,.8,2),ee=new st(ie,Te);ee.position.set(0,.85,0),ee.castShadow=!0,xe.add(ee);const we=new Un(2.4,.75,1.7),fe=new st(we,Te);fe.position.set(-.2,1.55,0),fe.castShadow=!0,xe.add(fe);const _e=new Un(2.35,.68,1.75),He=new st(_e,ke);He.position.set(-.18,1.55,0),xe.add(He);const le=new Un(.1,.2,.4),ge=new pa({color:a?"#FFFFFF":"#888888"}),De=new st(le,ge);De.position.set(2.21,.85,.65);const Ie=new st(le,ge);Ie.position.set(2.21,.85,-.65),xe.add(De),xe.add(Ie);const ye=new Ni(.48,.48,.26,24);ye.rotateX(Math.PI/2),[[1.4,.48,1.05],[1.4,.48,-1.05],[-1.4,.48,1.05],[-1.4,.48,-1.05]].forEach(([Fe,Qe,U])=>{const pe=new ki;pe.position.set(Fe,Qe,U);const Z=new st(ye,Ue);Z.castShadow=!0,pe.add(Z),xe.add(pe),M.current.push(pe)})}else{const ie=new Ni(.08,.08,2.8,16),ee=new st(ie,D);ee.rotation.z=Math.PI/2.3,ee.position.set(0,1.1,0),ee.castShadow=!0,xe.add(ee);const we=new af(.7,32,16);we.scale(1.4,.75,.75);const fe=new st(we,Te);fe.position.set(.4,1.35,0),fe.castShadow=!0,xe.add(fe);const _e=new Un(.85,.7,.55),He=new st(_e,D);He.position.set(0,.75,0),He.castShadow=!0,xe.add(He);const le=new Un(1.2,.18,.45),ge=new qr({color:"#161616",roughness:.9}),De=new st(le,ge);De.position.set(-.6,1.25,0),De.rotation.z=-.1,xe.add(De);const Ie=new Ni(.06,.09,2.2,16),ye=new st(Ie,D);ye.rotation.z=Math.PI/2.1,ye.position.set(-.3,.5,.3),xe.add(ye);const Ye=new Ni(.04,.04,1.3,16),Fe=new st(Ye,D);Fe.rotation.x=Math.PI/2,Fe.position.set(1.1,1.7,0),xe.add(Fe);const Qe=new Ni(.2,.25,.25,24),U=new pa({color:a?"#FFFFFF":"#888888"}),pe=new st(Qe,U);pe.rotation.z=Math.PI/2,pe.position.set(1.4,1.45,0),xe.add(pe);const Z=new ki;Z.position.set(1.5,.65,0);const ae=new of(.65,.16,16,32),ve=new st(ae,Ue);ve.castShadow=!0;const Se=new Ni(.5,.5,.1,16),qe=new st(Se,D);qe.rotation.x=Math.PI/2,Z.add(ve),Z.add(qe),xe.add(Z),M.current.push(Z);const ot=new ki;ot.position.set(-1.5,.65,0);const Dt=new st(ae,Ue);Dt.castShadow=!0;const Ke=new st(Se,D);Ke.rotation.x=Math.PI/2,ot.add(Dt),ot.add(Ke),xe.add(ot),M.current.push(ot)}J.add(xe),P.current=xe;let Ce=!0;const Xe=()=>{C.current=requestAnimationFrame(Xe),Ce&&!T.current&&(H.current.theta+=.005),V.position.x=H.current.radius*Math.sin(H.current.phi)*Math.sin(H.current.theta),V.position.y=H.current.radius*Math.cos(H.current.phi),V.position.z=H.current.radius*Math.sin(H.current.phi)*Math.cos(H.current.theta),V.lookAt(0,.8,0),l&&M.current.forEach(ie=>{ie.rotation.z-=.15}),ne.render(J,V)};Xe();const Pe=ie=>{T.current=!0,Ce=!1,L.current={x:ie.clientX,y:ie.clientY}},R=ie=>{if(!T.current)return;const ee=ie.clientX-L.current.x,we=ie.clientY-L.current.y;L.current={x:ie.clientX,y:ie.clientY},H.current.theta-=ee*.008,H.current.phi=Math.max(.1,Math.min(Math.PI/2.1,H.current.phi-we*.008))},w=()=>{T.current=!1},X=ie=>{ie.preventDefault(),H.current.radius=Math.max(3.5,Math.min(14,H.current.radius+ie.deltaY*.005))};k.addEventListener("mousedown",Pe),window.addEventListener("mousemove",R),window.addEventListener("mouseup",w),k.addEventListener("wheel",X,{passive:!1});const se=()=>{if(!k||!d.current)return;const ie=k.clientWidth,ee=k.clientHeight;V.aspect=ie/ee,V.updateProjectionMatrix(),d.current.setSize(ie,ee)};return window.addEventListener("resize",se),()=>{cancelAnimationFrame(C.current),k.removeEventListener("mousedown",Pe),window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",w),k.removeEventListener("wheel",X),window.removeEventListener("resize",se),ne.dispose(),Lm.stopEngineSound()}},[t]),ue.useEffect(()=>{g.current&&g.current.color.set(r)},[r]),ue.useEffect(()=>{_.current&&(_.current.intensity=a?6.5:0)},[a]);const S=()=>{if(!t)return;u(!0),Lm.playEngineSound(t.vehicleType,t.maxSpeed);let k=0,G=1200;const q=Math.min(t.maxSpeed,140),J=8400,V=setInterval(()=>{k+=7,G+=450,k>=q&&(k=q,G=J,y("4"),clearInterval(V),setTimeout(()=>{u(!1),f(0),m(1200),y("N")},1500)),f(k),m(G),k>80?y("3"):k>40?y("2"):k>10&&y("1")},60)},E=k=>{k==="orbit"?H.current={theta:Math.PI/4,phi:Math.PI/3.5,radius:7.5}:k==="side"?H.current={theta:0,phi:Math.PI/2.3,radius:6.5}:k==="front"?H.current={theta:Math.PI/2,phi:Math.PI/2.3,radius:6.8}:k==="cockpit"&&(H.current={theta:Math.PI/4,phi:Math.PI/5,radius:4.2})};return t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-6xl h-[92vh] max-h-[880px] bg-[#0A0A0B] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row",children:[c.jsxs("div",{className:"relative flex-1 h-[55%] lg:h-full overflow-hidden bg-gradient-to-b from-[#0A0A0B] via-[#101014] to-[#0A0A0B]",children:[c.jsx("div",{ref:i,className:"w-full h-full cursor-grab active:cursor-grabbing"}),c.jsxs("div",{className:"absolute top-4 left-4 flex items-center space-x-2",children:[c.jsxs("div",{className:"px-3 py-1 rounded-full bg-[#141416]/90 border border-[#00E5C7]/40 text-[#00E5C7] text-xs font-bold flex items-center space-x-1.5 shadow-teal-glow",children:[c.jsx(Xh,{className:"w-3.5 h-3.5 animate-spin",style:{animationDuration:"6s"}}),c.jsx("span",{children:"360° Real-time 3D Studio"})]}),c.jsx("span",{className:"hidden sm:inline text-[11px] text-slate-400 bg-black/50 px-2.5 py-1 rounded-md",children:"Drag to rotate • Scroll to zoom"})]}),c.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center space-x-1.5 bg-[#141416]/80 p-1 rounded-xl border border-white/10 backdrop-blur-md",children:[c.jsx("button",{onClick:()=>E("orbit"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Perspective"}),c.jsx("button",{onClick:()=>E("side"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Side Aero"}),c.jsx("button",{onClick:()=>E("front"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Front Aggressive"}),c.jsx("button",{onClick:()=>E("cockpit"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Cockpit"})]}),c.jsxs("div",{className:"absolute top-4 right-4 flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>o(!a),className:`p-2.5 rounded-xl border transition ${a?"bg-[#00E5C7]/20 border-[#00E5C7] text-[#00E5C7] glow-teal":"bg-[#141416] border-white/10 text-slate-400"}`,title:"Toggle Headlight Beams",children:c.jsx(_1,{className:"w-4 h-4"})}),c.jsxs("button",{onClick:S,disabled:l,className:`flex items-center space-x-1.5 px-3 py-2 rounded-xl font-bold text-xs border transition ${l?"bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse":"bg-[#141416] border-white/10 hover:border-[#D4AF37] text-white"}`,children:[c.jsx(N1,{className:"w-4 h-4 text-[#D4AF37]"}),c.jsx("span",{children:l?"Revving Engine...":"Test Rev Sound"})]})]}),c.jsx("button",{onClick:e,className:"lg:hidden absolute top-4 left-auto right-4 p-2 rounded-full bg-black/60 text-white border border-white/10",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"w-full lg:w-[440px] h-[45%] lg:h-full bg-[#141416] border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[11px] font-bold uppercase tracking-widest text-[#00E5C7]",children:t.brand}),c.jsx("h2",{className:"text-2xl font-extrabold text-white font-display leading-tight",children:t.name}),c.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:t.model})]}),c.jsx("button",{onClick:e,className:"hidden lg:flex p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"mt-5 p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsxs("span",{className:"text-[10px] font-bold tracking-widest uppercase text-slate-400 flex items-center space-x-1",children:[c.jsx(Wh,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"Virtual Cockpit Simulation"})]}),c.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded bg-[#00E5C7]/10 text-[#00E5C7] border border-[#00E5C7]/20",children:"SIMULATION"})]}),c.jsxs("div",{className:"flex items-baseline justify-between pt-1",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsx("span",{className:"text-4xl font-extrabold font-mono text-white tracking-tight",children:h}),c.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"km/h"})]}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:["Top Speed: ",t.maxSpeed," km/h"]})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("span",{className:"text-lg font-mono font-bold text-[#00E5C7]",children:p.toLocaleString()}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"RPM Tachometer"})]})]}),c.jsx("div",{className:"w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden",children:c.jsx("div",{className:"h-full bg-gradient-to-r from-[#00E5C7] via-[#D4AF37] to-[#FF2D55] transition-all duration-100",style:{width:`${h/t.maxSpeed*100}%`}})}),c.jsxs("button",{onClick:S,disabled:l,className:"w-full mt-3 py-2 rounded-xl bg-white/5 hover:bg-[#00E5C7]/15 border border-white/10 hover:border-[#00E5C7]/50 text-xs font-bold text-white transition flex items-center justify-center space-x-2",children:[c.jsx(Zl,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("span",{children:["Throttle Launch (0-100 in ",t.zeroToHundred,"s)"]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-1",children:[c.jsx(M1,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Body Paint Finish"})]}),c.jsx("div",{className:"flex items-center space-x-2.5",children:qT.map(k=>c.jsx("button",{onClick:()=>s(k.hex),style:{backgroundColor:k.hex},className:`w-7 h-7 rounded-full transition-transform border ${r===k.hex?"scale-125 border-white ring-2 ring-[#00E5C7]":"border-white/20 hover:scale-110"}`,title:k.name},k.name))})]}),c.jsxs("div",{className:"mt-5 grid grid-cols-2 gap-2 text-xs",children:[c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Powertrain"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.engineOrBattery})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Transmission"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.transmission})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Mileage / Range"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.mileageOrRange})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Security Deposit"}),c.jsxs("p",{className:"font-bold text-white mt-0.5",children:["₹",t.securityDeposit.toLocaleString("en-IN")]})]})]})]}),c.jsxs("div",{className:"pt-5 border-t border-white/10",children:[c.jsx("div",{className:"flex items-center justify-between mb-3",children:c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Rental Rate"}),c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsxs("span",{className:"text-2xl font-extrabold font-display text-white",children:["₹",t.pricePerHour]}),c.jsx("span",{className:"text-xs text-slate-400",children:"/ hour"}),c.jsxs("span",{className:"text-xs text-[#00E5C7] ml-2 font-medium",children:["or ₹",t.pricePerDay," / day"]})]})]})}),c.jsxs("button",{onClick:()=>{e(),n(t)},className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsxs("span",{children:["Book ",t.name," Now"]}),c.jsx(za,{className:"w-4 h-4"})]})]})]})]})}):null},ZT=({vehicle:t,isOpen:e,onClose:n,onBook:i})=>{if(!e||!t)return null;let r=[];try{t.galleryImageUrls&&(r=JSON.parse(t.galleryImageUrls))}catch{r=[]}r.length===0&&(r=[t.imageUrl]);const s=["Front 3/4 (Hero)","Side Profile","Rear Perspective","Cockpit / Interior","Chassis & Engine"],[a,o]=ue.useState(0);return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in",children:c.jsxs("div",{className:"relative w-full max-w-5xl bg-[#141416] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]",children:[c.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0B]/80",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]",children:c.jsx(rg,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-[10px] uppercase tracking-widest font-semibold text-[#D4AF37]",children:"Production Vehicle Showcase"}),c.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold flex items-center space-x-1",children:[c.jsx(qi,{className:"w-3 h-3 inline mr-1"}),"Verified Real Indian Spec"]})]}),c.jsxs("h3",{className:"text-xl font-extrabold text-white font-display",children:[t.name," ",c.jsxs("span",{className:"text-[#00E5C7] text-sm font-normal",children:["(",t.model,")"]})]})]})]}),c.jsx("button",{onClick:n,className:"p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:[c.jsxs("div",{className:"lg:col-span-7 flex flex-col space-y-4",children:[c.jsxs("div",{className:"relative w-full aspect-[16/10] bg-[#0A0A0B] rounded-2xl overflow-hidden border border-white/10 group shadow-inner",children:[c.jsx("img",{src:r[a]||t.imageUrl,alt:`${t.name} - View ${a+1}`,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),c.jsxs("div",{className:"absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-white flex items-center space-x-1.5",children:[c.jsx(Cp,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:s[a]||`Angle ${a+1}`})]}),c.jsxs("div",{className:"absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] text-slate-300",children:[a+1," / ",r.length," Official Photos"]})]}),c.jsx("div",{className:"flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-thin",children:r.map((l,u)=>c.jsxs("button",{onClick:()=>o(u),className:`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition ${a===u?"border-[#00E5C7] shadow-teal-glow scale-105":"border-white/10 opacity-60 hover:opacity-100"}`,children:[c.jsx("img",{src:l,alt:`Thumbnail ${u+1}`,className:"w-full h-full object-cover"}),c.jsx("div",{className:"absolute bottom-0 inset-x-0 bg-black/80 py-0.5 text-[8px] text-center font-bold text-slate-300 truncate px-1",children:s[u]||`View ${u+1}`})]},u))}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B]/50 rounded-xl border border-white/5 text-[11px] text-slate-400 flex items-start space-x-2",children:[c.jsx(d1,{className:"w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-slate-300",children:"Zero AI-Generated Imagery:"})," TBH guarantees that every visual asset corresponds to authentic Indian production photography sourced from official manufacturer press kits and verified mobility partners."]})]})]}),c.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{className:"space-y-3",children:[c.jsx("h4",{className:"text-xs uppercase tracking-wider font-bold text-slate-400",children:"Indian-Market Production Specifications"}),c.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(Zl,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Peak Power"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono",children:t.powerBhp?`${t.powerBhp} BHP`:"Optimized"})]}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(Wh,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"Max Torque"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono",children:t.torqueNm?`${t.torqueNm} Nm`:"High Output"})]}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(ag,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsx("span",{children:"Efficiency / Range"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono truncate",children:t.mileageOrRange})]}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(Cp,{className:"w-3.5 h-3.5 text-cyan-400"}),c.jsx("span",{children:"Ground Clearance"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono",children:t.groundClearanceMm?`${t.groundClearanceMm} mm`:"Indian Standard"})]})]}),c.jsxs("div",{className:"p-3.5 bg-[#0A0A0B] rounded-xl border border-white/5 space-y-2",children:[c.jsx("p",{className:"text-[11px] font-semibold text-slate-300 uppercase tracking-wide",children:"Key Features"}),c.jsx("div",{className:"space-y-1.5",children:t.features.split(",").map((l,u)=>c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-300",children:[c.jsx(Ha,{className:"w-3.5 h-3.5 text-[#00E5C7] flex-shrink-0"}),c.jsx("span",{children:l.trim()})]},u))})]}),c.jsxs("div",{className:"p-3.5 bg-gradient-to-br from-[#0A0A0B] to-[#1a1a20] rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Hourly Rate"}),c.jsxs("span",{className:"font-bold text-white font-mono",children:["₹",t.pricePerHour," / hr"]})]}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Daily Rate"}),c.jsxs("span",{className:"font-bold text-white font-mono",children:["₹",t.pricePerDay," / day"]})]}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Refundable Deposit"}),c.jsxs("span",{className:"font-bold text-emerald-400 font-mono",children:["₹",t.securityDeposit]})]})]})]}),c.jsx("div",{className:"pt-2 flex items-center space-x-3",children:c.jsxs("button",{onClick:()=>{n(),i(t)},className:"flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsxs("span",{children:["Reserve ",t.name]}),c.jsx(za,{className:"w-4 h-4"})]})})]})]})]})})};var cf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),A=N.getContext("2d");A.fillRect(0,0,1,1);var re=N.transferToImageBitmap();A.createPattern(re,"no-repeat")}catch{return!1}return!0}();function l(){}function u(N){var A=n.exports.Promise,re=A!==void 0?A:e.Promise;return typeof re=="function"?new re(N):(N(l,l),null)}var h=function(N,A){return{transform:function(re){if(N)return re;if(A.has(re))return A.get(re);var Q=new OffscreenCanvas(re.width,re.height),F=Q.getContext("2d");return F.drawImage(re,0,0),A.set(re,Q),Q},clear:function(){A.clear()}}}(o,new Map),f=function(){var N=Math.floor(16.666666666666668),A,re,Q={},F=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(K){var B=Math.random();return Q[B]=requestAnimationFrame(function W(oe){F===oe||F+N-1<oe?(F=oe,delete Q[B],K()):Q[B]=requestAnimationFrame(W)}),B},re=function(K){Q[K]&&cancelAnimationFrame(Q[K])}):(A=function(K){return setTimeout(K,N)},re=function(K){return clearTimeout(K)}),{frame:A,cancel:re}}(),p=function(){var N,A,re={};function Q(F){function K(B,W){F.postMessage({options:B||{},callback:W})}F.init=function(W){var oe=W.transferControlToOffscreen();F.postMessage({canvas:oe},[oe])},F.fire=function(W,oe,he){if(A)return K(W,null),A;var be=Math.random().toString(36).slice(2);return A=u(function(xe){function Te(D){D.data.callback===be&&(delete re[be],F.removeEventListener("message",Te),A=null,h.clear(),he(),xe())}F.addEventListener("message",Te),K(W,be),re[be]=Te.bind(null,{data:{callback:be}})}),A},F.reset=function(){F.postMessage({reset:!0});for(var W in re)re[W](),delete re[W]}}return function(){if(N)return N;if(!i&&s){var F=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([F])))}catch(K){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",K),null}Q(N)}return N}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(N,A){return A?A(N):N}function y(N){return N!=null}function x(N,A,re){return v(N&&y(N[A])?N[A]:m[A],re)}function d(N){return N<0?0:Math.floor(N)}function g(N,A){return Math.floor(Math.random()*(A-N))+N}function _(N){return parseInt(N,16)}function M(N){return N.map(P)}function P(N){var A=String(N).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:_(A.substring(0,2)),g:_(A.substring(2,4)),b:_(A.substring(4,6))}}function C(N){var A=x(N,"origin",Object);return A.x=x(A,"x",Number),A.y=x(A,"y",Number),A}function T(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function L(N){var A=N.getBoundingClientRect();N.width=A.width,N.height=A.height}function H(N){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=N,A}function S(N,A,re,Q,F,K,B,W,oe){N.save(),N.translate(A,re),N.rotate(K),N.scale(Q,F),N.arc(0,0,1,B,W,oe),N.restore()}function E(N){var A=N.angle*(Math.PI/180),re=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-A+(.5*re-Math.random()*re),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function k(N,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var re=A.tick++/A.totalTicks,Q=A.x+A.random*A.tiltCos,F=A.y+A.random*A.tiltSin,K=A.wobbleX+A.random*A.tiltCos,B=A.wobbleY+A.random*A.tiltSin;if(N.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-re)+")",N.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))N.fill(ne(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(K-Q)*.1,Math.abs(B-F)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var W=Math.PI/10*A.wobble,oe=Math.abs(K-Q)*.1,he=Math.abs(B-F)*.1,be=A.shape.bitmap.width*A.scalar,xe=A.shape.bitmap.height*A.scalar,Te=new DOMMatrix([Math.cos(W)*oe,Math.sin(W)*oe,-Math.sin(W)*he,Math.cos(W)*he,A.x,A.y]);Te.multiplySelf(new DOMMatrix(A.shape.matrix));var D=N.createPattern(h.transform(A.shape.bitmap),"no-repeat");D.setTransform(Te),N.globalAlpha=1-re,N.fillStyle=D,N.fillRect(A.x-be/2,A.y-xe/2,be,xe),N.globalAlpha=1}else if(A.shape==="circle")N.ellipse?N.ellipse(A.x,A.y,Math.abs(K-Q)*A.ovalScalar,Math.abs(B-F)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):S(N,A.x,A.y,Math.abs(K-Q)*A.ovalScalar,Math.abs(B-F)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var Ue=Math.PI/2*3,ke=4*A.scalar,ze=8*A.scalar,Ce=A.x,Xe=A.y,Pe=5,R=Math.PI/Pe;Pe--;)Ce=A.x+Math.cos(Ue)*ze,Xe=A.y+Math.sin(Ue)*ze,N.lineTo(Ce,Xe),Ue+=R,Ce=A.x+Math.cos(Ue)*ke,Xe=A.y+Math.sin(Ue)*ke,N.lineTo(Ce,Xe),Ue+=R;else N.moveTo(Math.floor(A.x),Math.floor(A.y)),N.lineTo(Math.floor(A.wobbleX),Math.floor(F)),N.lineTo(Math.floor(K),Math.floor(B)),N.lineTo(Math.floor(Q),Math.floor(A.wobbleY));return N.closePath(),N.fill(),A.tick<A.totalTicks}function G(N,A,re,Q,F){var K=A.slice(),B=N.getContext("2d"),W,oe,he=u(function(be){function xe(){W=oe=null,B.clearRect(0,0,Q.width,Q.height),h.clear(),F(),be()}function Te(){i&&!(Q.width===r.width&&Q.height===r.height)&&(Q.width=N.width=r.width,Q.height=N.height=r.height),!Q.width&&!Q.height&&(re(N),Q.width=N.width,Q.height=N.height),B.clearRect(0,0,Q.width,Q.height),K=K.filter(function(D){return k(B,D)}),K.length?W=f.frame(Te):xe()}W=f.frame(Te),oe=xe});return{addFettis:function(be){return K=K.concat(be),he},canvas:N,promise:he,reset:function(){W&&f.cancel(W),oe&&oe()}}}function q(N,A){var re=!N,Q=!!x(A||{},"resize"),F=!1,K=x(A,"disableForReducedMotion",Boolean),B=s&&!!x(A||{},"useWorker"),W=B?p():null,oe=re?T:L,he=N&&W?!!N.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,xe;function Te(Ue,ke,ze){for(var Ce=x(Ue,"particleCount",d),Xe=x(Ue,"angle",Number),Pe=x(Ue,"spread",Number),R=x(Ue,"startVelocity",Number),w=x(Ue,"decay",Number),X=x(Ue,"gravity",Number),se=x(Ue,"drift",Number),ie=x(Ue,"colors",M),ee=x(Ue,"ticks",Number),we=x(Ue,"shapes"),fe=x(Ue,"scalar"),_e=!!x(Ue,"flat"),He=C(Ue),le=Ce,ge=[],De=N.width*He.x,Ie=N.height*He.y;le--;)ge.push(E({x:De,y:Ie,angle:Xe,spread:Pe,startVelocity:R,color:ie[le%ie.length],shape:we[g(0,we.length)],ticks:ee,decay:w,gravity:X,drift:se,scalar:fe,flat:_e}));return xe?xe.addFettis(ge):(xe=G(N,ge,oe,ke,ze),xe.promise)}function D(Ue){var ke=K||x(Ue,"disableForReducedMotion",Boolean),ze=x(Ue,"zIndex",Number);if(ke&&be)return u(function(R){R()});re&&xe?N=xe.canvas:re&&!N&&(N=H(ze),document.body.appendChild(N)),Q&&!he&&oe(N);var Ce={width:N.width,height:N.height};W&&!he&&W.init(N),he=!0,W&&(N.__confetti_initialized=!0);function Xe(){if(W){var R={getBoundingClientRect:function(){if(!re)return N.getBoundingClientRect()}};oe(R),W.postMessage({resize:{width:R.width,height:R.height}});return}Ce.width=Ce.height=null}function Pe(){xe=null,Q&&(F=!1,e.removeEventListener("resize",Xe)),re&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,he=!1)}return Q&&!F&&(F=!0,e.addEventListener("resize",Xe,!1)),W?W.fire(Ue,Ce,Pe):Te(Ue,Ce,Pe)}return D.reset=function(){W&&W.reset(),xe&&xe.reset()},D}var J;function V(){return J||(J=q(null,{useWorker:!0,resize:!0})),J}function ne(N,A,re,Q,F,K,B){var W=new Path2D(N),oe=new Path2D;oe.addPath(W,new DOMMatrix(A));var he=new Path2D;return he.addPath(oe,new DOMMatrix([Math.cos(B)*F,Math.sin(B)*F,-Math.sin(B)*K,Math.cos(B)*K,re,Q])),he}function I(N){if(!a)throw new Error("path confetti are not supported in this browser");var A,re;typeof N=="string"?A=N:(A=N.path,re=N.matrix);var Q=new Path2D(A),F=document.createElement("canvas"),K=F.getContext("2d");if(!re){for(var B=1e3,W=B,oe=B,he=0,be=0,xe,Te,D=0;D<B;D+=2)for(var Ue=0;Ue<B;Ue+=2)K.isPointInPath(Q,D,Ue,"nonzero")&&(W=Math.min(W,D),oe=Math.min(oe,Ue),he=Math.max(he,D),be=Math.max(be,Ue));xe=he-W,Te=be-oe;var ke=10,ze=Math.min(ke/xe,ke/Te);re=[ze,0,0,ze,-Math.round(xe/2+W)*ze,-Math.round(Te/2+oe)*ze]}return{type:"path",path:A,matrix:re}}function te(N){var A,re=1,Q="#000000",F='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?A=N:(A=N.text,re="scalar"in N?N.scalar:re,F="fontFamily"in N?N.fontFamily:F,Q="color"in N?N.color:Q);var K=10*re,B=""+K+"px "+F,W=new OffscreenCanvas(K,K),oe=W.getContext("2d");oe.font=B;var he=oe.measureText(A),be=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),xe=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),Te=2,D=he.actualBoundingBoxLeft+Te,Ue=he.actualBoundingBoxAscent+Te;be+=Te+Te,xe+=Te+Te,W=new OffscreenCanvas(be,xe),oe=W.getContext("2d"),oe.font=B,oe.fillStyle=Q,oe.fillText(A,D,Ue);var ke=1/re;return{type:"bitmap",bitmap:W.transferToImageBitmap(),matrix:[ke,0,0,ke,-be*ke/2,-xe*ke/2]}}n.exports=function(){return V().apply(this,arguments)},n.exports.reset=function(){V().reset()},n.exports.create=q,n.exports.shapeFromPath=I,n.exports.shapeFromText=te})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),cf,!1);const JT=cf.exports;cf.exports.create;const yv=[{id:1,name:"Bengaluru",state:"Karnataka",active:!0,hubs:[{id:101,name:"Kempegowda Intl Airport (BLR)",address:"Terminal 1 & 2 Mobility Zone",landmark:"Near Arrival Gate 4",hubType:"AIRPORT"},{id:102,name:"Indiranagar Hub",address:"100 Feet Road, 12th Main",landmark:"Opposite Toit Brewery",hubType:"CITY_CENTER"},{id:103,name:"Koramangala Hub",address:"80 Feet Road, 4th Block",landmark:"Near Sony World Signal",hubType:"CITY_CENTER"},{id:104,name:"Whitefield IT Hub",address:"ITPL Main Road",landmark:"Next to Nexus Shantiniketan",hubType:"TECH_PARK"}]},{id:2,name:"Hyderabad",state:"Telangana",active:!0,hubs:[{id:201,name:"Rajiv Gandhi Intl Airport (HYD)",address:"Shamshabad Aeroplaza",landmark:"Arrival Bay 3",hubType:"AIRPORT"},{id:202,name:"Hitech City Hub",address:"Cyber Towers Outer Ring",landmark:"Near Shilparamam Metro",hubType:"TECH_PARK"},{id:203,name:"Gachibowli Hub",address:"Financial District Main Circle",landmark:"Near DLF Cyber City",hubType:"TECH_PARK"},{id:204,name:"Jubilee Hills Hub",address:"Road No 36",landmark:"Metro Pillar 140",hubType:"CITY_CENTER"}]},{id:3,name:"Mumbai",state:"Maharashtra",active:!0,hubs:[{id:301,name:"Chhatrapati Shivaji Intl Airport (BOM)",address:"Terminal 2 Ground Transportation",landmark:"P4 Parking Level",hubType:"AIRPORT"},{id:302,name:"Bandra Kurla Complex (BKC)",address:"G Block, BKC",landmark:"Near Jio World Drive",hubType:"TECH_PARK"},{id:303,name:"South Mumbai Hub",address:"Nariman Point Marine Drive",landmark:"Opposite Air India Bldg",hubType:"CITY_CENTER"}]},{id:4,name:"Delhi NCR",state:"Delhi",active:!0,hubs:[{id:401,name:"Indira Gandhi Intl Airport (DEL)",address:"Terminal 3 Multi-Level Hub",landmark:"P3 Car Park",hubType:"AIRPORT"},{id:402,name:"Cyber Hub Gurugram",address:"DLF Cyber City Phase 2",landmark:"Near Rapid Metro",hubType:"TECH_PARK"},{id:403,name:"Connaught Place Hub",address:"Inner Circle Block E",landmark:"Near Rajiv Chowk Metro",hubType:"CITY_CENTER"}]},{id:5,name:"Chennai",state:"Tamil Nadu",active:!0,hubs:[{id:501,name:"Chennai Intl Airport (MAA)",address:"Meenambakkam Terminal 2",landmark:"Aerohub Level 1",hubType:"AIRPORT"},{id:502,name:"T. Nagar Hub",address:"GN Chetty Road",landmark:"Opposite Panagal Park",hubType:"CITY_CENTER"},{id:503,name:"OMR IT Corridor",address:"Thoraipakkam Toll Gate",landmark:"Near Ascendas IT Park",hubType:"TECH_PARK"}]},{id:6,name:"Goa",state:"Goa",active:!0,hubs:[{id:601,name:"Manohar Intl Airport Mopa (GOX)",address:"North Goa Terminal",landmark:"Pickup Zone A",hubType:"AIRPORT"},{id:602,name:"Dabolim Airport (GOI)",address:"South Goa Terminal",landmark:"Arrival Exit 2",hubType:"AIRPORT"},{id:603,name:"Calangute Beach Hub",address:"Tito's Lane Junction",landmark:"Near St. Anthony Chapel",hubType:"CITY_CENTER"},{id:604,name:"Panaji Waterfront Hub",address:"Miramar Circle",landmark:"Near Dayanand Bandodkar Marg",hubType:"CITY_CENTER"}]},{id:7,name:"Pune",state:"Maharashtra",active:!0,hubs:[{id:701,name:"Pune Airport (PNQ)",address:"Lohegaon Terminal",landmark:"Arrival Bay 2",hubType:"AIRPORT"},{id:702,name:"Hinjawadi IT Hub",address:"Phase 1 Circle",landmark:"Next to Infosys Gate 1",hubType:"TECH_PARK"},{id:703,name:"Koregaon Park Hub",address:"North Main Road",landmark:"Lane 5 Corner",hubType:"CITY_CENTER"}]},{id:8,name:"Jaipur",state:"Rajasthan",active:!0,hubs:[{id:801,name:"Jaipur Intl Airport (JAI)",address:"Terminal 2 Pickups",landmark:"Gate 3",hubType:"AIRPORT"},{id:802,name:"MI Road Hub",address:"Panch Batti Circle",landmark:"Near Raj Mandir",hubType:"CITY_CENTER"}]}],Kd=[{id:1,name:"Royal Enfield Classic 350",brand:"Royal Enfield",model:"Reborn Stealth Black",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349cc J-Series",maxSpeed:115,zeroToHundred:12.5,pricePerHour:119,pricePerDay:999,pricePerMonth:18999,securityDeposit:2e3,mileageOrRange:"38 km/l",rating:4.94,tripsCompleted:342,imageUrl:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80",colorHex:"#1C1C1E",available:!0,features:"Dual Channel ABS,Thumping Exhaust,Comfort Touring Seats,Digi-Analog Console,Complimentary Helmets",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:2,name:"Royal Enfield Hunter 350",brand:"Royal Enfield",model:"Rebel Blue/Black",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349cc Single Cylinder",maxSpeed:114,zeroToHundred:11.8,pricePerHour:99,pricePerDay:849,pricePerMonth:16999,securityDeposit:1500,mileageOrRange:"36 km/l",rating:4.88,tripsCompleted:418,imageUrl:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Agile City Geometry,Dual Disc ABS,Lightweight Chassis,USB Fast Charger,Dual Helmets Included",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:3,name:"KTM Duke 390",brand:"KTM",model:"Gen-3 Electronic Orange",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"399cc Liquid Cooled (45 HP)",maxSpeed:167,zeroToHundred:5.4,pricePerHour:149,pricePerDay:1299,pricePerMonth:24999,securityDeposit:3e3,mileageOrRange:"28 km/l",rating:4.96,tripsCompleted:289,imageUrl:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&auto=format&fit=crop&q=80",colorHex:"#FF6600",available:!0,features:"Quickshifter+,Launch Control,Cornering ABS,TFT Display with Bluetooth,Track Mode",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:4,name:"Yamaha MT-15 V2",brand:"Yamaha",model:"Cyber Green Deluxe",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"155cc VVA Liquid Cooled",maxSpeed:130,zeroToHundred:8.2,pricePerHour:89,pricePerDay:749,pricePerMonth:14999,securityDeposit:1500,mileageOrRange:"45 km/l",rating:4.91,tripsCompleted:520,imageUrl:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Upside Down USD Forks,Traction Control System,Assist & Slipper Clutch,Y-Connect Bluetooth",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:5,name:"Honda Activa 6G",brand:"Honda",model:"Smart Pearl Siren Blue",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"109.5cc PGM-FI HET",maxSpeed:85,zeroToHundred:14.8,pricePerHour:49,pricePerDay:399,pricePerMonth:7999,securityDeposit:1e3,mileageOrRange:"50 km/l",rating:4.85,tripsCompleted:890,imageUrl:"https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=80",colorHex:"#D4AF37",available:!0,features:"Smart Keyless Start,Silent Start ACG,External Fuel Cap,Telescopic Suspension,Underseat Storage",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:6,name:"TVS Jupiter 125",brand:"TVS",model:"SmartXonnect Disc",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"124.8cc ETFi Engine",maxSpeed:92,zeroToHundred:13.5,pricePerHour:55,pricePerDay:449,pricePerMonth:8999,securityDeposit:1e3,mileageOrRange:"48 km/l",rating:4.87,tripsCompleted:640,imageUrl:"https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Huge 33L Twin Helmet Boot,Front Fuel Filling,Voice Assist Navigation,USB Mobile Charger",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:7,name:"Ola S1 Pro Gen 2",brand:"Ola Electric",model:"Midnight Blue Flagship",vehicleType:"ELECTRIC_BIKE",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:2,engineOrBattery:"4.0 kWh Battery (11 kW Motor)",maxSpeed:120,zeroToHundred:6.7,pricePerHour:69,pricePerDay:549,pricePerMonth:10999,securityDeposit:1500,mileageOrRange:"195 km/charge",rating:4.89,tripsCompleted:720,imageUrl:"https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Hyper Mode 0-40 in 2.6s,Touchscreen Navigation,Built-in Stereo Speakers,Cruise Control,Reverse Mode",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:8,name:"Ather 450X Gen 3",brand:"Ather Energy",model:"Space Grey Warp",vehicleType:"ELECTRIC_BIKE",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:2,engineOrBattery:"3.7 kWh IP67 Battery (6.4 kW)",maxSpeed:90,zeroToHundred:7.5,pricePerHour:75,pricePerDay:599,pricePerMonth:11999,securityDeposit:1500,mileageOrRange:"150 km/charge",rating:4.95,tripsCompleted:560,imageUrl:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",colorHex:"#D4AF37",available:!0,features:"Warp Mode,Google Maps Live Dashboard,AutoHold Hill Assist,TrueRange Indicator,Ather Grid Fast Charging",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:9,name:"Ultraviolette F77 Mach 2",brand:"Ultraviolette",model:"Recon Plasma Red",vehicleType:"ELECTRIC_BIKE",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:2,engineOrBattery:"10.3 kWh Battery (40.2 HP)",maxSpeed:155,zeroToHundred:2.8,pricePerHour:229,pricePerDay:1999,pricePerMonth:38999,securityDeposit:4e3,mileageOrRange:"323 km/charge",rating:4.98,tripsCompleted:140,imageUrl:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&auto=format&fit=crop&q=80",colorHex:"#FF2D55",available:!0,features:"India's Fastest Electric Superbike,Ballistic Mode,Regenerative 10-Level Braking,Violette A.I. Telemetry",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:10,name:"Maruti Suzuki Swift",brand:"Maruti Suzuki",model:"ZXi+ Dual Tone",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"MANUAL",seats:5,engineOrBattery:"1.2L Z-Series Dual VVT",maxSpeed:150,zeroToHundred:11.2,pricePerHour:129,pricePerDay:1299,pricePerMonth:23999,securityDeposit:3e3,mileageOrRange:"24.8 km/l",rating:4.88,tripsCompleted:780,imageUrl:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Wireless Apple CarPlay & Android Auto,6 Airbags Standard,Fastag Enabled,Keyless Entry,Push Button Start",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:11,name:"Hyundai Creta SX Petrol",brand:"Hyundai",model:"Knight Edition Black",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.5L Smartstream MPi",maxSpeed:170,zeroToHundred:10.5,pricePerHour:219,pricePerDay:2199,pricePerMonth:39999,securityDeposit:5e3,mileageOrRange:"17.4 km/l",rating:4.93,tripsCompleted:610,imageUrl:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",colorHex:"#141416",available:!0,features:"Panoramic Sunroof,Bose Premium 8-Speaker Audio,Ventilated Seats,Level 2 ADAS,Wireless Phone Charger",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:12,name:"Mahindra Thar 4x4 Diesel",brand:"Mahindra",model:"LX Hard Top Diesel AT",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"AUTOMATIC",seats:4,engineOrBattery:"2.2L mHawk Diesel (130 BHP)",maxSpeed:155,zeroToHundred:10.2,pricePerHour:279,pricePerDay:2699,pricePerMonth:49999,securityDeposit:6e3,mileageOrRange:"15.2 km/l",rating:4.97,tripsCompleted:840,imageUrl:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=80",colorHex:"#D4AF37",available:!0,features:"Authentic Shift-on-the-fly 4x4 Low/High,Mechanical Locking Differential,Drizzle Washable Interior,Adventure Monitor",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:13,name:"Toyota Fortuner 4x4 Diesel",brand:"Toyota",model:"Legender 4x4 AT",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"AUTOMATIC",seats:7,engineOrBattery:"2.8L Turbo Diesel (201 BHP)",maxSpeed:180,zeroToHundred:9.8,pricePerHour:449,pricePerDay:4499,pricePerMonth:89999,securityDeposit:1e4,mileageOrRange:"14.4 km/l",rating:4.99,tripsCompleted:430,imageUrl:"https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",colorHex:"#FFFFFF",available:!0,features:"King of the Highway,7-Seater Luxury,Sequential LED Headlamps,Downhill Assist Control DAC,JBL 11-Speaker Audio",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:14,name:"Tata Nexon EV Max",brand:"Tata Motors",model:"Empowered+ Long Range",vehicleType:"ELECTRIC_CAR",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:5,engineOrBattery:"40.5 kWh High Density Battery",maxSpeed:140,zeroToHundred:8.9,pricePerHour:229,pricePerDay:2199,pricePerMonth:41999,securityDeposit:5e3,mileageOrRange:"453 km/charge",rating:4.94,tripsCompleted:512,imageUrl:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Zero Emission City & Highway,12.3-inch Cinematic Display,V2V & V2L Power Sharing,Paddle Multi-Mode Regen",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"}],si="/api";function Qs(){const t=localStorage.getItem("tbh_token"),e={"Content-Type":"application/json"};return t&&(e.Authorization=`Bearer ${t}`),e}const Ia={async getCities(){try{const t=await fetch(`${si}/locations/cities`);if(t.ok)return await t.json()}catch{}return yv},async getVehicles(t,e,n){try{const i=new URLSearchParams;t&&t!=="ALL"&&i.append("city",t),e&&e!=="ALL"&&i.append("type",e),n&&n!=="ALL"&&i.append("fuel",n);const r=await fetch(`${si}/vehicles?${i.toString()}`);if(r.ok){const s=await r.json();if(Array.isArray(s)&&s.length>0)return s}}catch{}return Kd.filter(i=>!(t&&t!=="ALL"&&!i.cityNames.toLowerCase().includes(t.toLowerCase())||e&&e!=="ALL"&&i.vehicleType!==e||n&&n!=="ALL"&&i.fuelType!==n))},async getVehicleById(t){try{const e=await fetch(`${si}/vehicles/${t}`);if(e.ok)return await e.json()}catch{}return Kd.find(e=>e.id===t)},async getPricingQuote(t){const e=await fetch(`${si}/pricing/quote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){const n=await e.json().catch(()=>({}));throw new Error(n.message||"Failed to fetch authoritative price quote")}return await e.json()},async createBooking(t){const e=await fetch(`${si}/bookings`,{method:"POST",headers:Qs(),body:JSON.stringify(t)});if(e.status===409){const r=await e.json().catch(()=>({}));throw new Error(r.message||"This vehicle is already reserved for the selected timeframe. Please pick different timings or an alternative vehicle.")}if(!e.ok){const r=await e.json().catch(()=>({}));throw new Error(r.message||"Booking reservation could not be completed.")}const n=await e.json(),i=JSON.parse(localStorage.getItem("tbh_bookings")||"[]");return localStorage.setItem("tbh_bookings",JSON.stringify([n,...i])),n},async getMyBookings(t){try{const e=await fetch(`${si}/bookings/my/${t}`,{headers:Qs()});if(e.ok)return await e.json()}catch{}return JSON.parse(localStorage.getItem("tbh_bookings")||"[]")},async cancelBooking(t,e){const n=await fetch(`${si}/bookings/${t}/cancel?userId=${e}`,{method:"POST",headers:Qs()});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.message||"Failed to cancel reservation")}return await n.json()},async getAdminMetrics(){const t=await fetch(`${si}/admin/metrics`,{headers:Qs()});if(!t.ok)throw new Error("Admin authorization required");return await t.json()},async getAllAdminBookings(){const t=await fetch(`${si}/admin/bookings`,{headers:Qs()});if(!t.ok)throw new Error("Admin authorization required");return await t.json()}},QT=({vehicle:t,cities:e,selectedCity:n,onClose:i,onBookingSuccess:r})=>{var A,re;const{user:s,isAuthenticated:a}=Jl(),o=e.find(Q=>Q.name===n)||e[0],l=o?o.hubs:[],[u,h]=ue.useState(((A=l[0])==null?void 0:A.name)||"Kempegowda Intl Airport (BLR)"),[f,p]=ue.useState(((re=l[0])==null?void 0:re.name)||"Kempegowda Intl Airport (BLR)"),[m,v]=ue.useState("HOURLY"),[y,x]=ue.useState(m==="HOURLY"?6:m==="DAILY"?2:1),[d,g]=ue.useState(!0),[_,M]=ue.useState((t==null?void 0:t.vehicleType.includes("CAR"))||!1),[P,C]=ue.useState("UPI"),[T,L]=ue.useState(!1),[H,S]=ue.useState(null),[E,k]=ue.useState(null);if(!t)return null;ue.useEffect(()=>{let Q=!0;return k(null),Ia.getPricingQuote({vehicleId:t.id,rentalMode:m,duration:y,insurancePlan:d?"ZERO_DEPRECIATION":"PREMIUM"}).then(F=>{Q&&S(F)}).catch(F=>{}),()=>{Q=!1}},[t.id,m,y,d]);const G=t.vehicleType.includes("CAR"),q=H?H.baseAmount:m==="HOURLY"?t.pricePerHour*y:m==="DAILY"?t.pricePerDay*y:t.pricePerMonth*y,J=H?H.discountAmount:0,V=H?H.insuranceAmount:G?299:99,ne=H?H.gstAmount:Math.round((q+V)*.18),I=H?H.securityDeposit:t.securityDeposit,te=H?H.totalAmount:q+V+ne+I,N=async Q=>{Q.preventDefault(),L(!0),k(null);try{const F={userId:(s==null?void 0:s.id)||1,vehicleId:t.id,pickupCity:n,pickupHub:u,dropHub:f,rentalMode:m,duration:y,includeZeroDep:d,includeFastag:_,paymentMethod:P==="UPI"?"Razorpay UPI - GPay / PhonePe":"Razorpay Secure Card"},K=await Ia.createBooking(F);JT({particleCount:80,spread:70,origin:{y:.6}}),L(!1),r(K)}catch(F){L(!1),k(F.message||"Vehicle reservation could not be processed.")}};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-2xl max-h-[92vh] bg-[#141416] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl flex flex-col justify-between",children:[c.jsxs("div",{className:"sticky top-0 z-10 bg-[#141416]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7] font-bold",children:"TBH"}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-base font-extrabold text-white font-display",children:"Instant Reservation"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Locked with Razorpay Secure Gateway"})]})]}),c.jsx("button",{onClick:i,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"flex items-center space-x-4 p-3.5 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-20 h-16 object-cover rounded-xl border border-white/10"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("span",{className:"text-[10px] font-bold text-[#00E5C7] uppercase",children:t.brand}),c.jsx("h4",{className:"text-sm font-bold text-white truncate",children:t.name}),c.jsxs("p",{className:"text-xs text-slate-400",children:[t.model," • ",t.fuelType," • ",t.maxSpeed," km/h"]})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("span",{className:"text-sm font-extrabold font-display text-white",children:["₹",t.pricePerHour]}),c.jsx("span",{className:"text-[10px] text-slate-400",children:"/hr"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2",children:"Rental Duration Mode"}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:["HOURLY","DAILY","MONTHLY"].map(Q=>c.jsx("button",{type:"button",onClick:()=>{v(Q),x(Q==="HOURLY"?6:Q==="DAILY"?2:1)},className:`py-2.5 rounded-xl border text-xs font-bold transition ${m===Q?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7] glow-teal":"bg-[#0A0A0B] border-white/10 text-slate-400 hover:text-white"}`,children:Q},Q))}),c.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between",children:[c.jsxs("span",{className:"text-xs font-semibold text-slate-300",children:["Duration: ",c.jsxs("strong",{className:"text-[#00E5C7] font-mono text-sm",children:[y," ",m.toLowerCase(),y>1?"s":""]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{type:"button",onClick:()=>x(Math.max(1,y-1)),className:"w-7 h-7 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center hover:bg-white/20",children:"-"}),c.jsx("button",{type:"button",onClick:()=>x(y+1),className:"w-7 h-7 rounded-lg bg-[#00E5C7] text-black font-bold flex items-center justify-center hover:opacity-90",children:"+"})]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1",children:["Pickup Hub (",n,")"]}),c.jsx("select",{value:u,onChange:Q=>h(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:l.map(Q=>c.jsx("option",{value:Q.name,children:Q.name},Q.id))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1",children:"Drop-off Hub"}),c.jsx("select",{value:f,onChange:Q=>p(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:l.map(Q=>c.jsx("option",{value:Q.name,children:Q.name},Q.id))})]})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300",children:"Protection & Add-ons"}),c.jsxs("div",{onClick:()=>g(!d),className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#00E5C7]/40 transition",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx(qi,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"Zero Depreciation Damage Waiver"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Zero liability for accidental scratches or minor dents"})]})]}),c.jsx("span",{className:"text-xs font-bold text-[#00E5C7]",children:d?`+₹${G?250:120}`:"Add"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx(Ha,{className:"w-4 h-4 text-emerald-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"Complimentary Helmets & 24/7 Roadside SOS"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"2 sanitized ISI helmets included with every bike"})]})]}),c.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"FREE"})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsxs("span",{children:["Base Rent (",y," ",m.toLowerCase(),")"]}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",q.toLocaleString("en-IN")]})]}),J>0&&c.jsxs("div",{className:"flex justify-between text-xs text-emerald-400 font-semibold",children:[c.jsx("span",{children:"Multi-Day Duration Discount"}),c.jsxs("span",{className:"font-mono",children:["-₹",J.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsx("span",{children:d?"Zero-Dep Insurance Protection":"Standard Insurance"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",V]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsx("span",{children:"GST (18% Indian Tax)"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",ne.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-400 border-b border-white/10 pb-2",children:[c.jsx("span",{children:"Refundable Security Deposit (Returned on drop)"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",I.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between items-baseline pt-1",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm font-extrabold text-white",children:"Total Payable Amount"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Includes 100% refundable deposit"})]}),c.jsxs("span",{className:"text-2xl font-extrabold font-display text-[#00E5C7]",children:["₹",te.toLocaleString("en-IN")]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2",children:"Payment Method (Razorpay India)"}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsxs("button",{type:"button",onClick:()=>C("UPI"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${P==="UPI"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(T1,{className:"w-4 h-4"}),c.jsx("span",{children:"UPI / QR"})]}),c.jsxs("button",{type:"button",onClick:()=>C("CARD"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${P==="CARD"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(p1,{className:"w-4 h-4"}),c.jsx("span",{children:"Card"})]}),c.jsxs("button",{type:"button",onClick:()=>C("NETBANKING"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${P==="NETBANKING"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(Mg,{className:"w-4 h-4"}),c.jsx("span",{children:"NetBanking"})]})]})]})]}),E&&c.jsxs("div",{className:"mx-6 my-3 p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs flex items-center space-x-2.5 animate-in fade-in",children:[c.jsx(C1,{className:"w-4 h-4 text-rose-400 flex-shrink-0"}),c.jsx("p",{className:"font-semibold",children:E})]}),c.jsx("div",{className:"sticky bottom-0 bg-[#141416]/95 backdrop-blur-md px-6 py-4 border-t border-white/10",children:c.jsx("button",{onClick:N,disabled:T,className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:T?c.jsx("span",{children:"Confirming Reservation..."}):c.jsxs(c.Fragment,{children:[c.jsx(Kl,{className:"w-4 h-4"}),c.jsxs("span",{children:["Pay ₹",te.toLocaleString("en-IN")," & Generate Rental Pass"]}),c.jsx(za,{className:"w-4 h-4"})]})})})]})})},eA=({booking:t,onClose:e})=>t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-xl bg-[#141416] border border-[#00E5C7]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col",children:[c.jsxs("div",{className:"bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] p-5 text-black flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx(Ha,{className:"w-6 h-6 stroke-[2.5]"}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-lg leading-tight",children:"Rental Confirmed!"}),c.jsx("p",{className:"text-xs font-semibold opacity-90",children:"Digital Boarding Pass & Keyless Voucher"})]})]}),c.jsx("button",{onClick:e,className:"p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-black transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] uppercase font-bold tracking-widest text-slate-400",children:"Booking Reference"}),c.jsx("p",{className:"text-xl font-extrabold font-mono text-[#00E5C7]",children:t.bookingReference}),c.jsxs("p",{className:"text-xs text-slate-300 mt-1",children:[t.vehicle.name," (",t.vehicle.model,")"]})]}),c.jsxs("div",{className:"flex flex-col items-center p-2 rounded-xl bg-white text-black shadow-lg",children:[c.jsx(Mg,{className:"w-20 h-20 text-black"}),c.jsx("span",{className:"text-[9px] font-mono font-bold tracking-wider mt-0.5",children:"HUB-SCAN-PASS"})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-gradient-to-r from-[#141416] via-[#1C1C22] to-[#141416] border border-[#D4AF37]/50 flex items-center justify-between shadow-gold-glow",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]",children:c.jsx(v1,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]",children:"Vehicle Smart Unlock PIN"}),c.jsx("p",{className:"text-xs text-slate-300",children:"Enter on smart console or show hub agent"})]})]}),c.jsx("span",{className:"text-2xl font-mono font-black text-white tracking-widest bg-black/60 px-3 py-1.5 rounded-xl border border-white/10",children:t.unlockPin})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(La,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Pickup Hub"})]}),c.jsx("p",{className:"font-bold text-white mt-1",children:t.pickupHub}),c.jsx("p",{className:"text-[10px] text-slate-400",children:t.pickupCity})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(La,{className:"w-3 h-3 text-[#D4AF37]"}),c.jsx("span",{children:"Drop Hub"})]}),c.jsx("p",{className:"font-bold text-white mt-1",children:t.dropHub}),c.jsx("p",{className:"text-[10px] text-slate-400",children:t.pickupCity})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(Jx,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Duration"})]}),c.jsxs("p",{className:"font-bold text-white mt-1",children:[t.duration," ",t.rentalMode.toLowerCase()]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(qi,{className:"w-3 h-3 text-emerald-400"}),c.jsx("span",{children:"Paid Total"})]}),c.jsxs("p",{className:"font-bold text-[#00E5C7] mt-1",children:["₹",t.totalAmount.toLocaleString("en-IN")]})]})]}),c.jsxs("div",{className:"flex items-center space-x-3 pt-2",children:[c.jsxs("button",{onClick:()=>window.print(),className:"flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-xs flex items-center justify-center space-x-2 transition",children:[c.jsx(m1,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:"Print / Save Voucher"})]}),c.jsx("button",{onClick:e,className:"flex-1 py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:"Done & View Fleet"})]})]})]})}):null,tA=({vehicles:t,onRemove:e,onClose:n,onBook:i})=>t.length===0?null:c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-5xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-lg text-white",children:"Side-by-Side Fleet Comparison"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Compare specs, velocity, mileage, and rates in INR"})]}),c.jsx("button",{onClick:n,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"p-6 overflow-x-auto flex-1",children:c.jsxs("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-4 min-w-[640px]",children:[c.jsxs("div",{className:"space-y-6 pt-24 text-xs font-semibold text-slate-400 border-r border-white/10 pr-3",children:[c.jsx("div",{className:"h-6 flex items-center",children:"Category"}),c.jsx("div",{className:"h-6 flex items-center",children:"Powertrain"}),c.jsx("div",{className:"h-6 flex items-center",children:"Fuel Type"}),c.jsx("div",{className:"h-6 flex items-center",children:"Top Speed"}),c.jsx("div",{className:"h-6 flex items-center",children:"0-100 Acceleration"}),c.jsx("div",{className:"h-6 flex items-center",children:"Mileage / Range"}),c.jsx("div",{className:"h-6 flex items-center",children:"Hourly Rent"}),c.jsx("div",{className:"h-6 flex items-center",children:"Daily Rent"}),c.jsx("div",{className:"h-6 flex items-center",children:"Security Deposit"}),c.jsx("div",{className:"h-6 flex items-center",children:"Included Helmets"})]}),t.map(r=>c.jsxs("div",{className:"p-3 rounded-2xl bg-[#0A0A0B] border border-white/10 relative flex flex-col justify-between",children:[c.jsx("button",{onClick:()=>e(r.id),className:"absolute top-2 right-2 w-6 h-6 rounded-full bg-white/10 text-slate-400 hover:text-white flex items-center justify-center text-xs",children:c.jsx(jn,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-full h-24 object-cover rounded-xl mb-2"}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] font-bold uppercase",children:r.brand}),c.jsx("h4",{className:"text-sm font-bold text-white leading-tight truncate",children:r.name}),c.jsxs("div",{className:"space-y-6 pt-4 text-xs font-bold text-white",children:[c.jsx("div",{className:"h-6 flex items-center text-slate-300",children:r.vehicleType.replace("_"," ")}),c.jsx("div",{className:"h-6 flex items-center text-slate-300 truncate",children:r.engineOrBattery}),c.jsx("div",{className:"h-6 flex items-center text-emerald-400",children:r.fuelType}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#00E5C7]",children:[r.maxSpeed," km/h"]}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#D4AF37]",children:[r.zeroToHundred,"s"]}),c.jsx("div",{className:"h-6 flex items-center text-slate-300",children:r.mileageOrRange}),c.jsxs("div",{className:"h-6 flex items-center font-mono",children:["₹",r.pricePerHour,"/hr"]}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#00E5C7]",children:["₹",r.pricePerDay,"/day"]}),c.jsxs("div",{className:"h-6 flex items-center text-slate-400 font-mono",children:["₹",r.securityDeposit]}),c.jsx("div",{className:"h-6 flex items-center text-emerald-400",children:"Yes (ISI 2x)"})]})]}),c.jsx("button",{onClick:()=>{n(),i(r)},className:"w-full mt-4 py-2 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:"Book Ride"})]},r.id))]})})]})}),nA=({isOpen:t,onClose:e})=>{const{user:n,isAuthenticated:i,loginWithEmail:r,signupWithEmail:s,sendOtp:a,verifyOtp:o,verifyLicense:l,loginAsDemoRider:u,logout:h}=Jl(),[f,p]=ue.useState("PHONE_OTP"),[m,v]=ue.useState("9876543210"),[y,x]=ue.useState(!1),[d,g]=ue.useState(""),[_,M]=ue.useState("rider@tbhrentals.in"),[P,C]=ue.useState("rider123"),[T,L]=ue.useState("Hemanth Kumar"),[H,S]=ue.useState((n==null?void 0:n.drivingLicenseNumber)||"KA-01-2023-0048192"),[E,k]=ue.useState(!1),[G,q]=ue.useState(!1),[J,V]=ue.useState(""),[ne,I]=ue.useState(!1);if(!t)return null;const te=async Q=>{if(Q.preventDefault(),V(""),!m||m.length<10){V("Please enter a valid 10-digit Indian mobile number");return}I(!0);try{await a(m),x(!0),g(""),I(!1)}catch(F){I(!1),V(F.message||"Unable to dispatch OTP. Please check number.")}},N=async Q=>{Q.preventDefault(),V(""),I(!0);try{const F=await o(m,d);I(!1),F?p("LICENSE"):V("Invalid or expired OTP code.")}catch(F){I(!1),V(F.message||"OTP verification failed.")}},A=async Q=>{Q.preventDefault(),V(""),I(!0);try{if(f==="EMAIL_LOGIN"){const F=await r(_,P);I(!1),F&&e()}else{const F=await s(T,_,m,P);I(!1),F&&p("LICENSE")}}catch{I(!1),V("Authentication error.")}},re=async Q=>{Q.preventDefault(),k(!0),setTimeout(async()=>{await l(H),k(!1),q(!0),setTimeout(()=>{e()},1200)},1e3)};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-md bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col",children:[c.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7] font-bold",children:"TBH"}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-base text-white",children:"Rider Authentication"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Secure Indian Identity Verification"})]})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),!n&&c.jsxs("div",{className:"grid grid-cols-2 gap-1 p-2 bg-[#0A0A0B] border-b border-white/10",children:[c.jsx("button",{onClick:()=>{p("PHONE_OTP"),V("")},className:`py-2 text-xs font-bold rounded-lg transition ${f==="PHONE_OTP"?"bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40":"text-slate-400 hover:text-white"}`,children:"Phone OTP (+91)"}),c.jsx("button",{onClick:()=>{p("EMAIL_LOGIN"),V("")},className:`py-2 text-xs font-bold rounded-lg transition ${f==="EMAIL_LOGIN"||f==="SIGNUP"?"bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40":"text-slate-400 hover:text-white"}`,children:"Email & Password"})]}),c.jsxs("div",{className:"p-6 space-y-5",children:[J&&c.jsx("div",{className:"p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs",children:J}),f==="PHONE_OTP"&&!n&&c.jsx("div",{children:y?c.jsxs("form",{onSubmit:N,className:"space-y-4",children:[c.jsxs("div",{className:"text-center pb-2",children:[c.jsxs("p",{className:"text-xs text-slate-300",children:["OTP code sent to ",c.jsxs("strong",{className:"text-white",children:["+91 ",m]})]}),c.jsx("p",{className:"text-[11px] text-[#D4AF37] mt-1 bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20",children:"In dev environment, check the backend server console for the secure 6-digit OTP code."})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Enter 4 or 6-digit OTP"}),c.jsx("input",{type:"text",value:d,onChange:Q=>g(Q.target.value),placeholder:"e.g. 7829",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-4 py-3 text-center text-lg font-mono font-bold tracking-widest text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsx("button",{type:"submit",disabled:ne,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:ne?"Verifying...":"Verify & Continue"})]}):c.jsxs("form",{onSubmit:te,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Mobile Number"}),c.jsxs("div",{className:"flex rounded-xl bg-[#0A0A0B] border border-white/10 focus-within:border-[#00E5C7] overflow-hidden",children:[c.jsx("span",{className:"px-3.5 py-3 text-xs font-bold text-slate-400 border-r border-white/10 flex items-center",children:"🇮🇳 +91"}),c.jsx("input",{type:"tel",value:m,onChange:Q=>v(Q.target.value),placeholder:"Enter 10-digit mobile",className:"w-full bg-transparent px-3 py-3 text-xs text-white focus:outline-none font-mono",required:!0})]})]}),c.jsxs("button",{type:"submit",disabled:ne,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsx("span",{children:ne?"Sending OTP...":"Send Verification OTP"}),c.jsx(za,{className:"w-4 h-4"})]})]})}),(f==="EMAIL_LOGIN"||f==="SIGNUP")&&!n&&c.jsxs("form",{onSubmit:A,className:"space-y-4",children:[f==="SIGNUP"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Full Legal Name"}),c.jsx("input",{type:"text",value:T,onChange:Q=>L(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Email Address"}),c.jsx("input",{type:"email",value:_,onChange:Q=>M(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Password"}),c.jsx("input",{type:"password",value:P,onChange:Q=>C(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsx("button",{type:"submit",disabled:ne,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:f==="EMAIL_LOGIN"?"Login with Email":"Create Free TBH Account"}),c.jsx("div",{className:"text-center pt-1",children:c.jsx("button",{type:"button",onClick:()=>p(f==="EMAIL_LOGIN"?"SIGNUP":"EMAIL_LOGIN"),className:"text-xs text-slate-400 hover:text-[#00E5C7]",children:f==="EMAIL_LOGIN"?"Don't have an account? Sign Up":"Already registered? Login"})})]}),(f==="LICENSE"||n)&&c.jsxs("form",{onSubmit:re,className:"space-y-4",children:[c.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#0A0A0B] border border-[#00E5C7]/30 flex items-center space-x-3",children:[c.jsx(qi,{className:"w-7 h-7 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-white",children:"Driving License & DigiLocker KYC"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Required by Indian Motor Vehicles Act for self-drive"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Driving License Number (DL)"}),c.jsx("input",{type:"text",value:H,onChange:Q=>S(Q.target.value.toUpperCase()),placeholder:"e.g. KA-01-2023-0048192",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono uppercase focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{className:"p-4 rounded-xl border-2 border-dashed border-white/15 hover:border-[#00E5C7]/50 text-center cursor-pointer bg-[#0A0A0B]/50 transition",children:[c.jsx(f1,{className:"w-8 h-8 text-[#00E5C7] mx-auto mb-1"}),c.jsx("p",{className:"text-xs font-bold text-white",children:"Upload DL Photo or Fetch via DigiLocker"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"JPG, PNG, PDF up to 5MB"})]}),G?c.jsxs("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center space-x-2",children:[c.jsx(Ha,{className:"w-4 h-4"}),c.jsx("span",{children:"License Verified Successfully!"})]}):c.jsx("button",{type:"submit",disabled:E,className:"w-full py-3 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:E?"Verifying with Parivahan Gov...":"Verify License & Complete KYC"})]}),c.jsx("div",{className:"pt-2 border-t border-white/10",children:c.jsxs("button",{type:"button",onClick:()=>{u(),e()},className:"w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 transition flex items-center justify-center space-x-2",children:[c.jsx(Kl,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"One-Click Demo Rider Sign In"})]})})]})]})})},iA=({isOpen:t,onClose:e,onSelectBooking:n})=>{const{user:i}=Jl(),[r,s]=ue.useState([]),[a,o]=ue.useState(!0);ue.useEffect(()=>{t&&i&&l()},[t,i]);const l=async()=>{o(!0);const h=await Ia.getMyBookings((i==null?void 0:i.id)||1);s(h),o(!1)},u=h=>{if(confirm("Are you sure you want to cancel this booking? Refund of 100% deposit + 90% rental fee will be initiated.")){const f=r.map(p=>p.id===h?{...p,status:"CANCELLED",paymentStatus:"REFUNDED"}:p);s(f),localStorage.setItem("tbh_bookings",JSON.stringify(f))}};return t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-2xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[88vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7]",children:c.jsx(bl,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-base text-white",children:"My Rental Passes"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Active keys & trip history"})]})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:a?c.jsx("p",{className:"text-center text-xs text-slate-400 py-8",children:"Loading your bookings..."}):r.length===0?c.jsxs("div",{className:"text-center py-12",children:[c.jsx(bl,{className:"w-12 h-12 text-slate-600 mx-auto mb-2"}),c.jsx("p",{className:"text-sm font-bold text-white",children:"No Active Reservations"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Book your dream machine from our fleet today."})]}):r.map(h=>c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-xs font-mono font-bold text-[#00E5C7]",children:h.bookingReference}),c.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${h.status==="CONFIRMED"?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30":"bg-rose-500/10 text-rose-400 border border-rose-500/30"}`,children:h.status})]}),c.jsx("h4",{className:"text-sm font-bold text-white",children:h.vehicle.name}),c.jsxs("p",{className:"text-xs text-slate-400 flex items-center space-x-1",children:[c.jsx(La,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsxs("span",{children:[h.pickupHub," • ",h.duration," ",h.rentalMode.toLowerCase()]})]}),c.jsxs("p",{className:"text-xs font-mono text-white",children:["Unlock PIN: ",c.jsx("strong",{className:"text-[#D4AF37] font-bold text-sm",children:h.unlockPin})]})]}),c.jsxs("div",{className:"flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2",children:[c.jsxs("span",{className:"text-base font-extrabold font-display text-white",children:["₹",h.totalAmount.toLocaleString("en-IN")]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>n(h),className:"px-3 py-1.5 rounded-lg bg-[#00E5C7]/15 border border-[#00E5C7]/40 text-[#00E5C7] text-xs font-bold hover:bg-[#00E5C7] hover:text-black transition",children:"Digital Pass"}),h.status==="CONFIRMED"&&c.jsx("button",{onClick:()=>u(h.id),className:"px-2.5 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold hover:bg-rose-500/20 transition",children:"Cancel"})]})]})]},h.id))})]})}):null},rA=({isOpen:t,onClose:e,vehicles:n,onToggleAvailability:i})=>{if(!t)return null;const r=n.length,s=n.filter(o=>o.available).length;return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-4xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-[#00E5C7]",children:"TBH Fleet Control"}),c.jsx("h3",{className:"font-extrabold font-display text-lg text-white",children:"Central Operations & Telemetry"})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(jn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 overflow-y-auto space-y-6 flex-1",children:[c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Total Fleet"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-white mt-1",children:r}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] mt-0.5",children:"Across 8 Indian States"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Live Available"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-emerald-400 mt-1",children:s}),c.jsxs("p",{className:"text-[10px] text-slate-400 mt-0.5",children:[r-s," on live trip"]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Month Revenue"}),c.jsxs("p",{className:"text-2xl font-extrabold font-display text-[#D4AF37] mt-1",children:["₹",284500 .toLocaleString("en-IN")]}),c.jsx("p",{className:"text-[10px] text-emerald-400 mt-0.5",children:"+24.8% vs last month"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Fleet Health"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-white mt-1",children:"99.4%"}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] mt-0.5",children:"Zero Breakdown Alert"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3",children:"Fleet Inventory & Instant Availability Toggle"}),c.jsx("div",{className:"space-y-2",children:n.map(o=>c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("img",{src:o.imageUrl,alt:o.name,className:"w-12 h-10 object-cover rounded-lg"}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold text-white",children:o.name}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:[o.vehicleType," • ₹",o.pricePerHour,"/hr • ₹",o.pricePerDay,"/day"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:`text-[11px] font-bold ${o.available?"text-emerald-400":"text-rose-400"}`,children:o.available?"Available":"Reserved / Maintenance"}),c.jsx("button",{onClick:()=>i(o.id),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition ${o.available?"bg-rose-500/15 text-rose-400 hover:bg-rose-500/25":"bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"}`,children:o.available?"Mark Reserved":"Make Available"})]})]},o.id))})]})]})]})})},sA=()=>{const[t,e]=ue.useState(!1),[n,i]=ue.useState([{sender:"ai",text:"Namaste! Welcome to TBH Concierge. How can I assist your ride today?"}]),[r,s]=ue.useState(""),a=["What documents are needed to rent?","Is fuel included in the price?","How is the security deposit refunded?","Emergency Roadside Helpline"],o=l=>{const u=l||r;u.trim()&&(i(h=>[...h,{sender:"user",text:u}]),s(""),setTimeout(()=>{let h="Our team is here 24/7. Feel free to call our emergency helpline at 1800-TBH-RIDE (1800 824 7433).";const f=u.toLowerCase();f.includes("document")||f.includes("license")?h="You only need a valid Indian Driving License (or International Driving Permit for foreign nationals) and Aadhaar/Passport verification.":f.includes("fuel")?h="Petrol/Diesel vehicles are provided with sufficient fuel to reach the next station; return at same fuel level. EV rides include 100% full charge with access to fast charging grids!":f.includes("deposit")||f.includes("refund")?h="Security deposits are 100% refundable and automatically released back to your original payment method within 2 to 4 hours after vehicle check-in.":(f.includes("emergency")||f.includes("helpline"))&&(h="Emergency Roadside Assistance is active 24/7 across all Indian highways. Toll-Free SOS: 1800-TBH-RIDE (1800 824 7433)."),i(p=>[...p,{sender:"ai",text:h}])},600))};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{onClick:()=>e(!t),className:"fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black shadow-teal-glow hover:scale-105 transition-all flex items-center justify-center",title:"TBH 24/7 Concierge & SOS",children:[c.jsx(S1,{className:"w-6 h-6 stroke-[2.5]"}),c.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black animate-ping"})]}),t&&c.jsxs("div",{className:"fixed bottom-20 right-6 z-50 w-96 max-w-[90vw] h-[480px] bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 duration-200",children:[c.jsxs("div",{className:"p-4 bg-gradient-to-r from-[#141416] to-[#1E1E24] border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-[#00E5C7]/20 border border-[#00E5C7]/50 flex items-center justify-center text-[#00E5C7]",children:c.jsx(Kl,{className:"w-4 h-4"})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-white",children:"TBH Concierge — Demo AI Assistant"}),c.jsxs("p",{className:"text-[10px] text-emerald-400 flex items-center space-x-1",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),c.jsx("span",{children:"24/7 Virtual Assistant & Roadside SOS"})]})]})]}),c.jsx("button",{onClick:()=>e(!1),className:"p-1 rounded-lg text-slate-400 hover:text-white",children:c.jsx(jn,{className:"w-4 h-4"})})]}),c.jsx("div",{className:"flex-1 p-4 overflow-y-auto space-y-3",children:n.map((l,u)=>c.jsx("div",{className:`flex ${l.sender==="user"?"justify-end":"justify-start"}`,children:c.jsx("div",{className:`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${l.sender==="user"?"bg-[#00E5C7] text-black font-semibold rounded-tr-none":"bg-[#0A0A0B] border border-white/10 text-slate-200 rounded-tl-none"}`,children:l.text})},u))}),c.jsx("div",{className:"p-2 bg-[#0A0A0B] border-t border-white/5 flex gap-1.5 overflow-x-auto",children:a.map((l,u)=>c.jsx("button",{onClick:()=>o(l),className:"whitespace-nowrap px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-slate-300 transition",children:l},u))}),c.jsxs("div",{className:"p-3 bg-[#141416] border-t border-white/10 flex items-center space-x-2",children:[c.jsx("input",{type:"text",value:r,onChange:l=>s(l.target.value),onKeyDown:l=>l.key==="Enter"&&o(),placeholder:"Ask about deposits, helplines, hubs...",className:"flex-1 bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]"}),c.jsx("button",{onClick:()=>o(),className:"p-2 rounded-xl bg-[#00E5C7] text-black hover:opacity-90 transition",children:c.jsx(E1,{className:"w-4 h-4"})})]})]})]})},aA=()=>c.jsx("footer",{className:"w-full bg-[#0A0A0B] border-t border-white/10 pt-16 pb-12",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#141416] to-[#0A0A0B] border border-[#00E5C7]/40 flex items-center justify-center",children:c.jsx("span",{className:"font-display font-extrabold text-[#00E5C7] text-lg",children:"T"})}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xl font-extrabold text-white font-display",children:"TBH"}),c.jsx("p",{className:"text-[10px] tracking-widest uppercase text-slate-400 font-semibold",children:"Ride Beyond Limits"})]})]}),c.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"India's foremost luxury bike and car rental platform. Seamless 3D vehicle visualization, transparent hourly INR rates, and pan-India airport hubs."}),c.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300",children:[c.jsx(w1,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("span",{children:["SOS Helpline: ",c.jsx("strong",{children:"1800-TBH-RIDE"})]})]})]}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-[#00E5C7] mb-3",children:"Key Indian Cities"}),c.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-400",children:[c.jsx("li",{children:"Bengaluru (BLR Airport & Koramangala)"}),c.jsx("li",{children:"Hyderabad (HYD Airport & Hitech City)"}),c.jsx("li",{children:"Mumbai (BOM Airport & BKC)"}),c.jsx("li",{children:"Delhi NCR (DEL Airport & Cyber Hub)"}),c.jsx("li",{children:"Chennai (MAA Airport & OMR)"}),c.jsx("li",{children:"Goa (Mopa GOX, Dabolim & Calangute)"}),c.jsx("li",{children:"Pune & Jaipur Hubs"})]})]}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3",children:"Fleet Portfolio"}),c.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-400",children:[c.jsx("li",{children:"Royal Enfield Classic & Hunter 350"}),c.jsx("li",{children:"KTM Duke 390 & Yamaha MT-15 V2"}),c.jsx("li",{children:"Honda Activa 6G & TVS Jupiter 125"}),c.jsx("li",{children:"Ola S1 Pro & Ather 450X EV"}),c.jsx("li",{children:"Ultraviolette F77 Mach 2 Superbike"}),c.jsx("li",{children:"Mahindra Thar 4x4 & Toyota Fortuner"}),c.jsx("li",{children:"Tata Nexon EV Max & Swift Dzire"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-white mb-3",children:"Safety & Trust"}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416] border border-white/10 space-y-1.5 text-xs text-slate-300",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(qi,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{className:"font-semibold",children:"Parivahan Approved"})]}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"All self-drive vehicles registered with commercial yellow plates and comprehensive insurance."})]}),c.jsx("p",{className:"text-[10px] text-slate-500",children:"Protected by Razorpay 256-Bit SSL Payment Shield."})]})]}),c.jsxs("div",{className:"pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[c.jsx("p",{children:"© 2026 TBH Mobility Technologies Pvt. Ltd. All rights reserved."}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Rental Terms"}),c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Damage Policy"}),c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Privacy"}),c.jsxs("span",{className:"text-[#00E5C7] flex items-center space-x-1",children:[c.jsx("span",{children:"Made with pride in India"}),c.jsx(dg,{className:"w-3 h-3 fill-[#00E5C7]"})]})]})]})]})}),oA=()=>{const{t}=Ql(),[e,n]=ue.useState(yv),[i,r]=ue.useState("Bengaluru"),[s,a]=ue.useState(Kd),[o,l]=ue.useState("HOURLY"),[u,h]=ue.useState("ALL"),[f,p]=ue.useState("ALL"),[m,v]=ue.useState(""),[y,x]=ue.useState("POPULAR"),[d,g]=ue.useState(null),[_,M]=ue.useState(null),[P,C]=ue.useState(null),[T,L]=ue.useState(null),[H,S]=ue.useState([]),[E,k]=ue.useState(!1),[G,q]=ue.useState(!1),[J,V]=ue.useState(!1),[ne,I]=ue.useState(!1),[te,N]=ue.useState([]);ue.useEffect(()=>{A()},[i]);const A=async()=>{const B=await Ia.getCities();B&&B.length>0&&n(B);const W=await Ia.getVehicles(i);W&&W.length>0&&a(W)},re=B=>{if(H.some(W=>W.id===B.id))S(H.filter(W=>W.id!==B.id));else{if(H.length>=3){alert("You can compare up to 3 vehicles at a time.");return}S([...H,B])}},Q=B=>{te.includes(B)?N(te.filter(W=>W!==B)):N([...te,B])},F=B=>{a(W=>W.map(oe=>oe.id===B?{...oe,available:!oe.available}:oe))},K=s.filter(B=>{if(u!=="ALL"&&B.vehicleType!==u||f!=="ALL"&&B.fuelType!==f)return!1;if(m.trim()){const W=m.toLowerCase(),oe=B.name.toLowerCase().includes(W),he=B.brand.toLowerCase().includes(W),be=B.model.toLowerCase().includes(W);if(!oe&&!he&&!be)return!1}return!0}).sort((B,W)=>{const oe=o==="HOURLY"?B.pricePerHour:o==="DAILY"?B.pricePerDay:B.pricePerMonth,he=o==="HOURLY"?W.pricePerHour:o==="DAILY"?W.pricePerDay:W.pricePerMonth;return y==="PRICE_ASC"?oe-he:y==="PRICE_DESC"?he-oe:y==="SPEED"?W.maxSpeed-B.maxSpeed:W.rating-B.rating});return c.jsxs("div",{className:"min-h-screen bg-[#0A0A0B] text-white flex flex-col justify-between selection:bg-[#00E5C7] selection:text-black",children:[c.jsx(D1,{cities:e,selectedCity:i,onSelectCity:B=>r(B),compareCount:H.length,onOpenCompare:()=>k(!0),onOpenBookings:()=>V(!0),onOpenAuth:()=>q(!0),onOpenAdmin:()=>I(!0)}),c.jsx(I1,{cities:e,selectedCity:i,onSelectCity:B=>r(B),onSearch:(B,W,oe)=>{r(B),l(oe);const he=document.getElementById("fleet-explorer");he&&he.scrollIntoView({behavior:"smooth"})},onOpenFirst3D:()=>g(s[2]||s[0])}),c.jsxs("main",{id:"fleet-explorer",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10",children:[c.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center space-x-2 text-[11px] font-bold text-[#00E5C7] uppercase tracking-widest mb-1",children:[c.jsx(Kl,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Full India Rental Fleet"})]}),c.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold font-display text-white",children:["Available Machines in ",i]}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"From Royal Enfield thump to KTM adrenaline, Activa ease to Thar 4x4 dominance."})]}),c.jsx("div",{className:"flex items-center space-x-1 bg-[#141416] p-1.5 rounded-2xl border border-white/10",children:["HOURLY","DAILY","MONTHLY"].map(B=>c.jsx("button",{onClick:()=>l(B),className:`px-4 py-2 text-xs font-bold rounded-xl transition ${o===B?"bg-[#00E5C7] text-black shadow-teal-glow":"text-slate-400 hover:text-white"}`,children:t(B==="HOURLY"?"hourly":B==="DAILY"?"daily":"monthly")},B))})]}),c.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none",children:[{id:"ALL",label:"All Fleet"},{id:"BIKE",label:"Superbikes & Cruisers"},{id:"SCOOTER",label:"Scooters / Scooties"},{id:"ELECTRIC_BIKE",label:"Electric Velocity (EV)"},{id:"PETROL_CAR",label:"Petrol Cars"},{id:"DIESEL_CAR",label:"Diesel & 4x4 SUVs"},{id:"ELECTRIC_CAR",label:"Electric Cars"}].map(B=>c.jsx("button",{onClick:()=>h(B.id),className:`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold border transition ${u===B.id?"bg-white text-black border-white shadow-lg":"bg-[#141416] border-white/10 text-slate-300 hover:border-white/20"}`,children:B.label},B.id))}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141416] p-4 rounded-2xl border border-white/10",children:[c.jsxs("div",{className:"relative w-full sm:w-80",children:[c.jsx("input",{type:"text",value:m,onChange:B=>v(B.target.value),placeholder:"Search by brand, bike or car model...",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5C7]"}),c.jsx(bg,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"})]}),c.jsxs("div",{className:"flex items-center space-x-3 w-full sm:w-auto",children:[c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Fuel:"}),c.jsxs("select",{value:f,onChange:B=>p(B.target.value),className:"bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]",children:[c.jsx("option",{value:"ALL",children:"All Fuel Types"}),c.jsx("option",{value:"PETROL",children:"Petrol Only"}),c.jsx("option",{value:"DIESEL",children:"Diesel Only"}),c.jsx("option",{value:"ELECTRIC",children:"Electric (EV)"})]})]}),c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Sort:"}),c.jsxs("select",{value:y,onChange:B=>x(B.target.value),className:"bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]",children:[c.jsx("option",{value:"POPULAR",children:"Most Popular"}),c.jsx("option",{value:"SPEED",children:"Top Speed (Fastest)"}),c.jsx("option",{value:"PRICE_ASC",children:"Price: Low to High"}),c.jsx("option",{value:"PRICE_DESC",children:"Price: High to Low"})]})]})]})]}),K.length===0?c.jsxs("div",{className:"text-center py-20 bg-[#141416]/50 rounded-3xl border border-white/10",children:[c.jsx(x1,{className:"w-10 h-10 text-slate-600 mx-auto mb-2"}),c.jsx("p",{className:"text-base font-bold text-white",children:"No vehicles found matching current filters"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Try resetting category or search criteria."}),c.jsx("button",{onClick:()=>{h("ALL"),p("ALL"),v("")},className:"mt-4 px-4 py-2 rounded-xl bg-[#00E5C7] text-black font-bold text-xs",children:"Reset All Filters"})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:K.map(B=>c.jsx(U1,{vehicle:B,durationMode:o,onOpen3D:W=>{W.assetType==="GLB"?g(W):M(W)},onOpenGallery:W=>M(W),onQuickBook:W=>C(W),onToggleCompare:re,isCompared:H.some(W=>W.id===B.id),isWishlisted:te.includes(B.id),onToggleWishlist:Q},B.id))})]}),c.jsx(sA,{}),c.jsx(aA,{}),c.jsx(KT,{vehicle:d,onClose:()=>g(null),onBookNow:B=>{g(null),C(B)}}),c.jsx(ZT,{vehicle:_,isOpen:!!_,onClose:()=>M(null),onBook:B=>{M(null),C(B)}}),c.jsx(QT,{vehicle:P,cities:e,selectedCity:i,onClose:()=>C(null),onBookingSuccess:B=>{C(null),L(B)}}),c.jsx(eA,{booking:T,onClose:()=>L(null)}),c.jsx(tA,{vehicles:H,onRemove:B=>S(H.filter(W=>W.id!==B)),onClose:()=>k(!1),onBook:B=>{k(!1),C(B)}}),c.jsx(nA,{isOpen:G,onClose:()=>q(!1)}),c.jsx(iA,{isOpen:J,onClose:()=>V(!1),onSelectBooking:B=>L(B)}),c.jsx(rA,{isOpen:ne,onClose:()=>I(!1),vehicles:s,onToggleAvailability:F})]})},lA=()=>c.jsx(L1,{children:c.jsx(P1,{children:c.jsx(oA,{})})});xu.createRoot(document.getElementById("root")).render(c.jsx(Vv.StrictMode,{children:c.jsx(lA,{})}));

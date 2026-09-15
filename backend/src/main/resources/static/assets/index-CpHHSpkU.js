var Cv=Object.defineProperty;var Av=(t,e,n)=>e in t?Cv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var rr=(t,e,n)=>Av(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Rv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Im={exports:{}},Ul={},Um={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oa=Symbol.for("react.element"),Nv=Symbol.for("react.portal"),Pv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Dv=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Uv=Symbol.for("react.context"),kv=Symbol.for("react.forward_ref"),Ov=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),_f=Symbol.iterator;function zv(t){return t===null||typeof t!="object"?null:(t=_f&&t[_f]||t["@@iterator"],typeof t=="function"?t:null)}var km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Fm={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||km}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bm(){}Bm.prototype=Is.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=Fm,this.updater=n||km}var Qd=Jd.prototype=new Bm;Qd.constructor=Jd;Om(Qd,Is.prototype);Qd.isPureReactComponent=!0;var yf=Array.isArray,zm=Object.prototype.hasOwnProperty,eh={current:null},Hm={key:!0,ref:!0,__self:!0,__source:!0};function jm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)zm.call(e,i)&&!Hm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Oa,type:t,key:s,ref:a,props:r,_owner:eh.current}}function Hv(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sf=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function Oo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Oa:case Nv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+uc(a,0):i,yf(r)?(n="",t!=null&&(n=t.replace(Sf,"$&/")+"/"),Oo(r,e,n,"",function(u){return u})):r!=null&&(th(r)&&(r=Hv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Sf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",yf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+uc(s,o);a+=Oo(s,e,n,l,r)}else if(l=zv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+uc(s,o++),a+=Oo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ka(t,e,n){if(t==null)return t;var i=[],r=0;return Oo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Fo={transition:null},Gv={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Fo,ReactCurrentOwner:eh};function Vm(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Is;$e.Fragment=Pv;$e.Profiler=Dv;$e.PureComponent=Jd;$e.StrictMode=Lv;$e.Suspense=Ov;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gv;$e.act=Vm;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Om({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)zm.call(e,l)&&!Hm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Oa,type:t.type,key:r,ref:s,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:Uv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iv,_context:t},t.Consumer=t};$e.createElement=jm;$e.createFactory=function(t){var e=jm.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:kv,render:t}};$e.isValidElement=th;$e.lazy=function(t){return{$$typeof:Bv,_payload:{_status:-1,_result:t},_init:Vv}};$e.memo=function(t,e){return{$$typeof:Fv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Fo.transition;Fo.transition={};try{t()}finally{Fo.transition=e}};$e.unstable_act=Vm;$e.useCallback=function(t,e){return Kt.current.useCallback(t,e)};$e.useContext=function(t){return Kt.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};$e.useEffect=function(t,e){return Kt.current.useEffect(t,e)};$e.useId=function(){return Kt.current.useId()};$e.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return Kt.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};$e.useRef=function(t){return Kt.current.useRef(t)};$e.useState=function(t){return Kt.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return Kt.current.useTransition()};$e.version="18.3.1";Um.exports=$e;var ce=Um.exports;const Wv=Rv(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv=ce,Yv=Symbol.for("react.element"),qv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,Kv=Xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zv={key:!0,ref:!0,__self:!0,__source:!0};function Gm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$v.call(e,i)&&!Zv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Yv,type:t,key:s,ref:a,props:r,_owner:Kv.current}}Ul.Fragment=qv;Ul.jsx=Gm;Ul.jsxs=Gm;Im.exports=Ul;var c=Im.exports,xu={},Wm={exports:{}},xn={},Xm={exports:{}},Ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,te){var N=I.length;I.push(te);e:for(;0<N;){var C=N-1>>>1,re=I[C];if(0<r(re,te))I[C]=te,I[N]=re,N=C;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var te=I[0],N=I.pop();if(N!==te){I[0]=N;e:for(var C=0,re=I.length,Q=re>>>1;C<Q;){var O=2*(C+1)-1,K=I[O],B=O+1,W=I[B];if(0>r(K,N))B<re&&0>r(W,K)?(I[C]=W,I[B]=N,C=B):(I[C]=K,I[O]=N,C=O);else if(B<re&&0>r(W,N))I[C]=W,I[B]=N,C=B;else break e}}return te}function r(I,te){var N=I.sortIndex-te.sortIndex;return N!==0?N:I.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,p=null,f=3,m=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var te=n(u);te!==null;){if(te.callback===null)i(u);else if(te.startTime<=I)i(u),te.sortIndex=te.expirationTime,e(l,te);else break;te=n(u)}}function E(I){if(y=!1,_(I),!x)if(n(l)!==null)x=!0,V(P);else{var te=n(u);te!==null&&ne(E,te.startTime-I)}}function P(I,te){x=!1,y&&(y=!1,d(L),L=-1),m=!0;var N=f;try{for(_(te),p=n(l);p!==null&&(!(p.expirationTime>te)||I&&!w());){var C=p.callback;if(typeof C=="function"){p.callback=null,f=p.priorityLevel;var re=C(p.expirationTime<=te);te=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),_(te)}else i(l);p=n(l)}if(p!==null)var Q=!0;else{var O=n(u);O!==null&&ne(E,O.startTime-te),Q=!1}return Q}finally{p=null,f=N,m=!1}}var A=!1,T=null,L=-1,H=5,S=-1;function w(){return!(t.unstable_now()-S<H)}function k(){if(T!==null){var I=t.unstable_now();S=I;var te=!0;try{te=T(!0,I)}finally{te?G():(A=!1,T=null)}}else A=!1}var G;if(typeof v=="function")G=function(){v(k)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,J=$.port2;$.port1.onmessage=k,G=function(){J.postMessage(null)}}else G=function(){g(k,0)};function V(I){T=I,A||(A=!0,G())}function ne(I,te){L=g(function(){I(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,V(P))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var te=3;break;default:te=f}var N=f;f=te;try{return I()}finally{f=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,te){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=f;f=I;try{return te()}finally{f=N}},t.unstable_scheduleCallback=function(I,te,N){var C=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?C+N:C):N=C,I){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=N+re,I={id:h++,callback:te,priorityLevel:I,startTime:N,expirationTime:re,sortIndex:-1},N>C?(I.sortIndex=N,e(u,I),n(l)===null&&I===n(u)&&(y?(d(L),L=-1):y=!0,ne(E,N-C))):(I.sortIndex=re,e(l,I),x||m||(x=!0,V(P))),I},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(I){var te=f;return function(){var N=f;f=te;try{return I.apply(this,arguments)}finally{f=N}}}})(Ym);Xm.exports=Ym;var Jv=Xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=ce,gn=Jv;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qm=new Set,va={};function Dr(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(va[t]=e,t=0;t<e.length;t++)qm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,e_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ef={},Mf={};function t_(t){return vu.call(Mf,t)?!0:vu.call(Ef,t)?!1:e_.test(t)?Mf[t]=!0:(Ef[t]=!0,!1)}function n_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i_(t,e,n,i){if(e===null||typeof e>"u"||n_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);Ft[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);Ft[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i_(e,n,r,i)&&(n=null),i||r===null?t_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),_u=Symbol.for("react.profiler"),$m=Symbol.for("react.provider"),Km=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),yu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),Ni=Symbol.for("react.lazy"),Zm=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Hs(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,dc;function ia(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var hc=!1;function fc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ia(t):""}function r_(t){switch(t.tag){case 5:return ia(t.type);case 16:return ia("Lazy");case 13:return ia("Suspense");case 19:return ia("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function Eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Jr:return"Portal";case _u:return"Profiler";case sh:return"StrictMode";case yu:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Km:return(t.displayName||"Context")+".Consumer";case $m:return(t._context.displayName||"Context")+".Provider";case ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:Eu(t.type)||"Memo";case Ni:e=t._payload,t=t._init;try{return Eu(t(e))}catch{}}return null}function s_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a_(t){var e=Jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=a_(t))}function Qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function nl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function e0(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function wu(t,e){e0(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&bu(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bu(t,e,n){(e!=="number"||nl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ra=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(ra(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function t0(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Af(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function n0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?n0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,i0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},o_=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){o_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function r0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function s0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=r0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var l_=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Au(t,e){if(e){if(l_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pu=null,hs=null,fs=null;function Rf(t){if(t=za(t)){if(typeof Pu!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=zl(e),Pu(t.stateNode,t.type,e))}}function a0(t){hs?fs?fs.push(t):fs=[t]:hs=t}function o0(){if(hs){var t=hs,e=fs;if(fs=hs=null,Rf(t),e)for(t=0;t<e.length;t++)Rf(e[t])}}function l0(t,e){return t(e)}function c0(){}var pc=!1;function u0(t,e,n){if(pc)return t(e,n);pc=!0;try{return l0(t,e,n)}finally{pc=!1,(hs!==null||fs!==null)&&(c0(),o0())}}function ya(t,e){var n=t.stateNode;if(n===null)return null;var i=zl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Lu=!1;if(mi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Lu=!1}function c_(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ca=!1,il=null,rl=!1,Du=null,u_={onError:function(t){ca=!0,il=t}};function d_(t,e,n,i,r,s,a,o,l){ca=!1,il=null,c_.apply(u_,arguments)}function h_(t,e,n,i,r,s,a,o,l){if(d_.apply(this,arguments),ca){if(ca){var u=il;ca=!1,il=null}else throw Error(ue(198));rl||(rl=!0,Du=u)}}function Ir(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(t){if(Ir(t)!==t)throw Error(ue(188))}function f_(t){var e=t.alternate;if(!e){if(e=Ir(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nf(r),t;if(s===i)return Nf(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function h0(t){return t=f_(t),t!==null?f0(t):null}function f0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f0(t);if(e!==null)return e;t=t.sibling}return null}var p0=gn.unstable_scheduleCallback,Pf=gn.unstable_cancelCallback,p_=gn.unstable_shouldYield,m_=gn.unstable_requestPaint,Mt=gn.unstable_now,g_=gn.unstable_getCurrentPriorityLevel,ch=gn.unstable_ImmediatePriority,m0=gn.unstable_UserBlockingPriority,sl=gn.unstable_NormalPriority,x_=gn.unstable_LowPriority,g0=gn.unstable_IdlePriority,kl=null,Zn=null;function v_(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:S_,__=Math.log,y_=Math.LN2;function S_(t){return t>>>=0,t===0?32:31-(__(t)/y_|0)|0}var eo=64,to=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=sa(o):(s&=a,s!==0&&(i=sa(s)))}else a=n&~r,a!==0?i=sa(a):s!==0&&(i=sa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function E_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Hn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=E_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Iu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function x0(){var t=eo;return eo<<=1,!(eo&4194240)&&(eo=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function w_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function v0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _0,dh,y0,S0,E0,Uu=!1,no=[],Bi=null,zi=null,Hi=null,Sa=new Map,Ea=new Map,Di=[],b_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=za(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function T_(t,e,n,i,r){switch(e){case"focusin":return Bi=Vs(Bi,t,e,n,i,r),!0;case"dragenter":return zi=Vs(zi,t,e,n,i,r),!0;case"mouseover":return Hi=Vs(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Sa.set(s,Vs(Sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Vs(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function M0(t){var e=_r(t.target);if(e!==null){var n=Ir(e);if(n!==null){if(e=n.tag,e===13){if(e=d0(n),e!==null){t.blockedOn=e,E0(t.priority,function(){y0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nu=i,n.target.dispatchEvent(i),Nu=null}else return e=za(n),e!==null&&dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Df(t,e,n){Bo(t)&&n.delete(e)}function C_(){Uu=!1,Bi!==null&&Bo(Bi)&&(Bi=null),zi!==null&&Bo(zi)&&(zi=null),Hi!==null&&Bo(Hi)&&(Hi=null),Sa.forEach(Df),Ea.forEach(Df)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uu||(Uu=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,C_)))}function Ma(t){function e(r){return Gs(r,t)}if(0<no.length){Gs(no[0],t);for(var n=1;n<no.length;n++){var i=no[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&Gs(Bi,t),zi!==null&&Gs(zi,t),Hi!==null&&Gs(Hi,t),Sa.forEach(e),Ea.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)M0(n),n.blockedOn===null&&Di.shift()}var ps=Si.ReactCurrentBatchConfig,ol=!0;function A_(t,e,n,i){var r=st,s=ps.transition;ps.transition=null;try{st=1,hh(t,e,n,i)}finally{st=r,ps.transition=s}}function R_(t,e,n,i){var r=st,s=ps.transition;ps.transition=null;try{st=4,hh(t,e,n,i)}finally{st=r,ps.transition=s}}function hh(t,e,n,i){if(ol){var r=ku(t,e,n,i);if(r===null)bc(t,e,i,ll,n),Lf(t,i);else if(T_(r,t,e,n,i))i.stopPropagation();else if(Lf(t,i),e&4&&-1<b_.indexOf(t)){for(;r!==null;){var s=za(r);if(s!==null&&_0(s),s=ku(t,e,n,i),s===null&&bc(t,e,i,ll,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var ll=null;function ku(t,e,n,i){if(ll=null,t=lh(i),t=_r(t),t!==null)if(e=Ir(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ll=t,null}function w0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(g_()){case ch:return 1;case m0:return 4;case sl:case x_:return 16;case g0:return 536870912;default:return 16}default:return 16}}var ki=null,fh=null,zo=null;function b0(){if(zo)return zo;var t,e=fh,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return zo=r.slice(t,1<i?1-i:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function io(){return!0}function If(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?io:If,this.isPropagationStopped=If,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=vn(Us),Ba=_t({},Us,{view:0,detail:0}),N_=vn(Ba),gc,xc,Ws,Ol=_t({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(gc=t.screenX-Ws.screenX,xc=t.screenY-Ws.screenY):xc=gc=0,Ws=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:xc}}),Uf=vn(Ol),P_=_t({},Ol,{dataTransfer:0}),L_=vn(P_),D_=_t({},Ba,{relatedTarget:0}),vc=vn(D_),I_=_t({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),U_=vn(I_),k_=_t({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O_=vn(k_),F_=_t({},Us,{data:0}),kf=vn(F_),B_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H_[t])?!!e[t]:!1}function mh(){return j_}var V_=_t({},Ba,{key:function(t){if(t.key){var e=B_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G_=vn(V_),W_=_t({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=vn(W_),X_=_t({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),Y_=vn(X_),q_=_t({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),$_=vn(q_),K_=_t({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=vn(K_),J_=[9,13,27,32],gh=mi&&"CompositionEvent"in window,ua=null;mi&&"documentMode"in document&&(ua=document.documentMode);var Q_=mi&&"TextEvent"in window&&!ua,T0=mi&&(!gh||ua&&8<ua&&11>=ua),Ff=" ",Bf=!1;function C0(t,e){switch(t){case"keyup":return J_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function ey(t,e){switch(t){case"compositionend":return A0(e);case"keypress":return e.which!==32?null:(Bf=!0,Ff);case"textInput":return t=e.data,t===Ff&&Bf?null:t;default:return null}}function ty(t,e){if(es)return t==="compositionend"||!gh&&C0(t,e)?(t=b0(),zo=fh=ki=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return T0&&e.locale!=="ko"?null:e.data;default:return null}}var ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ny[t.type]:e==="textarea"}function R0(t,e,n,i){a0(i),e=cl(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var da=null,wa=null;function iy(t){z0(t,0)}function Fl(t){var e=is(t);if(Qm(e))return t}function ry(t,e){if(t==="change")return e}var N0=!1;if(mi){var _c;if(mi){var yc="oninput"in document;if(!yc){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),yc=typeof Hf.oninput=="function"}_c=yc}else _c=!1;N0=_c&&(!document.documentMode||9<document.documentMode)}function jf(){da&&(da.detachEvent("onpropertychange",P0),wa=da=null)}function P0(t){if(t.propertyName==="value"&&Fl(wa)){var e=[];R0(e,wa,t,lh(t)),u0(iy,e)}}function sy(t,e,n){t==="focusin"?(jf(),da=e,wa=n,da.attachEvent("onpropertychange",P0)):t==="focusout"&&jf()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(wa)}function oy(t,e){if(t==="click")return Fl(e)}function ly(t,e){if(t==="input"||t==="change")return Fl(e)}function cy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:cy;function ba(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gf(t,e){var n=Vf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vf(n)}}function L0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?L0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function D0(){for(var t=window,e=nl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=nl(t.document)}return e}function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uy(t){var e=D0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&L0(n.ownerDocument.documentElement,n)){if(i!==null&&xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gf(n,s);var a=Gf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dy=mi&&"documentMode"in document&&11>=document.documentMode,ts=null,Ou=null,ha=null,Fu=!1;function Wf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fu||ts==null||ts!==nl(i)||(i=ts,"selectionStart"in i&&xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ha&&ba(ha,i)||(ha=i,i=cl(Ou,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Sc={},I0={};mi&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Bl(t){if(Sc[t])return Sc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in I0)return Sc[t]=e[n];return t}var U0=Bl("animationend"),k0=Bl("animationiteration"),O0=Bl("animationstart"),F0=Bl("transitionend"),B0=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){B0.set(t,e),Dr(e,[t])}for(var Ec=0;Ec<Xf.length;Ec++){var Mc=Xf[Ec],hy=Mc.toLowerCase(),fy=Mc[0].toUpperCase()+Mc.slice(1);Qi(hy,"on"+fy)}Qi(U0,"onAnimationEnd");Qi(k0,"onAnimationIteration");Qi(O0,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(F0,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Yf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,h_(i,e,void 0,t),t.currentTarget=null}function z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Yf(r,o,u),s=l}}}if(rl)throw t=Du,rl=!1,Du=null,t}function dt(t,e){var n=e[Vu];n===void 0&&(n=e[Vu]=new Set);var i=t+"__bubble";n.has(i)||(H0(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),H0(n,t,i,e)}var so="_reactListening"+Math.random().toString(36).slice(2);function Ta(t){if(!t[so]){t[so]=!0,qm.forEach(function(n){n!=="selectionchange"&&(py.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[so]||(e[so]=!0,wc("selectionchange",!1,e))}}function H0(t,e,n,i){switch(w0(e)){case 1:var r=A_;break;case 4:r=R_;break;default:r=hh}n=r.bind(null,e,n,t),r=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=_r(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}u0(function(){var u=s,h=lh(n),p=[];e:{var f=B0.get(t);if(f!==void 0){var m=ph,x=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":m=G_;break;case"focusin":x="focus",m=vc;break;case"focusout":x="blur",m=vc;break;case"beforeblur":case"afterblur":m=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=L_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Y_;break;case U0:case k0:case O0:m=U_;break;case F0:m=$_;break;case"scroll":m=N_;break;case"wheel":m=Z_;break;case"copy":case"cut":case"paste":m=O_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Of}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?f!==null?f+"Capture":null:f;y=[];for(var v=u,_;v!==null;){_=v;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,d!==null&&(E=ya(v,d),E!=null&&y.push(Ca(v,E,_)))),g)break;v=v.return}0<y.length&&(f=new m(f,x,null,n,h),p.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Nu&&(x=n.relatedTarget||n.fromElement)&&(_r(x)||x[gi]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?_r(x):null,x!==null&&(g=Ir(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(y=Uf,E="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Of,E="onPointerLeave",d="onPointerEnter",v="pointer"),g=m==null?f:is(m),_=x==null?f:is(x),f=new y(E,v+"leave",m,n,h),f.target=g,f.relatedTarget=_,E=null,_r(h)===u&&(y=new y(d,v+"enter",x,n,h),y.target=_,y.relatedTarget=g,E=y),g=E,m&&x)t:{for(y=m,d=x,v=0,_=y;_;_=kr(_))v++;for(_=0,E=d;E;E=kr(E))_++;for(;0<v-_;)y=kr(y),v--;for(;0<_-v;)d=kr(d),_--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=kr(y),d=kr(d)}y=null}else y=null;m!==null&&qf(p,f,m,y,!1),x!==null&&g!==null&&qf(p,g,x,y,!0)}}e:{if(f=u?is(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var P=ry;else if(zf(f))if(N0)P=ly;else{P=ay;var A=sy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=oy);if(P&&(P=P(t,u))){R0(p,P,n,h);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&bu(f,"number",f.value)}switch(A=u?is(u):window,t){case"focusin":(zf(A)||A.contentEditable==="true")&&(ts=A,Ou=u,ha=null);break;case"focusout":ha=Ou=ts=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Wf(p,n,h);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":Wf(p,n,h)}var T;if(gh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else es?C0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(T0&&n.locale!=="ko"&&(es||L!=="onCompositionStart"?L==="onCompositionEnd"&&es&&(T=b0()):(ki=h,fh="value"in ki?ki.value:ki.textContent,es=!0)),A=cl(u,L),0<A.length&&(L=new kf(L,t,null,n,h),p.push({event:L,listeners:A}),T?L.data=T:(T=A0(n),T!==null&&(L.data=T)))),(T=Q_?ey(t,n):ty(t,n))&&(u=cl(u,"onBeforeInput"),0<u.length&&(h=new kf("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=T))}z0(p,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ya(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=ya(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=ya(n,s),l!=null&&a.unshift(Ca(n,l,o))):r||(l=ya(n,s),l!=null&&a.push(Ca(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(my,`
`).replace(gy,"")}function ao(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(ue(425))}function ul(){}var Bu=null,zu=null;function Hu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(_y)}:ju;function _y(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),$n="__reactFiber$"+ks,Aa="__reactProps$"+ks,gi="__reactContainer$"+ks,Vu="__reactEvents$"+ks,yy="__reactListeners$"+ks,Sy="__reactHandles$"+ks;function _r(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zf(t);t!==null;){if(n=t[$n])return n;t=Zf(t)}return e}t=n,n=t.parentNode}return null}function za(t){return t=t[$n]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function zl(t){return t[Aa]||null}var Gu=[],rs=-1;function er(t){return{current:t}}function ft(t){0>rs||(t.current=Gu[rs],Gu[rs]=null,rs--)}function ct(t,e){rs++,Gu[rs]=t.current,t.current=e}var Ki={},Gt=er(Ki),rn=er(!1),Tr=Ki;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ki;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function dl(){ft(rn),ft(Gt)}function Jf(t,e,n){if(Gt.current!==Ki)throw Error(ue(168));ct(Gt,e),ct(rn,n)}function j0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,s_(t)||"Unknown",r));return _t({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Tr=Gt.current,ct(Gt,t),ct(rn,rn.current),!0}function Qf(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=j0(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,ft(rn),ft(Gt),ct(Gt,t)):ft(rn),ct(rn,n)}var ci=null,Hl=!1,Cc=!1;function V0(t){ci===null?ci=[t]:ci.push(t)}function Ey(t){Hl=!0,V0(t)}function tr(){if(!Cc&&ci!==null){Cc=!0;var t=0,e=st;try{var n=ci;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ci=null,Hl=!1}catch(r){throw ci!==null&&(ci=ci.slice(t+1)),p0(ch,tr),r}finally{st=e,Cc=!1}}return null}var ss=[],as=0,fl=null,pl=0,En=[],Mn=0,Cr=null,ui=1,di="";function fr(t,e){ss[as++]=pl,ss[as++]=fl,fl=t,pl=e}function G0(t,e,n){En[Mn++]=ui,En[Mn++]=di,En[Mn++]=Cr,Cr=t;var i=ui;t=di;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ui=1<<32-Hn(e)+r|n<<r|i,di=s+t}else ui=1<<s|n<<r|i,di=t}function vh(t){t.return!==null&&(fr(t,1),G0(t,1,0))}function _h(t){for(;t===fl;)fl=ss[--as],ss[as]=null,pl=ss[--as],ss[as]=null;for(;t===Cr;)Cr=En[--Mn],En[Mn]=null,di=En[--Mn],En[Mn]=null,ui=En[--Mn],En[Mn]=null}var mn=null,pn=null,pt=!1,kn=null;function W0(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:ui,overflow:di}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function Wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xu(t){if(pt){var e=pn;if(e){var n=e;if(!ep(t,e)){if(Wu(t))throw Error(ue(418));e=ji(n.nextSibling);var i=mn;e&&ep(t,e)?W0(i,n):(t.flags=t.flags&-4097|2,pt=!1,mn=t)}}else{if(Wu(t))throw Error(ue(418));t.flags=t.flags&-4097|2,pt=!1,mn=t}}}function tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function oo(t){if(t!==mn)return!1;if(!pt)return tp(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hu(t.type,t.memoizedProps)),e&&(e=pn)){if(Wu(t))throw X0(),Error(ue(418));for(;e;)W0(t,e),e=ji(e.nextSibling)}if(tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?ji(t.stateNode.nextSibling):null;return!0}function X0(){for(var t=pn;t;)t=ji(t.nextSibling)}function Es(){pn=mn=null,pt=!1}function yh(t){kn===null?kn=[t]:kn.push(t)}var My=Si.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function lo(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function np(t){var e=t._init;return e(t._payload)}function Y0(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Xi(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,_,E){return v===null||v.tag!==6?(v=Ic(_,d.mode,E),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,E){var P=_.type;return P===Qr?h(d,v,_.props.children,E,_.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ni&&np(P)===v.type)?(E=r(v,_.props),E.ref=Xs(d,v,_),E.return=d,E):(E=qo(_.type,_.key,_.props,null,d.mode,E),E.ref=Xs(d,v,_),E.return=d,E)}function u(d,v,_,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Uc(_,d.mode,E),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function h(d,v,_,E,P){return v===null||v.tag!==7?(v=br(_,d.mode,E,P),v.return=d,v):(v=r(v,_),v.return=d,v)}function p(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ic(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Za:return _=qo(v.type,v.key,v.props,null,d.mode,_),_.ref=Xs(d,null,v),_.return=d,_;case Jr:return v=Uc(v,d.mode,_),v.return=d,v;case Ni:var E=v._init;return p(d,E(v._payload),_)}if(ra(v)||Hs(v))return v=br(v,d.mode,_,null),v.return=d,v;lo(d,v)}return null}function f(d,v,_,E){var P=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:o(d,v,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Za:return _.key===P?l(d,v,_,E):null;case Jr:return _.key===P?u(d,v,_,E):null;case Ni:return P=_._init,f(d,v,P(_._payload),E)}if(ra(_)||Hs(_))return P!==null?null:h(d,v,_,E,null);lo(d,_)}return null}function m(d,v,_,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(_)||null,o(v,d,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Za:return d=d.get(E.key===null?_:E.key)||null,l(v,d,E,P);case Jr:return d=d.get(E.key===null?_:E.key)||null,u(v,d,E,P);case Ni:var A=E._init;return m(d,v,_,A(E._payload),P)}if(ra(E)||Hs(E))return d=d.get(_)||null,h(v,d,E,P,null);lo(v,E)}return null}function x(d,v,_,E){for(var P=null,A=null,T=v,L=v=0,H=null;T!==null&&L<_.length;L++){T.index>L?(H=T,T=null):H=T.sibling;var S=f(d,T,_[L],E);if(S===null){T===null&&(T=H);break}t&&T&&S.alternate===null&&e(d,T),v=s(S,v,L),A===null?P=S:A.sibling=S,A=S,T=H}if(L===_.length)return n(d,T),pt&&fr(d,L),P;if(T===null){for(;L<_.length;L++)T=p(d,_[L],E),T!==null&&(v=s(T,v,L),A===null?P=T:A.sibling=T,A=T);return pt&&fr(d,L),P}for(T=i(d,T);L<_.length;L++)H=m(T,d,L,_[L],E),H!==null&&(t&&H.alternate!==null&&T.delete(H.key===null?L:H.key),v=s(H,v,L),A===null?P=H:A.sibling=H,A=H);return t&&T.forEach(function(w){return e(d,w)}),pt&&fr(d,L),P}function y(d,v,_,E){var P=Hs(_);if(typeof P!="function")throw Error(ue(150));if(_=P.call(_),_==null)throw Error(ue(151));for(var A=P=null,T=v,L=v=0,H=null,S=_.next();T!==null&&!S.done;L++,S=_.next()){T.index>L?(H=T,T=null):H=T.sibling;var w=f(d,T,S.value,E);if(w===null){T===null&&(T=H);break}t&&T&&w.alternate===null&&e(d,T),v=s(w,v,L),A===null?P=w:A.sibling=w,A=w,T=H}if(S.done)return n(d,T),pt&&fr(d,L),P;if(T===null){for(;!S.done;L++,S=_.next())S=p(d,S.value,E),S!==null&&(v=s(S,v,L),A===null?P=S:A.sibling=S,A=S);return pt&&fr(d,L),P}for(T=i(d,T);!S.done;L++,S=_.next())S=m(T,d,L,S.value,E),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?L:S.key),v=s(S,v,L),A===null?P=S:A.sibling=S,A=S);return t&&T.forEach(function(k){return e(d,k)}),pt&&fr(d,L),P}function g(d,v,_,E){if(typeof _=="object"&&_!==null&&_.type===Qr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Za:e:{for(var P=_.key,A=v;A!==null;){if(A.key===P){if(P=_.type,P===Qr){if(A.tag===7){n(d,A.sibling),v=r(A,_.props.children),v.return=d,d=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Ni&&np(P)===A.type){n(d,A.sibling),v=r(A,_.props),v.ref=Xs(d,A,_),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===Qr?(v=br(_.props.children,d.mode,E,_.key),v.return=d,d=v):(E=qo(_.type,_.key,_.props,null,d.mode,E),E.ref=Xs(d,v,_),E.return=d,d=E)}return a(d);case Jr:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Uc(_,d.mode,E),v.return=d,d=v}return a(d);case Ni:return A=_._init,g(d,v,A(_._payload),E)}if(ra(_))return x(d,v,_,E);if(Hs(_))return y(d,v,_,E);lo(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=Ic(_,d.mode,E),v.return=d,d=v),a(d)):n(d,v)}return g}var Ms=Y0(!0),q0=Y0(!1),ml=er(null),gl=null,os=null,Sh=null;function Eh(){Sh=os=gl=null}function Mh(t){var e=ml.current;ft(ml),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){gl=t,Sh=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(gl===null)throw Error(ue(308));os=t,gl.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var yr=null;function wh(t){yr===null?yr=[t]:yr.push(t)}function $0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wh(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,wh(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=u=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,y=o;switch(f=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=_t({},p,f);break e;case 2:Pi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=a,t.lanes=a,t.memoizedState=p}}function rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Ha={},Jn=er(Ha),Ra=er(Ha),Na=er(Ha);function Sr(t){if(t===Ha)throw Error(ue(174));return t}function Th(t,e){switch(ct(Na,e),ct(Ra,t),ct(Jn,Ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}ft(Jn),ct(Jn,e)}function ws(){ft(Jn),ft(Ra),ft(Na)}function Z0(t){Sr(Na.current);var e=Sr(Jn.current),n=Cu(e,t.type);e!==n&&(ct(Ra,t),ct(Jn,n))}function Ch(t){Ra.current===t&&(ft(Jn),ft(Ra))}var gt=er(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function Ah(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Vo=Si.ReactCurrentDispatcher,Rc=Si.ReactCurrentBatchConfig,Ar=0,xt=null,Ct=null,Lt=null,_l=!1,fa=!1,Pa=0,wy=0;function Bt(){throw Error(ue(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function Nh(t,e,n,i,r,s){if(Ar=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vo.current=t===null||t.memoizedState===null?Ay:Ry,t=n(i,r),fa){s=0;do{if(fa=!1,Pa=0,25<=s)throw Error(ue(301));s+=1,Lt=Ct=null,e.updateQueue=null,Vo.current=Ny,t=n(i,r)}while(fa)}if(Vo.current=yl,e=Ct!==null&&Ct.next!==null,Ar=0,Lt=Ct=xt=null,_l=!1,e)throw Error(ue(300));return t}function Ph(){var t=Pa!==0;return Pa=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?xt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function An(){if(Ct===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Lt===null?xt.memoizedState:Lt.next;if(e!==null)Lt=e,Ct=t;else{if(t===null)throw Error(ue(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Lt===null?xt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function La(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=An(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Ar&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,xt.lanes|=h,Rr|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=An(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function J0(){}function Q0(t,e){var n=xt,i=An(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Lh(ng.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Da(9,tg.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ue(349));Ar&30||eg(n,e,r)}return r}function eg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tg(t,e,n,i){e.value=n,e.getSnapshot=i,ig(e)&&rg(t)}function ng(t,e,n){return n(function(){ig(e)&&rg(t)})}function ig(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function rg(t){var e=xi(t,1);e!==null&&jn(e,t,1,-1)}function sp(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},e.queue=t,t=t.dispatch=Cy.bind(null,xt,t),[e.memoizedState,t]}function Da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function sg(){return An().memoizedState}function Go(t,e,n,i){var r=Xn();xt.flags|=t,r.memoizedState=Da(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=An();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&Rh(i,a.deps)){r.memoizedState=Da(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Da(1|e,n,s,i)}function ap(t,e){return Go(8390656,8,t,e)}function Lh(t,e){return jl(2048,8,t,e)}function ag(t,e){return jl(4,2,t,e)}function og(t,e){return jl(4,4,t,e)}function lg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cg(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,lg.bind(null,e,t),n)}function Dh(){}function ug(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function dg(t,e){var n=An();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function hg(t,e,n){return Ar&21?(Vn(n,e)||(n=x0(),xt.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function by(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{st=n,Rc.transition=i}}function fg(){return An().memoizedState}function Ty(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},pg(t))mg(e,n);else if(n=$0(t,e,n,i),n!==null){var r=$t();jn(n,t,i,r),gg(n,e,i)}}function Cy(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(pg(t))mg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,wh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$0(t,e,r,i),n!==null&&(r=$t(),jn(n,t,i,r),gg(n,e,i))}}function pg(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function mg(t,e){fa=_l=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var yl={readContext:Cn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},Ay={readContext:Cn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:ap,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Go(4194308,4,lg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Go(4194308,4,t,e)},useInsertionEffect:function(t,e){return Go(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ty.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:sp,useDebugValue:Dh,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=sp(!1),e=t[0];return t=by.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=Xn();if(pt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Dt===null)throw Error(ue(349));Ar&30||eg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ap(ng.bind(null,i,s,t),[t]),i.flags|=2048,Da(9,tg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Dt.identifierPrefix;if(pt){var n=di,i=ui;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Pa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ry={readContext:Cn,useCallback:ug,useContext:Cn,useEffect:Lh,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:og,useMemo:dg,useReducer:Nc,useRef:sg,useState:function(){return Nc(La)},useDebugValue:Dh,useDeferredValue:function(t){var e=An();return hg(e,Ct.memoizedState,t)},useTransition:function(){var t=Nc(La)[0],e=An().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:Q0,useId:fg,unstable_isNewReconciler:!1},Ny={readContext:Cn,useCallback:ug,useContext:Cn,useEffect:Lh,useImperativeHandle:cg,useInsertionEffect:ag,useLayoutEffect:og,useMemo:dg,useReducer:Pc,useRef:sg,useState:function(){return Pc(La)},useDebugValue:Dh,useDeferredValue:function(t){var e=An();return Ct===null?e.memoizedState=t:hg(e,Ct.memoizedState,t)},useTransition:function(){var t=Pc(La)[0],e=An().memoizedState;return[t,e]},useMutableSource:J0,useSyncExternalStore:Q0,useId:fg,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Ir(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Wi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(jn(e,t,r,i),jo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Wi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(jn(e,t,r,i),jo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Wi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(jn(e,t,i,n),jo(e,t,i))}};function op(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ba(n,i)||!ba(r,s):!0}function xg(t,e,n){var i=!1,r=Ki,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=sn(e)?Tr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):Ki),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=sn(e)?Tr:Gt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=r_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Py=typeof WeakMap=="function"?WeakMap:Map;function vg(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){El||(El=!0,ad=i),Ku(t,e)},n}function _g(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ku(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function cp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Py;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Wy.bind(null,t,e,n),e.then(t,t))}function up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var Ly=Si.ReactCurrentOwner,nn=!1;function Yt(t,e,n,i){e.child=t===null?q0(e,null,n,i):Ms(e,t.child,n,i)}function hp(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=Nh(t,e,n,i,s,r),n=Ph(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(pt&&n&&vh(e),e.flags|=1,Yt(t,e,i,r),e.child)}function fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yg(t,e,s,i,r)):(t=qo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ba,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function yg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ba(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Zu(t,e,n,i,r)}function Sg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(cs,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(cs,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(cs,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(cs,fn),fn|=i;return Yt(t,e,r,n),e.child}function Eg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zu(t,e,n,i,r){var s=sn(n)?Tr:Gt.current;return s=Ss(e,s),ms(e,r),n=Nh(t,e,n,i,s,r),i=Ph(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(pt&&i&&vh(e),e.flags|=1,Yt(t,e,n,r),e.child)}function pp(t,e,n,i,r){if(sn(n)){var s=!0;hl(e)}else s=!1;if(ms(e,r),e.stateNode===null)Wo(t,e),xg(e,n,i),$u(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=sn(n)?Tr:Gt.current,u=Ss(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&lp(e,a,i,u),Pi=!1;var f=e.memoizedState;a.state=f,xl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||rn.current||Pi?(typeof h=="function"&&(qu(e,n,h,i),l=e.memoizedState),(o=Pi||op(e,n,o,i,f,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,K0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:In(e.type,o),a.props=u,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=sn(n)?Tr:Gt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&lp(e,a,i,l),Pi=!1,f=e.memoizedState,a.state=f,xl(e,i,a,r);var x=e.memoizedState;o!==p||f!==x||rn.current||Pi?(typeof m=="function"&&(qu(e,n,m,i),x=e.memoizedState),(u=Pi||op(e,n,u,i,f,x,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Ju(t,e,n,i,s,r)}function Ju(t,e,n,i,r,s){Eg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Qf(e,n,!1),vi(t,e,s);i=e.stateNode,Ly.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,o,s)):Yt(t,e,o,s),e.memoizedState=i.state,r&&Qf(e,n,!0),e.child}function Mg(t){var e=t.stateNode;e.pendingContext?Jf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jf(t,e.context,!1),Th(t,e.containerInfo)}function mp(t,e,n,i,r){return Es(),yh(r),e.flags|=256,Yt(t,e,n,i),e.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function wg(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(gt,r&1),t===null)return Xu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Xl(a,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ed(n),e.memoizedState=Qu,t):Ih(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Dy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Xi(o,s):(s=br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ed(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Qu,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function co(t,e,n,i){return i!==null&&yh(i),Ms(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(ue(422))),co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Xl({mode:"visible",children:i.children},r,0,null),s=br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ms(e,t.child,null,a),e.child.memoizedState=ed(a),e.memoizedState=Qu,s);if(!(e.mode&1))return co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ue(419)),i=Lc(s,i,void 0),co(t,e,a,i)}if(o=(a&t.childLanes)!==0,nn||o){if(i=Dt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),jn(i,t,r,-1))}return zh(),i=Lc(Error(ue(421))),co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Xy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=ji(r.nextSibling),mn=e,pt=!0,kn=null,t!==null&&(En[Mn++]=ui,En[Mn++]=di,En[Mn++]=Cr,ui=t.id,di=t.overflow,Cr=e),e=Ih(e,i.children),e.flags|=4096,e)}function gp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yu(t.return,e,n)}function Dc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gp(t,n,e);else if(t.tag===19)gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Iy(t,e,n){switch(e.tag){case 3:Mg(e),Es();break;case 5:Z0(e);break;case 1:sn(e.type)&&hl(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?wg(t,e,n):(ct(gt,gt.current&1),t=vi(t,e,n),t!==null?t.sibling:null);ct(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Sg(t,e,n)}return vi(t,e,n)}var Tg,td,Cg,Ag;Tg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};td=function(){};Cg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(Jn.current);var s=null;switch(n){case"input":r=Mu(t,r),i=Mu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Tu(t,r),i=Tu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ul)}Au(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Ag=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Uy(t,e,n){var i=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&dl(),zt(e),null;case 3:return i=e.stateNode,ws(),ft(rn),ft(Gt),Ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(cd(kn),kn=null))),td(t,e),zt(e),null;case 5:Ch(e);var r=Sr(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)Cg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return zt(e),null}if(t=Sr(Jn.current),oo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Aa]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)dt(aa[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":bf(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Cf(i,s),dt("invalid",i)}Au(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&ao(i.textContent,o,t),r=["children",""+o]):va.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":Ja(i),Tf(i,s,!0);break;case"textarea":Ja(i),Af(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=n0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[Aa]=i,Tg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ru(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)dt(aa[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":bf(t,i),r=Mu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Cf(t,i),r=Tu(t,i),dt("invalid",t);break;default:r=i}Au(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?s0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&_a(t,l):typeof l=="number"&&_a(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&rh(t,s,l,a))}switch(n){case"input":Ja(t),Tf(t,i,!1);break;case"textarea":Ja(t),Af(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)Ag(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Sr(Na.current),Sr(Jn.current),oo(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:ao(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ao(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return zt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&pn!==null&&e.mode&1&&!(e.flags&128))X0(),Es(),e.flags|=98560,s=!1;else if(s=oo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[$n]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else kn!==null&&(cd(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?At===0&&(At=3):zh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return ws(),td(t,e),t===null&&Ta(e.stateNode.containerInfo),zt(e),null;case 10:return Mh(e.type._context),zt(e),null;case 17:return sn(e.type)&&dl(),zt(e),null;case 19:if(ft(gt),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=vl(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Ts&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return zt(e),null}else 2*Mt()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=gt.current,ct(gt,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function ky(t,e){switch(_h(e),e.tag){case 1:return sn(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),ft(rn),ft(Gt),Ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return ws(),null;case 10:return Mh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var uo=!1,Vt=!1,Oy=typeof WeakSet=="function"?WeakSet:Set,we=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function nd(t,e,n){try{n()}catch(i){St(t,e,i)}}var xp=!1;function Fy(t,e){if(Bu=ol,t=D0(),xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zu={focusedElem:t,selectionRange:n},ol=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(E){St(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return x=xp,xp=!1,x}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nd(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function id(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Rg(t){var e=t.alternate;e!==null&&(t.alternate=null,Rg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Aa],delete e[Vu],delete e[yy],delete e[Sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ng(t){return t.tag===5||t.tag===3||t.tag===4}function vp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ul));else if(i!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var kt=null,Un=!1;function Mi(t,e,n){for(n=n.child;n!==null;)Pg(t,e,n),n=n.sibling}function Pg(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Vt||ls(n,e);case 6:var i=kt,r=Un;kt=null,Mi(t,e,n),kt=i,Un=r,kt!==null&&(Un?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Un?(t=kt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Ma(t)):Tc(kt,n.stateNode));break;case 4:i=kt,r=Un,kt=n.stateNode.containerInfo,Un=!0,Mi(t,e,n),kt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&nd(n,e,a),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Vt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Mi(t,e,n),Vt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function _p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Oy),e.forEach(function(i){var r=Yy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:kt=o.stateNode,Un=!1;break e;case 3:kt=o.stateNode.containerInfo,Un=!0;break e;case 4:kt=o.stateNode.containerInfo,Un=!0;break e}o=o.return}if(kt===null)throw Error(ue(160));Pg(s,a,r),kt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lg(e,t),e=e.sibling}function Lg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Wn(t),i&4){try{pa(3,t,t.return),Gl(3,t)}catch(y){St(t,t.return,y)}try{pa(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:Nn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(Nn(e,t),Wn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{_a(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&e0(r,s),Ru(o,a);var u=Ru(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?s0(r,p):h==="dangerouslySetInnerHTML"?i0(r,p):h==="children"?_a(r,p):rh(r,h,p,u)}switch(o){case"input":wu(r,s);break;case"textarea":t0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ds(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Aa]=s}catch(y){St(t,t.return,y)}}break;case 6:if(Nn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){St(t,t.return,y)}}break;case 3:if(Nn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:Nn(e,t),Wn(t);break;case 13:Nn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Oh=Mt())),i&4&&_p(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||h,Nn(e,t),Vt=u):Nn(e,t),Wn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(we=t,h=t.child;h!==null;){for(p=we=h;we!==null;){switch(f=we,m=f.child,f.tag){case 0:case 11:case 14:case 15:pa(4,f,f.return);break;case 1:ls(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){Sp(p);continue}}m!==null?(m.return=f,we=m):Sp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=r0("display",a))}catch(y){St(t,t.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){St(t,t.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Nn(e,t),Wn(t),i&4&&_p(t);break;case 21:break;default:Nn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ng(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(_a(r,""),i.flags&=-33);var s=vp(t);sd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=vp(t);rd(t,o,a);break;default:throw Error(ue(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function By(t,e,n){we=t,Dg(t)}function Dg(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||uo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Vt;o=uo;var u=Vt;if(uo=a,(Vt=l)&&!u)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?Ep(r):l!==null?(l.return=a,we=l):Ep(r);for(;s!==null;)we=s,Dg(s),s=s.sibling;we=r,uo=o,Vt=u}yp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):yp(t)}}function yp(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Vt||e.flags&512&&id(e)}catch(f){St(e,e.return,f)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Sp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Ep(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{id(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{id(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var zy=Math.ceil,Sl=Si.ReactCurrentDispatcher,Uh=Si.ReactCurrentOwner,Tn=Si.ReactCurrentBatchConfig,Qe=0,Dt=null,bt=null,Ot=0,fn=0,cs=er(0),At=0,Ia=null,Rr=0,Wl=0,kh=0,ma=null,en=null,Oh=0,Ts=1/0,li=null,El=!1,ad=null,Gi=null,ho=!1,Oi=null,Ml=0,ga=0,od=null,Xo=-1,Yo=0;function $t(){return Qe&6?Mt():Xo!==-1?Xo:Xo=Mt()}function Wi(t){return t.mode&1?Qe&2&&Ot!==0?Ot&-Ot:My.transition!==null?(Yo===0&&(Yo=x0()),Yo):(t=st,t!==0||(t=window.event,t=t===void 0?16:w0(t.type)),t):1}function jn(t,e,n,i){if(50<ga)throw ga=0,od=null,Error(ue(185));Fa(t,n,i),(!(Qe&2)||t!==Dt)&&(t===Dt&&(!(Qe&2)&&(Wl|=n),At===4&&Ii(t,Ot)),an(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ts=Mt()+500,Hl&&tr()))}function an(t,e){var n=t.callbackNode;M_(t,e);var i=al(t,t===Dt?Ot:0);if(i===0)n!==null&&Pf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pf(n),e===1)t.tag===0?Ey(Mp.bind(null,t)):V0(Mp.bind(null,t)),vy(function(){!(Qe&6)&&tr()}),n=null;else{switch(v0(i)){case 1:n=ch;break;case 4:n=m0;break;case 16:n=sl;break;case 536870912:n=g0;break;default:n=sl}n=Hg(n,Ig.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ig(t,e){if(Xo=-1,Yo=0,Qe&6)throw Error(ue(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=al(t,t===Dt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=Qe;Qe|=2;var s=kg();(Dt!==t||Ot!==e)&&(li=null,Ts=Mt()+500,wr(t,e));do try{Vy();break}catch(o){Ug(t,o)}while(!0);Eh(),Sl.current=s,Qe=r,bt!==null?e=0:(Dt=null,Ot=0,e=At)}if(e!==0){if(e===2&&(r=Iu(t),r!==0&&(i=r,e=ld(t,r))),e===1)throw n=Ia,wr(t,0),Ii(t,i),an(t,Mt()),n;if(e===6)Ii(t,i);else{if(r=t.current.alternate,!(i&30)&&!Hy(r)&&(e=wl(t,i),e===2&&(s=Iu(t),s!==0&&(i=s,e=ld(t,s))),e===1))throw n=Ia,wr(t,0),Ii(t,i),an(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:pr(t,en,li);break;case 3:if(Ii(t,i),(i&130023424)===i&&(e=Oh+500-Mt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ju(pr.bind(null,t,en,li),e);break}pr(t,en,li);break;case 4:if(Ii(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Hn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zy(i/1960))-i,10<i){t.timeoutHandle=ju(pr.bind(null,t,en,li),i);break}pr(t,en,li);break;case 5:pr(t,en,li);break;default:throw Error(ue(329))}}}return an(t,Mt()),t.callbackNode===n?Ig.bind(null,t):null}function ld(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=en,en=n,e!==null&&cd(e)),t}function cd(t){en===null?en=t:en.push.apply(en,t)}function Hy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ii(t,e){for(e&=~kh,e&=~Wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if(Qe&6)throw Error(ue(327));gs();var e=al(t,0);if(!(e&1))return an(t,Mt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Iu(t);i!==0&&(e=i,n=ld(t,i))}if(n===1)throw n=Ia,wr(t,0),Ii(t,e),an(t,Mt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,en,li),an(t,Mt()),null}function Fh(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ts=Mt()+500,Hl&&tr())}}function Nr(t){Oi!==null&&Oi.tag===0&&!(Qe&6)&&gs();var e=Qe;Qe|=1;var n=Tn.transition,i=st;try{if(Tn.transition=null,st=1,t)return t()}finally{st=i,Tn.transition=n,Qe=e,!(Qe&6)&&tr()}}function Bh(){fn=cs.current,ft(cs)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xy(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(_h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dl();break;case 3:ws(),ft(rn),ft(Gt),Ah();break;case 5:Ch(i);break;case 4:ws();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:Mh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(Dt=t,bt=t=Xi(t.current,null),Ot=fn=e,At=0,Ia=null,kh=Wl=Rr=0,en=ma=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}yr=null}return t}function Ug(t,e){do{var n=bt;try{if(Eh(),Vo.current=yl,_l){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}_l=!1}if(Ar=0,Lt=Ct=xt=null,fa=!1,Pa=0,Uh.current=null,n===null||n.return===null){At=1,Ia=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ot,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=up(a);if(m!==null){m.flags&=-257,dp(m,a,o,s,e),m.mode&1&&cp(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){cp(s,u,e),zh();break e}l=Error(ue(426))}}else if(pt&&o.mode&1){var g=up(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),dp(g,a,o,s,e),yh(bs(l,o));break e}}s=l=bs(l,o),At!==4&&(At=2),ma===null?ma=[s]:ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=vg(s,l,e);ip(s,d);break e;case 1:o=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Gi===null||!Gi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=_g(s,o,e);ip(s,E);break e}}s=s.return}while(s!==null)}Fg(n)}catch(P){e=P,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function kg(){var t=Sl.current;return Sl.current=yl,t===null?yl:t}function zh(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Rr&268435455)&&!(Wl&268435455)||Ii(Dt,Ot)}function wl(t,e){var n=Qe;Qe|=2;var i=kg();(Dt!==t||Ot!==e)&&(li=null,wr(t,e));do try{jy();break}catch(r){Ug(t,r)}while(!0);if(Eh(),Qe=n,Sl.current=i,bt!==null)throw Error(ue(261));return Dt=null,Ot=0,At}function jy(){for(;bt!==null;)Og(bt)}function Vy(){for(;bt!==null&&!p_();)Og(bt)}function Og(t){var e=zg(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?Fg(t):bt=e,Uh.current=null}function Fg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ky(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,bt=null;return}}else if(n=Uy(n,e,fn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);At===0&&(At=5)}function pr(t,e,n){var i=st,r=Tn.transition;try{Tn.transition=null,st=1,Gy(t,e,n,i)}finally{Tn.transition=r,st=i}return null}function Gy(t,e,n,i){do gs();while(Oi!==null);if(Qe&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w_(t,s),t===Dt&&(bt=Dt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,Hg(sl,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var a=st;st=1;var o=Qe;Qe|=4,Uh.current=null,Fy(t,n),Lg(n,t),uy(zu),ol=!!Bu,zu=Bu=null,t.current=n,By(n),m_(),Qe=o,st=a,Tn.transition=s}else t.current=n;if(ho&&(ho=!1,Oi=t,Ml=r),s=t.pendingLanes,s===0&&(Gi=null),v_(n.stateNode),an(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(El)throw El=!1,t=ad,ad=null,t;return Ml&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===od?ga++:(ga=0,od=t):ga=0,tr(),null}function gs(){if(Oi!==null){var t=v0(Ml),e=Tn.transition,n=st;try{if(Tn.transition=null,st=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,Ml=0,Qe&6)throw Error(ue(331));var r=Qe;for(Qe|=4,we=t.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(we=u;we!==null;){var h=we;switch(h.tag){case 0:case 11:case 15:pa(8,h,s)}var p=h.child;if(p!==null)p.return=h,we=p;else for(;we!==null;){h=we;var f=h.sibling,m=h.return;if(Rg(h),h===u){we=null;break}if(f!==null){f.return=m,we=f;break}we=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,we=d;break e}we=s.return}}var v=t.current;for(we=v;we!==null;){a=we;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,we=_;else e:for(a=v;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gl(9,o)}}catch(P){St(o,o.return,P)}if(o===a){we=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,we=E;break e}we=o.return}}if(Qe=r,tr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{st=n,Tn.transition=e}}return!1}function wp(t,e,n){e=bs(n,e),e=vg(t,e,1),t=Vi(t,e,1),e=$t(),t!==null&&(Fa(t,1,e),an(t,e))}function St(t,e,n){if(t.tag===3)wp(t,t,n);else for(;e!==null;){if(e.tag===3){wp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=bs(n,t),t=_g(e,t,1),e=Vi(e,t,1),t=$t(),e!==null&&(Fa(e,1,t),an(e,t));break}}e=e.return}}function Wy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ot&n)===n&&(At===4||At===3&&(Ot&130023424)===Ot&&500>Mt()-Oh?wr(t,0):kh|=n),an(t,e)}function Bg(t,e){e===0&&(t.mode&1?(e=to,to<<=1,!(to&130023424)&&(to=4194304)):e=1);var n=$t();t=xi(t,e),t!==null&&(Fa(t,e,n),an(t,n))}function Xy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Bg(t,n)}function Yy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),Bg(t,n)}var zg;zg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Iy(t,e,n);nn=!!(t.flags&131072)}else nn=!1,pt&&e.flags&1048576&&G0(e,pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wo(t,e),t=e.pendingProps;var r=Ss(e,Gt.current);ms(e,n),r=Nh(null,e,i,t,r,n);var s=Ph();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bh(e),r.updater=Vl,e.stateNode=r,r._reactInternals=e,$u(e,i,t,n),e=Ju(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&vh(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Wo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$y(i),t=In(i,t),r){case 0:e=Zu(null,e,i,t,n);break e;case 1:e=pp(null,e,i,t,n);break e;case 11:e=hp(null,e,i,t,n);break e;case 14:e=fp(null,e,i,In(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Zu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),pp(t,e,i,r,n);case 3:e:{if(Mg(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,K0(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(ue(423)),e),e=mp(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(ue(424)),e),e=mp(t,e,i,n,r);break e}else for(pn=ji(e.stateNode.containerInfo.firstChild),mn=e,pt=!0,kn=null,n=q0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=vi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return Z0(e),t===null&&Xu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Hu(i,r)?a=null:s!==null&&Hu(i,s)&&(e.flags|=32),Eg(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&Xu(e),null;case 13:return wg(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ms(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),hp(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ct(ml,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!rn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Yu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=Cn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),fp(t,e,i,r,n);case 15:return yg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Wo(t,e),e.tag=1,sn(i)?(t=!0,hl(e)):t=!1,ms(e,n),xg(e,i,r),$u(e,i,r,n),Ju(null,e,i,!0,t,n);case 19:return bg(t,e,n);case 22:return Sg(t,e,n)}throw Error(ue(156,e.tag))};function Hg(t,e){return p0(t,e)}function qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new qy(t,e,n,i)}function Hh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $y(t){if(typeof t=="function")return Hh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ah)return 11;if(t===oh)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Hh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return br(n.children,r,s,e);case sh:a=8,r|=8;break;case _u:return t=wn(12,n,e,r|2),t.elementType=_u,t.lanes=s,t;case yu:return t=wn(13,n,e,r),t.elementType=yu,t.lanes=s,t;case Su:return t=wn(19,n,e,r),t.elementType=Su,t.lanes=s,t;case Zm:return Xl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $m:a=10;break e;case Km:a=9;break e;case ah:a=11;break e;case oh:a=14;break e;case Ni:a=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Xl(t,e,n,i){return t=wn(22,t,i,e),t.elementType=Zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ic(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ky(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jh(t,e,n,i,r,s,a,o,l){return t=new Ky(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bh(s),t}function Zy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function jg(t){if(!t)return Ki;t=t._reactInternals;e:{if(Ir(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(sn(n))return j0(t,n,e)}return e}function Vg(t,e,n,i,r,s,a,o,l){return t=jh(n,i,!0,t,r,s,a,o,l),t.context=jg(null),n=t.current,i=$t(),r=Wi(n),s=pi(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,Fa(t,r,i),an(t,i),t}function Yl(t,e,n,i){var r=e.current,s=$t(),a=Wi(r);return n=jg(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,a),t!==null&&(jn(t,r,a,s),jo(t,r,a)),a}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vh(t,e){bp(t,e),(t=t.alternate)&&bp(t,e)}function Jy(){return null}var Gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gh(t){this._internalRoot=t}ql.prototype.render=Gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Yl(t,e,null,null)};ql.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Yl(null,t,null,null)}),e[gi]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=S0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&M0(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function Qy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=bl(a);s.call(u)}}var a=Vg(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=a,t[gi]=a.current,Ta(t.nodeType===8?t.parentNode:t),Nr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=bl(l);o.call(u)}}var l=jh(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[gi]=l.current,Ta(t.nodeType===8?t.parentNode:t),Nr(function(){Yl(e,l,n,i)}),l}function Kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bl(a);o.call(l)}}Yl(e,a,t,r)}else a=Qy(n,e,t,r,i);return bl(a)}_0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(uh(e,n|1),an(e,Mt()),!(Qe&6)&&(Ts=Mt()+500,tr()))}break;case 13:Nr(function(){var i=xi(t,1);if(i!==null){var r=$t();jn(i,t,1,r)}}),Vh(t,1)}};dh=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=$t();jn(e,t,134217728,n)}Vh(t,134217728)}};y0=function(t){if(t.tag===13){var e=Wi(t),n=xi(t,e);if(n!==null){var i=$t();jn(n,t,e,i)}Vh(t,e)}};S0=function(){return st};E0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Pu=function(t,e,n){switch(e){case"input":if(wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zl(i);if(!r)throw Error(ue(90));Qm(i),wu(i,r)}}}break;case"textarea":t0(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};l0=Fh;c0=Nr;var e1={usingClientEntryPoint:!1,Events:[za,is,zl,a0,o0,Fh]},qs={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t1={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h0(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{kl=fo.inject(t1),Zn=fo}catch{}}xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e1;xn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(ue(200));return Zy(t,e,null,n)};xn.createRoot=function(t,e){if(!Wh(t))throw Error(ue(299));var n=!1,i="",r=Gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jh(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,Ta(t.nodeType===8?t.parentNode:t),new Gh(e)};xn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=h0(e),t=t===null?null:t.stateNode,t};xn.flushSync=function(t){return Nr(t)};xn.hydrate=function(t,e,n){if(!$l(e))throw Error(ue(200));return Kl(null,t,e,!0,n)};xn.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Gg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Vg(e,null,t,1,n??null,r,!1,s,a),t[gi]=e.current,Ta(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ql(e)};xn.render=function(t,e,n){if(!$l(e))throw Error(ue(200));return Kl(null,t,e,!1,n)};xn.unmountComponentAtNode=function(t){if(!$l(t))throw Error(ue(40));return t._reactRootContainer?(Nr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};xn.unstable_batchedUpdates=Fh;xn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$l(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Kl(t,e,n,!1,i)};xn.version="18.3.1-next-f1338f8080-20240426";function Wg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wg)}catch(t){console.error(t)}}Wg(),Wm.exports=xn;var n1=Wm.exports,Cp=n1;xu.createRoot=Cp.createRoot,xu.hydrateRoot=Cp.hydrateRoot;/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function r1(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:i1(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=t=>{const e=s1(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function kc(t){return t!=null}function o1(t,e={}){var f,m;const n=e.attributeNames??{},i=x=>n[x]??x,r=t.size??t.width??sr.width,s=t.size??t.height??sr.height,a=((f=t.aliases)==null?void 0:f.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((m=e.className)==null?void 0:m.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?ud(...l):ud("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??sr["stroke-width"])*Number(t.size??t.width??sr.width)/Number(e.size??e.width??sr.width):e.strokeWidth??sr["stroke-width"];return["svg",{...Object.entries(sr).reduce((x,[y,g])=>(x[i(y)]=g,x),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&kc(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&kc(e.width)&&{[i("width")]:e.width},..."height"in e&&kc(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(x=>{const[y,g,d]=x,v=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...g}:g;return d?[y,v,d]:[y,v]})]}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function l1(t,e={}){return o1(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},u1=ce.createContext({}),d1=()=>ce.useContext(u1),h1=ce.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:u=[],icon:h={node:u,aliases:[],size:24},...p},f)=>{const{size:m=24,strokeWidth:x=2,absoluteStrokeWidth:y=!1,nonScalingStroke:g=!1,color:d="currentColor",className:v=""}=d1()??{},_=!!l||c1(p),[E,P,A=[]]=l1(h,{color:t??d,width:n??e??m,height:i??e??m,strokeWidth:r??x,absoluteStrokeWidth:s??y,nonScalingStroke:a??g,className:ud(v,o),hasA11yProp:_,attributes:p});return ce.createElement(E,{ref:f,...P},[...A.map(([T,L])=>ce.createElement(T,L)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function We(t,e=[],n=[]){const i=typeof t=="string"?r1(t,e,n):t,r=ce.forwardRef(({className:s,...a},o)=>ce.createElement(h1,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=a1(i.name)),r}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Xg.node;const ja=We(Xg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Yg.node;const f1=We(Yg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};qg.node;const Tl=We(qg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};$g.node;const Ap=We($g);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Kg.node;const p1=We(Kg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Zg.node;const m1=We(Zg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Jg.node;const Os=We(Jg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Qg.node;const ex=We(Qg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};tx.node;const g1=We(tx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};nx.node;const Rp=We(nx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]};ix.node;const x1=We(ix);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};rx.node;const v1=We(rx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};sx.node;const ax=We(sx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"fuel",size:24,node:[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",key:"1wtuz0"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16",key:"e09ifn"}],["path",{d:"M2 21h13",key:"1x0fut"}],["path",{d:"M3 9h11",key:"1p7c0w"}]]};ox.node;const lx=We(ox);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};cx.node;const _1=We(cx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};ux.node;const Xh=We(ux);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};dx.node;const y1=We(dx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};hx.node;const fx=We(hx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};px.node;const S1=We(px);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};mx.node;const gx=We(mx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};xx.node;const E1=We(xx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};vx.node;const M1=We(vx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};_x.node;const Ua=We(_x);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};yx.node;const w1=We(yx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};Sx.node;const b1=We(Sx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};Ex.node;const T1=We(Ex);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};Mx.node;const wx=We(Mx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx={name:"rotate-3d",size:24,node:[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",key:"1245p8"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071",key:"1i40ks"}]],aliases:["rotate-3-d"]};bx.node;const Yh=We(bx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Tx.node;const Cx=We(Tx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};Ax.node;const C1=We(Ax);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Rx.node;const _i=We(Rx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};Nx.node;const A1=We(Nx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Px.node;const R1=We(Px);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Lx.node;const Zl=We(Lx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Dx.node;const N1=We(Dx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Ix.node;const P1=We(Ix);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Ux.node;const L1=We(Ux);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};kx.node;const D1=We(kx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ox.node;const Gn=We(Ox);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Fx.node;const Jl=We(Fx),Bx=[{id:1,name:"Bengaluru",state:"Karnataka",active:!0,hubs:[{id:101,name:"Kempegowda Intl Airport (BLR)",address:"Terminal 1 & 2 Mobility Zone",landmark:"Near Arrival Gate 4",hubType:"AIRPORT"},{id:102,name:"Indiranagar Hub",address:"100 Feet Road, 12th Main",landmark:"Opposite Toit Brewery",hubType:"CITY_CENTER"},{id:103,name:"Koramangala Hub",address:"80 Feet Road, 4th Block",landmark:"Near Sony World Signal",hubType:"CITY_CENTER"},{id:104,name:"Whitefield IT Hub",address:"ITPL Main Road",landmark:"Next to Nexus Shantiniketan",hubType:"TECH_PARK"}]},{id:2,name:"Hyderabad",state:"Telangana",active:!0,hubs:[{id:201,name:"Rajiv Gandhi Intl Airport (HYD)",address:"Shamshabad Aeroplaza",landmark:"Arrival Bay 3",hubType:"AIRPORT"},{id:202,name:"Hitech City Hub",address:"Cyber Towers Outer Ring",landmark:"Near Shilparamam Metro",hubType:"TECH_PARK"},{id:203,name:"Gachibowli Hub",address:"Financial District Main Circle",landmark:"Near DLF Cyber City",hubType:"TECH_PARK"},{id:204,name:"Jubilee Hills Hub",address:"Road No 36",landmark:"Metro Pillar 140",hubType:"CITY_CENTER"}]},{id:3,name:"Mumbai",state:"Maharashtra",active:!0,hubs:[{id:301,name:"Chhatrapati Shivaji Intl Airport (BOM)",address:"Terminal 2 Ground Transportation",landmark:"P4 Parking Level",hubType:"AIRPORT"},{id:302,name:"Bandra Kurla Complex (BKC)",address:"G Block, BKC",landmark:"Near Jio World Drive",hubType:"TECH_PARK"},{id:303,name:"South Mumbai Hub",address:"Nariman Point Marine Drive",landmark:"Opposite Air India Bldg",hubType:"CITY_CENTER"}]},{id:4,name:"Delhi NCR",state:"Delhi",active:!0,hubs:[{id:401,name:"Indira Gandhi Intl Airport (DEL)",address:"Terminal 3 Multi-Level Hub",landmark:"P3 Car Park",hubType:"AIRPORT"},{id:402,name:"Cyber Hub Gurugram",address:"DLF Cyber City Phase 2",landmark:"Near Rapid Metro",hubType:"TECH_PARK"},{id:403,name:"Connaught Place Hub",address:"Inner Circle Block E",landmark:"Near Rajiv Chowk Metro",hubType:"CITY_CENTER"}]},{id:5,name:"Chennai",state:"Tamil Nadu",active:!0,hubs:[{id:501,name:"Chennai Intl Airport (MAA)",address:"Meenambakkam Terminal 2",landmark:"Aerohub Level 1",hubType:"AIRPORT"},{id:502,name:"T. Nagar Hub",address:"GN Chetty Road",landmark:"Opposite Panagal Park",hubType:"CITY_CENTER"},{id:503,name:"OMR IT Corridor",address:"Thoraipakkam Toll Gate",landmark:"Near Ascendas IT Park",hubType:"TECH_PARK"}]},{id:6,name:"Goa",state:"Goa",active:!0,hubs:[{id:601,name:"Manohar Intl Airport Mopa (GOX)",address:"North Goa Terminal",landmark:"Pickup Zone A",hubType:"AIRPORT"},{id:602,name:"Dabolim Airport (GOI)",address:"South Goa Terminal",landmark:"Arrival Exit 2",hubType:"AIRPORT"},{id:603,name:"Calangute Beach Hub",address:"Tito's Lane Junction",landmark:"Near St. Anthony Chapel",hubType:"CITY_CENTER"},{id:604,name:"Panaji Waterfront Hub",address:"Miramar Circle",landmark:"Near Dayanand Bandodkar Marg",hubType:"CITY_CENTER"}]},{id:7,name:"Pune",state:"Maharashtra",active:!0,hubs:[{id:701,name:"Pune Airport (PNQ)",address:"Lohegaon Terminal",landmark:"Arrival Bay 2",hubType:"AIRPORT"},{id:702,name:"Hinjawadi IT Hub",address:"Phase 1 Circle",landmark:"Next to Infosys Gate 1",hubType:"TECH_PARK"},{id:703,name:"Koregaon Park Hub",address:"North Main Road",landmark:"Lane 5 Corner",hubType:"CITY_CENTER"}]},{id:8,name:"Jaipur",state:"Rajasthan",active:!0,hubs:[{id:801,name:"Jaipur Intl Airport (JAI)",address:"Terminal 2 Pickups",landmark:"Gate 3",hubType:"AIRPORT"},{id:802,name:"MI Road Hub",address:"Panch Batti Circle",landmark:"Near Raj Mandir",hubType:"CITY_CENTER"}]}],je="Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur",dd=[{id:1,name:"Honda Activa 6G",brand:"Honda",model:"Activa",variant:"Standard 6G",category:"SCOOTER",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"109.51 cc PGM-FI",maxSpeed:85,zeroToHundred:14.2,pricePerHour:49,pricePerDay:449,pricePerWeek:2699,pricePerMonth:7999,securityDeposit:1e3,insuranceFee:49,mileageOrRange:"50 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/honda/activa-6g/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:3,features:"Silent Start ACG,Engine Start/Stop Switch,External Fuel Lid,Telescopic Suspension",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:7.79,torqueNm:8.84,groundClearanceMm:162,bootCapacityLitres:18},{id:2,name:"Honda Activa 125",brand:"Honda",model:"Activa 125",variant:"Disc Drum",category:"SCOOTER",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"124.0 cc ESP",maxSpeed:90,zeroToHundred:12.8,pricePerHour:59,pricePerDay:499,pricePerWeek:2999,pricePerMonth:8999,securityDeposit:1200,insuranceFee:59,mileageOrRange:"47 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/honda/activa-125/hero.jpg",colorHex:"#D4AF37",available:!0,fleetUnitsAvailable:2,features:"Idling Stop System,Digital-Analog Meter,Front Glove Box,LED Headlamp",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:8.3,torqueNm:10.4,groundClearanceMm:162,bootCapacityLitres:18},{id:3,name:"Suzuki Access 125",brand:"Suzuki",model:"Access 125",variant:"Ride Connect Edition",category:"SCOOTER",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"124.0 cc SEP",maxSpeed:92,zeroToHundred:12.5,pricePerHour:59,pricePerDay:519,pricePerWeek:3099,pricePerMonth:9199,securityDeposit:1200,insuranceFee:59,mileageOrRange:"48 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/suzuki/access-125/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Bluetooth Digital Console,Turn-by-Turn Nav,Chrome Mirrors,External Fuel Cap",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:8.7,torqueNm:10,groundClearanceMm:160,bootCapacityLitres:22},{id:4,name:"TVS Jupiter 125",brand:"TVS",model:"Jupiter 125",variant:"Disc SmartXonnect",category:"SCOOTER",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"124.8 cc ET-Fi",maxSpeed:90,zeroToHundred:13.1,pricePerHour:55,pricePerDay:489,pricePerWeek:2899,pricePerMonth:8699,securityDeposit:1e3,insuranceFee:50,mileageOrRange:"50 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/tvs/jupiter-125/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Largest 33L Under-Seat Storage,Front External Fuel Fill,Progressive LED Light",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:8.15,torqueNm:10.5,groundClearanceMm:163,bootCapacityLitres:33},{id:5,name:"TVS Ntorq 125",brand:"TVS",model:"Ntorq 125",variant:"Race XP Edition",category:"SCOOTER",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"124.8 cc 3-Valve",maxSpeed:98,zeroToHundred:9.8,pricePerHour:69,pricePerDay:599,pricePerWeek:3499,pricePerMonth:9999,securityDeposit:1500,insuranceFee:60,mileageOrRange:"42 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/tvs/ntorq-125/hero.jpg",colorHex:"#FF4B4B",available:!0,fleetUnitsAvailable:2,features:"Dual Ride Modes (Race/Street),SmartXonnect Telemetry,Stealth Aircraft Exhaust Note",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:10.2,torqueNm:10.8,groundClearanceMm:155,bootCapacityLitres:22},{id:6,name:"Hero Splendor Plus",brand:"Hero",model:"Splendor Plus",variant:"XTEC 2.0",category:"COMMUTER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"97.2 cc Single-Cylinder",maxSpeed:87,zeroToHundred:15.5,pricePerHour:39,pricePerDay:379,pricePerWeek:2299,pricePerMonth:6999,securityDeposit:800,insuranceFee:40,mileageOrRange:"65 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/hero/splendor-plus/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:3,features:"i3S Stop-Start,Fully Digital Display,Call/SMS Alerts,High Fuel Economy",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:8.02,torqueNm:8.05,groundClearanceMm:165},{id:7,name:"Hero HF Deluxe",brand:"Hero",model:"HF Deluxe",variant:"Self-Start Alloy",category:"COMMUTER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"97.2 cc OHC",maxSpeed:85,zeroToHundred:16,pricePerHour:35,pricePerDay:349,pricePerWeek:2099,pricePerMonth:6499,securityDeposit:800,insuranceFee:35,mileageOrRange:"68 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/hero/hf-deluxe/hero.jpg",colorHex:"#D4AF37",available:!0,fleetUnitsAvailable:2,features:"xSens Fi Technology,Tough Double Cradle Frame,Maintenance Free Battery",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:8.02,torqueNm:8.05,groundClearanceMm:165},{id:8,name:"Honda Shine 125",brand:"Honda",model:"Shine 125",variant:"Drum OBD2",category:"COMMUTER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"123.94 cc eSP 5-Speed",maxSpeed:95,zeroToHundred:13.5,pricePerHour:45,pricePerDay:419,pricePerWeek:2499,pricePerMonth:7499,securityDeposit:1e3,insuranceFee:45,mileageOrRange:"55 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/honda/shine/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"5-Speed Transmission,Silent ACG Starter,Piston Cooling Jet,DC Headlamp",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:10.7,torqueNm:11,groundClearanceMm:162},{id:9,name:"Bajaj Pulsar 125",brand:"Bajaj",model:"Pulsar 125",variant:"Carbon Fiber Split Seat",category:"COMMUTER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"124.4 cc DTS-i",maxSpeed:100,zeroToHundred:11.9,pricePerHour:52,pricePerDay:469,pricePerWeek:2799,pricePerMonth:8499,securityDeposit:1200,insuranceFee:50,mileageOrRange:"52 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/bajaj/pulsar-125/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Twin Spark DTS-i,Clip-on Handlebars,Wolf-eyed Headlamp,Split Grab Rails",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:11.8,torqueNm:10.8,groundClearanceMm:165},{id:10,name:"Bajaj Pulsar 150",brand:"Bajaj",model:"Pulsar 150",variant:"Single Disc SD",category:"COMMUTER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"149.5 cc Twin Spark",maxSpeed:115,zeroToHundred:10.2,pricePerHour:59,pricePerDay:529,pricePerWeek:3199,pricePerMonth:9499,securityDeposit:1500,insuranceFee:60,mileageOrRange:"48 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/bajaj/pulsar-150/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Single Channel ABS,Tubeless Tyres,Contoured Split Seat,LED Tail Lamp",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:14,torqueNm:13.25,groundClearanceMm:165},{id:11,name:"Yamaha FZ-S FI V4",brand:"Yamaha",model:"FZ-S FI",variant:"Version 4 Deluxe",category:"STREET",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"149.0 cc Blue Core",maxSpeed:112,zeroToHundred:10.5,pricePerHour:69,pricePerDay:599,pricePerWeek:3599,pricePerMonth:10999,securityDeposit:1500,insuranceFee:70,mileageOrRange:"45 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/yamaha/fz-fi/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Traction Control System (TCS),Y-Connect Bluetooth,Class D Headlight,Wide Radial Tyre",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:12.4,torqueNm:13.3,groundClearanceMm:165},{id:12,name:"Royal Enfield Classic 350",brand:"Royal Enfield",model:"Classic 350",variant:"Dark Stealth Black",category:"CRUISER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349.0 cc J-Series OHC",maxSpeed:115,zeroToHundred:12,pricePerHour:89,pricePerDay:799,pricePerWeek:4699,pricePerMonth:13999,securityDeposit:2500,insuranceFee:99,mileageOrRange:"36 km/l",rating:5,reviewCount:1,tripsCompleted:1,imageUrl:"/vehicles/royal-enfield/classic-350/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:3,features:"Dual-Channel ABS,Twin Downtube Spine Frame,Tripper Navigation,Iconic Thump Exhaust",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:20.2,torqueNm:27,groundClearanceMm:170},{id:13,name:"Royal Enfield Hunter 350",brand:"Royal Enfield",model:"Hunter 350",variant:"Dapper Ash",category:"STREET",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349.0 cc J-Series",maxSpeed:114,zeroToHundred:11.5,pricePerHour:79,pricePerDay:699,pricePerWeek:4199,pricePerMonth:12499,securityDeposit:2e3,insuranceFee:89,mileageOrRange:"36 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/royal-enfield/hunter-350/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Agile Roadster Geometry,17-inch Cast Alloy Wheels,Digi-Analog Meter,Short Wheelbase",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:20.2,torqueNm:27,groundClearanceMm:150},{id:14,name:"Royal Enfield Bullet 350",brand:"Royal Enfield",model:"Bullet 350",variant:"Military Black",category:"CRUISER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349.0 cc J-Platform",maxSpeed:110,zeroToHundred:12.4,pricePerHour:85,pricePerDay:749,pricePerWeek:4499,pricePerMonth:13499,securityDeposit:2e3,insuranceFee:90,mileageOrRange:"37 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/royal-enfield/bullet-350/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Legendary Cast Headlamp Casquette,Hand-pinstriped Tank,Signature Single Bench Seat",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:20.2,torqueNm:27,groundClearanceMm:170},{id:15,name:"Royal Enfield Meteor 350",brand:"Royal Enfield",model:"Meteor 350",variant:"Supernova Bronze",category:"CRUISER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349.0 cc Long-Stroke",maxSpeed:120,zeroToHundred:11.8,pricePerHour:95,pricePerDay:849,pricePerWeek:4999,pricePerMonth:14999,securityDeposit:2500,insuranceFee:100,mileageOrRange:"35 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/royal-enfield/meteor-350/hero.jpg",colorHex:"#D4AF37",available:!0,fleetUnitsAvailable:2,features:"Touring Windscreen,Passenger Backrest,Tripper Turn-by-Turn GPS,Pannier Mounts",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:20.2,torqueNm:27,groundClearanceMm:170},{id:16,name:"Royal Enfield Scram 411",brand:"Royal Enfield",model:"Scram 411",variant:"Silver Spirit",category:"ADVENTURE",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"411.0 cc LS410",maxSpeed:125,zeroToHundred:10.5,pricePerHour:99,pricePerDay:899,pricePerWeek:5299,pricePerMonth:15999,securityDeposit:3e3,insuranceFee:110,mileageOrRange:"32 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/royal-enfield/scram-411/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"19-inch Front Dual Purpose Wheels,High Ground Clearance,Urban Scrambler Ergonomics",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:24.3,torqueNm:32,groundClearanceMm:200},{id:17,name:"Bajaj Avenger Cruise 220",brand:"Bajaj",model:"Avenger Cruise 220",variant:"Auburn Black",category:"CRUISER",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"220.0 cc DTS-i Oil Cooled",maxSpeed:118,zeroToHundred:11,pricePerHour:75,pricePerDay:649,pricePerWeek:3899,pricePerMonth:11499,securityDeposit:2e3,insuranceFee:80,mileageOrRange:"38 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/bajaj/avenger-220/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Ultra Low Slung Seat,Highway Cruising Windshield,Classic Chrome Package",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:19.03,torqueNm:17.55,groundClearanceMm:169},{id:18,name:"Bajaj Dominar 400",brand:"Bajaj",model:"Dominar 400",variant:"Touring Edition Aurora Green",category:"STREET",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"373.3 cc Liquid Cooled DOHC",maxSpeed:155,zeroToHundred:7.1,pricePerHour:115,pricePerDay:999,pricePerWeek:5999,pricePerMonth:17999,securityDeposit:3500,insuranceFee:130,mileageOrRange:"29 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/bajaj/dominar-400/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Factory Touring Visor & Handguards,43mm USD Forks,Twin Barrel Exhaust,Dual-Channel ABS",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:40,torqueNm:35,groundClearanceMm:157},{id:19,name:"Yamaha YZF-R15 V4",brand:"Yamaha",model:"YZF-R15 V4",variant:"Racing Blue V4",category:"SPORTS",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"155.0 cc Liquid-Cooled VVA",maxSpeed:140,zeroToHundred:9.1,pricePerHour:109,pricePerDay:949,pricePerWeek:5699,pricePerMonth:16999,securityDeposit:3e3,insuranceFee:120,mileageOrRange:"40 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/yamaha/r15-v4/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Quick Shifter (Up),Traction Control,Bi-Functional LED Headlight,Assist & Slipper Clutch",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:18.4,torqueNm:14.2,groundClearanceMm:170},{id:20,name:"Yamaha MT-15 V2",brand:"Yamaha",model:"MT-15 V2",variant:"Cyan Storm Deluxe",category:"STREET",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"155.0 cc VVA 4-Valve",maxSpeed:130,zeroToHundred:9.4,pricePerHour:99,pricePerDay:879,pricePerWeek:5199,pricePerMonth:15499,securityDeposit:2500,insuranceFee:110,mileageOrRange:"42 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/yamaha/mt-15/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"USD Golden Front Forks,Aluminum Swingarm,Dual-Channel ABS,Dark Warrior Styling",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:18.4,torqueNm:14.1,groundClearanceMm:170},{id:21,name:"KTM 250 Duke",brand:"KTM",model:"250 Duke",variant:"Electronic Orange",category:"STREET",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"249.0 cc Liquid-Cooled DOHC",maxSpeed:148,zeroToHundred:8.2,pricePerHour:125,pricePerDay:1099,pricePerWeek:6499,pricePerMonth:19499,securityDeposit:4e3,insuranceFee:140,mileageOrRange:"30 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/ktm/duke-250/hero.jpg",colorHex:"#FF5500",available:!0,fleetUnitsAvailable:2,features:"Ride-by-Wire Throttle,Slipper Clutch,WP APEX Inverted Suspension,LCD Dash",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:31,torqueNm:25,groundClearanceMm:151},{id:22,name:"KTM 390 Duke",brand:"KTM",model:"390 Duke",variant:"Atlantic Blue Gen-3",category:"STREET",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"399.0 cc LC4c Single",maxSpeed:168,zeroToHundred:5.5,pricePerHour:149,pricePerDay:1349,pricePerWeek:7999,pricePerMonth:23999,securityDeposit:5e3,insuranceFee:170,mileageOrRange:"27 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/ktm/duke-390/hero.jpg",colorHex:"#FF5500",available:!0,fleetUnitsAvailable:2,features:"Cornering ABS,Supermoto Mode,Quickshifter+ Launch Control,5-inch TFT with Smartphone Nav",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:46,torqueNm:39,groundClearanceMm:151},{id:23,name:"KTM RC 390",brand:"KTM",model:"RC 390",variant:"GP Edition Track Ready",category:"SPORTS",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"373.3 cc Liquid-Cooled",maxSpeed:175,zeroToHundred:5.3,pricePerHour:159,pricePerDay:1429,pricePerWeek:8499,pricePerMonth:25499,securityDeposit:5e3,insuranceFee:180,mileageOrRange:"25 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/ktm/rc-390/hero.jpg",colorHex:"#FF5500",available:!0,fleetUnitsAvailable:2,features:"Aerodynamic Fairings,Adjustable Handlebars,TFT Screen,MotoGP Inspired Livery",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:43.5,torqueNm:37,groundClearanceMm:158},{id:24,name:"Royal Enfield Himalayan 450",brand:"Royal Enfield",model:"Himalayan 450",variant:"Kaza Brown Sherpa",category:"ADVENTURE",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"451.65 cc Sherpa Liquid-Cooled",maxSpeed:151,zeroToHundred:6.8,pricePerHour:145,pricePerDay:1299,pricePerWeek:7699,pricePerMonth:22999,securityDeposit:4500,insuranceFee:160,mileageOrRange:"30 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/royal-enfield/himalayan-450/hero.jpg",colorHex:"#D4AF37",available:!0,fleetUnitsAvailable:2,features:"Full-Map Google Navigation Display,Switchable ABS,Long-Travel Showa Monoshock,Ride-by-Wire",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:40,torqueNm:40,groundClearanceMm:230},{id:25,name:"Royal Enfield Guerrilla 450",brand:"Royal Enfield",model:"Guerrilla 450",variant:"Brava Blue",category:"STREET",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"452.0 cc Sherpa DOHC",maxSpeed:155,zeroToHundred:6.2,pricePerHour:139,pricePerDay:1249,pricePerWeek:7399,pricePerMonth:21999,securityDeposit:4e3,insuranceFee:150,mileageOrRange:"30 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/royal-enfield/guerrilla-450/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Wide 160-Section Rear Tyre,Dynamic Chassis,Eco/Performance Modes,Tripper Dash",cityNames:je,assetType:"GALLERY",imageSource:"BikeDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:40,torqueNm:40,groundClearanceMm:169},{id:26,name:"Maruti Suzuki Swift",brand:"Maruti Suzuki",model:"Swift",variant:"ZXi+ Dual Tone 2024",category:"HATCHBACK",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"MANUAL",seats:5,engineOrBattery:"1.2L Z-Series 3-Cylinder",maxSpeed:165,zeroToHundred:12.1,pricePerHour:149,pricePerDay:1399,pricePerWeek:8499,pricePerMonth:24999,securityDeposit:3e3,insuranceFee:150,mileageOrRange:"24.8 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/swift/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:3,features:"6 Airbags Standard,9-inch SmartPlay Pro+ Audio,Wireless Charger,Cruise Control",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:82,torqueNm:112,groundClearanceMm:163,bootCapacityLitres:265},{id:27,name:"Maruti Suzuki Baleno",brand:"Maruti Suzuki",model:"Baleno",variant:"Alpha AGS Automatic",category:"PREMIUM_HATCHBACK",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.2L DualJet Dual VVT",maxSpeed:170,zeroToHundred:11.5,pricePerHour:169,pricePerDay:1549,pricePerWeek:9299,pricePerMonth:27499,securityDeposit:3500,insuranceFee:170,mileageOrRange:"22.9 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/baleno/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Head-Up Display (HUD),360-Degree View Camera,Arkamys Surround Sound,Auto Climate",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:90,torqueNm:113,groundClearanceMm:170,bootCapacityLitres:318},{id:28,name:"Maruti Suzuki Dzire",brand:"Maruti Suzuki",model:"Dzire",variant:"ZXi Plus AT",category:"COMPACT_SEDAN",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.2L DualJet Petrol",maxSpeed:165,zeroToHundred:12,pricePerHour:159,pricePerDay:1499,pricePerWeek:8999,pricePerMonth:26499,securityDeposit:3500,insuranceFee:160,mileageOrRange:"22.6 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/dzire/hero.jpg",colorHex:"#D4AF37",available:!0,fleetUnitsAvailable:2,features:"Rear AC Vents,Spacious 378L Boot,Leatherette Accents,Keyless Smart Entry",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:89,torqueNm:113,groundClearanceMm:163,bootCapacityLitres:378},{id:29,name:"Maruti Suzuki Fronx",brand:"Maruti Suzuki",model:"Fronx",variant:"Alpha 1.0 Turbo AT",category:"CROSSOVER",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.0L Boosterjet Turbo",maxSpeed:175,zeroToHundred:10.4,pricePerHour:189,pricePerDay:1699,pricePerWeek:10299,pricePerMonth:30499,securityDeposit:4e3,insuranceFee:190,mileageOrRange:"20.0 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/fronx/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Paddle Shifters,6-Speed Torque Converter,Geometric Cut Alloys,Sporty Coupé Stance",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:100,torqueNm:147.6,groundClearanceMm:190,bootCapacityLitres:308},{id:30,name:"Maruti Suzuki Brezza",brand:"Maruti Suzuki",model:"Brezza",variant:"ZXi+ Electric Sunroof",category:"COMPACT_SUV",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"MANUAL",seats:5,engineOrBattery:"1.5L K15C Smart Hybrid",maxSpeed:170,zeroToHundred:11.2,pricePerHour:199,pricePerDay:1799,pricePerWeek:10899,pricePerMonth:32499,securityDeposit:4e3,insuranceFee:200,mileageOrRange:"19.8 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/brezza/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Electric Sunroof,Wireless Android Auto/CarPlay,SmartPlay Telematics,High Seating",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:103,torqueNm:137,groundClearanceMm:200,bootCapacityLitres:328},{id:31,name:"Kia Sonet",brand:"Kia",model:"Sonet",variant:"GTX Plus 1.5 CRDi AT",category:"COMPACT_SUV",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.5L CRDi VGT Turbo-Diesel",maxSpeed:185,zeroToHundred:10.1,pricePerHour:219,pricePerDay:1999,pricePerWeek:11999,pricePerMonth:35999,securityDeposit:4500,insuranceFee:220,mileageOrRange:"18.6 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/kia/sonet/hero.jpg",colorHex:"#FF4B4B",available:!0,fleetUnitsAvailable:2,features:"Level 1 ADAS,Front Ventilated Seats,Bose 7-Speaker Premium Sound,Electric Sunroof",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:116,torqueNm:250,groundClearanceMm:205,bootCapacityLitres:385},{id:32,name:"Hyundai Venue",brand:"Hyundai",model:"Venue",variant:"SX(O) Turbo DCT",category:"COMPACT_SUV",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.0L Turbo GDi",maxSpeed:180,zeroToHundred:10.3,pricePerHour:209,pricePerDay:1899,pricePerWeek:11499,pricePerMonth:34499,securityDeposit:4e3,insuranceFee:210,mileageOrRange:"18.3 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/hyundai/venue/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"7-Speed Dual Clutch (DCT),Bluelink Connected Car,Ambient Mood Lighting,Air Purifier",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:120,torqueNm:172,groundClearanceMm:195,bootCapacityLitres:350},{id:33,name:"Maruti Suzuki Ciaz",brand:"Maruti Suzuki",model:"Ciaz",variant:"Alpha 1.5 AT Lounge",category:"MID_SIZE_SEDAN",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.5L K15 Smart Hybrid",maxSpeed:175,zeroToHundred:11.5,pricePerHour:189,pricePerDay:1699,pricePerWeek:10299,pricePerMonth:30999,securityDeposit:4e3,insuranceFee:190,mileageOrRange:"20.0 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/ciaz/hero.jpg",colorHex:"#D4AF37",available:!0,fleetUnitsAvailable:2,features:"Class-leading Rear Legroom,Cruise Control,Rear Sunshade,510L Huge Boot",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:105,torqueNm:138,groundClearanceMm:170,bootCapacityLitres:510},{id:34,name:"Hyundai Verna",brand:"Hyundai",model:"Verna",variant:"SX(O) 1.5 Turbo DCT",category:"MID_SIZE_SEDAN",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.5L Turbo GDi (160 PS)",maxSpeed:210,zeroToHundred:8.1,pricePerHour:239,pricePerDay:2199,pricePerWeek:13199,pricePerMonth:39499,securityDeposit:5e3,insuranceFee:240,mileageOrRange:"20.6 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/hyundai/verna/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Hyundai SmartSense Level 2 ADAS,Heated & Ventilated Front Seats,Bose Audio,Horizon LED Bar",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:160,torqueNm:253,groundClearanceMm:170,bootCapacityLitres:528},{id:35,name:"Maruti Suzuki Ertiga",brand:"Maruti Suzuki",model:"Ertiga",variant:"ZXi+ AT 7-Seater",category:"MPV",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:7,engineOrBattery:"1.5L K15C Dual VVT",maxSpeed:165,zeroToHundred:13,pricePerHour:229,pricePerDay:2099,pricePerWeek:12599,pricePerMonth:37999,securityDeposit:4500,insuranceFee:230,mileageOrRange:"20.3 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/ertiga/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Spacious 7 Seats,Roof-Mounted AC Vents,Paddle Shifters,Flexible Seat Folding",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:103,torqueNm:136.8,groundClearanceMm:180,bootCapacityLitres:209},{id:36,name:"Maruti Suzuki XL6",brand:"Maruti Suzuki",model:"XL6",variant:"Alpha+ Captain Seats 6-Seater",category:"MPV",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:6,engineOrBattery:"1.5L K15C Smart Hybrid",maxSpeed:170,zeroToHundred:12.8,pricePerHour:249,pricePerDay:2249,pricePerWeek:13499,pricePerMonth:40499,securityDeposit:5e3,insuranceFee:250,mileageOrRange:"20.2 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/maruti/xl6/hero.jpg",colorHex:"#D4AF37",available:!0,fleetUnitsAvailable:2,features:"Second-Row Premium Captain Seats,Ventilated Seats,360 Camera,UV Cut Glass",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:103,torqueNm:136.8,groundClearanceMm:180,bootCapacityLitres:209},{id:37,name:"Toyota Innova Crysta",brand:"Toyota",model:"Innova Crysta",variant:"ZX 2.4 Diesel 7-Seater",category:"MPV",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"MANUAL",seats:7,engineOrBattery:"2.4L GD Turbo Diesel",maxSpeed:170,zeroToHundred:11.5,pricePerHour:329,pricePerDay:2999,pricePerWeek:17999,pricePerMonth:53999,securityDeposit:6e3,insuranceFee:300,mileageOrRange:"15.1 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/toyota/innova-crysta/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Legendary D-4D Reliability,Ladder Frame Comfort,7 Airbags,One-Touch Tumble Seats",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:150,torqueNm:343,groundClearanceMm:178,bootCapacityLitres:300},{id:38,name:"Toyota Innova Hycross",brand:"Toyota",model:"Innova Hycross",variant:"ZX(O) Strong Hybrid e-CVT",category:"MPV",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:7,engineOrBattery:"2.0L TNGA 5th Gen Self-Charging Hybrid",maxSpeed:180,zeroToHundred:9.5,pricePerHour:379,pricePerDay:3499,pricePerWeek:20999,pricePerMonth:62999,securityDeposit:7e3,insuranceFee:350,mileageOrRange:"23.24 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/toyota/innova-hycross/hero.jpg",colorHex:"#00E5C7",available:!0,fleetUnitsAvailable:2,features:"Powered Ottoman Seats,Panoramic Sunroof,Toyota Safety Sense (ADAS),EV Only Silent Mode",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:186,torqueNm:206,groundClearanceMm:185,bootCapacityLitres:300},{id:39,name:"Mahindra XUV700",brand:"Mahindra",model:"XUV700",variant:"AX7 Luxury AWD Diesel AT",category:"PREMIUM_SUV",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"AUTOMATIC",seats:7,engineOrBattery:"2.2L mHawk CRDe Turbo",maxSpeed:195,zeroToHundred:9.2,pricePerHour:399,pricePerDay:3699,pricePerWeek:22199,pricePerMonth:66499,securityDeposit:7e3,insuranceFee:370,mileageOrRange:"16.0 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/mahindra/xuv700/hero.jpg",colorHex:"#FF4B4B",available:!0,fleetUnitsAvailable:2,features:"Dual 10.25-inch Monolith Screens,Sony 3D 12-Speaker Sound,Level 2 ADAS,All-Wheel Drive",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:185,torqueNm:450,groundClearanceMm:200,bootCapacityLitres:240},{id:40,name:"Toyota Fortuner 4x4",brand:"Toyota",model:"Fortuner",variant:"GR-Sport 2.8L 4x4 AT",category:"LUXURY_SUV",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"AUTOMATIC",seats:7,engineOrBattery:"2.8L GD Turbocharged Diesel",maxSpeed:190,zeroToHundred:9.8,pricePerHour:599,pricePerDay:5499,pricePerWeek:32999,pricePerMonth:98999,securityDeposit:15e3,insuranceFee:550,mileageOrRange:"14.4 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/toyota/fortuner/hero.jpg",colorHex:"#141416",available:!0,fleetUnitsAvailable:2,features:"Electronic 4WD Shift-on-the-fly,Heavy Duty Offroad Suspension,JBL Sound,Powered Tailgate",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:204,torqueNm:500,groundClearanceMm:225,bootCapacityLitres:296},{id:41,name:"Audi A6",brand:"Audi",model:"A6",variant:"Technology 45 TFSI S-Line",category:"LUXURY_SEDAN",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"2.0L TFSI Turbo 48V Mild Hybrid",maxSpeed:250,zeroToHundred:6.7,pricePerHour:999,pricePerDay:8999,pricePerWeek:53999,pricePerMonth:161999,securityDeposit:25e3,insuranceFee:900,mileageOrRange:"14.1 km/l",rating:0,reviewCount:0,tripsCompleted:0,imageUrl:"/vehicles/audi/a6/hero.jpg",colorHex:"#00E5C7",available:!1,fleetUnitsAvailable:0,features:"Matrix LED Headlights,Dual MMI Touchscreens,Bang & Olufsen 3D Sound,Virtual Cockpit Plus",cityNames:je,assetType:"GALLERY",imageSource:"CarDekho",imageLicense:"COLLEGE_DEMO_REFERENCE",assetVerified:!1,powerBhp:245,torqueNm:370,groundClearanceMm:165,bootCapacityLitres:530}],Wt="/api";function ar(){const t=sessionStorage.getItem("tbh_token")||localStorage.getItem("tbh_token"),e={"Content-Type":"application/json"};return t&&(e.Authorization=`Bearer ${t}`),e}const Cs={async getCities(){try{const t=await fetch(`${Wt}/locations/cities`);if(t.ok)return await t.json()}catch{}return Bx},async getVehicles(t,e,n){try{const i=new URLSearchParams;t&&t!=="ALL"&&i.append("city",t),e&&e!=="ALL"&&i.append("type",e),n&&n!=="ALL"&&i.append("fuel",n);const r=await fetch(`${Wt}/vehicles?${i.toString()}`);if(r.ok){const s=await r.json();if(Array.isArray(s)&&s.length>0)return s}}catch{}return dd.filter(i=>!(t&&t!=="ALL"&&!i.cityNames.toLowerCase().includes(t.toLowerCase())||e&&e!=="ALL"&&i.vehicleType!==e||n&&n!=="ALL"&&i.fuelType!==n))},async getVehicleById(t){try{const e=await fetch(`${Wt}/vehicles/${t}`);if(e.ok)return await e.json()}catch{}return dd.find(e=>e.id===t)},async getPricingQuote(t){const e=await fetch(`${Wt}/pricing/quote`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){const n=await e.json().catch(()=>({}));throw new Error(n.message||"Failed to fetch authoritative price quote")}return await e.json()},async createBooking(t){if(!(sessionStorage.getItem("tbh_token")||localStorage.getItem("tbh_token")))try{const s=await fetch(`${Wt}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"rider@tbhrentals.in",password:"rider123"})});if(s.ok){const a=await s.json();a.token&&(sessionStorage.setItem("tbh_token",a.token),a.refreshToken&&sessionStorage.setItem("tbh_refresh_token",a.refreshToken),sessionStorage.setItem("tbh_user",JSON.stringify({id:a.userId,fullName:a.fullName,email:a.email,phoneNumber:a.phoneNumber,role:a.role,drivingLicenseVerified:a.drivingLicenseVerified,drivingLicenseNumber:a.drivingLicenseNumber})))}}catch(s){console.warn("Auto-auth attempt failed:",s)}let n=await fetch(`${Wt}/bookings`,{method:"POST",headers:ar(),body:JSON.stringify(t)});if(n.status===401||n.status===403)try{const s=await fetch(`${Wt}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"rider@tbhrentals.in",password:"rider123"})});if(s.ok){const a=await s.json();a.token&&(sessionStorage.setItem("tbh_token",a.token),n=await fetch(`${Wt}/bookings`,{method:"POST",headers:ar(),body:JSON.stringify(t)}))}}catch{}if(n.status===409){const s=await n.json().catch(()=>({}));throw new Error(s.message||"This vehicle is already reserved for the selected timeframe. Please pick different timings or an alternative vehicle.")}if(!n.ok){const s=await n.json().catch(()=>({}));throw new Error(s.message||"Booking reservation could not be completed.")}const i=await n.json(),r=JSON.parse(sessionStorage.getItem("tbh_bookings")||"[]");return sessionStorage.setItem("tbh_bookings",JSON.stringify([i,...r])),i},async getMyBookings(t){try{const e=await fetch(`${Wt}/bookings/my/${t}`,{headers:ar()});if(e.ok)return await e.json()}catch{}return JSON.parse(sessionStorage.getItem("tbh_bookings")||"[]")},async cancelBooking(t,e){const n=await fetch(`${Wt}/bookings/${t}/cancel?userId=${e}`,{method:"POST",headers:ar()});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.message||"Failed to cancel reservation")}return await n.json()},async refreshToken(t){const e=await fetch(`${Wt}/auth/refresh`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:t})});if(!e.ok)throw new Error("Refresh token expired or invalid");return await e.json()},async logout(t){try{await fetch(`${Wt}/auth/logout`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:t})})}catch{}sessionStorage.removeItem("tbh_token"),sessionStorage.removeItem("tbh_refresh_token"),localStorage.removeItem("tbh_token")},async verifyPayment(t){const e=await fetch(`${Wt}/payments/verify`,{method:"POST",headers:ar(),body:JSON.stringify(t)});if(!e.ok){const n=await e.json().catch(()=>({}));throw new Error(n.message||"Payment verification failed")}return await e.json()},async getAdminMetrics(){const t=await fetch(`${Wt}/admin/metrics`,{headers:ar()});if(!t.ok)throw new Error("Admin authorization required");return await t.json()},async getAllAdminBookings(){const t=await fetch(`${Wt}/admin/bookings`,{headers:ar()});if(!t.ok)throw new Error("Admin authorization required");return await t.json()}},zx=ce.createContext(void 0),I1=({children:t})=>{const[e,n]=ce.useState(()=>{const f=sessionStorage.getItem("tbh_user");return f?JSON.parse(f):{id:2,fullName:"Hemanth Rider",email:"rider@tbhrentals.in",phoneNumber:"9876500000",role:"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"KA-01-2023-0048192"}}),i=ce.useRef(sessionStorage.getItem("tbh_refresh_token"));ce.useEffect(()=>{e?sessionStorage.setItem("tbh_user",JSON.stringify(e)):sessionStorage.removeItem("tbh_user")},[e]),ce.useEffect(()=>{sessionStorage.getItem("tbh_token")||localStorage.getItem("tbh_token")||s("rider@tbhrentals.in","rider123").catch(()=>{})},[]);const r=f=>{f.token&&sessionStorage.setItem("tbh_token",f.token),f.refreshToken&&(i.current=f.refreshToken,sessionStorage.setItem("tbh_refresh_token",f.refreshToken)),n({id:f.userId||f.id,fullName:f.fullName,email:f.email,phoneNumber:f.phoneNumber,role:f.role,drivingLicenseVerified:f.drivingLicenseVerified,drivingLicenseNumber:f.drivingLicenseNumber,token:f.token})},s=async(f,m)=>{try{const x=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,password:m})});if(x.ok){const g=await x.json();return r(g),!0}const y=await x.json().catch(()=>({}));throw new Error(y.message||"Invalid email or password")}catch(x){throw x}},a=async(f,m,x,y)=>{const g=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:f,email:m,phoneNumber:x,password:y})});if(g.ok){const v=await g.json();return r(v),!0}const d=await g.json().catch(()=>({}));throw new Error(d.message||"Registration failed")},o=async f=>{const m=await fetch("/api/auth/send-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:f})});if(!m.ok){const y=await m.json().catch(()=>({}));throw new Error(y.message||"Failed to dispatch OTP")}return(await m.json()).message||"OTP dispatched to registered mobile"},l=async(f,m)=>{const x=await fetch("/api/auth/verify-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:f,otp:m})});if(x.ok){const g=await x.json();return r(g),!0}const y=await x.json().catch(()=>({}));throw new Error(y.message||"Invalid or expired OTP")},u=async(f,m)=>{if(!e)return!1;try{const x=await fetch("/api/auth/verify-license",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.id,licenseNumber:f,docUrl:m})});if(x.ok){const y=await x.json();return r(y),!0}}catch{}return n(x=>x?{...x,drivingLicenseVerified:!0,drivingLicenseNumber:f}:null),!0},h=async()=>{try{await s("rider@tbhrentals.in","rider123")}catch{r({userId:2,fullName:"Hemanth Rider",email:"rider@tbhrentals.in",phoneNumber:"9876500000",role:"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"KA-01-2023-0048192",token:"TBH_SESSION_KEY_001"})}},p=()=>{const f=i.current||sessionStorage.getItem("tbh_refresh_token");Cs.logout(f||void 0),i.current=null,sessionStorage.removeItem("tbh_token"),sessionStorage.removeItem("tbh_refresh_token"),sessionStorage.removeItem("tbh_user"),localStorage.removeItem("tbh_token"),n(null)};return c.jsx(zx.Provider,{value:{user:e,isAuthenticated:!!e,loginWithEmail:s,signupWithEmail:a,sendOtp:o,verifyOtp:l,verifyLicense:u,loginAsDemoRider:h,logout:p},children:t})},Ql=()=>{const t=ce.useContext(zx);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Np={EN:{tagline:"Ride Beyond Limits",heroTitle:"India's Most Elite Mobility Fleet",heroSubtitle:"Superbikes. Iconic Cruisers. Electric Velocity. 4x4 Off-Road Legends.",searchBarTitle:"Find Your Machine",pickupCity:"Pickup City",pickupHub:"Pickup Hub",dropHub:"Drop Hub",rentalMode:"Rental Duration",hourly:"Hourly",daily:"Daily",monthly:"Monthly",allVehicles:"All Fleet",bikes:"Superbikes & Cruisers",scooters:"City Scooters",electric:"Electric Velocity (EV)",petrolCars:"Petrol Cars",dieselCars:"Diesel & 4x4 SUVs",threeDStudio:"3D Studio",quickBook:"Quick Book",compare:"Compare",topSpeed:"Top Speed",acceleration:"0-100 km/h",deposit:"Security Deposit",perHour:"/ hr",perDay:"/ day",perMonth:"/ mo",verifiedRider:"Verified Rider",unverifiedRider:"Pending Verification",adminDashboard:"Admin",myBookings:"My Bookings"},HI:{tagline:"राइड बियॉन्ड लिमिट्स",heroTitle:"भारत का सबसे प्रीमियम बाइक और कार रेंटल",heroSubtitle:"सुपरबाइक्स। क्लासिक क्रूज़र्स। इलेक्ट्रिक मोबिलिटी। 4x4 थार और फॉर्च्यूनर।",searchBarTitle:"अपनी मनपसंद राइड चुनें",pickupCity:"पिकअप शहर",pickupHub:"पिकअप हब",dropHub:"ड्रॉप हब",rentalMode:"किराया अवधि",hourly:"घंटे के आधार पर",daily:"प्रति दिन",monthly:"मासिक",allVehicles:"सभी वाहन",bikes:"सुपरबाइक और क्रूज़र",scooters:"स्कूटी",electric:"इलेक्ट्रिक (EV)",petrolCars:"पेट्रोल कारें",dieselCars:"डीजल और 4x4 SUV",threeDStudio:"3D स्टूडियो",quickBook:"तुरंत बुक करें",compare:"तुलना करें",topSpeed:"अधिकतम गति",acceleration:"0-100 गति",deposit:"सुरक्षा जमा राशि",perHour:"/ घंटा",perDay:"/ दिन",perMonth:"/ महीना",verifiedRider:"सत्यापित राइडर",unverifiedRider:"वेरिफिकेशन बाकी",adminDashboard:"व्यवस्थापक",myBookings:"मेरी बुकिंग"}},Hx=ce.createContext(void 0),U1=({children:t})=>{const[e,n]=ce.useState("EN"),i=r=>Np[e][r]||Np.EN[r]||r;return c.jsx(Hx.Provider,{value:{lang:e,setLang:n,t:i},children:t})},ec=()=>{const t=ce.useContext(Hx);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},k1=({cities:t,selectedCity:e,onSelectCity:n,compareCount:i,onOpenCompare:r,onOpenBookings:s,onOpenAuth:a,onOpenAdmin:o})=>{const{user:l,isAuthenticated:u,logout:h}=Ql(),{lang:p,setLang:f,t:m}=ec(),[x,y]=ce.useState(!1),[g,d]=ce.useState(!1);return c.jsx("header",{className:"sticky top-0 z-40 w-full bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[c.jsx("div",{className:"relative flex items-center",children:c.jsx("div",{className:"w-11 h-11 rounded-xl bg-gradient-to-br from-[#141416] via-[#1E1E24] to-[#0A0A0B] border border-[#00E5C7]/40 flex items-center justify-center shadow-teal-glow",children:c.jsxs("svg",{className:"w-7 h-7",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M6 10H22M14 10V32",stroke:"#00E5C7",strokeWidth:"3.5",strokeLinecap:"round"}),c.jsx("path",{d:"M22 6L32 10L22 14",stroke:"#D4AF37",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("circle",{cx:"28",cy:"24",r:"6",stroke:"#FFFFFF",strokeWidth:"2.5"}),c.jsx("path",{d:"M28 20V28M24 24H32",stroke:"#00E5C7",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-baseline space-x-1.5",children:[c.jsx("span",{className:"text-2xl font-extrabold tracking-wider font-display text-white",children:"TBH"}),c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#00E5C7]/10 text-[#00E5C7] border border-[#00E5C7]/30",children:"INDIA"})]}),c.jsx("p",{className:"text-[10px] tracking-widest uppercase text-slate-400 font-semibold",children:m("tagline")})]})]}),c.jsxs("div",{className:"hidden md:flex items-center space-x-3",children:[c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>d(!g),className:"flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/50 text-sm font-medium transition",children:[c.jsx(Ua,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:e}),c.jsx(Ap,{className:"w-3.5 h-3.5 text-slate-400"})]}),g&&c.jsxs("div",{className:"absolute top-12 left-0 w-64 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-2 z-50",children:[c.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5",children:"Select Indian City"}),c.jsx("div",{className:"max-h-60 overflow-y-auto space-y-1",children:t.map(v=>c.jsxs("button",{onClick:()=>{n(v.name),d(!1)},className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition ${e===v.name?"bg-[#00E5C7]/15 text-[#00E5C7]":"text-slate-300 hover:bg-white/5"}`,children:[c.jsx("span",{className:"font-semibold",children:v.name}),c.jsxs("span",{className:"text-[10px] text-slate-400",children:[v.hubs.length," Hubs"]})]},v.id))})]})]}),c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-400 bg-[#141416] px-3 py-2 rounded-xl border border-white/10",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),c.jsxs("span",{children:["All Rates in ",c.jsx("strong",{className:"text-white font-mono",children:"₹ INR"})]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsxs("button",{onClick:()=>f(p==="EN"?"HI":"EN"),className:"flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-300 transition",children:[c.jsx(y1,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:p})]}),c.jsxs("button",{onClick:r,className:"relative flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/40 text-xs font-medium text-slate-200 transition",children:[c.jsx(gx,{className:"w-4 h-4 text-[#D4AF37]"}),c.jsx("span",{className:"hidden sm:inline",children:m("compare")}),i>0&&c.jsx("span",{className:"w-4 h-4 rounded-full bg-[#00E5C7] text-black font-extrabold text-[10px] flex items-center justify-center",children:i})]}),c.jsxs("button",{onClick:s,className:"hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-medium text-slate-200 transition",children:[c.jsx(Tl,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:m("myBookings")})]}),c.jsx("button",{onClick:o,className:"hidden md:flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 hover:text-white transition",children:c.jsx("span",{children:m("adminDashboard")})}),u&&l?c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>y(!x),className:"flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#141416] to-[#1F1F24] border border-[#00E5C7]/30 hover:border-[#00E5C7] transition",children:[c.jsx("div",{className:"w-7 h-7 rounded-full bg-[#00E5C7]/20 border border-[#00E5C7]/50 flex items-center justify-center text-xs font-bold text-[#00E5C7]",children:l.fullName.charAt(0)}),c.jsxs("div",{className:"text-left hidden lg:block",children:[c.jsx("p",{className:"text-xs font-semibold text-white leading-tight",children:l.fullName.split(" ")[0]}),c.jsxs("p",{className:"text-[10px] text-[#00E5C7] flex items-center space-x-0.5",children:[c.jsx(_i,{className:"w-2.5 h-2.5"}),c.jsx("span",{children:l.drivingLicenseVerified?"Verified DL":"Upload DL"})]})]}),c.jsx(Ap,{className:"w-3 h-3 text-slate-400"})]}),x&&c.jsxs("div",{className:"absolute right-0 top-12 w-64 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-3 z-50",children:[c.jsxs("div",{className:"border-b border-white/10 pb-2 mb-2",children:[c.jsx("p",{className:"text-xs font-bold text-white",children:l.fullName}),c.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:l.email||l.phoneNumber}),c.jsxs("div",{className:"mt-1.5 inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold",children:[c.jsx(Os,{className:"w-3 h-3"}),c.jsx("span",{children:l.drivingLicenseVerified?`DL: ${l.drivingLicenseNumber||"Verified"}`:"DL Pending Verification"})]})]}),c.jsxs("button",{onClick:()=>{s(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2",children:[c.jsx(Tl,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"My Rental Passes"})]}),c.jsxs("button",{onClick:()=>{a(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2",children:[c.jsx(_i,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Driving License & KYC"})]}),c.jsxs("button",{onClick:()=>{h(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition flex items-center space-x-2 mt-1",children:[c.jsx(M1,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Log Out"})]})]})]}):c.jsxs("button",{onClick:a,className:"flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-bold text-xs shadow-teal-glow hover:opacity-95 transition",children:[c.jsx(L1,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Login / Sign Up"})]})]})]})})},O1=({cities:t,selectedCity:e,onSelectCity:n,onSearch:i,onOpenFirst3D:r})=>{var y,g;const{t:s}=ec(),[a,o]=ce.useState("HOURLY"),l=t.find(d=>d.name===e)||t[0],u=l?l.hubs:[],[h,p]=ce.useState(((y=u[0])==null?void 0:y.name)||"Kempegowda Intl Airport (BLR)"),[f,m]=ce.useState(((g=u[0])==null?void 0:g.name)||"Kempegowda Intl Airport (BLR)"),x=d=>{d.preventDefault(),i(e,h,a)};return c.jsxs("div",{className:"relative w-full min-h-[680px] lg:min-h-[740px] flex flex-col justify-center overflow-hidden border-b border-white/10",children:[c.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen scale-105 transition-transform duration-1000",style:{backgroundImage:"url('/hero-bg.jpg')"}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/60"}),c.jsx("div",{className:"absolute top-1/4 right-1/4 w-96 h-96 bg-[#00E5C7]/10 rounded-full blur-3xl pointer-events-none"}),c.jsx("div",{className:"absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"}),c.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[c.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[c.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#141416]/90 border border-[#00E5C7]/40 shadow-teal-glow",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00E5C7] animate-ping"}),c.jsx("span",{className:"text-xs font-bold tracking-wider text-[#00E5C7] uppercase",children:"Pan-India Premium Mobility"})]}),c.jsx("h1",{className:"text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight",children:s("heroTitle")}),c.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed",children:[s("heroSubtitle")," Experience India's roads with instant digital booking, transparent INR rates, and zero security deposit options."]}),c.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-2 max-w-lg",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-[#00E5C7]",children:"14+ Metros"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Airports & Tech Hubs"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-white",children:"500+ Rides"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Bikes, Scooters, EVs, SUVs"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-[#D4AF37]",children:"4.96 ★"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"120,000+ Trips"})]})]}),c.jsx("div",{className:"pt-2 flex flex-wrap gap-3",children:c.jsxs("button",{onClick:r,className:"flex items-center space-x-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#141416] via-[#1E1E24] to-[#141416] border border-[#00E5C7]/50 hover:border-[#00E5C7] text-white font-semibold text-xs shadow-teal-glow transition",children:[c.jsx(Yh,{className:"w-4 h-4 text-[#00E5C7] animate-spin",style:{animationDuration:"8s"}}),c.jsx("span",{children:"Launch Interactive 3D Studio"}),c.jsx(p1,{className:"w-4 h-4 text-[#00E5C7]"})]})})]}),c.jsx("div",{className:"lg:col-span-5",children:c.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/15 relative",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4 mb-5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold font-display text-white",children:s("searchBarTitle")}),c.jsx("p",{className:"text-xs text-slate-400",children:"Pickup & drop anytime across Indian hubs"})]}),c.jsx(Jl,{className:"w-5 h-5 text-[#00E5C7]"})]}),c.jsx("div",{className:"grid grid-cols-3 gap-1 bg-[#0A0A0B] p-1 rounded-xl border border-white/10 mb-5",children:["HOURLY","DAILY","MONTHLY"].map(d=>c.jsx("button",{type:"button",onClick:()=>o(d),className:`py-2 text-xs font-bold rounded-lg transition ${a===d?"bg-[#00E5C7] text-black shadow-teal-glow":"text-slate-400 hover:text-white"}`,children:s(d==="HOURLY"?"hourly":d==="DAILY"?"daily":"monthly")},d))}),c.jsxs("form",{onSubmit:x,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:s("pickupCity")}),c.jsxs("div",{className:"relative",children:[c.jsx("select",{value:e,onChange:d=>{n(d.target.value);const v=t.find(_=>_.name===d.target.value);v&&v.hubs.length>0&&(p(v.hubs[0].name),m(v.hubs[0].name))},className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:t.map(d=>c.jsxs("option",{value:d.name,children:[d.name," (",d.state,")"]},d.id))}),c.jsx(Ua,{className:"absolute right-3.5 top-3 w-4 h-4 text-[#00E5C7] pointer-events-none"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:s("pickupHub")}),c.jsx("select",{value:h,onChange:d=>p(d.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:u.map(d=>c.jsxs("option",{value:d.name,children:[d.name," — ",d.landmark]},d.id))})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400",children:s("dropHub")}),c.jsx("span",{className:"text-[10px] text-[#00E5C7] font-semibold",children:"Different hub allowed"})]}),c.jsx("select",{value:f,onChange:d=>m(d.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:u.map(d=>c.jsx("option",{value:d.name,children:d.name},d.id))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[c.jsxs("div",{className:"bg-[#0A0A0B] p-2.5 rounded-xl border border-white/10",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(ex,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Duration"})]}),c.jsx("p",{className:"text-xs font-bold text-white mt-0.5",children:a==="HOURLY"?"Min 4 Hours":a==="DAILY"?"24 Hours / Day":"30 Days Monthly"})]}),c.jsxs("div",{className:"bg-[#0A0A0B] p-2.5 rounded-xl border border-white/10",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(_i,{className:"w-3 h-3 text-[#D4AF37]"}),c.jsx("span",{children:"Inclusions"})]}),c.jsx("p",{className:"text-xs font-bold text-white mt-0.5",children:"2 Helmets + Fastag"})]})]}),c.jsxs("button",{type:"submit",className:"w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsx(Cx,{className:"w-4 h-4"}),c.jsxs("span",{children:["Show Available Vehicles in ",e]})]})]})]})})]})})]})},F1=({vehicle:t,durationMode:e,onOpen3D:n,onOpenGallery:i,onQuickBook:r,onToggleCompare:s,isCompared:a,isWishlisted:o,onToggleWishlist:l})=>{const{t:u}=ec(),h=t.available&&(t.fleetUnitsAvailable===void 0||t.fleetUnitsAvailable>0),p=e==="HOURLY"?t.pricePerHour:e==="DAILY"?t.pricePerDay:t.pricePerMonth,f=u(e==="HOURLY"?"perHour":e==="DAILY"?"perDay":"perMonth");return c.jsxs("div",{className:`glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border transition-all duration-300 ${h?"border-white/10 hover:border-[#00E5C7]/50":"border-red-500/20 opacity-90"}`,children:[c.jsxs("div",{className:"relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#1E1E24] to-[#141416]",children:[c.jsx("img",{src:t.imageUrl,alt:t.name,className:`w-full h-full object-cover object-center transition-transform duration-500 ${h?"group-hover:scale-105":"grayscale-[40%]"}`,loading:"lazy",onError:m=>{m.target.src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%23141416" width="600" height="400"/><text fill="%2300E5C7" font-family="sans-serif" font-size="24" font-weight="bold" x="50%" y="50%" text-anchor="middle">TBH FLEET UNIT</text></svg>'}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/40"}),c.jsxs("div",{className:"absolute top-3 left-3 flex flex-wrap gap-1.5 items-center",children:[c.jsx("span",{className:"px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#0A0A0B]/80 text-[#00E5C7] border border-[#00E5C7]/30 backdrop-blur-md",children:t.category?t.category.replace(/_/g," "):t.vehicleType.replace(/_/g," ")}),c.jsx("span",{className:`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${t.fuelType==="ELECTRIC"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:t.fuelType}),h?t.fleetUnitsAvailable!==void 0&&t.fleetUnitsAvailable>0?c.jsxs("span",{className:"px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md flex items-center space-x-1",children:[c.jsx(Os,{className:"w-3 h-3 inline mr-1"}),t.fleetUnitsAvailable," UNITS AT HUBS"]}):null:c.jsxs("span",{className:"px-2 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/90 text-white border border-rose-400 backdrop-blur-md flex items-center space-x-1",children:[c.jsx(m1,{className:"w-3 h-3 inline mr-1"}),"CURRENTLY UNAVAILABLE"]})]}),c.jsx("button",{onClick:()=>l(t.id),className:"absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0A0A0B]/70 border border-white/15 flex items-center justify-center text-slate-300 hover:text-rose-400 transition",children:c.jsx(fx,{className:`w-4 h-4 ${o?"fill-rose-500 text-rose-500":""}`})}),t.assetType==="GLB"?c.jsxs("button",{onClick:()=>n(t),className:"absolute bottom-3 right-3 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0B]/85 hover:bg-[#00E5C7] text-[#00E5C7] hover:text-black border border-[#00E5C7]/60 font-bold text-[11px] backdrop-blur-md transition shadow-teal-glow",children:[c.jsx(Yh,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Explore in 3D"})]}):c.jsxs("button",{onClick:()=>i?i(t):n(t),className:"absolute bottom-3 right-3 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0B]/85 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-black border border-[#D4AF37]/60 font-bold text-[11px] backdrop-blur-md transition shadow-gold-glow",children:[c.jsx(ax,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"View Gallery"})]}),c.jsx("div",{className:"absolute bottom-3 left-3 flex items-center space-x-1 text-xs font-semibold text-white bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10",children:t.rating&&t.rating>0?c.jsxs(c.Fragment,{children:[c.jsx(N1,{className:"w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]"}),c.jsx("span",{children:t.rating.toFixed(1)}),c.jsxs("span",{className:"text-slate-400 text-[10px]",children:["(",t.reviewCount||1," verified)"]})]}):c.jsx("span",{className:"text-slate-300 text-[10px] italic",children:"Be the first to review"})})]}),c.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("p",{className:"text-[11px] uppercase tracking-widest font-semibold text-slate-400",children:t.brand}),t.assetVerified===!1&&c.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-mono",title:"College project demonstration reference photo. Replacement required for commercial launch.",children:"DEMO REF"})]}),c.jsx("h4",{className:"text-lg font-bold text-white font-display leading-snug",children:t.name}),c.jsx("p",{className:"text-xs text-[#00E5C7] font-medium",children:t.variant||t.model})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-[#0A0A0B]/60 p-2.5 rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Xh,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:u("topSpeed")}),c.jsxs("p",{className:"text-xs font-bold text-white font-mono",children:[t.maxSpeed," km/h"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Jl,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:u("acceleration")}),c.jsxs("p",{className:"text-xs font-bold text-white font-mono",children:[t.zeroToHundred,"s"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(lx,{className:"w-3.5 h-3.5 text-slate-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:"Engine / Power"}),c.jsx("p",{className:"text-[11px] font-bold text-slate-200 truncate",children:t.powerBhp?`${t.powerBhp} bhp`:t.engineOrBattery})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(A1,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:"Mileage / Range"}),c.jsx("p",{className:"text-[11px] font-bold text-slate-200",children:t.mileageOrRange})]})]})]}),c.jsxs("div",{className:"pt-2 border-t border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] text-slate-400 font-medium",children:"Starting at"}),c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsxs("span",{className:"text-xl font-extrabold font-display text-white",children:["₹",p.toLocaleString("en-IN")]}),c.jsx("span",{className:"text-xs text-slate-400 font-semibold",children:f})]}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:["₹",t.securityDeposit.toLocaleString("en-IN")," deposit"]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>s(t),className:`p-2.5 rounded-xl border text-xs font-semibold transition ${a?"bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]":"bg-[#141416] border-white/10 text-slate-400 hover:text-white"}`,title:"Compare with other rides",children:c.jsx(gx,{className:"w-4 h-4"})}),h?c.jsxs("button",{onClick:()=>r(t),className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition flex items-center space-x-1.5",children:[c.jsx("span",{children:u("quickBook")}),c.jsx(ja,{className:"w-3.5 h-3.5"})]}):c.jsx("button",{disabled:!0,className:"px-4 py-2.5 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700 font-bold text-xs cursor-not-allowed",title:"This model currently has 0 available fleet units for rental",children:"Unavailable"})]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qh="169",B1=0,Pp=1,z1=2,jx=1,Vx=2,oi=3,Zi=0,on=1,Kn=2,Yi=0,xs=1,Lp=2,Dp=3,Ip=4,H1=5,xr=100,j1=101,V1=102,G1=103,W1=104,X1=200,Y1=201,q1=202,$1=203,hd=204,fd=205,K1=206,Z1=207,J1=208,Q1=209,eS=210,tS=211,nS=212,iS=213,rS=214,pd=0,md=1,gd=2,As=3,xd=4,vd=5,_d=6,yd=7,Gx=0,sS=1,aS=2,qi=0,oS=1,lS=2,cS=3,uS=4,dS=5,hS=6,fS=7,Wx=300,Rs=301,Ns=302,Sd=303,Ed=304,tc=306,Md=1e3,Er=1001,wd=1002,bn=1003,pS=1004,po=1005,Fn=1006,Oc=1007,Mr=1008,yi=1009,Xx=1010,Yx=1011,ka=1012,$h=1013,Pr=1014,hi=1015,Va=1016,Kh=1017,Zh=1018,Ps=1020,qx=35902,$x=1021,Kx=1022,zn=1023,Zx=1024,Jx=1025,vs=1026,Ls=1027,Qx=1028,Jh=1029,ev=1030,Qh=1031,ef=1033,$o=33776,Ko=33777,Zo=33778,Jo=33779,bd=35840,Td=35841,Cd=35842,Ad=35843,Rd=36196,Nd=37492,Pd=37496,Ld=37808,Dd=37809,Id=37810,Ud=37811,kd=37812,Od=37813,Fd=37814,Bd=37815,zd=37816,Hd=37817,jd=37818,Vd=37819,Gd=37820,Wd=37821,Qo=36492,Xd=36494,Yd=36495,tv=36283,qd=36284,$d=36285,Kd=36286,mS=3200,gS=3201,nv=0,xS=1,Ui="",Yn="srgb",nr="srgb-linear",tf="display-p3",nc="display-p3-linear",Cl="linear",ht="srgb",Al="rec709",Rl="p3",Or=7680,Up=519,vS=512,_S=513,yS=514,iv=515,SS=516,ES=517,MS=518,wS=519,kp=35044,Op="300 es",fi=2e3,Nl=2001;class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=Math.PI/180,Pl=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function qt(t,e,n){return Math.max(e,Math.min(n,t))}function bS(t,e){return(t%e+e)%e}function Bc(t,e,n){return(1-n)*t+n*e}function $s(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],x=i[8],y=r[0],g=r[3],d=r[6],v=r[1],_=r[4],E=r[7],P=r[2],A=r[5],T=r[8];return s[0]=a*y+o*v+l*P,s[3]=a*g+o*_+l*A,s[6]=a*d+o*E+l*T,s[1]=u*y+h*v+p*P,s[4]=u*g+h*_+p*A,s[7]=u*d+h*E+p*T,s[2]=f*y+m*v+x*P,s[5]=f*g+m*_+x*A,s[8]=f*d+m*E+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*l-h*s,m=u*s-a*l,x=n*p+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=p*y,e[1]=(r*u-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(zc.makeScale(e,n)),this}rotate(e){return this.premultiply(zc.makeRotation(-e)),this}translate(e,n){return this.premultiply(zc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zc=new Ge;function rv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TS(){const t=Ll("canvas");return t.style.display="block",t}const Fp={};function el(t){t in Fp||(Fp[t]=!0,console.warn(t))}function CS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function AS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function RS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[nr]:{transfer:Cl,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Yn]:{transfer:ht,primaries:Al,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[nc]:{transfer:Cl,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(zp),fromReference:t=>t.applyMatrix3(Bp)},[tf]:{transfer:ht,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(zp),fromReference:t=>t.applyMatrix3(Bp).convertLinearToSRGB()}},NS=new Set([nr,nc]),it={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!NS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ks[e].toReference,r=Ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ks[t].primaries},getTransfer:function(t){return t===Ui?Cl:Ks[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ks[e].luminanceCoefficients)}};function _s(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Fr;class PS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=Ll("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_s(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(_s(n[i]/255)*255):n[i]=_s(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LS=0;class sv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(jc(r[a].image)):s.push(jc(r[a]))}else s=jc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function jc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?PS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DS=0;class ln extends Fs{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Er,r=Er,s=Fn,a=Mr,o=zn,l=yi,u=ln.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=Ga(),this.name="",this.source=new sv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Md:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Md:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Wx;ln.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],f=l[1],m=l[5],x=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+y)<.1&&Math.abs(x+g)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,E=(m+1)/2,P=(d+1)/2,A=(h+f)/4,T=(p+y)/4,L=(x+g)/4;return _>E&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(p-y)*(p-y)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(p-y)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class IS extends Fs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new sv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends IS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class av extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class US extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3];const f=s[a+0],m=s[a+1],x=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(p!==y||l!==f||u!==m||h!==x){let g=1-o;const d=l*f+u*m+h*x+p*y,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,d*v);g=Math.sin(g*A)/P,o=Math.sin(o*A)/P}const E=o*v;if(l=l*g+f*E,u=u*g+m*E,h=h*g+x*E,p=p*g+y*E,g===1-o){const P=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=P,u*=P,h*=P,p*=P}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+l*m-u*f,e[n+1]=l*x+h*f+u*p-o*m,e[n+2]=u*x+h*m+o*f-l*p,e[n+3]=h*x-o*p-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"YXZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"ZXY":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"ZYX":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"YZX":this._x=f*h*p+u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p-f*m*x;break;case"XZY":this._x=f*h*p-u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),p=Math.sin((1-n)*h)/u,f=Math.sin(n*h)/u;return this._w=a*p+this._w*f,this._x=i*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Hp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*h,this.y=i+l*h+o*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new j,Hp=new Wa;class Xa{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),go.subVectors(this.max,Zs),Br.subVectors(e.a,Zs),zr.subVectors(e.b,Zs),Hr.subVectors(e.c,Zs),wi.subVectors(zr,Br),bi.subVectors(Hr,zr),or.subVectors(Br,Hr);let n=[0,-wi.z,wi.y,0,-bi.z,bi.y,0,-or.z,or.y,wi.z,0,-wi.x,bi.z,0,-bi.x,or.z,0,-or.x,-wi.y,wi.x,0,-bi.y,bi.x,0,-or.y,or.x,0];return!Gc(n,Br,zr,Hr,go)||(n=[1,0,0,0,1,0,0,0,1],!Gc(n,Br,zr,Hr,go))?!1:(xo.crossVectors(wi,bi),n=[xo.x,xo.y,xo.z],Gc(n,Br,zr,Hr,go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new j,new j,new j,new j,new j,new j,new j,new j],Pn=new j,mo=new Xa,Br=new j,zr=new j,Hr=new j,wi=new j,bi=new j,or=new j,Zs=new j,go=new j,xo=new j,lr=new j;function Gc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){lr.fromArray(t,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),u=n.dot(lr),h=i.dot(lr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const kS=new Xa,Js=new j,Wc=new j;class ic{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Wc)),this.expandByPoint(Js.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new j,Xc=new j,vo=new j,Ti=new j,Yc=new j,_o=new j,qc=new j;class ov{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xc.copy(e).add(n).multiplyScalar(.5),vo.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Xc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(vo),o=Ti.dot(this.direction),l=-Ti.dot(vo),u=Ti.lengthSq(),h=Math.abs(1-a*a);let p,f,m,x;if(h>0)if(p=a*l-o,f=a*o-l,x=s*h,p>=0)if(f>=-x)if(f<=x){const y=1/h;p*=y,f*=y,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;else f<=-x?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u):f<=x?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Xc).addScaledVector(vo,f),m}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){Yc.subVectors(n,e),_o.subVectors(i,e),qc.crossVectors(Yc,_o);let a=this.direction.dot(qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(_o.crossVectors(Ti,_o));if(l<0)return null;const u=o*this.direction.dot(Yc.cross(Ti));if(u<0||l+u>a)return null;const h=-o*Ti.dot(qc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,n,i,r,s,a,o,l,u,h,p,f,m,x,y,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,p,f,m,x,y,g)}set(e,n,i,r,s,a,o,l,u,h,p,f,m,x,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=x,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),a=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,x=o*h,y=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+x*u,n[5]=f-y*u,n[9]=-o*l,n[2]=y-f*u,n[6]=x+m*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,x=u*h,y=u*p;n[0]=f+y*o,n[4]=x*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,x=u*h,y=u*p;n[0]=f-y*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=y-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,x=o*h,y=o*p;n[0]=l*h,n[4]=x*u-m,n[8]=f*u+y,n[1]=l*p,n[5]=y*u+f,n[9]=m*u-x,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*u,x=o*l,y=o*u;n[0]=l*h,n[4]=y-f*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+x,n[10]=f-y*p}else if(e.order==="XZY"){const f=a*l,m=a*u,x=o*l,y=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=f*p+y,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=y*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OS,e,FS)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(i,dn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(i,dn)),Ci.normalize(),yo.crossVectors(dn,Ci),r[0]=Ci.x,r[4]=yo.x,r[8]=dn.x,r[1]=Ci.y,r[5]=yo.y,r[9]=dn.y,r[2]=Ci.z,r[6]=yo.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],x=i[2],y=i[6],g=i[10],d=i[14],v=i[3],_=i[7],E=i[11],P=i[15],A=r[0],T=r[4],L=r[8],H=r[12],S=r[1],w=r[5],k=r[9],G=r[13],$=r[2],J=r[6],V=r[10],ne=r[14],I=r[3],te=r[7],N=r[11],C=r[15];return s[0]=a*A+o*S+l*$+u*I,s[4]=a*T+o*w+l*J+u*te,s[8]=a*L+o*k+l*V+u*N,s[12]=a*H+o*G+l*ne+u*C,s[1]=h*A+p*S+f*$+m*I,s[5]=h*T+p*w+f*J+m*te,s[9]=h*L+p*k+f*V+m*N,s[13]=h*H+p*G+f*ne+m*C,s[2]=x*A+y*S+g*$+d*I,s[6]=x*T+y*w+g*J+d*te,s[10]=x*L+y*k+g*V+d*N,s[14]=x*H+y*G+g*ne+d*C,s[3]=v*A+_*S+E*$+P*I,s[7]=v*T+_*w+E*J+P*te,s[11]=v*L+_*k+E*V+P*N,s[15]=v*H+_*G+E*ne+P*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],x=e[3],y=e[7],g=e[11],d=e[15];return x*(+s*l*p-r*u*p-s*o*f+i*u*f+r*o*m-i*l*m)+y*(+n*l*m-n*u*f+s*a*f-r*a*m+r*u*h-s*l*h)+g*(+n*u*p-n*o*m-s*a*p+i*a*m+s*o*h-i*u*h)+d*(-r*o*h-n*l*p+n*o*f+r*a*p-i*a*f+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],x=e[12],y=e[13],g=e[14],d=e[15],v=p*g*u-y*f*u+y*l*m-o*g*m-p*l*d+o*f*d,_=x*f*u-h*g*u-x*l*m+a*g*m+h*l*d-a*f*d,E=h*y*u-x*p*u+x*o*m-a*y*m-h*o*d+a*p*d,P=x*p*l-h*y*l-x*o*f+a*y*f+h*o*g-a*p*g,A=n*v+i*_+r*E+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*f*s-p*g*s-y*r*m+i*g*m+p*r*d-i*f*d)*T,e[2]=(o*g*s-y*l*s+y*r*u-i*g*u-o*r*d+i*l*d)*T,e[3]=(p*l*s-o*f*s-p*r*u+i*f*u+o*r*m-i*l*m)*T,e[4]=_*T,e[5]=(h*g*s-x*f*s+x*r*m-n*g*m-h*r*d+n*f*d)*T,e[6]=(x*l*s-a*g*s-x*r*u+n*g*u+a*r*d-n*l*d)*T,e[7]=(a*f*s-h*l*s+h*r*u-n*f*u-a*r*m+n*l*m)*T,e[8]=E*T,e[9]=(x*p*s-h*y*s-x*i*m+n*y*m+h*i*d-n*p*d)*T,e[10]=(a*y*s-x*o*s+x*i*u-n*y*u-a*i*d+n*o*d)*T,e[11]=(h*o*s-a*p*s-h*i*u+n*p*u+a*i*m-n*o*m)*T,e[12]=P*T,e[13]=(h*y*r-x*p*r+x*i*f-n*y*f-h*i*g+n*p*g)*T,e[14]=(x*o*r-a*y*r-x*i*l+n*y*l+a*i*g-n*o*g)*T,e[15]=(a*p*r-h*o*r+h*i*l-n*p*l-a*i*f+n*o*f)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,x=s*p,y=a*h,g=a*p,d=o*p,v=l*u,_=l*h,E=l*p,P=i.x,A=i.y,T=i.z;return r[0]=(1-(y+d))*P,r[1]=(m+E)*P,r[2]=(x-_)*P,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(f+d))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(x+_)*T,r[9]=(g-v)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const a=jr.set(r[4],r[5],r[6]).length(),o=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,h=1/a,p=1/o;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=p,Ln.elements[9]*=p,Ln.elements[10]*=p,n.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),p=(n+e)/(n-e),f=(i+r)/(i-r);let m,x;if(o===fi)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Nl)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const l=this.elements,u=1/(n-e),h=1/(i-r),p=1/(a-s),f=(n+e)*u,m=(i+r)*h;let x,y;if(o===fi)x=(a+s)*p,y=-2*p;else if(o===Nl)x=s*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new j,Ln=new mt,OS=new j(0,0,0),FS=new j(1,1,1),Ci=new j,yo=new j,dn=new j,jp=new mt,Vp=new Wa;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class lv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BS=0;const Gp=new j,Vr=new Wa,ri=new mt,So=new j,Qs=new j,zS=new j,HS=new Wa,Wp=new j(1,0,0),Xp=new j(0,1,0),Yp=new j(0,0,1),qp={type:"added"},jS={type:"removed"},Gr={type:"childadded",child:null},$c={type:"childremoved",child:null};class Tt extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new j,n=new ei,i=new Wa,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(Yp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(Yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?So.copy(e):So.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Qs,So,this.up):ri.lookAt(So,Qs,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ri),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jS),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,zS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,HS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new j(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new j,si=new j,Kc=new j,ai=new j,Wr=new j,Xr=new j,$p=new j,Zc=new j,Jc=new j,Qc=new j,eu=new ot,tu=new ot,nu=new ot;class Bn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),si.subVectors(i,n),Kc.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(si),l=Dn.dot(Kc),u=si.dot(si),h=si.dot(Kc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*l-o*h)*f,x=(a*h-o*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return eu.setScalar(0),tu.setScalar(0),nu.setScalar(0),eu.fromBufferAttribute(e,n),tu.fromBufferAttribute(e,i),nu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(eu,s.x),a.addScaledVector(tu,s.y),a.addScaledVector(nu,s.z),a}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),si.subVectors(e,n),Dn.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),Zc.subVectors(e,i);const l=Wr.dot(Zc),u=Xr.dot(Zc);if(l<=0&&u<=0)return n.copy(i);Jc.subVectors(e,r);const h=Wr.dot(Jc),p=Xr.dot(Jc);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*u;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Wr,a);Qc.subVectors(e,s);const m=Wr.dot(Qc),x=Xr.dot(Qc);if(x>=0&&m<=x)return n.copy(s);const y=m*u-l*x;if(y<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Xr,o);const g=h*x-m*p;if(g<=0&&p-h>=0&&m-x>=0)return $p.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector($p,o);const d=1/(g+y+f);return a=y*d,o=f*d,n.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function iu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=bS(e,1),n=qt(n,0,1),i=qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=iu(a,s,e+1/3),this.g=iu(a,s,e),this.b=iu(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=cv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Hc(e.r),this.g=Hc(e.g),this.b=Hc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return it.fromWorkingColorSpace(jt.copy(this),e),Math.round(qt(jt.r*255,0,255))*65536+Math.round(qt(jt.g*255,0,255))*256+Math.round(qt(jt.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Yn){it.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(Eo);const i=Bc(Ai.h,Eo.h,n),r=Bc(Ai.s,Eo.s,n),s=Bc(Ai.l,Eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Xe;Xe.NAMES=cv;let VS=0;class Bs extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=xs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=fd,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hd&&(i.blendSrc=this.blendSrc),this.blendDst!==fd&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xa extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,Mo=new Je;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kp,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mo.fromBufferAttribute(this,n),Mo.applyMatrix3(e),this.setXY(n,Mo.x,Mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$s(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$s(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$s(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$s(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$s(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kp&&(e.usage=this.usage),e}}class uv extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class dv extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vt extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GS=0;const Sn=new mt,ru=new Tt,Yr=new j,hn=new Xa,ea=new Xa,Pt=new j;class _n extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rv(e)?dv:uv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return ru.lookAt(e),ru.updateMatrix(),this.applyMatrix4(ru.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ea.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(hn.min,ea.min),hn.expandByPoint(Pt),Pt.addVectors(hn.max,ea.max),hn.expandByPoint(Pt)):(hn.expandByPoint(ea.min),hn.expandByPoint(ea.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Pt.fromBufferAttribute(o,u),l&&(Yr.fromBufferAttribute(e,u),Pt.add(Yr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new j,l[L]=new j;const u=new j,h=new j,p=new j,f=new Je,m=new Je,x=new Je,y=new j,g=new j;function d(L,H,S){u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,H),p.fromBufferAttribute(i,S),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,H),x.fromBufferAttribute(s,S),h.sub(u),p.sub(u),m.sub(f),x.sub(f);const w=1/(m.x*x.y-x.x*m.y);isFinite(w)&&(y.copy(h).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(w),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(w),o[L].add(y),o[H].add(y),o[S].add(y),l[L].add(g),l[H].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,H=v.length;L<H;++L){const S=v[L],w=S.start,k=S.count;for(let G=w,$=w+k;G<$;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const _=new j,E=new j,P=new j,A=new j;function T(L){P.fromBufferAttribute(r,L),A.copy(P);const H=o[L];_.copy(H),_.sub(P.multiplyScalar(P.dot(H))).normalize(),E.crossVectors(A,H);const w=E.dot(l[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,w)}for(let L=0,H=v.length;L<H;++L){const S=v[L],w=S.start,k=S.count;for(let G=w,$=w+k;G<$;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,u=new j,h=new j,p=new j;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),o.add(h),l.add(h),u.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(l.length*h);let m=0,x=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*h;for(let d=0;d<h;d++)f[x++]=u[m++]}return new Qn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new mt,cr=new ov,wo=new ic,Zp=new j,bo=new j,To=new j,Co=new j,su=new j,Ao=new j,Jp=new j,Ro=new j;class at extends Tt{constructor(e=new _n,n=new xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ao.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(su.fromBufferAttribute(p,e),a?Ao.addScaledVector(su,h):Ao.addScaledVector(su.sub(n),h))}n.add(Ao)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(wo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(wo,Zp)===null||cr.origin.distanceToSquared(Zp)>(e.far-e.near)**2))&&(Kp.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Kp),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const g=f[x],d=a[g.materialIndex],v=Math.max(g.start,m.start),_=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let E=v,P=_;E<P;E+=3){const A=o.getX(E),T=o.getX(E+1),L=o.getX(E+2);r=No(this,d,e,i,u,h,p,A,T,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let g=x,d=y;g<d;g+=3){const v=o.getX(g),_=o.getX(g+1),E=o.getX(g+2);r=No(this,a,e,i,u,h,p,v,_,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,y=f.length;x<y;x++){const g=f[x],d=a[g.materialIndex],v=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let E=v,P=_;E<P;E+=3){const A=E,T=E+1,L=E+2;r=No(this,d,e,i,u,h,p,A,T,L),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,d=y;g<d;g+=3){const v=g,_=g+1,E=g+2;r=No(this,a,e,i,u,h,p,v,_,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function WS(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zi,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ro);return u<n.near||u>n.far?null:{distance:u,point:Ro.clone(),object:t}}function No(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,bo),t.getVertexPosition(l,To),t.getVertexPosition(u,Co);const h=WS(t,e,n,i,bo,To,Co,Jp);if(h){const p=new j;Bn.getBarycoord(Jp,bo,To,Co,p),r&&(h.uv=Bn.getInterpolatedAttribute(r,o,l,u,p,new Je)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,o,l,u,p,new Je)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,u,p,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new j,materialIndex:0};Bn.getNormal(bo,To,Co,f.normal),h.face=f,h.barycoord=p}return h}class On extends _n{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],p=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(p,2));function x(y,g,d,v,_,E,P,A,T,L,H){const S=E/T,w=P/L,k=E/2,G=P/2,$=A/2,J=T+1,V=L+1;let ne=0,I=0;const te=new j;for(let N=0;N<V;N++){const C=N*w-G;for(let re=0;re<J;re++){const Q=re*S-k;te[y]=Q*v,te[g]=C*_,te[d]=$,u.push(te.x,te.y,te.z),te[y]=0,te[g]=0,te[d]=A>0?1:-1,h.push(te.x,te.y,te.z),p.push(re/T),p.push(1-N/L),ne+=1}}for(let N=0;N<L;N++)for(let C=0;C<T;C++){const re=f+C+J*N,Q=f+C+J*(N+1),O=f+(C+1)+J*(N+1),K=f+(C+1)+J*N;l.push(re,Q,K),l.push(Q,O,K),I+=6}o.addGroup(m,I,H),m+=I,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function XS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const YS={clone:Ds,merge:Xt};var qS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=XS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fv extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new j,Qp=new Je,em=new Je;class tn extends fv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(Fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,em),n.subVectors(em,Qp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const qr=-90,$r=1;class KS extends Tt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(qr,$r,e,n);r.layers=this.layers,this.add(r);const s=new tn(qr,$r,e,n);s.layers=this.layers,this.add(s);const a=new tn(qr,$r,e,n);a.layers=this.layers,this.add(a);const o=new tn(qr,$r,e,n);o.layers=this.layers,this.add(o);const l=new tn(qr,$r,e,n);l.layers=this.layers,this.add(l);const u=new tn(qr,$r,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class pv extends ln{constructor(e,n,i,r,s,a,o,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZS extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new pv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new On(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Yi});s.uniforms.tEquirect.value=n;const a=new at(r,s),o=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Fn),new KS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const au=new j,JS=new j,QS=new Ge;class mr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=au.subVectors(i,n).cross(JS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(au),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||QS.getNormalMatrix(e),r=this.coplanarPoint(au).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new ic,Po=new j;class nf{constructor(e=new mr,n=new mr,i=new mr,r=new mr,s=new mr,a=new mr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],p=r[6],f=r[7],m=r[8],x=r[9],y=r[10],g=r[11],d=r[12],v=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-s,f-u,g-m,E-d).normalize(),i[1].setComponents(l+s,f+u,g+m,E+d).normalize(),i[2].setComponents(l+a,f+h,g+x,E+v).normalize(),i[3].setComponents(l-a,f-h,g-x,E-v).normalize(),i[4].setComponents(l-o,f-p,g-y,E-_).normalize(),n===fi)i[5].setComponents(l+o,f+p,g+y,E+_).normalize();else if(n===Nl)i[5].setComponents(o,p,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function eE(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<p.length;m++){const x=p[f],y=p[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++f,p[f]=y)}p.length=f+1;for(let m=0,x=p.length;m<x;m++){const y=p[m];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Ya extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,p=e/o,f=n/l,m=[],x=[],y=[],g=[];for(let d=0;d<h;d++){const v=d*f-a;for(let _=0;_<u;_++){const E=_*p-s;x.push(E,-v,0),y.push(0,0,1),g.push(_/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const _=v+u*d,E=v+u*(d+1),P=v+1+u*(d+1),A=v+1+u*d;m.push(_,E,A),m.push(E,P,A)}this.setIndex(m),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var tE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
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
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oE=`#ifdef USE_AOMAP
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
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
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
#endif`,uE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pE=`#ifdef USE_IRIDESCENCE
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
#endif`,mE=`#ifdef USE_BUMPMAP
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wE=`#define PI 3.141592653589793
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TE=`vec3 transformedNormal = objectNormal;
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
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`
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
}`,DE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,UE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
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
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XE=`uniform bool receiveShadow;
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
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
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
#endif`,QE=`struct PhysicalMaterial {
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
}`,eM=`
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
#endif`,tM=`#if defined( RE_IndirectDiffuse )
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
#endif`,nM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uM=`#if defined( USE_POINTS_UV )
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
#endif`,dM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gM=`#ifdef USE_MORPHTARGETS
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
#endif`,xM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MM=`#ifdef USE_NORMALMAP
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
#endif`,wM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,BM=`float getShadowMask() {
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
}`,zM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HM=`#ifdef USE_SKINNING
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
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VM=`#ifdef USE_SKINNING
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
#endif`,GM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,$M=`#ifdef USE_TRANSMISSION
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
#endif`,KM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tw=`uniform sampler2D t2D;
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
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`#include <common>
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
}`,ow=`#if DEPTH_PACKING == 3200
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
}`,lw=`#define DISTANCE
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
}`,cw=`#define DISTANCE
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`uniform float scale;
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
}`,fw=`uniform vec3 diffuse;
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
}`,pw=`#include <common>
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
}`,mw=`uniform vec3 diffuse;
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
}`,gw=`#define LAMBERT
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
}`,xw=`#define LAMBERT
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
}`,vw=`#define MATCAP
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
}`,_w=`#define MATCAP
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
}`,yw=`#define NORMAL
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
}`,Sw=`#define NORMAL
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
}`,Ew=`#define PHONG
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
}`,Mw=`#define PHONG
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
}`,ww=`#define STANDARD
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
}`,bw=`#define STANDARD
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
}`,Tw=`#define TOON
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
}`,Cw=`#define TOON
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
}`,Aw=`uniform float size;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Nw=`#include <common>
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
}`,Pw=`uniform vec3 color;
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
}`,Lw=`uniform float rotation;
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
}`,Dw=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:tE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:rE,alphatest_fragment:sE,alphatest_pars_fragment:aE,aomap_fragment:oE,aomap_pars_fragment:lE,batching_pars_vertex:cE,batching_vertex:uE,begin_vertex:dE,beginnormal_vertex:hE,bsdfs:fE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:vE,clipping_planes_vertex:_E,color_fragment:yE,color_pars_fragment:SE,color_pars_vertex:EE,color_vertex:ME,common:wE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:TE,displacementmap_pars_vertex:CE,displacementmap_vertex:AE,emissivemap_fragment:RE,emissivemap_pars_fragment:NE,colorspace_fragment:PE,colorspace_pars_fragment:LE,envmap_fragment:DE,envmap_common_pars_fragment:IE,envmap_pars_fragment:UE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:YE,envmap_vertex:OE,fog_vertex:FE,fog_pars_vertex:BE,fog_fragment:zE,fog_pars_fragment:HE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:VE,lights_lambert_fragment:GE,lights_lambert_pars_fragment:WE,lights_pars_begin:XE,lights_toon_fragment:qE,lights_toon_pars_fragment:$E,lights_phong_fragment:KE,lights_phong_pars_fragment:ZE,lights_physical_fragment:JE,lights_physical_pars_fragment:QE,lights_fragment_begin:eM,lights_fragment_maps:tM,lights_fragment_end:nM,logdepthbuf_fragment:iM,logdepthbuf_pars_fragment:rM,logdepthbuf_pars_vertex:sM,logdepthbuf_vertex:aM,map_fragment:oM,map_pars_fragment:lM,map_particle_fragment:cM,map_particle_pars_fragment:uM,metalnessmap_fragment:dM,metalnessmap_pars_fragment:hM,morphinstance_vertex:fM,morphcolor_vertex:pM,morphnormal_vertex:mM,morphtarget_pars_vertex:gM,morphtarget_vertex:xM,normal_fragment_begin:vM,normal_fragment_maps:_M,normal_pars_fragment:yM,normal_pars_vertex:SM,normal_vertex:EM,normalmap_pars_fragment:MM,clearcoat_normal_fragment_begin:wM,clearcoat_normal_fragment_maps:bM,clearcoat_pars_fragment:TM,iridescence_pars_fragment:CM,opaque_fragment:AM,packing:RM,premultiplied_alpha_fragment:NM,project_vertex:PM,dithering_fragment:LM,dithering_pars_fragment:DM,roughnessmap_fragment:IM,roughnessmap_pars_fragment:UM,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:OM,shadowmap_vertex:FM,shadowmask_pars_fragment:BM,skinbase_vertex:zM,skinning_pars_vertex:HM,skinning_vertex:jM,skinnormal_vertex:VM,specularmap_fragment:GM,specularmap_pars_fragment:WM,tonemapping_fragment:XM,tonemapping_pars_fragment:YM,transmission_fragment:qM,transmission_pars_fragment:$M,uv_pars_fragment:KM,uv_pars_vertex:ZM,uv_vertex:JM,worldpos_vertex:QM,background_vert:ew,background_frag:tw,backgroundCube_vert:nw,backgroundCube_frag:iw,cube_vert:rw,cube_frag:sw,depth_vert:aw,depth_frag:ow,distanceRGBA_vert:lw,distanceRGBA_frag:cw,equirect_vert:uw,equirect_frag:dw,linedashed_vert:hw,linedashed_frag:fw,meshbasic_vert:pw,meshbasic_frag:mw,meshlambert_vert:gw,meshlambert_frag:xw,meshmatcap_vert:vw,meshmatcap_frag:_w,meshnormal_vert:yw,meshnormal_frag:Sw,meshphong_vert:Ew,meshphong_frag:Mw,meshphysical_vert:ww,meshphysical_frag:bw,meshtoon_vert:Tw,meshtoon_frag:Cw,points_vert:Aw,points_frag:Rw,shadow_vert:Nw,shadow_frag:Pw,sprite_vert:Lw,sprite_frag:Dw},me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},qn={basic:{uniforms:Xt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Xt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Xt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Xt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Xt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Xt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Xt([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Xt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Xt([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Xt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Xt([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Xt([me.common,me.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Xt([me.lights,me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};qn.physical={uniforms:Xt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Lo={r:0,b:0,g:0},dr=new ei,Iw=new mt;function Uw(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,u,h,p=null,f=0,m=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const E=x(v);E===null?d(o,l):E&&E.isColor&&(d(E,1),_=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,_){const E=x(_);E&&(E.isCubeTexture||E.mapping===tc)?(h===void 0&&(h=new at(new On(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ds(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),dr.copy(_.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(dr)),h.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,(p!==E||f!==E.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,p=E,f=E.version,m=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new at(new Ya(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ds(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=it.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||f!==E.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,p=E,f=E.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,_){v.getRGB(Lo,hv(t)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(o,l)},render:y,addToRenderList:g}}function kw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,w,k,G,$){let J=!1;const V=p(G,k,w);s!==V&&(s=V,u(s.object)),J=m(S,G,k,$),J&&x(S,G,k,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,E(S,w,k,G),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function p(S,w,k){const G=k.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let J=$[w.id];J===void 0&&(J={},$[w.id]=J);let V=J[G];return V===void 0&&(V=f(l()),J[G]=V),V}function f(S){const w=[],k=[],G=[];for(let $=0;$<n;$++)w[$]=0,k[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,w,k,G){const $=s.attributes,J=w.attributes;let V=0;const ne=k.getAttributes();for(const I in ne)if(ne[I].location>=0){const N=$[I];let C=J[I];if(C===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(C=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(C=S.instanceColor)),N===void 0||N.attribute!==C||C&&N.data!==C.data)return!0;V++}return s.attributesNum!==V||s.index!==G}function x(S,w,k,G){const $={},J=w.attributes;let V=0;const ne=k.getAttributes();for(const I in ne)if(ne[I].location>=0){let N=J[I];N===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(N=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(N=S.instanceColor));const C={};C.attribute=N,N&&N.data&&(C.data=N.data),$[I]=C,V++}s.attributes=$,s.attributesNum=V,s.index=G}function y(){const S=s.newAttributes;for(let w=0,k=S.length;w<k;w++)S[w]=0}function g(S){d(S,0)}function d(S,w){const k=s.newAttributes,G=s.enabledAttributes,$=s.attributeDivisors;k[S]=1,G[S]===0&&(t.enableVertexAttribArray(S),G[S]=1),$[S]!==w&&(t.vertexAttribDivisor(S,w),$[S]=w)}function v(){const S=s.newAttributes,w=s.enabledAttributes;for(let k=0,G=w.length;k<G;k++)w[k]!==S[k]&&(t.disableVertexAttribArray(k),w[k]=0)}function _(S,w,k,G,$,J,V){V===!0?t.vertexAttribIPointer(S,w,k,$,J):t.vertexAttribPointer(S,w,k,G,$,J)}function E(S,w,k,G){y();const $=G.attributes,J=k.getAttributes(),V=w.defaultAttributeValues;for(const ne in J){const I=J[ne];if(I.location>=0){let te=$[ne];if(te===void 0&&(ne==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),ne==="instanceColor"&&S.instanceColor&&(te=S.instanceColor)),te!==void 0){const N=te.normalized,C=te.itemSize,re=e.get(te);if(re===void 0)continue;const Q=re.buffer,O=re.type,K=re.bytesPerElement,B=O===t.INT||O===t.UNSIGNED_INT||te.gpuType===$h;if(te.isInterleavedBufferAttribute){const W=te.data,oe=W.stride,he=te.offset;if(W.isInstancedInterleavedBuffer){for(let be=0;be<I.locationSize;be++)d(I.location+be,W.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let be=0;be<I.locationSize;be++)g(I.location+be);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let be=0;be<I.locationSize;be++)_(I.location+be,C/I.locationSize,O,N,oe*K,(he+C/I.locationSize*be)*K,B)}else{if(te.isInstancedBufferAttribute){for(let W=0;W<I.locationSize;W++)d(I.location+W,te.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let W=0;W<I.locationSize;W++)g(I.location+W);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let W=0;W<I.locationSize;W++)_(I.location+W,C/I.locationSize,O,N,C*K,C/I.locationSize*W*K,B)}}else if(V!==void 0){const N=V[ne];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(I.location,N);break;case 3:t.vertexAttrib3fv(I.location,N);break;case 4:t.vertexAttrib4fv(I.location,N);break;default:t.vertexAttrib1fv(I.location,N)}}}}v()}function P(){L();for(const S in i){const w=i[S];for(const k in w){const G=w[k];for(const $ in G)h(G[$].object),delete G[$];delete w[k]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const k in w){const G=w[k];for(const $ in G)h(G[$].object),delete G[$];delete w[k]}delete i[S.id]}function T(S){for(const w in i){const k=i[w];if(k[S.id]===void 0)continue;const G=k[S.id];for(const $ in G)h(G[$].object),delete G[$];delete k[S.id]}}function L(){H(),a=!0,s!==r&&(s=r,u(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function Ow(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,p){p!==0&&(t.drawArraysInstanced(i,u,h,p),n.update(h,i,p))}function o(u,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,p);let m=0;for(let x=0;x<p;x++)m+=h[x];n.update(m,i,1)}function l(u,h,p,f){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<u.length;x++)a(u[x],h[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,h,0,f,0,p);let x=0;for(let y=0;y<p;y++)x+=h[y];for(let y=0;y<f.length;y++)n.update(x,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==zn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const L=T===Va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==yi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hi&&!L)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:E,vertexTextures:P,maxSamples:A}}function Bw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new mr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const x=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||x===null||x.length===0||s&&!g)s?h(null):u();else{const v=s?0:i,_=v*4;let E=d.clippingState||null;l.value=E,E=h(x,f,_,m);for(let P=0;P!==_;++P)E[P]=n[P];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,x){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const d=m+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,E=m;_!==y;++_,E+=4)a.copy(p[_]).applyMatrix4(v,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function zw(t){let e=new WeakMap;function n(a,o){return o===Sd?a.mapping=Rs:o===Ed&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sd||o===Ed)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new ZS(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gv extends fv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=4,tm=[.125,.215,.35,.446,.526,.582],vr=20,ou=new gv,nm=new Xe;let lu=null,cu=0,uu=0,du=!1;const gr=(1+Math.sqrt(5))/2,Kr=1/gr,im=[new j(-gr,Kr,0),new j(gr,Kr,0),new j(-Kr,0,gr),new j(Kr,0,gr),new j(0,gr,-Kr),new j(0,gr,Kr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class rm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=om(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,cu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),cu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Va,format:zn,colorSpace:nr,depthBuffer:!1},r=sm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hw(s)),this._blurMaterial=jw(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,ou)}_sceneToCubeUV(e,n,i,r){const o=new tn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(nm),h.toneMapping=qi,h.autoClear=!1;const m=new xa({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new at(new On,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(nm),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const _=this._cubeSize;Do(r,v*_,d>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=om()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Do(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=im[(r-s-1)%im.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new at(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vr-1),y=s/x,g=isFinite(s)?1+Math.floor(h*y):vr;g>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vr}`);const d=[];let v=0;for(let T=0;T<vr;++T){const L=T/y,H=Math.exp(-L*L/2);d.push(H),T===0?v+=H:T<g&&(v+=2*H)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-i;const E=this._sizeLods[r],P=3*E*(r>_-us?r-_+us:0),A=4*(this._cubeSize-E);Do(n,P,A,3*E,2*E),l.setRenderTarget(n),l.render(p,ou)}}function Hw(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+tm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-us?l=tm[a-t+us-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,x=6,y=3,g=2,d=1,v=new Float32Array(y*x*m),_=new Float32Array(g*x*m),E=new Float32Array(d*x*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,L=A>2?0:-1,H=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(H,y*x*A),_.set(f,g*x*A);const S=[A,A,A,A,A,A];E.set(S,d*x*A)}const P=new _n;P.setAttribute("position",new Qn(v,y)),P.setAttribute("uv",new Qn(_,g)),P.setAttribute("faceIndex",new Qn(E,d)),e.push(P),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function sm(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function jw(t,e,n){const i=new Float32Array(vr),r=new j(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function am(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

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
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function om(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function rf(){return`

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
	`}function Vw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Sd||l===Ed,h=l===Rs||l===Ns;if(u||h){let p=e.get(o);const f=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new rm(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new rm(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Gw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&el("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ww(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const y=f.morphAttributes[x];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const x in f)e.update(f[x],t.ARRAY_BUFFER);const m=p.morphAttributes;for(const x in m){const y=m[x];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(p){const f=[],m=p.index,x=p.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let _=0,E=v.length;_<E;_+=3){const P=v[_+0],A=v[_+1],T=v[_+2];f.push(P,A,A,T,T,P)}}else if(x!==void 0){const v=x.array;y=x.version;for(let _=0,E=v.length/3-1;_<E;_+=3){const P=_+0,A=_+1,T=_+2;f.push(P,A,A,T,T,P)}}else return;const g=new(rv(f)?dv:uv)(f,1);g.version=y;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function Xw(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function u(f,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,f*a,x),n.update(m,i,x))}function h(f,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,x);let g=0;for(let d=0;d<x;d++)g+=m[d];n.update(g,i,1)}function p(f,m,x,y){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<f.length;d++)u(f[d]/a,m[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,y,0,x);let d=0;for(let v=0;v<x;v++)d+=m[v];for(let v=0;v<y.length;v++)n.update(d,i,y[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Yw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qw(t,e,n){const i=new WeakMap,r=new ot;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),g===!0&&(E=3);let P=o.attributes.position.count*E,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*p),L=new av(T,P,A,p);L.type=hi,L.needsUpdate=!0;const H=E*4;for(let w=0;w<p;w++){const k=d[w],G=v[w],$=_[w],J=P*A*4*w;for(let V=0;V<k.count;V++){const ne=V*H;x===!0&&(r.fromBufferAttribute(k,V),T[J+ne+0]=r.x,T[J+ne+1]=r.y,T[J+ne+2]=r.z,T[J+ne+3]=0),y===!0&&(r.fromBufferAttribute(G,V),T[J+ne+4]=r.x,T[J+ne+5]=r.y,T[J+ne+6]=r.z,T[J+ne+7]=0),g===!0&&(r.fromBufferAttribute($,V),T[J+ne+8]=r.x,T[J+ne+9]=r.y,T[J+ne+10]=r.z,T[J+ne+11]=$.itemSize===4?r.w:1)}}f={count:p,texture:L,size:new Je(P,A)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function $w(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return p}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class xv extends ln{constructor(e,n,i,r,s,a,o,l,u,h=vs){if(h!==vs&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===vs&&(i=Pr),i===void 0&&h===Ls&&(i=Ps),super(null,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const vv=new ln,lm=new xv(1,1),_v=new av,yv=new US,Sv=new pv,cm=[],um=[],dm=new Float32Array(16),hm=new Float32Array(9),fm=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cm[r];if(s===void 0&&(s=new Float32Array(r),cm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=um[e];n===void 0&&(n=new Int32Array(e),um[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Kw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function eb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Rt(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),Nt(n,i)}}function tb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Rt(n,i))return;hm.set(i),t.uniformMatrix3fv(this.addr,!1,hm),Nt(n,i)}}function nb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Rt(n,i))return;dm.set(i),t.uniformMatrix4fv(this.addr,!1,dm),Nt(n,i)}}function ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function ob(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function db(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(lm.compareFunction=iv,s=lm):s=vv,n.setTexture2D(e||s,r)}function hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yv,r)}function fb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Sv,r)}function pb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||_v,r)}function mb(t){switch(t){case 5126:return Kw;case 35664:return Zw;case 35665:return Jw;case 35666:return Qw;case 35674:return eb;case 35675:return tb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ab;case 5125:return ob;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(t,e){t.uniform1fv(this.addr,e)}function xb(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function vb(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function _b(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function yb(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Sb(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Eb(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Mb(t,e){t.uniform1iv(this.addr,e)}function wb(t,e){t.uniform2iv(this.addr,e)}function bb(t,e){t.uniform3iv(this.addr,e)}function Tb(t,e){t.uniform4iv(this.addr,e)}function Cb(t,e){t.uniform1uiv(this.addr,e)}function Ab(t,e){t.uniform2uiv(this.addr,e)}function Rb(t,e){t.uniform3uiv(this.addr,e)}function Nb(t,e){t.uniform4uiv(this.addr,e)}function Pb(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||vv,s[a])}function Lb(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||yv,s[a])}function Db(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Sv,s[a])}function Ib(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||_v,s[a])}function Ub(t){switch(t){case 5126:return gb;case 35664:return xb;case 35665:return vb;case 35666:return _b;case 35674:return yb;case 35675:return Sb;case 35676:return Eb;case 5124:case 35670:return Mb;case 35667:case 35671:return wb;case 35668:case 35672:return bb;case 35669:case 35673:return Tb;case 5125:return Cb;case 36294:return Ab;case 36295:return Rb;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Pb;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Db;case 36289:case 36303:case 36311:case 36292:return Ib}}class kb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=mb(n.type)}}class Ob{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ub(n.type)}}class Fb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const hu=/(\w+)(\])?(\[|\.)?/g;function pm(t,e){t.seq.push(e),t.map[e.id]=e}function Bb(t,e,n){const i=t.name,r=i.length;for(hu.lastIndex=0;;){const s=hu.exec(i),a=hu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){pm(n,u===void 0?new kb(o,t,e):new Ob(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Fb(o),pm(n,p)),n=p}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Bb(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const zb=37297;let Hb=0;function jb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Vb(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Rl&&n===Al?i="LinearDisplayP3ToLinearSRGB":e===Al&&n===Rl&&(i="LinearSRGBToLinearDisplayP3"),t){case nr:case nc:return[i,"LinearTransferOETF"];case Yn:case tf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function gm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+jb(t.getShaderSource(e),a)}else return r}function Gb(t,e){const n=Vb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Wb(t,e){let n;switch(e){case oS:n="Linear";break;case lS:n="Reinhard";break;case cS:n="Cineon";break;case uS:n="ACESFilmic";break;case hS:n="AgX";break;case fS:n="Neutral";break;case dS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Io=new j;function Xb(){it.getLuminanceCoefficients(Io);const t=Io.x.toFixed(4),e=Io.y.toFixed(4),n=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function qb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $b(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function oa(t){return t!==""}function xm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Kb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(t){return t.replace(Kb,Jb)}const Zb=new Map;function Jb(t,e){let n=Ve[e];if(n===void 0){const i=Zb.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(n)}const Qb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(Qb,eT)}function eT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ym(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function tT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===jx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function nT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ns:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function rT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Gx:e="ENVMAP_BLENDING_MULTIPLY";break;case sS:e="ENVMAP_BLENDING_MIX";break;case aS:e="ENVMAP_BLENDING_ADD";break}return e}function sT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=tT(n),u=nT(n),h=iT(n),p=rT(n),f=sT(n),m=Yb(n),x=qb(s),y=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(oa).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(oa).join(`
`),d.length>0&&(d+=`
`)):(g=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),d=[ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==qi?Wb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Gb("linearToOutputTexel",n.outputColorSpace),Xb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=Zd(a),a=xm(a,n),a=vm(a,n),o=Zd(o),o=xm(o,n),o=vm(o,n),a=_m(a),o=_m(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Op?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Op?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+g+a,E=v+d+o,P=mm(r,r.VERTEX_SHADER,_),A=mm(r,r.FRAGMENT_SHADER,E);r.attachShader(y,P),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(w){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(A).trim();let J=!0,V=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,P,A);else{const ne=gm(r,P,"vertex"),I=gm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+ne+`
`+I)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||$==="")&&(V=!1);V&&(w.diagnostics={runnable:J,programLog:k,vertexShader:{log:G,prefix:g},fragmentShader:{log:$,prefix:d}})}r.deleteShader(P),r.deleteShader(A),L=new tl(r,y),H=$b(r,y)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let H;this.getAttributes=function(){return H===void 0&&T(this),H};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,zb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=A,this}let oT=0;class lT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cT(e),n.set(e,i)),i}}class cT{constructor(e){this.id=oT++,this.code=e,this.usedTimes=0}}function uT(t,e,n,i,r,s,a){const o=new lv,l=new lT,u=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,m=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return u.add(S),S===0?"uv":`uv${S}`}function d(S,w,k,G,$){const J=G.fog,V=$.geometry,ne=S.isMeshStandardMaterial?G.environment:null,I=(S.isMeshStandardMaterial?n:e).get(S.envMap||ne),te=I&&I.mapping===tc?I.image.height:null,N=y[S.type];S.precision!==null&&(x=r.getMaxPrecision(S.precision),x!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",x,"instead."));const C=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,re=C!==void 0?C.length:0;let Q=0;V.morphAttributes.position!==void 0&&(Q=1),V.morphAttributes.normal!==void 0&&(Q=2),V.morphAttributes.color!==void 0&&(Q=3);let O,K,B,W;if(N){const Jt=qn[N];O=Jt.vertexShader,K=Jt.fragmentShader}else O=S.vertexShader,K=S.fragmentShader,l.update(S),B=l.getVertexShaderID(S),W=l.getFragmentShaderID(S);const oe=t.getRenderTarget(),he=$.isInstancedMesh===!0,be=$.isBatchedMesh===!0,ge=!!S.map,Te=!!S.matcap,D=!!I,Ue=!!S.aoMap,ke=!!S.lightMap,ze=!!S.bumpMap,Ae=!!S.normalMap,Ye=!!S.displacementMap,Pe=!!S.emissiveMap,R=!!S.metalnessMap,M=!!S.roughnessMap,X=S.anisotropy>0,se=S.clearcoat>0,ie=S.dispersion>0,ee=S.iridescence>0,Me=S.sheen>0,fe=S.transmission>0,_e=X&&!!S.anisotropyMap,He=se&&!!S.clearcoatMap,le=se&&!!S.clearcoatNormalMap,xe=se&&!!S.clearcoatRoughnessMap,De=ee&&!!S.iridescenceMap,Ie=ee&&!!S.iridescenceThicknessMap,ye=Me&&!!S.sheenColorMap,qe=Me&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,et=!!S.specularColorMap,U=!!S.specularIntensityMap,pe=fe&&!!S.transmissionMap,Z=fe&&!!S.thicknessMap,ae=!!S.gradientMap,ve=!!S.alphaMap,Se=S.alphaTest>0,Ke=!!S.alphaHash,lt=!!S.extensions;let It=qi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(It=t.toneMapping);const Ze={shaderID:N,shaderType:S.type,shaderName:S.name,vertexShader:O,fragmentShader:K,defines:S.defines,customVertexShaderID:B,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:x,batching:be,batchingColor:be&&$._colorsTexture!==null,instancing:he,instancingColor:he&&$.instanceColor!==null,instancingMorph:he&&$.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:nr,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:Te,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:te,aoMap:Ue,lightMap:ke,bumpMap:ze,normalMap:Ae,displacementMap:m&&Ye,emissiveMap:Pe,normalMapObjectSpace:Ae&&S.normalMapType===xS,normalMapTangentSpace:Ae&&S.normalMapType===nv,metalnessMap:R,roughnessMap:M,anisotropy:X,anisotropyMap:_e,clearcoat:se,clearcoatMap:He,clearcoatNormalMap:le,clearcoatRoughnessMap:xe,dispersion:ie,iridescence:ee,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:Me,sheenColorMap:ye,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:et,specularIntensityMap:U,transmission:fe,transmissionMap:pe,thicknessMap:Z,gradientMap:ae,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:Ke,combine:S.combine,mapUv:ge&&g(S.map.channel),aoMapUv:Ue&&g(S.aoMap.channel),lightMapUv:ke&&g(S.lightMap.channel),bumpMapUv:ze&&g(S.bumpMap.channel),normalMapUv:Ae&&g(S.normalMap.channel),displacementMapUv:Ye&&g(S.displacementMap.channel),emissiveMapUv:Pe&&g(S.emissiveMap.channel),metalnessMapUv:R&&g(S.metalnessMap.channel),roughnessMapUv:M&&g(S.roughnessMap.channel),anisotropyMapUv:_e&&g(S.anisotropyMap.channel),clearcoatMapUv:He&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&g(S.sheenRoughnessMap.channel),specularMapUv:Oe&&g(S.specularMap.channel),specularColorMapUv:et&&g(S.specularColorMap.channel),specularIntensityMapUv:U&&g(S.specularIntensityMap.channel),transmissionMapUv:pe&&g(S.transmissionMap.channel),thicknessMapUv:Z&&g(S.thicknessMap.channel),alphaMapUv:ve&&g(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ae||X),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!V.attributes.uv&&(ge||ve),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Q,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:It,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Kn,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:lt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&S.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ze.vertexUv1s=u.has(1),Ze.vertexUv2s=u.has(2),Ze.vertexUv3s=u.has(3),u.clear(),Ze}function v(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)w.push(k),w.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(w,S),E(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function E(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),S.push(o.mask)}function P(S){const w=y[S.type];let k;if(w){const G=qn[w];k=YS.clone(G.uniforms)}else k=S.uniforms;return k}function A(S,w){let k;for(let G=0,$=h.length;G<$;G++){const J=h[G];if(J.cacheKey===w){k=J,++k.usedTimes;break}}return k===void 0&&(k=new aT(t,w,S,s),h.push(k)),k}function T(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function L(S){l.remove(S)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:H}}function dT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p,f,m,x,y,g){let d=t[e];return d===void 0?(d={id:p.id,object:p,geometry:f,material:m,groupOrder:x,renderOrder:p.renderOrder,z:y,group:g},t[e]=d):(d.id=p.id,d.object=p,d.geometry=f,d.material=m,d.groupOrder=x,d.renderOrder=p.renderOrder,d.z=y,d.group=g),e++,d}function o(p,f,m,x,y,g){const d=a(p,f,m,x,y,g);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(p,f,m,x,y,g){const d=a(p,f,m,x,y,g);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(p,f){n.length>1&&n.sort(p||hT),i.length>1&&i.sort(f||Sm),r.length>1&&r.sort(f||Sm)}function h(){for(let p=e,f=t.length;p<f;p++){const m=t[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function fT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Em,t.set(i,[a])):r>=s.length?(a=new Em,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function pT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Xe};break;case"SpotLight":n={position:new j,direction:new j,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function mT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gT=0;function xT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vT(t){const e=new pT,n=mT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new mt,a=new mt;function o(u){let h=0,p=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,x=0,y=0,g=0,d=0,v=0,_=0,E=0,P=0,A=0,T=0;u.sort(xT);for(let H=0,S=u.length;H<S;H++){const w=u[H],k=w.color,G=w.intensity,$=w.distance,J=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=k.r*G,p+=k.g*G,f+=k.b*G;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],G);T++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ne=w.shadow,I=n.get(w);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.directionalShadow[m]=I,i.directionalShadowMap[m]=J,i.directionalShadowMatrix[m]=w.shadow.matrix,v++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(k).multiplyScalar(G),V.distance=$,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[y]=V;const ne=w.shadow;if(w.map&&(i.spotLightMap[P]=w.map,P++,ne.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[y]=ne.matrix,w.castShadow){const I=n.get(w);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,i.spotShadow[y]=I,i.spotShadowMap[y]=J,E++}y++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(k).multiplyScalar(G),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const ne=w.shadow,I=n.get(w);I.shadowIntensity=ne.intensity,I.shadowBias=ne.bias,I.shadowNormalBias=ne.normalBias,I.shadowRadius=ne.radius,I.shadowMapSize=ne.mapSize,I.shadowCameraNear=ne.camera.near,I.shadowCameraFar=ne.camera.far,i.pointShadow[x]=I,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=w.shadow.matrix,_++}i.point[x]=V,x++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(G),V.groundColor.copy(w.groundColor).multiplyScalar(G),i.hemi[d]=V,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==x||L.spotLength!==y||L.rectAreaLength!==g||L.hemiLength!==d||L.numDirectionalShadows!==v||L.numPointShadows!==_||L.numSpotShadows!==E||L.numSpotMaps!==P||L.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=m,L.pointLength=x,L.spotLength=y,L.rectAreaLength=g,L.hemiLength=d,L.numDirectionalShadows=v,L.numPointShadows=_,L.numSpotShadows=E,L.numSpotMaps=P,L.numLightProbes=T,i.version=gT++)}function l(u,h){let p=0,f=0,m=0,x=0,y=0;const g=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const _=u[d];if(_.isDirectionalLight){const E=i.directional[p];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),p++}else if(_.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function Mm(t){const e=new vT(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _T(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Mm(t),e.set(r,[o])):s>=a.length?(o=new Mm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class yT extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ST extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ET=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MT=`uniform sampler2D shadow_pass;
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
}`;function wT(t,e,n){let i=new nf;const r=new Je,s=new Je,a=new ot,o=new yT({depthPacking:gS}),l=new ST,u={},h=n.maxTextureSize,p={[Zi]:on,[on]:Zi,[Kn]:Kn},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:ET,fragmentShader:MT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new _n;x.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(x,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jx;let d=this.type;this.render=function(A,T,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const H=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Yi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=d!==oi&&this.type===oi,$=d===oi&&this.type!==oi;for(let J=0,V=A.length;J<V;J++){const ne=A[J],I=ne.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const te=I.getFrameExtents();if(r.multiply(te),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,I.mapSize.y=s.y)),I.map===null||G===!0||$===!0){const C=this.type!==oi?{minFilter:bn,magFilter:bn}:{};I.map!==null&&I.map.dispose(),I.map=new Lr(r.x,r.y,C),I.map.texture.name=ne.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const N=I.getViewportCount();for(let C=0;C<N;C++){const re=I.getViewport(C);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),k.viewport(a),I.updateMatrices(ne,C),i=I.getFrustum(),E(T,L,I.camera,ne,this.type)}I.isPointLightShadow!==!0&&this.type===oi&&v(I,L),I.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(H,S,w)};function v(A,T){const L=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Lr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,L,f,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,L,m,y,null)}function _(A,T,L,H){let S=null;const w=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)S=w;else if(S=L.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=S.uuid,G=T.uuid;let $=u[k];$===void 0&&($={},u[k]=$);let J=$[G];J===void 0&&(J=S.clone(),$[G]=J,T.addEventListener("dispose",P)),S=J}if(S.visible=T.visible,S.wireframe=T.wireframe,H===oi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:p[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=t.properties.get(S);k.light=L}return S}function E(A,T,L,H,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const G=e.update(A),$=A.material;if(Array.isArray($)){const J=G.groups;for(let V=0,ne=J.length;V<ne;V++){const I=J[V],te=$[I.materialIndex];if(te&&te.visible){const N=_(A,te,H,S);A.onBeforeShadow(t,A,T,L,G,N,I),t.renderBufferDirect(L,null,G,N,A,I),A.onAfterShadow(t,A,T,L,G,N,I)}}}else if($.visible){const J=_(A,$,H,S);A.onBeforeShadow(t,A,T,L,G,J,null),t.renderBufferDirect(L,null,G,J,A,null),A.onAfterShadow(t,A,T,L,G,J,null)}}const k=A.children;for(let G=0,$=k.length;G<$;G++)E(k[G],T,L,H,S)}function P(A){A.target.removeEventListener("dispose",P);for(const L in u){const H=u[L],S=A.target.uuid;S in H&&(H[S].dispose(),delete H[S])}}}const bT={[pd]:md,[gd]:_d,[xd]:yd,[As]:vd,[md]:pd,[_d]:gd,[yd]:xd,[vd]:As};function TT(t){function e(){let U=!1;const pe=new ot;let Z=null;const ae=new ot(0,0,0,0);return{setMask:function(ve){Z!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Se,Ke,lt,It){It===!0&&(ve*=lt,Se*=lt,Ke*=lt),pe.set(ve,Se,Ke,lt),ae.equals(pe)===!1&&(t.clearColor(ve,Se,Ke,lt),ae.copy(pe))},reset:function(){U=!1,Z=null,ae.set(-1,0,0,0)}}}function n(){let U=!1,pe=!1,Z=null,ae=null,ve=null;return{setReversed:function(Se){pe=Se},setTest:function(Se){Se?B(t.DEPTH_TEST):W(t.DEPTH_TEST)},setMask:function(Se){Z!==Se&&!U&&(t.depthMask(Se),Z=Se)},setFunc:function(Se){if(pe&&(Se=bT[Se]),ae!==Se){switch(Se){case pd:t.depthFunc(t.NEVER);break;case md:t.depthFunc(t.ALWAYS);break;case gd:t.depthFunc(t.LESS);break;case As:t.depthFunc(t.LEQUAL);break;case xd:t.depthFunc(t.EQUAL);break;case vd:t.depthFunc(t.GEQUAL);break;case _d:t.depthFunc(t.GREATER);break;case yd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Se}},setLocked:function(Se){U=Se},setClear:function(Se){ve!==Se&&(t.clearDepth(Se),ve=Se)},reset:function(){U=!1,Z=null,ae=null,ve=null}}}function i(){let U=!1,pe=null,Z=null,ae=null,ve=null,Se=null,Ke=null,lt=null,It=null;return{setTest:function(Ze){U||(Ze?B(t.STENCIL_TEST):W(t.STENCIL_TEST))},setMask:function(Ze){pe!==Ze&&!U&&(t.stencilMask(Ze),pe=Ze)},setFunc:function(Ze,Jt,ti){(Z!==Ze||ae!==Jt||ve!==ti)&&(t.stencilFunc(Ze,Jt,ti),Z=Ze,ae=Jt,ve=ti)},setOp:function(Ze,Jt,ti){(Se!==Ze||Ke!==Jt||lt!==ti)&&(t.stencilOp(Ze,Jt,ti),Se=Ze,Ke=Jt,lt=ti)},setLocked:function(Ze){U=Ze},setClear:function(Ze){It!==Ze&&(t.clearStencil(Ze),It=Ze)},reset:function(){U=!1,pe=null,Z=null,ae=null,ve=null,Se=null,Ke=null,lt=null,It=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let u={},h={},p=new WeakMap,f=[],m=null,x=!1,y=null,g=null,d=null,v=null,_=null,E=null,P=null,A=new Xe(0,0,0),T=0,L=!1,H=null,S=null,w=null,k=null,G=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,V=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ne)[1]),J=V>=1):ne.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),J=V>=2);let I=null,te={};const N=t.getParameter(t.SCISSOR_BOX),C=t.getParameter(t.VIEWPORT),re=new ot().fromArray(N),Q=new ot().fromArray(C);function O(U,pe,Z,ae){const ve=new Uint8Array(4),Se=t.createTexture();t.bindTexture(U,Se),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<Z;Ke++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(pe+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Se}const K={};K[t.TEXTURE_2D]=O(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=O(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=O(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=O(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(t.DEPTH_TEST),s.setFunc(As),ke(!1),ze(Pp),B(t.CULL_FACE),D(Yi);function B(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function W(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function oe(U,pe){return h[U]!==pe?(t.bindFramebuffer(U,pe),h[U]=pe,U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=pe),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function he(U,pe){let Z=f,ae=!1;if(U){Z=p.get(pe),Z===void 0&&(Z=[],p.set(pe,Z));const ve=U.textures;if(Z.length!==ve.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,Ke=ve.length;Se<Ke;Se++)Z[Se]=t.COLOR_ATTACHMENT0+Se;Z.length=ve.length,ae=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,ae=!0);ae&&t.drawBuffers(Z)}function be(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const ge={[xr]:t.FUNC_ADD,[j1]:t.FUNC_SUBTRACT,[V1]:t.FUNC_REVERSE_SUBTRACT};ge[G1]=t.MIN,ge[W1]=t.MAX;const Te={[X1]:t.ZERO,[Y1]:t.ONE,[q1]:t.SRC_COLOR,[hd]:t.SRC_ALPHA,[eS]:t.SRC_ALPHA_SATURATE,[J1]:t.DST_COLOR,[K1]:t.DST_ALPHA,[$1]:t.ONE_MINUS_SRC_COLOR,[fd]:t.ONE_MINUS_SRC_ALPHA,[Q1]:t.ONE_MINUS_DST_COLOR,[Z1]:t.ONE_MINUS_DST_ALPHA,[tS]:t.CONSTANT_COLOR,[nS]:t.ONE_MINUS_CONSTANT_COLOR,[iS]:t.CONSTANT_ALPHA,[rS]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,pe,Z,ae,ve,Se,Ke,lt,It,Ze){if(U===Yi){x===!0&&(W(t.BLEND),x=!1);return}if(x===!1&&(B(t.BLEND),x=!0),U!==H1){if(U!==y||Ze!==L){if((g!==xr||_!==xr)&&(t.blendEquation(t.FUNC_ADD),g=xr,_=xr),Ze)switch(U){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.ONE,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ip:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,v=null,E=null,P=null,A.set(0,0,0),T=0,y=U,L=Ze}return}ve=ve||pe,Se=Se||Z,Ke=Ke||ae,(pe!==g||ve!==_)&&(t.blendEquationSeparate(ge[pe],ge[ve]),g=pe,_=ve),(Z!==d||ae!==v||Se!==E||Ke!==P)&&(t.blendFuncSeparate(Te[Z],Te[ae],Te[Se],Te[Ke]),d=Z,v=ae,E=Se,P=Ke),(lt.equals(A)===!1||It!==T)&&(t.blendColor(lt.r,lt.g,lt.b,It),A.copy(lt),T=It),y=U,L=!1}function Ue(U,pe){U.side===Kn?W(t.CULL_FACE):B(t.CULL_FACE);let Z=U.side===on;pe&&(Z=!Z),ke(Z),U.blending===xs&&U.transparent===!1?D(Yi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const ae=U.stencilWrite;a.setTest(ae),ae&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ye(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):W(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){H!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),H=U)}function ze(U){U!==B1?(B(t.CULL_FACE),U!==S&&(U===Pp?t.cullFace(t.BACK):U===z1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):W(t.CULL_FACE),S=U}function Ae(U){U!==w&&(J&&t.lineWidth(U),w=U)}function Ye(U,pe,Z){U?(B(t.POLYGON_OFFSET_FILL),(k!==pe||G!==Z)&&(t.polygonOffset(pe,Z),k=pe,G=Z)):W(t.POLYGON_OFFSET_FILL)}function Pe(U){U?B(t.SCISSOR_TEST):W(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+$-1),I!==U&&(t.activeTexture(U),I=U)}function M(U,pe,Z){Z===void 0&&(I===null?Z=t.TEXTURE0+$-1:Z=I);let ae=te[Z];ae===void 0&&(ae={type:void 0,texture:void 0},te[Z]=ae),(ae.type!==U||ae.texture!==pe)&&(I!==Z&&(t.activeTexture(Z),I=Z),t.bindTexture(U,pe||K[U]),ae.type=U,ae.texture=pe)}function X(){const U=te[I];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){re.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function ye(U){Q.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function qe(U,pe){let Z=l.get(pe);Z===void 0&&(Z=new WeakMap,l.set(pe,Z));let ae=Z.get(U);ae===void 0&&(ae=t.getUniformBlockIndex(pe,U.name),Z.set(U,ae))}function Oe(U,pe){const ae=l.get(pe).get(U);o.get(pe)!==ae&&(t.uniformBlockBinding(pe,ae,U.__bindingPointIndex),o.set(pe,ae))}function et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,te={},h={},p=new WeakMap,f=[],m=null,x=!1,y=null,g=null,d=null,v=null,_=null,E=null,P=null,A=new Xe(0,0,0),T=0,L=!1,H=null,S=null,w=null,k=null,G=null,re.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:B,disable:W,bindFramebuffer:oe,drawBuffers:he,useProgram:be,setBlending:D,setMaterial:Ue,setFlipSided:ke,setCullFace:ze,setLineWidth:Ae,setPolygonOffset:Ye,setScissorTest:Pe,activeTexture:R,bindTexture:M,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:ie,texImage2D:xe,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:Oe,texStorage2D:He,texStorage3D:le,texSubImage2D:ee,texSubImage3D:Me,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Ie,viewport:ye,reset:et}}function wm(t,e,n,i){const r=CT(i);switch(n){case $x:return t*e;case Zx:return t*e;case Jx:return t*e*2;case Qx:return t*e/r.components*r.byteLength;case Jh:return t*e/r.components*r.byteLength;case ev:return t*e*2/r.components*r.byteLength;case Qh:return t*e*2/r.components*r.byteLength;case Kx:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case ef:return t*e*4/r.components*r.byteLength;case $o:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Td:case Ad:return Math.max(t,16)*Math.max(e,8)/4;case bd:case Cd:return Math.max(t,8)*Math.max(e,8)/2;case Rd:case Nd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qo:case Xd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case tv:case qd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $d:case Kd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CT(t){switch(t){case yi:case Xx:return{byteLength:1,components:1};case ka:case Yx:case Va:return{byteLength:2,components:1};case Kh:case Zh:return{byteLength:2,components:4};case Pr:case $h:case hi:return{byteLength:4,components:1};case qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function AT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,h=new WeakMap;let p;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return m?new OffscreenCanvas(R,M):Ll("canvas")}function y(R,M,X){let se=1;const ie=Pe(R);if((ie.width>X||ie.height>X)&&(se=X/Math.max(ie.width,ie.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(se*ie.width),Me=Math.floor(se*ie.height);p===void 0&&(p=x(ee,Me));const fe=M?x(ee,Me):p;return fe.width=ee,fe.height=Me,fe.getContext("2d").drawImage(R,0,0,ee,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ee+"x"+Me+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==bn&&R.minFilter!==Fn}function d(R){t.generateMipmap(R)}function v(R,M,X,se,ie=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=M;if(M===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),M===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),X===t.UNSIGNED_INT&&(ee=t.RGB32UI),X===t.BYTE&&(ee=t.RGB8I),X===t.SHORT&&(ee=t.RGB16I),X===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),X===t.UNSIGNED_INT&&(ee=t.RGBA32UI),X===t.BYTE&&(ee=t.RGBA8I),X===t.SHORT&&(ee=t.RGBA16I),X===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Me=ie?Cl:it.getTransfer(se);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=Me===ht?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(R,M){let X;return R?M===null||M===Pr||M===Ps?X=t.DEPTH24_STENCIL8:M===hi?X=t.DEPTH32F_STENCIL8:M===ka&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pr||M===Ps?X=t.DEPTH_COMPONENT24:M===hi?X=t.DEPTH_COMPONENT32F:M===ka&&(X=t.DEPTH_COMPONENT16),X}function E(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==bn&&R.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){const M=R.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&h.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),H(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const X=R.source,se=f.get(X);if(se){const ie=se[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&L(R),Object.keys(se).length===0&&f.delete(X)}i.remove(R)}function L(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const X=R.source,se=f.get(X);delete se[M.__cacheKey],a.memory.textures--}function H(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let ie=0;ie<M.__webglFramebuffer[se].length;ie++)t.deleteFramebuffer(M.__webglFramebuffer[se][ie]);else t.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)t.deleteFramebuffer(M.__webglFramebuffer[se]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=R.textures;for(let se=0,ie=X.length;se<ie;se++){const ee=i.get(X[se]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(X[se])}i.remove(R)}let S=0;function w(){S=0}function k(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function G(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const X=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(X,R,M);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function J(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Q(X,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function V(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){Q(X,R,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function ne(R,M){const X=i.get(R);if(R.version>0&&X.__version!==R.version){O(X,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const I={[Md]:t.REPEAT,[Er]:t.CLAMP_TO_EDGE,[wd]:t.MIRRORED_REPEAT},te={[bn]:t.NEAREST,[pS]:t.NEAREST_MIPMAP_NEAREST,[po]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[Oc]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},N={[vS]:t.NEVER,[wS]:t.ALWAYS,[_S]:t.LESS,[iv]:t.LEQUAL,[yS]:t.EQUAL,[MS]:t.GEQUAL,[SS]:t.GREATER,[ES]:t.NOTEQUAL};function C(R,M){if(M.type===hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Oc||M.magFilter===po||M.magFilter===Mr||M.minFilter===Fn||M.minFilter===Oc||M.minFilter===po||M.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,N[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==po&&M.minFilter!==Mr||M.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function re(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",P));const se=M.source;let ie=f.get(se);ie===void 0&&(ie={},f.set(se,ie));const ee=G(M);if(ee!==R.__cacheKey){ie[ee]===void 0&&(ie[ee]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ie[ee].usedTimes++;const Me=ie[R.__cacheKey];Me!==void 0&&(ie[R.__cacheKey].usedTimes--,Me.usedTimes===0&&L(M)),R.__cacheKey=ee,R.__webglTexture=ie[ee].texture}return X}function Q(R,M,X){let se=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(se=t.TEXTURE_3D);const ie=re(R,M),ee=M.source;n.bindTexture(se,R.__webglTexture,t.TEXTURE0+X);const Me=i.get(ee);if(ee.version!==Me.__version||ie===!0){n.activeTexture(t.TEXTURE0+X);const fe=it.getPrimaries(it.workingColorSpace),_e=M.colorSpace===Ui?null:it.getPrimaries(M.colorSpace),He=M.colorSpace===Ui||fe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let le=y(M.image,!1,r.maxTextureSize);le=Ye(M,le);const xe=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let Ie=v(M.internalFormat,xe,De,M.colorSpace,M.isVideoTexture);C(se,M);let ye;const qe=M.mipmaps,Oe=M.isVideoTexture!==!0,et=Me.__version===void 0||ie===!0,U=ee.dataReady,pe=E(M,le);if(M.isDepthTexture)Ie=_(M.format===Ls,M.type),et&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Ie,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,xe,De,null));else if(M.isDataTexture)if(qe.length>0){Oe&&et&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,qe[0].width,qe[0].height);for(let Z=0,ae=qe.length;Z<ae;Z++)ye=qe[Z],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,xe,De,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ye.width,ye.height,0,xe,De,ye.data);M.generateMipmaps=!1}else Oe?(et&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,le.width,le.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,xe,De,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,xe,De,le.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ie,qe[0].width,qe[0].height,le.depth);for(let Z=0,ae=qe.length;Z<ae;Z++)if(ye=qe[Z],M.format!==zn)if(xe!==null)if(Oe){if(U)if(M.layerUpdates.size>0){const ve=wm(ye.width,ye.height,M.format,M.type);for(const Se of M.layerUpdates){const Ke=ye.data.subarray(Se*ve/ye.data.BYTES_PER_ELEMENT,(Se+1)*ve/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Se,ye.width,ye.height,1,xe,Ke,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,le.depth,xe,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,ye.width,ye.height,le.depth,xe,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ie,ye.width,ye.height,le.depth,0,xe,De,ye.data)}else{Oe&&et&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,qe[0].width,qe[0].height);for(let Z=0,ae=qe.length;Z<ae;Z++)ye=qe[Z],M.format!==zn?xe!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,ye.width,ye.height,xe,De,ye.data):n.texImage2D(t.TEXTURE_2D,Z,Ie,ye.width,ye.height,0,xe,De,ye.data)}else if(M.isDataArrayTexture)if(Oe){if(et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ie,le.width,le.height,le.depth),U)if(M.layerUpdates.size>0){const Z=wm(le.width,le.height,M.format,M.type);for(const ae of M.layerUpdates){const ve=le.data.subarray(ae*Z/le.data.BYTES_PER_ELEMENT,(ae+1)*Z/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,le.width,le.height,1,xe,De,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,le.width,le.height,le.depth,0,xe,De,le.data);else if(M.isData3DTexture)Oe?(et&&n.texStorage3D(t.TEXTURE_3D,pe,Ie,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,De,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,le.width,le.height,le.depth,0,xe,De,le.data);else if(M.isFramebufferTexture){if(et)if(Oe)n.texStorage2D(t.TEXTURE_2D,pe,Ie,le.width,le.height);else{let Z=le.width,ae=le.height;for(let ve=0;ve<pe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ie,Z,ae,0,xe,De,null),Z>>=1,ae>>=1}}else if(qe.length>0){if(Oe&&et){const Z=Pe(qe[0]);n.texStorage2D(t.TEXTURE_2D,pe,Ie,Z.width,Z.height)}for(let Z=0,ae=qe.length;Z<ae;Z++)ye=qe[Z],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,xe,De,ye):n.texImage2D(t.TEXTURE_2D,Z,Ie,xe,De,ye);M.generateMipmaps=!1}else if(Oe){if(et){const Z=Pe(le);n.texStorage2D(t.TEXTURE_2D,pe,Ie,Z.width,Z.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,le)}else n.texImage2D(t.TEXTURE_2D,0,Ie,xe,De,le);g(M)&&d(se),Me.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function O(R,M,X){if(M.image.length!==6)return;const se=re(R,M),ie=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);const ee=i.get(ie);if(ie.version!==ee.__version||se===!0){n.activeTexture(t.TEXTURE0+X);const Me=it.getPrimaries(it.workingColorSpace),fe=M.colorSpace===Ui?null:it.getPrimaries(M.colorSpace),_e=M.colorSpace===Ui||Me===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=M.isCompressedTexture||M.image[0].isCompressedTexture,le=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!He&&!le?xe[ae]=y(M.image[ae],!0,r.maxCubemapSize):xe[ae]=le?M.image[ae].image:M.image[ae],xe[ae]=Ye(M,xe[ae]);const De=xe[0],Ie=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),qe=v(M.internalFormat,Ie,ye,M.colorSpace),Oe=M.isVideoTexture!==!0,et=ee.__version===void 0||se===!0,U=ie.dataReady;let pe=E(M,De);C(t.TEXTURE_CUBE_MAP,M);let Z;if(He){Oe&&et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,qe,De.width,De.height);for(let ae=0;ae<6;ae++){Z=xe[ae].mipmaps;for(let ve=0;ve<Z.length;ve++){const Se=Z[ve];M.format!==zn?Ie!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Se.width,Se.height,Ie,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,qe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Se.width,Se.height,Ie,ye,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,qe,Se.width,Se.height,0,Ie,ye,Se.data)}}}else{if(Z=M.mipmaps,Oe&&et){Z.length>0&&pe++;const ae=Pe(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,qe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(le){Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Ie,ye,xe[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,xe[ae].width,xe[ae].height,0,Ie,ye,xe[ae].data);for(let ve=0;ve<Z.length;ve++){const Ke=Z[ve].image[ae].image;Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,Ke.width,Ke.height,Ie,ye,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,qe,Ke.width,Ke.height,0,Ie,ye,Ke.data)}}else{Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,ye,xe[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,qe,Ie,ye,xe[ae]);for(let ve=0;ve<Z.length;ve++){const Se=Z[ve];Oe?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,Ie,ye,Se.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,qe,Ie,ye,Se.image[ae])}}}g(M)&&d(t.TEXTURE_CUBE_MAP),ee.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function K(R,M,X,se,ie,ee){const Me=s.convert(X.format,X.colorSpace),fe=s.convert(X.type),_e=v(X.internalFormat,Me,fe,X.colorSpace);if(!i.get(M).__hasExternalTextures){const le=Math.max(1,M.width>>ee),xe=Math.max(1,M.height>>ee);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ee,_e,le,xe,M.depth,0,Me,fe,null):n.texImage2D(ie,ee,_e,le,xe,0,Me,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ie,i.get(X).__webglTexture,0,ke(M)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ie,i.get(X).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function B(R,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const se=M.depthTexture,ie=se&&se.isDepthTexture?se.type:null,ee=_(M.stencilBuffer,ie),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=ke(M);ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ee,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const se=M.textures;for(let ie=0;ie<se.length;ie++){const ee=se[ie],Me=s.convert(ee.format,ee.colorSpace),fe=s.convert(ee.type),_e=v(ee.internalFormat,Me,fe,ee.colorSpace),He=ke(M);X&&ze(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,_e,M.width,M.height):ze(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,_e,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,_e,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function W(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const se=i.get(M.depthTexture).__webglTexture,ie=ke(M);if(M.depthTexture.format===vs)ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(M.depthTexture.format===Ls)ze(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function oe(R){const M=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const se=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),se){const ie=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,se.removeEventListener("dispose",ie)};se.addEventListener("dispose",ie),M.__depthDisposeCallback=ie}M.__boundDepthTexture=se}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");W(M.__webglFramebuffer,R)}else if(X){M.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[se]),M.__webglDepthbuffer[se]===void 0)M.__webglDepthbuffer[se]=t.createRenderbuffer(),B(M.__webglDepthbuffer[se],R,!1);else{const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[se];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),B(M.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,M,X){const se=i.get(R);M!==void 0&&K(se.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&oe(R)}function be(R){const M=R.texture,X=i.get(R),se=i.get(M);R.addEventListener("dispose",A);const ie=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=M.version,a.memory.textures++),ee){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let _e=0;_e<M.mipmaps.length;_e++)X.__webglFramebuffer[fe][_e]=t.createFramebuffer()}else X.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)X.__webglFramebuffer[fe]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Me)for(let fe=0,_e=ie.length;fe<_e;fe++){const He=i.get(ie[fe]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ze(R)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];X.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[fe]);const He=s.convert(_e.format,_e.colorSpace),le=s.convert(_e.type),xe=v(_e.internalFormat,He,le,_e.colorSpace,R.isXRRenderTarget===!0),De=ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,X.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),B(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),C(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)K(X.__webglFramebuffer[fe][_e],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else K(X.__webglFramebuffer[fe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let fe=0,_e=ie.length;fe<_e;fe++){const He=ie[fe],le=i.get(He);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),C(t.TEXTURE_2D,He),K(X.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(He)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,se.__webglTexture),C(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)K(X.__webglFramebuffer[_e],R,M,t.COLOR_ATTACHMENT0,fe,_e);else K(X.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,fe,0);g(M)&&d(fe),n.unbindTexture()}R.depthBuffer&&oe(R)}function ge(R){const M=R.textures;for(let X=0,se=M.length;X<se;X++){const ie=M[X];if(g(ie)){const ee=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ie).__webglTexture;n.bindTexture(ee,Me),d(ee),n.unbindTexture()}}}const Te=[],D=[];function Ue(R){if(R.samples>0){if(ze(R)===!1){const M=R.textures,X=R.width,se=R.height;let ie=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),fe=M.length>1;if(fe)for(let _e=0;_e<M.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const He=i.get(M[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,X,se,0,0,X,se,ie,t.NEAREST),l===!0&&(Te.length=0,D.length=0,Te.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Te.push(ee),D.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<M.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Me.__webglColorRenderbuffer[_e]);const He=i.get(M[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ke(R){return Math.min(r.maxSamples,R.samples)}function ze(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(R){const M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Ye(R,M){const X=R.colorSpace,se=R.format,ie=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==nr&&X!==Ui&&(it.getTransfer(X)===ht?(se!==zn||ie!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=V,this.setTextureCube=ne,this.rebindTextures=he,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ze}function RT(t,e){function n(i,r=Ui){let s;const a=it.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===Kh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xx)return t.BYTE;if(i===Yx)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===$h)return t.INT;if(i===Pr)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===Va)return t.HALF_FLOAT;if(i===$x)return t.ALPHA;if(i===Kx)return t.RGB;if(i===zn)return t.RGBA;if(i===Zx)return t.LUMINANCE;if(i===Jx)return t.LUMINANCE_ALPHA;if(i===vs)return t.DEPTH_COMPONENT;if(i===Ls)return t.DEPTH_STENCIL;if(i===Qx)return t.RED;if(i===Jh)return t.RED_INTEGER;if(i===ev)return t.RG;if(i===Qh)return t.RG_INTEGER;if(i===ef)return t.RGBA_INTEGER;if(i===$o||i===Ko||i===Zo||i===Jo)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===$o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bd||i===Td||i===Cd||i===Ad)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rd||i===Nd||i===Pd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rd||i===Nd)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ld||i===Dd||i===Id||i===Ud||i===kd||i===Od||i===Fd||i===Bd||i===zd||i===Hd||i===jd||i===Vd||i===Gd||i===Wd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ld)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Id)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ud)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Od)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Xd||i===Yd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qo)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tv||i===qd||i===$d||i===Kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$d)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ps?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class NT extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class fu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(u,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const LT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DT=`
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

}`;class IT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:LT,fragmentShader:DT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new Ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UT extends Fs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,p=null,f=null,m=null,x=null;const y=new IT,g=n.getContextAttributes();let d=null,v=null;const _=[],E=[],P=new Je;let A=null;const T=new tn;T.layers.enable(1),T.viewport=new ot;const L=new tn;L.layers.enable(2),L.viewport=new ot;const H=[T,L],S=new NT;S.layers.enable(1),S.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=_[O];return K===void 0&&(K=new fu,_[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=_[O];return K===void 0&&(K=new fu,_[O]=K),K.getGripSpace()},this.getHand=function(O){let K=_[O];return K===void 0&&(K=new fu,_[O]=K),K.getHandSpace()};function G(O){const K=E.indexOf(O.inputSource);if(K===-1)return;const B=_[K];B!==void 0&&(B.update(O.inputSource,O.frame,u||a),B.dispatchEvent({type:O.type,data:O.inputSource}))}function $(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",J);for(let O=0;O<_.length;O++){const K=E[O];K!==null&&(E[O]=null,_[O].disconnect(K))}w=null,k=null,y.reset(),e.setRenderTarget(d),m=null,f=null,p=null,r=null,v=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",$),r.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const K={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Lr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,B=null,W=null;g.depth&&(W=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=g.stencil?Ls:vs,B=g.stencil?Ps:Pr);const oe={colorFormat:n.RGBA8,depthFormat:W,scaleFactor:s};p=new XRWebGLBinding(r,n),f=p.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Lr(f.textureWidth,f.textureHeight,{format:zn,type:yi,depthTexture:new xv(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(O){for(let K=0;K<O.removed.length;K++){const B=O.removed[K],W=E.indexOf(B);W>=0&&(E[W]=null,_[W].disconnect(B))}for(let K=0;K<O.added.length;K++){const B=O.added[K];let W=E.indexOf(B);if(W===-1){for(let he=0;he<_.length;he++)if(he>=E.length){E.push(B),W=he;break}else if(E[he]===null){E[he]=B,W=he;break}if(W===-1)break}const oe=_[W];oe&&oe.connect(B)}}const V=new j,ne=new j;function I(O,K,B){V.setFromMatrixPosition(K.matrixWorld),ne.setFromMatrixPosition(B.matrixWorld);const W=V.distanceTo(ne),oe=K.projectionMatrix.elements,he=B.projectionMatrix.elements,be=oe[14]/(oe[10]-1),ge=oe[14]/(oe[10]+1),Te=(oe[9]+1)/oe[5],D=(oe[9]-1)/oe[5],Ue=(oe[8]-1)/oe[0],ke=(he[8]+1)/he[0],ze=be*Ue,Ae=be*ke,Ye=W/(-Ue+ke),Pe=Ye*-Ue;if(K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Pe),O.translateZ(Ye),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),oe[10]===-1)O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const R=be+Ye,M=ge+Ye,X=ze-Pe,se=Ae+(W-Pe),ie=Te*ge/M*R,ee=D*ge/M*R;O.projectionMatrix.makePerspective(X,se,ie,ee,R,M),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function te(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let K=O.near,B=O.far;y.texture!==null&&(y.depthNear>0&&(K=y.depthNear),y.depthFar>0&&(B=y.depthFar)),S.near=L.near=T.near=K,S.far=L.far=T.far=B,(w!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,k=S.far);const W=O.parent,oe=S.cameras;te(S,W);for(let he=0;he<oe.length;he++)te(oe[he],W);oe.length===2?I(S,T,L):S.projectionMatrix.copy(T.projectionMatrix),N(O,S,W)};function N(O,K,B){B===null?O.matrix.copy(K.matrixWorld):(O.matrix.copy(B.matrixWorld),O.matrix.invert(),O.matrix.multiply(K.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(K.projectionMatrix),O.projectionMatrixInverse.copy(K.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Pl*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let C=null;function re(O,K){if(h=K.getViewerPose(u||a),x=K,h!==null){const B=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let W=!1;B.length!==S.cameras.length&&(S.cameras.length=0,W=!0);for(let he=0;he<B.length;he++){const be=B[he];let ge=null;if(m!==null)ge=m.getViewport(be);else{const D=p.getViewSubImage(f,be);ge=D.viewport,he===0&&(e.setRenderTargetTextures(v,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let Te=H[he];Te===void 0&&(Te=new tn,Te.layers.enable(he),Te.viewport=new ot,H[he]=Te),Te.matrix.fromArray(be.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(be.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(ge.x,ge.y,ge.width,ge.height),he===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),W===!0&&S.cameras.push(Te)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const he=p.getDepthInformation(B[0]);he&&he.isValid&&he.texture&&y.init(e,he,r.renderState)}}for(let B=0;B<_.length;B++){const W=E[B],oe=_[B];W!==null&&oe!==void 0&&oe.update(W,K,u||a)}C&&C(O,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Q=new mv;Q.setAnimationLoop(re),this.setAnimationLoop=function(O){C=O},this.dispose=function(){}}}const hr=new ei,kT=new mt;function OT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,hv(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,_,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,E)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,v,_):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===on&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===on&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,E=v.envMapRotation;_&&(g.envMap.value=_,hr.copy(E),hr.x*=-1,hr.y*=-1,hr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.envMapRotation.value.setFromMatrix4(kT.makeRotationFromEuler(hr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=_*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const E=_.program;i.uniformBlockBinding(v,E)}function u(v,_){let E=r[v.id];E===void 0&&(x(v),E=h(v),r[v.id]=E,v.addEventListener("dispose",g));const P=_.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function h(v){const _=p();v.__bindingPointIndex=_;const E=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,E),E}function p(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=r[v.id],E=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=E.length;A<T;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let H=0,S=L.length;H<S;H++){const w=L[H];if(m(w,A,H,P)===!0){const k=w.__offset,G=Array.isArray(w.value)?w.value:[w.value];let $=0;for(let J=0;J<G.length;J++){const V=G[J],ne=y(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,k+$,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,_,E,P){const A=v.value,T=_+"_"+E;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const L=P[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function x(v){const _=v.uniforms;let E=0;const P=16;for(let T=0,L=_.length;T<L;T++){const H=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,w=H.length;S<w;S++){const k=H[S],G=Array.isArray(k.value)?k.value:[k.value];for(let $=0,J=G.length;$<J;$++){const V=G[$],ne=y(V),I=E%P,te=I%ne.boundary,N=I+te;E+=te,N!==0&&P-N<ne.storage&&(E+=P-N),k.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=ne.storage}}}const A=E%P;return A>0&&(E+=P-A),v.__size=E,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class BT{constructor(e={}){const{canvas:n=TS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,g=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=qi,this.toneMappingExposure=1;const _=this;let E=!1,P=0,A=0,T=null,L=-1,H=null;const S=new ot,w=new ot;let k=null;const G=new Xe(0);let $=0,J=n.width,V=n.height,ne=1,I=null,te=null;const N=new ot(0,0,J,V),C=new ot(0,0,J,V);let re=!1;const Q=new nf;let O=!1,K=!1;const B=new mt,W=new mt,oe=new j,he=new ot,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Te(){return T===null?ne:1}let D=i;function Ue(b,F){return n.getContext(b,F)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qh}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Se,!1),D===null){const F="webgl2";if(D=Ue(F,b),D===null)throw Ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ke,ze,Ae,Ye,Pe,R,M,X,se,ie,ee,Me,fe,_e,He,le,xe,De,Ie,ye,qe,Oe,et,U;function pe(){ke=new Gw(D),ke.init(),Oe=new RT(D,ke),ze=new Fw(D,ke,e,Oe),Ae=new TT(D),ze.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Ye=new Yw(D),Pe=new dT,R=new AT(D,ke,Ae,Pe,ze,Oe,Ye),M=new zw(_),X=new Vw(_),se=new eE(D),et=new kw(D,se),ie=new Ww(D,se,Ye,et),ee=new $w(D,ie,se,Ye),Ie=new qw(D,ze,R),le=new Bw(Pe),Me=new uT(_,M,X,ke,ze,et,le),fe=new OT(_,Pe),_e=new fT,He=new _T(ke),De=new Uw(_,M,X,Ae,ee,f,l),xe=new wT(_,ee,ze),U=new FT(D,Ye,ze,Ae),ye=new Ow(D,ke,Ye),qe=new Xw(D,ke,Ye),Ye.programs=Me.programs,_.capabilities=ze,_.extensions=ke,_.properties=Pe,_.renderLists=_e,_.shadowMap=xe,_.state=Ae,_.info=Ye}pe();const Z=new UT(_,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(J,V,!1))},this.getSize=function(b){return b.set(J,V)},this.setSize=function(b,F,Y=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,V=F,n.width=Math.floor(b*ne),n.height=Math.floor(F*ne),Y===!0&&(n.style.width=b+"px",n.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(J*ne,V*ne).floor()},this.setDrawingBufferSize=function(b,F,Y){J=b,V=F,ne=Y,n.width=Math.floor(b*Y),n.height=Math.floor(F*Y),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(N)},this.setViewport=function(b,F,Y,q){b.isVector4?N.set(b.x,b.y,b.z,b.w):N.set(b,F,Y,q),Ae.viewport(S.copy(N).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(C)},this.setScissor=function(b,F,Y,q){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,F,Y,q),Ae.scissor(w.copy(C).multiplyScalar(ne).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){Ae.setScissorTest(re=b)},this.setOpaqueSort=function(b){I=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,F=!0,Y=!0){let q=0;if(b){let z=!1;if(T!==null){const de=T.texture.format;z=de===ef||de===Qh||de===Jh}if(z){const de=T.texture.type,Ee=de===yi||de===Pr||de===ka||de===Ps||de===Kh||de===Zh,Ce=De.getClearColor(),Re=De.getClearAlpha(),Fe=Ce.r,Be=Ce.g,Ne=Ce.b;Ee?(m[0]=Fe,m[1]=Be,m[2]=Ne,m[3]=Re,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=Fe,x[1]=Be,x[2]=Ne,x[3]=Re,D.clearBufferiv(D.COLOR,0,x))}else q|=D.COLOR_BUFFER_BIT}F&&(q|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),_e.dispose(),He.dispose(),Pe.dispose(),M.dispose(),X.dispose(),ee.dispose(),et.dispose(),U.dispose(),Me.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",df),Z.removeEventListener("sessionend",hf),ir.stop()};function ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Ye.autoReset,F=xe.enabled,Y=xe.autoUpdate,q=xe.needsUpdate,z=xe.type;pe(),Ye.autoReset=b,xe.enabled=F,xe.autoUpdate=Y,xe.needsUpdate=q,xe.type=z}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ke(b){const F=b.target;F.removeEventListener("dispose",Ke),lt(F)}function lt(b){It(b),Pe.remove(b)}function It(b){const F=Pe.get(b).programs;F!==void 0&&(F.forEach(function(Y){Me.releaseProgram(Y)}),b.isShaderMaterial&&Me.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,Y,q,z,de){F===null&&(F=be);const Ee=z.isMesh&&z.matrixWorld.determinant()<0,Ce=Mv(b,F,Y,q,z);Ae.setMaterial(q,Ee);let Re=Y.index,Fe=1;if(q.wireframe===!0){if(Re=ie.getWireframeAttribute(Y),Re===void 0)return;Fe=2}const Be=Y.drawRange,Ne=Y.attributes.position;let rt=Be.start*Fe,ut=(Be.start+Be.count)*Fe;de!==null&&(rt=Math.max(rt,de.start*Fe),ut=Math.min(ut,(de.start+de.count)*Fe)),Re!==null?(rt=Math.max(rt,0),ut=Math.min(ut,Re.count)):Ne!=null&&(rt=Math.max(rt,0),ut=Math.min(ut,Ne.count));const yt=ut-rt;if(yt<0||yt===1/0)return;et.setup(z,q,Ce,Y,Re);let cn,tt=ye;if(Re!==null&&(cn=se.get(Re),tt=qe,tt.setIndex(cn)),z.isMesh)q.wireframe===!0?(Ae.setLineWidth(q.wireframeLinewidth*Te()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(z.isLine){let Le=q.linewidth;Le===void 0&&(Le=1),Ae.setLineWidth(Le*Te()),z.isLineSegments?tt.setMode(D.LINES):z.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else z.isPoints?tt.setMode(D.POINTS):z.isSprite&&tt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)tt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,Ut=z._multiDrawCounts,nt=z._multiDrawCount,Rn=Re?se.get(Re).bytesPerElement:1,Ur=Pe.get(q).currentProgram.getUniforms();for(let un=0;un<nt;un++)Ur.setValue(D,"_gl_DrawID",un),tt.render(Le[un]/Rn,Ut[un])}else if(z.isInstancedMesh)tt.renderInstances(rt,yt,z.count);else if(Y.isInstancedBufferGeometry){const Le=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ut=Math.min(Y.instanceCount,Le);tt.renderInstances(rt,yt,Ut)}else tt.render(rt,yt)};function Ze(b,F,Y){b.transparent===!0&&b.side===Kn&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,$a(b,F,Y),b.side=Zi,b.needsUpdate=!0,$a(b,F,Y),b.side=Kn):$a(b,F,Y)}this.compile=function(b,F,Y=null){Y===null&&(Y=b),g=He.get(Y),g.init(F),v.push(g),Y.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),b!==Y&&b.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(g.pushLight(z),z.castShadow&&g.pushShadow(z))}),g.setupLights();const q=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const de=z.material;if(de)if(Array.isArray(de))for(let Ee=0;Ee<de.length;Ee++){const Ce=de[Ee];Ze(Ce,Y,z),q.add(Ce)}else Ze(de,Y,z),q.add(de)}),v.pop(),g=null,q},this.compileAsync=function(b,F,Y=null){const q=this.compile(b,F,Y);return new Promise(z=>{function de(){if(q.forEach(function(Ee){Pe.get(Ee).currentProgram.isReady()&&q.delete(Ee)}),q.size===0){z(b);return}setTimeout(de,10)}ke.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Jt=null;function ti(b){Jt&&Jt(b)}function df(){ir.stop()}function hf(){ir.start()}const ir=new mv;ir.setAnimationLoop(ti),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(b){Jt=b,Z.setAnimationLoop(b),b===null?ir.stop():ir.start()},Z.addEventListener("sessionstart",df),Z.addEventListener("sessionend",hf),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,F,T),g=He.get(b,v.length),g.init(F),v.push(g),W.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(W),K=this.localClippingEnabled,O=le.init(this.clippingPlanes,K),y=_e.get(b,d.length),y.init(),d.push(y),Z.enabled===!0&&Z.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&ac(de,F,-1/0,_.sortObjects)}ac(b,F,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(I,te),ge=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ge&&De.addToRenderList(y,b),this.info.render.frame++,O===!0&&le.beginShadows();const Y=g.state.shadowsArray;xe.render(Y,b,F),O===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=y.opaque,z=y.transmissive;if(g.setupLights(),F.isArrayCamera){const de=F.cameras;if(z.length>0)for(let Ee=0,Ce=de.length;Ee<Ce;Ee++){const Re=de[Ee];pf(q,z,b,Re)}ge&&De.render(b);for(let Ee=0,Ce=de.length;Ee<Ce;Ee++){const Re=de[Ee];ff(y,b,Re,Re.viewport)}}else z.length>0&&pf(q,z,b,F),ge&&De.render(b),ff(y,b,F);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,F),et.resetDefaultState(),L=-1,H=null,v.pop(),v.length>0?(g=v[v.length-1],O===!0&&le.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function ac(b,F,Y,q){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){q&&he.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const Ee=ee.update(b),Ce=b.material;Ce.visible&&y.push(b,Ee,Ce,Y,he.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Ee=ee.update(b),Ce=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),he.copy(b.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),he.copy(Ee.boundingSphere.center)),he.applyMatrix4(b.matrixWorld).applyMatrix4(W)),Array.isArray(Ce)){const Re=Ee.groups;for(let Fe=0,Be=Re.length;Fe<Be;Fe++){const Ne=Re[Fe],rt=Ce[Ne.materialIndex];rt&&rt.visible&&y.push(b,Ee,rt,Y,he.z,Ne)}}else Ce.visible&&y.push(b,Ee,Ce,Y,he.z,null)}}const de=b.children;for(let Ee=0,Ce=de.length;Ee<Ce;Ee++)ac(de[Ee],F,Y,q)}function ff(b,F,Y,q){const z=b.opaque,de=b.transmissive,Ee=b.transparent;g.setupLightsView(Y),O===!0&&le.setGlobalState(_.clippingPlanes,Y),q&&Ae.viewport(S.copy(q)),z.length>0&&qa(z,F,Y),de.length>0&&qa(de,F,Y),Ee.length>0&&qa(Ee,F,Y),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function pf(b,F,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Lr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Va:yi,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const de=g.state.transmissionRenderTarget[q.id],Ee=q.viewport||S;de.setSize(Ee.z,Ee.w);const Ce=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(G),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),ge&&De.render(Y);const Re=_.toneMapping;_.toneMapping=qi;const Fe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),O===!0&&le.setGlobalState(_.clippingPlanes,q),qa(b,Y,q),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,rt=F.length;Ne<rt;Ne++){const ut=F[Ne],yt=ut.object,cn=ut.geometry,tt=ut.material,Le=ut.group;if(tt.side===Kn&&yt.layers.test(q.layers)){const Ut=tt.side;tt.side=on,tt.needsUpdate=!0,mf(yt,Y,q,cn,tt,Le),tt.side=Ut,tt.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de))}_.setRenderTarget(Ce),_.setClearColor(G,$),Fe!==void 0&&(q.viewport=Fe),_.toneMapping=Re}function qa(b,F,Y){const q=F.isScene===!0?F.overrideMaterial:null;for(let z=0,de=b.length;z<de;z++){const Ee=b[z],Ce=Ee.object,Re=Ee.geometry,Fe=q===null?Ee.material:q,Be=Ee.group;Ce.layers.test(Y.layers)&&mf(Ce,F,Y,Re,Fe,Be)}}function mf(b,F,Y,q,z,de){b.onBeforeRender(_,F,Y,q,z,de),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(_,F,Y,q,b,de),z.transparent===!0&&z.side===Kn&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,_.renderBufferDirect(Y,F,q,z,b,de),z.side=Zi,z.needsUpdate=!0,_.renderBufferDirect(Y,F,q,z,b,de),z.side=Kn):_.renderBufferDirect(Y,F,q,z,b,de),b.onAfterRender(_,F,Y,q,z,de)}function $a(b,F,Y){F.isScene!==!0&&(F=be);const q=Pe.get(b),z=g.state.lights,de=g.state.shadowsArray,Ee=z.state.version,Ce=Me.getParameters(b,z.state,de,F,Y),Re=Me.getProgramCacheKey(Ce);let Fe=q.programs;q.environment=b.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(b.isMeshStandardMaterial?X:M).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",Ke),Fe=new Map,q.programs=Fe);let Be=Fe.get(Re);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Ee)return xf(b,Ce),Be}else Ce.uniforms=Me.getUniforms(b),b.onBeforeCompile(Ce,_),Be=Me.acquireProgram(Ce,Re),Fe.set(Re,Be),q.uniforms=Ce.uniforms;const Ne=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=le.uniform),xf(b,Ce),q.needsLights=bv(b),q.lightsStateVersion=Ee,q.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function gf(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=tl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function xf(b,F){const Y=Pe.get(b);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function Mv(b,F,Y,q,z){F.isScene!==!0&&(F=be),R.resetTextureUnits();const de=F.fog,Ee=q.isMeshStandardMaterial?F.environment:null,Ce=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:nr,Re=(q.isMeshStandardMaterial?X:M).get(q.envMap||Ee),Fe=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!Y.morphAttributes.position,rt=!!Y.morphAttributes.normal,ut=!!Y.morphAttributes.color;let yt=qi;q.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(yt=_.toneMapping);const cn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,tt=cn!==void 0?cn.length:0,Le=Pe.get(q),Ut=g.state.lights;if(O===!0&&(K===!0||b!==H)){const yn=b===H&&q.id===L;le.setState(q,b,yn)}let nt=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ut.state.version||Le.outputColorSpace!==Ce||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==Re||q.fog===!0&&Le.fog!==de||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==le.numPlanes||Le.numIntersection!==le.numIntersection)||Le.vertexAlphas!==Fe||Le.vertexTangents!==Be||Le.morphTargets!==Ne||Le.morphNormals!==rt||Le.morphColors!==ut||Le.toneMapping!==yt||Le.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Le.__version=q.version);let Rn=Le.currentProgram;nt===!0&&(Rn=$a(q,F,z));let Ur=!1,un=!1,oc=!1;const Et=Rn.getUniforms(),Ei=Le.uniforms;if(Ae.useProgram(Rn.program)&&(Ur=!0,un=!0,oc=!0),q.id!==L&&(L=q.id,un=!0),Ur||H!==b){ze.reverseDepthBuffer?(B.copy(b.projectionMatrix),AS(B),RS(B),Et.setValue(D,"projectionMatrix",B)):Et.setValue(D,"projectionMatrix",b.projectionMatrix),Et.setValue(D,"viewMatrix",b.matrixWorldInverse);const yn=Et.map.cameraPosition;yn!==void 0&&yn.setValue(D,oe.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Et.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),H!==b&&(H=b,un=!0,oc=!0)}if(z.isSkinnedMesh){Et.setOptional(D,z,"bindMatrix"),Et.setOptional(D,z,"bindMatrixInverse");const yn=z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Et.setValue(D,"boneTexture",yn.boneTexture,R))}z.isBatchedMesh&&(Et.setOptional(D,z,"batchingTexture"),Et.setValue(D,"batchingTexture",z._matricesTexture,R),Et.setOptional(D,z,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",z._indirectTexture,R),Et.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",z._colorsTexture,R));const lc=Y.morphAttributes;if((lc.position!==void 0||lc.normal!==void 0||lc.color!==void 0)&&Ie.update(z,Y,Rn),(un||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,Et.setValue(D,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ei.envMap.value=Re,Ei.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(Ei.envMapIntensity.value=F.environmentIntensity),un&&(Et.setValue(D,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&wv(Ei,oc),de&&q.fog===!0&&fe.refreshFogUniforms(Ei,de),fe.refreshMaterialUniforms(Ei,q,ne,V,g.state.transmissionRenderTarget[b.id]),tl.upload(D,gf(Le),Ei,R)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(tl.upload(D,gf(Le),Ei,R),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Et.setValue(D,"center",z.center),Et.setValue(D,"modelViewMatrix",z.modelViewMatrix),Et.setValue(D,"normalMatrix",z.normalMatrix),Et.setValue(D,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const yn=q.uniformsGroups;for(let cc=0,Tv=yn.length;cc<Tv;cc++){const vf=yn[cc];U.update(vf,Rn),U.bind(vf,Rn)}}return Rn}function wv(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function bv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,F,Y){Pe.get(b.texture).__webglTexture=F,Pe.get(b.depthTexture).__webglTexture=Y;const q=Pe.get(b);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const Y=Pe.get(b);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,Y=0){T=b,P=F,A=Y;let q=!0,z=null,de=!1,Ee=!1;if(b){const Re=Pe.get(b);if(Re.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(D.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Re.__hasExternalTextures)R.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&Pe.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);const Be=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?z=Be[F][Y]:z=Be[F],de=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?z=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[Y]:z=Be,S.copy(b.viewport),w.copy(b.scissor),k=b.scissorTest}else S.copy(N).multiplyScalar(ne).floor(),w.copy(C).multiplyScalar(ne).floor(),k=re;if(Ae.bindFramebuffer(D.FRAMEBUFFER,z)&&q&&Ae.drawBuffers(b,z),Ae.viewport(S),Ae.scissor(w),Ae.setScissorTest(k),de){const Re=Pe.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,Y)}else if(Ee){const Re=Pe.get(b.texture),Fe=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Fe)}L=-1},this.readRenderTargetPixels=function(b,F,Y,q,z,de,Ee){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Ae.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Re=b.texture,Fe=Re.format,Be=Re.type;if(!ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-q&&Y>=0&&Y<=b.height-z&&D.readPixels(F,Y,q,z,Oe.convert(Fe),Oe.convert(Be),de)}finally{const Re=T!==null?Pe.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,F,Y,q,z,de,Ee){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){const Re=b.texture,Fe=Re.format,Be=Re.type;if(!ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-q&&Y>=0&&Y<=b.height-z){Ae.bindFramebuffer(D.FRAMEBUFFER,Ce);const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(F,Y,q,z,Oe.convert(Fe),Oe.convert(Be),0);const rt=T!==null?Pe.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(D.FRAMEBUFFER,rt);const ut=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await CS(D,ut,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.deleteBuffer(Ne),D.deleteSync(ut),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,Y=0){b.isTexture!==!0&&(el("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const q=Math.pow(2,-Y),z=Math.floor(b.image.width*q),de=Math.floor(b.image.height*q),Ee=F!==null?F.x:0,Ce=F!==null?F.y:0;R.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Ee,Ce,z,de),Ae.unbindTexture()},this.copyTextureToTexture=function(b,F,Y=null,q=null,z=0){b.isTexture!==!0&&(el("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,b=arguments[1],F=arguments[2],z=arguments[3]||0,Y=null);let de,Ee,Ce,Re,Fe,Be;Y!==null?(de=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ce=Y.min.x,Re=Y.min.y):(de=b.image.width,Ee=b.image.height,Ce=0,Re=0),q!==null?(Fe=q.x,Be=q.y):(Fe=0,Be=0);const Ne=Oe.convert(F.format),rt=Oe.convert(F.type);R.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ut=D.getParameter(D.UNPACK_ROW_LENGTH),yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES),Ut=b.isCompressedTexture?b.mipmaps[z]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Fe,Be,de,Ee,Ne,rt,Ut.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Fe,Be,Ut.width,Ut.height,Ne,Ut.data):D.texSubImage2D(D.TEXTURE_2D,z,Fe,Be,de,Ee,Ne,rt,Ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),z===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,F,Y=null,q=null,z=0){b.isTexture!==!0&&(el("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,b=arguments[2],F=arguments[3],z=arguments[4]||0);let de,Ee,Ce,Re,Fe,Be,Ne,rt,ut;const yt=b.isCompressedTexture?b.mipmaps[z]:b.image;Y!==null?(de=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ce=Y.max.z-Y.min.z,Re=Y.min.x,Fe=Y.min.y,Be=Y.min.z):(de=yt.width,Ee=yt.height,Ce=yt.depth,Re=0,Fe=0,Be=0),q!==null?(Ne=q.x,rt=q.y,ut=q.z):(Ne=0,rt=0,ut=0);const cn=Oe.convert(F.format),tt=Oe.convert(F.type);let Le;if(F.isData3DTexture)R.setTexture3D(F,0),Le=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)R.setTexture2DArray(F,0),Le=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),Ur=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Fe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Le,z,Ne,rt,ut,de,Ee,Ce,cn,tt,yt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,z,Ne,rt,ut,de,Ee,Ce,cn,yt.data):D.texSubImage3D(Le,z,Ne,rt,ut,de,Ee,Ce,cn,tt,yt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ur),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),z===0&&F.generateMipmaps&&D.generateMipmap(Le),Ae.unbindTexture()},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Ae.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===tf?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===nc?"display-p3":"srgb"}}class sf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=n}clone(){return new sf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zT extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ev extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new j,Il=new j,bm=new mt,ta=new ov,Uo=new ic,pu=new j,Tm=new j;class HT extends Tt{constructor(e=new _n,n=new Ev){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Dl.fromBufferAttribute(n,r-1),Il.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Dl.distanceTo(Il);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;bm.copy(r).invert(),ta.copy(e.ray).applyMatrix4(bm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=m,g=x-1;y<g;y+=u){const d=h.getX(y),v=h.getX(y+1),_=ko(this,e,ta,l,d,v);_&&n.push(_)}if(this.isLineLoop){const y=h.getX(x-1),g=h.getX(m),d=ko(this,e,ta,l,y,g);d&&n.push(d)}}else{const m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let y=m,g=x-1;y<g;y+=u){const d=ko(this,e,ta,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=ko(this,e,ta,l,x-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ko(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Dl.fromBufferAttribute(a,r),Il.fromBufferAttribute(a,s),n.distanceSqToSegment(Dl,Il,pu,Tm)>i)return;pu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(pu);if(!(l<e.near||l>e.far))return{distance:l,point:Tm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Cm=new j,Am=new j;class jT extends HT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Cm.fromBufferAttribute(n,r),Am.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Cm.distanceTo(Am);e.setAttribute("lineDistance",new vt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Li extends _n{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let x=0;const y=[],g=i/2;let d=0;v(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(m,2));function v(){const E=new j,P=new j;let A=0;const T=(n-e)/i;for(let L=0;L<=s;L++){const H=[],S=L/s,w=S*(n-e)+e;for(let k=0;k<=r;k++){const G=k/r,$=G*l+o,J=Math.sin($),V=Math.cos($);P.x=w*J,P.y=-S*i+g,P.z=w*V,p.push(P.x,P.y,P.z),E.set(J,T,V).normalize(),f.push(E.x,E.y,E.z),m.push(G,1-S),H.push(x++)}y.push(H)}for(let L=0;L<r;L++)for(let H=0;H<s;H++){const S=y[H][L],w=y[H+1][L],k=y[H+1][L+1],G=y[H][L+1];e>0&&(h.push(S,w,G),A+=3),n>0&&(h.push(w,k,G),A+=3)}u.addGroup(d,A,0),d+=A}function _(E){const P=x,A=new Je,T=new j;let L=0;const H=E===!0?e:n,S=E===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,g*S,0),f.push(0,S,0),m.push(.5,.5),x++;const w=x;for(let k=0;k<=r;k++){const $=k/r*l+o,J=Math.cos($),V=Math.sin($);T.x=H*V,T.y=g*S,T.z=H*J,p.push(T.x,T.y,T.z),f.push(0,S,0),A.x=J*.5+.5,A.y=V*.5*S+.5,m.push(A.x,A.y),x++}for(let k=0;k<r;k++){const G=P+k,$=w+k;E===!0?h.push($,$+1,G):h.push($+1,$,G),L+=3}u.addGroup(d,L,E===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class af extends _n{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],h=[];let p=e;const f=(n-e)/r,m=new j,x=new Je;for(let y=0;y<=r;y++){for(let g=0;g<=i;g++){const d=s+g/i*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),l.push(m.x,m.y,m.z),u.push(0,0,1),x.x=(m.x/n+1)/2,x.y=(m.y/n+1)/2,h.push(x.x,x.y)}p+=f}for(let y=0;y<r;y++){const g=y*(i+1);for(let d=0;d<i;d++){const v=d+g,_=v,E=v+i+1,P=v+i+2,A=v+1;o.push(_,E,A),o.push(E,P,A)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class of extends _n{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],p=new j,f=new j,m=[],x=[],y=[],g=[];for(let d=0;d<=i;d++){const v=[],_=d/i;let E=0;d===0&&a===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let P=0;P<=n;P++){const A=P/n;p.x=-e*Math.cos(r+A*s)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(r+A*s)*Math.sin(a+_*o),x.push(p.x,p.y,p.z),f.copy(p).normalize(),y.push(f.x,f.y,f.z),g.push(A+E,1-_),v.push(u++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const _=h[d][v+1],E=h[d][v],P=h[d+1][v],A=h[d+1][v+1];(d!==0||a>0)&&m.push(_,E,A),(d!==i-1||l<Math.PI)&&m.push(E,P,A)}this.setIndex(m),this.setAttribute("position",new vt(x,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lf extends _n{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],u=[],h=new j,p=new j,f=new j;for(let m=0;m<=i;m++)for(let x=0;x<=r;x++){const y=x/r*s,g=m/i*Math.PI*2;p.x=(e+n*Math.cos(g))*Math.cos(y),p.y=(e+n*Math.cos(g))*Math.sin(y),p.z=n*Math.sin(g),o.push(p.x,p.y,p.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(p,h).normalize(),l.push(f.x,f.y,f.z),u.push(x/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=r;x++){const y=(r+1)*m+x-1,g=(r+1)*(m-1)+x-1,d=(r+1)*(m-1)+x,v=(r+1)*m+x;a.push(y,g,v),a.push(g,d,v)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zr extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nv,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VT extends Zr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sc extends Tt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const mu=new mt,Rm=new j,Nm=new j;class cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nf,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rm),Nm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Nm),n.updateMatrixWorld(),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class GT extends cf{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Pl*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class WT extends sc{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new GT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pm=new mt,na=new j,gu=new j;class XT extends cf{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),gu.copy(i.position),gu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(gu),i.updateMatrixWorld(),r.makeTranslation(-na.x,-na.y,-na.z),Pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pm)}}class Lm extends sc{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new XT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class YT extends cf{constructor(){super(new gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qT extends sc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new YT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $T extends sc{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class KT extends jT{constructor(e=10,n=10,i=4473924,r=8947848){i=new Xe(i),r=new Xe(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let f=0,m=0,x=-o;f<=n;f++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);const y=f===s?i:r;y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3,y.toArray(u,m),m+=3}const h=new _n;h.setAttribute("position",new vt(l,3)),h.setAttribute("color",new vt(u,3));const p=new Ev({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qh);class ZT{constructor(){rr(this,"ctx",null);rr(this,"osc1",null);rr(this,"osc2",null);rr(this,"gainNode",null);rr(this,"filterNode",null);rr(this,"isPlaying",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}playEngineSound(e,n=150){var r,s;if(this.stopEngineSound(),this.initContext(),!this.ctx)return;const i=this.ctx.currentTime;this.isPlaying=!0,this.gainNode=this.ctx.createGain(),this.gainNode.gain.setValueAtTime(.01,i),this.gainNode.gain.exponentialRampToValueAtTime(.2,i+.3),this.filterNode=this.ctx.createBiquadFilter(),this.filterNode.type="lowpass",e.includes("ELECTRIC")?(this.osc1=this.ctx.createOscillator(),this.osc1.type="sine",this.osc1.frequency.setValueAtTime(140,i),this.osc1.frequency.exponentialRampToValueAtTime(780,i+2),this.filterNode.frequency.setValueAtTime(1200,i),this.osc1.connect(this.gainNode)):e==="BIKE"&&n>140?(this.osc1=this.ctx.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.setValueAtTime(85,i),this.osc1.frequency.exponentialRampToValueAtTime(320,i+1.8),this.osc2=this.ctx.createOscillator(),this.osc2.type="triangle",this.osc2.frequency.setValueAtTime(170,i),this.osc2.frequency.exponentialRampToValueAtTime(640,i+1.8),this.filterNode.frequency.setValueAtTime(2400,i),this.osc1.connect(this.filterNode),this.osc2.connect(this.filterNode),this.filterNode.connect(this.gainNode)):e==="SCOOTER"?(this.osc1=this.ctx.createOscillator(),this.osc1.type="triangle",this.osc1.frequency.setValueAtTime(95,i),this.osc1.frequency.exponentialRampToValueAtTime(220,i+2),this.filterNode.frequency.setValueAtTime(800,i),this.osc1.connect(this.filterNode),this.filterNode.connect(this.gainNode)):(this.osc1=this.ctx.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.setValueAtTime(45,i),this.osc1.frequency.exponentialRampToValueAtTime(160,i+1.5),this.osc2=this.ctx.createOscillator(),this.osc2.type="sine",this.osc2.frequency.setValueAtTime(90,i),this.osc2.frequency.exponentialRampToValueAtTime(280,i+1.5),this.filterNode.frequency.setValueAtTime(750,i),this.osc1.connect(this.filterNode),this.osc2.connect(this.filterNode),this.filterNode.connect(this.gainNode)),this.gainNode.connect(this.ctx.destination),(r=this.osc1)==null||r.start(i),(s=this.osc2)==null||s.start(i),this.gainNode.gain.exponentialRampToValueAtTime(.001,i+4),setTimeout(()=>{this.stopEngineSound()},4100)}stopEngineSound(){if(this.isPlaying)try{this.osc1&&(this.osc1.stop(),this.osc1.disconnect(),this.osc1=null),this.osc2&&(this.osc2.stop(),this.osc2.disconnect(),this.osc2=null),this.gainNode&&(this.gainNode.disconnect(),this.gainNode=null),this.isPlaying=!1}catch{this.isPlaying=!1}}}const Dm=new ZT,JT=[{name:"Electric Teal",hex:"#00E5C7"},{name:"Midnight Black",hex:"#121214"},{name:"Racing Saffron",hex:"#FF6600"},{name:"Cyber Gold",hex:"#D4AF37"},{name:"Crimson Pulse",hex:"#FF2D55"},{name:"Titanium Silver",hex:"#E5E5EA"}],QT=({vehicle:t,onClose:e,onBookNow:n})=>{const i=ce.useRef(null),[r,s]=ce.useState((t==null?void 0:t.colorHex)||"#00E5C7"),[a,o]=ce.useState(!0),[l,u]=ce.useState(!1),[h,p]=ce.useState(0),[f,m]=ce.useState(1200),[x,y]=ce.useState("N"),g=ce.useRef(null),d=ce.useRef(null),v=ce.useRef(null),_=ce.useRef(null),E=ce.useRef([]),P=ce.useRef(null),A=ce.useRef(0),T=ce.useRef(!1),L=ce.useRef({x:0,y:0}),H=ce.useRef({theta:Math.PI/4,phi:Math.PI/3.5,radius:7.5});ce.useEffect(()=>{if(!t||!i.current)return;const k=i.current,G=k.clientWidth,$=k.clientHeight,J=new zT;J.background=new Xe("#0A0A0B"),J.fog=new sf("#0A0A0B",.04),g.current=J;const V=new tn(45,G/$,.1,100);V.position.set(H.current.radius*Math.sin(H.current.phi)*Math.sin(H.current.theta),H.current.radius*Math.cos(H.current.phi),H.current.radius*Math.sin(H.current.phi)*Math.cos(H.current.theta)),V.lookAt(0,.8,0);const ne=new BT({antialias:!0,alpha:!0});ne.setSize(G,$),ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),ne.shadowMap.enabled=!0,ne.shadowMap.type=Vx,k.innerHTML="",k.appendChild(ne.domElement),d.current=ne;const I=new $T("#ffffff",.8);J.add(I);const te=new qT("#ffffff",1.8);te.position.set(6,10,6),te.castShadow=!0,te.shadow.mapSize.width=1024,te.shadow.mapSize.height=1024,J.add(te);const N=new Lm("#00E5C7",2.5,12);N.position.set(-6,4,-4),J.add(N);const C=new Lm("#D4AF37",1.8,12);C.position.set(4,2,-5),J.add(C);const re=new WT(16777215,a?6:0,16,Math.PI/4,.5);re.position.set(2.4,1.2,0);const Q=new Tt;Q.position.set(8,0,0),J.add(Q),re.target=Q,re.castShadow=!0,J.add(re),_.current=re;const O=new Ya(30,30),K=new Zr({color:"#0e0e11",roughness:.2,metalness:.8}),B=new at(O,K);B.rotation.x=-Math.PI/2,B.receiveShadow=!0,J.add(B);const W=new KT(30,30,"#00E5C7","#222226");W.position.y=.01,J.add(W);const oe=new af(3.2,3.25,64),he=new xa({color:"#00E5C7",side:Kn}),be=new at(oe,he);be.rotation.x=-Math.PI/2,be.position.y=.02,J.add(be);const ge=new Fi;E.current=[];const Te=new Zr({color:r,metalness:.85,roughness:.22,clearcoat:.9,clearcoatRoughness:.1});v.current=Te;const D=new Zr({color:"#EEEEEE",metalness:.95,roughness:.1}),Ue=new Zr({color:"#1A1A1A",roughness:.85,metalness:.1}),ke=new VT({color:"#111111",metalness:.1,roughness:.1,transmission:.7,transparent:!0});if(t.vehicleType.includes("CAR")){const ie=new On(4.4,.8,2),ee=new at(ie,Te);ee.position.set(0,.85,0),ee.castShadow=!0,ge.add(ee);const Me=new On(2.4,.75,1.7),fe=new at(Me,Te);fe.position.set(-.2,1.55,0),fe.castShadow=!0,ge.add(fe);const _e=new On(2.35,.68,1.75),He=new at(_e,ke);He.position.set(-.18,1.55,0),ge.add(He);const le=new On(.1,.2,.4),xe=new xa({color:a?"#FFFFFF":"#888888"}),De=new at(le,xe);De.position.set(2.21,.85,.65);const Ie=new at(le,xe);Ie.position.set(2.21,.85,-.65),ge.add(De),ge.add(Ie);const ye=new Li(.48,.48,.26,24);ye.rotateX(Math.PI/2),[[1.4,.48,1.05],[1.4,.48,-1.05],[-1.4,.48,1.05],[-1.4,.48,-1.05]].forEach(([Oe,et,U])=>{const pe=new Fi;pe.position.set(Oe,et,U);const Z=new at(ye,Ue);Z.castShadow=!0,pe.add(Z),ge.add(pe),E.current.push(pe)})}else{const ie=new Li(.08,.08,2.8,16),ee=new at(ie,D);ee.rotation.z=Math.PI/2.3,ee.position.set(0,1.1,0),ee.castShadow=!0,ge.add(ee);const Me=new of(.7,32,16);Me.scale(1.4,.75,.75);const fe=new at(Me,Te);fe.position.set(.4,1.35,0),fe.castShadow=!0,ge.add(fe);const _e=new On(.85,.7,.55),He=new at(_e,D);He.position.set(0,.75,0),He.castShadow=!0,ge.add(He);const le=new On(1.2,.18,.45),xe=new Zr({color:"#161616",roughness:.9}),De=new at(le,xe);De.position.set(-.6,1.25,0),De.rotation.z=-.1,ge.add(De);const Ie=new Li(.06,.09,2.2,16),ye=new at(Ie,D);ye.rotation.z=Math.PI/2.1,ye.position.set(-.3,.5,.3),ge.add(ye);const qe=new Li(.04,.04,1.3,16),Oe=new at(qe,D);Oe.rotation.x=Math.PI/2,Oe.position.set(1.1,1.7,0),ge.add(Oe);const et=new Li(.2,.25,.25,24),U=new xa({color:a?"#FFFFFF":"#888888"}),pe=new at(et,U);pe.rotation.z=Math.PI/2,pe.position.set(1.4,1.45,0),ge.add(pe);const Z=new Fi;Z.position.set(1.5,.65,0);const ae=new lf(.65,.16,16,32),ve=new at(ae,Ue);ve.castShadow=!0;const Se=new Li(.5,.5,.1,16),Ke=new at(Se,D);Ke.rotation.x=Math.PI/2,Z.add(ve),Z.add(Ke),ge.add(Z),E.current.push(Z);const lt=new Fi;lt.position.set(-1.5,.65,0);const It=new at(ae,Ue);It.castShadow=!0;const Ze=new at(Se,D);Ze.rotation.x=Math.PI/2,lt.add(It),lt.add(Ze),ge.add(lt),E.current.push(lt)}J.add(ge),P.current=ge;let Ae=!0;const Ye=()=>{A.current=requestAnimationFrame(Ye),Ae&&!T.current&&(H.current.theta+=.005),V.position.x=H.current.radius*Math.sin(H.current.phi)*Math.sin(H.current.theta),V.position.y=H.current.radius*Math.cos(H.current.phi),V.position.z=H.current.radius*Math.sin(H.current.phi)*Math.cos(H.current.theta),V.lookAt(0,.8,0),l&&E.current.forEach(ie=>{ie.rotation.z-=.15}),ne.render(J,V)};Ye();const Pe=ie=>{T.current=!0,Ae=!1,L.current={x:ie.clientX,y:ie.clientY}},R=ie=>{if(!T.current)return;const ee=ie.clientX-L.current.x,Me=ie.clientY-L.current.y;L.current={x:ie.clientX,y:ie.clientY},H.current.theta-=ee*.008,H.current.phi=Math.max(.1,Math.min(Math.PI/2.1,H.current.phi-Me*.008))},M=()=>{T.current=!1},X=ie=>{ie.preventDefault(),H.current.radius=Math.max(3.5,Math.min(14,H.current.radius+ie.deltaY*.005))};k.addEventListener("mousedown",Pe),window.addEventListener("mousemove",R),window.addEventListener("mouseup",M),k.addEventListener("wheel",X,{passive:!1});const se=()=>{if(!k||!d.current)return;const ie=k.clientWidth,ee=k.clientHeight;V.aspect=ie/ee,V.updateProjectionMatrix(),d.current.setSize(ie,ee)};return window.addEventListener("resize",se),()=>{cancelAnimationFrame(A.current),k.removeEventListener("mousedown",Pe),window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",M),k.removeEventListener("wheel",X),window.removeEventListener("resize",se),ne.dispose(),Dm.stopEngineSound()}},[t]),ce.useEffect(()=>{v.current&&v.current.color.set(r)},[r]),ce.useEffect(()=>{_.current&&(_.current.intensity=a?6.5:0)},[a]);const S=()=>{if(!t)return;u(!0),Dm.playEngineSound(t.vehicleType,t.maxSpeed);let k=0,G=1200;const $=Math.min(t.maxSpeed,140),J=8400,V=setInterval(()=>{k+=7,G+=450,k>=$&&(k=$,G=J,y("4"),clearInterval(V),setTimeout(()=>{u(!1),p(0),m(1200),y("N")},1500)),p(k),m(G),k>80?y("3"):k>40?y("2"):k>10&&y("1")},60)},w=k=>{k==="orbit"?H.current={theta:Math.PI/4,phi:Math.PI/3.5,radius:7.5}:k==="side"?H.current={theta:0,phi:Math.PI/2.3,radius:6.5}:k==="front"?H.current={theta:Math.PI/2,phi:Math.PI/2.3,radius:6.8}:k==="cockpit"&&(H.current={theta:Math.PI/4,phi:Math.PI/5,radius:4.2})};return t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-6xl h-[92vh] max-h-[880px] bg-[#0A0A0B] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row",children:[c.jsxs("div",{className:"relative flex-1 h-[55%] lg:h-full overflow-hidden bg-gradient-to-b from-[#0A0A0B] via-[#101014] to-[#0A0A0B]",children:[c.jsx("div",{ref:i,className:"w-full h-full cursor-grab active:cursor-grabbing"}),c.jsxs("div",{className:"absolute top-4 left-4 flex items-center space-x-2",children:[c.jsxs("div",{className:"px-3 py-1 rounded-full bg-[#141416]/90 border border-[#00E5C7]/40 text-[#00E5C7] text-xs font-bold flex items-center space-x-1.5 shadow-teal-glow",children:[c.jsx(Yh,{className:"w-3.5 h-3.5 animate-spin",style:{animationDuration:"6s"}}),c.jsx("span",{children:"360° Real-time 3D Studio"})]}),c.jsx("span",{className:"hidden sm:inline text-[11px] text-slate-400 bg-black/50 px-2.5 py-1 rounded-md",children:"Drag to rotate • Scroll to zoom"})]}),c.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center space-x-1.5 bg-[#141416]/80 p-1 rounded-xl border border-white/10 backdrop-blur-md",children:[c.jsx("button",{onClick:()=>w("orbit"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Perspective"}),c.jsx("button",{onClick:()=>w("side"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Side Aero"}),c.jsx("button",{onClick:()=>w("front"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Front Aggressive"}),c.jsx("button",{onClick:()=>w("cockpit"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Cockpit"})]}),c.jsxs("div",{className:"absolute top-4 right-4 flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>o(!a),className:`p-2.5 rounded-xl border transition ${a?"bg-[#00E5C7]/20 border-[#00E5C7] text-[#00E5C7] glow-teal":"bg-[#141416] border-white/10 text-slate-400"}`,title:"Toggle Headlight Beams",children:c.jsx(E1,{className:"w-4 h-4"})}),c.jsxs("button",{onClick:S,disabled:l,className:`flex items-center space-x-1.5 px-3 py-2 rounded-xl font-bold text-xs border transition ${l?"bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse":"bg-[#141416] border-white/10 hover:border-[#D4AF37] text-white"}`,children:[c.jsx(D1,{className:"w-4 h-4 text-[#D4AF37]"}),c.jsx("span",{children:l?"Revving Engine...":"Test Rev Sound"})]})]}),c.jsx("button",{onClick:e,className:"lg:hidden absolute top-4 left-auto right-4 p-2 rounded-full bg-black/60 text-white border border-white/10",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"w-full lg:w-[440px] h-[45%] lg:h-full bg-[#141416] border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[11px] font-bold uppercase tracking-widest text-[#00E5C7]",children:t.brand}),c.jsx("h2",{className:"text-2xl font-extrabold text-white font-display leading-tight",children:t.name}),c.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:t.model})]}),c.jsx("button",{onClick:e,className:"hidden lg:flex p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"mt-5 p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsxs("span",{className:"text-[10px] font-bold tracking-widest uppercase text-slate-400 flex items-center space-x-1",children:[c.jsx(Xh,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"Virtual Cockpit Simulation"})]}),c.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded bg-[#00E5C7]/10 text-[#00E5C7] border border-[#00E5C7]/20",children:"SIMULATION"})]}),c.jsxs("div",{className:"flex items-baseline justify-between pt-1",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsx("span",{className:"text-4xl font-extrabold font-mono text-white tracking-tight",children:h}),c.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"km/h"})]}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:["Top Speed: ",t.maxSpeed," km/h"]})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("span",{className:"text-lg font-mono font-bold text-[#00E5C7]",children:f.toLocaleString()}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"RPM Tachometer"})]})]}),c.jsx("div",{className:"w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden",children:c.jsx("div",{className:"h-full bg-gradient-to-r from-[#00E5C7] via-[#D4AF37] to-[#FF2D55] transition-all duration-100",style:{width:`${h/t.maxSpeed*100}%`}})}),c.jsxs("button",{onClick:S,disabled:l,className:"w-full mt-3 py-2 rounded-xl bg-white/5 hover:bg-[#00E5C7]/15 border border-white/10 hover:border-[#00E5C7]/50 text-xs font-bold text-white transition flex items-center justify-center space-x-2",children:[c.jsx(Jl,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("span",{children:["Throttle Launch (0-100 in ",t.zeroToHundred,"s)"]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-1",children:[c.jsx(b1,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Body Paint Finish"})]}),c.jsx("div",{className:"flex items-center space-x-2.5",children:JT.map(k=>c.jsx("button",{onClick:()=>s(k.hex),style:{backgroundColor:k.hex},className:`w-7 h-7 rounded-full transition-transform border ${r===k.hex?"scale-125 border-white ring-2 ring-[#00E5C7]":"border-white/20 hover:scale-110"}`,title:k.name},k.name))})]}),c.jsxs("div",{className:"mt-5 grid grid-cols-2 gap-2 text-xs",children:[c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Powertrain"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.engineOrBattery})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Transmission"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.transmission})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Mileage / Range"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.mileageOrRange})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Security Deposit"}),c.jsxs("p",{className:"font-bold text-white mt-0.5",children:["₹",t.securityDeposit.toLocaleString("en-IN")]})]})]})]}),c.jsxs("div",{className:"pt-5 border-t border-white/10",children:[c.jsx("div",{className:"flex items-center justify-between mb-3",children:c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Rental Rate"}),c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsxs("span",{className:"text-2xl font-extrabold font-display text-white",children:["₹",t.pricePerHour]}),c.jsx("span",{className:"text-xs text-slate-400",children:"/ hour"}),c.jsxs("span",{className:"text-xs text-[#00E5C7] ml-2 font-medium",children:["or ₹",t.pricePerDay," / day"]})]})]})}),c.jsxs("button",{onClick:()=>{e(),n(t)},className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsxs("span",{children:["Book ",t.name," Now"]}),c.jsx(ja,{className:"w-4 h-4"})]})]})]})]})}):null},eC=({vehicle:t,isOpen:e,onClose:n,onBook:i})=>{if(!e||!t)return null;let r=[];try{t.galleryImageUrls&&(r=JSON.parse(t.galleryImageUrls))}catch{r=[]}r.length===0&&(r=[t.imageUrl]);const s=["Front 3/4 (Hero)","Side Profile","Rear Perspective","Cockpit / Interior","Chassis & Engine"],[a,o]=ce.useState(0);return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in",children:c.jsxs("div",{className:"relative w-full max-w-5xl bg-[#141416] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]",children:[c.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0B]/80",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]",children:c.jsx(ax,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-[10px] uppercase tracking-widest font-semibold text-[#D4AF37]",children:"Production Vehicle Showcase"}),t.assetVerified?c.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold flex items-center space-x-1",children:[c.jsx(_i,{className:"w-3 h-3 inline mr-1"}),"Commercially Verified Asset"]}):c.jsxs("span",{className:"px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[9px] font-bold flex items-center space-x-1",title:"Educational/Demo Reference Asset from BikeDekho/CarDekho",children:[c.jsx(_i,{className:"w-3 h-3 inline mr-1"}),"College Demo Reference (BikeDekho/CarDekho)"]})]}),c.jsxs("h3",{className:"text-xl font-extrabold text-white font-display",children:[t.name," ",c.jsxs("span",{className:"text-[#00E5C7] text-sm font-normal",children:["(",t.model,")"]})]})]})]}),c.jsx("button",{onClick:n,className:"p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:[c.jsxs("div",{className:"lg:col-span-7 flex flex-col space-y-4",children:[c.jsxs("div",{className:"relative w-full aspect-[16/10] bg-[#0A0A0B] rounded-2xl overflow-hidden border border-white/10 group shadow-inner",children:[c.jsx("img",{src:r[a]||t.imageUrl,alt:`${t.name} - View ${a+1}`,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),c.jsxs("div",{className:"absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-white flex items-center space-x-1.5",children:[c.jsx(Rp,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:s[a]||`Angle ${a+1}`})]}),c.jsxs("div",{className:"absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[10px] text-slate-300",children:[a+1," / ",r.length," Official Photos"]})]}),c.jsx("div",{className:"flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-thin",children:r.map((l,u)=>c.jsxs("button",{onClick:()=>o(u),className:`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition ${a===u?"border-[#00E5C7] shadow-teal-glow scale-105":"border-white/10 opacity-60 hover:opacity-100"}`,children:[c.jsx("img",{src:l,alt:`Thumbnail ${u+1}`,className:"w-full h-full object-cover"}),c.jsx("div",{className:"absolute bottom-0 inset-x-0 bg-black/80 py-0.5 text-[8px] text-center font-bold text-slate-300 truncate px-1",children:s[u]||`View ${u+1}`})]},u))}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B]/50 rounded-xl border border-white/5 text-[11px] text-slate-400 flex items-start space-x-2",children:[c.jsx(f1,{className:"w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-semibold text-slate-300",children:"Zero AI-Generated Imagery:"})," TBH guarantees that every visual asset corresponds to authentic Indian production photography sourced from official manufacturer press kits and verified mobility partners."]})]})]}),c.jsxs("div",{className:"lg:col-span-5 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{className:"space-y-3",children:[c.jsx("h4",{className:"text-xs uppercase tracking-wider font-bold text-slate-400",children:"Indian-Market Production Specifications"}),c.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(Jl,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Peak Power"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono",children:t.powerBhp?`${t.powerBhp} BHP`:"Optimized"})]}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(Xh,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"Max Torque"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono",children:t.torqueNm?`${t.torqueNm} Nm`:"High Output"})]}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(lx,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsx("span",{children:"Efficiency / Range"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono truncate",children:t.mileageOrRange})]}),c.jsxs("div",{className:"p-3 bg-[#0A0A0B] rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2 text-slate-400 text-xs mb-1",children:[c.jsx(Rp,{className:"w-3.5 h-3.5 text-cyan-400"}),c.jsx("span",{children:"Ground Clearance"})]}),c.jsx("div",{className:"text-sm font-bold text-white font-mono",children:t.groundClearanceMm?`${t.groundClearanceMm} mm`:"Indian Standard"})]})]}),c.jsxs("div",{className:"p-3.5 bg-[#0A0A0B] rounded-xl border border-white/5 space-y-2",children:[c.jsx("p",{className:"text-[11px] font-semibold text-slate-300 uppercase tracking-wide",children:"Key Features"}),c.jsx("div",{className:"space-y-1.5",children:t.features.split(",").map((l,u)=>c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-300",children:[c.jsx(Os,{className:"w-3.5 h-3.5 text-[#00E5C7] flex-shrink-0"}),c.jsx("span",{children:l.trim()})]},u))})]}),c.jsxs("div",{className:"p-3.5 bg-gradient-to-br from-[#0A0A0B] to-[#1a1a20] rounded-xl border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Hourly Rate"}),c.jsxs("span",{className:"font-bold text-white font-mono",children:["₹",t.pricePerHour," / hr"]})]}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Daily Rate"}),c.jsxs("span",{className:"font-bold text-white font-mono",children:["₹",t.pricePerDay," / day"]})]}),c.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[c.jsx("span",{children:"Refundable Deposit"}),c.jsxs("span",{className:"font-bold text-emerald-400 font-mono",children:["₹",t.securityDeposit]})]})]})]}),c.jsx("div",{className:"pt-2 flex items-center space-x-3",children:t.available&&(t.fleetUnitsAvailable===void 0||t.fleetUnitsAvailable>0)?c.jsxs("button",{onClick:()=>{n(),i(t)},className:"flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsxs("span",{children:["Reserve ",t.name]}),c.jsx(ja,{className:"w-4 h-4"})]}):c.jsx("button",{disabled:!0,className:"flex-1 py-3 px-4 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 font-bold text-sm cursor-not-allowed flex items-center justify-center",children:c.jsx("span",{children:"Currently Unavailable (0 Fleet Units)"})})})]})]})]})})};var uf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),C=N.getContext("2d");C.fillRect(0,0,1,1);var re=N.transferToImageBitmap();C.createPattern(re,"no-repeat")}catch{return!1}return!0}();function l(){}function u(N){var C=n.exports.Promise,re=C!==void 0?C:e.Promise;return typeof re=="function"?new re(N):(N(l,l),null)}var h=function(N,C){return{transform:function(re){if(N)return re;if(C.has(re))return C.get(re);var Q=new OffscreenCanvas(re.width,re.height),O=Q.getContext("2d");return O.drawImage(re,0,0),C.set(re,Q),Q},clear:function(){C.clear()}}}(o,new Map),p=function(){var N=Math.floor(16.666666666666668),C,re,Q={},O=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(K){var B=Math.random();return Q[B]=requestAnimationFrame(function W(oe){O===oe||O+N-1<oe?(O=oe,delete Q[B],K()):Q[B]=requestAnimationFrame(W)}),B},re=function(K){Q[K]&&cancelAnimationFrame(Q[K])}):(C=function(K){return setTimeout(K,N)},re=function(K){return clearTimeout(K)}),{frame:C,cancel:re}}(),f=function(){var N,C,re={};function Q(O){function K(B,W){O.postMessage({options:B||{},callback:W})}O.init=function(W){var oe=W.transferControlToOffscreen();O.postMessage({canvas:oe},[oe])},O.fire=function(W,oe,he){if(C)return K(W,null),C;var be=Math.random().toString(36).slice(2);return C=u(function(ge){function Te(D){D.data.callback===be&&(delete re[be],O.removeEventListener("message",Te),C=null,h.clear(),he(),ge())}O.addEventListener("message",Te),K(W,be),re[be]=Te.bind(null,{data:{callback:be}})}),C},O.reset=function(){O.postMessage({reset:!0});for(var W in re)re[W](),delete re[W]}}return function(){if(N)return N;if(!i&&s){var O=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([O])))}catch(K){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",K),null}Q(N)}return N}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(N,C){return C?C(N):N}function y(N){return N!=null}function g(N,C,re){return x(N&&y(N[C])?N[C]:m[C],re)}function d(N){return N<0?0:Math.floor(N)}function v(N,C){return Math.floor(Math.random()*(C-N))+N}function _(N){return parseInt(N,16)}function E(N){return N.map(P)}function P(N){var C=String(N).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:_(C.substring(0,2)),g:_(C.substring(2,4)),b:_(C.substring(4,6))}}function A(N){var C=g(N,"origin",Object);return C.x=g(C,"x",Number),C.y=g(C,"y",Number),C}function T(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function L(N){var C=N.getBoundingClientRect();N.width=C.width,N.height=C.height}function H(N){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=N,C}function S(N,C,re,Q,O,K,B,W,oe){N.save(),N.translate(C,re),N.rotate(K),N.scale(Q,O),N.arc(0,0,1,B,W,oe),N.restore()}function w(N){var C=N.angle*(Math.PI/180),re=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-C+(.5*re-Math.random()*re),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function k(N,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var re=C.tick++/C.totalTicks,Q=C.x+C.random*C.tiltCos,O=C.y+C.random*C.tiltSin,K=C.wobbleX+C.random*C.tiltCos,B=C.wobbleY+C.random*C.tiltSin;if(N.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-re)+")",N.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))N.fill(ne(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(K-Q)*.1,Math.abs(B-O)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var W=Math.PI/10*C.wobble,oe=Math.abs(K-Q)*.1,he=Math.abs(B-O)*.1,be=C.shape.bitmap.width*C.scalar,ge=C.shape.bitmap.height*C.scalar,Te=new DOMMatrix([Math.cos(W)*oe,Math.sin(W)*oe,-Math.sin(W)*he,Math.cos(W)*he,C.x,C.y]);Te.multiplySelf(new DOMMatrix(C.shape.matrix));var D=N.createPattern(h.transform(C.shape.bitmap),"no-repeat");D.setTransform(Te),N.globalAlpha=1-re,N.fillStyle=D,N.fillRect(C.x-be/2,C.y-ge/2,be,ge),N.globalAlpha=1}else if(C.shape==="circle")N.ellipse?N.ellipse(C.x,C.y,Math.abs(K-Q)*C.ovalScalar,Math.abs(B-O)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):S(N,C.x,C.y,Math.abs(K-Q)*C.ovalScalar,Math.abs(B-O)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var Ue=Math.PI/2*3,ke=4*C.scalar,ze=8*C.scalar,Ae=C.x,Ye=C.y,Pe=5,R=Math.PI/Pe;Pe--;)Ae=C.x+Math.cos(Ue)*ze,Ye=C.y+Math.sin(Ue)*ze,N.lineTo(Ae,Ye),Ue+=R,Ae=C.x+Math.cos(Ue)*ke,Ye=C.y+Math.sin(Ue)*ke,N.lineTo(Ae,Ye),Ue+=R;else N.moveTo(Math.floor(C.x),Math.floor(C.y)),N.lineTo(Math.floor(C.wobbleX),Math.floor(O)),N.lineTo(Math.floor(K),Math.floor(B)),N.lineTo(Math.floor(Q),Math.floor(C.wobbleY));return N.closePath(),N.fill(),C.tick<C.totalTicks}function G(N,C,re,Q,O){var K=C.slice(),B=N.getContext("2d"),W,oe,he=u(function(be){function ge(){W=oe=null,B.clearRect(0,0,Q.width,Q.height),h.clear(),O(),be()}function Te(){i&&!(Q.width===r.width&&Q.height===r.height)&&(Q.width=N.width=r.width,Q.height=N.height=r.height),!Q.width&&!Q.height&&(re(N),Q.width=N.width,Q.height=N.height),B.clearRect(0,0,Q.width,Q.height),K=K.filter(function(D){return k(B,D)}),K.length?W=p.frame(Te):ge()}W=p.frame(Te),oe=ge});return{addFettis:function(be){return K=K.concat(be),he},canvas:N,promise:he,reset:function(){W&&p.cancel(W),oe&&oe()}}}function $(N,C){var re=!N,Q=!!g(C||{},"resize"),O=!1,K=g(C,"disableForReducedMotion",Boolean),B=s&&!!g(C||{},"useWorker"),W=B?f():null,oe=re?T:L,he=N&&W?!!N.__confetti_initialized:!1,be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ge;function Te(Ue,ke,ze){for(var Ae=g(Ue,"particleCount",d),Ye=g(Ue,"angle",Number),Pe=g(Ue,"spread",Number),R=g(Ue,"startVelocity",Number),M=g(Ue,"decay",Number),X=g(Ue,"gravity",Number),se=g(Ue,"drift",Number),ie=g(Ue,"colors",E),ee=g(Ue,"ticks",Number),Me=g(Ue,"shapes"),fe=g(Ue,"scalar"),_e=!!g(Ue,"flat"),He=A(Ue),le=Ae,xe=[],De=N.width*He.x,Ie=N.height*He.y;le--;)xe.push(w({x:De,y:Ie,angle:Ye,spread:Pe,startVelocity:R,color:ie[le%ie.length],shape:Me[v(0,Me.length)],ticks:ee,decay:M,gravity:X,drift:se,scalar:fe,flat:_e}));return ge?ge.addFettis(xe):(ge=G(N,xe,oe,ke,ze),ge.promise)}function D(Ue){var ke=K||g(Ue,"disableForReducedMotion",Boolean),ze=g(Ue,"zIndex",Number);if(ke&&be)return u(function(R){R()});re&&ge?N=ge.canvas:re&&!N&&(N=H(ze),document.body.appendChild(N)),Q&&!he&&oe(N);var Ae={width:N.width,height:N.height};W&&!he&&W.init(N),he=!0,W&&(N.__confetti_initialized=!0);function Ye(){if(W){var R={getBoundingClientRect:function(){if(!re)return N.getBoundingClientRect()}};oe(R),W.postMessage({resize:{width:R.width,height:R.height}});return}Ae.width=Ae.height=null}function Pe(){ge=null,Q&&(O=!1,e.removeEventListener("resize",Ye)),re&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,he=!1)}return Q&&!O&&(O=!0,e.addEventListener("resize",Ye,!1)),W?W.fire(Ue,Ae,Pe):Te(Ue,Ae,Pe)}return D.reset=function(){W&&W.reset(),ge&&ge.reset()},D}var J;function V(){return J||(J=$(null,{useWorker:!0,resize:!0})),J}function ne(N,C,re,Q,O,K,B){var W=new Path2D(N),oe=new Path2D;oe.addPath(W,new DOMMatrix(C));var he=new Path2D;return he.addPath(oe,new DOMMatrix([Math.cos(B)*O,Math.sin(B)*O,-Math.sin(B)*K,Math.cos(B)*K,re,Q])),he}function I(N){if(!a)throw new Error("path confetti are not supported in this browser");var C,re;typeof N=="string"?C=N:(C=N.path,re=N.matrix);var Q=new Path2D(C),O=document.createElement("canvas"),K=O.getContext("2d");if(!re){for(var B=1e3,W=B,oe=B,he=0,be=0,ge,Te,D=0;D<B;D+=2)for(var Ue=0;Ue<B;Ue+=2)K.isPointInPath(Q,D,Ue,"nonzero")&&(W=Math.min(W,D),oe=Math.min(oe,Ue),he=Math.max(he,D),be=Math.max(be,Ue));ge=he-W,Te=be-oe;var ke=10,ze=Math.min(ke/ge,ke/Te);re=[ze,0,0,ze,-Math.round(ge/2+W)*ze,-Math.round(Te/2+oe)*ze]}return{type:"path",path:C,matrix:re}}function te(N){var C,re=1,Q="#000000",O='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?C=N:(C=N.text,re="scalar"in N?N.scalar:re,O="fontFamily"in N?N.fontFamily:O,Q="color"in N?N.color:Q);var K=10*re,B=""+K+"px "+O,W=new OffscreenCanvas(K,K),oe=W.getContext("2d");oe.font=B;var he=oe.measureText(C),be=Math.ceil(he.actualBoundingBoxRight+he.actualBoundingBoxLeft),ge=Math.ceil(he.actualBoundingBoxAscent+he.actualBoundingBoxDescent),Te=2,D=he.actualBoundingBoxLeft+Te,Ue=he.actualBoundingBoxAscent+Te;be+=Te+Te,ge+=Te+Te,W=new OffscreenCanvas(be,ge),oe=W.getContext("2d"),oe.font=B,oe.fillStyle=Q,oe.fillText(C,D,Ue);var ke=1/re;return{type:"bitmap",bitmap:W.transferToImageBitmap(),matrix:[ke,0,0,ke,-be*ke/2,-ge*ke/2]}}n.exports=function(){return V().apply(this,arguments)},n.exports.reset=function(){V().reset()},n.exports.create=$,n.exports.shapeFromPath=I,n.exports.shapeFromText=te})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),uf,!1);const tC=uf.exports;uf.exports.create;const nC=({vehicle:t,cities:e,selectedCity:n,onClose:i,onBookingSuccess:r})=>{var C,re;const{user:s,isAuthenticated:a}=Ql(),o=e.find(Q=>Q.name===n)||e[0],l=o?o.hubs:[],[u,h]=ce.useState(((C=l[0])==null?void 0:C.name)||"Kempegowda Intl Airport (BLR)"),[p,f]=ce.useState(((re=l[0])==null?void 0:re.name)||"Kempegowda Intl Airport (BLR)"),[m,x]=ce.useState("HOURLY"),[y,g]=ce.useState(m==="HOURLY"?6:m==="DAILY"?2:1),[d,v]=ce.useState(!0),[_,E]=ce.useState((t==null?void 0:t.vehicleType.includes("CAR"))||!1),[P,A]=ce.useState("UPI"),[T,L]=ce.useState(!1),[H,S]=ce.useState(null),[w,k]=ce.useState(null);if(!t)return null;ce.useEffect(()=>{let Q=!0;return k(null),Cs.getPricingQuote({vehicleId:t.id,rentalMode:m,duration:y,insurancePlan:d?"ZERO_DEPRECIATION":"PREMIUM"}).then(O=>{Q&&S(O)}).catch(O=>{}),()=>{Q=!1}},[t.id,m,y,d]);const G=t.vehicleType.includes("CAR"),$=H?H.baseAmount:m==="HOURLY"?t.pricePerHour*y:m==="DAILY"?t.pricePerDay*y:t.pricePerMonth*y,J=H?H.discountAmount:0,V=H?H.insuranceAmount:G?299:99,ne=H?H.gstAmount:Math.round(($+V)*.18),I=H?H.securityDeposit:t.securityDeposit,te=H?H.totalAmount:$+V+ne+I,N=async Q=>{Q.preventDefault(),L(!0),k(null);try{const O={userId:(s==null?void 0:s.id)||2,vehicleId:t.id,pickupCity:n,pickupHub:u,dropHub:p,rentalMode:m,duration:y,includeZeroDep:d,includeFastag:_,paymentMethod:P==="UPI"?"Razorpay UPI - GPay / PhonePe":"Razorpay Secure Card"},K=await Cs.createBooking(O);tC({particleCount:80,spread:70,origin:{y:.6}}),L(!1),r(K)}catch(O){L(!1),k(O.message||"Vehicle reservation could not be processed.")}};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-2xl max-h-[92vh] bg-[#141416] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl flex flex-col justify-between",children:[c.jsxs("div",{className:"sticky top-0 z-10 bg-[#141416]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7] font-bold",children:"TBH"}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-base font-extrabold text-white font-display",children:"Instant Reservation"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Locked with Razorpay Secure Gateway"})]})]}),c.jsx("button",{onClick:i,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"flex items-center space-x-4 p-3.5 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-20 h-16 object-cover rounded-xl border border-white/10"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("span",{className:"text-[10px] font-bold text-[#00E5C7] uppercase",children:t.brand}),c.jsx("h4",{className:"text-sm font-bold text-white truncate",children:t.name}),c.jsxs("p",{className:"text-xs text-slate-400",children:[t.model," • ",t.fuelType," • ",t.maxSpeed," km/h"]})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("span",{className:"text-sm font-extrabold font-display text-white",children:["₹",t.pricePerHour]}),c.jsx("span",{className:"text-[10px] text-slate-400",children:"/hr"})]})]}),c.jsxs("div",{className:"flex items-center justify-between p-3 rounded-xl bg-[#0A0A0B]/80 border border-white/10 text-xs",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-7 h-7 rounded-lg bg-[#00E5C7]/15 border border-[#00E5C7]/30 flex items-center justify-center text-[#00E5C7] font-bold text-xs",children:"✓"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-white font-bold",children:(s==null?void 0:s.fullName)||"Hemanth Rider"}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:[(s==null?void 0:s.email)||"rider@tbhrentals.in"," • DL: ",(s==null?void 0:s.drivingLicenseNumber)||"KA-01-2023-0048192"]})]})]}),c.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",children:"Verified Rider"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2",children:"Rental Duration Mode"}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:["HOURLY","DAILY","MONTHLY"].map(Q=>c.jsx("button",{type:"button",onClick:()=>{x(Q),g(Q==="HOURLY"?6:Q==="DAILY"?2:1)},className:`py-2.5 rounded-xl border text-xs font-bold transition ${m===Q?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7] glow-teal":"bg-[#0A0A0B] border-white/10 text-slate-400 hover:text-white"}`,children:Q},Q))}),c.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between",children:[c.jsxs("span",{className:"text-xs font-semibold text-slate-300",children:["Duration: ",c.jsxs("strong",{className:"text-[#00E5C7] font-mono text-sm",children:[y," ",m.toLowerCase(),y>1?"s":""]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{type:"button",onClick:()=>g(Math.max(1,y-1)),className:"w-7 h-7 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center hover:bg-white/20",children:"-"}),c.jsx("button",{type:"button",onClick:()=>g(y+1),className:"w-7 h-7 rounded-lg bg-[#00E5C7] text-black font-bold flex items-center justify-center hover:opacity-90",children:"+"})]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1",children:["Pickup Hub (",n,")"]}),c.jsx("select",{value:u,onChange:Q=>h(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:l.map(Q=>c.jsx("option",{value:Q.name,children:Q.name},Q.id))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1",children:"Drop-off Hub"}),c.jsx("select",{value:p,onChange:Q=>f(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:l.map(Q=>c.jsx("option",{value:Q.name,children:Q.name},Q.id))})]})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300",children:"Protection & Add-ons"}),c.jsxs("div",{onClick:()=>v(!d),className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#00E5C7]/40 transition",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx(_i,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"Zero Depreciation Damage Waiver"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Zero liability for accidental scratches or minor dents"})]})]}),c.jsx("span",{className:"text-xs font-bold text-[#00E5C7]",children:d?`+₹${G?250:120}`:"Add"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx(Os,{className:"w-4 h-4 text-emerald-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"Complimentary Helmets & 24/7 Roadside SOS"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"2 sanitized ISI helmets included with every bike"})]})]}),c.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"FREE"})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsxs("span",{children:["Base Rent (",y," ",m.toLowerCase(),")"]}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",$.toLocaleString("en-IN")]})]}),J>0&&c.jsxs("div",{className:"flex justify-between text-xs text-emerald-400 font-semibold",children:[c.jsx("span",{children:"Multi-Day Duration Discount"}),c.jsxs("span",{className:"font-mono",children:["-₹",J.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsx("span",{children:d?"Zero-Dep Insurance Protection":"Standard Insurance"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",V]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsx("span",{children:"GST (18% Indian Tax)"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",ne.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-400 border-b border-white/10 pb-2",children:[c.jsx("span",{children:"Refundable Security Deposit (Returned on drop)"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",I.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between items-baseline pt-1",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm font-extrabold text-white",children:"Total Payable Amount"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Includes 100% refundable deposit"})]}),c.jsxs("span",{className:"text-2xl font-extrabold font-display text-[#00E5C7]",children:["₹",te.toLocaleString("en-IN")]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2",children:"Payment Method (Razorpay India)"}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsxs("button",{type:"button",onClick:()=>A("UPI"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${P==="UPI"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(R1,{className:"w-4 h-4"}),c.jsx("span",{children:"UPI / QR"})]}),c.jsxs("button",{type:"button",onClick:()=>A("CARD"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${P==="CARD"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(x1,{className:"w-4 h-4"}),c.jsx("span",{children:"Card"})]}),c.jsxs("button",{type:"button",onClick:()=>A("NETBANKING"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${P==="NETBANKING"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(wx,{className:"w-4 h-4"}),c.jsx("span",{children:"NetBanking"})]})]})]})]}),w&&c.jsxs("div",{className:"mx-6 my-3 p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs flex items-center space-x-2.5 animate-in fade-in",children:[c.jsx(P1,{className:"w-4 h-4 text-rose-400 flex-shrink-0"}),c.jsx("p",{className:"font-semibold",children:w})]}),c.jsx("div",{className:"sticky bottom-0 bg-[#141416]/95 backdrop-blur-md px-6 py-4 border-t border-white/10",children:c.jsx("button",{onClick:N,disabled:T,className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed",children:T?c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"}),c.jsx("span",{children:"Securing Fleet Unit & Authorizing Pass..."})]}):c.jsxs(c.Fragment,{children:[c.jsx(Zl,{className:"w-4 h-4"}),c.jsxs("span",{children:["Pay ₹",te.toLocaleString("en-IN")," & Generate Rental Pass"]}),c.jsx(ja,{className:"w-4 h-4"})]})})})]})})},iC=({booking:t,onClose:e})=>t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-xl bg-[#141416] border border-[#00E5C7]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col",children:[c.jsxs("div",{className:"bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] p-5 text-black flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx(Os,{className:"w-6 h-6 stroke-[2.5]"}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-lg leading-tight",children:"Rental Confirmed!"}),c.jsx("p",{className:"text-xs font-semibold opacity-90",children:"Digital Boarding Pass & Keyless Voucher"})]})]}),c.jsx("button",{onClick:e,className:"p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-black transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] uppercase font-bold tracking-widest text-slate-400",children:"Booking Reference"}),c.jsx("p",{className:"text-xl font-extrabold font-mono text-[#00E5C7]",children:t.bookingReference}),c.jsxs("p",{className:"text-xs text-slate-300 mt-1",children:[t.vehicle.name," (",t.vehicle.model,")"]})]}),c.jsxs("div",{className:"flex flex-col items-center p-2 rounded-xl bg-white text-black shadow-lg",children:[c.jsx(wx,{className:"w-20 h-20 text-black"}),c.jsx("span",{className:"text-[9px] font-mono font-bold tracking-wider mt-0.5",children:"HUB-SCAN-PASS"})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-gradient-to-r from-[#141416] via-[#1C1C22] to-[#141416] border border-[#D4AF37]/50 flex items-center justify-between shadow-gold-glow",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]",children:c.jsx(S1,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]",children:"Vehicle Smart Unlock PIN"}),c.jsx("p",{className:"text-xs text-slate-300",children:"Enter on smart console or show hub agent"})]})]}),c.jsx("span",{className:"text-2xl font-mono font-black text-white tracking-widest bg-black/60 px-3 py-1.5 rounded-xl border border-white/10",children:t.unlockPin})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(Ua,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Pickup Hub"})]}),c.jsx("p",{className:"font-bold text-white mt-1",children:t.pickupHub}),c.jsx("p",{className:"text-[10px] text-slate-400",children:t.pickupCity})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(Ua,{className:"w-3 h-3 text-[#D4AF37]"}),c.jsx("span",{children:"Drop Hub"})]}),c.jsx("p",{className:"font-bold text-white mt-1",children:t.dropHub}),c.jsx("p",{className:"text-[10px] text-slate-400",children:t.pickupCity})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(ex,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Duration"})]}),c.jsxs("p",{className:"font-bold text-white mt-1",children:[t.duration," ",t.rentalMode.toLowerCase()]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(_i,{className:"w-3 h-3 text-emerald-400"}),c.jsx("span",{children:"Paid Total"})]}),c.jsxs("p",{className:"font-bold text-[#00E5C7] mt-1",children:["₹",t.totalAmount.toLocaleString("en-IN")]})]})]}),c.jsxs("div",{className:"flex items-center space-x-3 pt-2",children:[c.jsxs("button",{onClick:()=>window.print(),className:"flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-xs flex items-center justify-center space-x-2 transition",children:[c.jsx(v1,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:"Print / Save Voucher"})]}),c.jsx("button",{onClick:e,className:"flex-1 py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:"Done & View Fleet"})]})]})]})}):null,rC=({vehicles:t,onRemove:e,onClose:n,onBook:i})=>t.length===0?null:c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-5xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-lg text-white",children:"Side-by-Side Fleet Comparison"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Compare specs, velocity, mileage, and rates in INR"})]}),c.jsx("button",{onClick:n,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"p-6 overflow-x-auto flex-1",children:c.jsxs("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-4 min-w-[640px]",children:[c.jsxs("div",{className:"space-y-6 pt-24 text-xs font-semibold text-slate-400 border-r border-white/10 pr-3",children:[c.jsx("div",{className:"h-6 flex items-center",children:"Category"}),c.jsx("div",{className:"h-6 flex items-center",children:"Powertrain"}),c.jsx("div",{className:"h-6 flex items-center",children:"Fuel Type"}),c.jsx("div",{className:"h-6 flex items-center",children:"Top Speed"}),c.jsx("div",{className:"h-6 flex items-center",children:"0-100 Acceleration"}),c.jsx("div",{className:"h-6 flex items-center",children:"Mileage / Range"}),c.jsx("div",{className:"h-6 flex items-center",children:"Hourly Rent"}),c.jsx("div",{className:"h-6 flex items-center",children:"Daily Rent"}),c.jsx("div",{className:"h-6 flex items-center",children:"Security Deposit"}),c.jsx("div",{className:"h-6 flex items-center",children:"Included Helmets"})]}),t.map(r=>c.jsxs("div",{className:"p-3 rounded-2xl bg-[#0A0A0B] border border-white/10 relative flex flex-col justify-between",children:[c.jsx("button",{onClick:()=>e(r.id),className:"absolute top-2 right-2 w-6 h-6 rounded-full bg-white/10 text-slate-400 hover:text-white flex items-center justify-center text-xs",children:c.jsx(Gn,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-full h-24 object-cover rounded-xl mb-2"}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] font-bold uppercase",children:r.brand}),c.jsx("h4",{className:"text-sm font-bold text-white leading-tight truncate",children:r.name}),c.jsxs("div",{className:"space-y-6 pt-4 text-xs font-bold text-white",children:[c.jsx("div",{className:"h-6 flex items-center text-slate-300",children:r.vehicleType.replace("_"," ")}),c.jsx("div",{className:"h-6 flex items-center text-slate-300 truncate",children:r.engineOrBattery}),c.jsx("div",{className:"h-6 flex items-center text-emerald-400",children:r.fuelType}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#00E5C7]",children:[r.maxSpeed," km/h"]}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#D4AF37]",children:[r.zeroToHundred,"s"]}),c.jsx("div",{className:"h-6 flex items-center text-slate-300",children:r.mileageOrRange}),c.jsxs("div",{className:"h-6 flex items-center font-mono",children:["₹",r.pricePerHour,"/hr"]}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#00E5C7]",children:["₹",r.pricePerDay,"/day"]}),c.jsxs("div",{className:"h-6 flex items-center text-slate-400 font-mono",children:["₹",r.securityDeposit]}),c.jsx("div",{className:"h-6 flex items-center text-emerald-400",children:"Yes (ISI 2x)"})]})]}),c.jsx("button",{onClick:()=>{n(),i(r)},className:"w-full mt-4 py-2 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:"Book Ride"})]},r.id))]})})]})}),sC=({isOpen:t,onClose:e})=>{const{user:n,isAuthenticated:i,loginWithEmail:r,signupWithEmail:s,sendOtp:a,verifyOtp:o,verifyLicense:l,loginAsDemoRider:u,logout:h}=Ql(),[p,f]=ce.useState("PHONE_OTP"),[m,x]=ce.useState("9876543210"),[y,g]=ce.useState(!1),[d,v]=ce.useState(""),[_,E]=ce.useState("rider@tbhrentals.in"),[P,A]=ce.useState("rider123"),[T,L]=ce.useState("Hemanth Kumar"),[H,S]=ce.useState((n==null?void 0:n.drivingLicenseNumber)||"KA-01-2023-0048192"),[w,k]=ce.useState(!1),[G,$]=ce.useState(!1),[J,V]=ce.useState(""),[ne,I]=ce.useState(!1);if(!t)return null;const te=async Q=>{if(Q.preventDefault(),V(""),!m||m.length<10){V("Please enter a valid 10-digit Indian mobile number");return}I(!0);try{await a(m),g(!0),v(""),I(!1)}catch(O){I(!1),V(O.message||"Unable to dispatch OTP. Please check number.")}},N=async Q=>{Q.preventDefault(),V(""),I(!0);try{const O=await o(m,d);I(!1),O?f("LICENSE"):V("Invalid or expired OTP code.")}catch(O){I(!1),V(O.message||"OTP verification failed.")}},C=async Q=>{Q.preventDefault(),V(""),I(!0);try{if(p==="EMAIL_LOGIN"){const O=await r(_,P);I(!1),O&&e()}else{const O=await s(T,_,m,P);I(!1),O&&f("LICENSE")}}catch{I(!1),V("Authentication error.")}},re=async Q=>{Q.preventDefault(),k(!0),setTimeout(async()=>{await l(H),k(!1),$(!0),setTimeout(()=>{e()},1200)},1e3)};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-md bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col",children:[c.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7] font-bold",children:"TBH"}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-base text-white",children:"Rider Authentication"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Secure Indian Identity Verification"})]})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),!n&&c.jsxs("div",{className:"grid grid-cols-2 gap-1 p-2 bg-[#0A0A0B] border-b border-white/10",children:[c.jsx("button",{onClick:()=>{f("PHONE_OTP"),V("")},className:`py-2 text-xs font-bold rounded-lg transition ${p==="PHONE_OTP"?"bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40":"text-slate-400 hover:text-white"}`,children:"Phone OTP (+91)"}),c.jsx("button",{onClick:()=>{f("EMAIL_LOGIN"),V("")},className:`py-2 text-xs font-bold rounded-lg transition ${p==="EMAIL_LOGIN"||p==="SIGNUP"?"bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40":"text-slate-400 hover:text-white"}`,children:"Email & Password"})]}),c.jsxs("div",{className:"p-6 space-y-5",children:[J&&c.jsx("div",{className:"p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs",children:J}),p==="PHONE_OTP"&&!n&&c.jsx("div",{children:y?c.jsxs("form",{onSubmit:N,className:"space-y-4",children:[c.jsxs("div",{className:"text-center pb-2",children:[c.jsxs("p",{className:"text-xs text-slate-300",children:["OTP code sent to ",c.jsxs("strong",{className:"text-white",children:["+91 ",m]})]}),c.jsx("p",{className:"text-[11px] text-[#D4AF37] mt-1 bg-[#D4AF37]/10 p-2 rounded-lg border border-[#D4AF37]/20",children:"In dev environment, check the backend server console for the secure 6-digit OTP code."})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Enter 4 or 6-digit OTP"}),c.jsx("input",{type:"text",value:d,onChange:Q=>v(Q.target.value),placeholder:"e.g. 7829",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-4 py-3 text-center text-lg font-mono font-bold tracking-widest text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsx("button",{type:"submit",disabled:ne,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:ne?"Verifying...":"Verify & Continue"})]}):c.jsxs("form",{onSubmit:te,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Mobile Number"}),c.jsxs("div",{className:"flex rounded-xl bg-[#0A0A0B] border border-white/10 focus-within:border-[#00E5C7] overflow-hidden",children:[c.jsx("span",{className:"px-3.5 py-3 text-xs font-bold text-slate-400 border-r border-white/10 flex items-center",children:"🇮🇳 +91"}),c.jsx("input",{type:"tel",value:m,onChange:Q=>x(Q.target.value),placeholder:"Enter 10-digit mobile",className:"w-full bg-transparent px-3 py-3 text-xs text-white focus:outline-none font-mono",required:!0})]})]}),c.jsxs("button",{type:"submit",disabled:ne,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsx("span",{children:ne?"Sending OTP...":"Send Verification OTP"}),c.jsx(ja,{className:"w-4 h-4"})]})]})}),(p==="EMAIL_LOGIN"||p==="SIGNUP")&&!n&&c.jsxs("form",{onSubmit:C,className:"space-y-4",children:[p==="SIGNUP"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Full Legal Name"}),c.jsx("input",{type:"text",value:T,onChange:Q=>L(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Email Address"}),c.jsx("input",{type:"email",value:_,onChange:Q=>E(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Password"}),c.jsx("input",{type:"password",value:P,onChange:Q=>A(Q.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsx("button",{type:"submit",disabled:ne,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:p==="EMAIL_LOGIN"?"Login with Email":"Create Free TBH Account"}),c.jsx("div",{className:"text-center pt-1",children:c.jsx("button",{type:"button",onClick:()=>f(p==="EMAIL_LOGIN"?"SIGNUP":"EMAIL_LOGIN"),className:"text-xs text-slate-400 hover:text-[#00E5C7]",children:p==="EMAIL_LOGIN"?"Don't have an account? Sign Up":"Already registered? Login"})})]}),(p==="LICENSE"||n)&&c.jsxs("form",{onSubmit:re,className:"space-y-4",children:[c.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#0A0A0B] border border-[#00E5C7]/30 flex items-center space-x-3",children:[c.jsx(_i,{className:"w-7 h-7 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-white",children:"Driving License & DigiLocker KYC"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Required by Indian Motor Vehicles Act for self-drive"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Driving License Number (DL)"}),c.jsx("input",{type:"text",value:H,onChange:Q=>S(Q.target.value.toUpperCase()),placeholder:"e.g. KA-01-2023-0048192",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono uppercase focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{className:"p-4 rounded-xl border-2 border-dashed border-white/15 hover:border-[#00E5C7]/50 text-center cursor-pointer bg-[#0A0A0B]/50 transition",children:[c.jsx(g1,{className:"w-8 h-8 text-[#00E5C7] mx-auto mb-1"}),c.jsx("p",{className:"text-xs font-bold text-white",children:"Upload DL Photo or Fetch via DigiLocker"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"JPG, PNG, PDF up to 5MB"})]}),G?c.jsxs("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center space-x-2",children:[c.jsx(Os,{className:"w-4 h-4"}),c.jsx("span",{children:"License Verified Successfully!"})]}):c.jsx("button",{type:"submit",disabled:w,className:"w-full py-3 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:w?"Verifying with Parivahan Gov...":"Verify License & Complete KYC"})]}),c.jsx("div",{className:"pt-2 border-t border-white/10",children:c.jsxs("button",{type:"button",onClick:()=>{u(),e()},className:"w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 transition flex items-center justify-center space-x-2",children:[c.jsx(Zl,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"One-Click Demo Rider Sign In"})]})})]})]})})},aC=({isOpen:t,onClose:e,onSelectBooking:n})=>{const{user:i}=Ql(),[r,s]=ce.useState([]),[a,o]=ce.useState(!0);ce.useEffect(()=>{t&&i&&l()},[t,i]);const l=async()=>{o(!0);const h=await Cs.getMyBookings((i==null?void 0:i.id)||1);s(h),o(!1)},u=h=>{if(confirm("Are you sure you want to cancel this booking? Refund of 100% deposit + 90% rental fee will be initiated.")){const p=r.map(f=>f.id===h?{...f,status:"CANCELLED",paymentStatus:"REFUNDED"}:f);s(p),localStorage.setItem("tbh_bookings",JSON.stringify(p))}};return t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-2xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[88vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7]",children:c.jsx(Tl,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-base text-white",children:"My Rental Passes"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Active keys & trip history"})]})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:a?c.jsx("p",{className:"text-center text-xs text-slate-400 py-8",children:"Loading your bookings..."}):r.length===0?c.jsxs("div",{className:"text-center py-12",children:[c.jsx(Tl,{className:"w-12 h-12 text-slate-600 mx-auto mb-2"}),c.jsx("p",{className:"text-sm font-bold text-white",children:"No Active Reservations"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Book your dream machine from our fleet today."})]}):r.map(h=>c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-xs font-mono font-bold text-[#00E5C7]",children:h.bookingReference}),c.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${h.status==="CONFIRMED"?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30":"bg-rose-500/10 text-rose-400 border border-rose-500/30"}`,children:h.status})]}),c.jsx("h4",{className:"text-sm font-bold text-white",children:h.vehicle.name}),c.jsxs("p",{className:"text-xs text-slate-400 flex items-center space-x-1",children:[c.jsx(Ua,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsxs("span",{children:[h.pickupHub," • ",h.duration," ",h.rentalMode.toLowerCase()]})]}),c.jsxs("p",{className:"text-xs font-mono text-white",children:["Unlock PIN: ",c.jsx("strong",{className:"text-[#D4AF37] font-bold text-sm",children:h.unlockPin})]})]}),c.jsxs("div",{className:"flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2",children:[c.jsxs("span",{className:"text-base font-extrabold font-display text-white",children:["₹",h.totalAmount.toLocaleString("en-IN")]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>n(h),className:"px-3 py-1.5 rounded-lg bg-[#00E5C7]/15 border border-[#00E5C7]/40 text-[#00E5C7] text-xs font-bold hover:bg-[#00E5C7] hover:text-black transition",children:"Digital Pass"}),h.status==="CONFIRMED"&&c.jsx("button",{onClick:()=>u(h.id),className:"px-2.5 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold hover:bg-rose-500/20 transition",children:"Cancel"})]})]})]},h.id))})]})}):null},oC=({isOpen:t,onClose:e,vehicles:n,onToggleAvailability:i})=>{if(!t)return null;const r=n.length,s=n.filter(o=>o.available).length;return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-4xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-[#00E5C7]",children:"TBH Fleet Control"}),c.jsx("h3",{className:"font-extrabold font-display text-lg text-white",children:"Central Operations & Telemetry"})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Gn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 overflow-y-auto space-y-6 flex-1",children:[c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Total Fleet"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-white mt-1",children:r}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] mt-0.5",children:"Across 8 Indian States"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Live Available"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-emerald-400 mt-1",children:s}),c.jsxs("p",{className:"text-[10px] text-slate-400 mt-0.5",children:[r-s," on live trip"]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Month Revenue"}),c.jsxs("p",{className:"text-2xl font-extrabold font-display text-[#D4AF37] mt-1",children:["₹",284500 .toLocaleString("en-IN")]}),c.jsx("p",{className:"text-[10px] text-emerald-400 mt-0.5",children:"+24.8% vs last month"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Fleet Health"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-white mt-1",children:"99.4%"}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] mt-0.5",children:"Zero Breakdown Alert"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3",children:"Fleet Inventory & Instant Availability Toggle"}),c.jsx("div",{className:"space-y-2",children:n.map(o=>c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("img",{src:o.imageUrl,alt:o.name,className:"w-12 h-10 object-cover rounded-lg"}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold text-white",children:o.name}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:[o.vehicleType," • ₹",o.pricePerHour,"/hr • ₹",o.pricePerDay,"/day"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:`text-[11px] font-bold ${o.available?"text-emerald-400":"text-rose-400"}`,children:o.available?"Available":"Reserved / Maintenance"}),c.jsx("button",{onClick:()=>i(o.id),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition ${o.available?"bg-rose-500/15 text-rose-400 hover:bg-rose-500/25":"bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"}`,children:o.available?"Mark Reserved":"Make Available"})]})]},o.id))})]})]})]})})},lC=()=>{const[t,e]=ce.useState(!1),[n,i]=ce.useState([{sender:"ai",text:"Namaste! Welcome to TBH Concierge. How can I assist your ride today?"}]),[r,s]=ce.useState(""),a=["What documents are needed to rent?","Is fuel included in the price?","How is the security deposit refunded?","Emergency Roadside Helpline"],o=l=>{const u=l||r;u.trim()&&(i(h=>[...h,{sender:"user",text:u}]),s(""),setTimeout(()=>{let h="Our team is here 24/7. Feel free to call our emergency helpline at 1800-TBH-RIDE (1800 824 7433).";const p=u.toLowerCase();p.includes("document")||p.includes("license")?h="You only need a valid Indian Driving License (or International Driving Permit for foreign nationals) and Aadhaar/Passport verification.":p.includes("fuel")?h="Petrol/Diesel vehicles are provided with sufficient fuel to reach the next station; return at same fuel level. EV rides include 100% full charge with access to fast charging grids!":p.includes("deposit")||p.includes("refund")?h="Security deposits are 100% refundable and automatically released back to your original payment method within 2 to 4 hours after vehicle check-in.":(p.includes("emergency")||p.includes("helpline"))&&(h="Emergency Roadside Assistance is active 24/7 across all Indian highways. Toll-Free SOS: 1800-TBH-RIDE (1800 824 7433)."),i(f=>[...f,{sender:"ai",text:h}])},600))};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{onClick:()=>e(!t),className:"fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black shadow-teal-glow hover:scale-105 transition-all flex items-center justify-center",title:"TBH 24/7 Concierge & SOS",children:[c.jsx(w1,{className:"w-6 h-6 stroke-[2.5]"}),c.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black animate-ping"})]}),t&&c.jsxs("div",{className:"fixed bottom-20 right-6 z-50 w-96 max-w-[90vw] h-[480px] bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 duration-200",children:[c.jsxs("div",{className:"p-4 bg-gradient-to-r from-[#141416] to-[#1E1E24] border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-[#00E5C7]/20 border border-[#00E5C7]/50 flex items-center justify-center text-[#00E5C7]",children:c.jsx(Zl,{className:"w-4 h-4"})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-white",children:"TBH Concierge — Demo AI Assistant"}),c.jsxs("p",{className:"text-[10px] text-emerald-400 flex items-center space-x-1",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),c.jsx("span",{children:"24/7 Virtual Assistant & Roadside SOS"})]})]})]}),c.jsx("button",{onClick:()=>e(!1),className:"p-1 rounded-lg text-slate-400 hover:text-white",children:c.jsx(Gn,{className:"w-4 h-4"})})]}),c.jsx("div",{className:"flex-1 p-4 overflow-y-auto space-y-3",children:n.map((l,u)=>c.jsx("div",{className:`flex ${l.sender==="user"?"justify-end":"justify-start"}`,children:c.jsx("div",{className:`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${l.sender==="user"?"bg-[#00E5C7] text-black font-semibold rounded-tr-none":"bg-[#0A0A0B] border border-white/10 text-slate-200 rounded-tl-none"}`,children:l.text})},u))}),c.jsx("div",{className:"p-2 bg-[#0A0A0B] border-t border-white/5 flex gap-1.5 overflow-x-auto",children:a.map((l,u)=>c.jsx("button",{onClick:()=>o(l),className:"whitespace-nowrap px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-slate-300 transition",children:l},u))}),c.jsxs("div",{className:"p-3 bg-[#141416] border-t border-white/10 flex items-center space-x-2",children:[c.jsx("input",{type:"text",value:r,onChange:l=>s(l.target.value),onKeyDown:l=>l.key==="Enter"&&o(),placeholder:"Ask about deposits, helplines, hubs...",className:"flex-1 bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]"}),c.jsx("button",{onClick:()=>o(),className:"p-2 rounded-xl bg-[#00E5C7] text-black hover:opacity-90 transition",children:c.jsx(C1,{className:"w-4 h-4"})})]})]})]})},cC=()=>c.jsx("footer",{className:"w-full bg-[#0A0A0B] border-t border-white/10 pt-16 pb-12",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#141416] to-[#0A0A0B] border border-[#00E5C7]/40 flex items-center justify-center",children:c.jsx("span",{className:"font-display font-extrabold text-[#00E5C7] text-lg",children:"T"})}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xl font-extrabold text-white font-display",children:"TBH"}),c.jsx("p",{className:"text-[10px] tracking-widest uppercase text-slate-400 font-semibold",children:"Ride Beyond Limits"})]})]}),c.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"India's foremost luxury bike and car rental platform. Seamless 3D vehicle visualization, transparent hourly INR rates, and pan-India airport hubs."}),c.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300",children:[c.jsx(T1,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("span",{children:["SOS Helpline: ",c.jsx("strong",{children:"1800-TBH-RIDE"})]})]})]}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-[#00E5C7] mb-3",children:"Key Indian Cities"}),c.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-400",children:[c.jsx("li",{children:"Bengaluru (BLR Airport & Koramangala)"}),c.jsx("li",{children:"Hyderabad (HYD Airport & Hitech City)"}),c.jsx("li",{children:"Mumbai (BOM Airport & BKC)"}),c.jsx("li",{children:"Delhi NCR (DEL Airport & Cyber Hub)"}),c.jsx("li",{children:"Chennai (MAA Airport & OMR)"}),c.jsx("li",{children:"Goa (Mopa GOX, Dabolim & Calangute)"}),c.jsx("li",{children:"Pune & Jaipur Hubs"})]})]}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3",children:"Fleet Portfolio"}),c.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-400",children:[c.jsx("li",{children:"Royal Enfield Classic & Hunter 350"}),c.jsx("li",{children:"KTM Duke 390 & Yamaha MT-15 V2"}),c.jsx("li",{children:"Honda Activa 6G & TVS Jupiter 125"}),c.jsx("li",{children:"Ola S1 Pro & Ather 450X EV"}),c.jsx("li",{children:"Ultraviolette F77 Mach 2 Superbike"}),c.jsx("li",{children:"Mahindra Thar 4x4 & Toyota Fortuner"}),c.jsx("li",{children:"Tata Nexon EV Max & Swift Dzire"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-white mb-3",children:"Safety & Trust"}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416] border border-white/10 space-y-1.5 text-xs text-slate-300",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(_i,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{className:"font-semibold",children:"Parivahan Approved"})]}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"All self-drive vehicles registered with commercial yellow plates and comprehensive insurance."})]}),c.jsx("p",{className:"text-[10px] text-slate-500",children:"Protected by Razorpay 256-Bit SSL Payment Shield."})]})]}),c.jsxs("div",{className:"pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[c.jsx("p",{children:"© 2026 TBH Mobility Technologies Pvt. Ltd. All rights reserved."}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Rental Terms"}),c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Damage Policy"}),c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Privacy"}),c.jsxs("span",{className:"text-[#00E5C7] flex items-center space-x-1",children:[c.jsx("span",{children:"Made with pride in India"}),c.jsx(fx,{className:"w-3 h-3 fill-[#00E5C7]"})]})]})]})]})}),uC=()=>{const{t}=ec(),[e,n]=ce.useState(Bx),[i,r]=ce.useState("Bengaluru"),[s,a]=ce.useState(dd),[o,l]=ce.useState("HOURLY"),[u,h]=ce.useState("ALL"),[p,f]=ce.useState("ALL"),[m,x]=ce.useState(""),[y,g]=ce.useState("POPULAR"),[d,v]=ce.useState(null),[_,E]=ce.useState(null),[P,A]=ce.useState(null),[T,L]=ce.useState(null),[H,S]=ce.useState([]),[w,k]=ce.useState(!1),[G,$]=ce.useState(!1),[J,V]=ce.useState(!1),[ne,I]=ce.useState(!1),[te,N]=ce.useState([]);ce.useEffect(()=>{C()},[i]);const C=async()=>{const B=await Cs.getCities();B&&B.length>0&&n(B);const W=await Cs.getVehicles(i);W&&W.length>0&&a(W)},re=B=>{if(H.some(W=>W.id===B.id))S(H.filter(W=>W.id!==B.id));else{if(H.length>=3){alert("You can compare up to 3 vehicles at a time.");return}S([...H,B])}},Q=B=>{te.includes(B)?N(te.filter(W=>W!==B)):N([...te,B])},O=B=>{a(W=>W.map(oe=>oe.id===B?{...oe,available:!oe.available}:oe))},K=s.filter(B=>{if(u!=="ALL"&&B.vehicleType!==u||p!=="ALL"&&B.fuelType!==p)return!1;if(m.trim()){const W=m.toLowerCase(),oe=B.name.toLowerCase().includes(W),he=B.brand.toLowerCase().includes(W),be=B.model.toLowerCase().includes(W);if(!oe&&!he&&!be)return!1}return!0}).sort((B,W)=>{const oe=o==="HOURLY"?B.pricePerHour:o==="DAILY"?B.pricePerDay:B.pricePerMonth,he=o==="HOURLY"?W.pricePerHour:o==="DAILY"?W.pricePerDay:W.pricePerMonth;return y==="PRICE_ASC"?oe-he:y==="PRICE_DESC"?he-oe:y==="SPEED"?W.maxSpeed-B.maxSpeed:W.rating-B.rating});return c.jsxs("div",{className:"min-h-screen bg-[#0A0A0B] text-white flex flex-col justify-between selection:bg-[#00E5C7] selection:text-black",children:[c.jsx(k1,{cities:e,selectedCity:i,onSelectCity:B=>r(B),compareCount:H.length,onOpenCompare:()=>k(!0),onOpenBookings:()=>V(!0),onOpenAuth:()=>$(!0),onOpenAdmin:()=>I(!0)}),c.jsx(O1,{cities:e,selectedCity:i,onSelectCity:B=>r(B),onSearch:(B,W,oe)=>{r(B),l(oe);const he=document.getElementById("fleet-explorer");he&&he.scrollIntoView({behavior:"smooth"})},onOpenFirst3D:()=>v(s[2]||s[0])}),c.jsxs("main",{id:"fleet-explorer",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10",children:[c.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center space-x-2 text-[11px] font-bold text-[#00E5C7] uppercase tracking-widest mb-1",children:[c.jsx(Zl,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Full India Rental Fleet"})]}),c.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold font-display text-white",children:["Available Machines in ",i]}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"From Royal Enfield thump to KTM adrenaline, Activa ease to Thar 4x4 dominance."})]}),c.jsx("div",{className:"flex items-center space-x-1 bg-[#141416] p-1.5 rounded-2xl border border-white/10",children:["HOURLY","DAILY","MONTHLY"].map(B=>c.jsx("button",{onClick:()=>l(B),className:`px-4 py-2 text-xs font-bold rounded-xl transition ${o===B?"bg-[#00E5C7] text-black shadow-teal-glow":"text-slate-400 hover:text-white"}`,children:t(B==="HOURLY"?"hourly":B==="DAILY"?"daily":"monthly")},B))})]}),c.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none",children:[{id:"ALL",label:"All Fleet"},{id:"BIKE",label:"Superbikes & Cruisers"},{id:"SCOOTER",label:"Scooters / Scooties"},{id:"ELECTRIC_BIKE",label:"Electric Velocity (EV)"},{id:"PETROL_CAR",label:"Petrol Cars"},{id:"DIESEL_CAR",label:"Diesel & 4x4 SUVs"},{id:"ELECTRIC_CAR",label:"Electric Cars"}].map(B=>c.jsx("button",{onClick:()=>h(B.id),className:`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold border transition ${u===B.id?"bg-white text-black border-white shadow-lg":"bg-[#141416] border-white/10 text-slate-300 hover:border-white/20"}`,children:B.label},B.id))}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141416] p-4 rounded-2xl border border-white/10",children:[c.jsxs("div",{className:"relative w-full sm:w-80",children:[c.jsx("input",{type:"text",value:m,onChange:B=>x(B.target.value),placeholder:"Search by brand, bike or car model...",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5C7]"}),c.jsx(Cx,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"})]}),c.jsxs("div",{className:"flex items-center space-x-3 w-full sm:w-auto",children:[c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Fuel:"}),c.jsxs("select",{value:p,onChange:B=>f(B.target.value),className:"bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]",children:[c.jsx("option",{value:"ALL",children:"All Fuel Types"}),c.jsx("option",{value:"PETROL",children:"Petrol Only"}),c.jsx("option",{value:"DIESEL",children:"Diesel Only"}),c.jsx("option",{value:"ELECTRIC",children:"Electric (EV)"})]})]}),c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Sort:"}),c.jsxs("select",{value:y,onChange:B=>g(B.target.value),className:"bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]",children:[c.jsx("option",{value:"POPULAR",children:"Most Popular"}),c.jsx("option",{value:"SPEED",children:"Top Speed (Fastest)"}),c.jsx("option",{value:"PRICE_ASC",children:"Price: Low to High"}),c.jsx("option",{value:"PRICE_DESC",children:"Price: High to Low"})]})]})]})]}),K.length===0?c.jsxs("div",{className:"text-center py-20 bg-[#141416]/50 rounded-3xl border border-white/10",children:[c.jsx(_1,{className:"w-10 h-10 text-slate-600 mx-auto mb-2"}),c.jsx("p",{className:"text-base font-bold text-white",children:"No vehicles found matching current filters"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Try resetting category or search criteria."}),c.jsx("button",{onClick:()=>{h("ALL"),f("ALL"),x("")},className:"mt-4 px-4 py-2 rounded-xl bg-[#00E5C7] text-black font-bold text-xs",children:"Reset All Filters"})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:K.map(B=>c.jsx(F1,{vehicle:B,durationMode:o,onOpen3D:W=>{W.assetType==="GLB"?v(W):E(W)},onOpenGallery:W=>E(W),onQuickBook:W=>A(W),onToggleCompare:re,isCompared:H.some(W=>W.id===B.id),isWishlisted:te.includes(B.id),onToggleWishlist:Q},B.id))})]}),c.jsx(lC,{}),c.jsx(cC,{}),c.jsx(QT,{vehicle:d,onClose:()=>v(null),onBookNow:B=>{v(null),A(B)}}),c.jsx(eC,{vehicle:_,isOpen:!!_,onClose:()=>E(null),onBook:B=>{E(null),A(B)}}),c.jsx(nC,{vehicle:P,cities:e,selectedCity:i,onClose:()=>A(null),onBookingSuccess:B=>{A(null),L(B)}}),c.jsx(iC,{booking:T,onClose:()=>L(null)}),c.jsx(rC,{vehicles:H,onRemove:B=>S(H.filter(W=>W.id!==B)),onClose:()=>k(!1),onBook:B=>{k(!1),A(B)}}),c.jsx(sC,{isOpen:G,onClose:()=>$(!1)}),c.jsx(aC,{isOpen:J,onClose:()=>V(!1),onSelectBooking:B=>L(B)}),c.jsx(oC,{isOpen:ne,onClose:()=>I(!1),vehicles:s,onToggleAvailability:O})]})},dC=()=>c.jsx(U1,{children:c.jsx(I1,{children:c.jsx(uC,{})})});xu.createRoot(document.getElementById("root")).render(c.jsx(Wv.StrictMode,{children:c.jsx(dC,{})}));

var xv=Object.defineProperty;var vv=(t,e,n)=>e in t?xv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tr=(t,e,n)=>vv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nm={exports:{}},Ll={},Pm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),yv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Ev=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),bv=Symbol.for("react.context"),Tv=Symbol.for("react.forward_ref"),Av=Symbol.for("react.suspense"),Cv=Symbol.for("react.memo"),Rv=Symbol.for("react.lazy"),gf=Symbol.iterator;function Nv(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var Lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Im={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Lm}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Um(){}Um.prototype=Ns.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Lm}var Kd=$d.prototype=new Um;Kd.constructor=$d;Dm(Kd,Ns.prototype);Kd.isPureReactComponent=!0;var xf=Array.isArray,km=Object.prototype.hasOwnProperty,Zd={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,i)&&!Fm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:Zd.current}}function Pv(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function Lv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vf=/\/+/g;function lc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Lv(""+t.key):e.toString(36)}function Do(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case yv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+lc(a,0):i,xf(r)?(n="",t!=null&&(n=t.replace(vf,"$&/")+"/"),Do(r,e,n,"",function(u){return u})):r!=null&&(Jd(r)&&(r=Pv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(vf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",xf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+lc(s,o);a+=Do(s,e,n,l,r)}else if(l=Nv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+lc(s,o++),a+=Do(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Do(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Dv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Io={transition:null},Iv={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Io,ReactCurrentOwner:Zd};function Bm(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ns;Ye.Fragment=Sv;Ye.Profiler=Ev;Ye.PureComponent=$d;Ye.StrictMode=Mv;Ye.Suspense=Av;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;Ye.act=Bm;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)km.call(e,l)&&!Fm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:bv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};Ye.createElement=Om;Ye.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Tv,render:t}};Ye.isValidElement=Jd;Ye.lazy=function(t){return{$$typeof:Rv,_payload:{_status:-1,_result:t},_init:Dv}};Ye.memo=function(t,e){return{$$typeof:Cv,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Io.transition;Io.transition={};try{t()}finally{Io.transition=e}};Ye.unstable_act=Bm;Ye.useCallback=function(t,e){return qt.current.useCallback(t,e)};Ye.useContext=function(t){return qt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return qt.current.useEffect(t,e)};Ye.useId=function(){return qt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return qt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Ye.useRef=function(t){return qt.current.useRef(t)};Ye.useState=function(t){return qt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return qt.current.useTransition()};Ye.version="18.3.1";Pm.exports=Ye;var ce=Pm.exports;const Uv=_v(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=ce,Fv=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),Bv=Object.prototype.hasOwnProperty,zv=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Hv={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Bv.call(e,i)&&!Hv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Fv,type:t,key:s,ref:a,props:r,_owner:zv.current}}Ll.Fragment=Ov;Ll.jsx=zm;Ll.jsxs=zm;Nm.exports=Ll;var c=Nm.exports,mu={},Hm={exports:{}},mn={},jm={exports:{}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,ee){var A=U.length;U.push(ee);e:for(;0<A;){var C=A-1>>>1,ie=U[C];if(0<r(ie,ee))U[C]=ee,U[A]=ie,A=C;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],A=U.pop();if(A!==ee){U[0]=A;e:for(var C=0,ie=U.length,se=ie>>>1;C<se;){var P=2*(C+1)-1,j=U[P],te=P+1,Z=U[te];if(0>r(j,A))te<ie&&0>r(Z,j)?(U[C]=Z,U[te]=A,C=te):(U[C]=j,U[P]=A,C=P);else if(te<ie&&0>r(Z,A))U[C]=Z,U[te]=A,C=te;else break e}}return ee}function r(U,ee){var A=U.sortIndex-ee.sortIndex;return A!==0?A:U.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,f=null,p=3,g=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var ee=n(u);ee!==null;){if(ee.callback===null)i(u);else if(ee.startTime<=U)i(u),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(u)}}function M(U){if(y=!1,_(U),!v)if(n(l)!==null)v=!0,H(L);else{var ee=n(u);ee!==null&&Q(M,ee.startTime-U)}}function L(U,ee){v=!1,y&&(y=!1,d(D),D=-1),g=!0;var A=p;try{for(_(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||U&&!w());){var C=f.callback;if(typeof C=="function"){f.callback=null,p=f.priorityLevel;var ie=C(f.expirationTime<=ee);ee=t.unstable_now(),typeof ie=="function"?f.callback=ie:f===n(l)&&i(l),_(ee)}else i(l);f=n(l)}if(f!==null)var se=!0;else{var P=n(u);P!==null&&Q(M,P.startTime-ee),se=!1}return se}finally{f=null,p=A,g=!1}}var N=!1,T=null,D=-1,W=5,S=-1;function w(){return!(t.unstable_now()-S<W)}function F(){if(T!==null){var U=t.unstable_now();S=U;var ee=!0;try{ee=T(!0,U)}finally{ee?V():(N=!1,T=null)}}else N=!1}var V;if(typeof x=="function")V=function(){x(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,K=q.port2;q.port1.onmessage=F,V=function(){K.postMessage(null)}}else V=function(){m(F,0)};function H(U){T=U,N||(N=!0,V())}function Q(U,ee){D=m(function(){U(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,H(L))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var A=p;p=ee;try{return U()}finally{p=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var A=p;p=U;try{return ee()}finally{p=A}},t.unstable_scheduleCallback=function(U,ee,A){var C=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?C+A:C):A=C,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=A+ie,U={id:h++,callback:ee,priorityLevel:U,startTime:A,expirationTime:ie,sortIndex:-1},A>C?(U.sortIndex=A,e(u,U),n(l)===null&&U===n(u)&&(y?(d(D),D=-1):y=!0,Q(M,A-C))):(U.sortIndex=ie,e(l,U),v||g||(v=!0,H(L))),U},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(U){var ee=p;return function(){var A=p;p=ee;try{return U.apply(this,arguments)}finally{p=A}}}})(Vm);jm.exports=Vm;var jv=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv=ce,pn=jv;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,ma={};function Nr(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ma[t]=e,t=0;t<e.length;t++)Gm.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,Gv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},yf={};function Wv(t){return gu.call(yf,t)?!0:gu.call(_f,t)?!1:Gv.test(t)?yf[t]=!0:(_f[t]=!0,!1)}function Xv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yv(t,e,n,i){if(e===null||typeof e>"u"||Xv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,eh);Ft[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,eh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,eh);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function th(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yv(e,n,r,i)&&(n=null),i||r===null?Wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=Vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Kr=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Xm=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),vu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),rh=Symbol.for("react.memo"),Ai=Symbol.for("react.lazy"),Ym=Symbol.for("react.offscreen"),Sf=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,cc;function Qs(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var uc=!1;function dc(t,e){if(!t||uc)return"";uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function qv(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Kr:return"Fragment";case $r:return"Portal";case xu:return"Profiler";case nh:return"StrictMode";case vu:return"Suspense";case _u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xm:return(t.displayName||"Context")+".Consumer";case Wm:return(t._context.displayName||"Context")+".Provider";case ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rh:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case Ai:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Kv(t){var e=qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=Kv(t))}function $m(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Su(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Km(t,e){e=e.checked,e!=null&&th(t,"checked",e,!1)}function Mu(t,e){Km(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ef(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||Jo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(ea(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function Zm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zv=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){Zv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function e0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function t0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=e0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Jv=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(t,e){if(e){if(Jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ru=null,cs=null,us=null;function Tf(t){if(t=Fa(t)){if(typeof Ru!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Fl(e),Ru(t.stateNode,t.type,e))}}function n0(t){cs?us?us.push(t):us=[t]:cs=t}function i0(){if(cs){var t=cs,e=us;if(us=cs=null,Tf(t),e)for(t=0;t<e.length;t++)Tf(e[t])}}function r0(t,e){return t(e)}function s0(){}var hc=!1;function a0(t,e,n){if(hc)return t(e,n);hc=!0;try{return r0(t,e,n)}finally{hc=!1,(cs!==null||us!==null)&&(s0(),i0())}}function xa(t,e){var n=t.stateNode;if(n===null)return null;var i=Fl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Nu=!1;if(fi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Nu=!1}function Qv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var aa=!1,Qo=null,el=!1,Pu=null,e_={onError:function(t){aa=!0,Qo=t}};function t_(t,e,n,i,r,s,a,o,l){aa=!1,Qo=null,Qv.apply(e_,arguments)}function n_(t,e,n,i,r,s,a,o,l){if(t_.apply(this,arguments),aa){if(aa){var u=Qo;aa=!1,Qo=null}else throw Error(le(198));el||(el=!0,Pu=u)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Af(t){if(Pr(t)!==t)throw Error(le(188))}function i_(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Af(r),t;if(s===i)return Af(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function l0(t){return t=i_(t),t!==null?c0(t):null}function c0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=c0(t);if(e!==null)return e;t=t.sibling}return null}var u0=pn.unstable_scheduleCallback,Cf=pn.unstable_cancelCallback,r_=pn.unstable_shouldYield,s_=pn.unstable_requestPaint,Mt=pn.unstable_now,a_=pn.unstable_getCurrentPriorityLevel,ah=pn.unstable_ImmediatePriority,d0=pn.unstable_UserBlockingPriority,tl=pn.unstable_NormalPriority,o_=pn.unstable_LowPriority,h0=pn.unstable_IdlePriority,Dl=null,qn=null;function l_(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:d_,c_=Math.log,u_=Math.LN2;function d_(t){return t>>>=0,t===0?32:31-(c_(t)/u_|0)|0}var Ka=64,Za=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ta(o):(s&=a,s!==0&&(i=ta(s)))}else a=n&~r,a!==0?i=ta(a):s!==0&&(i=ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function h_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=h_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Lu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f0(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function p_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function p0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,lh,g0,x0,v0,Du=!1,Ja=[],ki=null,Fi=null,Oi=null,va=new Map,_a=new Map,Ni=[],m_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&lh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function g_(t,e,n,i,r){switch(e){case"focusin":return ki=Os(ki,t,e,n,i,r),!0;case"dragenter":return Fi=Os(Fi,t,e,n,i,r),!0;case"mouseover":return Oi=Os(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,Os(va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,Os(_a.get(s)||null,t,e,n,i,r)),!0}return!1}function _0(t){var e=mr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=o0(n),e!==null){t.blockedOn=e,v0(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Iu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cu=i,n.target.dispatchEvent(i),Cu=null}else return e=Fa(n),e!==null&&lh(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){Uo(t)&&n.delete(e)}function x_(){Du=!1,ki!==null&&Uo(ki)&&(ki=null),Fi!==null&&Uo(Fi)&&(Fi=null),Oi!==null&&Uo(Oi)&&(Oi=null),va.forEach(Nf),_a.forEach(Nf)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Du||(Du=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,x_)))}function ya(t){function e(r){return Bs(r,t)}if(0<Ja.length){Bs(Ja[0],t);for(var n=1;n<Ja.length;n++){var i=Ja[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Bs(ki,t),Fi!==null&&Bs(Fi,t),Oi!==null&&Bs(Oi,t),va.forEach(e),_a.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&Ni.shift()}var ds=vi.ReactCurrentBatchConfig,il=!0;function v_(t,e,n,i){var r=rt,s=ds.transition;ds.transition=null;try{rt=1,ch(t,e,n,i)}finally{rt=r,ds.transition=s}}function __(t,e,n,i){var r=rt,s=ds.transition;ds.transition=null;try{rt=4,ch(t,e,n,i)}finally{rt=r,ds.transition=s}}function ch(t,e,n,i){if(il){var r=Iu(t,e,n,i);if(r===null)Ec(t,e,i,rl,n),Rf(t,i);else if(g_(r,t,e,n,i))i.stopPropagation();else if(Rf(t,i),e&4&&-1<m_.indexOf(t)){for(;r!==null;){var s=Fa(r);if(s!==null&&m0(s),s=Iu(t,e,n,i),s===null&&Ec(t,e,i,rl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ec(t,e,i,null,n)}}var rl=null;function Iu(t,e,n,i){if(rl=null,t=sh(i),t=mr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rl=t,null}function y0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(a_()){case ah:return 1;case d0:return 4;case tl:case o_:return 16;case h0:return 536870912;default:return 16}default:return 16}}var Di=null,uh=null,ko=null;function S0(){if(ko)return ko;var t,e=uh,n=e.length,i,r="value"in Di?Di.value:Di.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return ko=r.slice(t,1<i?1-i:void 0)}function Fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function Pf(){return!1}function gn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:Pf,this.isPropagationStopped=Pf,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=gn(Ps),ka=vt({},Ps,{view:0,detail:0}),y_=gn(ka),pc,mc,zs,Il=vt({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(pc=t.screenX-zs.screenX,mc=t.screenY-zs.screenY):mc=pc=0,zs=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:mc}}),Lf=gn(Il),S_=vt({},Il,{dataTransfer:0}),M_=gn(S_),E_=vt({},ka,{relatedTarget:0}),gc=gn(E_),w_=vt({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),b_=gn(w_),T_=vt({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A_=gn(T_),C_=vt({},Ps,{data:0}),Df=gn(C_),R_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=P_[t])?!!e[t]:!1}function hh(){return L_}var D_=vt({},ka,{key:function(t){if(t.key){var e=R_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=gn(D_),U_=vt({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=gn(U_),k_=vt({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),F_=gn(k_),O_=vt({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=gn(O_),z_=vt({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),H_=gn(z_),j_=[9,13,27,32],fh=fi&&"CompositionEvent"in window,oa=null;fi&&"documentMode"in document&&(oa=document.documentMode);var V_=fi&&"TextEvent"in window&&!oa,M0=fi&&(!fh||oa&&8<oa&&11>=oa),Uf=" ",kf=!1;function E0(t,e){switch(t){case"keyup":return j_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function G_(t,e){switch(t){case"compositionend":return w0(e);case"keypress":return e.which!==32?null:(kf=!0,Uf);case"textInput":return t=e.data,t===Uf&&kf?null:t;default:return null}}function W_(t,e){if(Zr)return t==="compositionend"||!fh&&E0(t,e)?(t=S0(),ko=uh=Di=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M0&&e.locale!=="ko"?null:e.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X_[t.type]:e==="textarea"}function b0(t,e,n,i){n0(i),e=sl(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var la=null,Sa=null;function Y_(t){k0(t,0)}function Ul(t){var e=es(t);if($m(e))return t}function q_(t,e){if(t==="change")return e}var T0=!1;if(fi){var xc;if(fi){var vc="oninput"in document;if(!vc){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),vc=typeof Of.oninput=="function"}xc=vc}else xc=!1;T0=xc&&(!document.documentMode||9<document.documentMode)}function Bf(){la&&(la.detachEvent("onpropertychange",A0),Sa=la=null)}function A0(t){if(t.propertyName==="value"&&Ul(Sa)){var e=[];b0(e,Sa,t,sh(t)),a0(Y_,e)}}function $_(t,e,n){t==="focusin"?(Bf(),la=e,Sa=n,la.attachEvent("onpropertychange",A0)):t==="focusout"&&Bf()}function K_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(Sa)}function Z_(t,e){if(t==="click")return Ul(e)}function J_(t,e){if(t==="input"||t==="change")return Ul(e)}function Q_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:Q_;function Ma(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gu.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,e){var n=zf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zf(n)}}function C0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=Jo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jo(t.document)}return e}function ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ey(t){var e=R0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C0(n.ownerDocument.documentElement,n)){if(i!==null&&ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hf(n,s);var a=Hf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ty=fi&&"documentMode"in document&&11>=document.documentMode,Jr=null,Uu=null,ca=null,ku=!1;function jf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ku||Jr==null||Jr!==Jo(i)||(i=Jr,"selectionStart"in i&&ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Ma(ca,i)||(ca=i,i=sl(Uu,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Jr)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},_c={},N0={};fi&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function kl(t){if(_c[t])return _c[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N0)return _c[t]=e[n];return t}var P0=kl("animationend"),L0=kl("animationiteration"),D0=kl("animationstart"),I0=kl("transitionend"),U0=new Map,Vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){U0.set(t,e),Nr(e,[t])}for(var yc=0;yc<Vf.length;yc++){var Sc=Vf[yc],ny=Sc.toLowerCase(),iy=Sc[0].toUpperCase()+Sc.slice(1);Ki(ny,"on"+iy)}Ki(P0,"onAnimationEnd");Ki(L0,"onAnimationIteration");Ki(D0,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(I0,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Gf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,n_(i,e,void 0,t),t.currentTarget=null}function k0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Gf(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Gf(r,o,u),s=l}}}if(el)throw t=Pu,el=!1,Pu=null,t}function ut(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var i=t+"__bubble";n.has(i)||(F0(e,t,2,!1),n.add(i))}function Mc(t,e,n){var i=0;e&&(i|=4),F0(n,t,i,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[to]){t[to]=!0,Gm.forEach(function(n){n!=="selectionchange"&&(ry.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,Mc("selectionchange",!1,e))}}function F0(t,e,n,i){switch(y0(e)){case 1:var r=v_;break;case 4:r=__;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ec(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}a0(function(){var u=s,h=sh(n),f=[];e:{var p=U0.get(t);if(p!==void 0){var g=dh,v=t;switch(t){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":g=I_;break;case"focusin":v="focus",g=gc;break;case"focusout":v="blur",g=gc;break;case"beforeblur":case"afterblur":g=gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=M_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=F_;break;case P0:case L0:case D0:g=b_;break;case I0:g=B_;break;case"scroll":g=y_;break;case"wheel":g=H_;break;case"copy":case"cut":case"paste":g=A_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=If}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?p!==null?p+"Capture":null:p;y=[];for(var x=u,_;x!==null;){_=x;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,d!==null&&(M=xa(x,d),M!=null&&y.push(wa(x,M,_)))),m)break;x=x.return}0<y.length&&(p=new g(p,v,null,n,h),f.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==Cu&&(v=n.relatedTarget||n.fromElement)&&(mr(v)||v[pi]))break e;if((g||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?mr(v):null,v!==null&&(m=Pr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Lf,M="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=If,M="onPointerLeave",d="onPointerEnter",x="pointer"),m=g==null?p:es(g),_=v==null?p:es(v),p=new y(M,x+"leave",g,n,h),p.target=m,p.relatedTarget=_,M=null,mr(h)===u&&(y=new y(d,x+"enter",v,n,h),y.target=_,y.relatedTarget=m,M=y),m=M,g&&v)t:{for(y=g,d=v,x=0,_=y;_;_=Dr(_))x++;for(_=0,M=d;M;M=Dr(M))_++;for(;0<x-_;)y=Dr(y),x--;for(;0<_-x;)d=Dr(d),_--;for(;x--;){if(y===d||d!==null&&y===d.alternate)break t;y=Dr(y),d=Dr(d)}y=null}else y=null;g!==null&&Wf(f,p,g,y,!1),v!==null&&m!==null&&Wf(f,m,v,y,!0)}}e:{if(p=u?es(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var L=q_;else if(Ff(p))if(T0)L=J_;else{L=K_;var N=$_}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=Z_);if(L&&(L=L(t,u))){b0(f,L,n,h);break e}N&&N(t,p,u),t==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&Eu(p,"number",p.value)}switch(N=u?es(u):window,t){case"focusin":(Ff(N)||N.contentEditable==="true")&&(Jr=N,Uu=u,ca=null);break;case"focusout":ca=Uu=Jr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,jf(f,n,h);break;case"selectionchange":if(ty)break;case"keydown":case"keyup":jf(f,n,h)}var T;if(fh)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Zr?E0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(M0&&n.locale!=="ko"&&(Zr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Zr&&(T=S0()):(Di=h,uh="value"in Di?Di.value:Di.textContent,Zr=!0)),N=sl(u,D),0<N.length&&(D=new Df(D,t,null,n,h),f.push({event:D,listeners:N}),T?D.data=T:(T=w0(n),T!==null&&(D.data=T)))),(T=V_?G_(t,n):W_(t,n))&&(u=sl(u,"onBeforeInput"),0<u.length&&(h=new Df("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=T))}k0(f,e)})}function wa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=xa(t,n),s!=null&&i.unshift(wa(t,s,r)),s=xa(t,e),s!=null&&i.push(wa(t,s,r))),t=t.return}return i}function Dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=xa(n,s),l!=null&&a.unshift(wa(n,l,o))):r||(l=xa(n,s),l!=null&&a.push(wa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var sy=/\r\n?/g,ay=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(sy,`
`).replace(ay,"")}function no(t,e,n){if(e=Xf(e),Xf(t)!==e&&n)throw Error(le(425))}function al(){}var Fu=null,Ou=null;function Bu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,oy=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(t){return Yf.resolve(null).then(t).catch(cy)}:zu;function cy(t){setTimeout(function(){throw t})}function wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ls,ba="__reactProps$"+Ls,pi="__reactContainer$"+Ls,Hu="__reactEvents$"+Ls,uy="__reactListeners$"+Ls,dy="__reactHandles$"+Ls;function mr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qf(t);t!==null;){if(n=t[Xn])return n;t=qf(t)}return e}t=n,n=t.parentNode}return null}function Fa(t){return t=t[Xn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Fl(t){return t[ba]||null}var ju=[],ts=-1;function Zi(t){return{current:t}}function ht(t){0>ts||(t.current=ju[ts],ju[ts]=null,ts--)}function lt(t,e){ts++,ju[ts]=t.current,t.current=e}var Yi={},Vt=Zi(Yi),tn=Zi(!1),Mr=Yi;function vs(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function ol(){ht(tn),ht(Vt)}function $f(t,e,n){if(Vt.current!==Yi)throw Error(le(168));lt(Vt,e),lt(tn,n)}function O0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,$v(t)||"Unknown",r));return vt({},n,i)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Mr=Vt.current,lt(Vt,t),lt(tn,tn.current),!0}function Kf(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=O0(t,e,Mr),i.__reactInternalMemoizedMergedChildContext=t,ht(tn),ht(Vt),lt(Vt,t)):ht(tn),lt(tn,n)}var oi=null,Ol=!1,bc=!1;function B0(t){oi===null?oi=[t]:oi.push(t)}function hy(t){Ol=!0,B0(t)}function Ji(){if(!bc&&oi!==null){bc=!0;var t=0,e=rt;try{var n=oi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Ol=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),u0(ah,Ji),r}finally{rt=e,bc=!1}}return null}var ns=[],is=0,cl=null,ul=0,yn=[],Sn=0,Er=null,li=1,ci="";function cr(t,e){ns[is++]=ul,ns[is++]=cl,cl=t,ul=e}function z0(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Er,Er=t;var i=li;t=ci;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Bn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function mh(t){t.return!==null&&(cr(t,1),z0(t,1,0))}function gh(t){for(;t===cl;)cl=ns[--is],ns[is]=null,ul=ns[--is],ns[is]=null;for(;t===Er;)Er=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var fn=null,hn=null,ft=!1,In=null;function H0(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,hn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Er!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,hn=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(ft){var e=hn;if(e){var n=e;if(!Zf(t,e)){if(Vu(t))throw Error(le(418));e=Bi(n.nextSibling);var i=fn;e&&Zf(t,e)?H0(i,n):(t.flags=t.flags&-4097|2,ft=!1,fn=t)}}else{if(Vu(t))throw Error(le(418));t.flags=t.flags&-4097|2,ft=!1,fn=t}}}function Jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function io(t){if(t!==fn)return!1;if(!ft)return Jf(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bu(t.type,t.memoizedProps)),e&&(e=hn)){if(Vu(t))throw j0(),Error(le(418));for(;e;)H0(t,e),e=Bi(e.nextSibling)}if(Jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=fn?Bi(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=hn;t;)t=Bi(t.nextSibling)}function _s(){hn=fn=null,ft=!1}function xh(t){In===null?In=[t]:In.push(t)}var fy=vi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qf(t){var e=t._init;return e(t._payload)}function V0(t){function e(d,x){if(t){var _=d.deletions;_===null?(d.deletions=[x],d.flags|=16):_.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=Vi(d,x),d.index=0,d.sibling=null,d}function s(d,x,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<x?(d.flags|=2,x):_):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,_,M){return x===null||x.tag!==6?(x=Lc(_,d.mode,M),x.return=d,x):(x=r(x,_),x.return=d,x)}function l(d,x,_,M){var L=_.type;return L===Kr?h(d,x,_.props.children,M,_.key):x!==null&&(x.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ai&&Qf(L)===x.type)?(M=r(x,_.props),M.ref=Hs(d,x,_),M.return=d,M):(M=Go(_.type,_.key,_.props,null,d.mode,M),M.ref=Hs(d,x,_),M.return=d,M)}function u(d,x,_,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=Dc(_,d.mode,M),x.return=d,x):(x=r(x,_.children||[]),x.return=d,x)}function h(d,x,_,M,L){return x===null||x.tag!==7?(x=Sr(_,d.mode,M,L),x.return=d,x):(x=r(x,_),x.return=d,x)}function f(d,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Lc(""+x,d.mode,_),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ya:return _=Go(x.type,x.key,x.props,null,d.mode,_),_.ref=Hs(d,null,x),_.return=d,_;case $r:return x=Dc(x,d.mode,_),x.return=d,x;case Ai:var M=x._init;return f(d,M(x._payload),_)}if(ea(x)||ks(x))return x=Sr(x,d.mode,_,null),x.return=d,x;ro(d,x)}return null}function p(d,x,_,M){var L=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return L!==null?null:o(d,x,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:return _.key===L?l(d,x,_,M):null;case $r:return _.key===L?u(d,x,_,M):null;case Ai:return L=_._init,p(d,x,L(_._payload),M)}if(ea(_)||ks(_))return L!==null?null:h(d,x,_,M,null);ro(d,_)}return null}function g(d,x,_,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(_)||null,o(x,d,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ya:return d=d.get(M.key===null?_:M.key)||null,l(x,d,M,L);case $r:return d=d.get(M.key===null?_:M.key)||null,u(x,d,M,L);case Ai:var N=M._init;return g(d,x,_,N(M._payload),L)}if(ea(M)||ks(M))return d=d.get(_)||null,h(x,d,M,L,null);ro(x,M)}return null}function v(d,x,_,M){for(var L=null,N=null,T=x,D=x=0,W=null;T!==null&&D<_.length;D++){T.index>D?(W=T,T=null):W=T.sibling;var S=p(d,T,_[D],M);if(S===null){T===null&&(T=W);break}t&&T&&S.alternate===null&&e(d,T),x=s(S,x,D),N===null?L=S:N.sibling=S,N=S,T=W}if(D===_.length)return n(d,T),ft&&cr(d,D),L;if(T===null){for(;D<_.length;D++)T=f(d,_[D],M),T!==null&&(x=s(T,x,D),N===null?L=T:N.sibling=T,N=T);return ft&&cr(d,D),L}for(T=i(d,T);D<_.length;D++)W=g(T,d,D,_[D],M),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?D:W.key),x=s(W,x,D),N===null?L=W:N.sibling=W,N=W);return t&&T.forEach(function(w){return e(d,w)}),ft&&cr(d,D),L}function y(d,x,_,M){var L=ks(_);if(typeof L!="function")throw Error(le(150));if(_=L.call(_),_==null)throw Error(le(151));for(var N=L=null,T=x,D=x=0,W=null,S=_.next();T!==null&&!S.done;D++,S=_.next()){T.index>D?(W=T,T=null):W=T.sibling;var w=p(d,T,S.value,M);if(w===null){T===null&&(T=W);break}t&&T&&w.alternate===null&&e(d,T),x=s(w,x,D),N===null?L=w:N.sibling=w,N=w,T=W}if(S.done)return n(d,T),ft&&cr(d,D),L;if(T===null){for(;!S.done;D++,S=_.next())S=f(d,S.value,M),S!==null&&(x=s(S,x,D),N===null?L=S:N.sibling=S,N=S);return ft&&cr(d,D),L}for(T=i(d,T);!S.done;D++,S=_.next())S=g(T,d,D,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?D:S.key),x=s(S,x,D),N===null?L=S:N.sibling=S,N=S);return t&&T.forEach(function(F){return e(d,F)}),ft&&cr(d,D),L}function m(d,x,_,M){if(typeof _=="object"&&_!==null&&_.type===Kr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ya:e:{for(var L=_.key,N=x;N!==null;){if(N.key===L){if(L=_.type,L===Kr){if(N.tag===7){n(d,N.sibling),x=r(N,_.props.children),x.return=d,d=x;break e}}else if(N.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Ai&&Qf(L)===N.type){n(d,N.sibling),x=r(N,_.props),x.ref=Hs(d,N,_),x.return=d,d=x;break e}n(d,N);break}else e(d,N);N=N.sibling}_.type===Kr?(x=Sr(_.props.children,d.mode,M,_.key),x.return=d,d=x):(M=Go(_.type,_.key,_.props,null,d.mode,M),M.ref=Hs(d,x,_),M.return=d,d=M)}return a(d);case $r:e:{for(N=_.key;x!==null;){if(x.key===N)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(d,x.sibling),x=r(x,_.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Dc(_,d.mode,M),x.return=d,d=x}return a(d);case Ai:return N=_._init,m(d,x,N(_._payload),M)}if(ea(_))return v(d,x,_,M);if(ks(_))return y(d,x,_,M);ro(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,_),x.return=d,d=x):(n(d,x),x=Lc(_,d.mode,M),x.return=d,d=x),a(d)):n(d,x)}return m}var ys=V0(!0),G0=V0(!1),dl=Zi(null),hl=null,rs=null,vh=null;function _h(){vh=rs=hl=null}function yh(t){var e=dl.current;ht(dl),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){hl=t,vh=rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(vh!==t)if(t={context:t,memoizedValue:e,next:null},rs===null){if(hl===null)throw Error(le(308));rs=t,hl.dependencies={lanes:0,firstContext:t}}else rs=rs.next=t;return e}var gr=null;function Sh(t){gr===null?gr=[t]:gr.push(t)}function W0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sh(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ci=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sh(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Oo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,i){var r=t.updateQueue;Ci=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,h=u=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(p=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,p=typeof v=="function"?v.call(g,f,p):v,p==null)break e;f=vt({},f,p);break e;case 2:Ci=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=g,l=f):h=h.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=a,t.lanes=a,t.memoizedState=f}}function tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Oa={},$n=Zi(Oa),Ta=Zi(Oa),Aa=Zi(Oa);function xr(t){if(t===Oa)throw Error(le(174));return t}function Eh(t,e){switch(lt(Aa,e),lt(Ta,t),lt($n,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bu(e,t)}ht($n),lt($n,e)}function Ss(){ht($n),ht(Ta),ht(Aa)}function Y0(t){xr(Aa.current);var e=xr($n.current),n=bu(e,t.type);e!==n&&(lt(Ta,t),lt($n,n))}function wh(t){Ta.current===t&&(ht($n),ht(Ta))}var mt=Zi(0);function pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function bh(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var Bo=vi.ReactCurrentDispatcher,Ac=vi.ReactCurrentBatchConfig,wr=0,gt=null,Tt=null,Pt=null,ml=!1,ua=!1,Ca=0,py=0;function Ot(){throw Error(le(321))}function Th(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Ah(t,e,n,i,r,s){if(wr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?vy:_y,t=n(i,r),ua){s=0;do{if(ua=!1,Ca=0,25<=s)throw Error(le(301));s+=1,Pt=Tt=null,e.updateQueue=null,Bo.current=yy,t=n(i,r)}while(ua)}if(Bo.current=gl,e=Tt!==null&&Tt.next!==null,wr=0,Pt=Tt=gt=null,ml=!1,e)throw Error(le(300));return t}function Ch(){var t=Ca!==0;return Ca=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?gt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Tn(){if(Tt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Pt===null?gt.memoizedState:Pt.next;if(e!==null)Pt=e,Tt=t;else{if(t===null)throw Error(le(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?gt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Ra(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((wr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,gt.lanes|=h,br|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function q0(){}function $0(t,e){var n=gt,i=Tn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,Rh(J0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Na(9,Z0.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(le(349));wr&30||K0(n,e,r)}return r}function K0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z0(t,e,n,i){e.value=n,e.getSnapshot=i,Q0(e)&&eg(t)}function J0(t,e,n){return n(function(){Q0(e)&&eg(t)})}function Q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function eg(t){var e=mi(t,1);e!==null&&zn(e,t,1,-1)}function np(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=xy.bind(null,gt,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function tg(){return Tn().memoizedState}function zo(t,e,n,i){var r=Vn();gt.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function Bl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var a=Tt.memoizedState;if(s=a.destroy,i!==null&&Th(i,a.deps)){r.memoizedState=Na(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function ip(t,e){return zo(8390656,8,t,e)}function Rh(t,e){return Bl(2048,8,t,e)}function ng(t,e){return Bl(4,2,t,e)}function ig(t,e){return Bl(4,4,t,e)}function rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sg(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4,4,rg.bind(null,e,t),n)}function Nh(){}function ag(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function og(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Th(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function lg(t,e,n){return wr&21?(Hn(n,e)||(n=f0(),gt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function my(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Ac.transition;Ac.transition={};try{t(!1),e()}finally{rt=n,Ac.transition=i}}function cg(){return Tn().memoizedState}function gy(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ug(t))dg(e,n);else if(n=W0(t,e,n,i),n!==null){var r=Yt();zn(n,t,i,r),hg(n,e,i)}}function xy(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(t))dg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,Sh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=W0(t,e,r,i),n!==null&&(r=Yt(),zn(n,t,i,r),hg(n,e,i))}}function ug(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function dg(t,e){ua=ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var gl={readContext:bn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},vy={readContext:bn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zo(4194308,4,rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return zo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=gy.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:np,useDebugValue:Nh,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=np(!1),e=t[0];return t=my.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Vn();if(ft){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Lt===null)throw Error(le(349));wr&30||K0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ip(J0.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,Z0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Lt.identifierPrefix;if(ft){var n=ci,i=li;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=py++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_y={readContext:bn,useCallback:ag,useContext:bn,useEffect:Rh,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Cc,useRef:tg,useState:function(){return Cc(Ra)},useDebugValue:Nh,useDeferredValue:function(t){var e=Tn();return lg(e,Tt.memoizedState,t)},useTransition:function(){var t=Cc(Ra)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:$0,useId:cg,unstable_isNewReconciler:!1},yy={readContext:bn,useCallback:ag,useContext:bn,useEffect:Rh,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:og,useReducer:Rc,useRef:tg,useState:function(){return Rc(Ra)},useDebugValue:Nh,useDeferredValue:function(t){var e=Tn();return Tt===null?e.memoizedState=t:lg(e,Tt.memoizedState,t)},useTransition:function(){var t=Rc(Ra)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:q0,useSyncExternalStore:$0,useId:cg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zl={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=ji(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(zn(e,t,r,i),Oo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=ji(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(zn(e,t,r,i),Oo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=ji(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(zn(e,t,i,n),Oo(e,t,i))}};function rp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function fg(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=nn(e)?Mr:Vt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&zl.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=nn(e)?Mr:Vt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&zl.enqueueReplaceState(r,r.state,null),fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=qv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sy=typeof WeakMap=="function"?WeakMap:Map;function pg(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){vl||(vl=!0,rd=i),qu(t,e)},n}function mg(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Sy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Uy.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var My=vi.ReactCurrentOwner,en=!1;function Wt(t,e,n,i){e.child=t===null?G0(e,null,n,i):ys(e,t.child,n,i)}function cp(t,e,n,i,r){n=n.render;var s=e.ref;return hs(e,r),i=Ah(t,e,n,i,s,r),n=Ch(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&n&&mh(e),e.flags|=1,Wt(t,e,i,r),e.child)}function up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gg(t,e,s,i,r)):(t=Go(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function gg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,gi(t,e,r)}return $u(t,e,n,i,r)}function xg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(as,dn),dn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(as,dn),dn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(as,dn),dn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(as,dn),dn|=i;return Wt(t,e,r,n),e.child}function vg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $u(t,e,n,i,r){var s=nn(n)?Mr:Vt.current;return s=vs(e,s),hs(e,r),n=Ah(t,e,n,i,s,r),i=Ch(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&i&&mh(e),e.flags|=1,Wt(t,e,n,r),e.child)}function dp(t,e,n,i,r){if(nn(n)){var s=!0;ll(e)}else s=!1;if(hs(e,r),e.stateNode===null)Ho(t,e),fg(e,n,i),Yu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=bn(u):(u=nn(n)?Mr:Vt.current,u=vs(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&sp(e,a,i,u),Ci=!1;var p=e.memoizedState;a.state=p,fl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||tn.current||Ci?(typeof h=="function"&&(Xu(e,n,h,i),l=e.memoizedState),(o=Ci||rp(e,n,o,i,p,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,X0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ln(e.type,o),a.props=u,f=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=nn(n)?Mr:Vt.current,l=vs(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==l)&&sp(e,a,i,l),Ci=!1,p=e.memoizedState,a.state=p,fl(e,i,a,r);var v=e.memoizedState;o!==f||p!==v||tn.current||Ci?(typeof g=="function"&&(Xu(e,n,g,i),v=e.memoizedState),(u=Ci||rp(e,n,u,i,p,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Ku(t,e,n,i,s,r)}function Ku(t,e,n,i,r,s){vg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Kf(e,n,!1),gi(t,e,s);i=e.stateNode,My.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,o,s)):Wt(t,e,o,s),e.memoizedState=i.state,r&&Kf(e,n,!0),e.child}function _g(t){var e=t.stateNode;e.pendingContext?$f(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$f(t,e.context,!1),Eh(t,e.containerInfo)}function hp(t,e,n,i,r){return _s(),xh(r),e.flags|=256,Wt(t,e,n,i),e.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function yg(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(mt,r&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Vl(a,i,0,null),t=Sr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ju(n),e.memoizedState=Zu,t):Ph(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ey(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Vi(o,s):(s=Sr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ju(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Zu,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ph(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,i){return i!==null&&xh(i),ys(e,t.child,null,n),t=Ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ey(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Nc(Error(le(422))),so(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=Sr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ys(e,t.child,null,a),e.child.memoizedState=Ju(a),e.memoizedState=Zu,s);if(!(e.mode&1))return so(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=Nc(s,i,void 0),so(t,e,a,i)}if(o=(a&t.childLanes)!==0,en||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),zn(i,t,r,-1))}return Fh(),i=Nc(Error(le(421))),so(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ky.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Bi(r.nextSibling),fn=e,ft=!0,In=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Er,li=t.id,ci=t.overflow,Er=e),e=Ph(e,i.children),e.flags|=4096,e)}function fp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wu(t.return,e,n)}function Pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fp(t,n,e);else if(t.tag===19)fp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pc(e,!0,n,null,s);break;case"together":Pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wy(t,e,n){switch(e.tag){case 3:_g(e),_s();break;case 5:Y0(e);break;case 1:nn(e.type)&&ll(e);break;case 4:Eh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?yg(t,e,n):(lt(mt,mt.current&1),t=gi(t,e,n),t!==null?t.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,xg(t,e,n)}return gi(t,e,n)}var Mg,Qu,Eg,wg;Mg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qu=function(){};Eg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr($n.current);var s=null;switch(n){case"input":r=Su(t,r),i=Su(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=wu(t,r),i=wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=al)}Tu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ma.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ma.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};wg=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function by(t,e,n){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return nn(e.type)&&ol(),Bt(e),null;case 3:return i=e.stateNode,Ss(),ht(tn),ht(Vt),bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(od(In),In=null))),Qu(t,e),Bt(e),null;case 5:wh(e);var r=xr(Aa.current);if(n=e.type,t!==null&&e.stateNode!=null)Eg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Bt(e),null}if(t=xr($n.current),io(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[ba]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<na.length;r++)ut(na[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Mf(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":wf(i,s),ut("invalid",i)}Tu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",""+o]):ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":qa(i),Ef(i,s,!0);break;case"textarea":qa(i),bf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[ba]=i,Mg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Au(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<na.length;r++)ut(na[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Mf(t,i),r=Su(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":wf(t,i),r=wu(t,i),ut("invalid",t);break;default:r=i}Tu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?t0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Qm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&th(t,s,l,a))}switch(n){case"input":qa(t),Ef(t,i,!1);break;case"textarea":qa(t),bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)wg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=xr(Aa.current),xr($n.current),io(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:no(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ht(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&hn!==null&&e.mode&1&&!(e.flags&128))j0(),_s(),e.flags|=98560,s=!1;else if(s=io(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[Xn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else In!==null&&(od(In),In=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?At===0&&(At=3):Fh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Ss(),Qu(t,e),t===null&&Ea(e.stateNode.containerInfo),Bt(e),null;case 10:return yh(e.type._context),Bt(e),null;case 17:return nn(e.type)&&ol(),Bt(e),null;case 19:if(ht(mt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)js(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=pl(t),a!==null){for(e.flags|=128,js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Es&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=pl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return Bt(e),null}else 2*Mt()-s.renderingStartTime>Es&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,lt(mt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return kh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function Ty(t,e){switch(gh(e),e.tag){case 1:return nn(e.type)&&ol(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),ht(tn),ht(Vt),bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wh(e),null;case 13:if(ht(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(mt),null;case 4:return Ss(),null;case 10:return yh(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var ao=!1,jt=!1,Ay=typeof WeakSet=="function"?WeakSet:Set,we=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function ed(t,e,n){try{n()}catch(i){yt(t,e,i)}}var pp=!1;function Cy(t,e){if(Fu=il,t=R0(),ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++h===i&&(l=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},il=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Ln(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return v=pp,pp=!1,v}function da(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ed(e,n,s)}r=r.next}while(r!==i)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bg(t){var e=t.alternate;e!==null&&(t.alternate=null,bg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[ba],delete e[Hu],delete e[uy],delete e[dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tg(t){return t.tag===5||t.tag===3||t.tag===4}function mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(i!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function id(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var Ut=null,Dn=!1;function yi(t,e,n){for(n=n.child;n!==null;)Ag(t,e,n),n=n.sibling}function Ag(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:jt||ss(n,e);case 6:var i=Ut,r=Dn;Ut=null,yi(t,e,n),Ut=i,Dn=r,Ut!==null&&(Dn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Dn?(t=Ut,n=n.stateNode,t.nodeType===8?wc(t.parentNode,n):t.nodeType===1&&wc(t,n),ya(t)):wc(Ut,n.stateNode));break;case 4:i=Ut,r=Dn,Ut=n.stateNode.containerInfo,Dn=!0,yi(t,e,n),Ut=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ed(n,e,a),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!jt&&(ss(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,yi(t,e,n),jt=i):yi(t,e,n);break;default:yi(t,e,n)}}function gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ay),e.forEach(function(i){var r=Fy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Dn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Dn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Ut===null)throw Error(le(160));Ag(s,a,r),Ut=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cg(e,t),e=e.sibling}function Cg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),jn(t),i&4){try{da(3,t,t.return),Hl(3,t)}catch(y){yt(t,t.return,y)}try{da(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:Cn(e,t),jn(t),i&512&&n!==null&&ss(n,n.return);break;case 5:if(Cn(e,t),jn(t),i&512&&n!==null&&ss(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Km(r,s),Au(o,a);var u=Au(o,s);for(a=0;a<l.length;a+=2){var h=l[a],f=l[a+1];h==="style"?t0(r,f):h==="dangerouslySetInnerHTML"?Qm(r,f):h==="children"?ga(r,f):th(r,h,f,u)}switch(o){case"input":Mu(r,s);break;case"textarea":Zm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ls(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(Cn(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(Cn(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:Cn(e,t),jn(t);break;case 13:Cn(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=Mt())),i&4&&gp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||h,Cn(e,t),jt=u):Cn(e,t),jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(we=t,h=t.child;h!==null;){for(f=we=h;we!==null;){switch(p=we,g=p.child,p.tag){case 0:case 11:case 14:case 15:da(4,p,p.return);break;case 1:ss(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:ss(p,p.return);break;case 22:if(p.memoizedState!==null){vp(f);continue}}g!==null?(g.return=p,we=g):vp(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=e0("display",a))}catch(y){yt(t,t.return,y)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){yt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Cn(e,t),jn(t),i&4&&gp(t);break;case 21:break;default:Cn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tg(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=mp(t);id(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mp(t);nd(t,o,a);break;default:throw Error(le(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ry(t,e,n){we=t,Rg(t)}function Rg(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ao;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=ao;var u=jt;if(ao=a,(jt=l)&&!u)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?_p(r):l!==null?(l.return=a,we=l):_p(r);for(;s!==null;)we=s,Rg(s),s=s.sibling;we=r,ao=o,jt=u}xp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):xp(t)}}function xp(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ya(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}jt||e.flags&512&&td(e)}catch(p){yt(e,e.return,p)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function vp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function _p(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{td(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{td(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var Ny=Math.ceil,xl=vi.ReactCurrentDispatcher,Lh=vi.ReactCurrentOwner,wn=vi.ReactCurrentBatchConfig,Je=0,Lt=null,wt=null,kt=0,dn=0,as=Zi(0),At=0,Pa=null,br=0,jl=0,Dh=0,ha=null,Jt=null,Ih=0,Es=1/0,ai=null,vl=!1,rd=null,Hi=null,oo=!1,Ii=null,_l=0,fa=0,sd=null,jo=-1,Vo=0;function Yt(){return Je&6?Mt():jo!==-1?jo:jo=Mt()}function ji(t){return t.mode&1?Je&2&&kt!==0?kt&-kt:fy.transition!==null?(Vo===0&&(Vo=f0()),Vo):(t=rt,t!==0||(t=window.event,t=t===void 0?16:y0(t.type)),t):1}function zn(t,e,n,i){if(50<fa)throw fa=0,sd=null,Error(le(185));Ua(t,n,i),(!(Je&2)||t!==Lt)&&(t===Lt&&(!(Je&2)&&(jl|=n),At===4&&Pi(t,kt)),rn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Es=Mt()+500,Ol&&Ji()))}function rn(t,e){var n=t.callbackNode;f_(t,e);var i=nl(t,t===Lt?kt:0);if(i===0)n!==null&&Cf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Cf(n),e===1)t.tag===0?hy(yp.bind(null,t)):B0(yp.bind(null,t)),ly(function(){!(Je&6)&&Ji()}),n=null;else{switch(p0(i)){case 1:n=ah;break;case 4:n=d0;break;case 16:n=tl;break;case 536870912:n=h0;break;default:n=tl}n=Fg(n,Ng.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ng(t,e){if(jo=-1,Vo=0,Je&6)throw Error(le(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=nl(t,t===Lt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yl(t,i);else{e=i;var r=Je;Je|=2;var s=Lg();(Lt!==t||kt!==e)&&(ai=null,Es=Mt()+500,yr(t,e));do try{Dy();break}catch(o){Pg(t,o)}while(!0);_h(),xl.current=s,Je=r,wt!==null?e=0:(Lt=null,kt=0,e=At)}if(e!==0){if(e===2&&(r=Lu(t),r!==0&&(i=r,e=ad(t,r))),e===1)throw n=Pa,yr(t,0),Pi(t,i),rn(t,Mt()),n;if(e===6)Pi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Py(r)&&(e=yl(t,i),e===2&&(s=Lu(t),s!==0&&(i=s,e=ad(t,s))),e===1))throw n=Pa,yr(t,0),Pi(t,i),rn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:ur(t,Jt,ai);break;case 3:if(Pi(t,i),(i&130023424)===i&&(e=Ih+500-Mt(),10<e)){if(nl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zu(ur.bind(null,t,Jt,ai),e);break}ur(t,Jt,ai);break;case 4:if(Pi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ny(i/1960))-i,10<i){t.timeoutHandle=zu(ur.bind(null,t,Jt,ai),i);break}ur(t,Jt,ai);break;case 5:ur(t,Jt,ai);break;default:throw Error(le(329))}}}return rn(t,Mt()),t.callbackNode===n?Ng.bind(null,t):null}function ad(t,e){var n=ha;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=yl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&od(e)),t}function od(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Py(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pi(t,e){for(e&=~Dh,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function yp(t){if(Je&6)throw Error(le(327));fs();var e=nl(t,0);if(!(e&1))return rn(t,Mt()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var i=Lu(t);i!==0&&(e=i,n=ad(t,i))}if(n===1)throw n=Pa,yr(t,0),Pi(t,e),rn(t,Mt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ur(t,Jt,ai),rn(t,Mt()),null}function Uh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Es=Mt()+500,Ol&&Ji())}}function Tr(t){Ii!==null&&Ii.tag===0&&!(Je&6)&&fs();var e=Je;Je|=1;var n=wn.transition,i=rt;try{if(wn.transition=null,rt=1,t)return t()}finally{rt=i,wn.transition=n,Je=e,!(Je&6)&&Ji()}}function kh(){dn=as.current,ht(as)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oy(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ol();break;case 3:Ss(),ht(tn),ht(Vt),bh();break;case 5:wh(i);break;case 4:Ss();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:yh(i.type._context);break;case 22:case 23:kh()}n=n.return}if(Lt=t,wt=t=Vi(t.current,null),kt=dn=e,At=0,Pa=null,Dh=jl=br=0,Jt=ha=null,gr!==null){for(e=0;e<gr.length;e++)if(n=gr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}gr=null}return t}function Pg(t,e){do{var n=wt;try{if(_h(),Bo.current=gl,ml){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ml=!1}if(wr=0,Pt=Tt=gt=null,ua=!1,Ca=0,Lh.current=null,n===null||n.return===null){At=1,Pa=e,wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=kt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=op(a);if(g!==null){g.flags&=-257,lp(g,a,o,s,e),g.mode&1&&ap(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){ap(s,u,e),Fh();break e}l=Error(le(426))}}else if(ft&&o.mode&1){var m=op(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lp(m,a,o,s,e),xh(Ms(l,o));break e}}s=l=Ms(l,o),At!==4&&(At=2),ha===null?ha=[s]:ha.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=pg(s,l,e);ep(s,d);break e;case 1:o=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Hi===null||!Hi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=mg(s,o,e);ep(s,M);break e}}s=s.return}while(s!==null)}Ig(n)}catch(L){e=L,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Lg(){var t=xl.current;return xl.current=gl,t===null?gl:t}function Fh(){(At===0||At===3||At===2)&&(At=4),Lt===null||!(br&268435455)&&!(jl&268435455)||Pi(Lt,kt)}function yl(t,e){var n=Je;Je|=2;var i=Lg();(Lt!==t||kt!==e)&&(ai=null,yr(t,e));do try{Ly();break}catch(r){Pg(t,r)}while(!0);if(_h(),Je=n,xl.current=i,wt!==null)throw Error(le(261));return Lt=null,kt=0,At}function Ly(){for(;wt!==null;)Dg(wt)}function Dy(){for(;wt!==null&&!r_();)Dg(wt)}function Dg(t){var e=kg(t.alternate,t,dn);t.memoizedProps=t.pendingProps,e===null?Ig(t):wt=e,Lh.current=null}function Ig(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ty(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,wt=null;return}}else if(n=by(n,e,dn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);At===0&&(At=5)}function ur(t,e,n){var i=rt,r=wn.transition;try{wn.transition=null,rt=1,Iy(t,e,n,i)}finally{wn.transition=r,rt=i}return null}function Iy(t,e,n,i){do fs();while(Ii!==null);if(Je&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(p_(t,s),t===Lt&&(wt=Lt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,Fg(tl,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=rt;rt=1;var o=Je;Je|=4,Lh.current=null,Cy(t,n),Cg(n,t),ey(Ou),il=!!Fu,Ou=Fu=null,t.current=n,Ry(n),s_(),Je=o,rt=a,wn.transition=s}else t.current=n;if(oo&&(oo=!1,Ii=t,_l=r),s=t.pendingLanes,s===0&&(Hi=null),l_(n.stateNode),rn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(vl)throw vl=!1,t=rd,rd=null,t;return _l&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===sd?fa++:(fa=0,sd=t):fa=0,Ji(),null}function fs(){if(Ii!==null){var t=p0(_l),e=wn.transition,n=rt;try{if(wn.transition=null,rt=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,_l=0,Je&6)throw Error(le(331));var r=Je;for(Je|=4,we=t.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(we=u;we!==null;){var h=we;switch(h.tag){case 0:case 11:case 15:da(8,h,s)}var f=h.child;if(f!==null)f.return=h,we=f;else for(;we!==null;){h=we;var p=h.sibling,g=h.return;if(bg(h),h===u){we=null;break}if(p!==null){p.return=g,we=p;break}we=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,we=d;break e}we=s.return}}var x=t.current;for(we=x;we!==null;){a=we;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,we=_;else e:for(a=x;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Hl(9,o)}}catch(L){yt(o,o.return,L)}if(o===a){we=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,we=M;break e}we=o.return}}if(Je=r,Ji(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Dl,t)}catch{}i=!0}return i}finally{rt=n,wn.transition=e}}return!1}function Sp(t,e,n){e=Ms(n,e),e=pg(t,e,1),t=zi(t,e,1),e=Yt(),t!==null&&(Ua(t,1,e),rn(t,e))}function yt(t,e,n){if(t.tag===3)Sp(t,t,n);else for(;e!==null;){if(e.tag===3){Sp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=Ms(n,t),t=mg(e,t,1),e=zi(e,t,1),t=Yt(),e!==null&&(Ua(e,1,t),rn(e,t));break}}e=e.return}}function Uy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(kt&n)===n&&(At===4||At===3&&(kt&130023424)===kt&&500>Mt()-Ih?yr(t,0):Dh|=n),rn(t,e)}function Ug(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=Yt();t=mi(t,e),t!==null&&(Ua(t,e,n),rn(t,n))}function ky(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ug(t,n)}function Fy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Ug(t,n)}var kg;kg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,wy(t,e,n);en=!!(t.flags&131072)}else en=!1,ft&&e.flags&1048576&&z0(e,ul,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ho(t,e),t=e.pendingProps;var r=vs(e,Vt.current);hs(e,n),r=Ah(null,e,i,t,r,n);var s=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,ll(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mh(e),r.updater=zl,e.stateNode=r,r._reactInternals=e,Yu(e,i,t,n),e=Ku(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&mh(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=By(i),t=Ln(i,t),r){case 0:e=$u(null,e,i,t,n);break e;case 1:e=dp(null,e,i,t,n);break e;case 11:e=cp(null,e,i,t,n);break e;case 14:e=up(null,e,i,Ln(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),$u(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),dp(t,e,i,r,n);case 3:e:{if(_g(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,X0(t,e),fl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(le(423)),e),e=hp(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(le(424)),e),e=hp(t,e,i,n,r);break e}else for(hn=Bi(e.stateNode.containerInfo.firstChild),fn=e,ft=!0,In=null,n=G0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=gi(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return Y0(e),t===null&&Gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Bu(i,r)?a=null:s!==null&&Bu(i,s)&&(e.flags|=32),vg(t,e),Wt(t,e,a,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return yg(t,e,n);case 4:return Eh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),cp(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(dl,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!tn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=hi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Wu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,n),r=bn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),up(t,e,i,r,n);case 15:return gg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ho(t,e),e.tag=1,nn(i)?(t=!0,ll(e)):t=!1,hs(e,n),fg(e,i,r),Yu(e,i,r,n),Ku(null,e,i,!0,t,n);case 19:return Sg(t,e,n);case 22:return xg(t,e,n)}throw Error(le(156,e.tag))};function Fg(t,e){return u0(t,e)}function Oy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new Oy(t,e,n,i)}function Oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function By(t){if(typeof t=="function")return Oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ih)return 11;if(t===rh)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Go(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Kr:return Sr(n.children,r,s,e);case nh:a=8,r|=8;break;case xu:return t=Mn(12,n,e,r|2),t.elementType=xu,t.lanes=s,t;case vu:return t=Mn(13,n,e,r),t.elementType=vu,t.lanes=s,t;case _u:return t=Mn(19,n,e,r),t.elementType=_u,t.lanes=s,t;case Ym:return Vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wm:a=10;break e;case Xm:a=9;break e;case ih:a=11;break e;case rh:a=14;break e;case Ai:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Mn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Sr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Ym,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(t,e,n,i,r,s,a,o,l){return t=new zy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(s),t}function Hy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Og(t){if(!t)return Yi;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(nn(n))return O0(t,n,e)}return e}function Bg(t,e,n,i,r,s,a,o,l){return t=Bh(n,i,!0,t,r,s,a,o,l),t.context=Og(null),n=t.current,i=Yt(),r=ji(n),s=hi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,Ua(t,r,i),rn(t,i),t}function Gl(t,e,n,i){var r=e.current,s=Yt(),a=ji(r);return n=Og(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,a),t!==null&&(zn(t,r,a,s),Oo(t,r,a)),a}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function jy(){return null}var zg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hh(t){this._internalRoot=t}Wl.prototype.render=Hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Gl(t,e,null,null)};Wl.prototype.unmount=Hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Gl(null,t,null,null)}),e[pi]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=x0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&_0(t)}};function jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function Vy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Sl(a);s.call(u)}}var a=Bg(e,i,t,0,null,!1,!1,"",Ep);return t._reactRootContainer=a,t[pi]=a.current,Ea(t.nodeType===8?t.parentNode:t),Tr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Sl(l);o.call(u)}}var l=Bh(t,0,!1,null,null,!1,!1,"",Ep);return t._reactRootContainer=l,t[pi]=l.current,Ea(t.nodeType===8?t.parentNode:t),Tr(function(){Gl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Sl(a);o.call(l)}}Gl(e,a,t,r)}else a=Vy(n,e,t,r,i);return Sl(a)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(oh(e,n|1),rn(e,Mt()),!(Je&6)&&(Es=Mt()+500,Ji()))}break;case 13:Tr(function(){var i=mi(t,1);if(i!==null){var r=Yt();zn(i,t,1,r)}}),zh(t,1)}};lh=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Yt();zn(e,t,134217728,n)}zh(t,134217728)}};g0=function(t){if(t.tag===13){var e=ji(t),n=mi(t,e);if(n!==null){var i=Yt();zn(n,t,e,i)}zh(t,e)}};x0=function(){return rt};v0=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Ru=function(t,e,n){switch(e){case"input":if(Mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Fl(i);if(!r)throw Error(le(90));$m(i),Mu(i,r)}}}break;case"textarea":Zm(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};r0=Uh;s0=Tr;var Gy={usingClientEntryPoint:!1,Events:[Fa,es,Fl,n0,i0,Uh]},Vs={findFiberByHostInstance:mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wy={bundleType:Vs.bundleType,version:Vs.version,rendererPackageName:Vs.rendererPackageName,rendererConfig:Vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l0(t),t===null?null:t.stateNode},findFiberByHostInstance:Vs.findFiberByHostInstance||jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Dl=lo.inject(Wy),qn=lo}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(le(200));return Hy(t,e,null,n)};mn.createRoot=function(t,e){if(!jh(t))throw Error(le(299));var n=!1,i="",r=zg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,Ea(t.nodeType===8?t.parentNode:t),new Hh(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=l0(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Tr(t)};mn.hydrate=function(t,e,n){if(!Xl(e))throw Error(le(200));return Yl(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!jh(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=zg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Bg(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,Ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Wl(e)};mn.render=function(t,e,n){if(!Xl(e))throw Error(le(200));return Yl(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(le(40));return t._reactRootContainer?(Tr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};mn.unstable_batchedUpdates=Uh;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Xl(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return Yl(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function Hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hg)}catch(t){console.error(t)}}Hg(),Hm.exports=mn;var Xy=Hm.exports,wp=Xy;mu.createRoot=wp.createRoot,mu.hydrateRoot=wp.hydrateRoot;/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qy(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Yy(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=t=>{const e=$y(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ic(t){return t!=null}function Zy(t,e={}){var p,g;const n=e.attributeNames??{},i=v=>n[v]??v,r=t.size??t.width??nr.width,s=t.size??t.height??nr.height,a=((p=t.aliases)==null?void 0:p.filter(v=>typeof v=="string"&&v.trim()!=="").map(v=>`lucide-${v}`))??[],o=[...t.name?[`lucide-${t.name}`]:[],...a],l=((g=e.className)==null?void 0:g.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?ld(...l):ld("lucide",...o,...l),h=e.absoluteStrokeWidth?Number(e.strokeWidth??nr["stroke-width"])*Number(t.size??t.width??nr.width)/Number(e.size??e.width??nr.width):e.strokeWidth??nr["stroke-width"];return["svg",{...Object.entries(nr).reduce((v,[y,m])=>(v[i(y)]=m,v),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Ic(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Ic(e.width)&&{[i("width")]:e.width},..."height"in e&&Ic(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:h,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(v=>{const[y,m,d]=v,x=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...m}:m;return d?[y,x,d]:[y,x]})]}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Jy(t,e={}){return Zy(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},e1=ce.createContext({}),t1=()=>ce.useContext(e1),n1=ce.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:o="",children:l,iconNode:u=[],icon:h={node:u,aliases:[],size:24},...f},p)=>{const{size:g=24,strokeWidth:v=2,absoluteStrokeWidth:y=!1,nonScalingStroke:m=!1,color:d="currentColor",className:x=""}=t1()??{},_=!!l||Qy(f),[M,L,N=[]]=Jy(h,{color:t??d,width:n??e??g,height:i??e??g,strokeWidth:r??v,absoluteStrokeWidth:s??y,nonScalingStroke:a??m,className:ld(x,o),hasA11yProp:_,attributes:f});return ce.createElement(M,{ref:p,...L},[...N.map(([T,D])=>ce.createElement(T,D)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $e(t,e=[],n=[]){const i=typeof t=="string"?qy(t,e,n):t,r=ce.forwardRef(({className:s,...a},o)=>ce.createElement(n1,{ref:o,icon:i,className:s,...a}));return i.name&&(r.displayName=Ky(i.name)),r}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};jg.node;const ql=$e(jg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};Vg.node;const Ml=$e(Vg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Gg.node;const bp=$e(Gg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};Wg.node;const i1=$e(Wg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Xg.node;const $l=$e(Xg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Yg.node;const qg=$e(Yg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};$g.node;const r1=$e($g);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]};Kg.node;const s1=$e(Kg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Zg.node;const a1=$e(Zg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"fuel",size:24,node:[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",key:"1wtuz0"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16",key:"e09ifn"}],["path",{d:"M2 21h13",key:"1x0fut"}],["path",{d:"M3 9h11",key:"1p7c0w"}]]};Jg.node;const o1=$e(Jg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Qg.node;const l1=$e(Qg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};ex.node;const tx=$e(ex);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};nx.node;const c1=$e(nx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};ix.node;const rx=$e(ix);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};sx.node;const u1=$e(sx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ax.node;const ox=$e(ax);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};lx.node;const d1=$e(lx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};cx.node;const h1=$e(cx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};ux.node;const La=$e(ux);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx={name:"message-square",size:24,node:[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]};dx.node;const f1=$e(dx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};hx.node;const p1=$e(hx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};fx.node;const m1=$e(fx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};px.node;const mx=$e(px);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx={name:"rotate-3d",size:24,node:[["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M16.47214 7.52786 A 5 10 0 1 0 13 21.79796",key:"1245p8"}],["path",{d:"M21.79796 11 A 10 5 0 1 0 19 15.57071",key:"1i40ks"}]],aliases:["rotate-3-d"]};gx.node;const Vh=$e(gx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};xx.node;const vx=$e(xx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};_x.node;const g1=$e(_x);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};yx.node;const Ar=$e(yx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};Sx.node;const x1=$e(Sx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Mx.node;const v1=$e(Mx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Ex.node;const Kl=$e(Ex);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};wx.node;const _1=$e(wx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};bx.node;const y1=$e(bx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Tx.node;const S1=$e(Tx);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Ax.node;const Zn=$e(Ax);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Cx.node;const Gh=$e(Cx),Rx=ce.createContext(void 0),M1=({children:t})=>{const[e,n]=ce.useState(()=>{const h=localStorage.getItem("tbh_user");return h?JSON.parse(h):{id:99,fullName:"Hemanth (TBH Rider)",email:"rider@tbhrentals.in",phoneNumber:"+91 98765 43210",role:"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"KA-01-2023-0048192",token:"TBH_SESSION_KEY_001"}});ce.useEffect(()=>{e?localStorage.setItem("tbh_user",JSON.stringify(e)):localStorage.removeItem("tbh_user")},[e]);const i=async(h,f)=>{try{const g=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h,password:f})});if(g.ok){const v=await g.json();return n(v),!0}}catch{}const p={id:Date.now(),fullName:h.split("@")[0].toUpperCase(),email:h,phoneNumber:"+91 98765 00000",role:h.includes("admin")?"ROLE_ADMIN":"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"DL-04-2022-892182",token:"TBH_LOCAL_TOKEN"};return n(p),!0},r=async(h,f,p,g)=>{try{const y=await fetch("/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fullName:h,email:f,phoneNumber:p,password:g})});if(y.ok){const m=await y.json();return n(m),!0}}catch{}const v={id:Date.now(),fullName:h,email:f,phoneNumber:p,role:"ROLE_USER",drivingLicenseVerified:!1,token:"TBH_LOCAL_TOKEN"};return n(v),!0},s=async h=>{try{const f=await fetch("/api/auth/send-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:h})});if(f.ok)return(await f.json()).otp||"7829"}catch{}return"7829"},a=async(h,f)=>{try{const p=await fetch("/api/auth/verify-otp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:h,otp:f})});if(p.ok){const g=await p.json();return n(g),!0}}catch{}if(f==="7829"||f==="1234"||f.length===4||f.length===6){const p={id:Date.now(),fullName:"TBH Rider ("+h.slice(-4)+")",email:"rider."+h.replace(/[^0-9]/g,"")+"@tbhrentals.in",phoneNumber:h,role:"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"IN-DL-"+h.slice(-4)+"-2024",token:"TBH_OTP_TOKEN"};return n(p),!0}return!1},o=async(h,f)=>{if(!e)return!1;try{const p=await fetch("/api/auth/verify-license",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e.id,licenseNumber:h,docUrl:f})});if(p.ok){const g=await p.json();return n(v=>v?{...v,drivingLicenseVerified:!0,drivingLicenseNumber:h}:g),!0}}catch{}return n(p=>p?{...p,drivingLicenseVerified:!0,drivingLicenseNumber:h}:null),!0},l=()=>{n({id:99,fullName:"Hemanth (TBH Rider)",email:"rider@tbhrentals.in",phoneNumber:"+91 98765 43210",role:"ROLE_USER",drivingLicenseVerified:!0,drivingLicenseNumber:"KA-01-2023-0048192",token:"TBH_SESSION_KEY_001"})},u=()=>{n(null)};return c.jsx(Rx.Provider,{value:{user:e,isAuthenticated:!!e,loginWithEmail:i,signupWithEmail:r,sendOtp:s,verifyOtp:a,verifyLicense:o,loginAsDemoRider:l,logout:u},children:t})},Zl=()=>{const t=ce.useContext(Rx);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},Tp={EN:{tagline:"Ride Beyond Limits",heroTitle:"India's Most Elite Mobility Fleet",heroSubtitle:"Superbikes. Iconic Cruisers. Electric Velocity. 4x4 Off-Road Legends.",searchBarTitle:"Find Your Machine",pickupCity:"Pickup City",pickupHub:"Pickup Hub",dropHub:"Drop Hub",rentalMode:"Rental Duration",hourly:"Hourly",daily:"Daily",monthly:"Monthly",allVehicles:"All Fleet",bikes:"Superbikes & Cruisers",scooters:"City Scooters",electric:"Electric Velocity (EV)",petrolCars:"Petrol Cars",dieselCars:"Diesel & 4x4 SUVs",threeDStudio:"3D Studio",quickBook:"Quick Book",compare:"Compare",topSpeed:"Top Speed",acceleration:"0-100 km/h",deposit:"Security Deposit",perHour:"/ hr",perDay:"/ day",perMonth:"/ mo",verifiedRider:"Verified Rider",unverifiedRider:"Pending Verification",adminDashboard:"Admin",myBookings:"My Bookings"},HI:{tagline:"राइड बियॉन्ड लिमिट्स",heroTitle:"भारत का सबसे प्रीमियम बाइक और कार रेंटल",heroSubtitle:"सुपरबाइक्स। क्लासिक क्रूज़र्स। इलेक्ट्रिक मोबिलिटी। 4x4 थार और फॉर्च्यूनर।",searchBarTitle:"अपनी मनपसंद राइड चुनें",pickupCity:"पिकअप शहर",pickupHub:"पिकअप हब",dropHub:"ड्रॉप हब",rentalMode:"किराया अवधि",hourly:"घंटे के आधार पर",daily:"प्रति दिन",monthly:"मासिक",allVehicles:"सभी वाहन",bikes:"सुपरबाइक और क्रूज़र",scooters:"स्कूटी",electric:"इलेक्ट्रिक (EV)",petrolCars:"पेट्रोल कारें",dieselCars:"डीजल और 4x4 SUV",threeDStudio:"3D स्टूडियो",quickBook:"तुरंत बुक करें",compare:"तुलना करें",topSpeed:"अधिकतम गति",acceleration:"0-100 गति",deposit:"सुरक्षा जमा राशि",perHour:"/ घंटा",perDay:"/ दिन",perMonth:"/ महीना",verifiedRider:"सत्यापित राइडर",unverifiedRider:"वेरिफिकेशन बाकी",adminDashboard:"व्यवस्थापक",myBookings:"मेरी बुकिंग"}},Nx=ce.createContext(void 0),E1=({children:t})=>{const[e,n]=ce.useState("EN"),i=r=>Tp[e][r]||Tp.EN[r]||r;return c.jsx(Nx.Provider,{value:{lang:e,setLang:n,t:i},children:t})},Jl=()=>{const t=ce.useContext(Nx);if(!t)throw new Error("useLanguage must be used within a LanguageProvider");return t},w1=({cities:t,selectedCity:e,onSelectCity:n,compareCount:i,onOpenCompare:r,onOpenBookings:s,onOpenAuth:a,onOpenAdmin:o})=>{const{user:l,isAuthenticated:u,logout:h}=Zl(),{lang:f,setLang:p,t:g}=Jl(),[v,y]=ce.useState(!1),[m,d]=ce.useState(!1);return c.jsx("header",{className:"sticky top-0 z-40 w-full bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[c.jsx("div",{className:"relative flex items-center",children:c.jsx("div",{className:"w-11 h-11 rounded-xl bg-gradient-to-br from-[#141416] via-[#1E1E24] to-[#0A0A0B] border border-[#00E5C7]/40 flex items-center justify-center shadow-teal-glow",children:c.jsxs("svg",{className:"w-7 h-7",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M6 10H22M14 10V32",stroke:"#00E5C7",strokeWidth:"3.5",strokeLinecap:"round"}),c.jsx("path",{d:"M22 6L32 10L22 14",stroke:"#D4AF37",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("circle",{cx:"28",cy:"24",r:"6",stroke:"#FFFFFF",strokeWidth:"2.5"}),c.jsx("path",{d:"M28 20V28M24 24H32",stroke:"#00E5C7",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-baseline space-x-1.5",children:[c.jsx("span",{className:"text-2xl font-extrabold tracking-wider font-display text-white",children:"TBH"}),c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#00E5C7]/10 text-[#00E5C7] border border-[#00E5C7]/30",children:"INDIA"})]}),c.jsx("p",{className:"text-[10px] tracking-widest uppercase text-slate-400 font-semibold",children:g("tagline")})]})]}),c.jsxs("div",{className:"hidden md:flex items-center space-x-3",children:[c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>d(!m),className:"flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/50 text-sm font-medium transition",children:[c.jsx(La,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:e}),c.jsx(bp,{className:"w-3.5 h-3.5 text-slate-400"})]}),m&&c.jsxs("div",{className:"absolute top-12 left-0 w-64 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-2 z-50",children:[c.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5",children:"Select Indian City"}),c.jsx("div",{className:"max-h-60 overflow-y-auto space-y-1",children:t.map(x=>c.jsxs("button",{onClick:()=>{n(x.name),d(!1)},className:`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition ${e===x.name?"bg-[#00E5C7]/15 text-[#00E5C7]":"text-slate-300 hover:bg-white/5"}`,children:[c.jsx("span",{className:"font-semibold",children:x.name}),c.jsxs("span",{className:"text-[10px] text-slate-400",children:[x.hubs.length," Hubs"]})]},x.id))})]})]}),c.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-400 bg-[#141416] px-3 py-2 rounded-xl border border-white/10",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),c.jsxs("span",{children:["All Rates in ",c.jsx("strong",{className:"text-white font-mono",children:"₹ INR"})]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsxs("button",{onClick:()=>p(f==="EN"?"HI":"EN"),className:"flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-300 transition",children:[c.jsx(c1,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:f})]}),c.jsxs("button",{onClick:r,className:"relative flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-[#00E5C7]/40 text-xs font-medium text-slate-200 transition",children:[c.jsx(ox,{className:"w-4 h-4 text-[#D4AF37]"}),c.jsx("span",{className:"hidden sm:inline",children:g("compare")}),i>0&&c.jsx("span",{className:"w-4 h-4 rounded-full bg-[#00E5C7] text-black font-extrabold text-[10px] flex items-center justify-center",children:i})]}),c.jsxs("button",{onClick:s,className:"hidden sm:flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-[#141416] border border-white/10 hover:border-white/20 text-xs font-medium text-slate-200 transition",children:[c.jsx(Ml,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:g("myBookings")})]}),c.jsx("button",{onClick:o,className:"hidden md:flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-400 hover:text-white transition",children:c.jsx("span",{children:g("adminDashboard")})}),u&&l?c.jsxs("div",{className:"relative",children:[c.jsxs("button",{onClick:()=>y(!v),className:"flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#141416] to-[#1F1F24] border border-[#00E5C7]/30 hover:border-[#00E5C7] transition",children:[c.jsx("div",{className:"w-7 h-7 rounded-full bg-[#00E5C7]/20 border border-[#00E5C7]/50 flex items-center justify-center text-xs font-bold text-[#00E5C7]",children:l.fullName.charAt(0)}),c.jsxs("div",{className:"text-left hidden lg:block",children:[c.jsx("p",{className:"text-xs font-semibold text-white leading-tight",children:l.fullName.split(" ")[0]}),c.jsxs("p",{className:"text-[10px] text-[#00E5C7] flex items-center space-x-0.5",children:[c.jsx(Ar,{className:"w-2.5 h-2.5"}),c.jsx("span",{children:l.drivingLicenseVerified?"Verified DL":"Upload DL"})]})]}),c.jsx(bp,{className:"w-3 h-3 text-slate-400"})]}),v&&c.jsxs("div",{className:"absolute right-0 top-12 w-64 rounded-xl bg-[#141416] border border-white/10 shadow-2xl p-3 z-50",children:[c.jsxs("div",{className:"border-b border-white/10 pb-2 mb-2",children:[c.jsx("p",{className:"text-xs font-bold text-white",children:l.fullName}),c.jsx("p",{className:"text-[11px] text-slate-400 truncate",children:l.email||l.phoneNumber}),c.jsxs("div",{className:"mt-1.5 inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-semibold",children:[c.jsx($l,{className:"w-3 h-3"}),c.jsx("span",{children:l.drivingLicenseVerified?`DL: ${l.drivingLicenseNumber||"Verified"}`:"DL Pending Verification"})]})]}),c.jsxs("button",{onClick:()=>{s(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2",children:[c.jsx(Ml,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"My Rental Passes"})]}),c.jsxs("button",{onClick:()=>{a(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:bg-white/5 transition flex items-center space-x-2",children:[c.jsx(Ar,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Driving License & KYC"})]}),c.jsxs("button",{onClick:()=>{h(),y(!1)},className:"w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-500/10 transition flex items-center space-x-2 mt-1",children:[c.jsx(h1,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Log Out"})]})]})]}):c.jsxs("button",{onClick:a,className:"flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-bold text-xs shadow-teal-glow hover:opacity-95 transition",children:[c.jsx(y1,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Login / Sign Up"})]})]})]})})},b1=({cities:t,selectedCity:e,onSelectCity:n,onSearch:i,onOpenFirst3D:r})=>{var y,m;const{t:s}=Jl(),[a,o]=ce.useState("HOURLY"),l=t.find(d=>d.name===e)||t[0],u=l?l.hubs:[],[h,f]=ce.useState(((y=u[0])==null?void 0:y.name)||"Kempegowda Intl Airport (BLR)"),[p,g]=ce.useState(((m=u[0])==null?void 0:m.name)||"Kempegowda Intl Airport (BLR)"),v=d=>{d.preventDefault(),i(e,h,a)};return c.jsxs("div",{className:"relative w-full min-h-[680px] lg:min-h-[740px] flex flex-col justify-center overflow-hidden border-b border-white/10",children:[c.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen scale-105 transition-transform duration-1000",style:{backgroundImage:"url('/hero-bg.jpg')"}}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/60"}),c.jsx("div",{className:"absolute top-1/4 right-1/4 w-96 h-96 bg-[#00E5C7]/10 rounded-full blur-3xl pointer-events-none"}),c.jsx("div",{className:"absolute bottom-10 right-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"}),c.jsx("div",{className:"relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10 w-full",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[c.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[c.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#141416]/90 border border-[#00E5C7]/40 shadow-teal-glow",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-[#00E5C7] animate-ping"}),c.jsx("span",{className:"text-xs font-bold tracking-wider text-[#00E5C7] uppercase",children:"Pan-India Premium Mobility"})]}),c.jsx("h1",{className:"text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-tight",children:s("heroTitle")}),c.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed",children:[s("heroSubtitle")," Experience India's roads with instant digital booking, transparent INR rates, and zero security deposit options."]}),c.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-2 max-w-lg",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-[#00E5C7]",children:"14+ Metros"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Airports & Tech Hubs"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-white",children:"500+ Rides"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Bikes, Scooters, EVs, SUVs"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416]/80 border border-white/10",children:[c.jsx("p",{className:"text-xl font-bold font-display text-[#D4AF37]",children:"4.96 ★"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"120,000+ Trips"})]})]}),c.jsx("div",{className:"pt-2 flex flex-wrap gap-3",children:c.jsxs("button",{onClick:r,className:"flex items-center space-x-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#141416] via-[#1E1E24] to-[#141416] border border-[#00E5C7]/50 hover:border-[#00E5C7] text-white font-semibold text-xs shadow-teal-glow transition",children:[c.jsx(Vh,{className:"w-4 h-4 text-[#00E5C7] animate-spin",style:{animationDuration:"8s"}}),c.jsx("span",{children:"Launch Interactive 3D Studio"}),c.jsx(i1,{className:"w-4 h-4 text-[#00E5C7]"})]})})]}),c.jsx("div",{className:"lg:col-span-5",children:c.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/15 relative",children:[c.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4 mb-5",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold font-display text-white",children:s("searchBarTitle")}),c.jsx("p",{className:"text-xs text-slate-400",children:"Pickup & drop anytime across Indian hubs"})]}),c.jsx(Gh,{className:"w-5 h-5 text-[#00E5C7]"})]}),c.jsx("div",{className:"grid grid-cols-3 gap-1 bg-[#0A0A0B] p-1 rounded-xl border border-white/10 mb-5",children:["HOURLY","DAILY","MONTHLY"].map(d=>c.jsx("button",{type:"button",onClick:()=>o(d),className:`py-2 text-xs font-bold rounded-lg transition ${a===d?"bg-[#00E5C7] text-black shadow-teal-glow":"text-slate-400 hover:text-white"}`,children:s(d==="HOURLY"?"hourly":d==="DAILY"?"daily":"monthly")},d))}),c.jsxs("form",{onSubmit:v,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:s("pickupCity")}),c.jsxs("div",{className:"relative",children:[c.jsx("select",{value:e,onChange:d=>{n(d.target.value);const x=t.find(_=>_.name===d.target.value);x&&x.hubs.length>0&&(f(x.hubs[0].name),g(x.hubs[0].name))},className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:t.map(d=>c.jsxs("option",{value:d.name,children:[d.name," (",d.state,")"]},d.id))}),c.jsx(La,{className:"absolute right-3.5 top-3 w-4 h-4 text-[#00E5C7] pointer-events-none"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:s("pickupHub")}),c.jsx("select",{value:h,onChange:d=>f(d.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:u.map(d=>c.jsxs("option",{value:d.name,children:[d.name," — ",d.landmark]},d.id))})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400",children:s("dropHub")}),c.jsx("span",{className:"text-[10px] text-[#00E5C7] font-semibold",children:"Different hub allowed"})]}),c.jsx("select",{value:p,onChange:d=>g(d.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:u.map(d=>c.jsx("option",{value:d.name,children:d.name},d.id))})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[c.jsxs("div",{className:"bg-[#0A0A0B] p-2.5 rounded-xl border border-white/10",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(qg,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Duration"})]}),c.jsx("p",{className:"text-xs font-bold text-white mt-0.5",children:a==="HOURLY"?"Min 4 Hours":a==="DAILY"?"24 Hours / Day":"30 Days Monthly"})]}),c.jsxs("div",{className:"bg-[#0A0A0B] p-2.5 rounded-xl border border-white/10",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(Ar,{className:"w-3 h-3 text-[#D4AF37]"}),c.jsx("span",{children:"Inclusions"})]}),c.jsx("p",{className:"text-xs font-bold text-white mt-0.5",children:"2 Helmets + Fastag"})]})]}),c.jsxs("button",{type:"submit",className:"w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsx(vx,{className:"w-4 h-4"}),c.jsxs("span",{children:["Show Available Vehicles in ",e]})]})]})]})})]})})]})},T1=({vehicle:t,durationMode:e,onOpen3D:n,onQuickBook:i,onToggleCompare:r,isCompared:s,isWishlisted:a,onToggleWishlist:o})=>{const{t:l}=Jl(),u=e==="HOURLY"?t.pricePerHour:e==="DAILY"?t.pricePerDay:t.pricePerMonth,h=l(e==="HOURLY"?"perHour":e==="DAILY"?"perDay":"perMonth");return c.jsxs("div",{className:"glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-[#00E5C7]/50 transition-all duration-300",children:[c.jsxs("div",{className:"relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#1E1E24] to-[#141416]",children:[c.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/40"}),c.jsxs("div",{className:"absolute top-3 left-3 flex flex-wrap gap-1.5",children:[c.jsx("span",{className:"px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#0A0A0B]/80 text-[#00E5C7] border border-[#00E5C7]/30 backdrop-blur-md",children:t.vehicleType.replace("_"," ")}),c.jsx("span",{className:`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${t.fuelType==="ELECTRIC"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-amber-500/20 text-amber-300 border border-amber-500/40"}`,children:t.fuelType})]}),c.jsx("button",{onClick:()=>o(t.id),className:"absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0A0A0B]/70 border border-white/15 flex items-center justify-center text-slate-300 hover:text-rose-400 transition",children:c.jsx(rx,{className:`w-4 h-4 ${a?"fill-rose-500 text-rose-500":""}`})}),c.jsxs("button",{onClick:()=>n(t),className:"absolute bottom-3 right-3 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#0A0A0B]/80 hover:bg-[#00E5C7] text-[#00E5C7] hover:text-black border border-[#00E5C7]/50 font-bold text-[11px] backdrop-blur-md transition shadow-teal-glow",children:[c.jsx(Vh,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:l("threeDStudio")})]}),c.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center space-x-1 text-xs font-semibold text-white bg-black/60 px-2 py-1 rounded-md backdrop-blur-md",children:[c.jsx(_1,{className:"w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]"}),c.jsx("span",{children:t.rating}),c.jsxs("span",{className:"text-slate-400 text-[10px]",children:["(",t.tripsCompleted," trips)"]})]})]}),c.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[11px] uppercase tracking-widest font-semibold text-slate-400",children:t.brand}),c.jsx("h4",{className:"text-lg font-bold text-white font-display leading-snug",children:t.name}),c.jsx("p",{className:"text-xs text-[#00E5C7] font-medium",children:t.model})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2 bg-[#0A0A0B]/60 p-2.5 rounded-xl border border-white/5",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(tx,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:l("topSpeed")}),c.jsxs("p",{className:"text-xs font-bold text-white font-mono",children:[t.maxSpeed," km/h"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Gh,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:l("acceleration")}),c.jsxs("p",{className:"text-xs font-bold text-white font-mono",children:[t.zeroToHundred,"s"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(o1,{className:"w-3.5 h-3.5 text-slate-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:"Capacity / Spec"}),c.jsx("p",{className:"text-[11px] font-bold text-slate-200 truncate",children:t.engineOrBattery})]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(x1,{className:"w-3.5 h-3.5 text-emerald-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-semibold",children:"Mileage / Range"}),c.jsx("p",{className:"text-[11px] font-bold text-slate-200",children:t.mileageOrRange})]})]})]}),c.jsxs("div",{className:"pt-2 border-t border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] text-slate-400 font-medium",children:"Starting at"}),c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsxs("span",{className:"text-xl font-extrabold font-display text-white",children:["₹",u.toLocaleString("en-IN")]}),c.jsx("span",{className:"text-xs text-slate-400 font-semibold",children:h})]}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:["₹",t.securityDeposit.toLocaleString("en-IN")," deposit"]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>r(t),className:`p-2.5 rounded-xl border text-xs font-semibold transition ${s?"bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]":"bg-[#141416] border-white/10 text-slate-400 hover:text-white"}`,title:"Compare with other rides",children:c.jsx(ox,{className:"w-4 h-4"})}),c.jsxs("button",{onClick:()=>i(t),className:"px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition flex items-center space-x-1.5",children:[c.jsx("span",{children:l("quickBook")}),c.jsx(ql,{className:"w-3.5 h-3.5"})]})]})]})]})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="169",A1=0,Ap=1,C1=2,Px=1,Lx=2,si=3,qi=0,sn=1,Yn=2,Gi=0,ps=1,Cp=2,Rp=3,Np=4,R1=5,fr=100,N1=101,P1=102,L1=103,D1=104,I1=200,U1=201,k1=202,F1=203,cd=204,ud=205,O1=206,B1=207,z1=208,H1=209,j1=210,V1=211,G1=212,W1=213,X1=214,dd=0,hd=1,fd=2,ws=3,pd=4,md=5,gd=6,xd=7,Dx=0,Y1=1,q1=2,Wi=0,$1=1,K1=2,Z1=3,J1=4,Q1=5,eS=6,tS=7,Ix=300,bs=301,Ts=302,vd=303,_d=304,Ql=306,yd=1e3,vr=1001,Sd=1002,En=1003,nS=1004,co=1005,kn=1006,Uc=1007,_r=1008,xi=1009,Ux=1010,kx=1011,Da=1012,Xh=1013,Cr=1014,ui=1015,Ba=1016,Yh=1017,qh=1018,As=1020,Fx=35902,Ox=1021,Bx=1022,On=1023,zx=1024,Hx=1025,ms=1026,Cs=1027,jx=1028,$h=1029,Vx=1030,Kh=1031,Zh=1033,Wo=33776,Xo=33777,Yo=33778,qo=33779,Md=35840,Ed=35841,wd=35842,bd=35843,Td=36196,Ad=37492,Cd=37496,Rd=37808,Nd=37809,Pd=37810,Ld=37811,Dd=37812,Id=37813,Ud=37814,kd=37815,Fd=37816,Od=37817,Bd=37818,zd=37819,Hd=37820,jd=37821,$o=36492,Vd=36494,Gd=36495,Gx=36283,Wd=36284,Xd=36285,Yd=36286,iS=3200,rS=3201,Wx=0,sS=1,Li="",Gn="srgb",Qi="srgb-linear",Jh="display-p3",ec="display-p3-linear",El="linear",dt="srgb",wl="rec709",bl="p3",Ir=7680,Pp=519,aS=512,oS=513,lS=514,Xx=515,cS=516,uS=517,dS=518,hS=519,Lp=35044,Dp="300 es",di=2e3,Tl=2001;class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,Al=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function fS(t,e){return(t%e+e)%e}function Fc(t,e,n){return(1-n)*t+n*e}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],f=i[7],p=i[2],g=i[5],v=i[8],y=r[0],m=r[3],d=r[6],x=r[1],_=r[4],M=r[7],L=r[2],N=r[5],T=r[8];return s[0]=a*y+o*x+l*L,s[3]=a*m+o*_+l*N,s[6]=a*d+o*M+l*T,s[1]=u*y+h*x+f*L,s[4]=u*m+h*_+f*N,s[7]=u*d+h*M+f*T,s[2]=p*y+g*x+v*L,s[5]=p*m+g*_+v*N,s[8]=p*d+g*M+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=h*a-o*u,p=o*l-h*s,g=u*s-a*l,v=n*f+i*p+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*u-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=p*y,e[4]=(h*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=g*y,e[7]=(i*l-u*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new Ve;function Yx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pS(){const t=Cl("canvas");return t.style.display="block",t}const Ip={};function Ko(t){t in Ip||(Ip[t]=!0,console.warn(t))}function mS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function gS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Up=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[Qi]:{transfer:El,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Gn]:{transfer:dt,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ec]:{transfer:El,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Up)},[Jh]:{transfer:dt,primaries:bl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(kp),fromReference:t=>t.applyMatrix3(Up).convertLinearToSRGB()}},vS=new Set([Qi,ec]),nt={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!vS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ws[e].toReference,r=Ws[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ws[t].primaries},getTransfer:function(t){return t===Li?El:Ws[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ws[e].luminanceCoefficients)}};function gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ur;class _S{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ur===void 0&&(Ur=Cl("canvas")),Ur.width=e.width,Ur.height=e.height;const i=Ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yS=0;class qx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zc(r[a].image)):s.push(zc(r[a]))}else s=zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?_S.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SS=0;class an extends Ds{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=vr,r=vr,s=kn,a=_r,o=On,l=xi,u=an.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=za(),this.name="",this.source=new qx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yd:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yd:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ix;an.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,n=0,i=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],p=l[1],g=l[5],v=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(g+1)/2,L=(d+1)/2,N=(h+p)/4,T=(f+y)/4,D=(v+m)/4;return _>M&&_>L?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=N/i,s=T/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=N/r,s=D/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=T/s,r=D/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-v)*(m-v)+(f-y)*(f-y)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-y)/x,this.z=(p-h)/x,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MS extends Ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new at(0,0,e,n),this.scissorTest=!1,this.viewport=new at(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends MS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class $x extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ES extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const p=s[a+0],g=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==p||u!==g||h!==v){let m=1-o;const d=l*p+u*g+h*v+f*y,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const L=Math.sqrt(_),N=Math.atan2(L,d*x);m=Math.sin(m*N)/L,o=Math.sin(o*N)/L}const M=o*x;if(l=l*m+p*M,u=u*m+g*M,h=h*m+v*M,f=f*m+y*M,m===1-o){const L=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=L,u*=L,h*=L,f*=L}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],f=s[a],p=s[a+1],g=s[a+2],v=s[a+3];return e[n]=o*v+h*f+l*g-u*p,e[n+1]=l*v+h*p+u*f-o*g,e[n+2]=u*v+h*g+o*p-l*f,e[n+3]=h*v-o*f-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),f=o(s/2),p=l(i/2),g=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=p*h*f+u*g*v,this._y=u*g*f-p*h*v,this._z=u*h*v+p*g*f,this._w=u*h*f-p*g*v;break;case"YXZ":this._x=p*h*f+u*g*v,this._y=u*g*f-p*h*v,this._z=u*h*v-p*g*f,this._w=u*h*f+p*g*v;break;case"ZXY":this._x=p*h*f-u*g*v,this._y=u*g*f+p*h*v,this._z=u*h*v+p*g*f,this._w=u*h*f-p*g*v;break;case"ZYX":this._x=p*h*f-u*g*v,this._y=u*g*f+p*h*v,this._z=u*h*v-p*g*f,this._w=u*h*f+p*g*v;break;case"YZX":this._x=p*h*f+u*g*v,this._y=u*g*f+p*h*v,this._z=u*h*v-p*g*f,this._w=u*h*f-p*g*v;break;case"XZY":this._x=p*h*f-u*g*v,this._y=u*g*f-p*h*v,this._z=u*h*v+p*g*f,this._w=u*h*f+p*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],f=n[10],p=i+o+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),f=Math.sin((1-n)*h)/u,p=Math.sin(n*h)/u;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*u+a*f-o*h,this.y=i+l*h+o*u-s*f,this.z=r+l*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hc.copy(this).projectOnVector(e),this.sub(Hc)}reflect(e){return this.sub(Hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hc=new z,Fp=new Ha;class ja{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),ho.subVectors(this.max,Xs),kr.subVectors(e.a,Xs),Fr.subVectors(e.b,Xs),Or.subVectors(e.c,Xs),Si.subVectors(Fr,kr),Mi.subVectors(Or,Fr),ir.subVectors(kr,Or);let n=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-ir.z,ir.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,ir.z,0,-ir.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-ir.y,ir.x,0];return!jc(n,kr,Fr,Or,ho)||(n=[1,0,0,0,1,0,0,0,1],!jc(n,kr,Fr,Or,ho))?!1:(fo.crossVectors(Si,Mi),n=[fo.x,fo.y,fo.z],jc(n,kr,Fr,Or,ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new z,new z,new z,new z,new z,new z,new z,new z],Rn=new z,uo=new ja,kr=new z,Fr=new z,Or=new z,Si=new z,Mi=new z,ir=new z,Xs=new z,ho=new z,fo=new z,rr=new z;function jc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){rr.fromArray(t,s);const o=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),u=n.dot(rr),h=i.dot(rr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const wS=new ja,Ys=new z,Vc=new z;class tc{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Vc)),this.expandByPoint(Ys.copy(e.center).sub(Vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new z,Gc=new z,po=new z,Ei=new z,Wc=new z,mo=new z,Xc=new z;class Kx{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gc.copy(e).add(n).multiplyScalar(.5),po.copy(n).sub(e).normalize(),Ei.copy(this.origin).sub(Gc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(po),o=Ei.dot(this.direction),l=-Ei.dot(po),u=Ei.lengthSq(),h=Math.abs(1-a*a);let f,p,g,v;if(h>0)if(f=a*l-o,p=a*o-l,v=s*h,f>=0)if(p>=-v)if(p<=v){const y=1/h;f*=y,p*=y,g=f*(f+a*p+2*o)+p*(a*f+p+2*l)+u}else p=s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+u;else p=-s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+u;else p<=-v?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+u):p<=v?(f=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+p*(p+2*l)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),g=-f*f+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gc).addScaledVector(po,p),g}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Wc.subVectors(n,e),mo.subVectors(i,e),Xc.crossVectors(Wc,mo);let a=this.direction.dot(Xc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,e);const l=o*this.direction.dot(mo.crossVectors(Ei,mo));if(l<0)return null;const u=o*this.direction.dot(Wc.cross(Ei));if(u<0||l+u>a)return null;const h=-o*Ei.dot(Xc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,l,u,h,f,p,g,v,y,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,f,p,g,v,y,m)}set(e,n,i,r,s,a,o,l,u,h,f,p,g,v,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=v,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Br.setFromMatrixColumn(e,0).length(),s=1/Br.setFromMatrixColumn(e,1).length(),a=1/Br.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*h,g=a*f,v=o*h,y=o*f;n[0]=l*h,n[4]=-l*f,n[8]=u,n[1]=g+v*u,n[5]=p-y*u,n[9]=-o*l,n[2]=y-p*u,n[6]=v+g*u,n[10]=a*l}else if(e.order==="YXZ"){const p=l*h,g=l*f,v=u*h,y=u*f;n[0]=p+y*o,n[4]=v*o-g,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=g*o-v,n[6]=y+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*h,g=l*f,v=u*h,y=u*f;n[0]=p-y*o,n[4]=-a*f,n[8]=v+g*o,n[1]=g+v*o,n[5]=a*h,n[9]=y-p*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*h,g=a*f,v=o*h,y=o*f;n[0]=l*h,n[4]=v*u-g,n[8]=p*u+y,n[1]=l*f,n[5]=y*u+p,n[9]=g*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*u,v=o*l,y=o*u;n[0]=l*h,n[4]=y-p*f,n[8]=v*f+g,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=g*f+v,n[10]=p-y*f}else if(e.order==="XZY"){const p=a*l,g=a*u,v=o*l,y=o*u;n[0]=l*h,n[4]=-f,n[8]=u*h,n[1]=p*f+y,n[5]=a*h,n[9]=g*f-v,n[2]=v*f-g,n[6]=o*h,n[10]=y*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bS,e,TS)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),wi.crossVectors(i,cn),wi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),wi.crossVectors(i,cn)),wi.normalize(),go.crossVectors(cn,wi),r[0]=wi.x,r[4]=go.x,r[8]=cn.x,r[1]=wi.y,r[5]=go.y,r[9]=cn.y,r[2]=wi.z,r[6]=go.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],f=i[5],p=i[9],g=i[13],v=i[2],y=i[6],m=i[10],d=i[14],x=i[3],_=i[7],M=i[11],L=i[15],N=r[0],T=r[4],D=r[8],W=r[12],S=r[1],w=r[5],F=r[9],V=r[13],q=r[2],K=r[6],H=r[10],Q=r[14],U=r[3],ee=r[7],A=r[11],C=r[15];return s[0]=a*N+o*S+l*q+u*U,s[4]=a*T+o*w+l*K+u*ee,s[8]=a*D+o*F+l*H+u*A,s[12]=a*W+o*V+l*Q+u*C,s[1]=h*N+f*S+p*q+g*U,s[5]=h*T+f*w+p*K+g*ee,s[9]=h*D+f*F+p*H+g*A,s[13]=h*W+f*V+p*Q+g*C,s[2]=v*N+y*S+m*q+d*U,s[6]=v*T+y*w+m*K+d*ee,s[10]=v*D+y*F+m*H+d*A,s[14]=v*W+y*V+m*Q+d*C,s[3]=x*N+_*S+M*q+L*U,s[7]=x*T+_*w+M*K+L*ee,s[11]=x*D+_*F+M*H+L*A,s[15]=x*W+_*V+M*Q+L*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],f=e[6],p=e[10],g=e[14],v=e[3],y=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*o*p+i*u*p+r*o*g-i*l*g)+y*(+n*l*g-n*u*p+s*a*p-r*a*g+r*u*h-s*l*h)+m*(+n*u*f-n*o*g-s*a*f+i*a*g+s*o*h-i*u*h)+d*(-r*o*h-n*l*f+n*o*p+r*a*f-i*a*p+i*l*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],f=e[9],p=e[10],g=e[11],v=e[12],y=e[13],m=e[14],d=e[15],x=f*m*u-y*p*u+y*l*g-o*m*g-f*l*d+o*p*d,_=v*p*u-h*m*u-v*l*g+a*m*g+h*l*d-a*p*d,M=h*y*u-v*f*u+v*o*g-a*y*g-h*o*d+a*f*d,L=v*f*l-h*y*l-v*o*p+a*y*p+h*o*m-a*f*m,N=n*x+i*_+r*M+s*L;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/N;return e[0]=x*T,e[1]=(y*p*s-f*m*s-y*r*g+i*m*g+f*r*d-i*p*d)*T,e[2]=(o*m*s-y*l*s+y*r*u-i*m*u-o*r*d+i*l*d)*T,e[3]=(f*l*s-o*p*s-f*r*u+i*p*u+o*r*g-i*l*g)*T,e[4]=_*T,e[5]=(h*m*s-v*p*s+v*r*g-n*m*g-h*r*d+n*p*d)*T,e[6]=(v*l*s-a*m*s-v*r*u+n*m*u+a*r*d-n*l*d)*T,e[7]=(a*p*s-h*l*s+h*r*u-n*p*u-a*r*g+n*l*g)*T,e[8]=M*T,e[9]=(v*f*s-h*y*s-v*i*g+n*y*g+h*i*d-n*f*d)*T,e[10]=(a*y*s-v*o*s+v*i*u-n*y*u-a*i*d+n*o*d)*T,e[11]=(h*o*s-a*f*s-h*i*u+n*f*u+a*i*g-n*o*g)*T,e[12]=L*T,e[13]=(h*y*r-v*f*r+v*i*p-n*y*p-h*i*m+n*f*m)*T,e[14]=(v*o*r-a*y*r-v*i*l+n*y*l+a*i*m-n*o*m)*T,e[15]=(a*f*r-h*o*r+h*i*l-n*f*l-a*i*p+n*o*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,f=o+o,p=s*u,g=s*h,v=s*f,y=a*h,m=a*f,d=o*f,x=l*u,_=l*h,M=l*f,L=i.x,N=i.y,T=i.z;return r[0]=(1-(y+d))*L,r[1]=(g+M)*L,r[2]=(v-_)*L,r[3]=0,r[4]=(g-M)*N,r[5]=(1-(p+d))*N,r[6]=(m+x)*N,r[7]=0,r[8]=(v+_)*T,r[9]=(m-x)*T,r[10]=(1-(p+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Br.set(r[0],r[1],r[2]).length();const a=Br.set(r[4],r[5],r[6]).length(),o=Br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,h=1/a,f=1/o;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,v;if(o===di)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Tl)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,u=1/(n-e),h=1/(i-r),f=1/(a-s),p=(n+e)*u,g=(i+r)*h;let v,y;if(o===di)v=(a+s)*f,y=-2*f;else if(o===Tl)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Br=new z,Nn=new pt,bS=new z(0,0,0),TS=new z(1,1,1),wi=new z,go=new z,cn=new z,Op=new pt,Bp=new Ha;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],f=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AS=0;const zp=new z,zr=new Ha,ni=new pt,xo=new z,qs=new z,CS=new z,RS=new Ha,Hp=new z(1,0,0),jp=new z(0,1,0),Vp=new z(0,0,1),Gp={type:"added"},NS={type:"removed"},Hr={type:"childadded",child:null},Yc={type:"childremoved",child:null};class bt extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new z,n=new Jn,i=new Ha,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ve}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Hp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xo.copy(e):xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(qs,xo,this.up):ni.lookAt(xo,qs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(ni),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NS),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,RS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new z(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new z,ii=new z,qc=new z,ri=new z,jr=new z,Vr=new z,Wp=new z,$c=new z,Kc=new z,Zc=new z,Jc=new at,Qc=new at,eu=new at;class Fn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ii.subVectors(i,n),qc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ii),l=Pn.dot(qc),u=ii.dot(ii),h=ii.dot(qc),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,g=(u*l-o*h)*p,v=(a*h-o*l)*p;return s.set(1-g-v,v,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Jc.setScalar(0),Qc.setScalar(0),eu.setScalar(0),Jc.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jc,s.x),a.addScaledVector(Qc,s.y),a.addScaledVector(eu,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ii.subVectors(e,n),Pn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Fn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Vr.subVectors(s,i),$c.subVectors(e,i);const l=jr.dot($c),u=Vr.dot($c);if(l<=0&&u<=0)return n.copy(i);Kc.subVectors(e,r);const h=jr.dot(Kc),f=Vr.dot(Kc);if(h>=0&&f<=h)return n.copy(r);const p=l*f-h*u;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(jr,a);Zc.subVectors(e,s);const g=jr.dot(Zc),v=Vr.dot(Zc);if(v>=0&&g<=v)return n.copy(s);const y=g*u-l*v;if(y<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(Vr,o);const m=h*v-g*f;if(m<=0&&f-h>=0&&g-v>=0)return Wp.subVectors(s,r),o=(f-h)/(f-h+(g-v)),n.copy(r).addScaledVector(Wp,o);const d=1/(m+y+p);return a=y*d,o=p*d,n.copy(i).addScaledVector(jr,a).addScaledVector(Vr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function tu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=fS(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=tu(a,s,e+1/3),this.g=tu(a,s,e),this.b=tu(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=Jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Bc(e.r),this.g=Bc(e.g),this.b=Bc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return nt.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Xt(Ht.r*255,0,255))*65536+Math.round(Xt(Ht.g*255,0,255))*256+Math.round(Xt(Ht.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Gn){nt.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(vo);const i=Fc(bi.h,vo.h,n),r=Fc(bi.s,vo.s,n),s=Fc(bi.l,vo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ge;Ge.NAMES=Jx;let PS=0;class Is extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=za(),this.name="",this.type="Material",this.blending=ps,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cd,this.blendDst=ud,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cd&&(i.blendSrc=this.blendSrc),this.blendDst!==ud&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pa extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new z,_o=new Ze;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lp,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)_o.fromBufferAttribute(this,n),_o.applyMatrix3(e),this.setXY(n,_o.x,_o.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lp&&(e.usage=this.usage),e}}class Qx extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ev extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LS=0;const _n=new pt,nu=new bt,Gr=new z,un=new ja,$s=new ja,Nt=new z;class xn extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yx(e)?ev:Qx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return nu.lookAt(e),nu.updateMatrix(),this.applyMatrix4(nu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(un.min,$s.min),un.expandByPoint(Nt),Nt.addVectors(un.max,$s.max),un.expandByPoint(Nt)):(un.expandByPoint($s.min),un.expandByPoint($s.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Nt.fromBufferAttribute(o,u),l&&(Gr.fromBufferAttribute(e,u),Nt.add(Gr)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new z,l[D]=new z;const u=new z,h=new z,f=new z,p=new Ze,g=new Ze,v=new Ze,y=new z,m=new z;function d(D,W,S){u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,W),f.fromBufferAttribute(i,S),p.fromBufferAttribute(s,D),g.fromBufferAttribute(s,W),v.fromBufferAttribute(s,S),h.sub(u),f.sub(u),g.sub(p),v.sub(p);const w=1/(g.x*v.y-v.x*g.y);isFinite(w)&&(y.copy(h).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(w),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(w),o[D].add(y),o[W].add(y),o[S].add(y),l[D].add(m),l[W].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,W=x.length;D<W;++D){const S=x[D],w=S.start,F=S.count;for(let V=w,q=w+F;V<q;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new z,M=new z,L=new z,N=new z;function T(D){L.fromBufferAttribute(r,D),N.copy(L);const W=o[D];_.copy(W),_.sub(L.multiplyScalar(L.dot(W))).normalize(),M.crossVectors(N,W);const w=M.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,w)}for(let D=0,W=x.length;D<W;++D){const S=x[D],w=S.start,F=S.count;for(let V=w,q=w+F;V<q;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,u=new z,h=new z,f=new z;if(e)for(let p=0,g=e.count;p<g;p+=3){const v=e.getX(p+0),y=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),o.add(h),l.add(h),u.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,f=o.normalized,p=new u.constructor(l.length*h);let g=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?g=l[y]*o.data.stride+o.offset:g=l[y]*h;for(let d=0;d<h;d++)p[v++]=u[g++]}return new Kn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new xn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const p=u[h],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,p=u.length;f<p;f++){const g=u[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xp=new pt,sr=new Kx,yo=new tc,Yp=new z,So=new z,Mo=new z,Eo=new z,iu=new z,wo=new z,qp=new z,bo=new z;class st extends bt{constructor(e=new xn,n=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],f=s[l];h!==0&&(iu.fromBufferAttribute(f,e),a?wo.addScaledVector(iu,h):wo.addScaledVector(iu.sub(n),h))}n.add(wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(yo.containsPoint(sr.origin)===!1&&(sr.intersectSphere(yo,Yp)===null||sr.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(Xp.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Xp),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const m=p[v],d=a[m.materialIndex],x=Math.max(m.start,g.start),_=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,L=_;M<L;M+=3){const N=o.getX(M),T=o.getX(M+1),D=o.getX(M+2);r=To(this,d,e,i,u,h,f,N,T,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=v,d=y;m<d;m+=3){const x=o.getX(m),_=o.getX(m+1),M=o.getX(m+2);r=To(this,a,e,i,u,h,f,x,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=p.length;v<y;v++){const m=p[v],d=a[m.materialIndex],x=Math.max(m.start,g.start),_=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=x,L=_;M<L;M+=3){const N=M,T=M+1,D=M+2;r=To(this,d,e,i,u,h,f,N,T,D),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=v,d=y;m<d;m+=3){const x=m,_=m+1,M=m+2;r=To(this,a,e,i,u,h,f,x,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function DS(t,e,n,i,r,s,a,o){let l;if(e.side===sn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;bo.copy(o),bo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bo);return u<n.near||u>n.far?null:{distance:u,point:bo.clone(),object:t}}function To(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,So),t.getVertexPosition(l,Mo),t.getVertexPosition(u,Eo);const h=DS(t,e,n,i,So,Mo,Eo,qp);if(h){const f=new z;Fn.getBarycoord(qp,So,Mo,Eo,f),r&&(h.uv=Fn.getInterpolatedAttribute(r,o,l,u,f,new Ze)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,l,u,f,new Ze)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,u,f,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:l,c:u,normal:new z,materialIndex:0};Fn.getNormal(So,Mo,Eo,p.normal),h.face=p,h.barycoord=f}return h}class Un extends xn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],f=[];let p=0,g=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(f,2));function v(y,m,d,x,_,M,L,N,T,D,W){const S=M/T,w=L/D,F=M/2,V=L/2,q=N/2,K=T+1,H=D+1;let Q=0,U=0;const ee=new z;for(let A=0;A<H;A++){const C=A*w-V;for(let ie=0;ie<K;ie++){const se=ie*S-F;ee[y]=se*x,ee[m]=C*_,ee[d]=q,u.push(ee.x,ee.y,ee.z),ee[y]=0,ee[m]=0,ee[d]=N>0?1:-1,h.push(ee.x,ee.y,ee.z),f.push(ie/T),f.push(1-A/D),Q+=1}}for(let A=0;A<D;A++)for(let C=0;C<T;C++){const ie=p+C+K*A,se=p+C+K*(A+1),P=p+(C+1)+K*(A+1),j=p+(C+1)+K*A;l.push(ie,se,j),l.push(se,P,j),U+=6}o.addGroup(g,U,W),g+=U,p+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const r in i)e[r]=i[r]}return e}function IS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const US={clone:Rs,merge:Gt};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=FS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=IS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nv extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new z,$p=new Ze,Kp=new Ze;class Qt extends nv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,n){return this.getViewBounds(e,$p,Kp),n.subVectors(Kp,$p)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class OS extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new Qt(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new Qt(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new Qt(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new Qt(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const u=new Qt(Wr,Xr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,p,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class iv extends an{constructor(e,n,i,r,s,a,o,l,u,h){e=e!==void 0?e:[],n=n!==void 0?n:bs,super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BS extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new iv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Un(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Gi});s.uniforms.tEquirect.value=n;const a=new st(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=kn),new OS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const ru=new z,zS=new z,HS=new Ve;class dr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ru.subVectors(i,n).cross(zS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ru),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HS.getNormalMatrix(e),r=this.coplanarPoint(ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new tc,Ao=new z;class Qh{constructor(e=new dr,n=new dr,i=new dr,r=new dr,s=new dr,a=new dr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],v=r[9],y=r[10],m=r[11],d=r[12],x=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,p-u,m-g,M-d).normalize(),i[1].setComponents(l+s,p+u,m+g,M+d).normalize(),i[2].setComponents(l+a,p+h,m+v,M+x).normalize(),i[3].setComponents(l-a,p-h,m-v,M-x).normalize(),i[4].setComponents(l-o,p-f,m-y,M-_).normalize(),n===di)i[5].setComponents(l+o,p+f,m+y,M+_).normalize();else if(n===Tl)i[5].setComponents(o,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jS(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,f=u.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,u,h),o.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const h=l.array,f=l.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,h);else{f.sort((g,v)=>g.start-v.start);let p=0;for(let g=1;g<f.length;g++){const v=f[p],y=f[g];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++p,f[p]=y)}f.length=p+1;for(let g=0,v=f.length;g<v;g++){const y=f[g];t.bufferSubData(u,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Va extends xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,f=e/o,p=n/l,g=[],v=[],y=[],m=[];for(let d=0;d<h;d++){const x=d*p-a;for(let _=0;_<u;_++){const M=_*f-s;v.push(M,-x,0),y.push(0,0,1),m.push(_/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const _=x+u*d,M=x+u*(d+1),L=x+1+u*(d+1),N=x+1+u*d;g.push(_,M,N),g.push(M,L,N)}this.setIndex(g),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.width,e.height,e.widthSegments,e.heightSegments)}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$S=`#ifdef USE_AOMAP
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
#endif`,KS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZS=`#ifdef USE_BATCHING
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
#endif`,JS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nM=`#ifdef USE_IRIDESCENCE
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
#endif`,iM=`#ifdef USE_BUMPMAP
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hM=`#define PI 3.141592653589793
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
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`
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
}`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,kM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,jM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JM=`#if defined( USE_POINTS_UV )
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
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
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
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dE=`#ifdef USE_NORMALMAP
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
#endif`,hE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,NE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`#include <common>
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
}`,$E=`#if DEPTH_PACKING == 3200
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
}`,KE=`#define DISTANCE
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
}`,ZE=`#define DISTANCE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`uniform float scale;
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
}`,tw=`uniform vec3 diffuse;
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
}`,nw=`#include <common>
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
}`,iw=`uniform vec3 diffuse;
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
}`,rw=`#define LAMBERT
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
}`,sw=`#define LAMBERT
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
}`,aw=`#define MATCAP
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
}`,ow=`#define MATCAP
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
}`,lw=`#define NORMAL
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
}`,cw=`#define NORMAL
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
}`,uw=`#define PHONG
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
}`,dw=`#define PHONG
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
}`,hw=`#define STANDARD
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
}`,fw=`#define STANDARD
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
}`,pw=`#define TOON
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
}`,mw=`#define TOON
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
}`,gw=`uniform float size;
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
}`,xw=`uniform vec3 diffuse;
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
}`,vw=`#include <common>
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
}`,_w=`uniform vec3 color;
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
}`,yw=`uniform float rotation;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:VS,alphahash_pars_fragment:GS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:YS,alphatest_pars_fragment:qS,aomap_fragment:$S,aomap_pars_fragment:KS,batching_pars_vertex:ZS,batching_vertex:JS,begin_vertex:QS,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:dM,common:hM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:xM,emissivemap_pars_fragment:vM,colorspace_fragment:_M,colorspace_pars_fragment:yM,envmap_fragment:SM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:UM,envmap_vertex:bM,fog_vertex:TM,fog_pars_vertex:AM,fog_fragment:CM,fog_pars_fragment:RM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:PM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:DM,lights_pars_begin:IM,lights_toon_fragment:kM,lights_toon_pars_fragment:FM,lights_phong_fragment:OM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:HM,lights_fragment_begin:jM,lights_fragment_maps:VM,lights_fragment_end:GM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:qM,map_fragment:$M,map_pars_fragment:KM,map_particle_fragment:ZM,map_particle_pars_fragment:JM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:eE,morphinstance_vertex:tE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:rE,morphtarget_vertex:sE,normal_fragment_begin:aE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:dE,clearcoat_normal_fragment_begin:hE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:xE,premultiplied_alpha_fragment:vE,project_vertex:_E,dithering_fragment:yE,dithering_pars_fragment:SE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:EE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:bE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:CE,skinning_pars_vertex:RE,skinning_vertex:NE,skinnormal_vertex:PE,specularmap_fragment:LE,specularmap_pars_fragment:DE,tonemapping_fragment:IE,tonemapping_pars_fragment:UE,transmission_fragment:kE,transmission_pars_fragment:FE,uv_pars_fragment:OE,uv_pars_vertex:BE,uv_vertex:zE,worldpos_vertex:HE,background_vert:jE,background_frag:VE,backgroundCube_vert:GE,backgroundCube_frag:WE,cube_vert:XE,cube_frag:YE,depth_vert:qE,depth_frag:$E,distanceRGBA_vert:KE,distanceRGBA_frag:ZE,equirect_vert:JE,equirect_frag:QE,linedashed_vert:ew,linedashed_frag:tw,meshbasic_vert:nw,meshbasic_frag:iw,meshlambert_vert:rw,meshlambert_frag:sw,meshmatcap_vert:aw,meshmatcap_frag:ow,meshnormal_vert:lw,meshnormal_frag:cw,meshphong_vert:uw,meshphong_frag:dw,meshphysical_vert:hw,meshphysical_frag:fw,meshtoon_vert:pw,meshtoon_frag:mw,points_vert:gw,points_frag:xw,shadow_vert:vw,shadow_frag:_w,sprite_vert:yw,sprite_frag:Sw},me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Wn={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Wn.physical={uniforms:Gt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Co={r:0,b:0,g:0},or=new Jn,Mw=new pt;function Ew(t,e,n,i,r,s,a){const o=new Ge(0);let l=s===!0?0:1,u,h,f=null,p=0,g=null;function v(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?n:e).get(_)),_}function y(x){let _=!1;const M=v(x);M===null?d(o,l):M&&M.isColor&&(d(M,1),_=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(x,_){const M=v(_);M&&(M.isCubeTexture||M.mapping===Ql)?(h===void 0&&(h=new st(new Un(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Rs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,N,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),or.copy(_.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(or)),h.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,(f!==M||p!==M.version||g!==t.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new st(new Va(2,2),new $i({name:"BackgroundMaterial",uniforms:Rs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=nt.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,g=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function d(x,_){x.getRGB(Co,tv(t)),i.buffers.color.setClear(Co.r,Co.g,Co.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,d(o,l)},render:y,addToRenderList:m}}function ww(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(S,w,F,V,q){let K=!1;const H=f(V,F,w);s!==H&&(s=H,u(s.object)),K=g(S,V,F,q),K&&v(S,V,F,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(S,w,F,V),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function h(S){return t.deleteVertexArray(S)}function f(S,w,F){const V=F.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let K=q[w.id];K===void 0&&(K={},q[w.id]=K);let H=K[V];return H===void 0&&(H=p(l()),K[V]=H),H}function p(S){const w=[],F=[],V=[];for(let q=0;q<n;q++)w[q]=0,F[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:V,object:S,attributes:{},index:null}}function g(S,w,F,V){const q=s.attributes,K=w.attributes;let H=0;const Q=F.getAttributes();for(const U in Q)if(Q[U].location>=0){const A=q[U];let C=K[U];if(C===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(C=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(C=S.instanceColor)),A===void 0||A.attribute!==C||C&&A.data!==C.data)return!0;H++}return s.attributesNum!==H||s.index!==V}function v(S,w,F,V){const q={},K=w.attributes;let H=0;const Q=F.getAttributes();for(const U in Q)if(Q[U].location>=0){let A=K[U];A===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(A=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(A=S.instanceColor));const C={};C.attribute=A,A&&A.data&&(C.data=A.data),q[U]=C,H++}s.attributes=q,s.attributesNum=H,s.index=V}function y(){const S=s.newAttributes;for(let w=0,F=S.length;w<F;w++)S[w]=0}function m(S){d(S,0)}function d(S,w){const F=s.newAttributes,V=s.enabledAttributes,q=s.attributeDivisors;F[S]=1,V[S]===0&&(t.enableVertexAttribArray(S),V[S]=1),q[S]!==w&&(t.vertexAttribDivisor(S,w),q[S]=w)}function x(){const S=s.newAttributes,w=s.enabledAttributes;for(let F=0,V=w.length;F<V;F++)w[F]!==S[F]&&(t.disableVertexAttribArray(F),w[F]=0)}function _(S,w,F,V,q,K,H){H===!0?t.vertexAttribIPointer(S,w,F,q,K):t.vertexAttribPointer(S,w,F,V,q,K)}function M(S,w,F,V){y();const q=V.attributes,K=F.getAttributes(),H=w.defaultAttributeValues;for(const Q in K){const U=K[Q];if(U.location>=0){let ee=q[Q];if(ee===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const A=ee.normalized,C=ee.itemSize,ie=e.get(ee);if(ie===void 0)continue;const se=ie.buffer,P=ie.type,j=ie.bytesPerElement,te=P===t.INT||P===t.UNSIGNED_INT||ee.gpuType===Xh;if(ee.isInterleavedBufferAttribute){const Z=ee.data,de=Z.stride,pe=ee.offset;if(Z.isInstancedInterleavedBuffer){for(let Ae=0;Ae<U.locationSize;Ae++)d(U.location+Ae,Z.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ae=0;Ae<U.locationSize;Ae++)m(U.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,se);for(let Ae=0;Ae<U.locationSize;Ae++)_(U.location+Ae,C/U.locationSize,P,A,de*j,(pe+C/U.locationSize*Ae)*j,te)}else{if(ee.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)d(U.location+Z,ee.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z);t.bindBuffer(t.ARRAY_BUFFER,se);for(let Z=0;Z<U.locationSize;Z++)_(U.location+Z,C/U.locationSize,P,A,C*j,C/U.locationSize*Z*j,te)}}else if(H!==void 0){const A=H[Q];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(U.location,A);break;case 3:t.vertexAttrib3fv(U.location,A);break;case 4:t.vertexAttrib4fv(U.location,A);break;default:t.vertexAttrib1fv(U.location,A)}}}}x()}function L(){D();for(const S in i){const w=i[S];for(const F in w){const V=w[F];for(const q in V)h(V[q].object),delete V[q];delete w[F]}delete i[S]}}function N(S){if(i[S.id]===void 0)return;const w=i[S.id];for(const F in w){const V=w[F];for(const q in V)h(V[q].object),delete V[q];delete w[F]}delete i[S.id]}function T(S){for(const w in i){const F=i[w];if(F[S.id]===void 0)continue;const V=F[S.id];for(const q in V)h(V[q].object),delete V[q];delete F[S.id]}}function D(){W(),a=!0,s!==r&&(s=r,u(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:W,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function bw(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,f){f!==0&&(t.drawArraysInstanced(i,u,h,f),n.update(h,i,f))}function o(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];n.update(g,i,1)}function l(u,h,f,p){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<u.length;v++)a(u[v],h[v],p[v]);else{g.multiDrawArraysInstancedWEBGL(i,u,0,h,0,p,0,f);let v=0;for(let y=0;y<f;y++)v+=h[y];for(let y=0;y<p.length;y++)n.update(v,i,p[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==On&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==xi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ui&&!D)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:L,maxSamples:N}}function Aw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new dr,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||i!==0||r;return r=p,i=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,g){const v=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?h(null):u();else{const x=s?0:i,_=x*4;let M=d.clippingState||null;l.value=M,M=h(v,p,_,g);for(let L=0;L!==_;++L)M[L]=n[L];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,g,v){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const d=g+y*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,M=g;_!==y;++_,M+=4)a.copy(f[_]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Cw(t){let e=new WeakMap;function n(a,o){return o===vd?a.mapping=bs:o===_d&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===vd||o===_d)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new BS(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sv extends nv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,Zp=[.125,.215,.35,.446,.526,.582],pr=20,su=new sv,Jp=new Ge;let au=null,ou=0,lu=0,cu=!1;const hr=(1+Math.sqrt(5))/2,Yr=1/hr,Qp=[new z(-hr,Yr,0),new z(hr,Yr,0),new z(-Yr,0,hr),new z(Yr,0,hr),new z(0,hr,-Yr),new z(0,hr,Yr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class em{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(au,ou,lu),this._renderer.xr.enabled=cu,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bs||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),au=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),lu=this._renderer.getActiveMipmapLevel(),cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ba,format:On,colorSpace:Qi,depthBuffer:!1},r=tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rw(s)),this._blurMaterial=Nw(s,e,n)}return r}_compileMaterial(e){const n=new st(this._lodPlanes[0],e);this._renderer.compile(n,su)}_sceneToCubeUV(e,n,i,r){const o=new Qt(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Jp),h.toneMapping=Wi,h.autoClear=!1;const g=new pa({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new st(new Un,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Jp),y=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const _=this._cubeSize;Ro(r,x*_,d>2?_:0,_,_),h.setRenderTarget(r),y&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===bs||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=im()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,su)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Qp[(r-s-1)%Qp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new st(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*pr-1),y=s/v,m=isFinite(s)?1+Math.floor(h*y):pr;m>pr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pr}`);const d=[];let x=0;for(let T=0;T<pr;++T){const D=T/y,W=Math.exp(-D*D/2);d.push(W),T===0?x+=W:T<m&&(x+=2*W)}for(let T=0;T<d.length;T++)d[T]=d[T]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const M=this._sizeLods[r],L=3*M*(r>_-os?r-_+os:0),N=4*(this._cubeSize-M);Ro(n,L,N,3*M,2*M),l.setRenderTarget(n),l.render(f,su)}}function Rw(t){const e=[],n=[],i=[];let r=t;const s=t-os+1+Zp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-os?l=Zp[a-t+os-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),h=-u,f=1+u,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,v=6,y=3,m=2,d=1,x=new Float32Array(y*v*g),_=new Float32Array(m*v*g),M=new Float32Array(d*v*g);for(let N=0;N<g;N++){const T=N%3*2/3-1,D=N>2?0:-1,W=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];x.set(W,y*v*N),_.set(p,m*v*N);const S=[N,N,N,N,N,N];M.set(S,d*v*N)}const L=new xn;L.setAttribute("position",new Kn(x,y)),L.setAttribute("uv",new Kn(_,m)),L.setAttribute("faceIndex",new Kn(M,d)),e.push(L),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function tm(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Nw(t,e,n){const i=new Float32Array(pr),r=new z(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function nm(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function im(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function Pw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===vd||l===_d,h=l===bs||l===Ts;if(u||h){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new em(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const g=o.image;return u&&g&&g.height>0||h&&g&&r(g)?(n===null&&(n=new em(t)),f=u?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Lw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ko("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dw(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);for(const v in p.morphAttributes){const y=p.morphAttributes[v];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const v in p)e.update(p[v],t.ARRAY_BUFFER);const g=f.morphAttributes;for(const v in g){const y=g[v];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const p=[],g=f.index,v=f.attributes.position;let y=0;if(g!==null){const x=g.array;y=g.version;for(let _=0,M=x.length;_<M;_+=3){const L=x[_+0],N=x[_+1],T=x[_+2];p.push(L,N,N,T,T,L)}}else if(v!==void 0){const x=v.array;y=v.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const L=_+0,N=_+1,T=_+2;p.push(L,N,N,T,T,L)}}else return;const m=new(Yx(p)?ev:Qx)(p,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function h(f){const p=s.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Iw(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,g){t.drawElements(i,g,s,p*a),n.update(g,i,1)}function u(p,g,v){v!==0&&(t.drawElementsInstanced(i,g,s,p*a,v),n.update(g,i,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,p,0,v);let m=0;for(let d=0;d<v;d++)m+=g[d];n.update(m,i,1)}function f(p,g,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)u(p[d]/a,g[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,p,0,y,0,v);let d=0;for(let x=0;x<v;x++)d+=g[x];for(let x=0;x<y.length;x++)n.update(d,i,y[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Uw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kw(t,e,n){const i=new WeakMap,r=new at;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var g=S;p!==void 0&&p.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let L=o.attributes.position.count*M,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const T=new Float32Array(L*N*4*f),D=new $x(T,L,N,f);D.type=ui,D.needsUpdate=!0;const W=M*4;for(let w=0;w<f;w++){const F=d[w],V=x[w],q=_[w],K=L*N*4*w;for(let H=0;H<F.count;H++){const Q=H*W;v===!0&&(r.fromBufferAttribute(F,H),T[K+Q+0]=r.x,T[K+Q+1]=r.y,T[K+Q+2]=r.z,T[K+Q+3]=0),y===!0&&(r.fromBufferAttribute(V,H),T[K+Q+4]=r.x,T[K+Q+5]=r.y,T[K+Q+6]=r.z,T[K+Q+7]=0),m===!0&&(r.fromBufferAttribute(q,H),T[K+Q+8]=r.x,T[K+Q+9]=r.y,T[K+Q+10]=r.z,T[K+Q+11]=q.itemSize===4?r.w:1)}}p={count:f,texture:D,size:new Ze(L,N)},i.set(o,p),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function Fw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class av extends an{constructor(e,n,i,r,s,a,o,l,u,h=ms){if(h!==ms&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ms&&(i=Cr),i===void 0&&h===Cs&&(i=As),super(null,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ov=new an,rm=new av(1,1),lv=new $x,cv=new ES,uv=new iv,sm=[],am=[],om=new Float32Array(16),lm=new Float32Array(9),cm=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sm[r];if(s===void 0&&(s=new Float32Array(r),sm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nc(t,e){let n=am[e];n===void 0&&(n=new Int32Array(e),am[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ow(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function jw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;cm.set(i),t.uniformMatrix2fv(this.addr,!1,cm),Rt(n,i)}}function Vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;lm.set(i),t.uniformMatrix3fv(this.addr,!1,lm),Rt(n,i)}}function Gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;om.set(i),t.uniformMatrix4fv(this.addr,!1,om),Rt(n,i)}}function Ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function $w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function Qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rm.compareFunction=Xx,s=rm):s=ov,n.setTexture2D(e||s,r)}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||cv,r)}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||uv,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||lv,r)}function ib(t){switch(t){case 5126:return Ow;case 35664:return Bw;case 35665:return zw;case 35666:return Hw;case 35674:return jw;case 35675:return Vw;case 35676:return Gw;case 5124:case 35670:return Ww;case 35667:case 35671:return Xw;case 35668:case 35672:return Yw;case 35669:case 35673:return qw;case 5125:return $w;case 36294:return Kw;case 36295:return Zw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function rb(t,e){t.uniform1fv(this.addr,e)}function sb(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function ab(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function ob(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function lb(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cb(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ub(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function db(t,e){t.uniform1iv(this.addr,e)}function hb(t,e){t.uniform2iv(this.addr,e)}function fb(t,e){t.uniform3iv(this.addr,e)}function pb(t,e){t.uniform4iv(this.addr,e)}function mb(t,e){t.uniform1uiv(this.addr,e)}function gb(t,e){t.uniform2uiv(this.addr,e)}function xb(t,e){t.uniform3uiv(this.addr,e)}function vb(t,e){t.uniform4uiv(this.addr,e)}function _b(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||ov,s[a])}function yb(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||cv,s[a])}function Sb(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||uv,s[a])}function Mb(t,e,n){const i=this.cache,r=e.length,s=nc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||lv,s[a])}function Eb(t){switch(t){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return db;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return xb;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Sb;case 36289:case 36303:case 36311:case 36292:return Mb}}class wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ib(n.type)}}class bb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Eb(n.type)}}class Tb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function um(t,e){t.seq.push(e),t.map[e.id]=e}function Ab(t,e,n){const i=t.name,r=i.length;for(uu.lastIndex=0;;){const s=uu.exec(i),a=uu.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){um(n,u===void 0?new wb(o,t,e):new bb(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Tb(o),um(n,f)),n=f}}}class Zo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Ab(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function dm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Cb=37297;let Rb=0;function Nb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Pb(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===bl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===bl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case ec:return[i,"LinearTransferOETF"];case Gn:case Jh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Nb(t.getShaderSource(e),a)}else return r}function Lb(t,e){const n=Pb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Db(t,e){let n;switch(e){case $1:n="Linear";break;case K1:n="Reinhard";break;case Z1:n="Cineon";break;case J1:n="ACESFilmic";break;case eS:n="AgX";break;case tS:n="Neutral";break;case Q1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const No=new z;function Ib(){nt.getLuminanceCoefficients(No);const t=No.x.toFixed(4),e=No.y.toFixed(4),n=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function kb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Fb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ia(t){return t!==""}function fm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(t){return t.replace(Ob,zb)}const Bb=new Map;function zb(t,e){let n=je[e];if(n===void 0){const i=Bb.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qd(n)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(t){return t.replace(Hb,jb)}function jb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Vb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Px?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function Gb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case bs:case Ts:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Xb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Dx:e="ENVMAP_BLENDING_MULTIPLY";break;case Y1:e="ENVMAP_BLENDING_MIX";break;case q1:e="ENVMAP_BLENDING_ADD";break}return e}function Yb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Vb(n),u=Gb(n),h=Wb(n),f=Xb(n),p=Yb(n),g=Ub(n),v=kb(s),y=r.createProgram();let m,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(m=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[gm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?je.tonemapping_pars_fragment:"",n.toneMapping!==Wi?Db("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Lb("linearToOutputTexel",n.outputColorSpace),Ib(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),a=qd(a),a=fm(a,n),a=pm(a,n),o=qd(o),o=fm(o,n),o=pm(o,n),a=mm(a),o=mm(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=x+m+a,M=x+d+o,L=dm(r,r.VERTEX_SHADER,_),N=dm(r,r.FRAGMENT_SHADER,M);r.attachShader(y,L),r.attachShader(y,N),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(w){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),V=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(N).trim();let K=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,L,N);else{const Q=hm(r,L,"vertex"),U=hm(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+Q+`
`+U)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||q==="")&&(H=!1);H&&(w.diagnostics={runnable:K,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(L),r.deleteShader(N),D=new Zo(r,y),W=Fb(r,y)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Cb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=N,this}let $b=0;class Kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Zb(e),n.set(e,i)),i}}class Zb{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function Jb(t,e,n,i,r,s,a){const o=new Zx,l=new Kb,u=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,g=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return u.add(S),S===0?"uv":`uv${S}`}function d(S,w,F,V,q){const K=V.fog,H=q.geometry,Q=S.isMeshStandardMaterial?V.environment:null,U=(S.isMeshStandardMaterial?n:e).get(S.envMap||Q),ee=U&&U.mapping===Ql?U.image.height:null,A=y[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const C=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=C!==void 0?C.length:0;let se=0;H.morphAttributes.position!==void 0&&(se=1),H.morphAttributes.normal!==void 0&&(se=2),H.morphAttributes.color!==void 0&&(se=3);let P,j,te,Z;if(A){const Kt=Wn[A];P=Kt.vertexShader,j=Kt.fragmentShader}else P=S.vertexShader,j=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);const de=t.getRenderTarget(),pe=q.isInstancedMesh===!0,Ae=q.isBatchedMesh===!0,ge=!!S.map,be=!!S.matcap,I=!!U,Ue=!!S.aoMap,ke=!!S.lightMap,ze=!!S.bumpMap,Ce=!!S.normalMap,We=!!S.displacementMap,Pe=!!S.emissiveMap,R=!!S.metalnessMap,E=!!S.roughnessMap,G=S.anisotropy>0,re=S.clearcoat>0,ne=S.dispersion>0,J=S.iridescence>0,Ee=S.sheen>0,he=S.transmission>0,_e=G&&!!S.anisotropyMap,He=re&&!!S.clearcoatMap,oe=re&&!!S.clearcoatNormalMap,xe=re&&!!S.clearcoatRoughnessMap,De=J&&!!S.iridescenceMap,Ie=J&&!!S.iridescenceThicknessMap,ye=Ee&&!!S.sheenColorMap,Xe=Ee&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Qe=!!S.specularColorMap,k=!!S.specularIntensityMap,fe=he&&!!S.transmissionMap,$=he&&!!S.thicknessMap,ae=!!S.gradientMap,ve=!!S.alphaMap,Se=S.alphaTest>0,qe=!!S.alphaHash,ot=!!S.extensions;let Dt=Wi;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Dt=t.toneMapping);const Ke={shaderID:A,shaderType:S.type,shaderName:S.name,vertexShader:P,fragmentShader:j,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:Ae,batchingColor:Ae&&q._colorsTexture!==null,instancing:pe,instancingColor:pe&&q.instanceColor!==null,instancingMorph:pe&&q.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:ge,matcap:be,envMap:I,envMapMode:I&&U.mapping,envMapCubeUVHeight:ee,aoMap:Ue,lightMap:ke,bumpMap:ze,normalMap:Ce,displacementMap:g&&We,emissiveMap:Pe,normalMapObjectSpace:Ce&&S.normalMapType===sS,normalMapTangentSpace:Ce&&S.normalMapType===Wx,metalnessMap:R,roughnessMap:E,anisotropy:G,anisotropyMap:_e,clearcoat:re,clearcoatMap:He,clearcoatNormalMap:oe,clearcoatRoughnessMap:xe,dispersion:ne,iridescence:J,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:Ee,sheenColorMap:ye,sheenRoughnessMap:Xe,specularMap:Fe,specularColorMap:Qe,specularIntensityMap:k,transmission:he,transmissionMap:fe,thicknessMap:$,gradientMap:ae,opaque:S.transparent===!1&&S.blending===ps&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:Se,alphaHash:qe,combine:S.combine,mapUv:ge&&m(S.map.channel),aoMapUv:Ue&&m(S.aoMap.channel),lightMapUv:ke&&m(S.lightMap.channel),bumpMapUv:ze&&m(S.bumpMap.channel),normalMapUv:Ce&&m(S.normalMap.channel),displacementMapUv:We&&m(S.displacementMap.channel),emissiveMapUv:Pe&&m(S.emissiveMap.channel),metalnessMapUv:R&&m(S.metalnessMap.channel),roughnessMapUv:E&&m(S.roughnessMap.channel),anisotropyMapUv:_e&&m(S.anisotropyMap.channel),clearcoatMapUv:He&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(S.sheenRoughnessMap.channel),specularMapUv:Fe&&m(S.specularMap.channel),specularColorMapUv:Qe&&m(S.specularColorMap.channel),specularIntensityMapUv:k&&m(S.specularIntensityMap.channel),transmissionMapUv:fe&&m(S.transmissionMap.channel),thicknessMapUv:$&&m(S.thicknessMap.channel),alphaMapUv:ve&&m(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ce||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!H.attributes.uv&&(ge||ve),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:q.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Dt,decodeVideoTexture:ge&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yn,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ot&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&S.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function x(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)w.push(F),w.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(_(w,S),M(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function M(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),S.push(o.mask)}function L(S){const w=y[S.type];let F;if(w){const V=Wn[w];F=US.clone(V.uniforms)}else F=S.uniforms;return F}function N(S,w){let F;for(let V=0,q=h.length;V<q;V++){const K=h[V];if(K.cacheKey===w){F=K,++F.usedTimes;break}}return F===void 0&&(F=new qb(t,w,S,s),h.push(F)),F}function T(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function D(S){l.remove(S)}function W(){l.dispose()}return{getParameters:d,getProgramCacheKey:x,getUniforms:L,acquireProgram:N,releaseProgram:T,releaseShaderCache:D,programs:h,dispose:W}}function Qb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function eT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function vm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,g,v,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:v,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function o(f,p,g,v,y,m){const d=a(f,p,g,v,y,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(f,p,g,v,y,m){const d=a(f,p,g,v,y,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,p){n.length>1&&n.sort(f||eT),i.length>1&&i.sort(p||xm),r.length>1&&r.sort(p||xm)}function h(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:u}}function tT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new vm,t.set(i,[a])):r>=s.length?(a=new vm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ge};break;case"SpotLight":n={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function iT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rT=0;function sT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aT(t){const e=new nT,n=iT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new pt,a=new pt;function o(u){let h=0,f=0,p=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let g=0,v=0,y=0,m=0,d=0,x=0,_=0,M=0,L=0,N=0,T=0;u.sort(sT);for(let W=0,S=u.length;W<S;W++){const w=u[W],F=w.color,V=w.intensity,q=w.distance,K=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*V,f+=F.g*V,p+=F.b*V;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],V);T++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Q=w.shadow,U=n.get(w);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=w.shadow.matrix,x++}i.directional[g]=H,g++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=q,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[y]=H;const Q=w.shadow;if(w.map&&(i.spotLightMap[L]=w.map,L++,Q.updateMatrices(w),w.castShadow&&N++),i.spotLightMatrix[y]=Q.matrix,w.castShadow){const U=n.get(w);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=K,M++}y++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const Q=w.shadow,U=n.get(w);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,U.shadowCameraNear=Q.camera.near,U.shadowCameraFar=Q.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=w.shadow.matrix,_++}i.point[v]=H,v++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(V),H.groundColor.copy(w.groundColor).multiplyScalar(V),i.hemi[d]=H,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==g||D.pointLength!==v||D.spotLength!==y||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==x||D.numPointShadows!==_||D.numSpotShadows!==M||D.numSpotMaps!==L||D.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+L-N,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=T,D.directionalLength=g,D.pointLength=v,D.spotLength=y,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=x,D.numPointShadows=_,D.numSpotShadows=M,D.numSpotMaps=L,D.numLightProbes=T,i.version=rT++)}function l(u,h){let f=0,p=0,g=0,v=0,y=0;const m=h.matrixWorldInverse;for(let d=0,x=u.length;d<x;d++){const _=u[d];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(_.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(_.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),p++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function _m(t){const e=new aT(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function oT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new _m(t),e.set(r,[o])):s>=a.length?(o=new _m(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class lT extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cT extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dT=`uniform sampler2D shadow_pass;
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
}`;function hT(t,e,n){let i=new Qh;const r=new Ze,s=new Ze,a=new at,o=new lT({depthPacking:rS}),l=new cT,u={},h=n.maxTextureSize,f={[qi]:sn,[sn]:qi,[Yn]:Yn},p=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:uT,fragmentShader:dT}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const v=new xn;v.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new st(v,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Px;let d=this.type;this.render=function(N,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;const W=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Gi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=d!==si&&this.type===si,q=d===si&&this.type!==si;for(let K=0,H=N.length;K<H;K++){const Q=N[K],U=Q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ee=U.getFrameExtents();if(r.multiply(ee),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ee.x),r.x=s.x*ee.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ee.y),r.y=s.y*ee.y,U.mapSize.y=s.y)),U.map===null||V===!0||q===!0){const C=this.type!==si?{minFilter:En,magFilter:En}:{};U.map!==null&&U.map.dispose(),U.map=new Rr(r.x,r.y,C),U.map.texture.name=Q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const A=U.getViewportCount();for(let C=0;C<A;C++){const ie=U.getViewport(C);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),F.viewport(a),U.updateMatrices(Q,C),i=U.getFrustum(),M(T,D,U.camera,Q,this.type)}U.isPointLightShadow!==!0&&this.type===si&&x(U,D),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(W,S,w)};function x(N,T){const D=e.update(y);p.defines.VSM_SAMPLES!==N.blurSamples&&(p.defines.VSM_SAMPLES=N.blurSamples,g.defines.VSM_SAMPLES=N.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Rr(r.x,r.y)),p.uniforms.shadow_pass.value=N.map.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(T,null,D,p,y,null),g.uniforms.shadow_pass.value=N.mapPass.texture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(T,null,D,g,y,null)}function _(N,T,D,W){let S=null;const w=D.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(w!==void 0)S=w;else if(S=D.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=S.uuid,V=T.uuid;let q=u[F];q===void 0&&(q={},u[F]=q);let K=q[V];K===void 0&&(K=S.clone(),q[V]=K,T.addEventListener("dispose",L)),S=K}if(S.visible=T.visible,S.wireframe=T.wireframe,W===si?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=t.properties.get(S);F.light=D}return S}function M(N,T,D,W,S){if(N.visible===!1)return;if(N.layers.test(T.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&S===si)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,N.matrixWorld);const V=e.update(N),q=N.material;if(Array.isArray(q)){const K=V.groups;for(let H=0,Q=K.length;H<Q;H++){const U=K[H],ee=q[U.materialIndex];if(ee&&ee.visible){const A=_(N,ee,W,S);N.onBeforeShadow(t,N,T,D,V,A,U),t.renderBufferDirect(D,null,V,A,N,U),N.onAfterShadow(t,N,T,D,V,A,U)}}}else if(q.visible){const K=_(N,q,W,S);N.onBeforeShadow(t,N,T,D,V,K,null),t.renderBufferDirect(D,null,V,K,N,null),N.onAfterShadow(t,N,T,D,V,K,null)}}const F=N.children;for(let V=0,q=F.length;V<q;V++)M(F[V],T,D,W,S)}function L(N){N.target.removeEventListener("dispose",L);for(const D in u){const W=u[D],S=N.target.uuid;S in W&&(W[S].dispose(),delete W[S])}}}const fT={[dd]:hd,[fd]:gd,[pd]:xd,[ws]:md,[hd]:dd,[gd]:fd,[xd]:pd,[md]:ws};function pT(t){function e(){let k=!1;const fe=new at;let $=null;const ae=new at(0,0,0,0);return{setMask:function(ve){$!==ve&&!k&&(t.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){k=ve},setClear:function(ve,Se,qe,ot,Dt){Dt===!0&&(ve*=ot,Se*=ot,qe*=ot),fe.set(ve,Se,qe,ot),ae.equals(fe)===!1&&(t.clearColor(ve,Se,qe,ot),ae.copy(fe))},reset:function(){k=!1,$=null,ae.set(-1,0,0,0)}}}function n(){let k=!1,fe=!1,$=null,ae=null,ve=null;return{setReversed:function(Se){fe=Se},setTest:function(Se){Se?te(t.DEPTH_TEST):Z(t.DEPTH_TEST)},setMask:function(Se){$!==Se&&!k&&(t.depthMask(Se),$=Se)},setFunc:function(Se){if(fe&&(Se=fT[Se]),ae!==Se){switch(Se){case dd:t.depthFunc(t.NEVER);break;case hd:t.depthFunc(t.ALWAYS);break;case fd:t.depthFunc(t.LESS);break;case ws:t.depthFunc(t.LEQUAL);break;case pd:t.depthFunc(t.EQUAL);break;case md:t.depthFunc(t.GEQUAL);break;case gd:t.depthFunc(t.GREATER);break;case xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Se}},setLocked:function(Se){k=Se},setClear:function(Se){ve!==Se&&(t.clearDepth(Se),ve=Se)},reset:function(){k=!1,$=null,ae=null,ve=null}}}function i(){let k=!1,fe=null,$=null,ae=null,ve=null,Se=null,qe=null,ot=null,Dt=null;return{setTest:function(Ke){k||(Ke?te(t.STENCIL_TEST):Z(t.STENCIL_TEST))},setMask:function(Ke){fe!==Ke&&!k&&(t.stencilMask(Ke),fe=Ke)},setFunc:function(Ke,Kt,Qn){($!==Ke||ae!==Kt||ve!==Qn)&&(t.stencilFunc(Ke,Kt,Qn),$=Ke,ae=Kt,ve=Qn)},setOp:function(Ke,Kt,Qn){(Se!==Ke||qe!==Kt||ot!==Qn)&&(t.stencilOp(Ke,Kt,Qn),Se=Ke,qe=Kt,ot=Qn)},setLocked:function(Ke){k=Ke},setClear:function(Ke){Dt!==Ke&&(t.clearStencil(Ke),Dt=Ke)},reset:function(){k=!1,fe=null,$=null,ae=null,ve=null,Se=null,qe=null,ot=null,Dt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,v=!1,y=null,m=null,d=null,x=null,_=null,M=null,L=null,N=new Ge(0,0,0),T=0,D=!1,W=null,S=null,w=null,F=null,V=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=H>=2);let U=null,ee={};const A=t.getParameter(t.SCISSOR_BOX),C=t.getParameter(t.VIEWPORT),ie=new at().fromArray(A),se=new at().fromArray(C);function P(k,fe,$,ae){const ve=new Uint8Array(4),Se=t.createTexture();t.bindTexture(k,Se),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<$;qe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(fe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return Se}const j={};j[t.TEXTURE_2D]=P(t.TEXTURE_2D,t.TEXTURE_2D,1),j[t.TEXTURE_CUBE_MAP]=P(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[t.TEXTURE_2D_ARRAY]=P(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),j[t.TEXTURE_3D]=P(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),te(t.DEPTH_TEST),s.setFunc(ws),ke(!1),ze(Ap),te(t.CULL_FACE),I(Gi);function te(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function Z(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function de(k,fe){return h[k]!==fe?(t.bindFramebuffer(k,fe),h[k]=fe,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function pe(k,fe){let $=p,ae=!1;if(k){$=f.get(fe),$===void 0&&($=[],f.set(fe,$));const ve=k.textures;if($.length!==ve.length||$[0]!==t.COLOR_ATTACHMENT0){for(let Se=0,qe=ve.length;Se<qe;Se++)$[Se]=t.COLOR_ATTACHMENT0+Se;$.length=ve.length,ae=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,ae=!0);ae&&t.drawBuffers($)}function Ae(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const ge={[fr]:t.FUNC_ADD,[N1]:t.FUNC_SUBTRACT,[P1]:t.FUNC_REVERSE_SUBTRACT};ge[L1]=t.MIN,ge[D1]=t.MAX;const be={[I1]:t.ZERO,[U1]:t.ONE,[k1]:t.SRC_COLOR,[cd]:t.SRC_ALPHA,[j1]:t.SRC_ALPHA_SATURATE,[z1]:t.DST_COLOR,[O1]:t.DST_ALPHA,[F1]:t.ONE_MINUS_SRC_COLOR,[ud]:t.ONE_MINUS_SRC_ALPHA,[H1]:t.ONE_MINUS_DST_COLOR,[B1]:t.ONE_MINUS_DST_ALPHA,[V1]:t.CONSTANT_COLOR,[G1]:t.ONE_MINUS_CONSTANT_COLOR,[W1]:t.CONSTANT_ALPHA,[X1]:t.ONE_MINUS_CONSTANT_ALPHA};function I(k,fe,$,ae,ve,Se,qe,ot,Dt,Ke){if(k===Gi){v===!0&&(Z(t.BLEND),v=!1);return}if(v===!1&&(te(t.BLEND),v=!0),k!==R1){if(k!==y||Ke!==D){if((m!==fr||_!==fr)&&(t.blendEquation(t.FUNC_ADD),m=fr,_=fr),Ke)switch(k){case ps:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cp:t.blendFunc(t.ONE,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ps:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Np:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}d=null,x=null,M=null,L=null,N.set(0,0,0),T=0,y=k,D=Ke}return}ve=ve||fe,Se=Se||$,qe=qe||ae,(fe!==m||ve!==_)&&(t.blendEquationSeparate(ge[fe],ge[ve]),m=fe,_=ve),($!==d||ae!==x||Se!==M||qe!==L)&&(t.blendFuncSeparate(be[$],be[ae],be[Se],be[qe]),d=$,x=ae,M=Se,L=qe),(ot.equals(N)===!1||Dt!==T)&&(t.blendColor(ot.r,ot.g,ot.b,Dt),N.copy(ot),T=Dt),y=k,D=!1}function Ue(k,fe){k.side===Yn?Z(t.CULL_FACE):te(t.CULL_FACE);let $=k.side===sn;fe&&($=!$),ke($),k.blending===ps&&k.transparent===!1?I(Gi):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const ae=k.stencilWrite;a.setTest(ae),ae&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),We(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Z(t.SAMPLE_ALPHA_TO_COVERAGE)}function ke(k){W!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),W=k)}function ze(k){k!==A1?(te(t.CULL_FACE),k!==S&&(k===Ap?t.cullFace(t.BACK):k===C1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Z(t.CULL_FACE),S=k}function Ce(k){k!==w&&(K&&t.lineWidth(k),w=k)}function We(k,fe,$){k?(te(t.POLYGON_OFFSET_FILL),(F!==fe||V!==$)&&(t.polygonOffset(fe,$),F=fe,V=$)):Z(t.POLYGON_OFFSET_FILL)}function Pe(k){k?te(t.SCISSOR_TEST):Z(t.SCISSOR_TEST)}function R(k){k===void 0&&(k=t.TEXTURE0+q-1),U!==k&&(t.activeTexture(k),U=k)}function E(k,fe,$){$===void 0&&(U===null?$=t.TEXTURE0+q-1:$=U);let ae=ee[$];ae===void 0&&(ae={type:void 0,texture:void 0},ee[$]=ae),(ae.type!==k||ae.texture!==fe)&&(U!==$&&(t.activeTexture($),U=$),t.bindTexture(k,fe||j[k]),ae.type=k,ae.texture=fe)}function G(){const k=ee[U];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(k){ie.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),ie.copy(k))}function ye(k){se.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),se.copy(k))}function Xe(k,fe){let $=l.get(fe);$===void 0&&($=new WeakMap,l.set(fe,$));let ae=$.get(k);ae===void 0&&(ae=t.getUniformBlockIndex(fe,k.name),$.set(k,ae))}function Fe(k,fe){const ae=l.get(fe).get(k);o.get(fe)!==ae&&(t.uniformBlockBinding(fe,ae,k.__bindingPointIndex),o.set(fe,ae))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},U=null,ee={},h={},f=new WeakMap,p=[],g=null,v=!1,y=null,m=null,d=null,x=null,_=null,M=null,L=null,N=new Ge(0,0,0),T=0,D=!1,W=null,S=null,w=null,F=null,V=null,ie.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:te,disable:Z,bindFramebuffer:de,drawBuffers:pe,useProgram:Ae,setBlending:I,setMaterial:Ue,setFlipSided:ke,setCullFace:ze,setLineWidth:Ce,setPolygonOffset:We,setScissorTest:Pe,activeTexture:R,bindTexture:E,unbindTexture:G,compressedTexImage2D:re,compressedTexImage3D:ne,texImage2D:xe,texImage3D:De,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:_e,scissor:Ie,viewport:ye,reset:Qe}}function ym(t,e,n,i){const r=mT(i);switch(n){case Ox:return t*e;case zx:return t*e;case Hx:return t*e*2;case jx:return t*e/r.components*r.byteLength;case $h:return t*e/r.components*r.byteLength;case Vx:return t*e*2/r.components*r.byteLength;case Kh:return t*e*2/r.components*r.byteLength;case Bx:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case Zh:return t*e*4/r.components*r.byteLength;case Wo:case Xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yo:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ed:case bd:return Math.max(t,16)*Math.max(e,8)/4;case Md:case wd:return Math.max(t,8)*Math.max(e,8)/2;case Td:case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Hd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $o:case Vd:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gx:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xd:case Yd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mT(t){switch(t){case xi:case Ux:return{byteLength:1,components:1};case Da:case kx:case Ba:return{byteLength:2,components:1};case Yh:case qh:return{byteLength:2,components:4};case Cr:case Xh:case ui:return{byteLength:4,components:1};case Fx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function gT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,h=new WeakMap;let f;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return g?new OffscreenCanvas(R,E):Cl("canvas")}function y(R,E,G){let re=1;const ne=Pe(R);if((ne.width>G||ne.height>G)&&(re=G/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(re*ne.width),Ee=Math.floor(re*ne.height);f===void 0&&(f=v(J,Ee));const he=E?v(J,Ee):f;return he.width=J,he.height=Ee,he.getContext("2d").drawImage(R,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ee+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==En&&R.minFilter!==kn}function d(R){t.generateMipmap(R)}function x(R,E,G,re,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===t.RED&&(G===t.FLOAT&&(J=t.R32F),G===t.HALF_FLOAT&&(J=t.R16F),G===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.R8UI),G===t.UNSIGNED_SHORT&&(J=t.R16UI),G===t.UNSIGNED_INT&&(J=t.R32UI),G===t.BYTE&&(J=t.R8I),G===t.SHORT&&(J=t.R16I),G===t.INT&&(J=t.R32I)),E===t.RG&&(G===t.FLOAT&&(J=t.RG32F),G===t.HALF_FLOAT&&(J=t.RG16F),G===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RG8UI),G===t.UNSIGNED_SHORT&&(J=t.RG16UI),G===t.UNSIGNED_INT&&(J=t.RG32UI),G===t.BYTE&&(J=t.RG8I),G===t.SHORT&&(J=t.RG16I),G===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGB8UI),G===t.UNSIGNED_SHORT&&(J=t.RGB16UI),G===t.UNSIGNED_INT&&(J=t.RGB32UI),G===t.BYTE&&(J=t.RGB8I),G===t.SHORT&&(J=t.RGB16I),G===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),G===t.UNSIGNED_INT&&(J=t.RGBA32UI),G===t.BYTE&&(J=t.RGBA8I),G===t.SHORT&&(J=t.RGBA16I),G===t.INT&&(J=t.RGBA32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),E===t.RGBA){const Ee=ne?El:nt.getTransfer(re);G===t.FLOAT&&(J=t.RGBA32F),G===t.HALF_FLOAT&&(J=t.RGBA16F),G===t.UNSIGNED_BYTE&&(J=Ee===dt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(R,E){let G;return R?E===null||E===Cr||E===As?G=t.DEPTH24_STENCIL8:E===ui?G=t.DEPTH32F_STENCIL8:E===Da&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cr||E===As?G=t.DEPTH_COMPONENT24:E===ui?G=t.DEPTH_COMPONENT32F:E===Da&&(G=t.DEPTH_COMPONENT16),G}function M(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==En&&R.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function L(R){const E=R.target;E.removeEventListener("dispose",L),T(E),E.isVideoTexture&&h.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),W(E)}function T(R){const E=i.get(R);if(E.__webglInit===void 0)return;const G=R.source,re=p.get(G);if(re){const ne=re[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(R),Object.keys(re).length===0&&p.delete(G)}i.remove(R)}function D(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const G=R.source,re=p.get(G);delete re[E.__cacheKey],a.memory.textures--}function W(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let ne=0;ne<E.__webglFramebuffer[re].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[re][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)t.deleteFramebuffer(E.__webglFramebuffer[re]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=R.textures;for(let re=0,ne=G.length;re<ne;re++){const J=i.get(G[re]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(G[re])}i.remove(R)}let S=0;function w(){S=0}function F(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){const G=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const re=R.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(G,R,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function K(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){se(G,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function H(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){se(G,R,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function Q(R,E){const G=i.get(R);if(R.version>0&&G.__version!==R.version){P(G,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const U={[yd]:t.REPEAT,[vr]:t.CLAMP_TO_EDGE,[Sd]:t.MIRRORED_REPEAT},ee={[En]:t.NEAREST,[nS]:t.NEAREST_MIPMAP_NEAREST,[co]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[Uc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},A={[aS]:t.NEVER,[hS]:t.ALWAYS,[oS]:t.LESS,[Xx]:t.LEQUAL,[lS]:t.EQUAL,[dS]:t.GEQUAL,[cS]:t.GREATER,[uS]:t.NOTEQUAL};function C(R,E){if(E.type===ui&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===Uc||E.magFilter===co||E.magFilter===_r||E.minFilter===kn||E.minFilter===Uc||E.minFilter===co||E.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,U[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,U[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,U[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ee[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ee[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,A[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==co&&E.minFilter!==_r||E.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ie(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",L));const re=E.source;let ne=p.get(re);ne===void 0&&(ne={},p.set(re,ne));const J=V(E);if(J!==R.__cacheKey){ne[J]===void 0&&(ne[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ne[J].usedTimes++;const Ee=ne[R.__cacheKey];Ee!==void 0&&(ne[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(E)),R.__cacheKey=J,R.__webglTexture=ne[J].texture}return G}function se(R,E,G){let re=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=t.TEXTURE_3D);const ne=ie(R,E),J=E.source;n.bindTexture(re,R.__webglTexture,t.TEXTURE0+G);const Ee=i.get(J);if(J.version!==Ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const he=nt.getPrimaries(nt.workingColorSpace),_e=E.colorSpace===Li?null:nt.getPrimaries(E.colorSpace),He=E.colorSpace===Li||he===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let oe=y(E.image,!1,r.maxTextureSize);oe=We(E,oe);const xe=s.convert(E.format,E.colorSpace),De=s.convert(E.type);let Ie=x(E.internalFormat,xe,De,E.colorSpace,E.isVideoTexture);C(re,E);let ye;const Xe=E.mipmaps,Fe=E.isVideoTexture!==!0,Qe=Ee.__version===void 0||ne===!0,k=J.dataReady,fe=M(E,oe);if(E.isDepthTexture)Ie=_(E.format===Cs,E.type),Qe&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Ie,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,null));else if(E.isDataTexture)if(Xe.length>0){Fe&&Qe&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,Xe[0].width,Xe[0].height);for(let $=0,ae=Xe.length;$<ae;$++)ye=Xe[$],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ye.width,ye.height,xe,De,ye.data):n.texImage2D(t.TEXTURE_2D,$,Ie,ye.width,ye.height,0,xe,De,ye.data);E.generateMipmaps=!1}else Fe?(Qe&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,oe.width,oe.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Fe&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,Xe[0].width,Xe[0].height,oe.depth);for(let $=0,ae=Xe.length;$<ae;$++)if(ye=Xe[$],E.format!==On)if(xe!==null)if(Fe){if(k)if(E.layerUpdates.size>0){const ve=ym(ye.width,ye.height,E.format,E.type);for(const Se of E.layerUpdates){const qe=ye.data.subarray(Se*ve/ye.data.BYTES_PER_ELEMENT,(Se+1)*ve/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,Se,ye.width,ye.height,1,xe,qe,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,oe.depth,xe,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,Ie,ye.width,ye.height,oe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,ye.width,ye.height,oe.depth,xe,De,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,Ie,ye.width,ye.height,oe.depth,0,xe,De,ye.data)}else{Fe&&Qe&&n.texStorage2D(t.TEXTURE_2D,fe,Ie,Xe[0].width,Xe[0].height);for(let $=0,ae=Xe.length;$<ae;$++)ye=Xe[$],E.format!==On?xe!==null?Fe?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,ye.width,ye.height,xe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,$,Ie,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?k&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,ye.width,ye.height,xe,De,ye.data):n.texImage2D(t.TEXTURE_2D,$,Ie,ye.width,ye.height,0,xe,De,ye.data)}else if(E.isDataArrayTexture)if(Fe){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,oe.width,oe.height,oe.depth),k)if(E.layerUpdates.size>0){const $=ym(oe.width,oe.height,E.format,E.type);for(const ae of E.layerUpdates){const ve=oe.data.subarray(ae*$/oe.data.BYTES_PER_ELEMENT,(ae+1)*$/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,oe.width,oe.height,1,xe,De,ve)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(E.isData3DTexture)Fe?(Qe&&n.texStorage3D(t.TEXTURE_3D,fe,Ie,oe.width,oe.height,oe.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(E.isFramebufferTexture){if(Qe)if(Fe)n.texStorage2D(t.TEXTURE_2D,fe,Ie,oe.width,oe.height);else{let $=oe.width,ae=oe.height;for(let ve=0;ve<fe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ie,$,ae,0,xe,De,null),$>>=1,ae>>=1}}else if(Xe.length>0){if(Fe&&Qe){const $=Pe(Xe[0]);n.texStorage2D(t.TEXTURE_2D,fe,Ie,$.width,$.height)}for(let $=0,ae=Xe.length;$<ae;$++)ye=Xe[$],Fe?k&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,xe,De,ye):n.texImage2D(t.TEXTURE_2D,$,Ie,xe,De,ye);E.generateMipmaps=!1}else if(Fe){if(Qe){const $=Pe(oe);n.texStorage2D(t.TEXTURE_2D,fe,Ie,$.width,$.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ie,xe,De,oe);m(E)&&d(re),Ee.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function P(R,E,G){if(E.image.length!==6)return;const re=ie(R,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const J=i.get(ne);if(ne.version!==J.__version||re===!0){n.activeTexture(t.TEXTURE0+G);const Ee=nt.getPrimaries(nt.workingColorSpace),he=E.colorSpace===Li?null:nt.getPrimaries(E.colorSpace),_e=E.colorSpace===Li||Ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!He&&!oe?xe[ae]=y(E.image[ae],!0,r.maxCubemapSize):xe[ae]=oe?E.image[ae].image:E.image[ae],xe[ae]=We(E,xe[ae]);const De=xe[0],Ie=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),Xe=x(E.internalFormat,Ie,ye,E.colorSpace),Fe=E.isVideoTexture!==!0,Qe=J.__version===void 0||re===!0,k=ne.dataReady;let fe=M(E,De);C(t.TEXTURE_CUBE_MAP,E);let $;if(He){Fe&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Xe,De.width,De.height);for(let ae=0;ae<6;ae++){$=xe[ae].mipmaps;for(let ve=0;ve<$.length;ve++){const Se=$[ve];E.format!==On?Ie!==null?Fe?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Se.width,Se.height,Ie,Se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Xe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,0,0,Se.width,Se.height,Ie,ye,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve,Xe,Se.width,Se.height,0,Ie,ye,Se.data)}}}else{if($=E.mipmaps,Fe&&Qe){$.length>0&&fe++;const ae=Pe(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Xe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(oe){Fe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Ie,ye,xe[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,xe[ae].width,xe[ae].height,0,Ie,ye,xe[ae].data);for(let ve=0;ve<$.length;ve++){const qe=$[ve].image[ae].image;Fe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,qe.width,qe.height,Ie,ye,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Xe,qe.width,qe.height,0,Ie,ye,qe.data)}}else{Fe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,ye,xe[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Xe,Ie,ye,xe[ae]);for(let ve=0;ve<$.length;ve++){const Se=$[ve];Fe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,0,0,Ie,ye,Se.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve+1,Xe,Ie,ye,Se.image[ae])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),J.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function j(R,E,G,re,ne,J){const Ee=s.convert(G.format,G.colorSpace),he=s.convert(G.type),_e=x(G.internalFormat,Ee,he,G.colorSpace);if(!i.get(E).__hasExternalTextures){const oe=Math.max(1,E.width>>J),xe=Math.max(1,E.height>>J);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,J,_e,oe,xe,E.depth,0,Ee,he,null):n.texImage2D(ne,J,_e,oe,xe,0,Ee,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ze(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ne,i.get(G).__webglTexture,0,ke(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ne,i.get(G).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(R,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const re=E.depthTexture,ne=re&&re.isDepthTexture?re.type:null,J=_(E.stencilBuffer,ne),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=ke(E);ze(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,J,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const re=E.textures;for(let ne=0;ne<re.length;ne++){const J=re[ne],Ee=s.convert(J.format,J.colorSpace),he=s.convert(J.type),_e=x(J.internalFormat,Ee,he,J.colorSpace),He=ke(E);G&&ze(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,_e,E.width,E.height):ze(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,_e,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Z(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const re=i.get(E.depthTexture).__webglTexture,ne=ke(E);if(E.depthTexture.format===ms)ze(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===Cs)ze(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function de(R){const E=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const re=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=re}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Z(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=t.createRenderbuffer(),te(E.__webglDepthbuffer[re],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),te(E.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(R,E,G){const re=i.get(R);E!==void 0&&j(re.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&de(R)}function Ae(R){const E=R.texture,G=i.get(R),re=i.get(E);R.addEventListener("dispose",N);const ne=R.textures,J=R.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=E.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let _e=0;_e<E.mipmaps.length;_e++)G.__webglFramebuffer[he][_e]=t.createFramebuffer()}else G.__webglFramebuffer[he]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<E.mipmaps.length;he++)G.__webglFramebuffer[he]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let he=0,_e=ne.length;he<_e;he++){const He=i.get(ne[he]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ze(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const _e=ne[he];G.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const He=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),xe=x(_e.internalFormat,He,oe,_e.colorSpace,R.isXRRenderTarget===!0),De=ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,G.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),te(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),C(t.TEXTURE_CUBE_MAP,E);for(let he=0;he<6;he++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)j(G.__webglFramebuffer[he][_e],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else j(G.__webglFramebuffer[he],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let he=0,_e=ne.length;he<_e;he++){const He=ne[he],oe=i.get(He);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),C(t.TEXTURE_2D,He),j(G.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(He)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,re.__webglTexture),C(he,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)j(G.__webglFramebuffer[_e],R,E,t.COLOR_ATTACHMENT0,he,_e);else j(G.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,he,0);m(E)&&d(he),n.unbindTexture()}R.depthBuffer&&de(R)}function ge(R){const E=R.textures;for(let G=0,re=E.length;G<re;G++){const ne=E[G];if(m(ne)){const J=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(ne).__webglTexture;n.bindTexture(J,Ee),d(J),n.unbindTexture()}}}const be=[],I=[];function Ue(R){if(R.samples>0){if(ze(R)===!1){const E=R.textures,G=R.width,re=R.height;let ne=t.COLOR_BUFFER_BIT;const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),he=E.length>1;if(he)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const He=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,G,re,0,0,G,re,ne,t.NEAREST),l===!0&&(be.length=0,I.length=0,be.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(be.push(J),I.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[_e]);const He=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function ke(R){return Math.min(r.maxSamples,R.samples)}function ze(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ce(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function We(R,E){const G=R.colorSpace,re=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Qi&&G!==Li&&(nt.getTransfer(G)===dt?(re!==On||ne!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=w,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=pe,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ze}function xT(t,e){function n(i,r=Li){let s;const a=nt.getTransfer(r);if(i===xi)return t.UNSIGNED_BYTE;if(i===Yh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Fx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ux)return t.BYTE;if(i===kx)return t.SHORT;if(i===Da)return t.UNSIGNED_SHORT;if(i===Xh)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Ba)return t.HALF_FLOAT;if(i===Ox)return t.ALPHA;if(i===Bx)return t.RGB;if(i===On)return t.RGBA;if(i===zx)return t.LUMINANCE;if(i===Hx)return t.LUMINANCE_ALPHA;if(i===ms)return t.DEPTH_COMPONENT;if(i===Cs)return t.DEPTH_STENCIL;if(i===jx)return t.RED;if(i===$h)return t.RED_INTEGER;if(i===Vx)return t.RG;if(i===Kh)return t.RG_INTEGER;if(i===Zh)return t.RGBA_INTEGER;if(i===Wo||i===Xo||i===Yo||i===qo)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Md||i===Ed||i===wd||i===bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ed)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Td||i===Ad||i===Cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Td||i===Ad)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rd||i===Nd||i===Pd||i===Ld||i===Dd||i===Id||i===Ud||i===kd||i===Fd||i===Od||i===Bd||i===zd||i===Hd||i===jd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Id)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Od)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Vd||i===Gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$o)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gx||i===Wd||i===Xd||i===Yd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class vT extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ui extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _T={type:"move"};class du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,v=.005;u.inputState.pinching&&p>g+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_T)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ST=`
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

}`;class MT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:yT,fragmentShader:ST,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new st(new Va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ET extends Ds{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,f=null,p=null,g=null,v=null;const y=new MT,m=n.getContextAttributes();let d=null,x=null;const _=[],M=[],L=new Ze;let N=null;const T=new Qt;T.layers.enable(1),T.viewport=new at;const D=new Qt;D.layers.enable(2),D.viewport=new at;const W=[T,D],S=new vT;S.layers.enable(1),S.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let j=_[P];return j===void 0&&(j=new du,_[P]=j),j.getTargetRaySpace()},this.getControllerGrip=function(P){let j=_[P];return j===void 0&&(j=new du,_[P]=j),j.getGripSpace()},this.getHand=function(P){let j=_[P];return j===void 0&&(j=new du,_[P]=j),j.getHandSpace()};function V(P){const j=M.indexOf(P.inputSource);if(j===-1)return;const te=_[j];te!==void 0&&(te.update(P.inputSource,P.frame,u||a),te.dispatchEvent({type:P.type,data:P.inputSource}))}function q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let P=0;P<_.length;P++){const j=M[P];j!==null&&(M[P]=null,_[P].disconnect(j))}w=null,F=null,y.reset(),e.setRenderTarget(d),g=null,p=null,f=null,r=null,x=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new Rr(g.framebufferWidth,g.framebufferHeight,{format:On,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,te=null,Z=null;m.depth&&(Z=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=m.stencil?Cs:ms,te=m.stencil?As:Cr);const de={colorFormat:n.RGBA8,depthFormat:Z,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(de),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),x=new Rr(p.textureWidth,p.textureHeight,{format:On,type:xi,depthTexture:new av(p.textureWidth,p.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(P){for(let j=0;j<P.removed.length;j++){const te=P.removed[j],Z=M.indexOf(te);Z>=0&&(M[Z]=null,_[Z].disconnect(te))}for(let j=0;j<P.added.length;j++){const te=P.added[j];let Z=M.indexOf(te);if(Z===-1){for(let pe=0;pe<_.length;pe++)if(pe>=M.length){M.push(te),Z=pe;break}else if(M[pe]===null){M[pe]=te,Z=pe;break}if(Z===-1)break}const de=_[Z];de&&de.connect(te)}}const H=new z,Q=new z;function U(P,j,te){H.setFromMatrixPosition(j.matrixWorld),Q.setFromMatrixPosition(te.matrixWorld);const Z=H.distanceTo(Q),de=j.projectionMatrix.elements,pe=te.projectionMatrix.elements,Ae=de[14]/(de[10]-1),ge=de[14]/(de[10]+1),be=(de[9]+1)/de[5],I=(de[9]-1)/de[5],Ue=(de[8]-1)/de[0],ke=(pe[8]+1)/pe[0],ze=Ae*Ue,Ce=Ae*ke,We=Z/(-Ue+ke),Pe=We*-Ue;if(j.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Pe),P.translateZ(We),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),de[10]===-1)P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const R=Ae+We,E=ge+We,G=ze-Pe,re=Ce+(Z-Pe),ne=be*ge/E*R,J=I*ge/E*R;P.projectionMatrix.makePerspective(G,re,ne,J,R,E),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function ee(P,j){j===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(j.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let j=P.near,te=P.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(te=y.depthFar)),S.near=D.near=T.near=j,S.far=D.far=T.far=te,(w!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,F=S.far);const Z=P.parent,de=S.cameras;ee(S,Z);for(let pe=0;pe<de.length;pe++)ee(de[pe],Z);de.length===2?U(S,T,D):S.projectionMatrix.copy(T.projectionMatrix),A(P,S,Z)};function A(P,j,te){te===null?P.matrix.copy(j.matrixWorld):(P.matrix.copy(te.matrixWorld),P.matrix.invert(),P.matrix.multiply(j.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=Al*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(P){l=P,p!==null&&(p.fixedFoveation=P),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=P)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let C=null;function ie(P,j){if(h=j.getViewerPose(u||a),v=j,h!==null){const te=h.views;g!==null&&(e.setRenderTargetFramebuffer(x,g.framebuffer),e.setRenderTarget(x));let Z=!1;te.length!==S.cameras.length&&(S.cameras.length=0,Z=!0);for(let pe=0;pe<te.length;pe++){const Ae=te[pe];let ge=null;if(g!==null)ge=g.getViewport(Ae);else{const I=f.getViewSubImage(p,Ae);ge=I.viewport,pe===0&&(e.setRenderTargetTextures(x,I.colorTexture,p.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(x))}let be=W[pe];be===void 0&&(be=new Qt,be.layers.enable(pe),be.viewport=new at,W[pe]=be),be.matrix.fromArray(Ae.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Ae.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ge.x,ge.y,ge.width,ge.height),pe===0&&(S.matrix.copy(be.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Z===!0&&S.cameras.push(be)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const pe=f.getDepthInformation(te[0]);pe&&pe.isValid&&pe.texture&&y.init(e,pe,r.renderState)}}for(let te=0;te<_.length;te++){const Z=M[te],de=_[te];Z!==null&&de!==void 0&&de.update(Z,j,u||a)}C&&C(P,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),v=null}const se=new rv;se.setAnimationLoop(ie),this.setAnimationLoop=function(P){C=P},this.dispose=function(){}}}const lr=new Jn,wT=new pt;function bT(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,tv(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,x,_):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d),_=x.envMap,M=x.envMapRotation;_&&(m.envMap.value=_,lr.copy(M),lr.x*=-1,lr.y*=-1,lr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(wT.makeRotationFromEuler(lr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function u(x,_){let M=r[x.id];M===void 0&&(v(x),M=h(x),r[x.id]=M,x.addEventListener("dispose",m));const L=_.program;i.updateUBOMapping(x,L);const N=e.render.frame;s[x.id]!==N&&(p(x),s[x.id]=N)}function h(x){const _=f();x.__bindingPointIndex=_;const M=t.createBuffer(),L=x.__size,N=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const _=r[x.id],M=x.uniforms,L=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let N=0,T=M.length;N<T;N++){const D=Array.isArray(M[N])?M[N]:[M[N]];for(let W=0,S=D.length;W<S;W++){const w=D[W];if(g(w,N,W,L)===!0){const F=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let q=0;for(let K=0;K<V.length;K++){const H=V[K],Q=y(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,F+q,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,q),q+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(x,_,M,L){const N=x.value,T=_+"_"+M;if(L[T]===void 0)return typeof N=="number"||typeof N=="boolean"?L[T]=N:L[T]=N.clone(),!0;{const D=L[T];if(typeof N=="number"||typeof N=="boolean"){if(D!==N)return L[T]=N,!0}else if(D.equals(N)===!1)return D.copy(N),!0}return!1}function v(x){const _=x.uniforms;let M=0;const L=16;for(let T=0,D=_.length;T<D;T++){const W=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,w=W.length;S<w;S++){const F=W[S],V=Array.isArray(F.value)?F.value:[F.value];for(let q=0,K=V.length;q<K;q++){const H=V[q],Q=y(H),U=M%L,ee=U%Q.boundary,A=U+ee;M+=ee,A!==0&&L-A<Q.storage&&(M+=L-A),F.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=Q.storage}}}const N=M%L;return N>0&&(M+=L-N),x.__size=M,x.__cache={},this}function y(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const x in r)t.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class AT{constructor(e={}){const{canvas:n=pS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const d=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=Wi,this.toneMappingExposure=1;const _=this;let M=!1,L=0,N=0,T=null,D=-1,W=null;const S=new at,w=new at;let F=null;const V=new Ge(0);let q=0,K=n.width,H=n.height,Q=1,U=null,ee=null;const A=new at(0,0,K,H),C=new at(0,0,K,H);let ie=!1;const se=new Qh;let P=!1,j=!1;const te=new pt,Z=new pt,de=new z,pe=new at,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function be(){return T===null?Q:1}let I=i;function Ue(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wh}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Se,!1),I===null){const O="webgl2";if(I=Ue(O,b),I===null)throw Ue(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ke,ze,Ce,We,Pe,R,E,G,re,ne,J,Ee,he,_e,He,oe,xe,De,Ie,ye,Xe,Fe,Qe,k;function fe(){ke=new Lw(I),ke.init(),Fe=new xT(I,ke),ze=new Tw(I,ke,e,Fe),Ce=new pT(I),ze.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),We=new Uw(I),Pe=new Qb,R=new gT(I,ke,Ce,Pe,ze,Fe,We),E=new Cw(_),G=new Pw(_),re=new jS(I),Qe=new ww(I,re),ne=new Dw(I,re,We,Qe),J=new Fw(I,ne,re,We),Ie=new kw(I,ze,R),oe=new Aw(Pe),Ee=new Jb(_,E,G,ke,ze,Qe,oe),he=new bT(_,Pe),_e=new tT,He=new oT(ke),De=new Ew(_,E,G,Ce,J,p,l),xe=new hT(_,J,ze),k=new TT(I,We,ze,Ce),ye=new bw(I,ke,We),Xe=new Iw(I,ke,We),We.programs=Ee.programs,_.capabilities=ze,_.extensions=ke,_.properties=Pe,_.renderLists=_e,_.shadowMap=xe,_.state=Ce,_.info=We}fe();const $=new ET(_,I);this.xr=$,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(K,H,!1))},this.getSize=function(b){return b.set(K,H)},this.setSize=function(b,O,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,H=O,n.width=Math.floor(b*Q),n.height=Math.floor(O*Q),X===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(K*Q,H*Q).floor()},this.setDrawingBufferSize=function(b,O,X){K=b,H=O,Q=X,n.width=Math.floor(b*X),n.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(A)},this.setViewport=function(b,O,X,Y){b.isVector4?A.set(b.x,b.y,b.z,b.w):A.set(b,O,X,Y),Ce.viewport(S.copy(A).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(C)},this.setScissor=function(b,O,X,Y){b.isVector4?C.set(b.x,b.y,b.z,b.w):C.set(b,O,X,Y),Ce.scissor(w.copy(C).multiplyScalar(Q).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){Ce.setScissorTest(ie=b)},this.setOpaqueSort=function(b){U=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,O=!0,X=!0){let Y=0;if(b){let B=!1;if(T!==null){const ue=T.texture.format;B=ue===Zh||ue===Kh||ue===$h}if(B){const ue=T.texture.type,Me=ue===xi||ue===Cr||ue===Da||ue===As||ue===Yh||ue===qh,Te=De.getClearColor(),Re=De.getClearAlpha(),Oe=Te.r,Be=Te.g,Ne=Te.b;Me?(g[0]=Oe,g[1]=Be,g[2]=Ne,g[3]=Re,I.clearBufferuiv(I.COLOR,0,g)):(v[0]=Oe,v[1]=Be,v[2]=Ne,v[3]=Re,I.clearBufferiv(I.COLOR,0,v))}else Y|=I.COLOR_BUFFER_BIT}O&&(Y|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),_e.dispose(),He.dispose(),Pe.dispose(),E.dispose(),G.dispose(),J.dispose(),Qe.dispose(),k.dispose(),Ee.dispose(),$.dispose(),$.removeEventListener("sessionstart",lf),$.removeEventListener("sessionend",cf),er.stop()};function ae(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=We.autoReset,O=xe.enabled,X=xe.autoUpdate,Y=xe.needsUpdate,B=xe.type;fe(),We.autoReset=b,xe.enabled=O,xe.autoUpdate=X,xe.needsUpdate=Y,xe.type=B}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qe(b){const O=b.target;O.removeEventListener("dispose",qe),ot(O)}function ot(b){Dt(b),Pe.remove(b)}function Dt(b){const O=Pe.get(b).programs;O!==void 0&&(O.forEach(function(X){Ee.releaseProgram(X)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,Y,B,ue){O===null&&(O=Ae);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Te=fv(b,O,X,Y,B);Ce.setMaterial(Y,Me);let Re=X.index,Oe=1;if(Y.wireframe===!0){if(Re=ne.getWireframeAttribute(X),Re===void 0)return;Oe=2}const Be=X.drawRange,Ne=X.attributes.position;let it=Be.start*Oe,ct=(Be.start+Be.count)*Oe;ue!==null&&(it=Math.max(it,ue.start*Oe),ct=Math.min(ct,(ue.start+ue.count)*Oe)),Re!==null?(it=Math.max(it,0),ct=Math.min(ct,Re.count)):Ne!=null&&(it=Math.max(it,0),ct=Math.min(ct,Ne.count));const _t=ct-it;if(_t<0||_t===1/0)return;Qe.setup(B,Y,Te,X,Re);let on,et=ye;if(Re!==null&&(on=re.get(Re),et=Xe,et.setIndex(on)),B.isMesh)Y.wireframe===!0?(Ce.setLineWidth(Y.wireframeLinewidth*be()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(B.isLine){let Le=Y.linewidth;Le===void 0&&(Le=1),Ce.setLineWidth(Le*be()),B.isLineSegments?et.setMode(I.LINES):B.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else B.isPoints?et.setMode(I.POINTS):B.isSprite&&et.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Le=B._multiDrawStarts,It=B._multiDrawCounts,tt=B._multiDrawCount,An=Re?re.get(Re).bytesPerElement:1,Lr=Pe.get(Y).currentProgram.getUniforms();for(let ln=0;ln<tt;ln++)Lr.setValue(I,"_gl_DrawID",ln),et.render(Le[ln]/An,It[ln])}else if(B.isInstancedMesh)et.renderInstances(it,_t,B.count);else if(X.isInstancedBufferGeometry){const Le=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,It=Math.min(X.instanceCount,Le);et.renderInstances(it,_t,It)}else et.render(it,_t)};function Ke(b,O,X){b.transparent===!0&&b.side===Yn&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,Wa(b,O,X),b.side=qi,b.needsUpdate=!0,Wa(b,O,X),b.side=Yn):Wa(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),m=He.get(X),m.init(O),x.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==X&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const Y=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const Te=ue[Me];Ke(Te,X,B),Y.add(Te)}else Ke(ue,X,B),Y.add(ue)}),x.pop(),m=null,Y},this.compileAsync=function(b,O,X=null){const Y=this.compile(b,O,X);return new Promise(B=>{function ue(){if(Y.forEach(function(Me){Pe.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){B(b);return}setTimeout(ue,10)}ke.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Kt=null;function Qn(b){Kt&&Kt(b)}function lf(){er.stop()}function cf(){er.start()}const er=new rv;er.setAnimationLoop(Qn),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(b){Kt=b,$.setAnimationLoop(b),b===null?er.stop():er.start()},$.addEventListener("sessionstart",lf),$.addEventListener("sessionend",cf),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,O,T),m=He.get(b,x.length),m.init(O),x.push(m),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(Z),j=this.localClippingEnabled,P=oe.init(this.clippingPlanes,j),y=_e.get(b,d.length),y.init(),d.push(y),$.enabled===!0&&$.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&rc(ue,O,-1/0,_.sortObjects)}rc(b,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(U,ee),ge=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ge&&De.addToRenderList(y,b),this.info.render.frame++,P===!0&&oe.beginShadows();const X=m.state.shadowsArray;xe.render(X,b,O),P===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,B=y.transmissive;if(m.setupLights(),O.isArrayCamera){const ue=O.cameras;if(B.length>0)for(let Me=0,Te=ue.length;Me<Te;Me++){const Re=ue[Me];df(Y,B,b,Re)}ge&&De.render(b);for(let Me=0,Te=ue.length;Me<Te;Me++){const Re=ue[Me];uf(y,b,Re,Re.viewport)}}else B.length>0&&df(Y,B,b,O),ge&&De.render(b),uf(y,b,O);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(_,b,O),Qe.resetDefaultState(),D=-1,W=null,x.pop(),x.length>0?(m=x[x.length-1],P===!0&&oe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function rc(b,O,X,Y){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||se.intersectsSprite(b)){Y&&pe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const Me=J.update(b),Te=b.material;Te.visible&&y.push(b,Me,Te,X,pe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||se.intersectsObject(b))){const Me=J.update(b),Te=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),pe.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),pe.copy(Me.boundingSphere.center)),pe.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Te)){const Re=Me.groups;for(let Oe=0,Be=Re.length;Oe<Be;Oe++){const Ne=Re[Oe],it=Te[Ne.materialIndex];it&&it.visible&&y.push(b,Me,it,X,pe.z,Ne)}}else Te.visible&&y.push(b,Me,Te,X,pe.z,null)}}const ue=b.children;for(let Me=0,Te=ue.length;Me<Te;Me++)rc(ue[Me],O,X,Y)}function uf(b,O,X,Y){const B=b.opaque,ue=b.transmissive,Me=b.transparent;m.setupLightsView(X),P===!0&&oe.setGlobalState(_.clippingPlanes,X),Y&&Ce.viewport(S.copy(Y)),B.length>0&&Ga(B,O,X),ue.length>0&&Ga(ue,O,X),Me.length>0&&Ga(Me,O,X),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function df(b,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Rr(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Ba:xi,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[Y.id],Me=Y.viewport||S;ue.setSize(Me.z,Me.w);const Te=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(V),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),ge&&De.render(X);const Re=_.toneMapping;_.toneMapping=Wi;const Oe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),P===!0&&oe.setGlobalState(_.clippingPlanes,Y),Ga(b,X,Y),R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,it=O.length;Ne<it;Ne++){const ct=O[Ne],_t=ct.object,on=ct.geometry,et=ct.material,Le=ct.group;if(et.side===Yn&&_t.layers.test(Y.layers)){const It=et.side;et.side=sn,et.needsUpdate=!0,hf(_t,X,Y,on,et,Le),et.side=It,et.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(ue),R.updateRenderTargetMipmap(ue))}_.setRenderTarget(Te),_.setClearColor(V,q),Oe!==void 0&&(Y.viewport=Oe),_.toneMapping=Re}function Ga(b,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ue=b.length;B<ue;B++){const Me=b[B],Te=Me.object,Re=Me.geometry,Oe=Y===null?Me.material:Y,Be=Me.group;Te.layers.test(X.layers)&&hf(Te,O,X,Re,Oe,Be)}}function hf(b,O,X,Y,B,ue){b.onBeforeRender(_,O,X,Y,B,ue),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(_,O,X,Y,b,ue),B.transparent===!0&&B.side===Yn&&B.forceSinglePass===!1?(B.side=sn,B.needsUpdate=!0,_.renderBufferDirect(X,O,Y,B,b,ue),B.side=qi,B.needsUpdate=!0,_.renderBufferDirect(X,O,Y,B,b,ue),B.side=Yn):_.renderBufferDirect(X,O,Y,B,b,ue),b.onAfterRender(_,O,X,Y,B,ue)}function Wa(b,O,X){O.isScene!==!0&&(O=Ae);const Y=Pe.get(b),B=m.state.lights,ue=m.state.shadowsArray,Me=B.state.version,Te=Ee.getParameters(b,B.state,ue,O,X),Re=Ee.getProgramCacheKey(Te);let Oe=Y.programs;Y.environment=b.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(b.isMeshStandardMaterial?G:E).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",qe),Oe=new Map,Y.programs=Oe);let Be=Oe.get(Re);if(Be!==void 0){if(Y.currentProgram===Be&&Y.lightsStateVersion===Me)return pf(b,Te),Be}else Te.uniforms=Ee.getUniforms(b),b.onBeforeCompile(Te,_),Be=Ee.acquireProgram(Te,Re),Oe.set(Re,Be),Y.uniforms=Te.uniforms;const Ne=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ne.clippingPlanes=oe.uniform),pf(b,Te),Y.needsLights=mv(b),Y.lightsStateVersion=Me,Y.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Be,Y.uniformsList=null,Be}function ff(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=Zo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function pf(b,O){const X=Pe.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function fv(b,O,X,Y,B){O.isScene!==!0&&(O=Ae),R.resetTextureUnits();const ue=O.fog,Me=Y.isMeshStandardMaterial?O.environment:null,Te=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,Re=(Y.isMeshStandardMaterial?G:E).get(Y.envMap||Me),Oe=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!X.morphAttributes.position,it=!!X.morphAttributes.normal,ct=!!X.morphAttributes.color;let _t=Wi;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_t=_.toneMapping);const on=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=on!==void 0?on.length:0,Le=Pe.get(Y),It=m.state.lights;if(P===!0&&(j===!0||b!==W)){const vn=b===W&&Y.id===D;oe.setState(Y,b,vn)}let tt=!1;Y.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==It.state.version||Le.outputColorSpace!==Te||B.isBatchedMesh&&Le.batching===!1||!B.isBatchedMesh&&Le.batching===!0||B.isBatchedMesh&&Le.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Le.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Le.instancing===!1||!B.isInstancedMesh&&Le.instancing===!0||B.isSkinnedMesh&&Le.skinning===!1||!B.isSkinnedMesh&&Le.skinning===!0||B.isInstancedMesh&&Le.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Le.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Le.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Le.instancingMorph===!1&&B.morphTexture!==null||Le.envMap!==Re||Y.fog===!0&&Le.fog!==ue||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Be||Le.morphTargets!==Ne||Le.morphNormals!==it||Le.morphColors!==ct||Le.toneMapping!==_t||Le.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Le.__version=Y.version);let An=Le.currentProgram;tt===!0&&(An=Wa(Y,O,B));let Lr=!1,ln=!1,sc=!1;const St=An.getUniforms(),_i=Le.uniforms;if(Ce.useProgram(An.program)&&(Lr=!0,ln=!0,sc=!0),Y.id!==D&&(D=Y.id,ln=!0),Lr||W!==b){ze.reverseDepthBuffer?(te.copy(b.projectionMatrix),gS(te),xS(te),St.setValue(I,"projectionMatrix",te)):St.setValue(I,"projectionMatrix",b.projectionMatrix),St.setValue(I,"viewMatrix",b.matrixWorldInverse);const vn=St.map.cameraPosition;vn!==void 0&&vn.setValue(I,de.setFromMatrixPosition(b.matrixWorld)),ze.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&St.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),W!==b&&(W=b,ln=!0,sc=!0)}if(B.isSkinnedMesh){St.setOptional(I,B,"bindMatrix"),St.setOptional(I,B,"bindMatrixInverse");const vn=B.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),St.setValue(I,"boneTexture",vn.boneTexture,R))}B.isBatchedMesh&&(St.setOptional(I,B,"batchingTexture"),St.setValue(I,"batchingTexture",B._matricesTexture,R),St.setOptional(I,B,"batchingIdTexture"),St.setValue(I,"batchingIdTexture",B._indirectTexture,R),St.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&St.setValue(I,"batchingColorTexture",B._colorsTexture,R));const ac=X.morphAttributes;if((ac.position!==void 0||ac.normal!==void 0||ac.color!==void 0)&&Ie.update(B,X,An),(ln||Le.receiveShadow!==B.receiveShadow)&&(Le.receiveShadow=B.receiveShadow,St.setValue(I,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(_i.envMap.value=Re,_i.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(_i.envMapIntensity.value=O.environmentIntensity),ln&&(St.setValue(I,"toneMappingExposure",_.toneMappingExposure),Le.needsLights&&pv(_i,sc),ue&&Y.fog===!0&&he.refreshFogUniforms(_i,ue),he.refreshMaterialUniforms(_i,Y,Q,H,m.state.transmissionRenderTarget[b.id]),Zo.upload(I,ff(Le),_i,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Zo.upload(I,ff(Le),_i,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&St.setValue(I,"center",B.center),St.setValue(I,"modelViewMatrix",B.modelViewMatrix),St.setValue(I,"normalMatrix",B.normalMatrix),St.setValue(I,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const vn=Y.uniformsGroups;for(let oc=0,gv=vn.length;oc<gv;oc++){const mf=vn[oc];k.update(mf,An),k.bind(mf,An)}}return An}function pv(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function mv(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,O,X){Pe.get(b.texture).__webglTexture=O,Pe.get(b.depthTexture).__webglTexture=X;const Y=Pe.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const X=Pe.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,X=0){T=b,L=O,N=X;let Y=!0,B=null,ue=!1,Me=!1;if(b){const Re=Pe.get(b);if(Re.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Re.__hasExternalTextures)R.rebindTextures(b,Pe.get(b.texture).__webglTexture,Pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ne=b.depthTexture;if(Re.__boundDepthTexture!==Ne){if(Ne!==null&&Pe.has(Ne)&&(b.width!==Ne.image.width||b.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Be=Pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?B=Be[O][X]:B=Be[O],ue=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?B=Pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[X]:B=Be,S.copy(b.viewport),w.copy(b.scissor),F=b.scissorTest}else S.copy(A).multiplyScalar(Q).floor(),w.copy(C).multiplyScalar(Q).floor(),F=ie;if(Ce.bindFramebuffer(I.FRAMEBUFFER,B)&&Y&&Ce.drawBuffers(b,B),Ce.viewport(S),Ce.scissor(w),Ce.setScissorTest(F),ue){const Re=Pe.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,X)}else if(Me){const Re=Pe.get(b.texture),Oe=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.__webglTexture,X||0,Oe)}D=-1},this.readRenderTargetPixels=function(b,O,X,Y,B,ue,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){Ce.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Re=b.texture,Oe=Re.format,Be=Re.type;if(!ze.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Y&&X>=0&&X<=b.height-B&&I.readPixels(O,X,Y,B,Fe.convert(Oe),Fe.convert(Be),ue)}finally{const Re=T!==null?Pe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,Y,B,ue,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){const Re=b.texture,Oe=Re.format,Be=Re.type;if(!ze.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-Y&&X>=0&&X<=b.height-B){Ce.bindFramebuffer(I.FRAMEBUFFER,Te);const Ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(O,X,Y,B,Fe.convert(Oe),Fe.convert(Be),0);const it=T!==null?Pe.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(I.FRAMEBUFFER,it);const ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await mS(I,ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(Ne),I.deleteSync(ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,X=0){b.isTexture!==!0&&(Ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-X),B=Math.floor(b.image.width*Y),ue=Math.floor(b.image.height*Y),Me=O!==null?O.x:0,Te=O!==null?O.y:0;R.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Me,Te,B,ue),Ce.unbindTexture()},this.copyTextureToTexture=function(b,O,X=null,Y=null,B=0){b.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],O=arguments[2],B=arguments[3]||0,X=null);let ue,Me,Te,Re,Oe,Be;X!==null?(ue=X.max.x-X.min.x,Me=X.max.y-X.min.y,Te=X.min.x,Re=X.min.y):(ue=b.image.width,Me=b.image.height,Te=0,Re=0),Y!==null?(Oe=Y.x,Be=Y.y):(Oe=0,Be=0);const Ne=Fe.convert(O.format),it=Fe.convert(O.type);R.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const ct=I.getParameter(I.UNPACK_ROW_LENGTH),_t=I.getParameter(I.UNPACK_IMAGE_HEIGHT),on=I.getParameter(I.UNPACK_SKIP_PIXELS),et=I.getParameter(I.UNPACK_SKIP_ROWS),Le=I.getParameter(I.UNPACK_SKIP_IMAGES),It=b.isCompressedTexture?b.mipmaps[B]:b.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,It.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,It.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Oe,Be,ue,Me,Ne,it,It.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Oe,Be,It.width,It.height,Ne,It.data):I.texSubImage2D(I.TEXTURE_2D,B,Oe,Be,ue,Me,Ne,it,It),I.pixelStorei(I.UNPACK_ROW_LENGTH,ct),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t),I.pixelStorei(I.UNPACK_SKIP_PIXELS,on),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Le),B===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(b,O,X=null,Y=null,B=0){b.isTexture!==!0&&(Ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0);let ue,Me,Te,Re,Oe,Be,Ne,it,ct;const _t=b.isCompressedTexture?b.mipmaps[B]:b.image;X!==null?(ue=X.max.x-X.min.x,Me=X.max.y-X.min.y,Te=X.max.z-X.min.z,Re=X.min.x,Oe=X.min.y,Be=X.min.z):(ue=_t.width,Me=_t.height,Te=_t.depth,Re=0,Oe=0,Be=0),Y!==null?(Ne=Y.x,it=Y.y,ct=Y.z):(Ne=0,it=0,ct=0);const on=Fe.convert(O.format),et=Fe.convert(O.type);let Le;if(O.isData3DTexture)R.setTexture3D(O,0),Le=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)R.setTexture2DArray(O,0),Le=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const It=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),An=I.getParameter(I.UNPACK_SKIP_PIXELS),Lr=I.getParameter(I.UNPACK_SKIP_ROWS),ln=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Be),b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Le,B,Ne,it,ct,ue,Me,Te,on,et,_t.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Le,B,Ne,it,ct,ue,Me,Te,on,_t.data):I.texSubImage3D(Le,B,Ne,it,ct,ue,Me,Te,on,et,_t),I.pixelStorei(I.UNPACK_ROW_LENGTH,It),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,An),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ln),B===0&&O.generateMipmaps&&I.generateMipmap(Le),Ce.unbindTexture()},this.initRenderTarget=function(b){Pe.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Ce.unbindTexture()},this.resetState=function(){L=0,N=0,T=null,Ce.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Jh?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===ec?"display-p3":"srgb"}}class tf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=n}clone(){return new tf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class CT extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dv extends Is{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new z,Nl=new z,Sm=new pt,Ks=new Kx,Po=new tc,hu=new z,Mm=new z;class RT extends bt{constructor(e=new xn,n=new dv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Rl.fromBufferAttribute(n,r-1),Nl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Rl.distanceTo(Nl);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;Sm.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(Sm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const g=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=g,m=v-1;y<m;y+=u){const d=h.getX(y),x=h.getX(y+1),_=Lo(this,e,Ks,l,d,x);_&&n.push(_)}if(this.isLineLoop){const y=h.getX(v-1),m=h.getX(g),d=Lo(this,e,Ks,l,y,m);d&&n.push(d)}}else{const g=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let y=g,m=v-1;y<m;y+=u){const d=Lo(this,e,Ks,l,y,y+1);d&&n.push(d)}if(this.isLineLoop){const y=Lo(this,e,Ks,l,v-1,g);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Lo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Rl.fromBufferAttribute(a,r),Nl.fromBufferAttribute(a,s),n.distanceSqToSegment(Rl,Nl,hu,Mm)>i)return;hu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(hu);if(!(l<e.near||l>e.far))return{distance:l,point:Mm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Em=new z,wm=new z;class NT extends RT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Em.fromBufferAttribute(n,r),wm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Em.distanceTo(wm);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ri extends xn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],p=[],g=[];let v=0;const y=[],m=i/2;let d=0;x(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(p,3)),this.setAttribute("uv",new xt(g,2));function x(){const M=new z,L=new z;let N=0;const T=(n-e)/i;for(let D=0;D<=s;D++){const W=[],S=D/s,w=S*(n-e)+e;for(let F=0;F<=r;F++){const V=F/r,q=V*l+o,K=Math.sin(q),H=Math.cos(q);L.x=w*K,L.y=-S*i+m,L.z=w*H,f.push(L.x,L.y,L.z),M.set(K,T,H).normalize(),p.push(M.x,M.y,M.z),g.push(V,1-S),W.push(v++)}y.push(W)}for(let D=0;D<r;D++)for(let W=0;W<s;W++){const S=y[W][D],w=y[W+1][D],F=y[W+1][D+1],V=y[W][D+1];e>0&&(h.push(S,w,V),N+=3),n>0&&(h.push(w,F,V),N+=3)}u.addGroup(d,N,0),d+=N}function _(M){const L=v,N=new Ze,T=new z;let D=0;const W=M===!0?e:n,S=M===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*S,0),p.push(0,S,0),g.push(.5,.5),v++;const w=v;for(let F=0;F<=r;F++){const q=F/r*l+o,K=Math.cos(q),H=Math.sin(q);T.x=W*H,T.y=m*S,T.z=W*K,f.push(T.x,T.y,T.z),p.push(0,S,0),N.x=K*.5+.5,N.y=H*.5*S+.5,g.push(N.x,N.y),v++}for(let F=0;F<r;F++){const V=L+F,q=w+F;M===!0?h.push(q,q+1,V):h.push(q+1,q,V),D+=3}u.addGroup(d,D,M===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nf extends xn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],u=[],h=[];let f=e;const p=(n-e)/r,g=new z,v=new Ze;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const d=s+m/i*a;g.x=f*Math.cos(d),g.y=f*Math.sin(d),l.push(g.x,g.y,g.z),u.push(0,0,1),v.x=(g.x/n+1)/2,v.y=(g.y/n+1)/2,h.push(v.x,v.y)}f+=p}for(let y=0;y<r;y++){const m=y*(i+1);for(let d=0;d<i;d++){const x=d+m,_=x,M=x+i+1,L=x+i+2,N=x+1;o.push(_,M,N),o.push(M,L,N)}}this.setIndex(o),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rf extends xn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const h=[],f=new z,p=new z,g=[],v=[],y=[],m=[];for(let d=0;d<=i;d++){const x=[],_=d/i;let M=0;d===0&&a===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let L=0;L<=n;L++){const N=L/n;f.x=-e*Math.cos(r+N*s)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(r+N*s)*Math.sin(a+_*o),v.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),m.push(N+M,1-_),x.push(u++)}h.push(x)}for(let d=0;d<i;d++)for(let x=0;x<n;x++){const _=h[d][x+1],M=h[d][x],L=h[d+1][x],N=h[d+1][x+1];(d!==0||a>0)&&g.push(_,M,N),(d!==i-1||l<Math.PI)&&g.push(M,L,N)}this.setIndex(g),this.setAttribute("position",new xt(v,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class sf extends xn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],u=[],h=new z,f=new z,p=new z;for(let g=0;g<=i;g++)for(let v=0;v<=r;v++){const y=v/r*s,m=g/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),u.push(v/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let v=1;v<=r;v++){const y=(r+1)*g+v-1,m=(r+1)*(g-1)+v-1,d=(r+1)*(g-1)+v,x=(r+1)*g+v;a.push(y,m,x),a.push(m,d,x)}this.setIndex(a),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qr extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wx,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PT extends qr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ic extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const fu=new pt,bm=new z,Tm=new z;class af{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qh,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),Tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tm),n.updateMatrixWorld(),fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class LT extends af{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=Al*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class DT extends ic{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new LT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Am=new pt,Zs=new z,pu=new z;class IT extends af{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Zs),pu.copy(i.position),pu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(pu),i.updateMatrixWorld(),r.makeTranslation(-Zs.x,-Zs.y,-Zs.z),Am.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Am)}}class Cm extends ic{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class UT extends af{constructor(){super(new sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kT extends ic{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new UT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FT extends ic{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class OT extends NT{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ge(i),r=new Ge(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let p=0,g=0,v=-o;p<=n;p++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const y=p===s?i:r;y.toArray(u,g),g+=3,y.toArray(u,g),g+=3,y.toArray(u,g),g+=3,y.toArray(u,g),g+=3}const h=new xn;h.setAttribute("position",new xt(l,3)),h.setAttribute("color",new xt(u,3));const f=new dv({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);class BT{constructor(){tr(this,"ctx",null);tr(this,"osc1",null);tr(this,"osc2",null);tr(this,"gainNode",null);tr(this,"filterNode",null);tr(this,"isPlaying",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}playEngineSound(e,n=150){var r,s;if(this.stopEngineSound(),this.initContext(),!this.ctx)return;const i=this.ctx.currentTime;this.isPlaying=!0,this.gainNode=this.ctx.createGain(),this.gainNode.gain.setValueAtTime(.01,i),this.gainNode.gain.exponentialRampToValueAtTime(.2,i+.3),this.filterNode=this.ctx.createBiquadFilter(),this.filterNode.type="lowpass",e.includes("ELECTRIC")?(this.osc1=this.ctx.createOscillator(),this.osc1.type="sine",this.osc1.frequency.setValueAtTime(140,i),this.osc1.frequency.exponentialRampToValueAtTime(780,i+2),this.filterNode.frequency.setValueAtTime(1200,i),this.osc1.connect(this.gainNode)):e==="BIKE"&&n>140?(this.osc1=this.ctx.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.setValueAtTime(85,i),this.osc1.frequency.exponentialRampToValueAtTime(320,i+1.8),this.osc2=this.ctx.createOscillator(),this.osc2.type="triangle",this.osc2.frequency.setValueAtTime(170,i),this.osc2.frequency.exponentialRampToValueAtTime(640,i+1.8),this.filterNode.frequency.setValueAtTime(2400,i),this.osc1.connect(this.filterNode),this.osc2.connect(this.filterNode),this.filterNode.connect(this.gainNode)):e==="SCOOTER"?(this.osc1=this.ctx.createOscillator(),this.osc1.type="triangle",this.osc1.frequency.setValueAtTime(95,i),this.osc1.frequency.exponentialRampToValueAtTime(220,i+2),this.filterNode.frequency.setValueAtTime(800,i),this.osc1.connect(this.filterNode),this.filterNode.connect(this.gainNode)):(this.osc1=this.ctx.createOscillator(),this.osc1.type="sawtooth",this.osc1.frequency.setValueAtTime(45,i),this.osc1.frequency.exponentialRampToValueAtTime(160,i+1.5),this.osc2=this.ctx.createOscillator(),this.osc2.type="sine",this.osc2.frequency.setValueAtTime(90,i),this.osc2.frequency.exponentialRampToValueAtTime(280,i+1.5),this.filterNode.frequency.setValueAtTime(750,i),this.osc1.connect(this.filterNode),this.osc2.connect(this.filterNode),this.filterNode.connect(this.gainNode)),this.gainNode.connect(this.ctx.destination),(r=this.osc1)==null||r.start(i),(s=this.osc2)==null||s.start(i),this.gainNode.gain.exponentialRampToValueAtTime(.001,i+4),setTimeout(()=>{this.stopEngineSound()},4100)}stopEngineSound(){if(this.isPlaying)try{this.osc1&&(this.osc1.stop(),this.osc1.disconnect(),this.osc1=null),this.osc2&&(this.osc2.stop(),this.osc2.disconnect(),this.osc2=null),this.gainNode&&(this.gainNode.disconnect(),this.gainNode=null),this.isPlaying=!1}catch{this.isPlaying=!1}}}const Rm=new BT,zT=[{name:"Electric Teal",hex:"#00E5C7"},{name:"Midnight Black",hex:"#121214"},{name:"Racing Saffron",hex:"#FF6600"},{name:"Cyber Gold",hex:"#D4AF37"},{name:"Crimson Pulse",hex:"#FF2D55"},{name:"Titanium Silver",hex:"#E5E5EA"}],HT=({vehicle:t,onClose:e,onBookNow:n})=>{const i=ce.useRef(null),[r,s]=ce.useState((t==null?void 0:t.colorHex)||"#00E5C7"),[a,o]=ce.useState(!0),[l,u]=ce.useState(!1),[h,f]=ce.useState(0),[p,g]=ce.useState(1200),[v,y]=ce.useState("N"),m=ce.useRef(null),d=ce.useRef(null),x=ce.useRef(null),_=ce.useRef(null),M=ce.useRef([]),L=ce.useRef(null),N=ce.useRef(0),T=ce.useRef(!1),D=ce.useRef({x:0,y:0}),W=ce.useRef({theta:Math.PI/4,phi:Math.PI/3.5,radius:7.5});ce.useEffect(()=>{if(!t||!i.current)return;const F=i.current,V=F.clientWidth,q=F.clientHeight,K=new CT;K.background=new Ge("#0A0A0B"),K.fog=new tf("#0A0A0B",.04),m.current=K;const H=new Qt(45,V/q,.1,100);H.position.set(W.current.radius*Math.sin(W.current.phi)*Math.sin(W.current.theta),W.current.radius*Math.cos(W.current.phi),W.current.radius*Math.sin(W.current.phi)*Math.cos(W.current.theta)),H.lookAt(0,.8,0);const Q=new AT({antialias:!0,alpha:!0});Q.setSize(V,q),Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.shadowMap.enabled=!0,Q.shadowMap.type=Lx,F.innerHTML="",F.appendChild(Q.domElement),d.current=Q;const U=new FT("#ffffff",.8);K.add(U);const ee=new kT("#ffffff",1.8);ee.position.set(6,10,6),ee.castShadow=!0,ee.shadow.mapSize.width=1024,ee.shadow.mapSize.height=1024,K.add(ee);const A=new Cm("#00E5C7",2.5,12);A.position.set(-6,4,-4),K.add(A);const C=new Cm("#D4AF37",1.8,12);C.position.set(4,2,-5),K.add(C);const ie=new DT(16777215,a?6:0,16,Math.PI/4,.5);ie.position.set(2.4,1.2,0);const se=new bt;se.position.set(8,0,0),K.add(se),ie.target=se,ie.castShadow=!0,K.add(ie),_.current=ie;const P=new Va(30,30),j=new qr({color:"#0e0e11",roughness:.2,metalness:.8}),te=new st(P,j);te.rotation.x=-Math.PI/2,te.receiveShadow=!0,K.add(te);const Z=new OT(30,30,"#00E5C7","#222226");Z.position.y=.01,K.add(Z);const de=new nf(3.2,3.25,64),pe=new pa({color:"#00E5C7",side:Yn}),Ae=new st(de,pe);Ae.rotation.x=-Math.PI/2,Ae.position.y=.02,K.add(Ae);const ge=new Ui;M.current=[];const be=new qr({color:r,metalness:.85,roughness:.22,clearcoat:.9,clearcoatRoughness:.1});x.current=be;const I=new qr({color:"#EEEEEE",metalness:.95,roughness:.1}),Ue=new qr({color:"#1A1A1A",roughness:.85,metalness:.1}),ke=new PT({color:"#111111",metalness:.1,roughness:.1,transmission:.7,transparent:!0});if(t.vehicleType.includes("CAR")){const ne=new Un(4.4,.8,2),J=new st(ne,be);J.position.set(0,.85,0),J.castShadow=!0,ge.add(J);const Ee=new Un(2.4,.75,1.7),he=new st(Ee,be);he.position.set(-.2,1.55,0),he.castShadow=!0,ge.add(he);const _e=new Un(2.35,.68,1.75),He=new st(_e,ke);He.position.set(-.18,1.55,0),ge.add(He);const oe=new Un(.1,.2,.4),xe=new pa({color:a?"#FFFFFF":"#888888"}),De=new st(oe,xe);De.position.set(2.21,.85,.65);const Ie=new st(oe,xe);Ie.position.set(2.21,.85,-.65),ge.add(De),ge.add(Ie);const ye=new Ri(.48,.48,.26,24);ye.rotateX(Math.PI/2),[[1.4,.48,1.05],[1.4,.48,-1.05],[-1.4,.48,1.05],[-1.4,.48,-1.05]].forEach(([Fe,Qe,k])=>{const fe=new Ui;fe.position.set(Fe,Qe,k);const $=new st(ye,Ue);$.castShadow=!0,fe.add($),ge.add(fe),M.current.push(fe)})}else{const ne=new Ri(.08,.08,2.8,16),J=new st(ne,I);J.rotation.z=Math.PI/2.3,J.position.set(0,1.1,0),J.castShadow=!0,ge.add(J);const Ee=new rf(.7,32,16);Ee.scale(1.4,.75,.75);const he=new st(Ee,be);he.position.set(.4,1.35,0),he.castShadow=!0,ge.add(he);const _e=new Un(.85,.7,.55),He=new st(_e,I);He.position.set(0,.75,0),He.castShadow=!0,ge.add(He);const oe=new Un(1.2,.18,.45),xe=new qr({color:"#161616",roughness:.9}),De=new st(oe,xe);De.position.set(-.6,1.25,0),De.rotation.z=-.1,ge.add(De);const Ie=new Ri(.06,.09,2.2,16),ye=new st(Ie,I);ye.rotation.z=Math.PI/2.1,ye.position.set(-.3,.5,.3),ge.add(ye);const Xe=new Ri(.04,.04,1.3,16),Fe=new st(Xe,I);Fe.rotation.x=Math.PI/2,Fe.position.set(1.1,1.7,0),ge.add(Fe);const Qe=new Ri(.2,.25,.25,24),k=new pa({color:a?"#FFFFFF":"#888888"}),fe=new st(Qe,k);fe.rotation.z=Math.PI/2,fe.position.set(1.4,1.45,0),ge.add(fe);const $=new Ui;$.position.set(1.5,.65,0);const ae=new sf(.65,.16,16,32),ve=new st(ae,Ue);ve.castShadow=!0;const Se=new Ri(.5,.5,.1,16),qe=new st(Se,I);qe.rotation.x=Math.PI/2,$.add(ve),$.add(qe),ge.add($),M.current.push($);const ot=new Ui;ot.position.set(-1.5,.65,0);const Dt=new st(ae,Ue);Dt.castShadow=!0;const Ke=new st(Se,I);Ke.rotation.x=Math.PI/2,ot.add(Dt),ot.add(Ke),ge.add(ot),M.current.push(ot)}K.add(ge),L.current=ge;let Ce=!0;const We=()=>{N.current=requestAnimationFrame(We),Ce&&!T.current&&(W.current.theta+=.005),H.position.x=W.current.radius*Math.sin(W.current.phi)*Math.sin(W.current.theta),H.position.y=W.current.radius*Math.cos(W.current.phi),H.position.z=W.current.radius*Math.sin(W.current.phi)*Math.cos(W.current.theta),H.lookAt(0,.8,0),l&&M.current.forEach(ne=>{ne.rotation.z-=.15}),Q.render(K,H)};We();const Pe=ne=>{T.current=!0,Ce=!1,D.current={x:ne.clientX,y:ne.clientY}},R=ne=>{if(!T.current)return;const J=ne.clientX-D.current.x,Ee=ne.clientY-D.current.y;D.current={x:ne.clientX,y:ne.clientY},W.current.theta-=J*.008,W.current.phi=Math.max(.1,Math.min(Math.PI/2.1,W.current.phi-Ee*.008))},E=()=>{T.current=!1},G=ne=>{ne.preventDefault(),W.current.radius=Math.max(3.5,Math.min(14,W.current.radius+ne.deltaY*.005))};F.addEventListener("mousedown",Pe),window.addEventListener("mousemove",R),window.addEventListener("mouseup",E),F.addEventListener("wheel",G,{passive:!1});const re=()=>{if(!F||!d.current)return;const ne=F.clientWidth,J=F.clientHeight;H.aspect=ne/J,H.updateProjectionMatrix(),d.current.setSize(ne,J)};return window.addEventListener("resize",re),()=>{cancelAnimationFrame(N.current),F.removeEventListener("mousedown",Pe),window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",E),F.removeEventListener("wheel",G),window.removeEventListener("resize",re),Q.dispose(),Rm.stopEngineSound()}},[t]),ce.useEffect(()=>{x.current&&x.current.color.set(r)},[r]),ce.useEffect(()=>{_.current&&(_.current.intensity=a?6.5:0)},[a]);const S=()=>{if(!t)return;u(!0),Rm.playEngineSound(t.vehicleType,t.maxSpeed);let F=0,V=1200;const q=Math.min(t.maxSpeed,140),K=8400,H=setInterval(()=>{F+=7,V+=450,F>=q&&(F=q,V=K,y("4"),clearInterval(H),setTimeout(()=>{u(!1),f(0),g(1200),y("N")},1500)),f(F),g(V),F>80?y("3"):F>40?y("2"):F>10&&y("1")},60)},w=F=>{F==="orbit"?W.current={theta:Math.PI/4,phi:Math.PI/3.5,radius:7.5}:F==="side"?W.current={theta:0,phi:Math.PI/2.3,radius:6.5}:F==="front"?W.current={theta:Math.PI/2,phi:Math.PI/2.3,radius:6.8}:F==="cockpit"&&(W.current={theta:Math.PI/4,phi:Math.PI/5,radius:4.2})};return t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-6xl h-[92vh] max-h-[880px] bg-[#0A0A0B] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row",children:[c.jsxs("div",{className:"relative flex-1 h-[55%] lg:h-full overflow-hidden bg-gradient-to-b from-[#0A0A0B] via-[#101014] to-[#0A0A0B]",children:[c.jsx("div",{ref:i,className:"w-full h-full cursor-grab active:cursor-grabbing"}),c.jsxs("div",{className:"absolute top-4 left-4 flex items-center space-x-2",children:[c.jsxs("div",{className:"px-3 py-1 rounded-full bg-[#141416]/90 border border-[#00E5C7]/40 text-[#00E5C7] text-xs font-bold flex items-center space-x-1.5 shadow-teal-glow",children:[c.jsx(Vh,{className:"w-3.5 h-3.5 animate-spin",style:{animationDuration:"6s"}}),c.jsx("span",{children:"360° Real-time 3D Studio"})]}),c.jsx("span",{className:"hidden sm:inline text-[11px] text-slate-400 bg-black/50 px-2.5 py-1 rounded-md",children:"Drag to rotate • Scroll to zoom"})]}),c.jsxs("div",{className:"absolute bottom-4 left-4 flex items-center space-x-1.5 bg-[#141416]/80 p-1 rounded-xl border border-white/10 backdrop-blur-md",children:[c.jsx("button",{onClick:()=>w("orbit"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Perspective"}),c.jsx("button",{onClick:()=>w("side"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Side Aero"}),c.jsx("button",{onClick:()=>w("front"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Front Aggressive"}),c.jsx("button",{onClick:()=>w("cockpit"),className:"px-2.5 py-1 rounded-lg text-[10px] font-bold text-slate-300 hover:bg-white/10",children:"Cockpit"})]}),c.jsxs("div",{className:"absolute top-4 right-4 flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>o(!a),className:`p-2.5 rounded-xl border transition ${a?"bg-[#00E5C7]/20 border-[#00E5C7] text-[#00E5C7] glow-teal":"bg-[#141416] border-white/10 text-slate-400"}`,title:"Toggle Headlight Beams",children:c.jsx(d1,{className:"w-4 h-4"})}),c.jsxs("button",{onClick:S,disabled:l,className:`flex items-center space-x-1.5 px-3 py-2 rounded-xl font-bold text-xs border transition ${l?"bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse":"bg-[#141416] border-white/10 hover:border-[#D4AF37] text-white"}`,children:[c.jsx(S1,{className:"w-4 h-4 text-[#D4AF37]"}),c.jsx("span",{children:l?"Revving Engine...":"Test Rev Sound"})]})]}),c.jsx("button",{onClick:e,className:"lg:hidden absolute top-4 left-auto right-4 p-2 rounded-full bg-black/60 text-white border border-white/10",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"w-full lg:w-[440px] h-[45%] lg:h-full bg-[#141416] border-t lg:border-t-0 lg:border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-start justify-between",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[11px] font-bold uppercase tracking-widest text-[#00E5C7]",children:t.brand}),c.jsx("h2",{className:"text-2xl font-extrabold text-white font-display leading-tight",children:t.name}),c.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:t.model})]}),c.jsx("button",{onClick:e,className:"hidden lg:flex p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"mt-5 p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 relative overflow-hidden",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsxs("span",{className:"text-[10px] font-bold tracking-widest uppercase text-slate-400 flex items-center space-x-1",children:[c.jsx(tx,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsx("span",{children:"Real-time Telemetry"})]}),c.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#D4AF37]",children:["GEAR: ",c.jsx("strong",{className:"text-white text-xs",children:v})]})]}),c.jsxs("div",{className:"flex items-baseline justify-between pt-1",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsx("span",{className:"text-4xl font-extrabold font-mono text-white tracking-tight",children:h}),c.jsx("span",{className:"text-xs font-semibold text-slate-400",children:"km/h"})]}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:["Top Speed: ",t.maxSpeed," km/h"]})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("span",{className:"text-lg font-mono font-bold text-[#00E5C7]",children:p.toLocaleString()}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"RPM Tachometer"})]})]}),c.jsx("div",{className:"w-full h-1.5 bg-white/10 rounded-full mt-3 overflow-hidden",children:c.jsx("div",{className:"h-full bg-gradient-to-r from-[#00E5C7] via-[#D4AF37] to-[#FF2D55] transition-all duration-100",style:{width:`${h/t.maxSpeed*100}%`}})}),c.jsxs("button",{onClick:S,disabled:l,className:"w-full mt-3 py-2 rounded-xl bg-white/5 hover:bg-[#00E5C7]/15 border border-white/10 hover:border-[#00E5C7]/50 text-xs font-bold text-white transition flex items-center justify-center space-x-2",children:[c.jsx(Gh,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("span",{children:["Throttle Launch (0-100 in ",t.zeroToHundred,"s)"]})]})]}),c.jsxs("div",{className:"mt-5",children:[c.jsxs("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-1",children:[c.jsx(p1,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"Body Paint Finish"})]}),c.jsx("div",{className:"flex items-center space-x-2.5",children:zT.map(F=>c.jsx("button",{onClick:()=>s(F.hex),style:{backgroundColor:F.hex},className:`w-7 h-7 rounded-full transition-transform border ${r===F.hex?"scale-125 border-white ring-2 ring-[#00E5C7]":"border-white/20 hover:scale-110"}`,title:F.name},F.name))})]}),c.jsxs("div",{className:"mt-5 grid grid-cols-2 gap-2 text-xs",children:[c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Powertrain"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.engineOrBattery})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Transmission"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.transmission})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Mileage / Range"}),c.jsx("p",{className:"font-bold text-white mt-0.5",children:t.mileageOrRange})]}),c.jsxs("div",{className:"p-2.5 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Security Deposit"}),c.jsxs("p",{className:"font-bold text-white mt-0.5",children:["₹",t.securityDeposit.toLocaleString("en-IN")]})]})]})]}),c.jsxs("div",{className:"pt-5 border-t border-white/10",children:[c.jsx("div",{className:"flex items-center justify-between mb-3",children:c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] text-slate-400",children:"Rental Rate"}),c.jsxs("div",{className:"flex items-baseline space-x-1",children:[c.jsxs("span",{className:"text-2xl font-extrabold font-display text-white",children:["₹",t.pricePerHour]}),c.jsx("span",{className:"text-xs text-slate-400",children:"/ hour"}),c.jsxs("span",{className:"text-xs text-[#00E5C7] ml-2 font-medium",children:["or ₹",t.pricePerDay," / day"]})]})]})}),c.jsxs("button",{onClick:()=>{e(),n(t)},className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsxs("span",{children:["Book ",t.name," Now"]}),c.jsx(ql,{className:"w-4 h-4"})]})]})]})]})}):null};var of={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var A=new OffscreenCanvas(1,1),C=A.getContext("2d");C.fillRect(0,0,1,1);var ie=A.transferToImageBitmap();C.createPattern(ie,"no-repeat")}catch{return!1}return!0}();function l(){}function u(A){var C=n.exports.Promise,ie=C!==void 0?C:e.Promise;return typeof ie=="function"?new ie(A):(A(l,l),null)}var h=function(A,C){return{transform:function(ie){if(A)return ie;if(C.has(ie))return C.get(ie);var se=new OffscreenCanvas(ie.width,ie.height),P=se.getContext("2d");return P.drawImage(ie,0,0),C.set(ie,se),se},clear:function(){C.clear()}}}(o,new Map),f=function(){var A=Math.floor(16.666666666666668),C,ie,se={},P=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(j){var te=Math.random();return se[te]=requestAnimationFrame(function Z(de){P===de||P+A-1<de?(P=de,delete se[te],j()):se[te]=requestAnimationFrame(Z)}),te},ie=function(j){se[j]&&cancelAnimationFrame(se[j])}):(C=function(j){return setTimeout(j,A)},ie=function(j){return clearTimeout(j)}),{frame:C,cancel:ie}}(),p=function(){var A,C,ie={};function se(P){function j(te,Z){P.postMessage({options:te||{},callback:Z})}P.init=function(Z){var de=Z.transferControlToOffscreen();P.postMessage({canvas:de},[de])},P.fire=function(Z,de,pe){if(C)return j(Z,null),C;var Ae=Math.random().toString(36).slice(2);return C=u(function(ge){function be(I){I.data.callback===Ae&&(delete ie[Ae],P.removeEventListener("message",be),C=null,h.clear(),pe(),ge())}P.addEventListener("message",be),j(Z,Ae),ie[Ae]=be.bind(null,{data:{callback:Ae}})}),C},P.reset=function(){P.postMessage({reset:!0});for(var Z in ie)ie[Z](),delete ie[Z]}}return function(){if(A)return A;if(!i&&s){var P=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{A=new Worker(URL.createObjectURL(new Blob([P])))}catch(j){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",j),null}se(A)}return A}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(A,C){return C?C(A):A}function y(A){return A!=null}function m(A,C,ie){return v(A&&y(A[C])?A[C]:g[C],ie)}function d(A){return A<0?0:Math.floor(A)}function x(A,C){return Math.floor(Math.random()*(C-A))+A}function _(A){return parseInt(A,16)}function M(A){return A.map(L)}function L(A){var C=String(A).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:_(C.substring(0,2)),g:_(C.substring(2,4)),b:_(C.substring(4,6))}}function N(A){var C=m(A,"origin",Object);return C.x=m(C,"x",Number),C.y=m(C,"y",Number),C}function T(A){A.width=document.documentElement.clientWidth,A.height=document.documentElement.clientHeight}function D(A){var C=A.getBoundingClientRect();A.width=C.width,A.height=C.height}function W(A){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=A,C}function S(A,C,ie,se,P,j,te,Z,de){A.save(),A.translate(C,ie),A.rotate(j),A.scale(se,P),A.arc(0,0,1,te,Z,de),A.restore()}function w(A){var C=A.angle*(Math.PI/180),ie=A.spread*(Math.PI/180);return{x:A.x,y:A.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:A.startVelocity*.5+Math.random()*A.startVelocity,angle2D:-C+(.5*ie-Math.random()*ie),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:A.color,shape:A.shape,tick:0,totalTicks:A.ticks,decay:A.decay,drift:A.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:A.gravity*3,ovalScalar:.6,scalar:A.scalar,flat:A.flat}}function F(A,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var ie=C.tick++/C.totalTicks,se=C.x+C.random*C.tiltCos,P=C.y+C.random*C.tiltSin,j=C.wobbleX+C.random*C.tiltCos,te=C.wobbleY+C.random*C.tiltSin;if(A.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-ie)+")",A.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))A.fill(Q(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(j-se)*.1,Math.abs(te-P)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var Z=Math.PI/10*C.wobble,de=Math.abs(j-se)*.1,pe=Math.abs(te-P)*.1,Ae=C.shape.bitmap.width*C.scalar,ge=C.shape.bitmap.height*C.scalar,be=new DOMMatrix([Math.cos(Z)*de,Math.sin(Z)*de,-Math.sin(Z)*pe,Math.cos(Z)*pe,C.x,C.y]);be.multiplySelf(new DOMMatrix(C.shape.matrix));var I=A.createPattern(h.transform(C.shape.bitmap),"no-repeat");I.setTransform(be),A.globalAlpha=1-ie,A.fillStyle=I,A.fillRect(C.x-Ae/2,C.y-ge/2,Ae,ge),A.globalAlpha=1}else if(C.shape==="circle")A.ellipse?A.ellipse(C.x,C.y,Math.abs(j-se)*C.ovalScalar,Math.abs(te-P)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):S(A,C.x,C.y,Math.abs(j-se)*C.ovalScalar,Math.abs(te-P)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var Ue=Math.PI/2*3,ke=4*C.scalar,ze=8*C.scalar,Ce=C.x,We=C.y,Pe=5,R=Math.PI/Pe;Pe--;)Ce=C.x+Math.cos(Ue)*ze,We=C.y+Math.sin(Ue)*ze,A.lineTo(Ce,We),Ue+=R,Ce=C.x+Math.cos(Ue)*ke,We=C.y+Math.sin(Ue)*ke,A.lineTo(Ce,We),Ue+=R;else A.moveTo(Math.floor(C.x),Math.floor(C.y)),A.lineTo(Math.floor(C.wobbleX),Math.floor(P)),A.lineTo(Math.floor(j),Math.floor(te)),A.lineTo(Math.floor(se),Math.floor(C.wobbleY));return A.closePath(),A.fill(),C.tick<C.totalTicks}function V(A,C,ie,se,P){var j=C.slice(),te=A.getContext("2d"),Z,de,pe=u(function(Ae){function ge(){Z=de=null,te.clearRect(0,0,se.width,se.height),h.clear(),P(),Ae()}function be(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=A.width=r.width,se.height=A.height=r.height),!se.width&&!se.height&&(ie(A),se.width=A.width,se.height=A.height),te.clearRect(0,0,se.width,se.height),j=j.filter(function(I){return F(te,I)}),j.length?Z=f.frame(be):ge()}Z=f.frame(be),de=ge});return{addFettis:function(Ae){return j=j.concat(Ae),pe},canvas:A,promise:pe,reset:function(){Z&&f.cancel(Z),de&&de()}}}function q(A,C){var ie=!A,se=!!m(C||{},"resize"),P=!1,j=m(C,"disableForReducedMotion",Boolean),te=s&&!!m(C||{},"useWorker"),Z=te?p():null,de=ie?T:D,pe=A&&Z?!!A.__confetti_initialized:!1,Ae=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ge;function be(Ue,ke,ze){for(var Ce=m(Ue,"particleCount",d),We=m(Ue,"angle",Number),Pe=m(Ue,"spread",Number),R=m(Ue,"startVelocity",Number),E=m(Ue,"decay",Number),G=m(Ue,"gravity",Number),re=m(Ue,"drift",Number),ne=m(Ue,"colors",M),J=m(Ue,"ticks",Number),Ee=m(Ue,"shapes"),he=m(Ue,"scalar"),_e=!!m(Ue,"flat"),He=N(Ue),oe=Ce,xe=[],De=A.width*He.x,Ie=A.height*He.y;oe--;)xe.push(w({x:De,y:Ie,angle:We,spread:Pe,startVelocity:R,color:ne[oe%ne.length],shape:Ee[x(0,Ee.length)],ticks:J,decay:E,gravity:G,drift:re,scalar:he,flat:_e}));return ge?ge.addFettis(xe):(ge=V(A,xe,de,ke,ze),ge.promise)}function I(Ue){var ke=j||m(Ue,"disableForReducedMotion",Boolean),ze=m(Ue,"zIndex",Number);if(ke&&Ae)return u(function(R){R()});ie&&ge?A=ge.canvas:ie&&!A&&(A=W(ze),document.body.appendChild(A)),se&&!pe&&de(A);var Ce={width:A.width,height:A.height};Z&&!pe&&Z.init(A),pe=!0,Z&&(A.__confetti_initialized=!0);function We(){if(Z){var R={getBoundingClientRect:function(){if(!ie)return A.getBoundingClientRect()}};de(R),Z.postMessage({resize:{width:R.width,height:R.height}});return}Ce.width=Ce.height=null}function Pe(){ge=null,se&&(P=!1,e.removeEventListener("resize",We)),ie&&A&&(document.body.contains(A)&&document.body.removeChild(A),A=null,pe=!1)}return se&&!P&&(P=!0,e.addEventListener("resize",We,!1)),Z?Z.fire(Ue,Ce,Pe):be(Ue,Ce,Pe)}return I.reset=function(){Z&&Z.reset(),ge&&ge.reset()},I}var K;function H(){return K||(K=q(null,{useWorker:!0,resize:!0})),K}function Q(A,C,ie,se,P,j,te){var Z=new Path2D(A),de=new Path2D;de.addPath(Z,new DOMMatrix(C));var pe=new Path2D;return pe.addPath(de,new DOMMatrix([Math.cos(te)*P,Math.sin(te)*P,-Math.sin(te)*j,Math.cos(te)*j,ie,se])),pe}function U(A){if(!a)throw new Error("path confetti are not supported in this browser");var C,ie;typeof A=="string"?C=A:(C=A.path,ie=A.matrix);var se=new Path2D(C),P=document.createElement("canvas"),j=P.getContext("2d");if(!ie){for(var te=1e3,Z=te,de=te,pe=0,Ae=0,ge,be,I=0;I<te;I+=2)for(var Ue=0;Ue<te;Ue+=2)j.isPointInPath(se,I,Ue,"nonzero")&&(Z=Math.min(Z,I),de=Math.min(de,Ue),pe=Math.max(pe,I),Ae=Math.max(Ae,Ue));ge=pe-Z,be=Ae-de;var ke=10,ze=Math.min(ke/ge,ke/be);ie=[ze,0,0,ze,-Math.round(ge/2+Z)*ze,-Math.round(be/2+de)*ze]}return{type:"path",path:C,matrix:ie}}function ee(A){var C,ie=1,se="#000000",P='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof A=="string"?C=A:(C=A.text,ie="scalar"in A?A.scalar:ie,P="fontFamily"in A?A.fontFamily:P,se="color"in A?A.color:se);var j=10*ie,te=""+j+"px "+P,Z=new OffscreenCanvas(j,j),de=Z.getContext("2d");de.font=te;var pe=de.measureText(C),Ae=Math.ceil(pe.actualBoundingBoxRight+pe.actualBoundingBoxLeft),ge=Math.ceil(pe.actualBoundingBoxAscent+pe.actualBoundingBoxDescent),be=2,I=pe.actualBoundingBoxLeft+be,Ue=pe.actualBoundingBoxAscent+be;Ae+=be+be,ge+=be+be,Z=new OffscreenCanvas(Ae,ge),de=Z.getContext("2d"),de.font=te,de.fillStyle=se,de.fillText(C,I,Ue);var ke=1/ie;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[ke,0,0,ke,-Ae*ke/2,-ge*ke/2]}}n.exports=function(){return H().apply(this,arguments)},n.exports.reset=function(){H().reset()},n.exports.create=q,n.exports.shapeFromPath=U,n.exports.shapeFromText=ee})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),of,!1);const jT=of.exports;of.exports.create;const hv=[{id:1,name:"Bengaluru",state:"Karnataka",active:!0,hubs:[{id:101,name:"Kempegowda Intl Airport (BLR)",address:"Terminal 1 & 2 Mobility Zone",landmark:"Near Arrival Gate 4",hubType:"AIRPORT"},{id:102,name:"Indiranagar Hub",address:"100 Feet Road, 12th Main",landmark:"Opposite Toit Brewery",hubType:"CITY_CENTER"},{id:103,name:"Koramangala Hub",address:"80 Feet Road, 4th Block",landmark:"Near Sony World Signal",hubType:"CITY_CENTER"},{id:104,name:"Whitefield IT Hub",address:"ITPL Main Road",landmark:"Next to Nexus Shantiniketan",hubType:"TECH_PARK"}]},{id:2,name:"Hyderabad",state:"Telangana",active:!0,hubs:[{id:201,name:"Rajiv Gandhi Intl Airport (HYD)",address:"Shamshabad Aeroplaza",landmark:"Arrival Bay 3",hubType:"AIRPORT"},{id:202,name:"Hitech City Hub",address:"Cyber Towers Outer Ring",landmark:"Near Shilparamam Metro",hubType:"TECH_PARK"},{id:203,name:"Gachibowli Hub",address:"Financial District Main Circle",landmark:"Near DLF Cyber City",hubType:"TECH_PARK"},{id:204,name:"Jubilee Hills Hub",address:"Road No 36",landmark:"Metro Pillar 140",hubType:"CITY_CENTER"}]},{id:3,name:"Mumbai",state:"Maharashtra",active:!0,hubs:[{id:301,name:"Chhatrapati Shivaji Intl Airport (BOM)",address:"Terminal 2 Ground Transportation",landmark:"P4 Parking Level",hubType:"AIRPORT"},{id:302,name:"Bandra Kurla Complex (BKC)",address:"G Block, BKC",landmark:"Near Jio World Drive",hubType:"TECH_PARK"},{id:303,name:"South Mumbai Hub",address:"Nariman Point Marine Drive",landmark:"Opposite Air India Bldg",hubType:"CITY_CENTER"}]},{id:4,name:"Delhi NCR",state:"Delhi",active:!0,hubs:[{id:401,name:"Indira Gandhi Intl Airport (DEL)",address:"Terminal 3 Multi-Level Hub",landmark:"P3 Car Park",hubType:"AIRPORT"},{id:402,name:"Cyber Hub Gurugram",address:"DLF Cyber City Phase 2",landmark:"Near Rapid Metro",hubType:"TECH_PARK"},{id:403,name:"Connaught Place Hub",address:"Inner Circle Block E",landmark:"Near Rajiv Chowk Metro",hubType:"CITY_CENTER"}]},{id:5,name:"Chennai",state:"Tamil Nadu",active:!0,hubs:[{id:501,name:"Chennai Intl Airport (MAA)",address:"Meenambakkam Terminal 2",landmark:"Aerohub Level 1",hubType:"AIRPORT"},{id:502,name:"T. Nagar Hub",address:"GN Chetty Road",landmark:"Opposite Panagal Park",hubType:"CITY_CENTER"},{id:503,name:"OMR IT Corridor",address:"Thoraipakkam Toll Gate",landmark:"Near Ascendas IT Park",hubType:"TECH_PARK"}]},{id:6,name:"Goa",state:"Goa",active:!0,hubs:[{id:601,name:"Manohar Intl Airport Mopa (GOX)",address:"North Goa Terminal",landmark:"Pickup Zone A",hubType:"AIRPORT"},{id:602,name:"Dabolim Airport (GOI)",address:"South Goa Terminal",landmark:"Arrival Exit 2",hubType:"AIRPORT"},{id:603,name:"Calangute Beach Hub",address:"Tito's Lane Junction",landmark:"Near St. Anthony Chapel",hubType:"CITY_CENTER"},{id:604,name:"Panaji Waterfront Hub",address:"Miramar Circle",landmark:"Near Dayanand Bandodkar Marg",hubType:"CITY_CENTER"}]},{id:7,name:"Pune",state:"Maharashtra",active:!0,hubs:[{id:701,name:"Pune Airport (PNQ)",address:"Lohegaon Terminal",landmark:"Arrival Bay 2",hubType:"AIRPORT"},{id:702,name:"Hinjawadi IT Hub",address:"Phase 1 Circle",landmark:"Next to Infosys Gate 1",hubType:"TECH_PARK"},{id:703,name:"Koregaon Park Hub",address:"North Main Road",landmark:"Lane 5 Corner",hubType:"CITY_CENTER"}]},{id:8,name:"Jaipur",state:"Rajasthan",active:!0,hubs:[{id:801,name:"Jaipur Intl Airport (JAI)",address:"Terminal 2 Pickups",landmark:"Gate 3",hubType:"AIRPORT"},{id:802,name:"MI Road Hub",address:"Panch Batti Circle",landmark:"Near Raj Mandir",hubType:"CITY_CENTER"}]}],ra=[{id:1,name:"Royal Enfield Classic 350",brand:"Royal Enfield",model:"Reborn Stealth Black",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349cc J-Series",maxSpeed:115,zeroToHundred:12.5,pricePerHour:119,pricePerDay:999,pricePerMonth:18999,securityDeposit:2e3,mileageOrRange:"38 km/l",rating:4.94,tripsCompleted:342,imageUrl:"https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80",colorHex:"#1C1C1E",available:!0,features:"Dual Channel ABS,Thumping Exhaust,Comfort Touring Seats,Digi-Analog Console,Complimentary Helmets",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:2,name:"Royal Enfield Hunter 350",brand:"Royal Enfield",model:"Rebel Blue/Black",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"349cc Single Cylinder",maxSpeed:114,zeroToHundred:11.8,pricePerHour:99,pricePerDay:849,pricePerMonth:16999,securityDeposit:1500,mileageOrRange:"36 km/l",rating:4.88,tripsCompleted:418,imageUrl:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Agile City Geometry,Dual Disc ABS,Lightweight Chassis,USB Fast Charger,Dual Helmets Included",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:3,name:"KTM Duke 390",brand:"KTM",model:"Gen-3 Electronic Orange",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"399cc Liquid Cooled (45 HP)",maxSpeed:167,zeroToHundred:5.4,pricePerHour:149,pricePerDay:1299,pricePerMonth:24999,securityDeposit:3e3,mileageOrRange:"28 km/l",rating:4.96,tripsCompleted:289,imageUrl:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&auto=format&fit=crop&q=80",colorHex:"#FF6600",available:!0,features:"Quickshifter+,Launch Control,Cornering ABS,TFT Display with Bluetooth,Track Mode",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:4,name:"Yamaha MT-15 V2",brand:"Yamaha",model:"Cyber Green Deluxe",vehicleType:"BIKE",fuelType:"PETROL",transmission:"MANUAL",seats:2,engineOrBattery:"155cc VVA Liquid Cooled",maxSpeed:130,zeroToHundred:8.2,pricePerHour:89,pricePerDay:749,pricePerMonth:14999,securityDeposit:1500,mileageOrRange:"45 km/l",rating:4.91,tripsCompleted:520,imageUrl:"https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Upside Down USD Forks,Traction Control System,Assist & Slipper Clutch,Y-Connect Bluetooth",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:5,name:"Honda Activa 6G",brand:"Honda",model:"Smart Pearl Siren Blue",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"109.5cc PGM-FI HET",maxSpeed:85,zeroToHundred:14.8,pricePerHour:49,pricePerDay:399,pricePerMonth:7999,securityDeposit:1e3,mileageOrRange:"50 km/l",rating:4.85,tripsCompleted:890,imageUrl:"https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800&auto=format&fit=crop&q=80",colorHex:"#D4AF37",available:!0,features:"Smart Keyless Start,Silent Start ACG,External Fuel Cap,Telescopic Suspension,Underseat Storage",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:6,name:"TVS Jupiter 125",brand:"TVS",model:"SmartXonnect Disc",vehicleType:"SCOOTER",fuelType:"PETROL",transmission:"AUTOMATIC",seats:2,engineOrBattery:"124.8cc ETFi Engine",maxSpeed:92,zeroToHundred:13.5,pricePerHour:55,pricePerDay:449,pricePerMonth:8999,securityDeposit:1e3,mileageOrRange:"48 km/l",rating:4.87,tripsCompleted:640,imageUrl:"https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Huge 33L Twin Helmet Boot,Front Fuel Filling,Voice Assist Navigation,USB Mobile Charger",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:7,name:"Ola S1 Pro Gen 2",brand:"Ola Electric",model:"Midnight Blue Flagship",vehicleType:"ELECTRIC_BIKE",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:2,engineOrBattery:"4.0 kWh Battery (11 kW Motor)",maxSpeed:120,zeroToHundred:6.7,pricePerHour:69,pricePerDay:549,pricePerMonth:10999,securityDeposit:1500,mileageOrRange:"195 km/charge",rating:4.89,tripsCompleted:720,imageUrl:"https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Hyper Mode 0-40 in 2.6s,Touchscreen Navigation,Built-in Stereo Speakers,Cruise Control,Reverse Mode",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:8,name:"Ather 450X Gen 3",brand:"Ather Energy",model:"Space Grey Warp",vehicleType:"ELECTRIC_BIKE",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:2,engineOrBattery:"3.7 kWh IP67 Battery (6.4 kW)",maxSpeed:90,zeroToHundred:7.5,pricePerHour:75,pricePerDay:599,pricePerMonth:11999,securityDeposit:1500,mileageOrRange:"150 km/charge",rating:4.95,tripsCompleted:560,imageUrl:"https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&auto=format&fit=crop&q=80",colorHex:"#D4AF37",available:!0,features:"Warp Mode,Google Maps Live Dashboard,AutoHold Hill Assist,TrueRange Indicator,Ather Grid Fast Charging",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:9,name:"Ultraviolette F77 Mach 2",brand:"Ultraviolette",model:"Recon Plasma Red",vehicleType:"ELECTRIC_BIKE",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:2,engineOrBattery:"10.3 kWh Battery (40.2 HP)",maxSpeed:155,zeroToHundred:2.8,pricePerHour:229,pricePerDay:1999,pricePerMonth:38999,securityDeposit:4e3,mileageOrRange:"323 km/charge",rating:4.98,tripsCompleted:140,imageUrl:"https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&auto=format&fit=crop&q=80",colorHex:"#FF2D55",available:!0,features:"India's Fastest Electric Superbike,Ballistic Mode,Regenerative 10-Level Braking,Violette A.I. Telemetry",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:10,name:"Maruti Suzuki Swift",brand:"Maruti Suzuki",model:"ZXi+ Dual Tone",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"MANUAL",seats:5,engineOrBattery:"1.2L Z-Series Dual VVT",maxSpeed:150,zeroToHundred:11.2,pricePerHour:129,pricePerDay:1299,pricePerMonth:23999,securityDeposit:3e3,mileageOrRange:"24.8 km/l",rating:4.88,tripsCompleted:780,imageUrl:"https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Wireless Apple CarPlay & Android Auto,6 Airbags Standard,Fastag Enabled,Keyless Entry,Push Button Start",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:11,name:"Hyundai Creta SX Petrol",brand:"Hyundai",model:"Knight Edition Black",vehicleType:"PETROL_CAR",fuelType:"PETROL",transmission:"AUTOMATIC",seats:5,engineOrBattery:"1.5L Smartstream MPi",maxSpeed:170,zeroToHundred:10.5,pricePerHour:219,pricePerDay:2199,pricePerMonth:39999,securityDeposit:5e3,mileageOrRange:"17.4 km/l",rating:4.93,tripsCompleted:610,imageUrl:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",colorHex:"#141416",available:!0,features:"Panoramic Sunroof,Bose Premium 8-Speaker Audio,Ventilated Seats,Level 2 ADAS,Wireless Phone Charger",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:12,name:"Mahindra Thar 4x4 Diesel",brand:"Mahindra",model:"LX Hard Top Diesel AT",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"AUTOMATIC",seats:4,engineOrBattery:"2.2L mHawk Diesel (130 BHP)",maxSpeed:155,zeroToHundred:10.2,pricePerHour:279,pricePerDay:2699,pricePerMonth:49999,securityDeposit:6e3,mileageOrRange:"15.2 km/l",rating:4.97,tripsCompleted:840,imageUrl:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=80",colorHex:"#D4AF37",available:!0,features:"Authentic Shift-on-the-fly 4x4 Low/High,Mechanical Locking Differential,Drizzle Washable Interior,Adventure Monitor",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:13,name:"Toyota Fortuner 4x4 Diesel",brand:"Toyota",model:"Legender 4x4 AT",vehicleType:"DIESEL_CAR",fuelType:"DIESEL",transmission:"AUTOMATIC",seats:7,engineOrBattery:"2.8L Turbo Diesel (201 BHP)",maxSpeed:180,zeroToHundred:9.8,pricePerHour:449,pricePerDay:4499,pricePerMonth:89999,securityDeposit:1e4,mileageOrRange:"14.4 km/l",rating:4.99,tripsCompleted:430,imageUrl:"https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",colorHex:"#FFFFFF",available:!0,features:"King of the Highway,7-Seater Luxury,Sequential LED Headlamps,Downhill Assist Control DAC,JBL 11-Speaker Audio",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"},{id:14,name:"Tata Nexon EV Max",brand:"Tata Motors",model:"Empowered+ Long Range",vehicleType:"ELECTRIC_CAR",fuelType:"ELECTRIC",transmission:"AUTOMATIC",seats:5,engineOrBattery:"40.5 kWh High Density Battery",maxSpeed:140,zeroToHundred:8.9,pricePerHour:229,pricePerDay:2199,pricePerMonth:41999,securityDeposit:5e3,mileageOrRange:"453 km/charge",rating:4.94,tripsCompleted:512,imageUrl:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=80",colorHex:"#00E5C7",available:!0,features:"Zero Emission City & Highway,12.3-inch Cinematic Display,V2V & V2L Power Sharing,Paddle Multi-Mode Regen",cityNames:"Bengaluru,Hyderabad,Mumbai,Delhi NCR,Chennai,Goa,Pune,Jaipur"}],Js="/api",Pl={async getCities(){try{const t=await fetch(`${Js}/locations/cities`);if(t.ok)return await t.json()}catch{}return hv},async getVehicles(t,e,n){try{const i=new URLSearchParams;t&&t!=="ALL"&&i.append("city",t),e&&e!=="ALL"&&i.append("type",e),n&&n!=="ALL"&&i.append("fuel",n);const r=await fetch(`${Js}/vehicles?${i.toString()}`);if(r.ok){const s=await r.json();if(Array.isArray(s)&&s.length>0)return s}}catch{}return ra.filter(i=>!(t&&t!=="ALL"&&!i.cityNames.toLowerCase().includes(t.toLowerCase())||e&&e!=="ALL"&&i.vehicleType!==e||n&&n!=="ALL"&&i.fuelType!==n))},async getVehicleById(t){try{const e=await fetch(`${Js}/vehicles/${t}`);if(e.ok)return await e.json()}catch{}return ra.find(e=>e.id===t)},async createBooking(t){var f;try{const p=await fetch(`${Js}/bookings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(p.ok)return await p.json()}catch{}const e=ra.find(p=>p.id===t.vehicleId)||ra[0],n=t.duration||4,i=t.rentalMode||"HOURLY";let r=e.pricePerHour*n;i==="DAILY"&&(r=e.pricePerDay*n),i==="MONTHLY"&&(r=e.pricePerMonth*n);const s=e.vehicleType.includes("CAR")?299:99,a=Math.round((r+s)*.18),o=r+s+a+e.securityDeposit,l=`TBH-${((f=t.pickupCity)==null?void 0:f.substring(0,3).toUpperCase())||"BLR"}-${Math.floor(1e3+Math.random()*9e3)}`,u={id:Date.now(),bookingReference:l,vehicle:e,pickupCity:t.pickupCity||"Bengaluru",pickupHub:t.pickupHub||"Kempegowda Intl Airport (BLR)",dropHub:t.dropHub||t.pickupHub||"Kempegowda Intl Airport (BLR)",pickupDateTime:new Date().toISOString(),dropDateTime:new Date(Date.now()+n*3600*1e3).toISOString(),rentalMode:i,duration:n,baseAmount:r,insuranceAmount:s,taxAmount:a,depositAmount:e.securityDeposit,totalAmount:o,status:"CONFIRMED",paymentStatus:"PAID",paymentMethod:t.paymentMethod||"UPI - GPay",unlockPin:`${Math.floor(1e3+Math.random()*9e3)}`,createdAt:new Date().toISOString()},h=JSON.parse(localStorage.getItem("tbh_bookings")||"[]");return localStorage.setItem("tbh_bookings",JSON.stringify([u,...h])),u},async getMyBookings(t){try{const e=await fetch(`${Js}/bookings/my/${t}`);if(e.ok)return await e.json()}catch{}return JSON.parse(localStorage.getItem("tbh_bookings")||"[]")}},VT=({vehicle:t,cities:e,selectedCity:n,onClose:i,onBookingSuccess:r})=>{var U,ee;const{user:s,isAuthenticated:a}=Zl(),o=e.find(A=>A.name===n)||e[0],l=o?o.hubs:[],[u,h]=ce.useState(((U=l[0])==null?void 0:U.name)||"Kempegowda Intl Airport (BLR)"),[f,p]=ce.useState(((ee=l[0])==null?void 0:ee.name)||"Kempegowda Intl Airport (BLR)"),[g,v]=ce.useState("HOURLY"),[y,m]=ce.useState(g==="HOURLY"?6:g==="DAILY"?2:1),[d,x]=ce.useState(!0),[_,M]=ce.useState((t==null?void 0:t.vehicleType.includes("CAR"))||!1),[L,N]=ce.useState("UPI"),[T,D]=ce.useState(!1);if(!t)return null;const W=t.vehicleType.includes("CAR");let S=0;g==="HOURLY"?S=t.pricePerHour*y:g==="DAILY"?S=t.pricePerDay*y:S=t.pricePerMonth*y;const w=W?299:99,F=d?W?250:120:0,V=_?200:0,q=S+w+F+V,K=Math.round(q*.18),H=q+K+t.securityDeposit,Q=async A=>{A.preventDefault(),D(!0);try{const C={userId:(s==null?void 0:s.id)||1,vehicleId:t.id,pickupCity:n,pickupHub:u,dropHub:f,rentalMode:g,duration:y,includeZeroDep:d,includeFastag:_,paymentMethod:L==="UPI"?"UPI - GPay / PhonePe":"Card - Razorpay"},ie=await Pl.createBooking(C);jT({particleCount:80,spread:70,origin:{y:.6}}),D(!1),r(ie)}catch{D(!1)}};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-2xl max-h-[92vh] bg-[#141416] border border-white/15 rounded-3xl overflow-y-auto shadow-2xl flex flex-col justify-between",children:[c.jsxs("div",{className:"sticky top-0 z-10 bg-[#141416]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7] font-bold",children:"TBH"}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-base font-extrabold text-white font-display",children:"Instant Reservation"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Locked with Razorpay Secure Gateway"})]})]}),c.jsx("button",{onClick:i,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"flex items-center space-x-4 p-3.5 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("img",{src:t.imageUrl,alt:t.name,className:"w-20 h-16 object-cover rounded-xl border border-white/10"}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("span",{className:"text-[10px] font-bold text-[#00E5C7] uppercase",children:t.brand}),c.jsx("h4",{className:"text-sm font-bold text-white truncate",children:t.name}),c.jsxs("p",{className:"text-xs text-slate-400",children:[t.model," • ",t.fuelType," • ",t.maxSpeed," km/h"]})]}),c.jsxs("div",{className:"text-right",children:[c.jsxs("span",{className:"text-sm font-extrabold font-display text-white",children:["₹",t.pricePerHour]}),c.jsx("span",{className:"text-[10px] text-slate-400",children:"/hr"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2",children:"Rental Duration Mode"}),c.jsx("div",{className:"grid grid-cols-3 gap-2",children:["HOURLY","DAILY","MONTHLY"].map(A=>c.jsx("button",{type:"button",onClick:()=>{v(A),m(A==="HOURLY"?6:A==="DAILY"?2:1)},className:`py-2.5 rounded-xl border text-xs font-bold transition ${g===A?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7] glow-teal":"bg-[#0A0A0B] border-white/10 text-slate-400 hover:text-white"}`,children:A},A))}),c.jsxs("div",{className:"mt-3 p-3 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between",children:[c.jsxs("span",{className:"text-xs font-semibold text-slate-300",children:["Duration: ",c.jsxs("strong",{className:"text-[#00E5C7] font-mono text-sm",children:[y," ",g.toLowerCase(),y>1?"s":""]})]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{type:"button",onClick:()=>m(Math.max(1,y-1)),className:"w-7 h-7 rounded-lg bg-white/10 text-white font-bold flex items-center justify-center hover:bg-white/20",children:"-"}),c.jsx("button",{type:"button",onClick:()=>m(y+1),className:"w-7 h-7 rounded-lg bg-[#00E5C7] text-black font-bold flex items-center justify-center hover:opacity-90",children:"+"})]})]})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsxs("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1",children:["Pickup Hub (",n,")"]}),c.jsx("select",{value:u,onChange:A=>h(A.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:l.map(A=>c.jsx("option",{value:A.name,children:A.name},A.id))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1",children:"Drop-off Hub"}),c.jsx("select",{value:f,onChange:A=>p(A.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white font-medium focus:outline-none focus:border-[#00E5C7]",children:l.map(A=>c.jsx("option",{value:A.name,children:A.name},A.id))})]})]}),c.jsxs("div",{className:"space-y-2",children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300",children:"Protection & Add-ons"}),c.jsxs("div",{onClick:()=>x(!d),className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-between cursor-pointer hover:border-[#00E5C7]/40 transition",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx(Ar,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"Zero Depreciation Damage Waiver"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Zero liability for accidental scratches or minor dents"})]})]}),c.jsx("span",{className:"text-xs font-bold text-[#00E5C7]",children:d?`+₹${W?250:120}`:"Add"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx($l,{className:"w-4 h-4 text-emerald-400"}),c.jsxs("div",{children:[c.jsx("p",{className:"text-xs font-bold text-white",children:"Complimentary Helmets & 24/7 Roadside SOS"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"2 sanitized ISI helmets included with every bike"})]})]}),c.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"FREE"})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 space-y-2",children:[c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsxs("span",{children:["Base Rent (",y," ",g.toLowerCase(),")"]}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",S.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsx("span",{children:"Comprehensive Insurance"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",w]})]}),d&&c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsx("span",{children:"Zero-Dep Damage Protection"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",F]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-300",children:[c.jsx("span",{children:"GST (18% Indian Tax)"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",K.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between text-xs text-slate-400 border-b border-white/10 pb-2",children:[c.jsx("span",{children:"Refundable Security Deposit (Returned on drop)"}),c.jsxs("span",{className:"font-mono text-white font-semibold",children:["₹",t.securityDeposit.toLocaleString("en-IN")]})]}),c.jsxs("div",{className:"flex justify-between items-baseline pt-1",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-sm font-extrabold text-white",children:"Total Payable Amount"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Includes 100% refundable deposit"})]}),c.jsxs("span",{className:"text-2xl font-extrabold font-display text-[#00E5C7]",children:["₹",H.toLocaleString("en-IN")]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2",children:"Payment Method (Razorpay India)"}),c.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[c.jsxs("button",{type:"button",onClick:()=>N("UPI"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${L==="UPI"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(v1,{className:"w-4 h-4"}),c.jsx("span",{children:"UPI / QR"})]}),c.jsxs("button",{type:"button",onClick:()=>N("CARD"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${L==="CARD"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(s1,{className:"w-4 h-4"}),c.jsx("span",{children:"Card"})]}),c.jsxs("button",{type:"button",onClick:()=>N("NETBANKING"),className:`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1 transition ${L==="NETBANKING"?"bg-[#00E5C7]/15 border-[#00E5C7] text-[#00E5C7]":"bg-[#0A0A0B] border-white/10 text-slate-400"}`,children:[c.jsx(mx,{className:"w-4 h-4"}),c.jsx("span",{children:"NetBanking"})]})]})]})]}),c.jsx("div",{className:"sticky bottom-0 bg-[#141416]/95 backdrop-blur-md px-6 py-4 border-t border-white/10",children:c.jsx("button",{onClick:Q,disabled:T,className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00E5C7] via-[#00DFBD] to-[#00C4A7] text-black font-extrabold text-sm shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:T?c.jsx("span",{children:"Confirming Reservation..."}):c.jsxs(c.Fragment,{children:[c.jsx(Kl,{className:"w-4 h-4"}),c.jsxs("span",{children:["Pay ₹",H.toLocaleString("en-IN")," & Generate Rental Pass"]}),c.jsx(ql,{className:"w-4 h-4"})]})})})]})})},GT=({booking:t,onClose:e})=>t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-xl bg-[#141416] border border-[#00E5C7]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col",children:[c.jsxs("div",{className:"bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] p-5 text-black flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx($l,{className:"w-6 h-6 stroke-[2.5]"}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-lg leading-tight",children:"Rental Confirmed!"}),c.jsx("p",{className:"text-xs font-semibold opacity-90",children:"Digital Boarding Pass & Keyless Voucher"})]})]}),c.jsx("button",{onClick:e,className:"p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-black transition",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 space-y-6",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] uppercase font-bold tracking-widest text-slate-400",children:"Booking Reference"}),c.jsx("p",{className:"text-xl font-extrabold font-mono text-[#00E5C7]",children:t.bookingReference}),c.jsxs("p",{className:"text-xs text-slate-300 mt-1",children:[t.vehicle.name," (",t.vehicle.model,")"]})]}),c.jsxs("div",{className:"flex flex-col items-center p-2 rounded-xl bg-white text-black shadow-lg",children:[c.jsx(mx,{className:"w-20 h-20 text-black"}),c.jsx("span",{className:"text-[9px] font-mono font-bold tracking-wider mt-0.5",children:"HUB-SCAN-PASS"})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-gradient-to-r from-[#141416] via-[#1C1C22] to-[#141416] border border-[#D4AF37]/50 flex items-center justify-between shadow-gold-glow",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]",children:c.jsx(u1,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("p",{className:"text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]",children:"Vehicle Smart Unlock PIN"}),c.jsx("p",{className:"text-xs text-slate-300",children:"Enter on smart console or show hub agent"})]})]}),c.jsx("span",{className:"text-2xl font-mono font-black text-white tracking-widest bg-black/60 px-3 py-1.5 rounded-xl border border-white/10",children:t.unlockPin})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(La,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Pickup Hub"})]}),c.jsx("p",{className:"font-bold text-white mt-1",children:t.pickupHub}),c.jsx("p",{className:"text-[10px] text-slate-400",children:t.pickupCity})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(La,{className:"w-3 h-3 text-[#D4AF37]"}),c.jsx("span",{children:"Drop Hub"})]}),c.jsx("p",{className:"font-bold text-white mt-1",children:t.dropHub}),c.jsx("p",{className:"text-[10px] text-slate-400",children:t.pickupCity})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(qg,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsx("span",{children:"Duration"})]}),c.jsxs("p",{className:"font-bold text-white mt-1",children:[t.duration," ",t.rentalMode.toLowerCase()]})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5",children:[c.jsxs("p",{className:"text-[10px] text-slate-400 flex items-center space-x-1",children:[c.jsx(Ar,{className:"w-3 h-3 text-emerald-400"}),c.jsx("span",{children:"Paid Total"})]}),c.jsxs("p",{className:"font-bold text-[#00E5C7] mt-1",children:["₹",t.totalAmount.toLocaleString("en-IN")]})]})]}),c.jsxs("div",{className:"flex items-center space-x-3 pt-2",children:[c.jsxs("button",{onClick:()=>window.print(),className:"flex-1 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold text-xs flex items-center justify-center space-x-2 transition",children:[c.jsx(a1,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{children:"Print / Save Voucher"})]}),c.jsx("button",{onClick:e,className:"flex-1 py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:"Done & View Fleet"})]})]})]})}):null,WT=({vehicles:t,onRemove:e,onClose:n,onBook:i})=>t.length===0?null:c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-5xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-lg text-white",children:"Side-by-Side Fleet Comparison"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Compare specs, velocity, mileage, and rates in INR"})]}),c.jsx("button",{onClick:n,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"p-6 overflow-x-auto flex-1",children:c.jsxs("div",{className:"grid grid-cols-3 sm:grid-cols-4 gap-4 min-w-[640px]",children:[c.jsxs("div",{className:"space-y-6 pt-24 text-xs font-semibold text-slate-400 border-r border-white/10 pr-3",children:[c.jsx("div",{className:"h-6 flex items-center",children:"Category"}),c.jsx("div",{className:"h-6 flex items-center",children:"Powertrain"}),c.jsx("div",{className:"h-6 flex items-center",children:"Fuel Type"}),c.jsx("div",{className:"h-6 flex items-center",children:"Top Speed"}),c.jsx("div",{className:"h-6 flex items-center",children:"0-100 Acceleration"}),c.jsx("div",{className:"h-6 flex items-center",children:"Mileage / Range"}),c.jsx("div",{className:"h-6 flex items-center",children:"Hourly Rent"}),c.jsx("div",{className:"h-6 flex items-center",children:"Daily Rent"}),c.jsx("div",{className:"h-6 flex items-center",children:"Security Deposit"}),c.jsx("div",{className:"h-6 flex items-center",children:"Included Helmets"})]}),t.map(r=>c.jsxs("div",{className:"p-3 rounded-2xl bg-[#0A0A0B] border border-white/10 relative flex flex-col justify-between",children:[c.jsx("button",{onClick:()=>e(r.id),className:"absolute top-2 right-2 w-6 h-6 rounded-full bg-white/10 text-slate-400 hover:text-white flex items-center justify-center text-xs",children:c.jsx(Zn,{className:"w-3.5 h-3.5"})}),c.jsxs("div",{children:[c.jsx("img",{src:r.imageUrl,alt:r.name,className:"w-full h-24 object-cover rounded-xl mb-2"}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] font-bold uppercase",children:r.brand}),c.jsx("h4",{className:"text-sm font-bold text-white leading-tight truncate",children:r.name}),c.jsxs("div",{className:"space-y-6 pt-4 text-xs font-bold text-white",children:[c.jsx("div",{className:"h-6 flex items-center text-slate-300",children:r.vehicleType.replace("_"," ")}),c.jsx("div",{className:"h-6 flex items-center text-slate-300 truncate",children:r.engineOrBattery}),c.jsx("div",{className:"h-6 flex items-center text-emerald-400",children:r.fuelType}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#00E5C7]",children:[r.maxSpeed," km/h"]}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#D4AF37]",children:[r.zeroToHundred,"s"]}),c.jsx("div",{className:"h-6 flex items-center text-slate-300",children:r.mileageOrRange}),c.jsxs("div",{className:"h-6 flex items-center font-mono",children:["₹",r.pricePerHour,"/hr"]}),c.jsxs("div",{className:"h-6 flex items-center font-mono text-[#00E5C7]",children:["₹",r.pricePerDay,"/day"]}),c.jsxs("div",{className:"h-6 flex items-center text-slate-400 font-mono",children:["₹",r.securityDeposit]}),c.jsx("div",{className:"h-6 flex items-center text-emerald-400",children:"Yes (ISI 2x)"})]})]}),c.jsx("button",{onClick:()=>{n(),i(r)},className:"w-full mt-4 py-2 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:"Book Ride"})]},r.id))]})})]})}),XT=({isOpen:t,onClose:e})=>{const{user:n,isAuthenticated:i,loginWithEmail:r,signupWithEmail:s,sendOtp:a,verifyOtp:o,verifyLicense:l,loginAsDemoRider:u,logout:h}=Zl(),[f,p]=ce.useState("PHONE_OTP"),[g,v]=ce.useState("9876543210"),[y,m]=ce.useState(!1),[d,x]=ce.useState(""),[_,M]=ce.useState("rider@tbhrentals.in"),[L,N]=ce.useState("rider123"),[T,D]=ce.useState("Hemanth Kumar"),[W,S]=ce.useState((n==null?void 0:n.drivingLicenseNumber)||"KA-01-2023-0048192"),[w,F]=ce.useState(!1),[V,q]=ce.useState(!1),[K,H]=ce.useState(""),[Q,U]=ce.useState(!1);if(!t)return null;const ee=async se=>{if(se.preventDefault(),H(""),!g||g.length<10){H("Please enter a valid 10-digit Indian mobile number");return}U(!0);try{const P=await a(g);m(!0),x(P),U(!1)}catch{U(!1),H("Unable to dispatch OTP. Please check number.")}},A=async se=>{se.preventDefault(),H(""),U(!0);try{const P=await o(g,d);U(!1),P?p("LICENSE"):H("Invalid OTP code. Please enter 7829.")}catch{U(!1),H("OTP verification failed.")}},C=async se=>{se.preventDefault(),H(""),U(!0);try{if(f==="EMAIL_LOGIN"){const P=await r(_,L);U(!1),P&&e()}else{const P=await s(T,_,g,L);U(!1),P&&p("LICENSE")}}catch{U(!1),H("Authentication error.")}},ie=async se=>{se.preventDefault(),F(!0),setTimeout(async()=>{await l(W),F(!1),q(!0),setTimeout(()=>{e()},1200)},1e3)};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-md bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col",children:[c.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7] font-bold",children:"TBH"}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-base text-white",children:"Rider Authentication"}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"Secure Indian Identity Verification"})]})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),!n&&c.jsxs("div",{className:"grid grid-cols-2 gap-1 p-2 bg-[#0A0A0B] border-b border-white/10",children:[c.jsx("button",{onClick:()=>{p("PHONE_OTP"),H("")},className:`py-2 text-xs font-bold rounded-lg transition ${f==="PHONE_OTP"?"bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40":"text-slate-400 hover:text-white"}`,children:"Phone OTP (+91)"}),c.jsx("button",{onClick:()=>{p("EMAIL_LOGIN"),H("")},className:`py-2 text-xs font-bold rounded-lg transition ${f==="EMAIL_LOGIN"||f==="SIGNUP"?"bg-[#141416] text-[#00E5C7] border border-[#00E5C7]/40":"text-slate-400 hover:text-white"}`,children:"Email & Password"})]}),c.jsxs("div",{className:"p-6 space-y-5",children:[K&&c.jsx("div",{className:"p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs",children:K}),f==="PHONE_OTP"&&!n&&c.jsx("div",{children:y?c.jsxs("form",{onSubmit:A,className:"space-y-4",children:[c.jsxs("div",{className:"text-center pb-2",children:[c.jsxs("p",{className:"text-xs text-slate-300",children:["OTP code sent to ",c.jsxs("strong",{className:"text-white",children:["+91 ",g]})]}),c.jsxs("p",{className:"text-[11px] text-[#00E5C7] mt-0.5",children:["Test code generated: ",c.jsx("strong",{children:"7829"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Enter 4 or 6-digit OTP"}),c.jsx("input",{type:"text",value:d,onChange:se=>x(se.target.value),placeholder:"e.g. 7829",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-4 py-3 text-center text-lg font-mono font-bold tracking-widest text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsx("button",{type:"submit",disabled:Q,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:Q?"Verifying...":"Verify & Continue"})]}):c.jsxs("form",{onSubmit:ee,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5",children:"Mobile Number"}),c.jsxs("div",{className:"flex rounded-xl bg-[#0A0A0B] border border-white/10 focus-within:border-[#00E5C7] overflow-hidden",children:[c.jsx("span",{className:"px-3.5 py-3 text-xs font-bold text-slate-400 border-r border-white/10 flex items-center",children:"🇮🇳 +91"}),c.jsx("input",{type:"tel",value:g,onChange:se=>v(se.target.value),placeholder:"Enter 10-digit mobile",className:"w-full bg-transparent px-3 py-3 text-xs text-white focus:outline-none font-mono",required:!0})]})]}),c.jsxs("button",{type:"submit",disabled:Q,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition flex items-center justify-center space-x-2",children:[c.jsx("span",{children:Q?"Sending OTP...":"Send Verification OTP"}),c.jsx(ql,{className:"w-4 h-4"})]})]})}),(f==="EMAIL_LOGIN"||f==="SIGNUP")&&!n&&c.jsxs("form",{onSubmit:C,className:"space-y-4",children:[f==="SIGNUP"&&c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Full Legal Name"}),c.jsx("input",{type:"text",value:T,onChange:se=>D(se.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Email Address"}),c.jsx("input",{type:"email",value:_,onChange:se=>M(se.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Password"}),c.jsx("input",{type:"password",value:L,onChange:se=>N(se.target.value),className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsx("button",{type:"submit",disabled:Q,className:"w-full py-3 rounded-xl bg-[#00E5C7] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:f==="EMAIL_LOGIN"?"Login with Email":"Create Free TBH Account"}),c.jsx("div",{className:"text-center pt-1",children:c.jsx("button",{type:"button",onClick:()=>p(f==="EMAIL_LOGIN"?"SIGNUP":"EMAIL_LOGIN"),className:"text-xs text-slate-400 hover:text-[#00E5C7]",children:f==="EMAIL_LOGIN"?"Don't have an account? Sign Up":"Already registered? Login"})})]}),(f==="LICENSE"||n)&&c.jsxs("form",{onSubmit:ie,className:"space-y-4",children:[c.jsxs("div",{className:"p-3.5 rounded-2xl bg-[#0A0A0B] border border-[#00E5C7]/30 flex items-center space-x-3",children:[c.jsx(Ar,{className:"w-7 h-7 text-[#00E5C7]"}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-white",children:"Driving License & DigiLocker KYC"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"Required by Indian Motor Vehicles Act for self-drive"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1",children:"Driving License Number (DL)"}),c.jsx("input",{type:"text",value:W,onChange:se=>S(se.target.value.toUpperCase()),placeholder:"e.g. KA-01-2023-0048192",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono uppercase focus:outline-none focus:border-[#00E5C7]",required:!0})]}),c.jsxs("div",{className:"p-4 rounded-xl border-2 border-dashed border-white/15 hover:border-[#00E5C7]/50 text-center cursor-pointer bg-[#0A0A0B]/50 transition",children:[c.jsx(r1,{className:"w-8 h-8 text-[#00E5C7] mx-auto mb-1"}),c.jsx("p",{className:"text-xs font-bold text-white",children:"Upload DL Photo or Fetch via DigiLocker"}),c.jsx("p",{className:"text-[10px] text-slate-400",children:"JPG, PNG, PDF up to 5MB"})]}),V?c.jsxs("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center justify-center space-x-2",children:[c.jsx($l,{className:"w-4 h-4"}),c.jsx("span",{children:"License Verified Successfully!"})]}):c.jsx("button",{type:"submit",disabled:w,className:"w-full py-3 rounded-xl bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black font-extrabold text-xs shadow-teal-glow hover:opacity-95 transition",children:w?"Verifying with Parivahan Gov...":"Verify License & Complete KYC"})]}),c.jsx("div",{className:"pt-2 border-t border-white/10",children:c.jsxs("button",{type:"button",onClick:()=>{u(),e()},className:"w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-300 transition flex items-center justify-center space-x-2",children:[c.jsx(Kl,{className:"w-3.5 h-3.5 text-[#D4AF37]"}),c.jsx("span",{children:"One-Click Demo Rider Sign In"})]})})]})]})})},YT=({isOpen:t,onClose:e,onSelectBooking:n})=>{const{user:i}=Zl(),[r,s]=ce.useState([]),[a,o]=ce.useState(!0);ce.useEffect(()=>{t&&i&&l()},[t,i]);const l=async()=>{o(!0);const h=await Pl.getMyBookings((i==null?void 0:i.id)||1);s(h),o(!1)},u=h=>{if(confirm("Are you sure you want to cancel this booking? Refund of 100% deposit + 90% rental fee will be initiated.")){const f=r.map(p=>p.id===h?{...p,status:"CANCELLED",paymentStatus:"REFUNDED"}:p);s(f),localStorage.setItem("tbh_bookings",JSON.stringify(f))}};return t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-2xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[88vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#00E5C7]/15 border border-[#00E5C7]/40 flex items-center justify-center text-[#00E5C7]",children:c.jsx(Ml,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"font-extrabold font-display text-base text-white",children:"My Rental Passes"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Active keys & trip history"})]})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),c.jsx("div",{className:"p-6 overflow-y-auto space-y-4 flex-1",children:a?c.jsx("p",{className:"text-center text-xs text-slate-400 py-8",children:"Loading your bookings..."}):r.length===0?c.jsxs("div",{className:"text-center py-12",children:[c.jsx(Ml,{className:"w-12 h-12 text-slate-600 mx-auto mb-2"}),c.jsx("p",{className:"text-sm font-bold text-white",children:"No Active Reservations"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Book your dream machine from our fleet today."})]}):r.map(h=>c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("span",{className:"text-xs font-mono font-bold text-[#00E5C7]",children:h.bookingReference}),c.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${h.status==="CONFIRMED"?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30":"bg-rose-500/10 text-rose-400 border border-rose-500/30"}`,children:h.status})]}),c.jsx("h4",{className:"text-sm font-bold text-white",children:h.vehicle.name}),c.jsxs("p",{className:"text-xs text-slate-400 flex items-center space-x-1",children:[c.jsx(La,{className:"w-3 h-3 text-[#00E5C7]"}),c.jsxs("span",{children:[h.pickupHub," • ",h.duration," ",h.rentalMode.toLowerCase()]})]}),c.jsxs("p",{className:"text-xs font-mono text-white",children:["Unlock PIN: ",c.jsx("strong",{className:"text-[#D4AF37] font-bold text-sm",children:h.unlockPin})]})]}),c.jsxs("div",{className:"flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2",children:[c.jsxs("span",{className:"text-base font-extrabold font-display text-white",children:["₹",h.totalAmount.toLocaleString("en-IN")]}),c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx("button",{onClick:()=>n(h),className:"px-3 py-1.5 rounded-lg bg-[#00E5C7]/15 border border-[#00E5C7]/40 text-[#00E5C7] text-xs font-bold hover:bg-[#00E5C7] hover:text-black transition",children:"Digital Pass"}),h.status==="CONFIRMED"&&c.jsx("button",{onClick:()=>u(h.id),className:"px-2.5 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold hover:bg-rose-500/20 transition",children:"Cancel"})]})]})]},h.id))})]})}):null},qT=({isOpen:t,onClose:e,vehicles:n,onToggleAvailability:i})=>{if(!t)return null;const r=n.length,s=n.filter(o=>o.available).length;return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300",children:c.jsxs("div",{className:"relative w-full max-w-4xl bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]",children:[c.jsxs("div",{className:"p-5 border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-[#00E5C7]",children:"TBH Fleet Control"}),c.jsx("h3",{className:"font-extrabold font-display text-lg text-white",children:"Central Operations & Telemetry"})]}),c.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition",children:c.jsx(Zn,{className:"w-5 h-5"})})]}),c.jsxs("div",{className:"p-6 overflow-y-auto space-y-6 flex-1",children:[c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Total Fleet"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-white mt-1",children:r}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] mt-0.5",children:"Across 8 Indian States"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Live Available"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-emerald-400 mt-1",children:s}),c.jsxs("p",{className:"text-[10px] text-slate-400 mt-0.5",children:[r-s," on live trip"]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Month Revenue"}),c.jsxs("p",{className:"text-2xl font-extrabold font-display text-[#D4AF37] mt-1",children:["₹",284500 .toLocaleString("en-IN")]}),c.jsx("p",{className:"text-[10px] text-emerald-400 mt-0.5",children:"+24.8% vs last month"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-[#0A0A0B] border border-white/10",children:[c.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Fleet Health"}),c.jsx("p",{className:"text-2xl font-extrabold font-display text-white mt-1",children:"99.4%"}),c.jsx("p",{className:"text-[10px] text-[#00E5C7] mt-0.5",children:"Zero Breakdown Alert"})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-slate-400 mb-3",children:"Fleet Inventory & Instant Availability Toggle"}),c.jsx("div",{className:"space-y-2",children:n.map(o=>c.jsxs("div",{className:"p-3 rounded-xl bg-[#0A0A0B] border border-white/5 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("img",{src:o.imageUrl,alt:o.name,className:"w-12 h-10 object-cover rounded-lg"}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold text-white",children:o.name}),c.jsxs("p",{className:"text-[10px] text-slate-400",children:[o.vehicleType," • ₹",o.pricePerHour,"/hr • ₹",o.pricePerDay,"/day"]})]})]}),c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("span",{className:`text-[11px] font-bold ${o.available?"text-emerald-400":"text-rose-400"}`,children:o.available?"Available":"Reserved / Maintenance"}),c.jsx("button",{onClick:()=>i(o.id),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition ${o.available?"bg-rose-500/15 text-rose-400 hover:bg-rose-500/25":"bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25"}`,children:o.available?"Mark Reserved":"Make Available"})]})]},o.id))})]})]})]})})},$T=()=>{const[t,e]=ce.useState(!1),[n,i]=ce.useState([{sender:"ai",text:"Namaste! Welcome to TBH Concierge. How can I assist your ride today?"}]),[r,s]=ce.useState(""),a=["What documents are needed to rent?","Is fuel included in the price?","How is the security deposit refunded?","Emergency Roadside Helpline"],o=l=>{const u=l||r;u.trim()&&(i(h=>[...h,{sender:"user",text:u}]),s(""),setTimeout(()=>{let h="Our team is here 24/7. Feel free to call our emergency helpline at 1800-TBH-RIDE (1800 824 7433).";const f=u.toLowerCase();f.includes("document")||f.includes("license")?h="You only need a valid Indian Driving License (or International Driving Permit for foreign nationals) and Aadhaar/Passport verification.":f.includes("fuel")?h="Petrol/Diesel vehicles are provided with sufficient fuel to reach the next station; return at same fuel level. EV rides include 100% full charge with access to fast charging grids!":f.includes("deposit")||f.includes("refund")?h="Security deposits are 100% refundable and automatically released back to your original payment method within 2 to 4 hours after vehicle check-in.":(f.includes("emergency")||f.includes("helpline"))&&(h="Emergency Roadside Assistance is active 24/7 across all Indian highways. Toll-Free SOS: 1800-TBH-RIDE (1800 824 7433)."),i(p=>[...p,{sender:"ai",text:h}])},600))};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{onClick:()=>e(!t),className:"fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-r from-[#00E5C7] to-[#00B4D8] text-black shadow-teal-glow hover:scale-105 transition-all flex items-center justify-center",title:"TBH 24/7 Concierge & SOS",children:[c.jsx(f1,{className:"w-6 h-6 stroke-[2.5]"}),c.jsx("span",{className:"absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black animate-ping"})]}),t&&c.jsxs("div",{className:"fixed bottom-20 right-6 z-50 w-96 max-w-[90vw] h-[480px] bg-[#141416] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 duration-200",children:[c.jsxs("div",{className:"p-4 bg-gradient-to-r from-[#141416] to-[#1E1E24] border-b border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center space-x-2.5",children:[c.jsx("div",{className:"w-8 h-8 rounded-full bg-[#00E5C7]/20 border border-[#00E5C7]/50 flex items-center justify-center text-[#00E5C7]",children:c.jsx(Kl,{className:"w-4 h-4"})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-white",children:"TBH Concierge & SOS"}),c.jsxs("p",{className:"text-[10px] text-emerald-400 flex items-center space-x-1",children:[c.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),c.jsx("span",{children:"24/7 AI Mobility Assistant"})]})]})]}),c.jsx("button",{onClick:()=>e(!1),className:"p-1 rounded-lg text-slate-400 hover:text-white",children:c.jsx(Zn,{className:"w-4 h-4"})})]}),c.jsx("div",{className:"flex-1 p-4 overflow-y-auto space-y-3",children:n.map((l,u)=>c.jsx("div",{className:`flex ${l.sender==="user"?"justify-end":"justify-start"}`,children:c.jsx("div",{className:`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${l.sender==="user"?"bg-[#00E5C7] text-black font-semibold rounded-tr-none":"bg-[#0A0A0B] border border-white/10 text-slate-200 rounded-tl-none"}`,children:l.text})},u))}),c.jsx("div",{className:"p-2 bg-[#0A0A0B] border-t border-white/5 flex gap-1.5 overflow-x-auto",children:a.map((l,u)=>c.jsx("button",{onClick:()=>o(l),className:"whitespace-nowrap px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] text-slate-300 transition",children:l},u))}),c.jsxs("div",{className:"p-3 bg-[#141416] border-t border-white/10 flex items-center space-x-2",children:[c.jsx("input",{type:"text",value:r,onChange:l=>s(l.target.value),onKeyDown:l=>l.key==="Enter"&&o(),placeholder:"Ask about deposits, helplines, hubs...",className:"flex-1 bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]"}),c.jsx("button",{onClick:()=>o(),className:"p-2 rounded-xl bg-[#00E5C7] text-black hover:opacity-90 transition",children:c.jsx(g1,{className:"w-4 h-4"})})]})]})]})},KT=()=>c.jsx("footer",{className:"w-full bg-[#0A0A0B] border-t border-white/10 pt-16 pb-12",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[c.jsxs("div",{className:"space-y-4",children:[c.jsxs("div",{className:"flex items-center space-x-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-[#141416] to-[#0A0A0B] border border-[#00E5C7]/40 flex items-center justify-center",children:c.jsx("span",{className:"font-display font-extrabold text-[#00E5C7] text-lg",children:"T"})}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xl font-extrabold text-white font-display",children:"TBH"}),c.jsx("p",{className:"text-[10px] tracking-widest uppercase text-slate-400 font-semibold",children:"Ride Beyond Limits"})]})]}),c.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"India's foremost luxury bike and car rental platform. Seamless 3D vehicle visualization, transparent hourly INR rates, and pan-India airport hubs."}),c.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300",children:[c.jsx(m1,{className:"w-3.5 h-3.5 text-[#00E5C7]"}),c.jsxs("span",{children:["SOS Helpline: ",c.jsx("strong",{children:"1800-TBH-RIDE"})]})]})]}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-[#00E5C7] mb-3",children:"Key Indian Cities"}),c.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-400",children:[c.jsx("li",{children:"Bengaluru (BLR Airport & Koramangala)"}),c.jsx("li",{children:"Hyderabad (HYD Airport & Hitech City)"}),c.jsx("li",{children:"Mumbai (BOM Airport & BKC)"}),c.jsx("li",{children:"Delhi NCR (DEL Airport & Cyber Hub)"}),c.jsx("li",{children:"Chennai (MAA Airport & OMR)"}),c.jsx("li",{children:"Goa (Mopa GOX, Dabolim & Calangute)"}),c.jsx("li",{children:"Pune & Jaipur Hubs"})]})]}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3",children:"Fleet Portfolio"}),c.jsxs("ul",{className:"space-y-1.5 text-xs text-slate-400",children:[c.jsx("li",{children:"Royal Enfield Classic & Hunter 350"}),c.jsx("li",{children:"KTM Duke 390 & Yamaha MT-15 V2"}),c.jsx("li",{children:"Honda Activa 6G & TVS Jupiter 125"}),c.jsx("li",{children:"Ola S1 Pro & Ather 450X EV"}),c.jsx("li",{children:"Ultraviolette F77 Mach 2 Superbike"}),c.jsx("li",{children:"Mahindra Thar 4x4 & Toyota Fortuner"}),c.jsx("li",{children:"Tata Nexon EV Max & Swift Dzire"})]})]}),c.jsxs("div",{className:"space-y-3",children:[c.jsx("h5",{className:"text-xs font-bold uppercase tracking-wider text-white mb-3",children:"Safety & Trust"}),c.jsxs("div",{className:"p-3 rounded-xl bg-[#141416] border border-white/10 space-y-1.5 text-xs text-slate-300",children:[c.jsxs("div",{className:"flex items-center space-x-2",children:[c.jsx(Ar,{className:"w-4 h-4 text-[#00E5C7]"}),c.jsx("span",{className:"font-semibold",children:"Parivahan Approved"})]}),c.jsx("p",{className:"text-[11px] text-slate-400",children:"All self-drive vehicles registered with commercial yellow plates and comprehensive insurance."})]}),c.jsx("p",{className:"text-[10px] text-slate-500",children:"Protected by Razorpay 256-Bit SSL Payment Shield."})]})]}),c.jsxs("div",{className:"pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[c.jsx("p",{children:"© 2026 TBH Mobility Technologies Pvt. Ltd. All rights reserved."}),c.jsxs("div",{className:"flex items-center space-x-4",children:[c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Rental Terms"}),c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Damage Policy"}),c.jsx("span",{className:"hover:text-slate-400 cursor-pointer",children:"Privacy"}),c.jsxs("span",{className:"text-[#00E5C7] flex items-center space-x-1",children:[c.jsx("span",{children:"Made with pride in India"}),c.jsx(rx,{className:"w-3 h-3 fill-[#00E5C7]"})]})]})]})]})}),ZT=()=>{const{t}=Jl(),[e,n]=ce.useState(hv),[i,r]=ce.useState("Bengaluru"),[s,a]=ce.useState(ra),[o,l]=ce.useState("HOURLY"),[u,h]=ce.useState("ALL"),[f,p]=ce.useState("ALL"),[g,v]=ce.useState(""),[y,m]=ce.useState("POPULAR"),[d,x]=ce.useState(null),[_,M]=ce.useState(null),[L,N]=ce.useState(null),[T,D]=ce.useState([]),[W,S]=ce.useState(!1),[w,F]=ce.useState(!1),[V,q]=ce.useState(!1),[K,H]=ce.useState(!1),[Q,U]=ce.useState([]);ce.useEffect(()=>{ee()},[i]);const ee=async()=>{const P=await Pl.getCities();P&&P.length>0&&n(P);const j=await Pl.getVehicles(i);j&&j.length>0&&a(j)},A=P=>{if(T.some(j=>j.id===P.id))D(T.filter(j=>j.id!==P.id));else{if(T.length>=3){alert("You can compare up to 3 vehicles at a time.");return}D([...T,P])}},C=P=>{Q.includes(P)?U(Q.filter(j=>j!==P)):U([...Q,P])},ie=P=>{a(j=>j.map(te=>te.id===P?{...te,available:!te.available}:te))},se=s.filter(P=>{if(u!=="ALL"&&P.vehicleType!==u||f!=="ALL"&&P.fuelType!==f)return!1;if(g.trim()){const j=g.toLowerCase(),te=P.name.toLowerCase().includes(j),Z=P.brand.toLowerCase().includes(j),de=P.model.toLowerCase().includes(j);if(!te&&!Z&&!de)return!1}return!0}).sort((P,j)=>{const te=o==="HOURLY"?P.pricePerHour:o==="DAILY"?P.pricePerDay:P.pricePerMonth,Z=o==="HOURLY"?j.pricePerHour:o==="DAILY"?j.pricePerDay:j.pricePerMonth;return y==="PRICE_ASC"?te-Z:y==="PRICE_DESC"?Z-te:y==="SPEED"?j.maxSpeed-P.maxSpeed:j.rating-P.rating});return c.jsxs("div",{className:"min-h-screen bg-[#0A0A0B] text-white flex flex-col justify-between selection:bg-[#00E5C7] selection:text-black",children:[c.jsx(w1,{cities:e,selectedCity:i,onSelectCity:P=>r(P),compareCount:T.length,onOpenCompare:()=>S(!0),onOpenBookings:()=>q(!0),onOpenAuth:()=>F(!0),onOpenAdmin:()=>H(!0)}),c.jsx(b1,{cities:e,selectedCity:i,onSelectCity:P=>r(P),onSearch:(P,j,te)=>{r(P),l(te);const Z=document.getElementById("fleet-explorer");Z&&Z.scrollIntoView({behavior:"smooth"})},onOpenFirst3D:()=>x(s[2]||s[0])}),c.jsxs("main",{id:"fleet-explorer",className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10",children:[c.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center space-x-2 text-[11px] font-bold text-[#00E5C7] uppercase tracking-widest mb-1",children:[c.jsx(Kl,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"Full India Rental Fleet"})]}),c.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold font-display text-white",children:["Available Machines in ",i]}),c.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"From Royal Enfield thump to KTM adrenaline, Activa ease to Thar 4x4 dominance."})]}),c.jsx("div",{className:"flex items-center space-x-1 bg-[#141416] p-1.5 rounded-2xl border border-white/10",children:["HOURLY","DAILY","MONTHLY"].map(P=>c.jsx("button",{onClick:()=>l(P),className:`px-4 py-2 text-xs font-bold rounded-xl transition ${o===P?"bg-[#00E5C7] text-black shadow-teal-glow":"text-slate-400 hover:text-white"}`,children:t(P==="HOURLY"?"hourly":P==="DAILY"?"daily":"monthly")},P))})]}),c.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none",children:[{id:"ALL",label:"All Fleet"},{id:"BIKE",label:"Superbikes & Cruisers"},{id:"SCOOTER",label:"Scooters / Scooties"},{id:"ELECTRIC_BIKE",label:"Electric Velocity (EV)"},{id:"PETROL_CAR",label:"Petrol Cars"},{id:"DIESEL_CAR",label:"Diesel & 4x4 SUVs"},{id:"ELECTRIC_CAR",label:"Electric Cars"}].map(P=>c.jsx("button",{onClick:()=>h(P.id),className:`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold border transition ${u===P.id?"bg-white text-black border-white shadow-lg":"bg-[#141416] border-white/10 text-slate-300 hover:border-white/20"}`,children:P.label},P.id))}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#141416] p-4 rounded-2xl border border-white/10",children:[c.jsxs("div",{className:"relative w-full sm:w-80",children:[c.jsx("input",{type:"text",value:g,onChange:P=>v(P.target.value),placeholder:"Search by brand, bike or car model...",className:"w-full bg-[#0A0A0B] border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5C7]"}),c.jsx(vx,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"})]}),c.jsxs("div",{className:"flex items-center space-x-3 w-full sm:w-auto",children:[c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Fuel:"}),c.jsxs("select",{value:f,onChange:P=>p(P.target.value),className:"bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]",children:[c.jsx("option",{value:"ALL",children:"All Fuel Types"}),c.jsx("option",{value:"PETROL",children:"Petrol Only"}),c.jsx("option",{value:"DIESEL",children:"Diesel Only"}),c.jsx("option",{value:"ELECTRIC",children:"Electric (EV)"})]})]}),c.jsxs("div",{className:"flex items-center space-x-1.5",children:[c.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Sort:"}),c.jsxs("select",{value:y,onChange:P=>m(P.target.value),className:"bg-[#0A0A0B] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00E5C7]",children:[c.jsx("option",{value:"POPULAR",children:"Most Popular"}),c.jsx("option",{value:"SPEED",children:"Top Speed (Fastest)"}),c.jsx("option",{value:"PRICE_ASC",children:"Price: Low to High"}),c.jsx("option",{value:"PRICE_DESC",children:"Price: High to Low"})]})]})]})]}),se.length===0?c.jsxs("div",{className:"text-center py-20 bg-[#141416]/50 rounded-3xl border border-white/10",children:[c.jsx(l1,{className:"w-10 h-10 text-slate-600 mx-auto mb-2"}),c.jsx("p",{className:"text-base font-bold text-white",children:"No vehicles found matching current filters"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Try resetting category or search criteria."}),c.jsx("button",{onClick:()=>{h("ALL"),p("ALL"),v("")},className:"mt-4 px-4 py-2 rounded-xl bg-[#00E5C7] text-black font-bold text-xs",children:"Reset All Filters"})]}):c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:se.map(P=>c.jsx(T1,{vehicle:P,durationMode:o,onOpen3D:j=>x(j),onQuickBook:j=>M(j),onToggleCompare:A,isCompared:T.some(j=>j.id===P.id),isWishlisted:Q.includes(P.id),onToggleWishlist:C},P.id))})]}),c.jsx($T,{}),c.jsx(KT,{}),c.jsx(HT,{vehicle:d,onClose:()=>x(null),onBookNow:P=>{x(null),M(P)}}),c.jsx(VT,{vehicle:_,cities:e,selectedCity:i,onClose:()=>M(null),onBookingSuccess:P=>{M(null),N(P)}}),c.jsx(GT,{booking:L,onClose:()=>N(null)}),c.jsx(WT,{vehicles:T,onRemove:P=>D(T.filter(j=>j.id!==P)),onClose:()=>S(!1),onBook:P=>{S(!1),M(P)}}),c.jsx(XT,{isOpen:w,onClose:()=>F(!1)}),c.jsx(YT,{isOpen:V,onClose:()=>q(!1),onSelectBooking:P=>N(P)}),c.jsx(qT,{isOpen:K,onClose:()=>H(!1),vehicles:s,onToggleAvailability:ie})]})},JT=()=>c.jsx(E1,{children:c.jsx(M1,{children:c.jsx(ZT,{})})});mu.createRoot(document.getElementById("root")).render(c.jsx(Uv.StrictMode,{children:c.jsx(JT,{})}));

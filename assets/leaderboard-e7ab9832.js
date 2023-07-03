import{f as Oe,r as i,g as q,h as Ee,Q as Qe,c as Ae,j as a,i as $,L as ve,P as Ze,l as Pe,C as Ie,B as Ue,W as Ce}from"./index-1a222324.js";var Se=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var s,n,c;if(Array.isArray(e)){if(s=e.length,s!=r.length)return!1;for(n=s;n--!==0;)if(!t(e[n],r[n]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(c=Object.keys(e),s=c.length,s!==Object.keys(r).length)return!1;for(n=s;n--!==0;)if(!Object.prototype.hasOwnProperty.call(r,c[n]))return!1;for(n=s;n--!==0;){var l=c[n];if(!t(e[l],r[l]))return!1}return!0}return e!==e&&r!==r};const te=Oe(Se);function K(t){return t===null||typeof t!="object"?{}:Object.keys(t).reduce((e,r)=>{const s=t[r];return s!=null&&s!==!1&&(e[r]=s),e},{})}var $e=Object.defineProperty,re=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable,ne=(t,e,r)=>e in t?$e(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Re=(t,e)=>{for(var r in e||(e={}))Le.call(e,r)&&ne(t,r,e[r]);if(re)for(var r of re(e))ke.call(e,r)&&ne(t,r,e[r]);return t};function pe(t,e){if(e===null||typeof e!="object")return{};const r=Re({},e);return Object.keys(e).forEach(s=>{s.includes(`${String(t)}.`)&&delete r[s]}),r}const Ve="__MANTINE_FORM_INDEX__";function se(t,e){return e?typeof e=="boolean"?e:Array.isArray(e)?e.includes(t.replace(/[.][0-9]/g,`.${Ve}`)):!1:!1}function oe(t,e,r){typeof r.value=="object"&&(r.value=Q(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||e==="__proto__"?Object.defineProperty(t,e,r):t[e]=r.value}function Q(t){if(typeof t!="object")return t;var e=0,r,s,n,c=Object.prototype.toString.call(t);if(c==="[object Object]"?n=Object.create(t.__proto__||null):c==="[object Array]"?n=Array(t.length):c==="[object Set]"?(n=new Set,t.forEach(function(l){n.add(Q(l))})):c==="[object Map]"?(n=new Map,t.forEach(function(l,f){n.set(Q(f),Q(l))})):c==="[object Date]"?n=new Date(+t):c==="[object RegExp]"?n=new RegExp(t.source,t.flags):c==="[object DataView]"?n=new t.constructor(Q(t.buffer)):c==="[object ArrayBuffer]"?n=t.slice(0):c.slice(-6)==="Array]"&&(n=new t.constructor(t)),n){for(s=Object.getOwnPropertySymbols(t);e<s.length;e++)oe(n,s[e],Object.getOwnPropertyDescriptor(t,s[e]));for(e=0,s=Object.getOwnPropertyNames(t);e<s.length;e++)Object.hasOwnProperty.call(n,r=s[e])&&n[r]===t[r]||oe(n,r,Object.getOwnPropertyDescriptor(t,r))}return n||t}function me(t){return typeof t!="string"?[]:t.split(".")}function R(t,e,r){const s=me(t);if(s.length===0)return r;const n=Q(r);if(s.length===1)return n[s[0]]=e,n;let c=n[s[0]];for(let l=1;l<s.length-1;l+=1){if(c===void 0)return n;c=c[s[l]]}return c[s[s.length-1]]=e,n}function T(t,e){const r=me(t);if(r.length===0||typeof e!="object"||e===null)return;let s=e[r[0]];for(let n=1;n<r.length&&s!==void 0;n+=1)s=s[r[n]];return s}function ce(t){const e=K(t);return{hasErrors:Object.keys(e).length>0,errors:e}}function J(t,e,r="",s={}){return typeof t!="object"||t===null?s:Object.keys(t).reduce((n,c)=>{const l=t[c],f=`${r===""?"":`${r}.`}${c}`,M=T(f,e);let D=!1;return typeof l=="function"&&(n[f]=l(M,e,f)),typeof l=="object"&&Array.isArray(M)&&(D=!0,M.forEach((j,p)=>J(l,e,`${f}.${p}`,n))),typeof l=="object"&&typeof M=="object"&&M!==null&&(D||J(l,e,f,n)),n},s)}function X(t,e){return ce(typeof t=="function"?t(e):J(t,e))}function L(t,e,r){if(typeof t!="string")return{hasError:!1,error:null};const s=X(e,r),n=Object.keys(s.errors).find(c=>t.split(".").every((l,f)=>l===c.split(".")[f]));return{hasError:!!n,error:n?s.errors[n]:null}}function Fe(t,{from:e,to:r},s){const n=T(t,s);if(!Array.isArray(n))return s;const c=[...n],l=n[e];return c.splice(e,1),c.splice(r,0,l),R(t,c,s)}var We=Object.defineProperty,ae=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,le=(t,e,r)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ge=(t,e)=>{for(var r in e||(e={}))Be.call(e,r)&&le(t,r,e[r]);if(ae)for(var r of ae(e))He.call(e,r)&&le(t,r,e[r]);return t};function qe(t,{from:e,to:r},s){const n=`${t}.${e}`,c=`${t}.${r}`,l=Ge({},s);return Object.keys(s).every(f=>{let M,D;if(f.startsWith(n)&&(M=f,D=f.replace(n,c)),f.startsWith(c)&&(M=f.replace(c,n),D=f),M&&D){const j=l[M],p=l[D];return p===void 0?delete l[M]:l[M]=p,j===void 0?delete l[D]:l[D]=j,!1}return!0}),l}function Ke(t,e,r){const s=T(t,r);return Array.isArray(s)?R(t,s.filter((n,c)=>c!==e),r):r}var Je=Object.defineProperty,ie=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,Ne=(t,e,r)=>e in t?Je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tt=(t,e)=>{for(var r in e||(e={}))Xe.call(e,r)&&Ne(t,r,e[r]);if(ie)for(var r of ie(e))et.call(e,r)&&Ne(t,r,e[r]);return t};function Me(t,e){const r=t.substring(e.length+1).split(".")[0];return parseInt(r,10)}function ue(t,e,r,s){if(e===void 0)return r;const n=`${String(t)}`;let c=r;s===-1&&(c=pe(`${n}.${e}`,c));const l=tt({},c),f=new Set;return Object.entries(c).filter(([M])=>{if(!M.startsWith(`${n}.`))return!1;const D=Me(M,n);return Number.isNaN(D)?!1:D>=e}).forEach(([M,D])=>{const j=Me(M,n),p=M.replace(`${n}.${j}`,`${n}.${j+s}`);l[p]=D,f.add(p),f.has(M)||delete l[M]}),l}function rt(t,e,r,s){const n=T(t,s);if(!Array.isArray(n))return s;const c=[...n];return c.splice(typeof r=="number"?r:c.length,0,e),R(t,c,s)}function fe(t,e){const r=Object.keys(t);if(typeof e=="string"){const s=r.filter(n=>n.startsWith(`${e}.`));return t[e]||s.some(n=>t[n])||!1}return r.some(s=>t[s])}function nt(t){return e=>{if(!e)t(e);else if(typeof e=="function")t(e);else if(typeof e=="object"&&"nativeEvent"in e){const{currentTarget:r}=e;r instanceof HTMLInputElement?r.type==="checkbox"?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}}var st=Object.defineProperty,ot=Object.defineProperties,ct=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertySymbols,at=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,we=(t,e,r)=>e in t?st(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,y=(t,e)=>{for(var r in e||(e={}))at.call(e,r)&&we(t,r,e[r]);if(De)for(var r of De(e))lt.call(e,r)&&we(t,r,e[r]);return t},H=(t,e)=>ot(t,ct(e));function it({initialValues:t={},initialErrors:e={},initialDirty:r={},initialTouched:s={},clearInputErrorOnChange:n=!0,validateInputOnChange:c=!1,validateInputOnBlur:l=!1,transformValues:f=D=>D,validate:M}={}){const[D,j]=i.useState(s),[p,h]=i.useState(r),[w,g]=i.useState(t),[I,_]=i.useState(K(e)),v=i.useRef(t),U=o=>{v.current=o},C=i.useCallback(()=>j({}),[]),V=o=>{const N=o?y(y({},w),o):w;U(N),h({})},m=i.useCallback(o=>_(N=>K(typeof o=="function"?o(N):o)),[]),x=i.useCallback(()=>_({}),[]),S=i.useCallback(()=>{g(t),x(),U(t),h({}),C()},[]),b=i.useCallback((o,N)=>m(u=>H(y({},u),{[o]:N})),[]),Y=i.useCallback(o=>m(N=>{if(typeof o!="string")return N;const u=y({},N);return delete u[o],u}),[]),O=i.useCallback(o=>h(N=>{if(typeof o!="string")return N;const u=pe(o,N);return delete u[o],u}),[]),Z=i.useCallback((o,N)=>{const u=se(o,c);O(o),j(A=>H(y({},A),{[o]:!0})),g(A=>{const P=R(o,N,A);if(u){const z=L(o,M,P);z.hasError?b(o,z.error):Y(o)}return P}),!u&&n&&b(o,null)},[]),F=i.useCallback(o=>{g(N=>{const u=typeof o=="function"?o(N):o;return y(y({},N),u)}),n&&x()},[]),W=i.useCallback((o,N)=>{O(o),g(u=>Fe(o,N,u)),_(u=>qe(o,N,u))},[]),B=i.useCallback((o,N)=>{O(o),g(u=>Ke(o,N,u)),_(u=>ue(o,N,u,-1))},[]),ge=i.useCallback((o,N,u)=>{O(o),g(A=>rt(o,N,u,A)),_(A=>ue(o,u,A,1))},[]),ee=i.useCallback(()=>{const o=X(M,w);return _(o.errors),o},[w,M]),ze=i.useCallback(o=>{const N=L(o,M,w);return N.hasError?b(o,N.error):Y(o),N},[w,M]),Te=(o,{type:N="input",withError:u=!0,withFocus:A=!0}={})=>{const z={onChange:nt(E=>Z(o,E))};return u&&(z.error=I[o]),N==="checkbox"?z.checked=T(o,w):z.value=T(o,w),A&&(z.onFocus=()=>j(E=>H(y({},E),{[o]:!0})),z.onBlur=()=>{if(se(o,l)){const E=L(o,M,w);E.hasError?b(o,E.error):Y(o)}}),z},_e=(o,N)=>u=>{u==null||u.preventDefault();const A=ee();A.hasErrors?N==null||N(A.errors,w,u):o==null||o(f(w),u)},ye=o=>f(o||w),he=i.useCallback(o=>{o.preventDefault(),S()},[]),be=o=>{if(o){const u=T(o,p);if(typeof u=="boolean")return u;const A=T(o,w),P=T(o,v.current);return!te(A,P)}return Object.keys(p).length>0?fe(p):!te(w,v.current)},xe=i.useCallback(o=>fe(D,o),[D]),Ye=i.useCallback(o=>o?!L(o,M,w).hasError:!X(M,w).hasErrors,[w,M]);return{values:w,errors:I,setValues:F,setErrors:m,setFieldValue:Z,setFieldError:b,clearFieldError:Y,clearErrors:x,reset:S,validate:ee,validateField:ze,reorderListItem:W,removeListItem:B,insertListItem:ge,getInputProps:Te,onSubmit:_e,onReset:he,isDirty:be,isTouched:xe,setTouched:j,setDirty:h,resetTouched:C,resetDirty:V,isValid:Ye,getTransformedValues:ye}}const je=t=>i.createElement("svg",{width:7,height:12,viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M4.47656 6.00011L0.351562 1.87511L1.5299 0.696777L6.83323 6.00011L1.5299 11.3034L0.351562 10.1251L4.47656 6.00011Z",fill:"#202020"})),de=t=>i.createElement("svg",{width:14,height:12,viewBox:"0 0 14 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M11.625 6.00011L7.5 1.87511L8.67833 0.696777L13.9817 6.00011L8.67833 11.3034L7.5 10.1251L11.625 6.00011Z",fill:"#202020"}),i.createElement("path",{d:"M4.9585 6.00011L0.833496 1.87511L2.01183 0.696777L7.31516 6.00011L2.01183 11.3034L0.833496 10.1251L4.9585 6.00011Z",fill:"#202020"})),Nt=["#","Name and wallet","Registration date","Referrals","Total points"],Mt="0xefaeb1107e3f8927d7eb3dd6e8ea09d0845e55b0dd914167427b8bd46d57c63f",ut=([,t],[,e])=>{const r=q(t.totalPoints),s=q(e.totalPoints);return Number(s)-Number(r)},ft=t=>Object.entries(t).sort(ut).map(([r,s],n)=>({...s,address:r,rank:n+1}));function Dt(t,e){const r=[],s=Math.ceil(t.length/e);for(let n=0;n<s;n+=1){const c=n*e,l=c+e,f=t.slice(c,l);r.push(f)}return r}function wt(t,e){return t.filter(({address:r,name:s})=>{const n=e.toLocaleLowerCase();return r.toLocaleLowerCase().includes(n)||s.toLocaleLowerCase().includes(n)})}function jt(t){if(t===1)return"gold";if(t===2)return"silver";if(t===3)return"bronze"}const dt="data:text/plain;base64,MDAwMDAxMDAwMDAwMDAwMTA4MDAwMDAwMDAwMDAwMDAwMDAxMGQwMDAwMDAyOTEwM2MwMDA4Mzg2YzY1NjE2NDY1NzI2MjZmNjE3MjY0NWY2OTZmMWM0MzZmNmQ2ZDYxNmU2NDAwMDEyMDQ0NDE2NDY0NDM2ZjZlNzQ3MjYxNjM3NDUzNmY3NTcyNjM2NTA0MDAwNDAxMWM0MTYzNzQ2ZjcyNDk2NDAwMDAwMDUwNDQ2NTZjNjU3NDY1NDM2ZjZlNzQ3MjYxNjM3NDUzNmY3NTcyNjM2NTA0MDAwNDAxMWM0MTYzNzQ2ZjcyNDk2NDAwMDEwMDI4NTU3MDczNjU3Mjc0NTU3MzY1NzIwODAwMDQwMTFjNDE2Mzc0NmY3MjQ5NjQwMDAwMTAwMTEwNTU3MzY1NzIwMDAyMDAyODQ0NjU2YzY1NzQ2NTU1NzM2NTcyMDQwMDA0MDExYzQxNjM3NDZmNzI0OTY0MDAwMzAwMWM0NzY1NzQ1NTczNjU3MjA0MDAwNDAxMWM0MTYzNzQ2ZjcyNDk2NDAwMDQwMDI0NDc2NTc0NTA2ZjY5NmU3NDczMDQwMDA0MDExYzQxNjM3NDZmNzI0OTY0MDAwNTAwNzQ1NTcwNjQ2MTc0NjU0Njc1NmU2NzY5NjI2YzY1NTQ2ZjZiNjU2ZTQzNmY2ZTc0NzI2MTYzNzQ0OTY0MDQwMDA0MDExYzQxNjM3NDZmNzI0OTY0MDAwNjAwMjg1MzY1NzQ0MjYxNmM2MTZlNjM2NTA4MDAwNDAxMWM0MTYzNzQ2ZjcyNDk2NDAwMDAxYzAxMTA3NTMxMzIzODAwMDcwMDAwMDQxMDEwNjc3Mzc0NjQxODYzNmY2ZDZkNmY2ZTI4NzA3MjY5NmQ2OTc0Njk3NjY1NzMxYzQxNjM3NDZmNzI0OTY0MDAwMDA0MDAwODAxMjA1Yjc1MzgzYjIwMzMzMjVkMDAwMDA4MDAwMDAzMjAwMDAwMDAwYzAwMGMwMDAwMDUwMzAwMTAwODM4NmM2NTYxNjQ2NTcyNjI2ZjYxNzI2NDVmNjk2ZjEwNTU3MzY1NzIwMDAwMTAwMTEwNmU2MTZkNjUxNDAxMTg1Mzc0NzI2OTZlNjcwMDAxMjQ3MjY1NjY2NTcyNzI2MTZjNzMxODAxMGM3NTM2MzQwMDAxNDQ3MjY1Njc2OTczNzQ3MjYxNzQ2OTZmNmU1ZjY0NjE3NDY1MTgwMTBjNzUzNjM0MDAwMTMwNzQ2Zjc0NjE2YzVmNzA2ZjY5NmU3NDczMWMwMTEwNzUzMTMyMzgwMDAwMTQwMDAwMDUwMjAwMTgwMDAwMDUwNjAwMWMwMDAwMDUwNzAwMjAwNDE4NTI2NTczNzU2Yzc0MDgwNDU0MDEyNDA0NDUwMTMwMDEwODA4NGY2YjA0MDAyNDAwMDAwMDAwMGM0NTcyNzIwNDAwMzAwMDAwMDEwMDAwMjQwODM4NmM2NTYxNjQ2NTcyNjI2ZjYxNzI2NDVmNjk2ZjE0NTI2NTcwNmM3OTAwMDEyNDMwNTU3MzY1NzI0OTZlNzM2NTcyNzQ2NTY0MDQwMDI4MDEzYzI4NDE2Mzc0NmY3MjQ5NjQyYzIwNTU3MzY1NzIyOTAwMDAwMDJjNTU3MzY1NzI1NTcwNjQ2MTc0NjU2NDA0MDAyODAxM2MyODQxNjM3NDZmNzI0OTY0MmMyMDU1NzM2NTcyMjkwMDAxMDAyYzU1NzM2NTcyNDQ2NTZjNjU3NDY1NjQwNDAwMDQwMTFjNDE2Mzc0NmY3MjQ5NjQwMDAyMDA1ODQzNmY2ZTc0NzI2MTYzNzQ1MzZmNzU3MjYzNjU0OTZlNzM2NTcyNzQ2NTY0MDQwMDA0MDExYzQxNjM3NDZmNzI0OTY0MDAwMzAwMTA1NTczNjU3MjA0MDAyYzAxMzA0ZjcwNzQ2OTZmNmUzYzU1NzM2NTcyM2UwMDA0MDAxYzQyNjE2YzYxNmU2MzY1MDQwMDFjMDExMDc1MzEzMjM4MDAwNTAwNTQ0MzZmNmU3NDcyNjE2Mzc0NTM2Zjc1NzI2MzY1NDQ2NTZjNjU3NDY1NjQwNDAwMDQwMTFjNDE2Mzc0NmY3MjQ5NjQwMDA2MDA3ODU1NzA2NDYxNzQ2NTY0NDY3NTZlNjc2OTYyNmM2NTU0NmY2YjY1NmU0MzZmNmU3NDcyNjE2Mzc0NDk2NDA0MDAwNDAxMWM0MTYzNzQ2ZjcyNDk2NDAwMDcwMDM4NDI2MTZjNjE2ZTYzNjU1NTcwNjQ2MTc0NjU2NDA4MDAwNDAxMWM0MTYzNzQ2ZjcyNDk2NDAwMDAxYzAxMTA3NTMxMzIzODAwMDgwMDAwMjgwMDAwMDQwODA0MTAwMDJjMDQxODRmNzA3NDY5NmY2ZTA0MDQ1NDAxMTAwMTA4MTA0ZTZmNmU2NTAwMDAwMDEwNTM2ZjZkNjUwNDAwMTAwMDAwMDEwMDAwMzAwODM4NmM2NTYxNjQ2NTcyNjI2ZjYxNzI2NDVmNjk2ZjE0NDU3MjcyNmY3MjAwMDEwYzM0NDM2ZjZlNzQ3MjYxNjM3NDQ1NzI3MjZmNzIwNDAwMTQwMTE4NTM3NDcyNjk2ZTY3MDAwMDAwNDQ0ZTZmNzQ1NjY1NzI2OTY2Njk2NTY0NTM2Zjc1NzI2MzY1MDAwMTAwMzA1NTczNjU3MjRlNmY3NDQ2NmY3NTZlNjQwNDAwMDQwMTFjNDE2Mzc0NmY3MjQ5NjQwMDAyMDAwMDM0MDQyMDQyNTQ3MjY1NjU0ZDYxNzAwODA0NGIwMTA0MDQ1NjAxMTAwMDA0MDAzODAwMDAwMDM4MDAwMDAyMjgwMA==";function At(){const t=Ee(dt),{state:e}=Qe(Mt,t);return e}const pt="_leaderboard_gtpv5_1",mt="_header_gtpv5_5",gt="_heading_gtpv5_10",zt="_input_gtpv5_14",Tt="_table_gtpv5_18",_t="_tableHeader_gtpv5_25",yt="_nameCell_gtpv5_43",ht="_name_gtpv5_43",bt="_rank_gtpv5_52",xt="_gold_gtpv5_61",Yt="_silver_gtpv5_64",Ot="_bronze_gtpv5_67",Et="_footer_gtpv5_71",Qt="_leftButton_gtpv5_79",vt="_text_gtpv5_82",Zt="_pageNumber_gtpv5_88",Pt="_pagesCount_gtpv5_91",d={leaderboard:pt,header:mt,heading:gt,input:zt,table:Tt,tableHeader:_t,nameCell:yt,name:ht,rank:bt,gold:xt,silver:Yt,bronze:Ot,footer:Et,leftButton:Qt,text:vt,pageNumber:Zt,pagesCount:Pt},It=t=>i.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_323_1253)"},i.createElement("path",{d:"M7.05542 0.019043C3.1651 0.019043 0 3.17549 0 7.05521C0 10.9349 3.16513 14.0914 7.05542 14.0914C10.9457 14.0914 14.1109 10.9349 14.1109 7.05521C14.1109 3.17549 10.9457 0.019043 7.05542 0.019043ZM7.05542 12.9347C3.80279 12.9347 1.15663 10.297 1.15663 7.05518C1.15663 3.81314 3.80279 1.17564 7.05542 1.17564C10.3081 1.17564 12.9542 3.81314 12.9542 7.05518C12.9542 10.297 10.3081 12.9347 7.05542 12.9347Z",fill:"black"}),i.createElement("path",{d:"M15.8297 14.9925L12.0321 11.2141C11.8056 10.989 11.4395 10.99 11.2141 11.2163C10.989 11.4428 10.99 11.8088 11.2163 12.0342L15.0139 15.8125C15.1268 15.9247 15.2741 15.9808 15.4218 15.9808C15.5704 15.9808 15.7188 15.9239 15.8318 15.8104C16.057 15.5839 16.056 15.2178 15.8297 14.9925Z",fill:"black"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_323_1253"},i.createElement("rect",{width:16,height:16,fill:"white"})))),Ut="_wrapper_1m7iv_1",Ct={wrapper:Ut};function St(t){const{className:e,...r}=t,s=Ae(Ct.wrapper,e);return a.jsxs("div",{className:s,children:[a.jsx(It,{}),a.jsx("input",{type:"text",placeholder:"Search",id:"search",...r})]})}const $t={searchQuery:""};function Lt(){const t=At(),e=i.useMemo(()=>ft(t||{}),[t]),r=e.length,{getInputProps:s,values:n}=it({initialValues:$t}),{searchQuery:c}=n,[l,f]=i.useState(0),M=i.useMemo(()=>Dt(wt(e,c),10),[e,c]),D=M[l],j=M.length,p=j?l+1:l,h=j&&j-1,w=l===0,g=l===h,I=()=>f(m=>m-1),_=()=>f(m=>m+1),v=()=>f(0),U=()=>f(h),C=()=>Nt.map(m=>a.jsx("th",{children:m},m)),V=()=>D==null?void 0:D.map(({rank:m,address:x,name:S,registrationDate:b,referrals:Y,totalPoints:O})=>{const Z=jt(m),F=Ae(d.rank,Z&&d[Z]),W=+q(b),B=new Date(W).toLocaleDateString();return a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:F,children:m})}),a.jsxs("td",{className:d.nameCell,children:[a.jsx("span",{className:d.name,children:S})," (",x,")"]}),a.jsx("td",{children:B}),a.jsx("td",{children:Y}),a.jsx("td",{children:a.jsx(Ze,{value:O})})]},x)});return t?a.jsxs("div",{className:d.leaderboard,children:[a.jsxs("header",{className:d.header,children:[a.jsxs("h3",{className:d.heading,children:["Total Participants: ",r]}),a.jsx(St,{...s("searchQuery"),className:d.input})]}),a.jsxs("table",{className:d.table,children:[a.jsx("thead",{className:d.tableHeader,children:a.jsx("tr",{children:C()})}),a.jsx("tbody",{children:V()})]}),a.jsxs("footer",{className:d.footer,children:[a.jsx($,{icon:de,color:"transparent",className:d.leftButton,onClick:v,disabled:w}),a.jsx($,{icon:je,color:"transparent",className:d.leftButton,onClick:I,disabled:w}),a.jsxs("p",{className:d.text,children:[a.jsx("span",{className:d.pageNumber,children:p}),a.jsxs("span",{className:d.pagesCount,children:["out of ",j]})]}),a.jsx($,{icon:je,color:"transparent",onClick:_,disabled:g}),a.jsx($,{icon:de,color:"transparent",onClick:U,disabled:g})]})]}):a.jsx(ve,{})}const kt="_container_shm5o_1",Rt="_header_shm5o_21",Vt="_subheadings_shm5o_28",Ft="_content_shm5o_32",k={container:kt,header:Rt,subheadings:Vt,content:Ft},Wt="_heading_f9rph_1",Bt={heading:Wt};function Ht({text:t}){return a.jsx("h2",{className:Bt.heading,children:a.jsx("span",{children:t})})}const Gt="_subheading_1mqq1_1",qt={subheading:Gt};function G({text:t}){return a.jsx("p",{className:qt.subheading,children:t})}function Jt({children:t}){const{account:e}=Pe();return a.jsx(Ie,{children:a.jsxs("div",{className:k.container,children:[a.jsxs("header",{className:k.header,children:[a.jsx(Ht,{text:"Tic Tac Toe game"}),a.jsx("div",{className:k.subheadings,children:e?a.jsx(G,{text:"A classic game of tic-tac-toe in which you compete not against a human, but against a smart contract. Play to win PPV."}):a.jsxs(a.Fragment,{children:[a.jsx(G,{text:"To register, follow the referral link provided by your friend or Vara Network community manager."}),a.jsx(G,{text:"If you are already registered connect your Substrate wallet to continue."})]})}),e?a.jsx(Ue,{children:"Play"}):a.jsx(Ce,{})]}),a.jsx("div",{className:k.content,children:a.jsx(Lt,{})})]})})}export{Jt as default};

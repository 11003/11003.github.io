/* eslint-disable promise/prefer-await-to-then */
const e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],
// New WebKit
["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],
// Old WebKit
["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=(()=>{if("undefined"==typeof document)return!1;const n=e[0],l={};for(const r of e){const e=r?.[1];if(e in document){for(const[e,c]of r.entries())l[n[e]]=c;return l}}return!1})(),l={change:n.fullscreenchange,error:n.fullscreenerror};
// eslint-disable-next-line import/no-mutable-exports
let r={
// eslint-disable-next-line default-param-last
request:(e=document.documentElement,l)=>new Promise(((c,t)=>{const s=()=>{r.off("change",s),c()};r.on("change",s);const o=e[n.requestFullscreen](l);o instanceof Promise&&o.then(s).catch(t)})),exit:()=>new Promise(((e,l)=>{if(!r.isFullscreen)return void e();const c=()=>{r.off("change",c),e()};r.on("change",c);const t=document[n.exitFullscreen]();t instanceof Promise&&t.then(c).catch(l)})),toggle:(e,n)=>r.isFullscreen?r.exit():r.request(e,n),onchange(e){r.on("change",e)},onerror(e){r.on("error",e)},on(e,n){const r=l[e];r&&document.addEventListener(r,n,!1)},off(e,n){const r=l[e];r&&document.removeEventListener(r,n,!1)},raw:n};Object.defineProperties(r,{isFullscreen:{get:()=>Boolean(document[n.fullscreenElement])},element:{enumerable:!0,get:()=>document[n.fullscreenElement]??void 0},isEnabled:{enumerable:!0,
// Coerce to boolean in case of old WebKit.
get:()=>Boolean(document[n.fullscreenEnabled])}}),n||(r={isEnabled:!1});const c=r;export{c as s};

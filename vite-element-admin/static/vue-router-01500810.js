import{y as e,u as t,t as n,H as r,n as o,C as a,v as s,aa as c,B as i,r as l,w as u}from"./@vue-77a387ba.js";
/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const f="undefined"!=typeof window;const p=Object.assign;function h(e,t){const n={};for(const r in t){const o=t[r];n[r]=m(o)?o.map(e):e(o)}return n}const d=()=>{},m=Array.isArray,g=/\/$/,v=e=>e.replace(g,"")
/**
 * Transforms a URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */;
/**
 * Typesafe alternative to Array.isArray
 * https://github.com/microsoft/TypeScript/pull/48228
 */function y(e,t,n="/"){let r,o={},a="",s="";
// Could use URL and URLSearchParams but IE 11 doesn't support it
// TODO: move to new URL()
const c=t.indexOf("#");let i=t.indexOf("?");
// the hash appears before the search, so it's not part of the search string
// empty path means a relative query or hash `?foo=f`, `#thing`
return c<i&&c>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),
// keep the # character
s=t.slice(c,t.length)),
// no search and no query
r=
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */
function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];
// make . and ./ the same (../ === .., ../../ === ../..)
// this is the same behavior as new URL()
".."!==o&&"."!==o||r.push("");let a,s,c=n.length-1;for(a=0;a<r.length;a++)
// we stay on the same position
if(s=r[a],"."!==s){
// go up in the from array
if(".."!==s)break;
// we can't go below zero, but we still need to increment toPosition
c>1&&c--;
// continue
}return n.slice(0,c).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
/**
 * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function b(e,t){
// no base or base is not found at the beginning
return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param stringifyQuery - A function that takes a query object of type LocationQueryRaw and returns a string representation of it.
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */
function w(e,t){
// since the original record has an undefined value for aliasOf
// but all aliases point to the original record, this will always compare
// the original record
return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k(e[n],t[n]))return!1;return!0}function k(e,t){return m(e)?O(e,t):m(t)?O(t,e):e===t}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */function O(e,t){return m(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var R,x;!function(e){e.pop="pop",e.push="push"}(R||(R={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(x||(x={}));
// remove any character before the hash
const C=/^[^#]+#/;function P(e,t){return e.replace(C,"#")+t}const $=()=>({left:window.pageXOffset,top:window.pageYOffset});function j(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function S(e,t){return(history.state?history.state.position-t:-1)+e}const A=new Map;
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }
let q=()=>location.protocol+"//"+location.host
/**
 * Creates a normalized history location from a window.location object
 * @param base - The base path
 * @param location - The window.location object
 */;function L(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");
// allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);
// prepend the starting slash to hash so the url starts with /#
return"/"!==n[0]&&(n="/"+n),b(n,"")}return b(n,e)+r+o}
/**
 * Creates a state object
 */
function M(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?$():null}}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */
function B(e){const t=function(e){const{history:t,location:n}=window,r={value:L(e,n)},o={value:t.state};
// private variables
function a(r,a,s){
/**
         * if a base tag is provided, and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */
const c=e.indexOf("#"),i=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:q()+e+r;try{
// BROWSER QUIRK
// NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
t[s?"replaceState":"pushState"](a,"",i),o.value=a}catch(l){
// Force the navigation, this also resets the call count
n[s?"replace":"assign"](i)}}
// build current history entry as this is a fresh navigation
return o.value||a(r.value,{back:null,current:r.value,forward:null,
// the length is off by one, we need to decrease it
position:t.length-1,replaced:!0,
// don't add a scroll as the user may have an anchor, and we want
// scrollBehavior to be triggered without a saved position
scroll:null},!0),{location:r,state:o,push:function(e,n){
// Add to current entry the information of where we are going
// as well as saving the current position
const s=p({},
// use current history state to gracefully handle a wrong call to
// history.replaceState
// https://github.com/vuejs/router/issues/366
o.value,t.state,{forward:e,scroll:$()});a(s.current,s,!0),a(e,p({},M(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,p({},t.state,M(o.value.back,
// keep back and forward entries but override current position
e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */
function(e){if(!e)if(f){
// respect <base> tag
const t=document.querySelector("base");
// strip full URL origin
e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";
// ensure leading slash when it was removed by the regex above avoid leading
// slash with hash because the file could be read from the disk like file://
// and the leading slash would cause problems
// remove the trailing slash so all other method can just do `base + fullPath`
// to build an href
return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=L(e,location),i=n.value,l=t.value;let u=0;if(a){
// ignore the popstate and reset the pauseState
if(n.value=c,t.value=a,s&&s===i)return void(s=null);u=l?a.position-l.position:0}else r(c);
// console.log({ deltaFromCurrent })
// Here we could also revert the navigation by calling history.go(-delta)
// this listener will have to be adapted to not trigger again and to wait for the url
// to be updated before triggering the listeners. Some kind of validation function would also
// need to be passed to the listeners so the navigation can be accepted
// call all listeners
o.forEach((e=>{e(n.value,i,{delta:u,type:R.pop,direction:u?u>0?x.forward:x.back:x.unknown})}))};function i(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:$()}),"")}
// set up the listeners and prepare teardown callbacks
return window.addEventListener("popstate",c),
// TODO: could we use 'pagehide' or 'visibilitychange' instead?
// https://developer.chrome.com/blog/page-lifecycle-api/
window.addEventListener("beforeunload",i,{passive:!0}),{pauseListeners:function(){s=n.value},listen:function(e){
// set up the listener and prepare teardown callbacks
o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=p({
// it's overridden right after
location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:P.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}
/**
 * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
 * handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
 * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
 * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
 * after the `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */function G(e){
// Make sure this implementation is fine in terms of encoding, specially for IE11
// for `file://`, directly use the pathname and ignore the base
// location.pathname contains an initial `/` even at the root: `https://example.com`
// allow the user to provide a `#` in the middle: `/base/#/app`
return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),B(e)}function _(e){return"string"==typeof e||"symbol"==typeof e}
/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */const I={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},W=Symbol("");
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */
var D;function U(e,t){return p(new Error,{type:e,[W]:!0},t)}function F(e,t){return e instanceof Error&&W in e&&(null==t||!!(e.type&t))}
// default pattern for a param: non-greedy everything but /
!function(e){
/**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */
e[e.aborted=4]="aborted",
/**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */
e[e.cancelled=8]="cancelled",
/**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */
e[e.duplicated=16]="duplicated"}(D||(D={}));const T="[^/]+?",V={sensitive:!1,strict:!1,start:!0,end:!0},z=/[.+*?^${}()[\]/\\]/g;
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function H(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];
// only keep going if diff === 0
if(r)return r;n++}
// if the last subsegment was Static, the shorter segments should be sorted first
// otherwise sort the longest segment first
return e.length<t.length?1===e.length&&80/* PathScore.Segment */===e[0]?-1:1:e.length>t.length?1===t.length&&80/* PathScore.Segment */===t[0]?1:-1:0}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */function K(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=H(r[n],o[n]);
// do not return if both are equal
if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(Q(r))return 1;if(Q(o))return-1}
// if a and b share the same score entries but b has more, sort b first
return o.length-r.length;
// this is the ternary version
// return aScore.length < bScore.length
//   ? 1
//   : aScore.length > bScore.length
//   ? -1
//   : 0
}
/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */function Q(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const X={type:0/* TokenType.Static */,value:""},Y=/[a-zA-Z0-9_]/;function N(e,t,n){const r=
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function(e,t){const n=p({},V,t),r=[];
// the amount of scores is the same as the length of segments except for the root segment "/"
// the regexp as a string
let o=n.start?"^":"";
// extracted keys
const a=[];for(const i of e){
// the root segment needs special treatment
const e=i.length?[]:[90/* PathScore.Root */];
// allow trailing slash
n.strict&&!i.length&&(o+="/");for(let t=0;t<i.length;t++){const r=i[t];
// resets the score if we are inside a sub-segment /:a-other-:b
let s=40/* PathScore.Segment */+(n.sensitive?.25/* PathScore.BonusCaseSensitive */:0);if(0/* TokenType.Static */===r.type)
// prepend the slash if we are starting a new segment
t||(o+="/"),o+=r.value.replace(z,"\\$&"),s+=40/* PathScore.Static */;else if(1/* TokenType.Param */===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;a.push({name:e,repeatable:n,optional:l});const f=u||T;
// the user provided a custom regexp /:id(\\d+)
if(f!==T){s+=10/* PathScore.BonusCustomRegExp */;
// make sure the regexp is valid before using it
try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}
// when we repeat we must take care of the repeating leading slash
let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;
// prepend the slash if we are starting a new segment
t||(p=
// avoid an optional / if there are more segments e.g. /:p?-static
// or /:p?-:p2
l&&i.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),o+=p,s+=20/* PathScore.Dynamic */,l&&(s+=-8/* PathScore.BonusOptional */),n&&(s+=-20/* PathScore.BonusRepeatable */),".*"===f&&(s+=-50/* PathScore.BonusWildcard */)}e.push(s)}
// an empty array like /home/ -> [[{home}], []]
// if (!segment.length) pattern += '/'
r.push(e)}
// only apply the strict bonus to the last score
if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001/* PathScore.BonusStrict */}
// TODO: dev only warn double trailing slash
n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;
// for optional parameters to allow to be empty
for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0/* TokenType.Static */===e.type)n+=e.value;else if(1/* TokenType.Param */===e.type){const{value:a,repeatable:s,optional:c}=e,i=a in t?t[a]:"";if(m(i)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=m(i)?i.join("/"):i;if(!l){if(!c)throw new Error(`Missing required param "${a}"`);
// if we have more than one optional param like /:a?-static we don't need to care about the optional param
o.length<2&&(
// remove the last slash as we could be at the end
n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}
// avoid empty path when we have multiple optional params
return n||"/"}}}(
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function(e){if(!e)return[[]];if("/"===e)return[[X]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);
// if (tokenCache.has(path)) return tokenCache.get(path)!
function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0/* TokenizerState.Static */,r=n;const o=[];
// the segment will always be valid because we get into the initial state
// with the leading /
let a;function s(){a&&o.push(a),a=[]}
// index on the path
let c,i=0,l="",u="";
// char at index
function f(){l&&(0/* TokenizerState.Static */===n?a.push({type:0/* TokenType.Static */,value:l}):1/* TokenizerState.Param */===n||2/* TokenizerState.ParamRegExp */===n||3/* TokenizerState.ParamRegExpEnd */===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1/* TokenType.Param */,value:l,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;i<e.length;)if(c=e[i++],"\\"!==c||2/* TokenizerState.ParamRegExp */===n)switch(n){case 0/* TokenizerState.Static */:"/"===c?(l&&f(),s()):":"===c?(f(),n=1/* TokenizerState.Param */):p();break;case 4/* TokenizerState.EscapeNext */:p(),n=r;break;case 1/* TokenizerState.Param */:"("===c?n=2/* TokenizerState.ParamRegExp */:Y.test(c)?p():(f(),n=0/* TokenizerState.Static */,
// go back one character if we were not modifying
"*"!==c&&"?"!==c&&"+"!==c&&i--);break;case 2/* TokenizerState.ParamRegExp */:
// TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
// it already works by escaping the closing )
// https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
// is this really something people need since you can also write
// /prefix_:p()_suffix
")"===c?
// handle the escaped )
"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3/* TokenizerState.ParamRegExpEnd */:u+=c;break;case 3/* TokenizerState.ParamRegExpEnd */:
// same as finalizing a param
f(),n=0/* TokenizerState.Static */,
// go back one character if we were not modifying
"*"!==c&&"?"!==c&&"+"!==c&&i--,u="";break;default:t("Unknown state")}else r=n,n=4/* TokenizerState.EscapeNext */;
// tokenCache.set(path, tokens)
return 2/* TokenizerState.ParamRegExp */===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}(e.path),n),o=p(r,{record:e,parent:t,
// these needs to be populated by the parent
children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}
/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */function Z(e,t){
// normalized ordered array of matchers
const n=[],r=new Map;function o(e,n,r){
// used later on to remove by name
const c=!r,i=
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */
function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ee(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */(e);
// we might be the child of an alias
i.aliasOf=r&&r.record;const l=re(t,e),u=[i];
// generate an array of records to correctly handle aliases
if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},i,{
// this allows us to hold a copy of the `components` option
// so that async components cache is hold on the original record
components:r?r.record.components:i.components,path:e,
// we might be the child of an alias
aliasOf:r?r.record:i}))}let f,h;for(const t of u){const{path:u}=t;
// Build up the path for nested routes if the child isn't an absolute
// route. Only add the / delimiter if the child path isn't empty and if the
// parent path doesn't have a trailing slash
if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}
// create the object beforehand, so it can be passed to children
if(f=N(t,n,l),
// if we are an alias we must tell the original record that we exist,
// so we can be removed
r?r.alias.push(f):(
// otherwise, the first record is the original and others are aliases
h=h||f,h!==f&&h.alias.push(f),
// remove the route if named and only for the top record (avoid in nested calls)
// this works because the original record is the first one
c&&e.name&&!te(f)&&a(e.name)),i.children){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}
// if there was no original record, then the first one was not an alias and all
// other aliases (if any) need to reference this record when adding children
r=r||f,
// TODO: add normalized records for more flexibility
// if (parent && isAliasRecord(originalRecord)) {
//   parent.children.push(originalRecord)
// }
// Avoid adding a record that doesn't display anything. This allows passing through records without a component to
// not be reached and pass through the catch all route
(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&s(f)}return h?()=>{
// since other matchers are aliases, they should be removed by the original matcher
a(h)}:d}function a(e){if(_(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){let t=0;for(;t<n.length&&K(e,n[t])>=0&&(
// Adding children with empty path should still appear before the parent
// https://github.com/vuejs/router/issues/1124
e.record.path!==n[t].record.path||!oe(e,n[t]));)t++;n.splice(t,0,e),
// only add the original record to the name map
e.record.name&&!te(e)&&r.set(e.record.name,e)}return t=re({strict:!1,end:!0,sensitive:!1},t),
// add initial routes
e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw U(1/* ErrorTypes.MATCHER_NOT_FOUND */,{location:e});s=o.record.name,c=p(
// paramsFromLocation is a new object
J(t.params,
// only keep params that exist in the resolved location
// TODO: only keep optional params coming from a parent record
o.keys.filter((e=>!e.optional)).map((e=>e.name))),
// discard any existing params in the current location that do not exist here
// #1497 this ensures better active/exact matching
e.params&&J(e.params,o.keys.map((e=>e.name)))),
// throws if cannot be stringified
a=o.stringify(c)}else if("path"in e)
// no need to resolve the path with the matcher as it was provided
// this also allows the user to control the encoding
a=e.path,o=n.find((e=>e.re.test(a))),
// matcher should have a value after the loop
o&&(
// we know the matcher works because we tested the regexp
c=o.parse(a),s=o.record.name);else{if(
// match by name or path of current route
o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw U(1/* ErrorTypes.MATCHER_NOT_FOUND */,{location:e,currentLocation:t});s=o.record.name,
// since we are navigating to the same location, we don't need to pick the
// params like when `name` is provided
c=p({},t.params,e.params),a=o.stringify(c)}const i=[];let l=o;for(;l;)
// reversed order so parents are at the beginning
i.unshift(l.record),l=l.parent;return{name:s,path:a,params:c,matched:i,meta:ne(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function J(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ee(e){const t={},n=e.props||!1;
// props does not exist on redirect records, but we can set false directly
if("component"in e)t.default=n;else
// NOTE: we could also allow a function to be applied to every component.
// Would need user feedback for use cases
for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */function te(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */function ne(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function re(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function oe(e,t){return t.children.some((t=>t===e||oe(e,t)))}
/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const ae=/#/g,se=/&/g,ce=/\//g,ie=/=/g,le=/\?/g,ue=/\+/g,fe=/%5B/g,pe=/%5D/g,he=/%5E/g,de=/%60/g,me=/%7B/g,ge=/%7C/g,ve=/%7D/g,ye=/%20/g;// %23
// }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function be(e){return encodeURI(""+e).replace(ge,"|").replace(fe,"[").replace(pe,"]")}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function we(e){return be(e).replace(ue,"%2B").replace(ye,"+").replace(ae,"%23").replace(se,"%26").replace(de,"`").replace(me,"{").replace(ve,"}").replace(he,"^")}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function Ee(e){return null==e?"":
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function(e){return be(e).replace(ae,"%23").replace(le,"%3F")}(e).replace(ce,"%2F")}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */function ke(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}
/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */function Oe(e){const t={};
// avoid creating an object with an empty key and empty value
// because of split('&')
if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){
// pre decode the + into space
const e=n[r].replace(ue," "),o=e.indexOf("="),a=ke(o<0?e:e.slice(0,o)),s=o<0?null:ke(e.slice(o+1));
// allow the = character
if(a in t){
// an extra variable for ts types
let e=t[a];m(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */function Re(e){let t="";for(let n in e){const r=e[n];if(n=we(n).replace(ie,"%3D"),null==r){
// only null adds the value
void 0!==r&&(t+=(t.length?"&":"")+n);continue}
// keep null values
(m(r)?r.map((e=>e&&we(e))):[r&&we(r)]).forEach((e=>{
// skip undefined values in arrays as if they were not present
// smaller code than using filter
void 0!==e&&(
// only append & with non-empty search
t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */function xe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=m(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}
/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */const Ce=Symbol(""),Pe=Symbol(""),$e=Symbol(""),je=Symbol(""),Se=Symbol("");
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */
/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function Ae(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function qe(e,t,n,r,o){
// keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
const a=r&&(
// name is defined if record is because of the function overload
r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,c)=>{const i=e=>{var i;!1===e?c(U(4/* ErrorTypes.NAVIGATION_ABORTED */,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(i=e)||i&&"object"==typeof i?c(U(2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */,{from:t,to:e})):(a&&
// since enterCallbackArray is truthy, both record and name also are
r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},l=e.call(r&&r.instances[o],t,n,i);
// wrapping with Promise.resolve allows it to work with both async and sync guards
let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>c(e)))}))}function Le(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let c=s.components[e];
// skip update and leave guards if the route component is not mounted
if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=c)||"displayName"in a||"props"in a||"__vccOpts"in a){
// __vccOpts is added by vue-class-component and contain the regular options
const a=(c.__vccOpts||c)[t];a&&o.push(qe(a,n,r,s,e))}else{
// start requesting the chunk already
let a=c();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(c=o).__esModule||"Module"===c[Symbol.toStringTag]?o.default:o;
// replace the function with the resolved component
// cannot be null or undefined because we went into the for loop
var c;s.components[e]=a;
// __vccOpts is added by vue-class-component and contain the regular options
const i=(a.__vccOpts||a)[t];return i&&qe(i,n,r,s,e)()}))))}}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @internal
 *
 * @param component
 */
var a;
// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
return o}function Me(e){const r=s($e),o=s(je),a=n((()=>r.resolve(t(e.to)))),c=n((()=>{const{matched:e}=a.value,{length:t}=e,n=e[t-1],r=o.matched;if(!n||!r.length)return-1;const s=r.findIndex(w.bind(null,n));if(s>-1)return s;
// possible parent record
const c=Ge(e[t-2]);
// we are dealing with nested routes
return t>1&&
// if the parent and matched route have the same path, this link is
// referring to the empty child. Or we currently are on a different
// child of the same parent
Ge(n)===c&&
// avoid comparing the child with its parent
r[r.length-1].path!==c?r.findIndex(w.bind(null,e[t-2])):s})),i=n((()=>c.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!m(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */(o.params,a.value.params))),l=n((()=>c.value>-1&&c.value===o.matched.length-1&&E(o.params,a.value.params)));
/**
     * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
     */
return{route:a,href:n((()=>a.value.href)),isActive:i,isExactActive:l,navigate:function(n={}){return function(e){
// don't redirect with control keys
if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;
// don't redirect when preventDefault called
if(e.defaultPrevented)return;
// don't redirect on right click
if(void 0!==e.button&&0!==e.button)return;
// don't redirect if `target="_blank"`
// @ts-expect-error getAttribute does exist
if(e.currentTarget&&e.currentTarget.getAttribute){
// @ts-expect-error getAttribute exists
const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}
// this may be a Weex event which doesn't have this method
e.preventDefault&&e.preventDefault();return!0}(n)?r[t(e.replace)?"replace":"push"](t(e.to)).catch(d):Promise.resolve()}}}const Be=a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,
// inactiveClass: String,
exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Me,setup(e,{slots:t}){const o=r(Me(e)),{options:a}=s($e),i=n((()=>({[_e(e.activeClass,a.linkActiveClass,"router-link-active")]:o.isActive,
// [getLinkClass(
//   props.inactiveClass,
//   options.linkInactiveClass,
//   'router-link-inactive'
// )]: !link.isExactActive,
[_e(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive})));return()=>{const n=t.default&&t.default(o);return e.custom?n:c("a",{"aria-current":o.isExactActive?e.ariaCurrentValue:null,href:o.href,
// this would override user added attrs but Vue will still add
// the listener, so we end up triggering both
onClick:o.navigate,class:i.value},n)}}});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */function Ge(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */const _e=(e,t,n)=>null!=e?e:null!=t?t:n;function Ie(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */const We=a({name:"RouterView",
// #674 we manually inherit them
inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},
// Better compat for @vue/compat users
// https://github.com/vuejs/router/issues/1315
compatConfig:{MODE:3},setup(e,{attrs:r,slots:o}){const a=s(Se),f=n((()=>e.route||a.value)),h=s(Pe,0),d=n((()=>{let e=t(h);const{matched:n}=f.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),m=n((()=>f.value.matched[d.value]));i(Pe,n((()=>d.value+1))),i(Ce,m),i(Se,f);const g=l();
// watch at the same time the component instance, the route record we are
// rendering, and the name
return u((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{
// copy reused instances
t&&(
// this will update the instance for new instances as well as reused
// instances when navigating to a new route
t.instances[n]=e,
// the component instance is reused for a different route or name, so
// we copy any saved update or leave guards. With async setup, the
// mounting component will mount before the matchedRoute changes,
// making instance === oldInstance, so we check if guards have been
// added before. This works because we remove guards when
// unmounting/deactivating components
o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),
// trigger beforeRouteEnter next callbacks
!e||!t||
// if there is no instance but to and from are the same this might be
// the first visit
o&&w(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const t=f.value,n=e.name,a=m.value,s=a&&a.components[n];
// we need the value at the time we render because when we unmount, we
// navigated to a different location so the value is different
if(!s)return Ie(o.default,{Component:s,route:t});
// props from route configuration
const i=a.props[n],l=i?!0===i?t.params:"function"==typeof i?i(t):i:null,u=c(s,p({},l,r,{onVnodeUnmounted:e=>{
// remove the instance reference to prevent leak
e.component.isUnmounted&&(a.instances[n]=null)},ref:g}));
// pass the vnode to the slot as a prop.
// h and <component :is="..."> both accept vnodes
return Ie(o.default,{Component:u,route:t})||u}}});
/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */function De(a){const s=Z(a.routes,a),c=a.parseQuery||Oe,i=a.stringifyQuery||Re,l=a.history,u=Ae(),g=Ae(),v=Ae(),b=e(I);let k=I;
// leave the scrollRestoration if no scrollBehavior is provided
f&&a.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const O=h.bind(null,(e=>""+e)),x=h.bind(null,Ee),C=
// @ts-expect-error: intentionally avoid the type check
h.bind(null,ke);function P(e,t){if(
// const objectLocation = routerLocationAsObject(rawLocation)
// we create a copy to modify it later
t=p({},t||b.value),"string"==typeof e){const n=y(c,e,t.path),r=s.resolve({path:n.path},t),o=l.createHref(n.fullPath);
// locationNormalized is always a new object
return p(n,r,{params:C(r.params),hash:ke(n.hash),redirectedFrom:void 0,href:o})}let n;
// path could be relative in object as well
if("path"in e)n=p({},e,{path:y(c,e.path,t.path).path});else{
// remove any nullish param
const r=p({},e.params);for(const e in r)null==r[e]&&delete r[e];
// pass encoded values to the matcher, so it can produce encoded path and fullPath
n=p({},e,{params:x(r)}),
// current location params are decoded, we need to encode them in case the
// matcher merges the params
t.params=x(t.params)}const r=s.resolve(n,t),o=e.hash||"";
// the matcher might have merged current location params, so
// we need to run the decoding again
r.params=O(C(r.params));const a=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,p({},e,{hash:(u=o,be(u).replace(me,"{").replace(ve,"}").replace(he,"^")),path:r.path}));var u;const f=l.createHref(a);return p({fullPath:a,
// keep the hash encoded so fullPath is effectively path + encodedQuery +
// hash
hash:o,query:
// if the user is using a custom query lib like qs, we might have
// nested objects, so we keep the query as is, meaning it can contain
// numbers at `$route.query`, but at the point, the user will have to
// use their own type anyway.
// https://github.com/vuejs/router/issues/328#issuecomment-649481567
i===Re?xe(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function q(e){return"string"==typeof e?y(c,e,b.value.path):p({},e)}function L(e,t){if(k!==e)return U(8/* ErrorTypes.NAVIGATION_CANCELLED */,{from:t,to:e})}function M(e){return G(e)}function B(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=q(r):// force empty params
{path:r},
// @ts-expect-error: force empty params when a string is passed to let
// the router parse them again
r.params={}),p({query:e.query,hash:e.hash,
// avoid transferring params if the redirect has a path
params:"path"in r?{}:e.params},r)}}function G(e,t){const n=k=P(e),r=b.value,o=e.state,a=e.force,s=!0===e.replace,c=B(n);if(c)return G(p(q(c),{state:"object"==typeof c?p({},o,c.state):o,force:a,replace:s}),
// keep original redirectedFrom if it exists
t||n);
// if it was a redirect we already called `pushWithRedirect` above
const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&w(t.matched[r],n.matched[o])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(u=U(16/* ErrorTypes.NAVIGATION_DUPLICATED */,{to:l,from:r}),
// trigger scroll to allow scrolling to the same anchor
ee(r,r,
// this is a push, the only way for it to be triggered from a
// history.listen is with a redirect, which makes it become a push
!0,
// This cannot be the first navigation because the initial location
// cannot be manually navigated to
!1)),(u?Promise.resolve(u):T(l,r)).catch((e=>F(e)?// navigation redirects still mark the router as ready
F(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)?e:J(e):// reject any unknown error
N(e,l,r))).then((e=>{if(e){if(F(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */))return G(
// keep options
p({
// preserve an existing replacement but allow the redirect to override it
replace:s},q(e.to),{state:"object"==typeof e.to?p({},o,e.to.state):o,force:a}),
// preserve the original redirectedFrom if any
t||l)}else
// if we fail we don't finalize the navigation
e=z(l,r,!0,s,o);return V(l,r,e),e}))}
/**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */function W(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function D(e){const t=re.values().next().value;
// support Vue < 3.3
return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}
// TODO: refactor the whole before guards by internally using router.beforeEach
function T(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>w(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(
// the type doesn't matter because we are comparing per reference
t.matched.find((e=>w(e,c)))||o.push(c))}return[n,r,o]}
/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */(e,t);
// all components here have been resolved once because we are leaving
n=Le(r.reverse(),"beforeRouteLeave",e,t);
// leavingRecords is already reversed
for(const c of r)c.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const s=W.bind(null,e,t);
// run the queue of per route beforeRouteLeave guards
return n.push(s),ae(n).then((()=>{
// check global guards beforeEach
n=[];for(const r of u.list())n.push(qe(r,e,t));return n.push(s),ae(n)})).then((()=>{
// check in components beforeRouteUpdate
n=Le(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));
// run the queue of per route beforeEnter guards
return n.push(s),ae(n)})).then((()=>{
// check the route beforeEnter
n=[];for(const r of e.matched)
// do not trigger beforeEnter on reused views
if(r.beforeEnter&&!t.matched.includes(r))if(m(r.beforeEnter))for(const o of r.beforeEnter)n.push(qe(o,e,t));else n.push(qe(r.beforeEnter,e,t));
// run the queue of per route beforeEnter guards
return n.push(s),ae(n)})).then((()=>(
// NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
// clear existing enterCallbacks, these are added by extractComponentsGuards
e.matched.forEach((e=>e.enterCallbacks={})),
// check in-component beforeRouteEnter
n=Le(a,"beforeRouteEnter",e,t),n.push(s),ae(n)))).then((()=>{
// check global guards beforeResolve
n=[];for(const r of g.list())n.push(qe(r,e,t));return n.push(s),ae(n)})).catch((e=>F(e,8/* ErrorTypes.NAVIGATION_CANCELLED */)?e:Promise.reject(e)))}function V(e,t,n){
// navigation is confirmed, call afterGuards
// TODO: wrap with error handlers
for(const r of v.list())D((()=>r(e,t,n)))}
/**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */function z(e,t,n,r,o){
// a more recent navigation took place
const a=L(e,t);if(a)return a;
// only consider as push if it's not the first navigation
const s=t===I,c=f?history.state:{};
// change URL only if the user did a push/replace and if it's not the initial navigation because
// it's just reflecting the url
n&&(
// on the initial navigation, we want to reuse the scroll position from
// history state if it exists
r||s?l.replace(e.fullPath,p({scroll:s&&c&&c.scroll},o)):l.push(e.fullPath,o)),
// accept current navigation
b.value=e,ee(e,t,n,s),J()}let H;
// attach listener to history to trigger navigations
function K(){
// avoid setting up listeners twice due to an invalid first navigation
H||(H=l.listen(((e,t,n)=>{if(!oe.listening)return;
// cannot be a redirect route because it was in history
const r=P(e),o=B(r);
// due to dynamic routing, and to hash history with manual navigation
// (manually changing the url or calling history.hash = '#/somewhere'),
// there could be a redirect record in history
if(o)return void G(p(o,{replace:!0}),r).catch(d);k=r;const a=b.value;
// TODO: should be moved to web history?
var s,c;f&&(s=S(a.fullPath,n.delta),c=$(),A.set(s,c)),T(r,a).catch((e=>F(e,12/* ErrorTypes.NAVIGATION_CANCELLED */)?e:F(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)?(
// Here we could call if (info.delta) routerHistory.go(-info.delta,
// false) but this is bug prone as we have no way to wait the
// navigation to be finished before calling pushWithRedirect. Using
// a setTimeout of 16ms seems to work but there is no guarantee for
// it to work on every browser. So instead we do not restore the
// history entry and trigger a new navigation as requested by the
// navigation guard.
// the error is already handled by router.push we just want to avoid
// logging the error
G(e.to,r).then((e=>{
// manual change in hash history #916 ending up in the URL not
// changing, but it was changed by the manual url change, so we
// need to manually change it ourselves
F(e,20/* ErrorTypes.NAVIGATION_DUPLICATED */)&&!n.delta&&n.type===R.pop&&l.go(-1,!1)})).catch(d),Promise.reject()):(
// do not restore history on unknown direction
n.delta&&l.go(-n.delta,!1),N(e,r,a)))).then((e=>{
// revert the navigation
(e=e||z(
// after navigation, all matched components are resolved
r,a,!1))&&(n.delta&&
// a new navigation has been triggered, so we do not want to revert, that will change the current history
// entry while a different route is displayed
!F(e,8/* ErrorTypes.NAVIGATION_CANCELLED */)?l.go(-n.delta,!1):n.type===R.pop&&F(e,20/* ErrorTypes.NAVIGATION_DUPLICATED */)&&
// manual change in hash history #916
// it's like a push but lacks the information of the direction
l.go(-1,!1)),V(r,a,e)})).catch(d)})))}
// Initialization and Errors
let Q,X=Ae(),Y=Ae();
/**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */
function N(e,t,n){J(e);const r=Y.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function J(e){return Q||(
// still not ready if an error happened
Q=!e,K(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset()),e}
// Scroll behavior
function ee(e,t,n,r){const{scrollBehavior:s}=a;if(!f||!s)return Promise.resolve();const c=!n&&function(e){const t=A.get(e);
// consume it so it's not used again
return A.delete(e),t}(S(e.fullPath,0))||(r||!n)&&history.state&&history.state.scroll||null;return o().then((()=>s(e,t,c))).then((e=>e&&j(e))).catch((n=>N(n,e,t)))}const te=e=>l.go(e);let ne;const re=new Set,oe={currentRoute:b,listening:!0,addRoute:function(e,t){let n,r;return _(e)?(n=s.getRecordMatcher(e),r=t):r=e,s.addRoute(r,n)},removeRoute:function(e){const t=s.getRecordMatcher(e);t&&s.removeRoute(t)},hasRoute:function(e){return!!s.getRecordMatcher(e)},getRoutes:function(){return s.getRoutes().map((e=>e.record))},resolve:P,options:a,push:M,replace:function(e){return M(p(q(e),{replace:!0}))},go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:u.add,beforeResolve:g.add,afterEach:v.add,onError:Y.add,isReady:function(){return Q&&b.value!==I?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))},install(e){e.component("RouterLink",Be),e.component("RouterView",We),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(b)}),
// this initial navigation is only necessary on client, on server it doesn't
// make sense because it will create an extra unnecessary navigation and could
// lead to problems
f&&
// used for the initial navigation client side to avoid pushing
// multiple times when the router is used in multiple apps
!ne&&b.value===I&&(
// see above
ne=!0,M(l.location).catch((e=>{})));const o={};for(const t in I)
// @ts-expect-error: the key matches
o[t]=n((()=>b.value[t]));e.provide($e,this),e.provide(je,r(o)),e.provide(Se,b);const a=e.unmount;re.add(e),e.unmount=function(){re.delete(e),
// the router is not attached to an app anymore
re.size<1&&(
// invalidate the current navigation
k=I,H&&H(),H=null,b.value=I,ne=!1,Q=!1),a()}}};
// TODO: type this as NavigationGuardReturn or similar instead of any
function ae(e){return e.reduce(((e,t)=>e.then((()=>D(t)))),Promise.resolve())}return oe}function Ue(){return s($e)}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */function Fe(){return s(je)}export{G as a,Ue as b,De as c,Fe as u};

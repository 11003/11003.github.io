function e(e,t){return function(){return e.apply(t,arguments)}}
// utils is a library of generic helper functions non-specific to axios
const{toString:t}=Object.prototype,{getPrototypeOf:n}=Object,r=(o=Object.create(null),e=>{const n=t.call(e);return o[n]||(o[n]=n.slice(8,-1).toLowerCase())});var o;const s=e=>(e=e.toLowerCase(),t=>r(t)===e),i=e=>t=>typeof t===e
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */,{isArray:a}=Array,c=i("undefined");
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const u=s("ArrayBuffer");
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const l=i("string"),f=i("function"),d=i("number"),p=e=>null!==e&&"object"==typeof e
/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */,h=e=>{if("object"!==r(e))return!1;const t=n(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},m=s("Date"),y=s("File"),g=s("Blob"),b=s("FileList"),E=s("URLSearchParams");
/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function w(e,t,{allOwnKeys:n=!1}={}){
// Don't bother if no value provided
if(null==e)return;let r,o;if(
// Force an array if not already something iterable
"object"!=typeof e&&(
/*eslint no-param-reassign:0*/
e=[e]),a(e))
// Iterate over array values
for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{
// Iterate over object keys
const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const S=
/*eslint no-undef:0*/
"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,R=e=>!c(e)&&e!==S
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */;
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const A=(T="undefined"!=typeof Uint8Array&&n(Uint8Array),e=>T&&e instanceof T);
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */var T;
/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const N=s("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),C=s("RegExp"),v=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};w(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},x="abcdefghijklmnopqrstuvwxyz",P="0123456789",U={DIGIT:P,ALPHA:x,ALPHA_DIGIT:x+x.toUpperCase()+P};
/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */const _=s("AsyncFunction"),F={isArray:a,isArrayBuffer:u,isBuffer:
/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&f(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||f(e.append)&&("formdata"===(t=r(e))||
// detect form-data instance
"object"===t&&f(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer),t},isString:l,isNumber:d,isBoolean:e=>!0===e||!1===e
/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */,isObject:p,isPlainObject:h,isUndefined:c,isDate:m,isFile:y,isBlob:g,isRegExp:C,isFunction:f,isStream:e=>p(e)&&f(e.pipe)
/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */,isURLSearchParams:E,isTypedArray:A,isFileList:b,forEach:w,merge:function e(){const{caseless:t}=R(this)&&this||{},n={},r=(r,o)=>{const s=t&&O(n,o)||o;h(n[s])&&h(r)?n[s]=e(n[s],r):h(r)?n[s]=e({},r):a(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&w(arguments[o],r);return n},extend:(t,n,r,{allOwnKeys:o}={})=>(w(n,((n,o)=>{r&&f(n)?t[o]=e(n,r):t[o]=n}),{allOwnKeys:o}),t),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,r,o)=>{let s,i,a;const c={};
// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&n(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:r,kindOfTest:s,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(a(e))return e;let t=e.length;if(!d(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:j,hasOwnProp:j,// an alias to avoid ESLint no-prototype-builtins detection
reduceDescriptors:v,freezeMethods:e=>{v(e,((t,n)=>{
// skip restricted props in strict mode
if(f(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];f(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return a(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:O,global:S,isContextDefined:R,ALPHABET:U,generateString:(e=16,t=U.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:
/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function(e){return!!(e&&f(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(p(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=a(e)?[]:{};return w(e,((e,t)=>{const s=n(e,r+1);!c(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:_,isThenable:e=>e&&(p(e)||f(e))&&f(e.then)&&f(e.catch)};
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function B(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}F.inherits(B,Error,{toJSON:function(){return{
// Standard
message:this.message,name:this.name,
// Microsoft
description:this.description,number:this.number,
// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,
// Axios
config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const L=B.prototype,D={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{D[e]={value:e}})),Object.defineProperties(B,D),Object.defineProperty(L,"isAxiosError",{value:!0}),
// eslint-disable-next-line func-names
B.from=(e,t,n,r,o,s)=>{const i=Object.create(L);return F.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),B.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};
/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function k(e){return F.isPlainObject(e)||F.isArray(e)}
/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function q(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}
/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function I(e,t,n){return e?e.concat(t).map((function(e,t){
// eslint-disable-next-line no-param-reassign
return e=q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}
/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */const z=F.toFlatObject(F,{},null,(function(e){return/^is[A-Z]/.test(e)}));
/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/
/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function M(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");
// eslint-disable-next-line no-param-reassign
t=t||new FormData;const r=(
// eslint-disable-next-line no-param-reassign
n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){
// eslint-disable-next-line no-eq-null,eqeqeq
return!F.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&F.isSpecCompliantForm(t);
// eslint-disable-next-line no-use-before-define
if(!F.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(F.isDate(e))return e.toISOString();if(!a&&F.isBlob(e))throw new B("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(e)||F.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}
/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(F.endsWith(n,"{}"))
// eslint-disable-next-line no-param-reassign
n=r?n:n.slice(0,-2),
// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else if(F.isArray(e)&&function(e){return F.isArray(e)&&!e.some(k)}(e)||(F.isFileList(e)||F.endsWith(n,"[]"))&&(a=F.toArray(e)))
// eslint-disable-next-line no-param-reassign
return n=q(n),a.forEach((function(e,r){!F.isUndefined(e)&&null!==e&&t.append(
// eslint-disable-next-line no-nested-ternary
!0===i?I([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!k(e)||(t.append(I(o,n,s),c(e)),!1)}const l=[],f=Object.assign(z,{defaultVisitor:u,convertValue:c,isVisitable:k});if(!F.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!F.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),F.forEach(n,(function(n,s){!0===(!(F.isUndefined(n)||null===n)&&o.call(t,n,F.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}
/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function H(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}
/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function J(e,t){this._pairs=[],e&&M(e,this,t)}const W=J.prototype;
/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function K(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */function V(e,t,n){
/*eslint no-param-reassign:0*/
if(!t)return e;const r=n&&n.encode||K,o=n&&n.serialize;let s;if(s=o?o(t,n):F.isURLSearchParams(t)?t.toString():new J(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}W.append=function(e,t){this._pairs.push([e,t])},W.toString=function(e){const t=e?function(t){return e.call(this,t,H)}:H;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const G=class{constructor(){this.handlers=[]}
/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}
/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}
/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}
/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){F.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},$={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},X={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:J,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&
// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};
/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function Q(e){function t(e,n,r,o){let s=e[o++];const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&F.isArray(r)?r.length:s,a)return F.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&F.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&F.isArray(r[s])&&(r[s]=
/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(F.isFormData(e)&&F.isFunction(e.entries)){const n={};return F.forEachEntry(e,((e,r)=>{t(
/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function(e){
// foo[x][y][z]
// foo.x.y.z
// foo-x-y-z
// foo x y z
return F.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const Z={"Content-Type":void 0};
/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */const Y={transitional:$,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=F.isObject(e);o&&F.isHTMLForm(e)&&(e=new FormData(e));if(F.isFormData(e))return r&&r?JSON.stringify(Q(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return M(e,new X.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return X.isNode&&F.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=F.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return M(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Y.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&F.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw B.from(o,B.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],
/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:X.classes.FormData,Blob:X.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};F.forEach(["delete","get","head"],(function(e){Y.headers[e]={}})),F.forEach(["post","put","patch"],(function(e){Y.headers[e]=F.merge(Z)}));const ee=Y,te=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ne=Symbol("internals");
// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
function re(e){return e&&String(e).trim().toLowerCase()}function oe(e){return!1===e||null==e?e:F.isArray(e)?e.map(oe):String(e)}function se(e,t,n,r,o){return F.isFunction(r)?r.call(this,t,n):(o&&(t=n),F.isString(t)?F.isString(r)?-1!==t.indexOf(r):F.isRegExp(r)?r.test(t):void 0:void 0)}class ie{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=re(t);if(!o)throw new Error("header name must be a non-empty string");const s=F.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=oe(e))}const s=(e,t)=>F.forEach(e,((e,n)=>o(e,n,t)));return F.isPlainObject(e)||e instanceof this.constructor?s(e,t):F.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&te[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=re(e)){const n=F.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(F.isFunction(t))return t.call(this,e,n);if(F.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=re(e)){const n=F.findKey(this,e);return!(!n||void 0===this[n]||t&&!se(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=re(e)){const o=F.findKey(n,e);!o||t&&!se(0,n[o],o,t)||(delete n[o],r=!0)}}return F.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!se(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return F.forEach(this,((r,o)=>{const s=F.findKey(n,o);if(s)return t[s]=oe(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=oe(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return F.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&F.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ne]=this[ne]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=re(e);t[r]||(!function(e,t){const n=F.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return F.isArray(e)?e.forEach(r):r(e),this}}ie.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),F.freezeMethods(ie.prototype),F.freezeMethods(ie);const ae=ie;
/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */function ce(e,t){const n=this||ee,r=t||n,o=ae.from(r.headers);let s=r.data;return F.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ue(e){return!(!e||!e.__CANCEL__)}
/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function le(e,t,n){
// eslint-disable-next-line no-eq-null,eqeqeq
B.call(this,null==e?"canceled":e,B.ERR_CANCELED,t,n),this.name="CanceledError"}F.inherits(le,B,{__CANCEL__:!0});const fe=X.isStandardBrowserEnv?{write:function(e,t,n,r,o,s){const i=[];i.push(e+"="+encodeURIComponent(t)),F.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),F.isString(r)&&i.push("path="+r),F.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function de(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const pe=X.isStandardBrowserEnv?
// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;
/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function r(n){let r=n;
// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(
// IE needs attribute set twice to normalize properties
t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}
/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
return n=r(window.location.href),function(e){const t=F.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function he(e,t){let n=0;const r=
/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const me={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ae.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}F.isFormData(r)&&(X.isStandardBrowserEnv||X.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;
// HTTP basic authentication
if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=de(e.baseURL,e.url);function l(){if(!c)return;
// Prepare the response
const r=ae.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new B("Request failed with status code "+n.status,[B.ERR_BAD_REQUEST,B.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),
// Clean up request
c=null}
// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(c.open(e.method.toUpperCase(),V(u,e.params,e.paramsSerializer),!0),
// Set the request timeout in MS
c.timeout=e.timeout,"onloadend"in c?
// Use onloadend if available
c.onloadend=l:
// Listen for ready state to emulate onloadend
c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&
// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(l);
// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
},
// Handle browser request cancellation (as opposed to a manual cancellation)
c.onabort=function(){c&&(n(new B("Request aborted",B.ECONNABORTED,e,c)),
// Clean up request
c=null)},
// Handle low level network errors
c.onerror=function(){
// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new B("Network Error",B.ERR_NETWORK,e,c)),
// Clean up request
c=null},
// Handle timeout
c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||$;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new B(t,r.clarifyTimeoutError?B.ETIMEDOUT:B.ECONNABORTED,e,c)),
// Clean up request
c=null},X.isStandardBrowserEnv){
// Add xsrf header
const t=(e.withCredentials||pe(u))&&e.xsrfCookieName&&fe.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}
// Remove Content-Type if data is undefined
void 0===r&&o.setContentType(null),
// Add headers to the request
"setRequestHeader"in c&&F.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),
// Add withCredentials to request if needed
F.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),
// Add responseType to request if needed
s&&"json"!==s&&(c.responseType=e.responseType),
// Handle progress if needed
"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",he(e.onDownloadProgress,!0)),
// Not all browsers support upload events
"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(
// Handle cancellation
// eslint-disable-next-line func-names
i=t=>{c&&(n(!t||t.type?new le(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===X.protocols.indexOf(f)?n(new B("Unsupported protocol "+f+":",B.ERR_BAD_REQUEST,e)):
// Send the request
c.send(r||null)}))}};F.forEach(me,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){
// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}}));const ye=e=>{e=F.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=F.isString(n)?me[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new B(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(F.hasOwnProp(me,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!F.isFunction(r))throw new TypeError("adapter is not a function");return r};
/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function ge(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new le(null,e)}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */function be(e){ge(e),e.headers=ae.from(e.headers),
// Transform request data
e.data=ce.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ye(e.adapter||ee.adapter)(e).then((function(t){return ge(e),
// Transform response data
t.data=ce.call(e,e.transformResponse,t),t.headers=ae.from(t.headers),t}),(function(t){return ue(t)||(ge(e),
// Transform response data
t&&t.response&&(t.response.data=ce.call(e,e.transformResponse,t.response),t.response.headers=ae.from(t.response.headers))),Promise.reject(t)}))}const Ee=e=>e instanceof ae?e.toJSON():e
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */;function we(e,t){
// eslint-disable-next-line no-param-reassign
t=t||{};const n={};function r(e,t,n){return F.isPlainObject(e)&&F.isPlainObject(t)?F.merge.call({caseless:n},e,t):F.isPlainObject(t)?F.merge({},t):F.isArray(t)?t.slice():t}
// eslint-disable-next-line consistent-return
function o(e,t,n){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}
// eslint-disable-next-line consistent-return
function s(e,t){if(!F.isUndefined(t))return r(void 0,t)}
// eslint-disable-next-line consistent-return
function i(e,t){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}
// eslint-disable-next-line consistent-return
function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ee(e),Ee(t),!0)};return F.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);F.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Oe="1.4.0",Se={};
// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Se[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Re={};
/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */Se.transitional=function(e,t,n){
// eslint-disable-next-line func-names
return(r,o,s)=>{if(!1===e)throw new B(function(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),B.ERR_DEPRECATED);return t&&!Re[o]&&(Re[o]=!0),!e||e(r,o,s)}};const Ae={assertOptions:
/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */
function(e,t,n){if("object"!=typeof e)throw new B("options must be an object",B.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new B("option "+s+" must be "+n,B.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new B("Unknown option "+s,B.ERR_BAD_OPTION)}},validators:Se},Te=Ae.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Ne{constructor(e){this.defaults=e,this.interceptors={request:new G,response:new G}}
/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){
/*eslint no-param-reassign:0*/
// Allow for axios('example/url'[, config]) a la fetch API
"string"==typeof e?(t=t||{}).url=e:t=e||{},t=we(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let s;
// Flatten headers
void 0!==n&&Ae.assertOptions(n,{silentJSONParsing:Te.transitional(Te.boolean),forcedJSONParsing:Te.transitional(Te.boolean),clarifyTimeoutError:Te.transitional(Te.boolean)},!1),null!=r&&(F.isFunction(r)?t.paramsSerializer={serialize:r}:Ae.assertOptions(r,{encode:Te.function,serialize:Te.function},!0)),
// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=o&&F.merge(o.common,o[t.method]),s&&F.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ae.concat(s,o);
// filter out skipped interceptors
const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[be.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=be.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return V(de((e=we(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}
// Provide aliases for supported request methods
F.forEach(["delete","get","head","options"],(function(e){
/*eslint func-names:0*/
Ne.prototype[e]=function(t,n){return this.request(we(n||{},{method:e,url:t,data:(n||{}).data}))}})),F.forEach(["post","put","patch"],(function(e){
/*eslint func-names:0*/
function t(t){return function(n,r,o){return this.request(we(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ne.prototype[e]=t(),Ne.prototype[e+"Form"]=t(!0)}));const je=Ne;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class Ce{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;
// eslint-disable-next-line func-names
this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),
// eslint-disable-next-line func-names
this.promise.then=e=>{let t;
// eslint-disable-next-line func-names
const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new le(e,r,o),t(n.reason))}))}
/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}
/**
   * Subscribe to the cancel signal
   */subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}
/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}
/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;return{token:new Ce((function(t){e=t})),cancel:e}}}const ve=Ce;
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */const xe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(xe).forEach((([e,t])=>{xe[t]=e}));const Pe=xe;
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
// Create the default instance to be exported
const Ue=function t(n){const r=new je(n),o=e(je.prototype.request,r);
// Copy axios.prototype to instance
return F.extend(o,je.prototype,r,{allOwnKeys:!0}),
// Copy context to instance
F.extend(o,r,null,{allOwnKeys:!0}),
// Factory for creating new instances
o.create=function(e){return t(we(n,e))},o}(ee);
// Expose Axios class to allow class inheritance
Ue.Axios=je,
// Expose Cancel & CancelToken
Ue.CanceledError=le,Ue.CancelToken=ve,Ue.isCancel=ue,Ue.VERSION=Oe,Ue.toFormData=M,
// Expose AxiosError class
Ue.AxiosError=B,
// alias for CanceledError for backward compatibility
Ue.Cancel=Ue.CanceledError,
// Expose all/spread
Ue.all=function(e){return Promise.all(e)},Ue.spread=function(e){return function(t){return e.apply(null,t)}}
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */,
// Expose isAxiosError
Ue.isAxiosError=function(e){return F.isObject(e)&&!0===e.isAxiosError},
// Expose mergeConfig
Ue.mergeConfig=we,Ue.AxiosHeaders=ae,Ue.formToJSON=e=>Q(F.isHTMLForm(e)?new FormData(e):e),Ue.HttpStatusCode=Pe,Ue.default=Ue;
// this module should only have a default export
const _e=Ue;export{_e as a};

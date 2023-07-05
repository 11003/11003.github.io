import{w as t,v as e,ag as o,H as n,ah as r,t as i}from"./@vue-77a387ba.js";
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var a="store";function s(t){return void 0===t&&(t=null),e(null!==t?t:a)}
/**
 * forEach for object
 */function c(t,e){Object.keys(t).forEach((function(o){return e(t[o],o)}))}function u(t,e,o){return e.indexOf(t)<0&&(o&&o.prepend?e.unshift(t):e.push(t)),function(){var o=e.indexOf(t);o>-1&&e.splice(o,1)}}function l(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var o=t.state;
// init all modules
p(t,o,[],t._modules.root,!0),
// reset state
d(t,o,e)}function d(e,r,a){var s=e._state,u=e._scope;
// bind store public getters
e.getters={},
// reset local getters cache
e._makeLocalGettersCache=Object.create(null);var l=e._wrappedGetters,d={},p={},f=o(!0);f.run((function(){c(l,(function(t,o){
// use computed to leverage its lazy-caching mechanism
// direct inline function use will lead to closure preserving oldState.
// using partial to return function with only arguments preserved in closure environment.
d[o]=function(t,e){return function(){return t(e)}}(t,e),p[o]=i((function(){return d[o]()})),Object.defineProperty(e.getters,o,{get:function(){return p[o].value},enumerable:!0})}))})),e._state=n({data:r}),
// register the newly created effect scope to the store so that we can
// dispose the effects when this method runs again in the future.
e._scope=f,
// enable strict mode for new state
e.strict&&function(e){t((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),s&&a&&
// dispatch changes in all subscribed watchers
// to force getter re-evaluation for hot reloading.
e._withCommit((function(){s.data=null})),
// dispose previously registered effect scope if there is one.
u&&u.stop()}function p(t,e,o,n,r){var i=!o.length,a=t._modules.getNamespace(o);
// set state
if(
// register in namespace map
n.namespaced&&(t._modulesNamespaceMap[a],t._modulesNamespaceMap[a]=n),!i&&!r){var s=h(e,o.slice(0,-1)),c=o[o.length-1];t._withCommit((function(){s[c]=n.state}))}var u=n.context=
/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function(t,e,o){var n=""===e,r={dispatch:n?t.dispatch:function(o,n,r){var i=m(o,n,r),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:n?t.commit:function(o,n,r){var i=m(o,n,r),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};
// getters and state object must be gotten lazily
// because they will be changed by state update
return Object.defineProperties(r,{getters:{get:n?function(){return t.getters}:function(){return f(t,e)}},state:{get:function(){return h(t.state,o)}}}),r}(t,a,o);n.forEachMutation((function(e,o){!function(t,e,o,n){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){o.call(t,n.state,e)}))}(t,a+o,e,u)})),n.forEachAction((function(e,o){var n=e.root?o:a+o,r=e.handler||e;!function(t,e,o,n){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r,i=o.call(t,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:t.getters,rootState:t.state},e);return(r=i)&&"function"==typeof r.then||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}(t,n,r,u)})),n.forEachGetter((function(e,o){!function(t,e,o,n){if(t._wrappedGetters[e])return;t._wrappedGetters[e]=function(t){return o(n.state,// local state
n.getters,// local getters
t.state,// root state
t.getters)}}(t,a+o,e,u)})),n.forEachChild((function(n,i){p(t,e,o.concat(i),n,r)}))}function f(t,e){if(!t._makeLocalGettersCache[e]){var o={},n=e.length;Object.keys(t.getters).forEach((function(r){
// skip if the target getter is not match this namespace
if(r.slice(0,n)===e){
// extract local getter type
var i=r.slice(n);
// Add a port to the getters proxy.
// Define as getter property because
// we do not want to evaluate the getters in this time.
Object.defineProperty(o,i,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=o}return t._makeLocalGettersCache[e]}function h(t,e){return e.reduce((function(t,e){return t[e]}),t)}function m(t,e,o){var n;return null!==(n=t)&&"object"==typeof n&&t.type&&(o=e,e=t,t=t.type),{type:t,payload:e,options:o}}var _="vuex:mutations",v="vuex:actions",g="vuex",y=0;function b(t,e){r({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(o){o.addTimelineLayer({id:_,label:"Vuex Mutations",color:w}),o.addTimelineLayer({id:v,label:"Vuex Actions",color:w}),o.addInspector({id:g,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),o.on.getInspectorTree((function(o){if(o.app===t&&o.inspectorId===g)if(o.filter){var n=[];M(n,e._modules.root,o.filter,""),o.rootNodes=n}else o.rootNodes=[O(e._modules.root,"")]})),o.on.getInspectorState((function(o){if(o.app===t&&o.inspectorId===g){var n=o.nodeId;f(e,n),o.state=
/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorState}
 */
function(t,e,o){e="root"===o?e:e[o];var n=Object.keys(e),r={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(n.length){var i=function(t){var e={};return Object.keys(t).forEach((function(o){var n=o.split("/");if(n.length>1){var r=e,i=n.pop();n.forEach((function(t){r[t]||(r[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),r=r[t]._custom.value})),r[i]=E((function(){return t[o]}))}else e[o]=E((function(){return t[o]}))})),e}(e);r.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?C(t):t,editable:!1,value:E((function(){return i[t]}))}}))}return r}((r=e._modules,(a=(i=n).split("/").filter((function(t){return t}))).reduce((function(t,e,o){var n=t[e];if(!n)throw new Error('Missing module "'+e+'" for path "'+i+'".');return o===a.length-1?n:n._children}),"root"===i?r:r.root._children)),"root"===n?e.getters:e._makeLocalGettersCache,n)}var r,i,a})),o.on.editInspectorState((function(o){if(o.app===t&&o.inspectorId===g){var n=o.nodeId,r=o.path;"root"!==n&&(r=n.split("/").filter(Boolean).concat(r)),e._withCommit((function(){o.set(e._state.data,r,o.state.value)}))}})),e.subscribe((function(t,e){var n={};t.payload&&(n.payload=t.payload),n.state=e,o.notifyComponentUpdate(),o.sendInspectorTree(g),o.sendInspectorState(g),o.addTimelineEvent({layerId:_,event:{time:Date.now(),title:t.type,data:n}})})),e.subscribeAction({before:function(t,e){var n={};t.payload&&(n.payload=t.payload),t._id=y++,t._time=Date.now(),n.state=e,o.addTimelineEvent({layerId:v,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:n}})},after:function(t,e){var n={},r=Date.now()-t._time;n.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},t.payload&&(n.payload=t.payload),n.state=e,o.addTimelineEvent({layerId:v,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:n}})}})}))}
// extracted from tailwind palette
var w=8702998,j={label:"namespaced",textColor:16777215,backgroundColor:6710886};
/**
 * @param {string} path
 */
function C(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}
/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorNode}
 */function O(t,e){return{id:e||"root",
// all modules end with a `/`, we want the last segment only
// cart/ -> cart
// nested/cart/ -> cart
label:C(e),tags:t.namespaced?[j]:[],children:Object.keys(t._children).map((function(o){return O(t._children[o],e+o+"/")}))}}
/**
 * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
 * @param {*} module
 * @param {string} filter
 * @param {string} path
 */function M(t,e,o,n){n.includes(o)&&t.push({id:n||"root",label:n.endsWith("/")?n.slice(0,n.length-1):n||"Root",tags:e.namespaced?[j]:[]}),Object.keys(e._children).forEach((function(r){M(t,e._children[r],o,n+r+"/")}))}function E(t){try{return t()}catch(e){return e}}
// Base data struct for store's module, package with some attribute and method
var k=function(t,e){this.runtime=e,
// Store some children item
this._children=Object.create(null),
// Store the origin module object which passed by programmer
this._rawModule=t;var o=t.state;
// Store the origin module's state
this.state=("function"==typeof o?o():o)||{}},x={namespaced:{configurable:!0}};x.namespaced.get=function(){return!!this._rawModule.namespaced},k.prototype.addChild=function(t,e){this._children[t]=e},k.prototype.removeChild=function(t){delete this._children[t]},k.prototype.getChild=function(t){return this._children[t]},k.prototype.hasChild=function(t){return t in this._children},k.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},k.prototype.forEachChild=function(t){c(this._children,t)},k.prototype.forEachGetter=function(t){this._rawModule.getters&&c(this._rawModule.getters,t)},k.prototype.forEachAction=function(t){this._rawModule.actions&&c(this._rawModule.actions,t)},k.prototype.forEachMutation=function(t){this._rawModule.mutations&&c(this._rawModule.mutations,t)},Object.defineProperties(k.prototype,x);var I=function(t){
// register root module (Vuex.Store options)
this.register([],t,!1)};function G(t,e,o){
// update nested modules
if(
// update target module
e.update(o),o.modules)for(var n in o.modules){if(!e.getChild(n))return;G(t.concat(n),e.getChild(n),o.modules[n])}}function S(t){return new P(t)}I.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},I.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,o){return t+((e=e.getChild(o)).namespaced?o+"/":"")}),"")},I.prototype.update=function(t){G([],this.root,t)},I.prototype.register=function(t,e,o){var n=this;void 0===o&&(o=!0);var r=new k(e,o);0===t.length?this.root=r:this.get(t.slice(0,-1)).addChild(t[t.length-1],r);
// register nested modules
e.modules&&c(e.modules,(function(e,r){n.register(t.concat(r),e,o)}))},I.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1],n=e.getChild(o);n&&n.runtime&&e.removeChild(o)},I.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),o=t[t.length-1];return!!e&&e.hasChild(o)};var P=function(t){var e=this;void 0===t&&(t={});var o=t.plugins;void 0===o&&(o=[]);var n=t.strict;void 0===n&&(n=!1);var r=t.devtools;
// store internal state
this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new I(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),
// EffectScope instance. when registering new getters, we wrap them inside
// EffectScope so that getters (computed) would not be destroyed on
// component unmount.
this._scope=null,this._devtools=r;
// bind commit and dispatch to self
var i=this,a=this.dispatch,s=this.commit;this.dispatch=function(t,e){return a.call(i,t,e)},this.commit=function(t,e,o){return s.call(i,t,e,o)},
// strict mode
this.strict=n;var c=this._modules.root.state;
// init root module.
// this also recursively registers all sub-modules
// and collects all module getters inside this._wrappedGetters
p(this,c,[],this._modules.root),
// initialize the store state, which is responsible for the reactivity
// (also registers _wrappedGetters as computed properties)
d(this,c),
// apply plugins
o.forEach((function(t){return t(e)}))},N={state:{configurable:!0}};P.prototype.install=function(t,e){t.provide(e||a,this),t.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&b(t,this)},N.state.get=function(){return this._state.data},N.state.set=function(t){},P.prototype.commit=function(t,e,o){var n=this,r=m(t,e,o),i=r.type,a=r.payload,s={type:i,payload:a},c=this._mutations[i];
// check object-style commit
c&&(this._withCommit((function(){c.forEach((function(t){t(a)}))})),this._subscribers.slice().forEach((function(t){return t(s,n.state)})))},P.prototype.dispatch=function(t,e){var o=this,n=m(t,e),r=n.type,i=n.payload,a={type:r,payload:i},s=this._actions[r];
// check object-style dispatch
if(s){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(a,o.state)}))}catch(u){}var c=s.length>1?Promise.all(s.map((function(t){return t(i)}))):s[0](i);return new Promise((function(t,e){c.then((function(e){try{o._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(a,o.state)}))}catch(u){}t(e)}),(function(t){try{o._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(a,o.state,t)}))}catch(u){}e(t)}))}))}},P.prototype.subscribe=function(t,e){return u(t,this._subscribers,e)},P.prototype.subscribeAction=function(t,e){return u("function"==typeof t?{before:t}:t,this._actionSubscribers,e)},P.prototype.watch=function(e,o,n){var r=this;return t((function(){return e(r.state,r.getters)}),o,Object.assign({},n))},P.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},P.prototype.registerModule=function(t,e,o){void 0===o&&(o={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),p(this,this.state,t,this._modules.get(t),o.preserveState),
// reset store to update getters...
d(this,this.state)},P.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){delete h(e.state,t.slice(0,-1))[t[t.length-1]]})),l(this)},P.prototype.hasModule=function(t){return"string"==typeof t&&(t=[t]),this._modules.isRegistered(t)},P.prototype.hotUpdate=function(t){this._modules.update(t),l(this,!0)},P.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(P.prototype,N);export{S as c,s as u};

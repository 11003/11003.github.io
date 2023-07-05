import{B as l}from"./better-scroll-8d72ab20.js";import{_ as s}from"./index-afa23578.js";import{o as t,c as o,a as r,D as e}from"./@vue-77a387ba.js";
/* unplugin-vue-components disabled */const c={class:"itemScroll_container",ref:"itemScrollList"},i={class:"itemScroll_content"};
/* unplugin-vue-components disabled */const a=s({name:"itemScroll",props:{classIgnore:{type:String,default:""}},data:()=>({tagException:{tagName:/textarea/i}}),created(){this.classIgnore&&(this.tagException.className=new RegExp(this.classIgnore,"i")),this.$nextTick((()=>{this.initScroll()}))},methods:{initScroll(s){
// tagException 这sb p标签会把span匹配到,如果想要忽略，设置为i标签 ,className 只能绑定触发元素
// preventDefaultException 完全失效，没有合并参数
this.$nextTick((()=>{if(this.scroll)this.scroll.refresh();else{this.scroll=new l(this.$refs.itemScrollList,{click:!0,mouseWheel:!0,probeType:3,tagException:this.tagException});let t={
// 起点的属性
start:{scale:0},
// 终点的属性
end:{scale:1.1}};this.scroll.on("scroll",this.onScroll),s&&this.scroll.scrollTo(0,this.scroll.maxScrollY,3e3,void 0,t),this.scroll.on("scroll",this.onScroll)}}))},onScroll(l){this.$emit("onScroll",l)},getScrollAttr(l){return this.scroll[l]},scrollTo(l,s){s?this.scroll.scrollTo(0,l,s,{fn:l=>l}):this.scroll.scrollTo(0,l)}}},[["render",function(l,s,a,n,h,m){return t(),o("div",c,[r("div",i,[e(l.$slots,"default")])],512)}]]);export{a as _};

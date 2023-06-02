import{c as ot,g as rt,bl as it,bN as at,bK as ct,bO as st,bm as ut,bH as lt,bo as P,bp as O,bq as D,bw as w,bA as z,bz as U,br as m,bs as ft,bt as j,bu as q,bv as I,bx as dt,bP as pt,bC as yt,bF as vt,bQ as ht,bR as mt,bS as bt,bT as gt}from"./index-fc4991ec.js";var W={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(S,C){(function(E,b){S.exports=b()})(ot,function(){return function(){var T={686:function(f,c,t){t.d(c,{default:function(){return nt}});var a=t(279),s=t.n(a),l=t(370),y=t.n(l),v=t(817),g=t.n(v);function d(i){try{return document.execCommand(i)}catch{return!1}}var h=function(n){var e=g()(n);return d("cut"),e},p=h;function _(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=i,e}var A=function(n,e){var o=_(n);e.container.appendChild(o);var r=g()(o);return d("copy"),o.remove(),r},M=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},o="";return typeof n=="string"?o=A(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?o=A(n.value,e):(o=g()(n),d("copy")),o},B=M;function R(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(e){return typeof e}:R=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(i)}var X=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,o=e===void 0?"copy":e,r=n.container,u=n.target,x=n.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(u!==void 0)if(u&&R(u)==="object"&&u.nodeType===1){if(o==="copy"&&u.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(u.hasAttribute("readonly")||u.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(x)return B(x,{container:r});if(u)return o==="cut"?p(u):B(u,{container:r})},Y=X;function k(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(i)}function G(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function V(i,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}function K(i,n,e){return n&&V(i.prototype,n),e&&V(i,e),i}function Q(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&F(i,n)}function F(i,n){return F=Object.setPrototypeOf||function(o,r){return o.__proto__=r,o},F(i,n)}function $(i){var n=tt();return function(){var o=L(i),r;if(n){var u=L(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return J(this,r)}}function J(i,n){return n&&(k(n)==="object"||typeof n=="function")?n:Z(i)}function Z(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function tt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(i){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(i)}function H(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var et=function(i){Q(e,i);var n=$(e);function e(o,r){var u;return G(this,e),u=n.call(this),u.resolveOptions(r),u.listenClick(o),u}return K(e,[{key:"resolveOptions",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof r.action=="function"?r.action:this.defaultAction,this.target=typeof r.target=="function"?r.target:this.defaultTarget,this.text=typeof r.text=="function"?r.text:this.defaultText,this.container=k(r.container)==="object"?r.container:document.body}},{key:"listenClick",value:function(r){var u=this;this.listener=y()(r,"click",function(x){return u.onClick(x)})}},{key:"onClick",value:function(r){var u=r.delegateTarget||r.currentTarget,x=this.action(u)||"copy",N=Y({action:x,container:this.container,target:this.target(u),text:this.text(u)});this.emit(N?"success":"error",{action:x,text:N,trigger:u,clearSelection:function(){u&&u.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(r){return H("action",r)}},{key:"defaultTarget",value:function(r){var u=H("target",r);if(u)return document.querySelector(u)}},{key:"defaultText",value:function(r){return H("text",r)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return B(r,u)}},{key:"cut",value:function(r){return p(r)}},{key:"isSupported",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],u=typeof r=="string"?[r]:r,x=!!document.queryCommandSupported;return u.forEach(function(N){x=x&&!!document.queryCommandSupported(N)}),x}}]),e}(s()),nt=et},828:function(f){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(s,l){for(;s&&s.nodeType!==c;){if(typeof s.matches=="function"&&s.matches(l))return s;s=s.parentNode}}f.exports=a},438:function(f,c,t){var a=t(828);function s(v,g,d,h,p){var _=y.apply(this,arguments);return v.addEventListener(d,_,p),{destroy:function(){v.removeEventListener(d,_,p)}}}function l(v,g,d,h,p){return typeof v.addEventListener=="function"?s.apply(null,arguments):typeof d=="function"?s.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(_){return s(_,g,d,h,p)}))}function y(v,g,d,h){return function(p){p.delegateTarget=a(p.target,g),p.delegateTarget&&h.call(v,p)}}f.exports=l},879:function(f,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(f,c,t){var a=t(879),s=t(438);function l(d,h,p){if(!d&&!h&&!p)throw new Error("Missing required arguments");if(!a.string(h))throw new TypeError("Second argument must be a String");if(!a.fn(p))throw new TypeError("Third argument must be a Function");if(a.node(d))return y(d,h,p);if(a.nodeList(d))return v(d,h,p);if(a.string(d))return g(d,h,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(d,h,p){return d.addEventListener(h,p),{destroy:function(){d.removeEventListener(h,p)}}}function v(d,h,p){return Array.prototype.forEach.call(d,function(_){_.addEventListener(h,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(_){_.removeEventListener(h,p)})}}}function g(d,h,p){return s(document.body,d,h,p)}f.exports=l},817:function(f){function c(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),y=document.createRange();y.selectNodeContents(t),l.removeAllRanges(),l.addRange(y),a=l.toString()}return a}f.exports=c},279:function(f){function c(){}c.prototype={on:function(t,a,s){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:a,ctx:s}),this},once:function(t,a,s){var l=this;function y(){l.off(t,y),a.apply(s,arguments)}return y._=a,this.on(t,y,s)},emit:function(t){var a=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),l=0,y=s.length;for(l;l<y;l++)s[l].fn.apply(s[l].ctx,a);return this},off:function(t,a){var s=this.e||(this.e={}),l=s[t],y=[];if(l&&a)for(var v=0,g=l.length;v<g;v++)l[v].fn!==a&&l[v].fn._!==a&&y.push(l[v]);return y.length?s[t]=y:delete s[t],this}},f.exports=c,f.exports.TinyEmitter=c}},E={};function b(f){if(E[f])return E[f].exports;var c=E[f]={exports:{}};return T[f](c,c.exports,b),c.exports}return function(){b.n=function(f){var c=f&&f.__esModule?function(){return f.default}:function(){return f};return b.d(c,{a:c}),c}}(),function(){b.d=function(f,c){for(var t in c)b.o(c,t)&&!b.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:c[t]})}}(),function(){b.o=function(f,c){return Object.prototype.hasOwnProperty.call(f,c)}}(),b(686)}().default})})(W);var _t=W.exports;const xt=rt(_t),Et=S=>{const C=(S==null?void 0:S.appendToBody)===void 0?!0:S.appendToBody;return{toClipboard(T,E){return new Promise((b,f)=>{const c=document.createElement("button"),t=new xt(c,{text:()=>T,action:()=>"copy",container:E!==void 0?E:document.body});t.on("success",a=>{t.destroy(),b(a)}),t.on("error",a=>{t.destroy(),f(a)}),C&&document.body.appendChild(c),c.click(),C&&document.body.removeChild(c)})}}},wt={class:"text-gray-600 body-font"},St={class:"float-left mt-5 ml-5"},Tt={key:0},Ct=m("div",{class:"bg-gray-100 rounded flex h-full items-center"},[m("span",{class:"title-font font-medium"},"未登录")],-1),At=[Ct],kt={key:1},Ot={class:"bg-gray-100 rounded flex h-full items-center"},Rt={class:"title-font font-medium mr-3"},Lt={class:"container px-5 py-16 mx-auto"},Nt={class:"text-center mb-2"},Pt=m("div",{class:"my-2 font-serif font-semibold text-dark-50 leading-none text-2xl"},[m("span",{class:"mr-2"},"Mobox龙蛋"),m("span",null,"辅助工具")],-1),jt=m("input",{id:"dywx",value:"jxBFISH",hidden:""},null,-1),Mt=m("p",{class:"text-base text-gray-400 leading-relaxed mx-auto"},[I(" 开通vip联系:"),m("span",{class:"ml-2 text-gray-500"},"大鱼")],-1),Bt={class:"text-base text-gray-400 leading-relaxed mx-auto mt-2"},Ft=m("span",null,"点击复制WX",-1),Ht={class:"ml-1"},Dt=m("span",{class:"mx-2 text-green-500"},"jxBFISH",-1),zt=it({__name:"index",setup(S){const{toClipboard:C}=Et(),T=async()=>{await C("jxBFISH"),pt("已复制WX至剪贴板!")},{open:E}=bt(),{address:b,isActivated:f,signer:c}=at(),{wallet:t,disconnect:a}=gt(),{onActivated:s}=ct(),l=st(),y=ut(),v=()=>{let d="/home";l.currentRoute.value.query.redirect&&(d=l.currentRoute.value.query.redirect),l.push({path:d})};async function g(){b.value!=""&&(yt({duration:0,message:"数据更新"}),await y.login(),vt()),y.isvip==1&&v()}return s(async({address:d})=>{await g()}),lt(async()=>{await g()}),(d,h)=>{const p=P("van-notice-bar"),_=P("van-button"),A=P("van-icon"),M=P("vd-board");return O(),D(dt,null,[w(y).error.err_type>0?(O(),z(p,{key:0,"left-icon":"warning-o",text:w(y).error.err_msg},null,8,["text"])):U("",!0),m("section",wt,[m("div",St,[w(f)?(O(),D("div",kt,[m("div",Ot,[m("span",Rt,ft(w(ht)(w(b))),1),j(_,{round:"",type:"default",size:"small",onClick:w(a),class:"text-gray-500"},{default:q(()=>[I("退出账号")]),_:1},8,["onClick"])])])):(O(),D("div",Tt,At))]),m("div",Lt,[m("div",Nt,[j(A,{class:"iconfont text-5xl",style:{color:"#1989fa"},"class-prefix":"ali-icon",name:"tinytools"}),Pt]),jt,m("div",{class:"text-center pt-1",onClick:T},[Mt,m("p",Bt,[Ft,m("span",Ht,[j(A,{name:"chat-o"})]),Dt])]),w(b)==""?(O(),z(_,{key:0,type:"primary",class:"flex mx-auto mt-12 text-lg",onClick:w(E)},{default:q(()=>[I(" 登录账号 ")]),_:1},8,["onClick"])):U("",!0)])]),j(M,{connectors:w(mt),dark:""},null,8,["connectors"])],64)}}});export{zt as default};

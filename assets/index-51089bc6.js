import{bm as g,bK as k,bH as C,bL as w,bn as B,bE as N,bp as c,bq as o,br as r,bs as e,bx as t,bt as V,bu as i,bv as _,bw as m,bB as q,bA as A,by as E,bM as R,bN as H,bO as M,bP as S}from"./index-1e212dea.js";import{a as T,c as L}from"./function-call-4108e48b.js";const P={class:"text-gray-600 body-font"},z={class:"float-left mt-5 ml-5"},D={key:0},F=e("div",{class:"bg-gray-100 rounded flex h-full items-center"},[e("span",{class:"title-font font-medium"},"未登录")],-1),K=[F],O={key:1},U={class:"bg-gray-100 rounded flex h-full items-center"},W={class:"title-font font-medium mr-3"},j={class:"container px-5 py-16 mx-auto"},G={class:"text-center mb-2"},I=e("div",{class:"my-2 font-serif font-semibold text-dark-50 leading-none text-2xl"},[e("span",{class:"mr-2"},"Mobox龙蛋"),e("span",null,"辅助工具")],-1),J=e("div",{class:"text-center pt-1"},[e("p",{class:"text-base text-gray-400 leading-relaxed mx-auto"}," 开通vip联系：大鱼 ")],-1),te=g({__name:"index",setup(Q){const{open:b}=M(),{address:a,isActivated:p,signer:X}=k(),{wallet:Y,disconnect:f}=S(),{onActivated:x}=C(),n=w(),l=B(),h=()=>{let s="/home";n.currentRoute.value.query.redirect&&(s=n.currentRoute.value.query.redirect),n.push({path:s})};async function d(){a.value!=""&&(T({duration:0,message:"数据更新"}),await l.login(),L()),l.isvip==1&&h()}return x(async({address:s})=>{await d()}),N(async()=>{await d()}),(s,Z)=>{const u=c("van-button"),v=c("van-icon"),y=c("vd-board");return o(),r(E,null,[e("section",P,[e("div",z,[t(p)?(o(),r("div",O,[e("div",U,[e("span",W,V(t(R)(t(a))),1),i(u,{round:"",type:"default",size:"small",onClick:t(f),class:"text-gray-500"},{default:_(()=>[m("退出账号")]),_:1},8,["onClick"])])])):(o(),r("div",D,K))]),e("div",j,[e("div",G,[i(v,{class:"iconfont text-5xl",style:{color:"#1989fa"},"class-prefix":"ali-icon",name:"tinytools"}),I]),J,t(a)==""?(o(),q(u,{key:0,type:"primary",class:"flex mx-auto mt-12 text-lg",onClick:t(b)},{default:_(()=>[m(" 登录账号 ")]),_:1},8,["onClick"])):A("",!0)])]),i(y,{connectors:t(H),dark:""},null,8,["connectors"])],64)}}});export{te as default};

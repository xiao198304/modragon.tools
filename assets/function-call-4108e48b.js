import{bQ as I,bm as M,bI as k,bE as N,bR as z,bu as i,bS as O,bT as L,bU as U,bV as y,bW as C,bX as j,bY as w,bZ as V,b_ as E,b$ as _,c0 as v,c1 as q,c2 as D,c3 as F,bo as H,c4 as Q,c5 as R}from"./index-1e212dea.js";let u=0;function W(e){e?(u||document.body.classList.add("van-toast--unclickable"),u++):u&&(u--,u||document.body.classList.remove("van-toast--unclickable"))}const[X,c]=I("toast"),Y=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],Z={icon:String,show:Boolean,type:y("text"),overlay:Boolean,message:C,iconSize:C,duration:j(2e3),position:y("middle"),teleport:[String,Object],wordBreak:String,className:w,iconPrefix:String,transition:y("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:w,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var $=M({name:X,props:Z,emits:["update:show"],setup(e,{emit:t,slots:s}){let f,l=!1;const r=()=>{const n=e.show&&e.forbidClick;l!==n&&(l=n,W(l))},d=n=>t("update:show",n),g=()=>{e.closeOnClick&&d(!1)},m=()=>clearTimeout(f),b=()=>{const{icon:n,type:o,iconSize:h,iconPrefix:x,loadingType:B}=e;if(n||o==="success"||o==="fail")return i(V,{name:n||o,size:h,class:c("icon"),classPrefix:x},null);if(o==="loading")return i(E,{class:c("loading"),size:h,type:B},null)},T=()=>{const{type:n,message:o}=e;if(s.message)return i("div",{class:c("text")},[s.message()]);if(_(o)&&o!=="")return n==="html"?i("div",{key:0,class:c("text"),innerHTML:String(o)},null):i("div",{class:c("text")},[o])};return k(()=>[e.show,e.forbidClick],r),k(()=>[e.show,e.type,e.message,e.duration],()=>{m(),e.show&&e.duration>0&&(f=setTimeout(()=>{d(!1)},e.duration))}),N(r),z(r),()=>i(U,O({class:[c([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:g,onClosed:m,"onUpdate:show":d},L(e,Y)),{default:()=>[b(),T()]})}});const A={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let a=[],G=!1,p=v({},A);const J=new Map;function S(e){return q(e)?e:{message:e}}function K(){const{instance:e,unmount:t}=F({setup(){const s=H(""),{open:f,state:l,close:r,toggle:d}=Q(),g=()=>{},m=()=>i($,O(l,{onClosed:g,"onUpdate:show":d}),null);return k(s,b=>{l.message=b}),R().render=m,{open:f,close:r,message:s}}});return e}function ee(){if(!a.length||G){const e=K();a.push(e)}return a[a.length-1]}function te(e={}){if(!D)return{};const t=ee(),s=S(e);return t.open(v({},p,J.get(s.type||p.type),s)),t}const P=e=>t=>te(v({type:e},S(t))),se=P("loading"),ae=P("fail"),ie=e=>{a.length&&(e?(a.forEach(t=>{t.close()}),a=[]):a[0].close())};export{se as a,ae as b,ie as c,$ as s};

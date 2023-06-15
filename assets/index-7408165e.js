import{bG as P,bU as oe,bV as V,bR as M,bW as z,bl as ae,bn as C,bo as I,bp as c,bA as j,bu as e,bq as v,bC as K,bX as ce,br as d,bs as o,bw as l,bY as re,bZ as ie,b_ as de,b$ as _e,c0 as ee,c1 as ue,c2 as fe,bx as X,bP as pe,bt as t,bz as te,by as Q,bv as p,c3 as ve,bF as me,bH as ge}from"./index-1bf1d7d1.js";async function se(m){let x=[],u=m[0].blockNumber,g=(await P.getBlock(u)).timestamp,T=m[m.length-1].blockNumber,k=(await P.getBlock(T)).timestamp,_=0;T>u&&(_=(k-g)/(T-u)),m.forEach(function(f){f.timestamp=g+(f.blockNumber-u)*_});for(let f=0;f<m.length;f++){let b=m[f],q="0x"+b.topics[1].substr(-40),B=parseInt(b.data.slice(2,66),16),n=parseInt(b.data.slice(66,130),16),W=parseInt(b.data.slice(130,194),16),Z=parseInt(b.data.slice(-64),16),H=await oe.getDragonsWallet(q),E=le(B,H.tokenIds,H.attrs),D=le(n,H.tokenIds,H.attrs),F=le(W,H.tokenIds,H.attrs),O=V[1],Y=V[1],G=V[1];for(let r in V)r==E[0].toString()&&(O=V[r]),r==D[0].toString()&&(Y=V[r]),r==F[0].toString()&&(G=V[r]);let A=0,i=0,L=M().unix(),R=(Z-M().unix())*1e3;Z>=L&&(A=1,i=2);let w={owner:q,timestamp:b.timestamp,blockNumber:b.blockNumber,transactionHash:b.transactionHash,token0:{id:B,level:z(E[2]).length,elements:z(E[2]),name:O.cnName,state:A,attrs:E,diffTimeStamp:R,hatch_id:0},token1:{id:n,level:z(D[2]).length,elements:z(D[2]),name:Y.cnName,state:A,attrs:D,diffTimeStamp:R,hatch_id:0},eggToken:{id:W,level:z(F[2]).length,elements:z(F[2]),name:G.cnName,state:i,attrs:F,diffTimeStamp:R,hatch_id:0}};x.push(w)}return x}function le(m,x,u){let g=x.findIndex(k=>k==m),T=[0,0,0,0,0,0,0,0,0,0,0,0];if(g>=0){let k=12*g;T=u.slice(k,k+11).map(f=>parseInt(f))}return T}const xe={key:1,class:"text-sm text-gray-500 text-right mr-5"},be={class:"m-5 text-center"},he=ae({__name:"DataCell",props:{title:{type:String,default:""},listLength:{type:Number,default:0},isinset:{type:Boolean,default:!0}},emits:["changeCount"],setup(m,{emit:x}){const u=m,g=C(5),T=_=>{g.value+=_,x("changeCount",g)},k=()=>{g.value=5,x("changeCount",g)};return(_,f)=>{const b=I("van-cell"),q=I("van-cell-group");return c(),j(q,{inset:u.isinset,class:"mt-5"},{default:e(()=>[u.title!=""?(c(),j(b,{key:0,title:u.title,icon:"label-o"},{value:e(()=>[g.value>5?(c(),v("span",{key:0,onClick:f[0]||(f[0]=B=>k())},"只显示5行")):K("",!0)]),_:1},8,["title"])):(c(),v("div",xe,[g.value>5?(c(),v("span",{key:0,onClick:f[1]||(f[1]=B=>k())},"只显示5行")):K("",!0)])),ce(_.$slots,"default"),d("div",be,[g.value<u.listLength?(c(),v("span",{key:0,class:"text-gray-500",onClick:f[2]||(f[2]=B=>T(5))},"查看更多")):K("",!0)])]),_:3},8,["inset"])}}}),ye={class:"text-sm"},ke=ae({__name:"AddressLabel",props:{address:{type:String,default:""}},setup(m){const x=m,u=C(!1),g=[{id:2,text:"Arbiscan.io",code:x.address,icon:"share-o"}],T=k=>{if(k.id==2){let _="https://arbiscan.io/address/"+x.address;window.open(_,"_blank")}};return(k,_)=>{const f=I("van-popover");return c(),j(f,{show:u.value,"onUpdate:show":_[0]||(_[0]=b=>u.value=b),actions:g,onSelect:T,placement:"top-start"},{reference:e(()=>[d("span",ye,o(l(re)(x.address)),1)]),_:1},8,["show"])}}});const we="https://tools-1258577806.cos.ap-hongkong.myqcloud.com/modragon/breedinfo/last12.zip.json",Se=ie("trend",()=>{const m=C({});async function x(){let u=we+"?="+M().format("YYYYMMDDHHmm");return m.value=await de(u),m}return{breedinfos:m,initBreedinfos:x}}),Ce=d("div",{style:{width:"90%"},class:"text-gray-400 text-sm text-left"},"心动指数",-1),Te={style:{width:"90%"},class:"mt-2"},Ne={key:0,class:"text-orange-400 text-4xl"},Ae={key:1,class:"text-fuchsia-400 text-4xl"},Be={key:2,class:"text-blue-400 text-4xl"},Le={key:3,class:"text-green-400 text-4xl"},He={key:4,class:"text-gray-400 text-4xl"},Ie={style:{width:"90%"},class:"text-left mt-3"},$e=d("span",{class:"text-gray-400 text-sm"},"数量:",-1),je={class:"text-black-500 text-sm ml-1"},Fe={style:{width:"90%"},class:"text-left mt-2"},Oe=d("span",{class:"text-gray-400 text-sm"},"无橙:",-1),Je={key:0,class:"text-black text-sm ml-1"},qe={key:1,class:"text-black text-sm ml-1"},De={style:{width:"90%"},class:"text-left mt-2"},Ve=d("span",{class:"text-gray-400 text-sm"},"无紫:",-1),Me={key:0,class:"text-black text-sm ml-1"},Ee={key:1,class:"text-black text-sm ml-1"},Ye={style:{width:"100%"},class:"text-left mt-1"},Re=d("span",{class:"text-gray-400 text-sm"},"时间:",-1),Ue={class:"text-black-500 text-sm ml-1"},ze=d("span",{class:"text-base text-gray-400"},"卡牌",-1),Pe=d("span",{class:"text-base text-gray-400"},"产出",-1),We=d("span",{class:"text-base text-gray-400"},"理论",-1),Ge={class:"text-base text-block-500"},Qe={class:"text-base text-slate-500"},Ze={class:"text-base text-block-500"},Xe={class:"text-base text-slate-500"},Ke={class:"text-base text-block-500"},et={class:"text-base text-slate-500"},tt={class:"text-base text-block-500"},lt={class:"text-base text-slate-500"},st=ae({__name:"index",setup(m){const x=Se(),{breedinfos:u}=_e(x),{initBreedinfos:g}=x,T=C(""),k=C(M().subtract(12,"hour").format("HH")+":00"),_=C(0),f=C(0),b=C(0),q=C(0);let B=null,n=ee({baseAll:[],all:[],last:[]}),W=ee({last:5,luck:5,bad:5});const Z=w=>W.last=w,H=C(!1),E=async()=>{await D(!0),ve("刷新完成"),H.value=!1};ue(async()=>{await D()}),fe(async()=>{P.removeAllListeners(),B&&clearInterval(B)});const D=async(w=!1)=>{me({duration:0,message:"数据更新"}),P.removeAllListeners(),B&&clearInterval(B),B=setInterval(()=>{T.value=M().format("HH:mm:ss")});let r=[];if(await g(),console.log(u.value.endblock),u.value.data.length>0){let y=JSON.parse(JSON.stringify(u.value.data));r.push(...y),k.value=M.unix(u.value.starttimestamp).format("HH:mm")}console.log("1--- ",r.length),F(r),ge();let S=u.value.endblock+1;const h=await P.getLogs({fromBlock:S,toBlock:"latest",address:"0xc51b8da084b15aaaa13cf04a5efbcf0415169708",topics:["0x32a657ab4b72676031878dbdd8a129e1415f2e05d5fc023328347fa816181cfb",null]});if(h.length>0){console.log("2-0--- ",h.length);let y=await se(h);r.push(...y),console.log("2-1--- ",r.length),F(r)}P.on({address:"0xc51b8da084b15aaaa13cf04a5efbcf0415169708",topics:["0x32a657ab4b72676031878dbdd8a129e1415f2e05d5fc023328347fa816181cfb",null]},async y=>{console.log("new item");let a=await se([y]);r.push(...a),console.log("3--- ",r.length),F(r)})},F=w=>{n.baseAll=[];let r=JSON.parse(JSON.stringify(w));n.baseAll=r.reverse(),R(L.value)};let O=C([{quality:0,title:"ALL",color:"black",rgb:"#1f1f1f",color_cn:"黑色",name:"全部"}]);O.value.push(...X.slice(0,4));const Y=C(0),G=w=>{Y.value=w,w>0?n.last=n.all.filter(r=>r.eggToken.level==w):n.last=JSON.parse(JSON.stringify(n.all))};let A=C([{fa_level:0,ma_level:0,level_1:0,level_2:0,level_3:0,level_4:0}]);A.value.push(...pe);let i=ee({level_1:0,level_2:0,level_3:0,level_4:0});const L=C(3),R=w=>{if(L.value=w,w>0){let a=A.value[L.value].fa_level,J=A.value[L.value].ma_level;n.all=n.baseAll.filter(U=>U.token0.level==a&&U.token1.level==J||U.token1.level==a&&U.token0.level==J)}else n.all=JSON.parse(JSON.stringify(n.baseAll));i.level_1=A.value[L.value].level_1,i.level_2=A.value[L.value].level_2,i.level_3=A.value[L.value].level_3,i.level_4=A.value[L.value].level_4;let r=-1,S=-1,h=-1;n.all.forEach((a,J)=>{a.eggToken.level==4&&(r=J),a.eggToken.level==3&&(S=J),a.eggToken.level==2&&(h=J)}),f.value=n.all.length-r-1,b.value=n.all.length-S-1,q.value=n.all.length-h-1;let y=50;i.level_4>0?y+=f.value/(n.all.length*i.level_4)*40:y+=0,i.level_3>0?y+=b.value/(n.all.length*i.level_3)*8:y+=0,i.level_2>0?y+=q.value/(n.all.length*i.level_2)*2:y+=0,_.value=Number(y.toFixed(2)),G(Y.value)};return(w,r)=>{const S=I("van-tag"),h=I("van-row"),y=I("van-grid-item"),a=I("van-col"),J=I("van-grid"),U=I("van-cell-group"),ne=I("van-pull-refresh");return c(),j(ne,{modelValue:H.value,"onUpdate:modelValue":r[0]||(r[0]=s=>H.value=s),onRefresh:E},{default:e(()=>[t(U,{inset:"",class:"mt-2"},{default:e(()=>[t(h,{justify:"center",class:"pt-2 text-center"},{default:e(()=>[(c(!0),v(Q,null,te(l(A),(s,$)=>(c(),j(S,{key:$,class:"mr-1",color:l(O).find(N=>N.quality==s.ma_level).rgb,plain:$!=L.value,onClick:N=>R($)},{default:e(()=>[$==0?(c(),v(Q,{key:0},[p(" 全部 ")],64)):(c(),v(Q,{key:1},[p(o(l(O).find(N=>N.quality==s.ma_level).color_cn)+o(l(O).find(N=>N.quality==s.fa_level).color_cn),1)],64))]),_:2},1032,["color","plain","onClick"]))),128))]),_:1}),t(J,{"column-num":"2"},{default:e(()=>[t(y,{"use-slot":""},{default:e(()=>[Ce,d("div",Te,[_.value>85?(c(),v("span",Ne,o(_.value)+"%",1)):_.value>70?(c(),v("span",Ae,o(_.value)+"%",1)):_.value>50?(c(),v("span",Be,o(_.value)+"%",1)):_.value>30?(c(),v("span",Le,o(_.value)+"%",1)):(c(),v("span",He,o(_.value)+"%",1))]),d("div",Ie,[$e,d("span",je,o(l(n).all.length),1)]),d("div",Fe,[Oe,l(i).level_4>0?(c(),v("span",Je,o(f.value)+"/"+o(Math.floor(100/l(i).level_4)),1)):(c(),v("span",qe,"-"))]),d("div",De,[Ve,l(i).level_3>0?(c(),v("span",Me,o(b.value)+"/"+o(Math.floor(100/l(i).level_3)),1)):(c(),v("span",Ee,"-"))])]),_:1}),t(y,{"use-slot":""},{default:e(()=>[d("div",Ye,[Re,d("span",Ue,o(k.value)+"-"+o(T.value),1)]),t(h,{style:{width:"100%"},justify:"space-between",class:"mt-1"},{default:e(()=>[t(a,{span:"8",class:"text-left"},{default:e(()=>[ze]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[Pe]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[We]),_:1})]),_:1}),t(h,{style:{width:"100%"},justify:"space-between",class:"mt-1"},{default:e(()=>[t(a,{span:"8"},{default:e(()=>[t(S,{color:"#ff7105"},{default:e(()=>[p("史诗")]),_:1})]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",Ge,o(l(n).all.filter(s=>s.eggToken.level==4).length),1)]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",Qe,o(l(i).level_4>0?(l(n).all.length*(l(i).level_4/100)).toFixed(0):"-"),1)]),_:1})]),_:1}),t(h,{style:{width:"100%"},justify:"space-between",class:"mt-1"},{default:e(()=>[t(a,{span:"8"},{default:e(()=>[t(S,{color:"#9554fd"},{default:e(()=>[p("稀有")]),_:1})]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",Ze,o(l(n).all.filter(s=>s.eggToken.level==3).length),1)]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",Xe,o(l(i).level_3>0?(l(n).all.length*(l(i).level_3/100)).toFixed(0):"-"),1)]),_:1})]),_:1}),t(h,{style:{width:"100%"},justify:"space-between",class:"mt-1"},{default:e(()=>[t(a,{span:"8"},{default:e(()=>[t(S,{color:"#10b981"},{default:e(()=>[p("良好")]),_:1})]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",Ke,o(l(n).all.filter(s=>s.eggToken.level==2).length),1)]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",et,o(l(i).level_2>0?(l(n).all.length*(l(i).level_2/100)).toFixed(0):"-"),1)]),_:1})]),_:1}),t(h,{style:{width:"100%"},justify:"space-between",class:"mt-1"},{default:e(()=>[t(a,{span:"8"},{default:e(()=>[t(S,{color:"#6b7280"},{default:e(()=>[p("普通")]),_:1})]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",tt,o(l(n).all.filter(s=>s.eggToken.level==1).length),1)]),_:1}),t(a,{span:"8",class:"text-center"},{default:e(()=>[d("span",lt,o(l(i).level_1>0?(l(n).all.length*(l(i).level_1/100)).toFixed(0):"-"),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),(c(),j(he,{title:"最新孵化记录",listLength:l(n).last.length,onChangeCount:Z,key:"last"+l(n).last.length},{default:e(()=>[t(h,{justify:"center",class:"py-2 text-center"},{default:e(()=>[(c(!0),v(Q,null,te(l(O),(s,$)=>(c(),j(S,{key:$,class:"mr-4",color:s.rgb,plain:s.quality!=Y.value,onClick:N=>G(s.quality)},{default:e(()=>[p(o(s.name),1)]),_:2},1032,["color","plain","onClick"]))),128))]),_:1}),t(h,{justify:"center",class:"my-2 text-center"},{default:e(()=>[t(a,{span:"4",class:"text-base text-gray-500"},{default:e(()=>[p("时间")]),_:1}),t(a,{span:"6",class:"text-base text-gray-500"},{default:e(()=>[p("账号")]),_:1}),t(a,{span:"4",class:"text-base text-gray-500"},{default:e(()=>[p("父龙")]),_:1}),t(a,{span:"4",class:"text-base text-gray-500"},{default:e(()=>[p("母龙")]),_:1}),t(a,{span:"4",class:"text-base text-gray-500"},{default:e(()=>[p("龙蛋")]),_:1})]),_:1}),(c(!0),v(Q,null,te(l(n).last.slice(0,l(W).last),(s,$)=>(c(),j(h,{justify:"center",class:"text-center",style:{"border-top":"thin solid #e5e7eb"},key:"last"+s.blockNumber+s.owner+$*1e3},{default:e(()=>[t(a,{span:"4",class:"py-2 text-sm"},{default:e(()=>[p(o(l(M).unix(s.timestamp).format("HH:mm")),1)]),_:2},1024),t(a,{span:"6",class:"py-2 text-sm"},{default:e(()=>[(c(),j(ke,{address:s.owner,key:"last"+s.blockNumber+s.owner+$*1e3},null,8,["address"]))]),_:2},1024),t(a,{span:"4",class:"py-2 text-sm"},{default:e(()=>[t(S,{plain:"",color:l(X).find(N=>N.quality==s.token0.level).rgb},{default:e(()=>[p(o(s.token0.name),1)]),_:2},1032,["color"]),p(" "+o(s.token0.attrs[6]),1)]),_:2},1024),t(a,{span:"4",class:"py-2 text-sm"},{default:e(()=>[t(S,{plain:"",color:l(X).find(N=>N.quality==s.token1.level).rgb},{default:e(()=>[p(o(s.token1.name),1)]),_:2},1032,["color"]),p(" "+o(s.token1.attrs[6]),1)]),_:2},1024),t(a,{span:"4",class:"py-2 text-sm"},{default:e(()=>[t(S,{plain:"",color:l(X).find(N=>N.quality==s.eggToken.level).rgb},{default:e(()=>[p(o(s.eggToken.name),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["listLength"]))]),_:1},8,["modelValue"])}}});export{st as default};

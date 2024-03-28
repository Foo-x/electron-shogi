import{d as k,bk as F,x as E,bl as u,f as A,q as n,g as l,i as m,A as p,u as t,ac as f,t as c,am as R,F as U,m as C,$ as y,_ as P,y as w,H,l as N,j as T,k as G,Z as M,D as b,E as L,ab as D,bm as K,bi as $,bj as B}from"./setup-DjtrYqXL.js";const Y={class:"column"},V={class:"row"},x=["placeholder"],J={id:"command-candidates"},W=["value"],j=["value"],q={class:"row settings"},z=k({__name:"CommandInput",setup(h){const s=F(),r=E(u.SEND),d=E(!1),v=E(!0),_=E(!0);function S(e){let o=e.value;v.value&&(o=o.trim()),_.value&&(o=o.replace(/\s+/g," ")),!(!d.value&&o==="")&&(s.invokeCommand(r.value,o),e.value="")}const I=A(()=>{const e={};let o=0;for(let a=s.history.commands.length-1;a>=0;a--){const g=s.history.commands[a];if(g.type===r.value&&e[g.command]!==null&&(e[g.command]=null,o++,o>=64))break}return Object.keys(e)}),i=A(()=>{switch(s.target){case f.CSA:switch(r.value){case u.SEND:return["LOGIN ","LOGOUT","AGREE","REJECT","%TORYO","%KACHI","%CHUDAN","%%WHO","%%CHAT ","%%GAME ","%%CHALLENGE ","%%LIST","%%SHOW ","%%MONITORON ","%%MONITOROFF ","%%MONITOR2ON ","%%MONITOR2OFF ","%%RATING","%%SETBUOY ","%%DELETEBUOY ","%%GETBUOYCOUNT ","%%FORK "];case u.RECEIVE:return["LOGIN:","LOGIN:incorrect","LOGOUT:completed","BEGIN Game_Summary","Protocol_Version:1.2","Protocol_Mode:Server","Format:Shogi 1.0","Declaration:Jishogi 1.1","Game_ID:","Name+:","Name-:","Your_Turn:+","Your_Turn:-","Rematch_On_Draw:YES","Rematch_On_Draw:NO","To_Move:+","To_Move:-","Max_Moves:","BEGIN Time","Time_Unit:1sec","Total_Time:","Byoyomi:","Delay:","Increment:","Least_Time_Per_Move:","END Time","BEGIN Position","P1-KY-KE-GI-KI-OU-KI-GI-KE-KY","P2 * -HI *  *  *  *  * -KA * ","P3-FU-FU-FU-FU-FU-FU-FU-FU-FU","P4 *  *  *  *  *  *  *  *  * ","P5 *  *  *  *  *  *  *  *  * ","P6 *  *  *  *  *  *  *  *  * ","P7+FU+FU+FU+FU+FU+FU+FU+FU+FU","P8 * +KA *  *  *  *  * +HI * ","P9+KY+KE+GI+KI+OU+KI+GI+KE+KY","P+","P-","END Position","END Game_Summary","START","REJECT:","%TORYO,T","%KACHI,T","#SENNICHITE","#DRAW","#OUTE_SENNICHITE","#ILLEGAL_MOVE","#TIME_UP","#RESIGN","#JISHOGI","#MAX_MOVES","#CENSORED","#CHUDAN","#ILLEGAL_ACTION","#WIN","#LOSE"]}break;case f.USI:switch(r.value){case u.SEND:return["usi","isready","setoption name ","usinewgame","position sfen ","position startpos moves ","go btime ","go ponder btime ","go infinite","go mate ","go mate infinite","stop","ponderhit","quit","gameover win","gameover lose","gameover draw"];case u.RECEIVE:return["id name ","id author ","usiok","readyok","bestmove ","bestmove resign","bestmove win","info depth ","info time ","info nodes ","info pv ","info multipv ","info score cp ","info score mate ","info currmove ","info hashfull ","info nps ","info string ","option name ","option name USI_Hash type spin","option name USI_Hash type spin default ","option name USI_Ponder type check","option name USI_Ponder type check default ","checkmate ","checkmate notimplemented","checkmate timeout","checkmate nomate"]}break}return[]});return(e,o)=>(n(),l("div",null,[m("div",Y,[m("div",V,[p(R,{height:24,value:r.value,items:[{value:t(u).SEND,label:t(s).target===t(f).CSA?`▶ ${t(c).csaServer}`:`▶ ${t(c).usiEngine}`},{value:t(u).RECEIVE,label:`◀ ${t(c).electronShogi}`}],onChange:o[0]||(o[0]=a=>{r.value=a})},null,8,["value","items"]),m("input",{class:"grow",type:"text",placeholder:t(c).typeCommandHereAndPressEnter,list:"command-candidates",onKeydown:o[1]||(o[1]=a=>{if(a.key!=="Enter")return;const g=a.target;S(g)})},null,40,x),m("datalist",J,[(n(!0),l(U,null,C(i.value,a=>(n(),l("option",{key:a,value:a},null,8,W))),128)),(n(!0),l(U,null,C(I.value,a=>(n(),l("option",{key:a,value:a},null,8,j))),128))])]),m("div",q,[p(y,{value:d.value,label:t(c).allowBlankLine,onChange:o[2]||(o[2]=a=>{d.value=a})},null,8,["value","label"]),p(y,{value:v.value,label:t(c).removeSpaceFromBothEnds,onChange:o[3]||(o[3]=a=>{v.value=a})},null,8,["value","label"]),p(y,{value:_.value,label:t(c).collapseSequentialSpaces,onChange:o[4]||(o[4]=a=>{_.value=a})},null,8,["value","label"])])])]))}}),X=P(z,[["__scopeId","data-v-1cf1d521"]]),Z={class:"root column"},Q={class:"tools row"},ee=["placeholder"],te={class:"history column"},oe={key:0,class:"discarded"},ae=["id"],se={key:0,class:"timestamp"},ne={key:1,class:"send"},le={key:2,class:"receive"},ie={key:3,class:"system"},re=k({__name:"CommandHistory",setup(h){const s=F(),r=E(!0),d=E(!1),v=E("");let _=null;function S(){if(s.history.commands.length){const I=s.history.commands[s.history.commands.length-1];if(r.value&&(_===null||I.id!==_)){const i=document.getElementById(`history-${I.id}`);i==null||i.scrollIntoView({behavior:"auto",block:"nearest"}),_=I.id}}}return w(()=>{S()}),H(()=>{S()}),(I,i)=>(n(),l("div",null,[m("div",Z,[m("div",Q,[p(y,{value:r.value,label:t(c).autoScroll,onChange:i[0]||(i[0]=e=>{r.value=e})},null,8,["value","label"]),p(y,{value:d.value,label:t(c).showTimestamp,onChange:i[1]||(i[1]=e=>{d.value=e})},null,8,["value","label"]),m("input",{class:"search-text",type:"text",placeholder:t(c).highlightByPartialMatch,onInput:i[2]||(i[2]=e=>{v.value=e.target.value})},null,40,ee)]),m("div",te,[t(s).history.discarded?(n(),l("div",oe,N(t(s).history.discarded)+" commands discarded ",1)):T("",!0),(n(!0),l(U,null,C(t(s).history.commands,e=>(n(),l("div",{id:`history-${e.id}`,key:e.id,class:G(["entry",{highlight:v.value&&e.command.includes(v.value)}])},[d.value?(n(),l("span",se,N(e.dateTime),1)):T("",!0),e.type===t(u).SEND?(n(),l("span",ne,"▶")):T("",!0),e.type===t(u).RECEIVE?(n(),l("span",le,"◀")):T("",!0),e.type===t(u).SYSTEM?(n(),l("span",ie,"◼")):T("",!0),M(" "+N(e.command),1)],10,ae))),128))])])]))}}),ue=P(re,[["__scopeId","data-v-d984d03b"]]),ce=k({__name:"PromptMain",setup(h){const s=b();return(r,d)=>(n(),l("div",{class:G(["root full",t(s).thema])},[p(ue,{class:"history"}),p(X,{class:"input"})],2))}}),me=P(ce,[["__scopeId","data-v-14a4628b"]]);L.log(D.INFO,"start renderer process (prompt)");K();const O=F();document.title=`ElectronShogi Prompt - ${O.target} [${O.sessionID}] ${O.name}`;Promise.allSettled([O.setup(),b().loadAppSetting().catch(h=>{O.onError(new Error("アプリ設定の読み込み中にエラーが発生しました: "+h))})]).finally(()=>{const h=b().language;$(h),L.log(D.INFO,"mount app (prompt)"),B(me).mount("#app")});
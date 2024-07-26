"use strict";(self.webpackChunkkhademan=self.webpackChunkkhademan||[]).push([[907],{7907:(e,t,a)=>{a.r(t),a.d(t,{ProfileInfoContext:()=>$,default:()=>X});var n=a(2791);const i={profile:"profileStyle_profile__pfDIG",profile__birthday_input:"profileStyle_profile__birthday_input__umhvm"};var s=a(1087),r=a(7689),o=a(1933),l=a(6849),c=a(5294),d=a(6856),h=a(7425),u=a(1986),m=a(1022),x=a(6484),g=a(4777),j=a(2904),p=a(1917),v=a(884),f=a(269),b=a(6762),w=a(9055),C=a(6108),y=a(9853),S=a(4070),M=a(5250),I=a(891),_=a(824),k=a(990),z=a(5316),U=a(5176),L=a(5473),O=a(634),A=a(6241),F=a(7685),D=a(7005),E=a(4373),R=a(7692);function P(e){return new Promise((t=>{const a=new FileReader;a.onloadend=()=>{t(a.result)},a.readAsDataURL(e)}))}function Z(e){const t=["\u0628\u0627\u06cc\u062a","\u06a9\u06cc\u0644\u0648\u0628\u0627\u06cc\u062a","\u0645\u06af\u0627\u0628\u0627\u06cc\u062a","\u06af\u06cc\u06af\u0627\u0628\u0627\u06cc\u062a","\u062a\u0631\u0627\u0628\u0627\u06cc\u062a"];if(0===e)return"0 \u0628\u0627\u06cc\u062a";const a=parseInt(Math.floor(Math.log(e)/Math.log(1024)),10);return 0===a?"".concat(e," ").concat(t[a]):"".concat((e/1024**a).toFixed(0)," ").concat(t[a])}const W=e=>new Promise(((t,a)=>{const n=new Image;n.addEventListener("load",(()=>t(n))),n.addEventListener("error",(e=>a(e))),n.setAttribute("crossOrigin","anonymous"),n.src=e}));function q(e){return e*Math.PI/180}async function K(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{horizontal:!1,vertical:!1};const i=await W(e),s=document.createElement("canvas"),r=s.getContext("2d");if(!r)return null;const o=q(a),{width:l,height:c}=function(e,t,a){const n=q(a);return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}(i.width,i.height,a);s.width=l,s.height=c,r.translate(l/2,c/2),r.rotate(o),r.scale(n.horizontal?-1:1,n.vertical?-1:1),r.translate(-i.width/2,-i.height/2),r.drawImage(i,0,0);const d=document.createElement("canvas"),h=d.getContext("2d");return h?(d.width=t.width,d.height=t.height,h.drawImage(s,t.x,t.y,t.width,t.height,0,0,t.width,t.height),new Promise((e=>{d.toBlob((t=>{e(t)}),"image/jpeg")}))):null}var Q=a(9718),T=a(9640),B=a(548),H=a(6582),V=a(774),N=a(7047),G=a(184);function J(e){let{title:t="",isOpen:a=!1,isLoading:i=!1,maxImageSize:s=512e3,onClose:r=(()=>{}),onSubmit:l=(()=>{})}=e;const c=(0,u.p)(),[h,m]=(0,n.useState)({x:0,y:0}),[j,f]=(0,n.useState)(2),[C,y]=(0,n.useState)(0),[S,M]=(0,n.useState)(void 0),I=(0,Q.S)({base:240,md:510}),W=(0,o.useMutation)({mutationKey:["loadImageFileMutation"],mutationFn:async e=>{let{blob:t}=e;return t.type.startsWith("image/")?await P(t):void 0},onSuccess:e=>{e?M(e):c({status:"error",title:"\u0641\u0631\u0645\u062a \u0641\u0627\u06cc\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc \u0634\u0648\u062f!",description:"\u0644\u0637\u0641\u0627\u064b \u06cc\u06a9 \u0641\u0627\u06cc\u0644 \u0627\u0632 \u0646\u0648\u0639 \u062a\u0635\u0648\u06cc\u0631 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f."})}}),q=(0,o.useMutation)({mutationKey:["cropImageMutation"],mutationFn:async e=>{let{croppedAreaPixels:t}=e;return P(await K(S,t))}}),J=(0,n.useMemo)((()=>Z(s)),[s]),$=(0,n.useMemo)((()=>q.data&&S?function(e){const t=e.replace(/^data:.+;base64,/,""),a=(t.match(/(=)$/g)||[]).length;return 3*t.length/4-a}(q.data):null),[S,q.data]);return(0,G.jsxs)(k.u_,{isOpen:a,onClose:r,closeOnEsc:!i,closeOnOverlayClick:!i,onCloseComplete:()=>M(void 0),children:[(0,G.jsx)(z.Z,{}),(0,G.jsxs)(U.h,{w:"2xl",maxW:"90%",children:[(0,G.jsx)(L.x,{children:t}),(0,G.jsx)(O.o,{}),(0,G.jsxs)(A.f,{children:[(0,G.jsx)(_.xu,{position:"relative",aspectRatio:1,borderRadius:"lg",bgColor:"var(--c--surface)",overflow:"hidden",children:W.isLoading?(0,G.jsx)(x.M,{w:"100%",h:"100%",children:(0,G.jsx)(g.D,{isIndeterminate:!0})}):void 0!==S?(0,G.jsx)(D.ZP,{image:S,aspect:1,crop:h,cropSize:{width:I,height:I},zoom:j,rotation:C,onCropChange:m,onZoomChange:f,onCropComplete:(e,t)=>{q.mutate({croppedAreaPixels:t})}}):(0,G.jsxs)(_.xu,{w:"100%",h:"100%",position:"relative",borderRadius:"lg",border:"2px dashed var(--c--outline)",children:[(0,G.jsxs)(p.g,{w:"100%",h:"100%",alignItems:"center",justifyContent:"center",spacing:"1rem",children:[(0,G.jsx)(T.J,{as:E.xUA,color:"var(--c--subtitle)",fontSize:{base:"4.2rem",md:"6.3rem",lg:"8.1em"}}),(0,G.jsx)(v.x,{maxW:"72%",fontSize:{base:"sm",md:"md"},textAlign:"center",color:"var(--c--subtitle)",children:"\u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u062a\u0635\u0648\u06cc\u0631 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0631\u0627 \u0644\u0645\u0633 \u06a9\u0646\u06cc\u062f \u06cc\u0627 \u062a\u0635\u0648\u06cc\u0631 \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u0627\u06cc\u0646 \u0628\u062e\u0634 \u0628\u06a9\u0634\u06cc\u062f \u0648 \u0631\u0647\u0627 \u06a9\u0646\u06cc\u062f!"}),(0,G.jsx)(w.z,{colorScheme:"telegram",leftIcon:(0,G.jsx)(d.NZx,{}),children:"\u0627\u0646\u062a\u062e\u0627\u0628 \u062a\u0635\u0648\u06cc\u0631"})]}),(0,G.jsx)(B.I,{w:"100%",h:"100%",position:"absolute",top:"0",left:"0",right:"0",bottom:"0",opacity:"0",type:"file",zIndex:"999",cursor:"pointer",accept:"image/*",onChange:e=>{W.mutate({blob:e.target.files[0]})}})]})}),S?(0,G.jsxs)(H.k,{mt:"1rem",flexDir:{base:"column",lg:"row"},alignItems:{base:"stretch",lg:"center"},gap:"1rem",children:[(0,G.jsxs)(b.U,{spacing:".75rem",flex:{base:void 0,lg:"1"},children:[(0,G.jsx)(v.x,{fontSize:{base:"sm",md:"md"},fontWeight:"bold",children:"\u0628\u0632\u0631\u06af \u0646\u0645\u0627\u06cc\u06cc:"}),(0,G.jsxs)(V.iR,{"aria-label":"slider-ex-1",value:j,onChange:f,min:1,max:9,flex:"1",children:[(0,G.jsx)(V.Uj,{children:(0,G.jsx)(V.Ms,{})}),(0,G.jsx)(V.gs,{bgColor:"var(--c--primary)"})]})]}),(0,G.jsxs)(b.U,{spacing:".75rem",flex:{base:void 0,lg:"1"},children:[(0,G.jsx)(v.x,{fontSize:{base:"sm",md:"md"},fontWeight:"bold",children:"\u0686\u0631\u062e\u0634:"}),(0,G.jsxs)(V.iR,{"aria-label":"slider-ex-1",value:C,onChange:y,min:0,max:360,flex:"1",children:[(0,G.jsx)(V.Uj,{children:(0,G.jsx)(V.Ms,{})}),(0,G.jsx)(V.gs,{bgColor:"var(--c--primary)"})]})]})]}):null,q.isLoading?(0,G.jsx)(N.Vp,{mt:"1rem",colorScheme:"yellow",children:"\u062f\u0631 \u062d\u0627\u0644 \u0645\u062d\u0627\u0633\u0628\u0647 \u062d\u062c\u0645..."}):$?(0,G.jsxs)(b.U,{mt:"1rem",alignItems:"flex-start",flexWrap:"wrap",children:[(0,G.jsx)(N.Vp,{colorScheme:$>s?"red":"green",children:Z($)}),$>s?(0,G.jsx)(N.Vp,{colorScheme:"red",children:"\u062d\u062f\u0627\u06a9\u062b\u0631 \u0628\u0627\u06cc\u062f ".concat(J," \u0628\u0627\u0634\u062f")}):null]}):null]}),(0,G.jsxs)(F.m,{as:b.U,children:[(0,G.jsx)(w.z,{variant:"outline",isDisabled:i||void 0===S,leftIcon:(0,G.jsx)(R.oAZ,{}),onClick:()=>M(void 0),children:"\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06cc \u062a\u0635\u0648\u06cc\u0631"}),(0,G.jsx)(w.z,{colorScheme:"telegram",isLoading:i,isDisabled:!S||$>s||!q.data,onClick:()=>l(q.data),children:"\u062b\u0628\u062a \u062a\u0635\u0648\u06cc\u0631"})]})]})]})}const $=(0,n.createContext)({});function X(){var e,t,a,n;const{token:D,sid:E,BASE_URL:R,userAvatar:P,checkForInvalidToken:Z,setUserAvatar:W}=(0,l.aC)(),q=(0,r.TH)(),K=(0,u.p)(),Q=(0,o.useQueryClient)(),T=(0,m.q)(),B=(0,m.q)(),H=(0,o.useQuery)({queryKey:["getUserInfoQuery"],staleTime:1/0,cacheTime:0,retry:0,queryFn:async()=>(await c.Z.get("".concat(R,"/profile/?full=true"),{headers:{Authorization:"Bearer ".concat(D),Sid:E}})).data.data,onError:e=>{Z(e)}}),V=(0,o.useMutation)({mutationKey:["setUserAvatarMutation"],retry:0,mutationFn:async e=>{let{avatar:t}=e;return await c.Z.put("".concat(R,"/user/avatar/"),{avatar:t},{headers:{Authorization:"Bearer ".concat(D),Sid:E}}),null===t},onSuccess:(e,t)=>{let{avatar:a}=t;W(a),Q.invalidateQueries(["getUserInfoQuery"]),T.onClose(),B.onClose(),K({title:"\u062a\u0635\u0648\u06cc\u0631 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a ".concat(e?"\u062d\u0630\u0641":"\u062b\u0628\u062a"," \u0634\u062f!"),status:"success",duration:4e3,isClosable:!0})},onError:e=>{Z(e)||K({title:"\u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647\u060c \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062b\u0628\u062a \u0646\u0634\u062f!",description:"\u0644\u0637\u0641\u0627\u064b \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f.",status:"error",duration:4e3,isClosable:!0})}});return H.isLoading||H.isFetching?(0,G.jsx)(x.M,{w:"100%",height:"81dvh",children:(0,G.jsx)(g.D,{isIndeterminate:!0})}):H.isError?(0,G.jsx)(j.M,{in:!0,children:(0,G.jsxs)(p.g,{minH:300,justify:"center",children:[(0,G.jsx)("lord-icon",{src:"https://cdn.lordicon.com/akqsdstj.json",trigger:"in",state:"in-reveal",style:{width:"80px",height:"80px"}}),(0,G.jsx)(v.x,{children:"\u0628\u0627 \u0639\u0631\u0636 \u067e\u0648\u0632\u0634\u060c \u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a!"})]})}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(j.M,{initialScale:.1,in:!0,children:(0,G.jsxs)(p.g,{mt:8,className:i.profile,children:[(0,G.jsxs)(p.g,{mb:"1rem",spacing:".75rem",children:[(0,G.jsx)(f.q,{src:P,name:H.data.first_name&&H.data.last_name?"".concat(null!==(e=H.data.first_name)&&void 0!==e?e:""," ").concat(null!==(t=H.data.last_name)&&void 0!==t?t:""):void 0,size:"xl"}),(0,G.jsxs)(b.U,{spacing:".5rem",children:[(0,G.jsx)(w.z,{colorScheme:"telegram",leftIcon:(0,G.jsx)(h.cpK,{}),isDisabled:V.isLoading,onClick:()=>B.onOpen(),children:"".concat(H.data.avatar?"\u062a\u063a\u06cc\u06cc\u0631":"\u062a\u0639\u06cc\u06cc\u0646"," \u062a\u0635\u0648\u06cc\u0631")}),H.data.avatar?(0,G.jsx)(C.h,{colorScheme:"red",icon:(0,G.jsx)(d.FH3,{}),isDisabled:V.isLoading,onClick:()=>T.onOpen()}):null]})]}),(0,G.jsxs)(b.U,{children:[(0,G.jsx)(v.x,{sx:{fontWeight:"800",fontSize:"large"},children:"".concat(null!==(a=H.data.first_name)&&void 0!==a?a:""," ").concat(null!==(n=H.data.last_name)&&void 0!==n?n:"")}),(0,G.jsx)(y.C,{fontSize:"md",borderRadius:4,variant:"solid",colorScheme:"green",children:"\u062e\u0627\u062f\u0645\u06cc\u0627\u0631"})]}),(0,G.jsxs)(b.U,{children:[(0,G.jsx)(v.x,{children:"\u06a9\u062f \u062e\u0627\u062f\u0645\u06cc\u0627\u0631\u06cc : "}),(0,G.jsx)(y.C,{fontSize:"md",borderRadius:4,variant:"solid",colorScheme:"gray",cursor:"pointer",onClick:()=>{window.navigator.clipboard&&window.navigator.clipboard.writeText("".concat(H.data.khademyari_code)).then((()=>{K({title:"\u06a9\u062f \u062e\u0627\u062f\u0645\u06cc\u0627\u0631\u06cc \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u06a9\u067e\u06cc \u0634\u062f!",status:"success",duration:4e3,isClosable:!0})}))},children:H.data.khademyari_code})]}),(0,G.jsx)(S.m,{w:"100%",mt:9,isFitted:!0,variant:"enclosed",index:"/u/p/change-password"===q.pathname?1:0,defaultIndex:"/u/p/change-password"===q.pathname?1:0,children:(0,G.jsxs)(M.t,{mb:"1em",children:[(0,G.jsx)(I.O,{as:s.rU,to:"/u/p",children:"\u0627\u0637\u0644\u0627\u0639\u0627\u062a"}),(0,G.jsx)(I.O,{as:s.rU,to:"/u/p/change-password",children:"\u06af\u0630\u0631\u0648\u0627\u0698\u0647"})]})}),(0,G.jsx)($.Provider,{value:H.data,children:(0,G.jsx)(_.xu,{w:"100%",children:(0,G.jsx)(r.j3,{})})})]})}),(0,G.jsx)(J,{title:"\u062a\u063a\u06cc\u06cc\u0631 \u062a\u0635\u0648\u06cc\u0631 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644",isOpen:B.isOpen,onClose:B.onClose,isLoading:V.isLoading,onSubmit:e=>V.mutate({avatar:e})}),(0,G.jsxs)(k.u_,{isOpen:T.isOpen,onClose:T.onClose,closeOnEsc:!V.isLoading,closeOnOverlayClick:!V.isLoading,children:[(0,G.jsx)(z.Z,{}),(0,G.jsxs)(U.h,{children:[(0,G.jsx)(L.x,{children:"\u062d\u0630\u0641 \u062a\u0635\u0648\u06cc\u0631 \u067e\u0631\u0648\u0641\u0627\u06cc\u0644"}),(0,G.jsx)(O.o,{}),(0,G.jsx)(A.f,{children:"\u0628\u0627 \u062d\u0630\u0641 \u062a\u0635\u0648\u06cc\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0622\u0646 \u0627\u0632 \u062f\u0633\u062a \u062e\u0648\u0627\u0647\u062f \u0631\u0641\u062a\u060c \u0622\u06cc\u0627 \u0627\u0632 \u062d\u0630\u0641 \u0622\u0646 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f"}),(0,G.jsxs)(F.m,{as:b.U,children:[(0,G.jsx)(w.z,{variant:"outline",isDisabled:V.isLoading,onClick:()=>T.onClose(),children:"\u0645\u0646\u0635\u0631\u0641 \u0634\u062f\u0645"}),(0,G.jsx)(w.z,{colorScheme:"red",isLoading:V.isLoading,onClick:()=>V.mutate({avatar:null}),children:"\u062d\u0630\u0641 \u062a\u0635\u0648\u06cc\u0631"})]})]})]})]})}}}]);
//# sourceMappingURL=907.de4d3410.chunk.js.map
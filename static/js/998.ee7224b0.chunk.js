"use strict";(self.webpackChunkkhademan=self.webpackChunkkhademan||[]).push([[998],{4594:(t,e,s)=>{s.d(e,{Z:()=>l});var i=s(2791),r=s(7692),a=s(884),n=s(9055),o=s(184);function l(t){const[e,s]=(0,i.useState)(!1),l=t.buttonbgcolor?t.buttonbgcolor:"var(--chakra-colors-chakra-body-bg)";return(0,o.jsxs)(a.x,{...t,maxH:e?"3000px":"120px",position:"relative",overflow:"hidden",pb:e?"4rem":"0rem",transition:"all .3s",children:[t.children,(0,o.jsx)(n.z,{w:"100%",transition:"all .3s",pt:e?"2rem":"4.5rem",pb:"2rem",position:"absolute",bottom:"0",left:"0",right:"0",variant:"text",leftIcon:e?(0,o.jsx)(r.pwh,{}):(0,o.jsx)(r.poH,{}),color:"var(--chakra-colors-chakra-body-text)",onClick:()=>s((t=>!t)),backgroundImage:"linear-gradient(to bottom, #12121200 , ".concat(l,")"),children:e?"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0645\u062a\u0631":"\u0646\u0645\u0627\u06cc\u0634 \u0628\u06cc\u0634\u062a\u0631"})]})}},5564:(t,e,s)=>{s.r(e),s.d(e,{default:()=>I});var i=s(2791),r=s(2310),a=s(1933),n=s(6849),o=s(5294),l=s(1305),c=s(4594),d=s(7901),u=s(1087),p=s(7689),h=s(1986),m=s(2904),x=s(6582),g=s(884),j=s(9589),f=s(5090),b=s(9696),w=s(5350),k=s(7438),y=s(3004),S=s(9055),v=s(571),C=s(184);function I(){const t="financial_support",{token:e,sid:s,BASE_URL:I,checkForInvalidToken:Z,authorizedAxios:_}=(0,n.aC)(),z=(0,h.p)(),A=(0,v.Z)(),[T]=(0,u.lr)(),D=(0,p.s0)(),{vip:E}=(0,p.TH)().state||{},[M,B]=(0,i.useState)(""),H=(0,a.useMutation)({mutationKey:["getPaymentLinkMutation",{slug:t}],retry:0,mutationFn:async()=>{const t=await o.Z.get("".concat(I,"/bill/?subject=Hemayat"),{headers:{Authorization:"Bearer ".concat(e),Sid:s}});if(t.data.data.items.length<=0)return z({title:"\u0627\u06cc\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0642\u0627\u0628\u0644 \u0627\u0646\u062c\u0627\u0645 \u0646\u06cc\u0633\u062a!",description:"\u0627\u0645\u06a9\u0627\u0646 \u062d\u0645\u0627\u06cc\u062a \u0641\u0639\u0644\u0627\u064b \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a.",status:"error",duration:4e3,isClosable:!0}),null;{const i=t.data.data.items[0]._id;return(await o.Z.post("".concat(I,"/pay/"),{amount:parseInt(M),bill_id:i,redirection_url:"https://shamim313.com/support"},{headers:{Authorization:"Bearer ".concat(e),Sid:s}})).data.data.payment_url}},onSuccess:t=>{t&&(z({title:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a",status:"success",duration:4e3,isClosable:!0}),window.open(t,"_self"))},onError:t=>{Z(t)||(t.response?t.response.data.message.includes("Zarinpal error")&&z({title:"\u062e\u0637\u0627\u06cc \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a",description:"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0645\u0628\u0644\u063a \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0645\u062c\u0627\u0632 \u0646\u0628\u0627\u0634\u062f\u060c \u0622\u0646\u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f!",status:"error",duration:4e3,isClosable:!0}):z({title:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f",description:"\u0644\u0637\u0641\u0627 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f.",status:"error",duration:4e3,isClosable:!0}))}}),L=(0,a.useMutation)({mutationKey:["promoteToVipMutation",{slug:t}],retry:0,mutationFn:async()=>{const t=await _.patch("/user/vip");return t.data.success?A({title:"\u062a\u0628\u0631\u06cc\u06a9 \u0634\u0645\u0627 \u0639\u0636\u0648\u06cc \u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u0634\u062f\u06cc\u062f.",description:"\u0634\u0645\u0627 \u0628\u0627\u200c\u0645\u0648\u0641\u0642\u06cc\u062a \u0628\u0647 \u0639\u0636\u0648\u06cc\u062a \u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u0634\u0645\u06cc\u0645 \u0645\u0627\u0646\u062f\u06af\u0627\u0631 \u062f\u0631\u0622\u0645\u062f\u06cc\u062f. \u062a\u0628\u0631\u06cc\u06a9 \u0645\u06cc \u06af\u0648\u06cc\u06cc\u0645.",status:"success"}):A({title:"\u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647 \u062f\u0631 \u0639\u0636\u0648\u06cc\u062a \u0634\u0645\u0627 \u062f\u0631 \u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u062e\u0637\u0627\u06cc\u06cc \u0631\u0648\u06cc \u062f\u0627\u062f",description:"\u0645\u062a\u0627\u0633\u0641\u0627\u062f\u0647 \u0639\u0636\u0648\u06cc\u062a \u0634\u0645\u0627 \u062f\u0631 \u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u0628\u0627 \u062e\u0637\u0627\u06cc\u06cc \u0631\u0648\u06cc \u0634\u062f \u0644\u0637\u0641\u0627 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u062f\u0631\u0645\u06cc\u0627\u0646 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f.",status:"error"}),t.data.success},onSuccess:t=>{t&&(localStorage.removeItem("supportVip"),D("/cities"),setTimeout((()=>{window.scrollTo({top:0,behavior:"smooth"})}),222))},onError:t=>{Z(t)||A({title:"\u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647 \u062f\u0631 \u0639\u0636\u0648\u06cc\u062a \u0634\u0645\u0627 \u062f\u0631 \u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u062e\u0637\u0627\u06cc\u06cc \u0631\u0648\u06cc \u062f\u0627\u062f",description:"\u0645\u062a\u0627\u0633\u0641\u0627\u062f\u0647 \u0639\u0636\u0648\u06cc\u062a \u0634\u0645\u0627 \u062f\u0631 \u062e\u0627\u0646\u0648\u0627\u062f\u0647 \u0628\u0627 \u062e\u0637\u0627\u06cc\u06cc \u0631\u0648\u06cc \u0634\u062f \u0644\u0637\u0641\u0627 \u0628\u0627 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u062f\u0631\u0645\u06cc\u0627\u0646 \u0628\u06af\u0630\u0627\u0631\u06cc\u062f.",status:"error"})}});return(0,i.useEffect)((()=>{const t=T.get("ps");t&&("200"===t?(L.isIdle&&(E||"onPay"===localStorage.supportVip)&&L.mutate(),A({title:"\u0628\u0627 \u0633\u067e\u0627\u0633 \u0641\u0631\u0627\u0648\u0627\u0646\u060c \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f!",description:"\u0627\u06a9\u0646\u0648\u0646 \u0634\u0645\u0627 \u06cc\u06a9\u06cc \u0627\u0632 \u062d\u0627\u0645\u06cc\u0627\u0646 \u062e\u0627\u062f\u0645\u0627\u0646 \u0627\u0645\u0627\u0645 \u0632\u0645\u0627\u0646 (\u0639\u062c) \u0647\u0633\u062a\u06cc\u062f.",status:"success",id:"paymentStatusSuccess"})):A({title:"\u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647\u060c \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f!",description:"\u062f\u0631 \u0635\u0648\u0631\u062a \u062a\u0645\u0627\u06cc\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0642\u062f\u0627\u0645 \u06a9\u0646\u06cc\u062f.",status:"error",id:"paymentStatusError"}))}),[T]),(0,C.jsx)(m.M,{initialScale:.1,in:!0,children:(0,C.jsxs)(x.k,{w:"100%",flexDirection:"column",children:[(0,C.jsx)(l.Z,{title:"\u06cc\u06a9 \u062f\u0631\u0635\u062f \u0637\u0644\u0627\u06cc\u06cc",drawerTitle:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0635\u0641\u062d\u0647 \u06cc\u06a9 \u062f\u0631\u0635\u062f \u0637\u0644\u0627\u06cc\u06cc",children:(0,C.jsxs)(x.k,{flexDirection:"column",alignItems:"stretch",gap:"1rem",children:[(0,C.jsx)(g.x,{textAlign:"justify",children:"\u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0628\u0647 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a \u0646\u0642\u062f\u06cc \u0627\u0632 \u0633\u0648\u06cc \u0627\u0641\u0631\u0627\u062f \u0648 \u0633\u0627\u0632\u0645\u0627\u0646\u200c\u0647\u0627\u06cc \u062e\u06cc\u0631\u062e\u0648\u0627\u0647 \u0648 \u0645\u062a\u0639\u0647\u062f \u0628\u0647 \u0627\u0631\u0632\u0634\u200c\u0647\u0627\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0646\u06cc\u0627\u0632\u0645\u0646\u062f\u06cc\u0645. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u0647\u062f\u0627\u06cc \u0645\u0633\u062a\u0642\u06cc\u0645 \u06cc\u0627 \u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0628\u0627\u0646\u06a9\u06cc \u06a9\u0627\u0646\u0648\u0646\u060c \u06cc\u0627 \u062e\u0631\u06cc\u062f \u0627\u0632 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627\u0634\u062f. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u06a9\u0627\u0646\u0648\u0646 \u0622\u0645\u0648\u0632\u0634\u06cc-\u0641\u0631\u0647\u0646\u06af\u06cc-\u0645\u0630\u0647\u0628\u06cc \u0627\u0645\u06a9\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u0628\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u0648 \u06a9\u0645\u06cc\u062a \u062e\u062f\u0645\u0627\u062a \u062e\u0648\u062f\u060c \u0628\u062a\u0648\u0627\u0646\u062f \u0646\u06cc\u0627\u0632\u0647\u0627\u06cc \u0631\u0648\u0632\u0627\u0641\u0632\u0648\u0646 \u062c\u0627\u0645\u0639\u0647 \u0631\u0627 \u0628\u0631\u0622\u0648\u0631\u062f\u0647 \u06a9\u0646\u062f."}),(0,C.jsx)(j.X,{fontSize:"lg",mt:".5rem",children:"\u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0627\u0632 \u06a9\u0627\u0646\u0648\u0646"}),(0,C.jsxs)(g.x,{textAlign:"justify",children:["\u0628\u0631\u0627\u06cc \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0627\u0632 \u06a9\u0627\u0646\u0648\u0646 \u062e\u0627\u062f\u0645\u0627\u0646 \u0627\u0645\u0627\u0645 \u0632\u0645\u0627\u0646 \u0639\u062c\u0644 \u062a\u0639\u0627\u0644\u06cc \u0641\u0631\u062c\u0647 \u0627\u0644\u0634\u0631\u06cc\u0641\u060c \u0644\u0637\u0641\u0627\u064b \u0641\u0631\u0645 \u062d\u0645\u0627\u06cc\u062a \u0631\u0627 \u0628\u0627 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0646 \u0645\u0628\u0644\u063a \u0648 \u0645\u062a\u0646 \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u067e\u0631 \u0628\u0641\u0631\u0645\u0627\u06cc\u06cc\u062f \u0648 \u0633\u067e\u0633 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f."," ",(0,C.jsx)(g.x,{fontWeight:"bold",color:"blue.500",display:"inline",children:"\u062f\u0642\u062a \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u0645\u0628\u0644\u063a \u0631\u0627 \u062f\u0631 \u0648\u0627\u062d\u062f \u062a\u0648\u0645\u0627\u0646 \u0627\u0633\u062a \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u067e\u0631 \u06a9\u0631\u062f\u0646 \u0641\u06cc\u0644\u062f \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0641\u0631\u0645 \u062d\u0645\u0627\u06cc\u062a \u0627\u0644\u0632\u0627\u0645\u06cc \u0646\u0645\u06cc \u0628\u0627\u0634\u062f!"})]})]})}),(0,C.jsxs)(x.k,{flexDirection:{base:"column",md:"row"},alignItems:"flex-start",gap:"2rem",children:[(0,C.jsxs)(x.k,{w:"100%",flex:"1",flexDirection:"column",gap:"1.5rem",children:[(0,C.jsx)(f.Z,{w:"100%",overflow:"hidden",children:(0,C.jsxs)("video",{width:"100%",height:"100%",controls:!0,children:[(0,C.jsx)("source",{src:"https://khademan.storage.iran.liara.space/golden_1_percent.mp4",type:"video/mp4"}),"\u0645\u0631\u0648\u0631\u06af\u0631 \u0634\u0645\u0627\u060c \u067e\u062e\u0634 \u0648\u06cc\u062f\u06cc\u0648 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc\u06a9\u0646\u062f."]})}),(0,C.jsx)(c.Z,{whiteSpace:"pre-wrap",fontSize:"sm",textAlign:"justify",color:"gray.500",children:"\u06a9\u0627\u0646\u0648\u0646 \u062e\u0627\u062f\u0645\u0627\u0646 \u0627\u0645\u0627\u0645 \u0632\u0645\u0627\u0646 (\u0639\u062c) \u06cc\u06a9 \u062a\u0634\u06a9\u06cc\u0644\u0627\u062a \u0645\u0631\u062f\u0645 \u0646\u0647\u0627\u062f \u0627\u0633\u062a \u06a9\u0647 \u0628\u0627 \u0647\u062f\u0641 \u0627\u0631\u062a\u0642\u0627\u06cc \u0633\u0637\u062d \u0639\u0644\u0645\u06cc\u060c \u0641\u0631\u0647\u0646\u06af\u06cc \u0648 \u0645\u0630\u0647\u0628\u06cc \u062c\u0627\u0645\u0639\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627 \u0628\u0631\u06af\u0632\u0627\u0631\u06cc \u062f\u0648\u0631\u0647\u200c\u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc\u060c \u06a9\u0627\u0631\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u062a\u062e\u0635\u0635\u06cc\u060c \u0645\u0633\u0627\u0628\u0642\u0627\u062a \u0639\u0644\u0645\u06cc \u0648 \u0647\u0646\u0631\u06cc\u060c \u0646\u0634\u0631 \u0645\u0637\u0627\u0644\u0628 \u0648 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0641\u0631\u0647\u0646\u06af\u06cc \u0648 \u0645\u0630\u0647\u0628\u06cc \u0648 \u0627\u06cc\u062c\u0627\u062f \u0641\u0636\u0627\u06cc\u06cc \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06cc \u062a\u0628\u0627\u062f\u0644 \u0646\u0638\u0631 \u0648 \u062a\u0639\u0627\u0645\u0644 \u0627\u0639\u0636\u0627\u060c \u0633\u0639\u06cc \u062f\u0631 \u0627\u06cc\u062c\u0627\u062f \u062a\u062d\u0648\u0644 \u0645\u062b\u0628\u062a \u062f\u0631 \u0632\u0646\u062f\u06af\u06cc \u0627\u0641\u0631\u0627\u062f \u0648 \u062c\u0627\u0645\u0639\u0647 \u062f\u0627\u0631\u062f. \u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0628\u0647 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a \u0646\u0642\u062f\u06cc \u0627\u0632 \u0633\u0648\u06cc \u0627\u0641\u0631\u0627\u062f \u0648 \u0633\u0627\u0632\u0645\u0627\u0646\u200c\u0647\u0627\u06cc \u062e\u06cc\u0631\u062e\u0648\u0627\u0647 \u0648 \u0645\u062a\u0639\u0647\u062f \u0628\u0647 \u0627\u0631\u0632\u0634\u200c\u0647\u0627\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0646\u06cc\u0627\u0632\u0645\u0646\u062f \u0627\u0633\u062a. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u0647\u062f\u0627\u06cc \u0645\u0633\u062a\u0642\u06cc\u0645 \u06cc\u0627 \u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0628\u0627\u0646\u06a9\u06cc \u06a9\u0627\u0646\u0648\u0646\u060c \u06cc\u0627 \u062e\u0631\u06cc\u062f \u0627\u0632 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627\u0634\u062f. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u06a9\u0627\u0646\u0648\u0646 \u0622\u0645\u0648\u0632\u0634\u06cc-\u0641\u0631\u0647\u0646\u06af\u06cc-\u0645\u0630\u0647\u0628\u06cc \u0627\u0645\u06a9\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u0628\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u0648 \u06a9\u0645\u06cc\u062a \u062e\u062f\u0645\u0627\u062a \u062e\u0648\u062f\u060c \u0628\u062a\u0648\u0627\u0646\u062f \u0646\u06cc\u0627\u0632\u0647\u0627\u06cc \u0631\u0648\u0632\u0627\u0641\u0632\u0648\u0646 \u062c\u0627\u0645\u0639\u0647 \u0631\u0627 \u0628\u0631\u0622\u0648\u0631\u062f\u0647 \u06a9\u0646\u062f.\n\n\u0628\u0627 \u062a\u0634\u06a9\u0631 \u0627\u0632 \u0647\u0645\u0647 \u0622\u0646\u0627\u0646 \u06a9\u0647 \u062a\u0627\u06a9\u0646\u0648\u0646 \u062f\u0631 \u062d\u0645\u0627\u06cc\u062a \u0646\u0642\u062f\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0633\u0647\u06cc\u0645 \u0628\u0648\u062f\u0647\u200c\u0627\u0646\u062f\u060c \u0627\u0632 \u0647\u0645\u0647 \u0627\u0641\u0631\u0627\u062f \u0648 \u0633\u0627\u0632\u0645\u0627\u0646\u200c\u0647\u0627\u06cc \u062e\u06cc\u0631\u062e\u0648\u0627\u0647 \u0648 \u0645\u062a\u0639\u0647\u062f \u0628\u0647 \u0627\u0631\u0632\u0634\u200c\u0647\u0627\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u062f\u0639\u0648\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f \u062a\u0627 \u0628\u0627 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u062e\u0648\u062f\u060c \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0627\u0647 \u0645\u0642\u062f\u0633 \u0647\u0645\u0631\u0627\u0647 \u0648 \u0647\u0645\u06cc\u0627\u0631 \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0636\u0645\u0646 \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634 \u0645\u0641\u0635\u0644 \u0627\u0632 \u0645\u0635\u0627\u0631\u0641 \u0648 \u062f\u0631\u0622\u0645\u062f\u0647\u0627\u06cc \u062e\u0648\u062f\u060c \u0627\u0632 \u0647\u0645\u0647 \u062d\u0627\u0645\u06cc\u0627\u0646 \u062e\u0648\u062f \u062a\u0642\u062f\u06cc\u0631 \u0648 \u062a\u0634\u06a9\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0628\u0631\u0627\u06cc \u0622\u0646\u0627\u0646 \u0622\u0631\u0632\u0648\u06cc \u0633\u0644\u0627\u0645\u062a\u06cc \u0648 \u062a\u0648\u0641\u06cc\u0642 \u0631\u0648\u0632\u0627\u0641\u0632\u0648\u0646 \u062f\u0627\u0631\u062f."})]}),(0,C.jsx)(f.Z,{w:"100%",flex:"1",children:(0,C.jsxs)(b.e,{children:[(0,C.jsxs)(w.NI,{isInvalid:!M.trim().length,children:[(0,C.jsx)(k.l,{children:"\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)"}),(0,C.jsx)(d.Z,{min:0,defaultValue:"",step:5e4,inputBgColor:"#40e0e324",onChange:t=>B(t)}),M.trim().length&&!isNaN(M)?(0,C.jsx)(w.Q6,{children:"".concat((0,r.Z)(parseInt(M))," \u062a\u0648\u0645\u0627\u0646")}):null,M.trim().length?null:(0,C.jsx)(y.J1,{children:"\u0645\u0628\u0644\u063a \u0645\u0648\u0631\u062f \u0646\u0638\u0631\u062a\u0627\u0646 \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"})]}),(0,C.jsx)(S.z,{w:"100%",mt:6,colorScheme:"telegram",isLoading:H.isLoading,onClick:()=>{H.mutate()},isDisabled:""===M||"0"===M,children:"\u0645\u0646 \u0647\u0645 \u06cc\u06a9 \u062f\u0631\u0635\u062f \u0634\u0631\u06cc\u06a9\u200c\u200c\u0627\u0645!"})]})})]})]})})}}}]);
//# sourceMappingURL=998.ee7224b0.chunk.js.map
"use strict";(self.webpackChunkkhademan=self.webpackChunkkhademan||[]).push([[564],{4594:(e,t,i)=>{i.d(t,{Z:()=>l});var r=i(2791),n=i(7692),s=i(884),a=i(9055),o=i(184);function l(e){const[t,i]=(0,r.useState)(!1),l=e.buttonbgcolor?e.buttonbgcolor:"var(--chakra-colors-chakra-body-bg)";return(0,o.jsxs)(s.x,{...e,maxH:t?"3000px":"120px",position:"relative",overflow:"hidden",pb:t?"4rem":"0rem",transition:"all .3s",children:[e.children,(0,o.jsx)(a.z,{w:"100%",transition:"all .3s",pt:t?"2rem":"4.5rem",pb:"2rem",position:"absolute",bottom:"0",left:"0",right:"0",variant:"text",leftIcon:t?(0,o.jsx)(n.pwh,{}):(0,o.jsx)(n.poH,{}),color:"var(--chakra-colors-chakra-body-text)",onClick:()=>i((e=>!e)),backgroundImage:"linear-gradient(to bottom, #12121200 , ".concat(l,")"),children:t?"\u0646\u0645\u0627\u06cc\u0634 \u06a9\u0645\u062a\u0631":"\u0646\u0645\u0627\u06cc\u0634 \u0628\u06cc\u0634\u062a\u0631"})]})}},5564:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var r=i(2791),n=i(2310),s=i(1933),a=i(6849),o=i(5294),l=i(1305),c=i(4594),d=i(7901),u=i(1087),h=i(1986),p=i(2904),m=i(6582),x=i(884),g=i(9589),j=i(5090),b=i(9696),f=i(5350),k=i(7438),w=i(3004),y=i(9055),C=i(184);function v(){const{token:e,sid:t,BASE_URL:i,checkForInvalidToken:v}=(0,a.aC)(),S=(0,h.p)(),[Z]=(0,u.lr)(),[I,_]=(0,r.useState)(""),z=(0,s.useMutation)({mutationKey:["getPaymentLinkMutation",{slug:"financial_support"}],retry:0,mutationFn:async()=>{const r=await o.Z.get("".concat(i,"/bill/?subject=Hemayat"),{headers:{Authorization:"Bearer ".concat(e),Sid:t}});if(r.data.data.items.length<=0)return S({title:"\u0627\u06cc\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0642\u0627\u0628\u0644 \u0627\u0646\u062c\u0627\u0645 \u0646\u06cc\u0633\u062a!",description:"\u0627\u0645\u06a9\u0627\u0646 \u062d\u0645\u0627\u06cc\u062a \u0641\u0639\u0644\u0627\u064b \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a.",status:"error",duration:4e3,isClosable:!0}),null;{const n=r.data.data.items[0]._id;return(await o.Z.post("".concat(i,"/pay/"),{amount:parseInt(I),bill_id:n,redirection_url:"https://shamim313.com/support"},{headers:{Authorization:"Bearer ".concat(e),Sid:t}})).data.data.payment_url}},onSuccess:e=>{e&&(S({title:"\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a",status:"success",duration:4e3,isClosable:!0}),window.open(e,"_self"))},onError:e=>{v(e)||(e.response?e.response.data.message.includes("Zarinpal error")&&S({title:"\u062e\u0637\u0627\u06cc \u062f\u0631\u06af\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a",description:"\u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0645\u0628\u0644\u063a \u0648\u0627\u0631\u062f \u0634\u062f\u0647 \u0645\u062c\u0627\u0632 \u0646\u0628\u0627\u0634\u062f\u060c \u0622\u0646\u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f!",status:"error",duration:4e3,isClosable:!0}):S({title:"\u062e\u0637\u0627\u06cc\u06cc \u0631\u062e \u062f\u0627\u062f",description:"\u0644\u0637\u0641\u0627 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u062e\u0648\u062f \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646\u06cc\u062f.",status:"error",duration:4e3,isClosable:!0}))}});return(0,r.useEffect)((()=>{const e=Z.get("ps");e&&S("200"===e?{title:"\u0628\u0627 \u0633\u067e\u0627\u0633 \u0641\u0631\u0627\u0648\u0627\u0646\u060c \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f!",description:"\u0627\u06a9\u0646\u0648\u0646 \u0634\u0645\u0627 \u06cc\u06a9\u06cc \u0627\u0632 \u062d\u0627\u0645\u06cc\u0627\u0646 \u062e\u0627\u062f\u0645\u0627\u0646 \u0627\u0645\u0627\u0645 \u0632\u0645\u0627\u0646 (\u0639\u062c) \u0647\u0633\u062a\u06cc\u062f.",status:"success",duration:4e3,isClosable:!0}:{title:"\u0645\u062a\u0627\u0633\u0641\u0627\u0646\u0647\u060c \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f!",description:"\u062f\u0631 \u0635\u0648\u0631\u062a \u062a\u0645\u0627\u06cc\u0644 \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0642\u062f\u0627\u0645 \u06a9\u0646\u06cc\u062f.",status:"error",duration:4e3,isClosable:!0})}),[Z,S]),(0,C.jsx)(p.M,{initialScale:.1,in:!0,children:(0,C.jsxs)(m.k,{w:"100%",flexDirection:"column",children:[(0,C.jsx)(l.Z,{title:"\u06cc\u06a9 \u062f\u0631\u0635\u062f \u0637\u0644\u0627\u06cc\u06cc",drawerTitle:"\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0635\u0641\u062d\u0647 \u06cc\u06a9 \u062f\u0631\u0635\u062f \u0637\u0644\u0627\u06cc\u06cc",children:(0,C.jsxs)(m.k,{flexDirection:"column",alignItems:"stretch",gap:"1rem",children:[(0,C.jsx)(x.x,{textAlign:"justify",children:"\u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0628\u0647 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a \u0646\u0642\u062f\u06cc \u0627\u0632 \u0633\u0648\u06cc \u0627\u0641\u0631\u0627\u062f \u0648 \u0633\u0627\u0632\u0645\u0627\u0646\u200c\u0647\u0627\u06cc \u062e\u06cc\u0631\u062e\u0648\u0627\u0647 \u0648 \u0645\u062a\u0639\u0647\u062f \u0628\u0647 \u0627\u0631\u0632\u0634\u200c\u0647\u0627\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0646\u06cc\u0627\u0632\u0645\u0646\u062f\u06cc\u0645. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u0647\u062f\u0627\u06cc \u0645\u0633\u062a\u0642\u06cc\u0645 \u06cc\u0627 \u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0628\u0627\u0646\u06a9\u06cc \u06a9\u0627\u0646\u0648\u0646\u060c \u06cc\u0627 \u062e\u0631\u06cc\u062f \u0627\u0632 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627\u0634\u062f. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u06a9\u0627\u0646\u0648\u0646 \u0622\u0645\u0648\u0632\u0634\u06cc-\u0641\u0631\u0647\u0646\u06af\u06cc-\u0645\u0630\u0647\u0628\u06cc \u0627\u0645\u06a9\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u0628\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u0648 \u06a9\u0645\u06cc\u062a \u062e\u062f\u0645\u0627\u062a \u062e\u0648\u062f\u060c \u0628\u062a\u0648\u0627\u0646\u062f \u0646\u06cc\u0627\u0632\u0647\u0627\u06cc \u0631\u0648\u0632\u0627\u0641\u0632\u0648\u0646 \u062c\u0627\u0645\u0639\u0647 \u0631\u0627 \u0628\u0631\u0622\u0648\u0631\u062f\u0647 \u06a9\u0646\u062f."}),(0,C.jsx)(g.X,{fontSize:"lg",mt:".5rem",children:"\u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0627\u0632 \u06a9\u0627\u0646\u0648\u0646"}),(0,C.jsxs)(x.x,{textAlign:"justify",children:["\u0628\u0631\u0627\u06cc \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0627\u0632 \u06a9\u0627\u0646\u0648\u0646 \u062e\u0627\u062f\u0645\u0627\u0646 \u0627\u0645\u0627\u0645 \u0632\u0645\u0627\u0646 \u0639\u062c\u0644 \u062a\u0639\u0627\u0644\u06cc \u0641\u0631\u062c\u0647 \u0627\u0644\u0634\u0631\u06cc\u0641\u060c \u0644\u0637\u0641\u0627\u064b \u0641\u0631\u0645 \u062d\u0645\u0627\u06cc\u062a \u0631\u0627 \u0628\u0627 \u0648\u0627\u0631\u062f \u06a9\u0631\u062f\u0646 \u0645\u0628\u0644\u063a \u0648 \u0645\u062a\u0646 \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u067e\u0631 \u0628\u0641\u0631\u0645\u0627\u06cc\u06cc\u062f \u0648 \u0633\u067e\u0633 \u0631\u0648\u06cc \u062f\u06a9\u0645\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f."," ",(0,C.jsx)(x.x,{fontWeight:"bold",color:"blue.500",display:"inline",children:"\u062f\u0642\u062a \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u062f \u06a9\u0647 \u0645\u0628\u0644\u063a \u0631\u0627 \u062f\u0631 \u0648\u0627\u062d\u062f \u062a\u0648\u0645\u0627\u0646 \u0627\u0633\u062a \u0648 \u0647\u0645\u0686\u0646\u06cc\u0646 \u067e\u0631 \u06a9\u0631\u062f\u0646 \u0641\u06cc\u0644\u062f \u062a\u0648\u0636\u06cc\u062d\u0627\u062a \u0641\u0631\u0645 \u062d\u0645\u0627\u06cc\u062a \u0627\u0644\u0632\u0627\u0645\u06cc \u0646\u0645\u06cc \u0628\u0627\u0634\u062f!"})]})]})}),(0,C.jsxs)(m.k,{flexDirection:{base:"column",md:"row"},alignItems:"flex-start",gap:"2rem",children:[(0,C.jsxs)(m.k,{w:"100%",flex:"1",flexDirection:"column",gap:"1.5rem",children:[(0,C.jsx)(j.Z,{w:"100%",overflow:"hidden",children:(0,C.jsxs)("video",{width:"100%",height:"100%",controls:!0,children:[(0,C.jsx)("source",{src:"https://khademan.storage.iran.liara.space/golden_1_percent.mp4",type:"video/mp4"}),"\u0645\u0631\u0648\u0631\u06af\u0631 \u0634\u0645\u0627\u060c \u067e\u062e\u0634 \u0648\u06cc\u062f\u06cc\u0648 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0646\u0645\u06cc\u06a9\u0646\u062f."]})}),(0,C.jsx)(c.Z,{whiteSpace:"pre-wrap",fontSize:"sm",textAlign:"justify",color:"gray.500",children:"\u06a9\u0627\u0646\u0648\u0646 \u062e\u0627\u062f\u0645\u0627\u0646 \u0627\u0645\u0627\u0645 \u0632\u0645\u0627\u0646 (\u0639\u062c) \u06cc\u06a9 \u062a\u0634\u06a9\u06cc\u0644\u0627\u062a \u0645\u0631\u062f\u0645 \u0646\u0647\u0627\u062f \u0627\u0633\u062a \u06a9\u0647 \u0628\u0627 \u0647\u062f\u0641 \u0627\u0631\u062a\u0642\u0627\u06cc \u0633\u0637\u062d \u0639\u0644\u0645\u06cc\u060c \u0641\u0631\u0647\u0646\u06af\u06cc \u0648 \u0645\u0630\u0647\u0628\u06cc \u062c\u0627\u0645\u0639\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627 \u0628\u0631\u06af\u0632\u0627\u0631\u06cc \u062f\u0648\u0631\u0647\u200c\u0647\u0627\u06cc \u0622\u0645\u0648\u0632\u0634\u06cc\u060c \u06a9\u0627\u0631\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u062a\u062e\u0635\u0635\u06cc\u060c \u0645\u0633\u0627\u0628\u0642\u0627\u062a \u0639\u0644\u0645\u06cc \u0648 \u0647\u0646\u0631\u06cc\u060c \u0646\u0634\u0631 \u0645\u0637\u0627\u0644\u0628 \u0648 \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0641\u0631\u0647\u0646\u06af\u06cc \u0648 \u0645\u0630\u0647\u0628\u06cc \u0648 \u0627\u06cc\u062c\u0627\u062f \u0641\u0636\u0627\u06cc\u06cc \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06cc \u062a\u0628\u0627\u062f\u0644 \u0646\u0638\u0631 \u0648 \u062a\u0639\u0627\u0645\u0644 \u0627\u0639\u0636\u0627\u060c \u0633\u0639\u06cc \u062f\u0631 \u0627\u06cc\u062c\u0627\u062f \u062a\u062d\u0648\u0644 \u0645\u062b\u0628\u062a \u062f\u0631 \u0632\u0646\u062f\u06af\u06cc \u0627\u0641\u0631\u0627\u062f \u0648 \u062c\u0627\u0645\u0639\u0647 \u062f\u0627\u0631\u062f. \u0645\u0627 \u0628\u0631\u0627\u06cc \u0627\u062f\u0627\u0645\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u0628\u0647 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u0635\u0648\u0631\u062a \u0646\u0642\u062f\u06cc \u0627\u0632 \u0633\u0648\u06cc \u0627\u0641\u0631\u0627\u062f \u0648 \u0633\u0627\u0632\u0645\u0627\u0646\u200c\u0647\u0627\u06cc \u062e\u06cc\u0631\u062e\u0648\u0627\u0647 \u0648 \u0645\u062a\u0639\u0647\u062f \u0628\u0647 \u0627\u0631\u0632\u0634\u200c\u0647\u0627\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u0646\u06cc\u0627\u0632\u0645\u0646\u062f \u0627\u0633\u062a. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u0647\u062f\u0627\u06cc \u0645\u0633\u062a\u0642\u06cc\u0645 \u06cc\u0627 \u0627\u0646\u062a\u0642\u0627\u0644 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0628\u0627\u0646\u06a9\u06cc \u06a9\u0627\u0646\u0648\u0646\u060c \u06cc\u0627 \u062e\u0631\u06cc\u062f \u0627\u0632 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u0631\u062a\u0628\u0637 \u0628\u0627 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627\u0634\u062f. \u0627\u06cc\u0646 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u0628\u0647 \u06a9\u0627\u0646\u0648\u0646 \u0622\u0645\u0648\u0632\u0634\u06cc-\u0641\u0631\u0647\u0646\u06af\u06cc-\u0645\u0630\u0647\u0628\u06cc \u0627\u0645\u06a9\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u0628\u0627 \u0627\u0641\u0632\u0627\u06cc\u0634 \u06a9\u06cc\u0641\u06cc\u062a \u0648 \u06a9\u0645\u06cc\u062a \u062e\u062f\u0645\u0627\u062a \u062e\u0648\u062f\u060c \u0628\u062a\u0648\u0627\u0646\u062f \u0646\u06cc\u0627\u0632\u0647\u0627\u06cc \u0631\u0648\u0632\u0627\u0641\u0632\u0648\u0646 \u062c\u0627\u0645\u0639\u0647 \u0631\u0627 \u0628\u0631\u0622\u0648\u0631\u062f\u0647 \u06a9\u0646\u062f.\n\n\u0628\u0627 \u062a\u0634\u06a9\u0631 \u0627\u0632 \u0647\u0645\u0647 \u0622\u0646\u0627\u0646 \u06a9\u0647 \u062a\u0627\u06a9\u0646\u0648\u0646 \u062f\u0631 \u062d\u0645\u0627\u06cc\u062a \u0646\u0642\u062f\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0633\u0647\u06cc\u0645 \u0628\u0648\u062f\u0647\u200c\u0627\u0646\u062f\u060c \u0627\u0632 \u0647\u0645\u0647 \u0627\u0641\u0631\u0627\u062f \u0648 \u0633\u0627\u0632\u0645\u0627\u0646\u200c\u0647\u0627\u06cc \u062e\u06cc\u0631\u062e\u0648\u0627\u0647 \u0648 \u0645\u062a\u0639\u0647\u062f \u0628\u0647 \u0627\u0631\u0632\u0634\u200c\u0647\u0627\u06cc \u0627\u0633\u0644\u0627\u0645\u06cc \u062f\u0639\u0648\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f \u062a\u0627 \u0628\u0627 \u062d\u0645\u0627\u06cc\u062a \u0645\u0627\u0644\u06cc \u062e\u0648\u062f\u060c \u062f\u0631 \u0627\u06cc\u0646 \u0631\u0627\u0647 \u0645\u0642\u062f\u0633 \u0647\u0645\u0631\u0627\u0647 \u0648 \u0647\u0645\u06cc\u0627\u0631 \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0628\u0627\u0634\u0646\u062f. \u0627\u06cc\u0646 \u06a9\u0627\u0646\u0648\u0646 \u0636\u0645\u0646 \u0627\u0631\u0627\u0626\u0647 \u06af\u0632\u0627\u0631\u0634 \u0645\u0641\u0635\u0644 \u0627\u0632 \u0645\u0635\u0627\u0631\u0641 \u0648 \u062f\u0631\u0622\u0645\u062f\u0647\u0627\u06cc \u062e\u0648\u062f\u060c \u0627\u0632 \u0647\u0645\u0647 \u062d\u0627\u0645\u06cc\u0627\u0646 \u062e\u0648\u062f \u062a\u0642\u062f\u06cc\u0631 \u0648 \u062a\u0634\u06a9\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0628\u0631\u0627\u06cc \u0622\u0646\u0627\u0646 \u0622\u0631\u0632\u0648\u06cc \u0633\u0644\u0627\u0645\u062a\u06cc \u0648 \u062a\u0648\u0641\u06cc\u0642 \u0631\u0648\u0632\u0627\u0641\u0632\u0648\u0646 \u062f\u0627\u0631\u062f."})]}),(0,C.jsx)(j.Z,{w:"100%",flex:"1",children:(0,C.jsxs)(b.e,{children:[(0,C.jsxs)(f.NI,{isInvalid:!I.trim().length,children:[(0,C.jsx)(k.l,{children:"\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)"}),(0,C.jsx)(d.Z,{min:0,defaultValue:"",step:5e4,inputBgColor:"#40e0e324",onChange:e=>_(e)}),I.trim().length&&!isNaN(I)?(0,C.jsx)(f.Q6,{children:"".concat((0,n.Z)(parseInt(I))," \u062a\u0648\u0645\u0627\u0646")}):null,I.trim().length?null:(0,C.jsx)(w.J1,{children:"\u0645\u0628\u0644\u063a \u0645\u0648\u0631\u062f \u0646\u0638\u0631\u062a\u0627\u0646 \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"})]}),(0,C.jsx)(y.z,{w:"100%",mt:6,colorScheme:"telegram",isLoading:z.isLoading,onClick:()=>{z.mutate()},isDisabled:""===I||"0"===I,children:"\u0645\u0646 \u0647\u0645 \u06cc\u06a9 \u062f\u0631\u0635\u062f \u0634\u0631\u06cc\u06a9\u200c\u200c\u0627\u0645!"})]})})]})]})})}}}]);
//# sourceMappingURL=564.dfe3901b.chunk.js.map
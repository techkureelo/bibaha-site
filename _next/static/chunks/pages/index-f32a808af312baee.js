(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5970)}])},7543:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r=n(5893);let s=e=>{let{className:t="",variant:n="primary"}=e;return(0,r.jsx)("button",{...e,className:" font-bold border  rounded-lg  px-3 py-2 text-red-500 ".concat("primary"===n?"border-red-500":" "," hover:bg-red-500 hover:border-transparent hover:text-white ").concat(t)})}},5596:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var r=n(5893);let s=e=>{let{name:t}=e;return(0,r.jsx)("div",{className:"font-bold text-2xl md:text-5xl text-red-500 text-center",children:t})}},2132:function(e,t,n){"use strict";n.d(t,{h:function(){return a}});var r=n(5893),s=n(9008),i=n.n(s);let a=e=>{let{title:t="Bibaha",description:n="Easy Invitations",icon:s="/favicon.ico"}=e;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:s})]})}},5970:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),s=n(2132),i=n(1163),a=n(6178),c=n(5596),o=n(7536),l=n(7543),u=n(7294),d=n(5561);function m(){let{replace:e}=(0,i.useRouter)(),{register:t,handleSubmit:n,formState:{errors:m}}=(0,o.cI)(),h=async t=>{let{inviteToken:n}=t;(0,a.ng)(n||"");let r=await (0,d.P)(n);r&&((0,a.ng)(n),(0,a.qC)(r.name),e("/invitation"))};return(0,u.useEffect)(()=>{let t=(0,a._B)();t&&e("/invitation")},[e]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h,{}),(0,r.jsxs)("div",{className:"flex h-screen justify-center items-center flex-col bg-red-100 py-12",children:[(0,r.jsx)(c.Y,{name:"Rupesh & Ankita's wedding."}),(0,r.jsxs)("form",{onSubmit:n(h),className:"container mx-auto md:w-60 mt-12",children:[(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsxs)("label",{className:"relative block",children:[(0,r.jsx)("span",{className:"sr-only",children:"Search"}),(0,r.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",className:"w-6 h-6 text-red-400",children:(0,r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"})})}),(0,r.jsx)("input",{placeholder:"Enter invite token",className:" h-14 placeholder:text-red-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm",...t("inviteToken",{required:!0})})]}),m.inviteToken&&(0,r.jsx)("small",{className:"text-red-700",children:"This field is required"})]}),(0,r.jsx)("div",{className:"w-full",children:(0,r.jsx)(l.z,{type:"submit",className:"w-full",children:"Submit"})})]})]})]})}},5561:function(e,t,n){"use strict";n.d(t,{P:function(){return c},N:function(){return o}});var r=n(9828),s=n(3977);let i=(0,s.ZF)({apiKey:"AIzaSyBT5tPOGY4XimFg8QoBL-2R1hb2N_jZny4",authDomain:"bibaha-60342.firebaseapp.com",projectId:"bibaha-60342",storageBucket:"bibaha-60342.appspot.com",messagingSenderId:"587452984166",appId:"1:587452984166:web:6aedd9b7d4ac018c1e76a7",measurementId:"G-H3CHYDX6GS"}),a=(0,r.ad)(i),c=async e=>{let t=(0,r.JU)(a,"users",e);try{let e=await (0,r.QT)(t);if(e.exists()){let t=e.data();return t}}catch(e){console.error(e);return}},o=async(e,t)=>{let n=(0,r.JU)(a,"users",e);try{let e=await (0,r.QT)(n);if(e.exists())return await (0,r.r7)(n,{rsvp:t}),!0}catch(e){return console.error(e),!1}}},6178:function(e,t,n){"use strict";n.d(t,{_B:function(){return i},ng:function(){return a},qC:function(){return c}});let r=e=>localStorage.getItem(e)||"",s=(e,t)=>{localStorage.setItem(e,t)},i=()=>r("inviteToken"),a=e=>s("inviteToken",e),c=e=>s("name",e)}},function(e){e.O(0,[16,706,536,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
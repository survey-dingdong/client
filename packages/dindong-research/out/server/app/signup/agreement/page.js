(()=>{var e={};e.id=118,e.ids=[118],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},19646:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>d,originalPathname:()=>u,pages:()=>p,routeModule:()=>g,tree:()=>l});var s=t(17489),n=t(92320),i=t(42942),a=t.n(i),o=t(51782),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);t.d(r,c);let l=["",{children:["signup",{children:["agreement",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,13147)),"/Users/elicer/Desktop/client/packages/dindong-research/src/app/signup/agreement/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,57461)),"/Users/elicer/Desktop/client/packages/dindong-research/src/app/signup/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,71245)),"/Users/elicer/Desktop/client/packages/dindong-research/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35432,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/elicer/Desktop/client/packages/dindong-research/src/app/signup/agreement/page.tsx"],u="/signup/agreement/page",d={require:t,loadChunk:()=>Promise.resolve()},g=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/signup/agreement/page",pathname:"/signup/agreement",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},16711:(e,r,t)=>{Promise.resolve().then(t.bind(t,88657))},16543:(e,r,t)=>{Promise.resolve().then(t.bind(t,16200))},51495:(e,r,t)=>{"use strict";var s=t(1763);r.Z=void 0;var n=s(t(57205)),i=t(95956);r.Z=(0,n.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle")},88657:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>x});var s=t(95956),n=t(51495),i=t(32835),a=t(46500),o=t(57961),c=t(48520),l=t(36746),p=t(36174),u=t(43906),d=t(41649),g=t.n(d);function x(){let[e,r]=g().useState({age:!1,dingdong:!1,privacy:!1}),t=e.age&&e.dingdong&&e.privacy;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.Z,{gap:1,children:[s.jsx(a.Z,{label:"약관 전체 동의하기",control:s.jsx(o.Z,{checked:t,icon:s.jsx(n.Z,{color:"primary",sx:{opacity:.3}}),checkedIcon:s.jsx(n.Z,{color:"primary"}),onChange:(e,t)=>r({age:e.target.checked,dingdong:e.target.checked,privacy:e.target.checked})})}),(0,s.jsxs)(i.Z,{component:"ul",sx:{p:0},children:[s.jsx(h,{checked:e.age,label:"[필수] 만 14세 이상입니다.",link:"/terms/age",onChange:(t,s)=>r({...e,age:s})}),s.jsx(h,{checked:e.dingdong,label:"[필수] 딩동 이용 약관",link:"/terms/dingdong",onChange:(t,s)=>r({...e,dingdong:s})}),s.jsx(h,{checked:e.privacy,label:"[필수] 개인정보 수집 및 이용 동의",link:"/terms/privacy",onChange:(t,s)=>r({...e,privacy:s})})]})]}),s.jsx(c.Z,{disabled:!t,LinkComponent:u.default,href:"/signup/form",children:"본인 인증"})]})}let h=({link:e,checked:r,onChange:t,...n})=>(0,s.jsxs)(l.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[s.jsx(a.Z,{...n,control:s.jsx(o.Z,{checked:r,onChange:t})}),s.jsx(p.Z,{component:u.default,href:e,color:"text.primary",children:"자세히"})]})},16200:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(95956);t(41649);var n=t(85292),i=t(97869);function a({children:e}){let r=(0,n.usePathname)(),[,,t]=r?.split("/");return s.jsx(i.uC,{title:(()=>{switch(t){case"agreement":return`회원가입을 위해
약관에 동의해주세요`;case"form":return"회원가입";default:return""}})(),children:e})}},13147:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>a});let s=(0,t(34028).createProxy)(String.raw`/Users/elicer/Desktop/client/packages/dindong-research/src/app/signup/agreement/page.tsx`),{__esModule:n,$$typeof:i}=s,a=s.default},57461:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>a});let s=(0,t(34028).createProxy)(String.raw`/Users/elicer/Desktop/client/packages/dindong-research/src/app/signup/layout.tsx`),{__esModule:n,$$typeof:i}=s,a=s.default}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[200,149,826,695,125],()=>t(19646));module.exports=s})();
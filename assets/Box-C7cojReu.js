import{t as f,j as d,v as T,w as C,e as B,b as N,a as j,x as p,T as y,C as g}from"./DefaultPropsProvider-CyOCPYDc.js";import{r}from"./index-CTjT7uj6.js";import{j as E}from"./jsx-runtime-Cw0GR0a5.js";function b(e){return Object.keys(e).length===0}function v(e=null){const t=r.useContext(f);return!t||b(t)?e:t}const w=d();function I(e=w){return v(e)}function M(e={}){const{themeId:t,defaultTheme:m,defaultClassName:a="MuiBox-root",generateClassName:n}=e,c=T("div",{shouldForwardProp:s=>s!=="theme"&&s!=="sx"&&s!=="as"})(C);return r.forwardRef(function(u,x){const o=I(m),{className:l,component:h="div",...i}=B(u);return E.jsx(c,{as:h,ref:x,className:N(l,n?n(a):a),theme:t&&o[t]||o,...i})})}const R=j("MuiBox",["root"]),D=p(),$=M({themeId:y,defaultTheme:D,defaultClassName:R.root,generateClassName:g.generate});export{$ as B,v as a,I as u};

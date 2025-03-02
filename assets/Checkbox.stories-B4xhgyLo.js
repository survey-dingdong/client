import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{C as o}from"./Tag-ijJ3Q2FL.js";import{S as a}from"./Stack-9JGWefha.js";import{T as h}from"./Typography-CHls2yLK.js";const k={title:"Control/Checkbox",component:o,argTypes:{size:{control:"radio",options:["normal","small"]},variant:{control:"select",options:["square","round","line"],description:"checkbox icon style"},indeterminate:{control:"boolean",description:"checkbox indeterminate state"}}},r={name:"Checkbox",args:{size:"normal",disabled:!1,checked:!1,variant:"square",indeterminate:!1}},c=()=>e.jsxs(a,{gap:2,children:[e.jsx(h,{variant:"label1Normal",fontWeight:"bold",children:"state"}),e.jsxs(a,{direction:"row",gap:1,children:[e.jsxs(a,{children:[e.jsx("code",{children:"unchecked"}),e.jsx(o,{checked:!1})]}),e.jsxs(a,{children:[e.jsx("code",{children:"checked"}),e.jsx(o,{checked:!0})]}),e.jsxs(a,{children:[e.jsx("code",{children:"partial"}),e.jsx(o,{checked:!0,indeterminate:!0})]})]})]});var n,t,s;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Checkbox",
  args: {
    size: "normal",
    disabled: false,
    checked: false,
    variant: "square",
    indeterminate: false
  }
}`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var i,d,l;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Stack gap={2}>
      <Typography variant="label1Normal" fontWeight="bold">
        state
      </Typography>
      <Stack direction="row" gap={1}>
        <Stack>
          <code>unchecked</code>
          <Checkbox checked={false} />
        </Stack>
        <Stack>
          <code>checked</code>
          <Checkbox checked />
        </Stack>
        <Stack>
          <code>partial</code>
          <Checkbox checked indeterminate />
        </Stack>
      </Stack>
    </Stack>;
}`,...(l=(d=c.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const m=["CheckboxPrimary","CheckboxState"],S=Object.freeze(Object.defineProperty({__proto__:null,CheckboxPrimary:r,CheckboxState:c,__namedExportsOrder:m,default:k},Symbol.toStringTag,{value:"Module"}));export{S as C,c as a};

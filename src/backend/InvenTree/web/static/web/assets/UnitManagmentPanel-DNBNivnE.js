import{j as i,S as c,bI as s,i as e,r as p}from"./vendor-BnaqX2_l.js";import{S as a}from"./BaseContext-CH9A7-TB.js";import{e as u,A as d}from"./index-fPzgLVil.js";import{u as x,I as j}from"./InvenTreeTable-rEa-i3pt.js";import{B as n}from"./ColumnRenderers-6jyK6a0i.js";import b from"./CustomUnitsTable-B24knw0f.js";import"./DesktopAppView-CAvOv5f4.js";import"./navigation-B-mN4luC.js";import"./UseForm-DwZIxEnj.js";import"./dayjs.min-DlCiWWGX.js";import"./ApiIcon-Bqf-O7I2.js";import"./Instance-DrUTN1gu.js";import"./ActionDropdown-D1A3arjv.js";import"./YesNoButton-W51do83Q.js";import"./formatters-DBeaC9UC.js";import"./CommonForms-D6scP564.js";function h(){const r=x("all-units","name"),l=p.useMemo(()=>[{accessor:"name",title:e._({id:"6YtxFj"})},n({accessor:"is_alias",title:e._({id:"EbuTi3"})}),n({accessor:"isdimensionless",title:e._({id:"jPCGbw"})})],[]);return i.jsx(j,{url:u(d.all_units),tableState:r,columns:l,props:{enableSearch:!1,enablePagination:!1,enableColumnSwitching:!1,dataFormatter:o=>{const m=o.available_units??{};return Object.entries(m).map(([f,t])=>({name:t.name,is_alias:t.is_alias,compatible_units:t.compatible_units,isdimensionless:t.isdimensionless}))}}})}function G(){return i.jsx(c,{gap:"xs",children:i.jsxs(s,{defaultValue:"custom",children:[i.jsxs(s.Item,{value:"custom",children:[i.jsx(s.Control,{children:i.jsx(a,{size:"lg",children:e._({id:"h0kQrk"})})}),i.jsx(s.Panel,{children:i.jsx(b,{})})]},"custom"),i.jsxs(s.Item,{value:"all",children:[i.jsx(s.Control,{children:i.jsx(a,{size:"lg",children:e._({id:"iJcU0G"})})}),i.jsx(s.Panel,{children:i.jsx(h,{})})]},"all")]})})}export{G as default};

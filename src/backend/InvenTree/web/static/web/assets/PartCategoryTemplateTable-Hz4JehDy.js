import{r as t,i as s,j as a,G as w,m as f}from"./vendor-BnaqX2_l.js";import{u as T,a as k,b as y,A as j}from"./UseForm-DwZIxEnj.js";import{a as M,A as i,U as p,e as C}from"./index-fPzgLVil.js";import{u as R,R as F,a as S,I as v}from"./InvenTreeTable-rEa-i3pt.js";import"./BaseContext-CH9A7-TB.js";import"./dayjs.min-DlCiWWGX.js";import"./ApiIcon-Bqf-O7I2.js";import"./Instance-DrUTN1gu.js";import"./navigation-B-mN4luC.js";import"./DesktopAppView-CAvOv5f4.js";import"./ActionDropdown-D1A3arjv.js";function $(){const r=R("part-category-parameter-templates"),l=M(),o=t.useMemo(()=>({category:{},parameter_template:{},default_value:{}}),[]),[m,u]=t.useState(0),d=T({url:i.category_parameter_list,title:s._({id:"+BLSbg"}),fields:t.useMemo(()=>({...o}),[o]),table:r}),c=k({url:i.category_parameter_list,pk:m,title:s._({id:"kF/O0U"}),fields:t.useMemo(()=>({...o}),[o]),table:r}),_=y({url:i.category_parameter_list,pk:m,title:s._({id:"O5duuA"}),table:r}),g=t.useMemo(()=>[],[]),h=t.useMemo(()=>[{accessor:"category_detail.name",title:s._({id:"K7tIrx"}),sortable:!0,switchable:!1},{accessor:"category_detail.pathstring"},{accessor:"parameter_template_detail.name",title:s._({id:"+nwoLk"}),sortable:!0,switchable:!1},{accessor:"default_value",sortable:!0,switchable:!1,render:e=>{var b;if(!(e!=null&&e.default_value))return"-";let n="";return(b=e==null?void 0:e.parameter_template_detail)!=null&&b.units&&(n=`[${e.parameter_template_detail.units}]`),a.jsxs(w,{justify:"space-between",grow:!0,children:[a.jsx(f,{children:e.default_value}),n&&a.jsx(f,{size:"xs",children:n})]})}}],[]),x=t.useCallback(e=>[F({hidden:!l.hasChangeRole(p.part),onClick:()=>{u(e.pk),c.open()}}),S({hidden:!l.hasDeleteRole(p.part),onClick:()=>{u(e.pk),_.open()}})],[l]),A=t.useMemo(()=>[a.jsx(j,{tooltip:s._({id:"+BLSbg"}),onClick:()=>d.open(),hidden:!l.hasAddRole(p.part)},"add")],[l]);return a.jsxs(a.Fragment,{children:[d.modal,c.modal,_.modal,a.jsx(v,{url:C(i.category_parameter_list),tableState:r,columns:h,props:{rowActions:x,tableFilters:g,tableActions:A,enableDownload:!0}})]})}export{$ as default};

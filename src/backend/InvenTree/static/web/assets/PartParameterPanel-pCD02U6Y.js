import{i,j as e,r as n,bD as a,bI as s}from"./vendor-BnaqX2_l.js";import{S as j}from"./BaseContext-CH9A7-TB.js";import C from"./PartParameterTemplateTable-lUDN64zc.js";import{S as c,u as F,a as A,b as R,A as S}from"./UseForm-DwZIxEnj.js";import{a as T,A as u,U as p,e as k}from"./index-fPzgLVil.js";import{R as w}from"./RemoveRowButton-Dm_wD7jw.js";import{u as M,R as D,a as q,I as L}from"./InvenTreeTable-rEa-i3pt.js";import{B as b}from"./ColumnRenderers-6jyK6a0i.js";import"./dayjs.min-DlCiWWGX.js";import"./ApiIcon-Bqf-O7I2.js";import"./Instance-DrUTN1gu.js";import"./navigation-B-mN4luC.js";import"./DesktopAppView-CAvOv5f4.js";import"./ActionDropdown-D1A3arjv.js";import"./YesNoButton-W51do83Q.js";import"./formatters-DBeaC9UC.js";function P({props:t}){const o=n.useMemo(()=>({field_type:"string",name:"value",required:!0,value:t.item.value,onValueChange:l=>{t.changeFn(t.idx,"value",l)}}),[t]),m=n.useMemo(()=>({field_type:"string",name:"label",required:!0,value:t.item.label,onValueChange:l=>{t.changeFn(t.idx,"label",l)}}),[t]),r=n.useMemo(()=>({field_type:"string",name:"description",required:!0,value:t.item.description,onValueChange:l=>{t.changeFn(t.idx,"description",l)}}),[t]),d=n.useMemo(()=>({field_type:"boolean",name:"active",required:!0,value:t.item.active,onValueChange:l=>{t.changeFn(t.idx,"active",l)}}),[t]);return e.jsxs(a.Tr,{children:[e.jsx(a.Td,{children:e.jsx(c,{fieldName:"value",fieldDefinition:o})}),e.jsx(a.Td,{children:e.jsx(c,{fieldName:"label",fieldDefinition:m})}),e.jsx(a.Td,{children:e.jsx(c,{fieldName:"description",fieldDefinition:r})}),e.jsx(a.Td,{children:e.jsx(c,{fieldName:"active",fieldDefinition:d})}),e.jsx(a.Td,{children:e.jsx(w,{onClick:()=>t.removeFn(t.idx)})})]},`table-row-${t.item.pk}`)}function v(){return{name:{},description:{},active:{},locked:{},source_plugin:{},source_string:{},choices:{label:i._({id:"ef6vAZ"}),description:i._({id:"f/qYPq"}),field_type:"table",value:[],headers:[i._({id:"wMHvYH"}),i._({id:"87a/t/"}),i._({id:"Nu4oKW"}),i._({id:"F6pfE9"})],modelRenderer:t=>e.jsx(P,{props:t}),addRow:()=>({value:"",label:"",description:"",active:!0})}}}function y(){const t=M("selectionlist"),o=T(),m=n.useMemo(()=>[{accessor:"name",sortable:!0},{accessor:"description",sortable:!0},b({accessor:"active"}),b({accessor:"locked"}),{accessor:"source_plugin",sortable:!0},{accessor:"source_string",sortable:!0},{accessor:"entry_count"}],[]),r=F({url:u.selectionlist_list,title:i._({id:"HCpwcG"}),fields:v(),table:t}),[d,l]=n.useState(void 0),f=A({url:u.selectionlist_list,pk:d,title:i._({id:"n7tNkj"}),fields:v(),table:t}),x=R({url:u.selectionlist_list,pk:d,title:i._({id:"fo+0WX"}),table:t}),_=n.useCallback(h=>[D({hidden:!o.hasChangeRole(p.admin),onClick:()=>{l(h.pk),f.open()}}),q({hidden:!o.hasDeleteRole(p.admin),onClick:()=>{l(h.pk),x.open()}})],[o]),g=n.useMemo(()=>[e.jsx(S,{onClick:()=>r.open(),tooltip:i._({id:"HCpwcG"})},"add-selection-list")],[]);return e.jsxs(e.Fragment,{children:[r.modal,f.modal,x.modal,e.jsx(L,{url:k(u.selectionlist_list),tableState:t,columns:m,props:{rowActions:_,tableActions:g,enableDownload:!0}})]})}function O(){return e.jsxs(s,{defaultValue:"parametertemplate",children:[e.jsxs(s.Item,{value:"parametertemplate",children:[e.jsx(s.Control,{children:e.jsx(j,{size:"lg",children:i._({id:"hAddRl"})})}),e.jsx(s.Panel,{children:e.jsx(C,{})})]},"parametertemplate"),e.jsxs(s.Item,{value:"selectionlist",children:[e.jsx(s.Control,{children:e.jsx(j,{size:"lg",children:i._({id:"2q2/qs"})})}),e.jsx(s.Panel,{children:e.jsx(y,{})})]},"selectionlist")]})}export{O as default};

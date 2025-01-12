import{r as m,i as t,j as a,m as _,G as v,bG as Q,cs as D,aC as N,a6 as Z,a3 as de,ek as ce,J as _e,S as me}from"./vendor-BnaqX2_l.js";import{u as ue,h as J,I as pe,i as be,R as he,a as xe,Y as fe}from"./InvenTreeTable-rEa-i3pt.js";import{u as S,a as ke,b as je,c as w}from"./UseForm-DwZIxEnj.js";import{f as we,a as U,B as k,P as ye,h as Ce}from"./ColumnRenderers-6jyK6a0i.js";import{O as Re}from"./OrderPartsWizard-BFgDSSVd.js";import{a as W,m as y,A as f,U as h,e as ge}from"./index-fPzgLVil.js";import{u as ve,a as Se}from"./BuildOrderTable-CYnZPUJ-.js";import{u as Te}from"./UseStatusCodes-CE5Vxrbg.js";import{R as Le}from"./RowExpansionIcon-qojre285.js";import{d as G}from"./BaseContext-CH9A7-TB.js";function Ae({lineItem:l,onEditAllocation:i,onDeleteAllocation:x}){const u=W(),j=G(),b=m.useMemo(()=>[{accessor:"part",title:t._({id:"vgP+9p"}),render:r=>a.jsx(U,{part:r.part_detail})},{accessor:"quantity",title:t._({id:"VbWX2u"}),render:r=>{var d;return(d=r.stock_item_detail)!=null&&d.serial?`# ${r.stock_item_detail.serial}`:r.quantity}},{accessor:"stock_item_detail.batch",title:t._({id:"rsx3xA"})},Ce({accessor:"location_detail"}),{accessor:"---actions---",title:" ",width:50,render:r=>a.jsx(be,{title:t._({id:"7L01XJ"}),index:r.pk,actions:[J({title:t._({id:"f6f1i/"}),modelType:y.stockitem,modelId:r.stock_item,navigate:j}),he({hidden:!i||!u.hasChangeRole(h.build),onClick:()=>{i==null||i(r.pk)}}),xe({hidden:!x||!u.hasDeleteRole(h.build),onClick:()=>{x==null||x(r.pk)}})]})}],[u,i,x]);return a.jsx(_e,{p:"md",children:a.jsx(me,{gap:"xs",children:a.jsx(fe,{minHeight:50,withTableBorder:!0,withColumnBorders:!0,striped:!0,pinLastColumn:!0,idAccessor:"pk",columns:b,records:l.filteredAllocations??l.allocations})})})}function De({build:l,output:i,params:x={}}){const u=W(),j=G(),b=Te({modelType:y.build}),r=m.useMemo(()=>!!(i!=null&&i.pk),[i]),d=ue(r?"buildline-output":"buildline"),T=m.useMemo(()=>(l==null?void 0:l.status)==b.PRODUCTION||(l==null?void 0:l.status)==b.PENDING||(l==null?void 0:l.status)==b.ON_HOLD,[l,b]),H=m.useMemo(()=>[{name:"allocated",label:t._({id:"A/ybx7"}),description:t._({id:"qhfAiQ"})},{name:"available",label:t._({id:"csDS2L"}),description:t._({id:"Dg4tQl"})},{name:"consumable",label:t._({id:"duCsZf"}),description:t._({id:"4xoOP+"})},{name:"optional",label:t._({id:"LLAa/9"}),description:t._({id:"JZ0XU+"})},{name:"assembly",label:t._({id:"WL36Yh"}),description:t._({id:"yTd5+B"})},{name:"testable",label:t._({id:"bJsTOf"}),description:t._({id:"LCdyP7"})},{name:"tracked",label:t._({id:"EaG6cP"}),description:t._({id:"lY29Qz"})}],[]),K=m.useCallback(e=>{const s=(e==null?void 0:e.bom_item_detail)??{},o=[];let n=e==null?void 0:e.available_stock;e.available_substitute_stock>0&&(n+=e.available_substitute_stock,o.push(a.jsx(_,{size:"sm",children:t._({id:"XTe+lK"})},"substitite"))),s.allow_variants&&e.available_variant_stock>0&&(n+=e.available_variant_stock,o.push(a.jsx(_,{size:"sm",children:t._({id:"LdvJ9e"})},"variant"))),e.in_production>0&&o.push(a.jsxs(_,{size:"sm",children:[t._({id:"G1xXyB"}),": ",e.in_production]},"production")),e.on_order>0&&o.push(a.jsxs(_,{size:"sm",children:[t._({id:"/MB+gl"}),": ",e.on_order]},"on-order")),e.external_stock>0&&o.push(a.jsxs(_,{size:"sm",children:[t._({id:"e8fwfT"}),": ",e.external_stock]},"external"));const c=n>=e.quantity-e.allocated;return c||o.push(a.jsx(_,{c:"orange",size:"sm",children:t._({id:"R7+e2m"})},"insufficient")),a.jsx(we,{icon:c?"info":"exclamation",iconColor:c?"blue":"orange",value:n>0?n:a.jsx(_,{c:"red",style:{fontStyle:"italic"},children:t._({id:"a5n/wL"})}),title:t._({id:"oGd3rK"}),extra:o})},[]),X=m.useMemo(()=>[{accessor:"bom_item",title:t._({id:"dK3Z9j"}),ordering:"part",sortable:!0,switchable:!1,render:e=>{const s=e.allocatedQuantity>0;return a.jsxs(v,{wrap:"nowrap",children:[a.jsx(Le,{enabled:s,expanded:d.isRowExpanded(e.pk)}),a.jsx(U,{part:e.part_detail})]})}},{accessor:"part_detail.IPN",sortable:!1,title:t._({id:"3wXEsN"})},{accessor:"part_detail.description",sortable:!1,title:t._({id:"Nu4oKW"})},{accessor:"bom_item_detail.reference",ordering:"reference",sortable:!0,title:t._({id:"N2C89m"})},k({accessor:"bom_item_detail.optional",ordering:"optional",hidden:r}),k({accessor:"bom_item_detail.consumable",ordering:"consumable",hidden:r}),k({accessor:"bom_item_detail.allow_variants",ordering:"allow_variants",hidden:r}),k({accessor:"bom_item_detail.inherited",ordering:"inherited",title:t._({id:"UF/nv9"}),hidden:r}),k({accessor:"part_detail.trackable",ordering:"trackable",hidden:r}),{accessor:"bom_item_detail.quantity",sortable:!0,title:t._({id:"O7oMsT"}),ordering:"unit_quantity",render:e=>{var s,o;return a.jsxs(v,{justify:"space-between",wrap:"nowrap",children:[a.jsx(_,{children:(s=e.bom_item_detail)==null?void 0:s.quantity}),((o=e==null?void 0:e.part_detail)==null?void 0:o.units)&&a.jsxs(_,{size:"xs",children:["[",e.part_detail.units,"]"]})]})}},{accessor:"quantity",title:t._({id:"D91mkk"}),sortable:!0,switchable:!1,render:e=>{var s;return a.jsxs(v,{justify:"space-between",wrap:"nowrap",children:[a.jsx(_,{children:e.requiredQuantity}),((s=e==null?void 0:e.part_detail)==null?void 0:s.units)&&a.jsxs(_,{size:"xs",children:["[",e.part_detail.units,"]"]})]})}},{accessor:"available_stock",sortable:!0,switchable:!1,render:K},{accessor:"allocated",switchable:!1,sortable:!0,hidden:!T,render:e=>{var s;return(s=e==null?void 0:e.bom_item_detail)!=null&&s.consumable?a.jsx(_,{style:{fontStyle:"italic"},children:t._({id:"f/GbFw"})}):a.jsx(ye,{progressLabel:!0,value:e.allocatedQuantity,maximum:e.requiredQuantity})}}],[r,T,d,i]),Y=ve({create:!0}),[V,$]=m.useState({}),[L,A]=m.useState(null),[ee,q]=m.useState([]),I=S({url:f.build_order_list,title:t._({id:"UcPKar"}),fields:Y,initialData:V,follow:!0,modelType:y.build}),M=S({url:f.build_order_auto_allocate,pk:l.pk,title:t._({id:"L1LMmH"}),fields:{location:{filters:{structural:!1}},exclude_location:{},interchangeable:{},substitutes:{},optional_items:{}},initialData:{location:l.take_from,interchangeable:!0,substitutes:!0,optional_items:!1},successMessage:t._({id:"xYIlpM"}),table:d,preFormContent:a.jsx(Q,{color:"green",title:t._({id:"PjEJ0F"}),children:a.jsx(_,{children:t._({id:"E2byp7"})})})}),C=Se({build:l,outputId:(i==null?void 0:i.pk)??null,buildId:l.pk,lineItems:ee,onFormSuccess:()=>{d.refreshTable()}}),R=S({url:f.build_order_deallocate,pk:l.pk,title:t._({id:"ZZL0Jx"}),fields:{build_line:{hidden:!0},output:{hidden:!0}},initialData:{build_line:L,output:(i==null?void 0:i.pk)??null},preFormContent:a.jsx(Q,{color:"red",title:t._({id:"ZZL0Jx"}),children:L==null?a.jsx(_,{children:t._({id:"9dNtWo"})}):a.jsx(_,{children:t._({id:"L01aET"})})}),successMessage:t._({id:"er7tfw"}),table:d}),[O,P]=m.useState(0),B=ke({url:f.build_item_list,pk:O,title:t._({id:"Tqnsor"}),fields:{stock_item:{disabled:!0},quantity:{}},table:d}),F=je({url:f.build_item_list,pk:O,title:t._({id:"nV5okC"}),table:d}),[te,z]=m.useState([]),g=Re({parts:te}),ae=m.useCallback(e=>{var E;const s=e.part_detail??{},o=l.status==b.PRODUCTION,n=((E=e.bom_item_detail)==null?void 0:E.consumable)??!1,c=!!(i!=null&&i.pk),p=o&&!n&&u.hasChangeRole(h.build)&&e.allocated<e.quantity&&e.trackable==c,ne=o&&!n&&u.hasChangeRole(h.build)&&e.allocated>0&&e.trackable==c,oe=!n&&u.hasAddRole(h.purchase_order)&&s.purchaseable,re=o&&!n&&u.hasAddRole(h.build)&&s.assembly;return[{icon:a.jsx(D,{}),title:t._({id:"L1LMmH"}),hidden:!p,color:"green",onClick:()=>{q([e]),C.open()}},{icon:a.jsx(N,{}),title:t._({id:"ZZL0Jx"}),hidden:!ne,color:"red",onClick:()=>{A(e.pk),R.open()}},{icon:a.jsx(Z,{}),title:t._({id:"cUzrZK"}),hidden:!oe,disabled:!d.hasSelectedRecords,color:"blue",onClick:()=>{z([e.part_detail]),g.openWizard()}},{icon:a.jsx(de,{}),title:t._({id:"vgTd7I"}),hidden:!re,color:"blue",onClick:()=>{$({part:e.part,parent:l.pk,quantity:e.quantity-e.allocated}),I.open()}},J({title:t._({id:"4BxQBj"}),modelType:y.part,modelId:e.part,navigate:j})]},[u,j,i,l,b]),ie=m.useMemo(()=>{const e=l.status==b.PRODUCTION,s=u.hasChangeRole(h.build),o=e&&s;return[a.jsx(w,{icon:a.jsx(ce,{}),tooltip:t._({id:"PjEJ0F"}),hidden:!o||r,color:"blue",onClick:()=>{M.open()}},"auto-allocate"),a.jsx(w,{hidden:!u.hasAddRole(h.purchase_order),disabled:!d.hasSelectedRecords,icon:a.jsx(Z,{}),color:"blue",tooltip:t._({id:"3u5ICq"}),onClick:()=>{z(d.selectedRecords.filter(n=>{var c,p;return((c=n.part_detail)==null?void 0:c.purchaseable)&&((p=n.part_detail)==null?void 0:p.active)}).map(n=>n.part_detail)),g.openWizard()}},"order-parts"),a.jsx(w,{icon:a.jsx(D,{}),tooltip:t._({id:"L1LMmH"}),hidden:!o,disabled:!d.hasSelectedRecords,color:"green",onClick:()=>{let n=d.selectedRecords.filter(c=>c.allocatedQuantity<c.requiredQuantity).filter(c=>{var p;return!((p=c.bom_item_detail)!=null&&p.consumable)});r?n=n.filter(c=>c.trackable):n=n.filter(c=>!c.trackable),q(n),C.open()}},"allocate-stock"),a.jsx(w,{icon:a.jsx(N,{}),tooltip:t._({id:"ZZL0Jx"}),hidden:!o||r,disabled:d.hasSelectedRecords,color:"red",onClick:()=>{A(null),R.open()}},"deallocate-stock")]},[u,l,b,r,d.hasSelectedRecords,d.selectedRecords]),se=m.useCallback(e=>e.map(s=>{let o=[...s.allocations];i!=null&&i.pk&&(o=o.filter(p=>p.install_into==i.pk));let n=0,c=s.quantity;return o.forEach(p=>{n+=p.quantity}),i!=null&&i.quantity&&s.bom_item_detail&&(c=i.quantity*s.bom_item_detail.quantity),{...s,filteredAllocations:o,requiredQuantity:c,allocatedQuantity:n}}),[i]),le=m.useMemo(()=>({allowMultiple:!0,expandable:({record:e})=>d.isRowExpanded(e.pk)||e.allocatedQuantity>0,content:({record:e})=>a.jsx(Ae,{lineItem:e,onEditAllocation:s=>{P(s),B.open()},onDeleteAllocation:s=>{P(s),F.open()}})}),[d.isRowExpanded,i]);return a.jsxs(a.Fragment,{children:[M.modal,I.modal,C.modal,R.modal,B.modal,F.modal,g.wizard,a.jsx(pe,{url:ge(f.build_line_list),tableState:d,columns:X,props:{params:{...x,build:l.pk,part_detail:!0},tableActions:ie,tableFilters:H,rowActions:ae,dataFormatter:se,enableDownload:!0,enableSelection:!0,rowExpansion:le}})]})}export{Ae as B,De as a};

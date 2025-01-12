import{r as p,i as e,j as i,a6 as f,m as o,G as h}from"./vendor-BnaqX2_l.js";import{u as x,A as y}from"./UseForm-DwZIxEnj.js";import{A as g}from"./ActionDropdown-D1A3arjv.js";import{O as j}from"./OrderPartsWizard-BFgDSSVd.js";import{c as k}from"./formatters-DBeaC9UC.js";import{a as v,A as b,m as u,U as T,e as C}from"./index-fPzgLVil.js";import{a as w}from"./PartForms-CscLTjK3.js";import{I}from"./BaseContext-CH9A7-TB.js";import{u as P,I as A}from"./InvenTreeTable-rEa-i3pt.js";import{a as M,D as R,f as S,L as W}from"./ColumnRenderers-6jyK6a0i.js";function z(){return[{accessor:"name",title:e._({id:"vgP+9p"}),sortable:!0,noWrap:!0,render:a=>M({part:a})},{accessor:"IPN",sortable:!0},{accessor:"revision",sortable:!0},{accessor:"units",sortable:!0},R({}),{accessor:"category",sortable:!0,render:a=>{var t;return(t=a.category_detail)==null?void 0:t.pathstring}},{accessor:"default_location",sortable:!0,render:a=>{var t;return(t=a.default_location_detail)==null?void 0:t.pathstring}},{accessor:"total_in_stock",sortable:!0,render:a=>{const t=[],n=(a==null?void 0:a.total_in_stock)??0,c=((a==null?void 0:a.allocated_to_build_orders)??0)+((a==null?void 0:a.allocated_to_sales_orders)??0),s=Math.max(0,n-c),r=(a==null?void 0:a.minimum_stock)??0;let d=String(n),l;return r>n&&(t.push(i.jsx(o,{c:"orange",children:`${e._({id:"Lgnuy/"})}: ${r}`},"min-stock")),l="orange"),a.ordering>0&&t.push(i.jsx(o,{children:`${e._({id:"0lg3zX"})}: ${a.ordering}`},"on-order")),a.building&&t.push(i.jsx(o,{children:`${e._({id:"oZd08v"})}: ${a.building}`},"building")),a.allocated_to_build_orders>0&&t.push(i.jsx(o,{children:`${e._({id:"KCpl4N"})}: ${a.allocated_to_build_orders}`},"bo-allocations")),a.allocated_to_sales_orders>0&&t.push(i.jsx(o,{children:`${e._({id:"DaWMWw"})}: ${a.allocated_to_sales_orders}`},"so-allocations")),s!=n&&t.push(i.jsxs(o,{children:[e._({id:"csDS2L"}),": ",s]},"available")),a.external_stock>0&&t.push(i.jsxs(o,{children:[e._({id:"e8fwfT"}),": ",a.external_stock]},"external")),n<=0?(l="red",d=e._({id:"AbC1Px"})):s<=0?l="orange":s<r&&(l="yellow"),i.jsx(S,{value:i.jsxs(h,{gap:"xs",justify:"left",wrap:"nowrap",children:[i.jsx(o,{c:l,children:d}),a.units&&i.jsxs(o,{size:"xs",c:l,children:["[",a.units,"]"]})]}),title:e._({id:"odasNw"}),extra:t})}},{accessor:"price_range",title:e._({id:"YA4hwj"}),sortable:!0,ordering:"pricing_max",render:a=>k(a.pricing_min,a.pricing_max)},W({})]}function D(){return[{name:"active",label:e._({id:"F6pfE9"}),description:e._({id:"PHri/6"}),type:"boolean"},{name:"locked",label:e._({id:"G2fuEb"}),description:e._({id:"j5DYyt"}),type:"boolean"},{name:"assembly",label:e._({id:"WL36Yh"}),description:e._({id:"oQzKsK"}),type:"boolean"},{name:"cascade",label:e._({id:"NgZniC"}),description:e._({id:"5JhtGd"}),type:"boolean"},{name:"component",label:e._({id:"dK3Z9j"}),description:e._({id:"oO7QIX"}),type:"boolean"},{name:"testable",label:e._({id:"bJsTOf"}),description:e._({id:"n8MVvQ"}),type:"boolean"},{name:"trackable",label:e._({id:"y6MnU0"}),description:e._({id:"MbixSq"}),type:"boolean"},{name:"has_units",label:e._({id:"YyRdJQ"}),description:e._({id:"WyFVby"}),type:"boolean"},{name:"has_ipn",label:e._({id:"c9/Fqb"}),description:e._({id:"jh/Aa+"}),type:"boolean"},{name:"has_stock",label:e._({id:"JqmfuT"}),description:e._({id:"6Kd+HK"}),type:"boolean"},{name:"low_stock",label:e._({id:"UgdO7s"}),description:e._({id:"GDYPCw"}),type:"boolean"},{name:"purchaseable",label:e._({id:"TW9g28"}),description:e._({id:"KMdl2R"}),type:"boolean"},{name:"salable",label:e._({id:"/3xNJ4"}),description:e._({id:"V5i7hf"}),type:"boolean"},{name:"virtual",label:e._({id:"ksX7Wx"}),description:e._({id:"QDTpY6"}),type:"choice",choices:[{value:"true",label:e._({id:"ksX7Wx"})},{value:"false",label:e._({id:"+SkaI8"})}]},{name:"is_template",label:e._({id:"62zyX+"}),description:e._({id:"utmCBg"}),type:"boolean"},{name:"is_revision",label:e._({id:"wV5kLq"}),description:e._({id:"bvyXYp"})},{name:"has_revisions",label:e._({id:"uN6v7B"}),description:e._({id:"mWe3zs"})},{name:"has_pricing",label:e._({id:"T43R5B"}),description:e._({id:"/t4j0O"}),type:"boolean"},{name:"unallocated_stock",label:e._({id:"oGd3rK"}),description:e._({id:"NINff3"}),type:"boolean"},{name:"starred",label:e._({id:"7VIaU3"}),description:e._({id:"PNFIYy"}),type:"boolean"},{name:"stocktake",label:e._({id:"gzYEcU"}),description:e._({id:"u1pAkC"}),type:"boolean"}]}function V({props:a,defaultPartData:t}){const n=p.useMemo(()=>z(),[]),c=p.useMemo(()=>D(),[]),s=P("part-list"),r=v(),d=p.useMemo(()=>t??a.params??{},[t,a.params]),l=x({url:b.part_list,title:e._({id:"rGfVOS"}),fields:w({create:!0}),initialData:d,follow:!0,modelType:u.part}),_=j({parts:s.selectedRecords}),m=p.useMemo(()=>[i.jsx(g,{tooltip:e._({id:"loB51L"}),icon:i.jsx(I,{icon:"part"}),disabled:!s.hasSelectedRecords,actions:[{name:e._({id:"3u5ICq"}),icon:i.jsx(f,{color:"blue"}),tooltip:e._({id:"RBzQBd"}),onClick:()=>{_.openWizard()}}]}),i.jsx(y,{hidden:!r.hasAddRole(T.part),tooltip:e._({id:"rGfVOS"}),onClick:()=>l.open()},"add-part")],[r,s.hasSelectedRecords]);return i.jsxs(i.Fragment,{children:[l.modal,_.wizard,i.jsx(A,{url:C(b.part_list),tableState:s,columns:n,props:{...a,enableDownload:!0,modelType:u.part,tableFilters:c,tableActions:m,enableSelection:!0,enableReports:!0,enableLabels:!0,params:{...a.params,category_detail:!0,location_detail:!0}}})]})}export{V as P};

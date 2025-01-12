import{r as o,j as t,bg as ie,ad as ne,dA as z,aU as Q,b4 as ae,d_ as se,d$ as le,bA as oe,i as a,aP as ce,bk as re,as as de,b1 as ue,ce as h,y as _e,bS as fe,bT as xe,bD as x,cq as F,G as ge,l as me}from"./vendor-BnaqX2_l.js";import{e as p,A as v,m as he,d as je}from"./index-fPzgLVil.js";import{u as be,S as J,c as d,T as j}from"./UseForm-DwZIxEnj.js";import{R as pe}from"./RemoveRowButton-Dm_wD7jw.js";import{T as ve}from"./Instance-DrUTN1gu.js";import{P as ye}from"./ColumnRenderers-6jyK6a0i.js";import{S as ke,I as c}from"./BaseContext-CH9A7-TB.js";import{u as Ce,a as Fe}from"./UseGenerator-DOw_SLei.js";function Se({supplierId:e,orderId:i,create:u}){const[l,m]=o.useState(""),[s,r]=o.useState(!0);return o.useEffect(()=>{s&&m("")},[s]),o.useEffect(()=>{r(l==="")},[l]),o.useMemo(()=>{const _={order:{filters:{supplier_detail:!0},disabled:!0},part:{filters:{part_detail:!0,supplier_detail:!0,active:!0,part_active:!0},adjustFilters:y=>({...y.filters,supplier:e})},quantity:{},reference:{},purchase_price:{icon:t.jsx(ce,{}),value:l,onValueChange:m},purchase_price_currency:{icon:t.jsx(z,{})},auto_pricing:{value:s,onValueChange:r},target_date:{icon:t.jsx(Q,{})},destination:{icon:t.jsx(re,{})},notes:{icon:t.jsx(de,{})},link:{icon:t.jsx(ue,{})}};return u&&(_.merge_items={}),_},[u,i,e,s,l])}function Oe({supplierId:e,duplicateOrderId:i}){return o.useMemo(()=>{const u={reference:{icon:t.jsx(ie,{})},description:{},supplier:{value:e,disabled:!!i||!!e,filters:{is_supplier:!0,active:!0}},supplier_reference:{},project_code:{icon:t.jsx(ne,{})},order_currency:{icon:t.jsx(z,{})},target_date:{icon:t.jsx(Q,{})},destination:{filters:{structural:!1}},link:{},contact:{icon:t.jsx(ae,{}),adjustFilters:l=>({...l.filters,company:l.data.supplier})},address:{icon:t.jsx(se,{}),adjustFilters:l=>({...l.filters,company:l.data.supplier})},responsible:{filters:{is_active:!0},icon:t.jsx(le,{})}};return i&&(u.duplicate={children:{order_id:{hidden:!0,value:i},copy_lines:{},copy_extra_lines:{}}}),u},[i,e])}function Te({props:e,record:i,statuses:u}){var I,V,D,P,S,O,L,M,B,G,R,H,K,N,U;const[l,{open:m,close:s}]=h(!1,{onClose:()=>e.changeFn(e.idx,"barcode",void 0)}),[r,g]=h(!1,{onClose:()=>e.changeFn(e.idx,"location",void 0)}),_=o.useMemo(()=>{var n;return((n=i.part_detail)==null?void 0:n.trackable)??!1},[i]);o.useEffect(()=>{i.destination&&(e.changeFn(e.idx,"location",i.destination),g.open())},[i.destination]);const y=Ce(n=>{n&&e.changeFn(e.idx,"batch_code",n)}),X=Fe(n=>{n&&e.changeFn(e.idx,"serial_numbers",n)}),[T,W]=h(!1,{onClose:()=>{e.changeFn(e.idx,"packaging",void 0)}}),[A,Z]=h(!1,{onClose:()=>{e.changeFn(e.idx,"note",void 0)}}),[k,Y]=h(!1,{onClose:()=>{e.changeFn(e.idx,"batch_code",void 0),e.changeFn(e.idx,"serial_numbers",void 0)},onOpen:()=>{var n,f;y.update({part:(n=i==null?void 0:i.supplier_part_detail)==null?void 0:n.part,order:i==null?void 0:i.order}),X.update({part:(f=i==null?void 0:i.supplier_part_detail)==null?void 0:f.part,quantity:e.item.quantity})}}),[w,$]=h(!1,{onClose:()=>e.changeFn(e.idx,"status",void 0)}),[b,q]=o.useState(""),[C,E]=o.useState(void 0);o.useEffect(()=>{e.changeFn(e.idx,"barcode",C)},[C]);const ee=o.useMemo(()=>_?a._({id:"W778m0"}):a._({id:"K5pQC8"}),[_]);o.useEffect(()=>{if(!l)return;const n=setTimeout(()=>{E(b.length?b:null),s(),q("")},500);return()=>clearTimeout(n)},[b]);const te=o.useMemo(()=>{var f;const n=a._({id:"RL9/J8"});return location===null?n:location===i.destination?a._({id:"LNKjyK"}):!i.destination&&!i.destination_detail&&i.part_detail&&location===((f=i.part_detail)==null?void 0:f.category_default_location)?a._({id:"q3WAIO"}):!i.destination&&i.destination_detail&&location===i.destination_detail.pk&&i.received>0?a._({id:"K1Mf+T"}):location===i.part_detail.default_location?a._({id:"ALFlH9"}):n},[location]);return t.jsxs(t.Fragment,{children:[t.jsx(_e,{opened:l,onClose:s,title:t.jsx(ke,{children:a._({id:"fNvDwV"})}),children:t.jsx(fe,{children:t.jsx(xe,{label:"Barcode data","data-autofocus":!0,value:b,onChange:n=>q(n.target.value)})})}),t.jsxs(x.Tr,{children:[t.jsx(x.Td,{children:t.jsxs(F,{gap:"sm",align:"center",children:[t.jsx(ve,{size:40,src:i.part_detail.thumbnail,align:"center"}),t.jsx("div",{children:i.part_detail.name})]})}),t.jsx(x.Td,{children:i.supplier_part_detail.SKU}),t.jsx(x.Td,{children:t.jsx(ye,{value:i.received,maximum:i.quantity,progressLabel:!0})}),t.jsx(x.Td,{style:{whiteSpace:"nowrap"},children:t.jsx(J,{fieldName:"quantity",fieldDefinition:{field_type:"number",value:e.item.quantity,onValueChange:n=>e.changeFn(e.idx,"quantity",n)},error:(V=(I=e.rowErrors)==null?void 0:I.quantity)==null?void 0:V.message})}),t.jsx(x.Td,{style:{width:"1%",whiteSpace:"nowrap"},children:t.jsxs(F,{gap:"1px",children:[t.jsx(d,{size:"sm",onClick:()=>g.toggle(),icon:t.jsx(c,{icon:"location"}),tooltip:a._({id:"TJYLHZ"}),tooltipAlignment:"top",variant:r?"filled":"transparent"}),t.jsx(d,{size:"sm",onClick:()=>Y.toggle(),icon:t.jsx(c,{icon:"batch_code"}),tooltip:ee,tooltipAlignment:"top",variant:k?"filled":"transparent"}),t.jsx(d,{size:"sm",icon:t.jsx(c,{icon:"packaging"}),tooltip:a._({id:"O7MZ1G"}),tooltipAlignment:"top",onClick:()=>W.toggle(),variant:T?"filled":"transparent"}),t.jsx(d,{onClick:()=>$.toggle(),icon:t.jsx(c,{icon:"status"}),tooltip:a._({id:"Gt4cm5"}),tooltipAlignment:"top",variant:w?"filled":"transparent"}),t.jsx(d,{icon:t.jsx(c,{icon:"note"}),tooltip:a._({id:"nxv8yE"}),tooltipAlignment:"top",variant:A?"filled":"transparent",onClick:()=>Z.toggle()}),C?t.jsx(d,{icon:t.jsx(c,{icon:"unlink"}),tooltip:a._({id:"ut1J8k"}),tooltipAlignment:"top",variant:"filled",color:"red",onClick:()=>E(void 0)}):t.jsx(d,{icon:t.jsx(c,{icon:"barcode"}),tooltip:a._({id:"fNvDwV"}),tooltipAlignment:"top",variant:"transparent",onClick:()=>m()}),t.jsx(pe,{onClick:()=>e.removeFn(e.idx)})]})})]}),r&&t.jsx(x.Tr,{children:t.jsx(x.Td,{colSpan:10,children:t.jsxs(ge,{grow:!0,preventGrowOverflow:!1,justify:"flex-apart",p:"xs",children:[t.jsx(me,{flex:0,p:"xs",children:t.jsx(c,{icon:"downright"})}),t.jsx(J,{fieldDefinition:{field_type:"related field",model:he.stocklocation,api_url:p(v.stock_location_list),filters:{structural:!1},onValueChange:n=>{e.changeFn(e.idx,"location",n)},description:te,value:e.item.location,label:a._({id:"wJijgU"}),icon:t.jsx(c,{icon:"location"})},defaultValue:i.destination??(i.destination_detail?i.destination_detail.pk:null)}),t.jsxs(F,{style:{marginBottom:"7px"},children:[(((D=i.part_detail)==null?void 0:D.default_location)||((P=i.part_detail)==null?void 0:P.category_default_location))&&t.jsx(d,{icon:t.jsx(c,{icon:"default_location"}),tooltip:a._({id:"j9qXAA"}),onClick:()=>{var n,f;return e.changeFn(e.idx,"location",((n=i.part_detail)==null?void 0:n.default_location)??((f=i.part_detail)==null?void 0:f.category_default_location))},tooltipAlignment:"top"}),i.destination&&t.jsx(d,{icon:t.jsx(c,{icon:"destination"}),tooltip:a._({id:"NOgnJu"}),onClick:()=>e.changeFn(e.idx,"location",i.destination),tooltipAlignment:"top"}),!i.destination&&i.destination_detail&&i.received>0&&t.jsx(d,{icon:t.jsx(c,{icon:"repeat_destination"}),tooltip:a._({id:"CKgjtC"}),onClick:()=>e.changeFn(e.idx,"location",i.destination_detail.pk),tooltipAlignment:"top"})]})]})})}),t.jsx(j,{visible:k,onValueChange:n=>e.changeFn(e.idx,"batch",n),fieldDefinition:{field_type:"string",label:a._({id:"Vea6Aj"}),description:a._({id:"s848yO"}),value:e.item.batch_code},error:(O=(S=e.rowErrors)==null?void 0:S.batch_code)==null?void 0:O.message}),t.jsx(j,{visible:k&&_,onValueChange:n=>e.changeFn(e.idx,"serial_numbers",n),fieldDefinition:{field_type:"string",label:a._({id:"VzQT2x"}),description:a._({id:"ig+UDq"}),value:e.item.serial_numbers},error:(M=(L=e.rowErrors)==null?void 0:L.serial_numbers)==null?void 0:M.message}),t.jsx(j,{visible:T,onValueChange:n=>e.changeFn(e.idx,"packaging",n),fieldDefinition:{field_type:"string",label:a._({id:"pD/Ew0"})},defaultValue:(B=i==null?void 0:i.supplier_part_detail)==null?void 0:B.packaging,error:(R=(G=e.rowErrors)==null?void 0:G.packaging)==null?void 0:R.message}),t.jsx(j,{visible:w,defaultValue:10,onValueChange:n=>e.changeFn(e.idx,"status",n),fieldDefinition:{field_type:"choice",api_url:p(v.stock_status),choices:u,label:a._({id:"uAQUqI"})},error:(K=(H=e.rowErrors)==null?void 0:H.status)==null?void 0:K.message}),t.jsx(j,{visible:A,onValueChange:n=>e.changeFn(e.idx,"note",n),fieldDefinition:{field_type:"string",label:a._({id:"KiJn9B"})},error:(U=(N=e.rowErrors)==null?void 0:N.note)==null?void 0:U.message})]})}function Le(e){const{data:i}=oe({queryKey:["stock","status"],queryFn:async()=>je.get(p(v.stock_status)).then(s=>{if(s.status===200)return Object.values(s.data.values).map(_=>({value:_.key,display_name:_.label}))})}),u=Object.fromEntries(e.items.map(s=>[s.pk,s])),l=e.items.filter(s=>s.quantity!==s.received),m={id:{value:e.orderPk,hidden:!0},items:{field_type:"table",value:l.map((s,r)=>{var g;return{line_item:s.pk,location:s.destination??((g=s.destination_detail)==null?void 0:g.pk)??null,quantity:s.quantity-s.received,batch_code:"",serial_numbers:"",status:10,barcode:null}}),modelRenderer:s=>{const r=u[s.item.line_item];return t.jsx(Te,{props:s,record:r,statuses:i},r.pk)},headers:[a._({id:"vgP+9p"}),a._({id:"y90mqQ"}),a._({id:"fZ5Vnu"}),a._({id:"VbWX2u"}),a._({id:"7L01XJ"})]},location:{filters:{structural:!1}}};return be({...e.formProps,url:p(v.purchase_order_receive,e.orderPk),title:a._({id:"MXlhj9"}),fields:m,initialData:{location:e.destinationPk},size:"80%"})}export{Le as a,Se as b,Oe as u};

import{r as c,i as r,j as e,bI as k,fa as F,fb as W,bF as M,m as _,S as g,G as C,T as w,bG as y,Z as Q,fc as Y,fd as G,bB as E,A as $}from"./vendor-BnaqX2_l.js";import{d as T,T as a}from"./BaseContext-CH9A7-TB.js";import{L as X}from"./DesktopAppView-CAvOv5f4.js";import{G as Z}from"./SettingList-CWkD4zaU.js";import{b as U,u as I,A as L,E as D}from"./UseForm-DwZIxEnj.js";import{A as q}from"./AdminButton-GD-Bfrm9.js";import{D as v,a as H}from"./DetailDrawer-M_KAZNzc.js";import{a as S,m as x,A as p,e as P}from"./index-fPzgLVil.js";import{u as R}from"./UseInstance-DbDyyJjp.js";import{u as B,R as N,a as O,I as z}from"./InvenTreeTable-rEa-i3pt.js";import{B as A}from"./ColumnRenderers-6jyK6a0i.js";import"./dayjs.min-DlCiWWGX.js";import"./ApiIcon-Bqf-O7I2.js";import"./Instance-DrUTN1gu.js";import"./navigation-B-mN4luC.js";import"./ActionDropdown-D1A3arjv.js";import"./YesNoButton-W51do83Q.js";import"./formatters-DBeaC9UC.js";function K({id:t,refreshTable:f}){var d;const{instance:s,refreshInstance:m,instanceQuery:{isFetching:b,error:l}}=R({endpoint:p.group_list,pk:t,throwError:!0,params:{permission_detail:!0}}),j=c.useMemo(()=>{if(!(s!=null&&s.permissions))return null;const u=s.permissions;return e.jsx(k,{w:"100%",children:Object.keys(u).map(o=>e.jsxs(k.Item,{value:o,children:[e.jsxs(k.Control,{children:[e.jsx(F,{children:s.permissions[o].length})," ",o]}),e.jsx(k.Panel,{children:e.jsx(W,{children:u[o].map(h=>e.jsx(F,{children:h},h))})})]},o))})},[s]);return b?e.jsx(M,{visible:!0}):l?e.jsx(_,{children:((d=l==null?void 0:l.response)==null?void 0:d.status)===404?e.jsx(a,{id:"yO7e9w",values:{id:t}}):e.jsx(a,{id:"rubZxD"})}):e.jsxs(g,{children:[e.jsx(D,{props:{url:p.group_list,pk:t,fields:{name:{}},onFormSuccess:()=>{f(),m()}},id:`group-detail-drawer-${t}`}),e.jsxs(C,{justify:"space-between",children:[e.jsx(w,{order:5,children:e.jsx(a,{id:"B7dQAo"})}),e.jsx(q,{model:x.group,id:s.pk})]}),e.jsx(C,{children:j})]})}function V(){const t=B("groups"),f=T(),s=S(),m=c.useCallback(i=>{s.hasChangePermission(x.group)&&f(`group-${i}/`)},[s]),b=c.useMemo(()=>[{accessor:"name",sortable:!0,title:r._({id:"6YtxFj"}),switchable:!1}],[]),l=c.useCallback(i=>[N({onClick:()=>m(i.pk),hidden:!s.hasChangePermission(x.group)}),O({hidden:!s.hasDeletePermission(x.group),onClick:()=>{d(i.pk),u.open()}})],[s]),[j,d]=c.useState(-1),u=U({url:p.group_list,pk:j,title:r._({id:"k/RLDM"}),successMessage:r._({id:"qYB1E/"}),table:t,preFormWarning:r._({id:"X8Qpil"})}),o=I({url:p.group_list,title:r._({id:"bm8pgG"}),fields:{name:{}},table:t}),h=c.useMemo(()=>{const i=[];return i.push(e.jsx(L,{onClick:()=>o.open(),tooltip:r._({id:"bm8pgG"}),hidden:!s.hasAddPermission(x.group)},"add-group")),i},[s]);return e.jsxs(e.Fragment,{children:[o.modal,u.modal,e.jsx(v,{title:r._({id:"46SUtl"}),renderContent:i=>!i||!i.startsWith("group-")?!1:e.jsx(K,{id:i.replace("group-",""),refreshTable:t.refreshTable})}),e.jsx(z,{url:P(p.group_list),tableState:t,columns:b,props:{rowActions:l,tableActions:h,onRowClick:i=>m(i.pk)}})]})}function J({id:t,refreshTable:f}){var u,o,h;const{instance:s,refreshInstance:m,instanceQuery:{isFetching:b,error:l}}=R({endpoint:p.user_list,pk:t,throwError:!0}),j=S(i=>{var n;return(n=i.user)==null?void 0:n.pk}),d=c.useMemo(()=>j===Number.parseInt(t,10),[j,t]);return b?e.jsx(M,{visible:!0}):l?e.jsx(_,{children:((u=l==null?void 0:l.response)==null?void 0:u.status)===404?e.jsx(a,{id:"z0pfhl",values:{id:t}}):e.jsx(a,{id:"h/t9U9"})}):e.jsxs(g,{children:[e.jsx(D,{props:{url:p.user_list,pk:t,fields:{username:{},first_name:{},last_name:{},email:{},is_active:{label:r._({id:"bhnh17"}),description:r._({id:"xYgjoW"}),disabled:d},is_staff:{label:r._({id:"F5kfLm"}),description:r._({id:"paSmTV"}),disabled:d},is_superuser:{label:r._({id:"tIIrDc"}),description:r._({id:"dNitd2"}),disabled:d}},postFormContent:d?e.jsx(y,{title:e.jsx(a,{id:"CE+M2e"}),color:"blue",icon:e.jsx(Q,{}),children:e.jsx(a,{id:"bDFcjC"})}):void 0,onFormSuccess:()=>{f(),m()}},id:`user-detail-drawer-${t}`}),e.jsxs(g,{children:[e.jsx(w,{order:5,children:e.jsx(a,{id:"zhrjek"})}),e.jsx(Y,{maxHeight:125,showLabel:"Show More",hideLabel:"Show Less",children:e.jsx(_,{ml:"md",children:s!=null&&s.groups&&((o=s==null?void 0:s.groups)==null?void 0:o.length)>0?e.jsx(G,{children:(h=s==null?void 0:s.groups)==null?void 0:h.map(i=>e.jsx(G.Item,{children:e.jsx(H,{to:`../group-${i.pk}`,text:i.name})},i.pk))}):e.jsx(a,{id:"n7RDzR"})})})]})]})}function ee(){const t=B("users"),f=T(),s=S(),m=c.useCallback(n=>{s.hasChangePermission(x.user)&&f(`user-${n}/`)},[s]),b=c.useMemo(()=>[{accessor:"username",sortable:!0,switchable:!1},{accessor:"first_name",sortable:!0},{accessor:"last_name",sortable:!0},{accessor:"email",sortable:!0},{accessor:"groups",title:r._({id:"zhrjek"}),sortable:!0,switchable:!0,render:n=>n.groups.length},A({accessor:"is_staff"}),A({accessor:"is_superuser"}),A({accessor:"is_active"})],[]),[l,j]=c.useState(-1),d=c.useCallback(n=>[N({onClick:()=>m(n.pk),hidden:!s.hasChangePermission(x.user)}),O({hidden:!s.hasDeletePermission(x.user),onClick:()=>{j(n.pk),u.open()}})],[s]),u=U({url:p.user_list,pk:l,title:r._({id:"E33LRn"}),successMessage:r._({id:"Z1AUmg"}),table:t,preFormWarning:r._({id:"af4xhp"})}),o=I({url:p.user_list,title:r._({id:"UbwSmF"}),fields:{username:{},email:{},first_name:{},last_name:{}},table:t,successMessage:r._({id:"e7XEqK"})}),h=c.useMemo(()=>{const n=[];return n.push(e.jsx(L,{onClick:o.open,tooltip:r._({id:"UbwSmF"}),hidden:!s.hasAddPermission(x.user)},"add-user")),n},[s]),i=c.useMemo(()=>[{name:"is_active",label:r._({id:"F6pfE9"}),description:r._({id:"Y4Mpdd"})},{name:"is_staff",label:r._({id:"uXsB4R"}),description:r._({id:"wrd7Ba"})},{name:"is_superuser",label:r._({id:"agYOFs"}),description:r._({id:"e1FtjW"})}],[]);return e.jsxs(e.Fragment,{children:[o.modal,u.modal,e.jsx(v,{title:r._({id:"poTr35"}),renderContent:n=>!n||!n.startsWith("user-")?!1:e.jsx(J,{id:n.replace("user-",""),refreshTable:t.refreshTable})}),e.jsx(z,{url:P(p.user_list),tableState:t,columns:b,props:{rowActions:d,tableActions:h,tableFilters:i,onRowClick:n=>m(n.pk)}})]})}function _e(){return e.jsxs(g,{gap:"xs",children:[e.jsx(w,{order:5,children:e.jsx(a,{id:"Sxm8rQ"})}),e.jsx(ee,{}),e.jsx(E,{}),e.jsx(w,{order:5,children:e.jsx(a,{id:"zhrjek"})}),e.jsx(V,{}),e.jsx(E,{}),e.jsxs(g,{gap:0,children:[e.jsx(_,{children:e.jsx(a,{id:"Tz0i8g"})}),e.jsxs(C,{children:[e.jsx(_,{c:"dimmed",children:e.jsx(a,{id:"L83fOm"})}),e.jsx($,{component:X,to:"/settings/system",children:e.jsx(a,{id:"zNkWa6"})})]})]}),e.jsx(Z,{keys:["LOGIN_ENABLE_REG","SIGNUP_GROUP","LOGIN_ENABLE_SSO_REG"]})]})}export{_e as default};

import{j as a,r as m,cp as h,S as D,G as w,bz as g,f9 as k,m as u,bB as v}from"./vendor-BnaqX2_l.js";import{L as C}from"./DesktopAppView-CAvOv5f4.js";import{u as j}from"./index-fPzgLVil.js";import{g as L,h as S,d as b,C as N}from"./BaseContext-CH9A7-TB.js";var c="_14mg3d20";function R({title:e,position:s="right",size:r,closeOnEscape:t=!0,renderContent:n}){const l=b(),{id:o}=N(),i=n(o),p=m.useMemo(()=>!!o&&!!i,[o,i]),[f,d]=j(x=>[x.detailDrawerStack,x.addDetailDrawer]);return a.jsx(h,{opened:p,onClose:()=>{l("../"),d(!1)},position:s,closeOnEscape:t,size:r,classNames:{root:c,body:c},scrollAreaComponent:D,title:a.jsxs(w,{children:[f>0&&a.jsx(g,{variant:"outline",onClick:()=>{l(-1),d(-1)},children:a.jsx(k,{})}),a.jsx(u,{size:"xl",fw:600,variant:"gradient",children:e})]}),children:a.jsxs(D,{gap:"xs",className:c,children:[a.jsx(v,{}),i]})})}function I(e){return a.jsx(L,{children:a.jsx(S,{path:":id?/",element:a.jsx(R,{...e})})})}function y({to:e,text:s}){const r=j(n=>n.addDetailDrawer),t=m.useCallback(()=>{r(1)},[r]);return a.jsx(C,{to:e,onClick:t,children:a.jsx(u,{children:s})})}export{I as D,y as a};

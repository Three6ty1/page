import{b as c,c as l,e as s,f as d,g as b,k as p}from"/build/_shared/chunk-U32H4XJQ.js";import{c as o,d as y,e as w}from"/build/_shared/chunk-DWFMXSZ6.js";var e=o(y(),1);var f="/build/_assets/global-467E5OBI.css";var t=o(w(),1),z=()=>[{rel:"stylesheet",href:f},{rel:"manifest",href:"/manifest.json"}],Y=()=>[{title:"Arknights Wordle"},{property:"og:title",content:"Arknights Wordle"},{name:"description",content:"Arknights Wordle project by Three6ty1"}];function m(){return(0,t.jsx)(h,{children:(0,t.jsx)(u,{children:(0,t.jsx)(l,{})})})}function h({children:r,title:a}){return(0,t.jsxs)("html",{lang:"en",children:[(0,t.jsxs)("head",{children:[(0,t.jsx)("meta",{charSet:"utf-8",name:"viewport",content:"width=device-width,initial-scale=1,initial-scale=1, maximum-scale=1, user-scalable=0"}),a?(0,t.jsx)("title",{children:a}):null,(0,t.jsx)(d,{}),(0,t.jsx)(s,{})]}),(0,t.jsxs)("body",{className:"no-scrollbar",children:[r,(0,t.jsx)(X,{}),(0,t.jsx)(p,{}),(0,t.jsx)(b,{}),!1]})]})}function u({children:r}){return(0,t.jsx)("div",{className:"remix-app",children:r})}function j({error:r}){return console.error(r),(0,t.jsx)(h,{title:"Error!",children:(0,t.jsx)(u,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"There was an error"}),(0,t.jsx)("p",{children:r.message}),(0,t.jsx)("hr",{}),(0,t.jsx)("p",{children:"Hey, developer, you should replace this with what you want your users to see."})]})})})}var X=e.memo(()=>{let[r,a]=e.useState(!1),[v,k]=e.useState(""),i=c();e.useEffect(()=>{a(!0)},[]);let n=e.useRef(!0);return e.useEffect(()=>{if(n.current){n.current=!1;return}let g=i.pathname==="/"?"Home page":document.title;k(`Navigated to ${g}`)},[i.pathname]),r?(0,t.jsx)("div",{"aria-live":"assertive","aria-atomic":!0,id:"route-change-region",style:{border:"0",clipPath:"inset(100%)",clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0",position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},children:v}):null});export{j as ErrorBoundary,m as default,z as links,Y as meta};
"use strict";(self.webpackChunkreact_main=self.webpackChunkreact_main||[]).push([[678],{1678:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var r=t(5043),s=t(2295),c=t(3216),o=t(579);const u={count:0};function l(e,n){switch(n.type){case"increment":return{count:e.count+n.payload};case"decrement":return{count:e.count-Number(n.payload)};default:throw new Error}}const a=()=>{const[e,n]=r.useReducer(l,u);return(0,o.jsxs)(o.Fragment,{children:["Count: ",e.count,(0,o.jsx)("button",{onClick:()=>n({type:"decrement",payload:"5"}),children:"-"}),(0,o.jsx)("button",{onClick:()=>n({type:"increment",payload:5}),children:"+"})]})},i=(0,r.memo)(a),d=()=>{const e=(0,r.useRef)(null),n=(0,r.useRef)(null),t=(0,r.useRef)(null);return(0,r.useEffect)((()=>{var r;console.log(e.current,n.current),null===(r=t.current)||void 0===r||r.focus()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{ref:e,children:"Ref1"}),(0,o.jsx)("div",{ref:n,children:"Ref2"}),(0,o.jsx)("input",{ref:t,type:"text"}),(0,o.jsx)(i,{})]})},m=(0,r.memo)(d),x=e=>{let{age:n=21}=e;return(0,o.jsxs)(o.Fragment,{children:["Age: ",n]})},h=(0,r.memo)(x),j=()=>{const[e,n]=(0,r.useState)("");return(0,o.jsx)("input",{type:"text",name:"name",value:e,onChange:e=>{n(e.currentTarget.value)}})},p=(0,r.memo)(j);var f=function(e){return e.Red="red",e.Green="green",e}(f||{});const g=(0,r.memo)((e=>{let{color:n}=e;return(0,o.jsx)("div",{style:{color:n},children:"TypescriptEnum"})})),y=(0,r.memo)((()=>{const[e,n]=(0,r.useState)(f.Red);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("select",{onChange:e=>{n(e.target.value)},children:[(0,o.jsx)("option",{value:"red",children:"red"}),(0,o.jsx)("option",{value:"green",children:"green"})]}),(0,o.jsx)(g,{color:e})]})})),v=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{}),(0,o.jsx)(s.A,{routes:[{to:"/typescript/hooks",title:"Hooks"}]}),(0,o.jsx)(c.BV,{children:(0,o.jsx)(c.qh,{path:"/typescript/hooks",element:(0,o.jsx)(m,{})})}),(0,o.jsx)(h,{}),(0,o.jsx)(p,{})]}),k=(0,r.memo)(v)}}]);
//# sourceMappingURL=678.73070658.chunk.js.map
"use strict";(self.webpackChunkreact_main=self.webpackChunkreact_main||[]).push([[90],{8178:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(2791),r=t(1694),i=t.n(r),s={component:"component_component__kuoNT"},l=t(184),u=function(e){var n=e.title,t=e.children;return(0,l.jsxs)("div",{className:i()(s.host,"taComponent"),children:[(0,l.jsx)("h3",{className:s.title,children:n}),(0,l.jsx)("div",{className:s.body,children:t})]})},o=(0,a.memo)(u)},8090:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(2791),r=t(5671),i=t(3144),s=t(136),l=t(9388),u=a.createContext("ru"),o=t(184),c=(0,a.memo)((function(){var e="en"===(0,a.useContext)(u)?"Submit":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c";return(0,o.jsx)("button",{type:"button",children:e})})),h=(0,a.memo)((function(){var e="en"===(0,a.useContext)(u)?"Name":"\u0418\u043c\u044f";return(0,o.jsxs)("p",{children:[(0,o.jsx)("label",{htmlFor:"contextFieldName",children:e}),(0,o.jsx)("input",{type:"text",id:"contextFieldName"})]})})),x=(0,a.memo)((function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(h,{}),(0,o.jsx)(c,{})]})})),d=function(e){(0,s.Z)(t,e);var n=(0,l.Z)(t);function t(){var e;(0,r.Z)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=n.call.apply(n,[this].concat(i))).state={language:"en"},e.onLanguageChange=function(n,t){t.preventDefault(),e.setState({language:n})},e}return(0,i.Z)(t,[{key:"render",value:function(){return(0,o.jsxs)("div",{className:"context-test",children:["Select language:",(0,o.jsx)("a",{className:"context-test__link",href:"/",onClick:this.onLanguageChange.bind(this,"en"),children:"en"}),(0,o.jsx)("a",{className:"context-test__link",href:"/",onClick:this.onLanguageChange.bind(this,"ru"),children:"ru"}),(0,o.jsx)(u.Provider,{value:this.state.language,children:(0,o.jsx)(x,{})})]})}}]),t}(a.Component),m=t(8178),v=t(9439),j=a.createContext({value:{},setValue:function(){}}),g=(0,a.memo)((function(){var e=(0,a.useContext)(j),n=e.setValue,t=e.value;return(0,o.jsxs)(o.Fragment,{children:["Context value: ",JSON.stringify(t),(0,o.jsxs)("select",{name:"outsideContextSelect",onChange:n,children:[(0,o.jsx)("option",{value:"1",children:"1"}),(0,o.jsx)("option",{value:"2",children:"2"}),(0,o.jsx)("option",{value:"3",children:"3"})]})]})})),f=(0,a.memo)((function(){var e=(0,a.useState)(null),n=(0,v.Z)(e,2),t=n[0],r=n[1];return(0,o.jsx)(j.Provider,{value:{value:t,setValue:function(e){r(e.target.value)}},children:(0,o.jsx)(g,{})})})),p=(0,a.memo)((function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.Z,{title:"OusideChange",children:(0,o.jsx)(f,{})}),(0,o.jsx)(m.Z,{title:"Language example",children:(0,o.jsx)(d,{})})]})}))}}]);
//# sourceMappingURL=90.fa675c14.chunk.js.map
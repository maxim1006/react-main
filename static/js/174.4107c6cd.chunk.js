"use strict";(self.webpackChunkreact_main=self.webpackChunkreact_main||[]).push([[174],{3748:(e,t,n)=>{n.d(t,{O:()=>a});var r=n(5043),s=n(579);class a extends r.Component{constructor(){super(...arguments),this.state={activeTab:0},this.onClick=e=>{this.setState(((t,n)=>({activeTab:e})))}}componentDidMount(){const{activeTab:e}=this.props;void 0!==e&&this.setState({activeTab:e})}render(){const{children:e}=this.props;if(e){const t=[],n=[];return r.Children.map(e,((e,r)=>{t.push(this.getTabsHeaderView(e,r)),n.push(this.getTabsBody(e,r))})),(0,s.jsxs)("div",{className:"tabs",children:[(0,s.jsx)("div",{className:"tabs__header",children:t}),(0,s.jsx)("div",{className:"tabs__content",children:n})]})}}getTabsHeaderView(e,t){return(0,s.jsx)("div",{onClick:this.onClick.bind(this,t),className:"tabs__header-item".concat(t===this.state.activeTab?" _active":""),children:e.props.tabName},crypto.randomUUID())}getTabsBody(e,t){return t===this.state.activeTab?(0,s.jsx)("div",{className:"tabs__content-item",children:e.props.children},t):""}}},8174:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(5043),s=n(3748);function a(e,t){return i(e,t,window.localStorage)}function i(e,t,n){const[s,a]=(0,r.useState)((()=>{const r=n.getItem(e);return null!=r?JSON.parse(r):"function"===typeof t?t():t}));(0,r.useEffect)((()=>{if(void 0===s)return n.removeItem(e);n.setItem(e,JSON.stringify(s))}),[e,s,n]);const i=(0,r.useCallback)((()=>{a(void 0)}),[]);return[s,a,i]}const l=new class{constructor(){this.listeners=[]}addListener(e,t){this.listeners.push({itemKey:e,callback:t})}removeListener(e,t){this.listeners=this.listeners.filter((n=>n.itemKey!==e&&n.callback!==t))}read(e){try{return JSON.parse(window.localStorage.getItem(e)||"null")}catch(t){console.error("Reading LocalStorage error ",t)}}write(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.error("Writing LocalStorage error ",n)}this.listeners.forEach((n=>{n.itemKey===e&&n.callback(t)}))}},o=e=>{const[t,n]=(0,r.useState)((()=>l.read(e))),s=(0,r.useCallback)((n=>{const r="function"===typeof n?n(t):n;l.write(e,r)}),[e,t]);return(0,r.useEffect)((()=>{const t=e=>n(e);return l.addListener(e,t),()=>l.removeListener(e,t)}),[e]),[t,s]},c="storage-hook-problem_childHost__-N1pQ";function u(e,t){const n=(0,r.useSyncExternalStore)(d,(()=>h(e)),j),s=(0,r.useCallback)((t=>{const r=t instanceof Function?t(n):t;void 0===r||null===r?v(e):p(e,r)}),[e,n]);return(0,r.useEffect)((()=>{null===h(e)&&"undefined"!==typeof t&&p(e,t)}),[e,t]),"undefined"===typeof window?[t,()=>{}]:[n,s]}const d=e=>"undefined"===typeof window?()=>{}:(window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)),h=e=>{if("undefined"!==typeof window)try{const t=JSON.parse(window.localStorage.getItem(e)||"null");return null!==t&&void 0!==t?t:""}catch(t){console.error("Error while retrieving from the LocalStorage ",t)}},p=(e,t)=>{if("undefined"!==typeof window)try{const n=JSON.stringify(t);window.localStorage.setItem(e,n),x(e,n)}catch(n){console.error("Error while writing to the LocalStorage ",n)}},v=e=>{if("undefined"!==typeof window)try{window.localStorage.removeItem(e),x(e,null)}catch(t){return void console.error("Error while retrieving from the LocalStorage ",t)}},x=(e,t)=>{"undefined"!==typeof window&&window.dispatchEvent(new StorageEvent("storage",{key:e,newValue:t}))},j=()=>{};var g=n(579);const S=()=>{const[e,t]=a("prop1");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h4",{children:"Problem"}),(0,g.jsx)("p",{children:"Value changes in parent its ok"}),(0,g.jsx)("input",{onChange:e=>t(e.target.value),type:"text"}),(0,g.jsx)(m,{parentProp:e,setValue:t}),(0,g.jsx)(f,{parentProp:e,setValue:t})]})};function m(e){let{parentProp:t,setValue:n}=e;const[r,s]=a("prop1"),[i,l]=o("service"),[d,h]=o("serviceObj"),[p,v]=u("useLocalStorageUseSyncExternalStore","");return(0,g.jsxs)("section",{className:c,children:[(0,g.jsx)("h4",{children:"Props in Child1"}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"parentProp:"}),(0,g.jsx)("p",{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043d\u043e \u043d\u0430\u0434\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 value \u0438 setValue \u0438\u0437 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0432\u0433\u043b\u0443\u0431\u044c \u0432\u0441\u0435\u0445 \u0447\u0430\u0439\u043b\u0434\u043e\u0432"}),(0,g.jsx)("input",{value:t,onChange:e=>n(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"valueInner works only in component:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u043e\u0431\u044b\u0447\u043d\u044b\u0439 useLocalStorage \u0438 \u0434\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 localStorage \u043d\u043e \u043d\u0435 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432 sibling"}),(0,g.jsx)("input",{value:r,onChange:e=>s(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"useSyncExternalStoreState solves the problem:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 c useSyncExternalStoreState"}),(0,g.jsx)("input",{value:p||"",onChange:e=>v(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"valueService solves the problem:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 c valueService"}),(0,g.jsx)("input",{value:i||"",onChange:e=>l(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"valueServiceObj:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0432 valueService"}),(0,g.jsx)("input",{value:null===d||void 0===d?void 0:d.prop,onChange:e=>h({prop:e.target.value}),type:"text"})]})]})}function f(e){let{parentProp:t,setValue:n}=e;const[r,s]=a("prop1"),[i,l]=o("service"),[d,h]=o("serviceObj"),[p,v]=u("useLocalStorageUseSyncExternalStore","");return(0,g.jsxs)("section",{className:c,children:[(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"Props in Child2"}),(0,g.jsx)("p",{children:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442, \u043d\u043e \u043d\u0430\u0434\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0438 value \u0438 setValue \u0438\u0437 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u0432\u0433\u043b\u0443\u0431\u044c \u0432\u0441\u0435\u0445 \u0447\u0430\u0439\u043b\u0434\u043e\u0432"}),(0,g.jsx)("input",{value:t,onChange:e=>n(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"valueInner works only in component:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e \u043e\u0431\u044b\u0447\u043d\u044b\u0439 useLocalStorage \u0438 \u0434\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 localStorage \u043d\u043e \u043d\u0435 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432 sibling"}),(0,g.jsx)("input",{value:r,onChange:e=>s(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"useSyncExternalStoreState solves the problem:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 c useSyncExternalStoreState"}),(0,g.jsx)("input",{value:p||"",onChange:e=>v(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"valueService solves the problem:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 c valueService"}),(0,g.jsx)("input",{value:i||"",onChange:e=>l(e.target.value),type:"text"})]}),(0,g.jsxs)("article",{children:[(0,g.jsx)("h4",{children:"valueServiceObj:"}),(0,g.jsx)("p",{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c \u0432 valueService"}),(0,g.jsx)("input",{value:null===d||void 0===d?void 0:d.prop,onChange:e=>h({prop:e.target.value}),type:"text"})]})]})}const y=(0,r.memo)(S);var w=n(4600),b=n.n(w);const C=(0,r.memo)((function(){const e=(0,r.useRef)(null),t=(0,r.useRef)(null),[n,s,l]=i("name",o,window.sessionStorage);var o;const[c,u,d]=a("age");return(0,g.jsxs)("div",{className:b()("class class1"),children:[(0,g.jsxs)("section",{style:{marginBottom:"30px"},children:[(0,g.jsx)("h3",{children:"Session storage"}),(0,g.jsxs)("p",{children:["Value: ",n]}),(0,g.jsx)("input",{ref:e,type:"text"}),(0,g.jsx)("button",{onClick:()=>s(e.current.value),children:"Set sessionStorage value"}),(0,g.jsx)("button",{onClick:()=>l(e.current.value),children:"Remove sessionStorage value"})]}),(0,g.jsxs)("section",{style:{marginBottom:"30px"},children:[(0,g.jsx)("h3",{children:"Local storage"}),(0,g.jsxs)("p",{children:["Value: ",c]}),(0,g.jsx)("input",{ref:t,type:"text"}),(0,g.jsx)("button",{onClick:()=>u(t.current.value),children:"Set local value"}),(0,g.jsx)("button",{onClick:()=>d(t.current.value),children:"Remove local value"})]}),(0,g.jsx)(y,{})]})}));function k(){return(0,g.jsx)(s.O,{children:(0,g.jsx)("div",{tabName:"React",children:(0,g.jsx)(C,{})})})}}}]);
//# sourceMappingURL=174.4107c6cd.chunk.js.map
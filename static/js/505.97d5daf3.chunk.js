(self.webpackChunkreact_main=self.webpackChunkreact_main||[]).push([[505],{192:(e,t,n)=>{"use strict";n.d(t,{Mz:()=>a});var o="NOT_FOUND";var i=function(e,t){return e===t};function r(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,s=void 0===r?i:r,a=n.maxSize,l=void 0===a?1:a,c=n.resultEqualityCheck,d=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var o=t.length,i=0;i<o;i++)if(!e(t[i],n[i]))return!1;return!0}}(s),p=1===l?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(d):function(e,t){var n=[];function i(e){var i=n.findIndex((function(n){return t(e,n.key)}));if(i>-1){var r=n[i];return i>0&&(n.splice(i,1),n.unshift(r)),r.value}return o}return{get:i,put:function(t,r){i(t)===o&&(n.unshift({key:t,value:r}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(l,d);function u(){var t=p.get(arguments);if(t===o){if(t=e.apply(null,arguments),c){var n=p.getEntries().find((function(e){return c(e.value,t)}));n&&(t=n.value)}p.put(arguments,t)}return t}return u.clearCache=function(){return p.clear()},u}function s(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];var r,s=0,a={memoizeOptions:void 0},l=o.pop();if("object"===typeof l&&(a=l,l=o.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=a.memoizeOptions,d=void 0===c?n:c,p=Array.isArray(d)?d:[d],u=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}(o),h=e.apply(void 0,[function(){return s++,l.apply(null,arguments)}].concat(p)),f=e((function(){for(var e=[],t=u.length,n=0;n<t;n++)e.push(u[n].apply(null,arguments));return r=h.apply(null,e)}));return Object.assign(f,{resultFunc:l,memoizedResultFunc:h,dependencies:u,lastResult:function(){return r},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),f}}var a=s(r)},526:(e,t,n)=>{"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(5043)),s=a(n(5173));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!1,d=!1,p=!1,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onScriptLoaded=function(){t.stripeHandler||(t.stripeHandler=StripeCheckout.configure({key:n.props.stripeKey}),n.hasPendingClick&&n.showStripeDialog())},n.onScriptError=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.hideLoadingDialog(),n.props.onScriptError&&n.props.onScriptError.apply(n,t)},n.onClosed=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n._isMounted&&n.setState({open:!1}),n.props.closed&&n.props.closed.apply(n,t)},n.onOpened=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];n.setState({open:!0}),n.props.opened&&n.props.opened.apply(n,t)},n.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce((function(e,t){return o({},e,n.props.hasOwnProperty(t)&&l({},t,n.props[t]))}),{opened:n.onOpened,closed:n.onClosed})},n.onClick=function(){if(!n.props.disabled)if(p)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch(e){}else t.stripeHandler?n.showStripeDialog():(n.showLoadingDialog(),n.hasPendingClick=!0)},n.handleOnMouseDown=function(){n.setState({buttonActive:!0})},n.handleOnMouseUp=function(){n.setState({buttonActive:!1})},n.state={open:!1,buttonActive:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;if(this._isMounted=!0,!d&&!c){c=!0;var t=document.createElement("script");"function"===typeof this.props.onScriptTagCreated&&this.props.onScriptTagCreated(t),t.src="https://checkout.stripe.com/checkout.js",t.async=1,this.loadPromise=function(){var n=!1,o=new Promise((function(n,o){t.onload=function(){d=!0,c=!1,n(),e.onScriptLoaded()},t.onerror=function(t){p=!0,c=!1,o(t),e.onScriptError(t)}}));return{promise:new Promise((function(e,t){o.then((function(){return n?t({isCanceled:!0}):e()})),o.catch((function(e){return t(n?{isCanceled:!0}:e)}))})),cancel:function(){n=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(t)}}},{key:"componentDidUpdate",value:function(){c||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),t.stripeHandler&&this.state.open&&t.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){t.stripeHandler&&!this.props.reconfigureOnUpdate||(t.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.showLoadingDialog.apply(this,t)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.props.hideLoadingDialog.apply(this,t)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),t.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return r.default.createElement("button",o({},l({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:o({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),r.default.createElement("span",{style:o({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return r.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},r.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){!0!==this.props.desktopShowModal||this.state.open?!1===this.props.desktopShowModal&&this.state.open&&t.stripeHandler.close():this.onClick();var e=this.props.ComponentClass;return this.props.children?r.default.createElement(e,o({},l({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),t}(r.default.Component);u.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"},u.propTypes={desktopShowModal:s.default.bool,triggerEvent:s.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:s.default.string,style:s.default.object,textStyle:s.default.object,disabled:s.default.bool,ComponentClass:s.default.string,showLoadingDialog:s.default.func,hideLoadingDialog:s.default.func,onScriptError:s.default.func,onScriptTagCreated:s.default.func,reconfigureOnUpdate:s.default.bool,stripeKey:s.default.string.isRequired,token:s.default.func.isRequired,name:s.default.string,description:s.default.string,image:s.default.string,amount:s.default.number,locale:s.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:s.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:s.default.string,zipCode:s.default.bool,billingAddress:s.default.bool,shippingAddress:s.default.bool,email:s.default.string,allowRememberMe:s.default.bool,bitcoin:s.default.bool,alipay:s.default.oneOf(["auto",!0,!1]),alipayReusable:s.default.bool,opened:s.default.func,closed:s.default.func},u._isMounted=!1,t.A=u},1497:(e,t,n)=>{"use strict";var o=n(3218);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3505:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ze});var o=n(5043),i=n(3216),r=n(2166),s=n(2295),a=n(8887);const l=a.AH`
    font-family: NotoSans, sans-serif;
    font-family: var(--font-base-font-family, NotoSans, sans-serif);
    font-style: normal;
    font-weight: 700;
    font-weight: var(--font-bold-font-weight, 700);
    font-size: 22px;
    font-size: var(--font-bold-large-font-size, 22px);
`,c=a.AH`
    font-family: NotoSans, sans-serif;
    font-family: var(--font-base-font-family, NotoSans, sans-serif);
    font-style: normal;
    font-weight: 300;
    font-weight: var(--font-bold-font-weight, 300);
    font-size: 18px;
    font-size: var(--font-bold-large-font-size, 18px);
`,d=a.AH`
    font-family: NotoSans, sans-serif;
    font-family: var(--font-base-font-family, NotoSans, sans-serif);
    font-style: normal;
    font-weight: 400;
    font-weight: var(--font-bold-font-weight, 400);
    font-size: 16px;
    font-size: var(--font-bold-large-font-size, 16px);
`,p=a.Ay.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    min-width: 30%;
    height: 350px;
    margin: 0 1% 2%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    background-position: center;
    background-size: cover;
    color: white;
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`,u=a.Ay.div`
    ${l}
    font-size: 30px;
    text-shadow: 0 0 10px yellow;
`,h=a.Ay.div`
    ${c}
    text-shadow: 0 0 10px #ccc;
`;var f=n(579);const m=e=>{let{title:t,subtitle:n="Shop now",image:o,history:i,match:r,linkUrl:s}=e;return(0,f.jsxs)(p,{onClick:()=>{i.push(`${r.url}/collections${s}`)},style:{backgroundImage:`url(${o})`},children:[(0,f.jsx)(u,{children:t}),(0,f.jsx)(h,{children:n})]})},g=a.Ay.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;function y(e){let{items:t}=e;return t?(0,f.jsx)(g,{children:t.map((e=>{let{id:t,...n}=e;return(0,f.jsx)(m,{...n},t)}))}):"No shop menu items"}function x(){return(0,f.jsx)("div",{className:"shop-home",children:(0,f.jsx)(y,{items:[{id:0,title:"HATS",image:"/images/1.webp",linkUrl:"/hats"},{id:1,title:"JACKETS",image:"/images/9.webp",linkUrl:"/jackets"},{id:2,title:"SNEAKERS",image:"/images/10.webp",linkUrl:"/sneakers"},{id:3,title:"WOMENS",image:"/images/6.webp",linkUrl:"/womens"},{id:4,title:"MENS",image:"/images/5.webp",linkUrl:"/mens"}]})})}var v=n(2352);const b=(0,o.memo)((e=>{let{handleChange:t,label:n,...o}=e;return(0,f.jsxs)("div",{className:"shop-form-input",children:[n?(0,f.jsx)("label",{htmlFor:o.id,children:n}):null,(0,f.jsx)("input",{onChange:t,...o})]})})),w="#333",j="#70adff",k=a.AH`
    background-color: ${w};
    border-color: black;

    &:hover {
        background-color: #fff;
        color: ${w};
    }
`,S=a.AH`
    width: 100%;
`,C=a.Ay.button`
    padding: 10px 20px;
    border: 2px solid lightskyblue;
    ${c}
    background-color: ${j};
    color: white;
    transition: all 0.2s;
    cursor: pointer;
    outline: none;

    &:hover {
        background-color: #fff;
        color: ${j};
    }

    ${e=>{let t="";return e.fullWidth&&(t+=S.join("")),e.dark&&(t+=k.join("")),t}}
`;function A(e){let{children:t,...n}=e;return(0,f.jsx)(C,{...n,children:t})}var _=n(6997);function N(){const[e,t]=(0,o.useState)({displayName:"",email:"",password:"",confirmPassword:""}),{displayName:n,email:i,password:r,confirmPassword:s}=e,a=(0,o.useCallback)((n=>{const{name:o,value:i}=n.target;t({...e,[o]:i})}),[e]);return(0,f.jsxs)("div",{className:"shop-sign-up",children:[(0,f.jsx)("h3",{children:"Sign Up"}),(0,f.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),r===s)try{const{user:e}=await _.j2.createUserWithEmailAndPassword(i,r);await(0,_.sM)(e,{displayName:n}),t({displayName:"",email:"",password:"",confirmPassword:""})}catch(e){console.log("Sign Up handleSubmit error ",e.message)}else alert("Passwords don't match")},children:[(0,f.jsx)(b,{label:"Login",autoComplete:"username",handleChange:a,name:"displayName",id:"shopSignUpLogin",type:"text",value:n,required:!0}),(0,f.jsx)(b,{label:"Email",handleChange:a,name:"email",id:"shopSignUpEmail",type:"email",value:i,required:!0}),(0,f.jsx)(b,{label:"Password",handleChange:a,name:"password",id:"shopSignUpPassword",type:"password",autoComplete:"new-password",value:r,required:!0}),(0,f.jsx)(b,{label:"Confirm Password",handleChange:a,name:"confirmPassword",autoComplete:"new-password",id:"shopSignUpConfirmPassword",type:"password",value:s,required:!0}),(0,f.jsx)(A,{type:"submit",children:"Sign up"})]})]})}var E=n(7950);function O(e){let{children:t,onClose:n,styleClass:o}=e;return E.createPortal((0,f.jsxs)("div",{className:`notification ${o}`,children:[(0,f.jsx)("div",{className:"notification__close",onClick:n,children:"X"}),(0,f.jsx)("div",{className:"notification__body",children:t})]}),document.querySelector("#notification"))}function D(){let e;const[t,n]=(0,o.useState)({email:"",password:"",error:""}),i=(0,o.useCallback)((()=>{n((e=>({...e,error:null}))),clearTimeout(e)}),[e]),{email:r,password:s,error:a}=t;(0,o.useEffect)((()=>()=>{i(e)}),[i,e]);const l=e=>{const{name:o,value:i}=e.target;n({...t,[o]:i})};return(0,f.jsxs)("div",{className:"shop-sign-in",children:[(0,f.jsx)("h3",{children:"Sign in"}),(0,f.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{await _.j2.signInWithEmailAndPassword(r,s),n({...t,email:"",password:""})}catch(e){n({...t,error:e.message}),console.log("Shop SignIn onSubmit error ",e)}},className:"shop-sign-in__form",children:[(0,f.jsx)(b,{label:"Email",autoComplete:"email",handleChange:l,name:"email",id:"shopSignInEmail",type:"email",value:r,required:!0}),(0,f.jsx)(b,{label:"Password",handleChange:l,name:"password",id:"shopSignInPassword",type:"password",autoComplete:"new-password",value:s,required:!0}),(0,f.jsx)(A,{type:"submit",children:"Sign in"}),(0,f.jsx)(A,{dark:!0,onClick:_.G6,children:"Sign in with Google"})]}),(a&&(e=setTimeout((()=>{i()}),3e3)),a?(0,f.jsx)(O,{styleClass:"_error",onClose:i,children:a}):null)]})}function P(){return(0,f.jsxs)("div",{className:"sign-in-and-sign-up",children:[(0,f.jsx)(D,{}),(0,f.jsx)(N,{})]})}var M=n(922);var R,L,T=n(5475);function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},U.apply(null,arguments)}function H(e,t){let{title:n,titleId:i,...r}=e;return o.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t,"aria-labelledby":i},r),void 0===n?o.createElement("title",{id:i},"Group"):n?o.createElement("title",{id:i},n):null,R||(R=o.createElement("desc",null,"Created with Sketch.")),L||(L=o.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},o.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},o.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),o.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),o.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),o.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),o.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}const z=o.forwardRef(H);n.p;var I,B,K,$,q,F,G,W,V,Z,X,Y,J,Q,ee;function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},te.apply(null,arguments)}function ne(e,t){let{title:n,titleId:i,...r}=e;return o.createElement("svg",te({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":i},r),n?o.createElement("title",{id:i},n):null,o.createElement("g",null,o.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),o.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),o.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),o.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),o.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),I||(I=o.createElement("g",null)),B||(B=o.createElement("g",null)),K||(K=o.createElement("g",null)),$||($=o.createElement("g",null)),q||(q=o.createElement("g",null)),F||(F=o.createElement("g",null)),G||(G=o.createElement("g",null)),W||(W=o.createElement("g",null)),V||(V=o.createElement("g",null)),Z||(Z=o.createElement("g",null)),X||(X=o.createElement("g",null)),Y||(Y=o.createElement("g",null)),J||(J=o.createElement("g",null)),Q||(Q=o.createElement("g",null)),ee||(ee=o.createElement("g",null)))}const oe=o.forwardRef(ne);n.p;var ie=n(2601),re=n(192);const se=e=>e.shopCart,ae=(0,re.Mz)([se],(e=>e.cartItems)),le=(0,re.Mz)([ae],(e=>Object.values(e).reduce(((e,t)=>{let{quantity:n}=t;return e+n}),0))),ce=(0,re.Mz)([se],(e=>e.visibleDropdown)),de=(0,re.Mz)([ae],(e=>Object.values(e).reduce(((e,t)=>{let{quantity:n,price:o}=t;return e+n*o}),0))),pe=(0,re.Mz)([e=>e.shopUser],(e=>e.currentUser)),ue=((0,re.Mz)([e=>e.streams,(e,t)=>t],((e,t)=>e[t])),e=>e.auth),he=((0,re.Mz)([ue],(e=>e.isSignedIn)),(0,re.Mz)([ue],(e=>e.userId)),e=>e.users);(0,re.Mz)([he],(e=>e.isLoadingUsers)),(0,re.Mz)([he],(e=>Object.values(e.users)));function fe(e){let{item:{imageUrl:t,name:n,price:o,quantity:i}}=e;return(0,f.jsxs)("div",{className:"shop-cart-list-item",children:[(0,f.jsx)("div",{className:"shop-cart-list-item__image-wrapper",children:(0,f.jsx)("img",{loading:"lazy",className:"shop-cart-list-item__image",src:t,alt:n})}),(0,f.jsxs)("div",{className:"shop-cart-list-item__info",children:[(0,f.jsx)("div",{className:"shop-cart-list-item__name",children:n}),(0,f.jsxs)("span",{className:"shop-cart-list-item__price-and-quantity",children:[i," x",o]})]})]})}const me=(0,o.memo)((()=>{const e=(0,r.d4)(ae);return e?(0,f.jsx)("ul",{className:"shop-cart-list",children:Object.entries(e).map((e=>{let[t,n]=e;return(0,f.jsx)("li",{className:"shop-cart-list__item-wrapper",children:(0,f.jsx)(fe,{item:n})},t)}))}):null})),ge=(0,o.memo)((e=>{let{history:t}=e;const n=(0,r.wA)(),i=(0,o.useCallback)((()=>n((0,M.ey)())),[n]);return(0,f.jsxs)("div",{className:"shop-cart-dropdown",children:[(0,f.jsx)("div",{className:"shop-cart-dropdown__list",children:(0,f.jsx)(me,{})}),(0,f.jsx)("div",{className:"shop-cart-dropdown__button",children:(0,f.jsx)(A,{fullWidth:!0,onClick:()=>{t.push("/shop/checkout"),i()},children:"Check out"})})]})}));function ye(){const e=(0,r.d4)(pe),t=(0,r.d4)(ce),n=(0,r.d4)(le),i=(0,r.wA)(),s=(0,o.useCallback)((()=>i((0,M.ey)())),[i]),a=(0,o.useRef)();return function(e,t){const n=n=>{e.current&&!e.current.contains(n.target)&&t()};(0,o.useEffect)((()=>(document.addEventListener("click",n),()=>{document.removeEventListener("click",n)})))}(a,(()=>i((0,M.MA)()))),(0,f.jsxs)("div",{className:"shop-header",children:[(0,f.jsx)("div",{className:"shop-header__title",children:"Shop"}),(0,f.jsx)(z,{className:"shop-header__logo"}),(0,f.jsx)("div",{className:"shop-header__sign",children:null===e?(0,f.jsx)(ie.A,{message:"",customStyles:{width:"30px"}}):e?(0,f.jsx)("a",{href:"/",onClick:e=>{e.preventDefault(),_.j2.signOut()},children:"Sign Out"}):(0,f.jsx)(T.N_,{to:"/shop/sign",children:"Sign In"})}),(0,f.jsxs)("div",{className:"shop-header__cart",ref:a,children:[(0,f.jsx)("span",{className:"shop-header__cart-count",children:n}),(0,f.jsx)(oe,{className:"shop-header__cart-icon",onClick:s}),t&&(0,f.jsx)(ge,{})]}),e&&(0,f.jsxs)("div",{className:"shop-header__user",children:["Hello: ",e.displayName]})]})}function xe(e){let{name:t,description:n,quantity:o,price:i,onRemove:r,onRemoveItem:s,onAddItem:a}=e;return(0,f.jsxs)("div",{className:"shop-checkout-item",children:[(0,f.jsx)("div",{className:"shop-checkout-item__block",children:t}),(0,f.jsx)("div",{className:"shop-checkout-item__block",children:n}),(0,f.jsxs)("div",{className:"shop-checkout-item__block",children:[(0,f.jsx)("div",{className:"shop-checkout-item__arrow",onClick:s,children:"\u276e"}),o,(0,f.jsx)("div",{className:"shop-checkout-item__arrow",onClick:a,children:"\u276f"})]}),(0,f.jsx)("div",{className:"shop-checkout-item__block",children:i}),(0,f.jsx)("div",{className:"shop-checkout-item__block",onClick:r,children:(0,f.jsx)("span",{className:"shop-checkout-item__remove",children:"\u2715"})})]})}var ve=n(526),be=n(854),we=n.n(be);const je=(0,o.memo)((e=>{let{price:t}=e;const n=100*t,i=(0,o.useCallback)((e=>{console.log(e),we()({url:"/api/payment",method:"post",data:{amount:n,token:e}}).then((e=>console.log("stripe payment success")),(e=>console.log("stripe payment error ",e)))}),[n]);return(0,f.jsx)("div",{className:"shop-stripe-button",children:(0,f.jsx)(ve.A,{label:"Pay now",name:"My Shop",stripeKey:"pk_test_UmJlWhhA0rT8avtzKH0WqT0u00QbQg3Fr2",billingAddress:!0,shippingAddress:!0,description:`Your total price is $${t}`,amount:n,panelLabel:"Pay now",token:i})})})),ke=(0,o.memo)((()=>{const e=(0,r.d4)(de),t=(0,r.d4)(ae),n=(0,r.wA)(),i=(0,o.useCallback)((e=>()=>n((0,M.H5)(e))),[n]),s=(0,o.useCallback)((e=>()=>n((0,M.Sm)(e))),[n]),a=(0,o.useCallback)((e=>()=>n((0,M.Rs)(e))),[n]),l=(0,o.useCallback)((()=>n((0,M.ay)())),[n]);return(0,f.jsxs)("div",{className:"shop-checkout",children:[(0,f.jsxs)("div",{className:"shop-checkout__header",children:[(0,f.jsx)("div",{className:"shop-checkout__header-item",children:"Product"}),(0,f.jsx)("div",{className:"shop-checkout__header-item",children:"Description"}),(0,f.jsx)("div",{className:"shop-checkout__header-item",children:"Quantity"}),(0,f.jsx)("div",{className:"shop-checkout__header-item",children:"Price"}),(0,f.jsx)("div",{className:"shop-checkout__header-item",children:"Remove"})]}),(0,f.jsx)("div",{className:"shop-checkout__items",children:Object.entries(t).map((e=>{let[t,n]=e;return(0,f.jsx)(xe,{...n,onRemove:i(n),onRemoveItem:s(n),onAddItem:a(n)},t)}))}),(0,f.jsxs)("div",{className:"shop-checkout__info",children:["*Please use following info for payments testing*",(0,f.jsx)("br",{}),"4242 4242 4242 4242 Exp.: 01/20 CVV: 123"]}),(0,f.jsx)("div",{className:"shop-checkout__info",children:(0,f.jsx)(A,{onClick:l,children:"Clear cart"})}),(0,f.jsxs)("div",{className:"shop-checkout__total",children:["TOTAL:",e,(0,f.jsx)(je,{price:e})]})]})})),Se=a.Ay.div``,Ce=a.Ay.div`
    display: flex;
    position: relative;
`,Ae=a.Ay.img`
    width: 300px;
    height: 350px;
    max-width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`,_e=a.Ay.button`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: 260px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.2s;
    ${d}
    color: ${w};
    text-align: center;
    cursor: pointer;
    outline: none;

    ${Ce}:hover & {
        opacity: 1;
        visibility: visible;
    }

    &:hover {
        background-color: ${w};
        color: white;
    }
`,Ne=a.Ay.div`
    display: flex;
    justify-content: space-between;
    ${c}
`,Ee=a.Ay.div``,Oe=a.Ay.div``;function De(e){let{item:t}=e;const{imageUrl:n,name:i,price:s}=t,a=(0,r.wA)(),l=(0,o.useCallback)((()=>a((0,M.Rs)(t))),[a,t]);return(0,f.jsxs)(Se,{children:[(0,f.jsxs)(Ce,{children:[(0,f.jsx)(_e,{onClick:l,children:"Add to cart"}),(0,f.jsx)(Ae,{loading:"lazy",alt:"shop preview item",src:n})]}),(0,f.jsxs)(Ne,{children:[(0,f.jsx)(Ee,{children:i}),(0,f.jsx)(Oe,{as:"span",children:s})]})]})}const Pe=a.Ay.div``,Me=(0,a.Ay)(T.N_)`
    display: block;
    margin: 40px 0 20px;
    ${l}
`,Re=a.Ay.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`,Le=a.Ay.li`
    margin: 0 20px 20px 0;
`,Te=e=>{let{title:t,items:n}=e;return(0,f.jsxs)(Pe,{children:[(0,f.jsx)(Me,{to:`collections/${t.toLowerCase()}`,children:t}),(0,f.jsx)(Re,{children:n.map((e=>(0,f.jsx)(Le,{children:(0,f.jsx)(De,{item:e})},e.id)))})]})};function Ue(){const e=(0,r.d4)((e=>e.shopData.data));return e?Object.values(e).map((e=>{const t={...e};return t.items=t.items.slice(0,4),(0,f.jsx)(Te,{...t},t.id)})):(0,f.jsx)(ie.A,{})}const He=a.Ay.div``,ze=a.Ay.div`
    display: flex;
    position: relative;
`,Ie=a.Ay.img`
    width: 300px;
    height: 350px;
    max-width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
`,Be=a.Ay.button`
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    width: 260px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.2s;
    ${d}
    color: ${w};
    color: var(--main-color, ${w});
    text-align: center;
    cursor: pointer;
    outline: none;

    ${ze}:hover & {
        opacity: 1;
        visibility: visible;
    }

    &:hover {
        background-color: ${w};
        color: white;
    }
`,Ke=a.Ay.div`
    display: flex;
    justify-content: space-between;
    ${c}
`,$e=(0,o.memo)((e=>{let{onAddCartItem:t,imageUrl:n,name:o,price:i}=e;return(0,f.jsxs)(He,{children:[(0,f.jsxs)(ze,{children:[(0,f.jsx)(Be,{onClick:t,children:"Add to cart"}),(0,f.jsx)(Ie,{loading:"lazy",alt:o,src:n})]}),(0,f.jsxs)(Ke,{children:[(0,f.jsx)("div",{className:"shop-collection-item__price-name",children:o}),(0,f.jsx)("div",{className:"shop-collection-item__price-value",children:i})]})]})})),qe=(a.Ay.div``,a.Ay.h3`
    margin-top: 40px;
`),Fe=a.Ay.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
`,Ge=a.Ay.li`
    margin: 0 20px 20px 0;
`,We=(0,o.memo)((e=>{let{match:t,history:n,location:i}=e;const s=(0,r.d4)((e=>e.shopData.data)),a=t.params.categoryId;let l;s&&(l=Object.values(s).find((e=>{let{routeName:t}=e;return t===a})));const c=(0,r.wA)(),d=(0,o.useCallback)((e=>t=>c((0,M.Rs)(e))),[c]);return s?(0,f.jsxs)("div",{className:"shop-collection",children:[(0,f.jsx)(qe,{children:l.title}),(0,f.jsx)(Fe,{children:l.items.map((e=>(0,f.jsx)(Ge,{children:(0,f.jsx)($e,{onAddCartItem:d(e),...e})},e.id)))})]}):(0,f.jsx)(ie.A,{})}));var Ve=n(860);const Ze=(0,o.memo)((()=>{!function(){const e=(0,r.wA)();(0,o.useEffect)((()=>{let t;const n=_.j2.onAuthStateChanged((async n=>{if(n){const o=await(0,_.sM)(n);t=o.onSnapshot((t=>{e((0,M.JX)({id:t.id,...t.data()}))}))}else e((0,M.JX)(!1))}));return()=>{n(),t&&t()}}),[e])}(),function(){const e=(0,r.wA)();(0,o.useEffect)((()=>{const t=_.kA.collection("shopData").onSnapshot((async t=>{const n=t.docs.reduce(((e,t)=>{const{title:n,items:o,id:i}=t.data();return{...e,[i]:{title:n,items:o,id:i,routeName:Ve.n.get(n)}}}),{});e((0,M.x9)(n))}));return()=>{t&&t()}}),[e])}();const e=(0,r.d4)((e=>e.shopUser.currentUser));return(0,f.jsxs)("div",{className:"shop",children:[(0,f.jsx)(ye,{}),(0,f.jsx)("div",{className:"shop__menu",children:(0,f.jsx)(s.A,{exact:!0,routes:[{to:"/shop",title:"Home"},{to:"/shop/collections",title:"Collections"}]})}),(0,f.jsxs)(i.BV,{children:[(0,f.jsx)(i.qh,{path:"/shop",element:(0,f.jsx)(x,{})}),(0,f.jsx)(i.qh,{path:"/shop/sign",render:t=>e?(0,f.jsx)(i.C5,{to:"/shop"}):(0,f.jsx)(P,{})}),(0,f.jsx)(i.qh,{path:"/shop/collections",element:(0,f.jsx)(Ue,{})}),(0,f.jsx)(i.qh,{path:"/shop/collections/:categoryId",element:(0,f.jsx)(We,{})}),(0,f.jsx)(i.qh,{path:"/shop/checkout",element:(0,f.jsx)(ke,{})}),(0,f.jsx)(i.qh,{path:"/shop/*",children:(0,f.jsx)(v.A,{children:"Shop not found"})})]})]})}))},5173:(e,t,n)=>{e.exports=n(1497)()}}]);
//# sourceMappingURL=505.97d5daf3.chunk.js.map
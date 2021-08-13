(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),s=n.n(c),o=n(16),i=n(4),l=n(17),u=n(1),d=function(){return Object(u.jsx)("div",{children:"Home page"})},j=function(){return Object(u.jsx)("div",{children:"Login page"})},p=n(15),m=n(10),h=n(24),b=n(20),O=n.n(b),f=n(21),g=n.n(f),x=n(33),v="SIGNUP_SUCCESS",y="SIGNUP_FAIL",w="ET_AUTH_LOADING",N="REMOVE_AUTH_LOADING",_=n(34),S=n.n(_),A=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading}}),{signup:function(e,t,n,a,r){return function(){var c=Object(x.a)(g.a.mark((function c(s){var o,i,l;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s({type:w}),o={headers:{"Content-Type":"application/json"}},i=JSON.stringify({first_name:e,last_name:t,email:n,password:a,re_password:r}),c.prev=3,c.next=6,O.a.post("".concat("http://localhost:8000","/auth/users"),i,o);case 6:(l=c.sent).data.email?s({type:v,payload:l.data}):s({type:y}),s({type:N}),c.next=15;break;case 11:c.prev=11,c.t0=c.catch(3),s({type:y}),s({type:N});case 15:case"end":return c.stop()}}),c,null,[[3,11]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.signup,n=e.isAuthenticated,r=e.loading,c=Object(a.useState)(!1),s=Object(h.a)(c,2),l=s[0],d=s[1],j=Object(a.useState)({first_name:"",last_name:"",email:"",password:"",re_password:""}),b=Object(h.a)(j,2),O=b[0],f=b[1];Object(a.useEffect)((function(){window.scrollTo(0,0)}));var g=O.first_name,x=O.last_name,v=O.email,y=O.password,w=O.re_password,N=function(e){return f(Object(m.a)(Object(m.a)({},O),{},Object(p.a)({},e.target.name,e.target.value)))};return n?Object(u.jsx)(i.a,{to:"/"}):(l&&i.a,Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsx)("h1",{children:"Sign Up"}),Object(u.jsx)("p",{children:"Create your Account"}),Object(u.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(g,x,v,y,w),d(!0)}(e)},children:[Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"First Name*",name:"first_name",value:g,onChange:function(e){return N(e)},required:!0})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{className:"form-control",type:"text",placeholder:"Last Name*",name:"last_name",value:x,onChange:function(e){return N(e)},required:!0})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{className:"form-control",type:"email",placeholder:"Email*",name:"email",value:v,onChange:function(e){return N(e)},required:!0})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:y,onChange:function(e){return N(e)},minLength:"6",required:!0})}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm Password*",name:"re_password",value:w,onChange:function(e){return N(e)},minLength:"6",required:!0})}),r?Object(u.jsx)("div",{className:"mt-3 d-flex justify-content-center align-items-center",children:Object(u.jsx)(S.a,{type:"Oval",color:"#424242",height:50,width:50})}):Object(u.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]}),Object(u.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(u.jsx)(o.b,{to:"/login",children:"Sign In"})]})]}))})),I=n(11),C=n(35),E=n(36),L={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null,loading:!1},T=Object(I.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;switch(n){case w:return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case N:return Object(m.a)(Object(m.a)({},e),{},{loading:!1});case v:case y:return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(m.a)(Object(m.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});default:return e}}}),U=[E.a],q=Object(I.createStore)(T,{},Object(C.composeWithDevTools)(I.applyMiddleware.apply(void 0,U))),k=function(){return Object(u.jsx)(l.a,{store:q,children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(i.b,{exact:!0,path:"/",component:d}),Object(u.jsx)(i.b,{exact:!0,path:"/login",component:j}),Object(u.jsx)(i.b,{exact:!0,path:"/signup",component:A})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.bbb46651.chunk.js.map
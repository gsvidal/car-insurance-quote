(this["webpackJsonpcar-insurance-quote"]=this["webpackJsonpcar-insurance-quote"]||[]).push([[0],{21:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a,c,r,i,s,l,o,j,d,b=t(1),u=t.n(b),x=t(8),p=t.n(x),O=(t(21),t(5)),h=t(2),m=t(3),g=t(0),v=m.a.header(a||(a=Object(h.a)(["\n  background-color: #26C6DA;\n  padding: 10px;\n  font-weight: bold;\n  color: #FFFFFF;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n"]))),f=m.a.h1(c||(c=Object(h.a)(['\n  font-size: 2rem;\n  margin: 0;\n  font-family: "Slabo 27px", serif;\n  text-align: center;\n']))),k=function(e){var n=e.title;return Object(g.jsx)(v,{children:Object(g.jsx)(f,{children:n})})},F=t(10),y=t(13);var w,S,A,C,N,B,q,D,z,E=m.a.div(r||(r=Object(h.a)(["\n  display: flex;\n  margin-bottom: 1rem;\n  align-items: center;\n  & div {\n    margin: 0;\n  }\n  @media (max-width: 400px) {\n    & .inputs {\n      flex-direction: column;\n      justify-content: center;\n    }\n  }\n"]))),P=m.a.input(i||(i=Object(h.a)(["\n  width: 100%;\n  padding: 15px;\n  border: 1px solid #00838F;\n  border-radius: 5px;\n  background-color: #fff;\n  -webkit-appearance: none;\n  &::placeholder {\n    color: #aaa;\n  }\n"]))),I=m.a.label(s||(s=Object(h.a)(["\n  display: inline-block;\n  flex: 0 0 110px;\n  @media (max-width: 400px) {\n    margin-right: 10px;\n    flex: 0 0 30px;\n  }\n"]))),T=m.a.select(l||(l=Object(h.a)(["\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  background-color: #eee;\n  border: 1px solid #e1e1e1;\n  border-radius: 5px;\n  -webkit-appearance: none;\n"]))),Y=m.a.input(o||(o=Object(h.a)(["\n  margin: 0 1rem;\n"]))),Q=m.a.button(j||(j=Object(h.a)(["\n  background-color: #00838F;\n  font-size: 16px;\n  width: 100%;\n  padding: 1rem;\n  color: #fff;\n  text-transform: capitalize;\n  font-weight: bold;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color .3s ease;\n  &:hover {\n    background-color: #26CDDA;\n  }\n"]))),J=m.a.div(d||(d=Object(h.a)(["\n  background-color: red;\n  color: white;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  width: calc( 100% - 2rem);\n  text-align: center;\n"]))),L=function(e){var n=e.setSummary,t=e.setSpinner,a=Object(b.useState)({base:"",brand:"",year:"",plan:""}),c=Object(O.a)(a,2),r=c[0],i=c[1],s=Object(b.useState)(!1),l=Object(O.a)(s,2),o=l[0],j=l[1],d=Object(b.useState)(!1),u=Object(O.a)(d,2),x=u[0],p=u[1],h=r.base,m=r.brand,v=r.year,f=r.plan,k=function(e){i(Object(y.a)(Object(y.a)({},r),{},Object(F.a)({},e.target.name,e.target.value)))};return Object(g.jsxs)("form",{action:"",onSubmit:function(e){if(e.preventDefault(),""!==m.trim()&&""!==v.trim()&&""!==f.trim()){if(h<1)return j(!1),void p(!0);j(!1),p(!1);var a=h,c=function(e){return(new Date).getFullYear()-e}(v);a*=1-.03*c,a=function(e){var n;switch(e){case"European":n=1.3;break;case"American":n=1.15;break;case"Asian":n=1.05}return n}(m)*a,a=parseFloat((function(e){return"Basic"===e?1.2:1.5}(f)*a).toFixed(2)),t(!0),setTimeout((function(){n({quote:a,data:r}),t(!1)}),2e3)}else j(!0)},children:[o&&Object(g.jsx)(J,{children:"All fields are required !"}),x&&Object(g.jsx)(J,{children:"Base rate has to be greater than 0 !"}),Object(g.jsxs)(E,{children:[Object(g.jsx)(I,{htmlFor:"base",children:"Base Rate($):"}),Object(g.jsx)(P,{placeholder:"2000",type:"number",name:"base",id:"base",value:h,onChange:k})]}),Object(g.jsxs)(E,{children:[Object(g.jsx)(I,{htmlFor:"brand",children:"Brand:"}),Object(g.jsxs)(T,{name:"brand",id:"brand",value:m,onChange:k,children:[Object(g.jsx)("option",{value:"",children:"-- Select --"}),Object(g.jsx)("option",{value:"American",children:"American"}),Object(g.jsx)("option",{value:"European",children:"European"}),Object(g.jsx)("option",{value:"Asian",children:"Asian"})]})]}),Object(g.jsxs)(E,{children:[Object(g.jsx)(I,{htmlFor:"year",children:"Year:"}),Object(g.jsxs)(T,{name:"year",id:"year",value:v,onChange:k,children:[Object(g.jsx)("option",{value:"",children:"-- Select --"}),Object(g.jsx)("option",{value:"2021",children:"2021"}),Object(g.jsx)("option",{value:"2020",children:"2020"}),Object(g.jsx)("option",{value:"2019",children:"2019"}),Object(g.jsx)("option",{value:"2018",children:"2018"}),Object(g.jsx)("option",{value:"2017",children:"2017"}),Object(g.jsx)("option",{value:"2016",children:"2016"}),Object(g.jsx)("option",{value:"2015",children:"2015"}),Object(g.jsx)("option",{value:"2014",children:"2014"}),Object(g.jsx)("option",{value:"2013",children:"2013"}),Object(g.jsx)("option",{value:"2012",children:"2012"}),Object(g.jsx)("option",{value:"2011",children:"2011"}),Object(g.jsx)("option",{value:"2010",children:"2010"}),Object(g.jsx)("option",{value:"2009",children:"2009"}),Object(g.jsx)("option",{value:"2008",children:"2008"})]})]}),Object(g.jsxs)(E,{children:[Object(g.jsx)("p",{className:"plan-label",children:"Plan:"}),Object(g.jsxs)(E,{className:"inputs",children:[Object(g.jsx)(Y,{type:"radio",name:"plan",id:"plan-basic",value:"Basic",checked:"Basic"===f,onChange:k}),Object(g.jsx)(I,{htmlFor:"plan-basic",children:"Basic"}),Object(g.jsx)(Y,{type:"radio",name:"plan",id:"plan-full",value:"Full",checked:"Full"===f,onChange:k}),Object(g.jsx)(I,{htmlFor:"plan-full",children:"Full"})]})]}),Object(g.jsx)(Q,{type:"submit",children:"Get quote"})]})},$=m.a.div(w||(w=Object(h.a)(["\n  padding: 1rem;\n  text-align: center;\n  background-color: #00ffcc;\n  color: #000;\n  margin-top: 1rem;\n"]))),G=m.a.ul(S||(S=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: space-between;\n  width: 80%;\n  margin: 15px auto;\n"]))),M=m.a.li(A||(A=Object(h.a)(["\n  margin: 5px 0;\n"]))),R=function(e){var n=e.data,t=n.brand,a=n.year,c=n.plan;return""===t||""===a||""===c?null:Object(g.jsxs)($,{children:[Object(g.jsx)("h2",{children:"Quote Summary:"}),Object(g.jsxs)(G,{children:[Object(g.jsxs)(M,{children:["Brand: ",t]}),Object(g.jsxs)(M,{children:["Year: ",a]}),Object(g.jsxs)(M,{children:["Plan: ",c]})]})]})},H=t(32),K=t(31),U=m.a.p(C||(C=Object(h.a)(["\n  background-color: rgb(127,224,237);\n  margin-top: 2rem;\n  padding: 1rem;\n  text-align: center;\n"]))),V=m.a.p(N||(N=Object(h.a)(["\n  background-color: #26C6DA30;\n  margin-top: 2rem;\n  padding: 1rem;\n  text-align: center;\n  color: grey;\n  & p {\n    font-size: .75rem;\n  }\n  & li {\n    font-size: .5rem;\n  }\n"]))),W=m.a.div(B||(B=Object(h.a)(["\n  padding: .4rem;\n  border: 1px solid #26C6DA;\n  background-color: rgb(127,224,237);\n  margin-top: 1rem;\n  position: relative;\n"]))),X=m.a.p(q||(q=Object(h.a)(["\n  color: #00838F;\n  padding: 1rem;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n  margin: 0;\n"]))),Z=function(e){var n=e.quote;return 0===n?Object(g.jsx)(U,{children:"Choose brand, year and car insurance plan"}):Object(g.jsxs)(b.Fragment,{children:[Object(g.jsx)(W,{children:Object(g.jsx)(H.a,{className:"price",children:Object(g.jsx)(K.a,{classNames:"price",timeout:{enter:500,exit:500},children:Object(g.jsxs)(X,{children:["Total Quote: $ ",n," per year"]})},n)})}),Object(g.jsxs)(V,{children:[Object(g.jsx)("p",{children:"Increments over base rate:"}),Object(g.jsx)("p",{children:"Brand rate: "}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"American + 15%"}),Object(g.jsx)("li",{children:"European + 15%"}),Object(g.jsx)("li",{children:"Asian + 15%"})]}),Object(g.jsx)("p",{children:"Year rate: "}),Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:"+ 3% each year relative to current year"})}),Object(g.jsx)("p",{children:"Plan rate: "}),Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:"Basic + 20%"}),Object(g.jsx)("li",{children:"Full + 50%"})]}),Object(g.jsx)("p",{children:"*Accumulative increments"})]})]})},_=(t(28),function(){return Object(g.jsxs)("div",{className:"sk-cube-grid",children:[Object(g.jsx)("div",{className:"sk-cube sk-cube1"}),Object(g.jsx)("div",{className:"sk-cube sk-cube2"}),Object(g.jsx)("div",{className:"sk-cube sk-cube3"}),Object(g.jsx)("div",{className:"sk-cube sk-cube4"}),Object(g.jsx)("div",{className:"sk-cube sk-cube5"}),Object(g.jsx)("div",{className:"sk-cube sk-cube6"}),Object(g.jsx)("div",{className:"sk-cube sk-cube7"}),Object(g.jsx)("div",{className:"sk-cube sk-cube8"}),Object(g.jsx)("div",{className:"sk-cube sk-cube9"})]})}),ee=m.a.div(D||(D=Object(h.a)(["\n  max-width: 600px;\n  width: 95%;\n  margin: 0 auto;\n  margin-top: 20px;\n"]))),ne=m.a.div(z||(z=Object(h.a)(["\n  background-color: #FFFFFF;\n  padding: 3rem;\n  @media (max-width: 420px) {\n    padding: 1rem;\n  }\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n"])));var te=function(){var e=Object(b.useState)({quote:0,data:{brand:"",year:"",plan:""}}),n=Object(O.a)(e,2),t=n[0],a=n[1],c=Object(b.useState)(!1),r=Object(O.a)(c,2),i=r[0],s=r[1],l=t.quote,o=t.data;return Object(g.jsxs)(ee,{children:[Object(g.jsx)(k,{title:"Car Insurance Quote"}),Object(g.jsxs)(ne,{children:[Object(g.jsx)(L,{setSummary:a,setSpinner:s}),i&&Object(g.jsx)(_,{}),!i&&Object(g.jsxs)(b.Fragment,{children:[Object(g.jsx)(R,{data:o}),Object(g.jsx)(Z,{quote:l})]})]})]})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))};p.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(te,{})}),document.getElementById("root")),ae()}},[[29,1,2]]]);
//# sourceMappingURL=main.ef33f23f.chunk.js.map
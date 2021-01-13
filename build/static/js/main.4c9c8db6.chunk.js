(this.webpackJsonpplataforma=this.webpackJsonpplataforma||[]).push([[0],{56:function(e,n,t){e.exports=t(67)},67:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(9),o=t.n(c),l=t(7),i=t(8),u=t(103),d=t(97),m=t(98),s=t(96),f=t(101),h=t(99),b=t(93);function p(){var e=Object(l.a)(["\n    padding: 1rem;\n    display:flex;\n    align-items:center;\n"]);return p=function(){return e},e}var E=function(){return r.a.createElement(O,{color:"secondary",position:"relative"})},O=Object(i.a)(b.a)(p()),j=t(15),v=t(102),g=t(106);function y(){var e=Object(l.a)(["\n    font-size: .8rem;\n    color: rgba(0,0,0,.3);\n    cursor: pointer;\n    text-decoration: underline;\n"]);return y=function(){return e},e}function C(){var e=Object(l.a)(["\n    display: flex;\n    align-items:center;\n    justify-content: center;\n    gap:1rem;\n"]);return C=function(){return e},e}function N(){var e=Object(l.a)(["\n    font-size: 1rem;\n"]);return N=function(){return e},e}function _(){var e=Object(l.a)(["\n    font-size: .8rem;\n    color: rgba(0,0,0,.3);\n"]);return _=function(){return e},e}function T(){var e=Object(l.a)(["\n    display:flex;\n    flex-direction:column;\n"]);return T=function(){return e},e}function w(){var e=Object(l.a)(["\n    height:100%;\n    width:100%;\n    padding:.2rem 0;\n    margin-bottom:1rem;\n    border: solid .1rem rgba(0,0,0,.1);\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    gap:.3rem;\n    ","{\n        grid-template-columns: 1fr;\n        padding: .5rem;\n    };\n"]);return w=function(){return e},e}var x=Object(u.a)((function(e){var n=e.theme,t=e.id,a=e.name,c=e.address,o=e.phoneNumber,l=e.email,i=e.handleDelete,u=e.edit,d=e.setEdit,m=e.handleEdit,s=e.contact,f=e.handleChange,b=e.errors;return r.a.createElement(A,{theme:n},r.a.createElement(k,null,r.a.createElement(v.a,null,r.a.createElement(g.a,null))),r.a.createElement(D,null,r.a.createElement(S,null,"Name"),u?r.a.createElement(h.a,{name:"name",value:s.name,variant:"outlined",size:"small",onChange:f,error:b.name,required:!0}):r.a.createElement(z,null,a)),r.a.createElement(D,null,r.a.createElement(S,null,"Address"),u?r.a.createElement(h.a,{name:"address",value:s.address,variant:"outlined",size:"small",onChange:f,error:b.address,required:!0}):r.a.createElement(z,null,c)),r.a.createElement(D,null,r.a.createElement(S,null,"Phone Number"),u?r.a.createElement(h.a,{name:"phoneNumber",value:s.phoneNumber,variant:"outlined",size:"small",onChange:f,error:b.phoneNumber,required:!0}):r.a.createElement(z,null,o)),r.a.createElement(D,null,r.a.createElement(S,null,"Email"),u?r.a.createElement(h.a,{name:"email",value:s.email,variant:"outlined",size:"small",onChange:f,error:b.email,required:!0}):r.a.createElement(z,null,l)),r.a.createElement(k,null,r.a.createElement(q,{onClick:function(){return m(t)}},u?"Save":"Edit"),u?r.a.createElement(q,{onClick:function(){return d(!1)}},"Cancel"):r.a.createElement(q,{onClick:function(){return i(t)}},"Remove")))})),A=Object(i.a)(s.a)(w(),(function(e){return e.theme.breakpoints.down("md")})),D=Object(i.a)(f.a)(T()),S=i.a.span(_()),z=i.a.span(N()),k=Object(i.a)(f.a)(C()),q=i.a.span(y()),X=t(16),I=t(11),L={contacts:[]};var R=function(e){return function(n){n({type:"ADD_CONTACT",payload:e})}},V=function(e){return function(n){n({type:"EDIT_CONTACT",payload:e})}},P=t(13),J=t(17),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=Object(j.b)(),o=Object(a.useState)(!1),l=Object(J.a)(o,2),i=l[0],u=l[1],d=Object(a.useState)({}),m=Object(J.a)(d,2),s=m[0],f=m[1],h=Object(a.useState)({name:e,address:n,phoneNumber:t,email:r}),b=Object(J.a)(h,2),p=b[0],E=b[1],O=function(e){E(Object(I.a)(Object(I.a)({},p),{},Object(P.a)({},e.target.name,e.target.value)))},v=function(){var e={};e.name=!p.name,e.address=!p.address,e.phoneNumber=!p.phoneNumber,e.email=!p.email,f(Object(I.a)({},e))};Object(a.useEffect)((function(){v()}),[p]);var g=function(){return s.name||s.address||s.phoneNumber||s.email},y=function(){!g()&&fetch("".concat("http://localhost:4000","/contact"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then((function(e){return e.json()})).then((function(e){c(R(e)),E({name:"",address:"",phoneNumber:0,email:""})})).catch((function(e){return console.log(e)}))},C=function(e){i?!g()&&fetch("".concat("http://localhost:4000","/contact/").concat(e),{method:"Put",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then((function(e){return e.json()})).then((function(e){c(V(e)),u(!1)})).catch((function(e){return console.log(e)})):u(!0)};return{contact:p,handleChange:O,handleAdd:y,edit:i,setEdit:u,handleEdit:C,errors:s}};function M(){var e=Object(l.a)(["\n    display:flex;\n    justify-content:center;\n"]);return M=function(){return e},e}var B=function(e){var n=e.id,t=e.name,a=e.address,c=e.phoneNumber,o=e.email,l=U(t,a,c,o),i=l.contact,u=l.handleChange,d=l.handleEdit,m=l.edit,s=l.setEdit,f=l.errors,h=Object(j.b)();return r.a.createElement(F,null,r.a.createElement(x,{id:n,name:t,address:a,phoneNumber:c,email:o,handleDelete:function(e){fetch("".concat("http://localhost:4000","/contact/").concat(e),{method:"Delete",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return h(function(e){return function(n){n({type:"REMOVE_CONTACT",payload:e})}}(e))})).catch((function(e){return console.log(e)}))},edit:m,setEdit:s,contact:i,handleChange:u,handleEdit:d,errors:f}))},F=i.a.div(M());function G(){var e=Object(l.a)(["\n    width:100%;\n"]);return G=function(){return e},e}var H=function(e){var n=e.contactList;return r.a.createElement(K,null,n.map((function(e){return r.a.createElement(B,{key:e._id,id:e._id,name:e.name,address:e.address,phoneNumber:e.phoneNumber,email:e.email})})))},K=i.a.div(G()),Q=function(){var e=Object(j.c)((function(e){return e.contacts.contacts}));return r.a.createElement(H,{contactList:e})};function W(){var e=Object(l.a)(["\n    font-size: .8rem;\n    color: rgba(0,0,0,.3);\n    cursor: pointer;\n    text-decoration: underline;\n"]);return W=function(){return e},e}function Y(){var e=Object(l.a)(["\n    display: flex;\n    align-items:center;\n    justify-content: center;\n"]);return Y=function(){return e},e}function Z(){var e=Object(l.a)(["\n    font-size: 1rem;\n"]);return Z=function(){return e},e}function $(){var e=Object(l.a)(["\n    font-size: .8rem;\n    color: rgba(0,0,0,.3);\n"]);return $=function(){return e},e}function ee(){var e=Object(l.a)(["\n    display:flex;\n    flex-direction:column;\n"]);return ee=function(){return e},e}function ne(){var e=Object(l.a)(["\n    width:95%;\n    padding:.2rem;\n    margin-bottom:.2rem;\n    border: solid .1rem rgba(0,0,0,.1);\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    gap:.3rem;\n    ","{\n        grid-template-columns: 1fr;\n    };\n"]);return ne=function(){return e},e}function te(){var e=Object(l.a)(["\n    height:90%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    overflow-y: scroll;\n"]);return te=function(){return e},e}function ae(){var e=Object(l.a)(["\n    width:90%;\n    height:90%;\n"]);return ae=function(){return e},e}function re(){var e=Object(l.a)(["\n    width:70%;\n    height:90%;\n    background-color: rgba(0, 0, 0, .1);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap:1rem;\n    padding-bottom: 1rem;\n    ","{\n        width:100%;\n    };\n"]);return re=function(){return e},e}var ce=Object(u.a)((function(e){var n=e.contact,t=e.handleChange,a=e.handleAdd,c=e.errors,o=e.theme;return r.a.createElement(oe,{theme:o},r.a.createElement(E,null),r.a.createElement(le,{elevation:5},r.a.createElement(ie,null,r.a.createElement(ue,{theme:o},r.a.createElement(de,null,r.a.createElement(me,null,"Name"),r.a.createElement(se,{name:"name",variant:"outlined",size:"small",focused:!0,value:n.name,onChange:t,required:!0,inputProps:{maxLength:15},error:c.name})),r.a.createElement(de,null,r.a.createElement(me,null,"Address"),r.a.createElement(se,{name:"address",variant:"outlined",size:"small",value:n.address,onChange:t,error:c.address,required:!0})),r.a.createElement(de,null,r.a.createElement(me,null,"Phone Number"),r.a.createElement(se,{name:"phoneNumber",variant:"outlined",size:"small",value:n.phoneNumber,onChange:t,error:c.phoneNumber,required:!0})),r.a.createElement(de,null,r.a.createElement(me,null,"Email"),r.a.createElement(se,{name:"email",variant:"outlined",size:"small",value:n.email,onChange:t,error:c.email,required:!0})),r.a.createElement(fe,null,r.a.createElement(he,{onClick:a},"Add"))),r.a.createElement(Q,null))))})),oe=i.a.div(re(),(function(e){return e.theme.breakpoints.down("md")})),le=Object(i.a)(d.a)(ae()),ie=Object(i.a)(m.a)(te()),ue=Object(i.a)(s.a)(ne(),(function(e){return e.theme.breakpoints.down("md")})),de=Object(i.a)(f.a)(ee()),me=i.a.span($()),se=Object(i.a)(h.a)(Z()),fe=Object(i.a)(f.a)(Y()),he=i.a.span(W()),be=function(){var e=Object(j.b)(),n=U(),t=n.contact,c=n.handleChange,o=n.handleAdd,l=n.errors;return Object(a.useEffect)((function(){fetch("".concat("http://localhost:4000","/contact"),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(n){return e((t=n,function(e){e({type:"SET_CONTACT",payload:t})}));var t})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(ce,{handleChange:c,handleAdd:o,contact:t,errors:l})};function pe(){var e=Object(l.a)(["\n    width:100%;\n    height: 100vh;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n"]);return pe=function(){return e},e}var Ee=function(){return r.a.createElement(Oe,null,r.a.createElement(be,null))},Oe=i.a.div(pe()),je=t(22),ve=t(47),ge=Object(je.c)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_CONTACT":return Object(I.a)(Object(I.a)({},e),{},{contacts:n.payload});case"ADD_CONTACT":return Object(I.a)(Object(I.a)({},e),{},{contacts:[].concat(Object(X.a)(e.contacts),[n.payload])});case"REMOVE_CONTACT":return Object(I.a)(Object(I.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==n.payload._id}))});case"EDIT_CONTACT":return Object(I.a)(Object(I.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===n.payload._id&&(e=Object(I.a)(Object(I.a)({},e),n.payload)),e}))});default:return e}}});window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__();var ye=Object(je.e)(ge,Object(je.d)(Object(je.a)(ve.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():"")),Ce=function(){return r.a.createElement(j.a,{store:ye},r.a.createElement(Ee,null))};o.a.render(r.a.createElement(Ce,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.4c9c8db6.chunk.js.map
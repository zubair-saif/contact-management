(this["webpackJsonpcontact-management"]=this["webpackJsonpcontact-management"]||[]).push([[0],{32:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(18),r=a.n(s),i=a(9),l=a(24),j=a(25),o=a(19),b=a(20),d=a(26),m=a(23),u=a(0),O=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).emailHandler=function(e){c.setState({email:e.target.value})},c.nameHandler=function(e){c.setState({name:e.target.value})},c.onSubmithandler=function(e){e.preventDefault(),""!==c.state.name&&""!==c.state.email?(c.props.addContactHandler(c.state),c.setState({name:"",email:""}),c.props.history.push("/")):alert("All fields are required")},c.state={email:"",name:""},c}return Object(b.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"ui container",children:[Object(u.jsx)("h2",{children:"Add Contact"}),Object(u.jsxs)("form",{onSubmit:this.onSubmithandler,children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Name"}),Object(u.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",value:this.state.name,onChange:this.nameHandler})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{className:"form-label",children:"Email"}),Object(u.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,onChange:this.emailHandler})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})}}]),a}(c.Component),h=(a(32),a(7));var x=function(e){var t=e.contact,a=t.id,c=t.name,n=t.email;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"list-group",children:Object(u.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start border-0",children:[Object(u.jsx)("i",{className:"bi bi-person-circle"}),Object(u.jsx)("div",{className:"ms-2 me-auto",children:Object(u.jsxs)(h.b,{to:{pathname:"/contact/".concat(a),state:{contact:e.contact}},style:{textDecoration:"none"},children:[Object(u.jsx)("div",{className:"fw-bold",children:c}),n]})}),Object(u.jsx)("span",{className:"badge mt-2",children:Object(u.jsx)("i",{className:"bi bi-trash",onClick:function(){return e.clickHander(a)}})})]},a)})})};var f=function(e){var t=function(t){e.getContactId(t)},a=e.contacts.map((function(e){return Object(u.jsx)("div",{className:"card",children:Object(u.jsx)(x,{contact:e,clickHander:t},e.id)})}));return Object(u.jsxs)("div",{className:"mt-4",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("h2",{children:"Contact List"}),Object(u.jsx)(h.b,{to:"/add",children:Object(u.jsx)("button",{className:"btn btn-primary mb-4",children:"Add Contact"})})]}),a]})};var v=function(){return Object(u.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:"Contact Manager"})})})},p=a(22),N=a(2);var g=function(e){var t=e.location.state.contact,a=t.name,c=t.email;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:"...",className:"card-img-top",alt:"..."}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:a}),Object(u.jsx)("p",{className:"card-text",children:c}),Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{className:"btn btn-primary",children:"Go back to Contact List"})})]})]})})};var y=function(){var e="contacts",t=Object(c.useState)([]),a=Object(j.a)(t,2),n=a[0],s=a[1],r=function(e){console.log(e),s([].concat(Object(l.a)(n),[Object(i.a)({id:Object(p.uuid)()},e)]))},o=function(e){var t=n.filter((function(t){return t.id!==e}));s(t)};return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(e));t&&s(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(n))}),[n]),Object(u.jsx)("div",{className:"ui container",children:Object(u.jsxs)(h.a,{children:[Object(u.jsx)(v,{}),Object(u.jsxs)(N.c,{children:[Object(u.jsx)(N.a,{path:"/",exact:!0,render:function(e){return Object(u.jsx)(f,Object(i.a)(Object(i.a)({},e),{},{contacts:n,removeContactHandler:o}))}}),Object(u.jsx)(N.a,{path:"/add",render:function(e){return Object(u.jsx)(O,Object(i.a)(Object(i.a)({},e),{},{addContactHandler:r}))}}),Object(u.jsx)(N.a,{path:"/contact/:id",component:g})]})]})})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.02922a16.chunk.js.map
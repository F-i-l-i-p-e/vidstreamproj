(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(17),s=a.n(c),o=a(9),i=a(2),l=a(5),j=a(10),b=a(4),u=a(0);var d=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),o=s[0],d=s[1],O=Object(r.useState)(null),m=Object(b.a)(O,2),h=m[0],p=m[1],v=Object(i.g)(),x=function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){var r,n,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})});case 4:if(!(r=e.sent).ok){e.next=14;break}return e.next=8,r.json();case 8:n=e.sent,c=n.token,localStorage.setItem("token",c),v.push("/stream"),e.next=15;break;case 14:p("Invalid username or password");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),p("Network error");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Login"}),h&&Object(u.jsx)("div",{className:"alert alert-danger",children:h}),Object(u.jsxs)("form",{onSubmit:x,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Username:"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password:"}),Object(u.jsx)("input",{type:"password",className:"form-control",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})]})};var O=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),o=s[0],d=s[1],O=Object(r.useState)(null),m=Object(b.a)(O,2),h=m[0],p=m[1],v=Object(i.g)(),x=function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){var r,n,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:o})});case 4:if(!(r=e.sent).ok){e.next=14;break}return e.next=8,r.json();case 8:n=e.sent,c=n.token,localStorage.setItem("token",c),v.push("/stream"),e.next=15;break;case 14:p("Error registering");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),p("Network error");case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Register"}),h&&Object(u.jsx)("div",{className:"alert alert-danger",children:h}),Object(u.jsxs)("form",{onSubmit:x,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Username:"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password:"}),Object(u.jsx)("input",{type:"password",className:"form-control",value:o,onChange:function(e){return d(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Register"})]})]})};var m=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(null),s=Object(b.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)(!0),O=Object(b.a)(d,2),m=O[0],h=O[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(l.a)().mark((function e(){var t,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/videos",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:a=e.sent,n(a),e.next=12;break;case 11:i("Error fetching videos");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),i("Network error");case 17:return e.prev=17,h(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),m?Object(u.jsx)("div",{children:"Loading..."}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Streaming"}),o&&Object(u.jsx)("div",{className:"alert alert-danger",children:o}),a.map((function(e){return Object(u.jsxs)("div",{className:"card mb-4",children:[Object(u.jsx)("h3",{className:"card-header",children:e.title}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsx)("video",{src:e.url,controls:!0,className:"w-100"})})]},e.id)}))]})};var h=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(b.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)(""),O=Object(b.a)(d,2),m=O[0],h=O[1],p=Object(r.useState)(null),v=Object(b.a)(p,2),x=v[0],f=v[1],g=Object(r.useState)(!0),N=Object(b.a)(g,2),k=N[0],S=N[1];Object(r.useEffect)((function(){var e=function(){var e=Object(j.a)(Object(l.a)().mark((function e(){var t,a,r,c;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/profile",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:if(!(t=e.sent).ok){e.next=14;break}return e.next=7,t.json();case 7:a=e.sent,r=a.name,c=a.photo,n(r||""),i(c||""),e.next=15;break;case 14:f("Error fetching profile");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),f("Network error");case 20:return e.prev=20,S(!1),e.finish(20);case 23:case"end":return e.stop()}}),e,null,[[0,17,20,23]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var w=function(){var e=Object(j.a)(Object(l.a)().mark((function e(t){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/profile",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},body:JSON.stringify({name:a,photo:o,password:m})});case 3:e.sent.ok?f("Profile updated"):f("Error updating profile");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return k?Object(u.jsx)("div",{children:"Loading..."}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Profile"}),x&&Object(u.jsx)("div",{className:"alert alert-danger",children:x}),Object(u.jsxs)("form",{onSubmit:w,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Name:"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){return n(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Photo:"}),Object(u.jsx)("input",{type:"text",className:"form-control",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password:"}),Object(u.jsx)("input",{type:"password",className:"form-control",value:m,onChange:function(e){return h(e.target.value)}})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update Profile"})]})]})};var p=function(){var e=Boolean(localStorage.getItem("token"));return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-4",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Video Streaming"}),Object(u.jsx)("div",{className:"collapse navbar-collapse",children:e?Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.b,{className:"nav-link",to:"/profile",children:"Profile"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.b,{className:"nav-link",to:"/stream",children:"Stream"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("button",{className:"btn btn-link nav-link",onClick:function(){localStorage.removeItem("token"),window.location.reload()},children:"Logout"})})]}):Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.b,{className:"nav-link",to:"/register",children:"Register"})})]})})]})})};var v=function(){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(i.d,{children:[Object(u.jsx)(i.b,{path:"/login",component:d}),Object(u.jsx)(i.b,{path:"/register",component:O}),Object(u.jsx)(i.b,{path:"/stream",component:m}),Object(u.jsx)(i.b,{path:"/profile",component:h}),Object(u.jsx)(i.a,{from:"/",to:"/login"})]})]})};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.47722db5.chunk.js.map
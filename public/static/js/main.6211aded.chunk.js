(this["webpackJsonpzakupki-torg-front"]=this["webpackJsonpzakupki-torg-front"]||[]).push([[0],{1341:function(t,e,c){},1346:function(t,e,c){},1347:function(t,e,c){},1348:function(t,e,c){},1349:function(t,e,c){},1350:function(t,e,c){"use strict";c.r(e);var n=c(4),j=c.n(n),s=c(22),r=c.n(s),i=c(7),a=c(5),l=(c(31),c(3)),d=function(t){var e=t.text;return Object(l.jsx)("section",{className:"header",children:e})},b=c(17),x=c(11),O=(c(1341),[{label:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0438",link:"customers"},{label:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438",link:"providers"},{label:"\u0410\u0443\u043a\u0446\u0438\u043e\u043d\u044b",link:"auctions"}]),o=function(t){var e=Object(a.f)().pathname.split("/")[1],c={height:"10px",width:"10px"};return Object(l.jsxs)("section",{className:"menu",children:[Object(l.jsx)(i.b,{to:"/",children:Object(l.jsx)("div",{className:"logo",children:"ZakupkiTorg"})}),Object(l.jsx)("div",{className:"login",children:"\u0412\u043e\u0439\u0442\u0438"}),O.map((function(t){return function(t){var n=t.label,j=t.link;return Object(l.jsx)(i.b,{to:"/".concat(j),children:Object(l.jsxs)("div",{className:"item",children:[j===e?Object(l.jsx)(x.Ellipse,Object(b.a)(Object(b.a)({},c),{},{color:"#fff"})):Object(l.jsx)(x.EllipseOutline,Object(b.a)(Object(b.a)({},c),{},{color:"#00000"})),n]})},"menu_item_".concat(j))}(t)}))]})},h=c(12),u=(c(1346),function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)(x.Cog,{rotate:!0,height:"200px",width:"200px"})})}),p=function(t){var e=t.url,c=t.Component,j=t.state,s=Object(n.useState)(!0),r=Object(h.a)(s,2),i=r[0],a=r[1],d=Object(n.useState)(null),b=Object(h.a)(d,2),x=b[0],O=b[1],o=Object(n.useState)(null),p=Object(h.a)(o,2),m=p[0],f=p[1];return Object(n.useEffect)((function(){fetch(e).then((function(t){return t.json()})).then((function(t){a(!1),f(t)})).catch((function(t){a(!1),O(t)}))}),[e]),x?Object(l.jsxs)("div",{children:["Error: ",JSON.stringify(x)]}):i?Object(l.jsx)(u,{}):null===m?Object(l.jsx)("span",{children:"hmmmmmm"}):Object(l.jsx)(c,{data:m,state:j})},m="http://127.0.0.1:3001/rest",f=function(){return"".concat(m,"/customers")},v=function(t){return"".concat(f(),"/").concat(t)},g=function(){return"".concat(m,"/providers")},N=function(t){return"".concat(g(),"/").concat(t)},k=function(){return"".concat(m,"/auctions")},y=function(t){return"".concat(k(),"/").concat(t)},C=function(t){var e=t.data,c=t.state,n=c.titleInput,j=c.handleTitleInput;return Object(l.jsxs)("section",{className:"page",children:[Object(l.jsx)("div",{className:"head",children:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u0430\u0443\u043a\u0446\u0438\u043e\u043d\u043e\u0432"}),Object(l.jsx)("div",{className:"scrollable",children:Object(l.jsxs)("table",{className:"content-container",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("input",{value:n,onChange:j,type:"text"})}),Object(l.jsx)("td",{children:Object(l.jsx)(x.BackspaceOutline,{onClick:function(){j({target:{value:""}})}})})]})}),Object(l.jsx)("tbody",{children:e.map((function(t){var e=t.id,c=t.title;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{to:"/customers/".concat(e),children:c})}),Object(l.jsx)("td",{})]},"customer_row_".concat(e))}))})]})})]})},I=function(){var t=Object(n.useState)(""),e=Object(h.a)(t,2),c=e[0],j=e[1];return Object(l.jsx)(p,{Component:C,url:f()+(""===c?"":"?title=".concat(c)),state:{titleInput:c,handleTitleInput:function(t){var e=t.target;j(e.value)}}})},S=function(t){var e=t.data;return console.log(e),Object(l.jsxs)("section",{className:"page",children:[Object(l.jsx)("div",{className:"head",children:e.title}),Object(l.jsx)("div",{className:"scrollable",children:Object(l.jsxs)("table",{className:"content-container",children:[Object(l.jsx)("thead",{children:Object(l.jsx)("tr",{children:Object(l.jsx)("td",{colspan:3,children:"\u0410\u0443\u043a\u0446\u0438\u043e\u043d\u044b \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430"})})}),Object(l.jsx)("tbody",{children:e.auctions.map((function(t){var e=t.id,c=t.procedure,n=t.budget;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{to:"/auctions/".concat(e),children:e})}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:c})]})}))})]})})]})},F=function(){var t=Object(a.f)().pathname.split("/")[2];return Object(l.jsx)(p,{Component:S,url:v(t)})},w=function(t){var e=t.data,c=t.state,n=c.titleInput,j=c.handleTitleInput;return Object(l.jsxs)("section",{className:"page",children:[Object(l.jsx)("div",{className:"head",children:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u043a\u043e\u043d\u043a\u0443\u0440\u0438\u0440\u0443\u044e\u0442 \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043e\u043c \u0437\u0430 \u043f\u0440\u0430\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u0430\u0443\u043a\u0446\u0438\u043e\u043d\u0430"}),Object(l.jsx)("div",{className:"scrollable",children:Object(l.jsxs)("table",{className:"content-container",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("input",{value:n,onChange:j,type:"text"})}),Object(l.jsx)("td",{children:Object(l.jsx)(x.BackspaceOutline,{onClick:function(){j({target:{value:""}})}})})]})}),Object(l.jsx)("tbody",{children:e.map((function(t){var e=t.id,c=t.title;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{to:"/providers/".concat(e),children:c})}),Object(l.jsx)("td",{})]})}))})]})})]})},E=function(){var t=Object(n.useState)(""),e=Object(h.a)(t,2),c=e[0],j=e[1];return Object(l.jsx)(p,{Component:w,url:g()+(""===c?"":"?title=".concat(c)),state:{titleInput:c,handleTitleInput:function(t){var e=t.target;j(e.value)}}})},T=function(t){var e=t.data;return Object(l.jsx)("section",{className:"page",children:Object(l.jsx)("div",{className:"head",children:e.title})})},B=function(){var t=Object(a.f)().pathname.split("/")[2];return Object(l.jsx)(p,{Component:T,url:N(t)})},_=(c(1347),function(t){var e=t.data;return Object(l.jsxs)("section",{className:"page",children:[Object(l.jsx)("div",{className:"head",children:"\u0410\u0443\u043a\u0446\u0438\u043e\u043d\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0430\u043c\u0438, \u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u0431\u043e\u0440\u044e\u0442\u0441\u044f \u0437\u0430 \u043f\u0440\u0430\u0432\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435"}),Object(l.jsx)("div",{className:"scrollable",children:Object(l.jsxs)("table",{className:"content-container",children:[Object(l.jsxs)("thead",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("article",{children:"\u041b\u043e\u0442"})}),Object(l.jsx)("td",{children:Object(l.jsx)("article",{children:"\u0411\u044e\u0434\u0436\u0435\u0442"})}),Object(l.jsx)("td",{children:Object(l.jsx)("article",{children:"\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430"})}),Object(l.jsx)("td",{children:Object(l.jsx)("article",{children:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a"})}),Object(l.jsx)("td",{})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"text"})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"text"})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"text"})}),Object(l.jsx)("td",{children:Object(l.jsx)("input",{type:"text"})}),Object(l.jsxs)("td",{children:[Object(l.jsx)(x.SearchOutline,{}),Object(l.jsx)(x.BackspaceOutline,{})]})]})]}),Object(l.jsx)("tbody",{children:e.map((function(t){var e=t.id,c=t.customerId,n=t.procedure,j=t.budget,s=t.customer;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{to:"/auctions/".concat(e),children:e})}),Object(l.jsx)("td",{children:j}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{to:"/customers/".concat(c),children:s})}),Object(l.jsx)("td",{})]})}))})]})})]})}),J=function(){return Object(l.jsx)(p,{Component:_,url:k()})},z=function(t){var e=t.data;return Object(l.jsx)("section",{className:"page",children:Object(l.jsx)("table",{className:"auction",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\u041b\u043e\u0442:"}),Object(l.jsx)("td",{children:e.id})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430:"}),Object(l.jsx)("td",{children:e.procedure})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\u0411\u044e\u0434\u0436\u0435\u0442:"}),Object(l.jsx)("td",{children:e.budget})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a: "}),Object(l.jsx)("td",{children:Object(l.jsx)(i.b,{to:"/customers/".concat(e.customerId),children:e.customer})})]})]})})})},M=function(){var t=Object(a.f)().pathname.split("/")[2];return Object(l.jsx)(p,{Component:z,url:y(t)})},Z=(c(1348),c(1349),function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("section",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsx)("section",{className:"content",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{exact:!0,path:"/",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{text:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0430\u0439\u0442 \u0437\u0430\u043a\u0443\u043f\u043e\u043a"}),Object(l.jsx)(u,{})]})}),Object(l.jsx)(a.a,{exact:!0,path:"/customers",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{text:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0438"}),Object(l.jsx)(I,{})]})}),Object(l.jsx)(a.a,{exact:!0,path:"/customers/:id",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{text:"\u0417\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0438"}),Object(l.jsx)(F,{})]})}),Object(l.jsx)(a.a,{exact:!0,path:"/providers",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{text:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438"}),Object(l.jsx)(E,{})]})}),Object(l.jsx)(a.a,{exact:!0,path:"/providers/:id",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{text:"\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438"}),Object(l.jsx)(B,{})]})}),Object(l.jsx)(a.a,{exact:!0,path:"/auctions",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{text:"\u0410\u0443\u043a\u0446\u0438\u043e\u043d\u044b"}),Object(l.jsx)(J,{})]})}),Object(l.jsx)(a.a,{exact:!0,path:"/auctions/:id",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{text:"\u0410\u0443\u043a\u0446\u0438\u043e\u043d\u044b"}),Object(l.jsx)(M,{})]})})]})})]})})});r.a.render(Object(l.jsx)(j.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.getElementById("root"))},31:function(t,e,c){}},[[1350,1,2]]]);
//# sourceMappingURL=main.6211aded.chunk.js.map
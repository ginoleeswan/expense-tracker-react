(this["webpackJsonpexpense-tracker-react"]=this["webpackJsonpexpense-tracker-react"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),s=n.n(a),i=n(0);function o(){return Object(i.jsx)("h2",{children:"Expense Tracker"})}var u=n(2),j=n(3),l=n(8),d=function(t,e){switch(e.type){case"DELETE_TRANSACTION":return Object(u.a)(Object(u.a)({},t),{},{transactions:t.transactions.filter((function(t){return t.id!==e.payload}))});case"ADD_TRANSACTION":return Object(u.a)(Object(u.a)({},t),{},{transactions:[e.payload].concat(Object(l.a)(t.transactions))});default:return t}},b={transactions:[]},O=Object(c.createContext)(b),x=function(t){var e=t.children,n="MY_DATA",r=Object(c.useReducer)(d,b,(function(t){var e=localStorage.getItem(n),c=e?JSON.parse(e):[];return Object(u.a)(Object(u.a)({},t),{},{items:c})})),a=Object(j.a)(r,2),s=a[0],o=a[1];return Object(c.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s.items))}),[s.items]),Object(i.jsx)(O.Provider,{value:{transactions:s.transactions,deleteTransaction:function(t){o({type:"DELETE_TRANSACTION",payload:t})},addTransaction:function(t){t.text&&!/^\s*$/.test(t.text)&&o({type:"ADD_TRANSACTION",payload:t})}},children:e})};function h(){var t=Object(c.useContext)(O).transactions.map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Your Balance"}),Object(i.jsxs)("h1",{children:["R",t]})]})}var m=function(){var t=Object(c.useContext)(O).transactions.map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsxs)("p",{className:"money plus",children:["R",e]})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsxs)("p",{className:"money minus",children:["R",n]})]})]})};function f(t){var e=t.transaction,n=Object(c.useContext)(O).deleteTransaction,r=e.amount<0?"-":"+";return Object(i.jsxs)("li",{className:e.amount<0?"minus":"plus",children:[e.text,Object(i.jsx)("span",{className:"transaction-date",children:e.date}),Object(i.jsxs)("span",{children:[r,"R",Math.abs(e.amount)]}),Object(i.jsx)("button",{className:"delete-btn",onClick:function(){return n(e.id)},children:"x"})]})}function p(){var t=Object(c.useContext)(O).transactions;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{className:"list-title",children:"History"}),Object(i.jsx)("ul",{className:"list",children:t.map((function(t){return Object(i.jsx)(f,{transaction:t},t.id)}))})]})}var v=n(17);function N(){var t=Object(c.useState)(""),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),s=Object(j.a)(a,2),o=s[0],u=s[1],l=Object(c.useState)(""),d=Object(j.a)(l,2),b=d[0],x=d[1],h=Object(c.useContext)(O).addTransaction;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{className:"form-title",children:"Add new transaction"}),Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={id:Object(v.a)(),text:n,amount:+o,date:b};h(e),r(""),u(""),x("")},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(i.jsx)("input",{type:"number",value:o,onChange:function(t){return u(t.target.value)},placeholder:"Enter amount..."})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"date",children:"Date"}),Object(i.jsx)("input",{type:"date",value:b,onChange:function(t){return x(t.target.value)},onFocus:function(t){return t.currentTarget.type="date"},onBlur:function(t){return t.currentTarget.type="text"},placeholder:"Enter date..."})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})]})}n(14);var T=function(){return Object(i.jsxs)(x,{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(h,{}),Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(N,{})]})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c2c27e57.chunk.js.map
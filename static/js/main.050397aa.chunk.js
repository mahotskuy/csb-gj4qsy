(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),a=n(2),l=(n(13),n(0)),o=function(e){return e.replaceAll(/(https:\/\/www\.notion\.so)\/(([^)]*))/gm,(function(e,t,n){var c=n.toLowerCase().split("-");return"https://viyna.net/"+c.slice(0,c.length-1).join("-")}))};function s(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(),u=Object(a.a)(s,2),i=u[0],j=u[1];return Object(l.jsxs)("section",{children:[Object(l.jsxs)("label",{children:["Input:",Object(l.jsx)("textarea",{value:n,onChange:function(e){return r(e.target.value)}})]}),Object(l.jsx)("button",{onClick:function(){return j(o(n).replaceAll(/###/g,"#").replaceAll(/\n\n/g,"\n").replaceAll(/##/g,"\n##").replaceAll(/## ([^\n]*)/g,"**$1**"))},children:"Replace"}),Object(l.jsxs)("label",{children:["output:",Object(l.jsx)("textarea",{value:i,onChange:j})]})]})}var u=document.getElementById("root");r.createRoot(u).render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(s,{})}))}},[[15,1,2]]]);
//# sourceMappingURL=main.050397aa.chunk.js.map
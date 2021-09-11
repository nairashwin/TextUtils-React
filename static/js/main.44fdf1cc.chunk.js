(this["webpackJsonptext-utils"]=this["webpackJsonptext-utils"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),s=a(5),r=a.n(s),l=(a(11),a(3)),i=(a(12),a(0)),o=function(e){var t,a=e.alert;return Object(i.jsx)(i.Fragment,{children:a&&Object(i.jsxs)("div",{className:"alert alert-".concat(a.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:(t=a.type,t.charAt(0).toUpperCase()+t.slice(1))}),": ",a.msg]})})},b=function(e){var t=e.title,a=e.aboutText,c=e.mode,n=e.toggleMode;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(c," bg-").concat(c),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:t}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/",children:a})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"/",tabIndex:-1,"aria-disabled":"true",children:"Disabled"})})]}),Object(i.jsxs)("div",{className:"form-check form-switch",children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckChecked",onClick:n}),Object(i.jsx)("label",{className:"form-check-label text-".concat("light"===c?"dark":"light"),htmlFor:"flexSwitchCheckChecked",children:"Dark Mode"})]})]})]})})})},d=a(6),j=function(e){var t=e.heading,a=e.mode,n=e.showAlert,s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],b=r[1];return Object(i.jsxs)("div",{style:{color:"light"===a?"black":"white"},children:[Object(i.jsxs)("div",{className:"container my-2 mb-3",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)("textarea",{placeholder:"Enter your comments",className:"form-control",id:"mybox",rows:5,value:o,onChange:function(e){b(e.target.value)},style:{backgroundColor:"light"===a?"white":"grey",color:"light"===a?"black":"white"}}),Object(i.jsx)("button",{className:"btn btn-primary m-2",onClick:function(e){b(o.toUpperCase()),n("Converted to upper case","success")},children:"Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary m-2",onClick:function(e){b(o.toLowerCase())},children:"Lowercase"}),Object(i.jsx)("button",{onClick:function(e){navigator.clipboard.writeText(o),n("Copied to clipboard","success")},className:"btn btn-primary m-2","data-tip":!0,"data-for":"registerTip",children:"Copy"}),Object(i.jsx)(d.a,{id:"registerTip",place:"bottom",effect:"solid",children:"Copy to Clipboard"}),Object(i.jsx)("button",{className:"btn btn-danger m-2",onClick:function(e){b(""),n("All Cleared!","success")},children:"Clear"})]}),Object(i.jsxs)("div",{className:"container my-1",children:[Object(i.jsx)("h1",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[o?o.split(" ").filter(Boolean).length:0," words and"," ",o.length," characters"]}),Object(i.jsxs)("p",{children:[.08*o.length," Minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:o.length>0?o:"Enter something in the textbox above to preview it here"})]})]})};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(void 0),r=Object(l.a)(s,2),d=r[0],h=r[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(void 0)}),1500)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{title:"Textutils",aboutText:"About",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",h(void 0))}}),Object(i.jsx)(o,{alert:d}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(j,{heading:"Enter text to analyze below",mode:a,showAlert:m})})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.44fdf1cc.chunk.js.map
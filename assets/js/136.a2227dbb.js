(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{585:function(t,a,s){"use strict";s.r(a);var e=s(54),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Parse text as "),s("code",[t._v(".xml")]),t._v(" and create table. Use this when nushell cannot determine the input file extension.")]),t._v(" "),s("p",[t._v("Syntax: "),s("code",[t._v("from xml")])]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("p",[t._v("Let's say we've got a file in "),s("code",[t._v("xml")]),t._v(" format but the file extension is different so Nu can't auto-format it:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" world.txt\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("?xml "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("encoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),t._v("?"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Africa"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Antarctica"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Asia"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Australia"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Europe"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("North America"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("South America"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/continent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/world"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("We can use "),s("code",[t._v("from xml")]),t._v(" to read the input like a "),s("code",[t._v("xml")]),t._v(" file:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" world.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" from xml\n━━━━━━━━━━━━━━━━\n world\n────────────────\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("table "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" rows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n━━━━━━━━━━━━━━━━\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);
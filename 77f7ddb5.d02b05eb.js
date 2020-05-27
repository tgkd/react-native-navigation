/*! For license information please see 77f7ddb5.d02b05eb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),o=(n(0),n(215)),i=n(224),c=n(223),l={id:"root",title:"Root",sidebar_label:"Root"},b={id:"root",title:"Root",description:"setRoot()",source:"@site/api/api-root.mdx",permalink:"/react-native-navigation/api/root",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/api/api-root.mdx",sidebar_label:"Root",sidebar:"api",previous:{title:"Component",permalink:"/react-native-navigation/api/component"},next:{title:"Stack",permalink:"/react-native-navigation/api/stack"}},u=[{value:"<code>setRoot()</code>",id:"setroot",children:[]}],p={rightToc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setroot"},Object(o.b)("inlineCode",{parentName:"h2"},"setRoot()")),Object(o.b)("p",null,"Used to set the UI of the application. Read more about the root hierarchy level in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../docs/root"}),"docs section"),"."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"layout"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-layout"}),"Layout")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any type of layout. ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-bottomTabs"}),"BottomTabs"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-stack"}),"Stack"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-sideMenu"}),"SideMenu"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-component"}),"Component"))))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"stack",values:[{label:"With Stack layout",value:"stack"},{label:"With BottomTabs layout",value:"bottomTabs"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"stack",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    stack: {\n      children: [{\n        component: {\n          name: 'example.FirstTabScreen',\n          passProps: {\n            text: 'This is tab 1'\n          }\n        }\n      }],\n      options: {\n        bottomTab: {\n          text: 'Tab 1',\n          icon: require('../images/one.png'),\n          testID: 'FIRST_TAB_BAR_BUTTON'\n        }\n      }\n    }\n  }\n});\n"))),Object(o.b)(c.a,{value:"bottomTabs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      children: [{\n        stack: {\n          children: [{\n            component: {\n              name: 'example.FirstTabScreen',\n              passProps: {\n                text: 'This is tab 1'\n              }\n            }\n          }],\n          options: {\n            bottomTab: {\n              text: 'Tab 1',\n              icon: require('../images/one.png'),\n              testID: 'FIRST_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      },\n      {\n        component: {\n          name: 'navigation.playground.TextScreen',\n          passProps: {\n            text: 'This is tab 2'\n          },\n          options: {\n            bottomTab: {\n              text: 'Tab 2',\n              icon: require('../images/two.png'),\n              testID: 'SECOND_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      }]\n    }\n  }\n});\n")))))}s.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||s[m]||o;return n?r.a.createElement(f,c(c({ref:t},b),{},{components:n})):r.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},217:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},220:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},223:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},224:function(e,t,n){"use strict";n(23),n(19),n(18);var a=n(0),r=n.n(a),o=n(220);var i=function(){return Object(a.useContext)(o.a)},c=n(217),l=n.n(c),b=n(126),u=n.n(b),p=37,s=39;t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,b=e.groupId,m=i(),f=m.tabGroupChoices,d=m.setTabGroupChoices,O=Object(a.useState)(o),v=O[0],j=O[1];if(null!=b){var y=f[b];null!=y&&y!==v&&j(y)}var h=function(e){j(e),null!=b&&d(b,e)},g=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:l()("tabs__item",u.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return h(t)},onClick:function(){return h(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}}}]);
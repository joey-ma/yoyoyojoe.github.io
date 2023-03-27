"use strict";(self.webpackChunkyoyoyojoe_github_io=self.webpackChunkyoyoyojoe_github_io||[]).push([[8782],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,g=u["".concat(l,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(4137));const a={sidebar_position:7},i="Regex",c={unversionedId:"regex",id:"regex",title:"Regex",description:"To match a string that contains only those characters (or an empty string), try",source:"@site/docs/regex.md",sourceDirName:".",slug:"/regex",permalink:"/docs/regex",draft:!1,editUrl:"https://github.com/yoyoyojoe/yoyoyojoe.github.io/tree/main/docs/regex.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Shell",permalink:"/docs/shell"},next:{title:"SQL",permalink:"/docs/category/sql"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"regex"},"Regex"),(0,o.kt)("p",null,"To match a string that contains only those characters (or an empty string), try"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"^[a-zA-Z0-9_]*$"\n')),(0,o.kt)("p",null,"This works for .NET regular expressions, and probably a lot of other languages as well."),(0,o.kt)("p",null,"Breaking it down:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"^ : start of string\n[ : beginning of character group\na-z : any lowercase letter\nA-Z : any uppercase letter\n0-9 : any digit\n_ : underscore\n] : end of character group\n* : zero or more of the given characters\n$ : end of string\n")),(0,o.kt)("p",null,"If you don't want to allow empty strings, use ",(0,o.kt)("inlineCode",{parentName:"p"},"+")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"."))}u.isMDXComponent=!0}}]);
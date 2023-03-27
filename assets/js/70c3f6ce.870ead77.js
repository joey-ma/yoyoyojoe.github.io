"use strict";(self.webpackChunkyoyoyojoe_github_io=self.webpackChunkyoyoyojoe_github_io||[]).push([[8413],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:5},i="Environment Variables",l={unversionedId:"environment-variables",id:"environment-variables",title:"Environment Variables",description:"Background",source:"@site/docs/environment-variables.md",sourceDirName:".",slug:"/environment-variables",permalink:"/docs/environment-variables",draft:!1,editUrl:"https://github.com/yoyoyojoe/yoyoyojoe.github.io/tree/main/docs/environment-variables.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/docusaurus/tutorial-extras/translate-your-site"},next:{title:"Git Fabulous",permalink:"/docs/git"}},s={},p=[{value:"Background",id:"background",level:2},{value:".env",id:"env",level:2},{value:"Overview:",id:"overview",level:2},{value:"Backend:",id:"backend",level:2},{value:"Express",id:"express",level:3},{value:"dotenv",id:"dotenv",level:3},{value:"Frontend:",id:"frontend",level:2},{value:"Create React App",id:"create-react-app",level:3},{value:"Next.js",id:"nextjs",level:3},{value:"cross-env",id:"cross-env",level:3},{value:"More examples:",id:"more-examples",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"All applications are typically required to deploy in a\u202fdevelopment environment\u202fbefore being deployed in the\u202fproduction environment,\u202fand it is crucial to be certain that each environment has been set up right. If our production application is using our development credentials, it will be disastrous. "),(0,o.kt)("p",null,"Environment variables\u202fallow us to supervise the configuration of our applications separately from our base code. Separate configurations promote the implementation of our application in\u202fdifferent environments\u202f(development,\u202ftest,\u202fproduction), allowing our app to behave differently based on the environment they are running in.\u202f "),(0,o.kt)("p",null,"Benefits: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Security: API keys/other secret keys should not be put in plain text in the code to be directly visible. "),(0,o.kt)("li",{parentName:"ul"},"Flexibility: you can introduce conditional statements based on environments like \u201cIf production server then do X else if test server then do Y\u2026\u201d. "),(0,o.kt)("li",{parentName:"ul"},"Adoption: Popular services like Azure or Heroku support the usage of environment variables. ")),(0,o.kt)("h2",{id:"env"},".env"),(0,o.kt)("h2",{id:"overview"},"Overview:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backend",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#express"},"Express")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#dotenv"},"dotenv")))),(0,o.kt)("li",{parentName:"ul"},"Frontend",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-react-app"},"CRA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nextjs"},"Next.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#vite"},"Vite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#vite"},"Svelte"))))),(0,o.kt)("h2",{id:"backend"},"Backend:"),(0,o.kt)("h3",{id:"express"},"Express"),(0,o.kt)("p",null,"There are tools such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Upstart")," to help set your environment variables.",(0,o.kt)("br",{parentName:"p"}),"\n","A super simple one, and a favorite of many, is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv"),"."),(0,o.kt)("p",null,"References: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn more here: ",(0,o.kt)("a",{parentName:"li",href:"https://upstart.ubuntu.com/cookbook/#environment-variables"},"Upstart Intro, Cookbook and Best Practices"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://expressjs.com/en/advanced/best-practice-performance.html#in-environment"},"Things to do in your environment / setup @ Express.js"))),(0,o.kt)("h3",{id:"dotenv"},"dotenv"),(0,o.kt)("p",null,"Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology."),(0,o.kt)("p",null,"It is super easy to use, and it just works. Learn more here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},"dotenv @ npmjs")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Installing ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," for your frontend application would not be a viable solution as your react app is running in the browser and the browser doesn't support ",(0,o.kt)("inlineCode",{parentName:"p"},"fs"),". And as the dotenv package references ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," you can't use it for client side code. In fact, you cannot use any modules that references the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," module since, again, there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," module in the browser."),(0,o.kt)("p",{parentName:"admonition"},"References:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/70855580/module-not-found-error-cant-resolve-fs-in-dotenv-lib"},(0,o.kt)("inlineCode",{parentName:"a"},"Module not found: Error: Can't resolve 'fs' in dotenv/lib")," @ StackOverflow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/fs.html#file-system"},(0,o.kt)("inlineCode",{parentName:"a"},"fs")," @ Node.js")))),(0,o.kt)("h2",{id:"frontend"},"Frontend:"),(0,o.kt)("p",null,"Based on observations (accurate as of 2023/01/25), we can note the following:"),(0,o.kt)("h3",{id:"create-react-app"},"Create React App"),(0,o.kt)("p",null,"In your react app created by using CRA (",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app"),"), "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you will have access to (existing) properties such as ",(0,o.kt)("inlineCode",{parentName:"li"},"process.env.NODE_ENV")," as well as the object ",(0,o.kt)("inlineCode",{parentName:"li"},"process.env")," itself;"),(0,o.kt)("li",{parentName:"ul"},"you will not get an error when you log ",(0,o.kt)("inlineCode",{parentName:"li"},"process.env"),";"),(0,o.kt)("li",{parentName:"ul"},"you will get undefined if you simply tried to access variables stored in your ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file;"),(0,o.kt)("li",{parentName:"ul"},"you can access to your custom env variables by prepending ",(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_")," to your var, e.g., (in your ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file) ",(0,o.kt)("inlineCode",{parentName:"li"},"REACT_APP_PORT=5555"))),(0,o.kt)("p",null,"Reference @ ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/adding-custom-environment-variables/#what-other-env-files-can-be-used"},"create-react-app.dev")),(0,o.kt)("h3",{id:"nextjs"},"Next.js"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"to be worked on")),(0,o.kt)("p",null,"For example, Next.js has built-in support for loading environment variables from ",(0,o.kt)("inlineCode",{parentName:"p"},".env.local")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/environment-variables"},"Next.js #environment-variables"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next.config.js/environment-variables"},(0,o.kt)("inlineCode",{parentName:"a"},"next.config.js"))),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},".env.",(0,o.kt)("em",{parentName:"p"},".local files are local-only and can contain sensitive variables. You should add "),".local to your .gitignore to avoid them being checked into git.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("h3",{parentName:"admonition",id:"vite"},"Vite"),(0,o.kt)("p",{parentName:"admonition"},"Vite uses dotenv to load additional environment variables from the following files in your environment directory:"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/env-and-mode.html#env-files"},"Vite.js #env-files"),"\nSince any variables exposed to your Vite source code will end up in your client bundle, VITE_* variables should not contain any sensitive information."),(0,o.kt)("p",{parentName:"admonition"},"Loaded env variables are also exposed to your client source code via import.meta.env as strings."),(0,o.kt)("p",{parentName:"admonition"},"To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code. e.g. for the following env variables:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-env"},"VITE_SOME_KEY=123\nDB_PASSWORD=foobar\n")),(0,o.kt)("p",{parentName:"admonition"},"Only VITE_SOME_KEY will be exposed as import.meta.env.VITE_SOME_KEY to your client source code, but DB_PASSWORD will not.")),(0,o.kt)("h3",{id:"cross-env"},"cross-env"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cross-env"},"https://www.npmjs.com/package/cross-env")),(0,o.kt)("p",null,'"scripts": {\n"start": "cross-env NODE_ENV=production nodemon server/server.js",\n"build": "cross-env NODE_ENV=production webpack",\n"dev": "concurrently \\"cross-env NODE_ENV=development webpack serve\\" \\"cross-env NODE_ENV=development node server/server.js\\"",\n"test": "echo \\"Error: no test specified\\" && exit 1"\n},'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "start": "node src/index.js",\n  "start-watch": "SET NODE_ENV=development && nodemon -r dotenv/config src/index.js dotenv_config_path=.dev.env",\n  "start-watch-prod": "SET NODE_ENV=development && nodemon -r dotenv/config src/index.js dotenv_config_path=.prod.env"\n}\n')),(0,o.kt)("p",null,"However, you might run into:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sh: SET: command not found\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://linuxhint.com/set-environment-variable-zsh/"},"Environment Variable in ZSH")),(0,o.kt)("h2",{id:"more-examples"},"More examples:"),(0,o.kt)("p",null,"The seconds and third I preload dotenv and change the path to load different files."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  Most frameworks supports access to environment variables right out of the box."),(0,o.kt)("p",{parentName:"admonition"},"  However, I am compelled to write this note because I was not satisfied with the top results returned from my google search. So, hope this helps you and here is more power to you!")),(0,o.kt)("p",null,"More references:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://dev.to/stripe/5-reasons-why-your-env-environment-variables-dont-work-1hc0"},"https://dev.to/stripe/5-reasons-why-your-env-environment-variables-dont-work-1hc0")))}c.isMDXComponent=!0}}]);
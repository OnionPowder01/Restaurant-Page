(()=>{"use strict";var r={426:(r,n,t)=>{t.d(n,{Z:()=>g});var e=t(81),o=t.n(e),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(52),t.b),u=new URL(t(907),t.b),d=new URL(t(314),t.b),p=i()(o()),f=c()(l),m=c()(u),h=c()(d);p.push([r.id,"/* _________ custom colours and fonts __________ */\r\n\r\n:root {\r\n    --darkgreen:#2E5A1E;\r\n    --mediumgreen:#387327;\r\n    --lightergreen:#428229;\r\n    --offwhite:\t#FAF9F6;\r\n}\r\n\r\n@font-face {\r\n    font-family: customFont-h1;\r\n    src: url("+f+");\r\n}\r\n\r\n@font-face {\r\n    font-family: customFont-p;\r\n    src: url("+m+");\r\n}\r\n\r\n/* _________ Main __________ */\r\n\r\nbody {\r\n    \r\n    background-image: url("+h+');\r\n    background-size: cover;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    \r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n    text-align: center;\r\n}\r\n\r\n.landing-title {\r\n    font-family: customFont-h1;\r\n    color: var(--mediumgreen);\r\n    font-weight: 900;\r\n    font-size: 3rem;\r\n}\r\n\r\n.landing-title-menu {\r\n    font-family: customFont-h1;\r\n    color: var(--mediumgreen);\r\n    font-weight: 900;\r\n    font-size: 3rem;\r\n    grid-column-start: 1;\r\n    grid-column-end: 5;\r\n  \r\n}\r\n\r\n.landing-page-copy, .menu-copy, .contact-copy {\r\n    color: var(--offwhite);\r\n    font-family: customFont-p;\r\n    font-weight: 900;\r\n    font-size: 1.2rem;\r\n\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.image-menu {\r\n    grid-column-start: 2;\r\n    grid-column-end: 3; \r\n    border: 10px solid black;  \r\n    border-radius: 20px;  \r\n}\r\n\r\n.menu-copy {\r\n    grid-column-start: 3;\r\n    grid-column-end: 4;\r\n    text-align: center;\r\n    align-self: center;\r\n    border: 10px solid black; \r\n    background-color: black; \r\n    border-radius: 10px; \r\n    \r\n    \r\n}\r\n\r\n\r\n\r\n/* _________ Nav-bar __________ */\r\n\r\nheader {\r\n    background-color: black;\r\n    height: 50px;\r\n    margin-top: -1em;\r\n}\r\n\r\nul {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    list-style-type: none;\r\n    padding: 0px;\r\n    align-items: center;\r\n    height: 50px;\r\n    color: var(--offwhite);\r\n    font-family: customFont-p;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nli {\r\n    display: flex;\r\n    align-items: center;\r\n    /*\r\n    background:  green;\r\n    border-radius: 5px 5px 0px 0px;\r\n    border-top: 10px solid green;\r\n    border-left: 10px solid green;\r\n    border-right: 10px solid green;\r\n    border-bottom: 10px solid green;\\\r\n    */\r\n    cursor: pointer;\r\n}\r\n\r\n/* _________ Nav-bar effects __________ */\r\n\r\n.hvr-shutter-out-horizontal {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    -webkit-transform: perspective(1px) translateZ(0);\r\n    transform: perspective(1px) translateZ(0);\r\n    box-shadow: 0 0 1px rgba(255, 255, 255, 0);\r\n    position: relative;\r\n    -webkit-transition-property: color;\r\n    transition-property: color;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n  }\r\n  .hvr-shutter-out-horizontal:before {\r\n    content: "";\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: var(--lightergreen);\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 50%;\r\n    transform-origin: 50%;\r\n    -webkit-transition-property: transform;\r\n    transition-property: transform;\r\n    -webkit-transition-duration: 0.3s;\r\n    transition-duration: 0.3s;\r\n    -webkit-transition-timing-function: ease-out;\r\n    transition-timing-function: ease-out;\r\n  }\r\n  .hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {\r\n    color: rgb(11, 11, 11);\r\n  }\r\n  .hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n',""]);const g=p},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<r.length;l++){var u=[].concat(r[l]);e&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function t(r){for(var t=-1,e=0;e<n.length;e++)if(n[e].identifier===r){t=e;break}return t}function e(r,e){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],l=e.base?c[0]+e.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,e);e.byIndex=s,n.splice(s,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(r,n){var t=n.domAPI(n);return t.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;t.update(r=n)}else t.remove()}}r.exports=function(r,o){var a=e(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=e(r,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=c}}},569:r=>{var n={};r.exports=function(r,t){var e=function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,t)=>{r.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(t){!function(r,n,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},52:(r,n,t)=>{r.exports=t.p+"44d9fbab9e44801a7b5a.ttf"},907:(r,n,t)=>{r.exports=t.p+"d8cba0895d0895f57fbd.ttf"},314:(r,n,t)=>{r.exports=t.p+"c1b7531845f850b0b843.jpg"}},n={};function t(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={id:e,exports:{}};return r[e](a,a.exports,t),a.exports}t.m=r,t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;t.g.importScripts&&(r=t.g.location+"");var n=t.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");e.length&&(r=e[e.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function r(){const r=document.querySelector("#content");r.replaceChildren();const n=document.createElement("h1");n.textContent="Welcome to Hulk smash Restaurant",n.classList.add("landing-title"),r.appendChild(n);const t=document.createElement("p");t.classList.add("landing-page-copy"),t.textContent="Ahh, getting stronger, I can feel it!",r.appendChild(t);const e=document.createElement("p");e.classList.add("landing-page-copy"),e.textContent="This is a restaurant where we allways have time to break stuff",r.appendChild(e);const o=document.createElement("p");o.classList.add("landing-page-copy"),o.textContent="Thanks, Hulk!",r.appendChild(o),document.querySelector(".home").classList.add("hvr-shutter-out-horizontal"),document.querySelector(".menu").classList.add("hvr-shutter-out-horizontal"),document.querySelector(".contact").classList.add("hvr-shutter-out-horizontal")}var n=t(379),e=t.n(n),o=t(795),a=t.n(o),i=t(569),s=t.n(i),c=t(565),l=t.n(c),u=t(216),d=t.n(u),p=t(589),f=t.n(p),m=t(426),h={};h.styleTagTransform=f(),h.setAttributes=l(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const g=t.p+"ccc95842331151dd91d0.jpg";function v(){const r=document.querySelector("#content"),n=document.createElement("div");n.classList.add("container"),r.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome to Hulk smash Restaurant",t.classList.add("landing-title-menu"),n.appendChild(t);const e=new Image;e.classList.add("image-menu"),e.src=g,e.alt="Image of a Tomahawk Steak",n.appendChild(e);const o=document.createElement("p");o.classList.add("menu-copy"),o.textContent="A huge bone in ribeye that is rich, tender, juicy and full of fantastic avour. This steak has a generous marbling throughout and is perfect for sharing.",n.appendChild(o),r.appendChild(n)}r(),document.querySelector(".home").addEventListener("click",r),document.querySelector(".menu").addEventListener("click",v),console.log("Hi bitch")})()})();
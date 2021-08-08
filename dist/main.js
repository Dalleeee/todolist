(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"html {\n    background:linear-gradient(\n        rgba(0, 0, 0, 0.5),\n        rgba(0, 0, 0, 0.5)\n      ), url('https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg') no-repeat center center fixed; \n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 400px 1fr;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr;\n    background: rgba(223, 229, 233, 0.1)\n}\n\n.projects {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n.lists {\n    display: grid;\n    grid-template-columns: 1fr;\n    padding-top: 10fr;\n}\n\nh1 {\n    color: rgb(255, 241, 215);\n}\n\na {\n    color: rgb(255, 241, 215);\n    text-decoration: none;\n}\n\n.project {\n    font-size: 35px;\n}\n\n.item {\n    font-size: 25px;\n}\n\nhtml {\n    text-align: center;\n}\n\n.title {\n    font-size: 50px;\n}\n\np {\n    color: rgb(255, 241, 215);\n    font-size: 20px;\n}\n\n#create-project {\n    font-size: 50px;\n    width: 60px;\n    height: 60px;\n}\n\nbutton {\n    background-color: rgb(255, 241, 215);\n    border: none;\n    border-radius: 15px;\n    margin: 5px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\na:hover {\n    cursor: pointer;\n}\n\n.form-popup {\n    display: none;\n}\n\n#listForm, #projectForm {\n    font-size: 20px;\n    color: rgb(255, 241, 215);\n}\n\n#header {\n    font-size: 45px;\n}\n\n.button {\n    background-color: rgb(255, 241, 215);\n    border: none;\n    border-radius: 15px;\n    margin: 5px;\n}\n\n#listForm {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var a=[].concat(e[d]);o&&r[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],d=0;d<e.length;d++){var a=e[d],l=o.base?a[0]+o.base:a[0],s=i[l]||0,u="".concat(l," ").concat(s);i[l]=s+1;var p=n(u),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(t[p].references++,t[p].updater(m)):t.push({identifier:u,updater:r(m,o),references:1}),c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var d=n(i[c]);t[d].references--}for(var a=o(e,r),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=document.getElementById("projectForm");document.getElementById("btn-cancel").addEventListener("click",(function(){e.style.display="none"}));const t=document.getElementById("content"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");function c(e){e=this.innerHTML,r.innerHTML="",i.innerHTML="";const n=document.createElement("h1");n.classList.add("title"),n.innerText=e;const c=document.createElement("div"),d=document.createElement("button");d.innerText="Add to Project",d.addEventListener("click",(function(){!function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","listForm");const n=document.createElement("form"),o=document.createElement("br"),r=document.createElement("label");r.setAttribute("for","title"),r.textContent="Title";const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","projectTitle"),i.setAttribute("placeholder","Enter To Do Title"),i.setAttribute("name","title");const c=document.createElement("label");c.setAttribute("for","description"),c.textContent="Description";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("id","projectDescription"),d.setAttribute("placeholder","Enter To Do Description"),d.setAttribute("name","description");const a=document.createElement("label");a.setAttribute("for","dueDate"),a.textContent="Due Date";const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("id","projectDueDate"),l.setAttribute("placeholder","Enter To Do dueDate"),l.setAttribute("name","dueDate");const s=document.createElement("label");s.setAttribute("for","priority"),s.textContent="Priority";const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","projectPriority"),u.setAttribute("placeholder","Enter To Do priority"),u.setAttribute("name","priority");const p=document.createElement("input");p.setAttribute("type","button"),p.setAttribute("id","list-submit"),p.setAttribute("value","Submit"),p.classList.add("button");const m=document.createElement("input");m.setAttribute("type","button"),m.setAttribute("id","close-list"),m.setAttribute("value","Close"),m.classList.add("button"),n.appendChild(r),n.appendChild(o.cloneNode()),n.appendChild(i),n.appendChild(o.cloneNode()),n.appendChild(c),n.appendChild(o.cloneNode()),n.appendChild(d),n.appendChild(o.cloneNode()),n.appendChild(a),n.appendChild(o.cloneNode()),n.appendChild(l),n.appendChild(o.cloneNode()),n.appendChild(s),n.appendChild(o.cloneNode()),n.appendChild(u),n.appendChild(o.cloneNode()),n.appendChild(p),n.appendChild(o.cloneNode()),n.appendChild(m),t.appendChild(n),e.appendChild(t)}(),document.getElementById("list-submit").addEventListener("click",u)}));const a=document.createElement("button");a.innerText="Delete Project",a.addEventListener("click",(function(e){console.log("hello"),e=document.querySelector(".title").textContent,console.log(e),delete s[e],console.table(s),o.innerHTML=""})),c.appendChild(d),c.appendChild(a),r.appendChild(n),r.appendChild(c),t.appendChild(r),l()}const d=document.createElement("div"),a=document.getElementById("body");function l(e){d.innerHTML="",e=document.querySelector(".title").textContent;for(let n=0;n<s[e].length;n++){const o=document.createElement("a");o.setAttribute("href","#"),o.classList.add("item"),o.innerText=s[e][n].title,o.addEventListener("click",(function(){i.innerHTML="",i.classList.add("list-display");const t=document.createElement("h1");t.innerText=s[e][n].title;const r=document.createElement("p");r.innerText=s[e][n].description;const c=document.createElement("p");c.innerText=s[e][n].dueDate;const d=document.createElement("p");d.innerText=s[e][n].priority;const u=document.createElement("button");u.innerText="Delete item",u.addEventListener("click",(function(){s[e].splice(n,1),l(),i.innerHTML=""}));const p=document.createElement("button");p.innerText="Done?",p.addEventListener("click",(function(){"done"!=o.classList?(o.classList.add("done"),o.setAttribute("style","text-decoration: line-through"),t.setAttribute("style","text-decoration: line-through")):(o.classList.remove("done"),o.setAttribute("style","text-decoration: none"),t.setAttribute("style","text-decoration: none"))})),i.appendChild(t),i.appendChild(r),i.appendChild(c),i.appendChild(d),i.appendChild(p),i.appendChild(u),a.appendChild(i)})),d.classList.add("lists"),d.appendChild(o),t.appendChild(d)}}const s={};function u(e){e=document.querySelector(".title").textContent;const t={title:document.getElementById("projectTitle").value,description:document.getElementById("projectDescription").value,dueDate:document.getElementById("projectDueDate").value,priority:document.getElementById("projectPriority").value};s[e].push(t),document.getElementById("projectTitle").value="",document.getElementById("projectDescription").value="",document.getElementById("projectDueDate").value="",document.getElementById("projectPriority").value="",console.table(s),l()}var p=n(379),m=n.n(p),b=n(795),h=n.n(b),f=n(569),v=n.n(f),y=n(565),g=n.n(y),E=n(216),x=n.n(E),C=n(589),A=n.n(C),T=n(426),L={};L.styleTagTransform=A(),L.setAttributes=g(),L.insert=v().bind(null,"head"),L.domAPI=h(),L.insertStyleElement=x(),m()(T.Z,L),T.Z&&T.Z.locals&&T.Z.locals,document.getElementById("create-project").addEventListener("click",(function(){"none"===e.style.display?e.style.display="block":e.style.display="none"})),document.getElementById("project-submit").addEventListener("click",(function(){var e;e=document.getElementById("project-name").value,s[e]=[],console.table(s),function(e){r.innerHTML="";const n=document.createElement("a");n.setAttribute("href","#"),n.classList.add("project"),n.innerText=e,n.addEventListener("click",c),o.appendChild(n),o.classList.add("projects"),t.appendChild(o)}(e),document.getElementById("project-name").value=""}))})()})();
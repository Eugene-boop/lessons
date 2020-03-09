!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=e=>{const t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds"),n=()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),r=Math.floor(t/60%60);return{timeRemain:t,hours:Math.floor(t/60/60),minutes:r,seconds:o}},s=e=>e<=0?"00":e<10?"0"+e:e,a=()=>{const e=n();t.textContent=s(e.hours),o.textContent=s(e.minutes),r.textContent=s(e.seconds)};a();const c=setInterval(()=>{n().seconds<0&&clearInterval(c),a()},1e3)};var n=()=>{const e=document.querySelector("menu");document.querySelector("body").addEventListener("click",t=>{if(t.target.matches("button"))return void e.classList.remove("active-menu");t.preventDefault();let o=t.target;o=o.closest(".menu")||o,o.matches(".close-btn")||o.matches(".menu")?e.classList.toggle("active-menu"):o.matches("menu a")?(document.querySelector(o.hash).scrollIntoView(),e.classList.remove("active-menu")):o=o.closest("menu"),o||e.classList.remove("active-menu")})};var s=()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content");t.forEach(t=>{t.addEventListener("click",()=>{e.style.display="block",document.documentElement.clientWidth>=768&&(o.style.top="100%",o.style.opacity="0",function({duration:e,draw:t,timing:o}){const r=performance.now();requestAnimationFrame((function n(s){let a=(s-r)/e/3;a>1&&(a=1);const c=o(a);t(c),a<1&&requestAnimationFrame(n)}))}({duration:150,timing:e=>e,draw(e){o.style.top=`${20/e}%`,o.style.opacity=`${e}`}}))})}),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?e.style.display="none":o=o.closest(".popup-content"),o||(e.style.display="none")})};var a=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let r=e.target;r=r.closest(".service-header-tab"),r&&t.forEach((e,n)=>{var s;e===r&&(s=n,o.forEach((e,o)=>{e.classList.add("d-none"),t[o].classList.remove("active"),s===o&&(e.classList.remove("d-none"),t[o].classList.add("active"))}))})})};var c=()=>{const e=document.querySelectorAll(".portfolio-item"),t=document.querySelector(".portfolio-dots"),o=document.querySelector(".portfolio-content");(()=>{let o="";for(let t=0;t<e.length;t++)o+='<li class="dot"></li>';t.insertAdjacentHTML("afterbegin",o),t.childNodes[0].classList.add("dot-active")})();const r=t.childNodes;let n,s=0;const a=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},l=()=>{a(e,s,"portfolio-item-active"),a(r,s,"dot-active"),s++,s>=e.length&&(s=0),c(e,s,"portfolio-item-active"),c(r,s,"dot-active")},i=(e=3e3)=>{n=setInterval(l,e)};i(1500),o.addEventListener("click",t=>{t.preventDefault();const o=t.target;o.matches("#arrow-right, #arrow-left, .dot")&&(a(e,s,"portfolio-item-active"),a(r,s,"dot-active"),o.matches("#arrow-right")?s++:o.matches("#arrow-left")?s--:o.matches(".dot")&&r.forEach((e,t)=>{e===o&&(s=t)}),s>=e.length&&(s=0),s<0&&(s=e.length-1),c(e,s,"portfolio-item-active"),c(r,s,"dot-active"))}),o.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||event.target.matches(".dot"))&&clearInterval(n)}),o.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||event.target.matches(".dot"))&&i()})};var l=()=>{const e=document.querySelector(".command .container .row");let t;e.addEventListener("mouseover",e=>{const o=e.target;t=o.getAttribute("src"),o.matches("img")&&(o.src=o.dataset.img)}),e.addEventListener("mouseout",e=>{const o=e.target;o.matches("img")&&(o.src=t)})};var i=(e=100)=>{document.querySelectorAll('.calc-item[type="number"').forEach(e=>{let t="";e.addEventListener("input",e=>{const o=e.target;o.matches('.calc-item[type="number"')&&(o.value||1!==t.length||(t=""),o.value&&(t=o.value),o.value=t.replace(/\D/g,""))})});const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),s=document.querySelector(".calc-count"),a=document.getElementById("total");t.addEventListener("change",t=>{t.target.matches(".calc-item")&&(()=>{let t=0,c=1,l=1;const i=+o.options[o.selectedIndex].value,u=+r.value;s.value>1&&(c+=(+s.value-1)/10),n.value&&n.value<5?l*=2:n.value&&n.value<10&&(l*=1.5),console.log("calcDay.value: ",n.value),console.log("calcCount.value: ",s.value),i&&u&&+n.value.trim()&&+s.value.trim()&&(t=e*i*u*c*l),a.textContent=Math.ceil(t)})()})};var u=()=>{document.querySelectorAll("form").forEach(e=>{(e=>{const t=document.createElement("div");t.textContent="",t.style.fontSize="2rem",t.style.color="white",e.appendChild(t),e.addEventListener("submit",r=>{r.preventDefault(),t.style.display="block",t.textContent="Загрузка...";const n=new FormData(e),s={};n.forEach((e,t)=>{s[t]=e}),o(s).then(o=>{if(200!==o.status)throw new Error(o.statusText);t.textContent="Спасибо! Скоро свяжемся",e.querySelectorAll("input").forEach(e=>{e.classList.remove("success"),e.value=""})}).catch(e=>{t.textContent="Что-то пошло не так",console.log(e)}).finally(()=>{setTimeout(()=>{t.style.display="none"},5e3)})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(e)})};var d=(e,t)=>{t.forEach((t,o)=>{document.querySelectorAll(t).forEach(t=>{t.addEventListener("input",()=>{t.value=t.value.replace(e[o],"")})})})};var m=(e,t)=>{document.querySelector(e).addEventListener("click",e=>{e.preventDefault(),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})})};class p{constructor({selector:e,pattern:t,method:o}){this.form=document.querySelector(e),this.pattern=t,this.method=o,this.elementsForm=[...this.form.elements].filter(e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type),this.error=new Set,this.sendBtn=this.form.querySelector("button")}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach(e=>e.addEventListener("change",this.checkIt.bind(this))),this.form.addEventListener("submit",e=>{this.elementsForm.forEach(e=>this.checkIt({target:e})),this.error.size&&(e.preventDefault(),e.stopImmediatePropagation())})}isValid(e){const t={notEmpty:e=>!!e.value.trim(),pattern:(e,t)=>t.test(e.value)};if(this.method){const o=this.method[e.type];if(o)return o.every(o=>t[o[0]](e,this.pattern[o[1]]))}return!0}checkIt(e){const t=e.target;this.isValid(t)?(this.showSuccess(t),this.error.delete(t),this.error.size||(this.sendBtn.disabled=!1)):(this.showError(t),this.error.add(t),this.error.size&&(this.sendBtn.disabled=!0))}showError(e){e.classList.remove("success"),e.classList.add("error")}showSuccess(e){e.classList.remove("error"),e.classList.add("success")}applyStyle(){const e=document.createElement("style");e.textContent="\n      input.success {\n        border: 2px solid green !important;\n      }\n      input.error {\n        border: 2px solid red !important;\n      }\n    ",document.head.appendChild(e)}setPattern(){this.pattern.phone=this.pattern.phone?this.pattern.phone:/^\+?[78]([-()]*\d){10}$/,this.pattern.email=this.pattern.email?this.pattern.email:/^\w+@\w+\.[\w\.]{2,}$/,this.pattern.text=this.pattern.text?this.pattern.text:/[А-яа-яЁё\s]+/}}document.addEventListener("DOMContentLoaded",()=>{r("March 11, 2020 15:00:00"),n(),s(),a(),c(),l(),i(),u(),d([/[^\d|+]/gi,/[A-Z\d]/gi],['input[type="tel"]','input[type="text"]']),m('a[href="#service-block"]',"service-block"),new p({selector:"#form1",pattern:{},method:{tel:[["notEmpty"],["pattern","phone"]],email:[["notEmpty"],["pattern","email"]],text:[["notEmpty"],["pattern","text"]]}}).init(),new p({selector:"#form2",pattern:{},method:{tel:[["notEmpty"],["pattern","phone"]],email:[["notEmpty"],["pattern","email"]],text:[["notEmpty"],["pattern","text"]]}}).init(),new p({selector:"#form3",pattern:{},method:{tel:[["notEmpty"],["pattern","phone"]],email:[["notEmpty"],["pattern","email"]],text:[["notEmpty"],["pattern","text"]]}}).init()})}]);
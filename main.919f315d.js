parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".phone__btn"),r=document.querySelector(".phone__list"),o=document.querySelectorAll(".nav__btn"),t=document.querySelectorAll(".nav__link"),s=document.querySelector(".nav"),c=document.querySelector(".overlay"),a=document.querySelector(".form"),l=document.querySelector("#name"),n=document.querySelector("#email"),i=document.querySelector("#message"),m=document.querySelector(".form__error--name"),u=document.querySelector(".form__error--email"),_=document.querySelector(".form__error--message"),d=/^[-\w.]+@([-\w]+\.)+[a-z]+$/i,v=function(){s.classList.remove("nav--is-open"),r.classList.remove("phone__list--is-open"),c.classList.remove("overlay--is-open")},f=function(e){e.preventDefault();var r=l.value,o=n.value,t=i.value;""===r.trim()?(l.classList.add("form__input--error"),m.classList.add("form__error--show")):(l.classList.remove("form__input--error"),m.classList.remove("form__error--show")),d.test(o.trim())?(n.classList.remove("form__input--error"),u.classList.remove("form__error--show")):(n.classList.add("form__input--error"),u.classList.add("form__error--show")),""===t.trim()?(i.classList.add("form__textarea--error"),_.classList.add("form__error--show")):(i.classList.remove("form__textarea--error"),_.classList.remove("form__error--show")),""!==r.trim()&&d.test(o.trim())&&""!==t.trim()&&(l.value="",n.value="",i.value="")};o.forEach(function(e){e.addEventListener("click",function(){s.classList.toggle("nav--is-open"),c.classList.toggle("overlay--is-open")})}),e.addEventListener("click",function(){r.classList.toggle("phone__list--is-open"),c.classList.toggle("overlay--is-open")}),t.forEach(function(e){e.addEventListener("click",v)}),c.addEventListener("click",v),a.addEventListener("submit",f);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.919f315d.js.map
(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)},o=document.querySelector("#card-template").content;function r(n,r,i,u){var l=o.querySelector(".places__item").cloneNode(!0),s=l.querySelector(".card__delete-button"),d=l.querySelector(".card__image"),p=l.querySelector(".card__like-button"),f=l.querySelector(".place__like-card");return d.src=n.link,d.alt=n.name,l.querySelector(".card__title").textContent=n.name,f.textContent=n.likes.length,d.addEventListener("click",(function(){i(n.link,n.name)})),p.addEventListener("click",(function(o){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){a(e,r),n.target.classList.remove(".card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){a(e,r),n.target.classList.add(".card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(o,n._id,f)})),p.addEventListener("click",c),r._id===n.owner._id?s.addEventListener("click",(function(o){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(o,n._id)})):s.remove(),n.likes.forEach((function(e){e._id===r._id&&p.classList.add("card__like-button_is-active")})),l}function c(e){console.log(e),e.target.classList.toggle("card__like-button_is-active")}function a(e,t){t.textContent=e.likes.length}function i(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",l),e.addEventListener("click",s)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),e.removeEventListener("click",s)}function l(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function s(e){e.currentTarget===e.target&&u(document.querySelector(".popup_is-opened"))}var d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},p=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),o.classList.remove("".concat(n.errorClass)),o.textContent=""}(e,t,d):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,d)},f=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))};function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=document.querySelector(".places__list"),v=document.querySelectorAll(".popup"),h=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup_type_update-avatar"),b=h.querySelector(".popup__form"),g=h.querySelector(".popup__input_type_card-name"),q=h.querySelector(".popup__input_type_url"),E=document.querySelector(".popup__input_type_avatar-url"),L=document.querySelector(".popup_type_edit"),k=L.querySelector(".popup__input_type_name"),C=L.querySelector(".popup__input_type_description"),A=document.querySelector(".profile__add-button"),x=document.querySelector(".profile__edit-button"),T=document.querySelector(".profile__image"),U=document.querySelector(".popup_type_edit"),w=document.querySelector(".popup_type_image"),j=w.querySelector(".popup__image"),D=w.querySelector(".popup__caption"),M=document.querySelector(".profile__title"),O=document.querySelector(".profile__description"),P=document.querySelector(".profile__image");function B(e,t){i(w),j.src=e,j.alt=t,D.textContent=t}function I(e,t){e.target.querySelector(".popup__button").textContent=t}function N(e){M.textContent=e.name,O.textContent=e.about}function V(e){P.style.backgroundImage="url('".concat(e.avatar,"')")}U.addEventListener("submit",(function(n){var o,r;n.preventDefault(),I(n,"Сохранение..."),(o="".concat(k.value),r="".concat(C.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){N(e),u(U),b.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Создать")}))})),x.addEventListener("click",(function(e){i(U),k.value=M.textContent,C.value=O.textContent})),h.addEventListener("submit",(function(o){var c,a;o.preventDefault(),I(o,"Сохранение..."),Promise.all([(c=g.value,a=q.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(c),link:"".concat(a)})}).then(e)),n()]).then((function(e){var t=_(e,2),n=t[0],o=t[1];console.log(m),m.prepend(r(n,o,B)),h.reset,u(h)})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(o,"Создать")}))})),A.addEventListener("click",(function(e){i(h)})),T.addEventListener("click",(function(e){i(S)})),S.addEventListener("submit",(function(n){var o;n.preventDefault(),I(n,"Сохранение..."),(o=E.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){V(e),S.reset(),u(S)})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Создать")}))})),v.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){u(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));f(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){p(e,r),f(n,o,t)}))}))}(t,e)}))}(d),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),n()]).then((function(e){var t=_(e,2),n=t[0],o=t[1];console.log({cardsData:n,userData:o}),N(o),V(o),n.forEach((function(e){m.append(r(e,o,B))}))})).catch((function(e){console.log(e)}))})();
(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)},o=document.querySelector("#card-template").content;function r(n,r,c,a){var u=o.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__delete-button"),l=u.querySelector(".card__image"),s=u.querySelector(".card__like-button"),p=u.querySelector(".place__like-card");function d(e,t){t.textContent=e.likes.length}return l.src=n.link,l.alt=n.name,u.querySelector(".card__title").textContent=n.name,p.textContent=n.likes.length,l.addEventListener("click",(function(){c(n.link,n.name)})),s.addEventListener("click",(function(o){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){d(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){d(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(o,n._id,p)})),r._id===n.owner._id?i.addEventListener("click",(function(o){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(o,n._id)})):i.remove(),n.likes.forEach((function(e){e._id===r._id&&s.classList.add("card__like-button_is-active")})),u}function c(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",u),e.addEventListener("click",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.removeEventListener("click",i)}function u(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function i(e){e.currentTarget===e.target&&a(document.querySelector(".popup_is-opened"))}var l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},s=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),o.classList.remove("".concat(n.errorClass)),o.textContent=""}(e,t,l):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,l)},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))};function d(e,t){var n=e.querySelectorAll(t.inputSelector),o=e.querySelector(".popup__button");o.classList.add(t.inactiveButtonClass),o.disabled=!0,n.forEach((function(n){var o=e.querySelector(".".concat(n.id,"-error"));n.classList.remove(t.inputErrorClass),o.classList.remove(t.errorClass),o.textContent=""}))}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=document.querySelector(".places__list"),y=document.querySelectorAll(".popup"),v=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_update-avatar"),S=v.querySelector(".popup__form"),b=v.querySelector(".popup__input_type_card-name"),g=v.querySelector(".popup__input_type_url"),q=document.querySelector(".popup__input_type_avatar-url"),E=document.querySelector(".popup_type_edit"),L=E.querySelector(".popup__input_type_name"),C=E.querySelector(".popup__input_type_description"),k=document.querySelector(".profile__add-button"),A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__image"),w=document.querySelector(".popup_type_edit"),T=document.querySelector(".popup_type_image"),U=T.querySelector(".popup__image"),j=T.querySelector(".popup__caption"),D=document.querySelector(".profile__title"),M=document.querySelector(".profile__description"),O=document.querySelector(".profile__image"),P=document.querySelector('.popup_type_edit .popup__form[name="edit-profile"]'),B=document.querySelector('.popup_type_update-avatar .popup__form[name="new-avatar"]'),I=document.querySelector('.popup_type_new-card .popup__form[name="new-place"]');function N(e,t){c(T),U.src=e,U.alt=t,j.textContent=t}function V(e,t){e.target.querySelector(".popup__button").textContent=t}function J(e){D.textContent=e.name,M.textContent=e.about}function G(e){O.style.backgroundImage="url('".concat(e.avatar,"')")}w.addEventListener("submit",(function(n){var o,r;n.preventDefault(),V(n,"Сохранение..."),(o="".concat(L.value),r="".concat(C.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){J(e),a(w),S.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){V(n,"Сохранить")}))})),A.addEventListener("click",(function(e){c(w),L.value=D.textContent,C.value=M.textContent,d(P,l)})),v.addEventListener("submit",(function(o){var c,u;o.preventDefault(),V(o,"Сохранение..."),Promise.all([(c=b.value,u=g.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(c),link:"".concat(u)})}).then(e)),n()]).then((function(e){var t=f(e,2),n=t[0],o=t[1];console.log(m),m.prepend(r(n,o,N)),a(v),I.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){V(o,"Сохранить")}))})),k.addEventListener("click",(function(e){c(v),d(I,l)})),x.addEventListener("click",(function(e){d(B,l),c(h)})),h.addEventListener("submit",(function(n){var o;n.preventDefault(),V(n,"Сохранение..."),(o=q.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){G(e),a(h),h.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){V(n,"Сохранить")}))})),y.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){a(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));p(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){s(e,r),p(n,o,t)}))}))}(t,e)}))}(l),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),n()]).then((function(e){var t=f(e,2),n=t[0],o=t[1];console.log({cardsData:n,userData:o}),J(o),G(o),n.forEach((function(e){m.append(r(e,o,N))}))})).catch((function(e){console.log(e)}))})();
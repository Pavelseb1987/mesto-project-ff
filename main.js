(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)},o=document.querySelector("#card-template").content;function r(n,r,c,a){var u=o.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__delete-button"),l=u.querySelector(".card__image"),s=u.querySelector(".card__like-button"),d=u.querySelector(".place__like-card");function p(e,t){t.textContent=e.likes.length}return l.src=n.link,l.alt=n.name,u.querySelector(".card__title").textContent=n.name,d.textContent=n.likes.length,l.addEventListener("click",(function(){c(n.link,n.name)})),s.addEventListener("click",(function(o){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(o,n._id,d)})),r._id===n.owner._id?i.addEventListener("click",(function(o){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(o,n._id)})):i.remove(),n.likes.forEach((function(e){e._id===r._id&&s.classList.add("card__like-button_is-active")})),u}function c(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",u),e.addEventListener("click",i)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.removeEventListener("click",i)}function u(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function i(e){e.currentTarget===e.target&&a(document.querySelector(".popup_is-opened"))}var l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},s=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),o.classList.remove("".concat(n.errorClass)),o.textContent=""},d=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,l):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,l)},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))},f=function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));disableSubmitButton(o,t.inactiveButtonClass),n.forEach((function(n){s(e,n,t),n.setCustomValidity("")}))};function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var y=document.querySelector(".places__list"),v=document.querySelectorAll(".popup"),h=document.querySelector(".popup_type_new-card"),S=document.querySelector(".popup_type_update-avatar"),b=h.querySelector(".popup__form"),g=h.querySelector(".popup__input_type_card-name"),q=h.querySelector(".popup__input_type_url"),E=document.querySelector(".popup__input_type_avatar-url"),C=document.querySelector(".popup_type_edit"),L=C.querySelector(".popup__input_type_name"),k=C.querySelector(".popup__input_type_description"),A=document.querySelector('[name="edit-profile"]'),x=document.querySelector('[name="new-avatar"]'),w=document.querySelector('[name="new-place"]'),T=document.querySelector(".profile__add-button"),U=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__image"),j=document.querySelector(".popup_type_edit"),B=document.querySelector(".popup_type_image"),M=B.querySelector(".popup__image"),O=B.querySelector(".popup__caption"),P=document.querySelector(".profile__title"),V=document.querySelector(".profile__description"),I=document.querySelector(".profile__image");function N(e,t){c(B),M.src=e,M.alt=t,O.textContent=t}function J(e,t){e.target.querySelector(".popup__button").textContent=t}function G(e){P.textContent=e.name,V.textContent=e.about}function H(e){I.style.backgroundImage="url('".concat(e.avatar,"')")}j.addEventListener("submit",(function(n){var o,r;n.preventDefault(),J(n,"Сохранение..."),(o="".concat(L.value),r="".concat(k.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){G(e),a(j),b.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){J(n,"Создать")}))})),U.addEventListener("click",(function(){c(j),L.value=P.textContent,k.value=V.textContent,f(A,l)})),h.addEventListener("submit",(function(n){var o,c;n.preventDefault(),J(n,"Сохранение..."),(o=g.value,c=q.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(o),link:"".concat(c)})}).then(e)).then((function(e){var t=_(e,1)[0];console.log(y),y.prepend(r(t,userData,N)),a(h),h.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){J(n,"Создать")})),f(w,l)})),T.addEventListener("click",(function(){c(h)})),D.addEventListener("click",(function(e){c(S),f(x,l)})),S.addEventListener("submit",(function(n){var o;n.preventDefault(),J(n,"Сохранение..."),(o=E.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){H(e),a(S),S.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){J(n,"Создать")}))})),v.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){a(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));p(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){d(e,r),p(n,o,t)}))}))}(t,e)}))}(l),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),n()]).then((function(e){var t=_(e,2),n=t[0],o=t[1];console.log({cardsData:n,userData:o}),G(o),H(o),n.forEach((function(e){y.append(r(e,o,N))}))})).catch((function(e){console.log(e)}))})();
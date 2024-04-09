(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)},o=document.querySelector("#card-template").content;function r(n,r,c,a){var i=o.querySelector(".places__item").cloneNode(!0),u=i.querySelector(".card__delete-button"),l=i.querySelector(".card__image"),s=i.querySelector(".card__like-button"),d=i.querySelector(".place__like-card");function p(e,t){t.textContent=e.likes.length}return l.src=n.link,l.alt=n.name,i.querySelector(".card__title").textContent=n.name,d.textContent=n.likes.length,l.addEventListener("click",(function(){c(n.link,n.name)})),s.addEventListener("click",(function(o){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(o,n._id,d)})),r._id===n.owner._id?u.addEventListener("click",(function(o){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(o,n._id)})):u.remove(),n.likes.forEach((function(e){e._id===r._id&&s.classList.add("card__like-button_is-active")})),i}function c(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",i),e.addEventListener("click",u)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),e.removeEventListener("click",u)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.currentTarget===e.target&&a(document.querySelector(".popup_is-opened"))}var l=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),o.classList.remove("".concat(n.errorClass))},s=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,validSet):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,validSet)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))},p=function(e,t){var n=e.querySelectorAll("".concat(t.inputSelector)),o=e.querySelector("".concat(t.submitButtonSelector));n.forEach((function(n){l({formElement:e,inputElement:n,validSet:t})})),d({inputList:n,submitButtonElement:o,validSet:t})};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var m=document.querySelector(".places__list"),y=document.querySelectorAll(".popup"),v=document.querySelector(".popup_type_new-card"),h=document.querySelector(".popup_type_update-avatar"),S=v.querySelector(".popup__form"),b=v.querySelector(".popup__input_type_card-name"),g=v.querySelector(".popup__input_type_url"),q=document.querySelector(".popup__input_type_avatar-url"),E=document.querySelector(".popup_type_edit"),L=E.querySelector(".popup__input_type_name"),k=E.querySelector(".popup__input_type_description"),C=document.querySelector(".profile__add-button"),A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__image"),T=document.querySelector(".popup_type_edit"),U=document.querySelector(".popup_type_image"),w=U.querySelector(".popup__image"),D=U.querySelector(".popup__caption"),j=document.querySelector(".profile__title"),M=document.querySelector(".profile__description"),O=document.querySelector(".profile__image"),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function P(e,t){c(U),w.src=e,w.alt=t,D.textContent=t}function I(e,t){e.target.querySelector(".popup__button").textContent=t}function N(e){j.textContent=e.name,M.textContent=e.about}function V(e){O.style.backgroundImage="url('".concat(e.avatar,"')")}T.addEventListener("submit",(function(n){var o,r;n.preventDefault(),I(n,"Сохранение..."),(o="".concat(L.value),r="".concat(k.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){N(e),a(T),S.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Создать")}))})),A.addEventListener("click",(function(e){p(T,B),c(T),L.value=j.textContent,k.value=M.textContent})),v.addEventListener("submit",(function(n){var o,c;n.preventDefault(),I(n,"Сохранение..."),Promise([(o=b.value,c=g.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(o),link:"".concat(c)})}).then(e))]).then((function(e){var t=f(e,1)[0];console.log(m),m.prepend(r(t,userData,P)),a(v),v.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Создать")}))})),C.addEventListener("click",(function(e){p(v,B),c(v)})),x.addEventListener("click",(function(e){p(h,B),c(h)})),h.addEventListener("submit",(function(n){var o;n.preventDefault(),I(n,"Сохранение..."),(o=q.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){V(e),a(h),h.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Создать")}))})),y.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){a(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));d(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){s(e,r),d(n,o,t)}))}))}(t,e)}))}(B),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),n()]).then((function(e){var t=f(e,2),n=t[0],o=t[1];console.log({cardsData:n,userData:o}),N(o),V(o),n.forEach((function(e){m.append(r(e,o,P))}))})).catch((function(e){console.log(e)}))})();
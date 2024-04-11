(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=document.querySelector("#card-template").content;function o(o,r,c,a){var u=n.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__delete-button"),l=u.querySelector(".card__image"),s=u.querySelector(".card__like-button"),p=u.querySelector(".place__like-card");function d(e,t){t.textContent=e.likes.length}return l.src=o.link,l.alt=o.name,u.querySelector(".card__title").textContent=o.name,p.textContent=o.likes.length,l.addEventListener("click",(function(){c(o.link,o.name)})),s.addEventListener("click",(function(n){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){d(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){d(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(n,o._id,p)})),r===o.owner._id?i.addEventListener("click",(function(n){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(n,o._id)})):i.remove(),o.likes.forEach((function(e){e._id===r&&s.classList.add("card__like-button_is-active")})),u}function r(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",a),e.addEventListener("click",u)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a),e.removeEventListener("click",u)}function a(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function u(e){e.currentTarget===e.target&&c(document.querySelector(".popup_is-opened"))}function i(e){throw new TypeError('"'+e+'" is read-only')}var l=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))};function s(e,t){var n=e.querySelectorAll(t.inputSelector);e.querySelector("".concat(t.submitButtonSelector)),i("toggleButtonState"),n.forEach((function(e,t,n){i("hideInputError")}))}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var d,f=document.querySelector(".places__list"),_=document.querySelectorAll(".popup"),y=document.querySelector(".popup_type_new-card"),m=document.querySelector(".popup_type_update-avatar"),v=y.querySelector(".popup__form"),h=y.querySelector(".popup__input_type_card-name"),S=y.querySelector(".popup__input_type_url"),b=document.querySelector(".popup__input_type_avatar-url"),g=document.querySelector(".popup_type_edit"),q=g.querySelector(".popup__input_type_name"),E=g.querySelector(".popup__input_type_description"),L=document.querySelector(".profile__add-button"),k=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__image"),w=document.querySelector(".popup_type_edit"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__image"),T=A.querySelector(".popup__caption"),U=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),D=document.querySelector(".profile__image"),M=document.querySelector('.popup_type_edit .popup__form[name="edit-profile"]'),O=document.querySelector('.popup_type_update-avatar .popup__form[name="new-avatar"]'),B=document.querySelector('.popup_type_new-card .popup__form[name="new-place"]'),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function I(e,t){r(A),x.src=e,x.alt=t,T.textContent=t}function N(e,t){e.target.querySelector(".popup__button").textContent=t}function V(e){U.textContent=e.name,j.textContent=e.about}function J(e){D.style.backgroundImage="url('".concat(e.avatar,"')")}w.addEventListener("submit",(function(n){var o,r;n.preventDefault(),N(n,"Сохранение..."),(o="".concat(q.value),r="".concat(E.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){V(e),c(w),v.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){N(n,"Сохранить")}))})),k.addEventListener("click",(function(e){r(w),q.value=U.textContent,E.value=j.textContent,s(M,P)})),y.addEventListener("submit",(function(n){var r,a;n.preventDefault(),N(n,"Сохранение..."),(r=h.value,a=S.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(r),link:"".concat(a)})}).then(e)).then((function(e){console.log(f),f.prepend(o(e,d,I)),c(y),B.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){N(n,"Сохранить")}))})),L.addEventListener("click",(function(e){r(y),v.reset(),s(B,P)})),C.addEventListener("click",(function(e){r(m),O.reset(),s(O,P)})),m.addEventListener("submit",(function(n){var o;n.preventDefault(),N(n,"Сохранение..."),(o=b.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){J(e),c(m),O.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){N(n,"Сохранить")}))})),_.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){c(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));l(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),o.classList.remove("".concat(n.errorClass)),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,n)}(e,r,t),l(n,o,t)}))}))}(t,e)}))}(P),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],a=r[1];console.log({cardsData:c,userData:a}),d=a._id,V(a),J(a),c.forEach((function(e){f.append(o(e,d,I))}))})).catch((function(e){console.log(e)}))})();
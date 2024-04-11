(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=document.querySelector("#card-template").content;function o(o,r,c,a){var u=n.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__delete-button"),l=u.querySelector(".card__image"),s=u.querySelector(".card__like-button"),p=u.querySelector(".place__like-card");function d(e,t){t.textContent=e.likes.length}return l.src=o.link,l.alt=o.name,u.querySelector(".card__title").textContent=o.name,p.textContent=o.likes.length,l.addEventListener("click",(function(){c(o.link,o.name)})),s.addEventListener("click",(function(n){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){d(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){d(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(n,o._id,p)})),r===o.owner._id?i.addEventListener("click",(function(n){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(n,o._id)})):i.remove(),o.likes.forEach((function(e){e._id===r&&s.classList.add("card__like-button_is-active")})),u}function r(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",a),e.addEventListener("click",u)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a),e.removeEventListener("click",u)}function a(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function u(e){e.currentTarget===e.target&&c(document.querySelector(".popup_is-opened"))}var i=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))};function l(e,t){e.querySelectorAll(t.inputSelector).forEach((function(n){var o=e.querySelector(".".concat(n.id,"-error"));n.classList.remove(t.inputErrorClass),o.classList.remove(t.errorClass),o.textContent=""}))}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var p,d=document.querySelector(".places__list"),f=document.querySelectorAll(".popup"),_=document.querySelector(".popup_type_new-card"),m=document.querySelector(".popup_type_update-avatar"),y=_.querySelector(".popup__form"),v=_.querySelector(".popup__input_type_card-name"),h=_.querySelector(".popup__input_type_url"),S=document.querySelector(".popup__input_type_avatar-url"),b=document.querySelector(".popup_type_edit"),g=b.querySelector(".popup__input_type_name"),q=b.querySelector(".popup__input_type_description"),E=document.querySelector(".profile__add-button"),L=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__image"),k=document.querySelector(".popup_type_edit"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__image"),w=A.querySelector(".popup__caption"),T=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),j=document.querySelector(".profile__image"),D=document.querySelector('.popup_type_edit .popup__form[name="edit-profile"]'),M=document.querySelector('.popup_type_update-avatar .popup__form[name="new-avatar"]'),O=document.querySelector('.popup_type_new-card .popup__form[name="new-place"]'),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function B(e,t){r(A),x.src=e,x.alt=t,w.textContent=t}function I(e,t){e.target.querySelector(".popup__button").textContent=t}function N(e){T.textContent=e.name,U.textContent=e.about}function V(e){j.style.backgroundImage="url('".concat(e.avatar,"')")}k.addEventListener("submit",(function(n){var o,r;n.preventDefault(),I(n,"Сохранение..."),(o="".concat(g.value),r="".concat(q.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){N(e),c(k),y.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Сохранить")}))})),L.addEventListener("click",(function(e){r(k),g.value=T.textContent,q.value=U.textContent,l(D,P)})),_.addEventListener("submit",(function(n){var r,a;n.preventDefault(),I(n,"Сохранение..."),(r=v.value,a=h.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(r),link:"".concat(a)})}).then(e)).then((function(e){console.log(d),d.prepend(o(e,p,B)),c(_),O.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Сохранить")}))})),E.addEventListener("click",(function(e){r(_),y.reset(),l(O,P)})),C.addEventListener("click",(function(e){r(m),M.reset(),l(M,P)})),m.addEventListener("submit",(function(n){var o;n.preventDefault(),I(n,"Сохранение..."),(o=S.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){V(e),c(m),M.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){I(n,"Сохранить")}))})),f.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){c(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));i(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.classList.remove(n.errorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,n)}(e,r,t),i(n,o,t)}))}))}(t,e)}))}(P),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(o=c.call(n)).done)&&(u.push(o.value),u.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],a=r[1];console.log({cardsData:c,userData:a}),p=a._id,N(a),V(a),c.forEach((function(e){d.append(o(e,p,B))}))})).catch((function(e){console.log(e)}))})();
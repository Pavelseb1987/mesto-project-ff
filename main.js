(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)},o=document.querySelector("#card-template").content;function r(n,r,c,a){var i=o.querySelector(".places__item").cloneNode(!0),u=i.querySelector(".card__delete-button"),l=i.querySelector(".card__image"),s=i.querySelector(".card__like-button"),d=i.querySelector(".place__like-card");function p(e,t){t.textContent=e.likes.length}return l.src=n.link,l.alt=n.name,i.querySelector(".card__title").textContent=n.name,d.textContent=n.likes.length,l.addEventListener("click",(function(){c(n.link,n.name)})),s.addEventListener("click",(function(o){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(o,n._id,d)})),r._id===n.owner._id?u.addEventListener("click",(function(o){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(o,n._id)})):u.remove(),n.likes.forEach((function(e){e._id===r._id&&s.classList.add("card__like-button_is-active")})),i}function c(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",i),e.addEventListener("click",u)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),e.removeEventListener("click",u)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.currentTarget===e.target&&a(document.querySelector(".popup_is-opened"))}var l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},s=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),o.classList.remove("".concat(n.errorClass)),o.textContent=""}(e,t,l):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,l)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f=document.querySelector(".places__list"),_=document.querySelectorAll(".popup"),m=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_update-avatar"),h=m.querySelector(".popup__form"),v=m.querySelector(".popup__input_type_card-name"),S=m.querySelector(".popup__input_type_url"),b=document.querySelector(".popup__input_type_avatar-url"),g=document.querySelector(".popup_type_edit"),q=g.querySelector(".popup__input_type_name"),E=g.querySelector(".popup__input_type_description"),L=(document.querySelector('[name="edit-profile"]'),document.querySelector('[name="new-avatar"]'),document.querySelector('[name="new-place"]'),document.querySelector(".profile__add-button")),k=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__image"),A=document.querySelector(".popup_type_edit"),x=document.querySelector(".popup_type_image"),w=x.querySelector(".popup__image"),T=x.querySelector(".popup__caption"),U=document.querySelector(".profile__title"),D=document.querySelector(".profile__description"),j=document.querySelector(".profile__image");function M(e,t){c(x),w.src=e,w.alt=t,T.textContent=t}function O(e,t){e.target.querySelector(".popup__button").textContent=t}function P(e){U.textContent=e.name,D.textContent=e.about}function B(e){j.style.backgroundImage="url('".concat(e.avatar,"')")}A.addEventListener("submit",(function(n){var o,r;n.preventDefault(),O(n,"Сохранение..."),(o="".concat(q.value),r="".concat(E.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){P(e),a(A),h.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){O(n,"Создать")}))})),k.addEventListener("click",(function(){c(A),q.value=U.textContent,E.value=D.textContent})),m.addEventListener("submit",(function(n){var o,c;n.preventDefault(),O(n,"Сохранение..."),(o=v.value,c=S.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(o),link:"".concat(c)})}).then(e)).then((function(e){console.log(f),f.prepend(r(e,userData,M)),m.reset()})).then((function(){a(m)})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){O(n,"Создать")}))})),L.addEventListener("click",(function(){c(m)})),C.addEventListener("click",(function(e){c(y)})),y.addEventListener("submit",(function(n){var o;n.preventDefault(),O(n,"Сохранение..."),(o=b.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){B(e),a(y),y.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){O(n,"Создать")}))})),_.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){a(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));d(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){s(e,r),d(n,o,t)}))}))}(t,e)}))}(l),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),n()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=o[0],a=o[1];console.log({cardsData:c,userData:a}),P(a),B(a),c.forEach((function(e){f.append(r(e,a,M))}))})).catch((function(e){console.log(e)}))})();
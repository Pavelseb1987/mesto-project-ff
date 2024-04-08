(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)},o=document.querySelector("#card-template").content;function r(n,r,i,u){var l=o.querySelector(".places__item").cloneNode(!0),s=l.querySelector(".card__delete-button"),d=l.querySelector(".card__image"),p=l.querySelector(".card__like-button"),f=l.querySelector(".place__like-card");return d.src=n.link,d.alt=n.name,l.querySelector(".card__title").textContent=n.name,f.textContent=n.likes.length,d.addEventListener("click",(function(){i(n.link,n.name)})),p.addEventListener("click",(function(o){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){a(e,r),n.target.classList.remove(".card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){a(e,r),n.target.classList.add(".card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(o,n._id,f)})),p.addEventListener("click",c),r._id===n.owner._id?s.addEventListener("click",(function(o){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(o,n._id)})):s.remove(),n.likes.forEach((function(e){e._id===r._id&&p.classList.add("card__like-button_is-active")})),l}function c(e){console.log(e),e.target.classList.toggle("card__like-button_is-active")}function a(e,t){t.textContent=e.likes.length}function i(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",l),e.addEventListener("click",s)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),e.removeEventListener("click",s)}function l(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function s(e){e.currentTarget===e.target&&u(document.querySelector(".popup_is-opened"))}var d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},p=function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("".concat(n.inputErrorClass)),o.classList.remove("".concat(n.errorClass)),o.textContent=""},f=function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,d):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add("".concat(o.inputErrorClass)),r.classList.add("".concat(o.errorClass)),r.textContent=n}(e,t,t.validationMessage,d)},_=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("".concat(n.inactiveButtonClass))):(t.disabled=!0,t.classList.add("".concat(n.inactiveButtonClass)))},m=function(e,t){var n=e.querySelectorAll("".concat(t.inputSelector)),o=e.querySelector("".concat(t.submitButtonSelector));n.forEach((function(t){p({formElement:e,inputElement:t,inputErrorClass,errorClass})})),_({inputList:n,submitButtonElement:o,inactiveButtonClass})};function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var h=document.querySelector(".places__list"),S=document.querySelectorAll(".popup"),b=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup_type_update-avatar"),E=b.querySelector(".popup__form"),q=b.querySelector(".popup__input_type_card-name"),C=b.querySelector(".popup__input_type_url"),L=document.querySelector(".popup__input_type_avatar-url"),k=document.querySelector(".popup_type_edit"),A=k.querySelector(".popup__input_type_name"),x=k.querySelector(".popup__input_type_description"),T=document.querySelector(".profile__add-button"),U=document.querySelector(".profile__edit-button"),w=document.querySelector(".profile__image"),B=document.querySelector(".popup_type_edit"),D=document.querySelector(".popup_type_image"),j=D.querySelector(".popup__image"),M=D.querySelector(".popup__caption"),O=document.querySelector(".profile__title"),P=document.querySelector(".profile__description"),I=document.querySelector(".profile__image");function N(e,t){i(D),j.src=e,j.alt=t,M.textContent=t}function V(e,t){e.target.querySelector(".popup__button").textContent=t}function J(e){O.textContent=e.name,P.textContent=e.about}function G(e){I.style.backgroundImage="url('".concat(e.avatar,"')")}B.addEventListener("submit",(function(n){var o,r;n.preventDefault(),V(n,"Сохранение..."),(o="".concat(A.value),r="".concat(x.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){J(e),u(B),E.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){V(n,"Создать")}))})),U.addEventListener("click",(function(e){i(B),A.value=O.textContent,x.value=P.textContent})),b.addEventListener("submit",(function(n){var o,c;n.preventDefault(),V(n,"Сохранение..."),Promise([(o=q.value,c=C.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(o),link:"".concat(c)})}).then(e))]).then((function(e){var t=y(e,1)[0];console.log(h),h.prepend(r(t,userData,N)),u(b),b.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){V(n,"Создать")}))})),T.addEventListener("click",(function(e){i(b),m(b,d)})),w.addEventListener("click",(function(e){i(g),m(g,d)})),g.addEventListener("submit",(function(n){var o;n.preventDefault(),V(n,"Сохранение..."),(o=L.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){G(e),u(g),g.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){V(n,"Создать")}))})),S.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){u(e)}))})),function(e){Array.from(document.querySelectorAll("".concat(e.formSelector))).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));_(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){f(e,r),_(n,o,t),m(profilePopup,t)}))}))}(t,e)}))}(d),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),n()]).then((function(e){var t=y(e,2),n=t[0],o=t[1];console.log({cardsData:n,userData:o}),J(o),G(o),n.forEach((function(e){h.append(r(e,o,N))}))})).catch((function(e){console.log(e)}))})();
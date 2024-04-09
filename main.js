(()=>{"use strict";var e=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},t={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"70b83c6e-04ed-4989-8496-f4e12687c473","Content-Type":"application/json"}},n=function(){return fetch("".concat(t.baseUrl,"/users/me"),{method:"GET",headers:t.headers}).then(e)},o=document.querySelector("#card-template").content;function r(n,r,c,a){var i=o.querySelector(".places__item").cloneNode(!0),u=i.querySelector(".card__delete-button"),l=i.querySelector(".card__image"),s=i.querySelector(".card__like-button"),d=i.querySelector(".place__like-card");function p(e,t){t.textContent=e.likes.length}return l.src=n.link,l.alt=n.name,i.querySelector(".card__title").textContent=n.name,d.textContent=n.likes.length,l.addEventListener("click",(function(){c(n.link,n.name)})),s.addEventListener("click",(function(o){return function(n,o,r){n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)})):function(n){return fetch("".concat(t.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:t.headers}).then(e)}(o).then((function(e){p(e,r),n.target.classList.toggle("card__like-button_is-active")})).catch((function(e){return console.log(e)}))}(o,n._id,d)})),r._id===n.owner._id?u.addEventListener("click",(function(o){return function(n,o){(function(n){return fetch("".concat(t.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:t.headers}).then(e)})(o).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))}(o,n._id)})):u.remove(),n.likes.forEach((function(e){e._id===r._id&&s.classList.add("card__like-button_is-active")})),i}function c(e){e.classList.add("popup_is-animated","popup_is-opened"),document.addEventListener("keydown",i),e.addEventListener("click",u)}function a(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),e.removeEventListener("click",u)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.currentTarget===e.target&&a(document.querySelector(".popup_is-opened"))}var l=function(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove("popup__button_disabled")):(t.disabled=!0,t.classList.add("popup__button_disabled"))};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);u=!0);}catch(e){l=!0,r=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var p=document.querySelector(".places__list"),f=document.querySelectorAll(".popup"),_=document.querySelector(".popup_type_new-card"),y=document.querySelector(".popup_type_update-avatar"),m=_.querySelector(".popup__form"),h=_.querySelector(".popup__input_type_card-name"),v=_.querySelector(".popup__input_type_url"),b=document.querySelector(".popup__input_type_avatar-url"),S=document.querySelector(".popup_type_edit"),g=S.querySelector(".popup__input_type_name"),q=S.querySelector(".popup__input_type_description"),E=document.querySelector(".profile__add-button"),L=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__image"),C=document.querySelector(".popup_type_edit"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__image"),T=A.querySelector(".popup__caption"),U=document.querySelector(".profile__title"),w=document.querySelector(".profile__description"),D=document.querySelector(".profile__image");function j(e,t){c(A),x.src=e,x.alt=t,T.textContent=t}function M(e,t){e.target.querySelector(".popup__button").textContent=t}function O(e){U.textContent=e.name,w.textContent=e.about}function P(e){D.style.backgroundImage="url('".concat(e.avatar,"')")}C.addEventListener("submit",(function(n){var o,r;n.preventDefault(),M(n,"Сохранение..."),(o="".concat(g.value),r="".concat(q.value),fetch("".concat(t.baseUrl,"/users/me"),{method:"PATCH",headers:t.headers,body:JSON.stringify({name:"".concat(o),about:"".concat(r)})}).then(e)).then((function(e){O(e),a(C),m.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){M(n,"Создать")}))})),L.addEventListener("click",(function(e){c(C),g.value=U.textContent,q.value=w.textContent})),_.addEventListener("submit",(function(n){var o,c;n.preventDefault(),M(n,"Сохранение..."),Promise([(o=h.value,c=v.value,fetch("".concat(t.baseUrl,"/cards"),{method:"POST",headers:t.headers,body:JSON.stringify({name:"".concat(o),link:"".concat(c)})}).then(e))]).then((function(e){var t=s(e,1)[0];console.log(p),p.prepend(r(t,userData,j)),a(_),_.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){M(n,"Создать")}))})),E.addEventListener("click",(function(e){c(_)})),k.addEventListener("click",(function(e){c(y)})),y.addEventListener("submit",(function(n){var o;n.preventDefault(),M(n,"Сохранение..."),(o=b.value,fetch("".concat(t.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:t.headers,body:JSON.stringify({avatar:"".concat(o)})}).then(e)).then((function(e){P(e),a(y),y.reset()})).catch((function(e){console.log("Ошибка: ".concat(e.status))})).finally((function(){M(n,"Создать")}))})),f.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(t){a(e)}))})),Array.from(document.querySelectorAll("".concat(".popup__form"))).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll("".concat(t.inputSelector))),o=e.querySelector("".concat(t.submitButtonSelector));l(n,o),n.forEach((function(t){t.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.validity.valueMissing?t.setCustomValidity(t.dataset.emptyMessage):t.validity.typeMismatch?t.setCustomValidity(t.dataset.typeMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("popup__input_type_error"),n.classList.remove("popup__error_visible"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("popup__input_type_error"),o.classList.add("popup__error_visible"),o.textContent=n}(e,t,t.validationMessage)}(e,t),l(n,o)}))}))}(e)})),n().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),Promise.all([fetch("".concat(t.baseUrl,"/cards"),{method:"GET",headers:t.headers}).then(e),n()]).then((function(e){var t=s(e,2),n=t[0],o=t[1];console.log({cardsData:n,userData:o}),O(o),P(o),n.forEach((function(e){p.append(r(e,o,j))}))})).catch((function(e){console.log(e)}))})();
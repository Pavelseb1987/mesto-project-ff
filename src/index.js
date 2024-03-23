
import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {addPlace} from './components/cards.js';
import {removeCard} from './components/cards.js';
import {likeCardToggler} from './components/cards.js';
import {openModal} from './components/modal.js';
import {closeModal} from './components/modal.js';
import {handleFormSubmit} from './components/modal.js';

import { placesList, cardTemplate } from './components/cards.js';
import { formElement, nameInput, jobInput, profileForm, popupProfileForm } from './components/modal.js';

const profileAddButton = document.querySelector('.profile__add-button');         // кнопка открытия попапа карточек
const profileFormButton = document.querySelector('.profile__edit-button');       // кнопка открытия попапа профиля

const placeForm = document.querySelector('.popup_type_new-card');                // форма попапа карточек

const imageForm = document.querySelector('.popup_type_image'); 

const popupCardForm = placeForm.querySelector('.popup__form');                    // форма попапа карточки (очистка)

const popupCloseCardBtn = placeForm.querySelector('.popup__close');              // кнопка крестик карточек
const popupCloseFormBtn = profileForm.querySelector('.popup__close');           // кнопка крестик профиля
const popupCloseImage = imageForm.querySelector('.popup__close');                // кнопка крестик профиля


initialCards.forEach(function (item) {                                          // функция добавления ряда карточкек при загрузке
    placesList.append(addPlace(item.link, item.name, removeCard, openPopupImage, likeCardToggler));
})

function openPopupImage(evt) {                                                  // функция открытия попапа картинки
    if (evt.target.classList.contains('card__image')) {
        const popupImage = imageForm.querySelector('.popup__image');
        const popupCaption = imageForm.querySelector('.popup__caption');
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupCaption.textContent = evt.target.alt;
       
        openModal(imageForm);

  }
    
}


profileFormButton.addEventListener('click', function(event) {                    // слушатель открытия попапа профиля  
    openModal(profileForm);
  });

profileAddButton.addEventListener('click', function(event) {                     // слушатель открытия попапа карточек 
    openModal(placeForm);
  });


popupCloseFormBtn.addEventListener('click', function(event) {                    // слушатель закрытия попапа профиля
    closeModal(profileForm);
  });

popupCloseCardBtn.addEventListener('click', function(event) {                    // слушатель закрытия попапа карточек
    closeModal(placeForm);
  });

popupCloseImage.addEventListener('click', function(event) {                    // слушатель (крестик) закрытия попапа изображения
    closeModal(imageForm);
  });

placeForm.addEventListener("click", (evt) => {                                   // слушатель (оверлей) закрытия попапа карточек 
    if (evt.currentTarget === evt.target) {
        closeModal(placeForm)
    }
  })

imageForm.addEventListener("click", (evt) => {                                   // слушатель (оверлей) закрытия попапа изображения 
    if (evt.currentTarget === evt.target) {
        closeModal(imageForm)
    }
  })

document.addEventListener("keydown", (evt) => {                                   // слушатель (esc) закрытия попапа карточек 
    if (evt.key === 'Escape') {
        closeModal(placeForm);
    }
  })

document.addEventListener("keydown", (evt) => {                                 // слушатель (esc) закрытия попапа профиля 
    if (evt.key === 'Escape') {
        closeModal(profileForm);
    }
  })

document.addEventListener("keydown", (evt) => {                                   // слушатель (esc) закрытия попапа изображения 
    if (evt.key === 'Escape') {
        closeModal(imageForm);
    }
  })

profileForm.addEventListener("click", (evt) => {                                 // слушатель (оверлей) закрытия попапа профиля 
    if (evt.currentTarget === evt.target) {
        closeModal(profileForm)
    }
  })


function createCardForm(evt) {                                                   // функция добавления новой карточки из формы
    evt.preventDefault(); 
    const cardNameInput = placeForm.querySelector('.popup__input_type_card-name');   // инпут имени карточки
    const cardUrlInput = placeForm.querySelector('.popup__input_type_url');          // инпут ссылки карточки
    const urlCard = cardUrlInput.value;
    const nameCard = cardNameInput.value;
    placesList.prepend(addPlace(urlCard, nameCard, removeCard));
    popupCardForm.reset();
    closeModal(placeForm);
}

placeForm.addEventListener('submit', createCardForm); 


formElement.addEventListener('submit', handleFormSubmit); 


 



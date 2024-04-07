import './pages/index.css';
import {createCard} from './components/card.js';
import {openModal} from './components/modal.js';
import {closeModal} from './components/modal.js';
import {enableValidation} from './components/validation.js';
import {getInitialCards, getProfileInfo, addOneCard, editMyProfile, changeAvatar} from './components/api.js'


// ПЕРЕМЕННЫЕ
const placesList = document.querySelector('.places__list');                          // список карточек
const popupList = document.querySelectorAll('.popup');                               // коллекция попапов
const placePopup = document.querySelector('.popup_type_new-card');                   // попап карточек
const avatarPopup = document.querySelector('.popup_type_update-avatar');                   // попап аватара
const popupCardForm = placePopup.querySelector('.popup__form');                      // попапа карточки (форма)
const cardNameInput = placePopup.querySelector('.popup__input_type_card-name');      // инпут имени карточки
const cardUrlInput = placePopup.querySelector('.popup__input_type_url');             // инпут ссылки карточки

const avatarUrlInput = document.querySelector('.popup__input_type_avatar-url');      // инпут для ссылки аватара

const popupProfile = document.querySelector('.popup_type_edit');                     //  попап с формой профиля
const nameInput = popupProfile.querySelector('.popup__input_type_name');             //  инпут профиля имя
const jobInput = popupProfile.querySelector('.popup__input_type_description');       //  инпут профиля работа

const cardAddButton = document.querySelector('.profile__add-button');                // кнопка открытия попапа карточек
const profileEditButton = document.querySelector('.profile__edit-button');           // кнопка открытия попапа профиля
const avatarEditButton = document.querySelector('.profile__image');                  // кнопка открытия попапа avatar

const profilePopup = document.querySelector('.popup_type_edit');                     // попап профиля
const imagePopup = document.querySelector('.popup_type_image');                      // попап изображения
const imageBig = imagePopup.querySelector('.popup__image');                          // изображение в полном размере
const popupCaption = imagePopup.querySelector('.popup__caption');                    // подпись под изображением

const profileName = document.querySelector('.profile__title');                       // профиль - имя
const profileJob = document.querySelector('.profile__description');                  // профиль - работа

const profileImage = document.querySelector('.profile__image');



function openPopupImage(cardSrc, cardName) {                                         // функция открытия попапа картинки                                             
    openModal(imagePopup);
    imageBig.src = cardSrc; 
    imageBig.alt = cardName; 
    popupCaption.textContent = cardName; 
} 


profilePopup.addEventListener('submit', editProfile);                                 // слушатель сабмита редактирования профиля

profileEditButton.addEventListener('click', function(event) {                         // слушатель открытия попапа профиля 
    openModal(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent; 
  });

placePopup.addEventListener('submit', createNewCard);                                 // слушатель сабмита новой карточки

cardAddButton.addEventListener('click', function(event) {                             // слушатель открытия попапа добавления карточек 
    openModal(placePopup);
  });

avatarEditButton.addEventListener('click', function(event) {                          // слушатель открытия попапа аватара
    openModal(avatarPopup);
  });

avatarPopup.addEventListener('submit', editAvatarProfile);                            // слушатель сабмита аватара


popupList.forEach(function (popupItem) {                                              // работа кнопок закрытия попапов
    const popupCloseButton = popupItem.querySelector('.popup__close');                // крестики модальных окон
    popupCloseButton.addEventListener('click', function(event) {                      // слушатель закрытия попапов по крестику
        closeModal(popupItem);
    });;
})
  
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });  

  
// clearValidation(profileForm, validationConfig);                                           

function loadingSubmit(evt, text) {                                                       // функция отображения загрузки
    const btn = evt.target.querySelector('.popup__button')
    btn.textContent = text
  }

function showUserInfo(userData) {                                                         // функция показа информации о пользователе
    profileName.textContent = userData.name;
    profileJob.textContent = userData.about;
    profileImage.style.backgroundImage = `url('${userData.avatar}')`;
}

getProfileInfo()                                                                          // получение информации о профиле
    .then ((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }); 


function editProfile(evt) {                                                               // функция редактирования данных профиля
        evt.preventDefault();
        loadingSubmit(evt, 'Сохранение...')
        editMyProfile(`${nameInput.value}`, `${jobInput.value}`, evt)
          .then((res) => {
            showUserInfo(res, evt);
          })
          .then(() => {
            closeModal(profilePopup);
            popupCardForm.reset();
          })
          .catch((res) => {
            console.log(`Ошибка: ${res.status}`)
          })
      }

      
function createNewCard(evt) {                                                             // функция добавления новой карточки
        evt.preventDefault();
        loadingSubmit(evt, 'Сохранение...');
        Promise.all([addOneCard(cardNameInput.value, cardUrlInput.value), getProfileInfo()])
        .then(([card, userData]) => {
            console.log(placesList);
            placesList.prepend(createCard(card, userData, openPopupImage));
            placePopup.reset;
          })
          .catch((res) => {
            console.log(`Ошибка: ${res.status}`)
          })
        closeModal(placePopup);
      }

function editAvatarProfile(evt) {                                                          // функция редактирования аватара профиля
        evt.preventDefault();
        loadingSubmit(evt, 'Сохранение...')
        changeAvatar(avatarUrlInput.value)
          .then((res) => {
            showUserInfo(res);
            avatarPopup.reset;
          })
          
        .catch((res) => {
            console.log(`Ошибка: ${res.status}`)
          })

          closeModal(avatarPopup);
      }

Promise.all([getInitialCards(), getProfileInfo()])
    .then(([cardsData, userData]) => {
        console.log({cardsData, userData})
        showUserInfo(userData)
        cardsData.forEach(function (card) {                                                 // отрисовка всех карточек
            placesList.append(createCard(card, userData, openPopupImage));
        })
    })
    .catch((err) => {
        console.log(err);
      });
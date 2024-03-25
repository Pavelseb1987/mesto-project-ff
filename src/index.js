import './pages/index.css';
import {initialCards} from './scripts/cards.js';
import {createCard} from './components/card.js';
import {openModal} from './components/modal.js';
import {closeModal} from './components/modal.js';
import {removeCard} from './components/card.js';
import {likeCardToggler} from './components/card.js';

// ПЕРЕМЕННЫЕ
const placesList = document.querySelector('.places__list');                          // список карточек
const popupList = document.querySelectorAll('.popup');                               // коллекция попапов
const placePopup = document.querySelector('.popup_type_new-card');                   // попап карточек
const popupCardForm = placePopup.querySelector('.popup__form');                      // попапа карточки (форма)
const cardNameInput = placePopup.querySelector('.popup__input_type_card-name');      // инпут имени карточки
const cardUrlInput = placePopup.querySelector('.popup__input_type_url');             // инпут ссылки карточки

const popupProfile = document.querySelector('.popup_type_edit');                     //  попап с формой профиля
const popupProfileForm = popupProfile.querySelector('.popup__form');                 //  попап профиля (форма)
const nameInput = popupProfile.querySelector('.popup__input_type_name');             //  инпут профиля имя
const jobInput = popupProfile.querySelector('.popup__input_type_description');       //  инпут профиля работа

const cardAddButton = document.querySelector('.profile__add-button');                // кнопка открытия попапа карточек
const profileEditButton = document.querySelector('.profile__edit-button');           // кнопка открытия попапа профиля

const profilePopup = document.querySelector('.popup_type_edit');                     // попап профиля
const imagePopup = document.querySelector('.popup_type_image');                      // попап изображения
const imageBig = imagePopup.querySelector('.popup__image');                          // изображение в полном размере
const popupCaption = imagePopup.querySelector('.popup__caption');                    // подпись под изображением

const profileName = document.querySelector('.profile__title');                       // профиль - имя
const profileJob = document.querySelector('.profile__description');                  // профиль - работа


// ОТРИСОВКА ДЕФОЛТНЫХ КАРТОЧЕК ПРИ ОБНОВЛЕНИИ
initialCards.forEach(function (item) {                                               // добавления дефолтных карточкек при загрузке
    placesList.append(createCard(item.link, item.name, removeCard, likeCardToggler, openPopupImage));
})


// КАРТОЧКИ - ДОБАВЛЕНИЕ НОВОЙ
function createNewCard(evt) {                                                        // функция добавления новой карточки из формы
    evt.preventDefault(); 
    const urlCard = cardUrlInput.value;
    const nameCard = cardNameInput.value;
    placesList.prepend(createCard(urlCard, nameCard, removeCard, likeCardToggler, openPopupImage));
    popupCardForm.reset();
    closeModal(placePopup);
}


// ПОПАП ИЗОБРАЖЕНИЯ
function openPopupImage(evt) {                                                       // функция открытия попапа картинки 
    imageBig.src = evt.target.src; 
    imageBig.alt = evt.target.alt; 
    popupCaption.textContent = evt.target.alt; 
    openModal(imagePopup); 
} 



// ПРОФИЛЬ - РЕДАКТИРОВАНИЕ ИМЕНИ И РАБОТЫ
function editProfile(evt) {                                                           // функция изменения профиля из формы
    evt.preventDefault(); 

    const nameProfile = nameInput.value;
    const jobProfile = jobInput.value;

    profileName.textContent = nameProfile;
    profileJob.textContent = jobProfile;

    popupProfileForm.reset();

    closeModal(popupProfile);
}


// СЛУШАТЕЛИ
placePopup.addEventListener('submit', createNewCard);                                 // слушатель сабмита добавления новой карточки

popupProfile.addEventListener('submit', editProfile);                                 // слушатель сабмита редактирования профиля

cardAddButton.addEventListener('click', function(event) {                             // слушатель открытия попапа карточек 
    openModal(placePopup);
  });

profileEditButton.addEventListener('click', function(event) {                         // слушатель открытия попапа профиля 
    openModal(profilePopup);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent; 
  });

popupList.forEach(function (popupItem) {  
    const popupCloseButton = popupItem.querySelector('.popup__close');                // крестики модальных окон
    popupCloseButton.addEventListener('click', function(event) {                      // слушатель закрытия попапов по крестику
        closeModal(popupItem);
    });;
})



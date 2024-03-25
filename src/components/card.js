
const cardTemplate = document.querySelector('#card-template').content;
const placesItemTemplate = cardTemplate.querySelector('.places__item');

// ФУНКЦИЯ СОЗДАНИЯ КАРТОЧКИ
export function createCard(cardImageLink, cardTitleText, removeCard, likeCardToggler, openPopupImage) { 
    const placesItem = placesItemTemplate.cloneNode(true);
    const cardDeleteButton = placesItem.querySelector('.card__delete-button');
    const placesItemImg = placesItem.querySelector('.card__image');
    const likeButton = placesItem.querySelector('.card__like-button');
    placesItemImg.src = cardImageLink;
    placesItemImg.alt = cardTitleText;
    placesItem.querySelector('.card__title').textContent = cardTitleText;
    
    likeButton.addEventListener('click', likeCardToggler);  

    placesItemImg.addEventListener('click', openPopupImage);

    cardDeleteButton.addEventListener('click', removeCard);
    
    return placesItem;
    
  }

  // КАРТОЧКИ - ОБРАБОТЧИКИ УДАЛЕНИЯ И ЛАЙКА
export function removeCard(evt) {                                                           // функция удаления карточки
    const DelPlace = evt.target.closest('.places__item');
    DelPlace.remove();
};

export function likeCardToggler (evt) {                                                     // функция лайка карточек 
    console.log(evt);    
    evt.target.classList.toggle('card__like-button_is-active'); 
};


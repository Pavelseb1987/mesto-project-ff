export const placesList = document.querySelector('.places__list');
export const cardTemplate = document.querySelector('#card-template').content;

export function addPlace(cardImageLink, cardTitleText, removeCard, openPopupImage, likeCardToggler) {                   // функция добавления карточки
    const placesItemTeplate = cardTemplate.querySelector('.places__item');
    const placesItem = placesItemTeplate.cloneNode(true);
    const placesItemImg = placesItem.querySelector('.card__image');
    const cardDeleteButton = placesItem.querySelector('.card__delete-button');



    placesItemImg.src = cardImageLink;
    placesItemImg.alt = cardTitleText;
    placesItem.querySelector('.card__title').textContent = cardTitleText;
    
    placesList.addEventListener('click', likeCardToggler);

    placesList.addEventListener('click', openPopupImage); 

    cardDeleteButton.addEventListener('click', removeCard);
    
    return placesItem;
    
};

export function removeCard(evt) {                                                       // функция удаления карточки
    const DelPlace = evt.target.closest('.places__item');
    DelPlace.remove();
};

export function likeCardToggler (evt) {                               // слушатель лайка карточек
    console.log(evt);
    if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
    
};

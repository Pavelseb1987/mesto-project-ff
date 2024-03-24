
const cardTemplate = document.querySelector('#card-template').content;
const placesItemTemplate = cardTemplate.querySelector('.places__item');


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



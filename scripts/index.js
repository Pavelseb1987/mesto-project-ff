
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const placesItemTeplate = cardTemplate.querySelector('.places__item');

function addPlace(cardImageLink, cardTitleText, removeCard) {
    const placesItem = placesItemTeplate.cloneNode(true);
    const cardDeleteButton = placesItem.querySelector('.card__delete-button');
    
    placesItem.querySelector('.card__image').src = cardImageLink;
    placesItem.querySelector('.card__title').textContent = cardTitleText;
    placesItem.querySelector('.card__image').alt = cardTitleText;
    
    cardDeleteButton.addEventListener('click', removeCard);
    
    return placesList.append(placesItem);
  }

function removeCard(evt) {
    const DelPlace = evt.target.closest('.places__item');
    DelPlace.remove();
};

initialCards.forEach(function (item) {
    addPlace(item.link, item.name, removeCard);
})

const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const placesItemTeplate = cardTemplate.querySelector('.places__item');


function addPlace(cardImageLink, cardTitleText, removeCard) {
    const placesItem = placesItemTeplate.cloneNode(true);
    const cardDeleteButton = placesItem.querySelector('.card__delete-button');
    const placesItemImg = placesItem.querySelector('.card__image')
    placesItemImg.src = cardImageLink;
    placesItemImg.alt = cardTitleText;
    placesItem.querySelector('.card__title').textContent = cardTitleText;
    
    cardDeleteButton.addEventListener('click', removeCard);
    
    return placesItem;
  }

function removeCard(evt) {
    const DelPlace = evt.target.closest('.places__item');
    DelPlace.remove();
};

initialCards.forEach(function (item) {
    placesList.append(addPlace(item.link, item.name, removeCard));
})
import {deleteOneCard, unlikeCard, likeCard} from './api.js';
const cardTemplate = document.querySelector('#card-template').content;

export function createCard(cardsData, userId, openPopupImage, clickDeleteCard) {                            // функция создания карточки
    const placesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardDeleteButton = placesItem.querySelector('.card__delete-button');
    const placesItemImg = placesItem.querySelector('.card__image');
    const likeButton = placesItem.querySelector('.card__like-button');
    const cardLikes = placesItem.querySelector('.place__like-card')
    placesItemImg.src = cardsData.link;
    placesItemImg.alt = cardsData.name;
    placesItem.querySelector('.card__title').textContent = cardsData.name;
    
    cardLikes.textContent = cardsData.likes.length;                                                          // отображение количества лайков
    
    placesItemImg.addEventListener('click', function () { openPopupImage(cardsData.link, cardsData.name) })  // слушатель попапа изображения
    
    likeButton.addEventListener('click', (event) => clickLikeCard(event, cardsData._id, cardLikes))          // Слушатель на кнопки лайка
    
    
    if (userId === cardsData.owner._id) {
        cardDeleteButton.addEventListener('click', (event) => clickDeleteCard(event, cardsData._id, cardLikes))   // слушатель кнопки удаления карточки
      } else {
        cardDeleteButton.remove()
      }

    function clickDeleteCard(event, cardId) {                                                               // функция удаления карточки
        deleteOneCard(cardId)
          .then(() => { event.target.closest('.places__item').remove() })
          .catch((res) => console.log(res))
      }

    cardsData.likes.forEach(element => {                                                                    // показать если уже есть лайк
        if (element._id === userId) {
            likeButton.classList.add('card__like-button_is-active')
        }
    })

    function updateLikeCounter(res, cardLikes) {                                                            // ФУНКЦИЯ ПОДСЧЕТА ЛАЙКОВ
      cardLikes.textContent = res.likes.length
    }

    function clickLikeCard(event, cardId, cardLikes) {                                                      // функция лайка карточек
      if (event.target.classList.contains('card__like-button_is-active')) {
        unlikeCard(cardId)                                                                                  // если лайк стоит, удаляем
          .then((res) => {
            updateLikeCounter(res, cardLikes)
            event.target.classList.toggle('card__like-button_is-active')
          })
          .catch((res) => console.log(res))
      } else {
        likeCard(cardId)                                                                                    // если лайка нет, ставим
          .then((res) => {
            updateLikeCounter(res, cardLikes)
            event.target.classList.toggle('card__like-button_is-active')
          })
          .catch((res) => console.log(res))
      }
    }

    return placesItem;
    
  }




  

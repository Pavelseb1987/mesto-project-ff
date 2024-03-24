export function openModal(popup) {                                                      // функция открытия попапа
    popup.classList.add('popup_is-animated', 'popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
    popup.addEventListener('click', closeByOverlay);
  }

export function closeModal(popup) {                                                     // функция закрытия попапа
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
    popup.removeEventListener('click', closeByOverlay);
  }

function closeByEscape(event) {                                                         // функция закрытия попапа по esc
    if(event.key === 'Escape') {
       closeModal(document.querySelector('.popup_is-opened'));
    }
}

function closeByOverlay(evt) {                                                          // функция закрытия попапа по оверлею
    if (evt.currentTarget === evt.target) {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}

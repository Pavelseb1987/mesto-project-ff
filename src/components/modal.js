export function openModal(popup) {                                                      // функция открытия попапа
    popup.classList.add('popup_is-opened', 'popup_is-animated');
  }

export function closeModal(popup) {                                                     // функция закрытия попапа
    popup.classList.remove('popup_is-opened');
  }

const formElement = document.querySelector('.popup_type_edit');                   //  попап с формой профиля
const nameInput = formElement.querySelector('.popup__input_type_name');           //  инпут профиля имя
const jobInput = formElement.querySelector('.popup__input_type_description');     //  инпут профиля работа

const profileForm = document.querySelector('.popup_type_edit');                  // форма попапа профиля
const popupProfileForm = profileForm.querySelector('.popup__form'); 

export function handleFormSubmit(evt) {                                                   // функция изменения профиля из формы
    evt.preventDefault(); 
    
    const nameProfile = nameInput.value;
    const jobProfile = jobInput.value;

    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    profileTitle.textContent = nameProfile;
    profileDescription.textContent = jobProfile;

    popupProfileForm.reset();
    closeModal(profileForm);
}

export { formElement, nameInput, jobInput, profileForm, popupProfileForm };


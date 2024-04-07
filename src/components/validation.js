const showInputError = (formElement, inputElement, errorMessage) => {                   // показать ошибку ввода
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.classList.add('popup__error_visible');
    errorElement.textContent = errorMessage;
  };
  
  const hideInputError = (formElement, inputElement) => {                               // скрыть ошибку ввода
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__error_visible');
    errorElement.textContent = '';
  };
  
  const hasInvalidInput = (inputList) => {                                              // проверяем на невалидность полей
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
  }; 

  const checkInputValidity = (formElement, inputElement) => {                           // проверка валидности ввода
    if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);                  // замена кастомный сообщением об ошибке
} 
    else if (inputElement.validity.valueMissing) {
    inputElement.setCustomValidity(inputElement.dataset.emptyMessage);                  // замена кастомный сообщением об ошибке
} 
    else if (inputElement.validity.typeMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.typeMessage);                   // замена кастомный сообщением об ошибке
}   
    else {
    inputElement.setCustomValidity("");
}
   
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
}   else {
      hideInputError(formElement, inputElement);
}
  };
  
  const toggleButtonState = (inputList, buttonElement) => {                        // кнопка сабмита неактивна если есть невалидный инпут

    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add('popup__button_disabled');
    } else {                                                                       // иначе - кнопка сабмита активна
        buttonElement.disabled = false;
        buttonElement.classList.remove('popup__button_disabled');
    }
  }; 

  const setEventListeners = (formElement) => {                                      // слушатели инпутов
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);                                    // сброс кнопки сабмита
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);                                // сброс кнопки сабмита
      });
    });
  };

  export const enableValidation = () => {                                           // слушатели сабмита форм - включение валидации в формах
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
  
      setEventListeners(formElement);
  });
    };



  export const validSet = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };


const showInputError = (formElement, inputElement, errorMessage, validSet) => {                       // показать ошибку ввода
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(`${validSet.inputErrorClass}`);
  errorElement.classList.add(`${validSet.errorClass}`);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, validSet) => {                                       // скрыть ошибку ввода
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(`${validSet.inputErrorClass}`);
  errorElement.classList.remove(`${validSet.errorClass}`);
  errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  })
}; 

const checkInputValidity = (formElement, inputElement) => {                                             // проверка валидности ввода
  if (inputElement.validity.patternMismatch) {
  inputElement.setCustomValidity(inputElement.dataset.errorMessage);
} 
  else if (inputElement.validity.valueMissing) {
  inputElement.setCustomValidity(inputElement.dataset.emptyMessage);
} 
  else if (inputElement.validity.typeMismatch) {
  inputElement.setCustomValidity(inputElement.dataset.typeMessage);
}   
  else {
  inputElement.setCustomValidity("");
}
 
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validSet);
}   else {
    hideInputError(formElement, inputElement, validSet);
}
};

const toggleButtonState = (inputList, buttonElement, validSet) => {                                   // отключение сабмита при невалидном инпуте
  if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(`${validSet.inactiveButtonClass}`);
  } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(`${validSet.inactiveButtonClass}`);
  }
}; 

const setEventListeners = (formElement, validSet) => {                                                // слушатели инпутов
  const inputList = Array.from(formElement.querySelectorAll(`${validSet.inputSelector}`));
  const buttonElement = formElement.querySelector(`${validSet.submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement, validSet);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, validSet);
    });
  });
};

export const enableValidation = (validSet) => {                                                      // слушатели сабмита форм - включение валидации в формах
  const formList = Array.from(document.querySelectorAll(`${validSet.formSelector}`));
  formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });

    setEventListeners(formElement, validSet);
});
  };

  export function clearValidation(form, validSet) {                                                 // сброс ошибок валидации
    const inputs = form.querySelectorAll(validSet.inputSelector);
    const submitButton = form.querySelector(".popup__button");
    submitButton.classList.add(validSet.inactiveButtonClass);
    submitButton.disabled = true;
  
    inputs.forEach((inputElement) => {
      const errorElement = form.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(validSet.inputErrorClass);
      errorElement.classList.remove(validSet.errorClass);
      errorElement.textContent = "";
    });
  }

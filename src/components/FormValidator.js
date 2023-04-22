//ПР 6
export default class FormValidator{
  constructor(options, formElement){
    this._errorSelector=options.errorSelector;
    this._errorActiveSelector=options.errorActiveSelector;
    this._submitSelector=options.submitSelector;
    this._inputSelector=options.inputSelector;
    this._disableButtonClass=options.disableButtonClass;

    this._formElement=formElement;

    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(this._submitSelector);
  }
  _showError(inputElement){
    this.errorElement=inputElement.nextElementSibling;
    this.errorElement.classList.add(this._errorActiveSelector);
    this.errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._errorSelector);
  }

  _hideError(inputElement){
    this.errorElement=inputElement.nextElementSibling;
    this.errorElement.textContent = "";
    inputElement.classList.remove(this._errorSelector);
    this.errorElement.classList.remove(this._errorActiveSelector);
  }

  _enableButton(){
    this._buttonElement.classList.remove(this._disableButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  disableButton(){
    this._buttonElement.setAttribute('disabled','true');
    this._buttonElement.classList.add(this._disableButtonClass);
  }

  _toggleInputState(inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }
  
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this.disableButton();
    } else {
      this._enableButton();
    }
  }

  _setEventListeners(){
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._toggleInputState(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

}
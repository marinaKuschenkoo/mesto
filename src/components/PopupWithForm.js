import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
    constructor(popupSelector, {handleFormSubmit}){
        super(popupSelector);
        this._handleFormSubmit=handleFormSubmit;
        this._popupForm=this._popup.querySelector('.popup__form');
        this._inputList=this._popupForm.querySelectorAll('.popup__input');
        this._buttonSubmit=this._popup.querySelector('.popup__save-button')
    }
    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => {this._formValues[input.name] = input.value});
        return this._formValues;
    }
    setEventListeners() {
        super.setEventListeners();

        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.renderLoading(true);
            //this.close();
        });
    }
    close(){
        super.close();
        this._popupForm.reset();
    }

    renderLoading(isLoading, text) {
        if (isLoading) {
          this._buttonSubmit.textContent = 'Сохранение...';
        } else {
          this._buttonSubmit.textContent = text;
        }
      }
}
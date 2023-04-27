import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup{
      constructor(popupSelector, handleSubmitCallback) {
        super(popupSelector);
        this._handleSubmitCallback = handleSubmitCallback;
        this._form = this._popup.querySelector('.popup__form-container');
      }
      
      setSubmitAction(action) {
        this._handleSubmitCallback = action;
      }
      
      setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleSubmitCallback()
        });
        super.setEventListeners();
      }
}
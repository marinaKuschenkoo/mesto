export default class Popup{
    constructor(popupSelector){
        this._popupSelector=popupSelector;
        this.handleEscClose=this._handleEscClose.bind(this);
        this._closeBtn = this._popupSelector.querySelector('.popup__exit-button');
    }
    open(){
        this._popupSelector.classList.add('popup_active');
        document.addEventListener('keydown', this.handleEscClose);
    }
    close(){
        this._popupSelector.classList.remove('popup_active');
        document.removeEventListener('keydown', this.handleEscClose);
    }
    _handleEscClose = (evt)=>{
        if (evt.key === 'Escape') {
            this.close();
          }
    }
    _closePopupOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
          this.close();
        }
      }
    
      setEventListeners() {
        this._closeBtn.addEventListener('click', () => {this.close()})
        this._popupSelector.addEventListener('mousedown', this._closePopupOverlay)
      }

}
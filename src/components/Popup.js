export default class Popup{
    constructor(popup){
        this._popup=popup;
        this._closeBtn = this._popup.querySelector('.popup__exit-button');
    }
    open(){
        this._popup.classList.add('popup_active');
        document.addEventListener('keydown', this.handleEscClose);
    }
    close(){
        this._popup.classList.remove('popup_active');
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
        this._popup.addEventListener('mousedown', this._closePopupOverlay)
      }

}
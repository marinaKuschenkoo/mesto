import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{

    constructor(popupSelector){
        super(popupSelector);
        this.popupFigureImage = this._popup.querySelector('.popup__image');;
        this.popupFigureFigurcaption = this._popup.querySelector('.popup__image-text');;
    }

    open(element){
        super.open();
        this.popupFigureImage.src=element.link;
        this.popupFigureFigurcaption.textContent=element.name;
        this.popupFigureImage.alt=element.name;
    }
}
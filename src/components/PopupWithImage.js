import Popup from "./Popup.js";
import {fullImage, imgText} from "../utils/constans.js"

export default class PopupWithImage extends Popup{

    constructor(popupSelector){
        super(popupSelector);
        this.popupFigureImage = fullImage;
        this.popupFigureFigurcaption = imgText;
    }

    open(element){
        super.open();
        this.popupFigureImage.src=element.link;
        this.popupFigureFigurcaption.textContent=element.name;
        this.popupFigureImage.alt=element.name;
    }
}
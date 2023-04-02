export default class Card{
    constructor(data, templateSelector,openImg) {
      this._templateSelector = templateSelector;
      this._name = data.name;
      this._link = data.link;
      this._openImg = openImg;
    }
  
    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content.querySelector(".element")
        .cloneNode(true);

        return cardElement;
    }
    _setEventListeners() {
        this._buttonLike.addEventListener("click", () => {
          this._handleLike();
        });
    
        this._buttonDelete.addEventListener("click", () => {
          this._handleDelete();
        });
        this._cardImage.addEventListener("click", () => {
            this._openImg(this._name,this._link);
          });
      }
        _handleLike() {
            this._buttonLike.classList.toggle("element__like-active");
        }

        _handleDelete() {
            this._element.remove();
            this._element = null;
        }
        generateCard () {
            this._element = this._getTemplate();
    
            this._cardImage = this._element.querySelector(".element__img");
            this._cardName = this._element.querySelector(".element__descr");
            this._buttonLike = this._element.querySelector(".element__like-container");
            this._buttonDelete = this._element.querySelector(".element__trash");
    
            this._setEventListeners();
    
            this._cardImage.src = this._link;
            this._cardImage.alt = this._name;
            this._cardName.textContent = this._name;
    
            return this._element;
        }

}
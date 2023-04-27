export default class Card {
  constructor(data, templateSelector, myID, handleOpenImg, toggleCardLike, {handleDeleteClick}) {
      this._templateSelector = templateSelector;
      this._data=data;
      this._name = data.name;
      this._link = data.link;
      this._handleOpenImg = handleOpenImg;
      this._toggleCardLike = toggleCardLike;
      this._countOfLikes = data.likes.length;
      this._myID = myID;
      this._id = data._id;
      this._idid = data._id;
      this._likesArray = data.likes;

      this._handleDeleteClick = handleDeleteClick;
  }

  _isLikedByMe() {
      this._isLiked = this._likesArray.some(user => user._id === this._myID);
  }

  _getTemplate() {
      const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.element')
          .cloneNode(true);

      this._cardImage = cardElement.querySelector('.element__img');
      this._cardName = cardElement.querySelector('.element__descr');
      this._buttonDelete = cardElement.querySelector('.element__trash');
      this._buttonLike = cardElement.querySelector('.element__like-container');
      this._cardLikesCount = cardElement.querySelector('.element__likes-number');
      this._buttonLike.setAttribute('data-id', this._id);
      return cardElement;
  }



  _like(evt) {
      if (this._isLiked) {
          this._toggleCardLike(this._id, "DELETE", this._cardLikesCount);
          this._isLiked = !this._isLiked;
      } else {
          this._toggleCardLike(this._id, "PUT", this._cardLikesCount);
          this._isLiked = !this._isLiked;
      }
      evt.target.classList.toggle('element__like-active');
  }
  generateCard() {
    this._isLikedByMe();
    this._element = this._getTemplate();
    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = `фото: ${this._name}`;
    this._cardLikesCount.textContent = this._countOfLikes;
    if (this._isLiked) {
        this._buttonLike.classList.add('element__like-active');
    }

    this._idid = this._data.owner._id;
    if (this._idid !== this._myID) {
      this._buttonDelete.style.display = 'none';
    }
    this._setEventListeners();
    return this._element;
}
    _deleteCard() {
      this._element.remove();
      this._element=null;
    }
  _setEventListeners() {
      this._buttonDelete.addEventListener('click', () => {
          this._handleDeleteClick(this)
      });

      this._cardImage.addEventListener('click', this._handleOpenImg)

      this._buttonLike.addEventListener('click', (evt) => {
          this._like(evt);
      })
  }
}
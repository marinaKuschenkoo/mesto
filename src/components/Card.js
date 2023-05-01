export default class Card {
  constructor(data,templateSelector,userId,handleOpenImg,{handleLikeClick},{handleDeleteCard} ) {
    this._data = data;
    this._link = data.link;  
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._userID = userId;  
    this._handleOpenImg = handleOpenImg;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
    this.isLiked = false;
    this._likes=data.likes;
};

  _getTemplate() {
    this._cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    
    return this._cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__img');
    this._cardImage.src = this._link;    
    this._cardImage.alt = this._name;
    this._cardName=this._element.querySelector('.element__descr')
    this._cardName.textContent = this._name;
    this._likeButton = this._element.querySelector('.element__like-container');
    this._deleteButton = this._element.querySelector('.element__trash');
    this._likeCounter = this._element.querySelector('.element__likes-number');
    this._likeCounter.textContent = this._data.likes.length;
    this._ownerId = this._data.owner._id;
    if (this._ownerId !== this._userID) {
      this._deleteButton.style.display = 'none';
    }
    this._setEventListeners();
    
    return this._element;
  }

  getLikeStatus() {
    if (this._likeButton.classList.contains('element__like-active')) {
      return this.isLiked = true;
    }
  }  
  setLikes(data) {
    this._likeButton.classList.toggle('element__like-active');
    this._likeCounter.textContent = data.likes.length;
    return this.isLiked = !this.isLiked;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleOpenImg(this._name, this._link);
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this);
    });
  }

} 
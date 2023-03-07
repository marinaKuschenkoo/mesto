const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
const editButton = document.querySelector('.profile__edit-button');
const closeButton=document.querySelector('.popup__exit-button');
const addButton=document.querySelector('.profile__add-button')
const popup=document.querySelector('.popup');
const elements=document.querySelector('.elements')
const element=document.querySelector('.element');
const popupEditProfile=document.querySelector('.popup_edit-profile');
const popupAddItems=document.querySelector('.popup_add-items');
const elementTemplate = document.querySelector('#element');
const fullImgPopup=document.querySelector('.popup_full-image');
const imgClose=document.querySelector('.popup__image-close');
const fullImage=document.querySelector('.popup__image');
const imgText=document.querySelector('.popup__image-text');
const closeButtons=document.querySelectorAll('.popup__exit-button');
const popups=document.querySelectorAll('.popup');
const popupAddClose=document.querySelector('.popup__add-close');
const popupEditClose=document.querySelector('.popup__edit-close');
const formElement = popup.querySelector('.popup__form'); 
const nameInput = formElement.querySelector('[name="name"]');
const jobInput = formElement.querySelector('[name="workplace"]');
const profileName=document.querySelector('.profile__name');
const profileWork=document.querySelector('.profile__work');
const saveButton=document.querySelector('.popup__save-button');
const editProfileForm=document.querySelector('.popup__form_editProfile');
const addCardForm=document.querySelector('.popup__form_saveCard');
const inputPlaceName=document.querySelector('.popup__input_type_placeName');
const inputPlaceImg=document.querySelector('.popup__input_type_placeImage');

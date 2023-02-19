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
const formElement = document.querySelector('.popup__form'); 
const nameInput = formElement.querySelector('[name="name"]');
const jobInput = formElement.querySelector('[name="workplace"]');
const profileName=document.querySelector('.profile__name');
const profileWork=document.querySelector('.profile__work');
const saveButton=document.querySelector('.popup__save-button');
const editProfileForm=document.querySelector('.popup__form_editProfile');
const addCardForm=document.querySelector('.popup__form_saveCard');
const inputPlaceName=document.querySelector('.popup__input_type_placeName');
const inputPlaceImg=document.querySelector('.popup__input_type_placeImage');

const addItem = (name,link)=>{
    const placeElement = elementTemplate.content.cloneNode(true);
    const cardImg=placeElement.querySelector('.element__img');
    cardImg.src=link;
    cardImg.alt=name;
    const cardTitle=placeElement.querySelector('.element__descr');
    cardTitle.textContent=name;

    const deleteButton=placeElement.querySelector('.element__trash');
    deleteButton.addEventListener('click',(event)=>{
      event.target.closest('.element').remove();
    });


    const likeButton=placeElement.querySelector('.element__like-container');
    likeButton.addEventListener('click',(event)=>{
      event.target.classList.toggle('element__like-active');
    })
    cardImg.addEventListener('click', function(){
      fullImage.src=link;
      imgText.textContent=name;
      fullImage.alt=name;
      openPopup(fullImgPopup);
    });

    return placeElement;
}
const renderCard = (name,link)=>{
  elements.prepend(addItem(name,link));
}
function displayCards(){
  initialCards.forEach(function(item){
    renderCard(item.name,item.link);
  })
}
function openPopup(popup){
  popup.classList.add('popup_active');
}
function closePopup(popup){
  popup.classList.remove('popup_active');
}

popupAddClose.addEventListener('click', function(evt){
  closePopup(popupAddItems);
})
popupEditClose.addEventListener('click',function(evt){
  closePopup(popupEditProfile);
})
editButton.addEventListener('click', function(event){
    nameInput.value=profileName.textContent;
    jobInput.value=profileWork.textContent;
    openPopup(popupEditProfile);
  })
addButton.addEventListener('click', function(event){
    openPopup(popupAddItems);
  })
imgClose.addEventListener('click',function(){
    closePopup(fullImgPopup);
  })

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent=nameInput.value;
  profileWork.textContent=jobInput.value;
  closePopup(popupEditProfile);

}
function handleFormSabmitAddButton(evt){
  evt.preventDefault(); 
  renderCard(inputPlaceName.value, inputPlaceImg.value);
  closePopup(popupAddItems);
}
displayCards();
editProfileForm.addEventListener('submit', handleFormSubmit);
addCardForm.addEventListener('submit',handleFormSabmitAddButton)
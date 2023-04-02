import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  initialCards,
  editButton,
  addButton,
  elements,
  popupEditProfile,
  popupAddItems,
  fullImgPopup,
  fullImage,
  imgText,
  popups,
  nameInput,
  jobInput,
  profileName,
  profileWork,
  editProfileForm,
  addCardForm,
  inputPlaceName,
  inputPlaceImg,
  formEditProfile,
  formCard,
} from "./constans.js";

const generateCard = (data) => {
  const card = new Card(data, "#element",openImg);
  return card.generateCard();
};
function displayInitialCards(){
  initialCards.forEach((data) => {
    elements.append(generateCard(data));
  });
}
function openPopup(popup){
  popup.classList.add('popup_active');
  window.addEventListener('keydown', closePopupWithKeyEsc);
}
const openImg=(name,link)=>{
  fullImage.src=link;
  imgText.textContent=name;
  fullImage.alt=name;
  openPopup(fullImgPopup);
  }
function closePopup(popup){
  window.removeEventListener('keydown', closePopupWithKeyEsc);
  popup.classList.remove('popup_active');
}
function initExitPopupButtons(){
  const exitBtns=Array.from(document.querySelectorAll('.popup__exit-button'));
  exitBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
      closePopup(btn.closest('.popup'))
    })
  })
popups.forEach(pop=>{
  pop.addEventListener('click',function(evt){
    if (evt.currentTarget === evt.target) {
      closePopup(evt.target);
    }
  })
})
}
function closePopupWithKeyEsc(currentEvt) {
  if (currentEvt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_active');
    closePopup(openedPopup);
  }
}
initExitPopupButtons();
editButton.addEventListener('click', function(event){
    nameInput.value=profileName.textContent;
    jobInput.value=profileWork.textContent;
    openPopup(popupEditProfile);
  })
addButton.addEventListener('click', function(event){
    formCardValidator.disableButton();
    openPopup(popupAddItems);
  })


function handleFormEditSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent=nameInput.value;
  profileWork.textContent=jobInput.value;
  closePopup(popupEditProfile);

}
function handleFormAddSubmit(evt){
  evt.preventDefault(); 
  const data = {
    name: inputPlaceName.value,
    link: inputPlaceImg.value,
  };
  elements.prepend(generateCard(data));
  closePopup(popupAddItems);
  addCardForm.reset();
}
displayInitialCards();
editProfileForm.addEventListener('submit', handleFormEditSubmit);
addCardForm.addEventListener('submit',handleFormAddSubmit)


const options={
  formSelector: '.popup__form',
  submitSelector: '.popup__save-button',
  inputSelector: '.popup__input',
  inputSectionSelector: '.form__input-label',
  errorSelector:'.popup__input-error',
  disableButtonClass:'popup__save-button_inactive',
  errorActiveSelector: 'popup__input-error_active',
}
const formProfileValidator = new FormValidator(options,formEditProfile);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(options, formCard);
formCardValidator.enableValidation();
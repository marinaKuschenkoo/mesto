const createItem = (name,link)=>{
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
  elements.prepend(createItem(name,link));
}
function displayInitialCards(){
  initialCards.forEach(function(item){
    renderCard(item.name,item.link);
  })
}
function openPopup(popup){
  popup.classList.add('popup_active');
  
  window.addEventListener('keydown', closePopupWithKeyEsc);
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
  imgClose.addEventListener('click',function(){
    closePopup(fullImgPopup);
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
    openPopup(popupAddItems);
    enableValidation(options);
  })


function handleFormEditSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent=nameInput.value;
  profileWork.textContent=jobInput.value;
  closePopup(popupEditProfile);

}
function handleFormAddSubmit(evt){
  evt.preventDefault(); 
  renderCard(inputPlaceName.value, inputPlaceImg.value);
  closePopup(popupAddItems);
  const saveBtn=document.querySelector('.popup__save-button');
  this.closest('form').reset();
  disableButton(saveBtn,options)
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
enableValidation(options);

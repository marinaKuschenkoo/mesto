let openPopup = document.querySelector('.profile__edit-button');
let closePopup=document.querySelector('.popup__exit-button');
let newAttr=document.querySelector('.popup');


openPopup.addEventListener('click', function(event){
        nameInput.textContent=profileName.value;
        jobInput.textContent=profileWork.value;
        newAttr.classList.add('popup_active');

    })

closePopup.addEventListener('click', function(event){
        newAttr.classList.remove('popup_active');
    })


let formElement = document.querySelector('.popup__form'); 
let nameInput = formElement.querySelector('[name="name"]');
let jobInput = formElement.querySelector('[name="workplace"]');
let profileName=document.querySelector('.profile__name');
let profileWork=document.querySelector('.profile__work');
let saveButton=document.querySelector('.popup__save-button');

function handleFormSubmit (evt) {
    evt.preventDefault(); 


    profileName.textContent=nameInput.value;
    profileWork.textContent=jobInput.value;

    newAttr.classList.remove('popup_active');

}
formElement.addEventListener('submit', handleFormSubmit);
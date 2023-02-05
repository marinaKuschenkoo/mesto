let openPopup = document.querySelector('.profile__edit-button');
let closePopup=document.querySelector('.popup__exit-button');
let newAttr=document.querySelector('.popup');


openPopup.addEventListener('click', function(event){
        newAttr.classList.add('popup_active');
    })

closePopup.addEventListener('click', function(event){
        newAttr.classList.remove('popup_active');
    })


let formElement = document.querySelector('.popup__form'); 

let nameInput = formElement.querySelector('[name="name"]');
let jobInput = formElement.querySelector('[name="workplace"]');

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let profileName=document.querySelector('.profile__name');
    let profileWork=document.querySelector('.profile__work');

    profileName.textContent=nameInput.value;
    profileWork.textContent=jobInput.value;

    

}
formElement.addEventListener('submit', handleFormSubmit); 
let saveButton=document.querySelector('.popup__save-button');
        saveButton.addEventListener('click', function(event){
            newAttr.classList.remove('popup_active');
    })
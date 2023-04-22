import './index.css';
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  editButton,
  addButton,
  profileName,
  inputName,
  inputWork,
  profileWork,
  formEditProfile,
  formCard,
  options,
  fullImgPopup,
  popupEditProfile,
  popupAddItems
} from "../utils/constans.js";
const formProfileValidator = new FormValidator(options,formEditProfile);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(options, formCard);
formCardValidator.enableValidation();

const user = new UserInfo({name: profileName, about: profileWork});
const popupWithImage = new PopupWithImage(fullImgPopup);

const createCard = (item) => {
  const card = new Card(item, '#element' , () => {
    popupWithImage.open(item)
  })
  return card.generateCard()
};

const popupEdit = new PopupWithForm(popupEditProfile,{ 
  handleFormSubmit: ({name, about})=>{
    user.setUserInfo(name, about)
    }
  });

const popupAdd = new PopupWithForm(popupAddItems,{ 
  handleFormSubmit: ({name, link})=>{
    displayInitialCards.addItem(createCard({
      name: name,
      link: link,
      alt: name
    }));
  }
});
popupAdd.setEventListeners();

editButton.addEventListener('click', () => {
  
  const userObject = user.getUserInfo();
  inputName.value = userObject.name;
  inputWork.value = userObject.about;

  popupEdit.open()
})

addButton.addEventListener('click', () => {
  popupAdd.open()
  formCardValidator.disableButton();
})

const displayInitialCards = new Section({
  items: initialCards,
  renderer: (initialCard) => {
    displayInitialCards.addItem(createCard(initialCard));}
}, ".elements")


displayInitialCards.renderItems();
popupWithImage.setEventListeners();
popupEdit.setEventListeners();

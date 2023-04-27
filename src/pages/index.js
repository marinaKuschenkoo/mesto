import './index.css';
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import {
  editButton,
  addButton,
  profileName,
  inputName,
  inputWork,
  profileWork,
  formEditProfile,
  formCard,
  avatarForm,
  options,
  fullImgPopup,
  popupEditProfile,
  popupAddItems,
  profileAvatar,
  popupDelete,
  popupAvatar
} from "../utils/constans.js";
import Api from '../components/Api.js';
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: 'ff030528-9532-4382-9be9-66fb434177d2',
    'Content-Type': 'application/json'
  }
})
let userID;
const formProfileValidator = new FormValidator(options,formEditProfile);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(options, formCard);
formCardValidator.enableValidation();
const formAvatarValidator = new FormValidator(options,avatarForm)
formAvatarValidator.enableValidation();
const user = new UserInfo({name: profileName, about: profileWork, avatar: profileAvatar });
const popupWithImage = new PopupWithImage(fullImgPopup);

api.getUserInfo()
.then((res) => {
  user.setUserInfo(res.name, res.about);
  userID=res._id;

}).catch((error) => console.log(`Ошибка: ${error}`))


api.getInitialCards()
.then((res) => {
  displayInitialCards.renderItems(res);
})
.catch((error) => console.log(`Ошибка: ${error}`))


function toggleCardLike(id, method, likeCounter) {
  return api.toggleLike(id, method)
  .then((result) => {
    likeCounter.textContent = result.likes.length;
    return result;
  })
  .catch(console.log);
  }

const popupCardDeleteConfirm = new PopupWithSubmit(popupDelete);

const renderCard = (element) => {
  const card = new Card(element, '#element',userID, () => {
    popupWithImage.open(element)
  }, toggleCardLike,
  {handleDeleteClick: (card) => {
   popupCardDeleteConfirm.open();
    popupCardDeleteConfirm.setSubmitAction(() => {
      api.deleteCard(element._id)
        .then(() => {
          card._deleteCard();
          popupCardDeleteConfirm.close();
        })
        .catch(err => console.log(err));
    });
  }}).generateCard();
  displayInitialCards.addItem(card);
}

const displayInitialCards = new Section({renderer: renderCard}, ".elements");


const popupEdit = new PopupWithForm(popupEditProfile,{ 
  handleFormSubmit: ({name, about})=>{
      api.changeUserInfo(name, about).then(() => {
      user.setUserInfo(name, about);
      popupEdit.close();
    }).catch(console.log)
    .finally(() => popupEdit.renderLoading(false, 'Сохранить'))
  }
  },
  );


const popupEditAvatar=new PopupWithForm(popupAvatar,{
  handleFormSubmit: (item) => {
    api.editAvatar(item)
      .then((res) => {
        user.setAvatar({ avatar: res.avatar});
        popupEditAvatar.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupEditAvatar.renderLoading(false, 'Сохранить'))
  }
})
profileAvatar.addEventListener('click',()=>{
  popupEditAvatar.open();
})



const popupAdd = new PopupWithForm(popupAddItems, {
  handleFormSubmit: (item) => {
  api.createNewCard(item).then((res) => {
      renderCard(res);
    })
    .catch((err) => console.error(err))
    .finally(() => popupAdd.renderLoading(false, 'Создать'))
}});




editButton.addEventListener('click', () => {
  popupEdit.open()
  const userObject = user.getUserInfo();
  inputName.value = userObject.name;
  inputWork.value = userObject.about;
  
})

addButton.addEventListener('click', () => {
  popupAdd.open()
  formCardValidator.disableButton();
})

popupAdd.setEventListeners();
popupCardDeleteConfirm.setEventListeners();
popupWithImage.setEventListeners();
popupEdit.setEventListeners();
popupEditAvatar.setEventListeners();

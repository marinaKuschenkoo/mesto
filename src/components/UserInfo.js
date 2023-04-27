export default class UserInfo{
    constructor({name, about,avatar}) {
      this._name = name;
      this._about = about;
      this._avatar = avatar;
  }

  getUserInfo() {
      return {
          name: this._name.textContent,
          about: this._about.textContent,
        };
  }

  setUserInfo(name, about) { 
      this._name.textContent = name;
      this._about.textContent = about;
  }

  setAvatar(data){
    this._avatar.src = data.avatar
  }
}
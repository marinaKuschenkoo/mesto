export default class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl=baseUrl;
      this._headers=headers;
    }

    _checkResponse(res){
        if (res.ok) {
            return res.json();
          } else {
            return Promise.reject(`ERROR: ${res.status}`);
          }
    }

    getUserInfo(){
      return fetch(`${this._baseUrl}/users/me`, { 
          method: "GET",
          headers: this._headers,
        }).then(this._checkResponse);
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
      })
      .then(this._checkResponse)
    }
  
    changeUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me `, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        })
      }).then(this._checkResponse);
    }

    createNewCard(card) {
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          link: card.link,
          name: card.name
        })
      }).then(this._checkResponse);
    }

    deleteCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      })   .then(res => {
        if (res.ok) {
            return res.json();
        }
    })
    .then(this._handleResponse)
    }
 
    editAvatar(item) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: item.link,
      })
    }).then(this._checkResponse);
  }
  changeLikeStatus(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers
    })
    .then(this._checkResponse)
  }
  }

import React from 'react';
import apiConfig from './Utils';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this._url = this.props.url;
    this._headers = this.props.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    }).then(res => this._getResponseData(res))
  }

  editProfile(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    }).then(res => this._getResponseData(res))
  }

  editAvatar(url) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${url}`
      })
    }).then(res => this._getResponseData(res))
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(res => this._getResponseData(res))
  }

  addCard(name, link) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    }).then(res => this._getResponseData(res))
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers
    }).then(res => this._getResponseData(res))
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers
    }).then(res => this._getResponseData(res))
  }
}

const api = new Api(apiConfig);
export default api;
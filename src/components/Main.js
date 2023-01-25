import { useState } from 'react';
import React from 'react';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getProfile(),
      api.getInitialCards()
    ]).then((values) => {
      console.log(values)
      setUserName(values[0].name)
      setUserDescription(values[0].about)
      setUserAvatar(values[0].avatar)
      setCards(values[1])
    }).catch((err) => console.log(`Данные не загрузились. ${err}`))
  }, [])
  
  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__block">
          <div className="profile__avatar">
            <img className="profile__photo" src={userAvatar} alt="Аватар пользователя" />
            <span className="profile__overlay" onClick={onEditAvatar}></span>
          </div>
          <div className="profile__edit">
            <div className="info profile__info">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__position">{userDescription}</p>
            </div>
            <button className="profile__button profile__button_edit" onClick={onEditProfile} type="button"></button>
          </div>
        </div>
        <button className="profile__button profile__button_add" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="cards content__cards">
        {
          cards.map((card, i) => (
            <article className="cards__item card" key={card._id}>
              <img className="card__photo" src={card.link} alt="фото места" />
              <button className="card__button_remove" id="button__remove" type="button" name="remove"></button>
              <div className="card__caption">
                <h2 className="card__name">{card.name}</h2>
                <div className="card__like">
                  <button className="card__button" id="button__like" type="button"></button>
                  <p className="card__amount">{card.likes.length}</p>
                </div>
              </div>
            </article>
          ))
        }
      </section>
    </main>
  )
}

export default Main;
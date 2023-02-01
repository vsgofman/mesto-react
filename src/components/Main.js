import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete, cards }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__block">
          <div className="profile__avatar">
            <img className="profile__photo" src={currentUser.avatar} alt="Аватар пользователя" />
            <span className="profile__overlay" onClick={onEditAvatar}></span>
          </div>
          <div className="profile__edit">
            <div className="info profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__position">{currentUser.about}</p>
            </div>
            <button className="profile__button profile__button_edit" onClick={onEditProfile} type="button"></button>
          </div>
        </div>
        <button className="profile__button profile__button_add" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="cards content__cards">
        {
          cards.map((card, i) => (
            <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={card._id} />
          ))
        }
      </section>
    </main>
  )
}

export default Main;
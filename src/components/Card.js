import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const card = props.card;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  function handleImageClick() {
    props.onCardClick({
      name: props.card.name,
      link: props.card.link
    });
  }
  function handleLikeClick() {
    props.onCardLike(card);
  }
  function handleCardDelete() {
    props.onCardDelete(card);
  }
  return (
    <article className="cards__item card">
      <img className="card__photo" onClick={handleImageClick} src={card.link} alt={card.name} />
      {isOwn && <button className="card__button card__button_remove" onClick={handleCardDelete} id="button-remove" type="button" name="remove" />}
      <div className="card__caption">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like">
          <button className={`card__button card__button_like ${isLiked && 'card__button_active'}`} onClick={handleLikeClick} id="button-like" type="button" name="like" />
          <p className="card__amount">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
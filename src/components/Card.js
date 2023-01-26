function Card(props) {
  function handleImageClick() {
    props.onCardClick({
      name: props.card.name,
      link: props.card.link
    });
  }

  return (
    <article className="cards__item card">
      <img className="card__photo" onClick={handleImageClick} src={props.card.link} alt={props.card.name} />
      <button className="card__button_remove" id="button__remove" type="button" name="remove"></button>
      <div className="card__caption">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like">
          <button className="card__button" id="button__like" type="button"></button>
          <p className="card__amount">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;
function ImagePopup(props) {
  return (
    <div className={`popup popup_cover ${props.card.link ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_cover">
        <img src={props.card.link} alt="фото места" className="popup__image" />
        <h2 className="popup__caption">{props.card.name}</h2>
        <button className="popup__close popup__close_cover" onClick={props.onClose} type="button" aria-label="Закрыть попап"></button>
      </div>
    </div>
  )
}

export default ImagePopup;
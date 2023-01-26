function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={props.onClose} type="button" aria-label="Закрыть попап"></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="form popup__form" name={props.name}>
          {props.children}
          <button className="popup__button popup__save" type="submit" aria-label={props.textButton}>{props.textButton}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
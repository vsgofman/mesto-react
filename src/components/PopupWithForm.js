function PopupWithForm({ title, name, textButton, isOpen, onClose, onSubmit, children }) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={onClose} type="button" aria-label="Закрыть попап" />
        <h2 className="popup__title">{title}</h2>
        <form className="form popup__form" name={name} onSubmit={onSubmit}>
          {children}
          <button className="popup__button popup__save" type="submit" aria-label={textButton}>{textButton}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
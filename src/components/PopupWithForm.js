function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
    <div class="popup__container">
      <button class="popup__close" type="button"  aria-label="Закрыть попап"></button>
        <h2 class="popup__title">{props.title}</h2>
        <form class="form popup__form popup__form_" name={props.name} novalidate>
          <button class="popup__button popup__save" type="submit" aria-label="?">?</button>
        </form>
    </div>
  </div>
  )
}

// 47:25
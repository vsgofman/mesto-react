function ImagePopup() {
  return (
    <div className="popup popup_cover">
      <div className="popup__container popup__container_cover">
        <img src="#" alt="фото места" class="popup__image" />
        <h2 className="popup__caption"></h2>
        <button className="popup__close popup__close_cover" type="button" aria-label="Закрыть попап"></button>
      </div>
    </div>
  )
}

export default ImagePopup;
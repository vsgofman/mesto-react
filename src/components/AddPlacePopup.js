import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const cardNameRef = useRef(null);
  const cardLinkRef = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value
    });
  }

  useEffect(() => {
    cardNameRef.current.value = '';
    cardLinkRef.current.value = '';
  }, [isOpen])

  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      textButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <div className="form__container">
        <input
          id="card-name"
          className="popup__input popup__input_card_name"
          ref={cardNameRef}
          type="text" name="card_name" placeholder="Название"
          minLength="2" maxLength="30" required
        />
        <span className="popup__error popup__error_card-name"></span>
      </div>
      <div className="form__container">
        <input
          id="card-link"
          className="form__input popup__input popup__input_card_link"
          ref={cardLinkRef}
          type="url" name="card_link" placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error popup__error_card-link"></span>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
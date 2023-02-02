import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef(null);
  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen])

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <div className="form__container">
        <input
          id="avatar-link"
          className="form__input popup__input popup__input_avatar_link"
          ref={avatarRef}
          type="url" name="avatar_link" placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__error popup__error_avatar-link"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
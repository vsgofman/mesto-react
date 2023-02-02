import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
      <div className="form__container">
        <input
          id="name-input"
          className="form__input popup__input popup__input_content_name"
          onChange={handleNameChange}
          value={name || ''}
          type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required
        />
        <span className="popup__error popup__error_name-input"></span>
      </div>
      <div className="form__container">
        <input
          id="job-input"
          className="form__input popup__input popup__input_content_job"
          onChange={handleDescriptionChange}
          value={description || ''}
          type="text" name="job" placeholder="Профессия"
          minLength="2" maxLength="200" required
        />
        <span className="popup__error popup__error_job-input"></span>
      </div>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
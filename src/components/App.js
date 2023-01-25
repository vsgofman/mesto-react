import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
          />
          <Footer />
        </div>
        {/* Profile edit */}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          textButton="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          children=
          {<>
            <div className="form__container">
              <input id="name-input" className="form__input popup__input popup__input_content_name" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required />
              <span className="popup__error popup__error_name-input"></span>
            </div>
            <div className="form__container">
              <input id="job-input" className="form__input popup__input popup__input_content_job" type="text" name="job" placeholder="Профессия" minlength="2" maxlength="200" required />
              <span className="popup__error popup__error_job-input"></span>
            </div>
          </>}
        />
        {/* Add card */}
        <PopupWithForm
          title="Новое место"
          name="add"
          textButton="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children=
          {<>
            <div className="form__container">
              <input id="card-name" className="popup__input popup__input_card_name" type="text" name="card_name" placeholder="Название" minlength="2" maxlength="30" required />
              <span className="popup__error popup__error_card-name"></span>
            </div>
            <div className="form__container">
              <input id="card-link" className="form__input popup__input popup__input_card_link" type="url" name="card_link" placeholder="Ссылка на картинку" required />
              <span className="popup__error popup__error_card-link"></span>
            </div>
          </>}
        />
        {/* Avatar edit */}
        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          textButton="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          children=
          {<>
            <div className="form__container">
              <input id="avatar-link" className="form__input popup__input popup__input_avatar_link" type="url" name="avatar_link" placeholder="Ссылка на картинку" required />
              <span className="popup__error popup__error_avatar-link"></span>
            </div>
          </>}
        />
        {/* Confirm delete */}
        <PopupWithForm
          title="Вы уверены?"
          name="confirm"
          textButton="Да"
          children={<></>}
        />
        <ImagePopup />
    </div>
  </div>
  );
}

export default App;
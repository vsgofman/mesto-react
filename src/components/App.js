import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isSelectedCard, setIsSelectedCard] = useState(false);

  function handleEditProfileClick() { setIsEditProfilePopupOpen(true); }
  function handleEditAvatarClick() { setIsEditAvatarPopupOpen(true); }
  function handleAddPlaceClick() { setIsAddPlacePopupOpen(true); }
  function handleCardClick(card) { setIsSelectedCard(card); }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsSelectedCard(false);
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
            onCardClick={handleCardClick}
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
              <input id="name-input" className="form__input popup__input popup__input_content_name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="popup__error popup__error_name-input"></span>
            </div>
            <div className="form__container">
              <input id="job-input" className="form__input popup__input popup__input_content_job" type="text" name="job" placeholder="Профессия" minLength="2" maxLength="200" required />
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
              <input id="card-name" className="popup__input popup__input_card_name" type="text" name="card_name" placeholder="Название" minLength="2" maxLength="30" required />
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
        <ImagePopup card={isSelectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
}

export default App;
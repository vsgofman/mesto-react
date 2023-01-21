import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
  // const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpened(true);
  // }
  const popupEdit = document.querySelector('.popup_edit');
  let isEditProfilePopupOpen = false;

  function handleEditProfileClick() {
    isEditProfilePopupOpen = true;
  }

  function handleEditAvatarClick() {
    document.querySelector('.popup_avatar').classList.add('popup_opened');
  }
  
  function handleAddPlaceClick() {
    document.querySelector('.popup_add').classList.add('popup_opened');
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

  <template id="card-template">
    <article className="cards__item card">
      <img className="card__photo" src="#" alt="фото места" />
      <button className="card__button_remove" id="button__remove" type="button" name="remove"></button>
      <div className="card__caption">
        <h2 className="card__name"></h2>
        <div className="card__like">
          <button className="card__button" id="button__like" type="button"></button>
          <p className="card__amount"></p>
        </div>
      </div>
    </article>
  </template>
    </div>
  </div>
  );
}

export default App;
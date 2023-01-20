import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpened(true);
  }

  return (
    <div className="App">
      <div className="page">
      <div className="page__container">
        <Header />
        <Main handleEditProfileClick={handleEditProfileClick} />
        <Footer />
    </div>

  <div className="popup popup_edit">
    <div className="popup__container">
      <button className="popup__close" type="button"  aria-label="Закрыть попап"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className={`form popup__form popup__form_profile_edit ${isEditProfilePopupOpened && 'popup_opened'}`} name="edit profile" novalidate>
          <div className="form__container">
            <input id="name-input" className="form__input popup__input popup__input_content_name" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required />
            <span className="popup__error popup__error_name-input"></span>
          </div>
          <div className="form__container">
            <input id="job-input" className="form__input popup__input popup__input_content_job" type="text" name="job" placeholder="Профессия" minlength="2" maxlength="200"  required />
            <span className="popup__error popup__error_job-input"></span>
          </div>
          <button className="popup__button popup__save" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
    </div>
  </div>

  <div class="popup popup_add">
    <div class="popup__container">
      <button class="popup__close" type="button"  aria-label="Закрыть попап"></button>
        <h2 class="popup__title">Новое место</h2>
        <form class="form popup__form popup__form_card_add" name="add card" novalidate>
          <div class="form__container">
            <input id="card-name" class="popup__input popup__input_card_name" type="text" name="card_name" placeholder="Название" minlength="2" maxlength="30" required />
            <span class="popup__error popup__error_card-name"></span>
          </div>
          <div class="form__container">
            <input id="card-link" class="form__input popup__input popup__input_card_link" type="url" name="card_link" placeholder="Ссылка на картинку" required />
            <span class="popup__error popup__error_card-link"></span>
          </div>
          <button class="popup__button popup__save" type="submit" aria-label="Создать">Создать</button>
        </form>
    </div>
  </div>

  <div class="popup popup_avatar">
    <div class="popup__container">
      <button class="popup__close" type="button"  aria-label="Закрыть попап"></button>
        <h2 class="popup__title">Обновить аватар</h2>
        <form class="form popup__form popup__form_avatar_edit" name="edit avatar" novalidate>
          <div class="form__container">
            <input id="avatar-link" class="form__input popup__input popup__input_avatar_link" type="url" name="avatar_link" placeholder="Ссылка на картинку"  required />
            <span class="popup__error popup__error_avatar-link"></span>
          </div>
          <button class="popup__button popup__save" type="submit" aria-label="Сохранить">Сохранить</button>
        </form>
    </div>
  </div>
  <div class="popup popup_confirm">
    <div class="popup__container">
      <button class="popup__close" type="button"  aria-label="Закрыть попап"></button>
        <h2 class="popup__title">Вы уверены?</h2>
        <form class="form popup__form popup__form_delete_confirm" name="edit profile" novalidate>
          <button class="popup__button popup__save" type="submit" aria-label="Да">Да</button>
        </form>
    </div>
  </div>

  <div class="popup popup_cover">
    <div class="popup__container popup__container_cover">
      <img src="#" alt="фото места" class="popup__image" />
      <h2 class="popup__caption"></h2>
      <button class="popup__close popup__close_cover" type="button"  aria-label="Закрыть попап"></button>
    </div>
  </div>

  <template id="card-template">
    <article class="cards__item card">
      <img class="card__photo" src="#" alt="фото места" />
      <button class="card__button_remove" id="button__remove" type="button" name="remove"></button>
      <div class="card__caption">
        <h2 class="card__name"></h2>
        <div class="card__like">
          <button class="card__button" id="button__like" type="button"></button>
          <p class="card__amount"></p>
        </div>
      </div>
    </article>
  </template>
    </div>
  </div>
  );
}

export default App;
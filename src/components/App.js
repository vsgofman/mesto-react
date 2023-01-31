import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getProfile()
      .then((res) => {
        setCurrentUser(res);
      }).catch((err) => console.log(`Данные не загрузились. ${err}`))
  }, [])

  function handleEditProfileClick() { setIsEditProfilePopupOpen(true); }
  function handleEditAvatarClick() { setIsEditAvatarPopupOpen(true); }
  function handleAddPlaceClick() { setIsAddPlacePopupOpen(true); }
  function handleCardClick(card) { setSelectedCard(card); }
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log('уляля')
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <div className="page__container">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              cards={cards}
              setCards={setCards}
            />
            <Footer />
          </div>

          {/* Profile edit */}
          <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            textButton="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}>
            <div className="form__container">
              <input id="name-input" className="form__input popup__input popup__input_content_name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
              <span className="popup__error popup__error_name-input"></span>
            </div>
            <div className="form__container">
              <input id="job-input" className="form__input popup__input popup__input_content_job" type="text" name="job" placeholder="Профессия" minLength="2" maxLength="200" required />
              <span className="popup__error popup__error_job-input"></span>
            </div>
          </PopupWithForm>

          {/* Add card */}
          <PopupWithForm
            title="Новое место"
            name="add"
            textButton="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}>
            <div className="form__container">
              <input id="card-name" className="popup__input popup__input_card_name" type="text" name="card_name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__error popup__error_card-name"></span>
            </div>
            <div className="form__container">
              <input id="card-link" className="form__input popup__input popup__input_card_link" type="url" name="card_link" placeholder="Ссылка на картинку" required />
              <span className="popup__error popup__error_card-link"></span>
            </div>
          </PopupWithForm>

          {/* Avatar edit */}
          <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            textButton="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}>
            <div className="form__container">
              <input id="avatar-link" className="form__input popup__input popup__input_avatar_link" type="url" name="avatar_link" placeholder="Ссылка на картинку" required />
              <span className="popup__error popup__error_avatar-link"></span>
            </div>
          </PopupWithForm>

          {/* Confirm delete */}
          <PopupWithForm
            title="Вы уверены?"
            name="confirm"
            textButton="Да"
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

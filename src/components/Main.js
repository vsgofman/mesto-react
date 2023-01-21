function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__block">
          <div className="profile__avatar">
            <img className="profile__photo" src="<%=require('./images/cousteau.jpg')%>" alt="Аватар пользователя" />
            <span className="profile__overlay" onClick={onEditAvatar}></span>
          </div>
          <div className="profile__edit">
            <div className="info profile__info">
              <h1 className="profile__name"></h1>
              <p className="profile__position"></p>
            </div>
            <button className="profile__button profile__button_edit" onClick={onEditProfile} type="button"></button>
          </div>
        </div>
        <button className="profile__button profile__button_add" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="cards content__cards"></section>
    </main>
  )
}

export default Main;
import logo from './images/logo.svg';
import profileImage from './images/image.jpg';
import addCardButton from './images/Vector2.svg';
import './index.css';

function App() {
  return (
    <div className="page">
    <header className="header">
        <div className="header__box">
            <img className="header__logo" src={logo} alt="логотип"></img>
        </div>
    </header>
    <main>
        <section className="profile">
            <div className="profile__content">
                <div className="profile__avatar">
                    <button className="profile__editpic"></button>
                    <img className="profile__image" src={profileImage} alt="Жак-Ив Кусто"></img>
                </div>
                <div className="profile__name-box">
                    <h1 className="profile__name">Жак-Ив Кусто</h1>
                    <button className="profile__button button-show" type="button" aria-label="кнопка редактирования профиля"></button>
                    <p className="profile__profession">Исследователь океана</p>
                </div>
                <button className="profile__button-photo button-show" type="button" aria-label="кнопка добавления фото">
                    <img src={addCardButton} alt="кнопка добавления фото"></img>
                </button>
            </div>
        </section>
        <section className="photos">
            <ul className="photos__container" id="element-ul">
            </ul>
         </section>
    </main>
    <footer className="footer">
        <p className="footer__text">© 2020 Mesto Russia</p>
    </footer>
    <div className="popup popup_type_profile">
        <div className="popup__container">
            <h2 className="popup__header">Редактировать профиль</h2>
            <form className="popup__form popup__form-profile" name="name-profession" method="post" novalidate>
                <input required className="popup__text" id="popup__name" type="text" placeholder="Имя" name="name" minlength="2" maxlength="40"></input>
                <span className="popup__text-error popup__text-error_name" id="popup__name-error"></span>
                <input required className="popup__text" id="popup__profession" type="text" placeholder="О себе" name="profession" minlength="2" maxlength="200"></input>
                <span className="popup__text-error popup__text-error_profession" id="popup__profession-error"> </span>
                <input className="popup__save button-hide" type="submit" value="Сохранить"></input>
            </form>
            <button className="popup__close button-close" type="button" aria-label="кнопка закрытия"></button>
        </div>
    </div>
    <div className="popup popup_type_photo">
        <div className="popup__container">
            <h2 className="popup__header">Новое место</h2>
            <form className="popup__form popup__form-photo" name="photo-add" method="post" novalidate>
                <input required className="popup__text" id="popup__place" type="text" placeholder="Название" name="card-name" minlength="2" maxlength="30"></input>
                <span className="popup__text-error popup__text-error_place" id="popup__place-error"> </span>
                <input required className="popup__text" id="popup__link" type="url" placeholder="Ссылка на картинку" name="card-image"></input>
                <span className="popup__text-error popup__text-error_link" id="popup__link-error"> </span>
                <input className="popup__save button-hide" type="submit" value="Сохранить"></input>
            </form>
            <button className="popup__close button-photo-close" type="button" aria-label="кнопка закрытия"></button>
        </div>
    </div>
    <div className="popup popup_type_image">
        <div className="popup__image-box">
            <img className="popup__image" src="./images/white.jpg" alt=""></img>
            <p className="popup__caption"></p>
            <button className="popup__close button-image-close" type="button" aria-label="кнопка закрытия"></button>
        </div>      
    </div>
    <div className="popup popup_avatar">
        <div className="popup__container">
          <h2 className="popup__header">Обновить аватар</h2>
          <form className="popup__form popup__form-avatar" name="form-avatar" novalidate>
            <input id="avatar" name="user-avatar" type="url" required placeholder="Ссылка на аватар" minlength="5" className="popup__text"></input>
            <span className="popup__text-error popup__text-error_avatar" id="avatar-error">Вы пропустили это поле.</span>
            <input className="popup__save button-hide" type="submit" value="Сохранить"></input>
          </form>
          <button className="popup__close button-avatar-close" type="button" aria-label="кнопка закрытия"></button>
        </div>
      </div>
      <div className="popup popup_delete">
        <div className="popup__container">
          <h2 className="popup__header">Вы уверены?</h2>
          <form name="form-delete" className="popup__form popup__form_delete" novalidate>
            <input id="deleted" name="confirm-delete" type="hidden" required className="popup__text"></input>
            <input className="popup__save popup__save_valid button-hide" type="submit" value="Да"></input>
          </form>
          <button className="popup__close button-confirm-delete" type="button" aria-label="кнопка закрытия"></button>
        </div>
      </div>
    <template id="template">
        <li className="photo__box" id="element-li">
            <img className="photo__image" id="photo__image" src="./images/white.jpg" alt=""></img>
            <button className="photo__delete" type="button" aria-label="кнопка удалить"></button>
            <div className="photo__text-box">
                <h2 className="photo__text" id="photo__text"></h2>
                <div className="photo__like-box">
                    <button className="photo__like" type="button" aria-label="кнопка лайк"></button>
                    <p className="photo__like-count">0</p>
                </div>
            </div>
        </li>
    </template>
  </div>
  );
}

export default App;

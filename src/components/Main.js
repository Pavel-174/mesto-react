import profileImage from '../images/image.jpg';
import addCardButton from '../images/Vector2.svg';

function Main() {
    function handleEditAvatarClick() {
        document.querySelector('.popup_avatar').classList.add('popup_opened');
      }
    
      function handleEditProfileClick() {
        document.querySelector('.popup_type_profile').classList.add('popup_opened');
      }

      function handleAddPlaceClick() {
        document.querySelector('.popup_type_photo').classList.add('popup_opened');
      }

    return(
        <main>
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar">
                        <button className="profile__editpic" onClick={handleEditAvatarClick}></button>
                        <img className="profile__image" src={profileImage} alt="Жак-Ив Кусто"></img>
                    </div>
                    <div className="profile__name-box">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__button button-show" type="button" aria-label="кнопка редактирования профиля" onClick={handleEditProfileClick}></button>
                        <p className="profile__profession">Исследователь океана</p>
                    </div>
                    <button className="profile__button-photo button-show" type="button" aria-label="кнопка добавления фото" onClick={handleAddPlaceClick}>
                        <img src={addCardButton} alt="кнопка добавления фото"></img>
                    </button>
                </div>
            </section>
            <section className="photos">
                <ul className="photos__container" id="element-ul">
                </ul>
            </section>
        </main>
    )

}

export default Main;
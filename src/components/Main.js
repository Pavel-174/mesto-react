import addCardButton from '../images/Vector2.svg';

function Main(props, {userAvatar, userName, userDescription}) {
    return(
        <main>
            <section className="profile">
                <div className="profile__content">
                    <div className="profile__avatar">
                        <button className="profile__editpic" onClick={props.onEditAvatar}></button>
                        <img className="profile__image" src={props.userAvatar} alt={userName}></img>
                    </div>
                    <div className="profile__name-box">
                        <h1 className="profile__name">{props.userName}</h1>
                        <button className="profile__button button-show" type="button" aria-label="кнопка редактирования профиля" onClick={props.onEditProfile}></button>
                        <p className="profile__profession">{props.userDescription }</p>
                    </div>
                    <button className="profile__button-photo button-show" type="button" aria-label="кнопка добавления фото" onClick={props.onAddPlace}>
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
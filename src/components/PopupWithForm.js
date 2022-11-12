function PopupWithForm(props){
    return (
      <div>
        <div className={'popup popup_type_${props.name}'}>
        <div className="popup__container">
            <h2 className="popup__header">{props.title}</h2>
            <form className={'popup__form popup__form-${props.name}'} name={props.form} method="post" novalidate>
                {props.children}
                <input className="popup__save button-hide" type="submit" value="Сохранить"></input>
            </form>
            <button className="popup__close button-close" type="button" aria-label="кнопка закрытия"></button>
        </div>
        </div>
      </div>    
    )
}

export default PopupWithForm;

{/* <div className={`popup popup_form_${props.name} ${props.isOpen ? `popup_opened`: ""}`} onClick={props.onCloseClick}>
      <div className="popup__container">
        <form className="popup__form" name={props.form} onSubmit={props.onSubmit}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button className="popup__btn-save" type="submit" title="Сохранить">{props.buttonText}</button>
        </form>
        <button className="popup__btn-close" type="button" title="Закрыть" onClick={props.onClose}/>
      </div>
    </div> */}

{/* <div>
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
      </div> */}
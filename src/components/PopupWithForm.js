function PopupWithForm(props){
    return (
      <div>
        <div className={`popup popup_${props.name} ${props.isOpen ? `popup_opened`: ""}`}>
        <div className="popup__container">
            <h2 className="popup__header">{props.title}</h2>
            <form className={'popup__form popup__form-${props.name}'} name={props.form} method="post" noValidate>
                {props.children}
                <input className="popup__save button-hide" type="submit" value="Сохранить"></input>
            </form>
            <button className="popup__close button-close" type="button" aria-label="кнопка закрытия" onClick={props.onClose}></button>
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
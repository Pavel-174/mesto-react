import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props){
    return(
        <PopupWithForm
          isOpen={props.isOpen}
          name={'type_photo'}
          title='Новое место'
          form={'photo-add'}
          buttonTitle='Сохранить'
          onClose={props.onClose}
        >
            <input required className="popup__text" id="popup__place" type="text" placeholder="Название" name="card-name" minLength="2" maxLength="30"></input>
            <span className="popup__text-error popup__text-error_place" id="popup__place-error"> </span>
            <input required className="popup__text" id="popup__link" type="url" placeholder="Ссылка на картинку" name="card-image"></input>
            <span className="popup__text-error popup__text-error_link" id="popup__link-error"> </span>
        </PopupWithForm>
    )    
}

export default AddPlacePopup;

{/* <div className="popup popup_type_photo">
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
</div> */}
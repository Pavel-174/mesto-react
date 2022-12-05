import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
  
    function handleNameChange(evt) {
      setName(evt.target.value);
    }
  
    function handleLinkChange(evt) {
      setLink(evt.target.value);
    }
  
    function handleSubmit(evt) {
      evt.preventDefault();
  
      props.onSubmit({
        name: name,
        link: link
      });
    }
  
    React.useEffect(() => {
      if (props.isOpen) {
        setName('');
        setLink('');
      }
    }, [props.isOpen]);

    return(
        <PopupWithForm
          isOpen={props.isOpen}
          name={'type_photo'}
          title='Новое место'
          form={'photo-add'}
          buttonTitle='Сохранить'
          onClose={props.onClose}
          onSubmit={handleSubmit}
        >
            <input required className="popup__text" id="popup__place" type="text" placeholder="Название" name="card-name" minLength="2" maxLength="30" onChange={handleNameChange}></input>
            <span className="popup__text-error popup__text-error_place" id="popup__place-error"> </span>
            <input required className="popup__text" id="popup__link" type="url" placeholder="Ссылка на картинку" name="card-image" onChange={handleLinkChange}></input>
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
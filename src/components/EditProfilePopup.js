import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props){
    
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    props.onSubmit({
      name,
      about: description,
    });
  } 

  React.useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

    return(
        <PopupWithForm
          isOpen={props.isOpen}
          name={'profile'}
          title='Редактировать профиль'
          form={'name-profession'}
          buttonTitle='Сохранить'
          onClose={props.onClose}
          onSubmit ={handleSubmit}
        >
            <input required className="popup__text" id="popup__name" type="text" placeholder="Имя" name="name" minLength="2" maxLength="40" onChange={handleNameChange}></input>
            <span className="popup__text-error popup__text-error_name" id="popup__name-error"></span>
            <input required className="popup__text" id="popup__profession" type="text" placeholder="О себе" name="profession" minLength="2" maxLength="200" onChange={handleDescriptionChange}></input>
            <span className="popup__text-error popup__text-error_profession" id="popup__profession-error"> </span>     
        </PopupWithForm>   
    )    
}

export default EditProfilePopup;

{/* <div>
        <div className="popup popup_type_profile">
        <div className="popup__container">
            <h2 className="popup__header">Редактировать профиль</h2>
            <form className="popup__form popup__form-profile" name="name-profession" method="post" novalidate>
                <div>
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
            </form>
            <button className="popup__close button-close" type="button" aria-label="кнопка закрытия"></button>
        </div>
    </div> */}
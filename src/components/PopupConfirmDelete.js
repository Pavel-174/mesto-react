import PopupWithForm from "./PopupWithForm";

function PopupConfirmDelete(props){
    return(
        <PopupWithForm
          isOpen={props.isOpen}
          name={'delete'}
          title='Вы уверены?'
          form={'form-delete'}
          buttonTitle='Да'
          onClose={props.onClose}
        >
            <input id="deleted" name="confirm-delete" type="hidden" required className="popup__text"></input>
        </PopupWithForm>
    )    
}

export default PopupConfirmDelete;

{/* <div className="popup popup_delete">
<div className="popup__container">
  <h2 className="popup__header">Вы уверены?</h2>
  <form name="form-delete" className="popup__form popup__form_delete" novalidate>
    <input id="deleted" name="confirm-delete" type="hidden" required className="popup__text"></input>
    <input className="popup__save popup__save_valid button-hide" type="submit" value="Да"></input>
  </form>
  <button className="popup__close button-confirm-delete" type="button" aria-label="кнопка закрытия"></button>
</div>
</div> */}
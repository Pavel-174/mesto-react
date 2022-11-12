function ImagePopup(){
    return(
    <div className="popup popup_type_image">
        <div className="popup__image-box">
            <img className="popup__image" src="./images/white.jpg" alt=""></img>
            <p className="popup__caption"></p>
            <button className="popup__close button-image-close" type="button" aria-label="кнопка закрытия"></button>
        </div>      
    </div>
    )
}

export default ImagePopup;
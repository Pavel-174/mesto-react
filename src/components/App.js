import React, { useEffect } from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupConfirmDelete from './PopupConfirmDelete';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }


  return (
    <div className="page">
    <Header />
    <Main
     onEditAvatar={handleEditAvatarClick}
     onEditProfile={handleEditProfileClick}
     onAddPlace={handleAddPlaceClick}
    />
    <Footer />
    <PopupWithForm />
    <ImagePopup />
    <EditAvatarPopup 
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    />
    <AddPlacePopup 
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    />
    <PopupConfirmDelete 
    // isOpen={}
    />
    <EditProfilePopup 
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    />
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

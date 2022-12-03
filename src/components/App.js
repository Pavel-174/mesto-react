import React, { useEffect, useState } from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import PopupConfirmDelete from './PopupConfirmDelete';
import EditProfilePopup from './EditProfilePopup';
import api from '../utils/api.js';
// import profileImage from '../images/image.jpg';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false)

  // const [isUserAvatar, setUserAvatar] = React.useState(profileImage);
  // const [isUserName, setUserName] = React.useState('Жак Ив Кусто');
  // const [isUserDescription, setUserDescription] = React.useState('исследователь океана');
  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  // useEffect(() => {
  //   Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([data, cards]) => {
  //     setUserName(data.name);
  //     setUserDescription(data.about);
  //     setUserAvatar(data.avatar);
  //     setCards(cards);
  //   }).catch((err) => {
  //     console.error(err);
  //   });
  // }, []);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([data, cards]) => {
      setCurrentUser(data);
      setCards(cards);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(true);
  // }

  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(true);
  // }

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }

  // function closeAllPopups(){
  //   setIsEditAvatarPopupOpen(false);
  //   setIsEditProfilePopupOpen(false);
  //   setIsAddPlacePopupOpen(false);
  //   setSelectedCard(null);
  // }

  function handleUpdateUser(data) {
    api.updateUserInfo(data).then((newUser) => {
      setCurrentUser(newUser);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
  
    if (!isLiked) {
      api.likeCard(card._id).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      }).catch((err) => {
        console.error(err);
      });
    } else {
      api.dislikeCard(card._id).then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      }).catch((err) => {
        console.error(err);
      });
    }
  }
  
  function handleAddPlaceSubmit(data) {
    api.addNewCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  }

  function handleCardDelete(card) {
    api.removeCard(card).then(() => {
      setCards((items) => items.filter((c) => c._id !== card._id && c));
    }).catch((err) => {
      console.error(err);
    });
  }
  
  function handleAvatarUpdate(data) {
    api.updateProfileAvatar(data).then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    }).catch((err) => {
      console.error(err);
    });
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handlePopupCloseClick(evt) {
    if (evt.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsProfilePopupOpened(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  useEffect(() => {
    if (isProfilePopupOpened || isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          closeAllPopups();
        }
      }

      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isProfilePopupOpened, isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, selectedCard]);
  


  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <PopupWithForm />
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
       />
      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onCloseClick={handlePopupCloseClick} 
      />
      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleAddPlaceSubmit}
        onCloseClick={handlePopupCloseClick} 
      />
      <PopupConfirmDelete 
      // isOpen={}
        onCloseClick={handlePopupCloseClick} 
      />
      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleUpdateUser}
        onCloseClick={handlePopupCloseClick} 
      />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;

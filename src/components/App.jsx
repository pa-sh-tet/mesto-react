import React from 'react';
import Header from './Header';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import {api} from '../utils/Api.js';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([ api.getUserData(), api.getInitialCards() ])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleAddPlaceSubmit(data) {
    api.postCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleUpdateUser = (newUserInfo) => {
    api.patchUserInfo(newUserInfo)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleUpdateAvatar = (newUserAvatar) => {
    api.patchAvatar(newUserAvatar)
      .then((newData) => {
        setCurrentUser(newData);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if (!isLiked) {
      api.setLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter(item => item._id !== card._id))
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleDeleteCardClick = () => {
    setIsDeleteCardPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onDeleteCard={handleDeleteCardClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}/>
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit} />
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar} />
        <PopupWithForm
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          name="delete"
          buttonText="Да"
          title="Вы уверены?">
        </PopupWithForm>
        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          selectedCard={selectedCard} />
      </div>
    </CurrentUserContext.Provider>
  )
};

export default App;

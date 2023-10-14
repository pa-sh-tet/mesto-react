import React from 'react';
import Header from './Header';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }

  const handleDeleteCardClick = () => {
    setDeleteCardPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setImagePopupOpen(true);
  }

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onDeleteCard={handleDeleteCardClick}
        onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="profile"
        buttonText="Сохранить"
        title="Редактировать профиль"
      >
        <input placeholder="Введите имя" id="name-input" name="name"
        type="text" className="popup__input popup__input_type_name popup__profile-name"
        minLength="2" maxLength="40" required />
        <span className="popup__input-error name-input-error"></span>
        <input placeholder="Введите профессию" id="job-input" name="description"
        type="text" className="popup__input popup__input_type_description popup__profile-description"
        minLength="2" maxLength="200" required />
        <span className="popup__input-error job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="place"
        buttonText="Создать"
        title="Новое место">
          <input placeholder="Название места" id="place-input" name="name"
          type="text" className="popup__input popup__input_type_name" minLength="2" maxLength="30" required />
          <span className="popup__input-error place-input-error popup__input-error_active"></span>
          <input placeholder="Ссылка на картинку" id="link-input" name="link"
          type="url" className="popup__input popup__input_type_description" required />
          <span className="popup__input-error link-input-error popup__input-error_active"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="avatar"
        buttonText="Сохранить"
        title="Обновить аватар">
          <input placeholder="Ссылка на картинку" id="avatar-input" name="link"
          type="url" className="popup__input popup__input_type_description" required />
          <span className="popup__input-error avatar-input-error popup__input-error_active"></span>
      </PopupWithForm>
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
        selectedCard={selectedCard}>
      </ImagePopup>
    </div>
  )
};

export default App;

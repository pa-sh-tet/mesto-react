import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import PopupWithForm from './PopupWithForm.jsx';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="profile"
      buttonText="Сохранить"
      title="Редактировать профиль"
    >
      <input placeholder="Введите имя" id="name-input" name="name"
      type="text" className="popup__input popup__input_type_name popup__profile-name"
      minLength="2" maxLength="40" required value={name || ''} onChange={handleNameChange}/>
      <span className="popup__input-error name-input-error"></span>
      <input placeholder="Введите профессию" id="job-input" name="description"
      type="text" className="popup__input popup__input_type_description popup__profile-description"
      minLength="2" maxLength="200" required value={description || ''} onChange={handleDescriptionChange}/>
      <span className="popup__input-error job-input-error"></span>
    </PopupWithForm>
  );
}
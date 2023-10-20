import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleAddPlaceSubmit}
      name="place"
      buttonText="Создать"
      title="Новое место">
        <input placeholder="Название места" id="place-input" name="name"
        type="text" className="popup__input popup__input_type_name" minLength="2"
        maxLength="30" required value={name} onChange={handleNameChange} />
        <span className="popup__input-error place-input-error popup__input-error_active"></span>
        <input placeholder="Ссылка на картинку" id="link-input" name="link"
        type="url" className="popup__input popup__input_type_description"
        required value={link} onChange={handleLinkChange} />
        <span className="popup__input-error link-input-error popup__input-error_active"></span>
    </PopupWithForm>
  );
}
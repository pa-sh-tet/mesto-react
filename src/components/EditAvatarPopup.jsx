import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef('');
  
  function handleSubmit(e) {
    console.log(avatarRef.current.value)

    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="avatar"
      buttonText="Сохранить"
      title="Обновить аватар">
        <input placeholder="Ссылка на картинку" id="avatar-input" name="link"
        type="url" className="popup__input popup__input_type_description" required ref={avatarRef} />
        <span className="popup__input-error avatar-input-error popup__input-error_active"></span>
    </PopupWithForm>
  );
}
import React from 'react';

export default function PopupWithForm({ title, name, children, isOpen, buttonText, onClose, onSubmit }) {
  return (
    <section className={`popup popup_${name} ${isOpen ? `popup_active` : ""}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <form name={`${name}`} className="popup__form" id={`${name}__form`} onSubmit={onSubmit} noValidate>
          {children}
          <button type="submit" id={`${name}-save-button`} className="popup__save-button">{buttonText}</button>
        </form>
        <button type="button" id={`${name}-close-button`} className="popup__close-button" onClick={onClose}></button>
      </div>
    </section>
  );
}
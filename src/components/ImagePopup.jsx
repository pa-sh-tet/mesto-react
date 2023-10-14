import React from 'react';

export default function ImagePopup({ isOpen, onClose, selectedCard }) {
  
  return (
    <section className={`popup image-popup ${isOpen ? `popup_active` : ""}`}>
      <div className="image-popup__container">
          <img className="image-popup__image" 
          src={selectedCard.link}
          alt={selectedCard.name}/>
          <h3 className="image-popup__name">{selectedCard.name}</h3>
        <button type="button" id="image-close-button" className="popup__close-button" onClick={onClose}></button>
      </div>
    </section>
  );
}

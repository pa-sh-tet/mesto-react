import React from "react";

export default function Card({ onCardClick, card }) {
  const handleClick = () => {
    onCardClick(card)
  };
  return (
    <li className="elements__item">
      <img className="elements__item-image" 
      onClick={handleClick}
      src={card.link}
      alt={card.name}/>
      <div className="elements__description">
        <h2 className="elements__place">{card.name}</h2>
        <div className="elements__like">
          <button type="button" className="elements__like-button"></button>
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="elements__delete-button"></button>
    </li>
  )
}
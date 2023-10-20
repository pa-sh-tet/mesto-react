import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Card({ onCardClick, card, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `elements__like-button ${isLiked ? 'elements__like-button_active' : ''}` 
  );

  const cardDeleteButtonClassName = (
    `elements__delete-button ${isOwn ? 'elements__delete-button_active' : ''}`
  );

  const handleLikeClick = () => {
    onCardLike(card)
  };

  const handleClick = () => {
    onCardClick(card)
  };

  const handleDeleteClick = () => {
    onCardDelete(card)
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
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
          <p className="elements__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className={cardDeleteButtonClassName}  onClick={handleDeleteClick} />
    </li>
  )
}
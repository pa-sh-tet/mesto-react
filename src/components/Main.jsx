import React from 'react';
import Card from './Card'
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__face">
          <div className="profile__avatar-container">
            <img className="profile__image"
            src={currentUser.avatar}
            alt="Фото профиля" />
            <button type="button" className="profile__edit-avatar-button" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__data">
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section id="elements">
        <ul className="elements">
          {cards.map((card) => {
            return (
              <Card onCardClick={onCardClick} card={card} key={card._id} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
            ) 
          })}
        </ul>
      </section>
    </main>
  );
}
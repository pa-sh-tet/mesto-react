import React from 'react';
import {api} from '../utils/Api.js';
import Card from '../components/Card.jsx'

export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName , setUserName] = React.useState('');
  const [userDescription , setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useState(() => {
    Promise.all([ api.getUserData(), api.getInitialCards() ])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__face">
          <div className="profile__avatar-container">
            <img className="profile__image"
            src={userAvatar}
            alt="Фото профиля" />
            <button type="button" className="profile__edit-avatar-button" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__data">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section id="elements">
        <ul className="elements">
          {cards.map((card) => {
            return (
              <Card onCardClick={onCardClick} card={card} key={card._id}/>
            ) 
          })}
        </ul>
      </section>
    </main>
  );
}
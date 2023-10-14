export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  formElement: '.popup__form',
  inputElement: '.popup__input',
  saveButtonElement: '.popup__save-button',
  inactiveButtonElement: 'popup__save-button_inactive',
  inputErrorElement: 'popup__input_type_error',
  errorElement: 'popup__input-error_active'
};

//Попапы
export const popupPlace = document.querySelector('.popup_place');
export const popupProfile = document.querySelector('#profile-popup');
export const popupImage = document.querySelector('.image-popup');
export const popupAvatar = document.querySelector('.avatar-popup');
export const popupDelete = document.querySelector('.delete-popup');

//Фото и подпись в попапе картинки
export const popupImagePhoto = popupImage.querySelector('.image-popup__image');
export const popupImageName = popupImage.querySelector('.image-popup__name');

//Кнопки открытия соответствующих попапов
export const buttonOpenPopupCard = document.querySelector('.profile__add-button');
export const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
export const buttonOpenPopupAvatar = document.querySelector('.profile__edit-avatar-button');

//Инпуты попапов
export const inputNamePopupEdit = document.querySelector('.popup__profile-name');
export const inputDescriptionPopupEdit = document.querySelector('.popup__profile-description');

export const cardTemplate = document.querySelector('#element');
export const listElement = document.querySelector('.elements');

//Элементы форм
export const formElementProfile = document.querySelector('#profile__form');
export const formElementCard = document.querySelector('#place-form');
export const formElementAvatar = document.querySelector('#avatar-form');

//Кнопки сабмитов
export const buttonSubmitProfile = document.querySelector('#profile-save-button');
export const buttonSubmitCard = document.querySelector('#place_save-button');
export const buttonSubmitAvatar = document.querySelector('#avatar_save-button');
export const buttonSubmitDelete = document.querySelector('#delete-submit-button');
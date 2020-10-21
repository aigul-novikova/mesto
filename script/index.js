const initialCards = [
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

const popupUserName = document.querySelector('.popup-user-name');
const profileEditButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.popup__input_edit-name');
const jobInput = document.querySelector('.popup__input_edit-job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-image');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImageClose = document.querySelector('.popup__close-button_open-image');
const popupCloseButtonUser = document.querySelector('.popup__close-button_user');
const popupCloseButtonAdd = document.querySelector('.popup__close-button_add-image');
const popupImageNames = document.querySelector('.popup-image__name');
const popupAddCloseButton = document.querySelector('.popup__close-button_add-image');
const popupImageName = document.querySelector('.popup__input_edit-image-name');
const popupLink = document.querySelector('.popup__input_edit-link');
const formElementImage = document.querySelector('.popup__form-container_image');
const formElement = document.querySelector('.popup__form-container');
const elementsAdd = document.querySelector('#elements__add').content;
const elements = document.querySelector('.elements');

//функция открытия попапа
function openPopup (popup) {
    popup.classList.add('popup_opened');
}
//функция закрытия попапа
function closePopup (popup) {
    popup.classList.remove('popup_opened');
}

//функция отображающая имя пользователя в попапе
function addPopupEditForm() {
    openPopup(popupUserName);
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

//"сохранить"
function processFormSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    closePopup(popupUserName);
}

//images
function createImage(name, link){
    const elementsAddNew = elementsAdd.cloneNode(true);
    const elementsImage = elementsAddNew.querySelector('.elements__image');

    elementsAddNew.querySelector('.elements__text').textContent = name;
    elementsImage.src = link;
    elementsImage.alt = name;
    //like
    elementsAddNew.querySelector('.elements__button-like').addEventListener('click', function(evt){
        evt.target.classList.toggle('elements__button-like_activ');
    });
    //delete
    elementsAddNew.querySelector('.elements__image-delete').addEventListener('click', function(evt){
        elements.removeChild(evt.target.parentNode);
    });
    //открытие картинки
    elementsImage.addEventListener('click', () => {
        openPopup (popupImage);
        popupImageImage.src = link;
        popupImageImage.alt = name;
        popupImageNames.textContent = name;
    });
    
    return elementsAddNew;
}
initialCards.forEach(card => elements.append(createImage(card.name, card.link)));

//добавление карточки 
 function addImage (evt) { 
    const newImage = createImage(popupImageName.value, popupLink.value);
    popupImageName.value = '';
    popupLink.value = '';

    evt.preventDefault();    
    closePopup(popupAdd);
    elements.prepend(newImage);
}

// Слушатели:
profileEditButton.addEventListener('click', addPopupEditForm);
popupCloseButtonUser.addEventListener('click', () => closePopup (popupUserName));
formElement.addEventListener('submit', processFormSubmitHandler);
profileAddButton.addEventListener('click', () => openPopup(popupAdd));
popupCloseButtonAdd.addEventListener('click', () => closePopup (popupAdd));
popupImageClose.addEventListener('click', () => closePopup (popupImage));
formElementImage.addEventListener('submit', addImage);



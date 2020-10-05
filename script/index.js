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

const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupSaveButton = document.querySelector('.popup__save-button');
const nameInput = document.querySelector('.popup__input_edit-name');
const jobInput = document.querySelector('.popup__input_edit-job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-image');
const popupImageImage = document.querySelector('.popup-image__image');
const popupImageClose = document.querySelector('.popup__close-button_open-image');
const popupImageNames = document.querySelector('.popup-image__name');
const elementsImage = document.querySelector('.elements__image');

function addPopupEditForm() {
    popup.classList.add('popup_edit-form');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

const popupCloseButton = popup.querySelector('.popup__close-button');
function deletePopupEditForm() {
    popup.classList.remove('popup_edit-form');
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// Находим форму в DOM
const formElement = document.querySelector('.popup__form-container');

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    deletePopupEditForm();
}


//images
function addImage(name, link){
    const elementsAdd = document.querySelector('#elements__add').content;
    const elements = document.querySelector('.elements');
    const elementsAddNew = elementsAdd.cloneNode(true);

    elementsAddNew.querySelector('.elements__text').textContent = name;
    elementsAddNew.querySelector('.elements__image').src = link;
    elementsAddNew.querySelector('.elements__image').alt = name;
    //like
    elementsAddNew.querySelector('.elements__button-like').addEventListener('click', function(evt){
        evt.target.classList.toggle('elements__button-like_activ');
    });
    //delete
    elementsAddNew.querySelector('.elements__image-delete').addEventListener('click', function(evt){
        elements.removeChild(evt.target.parentNode);
    });
    //открытие картинки
    elementsAddNew.querySelector('.elements__image').addEventListener('click', () => {
        popupImage.classList.add('popup-image_open');
        popupImageImage.src = link;
        popupImageImage.alt = name;
        popupImageNames.textContent = name;


    });
    //зaкрытие картинки 
    popupImageClose.addEventListener('click', () => {
        popupImage.classList.remove('popup-image_open');
    })
    
    elements.prepend(elementsAddNew);
}
initialCards.forEach(card => addImage(card.name, card.link));

//popup add images
const popupAddCloseButton = document.querySelector('.popup__close-button_add-image');
const popupImageName = document.querySelector('.popup__input_edit-image-name');
const popupLink = document.querySelector('.popup__input_edit-link');
const popupAddCreate = document.querySelector('.popup-add__create');
const formElementImage = document.querySelector('.popup__form-container_image');
//open & close popup-add
function addPopupAddForm() {
    popupAdd.classList.add('popup-add_form');
}
function deletePopupAddForm() {
    popupAdd.classList.remove('popup-add_form');

}

//добавление карточки
formElementImage.addEventListener('submit', function (evt) { 
    addImage(popupImageName.value, popupLink.value);
    popupImageName.value = '';
    popupLink.value = '';

    evt.preventDefault();    
    deletePopupAddForm();

    
});



// Прикрепляем обработчик к форме:
profileEditButton.addEventListener('click', addPopupEditForm);
popupCloseButton.addEventListener('click', deletePopupEditForm);
formElement.addEventListener('submit', formSubmitHandler);

profileAddButton.addEventListener('click', addPopupAddForm);
popupAddCloseButton.addEventListener('click', deletePopupAddForm);


const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupSaveButton = document.querySelector('.popup__save-button');
const nameInput = document.querySelector('.input_edit-name');
const jobInput = document.querySelector('.input_edit-job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');
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

}


// Прикрепляем обработчик к форме:
profileEditButton.addEventListener('click', addPopupEditForm);
popupCloseButton.addEventListener('click', deletePopupEditForm);
popupSaveButton.addEventListener('click', deletePopupEditForm);
formElement.addEventListener('submit', formSubmitHandler);
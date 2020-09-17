const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
function addPopupEditForm() {
    popup.classList.add('popup_edit-form');
}

const popupCloseButton = popup.querySelector('.popup__close-button');
function deletePopupEditForm() {
    popup.classList.remove('popup_edit-form');
    form.name.value = '';
}
let form = document.forms.new;
function addCustomUserCard(evt) {

		let name = form.name.value;
		//создаем елемент-контейнер
		createCard(name);
		//запрещаем перезагрузку страницы
		evt.preventDefault();
		//закрываем попап при событии submit
        deleteClassToPopup();
        addDisabledForButton();
}
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// Находим форму в DOM
let formElement = document.querySelector('.popup__form-container');
function formSubmitHandler (event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.


    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup_edit-name');
    let jobInput = document.querySelector('.popup_edit-job');
    
    // Получите значение полей из свойства value
    nameInput = nameInput.value;
    jobInput = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    let userName = document.querySelector('.profile__name');
    let userJob = document.querySelector('.profile__job');

    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInput;
    userJob.textContent = jobInput;

    deleteClassToPopup();
    addDisabledForButton();
}
const popupSaveButton = document.querySelector('.popup__save-button');


// Прикрепляем обработчик к форме:
profileEditButton.addEventListener('click', addPopupEditForm);
popupCloseButton.addEventListener('click', deletePopupEditForm);
popupSaveButton.addEventListener('click', deletePopupEditForm);
formElement.addEventListener('submit', formSubmitHandler);
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', throttle(onFormSubmit, 500));
form.addEventListener('input', onInputData);

populateMassageOutput();

function onInputData(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function populateMassageOutput() {
if (formData) {
        let { email, message } = form.elements;
        email.value = formData.email || '';
        message.value = formData.message || '';
      }
}

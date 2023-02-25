import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form = document.querySelector('.feedback-form');

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

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
// const LOCAL_KEY = 'feedback-form-state';
// const form = document.querySelector('.feedback-form');

// populateFeedbackForm();
// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onInputData, 500));

// function onFormSubmit(e) {
//   e.preventDefault();
//   const { email, message } = e.currentTarget.elements;
//   console.log({ email: email.value, message: message.value });
//   localStorage.removeItem(LOCAL_KEY);
//   e.currentTarget.reset();
// }

// function onInputData(e) {
//   let data = localStorage.getItem(LOCAL_KEY);
//   data = data ? JSON.parse(data) : {};
//   let { email, message } = form.elements;
//   data = {
//     email: email.value.trim(),
//     message: message.value.trim(),
//   };

//   // data[e.target.name] = e.target.value.trim(); // виводить в localStorage лише один ключ з значенням, якщо інший не заповнений
//   localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
// }

// function populateFeedbackForm() {
//   let data = localStorage.getItem(LOCAL_KEY);
//   if (data) {
//     data = JSON.parse(data);
//     Object.entries(data).forEach(([name, value]) => {
//       form.elements[name].value = value ?? '';
//     });
//   }
// }

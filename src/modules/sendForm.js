'use strict';
const sendForm = selector => {
  const errorMessage = 'Что-то пошло не так',
    successMessage = 'Спасибо! Скоро свяжемся';

  const form = document.querySelector(`${selector}`);

  const statusMessage = document.createElement('div');
  statusMessage.textContent = ``;
  statusMessage.style.fontSize = '2rem';
  statusMessage.style.color = 'white';

  debugger;

  form.addEventListener('submit', e => {
    e.preventDefault();
    form.appendChild(statusMessage);
    statusMessage.textContent = successMessage;
    const formData = new FormData(form);
    const body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then(response => {
        setTimeout(() => {
          form.removeChild(statusMessage);
        }, 5000);
        if (response.status !== 200)  throw new Error(response.statusText);
        statusMessage.textContent = successMessage;
        for (const key of form.elements) {
          if (key.matches('input')) key.value = '';
        }
      })
      .catch(error => {
        statusMessage.textContent = errorMessage;
        console.log(error);
      });

  });

  const postData = body => fetch('../server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

};

export default sendForm;
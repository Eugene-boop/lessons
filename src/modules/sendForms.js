'use strict';
const sendForms = () => {
  const send = (form) => {
    const errorMessage = 'Что-то пошло не так',
      successMessage = 'Спасибо! Скоро свяжемся',
      loadMessage = 'Загрузка...';

    const statusMessage = document.createElement('div');
    statusMessage.textContent = ``;
    statusMessage.style.fontSize = '2rem';
    statusMessage.style.color = 'white';
    form.appendChild(statusMessage);

    form.addEventListener('submit', e => {
      e.preventDefault();
      statusMessage.style.display = 'block';
      statusMessage.textContent = loadMessage;

      const formData = new FormData(form);
      const body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then(response => {
          if (response.status !== 200)  throw new Error(response.statusText);
          statusMessage.textContent = successMessage;
          form.querySelectorAll('input').forEach(item => {
            item.classList.remove('success');
            item.value = '';
          });
        })
        .catch(error => {
          statusMessage.textContent = errorMessage;
          console.log(error);
        })
        .finally( () => {
          setTimeout(() => {
            statusMessage.style.display = 'none';
          }, 5000);
        });



    });

    const postData = data => fetch('../server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    });
  };

  const forms = document.querySelectorAll('form');
  forms.forEach(item => {
    send(item);
  });
};

export default sendForms;
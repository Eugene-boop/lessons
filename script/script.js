'use strict';
window.addEventListener('DOMContentLoaded', () => {
  //  таймер
  const countTimer = deadline => {
    const timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    const getTimeRemaining = () => {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemain = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemain % 60),
        minutes = Math.floor((timeRemain / 60) % 60),
        hours = Math.floor(timeRemain / 60 / 60);

      return {
        timeRemain,
        hours,
        minutes,
        seconds
      };

    };
    const addZero = item => {
      if (item <= 0) return '00';
      if (item < 10) return '0' + item;
      else return item;
    };


    const updateClock = () => {
      const timer = getTimeRemaining();

      timerHours.textContent = addZero(timer.hours);
      timerMinutes.textContent = addZero(timer.minutes);
      timerSeconds.textContent = addZero(timer.seconds);
    };

    updateClock();
    const id = setInterval(() => {
      if (getTimeRemaining().seconds < 0) clearInterval(id);
      updateClock();
    }, 1000);
  };

  countTimer('February 20, 2020 00:00:00');

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');

    };

    btnMenu.addEventListener('click', handlerMenu);

    closeBtn.addEventListener('click', handlerMenu);

    menuItems.forEach(elem => { elem.addEventListener('click', handlerMenu); });

  };

  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content');

    popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (document.documentElement.clientWidth >= 768) {
          popupContent.style.top = `100%`;
          popupContent.style.opacity = `0`;
          animate({
            duration: 150,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              popupContent.style.top = `${20 / progress}%`;
              popupContent.style.opacity = `${progress}`;
            }
          });
        }
      });
    });
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    function animate({ duration, draw, timing }) {

      const start = performance.now();

      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration / 3;
        if (timeFraction > 1) timeFraction = 1;

        const progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }

      });
    }

  };

  togglePopUp();

  // плавная прокрутка
  document.querySelector('a[href="#service-block"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('service-block').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

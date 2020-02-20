window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  //  таймер 
  const countTimer = (deadline) => {
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
    const addZero = (item) => {
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

    const handlerMenu = (event) => {
      menu.classList.toggle('active-menu');
    };

    menu.addEventListener('click', (e) => {
      if (e.target.matches('menu a')) {
        handlerMenu();
      }
    });
    btnMenu.addEventListener('click', handlerMenu);
    
  };

  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (document.documentElement.clientWidth >= 768) {
          popupContent.style.top = `100%`;
          popupContent.style.opacity = `0`;
          animate({
            duration: 150,
            timing: function (timeFraction) {
              return timeFraction;
            },
            draw: function (progress) {
              popupContent.style.top = `${20/progress}%`;
              popupContent.style.opacity = `${progress}`;
            }
          });
        }
      });
    });

    function animate({
      duration,
      draw,
      timing
    }) {

      let start = performance.now();

      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration / 3;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);

        draw(progress);

        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }

      });
    }

    popup.addEventListener('click', (e) => {
      let target = e.target;

      if(target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else target = target.closest('.popup-content');
      
      if (!target) {
        popup.style.display = 'none';
      }
    });
  };

  togglePopUp();


  // табы

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = index => {
      tabContent.forEach((item, i) => {
        item.classList.add('d-none');
        tab[i].classList.remove('active');
        if (index === i) {
          item.classList.remove('d-none');
          tab[i].classList.add('active');
        }
      });
    };

    tabHeader.addEventListener('click', (e) => {
      let target = e.target;
          target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });

  };

  tabs();
});
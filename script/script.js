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
    const menu = document.querySelector('menu');

    document.addEventListener('click', e => {
      let target = e.target;
      target = target.closest('.menu') || target;

      if (target.matches('menu a') || target.matches('.menu')) {
        menu.classList.toggle('active-menu');
      } else target = target.closest('menu');

      if (!target) menu.classList.remove('active-menu');
    });
  };

  toggleMenu();

  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
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

    function animate({
      duration,
      draw,
      timing
    }) {

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

    popup.addEventListener('click', e => {
      let target = e.target;

      if (target.classList.contains('popup-close')) {
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

    tabHeader.addEventListener('click', e => {
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

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      dotUl = document.querySelector('.portfolio-dots'),
      slider = document.querySelector('.portfolio-content');

    const addDots = () => {
      let dotStr = '';
      for (let i = 0; i < slide.length; i++) {
        dotStr += '<li class="dot"></li>';
      }
      dotUl.insertAdjacentHTML("afterbegin", dotStr);
      dotUl.childNodes[0].classList.add('dot-active');
    };

    addDots();

    const dot = dotUl.childNodes;

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length) currentSlide = 0;
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    startSlide(1500);

    slider.addEventListener('click', event => {
      event.preventDefault();

      const target = event.target;

      if (!target.matches('#arrow-right, #arrow-left, .dot')) return;

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, ind) => {
          if (elem === target) {
            currentSlide = ind;
          }
        });
      }

      if (currentSlide >= slide.length) currentSlide = 0;
      if (currentSlide < 0) currentSlide = slide.length - 1;
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', e => {
      if (e.target.matches('.portfolio-btn')  ||
      event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', e => {
      if (e.target.matches('.portfolio-btn')  ||
      event.target.matches('.dot')) {
        startSlide();
      }
    });
  };

  slider();

  const changeImgs = () => {
    const row = document.querySelector('.command .container .row');
    let oldSrc;

    row.addEventListener('mouseover', e => {
      const target = e.target;
      oldSrc = target.getAttribute('src');
      if (target.matches('img')) {
        target.src = target.dataset.img;
      }
    });

    row.addEventListener('mouseout', e => {
      const target = e.target;
      if (target.matches('img')) {
        target.src = oldSrc;
      }
    });
  };

  changeImgs();

  const calc = (price = 100) => {
    const input = document.querySelectorAll('.calc-item[type="number"');

    input.forEach(elem => {
      let savedValue = '';
      elem.addEventListener('input', e => {
        const target = e.target;
        if (target.matches('.calc-item[type="number"')) {
          if (!target.value && savedValue.length === 1) savedValue = '';
          if (target.value) savedValue = target.value;
          target.value = savedValue.replace(/\D/g, '');
        }
      });
    });

    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue =  document.getElementById('total');

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = +calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (+calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = total;
    };
    calcBlock.addEventListener('input', e => {
      const target = e.target;

      if (target.matches('.calc-item')) {
        countSum();
      }
    });

  };

  calc();
});

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  //  таймер 
  const countTimer = (deadline) => {
    let timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemain = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemain % 60),
      minutes = Math.floor((timeRemain / 60) % 60),
      hours = Math.floor(timeRemain / 60 / 60);
      
      return {timeRemain, hours, minutes, seconds};

    }

    function updateClock() {
      const timer = getTimeRemaining();

      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;


    }
    updateClock();
    setInterval(updateClock, 1000);

  };

  countTimer('16 February 2020');
});
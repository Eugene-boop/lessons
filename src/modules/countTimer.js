'use strict';
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

export default countTimer;
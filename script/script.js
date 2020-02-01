(() => {
  'use strict';

  const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  const randNum = () => {
    return Math.floor(1 + Math.random() * 100);
  };

  const start = () => {
    let num = randNum();
    
    return function game() {
      let answer = prompt('Угадай число от 1 до 100', '');

      if (!isNumber(answer)) {
        if (answer === null) { 
          return 0; 
        }
        alert('Введи число!');
      } else {
        if (+answer === num) {
          alert('Вы угадали!');
          return 1;
        } else if (num < +answer) {
          alert('Загаданное число меньше');
        } else if (num > +answer)  {
          alert('Загаданное число больше');
        } 
      }

      game();
    };
  };

  let riddle = start();
  riddle();
  
})();
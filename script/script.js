(() => {
  'use strict';

  const isNum = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  const randNum = () => {
    return Math.floor(1 + Math.random() * 100);
  };

  const start = ((attempt = 10) => {
    let num = randNum(),
        attemptNow = 0;

    return function game() {
      let answer = prompt('Угадай число от 1 до 100', '');
      
      if (!isNum(answer)) {
        if (answer === null) { 
          alert('Прощай(');
          return 0; 
        }
        alert('Введи число!');
      } else {
        if (num > +answer) {
          alert(`Загаданное число больше, осталось попыток ${attempt - attemptNow - 1}`);
          attemptNow += 1;
        } else if (num < +answer) {
          alert(`Загаданное число меньше, осталось попыток ${attempt - attemptNow - 1}`);
          attemptNow += 1;
        } else if (+answer === num) {
          if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) { 
            num = randNum(); 
            attemptNow = 0;
            game(); 
          }
          alert('Прощай(');
          return 1;
        } 
      }

      if (attempt === attemptNow) {
        if (confirm('Попытки закончились, хотите еще?')) { 
          num = randNum(); 
          attemptNow = 0;
          game(); 
        }
        alert('Прощай(');
        return 0;
      }

      game();
    };

  })();

  start();

})();
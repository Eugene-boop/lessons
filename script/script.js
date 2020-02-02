(()=> {
  "use strict";

  let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  let now = new Date();

  for (let i = 1; i < week.length; i++) {
    if (now.getDay() === i || (i === 7 && now.getDay() === 0)) {
      document.write(`<b>${week[i]}</b>` + '<br>');
      continue;
    }  else if (i === 7 || i === 6) {
      document.write(`<i>${week[i]}</i>` + '<br>');
      continue;
    }
    document.write(week[i] + '<br>');
  }

})();
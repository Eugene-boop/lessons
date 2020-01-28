(()=> {
  "use strict";
  // 1 задание
  let lang = prompt('Выберите язык en или ru', ''),
      now = new Date(),
      namePerson = prompt('Хто я?', ''),
      dateArr = [
        ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      ];
  
  if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
  } else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  }
  switch (lang) {
    case 'ru':
      console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
      break;
    case 'en':
      console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  }
  //  странная реализация через многомерный массив
  console.log(dateArr[+(lang === 'en')][now.getDay()]);

  // 2 задание
  (namePerson === 'Артем') ? console.log('директор') : 
  (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');

})();
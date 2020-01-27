(()=> {
  "use strict";

  // 1 задание
  let lang = prompt('Выберите язык en или ru', '');
  
  if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
  } else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  }

  lang = prompt('Выберите язык en или ru', '');

  switch (lang) {
    case 'ru':
      console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
      break;
    case 'en':
      console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
  }

  lang = prompt('Выберите язык en или ru', '');

  //  магический многомерный массив остался мне не понятен
  arr = [['ru', 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],[]];
  console.log(arr);

  // 2 задание
  let namePerson = prompt('Хто я?', '');

  (namePerson === 'Артем') ? console.log('директор') : 
  (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');

})();
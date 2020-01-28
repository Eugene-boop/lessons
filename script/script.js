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

  //  магический многомерный массив остался мне не совсем понятен
  lang = prompt('Выберите язык en или ru', '');
  let dateArr = [
    ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  ];
  let now = new Date();
  console.log(dateArr[+(lang === 'en')][now.getDay()]);

  // 2 задание
  let namePerson = prompt('Хто я?', '');  

  (namePerson === 'Артем') ? console.log('директор') : 
  (namePerson === 'Максим') ? console.log('преподаватель') : console.log('студент');

})();
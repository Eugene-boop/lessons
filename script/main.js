(()=> {
  "use strict";
  
  const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'],
      
      hourVars = ['час', 'часа', 'часов'],
      minVars = ['минута', 'минуты', 'минут'],
      secVars = ['секунда', 'секунды', 'секунд'],
      timeH1 = document.querySelector('.timer');

  function num2str(n, text_forms) {
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    
    if (n > 10 && n < 20) {
        return text_forms[2];
    }
    
    if (n1 > 1 && n1 < 5) {
        return text_forms[1];
    }
    
    if (n1 == 1) {
        return text_forms[0];
    }
    
    return text_forms[2];
  }

  const showDate = () => {
    let now = new Date();
    timeH1.innerText = `Сегодня ${weekDays[now.getDay()]}, ${now.getDate()} ${months[now.getDate()]} ${now.getFullYear()} года, ${now.getHours()} 
    ${num2str(now.getHours(), hourVars)} ${now.getMinutes()} ${num2str(now.getMinutes(), minVars)} ${now.getSeconds()} ${num2str(now.getSeconds(), secVars)}`;
  };
  setInterval(showDate, 1000);

})();
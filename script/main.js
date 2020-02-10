(()=> {
  "use strict";
  
  const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
      months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'ноября', 'декабря'],
      
      hourVars = ['час', 'часа', 'часов'],
      minVars = ['минута', 'минуты', 'минут'],
      secVars = ['секунда', 'секунды', 'секунд'],
      timerA = document.querySelector('.timer'),
      timerB = document.querySelector('.timerB');

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

  function addZero(item) {
    if (item < 10) return '0' + item;
    else return item;
  }

  const showDate = () => {
    let now = new Date(),
        wd = now.getDay(),
        dd = now.getDate(),
        month = now.getMonth(),
        yy = now.getFullYear(),
        hh = now.getHours(),
        mm = now.getMinutes(),
        ss = now.getSeconds();

    timerA.innerText = `Сегодня ${weekDays[wd]}, ${dd} ${months[month]} ${yy} года, ${hh} ${num2str(hh, hourVars)} ${mm} ${num2str(mm, minVars)} ${ss} ${num2str(ss, secVars)}`;
    timerB.innerText = `${addZero(dd)}.${addZero(month + 1)}.${addZero(yy)} - ${addZero(hh)}:${addZero(mm)}:${addZero(ss  )}`;
  };
  setInterval(showDate, 1000);

})();
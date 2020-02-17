window.addEventListener('DOMContentLoaded', () => {

  const DateInfo = () => { 
    const wrap = document.querySelector('.wrap'),
    weekDays = ["воскресенье", "понедельник","вторник","среда","четверг","пятница","суббота"];

    const getTime = () => {
      const dateNow = new Date(),
      date = dateNow.toLocaleTimeString('en'),
      dateStop = new Date('31 December 2020').getTime(),
      dateNowMS = dateNow.getTime(),
      timeRemain = (dateStop - dateNowMS) / 1000,
      daysRemain = Math.floor(timeRemain / 60 / 60 / 24),
      hour = dateNow.getHours(),
      weekNum = dateNow.getDay();

      return {date, timeRemain, hour, weekNum, daysRemain};

    };

    const addZero = (item) => {
      if (item <= 0) return '00';
      if (item < 10) return '0' + item;
      else return item;
    };
    
    const dayTime = (hour) => (hour < 5) ? 'ночь' : (hour < 11) ? 'утро' : (hour < 17) ? 'день' : 'вечер';

    const showDate = () => {
      time = getTime();

      wrap.innerHTML = `Добрый ${dayTime(time.hour)} <br>
                        Сегодня: ${weekDays[time.weekNum]} <br>
                        Текущее время ${time.date} <br>
                        До нового года осталось: ${time.daysRemain} <br>`;
    };
    showDate();
    setInterval(showDate, 1000);
  };

  DateInfo();
});
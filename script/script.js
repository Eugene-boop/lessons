(()=> {
  "use strict";

  let money = +prompt('Ваш месячный доход?', ''),
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы зарассчитываемый период через запятую', '').toLowerCase().split(', '),
    deposit = !!confirm('Есть ли у вас депозит в банке'),
    mission = 100000,
    expenses1 = prompt('Введите обязательную статью расходов?', ''),
    amount1 = +prompt('Во сколько это обойдется?', ''),
    expenses2 = prompt('Введите обязательную статью расходов?', ''),
    amount2 = +prompt('Во сколько это обойдется?', ''),
    accumulatedMonth = getAccumulatedMonth(),
    budgetDay = Math.floor(accumulatedMonth / 30);

  const getStatusIncome = () => {
    if (budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (budgetDay > 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');
    } else {
      return ('Что-то пошло не так');
    }
  };

  function getExpensesMonth() {
    return amount1 + amount2;
  }

  function getAccumulatedMonth() {
    return money - getExpensesMonth();
  }

  // получаю количество месяцев для накопления цели 
  const getTargetMonth = () => {
    return Math.floor(mission / accumulatedMonth);
  };

  const showTypeOf = data => console.log(data, typeof(data));

  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);
  console.log('Сумма обязательных расходов', getExpensesMonth());
  console.log(addExpenses);
  console.log(`Цель будет достигнута за: ${getTargetMonth()} месяцев`);
  console.log('Бюджет на день: ', budgetDay);
  console.log( getStatusIncome() );
})();
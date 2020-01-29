(()=> {
  "use strict";

  const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let money,
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы зарассчитываемый период через запятую', '').toLowerCase().split(', '),
    deposit = !!confirm('Есть ли у вас депозит в банке'),
    mission = 100000,
    expenses = [],
    expensesAmount,
    accumulatedMonth,
    budgetDay;
    // amount1 = +prompt('Во сколько это обойдется?', ''),
    // amount2 = +prompt('Во сколько это обойдется?', ''),

  const start = () => {
    do {
      money = prompt('Ваш месячный доход?', '');
    } while (!isNumber(money));
  };

  start();

  const getStatusIncome = () => {
    if (budgetDay > 1200) {
      return ('У вас высокий уровень дохода');
    } else if (budgetDay >= 600) {
      return ('У вас средний уровень дохода');
    } else if (budgetDay > 0) {
      return ('К сожалению, у вас уровень дохода ниже среднего');
    } else {
      return ('Что-то пошло не так');
    }
  };

  function getExpensesMonth() {
    let sum = 0, amount = 0;

    for (let i = 0; i < 2; i++) {
      expenses[i] = prompt('Введите обязательную статью расходов?', '');
      do {
      amount = prompt('Во сколько это обойдется?', '');
      } while (!isNumber(amount));
      sum += +amount;
    }
    return sum;
  }

  expensesAmount = getExpensesMonth();

  function getAccumulatedMonth() {
    return (+money - expensesAmount);
  }

  accumulatedMonth = getAccumulatedMonth();
  // budgetDay = Math.floor(accumulatedMonth / 30);

  const getTargetMonth = () => {
    if (accumulatedMonth < 0) {
      return 'Цель не будет достигнута';
    }
    return `Цель будет достигнута за ${Math.floor(mission / accumulatedMonth)} месяца`;
  };

  const showTypeOf = data => console.log(data, typeof(data));

  showTypeOf(money);
  showTypeOf(income);
  showTypeOf(deposit);
  console.log('Дополнительные', addExpenses);
  console.log('Обязательные расходы', expenses);
  console.log('Сумма обязательных расходов', expensesAmount);
  console.log(getTargetMonth());
  // console.log('Бюджет на день: ', budgetDay); 
  console.log( getStatusIncome() );
  
})();
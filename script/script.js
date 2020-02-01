(()=> {
  "use strict";

  const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let money,
    start = () => {
      do {
        money = prompt('Ваш месячный доход?', '');
      } while (!isNumber(money));
    };

  start();

  let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 4,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
      this.addExpenses = prompt('Перечислите возможные расходы зарассчитываемый период через запятую', '').toLowerCase().split(', ');
      this.deposit = !!confirm('Есть ли у вас депозит в банке');
    },
    getExpensesMonth: function() {
      let sum = 0, amount = 0;
  
      for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?', '');
        do {
        amount = prompt('Во сколько это обойдется?', '');
        } while (!isNumber(amount));
        sum += +amount;
      }
      return sum;
    },
    getAccumulatedMonth: function() {
      return (+money - expensesAmount);
    },
    getStatusIncome: () => {
      if (budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
      } else if (budgetDay >= 600) {
        return ('У вас средний уровень дохода');
      } else if (budgetDay > 0) {
        return ('К сожалению, у вас уровень дохода ниже среднего');
      } else {
        return ('Что-то пошло не так');
      }
    },
    getTargetMonth: () => {
      if (accumulatedMonth < 0) {
        return 'Цель не будет достигнута';
      }
      return `Цель будет достигнута за ${Math.floor(appData.mission / accumulatedMonth)} месяца`;
    },


  };



   
  let income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы зарассчитываемый период через запятую', '').toLowerCase().split(', '),
    deposit = !!confirm('Есть ли у вас депозит в банке'),
    mission = 100000,
    expenses = [],
    expensesAmount,
    accumulatedMonth,
    budgetDay;
    // amount1 = +prompt('Во сколько это обойдется?', ''),
    // amount2 = +prompt('Во сколько это обойдется?', ''),





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

  expensesAmount = appData.getExpensesMonth();

  function getAccumulatedMonth() {
    return (+money - expensesAmount);
  }

  accumulatedMonth = appData.getAccumulatedMonth();
  budgetDay = Math.floor(accumulatedMonth / 30);

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


  const getTargetMonth = () => {
    if (accumulatedMonth < 0) {
      return 'Цель не будет достигнута';
    }
    return `Цель будет достигнута за ${Math.floor(appData.mission / accumulatedMonth)} месяца`;
  };

  console.log('Дополнительные', addExpenses);
  console.log('Обязательные расходы', expenses);
  console.log('Сумма обязательных расходов', expensesAmount);
  console.log(appData.getTargetMonth());
  // console.log('Бюджет на день: ', budgetDay); 
  console.log( appData.getStatusIncome() );
  
})();
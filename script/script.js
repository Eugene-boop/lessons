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
      this.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '').toLowerCase().split(', ');
      this.deposit = !!confirm('Есть ли у вас депозит в банке');
      
      for (let i = 0; i < 2; i++) {
        let question =  prompt('Введите обязательную статью расходов?', ''),
        answer;
        do {
        answer = prompt('Во сколько это обойдется?', '');
        this.expenses[question] = +answer;
        } while (!isNumber(answer));
      }
    },
    getExpensesMonth: function() {
      for (let key in this.expenses) {
        this.expensesMonth += this.expenses[key];
      }
    },
    getBudget: function() {
      this.budgetMonth = +money - this.expensesMonth;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
    getStatusIncome: function() {
      if (this.budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
      } else if (this.budgetDay >= 600) {
        return ('У вас средний уровень дохода');
      } else if (this.budgetDay > 0) {
        return ('К сожалению, у вас уровень дохода ниже среднего');
      } else {
        return ('Что-то пошло не так');
      }
    },
    getTargetMonth: function() {
      if (this.budgetMonth < 0) {
        return -1;
      }
      
      return Math.floor(this.mission / this.budgetMonth);
    },


  };

  appData.asking();
  appData.getExpensesMonth();
  appData.getBudget();
  
  console.log(appData.expensesMonth);
  console.log(appData.getTargetMonth());
  console.log(appData.getStatusIncome());

  console.log('Наша программа включает в себя данные: ');
  for (let key in appData) {
    console.log(key, appData[key]);
  }

})();
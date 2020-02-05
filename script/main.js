(()=> {
  "use strict";
  
  let countBtn = document.getElementById('start'),
    plusBtnIncome = document.getElementsByTagName('button')[0],
    plusBtnExpenses = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    addIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgDayVal = document.getElementsByClassName('budget_day-value'),
    expMonthVal = document.getElementsByClassName('expenses_month-value'),
    addIncomeVal = document.getElementsByClassName('additional_income-value'),
    addExpVal = document.getElementsByClassName('additional_expenses-value'),
    incPerVal = document.getElementsByClassName('income_period-value'),
    targMonthVal = document.getElementsByClassName('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incTitle = document.querySelector('.income-title'),
    incAmount = document.querySelector('.income-amount'),
    addIncomeItems = document.querySelectorAll('.additional_income-item'),
    expTitle = document.querySelector('.expenses-title'),
    expAmount = document.querySelector('.expenses-amount'),
    addExpTitile = document.querySelector('.additional_expenses-title'),
    targAmount = document.querySelector('.target-amount'),
    perSelect = document.querySelector('.period-select');
    
    
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
      if (confirm('Есть ли у вас дополнительный заработок?')) {
        let itemIncome, cashIncome;

        do {
          itemIncome = prompt('Какой у вас дополнительный заработок?', '');
        } while (isNumber(itemIncome) || !itemIncome);
        do {
          cashIncome = prompt('Сколько приносит дополнительный заработок в месяц?', '');
        } while (!isNumber(cashIncome));

        this.income[itemIncome] = cashIncome;
      
      }
      
      this.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '').toLowerCase().split(', ');
      this.deposit = confirm('Есть ли у вас депозит в банке');
      
      for (let i = 0; i < 2; i++) {
        let itemExpenses, cashExpenses;

        do {
          itemExpenses =  prompt('Введите обязательную статью расходов?', '');
        } while (isNumber(itemExpenses) || !itemExpenses);
        do {
          cashExpenses = prompt('Во сколько это обойдется?', '');
        } while (!isNumber(cashExpenses));
        
        this.expenses[itemExpenses] = +cashExpenses;
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
    getInfoDeposit: function() {
      if (this.deposit) {
        let percentDeposit, moneyDeposit;

        do {
          percentDeposit = prompt('Какой годовой процент?', '5');
        } while (!isNumber(percentDeposit));
        do {
          moneyDeposit = prompt('Какая сумма заложена', '60000');
        } while (!isNumber(moneyDeposit));

        this.percentDeposit = percentDeposit;
        this.moneyDeposit = moneyDeposit;

      }
    },
    calcSavedMoney: function() {
      return this.budgetMonth * this.period;
    }
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

  appData.getInfoDeposit();
  console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());  
  
  console.log(appData.addExpenses.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(', '));

})();
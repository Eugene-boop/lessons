document.addEventListener('DOMContentLoaded', ()=> {
  "use strict";
  
  let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName('button')[0],
    expensesPlus = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    addIncomeItem = document.querySelectorAll('.additional_income-item'),
    budgMonthVal = document.getElementsByClassName('budget_month-value')[0],
    budgDayVal = document.getElementsByClassName('budget_day-value')[0],
    expMonthVal = document.getElementsByClassName('expenses_month-value')[0],
    addIncomeVal = document.getElementsByClassName('additional_income-value')[0],
    addExpVal = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodVal = document.getElementsByClassName('income_period-value')[0],
    targMonthVal = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    addIncomeItems = document.querySelectorAll('.additional_income-item'),
    expTitle = document.querySelector('.expenses-title'),
    expAmount = document.querySelector('.expenses-amount'),
    addExpTitle = document.querySelector('.additional_expenses-title'),
    targAmount = document.querySelector('.target-amount'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    inputsAll = document.querySelectorAll('input[type=text]'),
    inputsL = salaryAmount.parentNode.parentNode.querySelectorAll('input[type=text]'),
    expensesItemsArr = [],
    incomeItemsArr = [];
    
  start.disabled = true;

  const isNumber = n => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    incomeMonth: 0,
    start: function () {
      this.budget = salaryAmount.value;
      start.disabled = true;
      
      this.getExpenses();
      this.getExpensesMonth();
      this.getIncome();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.showResult();

      start.setAttribute('style', 'display:none;');
      cancel.setAttribute('style', 'display:block;');
      inputsL = salaryAmount.parentNode.parentNode.querySelectorAll('input[type=text]');
      inputsAll = document.querySelectorAll('input[type=text]');
      inputsL.forEach((item) => {
          item.setAttribute('disabled', '');
          item.setAttribute('style', 'background-color: #f3f3f3;');
      });
      incomePlus.setAttribute('disabled', '');
      expensesPlus.setAttribute('disabled', '');
    },
    reset: function() {
      this.income = {};
      this.addIncome = [];
      this.expenses = {};
      this.addExpenses = [];
      this.deposit = false;
      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.expensesMonth = 0;
      this.incomeMonth = 0;

      inputsL = salaryAmount.parentNode.parentNode.querySelectorAll('input[type=text]');
      inputsL.forEach((item) => {
          item.removeAttribute('disabled', '');
          item.removeAttribute('style', 'background-color: #f3f3f3;');
      });
      inputsAll = document.querySelectorAll('input[type=text]');
      inputsAll.forEach((item) => {
        item.value = '';
      });

      cancel.setAttribute('style', 'display:none;');
      start.setAttribute('style', 'display:block;');

      incomePlus.style.display = 'block';
      expensesPlus.style.display = 'block';


      for (let i = 1; i < expensesItemsArr.length; i++ ) {
        expensesItemsArr[0].parentNode.removeChild(expensesItemsArr[i]);
        if (i === expensesItemsArr.length - 1) expensesItemsArr.splice(0, i);
      }
      for (let i = 1; i < incomeItemsArr.length; i++ ) {
        incomeItemsArr[0].parentNode.removeChild(incomeItemsArr[i]);
        if (i === incomeItemsArr.length - 1) incomeItemsArr.splice(0, i);
      }
      incomePlus.removeAttribute('disabled', '');
      expensesPlus.removeAttribute('disabled', '');
    },
    addExpensesBlock: function() {
      const cloneExpensesItem = expensesItems[0].cloneNode(true);
      cloneExpensesItem.childNodes[1].value = '';
      cloneExpensesItem.childNodes[3].value = '';
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3) expensesPlus.style.display = 'none';
      expensesItemsArr = Array.prototype.slice.call(expensesItems);
    },
    addIncomeBlock: function() {
      const cloneIncomeItem = incomeItems[0].cloneNode(true);
      cloneIncomeItem.childNodes[1].value = '';
      cloneIncomeItem.childNodes[3].value = '';
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      if (incomeItems.length === 3) incomePlus.style.display = 'none';
      incomeItemsArr = Array.prototype.slice.call(incomeItems);
    },
    getExpenses: function() {
      expensesItems.forEach((item) => {
          let itemExpenses = item.querySelector('.expenses-title').value,
              cashExpenses = item.querySelector('.expenses-amount').value;
          if (!!itemExpenses.trim() && !!cashExpenses.trim()) {
            this.expenses[itemExpenses] = cashExpenses;
          }
      });
    },
    getIncome: function() {
      incomeItems.forEach((item) => {
          let itemIncome = item.querySelector('.income-title').value,
              cashIncome = item.querySelector('.income-amount').value;
          if (!!itemIncome.trim() && !!cashIncome.trim()) {
            appData.income[itemIncome] = cashIncome;
          }
      });

      for (let key in this.income) {
        this.incomeMonth += +this.income[key];
      }
    },
    showResult: function() {
      budgMonthVal.value = this.budgetMonth;
      budgDayVal.value = this.budgetDay;
      expMonthVal.value = this.expensesMonth;
      addExpVal.value = this.addExpenses.join(', ');
      addIncomeVal.value = this.addIncome.join(', ');
      targMonthVal.value = this.getTargetMonth();
      incomePeriodVal.value = this.calcPeriod();
      periodSelect.addEventListener('input', () => {
        incomePeriodVal.value = this.calcPeriod();
      });
    },
    getAddExpenses: function() {
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach((item) => {
        item = item.trim();
        if (!!item) {
          appData.addExpenses.push(item);
        }
      });
    },
    getAddIncome: function() {
      addIncomeItems.forEach((item) => {
        let itemValue = item.value.trim();
        if (!!itemValue) {
          this.addIncome.push(itemValue);
        }
      });
    },
    setPeriod: function() {
      periodAmount.textContent = periodSelect.value;
    },
    asking: function() {
  
      this.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '').toLowerCase().split(', ');
      this.deposit = confirm('Есть ли у вас депозит в банке');
      
    },
    getExpensesMonth: function() {
      for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
      }
    },
    getBudget: function() {
      this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth;
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
      if (!targAmount.value.trim() || !isNumber(targAmount.value.trim())) {
        return 'Введите число';
      }
      return Math.ceil(targAmount.value / this.budgetMonth);
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
    calcPeriod: function() {
      return this.budgetMonth * periodSelect.value;
    }
  };


  
  // console.log(appData.expensesMonth);
  // console.log(appData.getTargetMonth());
  // console.log(appData.getStatusIncome());

  // console.log('Наша программа включает в себя данные: ');
  // for (let key in appData) {
  //   console.log(key, appData[key]);
  // }

  // appData.getInfoDeposit();
  // console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());  
  
  // console.log(appData.addExpenses.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(', '));
  start.addEventListener('click', appData.start.bind(appData));

  cancel.addEventListener('click', appData.reset.bind(appData));

  expensesPlus.addEventListener('click', appData.addExpensesBlock.bind(appData));

  incomePlus.addEventListener('click', appData.addIncomeBlock.bind(appData));

  periodSelect.addEventListener('input', appData.setPeriod.bind(appData));

  salaryAmount.addEventListener('input', () => {
    start.disabled = !salaryAmount.value.trim() || !isNumber(salaryAmount.value.trim());
  });

});
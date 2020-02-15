document.addEventListener('DOMContentLoaded', ()=> {
  "use strict";

  const start = document.getElementById('start'),
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
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodAmount = document.querySelector('.period-amount'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');

  let expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    inputsAll = document.querySelectorAll('input[type=text]'),
    inputsL = salaryAmount.parentNode.parentNode.querySelectorAll('input[type=text]'),
    expensesItemsArr = [],
    incomeItemsArr = [];

  class AppData {
    constructor() {
      this.income =  {};
      this.addIncome =  [];
      this.expenses =  {};
      this.addExpenses =  [];
      this.deposit =  false;
      this.budget =  0;
      this.budgetDay =  0;
      this.budgetMonth =  0;
      this.expensesMonth =  0;
      this.incomeMonth =  0;
    }
    check() {
      start.disabled = !salaryAmount.value.trim() || !this.isNum(salaryAmount.value.trim());
    }
  
    reset() {
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
      depositCheck.disabled = false;
      depositCheck.checked = false; 
      depositBank.style.display = '';
      depositBank.disabled = false;
      depositBank.value = '';
    }
  
    addExpensesBlock() {
      const cloneExpensesItem = expensesItems[0].cloneNode(true);
      cloneExpensesItem.childNodes[1].value = '';
      cloneExpensesItem.childNodes[3].value = '';
      expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if (expensesItems.length === 3) expensesPlus.style.display = 'none';
      expensesItemsArr = Array.prototype.slice.call(expensesItems);
    }
  
    addIncomeBlock() {
      const cloneIncomeItem = incomeItems[0].cloneNode(true);
      cloneIncomeItem.childNodes[1].value = '';
      cloneIncomeItem.childNodes[3].value = '';
      incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
      incomeItems = document.querySelectorAll('.income-items');
      if (incomeItems.length === 3) incomePlus.style.display = 'none';
      incomeItemsArr = Array.prototype.slice.call(incomeItems);
    }
  
    getExpenses() {
      expensesItems.forEach((item) => {
          const itemExpenses = item.querySelector('.expenses-title').value,
              cashExpenses = item.querySelector('.expenses-amount').value;
          if (!!itemExpenses.trim() && !!cashExpenses.trim()) {
            this.expenses[itemExpenses] = cashExpenses;
          }
      });
    }
  
    getIncome() {
      incomeItems.forEach((item) => {
          const itemIncome = item.querySelector('.income-title').value,
              cashIncome = item.querySelector('.income-amount').value;
          if (!!itemIncome.trim() && !!cashIncome.trim()) {
            this.income[itemIncome] = cashIncome;
          }
      });
  
      for (let key in this.income) {
        this.incomeMonth += +this.income[key];
      }
    }
  
    showResult() {
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
    }
  
    getAddExpenses() {
      const addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach((item) => {
        item = item.trim();
        if (!!item) {
          this.addExpenses.push(item);
        }
      });
    }
  
    getAddIncome() {
      addIncomeItems.forEach((item) => {
        let itemValue = item.value.trim();
        if (!!itemValue) {
          this.addIncome.push(itemValue);
        }
      });
    }
  
    setPeriod() {
      periodAmount.textContent = periodSelect.value;
    }
  
    getExpensesMonth() {
      for (let key in this.expenses) {
        this.expensesMonth += +this.expenses[key];
      }
    }
  
    getBudget() {
      const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
      this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
    }
  
    getStatusIncome() {
      if (this.budgetDay > 1200) {
        return ('У вас высокий уровень дохода');
      } else if (this.budgetDay >= 600) {
        return ('У вас средний уровень дохода');
      } else if (this.budgetDay > 0) {
        return ('К сожалению, у вас уровень дохода ниже среднего');
      } else {
        return ('Что-то пошло не так');
      }
    }
  
    getTargetMonth() {
      if (!targAmount.value.trim() || !this.isNum(targAmount.value.trim())) {
        return 'Введите число';
      }
      return Math.ceil(targAmount.value / this.budgetMonth);
    }
  
    calcPeriod() {
      return this.budgetMonth * periodSelect.value;
    }
  
    depositValueCheck() {
      if (depositPercent.value > 100 || depositPercent.value < 0) {
        start.disabled = true;
        alert('Введите корректное значение в поле проценты');
      } else {
      start.disabled = false;
      }
    }

    start() {
      this.budget = salaryAmount.value;
      start.disabled = true;
      
  
      this.getExpenses();
      this.getExpensesMonth();
      this.getIncome();
      this.getAddExpenses();
      this.getAddIncome();
      this.getInfoDeposit();
      this.getBudget();
      this.showResult();
  
      start.setAttribute('style', 'display:none;');
      cancel.setAttribute('style', 'display:block;');
      inputsL = salaryAmount.parentNode.parentNode.querySelectorAll('input[type=text]');
      inputsAll = document.querySelectorAll('input[type=text]');
      inputsL.forEach((item) => {
          item.setAttribute('disabled', '');
          item.style.backgroundColor = '#f3f3f3';
      });
      incomePlus.setAttribute('disabled', '');
      expensesPlus.setAttribute('disabled', '');
      depositCheck.disabled = true; 
      depositBank.disabled = true;
    }
    
    getInfoDeposit() {
      if (this.deposit) {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposit = depositAmount.value;
      }
    }

    changePercent() {
      const valueSelect = this.value;
      if (valueSelect === 'other') {
        depositPercent.style.display = 'inline-block';
      } else {
        depositPercent.style.display = '';
        depositPercent.value = valueSelect;
      }
    }

    depositHadler() {
      if (depositCheck.checked) {
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        this.deposit = true;
        depositBank.addEventListener('change', this.changePercent);
      } else {
        depositBank.style.display = '';
        depositAmount.style.display = '';
        depositBank.value = '';
        depositAmount.value = '';
        this.deposit = false;
        depositBank.removeEventListener('change', this.changePercent);
      }
    }

    eventsListeners() {
      start.disabled = true;
      start.addEventListener('click', this.start.bind(this));
      cancel.addEventListener('click', this.reset.bind(this));
      expensesPlus.addEventListener('click', this.addExpensesBlock.bind(this));
      incomePlus.addEventListener('click', this.addIncomeBlock.bind(this));
      periodSelect.addEventListener('input', this.setPeriod.bind(this));
      salaryAmount.addEventListener('input', this.check.bind(this));
      depositCheck.addEventListener('change', this.depositHadler.bind(this));
      depositPercent.addEventListener('input', this.depositValueCheck);
    }

    isNum(n) { 
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }

  

  const appData = new AppData();

  appData.eventsListeners();

});
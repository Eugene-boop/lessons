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
    periodAmount = document.querySelector('.period-amount');
    
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
    }
  
    addExpIncBlock(itemsArr) {
      let items = document.querySelectorAll(`.${this.classList[1].split('_')[0]}-items`);
      const cloneIncomeItem = items[0].cloneNode(true);
      cloneIncomeItem.childNodes[1].value = '';
      cloneIncomeItem.childNodes[3].value = '';
      items[0].parentNode.insertBefore(cloneIncomeItem, this);
      items = document.querySelectorAll(`.${this.classList[1].split('_')[0]}-items`);
      if (items.length === 3) this.style.display = 'none';
      itemsArr = Array.prototype.slice.call(items);
    }

    getExpInc() {
      
      const count = item => {
        const startStr = item.className.split('-')[0],
        itemTitle = item.querySelector(`.${startStr}-title`).value,
        itemAmount = item.querySelector(`.${startStr}-amount`).value;
        if (!!itemTitle.trim() && !!itemAmount.trim()) {
          this[startStr][itemTitle] = itemAmount;
        }
      };

      incomeItems.forEach(count);
      expensesItems.forEach(count);
      
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
  
    getAddExpInc() {

      const additionalExpensesItems = document.querySelectorAll('.additional_expenses-item');

      const fillArr = (item) => {
        let itemValue = Array.prototype.slice.call(item).map((i) => i.value);
        let arrName = `${item[0].className.split('_')[1].split('-')[0]}`;
        arrName = `add${arrName[0].toUpperCase() + arrName.slice(1)}`;
        itemValue.forEach((i) => {
          if (!!i) {
            i = i.split(',');
            console.log(item);
            this[arrName].push(i);
            
          }
        });
        
      };

      fillArr(additionalExpensesItems);
      fillArr(addIncomeItems);
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
      this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth;
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
  
    start() {
      this.budget = salaryAmount.value;
      start.disabled = true;
  
 
      this.getExpInc();
      this.getExpensesMonth();
      this.getAddExpInc();
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
    }
  
    eventsListeners() {
      start.disabled = true;
      start.addEventListener('click', this.start.bind(this));
      cancel.addEventListener('click', this.reset.bind(this));
      expensesPlus.addEventListener('click', this.addExpIncBlock.bind(expensesPlus, expensesItemsArr));
      incomePlus.addEventListener('click', this.addExpIncBlock.bind(incomePlus, incomeItemsArr));
      periodSelect.addEventListener('input', this.setPeriod.bind(this));
      salaryAmount.addEventListener('input', this.check.bind(this));
    }

    isNum(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }

  

  const appData = new AppData();

  appData.eventsListeners();

});
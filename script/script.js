let money = 24000,
  income = 'фриланс',
  addExpenses = 'Интернет, Проезд, Тренажерка',
  deposit = true,
  mission = 100000,
  period = 11,
  budgetDay = money / 30;

console.log('money: ', typeof money);
console.log('income: ', typeof income);
console.log('deposit: ', typeof deposit);
console.log('длина addExpenses:', addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
console.log('addExpenses как массив: ', addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', budgetDay);
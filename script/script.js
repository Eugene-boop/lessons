(()=> {
  "use strict";

  let money = prompt('Ваш месячный доход?', ''),
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы зарассчитываемый период через запятую', ''),
    deposit = !!confirm('Есть ли у вас депозит в банке'),
    mission = 100000,

    expenses1 = prompt('Введите обязательную статью расходов?', ''),
    amount1 = +prompt('Во сколько это обойдется?', ''),
    expenses2 = prompt('Введите обязательную статью расходов?', ''),
    amount2 = +prompt('Во сколько это обойдется?', ''),

    budgetMonth = +money - amount1 - amount2,
    period = Math.ceil(mission / budgetMonth),
    budgetDay = Math.floor(budgetMonth / 30);

  console.log('money: ', typeof money);
  console.log('income: ', typeof income);
  console.log('deposit: ', typeof deposit);
  console.log('длина addExpenses:', addExpenses.length);
  console.log(`Период равен ${period} месяцев`);
  console.log(`Цель заработать ${mission} рублей`);
  console.log(addExpenses.toLowerCase().split(', '));
  console.log('Бюджет на месяц: ', budgetMonth);
  console.log('Бюджет на день: ', budgetDay);
  console.log(`Цель будет достигнута за: ${period} месяцев`);
  console.log('Бюджет на день: ', budgetDay);

  if (budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
  } else if (budgetDay > 600 && budgetDay !== 1200) {
    console.log('У вас средний уровень дохода');
  } else if (budgetDay > 0 && budgetDay !== 600) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
  }
  switch (budgetDay) {
    case 1200:
      console.log('Вы на пути к богатству, но провинциалы все еще тянут вас вниз');
      break;
    case 600:
      console.log('Теперь вы гордый середнячок, не меньше, не больше!'); 
      break;
    case 0:
      console.log('Ролтон и трубы ваш выбор!');
  }

})();
'use strict';
const calc = (price = 100) => {
  const input = document.querySelectorAll('.calc-item[type="number"');

  input.forEach(elem => {
    let savedValue = '';
    elem.addEventListener('input', e => {
      const target = e.target;
      if (target.matches('.calc-item[type="number"')) {
        if (!target.value && savedValue.length === 1) savedValue = '';
        if (target.value) savedValue = target.value;
        target.value = savedValue.replace(/\D/g, '');
      }
    });
  });

  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue =  document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = +calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += (+calcCount.value - 1) / 10;
    }
    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }
    if (typeValue && squareValue && +calcDay.value.trim() && +calcCount.value.trim()) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }
    totalValue.textContent = Math.ceil(total);
  };
  calcBlock.addEventListener('change', e => {
    const target = e.target;

    if (target.matches('.calc-item')) {
      countSum();
    }
  });

};

export default calc;
'use strict';
const forbidInput = (pattern, selector) => {
  selector.forEach((elem, i) => {
    const inputs = document.querySelectorAll(elem);
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(pattern[i], '');
      });
    });
  });
};

export default forbidInput;
let num = 266219,
  accum = 1;

for (let i = 0; i < String(num).length; i++) {
  accum *= String(num)[i];
}

console.log('Произведение цифр числа 266219:', accum);

let accumPow = accum ** 3;

console.log('Первые две цифры возведенного в куб произведения:', +String(accumPow).slice(0,2));

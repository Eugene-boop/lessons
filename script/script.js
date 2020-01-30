(()=> {
  "use strict";

  // 1 задание
  let arr = ['3494841839', '25019423', '981284856', '487922', '32975162', '57334982', '2786132'];
  arr.forEach(item => {
    if (item.startsWith('2') || item.startsWith('4')) {
      console.log(item);
    }
  });

  // 2 задание
  console.log(`Простые числа:`);
  for (let i = 1; i <101; i++){
    for (let j = 1; j <= i; j++) {
      if (j === i) { 
        console.log(`${i} - Делители этого числа: 1 и ${i}`);
      } else if (i % j === 0 && j !== 1) {
        break;
      }
    }
  }
  
})();
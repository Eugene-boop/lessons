(()=> {
  "use strict";

  const trim30 = string => {
    if (typeof(string) !== 'string'){
      return 'Введите строку!';
    }
    string = string.trim();
    if (string.length > 30) {
      return (string.slice(0,30) + '...');
    } else {
      return (string);
    }
  };
  
})();
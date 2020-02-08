const booksWrap = document.querySelector('.books'),
    books = document.getElementsByClassName('book'),
    body = document.getElementsByTagName('body')[0],
    ad = document.querySelector('.adv');

// восстанавливаю порядок книг
booksWrap.insertBefore(books[1], books[0]);
booksWrap.insertBefore(books[4], books[3]);
books[5].insertAdjacentElement('afterend', books[2]);
// меняю фон
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');
// поправил заголовок
books[2].getElementsByTagName('a')[0].textContent = 'Книга 3. this и Прототипы Объектов';
// удалил рекламу
body.removeChild(ad);
// меняю порядок глав
const book2List = books[1].getElementsByTagName('li'),
    book5List = books[4].getElementsByTagName('li'),
    book6List = books[5].getElementsByTagName('li');

book2List[3].insertAdjacentElement('afterend', book2List[6]);
book2List[4].insertAdjacentElement('afterend', book2List[8]);
book2List[9].insertAdjacentElement('afterend', book2List[2]);

book5List[1].insertAdjacentElement('afterend', book5List[9]);
book5List[2].insertAdjacentElement('afterend', book5List[4]);
book5List[3].insertAdjacentElement('afterend', book5List[5]);
book5List[8].insertAdjacentElement('afterend', book5List[6]);
// добавляю главу
book6List[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');

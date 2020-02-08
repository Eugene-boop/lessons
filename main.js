const booksWrap = document.querySelector('.books'),
    books = document.getElementsByClassName('book'),
    body = document.getElementsByTagName('body')[0],
    ad = document.querySelector('.adv');

// восстанавливаю порядок книг
booksWrap.insertBefore(books[1], books[0]);
booksWrap.insertBefore(books[4], books[3]);
books[5].insertAdjacentElement('afterend', books[2]);

body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

books[2].getElementsByTagName('a')[0].textContent = 'Книга 3. this и Прототипы Объектов';

body.removeChild(ad);

const book2Li = books[1].getElementsByTagName('li'),
    book5Li = books[4].getElementsByTagName('li'),
    book6Li = books[5].getElementsByTagName('li');

book2Li[3].insertAdjacentElement('afterend', book2Li[6]);
book2Li[4].insertAdjacentElement('afterend', book2Li[8]);
book2Li[9].insertAdjacentElement('afterend', book2Li[2]);

book5Li[1].insertAdjacentElement('afterend', book5Li[9]);
book5Li[2].insertAdjacentElement('afterend', book5Li[4]);
book5Li[3].insertAdjacentElement('afterend', book5Li[5]);
book5Li[8].insertAdjacentElement('afterend', book5Li[6]);

book6Li[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');

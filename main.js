let booksWrap = document.querySelector('.books'),
    books = document.getElementsByClassName('book'),
    body = document.getElementsByTagName('body')[0];

console.log(booksWrap);
// восстанавливаю порядок книг
booksWrap.insertBefore(books[1], books[0]);
booksWrap.insertBefore(books[4], books[3]);
books[5].insertAdjacentElement('afterend', books[2]);

body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg);');

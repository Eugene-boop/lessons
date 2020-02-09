'use script';

const btn = document.querySelector('.button'),
    body = document.getElementsByTagName('body')[0],
    colorTitle = document.querySelector('.color'),
    newColor = () => {
      let color = '#';
      for (let i = 0; i < 6; i++) {
        let rand = Math.floor(Math.random() * 16);
        color += rand.toString(16);
      }
      return color;
    },
    changeColor = () => {
      color = newColor();
      colorTitle.textContent = color;
      body.setAttribute('style', `background-color: ${color};`);
      btn.setAttribute('style', `color: ${color};`);
    };


btn.addEventListener('click', changeColor);
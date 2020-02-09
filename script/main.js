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
      body.setAttribute('style', `transition: 0.2s; background-color: ${color};`);
      btn.setAttribute('style', `transition: 0.2s; color: ${color};`);
    };

document.addEventListener('DOMContentLoaded', changeColor);
btn.addEventListener('click', changeColor);
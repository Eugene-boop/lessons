'use strict';
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise/auto';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImgs from './modules/changeImgs';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import forbidInput from './modules/forbidInput';
import smoothScroll from './modules/smoothScroll';

document.addEventListener('DOMContentLoaded', () => {
  //  таймер
  countTimer('March 7, 2020 15:00:00');
  // Меню
  toggleMenu();
  // popup
  togglePopUp();
  // табы
  tabs();
  // слайдер
  slider();
  // изменение при наведении
  changeImgs();
  // калькулятор
  calc();
  // отправить формы
  sendForm('#form1');
  sendForm('#form2');
  sendForm('#form3');
  // запрет на ввод
  forbidInput(
    [/[^\d|+]/ig, /[^А-ЯЁ\s]/ig],
    ['input[type="tel"]', 'input[type="text"]']
  );
  // плавная прокрутка
  smoothScroll('a[href="#service-block"]', 'service-block');
});

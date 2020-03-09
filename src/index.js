'use strict';
import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise/auto';
import 'fetch-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();
import 'element-matches-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeImgs from './modules/changeImgs';
import calc from './modules/calc';
import sendForms from './modules/sendForms';
import forbidInput from './modules/forbidInput';
import smoothScroll from './modules/smoothScroll';

document.addEventListener('DOMContentLoaded', () => {
  //  таймер
  countTimer('March 11, 2020 15:00:00');
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
  sendForms();
  // запрет на ввод
  forbidInput(
    [/[^\d|+]/ig, /[A-Z\d]/ig],
    ['input[type="tel"]', 'input[type="text"]']
  );
  // плавная прокрутка
  smoothScroll('a[href="#service-block"]', 'service-block');
	
});
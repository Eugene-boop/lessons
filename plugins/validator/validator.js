'use strict';
export default class Validator {
  constructor({ selector, pattern, method }) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item => item.tagName.toLowerCase() !== 'button' &&
      item.type !== 'button');
    this.error = new Set();
    this.sendBtn = this.form.querySelector('button');
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
    this.form.addEventListener('submit', e => {
      this.elementsForm.forEach(elem => this.checkIt({  target: elem }));
      
      if (this.error.size) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    });
  }

  isValid(elem) {
    const validatorMethod = {
      notEmpty(elem) {
        if (!elem.value.trim()) {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
        return pattern.test(elem.value);
      }
    };

    if (this.method) {
      const method = this.method[elem.type];

      if (method) {
        return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
      }
    }

    return true;
  }

  checkIt(e) {
    const target = e.target;

    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
      if (!this.error.size) this.sendBtn.disabled = false;
    } else {
      this.showError(target);
      this.error.add(target);
      if (this.error.size) this.sendBtn.disabled = true;
    }
  }

  showError(elem) {
    elem.classList.remove('success');
    elem.classList.add('error');
  }

  showSuccess(elem) {
    elem.classList.remove('error');
    elem.classList.add('success');
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
      input.success {
        border: 2px solid green !important;
      }
      input.error {
        border: 2px solid red !important;
      }
    `;
    document.head.appendChild(style);
  }

  setPattern() {

    this.pattern.phone = this.pattern.phone ? this.pattern.phone : /^\+?[78]([-()]*\d){10}$/;

    this.pattern.email = this.pattern.email ? this.pattern.email : /^\w+@\w+\.[\w\.]{2,}$/;

    this.pattern.text = this.pattern.text ? this.pattern.text : /[А-яа-яЁё\s]+/;
  }
}


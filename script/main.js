document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.wrap'),
  elem = document.createElement('div');

  class DomElement {
    constructor(selector, height, width, bgc, position ) {
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bgc = bgc;
      this.position = position;
      this.left = 0;
      this.top = 0;
    }
    showElement() {
      elem.classList.add(this.selector);
      elem.style.cssText = `height: ${this.height};
                            width: ${this.width};
                            background-color: ${this.bgc};
                            position: ${this.position};
                            transition: 0.05s`;
      wrap.insertAdjacentElement('afterbegin', elem);
    }
    move(e) {
      console.log(e);
      if (e.which === 37) {
        this.left -= 10;
        elem.style.left = this.left + 'px';
      }
      if (e.which === 38) {
        this.top -= 10;
        elem.style.top = this.top + 'px';
      }
      if (e.which === 39) {
        this.left += 10;
        elem.style.left = this.left + 'px';
      }
      if (e.which === 40) {
        this.top += 10;
        elem.style.top = this.top + 'px';
      }
    }
  }

  let square = new DomElement('square', '100px', '100px', 'red', 'absolute');
  square.showElement();
  document.addEventListener('keydown', square.move.bind(square) );
  
});
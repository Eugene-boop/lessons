document.addEventListener('DOMContentLoaded', ()=> {
  const wrap = document.querySelector('.wrap');

  
  function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }

  DomElement.prototype.showElement = function() {
    if (this.selector.startsWith('.')) {
      const elem = document.createElement('div');
      elem.classList.add(this.selector.slice(1));
      elem.style.cssText = `height: ${this.height};
                            width: ${this.width};
                            background: ${this.bg};
                            font-size: ${this.fontSize};`;
      elem.textContent = 'Я новорожденный div!';
      wrap.insertAdjacentElement('afterbegin', elem);
    }
    if (this.selector.startsWith('#')) {
      const elem = document.createElement('p');
      elem.id = this.selector.slice(1);
      elem.style.cssText = `height: ${this.height};
                            width: ${this.width};
                            background: ${this.bg};
                            font-size: ${this.fontSize};`;
      elem.textContent = 'Я новорожденный параграф!';
      wrap.insertAdjacentElement('afterbegin', elem);
    }
  };

  let newElem = new DomElement('.block', '100px', '200px', 'content-box radial-gradient(crimson, skyblue)', '24px');
  newElem.showElement();
});
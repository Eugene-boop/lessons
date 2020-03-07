const slider = () => {
  const slide = document.querySelectorAll('.portfolio-item'),
    dotUl = document.querySelector('.portfolio-dots'),
    slider = document.querySelector('.portfolio-content');

  const addDots = () => {
    let dotStr = '';
    for (let i = 0; i < slide.length; i++) {
      dotStr += '<li class="dot"></li>';
    }
    dotUl.insertAdjacentHTML("afterbegin", dotStr);
    dotUl.childNodes[0].classList.add('dot-active');
  };

  addDots();

  const dot = dotUl.childNodes;

  let currentSlide = 0,
    interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slide.length) currentSlide = 0;
    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  startSlide(1500);

  slider.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.matches('#arrow-right, #arrow-left, .dot')) return;

    prevSlide(slide, currentSlide, 'portfolio-item-active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('#arrow-right')) {
      currentSlide++;
    } else if (target.matches('#arrow-left')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, ind) => {
        if (elem === target) {
          currentSlide = ind;
        }
      });
    }

    if (currentSlide >= slide.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slide.length - 1;
    nextSlide(slide, currentSlide, 'portfolio-item-active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  slider.addEventListener('mouseover', e => {
    if (e.target.matches('.portfolio-btn')  ||
    event.target.matches('.dot')) {
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', e => {
    if (e.target.matches('.portfolio-btn')  ||
    event.target.matches('.dot')) {
      startSlide();
    }
  });
};

export default slider;
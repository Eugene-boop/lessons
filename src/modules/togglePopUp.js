const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupContent = document.querySelector('.popup-content');

  popupBtn.forEach(elem => {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
      if (document.documentElement.clientWidth >= 768) {
        popupContent.style.top = `100%`;
        popupContent.style.opacity = `0`;
        animate({
          duration: 150,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.top = `${20 / progress}%`;
            popupContent.style.opacity = `${progress}`;
          }
        });
      }
    });
  });

  function animate({
    duration,
    draw,
    timing
  }) {

    const start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration / 3;
      if (timeFraction > 1) timeFraction = 1;

      const progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }

  popup.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains('popup-close')) {
      popup.style.display = 'none';
    } else target = target.closest('.popup-content');

    if (!target) {
      popup.style.display = 'none';
    }
  });
};

export default togglePopUp;
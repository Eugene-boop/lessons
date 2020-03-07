const changeImgs = () => {
  const row = document.querySelector('.command .container .row');
  let oldSrc;

  row.addEventListener('mouseover', e => {
    const target = e.target;
    oldSrc = target.getAttribute('src');
    if (target.matches('img')) {
      target.src = target.dataset.img;
    }
  });

  row.addEventListener('mouseout', e => {
    const target = e.target;
    if (target.matches('img')) {
      target.src = oldSrc;
    }
  });
};

export default changeImgs;
const smoothScroll = (from, to) => {
  document.querySelector(from).addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(to).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

export default smoothScroll;
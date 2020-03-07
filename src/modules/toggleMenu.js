const toggleMenu = () => {
  // const menu = document.querySelector('menu');

  // document.addEventListener('click', e => {
  //   e.preventDefault
  //   let target = e.target;
  //   target = target.closest('.menu') || target;

  //   if (target.matches('menu a') || target.matches('.menu')) {
  //     menu.classList.toggle('active-menu');
  //   } else target = target.closest('menu');

  //   if (!target) menu.classList.remove('active-menu');
  // });
  
  const menu = document.querySelector('menu');

  document.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;
    target = target.closest('.menu') || target;

    if (target.matches('.close-btn') || target.matches('.menu')) {
      menu.classList.toggle('active-menu');
    } else if(target.matches('a')) {
      document.querySelector(target.hash).scrollIntoView();
      menu.classList.remove('active-menu');
    } else target = target.closest('menu');

    if (!target) menu.classList.remove('active-menu');
  });
};

export default toggleMenu;
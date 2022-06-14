const select = () => {
  const navs = document.querySelectorAll('.block-exchange__nav');

  navs.forEach(nav => {
    
    nav.addEventListener('click', (e) => {
      const list = nav.querySelector('.block-exchange__list');
      const items = nav.querySelectorAll('.block-exchange__li');
      const title = nav.querySelector('.block-exchange__title span');

      list.classList.toggle('show-items');

      if (e.target.classList.contains('block-exchange__li')) {
        items.forEach(el => el.classList.remove('selected'));
        title.textContent = e.target.textContent;
        e.target.classList.add('selected');
        list.classList.remove('show-items');
      }
    });
  });
};

export default select;
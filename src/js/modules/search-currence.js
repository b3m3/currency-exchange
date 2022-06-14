const searchCurrency = () => {
  const searchInputs = document.querySelectorAll('.block-exchange__search');

  searchInputs.forEach(search => {
    const parent = search.closest('.exchange__block');
    const items = parent.querySelectorAll('.block-exchange__li');

    search.addEventListener('input', () => {
      search.value = search.value.replace(/[\d]/g,'');
      
      items.forEach(item => {
        if (item.textContent.toLowerCase().search(search.value.toLowerCase()) == -1) {
          item.style.display = 'none';
        } else {
          item.style.display = 'block';
        }
      });
    });
  });
};

export default searchCurrency;
const calcCurrency = () => {

  const selects = document.querySelectorAll('.block-exchange__nav');
  const inputs = document.querySelectorAll('.block-exchange__input');

  const valueFrom = document.querySelector('.title-from');
  const valueTo = document.querySelector('.title-to');
  
  const bigValueFrom = document.querySelector('.ex-from');
  const bigValueTo = document.querySelector('.ex-to');
  const bigValueTotal = document.querySelector('.value-exchange__number');

  const clickEvents = (el, e) => {
    const parent = el.closest('.exchange__block');
    
    const title =  el.querySelector('.ex-title');
    const list = el.querySelector('.block-exchange__list');
    const items = el.querySelectorAll('.block-exchange__li');
    const search = parent.querySelector('.block-exchange__search');

    list.classList.toggle('show-items');
    search.classList.toggle('show-search');

    if (e.target.classList.contains('block-exchange__li')) {
      items.forEach(item => {
        item.classList.remove('selected');
        setTimeout(() => item.style.display = 'block', 400);
      });
      e.target.classList.add('selected');
      list.classList.remove('show-items');
      title.textContent = e.target.textContent;
      title.setAttribute('data-value', e.target.dataset.value);
      search.value = '';

      if (valueFrom.textContent !== 'Select currency' && valueTo.textContent !== 'Select currency') {
        inputs[1].value = inputs[0].value / valueFrom.dataset.value * valueTo.dataset.value;
      }

      if (e.target.closest('.nav-from')) {
        bigValueFrom.textContent = e.target.textContent;
        bigValueFrom.setAttribute('data-value', e.target.dataset.value);
      } else {
        bigValueTo.textContent = e.target.textContent;
        bigValueTo.setAttribute('data-value', e.target.dataset.value);
      }

      if (bigValueFrom.textContent !== '---' && bigValueTo.textContent !== '---') {
        bigValueTotal.textContent = (1 / bigValueFrom.dataset.value * bigValueTo.dataset.value).toFixed(3);
      }
    }
  };

  const inputEvents = (e) => {
    if (valueFrom.textContent !== 'Select currency' && valueTo.textContent !== 'Select currency') {
      if (e.target.classList.contains('input-from')) {
        inputs[1].value = (e.target.value / valueFrom.dataset.value * valueTo.dataset.value).toFixed(3);
      } else {
        inputs[0].value = (e.target.value / valueTo.dataset.value * valueFrom.dataset.value).toFixed(3);
      }
    }
  };

  selects.forEach(el => el.addEventListener('click', (e) => clickEvents(el, e)));
  inputs.forEach(el => el.addEventListener('input', (e) => inputEvents(e)));
};

export default calcCurrency;
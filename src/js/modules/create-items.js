const createCurrencyItem = (wrapp, name, rate) => {
  const li = document.createElement('li');
  li.classList.add('currency-nav__li');
  li.innerHTML = `
    <span class="currency-nav__name">${name}</span>
    <span class="currency-nav__rate">${rate}</span>
  `;
  wrapp.append(li);
};

const createExchangeItem = (wrapp, name, rate) => {
  const li = document.createElement('li');
  li.classList.add('block-exchange__li');
  li.setAttribute('data-value', rate);
  li.innerHTML = `${name}`;
  wrapp.append(li);
};

export { createCurrencyItem, createExchangeItem };
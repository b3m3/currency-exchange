document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const currencyNavWrapp = document.querySelector('.currency-nav__list');

  const url = 'https://openexchangerates.org/api/latest.json?app_id=59c3f4f34d484f97b4cfd87dbd0825d4';

  const getData = async url => {
    const res = await fetch(url);
    const data = await res.json();
    return await data.rates;
  };

  const createCurrencyNavItem = (wrapp, name, rate) => {
    const li = document.createElement('li');
    li.classList.add('currency-nav__li');
    li.innerHTML = `
      <span class="currency-nav__name">${name}</span>
      <span class="currency-nav__rate">${rate}</span>
    `;
    wrapp.append(li);
  };

  getData(url)
    .then(rates => {
 
    })
    .catch(err => {

    });
});
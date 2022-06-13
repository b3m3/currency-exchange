import { createCurrencyItem, createExchangeItem } from './modules/create-items.js';
import moveCurrency from './modules/move-currency.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const currencyNavWrapp = document.querySelector('.currency-nav__list');
  const exchangeListWrapps = document.querySelectorAll('.block-exchange__list');
  const container = document.querySelector('.app__wrapp');

  const url = 'https://openexchangerates.org/api/latest.json?app_id=59c3f4f34d484f97b4cfd87dbd0825d4';

  const getData = async url => {
    const res = await fetch(url);
    const data = await res.json();
    return await data.rates;
  };


  getData(url)
    .then(rates => {
      for (const key in rates) {
        createCurrencyItem(currencyNavWrapp, key, (rates[key]).toFixed(3));
        exchangeListWrapps.forEach(wrapp => createExchangeItem(wrapp, key, (rates[key]).toFixed(3)));
      }

      moveCurrency(currencyNavWrapp, container);
    })
    .catch(() => {
      currencyNavWrapp.innerHTML = 'Opps... pls check back later';
    });
});
import { createCurrencyItem, createExchangeItem } from './modules/create-items.js';
import moveCurrency from './modules/move-currency.js';
import calcCurrency from './modules/calc-currency.js';
import searchCurrency from './modules/search-currence.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const currencyNavWrapp = document.querySelector('.currency-nav__list');
  const exchangeListWrapps = document.querySelectorAll('.block-exchange__list');

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
      moveCurrency(currencyNavWrapp);
      calcCurrency();
      searchCurrency();
    })
    .catch(() => {
      currencyNavWrapp.innerHTML = 'Opps... pls check back later';
    });
});
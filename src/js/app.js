document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const currencyNavWrapp = document.querySelector('.currency-nav__list');
  const container = document.querySelector('.app__wrapp');

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
      for (const key in rates) {
        createCurrencyNavItem(currencyNavWrapp, key, (rates[key]).toFixed(3));
      }

      let px = 0;
      const end = currencyNavWrapp.clientWidth - container.clientWidth;

      setInterval(() => {
        if (px < end) {
          px++;
        } else {
          px = 0;
        }

        currencyNavWrapp.style.transform = `translate(-${px}px)`;
      }, 16);
    })
    .catch(() => {
      currencyNavWrapp.innerHTML = 'Opps... pls check back later';
    });
});
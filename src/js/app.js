document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const url = 'https://openexchangerates.org/api/latest.json?app_id=59c3f4f34d484f97b4cfd87dbd0825d4';

  const getData = async url => {
    const res = await fetch(url);
    const data = await res.json();
    return await data.rates;
  };

  getData(url)
    .then(rates => {
 
    })
    .catch(err => {

    });
});
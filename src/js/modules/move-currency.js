const moveCurrency = wrappSel => {
  const container = document.querySelector('.app__wrapp');

  let px = 0;
  const end = wrappSel.clientWidth - container.clientWidth;
  
  setInterval(() => {
    if (px < end) {
      px++;
    } else {
      px = 0;
    }
  
    wrappSel.style.transform = `translate(-${px}px)`;
  }, 16);
};

export default moveCurrency;
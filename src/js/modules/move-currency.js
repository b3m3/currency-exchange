const moveCurrency = (wrappSelec, containerSelec) => {
  let px = 0;
  const end = wrappSelec.clientWidth - containerSelec.clientWidth;
  
  setInterval(() => {
    if (px < end) {
      px++;
    } else {
      px = 0;
    }
  
    wrappSelec.style.transform = `translate(-${px}px)`;
  }, 16);
};

export default moveCurrency;
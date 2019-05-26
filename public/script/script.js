const hover = (el) => {
  el.src = `gif/${el.dataset.imagename}.gif`;
};

const unhover = (el) => {
  el.src = `images/${el.dataset.imagename}.png`;
};

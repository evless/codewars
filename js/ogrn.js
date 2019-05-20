const rnd = Math.ceil(Math.random() * 1e12);
const str = `${rnd}`.split('')
const control = str.splice(-1)

const summ = str.reduce((prev, curr, index) => {
  if ((index + 1) % 2 === 0) {
    prev += Number(curr);
  } else {
    prev -= Number(curr);
  }

  return prev;
}, 0)

console.log(rnd, summ + 11 === Number(control))
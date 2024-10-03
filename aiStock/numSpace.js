const start = 400;
const end = 2000;
const length = 250;
const step = (end - start) / (length - 1);

const array = Array.from({ length }, (_, i) => start + i * step);

console.log(array);
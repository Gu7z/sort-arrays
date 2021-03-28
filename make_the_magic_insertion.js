const insertionSort_random = require("./magic/insertionSort/random");
const insertionSort_sorted = require("./magic/insertionSort/sorted");
const insertionSort_invert = require("./magic/insertionSort/invert");

console.log(
  JSON.stringify({
    insertionSort_random,
    insertionSort_sorted,
    insertionSort_invert,
  })
);

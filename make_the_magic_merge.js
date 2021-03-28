const mergeSort_random = require("./magic/mergeSort/random");
const mergeSort_sorted = require("./magic/mergeSort/sorted");
const mergeSort_invert = require("./magic/mergeSort/invert");

console.log(
  JSON.stringify({
    mergeSort_random,
    mergeSort_sorted,
    mergeSort_invert,
  })
);

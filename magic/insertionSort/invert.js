const invert_10 = require("../../sets/invert/invert_10");
const invert_100 = require("../../sets/invert/invert_100");
const invert_1000 = require("../../sets/invert/invert_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const insertionSort = require("../../algorithms/insertionSort");

let time_invert_10 = [];
let time_invert_100 = [];
let time_invert_1000 = [];

runCode(insertionSort, invert_10, time_invert_10);
runCode(insertionSort, invert_10, time_invert_10);
runCode(insertionSort, invert_10, time_invert_10);
const insertionSort_invert_10 = calculaMedia(
  "insertionSort_invert_10",
  time_invert_10
);

runCode(insertionSort, invert_100, time_invert_100);
runCode(insertionSort, invert_100, time_invert_100);
runCode(insertionSort, invert_100, time_invert_100);
const insertionSort_invert_100 = calculaMedia(
  "insertionSort_invert_100",
  time_invert_100
);

runCode(insertionSort, invert_1000, time_invert_1000);
runCode(insertionSort, invert_1000, time_invert_1000);
runCode(insertionSort, invert_1000, time_invert_1000);
const insertionSort_invert_1000 = calculaMedia(
  "insertionSort_invert_1000",
  time_invert_1000
);

const average = [
  insertionSort_invert_10,
  insertionSort_invert_100,
  insertionSort_invert_1000,
];

module.exports = average;

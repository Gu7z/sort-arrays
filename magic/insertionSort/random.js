const random_10 = require("../../sets/random/random_10");
const random_100 = require("../../sets/random/random_100");
const random_1000 = require("../../sets/random/random_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const insertionSort = require("../../algorithms/insertionSort");

let time_random_10 = [];
let time_random_100 = [];
let time_random_1000 = [];

runCode(insertionSort, random_10, time_random_10);
runCode(insertionSort, random_10, time_random_10);
runCode(insertionSort, random_10, time_random_10);
const insertionSort_random_10 = calculaMedia(
  "insertionSort_random_10",
  time_random_10
);

runCode(insertionSort, random_100, time_random_100);
runCode(insertionSort, random_100, time_random_100);
runCode(insertionSort, random_100, time_random_100);
const insertionSort_random_100 = calculaMedia(
  "insertionSort_random_100",
  time_random_100
);

runCode(insertionSort, random_1000, time_random_1000);
runCode(insertionSort, random_1000, time_random_1000);
runCode(insertionSort, random_1000, time_random_1000);
const insertionSort_random_1000 = calculaMedia(
  "insertionSort_random_1000",
  time_random_1000
);

const average = [
  insertionSort_random_10,
  insertionSort_random_100,
  insertionSort_random_1000,
];

module.exports = average;

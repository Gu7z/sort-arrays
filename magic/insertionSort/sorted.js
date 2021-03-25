const sorted_10 = require("../../sets/sorted/sorted_10");
const sorted_100 = require("../../sets/sorted/sorted_100");
const sorted_1000 = require("../../sets/sorted/sorted_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const insertionSort = require("../../algorithms/insertionSort");

let time_sorted_10 = [];
let time_sorted_100 = [];
let time_sorted_1000 = [];

runCode(insertionSort, sorted_10, time_sorted_10);
runCode(insertionSort, sorted_10, time_sorted_10);
runCode(insertionSort, sorted_10, time_sorted_10);
const insertionSort_sorted_10 = calculaMedia(
  "insertionSort_sorted_10",
  time_sorted_10
);

runCode(insertionSort, sorted_100, time_sorted_100);
runCode(insertionSort, sorted_100, time_sorted_100);
runCode(insertionSort, sorted_100, time_sorted_100);
const insertionSort_sorted_100 = calculaMedia(
  "insertionSort_sorted_100",
  time_sorted_100
);

runCode(insertionSort, sorted_1000, time_sorted_1000);
runCode(insertionSort, sorted_1000, time_sorted_1000);
runCode(insertionSort, sorted_1000, time_sorted_1000);
const insertionSort_sorted_1000 = calculaMedia(
  "insertionSort_sorted_1000",
  time_sorted_1000
);

const average = [
  insertionSort_sorted_10,
  insertionSort_sorted_100,
  insertionSort_sorted_1000,
];

module.exports = average;

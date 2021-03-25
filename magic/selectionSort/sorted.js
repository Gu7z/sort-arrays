const sorted_10 = require("../../sets/sorted/sorted_10");
const sorted_100 = require("../../sets/sorted/sorted_100");
const sorted_1000 = require("../../sets/sorted/sorted_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const selectionSort = require("../../algorithms/selectionSort");

let time_sorted_10 = [];
let time_sorted_100 = [];
let time_sorted_1000 = [];

runCode(selectionSort, sorted_10, time_sorted_10);
runCode(selectionSort, sorted_10, time_sorted_10);
runCode(selectionSort, sorted_10, time_sorted_10);
const selectionSort_sorted_10 = calculaMedia(
  "selectionSort_sorted_10",
  time_sorted_10
);

runCode(selectionSort, sorted_100, time_sorted_100);
runCode(selectionSort, sorted_100, time_sorted_100);
runCode(selectionSort, sorted_100, time_sorted_100);
const selectionSort_sorted_100 = calculaMedia(
  "selectionSort_sorted_100",
  time_sorted_100
);

runCode(selectionSort, sorted_1000, time_sorted_1000);
runCode(selectionSort, sorted_1000, time_sorted_1000);
runCode(selectionSort, sorted_1000, time_sorted_1000);
const selectionSort_sorted_1000 = calculaMedia(
  "selectionSort_sorted_1000",
  time_sorted_1000
);

const average = [
  selectionSort_sorted_10,
  selectionSort_sorted_100,
  selectionSort_sorted_1000,
];

module.exports = average;

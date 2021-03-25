const sorted_10 = require("../../sets/sorted/sorted_10");
const sorted_100 = require("../../sets/sorted/sorted_100");
const sorted_1000 = require("../../sets/sorted/sorted_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const mergeSort = require("../../algorithms/mergeSort");

let time_sorted_10 = [];
let time_sorted_100 = [];
let time_sorted_1000 = [];

runCode(mergeSort, sorted_10, time_sorted_10);
runCode(mergeSort, sorted_10, time_sorted_10);
runCode(mergeSort, sorted_10, time_sorted_10);
const mergeSort_sorted_10 = calculaMedia("mergeSort_sorted_10", time_sorted_10);

runCode(mergeSort, sorted_100, time_sorted_100);
runCode(mergeSort, sorted_100, time_sorted_100);
runCode(mergeSort, sorted_100, time_sorted_100);
const mergeSort_sorted_100 = calculaMedia(
  "mergeSort_sorted_100",
  time_sorted_100
);

runCode(mergeSort, sorted_1000, time_sorted_1000);
runCode(mergeSort, sorted_1000, time_sorted_1000);
runCode(mergeSort, sorted_1000, time_sorted_1000);
const mergeSort_sorted_1000 = calculaMedia(
  "mergeSort_sorted_1000",
  time_sorted_1000
);

const average = [
  mergeSort_sorted_10,
  mergeSort_sorted_100,
  mergeSort_sorted_1000,
];

module.exports = average;

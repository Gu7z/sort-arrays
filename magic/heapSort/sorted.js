const sorted_10 = require("../../sets/sorted/sorted_10");
const sorted_100 = require("../../sets/sorted/sorted_100");
const sorted_1000 = require("../../sets/sorted/sorted_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const heapSort = require("../../algorithms/heapSort");

let time_sorted_10 = [];
let time_sorted_100 = [];
let time_sorted_1000 = [];

runCode(heapSort, sorted_10, time_sorted_10);
runCode(heapSort, sorted_10, time_sorted_10);
runCode(heapSort, sorted_10, time_sorted_10);
const heapSort_sorted_10 = calculaMedia("heapSort_sorted_10", time_sorted_10);

runCode(heapSort, sorted_100, time_sorted_100);
runCode(heapSort, sorted_100, time_sorted_100);
runCode(heapSort, sorted_100, time_sorted_100);
const heapSort_sorted_100 = calculaMedia(
  "heapSort_sorted_100",
  time_sorted_100
);

runCode(heapSort, sorted_1000, time_sorted_1000);
runCode(heapSort, sorted_1000, time_sorted_1000);
runCode(heapSort, sorted_1000, time_sorted_1000);
const heapSort_sorted_1000 = calculaMedia(
  "heapSort_sorted_1000",
  time_sorted_1000
);

const average = [heapSort_sorted_10, heapSort_sorted_100, heapSort_sorted_1000];

module.exports = average;

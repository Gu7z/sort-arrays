const sorted_10 = require("../../sets/sorted/sorted_10");
const sorted_100 = require("../../sets/sorted/sorted_100");
const sorted_1000 = require("../../sets/sorted/sorted_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const quickSort = require("../../algorithms/quickSort");

let time_sorted_10 = [];
let time_sorted_100 = [];
let time_sorted_1000 = [];

runCode(quickSort, sorted_10, time_sorted_10);
runCode(quickSort, sorted_10, time_sorted_10);
runCode(quickSort, sorted_10, time_sorted_10);
const quickSort_sorted_10 = calculaMedia("quickSort_sorted_10", time_sorted_10);

runCode(quickSort, sorted_100, time_sorted_100);
runCode(quickSort, sorted_100, time_sorted_100);
runCode(quickSort, sorted_100, time_sorted_100);
const quickSort_sorted_100 = calculaMedia(
  "quickSort_sorted_100",
  time_sorted_100
);

runCode(quickSort, sorted_1000, time_sorted_1000);
runCode(quickSort, sorted_1000, time_sorted_1000);
runCode(quickSort, sorted_1000, time_sorted_1000);
const quickSort_sorted_1000 = calculaMedia(
  "quickSort_sorted_1000",
  time_sorted_1000
);

const average = [
  quickSort_sorted_10,
  quickSort_sorted_100,
  quickSort_sorted_1000,
];

module.exports = average;

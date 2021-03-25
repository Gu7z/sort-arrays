const invert_10 = require("../../sets/invert/invert_10");
const invert_100 = require("../../sets/invert/invert_100");
const invert_1000 = require("../../sets/invert/invert_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const mergeSort = require("../../algorithms/mergeSort");

let time_invert_10 = [];
let time_invert_100 = [];
let time_invert_1000 = [];

runCode(mergeSort, invert_10, time_invert_10);
runCode(mergeSort, invert_10, time_invert_10);
runCode(mergeSort, invert_10, time_invert_10);
const mergeSort_invert_10 = calculaMedia("mergeSort_invert_10", time_invert_10);

runCode(mergeSort, invert_100, time_invert_100);
runCode(mergeSort, invert_100, time_invert_100);
runCode(mergeSort, invert_100, time_invert_100);
const mergeSort_invert_100 = calculaMedia(
  "mergeSort_invert_100",
  time_invert_100
);

runCode(mergeSort, invert_1000, time_invert_1000);
runCode(mergeSort, invert_1000, time_invert_1000);
runCode(mergeSort, invert_1000, time_invert_1000);
const mergeSort_invert_1000 = calculaMedia(
  "mergeSort_invert_1000",
  time_invert_1000
);

const average = [
  mergeSort_invert_10,
  mergeSort_invert_100,
  mergeSort_invert_1000,
];

module.exports = average;

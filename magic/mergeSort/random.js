const random_10 = require("../../sets/random/random_10");
const random_100 = require("../../sets/random/random_100");
const random_1000 = require("../../sets/random/random_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const mergeSort = require("../../algorithms/mergeSort");

let time_random_10 = [];
let time_random_100 = [];
let time_random_1000 = [];

runCode(mergeSort, random_10, time_random_10);
runCode(mergeSort, random_10, time_random_10);
runCode(mergeSort, random_10, time_random_10);
const mergeSort_random_10 = calculaMedia("mergeSort_random_10", time_random_10);

runCode(mergeSort, random_100, time_random_100);
runCode(mergeSort, random_100, time_random_100);
runCode(mergeSort, random_100, time_random_100);
const mergeSort_random_100 = calculaMedia(
  "mergeSort_random_100",
  time_random_100
);

runCode(mergeSort, random_1000, time_random_1000);
runCode(mergeSort, random_1000, time_random_1000);
runCode(mergeSort, random_1000, time_random_1000);
const mergeSort_random_1000 = calculaMedia(
  "mergeSort_random_1000",
  time_random_1000
);

const average = [
  mergeSort_random_10,
  mergeSort_random_100,
  mergeSort_random_1000,
];

module.exports = average;

const random_10 = require("../../sets/random/random_10");
const random_100 = require("../../sets/random/random_100");
const random_1000 = require("../../sets/random/random_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const selectionSort = require("../../algorithms/selectionSort");

let time_random_10 = [];
let time_random_100 = [];
let time_random_1000 = [];

runCode(selectionSort, random_10, time_random_10);
runCode(selectionSort, random_10, time_random_10);
runCode(selectionSort, random_10, time_random_10);
const selectionSort_random_10 = calculaMedia(
  "selectionSort_random_10",
  time_random_10
);

runCode(selectionSort, random_100, time_random_100);
runCode(selectionSort, random_100, time_random_100);
runCode(selectionSort, random_100, time_random_100);
const selectionSort_random_100 = calculaMedia(
  "selectionSort_random_100",
  time_random_100
);

runCode(selectionSort, random_1000, time_random_1000);
runCode(selectionSort, random_1000, time_random_1000);
runCode(selectionSort, random_1000, time_random_1000);
const selectionSort_random_1000 = calculaMedia(
  "selectionSort_random_1000",
  time_random_1000
);

const average = [
  selectionSort_random_10,
  selectionSort_random_100,
  selectionSort_random_1000,
];

module.exports = average;

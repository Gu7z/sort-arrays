const invert_10 = require("../../sets/invert/invert_10");
const invert_100 = require("../../sets/invert/invert_100");
const invert_1000 = require("../../sets/invert/invert_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const selectionSort = require("../../algorithms/selectionSort");

let time_invert_10 = [];
let time_invert_100 = [];
let time_invert_1000 = [];

runCode(selectionSort, invert_10, time_invert_10);
runCode(selectionSort, invert_10, time_invert_10);
runCode(selectionSort, invert_10, time_invert_10);
const selectionSort_invert_10 = calculaMedia(
  "selectionSort_invert_10",
  time_invert_10
);

runCode(selectionSort, invert_100, time_invert_100);
runCode(selectionSort, invert_100, time_invert_100);
runCode(selectionSort, invert_100, time_invert_100);
const selectionSort_invert_100 = calculaMedia(
  "selectionSort_invert_100",
  time_invert_100
);

runCode(selectionSort, invert_1000, time_invert_1000);
runCode(selectionSort, invert_1000, time_invert_1000);
runCode(selectionSort, invert_1000, time_invert_1000);
const selectionSort_invert_1000 = calculaMedia(
  "selectionSort_invert_1000",
  time_invert_1000
);

const average = [
  selectionSort_invert_10,
  selectionSort_invert_100,
  selectionSort_invert_1000,
];

module.exports = average;

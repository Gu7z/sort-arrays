const invert_10 = require("../../sets/invert/invert_10");
const invert_100 = require("../../sets/invert/invert_100");
const invert_1000 = require("../../sets/invert/invert_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const heapSort = require("../../algorithms/heapSort");

let time_invert_10 = [];
let time_invert_100 = [];
let time_invert_1000 = [];

runCode(heapSort, invert_10, time_invert_10);
runCode(heapSort, invert_10, time_invert_10);
runCode(heapSort, invert_10, time_invert_10);
const heapSort_invert_10 = calculaMedia("heapSort_invert_10", time_invert_10);

runCode(heapSort, invert_100, time_invert_100);
runCode(heapSort, invert_100, time_invert_100);
runCode(heapSort, invert_100, time_invert_100);
const heapSort_invert_100 = calculaMedia(
  "heapSort_invert_100",
  time_invert_100
);

runCode(heapSort, invert_1000, time_invert_1000);
runCode(heapSort, invert_1000, time_invert_1000);
runCode(heapSort, invert_1000, time_invert_1000);
const heapSort_invert_1000 = calculaMedia(
  "heapSort_invert_1000",
  time_invert_1000
);

const average = [heapSort_invert_10, heapSort_invert_100, heapSort_invert_1000];

module.exports = average;

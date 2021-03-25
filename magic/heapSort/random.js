const random_10 = require("../../sets/random/random_10");
const random_100 = require("../../sets/random/random_100");
const random_1000 = require("../../sets/random/random_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const heapSort = require("../../algorithms/heapSort");

let time_random_10 = [];
let time_random_100 = [];
let time_random_1000 = [];

runCode(heapSort, random_10, time_random_10);
runCode(heapSort, random_10, time_random_10);
runCode(heapSort, random_10, time_random_10);
const heapSort_random_10 = calculaMedia("heapSort_random_10", time_random_10);

runCode(heapSort, random_100, time_random_100);
runCode(heapSort, random_100, time_random_100);
runCode(heapSort, random_100, time_random_100);
const heapSort_random_100 = calculaMedia(
  "heapSort_random_100",
  time_random_100
);

runCode(heapSort, random_1000, time_random_1000);
runCode(heapSort, random_1000, time_random_1000);
runCode(heapSort, random_1000, time_random_1000);
const heapSort_random_1000 = calculaMedia(
  "heapSort_random_1000",
  time_random_1000
);

const average = [heapSort_random_10, heapSort_random_100, heapSort_random_1000];

module.exports = average;

const random_10 = require("../../sets/random/random_10");
const random_100 = require("../../sets/random/random_100");
const random_1000 = require("../../sets/random/random_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const quickSort = require("../../algorithms/quickSort");

let time_random_10 = [];
let time_random_100 = [];
let time_random_1000 = [];

runCode(quickSort, random_10, time_random_10);
runCode(quickSort, random_10, time_random_10);
runCode(quickSort, random_10, time_random_10);
const quickSort_random_10 = calculaMedia("quickSort_random_10", time_random_10);

runCode(quickSort, random_100, time_random_100);
runCode(quickSort, random_100, time_random_100);
runCode(quickSort, random_100, time_random_100);
const quickSort_random_100 = calculaMedia(
  "quickSort_random_100",
  time_random_100
);

runCode(quickSort, random_1000, time_random_1000);
runCode(quickSort, random_1000, time_random_1000);
runCode(quickSort, random_1000, time_random_1000);
const quickSort_random_1000 = calculaMedia(
  "quickSort_random_1000",
  time_random_1000
);

const average = [
  quickSort_random_10,
  quickSort_random_100,
  quickSort_random_1000,
];

module.exports = average;

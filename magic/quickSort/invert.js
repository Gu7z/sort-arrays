const invert_10 = require("../../sets/invert/invert_10");
const invert_100 = require("../../sets/invert/invert_100");
const invert_1000 = require("../../sets/invert/invert_1000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const quickSort = require("../../algorithms/quickSort");

let time_invert_10 = [];
let time_invert_100 = [];
let time_invert_1000 = [];

runCode(quickSort, invert_10, time_invert_10);
runCode(quickSort, invert_10, time_invert_10);
runCode(quickSort, invert_10, time_invert_10);
const quickSort_invert_10 = calculaMedia("quickSort_invert_10", time_invert_10);

runCode(quickSort, invert_100, time_invert_100);
runCode(quickSort, invert_100, time_invert_100);
runCode(quickSort, invert_100, time_invert_100);
const quickSort_invert_100 = calculaMedia(
  "quickSort_invert_100",
  time_invert_100
);

runCode(quickSort, invert_1000, time_invert_1000);
runCode(quickSort, invert_1000, time_invert_1000);
runCode(quickSort, invert_1000, time_invert_1000);
const quickSort_invert_1000 = calculaMedia(
  "quickSort_invert_1000",
  time_invert_1000
);

const average = [
  quickSort_invert_10,
  quickSort_invert_100,
  quickSort_invert_1000,
];

module.exports = average;

const invert_10 = require("../../sets/invert/invert_10");
const invert_20 = require("../../sets/invert/invert_20");
const invert_30 = require("../../sets/invert/invert_30");
const invert_100 = require("../../sets/invert/invert_100");
const invert_200 = require("../../sets/invert/invert_200");
const invert_300 = require("../../sets/invert/invert_300");
const invert_1000 = require("../../sets/invert/invert_1000");
const invert_2000 = require("../../sets/invert/invert_2000");
const invert_3000 = require("../../sets/invert/invert_3000");
const invert_10000 = require("../../sets/invert/invert_10000");
const invert_20000 = require("../../sets/invert/invert_20000");
const invert_30000 = require("../../sets/invert/invert_30000");
const invert_100000 = require("../../sets/invert/invert_100000");
const invert_200000 = require("../../sets/invert/invert_200000");
const invert_300000 = require("../../sets/invert/invert_300000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const quickSort = require("../../algorithms/quickSort");

const ten = [invert_10, invert_100, invert_1000, invert_10000, invert_100000];
const twenty = [
  invert_20,
  invert_200,
  invert_2000,
  invert_20000,
  invert_200000,
];
const thirty = [
  invert_30,
  invert_300,
  invert_3000,
  invert_30000,
  invert_300000,
];

const timeinvertTen = [[], [], [], [], []];

const timeinvertTwenty = [[], [], [], [], []];

const timeinvertThirty = [[], [], [], [], []];

const mergeSort_invert = [[], [], []];

for (const index in ten) {
  runCode(quickSort, ten[index], timeinvertTen[index]);
  runCode(quickSort, ten[index], timeinvertTen[index]);
  runCode(quickSort, ten[index], timeinvertTen[index]);
  mergeSort_invert[0].push(calculaMedia(timeinvertTen[index]));
}

for (const index in twenty) {
  runCode(quickSort, twenty[index], timeinvertTwenty[index]);
  runCode(quickSort, twenty[index], timeinvertTwenty[index]);
  runCode(quickSort, twenty[index], timeinvertTwenty[index]);
  mergeSort_invert[1].push(calculaMedia(timeinvertTwenty[index]));
}

for (const index in thirty) {
  runCode(quickSort, thirty[index], timeinvertThirty[index]);
  runCode(quickSort, thirty[index], timeinvertThirty[index]);
  runCode(quickSort, thirty[index], timeinvertThirty[index]);
  mergeSort_invert[2].push(calculaMedia(timeinvertThirty[index]));
}

module.exports = mergeSort_invert;

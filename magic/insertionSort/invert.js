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
const insertionSort = require("../../algorithms/insertionSort");

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

const insertionSort_invert = [[], [], [], []];

for (const index in ten) {
  runCode(insertionSort, ten[index], timeinvertTen[index]);
  runCode(insertionSort, ten[index], timeinvertTen[index]);
  runCode(insertionSort, ten[index], timeinvertTen[index]);
  insertionSort_invert[0].push(calculaMedia(timeinvertTen[index]));
}

for (const index in twenty) {
  runCode(insertionSort, twenty[index], timeinvertTwenty[index]);
  runCode(insertionSort, twenty[index], timeinvertTwenty[index]);
  runCode(insertionSort, twenty[index], timeinvertTwenty[index]);
  insertionSort_invert[1].push(calculaMedia(timeinvertTwenty[index]));
}

for (const index in thirty) {
  runCode(insertionSort, thirty[index], timeinvertThirty[index]);
  runCode(insertionSort, thirty[index], timeinvertThirty[index]);
  runCode(insertionSort, thirty[index], timeinvertThirty[index]);
  insertionSort_invert[2].push(calculaMedia(timeinvertThirty[index]));
}

console.log("cabei o invert do insertion");

module.exports = insertionSort_invert;

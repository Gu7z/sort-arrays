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
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const selectionSort = require("../../algorithms/selectionSort");

const ten = [invert_10, invert_100, invert_1000, invert_10000];
const twenty = [invert_20, invert_200, invert_2000, invert_20000];
const thirty = [invert_30, invert_300, invert_3000, invert_30000];

const timeinvertTen = [[], [], [], []];

const timeinvertTwenty = [[], [], [], []];

const timeinvertThirty = [[], [], [], []];

const selectionSort_invert = [[], [], []];

for (const index in ten) {
  runCode(selectionSort, ten[index], timeinvertTen[index]);
  runCode(selectionSort, ten[index], timeinvertTen[index]);
  runCode(selectionSort, ten[index], timeinvertTen[index]);
  selectionSort_invert[0].push(calculaMedia(timeinvertTen[index]));
}

for (const index in twenty) {
  runCode(selectionSort, twenty[index], timeinvertTwenty[index]);
  runCode(selectionSort, twenty[index], timeinvertTwenty[index]);
  runCode(selectionSort, twenty[index], timeinvertTwenty[index]);
  selectionSort_invert[1].push(calculaMedia(timeinvertTwenty[index]));
}

for (const index in thirty) {
  runCode(selectionSort, thirty[index], timeinvertThirty[index]);
  runCode(selectionSort, thirty[index], timeinvertThirty[index]);
  runCode(selectionSort, thirty[index], timeinvertThirty[index]);
  selectionSort_invert[2].push(calculaMedia(timeinvertThirty[index]));
}

console.log("cabei o invert do selection");

module.exports = selectionSort_invert;

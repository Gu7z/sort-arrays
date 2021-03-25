const sorted_10 = require("../../sets/sorted/sorted_10");
const sorted_20 = require("../../sets/sorted/sorted_20");
const sorted_30 = require("../../sets/sorted/sorted_30");
const sorted_100 = require("../../sets/sorted/sorted_100");
const sorted_200 = require("../../sets/sorted/sorted_200");
const sorted_300 = require("../../sets/sorted/sorted_300");
const sorted_1000 = require("../../sets/sorted/sorted_1000");
const sorted_2000 = require("../../sets/sorted/sorted_2000");
const sorted_3000 = require("../../sets/sorted/sorted_3000");
const sorted_10000 = require("../../sets/sorted/sorted_10000");
const sorted_20000 = require("../../sets/sorted/sorted_20000");
const sorted_30000 = require("../../sets/sorted/sorted_30000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const bubbleSort = require("../../algorithms/bubbleSort");

const ten = [sorted_10, sorted_100, sorted_1000, sorted_10000];
const twenty = [sorted_20, sorted_200, sorted_2000, sorted_20000];
const thirty = [sorted_30, sorted_300, sorted_3000, sorted_30000];

const timesortedTen = [[], [], [], []];

const timesortedTwenty = [[], [], [], []];

const timesortedThirty = [[], [], [], []];

const bubbleSort_sorted = [[], [], []];

for (const index in ten) {
  runCode(bubbleSort, ten[index], timesortedTen[index]);
  runCode(bubbleSort, ten[index], timesortedTen[index]);
  runCode(bubbleSort, ten[index], timesortedTen[index]);
  bubbleSort_sorted[0].push(calculaMedia(timesortedTen[index]));
}

for (const index in twenty) {
  runCode(bubbleSort, twenty[index], timesortedTwenty[index]);
  runCode(bubbleSort, twenty[index], timesortedTwenty[index]);
  runCode(bubbleSort, twenty[index], timesortedTwenty[index]);
  bubbleSort_sorted[1].push(calculaMedia(timesortedTwenty[index]));
}

for (const index in thirty) {
  runCode(bubbleSort, thirty[index], timesortedThirty[index]);
  runCode(bubbleSort, thirty[index], timesortedThirty[index]);
  runCode(bubbleSort, thirty[index], timesortedThirty[index]);
  bubbleSort_sorted[2].push(calculaMedia(timesortedThirty[index]));
}

console.log("cabei o sorted do bubble");

module.exports = bubbleSort_sorted;

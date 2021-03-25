const random_10 = require("../../sets/random/random_10");
const random_20 = require("../../sets/random/random_20");
const random_30 = require("../../sets/random/random_30");
const random_100 = require("../../sets/random/random_100");
const random_200 = require("../../sets/random/random_200");
const random_300 = require("../../sets/random/random_300");
const random_1000 = require("../../sets/random/random_1000");
const random_2000 = require("../../sets/random/random_2000");
const random_3000 = require("../../sets/random/random_3000");
const random_10000 = require("../../sets/random/random_10000");
const random_20000 = require("../../sets/random/random_20000");
const random_30000 = require("../../sets/random/random_30000");
const runCode = require("../../utils/runCode");
const calculaMedia = require("../../utils/calculaMedia");
const bubbleSort = require("../../algorithms/bubbleSort");

const ten = [random_10, random_100, random_1000, random_10000];
const twenty = [random_20, random_200, random_2000, random_20000];
const thirty = [random_30, random_300, random_3000, random_30000];

const timerandomTen = [[], [], [], []];

const timerandomTwenty = [[], [], [], []];

const timerandomThirty = [[], [], [], []];

const bubbleSort_random = [[], [], []];

for (const index in ten) {
  runCode(bubbleSort, ten[index], timerandomTen[index]);
  runCode(bubbleSort, ten[index], timerandomTen[index]);
  runCode(bubbleSort, ten[index], timerandomTen[index]);
  bubbleSort_random[0].push(calculaMedia(timerandomTen[index]));
}

for (const index in twenty) {
  runCode(bubbleSort, twenty[index], timerandomTwenty[index]);
  runCode(bubbleSort, twenty[index], timerandomTwenty[index]);
  runCode(bubbleSort, twenty[index], timerandomTwenty[index]);
  bubbleSort_random[1].push(calculaMedia(timerandomTwenty[index]));
}

for (const index in thirty) {
  runCode(bubbleSort, thirty[index], timerandomThirty[index]);
  runCode(bubbleSort, thirty[index], timerandomThirty[index]);
  runCode(bubbleSort, thirty[index], timerandomThirty[index]);
  bubbleSort_random[2].push(calculaMedia(timerandomThirty[index]));
}

console.log("cabei o random do bubble");

module.exports = bubbleSort_random;

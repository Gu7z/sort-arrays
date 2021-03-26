const quickSort_random = require("./magic/quickSort/random");
const quickSort_sorted = require("./magic/quickSort/sorted");
const quickSort_invert = require("./magic/quickSort/invert");

const insertionSort_random = require("./magic/insertionSort/random");
const insertionSort_sorted = require("./magic/insertionSort/sorted");
const insertionSort_invert = require("./magic/insertionSort/invert");

const mergeSort_random = require("./magic/mergeSort/random");
const mergeSort_sorted = require("./magic/mergeSort/sorted");
const mergeSort_invert = require("./magic/mergeSort/invert");

const selectionSort_random = require("./magic/selectionSort/random");
const selectionSort_sorted = require("./magic/selectionSort/sorted");
const selectionSort_invert = require("./magic/selectionSort/invert");

const heapSort_random = require("./magic/heapSort/random");
const heapSort_sorted = require("./magic/heapSort/sorted");
const heapSort_invert = require("./magic/heapSort/invert");

const bubbleSort_random = require("./magic/bubbleSort/random");
const bubbleSort_sorted = require("./magic/bubbleSort/sorted");
const bubbleSort_invert = require("./magic/bubbleSort/invert");

const averages = {
  bubbleSort: {
    bubbleSort_random,
    bubbleSort_sorted,
    bubbleSort_invert,
  },
  heapSort: {
    heapSort_random,
    heapSort_sorted,
    heapSort_invert,
  },
  selectionSort: {
    selectionSort_random,
    selectionSort_sorted,
    selectionSort_invert,
  },
  mergeSort: {
    mergeSort_random,
    mergeSort_sorted,
    mergeSort_invert,
  },
  quickSort: {
    quickSort_random,
    quickSort_sorted,
    quickSort_invert,
  },
  insertionSort: {
    insertionSort_random,
    insertionSort_sorted,
    insertionSort_invert,
  },
};

module.exports = averages;

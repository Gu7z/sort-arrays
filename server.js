const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const app = express();

const averages = [];

var quickSpawn = spawn("node", ["make_the_magic_quick.js"]);
var selectionSpawn = spawn("node", ["make_the_magic_selection.js"]);
var mergeSpawn = spawn("node", ["make_the_magic_merge.js"]);
var insertionSpawn = spawn("node", ["make_the_magic_insertion.js"]);
var heapSpawn = spawn("node", ["make_the_magic_heap.js"]);
var bubbleSpawn = spawn("node", ["make_the_magic_bubble.js"]);

quickSpawn.stdout.on("data", function (data) {
  console.log("Terminou quick");
  averages.push({
    quickSort: JSON.parse(JSON.stringify(data.toString("utf8"))),
  });
});

selectionSpawn.stdout.on("data", function (data) {
  console.log("Terminou selection");
  averages.push({
    selectionSort: JSON.parse(JSON.stringify(data.toString("utf8"))),
  });
});

mergeSpawn.stdout.on("data", function (data) {
  console.log("Terminou merge");
  averages.push({
    mergeSort: JSON.parse(JSON.stringify(data.toString("utf8"))),
  });
});

insertionSpawn.stdout.on("data", function (data) {
  console.log("Terminou insertion");
  averages.push({
    insertionSort: JSON.parse(JSON.stringify(data.toString("utf8"))),
  });
});

heapSpawn.stdout.on("data", function (data) {
  console.log("Terminou heap");
  averages.push({
    heapSort: JSON.parse(JSON.stringify(data.toString("utf8"))),
  });
});

bubbleSpawn.stdout.on("data", function (data) {
  console.log("Terminou bubble");
  averages.push({
    bubbleSort: JSON.parse(JSON.stringify(data.toString("utf8"))),
  });
});

// const teste = [
//   new Promise((resolve, reject) => {
//     const teste = require("./make_the_magic_selection");
//     resolve(teste);
//   }),
//   new Promise((resolve, reject) => {
//     const teste = require("./make_the_magic_merge");
//     resolve(teste);
//   }),
//   new Promise((resolve, reject) => {
//     const teste = require("./make_the_magic_quick");
//     resolve(teste);
//   }),
//   new Promise((resolve, reject) => {
//     const teste = require("./make_the_magic_insertion");
//     resolve(teste);
//   }),
//   new Promise((resolve, reject) => {
//     const teste = require("./make_the_magic_heap");
//     resolve(teste);
//   }),
//   new Promise((resolve, reject) => {
//     const teste = require("./make_the_magic_bubble");
//     resolve(teste);
//   }),
// ];

// Promise.all(teste).then((values) => {
//   console.log(values);
// });

app.use(express.static(path.join(__dirname, "public")));

console.log("Ja pode abrir o server");

app.use("/", (req, res) => {
  const {
    bubbleSort,
    heapSort,
    insertionSort,
    mergeSort,
    quickSort,
    selectionSort,
  } = averages;

  res.cookie("bubbleSort", JSON.stringify(bubbleSort), { encode: String });
  res.cookie("heapSort", JSON.stringify(heapSort), { encode: String });
  res.cookie("insertionSort", JSON.stringify(insertionSort), {
    encode: String,
  });
  res.cookie("mergeSort", JSON.stringify(mergeSort), { encode: String });
  res.cookie("quickSort", JSON.stringify(quickSort), { encode: String });
  res.cookie("selectionSort", JSON.stringify(selectionSort), {
    encode: String,
  });
  res.sendFile(__dirname + "/index.html");
});

app.listen(8001);

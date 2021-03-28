const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const app = express();
const port = process.env.PORT || 8001;

const averages = {};

var quickSpawn = spawn("node", ["make_the_magic_quick.js"]);
var selectionSpawn = spawn("node", ["make_the_magic_selection.js"]);
var mergeSpawn = spawn("node", ["make_the_magic_merge.js"]);
var insertionSpawn = spawn("node", ["make_the_magic_insertion.js"]);
var heapSpawn = spawn("node", ["make_the_magic_heap.js"]);
var bubbleSpawn = spawn("node", ["make_the_magic_bubble.js"]);

quickSpawn.stdout.on("data", function (data) {
  console.log("Terminou quick");
  averages["quickSort"] = JSON.parse(data.toString("utf8"));
});

selectionSpawn.stdout.on("data", function (data) {
  console.log("Terminou selection");
  averages["selectionSort"] = JSON.parse(data.toString("utf8"));
});

mergeSpawn.stdout.on("data", function (data) {
  console.log("Terminou merge");
  averages["mergeSort"] = JSON.parse(data.toString("utf8"));
});

insertionSpawn.stdout.on("data", function (data) {
  console.log("Terminou insertion");
  averages["insertionSort"] = JSON.parse(data.toString("utf8"));
});

heapSpawn.stdout.on("data", function (data) {
  console.log("Terminou heap");
  averages["heapSort"] = JSON.parse(data.toString("utf8"));
});

bubbleSpawn.stdout.on("data", function (data) {
  console.log("Terminou bubble");
  averages["bubbleSort"] = JSON.parse(data.toString("utf8"));
});

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

app.listen(port);

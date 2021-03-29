const express = require("express");
const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 8001;

let averages = {};

const checkIfFileExists = () => {
  return fs.existsSync("./averages.json");
};

const getAvgFromFile = () => {
  const rawdata = fs.readFileSync("averages.json");
  const averages = JSON.parse(rawdata);

  return averages;
};

const calculateAverages = () => {
  const quickSpawn = spawn("node", ["make_the_magic_quick.js"]);
  const selectionSpawn = spawn("node", ["make_the_magic_selection.js"]);
  const mergeSpawn = spawn("node", ["make_the_magic_merge.js"]);
  const insertionSpawn = spawn("node", ["make_the_magic_insertion.js"]);
  const heapSpawn = spawn("node", ["make_the_magic_heap.js"]);
  const bubbleSpawn = spawn("node", ["make_the_magic_bubble.js"]);

  let finisheds = {
    heap: false,
    selection: false,
    merge: false,
    insertion: false,
    bubble: false,
    quick: false,
  };

  const allFinisheds = () =>
    !Object.values(finisheds).find((each) => each === false);

  const save = () => {
    fs.appendFile("averages.json", JSON.stringify(averages), function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  };

  quickSpawn.stdout.on("data", function (data) {
    console.log("Terminou quick");
    averages["quickSort"] = JSON.parse(data.toString("utf8"));
    finisheds.quick = true;

    if (allFinisheds()) {
      save();
    }
  });

  selectionSpawn.stdout.on("data", function (data) {
    console.log("Terminou selection");
    averages["selectionSort"] = JSON.parse(data.toString("utf8"));

    if (allFinisheds()) {
      save();
    }
  });

  mergeSpawn.stdout.on("data", function (data) {
    console.log("Terminou merge");
    averages["mergeSort"] = JSON.parse(data.toString("utf8"));

    if (allFinisheds()) {
      save();
    }
  });

  insertionSpawn.stdout.on("data", function (data) {
    console.log("Terminou insertion");
    averages["insertionSort"] = JSON.parse(data.toString("utf8"));

    if (allFinisheds()) {
      save();
    }
  });

  heapSpawn.stdout.on("data", function (data) {
    console.log("Terminou heap");
    averages["heapSort"] = JSON.parse(data.toString("utf8"));

    if (allFinisheds()) {
      save();
    }
  });

  bubbleSpawn.stdout.on("data", function (data) {
    console.log("Terminou bubble");
    averages["bubbleSort"] = JSON.parse(data.toString("utf8"));

    if (allFinisheds()) {
      save();
    }
  });
};

if (checkIfFileExists()) {
  averages = getAvgFromFile();
} else {
  calculateAverages();
}

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  const {
    bubbleSort,
    heapSort,
    insertionSort,
    mergeSort,
    quickSort,
    selectionSort,
  } = averages;

  console.log(averages);

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

app.listen(PORT);

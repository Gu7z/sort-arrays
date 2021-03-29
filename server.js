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
    heapSort: false,
    selectionSort: false,
    mergeSort: false,
    insertionSort: false,
    bubbleSort: false,
    quickSort: false,
  };

  const allFinisheds = () =>
    Object.values(finisheds).every((each) => each === false);

  const save = () => {
    fs.appendFile("averages.json", JSON.stringify(averages), function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  };

  const saveToAverages = (name, data) => {
    averages[name] = JSON.parse(data.toString("utf8"));
    finisheds[name] = true;

    console.log(`finalizou o ${name}`);

    if (allFinisheds()) {
      save();
    }
  };

  quickSpawn.stdout.on("data", (data) => saveToAverages("quickSort", data));

  selectionSpawn.stdout.on("data", (data) =>
    saveToAverages("selectionSort", data)
  );

  mergeSpawn.stdout.on("data", (data) => saveToAverages("mergeSort", data));

  insertionSpawn.stdout.on("data", (data) =>
    saveToAverages("insertionSort", data)
  );

  heapSpawn.stdout.on("data", (data) => saveToAverages("heapSort", data));

  bubbleSpawn.stdout.on("data", (data) => saveToAverages("bubbleSort", data));
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

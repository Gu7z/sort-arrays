const express = require("express");
const averages = require("./makeTheMagic");
const path = require("path");
const app = express();

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

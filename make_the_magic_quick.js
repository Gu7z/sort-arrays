const quickSort_random = require("./magic/quickSort/random");
const quickSort_sorted = require("./magic/quickSort/sorted");
const quickSort_invert = require("./magic/quickSort/invert");

console.log(
  JSON.stringify({
    quickSort_random,
    quickSort_sorted,
    quickSort_invert,
  })
);

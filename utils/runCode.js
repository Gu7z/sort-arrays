const perfy = require("perfy");

const runCode = (algorithmToRun, array, arrayToPush) => {
  perfy.start("label-start");
  algorithmToRun(array);
  let end = perfy.end("label-start").time;

  arrayToPush.push(end);
};

module.exports = runCode;

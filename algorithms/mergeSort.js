const mergeSort = (array) => {
  const newArray = [...array];
  const middle = Math.floor(newArray.length / 2);
  const right = newArray.slice(middle, array.length);
  const left = newArray.slice(0, middle);
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
};

module.exports = mergeSort;

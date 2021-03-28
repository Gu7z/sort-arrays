function quickSortIterative(array) {
  const arr = [...array];
  stack = [];

  stack.push(0);
  stack.push(arr.length - 1);

  while (stack[stack.length - 1] >= 0) {
    end = stack.pop();
    start = stack.pop();

    pivotIndex = partition(arr, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }

  return arr;
}

module.exports = quickSortIterative;

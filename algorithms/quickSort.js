function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

const quickSort = (items) => {
  const newArray = [...items];
  const middle = Math.floor(newArray.length / 2);
  const right = newArray.slice(middle, items.length);
  const left = newArray.slice(0, middle);

  var index;
  if (newArray.length > 1) {
    index = partition(newArray, left, right);
    if (left < index - 1) {
      quickSort(newArray, left, index - 1);
    }
    if (index < right) {
      quickSort(newArray, index, right);
    }
  }
  return newArray;
};

module.exports = quickSort;

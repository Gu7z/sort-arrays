var array_length;
/* to create MAX  array */
function heap_root(input, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left;
  }

  if (right < array_length && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    heap_root(input, max);
  }
}

function swap(input, index_A, index_B) {
  var temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
}

function heapSort(input) {
  const array = [...input];
  array_length = array.length;

  for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heap_root(array, i);
  }

  for (i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    array_length--;

    heap_root(array, 0);
  }

  return array;
}

module.exports = heapSort;

// create max heap
function maxHeap(input, i, arrLength) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < arrLength && input[left] > input[max]) {
    max = left;
  }

  if (right < arrLength && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    maxHeap(input, max, arrLength);
  }
}

const swap = (input, indexA, indexB) => {
  const temp = input[indexA];

  input[indexA] = input[indexB];
  input[indexB] = temp;
};

const heapSort = (input) => {
  const output = [...input];
  let arrLength = output.length;

  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    maxHeap(output, i, arrLength);
  }

  for (let i = output.length - 1; i > 0; i--) {
    swap(output, 0, i);
    arrLength--;

    maxHeap(output, 0, arrLength);
  }

  return output;
};

module.exports = heapSort;

const makeBubbleSortDataSetSorted = () => {
  const { bubbleSort_sorted } = bubbleSort;

  const newData = [];

  for (let each in bubbleSort_sorted[0]) {
    newData.push(
      bubbleSort_sorted[0][each],
      bubbleSort_sorted[1][each],
      bubbleSort_sorted[2][each]
    );
  }

  const bubbleSortDataSet = {
    data: newData,
    label: "bubbleSort",
    borderColor: "#50AD1A",
    fill: false,
  };

  return bubbleSortDataSet;
};

const makeHeapSortDataSetSorted = () => {
  const { heapSort_sorted } = heapSort;

  const newData = [];

  for (let each in heapSort_sorted[0]) {
    newData.push(
      heapSort_sorted[0][each],
      heapSort_sorted[1][each],
      heapSort_sorted[2][each]
    );
  }

  const heapSortDataSet = {
    data: newData,
    label: "heapSort",
    borderColor: "#C014FB",
    fill: false,
  };

  return heapSortDataSet;
};

const makeInsertionSortDataSetSorted = () => {
  const { insertionSort_sorted } = insertionSort;

  const newData = [];

  for (let each in insertionSort_sorted[0]) {
    newData.push(
      insertionSort_sorted[0][each],
      insertionSort_sorted[1][each],
      insertionSort_sorted[2][each]
    );
  }

  const insertionSortDataSet = {
    data: newData,
    label: "insertionSort",
    borderColor: "#CB18C5",
    fill: false,
  };

  return insertionSortDataSet;
};

const makeMergeSortDataSetSorted = () => {
  const { mergeSort_sorted } = mergeSort;

  const newData = [];

  for (let each in mergeSort_sorted[0]) {
    newData.push(
      mergeSort_sorted[0][each],
      mergeSort_sorted[1][each],
      mergeSort_sorted[2][each]
    );
  }

  const mergeSortDataSet = {
    data: newData,
    label: "mergeSort",
    borderColor: "#C8FA25",
    fill: false,
  };

  return mergeSortDataSet;
};

const makeQuickSortDataSetSorted = () => {
  const { quickSort_sorted } = quickSort;

  console.log(quickSort_sorted);

  const newData = [];

  for (let each in quickSort_sorted[0]) {
    newData.push(
      quickSort_sorted[0][each],
      quickSort_sorted[1][each],
      quickSort_sorted[2][each]
    );
  }

  const quickSortDataSet = {
    data: newData,
    label: "quickSort",
    borderColor: "#2B68A3",
    fill: false,
  };

  return quickSortDataSet;
};

const makeSelectionSortDataSetSorted = () => {
  const { selectionSort_sorted } = selectionSort;

  const newData = [];

  for (let each in selectionSort_sorted[0]) {
    newData.push(
      selectionSort_sorted[0][each],
      selectionSort_sorted[1][each],
      selectionSort_sorted[2][each]
    );
  }

  const selectionSortDataSet = {
    data: newData,
    label: "selectionSort",
    borderColor: "#80D48E",
    fill: false,
  };

  return selectionSortDataSet;
};

const dataSetsSorted = [];
dataSetsSorted.push(makeBubbleSortDataSetSorted());
dataSetsSorted.push(makeHeapSortDataSetSorted());
dataSetsSorted.push(makeInsertionSortDataSetSorted());
dataSetsSorted.push(makeMergeSortDataSetSorted());
dataSetsSorted.push(makeQuickSortDataSetSorted());
dataSetsSorted.push(makeSelectionSortDataSetSorted());

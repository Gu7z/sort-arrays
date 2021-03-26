const makeBubbleSortDataSetInvert = () => {
  const { bubbleSort_invert } = bubbleSort;

  const newData = [];

  for (let each in bubbleSort_invert[0]) {
    newData.push(
      bubbleSort_invert[0][each],
      bubbleSort_invert[1][each],
      bubbleSort_invert[2][each]
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

const makeHeapSortDataSetInvert = () => {
  const { heapSort_invert } = heapSort;

  const newData = [];

  for (let each in heapSort_invert[0]) {
    newData.push(
      heapSort_invert[0][each],
      heapSort_invert[1][each],
      heapSort_invert[2][each]
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

const makeInsertionSortDataSetInvert = () => {
  const { insertionSort_invert } = insertionSort;

  const newData = [];

  for (let each in insertionSort_invert[0]) {
    newData.push(
      insertionSort_invert[0][each],
      insertionSort_invert[1][each],
      insertionSort_invert[2][each]
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

const makeMergeSortDataSetInvert = () => {
  const { mergeSort_invert } = mergeSort;

  const newData = [];

  for (let each in mergeSort_invert[0]) {
    newData.push(
      mergeSort_invert[0][each],
      mergeSort_invert[1][each],
      mergeSort_invert[2][each]
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

const makeQuickSortDataSetInvert = () => {
  const { quickSort_invert } = quickSort;

  console.log(quickSort_invert);

  const newData = [];

  for (let each in quickSort_invert[0]) {
    newData.push(
      quickSort_invert[0][each],
      quickSort_invert[1][each],
      quickSort_invert[2][each]
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

const makeSelectionSortDataSetInvert = () => {
  const { selectionSort_invert } = selectionSort;

  const newData = [];

  for (let each in selectionSort_invert[0]) {
    newData.push(
      selectionSort_invert[0][each],
      selectionSort_invert[1][each],
      selectionSort_invert[2][each]
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

const dataSetsInvert = [];
dataSetsInvert.push(makeBubbleSortDataSetInvert());
dataSetsInvert.push(makeHeapSortDataSetInvert());
dataSetsInvert.push(makeInsertionSortDataSetInvert());
dataSetsInvert.push(makeMergeSortDataSetInvert());
dataSetsInvert.push(makeQuickSortDataSetInvert());
dataSetsInvert.push(makeSelectionSortDataSetInvert());

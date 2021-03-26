const makeBubbleSortDataSetRandom = () => {
  const { bubbleSort_random } = bubbleSort;

  const newData = [];

  for (let each in bubbleSort_random[0]) {
    newData.push(
      bubbleSort_random[0][each],
      bubbleSort_random[1][each],
      bubbleSort_random[2][each]
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

const makeHeapSortDataSetRandom = () => {
  const { heapSort_random } = heapSort;

  const newData = [];

  for (let each in heapSort_random[0]) {
    newData.push(
      heapSort_random[0][each],
      heapSort_random[1][each],
      heapSort_random[2][each]
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

const makeInsertionSortDataSetRandom = () => {
  const { insertionSort_random } = insertionSort;

  const newData = [];

  for (let each in insertionSort_random[0]) {
    newData.push(
      insertionSort_random[0][each],
      insertionSort_random[1][each],
      insertionSort_random[2][each]
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

const makeMergeSortDataSetRandom = () => {
  const { mergeSort_random } = mergeSort;

  const newData = [];

  for (let each in mergeSort_random[0]) {
    newData.push(
      mergeSort_random[0][each],
      mergeSort_random[1][each],
      mergeSort_random[2][each]
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

const makeQuickSortDataSetRandom = () => {
  const { quickSort_random } = quickSort;

  console.log(quickSort_random);

  const newData = [];

  for (let each in quickSort_random[0]) {
    newData.push(
      quickSort_random[0][each],
      quickSort_random[1][each],
      quickSort_random[2][each]
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

const makeSelectionSortDataSetRandom = () => {
  const { selectionSort_random } = selectionSort;

  const newData = [];

  for (let each in selectionSort_random[0]) {
    newData.push(
      selectionSort_random[0][each],
      selectionSort_random[1][each],
      selectionSort_random[2][each]
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

const dataSetsRandom = [];
dataSetsRandom.push(makeBubbleSortDataSetRandom());
dataSetsRandom.push(makeHeapSortDataSetRandom());
dataSetsRandom.push(makeInsertionSortDataSetRandom());
dataSetsRandom.push(makeMergeSortDataSetRandom());
dataSetsRandom.push(makeQuickSortDataSetRandom());
dataSetsRandom.push(makeSelectionSortDataSetRandom());

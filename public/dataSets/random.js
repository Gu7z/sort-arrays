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

const dataSetsRandom = [];
dataSetsRandom.push(makeBubbleSortDataSetRandom());

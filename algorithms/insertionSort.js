const insertionSort = (vet) => {
  let i,
    j,
    aux,
    cont = 0;
  for (i = 1; i < vet.length; i++) {
    aux = vet[i];
    for (j = i; j > 0 && aux < vet[j - 1]; j--) {
      vet[j] = vet[j - 1];
    }
    if (vet[j] != aux) cont++;
    vet[j] = aux;
  }
  return vet;
};

module.exports = insertionSort;

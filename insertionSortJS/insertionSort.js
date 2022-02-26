function insertion_sort(arreglo1) {
  arreglo_ord = arreglo1;

  for (i = 1; i < arreglo_ord.length; i++) {
    j = i;
    while (j >= 1 && arreglo_ord[j] < arreglo_ord[j - 1]) {
      aux = arreglo_ord[j];
      arreglo_ord[j] = arreglo_ord[j - 1];
      arreglo_ord[j - 1] = aux;
      j--;
    }
  }
  return arreglo_ord;
}

console.log('test insertion sort', insertion_sort([10, -20, 15, -3, 8]));
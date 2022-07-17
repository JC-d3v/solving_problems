function selection_sort(arregloBase) {
  arreglo_ord = arregloBase;
  for (i = 0; i < arreglo_ord.length - 1; i++) {
    min_value = arreglo_ord[i];
    min_pos = i;
    for (j = i + 1; j < arreglo_ord.length; j++) {
      if (arreglo_ord[j] < min_value) {
        min_pos = j;
        min_value = arreglo_ord[j];
      }
    }

    if (i != min_pos) {
      aux = arreglo_ord[i];
      arreglo_ord[i] = arreglo_ord[min_pos];
      arreglo_ord[min_pos] = aux;

    }
  }
  return arreglo_ord;

}
console.log('test selection sort', selection_sort([10, -9, 15, -3, 8]));

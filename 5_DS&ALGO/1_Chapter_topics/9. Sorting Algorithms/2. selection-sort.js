// Every item compares with all item and updates the min and at last we swap the min with i if not the same.
function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}


console.log(selectionSort([7,8,9,4,56,62,1,2,3]))
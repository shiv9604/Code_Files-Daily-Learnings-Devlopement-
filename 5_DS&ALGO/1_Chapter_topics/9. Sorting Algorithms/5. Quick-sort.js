function swap(array, first, second) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
}

function pivot(array, pivotIndex = 0, lastIndex = array.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= lastIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
  let pivotIndex = pivot(array, left, right);
    if(left < right) {
        quickSort(array,left,pivotIndex-1)
        quickSort(array,pivotIndex+1,right)
    }
  return array;
}
let arr = [4, 6, 1, 7, 3, 2, 5];

console.log(quickSort(arr));

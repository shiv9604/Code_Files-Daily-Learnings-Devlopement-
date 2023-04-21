// We start from second value and we compare it to all elements to the left and if value is less then left element we swap it with the right element.
function insertionSort(arr){
    // [7,8,9,4,56,62,1,2,3]
    let temp;
    for(var i = 1; i<arr.length; i++){
      temp = arr[i];
      for(var j = i -1; arr[j]>temp && j>=0;j--){
        arr[j+1] = arr[j];
      }
      arr[j+1] = temp;
    }
    return arr;
}
console.log(insertionSort([7,8,9,4,56,62,1,2,3]))


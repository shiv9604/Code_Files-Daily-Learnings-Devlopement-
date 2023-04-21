// We compare the current item with its next item and if its greater then next one we swap it with next item and last item will get bubbled so we reduce the itration by one step after every opration.
function bubbleSort(arr){
    // [7,8,9,4,56,62,1,2,3]
    for(let i = arr.length-1; i >= 0; i--){
      for(let j = 0; j<i;j++){
        if(arr[j]>arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
      }
    }
    return arr;
}

console.log(bubbleSort([7,8,9,4,56,62,1,2,3]))
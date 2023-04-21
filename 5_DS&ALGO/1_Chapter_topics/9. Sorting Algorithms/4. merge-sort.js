// Itrates over 2 array with index 0 and compares 0th values of both array and push to combinedArray  if first value is lower than second value else the seodn value wil get pushed.
function merge(arr1, arr2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j< arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++
    } else {
      combined.push(arr2[j]);
      j++
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++
  }

  while (i < arr2.length) {
    combined.push(arr2[j]);
    j++
  }

  return combined;
}

function mergeSort(arr){
  if(arr.length==1) return arr;
  let mid = Math.floor((arr.length -1)/2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([4,5,9,7,8,65,4,1,2]))

 //# sourceURL=snippet:///Script%20snippet%20%233
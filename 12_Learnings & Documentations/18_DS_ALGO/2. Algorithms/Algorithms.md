# Algorithms
Algorithms are the solutions to solve the problems by breaking down problem into subproblem and implementing step by step solution for smaller problems and achieving solution for larger problem.

### Kaden's Algorithm
Kaden's algorithm is dynamic programming approach algorithm for solving subarray max and min problem.

### Sliding window technique
**What :-** Sliding window is dynamic programming technique for solving subarray, substring problem which satisfies a given condition, And it is frequently asked in interviews.

**How :-** Simply we maintain a initial substring or subarray as our window and we resize and move that window with larger list until we find our solution.

**Benifits :-** we can reduce the time complexity of nested for loops of `O(n^2)` to `O(n)` in terms of subarrays and substrings specific problems where subarray need to meet an critiria such as min, max, sum, length etc.

**Examples with solutions :-**

**Approach for finding Subarrays with fixed size :-**

In this appoach as we given the size as static we just need to move the subarrays with that much step ahead in the array as mentioned below.

1. **Given an array of integers find the maxisum sum of subarrays of size k, k can be 1, 2, 3...n where n would represent the length of array. :-**

    ```
    function findMaxSumWithSW(arr, size) {
        let windowSum = 0;
        let maxSum = 0;

        // Calculate sum for the initial window
        for (let i = 0; i < size; i++) {
            windowSum += arr[i];
        }

        // Set maxSum to the sum of the first window
        maxSum = windowSum;

        // Slide the window over the rest of the array
        for (let i = size; i < arr.length; i++) {
            // Slide the window: remove the first element and add the current element
            windowSum = windowSum - arr[i - size] + arr[i];

            // If the new window sum is greater than maxSum, update maxSum
            if (windowSum > maxSum) {
                maxSum = windowSum;
            }
        }

        return maxSum;
    }

    const arr = [5,2,1,4,3];
    const result = findMaxSumWithSW(arr,3);
    console.log(result);
    ```

2. **If we want to get the subarray which matches the condition or which leads to max sum we can achieve it with below solution. :-**

    ```
        function findMaxSumWithSW(arr, size) {
            let windowSum = 0;
            let maxSum = 0;
            let startIndex = 0;
            let endIndex = 0;

            // Calculate sum for the initial window
            for (let i = 0; i < size; i++) {
                windowSum += arr[i];
            }

            // Set maxSum to the sum of the first window
            maxSum = windowSum;
            endIndex = size - 1;

            // Slide the window over the rest of the array
            for (let i = size; i < arr.length; i++) {
                // Slide the window: remove the first element and add the current element
                windowSum = windowSum - arr[i - size] + arr[i];

                // Update maxSum and indices if current window sum is greater
                if (windowSum > maxSum) {
                    maxSum = windowSum;
                    startIndex = i - size + 1;
                    endIndex = i;
                }
            }

            // Slice the array to get the subarray with max sum
            const maxSumSubarray = arr.slice(startIndex, endIndex + 1);

            console.log("Subarray with maximum sum:", maxSumSubarray);
            return maxSumSubarray;
        }

        const arr = [5, 2, 1, 4, 3];
        const result = findMaxSumWithSW(arr, 3);
        console.log(result);
    ```

**Approach to find subarrays with target value but size is dynamic:-**

### Binary Search

We have linear search algorithm in which we directly loop through the array and look for value & just return it, but when we are dealing with millions of data then its not efficient.

Time complexity of linear search is `O(n)` where binary search is `O(log n)` which is far better than linear search, ie if we have data for 1 million values in it linear search will be iterating over it for million times in worst case where binary search would do it in 20 iteration, lets see how that magic works.

**When binary search will work (Conditional):-**
1. When array is sorted in ascending order.
2. When array is sorted in descending order
3. When array is sorted & rotated in ascending order.
4. When array is sorted & rotated in descending order.


**Steps :-**

1. Declare the start with starting index of array & end as last index of the array.
2. Loop through the array untill start is greater than or equal to end which indicates the end of array.
3. Find middle on each iteration by adding `Math.floor((start + end) / 2)`, compare the value with mid if it matches return it.
4. If target Value is greater than mid then we shift start to mid + 1 to cancel out left part of array.
5. If target value is less than mid then we shift end to mid - 1 to cancel out the array.
6. At some point array would be splitted till the 1 or 2 elements in it where middle would contain the target value.
7. Return false or -1 if target value is not found.

**Algorithm Approaches :-**

1. **Iterative Approach :-** 
   
   In this approach we use while loop untill left is greater than or equal to right.
```
function findIndexOfTarget(target, array){
    let start = 0;
    let end = array.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((left + right) / 2) ;
        // console.log(middle);
        if (target === array[middle]) return middle;
        
        if (target > array[middle]) {
            start = middle + 1;  
        } 
        else {
            end = middle - 1;
        }
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5];
const target = 4;
console.log(findIndexOfTarget(target, arr));
```

2. **Recursion Approach :-**

    In this approach, we just replace our iteration loop with recursive function which calls itself recursively by modifying the start & end pointers modifying accordingly.

    ```
    function recursiveSearch(target, start, end,array) {
    if (start > end) return;

    const middle = Math.floor((start + end) / 2);

    if (target === array[middle]) return middle;

    if (target > array[middle]) {
        findIndexOfTarget(target, middle + 1)
    } 
    else {
        findIndexOfTarget(target, middle -1)
    }
    
    return -1;
    }

    const arr = [1, 2, 3, 4, 5];
    const target = 4;
    const start = arr[0];
    const end = arr[arr.length -1];
    console.log(recursiveSearch(target,start,end,arr));
    ``` 

**Variations :-**

1. **Ascending sorted array :-** (When value is greater than mid then we need to shift start ahead of mid because values left to middle will be less than it.)
   
   ```
    function findIndexOfTarget(target, array){
        let start = 0;
        let end = array.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2) ;
        // console.log(middle);
        if (target === array[middle]) return middle;
        
        if (target > array[middle]) {
            start = middle + 1;  
        } 
        else {
            end = middle - 1;
        }
    }
    return -1;
    }
    const arr = [1, 2, 3, 4, 5];
    const target = 4;
    console.log(findIndexOfTarget(target,arr))
   ```

2. **Descending sorted array :-** (When value is greater than mid of array then we need to shift the end to left to middle because values to right will be less than mid due to descending order)

    ```
    function findIndexOfTarget(target, array){
    let start = 0;
    let end = array.length - 1;
    
    while (start <= end) {
        let middle = Math.floor((start + end) / 2) ;
        // console.log(middle);
        if (target === array[middle]) return middle;
        
        if (target > array[middle]) {
            end = middle - 1;  
        } 
        else {
            start = middle + 1;
        }
    }
    return -1;
    }
    const arr = [5,4,3,2,1];
    const target = 5;
    console.log(findIndexOfTarget(target,arr))
    ```


**Binary Search on rotative sorted array :-**

Rotative sorted array are nothing but sorted array which lies before or after pivot point, We need to approach it in following order.

**Steps :-**
1. Declare the start with starting index of array & end as last index of the array.
2. Loop through the array untill start is greater than or equal to end which indicates the end of array.
3. Find middle on each iteration by adding `Math.floor((start + end) / 2)`, compare the value with mid if it matches return it.
4. Identify which side or array is sorted in if & else block.
5. If left side is sorted then check if value lies between the start and the mid value then shift end to mid - 1 else shift start to mid + 1.
6. If the right side is sorted then check if value values lies between mid of the arrat & less than end of the array then shift start to mid + 1 else shift end to mid -1.

**Ascending sorted arrays :-**

```
// Binary search for ascending rotated sorted array.
function findIndexOfTarget(target, array){
    let start = 0;
    let end = array.length - 1;

while (start <= end) {
    let middle = Math.floor((start + end) / 2) ;
    // console.log(middle);
    if (target === array[middle]) return middle;
    
    // If left side is sorted.
    if (array[start] <= array[middle]) {
        

        if (target >= array[start] && target < array[middle]) { 
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
        
    } 
    // If right side is sorted
    else {
        if (target > array[mid] && target <= array[end]) { 
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
}
return -1;
}
const arr = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(findIndexOfTarget(target, arr))
```

**Steps :-**
1. Declare the start with starting index of array & end as last index of the array.
2. Loop through the array untill start is greater than or equal to end which indicates the end of array.
3. Find middle on each iteration by adding `Math.floor((start + end) / 2)`, compare the value with mid if it matches return it.
4. Identify which side or array is sorted in if & else block.
5. If left side is sorted then check if value lies between the start and the mid value then shift end to mid - 1 else shift start to mid + 1.
6. If the right side is sorted then check if value values lies between mid of the arrat & less than end of the array then shift start to mid + 1 else shift end to mid -1.

**Descending sorted arrays :-**

```
// Binary search for descending rotated sorted array
function findIndexOfTarget(target, array){
    let start = 0;
    let end = array.length - 1;

while (start <= end) {
    let middle = Math.floor((start + end) / 2) ;
    // console.log(middle);
    if (target === array[middle]) return middle;
    
    // If left side is sorted.
    if (array[middle] <= array[start]) {
        

        if (target <= array[start] && target > array[middle]) { 
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
        
    } 
    // If right side is sorted
    else {
        if (target < array[middle] && target >= array[end]) { 
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
}
return -1;
}
const arr = [5, 4, 3, 2, 1] ;
const target = 6;
console.log(findIndexOfTarget(target, arr))
```

**Binary search to find min rotated sorted array :-**
1. We start by identifying start & end indices of array traditionally with 0 th & last index of array.
2. Loop through the array untill start is greater than end which indicates the end of array.
3. Find middle on each iteration by adding `Math.floor((start + end) / 2)`.
4. If middle element is greater than end element the minimum must lie on right side set start = mid + 1 to cancel out left part of array, because end element is always sorted in charecteristics of rotated array.
5. If middle element is less than or equal to end element ,minimum lies on left half we set end to mid which cuts the right portion of array.

`(It shifts the start incrementally till the comparision of mid is greater than end and when it become false it shifts end to mid to cut down right part, when both index come at same place loop stops and we remain with min value)`

```
function findMin(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        // If mid element is greater than the end element, the minimum is on the right half
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            // Otherwise, the minimum is in the left half (or mid itself)
            end = mid;
        }
    }

    return nums[start];  // Or nums[end], both are the same at this point
}
const arr = [3, 1, 2];
console.log(findMin(arr));
```

**Find Max in asc rotated sorted array (Index prior to min element is always maximum element) :-**
1. 1. We start by identifying start & end indices of array traditionally with 0 th & last index of array.
2. Loop through the array untill start is greater than end which indicates the end of array.
3. Find middle on each iteration by adding `Math.floor((start + end) / 2)`.
4. If middle element is greater than end element the minimum must lie on right side set start = mid + 1 to cancel out left part of array, because end element is always sorted in charecteristics of rotated array.
5. If middle element is less than or equal to end element ,minimum lies on left half we set end to mid which cuts the right portion of array.

`(When we get min element of the array, max element is always index prior to min due to ascending nature of array, so return min -1 and if min = 0 then return arr.length - 1)`

```
function findMin(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        // If mid element is greater than the end element, the minimum is on the right half
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            // Otherwise, the minimum is in the left half (or mid itself)
            end = mid;
        }
    }

    return nums[start];  // Or nums[end], both are the same at this point
}

function findMax(nums) {
    const min = findMin(nums);
    const max = min === 0 ? nums.length -1 : min -1;
    return max; 
}
const arr = [3, 1, 2];
console.log(findMax(arr));
```

### Dutch National Flag Algorithm

Traditional sort algorithm have time complexity of O(n log n)

This algorithm used for sorting the the arrays of set of values with `O(n)` & space complexity of `O(1)`.

**Steps :-**
1. Main 3 variables, low, mid & high to sort the array in place.
2. Assign 0 to low & mid and arr.length-1 to high.
3. Iterate throug the array with while loop where where mid <= high which indicates all array has been sorted.
4. If mid is 0 then swap with low & increment low & mid.
5. If mid is 1 then its at right place, just increment the mid.
6. If mid is 2 then swap it with high & decrement high.
7. Till the loop ends 0s, 1s & 2s will be sorted in place.
   

```
function sortArrayWithDNA(arr){
function sortArrayWithDNA(a) { 
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    let temp;

    while (mid <= high) {
        switch (a[mid]) {
            // If mid is 0 means it should be replaced with low.
            case 0:
                temp = a[low];
                a[low] = a[mid];
                a[mid] = temp;
                low++;
                mid++;
                break;
            
            // If 1 at mid means its at right place.
            case 1:
                mid++;
                break;
            
            case 2:
                temp = a[mid];
                a[mid] = a[high];
                a[high] = temp;
                high--;
                break;
        }
    }
    return a;
}
}
```


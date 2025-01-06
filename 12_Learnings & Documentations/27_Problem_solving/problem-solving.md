# Problem Solving

In this docs we will be maintaining all the problems we have resolved till the date, what mistakes we made, how we optimized the solutions and its approches.

## Easy

### HackerRank - Students Grading

<img src="./easy/student-grading-1.png">
<img src="./easy/student-grading-2.png">
<img src="./easy/student-grading-3.png">

**Bruteforce Approach :-**
1. If the score is less than 38 then its failing score & no need to round or process it.
2. If the score is greater than 38 find its next multiple of 5.
3. If the (multiplier - orignal = < 3) then return next multiplier or the orignal grade. 

```
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
/*
Algorithm
1. If the score is less than 38 then its failing score & no need to round or process it.
2. If the score is greater than 38 find its next multiple of 5.
3. If the (multiplier - orignal = < 3) then return next multiplier or the orignal grade. 
*/
function gradingStudents(grades) {
    // Write your code here
    function roundGrade(grade){
        if(grade < 38) return grade;
        // We are finding multiplier by dividing number by find to get difference & then adding that difference to the number to make it divisible by 5.
        const multiplier = Math.ceil(grade / 5) * 5;
        return (multiplier - grade) < 3 ? multiplier : grade;        
    }
    
    // Round every grade & print result.
    const results = grades.map((value,index)=>roundGrade(value));
    return results;
}
```

**Optimisations :-**

1. Comments Optimisation.

```
function gradingStudents(grades) {
    // Write your code here
    
    // Rounding grade.
    function roundGrade(grade){
        if(grade < 38) return grade;
        const multiplier = Math.ceil(grade / 5) * 5; // Finding next multiplier.
        return (multiplier - grade) < 3 ? multiplier : grade; // Return valid grades.
    }
    
    // Grade rouding & printing result
    const results = grades.map((value,index)=>roundGrade(value));
    return results;
}
```

**Final Optimised Solution :-**

```
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
/*
Algorithm
1. If the score is less than 38 then its failing score & no need to round or process it.
2. If the score is greater than 38 find its next multiple of 5.
3. If the (multiplier - orignal = < 3) then return next multiplier or the orignal grade. 
*/
function gradingStudents(grades) {
    // Write your code here
    
    // Rounding grade.
    function roundGrade(grade){
        if(grade < 38) return grade;
        const multiplier = Math.ceil(grade / 5) * 5; // Finding next multiplier.
        return (multiplier - grade) < 3 ? multiplier : grade; // Return valid grades.
    }
    
    // Grade rouding & printing result
    const results = grades.map((value,index)=>roundGrade(value));
    return results;
}
```

### HackerRank - Apple & Orange

<img src="./easy/apple-orange-1.png">
<img src="./easy/apple-orange-2.png">
<img src="./easy/apple-orange-3.png">

**Bruteforce Approach :-**
1. declare sams house range.
2. Checkout the fall for apple (valid if positive) and orange (valid if negative) trees.
3. Calculate if fallen apple & oranges is in the range of sams house & store in different results.
4. Print Apples on first line & Oranges on second line.

```
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s : start point of sams house
 *  2. INTEGER t : end point of sams house
 *  3. INTEGER a : apple tree location
 *  4. INTEGER b : orange tree location
 * 
 * Distance Inputs 
 * 
 * ----- Negative means left of tree & positive means right of -----
 *  
 * 5. INTEGER_ARRAY apples : array consists where apple falled
 * 6. INTEGER_ARRAY oranges
 */

// Teminologies for the problem
// a : apple tree
// b : orange tree
// m : apples
// n : oranges
// s : start of sams house
// t : end of sams house

/*
Algorithm
1. declare sams house range.
2. Checkout the fall for apple (valid if positive) and orange (valid if negative) trees.
3. Calculate if fallen apple & oranges is in the range of sams house & store in different results.
4. Print Apples on first line & Oranges on second line.
*/ 
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    
    // Validates single fruit
    function considerFruit(position, isApple){
        // Apple is invalid if position is left to tree or orange is invalid if position is right.
        const invalidPosition = isApple ? position.toString().includes('-') : !position.toString().includes('-');
        if(invalidPosition) return false;
        
        // Calculate and check distance of fruit from their respective tree and does it falls within sams house range.
        const fDistance = isApple ? a + (position) : b + (position);
        const valid = fDistance >= s && fDistance <= t;
        return valid
    }
    
    // Returns Valid Fruits
    function validateFruits(fruits, isApples){
        const result = fruits.filter((value,index)=>{
            return considerFruit(value, isApples);
        })
        return result
    }
    
    const validApples = validateFruits(apples, true);
    const validOranges = validateFruits(oranges, false);

    // Apple & Oranges landeded on sams house 
    console.log(validApples.length);
    console.log(validOranges.length);
}
```

**Optimisations Done :-**
1. Remove redundant check for invalid fruit position because it will not be considered if its not within the range.
   
    ```
    // Returns Valid Fruits
    function getFruitsCount(fruits, isApples){
        const result = fruits.reduce((count,value)=>{
            if(considerFruit(value, isApples)) count++;
        },0)
        return result
    }
    ```

2. `validApples` & `validOranges` storing the array of length `n` which builds up space complexity of `O(m+n)` so removed it by returning directly the fruit count from validateFruit function which brought space complexity to `O(1)`.
   
3. Resolved `getFruitsCount` function returning undefined due to non returned values from it.
   
```
    // Returns Valid Fruits
    function getFruitsCount(fruits, isApples){
        const result = fruits.reduce((count,value)=>{
            return if(considerFruit(value, isApples)) count++;
        },0)
        return result
    }
```

4. Optimise `getFruitsCount` by resolving count not updating due to used return statement with `count++` in reduce which was returning the count as it and then updating, replaced with `count + 1`.

```
   // Returns Valid Fruits
    function getFruitsCount(fruits, isApples){
        const result = fruits.reduce((count,value)=>{
            return if(considerFruit(value, isApples)) ?  count + 1 : count;
        },0)
        return result
    }
```

5. Optimise `considerFruit` & `getFruitsCount` function for removal of `isApple` dependency and directly passing `treePosition`.
   
   ```
   function considerFruit(position, treePosition){
        // Calculate and check distance of fruit from their respective tree and does it falls within sams house range.
        const fDistance = position + treePosition;
        const valid = fDistance >= s && fDistance <= t;
        return valid
    }

    function getFruitsCount(fruits, treePosition){
        const result = fruits.reduce((count,value)=>{
            return considerFruit(value, treePosition) ? ++count : count;
        },0)
        return result
    }
   ```

6. Optimise Comments.

```
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    // Write your code here
    
    // Fruit considerability checker.
    function considerFruit(position, treePosition){
        const fDistance = position + treePosition; // Calculate fruit distance from tree.
        return fDistance >= s && fDistance <= t; // Check distance validity.
    }
    
    // Fruits count getter.
    function getFruitsCount(fruits, treePosition){
        return fruits.reduce((count,value)=>considerFruit(value, treePosition) ? count + 1 : count,0)
    }

    // Result Output
    console.log(getFruitsCount(apples, a));
    console.log(getFruitsCount(oranges, b));   
}
```

**Final Optimised Solution :-**

```
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s : start point of sams house
 *  2. INTEGER t : end point of sams house
 *  3. INTEGER a : apple tree location
 *  4. INTEGER b : orange tree location
 * 
 * Distance Inputs 
 * 
 * ----- Negative means left of tree & positive means right of -----
 *  
 * 5. INTEGER_ARRAY apples : array consists where apple falled
 * 6. INTEGER_ARRAY oranges
 */

// Teminologies for the problem
// a : apple tree
// b : orange tree
// m : apples
// n : oranges
// s : start of sams house
// t : end of sams house

/*
Algorithm
1. declare sams house range.
2. Checkout the fall for apple (valid if positive) and orange (valid if negative) trees.
3. Calculate if fallen apple & oranges is in the range of sams house & store in different results.
4. Print Apples on first line & Oranges on second line.
*/ 
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    
    // Fruit considerability checker.
    function considerFruit(position, treePosition){
        const fDistance = position + treePosition; // Calculate fruit distance from tree.
        return fDistance >= s && fDistance <= t; // Check distance validity.
    }
    
    // Fruits count getter.
    function getFruitsCount(fruits, treePosition){
        return fruits.reduce((count,value)=>considerFruit(value, treePosition) ? count + 1 : count,0)
    }

    // Result Output
    console.log(getFruitsCount(apples, a));
    console.log(getFruitsCount(oranges, b));   
}
```

### Kangaroo Number line jumps

<img src="./easy/kangaroo-step-1.png">
<img src="./easy/kangaroo-step-2.png">

**Brutforce approach :-**

1. Calculate the first step location by adding `x1 + x2`.
2. Check if `kangaroo 1 (x1 + v1)` does reaches to same distance when `kangaroo 2 (x2 + v2)`, if they are at same location after first step they will be in same manner no matter how much steps will be.

```
/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

/*
Terminologies
x1 = first kangaro location
x2 = second kangaro location
v1 = x1 jumps this much meters
v2 = x2 jumps this much meters
 
Algorithm
1. Calculate the total location of x1 & x2 get one step ahead location.
2. Checkout if first kangaro after one jump reaches to same as kangaro 2. 
 */
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    // If second kangaroo start ahead with more step its already no.
    if(x2 > x1 && v2 > v1) return 'NO';
    
    // Calculate distance after first step
    const disAfterOneStep = x1 + x2;
    
    // Check if both kangaroos at same location after first step.
    return x1 + v1 && x2 + v2 ? 'YES' : 'NO'

}
```

**Optimisations :-**

1. Handle if kangaroo 2 start ahead of kangaro 1 with bigger step then either ways they will never will be match up.

```
    // If second kangaroo start ahead with more step its already no.
    if(x2 > x1 && v2 > v1) return 'NO';
    
```

2. Undestand how to identify if they are reaching to same location if their starting position and velocity are different, Velocity diff should be divisible by distance diff then only they will match up at destination location.
   
   ```
       // Calculate distance after first step
    const stepDiff = x1 - x2;
    const velocityDiff = v2-v1;
    
    // To match same position at end distance should be divisble by velocity diff.
    return stepDiff %  velocityDiff == 0 ? 'YES' : 'NO'
   ```

3. Sometimes velocity diff can be negative because we dont konw which one is greater and which to minus from which so we need to convert the negative velocity diff to positive to get accurate divisibility.

```
 const velocityDiff = Math.abs(v2-v1);
```

4. Optimising negation condition to check if start location are diff then same velocity would not work.

```
    // If second kangaroo start ahead with more step and velocity are same or less than first kangaroo its already no.
    if(x2 > x1 && v2 >= v1) return 'NO';
    
```
**Final optimised solution :-**

```
/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

/*
Terminologies
x1 = first kangaro location
x2 = second kangaro location
v1 = x1 jumps this much meters
v2 = x2 jumps this much meters
 
Algorithm
1. If start positions are different and velocity is same or less then it will not be possible to reaach at same location.
2. To make sure kangaroos are reaching at same destination velocity difference should divisible by location difference.
 */
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    
    // If second kangaroo start ahead with more step and velocity are same or less than first kangaroo its already no.
    if(x2 > x1 && v2 >= v1) return 'NO';
    
    // Calculate distance after first step
    const stepDiff = x1 - x2;
    const velocityDiff = Math.abs(v2-v1);
    
    // To match same position at end distance should be divisble by velocity diff.
    return stepDiff %  velocityDiff == 0 ? 'YES' : 'NO'
}
```

### Breaking records
```
function breakingRecords(scores) {
    // Write your code here
    let min = 0;
    let max = 0;
    let minRecordBreaks = 0;
    let maxRecordBreaks = 0;
    scores.forEach((value,index)=>{
        // console.log("Index : ",index,"Value : ",value)
        if(!value || value<0) return;
        
        // If minimum and maxium not available set the value.
        if(!min) min = value;
        if(!max) max = value;
        
        // Maximum record break
        if(value > max) {
            max = value;
            maxRecordBreaks++;   
        }
        
        // Minimum record break
        if(value < min){
            min = value;
            minRecordBreaks ++;
        }
    })
    
    return [maxRecordBreaks, minRecordBreaks]
}
```

**Optimisations :-**

1. In the above code we are setting values when `!min` or `!max` which will set value to 0 and in second iteratino if min and max value are 0 again the value will be udpated to new value because `!0` would execute true and as `min max and value` would be same then it will miss the recordBreak for that iteration which will return wrong results. we have updated it to 0th values of scores as `scores[0]` as mentioned below.

```
    // Write your code here
    let min = scores[0];
    let max = scores[0];
```

**Final optimised solution :-**

```
/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

/*
Terminologies : 
1. Index of elemement represent a session and the value represents the score.

Algorithm
1. First record will set min and max to 0th index value because there is no previous minimum and maximum records for it.
2. In next session we compare the score with min and max score, if its greater than maximum then its record break.
3. If the record has been broke for min or maximum we update the count for minimum and max record break.
*/

function breakingRecords(scores) {
    // Write your code here
    let min = scores[0];
    let max = scores[0];
    let minRecordBreaks = 0;
    let maxRecordBreaks = 0;
    
    scores.forEach((value,index)=>{
        // Maximum record break
        if(value > max) {
            max = value;
            maxRecordBreaks++;   
        }
        
        // Minimum record break
        if(value < min){
            min = value;
            minRecordBreaks ++;
        }
    })
    
    return [maxRecordBreaks, minRecordBreaks]
}

```

### Subarray division

**Brutforce Solution :-**

```
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */


/*
Terminologies & description : 
1. Contagious - Adjecent elements which are side by side to each other
2. First thing we need to keep in mind that length of array is given already with m.
3. Sum is already given which is d.

Algorithm (Sliding window approach)
1. Find all the possible subarrays from the array.
    - Iterate on array element and push the current element to result as single element can be subarray.
    - Start another loop from next element till the end, and slice array with every next index and push to results.
2. filter that array which matches length as m and have sum equals to d.
3. return filtered array.length
*/
function birthday(s, d, m) {
    // Write your code here
    
    // Find all the subarrays
    function findSubArrays(arr){
        let result = [];
        for(let i = 0; i < arr.length; i++){
            result.push([arr[i]]);
            if(i==(arr.length-1)) break;
            for(let j = i+1; j < arr.length; j++){
                result.push(arr.slice(i,j+1))
            }
        }
        return result;
    }
    
    let result = 0;
    findSubArrays(s).forEach((value,index)=>{
        const sum = value.reduce((a,v)=>a + v, 0);
        if(value.length === m && sum == d) result++ ;
    })
    return result;  
}
```

This solution have `O(n^2)` as nested for loops and `O(1)` to store single variable of result.

**Optmisations :-**

1. Our solution for finding all possible subarrays having `O(n^2)` is worst time complexity, checked out if any solution to find all possible subarrays with `O(n)` but its quite not possible, However we can find the subarray which meets certain condition or value such as (Min, Max) with sliding window approach for fixed size array. Considered `m` as fixed subarray size & Maximum value to match with subarray sum as `d` which reduced the time complexity to `O(n)`.

```
    let resultCount = 0;
    let segmentSum = 0;
    
    // Initial choclate divide
    for(let i = 0; i < m; i++){
        segmentSum += s[i];
    }
    
    // Check if initial chocolate divide matches date.
    if(segmentSum === d) resultCount++;
    
    // Shift the chocolate segments to next elements consecutively and check if its matching date.
    for(let i = m; i < s.length; i++){
        segmentSum += s[i] - s[i-m]; // Add next elementand remove first element.
        if(segmentSum===d) resultCount++;
    }
    return resultCount;    
```

**Best optimal solution :-**
```
/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */


/*
Terminologies & description : 
1. Contagious - Adjecent elements which are side by side to each other
2. First thing we need to keep in mind that length of array is given already with m.
3. Sum is already given which is d.

Algorithm (Sliding window approach)
1. Create variables for segmentSum, maxSum is already given as d, result which maintains count of subarrays.
2. Prepare the initial window by iterating till the size of window which is m & its sum to segmentSum.
3. Check if initial window sum matches the date and update the result count.
4. In next iterations reduce first element form segmentSum and add the current element in it.
5. Check if segmentSum matches d then update the resultCount.
6. return the resultCount. 
*/

function birthday(s, d, m) {
    let resultCount = 0;
    let segmentSum = 0;
    
    // Initial choclate divide
    for(let i = 0; i < m; i++){
        segmentSum += s[i];
    }
    
    // Check if initial chocolate divide matches date.
    if(segmentSum === d) resultCount++;
    
    // Shift the chocolate segments to next elements consecutively and check if its matching date.
    for(let i = m; i < s.length; i++){
        segmentSum += s[i] - s[i-m]; // Add next elementand remove first element.
        if(segmentSum===d) resultCount++;
    }
    return resultCount;      
}
```

### Divisible sum pairs

<img src="./easy/divisible-sum-pairs-1.png">
<img src="./easy/divisible-sum-pairs-2.png">

**Brutforce Solutions :-**
```
/*
Algorithm
1. Iterate through array with i.
2. Reverse iterate on same array from last element because we dont need only array paring with further elements but it can be paired with back elements.
3. Check if ar[i] + ar[j] divisible by k.
 */
function divisibleSumPairs(n, k, ar) {    
    // Write your code here
        let result = 0;
        for(let i = 0; i < n; i++){
            for(let j = i + 1; j < n; j++){
                if((ar[i] + ar[j]) % k === 0)
                {
                    result++;
                }   
            }
        }
        return result;
}
```

**Optimisations :-**

- In the above solution space complexity is `O(1)` which is optimal but time complexity is `O(n^2)` which needs to be optimised. 
  
```
/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */
/*
Terminology
1. When we divide each array element with k it will leaves the remainder if its not perfectly divisible by k.
2. If 2 remainders added together if make k then their sum will be divisible by k.
3. So we need to count how often each remainder appears.

Algorithm
1. Count remainder for each element in array and store it remainderCount array.
2. If we are considering new element from array, check if addition with any remainder from the list is divisible by k which will be remainder % k == 0.
3. Update the count of valid pair if remainder is 0 for remainder % k == 0 which can be (a[i] % k) % k === 0.
 */
function divisibleSumPairs(n, k, ar) {    
    // Write your code here
        let result = 0;
        let remainderCount = new Array(k).fill(0);
        
        
        for(let i = 0; i < n; i++){
            // Calculate remainder for current element.
            let remainder = ar[i] % k;
            
            // If k is 5 then possible remainders are 0,1,2,3 & 4 then for finding other complement remainder if we deduct current remainder from k like 5 - 2 = 3 which is divisible by k then its valid pair.
            let otherRemainderToAdd = remainder ===0 ? 0 : k - remainder;
            
            // Checkout how much times remainder apears previously which tells us current element can be paired with those times and its valid pair.
            let alreadyExisted = remainderCount[otherRemainderToAdd];
            
            // If its existed previously then update the result so current elemnt can be paired with that much elements
            result += alreadyExisted;
            
            // Update remainder existed previously nth times where index represents value of remainder and remainderCount[remainder] describes its count.
            remainderCount[remainder]++;
            
        }
        return result;
}
```

### Migratory Bird
<img src="./easy/migatory-bird-1.png">
<img src="./easy/migatory-bird-2.png">


```
/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/*
Algorithm
1. First loop through the array & set birdtype & its sighting count.
2. Find Maximum sighting count of birds by converting map to entries and reverse sorting it.
3. Return bird type with maximum sigght count, if multiple birds have same sightcount then the lowst bird type id.
 */
function migratoryBirds(arr) {
    // Write your code here
    
    // Store sightcounting data for every birdtype.
    let birdSigthing = new Map();
    for(let item of arr){
        const existingCount = birdSigthing.get(item);
         existingCount ? birdSigthing.set(item,existingCount + 1) : birdSigthing.set(item,1);
    }
    
    // Find birdtype with maximum sightvisit.
    const rSorted = [...birdSigthing.entries()].sort((a,b)=> b[1] - a[1])
    let [maxSightBirdType,maxSight] = rSorted[0]
    
    // Update birdType to lower if maximumsight visit are same for more than one.
    for(let entry of rSorted){
        const sight = entry[1];
        const birdType = entry[0];
        if(sight === maxSight && birdType < maxSightBirdType) maxSightBirdType  = birdType;
    }
    
    return maxSightBirdType;
}
```

**Optimisation :-**
1. Due to the reverse sort used in our solution, time complexity rised from `O(n) to O(n logn)` which not seems to be efficient and we can reduce it to `O(n)` by skipping the sorting part. Rather than sorting we can assign the value for `maxSightBirdType & maxSight` on the go without sorting.
   
```
   let entries = [...birdSigthing.entries()];
    
    // Find birdtype with maximum sightvisit.
    let [maxSightBirdType,maxSight] = entries[0];
    
    // Update birdType to lower if maximumsight visit are same for more than one.
    for(let entry of entries){
        const birdType = entry[0];
        const sight = entry[1];
        
        if(sight > maxSight || (sight === maxSight && birdType < maxSightBirdType)){
            maxSightBirdType  = birdType;
            maxSight = sight;
        }
    }
    
    return maxSightBirdType;
```
2. In place variable declaration for birdType and sight while running for loop with spread syntax.

```
for(let [birdType,sight] of entries){}
```

**Fully Optimised solution :-**

```
*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
/*
Algorithm
1. First loop through the array & set birdtype & its sighting count.
3. Find Maximum sighting count of birds by converting map to entries and reverse sorting it.
4. Return bird type with maximum sigght count, if multiple birds have same sightcount then the lowst bird type id.
 */
function migratoryBirds(arr) {
    // Write your code here
    
    // Store sightcounting data for every birdtype.
    let birdSigthing = new Map();
    for(let item of arr){
        const existingCount = birdSigthing.get(item);
         existingCount ? birdSigthing.set(item,existingCount + 1) : birdSigthing.set(item,1);
    }
    
    // Find birdtype with maximum sightvisit.
    let maxSightBirdType = null,maxSight = 0;
    
    // Update birdType to lower if maximumsight visit are same for more than one.
    for(let [birdType,sight] of birdSigthing.entries()){
        if(sight > maxSight || (sight === maxSight && birdType < maxSightBirdType)){
            maxSightBirdType  = birdType;
            maxSight = sight;
        }
    }
    
    return maxSightBirdType;
}
```

### Day of the programmer
<img src="./easy/programmer-day-1.png">
<img src="./easy/programmer-day-2.png">
<img src="./easy/programmer-day-3.png">

```
/*
 * Complete the 'dayOfProgrammer' function below.
 * 
 * # Terminologies
 * 1. Day of programmer - 256th day of year (13 sep of common years & 12 sep for leap years)
 * 2. Range for years - 1700 - 2700.
 * 3. Julian calender - Year is leap if divisible by 4.
 * 4. Georgian calender - Year is leap if its divisible by 4 or 400 & not divisible by 100.
 * 5. Russia used julian between 1700 - 1979 & gregorian calender further.
 * 6. In 2018 georgian calender feb starts directly at 14th due to transition from julian to georgian.
 * 
 * # Algorithm
 * 1. First figure out if the year is from julian or georgian calender, 
 * 2. Checkout if year is leap year, for julian calender leap are simply divisible by 4 & in georgian calender divisible by 400 or divisible by 4 & not by 100.
 * 3. Calculate sum of first 8 months days, july & august are 31 days months & if leap year feb has 29 days.
 * 4. Substract sum from 256 which returns day.
 * 5. Prepare date of sep month of input year with day calculated day and return in dd.mm.yyyy. format.
 * 
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    
    // Divisibility checker
    function isDivisibleBy(value,divisor){
        return value % divisor ===0
    }
    
    // Leap Year Checker
    function isLeapYear(year){
        const isJulian = year < 1918;
        return isJulian ? isDivisibleBy(year,4) : (isDivisibleBy(year,400) || isDivisibleBy(year,4) && !isDivisibleBy(year,100));
    }
    
    // Find no of days in month
    function getDaysInMonth(monthIndex,year){
        // Days based on leap year and month
        const days = monthIndex===1 ? (isLeapYear(year) ? 29 : 28) : ((isDivisibleBy(monthIndex,2) || monthIndex ==7) ? 31 : 30);
        
        // Julian to georgian transition lacks 13 days in feb
        return year===1918 && monthIndex === 1 ? days - 13 : days; 
    }
    
    // Date prepration
    function prepareDate(year){
        let sum = 0;
        for(let i = 0; i < 8; i++){
            sum += getDaysInMonth(i,year);
        }
        return `${256 - sum}.09.${year}`;
    }
    
    return prepareDate(year);
}
```

**Optimisations :-**

1. Remove unnecessary helper function for `isJulian` which is being only used in `isLeapYear` method.
   ```
    function isLeapYear(year){
        // Inline implementation
        const isJulian = year < 1918;
        return isJulian ? isDivisibleBy(year,4) : (isDivisibleBy(year,400) || isDivisibleBy(year,4) && !isDivisibleBy(year,100));
    }
   ```

2. Remove unnecessary helper functions for `prepareDate` which is not reusable and just printing the result which is responsibility for main function.
   
    ```
        let sum = 0;
        for(let i = 0; i < 8; i++){
            sum += getDaysInMonth(i,year);
        }
        return `${256 - sum}.09.${year}`;
    ```

3 . Remove redundant calculation for calculating sum for the days of months because sum is constant for all months expect feb, only calculate feb months sum dynamically based on leap year and transition year.

    ```
     // Date prepration
    let daysOfMonthsSum = 213; // Sum of days of the month expect feb.
    daysOfMonthsSum += isLeapYear(year) ? 29 : 28; // Adding feb days
    if(year===1918) daysOfMonthsSum -= 13; // 1918 lacks 13 days in feb month due to transition.
    return `${256 - daysOfMonthsSum}.09.${year}`;
    ```

**Final optimised solution :-**
```
*
 * Complete the 'dayOfProgrammer' function below.
 * 
 * # Terminologies
 * 1. Day of programmer - 256th day of year (13 sep of common years & 12 sep for leap years)
 * 2. Range for years - 1700 - 2700.
 * 3. Julian calender - Year is leap if divisible by 4.
 * 4. Georgian calender - Year is leap if its divisible by 4 or 400 & not divisible by 100.
 * 5. Russia used julian between 1700 - 1979 & gregorian calender further.
 * 6. In 2018 georgian calender feb starts directly at 14th due to transition from julian to georgian.
 * 
 * # Algorithm
 * 1. First figure out if the year is from julian or georgian calender, 
 * 2. Checkout if year is leap year, for julian calender leap are simply divisible by 4 & in georgian calender divisible by 400 or divisible by 4 & not by 100.
 * 3. Calculate sum of first 8 months days, july & august are 31 days months & if leap year feb has 29 days.
 * 4. Substract sum from 256 which returns day.
 * 5. Prepare date of sep month of input year with day calculated day and return in dd.mm.yyyy. format.
 * 
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    
    // Leap Year Checker
    function isLeapYear(year){
        const isJulian = year < 1918;
        const isDivisibleBy = (value,divisor) => value % divisor ===0;
        return isJulian ? isDivisibleBy(year,4) : (isDivisibleBy(year,400) || isDivisibleBy(year,4) && !isDivisibleBy(year,100));
    }
    
    // Date prepration
    let daysOfMonthsSum = 214;
    daysOfMonthsSum += isLeapYear(year) ? 29 : 28; // Adding feb days
    if(year===1918) daysOfMonthsSum -= 13; // Deduct 13 days if transition year.
    return `${256 - daysOfMonthsSum}.09.${year}`;
}
```

### Bill Division problem

<img src="./easy/bill-division-1.png">
<img src="./easy/bill-division-2.png">

```
/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 * 
 * # Terminologies
 * 1. bill - array of amounts
 * 2. k - index of items amount which anna didnt consumed.
 * 3. b - annas contribution. 
 * 
 * # Algorithm
 * 1. Remove the amount from the bills which anna didnt consume.
 * 2. Sum the bills and divide in 2.
 * 3. Return "Bon Appetit" if annas share matches to contri else return difference.
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    
    // Remove non-consumed amount from billing.
    bill.splice(k,1);
    
    // Calculate contribution.
    const contri = bill.reduce((acc,cur)=>acc+cur,0) / 2;
    
    // Print result
    contri === b ? console.log('Bon Appetit') : console.log(b - contri);   
}
```

**Optimisations :-**

1. Prevent mutating input of method as its not an good practice for modifying input.
   ```
   const contri = bill.filter((item,i)=>i===k).reduce((acc,cur)=>acc + cur,0) / 2;
   ```
2. Dont reduce readability for optimising space complexity, even if we declare n variables still its space complexity will be `O(n)`, it will only be increased if its storing array of dynamic length or creating n variables based on array length. Create seprate variables for total & contri.
   ```
    const total = bill.filter((item,i)=>i!==k).reduce((acc,cur)=>acc + cur,0);
    const contri = total / 2;
   ```

3. Use ternary for console output rather than repeting console statement for printing output.
   
   ```
   console.log(contri === b ? 'Bon Appetit' : b - contri);
   ```

4. Filter array within reduce itself for preventing runtime for filteration which will improve performance.

   ```
    const total = bill.reduce((acc,cur,index)=> index !== k ? acc + cur : acc,0);
   ```

**Final optimised solution :-**

```
/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 * 
 * # Terminologies
 * 1. bill - array of amounts
 * 2. k - index of items amount which anna didnt consumed.
 * 3. b - annas contribution. 
 * 
 * # Algorithm
 * 1. Filter the bill array to exclude non-consumed item by ana.
 * 2. Sum the bills and divide in 2.
 * 3. Return "Bon Appetit" if annas share matches to contri else return difference.
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    
    // Remove non-consumed amount from billing.
    const total = bill.reduce((acc,cur,index)=> index !== k ? acc + cur : acc,0);
    
    // Calculate contribution.
    const contri = total / 2;
    
    // Print result
    console.log(contri === b ? 'Bon Appetit' : b - contri)
}
```

### Drawing Book

<img src="./easy/drawing-book-1.png">
<img src="./easy/drawing-book-2.png">
<img src="./easy/drawing-book-3.png">
<img src="./easy/drawing-book-4.png">

```
*
 * Complete the 'pageCount' function below.
 * # Terminologies
 * 1. n = no of pages available in the book.
 * 2. p = destination page where student need to reach.
 *  
 * # Solution
 * 1. First we need to understand is that Destination page can be current pageNo if first or currentpage & currentPage + 1 after first page turn, From the last destination page will be current page or current page -1 if we are turning pages form last.
 *  
 * # Algorithm
 * 1. Run loop one loop from start, & if destination if not index & index + 1 then turn the page (increment count of page turns from start on odd indexes) untill the no pages available in book or until we get the result. 
 * 2. Run for loop from backward, if destination is not index & index -1 then turn the page (increment teh page turns from last) until no first page or we get the result.
 *  
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let pTurnsFromStart = 0;
    let pTurnsFromLast = 0;
    
    // Find destination from start.
    for(let i = 1; i < n; i++){
        if(i===1 && i ===p) break;
        if(i % 1 ===0) pTurnsFromStart++;
        if(i ===p || (i+1) === p)break;
    }
    
    // Find destination from last.
    for(let j = n; j >=0; j--){
        if(j===p || (j-1)==p) break;
        // Handle on which page to turn based on last page is odd or even.
        if(n%1){
            if(j % 2 === 0) pTurnsFromLast++
        }else{
        if(j % 1 === 0) pTurnsFromLast++
        }
    }
    // Return minimum pageTurns required
    return Math.min(pTurnsFromStart,pTurnsFromLast)
}
```

**Optimisations :-**

1. We dont need to loop through the the pages & turn them manually, just the basic understanding of of book structure helps us to resolve this. Basic book structure is first page dont have any pair page to it, we turn the pages every 2 page after 1st page from the start. Similarly in the reverse order last page can be single page or page with pair & after that we turn pages every 2 page. We can calculate the page turns by just dividing destination by 2 considering turn on every 2 page like `const pageTurnsFromFirst = desination / 2;` & from last we can deduct the destination page form no of total pages which gives us difference which we can divide by 2 to findout turns from last like `const pageTurnsFromLast = (totalPages - destination) / 2;`. The division might return floating points which is not valid page turn so we need to round `Math.Floor(pageTurnsFromFirst) & Math.floor(pageTurnsFromLast)` & return minimum of it.

   ```
   function pageCount(n, p) {
    // Write your code here
    let pTurnsFromStart = Math.floor(p / 2); // As page turn will be on 2 pages.
    let pTurnsFromLast = Math.floor((n-p) / 2 ); // Get how pages far destination & turn pages in set of 2. 

    // Adjust for the case where n is even
    if (n % 2 === 0 && p === n - 1) {
        pTurnsFromLast = Math.ceil((n - p) / 2);
    }
    // Return minimum pageTurns required
    return Math.floor(Math.min(pTurnsFromStart,pTurnsFromLast))
    }
   ``` 

2. Sometimes you can get standalond last page, usually first is standalone `[1][2,3][4,5]` end index is always odd but if its even then its standaloine page so we need to give it a extra filp for it.
   
   ```
    // If last page is standalone or second last page of book traditonally its odd number, if its even then its standalone page.
    if (n % 2 === 0 && p === n - 1) pTurnsFromLast ++;
   ```

**Final Optimised Solution :-**

```
/*
 * Complete the 'pageCount' function below.
 * # Terminologies
 * 1. n = no of pages available in the book.
 * 2. p = destination page where student need to reach.
 *  
 * # Solution
 * 1. Book structure have no pair to first page but it can or cannot have pair for last page.
 * 2. page turn happens every 2 pages no matter from frontside or backside.
 * 3. We can count turns from first by simply dividing destination with 2 which represents flip.
 * 4. We can count turns from last by simply dividing the difference of total & desitnation page by 2 which represents flip.
 * 5. We might get last page as standalone as edgecase so we need to add extra flip for it if its standalnoe where our usual calculation considers its paired.
 *  
 * # Algorithm
 * 1. Calculate Round number of page flips form start by dividing destination(p) / 2.
 * 2. Calculate Round number of page flips from end by dividing difference of (total pages (n) - destination(p))/ 2.
 * 3. Return minimum of it.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let pTurnsFromStart = Math.floor(p / 2); // As page turn will be on 2 pages.
    let pTurnsFromLast = Math.floor((n-p) / 2 ); // Get how pages far destination & turn pages in set of 2. 

    // If last page is standalone or second last page of book traditonally its odd number, if its even then its standalone page.
    if (n % 2 === 0 && p === n - 1) pTurnsFromLast ++;
    // Return minimum pageTurns required
    return Math.floor(Math.min(pTurnsFromStart,pTurnsFromLast))
}
```

### Counting Valleys
<img src="./easy/counting-valley-1.png">
<img src="./easy/counting-valley-2.png">

**Solution :-**
```

/*
 * Complete the 'countingValleys' function below.
 * # Terminologies
 * 1. D - Downstep
 * 2. U - Upstep
 * 
 * # Algorithm
 * 1. Maintain valleyTraverseCount variable which keeps count of valley traverse && prevValue which will keep track of previous Value.
 * 2. Maintain Downsteps variables which count will increment on 'D' & decrement on 'U'.
 * 3. Whenever downsteps come backs to 0 & prevValue was negative then increment the valleyTraverseCount and decrement vise versa.
 * 4. Return no of valleyTraverseCount.
 * 
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let valleyTraverseCount = 0;
    let downSteps = 0;
    let prevValue = 0;
    
    for(let i = 0; i < steps; i++){
        i > 0 && path[i-1] === 'U' ? prevValue-- : prevValue++;
        path[i] === 'U' ? downSteps-- : downSteps++;
        if(prevValue < 0 && downSteps ===0) valleyTraverseCount--;
        if(prevValue > 1 && downSteps ===0) valleyTraverseCount++;
    }
    
    return valleyTraverseCount;
}
```

**Optimisation :-**
1. Rather than checking prevValue was greater than 0 & downSteps == 0 & same for upsteps we can avoid calculating we can keep only level variable & valleyCount which we will increment if steps becomes 0 only in addition phase.

```
  for (let i = 0; i < steps; i++) {
        // Update the level
        if (path[i] === 'U') {
            level++;
            // Check if we just exited a valley
            if (level === 0) {
                valleyCount++;
            }
        } else if (path[i] === 'D') {
            level--;
        }
    }
``` 

**Final optimised solution :-**
```
function countingValleys(steps, path) {
      let level = 0; // Current altitude relative to sea level
    let valleyCount = 0;

    for (let i = 0; i < steps; i++) {
        // Update the level
        if (path[i] === 'U') {
            level++;
            // Check if we just exited a valley
            if (level === 0) {
                valleyCount++;
            }
        } else if (path[i] === 'D') {
            level--;
        }
    }

    return valleyCount;
}

```

## Medium

### Minimum of rotated sorted array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.


```
// Find minimum value in rotated sorted array
function findBsMinRotatedSortedArray(nums) {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let mid = Math.floor((start + end) / 2);

        // compare mid with start since it's a descending order
         if (nums[mid] > nums[end]) {
            // Minimum lies in the right half
            start = mid + 1;
        } else {
            // Minimum lies in the left half or at mid itself
            end = mid;
        }
    }

    return nums[start];  // Or nums[end], both are the same at this point
}

const arr = [5,4,1,2,3];
console.log(findBsMinRotatedSortedArray(arr)); // Output: 1
```

### Sort array of 0s, 1s & 2s

Given an array A[] consisting 0s, 1s and 2s, write a function that sorts A[]. The functions should put all 0s first, then all 1s and all 2s in last.

Outpus the sorted array as mentioned below.

```
Sample Input
0 1 2 2 0 1

Sample Output
0 0 1 1 2 2
```

**Solution :-**
```
function sortArray(arr){
    return arr.sortArray((a,b)=> a - b);
}
```

**Optimisations :-**

1. The built-in `arr.sort` method is non-efficient with its average time complexity of `O(n log n)` for only 3 type of distince data, so we have `Dutch National Flag(DNA)` algorithm which does this in time complexity of `O(n)` & Space complexity of `O(1)` by using 3 pointer approach to sort the array in place.

```
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
``` 

### Search an element in infinite sorted array

While dealing with infinite arrays only challenge we face is that due to its infinite nature we cant set the end of it, for that we implement the doubling strategy in which we set the start as first index & end as second index, We double the endIndex untill target value is less than value at end index & shift the startIndex to last endIndex, With the help of this we get the appropriate end index which we can use for normal binary search.

```
function binarySearch(arr, low, high, target) {
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

function searchInInfiniteArray(arr, target) {
    let low = 0;
    let high = 1;
    
    // Step 1: Find the bounds
    while (arr[high] < target) {
        low = high;
        high = high * 2;
    }
    
    // Step 2: Perform binary search in the range [low, high]
    return binarySearch(arr, low, high, target);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 6;
console.log(searchInInfiniteArray(arr, target)); // Output: 5
```

### Hard


# Data Structure and algorithms

Data Structure are the organization of the data in the different ways and manners.

Algorithms is the set of the rules to achieve the problems solution for the fastest possible time and low memory consumption.

### Big O Notation

Big O notation is the measurement to measure the complexity and the performance of the code.

**How We Calculate the Time Complexity :-** 

- First we find out no of oprations in the code.
- If we have any thing based on the input it stands as `n` in the bigO notation.
- Then we need to calculate if the `n` would be a million times how much oprations it will perform and thats how we will get to know the time complexity of the code.

Ex : 
```
function sumUpTo(n){
    return (n* (n+1)) / 2;
}
```

```
function sumUpTo(){
    let total = 0
    for(let i = 0; i<=n; i++){
        total+=i
    }
    return total
}
```

In the above Example the first programme runs only three times weather it will be millions input or not and second one depends on the input soo it will runs `1*n` as it have one opration soo 

- Comlexity of 1st Programme :- `3`
- Comlexity of 2nd Programme  :- `1*n`

**How to transform oprations in the time complexity :-**

- In the bigO notation we use `O()` for the representation of the time complexity.

- Soo The time complexity will be as follwed for the above examples :-

    1. 3 :- `O(3)`
    1. 1*n :- `O(1*n)` soo `O(n)`

**Some More Advanced Examples :-**

- 
```
function shoutWordPairs(arr) {
  for (leti = 0; i < arr.length; i++) {
    for (letj0; j < arr.length; j++) {
      console.log(arr[i] + "" + arr[j]);
    }
  }
}
shoutWordPairs(["canoodle", "wabbit", "alcoholic"]);
```
Time Complexity of the above function will be `O(n^2)` because outer loop oprations are happening number of times `n` and inner loop happening the same times for the single itration of outer loop hence complexity will be **`O(n^2)`**.

- 
```
function shoutWordPairs(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr[i] + "" + arr2[j]);
    }
  }
}
let a1 = ["canoodle", "wabbit", "alcoholic"];
let a2 = ["cucamonga", "seattle"];

shoutWordPairs(a1, a2);
```
In the above example outer loop running `n` times and inner loop running the `m` times means in the first itration inner loop running the `m` times soo the time complexity of the above example would be `O(n*m)`.


### Simplifying BigO Notation With Rules of Time Complexity

Simplifying bigO notation means simplifying its equation like `O(6546) => O(1)` or `O(13n^2) => O(n^2)` further with the help of the rules as like mentioned below.


1. **Constant Does not matter :-** 

    Constants does not matter in the equation like any kind of number multiplying, addition, substraction , or however it will be as like mentioned below.

- `O(12)→0(1)`
-  `O(702)→0(1)`
-  `O(2n)→O(n)`
-  `O(n/2)→O(n)`
-  `O(13n^2)→O(n^2)`

2. **Smaller term does not matter :-** 

    In the BigO Notation equation we dont consider the smaller value if both will be there together we keep only the bigger value and cutdown the smaller value from the equation.

- `O(n+10)→O(n)`
- `O(1337n +50)→O(n)`
- `O(n^2+13n+8)→O(n^2)`


### Terminologies for Time Complexity

1. **Constant Time O(1) :-**

    In the constant time complexity it will take the same time to process it to the processor weather 1+1 or 1+100000 soo the time will be constnat.

2. **Linear Time O(n) :-**

    In the Linear Time Complexity Oprations is going to happen the 2 number of times depending on the input soo its called as linear time.

3. **Quadratic Time O(n^2) :-**

    In the Quadratic time complexity the oprations going to happen the square of the times of the input and its the very bad practice.













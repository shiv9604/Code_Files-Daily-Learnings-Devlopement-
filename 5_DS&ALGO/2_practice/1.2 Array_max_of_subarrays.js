// Programme for maximum subarray means to find the maximum sum from all possible sub array and return it.

// 1. BruteForce Approach O(n^3)
let arrForBrut = [-2,1,-3,4,-1,2,1,-5,4];
function maxSubArrayWithBrut(arr){
    let sums = [];
    for(let i = 0; i<arr.length; i++){
        for(let j = i; j <=arr.length; j++){
            if(j!=i){
                let subArray = arr.slice(i,j);
                let sum = 0;
                subArray.forEach(res=>sum+=res);
                if(sum>0)sums.push(sum);
            }
        }
    }
    return Math.max(...sums);
}
console.log(maxSubArrayWithBrut(arrForBrut))

// 2. Optimised solution O(n^2)
let arrForOptimum = [-2,1,-3,4,-1,2,1,-5,4];
function maxSubArrayWithOptimum(arr){
    let sums = new Set();
    for(let i = 0; i<arr.length; i++){
        let sum = arr[i];
        sum>0? sums.add(sum) : null
        for(let j = i; j <=arr.length; j++){
            if(j!=i){
                sum+=arr[j];
                sum>0? sums.add(sum) : null
            }
        }
    }
    return Math.max(...sums);
}
console.log(maxSubArrayWithOptimum(arrForOptimum))

// 3. Best Approach Kaden's algorithm with O(n)
let arrForKedens = [-2,1,-3,4,-1,2,1,-5,4];
function maxSubArrayForKadens(arr){
    let maxi = arr[0];
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum+=arr[i];
        maxi = Math.max(maxi,sum);
        if(sum<0) sum=0;
    }
    return maxi;
}    
console.log(maxSubArrayForKadens(arrForKedens))

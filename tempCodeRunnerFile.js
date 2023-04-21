let arr = [-2,1,-3,4,-1,2,1,-5,4];
// function maxSubArray(){
//     let sums = [];
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i; j <=arr.length; j++){
//             if(j!=i){
//                 let subArray = arr.slice(i,j);
//                 let sum = 0;
//                 subArray.forEach(res=>sum+=res);
//                 if(sum>0)sums.push(sum);
//             }
//         }
//     }
//     return Math.max(...sums);
// }
// console.log(maxSubArray(arr))
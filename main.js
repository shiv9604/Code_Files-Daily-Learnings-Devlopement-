// console.log("1. This is line 1")

// const prepareData = () => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res("2. This is line 2")
//         }, 3000);
//     })
// }

// prepareData().then((res)=>{
//     console.log(res)
//     console.log("Line Three...")
// }
// )
// .catch((e)=>console.log(e))

// console.log("3. This is line 3")

// // (async function () {
// //     console.log("1. This is line 1")
// //     let response = await prepareData()
// //     console.log(response)
// //     console.log("3. This is line 3")
// // })();

// // const uno = () => {
// //     return "1";
// // };

// // const dos = () => {
// //     return new Promise((resolve, reject) => {
// //         if(false){
// //         setTimeout(() => {
// //             resolve("2");
// //         }, 3000);
// //         }
// //         else{
// //             reject("Promise rejected")
// //         }
// //     });
// // };

// // const tres = () => {
// //     return "3";
// // };

// // const callAll = async () => {

// //         let one = uno();
// //         console.log(one);

// //         let two = await dos();
// //         console.log(two);

// //         let three = tres();
// //         console.log(three);

// // };
// // callAll();

// // console.log("Process completed")

// async function generatePromise(){
//      return "String"
// }

// (async function(){
//     let result = await generatePromise()
//     console.log(result)
// })();

// function one(){
//     console.log("one")
// }
// one()
// function two(){
//     setTimeout(()=>{
//         console.log("two");
//         three()
//     },3000)

// }
// two()

// function three(){
//     console.log("three")
// }

// try{
//     console.log(1)
//     throw console.error("This have got some error")
//     console.log(3)
// }catch(e){
//     console.log(e)
// }

// let a = '20';
// if(a===20){
//     console.log("Matched")
// }
// else{
//     console.log("Not Matched")
// }

// const http = require('http')
// http.createServer((req,resp)=>{

//     resp.write("Hello world");
//     resp.end()

// }).listen(4800)

// function sequentialSizes(val) {
//     let answer = "";
//     // Only change code below this line

//     switch(true){

//       case val>=1 && val<=3:
//         answer = "Low"
//         break;

//       case val>=4 && val<=6:
//         answer = "Med"
//         break;

//       case val>=7 && val>=9:
//         answer = "High"
//         break;

//     }

//     // Only change code above this line
//     return answer;
//   }

// Inspection
// Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1?
// (eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false)

// function shoutWordPairs(arr) {
//   for (leti = 0; i < arr.length; i++) {
//     for (letj0; j < arr.length; j++) {
//       console.log(arr[i] + "" + arr[j]);
//     }
//   }
// }
// shoutWordPairs(["canoodle", "wabbit", "alcoholic"]);

// O(n ^ 2);

// function shoutWordPairs(arr, arr2) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       console.log(arr[i] + "" + arr2[j]);
//     }
//   }
// }
// let a1 = ["canoodle", "wabbit", "alcoholic"];
// let a2 = ["cucamonga", "seattle"];

// shoutWordPairs(a1, a2);

// O(n*m)

// Create a for loop that iterates up to 100 while outputting "shiv" at multiples of 3, "kounsalye" at multiples of 5 and "shivkounsalye" at multiples of 3 and 5 without using if else.

// for(let i=0; i<100 ; i++){
//   if(i!=0){
//     if(i%3==0){
//       if(i%5==0){
//         console.log(`${i}-shivkounsalye`)
//       }
//       else{
//         console.log(`${i}-Shiv`)
//       }
//     }
//     else if(i%5==0){
//       if(i%3==0){
//         console.log(`${i}-shivkounsalye`)
//       }
//       else{
//         console.log(`${i}-Kounsalye`)
//       }
//     }
//   }
// }

// Given a string, reverse each word in the sentence.
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG.

// function reverifyString(string) {
//   let strArr = string.split(" ");

//   let resultStr = "";
//   strArr.forEach((res) => {
//     console.log("Single Word =>", res);
//     let reversedSingleWord = res.split("").reverse().join("") + " ";
//     console.log("Reversed Single Word =>", reversedSingleWord);
//     resultStr += reversedSingleWord;
//   });
//   console.log(
//     "----------Reversified String =>",
//     resultStr,
//     "--------------------"
//   );
// }

// reverifyString("Welcome to this Javascript Guide!");
// var a=10;

// let a=20;   
   
 
// console.log(a)

// *
// * * *
// * * * * *
// * * * * * * *
// * * * * * * * * *

//      *
//    * * *
//  * * * * *
// * * * * * *

// let lastIndex = 9
// let star = '*'
// let space = ' '

// for(let i=1;i<=9;i++){
//     let patternLine = ''
//     if(i%2!=0){
//         patternLine+=space.repeat(lastIndex/2) + star.repeat(i) + space.repeat(lastIndex/2)
//         console.log(patternLine)
//     }
//     lastIndex-=1;
    
// }

// function returnReject(){
//     return new Promise((res,rej)=>{
//         res("Error Occured")
//     })
// }

// async function  exeCute(){
//     try{
//         let response = await returnReject()
//         console.log("Promise Resolved =>",response)
//         }
//         catch(e){
//         console.log("Promise Rejected =>",e)
//         }
// }
// exeCute()


// Given an array A of positive integers. Your task is to find the leaders in the array. An element of an array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

let arr = [16,19, 17, 18, 4, 3, 5, 2]

for(let i of arr){

    let furtherArr = arr.slice(arr.indexOf(i),arr.length)

    // console.log("Further Array =>",furtherArr)

    let sorterFurther =   furtherArr.sort((a,b)=>{
        return b-a
    })

    let max = sorterFurther[0]

    // console.log("Max of Further Array",max)

    if(i>=max){
        console.log(`${i} is Leader`)
    }
}

// let max =   arr.sort((a,b)=>{
//     return b-a
// })

// console.log("Max =>",max)
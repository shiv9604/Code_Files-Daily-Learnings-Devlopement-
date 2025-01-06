// Promises Understanding

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

// const uno = () => {
//     return "1";
// };

// const dos = () => {
//     return new Promise((resolve, reject) => {
//         if(false){
//         setTimeout(() => {
//             resolve("2");
//         }, 3000);
//         }
//         else{
//             reject("Promise rejected")
//         }
//     });
// };

// const tres = () => {
//     return "3";
// };

// const callAll = async () => {

//         let one = uno();
//         console.log(one);

//         let two = await dos();
//         console.log(two);

//         let three = tres();
//         console.log(three);

// };
// callAll();

// console.log("Process completed")

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

// Constructor Functions
// function counter() {
//   let count = 0;
//   console.log("Please call increse or decrease to manipulate counter ", count);
//   function increment() {
//     count++;
//     console.log("Count Increased to =>", count);
//   }

//   function decrement() {
//     count--;
//     console.log("Count decreased to =>", count);
//   }
//   this.increment = increment;
//   this.decrement = decrement;
// }
// let createCounter = new counter();
// createCounter.increment();
// createCounter.increment();
// createCounter.increment();

// Closures
// function one(){
// 	let a = 1;
// 	// console.log(c)
//   return 	function two(){
// 		let b = 2;
//     return 		function three(){
// 			let c = 3;
// 			console.log(a,b)
// }
// }
// }

// one()()();

// Named function expression
// var b = function xyz(){
// 	console.log("b called");
// 	counter++;
// }
// b() ; // b called
// xyz(); // xyz is not defined.

// Named function expression which can be called itself inside the function but cant be called with function name in the global scope as its used as value and assigned to b variable which got created in global space.
// let counter = 0;
// var b = function xyz(){
// 	console.log("b called");
// 	counter++;
// 	if(counter<=3) xyz();

// }
// b()

// First Class functions (Passing functions as arguements)
//   function logger(childfunction){
// 	childfunction();
// }

// logger(function (){
// 	console.log("Child function called");
// })

// Named function expression which can be called itself inside the function but cant be called with function name in the global scope as its used as value and assigned to b variable which got created in global space.
// let counter = 0;
// var b = function xyz(){
// 	console.log("b called");
// 	counter++;
// 	if(counter<=3) xyz();

// }
// b()

// First Class functions (Passing functions as arguements)
//   function logger(childfunction){
// 	childfunction();
// }

// logger(function (){
// 	console.log("Child function called");
// })

// First Class functions (W hich is already taking funciton as an arguement & Returning functions from functions)
// function logger(childfunction){
// 	childfunction();
// 	return function (){
// 		console.warn("Returned function is called");
// 	}
// }

// const returnedFunction = logger(function (){
// 	console.log("Child function called");
// });

// returnedFunction();

// Immediately Invoked functions
// function one(){
// 	return (function (){
// 		const privateMessage = 'IIFE Called';
// 		console.log(privateMessage);
// 	})();
// }
// one();

// CallBacks (When we pass first class functions into another function as an arguement)

// function x(y){
// 	console.log('x called');
// 	y();
// }

// x(function (){
// 	console.log('Y called')
// })

// Programmes Asked For the Interviews

// 1. Programme For Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1?
// (eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false)
// Brutforce solution : create all possible combinations of s1 by rotating every element by 1 step ahead, if at end then shift to start & check if our s2 contains in results.
// Best Solution : Concatinate s1 with itself & check if s2 is substring of it (It gives all possible rotations in concatination).

// 2. Programme for Create a for loop that iterates up to 100 while outputting "shiv" at multiples of 3, "kounsalye" at multiples of 5 and "shivkounsalye" at multiples of 3 and 5 without using if else.
// Brutforce solution : Check if the i is divisible by 3 then shiv, if divisible by 5 then kounsalye & if with both then shivkounsalye.
// Best Solution : Maintain result string & if divisible by 3 then append shiv & if divisible by 5 then append kounsalye & just print the result with index after boths checking.

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

// 3. Programme for Given a string, reverse each word in the sentence. For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG.
// Brutforce approach : Split the string with spaces, reverse each word in the sentence & join them with spaces.

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

// 4. Programme for Start Patterns
// Approach : Identify how stars & spaces are getting increased & decreased & find the relation in between iteration index, total how they can be used for generating required space & starts per row.

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

// 5. Programme For Given an array A of positive integers. Your task is to find the leaders in the array. An element of an array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

// Brutforce Approach : Iterate through the array & again loop through further array for checking if its greater than all right elements then print it as leader or collect in results.
// Optimal solution : Iterate through array, slice the array from current index to array length, reverse sort array & check if current element is greater than reverse sorter array[0] & print it.
// Best Solution : Iterate through array from the last, first element would be leader by default & check if current element is greater than last leader if yes then print it.

// let arr = [16,19, 17, 18, 4, 3, 5, 2]
// for(let i of arr){
//     let furtherArr = arr.slice(arr.indexOf(i),arr.length)
//     // console.log("Further Array =>",furtherArr)
//     let sorterFurther =   furtherArr.sort((a,b)=>{
//         return b-a
//     })
//     let max = sorterFurther[0]
//     // console.log("Max of Further Array",max)
//     if(i>=max){
//         console.log(`${i} is Leader`)
//     }
// }

// let max =   arr.sort((a,b)=>{
//     return b-a
// })
// console.log("Max =>",max)

// 6. Programme for resolve string expression and get results of its calculations
// Brutforce Approach : Use Eval Function from javascript for evaluation of string expression.
// Optimal Solution : Big algorithm need to understand deeply & need to resolve.

// let input = "( ( 5 * 2 ) / ( 2 + 3 ) * ( 234 + 1 ) )"
// function parseInput(input){
//     let inputArr = input.split('(')
//     console.log(inputArr)
// }
// parseInput(input)

// 7. Programme Extraction Of Sec string and notation string from secNotation string 45AM
// Brutforce Solution : Use Regular expression for deriving a-z chars & join & derive 0-9 numbers & join it.
// Best Solution : Use single regular expression for deriving a-z & 0-9 numbers from the string & assign it to object & return or print the object.

// Brutforce Solution
// let str = '45PM'
// let sec = str.match(/[^a-z]/g).join('')
// let notation = str.match(/[^0-9]/g).join('')
// console.log("Sec =>",sec)
// console.log("Notation =>",notation)

// Best Solution
// let str = '45PM'
// let sec = str.match(/[^a-z0-9]/g).join('')
// console.log("Sec =>",sec)
// console.log("Notation =>",notation)

// 8. Programme For Conversion of 12Hrs Time into 24Hrs like (07:05:45PM) to (19:05:45)
// Brutforce Solution : Extract hours, minutes, seconds & Notation from string & if notation is pm then add 12 to it & if 12 make it 00 & make the result string out of modified hours with existing minutes & seconds without notation.
// Best Solution : Pass the time in date object with initial date which is 01-01-1970 like `1970-01-01T${time12h}` & get the seconds, minutes & hours from it as it handles the 24 hours conversion in itself & handle the prefix 0's if single digit with padStart like timeString.padStart(2, '0') & prepare & print the result.

// Brutforce Solution
// function timeConversion(s) {
//     // 07:05:45PM
//     // Extraction Of Values
//     let [hrs,min,secWithNotation] = s.split(':')
//     let sec = secWithNotation.match(/[^a-z]/gi).join('')
//     let notation = secWithNotation.match(/[^0-9]/gi).join('')

//     console.log("Hrs : ",hrs)
//     console.log("Min : ",min)
//     console.log("Sec : ",sec)
//     console.log("Notation : ",notation)

//     // Logic
//     let timeIn24hrs = ''
//     if(notation=='PM'){
//         let parsedHrs = parseInt(hrs)
//         parsedHrs = parsedHrs==12?parsedHrs : 12 + parsedHrs
//         typeof parsedHrs=='number' ? parsedHrs.toString() : parsedHrs
//         hrs = parsedHrs
//         timeIn24hrs = `${hrs}:${min}:${sec}`
//     }
//     else if(notation=='AM'){
//         hrs = hrs==12? '00' : hrs
//         timeIn24hrs = `${hrs}:${min}:${sec}`
//     }
//     console.log("Time in 24HRS FORMAT==>",timeIn24hrs)
// }
// timeConversion('12:05:45AM')

// Best Solution
// function convertTo24Hrs(time12h) {
//     // Create a Date object by passing the time string to a fixed date (1970-01-01)
//     const date = new Date(`1970-01-01T${time12h}`);
  
//     // Extract hours, minutes, and seconds using the Date object's methods
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const seconds = date.getSeconds().toString().padStart(2, '0');
  
//     // Prepare the final time string in 24-hour format
//     return `${hours}:${minutes}:${seconds}`;
//   }
  
//   const time12h = "07:05:45PM";
//   const time24h = convertTo24Hrs(time12h);
  
//   console.log(time24h);


// 9. Programme for checking only does contains duplicates and return true or false.
// Brutforce Solution : Iterate over array & with another iterattion check with all elements if matches the contains duplicates.
// Best Solution : Create Set with array & if set's length is not equals to array length means it contianed duplicates & set removed it.

// var containsDuplicate = function(nums) {
//     if(nums && nums.length>0){
//         let set = new Set(nums)
//         return set.size!==nums.length;
//     }
// };
// containsDuplicate([1,1,2,2,3,4,5,7,8])

// Programme for maximum subarray means to find the maximum sum from all possible sub array and return it.
// 1. BruteForce Approach O(n^3)
// let arr = [-2,1,-3,4,-1,2,1,-5,4];
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

// 2. Optimised solution O(n^2)
// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// function maxSubArray(){
//     let sums = new Set();
//     for(let i = 0; i<arr.length; i++){
//         let sum = arr[i];
//         sum>0? sums.add(sum) : null
//         for(let j = i; j <=arr.length; j++){
//             if(j!=i){
//                 sum+=arr[j];
//                 sum>0? sums.add(sum) : null
//             }
//         }
//     }
//     return Math.max(...sums);
// }
// console.log(maxSubArray(arr))

// 3. Best Approach Kaden's algorithm with O(n)
// let arr = [-2,1,-3,4,-1,2,1,-5,4];
// function maxSubArray(){
//     let maxi = arr[0];
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum+=arr[i];
//         maxi = Math.max(maxi,sum);
//         if(sum<0) sum=0;
//     }
//     return maxi;
// }
// console.log(maxSubArray(arr))

// CypherText Encryption
// function replaceCharacterByIndex(string, index, replacement) {
//     return (
//       string.slice(0, index) +
//       replacement +
//       string.slice(index + replacement.length)
//     );
// }

// function replacer(str, shift, alphabets) {
//     for (let i = 0; i < str.length; i++){
//         const char = str[i];
//         const indexForCharShift = alphabets.indexOf(char)+ shift > 25 ? (alphabets.indexOf(char) + shift) - alphabets.length : alphabets.indexOf(char)+ shift;
//         const shiftedChar = alphabets[indexForCharShift];
//         str = replaceCharacterByIndex(str, i, shiftedChar);
//     }
//     return str;
// }

// function caesarRedux(sentence, shift) {
//     const constrains = !sentence || !shift || (shift <= 0 || shift > 25);
//     if (constrains) return console.log("Invalid Input");
//     let alphabets = 'abcdefghijklmnopqrstuvwxyz';
//     const isPlainText = sentence.includes('the');
//     if (isPlainText) alphabets = alphabets.split('').reverse().join('');
//     const result = sentence.split(' ').map(word => replacer(word, shift, alphabets)).join(' ')
//     console.log(result);
//     return result
// }

// caesarRedux('we accept the ieeextreme challenge',19);
// caesarRedux('qbspbz',19);

// Cypther Text Encryption
// function replaceCharacter(string, index, replacement) {
//     return (
//       string.slice(0, index) +
//       replacement +
//       string.slice(index + replacement.length)
//     );
//   }

// function cypherEncryptor(shift, str) {
//     if (!shift || !str || (shift<0 || shift > 25)) return console.log("Invalid Input") ;
//     for (let i = 0; i < str.length; i++){
//         const char = str[i];
//         // const shiftedChar = alphabets[alphabets.indexOf(char) + shift];
//         // const indexForCharShift = alphabets.indexOf(char) + shift;
//         // const shiftedChar = alphabets[indexForCharShift];
//         // str = replaceCharacter(str, i, shiftedChar);
//         const indexForCharShift = (alphabets.indexOf(char) - alphabets.length) + shift;
//         const shiftedChar = alphabets.at(indexForCharShift);
//         str = replaceCharacter(str, i, shiftedChar);

//     }
//     console.log(str);
//     return str;
// }

// cypherEncryptor(25, 'a');

// 10. Decimal Places Restrictor takes value, beforeDecimal & After deciamls returns the value based on beforeDecimal & afterDecimal resrictions.
// Brutforce Solution : Convert the number into string, Split the number for getting beforeDecimal & afterDecimal values & truncate the values to before, after provided to function & join it, Print or return.
// Best Solution : Split the string with integerpart & decimalpart, truncate the integer part first & append to result & if decimal present then truncate decimal append to result and return or print the result.

// function decimalRestrictor(ctrlValue,beforeDecimal,afterDecimal) {
//       let value;
//     let isNum = typeof ctrlValue == 'number';
//     console.log("IsNum :", isNum);
//       isNum ? value = ctrlValue.toString() : value = ctrlValue.toString();
//       if (!value.includes('.')) {
//         value = value.slice(0, beforeDecimal);
//           ctrlValue = value;
//           console.log("Non Decimal Restricted value:",value)
//         return;
//       }
//       let [before, after ] = value.split('.');
//       before = before.length != beforeDecimal ? before.slice(0, beforeDecimal) : before;
//       after = after.length != afterDecimal ? after.slice(0, afterDecimal) : after;
//     value = [before, after].join('.');
//     console.log("Decimal Restricted value:", value);
// }

// decimalRestrictor("123456789", 8, 6);

// 11. Prepare function for getting input value as float or number & return the result by converting the number to result where it is not greater than maxValue.
// Brutforce Approach : parsefloat the value & maxvalue & if value is less than maxValue then return the value & if value is greater than maxValue then get value after decimal then trim the value until the value is equal or less then maxvalue & return or print it.
// Best Solution : // Remaining

// function checkMaxAndTrim3(maxValue,value) {
//     let charArray = value.split('');
//     let currentChar = charArray.pop();
//     let pervValue = charArray.join('');
//     if (parseFloat(pervValue + currentChar) > parseFloat(maxValue))return pervValue;
//     return prevValue + currentChar;
// }
// console.log(checkMaxAndTrim3('10','11'));// Should return 1
// console.log(checkMaxAndTrim3('1.02','1.03')); // Should return 1.0
// console.log(checkMaxAndTrim3('1.02', '1.021')); // Should return 1.02
// console.log(checkMaxAndTrim3('10','10.5')); // Should return 10

// 12. You want to build a software camera system that can handle different subject distances and light levels. You have several hardware cameras, each designed to work well only within specific ranges of distances and light levels. Your goal is to check if the set of hardware cameras you have is sufficient to cover the desired ranges of subject distances and light levels for the software camera.
// Brutforce Solution : Extract the distance & light from the softwareCamera config & Filter hardware camera's & by distance falls within range of hardcamera's distance range & light falls within the hardcamera's light range & return true if we found any hardwarecamera phisible for provided software camera config.

// function isSoftwareCameraFeasible(softwareConfig, hardwareCameras) {
//   // Check for valid Input
//   if (
//     !softwareConfig ||
//     !softwareConfig.distance ||
//     !softwareConfig.light ||
//     !Array.isArray(hardwareCameras) ||
//     hardwareCameras.length === 0
//   ) {
//     return false;
//   }

//   // Extract distance & light of softwareConfig
//   const { distance, light } = softwareConfig;

//   // Check if any hardware camera matches config
//   let selected = hardwareCameras.some((item) => {
//       const minDistance = parseFloat(item.distanceRange.min);
//       const maxDistance = parseFloat(item.distanceRange.max);
//       const minLight = parseFloat(item.lightRange.min);
//       const maxLight = parseFloat(item.lightRange.max);

//       const isDistanceMatch =
//         distance >= minDistance && distance <= maxDistance;
//       const isLightMatch = light >= minLight && light <= maxLight;

//       return isDistanceMatch && isLightMatch;
//   });

//   return selected ? true : false;
// }

// const config = { distance: '05', light: 95 };

// const list = [
//   {
//     distanceRange: {
//       min: '1',
//       max: '10',
//     },
//     lightRange: {
//       min: '10',
//       max: '100',
//     },
//   },
// ];

// const result = isSoftwareCameraFeasible(config, list);
// console.log(result);


// const sentence = 'my name is manish';
// function calcWeight(inputStr) {
//     let results = new Map();
//     const trimmed = inputStr.trim();
//     console.log(trimmed);
//     trimmed.split('').forEach((value, index) => {
//         if (results.has(value)) {
//             let existingWeight = results.get(value);
//             results.set(value,++existingWeight);
//         }
//         else{
//             results.set(value, 1);
//         }
//     })
//     return results;
// }

// console.log(calcWeight(sentence))


// 13. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// () => true
// ()( => false
// ()()() => true

// Solution
// 1. If only one character it should be false.
// 2. If 2 charecters then it should directly compare first element with exps first element.

// function validateOpeningClosing(inputStr){
//     let cur = '';
//     let next = '';
//     let prev = '';
//     const exps = {
//         '(' : ')',
//         '{' : '}',
//         '[' : ']'
//     };
//     // cur = inputStr[i];
//     // next = inputStr[i+1];
//     // prev = inputStr[i-1];

    
//     if (!inputStr.length > 2) {
//         return exps[inputStr[0]] == inputStr[1];
//     }
//     // for(let i =0; i<inputStr.length;i++){
        
//     //     const prevValue = exps[prev];
//     //     const curValue = exps[cur];
        
//     //     if(next && next != curValue || prev && cur != prevValue) return false;
//     // }
//     // return true;
// }

// const result = validateOpeningClosing('{}{}');
// console.log(result);

// Binary search For ascending
// function findIndexOfTarget(target, array){
//     let start = 0;
//     let end = array.length - 1;

// while (start <= end) {
//     let middle = Math.floor((start + end) / 2) ;
//     // console.log(middle);
//     if (target === array[middle]) return middle;
    
//     if (target > array[middle]) {
//         start = middle + 1;  
//     } 
//     else {
//         end = middle - 1;
//     }
// }
// return -1;
// }
// const arr = [1, 2, 3, 4, 5];
// const target = 4;
// console.log(findIndexOfTarget(target, arr))

// Binary search For descending
// function findIndexOfTarget(target, array){
//     let start = 0;
//     let end = array.length - 1;
    
//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2) ;
//         // console.log(middle);
//         if (target === array[middle]) return middle;
        
//         if (target > array[middle]) {
//             end = middle - 1;  
//         } 
//         else {
//             start = middle + 1;
//         }
//     }
//     return -1;
// }
// const arr = [5,4,3,2,1];
// const target = 5;
// console.log(findIndexOfTarget(target,arr))

// Binary search for ascending rotated sorted array.
// function findIndexOfTarget(target, array){
//     let start = 0;
//     let end = array.length - 1;

// while (start <= end) {
//     let middle = Math.floor((start + end) / 2) ;
//     // console.log(middle);
//     if (target === array[middle]) return middle;
    
//     // If left side is sorted.
//     if (array[start] <= array[middle]) {
        

//         if (target >= array[start] && target < array[middle]) { 
//             end = middle - 1;
//         }
//         else {
//             start = middle + 1;
//         }
        
//     } 
//     // If right side is sorted
//     else {
//         if (target > array[mid] && target <= array[end]) { 
//             start = mid + 1;
//         }
//         else {
//             end = mid - 1;
//         }
//     }
// }
// return -1;
// }
// const arr = [4, 5, 6, 7, 0, 1, 2];
// const target = 0;
// console.log(findIndexOfTarget(target, arr))

// // Binary search for descending rotated sorted array
// function findIndexOfTarget(target, array){
//     let start = 0;
//     let end = array.length - 1;

// while (start <= end) {
//     let middle = Math.floor((start + end) / 2) ;
//     // console.log(middle);
//     if (target === array[middle]) return middle;
    
//     // If left side is sorted.
//     if (array[middle] <= array[start]) {
        

//         if (target <= array[start] && target > array[middle]) { 
//             end = middle - 1;
//         }
//         else {
//             start = middle + 1;
//         }
        
//     } 
//     // If right side is sorted
//     else {
//         if (target < array[middle] && target >= array[end]) { 
//             start = middle + 1;
//         }
//         else {
//             end = middle - 1;
//         }
//     }
// }
// return -1;
// }
// const arr = [5, 4, 3, 2, 1] ;
// const target = 6;
// console.log(findIndexOfTarget(target, arr))

// // Find minimum value in rotated sorted array
// function findBsMinRotatedSortedArray(nums) {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start < end) {
//         let mid = Math.floor((start + end) / 2);

//         // compare mid with start since it's a descending order
//          if (nums[mid] > nums[end]) {
//             // Minimum lies in the right half
//             start = mid + 1;
//         } else {
//             // Minimum lies in the left half or at mid itself
//             end = mid;
//         }
//     }

//     return nums[start];  // Or nums[end], both are the same at this point
// }

// const arr = [5,4,1,2,3];
// console.log(findBsMinRotatedSortedArray(arr)); // Output: 1

// Sort the array of 0s, 1s and 2s

function sortArray(arr) {
    return arr.sort((a, b) => a - b);   
}

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

const arr = [0, 1, 2, 2, 0, 1];
const result = sortArrayWithDNA(arr);
console.log(result);
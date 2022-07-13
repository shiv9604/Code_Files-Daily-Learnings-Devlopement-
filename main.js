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
  
//   console.log(sequentialSizes(1));
let obj = {
    name:"Shivprasad Kounsalye",
    age:"shiv@email.com"
}


# Java-Script

javaScript is scripting language made for interpretate the some logic at the browser side soo reduce the traffic to the server for the small small task and to reduce the run time of the website.

### Variables

We declare the variables in the javascript with the keyword "var".

**Ways to declare the variables in the javascript** -

1. var =

### Data Types 

There are 2 types of datatypes in javascript.

- **Premetive** - Those datatypes are the root datatypes of the languauge which stores in the stack in memory.

- **Non-Premetive** - Derived data types which get stored in the Heap space.

**Premetive Data types** : -

1. string = "" written in this symbol which are basically the alphabates.

2. number = 12 normally written in the numeric values.

3. Boolean = these data types only contains only 2 values like true and false which are conditional data types.

4. Undefined = Undefiend represents variable declaration but the value is undefined.

5. NULL = Null represents no value at all.

**Non-Premetive Data Types** : -

1. array = ["a",b,c] combination of data types grouped together to store in single variable is called as array.

2. Object = {key:value} Object are basically the key value pair in which we can store the data related to real world like the details of the person and all together.

3. Regular Expression = Represents regualr expression.

### Functions 

If we need to repeat any functionality again and again in the certain task or project you just group that functionality in a block make it dynamic soo it will be worked in the same logic but in the different situations.

We declare function as mentioned below :

```
function thisFunc(){
    // Code
    return code;
}
```

The function declaration is done with the keyword **"function"** and **thisfunc** is the name associated with the function and and in the **(parameters)** we pass the parameters which we going to use inside the function.

The return written in the function returns the value to the function but whenever the return keyword is used we need to assign the function to the variable or we need to do the **console.log(function)** then only we can get the result.

### Scope 

There are 2 types of scope in the javascript as followed :

- **Global Scope** -
  Global scope is in which our variables will get stored in our memory and we can use them throughout the code.

- **Local or Block Scope** -
  Local scope is the block scope in which the variables will not get stored in the memory they will be limited to its **scope {}** like they will be temp variable just to perform the functionality and it will be accesible in that blocks only or inside the function.

### String Concatination 

We can concat the strings in the javascript with the many ways but we most usable is with console.log("string",var) and with the **"" + ""**.

### Incremental and decremental oprators 

1. **Pre and Post increment oprators**

- ++value :- It will increment the value first and then print

- value++ :- It will print the value first and then it will print it.

2. **Pre and Post increment oprators**

- ++value :- It will increment the value first and then print

- value++ :- It will print the value first and then it will print it.

### Arithmatic Oprators

- **+** :- Additional oprators used for addition and concatination.

- **-** :- Substraction oprator used for substraction.

- **"*"** :- Multiplication oprator used for multiplication.

- **/** :- Divide oprator used for divisional oprations.

- **%** :- Its modulus oprator which gives us the remainder of the division.

### Assignment oprators

- **=** :- This is the assignment oprator in the javascript which assigns the values to the variables or else.

- **+=** :- This oprators add the asasigned value to the variable.

- **-=** :- This oprators substracts the assigned value to the variable.

- ***=**  :- This oprators Mutiplies the assigned value to the variable.

- **/=**  :- This oprators divides the assigned value to the variable.

### Ternary Oprators

`condition ? true : false`

Ternary oprators which have 3 values in it thats why its called as ternary oprator and its used to do the small comparison based on true false statements.

**We can use it single line if else statements**

Ex : `a>6 ? console.log(true) : console.log(false)` = It will returns true.

### Logical and comparision oprators
	
- `==`	**Equal to** :- true if the operands are equal.


    Ex : 	5==5; //true
 
- `!=`	**Not equal to** :- true if the operands are not equal	

    Ex: 5!=5; // false
 
- `===`	**Strict equal to** : -  true if the operands are equal and of the same - type	

    Ex : 5==='5'; //false
 
- `!==`	**Strict not equal to** :- true if the operands are equal but of  different type or not equal at all	

    Ex : 5!=='5'; //true
 
- `">"`	**Greater than** :- true if the left operand is greater than the  right operand	

    Ex : 3>2; //true
 
- `>=`	**Greater than or equal to** :- true if the left operand is greater - than or equal to the right operand	

    Ex : 3>=3; //true
 
- `<`	**Less than** :- true if the left operand is less than the right - operand	

    Ex : 3<2; //false
 
- `<=`	**Less than or equal to** :- true if the left operand is less than or equal to the right operand	
    
    Ex : 2<=2; //true

### Conditional (and, or, not) oprator

- `&&` :- And oprator used to check the mutiple true conditions in if else statements.

- `||` :- Or oprator used to check the at least one true conditions in if else statements.

- `!` :- Not oprator is used to inverse the output of the statement.

### If else statments

If else statements in the javascript is used to check the conditions in our code and what we want to execute if some specific condition get executed and if not then what to execute as like mentioned below.

Ex :
```
let name = "shiv";
if(name=="shiv"){
    conosle.log("this is the right person")
} 
else if{
    conosle.log("this is not the right person")
}
else{
    console.log("Not Found")
}
``` 
In the above example we are checking the name and executing the right code if it will be true and what if it will be false.

**Returning True and False :-**

In the traditional method if you want to return true of false by checking with the logical oprators `if( value=="shiv" ){ return true }else{ return false}` it will return true or false But we can do with something advanced.


Rahter than returning `true and false` in if else statement by checking the condition we can write the function return statement with logical oprator as like mentioned below.
 
```
function isLess(a, b) {
  // Only change code below this line
    return a<b;
  
  // Only change code above this line
}

isLess(10, 15); // true
```

function isLess(a, b) {
  // Only change code below this line
    return a<b;
  
  // Only change code above this line
}

isLess(10, 15);
```

### Switch Statements

Swithc case is also conditional functionality in the javascript which checks the multiple conditions and gives us the result.

Difference between if else and switch statement is `if else ` statement becomes lengthy if there would be multiple conditions soo there `switch` statement is used.

**Structure :-**

- `switch(){}` - we define the switch case with the help of it.

- `case <condition>:` - we define our condition to check in front of case and checks with strict `===` oprator.

- `default:` - It will work as else statement in the switch case.

We can see the whole structure in the mentioned below.

**Most Imp :- we cant check the values like `value=='somevalue'` in the switch statement either case itself checks the condition with `===` strict equality oprator.** 

EX : 

```
let val = 5

switch(val){
    case 1:
        console.log("One")
        break;
    case 2 :
        console.log("Two")
        break;
    case 3 : 
        console.log("Three")
        break;
    default:
        console.log("Name Not Found")
        break;
}
```
**Switch statement with multiple input with same output:-** 

If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

```
let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```
**Switch statement with logical oprators :-**

If we need to use the logical oprators and we need to check some different conditons with our own we can use `switch(true){}` soo it can check the our written conditions.

```
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  
    switch(true){
        
      case val>=1 && val<=3:
        answer = "Low"
        break;

      case val>=4 && val<=6:
        answer = "Med"
        break;
      
      case val>=7 && val>=9:
        answer = "High"
        break;
  
    }
  
    // Only change code above this line
    return answer;
  }
  
  console.log(sequentialSizes(1));
```


**Usecase :-**

Only use switch case statement when you need to check the multiple conditions with `===` like `if(value==='shiv'){console.log("Shiv is here")}
` then only use the switch statement like `swich(val){case "shiv" : console.log("Shiv is here")}` to reduce the syntax and keep it simple.


### Ways of outputs 

1. **Console Output**  - We can get the output in the console by  using conosle methods like `conosle.log("hi there")`.

2. **Document Output** - We can get the output on our webpage by using document methods like `document.write("hi there")`.

3. **Alert** - We can get output in the alert as which appers on the webpage on the top like a pop up by using methods `alert("hi there")`.

4. **Dynamic content on the webpage (innerHTML)** - We can show the dynamic data on the website in the perticular element as well through the javascript by using the `document.getElementById("")`


### Inputs of outputs

1. **Window Input** - We can take window input from the alert by using ` let output = window.prompt("Enter the name : ")`.

2. **HTML Form** - We can take input by using HTML form and by using `input.value` and this is the best and ideal way to take input from the user in the feild of web developement.
 

### Arrays 

- **How to acess the values of array** :- 

    In the arrays we can acess the values of array by its own index in the array.
    ```
    var hobbies = ["reading","swiming"]
    console.log(hobbies[0]) // It wil return the reading.
    ```

-  **Array Properteis** - 

    1. `arr.length` - return the length of the array.

    2. `arr.concat(anotherArray)` - It will concat the array on which the method is called.

 -  **Array methods** - 
    
    1. `arr.push()` - It will push the value in the array at the end of the array.

    2. `arr.pop()` - It will remove the last element of the array.

    3. `arr.toString()` - It will convert the arry with its specific index in a single string.

    4. `arr.find(()=>{})` - The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

    5. `arr.filter(()=>{})` - It creates a new array which pass the conditions like mentioned below.
        ```
        let arr = [10,11,22,45,65,87,231,12]

        let mature = arr.filter(res=>{
            return res>=18 
        })
        console.log(arr)
        console.log(mature)
        ```
    6. `arr.map(()=>{})` - It can create the new array by applying modificatinos to it soo too fetch the already available data we use the filter and if we wanna update the data and return it to new array we need to use the map function.
        ```
        let arr = [10,11,22,45,65,87,231,12]

        let agesUpdatedFilter = arr.filter(res=> res+5)
        let agesUpdatedMap = arr.map(res=> res+5)

        console.log(agesUpdatedFilter) // It will return the new array as it is bcoz we cant update the existing the values in the filter method.
        console.log(agesUpdatedMap)// It will return the new array with addition of 5.        
        ```
    7. `arr.sort((a,b)=>a-b)` - It will sort the numerical values and we can use the plain sort function for the alphabetical sorting.
        ```
        let arr = [10,11,22,45,65,87,231,12]

        let sorted = arr.sort((a,b)=>a-b)

        console.log(sorted) // [10, 11, 12, 22,45, 65, 87, 231]

        ```
    
    8. `arr.reverse` - It will reverses the values of the arry.
        
    9.  `arr.slice(start,end)` - It will return a new array with the sliced elements without affecting the orignal array.


### Objects
Object is the premetive data type in the javascript which holds the key value pairs in it `const person = {name:"shiv",age:10}` and soo on.
We can use any dataype.

**How to create objects :-**

- `let user = new Object(); // "object constructor" syntax` 
- 
- `let user = {};  // "object literal" syntax` 

**How to acess the values inside the obj :-**

- `person.name // We can acess the values with the obj.property name`

- `person["name"] // We can acess the values with the Obj['property']`

    When we use `.notation` the property should be available there and it will works like adress of something else but when we use `obj["property"]` it will not check the property exists there are not.

**Objects properties and methdos :-**

- `"age" in user` - This will check if the property exists in user on not and return true and false.

- `Object.assign(new obj)` - It will assign the value and properteis of our new object to the object which we want to assign and we will get a single obj with all the properties and values of both of objects.

- `Object.freeze(obj)` - It will freeze that object soo other code cannot delete and change the properties.

- `Objecty.keys(obj)` - This will return the arry off obj keys.

- `Objecty.values(obj)` - This will return the arry off obj values.

### Classes 
Classes are the real world things or objects which holds their properties and their functionalities calles as methods are called as objects.

We can declare a class by using the below syntax : 
```
class Employee{
    constructor(name,salary){
        // properties
        this.name = name, 
        this.salary = salary
    }

    // Methods
    greet(){
        console.log("Good Morning",this.name)
    }
}
```
- we declare the classes with the keyword `class`.

- `constructor(){}` is the things which assign the external values to the class dynamically by using keyword `this` keyword to the obj whos its property of.

-  When we write the function in the class we dont need to use the keyword `function` we can decalre the methods like `greet () {conosle.log(name)}`.
 

### Loops 

- **Simple For Loop :-** 

    A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

    For loop Structure : 
    ```
    for ([initialExpression]; [conditionExpression]; [incrementExpression]){
        // Code
    }
    ```

    Ex : 
    ```
    for(let i =0;i<10;i++){
    console.log(i)
    }
    ```
- **Do while loop :-**
  
    Do while loop is when we want to run the loop at least once.

    Do While Loop Structure : 
  ```
  let i = 0;
    do {
    i += 1;
    console.log(i);
    } while (i < 5);
  ```

- **while loop :-**

    While Loop is the same as for loop.

    Code Structure for while loop : 

    ```
    let i = 0;
    while(i<10){
        console.log(i)
        i++;
    } // It will print the values till the 9 as 10 will be the exclusive.
    ```

### Latest for loops

- **For in Loop :-**
  
  We can use the for-in loop on objects and strings to acess their properties and values as like mentioned below.

  ```
  for (var in obj){
      console.log(var)
  }
  // It will return the keys of objects
  ```
  We can acess the values by using the for-in loop as like mentioned below:
  ```
  for(a in obj){
      console.log(obj[a])
  }// It will return the values as we are acessing the value like Obj[key]
  ```
  
- **For-in loop on string :-**
  
  In the terms of string it returns the index of the each charecter soo we can use with `string[index]`.

  ```
  let str = "This is a demo string"
  for(i in str){
      console.log(str[i])
  }
  ```  

- **For of loop : -**
  
  We can use the for of loop only on **itrable** datatpe only like String , Array , TypedArray , Map , and Set.

    **For of returns directly the value instead of index on any iterable datatype and we cant use the for-of loop on obj bcoz its not an iterable data type**

**For of loop on array** - 
```
let arr = ['a','b','c','d']
for(a  of arr){
    console.log(a)
}// It will return a,b,c,d in new line.
```

**For of loop on string** - 
  ```
  let str = "This is a demo string"
  for(i of str){
      console.log(i)
  }
  ```
### Premetive DataTypes and Refrence Data types

Premetive data types copied by value and refrence data types copied by the adress of refrence.

**Premetive Example : -**
Ex : 
```
let name = "Shiv"
let personName = name

name = "Sai"
console.log(name) // Sai
console.log(personName) // Shiv bcoz its copied the value from the variable.
```
**Non Premetive Example : -**

Ex : 
```
let obj = {name:"shiv"}

let firstName = obj

obj.name = "Sai"

console.log(obj.name)
console.log(firstName.name)
```
### JSON

JSON is the data format in which we can transport the data on network and  in the todays era most of the api returns the data in JSON format rahter than XML like before.

**IN the JSON we need to use the `""` strictly for the properties of the obj and we can strore the values as per the datatype. And extra at the ending qomma `,` is stricly not allowed in the json.**

In javascript we can parse the json data to obj and we can stringify the object to transfer on the local network.

**Parse the json data to obj** - 

In javascript we have `JSON.parse(obj)` method which returns us the data in object format in the javascript.

Ex : 
```
let jsonData = {
    "name":"shiv",
    "age":15
}

parsedJson = JSON.parse(jsonData)
console.log(parsedJson) // It will return us the obj.
```

**Stringify the data** -

We can convert the object into the string for the transportation in the javascript with the help ob `Object.stringify(obj)` and it will convert the obj into string And we can use all the stering methods on it.

```
let jsonData = {
    name:"shiv",
    age:15
}

parsedJson = Object.stringify(jsonData)
console.log(parsedJson) // It will return string of object.
```

### Strings and Methods 

Str is the datatype in which we store the collection of charecters in `"abc"` or insiide the ` `This is string` `like this and string obj like `let str = new String("This is the string")`.

**Acessing the Charecters :-**
- We can acess the charecters by 2 methods.
    - `str[index]`
    - `str.charAt(index)`

**String properties and methods:-**

-  `string.length` - Gives us the string length.

- `string.toUpperCase()` - It converts the string to uppercase.

- `string.toLowerCase()` - It converts the string to Lowercase.

- `string.split(seprater)` - It will seprate the string with the seprator and returs an array.

- `string.slice(startIndex,stopIndex)` - It will slice the string and return us string in between the indexes which we given.

- `string.indexOf("char",startIndex)` - It will returns us the index of the first char by defualt but when we give the startIndex it will return the first occurance from that index only.

### Math Object 

Math is the class in the javascript which have all static methods.

**Math usefull methods :-**

- `Math.sqrt(number)` - It will gives us the square root of the nubmer.

- `Math.floor(number)` - It will returns us the natural number of the decimal number in points like 456546546.131223123.

- `Math.random()` - It wil returns the random number between 0 and 1 and we can get the numbers between the ranges of our input by multiplying it to it. 
ex: 
```
let a = Math.random() *100
console.log(a) // It will return the random number under the 100 in decimal.

// If we will do Math.floor(a) it will the natural number.
```

### Dates and Time 

Dates are one of the most important conceot in the javascript.We can get the date by creating `new Date()` and we can acess that its methods and properteis mentioned below.

**Dates methods and properties : -**

- `let today = new Date()` - It will returns us the full date.

- `let day = new Date().day()` - It will returns us the day in between 1-6.

- `let date = new Date().date()` - It will returns us the date of the month between 1-31.

- `let month = new Date().month()+1`  - It will return the month in between 1-12.

**How to manipulate Date time format :-**

--- REMAINING FROM YOUTUBE ---

### Es6 JavaScript

- **Difference between let and const :-**  
Basically the only difference between let,var,const is mentioned below : 
```
// We can declare the variable with the same name multiple times with var
var a = "string";
console.log(a)

var a = {value:"string"}
console.log(a)

// We can't declare the variable with the same name multiple times with let it will throw error.
let a = "string";
console.log(a)

let a = {value:"string"}
console.log(a)

// We can manipulate the value of const variable at any cost.
const a = "string";
console.log(a)

a = "string2"
console.log(a)

### Hoisting
Hoisting means javascript declaratino and initialization, execution happens as like mentioned below.

1. In the first stage javascript compiler decalre the variables and the functions means it allocates the space in the memory to the functions and variables.

2. In the second stage it initialize the values of the variables to the declared variables and it executes.


### Arrow Functions

Arrow function is the shorter syntax of declaring the function in the ES6.

We can declare the function by using `let or const` and then the function will be `const sum = (a+b)=>{a+b}` and we need to use the return keyword if the code will be multiple lines as like mentioned below : 
```
// Multiline arrow function
const sum = (a,b)=>{
    console.log("This is the function which will sum the 2 values");
    return a + b
}
```

- **Difference Between normal and arrow functions :-** 

    Normal Functions can be executed before its declaration but arrow functions cant be executed before initialization bcoz while hoisting functions get declared in the first stage and we can execute the functions like that but

    Arrow functions act as variable and variables initializations happens in the second stage and in that stage if we call the function before its value intialization it will throw an error.


- **Variations in the arrow functions :-**

    **Ideal Version** - `let a = (args)=>{code}`

    1. When we only passing only one parameter and single line. `let a = a=>console.log(a)`
        - When we have only one argument to the function we dont need to give the parameters in the banana braces `()`

    2. When we have only single line of return statement. `let greet = ()=>console.log("Good Morning")`
        - Brace `{}`  brackets are only required when we have code of multiple lines. 

    3. When we want to return then it must be in `{return something}`. 
    ```
    let greet = (name)=>{
        return "Hello, Good Morning" + name
    }
    ```

### Backtics ` `` ` in ES6
Backtics are used to use variables and javascript variables and expression inside the strings as like mentioned below.

```
let userName = "Shivprasad"
let a = `My name is ${userName}`
```


### DOM Manipulation
In the dom manipulation we target the HTML elements by `let btn = document.getElementById('btn')` and we can manipulate the HTML element like we can change the following things with it.

- Dynamic Data
- Btn Clcks
- Behaviours
- etc 



### Getting form values

The forms are the most important source to get the data from the user through the javascript soo the forms are the most important concepts in the javascript and HTML.

- **How to acess the values of the forms :-** 

    In the javascript we can acess the forms values with the `<input name="" >` attribute in the HTML and we give the name to the form as well like `<form name="login">` and with the help of the this things we can acess the values of forms through `document.forms["login"]["fieldname"].value` property as like mentioned below.

    ```
    console.log("This JS file is connected...")

    function getData(){
        let fname = document.forms["login"]["name"].value
        let email = document.forms["login"]["email"].value
        let pass = document.forms["login"]["password"].value

        console.log("firstName :-",fname);
        console.log("email :-",email);
        console.log("password :-",pass);
    }
    ```
### Regular Expression

With the help of Regular expresssion we can check a specifc pattern in the paragraph or the string.

`let regex = \\` - Regular expression written in the `\\` in the javascript.

--- Remaining from Youtube ---

### This keyword

In the global scopr this refers to the browser window and in the function scope the this will be undefined but in the classes this will be pointout the class in which its property of.

`console.log(this)` will return the whole window object in the global scope.

And here its used in he objects : 
```
let car = {
    brand:"BMW",
    getBrand:function(){
        console.log("Car Brand is : ",this.brand)
    }
}
car.getBrand() // It will return "Car Brand is : BMW"
```

### Advanced Functions
Plain functions only resposinble for give result only once.

But we can create multistage functions which will gives us the results at the different different stages called as **genrator functios** `function*()`.

- **Genrator Functions :-** 
    Genrator functions which gives us more then single outputs at different different stages.

    --- remaining from youtube--- 

- **Default Parameter in the functions :-**
    We can set the default parameter while declaring the functions like `function sum(a,b=5){return a+b}`.

    By using this we can remove the compulsion of the that much parameters while using the function.

### Spread and rest oprators

There is huge difference between spread and rest oprators which will depend upon the type of chalenge in front of us as like mentioned below : 

1. **Spread Oprator** : It spreads the values of any group datatype to seprate values.
```
let arr = [1,3]
function sum(a,b){
    console.log(a + b);
}

sum(...arr) // it will return the sum of them.
// IN this above functions we need the 2 args seprate but we have array of 2 values soo we are spreading its values while passing to the function.
```

2. **Rest Oprator** : It combines the multiple arguements in the array for the function.

```
function sum(...args){
    console.log(args)
    for(let arg of args){
        console.log(arg)
    }
}

sum(1,2,4,5,78) // ...args is the array of inputs and its rest oprator
// We need to loop through the values as per our functionality requirement.
```

### Browser Storage

1. **Local Storage :-**

2. **Session Storage :-**

3. **Cookies :-** Cookies are small chunks of data which is stored by the user like name,value and those are used for authenticating,session tracking and remembering some information.

**Cookies is bit old topic but normally we use mostly localstorage and session storage for the production.**

 - **Storage of cookies :-** Storage of cookies happen in string data type with key and value pair but string only as like mentioned below.
 ```
 document.cookie = "key1 = value; key2 = value2;"
 ```

- **Reading cookies :-** We can read cookies by spliting into array as its an strign soo we will get an array out of it with the help of `split(';')` method.
```
let cookies = document.cookie;
let cookies_arr = cookies.spli(;)
// Returns us array with cookies data.
```

### IIFE

Immeditly invoked functions are the functions without names or identity noone can call it but we call the such kind of functions as soon as it invoked soo it works as like **ngOnInit(){}** in angular.

We need to take care of on thing while creating the anonomus fucntion is we need to put the all function in the bracket as like mentioned below :-
```
// IIFE Without name
(function(){
    console.log("Good Morning Shiv...")
}());

// IIFE With name
(function greet(){
    console.log("Good Morning Shiv...")
}());
```
### Asynchronus javascript

Asynchronus javascript is when we want to perform multiple tasks but if some task requires some amount of time but we dont want to stop our rest of the tasks to complete then the asynchronus javascript comes.

With the help of asynchronus javascript we can achieve this level of performing taks by 2 methods as like mentioned below.


- **Promises :-**
    Promise helps us to handle asynchronus oprations in javascript.
    Promise is an object returned by the asynchronus function.
    


    1. **Producing promise :-** We perform some task and return the promise as per it is reolved or rejected.
        ```
        let promise = new Promise((res,rej)=>{
            let sum = 5+5
            if(sum==10){
                res() // this will never prints anything in the console
                console.log("Promise resolved")
            }
            else{
                // It will return its value in the catch block in the err and if the promise not resolved by the user it will still prints its statement as like error in console.
                
                rej("Something went wrong...") 


                console.log("Promise rejected")
            }
        })
        ```

    2. **Consuming and resolving promise :-**
    
        1. `promise.then` - This will execute the code under the callback function when the promise gets resolved.

        2. `promise.catch` - This will get executed the code undeder the callback function when the promise gets rejected.

        3. `promise.finally` - This will get executed the code under the callback function either promise will get rejected or resovled it will still execute at any how.
        
        ```
        promise.then(()=>{
        console.log("2. Promise resolved sucessfully")
        })
        .catch(e=>{console.log("Error",e)}).
        .finally(()=>{console.log("Promise completed...")});
        ```
    **How to let code wait for any kind of opration :-**

    We need to execute the further statements in the then block as like after resolvingthe the promise as like mentioned below.
    ```
    console.log("1. This is line 1")

    const prepareData = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res("2. This is line 2")
            }, 3000);
        })
    }

    prepareData().then((res)=>{
        console.log(res)
        console.log("Line Three...")
    }
    )
    .catch((e)=>console.log(e))
    ```
    
- **async and await :-**
    Asynchronus function returns the promomise and it can consist of the await statements which means we need to wait till the completion of await statement and then only code goes further.

    **How to let code wait for any kind of opration :-**

    await have only control for the async funtion block and we can stop only the things inside running in that block.

    Soo we need to use the await in the async function block and we need to execute the further code below the await.

    `Most IMP :- Code below the await will not run if the promise not get resolved.`

    **How to resolve promise with await :-** 

    And we can use await like `.then(()=>{})` soo it will run the below code only if promise get resolved else it will throw error.

    ```
    
    async function generatePromise(){
        return "String"
    }

    (async function(){
        let result = await generatePromise() // resolving promise
        console.log(result)
    })();
    ```

    **Returning promise with new Promise and waiting till the opration complete in async and await function :-**
    Ex : 
    ```
    const uno = () => {
    return "1";
    };
    const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("2");
        }, 3000);
    });
    };
    const tres = () => {
    return "3";
    };

    const callAll = async () => {
    let one = uno();
    console.log(one);

    let two = await dos();
    console.log(two);

    let three = tres();
    console.log(three);
    };
    callAll();

    // Output
    1
    2 // it will wait for it
    3
    ```

### How to generate the promise and solve with async and await

- **Returning promise with async function :-**
    ```
    
    async function generatePromise(){
        return "String"
    } // Returns promise
    ```
- **Resolving promise with async function itself :-**

    ```
        (async function(){
        let result = await generatePromise()
        console.log(result)
    })();
    ```
### Fetch Data

In the javascript we have `fetch()` method which returns the promise and we can get the data by resolving the promise in the javascript as like mentioned below.
```

let fetData = fetch(https://192.168.0/api/docs/va.101010) // returns the promise
fetData.then(res=>res.JSON()) // It will returns one more promise
.then(data=>console.log(data)) // It will returns the pure data
```

### Callback functions

We can control the execution of code with the callbacks and we can stop the code as well without even using the await just with the callbacks as like mentioned below.

Basically call back is calling another function inside the function or passing a function to the function as parameter.

```
function one(){
    console.log("one")
}
one()
function two(){
    setTimeout(()=>{
        console.log("two");
        three()
    },3000)
    
}
two()

function three(){
    console.log("three")
}
// one 
// Waits for 3 seconds
// two
// three
```

### TimeOut and Interval

- **`setTimeOut` :-** With the help of the sert timeout we can perform task after some delay or after some specific wait.

```
setTimeOut(()=>{
    console.log("This is after 3 seconds.")
},3000)
```

- **`setInterval` :-** With the help of `setInterval` we can do somethings repetadely after some amount of time as like mentioned below.

```
setInterval(()=>{
    console.log("This will print repeadly after some 2 seconds.")
},2000)
```

**How to pass readymade function to timeout and interval with arguements :-**

Normally we can pass the function like `setTimeOut(func(),timeout)`.

But with arguments we can pass the function like `setTimeOut(func(),timeout,arg1,arg2, args...)`.


### Try Catch and Finally

As like every other programming javascript also have error handelling with try catch and finally block as like mentioned below.

- **`try{}` :-** Try block runs the code and if any error occurs it will thorow it and the interpretator enters directly in catch block by ignoring the below code.

- **`catch(e){}` :-** Catch block catches the error and can print it without breaking the code and can perform the further usecases.

- **`finally{}` :-** Finally block runs anyhow if the try block runs sucessfully without having any error or if it will get any kind of error as well.

Ex :

```
try{
    console.log(1)
    throw new Error("This have got some error")
    console.log(3) // This line will never get executed bcoz it got error on the previous line and it will directly enters in the catch block.
}catch(e){
    console.log(e)
}finally{
    console.log("Process completed.")
}
```

### Sets

Set is the datatype available in the javascirpt same as like array which stores only the unique value and removes the duplicates from the passed array.

**Opearations :-**

- **Creation :-**

    We can create the set with new keyword as like mentioned below `let set = new Set()` which returns empty set.

- **Add Value :-**

    We can add the value in set with `.add()` method like `set.add(value)` which retuns set with added value.

- **Remove Value :-**

    We can remove the value form set with `.delete(value)` from set which returns true or false.

- **Clear Values :-**

    We can clear the set with `.clear()` method like `set.clear()` which removes all values from set.

- **Entries :-**

    In set there are no keys concept so we have value as key as well as values.

    `set.entries()` reurns an iterator object like `{value1=>value1,value2=>value2,value3=>value3}` on which we can run the forLoop like arrays and we can acess the single item of it which looks like `[value,value]` as both values same as key and values.

    ```
    let set = new Set([1,2,3,4,5])
    // Type is Object 
    console.log(set.entries(), "Type :",typeof set.entries())
    
    // [1,1],[2,2]...
    for(let item of set.entries()){
        console.log(item)
    }
    ```

- **Check Value :-**

    In set we can check item by ites value like `set.has(value)` which returns true or false by checking in it.

- **Ways of Iteration on Sets :-**

    We can iterate over sets with `set.forEach(cb)` which takes callback function as arguement in which we can get `(value, key, set)` as like mentioned below.

    As the key and values are same in the set you will receive the same value in the key as well as value as like mentioned below.

    ```
    let set = new Set([1,2,3,4,5])

    set.forEach((value,key,set)=>{
        console.log("Key",key)
        console.log("Value",value)
        console.log("Set",set)
    })
    ```

- **Get Keys and Values :-**

    In the set we keys and values are the same itself.

    We can get its keys and values which returns keys and values object as like mentioned below.

    ```
    let set = new Set([1,2,3,4,5])
    console.log("Keys:", set.keys())
    console.log("Value:", set.values())
    ```

### Temporal Dead Zone

```

```
### Event Loop
### Lexical Enviornment
### Closures
### Difference between null and undefined and not defined
### Currying in javascript
### First class functions ang higher order function
### Call, Apply , Bind
### Event Bubbling
### Event Deligation
### Event Capturing
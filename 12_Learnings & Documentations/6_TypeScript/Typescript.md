# TypeScript
**TypeScript is the super set of the javascript and we can avoid lot of unwanted bugs and errors in the production codes which may occur by invalid datatypes and its inputs**



### DataTypes In Typescript
we have datatypes in the typescript as like normal other programming languages.


**In the typescript we just give the types to the variables functions and outputs classes to avoid the unwanted bugs and all which can be caused by the invalid input**

- `let str:string = "string"`

- `let num:number = 15`
 
- `let bool:boolean = true`
 
- `let str:any = "string"`

### Arrays[]
**We can create array like normal as per javascript but we have to give the type by the following way...**

- number[] = Numbers Array
- string[] = String Array
- boolean[] = boolean Array
- Any[] = Any type of array it can be or multiple datatypes containing

`let arrnum : number[] = [1,2,4,5,6,47]`
`let arr : any[] = ["name",10,true]`

### Tuple
**Tuple is nothing but the type of array having same syntax but tuples are limited version of it and having restrictions.**

```
// (Tuple is lenth specified and have restrictions)
let tup:[number,string,number] = [1,"shiv",15800]
console.log(tup)
```
It needs to be as mentioned in the type and it should have same lenth as we mentioned.

### Tuple Array
**We can make the array elements as per our need like [number,string][] soo it have to hold the values in this kind of format one number next to the every string**

```
// Tuple array
let tuparr:[number,string][]
tuparr = [
    [1,"a"],
    [2,"b"],
    [3,"c"],
] 

console.log(tuparr);
```

### Union
**We can make our type initialization felxible like *`let val:string | number`* soo we can store either number inside that or string**

```
// union 
// (we can use wither 2 datatypes in the variables)
let pid: number|string 
pid = "string",12

```
### Enum
**We return the values of indexes in customizable incresing order or the values we assigned to it.**

```
// Enum (we get the values (indexes) of the element in the increasing order)
enum Direction{
    up = 1,
    right,
    down,
    left
}
enum Direction2{
    up = "up",
    right = "right",
    down = "down",
    left = "left"
}
// if we print the direction.up we get 0 
// if we set any starting value to enum then we will get another values above that
```
### Objects
**We create the objects normal like javascript but we initialize its types before creating objects,We use `type xyz={}` for initialization of datatypes and we can give that type to the object like mentioned below**

```
// (we initialize the types of values first inside the type type Usertype={} and we are passing Usertype as the type of datatypes inside the user)
type UserType={
    id:number,
    name:string
}

const user:UserType = {
    id:15,
    name:"shiv"
}
```
### Type Assertion
**We can change the datatype of the variables by the following methods.**

```
// Type Assertion
let cid:any = 3

// We can do type assertion by 2 types 
let CustomerID = <number>cid
let CustomerIDNew = cid as number
```

### Functions
**We create the functions as normal like in the javascript but we initialize the datatypes of the arguements and the return value as well like mentioned below :**
```
// functions
// by default default datatype for function arguements is the any but in the strict mode we have to provide it.
function addNum(x:number,y:number):number{
    return x+y
}
console.log(addNum(10,15))
```

### Void
**We use void where we dont want to return anything**
```
// Void 
function msg(massage:number | string):void{
    console.log(massage)
}
```
### Interfaces
**It's the same as the object but while initializing the datatypes we use `interface xyz{}` kwyword instead of type**
```
// Interfaces 
// (same as the object but use Interface instead of type where we are declaring the datatypes of our objects)

interface UserTypeInterface{
    readonly id:number, //we cant change the value of that
    name:string,
    age?:number // we Can use optional property by using ?: while initializing.
}

const userInterface:UserTypeInterface = {
    id:15,
    name:"shiv"
}
```
Most Important thing is we cannot used the unions with the interfaces but we can use it with the "type"
### Classes
**We define class intypescript as normal by using keyword `class xyz{}` and we define the types first and the constructor as mentioned below**
Constructor is the thing which runs automaticall when we assign any variable to that class.

```
class Person{
    id:number
    name:string

    constructor(id:number,name:string){
        this.id = id
        this.name = name
        console.log(`The persons id is : ${id}`)
        console.log(`The persons name is : ${name}`)
    }
}

const shiv = new Person(1,"Brad")
const shiv2 = new Person(2,"Jordan")
```

### Interfaces with Typescript
**While using interface with class in typescript we use `implements` keyword to assign our interface to the class**
```

// Using interface in class
interface PersonInterface{
    id:number
    name:string
}

class Employee implements PersonInterface{
    id:number
    name:string
    
    constructor(id:number,name:string){
        this.id = id
        this.name = name
        
    }
    register(){
        return `Hi ${this.name}, You have registered sucessfully`
    }
}
let chirag = new Employee(18034,"chirag")

console.log(chirag.register())
``` 
### Inheritance in typescript
**Inheritance means we derive the child class inheriting the poperites of the parent class as well means we can use the parent class properties inside the child class., We need to initiazlie the types inside the interface as well as inside the class itself. We use `extends` keyword and `super()` function to inherit the properties from the parent class for the inheritance as mentioned below**
```
interface PersonInterface{
    id:number
    name:string
}

class Employee implements PersonInterface{
    id:number
    name:string
    
    constructor(id:number,name:string){
        this.id = id
        this.name = name
        
    }
    register(){
        return `Hi ${this.name}, You have registered sucessfully`
    }
}

class EmployeeDetails extends Employee{
     JobTitle:string
     
     constructor(id:number,name:string,JobTitle:string){
        super(id,name)
        this.JobTitle = JobTitle
     }
}
let brad = new EmployeeDetails(3,"brad","PHP Devloper")
console.log(brad)
console.log(brad.register())
```
We are initizaling the parent class properties by using `super(id,name)`.
Here we are able to use register of parent class inside the child class as well.

We have some 
### Data Modifiers
**Properties of classes are public by default but we can modify it as follows :**

- **private** : `private id:number`
We can acess those elements inside only the class itself.
- **protected** : `protected id:number` We can only acesss this element by only inside this class or the class inherited by it.

### Methods in Classes
```
register(){
return `${this.name} is now registered`
}
```
- **register** - it will register the user to our class.

### Interface to the class
we dont give the interface to the class like `class Person:PersonInterface{code}` we give the interface to the class like mentioned below...
```
Interface PersonInterface{
    id:number
    name:string
    register():string
}
class Person implements PersonInterface{
    constructor(
        this.id = id
        this.name = name
    )
}
```

### Extending Class 
**By extending the class we can use the parent class properties inside the child class**

We extend the class or inherit the class from the parent class by the keyword **extends**

We don't need to again initalize inside the constructor like `this.id = id` for parent class arguements.


Rather than initializing we can use **super** keyword for the parent class initialization `super(arguement,arguement)` like this.
```
class EmployeeDetails extends Employee{
     JobTitle:string
     
     constructor(id:number,name:string,JobTitle:string){
        super(id,name)
        this.JobTitle = JobTitle
     }
}
```
### Generics

Generics are the functionality to the function with provides the restrictions of passing arrays with the specific datatype like: 
```
// Generics
// We can pass the array as a input with the specific type to the function
function getArray(items:any[]):any{
    return new Array().concat(items)
}

let numGetArray = getArray([1,2,3,4,5])
let strGetArray = getArray(["a","b","c","d","e"])

//It is allowed to push num in string array and string in num array and it can create an error to avoid theat we have generics which specifies the datatype of only type of input

numGetArray.push("z")
strGetArray.push(2)

```

So We can do that by 
```
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numGetArray = getArray<number>([1,2,3,4,5])
let strGetArray = getArray<string>(["a","b","c","d","e"])

//This is not allowed in generics and we cannot push string value to the string array because while initializing we given the type of the array in <number> and it wont allow to string to be a member of num array.

numGetArray.push("z")
strGetArray.push(2)
```
**By Using Genrics we can avoid the inappropriate inputs the specific data type array**

// Data types in typescript
// We initialize the datatypes with ( let variable:datatype = value)

// Datatypes
let str:string =  "string"
let num:number =  10
let bool:boolean =  true
let any:any =  "string"

console.log(str,num,bool,any)

// Arrays
let arrnum : number[] = [1,2,4,5,6,47]
let arr : any[] = ["name",10,true]
console.log(arr)
console.log(arrnum)

// Tuple 
// (Tuple is lenth specified and have restrictions)
let tup:[number,string,number] = [1,"shiv",15800]
console.log(tup)

// Tuple array
let tuparr:[number,string][]
tuparr = [
    [1,"a"],
    [2,"b"],
    [3,"c"],
] 

console.log(tuparr);

// union 
// (we can use wither 2 datatypes in the variables)
let pid: number|string 
pid = "string",12

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

// console.log(Direction.down)
// console.log("Direction2.up") => will return the string up



// Objects 
// (we initialize the types of values first inside the type type Usertype={} and we are passing Usertype as the type of datatypes inside the user)
type UserType={
    id:number,
    name:string
}

const user:UserType = {
    id:15,
    name:"shiv"
}

// Type Assertion
let cid:any = 3

// We can do type assertion by 2 types 
let CustomerID = <number>cid
let CustomerIDNew = cid as number

// functions
// by default default datatype for function arguements is the any but in the strict mode we have to provide it.
function addNum(x:number,y:number):number{
    return x+y
}
console.log(addNum(10,15))


// Void 
function msg(massage:number | string):void{
    console.log(massage)
}

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

// Most Important thing is we cannot used the unions with the interfaces but we can use it with the "type"

interface MathFunc{
    // this means inside the bracket values should be numbers and outside bracket specifies the datatype of return value which should be number.
    (x:number,y:number):number
}

const add : MathFunc = (x,y) => x+y
const sub: MathFunc = (x,y)=> x-y


// Classes
// constructor runs whenever we assign this class to someone.

// private => we cannot access that element outside of the class
// protected => we cannot acess that element outside of the class
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

// SubClass
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

// Generics
// We can pass the array as a input with the specific type to the function
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numGetArray = getArray<number>([1,2,3,4,5])
let strGetArray = getArray<string>(["a","b","c","d","e"])

numGetArray.push(2)
strGetArray.push("2")
console.log(numGetArray)
console.log(strGetArray)

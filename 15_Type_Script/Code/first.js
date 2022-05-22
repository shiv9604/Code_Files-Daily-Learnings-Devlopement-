// Data types in typescript
// We initialize the datatypes with ( let variable:datatype = value)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Datatypes
var str = "string";
var num = 10;
var bool = true;
var any = "string";
console.log(str, num, bool, any);
// Arrays
var arrnum = [1, 2, 4, 5, 6, 47];
var arr = ["name", 10, true];
console.log(arr);
console.log(arrnum);
// Tuple 
// (Tuple is lenth specified and have restrictions)
var tup = [1, "shiv", 15800];
console.log(tup);
// Tuple array
var tuparr;
tuparr = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
];
console.log(tuparr);
// union 
// (we can use wither 2 datatypes in the variables)
var pid;
pid = "string", 12;
// Enum (we get the values (indexes) of the element in the increasing order)
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["down"] = 3] = "down";
    Direction[Direction["left"] = 4] = "left";
})(Direction || (Direction = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["right"] = "right";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
})(Direction2 || (Direction2 = {}));
var user = {
    id: 15,
    name: "shiv"
};
// Type Assertion
var cid = 3;
// We can do type assertion by 2 types 
var CustomerID = cid;
var CustomerIDNew = cid;
// functions
// by default default datatype for function arguements is the any but in the strict mode we have to provide it.
function addNum(x, y) {
    return x + y;
}
console.log(addNum(10, 15));
// Void 
function msg(massage) {
    console.log(massage);
}
var userInterface = {
    id: 15,
    name: "shiv"
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
// constructor runs whenever we assign this class to someone.
// private => we cannot access that element outside of the class
// protected => we cannot acess that element outside of the class
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        console.log("The persons id is : ".concat(id));
        console.log("The persons name is : ".concat(name));
    }
    return Person;
}());
var shiv = new Person(1, "Brad");
var shiv2 = new Person(2, "Jordan");
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.register = function () {
        return "Hi ".concat(this.name, ", You have registered sucessfully");
    };
    return Employee;
}());
var chirag = new Employee(18034, "chirag");
console.log(chirag.register());
// SubClass
var EmployeeDetails = /** @class */ (function (_super) {
    __extends(EmployeeDetails, _super);
    function EmployeeDetails(id, name, JobTitle) {
        var _this = _super.call(this, id, name) || this;
        _this.JobTitle = JobTitle;
        return _this;
    }
    return EmployeeDetails;
}(Employee));
var brad = new EmployeeDetails(3, "brad", "PHP Devloper");
console.log(brad);
console.log(brad.register());
// Generics
// We can pass the array as a input with the specific type to the function
function getArray(items) {
    return new Array().concat(items);
}
var numGetArray = getArray([1, 2, 3, 4, 5]);
var strGetArray = getArray(["a", "b", "c", "d", "e"]);
numGetArray.push(2);
strGetArray.push("2");
console.log(numGetArray);
console.log(strGetArray);


//Named Function

// parameterized and non returning function
function functionprogram(name:string,rollnumber:number,marks)
{
    //block of code
    console.log("function with parameterized and return value")
    console.log("Name is", name)
    console.log("Rollnumber is", rollnumber)
    console.log("Marks:", marks)
}

functionprogram("Maya",123,70);

//parameterized and return function
function sum(a,b)
{
    return a+b
}
let total = sum(10,20)
console.log(total)

//Non parameterized function

function greet()
{
    console.log("non parameterized function")
}
greet();

//Non parameterized function and return function

function greeting()
{
    return "non parameterized function and return function"
}
let value = greeting();
console.log(value)

//Anonnymous function -- Function expression Name on function is not declared

let expressfun = function()
{
    console.log("Anonymous function call back function")
}
expressfun();

//Arrow function => (this is also part of anonymous function) short hand form

let arrowfun = (name:String, marks:number) =>{
    console.log(name)
     console.log(marks)
} 
arrowfun("Maya", 100)

//Method Overloading is a process where you can declare the same method name with different parameter

// optional (?) and default 

//Assignment 

let fun = (name : String, age?:number) =>
{
    if(age == undefined)
    {
        console.log("name is",name)
    }
    else{
       console.log("name is", name, "Age is", age)
    }
}
fun("Ria")
fun("Ria", 5)


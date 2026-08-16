/*

Array is a collection of data which can have different datatype
Array is ordered collection. we can access value from the array position
Index start with array 0

*/

let arrayele = [10,true,"John",30,null,23.45] // Literal way
console.log(arrayele)
console.log(arrayele[4])

/* Array Declartaion

1. Using array Literal -- []
2. Using Array Constructor -- New Array()
let elearr = new Array(Value1, value 2)
*/

let elearr = new Array(10, 30,40,null) // Array Constructor
console.log(elearr)
console.log("Length of array ",elearr.length)

//iterate element of array
for(let i =0;i<elearr.length;i++) 
//i = 0 (it start from 0 element)
//i<elearr.length index start from 0 length count from 1 so we have to give i<arr.length else i<arr.length-1
// i++

{

    console.log(elearr[i])
}

// For of loop
console.log("********* For of loop *************")
let arr = [10,8,9,"Python",null,true]
console.log("length of array",arr.length)

for(let ele of arr) 
// instead of for loop we can use for of loop to print all element line by line
// if we use for of loop no use of initization, condition and increment
{
    console.log(ele)
}

//Total number of array using length (length is not method it is property)

console.log("******* Method of Array***********")

/*
1. push() -- add at the end of an array
2. Pop() -- delete last element from an array
3. unshift() -- Add element in the array at first
4. shift() -- delete first element from an array
*/

let element = [10,5,20,"JS"]
console.log(element)
element.push(10,"TS") // add element at the end of an array
console.log(element)
console.log("Element got removed",element.pop()) // delete last element from an array
console.log(element)
element.unshift(90,9) // Add element in the array at first
console.log(element)
element.shift() // delete first element from an array
console.log(element)

/* Splice (Add or remove the element at specified position)
splice(startdex, delete count, ele1,ele2, ele3)
startindex -- the position where we want to add or remove the element
delete count - The number of element to be deleted
ele1, ele2.... - (option) The element to add at start index
*/
console.log("****************************")
let arrsplice = [10,20,"pink","Java",50]
arrsplice.splice(3,0,100,200) // 0 then it will not delete any element only add 100, 200 in third position
arrsplice.splice(1,1,90,9)
console.log(arrsplice)

// Slice is Return portion of element from start index to end index. element in an array -1 if not found 

let arrslice = [10,2,5,7,8,0,20]
console.log(arrslice.slice(2,5))


//index of -- Return the index of first occurance of an element. element -1 if not found

let arrind = [10,20,30,40,10,2,10]
console.log(arrind.indexOf(10))

let index = arrind.indexOf(10)

// while(index != -1)
// {
//     console.log(index)
//     index = arrind.indexOf(10, +1)
//     break
// }

//lastindex


//includes -- check element is include in the array. returns true if it is present else false

console.log(arrind.includes(10))
console.log(arrind.includes(100))

//join(sepeartor)

let num = [20,4,26]
console.log(num.join("-"))

//toString -- convert it to string

console.log(num.toString())

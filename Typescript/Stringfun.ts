let char = 'c'

console.log("*********************")

let stringvar = "This is a string line"
console.log(stringvar)
// length return number of string length is not function (stringName.length)
console.log(stringvar.length)

//CharAt(index) return the chararcter available at that specified index

console.log(stringvar.charAt(7)) // it consider space value as well

//concat(string)

console.log(char.concat(" stringvar")) //if we want space between two string variable then " "

//includes

console.log(stringvar.includes("s"))

//indexOf

//lastindexof

//slice(startindex, endindex) -- retuen th portion of string

console.log(stringvar.slice());
console.log(stringvar.slice(5));
console.log(stringvar.slice(5,12));
console.log(stringvar.slice(12,5)); // return empty line

//Substring(startindex, endindex) -- Return the portion of string

console.log(stringvar.substring(1));
//console.log(stringvar.substring());
console.log(stringvar.substring(5));
console.log(stringvar.substring(5,12));
console.log(stringvar.substring(12,5)); // it reverse from 12 to 5 that is difference

//Start With -- it check whether character start with specified string and return boolean value

console.log(stringvar.startsWith("T"))
console.log(stringvar.startsWith("This"))
console.log(stringvar.startsWith("t"))

//endwith - it check whether character end with specified string and return boolean value
console.log(stringvar.endsWith("e"))
console.log(stringvar.endsWith("E")) // false as it is in uppercase

//uppercase -- It converts string to uppercase
// string is mutuable it cannot change it will return new string but does not change this original string

console.log("Upper Case String ",stringvar.toUpperCase())
console.log("Original string ",stringvar)
console.log("Lower Case Letter ",stringvar.toLowerCase())

//trim -- to remove trailing and leading white space

let str2 = " this is a string "
console.log(str2.trim())
console.log(str2.trimEnd())

//split -- split string into array of substring

let email = "shettyankita@gmail.com"
let domain = email.split("@")
console.log(domain[0])
let domname = domain[0].split("y")
console.log(domname[1])
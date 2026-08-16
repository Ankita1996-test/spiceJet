let a = 10
a= 20;

console.log(a);


var b;

b = 100;
b= 1000;

console.log(b)

let n = 'Ankita';
n = 'a';
n = 's'
//n = 100;     //it is string variable so we can't declare string value these can handle in JS but not in TS
console.log(n)

let l = 200

{
    let l = 2000;
    console.log(l) // inside local scope so it will print 2000
}
console.log(l) // it will print 200 global scope variable

// const browser = 'Safari'

// if(browser == 'Chrome')
// {
//   console.log("Launch chrome browser")  
// }
// else if(browser == 'firefox')
// {
//   console.log("Launch Firefox browser")  
// }
// else if(browser == 'IE')
// {
//   console.log("Launch IE browser")  
// }
// else 
// {
//   console.log("Invalid Browser")  
// }

let browserName = "Chrome"

switch(browserName)
{
    case "Chrome":
        console.log("Launch Chrome Browser - Switch");
        break

    case "Firefox":
        console.log("Launch Firefox Browser - Switch");
        break
    
    case "Safari":
        console.log("Launch Safari Browser - Switch");
       break
    
    default:
        console.log("Invalid Browser");

}


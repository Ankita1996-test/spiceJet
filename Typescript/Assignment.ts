let grade = 60

if(grade >= 90)
{
    console.log("Student has Scored A grade")
}
else if(grade >= 80 && grade < 90)
{
    console.log("Student has Scored B grade")
}
else if(grade >= 70 && grade < 80)
{
    console.log("Student has Scored C grade")
}
else if(grade >= 50 && grade < 70)
{
    console.log("Student has Scored D grade")
}
else{
    console.log("Student is fail")
}

for(let i = 1; i<=5; i++) // i = 1, 2, 3 i<=5 now increment to 2, 3
{
    console.log(i) // print 1, 2, 3
    if(i==3) // i = 1 , 2, 3 break so now till 3 it will display
    {
        break;
    }
    
}

// for(let j = 10; j>0; j--)
// {
//     console.log(j)
// }
console.log("******************* While Loop**************")
let m=5
while(m>0)
{
    m--
    console.log(m)

}


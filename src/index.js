// write your code here

const age = 14;

// if (age >= 18) {
//     console.log("Am an Adult");
// } else if (age <= 13 && age > 0) {
//     console.log("Am a coming");
// } else {
//     console.log("baby")
// }

//tenary operator 
// let result = age == 17 ?"Adult" : "Minor"
// console.log(result)

//switch statement
switch(age){
    case 14:
        console.log("Am 14")
        break
    case 13:
        console.log("Am 13")
    
    default:
        console.log("i am young")
    
}


// deliverable 1
const greeting = "welcome home"

//deliverable 2
let num1 = 7
let num2 = 4

//deliverable 3

let sum = num1 + num2

//deliverable 4 
let sumString = `${num1} + ${num2} = ${sum}`
console.log(sumString)


//deliverable 5

if(num1 === 7 || num1 === 49){
    console.log("That's a lucky number!")
}else{
    console.log("That's not a lucky number.")
}
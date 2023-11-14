// write your code here

// Lecture notes
console.log(4 === 4)
console.log(4 !== 4)
console.log(4 == '4')
console.log(4 != '4')

const number = 'hello'

// if / else if / else statements
// if(number === 77){
//     console.log("Good morning!")
// }
// else if(number === 'hello'){
//     console.log("Greetings! Have a good day!")
// }
// else{
//     console.log("Good night.")
// }

// Ternary operator
// const result = number === 77 ? "Good morning!" : "Good night."

// Switch statement
switch(number){
    case 77:
        console.log("Good morning!")
        break
    case "hello":
        console.log("Greetings! Have a good day!")
        break
    case "pizza":
        console.log("Pizza is yummy!")
        break
    default:
        console.log("Good night.")
}

// NOT logical operator
console.log(!true)
console.log(!false)

// AND logical operator
let word1 = "hello"
let word2 = "bye"
console.log(word1 === "hello" && word2 === "world")

// OR logical operator
console.log(word1 === "hello" || word2 === "world")

// Deliverable 1
const greeting = "Welcome to Flatburger!"

// Deliverable 2
let num1 = 10
let num2 = 20

// Deliverable 3
let sum = num1 + num2

// Deliverable 4
let sumString = `${num1} + ${num2} = ${sum}`

// Deliverable 5
if (num1 === 7 || num1 === 49){
    console.log("That's a lucky number!");
}
else { 
    console.log("That's not a lucky number")
}
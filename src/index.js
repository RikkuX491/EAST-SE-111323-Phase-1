// write your code here

// Lecture notes

// Bake a cake instructions
// console.log('Gather ingredients')
// console.log('Mix ingredients')
// console.log('Bake the banana cake!')

// Bake another cake
// console.log('Gather ingredients')
// console.log('Mix ingredients')
// console.log('Bake the strawberry cake!')

function bakeACake(fruit = "lemon"){
    console.log('Gather ingredients')
    console.log('Mix ingredients')
    console.log(`Bake the ${fruit} cake!`)

    return "The cake has been baked!"
}

// let pizza = 'pepperoni'
// pizza = 'buffalo chicken'
let fruitName = 'apple'

// bakeACake(fruitName)
// bakeACake('banana')
// bakeACake('strawberry')
// bakeACake('mango')
// bakeACake('kiwi')
// bakeACake('dragonfruit')
// bakeACake('melon')
// bakeACake('cherry')
// console.log(bakeACake())

// Arrow function that omits parenthesis around parameter (only works for the case where there is only 1 parameter in the arrow function)
// This arrow function has an implicit return
const doHomework = time => `I have ${time} to complete my homework!`

// Arrow function with parenthesis around parameter, and function body with {} and return statement
const doHomeworkAgain = (time) => {
    return `I have ${time} to complete my homework! So much homework!`
}

// console.log(doHomework("30 minutes"))
// console.log(doHomeworkAgain("60 minutes"))

// Global Scope
let didHomework = true

let day = "Tuesday"

if(didHomework){
    day = "Wednesday"
    // console.log(day)

    // Block scope
    let timeToGoShopping = true
}

// console.log(timeToGoShopping)

const pizzaFunction = function(ingredient) {
    // Function scope
    let pizzaText = "I love pizza!"
}

pizzaFunction("pepperoni")

// console.log(pizzaText)
// console.log(ingredient)

// Callback functions and Higher-Order functions
function makeBurger(cookBurger, minutes){
    cookBurger()

    return () => {
        console.log(`It took ${minutes} minutes to make the burger!`)
    }
}

function cookFood(){
    console.log("Cooking!")
    console.log("All done cooking!")
}

// const anotherFunction = makeBurger(cookFood, 35)
// anotherFunction()

// Arrays
const burgers = ['Flatburger', 'Pizza Burger', 'Cheeseburger']
// console.log(burgers[0])
// console.log(burgers[1])
// console.log(burgers[2])
// burgers.push('Ramen burger')
// console.log(burgers.length)

// For loops (using a for loop to iterate through an array)
// for(let index = 0; index < burgers.length; index++){
//     console.log(burgers[index])
// }

// Deliverable 1
function welcomeToFlatburger(){
    console.log("Welcome to Flatburger!")
}

welcomeToFlatburger()

// Deliverable 2
function printGreeting(greeting) {
    console.log(greeting)
}

printGreeting("Hello Flatiron!")

// Deliverable 3
const getSum = (num1, num2) => num1 + num2

// const num1 = 45
// const num2 = 67

console.log(getSum(45, 67))

// Deliverable 4
function getSumString(sum, num1, num2) {
  return `${num1} + ${num2} = ${sum(num1, num2)}`
}

console.log(getSumString(getSum, 49, 34))

// Deliverable 5
const burgerNames = ["Flatburger", "Maple Bacon Burger", "Mushroom Burger", "Avocado Bun Burger", "Ramen Burger"]

for(let index = 0; index < burgerNames.length; index++){
    console.log(burgerNames[index])
}

// console.log(burgerNames[burgerNames.length - 1])
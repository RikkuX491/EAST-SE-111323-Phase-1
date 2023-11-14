# JavaScript Fundamentals
## SWBAT
- [ ] Describe what functions are and their central importance in JS
- [ ] Understand how to declare and call functions
- [ ] Review syntax differences between regular functions and arrow functions
- [ ] Explain the difference between:
    - Block scope
    - Function scope
    - Global scope
- [ ] Understand what it means that functions are first-class objects
- [ ] Explain what a higher-order function is
- [ ] Describe what arrays are and their central importance in JS
- [ ] Understand how to iterate through an array using a `for` loop


## Deliverables

We've been asked to build a website for a new restaurant, Flatburger, that displays a menu of food served at the restaurant.

Today we will learn about Functions and Scope to accomplish some tasks related to displaying data on the website.

1. Create a function named `welcomeToFlatburger()` that prints the `string` "Welcome to Flatburger!" to the console using `console.log()`
2. Create a function named `printGreeting()` has one parameter named `greeting`. The function should print the value of the parameter `greeting` to the console using `console.log()`.
3. Create an arrow function named `getSum()` that has two parameters `num1` and `num2`. The `return` value of this function should be the value resulting from the sum of values of the parameters `num1` and `num2`.
4. Create a function named `getSumString()` that has three parameters: A parameter named `sum` whose value should be a function, and two parameters `num1` and `num2` whose values should be `number`s. The `return` value of this function should incorporate the values of `num1`, `num2`, and the `return` value of `sum()` into the string using string concatenation or string interpolation. For example, if `num1` has the value of 7, `num2` has the value 14, and the `return` value of `sum()` has the value of 21, the `return` value of `getSumString()` should be `7 + 14 = 21`.
5. Write a `for` loop that will iterate through an array that contains the following `string`s: "Flatburger", "Maple Bacon Burger", "Mushroom Burger", "Avocado Bun Burger", "Ramen Burger". The `for` loop should print each of the `string`s from the array using `console.log()`.


## Functions
Functions are like a little program. They consist of a set of statements/tasks and return a value or undefined. 

```
// This is an example of a function declaration.
// This function is returning the string of 'Good morning!'

function sayGoodMorning() {
    return 'Good morning!'
}

// This is a function reference but it doesn't actually run the function. 

sayGoodMorning

// To run or call or invoke the function (all the same thing) - write the function's name and add a pair of ()

sayGoodMorning()

// This function prints the string of 'hello' to the console using console.log() but returns undefined because it does not have the return keyword.

function sayGoodNight(){
    console.log('Good Night!')
}

sayGoodNight()

// console logging and returning are not the same thing. A return value becomes the value of an invoked function, while console.log() only logs something to the console.

```

Functions can take unique localized variables called parameters. When the function is invoked, it's passed an argument that becomes the parameter's value.

```

function squareNumber(num){
    
    // num is the parameter, it is scoped to the inside of the function

    return num * num
}

// 7 is the argument here. The value of num in the above function becomes 7.

squareNumber(7)

// functions can take multiple parameters.

function subtract(num1, num2){
    return num1 - num2
}

subtract(12, 4)

```

Arrow functions are another way to declare functions with some added benefits.

```
// An arrow function can avoid {} if its return is done on a single line or with ()
// An arrow function with a single parameter doesn't need the () around the parameter.

const welcomeMessage = name => `Welcome to Flatiron School, ${name}! Have a great day!`

const favoriteSeason = season => (
     `My favorite season is ${season}`
)

favoriteSeason('summer')

```


## Callbacks and HigherOrder Functions 

Functions in JavaScript are treated like any other variable. When functions are treated like this, we refer to them as First class. One of the most significant benefits of this is that functions in JavaScript can be passed as arguments to other functions.

```
// A function that returns a function is called a Higher-Order Function.

const outsideFunction = () => {
    return () => {
        // inside function
    }
}

// A function that is taken as an argument is a callback 

const fullMessage = (greeting, name) => {
    return `${greeting(name)} I love JavaScript!`
}

const welcomeMessage = name => `Welcome to Flatiron School, ${name}! Have a great day!`

fullMessage(welcomeMessage, 'Bruce Wayne')

```
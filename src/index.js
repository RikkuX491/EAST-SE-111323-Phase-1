const burgers = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    }
]

const otherFoods = [
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

// write your code here

// Lecture code

// .getElementById() - finds 1 element by its id
// const restaurantMenu = document.getElementById('restaurant-menu')
// console.log(restaurantMenu)

// .querySelector() - finds 1 element
const detailImage = document.querySelector('.detail-image')
// console.log(detailImage)

// .querySelectorAll()
const divElements = document.querySelectorAll('div')
// console.log(divElements)

for(let index = 0; index < divElements.length; index++){
    // console.log(divElements[index])
}

divElements.forEach((div) => {
    // console.log(div)
})

// .getElementsByClassName()
const nameElements = document.getElementsByClassName('name')
// console.log(nameElements)

for(let index = 0; index < nameElements.length; index++){
    // console.log(nameElements[index])
}

// for loop vs .forEach()
for(let index = 0; index < burgers.length; index++){
    // console.log(burgers[index])
}

burgers.forEach((burger) => {
    // console.log(burger.description)
})

// Iterating through a string
const word = "Welcome"
for(let index = 0; index < word.length; index++){
    // console.log(word[index])
}

const pizza = {
    name: "Pepperoni",
    price_per_slice: 4.99,
    description: "A pizza with pepperoni on it"
}

const pizza2 = {
    name: "Buffalo Chicken",
    price_per_slice: 6.99,
    description: "Buffalo Chicken Pizza"
}

// console.log(pizza['name'])
// console.log(pizza2.name)

// Using .remove() to remove an element from the DOM
const headerElement = document.querySelector('header')
// headerElement.remove()

// Using document.createElement() to create a new element
const h1 = document.createElement('h1')

// Using .textContent to set the text content of an element
h1.textContent = "Hello! Welcome to Flatburger!"
// console.log(h1)

// Using .appendChild to append an element as a child of another element
// restaurantMenu.appendChild(h1)
// restaurantMenu.append("Greetings!", "Have a good day!")

// .textContent vs .innerText vs .innerHTML
const h2 = document.createElement('h2')
// h2.textContent = "<span>Hello\nWorld!</span>"
// h2.innerText = "<span>Hello\nWorld!</span>"
h2.innerHTML = "<span>Hello\nWorld!</span>"
// document.body.appendChild(h2)

// Deliverables - Solution code

// Deliverable 1
const restaurantMenu = document.getElementById('restaurant-menu')

for(let index = 0; index < burgers.length; index++){
    const imgElement = document.createElement('img')
    imgElement.className = 'burger'
    imgElement.src = burgers[index].image
    restaurantMenu.appendChild(imgElement)
}

// Deliverable 2
otherFoods.forEach((food) => {
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement)
})
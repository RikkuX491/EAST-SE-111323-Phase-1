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

// // write your code here

// // const newElement = document.createElement('h1')
// // newElement.textContent = "Hello!"
// // document.body.appendChild(newElement)
// // <h1>​Hello!​</h1>​


// // console.log(document.getElementById('restaurant-menu'))

// // // .getElementsById() - finds 1 element by its id
// // const restaurantMenu = document.getElementById('restaurant-menu')
// // const h1 = document.createElement('h1')

// // if (restaurantMenu) {
// //     console.log('restaurantMenu: exist')
// // } else {
// //     console.log('restaurantMenu: null')
// // }

// // h1.textContent = "Hello World!"
// // restaurantMenu.appendChild(h1)

// // .querySelector - find 1 element
// const detailImage = document.querySelector('.detail-image')
// console.log(detailImage)

// // .querySelectorAll()
// const divElements = document.querySelectorAll('div')
// console.log(divElements)
// console.log(divElements[0])

// for (let index = 0; index < divElements.length; index++) {
//     console.log(divElements[index]);
    
// }

// // .getElementsByClassName()
// // const nameElements = document.getElementsByClassName('name') //[0]
// // console.log(nameElements)


// // for (let index = 0; index < nameElements.length; index++) {
// //     console.log(nameElements[index]);
// // }


// // for loop vs .forEach()
// // for (let index = 0; index < burgers.length; index++) {
// //     console.log(burgers[index])
// // }

// burgers.forEach((burger) => {
//     console.log(burger)
// })

// burgers.forEach((burger, index) => {
//     console.log(index)
//     console.log(burger)
// })


// //Using .remove() to remove an element from the DOM
// const headerElement = document.querySelector('header')
// console.log(headerElement)
// headerElement.remove()

// document.body.appendChild(headerElement)

// // .textContent vs .innerText vs .innerHTML
// const h2 = document.createElement('h2')
// // h2.textContent = "<span>Hello\nWorld!</span>"
// // h2.innerText = "<span>Hello\nWorld!</span>"
// h2.innerHTML = "<span>Hello\nWorld!</span>"
// document.body.appendChild(h2)

// Delivereble 1

const restaurantMenu = document.getElementById('restaurant-menu')
console.log(restaurantMenu)

for (let index = 0; index < burgers.length; index++) {
    const imgElement = document.createElement('img')
    imgElement.className = 'burger'
    imgElement.src = burgers[index].image
    console.log(imgElement)
    restaurantMenu.appendChild(imgElement)
}

// Deliverable 2
otherFoods.forEach((food) => {
    console.log(food)
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement)
})

// Deliverable 3
// const detailImg = document.getElementsByClassName('detail-image')[0]
const detailImg = document.querySelector('.detail-image')
detailImg.src = burgers[0].image

// Deliverable 4
// const detailName = document.getElementsByClassName('name')[0]
const foodDetailName = document.querySelector('.name')
foodDetailName.textContent = burgers[0].name

// Deliverable 5
const foodDetailDescription = document.querySelector('#description-display')
foodDetailDescription.textContent = burgers[0].description

// Deliverable 6
const restaurantMenuImages = document.querySelectorAll('div#restaurant-menu img')
restaurantMenuImages.forEach(img => {
    img.style = "border-style: solid; border-color: red; border-width: 3px"
})

// Deliverable 7
const burgerImagesForEach = document.getElementsByClassName('burger')
Array.from(burgerImagesForEach).forEach( img => {
    img.style.borderColor = "blue"
})

// Or

const burgerImagesFor = document.getElementsByClassName('burger')
for (let index = 0; index < burgerImagesFor.length; index++) {
    burgerImagesFor[index].style.borderColor = "blue"
}

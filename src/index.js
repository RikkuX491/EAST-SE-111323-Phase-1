// write your code here

// console.log("BEFORE THE FETCH")
const restaurantMenu = document.getElementById('restaurant-menu')

// Deliverable 1
fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {

    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

// Deliverable 2 & 3
function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    restaurantMenu.appendChild(imgElement)

    // Deliverable 6
    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })
}

// Deliverable 4 & 5
function displayFoodDetails(food){
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}

// console.log("AFTER THE FETCH")
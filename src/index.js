const restaurantMenu = document.getElementById('restaurant-menu')

const likesSpanElement = document.getElementById('likes')

let displayedFoodID
let foodsArrayCopy

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {

    foodsArrayCopy = foods

    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('click', () => {
        displayFoodDetails(food)
    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "DELETE FOOD"
    deleteButton.addEventListener('click', () => {
        fetch(`http://localhost:3000/foods/${food.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                foodsArrayCopy = foodsArrayCopy.filter(f => {
                    return food.id !== f.id
                })
                updateRestaurantMenu()
            }
            else{
                alert("Error: Unable to delete food!")
            }
        })
    })

    const divElement = document.createElement('div')
    divElement.appendChild(imgElement)
    divElement.appendChild(deleteButton)

    restaurantMenu.appendChild(divElement)
}

function displayFoodDetails(food){

    displayedFoodID = food.id

    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description

    // const likesSpanElement = document.getElementById('likes')
    likesSpanElement.textContent = food.likes
}

const newFoodForm = document.getElementById('new-food')
newFoodForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const newNameInputElement = document.getElementById('new-name')
    const newImageInputElement = document.getElementById('new-image')
    const newDescriptionInputElement = document.getElementById('new-description')

    const newFood = {
        name: newNameInputElement.value,
        image: newImageInputElement.value,
        description: newDescriptionInputElement.value
    }

    fetch('http://localhost:3000/foods', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...newFood, likes: 0})
    })
    .then(response => {
        if(response.ok === true){
            response.json().then(newFoodData => {
                // addFoodImageToRestaurantMenu(newFoodData)
                foodsArrayCopy.push(newFoodData)
                updateRestaurantMenu()
            })
        }
        else{
            alert("Error: Unable to add new food!")
        }
    })

    newFoodForm.reset()
})

const likesButtonElement = document.getElementById('likes-button')
likesButtonElement.addEventListener('click', () => {

    // Optimistic Rendering
    // const likesSpanElement = document.getElementById('likes')
    // likesSpanElement.textContent = Number.parseInt(likesSpanElement.textContent) + 1

    fetch(`http://localhost:3000/foods/${displayedFoodID}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            likes: Number(likesSpanElement.textContent) + 1
        })
    })
    .then(response => response.json())
    .then(updatedFood => {

        // Pessimistic Rendering
        likesSpanElement.textContent = updatedFood.likes
        
        foodsArrayCopy = foodsArrayCopy.map(food => {
            if(food.id === updatedFood.id){
                return updatedFood
            }
            else{
                return food
            }
        })

        updateRestaurantMenu()
    })
})

function updateRestaurantMenu(){
    restaurantMenu.innerHTML = ""
    foodsArrayCopy.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
}
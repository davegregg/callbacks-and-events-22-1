let switchTheme = function () {
    document.body.classList.toggle("dark")
}

// setTimeout(switchTheme, 5000)
setInterval(switchTheme, 5000)

// Callback function: switchTheme
// Higher-order function: setInterval

let pets = [
    "Questionable Ethics",
    "Incorrect Use of Metaphor",
    "Fifty-Five",
    "Spot",
    "Bender",
    "Guess",
]

let logPet = (item, index) => console.log(index, item)
pets.forEach(logPet)

for (let index = 0; index < pets.length; index += 1) {
    let currentPet = pets[index]
    console.log(index, currentPet)
    //...
    //...
    //...
    //...
}

for (let currentPet of pets) {
    console.log(currentPet)
}


let pikachuElement = document.querySelector(".pikachu")
document.addEventListener("keydown", function (event) {
    console.log(event.key)
    
    let x = parseInt(getComputedStyle(pikachuElement).left)
    let y = parseInt(getComputedStyle(pikachuElement).top)

    let moveRight = () => pikachuElement.style.left = (x + 20) + "px"
    let moveLeft =  () => pikachuElement.style.left = (x - 20) + "px"
    let moveDown =  () => pikachuElement.style.top  = (y + 20) + "px"
    let moveUp =    () => pikachuElement.style.top  = (y - 20) + "px"

    switch (event.key) {
        case "ArrowRight":
            moveRight()
            break
        
        case "ArrowLeft":
            moveLeft()
            break
        
        case "ArrowDown":
            moveDown()
            break

        case "ArrowUp":
            moveUp()
            break
    }

})


let toggleThemeButton = document.querySelector("#toggle-theme")
let printRandomNumberButton = document.querySelector("#print-random-number")

let handleClick = function (event) {
    let clickedElement = event.target
    if (clickedElement === toggleThemeButton) {
        switchTheme()
    } else if (clickedElement === printRandomNumberButton) {
        document.body.prepend(String(Math.random()))
    }
}

document.body.addEventListener("click", handleClick)




"http://127.0.0.1:5500/?username=dnm&age=123"
"https://www.google.com/search?q=javascript"

let form = document.querySelector("form")
let usernameInput = form.querySelector("[name='username']")
let ageInput = form.querySelector("[name='age']")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let username = usernameInput.value
    let age = ageInput.valueAsNumber
    console.log(username)
    console.log(typeof age, age)
})

let registerForm = document.querySelector("#register")
registerForm.addEventListener("submit", (event) => {
    event.preventDefault()

    
})

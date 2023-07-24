
let randomCar= true
let allCarsButton = document.querySelector("#All_Cars")
// console.log(a)
let allCarsButtonEvent=allCarsButton.addEventListener("click",() => {
console.log("state of randomCar:",randomCar)
randomCar ? 
allCarsButton.innertext = "ON" : 
allCarsButton.innertext ="OFF"

// allCarsButton.innertext = !randomCar
})
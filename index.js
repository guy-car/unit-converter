/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const lengthConv = 3.28084
const volumeConv = 0.264172
const massConv = 2.20462

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const userInput = document.getElementById("user-input")
const convBtn = document.getElementById("conv-btn")

convBtn.addEventListener("click", function(){
    // User value
    let num = userInput.value
    // Length conversion
    let metersToFeet = num * lengthConv
    let feetToMeters = num / lengthConv
    lengthEl.innerHTML = `${num} meters = ${metersToFeet.toFixed(3)} feet | ${num} feet = ${feetToMeters.toFixed(3)} meters`
    // Volume conversion
    let litersToGallons = num * volumeConv
    let gallonstoLiters = num / volumeConv
    volumeEl.innerHTML = `${num} liters = ${litersToGallons.toFixed(3)} gallons | ${num} gallons = ${gallonstoLiters.toFixed(3)} liters`
    // Mass conversion
    let kiloToPounds = num * massConv
    let poundsToKilo = num / massConv
    massEl.innerHTML = `${num} kilos = ${kiloToPounds.toFixed(3)} pounds | ${num} pounds = ${poundsToKilo.toFixed(3)} kilos`

}

)


// function convert() {


// }
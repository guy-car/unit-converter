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

const gifEl = document.getElementById("gif-el")
// gifEl.innerHTML = `<img src="gifs/Blow Your Mind Wow GIF by Product Hunt.gif">`

const gifArr = ["gifs/Blow Your Mind Wow GIF by Product Hunt.gif",
    "gifs/Canadian Drake GIF by MOODMAN.gif",
    "gifs/Canadian Wow GIF by DJ Khaled.gif",
    "gifs/Cat Wow GIF.gif", 
    "gifs/Disbelief Reaction GIF.gif", 
    "gifs/Disbelief Reaction GIF.gif", 
    "gifs/Hotline Bling Pizza GIF.gif", 
    "gifs/Keanu Reeves Reaction GIF.gif",
    "gifs/Kentucky Derby Ok GIF.gif",
    "gifs/nice GIF.gif",
    "gifs/Oh My God Wow GIF by 9Now.gif",
    "gifs/Oh My God Wow GIF by MOODMAN.gif",
    "gifs/Oh My God Wow GIF by reactionseditor.gif",
    "gifs/Proud Of You Yes GIF.gif",
    "gifs/Reaction Yes GIF by Paper Triangles.gif",
    "gifs/Sacha Baron Cohen Thumbs Up GIF by Amazon Prime Video.gif",
    "gifs/Samantha Jones Wow GIF by Max.gif",
    "gifs/Video Games Yes GIF by Call of Duty.gif",
    "gifs/Well Done Reaction GIF.gif"
]

// function choseGif() {
//     let randomGif = Math.floor(Math.random() * 7 )
//     gifEl.innerHTML = `<img src="${gifArr[randomGif]}">`
//     }
//     choseGif()

let randomGif = Math.floor(Math.random() * 7 )
console.log(gifArr[randomGif])

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
    // Random gif
    let randomGif = Math.floor(Math.random() * gifArr.length )
    gifEl.innerHTML = `<img src="${gifArr[randomGif]}">`
})
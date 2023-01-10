/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// const meterToFeet = 3.281 
// const literToGallon = 0.264
// const kiloToPound = 2.204 

// const feetToMeter = 0.305
// const gallonToLiter = 3.785
// const poundToKilo = 0.454


let inputbox = document.getElementById("inputbox")
let convertBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener ("click", function () {
    const value = parseInt(inputbox.value)
    
    if (value) {
        const meterToFeet = (value * 3.281).toFixed(3)
        const feetToMeter = (value * 0.305).toFixed(3)
        
        const literToGallon = (value * 0.264).toFixed(3)
        const gallonToLitter = (value * 3.785).toFixed(3)
        
        const kiloToPound = (value * 2.204).toFixed(3)
        const poundToKilo = (value * 0.454).toFixed(3)    
    
        lengthEl.textContent = `${value} meters = ${meterToFeet} feets | ${value} feets = ${feetToMeter} meter`
        
        volumeEl.textContent = `${value} liters = ${literToGallon} gallons | ${value} gallons = ${gallonToLitter} liters`
        
        massEl.textContent = `${value} kilos = ${kiloToPound} pounds | ${value} pounds = ${poundToKilo} kilos` 
    }
    
})

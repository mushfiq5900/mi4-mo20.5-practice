//****** Cel To Fer **********/

function celToFer(inputValue) {
    let valueInFarenheit = (inputValue * 1.8) + 32;
    return valueInFarenheit;
}

let finalRes = celToFer(10);
console.log("Result In Fahrenheit:", finalRes);


//****** Fer to Cell **********/


// function ferToCel(inputValue){
//     let valueInCelsius = (inputValue-32)*.555;
//     return valueInCelsius;
// }

// let finalRes = ferToCel(10);
// console.log("Result In Celcious:",finalRes);
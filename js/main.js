//Write your pseduo code first! 
// Making a calculator to show conversion of farenheit to celsius

let number1 = document.querySelector("#number1") 
let number2 = document.querySelector("#number2")

function convertFahrenheit(){
  number1.value 
  console.log(number1.value)
  result = (number1.value - 32)* (5/9)
  number2.value = result
}

function convertCelsius(){
  number2.value 
  console.log(number2.value)
  result = (number1.value *(9/5)) + 32
  number1.value = result
}

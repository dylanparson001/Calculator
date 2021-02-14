/* Author: Dylan Parson
   Purpose: Calculator web app */

//functions
const numberButtons = document.querySelectorAll(".number"); //nodelist of number buttons
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equals = document.querySelector("#equal");
const clear = document.querySelector("#clear");

let result = 0;
let firstNum = [];
let secondNum = [];
let displayValue;
let chosenOperation = false;
let operator;

//event listeners for number buttons
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (chosenOperation == false) {
      firstNum.push(item.value); //adds most recent button push to end of array
      display.textContent = firstNum.join(""); // assigns final number to the display value
    } else {
      secondNum.push(item.value);
      display.textContent = secondNum.join("");
    }
  });
});

// event listeners for operation buttons
operatorButtons.forEach((item) => {
  item.addEventListener("click", () => {
    chosenOperation = true;
    operator = item.value;
    display.textContent = operator;
  });
});

//event listener for equals buttons
equals.addEventListener("click", () => {
  result = operate(firstNum, secondNum, operator);
  display.textContent = result;
});

clear.addEventListener("click", () =>{

})

//operations 
function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);

    case "-":
      return subtract(firstNum, secondNum);

    case "x":
      return multiply(firstNum, secondNum);

    case "÷":
      return divide(firstNum, secondNum);
  }
}

function add(firstNum, secondNum) {
  let fNum = firstNum.reduce((accumulator, value) => accumulator + value); // reduce returns values as a string
  let sNum = secondNum.reduce((accumulator, value) => accumulator + value);
  console.log(firstNum);
  console.log(secondNum);
  fNum = parseInt(fNum); // need to convert to number to add properly
  sNum = parseInt(sNum);
  return fNum + sNum;
}

function subtract(firstNum, secondNum) {}

function multiply(firstNum, secondNum) {}

function divide(firstNum, secondNum) {}

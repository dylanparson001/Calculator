/* Author: Dylan Parson
   Purpose: Calculator web app */

const numberButtons = document.querySelectorAll(".number"); //nodelist of number buttons
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equals = document.querySelector("#equal");
const clear = document.querySelector("#clear");

let firstNum = "";
let secondNum = "";
let result = "";
let chosenOperation = false;
let previousKey = "";
let displayValue = "0";

//NUMBER buttons
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (displayValue === "0" || result === "0") {// first time button is pressed
      displayValue = item.value;
      display.textContent = displayValue;
      firstNum = displayValue;
      previousKey = item.getAttribute("class"); // need to see what type of button pressed
    } else if (chosenOperation === false) { // after first button press, before operator button is pressed
      displayValue += item.value; // adds onto existing value
      display.textContent = displayValue;
      firstNum = displayValue;
      previousKey = item.getAttribute("class");
    } else if (previousKey === "operator") { // first button after operator
      if (result != "") {
        firstNum = result;
      }
      displayValue = item.value;
      secondNum = displayValue;
      display.textContent = displayValue;
      previousKey = item.getAttribute("class");
    } else { // every button after operator until equals button
      displayValue += item.value;
      secondNum = displayValue;
      display.textContent = displayValue;
      previousKey = item.getAttribute("class");
    }
  });
});
// OPERATION buttons
operatorButtons.forEach((item) => {
  item.addEventListener("click", () => {
    chosenOperation = true;
    operator = item.value;
    previousKey = item.getAttribute("class");
    display.textContent = operator;
  });
});

//EQUALS button
equals.addEventListener("click", () => {
  chosenOperation = false;
  switch (operator) {
    case "+":
      result = add(firstNum, secondNum);
      display.textContent = result;
      
      break;
    case "-":
      result = subtract(firstNum, secondNum);
      display.textContent = result;
      break;
    case "x":
      result = multiply(firstNum, secondNum);
      display.textContent = result;
      break;
    case "÷":
      result = divide(firstNum, secondNum);
      display.textContent = result;
      break;
  }
});

// CLEAR button
clear.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  result = "";
  chosenOperation = false;
  displayValue = "0";
  display.textContent = displayValue;
});

//OPERATION functions
function add(firstNum, secondNum) {
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  let result = fNum + sNum;
  toString(result);
  return result;
}

function subtract(firstNum, secondNum){
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  return fNum - sNum;
}
function multiply(firstNum, secondNum){
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  return fNum * sNum;
}
function divide(firstNum, secondNum){
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  
  return fNum / sNum;
}
// check if result === 0
// take input from "number" buttons
// store input in array, when operator button is clicked, join the array into one number
// example: user enters 1234, store in array as result [1, 2, 3, 4] then bring together as 1234 when operator is clicked

const numberButtons = document.querySelectorAll(".number"); //nodelist of number buttons
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equals = document.querySelector("#equal");

let result = 0;
let firstNum = [];
let secondNum = [];
let displayValue;
let chosenOperation = false;
let operator;

//iterates through nodelist and adds event listener for each button
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (chosenOperation === false) {
      firstNum.push(item.value); //adds most recent button push to end of array
      display.textContent = firstNum.join(""); // assigns final number to the display value
    } else {
      secondNum.push(item.value);
      display.textContent = secondNum.join("");
    }
  });
});

operatorButtons.forEach((item) => {
  item.addEventListener("click", () => {
    chosenOperation = true;
    operator = item.value;
    display.textContent = operator;
  });
});

equals.addEventListener("click", ()=>{
  display.textContent = operate(firstNum, secondNum, operator); 
});

//functions
function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  //cannot divide by zero
  if (firstNum === 0) {
    console.log("nah");
    return null;
  }
  return firstNum / secondNum;
}
//need to reconfigure with arrays
function operate(firstNum, secondNum, operator) { 
  //takes two numbers and an operator, then performs function associated with operator
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

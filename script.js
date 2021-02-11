// check if result === 0
// take input from "number" buttons
// store input in array, when operator button is clicked, join the array into one number
// example: user enters 1234, store in array as result [1, 2, 3, 4] then bring together as 1234 when operator is clicked

const numberButtons = document.querySelectorAll(".number"); //nodelist of number buttons
const operatorButtons = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
let result = 0;
let firstNum = [];
let displayValue;
let operator;

//iterates through nodelist and adds event listener for each button
numberButtons.forEach((item) => {
  item.addEventListener("click", () => {
    firstNum.push(item.value);
    displayValue = firstNum.join("");
    display.textContent = displayValue;
  });
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

function operate(firstNum, secondNum, operator) {
  //takes two numbers and an operator, then performs function associated with operator
  switch (operator) {
    case "add":
      return add(firstNum, secondNum);

    case "subtract":
      return subtract(firstNum, secondNum);

    case "multiply":
      return multiply(firstNum, secondNum);

    case "divide":
      return divide(firstNum, secondNum);
  }
}

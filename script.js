/* Author: Dylan Parson
   Purpose: Calculator web app */
   
calculator();

function calculator() {
  const numberButtons = document.querySelectorAll(".number"); //nodelist of number buttons
  const operatorButtons = document.querySelectorAll(".operator");
  const display = document.querySelector(".display");
  const equals = document.querySelector("#equal");
  const clear = document.querySelector("#clear");
  const decimal = document.querySelector("#decimal");
  const backspace = document.querySelector("#backspace");

  let firstNum = "";
  let secondNum = "";
  let result = "";
  let chosenOperation = false;
  let previousKey = "";
  let displayValue = "0";

  //NUMBER buttons
  numberButtons.forEach((item) => {
    item.addEventListener("click", () => {
      if (displayValue === "0") {
        // first time button is pressed
        displayValue = item.value;
        display.textContent = displayValue;
        firstNum = displayValue;
        previousKey = item.getAttribute("class");
      } else if (chosenOperation === false) {
        // user has not entered an operator yet
        displayValue += item.value; // adds onto existing value
        display.textContent = displayValue;
        firstNum = displayValue;
        previousKey = item.getAttribute("class");
      } else if (previousKey === "operator") {
        // user has pressed operator key, putting value in secondNum, replaces display
        if (result != "") {
          // if there has been an operation, use previous result as the firstNum
          firstNum = result;
        }
        displayValue = item.value;
        secondNum = displayValue;
        display.textContent = displayValue;
        previousKey = item.getAttribute("class");
      } else {
        // every button after operator until equals button, adds onto display
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
    if (previousKey === "equal") {
      // if user clicks equals multiple times, it will perform same operation to previous result
      firstNum = result;
    }
    switch (operator) {
      case "+":
        result = add(firstNum, secondNum);
        result = result.toString(); // change values2 to string to keep up with logic for the number buttons
        display.textContent = result;
        break;
      case "-":
        result = subtract(firstNum, secondNum);
        result = result.toString();
        display.textContent = result;
        break;
      case "x":
        result = multiply(firstNum, secondNum);
        result = result.toString();
        display.textContent = result;
        break;
      case "÷":
        result = divide(firstNum, secondNum);
        result = result.toString();
        display.textContent = result;
        break;
    }
    previousKey = equals.getAttribute("class");
    chosenOperation = false;
  });

  //BACKSPACE button
  backspace.addEventListener("click", () => {
    backspaceFunction();
  });

  function backspaceFunction() {
    if (displayValue === "0") {
      //do nothing
    }
    if (displayValue.length === 1) {
      displayValue = "0";
      display.textContent = displayValue;
    } else if (chosenOperation === true) {
      displayValue = displayValue.slice(0, -1);
      secondNum = displayValue;
      display.textContent = displayValue;
    } else {
      displayValue = displayValue.slice(0, -1);
      display.textContent = displayValue;
    }
  }
  //DECIMAL button
  decimal.addEventListener("click", () => {
    if (displayValue.includes(".") === true) {
      displayValue = displayValue;
    } else {
      displayValue += ".";
      display.textContent = displayValue;
    }
  });

  // CLEAR button
  clear.addEventListener("click", () => {
    clears();
  });

  function clears() {
    firstNum = "";
    secondNum = "";
    result = "";
    chosenOperation = false;
    displayValue = "0";
    display.textContent = displayValue;
  }
}
//OPERATION functions
function add(firstNum, secondNum) {
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  let result = fNum + sNum;
  toString(result);
  return result;
}

function subtract(firstNum, secondNum) {
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  return fNum - sNum;
}
function multiply(firstNum, secondNum) {
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  return fNum * sNum;
}
function divide(firstNum, secondNum) {
  let snarkyMessage = "you stinker";
  let fNum = parseFloat(firstNum);
  let sNum = parseFloat(secondNum);
  if (sNum === 0) {
    return snarkyMessage;
  }

  return fNum / sNum;
}

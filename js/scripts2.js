//Business Logic

const add = function(num1, num2) {
  return num1 + num2;
}

const subtract = function(num1, num2) {
  return num1 - num2;
}
const multiply = function(num1, num2) {
  return num1 * num2;
}
const divide = function(num1, num2) {
  return num1 / num2;
}

const remainder = function(num1, num2) {
  return num1 % num2;
}


//THIS WORKS!!!!!!!
const calculate = function(numStr1, numStr2, operand) {
  if (operand === "add") {
    return parseInt(numStr1) + parseInt(numStr2);
  } else if (operand === "divide") {
    return parseInt(numStr1) / parseInt(numStr2);
  } else if (operand === "multiply") {
    return parseInt(numStr1) * parseInt(numStr2);
  } else if (operand === "subtract") {
    return parseInt(numStr1) - parseInt(numStr2);
  } else if (operand === "modulo") {
    return parseInt(numStr1) % parseInt(numStr2);
  }
}


//Initialize an empty array and an empty string to push the values into
let returnArray = [];
let returnString = "";

let num1 = "";
let num2 = "";

let numRegex = /\d|./;

$(document).ready(function() {
  let counter = 0;

  $("#calc-grid").on("click", "button", function() {
    event.preventDefault();
    let buttonValue = $(this).val();

    //if buttonValue if a number && counter === 0 : += to num1 string
    // 

    //console.log(buttonValue);
    returnArray.push(buttonValue);
    console.log(returnArray);
    returnString += buttonValue;
    console.log(returnString);
  });

});
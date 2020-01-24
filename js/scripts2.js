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

//first click


//Initialize an empty array and an empty string to push the values into
let returnArray = [];
let returnString = "";

let num1 = "";
let num2 = "";
let operand = "";

let numRegex = /\d|./;

$(document).ready(function() {
  let counter = 0;

  $("#calc-grid").on("click", "button", function() {

    //USE JQUERY METHOD hasClass() TO SEE IF IT'S A NUMBER OR NOT!!!!!!!

    event.preventDefault();
    let buttonValue = $(this).val();

    

    //If buttonValue != [0-9] {
      //Say to the user: "Please enter a number to begin your calculations:"
      //Or: do nothing
    //} else if {
    //If (buttonValue is a number or decimal && counter === 0) {
      // num1 += buttonValue;
    //Display Parseint(num1) in input;
  //} else if (counter > 0) {
      //if it's a number, concatinate it to first number string

      //If it's an operand, value = operand;
  }

  //if (buttonValue )
    

    //console.log(buttonValue);
    returnArray.push(buttonValue);
    console.log(returnArray);
    returnString += buttonValue;
    console.log(returnString);
  });

});
//Business logic

let arrayToCalculate = [];

  //NTS for evaluate(): first check that there are at least 2 numbers w/an operator between them arrayToCalculate, or the evaluate function WON'T work -
  //OR validate that data as it's pressed, and display an error message if user is pressing things out of order
const evaluate = function(arr) {
  let stringToEvaluate = arr.join("");
  console.log(stringToEvaluate);
  return eval(stringToEvaluate);
}

//UI logic (jQuery)
$(document).ready(function() {

  //Evaluates the result string when the equals sign is pressed
  $("#calculate").on("click", function() {
    event.preventDefault();
    alert(evaluate(arrayToCalculate));
    arrayToCalculate = [];
  });

  //Push value of each button up to arrayToCalculate as they are pressed
  //NTS: Go back and make separate (jQuery?) functions for 'clear' and 'backspace.'
  $(".numbers-and-operators").on("click", function() {
    event.preventDefault();
    let buttonVal = $(this).val();
    console.log(buttonVal);

    if (buttonVal === "clear") {
      location.reload();
    } else if (buttonVal === "backspace") {
      arrayToCalculate.pop();
      //also take one off the display - figure that out later
    } else {
      arrayToCalculate.push(buttonVal);
      console.log(arrayToCalculate);
    }

    // $("#submit").on("click", function() {
    //   event.preventDefault();

    //   let stringToCalculate = arrayToCalculate.join(""); 
    //   let result = eval(stringToCalculate);
    //   console.log(result);
    //   return result;
    // });

      // $("#calculate").on("click", function evaluate() {
      //   event.preventDefault();
      //   let stringToEvaluate = arrayToCalculate.join("");
      //   let result = eval(stringToEvaluate);
      //   console.log(result);
      //   $("#input").append(result);
      //   return result;
      // });
      

  });

});
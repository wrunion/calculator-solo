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

//Retrieve value of button when pressed
  // $("button").on(click(function(){
  //   let buttonValue = ($(this)).val();
  //   console.log(buttonValue;)
  // });


//Push that value into an array



// UI Logic 
$(document).ready(function() {

  $("#clear").click(function() {
    //alert("you have clicked clear");
    location.reload(true);
    //alert("the page has reloaded");
  });


});
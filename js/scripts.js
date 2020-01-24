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

//Push that value into an array
let arrToCalculate = [];
let stringToCalculate = 0;


// UI Logic 
$(document).ready(function() {

  $("#clear").click(function() {
    //alert("you have clicked clear");
    location.reload(true);
    //alert("the page has reloaded");
  });

  $("#button1").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });

  $("#add").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });

  $("#subtract").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });  
  
  $("#multiply").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });  
  
  $("#divide").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });  
  
  $("#remainder").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });

  $("#2").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });

  $("#3").click(function() {
    event.preventDefault();
    arrToCalculate.push($(this).val());
    console.log(arrToCalculate);

    stringToCalculate += $(this).val();
    console.log(stringToCalculate);
  });

  


});
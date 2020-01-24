//Business logic

let arrayToCalculate = [];


//UI logic (jQuery)
$(document).ready(function() {

  $(".numbers-and-operators").on("click", function() {
    event.preventDefault();
    //console.log('jquery is working for buttons');
    let buttonVal = $(this).val();
    console.log(buttonVal);



  });
  //add a class to all the integer and operator buttons
  
  //target and call that class whenever it's clicked
  
  //push the value of that button up to the answer string

  //when "=" (submit button) is pressed, evaluate the answer string with eval()

  //return the result to the user (in a div??? in the input box???)


  //OR

  //When any button is pressed:

  // IF it is the "=", run calculate;
  // IF it is "clear", location.reload();
  // IF it is backspace, .pop() the last element off the array


});
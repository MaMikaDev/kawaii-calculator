let previous;
let current;

let result;
let value;

let num1 = 0;
let num2 = 0;

let theOperator;

function clearThis() { // clear secondary and primary displays
  document.getElementById("secondaryDisplay").innerHTML = ""; 
  document.getElementById("primaryDisplay").innerHTML = "";
  console.log("cleared");
}

function getValue(choice) { // give value content
  value = choice;
}

function sayHello() {
  // function called this way as originally tests were displaying hello, decided to keep it this way

  previous = value; /// add the number
  current = document.getElementById("primaryDisplay").innerHTML += previous;
  console.log(current);
}

function operator(choice) {

    theOperator = choice; // identify what the operator is (add, subtract, multiply or divide)
  
    console.log('this is the operator ' + theOperator); // console.log check

  num1 = current; //save the first number
  document.getElementById("secondaryDisplay").innerHTML = num1 + ' ' + value; // send the first number to secondary display along with the value
  document.getElementById("primaryDisplay").innerHTML = ""; //clear the primary display ready for next number
  previous = 0;

  console.log('current ' + current); //console logs checks
  console.log('previous ' + previous);
  console.log('value ' + value);
}

function operate() {

console.log('this value is then what? ' + value); //console log check

  switch (theOperator) {
    case "add":
      result = (+num1) + (+current); // ensures the values get added not concatenated 
      break;
      console.log(result);

    case "subtract":
      result = num1 - current;
      break;

    case "multiply":
      result = num1 * current;
      break;

    case "divide":
      result = num1 / current;
      break;

    default:
      result = "error";
  }

  console.log("this is the result " + result);
}

function getResults() {
  operate();
  document.getElementById('secondaryDisplay').innerHTML = ' ';
  document.getElementById("primaryDisplay").innerHTML = result;
  //something something get results from operate() and display them in a display window


  // I need to add the function to disable buttons or one that clears the result before adding more
}

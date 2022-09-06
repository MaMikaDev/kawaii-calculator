let previous;
let current;

let result = null;
let value;

let num1 = null;
let theOperator;

function getResults() {
  operate();
  document.getElementById("secondaryDisplay").innerHTML = " ";
  document.getElementById("primaryDisplay").innerHTML = result;
}

function clearThis() {
  // unlock the number buttons
  buttonsBackOnline();
  // clear secondary and primary displays
  document.getElementById("secondaryDisplay").innerHTML = "";
  document.getElementById("primaryDisplay").innerHTML = "";
  console.log("cleared");
  // ensure the num1 and result properties are cleared too
  num1 = null;
  result = null;
}

function getValue(choice) {
  value = choice;
}

function sayHello() {

  previous = value; /// adds the number upon pressing the button
  current = document.getElementById("primaryDisplay").innerHTML += previous; //creates the first number for calculation

}

function operator(choice) {
  operate(); //perform an up to date calculation
  buttonsBackOnline(); // ensure the number buttons are unlocked

  theOperator = choice; // identify what the operator is (add, subtract, multiply or divide)

  if (result != null) {
    //checks if there is already an existing result

    num1 = result; 

  } else {
    
    num1 = current; // save the first number
    previous = 0; // clean the slate for the next one
  }

  document.getElementById("secondaryDisplay").innerHTML = num1 + " " + value; // send the first number to secondary display along with the value
  document.getElementById("primaryDisplay").innerHTML = ""; //clear the primary display ready for next number

  operate(); // update the latest result
  buttonsBackOnline(); //ensure the number buttons are unlocked
  previous = 0;
  // need to potentially add a button to stop from pressing ' . ' button more than once to prevent errors
}

function operate() {
  if (num1 === null || current === null) {

    return; // checks if there are two numbers if not, returns without further action
  
} else {
    switch (theOperator) {
      case "add":
        result = +num1 + +current; // ensures the values get added not concatenated into a string
        break;

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
  }

  tempDisableButtons(); // to avoid errors and force user to use an operate or clear button
}

function tempDisableButtons() {
  for (let i = 0; i < 10; i++) {
    document.getElementById(i).disabled = true;
  }
}

function buttonsBackOnline() {
  for (let i = 0; i < 10; i++) {
    document.getElementById(i).disabled = false;
  }
}

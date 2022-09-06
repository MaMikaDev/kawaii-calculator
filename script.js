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
  buttonsBackOnline();
  // clear secondary and primary displays
  document.getElementById("secondaryDisplay").innerHTML = "";
  document.getElementById("primaryDisplay").innerHTML = "";
  console.log("cleared");
  num1 = null;
  result = null;
}

function getValue(choice) {
  value = choice;
}

function sayHello() {
  console.log("value is " + value);

  previous = value; /// adds the number upon pressing the button
  current = document.getElementById("primaryDisplay").innerHTML += previous; //creates the first number for calculation

  console.log("say hello is current: " + current);
  console.log("current num in hello function " + num1);
}

function operator(choice) {
  operate();
  buttonsBackOnline();

  theOperator = choice; // identify what the operator is (add, subtract, multiply or divide)
  console.log(theOperator);

  if (result != null) {
    //checks if there is already an existing result

    console.log("result is not null");

    num1 = result;

    buttonsBackOnline(); //makes sure the number buttons are unblocked
  } else {
    console.log("current num " + num1);

    num1 = current; //save the first number
    previous = 0;
  }

  document.getElementById("secondaryDisplay").innerHTML = num1 + " " + value; // send the first number to secondary display along with the value
  document.getElementById("primaryDisplay").innerHTML = ""; //clear the primary display ready for next number

  operate();
  buttonsBackOnline();
  previous = 0;
  // need to add a button to stop from pressing ' . ' button more than once to prevent errors
}

function operate() {
  if (num1 === null || current === null) {
    return;
  } else {
    switch (theOperator) {
      case "add":
        result = +num1 + +current; // ensures the values get added not concatenated
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

  tempDisableButtons();
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

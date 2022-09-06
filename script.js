let previous;
let current;
let nextNum;

let result;
let value;


function clearThis(){
  
    document.getElementById('secondaryDisplay').innerHTML = '';
    document.getElementById('primaryDisplay').innerHTML = 'cleared';
    console.log('cleared');
}

function getValue(choice){
    value = choice;

}

function sayHello() { // function called this way as originally tests were displaying hello, decided to keep it this way


    previous = value; /// add the number
    current = document.getElementById('primaryDisplay').innerHTML += previous;
    console.log(current);

}

function operator(){

    console.log(current);

    num1 = current;



}

function operate() {
    
    let num1 = previous;
 
    switch(value){
        case 'add':

            result = previous + nextNum;
            break;
            console.log(result);
        
        case 'subtract':

        result = previous - nextNum;
        break;
            
        case 'multiply':

        result = previous * nextNum;
        break;

        case 'divide':

        result = previous / nextNum;
        break;
        
    
        default:
        result = 'error';
        
    }
    }



function getResults(){

    // operate();
    document.getElementById('display').innerHTML = 'result';
    //something something get results from operate() and display them in a display window
}

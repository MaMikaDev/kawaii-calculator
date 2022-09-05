let previous;
let current;
let nextNum;

let result;
let dis;

function clearThis(){
  
    document.getElementById('display').innerHTML = 'cleared';
    console.log('cleared');
}

function getValue(choice){
    dis = choice;

}

function sayHello() { // function called this way as originally tests were displaying hello, decided to keep it this way

    previous = dis; /// add the number
    current = document.getElementById('display').innerHTML += previous;
    console.log(current);

}

function operate() {
    
    switch(dis){
        case 'add':

            result = previous + nextNum;
            break;
        
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

    operate();
    document.getElementById('display').innerHTML = 'result';
    //something something get results from operate() and display them in a display window
}

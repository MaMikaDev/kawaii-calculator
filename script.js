let num1;
let num2;
let result;
let dis;

function getValue(choice){
    dis = choice;
console.log(dis);
}

function sayHello() {

    document.getElementById('display').innerHTML = dis;
    console.log(dis);
   
}

function operate(action) {

    if (action === 'add'){

        result = num1 + num2;
       
    }
    else if (action === 'subtract'){
        result = num1 - num2;
        
    }
    else if (action === 'multiply'){
        result = num1 * num2;
        
    }
    else if (action === 'divide'){
        result = num1 / num2;
        
    }
    return result;

}

function storeNumber(num) {
    let num1 = num.value;
    console.log(num1);
}

function getResults(){
    //something something get results from operate() and display them in a display window
}

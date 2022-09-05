let num1;
let num2;
let result;

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
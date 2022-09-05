let previous;
let nextNum;

let result;
let dis;

function clearThis(){
  
    document.getElementById('display').innerHTML = 'cleared';
    console.log('cleared');
}

function getValue(choice){
    dis = choice;
    console.log(dis);
}

function sayHello() {

    document.getElementById('display').innerHTML = dis;
    console.log(dis);
   
}

function operate() {
    
    if (dis === 'add'){

        result = previous;um2;
     


       
    }
    else if (dis === 'subtract'){
        result = previous;um2;
     

    }
    else if (dis === 'multiply'){
        result = previous;um2;
     

    }
    else if (dis === 'divide'){
        result = previous;um2;
 }

    return result;
    }



function getResults(){

    operate();
    document.getElementById('display').innerHTML = 'result';
    //something something get results from operate() and display them in a display window
}

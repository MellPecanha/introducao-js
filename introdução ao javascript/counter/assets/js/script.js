let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    count ++;
    CURRENT_NUMBER.innerHTML = count;
}
    
function decrement(){
    count --;
    CURRENT_NUMBER.innerHTML = count;
}

function zero(){
    count = 0;
    CURRENT_NUMBER.innerHTML = count;
}

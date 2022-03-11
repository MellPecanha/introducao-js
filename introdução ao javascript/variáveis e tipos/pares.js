let num = [0, 1, 3, 10, 14, 27, 33, 40, 56];

function verification(array){
    if (!array) return -1;
    if (!array.length) return -1;
 
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0){}
        else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0.`)
            array[i] = 0;
        }
    }

    return array;
}

console.log(verification(num));
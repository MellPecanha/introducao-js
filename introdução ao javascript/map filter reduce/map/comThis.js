const apple = {
    price: 2,
}

const orange = {
    price: 1.5,
}

function mapArr(){
    const arr = [1, 2, 3, 4, 5, 6];

    console.log(arr);

    return arr.map(function(item){
        return item * this.price;
    }, orange);
}


console.log(mapArr());
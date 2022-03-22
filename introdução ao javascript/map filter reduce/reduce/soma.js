function somanum(arr){
    if(!arr || !arr.length) return;
    const soma = arr.reduce((prev, curr) => prev + curr);

    return soma;
}

console.log(somanum([1, 2, 3, 4, 5, 6]));
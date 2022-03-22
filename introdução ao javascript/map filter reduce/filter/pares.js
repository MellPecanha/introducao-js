function evennum(arr){
    if(!arr || !arr.length) return;

    const filterednum = arr.filter((item) => item % 2 === 0);

    return filterednum;
}

console.log(evennum([1, 2, 3, 4, 7, 10, 14, 27]));
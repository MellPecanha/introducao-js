function valida(arr, num){
    try {
        if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');
        if (typeof arr !== 'object') throw new TypeError('O elemnto do array precisa ser do tipo Object!');
        if (typeof num !== 'number') throw new TypeError('O elemento do num precisa ser do tipo Number!');
        if (arr.length !== num) throw new RangeError('Tamanho inválido!');
        return arr;
    } catch (e) {
        if (e instanceof ReferenceError){
            console.log('Esse erro é do tipo ReferenceError!');
            console.log(e.message);
        }
        else if (e instanceof TypeError){
            console.log('Esse erro é do tipo TypeError!');
            console.log(e.message);
        }
        else if (e instanceof RangeError){
            console.log('Esse erro é do tipo RangeError!');
            console.log(e.message);
        }
        else{
            console.log('Tipo de erro não esperado' + e);
        } 
    }
}

console.log(valida(1, 2, 3), a);
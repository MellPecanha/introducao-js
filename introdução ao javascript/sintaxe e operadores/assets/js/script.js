function start(){
    let n1 = Number(prompt('Digite o primeiro número:'));
    let n2 = Number(prompt('Digite o segundo número:'));

    //verificação
    if (!n1 ||!n2){
        alert('Erro - parâmetros inválidos!');
        start();
    }

    // comparação
    let nao = 'não';
    if (n1 === n2){
        nao = '';
    }
    let phrase1 = `Os números ${n1} e ${n2} ${nao} são iguais,`

    //soma
    const result = n1 + n2;
    let dez = 'menor';
    let vinte = 'menor';
    if(result > 10){
        dez = "maior";
    }
    if(result > 20){
        vinte = 'maior';
    }
    let phrase2 = `sua soma é ${result}, que é ${dez} que 10, e ${vinte} que 20.`

    //frase final
    alert(`${phrase1} ${phrase2}`);
    restart();

    //recomeçar
    function restart(){
        let option = confirm('Gostaria de recomeçar?')
        if (option == true){
            start();
        }
    }
}

start();
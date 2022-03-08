function calculator(){
    const operation = Number(prompt('Escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Ponteciação (**)'));

    if (!operation || operation < 0 || operation > 7){
        alert('Erro! Número inválido, tente novamente.');
        calculator();
    }else{

    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let result

    if (!n1 ||!n2){
        alert('Erro - parâmetros inválidos!');
        calculator();
    }else{
        function adittion(){
            result = n1 + n2;
            alert(`${n1} + ${n2} = ${result}`);
            restart();
        }
    
        function subtraction(){
            result = n1 - n2;
            alert(`${n1} - ${n2} = ${result}`);
            restart();
        }
    
        function multiplication(){
            result = n1 * n2;
            alert(`${n1} * ${n2} = ${result}`);
            restart();
        }
    
        function realDivision(){
            result = n1 / n2
            alert(`${n1} / ${n2} = ${result}`);
            restart();
        }
    
        function integerDivision(){
            result = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é ${result}`);
            restart();
        }
    
        function potency(){
            result = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª é ${result}`);
            restart();
        }
    
        function restart(){
            let option = confirm('Deseja realizar uma nova operação? \nSim - clique em OK, \nNão - Aperte o cancela.');
            if (option == true){
                calculator();
            } else{
                alert('Valeu, até a próxima!');
            }
        }
    }
    
    switch (operation){
        case 1:
            adittion();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            realDivision();
            break;
        case 5:
            integerDivision();
            break;
        case 6:
            potency();
            break;
    }
    }    
}

calculator();
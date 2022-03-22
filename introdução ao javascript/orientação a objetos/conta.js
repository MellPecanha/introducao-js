class contabancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    sacar(valor){
        if(valor > this._saldo){
            return console.log('Saque negado, saldo insuficiente!');
        }

        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    get saldo(){
        return this._saldo;
    }
}

class contacorrente extends contabancaria{
    constructor(agencia, numero, cartaodecredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaodecredito = cartaodecredito;
    }

    set cartaodecredito(valor){
        this._cartaodecredito = valor;
    }

    get cartaodecredito(){
        return this._cartaodecredito;
    }
}

class contapoupanca extends contabancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class contauniversitaria extends contabancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação negada!';
        }
        
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}

const minhaconta = new contacorrente(1, 1, true);
const contauni = new contauniversitaria(2, 305);
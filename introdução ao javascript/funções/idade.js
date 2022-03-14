const p1 = {
    nome: 'Ângela',
    idade: 28,
};

const p2 = {
    nome: 'Luiz',
    idade: 59,
};

const p3 = {
    nome: 'Rose',
    idade: 82,
};

const p4 = {
    nome: 'Jack',
    idade: 12,
};

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(p2, 15));
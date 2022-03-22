function calculasaldo(saldo, itens){
    if(!saldo || !itens || !itens.length) return "envie todos os parâmetros";

    const saldofinal = itens.reduce((acc, item) => acc - item.preco, saldo);

    return `o saldo final será de ${saldofinal} reais`;
}

lista = [
    {
        preco: 2,
        nome: 'maçã',
    },
    {
        preco: 30,
        nome: 'camiseta',
    },
    {
        preco: 50,
        nome: 'carne',
    },
];

let saldo = 100;

console.log(calculasaldo(saldo, lista));
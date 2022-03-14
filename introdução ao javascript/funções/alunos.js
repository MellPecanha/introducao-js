const alunos = [
    {
        nome: ' paulo',
        nota: 5,
        turma: '3A',
    },
    {
        nome: 'Sara',
        nota: 7.5,
        turma: '5C',
    },
    {
        nome: 'Lucas',
        nota: 8.5,
        turma: '8B',
    },
    {
        nome: 'Juliana',
        nota: 4,
        turma: '8B',
    },
    {
        nome: 'Antônio',
        nota: 9,
        turma: '8B',
    },
];

function aprovado(alunos, media){
    let aprovados = [];

    for (let i = 0; i < alunos.length; i++){
        const {nota, nome} = alunos[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log('Os alunos aprovados são: ' + aprovado(alunos, 6));
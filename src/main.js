const arrayAlunos = [
    {nome: 'Ana', nota: 8.2},
    {nome: 'Carol', nota: 6.4},
    {nome: 'Everton', nota: 5.0},
    {nome: 'Gilmar', nota: 4.5},
    {nome: 'Lorrayne', nota: 5.98},
    {nome: 'Giovane', nota: 6.5},
    {nome: 'Ruan', nota: 7.5},
    {nome: 'Larissa', nota: 8.6},
    {nome: 'Ronaldo', nota: 6.6},
    {nome: 'Ruth', nota: 8.9},
    {nome: 'Luan', nota: 3.6},
    {nome: 'Luana', nota: 5.9}
];

arrayAlunos.push({nome: 'Douglas', nota: 7.6});
arrayAlunos.push({nome: 'Stefany', nota: 9.6});
arrayAlunos.push({nome: 'Willian', nota: 5.95});
arrayAlunos.push({nome: 'Carine', nota: 8.4});

function retornaAlunosAprovados(alunos){
    return alunos.nota >= 6.0;
}

const alunosAprovados = arrayAlunos.filter(retornaAlunosAprovados);

console.log(alunosAprovados);
// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "João", nota: 8.5 },
    { nome: "Maria", nota: 7.2 },
    { nome: "Pedro", nota: 5.8 },
    { nome: "Ana", nota: 9.1 },
    { nome: "Carlos", nota: 6.0 },
    { nome: "Lucia", nota: 4.5 },
    { nome: "Rafael", nota: 7.8 },
    { nome: "Fernanda", nota: 5.2 },
    { nome: "Bruno", nota: 8.9 },
    { nome: "Julia", nota: 6.7 }
];

// Função que retorna apenas os alunos aprovados (nota >= 6)
function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

// Exemplo de uso
const aprovados = alunosAprovados(alunos);
console.log("Alunos aprovados:", aprovados);

// Alternativa usando arrow function
const obterAprovados = (arrayAlunos) => arrayAlunos.filter(aluno => aluno.nota >= 6);
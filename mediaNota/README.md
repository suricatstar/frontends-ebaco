# Sistema de Notas dos Alunos

Este projeto implementa um sistema simples para gerenciar notas de alunos e filtrar aqueles que foram aprovados.

## Funcionalidades

- **Array de Alunos**: Contém objetos com nome e nota de cada aluno
- **Filtro de Aprovados**: Função que retorna apenas alunos com nota maior ou igual a 6

## Estrutura do Projeto

```
mediaNota.js    # Arquivo principal com a lógica do sistema
```

## Como usar

### 1. Executar o código

```bash
node mediaNota.js
```

### 2. Funções disponíveis

#### `alunosAprovados(arrayAlunos)`
Retorna um array com os alunos que têm nota >= 6.

**Parâmetros:**
- `arrayAlunos`: Array de objetos contendo alunos

**Retorno:**
- Array filtrado com apenas os alunos aprovados

#### `obterAprovados(arrayAlunos)`
Versão alternativa usando arrow function com a mesma funcionalidade.

### 3. Exemplo de uso

```javascript
const aprovados = alunosAprovados(alunos);
console.log("Alunos aprovados:", aprovados);
```

## Dados de Exemplo

O sistema inclui 10 alunos com as seguintes notas:
- João: 8.5
- Maria: 7.2
- Pedro: 5.8
- Ana: 9.1
- Carlos: 6.0
- Lucia: 4.5
- Rafael: 7.8
- Fernanda: 5.2
- Bruno: 8.9
- Julia: 6.7

## Critério de Aprovação

Alunos são considerados aprovados quando possuem nota maior ou igual a **6.0**.

## Tecnologias

- JavaScript (ES6+)
- Node.js (para execução)

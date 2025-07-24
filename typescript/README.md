# Projeto TypeScript - Funções Básicas

Este projeto demonstra o uso do TypeScript com tipagem explícita, contendo funções básicas de multiplicação e saudação.

## 📋 Descrição

O projeto contém duas funções principais:
- **Multiplicação**: Recebe dois números e retorna o produto
- **Saudação**: Recebe um nome e retorna uma saudação personalizada

## 🚀 Tecnologias Utilizadas

- **TypeScript** 5.8.3
- **Node.js**
- **tsx** - Runtime TypeScript rápido
- **ts-node** - Executor TypeScript para Node.js

## 📁 Estrutura do Projeto

```
typescript/
├── package.json
├── funcoes.ts
└── README.md
```

## ⚙️ Configuração e Instalação

### Pré-requisitos
- Node.js instalado no sistema

### Instalação das dependências
```bash
npm install
```

## 🏃‍♂️ Como Executar

### Execução em modo desenvolvimento
```bash
npm run dev
```

### Execução alternativa com tsx
```bash
npx tsx funcoes.ts
```

### Compilação e execução manual
```bash
# Compilar TypeScript para JavaScript
npx tsc funcoes.ts

# Executar o arquivo JavaScript gerado
node funcoes.js
```

## 📝 Funções Disponíveis

### `multiplicacao(numero1: number, numero2: number): number`
- **Descrição**: Multiplica dois números
- **Parâmetros**: 
  - `numero1`: Primeiro número (type: number)
  - `numero2`: Segundo número (type: number)
- **Retorno**: Resultado da multiplicação (type: number)

**Exemplo de uso:**
```typescript
multiplicacao(5, 3); // Retorna: 15
multiplicacao(2.5, 4); // Retorna: 10
```

### `saudacao(nome: string): string`
- **Descrição**: Gera uma saudação personalizada
- **Parâmetros**: 
  - `nome`: Nome da pessoa (type: string)
- **Retorno**: String com a saudação "Olá " + nome

**Exemplo de uso:**
```typescript
saudacao("Maria"); // Retorna: "Olá Maria"
saudacao("João"); // Retorna: "Olá João"
```

## 📊 Saída Esperada

Ao executar o projeto, você verá a seguinte saída no console:

```
Exemplos de uso:
Multiplicação de 5 x 3: 15
Multiplicação de 2.5 x 4: 10
Olá Maria
Olá João
```

## 🔧 Configuração do TypeScript

O projeto utiliza ES Modules (`"type": "module"`) configurado no `package.json` e exporta funções usando a sintaxe moderna do JavaScript/TypeScript.

## 📚 Características do TypeScript Demonstradas

- ✅ **Tipagem explícita** nos parâmetros e retorno das funções
- ✅ **Documentação JSDoc** para melhor compreensão do código
- ✅ **ES Modules** com export/import moderno
- ✅ **Strict typing** para maior segurança no código

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcao`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova função'`)
4. Push para a branch (`git push origin feature/nova-funcao`)
5. Crie um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

Desenvolvido como exemplo educacional para aprendizado de TypeScript.
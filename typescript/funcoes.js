"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicacao = multiplicacao;
exports.saudacao = saudacao;
/**
 * Função de multiplicação que recebe dois números e retorna o produto
 * @param numero1 - Primeiro número para multiplicação
 * @param numero2 - Segundo número para multiplicação
 * @returns O resultado da multiplicação dos dois números
 */
function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}
/**
 * Função de saudação que recebe um nome e retorna uma saudação personalizada
 * @param nome - Nome da pessoa para saudar
 * @returns String com a saudação "Olá " + nome
 */
function saudacao(nome) {
    return "Olá " + nome;
}
// Exemplos de uso das funções
console.log("Exemplos de uso:");
console.log("Multiplicação de 5 x 3:", multiplicacao(5, 3));
console.log("Multiplicação de 2.5 x 4:", multiplicacao(2.5, 4));
console.log(saudacao("Maria"));
console.log(saudacao("João"));

/**
 * Classe abstrata Veiculo
 * Representa a abstração de um veículo genérico
 */
class Veiculo {
    constructor(marca, modelo, ano, cor) {
        if (this.constructor === Veiculo) {
            throw new Error('Veiculo é uma classe abstrata e não pode ser instanciada diretamente');
        }
        
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.ligado = false;
        this.velocidade = 0;
    }

    // Método concreto - implementado na classe pai
    ligar() {
        if (this.ligado) {
            console.log(`O ${this.modelo} já está ligado!`);
            return;
        }
        this.ligado = true;
        console.log(`${this.modelo} foi ligado!`);
    }

    // Método concreto - implementado na classe pai
    desligar() {
        if (!this.ligado) {
            console.log(`O ${this.modelo} já está desligado!`);
            return;
        }
        this.ligado = false;
        this.velocidade = 0;
        console.log(`${this.modelo} foi desligado!`);
    }

    // Método concreto - implementado na classe pai
    acelerar(incremento) {
        if (!this.ligado) {
            console.log(`Não é possível acelerar. O ${this.modelo} está desligado!`);
            return;
        }
        
        this.velocidade += incremento;
        console.log(`${this.modelo} acelerou para ${this.velocidade} km/h`);
    }

    // Método concreto - implementado na classe pai
    frear(decremento) {
        if (!this.ligado) {
            console.log(`O ${this.modelo} já está parado!`);
            return;
        }
        
        this.velocidade = Math.max(0, this.velocidade - decremento);
        console.log(`${this.modelo} reduziu para ${this.velocidade} km/h`);
    }

    // Método concreto - implementado na classe pai
    getInfo() {
        return {
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano,
            cor: this.cor,
            ligado: this.ligado,
            velocidade: this.velocidade
        };
    }

    // Método abstrato - deve ser implementado pelas classes filhas
    buzinar() {
        throw new Error('Método buzinar() deve ser implementado pela classe filha');
    }

    // Método abstrato - deve ser implementado pelas classes filhas
    getTipo() {
        throw new Error('Método getTipo() deve ser implementado pela classe filha');
    }

    // Método abstrato - deve ser implementado pelas classes filhas
    getCapacidadePassageiros() {
        throw new Error('Método getCapacidadePassageiros() deve ser implementado pela classe filha');
    }
}

module.exports = Veiculo;

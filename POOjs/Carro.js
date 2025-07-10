const Veiculo = require('./Veiculo');

/**
 * Classe Carro - herda de Veiculo
 * Representa um carro específico
 */
class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor, numeroPortas, combustivel) {
        super(marca, modelo, ano, cor);
        this.numeroPortas = numeroPortas;
        this.combustivel = combustivel;
        this.arCondicionado = false;
        this.radio = false;
    }

    // Implementação do método abstrato buzinar
    buzinar() {
        if (!this.ligado) {
            console.log(`O ${this.modelo} precisa estar ligado para buzinar!`);
            return;
        }
        console.log(`${this.modelo}: *BIP BIP* 🚗`);
    }

    // Implementação do método abstrato getTipo
    getTipo() {
        return 'Carro';
    }

    // Implementação do método abstrato getCapacidadePassageiros
    getCapacidadePassageiros() {
        return this.numeroPortas === 2 ? 4 : 5;
    }

    // Método específico da classe Carro
    ligarArCondicionado() {
        if (!this.ligado) {
            console.log(`O ${this.modelo} precisa estar ligado para ligar o ar condicionado!`);
            return;
        }
        
        this.arCondicionado = true;
        console.log(`Ar condicionado do ${this.modelo} foi ligado! ❄️`);
    }

    // Método específico da classe Carro
    desligarArCondicionado() {
        this.arCondicionado = false;
        console.log(`Ar condicionado do ${this.modelo} foi desligado!`);
    }

    // Método específico da classe Carro
    ligarRadio() {
        if (!this.ligado) {
            console.log(`O ${this.modelo} precisa estar ligado para ligar o rádio!`);
            return;
        }
        
        this.radio = true;
        console.log(`Rádio do ${this.modelo} foi ligado! 🎵`);
    }

    // Método específico da classe Carro
    desligarRadio() {
        this.radio = false;
        console.log(`Rádio do ${this.modelo} foi desligado!`);
    }

    // Sobrescrevendo o método getInfo para incluir informações específicas do carro
    getInfo() {
        const infoBase = super.getInfo();
        return {
            ...infoBase,
            tipo: this.getTipo(),
            numeroPortas: this.numeroPortas,
            combustivel: this.combustivel,
            capacidadePassageiros: this.getCapacidadePassageiros(),
            arCondicionado: this.arCondicionado,
            radio: this.radio
        };
    }

    // Método específico para abastecer
    abastecer(litros) {
        console.log(`${this.modelo} foi abastecido com ${litros} litros de ${this.combustivel} ⛽`);
    }
}

module.exports = Carro;

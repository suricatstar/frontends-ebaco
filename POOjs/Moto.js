const Veiculo = require('./Veiculo');

/**
 * Classe Moto - herda de Veiculo
 * Representa uma motocicleta específica
 */
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cor, cilindradas, tipoFreio) {
        super(marca, modelo, ano, cor);
        this.cilindradas = cilindradas;
        this.tipoFreio = tipoFreio;
        this.cavalete = false;
        this.farolAuxiliar = false;
    }

    // Implementação do método abstrato buzinar
    buzinar() {
        if (!this.ligado) {
            console.log(`A ${this.modelo} precisa estar ligada para buzinar!`);
            return;
        }
        console.log(`${this.modelo}: *PI PI PI* 🏍️`);
    }

    // Implementação do método abstrato getTipo
    getTipo() {
        return 'Motocicleta';
    }

    // Implementação do método abstrato getCapacidadePassageiros
    getCapacidadePassageiros() {
        return 2; // Piloto + garupa
    }

    // Método específico da classe Moto
    levantarCavalete() {
        if (this.cavalete) {
            this.cavalete = false;
            console.log(`Cavalete da ${this.modelo} foi levantado!`);
        } else {
            console.log(`O cavalete da ${this.modelo} já está levantado!`);
        }
    }

    // Método específico da classe Moto
    abaixarCavalete() {
        if (!this.cavalete) {
            this.cavalete = true;
            console.log(`Cavalete da ${this.modelo} foi abaixado!`);
        } else {
            console.log(`O cavalete da ${this.modelo} já está abaixado!`);
        }
    }

    // Método específico da classe Moto
    ligarFarolAuxiliar() {
        if (!this.ligado) {
            console.log(`A ${this.modelo} precisa estar ligada para ligar o farol auxiliar!`);
            return;
        }
        
        this.farolAuxiliar = true;
        console.log(`Farol auxiliar da ${this.modelo} foi ligado! 💡`);
    }

    // Método específico da classe Moto
    desligarFarolAuxiliar() {
        this.farolAuxiliar = false;
        console.log(`Farol auxiliar da ${this.modelo} foi desligado!`);
    }

    // Sobrescrevendo o método acelerar para incluir comportamento específico da moto
    acelerar(incremento) {
        if (!this.ligado) {
            console.log(`Não é possível acelerar. A ${this.modelo} está desligada!`);
            return;
        }
        
        if (this.cavalete) {
            console.log(`Não é possível acelerar com o cavalete abaixado! Levante o cavalete primeiro.`);
            return;
        }
        
        this.velocidade += incremento;
        console.log(`${this.modelo} acelerou para ${this.velocidade} km/h 🏍️💨`);
    }

    // Método específico da classe Moto
    empinar() {
        if (!this.ligado) {
            console.log(`A ${this.modelo} precisa estar ligada para empinar!`);
            return;
        }
        
        if (this.velocidade < 20) {
            console.log(`Velocidade insuficiente para empinar! Acelere mais.`);
            return;
        }
        
        console.log(`${this.modelo} empinou! 🤸‍♂️ (Cuidado com a segurança!)`);
    }

    // Sobrescrevendo o método getInfo para incluir informações específicas da moto
    getInfo() {
        const infoBase = super.getInfo();
        return {
            ...infoBase,
            tipo: this.getTipo(),
            cilindradas: this.cilindradas,
            tipoFreio: this.tipoFreio,
            capacidadePassageiros: this.getCapacidadePassageiros(),
            cavalete: this.cavalete,
            farolAuxiliar: this.farolAuxiliar
        };
    }

    // Método específico para trocar óleo
    trocarOleo() {
        console.log(`Óleo da ${this.modelo} foi trocado! 🔧`);
    }
}

module.exports = Moto;

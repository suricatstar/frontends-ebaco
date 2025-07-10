const Veiculo = require('./Veiculo');

/**
 * Classe Caminhao - herda de Veiculo
 * Representa um caminhão específico
 */
class Caminhao extends Veiculo {
    constructor(marca, modelo, ano, cor, capacidadeCarga, numeroEixos) {
        super(marca, modelo, ano, cor);
        this.capacidadeCarga = capacidadeCarga; // em toneladas
        this.numeroEixos = numeroEixos;
        this.cacamba = false; // true = levantada, false = abaixada
        this.cargaAtual = 0;
    }

    // Implementação do método abstrato buzinar
    buzinar() {
        if (!this.ligado) {
            console.log(`O ${this.modelo} precisa estar ligado para buzinar!`);
            return;
        }
        console.log(`${this.modelo}: *HOOOOONNNN* 🚛`);
    }

    // Implementação do método abstrato getTipo
    getTipo() {
        return 'Caminhão';
    }

    // Implementação do método abstrato getCapacidadePassageiros
    getCapacidadePassageiros() {
        return 3; // Motorista + 2 passageiros no banco
    }

    // Método específico da classe Caminhao
    carregarCarga(peso) {
        if (this.cargaAtual + peso > this.capacidadeCarga * 1000) { // converter toneladas para kg
            console.log(`Não é possível carregar ${peso}kg. Capacidade máxima: ${this.capacidadeCarga * 1000}kg. Carga atual: ${this.cargaAtual}kg`);
            return;
        }
        
        this.cargaAtual += peso;
        console.log(`${peso}kg carregados no ${this.modelo}. Carga atual: ${this.cargaAtual}kg 📦`);
    }

    // Método específico da classe Caminhao
    descarregarCarga(peso) {
        if (peso > this.cargaAtual) {
            console.log(`Não é possível descarregar ${peso}kg. Carga atual: ${this.cargaAtual}kg`);
            return;
        }
        
        this.cargaAtual -= peso;
        console.log(`${peso}kg descarregados do ${this.modelo}. Carga atual: ${this.cargaAtual}kg 📦`);
    }

    // Método específico da classe Caminhao
    levantarCacamba() {
        if (this.cacamba) {
            console.log(`A caçamba do ${this.modelo} já está levantada!`);
            return;
        }
        
        if (!this.ligado) {
            console.log(`O ${this.modelo} precisa estar ligado para levantar a caçamba!`);
            return;
        }
        
        this.cacamba = true;
        console.log(`Caçamba do ${this.modelo} foi levantada! ⬆️`);
    }

    // Método específico da classe Caminhao
    abaixarCacamba() {
        if (!this.cacamba) {
            console.log(`A caçamba do ${this.modelo} já está abaixada!`);
            return;
        }
        
        this.cacamba = false;
        console.log(`Caçamba do ${this.modelo} foi abaixada! ⬇️`);
    }

    // Sobrescrevendo o método acelerar para incluir comportamento específico do caminhão
    acelerar(incremento) {
        if (!this.ligado) {
            console.log(`Não é possível acelerar. O ${this.modelo} está desligado!`);
            return;
        }
        
        if (this.cacamba) {
            console.log(`Não é seguro acelerar com a caçamba levantada! Abaixe a caçamba primeiro.`);
            return;
        }
        
        // Caminhão acelera mais devagar quando carregado
        const fatorCarga = this.cargaAtual > 0 ? 0.7 : 1;
        const incrementoReal = incremento * fatorCarga;
        
        this.velocidade += incrementoReal;
        console.log(`${this.modelo} acelerou para ${this.velocidade.toFixed(1)} km/h 🚛`);
        
        if (this.cargaAtual > 0) {
            console.log(`(Velocidade reduzida devido à carga de ${this.cargaAtual}kg)`);
        }
    }

    // Método específico da classe Caminhao
    verificarCarga() {
        const percentualCarga = (this.cargaAtual / (this.capacidadeCarga * 1000)) * 100;
        console.log(`Carga atual: ${this.cargaAtual}kg (${percentualCarga.toFixed(1)}% da capacidade)`);
        return {
            cargaAtual: this.cargaAtual,
            capacidadeTotal: this.capacidadeCarga * 1000,
            percentualUtilizado: percentualCarga
        };
    }

    // Sobrescrevendo o método getInfo para incluir informações específicas do caminhão
    getInfo() {
        const infoBase = super.getInfo();
        return {
            ...infoBase,
            tipo: this.getTipo(),
            capacidadeCarga: this.capacidadeCarga,
            numeroEixos: this.numeroEixos,
            capacidadePassageiros: this.getCapacidadePassageiros(),
            cacamba: this.cacamba,
            cargaAtual: this.cargaAtual,
            percentualCarga: ((this.cargaAtual / (this.capacidadeCarga * 1000)) * 100).toFixed(1)
        };
    }
}

module.exports = Caminhao;

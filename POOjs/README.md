# Programação Orientada a Objetos em JavaScript

Este projeto demonstra os conceitos fundamentais de Programação Orientada a Objetos (POO) em JavaScript, incluindo abstração, herança, polimorfismo e encapsulamento.

## 📋 Estrutura do Projeto

```
POOjs/
├── Veiculo.js      # Classe abstrata base
├── Carro.js        # Classe herdeira (Carro)
├── Moto.js         # Classe herdeira (Moto)  
├── Caminhao.js     # Classe herdeira (Caminhão)
├── main.js         # Arquivo principal com demonstração
└── README.md       # Este arquivo
```

## 🎯 Conceitos Demonstrados

### 1. **Abstração**
- **Classe abstrata `Veiculo`**: Define a estrutura comum para todos os veículos
- **Métodos abstratos**: `buzinar()`, `getTipo()`, `getCapacidadePassageiros()`
- **Métodos concretos**: `ligar()`, `acelerar()`, `frear()`, `getInfo()`

### 2. **Herança**
- **`Carro`** herda de `Veiculo`
- **`Moto`** herda de `Veiculo`
- **`Caminhao`** herda de `Veiculo`

### 3. **Polimorfismo**
- Método `buzinar()` tem implementação diferente em cada classe
- Método `acelerar()` é sobrescrito com comportamentos específicos
- Método `getInfo()` é estendido em cada classe filha

### 4. **Encapsulamento**
- Propriedades controladas por métodos públicos
- Validações internas nos métodos
- Estado interno protegido

## 🚗 Classes Implementadas

### Classe Abstrata: `Veiculo`
```javascript
// Propriedades comuns
- marca, modelo, ano, cor
- ligado, velocidade

// Métodos concretos
- ligar(), desligar()
- acelerar(), frear()
- getInfo()

// Métodos abstratos (devem ser implementados pelas classes filhas)
- buzinar()
- getTipo()
- getCapacidadePassageiros()
```

### Classe: `Carro`
```javascript
// Propriedades específicas
- numeroPortas, combustivel
- arCondicionado, radio

// Métodos específicos
- ligarArCondicionado(), desligarArCondicionado()
- ligarRadio(), desligarRadio()
- abastecer()
```

### Classe: `Moto`
```javascript
// Propriedades específicas
- cilindradas, tipoFreio
- cavalete, farolAuxiliar

// Métodos específicos
- levantarCavalete(), abaixarCavalete()
- ligarFarolAuxiliar(), desligarFarolAuxiliar()
- empinar(), trocarOleo()
```

### Classe: `Caminhao`
```javascript
// Propriedades específicas
- capacidadeCarga, numeroEixos
- cacamba, cargaAtual

// Métodos específicos
- carregarCarga(), descarregarCarga()
- levantarCacamba(), abaixarCacamba()
- verificarCarga()
```

## 🚀 Como Executar

1. **Execute o arquivo principal:**
   ```bash
   node main.js
   ```

2. **Ou execute cada classe individualmente:**
   ```bash
   node Carro.js
   node Moto.js
   node Caminhao.js
   ```

## 🎮 Exemplo de Uso

```javascript
const Carro = require('./Carro');
const Moto = require('./Moto');

// Criando instâncias
const meuCarro = new Carro('Toyota', 'Corolla', 2023, 'Prata', 4, 'Flex');
const minhaMoto = new Moto('Honda', 'CBR 600', 2022, 'Azul', 600, 'Disco');

// Usando métodos herdados
meuCarro.ligar();
meuCarro.acelerar(50);
meuCarro.buzinar(); // *BIP BIP* 🚗

minhaMoto.ligar();
minhaMoto.levantarCavalete();
minhaMoto.acelerar(80);
minhaMoto.buzinar(); // *PI PI PI* 🏍️
```

## 🔍 Instâncias Criadas

O projeto cria **3 instâncias** de objetos diferentes:

1. **Carro**: Toyota Corolla 2023 Prata
2. **Moto**: Honda CBR 600 2022 Azul  
3. **Caminhão**: Volvo FH 540 2021 Vermelho

## 🛠️ Funcionalidades Demonstradas

- ✅ Classe abstrata que não pode ser instanciada diretamente
- ✅ Herança de propriedades e métodos
- ✅ Implementação obrigatória de métodos abstratos
- ✅ Sobrescrita de métodos (Override)
- ✅ Métodos específicos para cada tipo de veículo
- ✅ Validações e regras de negócio
- ✅ Estado interno dos objetos
- ✅ Interação entre métodos

## 📝 Saída do Programa

O programa executa uma demonstração completa mostrando:
- Tentativa de instanciar classe abstrata (erro esperado)
- Criação das 3 instâncias
- Teste dos métodos herdados
- Teste dos métodos específicos
- Estado final de cada objeto
- Resumo dos conceitos demonstrados

## 🎓 Conceitos de POO Atendidos

✅ **Abstração**: Classe abstrata Veiculo com métodos abstratos  
✅ **Herança**: Três classes filhas (Carro, Moto, Caminhão)  
✅ **Polimorfismo**: Métodos com comportamentos diferentes  
✅ **Encapsulamento**: Controle de acesso às propriedades  
✅ **Instanciação**: Três objetos criados e utilizados

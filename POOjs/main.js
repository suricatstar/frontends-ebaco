const Veiculo = require('./Veiculo');
const Carro = require('./Carro');
const Moto = require('./Moto');
const Caminhao = require('./Caminhao');

console.log('='.repeat(60));
console.log('🚗 DEMONSTRAÇÃO DE PROGRAMAÇÃO ORIENTADA A OBJETOS 🚗');
console.log('='.repeat(60));

// Tentativa de instanciar a classe abstrata (vai gerar erro)
try {
    console.log('\n❌ Tentando instanciar a classe abstrata Veiculo...');
    const veiculo = new Veiculo('Marca', 'Modelo', 2023, 'Branco');
} catch (error) {
    console.log('✅ Erro esperado:', error.message);
}

console.log('\n' + '='.repeat(60));
console.log('🚙 CRIANDO INSTÂNCIAS DOS OBJETOS 🚙');
console.log('='.repeat(60));

// Instância 1: Carro
console.log('\n🚗 Instância 1: Criando um Carro...');
const meuCarro = new Carro('Toyota', 'Corolla', 2023, 'Prata', 4, 'Flex');
console.log('✅ Carro criado:', meuCarro.getInfo());

// Instância 2: Moto
console.log('\n🏍️ Instância 2: Criando uma Moto...');
const minhaMoto = new Moto('Honda', 'CBR 600', 2022, 'Azul', 600, 'Disco');
console.log('✅ Moto criada:', minhaMoto.getInfo());

// Instância 3: Caminhão
console.log('\n🚛 Instância 3: Criando um Caminhão...');
const meuCaminhao = new Caminhao('Volvo', 'FH 540', 2021, 'Vermelho', 25, 3);
console.log('✅ Caminhão criado:', meuCaminhao.getInfo());

console.log('\n' + '='.repeat(60));
console.log('🔧 TESTANDO MÉTODOS BÁSICOS (HERANÇA) 🔧');
console.log('='.repeat(60));

// Testando métodos herdados da classe pai
console.log('\n🔑 Ligando todos os veículos...');
meuCarro.ligar();
minhaMoto.ligar();
meuCaminhao.ligar();

console.log('\n🚀 Acelerando todos os veículos...');
meuCarro.acelerar(50);
minhaMoto.acelerar(80);
meuCaminhao.acelerar(60);

console.log('\n📯 Testando buzinas (método abstrato implementado)...');
meuCarro.buzinar();
minhaMoto.buzinar();
meuCaminhao.buzinar();

console.log('\n' + '='.repeat(60));
console.log('🎯 TESTANDO MÉTODOS ESPECÍFICOS DE CADA CLASSE 🎯');
console.log('='.repeat(60));

// Métodos específicos do Carro
console.log('\n🚗 Testando métodos específicos do Carro...');
meuCarro.ligarArCondicionado();
meuCarro.ligarRadio();
meuCarro.abastecer(45);

// Métodos específicos da Moto
console.log('\n🏍️ Testando métodos específicos da Moto...');
minhaMoto.levantarCavalete();
minhaMoto.acelerar(100); // Agora pode acelerar sem o cavalete
minhaMoto.ligarFarolAuxiliar();
minhaMoto.empinar();
minhaMoto.trocarOleo();

// Métodos específicos do Caminhão
console.log('\n🚛 Testando métodos específicos do Caminhão...');
meuCaminhao.carregarCarga(5000);
meuCaminhao.verificarCarga();
meuCaminhao.levantarCacamba();
meuCaminhao.acelerar(30); // Tentativa de acelerar com caçamba levantada
meuCaminhao.abaixarCacamba();
meuCaminhao.acelerar(30); // Agora pode acelerar

console.log('\n' + '='.repeat(60));
console.log('📊 INFORMAÇÕES FINAIS DOS VEÍCULOS 📊');
console.log('='.repeat(60));

console.log('\n🚗 Estado final do Carro:');
console.log(JSON.stringify(meuCarro.getInfo(), null, 2));

console.log('\n🏍️ Estado final da Moto:');
console.log(JSON.stringify(minhaMoto.getInfo(), null, 2));

console.log('\n🚛 Estado final do Caminhão:');
console.log(JSON.stringify(meuCaminhao.getInfo(), null, 2));

console.log('\n' + '='.repeat(60));
console.log('🎓 CONCEITOS DEMONSTRADOS 🎓');
console.log('='.repeat(60));

console.log(`
✅ ABSTRAÇÃO:
   - Classe abstrata 'Veiculo' define a estrutura comum
   - Métodos abstratos forçam implementação nas classes filhas

✅ HERANÇA:
   - Carro, Moto e Caminhão herdam de Veiculo
   - Compartilham métodos comuns (ligar, acelerar, frear, etc.)

✅ POLIMORFISMO:
   - Método 'buzinar()' tem comportamento diferente em cada classe
   - Método 'acelerar()' é sobrescrito com comportamentos específicos

✅ ENCAPSULAMENTO:
   - Propriedades privadas controladas por métodos públicos
   - Validações internas nos métodos

✅ INSTANCIAÇÃO:
   - 3 objetos criados com características específicas
   - Cada objeto mantém seu próprio estado
`);

console.log('\n' + '='.repeat(60));
console.log('🏁 DEMONSTRAÇÃO CONCLUÍDA! 🏁');
console.log('='.repeat(60));

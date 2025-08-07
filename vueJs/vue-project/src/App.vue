<script setup>
import { ref,reactive } from 'vue';

const nomeInput = ref(null);

const nome = "teste da silva";
const meuObj = {
  nome: "teste da silva",
  idade: 30,
  cidade: "São Paulo"
};

function dizOla(name){
  return `Olá, ${name}!`;
}

const enderecoImgBatman = "https://i.pinimg.com/736x/e5/6c/d4/e56cd40f8c4c7940c607cc9add343fdd.jpg"

const enderecoImgSuperman = "https://rollingstone.com.br/media/uploads/2024/03/james-gunn-revela-primeira-imagem-e-anuncia-novo-titulo-de-superman-legacy-foto-reproducaodc-comics.jpg"

const botaoDesabilitado = false;

const gostaBatman = false;
const gostaSuperman = true;


const estado = reactive({
  contador: 0,
  email: "",
  saldo: 5000,
  transferindo: 0,
  nomes: ["Ana", "Bia", "Carlos", "Daniel"],
  nomeAInserir: ""
})

function incrementar(){
  estado.contador++;
}

function decrementar(){
  estado.contador--;
}

function alteraEmail(evento){
  estado.email = evento.target.value;
}

function motraSaldoFuturo(){
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaValorTransferencia(){
  const { saldo, transferindo } = estado;
  return saldo >= transferindo;
}

function cadastraNome(){
  if(estado.nomeAInserir.length >= 3){
    estado.nomes.push(estado.nomeAInserir);
    nomeInput.value.value = "";
    estado.nomeAInserir = "";
  } else {
    alert("Nome deve ter no minimo 3 caracteres");
  }
}

</script>

<template>
  <h1>{{ dizOla("cucabeludo") }}</h1>
  <img v-if="gostaBatman" :src="enderecoImgBatman" alt="Batman">
  <img v-else-if="gostaSuperman" :src="enderecoImgSuperman" alt="Superman">

  <h2 v-else>não curte herois da DC</h2>

  <button :disabled="!botaoDesabilitado">enviar mensagem</button>

{{
  estado.contador
}}

<button @click="incrementar">+</button>
<button @click="decrementar">-</button>

<br>
<hr>

{{ estado.email }}

<input type="text" @keyup="alteraEmail" placeholder="Digite seu email">

<br>
<hr>

Saldo: {{ estado.saldo }} <br>
transferindo: {{ estado.transferindo }} <br>
Saldo depois da transferência: {{ motraSaldoFuturo() }} <br>

<input class="campo" :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir"/>

<button v-if ="!validaValorTransferencia()">Transferir</button>

<span v-else>Valor maior que o saldo</span>

<ul>
  <li v-for="nome in estado.nomes">{{ nome }}</li>
</ul>
<input ref="nomeInput" @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
<button @click="cadastraNome" type="button">Cadastrar nome</button>

</template>

<style scoped>

img{
  max-width: 200px;
}

.invalido{
  outline-color: red;
  border-color: red;
}

.campo{
  border: 1px solid black;
  padding: 8px;
  border-radius: 4px;
}

</style>

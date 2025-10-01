<script setup>
import { RouterLink } from 'vue-router';
import { useFlagStore } from '@/stores/flag';
import { useAppStore } from '@/stores/app';
import acerto from '@/assets/sound/sucess_sound.mp3';
import erro from '@/assets/sound/error_sound.wav';
import router from '@/router';
const somAcerto = new Audio(acerto);
const somErro = new Audio(erro);
const appStore = useAppStore();
const flagStore = useFlagStore();

let segundos = 0;
let minutos = 0;
appStore.sortearBandeiras(flagStore.flags);
appStore.pontos = 0
function verificarAcerto(id) {

  if (appStore.bandeiraEscolhida.id == id) {
    appStore.pontos++
    somAcerto.play();
    appStore.bandeirasSorteadas = [];
    appStore.sortearBandeiras(flagStore.flags);
  } else {
    somErro.play()
  }
};



function segundo() {
  segundos++;
  if (segundos == 30) {
   /* minutos++;
    segundos = 0;
    document.getElementById('minuto').innerHTML = minutos*/
    clearInterval(intervalo)
    router.push('/end')
  }

  document.getElementById('segundo').innerHTML = segundos

}

function sair() {
  clearInterval(intervalo);
  router.push('/')
}

var intervalo = setInterval(function () { segundo() }, 1000)
</script>

<template>
  <main>

    <div class="cron">
      Cronômetro
      <div class="tempo">
        <span id="minuto">00</span><span>:</span><span id="segundo">00</span>
      </div>
    </div>

    <h2>{{ appStore.bandeiraEscolhida.name }}</h2>
    <ul>
      <li v-for="bandeira in appStore.bandeirasSorteadas" :key="bandeira.id">
        <img :src="'flags/' + bandeira.image" alt="Imagem da Bandeira" @click="verificarAcerto(bandeira.id)">
      </li>
    </ul>

    <div>
      <p class="ponto">Pontuação: {{ appStore.pontos }}</p>
</div>
<div>
      <p @click="sair" class="router-link">Sair</p>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 20vh 6vw 20vh 6vw;
  text-align: center;
}

ul {
  display: grid;
  /* Transforma o container num grid */
  grid-template-columns: repeat(3, 2fr);
  /* 3 colunas de largura igual (1 fração do espaço) */
  grid-template-rows: repeat(3, auto);
  /* 3 linhas com altura automática */
  gap: 10px;
  /* Espaçamento entre os itens (opcional) */
  width: 100%;
  /* Para que o grid ocupe a largura disponível */
}

h2 {
  font-size: 2rem;
  background: #53b17572;
  color: #3E423F;
  margin-bottom: 25px;
  border-radius: 15px;
}

li {
  cursor: pointer;
}

div {
  background: #F2F3F2;
  border-radius: 15px;
  margin-bottom: 10px;
}

.cron {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  text-align: center;
  align-items: center;
}

.tempo {
  margin: auto 0;
}

ul {
  border-bottom: 2px solid #c5cccc ;
}

.ponto {
  font-size: 2rem;
  margin-bottom: 20px;
}

.router-link {
  font-size: 1.5rem;
  border-radius: 15px;
  background: #3E423F;
  color: #c5cccc;
}
</style>

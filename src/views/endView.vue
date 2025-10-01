<script setup>
import { useAppStore } from '@/stores/app';
import router from '@/router';

const appStore = useAppStore();

function sair() {
  router.push('/')
}
function novamente() {
  router.push('/flag-app')
}
</script>

<template>
  <main>
    <img src="../assets/image/final.png" alt="Acerto" style="margin-left: -50px;">
    <h1>Parabéns</h1>
    <p>Você obteve {{ appStore.pontos }} pontos!</p>
    <p @click="novamente" class="router-link">Jogar Novamente</p>
    <p @click="sair" class="router-link-sair">Sair</p>
  </main>
</template>


<style scoped>
main {
  text-align: center;
  padding-top: 10vh;
}

h1 {
  font-family: monospace;
  color: #3d3d3d;
  font-size: 3rem;
  padding-bottom: 20px;
  font-weight: 700;

}

p {
  margin: 0 auto;
  padding-bottom: 20px;
  color: #5D5D5D;
}

.router-link {
  cursor: pointer;
  font-size: 2rem;
  padding: 3vh 15vw;
  display: inline-block;
  background: #53B175;
  color: #fff9ff;
  border-radius: 15px;
}

.router-link-sair {
  cursor: pointer;
  font-size: 2rem;
  padding: 3vh 30vw;
  display: inline-block;
  color: #3d3d3d;
  border-radius: 15px;
}

</style>

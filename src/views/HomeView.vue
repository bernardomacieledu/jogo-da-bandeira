<script setup>
import { RouterLink } from 'vue-router'
import backgroundSound from '@/assets/sound/background_sound.wav';


const backSound = new Audio(backgroundSound)
backSound.play();

</script>

<template>
  <main>
    <h1>Encontre a bandeira</h1>
    <p>Indique a bandeira que corresponde ao país indicado</p>
    <router-link class="router-link" to="flag-app">Iniciar</router-link>
  </main>
</template>

<style scoped>
main {
  align-items: center;
  text-align: center;
  padding: 60vh 6vw 0 6vw;
  background: url("../assets/image/bandeiras.png") no-repeat;
  background-size: 100% auto;
}

h1 {
  font-family: monospace;
  color: #3d3d3d;
  font-size: 3rem;
  padding-bottom: 20px;
  font-weight: 700;

}

p {
  max-width: 60vw;
  margin: 0 auto;
  padding-bottom: 20px;
  color: #5D5D5D;
}

.router-link {
  font-size: 2rem;
  padding: 3vh 30vw;
  display: inline-block;
  background: #53B175;
  color: #fff9ff;
  border-radius: 15px;
}

</style>

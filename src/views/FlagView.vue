<script setup>
import { useFlagStore } from '@/stores/flag'
import { useAppStore } from '@/stores/app';
const appStore = useAppStore();
const flagStore = useFlagStore();
appStore.sortearBandeiras(flagStore.flags);

</script>

<template>
  <h2>{{ appStore.bandeiraEscolhida.name }}</h2>
  <ul>
    <li v-for="bandeira in appStore.bandeirasSorteadas" :key="bandeira.id">
      <img :src="'flags/'+bandeira.image" alt="Imagem da Bandeira">
    </li>
  </ul>
</template>

<style>

</style>

import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', () => {
  const bandeirasSorteadas = ref([])
  const quantidadeBandeiras = 9
  const bandeiraEscolhida = ref(null)
  const pontos = ref(0)
  

  function sortearBandeiras(bandeiras) {
    while(bandeirasSorteadas.value.length < quantidadeBandeiras){
      const elementoSorteio = Math.floor(Math.random() * 50);
      const posicao = bandeirasSorteadas.value.findIndex((x) => x.id === bandeiras[elementoSorteio].id);
      
      if (posicao == -1) {
        bandeirasSorteadas.value.push({...bandeiras[elementoSorteio]});
      }
    }
    const correta = Math.floor(Math.random() * quantidadeBandeiras);
    bandeiraEscolhida.value = bandeirasSorteadas.value[correta];
  }


  return { bandeirasSorteadas, sortearBandeiras, bandeiraEscolhida }
})

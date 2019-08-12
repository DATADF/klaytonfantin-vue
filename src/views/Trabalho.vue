<template>
  <div class="trabalhos">
    <section v-for="trabalho of trabalhos" :key="trabalho.id">
      <h1>{{ trabalho.titulo }} - {{ trabalho.id }}</h1>
      <img :src="trabalho.imagem" :alt="trabalho.titulo" :key="trabalho.id">
      <p>{{ trabalho.conteudo }}</p>
    </section>
  </div>
</template>


<script>

import Trabalho from '../services/trabalho'

export default {

  data(){
    return {
      trabalho: []
    }
  },

  async mounted(){
    try{
      Trabalho.Listar().then(resposta => {
        this.trabalho = resposta.data
      })
    } catch(e) {
      console.error(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 200px;
    height: auto;
  }
</style>
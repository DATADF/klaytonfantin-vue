<template>
  <div class="trabalhos">
    <article v-for="trabalho of trabalhos" :key="trabalho.id">
      <h1>{{ trabalho.titulo }} - {{ trabalho.id }}</h1>
      <img :src="trabalho.imagem" :alt="trabalho.titulo" :key="trabalho.id">
      <p>{{ trabalho.resumo }}</p>
      <router-link :to="`/trabalhos/${trabalho.slug}`">{{ trabalho.titulo }}</router-link>
    </article>
  </div>
</template>


<script>

import Trabalhos from '../services/trabalhos'

export default {

  data(){
    return {
      trabalhos: []
    }
  },

  async mounted(){
    try{
      Trabalhos.Listar().then(resposta => {
        this.trabalhos = resposta.data
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
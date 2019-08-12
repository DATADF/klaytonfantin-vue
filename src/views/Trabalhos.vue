<template>
  <div class="trabalhos">
    <article v-for="trabalho of trabalhos" :key="trabalho.id">
      <h1>{{ trabalho.titulo }} - {{ trabalho.id }}</h1>
      <p>{{ trabalho.imagem }}</p>
      <p>{{ trabalho.resumo }}</p>
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

  mounted(){
    Trabalhos.Listar().then(resposta => {
      this.trabalhos = resposta.data
    })
  }
}
</script>
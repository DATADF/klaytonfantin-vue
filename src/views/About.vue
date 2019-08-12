<template>
  <div class="about">
    <section v-for="about of about" :key="about.id">
      <h1>{{ about.titulo }} - {{ about.id }}</h1>
      <img :src="about.foto" :alt="about.titulo" :key="about.id">
      <p>{{ about.conteudo }}</p>
    </section>
  </div>
</template>


<script>

import About from '../services/about'

export default {

  data(){
    return {
      about: []
    }
  },

  async mounted(){
    try{
    About.Listar().then(resposta => {
      this.about = resposta.data
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
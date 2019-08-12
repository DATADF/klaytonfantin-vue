<template>
  <div class="about">
    <section v-for="about of about" :key="about.id">
      <h1>{{ about.titulo }} - {{ about.id }}</h1>
      <p>{{ about.foto }}</p>
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

  mounted(){
    About.Listar().then(resposta => {
      this.about = resposta.data
    })
  }
}
</script>
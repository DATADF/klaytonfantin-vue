<template>
  <div>
    <section v-for="about of about" :key="about.id">
      <h1>{{ about.titulo }} - Component</h1>
      <img :src="about.foto" :alt="about.titulo" :key="about.id">
      <p>{{ about.conteudo }}</p>
    </section>
  </div>
</template>

<script>
import About from '../services/about'

export default {
  name: 'About',

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  img {
    width: 200px;
    height: auto;
  }
</style>

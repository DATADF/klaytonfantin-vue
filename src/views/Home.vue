<template>
  <div class="home">
    <h1>Esta é a página de início.</h1>
    <Hero />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'home',
  components: {
    Hero,
    About
  }
}
</script>

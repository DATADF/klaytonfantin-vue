<template>
  <div class="home">
    <h1>Esta é a página de início.</h1>
    <Service />
  </div>
</template>

<script>
// @ is an alias to /src
import Service from '@/components/Service.vue'

export default {
  name: 'home',
  components: {
    Service
  }
}
</script>

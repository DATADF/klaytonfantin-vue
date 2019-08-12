<template>
  <div class="home">
    {{ info }}
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

import axios from 'axios'

export default {
  name: 'home',
  components: {
    Inicio
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get(`https://klaytonfantin.dev/wp-json/api/v1/servicos`)
      .then(response => (this.info = response.data))
  }
}
</script>

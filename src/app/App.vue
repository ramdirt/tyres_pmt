<template lang="pug">

the-header.container.mx-auto
main.container.mx-auto
  router-view

</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    TheHeader
  },
  created: function() {
    this.getUSDtoRUB()
    this.getProductsFromAPI()
  },
  methods: {
      ...mapActions('requestModule', ['getUSDtoRUB', 'getProductsFromAPI']),    
  }
}
</script>
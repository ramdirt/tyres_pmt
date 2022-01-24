<template lang="pug">

div.container
  the-header
  main
    router-view

</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    TheHeader
  },
  created: function() {
    this.getUSDtoRUB()
  },
  methods: {
      ...mapActions('requestModule', ['getUSDtoRUB']),    
  }
}
</script>
<template>
  <div class="container" v-cloak>
    <the-header v-cloak></the-header>
    <router-view />
  </div>

</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    TheHeader
  },
  methods: {
    ...mapActions([
      'getProductsFromAPI'
    ])
  },
  mounted() {
    this.getProductsFromAPI()
  },
  computed: {
    ...mapGetters([
      'filterTyres'
    ])
  }
}
</script>


<style>
[v-cloak] { display:none; }
</style>

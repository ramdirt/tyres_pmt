<template>
  <div class="container" v-cloak>
    <the-header v-cloak></the-header>
    <router-view />
  </div>

</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import axios from 'axios'

export default {
  data() {
    return {
      url: 'https://tyres-pmt-default-rtdb.europe-west1.firebasedatabase.app/tyres.json',
    }
  },
  components: {
    TheHeader
  },
  methods: {
    async loadCatalog() {
       const res = await axios.get(this.url)
       this.$store.state.tyres = res.data
    }
  },
  mounted() {
    this.loadCatalog()
  }
}
</script>


<style>
[v-cloak] { display:none; }
</style>

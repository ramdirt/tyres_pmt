<template>
  <div class="container">
    <the-header></the-header>
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
      tyres: []
    }
  },
  components: {
    TheHeader
  },
  methods: {
    async loadCatalog() {
       const res = await axios.get(this.url)
       this.tyres.push(res.data[0])
       console.log(this.tyres)
    }
  },
  mounted() {
    this.loadCatalog()
  }
}
</script>


<style>
</style>

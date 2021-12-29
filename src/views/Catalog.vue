<template>
  <the-filter></the-filter>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-5 g-3 mt-2 mt-sm-0">
        <app-card
          v-for="tyre in products"
          :key="tyre.id"
          :tyre="tyre"
        ></app-card>
  </div>
</template>

<script>
import AppCard from '../components/AppCard.vue'
import TheFilter from '../components/TheFilter.vue'
import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      AppCard, TheFilter
    },
    methods: {
      ...mapActions('requestModule', ['getProductsFromAPI'])
    },
    computed: {
      ...mapGetters(['products'])
    },
    
    mounted() {
      this.getProductsFromAPI()
    },
  }
</script>

<style>
</style>
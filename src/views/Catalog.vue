<template>
  <the-filter></the-filter>
  <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3 mt-2 mt-sm-0 mb-4">
        <app-card
          v-for="tyre in filterProducts.slice(0, downloadLimit)"
          :key="tyre.id"
          :tyre="tyre"
        ></app-card>

        
  </div>
  <div class="text-center mt-5" v-if="downloadLimit < 10">
    <button class="btn btn-outline-secondary text-center" @click="changeLimitDownload(5)">Загрузить еще</button>
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
      ...mapActions('requestModule', ['getProductsFromAPI']),
      ...mapActions(['changeLimitDownload']),

      loadingOnScroll() {
        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight + 200 > document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            this.changeLimitDownload(5)
          }
        }
      },
    },
    computed: {
      ...mapGetters('filterModule', ['filterProducts']),
      ...mapGetters(['downloadLimit']),
    },
    mounted() {
      this.getProductsFromAPI(),
      this.loadingOnScroll()
    },
  }
</script>

<style>
</style>
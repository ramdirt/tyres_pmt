<template>

  <the-filter></the-filter>
  
  <component :is="'AppTable'" :products="filterProducts.slice(0, downloadLimit)"></component>

  <div class="text-center mt-5" v-if="downloadLimit < 10">
    <button class="btn btn-outline-secondary text-center" @click="changeLimitDownload(15)">Загрузить еще</button>
  </div>

</template>

<script>
import AppCard from '../components/AppCard.vue'
import TheFilter from '../components/TheFilter.vue'
import AppTable from '../components/AppTable.vue'

import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      AppCard, TheFilter, AppTable,
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
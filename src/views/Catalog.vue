<template>

  <the-filter @viewCatalog="changeTypeProductDisplay"></the-filter>

  <component :is="productDisplayType" :products="filterProducts.slice(0, downloadLimit)"></component>

  <div class="text-center mt-5" v-if="downloadLimit < 10">
    <button class="btn btn-outline-secondary text-center" @click="changeLimitDownload(15)">Загрузить еще</button>
  </div>

</template>

<script>
import AppCard from '../components/AppCard.vue'
import TheFilter from '../components/TheFilter.vue'
import AppTable from '../components/AppTable.vue'
import AppList from '../components/AppList.vue'

import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        productDisplayType: 'AppTable'
      }
    },
    created: function () {
      this.getProductsFromAPI()
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
      
      changeTypeProductDisplay() {
          if(this.productDisplayType == 'AppTable') {
            this.productDisplayType = 'AppList'
          } else {
            this.productDisplayType = 'AppTable'
          }
      }
    },
    computed: {
      ...mapGetters('filterModule', ['filterProducts']),
      ...mapGetters(['downloadLimit']),
    },
    mounted() {
      this.loadingOnScroll()
    },
    components: {
      AppCard, TheFilter, AppTable, AppList
    },
  }
</script>

<style>
</style>
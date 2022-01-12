<template>

  <the-filter></the-filter>
  <div class="row">
    <div class="col-1 opacity-25 pr-2" @click="changeTypeProductDisplay" style="cursor: pointer">
      <small>Вид</small>
    </div>
    <div class="col-11"><hr /></div>
  </div>
  
  <component :is="productDisplayType" :products="filterProducts.slice(0, downloadLimit)"></component>
  <hr @click="changeTypeProductDisplay" />
  <div class="text-center mt-2" v-if="downloadLimit < 10">
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
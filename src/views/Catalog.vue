<template lang="pug">

the-filter

div.row
  div.col-1.opacity-25.pr-2(
    style='cursor: pointer',
    @click='changeTypeProductDisplay')
    small Вид
  div.col-11
    hr

component(
  :is='productDisplayType',
  :products='filterProducts.slice(0, downloadLimit)')

div.text-center.mt-2(v-if='downloadLimit < 10')
  button.btn.btn-outline-secondary.text-center(
    @click='changeLimitDownload(15)') Загрузить еще

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
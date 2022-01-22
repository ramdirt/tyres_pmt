<template lang="pug">
header.row.py-3.justify-content-between.align-items-center.flex-nowrap

  div.col-5.col-sm-5.col-md-3
    router-link(to='/')
      img.rounded.float-start(:src="'/assets/index/logo.png'" style='width: 100%' alt='PMT Tyres')

  div.col.text-end
    router-link.btn.btn-outline-secondary.mx-2(to='/catalog' v-if="$route.name == 'Basket'")  Вернутся в каталог
    router-link.btn.btn-warning.position-relative(to='/basket' v-if="$route.name != 'Basket'")
      span.d-none.d-sm-block.d-md-block.d-lg-block
        | Корзина 
        i.fas.fa-shopping-basket
      span.d-block.d-sm-none.d-md-none.d-lg-none
        i.fas.fa-shopping-basket
      span.position-absolute.top-0.start-100.translate-middle.badge.rounded-pill.bg-danger(v-if='numberItemsInCart > 0')
        | {{numberItemsInCart}}

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('basketModule', ['numberItemsInCart'])
  },
}
</script>

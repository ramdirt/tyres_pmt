<template lang="pug">
header.flex.flex-row.justify-between.items-center.mt-1

  div.my-2.mx-3
    router-link(to='/')
      img.rounded.float-start.w-52(:src="'/assets/index/logo.png'" alt='PMT Tyres')

  div.mr-2
    router-link(to='/catalog' v-if="$route.name == 'Basket'")  Вернутся в каталог
    router-link.btn(to='/basket' v-if="$route.name != 'Basket'")
      span
        | Корзина 
      span.btn-badge(v-if='numberItemsInCart > 0')
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

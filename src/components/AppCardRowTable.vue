<template lang="pug">
tr
  td(@click='$router.push(`/product/${ product.id }`)', style='cursor: pointer') {{ product.title }}
  td.text-start {{ product.price * $store.state.usd }}₽
  td.text-end
    .btn-group.m-1
      button.btn.btn-outline-secondary.btn-sm(
        v-if='countItemInBasket(product.id) > 0',
        @click="actionsBasket({action: 'decrease', id: +product.id})")
            i.fas.fa-minus

      router-link.btn.btn-outline-secondary.btn-sm(:to='`/product/${product.id}`')
        span.d-none.d-sm-block.d-md-block.d-lg-block Подробнее
        span.d-block.d-sm-none.d-md-none.d-lg-none
            i.fas.fa-info-circle

      button.btn.btn-outline-secondary.btn-sm(style='overflow-wrap: break-word;', @click="actionsBasket({action: 'add', id: +product.id})")

        span.d-none.d-sm-block.d-md-block.d-lg-block В корзину
          span.position-absolute.top-0.start-100.translate-middle.badge.rounded-pill.bg-danger
            span(v-if='countItemInBasket(product.id) != 0') {{ countItemInBasket(product.id) }}

        span.d-block.d-sm-none.d-md-none.d-lg-none
          i.fas.fa-shopping-basket
          span.position-absolute.top-0.start-100.translate-middle.badge.rounded-pill.bg-danger
            span(v-if='countItemInBasket(product.id) != 0') {{ countItemInBasket(product.id) }}

</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
props: ['product'],
methods: {
    ...mapActions('basketModule', ['actionsBasket']),
},
computed: {
    ...mapGetters('basketModule', ['countItemInBasket'])
}
}

</script>

<style>

</style>
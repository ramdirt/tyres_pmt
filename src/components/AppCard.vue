<template>
  <div class="col" v-cloak>
    <div class="card m-1 h-100">

      <img :src="`./assets/img/small/${this.product.id}.jpg`" class="card-img-top" :alt=product.title>

      <div class="card-body" >
          <h5 class="cart-title">{{ product.title }} </h5>
          <p class="cart-text">{{ product.price * $store.state.usd }}₽</p>
          <span :class="['badge', colorHardness]">{{ product.meta.hardness_compound }}</span>
      </div>

      <div class="card-footer text-center">
          <div class="btn-group">
            <router-link :to="`/product/${product.id}`" class="btn btn-sm btn-outline-secondary">Подробнее</router-link>
            <button class="btn btn-sm btn-outline-secondary" @click="actionsBasket({action: 'add', id: +product.id})">В корзину</button>
          </div>
      </div>

    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['product'],
  methods: {
    ...mapActions('basketModule', ['actionsBasket'])

  },
  computed: {
    colorHardness() {
      const hardness_compound = this.product.meta.hardness_compound
      if (hardness_compound <= 50) {
        return 'bg-success'
      } else if (hardness_compound >= 51 && hardness_compound <= 59) {
        return 'bg-warning'
      } else if (hardness_compound >= 60) {
        return 'bg-danger'
      } else {
        return 'bg-primary'
      }
    }

  },
}
</script>

<style>
  [v-cloak] .v-cloak--block {
  display: block!important;
}

[v-cloak] .v-cloak--inline {
  display: inline!important;
}

[v-cloak] .v-cloak--inlineBlock {
  display: inline-block!important;
}

[v-cloak] .v-cloak--hidden {
  display: none!important;
}

[v-cloak] .v-cloak--invisible {
  visibility: hidden!important;
}

.v-cloak--block,
.v-cloak--inline,
.v-cloak--inlineBlock {
  display: none!important;
}
</style>
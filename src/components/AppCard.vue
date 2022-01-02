<template>
  <div class="col" v-cloak>
    <div class="card m-1 h-100">
      <img :src="`./assets/img/small/${this.tyre.id}.jpg`" class="card-img-top" :alt=tyre.title>
      <div class="card-body" >
          <h5 class="cart-title">{{ tyre.title }} </h5>
          <p class="cart-text">{{ tyre.price * $store.state.usd }}₽</p>
          <span :class="['badge', colorHardness]">{{ tyre.meta.hardness_compound }}</span>
          
          
      </div>
      <div class="card-footer text-center">
          <div class="btn-group">
            <router-link :to="`/product/${tyre.id}`" class="btn btn-sm btn-outline-secondary">Подробнее</router-link>
            <button class="btn btn-sm btn-outline-secondary" @click="actionsBasket({action: 'add', id: +tyre.id})">В корзину</button>
          </div>
          
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tyre'],
  methods: {
    ...mapActions('basketModule', ['actionsBasket'])
  },
  computed: {
    colorHardness() {
      const hardness_compound = this.tyre.meta.hardness_compound
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
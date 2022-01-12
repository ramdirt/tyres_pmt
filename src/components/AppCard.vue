<template>
  <div class="col" v-cloak>
    <div class="card m-1 h-100">

      <img :src="`./assets/img/small/${this.product.id}.jpg`" class="card-img-top" :alt=product.title>

      <div class="card-body" >
          <h5 class="cart-text">{{ product.title }} </h5>

          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">

              <router-link :to="`/product/${product.id}`" class="btn btn-sm btn-outline-secondary">Подробнее</router-link>

              <button
                  v-if="countItemInBasket(product.id) > 0"
                  class="btn btn-outline-secondary btn-sm"
                  @click="actionsBasket({action: 'decrease', id: +product.id})">
                      <i class="fas fa-minus"></i>
              </button>

              <button class="btn btn-sm btn-outline-secondary" @click="actionsBasket({action: 'add', id: +product.id})">
                {{ product.price * $store.state.usd }}₽
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  <span v-if="countItemInBasket(product.id) != 0">
                    {{ countItemInBasket(product.id) }}
                  </span>
                </span>
              </button>

            </div>
          </div>
      </div>




    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['product'],
  methods: {
    ...mapActions('basketModule', ['actionsBasket'])

  },
  computed: {
      ...mapGetters('basketModule', ['countItemInBasket'])
  }
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
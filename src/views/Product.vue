<template>
  <div class="row mt-5">
      <div class="col">
          <img v-bind:src="`../assets/img/${this.$route.params.id}.jpg`" class="img-fluid img-thumbnail" :alt=product.title >
      </div>
      <div class="col" v-if="product">
          <h1 class="display-6">{{ product.title }}</h1>
          <p class="h2 mt-2">{{ product.price * $store.state.usd }} рублей</p>
          <p class="lead">{{ product.description }}</p>
          <div class="card">
            <ul class="list-group list-group-flush" v-if="product.meta">
                <li class="list-group-item">Рекомендуемое давление: {{ product.meta.pressure }}</li>
                <li class="list-group-item">Ширина резины: {{ product.meta.tyre_width }} мм.</li>
                <li class="list-group-item">Условия использования: {{ product.meta.use_pattern  }} </li>
                <li class="list-group-item">Жесткость: {{ product.meta.use_compound }}</li>
                <li class="list-group-item">Тип протектора: {{ product.meta.tread_pattern }}</li>
                <li class="list-group-item">Ширина обода: {{ product.meta.rim_width }}</li>
                <li class="list-group-item">Ширина обода: {{ product.meta.hardness_compound }}</li>
            </ul>
          </div>
          <button class="btn btn-danger mt-3">Добавить в корзину</button>
      </div>
      <div v-else>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Загрузка...</span>
        </div>
      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
  ...mapActions('requestModule', ['getProductsFromAPI'])
  },
  created: function() {
    this.getProductsFromAPI(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['product'])
  },
  watch: {
        $route: {
            immediate: true,
            handler(to, from) {
              let title = new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve(this.product.title);
                  }, 2000);
              })
              .then(
                result => {
                  document.title = 'Покрышка ' + result
                }
              )

              
            }
        },
  }
}
</script>

<style>

</style>
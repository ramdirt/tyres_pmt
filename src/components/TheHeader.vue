<template>
  <header class="row py-3 justify-content-between align-items-center flex-nowrap">

    <div class="col-5 col-sm-5 col-md-3">
      <router-link to="/">
        <img :src="'./assets/index/logo.png'" class="rounded float-start" style="width: 100%" alt="PMT Tyres">
      </router-link>  
    </div>

    <div class="col text-end">
      <router-link to="/catalog" class="btn btn-outline-secondary mx-2" v-if="$route.name == 'Basket'"> Вернутся в каталог</router-link>
      <router-link to="/basket" class="btn btn-warning position-relative" v-if="$route.name != 'Basket'">
        Корзина
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" v-if="numberItemsInCart > 0">
          {{numberItemsInCart}}
        </span>
        </router-link>
    </div>

  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('basketModule', ['numberItemsInCart'])
  },
}

</script>

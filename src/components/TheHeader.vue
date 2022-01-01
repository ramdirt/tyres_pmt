<template>
  <header class="row py-3 justify-content-between align-items-center flex-nowrap">

    <div class="col-5 col-sm-5 col-md-3">
      <router-link to="/" class="">
        <img :src="'./assets/index/logo.png'" class="rounded float-start" style="width: 100%" alt="PMT Tyres">
      </router-link>  
    </div>

    <div class="col text-end">
      <router-link to="/catalog" class="btn btn-outline-secondary mx-2" v-if="$route.name == 'Basket'"> Вернутся в каталог</router-link>
      <router-link to="/basket" class="btn btn-warning " v-if="$route.name != 'Basket'">Корзина</router-link>
    </div>

  </header>
</template>

<script>
  export default {

  }
</script>

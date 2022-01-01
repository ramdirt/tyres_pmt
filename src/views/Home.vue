<template>
  <div class="home">
    <div
      class="p-4 p-md-5 mb-4 text-white rounded bg-dark"
      :style="`background: url('./assets/index/index.png') no-repeat center center / cover`"
    >
      <div class="col-md-12 px-0">
      <h1 class="display-6 fst-italic">PMT - Высококачественные профессиональные покрышки для спорта. </h1>
      <p class="lead my-3">Мы предоставляем консультационные услуги по выбору составов и давления в покрышках для всех возможных условий.</p>
      <router-link class="btn btn-lg btn-warning" to="/catalog">Перейте в каталог</router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',

}
</script>

<style scoped>

</style>
<template>
  <header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills">
      <li class="nav-item text-danger"><router-link to="/" class="nav-link text-dark">Главная</router-link></li>
      <li class="nav-item"><router-link to="/catalog" class="nav-link text-dark">Каталог</router-link></li>
      <li class="nav-item"><router-link to="/product/1" class="nav-link text-dark">Карточка</router-link></li>
    </ul>
  </header>
</template>

<script>
  export default {

  }
</script>

<template>
  <div class="row mt-5">
      <div class="col">
          <img v-bind:src="`../assets/img/${this.$route.params.id}.jpg`" class="img-fluid img-thumbnail" alt="...">
      </div>
      <div class="col">
          <button class="btn btn-outline-dark btn-sm">Обратно в каталог</button>
          <h1 class="display-6 mt-2">Название</h1>
          <p class="lead">Описание</p>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">1 характеристика</li>
                <li class="list-group-item">1 характеристика</li>
                <li class="list-group-item">1 характеристика</li>
            </ul>
          </div>
          <button class="btn btn-danger mt-3">Добавить в корзину</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
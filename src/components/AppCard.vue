<template>
  <div class="card" style="width: 18rem;">
    <img v-bind:src=imgURL class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">Покрышка {{ tyre.title }}</h5>
        <p class="card-text">{{ tyre.description }}</p>
        <p class="card-text">Стоимость: {{ tyre.price * $store.state.usd }} руб.</p>
        <p class="card-text">Предназначено для техники: {{ tyre.type }}</p>
        <p class="card-text">Жесткость по Шору: {{ tyre.meta.hardness_compound }}</p>
        <p class="card-text">Тим использования: {{ tyre.meta.use_compound }}</p>
        <p class="card-text">Рекомендуемое давление: {{ tyre.meta.pressure }}</p>
        <p class="card-text">Тип рисунка: {{ tyre.meta.tread_pattern }}</p>
        <p class="card-text">Тип погоды: {{ tyre.meta.use_pattern }}</p>
        <p class="card-text">Диаметер покрышки: {{ tyre.meta.tyre_diameter }}</p>
        <p class="card-text">Ширина покрышки: {{ tyre.meta.tyre_width }}</p>
        <p class="card-text">Угол корда: {{ tyre.meta.sidewall }}</p>
        <p class="card-text">Ширина обода: {{ tyre.meta.rim_width }}</p>
        <a href="#" class="btn btn-primary">Подробнее</a>
    </div>
</div>
</template>

<script>
export default {
  props: ['tyre'],
  data() {
    return {
    }
  },
  computed: {
    imgURL() {
      return `./assets/img/small/${this.tyre.id}.jpg`
    }
  }
}
</script>

<style>

</style>
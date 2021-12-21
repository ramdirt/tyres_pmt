<template>
  <div class="col" v-cloak>
    <div class="card m-1 h-100">
      <img v-bind:src=imgURL class="card-img-top" :alt=tyre.title>
      <div class="card-body" >
          <h5 class="card-title">Покрышка {{ tyre.title }}</h5>
          <p class="card-text">{{ tyre.type }}</p>
          <p class="card-text">Жесткость по Шору: {{ tyre.meta.hardness_compound }}</p>
      </div>
      <div class="card-footer text-center">
          <p class="card-text">Стоимость: {{ tyre.price * $store.state.usd }} руб.</p>
          <div class="btn-group">
            <a href="#" class="btn btn-sm btn-outline-secondary">Подробнее</a>
            <a href="#" class="btn btn-sm btn-outline-secondary">В корзину</a>
          </div>
          
      </div>
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
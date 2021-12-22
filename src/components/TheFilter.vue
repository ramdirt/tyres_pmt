<template>
<div>
  <div class="card m-1 h-100">
    <div class="card-body" >
        <div>
          <h5 class="card-title">Размер покрышки</h5>
          <div class="btn-group mb-2">
            <button
              href="#"
              :class="['btn', 'btn-sm', 'btn-outline-secondary', {'btn-warning': diameter == filter}]"
              v-for="filter in $store.getters.generateUniqueValueParameters.tyre_diameter"
              :key="filter.id"
              @click.prevent="changeDiameter(filter)"
              >
              {{filter}}
            </button>
            <button href="#" class="btn btn-sm btn-outline-secondary" @click.prevent="changeDiameter('')">Все</button>
          </div>
        </div>
        <div>
          <h5 class="card-title">Жесткость по Шору</h5>
          <div class="btn-group">
            <button
              href="#"
              :class="['btn', 'btn-sm', 'btn-outline-secondary', {'btn-warning': shore == filter}]"
              v-for="filter in $store.getters.generateUniqueValueParameters.hardness_compound"
              :key="filter.id"
              @click.prevent="changeShore(filter)"
              >
              {{filter}}
            </button>
            <button href="#" class="btn btn-sm btn-outline-secondary" @click.prevent="changeShore('')">Все</button>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      diameter: '',
      shore: ''
    }
  },
  methods: {
    changeDiameter(diameter) {
      this.diameter = diameter
      this.viewType()
    },
    changeShore(shore) {
      this.shore = shore
      this.viewType()
    },
    viewType() {
      this.$store.commit('changeFilter', { diameter: this.diameter, shore: this.shore})
    }
  }
}
</script>

<style>

</style>
<template>
<div>
  <div class="card m-1 h-100">
    <div class="card-body" >
        <the-filter-item title="Размер покрышки" filterName="tyre_diameter" @filterValue="changeDiameter"></the-filter-item>
        <the-filter-item title="Жесткость по Шору" filterName="hardness_compound" @filterValue="changeShore"></the-filter-item>

        <div class="btn-group mb-2">
          <button class="btn btn-outline-secondary btn-sm" @click="this.$emit('viewCatalog')">Поменять вид</button>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import TheFilterItem from '../components/TheFilterItem.vue'
import { mapMutations} from 'vuex'

export default {
  emits: ['viewCatalog'],
  data() {
    return {
      diameter: '',
      shore: '',
    }
  },
  methods: {
    ...mapMutations('filterModule', ['changeFilter']),
    changeDiameter(diameter) {
      this.diameter = diameter
      this.viewType()
    },
    changeShore(shore) {
      this.shore = shore
      this.viewType()
    },
    viewType() {
      this.$store.commit('filterModule/changeFilter', { diameter: this.diameter, shore: this.shore})
    }
  },
  components: {
    TheFilterItem
  }
}
</script>

<style>

</style>
<template>
<div>
  <div class="row justify-content-start align-items-end">
        <the-filter-item title="Размер покрышки" filterName="tyre_diameter" @filterValue="changeDiameter"></the-filter-item>
        <the-filter-item title="Жесткость по Шору" filterName="hardness_compound" @filterValue="changeShore"></the-filter-item>
  </div>
</div>
</template>

<script>
import TheFilterItem from '../components/TheFilterItem.vue'
import { mapMutations} from 'vuex'

export default {
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
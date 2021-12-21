<template>
  <the-filter></the-filter>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-2 mt-sm-0">
        <app-card
          v-for="tyre in this.$store.getters.newTyres"
          :key="tyre.id"
          :tyre="tyre"
        ></app-card>
  </div>
</template>

<script>
import AppCard from '../components/AppCard.vue'
import TheFilter from '../components/TheFilter.vue'

  export default {
    components: {
      AppCard, TheFilter
    },
  }
</script>

<style>
</style>
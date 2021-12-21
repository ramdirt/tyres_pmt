<template>
  <div class="mt-5">
    <app-card
      v-for="tyre in this.$store.getters.newTyres"
      :key="tyre.id"
      :tyre="tyre"
    ></app-card>
  </div>
</template>

<script>
import AppCard from '../components/AppCard.vue'

  export default {
    components: {
      AppCard
    },
  }
</script>

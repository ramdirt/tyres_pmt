<template>
  <div>
    <h1>This is an about page</h1>
    <app-card></app-card>
    <p>{{ $store.state.counter }}</p>
  </div>
</template>

<script>
import AppCard from '../components/AppCard.vue'

  export default {
    components: {
      AppCard
    }
  }
</script>

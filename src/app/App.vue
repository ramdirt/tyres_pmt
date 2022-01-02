<template>
  <div class="container" v-cloak>
    <the-header v-cloak></the-header>
    <main>
      <router-view />
    </main>
    
  </div>

</template>

<script>
import TheHeader from '../components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
}
</script>


<style>
[v-cloak] { display:none; }
</style>

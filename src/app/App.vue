<template lang="pug">

div.container
  the-header
  main
    router-view

</template>

<script>
import TheHeader from '../components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
}
</script>
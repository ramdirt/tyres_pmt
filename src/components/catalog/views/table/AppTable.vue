<template lang="pug">
table.table.table-hover.table-striped
  thead
    tr
      th Название
      th Стоимость
  tbody
    app-table-row(
      v-for='(product, index) in products',
      :key='index',
      :product='product')

</template>

<script>
import { mapGetters } from 'vuex'
import AppTableRow from './AppTableRow.vue'

export default {
  props: ['products'],
  components: {
      AppTableRow
  },
  computed: {
      ...mapGetters('filterModule',['generateNameParameters',]),
  }
}
</script>

<style>

</style>
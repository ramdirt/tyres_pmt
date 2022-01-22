<template lang="pug">
table.table.table-hover.table-striped
  thead
    tr
      th Название
      th Стоимость
  tbody
    app-card-row-table(
      v-for='(product, index) in products',
      :key='index',
      :product='product')

</template>

<script>
import { mapGetters } from 'vuex'
import AppCardRowTable from '../card/AppCardRowTable.vue'

export default {
data() {
    return {

    }
},
props: ['products'],
components: {
    AppCardRowTable
},
computed: {
    ...mapGetters('filterModule',['generateNameParameters',]),
}
}
</script>

<style>

</style>
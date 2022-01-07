<template>
<table class="table table-hover table-striped" >
  <thead>
    <tr>
      <th>Название</th>
      <th>Стоимость</th>
    </tr>
  </thead>
  <tbody>
        <app-card-row-table
           v-for="(product, index) in products"
          :key="index"
          :product="product"        
        ></app-card-row-table>
  </tbody>
</table>
</template>

<script>
import { mapGetters } from 'vuex'
import AppCardRowTable from './AppCardRowTable.vue'

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
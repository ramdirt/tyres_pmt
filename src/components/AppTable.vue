<template>
<table class="table table-hover table-striped" >
  <thead>
    <tr>
      <th scope="col">Название</th>
      <th scope="col">Стоимость</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
        <component :is="'AppCardRowTable'"
           v-for="(product, index) in products"
          :key="index"
          :product="product"        
        ></component>
  </tbody>
</table>
</template>

<script>
import { mapGetters } from 'vuex'
import AppCardRowTable from '../components/AppCardRowTable.vue'

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
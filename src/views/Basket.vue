<template>
<div class="row mt-5 justify-content-center row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div class="col-sm-6">
        <the-basket-item
        v-for="product in basket"
        :key="product.id"
        :product="product"
        ></the-basket-item>
    </div>

    <div class="col-sm-6 text-center ">
        <div class="row justify-content-center">
            <div class="card" style="width: 18rem;">
                
                <div class="card-body text-center">
                    <p>К оплате: {{ totalBasketValue }} рублей</p>
                    <router-link to="/ordering" class="btn btn-danger">Перейти к оформлению</router-link>
                </div>
            </div>
        </div>

    </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
import TheBasketItem from '../components/TheBasketItem.vue'

export default {
    computed: {
      ...mapGetters('basketModule', ['basket', 'totalBasketValue'])
    },
    components: {
        TheBasketItem
    }

}
</script>

<style>

</style>
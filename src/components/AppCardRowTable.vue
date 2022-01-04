<template>
    <tr>
        <td
            @click="$router.push(`/product/${ product.id }`)"
            style="cursor: pointer"
        >{{ product.title }}</td>
        <td>{{ product.price * $store.state.usd }}₽</td>
        <td>
          <div class="btn-group mb-2">

                <router-link
                    :to="`/product/${product.id}`"
                    class="btn btn-outline-secondary btn-sm ">
                        <span class="d-none d-sm-block d-md-block d-lg-block">подробнее</span>
                        <span class="d-block d-sm-none d-md-none d-lg-none"><i class="fas fa-info-circle"></i></span>
                </router-link>

                <button
                    class="btn btn-outline-secondary btn-sm"
                    @click="actionsBasket({action: 'add', id: +product.id})">
                        <span class="d-none d-sm-block d-md-block d-lg-block">в корзину</span>
                        <span class="d-block d-sm-none d-md-none d-lg-none"><i class="fas fa-shopping-basket"></i></span> 
                </button>

            </div>
        </td>
    </tr>
</template>

<script>
import {mapActions} from 'vuex'

export default {
props: ['product'],
methods: {
...mapActions('basketModule', ['actionsBasket'])
},
}

</script>

<style>

</style>
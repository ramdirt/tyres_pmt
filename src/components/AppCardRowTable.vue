<template>
    <tr>
        <td
            @click="$router.push(`/product/${ product.id }`)"
            style="cursor: pointer"
        >{{ product.title }}</td>
        <td class="text-end">{{ product.price * $store.state.usd }}₽</td>
        <td class="text-end">
          <div class="btn-group m-1">

                <button
                    v-if="countItemInBasket(product.id) > 0"
                    class="btn btn-outline-secondary btn-sm"
                    @click="actionsBasket({action: 'decrease', id: +product.id})">
                        <i class="fas fa-minus"></i>
                </button>


                <router-link
                    :to="`/product/${product.id}`"
                    class="btn btn-outline-secondary btn-sm ">
                        <span class="d-none d-sm-block d-md-block d-lg-block">подробнее</span>
                        <span class="d-block d-sm-none d-md-none d-lg-none"><i class="fas fa-info-circle"></i></span>
                </router-link>

                <button
                    class="btn btn-outline-secondary btn-sm"
                    style="overflow-wrap: break-word;"
                    @click="actionsBasket({action: 'add', id: +product.id})">
                        <span class="d-none d-sm-block d-md-block d-lg-block">в корзину
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <span v-if="countItemInBasket(product.id) != 0">
                                    {{ countItemInBasket(product.id) }}
                                </span>
                            </span>
                        </span>
                        <span class="d-block d-sm-none d-md-none d-lg-none">
                            <i class="fas fa-shopping-basket"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <span v-if="countItemInBasket(product.id) != 0">
                                    {{ countItemInBasket(product.id) }}
                                </span>
                            </span>
                        </span> 
                </button>

            </div>
        </td>
    </tr>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
props: ['product'],
methods: {
    ...mapActions('basketModule', ['actionsBasket']),
},
computed: {
    ...mapGetters('basketModule', ['countItemInBasket'])
}
}

</script>

<style>

</style>
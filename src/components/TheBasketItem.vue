<template>
    <div class="row mb-5 justify-content-around">
        <div class="col-5 text-end">
            <img v-bind:src="`../assets/img/small/1.jpg`" class="img-fluid " alt="" style="max-width: 100px;">
        </div>
        <div class="col-7 text-start">
            <h5 class="lead">{{ product.title }}</h5>
            <p class="">
                {{ product.price * $store.state.usd * product.quantity }} ₽
                <small class="text-muted">
                    ({{ product.quantity }} х {{ product.price * $store.state.usd }} ₽)
                </small>
            </p>
            <p class=""></p>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="actionsBasket({action: 'decrease', id: product.id})">-</button>
                <button type="button" class="btn btn-sm btn-outline-secondary" disabled>{{ product.quantity }}</button>
                <button type="button" class="btn btn-sm btn-outline-secondary" @click="actionsBasket({action: 'increase', id: product.id})">+</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: ['product'],
    methods: {
        ...mapActions([
        'actionsBasket'
        ])
    },

}
</script>

<style>

</style>
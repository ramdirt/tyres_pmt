<template>
<div>
    <h5 class="card-title">Размер покрышки</h5>
    <div class="btn-group mb-2">
    <button
        :class="['btn', 'btn-sm', 'btn-outline-secondary', {'btn-warning': diameter == filter}]"
        v-for="filter in $store.getters.generateUniqueValueParameters.tyre_diameter"
        :key="filter.id"
        @click.prevent="changeDiameter(filter)"
    >{{filter}}
    </button>
    <button
        class="btn btn-sm btn-outline-secondary"
        @click.prevent="changeDiameter('')"
    >Все</button>
    </div>
</div>
</template>

<script>
export default {
    props: ['title', 'filterName'],
    methods: {
        changeFilterParameter
    }
}
</script>

<style>

</style>
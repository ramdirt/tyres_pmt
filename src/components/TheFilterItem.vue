<template>
<div>
    <h5 class="card-title">{{ title }}</h5>
    <div class="btn-group mb-2">
    <button
        :class="['btn', 'btn-sm', 'btn-outline-secondary', {'btn-warning': parameter == filter}]"
        v-for="filter in generateUniqueValueParameters[filterName]"
        :key="filter.id"
        @click.prevent="activeFilter(filter)"
    >{{filter}}
    </button>
    <button
        class="btn btn-sm btn-outline-secondary"
        @click.prevent="activeFilter('')"
    >Все</button>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['title', 'filterName'],
    emits: ['filterValue'],
    data() {
        return {
            parameter: ''
        }
    },
    methods: {
        activeFilter(filter) {
            this.parameter = filter
            this.$emit('filterValue', filter)
        }
    },
    computed: {
        ...mapGetters('filterModule', ['generateUniqueValueParameters'])
    },
    
}
</script>

<style>

</style>
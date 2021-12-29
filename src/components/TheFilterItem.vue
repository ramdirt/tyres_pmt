<template>
<div>
    <h5 class="card-title">{{ title }}</h5>
    <div class="btn-group mb-2">
    <button
        class = "btn btn-sm btn-outline-secondary"
        :class="activeElement == filter ? 'btn-warning text-dark':''"
        v-for="(filter, index) in generateUniqueValueParameters[filterName]"
        some
        :key="index"
        @click.prevent="activeFilter(filter)"
        :disabled="numberOfSearchResults(filterName, filter) < 1"
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
            activeElement: '',
        }
    },
    methods: {
        activeFilter(filter) {      
            if (this.activeElement != filter) {
                this.activeElement = filter
                this.$emit('filterValue', filter)     
            } else if (this.activeElement == filter) {
                this.activeElement = ''
                this.$emit('filterValue', '') 
            } else {
                this.$emit('filterValue', '')
            }
        },
    },
    computed: {
        ...mapGetters('filterModule',[
            'generateUniqueValueParameters',
            'filterProducts',
            'numberOfSearchResults'
        ]),
    },
    
}
</script>

<style>

</style>
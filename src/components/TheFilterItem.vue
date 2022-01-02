<template>
<div>
    <h5 class="card-title">{{ title }}</h5>
    <div class="btn-group mb-2">
    <button
        :class="[
            'btn',
            'btn-sm',
            'btn-outline-secondary',
            [activeElement == filter ? 'btn-warning' : ''],
        ]"
        :style="[numberOfSearchResults(filterName, filter) == 0 ? 'opacity: 0.4' : '']"
        :key="index"
        v-for="(filter, index) in generateUniqueValueParameters[filterName]"
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
import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['title', 'filterName'],
    emits: ['filterValue'],
    data() {
        return {
            activeElement: '',
        }
    },
    methods: {
        ...mapActions(['changeLimitDownload']),
        activeFilter(filter) {
            this.changeLimitDownload(100)    
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
import { createStore } from 'vuex'

import basketModule from './modules/basket.module'
import requestModule from './modules/request.module'
import filterModule from './modules/filter.module'

export default createStore({
    state() {
        return {
            products: [],
            product: {},
            usd: 80,
        }
    },
    getters: {
        products: state => {
            return state.products
        },
        product: state => {
            return state.product
        },
    },
    mutations: {
        setProductsToState: (state, products) => {
            state.products = products
        },
        setProductToState: (state, product) => {
            state.product = product
        }, 
    },
    modules: {
        basketModule, requestModule, filterModule,
    }
})
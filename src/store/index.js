import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            tyres: [],
            usd: 80,
        }
    },
    getters: {
        newTyres(state) {
            return state.tyres.filter(tyre => tyre.id <= 5)
        }
    }
})
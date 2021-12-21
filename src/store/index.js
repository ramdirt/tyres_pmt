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
            return state.tyres.splice(15, 5)
        }
    }
})
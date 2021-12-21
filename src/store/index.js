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
        },
        newTypeFilter(state) {
            // получаем все значения в поле тип
            let arrayTypeAll = []
            for (let index in state.tyres) {
                arrayTypeAll.push(state.tyres[index].type);
            }

            // удаляем дубли типов
            let arrayTypeUnique = arrayTypeAll.filter((type, index) => {
                return arrayTypeAll.indexOf(type) === index;
            })

            return arrayTypeUnique
        }
    }
})
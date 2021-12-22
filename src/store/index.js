import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            tyres: [],
            diameter: '',
            shore: '',
            usd: 80,
        }
    },
    getters: {
        filterTyres: state  => {
            if (state.diameter && !state.shore) {
                return state.tyres.filter(tyre => tyre.meta.tyre_diameter === state.diameter)
            } else if (state.diameter && state.shore) {
                return state.tyres
                    .filter(tyre => tyre.meta.tyre_diameter === state.diameter)
                    .filter(tyre => tyre.meta.hardness_compound === state.shore)
            } else if (state.shore) {
                return state.tyres.filter(tyre => tyre.meta.hardness_compound === state.shore)
            } else {
                return state.tyres
            }
        },
        generateNameParameters: (state) => {
            const uniqueNameParameters = []

            for (let tyre in state.tyres) {
                const tyreMeta = state.tyres[tyre].meta

                for (let index in tyreMeta) {
                    uniqueNameParameters.push(index)
                }

                break;
            }
            return uniqueNameParameters
        },
        generateUniqueValueParameters: (state, getters) => {
            const result = {}

            // получить список всех уникальных параметров товара
            const parameters = getters.generateNameParameters
            for (let name in parameters) {
                // получаем список все значений итерируемого параметра товара
                const listValuesAll = []
                for (let tyre in state.tyres) {
                    let value = state.tyres[tyre].meta[parameters[name]]
                    listValuesAll.push(value)
                }

                // удаляем дубликаты итерируемого параметра
                const listValuesUnique = listValuesAll.filter((value, index) => {
                    return listValuesAll.indexOf(value) === index;
                }) 

                // на выходе должен быть объект в виде {'параметр': [уникальные значения]}
                result[[parameters[name]]] = listValuesUnique.sort()
            }

            return result
        }
    },
    mutations: {
        changeFilter(state, payload) {
            state.diameter = payload.diameter
            state.shore = payload.shore
        }
    }
})
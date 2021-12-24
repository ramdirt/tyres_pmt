import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state() {
        return {
            products: [],
            diameter: '',
            shore: '',
            usd: 80,
            url: 'https://tyres-pmt-default-rtdb.europe-west1.firebasedatabase.app/tyres.json',
        }
    },
    getters: {
        filterTyres: state  => {
            if (state.diameter && !state.shore) {
                return state.products.filter(product => product.meta.tyre_diameter === state.diameter)
            } else if (state.diameter && state.shore) {
                return state.products
                    .filter(product => product.meta.tyre_diameter === state.diameter)
                    .filter(product => product.meta.hardness_compound === state.shore)
            } else if (state.shore) {
                return state.products.filter(product => product.meta.hardness_compound === state.shore)
            } else {
                return state.products
            }
        },
        products: state => {
            return state.products
        },
        generateNameParameters: (state) => {
            const uniqueNameParameters = []

            for (let index in state.products) {
                const tyreMeta = state.products[index].meta

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
                for (let product in state.products) {
                    let value = state.products[product].meta[parameters[name]]
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
        },
        setProductsToState: (state, products) => {
            state.products = products
        }
    },
    actions: {
        async getProductsFromAPI({commit, state}) {
            return await axios(state.url, {
                method: 'GET',
            })
            .then((products) => {
                commit('setProductsToState', products.data)
                return products.data;
            })
            .catch((error) => {
                console.log(error)
                return error
            })
        }
    }
})
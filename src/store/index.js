import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state() {
        return {
            products: [],
            product: {},
            basket: [],
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
        product: state => {
            return state.product
        },
        basket: state => {
            return state.basket
        },
        generateNameParameters: state => {
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
        },
    },
    mutations: {
        changeFilter(state, payload) {
            state.diameter = payload.diameter
            state.shore = payload.shore
        },
        setProductsToState: (state, products) => {
            state.products = products
        },
        setProductToState: (state, product) => {
            state.product = product
        },
        actionsBasket: (state, {action, id}) => {
            const searchInBasket = (id) => {
                if (state.basket.filter(product => product.id == id) == false) {
                    return false
                } else {
                    return true
                }
            }
            const addToBasket = (id) => {
                const product = state.products.filter(product => product.id == id).shift()
                state.basket.push({
                    quantity: 1,
                    id: product.id,
                    title: product.title,
                    price: product.price
                })
            }
            const removeFromBasket = (id) => {
                const index = state.basket.findIndex(product => product.id == id)
                state.basket.splice(index, 1)
            }

            
            if (action == 'increase') {
                for (let index in state.basket) {
                    if (state.basket[index].id == id) {
                        state.basket[index].quantity += 1
                    }
                }
            } else if (action == 'decrease') {
                for (let index in state.basket) {
                    if (state.basket[index].id == id) {
                        if (state.basket[index].quantity > 1) {
                            state.basket[index].quantity -= 1
                        } else {
                            removeFromBasket(id)
                        }
                        
                    }
                }
            } else if (action == 'add') {
                if (state.basket.length == 0) {
                    addToBasket(id)
                } else if (searchInBasket(id)) {
                    for (let index in state.basket) {
                        if (state.basket[index].id == id) {
                            state.basket[index].quantity += 1
                        } 
                    }
                } else if (!searchInBasket(id)) {
                    addToBasket(id)
                }
            }
        }
    },
    actions: {
        async getProductsFromAPI({commit, state}, id) {
            return await axios.get(state.url)
                .then((products) => {
                    if (id) {
                        const product = products.data.filter(product => product.id == id)[0]
                        commit('setProductToState', product)
                        return product;
                    } else {
                        commit('setProductsToState', products.data)
                        return products.data;
                    }

                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        },
        addToBasket({commit}, product) {
            if (product) {
                commit('addToBasket', product)
            }
        },
        actionsBasket({commit}, {action, id}) {
            commit('actionsBasket', {action, id})
        }


    }
})
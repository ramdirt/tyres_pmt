import axios from 'axios'

export default {
    namespaced: true,
    state() {
        return {
            url: 'https://tyres-pmt-default-rtdb.europe-west1.firebasedatabase.app/tyres.json',
        }
    },
    actions: {
        async getProductsFromAPI({commit, state}, id) {
            return await axios.get(state.url)
                .then((products) => {
                    if (id) {
                        const product = products.data.filter(product => product.id == id).shift()
                        commit('setProductToState', product, { root: true})
                        return product;
                    } else {
                        commit('setProductsToState', products.data, { root: true})
                        return products.data;
                    }

                })
                .catch((error) => {
                    console.log(error)
                    return error
                })
        }        
    }
}
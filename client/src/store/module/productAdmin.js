
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost/lookey/'
//can use axios anywhere, $axios
// Vue.prototype.http = axios

const state =  {
  products: []
  }

const mutations =  {
  initProducts(state, products) {
      state.products = products
    },
    addProduct(state, product) {
      state.products.push(product)
    },
    updateProduct(state, product) {
      let index = state.products.findIndex(c => c.id == product.id)
     console.log(index)
      if(index > -1){
        state.products[index] = product
      }
    },
    deleteProduct(state, productID) {
      let index = state.products.findIndex(c => c.id == productID)
      if(index > -1){
        state.products.splice(index, 1)
      }
    }
  }

 const actions =  {
  initProducts(context) {
    axios.get("productapi/get_all_data")
        .then(response => {
          console.log(response.data)
          context.commit("initProducts", response.data)
        })
    },
    addProduct(context, product) {
     
      return axios.post("productapi/save", JSON.stringify(product))
        .then(response => {
          // course.id = response.data.insert_id;
          context.commit("addProduct", { id : response.data.insert_id, ...this.addProduct})
        })
    },
    updateProduct(context, product) {
      console.log(product);
      return axios.post("productapi/update", JSON.stringify(this.updateProduct))
        .then(response => {
          context.commit("updateProduct", product)
        })
    },
    deleteProduct(context, productID) {
     
      return axios.post("productapi/delete", JSON.stringify({ id : productID}))
        .then(response => {
          context.commit("deleteProduct", productID)
        })
    }
  }

  const getters =  {
    getProducts(state) {
      return state.products
    }
  }

  export default{
    state,
    getters,
    mutations,
    actions
  }
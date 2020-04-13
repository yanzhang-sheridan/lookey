import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"


import product from "./module/product"
//import status from "./module/status";
import users from "./module/users"
//import order from "./module/order";

// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex)


export const store = new Vuex.Store({

    state: {
        orders: []
    },
    mutations: {
        initOrders(state, orders) {
          state.orders = orders
        },
        addOrder(state, order) {
          state.orders.push(order)
        },
        updateOrder(state, order) {
          let index = state.orders.findIndex(c => c.id == order.id)
          if(index > -1){
            state.orders[index] = order
          }
        },
        deleteOrder(state, orderID) {
          let index = state.orders.findIndex(c => c.id == orderID)
          if(index > -1){
            state.orders.splice(index, 1)
          }
        }
      },
      actions: {
        initApp(context) {
        axios.get("http://localhost/lookey/userorderapi/get_all_data")
            .then(res => {
              context.commit("initorders", res.data)
            })
        },
        addOrder(context, order) {
          // DB İşlemi...
          return   axios.get("http://localhost/lookey/userorderapi/save", JSON.stringify(order))
            .then(res => {
              // order.id = response.data.insert_id;
              context.commit("addorder", { id : res.data.insert_id, ...order})
            })
        },
        updateOrder(context, order) {
          // DB İşlemi...
          return axio.post("http://localhost/lookey/userorderapi/update", JSON.stringify(order))
            .then(res => {
              context.commit("updateorder", order)
            })
        },
        deleteOrder(context, orderID) {
          // DB İşlemi...
          return axios.post("http://localhost/lookey/userorderapi/delete", JSON.stringify({ id : orderID}))
            .then(response => {
              context.commit("deleteorder", orderID)
            })
        }
      },
      getters: {
        getOrders(state) {
          return state.orders
        }
      },
  

    // state:{
     
    // },
    // getters,
    // mutations,
    // actions
    modules:{
        product,
        users
        //status
        //order
    }
})



const state = {
  orders: []
}

const getters = {
  getOrders(state) {
    return state.orders
  }
}


const mutations =  {
    initorders(state, orders) {
      state.orders = orders
    },
    addorder(state, order) {
      state.orders.push(order)
    },
    updateorder(state, order) {
      let index = state.orders.findIndex(c => c.id == order.id)
      if(index > -1){
        state.orders[index] = order
      }
    },
    deleteorder(state, orderID) {
      let index = state.orders.findIndex(c => c.id == orderID)
      if(index > -1){
        state.orders.splice(index, 1)
      }
    }
}

const actions = {
    initApp(context) {
      axios.get("userorderapi/get_all_data")
        .then(response => {
          context.commit("initorders", response.data)
        })
    },
    addorder(context, order) {
      // DB İşlemi...
      return axios.post("userorderapi/save", JSON.stringify(order))
        .then(response => {
          // order.id = response.data.insert_id;
          context.commit("addorder", { id : response.data.insert_id, ...order})
        })
    },
    updateorder(context, order) {
      // DB İşlemi...
      return axios.post("userorderapi/update", JSON.stringify(order))
        .then(response => {
          context.commit("updateorder", order)
        })
    },
    deleteorder(context, orderID) {
      // DB İşlemi...
      return axios.post("userorderapi/delete", JSON.stringify({ id : orderID}))
        .then(response => {
          context.commit("deleteorder", orderID)
        })
    }
  }
 
  export default{
    state,
    getters,
    mutations,
    actions
  }
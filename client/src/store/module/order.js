const state = {
    orderItems: []
}

const getters = {
  getOrderItems: state => state.orderitems
}

const mutations = {
 
    setOrderItems(state,data){
        state.orderItems = data
    },
    
    removeOrderItems(state,orderID){
        let index = state.orderItems.findIndex(c => c.id == orderID)
        if(index > -1){
            state.orderItems.splice(index, 1)
        }
    },

    pushToOrderItems(state,data){
        state.orderItems.push(data)
    },

    updateOrderItems(state, order) {
        let index = state.orderItems.findIndex(c => c.id == order.id)
        if(index > -1){
          state.orderItems[index] = order
        }
    }

}

const actions = {
   
}

export default{
  state,
  getters,
  mutations,
  actions
}
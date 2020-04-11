const state = {
    productItems:[]
}

const getters = {
    getProductItems: state=>state.productItems
}

const mutations = {
    setProductItems(state,data){
        state.productItems = data
    },
    
    removeProductItems(state,productID){
        let index = state.productItems.findIndex(c => c.id == productID)
        // state.productItems.forEach((item,index) => {
        //   if(item == data){
        //     state.productItems.splice(index,1)
        //   }
        // });
        if(index > -1){
            state.productItems.splice(index, 1)
        }
    },

    pushToProductItems(state,data){
        state.productItems.push(data)
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
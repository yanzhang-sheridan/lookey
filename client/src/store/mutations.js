export const setProductItems = (state,data) => {
    state.productItems = data
}

export const removeProductItems = (state,productID) => {
    let index = state.productItems.findIndex(c => c.id == productID)
    // state.productItems.forEach((item,index) => {
    //   if(item == data){
    //     state.productItems.splice(index,1)
    //   }
    // });
    if(index > -1){
        state.productItems.splice(index, 1)
    }
}

export const pushToProductItems = (state,data) => {
    state.productItems.push(data)
}
 //change user status
export const userStatus = (state, user) => {
    if (user) {
        state.currentUser = user
        state.isLogin = true
    }else{
        state.currentUser = null
        state.isLogin = false

    }
}

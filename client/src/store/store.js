import Vue from 'vue'
import Vuex from 'vuex'

import product from "./module/product";
//import status from "./module/status";
import users from "./module/users";

// import * as actions from './actions'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex)


export const store = new Vuex.Store({
    // state:{
     
    // },
    // getters,
    // mutations,
    // actions
    modules:{
        product,
        users//,
        //status
    }
})



const state = {
  currentUser: null,
  isLogin:false
}

const getters = {
  currentUser: state => state.currentUser,
  isLogin: state => state.isLogin
}

const mutations = {
 
  userStatus(state,user){
    if(user){
      state.currentUser = user
      state.isLogin = true
      //console.log(state.isLogin)
    }else{
      state.currentUser = null
      state.isLogin = false
    }
  },

  loginStatus(state, status){
    state.isLogin = status
  }
}

const actions = {
 
  setUser({commit},user){
      //console.log(user);
    commit("userStatus",user)
  },

  setLogin({commit},status){
    //console.log(status)
    commit("loginStatus",status)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
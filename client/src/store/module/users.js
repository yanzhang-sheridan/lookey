const state = {
  currentUser: null,
  isLogin:false,
  currentUserID:null
}

const getters = {
  currentUser: state => state.currentUser,
  isLogin: state => state.isLogin,
  currentUserID: state => state.currentUserID
}

const mutations = {
 
  userStatus(state,user){
    if(user){
      //state.currentUID = id
     state.currentUser = user
      state.isLogin = true
      
      //console.log(state.currentUID)
      console.log(state.isLogin)

    }else{
      state.currentUser = null      
      //state.currentUID = null
      state.isLogin = false
    }
  },
  userIDStatus(state, userID){
    state.currentUserID = userID
  },

  loginStatus(state, status){
    state.isLogin = status
  }
}

const actions = {
 
  setUser({commit},user){
   // console.log(id);
    commit("userStatus",user)
  },

  setUserID({commit},userID){
    // console.log(id);
     commit("userIDStatus",userID)
   },

  setLogin({commit},status){
    console.log(status)
    commit("loginStatus",status)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}
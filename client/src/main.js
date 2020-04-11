import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {store} from "./store/store.js"
import {routes} from './router'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost/lookey/'
//can use axios anywhere, $axios
Vue.prototype.http = axios

const router= new VueRouter({

    routes,
    mode:'history',
    scrollBehavior(to,from,savedPosition){
      //return {x:0,y:100}
      //return {selector: '.btn'}
      if(savedPosition){
        return savedPosition
      }else{
        return { x:0, y:0 }
      }
    }

})

// router.beforeEach((to,from,next) => {
//   if (store.getters.isLogin === false){
//     // if (to.path == '/login' || to.path == '/signup' || to.path == '/about'){
//     //     next();
//     // }else{
//     //     alert ("Please login first!");
//     //     next('/login');
//     // }
//     if (to.path == '/menu' || to.path == '/admin'){
//         alert ("Please login first!");
//         next('/login')
//      }else{
//         next()
//      }
//   }else{
//     next()
//     store.state.isLogin = true
//   }
// })
router.beforeEach((to,from,next) => {
  if (to.meta.requireAuth){
    if (store.getters.isLogin){
      next()
    }else{
      alert ("Please login first!");
      next('/login');
    }
  }else{
    next()
  }
})
 



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

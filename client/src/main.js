import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import store from "./store"
import {routes} from './router'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost/lookey/'



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



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

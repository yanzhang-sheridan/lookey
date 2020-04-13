import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {store} from "./store/store.js"
import {routes} from './router'
import axios from 'axios'
import moment from 'moment'



import { library } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)

// library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost/lookey/'
//can use axios anywhere, $axios
Vue.prototype.http = axios

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY')
  }
});

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

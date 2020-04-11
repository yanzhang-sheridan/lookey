import Vue from "vue"
import VueRouter from "vue-router"

import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//level 2
import Contact from './components/about/Contact'
import DeliveryInfo from './components/about/DeliveryInfo'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//level 3
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'




// Vue.use(VueRouter)

export const routes = [
  {path:'/', name:'homeLink', components:{
    default:Home,
    'orderingGuide':OrderingGuide,
    'delivery':DeliveryInfo,
    'history':History,
  }},
  {
    path:'/menu',
    name:'menuLink',
    component:Menu,
    meta:{
      requireAuth:true
    }
  },

  {
    path:'/admin',
    name:'adminLink',
    component:Admin,
    meta:{
      requireAuth:true
    }
  },
  {
    path:'/about',
    name:'aboutLink',
    redirect:'about/contact',
    component:About,
    children:[
      {
        path:'/about/contact',
         name:'contactLink', 
         component:Contact,
         redirect:'/personName',
         children:[
           {path:'/phone', name:'phoneNumber', component:Phone},
           {path:'/personName',name:'personName',component:PersonName}
        ],

      },
      {path:'/deliveryInfo', name:'deliveryInfoLink', component:DeliveryInfo},
      {path:'/history', name:'historyLink', component:History},
      {path:'/ordringGuide', name:'orderingGuideLink', component:OrderingGuide},
      {path:'/about/contact', redirect:'/'}

   ]
  },
  {path:'/login', name:"loginLink",component:Login},
  {path:'/signup',  name:"signupLink",component:Register},
  {path:'/*', redirect:'/'}
]

// const router= new VueRouter({

//     routes,
//     mode:'history'

// })
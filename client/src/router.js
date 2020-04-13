import Vue from "vue"
import VueRouter from "vue-router"

import Home from './components/Home'
import Menu from './components/Menu'
import Manage from './components/Manage'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//level 2
import Contact from './components/about/Contact'
import DeliveryInfo from './components/about/DeliveryInfo'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'
import UpdateOrder from "./components/manage/UpdateOrder"
import UpdateProduct from "./components/admin/UpdateProduct"

//level 3
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


//testing
import Courses from "./components/ListCourse/Courses"
import NewCourse from "./components/NewCourse"
import UpdateCourse from "./components/UpdateCourse"

import ProductsAdmin from "./components/ListProduct/ProductsAdmin"
import NewProductAdmin from "./components/NewProductAdmin"
import UpdateProductAdmin from "./components/UpdateProductAdmin"





// Vue.use(VueRouter)

export const routes = [
  {path:'/', name:'homeLink', components:{
    default:Home,
    'orderingGuide':OrderingGuide,
    'delivery':DeliveryInfo,
    'contact':Contact,
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
    path:'/manage',
    name:'manageLink',
    component:Manage,
    meta:{
      requireAuth:true
    },
    children:[
      { name : "update-parametre",  path : "/updateOrder", component : UpdateOrder},
    ]
  },

  {
    path:'/admin',
    name:'adminLink',
    component:Admin,
    meta:{
      requireAuth:true
    },
    children:[
      { name : "update-itemparam",  path : "/updateProduct", component : UpdateProduct},
    ]   
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

  { 
    path : "/courses",
      name:'courseLink',
      component : Courses,
      meta:{
        requireAuth:true
      }
  },
  
  { path : "/New",  name:'newCourseLink', component : NewCourse},
  { name : "update-course", path : "/Update", component : UpdateCourse},

  { 
    path : "/productsAdmin",
    name:'productAdminLink',
    component : ProductsAdmin,
    meta:{
      requireAuth:true
    },
  },
  
  { path : "/NewProductAdmin",  name:'newProductAdminLink', component : NewProductAdmin},
  { name : "update-productAdmin", path : "/UpdateProductAdmin", component : UpdateProductAdmin},
 
 
  {path:'/login', name:"loginLink",component:Login},
  {path:'/signup',  name:"signupLink",component:Register},
  {path:'/*', redirect:'/'}
]

// const router= new VueRouter({

//     routes,
//     mode:'history'

// })
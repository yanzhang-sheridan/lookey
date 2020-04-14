<template>
  <div id="app" >
     <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        
    <div class="container">
      <app-header></app-header>
    </div>
    <div class="container">
       <transition name="page" mode="out-in">
          <router-view></router-view>
       </transition>
    </div>
    
    <div class="container">
       <div class="row  p-5">
         <div class="col-sm-12 col-md-3">
           <router-view name='orderingGuide'></router-view>
         </div>
         <div class="col-sm-12 col-md-3">
           <router-view name='delivery'></router-view>
         </div>
          <div class="col-sm-12 col-md-3">
           <router-view name='contact'></router-view>
         </div>
          <div class="col-sm-12 col-md-3 font-weight-bold">
           <router-view name='history'></router-view>
         </div>
       </div>
    </div>
   
  </div>
</template>

<script>
  import Header from "./components/Header"
  // import NewCourse from "./components/NewCourse"
  export default {
    components:{
      appHeader:Header
      // "app-header" ok too
    }
   
  }
</script>


<style>

 .page-enter, .page-leave-active {
    opacity: 0;
    transform: translate(50px);
    transform: scale(0);
  }
  .page-enter-active, .page-leave-active {
    transition: all .5s;
  }
 
</style>

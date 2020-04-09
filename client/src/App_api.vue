<template>
  <div class="container">
    <h1 class="text-center mt-5 text-warning">Lookey</h1>
    <!-- <Courses/> -->
    <!-- <app-list></app-list> -->
    <!-- <NewCourse/> -->
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  // import Courses from "./components/ListCourse/Courses"
  // import NewCourse from "./components/NewCourse"
  export default {
  //  components:{
  //    Courses,
  //    NewCourse

  //  },
   created(){
     this.$store.dispatch("initApp")
   }
  }
</script>

<style>
  html {
    height: 100% !important;
  }

  body {
    background-color: #002436;
    /*background-image: linear-gradient(to right top, #051937, #002436, #022b2d, #203028, #32342d);*/
  }
  .page-enter, .page-leave-active {
    opacity: 0;
    transform: translate(50px);
    transform: scale(0);
  }
  .page-enter-active, .page-leave-active {
    transition: all .5s;
  }
  /*pe pea pl pla*/
  /*0   1   1   0*/
</style>

<template>
  <div class="container">
    <h1 class="text-center mt-5 text-info">Lookey</h1>
    <div class="d-flex justify-content-between mt-5 border border-dark p-5 shadow">
      <button @click="get" class="btn btn-primary mr-3">GET</button>
      <button @click="save" class="btn btn-success mr-3">SAVE</button>
      <button @click="update" class="btn btn-warning mr-3">UPDATE</button>
      <button @click="remove" class="btn btn-danger mr-3">DELETE</button>
    </div>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="(obj,key) in courses" :key="key">
        <strong> id: {{obj.id}}</strong>
        <p>{{obj.title}}</p>
        <strong class="text-danger">{{obj.couponCode}}</strong>
        <strong class="text-info">{{obj.price}}</strong>
        </li>
    </ul>


    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data(){
      return {
        courses : []

      }
    },
   
    methods : {

      


      get(){
        axios.get("http://localhost/lookey/api/get_all_data")
          .then(response => {
            this.courses = response.data
          })
      },
      save(){
        let course = {
          title:"MySQl",
          couponCode : "SQLDISCOUNT",
          price:"20"
        }
        axios.post("http://localhost/lookey/api/save", JSON.stringify(course))
        .then(response => {
          console.log(response)
        })
      },
      update(){
        let course = {
          title:"MySQl2 elite",
          couponCode : "SQL2DISCOUNT",
          price:"25", 
          id:15
        }
        axios.post("http://localhost/lookey/api/update", JSON.stringify(course))
        .then(response => {
          console.log(response)
        })
      
      },
      remove(){
         let course = {
           id:15
        }
        axios.post("http://localhost/lookey/api/delete", JSON.stringify(course))
        .then(response => {
          console.log(response)
        })
      }

    }
    // created() {
    //   this.$store.dispatch("initApp")
    // }
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
    transition: all .3s;
  }
  /*pe pea pl pla*/
  /*0   1   1   0*/
</style>

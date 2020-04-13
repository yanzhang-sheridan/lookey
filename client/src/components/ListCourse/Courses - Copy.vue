<template>
  <div class="row">
    <div class="col-md-8 offset-2 mt-5">
      <table v-if="courses.length > 0" class="table table-hover table-dark table-striped border-dark border shadow-lg">
        <thead>
        <th>#id</th>
        <th>Product</th>
        <th>Order Status</th>
        <th>Quantity</th>
        <th></th>
        </thead>
        <tbody>
          <Course v-for="course in courses" :key="course.id" :course="course" />
        </tbody>
      </table>
      <div v-else class="alert alert-primary border-0">
        No orders found.
      </div>
      <!-- <router-link
        to="/New"
        tag="button"
        class="btn-dark btn text-info float-right">
        ADD NEW
      </router-link> -->
    </div>
  </div>
</template>

<script>
  import Course from "./Course"
  export default {
    components : {
      Course
    },
   created(){
     this.$store.dispatch("initApp")
   },
    computed : {
      courses(){
        console.log(this.$store.getters.getCourses)
        return this.$store.getters.getCourses
      }
    }
  }
</script>

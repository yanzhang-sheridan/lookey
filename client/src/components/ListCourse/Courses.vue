<template>
  <div class="row">
    <div class="col-md-8 offset-2 mt-5">
      <table v-if="courses.length > 0" class="table table-hover table-dark table-striped border-dark border shadow-lg">
        <thead>
        <th>#id</th>
        <th>Course Title</th>
        <th>Course Coupon</th>
        <th>Course Price</th>
        <th></th>
        </thead>
        <tbody>
          <Course v-for="course in courses" :key="course.id" :course="course" />
        </tbody>
      </table>
      <div v-else class="alert alert-primary border-0">
        No courses found.
      </div>
      <router-link
        to="/New"
        tag="button"
        class="btn-dark btn text-info float-right">
        ADD NEW
      </router-link>
    </div>
  </div>
</template>

<script>
  import Course from "./Course"
  export default {
    components : {
      Course
    },
    computed : {
      courses(){
        return this.$store.getters.getCourses
      }
    }
  }
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
        <div class="form-group">
          <label class="text-light">Product Name</label>
          <input v-model="course.name" type="text" class="bg-dark border border-info text-info form-control" placeholder="please enter product name...">
        </div>
        <div class="form-group">
          <label class="text-light">Order Status</label>
          <input v-model="course.status" type="text" class="bg-dark border border-success text-success form-control" placeholder="please enter the quantity...">
        </div>
        <div class="form-group">
          <label class="text-light">Quantity</label>
          <input v-model="course.quantity" type="text" class="bg-dark border border-warning text-warning form-control" placeholder="please enter the total price...">
        </div>
        <!-- <div class="form-group">
          <label class="text-light">Order Date</label>
          <input v-model="course.quantity" type="text" class="bg-dark border border-warning text-warning form-control" placeholder="please enter the total price...">
        </div> -->
        <div class="button-container">
          <router-link
            to="/"
            tag="button"
            class="btn btn-outline-danger">
            ABORT
          </router-link>
          <button type="submit" class="btn btn-outline-success">UPDATE</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        course : {
          name : '',
          status : '',
          quantity : 0.0
        }
      }
    },
    methods : {
      onSubmit(){
        console.log(this.course)
        this.$store.dispatch("updateCourse", this.course)
          .then(() => {
            this.$router.push({name:'courseLink'})
          })
      }
    },
    created(){
      this.course = {
        ...this.$route.params.course
      }
    }
  }
</script>

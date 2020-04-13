<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
      
        <div class="form-group">
          <label class="text-light">#userID </label>
          <input v-model="course.userid"  class="bg-dark border border-info text-info form-control" disabled>
        </div>
        <div class="form-group">
          <label class="text-light">#ProductID</label>
          <input v-model="course.productid" type="text" class="bg-dark border border-info text-info form-control" 
               placeholder="please select a product">
        </div>
        <div class="form-group">
          <label class="text-light">Product</label>
          <input v-model="course.name" type="text" class="bg-dark border border-info text-info form-control"
                placeholder="please enter product name">
         </div>
        <div class="form-group">
          <label class="text-light">Status</label>
          <input v-model="course.status" type="text" class="bg-dark border border-success text-success form-control"
                 placeholder="please enter product status">
        </div>
        <div class="form-group">
          <label class="text-light">Quantity</label>
          <input v-model="course.quantity" type="text" class="bg-dark border border-warning text-warning form-control"
                 placeholder="please enter the quantity">
        </div>
        <div class="button-container">
          <router-link
            to="/"
            tag="button"
            class="btn btn-outline-danger">
            ABORT
          </router-link>
          <button type="submit" class="btn btn-outline-success">ADD</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        course: {
          userid: sessionStorage.getItem("userID"),
          productid: 0,
          name: '',
          status: '',
          quantity: 0.0
        }
      }
    },
    methods: {
      onSubmit() {
        this.course.userid = sessionStorage.getItem("userID"),
        this.$store.dispatch("addCourse", this.course)
          .then(() => {
            this.$router.push({name:'courseLink'})
          })
      }
    }
  }
</script>

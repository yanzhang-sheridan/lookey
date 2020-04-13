<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
        <div class="form-group">
          <label class="text-light">Order ID</label>
          <input v-model="order.id" type="text" class="bg-dark border border-info text-info form-control" disabled>
        </div>
        <div class="form-group">
          <label class="text-light">Product Name</label>
          <input v-model="order.name" type="text" class="bg-dark border border-info text-info form-control" disabled>
        </div>
        <div class="form-group">
          <label class="text-light">Product Brand</label>
          <input v-model="order.brand" type="text" class="bg-dark border border-success text-success form-control" disabled>
        </div>
        <div class="form-group">
          <label class="text-light">Size</label>
          <input v-model="order.size" type="text" class="bg-dark border border-warning text-warning form-control" disabled="">
        </div>
        <div class="form-group">
          <label class="text-light">Price/unit</label>
          <input v-model="order.price" type="text" class="bg-dark border border-warning text-warning form-control" placeholder="">
        </div>
        <div class="form-group">
          <label class="text-light">Status</label>
          <input v-model="order.status" type="text" class="bg-dark border border-warning text-warning form-control" disabled="">
        </div>
        <div class="form-group">
          <label class="text-light">Quantity</label>
          <input v-model="order.price" type="text" class="bg-dark border border-warning text-warning form-control" placeholder="">
        </div>
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
        order : {
          id :'',
          userID :'',
          productId:'',
          name : '',
          brand : '',
          size : '',
          price : 0.0,
          status : '',
          quantity:''
        }
      }
    },
    methods : {
      onSubmit(){
        this.order.status="submitting"
        this.$store.dispatch("updateOrder", this.order)
          .then(() => {
            this.$router.push("/manage")
          })
      }
    },
    created(){
      this.order = {
        ...this.$route.params.order
      }
    }
  }
</script>

<template>
  <div class="row">
    <div class="col-md-6 offset-3">
      <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
        <div class="form-group">
          <label class="text-light">Product ID</label>
          <input v-model="product.id" type="text" class="bg-dark border border-info text-info form-control" disabled>
        </div>
        <div class="form-group">
            <label class="text-light">Product Name</label>
            <input v-model="product.name" type="text" class="bg-dark border border-info text-info form-control" >
        </div>
        <div class="form-group">
          <label class="text-light">Category</label>
          <input v-model="product.category" type="text" class="bg-dark border border-info text-info form-control">
        </div>
        <div class="form-group">
          <label class="text-light">Product Brand</label>
          <input v-model="product.brand" type="text" class="bg-dark border border-success text-success form-control" >
        </div>
        <div class="form-group">
          <label class="text-light">Size</label>
          <input v-model="product.size" type="text" class="bg-dark border border-warning text-warning form-control" >
        </div>
        <div class="form-group">
          <label class="text-light">Price/unit</label>
          <input v-model="product.price" type="text" class="bg-dark border border-warning text-warning form-control" placeholder="">
        </div>
        <div class="form-group">
          <label class="text-light">Promotion</label>
          <input v-model="product.promotion" type="text" class="bg-dark border border-warning text-warning form-control" disabled="">
        </div>
        <div class="form-group">
          <label class="text-light">Image</label>
          <input v-model="product.image" type="text" class="bg-dark border border-warning text-warning form-control" placeholder="">
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
       product : {
           id :'',
           category:'',
          name : '',
           brand : '',
           size : '',
         price : 0.0,
          promtion : '',
          image:''
        }
      }
     },
     methods : {
        onSubmit(){


         this.http.post("productapi/update", JSON.stringify(product))
             .then(res => {
             console.log(res.data)
                 this.$router.push("/admin")
        
             })
      }
    },
     created(){
       this.product = {...this.$route.params.product}
     }
  }
  </script>

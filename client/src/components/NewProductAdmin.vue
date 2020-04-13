<template>
  <div class="row">
    <div class="col-md-8 offset-2">
      <form @submit.prevent="onSubmit" class="card mt-5 p-3 border border-dark bg-dark shadow-lg">
        <div class="form-group">
          <label class="text-light">Catagory</label>
          <input v-model="product.category" type="text" class="bg-dark border border-info text-info form-control"
                 placeholder="please enter a category...">
        </div>
        <div class="form-group">
          <label class="text-light">Name</label>
          <input v-model="product.name" type="text" class="bg-dark border border-info text-info form-control"
                 placeholder="please enter a name...">
        </div>
        <div class="form-group">
          <label class="text-light">Brand</label>
          <input v-model="product.brand" type="text" class="bg-dark border border-info text-info form-control"
                 placeholder="please enter a brand...">
        </div>
        <div class="form-group">
          <label class="text-light">Size</label>
          <input v-model="product.size" type="text" class="bg-dark border border-info text-info form-control"
                 placeholder="please enter a size...">
        </div>
          <div class="form-group">
          <label class="text-light">Unit Price</label>
          <input v-model="product.price" type="text" class="bg-dark border border-info text-info form-control"
                 placeholder="please enter a price...">
        </div>
        <div class="form-group">
          <label class="text-light">Promotion</label>
          <input v-model="product.promotion" type="text" class="bg-dark border border-success text-success form-control"
                 placeholder="please enter promotions">
        </div>
        <div class="form-group">
          <label class="text-light">Quantity</label>
          <input v-model="product.quantity" type="text" class="bg-dark border border-warning text-warning form-control"
                 placeholder="please enter a quantity">
        </div>
        <div class="form-group">
          <label class="text-light">Image</label>
          <input v-model="product.image" type="text" class="bg-dark border border-warning text-warning form-control"
                 placeholder="please upload a image">
        </div>
        <div class="button-container">
          <router-link
            to="/productsAdmin"
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
        product: {
          category: '',
          name: '',
          barnd: '',
          size: '',
          price: 0.0,
          promotion: '',
          quantity: 0.0,
          image: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.product)
        this.$store.dispatch("addProduct", this.product)
          .then(() => {
            this.$router.push({name:'productAdminLink'})
          })
      }
    }
  }
</script>

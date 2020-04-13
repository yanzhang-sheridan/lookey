<template>
  <div class="row">
    <div class="col-md-10 offset-1 mt-5">
      <table v-if="products.length > 0" class="table table-hover table-dark table-striped border-dark border shadow-lg">
        <thead>
        <th>#id</th>
        <th>Category</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Size</th>
        <th class="text-right">Unit Price</th>
        <th>Promotion</th>
        <th class="text-right">Quantity</th>
        <!-- <th>Image</th> -->
        <th></th>
        </thead>
        <tbody>
          <ProductAdmin v-for="product in products" :key="product.id" :product="product" />
        </tbody>
      </table>
      <div v-else class="alert alert-primary border-0">
        No products found.
      </div>
      <router-link
        to="NewProductAdmin"
        tag="button"
        class="btn-dark btn text-info float-right">
        ADD NEW
      </router-link>
    </div>
  </div>
</template>

<script>
  import ProductAdmin from "./ProductAdmin"
  export default {
    components : {
     ProductAdmin
    },
     created(){
       this.$store.dispatch("initProducts")
     },
    computed : {
      products(){
        // console.log(this.$store.getters.getProducts)
          return this.$store.getters.getProducts
      }
     
    }
  }
</script>

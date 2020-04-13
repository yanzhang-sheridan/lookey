<template>
  <div class="row">
    <div class="col-md-8 offset-2 mt-5">
      <table v-if="orders.length > 0" class="table table-hover table-dark table-striped border-dark border shadow-lg">
        <thead>
            <th>#id</th>
            <th>Product</th>
            <th>Brand</th>
            <th>size</th>
            <th>Price/unit</th>
            <th>quantity</th>
            <th>Total</th>
            <th>Order Date</th>
            <th>Status</th>
            <th></th> 
        </thead>
        <tbody>
          <Order v-for="order in orders" :key="order.id" :order="order" />
        </tbody>
      </table>
      <div v-else class="alert alert-primary border-0">
        No orders found.
      </div>
      <router-link
        to="/menu"
        tag="button"
        class="btn-dark btn text-info float-right">
        ADD NEW
      </router-link>
       <transition name="page" mode="out-in">
        <router-view></router-view>
       </transition>
    </div>
  </div>
</template>

<script>
  import Order from "./manage/Order"
  export default {

  //  data(){
  //       return{
  //           orders:[],
  //           unitPrice:0,
  //           totalPrice:0
  //           // getProductItems:{}
  //       }
  //   },
    
    components: {
        Order
    },

  created(){
     this.$store.dispatch("initOrders")
  },

   computed : {
     
       orders(){
           return this.$store.getters.getOrders
       }
   },

   methods: {
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
}

  }

 </script>

<style>
  html {
    height: 100% !important;
  }

  /* body {
    background-color: #002436;
    /*background-image: linear-gradient(to right top, #051937, #002436, #022b2d, #203028, #32342d);
  } */
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
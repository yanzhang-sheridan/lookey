<template>
  <tr>
    <td class="text-danger"># {{ product.id }}</td>
    <td class="text-info">{{ product.category }}</td>
    <td class="text-info">{{ product.name }}</td>
    <td class="text-info">{{ product.brand }}</td>
    <td class="text-info">{{ product.size }}</td>
    <td class="text-info text-right">{{  formatPrice(product.price) }} $</td>
    <td class="text-success"> {{ product.promotion}}</td>
    <td class="text-warning font-italic text-right">{{  formatPriceInt(product.quantity) }}</td>
    <td>
      <button @click="$store.dispatch('deleteProduct', product.id)" class="btn btn-sm btn btn-outline-danger">DELETE</button>
      <router-link
        :to="{ name : 'update-productAdmin', params : { product : product}}"
        tag="button"
        class="btn btn-sm btn btn-outline-warning">
        UPDATE
      </router-link>
    </td>
  </tr>
</template>
<script>
  export default {
   props : ["product"],

   created(){
     console.log(this.product)
   },
   
   methods: {
      
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
         formatPriceInt(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
   }

  }
</script>

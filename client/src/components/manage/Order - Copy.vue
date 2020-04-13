<template>
  <tr>
    <td class="text-danger"># {{ order.id }}</td>
    <td class="text-info">{{ order.name }}</td>
    <td class="text-success">{{ order.brand }}</td>
    <td class="text-success">{{ order.size }}</td>
    <td class="text-success">{{ order.price}}</td>
    <td class="text-success">{{ order.quantity}}</td>
    <td class="text-success">{{ formatPrice(order.price * order.quantity)}}</td>
    <td class="text-success">{{ order.orderedDt  | formatDate }}</td>
    <td class="text-warning font-italic">{{order.Status}}</td>
    <td>
      <button @click="$store.dispatch('deleteOrder', order.id)" class="btn btn-sm btn btn-outline-danger">DELETE</button>
      <router-link
        :to="{ name : 'update-parametre', params : { order : order}}"
        tag="button"
        class="btn btn-sm btn btn-outline-warning">
        UPDATE
      </router-link>
    </td>
  </tr>
</template>
<script>
  export default {
    // props : {
    //   order : {
    //     type : Object,
    //     required : true
    //   }
    // }
    props : ["order"],
    methods: {
      formatPrice(value) {
          let val = (value/1).toFixed(2).replace('.', ',')
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    }
  }
</script>

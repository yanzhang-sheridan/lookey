<template>
  <tr>
    <td class="text-danger"># {{ course.id }}</td>
    <td class="text-info">{{ course.name }}</td>
    <td class="text-success"> {{ course.status}}</td>
    <td class="text-warning font-italic">{{ course.quantity }}</td>
    <td>
      <button @click="$store.dispatch('deleteCourse', course.id)" class="btn btn-sm btn btn-outline-danger">DELETE</button>
      <router-link
        :to="{ name : 'update-course', params : { course : course}}"
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
    //   course : {
    //     type : Object,
    //     required : true
    //   }
    // }
    props : ["course"]
  }
</script>

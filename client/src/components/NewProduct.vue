<template>
    <form class="card mt-5 p-5 border border-dark bg-light">
        <h3 class="text-muted my-5">Add New Product</h3>
        <div class="form-goup row">
            <label class = "col-sm-2">Category</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newProduct.category">
            </div>
        </div>
        <div class="form-goup row">
            <label class = "col-sm-2">Product</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newProduct.name">
            </div>
        </div>
        <p><strong>Details</strong></p>
        <div class="form-goup row">
            <label class = "col-sm-2">Brand</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newProduct.brand">
            </div>
        </div>
        <div class="form-goup row">
            <label class = "col-sm-2">Size</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newProduct.size">
            </div>
        </div>
        <div class="form-goup row">
            <label class = "col-sm-2">Price</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newProduct.price">
            </div>
        </div>
        <div class="form-goup row">
            <label class = "col-sm-2">Promotion</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newProduct.promotion">
            </div>
        </div>
         <div class="form-goup row">
            <label class = "col-sm-2">Image</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newProduct.image">
            </div>
        </div>
        <div class="form-group row">
            <button @click="addProductItem" type="button" class="btn btn-success btn-block">ADD</button>
        </div>

    </form>
</template>
<script>
// import axios from 'axios'
export default {
    data(){
        return {
            newProduct:{}
        }

    },
    methods:{
        addProductItem(){
            //console.log(this.newProduct);
            let formData = {
                category: this.newProduct.category,
                name:this.newProduct.name,
                brand:this.newProduct.brand,
                size:this.newProduct.size,
                price:this.newProduct.price,
                promotion:this.newProduct.promotion,
                image:this.newProduct.image

            }
            // this.http.post("productapi/save", JSON.stringify(formData))
            //         .then(res => {
            //             //console.log(res.data);
            //             this.$router.push({name:'menuLink'})
            //         })

             // sychronize to vuex
            this.http.post("productapi/save", JSON.stringify(formData))
                 .then(res => {
                    //  console.log({id : res.data.insert_id, ...formData})
                     let data = {id : res.data.insert_id, ...formData}
                     console.log(data)
                     this.$store.commit("pushToProductItems",data)

                 })
      }

       
       
    }
   
}
</script>
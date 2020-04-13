<template>
    <div class="row">
        <div class="col-sm-12 col-md-7">
            <app-new-product></app-new-product>
        </div>
        <div class="col-sm-12 col-md-5">
            <h3 class="text-muted my-5">Products</h3>
            <table class="table">
                <thead class="table table-default">
                    <tr>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>DELETE</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody v-for="product in getProductItems" :key = "product.id">
                    <tr>
                        <td>{{product.name}}</td>
                        <td>{{product.brand}}</td>
                        <td>{{product.size}}</td>
                        <td>{{product.price}}</td>
                        <td>
                            <button @click="deleteData(product)" class="btn btn-outline-danger btn-sm">&times;</button>
                        </td>
                        <td>
                            <router-link
                                :to="{ name : 'update-productAdmin', params : { product : product}}"
                                tag="button"
                                class="btn btn-sm btn btn-outline-warning">
                                go
                            </router-link>
                             <!-- <router-link
                                :to="{ name : 'update-itemparam', params : {product : product}}"
                                tag="button"
                                class="btn btn-sm btn btn-outline-warning">
                                go
                            </router-link> -->
                             <!-- <button @click="ModifyData(product)" class="btn btn-outline-warning btn-sm">go</button> -->
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import NewProduct from './NewProduct.vue'
    // import axios from 'axios'
    export default {
        props : ["product"],
        data(){
            return{
                productItems:[]
            }
        },
        components:{
            'app-new-product': NewProduct
        },
        computed:{
                 //get data from vuex
            getProductItems:{

                get(){         
                   console.log(this.$store.state.productItems)   
                   // return this.$store.state.productItems
                    return this.$store.getters.getProductItems

                },
                set(){

                }

            }
        },
        created(){
              this.http.get("productapi/get_all_data")
               .then(res => {
                  
                   //console.log(res.data);
                  console.log(res.data);
                   const data = res.data
                   let productArray=[]
                   for (let key in data ){
                      // console.log(key)
                       //console.log(data[key])
                    //    data[key].id = key
                       productArray.push(data[key])
                    }
                    this.productItems = productArray
                   //console.log(productArray)
                    //sychronize the data
                  // this.$store.commit = ('setProductItems',productArray)
               })
        },
      
        methods:{
            deleteData(item){
                console.log(item.id)
                //axios.post
                this.http.post("productapi/delete", JSON.stringify({ id : item.id}))
                    .then(res => { 
                        console.log(item.id);
                        this.$store.commit('removeProductItems',item.id)
                     })
            },
        //    ModifyData(item){
        //        console.log(item.id)
        //        this.$router.push({ name : 'update-itemparam', params : {product : item}})
        //         //axios.post
        //         // this.http.post("productapi/delete", JSON.stringify({ id : item.id}))
        //         //     .then(res => { 
        //         //         console.log(item.id);
        //         //         this.$store.commit('removeProductItems',item.id)
        //         //      })
        //     }
        }
    }
  
</script>
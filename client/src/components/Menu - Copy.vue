<template>
    <div class="row">
        <!-- menu -->
        <div class="col-sm-12 col-md-8">
            <table class="table table-hover  table-striped border-secondary border shadow-lg mt-5">
                <thead class="thead-default thead-white">
                    <tr>
                        <th>Product</th>
                        <!-- <th>Brand</th>
                        <th>Size</th> -->
                        <th>Price</th>
                        <th>Promotion</th>
                        <th>Add to Cart</th>
                    </tr>
                </thead>
                <tbody v-for="item in getProductItems" :key="item.id">
                     <tr>
                        <td><strong>{{item.brand}} {{item.name}} {{item.size}}</strong></td>
                        <!-- <td>{{item.brand}}</td>
                        <td>{{item.size}}</td>-->
                         <td>{{item.price}}</td>
                        <td>{{item.promotion}}</td>
                        <td><button @click="addToBasket(item)" class="btn sm btn-outline-success">+</button></td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
           <!-- {{baskets}} -->
        <div class="col-md-4 col-sm-12">
            <div v-if="baskets.length>0">
                <table class="table table-hover table-secodary table-striped border-dark border shadow-md mt-5">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantities</th>
                            <th>Products</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in baskets" :key=item.name>
                        <tr>
                            <td>
                                <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
                                <span>{{item.quantity}}</span>
                                <button class="btn btn-sm" @click="increaseQuantity(item)" >+</button>
                            </td>
                            <td>{{item.brand}} {{item.name}} {{item.size}}</td>
                            <td class="text-right">{{formatPrice(item.price * item.quantity)}}</td>
                        </tr>
                    </tbody>
                </table>
                <p><span class="float-right" >Total: {{total + "$"}}</span></p>
                <button @click="addOrderItem" class="btn btn-success btn-block mt-5 p-1 ">Place Order</button>
              
            </div>
             <div class="mt-5 p-3" v-else>
                <h3 class="text-warning font-weight-bold mt-5">{{basketText}}</h3>
             </div>
             <div class="p-3">
                <button @click="manageOrders" class="btn btn-success btn-block">Manage Orders</button>
             </div>
        </div>

    </div>
 
</template>
<script>
export default {
    data(){
        return{
            baskets:[],
            basketText:"The cart is empty",
            // getProductItems:{}
        }
    },
    computed:{
        getProductItems(){
            //get data from vuex, by getters
            // return this.$store.state.productItems
            return this.$store.getters.getProductItems
        },
        getCurrentUserID(){
            //get data from vuex, by getters
            // return this.$store.state.productItems
            return this.$store.getters.currrentUserID
        },
        total(){
            let totalCost = 0;
            for (let index in this.baskets){
                let individualItem = this.baskets[index]
                totalCost += individualItem.price*individualItem.quantity
             
            }
            return  this.formatPrice(totalCost)
        }

    },
    created(){
        this.fetchData()
    },
    methods:{
       
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }, 

        fetchData(){
            //   axios.get("productapi/get_all_data")
            //    .then(res => this.getProductItems = res.data)
            // this.http.get("productapi/get_all_data")
            //     .then(res => this.getProductItems = res.data)

            //put the requested data into vuex
             this.http.get("productapi/get_all_data")
                .then(res => this.$store.commit("setProductItems",res.data))
                  
                 
        },
        addToBasket(item){
           let basket = {
                id:item.id,
                name:item.name,
                size:item.size,
                price:item.price,
                promotion:item.promotion,
                quantity:1
            }
            if (this.baskets.length>0){
                let result = this.baskets.filter((basket) => {
                    return (basket.name === item.name && basket.price === item.price)
                })
                
                if (result != null && result.length > 0){
                    result[0].quantity++
                }else{
                    this.baskets.push(basket)
                }

            }else{
                  this.baskets.push(basket)
            }


          
        },
        decreaseQuantity(item){
            item.quantity--;
            if (item.quantity<=0){
                this.removeFromBasket(item)
            }

        },
        increaseQuantity(item){
             item.quantity++;
        },
        removeFromBasket(item){
            this.baskets.splice(this.baskets.indexOf(item),1)
        },

        addOrderItem(){

            //console.log(this.baskets);
            console.log(sessionStorage.getItem("userID"))

           
           
                let data = {}
                let orderArray = []
                for (let key in this.baskets){
                        // console.log(key)
                        //console.log(data[key])
                        data = {
                        userid: sessionStorage.getItem("userID"),
                        productid: this.baskets[key].id,
                        name: this.baskets[key].name,
                        quantity:  this.baskets[key].quantity,
                        status: 'processing'
                        }
                    //    data[key].id = key
                        orderArray.push(data)
                }
                console.log(orderArray)

                    console.log(JSON.stringify(orderArray))
              
                    this.http.post("orderapi/saveBatch", JSON.stringify(orderArray))
                      .then(res => {
                                          console.log(res.data)
                                          alert("Thanks for your order!")
                                          this.$router.push({name:'courseLink'})

                      })
                                   
        },  

        manageOrders(){
               this.$router.push({name:'courseLink'})
        }
   

    }
}
</script>
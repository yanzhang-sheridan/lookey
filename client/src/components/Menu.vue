<template>
    <div class="row">
        <!-- menu -->
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
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
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantities</th>
                            <th>Goods</th>
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
                            <td>{{item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Total: {{total + "$"}}</p>
                <button class="btn btn-success btn-block">Submit</button>
            </div>
             <div v-else>
                {{basketText}}
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
        total(){
            let totalCost = 0;
            for (let index in this.baskets){
                let individualItem = this.baskets[index];
                totalCost += individualItem.price*individualItem.quantity;
            }
            return totalCost;
        }

    },
    created(){
        this.fetchData()
    },
    methods:{
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
        }

    }
}
</script>
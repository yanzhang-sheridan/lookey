<template>
    <div class="row">
               
       <div class="col-sm-12 col-md-8">

          <div class="row">
            <div class="col-lg-8" style="margin:20px">
                <!-- <div class="input-group">
                    <span class="input-group-btn">
                        <button class="btn btn-default align-left" type="button"><span class="text-success font-weight-bold">SEARCH</span></button>
                    </span>
                    <input type="text" v-model="searchText" class="form-control" placeholder="Search for...">
                </div> -->
          
                <!-- <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text"  v-model="searchText" class="form-control" placeholder="Search">
                </div> -->
                <div class="input-group">
                    <input class="form-control py-2" v-model="searchText"  type="search" value="search" id="example-search-input">
                    <span class="input-group-append">
                        <button class="btn btn-outline-success" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
                </div>

             </div>
          </div>


      



           <div class="row">
                 
                        <div class="col-md-4 col-sm-6" v-for="item in searchResult" :key="item.id">
                            <!-- <a class="portfolio-link" data-toggle="modal" :href="obj.link"> -->
                                
                            <!-- <img class="img-fluid" :src="obj.img" alt=""> -->
                                    
                            <div>
                                <p font-weight-bold>{{item.brand}} {{item.name}} {{item.size}}</p>
                                <p class="text-muted">{{item.price}}</p>
                                <p class="text-danger">{{item.promotion}}</p>
                                <button @click="addToBasket(item)" class="btn sm btn-outline-success">+</button>
                            </div>
                        </div>
                  
           </div>
        
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
            searchText:'',
            productItems:[]
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
        },
        searchResult() {
            if (this.searchText) {
            // console.log(this.info)
                return this.productItems.filter(
                    item =>
                    item.name.indexOf(this.searchText) > -1 
                );
            } else {
                return this.productItems
            }
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
                .then(res => {
                    this.$store.commit("setProductItems",res.data)
                    let productArray=[]
                    const data = res.data
                    for (let key in data ){
                        // console.log(key)
                        //console.log(data[key])
                        productArray.push(data[key])
                    }
                    this.productItems = productArray
                    // console.log(searchResult)
                })
              
                 
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
<style>
.has-search .form-control {
 padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

</style>
<template>
    <div class="row md-3">
        <div class="col-md-8  offset-2">
            <!-- <div class="card  mt-5">
                <div class="crad-body"> -->
                    <img class="mx-auto d-block" src="../assets/lookey.png" alt="" >
                    <form @submit.prevent="onSubmit" class="card p-5 border border-dark bg-light shadow-lg" >
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="email"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" v-model="password"/>
                        </div>
                        <button type="submit" class="btn btn-block btn-success">Login</button>
                    </form> 
                <!-- </div>
            </div>-->
        </div>  
      

        <!-- <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="crad-body">
                    <img class="mx-auto d-block" src="../assets/lookey.png" alt=""> 
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" v-model="email"/>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" v-model="password"/>
                        </div>
                        <button type="submit" class="btn btn-block btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>-->      
    </div> 
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    //components shouwei
    beforeRouteEnter:(to,from,next)=>{
        next (vm => vm.$store.dispatch("setUser",null))
    },
    methods:{
        onSubmit(){
            axios.get("userapi/get_all_data")
               .then(res => {
                  // console.log(res.data);
                  const data = res.data
                  const users = []
                  for (let key in data){
                      const user = data[key]
                      //console.log(user)
                      users.push(user)
                  }
                  //console.log(users)
                  //filtering data
                  let result = users.filter((user)=>{
                      return user.email === this.email && user.password === this.password
                  })
                  //console.log(result)
                  if (result != null && result.length > 0){
                      this.$store.dispatch("setUser",result[0].name)
                      this.$router.push({name:"homeLink"})
                  }else{
                      alert("Wrong email or password!")
                          this.$store.dispatch("setUser",null)
                  }

          //context.commit("initCourses", response.data)
            })
            
        }
    }
}
</script>
</template>
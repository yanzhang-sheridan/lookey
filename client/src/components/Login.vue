<template>
    <div class="row md-3">
        <div class="col-md-12 col-lg-12">
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
        </div>      
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
                      this.$router.push({name:"homeLink"})
                  }else{
                      alert("Wrong email or password!")
                  }

          //context.commit("initCourses", response.data)
            })
            
        }
    }
}
</script>
</template>
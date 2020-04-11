<template>
    <div class="row md-3">
       <div class="col-md-8  offset-2">
            <img class="mx-auto d-block" src="../assets/lookey.png" alt="" >
            <form @submit.prevent="onSubmit" class="card p-5 border border-dark bg-light shadow-lg" >
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" class="form-control" v-model="email"/>
                </div>
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" class="form-control" v-model="name"/>
                </div>
                    <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" v-model="password"/>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Passwwod</label>
                    <input type="password" class="form-control" v-model="confirmPassword"/>
                </div>
                <div class="form-group">
                    <label for="phone">Your Phone</label>
                    <input type="text" class="form-control" v-model="phone"/>
                </div>
                <button type="submit" class="btn btn-block btn-success">Sign Up</button>

            </form>
           
        </div>      
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email:'',
            password:'',
            confirmPassword:'',
            name:'',
            phone:''
        }
    },
    methods:{
        onSubmit(){
            //console.log(this.email);
            if (this.password === this.confirmPassword){
                const formData = {
                    email:this.email,
                    password:this.password,
                    //confirmPassword:this.confirmPassword
                    name:this.name,
                    phone:this.phone
                }

                 axios.post("userapi/save", JSON.stringify(formData))
                    .then(res => this.$router.push({name:'loginLink'}))
                       // console.log(res);

                    // course.id = response.data.insert_id;
                    // context.commit("addCourse", { id : response.data.insert_id, ...course})
                    // })

            } else {
                alert("Password not matching!")
            }


        }
    }
}
</script>
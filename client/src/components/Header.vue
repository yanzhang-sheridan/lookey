<template>  
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light font-weight-bold" >
            <a class="py-2" href="#">
                <img src="../assets/eye.png" alt="lookey" height="24" width="24" />
             <!-- <svg xmlns="../assets/lookey.svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg> -->
            </a>
            <a href="/" class="navbar-brand ml-1 font-italic">Lookey</a>
            <ul class="navbar-nav">
                <li><router-link :to="{name:'homeLink'}" class="nav-link">HOME</router-link></li>
                <li><router-link :to="{name:'menuLink'}" class="nav-link">ORDER</router-link></li>
                <li><router-link :to="{name:'courseLink'}" class="nav-link">MANAGE</router-link></li>
                <!-- <li><router-link :to="{name:'manageLink'}" class="nav-link">MANAGE</router-link></li> -->
                <li><router-link :to="{name:'adminLink'}" class="nav-link">PRODUCTS</router-link></li>
                <li><router-link :to="{name:'productAdminLink'}" class="nav-link">ADMIN</router-link></li>
                <li><router-link :to="{name:'aboutLink'}" class="nav-link">ABOUT</router-link></li>
          
                <!-- <li><router-link :to="{name:'courseLink'}" class="nav-link">COURSE</router-link></li>
                <li><router-link :to="{name:'productAdminLink'}" class="nav-link">PRODUCTS</router-link></li> -->
               
            </ul>
            <ul class="navbar-nav ml-auto">
                <li><router-link :to="{name:'loginLink'}" v-show="!isLogin" class="nav-link">LOGIN</router-link></li>
               
                <li class="nav-link text-success"><strong>{{currentUser}}</strong></li>

                <li><router-link :to="{name:'loginLink'}" v-show="isLogin" @click="clearData"
                class="nav-link">[LOGOUT]</router-link></li>
                              
                <li><router-link :to="{name:'signupLink'}" v-show="!isLogin" class="nav-link">SIGNUP</router-link></li>
            </ul>
        </nav>

    </header>

    
</template>

<script>
export default {
//     data(){
//         // return{
//         //     homelink:'/'
//         //}
//     }
// }
    computed:{
        currentUser(){
            return this.$store.getters.currentUser
        },

        isLogin(){
            console.log(this.$store.getters.isLogin)
            return this.$store.getters.isLogin
        }
    },
    methods:{
        clearData(){
            sessionStorage.setItem("userID",null)
        }
    }

}
</script>

<style scoped>

    li > a:hover,
    li > a:focus {
        text-decoration: none;
        background-color: silver !important; /*Change rollover cell color here*/
    }

    .navbar-default .navbar-nav > li > a {
        color: white  !important ;/*Change active text color here*/
    } 



</style>
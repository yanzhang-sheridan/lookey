<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>Welcome to Lookey</h1>
                <h2>Shop your products now</h2>
                <button @click="goToLogin" class="btn btn-success">Let's Go</button>
             </div>
    
        </div>
    </div>
    
</template>

<script>
export default {
    methods:{
        goToLogin(){
        //     this.$router.go(-1) //back to last page
        // 
            // this.$router.replace('/menu')             //point to a link
            // this.$router.replace({name:'menuLink'})  //by name
            //this.$router.push('/menu'); //
           if (this.$store.getters.isLogin){
                this.$router.push({name:'menuLink'});
           }else{
                 this.$router.push({name:'loginLink'});
           }
        }

    }
}
</script>
<style>
    #home{
        background: url('../assets/shopping.png');
        height:85vh;
        padding:10%;
    }
    h1,h2{
        margin:6%;
    }
    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        padding:20px 0;
    }
</style>
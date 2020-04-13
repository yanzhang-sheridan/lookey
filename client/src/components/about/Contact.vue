<template>
    <div class="card text-dark bg-light mb-3">
        <div class="card-header font-weight-bold">Contact Us</div>
        <div class="card-body">
            <h4 class="card-title">Contact Us</h4>
            <p class="card-text">hungrybirds@imm2020.com</p>
            <router-link :to="{name:'phoneNumber'}">PHONE</router-link>
            <router-link :to="{name:'personName'}">CONTACTS</router-link>
            <router-view></router-view>

        </div>
    </div>
    
</template>

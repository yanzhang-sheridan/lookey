<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <div class="list-group mb-5">
                    <router-link tag="li" class="nav-link" :to="{name:'historyLink'}">
                        <a href="" class="list-group-item list-group-item-action">Order History</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'contactLink'}">
                        <a href="" class="list-group-item list-group-item-action">Contact Us</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'orderingGuideLink'}">
                        <a href="" class="list-group-item list-group-item-action">Ordering Guide</a>
                    </router-link>
                    <router-link tag="li" class="nav-link" :to="{name:'deliveryInfoLink'}">
                         <a href="" class="list-group-item list-group-item-action">Track Delivery</a>
                    </router-link>
                </div>

              
            </div>
            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
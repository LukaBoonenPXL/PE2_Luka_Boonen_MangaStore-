import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Shop from "@/views/Shop.vue";
import Cart from "@/views/Cart.vue";
import Detail from "@/views/Detail.vue";
import Login from "@/views/Login.vue";
import Checkout from "@/views/Checkout.vue";
import Confirmation from "@/views/Confirmation.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/Shop', component: Shop ,  name: 'product-list',},
        {path: '/Cart', component: Cart},
        {path: '/Detail/:id', component: Detail, name: 'product-detail', props: true},
        {path: "/Login", component: Login },
        {path: '/Checkout', component: Checkout},
        {path: '/Confirmation', component: Confirmation}
    ]
})

export default router
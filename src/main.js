import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import app from './App.vue'
import index from './views/index.vue'
import news from './views/news.vue'
import products from './views/products.vue'
import productsCategory2 from './views/products-category2.vue'
import productsDetails from './views/products-details.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes:[
        { path:'/',name:'Home',component: index},
        { path:'/news',name:'News',component: news},
        { path:'/products',name:'products',component: products},
        { path:'/products-category2',name:'products-category2',component: productsCategory2},
        { path:'/products-details',name:'products-details',component: productsDetails},
    ]
})


createApp(app)
.use(router)
.mount('#app')

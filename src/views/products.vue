<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import appHeader from '../components/header.vue'
import pageBanner from '../components/page-banner.vue'
import appFooter from '../components/footer.vue'

const products = reactive([])
const bgPic = computed(()=>{
    let src = products.map(it=>it.pic[0])
    return {
        'background-image': `url(${src})`,
        'background-size': 'cover'
    }
})

fetch('./src/data/product.json')
    .then(res => res.json())
    .then(data => {
        Object.assign(products, data.products)
    })
    .catch(err => console.log(err))


</script>

<template>
    <appHeader ann="ANNOUNCEMENT" />
    <pageBanner page="嚴選商品 PRODUCTS" />
    <div class="inner-content products-category1">
        <div class="container">
            <ul class="category-list">
                <li class="pd-category1-item" v-for="product in products" :key="product.id">
                    <a class="image_box lazy" href="/products-category2" :style="{'background-image':`url(${product.pic[0]})`}">
                        <h6>{{ product.name }}</h6>
                        <div class="more">
                            <p>查看更多</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <appFooter />
</template>

<style lang="scss" scoped>
// 產品主分類
.products-category1 {
    ul.category-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 0 10%;
        li.pd-category1-item {
            flex: 48% 0 0;
            aspect-ratio: 1/1;
            margin-bottom: 1.5%;
            position: relative;
            overflow: hidden;
            a.image_box {
                display: block;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                transition: .5s;
            }
            h6 {
                color: #fff;
                font-size: 1.5rem;
                position: absolute;
                margin-bottom: 20px;
                padding-left: 20px;
                bottom: 0;
                left: 0;
                right: 0;
                text-shadow: 1px 1px 3px #777;
                border-left: 25px solid #fff;
                border-bottom: 2px solid #fff;
            }
            .more {
                color: #fff;
                position: absolute;
                right: 0;
                top: 0;
                bottom: 0;
                transform: translateX(100%);
                background-color: rgba($primary-color, .8);
                display: block;
                text-align: center;
                line-height: 60px;
                transition: .5s;
                width: 60px;
                writing-mode: vertical-lr;
                letter-spacing: 2px;
            }
            &:hover {
                a.image_box{
                    background-position: right;
                }
                .more {
                    transform: translateX(0);
                }
            }
        }
    }
}
</style>

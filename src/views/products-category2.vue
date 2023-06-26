<script setup>
import {  reactive } from 'vue'
import { NRow, NCol,NGrid,NGi, NSpace, NPagination } from 'naive-ui';
import appHeader from '../components/header.vue'
import pageBanner from '../components/page-banner.vue'
import pdSideList from '../components/pd-side-list.vue'
import appFooter from '../components/footer.vue'


const products = reactive([])


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
    <div class="inner-content products-category2">
        
        <n-space justify="center">
            <n-row gutter="12">
                <n-col :span="20" :offset="4">
                    <div class="side-title">
                        <h2>[產品分類]</h2>
                    </div>
                </n-col>
                <n-col :span="4" :offset="4">
                    <pdSideList/>
                </n-col>
                <n-col :span="12" :offset="1">
                    <ul class="pd-category2">
                        <li class="pd-category2-item" v-for="product in products" :key="product.id">
                            <a href="/products-details">
                                <div class="image_box lazy"><img :src="product.pic[0]" alt="" /></div>
                                <div class="pd-info">
                                    <p class="name">{{ product.name }}</p>
                                    <p class="model">{{ product.model }}</p>
                                    <p class="price">
                                        ${{ product.price }}
                                        <span class="old-price">
                                            ${{ product.oldprice }}
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <n-pagination v-model:page="page" :page-count="100" />
                    <!-- <nav aria-label="navigation">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">«</span><span class="sr-only">Previous</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span><span class="sr-only">Next</span></a>
                                </li>
                            </ul>
                        </nav> -->
                </n-col>
            </n-row>
        </n-space>
    </div>

    <appFooter />
    <n-grid x-gap="12" :cols="4">
        <n-gi>
            <div class="light-green" >
            AAAAAAAAAA
            </div>
        </n-gi>
        <n-gi>
            <div class="green" >
            BBBBBBBBBB
            </div>
        </n-gi>
        <n-gi>
            <div class="light-green" >
            CCCCCCCCCC
            </div>
        </n-gi>
        <n-gi>
            <div class="green" >
            DDDDDDDDDD
            </div>
        </n-gi>
    </n-grid>
</template>

<style lang="scss" scoped>
// 產品主分類
.products-category2 {
    .pd-category2 {
        display: flex;
        flex-wrap: wrap;

        .pd-category2-item {
            flex: 30% 0 0;
            padding: 0 10px;
            margin: 0 10px 60px;

            .image_box {
                margin-bottom: .5rem;
                transition: .3s;
                background-color: #eee;

                img {
                    width: 100%;
                    aspect-ratio: 1/1;
                    object-fit: contain;
                    vertical-align: middle;
                }
            }

            .pd-info {
                color: #000;

                .name {
                    font-weight: 700;
                }

                .model {
                    margin-bottom: 10px;
                }

                .price {
                    color: $price-color;
                }

                .old-price {
                    color: #777;
                    font-size: 14px;
                    padding: 0 10px;
                    text-decoration: line-through;
                }
            }

            &:hover {
                .image_box {
                    opacity: .85;
                }
            }
        }
    }
}
</style>

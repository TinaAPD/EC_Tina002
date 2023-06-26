<script setup>
import { reactive } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Navigation, Thumbs } from 'swiper';


import { NRow, NCol, NGrid, NGi, NSpace, NPagination } from 'naive-ui';
import appHeader from '../components/header.vue'
import pageBanner from '../components/page-banner.vue'
import pdSideList from '../components/pd-side-list.vue'
import appFooter from '../components/footer.vue'


const products = reactive([])
const productPic = reactive([])


fetch('./src/data/product.json')
  .then(res => res.json())
  .then(data => {
    Object.assign(products, data.products)
    Object.assign(productPic, data.products.forEach((item) => {
      productPic.push(item.pic)
      console.log(productPic)
    }))
  })
  .catch(err => console.log(err))

// onMounted(() => {
//   products.forEach((item) => {
//     productPic.push(item.pic)
//   })
// })

let thumbsSwiper = null;

const setThumbsSwiper = (swiper) => {
  thumbsSwiper = swiper;
};
const modules = [FreeMode,Navigation,Thumbs];



</script>

<template>
  <appHeader ann="ANNOUNCEMENT" />
  <pageBanner page="嚴選商品 PRODUCTS" />
  <div class="inner-content products-details">
    <n-space justify="center">
      <n-row gutter="12">
        <n-col :span="20" :offset="4">
          <div class="side-title">
            <h2>[產品分類]</h2>
          </div>
        </n-col>
        <n-col :span="4" :offset="4">
          <pdSideList />
        </n-col>
        <n-col :span="12" :offset="1">
          <div class="row pd-details-top">
            <n-col :span="10">
              <swiper :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules" class="mySwiper2 pdMainPic">
                <swiper-slide v-for="picsrc in productPic">
                  <img :src="picsrc" />
                </swiper-slide>
                <!-- <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide> -->
              </swiper>
              <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true"
                :watchSlidesProgress="true" :modules="modules" class="mySwiper pdThumbPic">
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </swiper-slide>
                <swiper-slide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </swiper-slide>
              </swiper>
            </n-col>
            <n-col :span="12" :offset="2">
              <div class="pd-info">
                <p class="name">植物精油保養體驗組</p>
                <p class="model">Product 10ml 70% + oil </p>
                <p class="short">100% 原裝產品，
                  這款新一代面膜是一款居家的臉部專用保養品，有效地去角質並修復毛孔瑕疵，去除細紋和皺紋。不含矽、生物可用配方具有高度飽水性，友善混合性肌膚，根據您的肌膚需求量身打造。</p>
                <p class="price">售價 $1200<span class="old-price">$1600</span></p>
              </div>
              <div class="pd-selector">
                <form action="">
                  <select name="product-type">
                    <option value="">請選擇款式</option>
                    <option value="美白">美白</option>
                    <option value="控油">控油</option>
                    <option value="保濕">保濕</option>
                    <option value="緊緻">緊緻</option>
                  </select>
                </form>
              </div>
              <div class="cart-item-quantity">
                <div class="number-spinner">
                  <button class="minus" type="button" data-dir="down">-</button>
                  <input type="text" value="1" />
                  <button class="plus" type="button" data-dir="up">+</button>
                </div>
              </div>
              <div class="buy-btn">
                <button>加入購物車</button>
              </div>
            </n-col>
            <div class="social-share">
              <ul>
                <li> <a href="#"><i class="fa-brands fa-twitter"> </i></a></li>
                <li> <a href="#"><i class="fa-brands fa-facebook-f"> </i></a></li>
                <li> <a href="#"><i class="fa-brands fa-google-plus-g"> </i></a></li>
                <li> <a href="#"> <i class="fa-brands fa-line"> </i></a></li>
                <li> <a href="#"> <i class="fa-brands fa-instagram"> </i></a></li>
                <li> <a href="#"> <i class="fa-brands fa-youtube"></i></a></li>
                <li> <a href="#"> <i class="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div class="pd-details-full">
              <ul class="nav nav-tabs">
                <li><a class="active" data-toggle="tab" href="#pd-dt-01">Home</a></li>
                <li><a data-toggle="tab" href="#pd-dt-02">Menu 1</a></li>
                <li><a data-toggle="tab" href="#pd-dt-03">Menu 2</a></li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade active show" id="pd-dt-01">
                  <h3>HOME</h3>
                  <p>Some content.</p>
                  <div class="pic"> <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" /></div>
                </div>
                <div class="tab-pane fade" id="pd-dt-02">
                  <h3>Menu 1</h3>
                  <p>Some content in menu 1.</p>
                  <div class="pic"> <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" /></div>
                </div>
                <div class="tab-pane fade" id="pd-dt-03">
                  <h3>Menu 2</h3>
                  <p>Some content in menu 2.</p>
                  <div class="pic"> <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </n-col>
      </n-row>
    </n-space>
  </div>

  <appFooter />
</template>

<style lang="scss" scoped>
// 產品內頁
.products-details {
  .pd-details-top {
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      background-size: cover;
      background-position: center;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .swiper {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }

    .pdMainPic {
      height: 80%;
      width: 100%;
    }

    .pdThumbPic {
      height: 20%;
      box-sizing: border-box;
      padding: 10px 0;

      .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .swiper-slide-thumb-active {
        opacity: 1;
      }
    }

    .pd-info {
      padding: 1rem 0;

      .name {
        font-size: 2rem;
        font-weight: 900;
      }

      .short {
        font-size: .9rem;
        padding: 2rem 0;
      }

      .old-price {
        color: #777;
        font-size: 14px;
        padding: 0 10px;
        text-decoration: line-through;
      }
    }

    .pd-selector {
      width: 200px;

      form {
        // width: 100%;
        margin-bottom: 10px;
        border: 1px solid #ddd;

        select {
          width: 100%;
          height: 2.5rem;
          outline: none;
          border: none;
        }

        .input-group-btn button,
        .input-text {
          height: 2.5rem;
        }

        .input-text {
          width: calc(100% - 60px);
          text-align: center;
          border: none;
        }

        .input-group-btn button {
          border: none;
          outline: none;
        }
      }
    }

    .buy-btn {
      button {
        background-color: $secondary-color;
        border: none;
        padding: 5px 15px;
        width: 200px;
      }
    }
  }

  .social-share {
    margin: 30px 0 0;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 20px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;

      li {
        flex: 70px 0 0;
        text-align: center;
      }

      a {
        font-size: 22px;
        color: $primary-color;

        &:hover {
          color: $highlight-color;
        }
      }
    }
  }

  .pd-details-full {
    .nav-tabs {
      a {
        display: block;
        padding: 10px 15px;
        color: $primary-color;

        &.active {
          background-color: rgba($primary-color, .4);
        }
      }
    }

    .tab-content {
      padding: 30px 0;

      h3 {
        font-size: 20px;
        margin-bottom: 10px;
      }

      p {
        margin-bottom: 10px;
      }
    }
  }
}

.side-title {
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  margin-bottom: 20px;
}
</style>

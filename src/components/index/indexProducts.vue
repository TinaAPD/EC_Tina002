<script setup>
import { reactive } from 'vue'
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Grid, Pagination } from 'swiper'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/grid';
import 'swiper/css/pagination';


const modules = [Grid, Pagination]
const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const indexIntro = reactive({})
const products = reactive([])

fetch('./src/data/product.json')
  .then(res => res.json())
  .then(data => {
    Object.assign(indexIntro,data.indexIntro)
    Object.assign(products,data.products)
})
.catch( err => console.log(err))


defineProps({
  mainTitle: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

</script>

<template>
  <div class="index-content index-features">
    <div class="fea-title">
      <div class="container"> 
        <div class="main-title">
          <h2>[ {{ mainTitle.zh }} ]</h2>
          <p> {{ mainTitle.en }} </p>
        </div>
      </div>
    </div>
    <div class="inner-container container">
      <div class="fea-carousel">
        <swiper class="index-fea" 
          :slidesPerView="2"
          :grid="{
            rows: 2,
          }"
          :spaceBetween="20" 
          :modules="modules"
          :pagination="{
            clickable: true,
          }"
          @swiper="onSwiper" 
          @slideChange="onSlideChange"
          >
          <swiper-slide v-for="product in products" >
            <img :src="product.pic[0]" alt=""/>
          </swiper-slide>
        </swiper>
      </div>
      <div class="fea-intro">
        <div class="container">
          <div class="row">
            <div class="top-block col-md-12" data-aos="fade-up" data-aos-delay="100">
              <div class="txt">
                <h4>{{ indexIntro.title }}</h4>
                <p>{{ indexIntro.txt }}</p>
              </div>
            </div>
            <div class="link-block col-md-12" data-aos="fade-up" data-aos-delay="200">
              <h4><a href="/">{{ indexIntro.btnmore }}</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-features{
  background-image: url(@/assets/images/grid-01.png);
  background-position: left bottom;
  background-size: 35%;
  background-repeat: no-repeat;
  .inner-container {
    display: flex;
  }
}

.fea-carousel{
  position: relative;
  height: 70vh;
  flex: 50% 0 0;
  margin-bottom: 60px;
  width: 50%;
}

.swiper.index-fea{
  width: 100%;
  height: 100%;
  max-width: 30vw;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100% - 40px) / 2) !important;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  img{    
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.fea-intro{
  flex: 50% 0 0;
  .top-block{
    padding: 20px;
    background-color: rgba($secondary-color,.05);
    border-radius: 10px;
    text-align: center;
    height: 50vh;
    margin-bottom: 3vh;
    transition: .3s;
    position: relative;
    &:before{
      content: url(@/assets/images/quote.png);
      position: absolute;
      top: -20px;
      right: 6%;
    }
    .txt{
      width: 65%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
    h4{
      font-size: 1.2rem;
      font-weight: 900;
    }
    p{
      font-size: 1rem;
    }
  }
  .link-block{
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    background: url(@/assets/images/stone-bg.png);
    a{
      color: #555;
      display: block;
    }
  }
}

</style>

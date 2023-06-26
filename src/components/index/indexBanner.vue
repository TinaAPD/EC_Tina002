<script setup>
import { reactive } from 'vue'
import { NCarousel } from 'naive-ui';
const banner = reactive({})

fetch('./src/data/banner.json')
.then(res => res.json())
.then(data => {
  Object.assign(banner,data.banner)
})

</script>

<template>
  <div class="banner-index">
    <div class="side-guide"> 
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"> <span>scroll down</span></div>
    </div>
    <div class="index-banner">
      <n-carousel direction="vertical" dot-placement="right">
        <div class="carousel-img" v-for="banner in banner">
          <img :src=" banner.imgsrc"/>
          <div class="bn-title"> 
            <h1>{{ banner.title }}</h1>
          </div>
        </div>
      </n-carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-index{
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  z-index: 1;
  .side-guide{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 12%;
    .box1,.box3{
      flex-basis: 40%;
    }
    .box2{
      flex-basis: 20%;
      position: relative;
      &:before{
        content: "";
        width: 15px;
        height: 15px;
        border: 1px solid #222;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .box3{
      position: relative;
      span{
        font-size: 10px;
        writing-mode: vertical-lr;
        padding: 2em 0;
        border-left: 1px solid #222;
        position: absolute;
        top: 50%;
        left: 55%;
        transform: translate(-50%,-50%);
        &:after{
          content: "";
          width: 5px;
          height: 5px;
          border-top: 1px solid #222;
          border-right: 1px solid #222;
          position: absolute;
          left: -3px;
          bottom: 0;
          transform: rotate(135deg);
        }
      }
    }
  }
  .index-banner{
    position: absolute;
    left: 12%;
    width: 88%;
    height: 100%;
  }
  .carousel-img {
    display: flex;
    img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
    .bn-title{
      position: absolute;
      left: 2em;
      bottom: 2em;
      padding: 2em 4em;
      height: auto;
      aspect-ratio: 5/3;
      background-color: rgba($tertiary-color,.2);
    }
  }
}
</style>

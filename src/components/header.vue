<script setup>
import { reactive } from 'vue'

const menus = reactive([])

fetch(`./src/data/public.json`)
.then( res => res.json())
.then(
  data =>{
    Object.assign(menus, data.menus)
})
.catch( err => console.log(err))

// defineProps({
//   ann: String,
//   menus: {
//     type: Array,
//     required: true
//   }
// })
defineProps({
    ann: String,
})
</script>

<template>
  <header>
    <div class="announce-bar"><span>{{ ann }}</span><span class="btn-group"> 
      <a href="#"> 登入</a>
      <a href="#"> 繁中</a>
      <a href="#"> 購物車</a></span></div>
    <nav class="nav-wrap--outer">
      <div class="nav-wrap--logo"><a class="brand pull-left" href="index.html" target="_blank"><img
            src="@/assets/images/logo.png" alt="Logo"></a></div>
      <div class="nav-wrap--inner">
        <ul class="navbar-nav anchor-nav">
          <li v-for="menu in menus">
            <a :href="menu.link">{{ menu.title }}</a>
          </li>
        </ul><a class="mobileMenu-trigger d-block d-md-none d-lg-none d-xl-none" href="#"
          onclick="menuTrigger(event)"><span></span></a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header{
  position: fixed;
  top: 0;
  left: 0; right: 0;
  background-color: rgba(255,255,255,.9);
  z-index: 100;
}
.announce-bar{
  position: relative;
  color: #fff;
  background-color: $primary-color;
  text-align: center;
  .btn-group{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $secondary-color;
    padding: 0 .5em;
    a{
      color: #222;
      font-size: 12px;
      padding: 0 2em;
    }
  }
}
.nav-wrap {
  &--outer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
  }
  &--logo{
    position: absolute;
    top: 26px;
    left: 0;
    width: 12%;
    img{
      width: 100%;
    }
  }
  &--inner {
    position: relative;
    flex-grow: 1;
  }
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  li {
    position: relative;
    a {
      padding: 6px 20px;
      line-height: 80px;
      font-size: 18px;
      color: $text-color;
    }
  }
  li:first-child{
    position: relative;
  }
  @include max-screen(767px) {
    display: none;
  }
}
</style>


<script setup>
import { reactive, onMounted ,computed} from 'vue'
import appHeader from '../components/header.vue'
import appFooter from '../components/footer.vue'


import indexBanner from '../components/index/indexBanner.vue'
import indexProducts from '../components/index/indexProducts.vue'
import indexNews from '../components/index/indexNews.vue'
import indexAbout from '../components/index/indexAbout.vue'
import indexFaq from '../components/index/indexFaq.vue'
import indexContact from '../components/index/indexContact.vue'


const mainTitle = reactive({})

fetch(`./src/data/public.json`)
.then( res => res.json())
.then(
  data =>{
    Object.assign(mainTitle, data.mainTitle)
})
.catch( err => console.log(err))

// const XHR = new XMLHttpRequest()
// XHR.open("GET",`./src/data/${lang.value}.json`)
// XHR.responseType = "json"
// XHR.onload = function(res){
//     // console.log(res)
//     Object.assign(menus, res.target.response.menus)
//     // console.log(menus)
// }
// XHR.send()

</script>

<template>
  <appHeader ann="ANNOUNCEMENT"/>
  <indexBanner/>
  <indexProducts :mainTitle= "mainTitle.product"/>
  <indexNews :mainTitle="mainTitle.news"/>
  <indexAbout :mainTitle="mainTitle.about"/>
  <indexFaq :mainTitle="mainTitle.faq"/>
  <indexContact :mainTitle="mainTitle.contact"/>
  <appFooter/>
  <!-- <appFooter :footerMenus="footerMenus" :footer="footer"/> -->
</template>

<style lang="scss">
// 導入全域樣式，style不要加scoped。(此處變數及@mixin、@extend無作用)
// @import "@/assets/scss/_colors.scss";
@import "@/assets/reset.scss";
@import "@/assets/costom.scss";
</style>

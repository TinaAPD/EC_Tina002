<script setup>
import { ref,reactive,computed } from 'vue'

const menus = reactive([])
const footer = reactive({})
const footerMenus = computed(()=>{
  return menus.filter(menu => menu.title !== "首頁")
})

fetch(`./src/data/public.json`)
.then( res => res.json())
.then(
  data =>{
    Object.assign(menus, data.menus)
    // Object.assign(mainTitle, data.mainTitle)
    Object.assign(footer, data.footer)
})
.catch( err => console.log(err))

// defineProps({
//   footerMenus: {
//     type: Array,
//     required: true
//   },
//   footer: {
//     type: Object,
//     required: true
//   }
// })

</script>

<template>
<footer>
    <div class="footer-container">
      <div class="footer-intro"><img class="logo" :src="footer.imgsrc" alt="Logo">
        <p>{{ footer.short }}</p>
      </div>
      <div class="footer-info container">
          <div class="info info-contact" v-for="contact in footer.contact">
            <h5>{{ contact.title }}</h5>
            <ul >
              <li> <i class="fa-solid fa-phone"/>{{ contact.phone }}</li>
              <li> <i class="fa-solid fa-map-pin"/>{{ contact.address }}</li>
              <li> <i class="fa-solid fa-envelope"/>{{ contact.mail }}</li>
            </ul>
          </div>
          <div class="info">
            <h5  v-for="menu in footerMenus">
              <a :href="menu.link">{{ menu.title }}</a>
            </h5>
          </div>
          <div class="info">
            <h5>FAQ</h5>
            <h5>隱私權政策</h5>
          </div>
      </div>
    </div>
    <div class="copyright">{{ footer.copyright }}</div>
</footer>
<div class="fixed-action-btn">
  <div class="box1"></div>
  <div class="box2"></div>
  <div class="box3"><a class="scale-transition" id="backTop" title="回頂端"><span>Go Up</span></a></div>
</div>
</template>

<style lang="scss" scoped>
footer {
  padding: 10vh 0 0;
  font-size: 1rem;
  background: $footer-color;
  position: relative;
  .footer-container{
    display: flex;
    z-index: 2;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .footer-intro{
      margin-bottom: 50px;
      text-align: center;
      .logo{
        width: 120px;
        margin-bottom: 20px;
      }
      p{
        text-align: left;
        font-size: 14px;
      }
    }
    .footer-info {
      font-size: 14px;
      margin: 20px auto 40px;
      padding-top: 40px;
      width: 100%;
      display: flex;
      .info{
        flex: 10% 1 0;
        &-contact{
          flex-grow: 2;
        }
      }
      .info{
        h5{
          margin-bottom: 10px;
          font-weight: 700;
          font-size: 1rem;
        }
        a{
          color: #222;
          &:hover{
            color: $secondary-color;
          }
        }
        ul{
          margin-top: 25px;
        }
        li{
          margin-bottom: 5px;
        }
        i{
          font-size: .9rem;
          margin-right: 10px;
        }
      }
    }
  }
  .copyright{
    text-align: center;
    font-size: 10px;
    line-height: 3;
    padding: 5px 0;
  }

  .footerPhone {
    i {
      font-size: 3rem;
      color: $primary-color;
    }
  }
  .footerMail {
    i {
      font-size: 3rem;
      color: $action-color;
    }
  }
  .footer-social {
    margin-bottom: 2.5rem;
    .social {
      justify-content: center;
    }
  }
  .footer-bottom {
    padding: 25px 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #ddd;
    background: darken($primary-color, 30%);
    .address a {
      color: $secondary-color;
      &:hover, &:focus {
        color: #fff;
      }
    }
    .copyright {
      font-size: 0.9375rem;
      padding-top: 5px;
    }
  }
  
  .footer-social {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .footerLine, .footerFB, .footerPhone, .footerMail {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 10px;
    a {
      text-align: center;
    }
    i {
      font-size: 3.375rem;
    }
    span {
      display: block;
      padding: 5px 0;
      color: $text-color;
    }
  }
  .footerLine {
    i {
      color: $line-color;
    }
    a:hover, a:focus {
      span {
        color: $line-color;
      }
    }
  }
  .footerFB {
    i {
      color: $facebook-color;
    }
    a:hover, a:focus {
      span {
        color: $facebook-color;
      }
    }
  }
}
</style>

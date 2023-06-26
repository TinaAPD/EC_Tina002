<script setup>
import { ref, reactive } from 'vue'

const abouts = reactive([])

fetch('./src/data/about.json')
  .then(res => res.json())
  .then(data => {
    Object.assign(abouts, data.abouts)
  })
  .catch(err => console.log(err))

defineProps({
  mainTitle:{
    type:Object,
    required: true,
    default: () => ({})
  }
})
</script>


<template>
  <div class="index-content index-about">
    <div class="main-title">
      <h2>[ {{ mainTitle.zh }} ]</h2>
      <p>{{ mainTitle.en }}</p>
    </div>
    <div class="about-group">
      <div class="about-item" v-for="about in abouts">
        <div class="item-banner">
          <img class="bgpic" :src="about.pic" :alt="about.title">
          <img class="icon" :src="about.icon" alt="">
        </div>
        <div class="item-describe">
          <h5>{{ about.title }}</h5>
          <p>{{ about.short }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-about {
  position: relative;

  .about-group {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    height: 72vh;
    width: calc(100vw - 250px);
    margin-left: 50px;

    .about-item {
      flex: 18vh 0 1;
      overflow: hidden;
      display: flex;
      transition: .5s;

      &:hover {
        flex: 50% 0 0;
      }

      &:nth-child(even) {
        flex-direction: row-reverse;

        .item-describe {
          color: #fff;
          background-color: $primary-color;
        }
      }

      .item-banner {
        flex-basis: 50%;
        position: relative;

        .icon {
          width: 50px;
          height: 50px;
          color: #fff;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        img.bgpic {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .item-describe {
        flex-basis: 50%;
        background-color: $gray-300;
        position: relative;

        h5 {
          line-height: 18vh;
          text-align: center;
          font-size: 1.2rem;
        }

        p {
          text-align: center;
          font-size: 1rem;
          padding: 0 2rem;
        }
      }
    }
  }
}
</style>

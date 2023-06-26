<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

const indexNews = reactive({})
const news = reactive([])
const hotnews = computed(()=>{
  return news.slice(0,3)
})
const monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

fetch('./src/data/news.json')
  .then(res => res.json())
  .then(data => {
    Object.assign(indexNews, data.indexNews)
    Object.assign(news, data.news.map(it => {
      let newsYear;
      let newsMonth;
      let newsMonthName;
      let newsDay;
      [newsYear, newsMonth, newsDay] = it.date.split("/")
      newsMonthName = monthName[newsMonth - 1]
      return {
        ...it,
        newsYear,
        newsMonth,
        newsDay,
        newsMonthName,
      }
    }))
    // Object.assign(news,data.news)
  })
  .catch(err => console.log(err))

defineProps({
  mainTitle: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>


<template>
  <div class="index-content index-news">
    <div class="news-title">
      <div class="container">
        <div class="main-title">
          <h2>[ {{ mainTitle.zh }} ]</h2>
          <p>{{ mainTitle.en }}</p>
        </div>
      </div>
    </div>
    <div class="inner-container container">
      <ul class="news-list">
        <li class="news-item" v-for="newsitem in hotnews">
          <a href="case.html" target="_blank">
            <div class="pic">
              <img :src="newsitem.pic" :alt="newsitem.title">
            </div>
            <div class="date">
              <div class="month">{{ newsitem.newsMonthName }}</div>
              <div class="day">{{ newsitem.newsDay }}</div>
            </div>
            <div class="txt">
              <h6>{{ newsitem.title }}</h6>
              <p>{{ newsitem.short }}</p>
            </div>
            <div class="btn-more"><span>{{ indexNews.btnmoreS }}</span></div>
          </a>
        </li>
      </ul>
      <div class="link-block col-md-12" data-aos="fade-up" data-aos-delay="200">
        <h4> <a href="#">{{ indexNews.btnmoreL }}</a> </h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-news {
  background-color: #193D3F;

  .main-title {
    color: #fff;
  }
  .news-list {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5%;
    padding-left: 0;

    .news-item {
      background-color: #fff;
      flex-basis: 32%;
      margin: 20px .5%;
      list-style: none;
      padding-bottom: 60px;
      position: relative;

      a {
        color: #222;

        .pic {
          position: relative;

          &:after {
            content: url(@/assets/images/news-deco.png);
            position: absolute;
            bottom: -10px;
            left: 0;
            right: 0;
            max-width: 100%;
            overflow: hidden;
          }
        }

        img {
          width: 100%;
          transition: .5s;
        }
      }

      .date {
        float: left;
        padding: 0 5%;
        text-align: center;
        line-height: 1;
        margin-top: 10px;

        .month {
          font-size: .9rem;
        }

        .day {
          font-size: 1.5rem;
          font-weight: 900;
        }
      }

      .txt {
        padding-right: 10%;
        margin-left: 20%;
        margin-top: 10px;

        h6 {
          font-size: 1.2rem;
        }

        p {
          font-size: .8rem;
        }
      }

      .btn-more {
        text-align: center;
        position: absolute;
        left: 50%;
        right: 5%;
        bottom: 10px;
        color: #fff;
        background-color: $dark-bg;

        span {
          display: block;
          font-size: 14px;
          transition: .3s;
          line-height: 2;
        }

        img {
          width: 15px;
          margin-left: 10px;
        }
      }
    }

    @include max-screen(991px) {
      .news-item {
        flex-basis: 49%;
      }
    }

    @include max-screen(768px) {
      .news-item {
        padding-left: 5px;
        padding-right: 5px;
        background-color: #fff;
        border-bottom: 3px solid $primary-color;

        .btn-more span {
          transform: translateY(0);
        }
      }
    }
  }

  .link-block {
    color: #fff;
    text-align: right;
    background-color: rgba(#fff, .1);
    padding: 20px 0;
    vertical-align: middle;

    h4 {
      margin-bottom: 0;
      margin-right: 10%;
      padding-right: 3rem;
      position: relative;

      &:after {
        content: '\f178';
        font: normal normal normal 14px/1 FontAwesome;
        line-height: 28px;
        text-align: center;
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid #fff;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
      }

      a {
        color: #fff;
        display: block;
      }
    }
  }
}
</style>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import appHeader from '../components/header.vue'
import pageBanner from '../components/page-banner.vue'
import appFooter from '../components/footer.vue'

const news = reactive([])
const monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const indexNews = reactive({})
const menus = reactive([])

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


</script>

<template>
    <appHeader ann="ANNOUNCEMENT" />
    <pageBanner page="最新消息 News" />
    <div class="inner-content news-category1">
        <div class="container">
            <ul class="category-list">
                <li class="news-item" v-for="newsitem in news">
                    <a href="news-details.html" target="_blank">
                        <div class="pic">
                            <img :src="newsitem.pic" :alt="newsitem.title" />
                        </div>
                        <div class="date">
                            <div class="month">{{ newsitem.newsMonthName }}</div>
                            <div class="day">{{ newsitem.newsDay }}</div>
                        </div>
                        <div class="txt">
                            <h6>{{ newsitem.title }}</h6>
                            <p>{{ newsitem.short }}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <appFooter/>
</template>

<style lang="scss" scoped>
// 最新消息-列表
.news-category1 {
    .category-list {
        display: flex;
        flex-wrap: wrap;
    }
}

.news-item {
    flex: 50% 0 0;
    margin-bottom: 50px;
    padding: 10px;
    box-sizing: border-box;

    a {
        color: #222;

        &:hover {
            .pic:after {
                opacity: 1;
            }
        }
    }

    .pic {
        aspect-ratio: 5/3;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            vertical-align: middle;
        }

        &:after {
            content: 'see more';
            color: #fff;
            font-size: 20px;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-image: linear-gradient(rgba($primary-color, .5), rgba($primary-color, .9));
            opacity: 0;
            transition: .3s;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .date {
        float: left;
        padding: 5px 5%;
        text-align: center;
        line-height: 1;
        margin-top: 20px;
        background-color: rgba($secondary-color, .1);

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
        margin-top: 15px;

        h6 {
            font-size: 1.2rem;
        }

        p {
            font-size: .8rem;
        }
    }
}
</style>

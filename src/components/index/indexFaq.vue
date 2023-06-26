<script setup>
import { ref, reactive } from 'vue'

const faqs = reactive([])

fetch('./src/data/faq.json')
  .then(res => res.json())
  .then(data => {
    Object.assign(faqs, data.faq)
  }
  )
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
  <div class="index-content index-faq">
    <div class="container">
      <div class="main-title">
        <h2>[ {{ mainTitle.zh }} ]</h2>
        <p>{{ mainTitle.en }}</p>
      </div>
      <div class="faq-board">
        <div class="qa-item" v-for="faq in faqs">
          <span class="question-icon"> <i class="fa-solid fa-question"></i></span>
          <p class="question" data-aos="fade-right" data-aos-delay="100">
            {{ faq.question }}
          </p>
          <p class="answer" data-aos="fade-left" data-aos-delay="100">
            {{ faq.answer }}
          </p>
          <span class="answer-icon"><i class="fa-solid fa-quote-right"></i></span>
        </div>
      </div>
      <div class="link-block col-md-12" data-aos="fade-up" data-aos-delay="200">
        <h4> <a href="#">查看更多常見問答</a> </h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-faq {
  .faq-board {
    margin: 50px 0;
  }

  .qa-item {
    border-bottom: 1px dashed #eee;
    margin: 0 0 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;

    .question,
    .answer {
      color: #666;
      line-height: 1.6;
      padding: 1rem 0;
    }

    .question {
      font-size: 15px;
      flex: 40% 0 0;
      align-self: center;
      color: $primary-color;
    }

    .answer {
      font-size: 14px;
      flex: 50% 0 0;
    }

    .question-icon,
    .answer-icon {
      color: #222;
      font-size: 10px;
      align-self: center;
      text-align: center;
      flex: 30px 0 0;
      border-left: 1px solid;
      border-right: 1px solid;
      border-color: #777;
      @extend %link-hover;
    }

    &:hover {

      .question-icon,
      .answer-icon {
        color: $secondary-color;
        border-color: $secondary-color;
      }
    }
  }

  .link-block {
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    background: url(@/assets/images/stone-bg.png);

    a {
      color: #555;
      display: block;
    }
  }
}</style>

<script setup>
import { ref } from "vue";

defineProps({
  mainTitle:{
    type:Object,
    required: true,
    default:()=>({})
  }
})
</script>

<template>
  <div class="index-content index-contact">
    <div class="container">
      <div class="main-title">
        <h2>[ {{mainTitle.zh}} ]</h2>
        <p>{{ mainTitle.en }}</p>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="contact-board" data-aos="fade-up" data-aos-delay="200">
            <div class="contact-belt">
              <p>有任何問題歡迎隨時與我們聯繫</p>
            </div>
            <form action="#">
              <div class="input-group">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="聯絡人姓名"
                    maxlength="20"
                    required=""/>
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Email"
                    maxlength="50"
                    required=""/>
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="tel"
                    placeholder="聯絡電話"
                    maxlength="50"
                    required=""/>
                </div>
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="公司名稱"
                    maxlength="50"
                    required=""/>
                </div>
                <div class="form-group">
                  <select
                    class="form-control"
                    aria-label="所在地區">
                    <option value=""></option>
                    <option value="所在地區" disabled="" selected="">
                      所在地區
                    </option>
                    <option value="基隆市">基隆市</option>
                    <option value="臺北市">臺北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園市">桃園市</option>
                    <option value="新竹市">新竹市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="臺中市">臺中市</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="臺南市">臺南市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="臺東縣">臺東縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="澎湖縣">澎湖縣</option>
                    <option value="金門縣">金門縣</option>
                    <option value="連江縣">連江縣</option>
                    <option value="海外地區">海外地區</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control input-lg"
                    rows="5"
                    placeholder="諮詢內容"></textarea>
                </div>
              </div>
              <div class="form-group">
                <div class="g-recaptcha"></div>
              </div>
              <div class="form-group">
                <div class="mmsg"></div>
              </div>
              <div class="form-btn-group">
                <span class="deco-line"></span>
                <button class="btn btn-action" type="button">送出</button>
              </div>
            </form>
            <div class="contact-social">
              <p>Follow us</p>
              <div class="ct-social-item">
                <p>line</p>
                <div class="social-qr">
                  <img src="@/assets/images/tdg.png" alt="" />
                </div>
              </div>
              <div class="ct-social-item">
                <p>facebook</p>
                <div class="social-qr">
                  <img src="@/assets/images/tdg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.index-contact {
  background-image: url(@/assets/images/contact-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  .main-title {
    margin: 0 auto;
  }
  .contact-board {
    background-color: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 60px 0;
    box-shadow: 0 0 15px -5px rgba(#000, 0.25);
    position: relative;
    padding-bottom: 30px;
    .contact-belt {
      text-align: center;
      padding: 0 0 15px;
      p {
        background-color: rgba($primary-color, 0.1);
        color: $primary-color;
        padding: 20px 0;
      }
    }
    form {
      padding: 30px 30px 0;
    }
    .input-group {
      column-count: 2;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-control {
      display: block;
    }
    input,
    select,
    textarea {
      width: 96%;
      background-color: #f7f7f7;
      border: none;
      height: calc(2em + 10px);
      padding: 0 2%;
    }
    select{
      width: 100%;
    }
    textarea {
      padding: 10px 2%;
      height: calc(16.5em + 10px);
    }
    .form-btn-group {
      text-align: right;
      position: relative;
      .btn {
        display: inline-block;
        text-align: right;
        color: #222;
        border-radius: 5px;
        background-color: $secondary-color;
        padding: 12px 2rem;
        border: 1px solid transparent;
        &:hover,
        &:active {
          background-color: darken($secondary-color, 15%);
        }
      }
      .deco-line {
        width: calc(100% - 120px);
        height: 1px;
        background-color: #eee;
        position: absolute;
        left: 0;
        top: 70%;
      }
    }
    .contact-social {
      margin-left: 30px;
      > p {
        color: $primary-color;
        font-size: 22px;
        margin-bottom: 20px;
      }
      .ct-social-item {
        display: inline-block;
        border-radius: 50px;
        background-color: rgba($tertiary-color, 0.25);
        box-shadow: 0 0 10px -5px rgba(#000, 0.25);
        text-align: center;
        padding: 5px 20px;
        margin-right: 20px;
        transition: 0.3s;
        position: relative;
        &:hover {
          background-color: rgba($tertiary-color, 0.4);
          cursor: pointer;
        }
      }
      .social-qr {
        display: none;
        position: absolute;
        bottom: -130px;
        left: 50%;
        width: 120px;
        transform: translateX(-50%);
        border: 1px solid #000;
        opacity: 0;
        transition: 0.3s;
        img {
          width: 100%;
          vertical-align: middle;
        }
        &.show {
          display: block;
          opacity: 1;
        }
      }
    }
    @include max-screen(768px) {
      margin: 30px 0;
      padding: 20px 15px 30px;
      .item-title {
        padding: 5px 0;
        font-size: 14px;
      }
    }
  }
}
</style>

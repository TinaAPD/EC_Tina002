<script setup>
import { ref,reactive } from 'vue'
const pdList = reactive([])

fetch('./src/data/product.json')
    .then(res => res.json())
    .then(data => {
        Object.assign(pdList, data.pdList)
    })
    .catch(err => console.log(err))

</script>
<template>
    <div class="pd-side-list">
        <div class="accordion">
            <div class="card" v-for="firstlist in pdList">
                <div class="card-header chosed" id="headingOne">
                    <h5 data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne">{{ firstlist.category1 }}</h5>
                </div>
                <div class="collapse show" id="collapseOne" aria-labelledby="headingOne">
                    <ul class="card-body">
                        <li v-for="seclist in firstlist.category2"><a href="#"> {{ seclist }} </a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// 產品頁側邊欄

.pd-side-list {
  position: sticky;
  top: 120px;
  border-right: 1px solid #aaa;

  .card-header {
    padding: 10px 0;
    padding-left: 30px;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      width: 12px;
      height: 12px;
      background-color: #aaa;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5px;
      transition: .5s;
    }

    &.chosed {
      &::before {
        background-color: $primary-color;
        transform: translateY(-50%) rotate(135deg);
      }
    }
  }

  .card-body {
    padding-left: 30px;
    li {
      padding: 8px 5px;
      background-color: #f7f7f7;

      a {
        color: #555;
      }
    }
  }
}
</style>
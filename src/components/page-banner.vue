<script setup>

defineProps({
    page: String
})
</script>

<template>
    <div class="page-banner">
        <div class="container page-banner-inner">
            <h2 class="page-title">{{ page }}</h2>
            <ul class="breadcrumb">
                <li>首頁</li>
                <li>最新消息 NEWS </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-banner{
  background: rgba(skyblue,.2);
  padding: 25px 0;
  &-inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid #555;
  }
  h2.page-title{
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: 1rem;
    letter-spacing: 3px;
  }
  .breadcrumb{
    background: none;
    margin-bottom: 0;
    li{
      color: #333;
      padding-right: 5px;
    }
    li + li{
      &:before{
        content:'>';
        padding-right: 5px;
      }
    }
  }
}
</style>
